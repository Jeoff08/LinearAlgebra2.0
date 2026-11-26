export interface QuizLockStatus {
  isLocked: boolean;
  warningCount: number;
  lockedAt?: string;
  unlockRequested?: boolean;
  unlockRequestedAt?: string;
  studentName?: string;
  quizTitle?: string;
}

export interface UnlockRequestItem {
  quizId: string;
  studentKey: string;
  studentName: string;
  quizTitle: string;
  requestedAt: string;
}

export interface AdminUnlockNotification {
  id: string;
  quizId: string;
  studentKey: string;
  studentName: string;
  quizTitle: string;
  requestedAt: string;
  isRead: boolean;
}

export interface StudentUnlockApprovedNotification {
  id: string;
  quizId: string;
  studentKey: string;
  quizTitle: string;
  approvedAt: string;
  isRead: boolean;
}

const STORAGE_LOCK_PREFIX = "quiz_lock_status_";
const STORAGE_UNLOCK_REQUESTS_KEY = "quiz_all_unlock_requests_v1";
const STORAGE_ADMIN_UNLOCK_NOTIFS_KEY = "admin_quiz_unlock_notifs_v1";
const STORAGE_STUDENT_APPROVED_NOTIFS_KEY = "student_quiz_unlock_approved_notifs_v1";

export function getStudentIdentifier(user?: any): string {
  if (!user) return "student";
  return (
    user.student_id ||
    user.id_number ||
    user.id ||
    user.email ||
    user.name ||
    "student"
  );
}

export function getQuizLockStatus(
  quizId: string,
  studentKey: string
): QuizLockStatus {
  if (!quizId || !studentKey) {
    return { isLocked: false, warningCount: 0 };
  }
  const key = `${STORAGE_LOCK_PREFIX}${quizId}_${studentKey}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { isLocked: false, warningCount: 0 };
    const parsed = JSON.parse(raw);
    return {
      isLocked: Boolean(parsed.isLocked),
      warningCount: Number(parsed.warningCount || 0),
      lockedAt: parsed.lockedAt,
      unlockRequested: Boolean(parsed.unlockRequested),
      unlockRequestedAt: parsed.unlockRequestedAt,
      studentName: parsed.studentName,
      quizTitle: parsed.quizTitle,
    };
  } catch (err) {
    console.error("Error reading quiz lock status:", err);
    return { isLocked: false, warningCount: 0 };
  }
}

export function recordQuizWarning(
  quizId: string,
  studentKey: string,
  quizTitle?: string,
  studentName?: string
): { warningCount: number; isLocked: boolean } {
  if (!quizId || !studentKey) return { warningCount: 0, isLocked: false };

  const currentStatus = getQuizLockStatus(quizId, studentKey);
  const newCount = Math.min(3, currentStatus.warningCount + 1);
  const isLocked = newCount >= 3;

  const updated: QuizLockStatus = {
    ...currentStatus,
    warningCount: newCount,
    isLocked,
    lockedAt: isLocked ? currentStatus.lockedAt || new Date().toISOString() : undefined,
    quizTitle: quizTitle || currentStatus.quizTitle,
    studentName: studentName || currentStatus.studentName,
  };

  const key = `${STORAGE_LOCK_PREFIX}${quizId}_${studentKey}`;
  try {
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent("quiz_lock_updated", { detail: { quizId, studentKey } })
    );
  } catch (err) {
    console.error("Error saving quiz warning:", err);
  }

  return { warningCount: newCount, isLocked };
}

export function requestQuizUnlock(
  quizId: string,
  studentKey: string,
  studentName?: string,
  quizTitle?: string
): void {
  if (!quizId || !studentKey) return;

  const resolvedStudentName = studentName || "Student";
  const resolvedQuizTitle = quizTitle || "Quiz";

  const current = getQuizLockStatus(quizId, studentKey);
  const updated: QuizLockStatus = {
    ...current,
    isLocked: true,
    unlockRequested: true,
    unlockRequestedAt: new Date().toISOString(),
    studentName: resolvedStudentName,
    quizTitle: resolvedQuizTitle,
  };

  const key = `${STORAGE_LOCK_PREFIX}${quizId}_${studentKey}`;
  try {
    localStorage.setItem(key, JSON.stringify(updated));

    // Append to global unlock requests
    const allRequests = getAllUnlockRequests();
    const existingIndex = allRequests.findIndex(
      (r) => r.quizId === quizId && r.studentKey === studentKey
    );
    const newReq: UnlockRequestItem = {
      quizId,
      studentKey,
      studentName: resolvedStudentName,
      quizTitle: resolvedQuizTitle,
      requestedAt: new Date().toISOString(),
    };
    if (existingIndex >= 0) {
      allRequests[existingIndex] = newReq;
    } else {
      allRequests.unshift(newReq);
    }
    localStorage.setItem(
      STORAGE_UNLOCK_REQUESTS_KEY,
      JSON.stringify(allRequests)
    );

    // Record notification for Admin
    const adminNotifs = getAdminUnlockNotifications();
    const newAdminNotif: AdminUnlockNotification = {
      id: `req_${Date.now()}_${quizId}_${studentKey}`,
      quizId,
      studentKey,
      studentName: resolvedStudentName,
      quizTitle: resolvedQuizTitle,
      requestedAt: new Date().toISOString(),
      isRead: false,
    };
    // Keep most recent first, max 30
    const filteredAdminNotifs = [
      newAdminNotif,
      ...adminNotifs.filter(
        (n) => !(n.quizId === quizId && n.studentKey === studentKey)
      ),
    ].slice(0, 30);
    localStorage.setItem(
      STORAGE_ADMIN_UNLOCK_NOTIFS_KEY,
      JSON.stringify(filteredAdminNotifs)
    );

    // Notify listeners & storage
    window.dispatchEvent(
      new CustomEvent("quiz_unlock_requested", {
        detail: {
          quizId,
          studentKey,
          studentName: resolvedStudentName,
          quizTitle: resolvedQuizTitle,
        },
      })
    );
    window.dispatchEvent(
      new CustomEvent("quiz_lock_updated", { detail: { quizId, studentKey } })
    );
  } catch (err) {
    console.error("Error submitting quiz unlock request:", err);
  }
}

export function adminUnlockQuiz(
  quizId: string,
  studentKey: string,
  quizTitleFallback?: string
): void {
  if (!quizId || !studentKey) return;
  const key = `${STORAGE_LOCK_PREFIX}${quizId}_${studentKey}`;
  try {
    const existing = getQuizLockStatus(quizId, studentKey);
    const resolvedTitle =
      existing.quizTitle || quizTitleFallback || "Quiz";

    localStorage.removeItem(key);

    // Remove from global requests
    const allRequests = getAllUnlockRequests().filter(
      (r) => !(r.quizId === quizId && r.studentKey === studentKey)
    );
    localStorage.setItem(
      STORAGE_UNLOCK_REQUESTS_KEY,
      JSON.stringify(allRequests)
    );

    // Mark corresponding admin notification as read or handled
    const adminNotifs = getAdminUnlockNotifications();
    const updatedAdminNotifs = adminNotifs.map((n) =>
      n.quizId === quizId && n.studentKey === studentKey
        ? { ...n, isRead: true }
        : n
    );
    localStorage.setItem(
      STORAGE_ADMIN_UNLOCK_NOTIFS_KEY,
      JSON.stringify(updatedAdminNotifs)
    );

    // Record notification for the student
    const studentNotifs = getAllStudentUnlockApprovedNotifications();
    const newStudentNotif: StudentUnlockApprovedNotification = {
      id: `appr_${Date.now()}_${quizId}_${studentKey}`,
      quizId,
      studentKey,
      quizTitle: resolvedTitle,
      approvedAt: new Date().toISOString(),
      isRead: false,
    };
    const updatedStudentNotifs = [newStudentNotif, ...studentNotifs].slice(0, 30);
    localStorage.setItem(
      STORAGE_STUDENT_APPROVED_NOTIFS_KEY,
      JSON.stringify(updatedStudentNotifs)
    );

    // Broadcast event for student & admin interfaces
    window.dispatchEvent(
      new CustomEvent("quiz_unlock_approved", {
        detail: {
          quizId,
          studentKey,
          quizTitle: resolvedTitle,
        },
      })
    );
    window.dispatchEvent(
      new CustomEvent("quiz_lock_updated", { detail: { quizId, studentKey } })
    );
  } catch (err) {
    console.error("Error unlocking quiz by admin:", err);
  }
}

export function getAllUnlockRequests(): UnlockRequestItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_UNLOCK_REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const filtered = parsed.filter(
      (r: UnlockRequestItem) =>
        r &&
        r.studentName !== "Alex Morgan" &&
        !r.studentKey?.toLowerCase().includes("alex")
    );
    if (filtered.length !== parsed.length) {
      localStorage.setItem(
        STORAGE_UNLOCK_REQUESTS_KEY,
        JSON.stringify(filtered)
      );
    }
    return filtered;
  } catch (err) {
    console.error("Error reading unlock requests:", err);
    return [];
  }
}

export function getAdminUnlockNotifications(): AdminUnlockNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_ADMIN_UNLOCK_NOTIFS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const filtered = parsed.filter(
      (n: AdminUnlockNotification) =>
        n &&
        n.studentName !== "Alex Morgan" &&
        !n.studentKey?.toLowerCase().includes("alex") &&
        !n.isRead
    );
    if (filtered.length !== parsed.length) {
      localStorage.setItem(
        STORAGE_ADMIN_UNLOCK_NOTIFS_KEY,
        JSON.stringify(filtered)
      );
    }
    return filtered;
  } catch (err) {
    console.error("Error reading admin unlock notifications:", err);
    return [];
  }
}

export function deleteAdminUnlockNotification(id: string): void {
  try {
    const raw = localStorage.getItem(STORAGE_ADMIN_UNLOCK_NOTIFS_KEY);
    if (!raw) return;
    const notifs: AdminUnlockNotification[] = JSON.parse(raw);
    if (!Array.isArray(notifs)) return;
    const updated = notifs.filter((n) => n.id !== id);
    localStorage.setItem(
      STORAGE_ADMIN_UNLOCK_NOTIFS_KEY,
      JSON.stringify(updated)
    );
    window.dispatchEvent(new CustomEvent("quiz_lock_updated"));
  } catch (err) {
    console.error("Error deleting admin unlock notification:", err);
  }
}

export function markAdminUnlockNotificationAsRead(id: string): void {
  try {
    const notifs = getAdminUnlockNotifications();
    const updated = notifs.map((n) =>
      n.id === id ? { ...n, isRead: true } : n
    );
    localStorage.setItem(
      STORAGE_ADMIN_UNLOCK_NOTIFS_KEY,
      JSON.stringify(updated)
    );
    window.dispatchEvent(new CustomEvent("quiz_lock_updated"));
  } catch (err) {
    console.error("Error marking admin notification read:", err);
  }
}

export function clearAllAdminUnlockNotifications(): void {
  try {
    localStorage.removeItem(STORAGE_ADMIN_UNLOCK_NOTIFS_KEY);
    window.dispatchEvent(new CustomEvent("quiz_lock_updated"));
  } catch (err) {
    console.error("Error clearing admin notifications:", err);
  }
}

export function getAllStudentUnlockApprovedNotifications(): StudentUnlockApprovedNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_STUDENT_APPROVED_NOTIFS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Error reading student unlock notifications:", err);
    return [];
  }
}

export function getStudentUnlockApprovedNotifications(
  studentKey: string
): StudentUnlockApprovedNotification[] {
  if (!studentKey) return [];
  const all = getAllStudentUnlockApprovedNotifications();
  return all.filter(
    (n) => n.studentKey.toLowerCase() === studentKey.toLowerCase()
  );
}

export function markStudentUnlockNotificationAsRead(id: string): void {
  try {
    const all = getAllStudentUnlockApprovedNotifications();
    const updated = all.map((n) =>
      n.id === id ? { ...n, isRead: true } : n
    );
    localStorage.setItem(
      STORAGE_STUDENT_APPROVED_NOTIFS_KEY,
      JSON.stringify(updated)
    );
    window.dispatchEvent(new CustomEvent("quiz_lock_updated"));
  } catch (err) {
    console.error("Error marking student notification read:", err);
  }
}

export function clearStudentUnlockNotifications(studentKey: string): void {
  try {
    const all = getAllStudentUnlockApprovedNotifications();
    const updated = all.filter(
      (n) => n.studentKey.toLowerCase() !== studentKey.toLowerCase()
    );
    localStorage.setItem(
      STORAGE_STUDENT_APPROVED_NOTIFS_KEY,
      JSON.stringify(updated)
    );
    window.dispatchEvent(new CustomEvent("quiz_lock_updated"));
  } catch (err) {
    console.error("Error clearing student unlock notifications:", err);
  }
}
