import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarMovingBackground } from "../SidebarMovingBackground";
import {
  LayoutDashboard,
  Calculator,
  BookOpen,
  HelpCircle,
  History,
  User,
  UserCheck,
  LogOut,
  X,
} from "lucide-react";

interface UserDashboardSidebarProps {
  activeNav: string;
  onNavigate: (navKey: any) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  isTopicCalculatorOpen: boolean;
  onLogout: () => Promise<void>;
}

export const UserDashboardSidebar: React.FC<UserDashboardSidebarProps> = ({
  activeNav,
  onNavigate,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  isTopicCalculatorOpen,
  onLogout,
}) => {
  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside
        className={`relative hidden lg:flex border-r border-[#EAEBED] dark:border-slate-800 flex-col justify-between h-full shrink-0 select-none z-30 shadow-[1px_0_4px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out overflow-hidden ${
          isTopicCalculatorOpen ? "w-[70px] p-3" : "w-[260px] p-5"
        }`}
      >
        <SidebarMovingBackground />
        <div className="relative z-10 flex flex-col gap-6">
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
                <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D] dark:text-slate-100">
                  Math<span className="text-[#166534] dark:text-emerald-400">Workspace</span>
                </span>
                <span className="text-[0.72rem] font-semibold text-gray-700 dark:text-slate-400">
                  Student Portal
                </span>
              </div>
            )}
          </div>

          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            <button
              onClick={() => onNavigate("dashboard")}
              className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "dashboard"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Dashboard"
            >
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              {!isTopicCalculatorOpen && <span>Dashboard</span>}
            </button>

            {/* LEARN Section */}
            {!isTopicCalculatorOpen && (
              <div className="pt-4 pb-1">
                <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                  LEARN
                </span>
              </div>
            )}

            <button
              onClick={() => onNavigate("calculators")}
              className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "calculators"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Calculators"
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-4 h-4 shrink-0" />
                {!isTopicCalculatorOpen && <span>Calculators</span>}
              </div>
            </button>

            <button
              onClick={() => onNavigate("topics")}
              className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "topics"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
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
                <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                  PRACTICE
                </span>
              </div>
            )}

            <button
              onClick={() => onNavigate("quizzes")}
              className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "quizzes"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Quizzes"
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              {!isTopicCalculatorOpen && <span>Quizzes</span>}
            </button>

            <button
              onClick={() => onNavigate("quizzes-history")}
              className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "quizzes-history"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Quizzes History"
            >
              <History className="w-4 h-4 shrink-0" />
              {!isTopicCalculatorOpen && <span>Quizzes History</span>}
            </button>

            {/* Attendance */}
            <button
              onClick={() => onNavigate("attendance")}
              className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "attendance"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Attendance"
            >
              <UserCheck className="w-4 h-4 shrink-0" />
              {!isTopicCalculatorOpen && <span>Attendance</span>}
            </button>

            {/* ACCOUNT Section */}
            {!isTopicCalculatorOpen && (
              <div className="pt-4 pb-1">
                <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                  ACCOUNT
                </span>
              </div>
            )}

            <button
              onClick={() => onNavigate("profile")}
              className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${
                isTopicCalculatorOpen ? "justify-center !px-0" : ""
              } ${
                activeNav === "profile"
                  ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              title="Profile"
            >
              <User className="w-4 h-4 shrink-0" />
              {!isTopicCalculatorOpen && <span>My Profile</span>}
            </button>
          </nav>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-xs"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Slide-over */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 w-[270px] bg-white dark:bg-[#161F30] z-50 lg:hidden flex flex-col justify-between p-5 border-r border-[#EAEBED] dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <SidebarMovingBackground />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 text-white font-serif text-2xl font-bold">
                    Σ
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1F242D] dark:text-slate-100 text-base">
                      MathWorkspace
                    </span>
                    <span className="text-[0.68rem] text-gray-700 dark:text-slate-400">
                      Student Portal
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    onNavigate("dashboard");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm ${
                    activeNav === "dashboard"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>

                <div className="pt-3 pb-1">
                  <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                    LEARN
                  </span>
                </div>

                <button
                  onClick={() => {
                    onNavigate("calculators");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "calculators"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calculator className="w-4 h-4" />
                    <span>Calculators</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onNavigate("topics");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "topics"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Topics</span>
                  </div>
                </button>

                <div className="pt-3 pb-1">
                  <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                    PRACTICE
                  </span>
                </div>

                <button
                  onClick={() => {
                    onNavigate("quizzes");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "quizzes"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Quizzes</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate("quizzes-history");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "quizzes-history"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <History className="w-4 h-4" />
                  <span>Quizzes History</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate("attendance");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "attendance"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Attendance</span>
                </button>

                <div className="pt-3 pb-1">
                  <span className="text-[0.68rem] font-extrabold tracking-wider text-gray-700 dark:text-slate-300 uppercase px-3.5">
                    ACCOUNT
                  </span>
                </div>

                <button
                  onClick={() => {
                    onNavigate("profile");
                    setMobileSidebarOpen(false);
                  }}
                  className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "profile"
                      ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                      : "text-gray-900 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>My Profile</span>
                </button>
              </nav>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#EAEBED]/80 dark:border-slate-800/80">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 text-sm font-medium cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserDashboardSidebar;
