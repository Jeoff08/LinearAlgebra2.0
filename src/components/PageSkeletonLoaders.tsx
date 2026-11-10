import React from "react";
import imageLogo from "../assets/image logo.png";

/**
 * 1. HOME SKELETON LOADER
 * Matches EXACT image 1:
 * - Frame container with rounded border, chalkboard texture mockup
 * - Left content: "MATH TOOLS & TOPICS" pill badge
 * - "Linear Algebra / Calculus" headline
 * - "1 & 2" + green "Calculators"
 * - Subtitle description lines
 * - Two action buttons: "Explore Calculators" and "Browse Topics"
 * - Right illustration/table mockup
 */
export const HomeSkeletonLoader: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#092328] px-2 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 select-none animate-in fade-in duration-300">
      <div className="relative w-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-[#14444d] bg-[#0c1e22]/90 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Hero Details */}
        <div className="flex-1 max-w-2xl space-y-5">
          {/* Badge: MATH TOOLS & TOPICS */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <div className="h-3 w-36 rounded bg-emerald-400/40 animate-pulse" />
          </div>

          {/* Headline: Linear Algebra / Calculus 1 & 2 Calculators */}
          <div className="space-y-3">
            <div className="h-10 sm:h-14 w-11/12 rounded-2xl bg-white/20 animate-pulse" />
            <div className="flex items-center gap-4">
              <div className="h-10 sm:h-14 w-20 rounded-2xl bg-white/20 animate-pulse" />
              <div className="h-10 sm:h-14 w-52 sm:w-64 rounded-2xl bg-emerald-500/35 animate-pulse" />
            </div>
          </div>

          {/* Subtitle paragraph */}
          <div className="space-y-2 pt-2 max-w-lg">
            <div className="h-3.5 w-full rounded bg-white/15 animate-pulse" />
            <div className="h-3.5 w-4/5 rounded bg-white/10 animate-pulse" />
          </div>

          {/* Buttons: Explore Calculators & Browse Topics */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="h-12 w-48 rounded-xl bg-emerald-700/60 border border-emerald-500/40 animate-pulse flex items-center justify-center gap-2 px-4">
              <div className="w-4 h-4 rounded bg-white/30" />
              <div className="h-3 w-28 rounded bg-white/40" />
            </div>
            <div className="h-12 w-44 rounded-xl bg-white/5 border border-white/15 animate-pulse flex items-center justify-center gap-2 px-4">
              <div className="w-4 h-4 rounded bg-white/20" />
              <div className="h-3 w-24 rounded bg-white/20" />
            </div>
          </div>
        </div>

        {/* Right Blackboard Formulas / Lamp Artwork Mockup */}
        <div className="hidden lg:flex w-96 h-80 rounded-2xl border border-white/5 bg-black/20 p-6 flex-col justify-between opacity-60">
          <div className="space-y-3">
            <div className="h-3 w-28 rounded bg-white/10 animate-pulse" />
            <div className="h-8 w-44 rounded bg-white/15 animate-pulse" />
            <div className="h-2 w-32 rounded bg-white/10 animate-pulse" />
          </div>
          <div className="flex justify-end">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin" style={{ animationDuration: "14s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. CALCULATORS / CALCULATOR HUB SKELETON LOADER
 * Matches EXACT image 2:
 * - Full chalkboard hero section
 * - "CALCULATOR HUB" pill
 * - "All the Math Tools / You Need."
 * - Features row: "Provide Results", "Step-by-Step Solutions", "Interactive Visuals"
 * - Section header below: "Select a Mathematics Calculator"
 * - Subject selector cards
 */
export const CalculatorsSkeletonLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0e131b] select-none animate-in fade-in duration-300">
      {/* Top Blackboard Hero Section */}
      <div className="relative w-full pt-20 pb-16 sm:pt-24 sm:pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10 bg-[#0e131b]">
        <div className="mx-auto max-w-[1320px] max-w-2xl space-y-5">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/30 border border-emerald-500/40">
            <div className="w-3.5 h-3.5 rounded bg-emerald-400/40 animate-pulse" />
            <div className="h-3 w-28 rounded bg-emerald-400/50 animate-pulse" />
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <div className="h-10 sm:h-14 w-80 sm:w-96 rounded-2xl bg-white/25 animate-pulse" />
            <div className="h-10 sm:h-14 w-52 sm:w-64 rounded-2xl bg-emerald-400/40 animate-pulse" />
          </div>

          {/* Subtitle */}
          <div className="space-y-1.5 max-w-lg pt-1">
            <div className="h-3.5 w-full rounded bg-white/15 animate-pulse" />
            <div className="h-3.5 w-2/3 rounded bg-white/10 animate-pulse" />
          </div>

          {/* 3 Value bullet items */}
          <div className="flex flex-wrap items-center gap-6 pt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/40 animate-pulse" />
                <div className="h-3 w-28 rounded bg-white/20 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "Select a Mathematics Calculator" Title & Cards Section */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-12 space-y-8">
        <div className="text-center space-y-2">
          <div className="h-8 sm:h-10 w-72 sm:w-96 rounded-xl bg-white/25 mx-auto animate-pulse" />
          <div className="h-3.5 w-64 rounded bg-white/10 mx-auto animate-pulse" />
        </div>

        {/* 3 Big Calculator Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="rounded-3xl border border-white/10 bg-[#162032]/80 p-6 sm:p-8 space-y-5 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 animate-pulse" />
                <div className="h-6 w-16 rounded-full bg-white/10 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-6 w-3/4 rounded-lg bg-white/25 animate-pulse" />
                <div className="h-3.5 w-full rounded bg-white/10 animate-pulse" />
                <div className="h-3.5 w-2/3 rounded bg-white/10 animate-pulse" />
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-white/15 animate-pulse" />
                <div className="h-8 w-24 rounded-xl bg-emerald-600/30 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 3. TOPICS SKELETON LOADER
 * Matches EXACT image 3:
 * - Chalkboard hero with large green "ALL TOPICS."
 * - Description & "Explore Topics" / "Try Calculators" buttons
 * - 3 dark themed category cards:
 *    - Linear Algebra (MATH 01/10)
 *    - Calculus I (CALC I)
 *    - Calculus II (CALC II)
 */
export const TopicsSkeletonLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071317] select-none animate-in fade-in duration-300">
      {/* Hero section with "ALL TOPICS." */}
      <div className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-16 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0a1f24] to-[#071317] border-b border-white/5">
        <div className="mx-auto max-w-[1320px] max-w-2xl space-y-4">
          {/* Big Green ALL TOPICS title */}
          <div className="h-12 sm:h-16 w-64 sm:w-80 rounded-2xl bg-emerald-500/40 animate-pulse" />

          {/* Subtitle */}
          <div className="space-y-2 max-w-md">
            <div className="h-3.5 w-full rounded bg-white/20 animate-pulse" />
            <div className="h-3.5 w-3/4 rounded bg-white/15 animate-pulse" />
          </div>

          {/* Buttons: Explore Topics & Try Calculators */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="h-11 w-36 rounded-xl bg-emerald-700/60 border border-emerald-500/40 animate-pulse" />
            <div className="h-11 w-36 rounded-xl bg-white/5 border border-white/15 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 3 Subject Cards: Linear Algebra, Calculus I, Calculus II */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "MATH", badge: "01/10" },
            { tag: "CALC I", badge: "∫" },
            { tag: "CALC II", badge: "Σ" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-[#0e1c22]/90 p-6 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden"
            >
              {/* Header icons & badges */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 animate-pulse" />
                <div className="h-5 w-14 rounded-full bg-emerald-500/15 border border-emerald-500/20 animate-pulse" />
              </div>

              {/* Title & Count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-7 w-40 rounded-xl bg-white/30 animate-pulse" />
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 animate-pulse" />
                </div>
                <div className="h-3 w-28 rounded bg-emerald-400/40 animate-pulse" />
              </div>

              {/* Paragraph lines */}
              <div className="space-y-2 pt-1">
                <div className="h-3 w-full rounded bg-white/15 animate-pulse" />
                <div className="h-3 w-5/6 rounded bg-white/15 animate-pulse" />
                <div className="h-3 w-2/3 rounded bg-white/10 animate-pulse" />
              </div>

              {/* Card Bottom / Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="h-3 w-20 rounded bg-white/15 animate-pulse" />
                <div className="h-8 w-24 rounded-xl bg-emerald-600/30 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 4. LOGIN SKELETON LOADER
 * Matches EXACT image 4:
 * - Split screen layout (Left: Book + "M" emblem artwork; Right: Dark login form)
 * - Top-left: "← Home" button
 * - Right side:
 *   - "Welcome Back" title in green/white
 *   - Subtitle: "Sign in to continue your mathematics journey..."
 *   - Email Address label + input box
 *   - Password label + input box with eye icon
 *   - "Forgot password?" link
 *   - Green "→ Sign in" button
 *   - "Don't have an account? Create an account"
 */
/**
 * AUTH ARTWORK SKELETON (Left Column)
 * Matches EXACT image layout inside the red box:
 * - Top-left "← Home" floating pill button skeleton
 * - Parabola curve on coordinate axes (top-left)
 * - Upper math formulas floating (Σ i=1..n, f(x)=x², quadratic formula, Ax=b, ∫f(x)dx)
 * - Center: Large circular arch ring with 3D burgundy "M" emblem
 * - Bottom-left: Stack of 3 books ("CALCULUS", "LINEAR ALGEBRA", "ADVANCED MATHEMATICS") with 3D spines
 * - Bottom-center: Open notebook with geometry triangle diagram, matrix notation, and diagonal pen
 * - Bottom-right: 3D Pyramid geometry shape
 */
export const AuthArtworkSkeleton: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto md:min-h-screen relative bg-[#EAE3D6] overflow-hidden flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-[#D9D0C3] select-none">
      {/* Top-Left: Home Navigation Button Skeleton */}
      <div className="absolute top-5 left-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 text-[#6B6155] border border-[#D5CCBE] text-xs font-semibold backdrop-blur-md shadow-xs animate-pulse">
        <span className="text-xs">←</span>
        <span>Home</span>
      </div>

      {/* Soft Beige Center Emblem Silhouette */}
      <div className="relative flex items-center justify-center animate-pulse">
        {/* Subtle Warm Beige Arch Ring */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 rounded-full border-[10px] sm:border-[14px] border-[#D9D0C3] bg-[#E3DBD0]/40 flex items-center justify-center shadow-inner">
          <div className="w-full h-full rounded-full border border-[#D0C7B9]/40" />
        </div>

        {/* Subtle Beige "M" Silhouette */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="font-serif text-8xl sm:text-9xl md:text-[11.5rem] font-black text-[#D3C9BC] tracking-tighter select-none">
            M
          </span>
        </div>
      </div>

      {/* Bottom Subtle Beige Accent Lines */}
      <div className="absolute bottom-6 left-6 space-y-2 hidden sm:block">
        <div className="h-3 w-36 rounded-md bg-[#D9D0C3] animate-pulse" />
        <div className="h-3 w-44 rounded-md bg-[#D9D0C3] animate-pulse" />
        <div className="h-3 w-40 rounded-md bg-[#D9D0C3] animate-pulse" />
      </div>

      {/* Soft Shimmer Overlay */}
      <div className="absolute inset-0 bg-white/15 animate-pulse pointer-events-none" />
    </div>
  );
};

export const LoginSkeletonLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 w-full flex flex-col md:flex-row bg-[#201D1D] overflow-hidden font-sans select-none animate-in fade-in duration-300">
      {/* ── LEFT COLUMN: 3D Mathematics Art Visual SKELETON ── */}
      <AuthArtworkSkeleton />

      {/* ── RIGHT COLUMN: Authentication Form Skeleton ── */}
      <div className="w-full md:w-1/2 min-h-0 md:min-h-screen bg-gradient-to-b from-[#565050] via-[#3C3737] to-[#201D1D] flex items-center justify-center px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
        <div className="w-full max-w-[430px] flex flex-col justify-center">
          {/* Header Title & Subtitle */}
          <div className="text-center mb-7 space-y-2.5">
            <div className="h-10 sm:h-12 w-64 rounded-2xl bg-white/20 animate-pulse mx-auto" />
            <div className="h-3.5 w-72 rounded-lg bg-white/15 animate-pulse mx-auto" />
            {/* Small green underline bar */}
            <div className="w-9 h-[2.5px] bg-[#16a34a]/70 mx-auto mt-2 rounded-full" />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                <div className="h-3 w-24 rounded bg-[#16a34a]/40 animate-pulse" />
              </div>
              <div className="h-12 w-full rounded-xl bg-[#1A2634]/90 border border-transparent shadow-inner flex items-center px-4">
                <div className="h-3.5 w-36 rounded bg-gray-400/25 animate-pulse" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                <div className="h-3 w-16 rounded bg-[#16a34a]/40 animate-pulse" />
              </div>
              <div className="h-12 w-full rounded-xl bg-[#1A2634]/90 border border-transparent shadow-inner flex items-center justify-between px-4">
                <div className="h-2.5 w-24 rounded bg-gray-400/25 animate-pulse" />
                <div className="w-4 h-4 rounded bg-gray-400/30 animate-pulse" />
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-start pt-1">
              <div className="h-3 w-24 rounded bg-[#16a34a]/40 animate-pulse" />
            </div>

            {/* Sign In Button */}
            <div className="pt-2">
              <div className="w-full h-12 bg-[#16a34a]/80 text-white rounded-2xl shadow-lg shadow-[#16a34a]/25 flex items-center justify-center gap-2 animate-pulse">
                <div className="h-3.5 w-20 rounded bg-white/70" />
              </div>
            </div>

            {/* Switch to Register link */}
            <div className="pt-3 flex justify-center">
              <div className="h-3.5 w-52 rounded bg-white/15 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 5. REGISTER SKELETON LOADER
 * Matches EXACT image 2:
 * - Split screen layout (Left: 3D Mathematics Art Visual with "← Home" button; Right: Dark registration form)
 * - Right side:
 *   - "Create Account" title with green accent bar
 *   - Subtitle: "Join us to start your mathematics journey with MathWorkspace."
 *   - Full Name input
 *   - 2-column: ID Number | Block / Section
 *   - 2-column: Subject Code | Offer Number dropdown
 *   - Email Address input
 *   - Password input with eye icon
 *   - Green "+ Sign up" button
 *   - "Already have an account? Sign in"
 */
export const RegisterSkeletonLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 w-full flex flex-col md:flex-row bg-[#201D1D] overflow-hidden font-sans select-none animate-in fade-in duration-300">
      {/* ── LEFT COLUMN: 3D Mathematics Art Visual SKELETON ── */}
      <AuthArtworkSkeleton />

      {/* ── RIGHT COLUMN: Registration Form Skeleton ── */}
      <div className="w-full md:w-1/2 min-h-0 md:min-h-screen bg-gradient-to-b from-[#565050] via-[#3C3737] to-[#201D1D] flex items-center justify-center px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
        <div className="w-full max-w-[430px] flex flex-col justify-center">
          {/* Header Title & Subtitle */}
          <div className="text-center mb-6 space-y-2.5">
            <div className="h-10 sm:h-12 w-64 rounded-2xl bg-white/20 animate-pulse mx-auto" />
            <div className="h-3.5 w-80 rounded-lg bg-white/15 animate-pulse mx-auto" />
            {/* Small green underline bar */}
            <div className="w-9 h-[2.5px] bg-[#16a34a]/70 mx-auto mt-2 rounded-full" />
          </div>

          {/* Form Fields */}
          <div className="space-y-3.5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                <div className="h-3 w-20 rounded bg-gray-300/40 animate-pulse" />
              </div>
              <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center px-4">
                <div className="h-3.5 w-24 rounded bg-gray-400/25 animate-pulse" />
              </div>
            </div>

            {/* 2-Column: ID Number | Block / Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                  <div className="h-3 w-20 rounded bg-gray-300/40 animate-pulse" />
                </div>
                <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center px-4">
                  <div className="h-3 w-24 rounded bg-gray-400/25 animate-pulse" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                  <div className="h-3 w-24 rounded bg-gray-300/40 animate-pulse" />
                </div>
                <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center px-4">
                  <div className="h-3 w-20 rounded bg-gray-400/25 animate-pulse" />
                </div>
              </div>
            </div>

            {/* 2-Column: Subject Code | Offer Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                  <div className="h-3 w-20 rounded bg-gray-300/40 animate-pulse" />
                </div>
                <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center px-4">
                  <div className="h-3 w-20 rounded bg-gray-400/25 animate-pulse" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                  <div className="h-3 w-24 rounded bg-gray-300/40 animate-pulse" />
                </div>
                <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center justify-between px-4">
                  <div className="h-3 w-16 rounded bg-gray-400/25 animate-pulse" />
                  <div className="w-3 h-3 rounded bg-gray-400/30" />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                <div className="h-3 w-24 rounded bg-gray-300/40 animate-pulse" />
              </div>
              <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center px-4">
                <div className="h-3.5 w-32 rounded bg-gray-400/25 animate-pulse" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded bg-[#16a34a]/60 animate-pulse" />
                <div className="h-3 w-20 rounded bg-gray-300/40 animate-pulse" />
              </div>
              <div className="h-11 w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 flex items-center justify-between px-4">
                <div className="h-2.5 w-20 rounded bg-gray-400/25 animate-pulse" />
                <div className="w-4 h-4 rounded bg-gray-400/30 animate-pulse" />
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="pt-2">
              <div className="w-full h-12 bg-[#16a34a]/80 text-white rounded-2xl shadow-lg shadow-[#16a34a]/25 flex items-center justify-center gap-2 animate-pulse">
                <div className="h-3.5 w-20 rounded bg-white/70" />
              </div>
            </div>

            {/* Switch to Sign In link */}
            <div className="pt-3 flex justify-center">
              <div className="h-3.5 w-52 rounded bg-white/15 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 6. USER DASHBOARD SKELETON LOADER
 * Matches EXACT image: Student Portal at /#/dashboard
 * - Left Sidebar (MathWorkspace Student Portal logo, Dashboard active button, LEARN, PRACTICE, ACCOUNT)
 * - Top Header (notification bell + student profile avatar)
 * - Main Content 4-Card Grid:
 *    1. Hero Welcome Banner ("Good afternoon, [Student Name]!", BLOCK A, Start Practicing & Browse Topics)
 *    2. Your Progress Card (Circle progress meter, stats list, 2 mini cards)
 *    3. Available Quizzes Card (Header, MATH 102 badge, View All, table headers, quiz rows with Start buttons)
 *    4. Recent Quiz History Card (Header, MATH 102 badge, View All, table headers, attempt rows with scores and Result badges)
 */
export const UserDashboardSkeletonLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1F242D] dark:text-slate-100 font-sans flex overflow-hidden select-none animate-in fade-in duration-300">
      {/* ── LEFT SIDEBAR SKELETON ── */}
      <aside className="w-64 h-full bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-slate-800 flex-col justify-between p-4 hidden md:flex shrink-0">
        <div className="space-y-6">
          {/* Logo brand */}
          <div className="flex items-center gap-3 px-2 pt-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] shadow-sm">
              <span className="font-serif text-xl font-bold text-white leading-none">
                Σ
              </span>
            </div>
            <div className="space-y-1">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-2.5 w-20 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
            </div>
          </div>

          {/* Active Dashboard Nav Button */}
          <div className="px-1">
            <div className="h-11 w-full rounded-2xl bg-[#166534] shadow-md flex items-center gap-3 px-4">
              <div className="w-4 h-4 rounded bg-white/40" />
              <div className="h-3.5 w-24 rounded bg-white/70" />
            </div>
          </div>

          {/* LEARN Category */}
          <div className="space-y-2 px-2 pt-2">
            <div className="h-2.5 w-14 rounded bg-gray-300 dark:bg-slate-700/80 uppercase tracking-wider" />
            <div className="space-y-1 pt-1">
              <div className="h-9 w-full rounded-xl bg-gray-100 dark:bg-slate-800/60 animate-pulse flex items-center gap-3 px-3">
                <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700" />
                <div className="h-3 w-20 rounded bg-gray-300 dark:bg-slate-700" />
              </div>
              <div className="h-9 w-full rounded-xl bg-gray-100 dark:bg-slate-800/60 animate-pulse flex items-center gap-3 px-3">
                <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700" />
                <div className="h-3 w-16 rounded bg-gray-300 dark:bg-slate-700" />
              </div>
            </div>
          </div>

          {/* PRACTICE Category */}
          <div className="space-y-2 px-2 pt-2">
            <div className="h-2.5 w-16 rounded bg-gray-300 dark:bg-slate-700/80 uppercase tracking-wider" />
            <div className="space-y-1 pt-1">
              <div className="h-9 w-full rounded-xl bg-gray-100 dark:bg-slate-800/60 animate-pulse flex items-center gap-3 px-3">
                <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700" />
                <div className="h-3 w-16 rounded bg-gray-300 dark:bg-slate-700" />
              </div>
              <div className="h-9 w-full rounded-xl bg-gray-100 dark:bg-slate-800/60 animate-pulse flex items-center gap-3 px-3">
                <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700" />
                <div className="h-3 w-28 rounded bg-gray-300 dark:bg-slate-700" />
              </div>
            </div>
          </div>

          {/* ACCOUNT Category */}
          <div className="space-y-2 px-2 pt-2">
            <div className="h-2.5 w-16 rounded bg-gray-300 dark:bg-slate-700/80 uppercase tracking-wider" />
            <div className="pt-1">
              <div className="h-9 w-full rounded-xl bg-gray-100 dark:bg-slate-800/60 animate-pulse flex items-center gap-3 px-3">
                <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700" />
                <div className="h-3 w-20 rounded bg-gray-300 dark:bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN VIEWPORT & HEADER ── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8F9FA] dark:bg-[#0B0F19]">
        {/* Top Header */}
        <header className="h-16 border-b border-gray-200 dark:border-slate-800/80 px-4 sm:px-6 flex items-center justify-end gap-4 bg-white/70 dark:bg-[#111827]/60 backdrop-blur-md shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-800 animate-pulse" />
          <div className="flex items-center gap-3 pl-2">
            <div className="space-y-1 text-right hidden sm:block">
              <div className="h-3.5 w-24 rounded bg-gray-200 dark:bg-slate-700 animate-pulse ml-auto" />
              <div className="h-2.5 w-14 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse ml-auto" />
            </div>
            <div className="w-9 h-9 rounded-full bg-emerald-600/30 dark:bg-emerald-500/30 flex items-center justify-center font-bold text-emerald-600 dark:text-emerald-400">
              J
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard 4-Cards Grid */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 flex flex-col gap-6">
          {/* TOP ROW: HERO WELCOME (7 cols) & YOUR PROGRESS (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1. Left Welcome Card (7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[26px] p-6 sm:p-7 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-4 w-32 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                <div className="h-10 sm:h-12 w-3/4 rounded-2xl bg-emerald-500/35 animate-pulse" />
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/20">
                  <div className="w-3.5 h-3.5 rounded bg-emerald-400/50 animate-pulse" />
                  <div className="h-3 w-16 rounded bg-emerald-400/50 animate-pulse" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6">
                <div className="h-11 w-44 rounded-xl bg-gradient-to-b from-[#15803d] to-[#14532d] shadow-md flex items-center justify-center gap-2 px-4 animate-pulse">
                  <div className="h-3 w-24 rounded bg-white/70" />
                  <div className="w-3.5 h-3.5 rounded bg-white/70" />
                </div>
                <div className="h-11 w-36 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center gap-2 px-4 animate-pulse">
                  <div className="w-3.5 h-3.5 rounded bg-gray-400 dark:bg-slate-600" />
                  <div className="h-3 w-20 rounded bg-gray-400 dark:bg-slate-500" />
                </div>
              </div>
            </div>

            {/* 2. Right "Your Progress" Card (5 cols) */}
            <div className="lg:col-span-5 bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[24px] p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
              {/* Header + dropdown */}
              <div className="flex items-center justify-between">
                <div className="h-4 w-28 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                <div className="h-7 w-24 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 animate-pulse" />
              </div>

              {/* Progress Circle & Stats List */}
              <div className="flex flex-col sm:flex-row items-center gap-6 py-1">
                {/* Circular Meter */}
                <div className="w-28 h-28 rounded-full border-8 border-gray-100 dark:border-slate-800 border-t-emerald-500 flex flex-col items-center justify-center shrink-0 animate-pulse">
                  <div className="h-5 w-12 rounded bg-emerald-400/40" />
                  <div className="h-2 w-14 rounded bg-gray-300 dark:bg-slate-700 mt-1" />
                </div>

                {/* Stat list */}
                <div className="flex-1 w-full space-y-2.5">
                  {[
                    { label: "Quizzes Taken", color: "bg-emerald-400" },
                    { label: "Average Score", color: "bg-amber-400" },
                    { label: "Highest Score", color: "bg-emerald-500" },
                    { label: "Time Spent", color: "bg-slate-400" },
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-xs ${s.color}`} />
                        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                      </div>
                      <div className="h-3 w-10 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 Bottom Mini Stat Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200/60 dark:border-slate-700/60 space-y-1">
                  <div className="h-2.5 w-16 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
                  <div className="h-5 w-14 rounded bg-gray-200 dark:bg-slate-500 animate-pulse" />
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200/60 dark:border-slate-700/60 space-y-1">
                  <div className="h-2.5 w-16 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
                  <div className="h-5 w-14 rounded bg-gray-200 dark:bg-slate-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* LOWER ROW: AVAILABLE QUIZZES (LEFT) & RECENT QUIZ HISTORY (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* 3. Available Quizzes Card */}
            <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 sm:p-6 shadow-xs flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-32 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    MATH 102
                  </span>
                </div>
                <div className="h-7 w-20 rounded-lg bg-[#166534] animate-pulse" />
              </div>

              {/* Table Column headers */}
              <div className="grid grid-cols-6 text-[11px] font-semibold text-gray-400 dark:text-slate-500 py-2 border-b border-gray-100 dark:border-slate-700 px-1">
                <span className="col-span-3">Quiz Title</span>
                <span className="col-span-1">Topic</span>
                <span className="col-span-1 text-center">Questions</span>
                <span className="col-span-1 text-right">Action</span>
              </div>

              {/* 2 Quiz rows */}
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-slate-800/80">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-6 rounded bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center text-[9px] font-bold text-emerald-400">
                        102
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="h-3.5 w-48 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                        <div className="h-2.5 w-24 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                      </div>
                    </div>
                    <div className="w-20 text-center">
                      <div className="h-3 w-8 rounded bg-gray-200 dark:bg-slate-700 mx-auto animate-pulse" />
                    </div>
                    <div className="h-7 w-14 rounded-lg bg-emerald-700/80 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Recent Quiz History Card */}
            <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 sm:p-6 shadow-xs flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-36 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    MATH 102
                  </span>
                </div>
                <div className="h-7 w-20 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 animate-pulse" />
              </div>

              {/* Table Column headers */}
              <div className="grid grid-cols-6 text-[11px] font-semibold text-gray-400 dark:text-slate-500 py-2 border-b border-gray-100 dark:border-slate-700 px-1">
                <span className="col-span-3">Quiz Title</span>
                <span className="col-span-1 text-center">Score</span>
                <span className="col-span-1 text-center">Taken At</span>
                <span className="col-span-1 text-right">Result</span>
              </div>

              {/* History row */}
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-slate-800/80">
                  <div className="space-y-1 flex-1">
                    <div className="h-3.5 w-44 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                    <div className="h-2.5 w-28 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                  </div>
                  <div className="w-16 text-center">
                    <div className="h-3.5 w-12 rounded bg-emerald-500/30 mx-auto animate-pulse" />
                  </div>
                  <div className="w-20 text-center">
                    <div className="h-2.5 w-16 rounded bg-gray-200/70 dark:bg-slate-800 mx-auto animate-pulse" />
                  </div>
                  <div className="h-5 w-12 rounded-md bg-rose-500/20 border border-rose-500/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

/**
 * 7. ADMIN DASHBOARD SKELETON LOADER
 * Matches EXACT image layout for localhost:5173/#/admin:
 * - Left Sidebar:
 *    - Brand header (MathWorkspace Σ Admin Dashboard)
 *    - Active "Dashboard" item (green gradient)
 *    - Calculators, Topics
 *    - Section: QUIZ MANAGEMENT (Add Quiz, Quiz Results, History Quizzes)
 *    - Section: USER MANAGEMENT (View Students, Student Overview)
 *    - Section: ACADEMIC & GRADING (Grading Sheet)
 * - Header:
 *    - Notification bell
 *    - User Administrator profile (Name + "Administrator" + "U" avatar circle)
 * - Main Content:
 *    - 3 Stats Cards: Total Quizzes, Total Students, Total Attempts
 *    - Recent Quiz Takers Card: Table with NAME, QUIZ, SUBMITTED columns and rows
 */
export const AdminDashboardSkeletonLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1F242D] dark:text-slate-100 font-sans flex overflow-hidden select-none animate-in fade-in duration-300">
      {/* ── LEFT SIDEBAR SKELETON ── */}
      <aside className="w-[260px] h-full bg-white dark:bg-[#111827] border-r border-[#EAEBED] dark:border-slate-800 flex-col justify-between p-5 hidden lg:flex shrink-0">
        <div className="flex flex-col gap-6">
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 px-1 py-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 shrink-0">
              <span className="font-serif text-2xl font-bold text-white leading-none">
                Σ
              </span>
            </div>
            <div className="flex flex-col leading-tight space-y-1">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-2.5 w-20 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            {/* Active Dashboard Button */}
            <div className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10">
              <div className="w-4 h-4 rounded bg-white/40" />
              <div className="h-3.5 w-20 rounded bg-white/80" />
            </div>

            {/* Calculators */}
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-20 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>

            {/* Topics */}
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-16 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>

            {/* Section: QUIZ MANAGEMENT */}
            <div className="pt-4 pb-1">
              <div className="h-2.5 w-24 rounded bg-gray-300 dark:bg-slate-700/80 uppercase px-3.5" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-16 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-20 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-24 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>

            {/* Section: USER MANAGEMENT */}
            <div className="pt-4 pb-1">
              <div className="h-2.5 w-24 rounded bg-gray-300 dark:bg-slate-700/80 uppercase px-3.5" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-22 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-24 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>

            {/* Section: ACADEMIC & GRADING */}
            <div className="pt-4 pb-1">
              <div className="h-2.5 w-26 rounded bg-gray-300 dark:bg-slate-700/80 uppercase px-3.5" />
            </div>
            <div className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl">
              <div className="w-4 h-4 rounded bg-gray-300 dark:bg-slate-700 animate-pulse" />
              <div className="h-3 w-22 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
            </div>
          </nav>
        </div>
      </aside>

      {/* ── MAIN VIEWPORT & HEADER ── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8F9FA] dark:bg-[#0B0F19]">
        {/* Top Header */}
        <header className="h-16 border-b border-[#EAEBED] dark:border-slate-800/80 px-4 sm:px-6 flex items-center justify-end gap-3 bg-white/70 dark:bg-[#111827]/60 backdrop-blur-md shrink-0">
          {/* Bell Icon Skeleton */}
          <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center animate-pulse" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 py-1 px-2">
            <div className="hidden sm:flex flex-col text-right leading-tight space-y-1">
              <div className="h-3.5 w-12 rounded bg-gray-200 dark:bg-slate-700 animate-pulse ml-auto" />
              <div className="h-2.5 w-20 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse ml-auto" />
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#166534]/25 border border-white/20 shrink-0">
              U
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-600" />
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-12">
          {/* STATS METRIC CARDS ROW (3 cards) */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Total Quizzes */}
            <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
              <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md bg-white/40" />
              </div>
              <div className="flex flex-col min-w-0 space-y-1.5 flex-1">
                <div className="h-3 w-20 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
                <div className="h-7 w-12 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              </div>
            </div>

            {/* Card 2: Total Students */}
            <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
              <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md bg-white/40" />
              </div>
              <div className="flex flex-col min-w-0 space-y-1.5 flex-1">
                <div className="h-3 w-22 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
                <div className="h-7 w-8 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              </div>
            </div>

            {/* Card 3: Total Attempts */}
            <div className="bg-white dark:bg-[#161F30] border border-[#ECEFF3] dark:border-slate-700 rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
              <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md bg-white/40" />
              </div>
              <div className="flex flex-col min-w-0 space-y-1.5 flex-1">
                <div className="h-3 w-22 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
                <div className="h-7 w-8 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              </div>
            </div>
          </section>

          {/* RECENT QUIZ TAKERS CARD */}
          <section className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col space-y-4">
            {/* Header: Title + View All */}
            <div className="flex items-center justify-between mb-2">
              <div className="h-4 w-36 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-3.5 w-14 rounded bg-emerald-600/40 dark:bg-emerald-400/40 animate-pulse" />
            </div>

            {/* Table Header Row */}
            <div className="grid grid-cols-12 border-b border-[#EAEBED] dark:border-slate-700 pb-3 px-3 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
              <div className="col-span-3">
                <div className="h-3 w-12 rounded bg-gray-300 dark:bg-slate-600" />
              </div>
              <div className="col-span-6">
                <div className="h-3 w-12 rounded bg-gray-300 dark:bg-slate-600" />
              </div>
              <div className="col-span-3 text-right flex justify-end">
                <div className="h-3 w-16 rounded bg-gray-300 dark:bg-slate-600" />
              </div>
            </div>

            {/* Table Rows (Matching image) */}
            <div className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
              {/* Row 1: Ariane */}
              <div className="grid grid-cols-12 items-center py-3.5 px-3">
                <div className="col-span-3">
                  <div className="h-4 w-16 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                </div>
                <div className="col-span-6">
                  <div className="h-3.5 w-64 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
                <div className="col-span-3 flex justify-end">
                  <div className="h-3 w-32 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
              </div>

              {/* Row 2: Jehanne */}
              <div className="grid grid-cols-12 items-center py-3.5 px-3">
                <div className="col-span-3">
                  <div className="h-4 w-20 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                </div>
                <div className="col-span-6">
                  <div className="h-3.5 w-80 max-w-full rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
                <div className="col-span-3 flex justify-end">
                  <div className="h-3 w-32 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
              </div>

              {/* Row 3: Jeoff Montebon */}
              <div className="grid grid-cols-12 items-center py-3.5 px-3">
                <div className="col-span-3">
                  <div className="h-4 w-28 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                </div>
                <div className="col-span-6">
                  <div className="h-3.5 w-72 max-w-full rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
                <div className="col-span-3 flex justify-end">
                  <div className="h-3 w-32 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
              </div>

              {/* Row 4: Jeoff Montebon */}
              <div className="grid grid-cols-12 items-center py-3.5 px-3">
                <div className="col-span-3">
                  <div className="h-4 w-28 rounded bg-gray-200 dark:bg-slate-700 animate-pulse" />
                </div>
                <div className="col-span-6">
                  <div className="h-3.5 w-64 max-w-full rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
                <div className="col-span-3 flex justify-end">
                  <div className="h-3 w-32 rounded bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

