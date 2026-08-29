import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS from "../data/calculus-topics";
import ALL_CALCULUS_2_TOPICS from "../data/calculus-2-topics";
import mathBg from "../assets/math.jpeg";
import { 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Binary,
  Compass, 
  BookOpen, 
  Zap, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  TrendingUp, 
  Search, 
  X, 
  Calculator, 
  Activity,
  Landmark,
  FunctionSquare,
  Star,
  ShieldCheck,
  Bookmark,
  SlidersHorizontal,
  Maximize2,
  GraduationCap,
  Globe
} from "lucide-react";

export interface CategorizedTopic {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "linear-algebra" | "calculus";
  categoryLabel: string;
  subCategory?: string;
  subCategoryLabel?: string;
  chapterNumber?: number;
}

export interface LinearCalculatorCard {
  id: string;
  toolId: string;
  title: string;
  description: string;
  popular?: boolean;
  glyph: React.ReactNode;
}

const LINEAR_ALGEBRA_CALCULATORS: LinearCalculatorCard[] = [
  {
    id: "vector-ops",
    toolId: "vector",
    title: "Vector Operations",
    description: "Add, subtract, dot product, cross product, and more.",
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    ),
  },
  {
    id: "matrix-ops",
    toolId: "matrixops",
    title: "Matrix Operations",
    description: "Add, subtract, multiply, transpose, determinant, and inverse.",
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: "linear-system-solver",
    toolId: "equations",
    title: "Linear System Solver",
    description: "Solve systems of linear equations using Gaussian elimination, LU decomposition, and more.",
    popular: true,
    glyph: (
      <span className="font-mono text-xs font-black tracking-tighter text-white">
        Ax=b
      </span>
    ),
  },
  {
    id: "eigenvalue-calculator",
    toolId: "eigen",
    title: "Eigenvalue Calculator",
    description: "Find eigenvalues and eigenvectors of a matrix step by step.",
    glyph: (
      <span className="font-serif text-lg font-black text-white">
        λ
      </span>
    ),
  },
  {
    id: "vector-calculator",
    toolId: "vector",
    title: "Vector Calculator",
    description: "Compute magnitude, unit vector, angle between vectors, and projections.",
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L18 6" />
        <path d="M18 18H6V6" />
      </svg>
    ),
  },
  {
    id: "matrix-inverse",
    toolId: "inverse",
    title: "Matrix Inverse & Det",
    description: "Invert square matrices and calculate determinants using cofactor expansion.",
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        A⁻¹
      </span>
    ),
  },
  {
    id: "lu-decomposition",
    toolId: "lu",
    title: "LU Decomposition",
    description: "Factorize matrices into Lower and Upper triangular matrices with pivoting.",
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        PA=LU
      </span>
    ),
  },
];

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
  ...(Array.isArray(ALL_CALCULUS_TOPICS)
    ? ALL_CALCULUS_TOPICS
    : (ALL_CALCULUS_TOPICS as any)?.default || []
  ).filter((t: any) => Boolean(t && t.id && t.title)),
  ...(Array.isArray(ALL_CALCULUS_2_TOPICS)
    ? ALL_CALCULUS_2_TOPICS
    : (ALL_CALCULUS_2_TOPICS as any)?.default || []
  ).filter((t: any) => Boolean(t && t.id && t.title)),
];

export interface ChapterCardItem {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  defaultTopicCount: number;
  icon: React.ReactNode;
}

// 8 Chapter Cards for Calculus I (Chapters 1 to 8) - Matching Reference Image Precisely
export const CALCULUS_1_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "calc1-ch1",
    chapterNumber: 1,
    title: "Functions and Limits",
    description: "Learn the basics of functions, limits, and continuity.",
    defaultTopicCount: 8,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16l15-7 15 7-15 7-15-7z" />
        <path d="M7 23l15 7 15-7" />
        <path d="M7 30l15 7 15-7" />
      </svg>
    ),
  },
  {
    id: "calc1-ch2",
    chapterNumber: 2,
    title: "Derivatives",
    description: "Master the rules and techniques of differentiation.",
    defaultTopicCount: 7,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36h28" />
        <path d="M12 28l9-9 6 6 9-11" />
        <path d="M29 14h7v7" />
      </svg>
    ),
  },
  {
    id: "calc1-ch3",
    chapterNumber: 3,
    title: "Applications of Derivatives",
    description: "Use derivatives to solve real-world problems.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 14c3 18 21 18 24 0" />
        <line x1="6" y1="23" x2="38" y2="23" strokeDasharray="3 3" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "calc1-ch4",
    chapterNumber: 4,
    title: "Integrals",
    description: "Understand antiderivatives, and integration techniques.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-3xl font-bold text-[#7B1824] select-none">
        ∫
      </div>
    ),
  },
  {
    id: "calc1-ch5",
    chapterNumber: 5,
    title: "Techniques of Integration",
    description: "Learn substitution, parts, and other methods.",
    defaultTopicCount: 7,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-3xl font-black text-[#7B1824] select-none">
        Σ
      </div>
    ),
  },
  {
    id: "calc1-ch6",
    chapterNumber: 6,
    title: "Infinite Series",
    description: "Explore convergence, tests, and series.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex flex-col items-center justify-center w-10 h-10 font-serif leading-none select-none text-[#7B1824]">
        <span className="text-xl font-black">Σ</span>
        <span className="text-sm font-black -mt-1">Σ</span>
      </div>
    ),
  },
  {
    id: "calc1-ch7",
    chapterNumber: 7,
    title: "Applications of Integration",
    description: "Volume, area, and other geometric uses.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6l15 8v16l-15 8-15-8V14l15-8z" />
        <path d="M22 6v32" />
        <path d="M7 14l15 8 15-8" />
      </svg>
    ),
  },
  {
    id: "calc1-ch8",
    chapterNumber: 8,
    title: "Advanced Topics",
    description: "Higher-order derivatives, techniques and more.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8v28h28" />
        <path d="M12 30c6-1 14-8 16-18" />
        <circle cx="28" cy="12" r="2.5" fill="#7B1824" />
      </svg>
    ),
  },
];

// 8 Chapter Cards for Calculus II (Chapters 9 to 16)
export const CALCULUS_2_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "calc2-ch9",
    chapterNumber: 9,
    title: "Inverse & Transcendental Functions",
    description: "Logarithmic, exponential, and inverse trigonometric functions.",
    defaultTopicCount: 6,
    icon: (
      <span className="font-mono text-sm font-bold text-[#7B1824]">f⁻¹(x)</span>
    ),
  },
  {
    id: "calc2-ch10",
    chapterNumber: 10,
    title: "Derivatives & Integrals of Trig",
    description: "Trigonometric derivatives, integrals, and identities.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M8 22c4-12 8-12 12 0s8 12 12 0 8-12 12 0" />
      </svg>
    ),
  },
  {
    id: "calc2-ch11",
    chapterNumber: 11,
    title: "Exponential & Logarithmic Functions",
    description: "Natural logarithms, exponential growth, and decay models.",
    defaultTopicCount: 6,
    icon: (
      <span className="font-mono text-base font-bold text-[#7B1824]">ln(x)</span>
    ),
  },
  {
    id: "calc2-ch12",
    chapterNumber: 12,
    title: "Techniques of Integration",
    description: "Integration by parts, partial fractions, and trig substitutions.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-2xl font-bold text-[#7B1824]">
        ∫udv
      </div>
    ),
  },
  {
    id: "calc2-ch13",
    chapterNumber: 13,
    title: "Indeterminate Forms & Improper Integrals",
    description: "L'Hôpital's rule, infinity limits, and improper integrals.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex flex-col items-center justify-center font-mono text-xs font-bold text-[#7B1824]">
        <span>lim</span>
        <span className="text-[9px]">x→∞</span>
      </div>
    ),
  },
  {
    id: "calc2-ch14",
    chapterNumber: 14,
    title: "Infinite Sequences & Series",
    description: "Convergence tests, geometric series, and alternating series.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-2xl font-black text-[#7B1824]">
        ∑ aₙ
      </div>
    ),
  },
  {
    id: "calc2-ch15",
    chapterNumber: 15,
    title: "Power Series & Taylor Polynomials",
    description: "Taylor and Maclaurin series, radius and interval of convergence.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-sm font-bold text-[#7B1824]">
        ∑ cₙxⁿ
      </div>
    ),
  },
  {
    id: "calc2-ch16",
    chapterNumber: 16,
    title: "Polar Coordinates & Parametrics",
    description: "Parametric equations, polar curves, areas, and conic sections.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="22" cy="22" r="14" strokeDasharray="3 3" />
        <path d="M22 8c6 5 8 10 5 14s-9 2-8-3 6-5 8-3" />
      </svg>
    ),
  },
];

// 8 Chapter Cards for Linear Algebra (Chapters 1 to 8)
export const LINEAR_ALGEBRA_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "linear-ch1",
    chapterNumber: 1,
    title: "Foundations & Linear Systems",
    description: "Linear equations, Gaussian elimination, and row echelon forms.",
    defaultTopicCount: 3,
    icon: (
      <span className="font-mono text-xs font-black tracking-tight text-[#7B1824]">
        Ax=b
      </span>
    ),
  },
  {
    id: "linear-ch2",
    chapterNumber: 2,
    title: "Vector Equations & Span",
    description: "Vectors in Rⁿ, linear combinations, and spanning sets.",
    defaultTopicCount: 3,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="36" x2="36" y2="36" />
        <line x1="8" y1="36" x2="8" y2="8" />
        <line x1="8" y1="36" x2="32" y2="12" />
        <path d="M24 12h8v8" />
      </svg>
    ),
  },
  {
    id: "linear-ch3",
    chapterNumber: 3,
    title: "Matrix Algebra & Inverses",
    description: "Matrix multiplication, transpose, and invertible matrices.",
    defaultTopicCount: 3,
    icon: (
      <div className="flex items-center justify-center font-mono text-xs font-bold text-[#7B1824]">
        [A⁻¹]
      </div>
    ),
  },
  {
    id: "linear-ch4",
    chapterNumber: 4,
    title: "Determinants & Properties",
    description: "Cofactor expansion, Cramer's rule, and geometric volume.",
    defaultTopicCount: 2,
    icon: (
      <div className="flex items-center justify-center font-mono text-sm font-bold text-[#7B1824]">
        |A|
      </div>
    ),
  },
  {
    id: "linear-ch5",
    chapterNumber: 5,
    title: "Vector Spaces & Subspaces",
    description: "Subspaces, null spaces, column spaces, basis, and coordinate systems.",
    defaultTopicCount: 4,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 6 38 14 38 30 22 38 6 30 6 14" />
        <line x1="22" y1="6" x2="22" y2="38" />
        <line x1="6" y1="14" x2="38" y2="30" />
      </svg>
    ),
  },
  {
    id: "linear-ch6",
    chapterNumber: 6,
    title: "Linear Transformations & Rank",
    description: "Matrix transformations, kernel, range, and rank-nullity theorem.",
    defaultTopicCount: 2,
    icon: (
      <span className="font-mono text-xs font-bold text-[#7B1824]">
        T:V→W
      </span>
    ),
  },
  {
    id: "linear-ch7",
    chapterNumber: 7,
    title: "Eigenvalues & Diagonalization",
    description: "Characteristic polynomials, eigenspaces, and matrix powers.",
    defaultTopicCount: 2,
    icon: (
      <span className="font-serif text-2xl font-bold text-[#7B1824]">
        λ
      </span>
    ),
  },
  {
    id: "linear-ch8",
    chapterNumber: 8,
    title: "Orthogonality & Factorizations",
    description: "Inner products, Gram-Schmidt, LU, QR, and SVD factorizations.",
    defaultTopicCount: 8,
    icon: (
      <svg className="w-10 h-10 text-[#7B1824]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="36" x2="36" y2="36" />
        <line x1="8" y1="36" x2="8" y2="8" />
        <rect x="8" y="26" width="10" height="10" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

function filterTopicByCalculusChapter(topic: CategorizedTopic, chNum: number): boolean {
  const ch = (topic as any).chapterNumber;
  if (ch !== undefined && ch !== null) return ch === chNum;
  const sub = (topic.subCategory || "").toLowerCase();
  return sub === `chapter-${chNum}`;
}

function filterTopicByLinearChapter(topic: CategorizedTopic, chNum: number): boolean {
  const id = (topic.id || "").toLowerCase();
  if (chNum === 1) return id === "foundations" || id === "systems" || id === "vectors";
  if (chNum === 2) return id === "matrices" || id === "inverses" || id === "advanced-matrix-topics";
  if (chNum === 3) return id === "determinants";
  if (chNum === 4) return id === "independence-span" || id === "fundamental-subspaces" || id === "change-of-basis" || id === "complex-vector-spaces";
  if (chNum === 5) return id === "linear-transformations" || id === "rank";
  if (chNum === 6) return id === "eigen" || id === "diagonalization";
  if (chNum === 7) return id === "orthogonality" || id === "inner-product" || id === "least-squares";
  if (chNum === 8) return id === "lu" || id === "qr" || id === "svd" || id === "matrix-factorizations" || id === "quadratic-forms" || id === "numerical-linear-algebra" || id === "optimization" || id === "applications";
  return true;
}

export default function PublicPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active view: "main" | "categories" | "topics-linear" | "topics-calculus" | "topics-calculus-2"
  const [activeView, setActiveView] = useState<"main" | "categories" | "topics-linear" | "topics-calculus" | "topics-calculus-2">("main");
  const [topicSearch, setTopicSearch] = useState("");
  const [selectedLinearChapter, setSelectedLinearChapter] = useState<number | null>(null);
  const [selectedCalculusChapter, setSelectedCalculusChapter] = useState<number | null>(null);
  const [selectedCalculus2Chapter, setSelectedCalculus2Chapter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"popular" | "az" | "examples">("popular");

  // Split topics by subject
  const linearTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "linear-algebra"), []);
  const calculus1Topics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus" && ((t as any).chapterNumber || 1) <= 8), []);
  const calculus2Topics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus" && ((t as any).chapterNumber || 1) >= 9), []);
  const calculusTopics = calculus1Topics;

  // Filtered Linear Algebra topics
  const filteredLinearTopics = useMemo(() => {
    let list = linearTopics;
    if (selectedLinearChapter !== null) {
      list = list.filter((t) => filterTopicByLinearChapter(t, selectedLinearChapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );
  }, [linearTopics, topicSearch, selectedLinearChapter]);

  const sortedLinearTopics = useMemo(() => {
    let list = filteredLinearTopics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredLinearTopics, sortBy]);

  // Filtered Calculus 1 topics
  const filteredCalculus1Topics = useMemo(() => {
    let list = calculus1Topics;
    if (selectedCalculusChapter !== null) {
      list = list.filter((t) => filterTopicByCalculusChapter(t, selectedCalculusChapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculus1Topics, topicSearch, selectedCalculusChapter]);

  const sortedCalculus1Topics = useMemo(() => {
    let list = filteredCalculus1Topics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredCalculus1Topics, sortBy]);

  // Filtered Calculus 2 topics
  const filteredCalculus2Topics = useMemo(() => {
    let list = calculus2Topics;
    if (selectedCalculus2Chapter !== null) {
      list = list.filter((t) => filterTopicByCalculusChapter(t, selectedCalculus2Chapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculus2Topics, topicSearch, selectedCalculus2Chapter]);

  const sortedCalculus2Topics = useMemo(() => {
    let list = filteredCalculus2Topics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredCalculus2Topics, sortBy]);

  // Sync tab search param with view
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "home") {
      setActiveView("main");
    } else if (tab === "topics") {
      const returnView = sessionStorage.getItem("returningTopicView");
      if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "topics-calculus-2") {
        setActiveView(returnView as any);
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
    if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "topics-calculus-2" || returnView === "categories") {
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
    // If chapterNumber >= 9 it's a Calculus II topic
    const topic = ALL_TOPICS.find(t => t.id === topicId);
    const chNum = (topic as any)?.chapterNumber || 1;
    if (category === "calculus" && chNum >= 9) {
      sessionStorage.setItem("returningTopicView", "topics-calculus-2");
    } else if (category === "calculus") {
      sessionStorage.setItem("returningTopicView", "topics-calculus");
    } else {
      sessionStorage.setItem("returningTopicView", "topics-linear");
    }
    navigate(`/topics/${topicId}`);
  };

  // GSAP-Powered Live 3D Coverflow Carousel
  const carouselProgress = useRef({ value: 2 });
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const gsapTimelineRef = useRef<gsap.core.Tween | null>(null);
  const isUserInteracting = useRef(false);
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(2);

  const update3DCarousel = useCallback(() => {
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const current = carouselProgress.current.value;
    const activeIdx = ((Math.round(current) % total) + total) % total;
    setActiveIndicatorIndex(activeIdx);

    cardElementsRef.current.forEach((cardEl, idx) => {
      if (!cardEl) return;

      let diff = (idx - current) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const absDiff = Math.abs(diff);

      if (absDiff > 2.6) {
        gsap.set(cardEl, { opacity: 0, pointerEvents: "none", display: "none" });
        return;
      }

      const x = diff * 225;
      const rotateY = -diff * 14;
      const rotateZ = diff * 1.6;
      const scale = Math.max(0.78, 1.06 - absDiff * 0.12);
      const zIndex = Math.round(50 - absDiff * 10);
      const opacity = Math.max(0, 1 - Math.pow(absDiff / 2.7, 2));
      const isCenter = absDiff < 0.45;

      gsap.set(cardEl, {
        display: "flex",
        x: x,
        y: "-50%",
        rotateY: rotateY,
        rotateZ: rotateZ,
        scale: scale,
        zIndex: zIndex,
        opacity: opacity,
        pointerEvents: "auto",
        boxShadow: isCenter
          ? "0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(192,33,43,0.35)"
          : "0 12px 35px rgba(0,0,0,0.4)",
      });

      if (isCenter) {
        cardEl.classList.add("ring-2", "ring-[#C0212B]", "ring-offset-2", "ring-offset-black/40");
      } else {
        cardEl.classList.remove("ring-2", "ring-[#C0212B]", "ring-offset-2", "ring-offset-black/40");
      }
    });
  }, []);

  const startGSAPLiveMotion = useCallback(() => {
    if (gsapTimelineRef.current) {
      gsapTimelineRef.current.kill();
    }

    // Smooth, continuous slow 3D conveyor rotation using GSAP (~5.0 seconds per card)
    gsapTimelineRef.current = gsap.to(carouselProgress.current, {
      value: `+=${LINEAR_ALGEBRA_CALCULATORS.length}`,
      duration: LINEAR_ALGEBRA_CALCULATORS.length * 5.0,
      ease: "none",
      repeat: -1,
      onUpdate: update3DCarousel,
    });
  }, [update3DCarousel]);

  useEffect(() => {
    if (activeView !== "main") return;

    startGSAPLiveMotion();
    update3DCarousel();

    return () => {
      if (gsapTimelineRef.current) gsapTimelineRef.current.kill();
    };
  }, [activeView, startGSAPLiveMotion, update3DCarousel]);

  const smoothlyTransitionTo = (targetIdx: number) => {
    if (gsapTimelineRef.current) gsapTimelineRef.current.kill();

    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const current = carouselProgress.current.value;
    const currentNormalized = ((current % total) + total) % total;
    let diff = targetIdx - currentNormalized;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    gsap.to(carouselProgress.current, {
      value: current + diff,
      duration: 0.9,
      ease: "power3.out",
      onUpdate: update3DCarousel,
      onComplete: () => {
        gsap.delayedCall(3, () => {
          if (!isUserInteracting.current) {
            startGSAPLiveMotion();
          }
        });
      },
    });
  };

  const handlePrevSlide = () => {
    const current = Math.round(carouselProgress.current.value);
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const prevIdx = (((current - 1) % total) + total) % total;
    smoothlyTransitionTo(prevIdx);
  };

  const handleNextSlide = () => {
    const current = Math.round(carouselProgress.current.value);
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const nextIdx = (current + 1) % total;
    smoothlyTransitionTo(nextIdx);
  };

  const handleMouseEnter = () => {
    isUserInteracting.current = true;
    if (gsapTimelineRef.current) {
      gsap.to(gsapTimelineRef.current, { timeScale: 0, duration: 0.6, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    isUserInteracting.current = false;
    if (gsapTimelineRef.current) {
      gsap.to(gsapTimelineRef.current, { timeScale: 1, duration: 0.9, ease: "power2.in" });
    }
  };

  useEffect(() => {
    if (activeView !== "main") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeView]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {activeView === "main" ? (
        /* ========================================================================= */
        /* VIEW 1: MATHVERSE LINEAR ALGEBRA 3D CAROUSEL HERO (EXACT REFERENCE IMAGE) */
        /* ========================================================================= */
        <motion.div
          key="main-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative min-h-screen bg-[#090D14] overflow-hidden flex flex-col justify-between"
        >
          {/* ── Authentic Chalkboard Background & Vignettes ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={mathBg}
              alt="Mathematics blackboard background"
              className="w-full h-full object-cover object-center opacity-40 scale-[1.02]"
            />
            {/* Smooth dark gradient scrims for maximum contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(9,13,20,0.85)_100%)]" />
          </div>

          {/* ── Main Hero Content Layout ── */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-8 flex flex-col justify-between flex-1">
            
            {/* ── Upper Hero: Text & CTA Header ── */}
            <div className="max-w-2xl pt-2 sm:pt-4">
              {/* Red Tag / Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[#C0212B] font-extrabold text-xs sm:text-[13px] tracking-[0.25em] uppercase block mb-2 sm:mb-3">
                  POWERFUL TOOLS
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-3 sm:mb-4"
              >
                <span className="text-white block font-black">Linear Algebra</span>
                <span className="text-[#991B1B] block font-black">Calculators</span>
              </motion.h1>

              {/* Subtitle Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="text-[#D1D5DB] text-xs sm:text-sm md:text-base max-w-md font-normal leading-relaxed mb-5 sm:mb-6"
              >
                Solve vectors, matrices, systems of equations, and more with our easy-to-use linear algebra calculators.
              </motion.p>

              {/* CTA Action Buttons: Explore Calculators & Browse Topics */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                {/* Primary Button: Explore Calculators */}
                <button
                  onClick={() => navigate("/calculator-hub")}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#7B1824]/40 hover:shadow-xl hover:shadow-[#7B1824]/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 shrink-0" />
                  <span>Explore Calculators</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                {/* Secondary Button: Browse Topics */}
                <button
                  onClick={() => {
                    setActiveView("categories");
                    navigate("/?tab=topics");
                    window.dispatchEvent(new CustomEvent("navtabchange", { detail: "topics" }));
                  }}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 shrink-0 text-white/90" />
                  <span>Browse Topics</span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-white/90" />
                </button>
              </motion.div>
            </div>

            {/* ── Middle Hero: GSAP-Powered Live Moving 3D Carousel ── */}
            <div 
              className="relative w-full my-6 sm:my-8 py-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Left Circular Arrow Button */}
              <button
                onClick={handlePrevSlide}
                aria-label="Previous calculator"
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#7B1824] hover:bg-[#9B1B26] text-white shadow-xl shadow-black/50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Right Circular Arrow Button */}
              <button
                onClick={handleNextSlide}
                aria-label="Next calculator"
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#7B1824] hover:bg-[#9B1B26] text-white shadow-xl shadow-black/50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* 3D Carousel Stage */}
              <div className="relative mx-auto h-[320px] sm:h-[340px] max-w-[1280px] px-10 sm:px-16 flex items-center justify-center overflow-hidden [perspective:1400px]">
                <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                  {LINEAR_ALGEBRA_CALCULATORS.map((calc, idx) => (
                    <div
                      key={calc.id}
                      ref={(el) => {
                        cardElementsRef.current[idx] = el;
                      }}
                      onClick={() => smoothlyTransitionTo(idx)}
                      className="absolute top-1/2 w-[220px] sm:w-[245px] lg:w-[255px] h-[270px] sm:h-[285px] rounded-[22px] bg-white p-5 sm:p-6 flex flex-col justify-between cursor-pointer select-none transition-shadow duration-300 will-change-transform"
                    >
                      {/* Card Top: Icon & (Optional) Popular Badge */}
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20">
                            {calc.glyph}
                          </div>

                          {calc.popular && (
                            <div className="inline-flex items-center gap-1 rounded-full border border-[#f3c5cb] bg-[#fbf2f4] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#7B1824]">
                              <Star className="h-3 w-3 fill-[#7B1824] text-[#7B1824]" />
                              <span>Popular</span>
                            </div>
                          )}
                        </div>

                        {/* Card Title */}
                        <h3 className="mt-4 text-base sm:text-lg font-black text-[#111827] tracking-tight leading-snug">
                          {calc.title}
                        </h3>

                        {/* Card Description */}
                        <p className="mt-2 text-[0.78rem] sm:text-xs text-[#5D6067] font-normal leading-relaxed line-clamp-3">
                          {calc.description}
                        </p>
                      </div>

                      {/* Card Bottom: Calculate Action Link */}
                      <div className="pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/calculators?tool=${calc.toolId}`);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#7B1824] hover:text-[#520d16] group/btn transition-all duration-150 cursor-pointer"
                        >
                          <span>Calculate</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators / Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {LINEAR_ALGEBRA_CALCULATORS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => smoothlyTransitionTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === activeIndicatorIndex
                        ? "w-8 h-1.5 bg-[#C0212B]"
                        : "w-3.5 h-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
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
                  Interactive learning, calculators, and
                  <br className="hidden sm:inline" />
                  step-by-step solutions all in one place.
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
          {/* 2. THREE MAIN DISCIPLINE CARDS (Overlapping Hero Bottom)                 */}
          {/* ========================================================================= */}
          <section id="disciplines-section" className="relative z-20 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 -mt-16 sm:-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Linear Algebra */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedLinearChapter(null);
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
                  setSelectedCalculusChapter(null);
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
                        {calculusTopics.length} Topics Available
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

              {/* Card 3: Calculus II */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedCalculus2Chapter(null);
                  setActiveView("topics-calculus-2");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#EAE2E4] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#cf9fa6] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#d6b1b7] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#7B1824]">
                      CALC II
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#7B1824] transition-colors">
                        Calculus II
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#7B1824]">
                        {calculus2Topics.length} Topics Available
                      </p>
                    </div>

                    {/* Sigma Badge */}
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 font-mono font-bold leading-tight shrink-0">
                      <span className="text-lg font-serif">Σ</span>
                      <span className="text-[9px] mt-0.5 opacity-80">n=1</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Explore advanced integration, transcendental functions, infinite series, polar coordinates, and conic sections.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#7B1824]">∫</span>
                      Integration
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#7B1824]">∞</span>
                      Series
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Compass className="h-3.5 w-3.5 text-[#7B1824]" />
                      Polar &amp; Conics
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Activity className="h-3.5 w-3.5 text-[#7B1824]" />
                      Transcendentals
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
          </section>
        </motion.div>
      ) : activeView === "topics-linear" ? (
        /* ========================================================================= */
        /* VIEW 3: LINEAR ALGEBRA TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)   */
        /* ========================================================================= */
        <motion.div
          key="topics-linear-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Authentic Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#3D0E14] border border-[#5E1620] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF6575] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#DE2438]">Linear Algebra Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore linear systems, matrix transformations, vector spaces, eigenvalues, and matrix factorizations with step-by-step verified explanations.
                  </p>
                </div>

                {/* Back Button to Disciplines / All Topics */}
                <button
                  onClick={() => {
                    setSelectedLinearChapter(null);
                    setTopicSearch("");
                    setActiveView("categories");
                    navigate("/?tab=topics");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer self-start backdrop-blur-md shadow-sm hover:scale-105 active:scale-95 shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Topics</span>
                </button>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedLinearChapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = LINEAR_ALGEBRA_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedLinearChapter);
                  const chTopics = sortedLinearTopics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE2E4] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedLinearChapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedLinearChapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedLinearChapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] hover:border-[#cf9fa6] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#7B1824] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "linear-algebra", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#EAE2E4]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LINEAR_ALGEBRA_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = linearTopics.filter(
                    (t) => filterTopicByLinearChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedLinearChapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#EAE2E4] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#FFF0F3]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B1824] group-hover:bg-[#9B1B28] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </motion.div>
      ) : activeView === "topics-calculus" ? (
        /* ========================================================================= */
        /* VIEW 4: CALCULUS 1 TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)        */
        /* ========================================================================= */
        <motion.div
          key="topics-calculus-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Authentic Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#3D0E14] border border-[#5E1620] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF6575] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#DE2438]">Calculus Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore foundations of Calculus, Limit &amp; Continuity, and Derivatives with step-by-step verified explanations.
                  </p>
                </div>

                {/* Back Button to Disciplines / All Topics */}
                <button
                  onClick={() => {
                    setSelectedCalculusChapter(null);
                    setTopicSearch("");
                    setActiveView("categories");
                    navigate("/?tab=topics");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer self-start backdrop-blur-md shadow-sm hover:scale-105 active:scale-95 shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Topics</span>
                </button>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedCalculusChapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = CALCULUS_1_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedCalculusChapter);
                  const chTopics = sortedCalculus1Topics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE2E4] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedCalculusChapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedCalculusChapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedCalculusChapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] hover:border-[#cf9fa6] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#7B1824] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#EAE2E4]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CALCULUS_1_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = calculus1Topics.filter(
                    (t) => filterTopicByCalculusChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedCalculusChapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#EAE2E4] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#FFF0F3]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B1824] group-hover:bg-[#9B1B28] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </motion.div>
      ) : activeView === "topics-calculus-2" ? (
        /* ===================================================================== */
        /* VIEW 5: CALCULUS II TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)   */
        /* ===================================================================== */
        <motion.div
          key="topics-calculus-2-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#3D0E14] border border-[#5E1620] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF6575] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#DE2438]">Calculus II Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore advanced integration techniques, transcendental functions, infinite series, polar coordinates, and conic sections with step-by-step explanations.
                  </p>
                </div>

                {/* Back Button to Disciplines / All Topics */}
                <button
                  onClick={() => {
                    setSelectedCalculus2Chapter(null);
                    setTopicSearch("");
                    setActiveView("categories");
                    navigate("/?tab=topics");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer self-start backdrop-blur-md shadow-sm hover:scale-105 active:scale-95 shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Topics</span>
                </button>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedCalculus2Chapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = CALCULUS_2_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedCalculus2Chapter);
                  const chTopics = sortedCalculus2Topics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE2E4] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedCalculus2Chapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedCalculus2Chapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedCalculus2Chapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] hover:border-[#cf9fa6] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#7B1824] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#EAE2E4]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CALCULUS_2_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = calculus2Topics.filter(
                    (t) => filterTopicByCalculusChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedCalculus2Chapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#EAE2E4] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#FFF0F3]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#7B1824] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B1824] group-hover:bg-[#9B1B28] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}