import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, CheckCircle2 } from "lucide-react";
import type { StudentQuizAttemptItem } from "../../types/dashboard";

interface UserReviewAttemptModalProps {
  reviewingAttempt: StudentQuizAttemptItem | null;
  onClose: () => void;
}

export const UserReviewAttemptModal: React.FC<UserReviewAttemptModalProps> = ({
  reviewingAttempt,
  onClose,
}) => {
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});

  const isReviewAllowed = Boolean(reviewingAttempt?.allowReview);

  return (
    <AnimatePresence>
      {reviewingAttempt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/50 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="w-full max-w-3xl bg-white dark:bg-[#161F30] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl border border-[#EAEBED] dark:border-[#1E2D45] max-h-[92vh] sm:max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="pb-3 sm:pb-4 border-b border-gray-100 dark:border-[#1E2D45] shrink-0">
              <div className="flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#F1F5F9] truncate">
                    {reviewingAttempt.quizTitle}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5">
                    Score: {reviewingAttempt.score} /{" "}
                    {reviewingAttempt.totalQuestions} pts • Submitted:{" "}
                    {reviewingAttempt.submittedAt}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-gray-400 dark:text-[#94A3B8] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1E2D45] cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Review Permission Status Banner */}
              {!isReviewAllowed ? (
                <div className="mt-3 p-3 sm:p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                      <span>Correct Answers Hidden</span>
                      <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                        Admin Approval Required
                      </span>
                    </p>
                    <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-0.5 leading-relaxed">
                      The admin has not yet released the review answer key for this quiz. You can review your submitted choices and score, but correct answers and detailed step-by-step solutions will remain locked until the instructor allows them.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-3 p-2.5 sm:p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    Review Released: Full correct answers and solution explanations are unlocked by the admin.
                  </p>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="overflow-y-auto py-3 sm:py-4 flex-1 space-y-3 sm:space-y-4">
              {reviewingAttempt.answers.length === 0 ? (
                <p className="text-xs text-gray-500 dark:text-[#94A3B8] text-center py-6">
                  No question breakdown recorded for this attempt.
                </p>
              ) : (
                reviewingAttempt.answers.map((ans, idx) => (
                  <div
                    key={ans.questionId || idx}
                    className={`p-3.5 sm:p-4 rounded-2xl border ${
                      ans.isCorrect
                        ? "border-green-200 dark:border-green-900/50 bg-green-50/40 dark:bg-green-950/20"
                        : "border-red-200 dark:border-red-900/50 bg-red-50/40 dark:bg-red-950/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          ans.isCorrect
                            ? "bg-green-200 dark:bg-green-900/50 text-green-900 dark:text-green-300"
                            : "bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-300"
                        }`}
                      >
                        Question {idx + 1} •{" "}
                        {ans.isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-[#F1F5F9] mb-2.5 leading-snug">
                      {ans.prompt}
                    </h4>

                    {/* ── 1. Problem Solving ── */}
                    {ans.questionType === "problem_solving" ? (
                      <div className="space-y-3">
                        {/* Your answer */}
                        <div
                          className={`flex items-start gap-2 p-3 rounded-xl border text-xs font-semibold ${
                            ans.isCorrect
                              ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-900 dark:text-green-300"
                              : "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-300"
                          }`}
                        >
                          <span className="shrink-0 mt-0.5">
                            {ans.isCorrect ? "✓" : "✗"}
                          </span>
                          <div className="break-all">
                            <span className="uppercase tracking-wide text-[10px] opacity-70 block mb-0.5">
                              Your Answer
                            </span>
                            {ans.selected && ans.selected !== "" ? (
                              ans.selected
                            ) : (
                              <em className="opacity-60">No answer given</em>
                            )}
                          </div>
                        </div>

                        {/* Step-by-step solution / Locked State */}
                        {!isReviewAllowed ? (
                          <div className="rounded-2xl border border-dashed border-amber-300 dark:border-amber-800/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-center flex flex-col items-center justify-center gap-1.5">
                            <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                            <span className="text-xs font-bold text-amber-900 dark:text-amber-200">
                              Step-by-Step Solution Locked
                            </span>
                            <p className="text-[11px] text-amber-700 dark:text-amber-400 max-w-sm">
                              The instructor has not released the full step-by-step mathematical solution for this problem yet.
                            </p>
                          </div>
                        ) : (
                          ans.explanation &&
                          (() => {
                            const steps = ans.explanation
                              .split(" → ")
                              .filter(Boolean);
                            const stepKey = ans.questionId || String(idx);
                            const revealed = revealedSteps[stepKey] ?? 0;
                            const allDone = revealed >= steps.length;

                            return (
                              <div className="rounded-2xl border border-[#166534]/20 dark:border-[#166534]/40 bg-gradient-to-b from-[#F0FDF4] to-white dark:from-[#161F30] dark:to-[#1E2D45] overflow-hidden shadow-xs">
                                {/* Header */}
                                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#166534] text-white">
                                  <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                                    <span>📘</span> Step-by-Step Solution
                                  </span>
                                  <span className="text-[10px] font-semibold opacity-90">
                                    {Math.min(revealed, steps.length)}/
                                    {steps.length} steps
                                  </span>
                                </div>

                                {/* Progress bar */}
                                <div className="h-1 bg-[#F0FDF4] dark:bg-[#1E2D45]">
                                  <motion.div
                                    className="h-full bg-[#166534] dark:bg-[#22C55E] origin-left"
                                    animate={{
                                      scaleX:
                                        steps.length > 0
                                          ? Math.min(revealed, steps.length) /
                                            steps.length
                                          : 0,
                                    }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 22,
                                    }}
                                    style={{ transformOrigin: "left" }}
                                  />
                                </div>

                                <div className="p-3.5 sm:p-4 space-y-2">
                                  {/* Revealed steps */}
                                  <AnimatePresence initial={false}>
                                    {steps.slice(0, revealed).map((step, si) => (
                                      <motion.div
                                        key={si}
                                        initial={{
                                          opacity: 0,
                                          y: -8,
                                          scale: 0.97,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          y: 0,
                                          scale: 1,
                                        }}
                                        transition={{
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 24,
                                          delay: 0.04,
                                        }}
                                        className="flex items-start gap-2.5 sm:gap-3"
                                      >
                                        <span
                                          className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-xs ${
                                            si === revealed - 1
                                              ? "bg-[#166534] text-white ring-2 ring-[#166534]/30"
                                              : "bg-[#F0FDF4] dark:bg-[#166534]/20 text-[#166534] dark:text-[#4ADE80]"
                                          }`}
                                        >
                                          {si + 1}
                                        </span>
                                        <span
                                          className={`text-xs leading-relaxed pt-0.5 ${
                                            si === revealed - 1
                                              ? "text-[#111827] dark:text-[#F1F5F9] font-semibold"
                                              : "text-gray-700 dark:text-[#CBD5E1]"
                                          }`}
                                        >
                                          {step}
                                        </span>
                                      </motion.div>
                                    ))}
                                  </AnimatePresence>

                                  {/* Placeholder while no steps revealed */}
                                  {revealed === 0 && (
                                    <p className="text-xs text-[#166534]/70 dark:text-[#4ADE80]/80 italic text-center py-2">
                                      Press "Show Next Step" to start the walkthrough →
                                    </p>
                                  )}

                                  {/* Action buttons */}
                                  <div className="flex flex-wrap items-center gap-2 pt-2">
                                    {!allDone ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setRevealedSteps((prev) => ({
                                              ...prev,
                                              [stepKey]: Math.min(
                                                (prev[stepKey] ?? 0) + 1,
                                                steps.length
                                              ),
                                            }))
                                          }
                                          className="flex-1 py-2 px-3.5 rounded-xl bg-[#166534] hover:bg-[#14532D] active:scale-95 text-white text-xs font-bold shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                                        >
                                          <span>▶</span>
                                          Show Next Step
                                          <span className="ml-1 opacity-80 text-[10px]">
                                            ({revealed + 1}/{steps.length})
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setRevealedSteps((prev) => ({
                                              ...prev,
                                              [stepKey]: steps.length,
                                            }))
                                          }
                                          className="py-2 px-3 rounded-xl border border-[#166534]/30 dark:border-[#166534]/50 text-[#166534] dark:text-[#4ADE80] hover:bg-[#F0FDF4] dark:hover:bg-[#166534]/20 text-xs font-semibold transition cursor-pointer"
                                        >
                                          Show All
                                        </button>
                                      </>
                                    ) : (
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full py-2 px-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 text-xs font-bold text-center flex items-center justify-center gap-1.5"
                                      >
                                        <span>✓</span> All steps complete!
                                      </motion.div>
                                    )}
                                    {revealed > 0 && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setRevealedSteps((prev) => ({
                                            ...prev,
                                            [stepKey]: 0,
                                          }))
                                        }
                                        className="py-2 px-3 rounded-xl border border-gray-200 dark:border-[#263347] text-gray-500 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1E2D45] text-xs font-semibold transition cursor-pointer"
                                      >
                                        Reset
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })()
                        )}
                      </div>
                    ) : ans.questionType === "identification" || ans.questionType === "enumeration" ? (
                      /* ── 2. Identification / Enumeration ── */
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
                            <span className="font-semibold">Correct Answer:</span>
                            <span className="italic opacity-80">
                              Hidden until review is released by instructor
                            </span>
                          </div>
                        ) : (
                          <div className="p-3 bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-xl space-y-1">
                            <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                              <span>Correct Answer: {ans.correctAnswerText || ans.correct}</span>
                            </div>
                            {ans.explanation && (
                              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 whitespace-pre-line pl-5 mt-1">
                                {ans.explanation}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* ── 3. Multiple Choice (or default options grid) ── */
                      <div className="space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {(["A", "B", "C", "D"] as const).map((optKey) => {
                            const optionText =
                              ans.options?.[optKey] || `Choice ${optKey}`;
                            const wasSelected = ans.selected === optKey;
                            const isCorrectChoice = ans.correct === optKey;

                            let style =
                              "bg-white dark:bg-[#1E2D45] border-gray-200 dark:border-[#263347] text-gray-700 dark:text-[#CBD5E1]";
                            let badge: React.ReactNode = null;

                            if (isReviewAllowed) {
                              // When review is allowed: reveal both what user picked and the actual correct choice
                              if (wasSelected && ans.isCorrect) {
                                style =
                                  "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-900 dark:text-green-300 font-bold ring-1 ring-green-400/50";
                                badge = (
                                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-green-200 dark:bg-green-900/60 text-green-900 dark:text-green-200 shrink-0 ml-1">
                                    Your Choice ✓
                                  </span>
                                );
                              } else if (wasSelected && !ans.isCorrect) {
                                style =
                                  "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-300 font-bold";
                                badge = (
                                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-red-200 dark:bg-red-900/60 text-red-900 dark:text-red-200 shrink-0 ml-1">
                                    Your Choice ✗
                                  </span>
                                );
                              } else if (!wasSelected && isCorrectChoice) {
                                style =
                                  "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 text-emerald-900 dark:text-emerald-300 font-bold border-dashed";
                                badge = (
                                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 shrink-0 ml-1">
                                    Correct Answer ✓
                                  </span>
                                );
                              }
                            } else {
                              // When review is NOT allowed: only show user's choice, DO NOT reveal the correct option!
                              if (wasSelected) {
                                style = ans.isCorrect
                                  ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-700 text-green-900 dark:text-green-300 font-bold"
                                  : "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-300 font-bold";
                                badge = (
                                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 shrink-0 ml-1">
                                    Your Choice
                                  </span>
                                );
                              }
                            }

                            return (
                              <div
                                key={optKey}
                                className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                              >
                                <span className="truncate pr-2">
                                  <strong>{optKey}:</strong> {optionText}
                                </span>
                                {badge}
                              </div>
                            );
                          })}
                        </div>

                        {!isReviewAllowed && (
                          <div className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-400 font-medium pt-1 px-1">
                            <Lock className="w-3.5 h-3.5 shrink-0" />
                            <span>Correct answer is hidden until released by instructor.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-[#1E2D45] shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UserReviewAttemptModal;
