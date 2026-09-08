import type React from "react";
import anime from "animejs";
import gsap from "gsap";

/**
 * Triggers a premium Anime.js + GSAP micro-interaction animation
 * when clicking navigation buttons (Home, Calculators, Topics).
 */
export function playNavButtonAnimation(
  e: React.MouseEvent<HTMLElement>,
  options?: {
    color?: string;
    iconSpin?: boolean;
    scaleDown?: number;
  }
) {
  const target = e.currentTarget;
  if (!target) return;

  const scaleDown = options?.scaleDown || 0.88;

  // 1. Anime.js: spring bounce and elastic rebound on the button itself
  anime.remove(target);
  anime({
    targets: target,
    scale: [
      { value: scaleDown, duration: 110, easing: "easeOutQuad" },
      { value: 1.12, duration: 200, easing: "easeOutBack" },
      { value: 1, duration: 240, easing: "easeOutElastic(1, 0.45)" },
    ],
  });

  // 2. GSAP: Playful dynamic rotation & pop on the SVG icon
  const icon = target.querySelector("svg");
  if (icon && options?.iconSpin !== false) {
    gsap.killTweensOf(icon);
    gsap
      .timeline()
      .to(icon, {
        rotation: -16,
        scale: 1.35,
        duration: 0.14,
        ease: "power2.out",
      })
      .to(icon, {
        rotation: 12,
        scale: 1.1,
        duration: 0.14,
        ease: "power2.inOut",
      })
      .to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.28,
        ease: "elastic.out(1.2, 0.4)",
      });
  }

  // Keep clean button spring and icon pop; no white ripple burst
}
