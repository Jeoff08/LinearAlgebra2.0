// pages/CalculatorDetailPage.tsx
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Calculator, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Check
} from "lucide-react";
import { tools } from "../calculators/CalculatorApp";

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
          className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#60101B] transition-all cursor-pointer"
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

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">

      {/* ── Slim Sub-Nav Bar (Dark, matching site style) ── */}
      <div className="sticky top-16 z-30 bg-[#0B0F15] border-b border-white/10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">

          {/* Left: Back Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => navigate("/calculator-hub")}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Math Tools</span>
            </button>

            <button
              onClick={() => navigate("/calculators")}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-white backdrop-blur-md transition-all cursor-pointer hidden sm:inline-flex"
            >
              <span>Linear Algebra (23)</span>
            </button>
          </div>

          {/* Center: Calculator Dropdown Switcher */}
          <div className="relative flex-1 max-w-sm sm:max-w-md mx-auto" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 px-3.5 py-1.5 transition-all cursor-pointer group shadow-inner"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7B1824] text-white shadow-xs shrink-0">
                  <Calculator className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="block text-xs sm:text-sm font-black text-white truncate tracking-tight">
                    {currentTool.name}
                  </span>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu Popup */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/15 bg-[#121824] text-white shadow-2xl p-2 z-50 max-h-[380px] flex flex-col animate-in fade-in zoom-in-95 duration-150">
                {/* Search inside Dropdown */}
                <div className="relative px-1 pb-2 mb-1 border-b border-white/10">
                  <Search className="absolute left-3.5 top-2.5 w-3.5 h-3.5 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search all 23 calculators..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#E05260] focus:border-[#E05260]"
                  />
                </div>

                {/* List of calculators */}
                <div className="overflow-y-auto space-y-1 flex-1 pr-1 scrollbar-thin scrollbar-thumb-white/20">
                  {filteredTools.length > 0 ? (
                    filteredTools.map((t) => {
                      const isSelected = t.id === currentTool.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => handleSelectTool(t.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#7B1824] text-white font-bold shadow-xs"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <p className="text-xs font-bold leading-snug truncate">
                              {t.name}
                            </p>
                            <span className="text-[10px] text-white/50 font-medium">
                              {t.categoryLabel}
                            </span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                        </button>
                      );
                    })
                  ) : (
                    <div className="py-6 text-center text-xs text-white/50">
                      No calculator matching &quot;{searchTerm}&quot;
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Prev / Next Navigation */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] text-white/60 font-mono hidden md:inline mr-1">
              {currentIndex + 1} / {tools.length}
            </span>
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              title="Previous Calculator"
              className="p-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= tools.length - 1}
              title="Next Calculator"
              className="p-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Calculator — Centered ── */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 pb-10">
        <div className="w-full max-w-3xl">
          {currentTool.component}
        </div>
      </main>

    </div>
  );
}
