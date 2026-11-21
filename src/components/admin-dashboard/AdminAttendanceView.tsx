import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  CheckCheck,
  RefreshCw,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Lock,
  Unlock,
  ShieldCheck,
  ShieldAlert,
  X,
  Users,
  CalendarDays,
  Check,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import type { StudentItem } from "../../types/dashboard";
import type { AttendanceRecord, AttendanceStatus } from "../../utils/attendanceManager";
import {
  getAllAttendanceRecords,
  getTodayDateString,
  adminUpdateAttendance,
  adminBulkMarkAttendance,
  getStudentEnrolledSubject,
  getSubjectDisplayName,
  isSelfCheckInAllowed,
  setAttendanceAllowSelfCheckIn,
  getSubjectScheduleDays,
  setSubjectScheduleDays,
  ALL_WEEK_DAYS,
  isDateScheduledForSubject,
  setDateSessionOverride,
} from "../../utils/attendanceManager";

interface AdminAttendanceViewProps {
  students: StudentItem[];
  availableSubjects?: any[];
}

export const AdminAttendanceView: React.FC<AdminAttendanceViewProps> = ({
  students,
  availableSubjects = [],
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDateString());
  const [selectedSubject, setSelectedSubject] = useState<string>("MATH 101");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [gradingRecords, setGradingRecords] = useState<any[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("mathworkspace_grading_data") : null;
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [actionToast, setActionToast] = useState<string | null>(null);
  const [allowSelfCheckIn, setAllowSelfCheckIn] = useState<boolean>(() =>
    isSelfCheckInAllowed("MATH 101")
  );
  const [confirmToggleModal, setConfirmToggleModal] = useState<boolean>(false);
  const [sideDrawerStatus, setSideDrawerStatus] = useState<AttendanceStatus | null>(null);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(false);
  const [mobileViewMode, setMobileViewMode] = useState<"cards" | "table">("cards");
  const [scheduleDays, setScheduleDays] = useState<string[]>(() =>
    getSubjectScheduleDays("MATH 101")
  );
  const [viewYear, setViewYear] = useState<number>(() => {
    const d = new Date();
    return d.getFullYear();
  });
  const [viewMonth, setViewMonth] = useState<number>(() => {
    const d = new Date();
    return d.getMonth();
  });

  // Current date schedule info (whether the selected date is a scheduled class day)
  const currentDateSchedule = useMemo(
    () => isDateScheduledForSubject(selectedDate, selectedSubject),
    [selectedDate, selectedSubject, scheduleDays]
  );

  // When there is no schedule for the subject on this date, marking is completely disabled unless admin opened a moved session
  const isMarkingDisabled = !currentDateSchedule.isScheduled;

  // Handler: toggle moved / make-up class session for the selected date
  const handleToggleDateSession = useCallback(
    (dateStr: string, openSession: boolean) => {
      if (openSession) {
        setDateSessionOverride(selectedSubject, dateStr, true);
        showToast(`🚀 Moved class session OPENED for ${selectedSubject} on ${dateStr}. Attendance marking is now enabled!`);
      } else {
        // Revert = remove the override
        setDateSessionOverride(selectedSubject, dateStr, null);
        showToast(`↩️ Moved class session REVERTED for ${selectedSubject} on ${dateStr}`);
      }
      // Force schedule days reload (the config event will trigger re-read)
      setScheduleDays(getSubjectScheduleDays(selectedSubject));
    },
    [selectedSubject]
  );

  // Sync attendance records & listen to live updates
  const loadRecords = () => {
    setAttendanceRecords(getAllAttendanceRecords());
  };

  useEffect(() => {
    setAllowSelfCheckIn(isSelfCheckInAllowed(selectedSubject));
    setScheduleDays(getSubjectScheduleDays(selectedSubject));
  }, [selectedSubject]);

  useEffect(() => {
    loadRecords();

    const handleUpdate = () => {
      loadRecords();
    };

    const handleStudentPresent = (e: any) => {
      loadRecords();
      const rec = e.detail as AttendanceRecord;
      if (rec) {
        showToast(`🔔 ${rec.studentName} marked Self Attendance (PRESENT) for ${rec.subjectCode || "class"}!`);
      }
    };

    const handleConfigUpdate = () => {
      setAllowSelfCheckIn(isSelfCheckInAllowed(selectedSubject));
      setScheduleDays(getSubjectScheduleDays(selectedSubject));
    };

    const handleGradingUpdate = () => {
      try {
        const raw = localStorage.getItem("mathworkspace_grading_data");
        setGradingRecords(raw ? JSON.parse(raw) : []);
      } catch {
        setGradingRecords([]);
      }
    };

    window.addEventListener("attendance_updated", handleUpdate);
    window.addEventListener("student_marked_present", handleStudentPresent);
    window.addEventListener("attendance_config_updated", handleConfigUpdate);
    window.addEventListener("grading_data_updated", handleGradingUpdate);
    window.addEventListener("storage", handleConfigUpdate);
    window.addEventListener("storage", handleGradingUpdate);

    return () => {
      window.removeEventListener("attendance_updated", handleUpdate);
      window.removeEventListener("student_marked_present", handleStudentPresent);
      window.removeEventListener("attendance_config_updated", handleConfigUpdate);
      window.removeEventListener("grading_data_updated", handleGradingUpdate);
      window.removeEventListener("storage", handleConfigUpdate);
      window.removeEventListener("storage", handleGradingUpdate);
    };
  }, [selectedSubject]);

  // Request toggle: opens confirmation modal
  const handleRequestToggleSelfAttendance = () => {
    setConfirmToggleModal(true);
  };

  // Execute toggle after confirmation
  const handleExecuteToggleSelfAttendance = () => {
    const nextVal = !allowSelfCheckIn;
    setAttendanceAllowSelfCheckIn(nextVal, selectedSubject);
    setAllowSelfCheckIn(nextVal);
    setConfirmToggleModal(false);
    if (nextVal) {
      showToast(
        `✅ Self Attendance is now ALLOWED for ${selectedSubject}!`
      );
    } else {
      showToast(
        `🔒 Self Attendance is now NOT ALLOWED for ${selectedSubject}!`
      );
    }
  };

  const showToast = (msg: string) => {
    setActionToast(msg);
    setTimeout(() => {
      setActionToast(null);
    }, 4000);
  };

  // Change date by offset (days)
  const shiftDate = (days: number) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + days);
    const yr = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0");
    const da = String(d.getDate()).padStart(2, "0");
    setSelectedDate(`${yr}-${mo}-${da}`);
  };

  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Formatted date for header display (DD/MM/YYYY)
  const formattedSelectedDateDisplay = useMemo(() => {
    try {
      const parts = selectedDate.split("-");
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return selectedDate;
    } catch {
      return selectedDate;
    }
  }, [selectedDate]);

  // Open calendar and synchronize view with current selectedDate
  const handleOpenCalendar = () => {
    try {
      const parts = selectedDate.split("-");
      if (parts.length === 3) {
        setViewYear(parseInt(parts[0], 10));
        setViewMonth(parseInt(parts[1], 10) - 1);
      }
    } catch {
      const d = new Date();
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
    setIsCalendarModalOpen(true);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSelectDateFromCalendar = (dateStr: string) => {
    setSelectedDate(dateStr);
    setIsCalendarModalOpen(false);
  };

  const handleJumpToToday = () => {
    const today = getTodayDateString();
    setSelectedDate(today);
    const d = new Date();
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setIsCalendarModalOpen(false);
  };

  // Toggle class schedule day for current subject
  const handleToggleScheduleDay = (day: string) => {
    let nextDays: string[];
    if (scheduleDays.includes(day)) {
      if (scheduleDays.length === 1) {
        showToast(`⚠️ Schedule must contain at least one class day.`);
        return;
      }
      nextDays = scheduleDays.filter((d) => d !== day);
    } else {
      nextDays = ALL_WEEK_DAYS.filter((d) => scheduleDays.includes(d) || d === day);
    }
    setScheduleDays(nextDays);
    setSubjectScheduleDays(selectedSubject, nextDays);
    showToast(`📅 Schedule updated for ${selectedSubject}: ${nextDays.map((d) => d.slice(0, 3)).join(", ")}`);
  };

  // Generate 35-42 calendar cells for current month view with schedule day indicators
  const calendarCells = useMemo(() => {
    const cells: {
      dateStr: string;
      dayNum: number;
      dayOfWeekName: string;
      isScheduledDay: boolean;
      isSpecialSession: boolean;
      isCurrentMonth: boolean;
      isToday: boolean;
      isSelected: boolean;
      hasRecords: boolean;
    }[] = [];

    const todayStr = getTodayDateString();
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sun
    const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const recordDatesSet = new Set(attendanceRecords.map((r) => r.date));

    const buildCell = (dateStr: string, dayNum: number, isCurrentMonth: boolean) => {
      const info = isDateScheduledForSubject(dateStr, selectedSubject);
      const dObj = new Date(dateStr + "T00:00:00");
      const dayOfWeekName = ALL_WEEK_DAYS[dObj.getDay()] || "Monday";
      return {
        dateStr,
        dayNum,
        dayOfWeekName,
        isScheduledDay: info.isScheduled,
        isSpecialSession: info.isSpecialSession,
        isCurrentMonth,
        isToday: dateStr === todayStr,
        isSelected: dateStr === selectedDate,
        hasRecords: recordDatesSet.has(dateStr),
      };
    };

    // Previous month trailing days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      const prevM = viewMonth === 0 ? 12 : viewMonth;
      const prevY = viewMonth === 0 ? viewYear - 1 : viewYear;
      const mStr = String(prevM).padStart(2, "0");
      const dStr = String(dayNum).padStart(2, "0");
      const dateStr = `${prevY}-${mStr}-${dStr}`;
      cells.push(buildCell(dateStr, dayNum, false));
    }

    // Current month days
    for (let dayNum = 1; dayNum <= daysInCurrentMonth; dayNum++) {
      const mStr = String(viewMonth + 1).padStart(2, "0");
      const dStr = String(dayNum).padStart(2, "0");
      const dateStr = `${viewYear}-${mStr}-${dStr}`;
      cells.push(buildCell(dateStr, dayNum, true));
    }

    // Next month leading days (fill to 35 or 42 cells)
    const totalCells = cells.length > 35 ? 42 : 35;
    const remaining = totalCells - cells.length;
    for (let dayNum = 1; dayNum <= remaining; dayNum++) {
      const nextM = viewMonth === 11 ? 1 : viewMonth + 2;
      const nextY = viewMonth === 11 ? viewYear + 1 : viewYear;
      const mStr = String(nextM).padStart(2, "0");
      const dStr = String(dayNum).padStart(2, "0");
      const dateStr = `${nextY}-${mStr}-${dStr}`;
      cells.push(buildCell(dateStr, dayNum, false));
    }

    return cells;
  }, [viewYear, viewMonth, selectedDate, attendanceRecords, scheduleDays, selectedSubject]);

  // All enrolled subjects dynamically derived from imported Excel grading records + student rosters
  const subjectOptions = useMemo(() => {
    const list: {
      code: string;
      name: string;
      studentCount: number;
      subjectCode: string;
      offerNumber?: string;
    }[] = [];
    const seenCodes = new Set<string>();

    // 1. Collect all subjects directly from imported grading records (e.g. GEC 4 - 50371, MATH 101 - 80062, MATH 103 - 80132, etc.)
    if (Array.isArray(gradingRecords) && gradingRecords.length > 0) {
      gradingRecords.forEach((rec: any) => {
        const subCode = (rec.subject?.subjectCode || "").trim().toUpperCase();
        if (!subCode) return;
        const offer = (rec.subject?.offerNumber || "").trim();
        const fullCode = offer ? `${subCode} - ${offer}` : subCode;
        if (!seenCodes.has(fullCode)) {
          seenCodes.add(fullCode);
          const studentCount = Array.isArray(rec.students) ? rec.students.length : 0;
          const subName = rec.subject?.subjectName || getSubjectDisplayName(subCode);
          list.push({
            code: fullCode,
            name: subName,
            studentCount,
            subjectCode: subCode,
            offerNumber: offer || undefined,
          });
        }
      });
    }

    // 2. Collect any remaining enrolled subjects directly from enrolled students
    students.forEach((st) => {
      const code = getStudentEnrolledSubject(st);
      if (code && code !== "ALL" && code !== "UNASSIGNED" && !seenCodes.has(code)) {
        seenCodes.add(code);
        const count = students.filter((s) => getStudentEnrolledSubject(s) === code).length;
        list.push({
          code,
          name: getSubjectDisplayName(code),
          studentCount: count,
          subjectCode: code.split("-")[0].trim(),
        });
      }
    });

    // 3. Fallback if roster & grading are empty
    if (list.length === 0) {
      if (availableSubjects && availableSubjects.length > 0) {
        availableSubjects.forEach((s: any) => {
          const code = (s.subjectCode || s.subject?.subjectCode || "").trim().toUpperCase();
          const offer = (s.offerNumber || s.subject?.offerNumber || "").trim();
          const fullCode = offer ? `${code} - ${offer}` : code;
          if (fullCode && !seenCodes.has(fullCode)) {
            seenCodes.add(fullCode);
            list.push({
              code: fullCode,
              name: s.subjectName || s.subject?.subjectName || getSubjectDisplayName(code),
              studentCount: 0,
              subjectCode: code,
              offerNumber: offer || undefined,
            });
          }
        });
      }
      if (list.length === 0) {
        ["MATH 101", "MATH 102", "MATH 103"].forEach((c) => {
          list.push({
            code: c,
            name: getSubjectDisplayName(c),
            studentCount: 0,
            subjectCode: c,
          });
        });
      }
    }

    // Sort with MATH 101 first, followed naturally by other subjects
    list.sort((a, b) => {
      if (a.code.startsWith("MATH 101") && !b.code.startsWith("MATH 101")) return -1;
      if (!a.code.startsWith("MATH 101") && b.code.startsWith("MATH 101")) return 1;
      return a.code.localeCompare(b.code, undefined, { numeric: true, sensitivity: "base" });
    });

    return list;
  }, [gradingRecords, students, availableSubjects]);

  // Ensure selectedSubject is always a valid enrolled subject, prioritizing MATH 101
  useEffect(() => {
    if (subjectOptions.length > 0) {
      if (!selectedSubject || selectedSubject === "ALL" || !subjectOptions.some((s) => s.code === selectedSubject)) {
        const hasMath101 = subjectOptions.some((s) => s.code.startsWith("MATH 101"));
        if (hasMath101) {
          const m101 = subjectOptions.find((s) => s.code.startsWith("MATH 101"))!;
          setSelectedSubject(m101.code);
        } else {
          setSelectedSubject(subjectOptions[0].code);
        }
      }
    }
  }, [subjectOptions, selectedSubject]);

  // Combine student list with today's attendance records and resolve enrolled subjects
  const studentAttendanceList = useMemo(() => {
    const dateRecords = attendanceRecords.filter((r) => r.date === selectedDate);

    // 1. Locate matching grading record for selectedSubject (handles "MATH 101 - 80062", "GEC 4 - 50371", etc.)
    const matchingRec = gradingRecords.find((rec: any) => {
      const subCode = (rec.subject?.subjectCode || "").trim().toUpperCase();
      const offer = (rec.subject?.offerNumber || "").trim();
      const fullKey = offer ? `${subCode} - ${offer}` : subCode;
      const selNorm = (selectedSubject || "").trim().toUpperCase();
      return fullKey === selNorm || subCode === selNorm;
    });

    const enrolledStudents: {
      student: StudentItem;
      enrolledSubject: string;
    }[] = [];

    const enrolledKeys = new Set<string>();

    if (matchingRec && Array.isArray(matchingRec.students) && matchingRec.students.length > 0) {
      const subCode = (matchingRec.subject?.subjectCode || "").trim().toUpperCase();
      const offer = (matchingRec.subject?.offerNumber || "").trim();
      const currentSubjectDisplay = offer ? `${subCode} - ${offer}` : subCode;

      matchingRec.students.forEach((gst: any, idx: number) => {
        const gstId = (gst.id || gst.studentId || "").toString().trim();
        const gstName = (gst.fullName || "").trim();

        // Match with online student profile if available
        const matchedOnline = students.find((st) => {
          const stId = (st.studentId || st.id || "").toString().trim().toLowerCase();
          const stName = (st.name || "").trim().toLowerCase();
          return (
            (gstId && stId && stId === gstId.toLowerCase()) ||
            (gstName && stName && stName === gstName.toLowerCase())
          );
        });

        const studentItem: StudentItem = matchedOnline
          ? {
              ...matchedOnline,
              id: matchedOnline.id || gstId || `st-${idx}`,
              studentId: gstId || matchedOnline.studentId,
              name: gstName || matchedOnline.name,
              email: matchedOnline.email || `${gstId || `student-${idx}`}@workspace.edu`,
            }
          : {
              id: gstId || `st-local-${idx}`,
              studentId: gstId || `2026-${String(idx + 1).padStart(4, "0")}`,
              name: gstName || `Student ${idx + 1}`,
              email: `${gstId ? gstId.toLowerCase().replace(/[^a-z0-9]/g, "") : `student${idx + 1}`}@workspace.edu`,
              quizzesTaken: 0,
              averageScore: 0,
              lastActive: "Never",
              joinedDate: "Recently",
            };

        const key = (studentItem.id || studentItem.studentId || studentItem.name).toLowerCase();
        enrolledKeys.add(key);
        if (studentItem.studentId) enrolledKeys.add(studentItem.studentId.toLowerCase());

        enrolledStudents.push({
          student: studentItem,
          enrolledSubject: currentSubjectDisplay,
        });
      });
    }

    // 2. Also check if any online student from props.students belongs to selectedSubject
    students.forEach((st) => {
      const enSub = getStudentEnrolledSubject(st);
      const selNorm = (selectedSubject || "").trim().toUpperCase();
      const enNorm = enSub.trim().toUpperCase();

      const matches = enNorm === selNorm || (selNorm.includes(enNorm) && enNorm.length > 3);
      if (matches) {
        const key = (st.id || st.studentId || st.name).toLowerCase();
        const idKey = (st.studentId || "").toLowerCase();
        if (!enrolledKeys.has(key) && (!idKey || !enrolledKeys.has(idKey))) {
          enrolledStudents.push({
            student: st,
            enrolledSubject: selectedSubject,
          });
        }
      }
    });

    // 3. Fallback: if no students found anywhere for selectedSubject, and gradingRecords is empty
    if (enrolledStudents.length === 0 && gradingRecords.length === 0) {
      students.forEach((st) => {
        enrolledStudents.push({
          student: st,
          enrolledSubject: selectedSubject,
        });
      });
    }

    // 4. Map each student to their attendance record for selectedDate
    return enrolledStudents.map(({ student, enrolledSubject }) => {
      const sKeyNorm = (student.id || student.studentId || student.name).trim().toLowerCase();
      const sIdNorm = (student.studentId || "").trim().toLowerCase();
      const sNameNorm = student.name.trim().toLowerCase();

      const rec = dateRecords.find((r) => {
        const rKeyNorm = (r.studentKey || "").trim().toLowerCase();
        const rIdNorm = (r.studentId || "").trim().toLowerCase();
        const rNameNorm = (r.studentName || "").trim().toLowerCase();

        const matchStudent =
          (rKeyNorm && (rKeyNorm === sKeyNorm || rKeyNorm === sIdNorm)) ||
          (sIdNorm && rIdNorm && rIdNorm === sIdNorm) ||
          (rNameNorm && rNameNorm === sNameNorm);

        if (!matchStudent) return false;

        // Subject match: check if record matches current subject
        if (r.subjectCode && r.subjectCode !== "ALL" && selectedSubject && selectedSubject !== "ALL") {
          const rSubNorm = r.subjectCode.trim().toLowerCase();
          const selSubNorm = selectedSubject.trim().toLowerCase();
          return rSubNorm === selSubNorm || rSubNorm.includes(selSubNorm) || selSubNorm.includes(rSubNorm);
        }
        return true;
      });

      return {
        student,
        enrolledSubject,
        record: rec,
        status: rec ? rec.status : ("unmarked" as AttendanceStatus | "unmarked"),
        markedAt: rec?.markedAt,
        markedBy: rec?.markedBy,
        notes: rec?.notes,
      };
    });
  }, [students, gradingRecords, attendanceRecords, selectedDate, selectedSubject]);

  // Filter students strictly by selected enrolled subject
  const subjectFilteredList = studentAttendanceList;

  // Filtered list with search & status filters
  const filteredList = useMemo(() => {
    return subjectFilteredList.filter((item) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const nameMatch = item.student.name.toLowerCase().includes(q);
        const idMatch = item.student.studentId?.toLowerCase().includes(q);
        const emailMatch = item.student.email.toLowerCase().includes(q);
        if (!nameMatch && !idMatch && !emailMatch) return false;
      }

      // Status filter
      if (statusFilter !== "ALL") {
        if (statusFilter === "unmarked") {
          if (item.status !== "unmarked") return false;
        } else {
          if (item.status !== statusFilter) return false;
        }
      }

      return true;
    });
  }, [subjectFilteredList, searchQuery, statusFilter]);

  // Statistics strictly for the current subject scope
  const stats = useMemo(() => {
    const total = subjectFilteredList.length;
    const present = subjectFilteredList.filter((i) => i.status === "present").length;
    const late = subjectFilteredList.filter((i) => i.status === "late").length;
    const absent = subjectFilteredList.filter((i) => i.status === "absent").length;
    const excused = subjectFilteredList.filter((i) => i.status === "excused").length;
    const unmarked = subjectFilteredList.filter((i) => i.status === "unmarked").length;
    const rate = total > 0 ? Math.round(((present + late) / total) * 100) : 0;
    return { total, present, late, absent, excused, unmarked, rate };
  }, [subjectFilteredList]);

  // Students for the slide-out side drawer based on selected drawer status
  const drawerStudents = useMemo(() => {
    if (!sideDrawerStatus) return [];
    return subjectFilteredList.filter((item) => item.status === sideDrawerStatus);
  }, [subjectFilteredList, sideDrawerStatus]);

  // Handle single student status change by Admin
  const handleSetStatus = (
    student: StudentItem,
    enrolledSubject: string,
    status: AttendanceStatus
  ) => {
    if (isMarkingDisabled) {
      showToast(
        `⚠️ Attendance marking is disabled: No class scheduled on ${currentDateSchedule.dayOfWeek} (${selectedDate}). Click "Open Moved Session" above to enable marking.`
      );
      return;
    }

    adminUpdateAttendance({
      studentKey: student.id || student.studentId || student.name,
      studentId: student.studentId,
      studentName: student.name,
      subjectCode: enrolledSubject,
      date: selectedDate,
      status,
    });
    showToast(`Updated ${student.name} (${enrolledSubject}) to ${status.toUpperCase()}`);
  };

  // Bulk mark for the currently viewed subject
  const handleBulkMark = (status: AttendanceStatus) => {
    if (isMarkingDisabled) {
      showToast(
        `⚠️ Attendance marking is disabled: No class scheduled on ${currentDateSchedule.dayOfWeek} (${selectedDate}). Click "Open Moved Session" above to enable marking.`
      );
      return;
    }

    const targets = subjectFilteredList.map((item) => ({
      studentKey: item.student.id || item.student.studentId || item.student.name,
      studentId: item.student.studentId,
      studentName: item.student.name,
    }));
    adminBulkMarkAttendance(
      targets,
      selectedDate,
      status,
      selectedSubject === "ALL" ? "ALL" : selectedSubject
    );
    showToast(`Marked ${targets.length} student(s) in ${selectedSubject} as ${status.toUpperCase()}`);
  };

  const isToday = selectedDate === getTodayDateString();

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300 pb-16">
      {/* Toast Notification */}
      <AnimatePresence>
        {actionToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-5 right-5 z-[99999] flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#166534] text-white shadow-xl shadow-emerald-950/20 text-xs font-bold border border-emerald-400/30 backdrop-blur-md"
          >
            <span>{actionToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#161F30] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#EAEBED] dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center text-[#166534] dark:text-emerald-400 shrink-0 shadow-xs">
            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-slate-100 tracking-tight">
                Class Attendance Management
              </h1>
              {isToday && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  LIVE TODAY
                </span>
              )}
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-gray-500 dark:text-slate-400 mt-0.5">
              Real-time student self attendance verification and manual attendance controls
            </p>
          </div>
        </div>

        {/* Action & Date Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full md:w-auto">
          {/* Allow / Disallow Student Self Attendance Toggle */}
          <button
            type="button"
            onClick={handleRequestToggleSelfAttendance}
            className={`flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 w-full sm:w-auto ${
              allowSelfCheckIn
                ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
                : "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/40"
            }`}
            title={
              allowSelfCheckIn
                ? "Self Attendance is currently ALLOWED. Click to change."
                : "Self Attendance is currently NOT ALLOWED. Click to change."
            }
          >
            {allowSelfCheckIn ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Unlock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Self Attendance: <strong className="uppercase">Allowed</strong></span>
              </>
            ) : (
              <>
                <span className="inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                <Lock className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                <span>Self Attendance: <strong className="uppercase">Not Allowed</strong></span>
              </>
            )}
          </button>

          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-1">
            <button
              onClick={() => shiftDate(-1)}
              className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 transition cursor-pointer"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleOpenCalendar}
              className="flex items-center gap-2 px-3 py-1 hover:bg-white dark:hover:bg-slate-700/80 rounded-xl transition cursor-pointer group"
              title="Click to open attendance calendar"
            >
              <Calendar className="w-4 h-4 text-[#166534] dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-gray-800 dark:text-slate-200">
                {formattedSelectedDateDisplay}
              </span>
            </button>
            <button
              onClick={() => shiftDate(1)}
              className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 transition cursor-pointer"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Class Schedule Days Pill */}
          <button
            type="button"
            onClick={handleOpenCalendar}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs font-bold hover:border-emerald-300 dark:hover:border-emerald-700 transition cursor-pointer"
            title={`Class schedule for ${selectedSubject}: ${scheduleDays.join(", ")}. Click to configure in calendar.`}
          >
            <CalendarDays className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-gray-500 dark:text-slate-400 text-[11px]">Schedule:</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-extrabold text-[11px]">
              {scheduleDays.map((d) => d.slice(0, 3)).join(", ")}
            </span>
          </button>

          {!isToday && (
            <button
              onClick={() => setSelectedDate(getTodayDateString())}
              className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-xs font-bold text-gray-700 dark:text-slate-300 transition cursor-pointer"
            >
              Today
            </button>
          )}
        </div>
      </div>

      {/* Attendance Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        <div className="col-span-2 sm:col-span-1 bg-white dark:bg-[#161F30] p-3.5 sm:p-4 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-xs flex flex-col">
          <span className="text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
            Total Students
          </span>
          <span className="text-2xl font-black text-gray-800 dark:text-slate-100 mt-1">
            {stats.total}
          </span>
          <span className="text-[10px] text-gray-400 mt-0.5">Enrolled Roster</span>
        </div>

        {/* Present Card */}
        <div
          onClick={() => setSideDrawerStatus("present")}
          className={`bg-white dark:bg-[#161F30] p-4 rounded-2xl border shadow-xs flex flex-col cursor-pointer transition-all select-none group hover:shadow-md ${
            sideDrawerStatus === "present"
              ? "border-emerald-500 ring-2 ring-emerald-500/30"
              : "border-emerald-100 dark:border-emerald-900/40 hover:border-emerald-300 dark:hover:border-emerald-700"
          }`}
          title="Click to view all Present students"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider group-hover:underline">
              Present
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            {stats.present}
          </span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] text-emerald-500/80">On time attendance</span>
            <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity">
              View ➔
            </span>
          </div>
        </div>

        {/* Late Card */}
        <div
          onClick={() => setSideDrawerStatus("late")}
          className={`bg-white dark:bg-[#161F30] p-4 rounded-2xl border shadow-xs flex flex-col cursor-pointer transition-all select-none group hover:shadow-md ${
            sideDrawerStatus === "late"
              ? "border-amber-500 ring-2 ring-amber-500/30"
              : "border-amber-100 dark:border-amber-900/40 hover:border-amber-300 dark:hover:border-amber-700"
          }`}
          title="Click to view all Late students"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider group-hover:underline">
              Late
            </span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
            {stats.late}
          </span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] text-amber-500/80">Arrived after call</span>
            <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity">
              View ➔
            </span>
          </div>
        </div>

        {/* Absent Card */}
        <div
          onClick={() => setSideDrawerStatus("absent")}
          className={`bg-white dark:bg-[#161F30] p-4 rounded-2xl border shadow-xs flex flex-col cursor-pointer transition-all select-none group hover:shadow-md ${
            sideDrawerStatus === "absent"
              ? "border-rose-500 ring-2 ring-rose-500/30"
              : "border-rose-100 dark:border-rose-900/40 hover:border-rose-300 dark:hover:border-rose-700"
          }`}
          title="Click to view all Absent students"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider group-hover:underline">
              Absent
            </span>
            <XCircle className="w-4 h-4 text-rose-500" />
          </div>
          <span className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">
            {stats.absent}
          </span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] text-rose-500/80">Unexcused</span>
            <span className="text-[9px] font-bold text-rose-600 dark:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity">
              View ➔
            </span>
          </div>
        </div>

        {/* Excused Card */}
        <div
          onClick={() => setSideDrawerStatus("excused")}
          className={`bg-white dark:bg-[#161F30] p-4 rounded-2xl border shadow-xs flex flex-col cursor-pointer transition-all select-none group hover:shadow-md ${
            sideDrawerStatus === "excused"
              ? "border-blue-500 ring-2 ring-blue-500/30"
              : "border-blue-100 dark:border-blue-900/40 hover:border-blue-300 dark:hover:border-blue-700"
          }`}
          title="Click to view all Excused students"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider group-hover:underline">
              Excused
            </span>
            <AlertCircle className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
            {stats.excused}
          </span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] text-blue-500/80">Authorized</span>
            <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity">
              View ➔
            </span>
          </div>
        </div>
      </div>

      {/* Subject Offering Selection Tabs */}
      {subjectOptions.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5 mr-1">
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            SUBJECTS:
          </span>
          {subjectOptions.map((sub) => {
            const isSelected = selectedSubject === sub.code;
            return (
              <button
                key={sub.code}
                type="button"
                onClick={() => setSelectedSubject(sub.code)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#166534] text-white shadow-md shadow-emerald-950/20 scale-[1.02]"
                    : "bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-slate-300 hover:border-emerald-300 dark:hover:border-emerald-700/60"
                }`}
              >
                <span>{sub.code}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40"
                  }`}
                >
                  {sub.studentCount}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Filter and Bulk Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-[#161F30] p-3.5 sm:p-4 rounded-2xl border border-[#EAEBED] dark:border-slate-800 shadow-xs">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
          {/* Search Input */}
          <div className="relative flex-1 min-w-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student name or ID..."
              className="w-full h-9 pl-9 pr-3 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold bg-gray-50/50 dark:bg-slate-800/60 text-gray-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534]"
            />
          </div>

          <div className="flex items-center gap-2 justify-between sm:justify-start">
            {/* Subject Filter */}
            <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-slate-700 shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-gray-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-transparent text-xs font-bold text-gray-700 dark:text-slate-200 outline-none cursor-pointer"
              >
                {subjectOptions.map((s) => (
                  <option key={s.code} value={s.code} className="dark:bg-[#161F30]">
                    {s.code} ({s.studentCount})
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile View Mode Switcher (Visible on small screens) */}
            <div className="flex sm:hidden items-center bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700 shrink-0">
              <button
                type="button"
                onClick={() => setMobileViewMode("cards")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                  mobileViewMode === "cards"
                    ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs"
                    : "text-gray-500 dark:text-slate-400"
                }`}
              >
                Cards
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode("table")}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                  mobileViewMode === "table"
                    ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs"
                    : "text-gray-500 dark:text-slate-400"
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Disabled Marking Alert Banner when no class session scheduled */}
      {isMarkingDisabled && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-300">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black">
                Attendance Marking Disabled (No Class Scheduled)
              </div>
              <div className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                {selectedSubject} has no class scheduled on {currentDateSchedule.dayOfWeek}s ({selectedDate}). Click <strong>"Open Moved Session"</strong> to enable attendance marking for this date.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleToggleDateSession(selectedDate, true)}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-sm transition cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Moved Session</span>
          </button>
        </div>
      )}

      {/* Active Moved Session Notice Banner */}
      {currentDateSchedule.isSpecialSession && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-900 dark:text-purple-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center shrink-0 text-purple-700 dark:text-purple-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black">
                🚀 Moved Class Session Active
              </div>
              <div className="text-[11px] text-purple-700 dark:text-purple-400 font-medium">
                Temporary make-up class session is active for {selectedSubject} on {selectedDate} ({currentDateSchedule.dayOfWeek}). Attendance marking is enabled.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleToggleDateSession(selectedDate, false)}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800/60 text-purple-800 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/60 font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Revert Session</span>
          </button>
        </div>
      )}

      {/* Attendance Roster Table */}
      <div className="bg-white dark:bg-[#161F30] rounded-2xl sm:rounded-3xl border border-[#EAEBED] dark:border-slate-800 shadow-sm overflow-hidden">
        {/* MOBILE CARDS VIEW (< sm and mobileViewMode === 'cards') */}
        <div className={mobileViewMode === "cards" ? "block sm:hidden divide-y divide-gray-100 dark:divide-slate-800/80" : "hidden"}>
          {filteredList.length === 0 ? (
            <div className="py-12 text-center text-gray-400 dark:text-slate-500 text-xs font-semibold">
              No students match the selected date or search filter.
            </div>
          ) : (
            filteredList.map((item, idx) => {
              const { student, status, markedAt, markedBy } = item;
              return (
                <div key={student.id} className="p-4 space-y-3 bg-white dark:bg-[#161F30]">
                  {/* Student Top Bar */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 text-[10px] font-black flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800/50">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                          {student.name}
                        </h4>
                        <p className="text-[11px] text-gray-400 dark:text-slate-400 font-mono">
                          {student.studentId || "2026-0000"} • {student.email}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shrink-0">
                      {item.enrolledSubject}
                    </span>
                  </div>

                  {/* Status & Recorded Info */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-100 dark:border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-400">Status:</span>
                      {status === "present" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> PRESENT
                        </span>
                      )}
                      {status === "late" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                          <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" /> LATE
                        </span>
                      )}
                      {status === "absent" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                          <XCircle className="w-3 h-3 text-rose-600 dark:text-rose-400" /> ABSENT
                        </span>
                      )}
                      {status === "excused" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                          <AlertCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" /> EXCUSED
                        </span>
                      )}
                      {status === "unmarked" && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 dark:bg-slate-800 text-gray-400">
                          Unmarked
                        </span>
                      )}
                    </div>
                    {status !== "unmarked" && (
                      <span className="text-[10px] text-gray-400 font-mono">
                        {markedAt || "Recorded"} ({markedBy === "student" ? "Self" : "Admin"})
                      </span>
                    )}
                  </div>

                  {/* Touch Action Buttons */}
                  {status === "present" ? (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        Marked Present
                      </span>
                      <span className="text-[10px] text-gray-400 italic">Locked</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-1.5 pt-1">
                      <button
                        type="button"
                        disabled={isMarkingDisabled}
                        onClick={() => handleSetStatus(student, item.enrolledSubject, "present")}
                        className={`py-2 px-1 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isMarkingDisabled
                            ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800"
                            : "cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        type="button"
                        disabled={isMarkingDisabled}
                        onClick={() => handleSetStatus(student, item.enrolledSubject, "late")}
                        className={`py-2 px-1 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isMarkingDisabled
                            ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800"
                            : status === "late"
                            ? "cursor-pointer bg-amber-500 text-white shadow-xs"
                            : "cursor-pointer bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40 active:scale-95"
                        }`}
                      >
                        Late
                      </button>
                      <button
                        type="button"
                        disabled={isMarkingDisabled}
                        onClick={() => handleSetStatus(student, item.enrolledSubject, "absent")}
                        className={`py-2 px-1 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isMarkingDisabled
                            ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800"
                            : status === "absent"
                            ? "cursor-pointer bg-rose-600 text-white shadow-xs"
                            : "cursor-pointer bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40 active:scale-95"
                        }`}
                      >
                        Absent
                      </button>
                      <button
                        type="button"
                        disabled={isMarkingDisabled}
                        onClick={() => handleSetStatus(student, item.enrolledSubject, "excused")}
                        className={`py-2 px-1 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isMarkingDisabled
                            ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800"
                            : status === "excused"
                            ? "cursor-pointer bg-blue-600 text-white shadow-xs"
                            : "cursor-pointer bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 active:scale-95"
                        }`}
                      >
                        Excused
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* DESKTOP TABLE VIEW (or when mobileViewMode === 'table') */}
        <div className={mobileViewMode === "cards" ? "hidden sm:block overflow-x-auto" : "overflow-x-auto"}>
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-800/50 text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400">
                <th className="py-3.5 px-4 w-12 text-center">No.</th>
                <th className="py-3.5 px-4">Student ID</th>
                <th className="py-3.5 px-4">Student Name</th>
                <th className="py-3.5 px-4">Subject</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-center">Time / Method</th>
                <th className="py-3.5 px-4 text-right">Manual Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80 text-xs font-semibold">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400 dark:text-slate-500">
                    No students match the selected date or search filter.
                  </td>
                </tr>
              ) : (
                filteredList.map((item, idx) => {
                  const { student, status, markedAt, markedBy } = item;
                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* No. */}
                      <td className="py-3.5 px-4 text-center text-gray-400 dark:text-slate-500">
                        {idx + 1}
                      </td>

                      {/* Student ID */}
                      <td className="py-3.5 px-4 font-mono font-bold text-gray-600 dark:text-slate-300">
                        {student.studentId || "2026-0000"}
                      </td>

                      {/* Student Name */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 dark:text-slate-100 text-sm">
                            {student.name}
                          </span>
                          <span className="text-[11px] text-gray-400 dark:text-slate-500 font-normal">
                            {student.email}
                          </span>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                          {item.enrolledSubject}
                        </span>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 px-4 text-center">
                        {status === "present" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            PRESENT
                          </span>
                        )}
                        {status === "late" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-xs">
                            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                            LATE
                          </span>
                        )}
                        {status === "absent" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-xs">
                            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                            ABSENT
                          </span>
                        )}
                        {status === "excused" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800 shadow-xs">
                            <AlertCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            EXCUSED
                          </span>
                        )}
                        {status === "unmarked" && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-400">
                            Unmarked
                          </span>
                        )}
                      </td>

                      {/* Time / Method */}
                      <td className="py-3.5 px-4 text-center">
                        {status !== "unmarked" ? (
                          <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-700 dark:text-slate-300">
                              {markedAt || "Recorded"}
                            </span>
                            <span className="text-[10px] text-gray-400 dark:text-slate-400 flex items-center gap-1">
                              {markedBy === "student" ? (
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                                  Self Attendance
                                </span>
                              ) : (
                                "Admin Marked"
                              )}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>
                        )}
                      </td>

                      {/* Manual Action Buttons */}
                      <td className="py-3.5 px-4 text-right">
                        {status === "present" ? (
                          <div className="inline-flex items-center gap-1.5 justify-end">
                            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs">
                              Present
                            </span>
                            <span className="text-[10px] text-gray-400 dark:text-slate-500 italic select-none">
                              Locked
                            </span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 justify-end">
                            <button
                              type="button"
                              disabled={isMarkingDisabled}
                              onClick={() => handleSetStatus(student, item.enrolledSubject, "present")}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                                isMarkingDisabled
                                  ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-600 border border-gray-200 dark:border-slate-700"
                                  : "cursor-pointer bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800/40"
                              }`}
                              title={
                                isMarkingDisabled
                                  ? "Marking disabled: No class scheduled. Click 'Open Moved Session' to enable."
                                  : "Mark Present"
                              }
                            >
                              Present
                            </button>
                            <button
                              type="button"
                              disabled={isMarkingDisabled}
                              onClick={() => handleSetStatus(student, item.enrolledSubject, "late")}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                                isMarkingDisabled
                                  ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-600 border border-gray-200 dark:border-slate-700"
                                  : status === "late"
                                  ? "cursor-pointer bg-amber-500 text-white shadow-xs"
                                  : "cursor-pointer bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800/40"
                              }`}
                              title={
                                isMarkingDisabled
                                  ? "Marking disabled: No class scheduled. Click 'Open Moved Session' to enable."
                                  : "Mark Late"
                              }
                            >
                              Late
                            </button>
                            <button
                              type="button"
                              disabled={isMarkingDisabled}
                              onClick={() => handleSetStatus(student, item.enrolledSubject, "absent")}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                                isMarkingDisabled
                                  ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-600 border border-gray-200 dark:border-slate-700"
                                  : status === "absent"
                                  ? "cursor-pointer bg-rose-600 text-white shadow-xs"
                                  : "cursor-pointer bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 hover:bg-rose-100 border border-rose-200 dark:border-rose-800/40"
                              }`}
                              title={
                                isMarkingDisabled
                                  ? "Marking disabled: No class scheduled. Click 'Open Moved Session' to enable."
                                  : "Mark Absent"
                              }
                            >
                              Absent
                            </button>
                            <button
                              type="button"
                              disabled={isMarkingDisabled}
                              onClick={() => handleSetStatus(student, item.enrolledSubject, "excused")}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                                isMarkingDisabled
                                  ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-600 border border-gray-200 dark:border-slate-700"
                                  : status === "excused"
                                  ? "cursor-pointer bg-blue-600 text-white shadow-xs"
                                  : "cursor-pointer bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 hover:bg-blue-100 border border-blue-200 dark:border-blue-800/40"
                              }`}
                              title={
                                isMarkingDisabled
                                  ? "Marking disabled: No class scheduled. Click 'Open Moved Session' to enable."
                                  : "Mark Excused"
                              }
                            >
                              Excused
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal for Self Attendance Toggle */}
      <AnimatePresence>
        {confirmToggleModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-[#EAEBED] dark:border-slate-800 p-6 max-w-md w-full shadow-2xl space-y-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    allowSelfCheckIn
                      ? "bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60"
                      : "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60"
                  }`}
                >
                  {allowSelfCheckIn ? (
                    <Lock className="w-6 h-6" />
                  ) : (
                    <Unlock className="w-6 h-6" />
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                    {allowSelfCheckIn
                      ? "Disallow Self Attendance?"
                      : "Allow Self Attendance?"}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {allowSelfCheckIn ? (
                      <>
                        Are you sure you want to <strong>NOT ALLOW</strong> students to mark their own attendance
                        for <strong>{selectedSubject}</strong>? Students enrolled in {selectedSubject} will not be permitted to submit attendance themselves until you re-allow it.
                      </>
                    ) : (
                      <>
                        Are you sure you want to <strong>ALLOW</strong> students to mark their own attendance
                        for <strong>{selectedSubject}</strong>? Students enrolled in {selectedSubject} will be permitted to self-record their attendance.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setConfirmToggleModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleExecuteToggleSelfAttendance}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold text-white transition shadow-md cursor-pointer ${
                    allowSelfCheckIn
                      ? "bg-rose-600 hover:bg-rose-700 shadow-rose-600/20"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                  }`}
                >
                  {allowSelfCheckIn ? "Yes, Disallow (Lock)" : "Yes, Allow Self Attendance"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* SLIDE-OVER SIDE DRAWER: Shows students who are Present, Late, Absent, or Excused */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {sideDrawerStatus && (
          <div className="fixed inset-0 z-[250] overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSideDrawerStatus(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
            />

            {/* Slide-over panel (swipes in from right side) */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="absolute inset-y-0 right-0 max-w-full w-full sm:w-[440px] bg-white dark:bg-[#161F30] border-l border-[#EAEBED] dark:border-slate-800 shadow-2xl flex flex-col z-10"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-gray-50/50 dark:bg-slate-800/40">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                      sideDrawerStatus === "present"
                        ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60"
                        : sideDrawerStatus === "late"
                        ? "bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60"
                        : sideDrawerStatus === "absent"
                        ? "bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60"
                        : "bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60"
                    }`}
                  >
                    {sideDrawerStatus === "present" && <CheckCircle2 className="w-5 h-5" />}
                    {sideDrawerStatus === "late" && <Clock className="w-5 h-5" />}
                    {sideDrawerStatus === "absent" && <XCircle className="w-5 h-5" />}
                    {sideDrawerStatus === "excused" && <AlertCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-extrabold text-gray-900 dark:text-white capitalize">
                        {sideDrawerStatus} Students
                      </h2>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                          sideDrawerStatus === "present"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                            : sideDrawerStatus === "late"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                            : sideDrawerStatus === "absent"
                            ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                        }`}
                      >
                        {drawerStudents.length}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      {selectedSubject} • {selectedDate}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSideDrawerStatus(null)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  title="Close side panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Switcher Tabs (Inside Drawer) */}
              <div className="px-5 py-3 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-[#161F30]">
                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-slate-800/80 text-xs">
                  <button
                    type="button"
                    onClick={() => setSideDrawerStatus("present")}
                    className={`py-1.5 px-2 rounded-lg font-bold text-center transition cursor-pointer flex flex-col items-center gap-0.5 ${
                      sideDrawerStatus === "present"
                        ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs"
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-900"
                    }`}
                  >
                    <span>Present</span>
                    <span className="text-[10px] font-black opacity-80">{stats.present}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSideDrawerStatus("late")}
                    className={`py-1.5 px-2 rounded-lg font-bold text-center transition cursor-pointer flex flex-col items-center gap-0.5 ${
                      sideDrawerStatus === "late"
                        ? "bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs"
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-900"
                    }`}
                  >
                    <span>Late</span>
                    <span className="text-[10px] font-black opacity-80">{stats.late}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSideDrawerStatus("absent")}
                    className={`py-1.5 px-2 rounded-lg font-bold text-center transition cursor-pointer flex flex-col items-center gap-0.5 ${
                      sideDrawerStatus === "absent"
                        ? "bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-xs"
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-900"
                    }`}
                  >
                    <span>Absent</span>
                    <span className="text-[10px] font-black opacity-80">{stats.absent}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSideDrawerStatus("excused")}
                    className={`py-1.5 px-2 rounded-lg font-bold text-center transition cursor-pointer flex flex-col items-center gap-0.5 ${
                      sideDrawerStatus === "excused"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs"
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-900"
                    }`}
                  >
                    <span>Excused</span>
                    <span className="text-[10px] font-black opacity-80">{stats.excused}</span>
                  </button>
                </div>
              </div>

              {/* Student Cards List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {drawerStudents.length === 0 ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-dashed border-gray-200 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-gray-800 dark:text-slate-200 capitalize">
                      No {sideDrawerStatus} students found
                    </p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 mt-1 max-w-[240px]">
                      There are currently 0 students marked as {sideDrawerStatus} for {selectedSubject} on this date.
                    </p>
                  </div>
                ) : (
                  drawerStudents.map((item, idx) => {
                    const st = item.student;
                    const initial = (st.name || "S").charAt(0).toUpperCase();

                    return (
                      <div
                        key={st.id || st.studentId || idx}
                        className="p-4 rounded-2xl bg-white dark:bg-[#1A253A] border border-gray-200 dark:border-slate-800 shadow-xs hover:border-gray-300 dark:hover:border-slate-700 transition space-y-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-[#166534] dark:text-emerald-400 font-extrabold flex items-center justify-center text-sm shrink-0">
                              {initial}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                                  {st.name}
                                </h4>
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                                  {item.enrolledSubject}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 dark:text-slate-400 font-mono">
                                {st.studentId || "No ID"} • {st.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Status detail line */}
                        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-gray-100 dark:border-slate-800/80">
                          <span className="text-gray-500 dark:text-slate-400">
                            Time: <strong className="text-gray-700 dark:text-slate-300 font-mono">{item.markedAt || "Recorded"}</strong>
                          </span>
                          <span className="text-[10px] text-gray-400 dark:text-slate-400">
                            {item.markedBy === "student" ? (
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                                Self Attendance
                              </span>
                            ) : (
                              <span className="text-purple-600 dark:text-purple-400 font-bold">
                                Admin Marked
                              </span>
                            )}
                          </span>
                        </div>

                        {/* Quick action buttons to change status right from drawer */}
                        {item.status === "present" ? (
                          <div className="flex items-center gap-2 pt-1">
                            <span className="flex-1 py-1 rounded-lg text-[10px] font-bold text-center bg-emerald-600 text-white">
                              Present
                            </span>
                            <span className="text-[10px] text-gray-400 dark:text-slate-500 italic select-none">
                              Locked
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 pt-1">
                            {(["present", "late", "absent", "excused"] as AttendanceStatus[]).map((stKey) => {
                              const isCurrent = item.status === stKey;
                              return (
                                <button
                                  key={stKey}
                                  type="button"
                                  disabled={isMarkingDisabled}
                                  onClick={() => handleSetStatus(st, item.enrolledSubject, stKey)}
                                  className={`flex-1 py-1 rounded-lg text-[10px] font-bold capitalize transition ${
                                    isMarkingDisabled
                                      ? "opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-600"
                                      : isCurrent
                                      ? stKey === "present"
                                        ? "bg-emerald-600 text-white cursor-pointer"
                                        : stKey === "late"
                                        ? "bg-amber-500 text-white cursor-pointer"
                                        : stKey === "absent"
                                        ? "bg-rose-600 text-white cursor-pointer"
                                        : "bg-blue-600 text-white cursor-pointer"
                                      : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer"
                                  }`}
                                  title={
                                    isMarkingDisabled
                                      ? "Marking disabled: No class scheduled on this date. Click 'Open Moved Session' to enable."
                                      : `Mark ${stKey}`
                                  }
                                >
                                  {stKey}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/40 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-slate-400">
                  Showing <strong>{drawerStudents.length}</strong> {sideDrawerStatus}
                </span>
                <button
                  type="button"
                  onClick={() => setSideDrawerStatus(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-600 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* REALISTIC CALENDAR MODAL (Centered Modal with Backdrop)                   */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isCalendarModalOpen && (
          <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-[#EAEBED] dark:border-slate-800 p-6 max-w-sm sm:max-w-md w-full shadow-2xl space-y-4"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-[#166534] dark:text-emerald-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-white">
                      Attendance Calendar
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400">
                      View class days and manage attendance records
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCalendarModalOpen(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Class Schedule Days Interactive Bar */}
              <div className="p-3 rounded-2xl bg-gray-50/80 dark:bg-slate-800/60 border border-gray-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[11px] font-bold text-gray-800 dark:text-slate-200">
                      Class Schedule Days ({selectedSubject}):
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 dark:text-slate-500">
                    Click day to toggle
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {ALL_WEEK_DAYS.map((dayName) => {
                    const isSched = scheduleDays.includes(dayName);
                    const shortName = dayName.slice(0, 3);
                    return (
                      <button
                        key={dayName}
                        type="button"
                        onClick={() => handleToggleScheduleDay(dayName)}
                        className={`py-1.5 px-1 rounded-xl text-[10px] font-extrabold text-center transition cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                          isSched
                            ? "bg-emerald-600 text-white shadow-xs scale-[1.02]"
                            : "bg-white dark:bg-slate-700/60 text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600"
                        }`}
                        title={`Click to ${isSched ? "remove" : "add"} ${dayName} from schedule`}
                      >
                        <span>{shortName}</span>
                        {isSched && <Check className="w-2.5 h-2.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Month & Year Navigation */}
              <div className="flex items-center justify-between px-1">
                <span className="text-base font-black text-gray-900 dark:text-white tracking-tight">
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
                <div className="flex items-center gap-1 bg-gray-50 dark:bg-slate-800/80 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 transition cursor-pointer"
                    title="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleJumpToToday}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition cursor-pointer"
                    title="Jump to Today"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 transition cursor-pointer"
                    title="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Days of Week Row */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {DAY_NAMES.map((d, i) => {
                  const fullDayName = ALL_WEEK_DAYS[i];
                  const isScheduled = scheduleDays.includes(fullDayName);
                  return (
                    <div
                      key={d}
                      className={`text-[11px] font-extrabold uppercase py-1.5 rounded-xl transition flex flex-col items-center justify-center ${
                        isScheduled
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
                          : i === 0 || i === 6
                          ? "text-rose-500/80"
                          : "text-gray-400 dark:text-slate-500"
                      }`}
                      title={`${fullDayName}${isScheduled ? " (Class Scheduled)" : ""}`}
                    >
                      <span>{d}</span>
                      {isScheduled && (
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Realistic Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarCells.map((cell) => {
                  const isCurrent = cell.isCurrentMonth;
                  const isSel = cell.isSelected;
                  const isTod = cell.isToday;
                  const hasRec = cell.hasRecords;
                  const isSched = cell.isScheduledDay;
                  const isSpecial = cell.isSpecialSession;

                  return (
                    <button
                      key={cell.dateStr}
                      type="button"
                      onClick={() => handleSelectDateFromCalendar(cell.dateStr)}
                      className={`h-11 rounded-2xl flex flex-col items-center justify-center relative text-xs font-bold transition-all cursor-pointer select-none group ${
                        isSel
                          ? isSpecial
                            ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 font-black scale-105 z-10"
                            : "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-black scale-105 z-10"
                          : isTod
                          ? "border-2 border-emerald-500/80 text-emerald-600 dark:text-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20 font-black"
                          : isSpecial && isCurrent
                          ? "bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/70 dark:border-purple-800/50 text-purple-900 dark:text-purple-200 font-extrabold hover:bg-purple-100/60"
                          : isSched && isCurrent
                          ? "bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200 font-extrabold hover:bg-emerald-100/60"
                          : isCurrent
                          ? "text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800/80"
                          : "text-gray-300 dark:text-slate-600 hover:text-gray-500 dark:hover:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/40"
                      }`}
                      title={`${cell.dayOfWeekName}, ${cell.dateStr}${isSpecial ? " 🚀 (Moved Class Session)" : isSched ? " (Class Scheduled)" : ""}${hasRec ? " • Has Records" : ""}`}
                    >
                      <span>{cell.dayNum}</span>
                      <div className="flex items-center gap-0.5 absolute bottom-1">
                        {isSpecial && isCurrent && !isSel && (
                          <span className="text-[8px] leading-none">🚀</span>
                        )}
                        {isSched && isCurrent && !isSel && !isSpecial && (
                          <span className="text-[9px] font-black leading-none text-emerald-600 dark:text-emerald-400">
                            •
                          </span>
                        )}
                        {hasRec && !isSel && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Calendar Footer Info & Shortcuts */}
              <div className="pt-3 border-t border-gray-100 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-gray-700 dark:text-slate-300">
                        {selectedDate}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      <span>Class Day</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-slate-500">
                      <span className="text-[9px]">🚀</span>
                      <span>Moved Session</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsCalendarModalOpen(false)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>

                {/* Quick action: Open/Revert moved session for selected date */}
                {(() => {
                  const selInfo = isDateScheduledForSubject(selectedDate, selectedSubject);
                  if (selInfo.isSpecialSession) {
                    return (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/50">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">🚀</span>
                          <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300">
                            Moved session OPEN for {selectedDate}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleToggleDateSession(selectedDate, false)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-purple-200 dark:border-purple-700 text-[10px] font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/40 transition cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Revert
                        </button>
                      </div>
                    );
                  }
                  if (!selInfo.isScheduled && !selInfo.isCancelled) {
                    return (
                      <button
                        type="button"
                        onClick={() => handleToggleDateSession(selectedDate, true)}
                        className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/50 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300">
                          Open Moved Class Session for {selectedDate} ({selInfo.dayOfWeek})
                        </span>
                      </button>
                    );
                  }
                  return null;
                })()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
