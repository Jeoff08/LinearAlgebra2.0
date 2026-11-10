import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Layers
} from "lucide-react";
import mathHeroBg from "../assets/math.jpeg";

export default function CalculatorHubPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-[#111827] dark:text-slate-100 pb-16 animate-in fade-in duration-300">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Chalkboard Background with Dark Scrim Overlay)          */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#0e131b] pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
        {/* Blackboard Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={mathHeroBg}
            alt="Mathematics blackboard background"
            className="h-full w-full object-cover object-center opacity-45"
          />
          {/* Dark gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#166534]/60 bg-[#166534]/75 px-3.5 py-1.5 text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-xs mb-5"
            >
              <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-white/20">
                <Calculator className="h-2.5 w-2.5 text-white" />
              </div>
              <span>Calculator Hub</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black tracking-tight sm:text-5xl lg:text-[3.75rem] leading-[1.08]"
            >
              <span className="text-white">All the Math Tools</span>
              <br />
              <span className="text-[#22c55e]">You Need.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base leading-relaxed text-gray-300 max-w-xl font-normal"
            >
              Explore calculators, solvers, and visual tools across multiple mathematics disciplines.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-300"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                <span>Provide Results</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#22c55e]" />
                <span>Step-by-Step Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-[#22c55e]" />
                <span>Interactive Visuals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CHOOSE YOUR DISCIPLINE (Cards Section)                                 */}
      {/* ========================================================================= */}
      <section className="relative z-10 -mt-6 sm:-mt-8 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] dark:text-white">
            Select a Mathematics Calculator
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Choose a subject to access specialized calculators, solvers, and tools.
          </p>
        </div>

        {/* 3 Main Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Linear Algebra */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => navigate("/calculators")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#111622] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#166534]/50 dark:hover:border-[#22c55e]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534]/10 text-[#166534] dark:bg-[#166534]/30 dark:text-[#22c55e]">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] dark:text-[#22c55e] border border-emerald-200 dark:border-emerald-800/40">
                  MATH 103
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-white group-hover:text-[#166534] dark:group-hover:text-[#22c55e] transition-colors">
                Linear Algebra
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                Matrix operations, determinants, eigenvalues, system of equations, LU decomposition, vector operations & 20+ specialized solvers.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Matrices", "Determinants", "Eigenvalues", "Vectors", "Systems"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-100 dark:bg-slate-800/70 px-2.5 py-1 text-[0.7rem] font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="mt-8 pt-5 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-[#166534] dark:text-[#22c55e]">
                20+ Solvers Available
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] text-white shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Calculus 1 */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => navigate("/calculus-calculators?course=calc1")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#111622] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#166534]/50 dark:hover:border-[#22c55e]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534]/10 text-[#166534] dark:bg-[#166534]/30 dark:text-[#22c55e]">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] dark:text-[#22c55e] border border-emerald-200 dark:border-emerald-800/40">
                  MATH 101
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-white group-hover:text-[#166534] dark:group-hover:text-[#22c55e] transition-colors">
                Calculus 1
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                Derivatives, limits, tangent lines, curve sketching, related rates, optimization, and step-by-step differentiation tools.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Derivatives", "Limits", "Chain Rule", "Curve Sketching", "Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-100 dark:bg-slate-800/70 px-2.5 py-1 text-[0.7rem] font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="mt-8 pt-5 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-[#166534] dark:text-[#22c55e]">
                Interactive Differentiation
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] text-white shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Calculus 2 */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => navigate("/calculus-calculators?course=calc2")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#111622] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#166534]/50 dark:hover:border-[#22c55e]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534]/10 text-[#166534] dark:bg-[#166534]/30 dark:text-[#22c55e]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] dark:text-[#22c55e] border border-emerald-200 dark:border-emerald-800/40">
                  MATH 102
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-white group-hover:text-[#166534] dark:group-hover:text-[#22c55e] transition-colors">
                Calculus 2
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                Definite and indefinite integrals, integration by parts, trigonometric substitutions, series convergence, and area computation.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Integrals", "By Parts", "Trig Sub", "Series", "Area Between Curves"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-100 dark:bg-slate-800/70 px-2.5 py-1 text-[0.7rem] font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="mt-8 pt-5 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-[#166534] dark:text-[#22c55e]">
                Step-by-Step Integration
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] text-white shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
