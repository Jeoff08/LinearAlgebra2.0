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
    <div className="min-h-screen bg-white text-[#111827] pb-16">
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-lg text-sm sm:text-base font-normal text-white/80 leading-relaxed"
            >
              Explore calculators, solvers, and visual tools across multiple mathematics disciplines.
            </motion.p>

            {/* Feature Checklist Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-white/90"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                <span>Provide Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#22c55e]" />
                <span>Step-by-Step Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#22c55e]" />
                <span>Interactive Visuals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#111827] tracking-tight">
          Select a Mathematics Calculator
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#6B7280] max-w-lg mx-auto">
          Choose a subject to access specialized calculators, solvers, and tools.
        </p>

        {/* Indicator line/dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <span className="h-1 w-7 rounded-full bg-[#166534]" />
          <span className="h-1 w-2 rounded-full bg-[#E5E7EB]" />
          <span className="h-1 w-7 rounded-full bg-[#E5E7EB]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TWO DISCIPLINE CARDS (Side by Side matching reference image)           */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ───────────────────────────────────────────────────────────── */}
          {/* Card 1: Linear Algebra                                        */}
          {/* ───────────────────────────────────────────────────────────── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between rounded-[28px] border border-[#D1FAE5] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 overflow-hidden"
          >
            {/* Background Dot Matrix Decoration (Bottom Right) */}
            <div className="pointer-events-none absolute bottom-3 right-3 opacity-30 text-[#166534]" aria-hidden>
              <div className="grid grid-cols-6 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-currentColor" />
                ))}
              </div>
            </div>

            <div>
              {/* Card Top Row: Icon & Tag */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md shadow-[#166534]/20">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-[#bbf7d0] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#166534]">
                  23 Tools
                </span>
              </div>

              {/* Title, Subtitle, and Graphic Row */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827]">
                    Linear Algebra
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#166534]">
                    Matrix, Vector &amp; System Solvers
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#5D6067] leading-relaxed max-w-sm">
                    Compute determinants, inverses, eigenvalues, decompositions (LU, QR, SVD), and vector space projections step-by-step.
                  </p>
                </div>

                {/* 3D Matrix Graphic Mockup */}
                <div className="relative shrink-0 flex items-center justify-center pt-2">
                  <div 
                    className="relative flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-2xl bg-[#166534] shadow-lg shadow-[#166534]/25 transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
                    style={{ transform: "rotate(-8deg)" }}
                  >
                    <div className="flex items-center text-white font-mono font-bold leading-tight select-none">
                      <span className="text-xl sm:text-2xl font-light mr-1">[</span>
                      <div className="grid grid-cols-2 gap-x-2.5 gap-y-1 text-center text-xs sm:text-sm">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-light ml-1">]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-[#F3EBED]">
              <button
                onClick={() => navigate("/calculators")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532D] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore Tools</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => navigate("/?tab=topics")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D1D5DB] bg-white hover:bg-[#F9FAFB] hover:border-[#9CA3AF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F2937] transition-all duration-200 cursor-pointer"
              >
                <span>View Topics</span>
              </button>
            </div>
          </motion.div>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* Card 2: Calculus I                                            */}
          {/* ───────────────────────────────────────────────────────────── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between rounded-[28px] border border-[#D1FAE5] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 overflow-hidden"
          >
            {/* Background Dot Matrix Decoration (Bottom Right) */}
            <div className="pointer-events-none absolute bottom-3 right-3 opacity-30 text-[#166534]" aria-hidden>
              <div className="grid grid-cols-6 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-currentColor" />
                ))}
              </div>
            </div>

            <div>
              {/* Card Top Row: Icon & Tag */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md shadow-[#166534]/20">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-[#bbf7d0] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#166534]">
                  29 Tools
                </span>
              </div>

              {/* Title, Subtitle, and Graphic Row */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827]">
                    Calculus 1 &amp; 2
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#166534]">
                    Limits, Derivatives, Integrals &amp; Series
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#5D6067] leading-relaxed max-w-sm">
                    Evaluate limits, derivatives, integration techniques, curve analysis, series convergence tests, and Taylor/Maclaurin series step-by-step.
                  </p>
                </div>

                {/* Function Graph & Integral Curve Graphic Mockup */}
                <div className="relative shrink-0 flex items-center justify-center pt-2">
                  <div className="relative h-20 w-28 sm:h-22 sm:w-32 rounded-xl border border-[#E5E7EB] bg-[#FAF8F8] p-2 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-full h-full" viewBox="0 0 110 70" fill="none">
                      {/* Axes */}
                      <path d="M10 60 L102 60" stroke="#374151" strokeWidth="1.5" />
                      <path d="M100 58 L104 60 L100 62" fill="#374151" />
                      <path d="M14 62 L14 8" stroke="#374151" strokeWidth="1.5" />
                      <path d="M12 10 L14 6 L16 10" fill="#374151" />

                      {/* Shaded Area Under Curve */}
                      <path
                        d="M14 55 Q35 15, 60 25 T100 12 L100 60 L14 60 Z"
                        fill="rgba(22, 101, 52, 0.12)"
                      />

                      {/* Vertical dotted boundary */}
                      <line x1="75" y1="20" x2="75" y2="60" stroke="#166534" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Smooth Curve */}
                      <path
                        d="M14 55 Q35 15, 60 25 T100 12"
                        stroke="#166534"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Peak Dots */}
                      <circle cx="45" cy="20" r="2.5" fill="#166534" />
                      <circle cx="75" cy="20" r="2.5" fill="#166534" />
                      <circle cx="100" cy="12" r="2.5" fill="#166534" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-[#F3EBED]">
              <button
                onClick={() => navigate("/calculus-calculators")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532D] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore Tools</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => navigate("/?tab=topics")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D1D5DB] bg-white hover:bg-[#F9FAFB] hover:border-[#9CA3AF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F2937] transition-all duration-200 cursor-pointer"
              >
                <span>View Topics</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FOOTER: "More Disciplines Coming Soon" with Divider Lines               */}
      {/* ========================================================================= */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20">
        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-bold text-[#6B7280]">
          <span className="h-px w-20 sm:w-32 bg-[#E5E7EB]" />
          <span>More Disciplines Coming Soon</span>
          <span className="h-px w-20 sm:w-32 bg-[#E5E7EB]" />
        </div>
      </div>
    </div>
  );
}
