import React from "react";
import { motion } from "framer-motion";

interface WrongPasswordAnimationProps {
  className?: string;
  triggerKey?: number | string;
  size?: "xs" | "sm" | "md" | "lg";
  type?: "password" | "email";
}

export default function WrongPasswordAnimation({
  className = "",
  triggerKey = 0,
  size = "xs",
  type = "password",
}: WrongPasswordAnimationProps) {
  const sizeClasses = {
    xs: "w-10 h-8",
    sm: "w-12 h-10",
    md: "w-16 h-14",
    lg: "w-24 h-20",
  }[size];

  return (
    <div
      key={triggerKey}
      className={`relative flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* SVG Vector Canvas */}
      <svg
        viewBox="0 0 160 140"
        className={`${sizeClasses} overflow-visible`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Maroon gradients */}
          <linearGradient id="maroonBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9B1C31" />
            <stop offset="50%" stopColor="#801426" />
            <stop offset="100%" stopColor="#5A0D1B" />
          </linearGradient>

          <linearGradient id="shackleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5A0D1B" />
            <stop offset="50%" stopColor="#400913" />
            <stop offset="100%" stopColor="#2E050D" />
          </linearGradient>

          <linearGradient id="errorCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5C5C" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>

          {/* Soft drop shadow */}
          <filter id="lockShadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#2A050B"
              floodOpacity="0.4"
            />
          </filter>

          {/* Glow for error badge */}
          <filter id="errorGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#DC2626"
              floodOpacity="0.5"
            />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* 1. MOTION VIBRATION LINES (Left & Right)                 */}
        {/* ========================================================= */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            scale: [0.9, 1.08, 1],
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Left Motion Lines */}
          <path
            d="M 24 64 Q 18 72 24 80"
            stroke="#DC2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
          <path
            d="M 16 60 Q 9 72 16 84"
            stroke="#9B1C31"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
          <path
            d="M 30 54 L 23 58"
            stroke="#FF5C5C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <path
            d="M 30 90 L 23 86"
            stroke="#FF5C5C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* Right Motion Lines */}
          <path
            d="M 136 64 Q 142 72 136 80"
            stroke="#DC2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
          <path
            d="M 144 60 Q 151 72 144 84"
            stroke="#9B1C31"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
        </motion.g>

        {/* ========================================================= */}
        {/* 2. RAPIDLY SHAKING ASSET (Padlock OR Envelope)            */}
        {/* ========================================================= */}
        <motion.g
          initial={{ x: 0 }}
          animate={{
            x: [0, -10, 10, -8, 8, -5, 5, -2, 2, 0],
            rotate: [0, -2.5, 2.5, -2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          filter="url(#lockShadow)"
        >
          {type === "password" ? (
            /* Padlock Asset */
            <>
              {/* Shackle (Arch) */}
              <path
                d="M 54 58 V 38 C 54 23.64 65.64 12 80 12 C 94.36 12 106 23.64 106 38 V 58"
                fill="none"
                stroke="url(#shackleGrad)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Inner Shackle Highlight */}
              <path
                d="M 54 42 V 38 C 54 25 64 15 76 14.2"
                fill="none"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Padlock Body */}
              <rect
                x="44"
                y="52"
                width="72"
                height="62"
                rx="16"
                ry="16"
                fill="url(#maroonBodyGrad)"
              />

              {/* Body Subtle Gloss Highlight */}
              <path
                d="M 52 60 H 108 C 111 60 113 62 113 65 C 113 66 112 67 110 67 H 50 C 48 67 47 66 47 65 C 47 62 49 60 52 60 Z"
                fill="white"
                fillOpacity="0.18"
              />
              <line
                x1="52"
                y1="67"
                x2="52"
                y2="98"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Keyhole */}
              <g>
                <circle cx="80" cy="78" r="6" fill="#2E050D" />
                <path
                  d="M 77.2 81 L 76 96 C 76 97.2 76.8 98 78 98 H 82 C 83.2 98 84 97.2 84 96 L 82.8 81 Z"
                  fill="#2E050D"
                />
                <circle cx="80" cy="77" r="4" fill="#1C0308" />
              </g>
            </>
          ) : (
            /* Envelope / Mail Asset */
            <>
              {/* Mail Body */}
              <rect
                x="38"
                y="40"
                width="84"
                height="60"
                rx="14"
                ry="14"
                fill="url(#maroonBodyGrad)"
              />
              {/* Envelope flap lines */}
              <path
                d="M 44 48 L 80 76 L 116 48"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 44 94 L 66 72"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 116 94 L 94 72"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          )}
        </motion.g>

        {/* ========================================================= */}
        {/* 3. POPPING RED ERROR BADGE (Beside Asset + Bounce)        */}
        {/* ========================================================= */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.25, 0.92, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            type: "spring",
            stiffness: 420,
            damping: 18,
          }}
          style={{ transformOrigin: "112px 34px" }}
          filter="url(#errorGlow)"
        >
          {/* Circular Red Badge */}
          <circle cx="112" cy="34" r="16" fill="url(#errorCircleGrad)" />

          {/* White Cross / X Mark */}
          <path
            d="M 105 27 L 119 41"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 119 27 L 105 41"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Top highlight glint */}
          <circle cx="108" cy="24" r="2" fill="white" fillOpacity="0.6" />
        </motion.g>

        {/* ========================================================= */}
        {/* 4. BURST / SPARKLE ACCENTS AROUND RED ERROR BADGE         */}
        {/* ========================================================= */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0.9, 0],
            scale: [0.6, 1.15, 1],
          }}
          transition={{
            duration: 0.65,
            delay: 0.18,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "112px 34px" }}
        >
          <path
            d="M 132 18 Q 132 23 137 23 Q 132 23 132 28 Q 132 23 127 23 Q 132 23 132 18 Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          <line
            x1="124"
            y1="16"
            x2="129"
            y2="10"
            stroke="#FF8080"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="112"
            y1="12"
            x2="112"
            y2="6"
            stroke="#FF8080"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="134"
            y1="34"
            x2="140"
            y2="34"
            stroke="#FF8080"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </div>
  );
}
