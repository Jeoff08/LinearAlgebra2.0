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
  computeCumulativeGrades,
  formatSermsValue,
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
  exportStudentTemplateExcel,
  importGradingWorkbookFromExcel,
  importMultiSubjectGradingFromExcel,
} from "../../utils/gradingExcel";
import {
  exportCustomGradingExcel,
  type ExportPeriodOption,
  type ExportSubjectScope,
} from "../../utils/exportGradingDesign";
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
      studentInfoHeaderBg: "#1E293B",
      studentInfoHeaderText: "#93C5FD", // light blue
      studentInfoSubheaderBg: "#162131",
      studentInfoSubheaderText: "#94A3B8",
      studentRowEvenBg: "#0F172A",
      studentRowOddBg: "#141E33",
      studentNumberText: "#94A3B8",
      studentIdText: "#60A5FA", // light blue
      studentNameText: "#F8FAFC", // crisp readable white

      // Quizzes (25%)
      quizHeaderBg: "#451A03", // deep dark warm amber
      quizHeaderText: "#FDE047", // bright gold
      quizSubheaderBg: "#2A1B0A",
      quizSubheaderText: "#FDE68A",
      quizTotalHeaderBg: "#713F12",
      quizTotalHeaderText: "#FEF08A",
      quizCellBg: "rgba(245, 158, 11, 0.09)",
      quizTotalCellBg: "rgba(245, 158, 11, 0.22)",
      quizTotalCellText: "#FDE047",

      // Class Participation (15%)
      participationHeaderBg: "#064E3B", // deep forest emerald
      participationHeaderText: "#86EFAC", // mint green
      participationSubheaderBg: "#062E24",
      participationSubheaderText: "#A7F3D0",
      participationTotalHeaderBg: "#047857",
      participationTotalHeaderText: "#6EE7B7",
      participationCellBg: "rgba(16, 185, 129, 0.09)",
      participationTotalCellBg: "rgba(16, 185, 129, 0.22)",
      participationTotalCellText: "#6EE7B7",

      // Exam (60%)
      examHeaderBg: "#0C4A6E", // deep ocean sky blue
      examHeaderText: "#7DD3FC",
      examSubheaderBg: "#0A2D44",
      examSubheaderText: "#BAE6FD",
      examCellBg: "rgba(14, 165, 233, 0.09)",
      examCellText: "#F8FAFC",

      // Total Grade
      totalGradeHeaderBg: "#7C2D12", // deep dark orange
      totalGradeHeaderText: "#FDBA74",
      totalGradeCellBg: "rgba(249, 115, 22, 0.16)",
      totalGradeCellText: "#FDBA74",

      // Rounded
      roundedHeaderBg: "#7C2D12",
      roundedHeaderText: "#FED7AA",
      roundedCellBg: "rgba(249, 115, 22, 0.26)",
      roundedCellText: "#FED7AA",

      // Grade Equivalent
      gradeEquivalentHeaderBg: "#881337", // deep dark ruby/rose
      gradeEquivalentHeaderText: "#FDA4AF",
      gradeEquivalentCellBg: "rgba(244, 63, 94, 0.20)",
      gradeEquivalentCellText: "#FDA4AF",

      // Overall GPA
      gpaHeaderBg: "#166534", // rich emerald
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
        inputMode="decimal"
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
      inputMode="decimal"
      value={localVal}
      onChange={(e) => setLocalVal(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
      className="grading-cell-input w-full h-9 text-center text-sm font-bold border-0 outline-none transition-colors text-gray-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 focus:ring-1 focus:ring-blue-400/50"
      title="Max score"
    />
  );
};

/** SERMS Raw Grade Cell (Editable input with click-to-edit) */
const SermsRawGradeCell: React.FC<{
  value: number | null;
  placeholder?: string;
  onChange: (val: number | null) => void;
  title?: string;
  bg?: string;
  textColor?: string;
}> = ({ value, placeholder = "—", onChange, title, bg, textColor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localVal, setLocalVal] = useState(value !== null ? String(value) : "");

  useEffect(() => {
    setLocalVal(value !== null ? String(value) : "");
  }, [value]);

  const handleCommit = () => {
    setIsEditing(false);
    if (localVal.trim() === "") {
      onChange(null);
      return;
    }
    const num = Number(localVal);
    if (!isNaN(num) && Number.isFinite(num) && num >= 0 && num <= 5.0) {
      onChange(num);
    } else {
      setLocalVal(value !== null ? String(value) : "");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center w-full h-full cursor-pointer group py-1"
      onClick={() => setIsEditing(true)}
      title={title || "Click to edit raw grade"}
    >
      {isEditing ? (
        <input
          type="text"
          inputMode="decimal"
          autoFocus
          value={localVal}
          onChange={(e) => setLocalVal(e.target.value)}
          onBlur={handleCommit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCommit();
            if (e.key === "Escape") {
              setLocalVal(value !== null ? String(value) : "");
              setIsEditing(false);
            }
          }}
          className="w-16 h-7 text-center text-xs font-black rounded border border-emerald-500 bg-white dark:bg-slate-900 text-gray-900 dark:text-white outline-none ring-2 ring-emerald-500/30"
        />
      ) : (
        <span
          className="px-2 py-0.5 rounded text-xs font-black group-hover:ring-1 group-hover:ring-emerald-400/50 transition-all select-none"
          style={{ background: bg, color: textColor }}
        >
          {value !== null ? formatSermsValue(value) : placeholder}
        </span>
      )}
    </div>
  );
};

/** Subject Info Header */
const SubjectHeader: React.FC<{
  subject: SubjectGradingRecord["subject"];
  onUpdate: (updates: Partial<SubjectGradingRecord["subject"]>) => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
}> = ({ subject, onUpdate, isEditing, setIsEditing }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      return localStorage.getItem("grading_subject_info_collapsed") === "true";
    } catch {
      return false;
    }
  });

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("grading_subject_info_collapsed", String(next));
      } catch {}
      return next;
    });
  };

  const fields = [
    { key: "subjectCode", label: "Subject Code" },
    { key: "offerNumber", label: "Offer No." },
    { key: "academicYear", label: "Academic Year" },
    { key: "semester", label: "Semester" },
    { key: "instructorName", label: "Instructor" },
  ] as const;

  if (isCollapsed) {
    return (
      <div className="bg-gradient-to-r from-[#166534]/5 to-transparent dark:from-[#166534]/15 dark:to-transparent border border-[#166534]/10 dark:border-emerald-800/30 rounded-xl px-4 py-2.5 mb-3 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
          <span className="text-xs font-bold text-[#166534] dark:text-emerald-400">
            Subject Information
          </span>
          <span className="text-[11px] font-semibold text-gray-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-none">
            {subject.subjectCode || "Subject"} {subject.offerNumber ? `(${subject.offerNumber})` : ""} {subject.instructorName ? `• ${subject.instructorName}` : ""}
          </span>
        </div>
        <button
          type="button"
          onClick={toggleCollapse}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-[#166534]/40 transition cursor-pointer active:scale-95 shadow-2xs"
          title="Show Subject Information"
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#166534] dark:text-emerald-400" />
          <span>Show Info</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#166534]/5 to-transparent dark:from-[#166534]/15 dark:to-transparent border border-[#166534]/10 dark:border-emerald-800/30 rounded-2xl p-4 mb-4 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-[#166534] dark:text-emerald-400 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Subject Information
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
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
          <button
            type="button"
            onClick={toggleCollapse}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer
              bg-gray-100 dark:bg-slate-800/80 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200/80 dark:border-slate-700 active:scale-95"
            title="Hide Subject Information"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Hide</span>
          </button>
        </div>
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
  onImportExcel?: () => void;
  onDownloadTemplate?: () => void;
}> = ({ student, mode, onSave, onClose, onImportExcel, onDownloadTemplate }) => {
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

        {mode === "add" && onImportExcel && (
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                onClose();
                onImportExcel();
              }}
              className="inline-flex items-center gap-1.5 font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload roster from Excel (.xlsx)
            </button>
            {onDownloadTemplate && (
              <button
                type="button"
                onClick={onDownloadTemplate}
                className="inline-flex items-center gap-1 text-[11px] text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition cursor-pointer"
                title="Download Excel format template"
              >
                <Download className="w-3 h-3" />
                Template
              </button>
            )}
          </div>
        )}

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
  const [selectedTab, setSelectedTab] = useState<GradingPeriod | "overall" | "cumulative">("prelim");
  const {
    records,
    setRecords,
    activeSubjectId,
    setActiveSubjectId,
    activePeriod,
    setActivePeriod,
    activeRecord,
    activePeriodData,
    addSubject,
    updateSubject,
    deleteSubject,
    deleteAllSubjects,
    updateRecord,
    togglePublishGrades,
    clearAllGradingScores,
    setSermsRawGrade,
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
  const [deleteAllConfirm, setDeleteAllConfirm] = useState(false);
  const [publishConfirm, setPublishConfirm] = useState<boolean | null>(null);
  const [publishModalAlert, setPublishModalAlert] = useState<{ title: string; message: string; type: "published" | "unpublished" } | null>(null);
  const [selectedPublishTerms, setSelectedPublishTerms] = useState<GradingPeriod[]>(["prelim"]);
  const [importToast, setImportToast] = useState<{
    type: "success" | "warning" | "error";
    message: string;
  } | null>(null);

  // Custom Excel Export state
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportPeriodScope, setExportPeriodScope] = useState<ExportPeriodOption>("all");
  const [exportSubjectScope, setExportSubjectScope] = useState<ExportSubjectScope>("current");
  const [isExporting, setIsExporting] = useState(false);

  const handleExecuteExport = useCallback(async () => {
    if (!activeRecord) return;
    setIsExporting(true);
    try {
      await exportCustomGradingExcel({
        periodScope: exportPeriodScope,
        subjectScope: exportSubjectScope,
        currentRecord: activeRecord,
        allRecords: records,
      });
      const scopeLabel =
        exportPeriodScope === "all"
          ? "Full Sheet + Cumulative SERMS"
          : exportPeriodScope === "cumulative"
          ? "Cumulative SERMS"
          : exportPeriodScope.toUpperCase();
      setImportToast({
        type: "success",
        message: `Grading sheet exported successfully! (${scopeLabel})`,
      });
      setIsExportModalOpen(false);
    } catch (err: any) {
      console.error("Export error:", err);
      setImportToast({
        type: "error",
        message: `Failed to export Excel file: ${err?.message || "Unknown error"}`,
      });
    } finally {
      setIsExporting(false);
    }
  }, [activeRecord, exportPeriodScope, exportSubjectScope, records]);

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
    if (selectedTab !== "overall" && selectedTab !== "cumulative" && selectedTab !== activePeriod) {
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
    fileInputRef.current?.click();
  }, []);

  const handleStudentFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const result = await importMultiSubjectGradingFromExcel(file, records, activeSubjectId);
        setRecords(result.records);
        if (result.activeSubjectIdToSelect) {
          setActiveSubjectId(result.activeSubjectIdToSelect);
        }
        setImportToast({
          type: "success",
          message: result.summaryText,
        });
      } catch (err: any) {
        setImportToast({
          type: "error",
          message: `Import failed: ${err?.message || err}`,
        });
      }
      e.target.value = "";
    },
    [records, activeSubjectId, setRecords, setActiveSubjectId]
  );

  const handleImportScores = useCallback(async () => {
    scoreImportRef.current?.click();
  }, []);

  const handleScoreFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const result = await importMultiSubjectGradingFromExcel(file, records, activeSubjectId);
        setRecords(result.records);
        if (result.activeSubjectIdToSelect) {
          setActiveSubjectId(result.activeSubjectIdToSelect);
        }
        setImportToast({
          type: "success",
          message: result.summaryText,
        });
      } catch (err: any) {
        setImportToast({
          type: "error",
          message: `Score import failed: ${err?.message || err}`,
        });
      }
      e.target.value = "";
    },
    [records, activeSubjectId, setRecords, setActiveSubjectId]
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

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center mb-6 shadow-lg shadow-[#166534]/20">
            <FileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            Student Grading Management
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 max-w-md">
            Create your first subject or upload an Excel grading workbook to start managing student grades with
            spreadsheet-style grading tables, automatic computations, and multi-subject separation.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              onClick={() => addSubject()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#166534] text-white text-sm font-bold hover:bg-[#14532d] transition shadow-md shadow-[#166534]/30 active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Create Subject
            </button>
            <button
              onClick={handleImportStudents}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#161F30] border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 text-sm font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition shadow-xs active:scale-95 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              Import from Excel
            </button>
          </div>
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
    <div className="p-2.5 sm:p-6 max-w-full mx-auto pb-16">
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
                  <div className="border-t border-gray-100 dark:border-slate-700 mt-1 pt-1 flex flex-col gap-1">
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
                    {records.length > 0 && (
                      <button
                        onClick={() => {
                          setShowSubjectPicker(false);
                          setDeleteAllConfirm(true);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete All Subjects ({records.length})
                      </button>
                    )}
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
              title="Delete current subject"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

          {records.length > 1 && (
            <button
              onClick={() => setDeleteAllConfirm(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-900/40 transition cursor-pointer active:scale-95 shadow-2xs"
              title="Delete all subjects bulk action"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete All ({records.length})</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
          {activeRecord && (
            <button
              onClick={() => {
                const isCurrentlyPublished = Boolean(activeRecord.subject.gradesPublished);
                if (!isCurrentlyPublished) {
                  // Pre-populate with currently selected term or existing publishedTerms or fallback to active selectedTab / prelim
                  const existingTerms = activeRecord.subject.publishedTerms && activeRecord.subject.publishedTerms.length > 0
                    ? activeRecord.subject.publishedTerms
                    : [selectedTab !== "overall" && selectedTab !== "cumulative" ? selectedTab : "prelim"];
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
            onClick={() => {
              if (selectedTab === "cumulative") {
                setExportPeriodScope("cumulative");
              } else if (selectedTab !== "overall") {
                setExportPeriodScope(selectedTab);
              } else {
                setExportPeriodScope("all");
              }
              setIsExportModalOpen(true);
            }}
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
      {/* Delete Single Subject Confirm */}
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

      {/* Delete All Subjects Bulk Action Confirm Modal */}
      <AnimatePresence>
        {deleteAllConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setDeleteAllConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#161F30] rounded-2xl p-6 shadow-2xl border border-red-200 dark:border-red-900/50 max-w-md w-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-slate-100">
                    Delete All Subjects?
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    Bulk action: all {records.length} subjects will be removed
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 rounded-xl p-3 mb-4 text-xs text-red-700 dark:text-red-300">
                <p className="font-semibold mb-1">
                  Warning: This action cannot be undone!
                </p>
                <p className="text-[11px] text-red-600/90 dark:text-red-300/80 leading-relaxed">
                  This will permanently delete all {records.length} subjects, including all student rosters, quizzes, activities, scores, and grading computations.
                </p>
              </div>

              <div className="max-h-36 overflow-y-auto mb-5 p-2 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700/60 text-xs scrollbar-thin">
                <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                  Subjects to be deleted ({records.length}):
                </p>
                <div className="space-y-1">
                  {records.map((r) => (
                    <div
                      key={r.subject.id}
                      className="flex items-center justify-between text-gray-700 dark:text-slate-300 font-medium py-0.5"
                    >
                      <span className="truncate pr-2">
                        {r.subject.subjectCode || "Untitled"}{" "}
                        {r.subject.offerNumber && `(${r.subject.offerNumber})`}
                        {r.subject.subjectName && ` • ${r.subject.subjectName}`}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-slate-500 shrink-0 font-semibold">
                        {r.students.length} students
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteAllConfirm(false)}
                  className="flex-1 h-10 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const count = records.length;
                    deleteAllSubjects();
                    setDeleteAllConfirm(false);
                    setImportToast({
                      type: "warning",
                      message: `Successfully deleted all ${count} subjects.`,
                    });
                  }}
                  className="flex-1 h-10 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-md shadow-red-600/20 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete All ({records.length})</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Custom Excel Export Modal ===== */}
      <AnimatePresence>
        {isExportModalOpen && activeRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => !isExporting && setIsExportModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#161F30] rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-slate-700 max-w-lg w-full relative"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-[#166534] dark:text-emerald-400 shrink-0 border border-emerald-200 dark:border-emerald-800/60">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-slate-100">
                      Export Grading Sheet to Excel
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      Institutional design with 60° rotated headers &amp; formulas
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => !isExporting && setIsExportModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scope 1: Period Selection */}
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Select Period / Content to Export
                </label>
                <div className="space-y-1.5">
                  {[
                    {
                      id: "all" as ExportPeriodOption,
                      title: "All (Full Grading Sheet + Cumulative SERMS)",
                      desc: "Complete sheet with Prelim, Midterm, Semi-Final, Final + 8-col Cumulative SERMS table",
                      badge: "Recommended",
                      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
                    },
                    {
                      id: "cumulative" as ExportPeriodOption,
                      title: "Cumulative Grade Only (SERMS Table)",
                      desc: "8-col SERMS table: PRELIM, QG2, MIDTERM, QG3, SEMI-FINAL, QG4, FINAL, FINAL GRADE",
                      badge: "SERMS",
                      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
                    },
                    {
                      id: "prelim" as ExportPeriodOption,
                      title: "Prelim Period Only",
                      desc: "Prelim quizzes, class participation, exam, and prelim grade",
                    },
                    {
                      id: "midterm" as ExportPeriodOption,
                      title: "Midterm Period Only",
                      desc: "Midterm quizzes, class participation, exam, and midterm grade",
                    },
                    {
                      id: "semi-final" as ExportPeriodOption,
                      title: "Semi-Final Period Only",
                      desc: "Semi-Final quizzes, class participation, exam, and semi-final grade",
                    },
                    {
                      id: "final" as ExportPeriodOption,
                      title: "Final Period Only",
                      desc: "Final quizzes, class participation, exam, and final grade",
                    },
                  ].map((opt) => {
                    const isSelected = exportPeriodScope === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setExportPeriodScope(opt.id)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition select-none ${
                          isSelected
                            ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 text-gray-900 dark:text-slate-100 shadow-sm"
                            : "bg-gray-50/60 dark:bg-slate-800/40 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:bg-gray-100/70 dark:hover:bg-slate-800"
                        }`}
                      >
                        <input
                          type="radio"
                          name="periodScope"
                          checked={isSelected}
                          onChange={() => setExportPeriodScope(opt.id)}
                          className="mt-0.5 accent-emerald-600 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 dark:text-slate-100">
                              {opt.title}
                            </span>
                            {opt.badge && (
                              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${opt.badgeColor}`}>
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">
                            {opt.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scope 2: Subject Scope */}
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Select Subject Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setExportSubjectScope("current")}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition select-none flex items-start gap-2.5 ${
                      exportSubjectScope === "current"
                        ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 text-gray-900 dark:text-slate-100 shadow-sm"
                        : "bg-gray-50/60 dark:bg-slate-800/40 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:bg-gray-100/70 dark:hover:bg-slate-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="subjectScope"
                      checked={exportSubjectScope === "current"}
                      onChange={() => setExportSubjectScope("current")}
                      className="mt-0.5 accent-emerald-600 cursor-pointer"
                    />
                    <div className="truncate">
                      <span className="font-bold block text-gray-900 dark:text-slate-100">
                        Current Subject
                      </span>
                      <span className="text-[11px] text-gray-500 dark:text-slate-400 truncate block">
                        {activeRecord.subject.subjectCode || "Subject"} ({activeRecord.subject.offerNumber || "N/A"})
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => setExportSubjectScope("all")}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition select-none flex items-start gap-2.5 ${
                      exportSubjectScope === "all"
                        ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 text-gray-900 dark:text-slate-100 shadow-sm"
                        : "bg-gray-50/60 dark:bg-slate-800/40 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:bg-gray-100/70 dark:hover:bg-slate-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="subjectScope"
                      checked={exportSubjectScope === "all"}
                      onChange={() => setExportSubjectScope("all")}
                      className="mt-0.5 accent-emerald-600 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold block text-gray-900 dark:text-slate-100">
                        All Subjects
                      </span>
                      <span className="text-[11px] text-gray-500 dark:text-slate-400 block">
                        {records.length} {records.length === 1 ? "sheet" : "sheets (separate tabs)"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature highlights banner */}
              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 rounded-xl p-2.5 mb-5 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  Rotated 60° headers, custom color-coding, student roster styling, and live Excel formulas included.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5">
                <button
                  type="button"
                  disabled={isExporting}
                  onClick={() => setIsExportModalOpen(false)}
                  className="flex-1 h-9 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isExporting}
                  onClick={handleExecuteExport}
                  className="flex-1 h-9 rounded-xl text-white text-xs font-bold bg-[#166534] dark:bg-emerald-600 hover:bg-[#14532d] dark:hover:bg-emerald-700 transition cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isExporting ? "Generating Excel..." : "Download Excel (.xlsx)"}</span>
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

      {/* ===== Fullscreen Wrapper (covers controls + tabs + table + legend) ===== */}
      <div
        ref={fullscreenRef}
        className={
          isFullscreen
            ? "fixed inset-0 z-[9999] flex flex-col bg-white dark:bg-[#0F172A] p-4 overflow-y-auto"
            : ""
        }
      >
      {/* ===== Grading Period Tabs (Visible in Normal & Fullscreen) ===== */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
        <div className="w-full sm:w-auto overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center gap-1 bg-gray-50 dark:bg-slate-800/60 rounded-xl p-1 border border-gray-100 dark:border-slate-700/60 w-max">
            {GRADING_PERIODS.map((p) => (
              <button
                key={p.key}
                onClick={() => {
                  setSelectedTab(p.key);
                  setActivePeriod(p.key);
                }}
                className={`relative px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedTab === p.key
                    ? "bg-white dark:bg-[#161F30] text-[#166534] dark:text-emerald-400 shadow-sm border border-[#166534]/15 dark:border-emerald-500/30"
                    : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/40"
                }`}
              >
                {p.label}
              </button>
            ))}

            {/* Cumulative Grade Tab */}
            <button
              onClick={() => setSelectedTab("cumulative")}
              className={`relative px-3.5 sm:px-4 py-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                selectedTab === "cumulative"
                  ? "bg-[#166534] text-white shadow-sm shadow-emerald-950/40 border border-emerald-400/40"
                  : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40"
              }`}
            >
              <span>Cumulative Grade</span>
            </button>
          </div>
        </div>

        {isFullscreen && (
          <div className="flex items-center gap-2 px-1">
            <FileSpreadsheet className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
            <span className="text-xs font-bold text-gray-800 dark:text-slate-100">
              {activeRecord?.subject?.subjectCode || "Grading Sheet"}
            </span>
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded-full">
              {selectedTab === "cumulative" ? "Cumulative Grade" : periodLabel}
            </span>
          </div>
        )}
      </div>
      {/* ===== Student Controls ===== */}
      <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 ${isFullscreen ? "mb-2 shrink-0" : "mb-3"}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="relative flex-1 sm:flex-none">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students..."
              className="h-8 pl-8 pr-3 w-full sm:w-56 rounded-lg border border-gray-200 dark:border-slate-700 text-xs font-medium text-gray-700 dark:text-slate-200 bg-white dark:bg-[#161F30] outline-none focus:ring-2 focus:ring-[#166534]/30 focus:border-[#166534]/30 placeholder-gray-400 dark:placeholder-slate-500"
            />
          </div>
          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 px-1 whitespace-nowrap">
            {filteredStudents.length}/{students.length}
          </span>
          {/* Mobile Fullscreen Button (prominently displayed on mobile so it is never cut off) */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/60 hover:bg-emerald-100 transition cursor-pointer active:scale-95 shrink-0 shadow-xs"
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen grading view"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
            <span>{isFullscreen ? "Exit" : "Fullscreen"}</span>
          </button>
        </div>
        <div className="w-full sm:w-auto overflow-x-auto scrollbar-none flex items-center gap-1.5 py-1">
          <button
            onClick={handleAddStudent}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#166534] dark:bg-emerald-600 hover:bg-[#14532d] dark:hover:bg-emerald-700 transition cursor-pointer shadow-sm active:scale-95 whitespace-nowrap shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Student
          </button>
          <button
            onClick={handleAddQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800/40 hover:bg-yellow-100 dark:hover:bg-yellow-950/60 transition cursor-pointer whitespace-nowrap shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            Quiz
          </button>
          <button
            onClick={handleAddParticipation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-green-700 dark:text-emerald-300 bg-green-50 dark:bg-emerald-950/40 border border-green-200 dark:border-emerald-800/40 hover:bg-green-100 dark:hover:bg-emerald-950/60 transition cursor-pointer whitespace-nowrap shrink-0"
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 hover:bg-rose-100 dark:hover:bg-rose-950/60 transition cursor-pointer whitespace-nowrap shrink-0"
            title="Clear all quiz, participation, and exam scores"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear
          </button>
          <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-slate-700 shrink-0" />
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
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
            className={`overflow-x-auto rounded-xl border shadow-sm transition-colors ${isFullscreen ? "flex-1 overflow-y-auto rounded-none border-0 shadow-none max-h-full" : ""}`}
            style={{
              borderColor: isFullscreen ? "transparent" : colors.borderColor,
              background: colors.tableBg,
              WebkitOverflowScrolling: "touch",
            }}
          >
            <table className="w-full border-collapse text-sm" style={{ minWidth: 950 }}>
              <thead>
                <tr className="h-[38px]">
                  <th
                    colSpan={3}
                    className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none h-[38px]"
                    style={{
                      background: colors.studentInfoHeaderBg,
                      color: colors.studentInfoHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student Information
                  </th>
                  <th
                    colSpan={4}
                    className="px-3 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none text-center h-[38px]"
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
                    className="px-3 py-2 text-xs font-black uppercase tracking-wider border-b select-none text-center h-[38px]"
                    style={{
                      background: colors.gpaHeaderBg,
                      color: colors.gpaHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Semestral Summary & Overall GPA
                  </th>
                </tr>
                <tr className="h-[38px]" style={{ background: colors.studentInfoSubheaderBg }}>
                  <th
                    className="px-2 py-2 text-xs font-bold border-b border-r text-center w-[50px] min-w-[50px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    No.
                  </th>
                  <th
                    className="px-2 py-2 text-xs font-bold border-b border-r w-[120px] min-w-[120px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student ID
                  </th>
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r w-[180px] min-w-[180px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student Name
                  </th>

                  {GRADING_PERIODS.map((gp) => (
                    <th
                      key={gp.key}
                      className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
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
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
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
                    className="px-3 py-2 text-xs font-black border-b border-r text-center h-[38px]"
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
                    className="px-3 py-2 text-xs font-bold border-b text-center h-[38px]"
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
                          className="px-2 py-2 text-center text-xs font-bold border-b border-r w-[50px] min-w-[50px]"
                          style={{ background: rowBg, color: colors.studentNumberText, borderColor: colors.borderColor }}
                        >
                          {student.studentNumber || idx + 1}
                        </td>
                        <td
                          className="px-2 py-2 text-xs font-semibold border-b border-r font-mono truncate w-[120px] min-w-[120px]"
                          style={{ background: rowBg, color: colors.studentIdText, borderColor: colors.borderColor }}
                        >
                          {student.studentId || "—"}
                        </td>
                        <td
                          className="px-3 py-2 text-xs font-bold border-b border-r truncate w-[180px] min-w-[180px]"
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
        ) : selectedTab === "cumulative" ? (
          <div
            className={`overflow-x-auto rounded-xl border shadow-sm transition-colors ${isFullscreen ? "flex-1 overflow-y-auto rounded-none border-0 shadow-none max-h-full" : ""}`}
            style={{
              borderColor: isFullscreen ? "transparent" : colors.borderColor,
              background: colors.tableBg,
              WebkitOverflowScrolling: "touch",
            }}
          >
            <table className="w-full border-collapse text-sm" style={{ minWidth: 1050 }}>
              <thead>
                <tr className="h-[38px]">
                  <th
                    colSpan={3}
                    className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none h-[38px]"
                    style={{
                      background: colors.studentInfoHeaderBg,
                      color: colors.studentInfoHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student Information
                  </th>
                  <th
                    colSpan={8}
                    className="px-3 py-2 text-xs font-bold uppercase tracking-wider border-b select-none text-center h-[38px]"
                    style={{
                      background: colors.gpaHeaderBg,
                      color: colors.gpaHeaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Cumulative Grade Table
                  </th>
                </tr>
                <tr className="h-[38px]" style={{ background: colors.studentInfoSubheaderBg }}>
                  <th
                    className="px-2 py-2 text-xs font-bold border-b border-r text-center w-[50px] min-w-[50px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    No.
                  </th>
                  <th
                    className="px-2 py-2 text-xs font-bold border-b border-r w-[120px] min-w-[120px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student ID
                  </th>
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r w-[180px] min-w-[180px] h-[38px]"
                    style={{
                      background: colors.studentInfoSubheaderBg,
                      color: colors.studentInfoSubheaderText,
                      borderColor: colors.borderColor,
                    }}
                  >
                    Student Name
                  </th>

                  {/* 1. PRELIM (Raw Data in SERMS) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.gradeEquivalentHeaderBg,
                      color: colors.gradeEquivalentHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Prelim raw equivalent score or direct input"
                  >
                    PRELIM (Raw Data in SERMS)
                  </th>

                  {/* 2. QG2 (Raw Data in SERMS) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.quizHeaderBg,
                      color: colors.quizHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Automatic from Midterm period grade equivalent"
                  >
                    QG2 (Raw Data in SERMS)
                  </th>

                  {/* 3. MIDTERM (Cumulative Grade) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.totalGradeHeaderBg,
                      color: colors.totalGradeHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Midterm = (Prelim + QG2) / 2"
                  >
                    MIDTERM (Cumulative Grade)
                  </th>

                  {/* 4. QG3 (Raw Data in SERMS) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.quizHeaderBg,
                      color: colors.quizHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Automatic from Semi-Final period grade equivalent"
                  >
                    QG3 (Raw Data in SERMS)
                  </th>

                  {/* 5. SEMI-FINAL (Cumulative Grade) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.totalGradeHeaderBg,
                      color: colors.totalGradeHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Semi-Final = (Midterm + QG3) / 2"
                  >
                    SEMI-FINAL (Cumulative Grade)
                  </th>

                  {/* 6. QG4 (Raw Data in SERMS) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.quizHeaderBg,
                      color: colors.quizHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Automatic from Final period grade equivalent"
                  >
                    QG4 (Raw Data in SERMS)
                  </th>

                  {/* 7. FINAL (Cumulative Grade) */}
                  <th
                    className="px-3 py-2 text-xs font-bold border-b border-r text-center h-[38px]"
                    style={{
                      background: colors.totalGradeHeaderBg,
                      color: colors.totalGradeHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 110,
                    }}
                    title="Final = (Semi-Final + QG4) / 2"
                  >
                    FINAL (Cumulative Grade)
                  </th>

                  {/* 8. FINAL GRADE */}
                  <th
                    className="px-3 py-2 text-xs font-black border-b text-center h-[38px]"
                    style={{
                      background: colors.gpaHeaderBg,
                      color: colors.gpaHeaderText,
                      borderColor: colors.borderColor,
                      minWidth: 100,
                    }}
                    title="Rounded to 1 decimal place"
                  >
                    FINAL GRADE
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="px-6 py-12 text-center text-sm text-gray-400">
                      No students match your search filter
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student, idx) => {
                    const rowBg = idx % 2 === 0 ? colors.studentRowEvenBg : colors.studentRowOddBg;

                    // 1. Prelim Raw Data in SERMS
                    const prelimPd = activeRecord?.periods?.prelim;
                    let prelimRaw: number | null = null;
                    if (prelimPd) {
                      const c = computeStudentGrade(prelimPd, student.id);
                      const scores = prelimPd.scores.filter((sc) => sc.studentId === student.id);
                      const hasData = scores.some((sc) => sc.score !== null && sc.score !== undefined) ||
                        prelimPd.totalQuizOverrides?.[student.id] !== undefined ||
                        prelimPd.totalParticipationOverrides?.[student.id] !== undefined;
                      if (hasData && c.gradeEquivalent != null) {
                        prelimRaw = Number(c.gradeEquivalent);
                      }
                    }

                    // QG2 automatically reflects the Midterm period grade equivalent
                    const midtermPd = activeRecord?.periods?.midterm;
                    let defaultQg2: number | null = null;
                    if (midtermPd) {
                      const c = computeStudentGrade(midtermPd, student.id);
                      const scores = midtermPd.scores.filter((sc) => sc.studentId === student.id);
                      const hasData = scores.some((sc) => sc.score !== null && sc.score !== undefined) ||
                        midtermPd.totalQuizOverrides?.[student.id] !== undefined ||
                        midtermPd.totalParticipationOverrides?.[student.id] !== undefined;
                      if (hasData && c.gradeEquivalent != null) {
                        defaultQg2 = Number(c.gradeEquivalent);
                      }
                    }
                    let qg2 = defaultQg2;

                    // QG3 automatically reflects the Semi-Final period grade equivalent
                    const semiPd = activeRecord?.periods?.["semi-final"];
                    let defaultQg3: number | null = null;
                    if (semiPd) {
                      const c = computeStudentGrade(semiPd, student.id);
                      const scores = semiPd.scores.filter((sc) => sc.studentId === student.id);
                      const hasData = scores.some((sc) => sc.score !== null && sc.score !== undefined) ||
                        semiPd.totalQuizOverrides?.[student.id] !== undefined ||
                        semiPd.totalParticipationOverrides?.[student.id] !== undefined;
                      if (hasData && c.gradeEquivalent != null) {
                        defaultQg3 = Number(c.gradeEquivalent);
                      }
                    }
                    let qg3 = defaultQg3;

                    // QG4 automatically reflects the Final period grade equivalent
                    const finalPd = activeRecord?.periods?.final;
                    let defaultQg4: number | null = null;
                    if (finalPd) {
                      const c = computeStudentGrade(finalPd, student.id);
                      const scores = finalPd.scores.filter((sc) => sc.studentId === student.id);
                      const hasData = scores.some((sc) => sc.score !== null && sc.score !== undefined) ||
                        finalPd.totalQuizOverrides?.[student.id] !== undefined ||
                        finalPd.totalParticipationOverrides?.[student.id] !== undefined;
                      if (hasData && c.gradeEquivalent != null) {
                        defaultQg4 = Number(c.gradeEquivalent);
                      }
                    }
                    let qg4 = defaultQg4;

                    // SERMS raw overrides (if manually entered or overridden)
                    const sermsOverrides = activeRecord?.sermsRawGrades?.[student.id];
                    if (sermsOverrides?.prelim !== undefined && sermsOverrides?.prelim !== null) {
                      prelimRaw = sermsOverrides.prelim;
                    }
                    if (sermsOverrides?.qg2 !== undefined && sermsOverrides?.qg2 !== null) {
                      qg2 = sermsOverrides.qg2;
                    }
                    if (sermsOverrides?.qg3 !== undefined && sermsOverrides?.qg3 !== null) {
                      qg3 = sermsOverrides.qg3;
                    }
                    if (sermsOverrides?.qg4 !== undefined && sermsOverrides?.qg4 !== null) {
                      qg4 = sermsOverrides.qg4;
                    }

                    // QG4 defaults to 5.0 when not yet entered (partial / baseline grade)
                    const effectiveQg4 = qg4 !== null ? qg4 : 5.0;

                    // Compute cumulative grades with exact formulas
                    const cum = computeCumulativeGrades(prelimRaw, qg2, qg3, effectiveQg4);

                    return (
                      <tr
                        key={student.id}
                        className="group transition-colors"
                        style={{ background: rowBg }}
                      >
                        <td
                          className="px-2 py-2 text-center text-xs font-bold border-b border-r w-[50px] min-w-[50px]"
                          style={{ background: rowBg, color: colors.studentNumberText, borderColor: colors.borderColor }}
                        >
                          {student.studentNumber || idx + 1}
                        </td>
                        <td
                          className="px-2 py-2 text-xs font-semibold border-b border-r font-mono truncate w-[120px] min-w-[120px]"
                          style={{ background: rowBg, color: colors.studentIdText, borderColor: colors.borderColor }}
                        >
                          {student.studentId || "—"}
                        </td>
                        <td
                          className="px-3 py-2 text-xs font-bold border-b border-r truncate w-[180px] min-w-[180px]"
                          style={{ background: rowBg, color: colors.studentNameText, borderColor: colors.borderColor }}
                        >
                          {student.fullName}
                        </td>

                        {/* 1. PRELIM (Raw Data in SERMS) */}
                        <td
                          className="px-1 py-1 text-center border-b border-r"
                          style={{
                            borderColor: colors.borderColor,
                            background: cum.prelim !== null ? colors.gradeEquivalentCellBg : undefined,
                          }}
                        >
                          <SermsRawGradeCell
                            value={cum.prelim}
                            placeholder="—"
                            bg={cum.prelim !== null ? colors.gradeEquivalentCellBg : undefined}
                            textColor={cum.prelim !== null ? colors.gradeEquivalentCellText : colors.studentIdText}
                            onChange={(val) => setSermsRawGrade(student.id, "prelim", val)}
                            title="PRELIM: Click to edit raw grade"
                          />
                        </td>

                        {/* 2. QG2 (Raw Data in SERMS) - Automatically populated from Midterm period grade */}
                        <td
                          className="px-1 py-1 text-center border-b border-r"
                          style={{
                            borderColor: colors.borderColor,
                            background: qg2 !== null ? colors.gradeEquivalentCellBg : undefined,
                          }}
                        >
                          <SermsRawGradeCell
                            value={qg2}
                            placeholder="—"
                            bg={qg2 !== null ? colors.gradeEquivalentCellBg : undefined}
                            textColor={qg2 !== null ? colors.gradeEquivalentCellText : colors.studentIdText}
                            onChange={(val) => setSermsRawGrade(student.id, "qg2", val)}
                            title="QG2: Automatic from Midterm. Click to override"
                          />
                        </td>

                        {/* 3. MIDTERM (Cumulative Grade) = (Prelim + QG2) / 2 */}
                        <td
                          className="px-3 py-2 text-center text-xs font-black border-b border-r select-none"
                          style={{
                            borderColor: colors.borderColor,
                            background: colors.totalGradeCellBg,
                            color: colors.totalGradeCellText,
                          }}
                          title="Midterm = (Prelim + QG2) / 2"
                        >
                          {formatSermsValue(cum.midterm)}
                        </td>

                        {/* 4. QG3 (Raw Data in SERMS) - Automatically populated from Semi-Final period grade */}
                        <td
                          className="px-1 py-1 text-center border-b border-r"
                          style={{
                            borderColor: colors.borderColor,
                            background: qg3 !== null ? colors.gradeEquivalentCellBg : undefined,
                          }}
                        >
                          <SermsRawGradeCell
                            value={qg3}
                            placeholder="—"
                            bg={qg3 !== null ? colors.gradeEquivalentCellBg : undefined}
                            textColor={qg3 !== null ? colors.gradeEquivalentCellText : colors.studentIdText}
                            onChange={(val) => setSermsRawGrade(student.id, "qg3", val)}
                            title="QG3: Automatic from Semi-Final. Click to override"
                          />
                        </td>

                        {/* 5. SEMI-FINAL (Cumulative Grade) = (Midterm + QG3) / 2 */}
                        <td
                          className="px-3 py-2 text-center text-xs font-black border-b border-r select-none"
                          style={{
                            borderColor: colors.borderColor,
                            background: colors.totalGradeCellBg,
                            color: colors.totalGradeCellText,
                          }}
                          title="Semi-Final = (Midterm + QG3) / 2"
                        >
                          {formatSermsValue(cum.semiFinal)}
                        </td>

                        {/* 6. QG4 (Raw Data in SERMS) - Automatically populated from Final period grade (default 5.0) */}
                        <td
                          className="px-1 py-1 text-center border-b border-r"
                          style={{
                            borderColor: colors.borderColor,
                            background: colors.gradeEquivalentCellBg,
                          }}
                        >
                          <SermsRawGradeCell
                            value={effectiveQg4}
                            placeholder="5.00"
                            bg={colors.gradeEquivalentCellBg}
                            textColor={colors.gradeEquivalentCellText}
                            onChange={(val) => setSermsRawGrade(student.id, "qg4", val)}
                            title="QG4: Raw grade in SERMS (default 5.00)"
                          />
                        </td>

                        {/* 7. FINAL (Cumulative Grade) = (Semi-Final + QG4) / 2 */}
                        <td
                          className="px-3 py-2 text-center text-xs font-black border-b border-r select-none"
                          style={{
                            borderColor: colors.borderColor,
                            background: colors.totalGradeCellBg,
                            color: colors.totalGradeCellText,
                          }}
                          title="Final = (Semi-Final + QG4) / 2"
                        >
                          {formatSermsValue(cum.finalCumulative)}
                        </td>

                        {/* FINAL GRADE - SERMS: FINAL GRADE = ROUND(FINAL, 1) */}
                        {(() => {
                          const displayGrade = cum.finalGrade !== null ? cum.finalGrade : cum.runningGrade;
                          const roundedDisplay = displayGrade !== null ? Math.round(displayGrade * 10) / 10 : null;
                          const hasGrade = roundedDisplay !== null;
                          const isFail = hasGrade && roundedDisplay! > 3.0;
                          return (
                            <td
                              className="px-3 py-2 text-center text-sm font-black border-b"
                              style={{
                                borderColor: colors.borderColor,
                                background: !hasGrade
                                  ? undefined
                                  : isFail
                                  ? colors.gradeEquivalentCellBg
                                  : colors.gpaCellBg,
                                color: !hasGrade
                                  ? colors.studentIdText
                                  : isFail
                                  ? colors.gradeEquivalentCellText
                                  : colors.gpaCellText,
                              }}
                              title={
                                cum.finalGrade !== null
                                  ? `SERMS Final Grade: ${roundedDisplay!.toFixed(1)} (Rounded from ${formatSermsValue(cum.finalCumulative)})`
                                  : "No grade data"
                              }
                            >
                              {hasGrade ? (
                                <span>{roundedDisplay!.toFixed(1)}</span>
                              ) : (
                                "—"
                              )}
                            </td>
                          );
                        })()}
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
            className={`overflow-x-auto rounded-xl border shadow-sm transition-colors ${isFullscreen ? "flex-1 overflow-y-auto rounded-none border-0 shadow-none max-h-full" : ""}`}
            style={{
              borderColor: isFullscreen ? "transparent" : colors.borderColor,
              background: colors.tableBg,
              WebkitOverflowScrolling: "touch",
            }}
          >
          <table className="w-full border-collapse text-sm" style={{ minWidth: 1000 }}>
            <thead>
              {/* Category Group Headers (Row 1) */}
              <tr className="h-[38px]">
                <th
                  colSpan={3}
                  className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
                style={{
                  background: colors.studentInfoHeaderBg,
                  color: colors.studentInfoHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Student Information
              </th>
              <th
                colSpan={quizActivities.length + 1}
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
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
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
                style={{
                  background: colors.participationHeaderBg,
                  color: colors.participationHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Class Participation (15%)
              </th>
              <th
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
                style={{
                  background: colors.examHeaderBg,
                  color: colors.examHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Exam (60%)
              </th>
              <th
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
                style={{
                  background: colors.totalGradeHeaderBg,
                  color: colors.totalGradeHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Total
              </th>
              <th
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b border-r select-none transition-colors h-[38px]"
                style={{
                  background: colors.roundedHeaderBg,
                  color: colors.roundedHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                Rounded
              </th>
              <th
                className="px-2 py-2 text-xs font-bold uppercase tracking-wider border-b select-none transition-colors h-[38px]"
                style={{
                  background: colors.gradeEquivalentHeaderBg,
                  color: colors.gradeEquivalentHeaderText,
                  borderColor: colors.borderColor,
                }}
              >
                {periodLabel} Grade
              </th>
              <th
                className="px-1 py-1.5 border-b w-8 transition-colors h-[38px]"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  borderColor: colors.borderColor,
                }}
              >
                {/* actions */}
              </th>
            </tr>

            {/* Column Headers (Row 2) */}
            <tr className="h-[38px]">
              {/* Student Info */}
              <th
                className="px-2 py-2 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors w-[50px] min-w-[50px] h-[38px]"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
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
                className="px-2 py-2 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors w-[120px] min-w-[120px] h-[38px]"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
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
                className="px-3 py-2 text-xs font-bold border-b border-r cursor-pointer select-none transition-colors w-[180px] min-w-[180px] h-[38px]"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  color: colors.studentInfoSubheaderText,
                  borderColor: colors.borderColor,
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
                  className="px-1 py-2 text-xs font-bold border-b border-r group relative select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-extrabold border-b border-r select-none transition-colors h-[38px]"
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
                  className="px-1 py-2 text-xs font-bold border-b border-r group relative select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-extrabold border-b border-r select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-bold border-b border-r select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-bold border-b border-r select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-bold border-b border-r select-none transition-colors h-[38px]"
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
                className="px-1 py-2 text-xs font-bold border-b select-none transition-colors h-[38px]"
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
                className="px-1 py-2 border-b w-8 transition-colors h-[38px]"
                style={{
                  background: colors.studentInfoSubheaderBg,
                  borderColor: colors.borderColor,
                }}
              >
                {/* actions */}
              </th>
            </tr>

            {/* MAX SCORE ROW (Row 3 in thead) */}
            <tr style={{ background: colors.maxScoreRowBg }}>
              <th
                colSpan={3}
                className="px-2 py-1.5 text-xs font-bold text-center border-b border-r select-none transition-colors"
                style={{
                  background: colors.maxScoreLabelBg,
                  color: colors.maxScoreLabelText,
                  borderColor: colors.borderColor,
                }}
              >
                MAX SCORE
              </th>
              {quizActivities.map((q) => (
                <th
                  key={q.id}
                  className="px-0 py-0 border-b border-r transition-colors font-normal"
                  style={{
                    background: colors.quizCellBg,
                    borderColor: colors.borderColor,
                  }}
                >
                  <MaxScoreCell
                    value={q.maxScore}
                    onChange={(v) => handleMaxScoreChange(q.id, v, "quiz")}
                  />
                </th>
              ))}
              <th
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.quizTotalCellBg,
                  color: colors.quizTotalCellText,
                  borderColor: colors.borderColor,
                }}
              >
                {totalMaxQuiz}
              </th>
              {participationActivities.map((p) => (
                <th
                  key={p.id}
                  className="px-0 py-0 border-b border-r transition-colors font-normal"
                  style={{
                    background: colors.participationCellBg,
                    borderColor: colors.borderColor,
                  }}
                >
                  <MaxScoreCell
                    value={p.maxScore}
                    onChange={(v) => handleMaxScoreChange(p.id, v, "participation")}
                  />
                </th>
              ))}
              <th
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.participationTotalCellBg,
                  color: colors.participationTotalCellText,
                  borderColor: colors.borderColor,
                }}
              >
                {totalMaxParticipation}
              </th>
              <th
                className="px-0 py-0 border-b border-r transition-colors font-normal"
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
              </th>
              <th
                className="px-1 py-1 text-xs font-bold text-center border-b border-r transition-colors"
                style={{
                  background: colors.totalGradeCellBg,
                  color: colors.totalGradeCellText,
                  borderColor: colors.borderColor,
                }}
              >
                100
              </th>
              <th
                className="px-1 py-1 border-b border-r transition-colors"
                style={{
                  background: colors.roundedCellBg,
                  borderColor: colors.borderColor,
                }}
              />
              <th
                className="px-1 py-1 border-b transition-colors"
                style={{
                  background: colors.gradeEquivalentCellBg,
                  borderColor: colors.borderColor,
                }}
              />
              <th
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
                      className="px-2 py-1 text-center text-xs md:text-sm font-bold border-b border-r select-none transition-colors w-[50px] min-w-[50px]"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentNumberText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {student.studentNumber}
                    </td>
                    {/* Student ID */}
                    <td
                      className="px-2 py-1 text-[11px] md:text-sm font-semibold border-b border-r transition-colors truncate font-mono w-[120px] min-w-[120px]"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentIdText,
                        borderColor: colors.borderColor,
                      }}
                    >
                      {student.studentId}
                    </td>
                    {/* Student Name */}
                    <td
                      className="px-3 py-1 text-xs md:text-sm font-semibold border-b border-r transition-colors w-[180px] min-w-[180px]"
                      style={{
                        background: rowStickyBg,
                        color: colors.studentNameText,
                        borderColor: colors.borderColor,
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
      {/* Subjects Switcher & Grading Weights Legend */}
      <div className="mt-4 flex flex-col gap-3 shrink-0">
        {/* Quick Subject Switcher Tabs */}
        <div className="flex items-center gap-2.5 w-full overflow-hidden">
          <span className="text-[11px] font-black tracking-wider uppercase text-gray-400 dark:text-slate-500 shrink-0">
            Subjects:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin flex-1">
            {records.map((r) => {
              const isCurrent = r.subject.id === activeSubjectId;
              return (
                <button
                  key={r.subject.id}
                  onClick={() => setActiveSubjectId(r.subject.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? "bg-[#166534] dark:bg-emerald-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                  }`}
                >
                  <span>
                    {r.subject.subjectCode || "Subject"}
                    {r.subject.offerNumber ? ` - ${r.subject.offerNumber}` : ""}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isCurrent ? "bg-white/20 text-white" : "bg-black/10 dark:bg-white/10 text-gray-500 dark:text-slate-400"
                  }`}>
                    {r.students.length}
                  </span>
                </button>
              );
            })}
            {records.length > 1 && (
              <button
                onClick={() => setDeleteAllConfirm(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-900/40 transition cursor-pointer whitespace-nowrap shrink-0"
                title="Delete all subjects bulk action"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete All</span>
              </button>
            )}
          </div>
        </div>

        {/* Grading Weights Legend (below Subjects) */}
        <div className="flex items-center gap-4 flex-wrap text-[10px] font-semibold text-gray-500 dark:text-slate-400 pt-1 border-t border-gray-100 dark:border-slate-800/60">
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
            onImportExcel={studentModal.mode === "add" ? handleImportStudents : undefined}
            onDownloadTemplate={studentModal.mode === "add" ? () => {
              exportStudentTemplateExcel(
                activeRecord?.subject?.subjectCode || "MATH 101",
                activeRecord?.subject?.offerNumber || "80062"
              );
            } : undefined}
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
