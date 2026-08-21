// pages/CalculatorHubPage.tsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import mathBg from "../assets/math.jpeg";
import {
  ArrowLeft,
  Calculator,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Layers,
  Infinity,
  Sigma,
  Grid3X3,
  Activity,
  Maximize2,
  FunctionSquare,
} from "lucide-react";

const LINEAR_FEATURES = [
  { icon: <Grid3X3 className="w-4 h-4" />, label: "Matrix Solvers" },
  { icon: <Maximize2 className="w-4 h-4" />, label: "Eigen Systems" },
  { icon: <Layers className="w-4 h-4" />, label: "Vector Spaces" },
  { icon: <Activity className="w-4 h-4" />, label: "LU / QR / SVD" },
];

const CALCULUS_FEATURES = [
  { icon: <Infinity className="w-4 h-4" />, label: "Limits & Continuity" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "Derivatives" },
  { icon: <FunctionSquare className="w-4 h-4" />, label: "Differentiation Rules" },
  { icon: <Sigma className="w-4 h-4" />, label: "Integrals & FTC" },
];

export default function CalculatorHubPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<"linear" | "calculus" | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  };

  return (
    <div className="relative min-h-screen pb-16 transition-colors duration-300">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img
          src={mathBg}
          alt="Math Background"
          className={`h-full w-full object-cover object-center filter contrast-125 saturate-150 transition-opacity duration-300 ${
            isDark ? "opacity-20" : "opacity-10"
          }`}
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-b from-[#14171B]/90 via-[#1F2329]/85 to-[#14171B]/95"
              : "bg-gradient-to-b from-white/90 via-slate-50/75 to-slate-100/90"
          }`}
        />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.05]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: `linear-gradient(to right, #B6FF2E 1px, transparent 1px), linear-gradient(to bottom, #B6FF2E 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={() => navigate(-1)}
            className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl backdrop-blur-xl transition-all duration-300 font-semibold text-xs sm:text-sm shadow-lg cursor-pointer ${
              isDark
                ? "bg-[#1F2329]/95 border border-[#333A46] text-slate-200 hover:border-[#B6FF2E] hover:text-[#B6FF2E] hover:bg-[#282E37] shadow-black/60"
                : "bg-white/95 border border-slate-300 text-[#1F2329] hover:border-[#1F2329] hover:bg-white shadow-slate-200/70"
            }`}
          >
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-xl transition-transform duration-200 group-hover:-translate-x-1 ${
                isDark
                  ? "bg-[#14171B] text-[#B6FF2E] border border-[#333A46]"
                  : "bg-slate-100 text-[#1F2329] border border-slate-200"
              }`}
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-tight">Back to Home</span>
            <span
              className={`hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-md font-mono ${
                isDark
                  ? "bg-[#14171B] text-slate-400 border border-[#333A46]"
                  : "bg-slate-100 text-slate-500 border border-slate-200"
              }`}
            >
              ESC
            </span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 mb-10 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-sm mb-5 ${
              isDark
                ? "border-blue-400/30 bg-blue-900/30 text-blue-200"
                : "border-blue-300 bg-blue-50 text-blue-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Mathematics Suite</span>
          </div>

          <h1
            className={`font-[Fraunces] text-3xl sm:text-5xl font-bold tracking-tight leading-tight ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B6FF2E] via-lime-300 to-white"
                : "text-[#1F2329]"
            }`}
          >
            Choose Your Calculator Suite
          </h1>

          <p
            className={`mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Select a category below to access specialized calculators with
            step-by-step solutions and interactive tools.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2"
        >
          {/* Card 1: Linear Algebra */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate("/calculators")}
              onMouseEnter={() => setHoveredCard("linear")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative w-full text-left rounded-3xl border p-7 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.99] ${
                isDark
                  ? "border-blue-500/25 bg-[#141b4d]/70 hover:bg-[#1a2560]/80 hover:border-blue-400/50 shadow-blue-900/30"
                  : "border-blue-200 bg-white/95 hover:bg-white hover:border-blue-400 shadow-blue-100/80"
              }`}
            >
              {/* Glow blob */}
              <div
                className={`pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl transition-opacity duration-500 ${
                  hoveredCard === "linear" ? "opacity-50" : "opacity-15"
                } ${isDark ? "bg-blue-500" : "bg-blue-200"}`}
              />

              {/* Icon */}
              <div
                className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 border shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  isDark
                    ? "bg-blue-600/40 border-blue-400/40 text-blue-200"
                    : "bg-blue-100 border-blue-300 text-blue-700"
                }`}
              >
                <Calculator className="w-7 h-7" />
              </div>

              {/* Title & Badge */}
              <div className="relative flex items-start justify-between gap-3 mb-2">
                <div>
                  <span
                    className={`block text-2xl sm:text-3xl font-bold font-[Fraunces] tracking-tight ${
                      isDark ? "text-white" : "text-[#1F2329]"
                    }`}
                  >
                    Linear Algebra
                  </span>
                  <span
                    className={`text-xs font-semibold mt-0.5 block ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    23 Calculators Available
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                    isDark
                      ? "bg-blue-900/60 border-blue-400/40 text-blue-200"
                      : "bg-blue-50 border-blue-200 text-blue-700"
                  }`}
                >
                  MATH
                </div>
              </div>

              {/* Description */}
              <p
                className={`relative text-sm leading-relaxed mb-6 ${
                  isDark ? "text-blue-100/70" : "text-slate-600"
                }`}
              >
                Solve matrices, eigenvectors, vector spaces, and linear systems
                with step-by-step numerical solutions.
              </p>

              {/* Feature pills */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {LINEAR_FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-blue-900/40 border-blue-400/25 text-blue-200 group-hover:bg-blue-800/50"
                        : "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100"
                    }`}
                  >
                    {f.icon}
                    {f.label}
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="relative flex items-center justify-between">
                <div className={`h-px flex-1 mr-4 ${isDark ? "bg-blue-500/20" : "bg-blue-100"}`} />
                <span
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    isDark
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 group-hover:bg-blue-500"
                      : "bg-[#1F2329] text-white shadow-md group-hover:bg-black"
                  }`}
                >
                  Open Suite
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </motion.div>

          {/* Card 2: Calculus I */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate("/calculus-calculators")}
              onMouseEnter={() => setHoveredCard("calculus")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative w-full text-left rounded-3xl border p-7 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.99] ${
                isDark
                  ? "border-emerald-500/25 bg-[#0d2318]/70 hover:bg-[#102b1e]/80 hover:border-emerald-400/50 shadow-emerald-900/30"
                  : "border-emerald-200 bg-white/95 hover:bg-white hover:border-emerald-400 shadow-emerald-100/80"
              }`}
            >
              {/* Glow blob */}
              <div
                className={`pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl transition-opacity duration-500 ${
                  hoveredCard === "calculus" ? "opacity-50" : "opacity-15"
                } ${isDark ? "bg-emerald-500" : "bg-emerald-200"}`}
              />

              {/* Icon */}
              <div
                className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 border shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  isDark
                    ? "bg-emerald-600/40 border-emerald-400/40 text-emerald-200"
                    : "bg-emerald-100 border-emerald-300 text-emerald-700"
                }`}
              >
                <TrendingUp className="w-7 h-7" />
              </div>

              {/* Title & Badge */}
              <div className="relative flex items-start justify-between gap-3 mb-2">
                <div>
                  <span
                    className={`block text-2xl sm:text-3xl font-bold font-[Fraunces] tracking-tight ${
                      isDark ? "text-white" : "text-[#1F2329]"
                    }`}
                  >
                    Calculus I
                  </span>
                  <span
                    className={`text-xs font-semibold mt-0.5 block ${
                      isDark ? "text-emerald-300" : "text-emerald-600"
                    }`}
                  >
                    23 Calculators Available
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                    isDark
                      ? "bg-emerald-900/60 border-emerald-400/40 text-emerald-200"
                      : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  }`}
                >
                  CALC
                </div>
              </div>

              {/* Description */}
              <p
                className={`relative text-sm leading-relaxed mb-6 ${
                  isDark ? "text-emerald-100/70" : "text-slate-600"
                }`}
              >
                Compute limits, derivatives, integrals, and curve analysis with
                full step-by-step breakdowns using calculus techniques.
              </p>

              {/* Feature pills */}
              <div className="relative flex flex-wrap gap-2 mb-6">
                {CALCULUS_FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-emerald-900/40 border-emerald-400/25 text-emerald-200 group-hover:bg-emerald-800/50"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-100"
                    }`}
                  >
                    {f.icon}
                    {f.label}
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="relative flex items-center justify-between">
                <div className={`h-px flex-1 mr-4 ${isDark ? "bg-emerald-500/20" : "bg-emerald-100"}`} />
                <span
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    isDark
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 group-hover:bg-emerald-500"
                      : "bg-[#1F2329] text-white shadow-md group-hover:bg-black"
                  }`}
                >
                  Open Suite
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mt-10 text-center text-xs flex items-center justify-center gap-2 ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B6FF2E]" />
          46+ specialized solvers powered by modern mathematical algorithms
          <Sparkles className="w-3.5 h-3.5 text-[#B6FF2E]" />
        </motion.p>
      </div>
    </div>
  );
}
