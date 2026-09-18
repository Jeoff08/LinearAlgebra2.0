// pages/CalculusCalculatorsPage.tsx
import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import mathBg from "../assets/math.jpeg";
import {
  Calculator as CalcIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  CALCULATOR_DEFINITIONS,
  type CalculatorDefinition,
} from "../Calculus_One_Calculator/CalculatorData";
import Calculator from "../Calculus_One_Calculator/Calculator";

const CATEGORIES = [
  { id: "all", label: "All Calculators", count: 29 },
  { id: "Calculus 1", label: "Calculus 1", count: 17 },
  { id: "Calculus 2", label: "Calculus 2", count: 12 },
] as const;

export default function CalculusCalculatorsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedToolId, setSelectedToolId] = useState<string | null>(() => {
    return searchParams.get("tool") || searchParams.get("id") || null;
  });

  useEffect(() => {
    const toolParam = searchParams.get("tool") || searchParams.get("id");
    if (toolParam) {
      const exists = CALCULATOR_DEFINITIONS.some((t) => t.id === toolParam);
      if (exists) {
        setSelectedToolId(toolParam);
      }
    } else {
      setSelectedToolId(null);
    }
  }, [searchParams]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = selectedToolId
    ? CALCULATOR_DEFINITIONS.findIndex((t) => t.id === selectedToolId)
    : -1;
  const currentTool = currentIndex >= 0 ? CALCULATOR_DEFINITIONS[currentIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedToolId) handleClose();
        else navigate("/calculator-hub");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, selectedToolId]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToCatalog = () => {
    document
      .getElementById("calculus-catalog")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectTool = (id: string) => {
    setSelectedToolId(id);
    setSearchParams({ tool: id });
    setIsDropdownOpen(false);
    setSearchTerm("");
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const handleClose = () => {
    setSelectedToolId(null);
    setSearchParams({});
    scrollToCatalog();
  };

  const handlePrevTool = () => {
    if (currentIndex > 0) {
      const prev = CALCULATOR_DEFINITIONS[currentIndex - 1];
      handleSelectTool(prev.id);
    }
  };

  const handleNextTool = () => {
    if (currentIndex < CALCULATOR_DEFINITIONS.length - 1) {
      const next = CALCULATOR_DEFINITIONS[currentIndex + 1];
      handleSelectTool(next.id);
    }
  };

  // Filter tools for grid view
  const gridFilteredTools = CALCULATOR_DEFINITIONS.filter((tool) => {
    const matchesCategory =
      selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tool.badge && tool.badge.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] text-[#111827]">
      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative overflow-hidden min-h-[460px] lg:min-h-[500px] flex items-center bg-[#0C1017] pt-16 sm:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={mathBg}
            alt="Math background"
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

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#166534]/60 bg-[#166534]/30 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#22c55e] tracking-wider shadow-xs"
              >
                <CalcIcon className="w-3.5 h-3.5" />
                <span>Calculus Suite · 29 Independent Solvers</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight text-white leading-[1.08]"
            >
              <span className="text-white">Solve Smarter with</span>
              <br />
              <span className="text-[#15803d]">Calculus 1 &amp; 2 Calculators</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl"
            >
              Comprehensive step-by-step solvers for all 29 Calculus topics: limits, derivatives, integration techniques, curve analysis, series convergence, and power series.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532D] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#166534]/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Browse All 29 Solvers</span>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* WORKSPACE TOP NAV BAR (when a tool is selected)                         */}
      {/* ======================================================================= */}
      <AnimatePresence>
        {selectedToolId && currentTool && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sticky top-16 sm:top-[4.5rem] z-30 bg-[#0B0F15] border-b border-white/10 shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleClose}
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
                    ref={buttonRef}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition border border-white/10 cursor-pointer"
                  >
                    <span className="hidden sm:inline">Switch Calculator</span>
                    <span className="sm:hidden">Switch</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute left-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-[#111827] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                      >
                        <div className="p-2 border-b border-white/10 mb-1">
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              placeholder="Search 29 calculators..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 text-white text-xs placeholder-gray-400 border border-white/10 outline-none focus:border-[#166534]"
                            />
                          </div>
                        </div>
                        <div className="max-h-72 overflow-y-auto space-y-1">
                          {CALCULATOR_DEFINITIONS.filter((t) =>
                            t.name.toLowerCase().includes(searchTerm.toLowerCase())
                          ).map((tool) => {
                            const ToolIcon = tool.icon;
                            return (
                              <button
                                key={tool.id}
                                onClick={() => handleSelectTool(tool.id)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs transition cursor-pointer ${
                                  tool.id === selectedToolId
                                    ? "bg-[#166534] text-white font-bold"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                <ToolIcon className="w-3.5 h-3.5 shrink-0" />
                                <div className="min-w-0">
                                  <div className="truncate">{tool.name}</div>
                                  <div className="text-[10px] opacity-60">{tool.category}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTool}
                  disabled={currentIndex <= 0}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Previous solver"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                  {currentIndex + 1} / {CALCULATOR_DEFINITIONS.length}
                </span>
                <button
                  onClick={handleNextTool}
                  disabled={currentIndex >= CALCULATOR_DEFINITIONS.length - 1}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Next solver"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================================= */}
      {/* CATALOG & WORKSPACE CONTAINER                                            */}
      {/* ======================================================================= */}
      <div
        id="calculus-catalog"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        <AnimatePresence mode="wait">
          {!selectedToolId ? (
            /* ─── CATALOG GRID VIEW (All 29 Solvers) ──────── */
            <motion.div
              key="catalog-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Filter Pills & Search */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/20"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                          selectedCategory === cat.id
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Search box */}
                <div className="relative w-full md:w-72 shrink-0">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search 29 calculus solvers..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:bg-white focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10 outline-none transition"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of 29 Tool Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridFilteredTools.map((tool) => {
                  const ToolIcon = tool.icon;

                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4 }}
                      onClick={() => handleSelectTool(tool.id)}
                      className="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 cursor-pointer overflow-hidden bg-white text-gray-900 border-gray-200 hover:border-[#166534]/40 hover:shadow-lg shadow-xs"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all bg-[#166534]/10 text-[#166534] group-hover:bg-[#166534] group-hover:text-white">
                            <ToolIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-gray-100 text-gray-600 border-gray-200">
                            {tool.category}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-black tracking-tight text-gray-900">
                            {tool.name}
                          </h3>
                          <p className="text-xs mt-1 leading-relaxed text-gray-500 line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-gray-400 truncate max-w-[200px]">
                          e.g. {tool.example}
                        </span>
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#166534] group-hover:translate-x-1 transition-transform">
                          <span>Solve</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* ─── ACTIVE TOOL WORKSPACE VIEW (ONE SHARED CALCULATOR UI) ─── */
            <motion.div
              key="workspace-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentTool && <Calculator definition={currentTool} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}