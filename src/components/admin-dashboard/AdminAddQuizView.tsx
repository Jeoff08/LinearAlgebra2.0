import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wand2,
  ClipboardList,
  Layers,
  TrendingUp,
  Zap,
  Search,
  CheckSquare,
  Square,
  FileQuestion,
  Lightbulb,
  ListOrdered,
  Calculator,
  X,
  Plus,
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  RefreshCw,
  AlertCircle,
  Trash2,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import type {
  QuizItem,
  QuizQuestionDraft,
  QuizQuestionType,
  QuizSection,
} from "../../types/dashboard";

interface AdminAddQuizViewProps {
  generatorStep: 1 | 2;
  setGeneratorStep: (s: 1 | 2) => void;
  newQuizQuestionDrafts: QuizQuestionDraft[];
  isPublishedQuizzesDrawerOpen: boolean;
  setIsPublishedQuizzesDrawerOpen: (open: boolean) => void;
  quizzes: QuizItem[];
  generatorCategory: "linear-algebra" | "calculus-1" | "calculus-2";
  setGeneratorCategory: (cat: "linear-algebra" | "calculus-1" | "calculus-2") => void;
  selectedTopicIds: string[];
  setSelectedTopicIds: React.Dispatch<React.SetStateAction<string[]>>;
  availableGeneratorTopics: any[];
  handleSelectAllTopics: () => void;
  handleDeselectAllTopics: () => void;
  generatorTopicSearch: string;
  setGeneratorTopicSearch: (q: string) => void;
  handleToggleTopic: (id: string) => void;
  questionTypeSections: QuizSection[];
  setQuestionTypeSections: React.Dispatch<React.SetStateAction<QuizSection[]>>;
  generatorItemCount: number | "";
  setGeneratorItemCount: (cnt: number | "") => void;
  generatorPointsPerItem: number | "";
  setGeneratorPointsPerItem: (pts: number | "") => void;
  generatorQuestionType: QuizQuestionType;
  setGeneratorQuestionType: (t: QuizQuestionType) => void;
  showPublishedSuccess: boolean;
  publishedGSAPRef: React.RefObject<HTMLDivElement | null>;
  isShowingGenerateLoader: boolean;
  quizLoaderLogo: string;
  isGeneratingQuiz: boolean;
  handleGenerateQuiz: () => void;
  newQuizTopic: string;
  showAdminAnswers: boolean;
  setShowAdminAnswers: (show: boolean) => void;
  handleRegenerateAllQuestions: () => void;
  newQuizTitle: string;
  setNewQuizTitle: (title: string) => void;
  handleRegenerateQuestion: (index: number) => void;
  updateQuestionDraft: (
    id: string,
    field: keyof QuizQuestionDraft,
    value: any
  ) => void;
  isSubmittingQuiz: boolean;
  handleCreateQuiz: () => void;
  isLoadingQuizzes: boolean;
  adminReviewQuizModal: QuizItem | null;
  setAdminReviewQuizModal: (q: QuizItem | null) => void;
  handleDeleteQuiz: (id: string) => void;
  availableSubjects?: Array<{ id: string; subjectCode: string; offerNumber: string; subjectName: string }>;
  selectedSubjectId?: string;
  setSelectedSubjectId?: (id: string) => void;
  selectedGradingPeriod?: "prelim" | "midterm" | "semi-final" | "final";
  setSelectedGradingPeriod?: (p: "prelim" | "midterm" | "semi-final" | "final") => void;
}

export const AdminAddQuizView: React.FC<AdminAddQuizViewProps> = ({
  generatorStep,
  setGeneratorStep,
  newQuizQuestionDrafts,
  isPublishedQuizzesDrawerOpen,
  setIsPublishedQuizzesDrawerOpen,
  quizzes,
  generatorCategory,
  setGeneratorCategory,
  selectedTopicIds,
  setSelectedTopicIds,
  availableGeneratorTopics,
  handleSelectAllTopics,
  handleDeselectAllTopics,
  generatorTopicSearch,
  setGeneratorTopicSearch,
  handleToggleTopic,
  questionTypeSections,
  setQuestionTypeSections,
  generatorItemCount,
  setGeneratorItemCount,
  generatorPointsPerItem,
  setGeneratorPointsPerItem,
  generatorQuestionType,
  setGeneratorQuestionType,
  showPublishedSuccess,
  publishedGSAPRef,
  isShowingGenerateLoader,
  quizLoaderLogo,
  isGeneratingQuiz,
  handleGenerateQuiz,
  newQuizTopic,
  showAdminAnswers,
  setShowAdminAnswers,
  handleRegenerateAllQuestions,
  newQuizTitle,
  setNewQuizTitle,
  handleRegenerateQuestion,
  updateQuestionDraft,
  isSubmittingQuiz,
  handleCreateQuiz,
  isLoadingQuizzes,
  adminReviewQuizModal,
  setAdminReviewQuizModal,
  handleDeleteQuiz,
  availableSubjects = [],
  selectedSubjectId = "",
  setSelectedSubjectId,
  selectedGradingPeriod = "prelim",
  setSelectedGradingPeriod,
}) => {
  // Determine allowed category when a subject is selected
  const activeSubject = availableSubjects.find((s) => s.id === selectedSubjectId);
  const activeSubjectCode = (activeSubject?.subjectCode || "").toUpperCase();
  const isCalculusSubject = activeSubjectCode.includes("101") || activeSubjectCode.includes("102");
  const isLinearAlgebraSubject = activeSubjectCode.includes("103");
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Top Banner */}
      <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#166534]/25 border border-white/20">
              <Wand2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Generate & Publish Quiz
              </h2>
            </div>
          </div>
        </div>

        {/* Step Navigation Bar & Published Quizzes Button */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setGeneratorStep(1)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                generatorStep === 1
                  ? "bg-[#166534] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                1
              </span>
              <span>1. Choose Topics & Format</span>
            </button>

            <div className="w-6 h-0.5 bg-gray-200 hidden sm:block" />

            <button
              type="button"
              disabled={newQuizQuestionDrafts.length === 0}
              onClick={() => setGeneratorStep(2)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                generatorStep === 2
                  ? "bg-[#166534] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                2
              </span>
              <span>2. Review Answers & Publish</span>
              {newQuizQuestionDrafts.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                  {newQuizQuestionDrafts.length}
                </span>
              )}
            </button>
          </div>

          {/* Published Quizzes Button */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsPublishedQuizzesDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-[#166534] dark:hover:border-emerald-500 bg-white dark:bg-slate-800 hover:bg-[#166534]/10 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs"
              title="Published Quizzes"
            >
              <ClipboardList className="w-4 h-4 text-[#166534] shrink-0" />
              <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                Published Quizzes
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-[#166534] text-white shadow-xs shrink-0">
                {quizzes.length}
              </span>
            </button>
            <div className="absolute -bottom-8 right-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md whitespace-nowrap z-30">
              Published Quizzes ({quizzes.length})
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* ================================================================= */}
        {/* STEP 1: CATEGORY, TOPICS, AND SETTINGS                           */}
        {/* ================================================================= */}
        {generatorStep === 1 && (
          <div className="space-y-6">
            {/* Subject Selector Section */}
            {availableSubjects && availableSubjects.length > 0 && (
              <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                      <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                        Target Subject / Course
                      </h3>
                    </div>
                    <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
                      Select which enrolled class section and grading sheet this quiz is for.
                    </p>
                  </div>
                  {selectedSubjectId && (
                    <span className="text-[11px] font-bold text-[#166534] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-xl self-start sm:self-auto">
                      Connected to Grading Sheet
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                  {availableSubjects.map((subj) => {
                    const isSelected = selectedSubjectId === subj.id;
                    const label = `${subj.subjectCode} - ${subj.offerNumber}`;
                    return (
                      <button
                        key={subj.id}
                        type="button"
                        onClick={() => setSelectedSubjectId && setSelectedSubjectId(subj.id)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                            : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-wide ${
                            isSelected
                              ? "bg-[#166534] text-white"
                              : "bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200"
                          }`}>
                            {label}
                          </span>
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                            isSelected
                              ? "bg-[#166534] text-white"
                              : "border border-gray-300 dark:border-slate-500 text-transparent"
                          }`}>
                            ✓
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-[#111827] dark:text-slate-100 truncate mt-1">
                          {subj.subjectName}
                        </h4>
                        <span className="text-[10px] text-gray-500 dark:text-slate-400 mt-1">
                          Offer No. {subj.offerNumber}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Grading Period Picker */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700/60">
                  <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-2 uppercase tracking-wide">
                    Grading Period
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: "prelim", label: "Prelim" },
                      { key: "midterm", label: "Midterm" },
                      { key: "semi-final", label: "Semi-Final" },
                      { key: "final", label: "Final" },
                    ].map((period) => {
                      const isSelected = selectedGradingPeriod === period.key;
                      return (
                        <button
                          key={period.key}
                          type="button"
                          onClick={() => setSelectedGradingPeriod && setSelectedGradingPeriod(period.key as any)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? "bg-[#166534] text-white border-[#166534] shadow-xs"
                              : "bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-600"
                          }`}
                        >
                          <span>{period.label}</span>
                          {isSelected && <span className="text-[10px]">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Category Selection Cards */}
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                  Step 1: Select Math Category
                </h3>
                <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
                  Pick the primary course domain to load all associated curriculum topics.
                </p>
              </div>

              <div className={`grid gap-3.5 pt-1 ${
                isCalculusSubject || isLinearAlgebraSubject
                  ? "grid-cols-1 max-w-sm"
                  : "grid-cols-1 sm:grid-cols-2 max-w-xl"
              }`}>
                {/* Card 1: Linear Algebra */}
                {!isCalculusSubject && (
                  <button
                    type="button"
                    onClick={() => {
                      setGeneratorCategory("linear-algebra");
                      setSelectedTopicIds([]);
                    }}
                    className={`p-4.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      generatorCategory === "linear-algebra"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                        <Layers className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                        28 Topics
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                      Linear Algebra
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-snug">
                      Matrices, determinants, eigenvalues, vector spaces, and transformations.
                    </p>
                  </button>
                )}

                {/* Card 2: Calculus 1 & 2 */}
                {!isLinearAlgebraSubject && (
                  <button
                    type="button"
                    onClick={() => {
                      setGeneratorCategory("calculus-1");
                      setSelectedTopicIds([]);
                    }}
                    className={`p-4.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      generatorCategory === "calculus-1" || generatorCategory === "calculus-2"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                        60+ Topics
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                      Calculus 1 & 2
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-snug">
                      Limits, derivatives, integrals, series, and analytic geometry.
                    </p>
                  </button>
                )}
              </div>
            </div>

            {/* Topic Selection Grid */}
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                    Step 2: Choose Topics
                  </h3>
                  <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
                    Select one, several, or all topics to include in this quiz generation.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSelectAllTopics}
                    className="px-2.5 py-1 text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-emerald-950/40 rounded-lg transition cursor-pointer"
                  >
                    Select All ({availableGeneratorTopics.length})
                  </button>
                  <span className="text-gray-300 dark:text-slate-600">•</span>
                  <button
                    type="button"
                    onClick={handleDeselectAllTopics}
                    className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition cursor-pointer"
                  >
                    Clear
                  </button>
                  <span className="text-xs font-bold text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    {selectedTopicIds.length} Selected
                  </span>
                </div>
              </div>

              {/* Topic Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search topics by keyword (e.g. matrices, chain rule, series)..."
                  value={generatorTopicSearch}
                  onChange={(e) => setGeneratorTopicSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 focus:border-[#166534] dark:focus:border-emerald-500"
                />
              </div>

              {/* Topics Grid with Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                {availableGeneratorTopics.map((topic) => {
                  const isChecked = selectedTopicIds.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      onClick={() => handleToggleTopic(topic.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#166534] dark:border-emerald-500 bg-[#166534]/10 dark:bg-emerald-950/40 ring-1 ring-[#166534] dark:ring-emerald-500"
                          : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800/50 bg-white dark:bg-slate-800/20"
                      }`}
                    >
                      <div className="pt-0.5 text-[#166534] dark:text-emerald-400">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-bold text-gray-400 dark:text-slate-400 block truncate">
                            {topic.chapter}
                          </span>
                          {topic.categoryLabel && (
                            <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300">
                              {topic.categoryLabel}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100 truncate mt-0.5">
                          {topic.title}
                        </h5>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {topic.summary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quiz Settings: Question Type and Count */}
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5">
              <div>
                <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                  Step 3: Question Sections
                </h3>
                <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
                  Configure each question type section. Set the items and points, pick a type, then click
                  <span className="font-semibold text-[#166534]"> + Add Section</span>. Add as many sections as you like!
                </p>
              </div>

              {/* Saved Sections List */}
              {questionTypeSections.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#374151] uppercase tracking-wide">
                      Saved Sections ({questionTypeSections.length})
                    </p>
                    <button
                      type="button"
                      onClick={() => setQuestionTypeSections([])}
                      className="text-[10px] font-semibold text-red-500 hover:text-red-700 transition cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {questionTypeSections.map((sec, idx) => {
                      const typeIcons: Record<string, React.ReactNode> = {
                        multiple_choice: <FileQuestion className="w-3.5 h-3.5" />,
                        identification: <Lightbulb className="w-3.5 h-3.5" />,
                        enumeration: <ListOrdered className="w-3.5 h-3.5" />,
                        problem_solving: <Calculator className="w-3.5 h-3.5" />,
                      };
                      const typeLabels: Record<string, string> = {
                        multiple_choice: "Multiple Choice",
                        identification: "Identification",
                        enumeration: "Enumeration",
                        problem_solving: "Problem Solving",
                      };
                      const sectionTotal = sec.itemCount * sec.pointsPerItem;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] border border-[#bbf7d0] rounded-2xl px-4 py-2.5"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <div className="text-[#166534] flex-shrink-0">
                            {typeIcons[sec.type]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#166534] truncate">
                              {typeLabels[sec.type]}
                            </p>
                            <p className="text-[10px] text-[#15803d]/70">
                              {sec.itemCount} items · {sec.pointsPerItem}{" "}
                              {sec.pointsPerItem === 1 ? "pt" : "pts"}/item ·{" "}
                              {sectionTotal} pts total
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setQuestionTypeSections((prev) =>
                                prev.filter((_, i) => i !== idx)
                              )
                            }
                            className="flex-shrink-0 p-1 rounded-lg hover:bg-red-100 text-red-400 hover:text-red-600 transition cursor-pointer"
                            title="Remove section"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/* Overall total */}
                  <div className="flex items-center justify-between px-1 pt-1">
                    <p className="text-xs text-gray-500">
                      Total:{" "}
                      <span className="font-bold text-[#111827]">
                        {questionTypeSections.reduce(
                          (s, sec) => s + sec.itemCount,
                          0
                        )}{" "}
                        questions
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Grand Total:{" "}
                      <span className="font-bold text-[#166534]">
                        {questionTypeSections.reduce(
                          (s, sec) => s + sec.itemCount * sec.pointsPerItem,
                          0
                        )}{" "}
                        pts
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* Divider when sections exist */}
              {questionTypeSections.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                    Add Another Section
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
              )}

              {/* Number of Items Selector */}
              <div>
                <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 mb-2 uppercase tracking-wide">
                  Number of Items (Questions)
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {[5, 10, 15, 20].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setGeneratorItemCount(cnt)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        generatorItemCount === cnt
                          ? "bg-[#166534] text-white shadow-xs"
                          : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-slate-200"
                      }`}
                    >
                      {cnt} Items
                    </button>
                  ))}

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                      Custom:
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 8"
                      value={generatorItemCount}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        if (val === "") {
                          setGeneratorItemCount("");
                        } else {
                          const parsed = parseInt(val, 10);
                          setGeneratorItemCount(Math.min(50, parsed));
                        }
                      }}
                      onBlur={() => {
                        if (
                          generatorItemCount === "" ||
                          generatorItemCount < 1
                        ) {
                          setGeneratorItemCount(1);
                        }
                      }}
                      className="w-20 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-bold text-gray-800 dark:text-slate-100 text-center focus:outline-none focus:ring-2 focus:ring-[#166534] focus:bg-white dark:focus:bg-slate-700 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Points Per Item Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 uppercase tracking-wide">
                    Points Per Item
                  </label>
                  <span className="text-xs font-semibold text-[#166534] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-100">
                    Section Total:{" "}
                    {(typeof generatorItemCount === "number"
                      ? generatorItemCount
                      : 1) *
                      (typeof generatorPointsPerItem === "number"
                        ? generatorPointsPerItem
                        : 1)}{" "}
                    pts
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {[1, 2, 5, 10].map((pts) => (
                    <button
                      key={pts}
                      type="button"
                      onClick={() => setGeneratorPointsPerItem(pts)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        generatorPointsPerItem === pts
                          ? "bg-[#166534] text-white shadow-xs"
                          : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-slate-200"
                      }`}
                    >
                      {pts} {pts === 1 ? "pt" : "pts"}
                    </button>
                  ))}

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                      Custom:
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 3"
                      value={generatorPointsPerItem}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        if (val === "") {
                          setGeneratorPointsPerItem("");
                        } else {
                          const parsed = parseInt(val, 10);
                          setGeneratorPointsPerItem(Math.min(100, parsed));
                        }
                      }}
                      onBlur={() => {
                        if (
                          generatorPointsPerItem === "" ||
                          generatorPointsPerItem < 1
                        ) {
                          setGeneratorPointsPerItem(1);
                        }
                      }}
                      className="w-20 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-bold text-gray-800 dark:text-slate-100 text-center focus:outline-none focus:ring-2 focus:ring-[#166534] focus:bg-white dark:focus:bg-slate-700 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Question Type 4-card selector */}
              <div>
                <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 mb-2 uppercase tracking-wide">
                  Question Type for This Section
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Option 1: Multiple Choice */}
                  <button
                    type="button"
                    onClick={() => setGeneratorQuestionType("multiple_choice")}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      generatorQuestionType === "multiple_choice"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                      <FileQuestion className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                      Multiple Choice
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                      4 choices A, B, C, D with 1 correct option.
                    </p>
                  </button>

                  {/* Option 2: Identification */}
                  <button
                    type="button"
                    onClick={() => setGeneratorQuestionType("identification")}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      generatorQuestionType === "identification"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                      Identification
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Identify the exact mathematical term or formula.
                    </p>
                  </button>

                  {/* Option 3: Enumeration */}
                  <button
                    type="button"
                    onClick={() => setGeneratorQuestionType("enumeration")}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      generatorQuestionType === "enumeration"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                      <ListOrdered className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                      Enumeration
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                      List key properties, theorems, or steps.
                    </p>
                  </button>

                  {/* Option 4: Problem Solving */}
                  <button
                    type="button"
                    onClick={() => setGeneratorQuestionType("problem_solving")}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      generatorQuestionType === "problem_solving"
                        ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                      Problem Solving
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Problem only and then solve with full steps.
                    </p>
                  </button>
                </div>
              </div>

              {/* Add Section Button */}
              <button
                type="button"
                onClick={() => {
                  const count =
                    typeof generatorItemCount === "number" &&
                    generatorItemCount > 0
                      ? generatorItemCount
                      : 5;
                  const pts =
                    typeof generatorPointsPerItem === "number" &&
                    generatorPointsPerItem > 0
                      ? generatorPointsPerItem
                      : 1;
                  setQuestionTypeSections((prev) => [
                    ...prev,
                    {
                      type: generatorQuestionType,
                      itemCount: count,
                      pointsPerItem: pts,
                    },
                  ]);
                  // Reset to defaults for next section
                  setGeneratorItemCount(5);
                  setGeneratorPointsPerItem(1);
                  setGeneratorQuestionType("multiple_choice");
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-dashed border-[#166534]/40 hover:border-[#166534] hover:bg-green-50 dark:hover:bg-[#166534]/10 text-[#166534] dark:text-emerald-400 text-xs font-bold transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Section
              </button>

              {/* Published Success Overlay */}
              <AnimatePresence>
                {showPublishedSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 1.08,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/90 dark:bg-[#0B132B]/90 backdrop-blur-md"
                  >
                    <motion.div
                      ref={publishedGSAPRef}
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "backOut" },
                      }}
                      exit={{
                        scale: 0.75,
                        opacity: 0,
                        transition: { duration: 0.45, ease: "easeIn" },
                      }}
                      className="flex flex-col items-center gap-4"
                    >
                      {/* Green Check Circle */}
                      <div className="gsap-publish-circle w-24 h-24 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                          <CheckCircle2 className="gsap-publish-check w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="gsap-publish-text text-emerald-700 dark:text-emerald-400 text-2xl font-bold tracking-wide">
                        Published!
                      </h3>
                      <p className="gsap-publish-text text-emerald-600/80 dark:text-emerald-300/80 text-sm text-center max-w-[240px]">
                        Quiz is now live for students.
                      </p>
                      <p className="text-[11px] text-emerald-500/60 dark:text-emerald-400/60 mt-1">
                        This message will close automatically...
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quiz Generation Loading Overlay */}
              <AnimatePresence>
                {isShowingGenerateLoader && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/85 dark:bg-[#0B132B]/85 backdrop-blur-md"
                  >
                    {/* Spinning ring */}
                    <div className="relative w-28 h-28 mb-6">
                      <div className="absolute inset-0 rounded-full border-4 border-[#166534]/10" />
                      <div className="absolute inset-0 rounded-full border-4 border-t-[#166534] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                      <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-[#15803d]/60 border-b-transparent border-l-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={quizLoaderLogo}
                          alt="Loading"
                          className="w-14 h-14 object-contain animate-pulse"
                        />
                      </div>
                    </div>
                    {/* Text */}
                    <h3 className="text-[#166534] dark:text-emerald-400 text-xl font-bold tracking-wide mb-1">
                      Generating Quiz
                    </h3>
                    <p className="text-[#166534]/60 dark:text-emerald-300/70 text-sm mb-6">
                      Crafting your questions, please wait...
                    </p>
                    {/* Animated dots bar */}
                    <div className="flex gap-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-[#166534] dark:bg-emerald-400"
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Big Action: Generate Quiz Button */}
              <div className="pt-2">
                <button
                  type="button"
                  disabled={isGeneratingQuiz}
                  onClick={handleGenerateQuiz}
                  className="w-full py-3.5 bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d] hover:opacity-95 text-white rounded-2xl text-sm font-bold shadow-md shadow-[#166534]/20 transition flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isGeneratingQuiz ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Questions from Topics...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>
                        Generate
                        {questionTypeSections.length > 0
                          ? ` ${questionTypeSections.reduce(
                              (s, sec) => s + sec.itemCount,
                              0
                            )}-Item Mixed`
                          : ` ${generatorItemCount || 1}-Item`}{" "}
                        Quiz with Answers
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-gray-400 mt-2">
                  {questionTypeSections.length > 0
                    ? `${questionTypeSections.length} section${
                        questionTypeSections.length > 1 ? "s" : ""
                      } · ${questionTypeSections.reduce(
                        (s, sec) => s + sec.itemCount * sec.pointsPerItem,
                        0
                      )} total pts · Questions generated with full answers for admin verification.`
                    : "Questions will be generated with full answers displayed for admin verification."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 2: REVIEW QUESTIONS, ADMIN ANSWER KEY & PUBLISH             */}
        {/* ================================================================= */}
        {generatorStep === 2 && (
          <div className="space-y-6">
            {/* Step 2 Header & Quiz Title */}
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
                    {newQuizTopic} • {newQuizQuestionDrafts.length} Questions
                  </span>
                  <h3 className="text-lg font-extrabold text-[#111827] mt-1">
                    Review Generated Quiz & Answer Key
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAdminAnswers(!showAdminAnswers)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      showAdminAnswers
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {showAdminAnswers ? (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Answers Visible</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Answers Hidden</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRegenerateAllQuestions}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Regenerate All</span>
                  </button>
                </div>
              </div>

              {/* Quiz Title Input */}
              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                  Quiz Title (Students will see this)
                </label>
                <input
                  type="text"
                  required
                  value={newQuizTitle}
                  onChange={(e) => setNewQuizTitle(e.target.value)}
                  placeholder="e.g. Linear Algebra: Matrix Operations Quiz 1"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#166534] focus:border-[#166534]"
                />
              </div>

              {/* Target Subject Selector in Step 2 */}
              {availableSubjects && availableSubjects.length > 0 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#166534]" />
                      <span>Grading Sheet Subject Connection</span>
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {availableSubjects.map((subj) => {
                        const isSelected = selectedSubjectId === subj.id;
                        const label = `${subj.subjectCode} - ${subj.offerNumber}`;
                        return (
                          <button
                            key={subj.id}
                            type="button"
                            onClick={() => setSelectedSubjectId && setSelectedSubjectId(subj.id)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                              isSelected
                                ? "bg-[#166534] text-white border-[#166534] shadow-xs"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200"
                            }`}
                          >
                            <span>{label}</span>
                            {isSelected && <span className="text-[10px]">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                      Grading Period
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { key: "prelim", label: "Prelim" },
                        { key: "midterm", label: "Midterm" },
                        { key: "semi-final", label: "Semi-Final" },
                        { key: "final", label: "Final" },
                      ].map((period) => {
                        const isSelected = selectedGradingPeriod === period.key;
                        return (
                          <button
                            key={period.key}
                            type="button"
                            onClick={() => setSelectedGradingPeriod && setSelectedGradingPeriod(period.key as any)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                              isSelected
                                ? "bg-[#166534] text-white border-[#166534] shadow-xs"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200"
                            }`}
                          >
                            <span>{period.label}</span>
                            {isSelected && <span className="text-[10px]">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Notice Banner */}
              <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border border-[#FEF3C7] flex items-start gap-3 text-xs text-[#92400E]">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#D97706] mt-0.5" />
                <div>
                  <strong className="font-bold">Admin-Only View:</strong> The
                  correct answers and solution explanations are displayed below
                  for your review. When published, answers remain strictly hidden
                  from students until they submit their quiz. Students are
                  limited to strictly 1 attempt with no redo.
                </div>
              </div>
            </div>

            {/* List of Generated Questions */}
            <div className="space-y-4">
              {newQuizQuestionDrafts.map((question, index) => {
                const qType = question.questionType || generatorQuestionType;
                return (
                  <div
                    key={question.id}
                    className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4"
                  >
                    {/* Question Card Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-lg bg-[#166534] text-white text-xs font-bold px-2.5 py-1">
                          Question {index + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                          {qType.replace("_", " ")}
                        </span>
                        {question.topicTitle && (
                          <span className="text-[10px] text-gray-400 dark:text-slate-400 font-medium">
                            Topic: {question.topicTitle}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRegenerateQuestion(index)}
                        className="px-2.5 py-1 text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-emerald-950/40 rounded-lg transition flex items-center gap-1 cursor-pointer"
                        title="Regenerate this question"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Regenerate</span>
                      </button>
                    </div>

                    {/* Prompt Input */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1.5">
                        Question Prompt
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={question.prompt}
                        onChange={(e) =>
                          updateQuestionDraft(
                            question.id,
                            "prompt",
                            e.target.value
                          )
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-gray-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 focus:border-[#166534] dark:focus:border-emerald-500 resize-y font-medium"
                      />
                    </div>

                    {/* MULTIPLE CHOICE TYPE UI */}
                    {qType === "multiple_choice" && (
                      <div className="space-y-3 pt-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(
                            [
                              ["optionA", "A"],
                              ["optionB", "B"],
                              ["optionC", "C"],
                              ["optionD", "D"],
                            ] as const
                          ).map(([field, letter]) => {
                            const isCorrect = question.correct === letter;
                            return (
                              <div
                                key={field}
                                className={`p-3 rounded-2xl border transition ${
                                  showAdminAnswers && isCorrect
                                    ? "border-emerald-500/70 dark:border-emerald-500/80 bg-emerald-50/80 dark:bg-emerald-950/30 ring-1 ring-emerald-500/50 dark:ring-emerald-500/40"
                                    : "border-gray-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/40"
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1.5">
                                  <label className="text-[11px] font-bold text-gray-700 dark:text-slate-200">
                                    Choice {letter}
                                  </label>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuestionDraft(
                                        question.id,
                                        "correct",
                                        letter
                                      )
                                    }
                                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition ${
                                      isCorrect
                                        ? "bg-emerald-600 dark:bg-emerald-600 text-white shadow-xs"
                                        : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                                    }`}
                                  >
                                    {isCorrect ? "✓ Correct" : "Mark Correct"}
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  required
                                  value={question[field]}
                                  onChange={(e) =>
                                    updateQuestionDraft(
                                      question.id,
                                      field,
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-2.5 py-1.5 rounded-lg text-xs transition focus:outline-none focus:ring-1 ${
                                    showAdminAnswers && isCorrect
                                      ? "bg-white/90 dark:bg-slate-900/90 border border-emerald-300 dark:border-emerald-800/80 text-gray-900 dark:text-slate-100 focus:ring-emerald-500"
                                      : "bg-gray-50 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-100 focus:ring-[#166534] dark:focus:ring-emerald-500"
                                  }`}
                                />
                              </div>
                            );
                          })}
                        </div>

                        {showAdminAnswers && question.explanation && (
                          <div className="p-3 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 dark:border-emerald-800/60 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 leading-relaxed">
                            <span className="font-bold text-emerald-800 dark:text-emerald-300">
                              Answer Explanation:{" "}
                            </span>
                            <span className="text-emerald-950 dark:text-emerald-200/90 font-medium">
                              {question.explanation}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* IDENTIFICATION TYPE UI */}
                    {qType === "identification" && (
                      <div className="space-y-3 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1.5">
                            Correct Answer / Identified Concept (Admin Answer
                            Key)
                          </label>
                          <input
                            type="text"
                            required
                            value={
                              question.correctAnswerText || question.optionA
                            }
                            onChange={(e) => {
                              updateQuestionDraft(
                                question.id,
                                "correctAnswerText",
                                e.target.value
                              );
                              updateQuestionDraft(
                                question.id,
                                "optionA",
                                e.target.value
                              );
                            }}
                            placeholder="e.g. Intermediate Value Theorem, or Determinant"
                            className="w-full px-3.5 py-2.5 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {showAdminAnswers && (
                          <div className="p-3 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-700 dark:text-slate-300">
                            <span className="font-bold">
                              Context / Explanation:{" "}
                            </span>
                            <input
                              type="text"
                              value={
                                question.explanation || question.optionB || ""
                              }
                              onChange={(e) =>
                                updateQuestionDraft(
                                  question.id,
                                  "explanation",
                                  e.target.value
                                )
                              }
                              placeholder="Explanation of this concept..."
                              className="w-full mt-1 px-2.5 py-1.5 bg-white dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 rounded-lg text-xs text-gray-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* ENUMERATION TYPE UI */}
                    {qType === "enumeration" && (
                      <div className="space-y-3 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1.5">
                            Items to Enumerate (Admin Answer Key)
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={
                              question.correctAnswerText || question.optionA
                            }
                            onChange={(e) => {
                              updateQuestionDraft(
                                question.id,
                                "correctAnswerText",
                                e.target.value
                              );
                              updateQuestionDraft(
                                question.id,
                                "optionA",
                                e.target.value
                              );
                            }}
                            placeholder="1. First item&#10;2. Second item&#10;3. Third item..."
                            className="w-full px-3.5 py-2.5 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 rounded-xl text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-y"
                          />
                        </div>

                        {showAdminAnswers && question.explanation && (
                          <div className="p-3 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-600 dark:text-slate-300">
                            <span className="font-bold">
                              Evaluation Criteria:{" "}
                            </span>
                            <span>{question.explanation}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* PROBLEM SOLVING TYPE UI */}
                    {qType === "problem_solving" && (
                      <div className="space-y-3 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1.5">
                            Final Solved Answer (Admin Answer Key)
                          </label>
                          <input
                            type="text"
                            required
                            value={
                              question.correctAnswerText || question.optionA
                            }
                            onChange={(e) => {
                              updateQuestionDraft(
                                question.id,
                                "correctAnswerText",
                                e.target.value
                              );
                              updateQuestionDraft(
                                question.id,
                                "optionA",
                                e.target.value
                              );
                            }}
                            placeholder="e.g. 12, or 2 and 5, or x e^x - e^x + C"
                            className="w-full px-3.5 py-2.5 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1.5">
                            Step-by-Step Solution (Shown to students after
                            submission)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              question.explanation || question.optionB || ""
                            }
                            onChange={(e) => {
                              updateQuestionDraft(
                                question.id,
                                "explanation",
                                e.target.value
                              );
                              updateQuestionDraft(
                                question.id,
                                "optionB",
                                e.target.value
                              );
                            }}
                            placeholder="Step 1...&#10;Step 2...&#10;Step 3..."
                            className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 resize-y"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sticky Publish Bar */}
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky bottom-6 z-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setGeneratorStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Topics</span>
                </button>

                <div className="hidden sm:flex flex-col text-xs text-gray-500 dark:text-slate-400">
                  <span className="font-bold text-gray-800 dark:text-slate-100">
                    {newQuizQuestionDrafts.length} Questions Ready
                  </span>
                  <span>Strictly 1 attempt allowed per student</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={isSubmittingQuiz}
                  onClick={handleCreateQuiz}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d] hover:opacity-95 disabled:opacity-60 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#166534]/20 transition flex items-center gap-2 cursor-pointer"
                >
                  {isSubmittingQuiz ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Publishing Live Quiz...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Publish Quiz to Students</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide-out Published Quizzes Drawer from Right */}
      <AnimatePresence>
        {isPublishedQuizzesDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPublishedQuizzesDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-lg sm:max-w-xl bg-white h-full shadow-2xl z-10 flex flex-col overflow-hidden border-l border-[#EAEBED]"
            >
              {/* Drawer Header */}
              <div className="bg-white border-b border-[#EAEBED] px-6 py-4 flex items-center justify-between shadow-xs shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shadow-xs">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black text-[#111827]">
                        Published Quizzes
                      </h3>
                      <span className="text-xs font-bold text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-lg">
                        {quizzes.length}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280]">
                      Live quizzes available to students • 1 attempt only
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPublishedQuizzesDrawerOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 overflow-y-auto flex-1 space-y-3">
                {isLoadingQuizzes ? (
                  <div className="py-16 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
                    <p className="text-xs text-[#6B7280]">Loading quizzes...</p>
                  </div>
                ) : quizzes.length === 0 ? (
                  <div className="py-16 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-3">
                      <ClipboardList className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <h4 className="text-sm font-bold text-[#111827]">
                      No quizzes published yet
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1 max-w-[240px]">
                      Generate a quiz using the form and publish it to show up
                      here.
                    </p>
                  </div>
                ) : (
                  quizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="rounded-2xl border border-[#EAEBED] bg-[#F9FAFB] hover:bg-white p-4 transition shadow-xs hover:border-[#D0D4DC] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-[#111827] truncate">
                            {quiz.title}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-[10px] font-bold text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
                              {quiz.topic}
                            </span>
                            {quiz.questionType && (
                              <span className="text-[10px] text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                                {quiz.questionType.replace("_", " ")}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setIsPublishedQuizzesDrawerOpen(false);
                              setAdminReviewQuizModal(quiz);
                            }}
                            title="View questions and answer key"
                            className="p-1.5 rounded-xl text-gray-600 hover:text-[#166534] hover:bg-green-50 border border-gray-200 transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Answers</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteQuiz(quiz.id)}
                            title="Delete Quiz"
                            className="p-1.5 rounded-xl text-gray-400 hover:text-green-600 hover:bg-green-50 border border-gray-200 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-200/60">
                        <span>
                          {quiz.questionsCount} question
                          {quiz.questionsCount === 1 ? "" : "s"}
                        </span>
                        <span>
                          {quiz.attempts} student attempt
                          {quiz.attempts === 1 ? "" : "s"}
                        </span>
                        <span>{quiz.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Admin Answer Key Preview for Published Quizzes */}
      <AnimatePresence>
        {adminReviewQuizModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
                    {adminReviewQuizModal.topic} • Admin Answer Key
                  </span>
                  <h3 className="text-lg font-extrabold text-[#111827] mt-1">
                    {adminReviewQuizModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setAdminReviewQuizModal(null)}
                  className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {adminReviewQuizModal.questions.map((q, idx) => (
                  <div
                    key={q.id || idx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#166534]">
                        Item {idx + 1}
                      </span>
                      <span className="font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Correct: {q.correctAnswerText || q.correct}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {q.prompt}
                    </p>
                    {(q.questionType === "multiple_choice" ||
                      (!q.questionType && q.optionB)) && (
                      <div className="grid grid-cols-2 gap-1.5 text-gray-600 pt-1">
                        <span>A: {q.optionA}</span>
                        <span>B: {q.optionB}</span>
                        <span>C: {q.optionC}</span>
                        <span>D: {q.optionD}</span>
                      </div>
                    )}
                    {q.explanation && (
                      <p className="text-gray-500 text-[11px] pt-1 border-t border-gray-200">
                        <span className="font-bold">Explanation: </span>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setAdminReviewQuizModal(null)}
                  className="px-4 py-2 bg-[#166534] text-white rounded-xl text-xs font-bold hover:bg-[#14532d] transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
