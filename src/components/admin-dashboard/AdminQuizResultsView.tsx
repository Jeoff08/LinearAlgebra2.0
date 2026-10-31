import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  RefreshCw,
  Plus,
  Search,
  GraduationCap,
  Eye,
  Trash2,
  Lock,
  CheckCircle2,
} from "lucide-react";
import type { QuizItem, StudentSubmissionItem } from "../../types/dashboard";

interface AdminQuizResultsViewProps {
  fetchQuizzesAndStats: () => void;
  isLoadingQuizzes: boolean;
  handleNavClick: (nav: any) => void;
  resultsViewMode: "students" | "quizzes";
  setResultsViewMode: (m: "students" | "quizzes") => void;
  studentSubmissions: StudentSubmissionItem[];
  quizzes: QuizItem[];
  resultsSearchQuery: string;
  setResultsSearchQuery: (q: string) => void;
  resultsTopicFilter: string;
  setResultsTopicFilter: (t: string) => void;
  filteredSubmissions: StudentSubmissionItem[];
  setSelectedSubmissionForReview: (s: StudentSubmissionItem | null) => void;
  handleDeleteQuiz: (quizId: string) => void;
  onToggleQuizReview?: (quizId: string, currentStatus?: boolean) => void;
  onBulkToggleQuizReview?: (allow: boolean) => void;
}

export const AdminQuizResultsView: React.FC<AdminQuizResultsViewProps> = ({
  fetchQuizzesAndStats,
  isLoadingQuizzes,
  handleNavClick,
  resultsViewMode,
  setResultsViewMode,
  studentSubmissions,
  quizzes,
  resultsSearchQuery,
  setResultsSearchQuery,
  resultsTopicFilter,
  setResultsTopicFilter,
  filteredSubmissions,
  setSelectedSubmissionForReview,
  handleDeleteQuiz,
  onToggleQuizReview,
  onBulkToggleQuizReview,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!showSuccessModal) return;
    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showSuccessModal]);

  const allQuizzesAllowed =
    quizzes.length > 0 && quizzes.every((q) => q.allowReview);

  const handleConfirmAllowAll = () => {
    setShowConfirmModal(false);
    if (onBulkToggleQuizReview) {
      onBulkToggleQuizReview(true);
    }
    setShowSuccessModal(true);
  };

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#166534]/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                Quiz Results & Student Performance
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={fetchQuizzesAndStats}
              className="px-3.5 py-2.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-transparent dark:border-slate-700"
              title="Refresh submissions"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  isLoadingQuizzes
                    ? "animate-spin text-[#166534] dark:text-emerald-400"
                    : ""
                }`}
              />
              <span>Refresh</span>
            </button>
            {onBulkToggleQuizReview && (
              <button
                type="button"
                onClick={() => {
                  if (allQuizzesAllowed) {
                    onBulkToggleQuizReview(false);
                  } else {
                    setShowConfirmModal(true);
                  }
                }}
                className={`px-3.5 py-2.5 text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer ${
                  allQuizzesAllowed
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-[#166534] hover:bg-[#14532d] text-white"
                }`}
                title={
                  allQuizzesAllowed
                    ? "Lock student review for all quizzes"
                    : "Allow all students to view correct answers and solutions for all quizzes"
                }
              >
                {allQuizzesAllowed ? (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Lock All Reviews</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Allow All to View</span>
                  </>
                )}
              </button>
            )}
            <button
              onClick={() => handleNavClick("add-quiz")}
              className="px-4 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* View Switcher & Controls */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-slate-800 rounded-xl border border-transparent dark:border-slate-700">
          <button
            onClick={() => setResultsViewMode("students")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              resultsViewMode === "students"
                ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            }`}
          >
            Student Results ({studentSubmissions.length})
          </button>
          <button
            onClick={() => setResultsViewMode("quizzes")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              resultsViewMode === "quizzes"
                ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            }`}
          >
            Quizzes Summary ({quizzes.length})
          </button>
        </div>

        {resultsViewMode === "students" && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search student name, email, or quiz..."
                value={resultsSearchQuery}
                onChange={(e) => setResultsSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 w-full sm:w-64"
              />
            </div>

            <select
              value={resultsTopicFilter}
              onChange={(e) => setResultsTopicFilter(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-medium text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 cursor-pointer"
            >
              <option value="all">All Topics</option>
              <option value="Linear Algebra">Linear Algebra</option>
              <option value="Calculus 1">Calculus 1</option>
              <option value="Calculus 2">Calculus 2</option>
            </select>
          </div>
        )}
      </div>

      {/* TAB 1: STUDENT RESULTS TABLE */}
      {resultsViewMode === "students" && (
        <>
          {filteredSubmissions.length === 0 ? (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                <GraduationCap className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                {studentSubmissions.length === 0
                  ? "No Student Quiz Results Recorded Yet"
                  : "No Matching Submissions Found"}
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                {studentSubmissions.length === 0
                  ? "When students take and submit a quiz, their names, scores, and submission details will appear here automatically."
                  : "Try clearing your search query or topic filter."}
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3.5 px-4 min-w-[200px]">Student Name</th>
                      <th className="pb-3.5 px-4 min-w-[240px]">Quiz Title</th>
                      <th className="pb-3.5 px-4 whitespace-nowrap">Topic</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Score</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Time Spent</th>
                      <th className="pb-3.5 px-4 whitespace-nowrap">Submitted At</th>
                      <th className="pb-3.5 px-4 text-right whitespace-nowrap">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                    {filteredSubmissions.map((sub) => (
                      <tr
                        key={sub.id}
                        className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150 group"
                      >
                        <td className="py-4 px-4 align-middle">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold uppercase shrink-0 shadow-xs">
                              {sub.studentName.slice(0, 2)}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-[#111827] dark:text-slate-100 text-sm truncate">
                                {sub.studentName}
                              </p>
                              <p className="text-[11px] text-[#6B7280] dark:text-slate-400 truncate">
                                {sub.studentEmail || "No email"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-normal text-[#111827] dark:text-slate-200 text-xs align-middle">
                          <div className="flex flex-col items-start gap-1">
                            <span className="font-medium line-clamp-2">{sub.quizTitle}</span>
                            {sub.allowReview ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0 whitespace-nowrap inline-flex items-center">
                                Review Allowed
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 shrink-0 whitespace-nowrap inline-flex items-center">
                                Answers Locked
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-xs align-middle whitespace-nowrap">
                          <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2.5 py-1 rounded-md font-medium text-[11px] inline-block">
                            {sub.topic}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-xs text-[#166534] dark:text-emerald-400 align-middle text-center whitespace-nowrap">
                          {sub.score} / {sub.totalQuestions}
                        </td>
                        <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle text-center whitespace-nowrap">
                          {sub.timeSpentSeconds > 0
                            ? `${Math.floor(sub.timeSpentSeconds / 60)}m ${
                                sub.timeSpentSeconds % 60
                              }s`
                            : "—"}
                        </td>
                        <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle whitespace-nowrap">
                          {sub.submittedAt}
                        </td>
                        <td className="py-4 px-4 text-right align-middle whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => setSelectedSubmissionForReview(sub)}
                            className="px-2.5 py-1.5 bg-gray-100 dark:bg-slate-800/80 hover:bg-[#166534] dark:hover:bg-emerald-950/60 hover:text-white dark:hover:text-emerald-300 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 hover:border-emerald-600/50 text-xs font-semibold rounded-xl transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                            title="Inspect student quiz responses"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Review</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* TAB 2: QUIZZES OVERVIEW TABLE */}
      {resultsViewMode === "quizzes" && (
        <>
          {quizzes.length === 0 ? (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                <BarChart3 className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                No Quizzes Available
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                Create and publish a quiz to start tracking student scores and
                analytics.
              </p>
              <button
                onClick={() => handleNavClick("add-quiz")}
                className="mt-4 px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Add Your First Quiz
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[1080px]">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3.5 px-4 min-w-[280px]">Quiz Title</th>
                      <th className="pb-3.5 px-4 whitespace-nowrap">Topic</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Questions</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Students Completed</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Class Avg. Score</th>
                      <th className="pb-3.5 px-4 whitespace-nowrap">Published Date</th>
                      <th className="pb-3.5 px-4 text-center whitespace-nowrap">Student Review</th>
                      <th className="pb-3.5 px-4 text-right whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                    {quizzes.map((quiz) => (
                      <tr
                        key={quiz.id}
                        className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                      >
                        <td className="py-4 px-4 font-semibold text-[#111827] dark:text-slate-100 align-middle">
                          <span className="line-clamp-2">{quiz.title}</span>
                        </td>
                        <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle whitespace-nowrap">
                          <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2.5 py-1 rounded-md font-medium inline-block">
                            {quiz.topic}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs font-medium text-[#4B5563] dark:text-slate-300 align-middle text-center whitespace-nowrap">
                          {quiz.questionsCount}
                        </td>
                        <td className="py-4 px-4 text-xs font-medium text-[#111827] dark:text-slate-100 align-middle text-center whitespace-nowrap">
                          <span className="font-bold text-[#166534] dark:text-emerald-400">
                            {quiz.attempts}
                          </span>{" "}
                          student{quiz.attempts === 1 ? "" : "s"}
                        </td>
                        <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-md inline-block ${
                              quiz.averageScore >= 75
                                ? "bg-green-100 dark:bg-emerald-950/60 text-green-700 dark:text-emerald-300 border border-transparent dark:border-emerald-800"
                                : quiz.averageScore >= 50
                                ? "bg-yellow-100 dark:bg-amber-950/60 text-yellow-800 dark:text-amber-300 border border-transparent dark:border-amber-800"
                                : quiz.averageScore > 0
                                ? "bg-green-100 dark:bg-emerald-950/60 text-green-700 dark:text-emerald-300 border border-transparent dark:border-emerald-800"
                                : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-transparent dark:border-slate-700"
                            }`}
                          >
                            {quiz.attempts > 0
                              ? `${quiz.averageScore} pts`
                              : "No submissions"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle whitespace-nowrap">
                          {quiz.createdAt}
                        </td>
                        <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => onToggleQuizReview?.(quiz.id, quiz.allowReview)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                              quiz.allowReview
                                ? "bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                                : "bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700"
                            }`}
                            title={
                              quiz.allowReview
                                ? "Review is ALLOWED: Students can view the correct answers. Click to lock."
                                : "Review is LOCKED: Students cannot view the correct answers yet. Click to allow."
                            }
                          >
                            {quiz.allowReview ? (
                              <>
                                <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span>Allowed</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                <span>Locked</span>
                              </>
                            )}
                          </button>
                        </td>
                        <td className="py-4 px-4 text-right align-middle whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => handleDeleteQuiz(quiz.id)}
                            className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-500 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-transparent dark:border-slate-700/60 transition cursor-pointer"
                            title="Delete Quiz"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* Confirmation Modal for Allow All to View */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full max-w-md bg-white dark:bg-[#161F30] rounded-[28px] p-6 sm:p-7 shadow-2xl border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-4 shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-[#166534] dark:text-emerald-400" />
              </div>

              <h3 className="text-xl font-black text-[#1F242D] dark:text-slate-100 tracking-tight">
                Allow All to View?
              </h3>

              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 mb-6 leading-relaxed max-w-xs">
                Are you sure you want to allow all students to view correct answers, steps, and solutions for all quizzes?
              </p>

              <div className="flex items-center gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmAllowAll}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] text-white text-xs font-bold shadow-md shadow-[#166534]/25 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Yes, Allow All
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Animated Checkmark Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full max-w-sm bg-white dark:bg-[#161F30] rounded-[28px] p-7 shadow-2xl border border-emerald-100 dark:border-emerald-800/40 flex flex-col items-center text-center relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                  delay: 0.1,
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-green-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4 z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.25, 1] }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-black text-[#1F242D] dark:text-slate-100 tracking-tight z-10"
              >
                Reviews Allowed!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs text-gray-500 dark:text-slate-400 mt-1 mb-5 z-10 leading-relaxed"
              >
                All students can now view the quiz answers and step-by-step solutions.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 px-4 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold shadow-md shadow-[#166534]/25 transition cursor-pointer z-10"
              >
                Done
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

