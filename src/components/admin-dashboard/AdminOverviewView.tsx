import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Users,
  ShieldCheck,
  BarChart3,
  ChevronDown,
  Clock,
  Plus,
} from "lucide-react";
import type { ActivityItem } from "../../types/dashboard";

interface AdminOverviewViewProps {
  totalQuizzes: number;
  totalStudents: number;
  totalAttempts: number;
  activities: ActivityItem[];
  timeRange: "This Month" | "This Week" | "All Time";
  setTimeRange: (t: "This Month" | "This Week" | "All Time") => void;
  isTimeDropdownOpen: boolean;
  setIsTimeDropdownOpen: (open: boolean) => void;
  chartLabels: string[];
  handleNavClick: (nav: any) => void;
}

export const AdminOverviewView: React.FC<AdminOverviewViewProps> = ({
  totalQuizzes,
  totalStudents,
  totalAttempts,
  activities,
  timeRange,
  setTimeRange,
  isTimeDropdownOpen,
  setIsTimeDropdownOpen,
  chartLabels,
  handleNavClick,
}) => {
  return (
    <motion.div
      key="admin-dashboard-view"
      initial={{ opacity: 0, y: 15, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.99 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-12"
    >
      {/* 4. STATS METRIC CARDS ROW */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: Total Quizzes */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-[#6B7280]">
              Total Quizzes
            </span>
            <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
              {totalQuizzes}
            </span>
          </div>
        </div>

        {/* Card 2: Total Students */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-[#6B7280]">
              Total Students
            </span>
            <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
              {totalStudents}
            </span>
          </div>
        </div>

        {/* Card 3: Total Attempts */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-[#6B7280]">
              Total Attempts
            </span>
            <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
              {totalAttempts}
            </span>
          </div>
        </div>
      </section>

      {/* 5. MIDDLE ROW: QUIZ OVERVIEW & RECENT QUIZ ACTIVITY */}
      <section className="hidden">
        {/* Left Card: Quiz Overview (Chart) */}
        <div className="lg:col-span-7 bg-white border border-[#ECEFF3] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#166534]" />
              <h3 className="text-base font-bold text-[#111827]">
                Quiz Overview
              </h3>
            </div>

            {/* Dropdown Filter */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F3F4F6] rounded-xl text-xs font-semibold text-[#4B5563] transition-colors cursor-pointer"
              >
                <span>{timeRange}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
              </button>

              <AnimatePresence>
                {isTimeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-1.5 w-32 bg-white border border-[#EAEBED] rounded-xl shadow-lg py-1 z-20"
                  >
                    {(["This Month", "This Week", "All Time"] as const).map(
                      (t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setTimeRange(t);
                            setIsTimeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer ${
                            timeRange === t
                              ? "bg-[#166534]/10 text-[#166534] font-bold"
                              : "text-[#4B5563] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          {t}
                        </button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Chart SVG Canvas */}
          <div className="w-full h-56 relative mt-2 flex flex-col justify-between">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 500 200"
              preserveAspectRatio="none"
            >
              {/* Grid Lines */}
              <line
                x1="35"
                y1="20"
                x2="490"
                y2="20"
                stroke="#F3F4F6"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="35"
                y1="60"
                x2="490"
                y2="60"
                stroke="#F3F4F6"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="35"
                y1="100"
                x2="490"
                y2="100"
                stroke="#F3F4F6"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="35"
                y1="140"
                x2="490"
                y2="140"
                stroke="#F3F4F6"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="35"
                y1="175"
                x2="490"
                y2="175"
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />

              {/* Y-Axis Labels */}
              <text
                x="25"
                y="24"
                textAnchor="end"
                className="text-[10px] fill-[#9CA3AF] font-sans"
              >
                100
              </text>
              <text
                x="25"
                y="64"
                textAnchor="end"
                className="text-[10px] fill-[#9CA3AF] font-sans"
              >
                75
              </text>
              <text
                x="25"
                y="104"
                textAnchor="end"
                className="text-[10px] fill-[#9CA3AF] font-sans"
              >
                50
              </text>
              <text
                x="25"
                y="144"
                textAnchor="end"
                className="text-[10px] fill-[#9CA3AF] font-sans"
              >
                25
              </text>
              <text
                x="25"
                y="179"
                textAnchor="end"
                className="text-[10px] fill-[#9CA3AF] font-sans"
              >
                0
              </text>

              {/* Red Line: Attempts Baseline */}
              <polyline
                fill="none"
                stroke="#166534"
                strokeWidth="2.5"
                points="60,175 140,175 220,175 300,175 380,175 460,175"
              />
              {/* Point circles for Attempts */}
              <circle cx="60" cy="175" r="3.5" fill="#166534" />
              <circle cx="140" cy="175" r="3.5" fill="#166534" />
              <circle cx="220" cy="175" r="3.5" fill="#166534" />
              <circle cx="300" cy="175" r="3.5" fill="#166534" />
              <circle cx="380" cy="175" r="3.5" fill="#166534" />
              <circle cx="460" cy="175" r="3.5" fill="#166534" />
            </svg>

            {/* X-Axis Date Labels */}
            <div className="flex justify-between pl-10 pr-4 mt-2 text-[11px] font-medium text-[#9CA3AF]">
              {chartLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Recent Quiz Activity */}
        <div className="lg:col-span-5 bg-white border border-[#ECEFF3] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#166534]" />
              <h3 className="text-base font-bold text-[#111827]">
                Recent Quiz Activity
              </h3>
            </div>
            <button
              type="button"
              onClick={() => handleNavClick("quiz-results")}
              className="text-xs font-bold text-[#166534] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* Activity List / Empty State */}
          <div className="flex-1 flex flex-col justify-center py-2">
            {activities.length === 0 ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-3.5">
                  <ClipboardList className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-[#111827]">
                  No quiz activity yet.
                </h4>
                <p className="text-xs text-[#6B7280] mt-1 max-w-[220px]">
                  Quizzes you add will appear here.
                </p>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-3">
                {activities.map((act) => (
                  <div
                    key={act.id}
                    className="flex items-center justify-between p-3.5 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-gray-50 transition"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold text-[#111827]">
                        {act.studentName}
                      </span>
                      <span className="text-xs text-[#6B7280]">
                        {act.quizTitle}
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-sm font-bold text-[#166534]">
                        {act.score}/{act.totalQuestions}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {act.submittedAt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Action Button to Add Quiz */}
          <div className="pt-3 border-t border-[#F3F4F6]">
            <button
              type="button"
              onClick={() => handleNavClick("add-quiz")}
              className="w-full py-2 bg-[#F9FAFB] hover:bg-[#166534]/10 border border-[#E5E7EB] hover:border-[#166534]/30 rounded-xl text-xs font-bold text-[#166534] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Quiz</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. RECENT QUIZ TAKERS */}
      <section className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
            Recent Quiz Takers
          </h3>
          <button
            type="button"
            onClick={() => handleNavClick("quiz-results")}
            className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                <th className="pb-3 px-3">Name</th>
                <th className="pb-3 px-3">Quiz</th>
                <th className="pb-3 px-3 text-right">Submitted</th>
              </tr>
            </thead>
            {activities.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={3} className="py-10 text-center">
                    <div className="flex flex-col items-center">
                      <Users className="w-8 h-8 text-[#166534] dark:text-emerald-400 mb-3" />
                      <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                        No quiz takers yet.
                      </h4>
                      <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1">
                        Recent quiz takers will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                {activities.slice(0, 10).map((act) => (
                  <tr
                    key={act.id}
                    className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                  >
                    <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                      {act.studentName}
                    </td>
                    <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                      {act.quizTitle}
                    </td>
                    <td className="py-3.5 px-3 text-right text-xs text-[#6B7280] dark:text-slate-400">
                      {act.submittedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </section>
    </motion.div>
  );
};
