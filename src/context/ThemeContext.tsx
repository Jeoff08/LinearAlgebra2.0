import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent | MouseEvent) => void;
  setTheme: (theme: Theme, event?: React.MouseEvent | MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("app_theme") as Theme;
    return saved === "dark" || saved === "light" ? saved : "light";
  });

  const isTransitioningRef = useRef(false);

  // Synchronize document attributes on initial mount or when theme changes from outside
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("app_theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("app_theme", "light");
    }
  }, [theme]);

  const switchTheme = (newTheme: Theme, event?: React.MouseEvent | MouseEvent) => {
    if (newTheme === theme) return;
    if (isTransitioningRef.current) return;

    const root = document.documentElement;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check if browser supports View Transitions API
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    // Instant fallback if View Transitions API is not supported or reduced motion requested
    if (!docWithVT.startViewTransition || isReducedMotion) {
      if (newTheme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("app_theme", "dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        root.setAttribute("data-theme", "light");
        localStorage.setItem("app_theme", "light");
      }
      setThemeState(newTheme);
      return;
    }

    isTransitioningRef.current = true;

    // Accurately compute coordinates of the origin point (click position or button center)
    let x = window.innerWidth - 60;
    let y = 40;

    const targetEl = event?.currentTarget as HTMLElement | undefined;
    if (targetEl && typeof targetEl.getBoundingClientRect === "function") {
      const rect = targetEl.getBoundingClientRect();
      x = Math.round(rect.left + rect.width / 2);
      y = Math.round(rect.top + rect.height / 2);
    } else if (
      event &&
      typeof event.clientX === "number" &&
      typeof event.clientY === "number" &&
      (event.clientX !== 0 || event.clientY !== 0)
    ) {
      x = Math.round(event.clientX);
      y = Math.round(event.clientY);
    }

    // Distance to the farthest viewport corner from (x, y)
    const endRadius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
    );

    // Provide coordinates to CSS fallback variables
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-r", `${endRadius}px`);

    // Temporarily freeze all element-level CSS transitions to prevent stutter & frame-drops
    root.classList.add("theme-transitioning");
    root.classList.add(`transitioning-to-${newTheme}`);

    const applyTheme = () => {
      // 1. Immediately update root classes so the new snapshot has the exact target styles
      if (newTheme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("app_theme", "dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        root.setAttribute("data-theme", "light");
        localStorage.setItem("app_theme", "light");
      }

      // 2. Synchronously re-render React components before the snapshot is captured
      flushSync(() => {
        setThemeState(newTheme);
      });
    };

    try {
      const transition = docWithVT.startViewTransition(applyTheme);

      transition.ready
        .then(() => {
          try {
            document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
              },
              {
                duration: 480,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                pseudoElement: "::view-transition-new(root)",
              }
            );
          } catch {
            // CSS fallback `@keyframes themeCircularReveal` will execute if animate() throws
          }
        })
        .catch(() => {});

      transition.finished.finally(() => {
        root.classList.remove("theme-transitioning");
        root.classList.remove(`transitioning-to-${newTheme}`);
        root.style.removeProperty("--theme-x");
        root.style.removeProperty("--theme-y");
        root.style.removeProperty("--theme-r");
        isTransitioningRef.current = false;
      });
    } catch {
      applyTheme();
      root.classList.remove("theme-transitioning");
      root.classList.remove(`transitioning-to-${newTheme}`);
      root.style.removeProperty("--theme-x");
      root.style.removeProperty("--theme-y");
      root.style.removeProperty("--theme-r");
      isTransitioningRef.current = false;
    }
  };

  const toggleTheme = (event?: React.MouseEvent | MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    switchTheme(newTheme, event);
  };

  const setTheme = (newTheme: Theme, event?: React.MouseEvent | MouseEvent) => {
    switchTheme(newTheme, event);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

