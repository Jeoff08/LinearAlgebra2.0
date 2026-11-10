import React from "react";

export const WebsiteSkeletonLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] dark:bg-[#0B132B] flex flex-col overflow-hidden select-none animate-in fade-in duration-300">
      {/* Top Navbar Skeleton */}
      <header className="h-16 sm:h-[4.5rem] border-b border-gray-200/80 dark:border-slate-800/80 px-4 sm:px-8 flex items-center justify-between bg-white/70 dark:bg-[#0B132B]/80 backdrop-blur-md">
        {/* Brand Logo Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 dark:bg-emerald-500/20 flex items-center justify-center animate-pulse">
            <span className="font-serif text-xl font-bold text-emerald-600 dark:text-emerald-400">
              Σ
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-4 w-28 rounded-md bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
            <div className="h-2 w-16 rounded-md bg-gray-200/70 dark:bg-slate-800 animate-pulse" />
          </div>
        </div>

        {/* Center Nav items */}
        <div className="hidden md:flex items-center gap-6">
          <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
          <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
          <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
          <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-9 w-24 rounded-xl bg-emerald-600/20 dark:bg-emerald-500/20 animate-pulse hidden sm:block" />
        </div>
      </header>

      {/* Main Body Skeleton */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto p-4 sm:p-8 flex flex-col gap-6 overflow-hidden">
        {/* Hero / Banner Skeleton */}
        <div className="w-full rounded-3xl p-6 sm:p-10 border border-gray-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#111C3D]/60 relative overflow-hidden backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <div className="h-3 w-28 rounded bg-emerald-600/20 dark:bg-emerald-400/20 animate-pulse" />
            </div>
            <div className="h-8 sm:h-12 w-3/4 rounded-xl bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
            <div className="h-4 w-1/2 rounded-lg bg-gray-200/80 dark:bg-slate-800 animate-pulse" />
            <div className="flex gap-3 pt-2">
              <div className="h-10 w-32 rounded-xl bg-emerald-600/30 dark:bg-emerald-500/25 animate-pulse" />
              <div className="h-10 w-28 rounded-xl bg-gray-200 dark:bg-slate-800 animate-pulse" />
            </div>
          </div>
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-2xl bg-gray-200/60 dark:bg-slate-800/40 animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-dashed border-gray-300 dark:border-slate-700 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
        </div>

        {/* Grid Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="rounded-2xl border border-gray-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#111C3D]/40 p-5 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-slate-800 animate-pulse" />
                <div className="h-4 w-14 rounded-full bg-gray-200/70 dark:bg-slate-800/60 animate-pulse" />
              </div>
              <div className="h-5 w-2/3 rounded-lg bg-gray-200 dark:bg-slate-700/60 animate-pulse" />
              <div className="space-y-1.5 pt-1">
                <div className="h-3 w-full rounded bg-gray-200/70 dark:bg-slate-800/80 animate-pulse" />
                <div className="h-3 w-4/5 rounded bg-gray-200/70 dark:bg-slate-800/80 animate-pulse" />
              </div>
              <div className="pt-2 flex justify-between items-center">
                <div className="h-3 w-20 rounded bg-gray-200/60 dark:bg-slate-800/60 animate-pulse" />
                <div className="h-4 w-12 rounded bg-emerald-500/20 dark:bg-emerald-500/20 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Shimmer Bar */}
        <div className="mt-auto py-2 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-slate-500">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
            Loading Workspace…
          </span>
        </div>
      </main>
    </div>
  );
};

