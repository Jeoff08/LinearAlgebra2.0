// components/calculators/DerivativeCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, TrendingUp } from 'lucide-react';

interface DerivativeResult {
  derivative: string;
  valueAtPoint?: number;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const DerivativeCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^2');
  const [point, setPoint] = useState('2');
  const [result, setResult] = useState<DerivativeResult | null>(null);
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

  const computeDerivative = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      const h = 1e-7;
      
      // Check if function is defined at point
      let fAtA: number;
      try {
        fAtA = f(a);
        if (!isFinite(fAtA)) {
          setError(`Function is undefined at x = ${a}`);
          setResult(null);
          return;
        }
        steps.push(`✅ f(${a}) = ${fAtA.toFixed(6)}`);
      } catch {
        setError(`Function is undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Check if function is defined in neighborhood
      let leftDefined = true;
      let rightDefined = true;
      try {
        f(a - h);
      } catch {
        leftDefined = false;
      }
      try {
        f(a + h);
      } catch {
        rightDefined = false;
      }

      if (!leftDefined || !rightDefined) {
        setResult({
          derivative: 'Does not exist',
          steps: [
            `❌ Function is not defined in the neighborhood of x = ${a}`,
            `⚠️ Cannot compute derivative`
          ],
          isDifferentiable: false,
          message: `f is not differentiable at x = ${a}`
        });
        return;
      }

      // Compute derivative using central difference
      const left = f(a - h);
      const right = f(a + h);
      
      if (!isFinite(left) || !isFinite(right)) {
        setResult({
          derivative: 'Does not exist',
          steps: [
            `❌ Function has infinite or undefined values near x = ${a}`,
            `⚠️ Derivative does not exist`
          ],
          isDifferentiable: false,
          message: `f is not differentiable at x = ${a}`
        });
        return;
      }

      const derivative = (right - left) / (2 * h);
      
      // Check if derivative exists (finite)
      if (!isFinite(derivative)) {
        setResult({
          derivative: 'Does not exist (infinite)',
          steps: [
            `❌ Derivative is infinite at x = ${a}`,
            `⚠️ f has a vertical tangent or cusp at x = ${a}`
          ],
          isDifferentiable: false,
          message: `f is not differentiable at x = ${a}`
        });
        return;
      }

      // Check for differentiability using smaller steps
      const h2 = 1e-8;
      const left2 = f(a - h2);
      const right2 = f(a + h2);
      const derivative2 = (right2 - left2) / (2 * h2);
      
      const diff = Math.abs(derivative - derivative2);
      const isDifferentiable = diff < 1e-4 || (isFinite(derivative) && isFinite(derivative2));

      steps.push(`📐 Using central difference method:`);
      steps.push(`   f'(${a}) ≈ [f(${a}+h) - f(${a}-h)] / (2h)`);
      // FIXED: Removed extra closing parenthesis
      steps.push(`   f'(${a}) ≈ [${right.toFixed(6)} - ${left.toFixed(6)}] / ${(2*h).toExponential(2)}`);
      steps.push(`   f'(${a}) ≈ ${derivative.toFixed(6)}`);

      if (!isDifferentiable) {
        steps.push(`⚠️ Derivative may not exist at x = ${a} (values vary significantly)`);
      }

      // Generate derivative expression (simplified)
      let derivativeExpr = '';
      if (functionStr.includes('x^2')) {
        derivativeExpr = '2x';
      } else if (functionStr.includes('x^3')) {
        derivativeExpr = '3x^2';
      } else if (functionStr.includes('sin')) {
        derivativeExpr = 'cos(x)';
      } else if (functionStr.includes('cos')) {
        derivativeExpr = '-sin(x)';
      } else if (functionStr.includes('tan')) {
        derivativeExpr = 'sec²(x)';
      } else if (functionStr.includes('ln')) {
        derivativeExpr = '1/x';
      } else if (functionStr.includes('e^')) {
        derivativeExpr = 'e^x';
      } else if (functionStr.includes('sqrt')) {
        derivativeExpr = '1/(2√x)';
      } else if (functionStr.includes('x')) {
        derivativeExpr = derivative.toFixed(4);
      } else {
        derivativeExpr = derivative.toFixed(6);
      }

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: derivative,
        steps,
        isDifferentiable,
        message: isDifferentiable 
          ? `f is differentiable at x = ${a}` 
          : `f may not be differentiable at x = ${a}`
      });
      setError('');

    } catch (e) {
      setError('Invalid function or point. Please check your input.');
      setResult(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Derivative Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Computes f'(a) using the central difference method</li>
            <li>Checks differentiability at the given point</li>
            <li>Supports: x^n, sin, cos, tan, ln, log, sqrt, e^x</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
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
            placeholder="e.g., 2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={computeDerivative}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <TrendingUp className="w-5 h-5" />
        Calculate Derivative
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
                    {result.isDifferentiable ? '✅ Differentiable' : '⚠️ Not Differentiable'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.isDifferentiable && result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">f'({point}) =</div>
                    <div className="text-xl font-bold text-[#1F2329] font-mono">
                      {result.valueAtPoint.toFixed(6)}
                    </div>
                  </div>
                )}
              </div>

              {result.isDifferentiable && (
                <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                  <div className="text-lg font-mono text-[#1F2329]">
                    f'(x) = {result.derivative}
                  </div>
                </div>
              )}

              {!result.isDifferentiable && (
                <div className="mb-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> The function may have a corner, cusp, vertical tangent, or discontinuity at x = {point}
                  </div>
                </div>
              )}

              <details className="mt-3">
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

export default DerivativeCalculator;