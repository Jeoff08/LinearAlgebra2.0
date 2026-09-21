import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  Layers,
  TrendingUp,
  Zap,
  ArrowLeft,
  ArrowRight,
  Calculator,
  Sparkles,
  BookMarked,
  CheckCircle2,
  Check,
  Copy,
  Play,
  X,
} from "lucide-react";
import type { UnifiedTopicItem } from "../../types/dashboard";
import { ALL_UNIFIED_TOPICS } from "../../data/unifiedTopicsRegistry";
import TopicContentRenderer from "../TopicContentRenderer";
import {
  getCalculusDefinitionForTopic,
  CalculusCalculator,
} from "../dashboardCalculators";
import { getLinearAlgebraDefinitionForTopic } from "../linearAlgebraCalculators";

interface TopicsViewProps {
  allTopics?: UnifiedTopicItem[];
  activeTopic: UnifiedTopicItem | null;
  setActiveTopic: (t: UnifiedTopicItem | null) => void;
  topicCategoryFilter: "all" | "linear-algebra" | "calculus-1" | "calculus-2";
  setTopicCategoryFilter: (
    cat: "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  ) => void;
  selectedChapterFilter: string;
  setSelectedChapterFilter: (ch: string) => void;
  topicSearchQuery: string;
  setTopicSearchQuery: (q: string) => void;
  globalSearchQuery?: string;
  isTopicCalculatorOpen: boolean;
  setIsTopicCalculatorOpen: (open: boolean) => void;
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  allTopics,
  activeTopic,
  setActiveTopic,
  topicCategoryFilter,
  setTopicCategoryFilter,
  selectedChapterFilter,
  setSelectedChapterFilter,
  topicSearchQuery,
  setTopicSearchQuery,
  globalSearchQuery = "",
  isTopicCalculatorOpen,
  setIsTopicCalculatorOpen,
}) => {
  const [loadedTopicExample, setLoadedTopicExample] = useState<{
    text: string;
    index: number;
  } | null>(null);
  const [topicCalcKey, setTopicCalcKey] = useState<number>(0);
  const [topicCopiedIdx, setTopicCopiedIdx] = useState<number | null>(null);

  const topicsList = useMemo(() => {
    return allTopics || ALL_UNIFIED_TOPICS;
  }, [allTopics]);

  const laTopicCount = useMemo(
    () => topicsList.filter((t) => t.category === "linear-algebra").length,
    [topicsList]
  );
  const c1TopicCount = useMemo(
    () => topicsList.filter((t) => t.category === "calculus-1").length,
    [topicsList]
  );
  const c2TopicCount = useMemo(
    () => topicsList.filter((t) => t.category === "calculus-2").length,
    [topicsList]
  );

  const filteredTopics = useMemo(() => {
    return topicsList.filter((top) => {
      const matchesCategory =
        topicCategoryFilter === "all" || top.category === topicCategoryFilter;

      const matchesChapter =
        selectedChapterFilter === "all" || top.chapter === selectedChapterFilter;

      const query = (topicSearchQuery || globalSearchQuery).toLowerCase().trim();
      if (!query) return matchesCategory && matchesChapter;

      return (
        matchesCategory &&
        matchesChapter &&
        (top.title.toLowerCase().includes(query) ||
          top.chapter.toLowerCase().includes(query) ||
          top.summary.toLowerCase().includes(query) ||
          top.details.toLowerCase().includes(query) ||
          top.categoryLabel.toLowerCase().includes(query))
      );
    });
  }, [
    topicsList,
    topicCategoryFilter,
    selectedChapterFilter,
    topicSearchQuery,
    globalSearchQuery,
  ]);

  return (
    <div className="flex flex-col gap-6">
      {activeTopic ? (
        /* Topic Details Reader View */
        <div
          className={`flex flex-col gap-4 transition-[padding] duration-300 ease-in-out ${
            isTopicCalculatorOpen ? "pr-6 lg:pr-[30rem] xl:pr-[34rem]" : ""
          }`}
        >
          <div className="flex items-center justify-between bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTopic(null)}
                className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>
                  {selectedChapterFilter !== "all"
                    ? "Back to Chapters"
                    : "Back to Topics"}
                </span>
              </button>
              <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-700 hidden sm:block" />
              <div>
                <h2 className="text-base font-bold text-[#1F242D] dark:text-slate-100">
                  {activeTopic.title}
                </h2>
                <span className="text-xs font-medium text-[#166534] dark:text-emerald-400">
                  {activeTopic.chapter} • {activeTopic.categoryLabel}
                </span>
              </div>
            </div>

            {/* Interactive Calculator Button inside banner */}
            {!isTopicCalculatorOpen &&
              (() => {
                const isLinear = activeTopic.category === "linear-algebra";
                const calcDef = isLinear
                  ? getLinearAlgebraDefinitionForTopic(activeTopic)
                  : getCalculusDefinitionForTopic(activeTopic);
                return (
                  <div className="relative group/topcalc flex items-center shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsTopicCalculatorOpen(true)}
                      className="relative flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 group/btn"
                      aria-label={calcDef.name}
                    >
                      <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover/btn:rotate-12 transition-transform">
                        <Calculator className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="hidden sm:inline-block max-w-0 group-hover/topcalc:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 ease-out opacity-0 group-hover/topcalc:opacity-100 text-white font-semibold pr-1">
                        {calcDef.name}
                      </span>
                      <span className="sm:hidden font-semibold">Calculator</span>
                    </button>

                    {/* Hover Tooltip Popup for Desktop */}
                    <div className="absolute right-0 top-full mt-2 hidden sm:group-hover/topcalc:flex flex-col items-end z-50 pointer-events-none animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="bg-[#1F242D] text-white text-[11px] font-medium py-1.5 px-3 rounded-lg shadow-lg border border-white/10 whitespace-nowrap flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                        <span>
                          Launch <strong>{calcDef.name}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
          </div>

          {/* Topic Reader Body */}
          <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-6 leading-relaxed">
            {activeTopic.image && (
              <div className="w-full max-h-80 rounded-2xl overflow-hidden bg-[#F8F9FA] dark:bg-slate-800 border border-[#EAEBED] dark:border-slate-700 flex items-center justify-center p-2">
                <img
                  src={activeTopic.image}
                  alt={activeTopic.title}
                  className="max-h-76 w-auto object-contain rounded-xl"
                />
              </div>
            )}

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1F242D] dark:text-slate-100 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                <span>Executive Summary</span>
              </h3>
              <p className="text-sm text-gray-700 dark:text-slate-300 bg-[#F8F9FA] dark:bg-slate-800/60 p-4 rounded-xl border border-gray-100 dark:border-slate-700 leading-relaxed">
                {activeTopic.summary}
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1F242D] dark:text-slate-100 mb-2 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                <span>Core Mathematical Theory & Principles</span>
              </h3>
              <div className="text-sm text-gray-700 dark:text-slate-300 leading-loose bg-white dark:bg-transparent p-2">
                <TopicContentRenderer content={activeTopic.details} />
              </div>
            </div>

            {/* Step-by-Step Practice Problems */}
            {activeTopic.examples && activeTopic.examples.length > 0 && (
              <div className="pt-4 border-t border-gray-100 dark:border-slate-700/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#1F242D] dark:text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                      <span>
                        Step-by-Step Practice Problems ({activeTopic.examples.length})
                      </span>
                    </h3>
                    {activeTopic.category === "linear-algebra" &&
                      (() => {
                        const laCalc =
                          getLinearAlgebraDefinitionForTopic(activeTopic);
                        return (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#166534] dark:text-emerald-400 bg-[#ECFDF5] dark:bg-emerald-950/40 border border-[#dcfce7] dark:border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                            <span>{activeTopic.title}</span>
                            <span>→</span>
                            <span>{laCalc.name}</span>
                          </span>
                        );
                      })()}
                  </div>
                  <span className="text-xs text-[#6B7280] dark:text-slate-400">
                    Click &ldquo;Try to Solve&rdquo; to open calculator
                  </span>
                </div>

                <div className="space-y-3">
                  {activeTopic.examples.map((ex, idx) => {
                    const rawExText =
                      typeof ex === "string"
                        ? ex
                        : (ex as any).question || JSON.stringify(ex);
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 hover:border-[#166534]/40 dark:hover:border-emerald-500/40 transition shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-start gap-3">
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400 bg-[#F0FDF4] dark:bg-emerald-950/40 border border-[#bbf7d0] dark:border-emerald-800/40 rounded-md shrink-0 mt-0.5">
                            Problem {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-mono text-[#1F242D] dark:text-slate-200 leading-relaxed">
                            {rawExText}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(rawExText);
                              setTopicCopiedIdx(idx);
                              setTimeout(() => setTopicCopiedIdx(null), 2000);
                            }}
                            className="px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-xs text-gray-600 dark:text-slate-300 font-semibold transition cursor-pointer flex items-center gap-1"
                            title="Copy text"
                          >
                            {topicCopiedIdx === idx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">
                                  Copied
                                </span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[11px]">Copy</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(rawExText);
                              setLoadedTopicExample({
                                text: rawExText,
                                index: idx,
                              });
                              setTopicCalcKey((prev) => prev + 1);
                              setIsTopicCalculatorOpen(true);
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Try to Solve</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Slide-out Calculator Drawer from Right */}
          <AnimatePresence>
            {isTopicCalculatorOpen &&
              activeTopic &&
              (() => {
                const isLinear = activeTopic.category === "linear-algebra";
                const calcDef = isLinear
                  ? getLinearAlgebraDefinitionForTopic(activeTopic)
                  : getCalculusDefinitionForTopic(activeTopic);
                return (
                  <div className="fixed inset-y-0 right-0 z-50 overflow-hidden flex justify-end w-full sm:w-auto pointer-events-none">
                    {/* Slide-in Drawer */}
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        type: "spring",
                        damping: 28,
                        stiffness: 280,
                      }}
                      className="relative w-full sm:w-[28rem] lg:w-[32rem] bg-[#F8F9FA] dark:bg-[#111827] h-full shadow-2xl z-10 flex flex-col overflow-hidden border-l border-[#EAEBED] dark:border-slate-800 pointer-events-auto"
                    >
                      {/* Drawer Header */}
                      <div className="bg-white dark:bg-[#161F30] border-b border-[#EAEBED] dark:border-slate-700 px-6 py-4 flex items-center justify-between shadow-xs shrink-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shadow-xs">
                            <Calculator className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base sm:text-lg font-black text-[#1F242D] dark:text-slate-100">
                                {calcDef.name}
                              </h3>
                              <span className="text-[10px] font-bold text-[#166534] dark:text-emerald-400 bg-[#F0FDF4] dark:bg-emerald-950/40 border border-[#bbf7d0] dark:border-emerald-800/40 px-2 py-0.5 rounded-md">
                                {calcDef.badge}
                              </span>
                            </div>
                            <p className="text-xs text-[#6B7280] dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                              <span>{activeTopic.title}</span>
                              <span>→</span>
                              <span className="font-semibold text-[#166534] dark:text-emerald-400">
                                {calcDef.name}
                              </span>
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setIsTopicCalculatorOpen(false)}
                          className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                        >
                          <X className="w-4 h-4" />
                          <span className="hidden sm:inline">Close</span>
                        </button>
                      </div>

                      {/* Loaded Problem Notification Banner */}
                      {loadedTopicExample && (
                        <div className="bg-[#FFF0F2] dark:bg-emerald-950/50 border-b border-[#F8D7DA] dark:border-emerald-800/40 px-6 py-3 flex items-center justify-between text-xs text-[#166534] dark:text-emerald-300 shrink-0">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#166534] dark:text-emerald-400 shrink-0" />
                            <span>
                              <strong>
                                Loaded Problem #{loadedTopicExample.index + 1}:
                              </strong>{" "}
                              &ldquo;{loadedTopicExample.text}&rdquo; (Copied to
                              clipboard)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setLoadedTopicExample(null)}
                            className="p-1 hover:bg-[#F8D7DA] dark:hover:bg-slate-700 rounded-md transition text-[#166534] dark:text-emerald-300 cursor-pointer"
                            title="Clear problem"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Scrollable Calculator Body */}
                      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                        <div className="bg-white dark:bg-[#161F30] rounded-2xl border border-[#EAEBED] dark:border-slate-700 p-4 sm:p-6 shadow-xs">
                          {isLinear ? (
                            <div>{(calcDef as any).component}</div>
                          ) : (
                            <CalculusCalculator
                              key={`${(calcDef as any).id}-${topicCalcKey}`}
                              definition={
                                loadedTopicExample
                                  ? ({
                                      ...calcDef,
                                      example: loadedTopicExample.text,
                                    } as any)
                                  : (calcDef as any)
                              }
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })()}
          </AnimatePresence>
        </div>
      ) : (
        /* Topics List & Category/Chapter Filter */
        <div className="flex flex-col gap-6">
          {/* Header Banner for Topics Hub */}
          <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                Curriculum Topics & Modules
              </h2>
            </div>

            {/* Topic Search Box */}
            <div className="w-full lg:w-72 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
              <input
                type="text"
                value={topicSearchQuery}
                onChange={(e) => setTopicSearchQuery(e.target.value)}
                placeholder="Search all topics & lessons..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] dark:bg-slate-800 border border-[#E2E4E8] dark:border-slate-700 text-[#111827] dark:text-slate-100 placeholder:text-[#9AA1B0] dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
              />
            </div>
          </div>

          {/* Category Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#161F30] p-2 rounded-2xl border border-[#EAEBED] dark:border-slate-700 shadow-xs">
            <button
              type="button"
              onClick={() => {
                setTopicCategoryFilter("linear-algebra");
                setSelectedChapterFilter("all");
              }}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                topicCategoryFilter === "linear-algebra"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Linear Algebra Topics</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  topicCategoryFilter === "linear-algebra"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {laTopicCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setTopicCategoryFilter("calculus-1");
                setSelectedChapterFilter("all");
              }}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                topicCategoryFilter === "calculus-1"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Calculus 1 Topics</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  topicCategoryFilter === "calculus-1"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {c1TopicCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setTopicCategoryFilter("calculus-2");
                setSelectedChapterFilter("all");
              }}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                topicCategoryFilter === "calculus-2"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Calculus 2 Topics</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  topicCategoryFilter === "calculus-2"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {c2TopicCount}
              </span>
            </button>
          </div>

          {/* Active Chapter Filter Alert & Back Button */}
          {selectedChapterFilter !== "all" && (
            <div className="flex items-center justify-between bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl px-5 py-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6B7280] dark:text-slate-400">
                  Filtered by Chapter:
                </span>
                <span className="text-xs font-bold text-[#166534] dark:text-emerald-400 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                  {selectedChapterFilter}
                </span>
              </div>
              <button
                onClick={() => setSelectedChapterFilter("all")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-green-50 dark:hover:bg-slate-800 px-3 py-1.5 rounded-xl transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Chapters</span>
              </button>
            </div>
          )}

          {/* Topics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTopics.map((top) => (
              <motion.div
                key={top.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  {/* Header with chapter badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedChapterFilter(top.chapter);
                      }}
                      title="Click to filter by this chapter"
                      className="text-[0.68rem] font-bold text-[#166534] dark:text-emerald-400 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-md truncate max-w-[200px] cursor-pointer hover:bg-[#166534] hover:text-white transition-colors"
                    >
                      {top.chapter}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] dark:bg-slate-800 flex items-center justify-center text-[#4B5563] dark:text-slate-400 group-hover:bg-[#166534] group-hover:text-white transition-colors shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Topic Image Thumbnail */}
                  {top.image && (
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-50 dark:bg-slate-800">
                      <img
                        src={top.image}
                        alt={top.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#111827] dark:text-slate-100 group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {top.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#6B7280] dark:text-slate-400 leading-relaxed mt-2 line-clamp-3">
                    {top.summary}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3.5 border-t border-[#F3F4F6] dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold text-[#9CA3AF] dark:text-slate-400">
                    {top.examples.length > 0
                      ? `${top.examples.length} Example${
                          top.examples.length > 1 ? "s" : ""
                        }`
                      : "Theory & Practice"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTopic(top)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
                  >
                    <span>Explore Topic</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicsView;
