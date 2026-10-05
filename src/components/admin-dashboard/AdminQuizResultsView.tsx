import React from "react";
import {
  BarChart3,
  RefreshCw,
  Plus,
  Search,
  GraduationCap,
  Eye,
  Trash2,
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
}) => {
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
          <div className="flex items-center gap-2">
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
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3 px-3">Student Name</th>
                      <th className="pb-3 px-3">Quiz Title</th>
                      <th className="pb-3 px-3">Topic</th>
                      <th className="pb-3 px-3">Score</th>
                      <th className="pb-3 px-3">Time Spent</th>
                      <th className="pb-3 px-3">Submitted At</th>
                      <th className="pb-3 px-3 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                    {filteredSubmissions.map((sub) => (
                      <tr
                        key={sub.id}
                        className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150 group"
                      >
                        <td className="py-3.5 px-3">
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
                        <td className="py-3.5 px-3 font-normal text-[#111827] dark:text-slate-200 text-xs max-w-xs truncate">
                          {sub.quizTitle}
                        </td>
                        <td className="py-3.5 px-3 text-xs">
                          <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2 py-0.5 rounded-md font-medium text-[11px]">
                            {sub.topic}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-bold text-xs text-[#166534] dark:text-emerald-400">
                          {sub.score} / {sub.totalQuestions}
                        </td>
                        <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                          {sub.timeSpentSeconds > 0
                            ? `${Math.floor(sub.timeSpentSeconds / 60)}m ${
                                sub.timeSpentSeconds % 60
                              }s`
                            : "—"}
                        </td>
                        <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                          {sub.submittedAt}
                        </td>
                        <td className="py-3.5 px-3 text-right">
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
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3 px-3">Quiz Title</th>
                      <th className="pb-3 px-3">Topic</th>
                      <th className="pb-3 px-3">Questions</th>
                      <th className="pb-3 px-3">Students Completed</th>
                      <th className="pb-3 px-3">Class Avg. Score</th>
                      <th className="pb-3 px-3">Published Date</th>
                      <th className="pb-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                    {quizzes.map((quiz) => (
                      <tr
                        key={quiz.id}
                        className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                      >
                        <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                          {quiz.title}
                        </td>
                        <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                          <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2 py-0.5 rounded-md font-medium">
                            {quiz.topic}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                          {quiz.questionsCount}
                        </td>
                        <td className="py-3.5 px-3 text-xs font-medium text-[#111827] dark:text-slate-100">
                          <span className="font-bold text-[#166534] dark:text-emerald-400">
                            {quiz.attempts}
                          </span>{" "}
                          student{quiz.attempts === 1 ? "" : "s"}
                        </td>
                        <td className="py-3.5 px-3">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-md ${
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
                        <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                          {quiz.createdAt}
                        </td>
                        <td className="py-3.5 px-3 text-right">
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
    </div>
  );
};
