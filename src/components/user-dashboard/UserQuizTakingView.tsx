import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Check,
  Loader2,
} from "lucide-react";
import type { StudentAvailableQuiz } from "../../types/dashboard";

interface UserQuizTakingViewProps {
  activeTakingQuiz: StudentAvailableQuiz;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedAnswers: Record<string, string>;
  onSelectAnswer: (questionId: string, choiceOrText: string) => void;
  quizTimerSeconds: number;
  isSubmittingQuiz: boolean;
  onExitQuiz: () => void;
  onSubmitQuiz: () => void;
  formatSeconds: (sec: number) => string;
}

export const UserQuizTakingView: React.FC<UserQuizTakingViewProps> = ({
  activeTakingQuiz,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedAnswers,
  onSelectAnswer,
  quizTimerSeconds,
  isSubmittingQuiz,
  onExitQuiz,
  onSubmitQuiz,
  formatSeconds,
}) => {
  const currentQuestion = activeTakingQuiz.questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 pb-24">
      {/* Top Sticky/Header HUD Card */}
      <div className="relative overflow-hidden bg-white/95 dark:bg-[#161F30]/95 backdrop-blur-md border border-[#EAEBED] dark:border-[#1E2D45] rounded-[28px] p-5 sm:p-7 shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 dark:bg-[#1E2D45]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d]"
            initial={{ width: 0 }}
            animate={{
              width: `${
                ((currentQuestionIndex + 1) /
                  activeTakingQuiz.questions.length) *
                100
              }%`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Top Row: Back action + Category badge + Timer */}
        <div className="flex items-center justify-between gap-4 pt-1 mb-4">
          <button
            onClick={onExitQuiz}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-[#263347] text-xs font-bold text-gray-600 dark:text-[#94A3B8] hover:text-green-700 dark:hover:text-[#4ADE80] hover:border-green-200 dark:hover:border-[#166534]/50 hover:bg-green-50/50 dark:hover:bg-[#166534]/20 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Exit Quiz</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="text-xs font-extrabold uppercase tracking-wider bg-[#166534]/10 dark:bg-[#166534]/25 text-[#166534] dark:text-[#4ADE80] border border-[#166534]/20 dark:border-[#166534]/40 px-3 py-1 rounded-full">
              {activeTakingQuiz.topic}
            </span>
            <div className="flex items-center gap-1.5 bg-[#1F242D] dark:bg-[#0B0F19] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs border border-transparent dark:border-[#263347]">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="tracking-wide font-mono">
                {formatSeconds(quizTimerSeconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Title & Stats Summary */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-gray-100 dark:border-[#1E2D45] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#111827] dark:text-[#F1F5F9] tracking-tight">
              {activeTakingQuiz.title}
            </h2>
            <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-gray-500 dark:text-[#94A3B8]">
              <span>
                Question {currentQuestionIndex + 1} of{" "}
                {activeTakingQuiz.questions.length}
              </span>
              <span>•</span>
              <span className="capitalize text-gray-600 dark:text-[#CBD5E1] font-bold">
                {(currentQuestion?.questionType || "multiple_choice").replace(
                  "_",
                  " "
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:self-end">
            <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-[#166534]/20 border border-emerald-200 dark:border-[#166534]/40 text-emerald-800 dark:text-[#4ADE80] px-3 py-1 rounded-xl text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ADE80]" />
              <span>
                {Object.keys(selectedAnswers).length} /{" "}
                {activeTakingQuiz.questions.length} Answered
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Question Stepper Ribbon */}
        <div className="pt-3">
          <p className="text-[11px] font-bold text-gray-400 dark:text-[#64748B] uppercase tracking-wider mb-2">
            Jump to Question
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {activeTakingQuiz.questions.map((q, idx) => {
              const isAnswered = Boolean(selectedAnswers[q.id]);
              const isCurrent = idx === currentQuestionIndex;
              return (
                <motion.button
                  key={q.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`relative w-9 h-9 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center cursor-pointer shrink-0 ${
                    isCurrent
                      ? "bg-gradient-to-br from-[#15803d] to-[#166534] text-white shadow-md shadow-[#166534]/30 ring-2 ring-[#166534] ring-offset-2 dark:ring-offset-[#161F30]"
                      : isAnswered
                      ? "bg-emerald-50 dark:bg-[#166534]/25 text-emerald-700 dark:text-[#4ADE80] border border-emerald-300 dark:border-[#166534]/50 font-black shadow-xs"
                      : "bg-gray-100/90 dark:bg-[#1E2D45] text-gray-500 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#263347] hover:text-gray-800 dark:hover:text-[#F1F5F9] border border-transparent"
                  }`}
                >
                  {idx + 1}
                  {isAnswered && !isCurrent && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-[#161F30]" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Question Main Interactive Card */}
      {currentQuestion && (
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-[32px] p-6 sm:p-9 shadow-sm flex flex-col gap-6"
        >
          {/* Question Header & Points Badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#15803d] to-[#166534] text-white text-xs font-extrabold px-3.5 py-1.5 shadow-xs">
                Question {currentQuestionIndex + 1}
              </span>
              <span className="text-xs font-bold text-gray-400 dark:text-[#64748B]">
                of {activeTakingQuiz.questions.length}
              </span>
            </div>

            <span className="text-xs font-extrabold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 px-3 py-1 rounded-xl">
              ★ {activeTakingQuiz.pointsPerItem || 1}{" "}
              {(activeTakingQuiz.pointsPerItem || 1) === 1
                ? "Point"
                : "Points"}
            </span>
          </div>

          {/* Question Prompt */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] dark:text-[#F1F5F9] leading-relaxed tracking-tight">
            {currentQuestion.prompt}
          </h3>

          {/* IDENTIFICATION QUESTION TYPE */}
          {currentQuestion.questionType === "identification" && (
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-gray-600 dark:text-[#94A3B8] block uppercase tracking-wider">
                Your Identification Answer:
              </label>
              <input
                type="text"
                placeholder="Type your answer (theorem, concept, term)..."
                value={selectedAnswers[currentQuestion.id] || ""}
                onChange={(e) =>
                  onSelectAnswer(currentQuestion.id, e.target.value)
                }
                className="w-full px-5 py-4 bg-[#F8F9FA] dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-2xl text-base font-semibold text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#4B6080] focus:outline-none focus:ring-2 focus:ring-[#166534] dark:focus:ring-[#22C55E] focus:bg-white dark:focus:bg-[#1E2D45] transition-all shadow-inner"
              />
            </div>
          )}

          {/* ENUMERATION QUESTION TYPE */}
          {currentQuestion.questionType === "enumeration" && (
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-gray-600 dark:text-[#94A3B8] block uppercase tracking-wider">
                List items (separated by commas or on separate lines):
              </label>
              <textarea
                rows={4}
                placeholder="1. First item&#10;2. Second item&#10;3. Third item..."
                value={selectedAnswers[currentQuestion.id] || ""}
                onChange={(e) =>
                  onSelectAnswer(currentQuestion.id, e.target.value)
                }
                className="w-full px-5 py-3.5 bg-[#F8F9FA] dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-2xl text-base font-semibold text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#4B6080] focus:outline-none focus:ring-2 focus:ring-[#166534] dark:focus:ring-[#22C55E] focus:bg-white dark:focus:bg-[#1E2D45] transition-all shadow-inner resize-y"
              />
            </div>
          )}

          {/* PROBLEM SOLVING QUESTION TYPE */}
          {currentQuestion.questionType === "problem_solving" && (
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold text-gray-600 dark:text-[#94A3B8] block uppercase tracking-wider">
                Final Solved Answer:
              </label>
              <input
                type="text"
                placeholder="Enter the computed final value or simplified expression..."
                value={selectedAnswers[currentQuestion.id] || ""}
                onChange={(e) =>
                  onSelectAnswer(currentQuestion.id, e.target.value)
                }
                className="w-full px-5 py-4 bg-[#F8F9FA] dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-2xl text-base font-bold text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#4B6080] focus:outline-none focus:ring-2 focus:ring-[#166534] dark:focus:ring-[#22C55E] focus:bg-white dark:focus:bg-[#1E2D45] transition-all shadow-inner"
              />
            </div>
          )}

          {/* MULTIPLE CHOICE 4 OPTION BUTTONS */}
          {(!currentQuestion.questionType ||
            currentQuestion.questionType === "multiple_choice") && (
            <div className="grid grid-cols-1 gap-3.5 pt-2">
              {(
                [
                  ["A", currentQuestion.optionA],
                  ["B", currentQuestion.optionB],
                  ["C", currentQuestion.optionC],
                  ["D", currentQuestion.optionD],
                ] as const
              ).map(([choice, text]) => {
                const currentQId = currentQuestion.id;
                const isSelected = selectedAnswers[currentQId] === choice;

                return (
                  <motion.button
                    key={choice}
                    type="button"
                    whileHover={{ scale: 1.01, x: 2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onSelectAnswer(currentQId, choice)}
                    className={`group w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-[#166534] dark:border-[#22C55E] bg-gradient-to-r from-[#FCE8EB]/80 to-[#FCE8EB]/40 dark:from-[#166534]/30 dark:to-[#166534]/15 shadow-sm ring-2 ring-[#166534]/20 dark:ring-[#22C55E]/20"
                        : "border-gray-200 dark:border-[#1E2D45] hover:border-gray-300 dark:hover:border-[#263347] hover:bg-gray-50/80 dark:hover:bg-[#1E2D45]/40 bg-white dark:bg-[#161F30]"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#166534] text-white shadow-xs"
                            : "bg-gray-100 dark:bg-[#1E2D45] text-gray-700 dark:text-[#CBD5E1] group-hover:bg-gray-200 dark:group-hover:bg-[#263347]"
                        }`}
                      >
                        {choice}
                      </span>
                      <span
                        className={`text-base font-semibold leading-relaxed transition-colors ${
                          isSelected
                            ? "text-[#111827] dark:text-[#F1F5F9] font-bold"
                            : "text-[#374151] dark:text-[#CBD5E1] group-hover:text-[#111827] dark:group-hover:text-white"
                        }`}
                      >
                        {text}
                      </span>
                    </div>

                    <div className="shrink-0 pl-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-[#166534] dark:border-[#22C55E] bg-[#166534] dark:bg-[#22C55E] text-white scale-105"
                            : "border-gray-300 dark:border-[#263347] bg-white dark:bg-[#1E2D45] group-hover:border-gray-400 dark:group-hover:border-[#334155]"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Bottom Navigation Toolbar */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-[#1E2D45] gap-3">
            <button
              type="button"
              disabled={currentQuestionIndex === 0}
              onClick={() =>
                setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
              }
              className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-[#263347] text-xs font-bold text-gray-700 dark:text-[#CBD5E1] hover:bg-gray-50 dark:hover:bg-[#1E2D45] disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < activeTakingQuiz.questions.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(activeTakingQuiz.questions.length - 1, prev + 1)
                  )
                }
                className="px-6 py-2.5 bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md shadow-[#166534]/20 transition flex items-center gap-2 cursor-pointer"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                disabled={isSubmittingQuiz}
                onClick={onSubmitQuiz}
                className="px-7 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:opacity-60 text-white text-xs font-black rounded-xl shadow-lg shadow-emerald-700/25 transition flex items-center gap-2.5 cursor-pointer"
              >
                {isSubmittingQuiz ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Grading Quiz...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Final Quiz</span>
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserQuizTakingView;
