// components/calculators/ProductRuleCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, FunctionSquare } from 'lucide-react';

interface ProductRuleResult {
  derivative: string;
  valueAtPoint?: number;
  u: string;
  v: string;
  uPrime: string;
  vPrime: string;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const ProductRuleCalculator: React.FC = () => {
  const [uFunction, setUFunction] = useState('x^2');
  const [vFunction, setVFunction] = useState('sin(x)');
  const [point, setPoint] = useState('1');
  const [result, setResult] = useState<ProductRuleResult | null>(null);
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

  const getDerivativeExpression = (fn: string): string => {
    const base = fn.toLowerCase().trim();
    
    // Common derivatives
    if (base.includes('sin')) {
      return 'cos(x)';
    }
    if (base.includes('cos')) {
      return '-sin(x)';
    }
    if (base.includes('tan')) {
      return 'sec²(x)';
    }
    if (base.includes('e^') || base.includes('exp')) {
      return 'e^x';
    }
    if (base.includes('ln') || base.includes('log')) {
      return '1/x';
    }
    if (base.includes('sqrt')) {
      return '1/(2√x)';
    }
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
    if (base === 'x') {
      return '1';
    }
    if (base.match(/^\d+$/)) {
      return '0';
    }
    
    return `d/dx(${fn})`;
  };

  const calculateProductRule = () => {
    try {
      const f = parseFunction(uFunction);
      const g = parseFunction(vFunction);
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      // Check if functions are defined at point
      let uAtA: number, vAtA: number;
      try {
        uAtA = f(a);
        vAtA = g(a);
        if (!isFinite(uAtA) || !isFinite(vAtA)) {
          setError(`One or both functions are undefined at x = ${a}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`One or both functions are undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Compute derivatives at point
      const uPrimeAtA = computeDerivative(f, a);
      const vPrimeAtA = computeDerivative(g, a);
      
      if (!isFinite(uPrimeAtA) || !isFinite(vPrimeAtA)) {
        setResult({
          derivative: 'Does not exist',
          u: uFunction,
          v: vFunction,
          uPrime: getDerivativeExpression(uFunction),
          vPrime: getDerivativeExpression(vFunction),
          steps: [
            `❌ One or both functions are not differentiable at x = ${a}`,
            `⚠️ Product rule cannot be applied`
          ],
          isDifferentiable: false,
          message: `Product rule cannot be applied at x = ${a}`
        });
        return;
      }

      // Apply product rule: (uv)' = u'v + uv'
      const productDerivative = uPrimeAtA * vAtA + uAtA * vPrimeAtA;

      // Generate derivative expression
      const uExpr = uFunction.trim();
      const vExpr = vFunction.trim();
      const uPrimeExpr = getDerivativeExpression(uFunction);
      const vPrimeExpr = getDerivativeExpression(vFunction);
      
      let derivativeExpr = '';
      if (uPrimeExpr === '0') {
        derivativeExpr = `${uAtA.toFixed(2)} · ${vPrimeExpr}`;
      } else if (vPrimeExpr === '0') {
        derivativeExpr = `${uPrimeExpr} · ${vAtA.toFixed(2)}`;
      } else {
        derivativeExpr = `${uPrimeExpr}·${vExpr} + ${uExpr}·${vPrimeExpr}`;
      }

      const steps: string[] = [
        '📐 Product Rule: (uv)\' = u\'v + uv\'',
        '',
        `Step 1: Identify u and v`,
        `  u = ${uExpr}`,
        `  v = ${vExpr}`,
        '',
        `Step 2: Find derivatives`,
        `  u' = ${uPrimeExpr}`,
        `  v' = ${vPrimeExpr}`,
        '',
        `Step 3: Evaluate at x = ${a}`,
        `  u(${a}) = ${uAtA.toFixed(6)}`,
        `  v(${a}) = ${vAtA.toFixed(6)}`,
        `  u'(${a}) = ${uPrimeAtA.toFixed(6)}`,
        `  v'(${a}) = ${vPrimeAtA.toFixed(6)}`,
        '',
        `Step 4: Apply product rule`,
        `  (uv)'(${a}) = u'(${a})·v(${a}) + u(${a})·v'(${a})`,
        `  (uv)'(${a}) = ${uPrimeAtA.toFixed(6)}·${vAtA.toFixed(6)} + ${uAtA.toFixed(6)}·${vPrimeAtA.toFixed(6)}`,
        `  (uv)'(${a}) = ${(uPrimeAtA * vAtA).toFixed(6)} + ${(uAtA * vPrimeAtA).toFixed(6)}`,
        `  (uv)'(${a}) = ${productDerivative.toFixed(6)}`
      ];

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: productDerivative,
        u: uExpr,
        v: vExpr,
        uPrime: uPrimeExpr,
        vPrime: vPrimeExpr,
        steps,
        isDifferentiable: true,
        message: `Product rule successfully applied at x = ${a}`
      });
      setError('');

    } catch (e) {
      setError('Invalid functions or point. Please check your input.');
      setResult(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Product Rule Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Used for derivatives of products: d/dx[u(x)·v(x)] = u'(x)·v(x) + u(x)·v'(x)</li>
            <li>Enter two functions u(x) and v(x)</li>
            <li>Computes derivative at a specific point</li>
            <li>Shows step-by-step calculation</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">u(x)</label>
          <input
            type="text"
            value={uFunction}
            onChange={(e) => setUFunction(e.target.value)}
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">v(x)</label>
          <input
            type="text"
            value={vFunction}
            onChange={(e) => setVFunction(e.target.value)}
            placeholder="e.g., sin(x)"
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

      <button
        onClick={calculateProductRule}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <FunctionSquare className="w-5 h-5" />
        Apply Product Rule
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
                    {result.isDifferentiable ? '✅ Product Rule Applied' : '⚠️ Cannot Apply Product Rule'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.isDifferentiable && result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">(uv)'({point}) =</div>
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
                      <div className="text-xs font-medium text-purple-700 mb-1">u(x)</div>
                      <div className="font-mono text-sm">{result.u}</div>
                      <div className="text-xs text-purple-600 mt-1">u'(x) = {result.uPrime}</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-xs font-medium text-blue-700 mb-1">v(x)</div>
                      <div className="font-mono text-sm">{result.v}</div>
                      <div className="text-xs text-blue-600 mt-1">v'(x) = {result.vPrime}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                    <div className="text-lg font-mono text-[#1F2329]">
                      (uv)' = {result.derivative}
                    </div>
                  </div>
                </>
              )}

              {!result.isDifferentiable && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> One or both functions are not differentiable at x = {point}.
                    Check if the functions are defined and continuous at this point.
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

export default ProductRuleCalculator;