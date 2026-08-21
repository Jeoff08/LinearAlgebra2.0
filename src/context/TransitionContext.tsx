import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import PageTransitionOverlay from "../components/PageTransitionOverlay";

interface TransitionContextType {
  isTransitioning: boolean;
  triggerTransition: (callback?: () => void) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const midCallbackRef = useRef<(() => void) | undefined>(undefined);

  const triggerTransition = useCallback((callback?: () => void) => {
    midCallbackRef.current = callback;
    setIsTransitioning(true);
  }, []);

  const handleMidTransition = useCallback(() => {
    if (midCallbackRef.current) {
      midCallbackRef.current();
      midCallbackRef.current = undefined;
    }
  }, []);

  const handleComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
      <PageTransitionOverlay
        isTransitioning={isTransitioning}
        onMidTransition={handleMidTransition}
        onComplete={handleComplete}
      />
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
