import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import loginBg from "../assets/login.png";

/**
 * SidebarMovingBackground
 * Renders the campus background image slowly and smoothly panning.
 * In light mode, uses a soft, lighter overlay so sidebar text has optimal contrast and readability.
 * In dark mode, maintains balanced contrast matching the dark dashboard.
 */
export const SidebarMovingBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Panning image layer */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 h-full w-[260%] max-w-none"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.35 : 0.50,
          filter: isDark
            ? "brightness(70%) contrast(110%)"
            : "brightness(103%) contrast(98%)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-60%", "0%"],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Semi-transparent overlay — lighter in light mode for clear text readability */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(22, 31, 48, 0.65), rgba(22, 31, 48, 0.60), rgba(22, 31, 48, 0.65))"
            : "linear-gradient(to bottom, rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.60))",
        }}
      />
    </div>
  );
};

export default SidebarMovingBackground;
