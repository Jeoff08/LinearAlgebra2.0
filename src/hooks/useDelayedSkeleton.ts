import { useState, useEffect } from "react";

/**
 * Custom hook to display skeleton loaders ONLY when the network is lagging.
 *
 * - Fast connection / instant load (< lagThreshold): Returns `false` (none).
 *   The actual page renders immediately with smooth CSS entrance animation.
 * - Slow / lagging network (load persists beyond lagThreshold, or browser reports 2G/3G/Save-Data):
 *   Returns `true` to display the matching skeleton loader until loading finishes.
 */
export function useDelayedSkeleton(isLoading: boolean, lagThreshold: number = 200): boolean {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowSkeleton(false);
      return;
    }

    // Check if browser detects slow network
    const navConn = (navigator as any)?.connection;
    const isSlowNetwork =
      navConn &&
      (navConn.saveData ||
        navConn.effectiveType === "slow-2g" ||
        navConn.effectiveType === "2g" ||
        navConn.effectiveType === "3g");

    if (isSlowNetwork) {
      setShowSkeleton(true);
      return;
    }

    // Only show skeleton if loading exceeds lag threshold (network lag)
    const timer = setTimeout(() => {
      setShowSkeleton(true);
    }, lagThreshold);

    return () => clearTimeout(timer);
  }, [isLoading, lagThreshold]);

  return showSkeleton;
}

