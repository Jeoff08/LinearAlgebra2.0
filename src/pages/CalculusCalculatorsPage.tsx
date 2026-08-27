// pages/CalculusCalculatorsPage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import mathBg from "../assets/math.jpeg";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Calculator,
  Sparkles,
  Layers,
  TrendingUp,
  Zap,
} from "lucide-react";
import AlgebraAbsoluteValueCalculator from "../Calculus_One_Calculator/AlgebraAbsoluteValueCalculator";

// ─── The single card definition ───────────────────────────────────────────────
const UNIFIED_CARD = {
  id: "algebra-abs",
  name: "Algebra & Absolute Value Calculator",
  categoryLabel: "Algebra & Foundations",
  description:
    "A powerful all-in-one calculator that simplifies algebraic expressions and solves equations, inequalities, quadratic problems, and absolute value problems with step-by-step solutions.",
  example: "2x + 5 = 13",
  features: [
    { icon: Sparkles,    label: "Simplify Expressions"       },
    { icon: Calculator,  label: "Linear & Quadratic Equations"},
    { icon: TrendingUp,  label: "Inequalities & Intervals"   },
    { icon: Layers,      label: "Absolute Value"             },
    { icon: Zap,         label: "Auto Problem Detection"     },
  ],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CalculusCalculatorsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // "open" means the calculator workspace is visible
  const [isOpen, setIsOpen] = useState(searchParams.get("tool") === "algebra-abs");

  // Sync on URL change (e.g., browser back/forward)
  useEffect(() => {
    setIsOpen(searchParams.get("tool") === "algebra-abs");
  }, [searchParams]);

  // Keyboard: Escape closes workspace
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) handleClose();
        else navigate(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, isOpen]);

  const scrollToCatalog = () => {
    document.getElementById("calculus-catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpen = () => {
    setIsOpen(true);
    setSearchParams({ tool: "algebra-abs" });
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchParams({});
    scrollToCatalog();
  };

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] text-[#111827]">

      {/* ======================================================================= */}
      {/* HERO                                                                     */}
      {/* ======================================================================= */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center bg-[#0C1017] pt-16 sm:pt-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={mathBg}
            alt="Math chalkboard background"
            className="w-full h-full object-cover object-center lg:object-[center_right] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-50% to-black/35 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#8B1A24]/60 bg-[#7B1824]/30 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#E05260] tracking-wider shadow-xs"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculus Suite · Smart Auto-Detect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight text-white leading-[1.08]"
            >
              <span className="text-white">Solve Smarter with</span>
              <br />
              <span className="text-[#A31D24]">Calculus I</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl"
            >
              One unified, intelligent calculator — enter any algebra, equation, inequality, or absolute value problem and get a full step-by-step solution instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#7B1824]/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate("/?tab=topics")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white/80" />
                <span>View Topics</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* TOP NAV BAR (only in workspace mode)                                     */}
      {/* ======================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sticky top-16 sm:top-[4.5rem] z-20 bg-[#0B0F15] border-b border-white/10 shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-[#7B1824]/60 flex items-center justify-center shrink-0">
                  <Calculator className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">Calculus I · Algebra & Foundations</p>
                  <h3 className="text-sm font-black text-white truncate">Algebra & Absolute Value Calculator</h3>
                </div>
              </div>

              <span className="text-[11px] text-gray-500 hidden md:inline font-mono">
                Press <kbd className="bg-white/10 text-white px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> to go back
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================================= */}
      {/* MAIN CONTENT                                                             */}
      {/* ======================================================================= */}
      <div
        id="calculus-catalog"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ─── CARD VIEW ──────────────────────────────────────────────── */
            <motion.div
              key="card-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Section Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    Calculus I Solvers & Tools
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    One powerful calculator that automatically detects and solves any algebra problem.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#7B1824] bg-[#7B1824]/10 px-3 py-1 rounded-full shrink-0">
                  1 Tool
                </span>
              </div>

              {/* Single Unified Calculator Card */}
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  onClick={handleOpen}
                  className="group relative flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-md hover:shadow-2xl hover:border-[#8B1A24]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Decorative glow */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#7B1824]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#7B1824]/20 transition-all duration-500" />

                  {/* Top section */}
                  <div className="space-y-4">
                    {/* Icon + Badge row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#7B1824]/10 text-[#7B1824] group-hover:bg-[#7B1824] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <Calculator className="w-7 h-7" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B1A24]/20 bg-[#8B1A24]/5 px-3 py-1 text-xs font-bold text-[#8B1A24]">
                        <Zap className="w-3 h-3" />
                        Auto-Detect
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#111827] group-hover:text-[#8B1A24] transition-colors leading-snug">
                        {UNIFIED_CARD.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#4B5563] leading-relaxed font-normal">
                        {UNIFIED_CARD.description}
                      </p>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {UNIFIED_CARD.features.map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600 group-hover:border-[#8B1A24]/20 group-hover:bg-[#7B1824]/5 transition-colors"
                        >
                          <Icon className="w-3 h-3 text-[#7B1824]" />
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Example Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-mono text-gray-600">
                      <span className="text-gray-400">e.g.</span>
                      <span className="font-bold text-gray-800">{UNIFIED_CARD.example}</span>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-xs font-medium text-[#9CA3AF]">
                      {UNIFIED_CARD.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-black text-[#8B1A24] group-hover:text-[#60101B] transition-colors">
                      <span>Open Calculator</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* What You Can Solve preview section */}
              <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
                <h4 className="text-sm font-black text-gray-800">What You Can Solve</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {[
                    "2x + 3x",
                    "(x + 2)(x - 3)",
                    "2x + 5 = 13",
                    "x² - 5x + 6 = 0",
                    "2x + 3 > 7",
                    "x² - 4 ≤ 0",
                    "|-7|",
                    "|x - 3| = 5",
                    "|2x + 1| ≥ 7",
                    "|x - 3| < 5",
                  ].map((ex) => (
                    <button
                      key={ex}
                      onClick={(e) => { e.stopPropagation(); handleOpen(); }}
                      className="flex items-center gap-2 py-1.5 text-left text-xs font-mono text-gray-700 hover:text-[#7B1824] transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3 text-[#7B1824] shrink-0" />
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* ─── WORKSPACE VIEW ─────────────────────────────────────────── */
            <motion.div
              key="workspace-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AlgebraAbsoluteValueCalculator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}