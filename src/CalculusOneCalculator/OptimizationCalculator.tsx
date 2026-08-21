// components/calculators/OptimizationCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Target, Maximize, Minimize } from 'lucide-react';

interface OptimizationResult {
  optimalPoints: {
    x: number;
    y: number;
    type: 'maximum' | 'minimum' | 'saddle';
    reason: string;
    value: number;
  }[];
  functionValue: string;
  derivative: string;
  secondDerivative: string;
  steps: string[];
  message: string;
  globalMax?: { x: number; y: number; value: number };
  globalMin?: { x: number; y: number; value: number };
}

const OptimizationCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [optimizationType, setOptimizationType] = useState<'max' | 'min' | 'both'>('both');
  const [result, setResult] = useState<OptimizationResult | null>(null);
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

  const findCriticalPoints = (f: (x: number) => number, a: number, b: number): number[] => {
    const criticalPoints: number[] = [];
    const numPoints = 2000;
    const step = (b - a) / numPoints;
    
    let prevDeriv = computeDerivative(f, a);
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentDeriv = computeDerivative(f, x);
      
      if (isFinite(prevDeriv) && isFinite(currentDeriv)) {
        if (prevDeriv * currentDeriv < 0) {
          let left = x - step;
          let right = x;
          let mid: number;
          let midDeriv: number;
          
          for (let iter = 0; iter < 25; iter++) {
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

    // Check for points where derivative doesn't exist
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

  const optimizeFunction = () => {
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
      const optimalPoints: { x: number; y: number; type: 'maximum' | 'minimum' | 'saddle'; reason: string; value: number }[] = [];

      steps.push(`📐 Optimizing f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push(`   Target: ${optimizationType === 'max' ? 'Find maximum' : optimizationType === 'min' ? 'Find minimum' : 'Find both maxima and minima'}`);
      steps.push('');

      // Find critical points
      const criticalPoints = findCriticalPoints(f, a, b);
      
      // Evaluate function at critical points and endpoints
      const allPoints = [a, ...criticalPoints, b];
      const evaluations: { x: number; y: number; type: 'critical' | 'endpoint' }[] = [];

      for (const x of allPoints) {
        const y = f(x);
        if (isFinite(y)) {
          evaluations.push({
            x,
            y,
            type: x === a || x === b ? 'endpoint' : 'critical'
          });
        }
      }

      // Classify each critical point
      for (const cp of criticalPoints) {
        const y = f(cp);
        const secondDeriv = computeSecondDerivative(f, cp);
        const h = 0.001;
        const leftVal = f(cp - h);
        const rightVal = f(cp + h);
        
        let type: 'maximum' | 'minimum' | 'saddle';
        let reason = '';
        
        if (isFinite(secondDeriv)) {
          if (secondDeriv < -1e-6) {
            type = 'maximum';
            reason = `f''(${cp.toFixed(4)}) = ${secondDeriv.toFixed(4)} < 0 → Local maximum`;
          } else if (secondDeriv > 1e-6) {
            type = 'minimum';
            reason = `f''(${cp.toFixed(4)}) = ${secondDeriv.toFixed(4)} > 0 → Local minimum`;
          } else {
            // Second derivative test inconclusive, use first derivative test
            if (isFinite(leftVal) && isFinite(rightVal)) {
              if (y > leftVal && y > rightVal) {
                type = 'maximum';
                reason = `f' changes from + to - → Local maximum`;
              } else if (y < leftVal && y < rightVal) {
                type = 'minimum';
                reason = `f' changes from - to + → Local minimum`;
              } else {
                type = 'saddle';
                reason = `f' does not change sign → Saddle point`;
              }
            } else {
              type = 'saddle';
              reason = `Inconclusive → Saddle point`;
            }
          }
        } else {
          // Use first derivative test
          if (isFinite(leftVal) && isFinite(rightVal)) {
            if (y > leftVal && y > rightVal) {
              type = 'maximum';
              reason = `f' changes from + to - → Local maximum`;
            } else if (y < leftVal && y < rightVal) {
              type = 'minimum';
              reason = `f' changes from - to + → Local minimum`;
            } else {
              type = 'saddle';
              reason = `f' does not change sign → Saddle point`;
            }
          } else {
            type = 'saddle';
            reason = `Cannot determine → Saddle point`;
          }
        }

        optimalPoints.push({
          x: cp,
          y,
          type,
          reason,
          value: y
        });
      }

      // Find global max and min
      let globalMax: { x: number; y: number; value: number } | undefined;
      let globalMin: { x: number; y: number; value: number } | undefined;
      
      if (evaluations.length > 0) {
        let maxVal = -Infinity;
        let minVal = Infinity;
        let maxPoint = evaluations[0];
        let minPoint = evaluations[0];
        
        for (const evalPoint of evaluations) {
          if (evalPoint.y > maxVal) {
            maxVal = evalPoint.y;
            maxPoint = evalPoint;
          }
          if (evalPoint.y < minVal) {
            minVal = evalPoint.y;
            minPoint = evalPoint;
          }
        }
        
        globalMax = {
          x: maxPoint.x,
          y: maxPoint.y,
          value: maxVal
        };
        
        globalMin = {
          x: minPoint.x,
          y: minPoint.y,
          value: minVal
        };
      }

      // Filter based on optimization type
      let filteredPoints = optimalPoints;
      if (optimizationType === 'max') {
        filteredPoints = optimalPoints.filter(p => p.type === 'maximum');
      } else if (optimizationType === 'min') {
        filteredPoints = optimalPoints.filter(p => p.type === 'minimum');
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

      // Add steps for global optimization
      steps.push('📊 Optimization Results:');
      
      if (globalMax && (optimizationType === 'max' || optimizationType === 'both')) {
        steps.push(`   🔺 Global Maximum: f(${globalMax.x.toFixed(4)}) = ${globalMax.value.toFixed(4)}`);
        if (globalMax.x === a || globalMax.x === b) {
          steps.push(`      (Occurs at endpoint)`);
        }
      }
      
      if (globalMin && (optimizationType === 'min' || optimizationType === 'both')) {
        steps.push(`   🔻 Global Minimum: f(${globalMin.x.toFixed(4)}) = ${globalMin.value.toFixed(4)}`);
        if (globalMin.x === a || globalMin.x === b) {
          steps.push(`      (Occurs at endpoint)`);
        }
      }

      if (filteredPoints.length > 0) {
        steps.push('');
        steps.push(`   Local extrema found:`);
        for (const point of filteredPoints) {
          steps.push(`      ${point.type === 'maximum' ? '🔺' : '🔻'} (${point.x.toFixed(4)}, ${point.y.toFixed(4)}) → ${point.type === 'maximum' ? 'Local Max' : 'Local Min'}`);
        }
      }

      // Generate message
      let message = `Optimization complete`;
      if (optimizationType === 'max' && globalMax) {
        message += `. Global maximum: f(${globalMax.x.toFixed(4)}) = ${globalMax.value.toFixed(4)}`;
      } else if (optimizationType === 'min' && globalMin) {
        message += `. Global minimum: f(${globalMin.x.toFixed(4)}) = ${globalMin.value.toFixed(4)}`;
      } else if (optimizationType === 'both') {
        if (globalMax && globalMin) {
          message += `. Max: f(${globalMax.x.toFixed(4)}) = ${globalMax.value.toFixed(4)}, Min: f(${globalMin.x.toFixed(4)}) = ${globalMin.value.toFixed(4)}`;
        }
      }

      setResult({
        optimalPoints: filteredPoints,
        functionValue: functionStr,
        derivative: derivativeExpr,
        secondDerivative: secondDerivativeExpr,
        steps,
        message,
        globalMax,
        globalMin
      });
      setError('');

    } catch (e) {
      setError('Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getOptimalColor = (type: string): string => {
    switch (type) {
      case 'maximum':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'minimum':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'saddle':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getOptimalIcon = (type: string) => {
    switch (type) {
      case 'maximum':
        return <Maximize className="w-4 h-4" />;
      case 'minimum':
        return <Minimize className="w-4 h-4" />;
      case 'saddle':
        return <Target className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getOptimalLabel = (type: string): string => {
    switch (type) {
      case 'maximum':
        return 'Local Maximum';
      case 'minimum':
        return 'Local Minimum';
      case 'saddle':
        return 'Saddle Point';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Optimization Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Finds global and local maxima/minima of a function</li>
            <li>Considers critical points and endpoints of the interval</li>
            <li>Uses first and second derivative tests</li>
            <li>Global extrema are the absolute highest/lowest values</li>
            <li>Local extrema are peaks/valleys in the neighborhood</li>
            <li>Numerical methods used for finding critical points</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Optimization Type</label>
          <select
            value={optimizationType}
            onChange={(e) => setOptimizationType(e.target.value as 'max' | 'min' | 'both')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white"
          >
            <option value="max">Find Maximum</option>
            <option value="min">Find Minimum</option>
            <option value="both">Find Both</option>
          </select>
        </div>
      </div>

      <button
        onClick={optimizeFunction}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Target className="w-5 h-5" />
        Optimize Function
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
                    ✅ Optimization Complete
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

              {/* Global Extrema Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {result.globalMax && (optimizationType === 'max' || optimizationType === 'both') && (
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-green-700" />
                      <span className="font-medium text-green-700">Global Maximum</span>
                    </div>
                    <div className="font-mono text-sm mt-1">
                      f({result.globalMax.x.toFixed(4)}) = {result.globalMax.value.toFixed(4)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      at x = {result.globalMax.x.toFixed(4)}
                    </div>
                  </div>
                )}
                
                {result.globalMin && (optimizationType === 'min' || optimizationType === 'both') && (
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2">
                      <Minimize className="w-4 h-4 text-red-700" />
                      <span className="font-medium text-red-700">Global Minimum</span>
                    </div>
                    <div className="font-mono text-sm mt-1">
                      f({result.globalMin.x.toFixed(4)}) = {result.globalMin.value.toFixed(4)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      at x = {result.globalMin.x.toFixed(4)}
                    </div>
                  </div>
                )}
              </div>

              {/* Local Extrema */}
              {result.optimalPoints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.optimalPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getOptimalColor(point.type)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getOptimalIcon(point.type)}
                          <span className="font-medium">{getOptimalLabel(point.type)}</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded font-mono">
                          ({point.x.toFixed(4)}, {point.y.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {point.reason}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No local extrema found in the specified interval
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
                  {result.globalMax && ' 🔺 The global maximum is the highest point on the function over the entire interval.'}
                  {result.globalMin && ' 🔻 The global minimum is the lowest point on the function over the entire interval.'}
                  {result.optimalPoints.some(p => p.type === 'saddle') && ' 🔄 Saddle points are critical points that are neither maxima nor minima.'}
                  {result.globalMax && result.globalMin && ' The global extrema may occur at critical points or endpoints of the interval.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizationCalculator;