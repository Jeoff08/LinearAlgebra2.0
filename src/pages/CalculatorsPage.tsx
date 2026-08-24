// pages/CalculatorsPage.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CalculatorApp from "../calculators/CalculatorApp";
import { ArrowLeft, Grid, Layers } from "lucide-react";

export default function CalculatorsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-white text-[#111827] pb-16">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-bold text-[#374151] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Title Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-2">
          <div className="flex items-center gap-3.5">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                  Linear Algebra Calculators
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border border-blue-200 bg-[#EFF6FF] text-[#2563EB]">
                  23 Tools
                </span>
              </div>
              <p className="text-xs sm:text-sm mt-1 text-[#6B7280]">
                Explore intelligent linear algebra solvers — from matrices to eigenvectors
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Component Container */}
        <div className="relative w-full">
          <CalculatorApp />
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs flex items-center justify-center gap-2 text-[#6B7280]">
            <Grid className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>All 23 tools powered by modern linear algebra algorithms</span>
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
          </p>
        </div>
      </div>
    </div>
  );
}