// =====================================================================
// Attendance Management System — Types and Storage Manager
// Real-time synchronization via localStorage + CustomEvents
// =====================================================================

export type AttendanceStatus = "present" | "late" | "absent" | "excused";

export interface AttendanceRecord {
  id: string;
  studentKey: string;      // Normalized student identifier (id or studentId)
  studentId?: string;      // Display student ID (e.g., 2026-0695A)
  studentName: string;
  subjectCode?: string;    // e.g. "MATH 101" or "ALL"
  date: string;            // YYYY-MM-DD (e.g. 2026-11-17)
  status: AttendanceStatus;
  markedAt: string;        // ISO timestamp or HH:mm:ss
  markedBy: "student" | "admin";
  notes?: string;
}

const STORAGE_ATTENDANCE_KEY = "mathworkspace_attendance_records_v1";
const STORAGE_ATTENDANCE_CONFIG_KEY = "mathworkspace_attendance_config_v1";

export interface AttendanceConfig {
  allowSelfCheckIn: boolean; // Controls whether students are permitted to mark their own attendance
  subjectOverrides?: Record<string, boolean>; // Optional per-subject overrides (e.g. { "MATH 101": false })
  subjectSchedules?: Record<string, string[]>; // e.g. { "MATH 101": ["Monday", "Wednesday", "Friday"] }
  dateOverrides?: Record<string, Record<string, boolean>>; // e.g. { "MATH 101": { "2026-11-24": true } }
}

export const ALL_WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type WeekDayName = typeof ALL_WEEK_DAYS[number];

/**
 * Retrieve the current attendance configuration (defaults to allowSelfCheckIn = true)
 */
export function getAttendanceConfig(): AttendanceConfig {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_ATTENDANCE_CONFIG_KEY) : null;
    if (!raw) return { allowSelfCheckIn: true, subjectOverrides: {}, subjectSchedules: {}, dateOverrides: {} };
    const parsed = JSON.parse(raw);
    return {
      allowSelfCheckIn: typeof parsed.allowSelfCheckIn === "boolean" ? parsed.allowSelfCheckIn : true,
      subjectOverrides: parsed.subjectOverrides || {},
      subjectSchedules: parsed.subjectSchedules || {},
      dateOverrides: parsed.dateOverrides || {},
    };
  } catch (err) {
    console.error("Error reading attendance config:", err);
    return { allowSelfCheckIn: true, subjectOverrides: {}, subjectSchedules: {}, dateOverrides: {} };
  }
}

/**
 * Check if a specific date is an active class session for a subject.
 * Takes into account weekly schedules and specific date overrides (e.g. moved / make-up classes).
 */
export function isDateScheduledForSubject(
  dateStr: string,
  subjectCode: string = "MATH 101"
): {
  isScheduled: boolean;
  isSpecialSession: boolean;
  isCancelled: boolean;
  dayOfWeek: string;
  reason?: string;
} {
  const code = (subjectCode || "MATH 101").trim().toUpperCase();
  const config = getAttendanceConfig();

  // 1. Calculate day of the week
  let dayOfWeek = "Monday";
  try {
    const parts = dateStr.split("-").map(Number);
    const dObj = new Date(parts[0], parts[1] - 1, parts[2]);
    dayOfWeek = ALL_WEEK_DAYS[dObj.getDay()] || "Monday";
  } catch {
    dayOfWeek = "Monday";
  }

  // 2. Check date-specific override (e.g. moved/make-up class opened by admin)
  if (config.dateOverrides && config.dateOverrides[code] && typeof config.dateOverrides[code][dateStr] === "boolean") {
    const override = config.dateOverrides[code][dateStr];
    if (override === true) {
      return {
        isScheduled: true,
        isSpecialSession: true,
        isCancelled: false,
        dayOfWeek,
        reason: "Special / Moved class session opened by instructor",
      };
    } else {
      return {
        isScheduled: false,
        isSpecialSession: false,
        isCancelled: true,
        dayOfWeek,
        reason: "Class session cancelled / closed for this date",
      };
    }
  }

  // 3. Fallback to weekly schedule
  const scheduledDays = getSubjectScheduleDays(code);
  const isRegular = scheduledDays.includes(dayOfWeek);

  return {
    isScheduled: isRegular,
    isSpecialSession: false,
    isCancelled: false,
    dayOfWeek,
    reason: isRegular ? "Regularly scheduled class day" : `No class session scheduled on ${dayOfWeek}s`,
  };
}

/**
 * Admin override for a specific date: opens an unscheduled date (e.g. moved class) or closes a date
 */
export function setDateSessionOverride(
  subjectCode: string,
  dateStr: string,
  override: boolean | null
): AttendanceConfig {
  try {
    const current = getAttendanceConfig();
    const code = subjectCode.trim().toUpperCase();
    const dateOverrides = { ...(current.dateOverrides || {}) };
    const subjectDateOverrides = { ...(dateOverrides[code] || {}) };

    if (override === null) {
      delete subjectDateOverrides[dateStr];
    } else {
      subjectDateOverrides[dateStr] = override;
    }

    dateOverrides[code] = subjectDateOverrides;
    current.dateOverrides = dateOverrides;

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_ATTENDANCE_CONFIG_KEY, JSON.stringify(current));
      window.dispatchEvent(
        new CustomEvent("attendance_config_updated", {
          detail: { config: current, timestamp: Date.now() },
        })
      );
    }
    return current;
  } catch (err) {
    console.error("Error saving date session override:", err);
    return getAttendanceConfig();
  }
}

/**
 * Retrieve the scheduled days of the week for a specific subject
 */
export function getSubjectScheduleDays(subjectCode: string = "MATH 101"): string[] {
  try {
    const config = getAttendanceConfig();
    const code = subjectCode.trim().toUpperCase();
    if (config.subjectSchedules && Array.isArray(config.subjectSchedules[code]) && config.subjectSchedules[code].length > 0) {
      return config.subjectSchedules[code];
    }
    // Default schedules if not customized:
    // MATH 101 -> Monday, Wednesday, Friday
    // MATH 102 -> Tuesday, Thursday
    // MATH 103 -> Monday, Wednesday
    if (code.includes("101")) return ["Monday", "Wednesday", "Friday"];
    if (code.includes("102")) return ["Tuesday", "Thursday"];
    if (code.includes("103")) return ["Monday", "Wednesday"];
    if (code.includes("GEC")) return ["Tuesday", "Thursday"];
    return ["Monday", "Wednesday", "Friday"];
  } catch (err) {
    return ["Monday", "Wednesday", "Friday"];
  }
}

/**
 * Save the scheduled days of the week for a specific subject
 */
export function setSubjectScheduleDays(subjectCode: string, days: string[]): AttendanceConfig {
  try {
    const current = getAttendanceConfig();
    const code = subjectCode.trim().toUpperCase();
    const schedules = { ...(current.subjectSchedules || {}) };
    schedules[code] = days;
    current.subjectSchedules = schedules;
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_ATTENDANCE_CONFIG_KEY, JSON.stringify(current));
      window.dispatchEvent(
        new CustomEvent("attendance_config_updated", {
          detail: { config: current, timestamp: Date.now() },
        })
      );
    }
    return current;
  } catch (err) {
    console.error("Error saving subject schedule:", err);
    return getAttendanceConfig();
  }
}

/**
 * Check if student self check-in is allowed (optionally for a specific subject)
 */
export function isSelfCheckInAllowed(subjectCode?: string): boolean {
  const config = getAttendanceConfig();
  if (subjectCode && subjectCode !== "ALL" && config.subjectOverrides) {
    const code = subjectCode.trim().toUpperCase();
    if (typeof config.subjectOverrides[code] === "boolean") {
      return config.subjectOverrides[code];
    }
  }
  return config.allowSelfCheckIn;
}

/**
 * Update the student self check-in permission (globally or for a specific subject)
 */
export function setAttendanceAllowSelfCheckIn(
  allowed: boolean,
  subjectCode?: string
): AttendanceConfig {
  try {
    const current = getAttendanceConfig();
    if (subjectCode && subjectCode !== "ALL") {
      const overrides = { ...(current.subjectOverrides || {}) };
      overrides[subjectCode.trim().toUpperCase()] = allowed;
      current.subjectOverrides = overrides;
    } else {
      current.allowSelfCheckIn = allowed;
      // If toggling globally, also sync overrides so all subjects follow the global switch
      current.subjectOverrides = {};
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_ATTENDANCE_CONFIG_KEY, JSON.stringify(current));
      window.dispatchEvent(
        new CustomEvent("attendance_config_updated", {
          detail: { config: current, timestamp: Date.now() },
        })
      );
    }
    return current;
  } catch (err) {
    console.error("Error saving attendance config:", err);
    return { allowSelfCheckIn: allowed, subjectOverrides: {} };
  }
}

/**
 * Helper to get today's date formatted as YYYY-MM-DD in local time
 */
export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Friendly subject display name resolver
 */
export function getSubjectDisplayName(subjectCode?: string): string {
  if (!subjectCode) return "Calculus with Analytic Geometry";
  const s = subjectCode.toUpperCase().trim();
  if (s.includes("103") || s.includes("LINEAR")) return "Linear Algebra";
  if (s.includes("102") || s.includes("INTEGRAL")) return "Integral Calculus";
  if (s.includes("101") || s.includes("CALCULUS")) return "Calculus with Analytic Geometry";
  if (s.includes("GEC 4") || s.includes("GEC4")) return "Mathematics in the Modern World";
  return subjectCode;
}

/**
 * Determine a student's officially enrolled subject (e.g. "MATH 101 - 80062", "MATH 103 - 80132", "GEC 4 - 50371")
 */
export function getStudentEnrolledSubject(studentOrUser?: any): string {
  if (!studentOrUser) return "MATH 101";

  // 1. Explicit property if present on user or student item
  const directSub =
    studentOrUser.subjectCode ||
    studentOrUser.subject_code ||
    studentOrUser.enrolledSubject ||
    studentOrUser.subject;
  if (directSub && typeof directSub === "string") {
    const s = directSub.trim().toUpperCase();
    if (s && s !== "ALL" && s !== "UNASSIGNED") {
      return s;
    }
  }

  // 2. Query localStorage mathworkspace_grading_data to find which subject list the student belongs to
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem("mathworkspace_grading_data") : null;
    if (raw) {
      const records = JSON.parse(raw);
      if (Array.isArray(records)) {
        const studentId = (
          studentOrUser.studentId ||
          studentOrUser.student_id ||
          studentOrUser.id ||
          ""
        ).toString().trim().toUpperCase();
        const name = (
          studentOrUser.fullName ||
          studentOrUser.name ||
          studentOrUser.studentName ||
          studentOrUser.email ||
          ""
        ).toLowerCase().trim();

        for (const rec of records) {
          const matched = rec.students?.some((st: any) => {
            const stId = (st.id || st.studentId || "").toString().trim().toUpperCase();
            if (studentId && stId && (stId === studentId || st.studentId?.toUpperCase() === studentId)) return true;
            if (name && st.fullName?.toLowerCase().trim() === name) return true;
            return false;
          });
          if (matched && rec.subject) {
            const subCode = rec.subject.subjectCode?.trim().toUpperCase() || "";
            const offer = rec.subject.offerNumber?.trim() || "";
            return offer ? `${subCode} - ${offer}` : subCode;
          }
        }
      }
    }
  } catch (err) {
    console.error("Error reading enrolled subject from grading data:", err);
  }

  // Default fallback
  return "MATH 101";
}

/**
 * Retrieve all attendance records
 */
export function getAllAttendanceRecords(): AttendanceRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_ATTENDANCE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Error reading attendance records:", err);
    return [];
  }
}

/**
 * Save attendance records and broadcast event
 */
function saveAttendanceRecords(records: AttendanceRecord[]): void {
  try {
    localStorage.setItem(STORAGE_ATTENDANCE_KEY, JSON.stringify(records));
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("attendance_updated", {
          detail: { records, timestamp: Date.now() },
        })
      );
    }
  } catch (err) {
    console.error("Error saving attendance records:", err);
  }
}

/**
 * Get attendance for a specific date (defaults to today)
 */
export function getAttendanceForDate(date: string = getTodayDateString()): AttendanceRecord[] {
  const all = getAllAttendanceRecords();
  return all.filter((r) => r.date === date);
}

/**
 * Check a student's attendance status for a specific date
 */
export function getStudentAttendanceForDate(
  studentKey: string,
  date: string = getTodayDateString(),
  subjectCode?: string
): AttendanceRecord | undefined {
  if (!studentKey) return undefined;
  const sKeyNorm = studentKey.trim().toLowerCase();
  const records = getAttendanceForDate(date);
  return records.find((r) => {
    const matchStudent = r.studentKey.trim().toLowerCase() === sKeyNorm;
    if (!matchStudent) return false;
    if (subjectCode && r.subjectCode && r.subjectCode !== "ALL" && subjectCode !== "ALL") {
      return r.subjectCode.trim().toLowerCase() === subjectCode.trim().toLowerCase();
    }
    return true;
  });
}

/**
 * Student self-marks attendance as "present" for today
 */
export function markStudentSelfAttendance(params: {
  studentKey: string;
  studentId?: string;
  studentName: string;
  subjectCode?: string;
  date?: string;
}): { success: boolean; record?: AttendanceRecord; message?: string } {
  // 1. Enforce admin permission: verify if student self attendance is allowed
  if (!isSelfCheckInAllowed(params.subjectCode)) {
    return {
      success: false,
      message: "Student self attendance is currently disabled by the course administrator.",
    };
  }

  // 2. Enforce schedule check: verify if date is a scheduled class session (or admin opened moved/make-up class)
  const date = params.date || getTodayDateString();
  const scheduleCheck = isDateScheduledForSubject(date, params.subjectCode || "MATH 101");
  if (!scheduleCheck.isScheduled) {
    return {
      success: false,
      message: `No class session is scheduled for ${params.subjectCode || "this subject"} on ${date} (${scheduleCheck.dayOfWeek}). If your class was moved or rescheduled, please ask your instructor to open attendance for this session.`,
    };
  }

  const all = getAllAttendanceRecords();
  const sKeyNorm = params.studentKey.trim().toLowerCase();

  const existingIndex = all.findIndex((r) => {
    const matchStudent = r.studentKey.trim().toLowerCase() === sKeyNorm;
    if (!matchStudent) return false;
    if (r.date !== date) return false;
    if (params.subjectCode && r.subjectCode && r.subjectCode !== "ALL" && params.subjectCode !== "ALL") {
      return r.subjectCode.trim().toLowerCase() === params.subjectCode.trim().toLowerCase();
    }
    return true;
  });

  const now = new Date();
  const timeFormatted = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const newRecord: AttendanceRecord = {
    id: existingIndex >= 0 ? all[existingIndex].id : `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    studentKey: params.studentKey,
    studentId: params.studentId || (existingIndex >= 0 ? all[existingIndex].studentId : undefined),
    studentName: params.studentName,
    subjectCode: params.subjectCode || "ALL",
    date,
    status: "present",
    markedAt: timeFormatted,
    markedBy: "student",
    notes: "Self-marked present by student",
  };

  if (existingIndex >= 0) {
    all[existingIndex] = newRecord;
  } else {
    all.unshift(newRecord);
  }

  saveAttendanceRecords(all);

  // Broadcast toast alert for admin
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("student_marked_present", {
        detail: newRecord,
      })
    );
  }

  return { success: true, record: newRecord };
}

/**
 * Admin sets or updates a student's attendance manually
 */
export function adminUpdateAttendance(params: {
  studentKey: string;
  studentId?: string;
  studentName: string;
  subjectCode?: string;
  date: string;
  status: AttendanceStatus;
  notes?: string;
}): AttendanceRecord {
  const all = getAllAttendanceRecords();
  const sKeyNorm = params.studentKey.trim().toLowerCase();

  const existingIndex = all.findIndex((r) => {
    const matchStudent = r.studentKey.trim().toLowerCase() === sKeyNorm;
    if (!matchStudent) return false;
    if (r.date !== params.date) return false;
    if (params.subjectCode && r.subjectCode && r.subjectCode !== "ALL" && params.subjectCode !== "ALL") {
      return r.subjectCode.trim().toLowerCase() === params.subjectCode.trim().toLowerCase();
    }
    return true;
  });

  const now = new Date();
  const timeFormatted = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const updatedRecord: AttendanceRecord = {
    id: existingIndex >= 0 ? all[existingIndex].id : `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    studentKey: params.studentKey,
    studentId: params.studentId || (existingIndex >= 0 ? all[existingIndex].studentId : undefined),
    studentName: params.studentName,
    subjectCode: params.subjectCode || "ALL",
    date: params.date,
    status: params.status,
    markedAt: timeFormatted,
    markedBy: "admin",
    notes: params.notes,
  };

  if (existingIndex >= 0) {
    all[existingIndex] = updatedRecord;
  } else {
    all.unshift(updatedRecord);
  }

  saveAttendanceRecords(all);
  return updatedRecord;
}

/**
 * Admin bulk mark all students as a specific status for a date
 */
export function adminBulkMarkAttendance(
  students: Array<{ studentKey: string; studentId?: string; studentName: string }>,
  date: string,
  status: AttendanceStatus,
  subjectCode: string = "ALL"
): void {
  const all = getAllAttendanceRecords();
  const now = new Date();
  const timeFormatted = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  students.forEach((st) => {
    const sKeyNorm = st.studentKey.trim().toLowerCase();
    const existingIndex = all.findIndex((r) => {
      const matchStudent = r.studentKey.trim().toLowerCase() === sKeyNorm;
      if (!matchStudent) return false;
      if (r.date !== date) return false;
      if (subjectCode !== "ALL" && r.subjectCode && r.subjectCode !== "ALL") {
        return r.subjectCode.trim().toLowerCase() === subjectCode.trim().toLowerCase();
      }
      return true;
    });

    const record: AttendanceRecord = {
      id: existingIndex >= 0 ? all[existingIndex].id : `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      studentKey: st.studentKey,
      studentId: st.studentId,
      studentName: st.studentName,
      subjectCode,
      date,
      status,
      markedAt: timeFormatted,
      markedBy: "admin",
    };

    if (existingIndex >= 0) {
      all[existingIndex] = record;
    } else {
      all.push(record);
    }
  });

  saveAttendanceRecords(all);
}

/**
 * Remove an attendance record
 */
export function removeAttendanceRecord(id: string): void {
  const all = getAllAttendanceRecords();
  const filtered = all.filter((r) => r.id !== id);
  saveAttendanceRecords(filtered);
}
