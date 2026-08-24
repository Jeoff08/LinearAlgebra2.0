// TopicPage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo, useRef } from "react";
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  ArrowRight,
  Calculator, 
  ChevronDown,
  BookOpen,
  TrendingUp,
  Binary,
  Layers,
  Activity,
  Zap,
  Clock,
  List,
  Check,
  Copy
} from "lucide-react";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS, { CALCULUS_SUB_CATEGORIES } from "../data/calculus-topics";

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

// Import Calculus calculators
import LimitCalculator from "../CalculusOneCalculator/LimitCalculator";
import DerivativeCalculator from "../CalculusOneCalculator/DerivativeCalculator";
import TangentLineCalculator from "../CalculusOneCalculator/TangentLineCalculator";
import CurveSketchingCalculator from "../CalculusOneCalculator/CurveSketchingCalculator";
import ContinuityCalculator from "../CalculusOneCalculator/ContinuityCalculator";
import DefiniteIntegralCalculator from "../CalculusOneCalculator/DefiniteIntegralCalculator";

export interface UniversalTopic {
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

// Combined universal topics
const TOPICS: UniversalTopic[] = [
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
      subCategory: "linear-algebra",
      subCategoryLabel: "Linear Algebra"
    })),
  ...(Array.isArray(ALL_CALCULUS_TOPICS)
    ? ALL_CALCULUS_TOPICS
    : (ALL_CALCULUS_TOPICS as any)?.default || []
  )
    .filter((t: any) => Boolean(t && t.id && t.title))
    .map((t: any) => ({
      id: t.id,
      title: t.title,
      summary: t.summary || "",
      details: t.details || "",
      examples: Array.isArray(t.examples) ? t.examples : [],
      category: "calculus" as const,
      categoryLabel: t.categoryLabel || "Calculus I",
      subCategory: t.subCategory || "calculus",
      subCategoryLabel: t.subCategoryLabel || "Calculus I",
      chapterNumber: t.chapterNumber || 1
    })),
];

// Calculator Registry
const CALCULATORS: Record<string, { name: string; description: string; component: React.ReactNode }> = {
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
  quadratic: { name: "Quadratic Form", description: "Matrix x^T A x analysis", component: <QuadraticForm /> },
  limit: { name: "Limit Calculator", description: "Evaluate limits & one-sided limits", component: <LimitCalculator /> },
  derivative: { name: "Derivative Calculator", description: "First & higher order derivatives", component: <DerivativeCalculator /> },
  tangent: { name: "Tangent Line Calculator", description: "Tangent line equation and slope", component: <TangentLineCalculator /> },
  curvesketch: { name: "Curve & Function Sketcher", description: "Intercepts, asymptotes & domain", component: <CurveSketchingCalculator /> },
  continuity: { name: "Continuity Calculator", description: "Check function continuity", component: <ContinuityCalculator /> },
  integral: { name: "Definite & Indefinite Integral", description: "Antiderivatives & area under curve", component: <DefiniteIntegralCalculator /> }
};

// Helper to determine calculator
function getRecommendedCalculatorId(topicId: string): string {
  const combined = topicId.toLowerCase();
  if (combined.includes("continuity")) return "continuity";
  if (combined.includes("limit")) return "limit";
  if (combined.includes("tangent") || combined.includes("equation-of-a-line") || combined.includes("line")) return "tangent";
  if (
    combined.includes("integral") ||
    combined.includes("antiderivative") ||
    combined.includes("antidifferentiation") ||
    combined.includes("riemann") ||
    combined.includes("area") ||
    combined.includes("volume") ||
    combined.includes("differential") ||
    combined.includes("center-of-mass") ||
    combined.includes("arc") ||
    combined.includes("work") ||
    combined.includes("pressure") ||
    combined.includes("disk") ||
    combined.includes("washer") ||
    combined.includes("shell") ||
    combined.includes("cross-section") ||
    combined.includes("ftc")
  ) return "integral";
  if (
    combined.includes("derivative") ||
    combined.includes("differentiab") ||
    combined.includes("rate-of-change") ||
    combined.includes("velocity") ||
    combined.includes("rectilinear") ||
    combined.includes("implicit") ||
    combined.includes("power-function")
  ) return "derivative";
  if (
    combined.includes("curve") ||
    combined.includes("sketch") ||
    combined.includes("asymptote") ||
    combined.includes("extrema") ||
    combined.includes("concavity") ||
    combined.includes("inflection") ||
    combined.includes("maximum") ||
    combined.includes("minimum") ||
    combined.includes("optimization") ||
    combined.includes("rolles") ||
    combined.includes("mean-value") ||
    combined.includes("function") ||
    combined.includes("domain") ||
    combined.includes("range") ||
    combined.includes("circle") ||
    combined.includes("graph")
  ) return "curvesketch";
  if (combined.includes("eigen")) return "eigen";
  if (combined.includes("determinant")) return "determinant";
  if (combined.includes("inverse")) return "inverse";
  if (combined.includes("system") || combined.includes("gaussian")) return "equations";
  if (combined.includes("rank")) return "rank";
  if (combined.includes("span")) return "span";
  if (combined.includes("lu")) return "lu";
  if (combined.includes("qr")) return "qr";
  if (combined.includes("svd")) return "svd";
  return "matrixops";
}

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === id);

  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Topic order & navigation
  const currentTopicIndex = useMemo(() => TOPICS.findIndex((t) => t.id === id), [id]);
  const prevTopic = currentTopicIndex > 0 ? TOPICS[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < TOPICS.length - 1 ? TOPICS[currentTopicIndex + 1] : null;

  // Extract sections with numbers and content
  const sections = useMemo(() => {
    if (!topic?.details) return [];
    try {
      const lines = topic.details.split("\n");
      const result: { number: number; title: string; content: string }[] = [];
      let currentSection: { number: number; title: string; contentLines: string[] } | null = null;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = line.match(/^\s*(\d+)\.\s*(.+)$/);
        if (match) {
          if (currentSection) {
            result.push({
              number: currentSection.number,
              title: currentSection.title,
              content: currentSection.contentLines.join("\n").trim(),
            });
          }
          currentSection = {
            number: parseInt(match[1], 10),
            title: match[2].replace(/[━─=_-]+/g, "").trim(),
            contentLines: [],
          };
        } else if (currentSection) {
          if (!line.trim().startsWith("━") && !line.trim().startsWith("─")) {
            currentSection.contentLines.push(line);
          }
        }
      }

      if (currentSection) {
        result.push({
          number: currentSection.number,
          title: currentSection.title,
          content: currentSection.contentLines.join("\n").trim(),
        });
      }

      return result.filter((s) => s.number > 0 && s.title.length > 0);
    } catch (err) {
      return [];
    }
  }, [topic]);

  // Section content getter
  const getSectionContent = (sectionNumber: number) => {
    const sec = sections.find((s) => s.number === sectionNumber);
    return sec?.content || topic?.details || "";
  };

  const handleCopyExample = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const scrollToSection = (index: number) => {
    setActiveSectionIndex(index);
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const calcId = topic ? getRecommendedCalculatorId(topic.id) : "matrixops";
  const calculatorInfo = CALCULATORS[calcId] || CALCULATORS["matrixops"];

  if (!topic) {
    return (
      <div className="min-h-screen bg-[#FDFBFB] pt-28 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#111827]">Topic Not Found</h2>
        <p className="text-[#6B7280] mt-2">The requested topic could not be located.</p>
        <Link to="/?tab=topics" className="inline-block mt-4 text-[#7B1824] font-bold">
          ← Back to Topics
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBFB] text-[#111827] pt-20 sm:pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Back Button */}
        <div className="flex items-center justify-start">
          <button
            onClick={() => {
              sessionStorage.setItem("returningTopicView", topic.category === "calculus" ? "topics-calculus" : "topics-linear");
              navigate("/?tab=topics");
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-bold text-[#374151] hover:bg-[#F9FAFB] transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{topic.category === "calculus" ? "All Calculus Topics" : "All Linear Algebra Topics"}</span>
          </button>
        </div>

        {/* Sidebar + Main Topic Details Layout (Matching Image 4) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar (Topics List) */}
          <aside className="w-full lg:w-64 shrink-0 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] px-2 mb-3">
              {topic.category === "calculus" ? "Calculus 1 Topics" : "Linear Algebra Topics"}
            </div>

            <div className="flex flex-col gap-1 max-h-[580px] overflow-y-auto pr-1">
              {topic.category === "linear-algebra" ? (
                // Linear Algebra Topics List
                (Array.isArray(LINEAR_TOPICS) ? LINEAR_TOPICS : [])
                  .filter((t) => Boolean(t && t.id && t.title))
                  .map((t) => {
                    const isActive = topic.id === t.id;
                    return (
                      <Link
                        key={t.id}
                        to={`/topics/${t.id}`}
                        className={`topic-sidebar-item ${isActive ? "active" : ""}`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Layers className={`w-4 h-4 shrink-0 ${isActive ? "text-[#7B1824]" : "text-[#6B7280]"}`} />
                          <span className="truncate">{t.title}</span>
                        </div>
                      </Link>
                    );
                  })
              ) : (
                // Calculus Topics List
                (Array.isArray(ALL_CALCULUS_TOPICS) ? ALL_CALCULUS_TOPICS : [])
                  .filter((t) => Boolean(t && t.id && t.title))
                  .map((t) => {
                    const isActive = topic.id === t.id;
                    return (
                      <Link
                        key={t.id}
                        to={`/topics/${t.id}`}
                        className={`topic-sidebar-item ${isActive ? "active" : ""}`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${isActive ? "bg-[#7B1824] text-white" : "bg-[#F3F4F6] text-[#6B7280]"}`}>
                            C{t.chapterNumber || 1}
                          </span>
                          <span className="truncate">{t.title}</span>
                        </div>
                      </Link>
                    );
                  })
              )}
            </div>
          </aside>

          {/* Right Main Topic Content */}
          <main className="flex-1 w-full space-y-8">
            
            {/* Top Breadcrumb & Next Topic Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#E5E7EB] pb-4">
              {/* Breadcrumb Pill */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#d6b1b7] bg-[#fbf3f5] px-3.5 py-1.5 text-xs font-semibold text-[#7B1824]">
                <Layers className="w-3.5 h-3.5" />
                <span>{topic.subCategoryLabel || topic.categoryLabel}</span>
                <span className="text-[#9CA3AF]">&gt;</span>
                <span className="text-[#6B7280]">Overview</span>
                <span className="text-[#9CA3AF]">&gt;</span>
                <span className="font-bold text-[#7B1824]">{topic.title}</span>
              </div>

              {/* Next Topic Link */}
              {nextTopic && (
                <Link
                  to={`/topics/${nextTopic.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B1824] hover:text-[#60101B] transition-colors"
                >
                  <span>Next Topic: {nextTopic.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Topic Main Header (Matching MathVerse style) */}
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon Box */}
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#7B1824] text-white font-serif text-2xl sm:text-3xl font-bold shrink-0 shadow-md shadow-[#7B1824]/20">
                {topic.title.charAt(0)}
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  {topic.title}
                </h1>
                <p className="text-xs sm:text-base text-[#6B7280] leading-relaxed">
                  {topic.summary}
                </p>

                {/* Badges: Lessons & Time */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#374151]">
                    <BookOpen className="w-3.5 h-3.5 text-[#7B1824]" />
                    {sections.length > 0 ? sections.length : (topic.examples?.length || 4)} Sections &amp; Lessons
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#374151]">
                    <Clock className="w-3.5 h-3.5 text-[#7B1824]" />
                    2h 45m Estimated
                  </span>
                </div>
              </div>
            </div>

            {/* Table of Contents (2-Column Grid) */}
            {sections.length > 0 && (
              <section className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-[#111827]">
                  <List className="w-5 h-5 text-[#7B1824]" />
                  <h2>Table of Contents</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {sections.map((section, idx) => (
                    <div
                      key={`toc-${section.number}`}
                      onClick={() => scrollToSection(idx)}
                      className={`toc-item cursor-pointer ${activeSectionIndex === idx ? "border-[#7B1824] bg-[#fbf3f5]" : ""}`}
                    >
                      <div className="toc-number">
                        {section.number}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#374151] flex-1 truncate">
                        {section.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interactive Calculator Banner / Toggle */}
            <div className="rounded-2xl border border-[#d6b1b7] bg-[#fbf3f5] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] text-white shadow-sm shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111827]">
                    {calculatorInfo.name}
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    {calculatorInfo.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all cursor-pointer"
              >
                <span>{showCalculator ? "Hide Calculator" : "Launch Interactive Solver"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCalculator ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Embedded Calculator */}
            {showCalculator && (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-md">
                {calculatorInfo.component}
              </div>
            )}

            {/* Full Explanation & Sections Content */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-[#111827] border-b border-[#E5E7EB] pb-3">
                Comprehensive Lessons &amp; Explanations
              </h2>

              {sections.length > 0 ? (
                sections.map((section, idx) => {
                  const content = getSectionContent(section.number);

                  return (
                    <article
                      key={`section-article-${section.number}`}
                      ref={(el) => { sectionRefs.current[idx] = el; }}
                      className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7B1824] text-white text-xs font-bold font-mono">
                          {section.number}
                        </div>
                        <h3 className="text-lg font-bold text-[#111827]">
                          {section.title}
                        </h3>
                      </div>

                      <div className="text-sm text-[#4B5563] leading-relaxed whitespace-pre-line pt-2">
                        {content || topic.details}
                      </div>
                    </article>
                  );
                })
              ) : (
                <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <div className="text-sm text-[#4B5563] leading-relaxed whitespace-pre-line">
                    {topic.details}
                  </div>
                </article>
              )}
            </section>

            {/* Examples Section */}
            {Array.isArray(topic.examples) && topic.examples.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#111827] border-b border-[#E5E7EB] pb-3">
                  Step-by-Step Verified Examples
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(topic.examples || []).map((example: string, idx: number) => {
                    const exampleText = typeof example === "string" ? example : JSON.stringify(example, null, 2);
                    return (
                      <div
                        key={`example-${idx}`}
                        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 space-y-3 shadow-sm hover:border-[#d6b1b7] transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#d6b1b7] bg-[#fbf3f5] text-[#7B1824]">
                            Example {idx + 1}
                          </span>

                          <button
                            onClick={() => handleCopyExample(exampleText, idx)}
                            className="text-xs text-[#6B7280] hover:text-[#7B1824] inline-flex items-center gap-1 cursor-pointer"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-600" />
                                <span className="text-green-600">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="text-xs sm:text-sm text-[#374151] font-mono leading-relaxed bg-[#F9FAFB] p-3 rounded-xl border border-[#E5E7EB] whitespace-pre-wrap break-words">
                          {exampleText}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Bottom Navigation (Prev / Next Topic) */}
            <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-6">
              {prevTopic ? (
                <Link
                  to={`/topics/${prevTopic.id}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#374151] hover:bg-[#F9FAFB] transition-all shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous: {prevTopic.title}</span>
                </Link>
              ) : <div />}

              {nextTopic && (
                <Link
                  to={`/topics/${nextTopic.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all"
                >
                  <span>Next: {nextTopic.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}