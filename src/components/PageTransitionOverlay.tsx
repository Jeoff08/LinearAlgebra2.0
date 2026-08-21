import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
  onMidTransition?: () => void;
  onComplete?: () => void;
}

export default function PageTransitionOverlay({
  isTransitioning,
  onMidTransition,
  onComplete,
}: PageTransitionOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!isTransitioning || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const container = containerRef.current;
    const columns = columnRefs.current.filter(Boolean);
    const line = lineRef.current;
    const logo = logoRef.current;

    if (!container || columns.length === 0) return;

    // Reset initial state
    gsap.set(container, { display: "flex", opacity: 1, pointerEvents: "all" });
    gsap.set(columns, { yPercent: 100 });
    if (line) gsap.set(line, { scaleX: 0, opacity: 0 });
    if (logo) gsap.set(logo, { scale: 0.5, opacity: 0, rotation: -15 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { display: "none", pointerEvents: "none" });
        isAnimatingRef.current = false;
        if (onComplete) onComplete();
      },
    });

    // 1. Staggered panels sweep up into view (Cyan & Green accents)
    tl.to(columns, {
      yPercent: 0,
      duration: 0.35,
      stagger: {
        each: 0.04,
        from: "start",
      },
      ease: "power4.inOut",
    })
      // 2. Flash glowing accent line & central icon
      .to(
        line,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.15"
      )
      .to(
        logo,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.22,
          ease: "back.out(2)",
        },
        "-=0.2"
      )
      // 3. Callback at peak of transition when screen is covered
      .call(() => {
        if (onMidTransition) onMidTransition();
      })
      // 4. Fade line & icon quickly
      .to(
        [line, logo],
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.15,
          ease: "power2.in",
        },
        "+=0.05"
      )
      // 5. Staggered panels sweep out upward
      .to(
        columns,
        {
          yPercent: -100,
          duration: 0.35,
          stagger: {
            each: 0.04,
            from: "start",
          },
          ease: "power4.inOut",
        },
        "-=0.05"
      );

    return () => {
      tl.kill();
    };
  }, [isTransitioning, onMidTransition, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none hidden flex-row overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 5 Vertical Staggered Transition Columns with Blue & Green Gradient Borders */}
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          ref={(el) => {
            columnRefs.current[index] = el;
          }}
          className="relative flex-1 h-full bg-[#060B14] border-r border-[#00D2FF]/20 last:border-r-0 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          style={{
            background:
              index % 2 === 0
                ? "linear-gradient(180deg, #07101E 0%, #050912 100%)"
                : "linear-gradient(180deg, #091426 0%, #060B16 100%)",
          }}
        >
          {/* Top colored accent indicator on each panel */}
          <div
            className={`absolute top-0 inset-x-0 h-1.5 ${
              index % 2 === 0 ? "bg-[#00D2FF]" : "bg-[#B6FF2E]"
            } shadow-[0_0_12px_currentColor]`}
          />
          {/* Bottom colored accent indicator on each panel */}
          <div
            className={`absolute bottom-0 inset-x-0 h-1.5 ${
              index % 2 === 0 ? "bg-[#B6FF2E]" : "bg-[#00D2FF]"
            } shadow-[0_0_12px_currentColor]`}
          />
        </div>
      ))}

      {/* Center glowing mathematical transition line */}
      <div
        ref={lineRef}
        className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00D2FF] to-[#B6FF2E] shadow-[0_0_20px_#00D2FF] pointer-events-none origin-center"
      />

      {/* Central floating transition emblem */}
      <div
        ref={logoRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center gap-1 z-10"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#040810] border border-[#00D2FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,210,255,0.4)]">
          <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#00D2FF] via-white to-[#B6FF2E]">
            λ
          </span>
        </div>
        <span className="font-mono text-[9px] tracking-[0.3em] font-bold text-[#00D2FF] uppercase">
          TRANSITION
        </span>
      </div>
    </div>
  );
}
