// components/calculators/LogarithmicDifferentiationCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, LogIn } from 'lucide-react';

interface LogarithmicDifferentiationResult {
  derivative: string;
  valueAtPoint?: number;
  originalFunction: string;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const LogarithmicDifferentiationCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^x');
  const [point, setPoint] = useState('2');
  const [result, setResult] = useState<LogarithmicDifferentiationResult | null>(null);
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

  const isFunctionPositive = (f: (x: number) => number, x: number): boolean => {
    try {
      const val = f(x);
      return isFinite(val) && val > 0;
    } catch {
      return false;
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
        if (power === -1) return '-1/x²';
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

  const getLogDerivativeExpression = (fn: string): string => {
    // For functions like x^x, (sin x)^x, etc.
    if (fn.includes('^')) {
      const parts = fn.split('^');
      const base = parts[0].trim();
      const exponent = parts[1].trim();
      
      if (base === 'x' && exponent === 'x') {
        return 'ln(x) + 1';
      } else if (base === 'x' && exponent.includes('sin')) {
        return 'ln(x) * sin(x) + x * cos(x) / sin(x)';
      } else if (base.includes('sin') && exponent === 'x') {
        return 'ln(sin(x)) + x * cos(x) / sin(x)';
      } else if (base === 'x' && exponent.includes('x')) {
        return 'ln(x) * ' + exponent + ' + x * d/dx(' + exponent + ')';
      }
    }
    
    // For products like x*sin(x)
    if (fn.includes('*') && !fn.includes('^')) {
      const parts = fn.split('*');
      if (parts.length === 2) {
        const u = parts[0].trim();
        const v = parts[1].trim();
        return `${getDerivativeExpression(u)}/${u} + ${getDerivativeExpression(v)}/${v}`;
      }
    }
    
    // For general functions
    return `d/dx(ln(${fn}))`;
  };

  const calculateLogarithmicDerivative = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      // Check if function is defined at point
      let fAtA: number;
      try {
        fAtA = f(a);
        if (!isFinite(fAtA)) {
          setError(`Function is undefined at x = ${a}`);
          setResult(null);
          return;
        }
        if (Math.abs(fAtA) < 1e-10) {
          setError(`Function value is zero at x = ${a}. Logarithmic differentiation requires positive values.`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Function is undefined at x = ${a}`);
        setResult(null);
        return;
      }

      // Check if function is positive in neighborhood
      const h = 1e-6;
      let isPositive = true;
      try {
        const leftVal = f(a - h);
        const rightVal = f(a + h);
        if (!isFinite(leftVal) || !isFinite(rightVal) || leftVal <= 0 || rightVal <= 0) {
          isPositive = false;
        }
      } catch {
        isPositive = false;
      }

      // Compute derivative using logarithmic differentiation
      // d/dx[f(x)] = f(x) * d/dx[ln(f(x))]
      const derivativeAtA = computeDerivative(f, a);
      
      if (!isFinite(derivativeAtA)) {
        setResult({
          derivative: 'Does not exist',
          originalFunction: functionStr,
          steps: [
            `❌ Function is not differentiable at x = ${a}`,
            `⚠️ Logarithmic differentiation cannot be applied`
          ],
          isDifferentiable: false,
          message: `Function is not differentiable at x = ${a}`
        });
        return;
      }

      // Compute ln(f(x)) for the logarithmic derivative
      let lnFAtA: number;
      try {
        lnFAtA = Math.log(Math.abs(fAtA));
        if (!isFinite(lnFAtA)) {
          setError(`Cannot compute logarithm of function at x = ${a}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Cannot compute logarithm of function at x = ${a}`);
        setResult(null);
        return;
      }

      // Compute derivative of ln(f(x))
      let derivativeLnF: number;
      try {
        // d/dx[ln(f(x))] = f'(x) / f(x)
        derivativeLnF = derivativeAtA / fAtA;
        if (!isFinite(derivativeLnF)) {
          setError(`Cannot compute derivative of ln(f(x)) at x = ${a}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Cannot compute derivative of ln(f(x)) at x = ${a}`);
        setResult(null);
        return;
      }

      // Final derivative: f'(x) = f(x) * d/dx[ln(f(x))]
      const logDerivative = fAtA * derivativeLnF;

      // Generate derivative expression
      let derivativeExpr = '';
      const fnLower = functionStr.toLowerCase().trim();
      
      if (functionStr.includes('^')) {
        const parts = functionStr.split('^');
        const base = parts[0].trim();
        const exponent = parts[1].trim();
        
        if (base === 'x' && exponent === 'x') {
          derivativeExpr = `x^x · (ln(x) + 1)`;
        } else if (base === 'x' && exponent.includes('sin')) {
          derivativeExpr = `x^${exponent} · (ln(x) + ${exponent}·cot(x))`;
        } else if (base.includes('sin') && exponent === 'x') {
          derivativeExpr = `(${base})^x · (ln(${base}) + x·cot(${base.replace('sin', '')}))`;
        } else {
          derivativeExpr = `${functionStr} · (ln(${base}) · ${exponent} + ${base} · d/dx(${exponent}))`;
        }
      } else if (functionStr.includes('*')) {
        const parts = functionStr.split('*');
        if (parts.length === 2) {
          const u = parts[0].trim();
          const v = parts[1].trim();
          derivativeExpr = `${functionStr} · (${getDerivativeExpression(u)}/${u} + ${getDerivativeExpression(v)}/${v})`;
        } else {
          derivativeExpr = `${functionStr} · (${getLogDerivativeExpression(functionStr)})`;
        }
      } else {
        derivativeExpr = `${functionStr} · (${getDerivativeExpression(functionStr)}/${functionStr})`;
      }

      // If the function is not positive, show note about absolute value
      const isPositiveNote = isPositive ? '' : ' (using absolute value for logarithm)';

      const steps: string[] = [
        '📐 Logarithmic Differentiation: ln(y) = ln(f(x))',
        '',
        `Step 1: Take natural logarithm of both sides`,
        `  y = ${functionStr}`,
        `  ln(y) = ln(${functionStr})${isPositiveNote}`,
        '',
        `Step 2: Differentiate implicitly with respect to x`,
        `  1/y · dy/dx = d/dx[ln(${functionStr})]`,
        '',
        `Step 3: Evaluate at x = ${a}`,
        `  f(${a}) = ${fAtA.toFixed(6)}`,
        `  f'(${a}) = ${derivativeAtA.toFixed(6)}`,
        `  ln(f(${a})) = ${lnFAtA.toFixed(6)}`,
        `  d/dx[ln(f(x))] at x = ${a}: ${derivativeLnF.toFixed(6)}`,
        '',
        `Step 4: Solve for dy/dx`,
        `  dy/dx = y · d/dx[ln(y)]`,
        `  dy/dx = ${fAtA.toFixed(6)} · ${derivativeLnF.toFixed(6)}`,
        `  dy/dx = ${logDerivative.toFixed(6)}`
      ];

      // Add domain note if needed
      if (!isPositive) {
        steps.push('', `⚠️ Note: Function may not be positive in the neighborhood. Log derivative computed using absolute values.`);
      }

      // Check if derivative exists and is finite
      const isDifferentiable = isFinite(logDerivative);

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: logDerivative,
        originalFunction: functionStr,
        steps,
        isDifferentiable,
        message: isDifferentiable 
          ? `Logarithmic differentiation successfully applied at x = ${a}` 
          : `Derivative does not exist at x = ${a}`
      });
      setError('');

    } catch (e) {
      setError('Invalid function or point. Please check your input.');
      setResult(null);
    }
  };

  const getFunctionExamples = () => {
    return [
      { label: 'x^x', value: 'x^x' },
      { label: 'x^sin(x)', value: 'x^sin(x)' },
      { label: '(sin x)^x', value: 'sin(x)^x' },
      { label: 'x*sin(x)', value: 'x*sin(x)' },
      { label: 'x^2 * e^x', value: 'x^2 * e^x' },
      { label: 'x^3 * sin(x)', value: 'x^3 * sin(x)' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Logarithmic Differentiation Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Used for functions with variables in base and exponent</li>
            <li>Ideal for complicated products, quotients, and powers</li>
            <li>Method: ln(y) = ln(f(x)) then differentiate implicitly</li>
            <li>Requires f(x) &gt; 0 for the natural logarithm</li>
            <li>Formula: d/dx[f(x)] = f(x) · d/dx[ln(f(x))]</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={functionStr}
              onChange={(e) => setFunctionStr(e.target.value)}
              placeholder="e.g., x^x"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <select
              onChange={(e) => setFunctionStr(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white"
              value=""
            >
              <option value="">Examples</option>
              {getFunctionExamples().map((ex) => (
                <option key={ex.value} value={ex.value}>
                  {ex.label}
                </option>
              ))}
            </select>
          </div>
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

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-yellow-800">
          <span className="font-medium">Note:</span> Logarithmic differentiation requires the function to be positive at the point of evaluation.
          The calculator will use absolute values if the function is negative.
        </div>
      </div>

      <button
        onClick={calculateLogarithmicDerivative}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <LogIn className="w-5 h-5" />
        Apply Logarithmic Differentiation
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
                    {result.isDifferentiable ? '✅ Logarithmic Differentiation Applied' : '⚠️ Cannot Apply'}
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
                <>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Original Function:</div>
                    <div className="font-mono text-lg">{result.originalFunction}</div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                    <div className="text-lg font-mono text-[#1F2329]">
                      f'(x) = {result.derivative}
                    </div>
                    {result.valueAtPoint !== undefined && (
                      <div className="mt-1 text-sm text-gray-600">
                        At x = {point}: f'({point}) = {result.valueAtPoint.toFixed(6)}
                      </div>
                    )}
                  </div>
                </>
              )}

              {!result.isDifferentiable && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> The function is not differentiable at x = {point}.
                    Check if the function is defined, continuous, and positive at this point.
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

              <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600">
                  <span className="font-medium">💡 When to use:</span> Logarithmic differentiation is particularly useful for functions 
                  where the variable appears in both the base and the exponent, or for complicated products and quotients.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogarithmicDifferentiationCalculator;