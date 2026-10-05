import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ChevronRight,
  BookOpen,
  ChevronDown,
  TrendingUp,
  Trophy,
  HelpCircle,
  Calculator,
  ArrowRight,
} from "lucide-react";
import type { QuizItem, StudentSubmissionItem } from "../../types/dashboard";

interface AdminStudentOverviewViewProps {
  studentOverviewGreeting: string;
  studentOverviewTimeRange: "Today" | "This Week" | "This Month" | "All Time";
  setStudentOverviewTimeRange: (
    t: "Today" | "This Week" | "This Month" | "All Time"
  ) => void;
  isStudentTimeDropdownOpen: boolean;
  setIsStudentTimeDropdownOpen: (open: boolean) => void;
  studentOverviewAvg: number;
  quizzes: QuizItem[];
  studentSubmissions: StudentSubmissionItem[];
  handleNavClick: (nav: any) => void;
  handleStartStudentPreviewQuiz: (quiz: QuizItem) => void;
}

export const AdminStudentOverviewView: React.FC<
  AdminStudentOverviewViewProps
> = ({
  studentOverviewGreeting,
  studentOverviewTimeRange,
  setStudentOverviewTimeRange,
  isStudentTimeDropdownOpen,
  setIsStudentTimeDropdownOpen,
  studentOverviewAvg,
  quizzes,
  studentSubmissions,
  handleNavClick,
  handleStartStudentPreviewQuiz,
}) => {
  return (
    <motion.div
      key="student-overview-view"
      initial={{ opacity: 0, y: 15, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.99 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-16"
    >
      {/* 1. TOP NOTICE / PREVIEW BANNER */}
      <div className="bg-gradient-to-r from-[#166534]/10 via-[#15803d]/5 to-white border border-[#166534]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white shadow-md shadow-[#166534]/25 shrink-0 border border-white/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-[#1F242D]">
                Student Dashboard Overview
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#166534]/15 text-[#166534] border border-[#166534]/25">
                Learner View Mode
              </span>
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Simulating default student portal experience &bull; No specific
              student account is linked
            </p>
          </div>
        </div>
      </div>

      {/* 2. TOP ROW: HERO WELCOME BANNER (LEFT) & YOUR PROGRESS CARD (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Hero Banner (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#ECEFF3] rounded-[26px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Left Column Text & Buttons */}
          <div className="flex flex-col items-start z-10 max-w-sm">
            <span className="text-base sm:text-lg font-bold text-[#1F242D]">
              {studentOverviewGreeting},
            </span>
            <h1 className="text-3xl sm:text-[2.35rem] font-extrabold text-[#166534] tracking-tight leading-tight mt-0.5 mb-5 flex items-center gap-2">
              Student Learner!
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const quizSec = document.getElementById(
                    "student-overview-quizzes"
                  );
                  quizSec?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] active:scale-98 text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl shadow-[0_6px_16px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border border-white/10"
              >
                <span>Start Practicing</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNavClick("topics")}
                className="bg-white hover:bg-[#F8F9FA] active:scale-98 text-[#1F242D] border border-[#E0E2E6] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#166534]" />
                <span>Browse Topics</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right "Your Progress" Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#ECEFF3] rounded-[24px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          {/* Card Header + Time Dropdown */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-[#1F242D]">
              Your Progress
            </h2>

            <div className="relative">
              <button
                onClick={() =>
                  setIsStudentTimeDropdownOpen(!isStudentTimeDropdownOpen)
                }
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E0E2E6] bg-white hover:bg-[#F8F9FA] text-xs font-semibold text-[#4B5565] transition cursor-pointer"
              >
                <span>{studentOverviewTimeRange}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0]" />
              </button>

              <AnimatePresence>
                {isStudentTimeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-full mt-1.5 w-32 bg-white rounded-xl border border-[#EAEBED] shadow-lg p-1 z-30 flex flex-col"
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
                          setStudentOverviewTimeRange(opt);
                          setIsStudentTimeDropdownOpen(false);
                        }}
                        className={`px-2.5 py-1.5 text-xs text-left rounded-lg font-medium transition cursor-pointer ${
                          studentOverviewTimeRange === opt
                            ? "bg-[#166534] text-white font-bold"
                            : "text-gray-700 hover:bg-gray-100"
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
                  className="stroke-[#EAEBED]"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-[#166534] transition-all duration-1000"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 - (251.2 * studentOverviewAvg) / 100
                  }
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-[#1F242D] leading-none">
                  {studentOverviewAvg} pts
                </span>
                <span className="text-[10px] font-semibold text-[#8C93A0] mt-1">
                  Overall Progress
                </span>
              </div>
            </div>

            {/* Legend Stat Items */}
            <div className="flex flex-col gap-2 flex-1 pl-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]" />
                  <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                    Quizzes Taken
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] text-xs">0</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#F59E0B]" />
                  <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                    Average Score
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] text-xs">0 pts</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#166534]" />
                  <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                    Highest Score
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] text-xs">0%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#1F242D]" />
                  <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                    Time Spent
                  </span>
                </div>
                <span className="font-bold text-[#1F242D] text-xs">0m 0s</span>
              </div>
            </div>
          </div>

          {/* Bottom Dual Mini Stat Boxes */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#F0F1F3]">
            <div className="bg-[#F8F9FA] border border-[#ECEFF3] rounded-[16px] p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium text-[#8C93A0]">
                  Average Score
                </span>
                <span className="text-base font-bold text-[#1F242D]">
                  0 pts
                </span>
              </div>
            </div>

            <div className="bg-[#F8F9FA] border border-[#ECEFF3] rounded-[16px] p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium text-[#8C93A0]">
                  Highest Score
                </span>
                <span className="text-base font-bold text-[#1F242D]">
                  0 pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LOWER ROW: 2 SPLIT CARDS (AVAILABLE QUIZZES & RECENT QUIZ HISTORY) */}
      <div
        id="student-overview-quizzes"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
      >
        {/* Card Left: Available Quizzes */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                  Available Quizzes
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
                  {quizzes.length}
                </span>
              </div>
              <button
                onClick={() => handleNavClick("history-quizzes")}
                className="bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                View All ({quizzes.length})
              </button>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-6 text-[11px] font-semibold text-[#8C93A0] py-2 border-b border-[#F0F1F3] px-1">
              <span className="col-span-3">Quiz Title</span>
              <span className="col-span-1">Topic</span>
              <span className="col-span-1 text-center">Questions</span>
              <span className="col-span-1 text-right">Action</span>
            </div>
          </div>

          {quizzes.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#FCE8EB] flex items-center justify-center mb-3 text-[#166534]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#1F242D] mb-1">
                No quizzes added yet
              </h4>
              <p className="text-xs text-[#8C93A0] mb-4">
                Quizzes published in Add Quiz will appear here for students.
              </p>
              <button
                onClick={() => handleNavClick("add-quiz")}
                className="bg-[#166534] text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#14532d] transition"
              >
                Create a Quiz
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#F3F4F6] my-2">
              {quizzes.slice(0, 4).map((quiz) => (
                <div
                  key={quiz.id}
                  className="grid grid-cols-6 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                >
                  <div className="col-span-3 min-w-0 pr-2">
                    <p className="font-bold text-[#1F242D] truncate">
                      {quiz.title}
                    </p>
                    <p className="text-[11px] text-[#8C93A0]">
                      {quiz.createdAt}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded truncate inline-block max-w-full">
                      {quiz.topic}
                    </span>
                  </div>
                  <div className="col-span-1 text-center font-medium text-[#4B5565]">
                    {quiz.questionsCount || quiz.questions?.length || 5}
                  </div>
                  <div className="col-span-1 text-right">
                    <button
                      onClick={() => handleStartStudentPreviewQuiz(quiz)}
                      className="px-2.5 py-1 bg-[#166534] hover:bg-[#14532d] text-white text-[11px] font-bold rounded-lg transition cursor-pointer active:scale-95 shadow-xs"
                      title="Preview quiz as student"
                    >
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Right: Recent Quiz History */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                Recent Quiz History
              </h3>
              <button
                onClick={() => handleNavClick("quiz-results")}
                className="bg-white border border-[#E0E2E6] hover:bg-[#F8F9FA] text-[#4B5565] text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                View All ({studentSubmissions.length})
              </button>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-5 text-[11px] font-semibold text-[#8C93A0] py-2 border-b border-[#F0F1F3] px-1">
              <span className="col-span-2">Quiz Title</span>
              <span className="text-center">Score</span>
              <span>Taken At</span>
              <span className="text-right">Result</span>
            </div>
          </div>

          {studentSubmissions.length === 0 ? (
            <div className="divide-y divide-[#F3F4F6] my-2">
              {[
                {
                  id: "sample-1",
                  title: "Matrix Operations & Inversion",
                  topic: "Linear Algebra",
                  score: "5 / 5",
                  date: "Today, 10:30 AM",
                  passed: true,
                },
                {
                  id: "sample-2",
                  title: "Derivatives & Chain Rule",
                  topic: "Calculus 1",
                  score: "4 / 5",
                  date: "Yesterday",
                  passed: true,
                },
                {
                  id: "sample-3",
                  title: "Eigenvalues & Eigenvectors",
                  topic: "Linear Algebra",
                  score: "3 / 5",
                  date: "Sep 12, 2026",
                  passed: true,
                },
                {
                  id: "sample-4",
                  title: "Fundamental Theorem of Calc",
                  topic: "Calculus 2",
                  score: "2 / 5",
                  date: "Sep 10, 2026",
                  passed: false,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                >
                  <div className="col-span-2 min-w-0 pr-2">
                    <p className="font-bold text-[#1F242D] truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#8C93A0]">{item.topic}</p>
                  </div>
                  <div className="text-center font-bold text-[#166534]">
                    {item.score} pts
                  </div>
                  <div className="text-[11px] text-[#6B7280] truncate">
                    {item.date}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        item.passed
                          ? "bg-green-100 text-green-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.passed ? "Passed" : "Failed"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-[#F3F4F6] my-2">
              {studentSubmissions.slice(0, 4).map((sub) => (
                <div
                  key={sub.id}
                  className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                >
                  <div className="col-span-2 min-w-0 pr-2">
                    <p className="font-bold text-[#1F242D] truncate">
                      {sub.quizTitle}
                    </p>
                    <p className="text-[11px] text-[#8C93A0]">{sub.topic}</p>
                  </div>
                  <div className="text-center font-bold text-[#166534]">
                    {sub.score} / {sub.totalQuestions} pts
                  </div>
                  <div className="text-[11px] text-[#6B7280] truncate">
                    {sub.submittedAt}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        sub.passed
                          ? "bg-green-100 text-green-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {sub.passed ? "Passed" : "Failed"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 4. STUDENT QUICK ACCESS SOLVERS & TOPICS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Student Solvers Hub Card */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#166534]/10 flex items-center justify-center text-[#166534]">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                  Student Math Solvers Hub
                </h3>
              </div>
              <button
                onClick={() => handleNavClick("calculators")}
                className="text-xs font-semibold text-[#166534] hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>All 52+ Solvers</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-[#6B7280] mb-4">
              Students have full access to interactive solvers with step-by-step
              matrix operations and calculus derivatives.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "Matrix Operations",
                  badge: "Linear Algebra",
                  desc: "Addition, multiplication, scalar scaling",
                },
                {
                  title: "Determinant Calculator",
                  badge: "Linear Algebra",
                  desc: "Gauss-Jordan & cofactor expansion",
                },
                {
                  title: "Derivative Solver",
                  badge: "Calculus 1",
                  desc: "Power rule, product rule, chain rule",
                },
                {
                  title: "Integral Solver",
                  badge: "Calculus 2",
                  desc: "Definite & indefinite integration",
                },
              ].map((calc, i) => (
                <div
                  key={i}
                  onClick={() => handleNavClick("calculators")}
                  className="p-3.5 rounded-xl border border-[#ECEFF3] hover:border-[#166534]/40 hover:bg-[#FDF9FA] transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 group-hover:bg-[#166534]/10 group-hover:text-[#166534]">
                      {calc.badge}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#166534] transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#1F242D] group-hover:text-[#166534]">
                    {calc.title}
                  </h4>
                  <p className="text-[11px] text-[#8C93A0] mt-0.5 line-clamp-1">
                    {calc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum Topics Card */}
        <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#166534]/10 flex items-center justify-center text-[#166534]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                  Curriculum Topics Hub
                </h3>
              </div>
              <button
                onClick={() => handleNavClick("topics")}
                className="text-xs font-semibold text-[#166534] hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>Explore Topics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-[#6B7280] mb-4">
              Course syllabus and comprehensive step-by-step guides across three
              math disciplines.
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                {
                  title: "Linear Algebra Track",
                  count: "23 Solvers • 14 Chapters",
                  desc: "Systems of Linear Equations, Matrix Inverses, Eigenvalues & Eigenvectors",
                },
                {
                  title: "Calculus 1 Track",
                  count: "17 Solvers • 12 Chapters",
                  desc: "Limits, Differentiation, Optimization, Curve Sketching",
                },
                {
                  title: "Calculus 2 Track",
                  count: "12 Solvers • 10 Chapters",
                  desc: "Integration Techniques, Volumes of Revolution, Infinite Series",
                },
              ].map((track, i) => (
                <div
                  key={i}
                  onClick={() => handleNavClick("topics")}
                  className="p-3 rounded-xl border border-[#ECEFF3] hover:border-[#166534]/40 hover:bg-[#FDF9FA] transition cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-[#1F242D] group-hover:text-[#166534]">
                        {track.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-[#8C93A0]">
                        ({track.count})
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">
                      {track.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#166534] shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
