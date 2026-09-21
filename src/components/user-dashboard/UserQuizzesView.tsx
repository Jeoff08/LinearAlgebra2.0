import React, { useMemo } from "react";
import {
  HelpCircle,
  Search,
  Loader2,
  FileText,
  Trophy,
  CheckCircle2,
  Eye,
  Play,
} from "lucide-react";
import type {
  StudentAvailableQuiz,
  StudentQuizAttemptItem,
} from "../../types/dashboard";

interface UserQuizzesViewProps {
  availableQuizzes: StudentAvailableQuiz[];
  myAttempts: StudentQuizAttemptItem[];
  isLoadingQuizzes: boolean;
  quizFilterTopic: string;
  setQuizFilterTopic: (t: string) => void;
  quizSearchTerm: string;
  setQuizSearchTerm: (s: string) => void;
  onStartQuiz: (quiz: StudentAvailableQuiz) => void;
  onReviewAttempt: (attempt: StudentQuizAttemptItem) => void;
}

export const UserQuizzesView: React.FC<UserQuizzesViewProps> = ({
  availableQuizzes,
  myAttempts,
  isLoadingQuizzes,
  quizFilterTopic,
  setQuizFilterTopic,
  quizSearchTerm,
  setQuizSearchTerm,
  onStartQuiz,
  onReviewAttempt,
}) => {
  const filteredAvailableQuizzes = useMemo(() => {
    return availableQuizzes.filter((quiz) => {
      const matchesTopic =
        quizFilterTopic === "all" ||
        quiz.topic.toLowerCase() === quizFilterTopic.toLowerCase();
      const matchesSearch =
        quiz.title.toLowerCase().includes(quizSearchTerm.toLowerCase()) ||
        quiz.topic.toLowerCase().includes(quizSearchTerm.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [availableQuizzes, quizFilterTopic, quizSearchTerm]);

  return (
    <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-[#F1F5F9] tracking-tight">
                Practice Quizzes Catalog
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1">
                Test your understanding of Linear Algebra, Calculus, and more
                with interactive quizzes created by instructors.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center rounded-full bg-[#166534]/10 border border-[#166534]/20 px-3.5 py-1 text-xs font-bold text-[#166534] dark:text-emerald-400 self-start sm:self-center">
            {availableQuizzes.length} Available Quiz
            {availableQuizzes.length === 1 ? "" : "zes"}
          </span>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100 dark:border-[#1E2D45]">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              ["all", "All Topics"],
              ["Linear Algebra", "Linear Algebra"],
              ["Calculus 1", "Calculus 1"],
              ["Calculus 2", "Calculus 2"],
              ["Differential Equations", "Diff. Equations"],
            ].map(([topicKey, label]) => (
              <button
                key={topicKey}
                onClick={() => setQuizFilterTopic(topicKey)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  quizFilterTopic === topicKey
                    ? "bg-[#166534] text-white shadow-xs"
                    : "bg-gray-100 dark:bg-[#1E2D45] text-gray-700 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#263347]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={quizSearchTerm}
              onChange={(e) => setQuizSearchTerm(e.target.value)}
              placeholder="Search quizzes..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F9FAFB] dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-xl text-xs text-[#111827] dark:text-[#E2E8F0] placeholder:text-gray-400 dark:placeholder:text-[#4B6080] focus:outline-none focus:border-[#166534] dark:focus:border-[#22C55E]"
            />
          </div>
        </div>
      </div>

      {/* Quizzes List Cards */}
      {isLoadingQuizzes ? (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
          <p className="text-sm font-semibold text-gray-600 dark:text-slate-400">
            Loading available quizzes...
          </p>
        </div>
      ) : filteredAvailableQuizzes.length === 0 ? (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] dark:bg-slate-800 border border-[#FFE4E6] dark:border-slate-700 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-4">
            <HelpCircle className="w-8 h-8 stroke-[1.8]" />
          </div>
          <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
            No Quizzes Found
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1 max-w-sm">
            {quizSearchTerm || quizFilterTopic !== "all"
              ? "No quizzes match your search filter. Try clearing the filter."
              : "There are currently no quizzes published by the admin. Check back soon!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredAvailableQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] hover:border-[#166534]/40 dark:hover:border-[#22C55E]/40 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#166534] dark:text-[#4ADE80] bg-[#FCE8EB] dark:bg-[#166534]/20 px-2.5 py-0.5 rounded-full">
                    {quiz.topic}
                  </span>
                  <span className="text-[11px] text-gray-400 dark:text-[#4B6080] font-medium">
                    {quiz.createdAt}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#111827] dark:text-[#F1F5F9] group-hover:text-[#166534] dark:group-hover:text-[#4ADE80] transition line-clamp-2">
                  {quiz.title}
                </h3>

                <div className="flex items-center gap-3 mt-4 text-xs text-gray-600 dark:text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-gray-400" />
                    <span>{quiz.questionsCount} Questions</span>
                  </div>
                  {quiz.bestScore !== undefined && (
                    <div className="flex items-center gap-1 font-bold text-green-700 dark:text-emerald-400">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Best: {quiz.bestScore}%</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#1E2D45] flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-[#4B6080] font-medium">
                  {quiz.attemptsCount > 0 ? (
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </span>
                  ) : (
                    "1 Attempt Allowed"
                  )}
                </span>

                {quiz.attemptsCount > 0 ? (
                  <button
                    onClick={() => {
                      const past = myAttempts.find((a) => a.quizId === quiz.id);
                      if (past) onReviewAttempt(past);
                    }}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Result</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onStartQuiz(quiz)}
                    className="px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer group-hover:scale-102"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Start Quiz</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserQuizzesView;
