import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  BookOpen,
  PlusSquare,
  ClipboardCheck,
  BarChart3,
  History,
  Users,
  GraduationCap,
  X,
  ArrowLeft,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";

interface AdminDashboardSidebarProps {
  isTopicCalculatorOpen: boolean;
  isStudentViewMode: boolean;
  setIsStudentViewMode: (val: boolean) => void;
  activeNav: string;
  handleNavClick: (nav: any) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  quizzesCount: number;
}

export const AdminDashboardSidebar: React.FC<AdminDashboardSidebarProps> = ({
  isTopicCalculatorOpen,
  isStudentViewMode,
  setIsStudentViewMode,
  activeNav,
  handleNavClick,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  quizzesCount,
}) => {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR (Desktop Fixed)                                           */}
      {/* ========================================================================= */}
      <aside
        className={`hidden lg:flex bg-white border-r border-[#EAEBED] flex-col justify-between h-full shrink-0 overflow-hidden select-none z-30 transition-all duration-300 ease-in-out ${
          isTopicCalculatorOpen ? "w-[70px] p-3" : "w-[260px] p-5"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Brand Logo Header */}
          <div
            className={`flex items-center gap-3 px-1 py-1 ${
              isTopicCalculatorOpen ? "justify-center" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 shrink-0">
              <span className="font-serif text-2xl font-bold text-white leading-none select-none">
                Σ
              </span>
            </div>
            {!isTopicCalculatorOpen && (
              <div className="flex flex-col leading-tight">
                <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                  Math<span className="text-[#166534]">Workspace</span>
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  {isStudentViewMode ? (
                    <motion.span
                      key="portal-title-student"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18 }}
                      className="text-[0.72rem] font-semibold text-[#8C93A0] flex items-center gap-1.5"
                    >
                      <span className="text-[#166534] font-bold">
                        Student Portal
                      </span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#166534]/10 text-[#166534]">
                        Overview
                      </span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="portal-title-admin"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18 }}
                      className="text-[0.72rem] font-semibold text-[#8C93A0]"
                    >
                      Admin Dashboard
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            <AnimatePresence mode="wait" initial={false}>
              {isStudentViewMode ? (
                /* STUDENT OVERVIEW SIDEBAR NAVIGATION */
                <motion.div
                  key="student-nav"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col gap-1"
                >
                  {/* Dashboard (Student Overview) */}
                  <button
                    onClick={() => handleNavClick("student-overview")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "student-overview"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Dashboard"
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Dashboard</span>}
                  </button>

                  {/* LEARN Section */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-4 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        LEARN
                      </span>
                    </div>
                  )}

                  {/* Calculators */}
                  <button
                    onClick={() => handleNavClick("calculators")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "calculators"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Calculators"
                  >
                    <div className="flex items-center gap-3">
                      <Calculator className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Calculators</span>}
                    </div>
                  </button>

                  {/* Topics */}
                  <button
                    onClick={() => handleNavClick("topics")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "topics"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Topics"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Topics</span>}
                    </div>
                  </button>

                  {/* PRACTICE Section */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-4 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        PRACTICE
                      </span>
                    </div>
                  )}

                  {/* Quizzes */}
                  <button
                    onClick={() => handleNavClick("student-quizzes")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "student-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quizzes"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Quizzes</span>}
                    </div>
                    {!isTopicCalculatorOpen && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                          activeNav === "student-quizzes"
                            ? "bg-white/20 text-white"
                            : "bg-[#E4E7EC] dark:bg-slate-700 text-[#6B7280] dark:text-slate-300"
                        }`}
                      >
                        {quizzesCount}
                      </span>
                    )}
                  </button>

                  {/* Quizzes History */}
                  <button
                    onClick={() => handleNavClick("history-quizzes")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "history-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quizzes History"
                  >
                    <History className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quizzes History</span>}
                  </button>

                  {/* Quiz Results */}
                  <button
                    onClick={() => handleNavClick("quiz-results")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "quiz-results"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quiz Results"
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quiz Results</span>}
                  </button>
                </motion.div>
              ) : (
                /* REGULAR ADMIN SIDEBAR NAVIGATION */
                <motion.div
                  key="admin-nav"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col gap-1"
                >
                  {/* Dashboard Link */}
                  <button
                    onClick={() => handleNavClick("dashboard")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "dashboard"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Dashboard"
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Dashboard</span>}
                  </button>

                  {/* Calculators Link */}
                  <button
                    onClick={() => handleNavClick("calculators")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "calculators"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Calculators"
                  >
                    <Calculator className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Calculators</span>}
                  </button>

                  {/* Topics Link */}
                  <button
                    onClick={() => handleNavClick("topics")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "topics"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Topics"
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Topics</span>}
                  </button>

                  {/* Section: Quiz Management */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-5 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        Quiz Management
                      </span>
                    </div>
                  )}

                  {/* Add Quiz */}
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "add-quiz"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Add Quiz"
                  >
                    <PlusSquare className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Add Quiz</span>}
                  </button>

                  {/* Published Quizzes */}
                  <button
                    onClick={() => handleNavClick("published-quizzes")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "published-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Published Quizzes"
                  >
                    <ClipboardCheck className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && (
                      <div className="flex items-center justify-between w-full">
                        <span>Published Quizzes</span>
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                          activeNav === "published-quizzes"
                            ? "bg-white/20 text-white"
                            : "bg-emerald-50 text-[#166534]"
                        }`}>
                          {quizzesCount}
                        </span>
                      </div>
                    )}
                  </button>

                  {/* Quiz Results */}
                  <button
                    onClick={() => handleNavClick("quiz-results")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "quiz-results"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quiz Results"
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quiz Results</span>}
                  </button>

                  {/* History Quizzes */}
                  <button
                    onClick={() => handleNavClick("history-quizzes")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "history-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="History Quizzes"
                  >
                    <History className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>History Quizzes</span>}
                  </button>

                  {/* Section: User Management */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-5 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        User Management
                      </span>
                    </div>
                  )}

                  {/* View Students */}
                  <button
                    onClick={() => handleNavClick("view-students")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "view-students"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="View Students"
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>View Students</span>}
                  </button>

                  {/* Student Overview */}
                  <button
                    onClick={() => handleNavClick("student-overview")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "student-overview"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Student Overview"
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Student Overview</span>}
                  </button>
                  {/* Section: Academic & Grading */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-5 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        Academic & Grading
                      </span>
                    </div>
                  )}

                  {/* Grading Sheet */}
                  <button
                    onClick={() => handleNavClick("grading")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                      isTopicCalculatorOpen ? "justify-center !px-0" : ""
                    } ${
                      activeNav === "grading"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Grading Sheet"
                  >
                    <FileSpreadsheet className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Grading Sheet</span>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>

        {/* Bottom Sidebar Action for Student View Mode */}
        <AnimatePresence>
          {isStudentViewMode && !isTopicCalculatorOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 12, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pt-3 pb-1 border-t border-[#F0F1F3] dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => {
                  setIsStudentViewMode(false);
                  handleNavClick("dashboard");
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#166534]/30 bg-[#F0FDF4] dark:bg-[#166534]/20 dark:border-[#166534]/40 text-[#166534] dark:text-emerald-400 font-bold text-xs hover:bg-[#dcfce7] dark:hover:bg-[#166534]/30 transition shadow-xs cursor-pointer active:scale-98"
                title="Return to Admin Dashboard"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span>Return to Admin</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      {/* Mobile Drawer Backdrop & Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[270px] bg-white border-r border-[#EAEBED] flex flex-col justify-between p-5 h-full z-10 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 shrink-0">
                      <span className="font-serif text-2xl font-bold text-white leading-none">
                        Σ
                      </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                        Math<span className="text-[#166534]">Workspace</span>
                      </span>
                      <span className="text-[0.72rem] font-semibold text-[#8C93A0] flex items-center gap-1.5">
                        {isStudentViewMode ? (
                          <>
                            <span className="text-[#166534] font-bold">
                              Student Portal
                            </span>
                            <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#166534]/10 text-[#166534]">
                              Overview
                            </span>
                          </>
                        ) : (
                          "Admin Dashboard"
                        )}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 mt-1">
                  <AnimatePresence mode="wait" initial={false}>
                    {isStudentViewMode ? (
                      /* STUDENT OVERVIEW MOBILE DRAWER */
                      <motion.div
                        key="mobile-student-nav"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1"
                      >
                        <button
                          onClick={() => handleNavClick("student-overview")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "student-overview"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <LayoutDashboard className="w-4 h-4 shrink-0" />
                          <span>Dashboard</span>
                        </button>

                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            LEARN
                          </span>
                        </div>

                        <button
                          onClick={() => handleNavClick("calculators")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "calculators"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Calculator className="w-4 h-4 shrink-0" />
                            <span>Calculators</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick("topics")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "topics"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <BookOpen className="w-4 h-4 shrink-0" />
                            <span>Topics</span>
                          </div>
                        </button>

                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            PRACTICE
                          </span>
                        </div>

                        <button
                          onClick={() => handleNavClick("student-quizzes")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "student-quizzes"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <HelpCircle className="w-4 h-4 shrink-0" />
                            <span>Quizzes</span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                              activeNav === "student-quizzes"
                                ? "bg-white/20 text-white"
                                : "bg-[#F0F1F3] text-[#6B7280]"
                            }`}
                          >
                            {quizzesCount}
                          </span>
                        </button>

                        <button
                          onClick={() => handleNavClick("history-quizzes")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "history-quizzes"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <History className="w-4 h-4 shrink-0" />
                          <span>Quizzes History</span>
                        </button>

                        <button
                          onClick={() => handleNavClick("quiz-results")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "quiz-results"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <BarChart3 className="w-4 h-4 shrink-0" />
                          <span>Quiz Results</span>
                        </button>

                        <div className="pt-4 border-t border-[#F0F1F3] mt-2">
                          <button
                            onClick={() => {
                              setIsStudentViewMode(false);
                              handleNavClick("dashboard");
                            }}
                            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#166534]/30 bg-[#F0FDF4] text-[#166534] font-bold text-xs hover:bg-[#FCE8EB] transition shadow-xs"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Admin</span>
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      /* REGULAR ADMIN MOBILE DRAWER */
                      <motion.div
                        key="mobile-admin-nav"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1"
                      >
                        <button
                          onClick={() => handleNavClick("dashboard")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "dashboard"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <LayoutDashboard className="w-4 h-4 shrink-0" />
                          <span>Dashboard</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("calculators")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "calculators"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <Calculator className="w-4 h-4 shrink-0" />
                          <span>Calculators</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("topics")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "topics"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <BookOpen className="w-4 h-4 shrink-0" />
                          <span>Topics</span>
                        </button>
                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            Quiz Management
                          </span>
                        </div>
                        <button
                          onClick={() => handleNavClick("add-quiz")}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                        >
                          <PlusSquare className="w-4 h-4 shrink-0" />
                          <span>Add Quiz</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("published-quizzes")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left ${
                            activeNav === "published-quizzes"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white font-bold"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <ClipboardCheck className="w-4 h-4 shrink-0" />
                            <span>Published Quizzes</span>
                          </div>
                          <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                            activeNav === "published-quizzes" ? "bg-white/20 text-white" : "bg-emerald-100 text-[#166534]"
                          }`}>
                            {quizzesCount}
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick("quiz-results")}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                        >
                          <BarChart3 className="w-4 h-4 shrink-0" />
                          <span>Quiz Results</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("history-quizzes")}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                        >
                          <History className="w-4 h-4 shrink-0" />
                          <span>History Quizzes</span>
                        </button>
                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            User Management
                          </span>
                        </div>
                        <button
                          onClick={() => handleNavClick("view-students")}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                        >
                          <Users className="w-4 h-4 shrink-0" />
                          <span>View Students</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("student-overview")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "student-overview"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white font-bold"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <GraduationCap className="w-4 h-4 shrink-0" />
                          <span>Student Overview</span>
                        </button>
                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            Academic & Grading
                          </span>
                        </div>
                        <button
                          onClick={() => handleNavClick("grading")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "grading"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white font-bold"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <FileSpreadsheet className="w-4 h-4 shrink-0" />
                          <span>Grading Sheet</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </nav>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
