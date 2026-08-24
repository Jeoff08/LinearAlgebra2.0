import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS from "../data/calculus-topics";
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
];

// Calculus Sidebar / Filter Categories (Matching Reference Image)
const CALCULUS_CATEGORIES = [
  { id: "all", label: "All Topics", icon: <Layers className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "foundations", label: "Foundations of Calculus", icon: <Landmark className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "limits", label: "Limit and Continuity", icon: <Activity className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "derivatives", label: "Derivatives", icon: <Zap className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "derivatives-common", label: "Derivatives of common function", icon: <FunctionSquare className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "implicit", label: "Implicit differentiation", icon: <SlidersHorizontal className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "applications-derivatives", label: "Applications of derivatives", icon: <TrendingUp className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "optimization", label: "Optimization", icon: <Maximize2 className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "lhopital", label: "L'Hôpital's Rule & Asymptotes", icon: <span className="font-serif font-bold text-xs text-[#7B1824] shrink-0">lim</span> },
  { id: "integration", label: "Introduction to integration", icon: <BookOpen className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "mvt-extrema", label: "Mean value theorem & Extrema", icon: <Activity className="w-4 h-4 text-[#7B1824] shrink-0" /> },
];

function filterTopicByCalculusCategory(topic: CategorizedTopic, catId: string): boolean {
  if (catId === "all") return true;
  const id = (topic.id || "").toLowerCase();
  const sub = (topic.subCategory || "").toLowerCase();

  if (catId === "foundations") {
    return sub === "chapter-1" || id.includes("real-number") || id.includes("interval") || id.includes("distance") || id.includes("midpoint") || id.includes("line") || id.includes("circle") || id.includes("function");
  }
  if (catId === "limits") {
    return sub === "chapter-2" || id.includes("limit") || id.includes("continuity");
  }
  if (catId === "derivatives") {
    return (sub === "chapter-3" && !id.includes("implicit") && !id.includes("composite")) || id.includes("tangent") || id.includes("power-function") || id.includes("rate-of-change");
  }
  if (catId === "derivatives-common") {
    return id.includes("composite") || id.includes("higher-order") || id.includes("algebraic");
  }
  if (catId === "implicit") {
    return id.includes("implicit") || id.includes("related-rates");
  }
  if (catId === "applications-derivatives") {
    return id.includes("velocity") || id.includes("rectilinear") || id.includes("economics") || id.includes("rate-of-change");
  }
  if (catId === "optimization") {
    return id.includes("optimization") || id.includes("maximum-and-minimum-problems") || id.includes("absolute-extrema") || id.includes("absolute-maximum");
  }
  if (catId === "lhopital") {
    return id.includes("infinity") || id.includes("asymptote");
  }
  if (catId === "integration") {
    return sub === "chapter-6" || sub === "chapter-7" || sub === "chapter-8" || id.includes("integral") || id.includes("antiderivative") || id.includes("antidifferentiation") || id.includes("differential") || id.includes("area") || id.includes("volume") || id.includes("riemann") || id.includes("sigma");
  }
  if (catId === "mvt-extrema") {
    return id.includes("rolle") || id.includes("mean-value") || id.includes("concavity") || id.includes("inflection") || id.includes("increasing-and-decreasing") || id.includes("derivative-test") || id.includes("curve-sketching");
  }
  return true;
}

// Linear Algebra Sidebar / Filter Categories
const LINEAR_CATEGORIES = [
  { id: "all", label: "All Topics", icon: <Layers className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "foundations", label: "Foundations & Prerequisites", icon: <Landmark className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "vectors", label: "Vectors & Operations", icon: <TrendingUp className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "matrices", label: "Matrices & Matrix Algebra", icon: <FunctionSquare className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "systems", label: "Systems of Linear Equations", icon: <Activity className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "inverses-determinants", label: "Inverses & Determinants", icon: <Zap className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "spaces-basis", label: "Vector Spaces, Span & Basis", icon: <Compass className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "eigen", label: "Eigenvalues & Diagonalization", icon: <span className="font-serif font-bold text-xs text-[#7B1824] shrink-0">λ</span> },
  { id: "factorizations", label: "Matrix Factorizations (LU, QR, SVD)", icon: <Layers className="w-4 h-4 text-[#7B1824] shrink-0" /> },
  { id: "applications", label: "Applications & Optimization", icon: <SlidersHorizontal className="w-4 h-4 text-[#7B1824] shrink-0" /> },
];

function filterTopicByLinearCategory(topic: CategorizedTopic, catId: string): boolean {
  if (catId === "all") return true;
  const id = (topic.id || "").toLowerCase();
  if (catId === "foundations") return id.includes("foundations") || id.includes("pre");
  if (catId === "vectors") return id.includes("vector") || id.includes("dot") || id.includes("cross") || id.includes("projection");
  if (catId === "matrices") return id.includes("matri") || id.includes("transpose");
  if (catId === "systems") return id.includes("system") || id.includes("gaussian");
  if (catId === "inverses-determinants") return id.includes("inverse") || id.includes("determinant");
  if (catId === "spaces-basis") return id.includes("span") || id.includes("independence") || id.includes("basis") || id.includes("subspace") || id.includes("rank");
  if (catId === "eigen") return id.includes("eigen") || id.includes("diagonalization");
  if (catId === "factorizations") return id.includes("lu") || id.includes("qr") || id.includes("svd") || id.includes("factorization");
  if (catId === "applications") return id.includes("application") || id.includes("optimization") || id.includes("numerical") || id.includes("least-square") || id.includes("transformation");
  return true;
}

export default function PublicPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active view: "main" | "categories" | "topics-linear" | "topics-calculus"
  const [activeView, setActiveView] = useState<"main" | "categories" | "topics-linear" | "topics-calculus">("main");
  const [topicSearch, setTopicSearch] = useState("");
  const [selectedCalculusCategory, setSelectedCalculusCategory] = useState<string>("all");
  const [selectedLinearCategory, setSelectedLinearCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"popular" | "az" | "examples">("popular");

  // Split topics by subject
  const linearTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "linear-algebra"), []);
  const calculusTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus"), []);

  // Filtered Linear Algebra topics
  const filteredLinearTopics = useMemo(() => {
    let list = linearTopics;
    if (selectedLinearCategory !== "all") {
      list = list.filter((t) => filterTopicByLinearCategory(t, selectedLinearCategory));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );
  }, [linearTopics, topicSearch, selectedLinearCategory]);

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

  // Filtered Calculus topics
  const filteredCalculusTopics = useMemo(() => {
    let list = calculusTopics;
    if (selectedCalculusCategory !== "all") {
      list = list.filter((t) => filterTopicByCalculusCategory(t, selectedCalculusCategory));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculusTopics, topicSearch, selectedCalculusCategory]);

  const sortedCalculusTopics = useMemo(() => {
    let list = filteredCalculusTopics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredCalculusTopics, sortBy]);

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

            {/* ── Bottom Hero: Floating Stats Glassmorphism Bar ── */}
            <div className="w-full max-w-[1240px] mx-auto mt-2 sm:mt-4">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c1017]/85 backdrop-blur-xl px-5 sm:px-8 lg:px-12 py-4 sm:py-5 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  
                  {/* Stat 1: 10K+ Students */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 shrink-0">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                        10K+
                      </span>
                      <span className="mt-1 text-xs text-white/60 font-medium">
                        Students
                      </span>
                    </div>
                  </div>

                  {/* Stat 2: 50+ Calculators */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 shrink-0">
                      <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                        50+
                      </span>
                      <span className="mt-1 text-xs text-white/60 font-medium">
                        Calculators
                      </span>
                    </div>
                  </div>

                  {/* Stat 3: 146+ Topics */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 shrink-0">
                      <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                        146+
                      </span>
                      <span className="mt-1 text-xs text-white/60 font-medium">
                        Topics
                      </span>
                    </div>
                  </div>

                  {/* Stat 4: Worldwide Learners */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/20 shrink-0">
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                        Worldwide
                      </span>
                      <span className="mt-1 text-xs text-white/60 font-medium">
                        Learners
                      </span>
                    </div>
                  </div>

                </div>
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
        /* VIEW 3: LINEAR ALGEBRA TOPICS LIST (MATCHING REFERENCE DESIGN EXACTLY)    */
        /* ========================================================================= */
        <motion.div
          key="topics-linear-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#0e131b] pt-24 pb-20 sm:pt-28 sm:pb-24">
            <div className="absolute inset-0 z-0">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-black/40" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E05260] mb-2 block">
                  TOPICS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-tight mb-3">
                <span className="text-[#7B1824]">Linear Algebra Topics</span>
              </h1>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  Explore linear systems, matrix transformations, eigenvalues, and vector spaces with step-by-step verified explanations.
                </p>
              </div>
            </div>
          </section>

          {/* 2. MAIN WHITE CONTAINER (OVERLAPPING HERO BOTTOM) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 -mt-8 sm:-mt-10 pb-20">
            <div className="flex flex-col lg:flex-row gap-7 items-start">
              
              {/* Left Sidebar */}
              <aside className="w-full lg:w-72 shrink-0 rounded-[24px] border border-[#EAE2E4] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] px-2 mb-3.5">
                  BROWSE TOPICS
                </div>

                <div className="flex flex-col gap-1">
                  {LINEAR_CATEGORIES.map((cat) => {
                    const isActive = selectedLinearCategory === cat.id;
                    const count = cat.id === "all"
                      ? linearTopics.length
                      : linearTopics.filter((t) => filterTopicByLinearCategory(t, cat.id)).length;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedLinearCategory(cat.id)}
                        className={`topic-sidebar-item ${isActive ? "active" : ""}`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {cat.icon}
                          <span className="truncate">{cat.label}</span>
                        </div>
                        <span className="topic-sidebar-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* View All Topics Button */}
                <div className="mt-5 pt-4 border-t border-[#F3F4F6]">
                  <button
                    onClick={() => {
                      setActiveView("categories");
                      navigate("/?tab=topics");
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] hover:border-[#cf9fa6] py-2.5 px-4 text-xs font-bold text-[#7B1824] transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <span>View All Disciplines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </aside>

              {/* Right Main Content Area */}
              <div className="flex-1 w-full space-y-5">
                
                {/* Search & Sort Bar Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="text"
                      placeholder="Search topics (e.g. Matrices, Eigenvalues, Span...)"
                      value={topicSearch}
                      onChange={(e) => setTopicSearch(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-10 py-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7B1824] shadow-xs"
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

                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-medium text-[#6B7280]">Sort by</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-semibold text-[#374151] focus:outline-none focus:border-[#7B1824] shadow-xs cursor-pointer"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="az">Alphabetical (A-Z)</option>
                      <option value="examples">Most Examples</option>
                    </select>
                  </div>
                </div>

                {/* Horizontal Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
                  {LINEAR_CATEGORIES.map((cat) => {
                    const isActive = selectedLinearCategory === cat.id;
                    const count = cat.id === "all"
                      ? linearTopics.length
                      : linearTopics.filter((t) => filterTopicByLinearCategory(t, cat.id)).length;

                    return (
                      <button
                        key={`pill-lin-${cat.id}`}
                        onClick={() => setSelectedLinearCategory(cat.id)}
                        className={`filter-pill ${isActive ? "active" : ""}`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                        <span className="pill-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 3-Column Topic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {sortedLinearTopics.length > 0 ? (
                    sortedLinearTopics.map((topic) => (
                      <div
                        key={topic.id}
                        onClick={(e) => handleTopicClick(topic.id, "linear-algebra", e)}
                        className="topic-grid-card group"
                      >
                        <div>
                          {/* Top Row: Red Glyph Badge + Examples Count */}
                          <div className="flex items-center justify-between mb-3">
                            {renderTopicGlyph(topic)}
                            <span className="text-xs font-medium text-[#6B7280]">
                              {topic.examples?.length || 8} examples
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug mt-3 mb-2">
                            {topic.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                            {topic.summary}
                          </p>
                        </div>

                        {/* Card Bottom Link */}
                        <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                            View Topic <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#EAE2E4]">
                      No linear algebra topics found matching &quot;{topicSearch}&quot;.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
        /* ========================================================================= */
        /* VIEW 4: CALCULUS 1 TOPICS (MATCHING REFERENCE DESIGN EXACTLY)             */
        /* ========================================================================= */
        <motion.div
          key="topics-calculus-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#0e131b] pt-24 pb-20 sm:pt-28 sm:pb-24">
            <div className="absolute inset-0 z-0">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-black/40" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E05260] mb-2 block">
                  TOPICS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-tight mb-3">
                  <span className="text-[#7B1824]">Calculus Topics</span>
                </h1>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  Explore foundations of Calculus, Limit &amp; Continuity, and Derivatives with step-by-step verified explanations.
                </p>
              </div>
            </div>
          </section>

          {/* 2. MAIN WHITE CONTAINER (OVERLAPPING HERO BOTTOM) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 -mt-8 sm:-mt-10 pb-20">
            <div className="flex flex-col lg:flex-row gap-7 items-start">
              
              {/* Left Sidebar */}
              <aside className="w-full lg:w-72 shrink-0 rounded-[24px] border border-[#EAE2E4] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] px-2 mb-3.5">
                  BROWSE TOPICS
                </div>

                <div className="flex flex-col gap-1 max-h-[640px] overflow-y-auto pr-1">
                  {CALCULUS_CATEGORIES.map((cat) => {
                    const isActive = selectedCalculusCategory === cat.id;
                    const count = cat.id === "all" 
                      ? calculusTopics.length 
                      : calculusTopics.filter((t) => filterTopicByCalculusCategory(t, cat.id)).length;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCalculusCategory(cat.id)}
                        className={`topic-sidebar-item ${isActive ? "active" : ""}`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {cat.icon}
                          <span className="truncate">{cat.label}</span>
                        </div>
                        <span className="topic-sidebar-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* View All Topics Button */}
                <div className="mt-5 pt-4 border-t border-[#F3F4F6]">
                  <button
                    onClick={() => {
                      setActiveView("categories");
                      navigate("/?tab=topics");
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] hover:border-[#cf9fa6] py-2.5 px-4 text-xs font-bold text-[#7B1824] transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <span>View All Disciplines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </aside>

              {/* Right Main Content Area */}
              <div className="flex-1 w-full space-y-5">
                
                {/* Search & Sort Bar Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="text"
                      placeholder="Search topics (e.g. Limits, Functions...)"
                      value={topicSearch}
                      onChange={(e) => setTopicSearch(e.target.value)}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-10 py-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7B1824] shadow-xs"
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

                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-medium text-[#6B7280]">Sort by</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-semibold text-[#374151] focus:outline-none focus:border-[#7B1824] shadow-xs cursor-pointer"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="az">Alphabetical (A-Z)</option>
                      <option value="examples">Most Examples</option>
                    </select>
                  </div>
                </div>

                {/* Horizontal Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
                  {CALCULUS_CATEGORIES.map((cat) => {
                    const isActive = selectedCalculusCategory === cat.id;
                    const count = cat.id === "all"
                      ? calculusTopics.length
                      : calculusTopics.filter((t) => filterTopicByCalculusCategory(t, cat.id)).length;

                    return (
                      <button
                        key={`pill-calc-${cat.id}`}
                        onClick={() => setSelectedCalculusCategory(cat.id)}
                        className={`filter-pill ${isActive ? "active" : ""}`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                        <span className="pill-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 3-Column Topic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {sortedCalculusTopics.length > 0 ? (
                    sortedCalculusTopics.map((topic) => (
                      <div
                        key={topic.id}
                        onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                        className="topic-grid-card group"
                      >
                        <div>
                          {/* Top Row: Red Glyph Badge + Examples Count */}
                          <div className="flex items-center justify-between mb-3">
                            {renderTopicGlyph(topic)}
                            <span className="text-xs font-medium text-[#6B7280]">
                              {topic.examples?.length || 8} examples
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#7B1824] transition-colors leading-snug mt-3 mb-2">
                            {topic.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                            {topic.summary}
                          </p>
                        </div>

                        {/* Card Bottom Link */}
                        <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-[#7B1824] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                            View Topic <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#EAE2E4]">
                      No calculus topics found matching &quot;{topicSearch}&quot;.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}