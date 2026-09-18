// pages/CalculatorDetailPage.tsx
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight,
  BookOpen,
  Calculator, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Sparkles 
} from "lucide-react";
import mathBg from "../assets/math.jpeg";
import { tools } from "../calculators/CalculatorApp";

const LINEAR_ALGEBRA_EXAMPLES: Record<string, string> = {
  equations: "2x + y - z = 8, -3x - y + 2z = -11, -2x + y + 2z = -3",
  leastsquares: "A = [[1, 1], [1, 2], [1, 3]], b = [1, 2, 2]",
  transformation: "T(x, y) = (2x + y, x - 3y), v = [1, 2]",
  quadratic: "Q(x, y) = 3x² + 2xy + 3y²",
  matrix: "A = [[2, 1], [1, 3]], power = 3",
  matrixops: "A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]",
  inverse: "A = [[4, 7], [2, 6]]",
  determinant: "det([[1, 2, 3], [0, 4, 5], [1, 0, 6]])",
  rank: "A = [[1, 2, 3], [2, 4, 6], [1, 1, 1]]",
  transpose: "A = [[1, 2, 3], [4, 5, 6]]",
  vector: "v = [3, -4, 12]",
  dot: "u = [1, 2, 3], v = [4, -5, 6]",
  cross: "u = [1, 0, 0], v = [0, 1, 0]",
  projection: "proj_v(u) where u = [2, 1], v = [3, 4]",
  independence: "v₁ = [1, 2], v₂ = [3, 6]",
  combination: "b = [7, 11] as c₁[1, 2] + c₂[3, 1]",
  basis: "S = {[1, 0, 1], [0, 1, 1], [1, 1, 2]}",
  span: "v = [2, 3, 5] in span([1, 1, 2], [0, 1, 1])",
  eigen: "A = [[4, 1], [2, 3]]",
  diagonalization: "A = [[1, 3], [3, 1]]",
  lu: "A = [[2, 1, 1], [4, 3, 3], [8, 7, 9]]",
  qr: "A = [[1, 1], [1, 0], [1, 2]]",
  svd: "A = [[3, 2, 2], [2, 3, -2]]",
};

export default function CalculatorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentIndex = tools.findIndex((t) => t.id === id);
  const currentTool = currentIndex >= 0 ? tools[currentIndex] : null;

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    navigate(`/calculators/${tools[currentIndex - 1].id}`);
    setIsDropdownOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < 0 || currentIndex >= tools.length - 1) return;
    navigate(`/calculators/${tools[currentIndex + 1].id}`);
    setIsDropdownOpen(false);
  };

  const handleSelectTool = (toolId: string) => {
    navigate(`/calculators/${toolId}`);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  if (!currentTool) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBFB] gap-4">
        <Calculator className="w-12 h-12 text-[#9CA3AF]" />
        <h2 className="text-lg font-bold text-[#111827]">Calculator not found</h2>
        <button
          onClick={() => navigate("/calculators")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#166534] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#14532D] transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Calculators
        </button>
      </div>
    );
  }

  const filteredTools = tools.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exampleProblem = LINEAR_ALGEBRA_EXAMPLES[currentTool.id] || "";

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] text-[#111827]">
      {/* ======================================================================= */}
      {/* 1. HERO SECTION (Chalkboard Background with Action Buttons)             */}
      {/* ======================================================================= */}
      <section className="relative overflow-hidden min-h-[380px] lg:min-h-[420px] flex items-center bg-[#0C1017] pt-16 sm:pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={mathBg}
            alt="Mathematics background"
            className="w-full h-full object-cover object-center lg:object-[center_right] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-50% to-black/35 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl space-y-5">
            {/* Top Back Breadcrumb & Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => navigate("/calculator-hub")}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white px-3 py-1 text-xs font-semibold backdrop-blur-md transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Math Tools</span>
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#166534]/60 bg-[#166534]/30 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#22c55e] tracking-wider shadow-xs">
                <Calculator className="w-3.5 h-3.5" />
                <span>Linear Algebra Suite · 23 Solvers</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight text-white leading-[1.08]">
              <span className="text-white">Solve Smarter with</span>
              <br />
              <span className="text-[#15803d]">Linear Algebra Calculators</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl">
              From systems of equations and matrices to eigenvalues and vector spaces, explore comprehensive step-by-step solvers for all 23 linear algebra modules.
            </p>

            {/* CTA Buttons matching Image 2 */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => navigate("/calculators")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532D] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#166534]/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Browse All 23 Solvers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate("/calculator-hub")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-white/80" />
                <span>All Math Tools</span>
              </button>

              <button
                onClick={() => navigate("/?tab=topics")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white/80" />
                <span>View Topics</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* 2. WORKSPACE TOP NAV BAR (Sticky, matching Image 2)                     */}
      {/* ======================================================================= */}
      <div className="sticky top-16 sm:top-[4.5rem] z-30 bg-[#0B0F15] border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/calculators")}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Solvers</span>
            </button>

            <button
              onClick={() => navigate("/calculator-hub")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white text-xs font-semibold px-3 py-2 transition cursor-pointer hidden sm:inline-flex"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Math Tools</span>
            </button>

            {/* Dropdown Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition border border-white/10 cursor-pointer"
              >
                <span className="hidden sm:inline">Switch Calculator</span>
                <span className="sm:hidden">Switch</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 sm:left-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-[#111827] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden">
                  <div className="p-2 border-b border-white/10 mb-1">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search 23 calculators..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 text-white text-xs placeholder-gray-400 border border-white/10 outline-none focus:border-[#166534]"
                      />
                    </div>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-1">
                    {filteredTools.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTool(t.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs transition cursor-pointer ${
                          t.id === currentTool.id
                            ? "bg-[#166534] text-white font-bold"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Calculator className="w-3.5 h-3.5 shrink-0" />
                        <div className="min-w-0">
                          <div className="truncate font-semibold">{t.name}</div>
                          <div className="text-[10px] opacity-60 font-mono">{t.categoryLabel}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Previous solver"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              {currentIndex + 1} / {tools.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex >= tools.length - 1}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Next solver"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 3. WORKSPACE CONTAINER (Matching Image 2 exactly)                       */}
      {/* ======================================================================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-5">
        {/* ── 1. CALCULATOR HEADER CARD ── */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#166534] text-white flex items-center justify-center shadow-md shadow-[#166534]/20 shrink-0">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#166534]/10 text-[#166534]">
                    LINEAR ALGEBRA
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-400 font-mono">
                    Linear Algebra • {currentTool.categoryLabel}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight mt-0.5 truncate">
                  {currentTool.name}
                </h2>
              </div>
            </div>
          </div>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            {currentTool.description}
          </p>

          {/* Quick Example Suggestion Chip */}
          {exampleProblem && (
            <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#166534]" />
                <span>Example:</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 text-[11px] sm:text-xs font-mono font-medium text-gray-800 break-all">
                <span>{exampleProblem}</span>
                <span className="text-[10px] text-[#166534] font-bold shrink-0">Use</span>
              </span>
            </div>
          )}
        </div>

        {/* ── 2. CALCULATOR WORKSPACE CARD ── */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-8 shadow-xs overflow-x-auto">
          {currentTool.component}
        </div>
      </div>
    </div>
  );
}
