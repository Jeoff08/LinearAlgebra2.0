import React, { useState, useRef, useEffect } from "react";
import { AlgebraSolver } from "../Solver/AlgebraSolver";
import {
  Calculator,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Zap,
  TrendingUp,
  Activity,
  Hash,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────
//  SOLVER MODE TYPE  (8 core problem types)
// ─────────────────────────────────────────────────────────────────
export type SolverMode =
  | "simplify"
  | "linear"
  | "quadratic"
  | "inequality"
  | "quadratic-inequality"
  | "abs-value"
  | "abs-equation"
  | "abs-inequality";

export const MODE_INFO: Record<
  SolverMode,
  {
    name: string;
    tag: string;
    description: string;
    placeholder: string;
    examples: string[];
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  simplify: {
    name: "Algebraic Simplifier",
    tag: "Algebra",
    description:
      "Simplify polynomials, combine like terms, and evaluate arithmetic expressions.",
    placeholder: "e.g. 2x + 3x - 5 or (x + 2)(x - 3)",
    examples: ["2x + 3x", "(x + 2)(x - 3)", "3x^2 + 2x - 5", "4(2x - 3) + 5x"],
    icon: Hash,
  },
  linear: {
    name: "Linear Equation",
    tag: "Equations",
    description:
      "Solve single-variable linear equations with full step-by-step isolation.",
    placeholder: "e.g. 2x + 5 = 13 or 3(x - 2) = 12",
    examples: [
      "2x + 5 = 13",
      "3(x - 2) = 12",
      "5x - 8 = 2x + 7",
      "4x + 10 = 2(x + 1)",
    ],
    icon: Calculator,
  },
  quadratic: {
    name: "Quadratic Equation",
    tag: "Quadratic",
    description:
      "Solve ax² + bx + c = 0 via quadratic formula & factoring.",
    placeholder: "e.g. x^2 - 5x + 6 = 0 or 2x^2 + 3x - 2 = 0",
    examples: [
      "x^2 - 5x + 6 = 0",
      "2x^2 + 3x - 2 = 0",
      "x^2 - 16 = 0",
      "3x^2 - 6x = 0",
    ],
    icon: Sparkles,
  },
  inequality: {
    name: "Linear Inequality",
    tag: "Inequalities",
    description:
      "Solve linear inequalities with boundary points and interval notation.",
    placeholder: "e.g. 2x + 3 > 7 or 4x - 5 <= 11",
    examples: ["2x + 3 > 7", "4x - 5 <= 11", "-2x + 6 >= 14", "3x + 1 < 10"],
    icon: TrendingUp,
  },
  "quadratic-inequality": {
    name: "Quadratic Inequality",
    tag: "Inequalities",
    description:
      "Solve quadratic inequalities with sign analysis and interval notation.",
    placeholder: "e.g. x^2 - 4 <= 0 or x^2 - x - 6 > 0",
    examples: [
      "x^2 - 4 <= 0",
      "x^2 - x - 6 > 0",
      "2x^2 + 3x - 2 < 0",
      "x^2 >= 9",
    ],
    icon: Activity,
  },
  "abs-value": {
    name: "Absolute Value Eval",
    tag: "Absolute Value",
    description:
      "Compute the absolute value of a numerical expression (distance from zero).",
    placeholder: "e.g. |-7| or |3 - 8|",
    examples: ["|-7|", "|3 - 8|", "|(-4) * 3|", "|15 - 22|"],
    icon: Layers,
  },
  "abs-equation": {
    name: "Abs Value Equation",
    tag: "Equations",
    description:
      "Solve |ax + b| = c with positive and negative case branching.",
    placeholder: "e.g. |x - 3| = 5 or |2x + 1| = 7",
    examples: ["|x - 3| = 5", "|2x + 1| = 7", "|3x - 4| = 11", "|x + 6| = 0"],
    icon: Zap,
  },
  "abs-inequality": {
    name: "Abs Value Inequality",
    tag: "Inequalities",
    description:
      "Solve |ax + b| < c or |ax + b| ≥ c with interval union & intersection results.",
    placeholder: "e.g. |x - 3| < 5 or |2x + 1| >= 7",
    examples: ["|x - 3| < 5", "|2x + 1| >= 7", "|x + 2| <= 4", "|3x - 1| > 8"],
    icon: TrendingUp,
  },
};

// ─────────────────────────────────────────────────────────────────
//  TAB GROUPS  (4 groups covering all 8 modes)
// ─────────────────────────────────────────────────────────────────
const TAB_GROUPS: { label: string; color: string; modes: SolverMode[] }[] = [
  { label: "Algebra", color: "text-gray-700", modes: ["simplify"] },
  {
    label: "Equations",
    color: "text-teal-700",
    modes: ["linear", "quadratic", "abs-equation"],
  },
  {
    label: "Inequalities",
    color: "text-amber-700",
    modes: ["inequality", "quadratic-inequality", "abs-inequality"],
  },
  { label: "Absolute Value", color: "text-violet-700", modes: ["abs-value"] },
];

// ─────────────────────────────────────────────────────────────────
//  NORMALIZE INPUT
// ─────────────────────────────────────────────────────────────────
function normalizeInput(raw: string): string {
  return raw
    .replace(/\u00d7/g, "*")
    .replace(/\u00f7/g, "/")
    .replace(/\u2212/g, "-")
    .replace(/\u00b9/g, "")
    .replace(/\u00b2/g, "^2")
    .replace(/\u00b3/g, "^3")
    .replace(/\u2074/g, "^4")
    .replace(/\u2075/g, "^5")
    .replace(/\u2265/g, ">=")
    .replace(/\u2264/g, "<=")
    .replace(/\u2260/g, "!=")
    .replace(/\u2022/g, "*")
    .replace(/\[/g, "(")
    .replace(/\]/g, ")")
    .replace(/\s+/g, " ")
    .trim();
}

// ─────────────────────────────────────────────────────────────────
//  AUTO-DETECT MODE FROM INPUT
// ─────────────────────────────────────────────────────────────────
function autoDetectMode(normalized: string): SolverMode {
  const hasAbsValue = /\|/.test(normalized);
  const hasInequality = /[<>]=?|!=/.test(normalized);
  const hasEquals =
    /=/.test(normalized) && !/[<>]=/.test(normalized) && !/!=/.test(normalized);
  const hasQuadratic = /\^2|\^3|\^4|\^5/.test(normalized);

  if (hasAbsValue && hasInequality) return "abs-inequality";
  if (hasAbsValue && hasEquals) return "abs-equation";
  if (hasAbsValue) return "abs-value";
  if (hasQuadratic && hasInequality) return "quadratic-inequality";
  if (hasInequality) return "inequality";
  if (hasQuadratic && hasEquals) return "quadratic";
  if (hasEquals) return "linear";
  return "simplify";
}

function routeToSolver(
  mode: SolverMode,
  normalized: string,
  solver: AlgebraSolver,
): {
  result: string;
  steps: { step: string; explanation: string }[];
  verified?: string;
} {
  switch (mode) {
    case "simplify":
      return solver.simplifyExpressionPublic(normalized);
    case "linear":
      return solver.solveLinearEquationPublic(normalized);
    case "quadratic":
      return solver.solveQuadraticEquationPublic(normalized);
    case "inequality":
      return solver.solveInequalityPublic(normalized);
    case "quadratic-inequality":
      return solver.solveInequalityPublic(normalized);
    case "abs-value":
      return solver.evaluateAbsoluteValuePublic(normalized);
    case "abs-equation":
      return solver.solveAbsoluteValueEquationPublic(normalized);
    case "abs-inequality":
      return solver.solveAbsoluteValueInequalityPublic(normalized);
    default:
      return solver.simplifyExpressionPublic(normalized);
  }
}

interface AlgebraAbsoluteValueCalculatorProps {
  initialMode?: SolverMode;
  hideHeader?: boolean;
}

const AlgebraAbsoluteValueCalculator: React.FC<
  AlgebraAbsoluteValueCalculatorProps
> = ({ initialMode = "simplify", hideHeader = false }) => {
  const solver = new AlgebraSolver();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [input, setInput] = useState("");
  const [mode, setMode] = useState<SolverMode>(initialMode);
  const [autoMode, setAutoMode] = useState<SolverMode | null>(null);
  const [normalized, setNormalized] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>(
    [],
  );
  const [error, setError] = useState("");
  const [verified, setVerified] = useState("");
  const [showSteps, setShowSteps] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    if (!input.trim()) {
      setAutoMode(null);
      return;
    }
    setAutoMode(autoDetectMode(normalizeInput(input)));
  }, [input]);

  useEffect(() => {
    if (initialMode && initialMode !== mode) {
      setMode(initialMode);
      clearAll();
    }
  }, [initialMode]);

  const handleModeSelect = (newMode: SolverMode) => {
    setMode(newMode);
    clearAll();
  };

  const handleSolve = () => {
    setError("");
    setResult("");
    setSteps([]);
    setVerified("");
    setHasResult(false);

    const norm = normalizeInput(input);
    if (!norm) {
      setError("Please enter a mathematical expression to solve.");
      return;
    }

    setNormalized(norm);
    setAutoMode(autoDetectMode(norm));

    try {
      const output = routeToSolver(mode, norm, solver);
      setResult(output.result);
      setSteps(output.steps || []);
      setVerified(output.verified || "");
      setHasResult(true);
      setShowSteps(true);
    } catch (err: any) {
      setError(
        err.message ||
          "Could not solve this problem. Please check your input format.",
      );
    }
  };

  const clearAll = () => {
    setInput("");
    setNormalized("");
    setAutoMode(null);
    setResult("");
    setSteps([]);
    setError("");
    setVerified("");
    setHasResult(false);
    inputRef.current?.focus();
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = (ex: string) => {
    setInput(ex);
    setError("");
    setResult("");
    setSteps([]);
    setVerified("");
    setHasResult(false);
    inputRef.current?.focus();
  };

  const currentInfo = MODE_INFO[mode];
  const autoInfo = autoMode ? MODE_INFO[autoMode] : null;
  const AutoIcon = autoInfo?.icon;
  const isDifferentFromAuto = autoMode !== null && autoMode !== mode;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {!hideHeader && (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C1017] via-[#111827] to-[#0C1017] p-6 sm:p-8 text-white border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-[#7B1824]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-[#7B1824]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B1824]/40 border border-[#8B1A24]/60 text-xs font-bold text-[#E05260] mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Unified Smart Calculator · 7 Problem Types</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Algebra & Absolute Value Calculator
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl">
              Select a mode or let the calculator{" "}
              <span className="text-white font-semibold">
                auto-detect your problem type
              </span>
              . Covers all 7 core problem types with full step-by-step
              solutions.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        {TAB_GROUPS.map((group) => (
          <div
            key={group.label}
            className="border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-center">
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-4 py-3 shrink-0 ${group.color} min-w-[112px] border-r border-gray-100`}
              >
                {group.label}
              </span>
              <div className="flex items-center gap-1.5 px-3 py-2 flex-1 overflow-x-auto scrollbar-none">
                {group.modes.map((key) => {
                  const info = MODE_INFO[key];
                  const isActive = mode === key;
                  const ModeIcon = info.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => handleModeSelect(key)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? "bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/30 scale-[1.02]"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-100"
                      }`}
                    >
                      <ModeIcon className="w-3 h-3" />
                      <span>{info.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {info.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7B1824]" />
                {currentInfo.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {currentInfo.description}
              </p>
            </div>
            <AnimatePresence>
              {autoInfo && AutoIcon && (
                <motion.div
                  key={autoMode}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className="flex flex-col items-end gap-1 shrink-0"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Auto-Detected
                  </span>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      isDifferentFromAuto
                        ? "bg-amber-50 text-amber-800 border-amber-300"
                        : "bg-emerald-50 text-emerald-800 border-emerald-300"
                    }`}
                  >
                    <AutoIcon className="w-3.5 h-3.5" />
                    <span>{autoInfo.name}</span>
                  </div>
                  {isDifferentFromAuto && (
                    <span className="text-[10px] text-amber-600 font-semibold">
                      Detected — using manual mode
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  handleSolve();
                }
              }}
              rows={4}
              placeholder={`${currentInfo.placeholder}\n\nCtrl+Enter to solve`}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white text-gray-900 px-4 py-4 text-base sm:text-lg font-mono placeholder:text-gray-400 placeholder:text-sm focus:border-[#7B1824] focus:ring-4 focus:ring-[#7B1824]/10 transition-all outline-none resize-none leading-relaxed"
            />
            {input && (
              <button
                onClick={clearAll}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                title="Clear input"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-gray-50 rounded-xl border border-gray-100">
            <span className="text-[11px] font-bold text-gray-400 pr-1 uppercase tracking-wider">
              Insert:
            </span>
            {[
              { label: "x", val: "x" },
              { label: "x²", val: "²" },
              { label: "x³", val: "³" },
              { label: "^", val: "^" },
              { label: "|x|", val: "|" },
              { label: "≤", val: "≤" },
              { label: "≥", val: "≥" },
              { label: "≠", val: "≠" },
              { label: "=", val: "=" },
              { label: "+", val: "+" },
              { label: "−", val: "−" },
              { label: "×", val: "×" },
              { label: "÷", val: "÷" },
              { label: "(", val: "(" },
              { label: ")", val: ")" },
            ].map((sym) => (
              <button
                key={sym.label}
                onClick={() => setInput((prev) => prev + sym.val)}
                className="px-2.5 py-1 text-xs font-mono font-bold bg-white text-gray-700 hover:bg-[#7B1824] hover:text-white rounded-lg border border-gray-200 shadow-sm transition-all cursor-pointer active:scale-95"
              >
                {sym.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Try an Example:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentInfo.examples.map((ex, i) => (
                <button
                  key={i}
                  onClick={() => loadExample(ex)}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-gray-100 text-gray-700 hover:bg-[#7B1824]/10 hover:text-[#7B1824] border border-transparent hover:border-[#7B1824]/20 transition-all cursor-pointer"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-gray-100">
            <button
              onClick={handleSolve}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#7B1824]/30 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Solve Problem</span>
            </button>
            <button
              onClick={clearAll}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear</span>
            </button>
            {steps.length > 0 && (
              <button
                onClick={() => setShowSteps(!showSteps)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600 transition-all cursor-pointer ml-auto"
              >
                {showSteps ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                <span>{showSteps ? "Hide" : "Show"} Steps</span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-bold">
                  {steps.length}
                </span>
              </button>
            )}
            <span className="text-xs text-gray-400 hidden md:inline ml-auto mr-0">
              Ctrl+Enter to solve
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-900">
                Input Error
              </h4>
              <p className="text-sm text-red-700 mt-0.5">{error}</p>
              <p className="text-xs text-red-500 mt-2">
                Equations need <code>=</code>, inequalities need{" "}
                <code>&lt; &gt; &lt;= &gt;=</code>, absolute values need{" "}
                <code>|...|</code>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasResult && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Solved as
                </span>
                <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold border bg-[#7B1824]/10 text-[#7B1824] border-[#7B1824]/30">
                  {currentInfo.name}
                </div>
              </div>
              {normalized && (
                <div className="border-l border-gray-300 pl-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Normalized Input
                  </span>
                  <div className="mt-1 font-mono text-sm text-gray-800 bg-white px-3 py-1 rounded-lg border border-gray-200 inline-block">
                    {normalized}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Final Answer</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copy Answer</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-5 rounded-xl bg-white border border-emerald-200 shadow-sm">
                <div className="font-mono text-xl sm:text-2xl font-black text-emerald-900 break-words whitespace-pre-wrap leading-relaxed">
                  {result}
                </div>
              </div>
              {verified && (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-2 rounded-xl border border-emerald-300/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>{verified}</span>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showSteps && steps.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-[#7B1824]/20 bg-[#7B1824]/5 p-6 sm:p-7 space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#7B1824]/15">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#7B1824] text-white flex items-center justify-center">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          Step-by-Step Solution
                        </h4>
                        <p className="text-xs text-gray-500">
                          Full mathematical justification for every step
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#7B1824] bg-white px-2.5 py-1 rounded-lg border border-[#7B1824]/20">
                      {steps.length} steps
                    </span>
                  </div>
                  <div className="space-y-3">
                    {steps.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.025 }}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:border-[#7B1824]/30 transition-all"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#7B1824]/10 text-[#7B1824] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="font-mono text-sm font-bold text-gray-900 break-words">
                            {item.step}
                          </div>
                          {item.explanation && (
                            <div className="text-xs text-gray-500 flex items-center gap-1.5">
                              <ArrowRight className="w-3 h-3 text-[#7B1824] shrink-0" />
                              <span>{item.explanation}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#7B1824]/10 flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-[#7B1824]" />
          </div>
          <h3 className="text-base sm:text-lg font-black text-gray-900">
            7 Core Problem Types
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Algebra",
              color: "bg-gray-50 border-gray-200",
              headerColor: "text-gray-900",
              items: [
                "Simplifying Expressions",
                "Combining Like Terms",
                "Expanding Expressions",
                "Distributive Property",
                "Polynomial Multiplication",
              ],
            },
            {
              title: "Equations",
              color: "bg-teal-50 border-teal-200",
              headerColor: "text-teal-900",
              items: [
                "Linear Equations",
                "Multi-Step Equations",
                "Quadratic Equations",
                "Factoring Method",
                "Quadratic Formula",
              ],
            },
            {
              title: "Inequalities",
              color: "bg-amber-50 border-amber-200",
              headerColor: "text-amber-900",
              items: [
                "Linear Inequalities",
                "Quadratic Inequalities",
                "Interval Notation",
                "Boundary Values",
                "Sign Analysis",
              ],
            },
            {
              title: "Absolute Value",
              color: "bg-violet-50 border-violet-200",
              headerColor: "text-violet-900",
              items: [
                "Absolute Value Evaluation",
                "Absolute Value Equations",
                "Absolute Value Inequalities",
                "Compound Inequalities",
                "Union Solutions",
              ],
            },
          ].map((section) => (
            <div
              key={section.title}
              className={`rounded-xl border p-4 ${section.color}`}
            >
              <h4 className={`text-sm font-black mb-3 ${section.headerColor}`}>
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-gray-600 flex items-start gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#7B1824]/50 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
          <div className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
            <span>Accepted Math Notation:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
            {[
              ["× or *", "Multiplication"],
              ["÷ or /", "Division"],
              ["^ or ²", "Powers"],
              ["|expr|", "Absolute value"],
              ["≤ / >=", "Inequalities"],
              ["=", "Equations"],
              ["(  )", "Grouping"],
              ["x", "Variable"],
            ].map(([sym, desc]) => (
              <div
                key={sym}
                className="bg-white px-2 py-1.5 rounded-lg border border-gray-200"
              >
                <span className="font-bold text-[#7B1824]">{sym}</span>
                <span className="text-gray-500 ml-1">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgebraAbsoluteValueCalculator;