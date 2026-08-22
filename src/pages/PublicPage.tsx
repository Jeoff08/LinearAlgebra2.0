import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS, { CALCULUS_SUB_CATEGORIES } from "../data/calculus-topics";
import type { CalculusSubCategoryId } from "../data/calculus-topics";
import mathBg from "../assets/math.jpeg";
import linearAlgebraLogo from "../assets/Linear Algebra.png";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Binary, 
  Compass, 
  BookOpen, 
  Cpu, 
  Zap, 
  ChevronRight,
  ChevronDown, 
  TrendingUp, 
  RefreshCw, 
  Search, 
  X,
  Globe,
  Monitor,
  Smartphone,
  PieChart,
  Settings,
  Sliders,
  Calculator,
  FunctionSquare,
  GraduationCap,
  Activity,
} from "lucide-react";
import { tools as linearTools } from "../calculators/CalculatorApp";
import { tools as calculusTools } from "../CalculusOneCalculator/CalculatorsAll";

export interface CategorizedTopic {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "linear-algebra" | "calculus";
  categoryLabel: string;
  subCategory?:
    | "foundations"
    | "limits"
    | "derivatives"
    | "derivatives-common"
    | "implicit"
    | "applications";
  subCategoryLabel?: string;
}

const ALL_TOPICS: CategorizedTopic[] = [
  ...(Array.isArray(LINEAR_TOPICS) ? LINEAR_TOPICS : [])
    .filter((t) => Boolean(t && t.id && t.title))
    .map((t) => ({
      id: t.id,
      title: t.title,
      summary: t.summary || "",
      details: t.details || "",
      examples: Array.isArray(t.examples) ? t.examples : [],
      category: "linear-algebra" as const,
      categoryLabel: "Linear Algebra",
    })),
  ...ALL_CALCULUS_TOPICS,
];

// Floating mathematical numbers & symbols for GSAP animation
const MATH_PARTICLES = [
  { id: 1, text: "λ", size: "text-3xl sm:text-4xl", top: "8%", left: "58%", colorDark: "text-[#B6FF2E]", colorLight: "text-[#1F2329]", blur: "blur-[0.5px]" },
  { id: 2, text: "det(A)", size: "text-xl sm:text-2xl", top: "18%", left: "85%", colorDark: "text-lime-300", colorLight: "text-slate-800", blur: "none" },
  { id: 3, text: "π ≈ 3.1415", size: "text-sm sm:text-base", top: "68%", left: "62%", colorDark: "text-[#B6FF2E]", colorLight: "text-slate-700", blur: "blur-[0.3px]" },
  { id: 4, text: "Ax = b", size: "text-2xl sm:text-3xl", top: "78%", left: "88%", colorDark: "text-lime-400", colorLight: "text-[#1F2329]", blur: "none" },
  { id: 5, text: "∑ xᵢ", size: "text-2xl sm:text-3xl", top: "42%", left: "55%", colorDark: "text-[#B6FF2E]", colorLight: "text-slate-800", blur: "none" },
  { id: 6, text: "ℝⁿ", size: "text-xl sm:text-2xl", top: "14%", left: "75%", colorDark: "text-lime-300", colorLight: "text-slate-700", blur: "blur-[0.2px]" },
  { id: 7, text: "e^{iπ} + 1 = 0", size: "text-base sm:text-lg", top: "58%", left: "92%", colorDark: "text-[#B6FF2E]", colorLight: "text-[#1F2329]", blur: "blur-[0.5px]" },
  { id: 8, text: "[1  0  0]", size: "text-xs sm:text-sm font-mono", top: "32%", left: "93%", colorDark: "text-lime-400", colorLight: "text-slate-800", blur: "none" },
  { id: 9, text: "rank(A)", size: "text-sm sm:text-base", top: "86%", left: "68%", colorDark: "text-[#B6FF2E]", colorLight: "text-slate-700", blur: "none" },
  { id: 10, text: "∞", size: "text-4xl sm:text-5xl", top: "4%", left: "48%", colorDark: "text-[#B6FF2E]/80", colorLight: "text-slate-700/80", blur: "blur-[0.5px]" },
  { id: 11, text: "v⃗ · w⃗", size: "text-lg sm:text-xl", top: "48%", left: "84%", colorDark: "text-lime-300", colorLight: "text-slate-800", blur: "none" },
  { id: 12, text: "0 1 0 1", size: "text-xs sm:text-sm font-mono", top: "90%", left: "70%", colorDark: "text-[#B6FF2E]/80", colorLight: "text-slate-700/80", blur: "blur-[0.3px]" },
  { id: 13, text: "dim(V)", size: "text-base sm:text-lg", top: "26%", left: "66%", colorDark: "text-lime-400", colorLight: "text-[#1F2329]", blur: "none" },
  { id: 14, text: "σ₁ ≥ σ₂", size: "text-sm sm:text-base", top: "74%", left: "46%", colorDark: "text-[#B6FF2E]", colorLight: "text-slate-800", blur: "blur-[0.2px]" },
];

export default function PublicPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  // Active view: "main" (Home Workspace) | "categories" (Choose Topic Suite) | "topics-linear" (Linear Algebra Topics) | "topics-calculus" (Calculus Topics)
  const [activeView, setActiveView] = useState<"main" | "categories" | "topics-linear" | "topics-calculus">("main");
  const [topicSearch, setTopicSearch] = useState("");
  const [clickedTopicId, setClickedTopicId] = useState<string | null>(null);

  // Split topics by subject
  const linearTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "linear-algebra"), []);
  const calculusTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus"), []);

  // Calculus sub-category filter state
  const [selectedCalculusCategory, setSelectedCalculusCategory] = useState<CalculusSubCategoryId>("all");

  // Filtered Linear Algebra topics
  const filteredLinearTopics = useMemo(() => {
    const query = topicSearch.toLowerCase().trim();
    if (!query) return linearTopics;
    return linearTopics.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );
  }, [linearTopics, topicSearch]);

  // Filtered Calculus topics (supporting search & sub-category tabs)
  const filteredCalculusTopics = useMemo(() => {
    let list = calculusTopics;
    if (selectedCalculusCategory !== "all") {
      list = list.filter((t) => t.subCategory === selectedCalculusCategory);
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculusTopics, topicSearch, selectedCalculusCategory]);

  // "Explore Calculators" dropdown state
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const exploreDropdownRef = useRef<HTMLDivElement>(null);

  // Mini Interactive Matrix Sandbox State
  const [matrixVal, setMatrixVal] = useState({ a: 3, b: 2, c: 1, d: 4 });

  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Check if returning from topic page
  useEffect(() => {
    const returnView = sessionStorage.getItem("returningTopicView");
    if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "categories") {
      setActiveView(returnView as any);
      sessionStorage.removeItem("returningTopicView");
    } else if (sessionStorage.getItem("returningFromTopic")) {
      setActiveView("categories");
      sessionStorage.removeItem("returningFromTopic");
    }
  }, []);

  // Close "Explore Calculators" dropdown on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(e.target as Node)) {
        setExploreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // GSAP Animations for floating mathematical particles & interactive cursor parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating motion for each particle
      particlesRef.current.forEach((el, index) => {
        if (!el) return;

        // Continuous drifting, floating and subtle rotation
        gsap.to(el, {
          y: () => (index % 2 === 0 ? "+=25" : "-=30"),
          x: () => (index % 3 === 0 ? "+=18" : "-=18"),
          rotation: () => (index % 2 === 0 ? 8 : -8),
          duration: 3 + (index % 4) * 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });

        // Pulsing glow opacity
        gsap.to(el, {
          opacity: index % 2 === 0 ? 0.9 : 0.6,
          scale: index % 2 === 0 ? 1.08 : 0.94,
          duration: 2.5 + (index % 3),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.15,
        });
      });

      // Mouse interactive parallax reaction
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        particlesRef.current.forEach((el, index) => {
          if (!el) return;
          const factor = (index % 5 + 1) * 18;
          gsap.to(el, {
            xPercent: mouseX * factor,
            yPercent: mouseY * factor,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      const container = containerRef.current;
      if (container) {
        container.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        if (container) {
          container.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleTopicClick = (topicId: string, category: "linear-algebra" | "calculus", e: React.MouseEvent) => {
    e.preventDefault();
    setClickedTopicId(topicId);
    sessionStorage.setItem("returningTopicView", category === "calculus" ? "topics-calculus" : "topics-linear");
    setTimeout(() => {
      navigate(`/topics/${topicId}`);
    }, 250);
  };

  // Particle click interaction (spins and scales with GSAP)
  const handleParticleClick = (index: number) => {
    const el = particlesRef.current[index];
    if (el) {
      gsap.to(el, {
        scale: 1.5,
        rotation: "+=360",
        duration: 0.6,
        ease: "back.out(2)",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const randomizeMatrix = () => {
    setMatrixVal({
      a: Math.floor(Math.random() * 9) - 4,
      b: Math.floor(Math.random() * 9) - 4,
      c: Math.floor(Math.random() * 9) - 4,
      d: Math.floor(Math.random() * 9) - 4,
    });
  };

  const det = matrixVal.a * matrixVal.d - matrixVal.b * matrixVal.c;
  const trace = matrixVal.a + matrixVal.d;

  return (
    <div ref={containerRef} className="relative min-h-[90vh] pb-16 transition-colors duration-300">

      {/* Floating Animated Mathematical Numbers & Symbols (GSAP Driven) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {MATH_PARTICLES.map((particle, i) => (
          <div
            key={particle.id}
            ref={(el) => {
              particlesRef.current[i] = el;
            }}
            onClick={() => handleParticleClick(i)}
            style={{
              top: particle.top,
              left: particle.left,
            }}
            className={`pointer-events-auto absolute cursor-pointer font-serif font-bold tracking-wider transition-colors duration-200 hover:scale-110 ${particle.size} ${
              isDark 
                ? "text-blue-300/70 hover:text-white" 
                : "text-blue-900/60 hover:text-blue-950"
            } ${particle.blur} drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]`}
            title="Click to interact!"
          >
            {particle.text}
          </div>
        ))}
      </div>

      {/* Swipeable View Container */}
      <div className="relative z-10 pl-3 sm:pl-4 md:pl-8 pr-2 pt-1 pb-12">
        <AnimatePresence mode="wait" initial={false}>
          {activeView === "main" ? (
            /* ========================================================= */
            /* VIEW 1: MAIN WORKSPACE OVERVIEW VIEW (LEFT-ALIGNED)       */
            /* ========================================================= */
            <motion.div
              key="main-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 w-full"
            >
              {/* HERO SECTION (SEAMLESS AND BORDERLESS OVER FULL-SCREEN math.jpeg) */}
              <section className={`relative text-left transition-all duration-300 pt-0 pb-6 ${
                isDark ? "text-white" : "text-[#1F2329]"
              }`}>

                {/* Hero Content (Left Aligned) */}
                <div className="relative z-10 max-w-2xl">
                  <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold backdrop-blur-sm mb-4 ${
                    isDark 
                      ? "border-blue-400/30 bg-blue-900/40 text-blue-200" 
                      : "border-blue-300 bg-blue-100/80 text-blue-900"
                  }`}>
                    <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-blue-300" : "text-blue-700"}`} />
                    <span>Interactive Mathematics Suite</span>
                  </div>

                  <h1 className={`font-[Fraunces] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] ${
                    isDark ? "text-white" : "text-[#1F2329]"
                  }`}>
                    Modern Linear Algebra Made Easy
                  </h1>

                  <p className={`mt-5 text-base sm:text-lg leading-relaxed ${
                    isDark ? "text-blue-100/90" : "text-slate-700 font-medium"
                  }`}>
                    Build <span className={`rounded px-1.5 py-0.5 font-semibold border ${
                      isDark 
                        ? "bg-blue-900/80 text-white border-blue-400/30" 
                        : "bg-blue-100 text-blue-950 border-blue-300"
                    }`}>feature-rich</span> experiences for Matrices, Vectors, and Linear Systems, faster than ever with step-by-step visual components.
                  </p>

                  {/* Primary CTA Button */}
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      onClick={() => navigate("/calculator-hub")}
                      className="group inline-flex items-center gap-3 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-[#ff5722]/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
                    >
                      <span>Explore Calculators</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => setActiveView("categories")}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
                        isDark 
                          ? "bg-blue-950/60 hover:bg-blue-900/70 text-blue-100 shadow-md" 
                          : "bg-white/90 hover:bg-slate-100 text-slate-800 shadow-md"
                      }`}
                    >
                      <BookOpen className={`w-4 h-4 ${isDark ? "text-blue-300" : "text-blue-600"}`} />
                      <span>Show All Topics</span>
                    </button>
                  </div>


                  <p className={`mt-3 text-xs font-medium ${
                    isDark ? "text-blue-200/70" : "text-slate-600"
                  }`}>
                    Includes 23+ specialized matrix, vector, determinant, and linear system solvers.
                  </p>
                </div>
                <div className={`relative z-10 mt-14 pt-8 border-t ${
                  isDark ? "border-blue-500/20" : "border-slate-200"
                }`}>
                  <div>
                    <div>
                    </div>

                    <div>
                    </div>
                  </div>

                  {/* ── ROW 1: LINEAR ALGEBRA CURVED CAROUSEL (TOP) ── */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg border ${
                          isDark ? "bg-blue-900/60 border-blue-400/30 text-blue-300" : "bg-blue-100 border-blue-200 text-blue-700"
                        }`}>
                          <Calculator className="w-4 h-4" />
                        </div>
                        <span className={`text-sm font-bold tracking-wide uppercase ${
                          isDark ? "text-blue-100" : "text-[#1F2329]"
                        }`}>
                          Linear Algebra Calculators
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                          isDark ? "bg-blue-900/40 border-blue-400/30 text-blue-300" : "bg-blue-50 border-blue-200 text-blue-700"
                        }`}>
                          {linearTools.length} Tools
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium hidden sm:inline ${
                        isDark ? "text-blue-300/60" : "text-slate-500"
                      }`}>
                        ← Scrolling Left • Hover to pause
                      </span>
                    </div>

                    {/* Curved Perspective Viewport */}
                    <div className="curved-carousel-viewport py-3">
                      <div className="curved-track-left">
                        {[...linearTools, ...linearTools].map((tool, idx) => (
                          <div
                            key={`linear-curve-${tool.id}-${idx}`}
                            onClick={() => navigate("/calculators", { state: { toolId: tool.id } })}
                            className={`group relative w-[275px] sm:w-[305px] shrink-0 flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1.5 hover:scale-[1.02] ${
                              isDark
                                ? "bg-gradient-to-br from-[#141b4d]/95 via-[#18235e]/85 to-[#0d1236]/95 border-blue-500/30 hover:border-[#B6FF2E] hover:shadow-[0_0_20px_rgba(182,255,46,0.25)] text-white"
                                : "bg-gradient-to-br from-white/95 via-blue-50/70 to-white/90 border-blue-200 hover:border-blue-500 hover:shadow-xl text-[#1F2329]"
                            }`}
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2.5">
                                <div className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                                  isDark 
                                    ? "bg-[#2a45b8] border-blue-400/30 text-white" 
                                    : "bg-blue-600 border-blue-400 text-white"
                                }`}>
                                  <Binary className="w-4 h-4" />
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {tool.badge && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300">
                                      {tool.badge}
                                    </span>
                                  )}
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                    isDark ? "bg-[#141b4d] border-blue-400/20 text-blue-300" : "bg-slate-100 border-slate-200 text-slate-600"
                                  }`}>
                                    {tool.categoryLabel}
                                  </span>
                                </div>
                              </div>

                              <h3 className={`font-bold text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-[#B6FF2E] transition-colors ${
                                isDark ? "text-white" : "text-[#1F2329]"
                              }`}>
                                {tool.name}
                              </h3>

                              <p className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${
                                isDark ? "text-blue-100/70" : "text-slate-600"
                              }`}>
                                {tool.description}
                              </p>
                            </div>

                            <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                              isDark ? "border-blue-500/20 text-blue-300 group-hover:text-[#B6FF2E]" : "border-blue-100 text-blue-700 group-hover:text-blue-900"
                            }`}>
                              <span>Open Calculator</span>
                              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── ROW 2: CALCULUS I CURVED CAROUSEL (BOTTOM) ── */}
                  <div>
                    <div className="flex items-center justify-between mb-3 px-1">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg border ${
                          isDark ? "bg-emerald-900/60 border-emerald-400/30 text-emerald-300" : "bg-emerald-100 border-emerald-200 text-emerald-700"
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className={`text-sm font-bold tracking-wide uppercase ${
                          isDark ? "text-emerald-100" : "text-[#1F2329]"
                        }`}>
                          Calculus I Calculators
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                          isDark ? "bg-emerald-900/40 border-emerald-400/30 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-700"
                        }`}>
                          {calculusTools.length} Tools
                        </span>
                      </div>
                      <span className={`text-[11px] font-medium hidden sm:inline ${
                        isDark ? "text-emerald-300/60" : "text-slate-500"
                      }`}>
                        → Scrolling Right • Hover to pause
                      </span>
                    </div>

                    {/* Curved Perspective Viewport */}
                    <div className="curved-carousel-viewport py-3">
                      <div className="curved-track-right">
                        {[...calculusTools, ...calculusTools].map((tool, idx) => (
                          <div
                            key={`calculus-curve-${tool.id}-${idx}`}
                            onClick={() => navigate("/calculus-calculators", { state: { toolId: tool.id } })}
                            className={`group relative w-[275px] sm:w-[305px] shrink-0 flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1.5 hover:scale-[1.02] ${
                              isDark
                                ? "bg-gradient-to-br from-[#0d2318]/95 via-[#102d1f]/85 to-[#07170f]/95 border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] text-white"
                                : "bg-gradient-to-br from-white/95 via-emerald-50/70 to-white/90 border-emerald-200 hover:border-emerald-500 hover:shadow-xl text-[#1F2329]"
                            }`}
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2.5">
                                <div className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                                  isDark 
                                    ? "bg-emerald-700 border-emerald-400/30 text-white" 
                                    : "bg-emerald-600 border-emerald-400 text-white"
                                }`}>
                                  {tool.icon || <FunctionSquare className="w-4 h-4" />}
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {tool.badge && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                                      {tool.badge}
                                    </span>
                                  )}
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                    isDark ? "bg-[#0d2318] border-emerald-400/20 text-emerald-300" : "bg-slate-100 border-slate-200 text-slate-600"
                                  }`}>
                                    {tool.categoryLabel}
                                  </span>
                                </div>
                              </div>

                              <h3 className={`font-bold text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-emerald-300 transition-colors ${
                                isDark ? "text-white" : "text-[#1F2329]"
                              }`}>
                                {tool.name}
                              </h3>

                              <p className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${
                                isDark ? "text-emerald-100/70" : "text-slate-600"
                              }`}>
                                {tool.description}
                              </p>
                            </div>

                            <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                              isDark ? "border-emerald-500/20 text-emerald-300 group-hover:text-emerald-200" : "border-emerald-100 text-emerald-700 group-hover:text-emerald-900"
                            }`}>
                              <span>Open Calculator</span>
                              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
            </motion.div>
          ) : activeView === "categories" ? (
            /* ========================================================= */
            /* VIEW 2: CATEGORY SUITE SELECTION HUB                      */
            /* ========================================================= */
            <motion.div
              key="categories-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 max-w-5xl mx-auto pt-2"
            >
              {/* Back Button & Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={() => setActiveView("main")}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold border transition-all duration-200 hover:scale-105 active:scale-95 ${
                      isDark
                        ? "border-[#333A46] bg-[#1F2329] text-[#B6FF2E] hover:bg-[#282E37] hover:border-[#B6FF2E]/60 shadow-md shadow-black/50"
                        : "border-slate-300 bg-white text-[#1F2329] hover:bg-slate-100 shadow-sm shadow-slate-200"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Workspace</span>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#B6FF2E] animate-ping" />
                      <h2 className={`m-0 font-[Fraunces] text-2xl sm:text-3xl font-bold ${
                        isDark ? "text-white" : "text-[#1F2329]"
                      }`}>
                        Choose Topic
                      </h2>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                        isDark ? "bg-[#1F2329] text-[#B6FF2E] border-[#333A46]" : "bg-[#B6FF2E]/20 text-[#1F2329] border-[#B6FF2E]/40"
                      }`}>
                        2 Disciplines Available
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
                      Select a mathematics discipline below to explore comprehensive theoretical modules and step-by-step verified examples.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two Grand Category Showcase Cards (Click opens dedicated subject page) */}
              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                {/* Card 1: Linear Algebra */}
                <div
                  onClick={() => {
                    setTopicSearch("");
                    setActiveView("topics-linear");
                  }}
                  className={`group relative w-full text-left rounded-3xl border p-7 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.99] ${
                    isDark
                      ? "border-blue-500/25 bg-[#141b4d]/70 hover:bg-[#1a2560]/85 hover:border-blue-400/50 shadow-blue-950/40"
                      : "border-blue-200 bg-white/95 hover:bg-white hover:border-blue-400 shadow-blue-100/80"
                  }`}
                >
                  {/* Glow blob */}
                  <div
                    className={`pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-50 ${
                      isDark ? "bg-blue-500" : "bg-blue-300"
                    }`}
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
                        {linearTopics.length} Topics Available
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
                    Solve matrices, eigenvectors, vector spaces, and linear systems with step-by-step numerical solutions.
                  </p>

                  {/* Feature pills */}
                  <div className="relative flex flex-wrap gap-2 mb-6">
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-blue-900/40 border-blue-400/25 text-blue-200 group-hover:bg-blue-800/50"
                        : "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100"
                    }`}>
                      <Binary className="w-3.5 h-3.5" />
                      <span>Matrix Solvers</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-blue-900/40 border-blue-400/25 text-blue-200 group-hover:bg-blue-800/50"
                        : "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100"
                    }`}>
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Eigen Systems</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-blue-900/40 border-blue-400/25 text-blue-200 group-hover:bg-blue-800/50"
                        : "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100"
                    }`}>
                      <Layers className="w-3.5 h-3.5" />
                      <span>Vector Spaces</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-blue-900/40 border-blue-400/25 text-blue-200 group-hover:bg-blue-800/50"
                        : "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100"
                    }`}>
                      <Zap className="w-3.5 h-3.5" />
                      <span>LU / QR / SVD</span>
                    </div>
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
                      <span>Open Topic</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Card 2: Calculus 1 */}
                <div
                  onClick={() => {
                    setTopicSearch("");
                    setSelectedCalculusCategory("all");
                    setActiveView("topics-calculus");
                  }}
                  className={`group relative w-full text-left rounded-3xl border p-7 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.99] ${
                    isDark
                      ? "border-emerald-500/25 bg-[#0d2318]/70 hover:bg-[#102b1e]/85 hover:border-emerald-400/50 shadow-emerald-950/40"
                      : "border-emerald-200 bg-white/95 hover:bg-white hover:border-emerald-400 shadow-emerald-100/80"
                  }`}
                >
                  {/* Glow blob */}
                  <div
                    className={`pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-50 ${
                      isDark ? "bg-emerald-500" : "bg-emerald-300"
                    }`}
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
                        Calculus 1
                      </span>
                      <span
                        className={`text-xs font-semibold mt-0.5 block ${
                          isDark ? "text-emerald-300" : "text-emerald-600"
                        }`}
                      >
                        {calculusTopics.length} Topics Available
                      </span>
                    </div>
                    <div
                      className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                        isDark
                          ? "bg-emerald-900/60 border-emerald-400/40 text-emerald-200"
                          : "bg-emerald-50 border-emerald-200 text-emerald-700"
                      }`}
                    >
                      CALC 1
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`relative text-sm leading-relaxed mb-6 ${
                      isDark ? "text-emerald-100/70" : "text-slate-600"
                    }`}
                  >
                    Master foundations of calculus, limits &amp; continuity, differentiation rules, tangent lines, and calculus essentials.
                  </p>

                  {/* Feature pills */}
                  <div className="relative flex flex-wrap gap-2 mb-6">
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-emerald-900/40 border-emerald-400/25 text-emerald-200 group-hover:bg-emerald-800/50"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-100"
                    }`}>
                      <Zap className="w-3.5 h-3.5" />
                      <span>Derivatives</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-emerald-900/40 border-emerald-400/25 text-emerald-200 group-hover:bg-emerald-800/50"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-100"
                    }`}>
                      <Activity className="w-3.5 h-3.5" />
                      <span>Limit &amp; Continuity</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-emerald-900/40 border-emerald-400/25 text-emerald-200 group-hover:bg-emerald-800/50"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-100"
                    }`}>
                      <Compass className="w-3.5 h-3.5" />
                      <span>Foundations</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-semibold border transition-colors duration-200 ${
                      isDark
                        ? "bg-emerald-900/40 border-emerald-400/25 text-emerald-200 group-hover:bg-emerald-800/50"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700 group-hover:bg-emerald-100"
                    }`}>
                      <FunctionSquare className="w-3.5 h-3.5" />
                      <span>Functions &amp; Graphs</span>
                    </div>
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
                      <span>Open Topic</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeView === "topics-linear" ? (
            /* ========================================================= */
            /* VIEW 3: DEDICATED LINEAR ALGEBRA TOPICS PAGE              */
            /* ========================================================= */
            <motion.div
              key="topics-linear-view"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-[95%] sm:max-w-[92%] mx-auto"
            >
              {/* Back Button & Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={() => setActiveView("categories")}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold border transition-all duration-200 hover:scale-105 active:scale-95 ${
                      isDark
                        ? "border-[#333A46] bg-[#1F2329] text-[#B6FF2E] hover:bg-[#282E37] hover:border-[#B6FF2E]/60 shadow-md shadow-black/50"
                        : "border-slate-300 bg-white text-[#1F2329] hover:bg-slate-100 shadow-sm shadow-slate-200"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Categories</span>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-blue-600 text-white shadow-sm">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <h2 className={`m-0 font-[Fraunces] text-2xl sm:text-3xl font-bold ${
                        isDark ? "text-white" : "text-[#1F2329]"
                      }`}>
                        Linear Algebra Topics
                      </h2>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                        isDark ? "bg-blue-900/60 border-blue-400/30 text-blue-200" : "bg-blue-50 border-blue-200 text-blue-700"
                      }`}>
                        {filteredLinearTopics.length} Topics
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
                      Matrix theories, vector spaces, transformations, determinants, and step-by-step verified examples.
                    </p>
                  </div>
                </div>

                {/* Right controls: Switch subject & Search */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setTopicSearch("");
                      setActiveView("topics-calculus");
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105 ${
                      isDark
                        ? "border-emerald-500/30 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50"
                        : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Go to Calculus Topics →</span>
                  </button>

                  {/* Search Topics Bar */}
                  <div className="relative w-full sm:w-64">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-blue-300" : "text-blue-700"}`} />
                    <input
                      type="text"
                      placeholder="Search linear topics (e.g. Eigen, Matrix)..."
                      value={topicSearch}
                      onChange={(e) => setTopicSearch(e.target.value)}
                      className={`w-full rounded-xl border pl-9 pr-8 py-2 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all ${
                        isDark 
                          ? "border-[#333A46] bg-[#14171B] text-white focus:border-blue-400" 
                          : "border-slate-300 bg-white text-[#1F2329] focus:border-blue-600"
                      }`}
                    />
                    {topicSearch && (
                      <button
                        onClick={() => setTopicSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Linear Algebra Topics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLinearTopics.length > 0 ? (
                  filteredLinearTopics.map((topic, index) => {
                    const isClicked = clickedTopicId === topic.id;

                    return (
                      <motion.article
                        key={topic.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isClicked ? 0.4 : 1,
                          y: 0,
                          scale: isClicked ? 0.97 : 1,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.03,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -4,
                          borderColor: "rgba(182, 255, 46, 0.5)",
                          boxShadow: isDark
                            ? "0 12px 30px -5px rgba(182, 255, 46, 0.2)"
                            : "0 12px 24px -5px rgba(31, 35, 41, 0.1)",
                        }}
                        className={`group relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                          isDark
                            ? "border-[#333A46] bg-[#1F2329]/80 hover:bg-[#1F2329]"
                            : "border-slate-200 bg-white/95 hover:bg-white shadow-md shadow-slate-200/40"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                              isDark
                                ? "border-blue-500/30 bg-blue-950/60 text-blue-300"
                                : "border-blue-300 bg-blue-100/90 text-blue-800"
                            }`}>
                              <Binary className="w-3 h-3 text-blue-400" />
                              <span>Linear Algebra</span>
                            </span>

                            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono ${
                              isDark ? "border-[#333A46] bg-[#14171B] text-slate-300" : "border-slate-200 bg-slate-100 text-slate-700"
                            }`}>
                              {topic.examples.length} ex
                            </span>
                          </div>

                          <h3 className={`font-[Fraunces] text-lg font-bold transition-colors duration-200 ${
                            isDark ? "text-white group-hover:text-[#B6FF2E]" : "text-[#1F2329] group-hover:text-black"
                          }`}>
                            {topic.title}
                          </h3>

                          <p className={`mt-2 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {topic.summary}
                          </p>
                        </div>

                        <div className={`mt-5 flex items-center justify-between border-t pt-3 ${
                          isDark ? "border-[#333A46]" : "border-slate-200"
                        }`}>
                          <span className={`text-[0.7rem] font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            {topic.examples.length} verified examples
                          </span>

                          <Link
                            to={`/topics/${topic.id}`}
                            onClick={(e) => handleTopicClick(topic.id, "linear-algebra", e)}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-extrabold transition-all duration-200 no-underline shadow-sm hover:scale-105 ${
                              isDark
                                ? "bg-[#B6FF2E] hover:bg-[#C6FF4D] text-[#14171B]"
                                : "bg-[#1F2329] hover:bg-black text-[#B6FF2E]"
                            }`}
                          >
                            <span>Read Topic</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </motion.article>
                    );
                  })
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className={`text-base font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      No Linear Algebra topics found matching &ldquo;{topicSearch}&rdquo;
                    </p>
                    <p className={`text-xs mt-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      Try clearing the search or searching for &quot;matrices&quot; or &quot;eigen&quot;.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* VIEW 4: DEDICATED CALCULUS 1 TOPICS PAGE                  */
            /* ========================================================= */
            <motion.div
              key="topics-calculus-view"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-[95%] sm:max-w-[92%] mx-auto"
            >
              {/* Back Button & Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={() => setActiveView("categories")}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold border transition-all duration-200 hover:scale-105 active:scale-95 ${
                      isDark
                        ? "border-emerald-500/40 bg-[#0d2318] text-emerald-300 hover:bg-[#102b1e] hover:border-emerald-400 shadow-md shadow-black/50"
                        : "border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50 shadow-sm"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Categories</span>
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h2 className={`m-0 font-[Fraunces] text-2xl sm:text-3xl font-bold ${
                        isDark ? "text-white" : "text-[#1F2329]"
                      }`}>
                        Calculus 1 Topics
                      </h2>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                        isDark ? "bg-emerald-900/60 border-emerald-400/30 text-emerald-200" : "bg-emerald-50 border-emerald-200 text-emerald-700"
                      }`}>
                        {filteredCalculusTopics.length} {filteredCalculusTopics.length === 1 ? "Topic" : "Topics"}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
                      Explore Foundations of Calculus, Limit &amp; Continuity, and Derivatives with step-by-step verified explanations.
                    </p>
                  </div>
                </div>

                {/* Right controls: Switch subject & Search */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setTopicSearch("");
                      setActiveView("topics-linear");
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105 ${
                      isDark
                        ? "border-blue-500/30 bg-blue-950/40 text-blue-300 hover:bg-blue-900/50"
                        : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    <Binary className="w-3.5 h-3.5" />
                    <span>Go to Linear Algebra Topics →</span>
                  </button>

                  {/* Search Topics Bar */}
                  <div className="relative w-full sm:w-64">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-emerald-300" : "text-emerald-700"}`} />
                    <input
                      type="text"
                      placeholder="Search calculus (e.g. Limits, Power Rule, Domain)..."
                      value={topicSearch}
                      onChange={(e) => setTopicSearch(e.target.value)}
                      className={`w-full rounded-xl border pl-9 pr-8 py-2 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transition-all ${
                        isDark 
                          ? "border-[#333A46] bg-[#14171B] text-white focus:border-emerald-400" 
                          : "border-slate-300 bg-white text-[#1F2329] focus:border-emerald-600"
                      }`}
                    />
                    {topicSearch && (
                      <button
                        onClick={() => setTopicSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Calculus Category Tabs / Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
                {CALCULUS_SUB_CATEGORIES.map((cat) => {
                  const isActive = selectedCalculusCategory === cat.id;
                  const count = cat.id === "all"
                    ? calculusTopics.length
                    : calculusTopics.filter(t => t.subCategory === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCalculusCategory(cat.id as CalculusSubCategoryId)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? isDark
                            ? "bg-emerald-500 text-[#0c1f17] border-emerald-400 shadow-md shadow-emerald-500/25 scale-[1.03]"
                            : "bg-[#1F2329] text-white border-black shadow-md scale-[1.03]"
                          : isDark
                            ? "border-emerald-500/25 bg-[#0d2318]/60 text-emerald-200 hover:bg-[#102b1e] hover:border-emerald-400/40"
                            : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50"
                      }`}
                    >
                      {cat.id === "derivatives" && <Zap className="w-3.5 h-3.5" />}
                      {cat.id === "limits" && <Activity className="w-3.5 h-3.5" />}
                      {cat.id === "foundations" && <Compass className="w-3.5 h-3.5" />}
                      {cat.id === "derivatives-common" && <FunctionSquare className="w-3.5 h-3.5" />}
                      {cat.id === "implicit" && <Sliders className="w-3.5 h-3.5" />}
                      {cat.id === "applications" && <TrendingUp className="w-3.5 h-3.5" />}
                      {cat.id === "all" && <Layers className="w-3.5 h-3.5" />}
                      <span>{cat.label}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive
                          ? isDark
                            ? "bg-[#0c1f17]/20 text-[#0c1f17]"
                            : "bg-white/20 text-white"
                          : isDark
                            ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Calculus Topics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCalculusTopics.length > 0 ? (
                  filteredCalculusTopics.map((topic, index) => {
                    const isClicked = clickedTopicId === topic.id;
                    const isDeriv = topic.subCategory === "derivatives";
                    const isLimits = topic.subCategory === "limits";
                    const isFound = topic.subCategory === "foundations";
                    const isDerivCommon = topic.subCategory === "derivatives-common";
                    const isImplicit = topic.subCategory === "implicit";
                    const isApps = topic.subCategory === "applications";

                    return (
                      <motion.article
                        key={topic.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isClicked ? 0.4 : 1,
                          y: 0,
                          scale: isClicked ? 0.97 : 1,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.02,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -4,
                          borderColor: isDeriv 
                            ? "rgba(182, 255, 46, 0.6)" 
                            : isLimits 
                              ? "rgba(20, 184, 166, 0.6)" 
                              : isDerivCommon
                                ? "rgba(56, 189, 248, 0.6)"
                                : isImplicit
                                  ? "rgba(192, 132, 252, 0.6)"
                                  : isApps
                                    ? "rgba(251, 191, 36, 0.6)"
                                    : "rgba(16, 185, 129, 0.6)",
                          boxShadow: isDark
                            ? "0 12px 30px -5px rgba(16, 185, 129, 0.25)"
                            : "0 12px 24px -5px rgba(16, 185, 129, 0.15)",
                        }}
                        className={`group relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                          isDark
                            ? "border-emerald-500/20 bg-gradient-to-br from-[#0c1f17]/90 via-[#112a20]/80 to-[#0a1812]/90 hover:border-emerald-400/50"
                            : "border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 via-white to-white hover:border-emerald-400 shadow-md shadow-emerald-100/40"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            {/* Specific Subcategory Badge */}
                            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${
                              isDeriv
                                ? isDark
                                  ? "border-lime-500/40 bg-lime-950/60 text-lime-300"
                                  : "border-lime-300 bg-lime-100 text-lime-900"
                                : isLimits
                                  ? isDark
                                    ? "border-teal-500/40 bg-teal-950/60 text-teal-300"
                                    : "border-teal-300 bg-teal-100 text-teal-900"
                                  : isDerivCommon
                                    ? isDark
                                      ? "border-sky-500/40 bg-sky-950/60 text-sky-300"
                                      : "border-sky-300 bg-sky-100 text-sky-900"
                                    : isImplicit
                                      ? isDark
                                        ? "border-purple-500/40 bg-purple-950/60 text-purple-300"
                                        : "border-purple-300 bg-purple-100 text-purple-900"
                                      : isApps
                                        ? isDark
                                          ? "border-amber-500/40 bg-amber-950/60 text-amber-300"
                                          : "border-amber-300 bg-amber-100 text-amber-900"
                                        : isDark
                                          ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                                          : "border-emerald-300 bg-emerald-100/90 text-emerald-800"
                            }`}>
                              {isDeriv && <Zap className="w-3 h-3 text-lime-400" />}
                              {isLimits && <Activity className="w-3 h-3 text-teal-400" />}
                              {isFound && <Compass className="w-3 h-3 text-emerald-400" />}
                              {isDerivCommon && <FunctionSquare className="w-3 h-3 text-sky-400" />}
                              {isImplicit && <Sliders className="w-3 h-3 text-purple-400" />}
                              {isApps && <TrendingUp className="w-3 h-3 text-amber-400" />}
                              <span>{topic.subCategoryLabel || "Calculus 1"}</span>
                            </span>

                            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono ${
                              isDark ? "border-[#333A46] bg-[#14171B] text-slate-300" : "border-slate-200 bg-slate-100 text-slate-700"
                            }`}>
                              {topic.examples.length} ex
                            </span>
                          </div>

                          <h3 className={`font-[Fraunces] text-lg font-bold transition-colors duration-200 ${
                            isDark ? "text-white group-hover:text-emerald-300" : "text-slate-900 group-hover:text-emerald-700"
                          }`}>
                            {topic.title}
                          </h3>

                          <p className={`mt-2 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {topic.summary}
                          </p>
                        </div>

                        <div className={`mt-5 flex items-center justify-between border-t pt-3 ${
                          isDark ? "border-emerald-500/20" : "border-emerald-100"
                        }`}>
                          <span className={`text-[0.7rem] font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            {topic.examples.length} verified examples
                          </span>

                          <Link
                            to={`/topics/${topic.id}`}
                            onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-extrabold transition-all duration-200 no-underline shadow-sm hover:scale-105 ${
                              isDark
                                ? "bg-emerald-500 hover:bg-emerald-400 text-[#0c1f17]"
                                : "bg-emerald-600 hover:bg-emerald-700 text-white"
                            }`}
                          >
                            <span>Read Topic</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </motion.article>
                    );
                  })
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className={`text-base font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      No Calculus topics found matching &ldquo;{topicSearch}&rdquo;
                    </p>
                    <p className={`text-xs mt-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      Try clearing the search or switching category filters above.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}