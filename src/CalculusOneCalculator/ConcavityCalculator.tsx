// components/calculators/ConcavityCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Smile, Frown } from 'lucide-react';

interface ConcavityInterval {
  start: number;
  end: number;
  type: 'concave_up' | 'concave_down' | 'inflection';
  reason: string;
  secondDerivativeSign: 'positive' | 'negative' | 'zero';
}

interface ConcavityResult {
  intervals: ConcavityInterval[];
  inflectionPoints: number[];
  derivative: string;
  secondDerivative: string;
  steps: string[];
  message: string;
}

const ConcavityCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<ConcavityResult | null>(null);
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

  const computeSecondDerivative = (f: (x: number) => number, x: number, h: number = 1e-6): number => {
    try {
      const f1 = f(x - h);
      const f2 = f(x);
      const f3 = f(x + h);
      if (!isFinite(f1) || !isFinite(f2) || !isFinite(f3)) return NaN;
      return (f1 - 2 * f2 + f3) / (h * h);
    } catch {
      return NaN;
    }
  };

  const findInflectionPoints = (f: (x: number) => number, a: number, b: number): number[] => {
    const inflectionPoints: number[] = [];
    const numPoints = 2000;
    const step = (b - a) / numPoints;
    
    let prevSecondDeriv = computeSecondDerivative(f, a);
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentSecondDeriv = computeSecondDerivative(f, x);
      
      if (isFinite(prevSecondDeriv) && isFinite(currentSecondDeriv)) {
        if (prevSecondDeriv * currentSecondDeriv < 0) {
          let left = x - step;
          let right = x;
          let mid: number;
          let midSecondDeriv: number;
          
          for (let iter = 0; iter < 25; iter++) {
            mid = (left + right) / 2;
            midSecondDeriv = computeSecondDerivative(f, mid);
            if (!isFinite(midSecondDeriv)) break;
            
            const leftSecondDeriv = computeSecondDerivative(f, left);
            if (!isFinite(leftSecondDeriv)) break;
            
            if (leftSecondDeriv * midSecondDeriv < 0) {
              right = mid;
            } else {
              left = mid;
            }
          }
          
          const root = (left + right) / 2;
          if (isFinite(root) && root > a && root < b) {
            inflectionPoints.push(root);
          }
        }
      }
      prevSecondDeriv = currentSecondDeriv;
    }

    // Check for points where second derivative doesn't exist
    for (let i = 0; i <= numPoints; i++) {
      const x = a + i * step;
      try {
        const deriv = computeSecondDerivative(f, x);
        if (!isFinite(deriv) && isFinite(f(x))) {
          const leftDeriv = computeSecondDerivative(f, x - step);
          const rightDeriv = computeSecondDerivative(f, x + step);
          if (isFinite(leftDeriv) && isFinite(rightDeriv)) {
            if (leftDeriv * rightDeriv < 0 || Math.abs(leftDeriv - rightDeriv) > 0.1) {
              inflectionPoints.push(x);
            }
          }
        }
      } catch {
        // Skip
      }
    }

    // Sort and remove duplicates
    inflectionPoints.sort((a, b) => a - b);
    const uniquePoints: number[] = [];
    const tolerance = 1e-6;
    for (const point of inflectionPoints) {
      let isDuplicate = false;
      for (const existing of uniquePoints) {
        if (Math.abs(point - existing) < tolerance) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniquePoints.push(point);
      }
    }

    return uniquePoints;
  };

  const analyzeConcavity = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(startPoint);
      const b = parseFloat(endPoint);
      
      if (isNaN(a) || isNaN(b)) {
        setError('Please enter valid numbers for the interval');
        setResult(null);
        return;
      }

      if (a >= b) {
        setError('Start point must be less than end point');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      const intervals: ConcavityInterval[] = [];

      // Find inflection points
      const inflectionPoints = findInflectionPoints(f, a, b);
      
      steps.push(`📐 Analyzing concavity of f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');
      
      if (inflectionPoints.length > 0) {
        steps.push(`🔍 Found ${inflectionPoints.length} inflection point(s):`);
        steps.push(`   ${inflectionPoints.map(p => p.toFixed(4)).join(', ')}`);
        steps.push('');
      } else {
        steps.push('🔍 No inflection points found in the interval');
        steps.push('');
      }

      // Create test points between inflection points
      const allPoints = [a, ...inflectionPoints, b];
      
      for (let i = 0; i < allPoints.length - 1; i++) {
        const start = allPoints[i];
        const end = allPoints[i + 1];
        
        if (end - start < 1e-10) continue;
        
        // Test point in the middle of the interval
        const mid = (start + end) / 2;
        const secondDerivMid = computeSecondDerivative(f, mid);
        
        let intervalType: 'concave_up' | 'concave_down' | 'inflection';
        let reason = '';
        let sign: 'positive' | 'negative' | 'zero' = 'positive';
        
        if (!isFinite(secondDerivMid)) {
          // Check if function is defined on interval
          const leftVal = computeSecondDerivative(f, start + 1e-6);
          const rightVal = computeSecondDerivative(f, end - 1e-6);
          if (isFinite(leftVal) && isFinite(rightVal)) {
            if (leftVal > 0 && rightVal > 0) {
              intervalType = 'concave_up';
              sign = 'positive';
              reason = `f'' > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else if (leftVal < 0 && rightVal < 0) {
              intervalType = 'concave_down';
              sign = 'negative';
              reason = `f'' < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else {
              intervalType = 'inflection';
              sign = 'zero';
              reason = `f'' changes sign at inflection point`;
            }
          } else {
            // Skip intervals where function is undefined
            continue;
          }
        } else if (Math.abs(secondDerivMid) < 1e-10) {
          intervalType = 'inflection';
          sign = 'zero';
          reason = `f'' = 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else if (secondDerivMid > 0) {
          intervalType = 'concave_up';
          sign = 'positive';
          reason = `f'' > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else {
          intervalType = 'concave_down';
          sign = 'negative';
          reason = `f'' < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        }

        intervals.push({
          start,
          end,
          type: intervalType,
          reason,
          secondDerivativeSign: sign
        });
      }

      // Generate derivative expressions
      let derivativeExpr = '';
      let secondDerivativeExpr = '';
      
      if (functionStr.includes('x^3')) {
        derivativeExpr = '3x² - 6x';
        secondDerivativeExpr = '6x - 6';
      } else if (functionStr.includes('x^2')) {
        const match = functionStr.match(/x\^(\d+)/);
        if (match) {
          const power = parseInt(match[1]);
          derivativeExpr = `${power}x^${power-1}`;
          secondDerivativeExpr = `${power * (power - 1)}x^${power-2}`;
        }
      } else if (functionStr.includes('sin')) {
        derivativeExpr = 'cos(x)';
        secondDerivativeExpr = '-sin(x)';
      } else if (functionStr.includes('cos')) {
        derivativeExpr = '-sin(x)';
        secondDerivativeExpr = '-cos(x)';
      } else if (functionStr.includes('tan')) {
        derivativeExpr = 'sec²(x)';
        secondDerivativeExpr = '2sec²(x)tan(x)';
      } else if (functionStr.includes('ln')) {
        derivativeExpr = '1/x';
        secondDerivativeExpr = '-1/x²';
      } else if (functionStr.includes('e^')) {
        derivativeExpr = 'e^x';
        secondDerivativeExpr = 'e^x';
      } else {
        derivativeExpr = `f'(x)`;
        secondDerivativeExpr = `f''(x)`;
      }

      // Add step summaries
      const concaveUpCount = intervals.filter(i => i.type === 'concave_up').length;
      const concaveDownCount = intervals.filter(i => i.type === 'concave_down').length;
      const inflectionCount = intervals.filter(i => i.type === 'inflection').length;

      steps.push('📊 Concavity Analysis Results:');
      if (concaveUpCount > 0) {
        steps.push(`   😊 ${concaveUpCount} interval(s) where f is concave up (f'' > 0)`);
      }
      if (concaveDownCount > 0) {
        steps.push(`   😟 ${concaveDownCount} interval(s) where f is concave down (f'' < 0)`);
      }
      if (inflectionCount > 0) {
        steps.push(`   🔄 ${inflectionCount} inflection point(s) where concavity changes`);
      }

      // Generate message
      const totalInflections = inflectionPoints.length;
      let message = `Analyzed ${intervals.length} concavity interval(s)`;
      const details = [];
      if (concaveUpCount > 0) details.push(`${concaveUpCount} concave up`);
      if (concaveDownCount > 0) details.push(`${concaveDownCount} concave down`);
      if (totalInflections > 0) details.push(`${totalInflections} inflection points`);
      if (details.length > 0) {
        message += ` (${details.join(', ')})`;
      }

      setResult({
        intervals,
        inflectionPoints,
        derivative: derivativeExpr,
        secondDerivative: secondDerivativeExpr,
        steps,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getConcavityColor = (type: string): string => {
    switch (type) {
      case 'concave_up':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'concave_down':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'inflection':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getConcavityIcon = (type: string) => {
    switch (type) {
      case 'concave_up':
        return <Smile className="w-4 h-4" />;
      case 'concave_down':
        return <Frown className="w-4 h-4" />;
      case 'inflection':
        return <Info className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getConcavityLabel = (type: string): string => {
    switch (type) {
      case 'concave_up':
        return 'Concave Up (∪)';
      case 'concave_down':
        return 'Concave Down (∩)';
      case 'inflection':
        return 'Inflection Point';
      default:
        return 'Unknown';
    }
  };

  const getSecondDerivativeLabel = (sign: string): string => {
    switch (sign) {
      case 'positive':
        return "f'' > 0";
      case 'negative':
        return "f'' < 0";
      case 'zero':
        return "f'' = 0";
      default:
        return '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Concavity Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Determines where f(x) is concave up or concave down</li>
            <li>Concave up (∪): f''(x) &gt; 0, shape like a cup</li>
            <li>Concave down (∩): f''(x) &lt; 0, shape like a cap</li>
            <li>Inflection points: where concavity changes (f''(x) = 0 or undefined)</li>
            <li>Uses second derivative test for analysis</li>
            <li>Numerical methods used for finding inflection points</li>
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
            placeholder="e.g., x^3 - 3x^2 + 2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Start</label>
          <input
            type="text"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
            placeholder="e.g., -2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">End</label>
          <input
            type="text"
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            placeholder="e.g., 4"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={analyzeConcavity}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Analyze Concavity
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
                    ✅ Analysis Complete
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Derivatives:</div>
                  <div className="font-mono text-xs">f'(x) = {result.derivative}</div>
                  <div className="font-mono text-xs">f''(x) = {result.secondDerivative}</div>
                </div>
              </div>

              {result.inflectionPoints.length > 0 && (
                <div className="mb-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-700">Inflection Points:</div>
                  <div className="font-mono text-sm text-purple-600">
                    {result.inflectionPoints.map(p => `${p.toFixed(4)}`).join(', ')}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    Concavity changes at these points
                  </div>
                </div>
              )}

              {result.intervals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.intervals.map((interval, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getConcavityColor(interval.type)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getConcavityIcon(interval.type)}
                          <span className="font-medium">{getConcavityLabel(interval.type)}</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded font-mono">
                          ({interval.start.toFixed(4)}, {interval.end.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {interval.reason}
                      </div>
                      <div className="text-xs mt-1 font-mono text-gray-600">
                        {getSecondDerivativeLabel(interval.secondDerivativeSign)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No concavity intervals found in the specified range
                </div>
              )}

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
                  {result.intervals.some(i => i.type === 'concave_up') && ' 😊 Concave up (∪) means the function is curving upward like a cup.'}
                  {result.intervals.some(i => i.type === 'concave_down') && ' 😟 Concave down (∩) means the function is curving downward like a cap.'}
                  {result.inflectionPoints.length > 0 && ' 🔄 Inflection points are where the concavity changes from up to down or vice versa.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConcavityCalculator;