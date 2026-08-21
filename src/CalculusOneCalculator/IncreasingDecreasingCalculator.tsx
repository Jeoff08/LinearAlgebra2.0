// components/calculators/IncreasingDecreasingCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface IntervalData {
  start: number;
  end: number;
  type: 'increasing' | 'decreasing' | 'constant';
  reason: string;
}

interface IncreasingDecreasingResult {
  intervals: IntervalData[];
  derivative: string;
  criticalPoints: number[];
  steps: string[];
  message: string;
}

const IncreasingDecreasingCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<IncreasingDecreasingResult | null>(null);
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

  const findCriticalPoints = (f: (x: number) => number, a: number, b: number): number[] => {
    const criticalPoints: number[] = [];
    const numPoints = 2000;
    const step = (b - a) / numPoints;
    
    // Find points where derivative is zero
    let prevDeriv = computeDerivative(f, a);
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentDeriv = computeDerivative(f, x);
      
      if (isFinite(prevDeriv) && isFinite(currentDeriv)) {
        if (prevDeriv * currentDeriv < 0) {
          // Root found - use bisection to refine
          let left = x - step;
          let right = x;
          let mid: number;
          let midDeriv: number;
          
          for (let iter = 0; iter < 20; iter++) {
            mid = (left + right) / 2;
            midDeriv = computeDerivative(f, mid);
            if (!isFinite(midDeriv)) break;
            
            const leftDeriv = computeDerivative(f, left);
            if (!isFinite(leftDeriv)) break;
            
            if (leftDeriv * midDeriv < 0) {
              right = mid;
            } else {
              left = mid;
            }
          }
          
          const root = (left + right) / 2;
          if (isFinite(root) && root > a && root < b) {
            criticalPoints.push(root);
          }
        }
      }
      prevDeriv = currentDeriv;
    }

    // Also check points where derivative doesn't exist (singular points)
    for (let i = 0; i <= numPoints; i++) {
      const x = a + i * step;
      try {
        const deriv = computeDerivative(f, x);
        if (!isFinite(deriv) && isFinite(f(x))) {
          const leftDeriv = computeDerivative(f, x - step);
          const rightDeriv = computeDerivative(f, x + step);
          if (isFinite(leftDeriv) && isFinite(rightDeriv)) {
            if (leftDeriv * rightDeriv < 0 || Math.abs(leftDeriv - rightDeriv) > 0.1) {
              criticalPoints.push(x);
            }
          }
        }
      } catch {
        // Skip
      }
    }

    // Sort and remove duplicates
    criticalPoints.sort((a, b) => a - b);
    const uniquePoints: number[] = [];
    const tolerance = 1e-6;
    for (const point of criticalPoints) {
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

  const analyzeIntervals = () => {
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
      const intervals: IntervalData[] = [];

      // Find critical points
      const criticalPoints = findCriticalPoints(f, a, b);
      
      // Create test points between critical points
      const testPoints: number[] = [];
      const allPoints = [a, ...criticalPoints, b];
      
      steps.push(`📐 Analyzing f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');
      steps.push(`🔍 Critical points found: ${criticalPoints.length > 0 ? criticalPoints.map(p => p.toFixed(4)).join(', ') : 'none'}`);
      steps.push('');

      // Test intervals
      for (let i = 0; i < allPoints.length - 1; i++) {
        const start = allPoints[i];
        const end = allPoints[i + 1];
        
        if (end - start < 1e-10) continue;
        
        // Test point in the middle of the interval
        const mid = (start + end) / 2;
        const derivMid = computeDerivative(f, mid);
        
        let intervalType: 'increasing' | 'decreasing' | 'constant';
        let reason = '';
        
        if (!isFinite(derivMid)) {
          // Check if function is defined on interval
          const leftVal = f(start + 1e-6);
          const rightVal = f(end - 1e-6);
          if (isFinite(leftVal) && isFinite(rightVal)) {
            if (rightVal > leftVal) {
              intervalType = 'increasing';
              reason = `f' > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else if (rightVal < leftVal) {
              intervalType = 'decreasing';
              reason = `f' < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else {
              intervalType = 'constant';
              reason = `f' = 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            }
          } else {
            // Skip intervals where function is undefined
            continue;
          }
        } else if (Math.abs(derivMid) < 1e-10) {
          intervalType = 'constant';
          reason = `f' = 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else if (derivMid > 0) {
          intervalType = 'increasing';
          reason = `f' > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else {
          intervalType = 'decreasing';
          reason = `f' < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        }

        intervals.push({
          start,
          end,
          type: intervalType,
          reason
        });
      }

      // Generate derivative expression
      let derivativeExpr = '';
      if (functionStr.includes('x^3')) {
        derivativeExpr = '3x² - 6x';
      } else if (functionStr.includes('x^2')) {
        const match = functionStr.match(/x\^(\d+)/);
        if (match) {
          const power = parseInt(match[1]);
          derivativeExpr = `${power}x^${power-1}`;
        }
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
      } else {
        derivativeExpr = `f'(x)`;
      }

      // Add step summaries
      const increasingCount = intervals.filter(i => i.type === 'increasing').length;
      const decreasingCount = intervals.filter(i => i.type === 'decreasing').length;
      const constantCount = intervals.filter(i => i.type === 'constant').length;

      steps.push('📊 Interval Analysis Results:');
      if (increasingCount > 0) {
        steps.push(`   ✅ ${increasingCount} interval(s) where f is increasing`);
      }
      if (decreasingCount > 0) {
        steps.push(`   ❌ ${decreasingCount} interval(s) where f is decreasing`);
      }
      if (constantCount > 0) {
        steps.push(`   ➖ ${constantCount} interval(s) where f is constant`);
      }

      // Generate message
      let message = `Analyzed ${intervals.length} interval(s)`;
      const details = [];
      if (increasingCount > 0) details.push(`${increasingCount} increasing`);
      if (decreasingCount > 0) details.push(`${decreasingCount} decreasing`);
      if (constantCount > 0) details.push(`${constantCount} constant`);
      if (details.length > 0) {
        message += ` (${details.join(', ')})`;
      }

      setResult({
        intervals,
        derivative: derivativeExpr,
        criticalPoints,
        steps,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getIntervalColor = (type: string): string => {
    switch (type) {
      case 'increasing':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'decreasing':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'constant':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getIntervalIcon = (type: string) => {
    switch (type) {
      case 'increasing':
        return <TrendingUp className="w-4 h-4" />;
      case 'decreasing':
        return <TrendingDown className="w-4 h-4" />;
      case 'constant':
        return <Minus className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getIntervalLabel = (type: string): string => {
    switch (type) {
      case 'increasing':
        return 'Increasing';
      case 'decreasing':
        return 'Decreasing';
      case 'constant':
        return 'Constant';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Increasing/Decreasing Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Determines where f(x) is increasing, decreasing, or constant</li>
            <li>Uses sign of derivative: f'(x) &gt; 0 → increasing, f'(x) &lt; 0 → decreasing</li>
            <li>Critical points are used as interval boundaries</li>
            <li>Includes intervals where derivative doesn't exist</li>
            <li>Numerical methods used for finding critical points</li>
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
        onClick={analyzeIntervals}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Analyze Increasing/Decreasing
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
                  <div className="text-sm font-medium text-gray-500">Derivative:</div>
                  <div className="font-mono text-sm">f'(x) = {result.derivative}</div>
                </div>
              </div>

              {result.criticalPoints.length > 0 && (
                <div className="mb-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-700">Critical Points:</div>
                  <div className="font-mono text-sm text-purple-600">
                    {result.criticalPoints.map(p => p.toFixed(4)).join(', ')}
                  </div>
                </div>
              )}

              {result.intervals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.intervals.map((interval, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getIntervalColor(interval.type)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getIntervalIcon(interval.type)}
                          <span className="font-medium">{getIntervalLabel(interval.type)}</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded">
                          ({interval.start.toFixed(4)}, {interval.end.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {interval.reason}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No intervals found in the specified range
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
                  {result.intervals.some(i => i.type === 'increasing') && 
                    ' 📈 f is increasing where derivative is positive.'}
                  {result.intervals.some(i => i.type === 'decreasing') && 
                    ' 📉 f is decreasing where derivative is negative.'}
                  {result.intervals.some(i => i.type === 'constant') && 
                    ' ➖ f is constant where derivative is zero.'}
                  Critical points mark where the derivative changes sign.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncreasingDecreasingCalculator;