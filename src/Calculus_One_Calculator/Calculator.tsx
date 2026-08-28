// Calculator.tsx — The ONE shared, unified Calculator UI for all 29 Calculus 1 and Calculus 2 topics
import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { type CalculatorDefinition, getSolver } from './CalculatorData';
import type { SolverResult, GraphData } from './SolverTypes';

interface CalculatorProps {
  definition: CalculatorDefinition;
}

export default function Calculator({ definition }: CalculatorProps) {
  const [input, setInput] = useState(definition.example || '');
  const [result, setResult] = useState<SolverResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSteps, setShowSteps] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update input placeholder and reset when definition changes
  useEffect(() => {
    setInput(definition.example || '');
    setResult(null);
  }, [definition.id]);

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
            answer: '',
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
          answer: '',
          steps: [],
          error: err?.message || 'An unexpected mathematical error occurred during calculation.',
        });
      } finally {
        setIsLoading(false);
      }
    }, 200);
  };

  const handleClear = () => {
    setInput('');
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
    const ctx = canvas.getContext('2d');
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

    const scaleX = (x: number) => padding + ((x - minX) / rangeX) * (width - 2 * padding);
    const scaleY = (y: number) => height - padding - ((y - minY) / rangeY) * (height - 2 * padding);

    // Draw Grid Lines
    ctx.strokeStyle = '#F3F4F6';
    ctx.lineWidth = 1;
    for (let x = Math.ceil(minX); x <= Math.floor(maxX); x += 2) {
      const sx = scaleX(x);
      ctx.beginPath();
      ctx.moveTo(sx, padding);
      ctx.lineTo(sx, height - padding);
      ctx.stroke();

      ctx.fillStyle = '#9CA3AF';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(String(x), sx, height - padding + 15);
    }

    // Draw Coordinate Axes
    ctx.strokeStyle = '#D1D5DB';
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

    // Draw Shaded Region if applicable (Definite Integral / Area)
    if (graph.shadedRegion) {
      const fromX = Math.max(graph.shadedRegion.from, minX);
      const toX = Math.min(graph.shadedRegion.to, maxX);
      const regionPoints = points.filter(p => p.x >= fromX && p.x <= toX);

      if (regionPoints.length > 0) {
        ctx.fillStyle = 'rgba(123, 24, 36, 0.14)';
        ctx.beginPath();
        const yZero = scaleY(0);
        ctx.moveTo(scaleX(fromX), yZero);
        for (const p of regionPoints) {
          ctx.lineTo(scaleX(p.x), scaleY(p.y));
        }
        ctx.lineTo(scaleX(toX), yZero);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Draw Primary Curve
    ctx.strokeStyle = '#7B1824';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let started = false;
    for (const p of points) {
      const sx = scaleX(p.x);
      const sy = scaleY(p.y);
      if (!started) {
        ctx.moveTo(sx, sy);
        started = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    ctx.stroke();

    // Draw Additional Curves
    if (graph.additionalCurves) {
      for (const curve of graph.additionalCurves) {
        ctx.strokeStyle = curve.color || '#2563EB';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        let s2 = false;
        for (const p of curve.points) {
          const sx = scaleX(p.x);
          const sy = scaleY(p.y);
          if (!s2) {
            ctx.moveTo(sx, sy);
            s2 = true;
          } else {
            ctx.lineTo(sx, sy);
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw Highlight Points (Extrema, Roots, Inflection, Limit Points)
    if (graph.highlights) {
      for (const h of graph.highlights) {
        if (h.x >= minX && h.x <= maxX && h.y >= minY && h.y <= maxY) {
          const sx = scaleX(h.x);
          const sy = scaleY(h.y);

          ctx.fillStyle = h.color || '#7B1824';
          ctx.beginPath();
          ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#111827';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
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
            <div className="w-12 h-12 rounded-2xl bg-[#7B1824] text-white flex items-center justify-center shadow-md shadow-[#7B1824]/20 shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#7B1824]/10 text-[#7B1824]">
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
              <Sparkles className="w-3.5 h-3.5 text-[#7B1824]" />
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
              <span className="text-[10px] text-[#7B1824] font-bold">Use</span>
            </button>
          </div>
        )}
      </div>

      {/* ── 2. INPUT & ACTIONS FORM ── */}
      <form onSubmit={handleSolve} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <label htmlFor="math-input" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Mathematical Expression / Input
          </label>
          <div className="relative rounded-xl border border-gray-300 bg-[#0C1017] p-1 shadow-inner focus-within:border-[#7B1824] transition">
            <textarea
              id="math-input"
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={definition.placeholder}
              rows={3}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 font-mono outline-none resize-none"
            />
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px] text-gray-400">
            <span>Supports standard notation: ^, +, -, *, /, sin, cos, e^x, sqrt, ln</span>
            <span>Press Enter or click Solve</span>
          </div>
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#7B1824] hover:bg-[#60101B] disabled:opacity-40 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#7B1824]/20 transition-all cursor-pointer active:scale-95"
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
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 flex items-start gap-3 text-red-900">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-red-900">Input Validation Error</h4>
                  <p className="text-xs text-red-700 leading-relaxed">{result.error}</p>
                </div>
              </div>
            )}

            {/* Success Hero Answer Card */}
            {result.success && result.answer && (
              <div className="rounded-2xl border border-[#7B1824]/30 bg-gradient-to-br from-[#FFF8F9] to-white p-6 sm:p-7 shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#7B1824]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Final Answer</span>
                  </div>
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
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7B1824]" />
                    <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                      Step-by-Step Mathematical Solution
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSteps(!showSteps)}
                    className="text-xs text-gray-500 hover:text-gray-900 font-semibold inline-flex items-center gap-1 transition"
                  >
                    <span>{showSteps ? 'Collapse Steps' : 'Expand Steps'}</span>
                    {showSteps ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {showSteps && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      {result.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center">
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
                    <TrendingUp className="w-4 h-4 text-[#7B1824]" />
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
                  <h4 className="text-xs font-bold uppercase tracking-wider">Mathematical Verification</h4>
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
                  <Info className="w-3.5 h-3.5 text-[#7B1824]" />
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
