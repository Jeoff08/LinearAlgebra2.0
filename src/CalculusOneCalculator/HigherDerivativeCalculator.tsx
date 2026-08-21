// components/calculators/HigherDerivativeCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, ArrowUp, Layers } from 'lucide-react';

interface HigherDerivativeResult {
  derivatives: {
    order: number;
    expression: string;
    valueAtPoint?: number;
  }[];
  steps: string[];
  maxOrder: number;
  isDifferentiable: boolean;
  message: string;
}

const HigherDerivativeCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('sin(x)');
  const [point, setPoint] = useState('0');
  const [maxOrder, setMaxOrder] = useState('3');
  const [result, setResult] = useState<HigherDerivativeResult | null>(null);
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

  const computeDerivative = (f: (x: number) => number, x: number, h: number): number => {
    // Central difference method for higher derivatives
    return (f(x + h) - f(x - h)) / (2 * h);
  };

  const computeHigherDerivative = (f: (x: number) => number, x: number, order: number, h: number): number => {
    if (order === 1) {
      return computeDerivative(f, x, h);
    }
    
    // For higher derivatives, use successive approximation
    const h2 = h / 2;
    const f1 = (t: number) => {
      const hLocal = h;
      return (f(t + hLocal) - f(t - hLocal)) / (2 * hLocal);
    };
    
    let currentF = f;
    let result = 0;
    
    // Use finite difference method for higher derivatives
    // Using the formula: f^(n)(x) ≈ (f(x + n*h/2) - f(x - n*h/2)) / (n*h)
    try {
      if (order === 2) {
        // Second derivative: f''(x) ≈ (f(x+h) - 2f(x) + f(x-h)) / h^2
        const hSmall = h * 0.1;
        result = (f(x + hSmall) - 2 * f(x) + f(x - hSmall)) / (hSmall * hSmall);
      } else {
        // For higher orders, use repeated differentiation
        const hSmall = h * 0.01;
        const points: number[] = [];
        const n = order;
        const step = hSmall;
        
        for (let i = -n; i <= n; i++) {
          points.push(f(x + i * step));
        }
        
        // Newton's forward difference formula for higher derivatives
        let numerator = 0;
        for (let k = 0; k <= 2 * n; k++) {
          const coeff = Math.pow(-1, k) * binomial(2 * n, k);
          numerator += coeff * points[k];
        }
        result = numerator / Math.pow(step, 2 * n);
      }
    } catch {
      result = NaN;
    }
    
    return result;
  };

  const binomial = (n: number, k: number): number => {
    if (k < 0 || k > n) return 0;
    let result = 1;
    for (let i = 0; i < k; i++) {
      result *= (n - i) / (i + 1);
    }
    return result;
  };

  const generateDerivativeExpression = (fn: string, order: number): string => {
    const base = fn.toLowerCase();
    
    // Common derivatives
    if (base.includes('sin')) {
      const patterns = ['sin', 'cos', '-sin', '-cos'];
      return patterns[order % 4];
    }
    if (base.includes('cos')) {
      const patterns = ['cos', '-sin', '-cos', 'sin'];
      return patterns[order % 4];
    }
    if (base.includes('e^') || base.includes('exp')) {
      return 'e^x';
    }
    if (base.includes('ln') || base.includes('log')) {
      if (order === 1) return '1/x';
      if (order === 2) return '-1/x²';
      if (order === 3) return '2/x³';
      return `(-1)^${order+1} * (${order-1})! / x^${order}`;
    }
    if (base.includes('x^')) {
      const match = base.match(/x\^(\d+)/);
      if (match) {
        const power = parseInt(match[1]);
        if (order <= power) {
          let result = `${factorial(power) / factorial(power - order)}`;
          if (power - order > 1) result += `x^${power - order}`;
          else if (power - order === 1) result += 'x';
          return result;
        }
        return '0';
      }
    }
    if (base.includes('sqrt')) {
      if (order === 1) return '1/(2√x)';
      if (order === 2) return '-1/(4x^(3/2))';
      return `f^(${order})(x)`;
    }
    if (base.includes('tan')) {
      if (order === 1) return 'sec²(x)';
      if (order === 2) return '2sec²(x)tan(x)';
      return `f^(${order})(x)`;
    }
    
    return `f^(${order})(x)`;
  };

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const calculateHigherDerivatives = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);
      const maxOrderNum = parseInt(maxOrder);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }
      
      if (isNaN(maxOrderNum) || maxOrderNum < 1 || maxOrderNum > 10) {
        setError('Please enter a valid order between 1 and 10');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      const derivatives: { order: number; expression: string; valueAtPoint?: number }[] = [];
      let isDifferentiable = true;
      let message = `Computing derivatives up to order ${maxOrderNum}`;

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

      const h = 1e-6;
      
      // Compute derivatives of each order
      for (let order = 1; order <= maxOrderNum; order++) {
        try {
          const derivativeValue = computeHigherDerivative(f, a, order, h);
          
          if (!isFinite(derivativeValue)) {
            isDifferentiable = false;
            steps.push(`❌ f^(${order})(${a}) does not exist (infinite or undefined)`);
            derivatives.push({
              order,
              expression: 'Does not exist',
            });
            break;
          }
          
          const expression = generateDerivativeExpression(functionStr, order);
          derivatives.push({
            order,
            expression,
            valueAtPoint: derivativeValue
          });
          
          steps.push(`✅ f^(${order})(${a}) = ${derivativeValue.toFixed(6)}`);
        } catch {
          isDifferentiable = false;
          steps.push(`❌ f^(${order})(${a}) cannot be computed`);
          derivatives.push({
            order,
            expression: 'Cannot compute',
          });
          break;
        }
      }

      if (derivatives.length > 0) {
        const lastOrder = derivatives[derivatives.length - 1];
        if (lastOrder.valueAtPoint !== undefined) {
          message = `Successfully computed ${derivatives.length} derivative${derivatives.length > 1 ? 's' : ''}`;
        } else {
          message = `Computed ${derivatives.length - 1} derivative${derivatives.length - 1 > 1 ? 's' : ''}`;
          isDifferentiable = false;
        }
      }

      setResult({
        derivatives,
        steps,
        maxOrder: maxOrderNum,
        isDifferentiable,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or point. Please check your input.');
      setResult(null);
    }
  };

  const getDerivativeDisplay = (order: number): string => {
    if (order === 1) return "f'(x)";
    if (order === 2) return "f''(x)";
    if (order === 3) return "f'''(x)";
    return `f^(${order})(x)`;
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Higher Derivative Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Computes multiple derivatives up to the specified order</li>
            <li>Uses finite difference methods for numerical computation</li>
            <li>Supports: x^n, sin, cos, tan, ln, log, sqrt, e^x</li>
            <li>Maximum order: 10</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
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
            placeholder="e.g., 0"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Max Order</label>
          <input
            type="number"
            value={maxOrder}
            onChange={(e) => setMaxOrder(e.target.value)}
            placeholder="e.g., 3"
            min="1"
            max="10"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={calculateHigherDerivatives}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Layers className="w-5 h-5" />
        Calculate Higher Derivatives
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
                    {result.isDifferentiable ? '✅ Differentiable' : '⚠️ Limited Differentiability'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Computed:</span> {result.derivatives.length} derivative{result.derivatives.length > 1 ? 's' : ''}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {result.derivatives.map((der, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${der.valueAtPoint !== undefined ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                  >
                    <div className="text-xs font-medium text-gray-500 mb-1">
                      {getDerivativeDisplay(der.order)}
                    </div>
                    <div className="font-mono text-sm text-gray-800">
                      {der.expression}
                    </div>
                    {der.valueAtPoint !== undefined && (
                      <div className="mt-1 text-xs text-gray-600">
                        = {der.valueAtPoint.toFixed(6)}
                      </div>
                    )}
                    {der.valueAtPoint === undefined && (
                      <div className="mt-1 text-xs text-red-600">
                        Does not exist
                      </div>
                    )}
                  </div>
                ))}
              </div>

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

              {result.derivatives.length > 0 && result.derivatives[0].valueAtPoint !== undefined && (
                <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">💡 Note:</span> Higher derivatives are computed numerically using finite difference methods. 
                    Results are approximations and may have small errors.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HigherDerivativeCalculator;