// components/calculators/TangentLineCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, MoveHorizontal, MoveVertical } from 'lucide-react';

interface TangentLineResult {
  tangentLine: string;
  normalLine: string;
  tangentSlope: number;
  normalSlope: number;
  point: { x: number; y: number };
  derivative: string;
  steps: string[];
  message: string;
}

const TangentLineCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^2');
  const [xPoint, setXPoint] = useState('1');
  const [result, setResult] = useState<TangentLineResult | null>(null);
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

  const calculateTangentLine = () => {
    try {
      const f = parseFunction(functionStr);
      const x0 = parseFloat(xPoint);
      
      if (isNaN(x0)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      const steps: string[] = [];

      // Check if function is defined at point
      let y0: number;
      try {
        y0 = f(x0);
        if (!isFinite(y0)) {
          setError(`Function is undefined at x = ${x0}`);
          setResult(null);
          return;
        }
      } catch {
        setError(`Function is undefined at x = ${x0}`);
        setResult(null);
        return;
      }

      steps.push(`📐 Finding tangent and normal lines for f(x) = ${functionStr}`);
      steps.push(`   At point x = ${x0}`);
      steps.push('');

      // Compute derivative at point
      const slope = computeDerivative(f, x0);
      
      if (!isFinite(slope)) {
        setError(`Derivative does not exist at x = ${x0} (vertical tangent)`);
        setResult(null);
        return;
      }

      steps.push(`Step 1: Find the point (x₀, y₀)`);
      steps.push(`   y₀ = f(${x0}) = ${y0.toFixed(6)}`);
      steps.push(`   Point: (${x0.toFixed(4)}, ${y0.toFixed(4)})`);
      steps.push('');

      steps.push(`Step 2: Find the derivative f'(x)`);
      let derivativeExpr = '';
      if (functionStr.includes('x^2')) {
        derivativeExpr = '2x';
      } else if (functionStr.includes('x^3')) {
        derivativeExpr = '3x²';
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
      } else {
        derivativeExpr = `f'(x)`;
      }
      
      steps.push(`   f'(x) = ${derivativeExpr}`);
      steps.push(`   f'(${x0}) = ${slope.toFixed(6)}`);
      steps.push('');

      // Tangent line
      const tangentSlope = slope;
      const tangentIntercept = y0 - slope * x0;
      
      let tangentLine = '';
      if (Math.abs(tangentSlope) < 1e-10) {
        tangentLine = `y = ${y0.toFixed(4)} (horizontal)`;
      } else if (!isFinite(tangentSlope)) {
        tangentLine = `x = ${x0.toFixed(4)} (vertical)`;
      } else {
        if (Math.abs(tangentIntercept) < 1e-10) {
          tangentLine = `y = ${tangentSlope.toFixed(4)}x`;
        } else {
          tangentLine = `y = ${tangentSlope.toFixed(4)}x + ${tangentIntercept.toFixed(4)}`;
        }
      }

      steps.push(`Step 3: Find the tangent line`);
      steps.push(`   Slope: m = f'(${x0}) = ${slope.toFixed(6)}`);
      steps.push(`   Equation: y - ${y0.toFixed(4)} = ${slope.toFixed(4)}(x - ${x0.toFixed(4)})`);
      steps.push(`   Tangent line: ${tangentLine}`);
      steps.push('');

      // Normal line
      let normalSlope: number;
      let normalLine: string;
      let normalIntercept: number;

      if (Math.abs(slope) < 1e-10) {
        // Horizontal tangent -> vertical normal
        normalSlope = Infinity;
        normalLine = `x = ${x0.toFixed(4)} (vertical)`;
      } else if (!isFinite(slope)) {
        // Vertical tangent -> horizontal normal
        normalSlope = 0;
        normalLine = `y = ${y0.toFixed(4)} (horizontal)`;
      } else {
        normalSlope = -1 / slope;
        normalIntercept = y0 - normalSlope * x0;
        if (Math.abs(normalIntercept) < 1e-10) {
          normalLine = `y = ${normalSlope.toFixed(4)}x`;
        } else {
          normalLine = `y = ${normalSlope.toFixed(4)}x + ${normalIntercept.toFixed(4)}`;
        }
      }

      steps.push(`Step 4: Find the normal line`);
      if (isFinite(slope) && Math.abs(slope) > 1e-10) {
        steps.push(`   Normal slope: mₙ = -1/m = -1/${slope.toFixed(4)} = ${normalSlope.toFixed(4)}`);
      } else if (Math.abs(slope) < 1e-10) {
        steps.push(`   Normal slope: vertical (undefined)`);
      } else {
        steps.push(`   Normal slope: horizontal (0)`);
      }
      steps.push(`   Normal line: ${normalLine}`);

      // Generate message
      const message = `Tangent and normal lines computed at x = ${x0}`;

      setResult({
        tangentLine,
        normalLine,
        tangentSlope: slope,
        normalSlope: isFinite(normalSlope) ? normalSlope : (Math.abs(slope) < 1e-10 ? Infinity : 0),
        point: { x: x0, y: y0 },
        derivative: derivativeExpr,
        steps,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or point. Please check your input.');
      setResult(null);
    }
  };

  const getSlopeLabel = (slope: number): string => {
    if (!isFinite(slope)) return 'undefined (vertical)';
    if (Math.abs(slope) < 1e-10) return '0 (horizontal)';
    return slope.toFixed(4);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Tangent/Normal Line Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Finds the tangent line: y - y₀ = f'(x₀)(x - x₀)</li>
            <li>Finds the normal line: perpendicular to tangent</li>
            <li>Normal slope = -1/f'(x₀) (if f'(x₀) ≠ 0)</li>
            <li>Handles horizontal and vertical tangents</li>
            <li>Shows step-by-step calculation process</li>
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
          <label className="block text-sm font-medium text-slate-700 mb-1">x₀</label>
          <input
            type="text"
            value={xPoint}
            onChange={(e) => setXPoint(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={calculateTangentLine}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <MoveHorizontal className="w-5 h-5" />
        Find Tangent & Normal Lines
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
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-lg font-semibold text-green-700">
                    ✅ Lines Computed
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Point:</div>
                  <div className="font-mono text-sm">
                    ({result.point.x.toFixed(4)}, {result.point.y.toFixed(4)})
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <MoveHorizontal className="w-4 h-4 text-green-700" />
                    <span className="font-medium text-green-700">Tangent Line</span>
                  </div>
                  <div className="font-mono text-sm mt-1">
                    {result.tangentLine}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Slope: {getSlopeLabel(result.tangentSlope)}
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2">
                    <MoveVertical className="w-4 h-4 text-purple-700" />
                    <span className="font-medium text-purple-700">Normal Line</span>
                  </div>
                  <div className="font-mono text-sm mt-1">
                    {result.normalLine}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Slope: {getSlopeLabel(result.normalSlope)}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                <div className="text-sm font-medium text-gray-700">Derivative:</div>
                <div className="font-mono text-sm">
                  f'(x) = {result.derivative}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  f'({xPoint}) = {result.tangentSlope.toFixed(6)}
                </div>
              </div>

              <details>
                <summary className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-800">
                  Show Detailed Steps
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
                  <span className="font-medium">💡 Key Insight:</span>
                  {' '}The tangent line touches the curve at exactly one point and has the same slope as the curve at that point.
                  {' '}The normal line is perpendicular to the tangent line (product of slopes = -1).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TangentLineCalculator;