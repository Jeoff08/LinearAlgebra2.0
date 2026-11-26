import React, { useState } from "react";
import { motion } from "framer-motion";
import campusBg from "../assets/campus-bg.jpg";

interface AuthPanningBackgroundProps {
  className?: string;
  overlayGradient?: boolean;
  children?: React.ReactNode;
}

// Subtle ambient math glyphs drifting gently
const MATH_PARTICLES = [
  { symbol: "∑", x: "15%", y: "25%", size: "text-2xl", delay: 0, duration: 18 },
  { symbol: "∫", x: "78%", y: "30%", size: "text-3xl", delay: 2, duration: 22 },
  { symbol: "λ", x: "28%", y: "70%", size: "text-xl", delay: 4, duration: 19 },
  { symbol: "π", x: "85%", y: "65%", size: "text-2xl", delay: 1, duration: 24 },
  { symbol: "dx", x: "42%", y: "82%", size: "text-lg", delay: 3, duration: 20 },
  { symbol: "A·B", x: "65%", y: "18%", size: "text-lg", delay: 5, duration: 21 },
  { symbol: "√x", x: "12%", y: "55%", size: "text-xl", delay: 2.5, duration: 23 },
  { symbol: "∞", x: "50%", y: "38%", size: "text-2xl", delay: 4.5, duration: 25 },
];

/**
 * AuthPanningBackground
 * Displays the St. Peter's College campus background image with
 * an ultra-smooth, slow horizontal panning animation, interactive mouse spotlight,
 * floating math glyphs, and high-end atmospheric depth.
 */
export const AuthPanningBackground: React.FC<AuthPanningBackgroundProps> = ({
  className = "",
  overlayGradient = true,
  children,
}) => {
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
      className={`relative w-full h-full overflow-hidden select-none bg-slate-950 ${className}`}
    >
      {/* Animated Panning Image */}
      <motion.img
        src={campusBg}
        alt="St. Peter's College Campus"
        className="absolute top-0 bottom-0 left-0 h-full w-[130%] max-w-none object-cover object-center pointer-events-none"
        style={{ willChange: "transform" }}
        animate={{
          x: ["0%", "-18%", "0%"],
        }}
        transition={{
          duration: 26,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Atmospheric Overlays for Depth and Contrast */}
      {overlayGradient && (
        <>
          {/* Subtle dark emerald & vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[#064e23]/25 mix-blend-multiply pointer-events-none" />
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60 pointer-events-none" />
        </>
      )}

      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.18), rgba(6, 78, 35, 0.08) 45%, transparent 70%)`,
          }}
        />
      )}

      {/* Floating Mathematics Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {MATH_PARTICLES.map((p, idx) => (
          <motion.div
            key={idx}
            className={`absolute font-mono font-bold text-emerald-300/25 ${p.size}`}
            style={{ left: p.x, top: p.y }}
            animate={{
              y: ["0px", "-24px", "0px"],
              x: ["0px", "12px", "0px"],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.symbol}
          </motion.div>
        ))}
      </div>

      {/* Optional Inset Content (Navigation pills, children) */}
      {children && <div className="relative z-20 w-full h-full">{children}</div>}
    </div>
  );
};

export default AuthPanningBackground;
