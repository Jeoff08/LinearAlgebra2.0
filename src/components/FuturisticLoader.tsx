import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FuturisticLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function FuturisticLoader({ isLoading, onComplete }: FuturisticLoaderProps) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/75 backdrop-blur-md select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0D1525]/90 border border-white/10 shadow-2xl shadow-black/60">
            {/* Modern Clean Blue & Green Spinner */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              {/* Subtle background track */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-700/30" />

              {/* Blue & Green Spinning Arc */}
              <svg className="w-full h-full animate-spin" viewBox="0 0 50 50">
                <defs>
                  <linearGradient id="normalBlueGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D2FF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="url(#normalBlueGreen)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="80 50"
                />
              </svg>

              {/* Inner glowing dot */}
              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
            </div>

            {/* Clean Loading Label */}
            <div className="mt-5 flex items-center gap-1.5 text-sm sm:text-base font-semibold text-white tracking-wide">
              <span>Loading</span>
              <span className="flex gap-1 items-center ml-0.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#34D399]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-400 font-medium">Please wait a moment</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
