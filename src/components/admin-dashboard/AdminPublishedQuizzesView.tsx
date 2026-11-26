import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  Search,
  Eye,
  Lock,
  Trash2,
  BarChart3,
  RefreshCw,
  Plus,
  CheckSquare,
  Square,
  CheckCircle2,
  Loader2,
  ShieldAlert,
  Unlock,
  AlertTriangle,
  X,
} from "lucide-react";
import type { QuizItem } from "../../types/dashboard";
import {
  getAllUnlockRequests,
  adminUnlockQuiz,
  type UnlockRequestItem,
} from "../../utils/quizLockManager";

interface AdminPublishedQuizzesViewProps {
  quizzes: QuizItem[];
  isLoadingQuizzes?: boolean;
  fetchQuizzesAndStats?: () => Promise<void>;
  handleNavClick: (nav: any) => void;
  setAdminReviewQuizModal: (quiz: QuizItem | null) => void;
  handleDeleteQuiz: (quizId: string, skipConfirm?: boolean) => Promise<void>;
  handleClearAllQuizzes?: (skipConfirm?: boolean) => Promise<void>;
  handleStartStudentPreviewQuiz: (quiz: QuizItem) => void;
  onToggleQuizReview?: (quizId: string, currentStatus?: boolean) => Promise<void>;
  onBulkToggleQuizReview?: (allow: boolean, targetQuizIds?: string[]) => Promise<void>;
}

export const AdminPublishedQuizzesView: React.FC<AdminPublishedQuizzesViewProps> = ({
  quizzes,
  isLoadingQuizzes = false,
  fetchQuizzesAndStats,
  handleNavClick,
  setAdminReviewQuizModal,
  handleDeleteQuiz,
  handleClearAllQuizzes,
  handleStartStudentPreviewQuiz,
  onToggleQuizReview,
  onBulkToggleQuizReview,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [deletingQuizId, setDeletingQuizId] = useState<string | null>(null);
  const [selectedQuizIds, setSelectedQuizIds] = useState<Set<string>>(new Set());
  const [isUpdatingBulk, setIsUpdatingBulk] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [unlockRequests, setUnlockRequests] = useState<UnlockRequestItem[]>([]);

  // Confirmation Modals State
  const [isConfirmClearAllOpen, setIsConfirmClearAllOpen] = useState(false);
  const [isClearingAll, setIsClearingAll] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<QuizItem | null>(null);
  const [isDeletingSingle, setIsDeletingSingle] = useState(false);

  // Review Confirmation Modal State (for Allow Review / Lock Review)
  const [reviewConfirmState, setReviewConfirmState] = useState<{
    type: "single" | "bulk";
    action: "allow" | "lock";
    quiz?: QuizItem;
    quizIds?: string[];
  } | null>(null);
  const [isUpdatingReviewConfirm, setIsUpdatingReviewConfirm] = useState(false);

  const loadRequests = () => {
    setUnlockRequests(getAllUnlockRequests());
  };

  useEffect(() => {
    loadRequests();
    const handleUpdate = () => loadRequests();
    window.addEventListener("quiz_lock_updated", handleUpdate);
    return () => window.removeEventListener("quiz_lock_updated", handleUpdate);
  }, []);

  // Auto-dismiss toast notification after 3 seconds
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Toggle selection for a single quiz
  const handleToggleSelectQuiz = (quizId: string) => {
    setSelectedQuizIds((prev) => {
      const next = new Set(prev);
      if (next.has(quizId)) next.delete(quizId);
      else next.add(quizId);
      return next;
    });
  };

  // Toggle select all currently filtered quizzes
  const handleToggleSelectAll = () => {
    if (selectedQuizIds.size === filteredQuizzes.length && filteredQuizzes.length > 0) {
      setSelectedQuizIds(new Set());
    } else {
      setSelectedQuizIds(new Set(filteredQuizzes.map((q) => q.id)));
    }
  };

  // Bulk allow or lock review
  const handleApplyBulkReview = async (allow: boolean) => {
    if (!onBulkToggleQuizReview) return;
    const targetIds = Array.from(selectedQuizIds);
    if (targetIds.length === 0) return;
    const count = targetIds.length;
    setIsUpdatingBulk(true);
    try {
      await onBulkToggleQuizReview(allow, targetIds);
      // Deselect immediately so it doesn't stay stuck on the bulk bar
      setSelectedQuizIds(new Set());
      setToastMessage(
        allow
          ? `Successfully allowed student review for ${count} quiz${count === 1 ? "" : "zes"}!`
          : `Successfully locked student review for ${count} quiz${count === 1 ? "" : "zes"}!`
      );
    } finally {
      setIsUpdatingBulk(false);
    }
  };

  // Extract unique topics from quizzes
  const uniqueTopics = useMemo(() => {
    const set = new Set<string>();
    quizzes.forEach((q) => {
      if (q.topic) set.add(q.topic);
    });
    return Array.from(set).sort();
  }, [quizzes]);

  // Filter quizzes
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      const qText = searchQuery.toLowerCase().trim();
      const matchesSearch =
        qText === "" ||
        quiz.title.toLowerCase().includes(qText) ||
        (quiz.topic && quiz.topic.toLowerCase().includes(qText)) ||
        (quiz.subject && quiz.subject.toLowerCase().includes(qText));

      const matchesTopic =
        topicFilter === "all" || quiz.topic === topicFilter;

      return matchesSearch && matchesTopic;
    });
  }, [quizzes, searchQuery, topicFilter]);

  // Execute Clear All Quizzes after user confirms in custom modal
  const executeClearAll = async () => {
    if (!handleClearAllQuizzes) return;
    setIsClearingAll(true);
    try {
      await handleClearAllQuizzes(true);
      setIsConfirmClearAllOpen(false);
      setToastMessage("All published quizzes have been cleared successfully.");
    } catch (err: any) {
      console.error("Failed to clear quizzes:", err);
      setToastMessage("Failed to clear quizzes: " + (err.message || "Unknown error"));
    } finally {
      setIsClearingAll(false);
    }
  };

  // Execute Single Quiz Delete after user confirms in custom modal
  const executeDeleteSingleQuiz = async () => {
    if (!quizToDelete) return;
    const target = quizToDelete;
    setIsDeletingSingle(true);
    setDeletingQuizId(target.id);
    try {
      await handleDeleteQuiz(target.id, true);
      setQuizToDelete(null);
      setToastMessage(`Deleted "${target.title}" successfully.`);
    } catch (err: any) {
      console.error("Failed to delete quiz:", err);
      setToastMessage("Failed to delete quiz: " + (err.message || "Unknown error"));
    } finally {
      setIsDeletingSingle(false);
      setDeletingQuizId(null);
    }
  };

  // Execute Review Toggle (Allow / Lock) after user confirms in custom modal
  const executeConfirmReviewToggle = async () => {
    if (!reviewConfirmState) return;
    setIsUpdatingReviewConfirm(true);
    try {
      const willAllow = reviewConfirmState.action === "allow";
      if (reviewConfirmState.type === "single" && reviewConfirmState.quiz) {
        const q = reviewConfirmState.quiz;
        await onToggleQuizReview?.(q.id, q.allowReview);
        setToastMessage(
          willAllow
            ? `Review is now allowed for "${q.title}". Students can view answers.`
            : `Review is now locked for "${q.title}". Students cannot view answers.`
        );
      } else if (reviewConfirmState.type === "bulk" && reviewConfirmState.quizIds) {
        const ids = reviewConfirmState.quizIds;
        await onBulkToggleQuizReview?.(willAllow, ids);
        const count = ids.length;
        setSelectedQuizIds(new Set());
        setToastMessage(
          willAllow
            ? `Successfully allowed student review for ${count} quiz${count === 1 ? "" : "zes"}!`
            : `Successfully locked student review for ${count} quiz${count === 1 ? "" : "zes"}!`
        );
      }
      setReviewConfirmState(null);
    } catch (err: any) {
      console.error("Failed to update quiz review state:", err);
      setToastMessage("Failed to update review status: " + (err.message || "Unknown error"));
    } finally {
      setIsUpdatingReviewConfirm(false);
    }
  };

  return (
    <motion.div
      key="published-quizzes-view"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="p-6 sm:p-7 max-w-[1440px] w-full mx-auto pb-20 space-y-6 relative"
    >
      {/* Top-Right Success Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-8 z-[9999] flex items-center gap-3 px-4 py-3 bg-[#166534] text-white rounded-2xl shadow-xl shadow-emerald-950/20 border border-emerald-400/30"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 1. Header Bar with Search & Action Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#161F30] rounded-2xl p-5 border border-[#ECEFF3] dark:border-slate-700 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#15803d] to-[#22c55e] text-white flex items-center justify-center shadow-md shadow-[#166534]/20 shrink-0">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-[#111827] dark:text-slate-100 tracking-tight">
                Published Quizzes
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                {quizzes.length} Total
              </span>
            </div>
            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
              Manage all published quizzes, student review permissions, and class performance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Search box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Topic filter */}
          {uniqueTopics.length > 0 && (
            <select
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="all">All Topics ({quizzes.length})</option>
              {uniqueTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}

          {/* Refresh button */}
          {fetchQuizzesAndStats && (
            <button
              onClick={() => fetchQuizzesAndStats()}
              disabled={isLoadingQuizzes}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700 transition cursor-pointer"
              title="Refresh Quizzes"
            >
              <RefreshCw
                className={`w-4 h-4 ${isLoadingQuizzes ? "animate-spin" : ""}`}
              />
            </button>
          )}

          {/* Action Buttons Group (Create Quiz & Clear All) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Create Quiz Button */}
            <button
              type="button"
              onClick={() => handleNavClick("add-quiz")}
              className="group relative flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-[#166534] hover:from-emerald-500 hover:via-emerald-600 hover:to-[#14532d] text-white text-xs font-extrabold rounded-xl shadow-xs hover:shadow-md border border-emerald-400/30 transition-all cursor-pointer active:scale-95"
              title="Create and publish a new quiz"
            >
              <span className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="tracking-wide">Create Quiz</span>
            </button>

            {/* Clear All Quizzes Button */}
            {handleClearAllQuizzes && quizzes.length > 0 && (
              <button
                type="button"
                onClick={() => setIsConfirmClearAllOpen(true)}
                className="group flex items-center gap-2 px-3 py-1.5 bg-rose-50/90 hover:bg-rose-100 dark:bg-rose-950/50 dark:hover:bg-rose-900/70 text-rose-700 dark:text-rose-300 text-xs font-bold rounded-xl border border-rose-200/90 dark:border-rose-800/80 hover:border-rose-300 dark:hover:border-rose-700 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                title="Delete all published quizzes"
              >
                <span className="w-5 h-5 rounded-lg bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Trash2 className="w-3.5 h-3.5" />
                </span>
                <span className="tracking-wide">Clear All Quizzes</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Student Unlock Requests Banner */}
      {unlockRequests.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/80 rounded-2xl p-4 sm:p-5 shadow-xs"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-black text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Student Quiz Unlock Requests ({unlockRequests.length})</span>
            </div>
            <span className="text-xs text-amber-700 dark:text-amber-300 font-semibold">
              Locked due to Alt-Tab / Window Switching violations
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {unlockRequests.map((req) => (
              <div
                key={`${req.quizId}_${req.studentKey}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-amber-200 dark:border-slate-700 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-gray-900 dark:text-gray-100">
                      {req.studentName}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                      {req.studentKey}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    Quiz:{" "}
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      {req.quizTitle}
                    </span>
                    {" • "}Requested{" "}
                    {new Date(req.requestedAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    adminUnlockQuiz(req.quizId, req.studentKey);
                    setToastMessage(
                      `Unlocked quiz "${req.quizTitle}" for student ${req.studentName}!`
                    );
                  }}
                  className="px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Approve & Unlock</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Floating / Sticky Bulk Action Bar for Selected Quizzes */}
      {selectedQuizIds.size > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold">
              {selectedQuizIds.size}
            </span>
            <span className="text-xs font-bold text-emerald-900 dark:text-emerald-100">
              {selectedQuizIds.size === 1 ? "1 quiz selected" : `${selectedQuizIds.size} quizzes selected`}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              disabled={isUpdatingBulk}
              onClick={() => setReviewConfirmState({ type: "bulk", action: "allow", quizIds: Array.from(selectedQuizIds) })}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
              title="Allow review for selected quizzes so students can see correct answers"
            >
              {isUpdatingBulk ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
              <span>{isUpdatingBulk ? "Updating..." : `Allow Review (${selectedQuizIds.size})`}</span>
            </button>
            <button
              type="button"
              disabled={isUpdatingBulk}
              onClick={() => setReviewConfirmState({ type: "bulk", action: "lock", quizIds: Array.from(selectedQuizIds) })}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
              title="Lock review for selected quizzes so students cannot see correct answers"
            >
              {isUpdatingBulk ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Lock className="w-3.5 h-3.5" />
              )}
              <span>{isUpdatingBulk ? "Updating..." : `Lock Review (${selectedQuizIds.size})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedQuizIds(new Set())}
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition cursor-pointer"
            >
              Deselect All
            </button>
          </div>
        </motion.div>
      )}

      {/* 2. Quizzes Table (matching User's Reference Screenshot) */}
      {filteredQuizzes.length === 0 ? (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
          <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
            <BarChart3 className="w-6 h-6 stroke-[1.8]" />
          </div>
          <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
            {quizzes.length === 0 ? "No Quizzes Published Yet" : "No Matching Quizzes Found"}
          </h4>
          <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
            {quizzes.length === 0
              ? "Create and publish a quiz to start tracking student scores, answers, and analytics."
              : "Try adjusting your search query or topic filter."}
          </p>
          {quizzes.length === 0 && (
            <button
              onClick={() => handleNavClick("add-quiz")}
              className="mt-4 px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Add Your First Quiz
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[1080px]">
              <thead>
                <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                  <th className="pb-3.5 px-3 w-10 text-center">
                    <input
                      type="checkbox"
                      aria-label="Select all quizzes"
                      checked={
                        filteredQuizzes.length > 0 &&
                        selectedQuizIds.size === filteredQuizzes.length
                      }
                      onChange={handleToggleSelectAll}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                    />
                  </th>
                  <th className="pb-3.5 px-4 min-w-[280px]">Quiz Title</th>
                  <th className="pb-3.5 px-4 whitespace-nowrap">Grading Label</th>
                  <th className="pb-3.5 px-4 whitespace-nowrap">Topic</th>
                  <th className="pb-3.5 px-4 text-center whitespace-nowrap">Questions</th>
                  <th className="pb-3.5 px-4 whitespace-nowrap">Published Date</th>
                  <th className="pb-3.5 px-4 text-center whitespace-nowrap">Student Review</th>
                  <th className="pb-3.5 px-4 text-right whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                {filteredQuizzes.map((quiz) => {
                  const isSelected = selectedQuizIds.has(quiz.id);
                  return (
                  <tr
                    key={quiz.id}
                    className={`transition-colors duration-150 ${
                      isSelected
                        ? "bg-emerald-50/60 dark:bg-emerald-950/30"
                        : "hover:bg-gray-50/80 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-4 px-3 text-center align-middle">
                      <input
                        type="checkbox"
                        aria-label={`Select quiz ${quiz.title}`}
                        checked={isSelected}
                        onChange={() => handleToggleSelectQuiz(quiz.id)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                      />
                    </td>

                    {/* Quiz Title */}
                    <td className="py-4 px-4 font-semibold text-[#111827] dark:text-slate-100 align-middle">
                      <span className="line-clamp-2">{quiz.title}</span>
                    </td>

                    {/* Grading Label */}
                    <td className="py-4 px-4 text-xs font-semibold align-middle whitespace-nowrap">
                      <div className="flex flex-col gap-1 items-start">
                        {quiz.quizNumber ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-[#166534] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Quiz {quiz.quizNumber}
                            {quiz.topic?.match(/\[([^\]]+)\]/) ? (
                              <span className="text-gray-400 dark:text-slate-500 font-normal">
                                ({quiz.topic.match(/\[([^\]]+)\]/)?.[1]})
                              </span>
                            ) : null}
                          </span>
                        ) : (
                          <span className="text-gray-400 dark:text-slate-500 italic text-[11px]">
                            Unassigned
                          </span>
                        )}

                        {/* Grading Period Badge */}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          (quiz.period || "prelim") === "prelim"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                            : (quiz.period || "prelim") === "midterm"
                            ? "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                            : (quiz.period || "prelim") === "semi-final"
                            ? "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                            : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        }`}>
                          {quiz.period === "semi-final"
                            ? "Semi-Final"
                            : quiz.period === "midterm"
                            ? "Midterm"
                            : quiz.period === "final"
                            ? "Final"
                            : "Prelim"}
                        </span>
                      </div>
                    </td>

                    {/* Topic */}
                    <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle whitespace-nowrap">
                      <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2.5 py-1 rounded-md font-medium inline-block">
                        {quiz.topic || "General"}
                      </span>
                    </td>

                    {/* Questions Count */}
                    <td className="py-4 px-4 text-xs font-medium text-[#4B5563] dark:text-slate-300 align-middle text-center whitespace-nowrap">
                      {quiz.questionsCount || quiz.questions?.length || 0}
                    </td>

                    {/* Published Date */}
                    <td className="py-4 px-4 text-xs text-[#6B7280] dark:text-slate-400 align-middle whitespace-nowrap">
                      {quiz.createdAt || "Recent"}
                    </td>

                    {/* Student Review Toggle */}
                    <td className="py-4 px-4 align-middle text-center whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setReviewConfirmState({ type: "single", action: quiz.allowReview ? "lock" : "allow", quiz })}
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

                    {/* Actions */}
                    <td className="py-4 px-4 text-right align-middle whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <button
                          type="button"
                          disabled={deletingQuizId === quiz.id}
                          onClick={() => setQuizToDelete(quiz)}
                          className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-500 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-transparent dark:border-slate-700/60 transition cursor-pointer"
                          title="Delete Quiz"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* ========================================================================= */}
      {/* CUSTOM CONFIRMATION MODAL: Clear All Published Quizzes */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isConfirmClearAllOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-gray-100 dark:border-slate-800 p-6 sm:p-7 max-w-md w-full shadow-2xl relative overflow-hidden space-y-5"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-red-500 to-rose-600" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => !isClearingAll && setIsConfirmClearAllOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 shadow-xs">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div className="space-y-1 pr-4">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Clear All Quizzes?
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    Are you sure you want to delete all <strong className="text-gray-800 dark:text-slate-200 font-bold">{quizzes.length} published quizzes</strong>? This will permanently remove all student submissions and class attempt records.
                  </p>
                </div>
              </div>

              {/* Danger Callout Warning */}
              <div className="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <p className="text-[11px] font-semibold text-rose-800 dark:text-rose-300 leading-snug">
                  This action is permanent and cannot be undone. All quiz content and student scores will be erased.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  disabled={isClearingAll}
                  onClick={() => setIsConfirmClearAllOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isClearingAll}
                  onClick={executeClearAll}
                  className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/30 transition flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isClearingAll ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Clearing...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Yes, Clear Everything</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* CUSTOM CONFIRMATION MODAL: Delete Single Quiz */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {quizToDelete && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-gray-100 dark:border-slate-800 p-6 sm:p-7 max-w-md w-full shadow-2xl relative overflow-hidden space-y-5"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 to-red-600" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => !isDeletingSingle && setQuizToDelete(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 shadow-xs">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div className="space-y-1 pr-4">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Delete Quiz?
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    Are you sure you want to delete <strong className="text-gray-900 dark:text-slate-100">{quizToDelete.title}</strong>? All student attempts for this quiz will also be removed.
                  </p>
                </div>
              </div>

              {/* Danger Callout Warning */}
              <div className="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <p className="text-[11px] font-semibold text-rose-800 dark:text-rose-300 leading-snug">
                  This action cannot be undone. Student scores and attempts for this quiz will be deleted.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  disabled={isDeletingSingle}
                  onClick={() => setQuizToDelete(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isDeletingSingle}
                  onClick={executeDeleteSingleQuiz}
                  className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/30 transition flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isDeletingSingle ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Yes, Delete Quiz</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* CUSTOM CONFIRMATION MODAL: Allow / Lock Student Review */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {reviewConfirmState && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-[#161F30] rounded-3xl border border-gray-100 dark:border-slate-800 p-6 sm:p-7 max-w-md w-full shadow-2xl relative overflow-hidden space-y-5"
            >
              {/* Top Accent Strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  reviewConfirmState.action === "allow"
                    ? "bg-gradient-to-r from-emerald-500 via-emerald-600 to-[#166534]"
                    : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"
                }`}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => !isUpdatingReviewConfirm && setReviewConfirmState(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                    reviewConfirmState.action === "allow"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-[#166534] dark:text-emerald-400"
                      : "bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {reviewConfirmState.action === "allow" ? (
                    <Eye className="w-6 h-6" />
                  ) : (
                    <Lock className="w-6 h-6" />
                  )}
                </div>
                <div className="space-y-1 pr-4">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {reviewConfirmState.action === "allow"
                      ? reviewConfirmState.type === "bulk"
                        ? `Allow Review for ${reviewConfirmState.quizIds?.length} Quizzes?`
                        : "Allow Student Review?"
                      : reviewConfirmState.type === "bulk"
                      ? `Lock Review for ${reviewConfirmState.quizIds?.length} Quizzes?`
                      : "Lock Student Review?"}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {reviewConfirmState.type === "single" && reviewConfirmState.quiz ? (
                      reviewConfirmState.action === "allow" ? (
                        <>
                          Are you sure you want to allow student review for{" "}
                          <strong className="text-gray-900 dark:text-slate-100 font-bold">
                            {reviewConfirmState.quiz.title}
                          </strong>
                          ? Students who completed this quiz will be able to view correct answers and explanations.
                        </>
                      ) : (
                        <>
                          Are you sure you want to lock student review for{" "}
                          <strong className="text-gray-900 dark:text-slate-100 font-bold">
                            {reviewConfirmState.quiz.title}
                          </strong>
                          ? Correct answers and explanations will be hidden from students until re-allowed.
                        </>
                      )
                    ) : reviewConfirmState.action === "allow" ? (
                      <>
                        Are you sure you want to allow student review for all{" "}
                        <strong className="text-gray-900 dark:text-slate-100 font-bold">
                          {reviewConfirmState.quizIds?.length} selected quizzes
                        </strong>
                        ? Students will be able to review their answers.
                      </>
                    ) : (
                      <>
                        Are you sure you want to lock student review for all{" "}
                        <strong className="text-gray-900 dark:text-slate-100 font-bold">
                          {reviewConfirmState.quizIds?.length} selected quizzes
                        </strong>
                        ? Correct answers will be hidden from students.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Informational Callout Banner */}
              <div
                className={`p-3 rounded-2xl flex items-start gap-2.5 ${
                  reviewConfirmState.action === "allow"
                    ? "bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60"
                    : "bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60"
                }`}
              >
                {reviewConfirmState.action === "allow" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 leading-snug">
                      Students will immediately gain permission to inspect their submissions and study correct solutions.
                    </p>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 leading-snug">
                      Correct answers will remain locked to protect exam integrity and prevent answers from leaking.
                    </p>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  disabled={isUpdatingReviewConfirm}
                  onClick={() => setReviewConfirmState(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isUpdatingReviewConfirm}
                  onClick={executeConfirmReviewToggle}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black text-white transition flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50 shadow-md ${
                    reviewConfirmState.action === "allow"
                      ? "bg-[#166534] hover:bg-[#14532d] shadow-emerald-900/20"
                      : "bg-amber-600 hover:bg-amber-700 shadow-amber-600/20"
                  }`}
                >
                  {isUpdatingReviewConfirm ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Updating...</span>
                    </>
                  ) : reviewConfirmState.action === "allow" ? (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Yes, Allow Review</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Yes, Lock Review</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
