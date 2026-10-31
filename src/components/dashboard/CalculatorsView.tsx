import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Search,
  Layers,
  TrendingUp,
  Zap,
  ZoomIn,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import type { CalculatorCardMeta } from "../../types/dashboard";
import {
  buildAllCombinedCalculators,
  renderLinearAlgebraCalculator,
  getCalculusDefinition,
  CalculusCalculator,
} from "../dashboardCalculators";

interface CalculatorsViewProps {
  allCalculators?: CalculatorCardMeta[];
  activeCalculator: CalculatorCardMeta | null;
  setActiveCalculator: (calc: CalculatorCardMeta | null) => void;
  calcCategoryFilter: "all" | "linear-algebra" | "calculus-1" | "calculus-2";
  setCalcCategoryFilter: (
    cat: "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  ) => void;
  calcSearchQuery: string;
  setCalcSearchQuery: (q: string) => void;
  globalSearchQuery?: string;
}

export const CalculatorsView: React.FC<CalculatorsViewProps> = ({
  allCalculators,
  activeCalculator,
  setActiveCalculator,
  calcCategoryFilter,
  setCalcCategoryFilter,
  calcSearchQuery,
  setCalcSearchQuery,
  globalSearchQuery = "",
}) => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const calculatorsList = useMemo(() => {
    return allCalculators || buildAllCombinedCalculators();
  }, [allCalculators]);

  const laCalcCount = useMemo(
    () => calculatorsList.filter((c) => c.category === "linear-algebra").length,
    [calculatorsList]
  );
  const c1CalcCount = useMemo(
    () => calculatorsList.filter((c) => c.category === "calculus-1").length,
    [calculatorsList]
  );
  const c2CalcCount = useMemo(
    () => calculatorsList.filter((c) => c.category === "calculus-2").length,
    [calculatorsList]
  );

  const filteredCalculators = useMemo(() => {
    return calculatorsList.filter((calc) => {
      const matchesCategory =
        calcCategoryFilter === "all" || calc.category === calcCategoryFilter;
      const query = (calcSearchQuery || globalSearchQuery).toLowerCase().trim();
      if (!query) return matchesCategory;
      return (
        matchesCategory &&
        (calc.title.toLowerCase().includes(query) ||
          calc.description.toLowerCase().includes(query) ||
          calc.formula.toLowerCase().includes(query) ||
          calc.badge.toLowerCase().includes(query) ||
          calc.categoryLabel.toLowerCase().includes(query))
      );
    });
  }, [calculatorsList, calcCategoryFilter, calcSearchQuery, globalSearchQuery]);

  return (
    <>
    <div className="flex flex-col gap-6">
      {activeCalculator ? (
        /* Active Calculator Solver View */
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveCalculator(null)}
                className="p-2 rounded-xl bg-[#F8F9FA] dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Calculators</span>
              </button>
              <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-700 hidden sm:block" />
              <div>
                <h2 className="text-base font-bold text-[#1F242D] dark:text-slate-100">
                  {activeCalculator.title}
                </h2>
                <span className="text-xs font-medium text-[#166534] dark:text-emerald-400">
                  {activeCalculator.categoryLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Calculator Component Container */}
          <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-5 shadow-xs">
            {activeCalculator.type === "linear"
              ? renderLinearAlgebraCalculator(activeCalculator.id)
              : (() => {
                  const def = getCalculusDefinition(
                    activeCalculator.calculusDefId
                  );
                  if (def) {
                    return <CalculusCalculator definition={def} />;
                  }
                  return (
                    <div className="p-8 text-center text-sm text-gray-500 dark:text-slate-400">
                      Solver definition not found.
                    </div>
                  );
                })()}
          </div>
        </div>
      ) : (
        /* Calculators List & Filter */
        <div className="flex flex-col gap-6">
          {/* Header Banner for Calculators Hub */}
          <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                Mathematical Solvers & Tools
              </h2>
            </div>

            {/* Calculator Quick Search */}
            <div className="w-full lg:w-72 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
              <input
                type="text"
                value={calcSearchQuery}
                onChange={(e) => setCalcSearchQuery(e.target.value)}
                placeholder="Filter calculators..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] dark:bg-slate-800 border border-[#E2E4E8] dark:border-slate-700 text-[#111827] dark:text-slate-100 placeholder:text-[#9AA1B0] dark:placeholder:text-slate-500 rounded-xl text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
              />
            </div>
          </div>

          {/* Category Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#161F30] p-2 rounded-2xl border border-[#EAEBED] dark:border-slate-700 shadow-xs">
            <button
              type="button"
              onClick={() => setCalcCategoryFilter("linear-algebra")}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                calcCategoryFilter === "linear-algebra"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Linear Algebra Calculators</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  calcCategoryFilter === "linear-algebra"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {laCalcCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCalcCategoryFilter("calculus-1")}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                calcCategoryFilter === "calculus-1"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Calculus 1 Calculators</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  calcCategoryFilter === "calculus-1"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {c1CalcCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCalcCategoryFilter("calculus-2")}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                calcCategoryFilter === "calculus-2"
                  ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
                  : "text-[#4B5565] dark:text-slate-400 hover:bg-[#F3F4F6] dark:hover:bg-slate-700 hover:text-[#111827] dark:hover:text-slate-100"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Calculus 2 Calculators</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  calcCategoryFilter === "calculus-2"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300"
                }`}
              >
                {c2CalcCount}
              </span>
            </button>
          </div>

          {/* Calculators Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCalculators.map((calc) => (
              <motion.div
                key={calc.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  {/* Header with badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/40 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                      {calc.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] dark:bg-slate-800 flex items-center justify-center text-[#4B5563] dark:text-slate-400 group-hover:bg-[#166534] group-hover:text-white transition-colors shrink-0">
                      <Calculator className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#111827] dark:text-slate-100 group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {calc.title}
                  </h3>

                  {/* Formula Pill or Image */}
                  {calc.image ? (
                    <div
                      className="my-2.5 p-1 bg-[#F9FAFB] dark:bg-slate-800/60 border border-[#F0F1F3] dark:border-slate-700 rounded-xl overflow-hidden cursor-pointer relative group/img"
                      onClick={(e) => {
                        e.stopPropagation();
                        const imageSrc = calc.image!.startsWith("/") ? calc.image! : `/${calc.image}`;
                        setModalImage({ src: imageSrc, alt: calc.title });
                      }}
                      title="Click to view full image"
                    >
                      <img
                        src={calc.image.startsWith("/") ? calc.image : `/${calc.image}`}
                        alt={calc.title}
                        className="w-full h-auto max-h-[120px] object-cover rounded-lg transition-transform duration-200 group-hover/img:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 drop-shadow-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="my-2.5 p-2 bg-[#F9FAFB] dark:bg-slate-800/60 border border-[#F0F1F3] dark:border-slate-700 rounded-xl font-serif text-xs text-[#1F242D] dark:text-slate-200 text-center overflow-x-auto">
                      <code>{calc.formula}</code>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-[#6B7280] dark:text-slate-400 leading-relaxed line-clamp-3">
                    {calc.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3.5 border-t border-[#F3F4F6] dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold text-[#9CA3AF] dark:text-slate-400">
                    Full Page Solver
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCalculator(calc)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
                  >
                    <span>Open Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCalculators.length === 0 && (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-slate-800 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                No calculators match your search.
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1">
                Try searching for another formula, term, or clear the search filter.
              </p>
            </div>
          )}
        </div>
      )}
    </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-lg flex items-center justify-center text-gray-600 dark:text-slate-300 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
            />
            <p className="text-center text-sm text-white/70 mt-3 font-medium">
              {modalImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CalculatorsView;
