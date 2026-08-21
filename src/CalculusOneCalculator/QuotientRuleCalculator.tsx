// components/calculators/QuotientRuleCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Divide } from 'lucide-react';

interface QuotientRuleResult {
  derivative: string;
  valueAtPoint?: number;
  numerator: string;
  denominator: string;
  numeratorPrime: string;
  denominatorPrime: string;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const QuotientRuleCalculator: React.FC = () => {
  const [numerator, setNumerator] = useState('x^2');
  const [denominator, setDenominator] = useState('sin(x)');
  const [point, setPoint] = useState('1');
  const [result, setResult] = useState<QuotientRuleResult | null>(null);
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

  const calculateQuotientRule = () => {
    try {
      const f = parseFunction(numerator);
      const g = parseFunction(denominator);
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      // Check if denominator is defined at point and not zero
      let numeratorAtA: number, denominatorAtA: number;
      try {
        numeratorAtA = f(a);
        denominatorAtA = g(a);
        if (!isFinite(numeratorAtA) || !isFinite(denominatorAtA)) {
          setError(`One or both functions are undefined at x = ${a}`);
          setResult(null);
          return;
        }
        if (Math.abs(denominatorAtA) < 1e-10) {
          setError(`Denominator is zero at x = ${a} (division by zero)`);
          setResult(null);
          return;
        }
      } catch {
        setError(`One or both functions are undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Compute derivatives at point
      const numeratorPrimeAtA = computeDerivative(f, a);
      const denominatorPrimeAtA = computeDerivative(g, a);
      
      if (!isFinite(numeratorPrimeAtA) || !isFinite(denominatorPrimeAtA)) {
        setResult({
          derivative: 'Does not exist',
          numerator: numerator,
          denominator: denominator,
          numeratorPrime: getDerivativeExpression(numerator),
          denominatorPrime: getDerivativeExpression(denominator),
          steps: [
            `❌ One or both functions are not differentiable at x = ${a}`,
            `⚠️ Quotient rule cannot be applied`
          ],
          isDifferentiable: false,
          message: `Quotient rule cannot be applied at x = ${a}`
        });
        return;
      }

      // Apply quotient rule: (u/v)' = (u'v - uv') / v²
      const numerator1 = numeratorPrimeAtA * denominatorAtA;
      const numerator2 = numeratorAtA * denominatorPrimeAtA;
      const quotientDerivative = (numerator1 - numerator2) / (denominatorAtA * denominatorAtA);

      // Generate derivative expression
      const numExpr = numerator.trim();
      const denExpr = denominator.trim();
      const numPrimeExpr = getDerivativeExpression(numerator);
      const denPrimeExpr = getDerivativeExpression(denominator);
      
      let derivativeExpr = '';
      if (numPrimeExpr === '0' && denPrimeExpr === '0') {
        derivativeExpr = '0';
      } else if (numPrimeExpr === '0') {
        derivativeExpr = `(-${numExpr}·${denPrimeExpr}) / ${denExpr}²`;
      } else if (denPrimeExpr === '0') {
        derivativeExpr = `${numPrimeExpr} / ${denExpr}`;
      } else {
        derivativeExpr = `(${numPrimeExpr}·${denExpr} - ${numExpr}·${denPrimeExpr}) / ${denExpr}²`;
      }

      const steps: string[] = [
        '📐 Quotient Rule: (u/v)\' = (u\'v - uv\') / v²',
        '',
        `Step 1: Identify numerator and denominator`,
        `  u = ${numExpr}`,
        `  v = ${denExpr}`,
        '',
        `Step 2: Find derivatives`,
        `  u' = ${numPrimeExpr}`,
        `  v' = ${denPrimeExpr}`,
        '',
        `Step 3: Evaluate at x = ${a}`,
        `  u(${a}) = ${numeratorAtA.toFixed(6)}`,
        `  v(${a}) = ${denominatorAtA.toFixed(6)}`,
        `  u'(${a}) = ${numeratorPrimeAtA.toFixed(6)}`,
        `  v'(${a}) = ${denominatorPrimeAtA.toFixed(6)}`,
        '',
        `Step 4: Apply quotient rule`,
        `  (u/v)'(${a}) = (u'(${a})·v(${a}) - u(${a})·v'(${a})) / v(${a})²`,
        `  (u/v)'(${a}) = (${numeratorPrimeAtA.toFixed(6)}·${denominatorAtA.toFixed(6)} - ${numeratorAtA.toFixed(6)}·${denominatorPrimeAtA.toFixed(6)}) / ${denominatorAtA.toFixed(6)}²`,
        `  (u/v)'(${a}) = (${numerator1.toFixed(6)} - ${numerator2.toFixed(6)}) / ${(denominatorAtA * denominatorAtA).toFixed(6)}`,
        `  (u/v)'(${a}) = ${quotientDerivative.toFixed(6)}`
      ];

      // Check if denominator is zero at any nearby point (for domain issues)
      const h = 1e-6;
      let domainWarning = '';
      try {
        const denomNear = g(a + h);
        if (Math.abs(denomNear) < 1e-8) {
          domainWarning = '⚠️ Warning: Denominator approaches zero near this point.';
        }
      } catch {
        // Ignore
      }
      if (domainWarning) {
        steps.push('', domainWarning);
      }

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: quotientDerivative,
        numerator: numExpr,
        denominator: denExpr,
        numeratorPrime: numPrimeExpr,
        denominatorPrime: denPrimeExpr,
        steps,
        isDifferentiable: true,
        message: `Quotient rule successfully applied at x = ${a}`
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
          <p className="font-medium">Quotient Rule Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Used for derivatives of quotients: d/dx[u(x)/v(x)] = (u'(x)·v(x) - u(x)·v'(x)) / v(x)²</li>
            <li>Enter numerator u(x) and denominator v(x)</li>
            <li>Computes derivative at a specific point</li>
            <li>Shows step-by-step calculation</li>
            <li>⚠️ Denominator must not be zero at the point of evaluation</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">u(x) (Numerator)</label>
          <input
            type="text"
            value={numerator}
            onChange={(e) => setNumerator(e.target.value)}
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">v(x) (Denominator)</label>
          <input
            type="text"
            value={denominator}
            onChange={(e) => setDenominator(e.target.value)}
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
        onClick={calculateQuotientRule}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Divide className="w-5 h-5" />
        Apply Quotient Rule
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
                    {result.isDifferentiable ? '✅ Quotient Rule Applied' : '⚠️ Cannot Apply Quotient Rule'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.isDifferentiable && result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">(u/v)'({point}) =</div>
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
                      <div className="text-xs font-medium text-purple-700 mb-1">u(x) (Numerator)</div>
                      <div className="font-mono text-sm">{result.numerator}</div>
                      <div className="text-xs text-purple-600 mt-1">u'(x) = {result.numeratorPrime}</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-xs font-medium text-blue-700 mb-1">v(x) (Denominator)</div>
                      <div className="font-mono text-sm">{result.denominator}</div>
                      <div className="text-xs text-blue-600 mt-1">v'(x) = {result.denominatorPrime}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                    <div className="text-lg font-mono text-[#1F2329]">
                      (u/v)' = {result.derivative}
                    </div>
                  </div>
                </>
              )}

              {!result.isDifferentiable && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> One or both functions are not differentiable at x = {point}.
                    Check if the functions are defined, continuous, and the denominator is non-zero at this point.
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

export default QuotientRuleCalculator;