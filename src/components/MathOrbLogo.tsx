import React from "react";

interface MathOrbLogoProps {
  className?: string;
  size?: number;
}

/**
 * MathOrbLogo
 * 3D glossy emerald sphere with white Greek Sigma (Σ)
 * and an orbiting Saturn-style ring matching the design mockup.
 */
export const MathOrbLogo: React.FC<MathOrbLogoProps> = ({
  className = "",
  size = 90,
}) => {
  const idPrefix = React.useId().replace(/:/g, "");

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 140 140"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(22,101,52,0.35)]"
      >
        <defs>
          {/* 3D Sphere Radial Gradient */}
          <radialGradient
            id={`${idPrefix}-sphereGrad`}
            cx="35%"
            cy="32%"
            r="65%"
            fx="30%"
            fy="28%"
          >
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="20%" stopColor="#22c55e" />
            <stop offset="55%" stopColor="#15803d" />
            <stop offset="85%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>

          {/* Gloss Specular Reflection */}
          <linearGradient
            id={`${idPrefix}-specularGrad`}
            x1="20%"
            y1="10%"
            x2="50%"
            y2="70%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Orbiting Ring Gradient */}
          <linearGradient
            id={`${idPrefix}-ringGrad`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#4ade80" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#16a34a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#14532d" stopOpacity="0.9" />
          </linearGradient>

          {/* Ambient Glow */}
          <filter id={`${idPrefix}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Clip path for Back of Ring (behind sphere) */}
          <clipPath id={`${idPrefix}-backClip`}>
            {/* Upper portion: ring is visible behind upper-left sphere */}
            <path d="M 0 0 L 140 0 L 140 85 L 0 50 Z" />
          </clipPath>

          {/* Clip path for Front of Ring (in front of sphere) */}
          <clipPath id={`${idPrefix}-frontClip`}>
            {/* Lower portion: ring loops in front of bottom-right sphere */}
            <path d="M 0 50 L 140 85 L 140 140 L 0 140 Z" />
          </clipPath>
        </defs>

        {/* Ambient bottom shadow */}
        <ellipse
          cx="70"
          cy="124"
          rx="44"
          ry="11"
          fill="#052e16"
          opacity="0.28"
          filter={`url(#${idPrefix}-glow)`}
        />

        {/* BACK HALF OF ORBIT RING (behind sphere) */}
        <g clipPath={`url(#${idPrefix}-backClip)`} transform="rotate(-26 70 70)">
          {/* Ring Outer Stroke */}
          <ellipse
            cx="70"
            cy="70"
            rx="58"
            ry="20"
            stroke={`url(#${idPrefix}-ringGrad)`}
            strokeWidth="5.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Inner ring highlight core */}
          <ellipse
            cx="70"
            cy="70"
            rx="58"
            ry="20"
            stroke="#ffffff"
            strokeWidth="1.2"
            opacity="0.65"
          />
        </g>

        {/* 3D MAIN SPHERE */}
        <circle
          cx="70"
          cy="70"
          r="42"
          fill={`url(#${idPrefix}-sphereGrad)`}
        />

        {/* Sphere Inner Glow / Rim Light */}
        <circle
          cx="70"
          cy="70"
          r="41"
          stroke="#86efac"
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* Glossy Top-Left Specular Sheen */}
        <ellipse
          cx="58"
          cy="50"
          rx="22"
          ry="14"
          transform="rotate(-30 58 50)"
          fill={`url(#${idPrefix}-specularGrad)`}
        />

        {/* Small bright specular sparkle */}
        <circle cx="50" cy="42" r="3.5" fill="#ffffff" opacity="0.9" />

        {/* GREEK SIGMA (Σ) SYMBOL — Bold, crisp white with 3D drop shadow */}
        <g filter="drop-shadow(0px 2px 3px rgba(5,46,22,0.65))">
          <text
            x="70"
            y="79"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#ffffff"
            fontSize="37"
            fontFamily="'Georgia', 'Times New Roman', serif"
            fontWeight="bold"
            letterSpacing="-1"
          >
            Σ
          </text>
        </g>

        {/* FRONT HALF OF ORBIT RING (in front of sphere) */}
        <g clipPath={`url(#${idPrefix}-frontClip)`} transform="rotate(-26 70 70)">
          {/* Ring Outer Stroke */}
          <ellipse
            cx="70"
            cy="70"
            rx="58"
            ry="20"
            stroke={`url(#${idPrefix}-ringGrad)`}
            strokeWidth="5.5"
            strokeLinecap="round"
            opacity="0.95"
          />
          {/* Ring highlight glint */}
          <ellipse
            cx="70"
            cy="70"
            rx="58"
            ry="20"
            stroke="#ffffff"
            strokeWidth="1.4"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  );
};

export default MathOrbLogo;
