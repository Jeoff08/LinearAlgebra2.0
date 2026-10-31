import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Eye } from "lucide-react";
import type { QuizItem, StudentSubmissionItem } from "../../types/dashboard";

interface AdminReviewSubmissionModalProps {
  selectedSubmissionForReview: StudentSubmissionItem | null;
  setSelectedSubmissionForReview: (sub: StudentSubmissionItem | null) => void;
  quizzes?: QuizItem[];
  onToggleQuizReview?: (quizId: string, currentStatus?: boolean) => void;
}

export const AdminReviewSubmissionModal: React.FC<
  AdminReviewSubmissionModalProps
> = ({
  selectedSubmissionForReview,
  setSelectedSubmissionForReview,
  quizzes,
  onToggleQuizReview,
}) => {
  if (!selectedSubmissionForReview) return null;

  const targetQuiz = quizzes?.find(
    (q) => q.id === selectedSubmissionForReview.quizId
  );
  const isReviewAllowed =
    targetQuiz?.allowReview !== undefined
      ? Boolean(targetQuiz.allowReview)
      : Boolean(selectedSubmissionForReview.allowReview);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-3xl bg-white dark:bg-[#161F30] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] dark:border-slate-700 max-h-[85vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-700 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center text-sm font-bold uppercase shrink-0">
                {selectedSubmissionForReview.studentName.slice(0, 2)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-slate-100">
                  {selectedSubmissionForReview.studentName}'s Submission
                </h3>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  {selectedSubmissionForReview.studentEmail} • Quiz:{" "}
                  <span className="font-semibold text-gray-700 dark:text-slate-300">
                    {selectedSubmissionForReview.quizTitle}
                  </span>{" "}
                  ({selectedSubmissionForReview.topic})
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSubmissionForReview(null)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Submission Overview Metrics & Review Permission Bar */}
          <div className="grid grid-cols-3 gap-3 my-4 shrink-0">
            <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">
                Score
              </p>
              <p className="text-base font-extrabold text-[#111827] dark:text-slate-100">
                {selectedSubmissionForReview.score} /{" "}
                {selectedSubmissionForReview.totalQuestions}
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">
                Status
              </p>
              <p
                className={`text-sm font-bold ${
                  selectedSubmissionForReview.passed
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-green-700 dark:text-amber-400"
                }`}
              >
                {selectedSubmissionForReview.passed ? "Passed" : "Needs Review"}
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
              <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">
                Submitted
              </p>
              <p className="text-xs font-semibold text-gray-700 dark:text-slate-300 truncate">
                {selectedSubmissionForReview.submittedAt}
              </p>
            </div>
          </div>

          {/* Quick Review Permission Control for Admin */}
          <div className="mb-4 p-3 rounded-2xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-700 dark:text-slate-200">
                Student Review Permission:
              </span>
              {isReviewAllowed ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  <Eye className="w-3 h-3" />
                  <span>Correct Answers Visible to Students</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  <span>Correct Answers Hidden from Students</span>
                </span>
              )}
            </div>

            {onToggleQuizReview && (
              <button
                type="button"
                onClick={() =>
                  onToggleQuizReview(
                    selectedSubmissionForReview.quizId,
                    isReviewAllowed
                  )
                }
                className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs ${
                  isReviewAllowed
                    ? "bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300"
                    : "bg-[#166534] hover:bg-[#14532d] text-white"
                }`}
              >
                {isReviewAllowed ? "Lock Answers" : "Allow Review"}
              </button>
            )}
          </div>

          {/* Answers Breakdown */}
          <div className="overflow-y-auto flex-1 pr-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
              Question-by-Question Response Breakdown
            </h4>

            {!selectedSubmissionForReview.answers ||
            selectedSubmissionForReview.answers.length === 0 ? (
              <p className="text-xs text-gray-400 dark:text-slate-500 italic py-4 text-center">
                Detailed answer history is not available for this legacy
                submission.
              </p>
            ) : (
              selectedSubmissionForReview.answers.map(
                (ans: any, idx: number) => {
                  const isRight = ans.isCorrect;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border ${
                        isRight
                          ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-900/20"
                          : "border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-900/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-bold text-xs text-[#111827] dark:text-slate-100">
                          <span className="text-gray-400 dark:text-slate-500 mr-1.5">
                            Q{idx + 1}.
                          </span>
                          {ans.prompt}
                        </p>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded shrink-0 ${
                            isRight
                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-400"
                              : "bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-400"
                          }`}
                        >
                          {isRight ? "Correct" : "Incorrect"}
                        </span>
                      </div>

                      {ans.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                          {(["A", "B", "C", "D"] as const).map((choice) => {
                            const text = ans.options[choice];
                            if (!text) return null;
                            const isStudentPick = ans.selected === choice;
                            const isCorrectPick = ans.correct === choice;

                            let choiceClass =
                              "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300";
                            if (isCorrectPick) {
                              choiceClass =
                                "bg-emerald-100 dark:bg-emerald-900/40 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-300 font-bold";
                            } else if (isStudentPick && !isRight) {
                              choiceClass =
                                "bg-rose-100 dark:bg-rose-900/40 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-300 font-bold";
                            }

                            return (
                              <div
                                key={choice}
                                className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${choiceClass}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-mono font-bold">
                                    {choice}.
                                  </span>
                                  <span>{text}</span>
                                </div>
                                <div className="flex items-center gap-1 shrink-0 text-[10px] font-bold">
                                  {isStudentPick && (
                                    <span className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                                      Student Pick
                                    </span>
                                  )}
                                  {isCorrectPick && (
                                    <span className="text-emerald-700 dark:text-emerald-400">
                                      ✓ Correct
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
              )
            )}
          </div>

          {/* Modal Footer */}
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700 flex items-center justify-end shrink-0">
            <button
              type="button"
              onClick={() => setSelectedSubmissionForReview(null)}
              className="px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-100 text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
