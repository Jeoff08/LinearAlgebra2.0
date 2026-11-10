import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  BookOpen,
  Layers,
  ChevronDown,
  TrendingUp,
  Trophy,
  HelpCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import type {
  StudentAvailableQuiz,
  StudentQuizAttemptItem,
} from "../../types/dashboard";

interface UserOverviewViewProps {
  greeting: string;
  displayName: string;
  user: any;
  onNavigate: (navKey: string) => void;
  timeRange: "Today" | "This Week" | "This Month" | "All Time";
  setTimeRange: (t: "Today" | "This Week" | "This Month" | "All Time") => void;
  isTimeDropdownOpen: boolean;
  setIsTimeDropdownOpen: (open: boolean) => void;
  studentAverageScore: number;
  studentHighestScore: number;
  totalQuizzesTaken: number;
  totalTimeSpentSeconds: number;
  pendingAvailableQuizzes: StudentAvailableQuiz[];
  myAttempts: StudentQuizAttemptItem[];
  onStartQuiz: (quiz: StudentAvailableQuiz) => void;
  onReviewAttempt: (attempt: StudentQuizAttemptItem) => void;
  formatSeconds: (sec: number) => string;
  userEnrolledSubject?: string;
}

export const UserOverviewView: React.FC<UserOverviewViewProps> = ({
  greeting,
  displayName,
  user,
  onNavigate,
  timeRange,
  setTimeRange,
  isTimeDropdownOpen,
  setIsTimeDropdownOpen,
  studentAverageScore,
  studentHighestScore,
  totalQuizzesTaken,
  totalTimeSpentSeconds,
  pendingAvailableQuizzes,
  myAttempts,
  onStartQuiz,
  onReviewAttempt,
  formatSeconds,
  userEnrolledSubject = "MATH 101",
}) => {
  const displayAttempts: StudentQuizAttemptItem[] = useMemo(() => {
    const norm = (s?: string) => (s || "MATH 101").toUpperCase().trim();
    const enrolled = norm(userEnrolledSubject);
    const filtered = myAttempts.filter((att: StudentQuizAttemptItem) => {
      const t = (att.topic || "").toLowerCase();
      const title = (att.quizTitle || "").toLowerCase();
      if (enrolled === "MATH 102") {
        return (
          t.includes("calculus 2") ||
          t.includes("calculus-2") ||
          t.includes("integral") ||
          title.includes("102") ||
          title.includes("calculus 2")
        );
      }
      if (enrolled === "MATH 103") {
        return (
          t.includes("linear") ||
          title.includes("103") ||
          title.includes("linear")
        );
      }
      return (
        t.includes("calculus 1") ||
        t.includes("calculus-1") ||
        t.includes("differential") ||
        title.includes("101")
      );
    });
    return filtered.length > 0 ? filtered : myAttempts;
  }, [myAttempts, userEnrolledSubject]);
  return (
    <>
      {/* TOP ROW: HERO WELCOME BANNER (LEFT) & YOUR PROGRESS CARD (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 1. Left Hero Banner (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[26px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Left Column Text & Buttons */}
          <div className="flex flex-col items-start z-10 max-w-full">
            <span className="text-base sm:text-lg font-bold text-[#1F242D] dark:text-slate-200">
              {greeting},
            </span>
            <h1 className="text-3xl sm:text-[2.35rem] font-extrabold text-[#166534] dark:text-emerald-400 tracking-tight leading-tight mt-0.5 mb-2 flex items-center gap-2 whitespace-nowrap">
              {displayName}!
            </h1>

            {/* Block Assignment Badge */}
            <div className="mb-4">
              {user?.block ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#166534]/10 dark:bg-emerald-950/40 border border-[#166534]/20 dark:border-emerald-800/40"
                >
                  <Layers className="w-3.5 h-3.5 text-[#166534] dark:text-emerald-400" />
                  <span className="text-xs font-bold text-[#166534] dark:text-emerald-400 uppercase tracking-wide">
                    Block {user.block.trim().toUpperCase()}
                  </span>
                </motion.div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <Layers className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-medium text-gray-400 tracking-wide">
                    No Block Assigned
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate("quizzes")}
                className="bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] active:scale-98 text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl shadow-[0_6px_16px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border border-white/10"
              >
                <span>Start Practicing</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate("topics")}
                className="bg-white dark:bg-slate-800 hover:bg-[#F8F9FA] dark:hover:bg-slate-700 active:scale-98 text-[#1F242D] dark:text-slate-100 border border-[#E0E2E6] dark:border-slate-700 font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                <span>Browse Topics</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Right "Your Progress" Card (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[24px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          {/* Card Header + Time Dropdown */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-[#1F242D] dark:text-slate-100">
              Your Progress
            </h2>

            <div className="relative">
              <button
                onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E0E2E6] dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-[#F8F9FA] dark:hover:bg-slate-700 text-xs font-semibold text-[#4B5565] dark:text-slate-300 transition cursor-pointer"
              >
                <span>{timeRange}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0]" />
              </button>

              <AnimatePresence>
                {isTimeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-full mt-1.5 w-32 bg-white dark:bg-[#161F30] rounded-xl border border-[#EAEBED] dark:border-slate-700 shadow-lg p-1 z-30 flex flex-col"
                  >
                    {(
                      [
                        "Today",
                        "This Week",
                        "This Month",
                        "All Time",
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setTimeRange(opt);
                          setIsTimeDropdownOpen(false);
                        }}
                        className={`px-2.5 py-1.5 text-xs text-left rounded-lg font-medium transition cursor-pointer ${
                          timeRange === opt
                            ? "bg-[#166534] text-white"
                            : "text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Circular Donut & Legend Column */}
          <div className="flex items-center justify-between gap-4 py-2">
            {/* Donut Chart */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-[#EAEBED] dark:stroke-slate-700/60"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-[#166534] dark:stroke-emerald-500 transition-all duration-1000"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 - (251.2 * studentAverageScore) / 100
                  }
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-[#1F242D] dark:text-slate-100 leading-none">
                  {studentAverageScore} pts
                </span>
                <span className="text-[10px] font-semibold text-[#8C93A0] dark:text-slate-400 mt-1">
                  Overall Progress
                </span>
              </div>
            </div>

            {/* Legend Stat Items */}
            <div className="flex flex-col gap-2 flex-1 pl-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]" />
                  <span className="text-[#4B5565] dark:text-slate-300 font-medium text-[11px] sm:text-xs">
                    Quizzes Taken
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] dark:text-slate-100 text-xs">
                  {totalQuizzesTaken}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F59E0B]" />
                  <span className="text-[#4B5565] dark:text-slate-300 font-medium text-[11px] sm:text-xs">
                    Average Score
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] dark:text-slate-100 text-xs">
                  {studentAverageScore} pts
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#166534] dark:bg-emerald-400" />
                  <span className="text-[#4B5565] dark:text-slate-300 font-medium text-[11px] sm:text-xs">
                    Highest Score
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] dark:text-slate-100 text-xs">
                  {studentHighestScore}%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#1F242D] dark:bg-slate-400" />
                  <span className="text-[#4B5565] dark:text-slate-300 font-medium text-[11px] sm:text-xs">
                    Time Spent
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] dark:text-slate-100 text-xs">
                  {formatSeconds(totalTimeSpentSeconds)}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Dual Mini Stat Boxes */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#F0F1F3] dark:border-slate-700/60">
            <div className="bg-[#F8F9FA] dark:bg-slate-800/60 border border-[#ECEFF3] dark:border-slate-700 rounded-[16px] p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium text-[#8C93A0] dark:text-slate-400">
                  Average Score
                </span>
                <span className="text-base font-bold text-[#1F242D] dark:text-slate-100">
                  {studentAverageScore} pts
                </span>
              </div>
            </div>

            <div className="bg-[#F8F9FA] dark:bg-slate-800/60 border border-[#ECEFF3] dark:border-slate-700 rounded-[16px] p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium text-[#8C93A0] dark:text-slate-400">
                  Highest Score
                </span>
                <span className="text-base font-bold text-[#1F242D] dark:text-slate-100">
                  {studentHighestScore} pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER ROW: 2 SPLIT CARDS (RECENT QUIZZES & RECENT QUIZ HISTORY) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Card Left: Recent Quizzes */}
        <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1F242D] dark:text-slate-100">
                  Available Quizzes
                </h3>
                {userEnrolledSubject && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    {userEnrolledSubject}
                  </span>
                )}
              </div>
              <button
                onClick={() => onNavigate("quizzes")}
                className="bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                View All ({pendingAvailableQuizzes.length})
              </button>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-6 text-[11px] font-semibold text-[#8C93A0] dark:text-slate-400 py-2 border-b border-[#F0F1F3] dark:border-slate-700 px-1">
              <span className="col-span-3">Quiz Title</span>
              <span className="col-span-1">Topic</span>
              <span className="col-span-1 text-center">Questions</span>
              <span className="col-span-1 text-right">Action</span>
            </div>
          </div>

          {pendingAvailableQuizzes.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#FCE8EB] dark:bg-slate-800 flex items-center justify-center mb-3 text-[#166534] dark:text-emerald-400">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#1F242D] dark:text-slate-100 mb-1">
                No quizzes available for {userEnrolledSubject}
              </h4>
              <p className="text-xs text-[#8C93A0] dark:text-slate-400 mb-4">
                You have completed all published quizzes for {userEnrolledSubject}, or no new quizzes have been assigned yet.
              </p>
              <button
                onClick={() => onNavigate("quizzes")}
                className="bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer"
              >
                Browse Quizzes Catalog
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60 my-2">
              {pendingAvailableQuizzes.slice(0, 4).map((quiz) => (
                <div
                  key={quiz.id}
                  className="grid grid-cols-6 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] dark:hover:bg-slate-800/50 rounded-lg transition"
                >
                  <div className="col-span-3 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded border ${
                          (quiz.designatedSubject || "MATH 101").includes("102")
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
                            : (quiz.designatedSubject || "MATH 101").includes("103")
                            ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800"
                            : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800"
                        }`}
                      >
                        {quiz.designatedSubject || "MATH 101"}
                      </span>
                      <p className="font-bold text-[#1F242D] dark:text-slate-100 truncate">
                        {quiz.title}
                      </p>
                    </div>
                    <p className="text-[11px] text-[#8C93A0] dark:text-slate-400">
                      {quiz.createdAt}
                    </p>
                  </div>
                  <div className="col-span-1 flex flex-col gap-1 items-start">
                    <span className="text-[10px] font-semibold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-2 py-0.5 rounded truncate max-w-full">
                      {quiz.topic}
                    </span>
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${
                      (quiz.period || "prelim") === "prelim"
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        : (quiz.period || "prelim") === "midterm"
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        : (quiz.period || "prelim") === "semi-final"
                        ? "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                        : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                    }`}>
                      {quiz.period === "semi-final" ? "Semi-Final" : quiz.period === "midterm" ? "Midterm" : quiz.period === "final" ? "Final" : "Prelim"}
                    </span>
                  </div>
                  <div className="col-span-1 text-center font-medium text-[#4B5565] dark:text-slate-300">
                    {quiz.questionsCount}
                  </div>
                  <div className="col-span-1 text-right">
                    {quiz.attemptsCount > 0 ? (
                      <button
                        onClick={() => {
                          const past = myAttempts.find(
                            (a) => a.quizId === quiz.id
                          );
                          if (past) onReviewAttempt(past);
                        }}
                        className="px-2 py-1 bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold rounded-lg transition cursor-pointer flex items-center justify-end gap-1 ml-auto"
                        title="Quiz completed (1 attempt allowed) - Click to review answers"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Done</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onStartQuiz(quiz)}
                        className="px-2.5 py-1 bg-[#166534] hover:bg-[#14532d] text-white text-[11px] font-bold rounded-lg transition cursor-pointer"
                      >
                        Start
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Right: Recent Quiz History */}
        <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1F242D] dark:text-slate-100">
                  Recent Quiz History
                </h3>
                {userEnrolledSubject && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    {userEnrolledSubject}
                  </span>
                )}
              </div>
              <button
                onClick={() => onNavigate("quizzes-history")}
                className="bg-white dark:bg-slate-800 border border-[#E0E2E6] dark:border-slate-700 hover:bg-[#F8F9FA] dark:hover:bg-slate-700 text-[#4B5565] dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                View All ({displayAttempts.length})
              </button>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-5 text-[11px] font-semibold text-[#8C93A0] dark:text-slate-400 py-2 border-b border-[#F0F1F3] dark:border-slate-700 px-1">
              <span className="col-span-2">Quiz Title</span>
              <span className="text-center">Score</span>
              <span>Taken At</span>
              <span className="text-right">Result</span>
            </div>
          </div>

          {displayAttempts.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#FCE8EB] dark:bg-slate-800 flex items-center justify-center mb-3 text-[#166534] dark:text-emerald-400">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#1F242D] dark:text-slate-100 mb-1">
                No quiz attempts yet
              </h4>
              <p className="text-xs text-[#8C93A0] dark:text-slate-400 mb-3">
                Start taking quizzes to see your score history here.
              </p>
              <button
                onClick={() => onNavigate("quizzes")}
                className="bg-[#166534] text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer"
              >
                Take a Quiz
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60 my-2">
              {displayAttempts.slice(0, 4).map((att) => (
                <div
                  key={att.id}
                  className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] dark:hover:bg-slate-800/50 rounded-lg transition"
                >
                  <div className="col-span-2 min-w-0 pr-2">
                    <p className="font-bold text-[#1F242D] dark:text-slate-100 truncate">
                      {att.quizTitle}
                    </p>
                    <p className="text-[11px] text-[#8C93A0] dark:text-slate-400">
                      {att.topic}
                    </p>
                  </div>
                  <div className="text-center font-bold text-[#166534] dark:text-emerald-400">
                    {att.score} / {att.totalQuestions} pts
                  </div>
                  <div className="text-[11px] text-[#6B7280] dark:text-slate-400">
                    {att.submittedAt}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        att.passed
                          ? "bg-green-100 text-green-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                          : "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                      }`}
                    >
                      {att.passed ? "Passed" : "Failed"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserOverviewView;
