import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  UserCheck,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  BookOpen,
  AlertCircle,
  History,
  Activity,
  Lock,
  Unlock,
} from "lucide-react";
import type { AttendanceRecord } from "../../utils/attendanceManager";
import {
  getTodayDateString,
  getAllAttendanceRecords,
  getStudentAttendanceForDate,
  markStudentSelfAttendance,
  getStudentEnrolledSubject,
  getSubjectDisplayName,
  isSelfCheckInAllowed,
  isDateScheduledForSubject,
} from "../../utils/attendanceManager";
import { getStudentIdentifier } from "../../utils/quizLockManager";

interface UserAttendanceViewProps {
  user: any;
  onNavigate?: (navKey: string) => void;
  userEnrolledSubject?: string;
}

export const UserAttendanceView: React.FC<UserAttendanceViewProps> = ({
  user,
  userEnrolledSubject,
}) => {
  const studentKey = useMemo(() => getStudentIdentifier(user), [user]);
  const studentName = user?.name || user?.email || "Student";
  const studentIdDisplay = user?.student_id || user?.id_number || user?.id || "";

  // Strictly enforce the student's officially enrolled subject
  const enrolledSubject = useMemo(() => {
    return userEnrolledSubject || getStudentEnrolledSubject(user);
  }, [userEnrolledSubject, user]);

  const enrolledSubjectName = useMemo(() => {
    return getSubjectDisplayName(enrolledSubject);
  }, [enrolledSubject]);

  const [todayDateStr, setTodayDateStr] = useState<string>(getTodayDateString());
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [justCheckedIn, setJustCheckedIn] = useState<boolean>(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);
  const [isAllowedSelfCheckIn, setIsAllowedSelfCheckIn] = useState<boolean>(() =>
    isSelfCheckInAllowed(enrolledSubject)
  );
  const [scheduleInfo, setScheduleInfo] = useState(() =>
    isDateScheduledForSubject(todayDateStr, enrolledSubject)
  );
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);

  // Sync allowSelfCheckIn and scheduleInfo when enrolled subject changes
  useEffect(() => {
    setIsAllowedSelfCheckIn(isSelfCheckInAllowed(enrolledSubject));
    setScheduleInfo(isDateScheduledForSubject(todayDateStr, enrolledSubject));
  }, [enrolledSubject, todayDateStr]);

  // Live Clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setTodayDateStr(getTodayDateString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync attendance records
  const loadRecords = () => {
    setRecords(getAllAttendanceRecords());
  };

  useEffect(() => {
    loadRecords();

    const handleUpdate = () => {
      loadRecords();
    };

    const handleConfigUpdate = () => {
      setIsAllowedSelfCheckIn(isSelfCheckInAllowed(enrolledSubject));
      setScheduleInfo(isDateScheduledForSubject(todayDateStr, enrolledSubject));
    };

    window.addEventListener("attendance_updated", handleUpdate);
    window.addEventListener("student_marked_present", handleUpdate);
    window.addEventListener("attendance_config_updated", handleConfigUpdate);
    window.addEventListener("storage", handleConfigUpdate);

    return () => {
      window.removeEventListener("attendance_updated", handleUpdate);
      window.removeEventListener("student_marked_present", handleUpdate);
      window.removeEventListener("attendance_config_updated", handleConfigUpdate);
      window.removeEventListener("storage", handleConfigUpdate);
    };
  }, [enrolledSubject]);

  // Check if student is already marked present for today in their enrolled subject
  const todayRecord = useMemo(() => {
    return getStudentAttendanceForDate(studentKey, todayDateStr, enrolledSubject);
  }, [studentKey, todayDateStr, enrolledSubject, records]);

  // Student's personal attendance history restricted to their enrolled subject
  const myHistory = useMemo(() => {
    const sNorm = studentKey.trim().toLowerCase();
    const subNorm = enrolledSubject.trim().toLowerCase();
    return records
      .filter((r) => {
        const matchStudent = r.studentKey.trim().toLowerCase() === sNorm;
        if (!matchStudent) return false;
        if (r.subjectCode && r.subjectCode !== "ALL") {
          return r.subjectCode.trim().toLowerCase() === subNorm;
        }
        return true;
      })
      .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));
  }, [records, studentKey, enrolledSubject]);

  // Stats calculation
  const stats = useMemo(() => {
    const total = myHistory.length;
    const presentCount = myHistory.filter((r) => r.status === "present").length;
    const lateCount = myHistory.filter((r) => r.status === "late").length;
    const absentCount = myHistory.filter((r) => r.status === "absent").length;
    const rate = total > 0 ? Math.round(((presentCount + lateCount) / total) * 100) : 100;
    return { total, presentCount, lateCount, absentCount, rate };
  }, [myHistory]);

  // Handle Request Mark Present: Opens confirmation modal if allowed
  const handleRequestMarkPresent = () => {
    if (!scheduleInfo.isScheduled) {
      setActionSuccessMsg(
        `No class session is scheduled for ${enrolledSubject} today (${scheduleInfo.dayOfWeek}). If your class was moved or rescheduled, please ask your instructor to open attendance for this session.`
      );
      setTimeout(() => {
        setActionSuccessMsg(null);
      }, 5000);
      return;
    }

    if (!isAllowedSelfCheckIn) {
      setActionSuccessMsg("Student self attendance is currently disabled by the course instructor.");
      setTimeout(() => {
        setActionSuccessMsg(null);
      }, 5000);
      return;
    }
    setConfirmModalOpen(true);
  };

  // Handle Execute Mark Present strictly for enrolled subject upon confirmation
  const handleExecuteMarkPresent = () => {
    setConfirmModalOpen(false);

    if (!isAllowedSelfCheckIn) {
      setActionSuccessMsg("Student self attendance is currently disabled by the course instructor.");
      setTimeout(() => {
        setActionSuccessMsg(null);
      }, 5000);
      return;
    }

    const res = markStudentSelfAttendance({
      studentKey,
      studentId: studentIdDisplay,
      studentName,
      subjectCode: enrolledSubject,
      date: todayDateStr,
    });

    if (res.success) {
      setJustCheckedIn(true);
      setActionSuccessMsg(`You have successfully recorded your Self Attendance as PRESENT for ${enrolledSubject} today (${todayDateStr})! Admin has been notified.`);
      loadRecords();
      setTimeout(() => {
        setActionSuccessMsg(null);
      }, 5000);
    } else if (res.message) {
      setActionSuccessMsg(res.message);
      setTimeout(() => {
        setActionSuccessMsg(null);
      }, 5000);
    }
  };

  // Formatted date string (e.g., Tuesday, November 17, 2026)
  const formattedToday = useMemo(() => {
    try {
      const d = new Date();
      return d.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return todayDateStr;
    }
  }, [todayDateStr]);

  // Excused count for stats
  const excusedCount = useMemo(() => {
    return myHistory.filter((r) => r.status === "excused").length;
  }, [myHistory]);

  return (
    <div className="space-y-4 pb-12">
      {/* ========== 1. HEADER BANNER (matching admin style - adapts to light/dark mode) ========== */}
      <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-800 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center text-[#166534] dark:text-emerald-400 shrink-0 shadow-xs">
            <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-slate-100 tracking-tight">
                My Attendance
              </h1>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Activity className="w-3 h-3" />
                LIVE TODAY
              </span>
              {!scheduleInfo.isScheduled ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <AlertCircle className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  NO CLASS TODAY ({scheduleInfo.dayOfWeek.toUpperCase()})
                </span>
              ) : scheduleInfo.isSpecialSession ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  MOVED CLASS SESSION OPEN
                </span>
              ) : isAllowedSelfCheckIn ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <Unlock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  SELF ATTENDANCE OPEN
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  <Lock className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                  SELF ATTENDANCE CLOSED
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-gray-500 dark:text-slate-400 mt-0.5">
              Real-time student self attendance verification and tracking
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          <div className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-slate-400" />
            <span className="text-xs font-semibold text-gray-700 dark:text-slate-300">{formattedToday}</span>
          </div>
          <div className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60">
            <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-xs font-bold font-mono text-emerald-700 dark:text-emerald-300">{currentTime || "12:00:00 PM"}</span>
          </div>
        </div>
      </div>

      {/* ========== SUCCESS NOTIFICATION ========== */}
      <AnimatePresence>
        {actionSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">{actionSuccessMsg}</p>
            </div>
            <button
              onClick={() => setActionSuccessMsg(null)}
              className="text-xs font-bold text-emerald-600 hover:opacity-70 px-2 py-1"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== 2. STAT CARDS ROW (matching admin layout) ========== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {/* Total Days */}
        <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
          <span className="text-[10px] font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Total Days</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-black text-gray-900 dark:text-white">{stats.total}</span>
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500">Recorded</span>
        </div>

        {/* Present */}
        <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Present</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{stats.presentCount}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500">On time attendance</span>
        </div>

        {/* Late */}
        <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
          <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Late</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{stats.lateCount}</span>
            <AlertCircle className="w-5 h-5 text-amber-500" />
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500">Arrived after call</span>
        </div>

        {/* Absent */}
        <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
          <span className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Absent</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-black text-rose-600 dark:text-rose-400">{stats.absentCount}</span>
            <AlertCircle className="w-5 h-5 text-rose-500" />
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500">Unexcused</span>
        </div>

        {/* Excused */}
        <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
          <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Excused</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{excusedCount}</span>
            <ShieldCheck className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500">Authorized</span>
        </div>
      </div>

      {/* ========== 3. CHECK-IN ACTION BAR (like admin's search/filter bar) ========== */}
      <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Left: Subject + Status */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Subject Badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-200">{enrolledSubject}</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white uppercase">Enrolled</span>
            </div>

            {/* Today's Status Badge */}
            {todayRecord ? (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  {todayRecord.status.toUpperCase()} — {todayRecord.markedAt}
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                  ({todayRecord.markedBy === "admin" ? "Admin Marked" : "Self Attendance"})
                </span>
              </div>
            ) : !scheduleInfo.isScheduled ? (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/50">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                  No class scheduled for today ({scheduleInfo.dayOfWeek})
                </span>
              </div>
            ) : scheduleInfo.isSpecialSession ? (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-700/50">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300">
                  Moved class session active — not recorded yet
                </span>
              </div>
            ) : isAllowedSelfCheckIn ? (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/50">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300">Not recorded yet</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-700/50">
                <Lock className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span className="text-xs font-bold text-rose-700 dark:text-rose-300">
                  Self attendance closed by instructor
                </span>
              </div>
            )}
          </div>

          {/* Right: Check-in Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {todayRecord ? (
              isAllowedSelfCheckIn && scheduleInfo.isScheduled ? (
                <button
                  onClick={handleRequestMarkPresent}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-bold text-xs hover:bg-gray-200 dark:hover:bg-slate-700 transition flex items-center justify-center gap-2 cursor-pointer border border-gray-200 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Re-confirm Attendance
                </button>
              ) : (
                <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400 font-bold text-xs select-none">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Attendance Verified</span>
                </div>
              )
            ) : !scheduleInfo.isScheduled ? (
              <div
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-400 dark:text-slate-500 font-bold text-xs select-none cursor-not-allowed opacity-90"
                title={`No class session scheduled for ${enrolledSubject} on ${scheduleInfo.dayOfWeek}s`}
              >
                <AlertCircle className="w-4 h-4 text-amber-500/80" />
                <span>No Class Scheduled</span>
              </div>
            ) : isAllowedSelfCheckIn ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleRequestMarkPresent}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-lg font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${
                  scheduleInfo.isSpecialSession
                    ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
                }`}
              >
                {scheduleInfo.isSpecialSession ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <UserCheck className="w-4 h-4" />
                )}
                {scheduleInfo.isSpecialSession ? "Mark Present (Moved Session)" : "Mark Present for Today"}
              </motion.button>
            ) : (
              <div
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-400 dark:text-slate-500 font-bold text-xs select-none cursor-not-allowed opacity-90"
                title="Your instructor has currently closed student self attendance"
              >
                <Lock className="w-4 h-4 text-rose-500/80" />
                <span>Self Attendance Not Allowed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========== 4. ATTENDANCE HISTORY TABLE (matching admin table style) ========== */}
      <div className="bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="px-5 py-3 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">My Attendance History</h3>
          </div>
          <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
            {myHistory.length} total entries
          </span>
        </div>

        {myHistory.length === 0 ? (
          <div className="p-12 text-center text-gray-400 dark:text-slate-500">
            <Calendar className="w-10 h-10 mx-auto stroke-1 mb-3 opacity-50" />
            <p className="text-sm font-semibold">No attendance records yet</p>
            <p className="text-xs mt-1">Check in above to start building your history.</p>
          </div>
        ) : (
          <>
            {/* MOBILE CARD VIEW (< sm) */}
            <div className="block sm:hidden divide-y divide-gray-100 dark:divide-slate-800/80">
              {myHistory.map((rec, idx) => {
                const isPresent = rec.status === "present";
                const isLate = rec.status === "late";
                const isAbsent = rec.status === "absent";
                const isToday = rec.date === todayDateStr;
                return (
                  <div
                    key={rec.id}
                    className={`p-3.5 space-y-2 ${isToday ? "bg-emerald-50/40 dark:bg-emerald-950/10" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-slate-800 text-[10px] font-bold text-gray-500 flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white text-xs">{rec.date}</span>
                        {isToday && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                        {rec.subjectCode || enrolledSubject}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span
                        className={`inline-flex items-center gap-1.5 font-bold ${
                          isPresent
                            ? "text-emerald-700 dark:text-emerald-400"
                            : isLate
                            ? "text-amber-700 dark:text-amber-400"
                            : isAbsent
                            ? "text-rose-700 dark:text-rose-400"
                            : "text-blue-700 dark:text-blue-400"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isPresent
                              ? "bg-emerald-500"
                              : isLate
                              ? "bg-amber-500"
                              : isAbsent
                              ? "bg-rose-500"
                              : "bg-blue-500"
                          }`}
                        />
                        {rec.status.toUpperCase()}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {rec.markedAt} ({rec.markedBy === "admin" ? "Admin" : "Self"})
                      </span>
                    </div>
                    {rec.notes && (
                      <p className="text-[11px] text-gray-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-800/50 p-2 rounded-lg">
                        {rec.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* DESKTOP TABLE VIEW (>= sm) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[550px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-800/50 text-[11px] font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-5 w-12">No.</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Time / Method</th>
                    <th className="py-3 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80">
                  {myHistory.map((rec, idx) => {
                    const isPresent = rec.status === "present";
                    const isLate = rec.status === "late";
                    const isAbsent = rec.status === "absent";
                    const isToday = rec.date === todayDateStr;

                    return (
                      <tr
                        key={rec.id}
                        className={`hover:bg-gray-50/70 dark:hover:bg-slate-800/40 transition-colors ${isToday ? "bg-emerald-50/40 dark:bg-emerald-950/10" : ""}`}
                      >
                        {/* No. */}
                        <td className="py-3.5 px-5 text-gray-500 dark:text-slate-400 font-medium">
                          {idx + 1}
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-gray-900 dark:text-white">{rec.date}</span>
                          {isToday && (
                            <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                              Today
                            </span>
                          )}
                        </td>

                        {/* Subject */}
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                            {rec.subjectCode || enrolledSubject}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                              isPresent
                                ? "text-emerald-700 dark:text-emerald-400"
                                : isLate
                                ? "text-amber-700 dark:text-amber-400"
                                : isAbsent
                                ? "text-rose-700 dark:text-rose-400"
                                : "text-blue-700 dark:text-blue-400"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isPresent
                                  ? "bg-emerald-500"
                                  : isLate
                                  ? "bg-amber-500"
                                  : isAbsent
                                  ? "bg-rose-500"
                                  : "bg-blue-500"
                              }`}
                            />
                            {rec.status.toUpperCase()}
                          </span>
                        </td>

                        {/* Time / Method */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-mono text-gray-700 dark:text-slate-300 text-[11px]">{rec.markedAt}</span>
                            {rec.markedBy === "student" ? (
                              <span className="text-[10px] text-gray-500 dark:text-slate-400">Self Attendance</span>
                            ) : (
                              <span className="text-[10px] text-purple-600 dark:text-purple-400">Admin Marked</span>
                            )}
                          </div>
                        </td>

                        {/* Notes */}
                        <td className="py-3.5 px-4 text-gray-500 dark:text-slate-400 text-xs">
                          {rec.notes || "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Confirmation Modal for Student Self Attendance */}
      <AnimatePresence>
        {confirmModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-[#EAEBED] dark:border-slate-800 p-6 max-w-md w-full shadow-2xl space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                    Confirm Self Attendance
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    Are you sure you want to mark yourself <strong>PRESENT</strong> for today's class?
                  </p>
                </div>
              </div>

              {/* Attendance Details Card */}
              <div className="rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/60 p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Student:</span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {studentName} {studentIdDisplay ? `(${studentIdDisplay})` : ""}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Enrolled Subject:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {enrolledSubject} {enrolledSubjectName ? `— ${enrolledSubjectName}` : ""}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Date:</span>
                  <span className="font-semibold text-gray-700 dark:text-slate-300">
                    {formattedToday}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Current Time:</span>
                  <span className="font-mono font-semibold text-gray-700 dark:text-slate-300">
                    {currentTime || "12:00:00 PM"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setConfirmModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleExecuteMarkPresent}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Present</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserAttendanceView;
