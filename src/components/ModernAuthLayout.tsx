import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import campusBg from "../assets/campus-spc-panorama.jpg";
import ccsSeal from "../assets/ccs-spc-seal.png";
import cssoLogo from "../assets/csso-logo.png";

interface ModernAuthLayoutProps {
  children?: React.ReactNode;
  activeTab?: "login" | "register";
}

export const ModernAuthLayout: React.FC<ModernAuthLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen w-full flex flex-col lg:flex-row bg-[#062013] text-gray-900 font-sans selection:bg-[#166534] selection:text-white relative overflow-x-hidden"
    >
      {/* ─────────────────────────────────────────────────────────────
          CAMPUS ATMOSPHERE & BACKGROUND (FULL VIEWPORT)
          - Spans across entire width so rounded corners reveal the campus
          - Zoomed-out wide perspective with smooth left-to-right panning motion
         ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <motion.img
          src={campusBg}
          alt="St. Peter's College Campus"
          className="absolute top-0 bottom-0 left-0 h-full w-[109%] max-w-none object-cover object-center pointer-events-none"
          style={{ willChange: "transform" }}
          initial={{ x: "0%" }}
          animate={{
            x: ["0%", "-8.2%", "0%"],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Deep Forest-to-Midnight Emerald Gradient Overlays for High Contrast (Uniform across whole viewport) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062013] via-[#062013]/65 to-[#062013]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-black/50" />
      </div>

      {/* Interactive Cursor Spotlight Glow (Full Viewport - seamlessly glides across left and right with no division) */}
      {mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 hidden lg:block z-15"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.18), transparent 70%)`,
          }}
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          LEFT SHOWCASE COLUMN: Campus Atmosphere & Interactive Brand Hero
          - Expanded width on desktop to prioritize campus scenery
          - Responsive top hero header on mobile & tablet
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full lg:w-[60%] xl:w-[63%] relative z-10 shrink-0 min-h-0 lg:min-h-screen flex flex-col justify-start lg:justify-between">
        {/* Top Bar: "Back to Home" Button */}
        <div className="relative z-20 p-3 sm:p-4 lg:p-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 hover:bg-black/60 text-white px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer backdrop-blur-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Center Brand Identity (Desktop Showcase - Centered in Left Showcase) */}
        <div className="relative z-20 flex-1 px-6 sm:px-10 lg:px-12 py-6 hidden lg:flex flex-col items-center justify-center text-center">
          {/* Dual Official Emblems: CCS College Seal & CSSO Student Organization Logo Side-by-Side */}
          <div className="relative mb-5 flex items-center justify-center gap-4 xl:gap-6 group">
            {/* Ambient emerald backlight glow behind both emblems */}
            <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            
            {/* CCS College Seal */}
            <img
              src={ccsSeal}
              alt="College of Computer Studies - St. Peter's College"
              className="relative w-28 h-28 xl:w-36 xl:h-36 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-4 ring-white/30 border-2 border-emerald-400/40 select-none transition-transform duration-300 hover:scale-105"
            />

            {/* CSSO Student Organization Logo */}
            <img
              src={cssoLogo}
              alt="Computer Studies Student Organization"
              className="relative w-28 h-28 xl:w-36 xl:h-36 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-4 ring-white/30 border-2 border-emerald-400/40 select-none transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* MathWorkspace Title */}
          <div>
            <h1 className="text-3xl xl:text-4xl font-black tracking-tight leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              <span className="text-white select-none" style={{ color: "#FFFFFF" }}>
                Math
              </span>
              <span className="text-emerald-400 select-none">Workspace</span>
            </h1>
            <p className="text-xs xl:text-sm text-emerald-200/90 font-medium tracking-wide mt-2.5 drop-shadow select-none">
              College of Computer Studies • St. Peter's College
            </p>
          </div>
        </div>

        {/* Bottom Balance Spacer to keep Center Identity perfectly vertically centered on Desktop */}
        <div className="hidden lg:block p-4 sm:p-6 lg:p-8 select-none pointer-events-none opacity-0" aria-hidden="true">
          <div className="h-8" />
        </div>

        {/* Mobile Mini Hero Header */}
        <div className="lg:hidden relative z-20 px-4 pt-1 pb-3 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src={ccsSeal}
              alt="College of Computer Studies - St. Peter's College"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30 shadow-lg select-none"
            />
            <img
              src={cssoLogo}
              alt="Computer Studies Student Organization"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30 shadow-lg select-none"
            />
          </div>
          <h1 className="text-2xl font-black leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <span className="text-white select-none" style={{ color: "#FFFFFF" }}>
              Math
            </span>
            <span className="text-emerald-400 select-none">Workspace</span>
          </h1>
          <p className="text-xs text-emerald-200/80 font-medium mt-1">
            College of Computer Studies • St. Peter's College
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          RIGHT FORM COLUMN: Transparent, no divider, sits over campus bg
          - On mobile: slightly lower towards bottom with balanced breathing room (justify-start pt-4 sm:pt-6)
          - On desktop (web): untouched, vertically centered full height (lg:justify-center lg:min-h-screen)
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full lg:w-[40%] xl:w-[37%] relative z-20 flex-1 flex flex-col justify-start lg:justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-10 lg:py-8 lg:min-h-screen">

        {/* Floating Form Card Container with Smooth Sliding Fade */}
        <div className="w-full max-w-[430px] relative z-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{
                x: location.pathname.includes("register") ? 32 : -32,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                x: location.pathname.includes("register") ? -32 : 32,
                opacity: 0,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1], // fluid ease-out curve
              }}
              style={{
                willChange: "transform, opacity, filter",
              }}
              className="w-full"
            >
              {children || <Outlet />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ModernAuthLayout;
