import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS, { CALCULUS_SUB_CATEGORIES } from "../data/calculus-topics";
import type { CalculusSubCategoryId } from "../data/calculus-topics";
import mathBg from "../assets/math.jpeg";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Binary, 
  Compass, 
  BookOpen, 
  Zap, 
  ChevronRight, 
  ChevronDown, 
  TrendingUp, 
  Search, 
  X, 
  Calculator, 
  FunctionSquare, 
  GraduationCap, 
  Activity,
  Landmark,
  Maximize2,
  Sliders,
  Star,
  Users,
  Award,
  ShieldCheck,
  Bookmark
} from "lucide-react";

export interface CategorizedTopic {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "linear-algebra" | "calculus";
  categoryLabel: string;
  subCategory?: CalculusSubCategoryId;
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

export default function PublicPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active view: "main" | "categories" | "topics-linear" | "topics-calculus"
  const [activeView, setActiveView] = useState<"main" | "categories" | "topics-linear" | "topics-calculus">("main");
  const [topicSearch, setTopicSearch] = useState("");
  const [selectedCalculusCategory, setSelectedCalculusCategory] = useState<CalculusSubCategoryId>("all");
  const [moreCalculusDropdownOpen, setMoreCalculusDropdownOpen] = useState(false);
  const moreCalculusDropdownRef = useRef<HTMLDivElement>(null);

  // Split topics by subject
  const linearTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "linear-algebra"), []);
  const calculusTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus"), []);

  // Filtered Linear Algebra topics
  const filteredLinearTopics = useMemo(() => {
    const query = topicSearch.toLowerCase().trim();
    if (!query) return linearTopics;
    return linearTopics.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );
  }, [linearTopics, topicSearch]);

  // Filtered Calculus topics
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

  // Sync tab search param with view
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "home") {
      setActiveView("main");
    } else if (tab === "topics") {
      const returnView = sessionStorage.getItem("returningTopicView");
      if (returnView === "topics-linear" || returnView === "topics-calculus") {
        setActiveView(returnView);
        sessionStorage.removeItem("returningTopicView");
      } else {
        setActiveView((prev) => (prev === "main" ? "categories" : prev));
      }
    }
  }, [location.search, location.pathname]);

  // Listen to navigation events from Navbar
  useEffect(() => {
    const handleNavTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<"home" | "calculators" | "topics">;
      if (customEvent.detail === "home") {
        setActiveView("main");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (customEvent.detail === "topics") {
        setActiveView("categories");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("navtabchange", handleNavTabChange);
    return () => window.removeEventListener("navtabchange", handleNavTabChange);
  }, []);

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

  // Broadcast current activeView to Navbar
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("pageviewchange", { detail: { view: activeView } }));
  }, [activeView]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (moreCalculusDropdownRef.current && !moreCalculusDropdownRef.current.contains(e.target as Node)) {
        setMoreCalculusDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Topic Mathematical Icon / Glyph Renderer matching reference image style
  const renderTopicGlyph = (topic: CategorizedTopic) => {
    const id = (topic.id || "").toLowerCase();
    const title = (topic.title || "").toLowerCase();

    if (id.includes("foundations") || title.includes("foundations")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm">
          <Landmark className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("real-number") || title.includes("real number") || id.includes("interval") || title.includes("interval")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-serif text-xl font-bold text-white shadow-sm">
          ℝ
        </div>
      );
    }
    if (id.includes("distance") || id.includes("midpoint") || title.includes("distance") || title.includes("midpoint")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm">
          <TrendingUp className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("line") || id.includes("slope") || title.includes("line") || title.includes("slope")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm">
          <Activity className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("function") || title.includes("function")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-mono text-sm font-bold text-white shadow-sm">
          f(x)
        </div>
      );
    }
    if (id.includes("domain") || id.includes("range") || title.includes("domain") || title.includes("range")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-mono text-xs font-bold text-white shadow-sm">
          [x]
        </div>
      );
    }
    if (id.includes("limit") || title.includes("limit")) {
      return (
        <div className="flex flex-col items-center justify-center h-10 w-10 rounded-xl bg-[#7B1824] text-white font-mono leading-tight shadow-sm">
          <span className="text-[10px] font-bold">lim</span>
          <span className="text-[7.5px] opacity-90">x→a</span>
        </div>
      );
    }
    if (id.includes("derivative") || title.includes("derivative")) {
      return (
        <div className="flex flex-col items-center justify-center h-10 w-10 rounded-xl bg-[#7B1824] text-white font-mono leading-tight shadow-sm">
          <span className="text-[9px] font-bold border-b border-white/60 pb-[0.5px]">d</span>
          <span className="text-[9px] font-bold pt-[0.5px]">dx</span>
        </div>
      );
    }
    if (id.includes("integral") || id.includes("integration") || title.includes("integral")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-serif text-xl font-bold text-white shadow-sm">
          ∫
        </div>
      );
    }
    if (id.includes("matrix") || id.includes("determinant") || id.includes("eigen") || id.includes("vector")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-mono text-xs font-bold text-white shadow-sm">
          [A]
        </div>
      );
    }
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] font-serif text-lg font-bold text-white shadow-sm">
        λ
      </div>
    );
  };

  const handleTopicClick = (topicId: string, category: "linear-algebra" | "calculus", e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem("returningTopicView", category === "calculus" ? "topics-calculus" : "topics-linear");
    navigate(`/topics/${topicId}`);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {activeView === "main" ? (
        /* ========================================================================= */
        /* VIEW 1: MATHVERSE DARK HERO — MATCHING REFERENCE IMAGE                   */
        /* ========================================================================= */
        <motion.div
          key="main-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mv-hero-shell"
        >
          <section className="mv-hero-section relative min-h-screen">
            {/* ── Background Image ── */}
            <div className="mv-hero-bg">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="mv-hero-bg-img"
              />
              <div className="mv-hero-scrim" />
              <div className="mv-hero-scrim-bottom" />
            </div>

            {/* ── Main Hero Content Wrapper ── */}
            <div className="mv-hero-content-wrapper">
              <div className="mv-hero-content">
                <div className="mv-hero-inner">
                  {/* Main Headline */}
                  <motion.h1
                    className="mv-hero-heading"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="mv-heading-white">Explore.</span>
                    <br />
                    <span className="mv-heading-red">Calculate.</span>
                    <br />
                    <span className="mv-heading-white">Understand.</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="mv-hero-desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Powerful math tools and in-depth topics<br />
                    to help you learn, solve, and master<br />
                    mathematics with confidence.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="mv-hero-ctas"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <button
                      onClick={() => navigate("/calculator-hub")}
                      className="mv-btn-red"
                    >
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="16" height="20" x="4" y="2" rx="2"/>
                        <line x1="8" x2="16" y1="6" y2="6"/>
                        <line x1="16" x2="16" y1="14" y2="18"/>
                        <path d="M16 10h.01"/>
                        <path d="M12 10h.01"/>
                        <path d="M8 10h.01"/>
                        <path d="M12 14h.01"/>
                        <path d="M8 14h.01"/>
                        <path d="M12 18h.01"/>
                        <path d="M8 18h.01"/>
                      </svg>
                      <span>Explore Calculators</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    <button
                      onClick={() => {
                        setActiveView("categories");
                        navigate("/?tab=topics");
                        window.dispatchEvent(new CustomEvent("navtabchange", { detail: "topics" }));
                      }}
                      className="mv-btn-outline cursor-pointer"
                    >
                      <BookOpen className="w-5 h-5 shrink-0 text-white/90" />
                      <span>Browse Topics</span>
                      <ArrowRight className="w-4 h-4 shrink-0 text-white/90" />
                    </button>
                  </motion.div>

                  {/* Trust Badge */}
                  <motion.div
                    className="mv-trust-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="mv-trust-star-box">
                      <Star className="w-3.5 h-3.5 text-[#C0212B] fill-[#C0212B]" />
                    </div>
                    <span>Trusted by students and learners worldwide</span>
                  </motion.div>
                </div>
              </div>

              {/* ── Floating Stats Card Container ── */}
              <motion.div>
                <div>             
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      ) : activeView === "categories" ? (
        /* ========================================================================= */
        /* VIEW 2: CHOOSE YOUR TOPIC (MATCHING IMAGE 2 EXACTLY)                      */
        /* ========================================================================= */
        <motion.div
          key="categories-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="relative min-h-screen bg-[#FDFBFB] pb-20"
        >
          {/* ========================================================================= */}
          {/* 1. TOP HERO SECTION (Chalkboard Background with Student)                 */}
          {/* ========================================================================= */}
          <section className="relative w-full overflow-hidden bg-[#0e131b] pt-20 pb-24 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36">
            {/* Blackboard Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.75rem] leading-[1.08]"
                >
                  <span className="text-[#E05260]">ALL TOPICS.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-5 max-w-lg text-sm sm:text-base font-normal text-white/80 leading-relaxed"
                >
                  Interactive learning, powerful calculators, and
                  <br className="hidden sm:inline" />
                  step-by-step solutions — all in one place.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-7 flex flex-wrap items-center gap-3.5"
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById("disciplines-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#7B1824]/30 transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Explore Topics</span>
                  </button>

                  <button
                    onClick={() => navigate("/calculator-hub")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-[#F9FAFB] px-5 py-3 text-xs sm:text-sm font-bold text-[#111827] shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <Calculator className="h-4 w-4 text-[#7B1824]" />
                    <span>Try Calculators</span>
                  </button>
                </motion.div>

                {/* Down Arrow Chevron */}
                <div className="mt-8">
                  <ChevronDown className="h-5 w-5 text-white/70 animate-bounce" />
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 2. TWO MAIN DISCIPLINE CARDS (Overlapping Hero Bottom)                   */}
          {/* ========================================================================= */}
          <section id="disciplines-section" className="relative z-20 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 -mt-16 sm:-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Card 1: Linear Algebra */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setActiveView("topics-linear");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#EAE2E4] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#cf9fa6] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20">
                      <Calculator className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#d6b1b7] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#7B1824]">
                      MATH
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#7B1824] transition-colors">
                        Linear Algebra
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#7B1824]">
                        26 Topics Available
                      </p>
                    </div>

                    {/* 01 / 10 Crimson Graphic Badge */}
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 font-mono font-bold leading-tight shrink-0">
                      <span className="text-xs">01</span>
                      <span className="h-[1px] w-6 bg-white/40 my-0.5" />
                      <span className="text-xs">10</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Solve matrices, eigenvectors, vector spaces, and linear systems with step-by-step numerical solutions.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Binary className="h-3.5 w-3.5 text-[#7B1824]" />
                      Matrix Solvers
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#7B1824]">∑</span>
                      Eigen Systems
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Layers className="h-3.5 w-3.5 text-[#7B1824]" />
                      Vector Spaces
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Zap className="h-3.5 w-3.5 text-[#7B1824]" />
                      LU / QR / SVD
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Calculus I */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedCalculusCategory("all");
                  setActiveView("topics-calculus");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#EAE2E4] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#cf9fa6] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#d6b1b7] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#7B1824]">
                      CALC I
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#7B1824] transition-colors">
                        Calculus I
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#7B1824]">
                        90 Topics Available
                      </p>
                    </div>

                    {/* Integral Graphic Mockup */}
                    <div className="relative flex h-14 w-18 items-center justify-center rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] p-1.5 shadow-xs shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 70 40" fill="none">
                        <path d="M5 35 Q20 5, 45 18 T65 8" stroke="#7B1824" strokeWidth="1.8" />
                        <path d="M5 35 Q20 5, 45 18 T65 8 L65 35 L5 35 Z" fill="rgba(123, 24, 36, 0.15)" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Master foundations of calculus, limits &amp; continuity, differentiation rules, tangent lines, and calculus essentials.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Zap className="h-3.5 w-3.5 text-[#7B1824]" />
                      Derivatives
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Activity className="h-3.5 w-3.5 text-[#7B1824]" />
                      Limit &amp; Continuity
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Compass className="h-3.5 w-3.5 text-[#7B1824]" />
                      Foundations
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <FunctionSquare className="h-3.5 w-3.5 text-[#7B1824]" />
                      Functions &amp; Graphs
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 3. 6-FEATURE FOOTER CARD (Matching Image 3 Bottom Bar)                    */}
          {/* ========================================================================= */}
          <section className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 mt-12 sm:mt-16">
            <div className="rounded-[26px] border border-[#EAE2E4] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
                {/* Feature 1: Smart Search */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <Search className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Smart Search</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Search any topic, formula or problem instantly.
                  </p>
                </div>

                {/* Feature 2: Powerful Calculators */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Powerful Calculators</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Advanced tools for solving complex math problems.
                  </p>
                </div>

                {/* Feature 3: Step-by-Step Solutions */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Step-by-Step Solutions</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Detailed solutions with clear explanations.
                  </p>
                </div>

                {/* Feature 4: Verified Examples */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Verified Examples</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Explore real examples with verified answers.
                  </p>
                </div>

                {/* Feature 5: Save & Organize */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Save &amp; Organize</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Bookmark topics and track your progress.
                  </p>
                </div>

                {/* Feature 6: Learn Analytics */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF2F4] text-[#7B1824]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827]">Learn Analytics</h4>
                  <p className="mt-1 text-[0.72rem] text-[#6B7280] leading-snug">
                    Visualize your learning and improvement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      ) : activeView === "topics-linear" ? (
        /* ========================================================================= */
        /* VIEW 3: LINEAR ALGEBRA TOPICS LIST (SIDEBAR + 3-COL GRID)                */
        /* ========================================================================= */
        <motion.div
          key="topics-linear-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {/* Back to Categories */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setActiveView("categories")}
              className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-bold text-[#374151] hover:bg-[#F9FAFB] transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Categories</span>
            </button>
          </div>

          {/* Sidebar + Main Grid Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] px-2 mb-3">
                Browse Topics
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setTopicSearch("")}
                  className="topic-sidebar-item active"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Layers className="w-4 h-4 text-[#7B1824]" />
                    <span>All Topics</span>
                  </div>
                  <span className="topic-sidebar-count">{linearTopics.length}</span>
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full space-y-6">
              {/* Top Bar with Title & Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm">
                      <Binary className="w-4 h-4" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                      Linear Algebra Topics
                    </h2>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#d6b1b7] bg-[#fbf3f5] text-[#7B1824]">
                      {linearTopics.length} Topics
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                    Explore linear systems, matrix transformations, and step-by-step verified explanations.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setTopicSearch("");
                    setSelectedCalculusCategory("all");
                    setActiveView("topics-calculus");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E5E7EB] bg-white text-xs font-bold text-[#7B1824] hover:bg-[#FDF2F4] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Go to Calculus Topics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search linear topics (e.g. matrices, span, eigen...)"
                  value={topicSearch}
                  onChange={(e) => setTopicSearch(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-10 py-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7B1824] shadow-sm"
                />
                {topicSearch && (
                  <button
                    onClick={() => setTopicSearch("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* 3-Column Topic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredLinearTopics.length > 0 ? (
                  filteredLinearTopics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={(e) => handleTopicClick(topic.id, "linear-algebra", e)}
                      className="group flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 hover:border-[#d6b1b7] hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <div>
                        {/* Icon & Examples badge */}
                        <div className="flex items-center justify-between mb-4">
                          {renderTopicGlyph(topic)}
                          <span className="text-[11px] font-medium text-[#6B7280]">
                            {topic.examples.length} examples
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug">
                          {topic.title}
                        </h3>

                        <p className="mt-1.5 text-xs text-[#6B7280] line-clamp-3 leading-relaxed font-normal">
                          {topic.summary}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                        <span className="text-xs font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                          View Topic <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center text-[#6B7280]">
                    No linear algebra topics found matching &quot;{topicSearch}&quot;.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* ========================================================================= */
        /* VIEW 4: CALCULUS 1 TOPICS (MATCHING IMAGE 3 EXACTLY)                      */
        /* ========================================================================= */
        <motion.div
          key="topics-calculus-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          {/* Back to Categories Button */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setActiveView("categories")}
              className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-bold text-[#374151] hover:bg-[#F9FAFB] transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Categories</span>
            </button>
          </div>

          {/* Sidebar + Main Grid Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] px-2 mb-3">
                Browse Topics
              </div>

              <div className="flex flex-col gap-1">
                {CALCULUS_SUB_CATEGORIES.map((cat) => {
                  const isActive = selectedCalculusCategory === cat.id;
                  const count = cat.id === "all" 
                    ? calculusTopics.length 
                    : calculusTopics.filter(t => t.subCategory === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCalculusCategory(cat.id as CalculusSubCategoryId)}
                      className={`topic-sidebar-item ${isActive ? "active" : ""}`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        {cat.id === "all" && <Layers className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "foundations" && <Landmark className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "limits" && <Activity className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "derivatives" && <Zap className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "derivatives-common" && <FunctionSquare className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "implicit" && <Sliders className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "applications" && <TrendingUp className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "optimization" && <Maximize2 className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "lhopital" && <Binary className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "intro-integration" && <BookOpen className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "mvt-extrema" && <Activity className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "definite-integrals" && <Calculator className="w-4 h-4 text-[#7B1824]" />}
                        {cat.id === "fundamental-theorem" && <Sparkles className="w-4 h-4 text-[#7B1824]" />}
                        <span className="truncate">{cat.label}</span>
                      </div>
                      <span className="topic-sidebar-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full space-y-5">
              {/* Top Bar with Title & Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                      Calculus 1 Topics
                    </h2>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#d6b1b7] bg-[#fbf3f5] text-[#7B1824]">
                      {calculusTopics.length} Topics
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                    Explore foundations of Calculus, Limit &amp; Continuity, and Derivatives with step-by-step verified explanations.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setTopicSearch("");
                    setActiveView("topics-linear");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E5E7EB] bg-white text-xs font-bold text-[#7B1824] hover:bg-[#FDF2F4] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Go to Linear Algebra Topics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search topics (e.g. Limits, Functions...)"
                  value={topicSearch}
                  onChange={(e) => setTopicSearch(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-10 py-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7B1824] shadow-sm"
                />
                {topicSearch && (
                  <button
                    onClick={() => setTopicSearch("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Horizontal Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCalculusCategory("all")}
                  className={`filter-pill ${selectedCalculusCategory === "all" ? "active" : ""}`}
                >
                  <span>All Topics</span>
                  <span className="pill-count">{calculusTopics.length}</span>
                </button>

                {CALCULUS_SUB_CATEGORIES.slice(1, 5).map((cat) => {
                  const isActive = selectedCalculusCategory === cat.id;
                  const count = calculusTopics.filter(t => t.subCategory === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCalculusCategory(cat.id as CalculusSubCategoryId)}
                      className={`filter-pill ${isActive ? "active" : ""}`}
                    >
                      {cat.id === "foundations" && <Landmark className="w-3.5 h-3.5 text-[#7B1824]" />}
                      {cat.id === "limits" && <Activity className="w-3.5 h-3.5 text-[#7B1824]" />}
                      {cat.id === "derivatives" && <Zap className="w-3.5 h-3.5 text-[#7B1824]" />}
                      {cat.id === "derivatives-common" && <FunctionSquare className="w-3.5 h-3.5 text-[#7B1824]" />}
                      <span>{cat.label}</span>
                      <span className="pill-count">{count}</span>
                    </button>
                  );
                })}

                {/* More Dropdown */}
                <div className="relative" ref={moreCalculusDropdownRef}>
                  <button
                    onClick={() => setMoreCalculusDropdownOpen(!moreCalculusDropdownOpen)}
                    className="filter-pill cursor-pointer"
                  >
                    <span>More</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreCalculusDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {moreCalculusDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute left-0 top-full mt-1.5 w-64 rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-xl z-50"
                      >
                        {CALCULUS_SUB_CATEGORIES.slice(5).map((cat) => {
                          const count = calculusTopics.filter(t => t.subCategory === cat.id).length;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setSelectedCalculusCategory(cat.id as CalculusSubCategoryId);
                                setMoreCalculusDropdownOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-[#374151] hover:bg-[#FDF2F4] hover:text-[#7B1824] rounded-lg transition-colors text-left cursor-pointer"
                            >
                              <span>{cat.label}</span>
                              <span className="text-[10px] font-bold text-[#9CA3AF]">{count}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* 3-Column Topic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCalculusTopics.length > 0 ? (
                  filteredCalculusTopics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                      className="group flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 hover:border-[#d6b1b7] hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <div>
                        {/* Icon & Examples badge */}
                        <div className="flex items-center justify-between mb-4">
                          {renderTopicGlyph(topic)}
                          <span className="text-[11px] font-medium text-[#6B7280]">
                            {topic.examples.length} examples
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug">
                          {topic.title}
                        </h3>

                        <p className="mt-1.5 text-xs text-[#6B7280] line-clamp-3 leading-relaxed font-normal">
                          {topic.summary}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                        <span className="text-xs font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                          View Topic <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center text-[#6B7280]">
                    No calculus topics found matching &quot;{topicSearch}&quot;.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}