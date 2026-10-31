import React from "react";
import { Sparkles, CheckCircle2, History, Lock } from "lucide-react";
import type { StudentQuizAttemptItem } from "../../types/dashboard";

interface UserQuizResultViewProps {
  submittedResult: StudentQuizAttemptItem;
  onViewHistory: () => void;
  onAllQuizzes: () => void;
  formatSeconds: (sec: number) => string;
}

export const UserQuizResultView: React.FC<UserQuizResultViewProps> = ({
  submittedResult,
  onViewHistory,
  onAllQuizzes,
  formatSeconds,
}) => {
  const isReviewAllowed = Boolean(submittedResult.allowReview);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 pb-24">
      {/* Celebratory Hero Banner */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#166534]/10 dark:bg-[#166534]/25 text-[#166534] dark:text-[#4ADE80] px-3 py-1 rounded-full text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quiz Complete</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-[#F1F5F9]">
            {submittedResult.quizTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1">
            Submitted on {submittedResult.submittedAt} • Topic:{" "}
            <span className="font-semibold text-gray-800 dark:text-[#CBD5E1]">
              {submittedResult.topic}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-2.5 mt-4">
            <span
              className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                submittedResult.passed
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800/40"
                  : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40"
              }`}
            >
              {submittedResult.passed
                ? "🎉 Passed Quiz"
                : "Needs More Practice"}
            </span>
            <span className="text-xs font-semibold bg-gray-100 dark:bg-[#1E2D45] text-gray-700 dark:text-[#CBD5E1] px-3 py-1 rounded-full">
              Time: {formatSeconds(submittedResult.timeSpentSeconds)}
            </span>
            {!isReviewAllowed && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800/40 whitespace-nowrap">
                <Lock className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                <span>Answers Locked by Admin</span>
              </span>
            )}
          </div>
        </div>

        {/* Circular Score Badge */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="w-32 h-32 rounded-full border-8 border-[#166534] dark:border-[#22C55E] bg-[#FCE8EB] dark:bg-[#166534]/20 flex flex-col items-center justify-center text-center shadow-inner">
            <span className="text-2xl sm:text-3xl font-black text-[#166534] dark:text-[#4ADE80] leading-none">
              {submittedResult.score} / {submittedResult.totalQuestions}
            </span>
            <span className="text-[11px] font-bold text-gray-600 dark:text-[#94A3B8] mt-1">
              Points Scored
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-2xl p-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-[#166534]/20 border border-emerald-200 dark:border-[#166534]/40 text-emerald-700 dark:text-[#4ADE80] text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#4ADE80]" />
            <span>Result Recorded (1 Attempt Allowed)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onViewHistory}
            className="px-4 py-2.5 bg-gray-100 dark:bg-[#1E2D45] hover:bg-gray-200 dark:hover:bg-[#263347] text-gray-800 dark:text-[#F1F5F9] text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
          >
            <History className="w-3.5 h-3.5" />
            <span>View History</span>
          </button>

          <button
            onClick={onAllQuizzes}
            className="px-4 py-2.5 border border-gray-200 dark:border-[#263347] hover:bg-gray-50 dark:hover:bg-[#1E2D45] text-gray-700 dark:text-[#CBD5E1] text-xs font-bold rounded-xl transition cursor-pointer"
          >
            All Quizzes
          </button>
        </div>
      </div>

      {/* Detailed Question Review Breakdown */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-[#1E2D45]">
          <div>
            <h3 className="text-base font-bold text-[#111827] dark:text-[#F1F5F9]">
              Question by Question Breakdown
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
              {submittedResult.answers.length} Questions Submitted
            </p>
          </div>
          {!isReviewAllowed && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
              <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Correct answers locked by instructor</span>
            </span>
          )}
        </div>

        {!isReviewAllowed && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200">
                Answer Key Locked by Admin
              </h4>
              <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-0.5 leading-relaxed">
                The administrator has not yet enabled answer review for this quiz. You can see your submitted answers and total score, but the correct answers and step-by-step solutions are hidden until the admin allows them in Quizzes History.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {submittedResult.answers.map((ans, idx) => (
            <div
              key={ans.questionId || idx}
              className={`p-5 rounded-2xl border transition ${
                ans.isCorrect
                  ? "border-green-200 dark:border-green-900/50 bg-green-50/40 dark:bg-green-950/20"
                  : "border-red-200 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                    ans.isCorrect
                      ? "bg-green-200 dark:bg-green-900/50 text-green-900 dark:text-green-300"
                      : "bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-300"
                  }`}
                >
                  Question {idx + 1} •{" "}
                  {ans.isCorrect ? "Correct (+1)" : "Incorrect (0)"}
                </span>
              </div>

              <h4 className="text-sm font-bold text-[#111827] dark:text-[#F1F5F9] mb-3">
                {ans.prompt}
              </h4>

              {ans.questionType && ans.questionType !== "multiple_choice" ? (
                <div className="space-y-2.5 text-xs pt-1">
                  <div className="p-3 bg-white dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-xl">
                    <span className="font-bold text-gray-500 dark:text-[#94A3B8] block text-[11px] uppercase tracking-wide">
                      Your Answer:
                    </span>
                    <p className="font-semibold text-gray-800 dark:text-[#F1F5F9] mt-0.5 whitespace-pre-line">
                      {ans.selected || "(No answer entered)"}
                    </p>
                  </div>

                  {!isReviewAllowed ? (
                    <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-xl flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300">
                      <Lock className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                      <span>Correct solution hidden until review is allowed by instructor.</span>
                    </div>
                  ) : (
                    ans.explanation && (
                      <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl text-emerald-800 dark:text-emerald-300">
                        <span className="font-bold">
                          Solution Explanation:{" "}
                        </span>
                        <span className="whitespace-pre-line">
                          {ans.explanation}
                        </span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(["A", "B", "C", "D"] as const).map((optKey) => {
                      const optionText =
                        ans.options?.[optKey] || `Option ${optKey}`;
                      const wasSelected = ans.selected === optKey;
                      const isCorrectChoice = ans.correct === optKey;

                      let bgClass =
                        "bg-white dark:bg-[#1E2D45] border-gray-200 dark:border-[#263347] text-gray-700 dark:text-[#CBD5E1]";
                      let badgeText = "";

                      if (isReviewAllowed) {
                        if (wasSelected && ans.isCorrect) {
                          bgClass =
                            "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-900 dark:text-green-300 font-bold ring-1 ring-green-400/50";
                          badgeText = "Your Choice ✓";
                        } else if (wasSelected && !ans.isCorrect) {
                          bgClass =
                            "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-300 font-bold";
                          badgeText = "Your Choice ✗";
                        } else if (!wasSelected && isCorrectChoice) {
                          bgClass =
                            "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 text-emerald-900 dark:text-emerald-300 font-bold border-dashed";
                          badgeText = "Correct Answer ✓";
                        }
                      } else {
                        if (wasSelected) {
                          bgClass = ans.isCorrect
                            ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-900 dark:text-green-300 font-bold"
                            : "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-300 font-bold";
                          badgeText = "Your Choice";
                        }
                      }

                      return (
                        <div
                          key={optKey}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${bgClass}`}
                        >
                          <span className="truncate pr-2">
                            <strong>{optKey}:</strong> {optionText}
                          </span>
                          {badgeText && (
                            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 shrink-0 ml-1">
                              {badgeText}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!isReviewAllowed && (
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-400 font-medium pt-1 px-1">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <span>Correct answer is locked until approved by the admin.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserQuizResultView;
