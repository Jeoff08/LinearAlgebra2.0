// =====================================================================
// GradingManagementView — Spreadsheet-style Student Grading Interface
// Integrated into the Admin Dashboard as a nav view.
// =====================================================================

import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Trash2,
  Download,
  Upload,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  Edit3,
  Save,
  FileSpreadsheet,
  Users,
  BookOpen,
  ArrowUpDown,
  Info,
  AlertCircle,
  CheckCircle,
  Settings,
  Eye,
  EyeOff,
  Globe,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useGradingData } from "../../hooks/useGradingData";
import { useTheme } from "../../context/ThemeContext";
import type {
  GradingPeriod,
  GradingStudent,
  GradingActivity,
  SubjectGradingRecord,
  PeriodGradingData,
  StudentScore,
} from "../../types/grading";
import {
  GRADING_PERIODS,
  generateId,
  createDefaultStudent,
  createQuizActivity,
  createParticipationActivity,
  createExamActivity,
} from "../../types/grading";
import {
  computeStudentGrade,
  getScore,
  setScore,
  validateScore,
  generateGradeBreakdown,
} from "../../utils/gradingEngine";
import {
  exportGradingToExcel,
  exportPeriodToExcel,
  importStudentListFromExcel,
  importScoresFromExcel,
} from "../../utils/gradingExcel";
import {
  lookupGradeEquivalent,
  getGradeRemarks,
  formatGradeEquivalent,
} from "../../data/gradeEquivalentTable";

// =====================================================================
// Dynamic Spreadsheet Colors for Light and Dark Modes
// =====================================================================
const getThemeColors = (isDark: boolean) => {
  if (isDark) {
    return {
      // Container & borders
      tableBg: "#0E1726",
      borderColor: "#243247",
      hoverBg: "rgba(36, 48, 71, 0.4)",

      // Student Information
      studentInfoHeaderBg: "rgba(30, 41, 59, 0.95)",
      studentInfoHeaderText: "#93C5FD", // light blue
      studentInfoSubheaderBg: "rgba(22, 33, 49, 0.95)",
      studentInfoSubheaderText: "#94A3B8",
      studentRowEvenBg: "#0F172A",
      studentRowOddBg: "#141E33",
      studentNumberText: "#94A3B8",
      studentIdText: "#60A5FA", // light blue
      studentNameText: "#F8FAFC", // crisp readable white

      // Quizzes (25%)
      quizHeaderBg: "rgba(69, 26, 3, 0.9)", // deep dark warm amber
      quizHeaderText: "#FDE047", // bright gold
      quizSubheaderBg: "rgba(42, 27, 10, 0.85)",
      quizSubheaderText: "#FDE68A",
      quizTotalHeaderBg: "rgba(113, 63, 18, 0.85)",
      quizTotalHeaderText: "#FEF08A",
      quizCellBg: "rgba(245, 158, 11, 0.09)",
      quizTotalCellBg: "rgba(245, 158, 11, 0.22)",
      quizTotalCellText: "#FDE047",

      // Class Participation (15%)
      participationHeaderBg: "rgba(6, 78, 59, 0.9)", // deep forest emerald
      participationHeaderText: "#86EFAC", // mint green
      participationSubheaderBg: "rgba(6, 46, 36, 0.85)",
      participationSubheaderText: "#A7F3D0",
      participationTotalHeaderBg: "rgba(4, 120, 87, 0.75)",
      participationTotalHeaderText: "#6EE7B7",
      participationCellBg: "rgba(16, 185, 129, 0.09)",
      participationTotalCellBg: "rgba(16, 185, 129, 0.22)",
      participationTotalCellText: "#6EE7B7",

      // Exam (60%)
      examHeaderBg: "rgba(12, 74, 110, 0.9)", // deep ocean sky blue
      examHeaderText: "#7DD3FC",
      examSubheaderBg: "rgba(10, 45, 68, 0.85)",
      examSubheaderText: "#BAE6FD",
      examCellBg: "rgba(14, 165, 233, 0.09)",
      examCellText: "#F8FAFC",

      // Total Grade
      totalGradeHeaderBg: "rgba(124, 45, 18, 0.85)", // deep dark orange
      totalGradeHeaderText: "#FDBA74",
      totalGradeCellBg: "rgba(249, 115, 22, 0.16)",
      totalGradeCellText: "#FDBA74",

      // Rounded
      roundedHeaderBg: "rgba(124, 45, 18, 0.95)",
      roundedHeaderText: "#FED7AA",
      roundedCellBg: "rgba(249, 115, 22, 0.26)",
      roundedCellText: "#FED7AA",

      // Grade Equivalent
      gradeEquivalentHeaderBg: "rgba(136, 19, 55, 0.85)", // deep dark ruby/rose
      gradeEquivalentHeaderText: "#FDA4AF",
      gradeEquivalentCellBg: "rgba(244, 63, 94, 0.20)",
      gradeEquivalentCellText: "#FDA4AF",

      // Overall GPA
      gpaHeaderBg: "rgba(22, 101, 52, 0.90)", // rich emerald
      gpaHeaderText: "#A7F3D0",
      gpaCellBg: "rgba(16, 185, 129, 0.20)",
      gpaCellText: "#6EE7B7",

      // Max Score row
      maxScoreRowBg: "#0F172A",
      maxScoreLabelBg: "#1E293B",
      maxScoreLabelText: "#94A3B8",
      maxScoreCellText: "#F8FAFC",
    };
  }

  // Light Mode (crisp Excel-inspired palette)
  return {
    // Container & borders
    tableBg: "#FFFFFF",
    borderColor: "#E2E8F0",
    hoverBg: "rgba(224, 242, 254, 0.35)",

    // Student Information
    studentInfoHeaderBg: "#E8F0FE",
    studentInfoHeaderText: "#1E40AF", // blue-800
    studentInfoSubheaderBg: "#E8F0FE",
    studentInfoSubheaderText: "#475569", // slate-600
    studentRowEvenBg: "#FFFFFF",
    studentRowOddBg: "#F8FAFC",
    studentNumberText: "#64748B",
    studentIdText: "#1D4ED8", // blue-700
    studentNameText: "#0F172A", // slate-900

    // Quizzes (25%)
    quizHeaderBg: "#FEF9C3", // pastel yellow
    quizHeaderText: "#854D0E", // amber-800
    quizSubheaderBg: "#FFFDE7",
    quizSubheaderText: "#64748B",
    quizTotalHeaderBg: "#FEF08A",
    quizTotalHeaderText: "#713F12",
    quizCellBg: "rgba(254, 249, 195, 0.45)",
    quizTotalCellBg: "rgba(254, 240, 138, 0.7)",
    quizTotalCellText: "#713F12",

    // Class Participation (15%)
    participationHeaderBg: "#DCFCE7", // pastel green
    participationHeaderText: "#166534", // green-800
    participationSubheaderBg: "#F0FDF4",
    participationSubheaderText: "#64748B",
    participationTotalHeaderBg: "#BBF7D0",
    participationTotalHeaderText: "#14532D",
    participationCellBg: "rgba(220, 252, 231, 0.45)",
    participationTotalCellBg: "rgba(187, 247, 208, 0.7)",
    participationTotalCellText: "#14532D",

    // Exam (60%)
    examHeaderBg: "#DBEAFE", // pastel blue
    examHeaderText: "#1E40AF",
    examSubheaderBg: "#EFF6FF",
    examSubheaderText: "#1E3A8A",
    examCellBg: "rgba(219, 234, 254, 0.45)",
    examCellText: "#0F172A",

    // Total Grade
    totalGradeHeaderBg: "#FFEDD5", // pastel orange
    totalGradeHeaderText: "#9A3412",
    totalGradeCellBg: "rgba(255, 237, 213, 0.6)",
    totalGradeCellText: "#9A3412",

    // Rounded
    roundedHeaderBg: "#FED7AA",
    roundedHeaderText: "#7C2D12",
    roundedCellBg: "rgba(254, 215, 170, 0.6)",
    roundedCellText: "#7C2D12",

    // Grade Equivalent
    gradeEquivalentHeaderBg: "#FFE4E6", // pastel rose
    gradeEquivalentHeaderText: "#991B1B",
    gradeEquivalentCellBg: "rgba(254, 226, 226, 0.6)",
    gradeEquivalentCellText: "#991B1B",

    // Overall GPA
    gpaHeaderBg: "#DCFCE7", // soft emerald/mint
    gpaHeaderText: "#14532D",
    gpaCellBg: "rgba(220, 252, 231, 0.65)",
    gpaCellText: "#166534",

    // Max Score row
    maxScoreRowBg: "#F8FAFC",
    maxScoreLabelBg: "#E2E8F0",
    maxScoreLabelText: "#475569",
    maxScoreCellText: "#1E293B",
  };
};

// =====================================================================
// Sub-components
// =====================================================================

/** Score Input Cell */
const ScoreCell: React.FC<{
  value: number | null;
  maxScore: number;
  onChange: (val: number | null) => void;
  disabled?: boolean;
}> = ({ value, maxScore, onChange, disabled }) => {
  const [localVal, setLocalVal] = useState(value !== null ? String(value) : "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLocalVal(value !== null ? String(value) : "");
  }, [value]);

  const handleBlur = () => {
    if (localVal.trim() === "") {
      onChange(null);
      setError(null);
      return;
    }
    const num = Number(localVal);
    if (isNaN(num)) {
      setError("Invalid");
      return;
    }
    const err = validateScore(num, maxScore);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    onChange(num);
  };

  return (
    <div className="relative">
      <input
        type="text"
        inputMode="numeric"
        value={localVal}
        disabled={disabled}
        onChange={(e) => {
          setLocalVal(e.target.value);
          setError(null);
        }}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
          // Tab navigation
          if (e.key === "Tab") {
            handleBlur();
          }
        }}
        className={`grading-cell-input w-full h-9 text-center text-sm font-semibold border-0 outline-none transition-colors
          ${error ? "!text-rose-500 !bg-rose-500/10" : "text-gray-800 dark:text-slate-100"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-black/5 dark:hover:bg-white/10 focus:ring-1 focus:ring-emerald-400/50"}
        `}
        style={{ minWidth: 40 }}
        title={error || `Max: ${maxScore}`}
      />
      {error && (
        <div className="absolute -bottom-4 left-0 right-0 text-[9px] text-rose-500 dark:text-rose-400 font-bold text-center truncate z-10">
          {error}
        </div>
      )}
    </div>
  );
};

/** Max Score Cell (editable) */
const MaxScoreCell: React.FC<{
  value: number;
  onChange: (val: number) => void;
}> = ({ value, onChange }) => {
  const [localVal, setLocalVal] = useState(String(value));

  useEffect(() => {
    setLocalVal(String(value));
  }, [value]);

  const handleBlur = () => {
    const num = Number(localVal);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    } else {
      setLocalVal(String(value));
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={localVal}
      onChange={(e) => setLocalVal(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
      className="grading-cell-input w-full h-9 text-center text-sm font-bold border-0 outline-none transition-colors text-gray-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 focus:ring-1 focus:ring-blue-400/50"
      title="Max score"
    />
  );
};

/** Subject Info Header */
const SubjectHeader: React.FC<{
  subject: SubjectGradingRecord["subject"];
  onUpdate: (updates: Partial<SubjectGradingRecord["subject"]>) => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
}> = ({ subject, onUpdate, isEditing, setIsEditing }) => {
  const fields = [
    { key: "subjectCode", label: "Subject Code" },
    { key: "offerNumber", label: "Offer No." },
    { key: "academicYear", label: "Academic Year" },
    { key: "semester", label: "Semester" },
    { key: "instructorName", label: "Instructor" },
  ] as const;

  return (
    <div className="bg-gradient-to-r from-[#166534]/5 to-transparent dark:from-[#166534]/15 dark:to-transparent border border-[#166534]/10 dark:border-emerald-800/30 rounded-2xl p-4 mb-4 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-[#166534] dark:text-emerald-400 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Subject Information
        </h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer
            bg-[#166534]/10 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 hover:bg-[#166534]/20 dark:hover:bg-emerald-900/40 active:scale-95"
        >
          {isEditing ? (
            <>
              <Save className="w-3.5 h-3.5" /> Done
            </>
          ) : (
            <>
              <Edit3 className="w-3.5 h-3.5" /> Edit
            </>
          )}
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {fields.map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
              {label}
            </span>
            {isEditing ? (
              <input
                type="text"
                value={(subject as any)[key] || ""}
                onChange={(e) => onUpdate({ [key]: e.target.value })}
                className="h-8 px-2.5 rounded-lg border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-800 dark:text-slate-100 bg-white dark:bg-[#0F172A] focus:ring-2 focus:ring-[#166534]/30 focus:border-[#166534]/40 outline-none transition-all"
                placeholder={label}
              />
            ) : (
              <span className="text-xs font-semibold text-gray-700 dark:text-slate-200 min-h-[2rem] flex items-center">
                {(subject as any)[key] || (
                  <span className="text-gray-300 dark:text-slate-600 italic">Not set</span>
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/** Student Info Modal */
const StudentModal: React.FC<{
  student: GradingStudent | null;
  mode: "add" | "edit";
  onSave: (student: GradingStudent) => void;
  onClose: () => void;
}> = ({ student, mode, onSave, onClose }) => {
  const [form, setForm] = useState<GradingStudent>(
    student || {
      id: generateId(),
      studentNumber: "",
      studentId: "",
      fullName: "",
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#161F30] rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 w-full max-w-md p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-gray-900 dark:text-slate-100">
            {mode === "add" ? "Add Student" : "Edit Student"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 dark:text-slate-400 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1 block">
              Student Number
            </label>
            <input
              type="text"
              value={form.studentNumber}
              onChange={(e) =>
                setForm({ ...form, studentNumber: e.target.value })
              }
              className="w-full h-10 px-3 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-800 dark:text-slate-100 bg-white dark:bg-[#0F172A] focus:ring-2 focus:ring-[#166534]/30 outline-none"
              placeholder="e.g. 1"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1 block">
              Student ID
            </label>
            <input
              type="text"
              value={form.studentId}
              onChange={(e) => setForm({ ...form, studentId: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-800 dark:text-slate-100 bg-white dark:bg-[#0F172A] focus:ring-2 focus:ring-[#166534]/30 outline-none"
              placeholder="e.g. 2026-02182"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-800 dark:text-slate-100 bg-white dark:bg-[#0F172A] focus:ring-2 focus:ring-[#166534]/30 outline-none"
              placeholder="e.g. Doe, John Michael"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 h-10 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-semibold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.fullName.trim()) onSave(form);
            }}
            className="flex-1 h-10 rounded-xl bg-[#166534] dark:bg-emerald-600 text-white text-sm font-bold hover:bg-[#14532d] dark:hover:bg-emerald-700 transition active:scale-95 cursor-pointer"
          >
            {mode === "add" ? "Add Student" : "Save Changes"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** Grade Breakdown Modal */
const GradeBreakdownModal: React.FC<{
  student: GradingStudent;
  periodData: PeriodGradingData;
  periodLabel: string;
  onClose: () => void;
  record?: SubjectGradingRecord;
}> = ({ student, periodData, periodLabel, onClose, record }) => {
  const comp = computeStudentGrade(periodData, student.id);

  // Compute student overall GPA across all periods
  const studentGpaInfo = useMemo(() => {
    if (!record) return null;
    const periodComps = GRADING_PERIODS.map(({ key }) => {
      const pData = record.periods[key];
      if (!pData) return null;
      const c = computeStudentGrade(pData, student.id);
      const studentScores = pData.scores.filter((sc) => sc.studentId === student.id);
      const hasScores = studentScores.some((sc) => sc.score !== null && sc.score !== undefined);
      const hasOverride = pData.totalQuizOverrides?.[student.id] !== undefined || pData.totalParticipationOverrides?.[student.id] !== undefined;
      return hasScores || hasOverride ? c : null;
    }).filter(Boolean);

    if (periodComps.length === 0) return null;
    const avgRounded = Math.round(periodComps.reduce((acc, curr) => acc + (curr?.roundedGrade ?? 0), 0) / periodComps.length);
    const equiv = lookupGradeEquivalent(avgRounded);
    return {
      avgRounded,
      equiv,
      count: periodComps.length,
      remarks: getGradeRemarks(equiv),
    };
  }, [record, student.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#161F30] rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 w-full max-w-lg p-6 max-h-[85vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-slate-100">{student.fullName}</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
              {periodLabel} Grade Computation • ID: {student.studentId}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 dark:text-slate-400 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!comp.isComplete && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 mb-4">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs text-amber-700 dark:text-amber-300 font-medium">
              Some scores are missing. Grade may not be accurate.
            </span>
          </div>
        )}

        {/* Breakdown sections */}
        <div className="space-y-4">
          {/* Quizzes */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800/40 rounded-xl p-4">
            <h4 className="text-xs font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              QUIZZES (25%)
            </h4>
            <div className="text-xs text-gray-700 dark:text-slate-300 font-mono leading-relaxed">
              <p>
                {comp.totalQuizScore} / {comp.maxQuizScore} × 50 + 50 ={" "}
                <span className="font-bold text-yellow-800 dark:text-yellow-300">
                  {comp.quizTransmuted.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          {/* Class Participation */}
          <div className="bg-green-50 dark:bg-emerald-950/30 border border-green-200 dark:border-emerald-800/40 rounded-xl p-4">
            <h4 className="text-xs font-bold text-green-800 dark:text-emerald-300 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              CLASS PARTICIPATION (15%)
            </h4>
            <div className="text-xs text-gray-700 dark:text-slate-300 font-mono leading-relaxed">
              <p>
                {comp.totalParticipationScore} / {comp.maxParticipationScore} × 50 + 50 ={" "}
                <span className="font-bold text-green-800 dark:text-emerald-300">
                  {comp.participationTransmuted.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          {/* Examination */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-xl p-4">
            <h4 className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              EXAMINATION (60%)
            </h4>
            <div className="text-xs text-gray-700 dark:text-slate-300 font-mono leading-relaxed">
              <p>
                {comp.examScore} / {comp.maxExamScore} × 50 + 50 ={" "}
                <span className="font-bold text-blue-800 dark:text-blue-300">
                  {comp.examTransmuted.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          {/* Total Grade */}
          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/40 rounded-xl p-4">
            <h4 className="text-xs font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              TOTAL GRADE
            </h4>
            <div className="text-xs text-gray-700 dark:text-slate-300 font-mono leading-relaxed space-y-1">
              <p>
                ({comp.quizTransmuted.toFixed(2)} × 0.25) + ({comp.participationTransmuted.toFixed(2)} × 0.15) + ({comp.examTransmuted.toFixed(2)} × 0.60)
              </p>
              <p>
                = {(comp.quizTransmuted * 0.25).toFixed(2)} + {(comp.participationTransmuted * 0.15).toFixed(2)} + {(comp.examTransmuted * 0.60).toFixed(2)}
              </p>
              <p className="text-base font-black text-orange-800 dark:text-orange-300">
                = {comp.totalGrade.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Final Result */}
          <div className="bg-gradient-to-r from-[#166534]/10 to-transparent dark:from-emerald-950/40 dark:to-transparent border border-[#166534]/20 dark:border-emerald-800/40 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Rounded Grade
              </p>
              <p className="text-2xl font-black text-gray-900 dark:text-slate-100">{comp.roundedGrade}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                {periodLabel} Equivalent
              </p>
              <p className="text-2xl font-black text-[#166534] dark:text-emerald-400">{comp.gradeEquivalent}</p>
            </div>
          </div>

          {/* Student Overall GPA Banner */}
          {studentGpaInfo && (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 rounded-xl p-4 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  Overall Subject GPA ({studentGpaInfo.count} {studentGpaInfo.count === 1 ? "term" : "terms"} recorded)
                </p>
                <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 font-semibold mt-0.5">
                  Average: {studentGpaInfo.avgRounded} / 100 • {studentGpaInfo.remarks.text}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                  {formatGradeEquivalent(studentGpaInfo.equiv)}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// =====================================================================
// MAIN COMPONENT
// =====================================================================

export const GradingManagementView: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<GradingPeriod | "overall">("prelim");
  const {
    records,
    activeSubjectId,
    setActiveSubjectId,
    activePeriod,
    setActivePeriod,
    activeRecord,
    activePeriodData,
    addSubject,
    updateSubject,
    deleteSubject,
    updateRecord,
    togglePublishGrades,
    clearAllGradingScores,
  } = useGradingData();

  // UI state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<"number" | "id" | "name">("number");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [isEditingSubject, setIsEditingSubject] = useState(false);
  const [studentModal, setStudentModal] = useState<{
    mode: "add" | "edit";
    student: GradingStudent | null;
  } | null>(null);
  const [breakdownModal, setBreakdownModal] = useState<GradingStudent | null>(null);
  const [showSubjectPicker, setShowSubjectPicker] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [publishConfirm, setPublishConfirm] = useState<boolean | null>(null);
  const [publishModalAlert, setPublishModalAlert] = useState<{ title: string; message: string; type: "published" | "unpublished" } | null>(null);
  const [selectedPublishTerms, setSelectedPublishTerms] = useState<GradingPeriod[]>(["prelim"]);
  const [importToast, setImportToast] = useState<{
    type: "success" | "warning" | "error";
    message: string;
  } | null>(null);

  const tableRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle fullscreen mode for the grading table
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scoreImportRef = useRef<HTMLInputElement>(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = useMemo(() => getThemeColors(isDark), [isDark]);

  // Keep selectedTab in sync when activePeriod changes
  useEffect(() => {
    if (selectedTab !== "overall" && selectedTab !== activePeriod) {
      setSelectedTab(activePeriod);
    }
  }, [activePeriod]);

  // Auto-dismiss publish/unpublish success modal after 2 seconds
  useEffect(() => {
    if (!publishModalAlert) return;
    const t = setTimeout(() => {
      setPublishModalAlert(null);
    }, 2000);
    return () => clearTimeout(t);
  }, [publishModalAlert]);

  // Auto-dismiss toast
  useEffect(() => {
    if (importToast) {
      const t = setTimeout(() => setImportToast(null), 5000);
      return () => clearTimeout(t);
    }
  }, [importToast]);

  // ===== Derived Data =====
  const students = activeRecord?.students ?? [];
  const periodData = activePeriodData;

  // Auto-heal: Ensure any quiz activity across ANY period (prelim, midterm, semi-final, final)
  // that has student scores (even 0) has its maxScore permanently saved in state & localStorage
  // without triggering continuous twitching/re-render loops!
  useEffect(() => {
    if (!activeSubjectId || !activeRecord) return;
    let needsFix = false;

    const allPeriods: GradingPeriod[] = ["prelim", "midterm", "semi-final", "final"];
    for (const pKey of allPeriods) {
      const pd = activeRecord.periods?.[pKey];
      if (!pd) continue;
      const qActs = pd.quizActivities || [];
      const scs = pd.scores || [];

      for (const q of qActs) {
        const activityScores = scs.filter((s) => s.activityId === q.id && s.score !== null);
        if (activityScores.length > 0) {
          const highestScore = Math.max(0, ...activityScores.map((s) => Number(s.score || 0)));
          if (q.maxScore === 0 || q.maxScore < highestScore) {
            needsFix = true;
            break;
          }
        }
      }
      if (needsFix) break;
    }

    if (needsFix) {
      updateRecord(activeSubjectId, (rec) => {
        const updatedPeriods = { ...rec.periods };
        let anyModified = false;
        allPeriods.forEach((pKey) => {
          const pd = updatedPeriods[pKey];
          if (!pd) return;
          const fixedQActs = pd.quizActivities.map((q) => {
            const activityScores = pd.scores.filter((s) => s.activityId === q.id && s.score !== null);
            if (activityScores.length > 0) {
              const highestScore = Math.max(0, ...activityScores.map((s) => Number(s.score || 0)));
              if (q.maxScore === 0 || q.maxScore < highestScore) {
                anyModified = true;
                return { ...q, maxScore: Math.max(highestScore, 10) };
              }
            }
            return q;
          });
          if (anyModified) {
            updatedPeriods[pKey] = {
              ...pd,
              quizActivities: fixedQActs,
            };
          }
        });
        if (!anyModified) return rec;
        return {
          ...rec,
          periods: updatedPeriods,
        };
      });
    }
  }, [activeSubjectId, activeRecord, updateRecord]);

  const filteredStudents = useMemo(() => {
    let list = [...students];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.fullName.toLowerCase().includes(q) ||
          s.studentId.toLowerCase().includes(q) ||
          s.studentNumber.includes(q)
      );
    }
    list.sort((a, b) => {
      let cmp = 0;
      if (sortField === "number") cmp = Number(a.studentNumber) - Number(b.studentNumber);
      else if (sortField === "id") cmp = a.studentId.localeCompare(b.studentId);
      else cmp = a.fullName.localeCompare(b.fullName);
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [students, searchQuery, sortField, sortDir]);

  const periodLabel = GRADING_PERIODS.find((p) => p.key === activePeriod)?.label ?? "";

  // ===== Handlers =====

  const handleAddStudent = useCallback(() => {
    setStudentModal({
      mode: "add",
      student: {
        id: generateId(),
        studentNumber: String(students.length + 1),
        studentId: "",
        fullName: "",
      },
    });
  }, [students.length]);

  const handleSaveStudent = useCallback(
    (student: GradingStudent) => {
      if (!activeSubjectId) return;
      updateRecord(activeSubjectId, (rec) => {
        if (studentModal?.mode === "add") {
          return { ...rec, students: [...rec.students, student] };
        } else {
          return {
            ...rec,
            students: rec.students.map((s) =>
              s.id === student.id ? student : s
            ),
          };
        }
      });
      setStudentModal(null);
    },
    [activeSubjectId, updateRecord, studentModal?.mode]
  );

  const handleDeleteStudent = useCallback(
    (studentId: string) => {
      if (!activeSubjectId) return;
      updateRecord(activeSubjectId, (rec) => {
        const newStudents = rec.students.filter((s) => s.id !== studentId);
        // Also clean up scores
        const newPeriods = { ...rec.periods };
        for (const pKey of Object.keys(newPeriods) as GradingPeriod[]) {
          newPeriods[pKey] = {
            ...newPeriods[pKey],
            scores: newPeriods[pKey].scores.filter((s) => s.studentId !== studentId),
          };
        }
        return { ...rec, students: newStudents, periods: newPeriods };
      });
    },
    [activeSubjectId, updateRecord]
  );

  const handleScoreChange = useCallback(
    (studentId: string, activityId: string, value: number | null) => {
      if (!activeSubjectId || !activePeriod) return;
      updateRecord(activeSubjectId, (rec) => {
        const pd = rec.periods[activePeriod];
        const updatedScores = setScore(pd.scores, studentId, activityId, value);
        
        // Auto-fix: If a score is entered for an activity whose maxScore is currently 0 or smaller than score,
        // automatically set maxScore to at least the score (or default 10) so it never stays 0!
        let updatedQuizActivities = pd.quizActivities;
        let updatedPartActivities = pd.participationActivities;
        let updatedExam = pd.examActivity;

        if (value !== null && value > 0) {
          const qTarget = pd.quizActivities.find((q) => q.id === activityId);
          if (qTarget && (qTarget.maxScore === 0 || qTarget.maxScore < value)) {
            const newMax = Math.max(value, 10);
            updatedQuizActivities = pd.quizActivities.map((q) =>
              q.id === activityId ? { ...q, maxScore: newMax } : q
            );
          }
          const pTarget = pd.participationActivities.find((p) => p.id === activityId);
          if (pTarget && (pTarget.maxScore === 0 || pTarget.maxScore < value)) {
            const newMax = Math.max(value, 10);
            updatedPartActivities = pd.participationActivities.map((p) =>
              p.id === activityId ? { ...p, maxScore: newMax } : p
            );
          }
          if (pd.examActivity.id === activityId && (pd.examActivity.maxScore === 0 || pd.examActivity.maxScore < value)) {
            updatedExam = { ...pd.examActivity, maxScore: Math.max(value, 50) };
          }
        }

        return {
          ...rec,
          periods: {
            ...rec.periods,
            [activePeriod]: {
              ...pd,
              quizActivities: updatedQuizActivities,
              participationActivities: updatedPartActivities,
              examActivity: updatedExam,
              scores: updatedScores,
            },
          },
        };
      });
    },
    [activeSubjectId, activePeriod, updateRecord]
  );

  const handleMaxScoreChange = useCallback(
    (activityId: string, newMax: number, actType: "quiz" | "participation" | "exam") => {
      if (!activeSubjectId || !activePeriod) return;
      updateRecord(activeSubjectId, (rec) => {
        const pd = rec.periods[activePeriod];
        let updated: PeriodGradingData;

        if (actType === "quiz") {
          updated = {
            ...pd,
            quizActivities: pd.quizActivities.map((a) =>
              a.id === activityId ? { ...a, maxScore: newMax } : a
            ),
          };
        } else if (actType === "participation") {
          updated = {
            ...pd,
            participationActivities: pd.participationActivities.map((a) =>
              a.id === activityId ? { ...a, maxScore: newMax } : a
            ),
          };
        } else {
          updated = {
            ...pd,
            examActivity: { ...pd.examActivity, maxScore: newMax },
          };
        }

        return {
          ...rec,
          periods: { ...rec.periods, [activePeriod]: updated },
        };
      });
    },
    [activeSubjectId, activePeriod, updateRecord]
  );

  const handleTotalOverride = useCallback(
    (studentId: string, value: number | null, type: "quiz" | "participation") => {
      if (!activeSubjectId || !activePeriod) return;
      updateRecord(activeSubjectId, (rec) => {
        const pd = rec.periods[activePeriod];
        const overrideKey = type === "quiz" ? "totalQuizOverrides" : "totalParticipationOverrides";
        const overrides = { ...(pd[overrideKey] || {}) };
        if (value === null) {
          delete overrides[studentId];
        } else {
          overrides[studentId] = value;
        }
        return {
          ...rec,
          periods: {
            ...rec.periods,
            [activePeriod]: { ...pd, [overrideKey]: overrides },
          },
        };
      });
    },
    [activeSubjectId, activePeriod, updateRecord]
  );

  const handleAddQuiz = useCallback(() => {
    if (!activeSubjectId || !activePeriod) return;
    updateRecord(activeSubjectId, (rec) => {
      const pd = rec.periods[activePeriod];
      const newIdx = pd.quizActivities.length;
      return {
        ...rec,
        periods: {
          ...rec.periods,
          [activePeriod]: {
            ...pd,
            quizActivities: [...pd.quizActivities, createQuizActivity(newIdx)],
          },
        },
      };
    });
  }, [activeSubjectId, activePeriod, updateRecord]);

  const handleRemoveQuiz = useCallback(
    (actId: string) => {
      if (!activeSubjectId || !activePeriod) return;
      updateRecord(activeSubjectId, (rec) => {
        const pd = rec.periods[activePeriod];
        return {
          ...rec,
          periods: {
            ...rec.periods,
            [activePeriod]: {
              ...pd,
              quizActivities: pd.quizActivities
                .filter((a) => a.id !== actId)
                .map((a, i) => ({ ...a, index: i, label: `Quiz ${i + 1}` })),
              scores: pd.scores.filter((s) => s.activityId !== actId),
            },
          },
        };
      });
    },
    [activeSubjectId, activePeriod, updateRecord]
  );

  const handleAddParticipation = useCallback(() => {
    if (!activeSubjectId || !activePeriod) return;
    updateRecord(activeSubjectId, (rec) => {
      const pd = rec.periods[activePeriod];
      const newIdx = pd.participationActivities.length;
      return {
        ...rec,
        periods: {
          ...rec.periods,
          [activePeriod]: {
            ...pd,
            participationActivities: [
              ...pd.participationActivities,
              createParticipationActivity(newIdx),
            ],
          },
        },
      };
    });
  }, [activeSubjectId, activePeriod, updateRecord]);

  const handleRemoveParticipation = useCallback(
    (actId: string) => {
      if (!activeSubjectId || !activePeriod) return;
      updateRecord(activeSubjectId, (rec) => {
        const pd = rec.periods[activePeriod];
        return {
          ...rec,
          periods: {
            ...rec.periods,
            [activePeriod]: {
              ...pd,
              participationActivities: pd.participationActivities
                .filter((a) => a.id !== actId)
                .map((a, i) => ({ ...a, index: i, label: `CP ${i + 1}` })),
              scores: pd.scores.filter((s) => s.activityId !== actId),
            },
          },
        };
      });
    },
    [activeSubjectId, activePeriod, updateRecord]
  );

  const handleImportStudents = useCallback(async () => {
    if (!activeSubjectId) return;
    fileInputRef.current?.click();
  }, [activeSubjectId]);

  const handleStudentFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !activeSubjectId) return;
      try {
        const imported = await importStudentListFromExcel(file);
        updateRecord(activeSubjectId, (rec) => ({
          ...rec,
          students: [
            ...rec.students,
            ...imported.filter(
              (imp) => !rec.students.some((s) => s.studentId === imp.studentId)
            ),
          ],
        }));
        setImportToast({
          type: "success",
          message: `Imported ${imported.length} students successfully.`,
        });
      } catch (err) {
        setImportToast({
          type: "error",
          message: `Import failed: ${err}`,
        });
      }
      e.target.value = "";
    },
    [activeSubjectId, updateRecord]
  );

  const handleImportScores = useCallback(async () => {
    if (!activeSubjectId) return;
    scoreImportRef.current?.click();
  }, [activeSubjectId]);

  const handleScoreFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !activeSubjectId || !periodData) return;
      try {
        const { scores, warnings } = await importScoresFromExcel(
          file,
          students,
          periodData
        );
        updateRecord(activeSubjectId, (rec) => ({
          ...rec,
          periods: {
            ...rec.periods,
            [activePeriod]: { ...rec.periods[activePeriod], scores },
          },
        }));
        if (warnings.length > 0) {
          setImportToast({
            type: "warning",
            message: `Imported with ${warnings.length} warning(s): ${warnings[0]}`,
          });
        } else {
          setImportToast({
            type: "success",
            message: "Scores imported successfully.",
          });
        }
      } catch (err) {
        setImportToast({
          type: "error",
          message: `Score import failed: ${err}`,
        });
      }
      e.target.value = "";
    },
    [activeSubjectId, activePeriod, periodData, students, updateRecord]
  );

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  // ===== RENDER =====

  // No subjects yet — show empty state
  if (records.length === 0 || !activeRecord) {
    return (
      <div className="p-6 sm:p-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center mb-6 shadow-lg shadow-[#166534]/20">
            <FileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Student Grading Management
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-md">
            Create your first subject to start managing student grades with
            spreadsheet-style grading tables, automatic computations, and Excel
            import/export.
          </p>
          <button
            onClick={() => addSubject()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#166534] text-white text-sm font-bold hover:bg-[#14532d] transition shadow-md shadow-[#166534]/30 active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Create Subject
          </button>
        </div>
      </div>
    );
  }

  const quizActivities = periodData?.quizActivities ?? [];
  const participationActivities = periodData?.participationActivities ?? [];
  const examActivity = periodData?.examActivity;

  const totalMaxQuiz = quizActivities.reduce((s, a) => s + a.maxScore, 0);
  const totalMaxParticipation = participationActivities.reduce(
    (s, a) => s + a.maxScore,
    0
  );

  return (
    <div className="p-4 sm:p-6 max-w-full mx-auto pb-16">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls,.csv"
        className="hidden"
        onChange={handleStudentFileChange}
      />
      <input
        ref={scoreImportRef}
        type="file"
        accept=".xlsx,.xls,.csv"
        className="hidden"
        onChange={handleScoreFileChange}
      />

      {/* Toast notification */}
      <AnimatePresence>
        {importToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 right-6 z-[300] flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${
              importToast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : importToast.type === "warning"
                ? "bg-amber-50 border-amber-200 text-amber-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {importToast.type === "success" ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {importToast.message}
            <button
              onClick={() => setImportToast(null)}
              className="ml-2 p-0.5 rounded hover:bg-black/5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Subject Selector & Top Bar ===== */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <button
              onClick={() => setShowSubjectPicker(!showSubjectPicker)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-700 text-sm font-bold text-gray-800 dark:text-slate-100 hover:border-[#166534]/30 dark:hover:border-emerald-500/30 hover:bg-[#166534]/5 dark:hover:bg-emerald-950/20 transition cursor-pointer shadow-xs"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
              {activeRecord.subject.subjectCode || "Select Subject"}
              {activeRecord.subject.offerNumber &&
                ` - ${activeRecord.subject.offerNumber}`}
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 dark:text-slate-400" />
            </button>
            <AnimatePresence>
              {showSubjectPicker && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute top-full mt-1 left-0 w-72 bg-white dark:bg-[#161F30] rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl z-50 p-2 max-h-80 overflow-y-auto"
                >
                  {records.map((r) => (
                    <button
                      key={r.subject.id}
                      onClick={() => {
                        setActiveSubjectId(r.subject.id);
                        setShowSubjectPicker(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-medium transition cursor-pointer ${
                        r.subject.id === activeSubjectId
                          ? "bg-[#166534]/10 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 font-bold"
                          : "text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div>
                        <p className="font-bold">
                          {r.subject.subjectCode || "Untitled"}{" "}
                          {r.subject.offerNumber && `(${r.subject.offerNumber})`}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-slate-400 mt-0.5">
                          {r.subject.subjectName || "No name"} •{" "}
                          {r.students.length} students
                        </p>
                      </div>
                      {r.subject.id === activeSubjectId && (
                        <CheckCircle className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                      )}
                    </button>
                  ))}
                  <div className="border-t border-gray-100 dark:border-slate-700 mt-1 pt-1">
                    <button
                      onClick={() => {
                        addSubject();
                        setShowSubjectPicker(false);
                        setIsEditingSubject(true);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-[#166534]/10 dark:hover:bg-emerald-950/40 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add New Subject
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {activeRecord && (
            <button
              onClick={() => {
                setDeleteConfirm(activeRecord.subject.id);
              }}
              className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition cursor-pointer"
              title="Delete subject"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {activeRecord && (
            <button
              onClick={() => {
                const isCurrentlyPublished = Boolean(activeRecord.subject.gradesPublished);
                if (!isCurrentlyPublished) {
                  // Pre-populate with currently selected term or existing publishedTerms or fallback to active selectedTab / prelim
                  const existingTerms = activeRecord.subject.publishedTerms && activeRecord.subject.publishedTerms.length > 0
                    ? activeRecord.subject.publishedTerms
                    : [selectedTab !== "overall" ? selectedTab : "prelim"];
                  setSelectedPublishTerms(existingTerms);
                  setPublishConfirm(true);
                } else {
                  // Direct prompt to unpublish or modify
                  setSelectedPublishTerms(activeRecord.subject.publishedTerms || ["prelim"]);
                  setPublishConfirm(false);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border shadow-xs ${
                activeRecord.subject.gradesPublished
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
                  : "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/40"
              }`}
              title={
                activeRecord.subject.gradesPublished
                  ? `Grades published (${(activeRecord.subject.publishedTerms || ["all"]).join(", ")}). Click to modify or hide.`
                  : "Grades are currently hidden from students. Click to publish so they can view them in their profile."
              }
            >
              {activeRecord.subject.gradesPublished ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    Grades Published
                    {activeRecord.subject.publishedTerms && activeRecord.subject.publishedTerms.length > 0 && activeRecord.subject.publishedTerms.length < 4
                      ? ` (${activeRecord.subject.publishedTerms.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")})`
                      : ""}
                  </span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Publish Grades</span>
                </>
              )}
            </button>
          )}
          <button
            onClick={handleImportStudents}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-slate-300 bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            Import Students
          </button>
          <button
            onClick={handleImportScores}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-slate-300 bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            Import Scores
          </button>
          <button
            onClick={() => activeRecord && exportGradingToExcel(activeRecord)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#166534] dark:bg-emerald-600 hover:bg-[#14532d] dark:hover:bg-emerald-700 transition cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Export Excel
          </button>
        </div>
      </div>


      
      {/* 2-Second Published/Unpublished Modal Animation */}
      <AnimatePresence>
        {publishModalAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-[#161F30] rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-slate-700 max-w-sm w-full mx-4 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.25, 1] }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  publishModalAlert.type === "published"
                    ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400"
                    : "bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400"
                }`}
              >
                {publishModalAlert.type === "published" ? (
                  <CheckCircle className="w-10 h-10" />
                ) : (
                  <EyeOff className="w-10 h-10" />
                )}
              </motion.div>
              <h3 className="text-base font-bold text-gray-900 dark:text-slate-100 mb-1">
                {publishModalAlert.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                {publishModalAlert.message}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Publish/Unpublish Grades Confirmation */}
      <AnimatePresence>
        {publishConfirm !== null && activeRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setPublishConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#161F30] rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-slate-700 max-w-md w-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  publishConfirm
                    ? "bg-emerald-50 dark:bg-emerald-950/50 text-[#166534] dark:text-emerald-400"
                    : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                }`}>
                  {publishConfirm ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-slate-100">
                  {publishConfirm
                    ? `Publish Grades — ${activeRecord.subject.subjectCode || "Subject"}`
                    : `Manage Published Terms — ${activeRecord.subject.subjectCode || "Subject"}`}
                </h3>
              </div>

              <p className="text-xs text-gray-500 dark:text-slate-400 mb-4 leading-relaxed">
                Choose which terms/grading periods students can see in their profile. Only checked terms will be visible to students.
              </p>

              {/* Term Selection Checkboxes */}
              <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-3 border border-gray-200/80 dark:border-slate-700 mb-4 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-gray-700 dark:text-slate-200">
                    Select Terms to Publish
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPublishTerms(["prelim", "midterm", "semi-final", "final"])}
                      className="text-[10px] font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      All Terms
                    </button>
                    <span className="text-gray-300 dark:text-slate-600">•</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPublishTerms([])}
                      className="text-[10px] font-bold text-gray-500 hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {GRADING_PERIODS.map(({ key, label }) => {
                    const isChecked = selectedPublishTerms.includes(key);
                    return (
                      <label
                        key={key}
                        className={`flex items-center gap-2.5 p-2 rounded-lg border text-xs font-semibold cursor-pointer transition select-none ${
                          isChecked
                            ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700"
                            : "bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPublishTerms((prev) => [...prev, key]);
                            } else {
                              setSelectedPublishTerms((prev) => prev.filter((k) => k !== key));
                            }
                          }}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                        />
                        <span>{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {selectedPublishTerms.length === 0 ? (
                <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mb-4 flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-200 dark:border-amber-800">
                  <EyeOff className="w-3.5 h-3.5 shrink-0" />
                  No terms selected. Saving will hide all grades for this subject from student profiles.
                </p>
              ) : (
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium mb-4 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <Eye className="w-3.5 h-3.5 shrink-0" />
                  Students will only see: {selectedPublishTerms.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
                </p>
              )}

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setPublishConfirm(null)}
                  className="flex-1 h-9 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>

                {activeRecord.subject.gradesPublished && (
                  <button
                    type="button"
                    onClick={() => {
                      togglePublishGrades(activeRecord.subject.id, []);
                      setPublishConfirm(null);
                      setPublishModalAlert({
                        title: "Grades Hidden",
                        message: "All grades are now hidden from student profiles.",
                        type: "unpublished",
                      });
                    }}
                    className="px-3 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 text-xs font-bold transition cursor-pointer"
                  >
                    Hide All
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    const willPublish = selectedPublishTerms.length > 0;
                    togglePublishGrades(activeRecord.subject.id, selectedPublishTerms);
                    setPublishConfirm(null);
                    if (willPublish) {
                      setPublishModalAlert({
                        title: "Grades Published!",
                        message: `Grades for ${selectedPublishTerms.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")} published to student profiles!`,
                        type: "published",
                      });
                    } else {
                      setPublishModalAlert({
                        title: "Grades Unpublished!",
                        message: "Grades are now hidden from student profiles.",
                        type: "unpublished",
                      });
                    }
                  }}
                  className={`flex-1 h-9 rounded-xl text-white text-xs font-bold transition cursor-pointer shadow-sm ${
                    selectedPublishTerms.length > 0
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-amber-600 hover:bg-amber-700"
                  }`}
                >
                  {selectedPublishTerms.length > 0
                    ? `Publish Selected (${selectedPublishTerms.length})`
                    : "Save & Hide"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Delete Confirm */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#161F30] rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-slate-700 max-w-sm w-full"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-slate-100 mb-2">
                Delete Subject?
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-5">
                This will permanently delete all grading records for this subject.
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 h-9 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteSubject(deleteConfirm);
                    setDeleteConfirm(null);
                  }}
                  className="flex-1 h-9 rounded-xl bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition cursor-pointer"
                >
                  Delete Subject
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Subject Info Header ===== */}
      <SubjectHeader
        subject={activeRecord.subject}
        onUpdate={(updates) => updateSubject(activeSubjectId!, updates)}
        isEditing={isEditingSubject}
        setIsEditing={setIsEditingSubject}
      />

      {/* ===== Grading Period Tabs ===== */}
      <div className="flex items-center gap-1 mb-4 bg-gray-50 dark:bg-slate-850/60 dark:bg-slate-800/60 rounded-xl p-1 border border-gray-100 dark:border-slate-700/60 w-fit">
        {GRADING_PERIODS.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              setSelectedTab(p.key);
              setActivePeriod(p.key);
            }}
            className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedTab === p.key
                ? "bg-white dark:bg-[#161F30] text-[#166534] dark:text-emerald-400 shadow-sm border border-[#166534]/15 dark:border-emerald-500/30"
                : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/40"
            }`}
          >
            {p.label}
          </button>
        ))}

        {/* Overall GPA Tab */}
        <button
          onClick={() => setSelectedTab("overall")}
          className={`relative px-4 py-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedTab === "overall"
              ? "bg-[#166534] text-white shadow-sm shadow-emerald-950/40 border border-emerald-400/40"
              : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40"
          }`}
        >
          <span>Overall GPA</span>
        </button>
      </div>

      {/* ===== Fullscreen Wrapper (covers controls + table + legend) ===== */}
      <div
        ref={fullscreenRef}
        className={
          isFullscreen
            ? "fixed inset-0 z-[9999] flex flex-col bg-white dark:bg-[#0F172A] p-4"
            : ""
        }
      >
      {/* ===== Student Controls ===== */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${isFullscreen ? "mb-2 shrink-0" : "mb-3"}`}>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students..."
              className="h-8 pl-8 pr-3 w-56 rounded-lg border border-gray-200 dark:border-slate-700 text-xs font-medium text-gray-700 dark:text-slate-200 bg-white dark:bg-[#161F30] outline-none focus:ring-2 focus:ring-[#166534]/30 focus:border-[#166534]/30 placeholder-gray-400 dark:placeholder-slate-500"
            />
          </div>
          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 px-2">
            {filteredStudents.length} / {students.length} students
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddStudent}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#166534] dark:bg-emerald-600 hover:bg-[#14532d] dark:hover:bg-emerald-700 transition cursor-pointer shadow-sm active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Student
          </button>
          <button
            onClick={handleAddQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800/40 hover:bg-yellow-100 dark:hover:bg-yellow-950/60 transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Quiz
          </button>
          <button
            onClick={handleAddParticipation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-green-700 dark:text-emerald-300 bg-green-50 dark:bg-emerald-950/40 border border-green-200 dark:border-emerald-800/40 hover:bg-green-100 dark:hover:bg-emerald-950/60 transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Participation
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear all Quiz, Participation, and Exam scores and max values? This cannot be undone.")) {
                clearAllGradingScores();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 hover:bg-rose-100 dark:hover:bg-rose-950/60 transition cursor-pointer"
            title="Clear all quiz, participation, and exam scores"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All Scores
          </button>
          <div className="w-px h-6 bg-gray-200 dark:bg-slate-700" />
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition cursor-pointer active:scale-95"
            title={isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen grading view"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
            {isFullscreen ? "Exit" : "Fullscreen"}
          </button>
        </div>
      </div>

      {/* ===== SPREADSHEET TABLE ===== */}
        {/* Fullscreen Subject Info Header */}
        {isFullscreen && (
          <div
            className="flex items-center gap-3 mb-2 shrink-0 px-1"
          >
            <FileSpreadsheet className="w-5 h-5 text-[#166534] dark:text-emerald-400" />
            <span className="text-sm font-bold text-gray-800 dark:text-slate-100">
              Grading Sheet — {activeRecord?.subject?.subjectCode || ""}
            </span>
            <span className="text-[10px] font-semibold text-gray-400 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              {periodLabel}
            </span>
          </div>
        )}
        {selectedTab === "overall" ? (
          <div
            className={`overflow-x-auto overflow-y-auto rounded-xl border shadow-sm transition-colors ${isFullscreen ? "flex-1 rounded-none border-0 shadow-none max-h-full" : "max-h-[calc(100vh-340px)]"}`}
            style={{
              borderColor: isFullscreen ? "transparent" : colors.borderColor,
              background: colors.tableBg,
            }}
          >
            <table className="w-full border-collapse text-sm" style={{ minWidth: 950 }}>
              <thead className="sticky top-0 z-20">
                <tr>
                  <th
                    colSpan={3}
                    className="sticky left-0 z-30 px-3 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none"
                    style={{
                      background: colors.studentInfoHeaderBg,
                      color: colors.studentInfoHeaderText,
                      borderColor: colors.borderColor,
                      width: 370,
                      minWidth: 370,
                      maxWidth: 370,
                    }}
                  >
                    Student Information
                  </th>
                  <th
                    colSpan={4}
                    className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none text-center"
                    style={{
                      background: colors.examHeaderBg,
                      color: colors.examHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Grading Period Equivalents
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2.5 text-xs font-black uppercase tracking-wider border-b select-none text-center"
                    style={{
                      background: colors.gpaHeaderBg,
                      color: colors.gpaHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Semestral Summary & Overall GPA
                  </th>
                </tr>
                <tr style={{ background: colors.studentInfoSubheaderBg }}>
                  <th
                    className="sticky left-0 z-30 px-2 py-3 text-xs font-bold border-b border-r text-center"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                      width: 50,
                      minWidth: 50,
                      maxWidth: 50,
                    }}
                  >
                    No.
                  </th>
                  <th
                    className="sticky left-[50px] z-30 px-3 py-3 text-xs font-bold border-b border-r"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                      width: 130,
                      minWidth: 130,
                      maxWidth: 130,
                    }}
                  >
                    Student ID
                  </th>
                  <th
                    className="sticky left-[180px] z-30 px-3 py-3 text-xs font-bold border-b border-r"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                      width: 190,
                      minWidth: 190,
                      maxWidth: 190,
                    }}
                  >
                    Student Name
                  </th>

                  {GRADING_PERIODS.map((gp) => (
                    <th
                      key={gp.key}
                      className="px-3 py-3 text-xs font-bold border-b border-r text-center"
                      style={{
                        background: colors.gradeEquivalentHeaderBg,
                        color: colors.gradeEquivalentHeaderText,
                        borderColor: colors.borderColor,
                        minWidth: 90,
                      }}
                    >
                      {gp.label}
                    </th>
                  ))}

                  <th
                    className="px-3 py-3 text-xs font-bold border-b border-r text-center"
                    style={{
                      background: colors.totalGradeHeaderBg,
                      color: colors.totalGradeHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 100,
                    }}
                  >
                    Average %
                  </th>
                  <th
                    className="px-3 py-3 text-xs font-black border-b border-r text-center"
                    style={{
                      background: colors.gpaHeaderBg,
                      color: colors.gpaHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 100,
                    }}
                  >
                    Overall GPA
                  </th>
                  <th
                    className="px-3 py-3 text-xs font-bold border-b text-center"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                  >
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="px-6 py-12 text-center text-sm text-gray-400">
                      No students match your search filter
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student, idx) => {
                    const rowBg = idx % 2 === 0 ? colors.studentRowEvenBg : colors.studentRowOddBg;
                    const termComps = GRADING_PERIODS.map(({ key }) => {
                      const pData = activeRecord?.periods[key];
                      if (!pData) return { key, equiv: null, rounded: null, hasData: false };
                      const c = computeStudentGrade(pData, student.id);
                      const scores = pData.scores.filter((sc) => sc.studentId === student.id);
                      const hasScores = scores.some((sc) => sc.score !== null && sc.score !== undefined);
                      const hasOverride = pData.totalQuizOverrides?.[student.id] !== undefined || pData.totalParticipationOverrides?.[student.id] !== undefined;
                      const hasData = hasScores || hasOverride;
                      return {
                        key,
                        equiv: hasData ? c.gradeEquivalent : null,
                        rounded: hasData ? c.roundedGrade : null,
                        hasData,
                      };
                    });

                    const validTerms = termComps.filter((t) => t.hasData && t.rounded !== null);
                    const avgRounded = validTerms.length > 0
                      ? Math.round(validTerms.reduce((sum, t) => sum + (t.rounded ?? 0), 0) / validTerms.length)
                      : null;
                    const gpaEquiv = avgRounded !== null ? lookupGradeEquivalent(avgRounded) : null;
                    const gpaStr = formatGradeEquivalent(gpaEquiv);
                    const remarks = getGradeRemarks(gpaEquiv);

                    return (
                      <tr
                        key={student.id}
                        className="group transition-colors"
                        style={{ background: rowBg }}
                      >
                        <td
                          className="sticky left-0 z-10 px-2 py-2 text-center text-xs font-bold border-b border-r"
                          style={{ background: rowBg, color: colors.studentNumberText, borderColor: colors.borderColor }}
                        >
                          {student.studentNumber || idx + 1}
                        </td>
                        <td
                          className="sticky left-[50px] z-10 px-3 py-2 text-xs font-semibold border-b border-r"
                          style={{ background: rowBg, color: colors.studentIdText, borderColor: colors.borderColor }}
                        >
                          {student.studentId || "—"}
                        </td>
                        <td
                          className="sticky left-[180px] z-10 px-3 py-2 text-xs font-bold border-b border-r truncate"
                          style={{ background: rowBg, color: colors.studentNameText, borderColor: colors.borderColor }}
                        >
                          {student.fullName}
                        </td>

                        {termComps.map((tc) => {
                          const equivFormatted = tc.hasData
                            ? tc.equiv !== null && tc.equiv !== undefined
                              ? typeof tc.equiv === "number"
                                ? formatGradeEquivalent(tc.equiv)
                                : String(tc.equiv)
                              : "—"
                            : "—";
                          const numEquiv = Number(tc.equiv);
                          const isPass = tc.hasData && (!isNaN(numEquiv) ? numEquiv <= 3.0 : false);
                          return (
                            <td
                              key={tc.key}
                              className="px-3 py-2 text-center text-xs font-black border-b border-r"
                              style={{
                                borderColor: colors.borderColor,
                                background: tc.hasData ? colors.gradeEquivalentCellBg : undefined,
                                color: tc.hasData
                                  ? isPass
                                    ? colors.gradeEquivalentCellText
                                    : "#E11D48"
                                  : colors.studentIdText,
                              }}
                            >
                              {equivFormatted}
                            </td>
                          );
                        })}

                        <td
                          className="px-3 py-2 text-center text-xs font-bold border-b border-r"
                          style={{
                            background: colors.totalGradeCellBg,
                            color: colors.totalGradeCellText,
                            borderColor: colors.borderColor,
                          }}
                        >
                          {avgRounded !== null ? `${avgRounded}%` : "—"}
                        </td>

                        <td
                          className="px-3 py-2 text-center text-sm font-black border-b border-r"
                          style={{
                            background: colors.gpaCellBg,
                            color: colors.gpaCellText,
                            borderColor: colors.borderColor,
                          }}
                        >
                          {gpaStr}
                        </td>

                        <td
                          className="px-3 py-2 text-center text-xs font-bold border-b"
                          style={{ borderColor: colors.borderColor }}
                        >
                          {gpaEquiv !== null ? (
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                                remarks.isPassing
                                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                  : "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300"
                              }`}
                            >
                              {remarks.text}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        ) : (
        <div
          ref={tableRef}
          className={`overflow-x-auto overflow-y-auto rounded-xl border shadow-sm transition-colors ${isFullscreen ? "flex-1 rounded-none border-0 shadow-none max-h-full" : "max-h-[calc(100vh-340px)]"}`}
          style={{
            borderColor: isFullscreen ? "transparent" : colors.borderColor,
            background: colors.tableBg,
          }}
        >
        <table className="w-full border-collapse text-sm" style={{ minWidth: 1000 }}>
          <thead className="sticky top-0 z-20">
            {/* Category Group Headers */}
            <tr>
              <th
                colSpan={3}
                className="sticky left-0 z-30 px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.studentInfoHeaderBg,
                  color: colors.studentInfoHeaderText,
                  borderColor: colors.borderColor,
                  width: 370,
                  minWidth: 370,
                  maxWidth: 370,
                }}
              >
                Student Information
              </th>
              <th
                colSpan={quizActivities.length + 1}
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.quizHeaderBg,
                  color: colors.quizHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Quizzes (25%)
              </th>
              <th
                colSpan={participationActivities.length + 1}
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.participationHeaderBg,
                  color: colors.participationHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Class Participation (15%)
              </th>
              <th
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.examHeaderBg,
                  color: colors.examHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Exam (60%)
              </th>
              <th
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.totalGradeHeaderBg,
                  color: colors.totalGradeHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Total
              </th>
              <th
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors"
                style={{
                  background: colors.roundedHeaderBg,
                  color: colors.roundedHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Rounded
              </th>
              <th
                className="px-2 py-2.5 text-xs font-bold uppercase tracking-wider border-b select-none transition-colors"
                style={{
                  background: colors.gradeEquivalentHeaderBg,
                  color: colors.gradeEquivalentHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                {periodLabel} Grade
              </th>
              <th
                className="px-1 py-1.5 border-b w-8 transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  borderColor: colors.borderColor,
                }}
              >
                {/* actions */}
              </th>
            </tr>

            {/* Column Headers */}
            <tr>
              {/* Student Info (sticky left) */}
              <th
                className="sticky left-0 z-30 px-2 py-3 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
                  width: 50,
                  minWidth: 50,
                  maxWidth: 50,
                }}
                onClick={() => handleSort("number")}
              >
                <div className="flex items-center justify-center gap-0.5">
                  No.
                  {sortField === "number" && (
                    sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>
              <th
                className="sticky left-[50px] z-30 px-2 py-3 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
                  width: 130,
                  minWidth: 130,
                  maxWidth: 130,
                }}
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center justify-center gap-0.5">
                  Student ID
                  {sortField === "id" && (
                    sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>
              <th
                className="sticky left-[180px] z-30 px-2 py-3 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
                  width: 190,
                  minWidth: 190,
                  maxWidth: 190,
                }}
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center justify-center gap-0.5">
                  Name
                  {sortField === "name" && (
                    sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Quiz columns */}
              {quizActivities.map((q) => (
                <th
                  key={q.id}
                  className="px-1 py-3 text-xs font-bold border-b border-r group relative select-none transition-colors"
                  style={{
                    background: colors.quizSubheaderBg,
                    color: colors.quizSubheaderText,
                    borderColor: colors.borderColor,
                    minWidth: 65,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span>{q.label}</span>
                    <button
                      onClick={() => handleRemoveQuiz(q.id)}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-400 text-white text-[8px] items-center justify-center hidden group-hover:flex cursor-pointer hover:bg-red-500 z-10"
                      title="Remove quiz"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </th>
              ))}
              <th
                className="px-1 py-3 text-xs font-extrabold border-b border-r select-none transition-colors"
                style={{
                  background: colors.quizTotalHeaderBg,
                  color: colors.quizTotalHeaderText,
                  borderColor: colors.borderColor,
                  minWidth: 85,
                }}
              >
                Total Quiz
              </th>

              {/* Participation columns */}
              {participationActivities.map((p) => (
                <th
                  key={p.id}
                  className="px-1 py-3 text-xs font-bold border-b border-r group relative select-none transition-colors"
                  style={{
                    background: colors.participationSubheaderBg,
                    color: colors.participationSubheaderText,
                    borderColor: colors.borderColor,
                    minWidth: 65,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span>{p.label}</span>
                    <button
                      onClick={() => handleRemoveParticipation(p.id)}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-400 text-white text-[8px] items-center justify-center hidden group-hover:flex cursor-pointer hover:bg-red-500 z-10"
                      title="Remove"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </th>
              ))}
              <th
                className="px-1 py-3 text-xs font-extrabold border-b border-r select-none transition-colors"
                style={{
                  background: colors.participationTotalHeaderBg,
                  color: colors.participationTotalHeaderText,
                  borderColor: colors.borderColor,
                  minWidth: 70,
                }}
              >
                Total CP
              </th>

              {/* Exam */}
              <th
                className="px-1 py-3 text-xs font-bold border-b border-r select-none transition-colors"
                style={{
                  background: colors.examSubheaderBg,
                  color: colors.examSubheaderText,
                  borderColor: colors.borderColor,
                  minWidth: 55,
                }}
              >
                Exam
              </th>

              {/* Computed columns */}
              <th
                className="px-1 py-3 text-xs font-bold border-b border-r select-none transition-colors"
                style={{
                  background: colors.totalGradeHeaderBg,
                  color: colors.totalGradeHeaderText,
                  borderColor: colors.borderColor,
                  minWidth: 85,
                }}
              >
                Total Grade
              </th>
              <th
                className="px-1 py-3 text-xs font-bold border-b border-r select-none transition-colors"
                style={{
                  background: colors.roundedHeaderBg,
                  color: colors.roundedHeaderText,
                  borderColor: colors.borderColor,
                  minWidth: 65,
                }}
              >
                Rounded
              </th>
              <th
                className="px-1 py-3 text-xs font-bold border-b select-none transition-colors"
                style={{
                  background: colors.gradeEquivalentHeaderBg,
                  color: colors.gradeEquivalentHeaderText,
                  borderColor: colors.borderColor,
                  minWidth: 70,
                }}
              >
                {periodLabel}
              </th>
              <th
                className="px-1 py-2 border-b w-8 transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  borderColor: colors.borderColor,
                }}
              >
                {/* actions */}
              </th>
            </tr>

            {/* MAX SCORE ROW */}
            <tr style={{ background: colors.maxScoreRowBg }}>
              <td
                colSpan={3}
                className="sticky left-0 z-30 px-2 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.maxScoreLabelBg,
                  color: colors.maxScoreLabelText,
                  borderColor: colors.borderColor,
                  width: 370,
                  minWidth: 370,
                  maxWidth: 370,
                }}
              >
                MAX SCORE
              </td>
              {quizActivities.map((q) => (
                <td
                  key={q.id}
                  className="px-0 py-0 border-b border-r transition-colors"
                  style={{
                    background: colors.quizCellBg,
                    borderColor: colors.borderColor,
                  }}
                >
                  <MaxScoreCell
                    value={q.maxScore}
                    onChange={(v) => handleMaxScoreChange(q.id, v, "quiz")}
                  />
                </td>
              ))}
              <td
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.quizTotalCellBg,
                  color: colors.quizTotalCellText,
                  borderColor: colors.borderColor,
                }}
              >
                {totalMaxQuiz}
              </td>
              {participationActivities.map((p) => (
                <td
                  key={p.id}
                  className="px-0 py-0 border-b border-r transition-colors"
                  style={{
                    background: colors.participationCellBg,
                    borderColor: colors.borderColor,
                  }}
                >
                  <MaxScoreCell
                    value={p.maxScore}
                    onChange={(v) => handleMaxScoreChange(p.id, v, "participation")}
                  />
                </td>
              ))}
              <td
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.participationTotalCellBg,
                  color: colors.participationTotalCellText,
                  borderColor: colors.borderColor,
                }}
              >
                {totalMaxParticipation}
              </td>
              <td
                className="px-0 py-0 border-b border-r transition-colors"
                style={{
                  background: colors.examCellBg,
                  borderColor: colors.borderColor,
                }}
              >
                {examActivity && (
                  <MaxScoreCell
                    value={examActivity.maxScore}
                    onChange={(v) =>
                      handleMaxScoreChange(examActivity.id, v, "exam")
                    }
                  />
                )}
              </td>
              <td
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.totalGradeCellBg,
                  color: colors.totalGradeCellText,
                  borderColor: colors.borderColor,
                }}
              >
                100
              </td>
              <td
                className="px-1 py-1 border-b border-r transition-colors"
                style={{
                  background: colors.roundedCellBg,
                  borderColor: colors.borderColor,
                }}
              />
              <td
                className="px-1 py-1 border-b transition-colors"
                style={{
                  background: colors.gradeEquivalentCellBg,
                  borderColor: colors.borderColor,
                }}
              />
              <td
                className="border-b transition-colors"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  borderColor: colors.borderColor,
                }}
              />
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    3 +
                    quizActivities.length +
                    1 +
                    participationActivities.length +
                    1 +
                    1 +
                    3 +
                    1
                  }
                  className="px-6 py-16 text-center transition-colors"
                  style={{
                    background: colors.tableBg,
                    borderColor: colors.borderColor,
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Users className="w-10 h-10 text-gray-300 dark:text-slate-600" />
                    <p className="text-sm font-semibold text-gray-400 dark:text-slate-400">
                      {students.length === 0
                        ? "No students added yet"
                        : "No students match your search"}
                    </p>
                    {students.length === 0 && (
                      <button
                        onClick={handleAddStudent}
                        className="mt-2 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#166534] dark:text-emerald-400 bg-[#166534]/10 dark:bg-emerald-950/40 hover:bg-[#166534]/20 transition cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add Your First Student
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              filteredStudents.map((student, idx) => {
                const comp = periodData
                  ? computeStudentGrade(periodData, student.id)
                  : null;
                const rowStickyBg = idx % 2 === 0 ? colors.studentRowEvenBg : colors.studentRowOddBg;

                return (
                  <tr
                    key={student.id}
                    className="group transition-colors"
                    style={{
                      backgroundColor: idx % 2 === 0 ? colors.studentRowEvenBg : colors.studentRowOddBg,
                    }}
                  >
                    {/* Student Number */}
                    <td
                      className="sticky left-0 z-10 px-2 py-1 text-center text-sm font-bold border-b border-r select-none transition-colors"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentNumberText,
                        borderColor: colors.borderColor,
                        width: 50,
                        minWidth: 50,
                        maxWidth: 50,
                      }}
                    >
                      {student.studentNumber}
                    </td>
                    {/* Student ID */}
                    <td
                      className="sticky left-[50px] z-10 px-2 py-1 text-sm font-semibold border-b border-r transition-colors"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentIdText,
                        borderColor: colors.borderColor,
                        width: 130,
                        minWidth: 130,
                        maxWidth: 130,
                      }}
                    >
                      {student.studentId}
                    </td>
                    {/* Student Name */}
                    <td
                      className="sticky left-[180px] z-10 px-2 py-1 text-sm font-semibold border-b border-r transition-colors"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentNameText,
                        borderColor: colors.borderColor,
                        width: 190,
                        minWidth: 190,
                        maxWidth: 190,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{student.fullName}</span>
                        <button
                          onClick={() =>
                            setStudentModal({ mode: "edit", student })
                          }
                          className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer ml-1 text-blue-500 dark:text-blue-400"
                          title="Edit student"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>

                    {/* Quiz Scores */}
                    {quizActivities.map((q) => {
                      const rawScore = periodData
                        ? getScore(periodData.scores, student.id, q.id)
                        : null;
                      // Show 0 instead of blank when quiz has maxScore > 0
                      const displayScore =
                        rawScore === null && q.maxScore > 0 ? 0 : rawScore;
                      return (
                        <td
                          key={q.id}
                          className="px-0 py-0 border-b border-r transition-colors"
                          style={{
                            background: colors.quizCellBg,
                            borderColor: colors.borderColor,
                          }}
                        >
                          <ScoreCell
                            value={displayScore}
                            maxScore={q.maxScore}
                            onChange={(v) =>
                              handleScoreChange(student.id, q.id, v)
                            }
                          />
                        </td>
                      );
                    })}
                    {/* Total Quiz (editable override) */}
                    <td
                      className="px-0 py-0 text-center text-sm font-bold border-b border-r transition-colors"
                      style={{
                        background: colors.quizTotalCellBg,
                        color: colors.quizTotalCellText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      <ScoreCell
                        value={
                          periodData?.totalQuizOverrides?.[student.id] ??
                          comp?.totalQuizScore ??
                          0
                        }
                        maxScore={totalMaxQuiz}
                        onChange={(v) =>
                          handleTotalOverride(student.id, v, "quiz")
                        }
                      />
                    </td>

                    {/* Participation Scores */}
                    {participationActivities.map((p) => {
                      const rawPScore = periodData
                        ? getScore(periodData.scores, student.id, p.id)
                        : null;
                      const displayPScore =
                        rawPScore === null && p.maxScore > 0 ? 0 : rawPScore;
                      return (
                        <td
                          key={p.id}
                          className="px-0 py-0 border-b border-r transition-colors"
                          style={{
                            background: colors.participationCellBg,
                            borderColor: colors.borderColor,
                          }}
                        >
                          <ScoreCell
                            value={displayPScore}
                            maxScore={p.maxScore}
                            onChange={(v) =>
                              handleScoreChange(student.id, p.id, v)
                            }
                          />
                        </td>
                      );
                    })}
                    {/* Total Participation (editable override) */}
                    <td
                      className="px-0 py-0 text-center text-sm font-bold border-b border-r transition-colors"
                      style={{
                        background: colors.participationTotalCellBg,
                        color: colors.participationTotalCellText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      <ScoreCell
                        value={
                          periodData?.totalParticipationOverrides?.[student.id] ??
                          comp?.totalParticipationScore ??
                          0
                        }
                        maxScore={totalMaxParticipation}
                        onChange={(v) =>
                          handleTotalOverride(student.id, v, "participation")
                        }
                      />
                    </td>

                    {/* Exam */}
                    <td
                      className="px-0 py-0 border-b border-r transition-colors"
                      style={{
                        background: colors.examCellBg,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {examActivity && (
                        <ScoreCell
                          value={
                            periodData
                              ? getScore(
                                  periodData.scores,
                                  student.id,
                                  examActivity.id
                                )
                              : null
                          }
                          maxScore={examActivity.maxScore}
                          onChange={(v) =>
                            handleScoreChange(student.id, examActivity.id, v)
                          }
                        />
                      )}
                    </td>

                    {/* Total Grade */}
                    <td
                      className="px-1 py-1 text-center text-sm font-bold border-b border-r transition-colors"
                      style={{
                        background: colors.totalGradeCellBg,
                        color: colors.totalGradeCellText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {comp ? comp.totalGrade.toFixed(3) : "—"}
                    </td>

                    {/* Rounded */}
                    <td
                      className="px-1 py-1 text-center text-sm font-extrabold border-b border-r transition-colors"
                      style={{
                        background: colors.roundedCellBg,
                        color: colors.roundedCellText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {comp ? comp.roundedGrade : "—"}
                    </td>

                    {/* Grade Equivalent */}
                    <td
                      className="px-1 py-1 text-center text-sm font-extrabold border-b transition-colors"
                      style={{
                        background: colors.gradeEquivalentCellBg,
                        color: colors.gradeEquivalentCellText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {comp ? comp.gradeEquivalent : "—"}
                    </td>

                    {/* Actions */}
                    <td
                      className="px-1 py-1 border-b text-center transition-colors"
                      style={{
                        background: rowStickyBg,
                        borderColor: colors.borderColor,
                      }}
                    >
                      <div className="flex items-center justify-center gap-0.5">
                        <button
                          onClick={() => setBreakdownModal(student)}
                          className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 text-blue-500 dark:text-blue-400 cursor-pointer"
                          title="View grade breakdown"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteStudent(student.id)}
                          className="p-1 rounded hover:bg-red-50 dark:hover:bg-red-950/30 text-red-400 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                          title="Remove student"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
        )}
      {/* Grading Weights Legend */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] font-semibold text-gray-500 dark:text-slate-400 shrink-0">
        <div className="flex items-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded shadow-2xs"
            style={{
              background: colors.quizHeaderBg,
              border: `1px solid ${colors.borderColor}`,
            }}
          />
          Quizzes 25%
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded shadow-2xs"
            style={{
              background: colors.participationHeaderBg,
              border: `1px solid ${colors.borderColor}`,
            }}
          />
          Participation 15%
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded shadow-2xs"
            style={{
              background: colors.examHeaderBg,
              border: `1px solid ${colors.borderColor}`,
            }}
          />
          Exam 60%
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded shadow-2xs"
            style={{
              background: colors.totalGradeHeaderBg,
              border: `1px solid ${colors.borderColor}`,
            }}
          />
          Total Grade
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded shadow-2xs"
            style={{
              background: colors.gradeEquivalentHeaderBg,
              border: `1px solid ${colors.borderColor}`,
            }}
          />
          Grade Equivalent
        </span>

        </div>

        {/* Quick Subject Switcher Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-black tracking-wider uppercase text-gray-400 dark:text-slate-500">
            Subjects:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {records.map((r) => {
              const isCurrent = r.subject.id === activeSubjectId;
              return (
                <button
                  key={r.subject.id}
                  onClick={() => setActiveSubjectId(r.subject.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? "bg-[#166534] dark:bg-emerald-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                  }`}
                >
                  <span>{r.subject.subjectCode || "Subject"}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isCurrent ? "bg-white/20 text-white" : "bg-black/10 dark:bg-white/10 text-gray-500 dark:text-slate-400"
                  }`}>
                    {r.students.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      </div>

      {/* Student Modal */}
      <AnimatePresence>
        {studentModal && (
          <StudentModal
            student={studentModal.student}
            mode={studentModal.mode}
            onSave={handleSaveStudent}
            onClose={() => setStudentModal(null)}
          />
        )}
      </AnimatePresence>

      {/* Grade Breakdown Modal */}
      <AnimatePresence>
        {breakdownModal && periodData && (
          <GradeBreakdownModal
            student={breakdownModal}
            periodData={periodData}
            periodLabel={periodLabel}
            record={activeRecord}
            onClose={() => setBreakdownModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
