import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Check, Lightbulb } from "lucide-react";
import type { QuizItem } from "../../types/dashboard";

interface AdminQuizPreviewModalProps {
  previewQuizModal: QuizItem | null;
  setPreviewQuizModal: (q: QuizItem | null) => void;
  previewQuestionIndex: number;
  setPreviewQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  previewAnswers: Record<string, string>;
  setPreviewAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  previewShowExplanation: Record<string, boolean>;
  setPreviewShowExplanation: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  previewQuizSubmitted: boolean;
  setPreviewQuizSubmitted: (sub: boolean) => void;
}

export const AdminQuizPreviewModal: React.FC<AdminQuizPreviewModalProps> = ({
  previewQuizModal,
  setPreviewQuizModal,
  previewQuestionIndex,
  setPreviewQuestionIndex,
  previewAnswers,
  setPreviewAnswers,
  previewShowExplanation,
  setPreviewShowExplanation,
  previewQuizSubmitted,
  setPreviewQuizSubmitted,
}) => {
  if (!previewQuizModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-2xl shadow-2xl border border-[#EAEBED] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-[#F0F1F3] flex items-center justify-between bg-[#FAFBFD]">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#166534]/10 text-[#166534]">
                  Student View Simulation
                </span>
                <span className="text-[10px] font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                  {previewQuizModal.topic}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1F242D] mt-1">
                {previewQuizModal.title}
              </h3>
            </div>
            <button
              onClick={() => setPreviewQuizModal(null)}
              className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 cursor-pointer transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
            {previewQuizSubmitted ? (
              /* Simulated Completion Screen */
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#1F242D] mb-1">
                  Quiz Preview Completed!
                </h4>
                <p className="text-xs text-[#6B7280] max-w-md mb-6">
                  This simulated attempt demonstrated the student test-taking
                  and grading experience. No permanent score was saved to any
                  account.
                </p>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3] flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-[11px] text-[#8C93A0]">Score</p>
                    <p className="text-lg font-bold text-[#166534]">
                      {Object.keys(previewAnswers).length} /{" "}
                      {previewQuizModal.questions?.length ||
                        previewQuizModal.questionsCount}
                    </p>
                  </div>
                  <div className="w-[1px] h-8 bg-[#EAEBED]" />
                  <div className="text-center">
                    <p className="text-[11px] text-[#8C93A0]">Status</p>
                    <p className="text-lg font-bold text-green-700">Passed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setPreviewQuizSubmitted(false);
                      setPreviewQuestionIndex(0);
                      setPreviewAnswers({});
                      setPreviewShowExplanation({});
                    }}
                    className="px-4 py-2 rounded-xl border border-[#E0E2E6] text-xs font-semibold hover:bg-gray-100 cursor-pointer transition"
                  >
                    Restart Preview
                  </button>
                  <button
                    onClick={() => setPreviewQuizModal(null)}
                    className="px-5 py-2 rounded-xl bg-[#166534] text-white text-xs font-semibold hover:bg-[#14532d] cursor-pointer transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : previewQuizModal.questions &&
              previewQuizModal.questions.length > 0 ? (
              (() => {
                const currQ =
                  previewQuizModal.questions[previewQuestionIndex] ||
                  previewQuizModal.questions[0];
                const totalQs = previewQuizModal.questions.length;
                const qKey = currQ.id || `${previewQuestionIndex}`;
                const selectedOpt = previewAnswers[qKey];
                const isShowingExp = previewShowExplanation[qKey];

                return (
                  <>
                    {/* Question Progress Tracker */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-[#F0F1F3]">
                      <span className="font-bold text-[#1F242D]">
                        Question {previewQuestionIndex + 1} of {totalQs}
                      </span>
                      <span className="text-[#8C93A0] font-medium">
                        ★ {previewQuizModal.pointsPerItem || 1} pt per item
                      </span>
                    </div>

                    {/* Question Prompt */}
                    <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3]">
                      <p className="text-sm font-semibold text-[#1F242D] leading-relaxed">
                        {currQ.prompt || "Question prompt not specified."}
                      </p>
                    </div>

                    {/* Options */}
                    <div className="flex flex-col gap-2.5">
                      {[
                        { key: "A", text: currQ.optionA },
                        { key: "B", text: currQ.optionB },
                        { key: "C", text: currQ.optionC },
                        { key: "D", text: currQ.optionD },
                      ]
                        .filter((opt) => opt.text && opt.text.trim())
                        .map((opt) => {
                          const isSelected = selectedOpt === opt.key;
                          return (
                            <button
                              key={opt.key}
                              onClick={() =>
                                setPreviewAnswers((prev) => ({
                                  ...prev,
                                  [qKey]: opt.key,
                                }))
                              }
                              className={`p-3.5 rounded-xl border text-left text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? "border-[#166534] bg-[#F0FDF4] text-[#166534]"
                                  : "border-[#EAEBED] hover:border-gray-300 hover:bg-[#FAFBFD] text-[#333]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                                    isSelected
                                      ? "bg-[#166534] text-white"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {opt.key}
                                </span>
                                <span>{opt.text}</span>
                              </div>
                              {isSelected && (
                                <Check className="w-4 h-4 text-[#166534]" />
                              )}
                            </button>
                          );
                        })}
                    </div>

                    {/* Step-by-Step Solution / Explanation Reveal */}
                    <div className="pt-2">
                      <button
                        onClick={() =>
                          setPreviewShowExplanation((prev) => ({
                            ...prev,
                            [qKey]: !prev[qKey],
                          }))
                        }
                        className="text-xs font-semibold text-[#166534] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>
                          {isShowingExp
                            ? "Hide Answer & Explanation"
                            : "Show Answer Key & Explanation"}
                        </span>
                      </button>

                      {isShowingExp && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2.5 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900"
                        >
                          <p className="font-bold mb-1">
                            Correct Answer: {currQ.correct || "A"}
                          </p>
                          <p className="text-[11px] leading-relaxed text-amber-800">
                            {currQ.explanation ||
                              "No detailed solution step written for this question."}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </>
                );
              })()
            ) : (
              <div className="py-8 text-center text-xs text-gray-500">
                This quiz has no individual questions configured yet.
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          {!previewQuizSubmitted &&
            previewQuizModal.questions &&
            previewQuizModal.questions.length > 0 && (
              <div className="p-4 border-t border-[#F0F1F3] bg-[#FAFBFD] flex items-center justify-between">
                <button
                  disabled={previewQuestionIndex === 0}
                  onClick={() =>
                    setPreviewQuestionIndex((prev) => Math.max(0, prev - 1))
                  }
                  className="px-3.5 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {previewQuestionIndex <
                  previewQuizModal.questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setPreviewQuestionIndex((prev) =>
                          Math.min(
                            previewQuizModal.questions.length - 1,
                            prev + 1
                          )
                        )
                      }
                      className="px-4 py-1.5 rounded-lg bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold cursor-pointer transition"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={() => setPreviewQuizSubmitted(true)}
                      className="px-4 py-1.5 rounded-lg bg-green-700 hover:bg-green-800 text-white text-xs font-semibold cursor-pointer transition"
                    >
                      Finish Preview
                    </button>
                  )}
                </div>
              </div>
            )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
