// Calculator.tsx — The ONE shared, unified Calculator UI for all 29 Calculus 1 and Calculus 2 topics
import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator as CalcIcon,
  Play,
  Trash2,
  Copy,
  Check,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  GripHorizontal,
} from "lucide-react";
import PDFExport from "../calculators/PDFExport";

import { type CalculatorDefinition, getSolver } from "./CalculatorData";
import type { SolverResult, GraphData } from "./SolverTypes";

interface CalculatorProps {
  definition: CalculatorDefinition;
}

export default function Calculator({ definition }: CalculatorProps) {
  const [input, setInput] = useState(definition.example || "");
  const [result, setResult] = useState<SolverResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSteps, setShowSteps] = useState(true);
  const [showKeypad, setShowKeypad] = useState(false);
  const [keypadTab, setKeypadTab] = useState<
    "standard" | "calculus" | "functions"
  >("standard");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const keypadRef = useRef<HTMLDivElement>(null);

  // Update input placeholder and reset when definition changes
  useEffect(() => {
    setInput(definition.example || "");
    setResult(null);
    setShowKeypad(false);
  }, [definition.id]);

  // Automatically close keypad when clicking outside both the keypad and the input textarea
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (!showKeypad) return;
      const target = e.target as Node | null;
      if (
        target &&
        keypadRef.current &&
        !keypadRef.current.contains(target) &&
        textareaRef.current &&
        !textareaRef.current.contains(target)
      ) {
        setShowKeypad(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showKeypad]);

  // Insert symbol or template text right at the cursor position
  const insertSymbol = (textToInsert: string, cursorOffset?: number) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setInput((prev) => prev + textToInsert);
      return;
    }

    const start = textarea.selectionStart ?? input.length;
    const end = textarea.selectionEnd ?? input.length;
    const newValue = input.slice(0, start) + textToInsert + input.slice(end);
    setInput(newValue);

    setTimeout(() => {
      textarea.focus();
      const newPos =
        cursorOffset !== undefined
          ? start + cursorOffset
          : start + textToInsert.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 10);
  };

  // Backspace at current cursor position
  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart ?? input.length;
    const end = textarea.selectionEnd ?? input.length;
    if (start === end && start > 0) {
      const newValue = input.slice(0, start - 1) + input.slice(end);
      setInput(newValue);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 10);
    } else if (start !== end) {
      const newValue = input.slice(0, start) + input.slice(end);
      setInput(newValue);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 10);
    }
  };

  const handleSolve = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setResult(null);

    // Small timeout for smooth UX transition
    setTimeout(() => {
      try {
        const solver = getSolver(definition.solverType);
        if (!solver) {
          setResult({
            success: false,
            answer: "",
            steps: [],
            error: `No solver registered for solverType "${definition.solverType}".`,
          });
        } else {
          const res = solver(trimmed);
          setResult(res);
        }
      } catch (err: any) {
        setResult({
          success: false,
          answer: "",
          steps: [],
          error:
            err?.message ||
            "An unexpected mathematical error occurred during calculation.",
        });
      } finally {
        setIsLoading(false);
      }
    }, 200);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleCopy = () => {
    if (!result?.answer) return;
    navigator.clipboard.writeText(result.answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render Canvas Graph when graphData is returned by the solver
  useEffect(() => {
    if (!result?.graph || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const graph: GraphData = result.graph;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 45;

    ctx.clearRect(0, 0, width, height);

    const points = graph.points || [];
    if (points.length === 0) return;

    let minX = graph.xMin;
    let maxX = graph.xMax;
    let minY = Infinity;
    let maxY = -Infinity;

    for (const p of points) {
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    if (graph.additionalCurves) {
      for (const curve of graph.additionalCurves) {
        for (const p of curve.points) {
          if (p.y < minY) minY = p.y;
          if (p.y > maxY) maxY = p.y;
        }
      }
    }

    // Add padding to Y range
    const spanY = Math.max(maxY - minY, 1);
    minY -= spanY * 0.15;
    maxY += spanY * 0.15;
    const rangeX = Math.max(maxX - minX, 1);
    const rangeY = Math.max(maxY - minY, 1);

    const scaleX = (x: number) =>
      padding + ((x - minX) / rangeX) * (width - 2 * padding);
    const scaleY = (y: number) =>
      height - padding - ((y - minY) / rangeY) * (height - 2 * padding);

    // Draw Grid Lines
    ctx.strokeStyle = "#F3F4F6";
    ctx.lineWidth = 1;
    for (let x = Math.ceil(minX); x <= Math.floor(maxX); x += 2) {
      const sx = scaleX(x);
      ctx.beginPath();
      ctx.moveTo(sx, padding);
      ctx.lineTo(sx, height - padding);
      ctx.stroke();

      ctx.fillStyle = "#9CA3AF";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(String(x), sx, height - padding + 15);
    }

    // Draw Coordinate Axes
    ctx.strokeStyle = "#D1D5DB";
    ctx.lineWidth = 1.5;
    if (minY <= 0 && maxY >= 0) {
      const yZero = scaleY(0);
      ctx.beginPath();
      ctx.moveTo(padding, yZero);
      ctx.lineTo(width - padding, yZero);
      ctx.stroke();
    }
    if (minX <= 0 && maxX >= 0) {
      const xZero = scaleX(0);
      ctx.beginPath();
      ctx.moveTo(xZero, padding);
      ctx.lineTo(xZero, height - padding);
      ctx.stroke();
    }

    // Draw Shaded Region (if definite integral area)
    if (graph.shadedRegion) {
      const { from, to } = graph.shadedRegion;
      const subPoints = points.filter((p) => p.x >= from && p.x <= to);
      if (subPoints.length > 1) {
        ctx.fillStyle = "rgba(22, 101, 52, 0.15)";
        ctx.beginPath();
        const yBase = scaleY(0);
        ctx.moveTo(scaleX(subPoints[0].x), yBase);
        for (const p of subPoints) {
          ctx.lineTo(scaleX(p.x), scaleY(p.y));
        }
        ctx.lineTo(scaleX(subPoints[subPoints.length - 1].x), yBase);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Draw Primary Curve
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let started = false;
    for (const p of points) {
      const sx = scaleX(p.x);
      const sy = scaleY(p.y);
      if (!Number.isFinite(sy) || sy < 0 || sy > height) {
        started = false;
        continue;
      }
      if (!started) {
        ctx.moveTo(sx, sy);
        started = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    ctx.stroke();

    // Draw Additional Curves (derivatives, asymptotes, g(x))
    if (graph.additionalCurves) {
      for (const curve of graph.additionalCurves) {
        ctx.strokeStyle = curve.color || "#2563EB";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        let cStarted = false;
        for (const p of curve.points) {
          const sx = scaleX(p.x);
          const sy = scaleY(p.y);
          if (!Number.isFinite(sy) || sy < 0 || sy > height) {
            cStarted = false;
            continue;
          }
          if (!cStarted) {
            ctx.moveTo(sx, sy);
            cStarted = true;
          } else {
            ctx.lineTo(sx, sy);
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw Highlight Points (roots, extrema, inflection points)
    if (graph.highlights) {
      for (const h of graph.highlights) {
        const sx = scaleX(h.x);
        const sy = scaleY(h.y);
        if (Number.isFinite(sx) && Number.isFinite(sy)) {
          ctx.fillStyle = "#166534";
          ctx.beginPath();
          ctx.arc(sx, sy, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#111827";
          ctx.font = "bold 11px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(h.label, sx, sy - 10);
        }
      }
    }
  }, [result]);

  const IconComponent = definition.icon || CalcIcon;

  return (
    <div className="space-y-6">
      {/* ── 1. CALCULATOR HEADER CARD ── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#166534] text-white flex items-center justify-center shadow-md shadow-[#166534]/20 shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#166534]/10 text-[#166534]">
                  {definition.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {definition.categoryLabel}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-0.5">
                {definition.name}
              </h2>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
          {definition.description}
        </p>

        {/* Quick Example Suggestion Chip */}
        {definition.example && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#166534]" />
              <span>Example Problem:</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setInput(definition.example);
                if (textareaRef.current) textareaRef.current.focus();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-mono font-medium text-gray-800 transition cursor-pointer"
            >
              <span>{definition.example}</span>
              <span className="text-[10px] text-[#166534] font-bold">Use</span>
            </button>
          </div>
        )}
      </div>

      {/* ── 2. INPUT & ACTIONS FORM WITH POP-OUT MATH KEYPAD ── */}
      <div className="relative">
        <form
          onSubmit={handleSolve}
          className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between">
            <label
              htmlFor="math-input"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700"
            >
              Mathematical Expression / Input
            </label>
            <button
              type="button"
              onClick={() => {
                setShowKeypad((prev) => !prev);
                if (!showKeypad && textareaRef.current)
                  textareaRef.current.focus();
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                showKeypad
                  ? "bg-[#166534] text-white shadow-xs"
                  : "bg-[#F0FDF4] text-[#166534] hover:bg-[#166534]/15 border border-[#166534]/20"
              }`}
            >
              <CalcIcon className="w-3.5 h-3.5" />
              <span>
                {showKeypad ? "Hide Math Keypad" : "Open Math Keypad"}
              </span>
            </button>
          </div>

          <div className="relative rounded-xl border border-gray-300 bg-[#0C1017] p-1 shadow-inner focus-within:border-[#166534] transition">
            <textarea
              id="math-input"
              ref={textareaRef}
              value={input}
              onFocus={() => setShowKeypad(true)}
              onClick={() => setShowKeypad(true)}
              onChange={(e) => setInput(e.target.value)}
              placeholder={definition.placeholder}
              rows={3}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 font-mono outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-400">
            <span>
              Click input or toggle button above to pop out math symbols
            </span>
            <span>Press Enter or click Solve</span>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            {input && (
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-700 transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4 text-gray-500" />
                <span>Clear</span>
              </button>
            )}

            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] disabled:opacity-40 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#166534]/20 transition-all cursor-pointer active:scale-95"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Computing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Calculate &amp; Solve</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* ── RESPONSIVE MATH KEYPAD (Docked Below on Mobile, Draggable Floating on Desktop) ── */}
        <AnimatePresence>
          {showKeypad && (
            <motion.div
              ref={keypadRef}
              drag={typeof window !== "undefined" && window.innerWidth >= 640}
              dragMomentum={false}
              dragElastic={0.05}
              whileDrag={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="relative mt-3 sm:mt-0 sm:absolute sm:right-0 sm:-top-36 md:-top-44 z-50 w-full sm:w-[350px] md:w-[370px] rounded-2xl border-2 border-[#166534]/25 bg-white/98 backdrop-blur-xl p-4 sm:p-5 shadow-2xl shadow-[#166534]/20 select-none"
            >
              {/* Keypad Draggable Floating Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-gray-100 cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#166534] text-white flex items-center justify-center shadow-xs">
                    <CalcIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">
                        Math Keypad
                      </h3>
                      <span
                        className="inline-flex items-center text-[#166534]/60"
                        title="Click & hold to drag"
                      >
                        <GripHorizontal className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400">
                      Click &amp; hold to drag anywhere
                    </p>
                  </div>
                </div>

                {/* Tabs & Close Button */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5 bg-gray-100 p-0.5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setKeypadTab("standard")}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition ${
                        keypadTab === "standard"
                          ? "bg-white text-[#166534] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Basic
                    </button>
                    <button
                      type="button"
                      onClick={() => setKeypadTab("calculus")}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition ${
                        keypadTab === "calculus"
                          ? "bg-white text-[#166534] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Calculus
                    </button>
                    <button
                      type="button"
                      onClick={() => setKeypadTab("functions")}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition ${
                        keypadTab === "functions"
                          ? "bg-white text-[#166534] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Trig/Fn
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowKeypad(false)}
                    className="p-1 text-gray-400 hover:text-[#166534] hover:bg-[#F0FDF4] rounded-md transition"
                    title="Close Floating Keypad"
                  >
                    <span className="text-sm font-black leading-none">
                      &times;
                    </span>
                  </button>
                </div>
              </div>

              {/* Memory / Quick Variable Bar */}
              <div className="grid grid-cols-6 gap-1 pt-2.5 pb-2 text-[10px] font-bold text-gray-500 text-center">
                <button
                  type="button"
                  onClick={() => insertSymbol("x")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  x
                </button>
                <button
                  type="button"
                  onClick={() => insertSymbol("y")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  y
                </button>
                <button
                  type="button"
                  onClick={() => insertSymbol("t")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  t
                </button>
                <button
                  type="button"
                  onClick={() => insertSymbol("n")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  n
                </button>
                <button
                  type="button"
                  onClick={() => insertSymbol("pi")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  π
                </button>
                <button
                  type="button"
                  onClick={() => insertSymbol("e")}
                  className="py-1 rounded-md hover:bg-[#166534]/10 hover:text-[#166534] transition font-mono"
                >
                  e
                </button>
              </div>

              {/* Keypad Grid Body */}
              <div>
                {/* ── TAB 1: STANDARD (LAYOUT FROM USER IMAGE) ── */}
                {keypadTab === "standard" && (
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {/* Row 1: %, CE, C, ⌫ */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("%")}
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      %
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const parts = input.trim().split(/[\s+\-*/^,]+/);
                        if (parts.length > 0) {
                          const last = parts[parts.length - 1];
                          setInput(input.slice(0, input.lastIndexOf(last)));
                        }
                      }}
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      CE
                    </button>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      C
                    </button>
                    <button
                      type="button"
                      onClick={handleBackspace}
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                      title="Backspace"
                    >
                      ⌫
                    </button>

                    {/* Row 2: 1/x, x², ²√x, ÷ */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("1/(", 3)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      ¹/x
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("^2")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      x²
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("sqrt()", 5)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      ²√x
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(" / ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-sm sm:text-base transition active:scale-95 flex items-center justify-center cursor-pointer shadow-2xs"
                    >
                      ÷
                    </button>

                    {/* Row 3: 7, 8, 9, × */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("7")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      7
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("8")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      8
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("9")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      9
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(" * ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ×
                    </button>

                    {/* Row 4: 4, 5, 6, − */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("4")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("5")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("6")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      6
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(" - ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      −
                    </button>

                    {/* Row 5: 1, 2, 3, + */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("1")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("2")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("3")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(" + ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      +
                    </button>

                    {/* Row 6: +/-, 0, ., = (Big Maroon Solve Button) */}
                    <button
                      type="button"
                      onClick={() => insertSymbol("-")}
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      +/−
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("0")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(".")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm sm:text-base transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      .
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSolve()}
                      className="p-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-black text-lg sm:text-xl transition active:scale-95 cursor-pointer shadow-md shadow-[#166534]/30 flex items-center justify-center"
                      title="Calculate & Solve"
                    >
                      =
                    </button>
                  </div>
                )}

                {/* ── TAB 2: CALCULUS SYMBOLS ── */}
                {keypadTab === "calculus" && (
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => insertSymbol("^3")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      x³
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("^", 1)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      xⁿ
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("d/dx ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      d/dx
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("∫ ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ∫ dx
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("∫[0 to 1] ", 2)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ∫ₐᵇ
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("sum ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ∑ (Sum)
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("lim ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      lim
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("inf")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ∞
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("(")}
                      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-bold text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      (
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(")")}
                      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-bold text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      )
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("[0, 1]", 1)}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      [a, b]
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol(", ")}
                      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-bold text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ,
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("d/dt ")}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      d/dt
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("u")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      u
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("v")}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      v
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSolve()}
                      className="p-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Solve</span>
                    </button>
                  </div>
                )}

                {/* ── TAB 3: TRANSCENDENTAL & TRIG FUNCTIONS ── */}
                {keypadTab === "functions" && (
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => insertSymbol("sin(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      sin
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("cos(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      cos
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("tan(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      tan
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("sec(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      sec
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("csc(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      csc
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("cot(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#166534]/10 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      cot
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("arcsin(x)", 7)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      arcsin
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("arctan(x)", 7)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      arctan
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("ln(x)", 3)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      ln
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("log(x)", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      log
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("e^x", 3)}
                      className="p-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#166534]/15 border border-[#166534]/20 text-[#166534] font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      eˣ
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSymbol("abs()", 4)}
                      className="p-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      |x|
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── 3. RESULTS & STEP-BY-STEP DISPLAY ── */}

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key="calc-result"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Error Message if calculation failed */}
            {!result.success && result.error && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 flex items-start gap-3 text-green-900">
                <AlertCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-green-900">
                    Input Validation Error
                  </h4>
                  <p className="text-xs text-green-700 leading-relaxed">
                    {result.error}
                  </p>
                </div>
              </div>
            )}

            {/* Success Hero Answer Card */}
            {result.success && result.answer && (
              <div className="rounded-2xl border border-[#166534]/30 bg-gradient-to-br from-[#F0FDF4] to-white p-6 sm:p-7 shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#166534]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Final Answer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-2xs transition cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-gray-500" />
                          <span>Copy Answer</span>
                        </>
                      )}
                    </button>

                    <PDFExport
                      title={`${definition.name} - Solution`}
                      data={result.answer}
                      graphCanvasRef={canvasRef}
                      steps={result.steps.map((s) => ({
                        step:
                          s.title + (s.expression ? `:\n${s.expression}` : ""),
                        explanation: s.explanation,
                      }))}
                      inputs={`Input Expression / Problem:\n${input}`}
                      explanation={result.explanation || result.summary || ""}
                      fileName={`${definition.id}_calculus_solution`}
                      customSections={
                        result.verification
                          ? [
                              {
                                title: "VERIFICATION",
                                content: result.verification,
                              },
                            ]
                          : undefined
                      }
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-lg sm:text-xl font-bold text-[#111827] break-words">
                  {result.answer}
                </div>

                {result.summary && (
                  <p className="text-xs text-gray-600 font-medium">
                    {result.summary}
                  </p>
                )}
              </div>
            )}

            {/* Step-by-Step Solution Breakdown */}
            {result.success && result.steps && result.steps.length > 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#166534]" />
                    <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                      Step-by-Step Mathematical Solution
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSteps(!showSteps)}
                    className="text-xs text-gray-500 hover:text-gray-900 font-semibold inline-flex items-center gap-1 transition"
                  >
                    <span>{showSteps ? "Collapse Steps" : "Expand Steps"}</span>
                    {showSteps ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {showSteps && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      {result.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                              {step.title}
                            </h4>
                          </div>

                          {step.expression && (
                            <pre className="p-3 rounded-lg bg-[#0C1017] text-white font-mono text-xs sm:text-sm whitespace-pre-wrap break-words border border-gray-800">
                              {step.expression}
                            </pre>
                          )}

                          {step.explanation && (
                            <p className="text-xs text-gray-600 leading-relaxed pl-1">
                              {step.explanation}
                            </p>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Interactive Graph (when available) */}
            {result.success && result.graph && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#166534]" />
                    <h3 className="text-base font-bold text-gray-900">
                      Visual Function Graph &amp; Behavior
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">
                    {result.graph.equation}
                  </span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-2 flex items-center justify-center overflow-x-auto">
                  <canvas
                    ref={canvasRef}
                    width={680}
                    height={320}
                    className="w-full max-w-2xl h-auto"
                  />
                </div>
              </div>
            )}

            {/* Verification Section */}
            {result.success && result.verification && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    Mathematical Verification
                  </h4>
                </div>
                <pre className="m-0 text-xs font-mono text-emerald-800 whitespace-pre-wrap leading-relaxed">
                  {result.verification}
                </pre>
              </div>
            )}

            {/* Educational Context / Explanation */}
            {result.success && result.explanation && (
              <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-5 space-y-1.5 text-gray-700">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                  <Info className="w-3.5 h-3.5 text-[#166534]" />
                  <span>Mathematical Concept</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {result.explanation}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
