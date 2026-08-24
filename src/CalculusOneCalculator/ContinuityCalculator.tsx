// components/calculators/ContinuityCalculator.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Calculator, AlertCircle, CheckCircle, XCircle, Info, Eraser, ChevronDown } from 'lucide-react';

interface ContinuityResult {
  isContinuous: boolean;
  message: string;
  details: string[];
  leftLimit?: number;
  rightLimit?: number;
  functionValue?: number;
}

// Only characters a continuity check legitimately needs: digits, x, whitespace,
// basic operators/parens, and the letters used by the whitelisted function names below.
const ALLOWED_INPUT_PATTERN = /^[0-9x.,+\-*/^()\s a-z]*$/i;

// Special symbols that can be inserted with keyboard shortcuts
const SPECIAL_SYMBOLS = [
  { label: '^', description: 'Insert power symbol (^)' },
  { label: 'sqrt(', description: 'Square root' },
  { label: 'sin(', description: 'Sine' },
  { label: 'cos(', description: 'Cosine' },
  { label: 'tan(', description: 'Tangent' },
  { label: 'ln(', description: 'Natural log' },
  { label: 'log(', description: 'Log base 10' },
  { label: 'abs(', description: 'Absolute value' },
  { label: 'exp(', description: 'Exponential' },
  { label: 'pi', description: 'π constant' },
  { label: 'e', description: 'Euler\'s number' },
];

const ContinuityCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('(x^2-1)/(x-1)');
  const [point, setPoint] = useState('1');
  const [result, setResult] = useState<ContinuityResult | null>(null);
  const [error, setError] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on current input
  const getFilteredSuggestions = () => {
    const currentInput = functionStr;
    // Find the last word or partial input
    const lastWordMatch = currentInput.match(/[a-z]*$/i);
    const lastWord = lastWordMatch ? lastWordMatch[0] : '';
    
    if (lastWord.length === 0) {
      return [];
    }
    
    // Show "^" suggestion when user types "x"
    if (lastWord.toLowerCase() === 'x') {
      return [{ label: '^', description: 'Insert power symbol (^)' }];
    }
    
    return SPECIAL_SYMBOLS.filter(symbol => 
      symbol.label.toLowerCase().startsWith(lastWord.toLowerCase())
    );
  };

  const filteredSuggestions = getFilteredSuggestions();

  const parseFunction = (fn: string): ((x: number) => number) => {
    if (!ALLOWED_INPUT_PATTERN.test(fn)) {
      throw new Error('Function contains characters that are not supported.');
    }

    // Order matters: longer/more specific function names must be replaced
    // before shorter ones that could appear as their substrings.
    const sanitized = fn
      .replace(/\basin\(/g, 'Math.asin(')
      .replace(/\bacos\(/g, 'Math.acos(')
      .replace(/\batan\(/g, 'Math.atan(')
      .replace(/\bsinh\(/g, 'Math.sinh(')
      .replace(/\bcosh\(/g, 'Math.cosh(')
      .replace(/\btanh\(/g, 'Math.tanh(')
      .replace(/\bsin\(/g, 'Math.sin(')
      .replace(/\bcos\(/g, 'Math.cos(')
      .replace(/\btan\(/g, 'Math.tan(')
      .replace(/\bexp\(/g, 'Math.exp(')
      .replace(/\bsqrt\(/g, 'Math.sqrt(')
      .replace(/\babs\(/g, 'Math.abs(')
      .replace(/\bln\(/g, 'Math.log(')
      .replace(/\blog\(/g, 'Math.log10(')
      .replace(/\bpi\b/g, 'Math.PI')
      .replace(/\be\b/g, 'Math.E')
      .replace(/\^/g, '**');

    // eslint-disable-next-line no-new-func
    const compiled = new Function('x', `"use strict"; return (${sanitized});`) as (
      x: number
    ) => number;

    // Validate the function actually compiles and runs on a harmless probe value.
    compiled(0.123456789);

    return compiled;
  };

  // A relative tolerance used everywhere a "close enough" comparison is
  // needed (left vs. right limit, limit vs. f(a), extrapolation
  // convergence). Using a single shared helper keeps every part of the
  // calculator - the pass/fail badges, the step-by-step explanation, and
  // the final verdict - in agreement with each other.
  const valuesAreClose = (x: number, y: number, relTol: number = 1e-6): boolean => {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
    const scale = Math.max(1, Math.abs(x), Math.abs(y));
    return Math.abs(x - y) <= scale * relTol;
  };

  type OneSidedLimit = {
    exists: boolean;
    limit?: number;
    diverges?: boolean;
    divergesTo?: 'plusInfinity' | 'minusInfinity' | 'oscillating';
  };

  // Evaluate a one-sided limit numerically.
  //
  // Two things made the previous approach unreliable:
  //  1. It used *absolute* step sizes (0.1, 0.01, ...). For a point far
  //     from 0 (e.g. x = 10,000) a step of 1e-8 is smaller than
  //     floating-point precision can represent relative to that point, so
  //     a + h collapses to a and the "limit" silently becomes f(a) itself.
  //     Steps are now scaled to the size of the point being approached.
  //  2. It "extrapolated" using only the two smallest-h samples, which is
  //     easily thrown off by ordinary floating-point noise. This version
  //     builds a full Aitken/Shanks extrapolation table (repeated
  //     Aitken's delta-squared process) across all samples, which
  //     accelerates convergence correctly regardless of the function's
  //     convergence order, and is standard practice for numerically
  //     estimating limits.
  const computeOneSidedLimit = (f: (x: number) => number, a: number, direction: 1 | -1): OneSidedLimit => {
    const scale = 1 + Math.abs(a); // relative step scale for this point
    const exponents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const points: { h: number; val: number }[] = [];

    for (const k of exponents) {
      const h = scale * Math.pow(10, -k);
      try {
        const val = f(a + direction * h);
        if (Number.isFinite(val) || val === Infinity || val === -Infinity) {
          points.push({ h, val });
        }
        // NaN samples (e.g. sqrt of a negative number just past the
        // point) are skipped - they mean "outside the domain here", not
        // "no limit".
      } catch {
        // The function threw for this sample; skip it and keep going.
      }
    }

    if (points.length < 5) {
      return { exists: false };
    }

    // --- Divergence check: does |f| grow without bound as h shrinks? ---
    const tail = points.slice(-6);
    const hasInfiniteSample = tail.some((p) => !Number.isFinite(p.val));
    const finiteTail = tail.filter((p) => Number.isFinite(p.val));
    const magnitudes = finiteTail.map((p) => Math.abs(p.val));
    let monotonicGrowth = magnitudes.length >= 3;
    for (let i = 1; i < magnitudes.length; i++) {
      if (!(magnitudes[i] > magnitudes[i - 1] * 1.3)) {
        monotonicGrowth = false;
        break;
      }
    }
    const growingLargeEnough =
      magnitudes.length > 0 && magnitudes[magnitudes.length - 1] > 1e8;

    if (hasInfiniteSample || (monotonicGrowth && growingLargeEnough)) {
      const signedVals = tail.map((p) => p.val);
      const allPositive = signedVals.every((v) => v > 0);
      const allNegative = signedVals.every((v) => v < 0);
      return {
        exists: false,
        diverges: true,
        divergesTo: allPositive ? 'plusInfinity' : allNegative ? 'minusInfinity' : 'oscillating',
      };
    }

    // --- Aitken/Shanks extrapolation table ---
    let sequence = points.map((p) => p.val);
    const levels: number[][] = [sequence];
    while (sequence.length >= 3) {
      const next: number[] = [];
      for (let i = 0; i + 2 < sequence.length; i++) {
        const x0 = sequence[i];
        const x1 = sequence[i + 1];
        const x2 = sequence[i + 2];
        const denom = x2 - 2 * x1 + x0;
        // If the denominator is essentially zero the sequence has already
        // stopped changing (converged) at this level - keep the value
        // rather than dividing by (near) zero.
        next.push(Math.abs(denom) < 1e-13 ? x2 : x2 - Math.pow(x2 - x1, 2) / denom);
      }
      if (next.length === 0) break;
      levels.push(next);
      sequence = next;
    }

    const finalLevel = levels[levels.length - 1];
    const candidate = finalLevel[finalLevel.length - 1];
    const previousLevel = levels.length >= 2 ? levels[levels.length - 2] : points.map((p) => p.val);
    const rawTailVal = points[points.length - 1].val;

    if (
      Number.isFinite(candidate) &&
      (valuesAreClose(candidate, previousLevel[previousLevel.length - 1], 1e-6) ||
        valuesAreClose(candidate, rawTailVal, 1e-5))
    ) {
      return { exists: true, limit: candidate };
    }

    // Fallback: the accelerated estimate didn't settle (this can happen
    // for functions with a corner, where Aitken's geometric-convergence
    // assumption doesn't strictly hold) but the raw samples themselves may
    // still be converging steadily toward a limit.
    const diffs: number[] = [];
    for (let i = 1; i < points.length; i++) {
      diffs.push(Math.abs(points[i].val - points[i - 1].val));
    }
    const lastDiff = diffs[diffs.length - 1];
    const settleTolerance = Math.max(1e-7, Math.abs(rawTailVal) * 1e-6);
    if (lastDiff < settleTolerance) {
      return { exists: true, limit: rawTailVal };
    }

    // Values are oscillating or otherwise failing to settle to a value.
    return { exists: false };
  };

  // Human-readable description of *why* f(a) is undefined, and a short
  // label for how a one-sided limit diverges, so the explanation text
  // matches what actually happened numerically instead of always saying
  // the same generic phrase.
  const describeUndefined = (evalOutcome: 'infinite' | 'nan' | 'threw'): string => {
    if (evalOutcome === 'infinite') return 'undefined — evaluating it gives a division by zero (an infinite result)';
    if (evalOutcome === 'nan') return 'undefined — the expression is an indeterminate form (like 0/0) or outside the domain of a piece of the function (e.g. a square root of a negative number, or a log of a non-positive number)';
    return 'undefined — the expression could not be evaluated at this point';
  };

  const describeDivergence = (divergesTo?: 'plusInfinity' | 'minusInfinity' | 'oscillating'): string => {
    if (divergesTo === 'plusInfinity') return 'diverges to +∞';
    if (divergesTo === 'minusInfinity') return 'diverges to −∞';
    return 'does not settle to a single value (oscillates or is unbounded)';
  };

  // Generate detailed step-by-step explanations
  const generateStepByStepExplanation = (
    f: (x: number) => number,
    a: number,
    isDefined: boolean,
    fAtA: number,
    fAtAOutcome: 'ok' | 'infinite' | 'nan' | 'threw',
    left: OneSidedLimit,
    right: OneSidedLimit,
    limitExists: boolean,
    isContinuous: boolean
  ): string[] => {
    const steps: string[] = [];

    // Step 1: Check if f(a) is defined
    steps.push('📝 STEP 1: Check if f(a) is defined');
    steps.push(`   • Evaluate f(${a}) by substituting x = ${a} into the function`);
    if (isDefined) {
      steps.push(`   • f(${a}) = ${fAtA.toFixed(6)} ✓ (defined)`);
      steps.push('   ✅ f(a) exists — first condition satisfied');
    } else {
      steps.push(`   ❌ f(${a}) is ${describeUndefined(fAtAOutcome as 'infinite' | 'nan' | 'threw')}`);
      steps.push('   ✗ First condition FAILED — function must be defined at the point');
    }
    steps.push('');

    // Step 2: Check left-hand limit
    steps.push('📝 STEP 2: Find the left-hand limit (approaching from the left)');
    steps.push(`   • Calculate lim(x→${a}⁻) f(x) by evaluating f at points approaching ${a} from below`);
    steps.push(`   • Sample points progressively closer: ${a} − 0.1, ${a} − 0.01, ${a} − 0.001, ...`);
    if (left.exists && left.limit !== undefined) {
      steps.push(`   • Left-hand limit = ${left.limit.toFixed(6)} ✓ (exists and converges)`);
      steps.push('   ✅ Left-hand limit exists — second condition partially satisfied');
    } else if (left.diverges) {
      steps.push(`   ❌ Left-hand limit ${describeDivergence(left.divergesTo)}`);
      steps.push('   ✗ Second condition FAILED — limit does not exist');
    } else {
      steps.push('   ❌ Left-hand limit does not exist (oscillating or failing to converge)');
      steps.push('   ✗ Second condition FAILED — limit does not exist');
    }
    steps.push('');

    // Step 3: Check right-hand limit
    steps.push('📝 STEP 3: Find the right-hand limit (approaching from the right)');
    steps.push(`   • Calculate lim(x→${a}⁺) f(x) by evaluating f at points approaching ${a} from above`);
    steps.push(`   • Sample points progressively closer: ${a} + 0.1, ${a} + 0.01, ${a} + 0.001, ...`);
    if (right.exists && right.limit !== undefined) {
      steps.push(`   • Right-hand limit = ${right.limit.toFixed(6)} ✓ (exists and converges)`);
      steps.push('   ✅ Right-hand limit exists — second condition partially satisfied');
    } else if (right.diverges) {
      steps.push(`   ❌ Right-hand limit ${describeDivergence(right.divergesTo)}`);
      steps.push('   ✗ Second condition FAILED — limit does not exist');
    } else {
      steps.push('   ❌ Right-hand limit does not exist (oscillating or failing to converge)');
      steps.push('   ✗ Second condition FAILED — limit does not exist');
    }
    steps.push('');

    // Step 4: Compare left and right limits
    steps.push('📝 STEP 4: Compare left-hand and right-hand limits');
    if (left.exists && right.exists && left.limit !== undefined && right.limit !== undefined) {
      const limitDiff = Math.abs(left.limit - right.limit);
      steps.push(`   • Left limit: ${left.limit.toFixed(6)}`);
      steps.push(`   • Right limit: ${right.limit.toFixed(6)}`);
      steps.push(`   • Difference: ${limitDiff.toFixed(6)}`);
      if (valuesAreClose(left.limit, right.limit)) {
        steps.push('   ✅ Limits are equal — limit exists');
        const limitValue = (left.limit + right.limit) / 2;
        steps.push(`   • lim(x→${a}) f(x) = ${limitValue.toFixed(6)}`);
      } else {
        steps.push('   ❌ Limits are NOT equal');
        steps.push(`   ✗ lim(x→${a}) f(x) does not exist — second condition FAILED`);
      }
    } else {
      steps.push('   ❌ One or both one-sided limits do not exist');
      steps.push(`   ✗ lim(x→${a}) f(x) does not exist — second condition FAILED`);
    }
    steps.push('');

    // Step 5: Check if limit equals f(a)
    if (limitExists && isDefined) {
      const limitValue = (left.limit! + right.limit!) / 2;
      const diff = Math.abs(limitValue - fAtA);

      steps.push('📝 STEP 5: Check if lim(x→a) f(x) = f(a)');
      steps.push(`   • lim(x→${a}) f(x) = ${limitValue.toFixed(6)}`);
      steps.push(`   • f(${a}) = ${fAtA.toFixed(6)}`);
      steps.push(`   • |lim − f(${a})| = ${diff.toFixed(6)}`);

      if (valuesAreClose(limitValue, fAtA)) {
        steps.push('   ✅ Limit equals f(a) — third condition satisfied');
      } else {
        steps.push('   ❌ Limit does NOT equal f(a)');
        steps.push(`   ✗ Third condition FAILED — lim(x→${a}) f(x) ≠ f(${a})`);
      }
    } else if (limitExists) {
      steps.push('📝 STEP 5: Check if limit equals f(a)');
      steps.push('   ❌ f(a) is undefined — cannot compare');
      steps.push('   ✗ Third condition FAILED — f(a) must be defined');
    } else {
      steps.push('📝 STEP 5: Skip — limit does not exist');
    }
    steps.push('');

    // Final conclusion
    steps.push('📝 FINAL CONCLUSION:');
    if (isContinuous) {
      steps.push('   ✅ All three conditions are satisfied!');
      steps.push(`   ✅ f is CONTINUOUS at x = ${a}`);
    } else {
      steps.push('   ❌ One or more conditions FAILED');
      steps.push(`   ❌ f is DISCONTINUOUS at x = ${a}`);
      steps.push('   📌 The function has a discontinuity (hole, jump, or asymptote) at this point');
    }

    return steps;
  };

  const checkContinuity = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);

      if (isNaN(a)) {
        setError('Please enter a valid number for the point.');
        setResult(null);
        return;
      }

      const details: string[] = [];

      // Step 1: is f(a) defined? Track *why* it's undefined (infinite
      // result, indeterminate/out-of-domain NaN, or a thrown error) so
      // the explanation can say something accurate rather than a generic
      // "division by zero" for every case.
      let fAtA = NaN;
      let isDefined = true;
      let fAtAOutcome: 'ok' | 'infinite' | 'nan' | 'threw' = 'ok';
      try {
        fAtA = f(a);
        if (fAtA === Infinity || fAtA === -Infinity) {
          isDefined = false;
          fAtAOutcome = 'infinite';
          details.push(`❌ f(${a}) is undefined (division by zero — an infinite result)`);
        } else if (Number.isNaN(fAtA)) {
          isDefined = false;
          fAtAOutcome = 'nan';
          details.push(`❌ f(${a}) is undefined (indeterminate form or outside the function's domain)`);
        } else {
          details.push(`✅ f(${a}) = ${fAtA.toFixed(6)}`);
        }
      } catch {
        isDefined = false;
        fAtAOutcome = 'threw';
        details.push(`❌ f(${a}) is undefined (could not be evaluated)`);
      }

      // Step 2: left-hand limit
      const left = computeOneSidedLimit(f, a, -1);
      if (left.exists && left.limit !== undefined) {
        details.push(`✅ Left-hand limit = ${left.limit.toFixed(6)}`);
      } else if (left.diverges) {
        details.push(`❌ Left-hand limit ${describeDivergence(left.divergesTo)}`);
      } else {
        details.push('❌ Left-hand limit does not exist (oscillating or failing to converge)');
      }

      // Step 3: right-hand limit
      const right = computeOneSidedLimit(f, a, 1);
      if (right.exists && right.limit !== undefined) {
        details.push(`✅ Right-hand limit = ${right.limit.toFixed(6)}`);
      } else if (right.diverges) {
        details.push(`❌ Right-hand limit ${describeDivergence(right.divergesTo)}`);
      } else {
        details.push('❌ Right-hand limit does not exist (oscillating or failing to converge)');
      }

      // Step 4: decide continuity. All comparisons go through the same
      // valuesAreClose helper used in the step-by-step explanation, so the
      // pass/fail badges below can never disagree with the written-out
      // reasoning.
      const limitExists =
        left.exists && right.exists && left.limit !== undefined && right.limit !== undefined;
      const onesidedLimitsMatch =
        limitExists && valuesAreClose(left.limit!, right.limit!);

      let isContinuous = false;
      let message = '';

      if (!isDefined) {
        message = `f(${a}) is not defined`;
      } else if (!limitExists) {
        message = 'The limit does not exist';
      } else if (!onesidedLimitsMatch) {
        message = 'Left-hand and right-hand limits are not equal';
      } else {
        const limitValue = (left.limit! + right.limit!) / 2;
        if (!valuesAreClose(limitValue, fAtA)) {
          message = `The limit ≠ f(${a})`;
        } else {
          message = `f is continuous at x = ${a}`;
          isContinuous = true;
        }
      }

      if (onesidedLimitsMatch) {
        const limitValue = (left.limit! + right.limit!) / 2;
        details.push(`ℹ️ lim(x→${a}) f(x) = ${limitValue.toFixed(6)}`);
        if (isDefined) {
          details.push(
            `ℹ️ |limit − f(${a})| = ${Math.abs(limitValue - fAtA).toFixed(6)}`
          );
        }
      }

      // Generate detailed step-by-step explanation
      const stepByStepExplanations = generateStepByStepExplanation(
        f, a, isDefined, fAtA, fAtAOutcome, left, right, limitExists, isContinuous
      );

      setResult({
        isContinuous,
        message,
        details,
        leftLimit: left.limit,
        rightLimit: right.limit,
        functionValue: isDefined ? fAtA : undefined,
      });
      
      // Store step-by-step explanations in a separate state or combine with result
      // For now, we'll add them to the details
      setResult(prev => prev ? {
        ...prev,
        details: [...stepByStepExplanations, ...prev.details]
      } : null);
      
      setError('');
    } catch (e) {
      setError(
        e instanceof Error && e.message
          ? e.message
          : 'Invalid function or point. Please check your input.'
      );
      setResult(null);
    }
  };

  const clearInputs = () => {
    setFunctionStr('');
    setPoint('');
    setResult(null);
    setError('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  // Handle keyboard navigation for symbol suggestions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) {
      return;
    }

    // Handle navigation within suggestions
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
          insertSymbol(filteredSuggestions[selectedIndex].label);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
      default:
        // Close suggestions if typing
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const insertSymbol = (symbol: string) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    
    // Find the partial word being typed (like "x")
    const beforeCursor = functionStr.substring(0, start);
    const afterCursor = functionStr.substring(end);
    const lastWordMatch = beforeCursor.match(/[a-z]*$/i);
    const lastWord = lastWordMatch ? lastWordMatch[0] : '';
    
    // For "^" symbol: keep the "x" and add "^" after it
    if (symbol === '^' && lastWord.toLowerCase() === 'x') {
      // Keep the "x" and add "^" after it
      const newValue = beforeCursor + '^' + afterCursor;
      setFunctionStr(newValue);
      setShowSuggestions(false);
      setSelectedIndex(-1);
      setCursorPosition(start + 1);
      
      setTimeout(() => {
        input.focus();
        input.setSelectionRange(start + 1, start + 1);
      }, 0);
      return;
    }
    
    // For other symbols: replace the partial word
    const newStart = start - lastWord.length;
    const newValue = beforeCursor.substring(0, newStart) + symbol + afterCursor;
    
    setFunctionStr(newValue);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    setCursorPosition(newStart + symbol.length);
    
    // Focus the input
    setTimeout(() => {
      input.focus();
      if (cursorPosition !== null) {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  const getResultIcon = () => {
    if (!result) return null;
    if (result.isContinuous) {
      return <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />;
    }
    return <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />;
  };

  const getResultColor = () => {
    if (!result) return '';
    return result.isContinuous ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Continuity Conditions:</p>
          <p className="text-xs">A function f is continuous at x = a if:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>f(a) is defined</li>
            <li>lim(x→a) f(x) exists</li>
            <li>lim(x→a) f(x) = f(a)</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            f(x) 
            <span className="text-xs text-gray-400 ml-2">(type 'x' for ^ suggestion)</span>
          </label>
          <input
            ref={inputRef}
            type="text"
            value={functionStr}
            onChange={(e) => {
              setFunctionStr(e.target.value);
              // Show suggestions when typing
              const value = e.target.value;
              const lastWordMatch = value.match(/[a-z]*$/i);
              const lastWord = lastWordMatch ? lastWordMatch[0] : '';
              
              if (lastWord.toLowerCase() === 'x') {
                setShowSuggestions(true);
                setSelectedIndex(0);
              } else {
                setShowSuggestions(false);
                setSelectedIndex(-1);
              }
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              // Check if there's a partial word to suggest
              const match = functionStr.match(/[a-z]*$/i);
              if (match && match[0].toLowerCase() === 'x') {
                setShowSuggestions(true);
                setSelectedIndex(0);
              }
            }}
            onBlur={() => {
              // Delay closing suggestions to allow click events
              setTimeout(() => {
                setShowSuggestions(false);
                setSelectedIndex(-1);
              }, 200);
            }}
            placeholder="e.g., (x^2-1)/(x-1)"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
          
          {/* Suggestions dropdown - shows "^" when user types "x" */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div 
              ref={suggestionsRef}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
            >
              <div className="p-2 text-xs text-gray-500 border-b border-gray-100 flex items-center justify-between">
                <span>Press ↑↓ to navigate, Enter to insert, Esc to close</span>
                <span className="text-blue-500 text-xs font-medium">Click to insert</span>
              </div>
              {filteredSuggestions.map((symbol, index) => (
                <div
                  key={symbol.label}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-50 flex items-center justify-between transition-colors duration-150 ${
                    index === selectedIndex ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => insertSymbol(symbol.label)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-blue-600">
                      {symbol.label}
                    </span>
                    {symbol.label === '^' && (
                      <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        Power symbol
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{symbol.description}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">x =</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
        <span className="font-medium">💡 Tip:</span>
        <span>Type <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">x</kbd> to see <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">^</kbd> suggestion</span>
      </div>

      <div className="flex items-stretch gap-2">
        <button
          onClick={checkContinuity}
          className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-bold transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Check Continuity
        </button>
        <button
          onClick={clearInputs}
          title="Clear inputs"
          aria-label="Clear inputs"
          className="px-4 bg-white hover:bg-gray-50 text-gray-600 border border-[#E5E7EB] rounded-xl font-medium transition flex items-center justify-center gap-2"
        >
          <Eraser className="w-5 h-5" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {result && (
        <div className={`p-4 border rounded-lg ${getResultColor()}`}>
          <div className="flex items-start gap-3">
            {getResultIcon()}
            <div className="flex-1">
              <div className="text-lg font-semibold mb-2">
                {result.isContinuous ? (
                  <span className="text-green-700">✅ Continuous</span>
                ) : (
                  <span className="text-red-700">❌ Not Continuous</span>
                )}
                <span className="text-sm font-normal text-gray-600 ml-2">at x = {point}</span>
              </div>

              <div className="text-sm font-medium text-gray-700 mb-2">{result.message}</div>

              {result.isContinuous && (
                <div className="mb-3 p-2 bg-green-100 rounded text-sm text-green-800 font-medium">
                  ✓ The function is continuous at x = {point}
                </div>
              )}

              {!result.isContinuous && (
                <div className="mb-3 p-2 bg-red-100 rounded text-sm text-red-800">
                  <span className="font-medium">✗ The function is discontinuous at x = {point}</span>
                  <br />
                  <span className="text-xs">
                    {result.details.some((d) => d.includes('undefined')) || result.details.some((d) => d.includes('f(a) is undefined'))
                      ? 'The function is not defined at this point (hole or vertical asymptote).'
                      : result.details.some((d) => d.includes('does not exist') || d.includes('diverges'))
                      ? 'The limit does not exist at this point (jump, oscillation, or infinite behavior).'
                      : 'The limit value does not equal the function value (removable discontinuity).'}
                  </span>
                </div>
              )}

              {/* Detailed step-by-step work with explanations */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  📚 Detailed Step-by-Step Analysis
                </p>
                <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-300">
                  {result.details.map((detail, index) => {
                    // Check if this is a step header or explanation
                    if (detail.startsWith('📝')) {
                      return (
                        <div key={index} className="text-sm font-semibold text-gray-800 mt-2 first:mt-0 border-b border-gray-200 pb-1">
                          {detail}
                        </div>
                      );
                    } else if (detail.startsWith('   •') || detail.startsWith('   •')) {
                      return (
                        <div key={index} className="text-sm text-gray-600 font-mono pl-2 border-l-2 border-gray-300 ml-2">
                          {detail}
                        </div>
                      );
                    } else if (detail.startsWith('   ✅') || detail.startsWith('   ✗') || detail.startsWith('   ❌')) {
                      return (
                        <div key={index} className="text-sm font-mono pl-2 border-l-2 border-gray-300 ml-2">
                          {detail}
                        </div>
                      );
                    } else if (detail.includes('✓') || detail.includes('✅')) {
                      return (
                        <div key={index} className="text-sm text-green-700 font-mono pl-2 border-l-2 border-green-300 ml-2">
                          {detail}
                        </div>
                      );
                    } else if (detail.includes('✗') || detail.includes('❌')) {
                      return (
                        <div key={index} className="text-sm text-red-700 font-mono pl-2 border-l-2 border-red-300 ml-2">
                          {detail}
                        </div>
                      );
                    } else if (detail.startsWith('   ')) {
                      return (
                        <div key={index} className="text-sm text-gray-600 font-mono pl-2 border-l-2 border-gray-300 ml-2">
                          {detail}
                        </div>
                      );
                    } else if (detail === '') {
                      return <div key={index} className="h-2" />;
                    } else {
                      return (
                        <div key={index} className="text-sm text-gray-600 font-mono pl-2">
                          {detail}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Summary of conditions */}
              <div className="mt-3 p-3 bg-white border border-gray-200 rounded-lg">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  📌 Summary of Continuity Conditions
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">1.</span>
                    <span>f(a) is defined</span>
                    <span className="ml-auto">
                      {result.functionValue !== undefined ? '✅' : '❌'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">2.</span>
                    <span>lim(x→a) f(x) exists</span>
                    <span className="ml-auto">
                      {result.leftLimit !== undefined &&
                      result.rightLimit !== undefined &&
                      valuesAreClose(result.leftLimit, result.rightLimit)
                        ? '✅'
                        : '❌'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">3.</span>
                    <span>lim(x→a) f(x) = f(a)</span>
                    <span className="ml-auto">
                      {result.isContinuous ? '✅' : '❌'}
                    </span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <span className="text-sm font-semibold">
                    Final: {result.isContinuous ? '✅ CONTINUOUS' : '❌ DISCONTINUOUS'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinuityCalculator;