// TopicPage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect, useCallback } from "react";
import { playNavButtonAnimation } from "../utils/buttonAnimation";
import { 
  ArrowLeft, 
  ArrowRight,
  Calculator, 
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  BookOpen, 
  Clock,
  List,
  Info,
  PenTool,
  FileText,
  Check,
  Copy,
  Sparkles,
  Play,
  Pause,
  Tv,
  Maximize,
  Minimize,
  X,
  RotateCcw
} from "lucide-react";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS from "../data/calculus-topics";
import ALL_CALCULUS_2_TOPICS from "../data/calculus-2-topics";
import mathBg from "../assets/math.jpeg";
import presentationIllustration from "../assets/new logo student.png";
import TopicContentRenderer, { extractFirstImage } from "../components/TopicContentRenderer";

import {
  CALCULATOR_DEFINITIONS,
  getCalculusDefinitionForTopic,
  type CalculatorDefinition,
} from "../Calculus_One_Calculator/CalculatorData";
import CalculusCalculator from "../Calculus_One_Calculator/Calculator";
import { getLinearAlgebraDefinitionForTopic } from "../data/linearAlgebraCalculators";

// Import all calculators (Linear Algebra)
import SystemOfEquations from "../calculators/SystemOfEquations";
import MatrixCalculator from "../calculators/MatrixCalculator";
import MatrixOperations from "../calculators/MatrixOperations";
import MatrixInverse from "../calculators/MatrixInverse";
import DeterminantCalculator from "../calculators/DeterminantCalculator";
import RankCalculator from "../calculators/RankCalculator";
import EigenCalculator from "../calculators/EigenCalculator";
import VectorCalculator from "../calculators/VectorCalculator";
import DotProduct from "../calculators/DotProduct";
import CrossProduct from "../calculators/CrossProduct";
import VectorProjection from "../calculators/VectorProjection";
import LinearIndependence from "../calculators/LinearIndependence";
import LinearCombination from "../calculators/LinearCombination";
import BasisCalculator from "../calculators/BasisCalculator";
import SpanCalculator from "../calculators/SpanCalculator";
import LUDecomposition from "../calculators/LUDecomposition";
import QRDecomposition from "../calculators/QRDecomposition";
import SVDCalculator from "../calculators/SVDCalculator";
import TransposeCalculator from "../calculators/TransposeCalculator";
import Diagonalization from "../calculators/Diagonalization";
import LeastSquares from "../calculators/LeastSquares";
import LinearTransformation from "../calculators/LinearTransformation";
import QuadraticForm from "../calculators/QuadraticForm";



// Calculus solver placeholder component
function CalculusPlaceholderCalculator({ name, description }: { name: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl border border-[#FFD0D8] bg-[#FFF8F9] text-center space-y-4">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B1824] text-white shadow-md">
        <Calculator className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-[#111827]">{name}</h4>
        <p className="text-xs text-[#6B7280] mt-1">{description}</p>
      </div>
      <p className="text-xs text-[#4B5563] max-w-md mx-auto leading-relaxed">
        Interactive calculation engine for this calculus module is currently undergoing system optimization. Please explore the verified practice problems and step-by-step solutions below.
      </p>
    </div>
  );
}

export interface UniversalTopic {
  id: string;
  title: string;
  summary: string;
  details: string;
  image?: string;
  examples: string[];
  category: "linear-algebra" | "calculus";
  categoryLabel: string;
  subCategory?: string;
  subCategoryLabel?: string;
  chapterNumber?: number;
}

function getLinearTopicChapter(id: string): number {
  const low = (id || "").toLowerCase();
  if (low.includes("system") || low.includes("foundations") || low.includes("gaussian")) return 1;
  if ((low.includes("vector") && !low.includes("space")) || low.includes("span") || low.includes("independence") || low.includes("combination")) return 2;
  if (low.includes("matri") || low.includes("determinant") || low.includes("inverse") || low.includes("transpose")) return 3;
  if (low.includes("subspace") || low.includes("basis") || low.includes("rank") || low.includes("dimension") || low.includes("complex")) return 4;
  if (low.includes("transform") || low.includes("mapping") || low.includes("kernel")) return 5;
  if (low.includes("eigen") || low.includes("diagonaliz")) return 6;
  if (low.includes("orthogon") || low.includes("inner") || low.includes("least-square") || low.includes("projection")) return 7;
  return 8;
}

const TOPICS: UniversalTopic[] = [
  ...(Array.isArray(LINEAR_TOPICS) ? LINEAR_TOPICS : [])
    .filter((t) => Boolean(t && t.id && t.title))
    .map((t) => {
      const chNum = getLinearTopicChapter(t.id);
      return { 
        id: t.id,
        title: t.title,
        summary: t.summary || "",
        details: t.details || "",
        image: (t as any).image || undefined,
        examples: t.examples || [],
        category: "linear-algebra" as const,
        categoryLabel: "Linear Algebra",
        subCategory: `chapter-${chNum}`,
        subCategoryLabel: `Chapter ${chNum}: Linear Algebra`,
        chapterNumber: chNum
      };
    }),
  ...(Array.isArray(ALL_CALCULUS_TOPICS) ? ALL_CALCULUS_TOPICS : (ALL_CALCULUS_TOPICS as any)?.default || [])
    .filter((t: any) => Boolean(t && t.id && t.title))
    .map((t: any) => ({ 
      id: t.id,
      title: t.title,
      summary: t.summary || "",
      details: t.details || "",
      image: t.image || undefined,
      examples: t.examples || [],
      category: "calculus" as const,
      categoryLabel: "Calculus I",
      subCategory: t.subCategory || `chapter-${t.chapterNumber || 1}`,
      subCategoryLabel: t.subCategoryLabel || `Chapter ${t.chapterNumber || 1}: Calculus I`,
      chapterNumber: t.chapterNumber || 1
    })),
  ...(Array.isArray(ALL_CALCULUS_2_TOPICS) ? ALL_CALCULUS_2_TOPICS : (ALL_CALCULUS_2_TOPICS as any)?.default || [])
    .filter((t: any) => Boolean(t && t.id && t.title))
    .map((t: any) => ({ 
      id: t.id,
      title: t.title,
      summary: t.summary || "",
      details: t.details || "",
      image: t.image || undefined,
      examples: t.examples || [],
      category: "calculus" as const,
      categoryLabel: "Calculus II",
      subCategory: t.subCategory || `chapter-${t.chapterNumber || 9}`,
      subCategoryLabel: t.subCategoryLabel || `Chapter ${t.chapterNumber || 9}: Calculus II`,
      chapterNumber: t.chapterNumber || 9
    })),
];




const CALCULATORS: Record<string, { name: string; description: string; component: React.ReactNode }> = {
  // Linear Algebra Solvers
  determinant: { name: "Determinant Calculator", description: "Laplace expansion & cofactor calculation", component: <DeterminantCalculator /> },
  inverse: { name: "Matrix Inverse (A⁻¹)", description: "Invert matrices step-by-step", component: <MatrixInverse /> },
  equations: { name: "System of Linear Equations", description: "Gaussian elimination solver", component: <SystemOfEquations /> },
  matrixops: { name: "Matrix Operations", description: "A+B, A-B, scalar mult & AB multiplication", component: <MatrixOperations /> },
  matrix: { name: "Matrix Calculator", description: "Matrix powers & scalar ops", component: <MatrixCalculator /> },
  rank: { name: "Matrix Rank & Nullity", description: "Row echelon reduction & rank", component: <RankCalculator /> },
  transpose: { name: "Transpose Calculator", description: "Compute A^T and symmetry checks", component: <TransposeCalculator /> },
  vector: { name: "Vector Calculator", description: "Vector magnitudes, angles & normalization", component: <VectorCalculator /> },
  dot: { name: "Dot Product (u · v)", description: "Inner product, orthogonality & cosine", component: <DotProduct /> },
  cross: { name: "Cross Product (u × v)", description: "3D vector normal & cross product", component: <CrossProduct /> },
  projection: { name: "Vector Projection (proj)", description: "Orthogonal projection onto lines & planes", component: <VectorProjection /> },
  independence: { name: "Linear Independence", description: "Test vector sets for independence", component: <LinearIndependence /> },
  combination: { name: "Linear Combination", description: "Express target vector as c1 v1 + c2 v2", component: <LinearCombination /> },
  basis: { name: "Basis & Dimension", description: "Extract basis vectors and compute dim", component: <BasisCalculator /> },
  span: { name: "Span Calculator", description: "Determine if vector belongs to span", component: <SpanCalculator /> },
  eigen: { name: "Eigenvalues & Eigenvectors", description: "det(A - λI) = 0 characteristic polynomial", component: <EigenCalculator /> },
  diagonalization: { name: "Matrix Diagonalization (PDP⁻¹)", description: "Diagonalize square matrices", component: <Diagonalization /> },
  lu: { name: "LU Decomposition (PA = LU)", description: "Lower-Upper factorization with pivoting", component: <LUDecomposition /> },
  qr: { name: "QR Decomposition (A = QR)", description: "Gram-Schmidt orthogonal Q and upper R", component: <QRDecomposition /> },
  svd: { name: "SVD Calculator (UΣVᵀ)", description: "Singular Value Decomposition", component: <SVDCalculator /> },
  leastsquares: { name: "Least Squares Solver", description: "Overdetermined systems & regression", component: <LeastSquares /> },
  transformation: { name: "Linear Transformation", description: "Matrix T(v) = Av geometric mappings", component: <LinearTransformation /> },
  quadratic: { name: "Quadratic Form", description: "Matrix x^T A x analysis", component: <QuadraticForm /> }
};

function getRecommendedCalculatorId(topicId: string, _category?: string): string {
  const combined = (topicId || "").toLowerCase();

  // Linear Algebra topics mapping
  if (combined.includes("eigen")) return "eigen";
  if (combined.includes("determinant")) return "determinant";
  if (combined.includes("inverse")) return "inverse";
  if (combined.includes("system") || combined.includes("gaussian")) return "equations";
  if (combined.includes("rank")) return "rank";
  if (combined.includes("span")) return "span";
  if (combined.includes("basis")) return "basis";
  if (combined.includes("dot")) return "dot";
  if (combined.includes("cross")) return "cross";
  if (combined.includes("projection")) return "projection";
  if (combined.includes("independence")) return "independence";
  if (combined.includes("combination")) return "combination";
  if (combined.includes("diagonalization")) return "diagonalization";
  if (combined.includes("lu")) return "lu";
  if (combined.includes("qr")) return "qr";
  if (combined.includes("svd")) return "svd";
  if (combined.includes("least")) return "leastsquares";
  if (combined.includes("transform")) return "transformation";
  if (combined.includes("quadratic")) return "quadratic";
  if (combined.includes("transpose")) return "transpose";
  if (combined.includes("vector")) return "vector";
  return "matrixops";
}


export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === id);

  const [activeTab, setActiveTab] = useState<"toc" | "overview" | "problems" | "summary">("toc");
  const [expandedSectionIndex, setExpandedSectionIndex] = useState<number | null>(0);
  const [showAllLessons, setShowAllLessons] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Slideshow Presentation Mode State
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentTopicIndex = useMemo(() => TOPICS.findIndex((t) => t.id === id), [id]);
  const nextTopic = currentTopicIndex < TOPICS.length - 1 ? TOPICS[currentTopicIndex + 1] : null;

  const sections = useMemo(() => {
    if (!topic?.details) return [];
    try {
      const lines = topic.details.split("\n");
      const result: { number: number; title: string; subtitle: string; content: string; duration: string; progress: number }[] = [];
      let currentSection: { number: number; title: string; contentLines: string[] } | null = null;
      const fallbackDurations = ["12 min", "8 min", "15 min", "10 min", "18 min", "14 min", "11 min", "16 min"];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = line.match(/^\s*(\d+)\.\s*(.+)$/);
        if (match) {
          if (currentSection) {
            const rawContent = currentSection.contentLines.join("\n").trim();
            const cleanText = rawContent.replace(/(?:\{?\s*["']?image["']?\s*:\s*["'][^"'\r\n]+["']\s*,?\s*\}?|!\[[^\]]*\]\([^)]+\)|<img[^>]*>|\[image:[^\]]+\])/gi, "").trim();
            const firstPara = cleanText.split("\n\n")[0] || "";
            result.push({
              number: currentSection.number,
              title: currentSection.title,
              subtitle: firstPara.length > 100 ? firstPara.slice(0, 97) + "..." : firstPara || "Comprehensive concepts and practice walkthrough.",
              content: rawContent,
              duration: fallbackDurations[(currentSection.number - 1) % fallbackDurations.length],
              progress: currentSection.number === 1 ? 100 : currentSection.number === 2 ? 75 : 0,
            });
          }
          currentSection = { number: parseInt(match[1], 10), title: match[2].replace(/[━─=_-]+/g, "").trim(), contentLines: [] };
        } else if (currentSection) {
          if (!line.trim().startsWith("━") && !line.trim().startsWith("─")) {
            currentSection.contentLines.push(line);
          }
        }
      }

      if (currentSection) {
        const rawContent = currentSection.contentLines.join("\n").trim();
        const cleanText = rawContent.replace(/(?:\{?\s*["']?image["']?\s*:\s*["'][^"'\r\n]+["']\s*,?\s*\}?|!\[[^\]]*\]\([^)]+\)|<img[^>]*>|\[image:[^\]]+\])/gi, "").trim();
        const firstPara = cleanText.split("\n\n")[0] || "";
        result.push({
          number: currentSection.number,
          title: currentSection.title,
          subtitle: firstPara.length > 100 ? firstPara.slice(0, 97) + "..." : firstPara || "Comprehensive concepts and practice walkthrough.",
          content: rawContent,
          duration: fallbackDurations[(currentSection.number - 1) % fallbackDurations.length],
          progress: 0,
        });
      }

      if (result.length > 0) return result;
      return [
        { number: 1, title: `DEFINITION OF ${topic.title.toUpperCase()}`, subtitle: `Understanding the fundamental mathematical principles of ${topic.title}.`, content: topic.details, duration: "12 min", progress: 75 },
        { number: 2, title: "CORE THEOREMS & CONDITIONS", subtitle: "Essential criteria, proofs, and algebraic properties.", content: topic.details, duration: "15 min", progress: 0 },
        { number: 3, title: "STEP-BY-STEP VERIFIED EXAMPLES", subtitle: "Detailed calculations and sample problems solved step by step.", content: topic.details, duration: "18 min", progress: 0 },
        { number: 4, title: "PRACTICAL APPLICATIONS & GRAPHICAL ANALYSIS", subtitle: "Real-world engineering, science, and geometric applications.", content: topic.details, duration: "14 min", progress: 0 },
      ];
    } catch (err) { return []; }
  }, [topic]);

  // Generate Deck of Topic Lessons + Step-by-Step Examples + Next Topic Wrap-up
  const slides = useMemo(() => {
    if (!topic) return [];
    const deck: {
      type: "lesson" | "example" | "completion";
      badge: string;
      title: string;
      subtitle?: string;
      content: string;
      number?: number;
      duration?: string;
      exampleIndex?: number;
    }[] = [];

    // 1. Topic Lessons (e.g. Lesson 1: Understanding Absolute Value, Lesson 2: ...)
    sections.forEach((sec) => {
      deck.push({
        type: "lesson",
        badge: `Lesson ${sec.number} of ${sections.length}`,
        title: sec.title,
        subtitle: sec.subtitle,
        content: sec.content || topic.details,
        number: sec.number,
        duration: sec.duration,
      });
    });

    // 2. Step-by-Step Verified Examples
    if (Array.isArray(topic.examples) && topic.examples.length > 0) {
      topic.examples.forEach((ex, idx) => {
        const exampleText = typeof ex === "string" ? ex : JSON.stringify(ex, null, 2);
        deck.push({
          type: "example",
          badge: `Verified Example ${idx + 1} of ${topic.examples.length}`,
          title: `Step-by-Step Example #${idx + 1}`,
          subtitle: `Verified solution walkthrough for ${topic.title}`,
          content: exampleText,
          exampleIndex: idx + 1,
        });
      });
    }

    // 3. Final Completion Slide: Next Topic & Practice
    deck.push({
      type: "completion",
      badge: "Topic Mastered",
      title: `You've Completed ${topic.title}!`,
      subtitle: `All lessons and step-by-step verified examples for ${topic.title} have been reviewed.`,
      content: topic.summary || "Ready to apply your knowledge or advance to the next calculus/linear algebra milestone.",
    });

    return deck;
  }, [topic, sections]);

  // Slideshow Navigation Handlers
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleNativeFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Keyboard Navigation Listener for Slideshow
  useEffect(() => {
    if (!isSlideshowOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown" || e.key === "Enter") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsSlideshowOpen(false);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleNativeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSlideshowOpen, nextSlide, prevSlide, toggleNativeFullscreen]);

  // Autoplay Timer
  useEffect(() => {
    if (!isSlideshowOpen || !isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        if (prev < slides.length - 1) return prev + 1;
        setIsAutoplay(false);
        return prev;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isSlideshowOpen, isAutoplay, slides.length]);

  const [loadedExample, setLoadedExample] = useState<{ text: string; index: number } | null>(null);

  const handleCopyExample = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleTryToSolve = (exampleText: string, idx: number) => {
    // 1. Copy text to clipboard so it is ready to paste anywhere
    try {
      navigator.clipboard.writeText(exampleText);
    } catch (err) {}
    
    // 2. Set active example and copy feedback
    setLoadedExample({ text: exampleText, index: idx });
    setCopiedIndex(idx);
    
    // 3. Switch to practice problems tab and ensure calculator is shown
    setActiveTab("problems");
    setShowCalculator(true);

    // 4. Scroll smoothly to calculator
    setTimeout(() => {
      const calcSection = document.getElementById("interactive-calculator-section");
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      
      // 5. Try to find the primary input/textarea inside the calculator and auto-fill / focus it
      const inputs = calcSection?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input[type="text"]:not([readonly]), textarea:not([readonly])'
      );
      if (inputs && inputs.length > 0) {
        const primaryInput = inputs[0];
        let cleanVal = exampleText.trim();
        
        // Match common formulas like f(x) = ... or equations
        const eqMatch = cleanVal.match(/(?:f\(x\)\s*=\s*|y\s*=\s*|lim\s*=\s*)([^\n,;]+)/i);
        if (eqMatch && eqMatch[1]) {
          cleanVal = eqMatch[1].trim();
        }
        
        const nativeSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set || Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          "value"
        )?.set;
        
        if (nativeSetter) {
          nativeSetter.call(primaryInput, cleanVal);
          primaryInput.dispatchEvent(new Event("input", { bubbles: true }));
          primaryInput.dispatchEvent(new Event("change", { bubbles: true }));
        }
        primaryInput.focus();

        // Automatically trigger calculation
        setTimeout(() => {
          const form = calcSection?.querySelector<HTMLFormElement>("form");
          if (form) {
            form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
          } else {
            const solveBtn = calcSection?.querySelector<HTMLButtonElement>('button[type="submit"]');
            if (solveBtn) solveBtn.click();
          }
        }, 150);
      }
    }, 120);
  };


  const calculusDef = useMemo(() => {
    if (!topic || topic.category !== "calculus") return null;
    return getCalculusDefinitionForTopic(topic);
  }, [topic]);

  const linearAlgebraDef = useMemo(() => {
    if (!topic || topic.category !== "linear-algebra") return null;
    return getLinearAlgebraDefinitionForTopic(topic);
  }, [topic]);

  const calculatorInfo = useMemo(() => {
    if (topic?.category === "calculus" && calculusDef) {
      return {
        name: calculusDef.name,
        description: calculusDef.description,
        component: <CalculusCalculator key={calculusDef.id} definition={calculusDef} />,
      };
    }
    if (topic?.category === "linear-algebra" && linearAlgebraDef) {
      return {
        name: linearAlgebraDef.name,
        description: linearAlgebraDef.description,
        component: linearAlgebraDef.component,
      };
    }
    const calcId = topic ? getRecommendedCalculatorId(topic.id, topic.category) : "matrixops";
    return CALCULATORS[calcId] || CALCULATORS["matrixops"];
  }, [topic, calculusDef, linearAlgebraDef]);

  const chapterTag = useMemo(() => !topic ? "C1" : topic.category === "linear-algebra" ? "LA" : `C${topic.chapterNumber || 1}`, [topic]);

  const overviewDetails = useMemo(
    () => topic?.details.replace(/^\s*[━─=_-]{8,}\s*$/gm, "").replace(/\n{3,}/g, "\n\n") ?? "",
    [topic],
  );
  const overviewLines = overviewDetails.split("\n");


  if (!topic) {
    return (
      <div className="min-h-screen bg-[#FDFBFB] pt-28 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#111827]">Topic Not Found</h2>
        <p className="text-[#6B7280] mt-2">The requested topic could not be located.</p>
        <Link to="/?tab=topics" className="inline-block mt-4 text-[#7B1824] font-bold">← Back to Topics</Link>
      </div>
    );
  }

  const renderTopicIllustration = () => {
    const topicImg = topic.image || extractFirstImage(topic.details);
    if (topicImg) {
      return (
        <img
          src={topicImg}
          alt={topic.title}
          className="w-full h-36 sm:h-40 object-contain rounded-xl"
        />
      );
    }

    const titleLower = topic.title.toLowerCase();
    const idLower = topic.id.toLowerCase();
    if (idLower.includes("derivative") || titleLower.includes("derivative") || titleLower.includes("tangent")) {
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 280 160" fill="none">
          <line x1="30" y1="135" x2="250" y2="135" stroke="#4B5563" strokeWidth="1.2" />
          <line x1="50" y1="150" x2="50" y2="20" stroke="#4B5563" strokeWidth="1.2" />
          <text x="254" y="139" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">x</text>
          <text x="46" y="16" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">y</text>
          <text x="36" y="148" fill="#374151" fontSize="10">0</text>
          <line x1="140" y1="135" x2="140" y2="75" stroke="#7B1824" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="136" y="150" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">x₀</text>
          <path d="M 60 130 C 100 120, 130 90, 180 45 C 210 25, 230 20, 245 18" stroke="#8B1A24" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="75" y1="135" x2="205" y2="25" stroke="#7B1824" strokeWidth="1.6" strokeDasharray="3 3" />
          <circle cx="140" cy="75" r="4.5" fill="#7B1824" />
        </svg>
      );
    }
    if (idLower.includes("integral") || titleLower.includes("integral") || titleLower.includes("area")) {
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 280 160" fill="none">
          <line x1="30" y1="135" x2="250" y2="135" stroke="#4B5563" strokeWidth="1.2" />
          <line x1="50" y1="150" x2="50" y2="20" stroke="#4B5563" strokeWidth="1.2" />
          <text x="254" y="139" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">x</text>
          <text x="46" y="16" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">y</text>
          <text x="36" y="148" fill="#374151" fontSize="10">0</text>
          <path d="M 95 135 L 95 85 C 125 60, 165 58, 195 80 L 195 135 Z" fill="rgba(123, 24, 36, 0.18)" />
          <line x1="95" y1="135" x2="95" y2="85" stroke="#7B1824" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="195" y1="135" x2="195" y2="80" stroke="#7B1824" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="92" y="150" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">a</text>
          <text x="192" y="150" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">b</text>
          <path d="M 60 110 C 95 80, 145 50, 235 90" stroke="#8B1A24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      );
    }
    if (topic.category === "linear-algebra") {
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 280 160" fill="none">
          <line x1="30" y1="135" x2="250" y2="135" stroke="#4B5563" strokeWidth="1.2" />
          <line x1="50" y1="150" x2="50" y2="20" stroke="#4B5563" strokeWidth="1.2" />
          <text x="254" y="139" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">x</text>
          <text x="46" y="16" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">y</text>
          <text x="36" y="148" fill="#374151" fontSize="10">0</text>
          <line x1="50" y1="135" x2="140" y2="70" stroke="#7B1824" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="50" y1="135" x2="180" y2="115" stroke="#991B28" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="140" y1="70" x2="230" y2="50" stroke="#7B1824" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="180" y1="115" x2="230" y2="50" stroke="#991B28" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="50" y1="135" x2="230" y2="50" stroke="#4A0E15" strokeWidth="2.2" strokeLinecap="round" />
          <text x="135" y="62" fill="#7B1824" fontSize="11" fontWeight="700">u</text>
          <text x="185" y="125" fill="#991B28" fontSize="11" fontWeight="700">v</text>
          <text x="235" y="45" fill="#4A0E15" fontSize="11" fontWeight="700">u+v</text>
        </svg>
      );
    }
    return (
      <svg className="w-full h-36 sm:h-40" viewBox="0 0 280 160" fill="none">
        <line x1="30" y1="135" x2="250" y2="135" stroke="#4B5563" strokeWidth="1.2" />
        <line x1="50" y1="150" x2="50" y2="20" stroke="#4B5563" strokeWidth="1.2" />
        <text x="254" y="139" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">x</text>
        <text x="46" y="16" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">y</text>
        <text x="36" y="148" fill="#374151" fontSize="10">0</text>
        <line x1="150" y1="135" x2="150" y2="70" stroke="#7B1824" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="146" y="150" fill="#374151" fontSize="11" fontStyle="italic" fontWeight="600">a</text>
        <path d="M 60 125 C 95 120, 130 90, 150 70 C 170 50, 195 35, 230 28" stroke="#8B1A24" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="150" cy="70" r="4" fill="#FFFFFF" stroke="#7B1824" strokeWidth="2" />
        <circle cx="150" cy="45" r="4" fill="#7B1824" />
        <circle cx="225" cy="30" r="4" fill="#7B1824" />
      </svg>
    );
  };

  const displayedLessons = showAllLessons ? sections : sections.slice(0, 6);
  const currentSlide = slides[currentSlideIndex] || slides[0];

  return (
    <div className="min-h-screen bg-[#FDFBFB] text-[#111827]">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION (Authentic Chalkboard Background)                     */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#0A0E16] pt-20 sm:pt-24 pb-12 sm:pb-16 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={mathBg} alt="Mathematics blackboard background" className="h-full w-full object-cover object-center opacity-40 scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E16] via-transparent to-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
          
          {/* Top Breadcrumbs & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs text-white/90 shadow-sm max-w-full overflow-hidden truncate">
                <BookOpen className="w-3.5 h-3.5 text-[#E05260] shrink-0" />
                <span className="truncate">{topic.subCategoryLabel ? topic.subCategoryLabel.split(":")[0] : `Chapter ${topic.chapterNumber || 1}`}</span>
                <span className="text-white/40">&gt;</span>
                <span className="text-white/70">Overview</span>
                <span className="text-white/40">&gt;</span>
                <span className="font-bold text-white truncate">{topic.title}</span>
              </div>
            </div>

            {/* Right Buttons: Slideshow Mode + Next Topic */}
            <div className="flex items-center gap-2.5 self-start sm:self-auto">
              {/* TV Slideshow Mode Button */}
              <button
                onClick={() => {
                  setCurrentSlideIndex(0);
                  setIsSlideshowOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#FF7A8A]/40 bg-gradient-to-r from-[#7B1824] to-[#991B28] hover:from-[#8B1A24] hover:to-[#B91C1C] px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                title="Start Slideshow for this topic (Keyboard next/prev enabled)"
              >
                <Tv className="w-3.5 h-3.5 text-[#FFB3BA]" />
                <span>Topic Slideshow</span>
              </button>

              {nextTopic && (
                <Link to={`/topics/${nextTopic.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-sm">
                  <span>Next Topic: {nextTopic.title.length > 20 ? nextTopic.title.slice(0, 18) + "..." : nextTopic.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#7B1824] text-white font-black text-xl sm:text-2xl tracking-tight shadow-xl shadow-[#7B1824]/40 shrink-0 border border-white/10">
                  {chapterTag}
                </div>
                <div className="space-y-3 flex-1">
                  {/* Title styled explicitly with style={{ color: '#FFFFFF' }} to guarantee pure white */}
                  <h1
                    style={{ color: "#FFFFFF" }}
                    className="text-2xl sm:text-4xl lg:text-[2.65rem] font-black !text-white tracking-tight leading-[1.15] drop-shadow-sm"
                  >
                    {topic.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-normal max-w-2xl">
                    {topic.summary || "A comprehensive study on foundations, mathematical theorems, step-by-step verified explanations, and practical problem solving."}
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white/90">
                      <BookOpen className="w-3.5 h-3.5 text-[#E05260]" />
                      <span>{sections.length} Sections &amp; Lessons</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white/90">
                      <Clock className="w-3.5 h-3.5 text-[#E05260]" />
                      <span>2h 45m Estimated</span>
                    </div>
                    {/* TV Presentation Quick Link */}
                    <button
                      onClick={() => {
                        setCurrentSlideIndex(0);
                        setIsSlideshowOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-3.5 py-1 text-xs font-semibold text-white transition-all cursor-pointer"
                    >
                      <Tv className="w-3.5 h-3.5 text-[#FF7A8A]" />
                      <span>Start Presentation</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] rounded-2xl bg-[#FFF0F2] p-4 sm:p-5 shadow-2xl border border-white/40 text-gray-900">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#7B1824] uppercase tracking-wider">Interactive Curve</span>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setIsCompleted(!isCompleted)} title={isCompleted ? "Marked Complete" : "Mark as Complete"} className={`h-6 w-6 rounded-lg flex items-center justify-center transition-all cursor-pointer ${isCompleted ? "bg-[#7B1824] text-white" : "bg-[#FFE2E6] text-[#7B1824] hover:bg-[#FFD4DC]"}`}>
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-2 border border-[#EAE2E4] shadow-inner">{renderTopicIllustration()}</div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-[#6B7280] font-medium">Verified Visualization</span>
                  <button onClick={() => { setActiveTab("problems"); setShowCalculator(true); }} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7B1824] hover:underline cursor-pointer">
                    <Calculator className="w-3 h-3" />
                    <span>Launch Solver</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FULLSCREEN TOPIC LESSON & EXAMPLES SLIDESHOW OVERLAY                   */}
      {/* ========================================================================= */}
      {isSlideshowOpen && currentSlide && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#020316] text-white select-none animate-in fade-in duration-200">
          
          {/* Blackboard Ambient Background */}
          <div className="absolute inset-0 z-0 bg-[#020316]" />

          {/* Top Slideshow Control Header */}
          <header className="hidden">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#7B1824] flex items-center justify-center font-bold text-sm text-white">
                {chapterTag}
              </div>
              <div>
                <div className="text-xs font-semibold text-[#FF7A8A] uppercase tracking-wider">
                  {topic.title} &bull; Slideshow
                </div>
                <div className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
                  {currentSlide.title}
                </div>
              </div>
            </div>

            {/* Middle Progress Pill */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-white/90">
              <span>Slide {currentSlideIndex + 1} of {slides.length}</span>
              <span className="text-white/40">&bull;</span>
              <span className="text-emerald-400 font-bold">{Math.round(((currentSlideIndex + 1) / slides.length) * 100)}%</span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Autoplay Button */}
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isAutoplay ? "bg-emerald-600 text-white" : "bg-white/10 hover:bg-white/20 text-white/80"
                }`}
                title="Toggle Auto Play (6s per slide)"
              >
                {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isAutoplay ? "Pause" : "Auto Play"}</span>
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleNativeFullscreen}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Toggle Fullscreen (F)"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsSlideshowOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#7B1824] hover:bg-[#60101B] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all cursor-pointer active:scale-95"
                title="Exit Slideshow (Esc)"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Exit (Esc)</span>
              </button>
            </div>
          </header>

          {/* Center Presentation Stage */}
          <main className="relative z-10 flex-1 min-h-0 overflow-hidden grid grid-cols-1 sm:grid-cols-[minmax(250px,36.7vw)_minmax(0,1fr)]">
            <aside className="relative hidden sm:flex items-center justify-center overflow-hidden bg-[#202d70]">
              <img src={presentationIllustration} alt="Student learning linear algebra" className="h-[72%] w-[94%] object-contain object-center drop-shadow-2xl" />
            </aside>
            <div className="min-w-0 h-full flex flex-col justify-center px-6 py-8 sm:px-[7vw] lg:px-[5.5vw]">
              
              {/* Topic Slide Container */}
              <div className="relative w-full max-h-[calc(100vh-96px)] flex flex-col transition-all duration-300">
                
                {/* Slide Badge & Index */}
                <div className="hidden">
                  <div className="flex items-center gap-2">
                    <div className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold ${
                      currentSlide.type === "example"
                        ? "border border-amber-400/30 bg-amber-500/20 text-amber-300"
                        : currentSlide.type === "completion"
                        ? "border border-emerald-400/30 bg-emerald-500/20 text-emerald-300"
                        : "border border-[#FF7A8A]/30 bg-[#7B1824]/30 text-[#FFB3BA]"
                    }`}>
                      <Sparkles className="w-3 h-3" />
                      <span>{currentSlide.badge}</span>
                    </div>

                    {currentSlide.duration && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-medium">
                        <Clock className="w-3 h-3" />
                        <span>{currentSlide.duration}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-gray-400">
                    Slide {currentSlideIndex + 1} of {slides.length}
                  </span>
                </div>

                {/* SLIDE CONTENT: Completion / Example / Lesson */}
                {currentSlide.type === "completion" ? (
                  /* Completion Slide */
                  <div className="space-y-6 text-center py-6 flex-1 flex flex-col justify-center items-center">
                    <div className="h-16 w-16 rounded-2xl bg-[#7B1824] flex items-center justify-center text-white shadow-xl shadow-[#7B1824]/40">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 style={{ color: "#FFFFFF" }} className="text-2xl sm:text-4xl font-black !text-white">
                        {currentSlide.title}
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                        {currentSlide.subtitle}
                      </p>
                    </div>

                    <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                      <button
                        onClick={() => setCurrentSlideIndex(0)}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Replay Slideshow</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsSlideshowOpen(false);
                          setActiveTab("problems");
                        }}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                      >
                        <Calculator className="w-4 h-4" />
                        <span>Open Calculator &amp; Problems</span>
                      </button>

                      {nextTopic && (
                        <Link
                          to={`/topics/${nextTopic.id}`}
                          onClick={() => setIsSlideshowOpen(false)}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-6 py-2.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                        >
                          <span>Next Topic: {nextTopic.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                ) : currentSlide.type === "example" ? (
                  /* Example Slide */
                  <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div>
                        <h2 style={{ color: "#FFFFFF" }} className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white tracking-tight leading-tight">
                          {currentSlide.title}
                        </h2>
                        {currentSlide.subtitle && (
                          <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                            {currentSlide.subtitle}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => handleCopyExample(currentSlide.content, currentSlide.exampleIndex || 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer"
                      >
                        {copiedIndex === currentSlide.exampleIndex ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span>Copied</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy Problem</span></>}
                      </button>
                    </div>

                    <div className="p-0 text-sm sm:text-base font-mono text-gray-200 leading-relaxed whitespace-pre-wrap">
                      {currentSlide.content}
                    </div>

                    {/* Bottom Prompt to continue */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-400">
                        {currentSlideIndex < slides.length - 1 ? "Press Space or Next to advance" : "Final slide"}
                      </span>
                      {currentSlideIndex < slides.length - 1 && (
                        <button
                          onClick={nextSlide}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
                        >
                          <span>{slides[currentSlideIndex + 1]?.type === "example" ? "Next Example" : "Finish Review"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Standard Lesson Slide (e.g. Lesson 1: Understanding Absolute Value) */
                  <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                    <div className="space-y-1 pb-2 border-b border-white/10">
                      <h2 style={{ color: "#FFFFFF" }} className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white tracking-tight leading-tight">
                        {currentSlide.title}
                      </h2>
                      {currentSlide.subtitle && currentSlide.subtitle !== currentSlide.content && (
                        <p className="text-xs sm:text-sm text-[#FFB3BA] font-medium leading-relaxed">
                          {currentSlide.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Wide Display Body: Auto-splits into 2 spacious columns if content is long */}
                    {currentSlide.content.length > 380 && currentSlide.content.includes("\n\n") ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-1">
                        <div className="prose prose-invert max-w-none text-sm sm:text-base text-gray-200 leading-relaxed">
                          {(() => {
                            const paragraphs = currentSlide.content.split("\n\n");
                            const mid = Math.ceil(paragraphs.length / 2);
                            return <TopicContentRenderer content={paragraphs.slice(0, mid).join("\n\n")} isDark={true} />;
                          })()}
                        </div>
                        <div className="prose prose-invert max-w-none text-sm sm:text-base text-gray-200 leading-relaxed">
                          {(() => {
                            const paragraphs = currentSlide.content.split("\n\n");
                            const mid = Math.ceil(paragraphs.length / 2);
                            return <TopicContentRenderer content={paragraphs.slice(mid).join("\n\n")} isDark={true} />;
                          })()}
                        </div>
                      </div>
                    ) : (
                      <div className="prose prose-invert max-w-none text-sm sm:text-base lg:text-[1.05rem] text-gray-200 leading-relaxed pt-2">
                        <TopicContentRenderer content={currentSlide.content} isDark={true} />
                      </div>
                    )}

                    {/* Action Bar on Lesson: Advance to next lesson or jump straight to examples */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-400">
                        {currentSlide.number === sections.length
                          ? "Lesson completed &bull; Proceeding to Verified Examples"
                          : `Lesson ${currentSlide.number} of ${sections.length}`}
                      </span>

                      {currentSlide.number === sections.length ? (
                        <button
                          onClick={() => {
                            // Jump directly to first example slide
                            const firstExampleIdx = sections.length;
                            if (firstExampleIdx < slides.length) {
                              setCurrentSlideIndex(firstExampleIdx);
                            } else {
                              nextSlide();
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
                        >
                          <span>Continue to Verified Examples</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={nextSlide}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#FFB3BA] hover:text-white transition-colors cursor-pointer"
                        >
                          <span>Next Lesson</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </main>

          {/* Bottom Slideshow Navigation & Keyboard Helpers Bar */}
          <footer className="relative z-10 px-4 sm:px-7 py-3 border-t border-white/10 bg-[#14172d]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Keyboard shortcuts hint */}
            <div className="hidden lg:flex items-center gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px] border border-white/20">←</kbd>
                <span>Previous</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px] border border-white/20">→</kbd>
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px] border border-white/20">Space</kbd>
                <span>Next</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px] border border-white/20">F</kbd>
                <span>Fullscreen</span>
              </span>
            </div>

            {/* Center: Slide Dots Indicator */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs sm:max-w-md py-1">
              {slides.map((s, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlideIndex === idx
                      ? s.type === "example"
                        ? "w-6 bg-amber-400"
                        : s.type === "completion"
                        ? "w-6 bg-emerald-400"
                        : "w-6 bg-[#FF7A8A]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  title={`Go to slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            {/* Right: Prev & Next Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  currentSlideIndex === 0
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-white/10 hover:bg-white/20 text-white active:scale-95"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlideIndex === slides.length - 1}
                className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  currentSlideIndex === slides.length - 1
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-[#7B1824] hover:bg-[#60101B] text-white shadow-md active:scale-95 hover:scale-105"
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </footer>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. HORIZONTAL NAVIGATION TABS BAR                                         */}
      {/* ========================================================================= */}
      <div className="bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 pt-4">
          <button
            onClick={(e) => {
              playNavButtonAnimation(e, { color: "rgba(224, 82, 96, 0.45)" });
              const returnView = topic.category === "calculus"
                ? ((topic.chapterNumber || 1) >= 9 ? "topics-calculus-2" : "topics-calculus")
                : "topics-linear";

              let ch = topic.chapterNumber || 1;
              if (topic.category === "linear-algebra") {
                const id = (topic.id || "").toLowerCase();
                if (id === "foundations" || id === "systems" || id === "vectors") ch = 1;
                else if (id === "matrices" || id === "inverses" || id === "advanced-matrix-topics") ch = 2;
                else if (id === "determinants") ch = 3;
                else if (id === "independence-span" || id === "fundamental-subspaces" || id === "change-of-basis" || id === "complex-vector-spaces") ch = 4;
                else if (id === "linear-transformations" || id === "rank") ch = 5;
                else if (id === "eigen" || id === "diagonalization") ch = 6;
                else if (id === "orthogonality" || id === "inner-product" || id === "least-squares") ch = 7;
                else ch = 8;
              }

              sessionStorage.setItem("returningTopicView", returnView);
              sessionStorage.setItem("returningChapter", String(ch));
              navigate("/?tab=topics");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#FFF8F9] px-4 py-2 text-xs font-bold text-[#374151] transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Topics</span>
          </button>
        </div>
      </div>
      <div className="sticky top-16 z-20 bg-white border-b border-[#E5E7EB] shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-6 sm:gap-10 overflow-x-auto py-3 sm:py-3.5">
            <button onClick={() => setActiveTab("toc")} className={`relative flex items-center gap-2 py-1 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeTab === "toc" ? "text-[#7B1824]" : "text-[#4B5563] hover:text-[#111827]"}`}>
              <List className="w-4 h-4" />
              <span>Table of Contents</span>
              {activeTab === "toc" && <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#7B1824] rounded-full" />}
            </button>
            <button onClick={() => setActiveTab("overview")} className={`relative flex items-center gap-2 py-1 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeTab === "overview" ? "text-[#7B1824]" : "text-[#4B5563] hover:text-[#111827]"}`}>
              <Info className="w-4 h-4" />
              <span>Overview</span>
              {activeTab === "overview" && <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#7B1824] rounded-full" />}
            </button>
            <button onClick={() => setActiveTab("problems")} className={`relative flex items-center gap-2 py-1 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeTab === "problems" ? "text-[#7B1824]" : "text-[#4B5563] hover:text-[#111827]"}`}>
              <PenTool className="w-4 h-4" />
              <span>Practice Problems</span>
              {activeTab === "problems" && <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#7B1824] rounded-full" />}
            </button>
            <button onClick={() => setActiveTab("summary")} className={`relative flex items-center gap-2 py-1 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeTab === "summary" ? "text-[#7B1824]" : "text-[#4B5563] hover:text-[#111827]"}`}>
              <FileText className="w-4 h-4" />
              <span>Summary</span>
              {activeTab === "summary" && <span className="absolute -bottom-3.5 left-0 right-0 h-[2.5px] bg-[#7B1824] rounded-full" />}
            </button>
          </nav>
        </div>
      </div>
      <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 pb-24">
        {activeTab === "toc" && (
          <div className="space-y-4">
            {displayedLessons.map((lesson, idx) => {
              const isExpanded = expandedSectionIndex === idx;
              return (
                <div key={`lesson-${lesson.number}`} className={`rounded-2xl transition-all duration-200 overflow-hidden ${isExpanded ? "border border-[#FFD0D8] bg-[#FFF8F9] shadow-xs" : "border border-[#EAE2E4] bg-white hover:border-[#FFD0D8] shadow-xs"}`}>
                  <div onClick={() => setExpandedSectionIndex(isExpanded ? null : idx)} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                    <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                      <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isExpanded ? "bg-[#FFE2E6] text-[#7B1824]" : "bg-[#F3F4F6] text-[#374151]"}`}>{lesson.number}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-[#7B1824] leading-snug tracking-tight">{lesson.title}</h3>
                        <p className="text-xs text-[#6B7280] font-normal leading-relaxed mt-0.5 truncate">{lesson.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end sm:self-auto">
                      <div className="flex items-center gap-1 text-xs text-[#6B7280] font-medium"><Clock className="w-3.5 h-3.5 text-[#9CA3AF]" /><span>{lesson.duration}</span></div>
                      {isExpanded ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlideIndex(idx);
                            setIsSlideshowOpen(true);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all cursor-pointer active:scale-95 hover:scale-105"
                          title="Open presentation for this topic lesson"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Start Lesson</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <div className="relative flex items-center justify-center h-6 w-6">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                              {lesson.progress > 0 && <circle cx="18" cy="18" r="15.5" fill="none" stroke="#22C55E" strokeWidth="3" strokeDasharray="97.38" strokeDashoffset={97.38 - (97.38 * lesson.progress) / 100} strokeLinecap="round" />}
                            </svg>
                          </div>
                          <span className="text-[11px] font-bold text-[#6B7280]">{lesson.progress}%</span>
                        </div>
                      )}
                      <div className="text-[#7B1824] p-1">{isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />}</div>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="border-t border-[#FFD0D8] p-5 sm:p-6 bg-white/70 space-y-4">
                      <div className="prose max-w-none min-w-0 text-sm text-[#374151] leading-relaxed text-justify [overflow-wrap:anywhere]">
                        <TopicContentRenderer content={lesson.content || topic.details} />
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#F3F4F6]">
                        <div className="flex items-center gap-2 text-xs text-[#6B7280]"><Sparkles className="w-4 h-4 text-[#7B1824]" /><span>Verified textbook content with formal rigor</span></div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => { setActiveTab("problems"); setShowCalculator(true); }} className="inline-flex items-center gap-1.5 rounded-xl border border-[#EAE2E4] bg-white hover:bg-[#FDF2F4] px-3.5 py-1.5 text-xs font-bold text-[#7B1824] transition-all cursor-pointer shadow-xs"><Calculator className="w-3.5 h-3.5" /><span>Try in Calculator</span></button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {sections.length > 6 && (
              <div className="flex justify-center pt-3"><button onClick={() => setShowAllLessons(!showAllLessons)} className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] px-5 py-2 text-xs font-bold text-[#374151] shadow-xs transition-all cursor-pointer"><span>{showAllLessons ? "Show Less" : "Show More"}</span><ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllLessons ? "rotate-180" : ""}`} /></button></div>
            )}
          </div>
        )}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#EAE2E4] bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#111827]">Topic Overview &amp; Learning Objectives</h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">{topic.summary}</p>
              <div className="min-w-0 text-sm text-[#4B5563] leading-relaxed text-justify [overflow-wrap:anywhere] pt-2">
                <TopicContentRenderer content={overviewDetails} />
              </div>
            </div>
            <div className="rounded-2xl border border-[#d6b1b7] bg-[#fbf3f5] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm shrink-0"><Calculator className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-base font-bold text-[#111827]">{calculatorInfo.name}</h3>
                  <p className="text-xs sm:text-sm text-[#6B7280]">{calculatorInfo.description}</p>
                </div>
              </div>
              <button onClick={() => setShowCalculator(!showCalculator)} className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all cursor-pointer shrink-0"><span>{showCalculator ? "Hide Calculator" : "Launch Interactive Solver"}</span><ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCalculator ? "rotate-180" : ""}`} /></button>
            </div>
            {showCalculator && <div className="rounded-2xl border border-[#EAE2E4] bg-white p-6 shadow-md">{calculatorInfo.component}</div>}
          </div>
        )}
        {activeTab === "problems" && (
          <div className="space-y-6">
            {/* Interactive Calculator Section */}
            <div id="interactive-calculator-section" className="rounded-2xl border border-[#EAE2E4] bg-white p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE2E4] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm shrink-0"><Calculator className="w-5 h-5" /></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-[#111827]">{calculatorInfo.name}</h3>
                      {topic.category === "linear-algebra" && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#801424] bg-[#FFF0F3] border border-[#FFCCD5] px-2.5 py-0.5 rounded-full">
                          <span>{topic.title}</span>
                          <span>→</span>
                          <span>{calculatorInfo.name}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B7280]">Solve step by step with verified numerical and algebraic analysis.</p>
                  </div>
                </div>
              </div>

              {/* Loaded Example Banner Notification */}
              {loadedExample && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#FFF0F3] border border-[#FFCCD5] text-[#7B1824] text-xs animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#7B1824] shrink-0" />
                    <span>
                      <strong>Loaded Problem #{loadedExample.index + 1}:</strong> Expression copied to clipboard &amp; pasted to calculator!
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(loadedExample.text);
                        setCopiedIndex(loadedExample.index);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#FFCCD5] hover:bg-[#FDF2F4] font-bold text-[11px] cursor-pointer"
                    >
                      Copy Text
                    </button>
                    <button
                      onClick={() => setLoadedExample(null)}
                      className="p-1 text-[#7B1824]/60 hover:text-[#7B1824] cursor-pointer"
                      title="Dismiss"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-2">{calculatorInfo.component}</div>
            </div>

            {/* Step-by-Step Verified Examples with "Try to Solve" Buttons */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#111827]">Step-by-Step Verified Examples</h2>
                  <p className="text-xs text-[#6B7280] mt-0.5">Click &ldquo;Try to Solve&rdquo; to automatically load any problem into the calculator solver.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(topic.examples || []).map((example: string, idx: number) => {
                  const exampleText = typeof example === "string" ? example : JSON.stringify(example, null, 2);
                  const isThisLoaded = loadedExample?.index === idx;

                  return (
                    <div 
                      key={`example-${idx}`} 
                      className={`rounded-2xl border bg-white p-5 space-y-3 transition-all duration-200 ${
                        isThisLoaded 
                          ? "border-[#7B1824] shadow-md ring-2 ring-[#7B1824]/20" 
                          : "border-[#EAE2E4] shadow-sm hover:border-[#d6b1b7]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#d6b1b7] bg-[#fbf3f5] text-[#7B1824]">
                          Problem #{idx + 1}
                        </span>

                        <div className="flex items-center gap-2">
                          {/* "Try to Solve" Button */}
                          <button
                            onClick={() => handleTryToSolve(exampleText, idx)}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                            title="Paste and solve this example directly in the calculator"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Try to Solve</span>
                          </button>

                          {/* Copy Button */}
                          <button 
                            onClick={() => handleCopyExample(exampleText, idx)} 
                            className="text-xs text-[#6B7280] hover:text-[#7B1824] inline-flex items-center gap-1 cursor-pointer py-1 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                            title="Copy problem text"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm text-[#374151] font-mono leading-relaxed bg-[#F9FAFB] p-3.5 rounded-xl border border-[#E5E7EB] whitespace-pre-wrap break-words">
                        {exampleText}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {activeTab === "summary" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#EAE2E4] bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#111827]">Quick Summary &amp; Key Takeaways</h2>
              <div className="p-4 rounded-xl border border-[#d6b1b7] bg-[#fbf3f5] text-sm text-[#7B1824] font-medium leading-relaxed">{topic.summary}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Fundamental Conditions</h4><p className="text-xs text-[#4B5563] leading-relaxed">Verify existence, limit equivalence, and continuous behavior across the given domain.</p></div>
                <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Next Learning Milestone</h4><p className="text-xs text-[#4B5563] leading-relaxed">Advance to subsequent properties, derivatives, and integral calculus applications.</p></div>
              </div>
            </div>
          </div>
        )}
        {/* ======================================================================= */}
        {/* NEXT TOPIC RECOMMENDATION BANNER & CURRICULUM PROGRESS                  */}
        {/* ======================================================================= */}
        {nextTopic && (
          <section className="my-10 rounded-3xl border-2 border-[#FFD0D8] bg-gradient-to-br from-[#FFF8F9] via-white to-[#FDF2F4] p-6 sm:p-8 lg:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7B1824] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    Recommended Next Topic
                  </span>
                  <span className="text-xs font-semibold text-[#6B7280]">
                    {nextTopic.subCategoryLabel || nextTopic.categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#111827] tracking-tight">
                  Ready for {nextTopic.title}?
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {nextTopic.summary || "Build upon your mathematical understanding and progress to the subsequent core theorems and verified problem sets."}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#6B7280]">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 border border-[#E5E7EB] font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-[#7B1824]" />
                    {nextTopic.examples?.length || 4}+ Verified Examples
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 border border-[#E5E7EB] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#7B1824]" />
                    ~20 min Lesson
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                <Link
                  to={`/topics/${nextTopic.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B1824] hover:bg-[#60101B] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#7B1824]/25 transition-all hover:scale-105 active:scale-95 text-center cursor-pointer"
                >
                  <span>Proceed to {nextTopic.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM NAVIGATION: Next Topic */}
        {nextTopic && (
          <div className="flex items-center justify-end border-t border-[#E5E7EB] pt-8 mt-6">
            <Link
              to={`/topics/${nextTopic.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Next: {nextTopic.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}