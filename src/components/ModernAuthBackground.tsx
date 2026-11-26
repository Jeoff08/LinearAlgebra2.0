import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import loginShowcaseBg from "../assets/login-showcase-bg.jpg";

interface ModernAuthBackgroundProps {
  children?: React.ReactNode;
}

/**
 * ModernAuthBackground
 * Displays the exact 16:9 designer showcase canvas with authentic
 * non-stretched campus building, 3D orb logo, floating math formulas,
 * fluid wave ribbons, and green dot matrix.
 */
export const ModernAuthBackground: React.FC<ModernAuthBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen bg-[#063316] flex items-center justify-center p-0 sm:p-2 lg:p-4 overflow-x-hidden overflow-y-auto selection:bg-[#166534] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          16:9 HERO CANVAS CONTAINER
          Maintains exact reference mockup proportions so the background
          is never stretched too wide on desktop/laptop displays.
         ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1600px] aspect-auto lg:aspect-[16/9] min-h-screen lg:min-h-0 lg:max-h-[96vh] rounded-none lg:rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between">
        
        {/* Layer 1: High-Resolution Authentic Showcase Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={loginShowcaseBg}
            alt="MathWorkspace Campus & Environment"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle vignette border blend */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-none lg:rounded-[2.5rem] pointer-events-none" />
        </div>

        {/* Layer 2: Interactive "Back to Home" Pill Button */}
        <header className="relative z-30 w-full px-5 sm:px-8 lg:px-10 pt-5 sm:pt-7 lg:pt-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#0b381a]/85 hover:bg-[#0b381a] text-white backdrop-blur-md px-4 py-2 text-xs font-semibold shadow-lg shadow-black/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </header>

        {/* Layer 3: Main Workspace Stage */}
        <main className="relative z-20 w-full flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-14 xl:px-16 py-6 lg:py-4">
          {children}
        </main>

        {/* Layer 4: Minimal subtle bottom footer */}
        <footer className="relative z-10 pb-2 text-center text-[10.5px] text-white/40 pointer-events-none font-medium">
          College of Computer Studies • St. Peter's College
        </footer>
      </div>
    </div>
  );
};

export default ModernAuthBackground;
