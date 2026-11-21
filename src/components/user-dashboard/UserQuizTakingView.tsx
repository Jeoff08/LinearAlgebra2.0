import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Check,
  Loader2,
  AlertTriangle,
  ShieldAlert,
  Lock,
  Send,
  XCircle,
} from "lucide-react";
import type { StudentAvailableQuiz } from "../../types/dashboard";
import {
  getQuizLockStatus,
  recordQuizWarning,
  requestQuizUnlock,
} from "../../utils/quizLockManager";

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
  studentKey?: string;
  studentName?: string;
  onQuizLocked?: (quizId: string) => void;
  onReturnToQuizzes?: () => void;
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
  studentKey = "student",
  studentName = "Student",
  onQuizLocked,
  onReturnToQuizzes,
}) => {
  const currentQuestion = activeTakingQuiz.questions[currentQuestionIndex];
  const pointsPerItem = activeTakingQuiz.pointsPerItem || 1;
  const totalMaxScore = activeTakingQuiz.questions.length * pointsPerItem;

  // Initial Lock & Warning state
  const initialLockStatus = getQuizLockStatus(activeTakingQuiz.id, studentKey);
  const [warningCount, setWarningCount] = useState<number>(
    initialLockStatus.warningCount || 0
  );
  const [isLocked, setIsLocked] = useState<boolean>(
    initialLockStatus.isLocked || false
  );
  const [unlockRequested, setUnlockRequested] = useState<boolean>(
    initialLockStatus.unlockRequested || false
  );

  // Toast state
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastKey, setToastKey] = useState<number>(0);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastViolationTimeRef = useRef<number>(0);

  // Check initial locked state
  useEffect(() => {
    if (initialLockStatus.isLocked && onQuizLocked) {
      onQuizLocked(activeTakingQuiz.id);
    }
  }, [initialLockStatus.isLocked, activeTakingQuiz.id, onQuizLocked]);

  // Tab switch violation trigger
  const handleTabSwitchViolation = () => {
    if (isLocked) return;

    const now = Date.now();
    // Guard against double events (e.g. blur + visibilitychange firing concurrently within 1200ms)
    if (now - lastViolationTimeRef.current < 1200) {
      return;
    }
    lastViolationTimeRef.current = now;

    const result = recordQuizWarning(
      activeTakingQuiz.id,
      studentKey,
      activeTakingQuiz.title,
      studentName
    );

    setWarningCount(result.warningCount);

    // Show warning toast with animated 5s countdown
    setShowToast(true);
    setToastKey((k) => k + 1);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    // If reached 3 warnings, lock quiz immediately
    if (result.isLocked) {
      setIsLocked(true);
      if (onQuizLocked) {
        onQuizLocked(activeTakingQuiz.id);
      }
    }
  };

  // Listen for tab switching, window blurring, and alt-tab / ctrl-tab shortcuts
  useEffect(() => {
    if (isLocked) return;

    const handleVisibilityChange = () => {
      if (document.hidden || document.visibilityState === "hidden") {
        handleTabSwitchViolation();
      }
    };

    const handleWindowBlur = () => {
      handleTabSwitchViolation();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Catch Alt+Tab or Ctrl+Tab combinations
      if (e.key === "Tab" && (e.altKey || e.ctrlKey)) {
        handleTabSwitchViolation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("keydown", handleKeyDown);
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, [isLocked, activeTakingQuiz.id, studentKey, studentName]);

  const handleRequestUnlock = () => {
    requestQuizUnlock(
      activeTakingQuiz.id,
      studentKey,
      studentName,
      activeTakingQuiz.title
    );
    setUnlockRequested(true);
    if (onReturnToQuizzes) {
      onReturnToQuizzes();
    } else {
      onExitQuiz();
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 pb-24 relative">
      {/* ======================================================== */}
      {/* TOP-RIGHT WARNING TOAST WITH 5-SECOND ANIMATED COUNTDOWN */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            key={toastKey}
            initial={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -15, scale: 0.95, x: 20 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="fixed top-6 right-6 z-[99999] w-[90vw] max-w-md bg-white dark:bg-[#161F30] border-2 border-rose-500/80 dark:border-rose-500 rounded-2xl shadow-2xl shadow-rose-900/30 overflow-hidden backdrop-blur-xl"
          >
            {/* Top color bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-red-600" />

            <div className="p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 flex items-center justify-center shrink-0 text-rose-600 dark:text-rose-400">
                  {warningCount >= 3 ? (
                    <Lock className="w-5 h-5 animate-pulse text-red-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 animate-bounce text-amber-600 dark:text-amber-400" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      Academic Integrity Alert
                    </span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        warningCount >= 3
                          ? "bg-red-600 text-white"
                          : warningCount === 2
                          ? "bg-amber-500 text-white"
                          : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700"
                      }`}
                    >
                      Warning {warningCount} of 3
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 mt-0.5">
                    {warningCount >= 3
                      ? "Quiz Automatically Locked!"
                      : "Alt-Tab / Tab Switch Detected!"}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {warningCount === 1 && (
                      <>
                        Switching tabs or windows is strictly prohibited during
                        the quiz. You have{" "}
                        <strong className="text-rose-600 dark:text-rose-400">
                          2 warnings remaining
                        </strong>{" "}
                        before this quiz is automatically locked.
                      </>
                    )}
                    {warningCount === 2 && (
                      <>
                        <strong className="text-rose-600 dark:text-rose-400">
                          Final Warning!
                        </strong>{" "}
                        Switching tabs again will immediately and permanently
                        lock this quiz.
                      </>
                    )}
                    {warningCount >= 3 && (
                      <>
                        Maximum warnings exceeded (3/3). This quiz has been{" "}
                        <strong className="text-red-600">locked</strong>. You
                        cannot continue without admin authorization.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Animated 5-second countdown progress bar */}
              <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 dark:text-gray-500 mb-1">
                  <span>Auto-dismissing warning</span>
                  <span>5s</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    key={`bar-${toastKey}`}
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* QUIZ LOCKED MODAL OVERLAY (TRIGGERED AFTER 3 WARNINGS)   */}
      {/* ======================================================== */}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-full max-w-lg bg-white dark:bg-[#161F30] border-2 border-red-500/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/70 border-2 border-red-300 dark:border-red-800 flex items-center justify-center text-red-600 dark:text-red-400 mb-4 shadow-lg shadow-red-600/20">
              <Lock className="w-8 h-8 animate-pulse" />
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800">
              Violations: 3 / 3 Warnings Exceeded
            </span>

            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mt-3 tracking-tight">
              Quiz Automatically Locked
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-md leading-relaxed">
              You navigated away from this quiz window (Alt-Tab, Ctrl-Tab, or
              switching applications) 3 times. As mandated by anti-cheat
              policy, this quiz session has been terminated and locked.
            </p>

            <div className="w-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 rounded-2xl p-4 my-5 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-300">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
                <span>Lockout Enforcement Policy</span>
              </div>
              <p className="text-[11px] text-red-700 dark:text-red-400/90 mt-1 leading-normal">
                You cannot retake or submit answers for this quiz unless an
                instructor or administrator reviews and unlocks your session.
              </p>
            </div>

            {unlockRequested ? (
              <div className="w-full py-3 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Unlock Request Sent! Pending Admin Review</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleRequestUnlock}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-black shadow-lg shadow-red-700/30 transition flex items-center justify-center gap-2 cursor-pointer mb-3 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Request Admin to Unlock</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (onReturnToQuizzes) {
                  onReturnToQuizzes();
                } else {
                  onExitQuiz();
                }
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Quizzes</span>
            </button>
          </motion.div>
        </motion.div>
      )}

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

          <div className="flex items-center gap-2">
            {warningCount > 0 && (
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 px-3 py-1 rounded-full animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>Warnings: {warningCount}/3</span>
              </span>
            )}
            {activeTakingQuiz.designatedSubject && (
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 px-3 py-1 rounded-full">
                {activeTakingQuiz.designatedSubject}
              </span>
            )}
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
              <span>{pointsPerItem} pt each</span>
              <span>•</span>
              <span>{totalMaxScore} pts total</span>
            </div>
          </div>

          <div className="text-xs font-bold text-gray-500 dark:text-[#94A3B8]">
            Answered{" "}
            <span className="text-[#166534] dark:text-[#4ADE80] font-extrabold">
              {
                Object.keys(selectedAnswers).filter(
                  (k) => (selectedAnswers[k] || "").trim() !== ""
                ).length
              }
            </span>{" "}
            of {activeTakingQuiz.questions.length}
          </div>
        </div>

        {/* Question Numbers Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 scrollbar-thin">
          {activeTakingQuiz.questions.map((q, idx) => {
            const isAnswered = Boolean(
              selectedAnswers[q.id] && selectedAnswers[q.id].trim() !== ""
            );
            const isCurrent = idx === currentQuestionIndex;
            return (
              <button
                key={q.id || idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-9 h-9 shrink-0 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center cursor-pointer ${
                  isCurrent
                    ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25 scale-105"
                    : isAnswered
                    ? "bg-green-100 dark:bg-[#166534]/30 text-green-800 dark:text-[#4ADE80] border border-green-300 dark:border-[#166534]/50"
                    : "bg-gray-100 dark:bg-[#1E2D45] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#263347]"
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      {currentQuestion && (
        <motion.div
          key={currentQuestion.id || currentQuestionIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-[28px] p-6 sm:p-9 shadow-sm flex flex-col gap-6"
        >
          {/* Question Category & Type Header */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#166534] dark:text-[#4ADE80] bg-green-50 dark:bg-[#166534]/20 border border-green-200 dark:border-[#166534]/40 px-3 py-1 rounded-full">
              Question {currentQuestionIndex + 1}
            </span>
            <span className="text-xs font-bold text-gray-400 dark:text-[#64748B] uppercase tracking-wider">
              {(currentQuestion?.questionType || "multiple_choice").replace("_", " ")}
            </span>
          </div>

          {/* Question Text */}
          <div className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#F1F5F9] leading-relaxed">
            {currentQuestion.prompt}
          </div>

          {/* Options / Answer Choices */}
          <div className="flex flex-col gap-3 pt-2">
            {(
              [
                ["A", currentQuestion.optionA],
                ["B", currentQuestion.optionB],
                ["C", currentQuestion.optionC],
                ["D", currentQuestion.optionD],
              ] as const
            ).map(([choiceKey, choiceText]) => {
              if (!choiceText) return null;
              const isSelected = selectedAnswers[currentQuestion.id] === choiceKey;

              return (
                <motion.button
                  key={choiceKey}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  type="button"
                  onClick={() => onSelectAnswer(currentQuestion.id, choiceKey)}
                  className={`group w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? "border-[#166534] dark:border-[#22C55E] bg-green-50/80 dark:bg-[#166534]/20 shadow-xs"
                      : "border-gray-200 dark:border-[#1E2D45] bg-[#F9FAFB] dark:bg-[#121927] hover:border-gray-300 dark:hover:border-[#263347] hover:bg-white dark:hover:bg-[#161F30]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#166534] text-white"
                          : "bg-gray-200 dark:bg-[#1E2D45] text-gray-700 dark:text-[#94A3B8] group-hover:bg-gray-300 dark:group-hover:bg-[#263347]"
                      }`}
                    >
                      {choiceKey}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-[#E2E8F0]">
                      {choiceText}
                    </span>
                  </div>

                  <div className="shrink-0 pl-2">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
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
