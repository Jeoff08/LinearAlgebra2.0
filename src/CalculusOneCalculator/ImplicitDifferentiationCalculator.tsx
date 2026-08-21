// components/calculators/ImplicitDifferentiationCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Hash } from 'lucide-react';

interface ImplicitDifferentiationResult {
  derivative: string;
  valueAtPoint?: number;
  equation: string;
  steps: string[];
  isDifferentiable: boolean;
  message: string;
}

const ImplicitDifferentiationCalculator: React.FC = () => {
  const [equation, setEquation] = useState('x^2 + y^2 = 25');
  const [xPoint, setXPoint] = useState('3');
  const [yPoint, setYPoint] = useState('4');
  const [result, setResult] = useState<ImplicitDifferentiationResult | null>(null);
  const [error, setError] = useState<string>('');

  const parseFunction = (fn: string, variable: 'x' | 'y'): ((val: number) => number) => {
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
    
    const varName = variable === 'x' ? 'x' : 'y';
    return new Function(varName, `return (${sanitized})`) as (val: number) => number;
  };

  const computeDerivative = (f: (x: number) => number, val: number, h: number = 1e-7): number => {
    try {
      const left = f(val - h);
      const right = f(val + h);
      if (!isFinite(left) || !isFinite(right)) return NaN;
      return (right - left) / (2 * h);
    } catch {
      return NaN;
    }
  };

  const calculateImplicitDerivative = () => {
    try {
      const x = parseFloat(xPoint);
      const y = parseFloat(yPoint);
      
      if (isNaN(x) || isNaN(y)) {
        setError('Please enter valid numbers for both x and y points');
        setResult(null);
        return;
      }

      // Parse the equation
      const eq = equation.trim();
      const sides = eq.split('=');
      if (sides.length !== 2) {
        setError('Invalid equation format. Use "left = right" format.');
        setResult(null);
        return;
      }

      const leftExpr = sides[0].trim();
      const rightExpr = sides[1].trim();

      // Define functions for numerical evaluation
      let leftFn: (x: number, y: number) => number;
      let rightFn: (x: number, y: number) => number;
      
      try {
        // Create functions that evaluate the expressions
        const leftEval = new Function('x', 'y', `return (${leftExpr})`);
        const rightEval = new Function('x', 'y', `return (${rightExpr})`);
        leftFn = leftEval as (x: number, y: number) => number;
        rightFn = rightEval as (x: number, y: number) => number;
      } catch {
        setError('Invalid equation. Please check your input.');
        setResult(null);
        return;
      }

      // Check if the point satisfies the equation
      let leftVal: number, rightVal: number;
      try {
        leftVal = leftFn(x, y);
        rightVal = rightFn(x, y);
        if (!isFinite(leftVal) || !isFinite(rightVal)) {
          setError(`The equation is undefined at (${x}, ${y})`);
          setResult(null);
          return;
        }
        const diff = Math.abs(leftVal - rightVal);
        if (diff > 1e-6) {
          setError(`The point (${x}, ${y}) does not satisfy the equation (${leftVal.toFixed(4)} ≠ ${rightVal.toFixed(4)})`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Error evaluating the equation at (${x}, ${y})`);
        setResult(null);
        return;
      }

      // Compute implicit derivative using numerical method
      const h = 1e-6;
      
      // Find F(x,y) = left - right
      const F = (xVal: number, yVal: number): number => {
        try {
          return leftFn(xVal, yVal) - rightFn(xVal, yVal);
        } catch {
          return NaN;
        }
      };

      // Compute partial derivatives numerically
      const Fx = (xVal: number, yVal: number): number => {
        return (F(xVal + h, yVal) - F(xVal - h, yVal)) / (2 * h);
      };

      const Fy = (xVal: number, yVal: number): number => {
        return (F(xVal, yVal + h) - F(xVal, yVal - h)) / (2 * h);
      };

      let FxVal: number, FyVal: number;
      try {
        FxVal = Fx(x, y);
        FyVal = Fy(x, y);
        if (!isFinite(FxVal) || !isFinite(FyVal)) {
          setError(`Partial derivatives cannot be computed at (${x}, ${y})`);
          setResult(null);
          return;
        }
        if (Math.abs(FyVal) < 1e-10) {
          setError(`dy/dx is undefined (vertical tangent) at (${x}, ${y})`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Error computing partial derivatives at (${x}, ${y})`);
        setResult(null);
        return;
      }

      const dy_dx = -FxVal / FyVal;

      // Generate derivative expression
      let derivativeExpr = '';
      const eqParts = equation.split('=');
      const left = eqParts[0].trim();
      const right = eqParts[1].trim();

      // Try to find a symbolic expression for the derivative
      if (equation.includes('x^2') && equation.includes('y^2')) {
        if (equation.includes('+') && !equation.includes('-')) {
          derivativeExpr = '-x/y';
        } else if (equation.includes('-')) {
          derivativeExpr = 'x/y';
        }
      } else if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) {
        derivativeExpr = 'dy/dx = (partial F/∂x) / (partial F/∂y)';
      } else if (equation.includes('e^') || equation.includes('ln')) {
        derivativeExpr = 'dy/dx = (partial F/∂x) / (partial F/∂y)';
      } else {
        derivativeExpr = `-(${FxVal.toFixed(6)}) / (${FyVal.toFixed(6)})`;
      }

      // Check if the derivative exists and is finite
      const isDifferentiable = isFinite(dy_dx);

      // FIXED: Use proper numeric formatting for h values
      const hFormatted = h.toFixed(6);
      const xPlusH = (x + h);
      const xMinusH = (x - h);
      const yPlusH = (y + h);
      const yMinusH = (y - h);

      const steps: string[] = [
        '📐 Implicit Differentiation: Treat y as a function of x',
        '',
        `Step 1: Given equation: ${equation}`,
        `  Point: (${x}, ${y})`,
        '',
        `Step 2: Define F(x,y) = ${left} - ${right} = 0`,
        '',
        `Step 3: Compute partial derivatives`,
        `  ∂F/∂x ≈ [F(${xPlusH.toFixed(4)}, ${y}) - F(${xMinusH.toFixed(4)}, ${y})] / (2h)`,
        `  ∂F/∂x = ${FxVal.toFixed(6)}`,
        `  ∂F/∂y ≈ [F(${x}, ${yPlusH.toFixed(4)}) - F(${x}, ${yMinusH.toFixed(4)})] / (2h)`,
        `  ∂F/∂y = ${FyVal.toFixed(6)}`,
        '',
        `Step 4: Apply implicit differentiation formula`,
        `  dy/dx = -∂F/∂x / ∂F/∂y`,
        `  dy/dx = -(${FxVal.toFixed(6)}) / (${FyVal.toFixed(6)})`,
        `  dy/dx = ${dy_dx.toFixed(6)}`
      ];

      // Add verification step
      if (isFinite(dy_dx) && Math.abs(dy_dx) < 1e6) {
        steps.push('', `✅ The derivative exists and is finite at (${x}, ${y})`);
      } else {
        steps.push('', `⚠️ The derivative may not exist at (${x}, ${y})`);
      }

      setResult({
        derivative: derivativeExpr,
        valueAtPoint: dy_dx,
        equation: equation,
        steps,
        isDifferentiable,
        message: isDifferentiable 
          ? `Implicit derivative computed at (${x}, ${y})` 
          : `Derivative does not exist at (${x}, ${y})`
      });
      setError('');

    } catch (e) {
      setError('Invalid equation or points. Please check your input.');
      setResult(null);
    }
  };

  const getEquationExamples = () => {
    return [
      { label: 'Circle', value: 'x^2 + y^2 = 25' },
      { label: 'Ellipse', value: 'x^2/4 + y^2/9 = 1' },
      { label: 'Hyperbola', value: 'x^2 - y^2 = 1' },
      { label: 'Implicit', value: 'x^2 + y^3 = 10' },
      { label: 'Trigonometric', value: 'sin(x) + cos(y) = 1' },
      { label: 'Exponential', value: 'e^x + e^y = 5' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Implicit Differentiation Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Used for equations where y is not explicitly isolated</li>
            <li>Formula: dy/dx = -(∂F/∂x) / (∂F/∂y)</li>
            <li>Enter equation in the form F(x,y) = 0</li>
            <li>Must provide a point (x, y) that satisfies the equation</li>
            <li>Computes derivative using numerical partial derivatives</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Equation</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="e.g., x^2 + y^2 = 25"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <select
              onChange={(e) => setEquation(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white"
              value=""
            >
              <option value="">Examples</option>
              {getEquationExamples().map((ex) => (
                <option key={ex.value} value={ex.value}>
                  {ex.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">x₀</label>
            <input
              type="text"
              value={xPoint}
              onChange={(e) => setXPoint(e.target.value)}
              placeholder="e.g., 3"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">y₀</label>
            <input
              type="text"
              value={yPoint}
              onChange={(e) => setYPoint(e.target.value)}
              placeholder="e.g., 4"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateImplicitDerivative}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Hash className="w-5 h-5" />
        Differentiate Implicitly
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
                    {result.isDifferentiable ? '✅ Implicit Derivative Found' : '⚠️ Derivative Does Not Exist'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.isDifferentiable && result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">dy/dx at ({xPoint}, {yPoint}) =</div>
                    <div className="text-xl font-bold text-[#1F2329] font-mono">
                      {result.valueAtPoint.toFixed(6)}
                    </div>
                  </div>
                )}
              </div>

              {result.isDifferentiable && (
                <>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Equation:</div>
                    <div className="font-mono text-sm">{result.equation}</div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                    <div className="text-sm font-medium text-gray-700">Derivative Expression:</div>
                    <div className="text-lg font-mono text-[#1F2329]">
                      dy/dx = {result.derivative}
                    </div>
                    {result.valueAtPoint !== undefined && (
                      <div className="mt-1 text-sm text-gray-600">
                        At point ({xPoint}, {yPoint}): dy/dx = {result.valueAtPoint.toFixed(6)}
                      </div>
                    )}
                  </div>
                </>
              )}

              {!result.isDifferentiable && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <span className="font-medium">Note:</span> The derivative does not exist at ({xPoint}, {yPoint}).
                    This could be due to a vertical tangent, cusp, or discontinuity.
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
                  <span className="font-medium">💡 Note:</span> The derivative is computed numerically using finite differences.
                  Results are approximations and may have small errors.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImplicitDifferentiationCalculator;