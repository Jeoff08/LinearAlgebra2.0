import { useEffect } from "react";

/**
 * ThemeTransitionOverlay
 *
 * Listens to the "before-theme-toggle" custom event dispatched by ThemeContext,
 * then imperatively mounts a full-screen curtain div that:
 *   - Sweeps TOP → BOTTOM when switching to dark mode
 *   - Sweeps BOTTOM → TOP when switching to light mode
 *
 * The actual theme class swap happens at ~420ms (when the curtain fully covers
 * the screen), so the UI change is invisible behind the curtain.
 */
export default function ThemeTransitionOverlay() {
  useEffect(() => {
    const handleToggle = (e: Event) => {
      const { newTheme } = (e as CustomEvent).detail as { newTheme: string };
      const direction = newTheme === "dark" ? "to-dark" : "to-light";

      // Create and mount the curtain
      const curtain = document.createElement("div");
      curtain.className = `theme-curtain ${direction}`;
      document.body.appendChild(curtain);

      // Remove after animation completes (860ms total)
      const timer = setTimeout(() => {
        if (curtain.parentNode) curtain.parentNode.removeChild(curtain);
      }, 870);

      // Safety cleanup
      return () => {
        clearTimeout(timer);
        if (curtain.parentNode) curtain.parentNode.removeChild(curtain);
      };
    };

    window.addEventListener("before-theme-toggle", handleToggle);
    return () => window.removeEventListener("before-theme-toggle", handleToggle);
  }, []);

  return null;
}

