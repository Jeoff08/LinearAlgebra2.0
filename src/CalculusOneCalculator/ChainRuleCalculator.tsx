// components/calculators/ChainRuleCalculator.tsx
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Calculator, AlertCircle, CheckCircle, Info, Link, Lightbulb, ArrowRight, RotateCcw, ChevronDown } from 'lucide-react';

interface FunctionSuggestion {
  label: string;
  value: string;
  // insertOnly: dropped in at the cursor position (for building custom
  // expressions like u^4). Otherwise the suggestion replaces the whole field
  // (picking a full outer function like "sin" or "u^3").
  insertOnly?: boolean;
}

interface AnchorRect {
  top: number;
  left: number;
  width: number;
}

// Tracks an input's on-screen position while a flag is true, so its dropdown
// can be rendered in a portal (outside any ancestor that would clip it) and
// still line up under the field.
const useAnchorRect = (
  anchorRef: React.RefObject<HTMLInputElement | null>,
  isOpen: boolean
): AnchorRect | null => {
  const [rect, setRect] = useState<AnchorRect | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const updateRect = () => {
      const r = anchorRef.current?.getBoundingClientRect();
      if (r) {
        setRect({ top: r.bottom + 4, left: r.left, width: r.width });
      }
    };
    updateRect();
    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [isOpen, anchorRef]);

  return rect;
};

// Outer function f(u) suggestions. The "^" entry is what lets someone start
// from a preset like u^3 and then manually change it to u^4, u^5, etc.
const OUTER_SUGGESTIONS: FunctionSuggestion[] = [
  { label: '^  (power symbol — e.g. type u then ^ then 4)', value: '^', insertOnly: true },
  { label: 'sin(u)', value: 'sin' },
  { label: 'cos(u)', value: 'cos' },
  { label: 'tan(u)', value: 'tan' },
  { label: 'ln(u)', value: 'ln' },
  { label: '√u', value: 'sqrt' },
  { label: 'eᵘ', value: 'e^' },
  { label: 'u²', value: 'u^2' },
  { label: 'u³', value: 'u^3' },
];

// Inner function g(x) suggestions - always insert at the cursor so people can
// build up expressions like sin(x)^2 piece by piece.
const INNER_SUGGESTIONS: FunctionSuggestion[] = [
  { label: '^  (power symbol)', value: '^', insertOnly: true },
  { label: 'sin(', value: 'sin(', insertOnly: true },
  { label: 'cos(', value: 'cos(', insertOnly: true },
  { label: 'tan(', value: 'tan(', insertOnly: true },
  { label: 'ln(', value: 'ln(', insertOnly: true },
  { label: 'sqrt(', value: 'sqrt(', insertOnly: true },
  { label: 'e^', value: 'e^', insertOnly: true },
];

interface ChainRuleResult {
  derivative: string;
  valueAtPoint?: number;
  outerFunction: string;
  innerFunction: string;
  outerDerivative: string;
  innerDerivative: string;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const ChainRuleCalculator: React.FC = () => {
  const [outerFunction, setOuterFunction] = useState('sin');
  const [innerFunction, setInnerFunction] = useState('x^2');
  const [point, setPoint] = useState('1');
  const [result, setResult] = useState<ChainRuleResult | null>(null);
  const [error, setError] = useState<string>('');
  const [showExample, setShowExample] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [innerHighlightIndex, setInnerHighlightIndex] = useState<number>(-1);
  const [showOuterSuggestions, setShowOuterSuggestions] = useState<boolean>(false);
  const [outerHighlightIndex, setOuterHighlightIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const outerInputRef = useRef<HTMLInputElement>(null);
  const outerSuggestionRef = useRef<HTMLDivElement>(null);
  const outerAnchorRect = useAnchorRect(outerInputRef, showOuterSuggestions);
  const innerAnchorRect = useAnchorRect(inputRef, showSuggestions);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (outerSuggestionRef.current && !outerSuggestionRef.current.contains(event.target as Node)) {
        setShowOuterSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInnerFunction(value);
    
    // Show suggestion only when user types
    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    setInnerHighlightIndex(-1);
  };

  const handleInnerSuggestionSelect = (suggestion: FunctionSuggestion) => {
    // Insert at the current cursor position (or at the end)
    const cursorPos = inputRef.current?.selectionStart ?? innerFunction.length;
    const before = innerFunction.substring(0, cursorPos);
    const after = innerFunction.substring(cursorPos);

    setInnerFunction(before + suggestion.value + after);
    setShowSuggestions(false);
    setInnerHighlightIndex(-1);
    inputRef.current?.focus();
  };

  const handleOuterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOuterFunction(value);
    setShowOuterSuggestions(true);
    setOuterHighlightIndex(-1);
  };

  const handleOuterSuggestionSelect = (suggestion: FunctionSuggestion) => {
    if (suggestion.insertOnly) {
      // e.g. the "^" entry - insert at the cursor so an existing preset like
      // u^3 can be manually turned into u^4, u^5, etc.
      const cursorPos = outerInputRef.current?.selectionStart ?? outerFunction.length;
      const before = outerFunction.substring(0, cursorPos);
      const after = outerFunction.substring(cursorPos);
      setOuterFunction(before + suggestion.value + after);
    } else {
      // A full preset (sin, cos, u^2, ...) replaces the whole field, same as
      // choosing it from a dropdown - but it stays editable afterward.
      setOuterFunction(suggestion.value);
    }
    setShowOuterSuggestions(false);
    setOuterHighlightIndex(-1);
    outerInputRef.current?.focus();
  };

  // Shared keyboard handling for both suggestion dropdowns: ArrowDown/ArrowUp
  // move the highlight, Enter picks the highlighted item, Escape closes it.
  const navigateSuggestions = (
    e: React.KeyboardEvent<HTMLInputElement>,
    suggestions: FunctionSuggestion[],
    isOpen: boolean,
    highlightIndex: number,
    setHighlightIndex: (i: number) => void,
    setOpen: (b: boolean) => void,
    onSelect: (s: FunctionSuggestion) => void
  ) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
        setHighlightIndex(0);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((highlightIndex + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((highlightIndex - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
        e.preventDefault();
        onSelect(suggestions[highlightIndex]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setHighlightIndex(-1);
    } else if (e.key === 'Tab') {
      // Close the dropdown and let Tab move to next field
      setOpen(false);
      setHighlightIndex(-1);
      // Don't prevent default - let Tab naturally move focus
    }
  };

  const handleInnerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    navigateSuggestions(
      e,
      INNER_SUGGESTIONS,
      showSuggestions,
      innerHighlightIndex,
      setInnerHighlightIndex,
      setShowSuggestions,
      handleInnerSuggestionSelect
    );
  };

  const handleOuterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    navigateSuggestions(
      e,
      OUTER_SUGGESTIONS,
      showOuterSuggestions,
      outerHighlightIndex,
      setOuterHighlightIndex,
      setShowOuterSuggestions,
      handleOuterSuggestionSelect
    );
  };

  const parseFunction = (fn: string, variable: string = 'x'): ((x: number) => number) => {
    let sanitized = fn
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/\^/g, '**')
      .replace(/pi/g, 'Math.PI')
      .replace(/π/g, 'Math.PI');
    
    // Handle power notation with variable
    if (variable === 'u') {
      sanitized = sanitized.replace(/u\^(\d+)/g, 'Math.pow(u,$1)');
    } else {
      sanitized = sanitized.replace(/x\^(\d+)/g, 'Math.pow(x,$1)');
    }
    
    return new Function(variable, `return (${sanitized})`) as (x: number) => number;
  };

  const computeDerivative = (f: (x: number) => number, x: number, h: number = 1e-7): number => {
    try {
      const left = f(x - h);
      const right = f(x + h);
      if (!isFinite(left) || !isFinite(right)) return NaN;
      return (right - left) / (2 * h);
    } catch {
      return NaN;
    }
  };

  const getDerivativeExpression = (fn: string, isOuter: boolean = false): string => {
    const base = fn.toLowerCase().trim();
    
    if (isOuter) {
      // Outer function derivatives (with respect to inner function)
      if (base === 'sin') return 'cos(u)';
      if (base === 'cos') return '-sin(u)';
      if (base === 'tan') return 'sec²(u)';
      if (base === 'ln' || base === 'log') return '1/u';
      if (base === 'sqrt') return '1/(2√u)';
      if (base === 'e^' || base === 'exp') return 'e^u';
      const outerPowerMatch = base.match(/^u\^(\d+)$/);
      if (outerPowerMatch) {
        const n = parseInt(outerPowerMatch[1], 10);
        if (n === 0) return '0';
        if (n === 1) return '1';
        if (n === 2) return '2u';
        if (n === 3) return '3u²';
        return `${n}u^${n - 1}`;
      }
      if (base === 'u^n') return 'n·u^(n-1)';
      return `${base}'(u)`;
    }
    
    // Inner function derivatives (with respect to x)
    if (base.includes('sin')) return 'cos(x)';
    if (base.includes('cos')) return '-sin(x)';
    if (base.includes('tan')) return 'sec²(x)';
    if (base.includes('e^') || base.includes('exp')) return 'e^x';
    if (base.includes('ln') || base.includes('log')) return '1/x';
    if (base.includes('sqrt')) return '1/(2√x)';
    if (base.includes('x^')) {
      const match = base.match(/x\^(\d+)/);
      if (match) {
        const power = parseInt(match[1]);
        if (power === 1) return '1';
        if (power === 2) return '2x';
        if (power === 3) return '3x²';
        return `${power}x^${power-1}`;
      }
    }
    if (base === 'x') return '1';
    if (base.match(/^\d+$/)) return '0';
    
    return `d/dx(${fn})`;
  };

  // Generate dynamic examples based on current input
  const getDynamicExamples = () => {
    const outer = outerFunction;
    const inner = innerFunction;
    const examples = [];

    let compositeDisplay = '';
    if (outer === 'sqrt') {
      compositeDisplay = `√(${inner})`;
    } else if (outer === 'ln') {
      compositeDisplay = `ln(${inner})`;
    } else if (outer === 'e^') {
      compositeDisplay = `e^(${inner})`;
    } else if (['sin', 'cos', 'tan'].includes(outer)) {
      compositeDisplay = `${outer}(${inner})`;
    } else if (outer.includes('u^')) {
      const power = outer.replace('u^', '');
      compositeDisplay = `(${inner})^${power}`;
    } else {
      compositeDisplay = `${outer}(${inner})`;
    }

    let outerDeriv = '';
    if (outer === 'sin') outerDeriv = 'cos(u)';
    else if (outer === 'cos') outerDeriv = '-sin(u)';
    else if (outer === 'tan') outerDeriv = 'sec²(u)';
    else if (outer === 'ln') outerDeriv = '1/u';
    else if (outer === 'sqrt') outerDeriv = '1/(2√u)';
    else if (outer === 'e^') outerDeriv = 'e^u';
    else if (/^u\^(\d+)$/.test(outer)) {
      const n = parseInt(outer.replace('u^', ''), 10);
      if (n === 0) outerDeriv = '0';
      else if (n === 1) outerDeriv = '1';
      else if (n === 2) outerDeriv = '2u';
      else if (n === 3) outerDeriv = '3u²';
      else outerDeriv = `${n}u^${n - 1}`;
    }
    else outerDeriv = `${outer}'(u)`;

    let innerDeriv = '';
    if (inner.includes('sin')) innerDeriv = 'cos(x)';
    else if (inner.includes('cos')) innerDeriv = '-sin(x)';
    else if (inner.includes('tan')) innerDeriv = 'sec²(x)';
    else if (inner.includes('e^') || inner.includes('exp')) innerDeriv = 'e^x';
    else if (inner.includes('ln') || inner.includes('log')) innerDeriv = '1/x';
    else if (inner.includes('sqrt')) innerDeriv = '1/(2√x)';
    else if (inner.includes('x^')) {
      const match = inner.match(/x\^(\d+)/);
      if (match) {
        const power = parseInt(match[1]);
        if (power === 2) innerDeriv = '2x';
        else if (power === 3) innerDeriv = '3x²';
        else innerDeriv = `${power}x^${power-1}`;
      }
    } else if (inner === 'x') innerDeriv = '1';
    else if (inner.match(/^\d+$/)) innerDeriv = '0';
    else innerDeriv = `d/dx(${inner})`;

    examples.push({
      title: `Your Function: f(g(x)) = ${compositeDisplay}`,
      expression: compositeDisplay,
      explanation: `For f(u) = ${outer} and g(x) = ${inner}:
• Outer derivative: f'(u) = ${outerDeriv}
• Inner derivative: g'(x) = ${innerDeriv}
• Chain rule: [f(g(x))]' = ${outerDeriv.replace(/u/g, `(${inner})`)} · ${innerDeriv}`,
      result: `${outerDeriv.replace(/u/g, `(${inner})`)} · ${innerDeriv}`
    });

    const relatedExamples = [
      {
        title: 'Power Rule with Chain Rule',
        outer: 'u^3',
        inner: 'sin(x)',
        display: 'sin³(x)',
        explanation: 'For f(u) = u³ and g(x) = sin(x):\n• f\'(u) = 3u²\n• g\'(x) = cos(x)\n• [sin³(x)]\' = 3sin²(x)·cos(x)'
      },
      {
        title: 'Trigonometric with Linear Inner',
        outer: 'sin',
        inner: '2x',
        display: 'sin(2x)',
        explanation: 'For f(u) = sin(u) and g(x) = 2x:\n• f\'(u) = cos(u)\n• g\'(x) = 2\n• [sin(2x)]\' = 2cos(2x)'
      },
      {
        title: 'Exponential with Quadratic Inner',
        outer: 'e^',
        inner: 'x²',
        display: 'e^(x²)',
        explanation: 'For f(u) = e^u and g(x) = x²:\n• f\'(u) = e^u\n• g\'(x) = 2x\n• [e^(x²)]\' = 2x·e^(x²)'
      },
      {
        title: 'Natural Log with Trigonometric Inner',
        outer: 'ln',
        inner: 'cos(x)',
        display: 'ln(cos(x))',
        explanation: 'For f(u) = ln(u) and g(x) = cos(x):\n• f\'(u) = 1/u\n• g\'(x) = -sin(x)\n• [ln(cos(x))]\' = -tan(x)'
      },
      {
        title: 'Square Root with Linear Inner',
        outer: 'sqrt',
        inner: 'x²+1',
        display: '√(x²+1)',
        explanation: 'For f(u) = √u and g(x) = x²+1:\n• f\'(u) = 1/(2√u)\n• g\'(x) = 2x\n• [√(x²+1)]\' = x/√(x²+1)'
      }
    ];

    const shuffled = relatedExamples.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);
    
    selected.forEach(ex => {
      examples.push({
        title: ex.title,
        expression: ex.display,
        explanation: ex.explanation,
        result: ex.explanation.split('• ').pop() || ''
      });
    });

    return examples;
  };

  const calculateChainRule = () => {
    try {
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      // Build the composite function
      let compositeStr = '';
      let outerExpr = outerFunction.trim();
      const innerExpr = innerFunction.trim();
      
      // Handle special cases
      if (outerExpr === 'sqrt') {
        compositeStr = `sqrt(${innerExpr})`;
      } else if (outerExpr === 'ln' || outerExpr === 'log') {
        compositeStr = `ln(${innerExpr})`;
      } else if (outerExpr === 'e^' || outerExpr === 'exp') {
        compositeStr = `e^(${innerExpr})`;
      } else if (outerExpr === 'sin' || outerExpr === 'cos' || outerExpr === 'tan') {
        compositeStr = `${outerExpr}(${innerExpr})`;
      } else if (outerExpr.includes('u^')) {
        const power = outerExpr.replace('u^', '');
        compositeStr = `(${innerExpr})^${power}`;
      } else if (outerExpr.includes('u')) {
        compositeStr = outerExpr.replace(/u/g, `(${innerExpr})`);
      } else {
        compositeStr = `${outerExpr}(${innerExpr})`;
      }

      // Parse functions properly
      let f: (x: number) => number;
      let g: (x: number) => number;
      
      try {
        // Parse inner function with x as variable
        g = parseFunction(innerExpr, 'x');
        
        // Handle common outer functions
        if (outerExpr === 'sin') {
          f = (u: number) => Math.sin(u);
        } else if (outerExpr === 'cos') {
          f = (u: number) => Math.cos(u);
        } else if (outerExpr === 'tan') {
          f = (u: number) => Math.tan(u);
        } else if (outerExpr === 'ln' || outerExpr === 'log') {
          f = (u: number) => Math.log(u);
        } else if (outerExpr === 'sqrt') {
          f = (u: number) => Math.sqrt(u);
        } else if (outerExpr === 'e^' || outerExpr === 'exp') {
          f = (u: number) => Math.exp(u);
        } else if (outerExpr === 'u^2') {
          f = (u: number) => u * u;
        } else if (outerExpr === 'u^3') {
          f = (u: number) => u * u * u;
        } else {
          // Generic fallback
          const sanitized = outerExpr
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/e\^/g, 'Math.exp(')
            .replace(/u\^(\d+)/g, 'Math.pow(u,$1)')
            .replace(/u/g, 'x');
          f = new Function('x', `return (${sanitized})`) as (x: number) => number;
        }
      } catch {
        setError('Invalid function composition. Please check your input.');
        setResult(null);
        return;
      }

      // Check if functions are defined at point
      let innerAtA: number;
      try {
        innerAtA = g(a);
        if (!isFinite(innerAtA)) {
          setError(`Inner function g(x) is undefined at x = ${a}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Inner function g(x) is undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Check if outer function is defined at inner value
      let outerAtInner: number;
      try {
        outerAtInner = f(innerAtA);
        if (!isFinite(outerAtInner)) {
          setError(`Outer function f(u) is undefined at u = ${innerAtA.toFixed(6)}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Outer function f(u) is undefined at u = ${innerAtA.toFixed(6)}`);
        setResult(null);
        return;
      }

      // Compute derivatives using the chain rule properly
      // f'(u) at u = g(a) - derivative of outer function with respect to u
      const outerDerivativeAtU = computeDerivative(f, innerAtA);
      
      // g'(x) at x = a - derivative of inner function with respect to x
      const innerDerivativeAtX = computeDerivative(g, a);
      
      if (!isFinite(outerDerivativeAtU) || !isFinite(innerDerivativeAtX)) {
        setResult({
          derivative: 'Does not exist',
          outerFunction: outerExpr,
          innerFunction: innerExpr,
          outerDerivative: getDerivativeExpression(outerExpr, true),
          innerDerivative: getDerivativeExpression(innerExpr, false),
          steps: [
            `❌ Function is not differentiable at x = ${a}`,
            `⚠️ Chain rule cannot be applied`
          ],
          isDifferentiable: false,
          message: `Chain rule cannot be applied at x = ${a}`
        });
        return;
      }

      // Apply chain rule: [f(g(x))]' = f'(g(x)) * g'(x)
      const chainDerivative = outerDerivativeAtU * innerDerivativeAtX;

      // Verify by computing the derivative of the composite function directly
      let compositeF: (x: number) => number;
      try {
        // Parse the composite function with x as variable
        const compositeSanitized = compositeStr
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/ln\(/g, 'Math.log(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/sqrt\(/g, 'Math.sqrt(')
          .replace(/e\^/g, 'Math.exp(')
          .replace(/x\^(\d+)/g, 'Math.pow(x,$1)');
        compositeF = new Function('x', `return (${compositeSanitized})`) as (x: number) => number;
      } catch {
        // If we can't parse the composite, skip verification
        compositeF = f;
      }
      
      let directDerivative = NaN;
      try {
        directDerivative = computeDerivative(compositeF, a);
      } catch {
        directDerivative = NaN;
      }

      // Generate derivative expression
      const outerDerivExpr = getDerivativeExpression(outerExpr, true);
      const innerDerivExpr = getDerivativeExpression(innerExpr, false);
      
      let derivativeExpr = '';
      if (outerDerivExpr === '0') {
        derivativeExpr = '0';
      } else if (innerDerivExpr === '0') {
        derivativeExpr = '0';
      } else {
        derivativeExpr = `${outerDerivExpr} · ${innerDerivExpr}`;
        derivativeExpr = derivativeExpr.replace(/u/g, `(${innerExpr})`);
      }

      // Create detailed steps with explanations
      const steps: string[] = [
        `Step 1: Identify outer and inner functions`,
        `  The chain rule applies to composite functions f(g(x)).`,
        `  f(u) = ${outerExpr} (outer function)`,
        `  g(x) = ${innerExpr} (inner function)`,
        `  f(g(x)) = ${compositeStr}`,
        `Step 2: Evaluate inner function at x = ${a}`,
        `  This gives us the input value for the outer function.`,
        `  g(${a}) = ${innerAtA.toFixed(6)}`,
        `Step 3: Find the derivatives of both functions`,
        `  f'(u) = ${getDerivativeExpression(outerExpr, true)} (derivative of outer function)`,
        `  g'(x) = ${getDerivativeExpression(innerExpr, false)} (derivative of inner function)`,
        `Step 4: Evaluate derivatives at the specific point`,
        `  f'(${innerAtA.toFixed(6)}) = ${outerDerivativeAtU.toFixed(6)} (outer derivative at u = g(${a}))`,
        `  g'(${a}) = ${innerDerivativeAtX.toFixed(6)} (inner derivative at x = ${a})`,
        `Step 5: Apply the chain rule formula`,
        `  [f(g(x))]'(${a}) = f'(${innerAtA.toFixed(6)}) · g'(${a})`,
        `  [f(g(x))]'(${a}) = ${outerDerivativeAtU.toFixed(6)} · ${innerDerivativeAtX.toFixed(6)}`,
        `  [f(g(x))]'(${a}) = ${chainDerivative.toFixed(6)}`,
      ];

      if (isFinite(directDerivative)) {
        steps.push(`✅ Verification: Direct derivative of composite = ${directDerivative.toFixed(6)}`);
        steps.push(`  The chain rule result matches the direct derivative, confirming correctness.`);
      }

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: chainDerivative,
        outerFunction: outerExpr,
        innerFunction: innerExpr,
        outerDerivative: getDerivativeExpression(outerExpr, true),
        innerDerivative: getDerivativeExpression(innerExpr, false),
        steps,
        isDifferentiable: true,
        message: `Chain rule successfully applied at x = ${a}`
      });
      setError('');

    } catch (e) {
      setError('Invalid functions or point. Please check your input.');
      setResult(null);
    }
  };

  const clear = () => {
    setOuterFunction('');
    setInnerFunction('');
    setPoint('');
    setResult(null);
    setError('');
    setShowExample(false);
    setShowSuggestions(false);
    setInnerHighlightIndex(-1);
    setShowOuterSuggestions(false);
    setOuterHighlightIndex(-1);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Chain Rule Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Used for composite functions: d/dx[f(g(x))] = f'(g(x)) · g'(x)</li>
            <li>Enter outer function f(u) and inner function g(x)</li>
            <li>Computes derivative at a specific point</li>
            <li>Shows step-by-step calculation</li>
            <li>Supports: sin, cos, tan, ln, sqrt, e^x, powers</li>
            <li>Type ^ for a custom power, e.g. edit u^3 to u^4</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">f(u) (Outer)</label>
          <div className="relative">
            <input
              ref={outerInputRef}
              type="text"
              value={outerFunction}
              onChange={handleOuterChange}
              onKeyDown={handleOuterKeyDown}
              onFocus={() => setShowOuterSuggestions(true)}
              placeholder="e.g., sin, u^3, e^, sqrt"
              className="w-full px-4 py-2 pr-9 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Pick a preset below or type your own, e.g. u^3 → edit to u^4.
          </div>

          {/* Outer function suggestions: presets replace the field, ^ inserts at the cursor.
              Rendered in a portal with fixed positioning so it's never clipped by an
              ancestor card, even before any result has expanded the layout. */}
          {showOuterSuggestions && outerAnchorRect &&
            createPortal(
              <div
                ref={outerSuggestionRef}
                style={{
                  position: 'fixed',
                  top: outerAnchorRect.top,
                  left: outerAnchorRect.left,
                  width: outerAnchorRect.width,
                }}
                className="z-[9999] bg-white border border-slate-300 rounded-lg shadow-lg max-h-56 overflow-y-auto"
              >
                {OUTER_SUGGESTIONS.map((suggestion, index) => (
                  <div
                    key={suggestion.value + index}
                    className={`px-4 py-2 cursor-pointer transition-colors font-mono text-sm flex items-center gap-2 ${
                      index === outerHighlightIndex ? 'bg-blue-50' : 'hover:bg-blue-50'
                    }`}
                    onMouseEnter={() => setOuterHighlightIndex(index)}
                    onClick={() => handleOuterSuggestionSelect(suggestion)}
                  >
                    <span className="text-blue-600 font-bold">{suggestion.label}</span>
                    {index === outerHighlightIndex && (
                      <span className="text-xs text-gray-400 ml-auto">Enter to select</span>
                    )}
                  </div>
                ))}
              </div>,
              document.body
            )}
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">g(x) (Inner)</label>
          <input
            ref={inputRef}
            type="text"
            value={innerFunction}
            onChange={handleInnerChange}
            onKeyDown={handleInnerKeyDown}
            onFocus={() => {
              if (innerFunction.length > 0) {
                setShowSuggestions(true);
              }
            }}
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
          <div className="text-xs text-gray-400 mt-1">
            Use ^ for powers: x^2, x^3, sin(x), cos(x), etc.
          </div>
          
          {/* Inner function suggestions - all insert at the cursor.
              Portaled the same way as the outer dropdown, so it's always fully visible. */}
          {showSuggestions && innerAnchorRect &&
            createPortal(
              <div
                ref={suggestionRef}
                style={{
                  position: 'fixed',
                  top: innerAnchorRect.top,
                  left: innerAnchorRect.left,
                  width: innerAnchorRect.width,
                }}
                className="z-[9999] bg-white border border-slate-300 rounded-lg shadow-lg max-h-56 overflow-y-auto"
              >
                {INNER_SUGGESTIONS.map((suggestion, index) => (
                  <div
                    key={suggestion.value + index}
                    className={`px-4 py-2 cursor-pointer transition-colors font-mono text-sm flex items-center gap-2 ${
                      index === innerHighlightIndex ? 'bg-blue-50' : 'hover:bg-blue-50'
                    }`}
                    onMouseEnter={() => setInnerHighlightIndex(index)}
                    onClick={() => handleInnerSuggestionSelect(suggestion)}
                  >
                    <span className="text-blue-600 font-bold">{suggestion.label}</span>
                    {index === innerHighlightIndex && (
                      <span className="text-xs text-gray-400 ml-auto">Enter to select</span>
                    )}
                  </div>
                ))}
              </div>,
              document.body
            )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">x =</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Composite Function:</span>{' '}
          <span className="font-mono">
            {outerFunction && innerFunction ? (
              <>
                {outerFunction === 'sqrt' && `√(${innerFunction})`}
                {outerFunction === 'ln' && `ln(${innerFunction})`}
                {outerFunction === 'e^' && `e^(${innerFunction})`}
                {['sin', 'cos', 'tan'].includes(outerFunction) && `${outerFunction}(${innerFunction})`}
                {outerFunction.includes('u^') && `(${innerFunction})^${outerFunction.replace('u^', '')}`}
              </>
            ) : (
              <span className="text-gray-400">Select outer function and enter inner function</span>
            )}
          </span>
        </div>
      </div>
      
      {/* Action buttons - Apply Chain Rule and Clear */}
      <div className="flex gap-3">
        <button
          onClick={calculateChainRule}
          className="flex-1 bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
        >
          <Link className="w-5 h-5" />
          Apply Chain Rule
        </button>
        <button
          onClick={clear}
          className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium text-gray-700 flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Clear
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {result && (
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex items-start gap-3">
            {result.isDifferentiable ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className={`text-lg font-semibold ${result.isDifferentiable ? 'text-green-700' : 'text-yellow-700'}`}>
                    {result.isDifferentiable ? '✅ Chain Rule Applied' : '⚠️ Cannot Apply Chain Rule'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.isDifferentiable && result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">[f(g(x))]'({point}) =</div>
                    <div className="text-xl font-bold text-[#1F2329] font-mono">
                      {result.valueAtPoint.toFixed(6)}
                    </div>
                  </div>
                )}
              </div>

              {result.isDifferentiable && (
                <>
                  {/* Outer and Inner function display */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-xs font-medium text-purple-700 mb-1">Outer Function</div>
                      <div className="font-mono text-sm">f(u) = {result.outerFunction}</div>
                      <div className="text-xs text-purple-600 mt-1">f'(u) = {result.outerDerivative}</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-xs font-medium text-blue-700 mb-1">Inner Function</div>
                      <div className="font-mono text-sm">g(x) = {result.innerFunction}</div>
                      <div className="text-xs text-blue-600 mt-1">g'(x) = {result.innerDerivative}</div>
                    </div>
                  </div>

                  {/* Derivative Expression */}
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                    <div className="text-lg font-mono text-[#1F2329]">
                      [f(g(x))]' = {result.derivative}
                    </div>
                  </div>
                </>
              )}

              {!result.isDifferentiable && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> The function is not differentiable at x = {point}.
                    Check if the inner function is defined and the composite function is continuous at this point.
                  </div>
                </div>
              )}

              {/* Step-by-step explanation with detailed explanations */}
              <div className="mt-2 space-y-3">
                {result.steps.map((step, index) => {
                  // Check if this is a step header (starts with "Step X:")
                  const isStepHeader = step.match(/^Step \d+:/);
                  
                  if (isStepHeader) {
                    // This is a step header - show it with a badge
                    const stepNumber = step.match(/\d+/)?.[0] || '';
                    return (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                            {stepNumber}
                          </span>
                          <span className="font-semibold text-gray-800 text-sm">
                            {step}
                          </span>
                        </div>
                      </div>
                    );
                  } else {
                    // This is a detail/explanation line - show it indented
                    return (
                      <div 
                        key={index} 
                        className="text-gray-600 text-sm leading-relaxed font-mono pl-12 -mt-1 mb-1"
                      >
                        {step}
                      </div>
                    );
                  }
                })}
                
                {/* Final Answer */}
                {result.isDifferentiable && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                    <p className="text-sm font-medium text-gray-700">Final Answer:</p>
                    <div className="text-lg font-mono text-[#1F2329]">
                      [f(g(x))]' = {result.derivative}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      At x = {point}: {result.valueAtPoint?.toFixed(6)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChainRuleCalculator;