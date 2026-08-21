// components/calculators/ChainRuleCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Link } from 'lucide-react';

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

  const parseFunction = (fn: string): ((x: number) => number) => {
    const sanitized = fn
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/\^/g, '**')
      .replace(/pi/g, 'Math.PI')
      .replace(/π/g, 'Math.PI')
      .replace(/e(?![xp])/g, 'Math.E');
    return new Function('x', `return (${sanitized})`) as (x: number) => number;
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
      if (base === 'u^2') return '2u';
      if (base === 'u^3') return '3u²';
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

      // Parse and evaluate composite function
      let f: (x: number) => number;
      let g: (x: number) => number;
      
      try {
        f = parseFunction(compositeStr);
        g = parseFunction(innerExpr);
      } catch {
        setError('Invalid function composition. Please check your input.');
        setResult(null);
        return;
      }

      // Check if functions are defined at point
      let innerAtA: number, compositeAtA: number;
      try {
        innerAtA = g(a);
        compositeAtA = f(a);
        if (!isFinite(innerAtA) || !isFinite(compositeAtA)) {
          setError(`Function is undefined at x = ${a}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Function is undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Compute derivatives
      const innerDerivativeAtA = computeDerivative(g, a);
      const compositeDerivativeAtA = computeDerivative(f, a);
      
      if (!isFinite(innerDerivativeAtA) || !isFinite(compositeDerivativeAtA)) {
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

      // Apply chain rule: f(g(x))' = f'(g(x)) * g'(x)
      // For numerical verification, compute f'(g(a)) * g'(a)
      const outerDerivativeAtA = computeDerivative(f, innerAtA);
      const chainDerivative = outerDerivativeAtA * innerDerivativeAtA;

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
        // Replace u with inner function for display
        derivativeExpr = derivativeExpr.replace(/u/g, `(${innerExpr})`);
      }

      const steps: string[] = [
        '📐 Chain Rule: [f(g(x))]\' = f\'(g(x)) · g\'(x)',
        '',
        `Step 1: Identify outer and inner functions`,
        `  f(u) = ${outerExpr} (outer function)`,
        `  g(x) = ${innerExpr} (inner function)`,
        `  f(g(x)) = ${compositeStr}`,
        '',
        `Step 2: Find derivatives`,
        `  f'(u) = ${getDerivativeExpression(outerExpr, true)}`,
        `  g'(x) = ${getDerivativeExpression(innerExpr, false)}`,
        '',
        `Step 3: Evaluate at x = ${a}`,
        `  g(${a}) = ${innerAtA.toFixed(6)}`,
        `  g'(${a}) = ${innerDerivativeAtA.toFixed(6)}`,
        `  f'(${innerAtA.toFixed(6)}) = ${outerDerivativeAtA.toFixed(6)}`,
        '',
        `Step 4: Apply chain rule`,
        `  [f(g(x))]'(${a}) = f'(${innerAtA.toFixed(6)}) · ${innerDerivativeAtA.toFixed(6)}`,
        `  [f(g(x))]'(${a}) = ${outerDerivativeAtA.toFixed(6)} · ${innerDerivativeAtA.toFixed(6)}`,
        `  [f(g(x))]'(${a}) = ${chainDerivative.toFixed(6)}`
      ];

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

  const getOuterFunctionExamples = () => {
    return [
      { label: 'sin', value: 'sin' },
      { label: 'cos', value: 'cos' },
      { label: 'tan', value: 'tan' },
      { label: 'ln', value: 'ln' },
      { label: 'sqrt', value: 'sqrt' },
      { label: 'e^x', value: 'e^' },
      { label: 'u²', value: 'u^2' },
      { label: 'u³', value: 'u^3' },
    ];
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
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(u) (Outer)</label>
          <select
            value={outerFunction}
            onChange={(e) => setOuterFunction(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          >
            {getOuterFunctionExamples().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">g(x) (Inner)</label>
          <input
            type="text"
            value={innerFunction}
            onChange={(e) => setInnerFunction(e.target.value)}
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
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
            {outerFunction === 'sqrt' && `√(${innerFunction})`}
            {outerFunction === 'ln' && `ln(${innerFunction})`}
            {outerFunction === 'e^' && `e^(${innerFunction})`}
            {['sin', 'cos', 'tan'].includes(outerFunction) && `${outerFunction}(${innerFunction})`}
            {outerFunction.includes('u^') && `(${innerFunction})^${outerFunction.replace('u^', '')}`}
          </span>
        </div>
      </div>

      <button
        onClick={calculateChainRule}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Link className="w-5 h-5" />
        Apply Chain Rule
      </button>

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

              <details>
                <summary className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-800">
                  Show Calculation Steps
                </summary>
                <div className="mt-2 space-y-1 font-mono text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {result.steps.map((step, index) => (
                    <div key={index} className="py-0.5">
                      {step}
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChainRuleCalculator;