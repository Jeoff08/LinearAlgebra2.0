// pages/CalculatorsPage.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CalculatorApp from "../calculators/CalculatorApp";

export default function CalculatorsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] text-[#111827]">
      <CalculatorApp />
    </div>
  );
}