// components/calculators/CriticalPointCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Target } from 'lucide-react';

interface CriticalPointResult {
  criticalPoints: {
    x: number;
    y: number;
    type: 'critical' | 'stationary' | 'singular' | 'endpoint';
    reason: string;
  }[];
  derivative: string;
  steps: string[];
  message: string;
}

const CriticalPointCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('3');
  const [result, setResult] = useState<CriticalPointResult | null>(null);
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

  const findCriticalPoints = () => {
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
      const criticalPoints: { x: number; y: number; type: 'critical' | 'stationary' | 'singular' | 'endpoint'; reason: string }[] = [];

      // Find critical points using numerical methods
      const h = 1e-4;
      const numPoints = 1000;
      const step = (b - a) / numPoints;
      
      // First, find stationary points (where derivative = 0)
      steps.push(`📐 Finding critical points of f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a}, ${b}]`);
      steps.push('');

      // Check endpoints
      const fA = f(a);
      const fB = f(b);
      if (isFinite(fA)) {
        criticalPoints.push({
          x: a,
          y: fA,
          type: 'endpoint',
          reason: 'Left endpoint'
        });
        steps.push(`✅ Left endpoint: (${a.toFixed(4)}, ${fA.toFixed(4)})`);
      }
      if (isFinite(fB)) {
        criticalPoints.push({
          x: b,
          y: fB,
          type: 'endpoint',
          reason: 'Right endpoint'
        });
        steps.push(`✅ Right endpoint: (${b.toFixed(4)}, ${fB.toFixed(4)})`);
      }

      // Find points where derivative is zero (stationary points)
      steps.push('');
      steps.push('🔍 Searching for stationary points (f\'(x) = 0)...');

      // Use bisection method to find roots of derivative
      const derivativeRoots: number[] = [];
      
      // First scan for sign changes
      let prevDeriv = computeDerivative(f, a);
      for (let i = 1; i <= numPoints; i++) {
        const x = a + i * step;
        const currentDeriv = computeDerivative(f, x);
        
        if (isFinite(prevDeriv) && isFinite(currentDeriv)) {
          // Check for sign change
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
            const fRoot = f(root);
            if (isFinite(fRoot) && isFinite(root)) {
              derivativeRoots.push(root);
            }
          }
        }
        prevDeriv = currentDeriv;
      }

      // Add unique stationary points
      const tolerance = 1e-6;
      derivativeRoots.sort((a, b) => a - b);
      const uniqueRoots: number[] = [];
      for (const root of derivativeRoots) {
        if (root > a && root < b) {
          let isDuplicate = false;
          for (const existing of uniqueRoots) {
            if (Math.abs(root - existing) < tolerance) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            uniqueRoots.push(root);
          }
        }
      }

      // Add stationary points
      if (uniqueRoots.length > 0) {
        steps.push(`   Found ${uniqueRoots.length} stationary point(s):`);
        for (const root of uniqueRoots) {
          const fRoot = f(root);
          if (isFinite(fRoot)) {
            criticalPoints.push({
              x: root,
              y: fRoot,
              type: 'stationary',
              reason: `f'(${root.toFixed(4)}) = 0`
            });
            steps.push(`   ✅ (${root.toFixed(4)}, ${fRoot.toFixed(4)})`);
          }
        }
      } else {
        steps.push('   No stationary points found in the interval');
      }

      // Check for points where derivative does not exist (singular points)
      steps.push('');
      steps.push('🔍 Checking for singular points (where derivative does not exist)...');

      // Check at finer grid near potential singular points
      const finePoints = 2000;
      const fineStep = (b - a) / finePoints;
      
      for (let i = 0; i <= finePoints; i++) {
        const x = a + i * fineStep;
        try {
          const deriv = computeDerivative(f, x);
          if (!isFinite(deriv) && isFinite(f(x))) {
            // Check if this is a singular point (corner, cusp, etc.)
            const leftDeriv = computeDerivative(f, x - fineStep);
            const rightDeriv = computeDerivative(f, x + fineStep);
            
            if (isFinite(leftDeriv) && isFinite(rightDeriv)) {
              const diff = Math.abs(leftDeriv - rightDeriv);
              if (diff > 0.1) {
                // Likely a corner or cusp
                const fX = f(x);
                if (isFinite(fX)) {
                  const isDuplicate = criticalPoints.some(
                    cp => Math.abs(cp.x - x) < tolerance
                  );
                  if (!isDuplicate && x > a && x < b) {
                    criticalPoints.push({
                      x: x,
                      y: fX,
                      type: 'singular',
                      reason: `Derivative does not exist (corner/cusp)`
                    });
                    steps.push(`   ⚠️ (${x.toFixed(4)}, ${fX.toFixed(4)}) - Potential singular point`);
                  }
                }
              }
            }
          }
        } catch {
          // Skip points where function is undefined
        }
      }

      // Sort critical points by x-value
      criticalPoints.sort((a, b) => a.x - b.x);

      // Determine derivative expression
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

      // Generate final message
      let message = `Found ${criticalPoints.length} critical point(s)`;
      const stationaryCount = criticalPoints.filter(p => p.type === 'stationary').length;
      const singularCount = criticalPoints.filter(p => p.type === 'singular').length;
      const endpointCount = criticalPoints.filter(p => p.type === 'endpoint').length;
      
      const details = [];
      if (stationaryCount > 0) details.push(`${stationaryCount} stationary`);
      if (singularCount > 0) details.push(`${singularCount} singular`);
      if (endpointCount > 0) details.push(`${endpointCount} endpoints`);
      
      if (details.length > 0) {
        message += ` (${details.join(', ')})`;
      }

      steps.push('');
      steps.push(`📊 Summary: ${message}`);

      setResult({
        criticalPoints,
        derivative: derivativeExpr,
        steps,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getCriticalPointTypeColor = (type: string): string => {
    switch (type) {
      case 'stationary':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'singular':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'endpoint':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getCriticalPointTypeLabel = (type: string): string => {
    switch (type) {
      case 'stationary':
        return 'Stationary Point';
      case 'singular':
        return 'Singular Point';
      case 'endpoint':
        return 'Endpoint';
      default:
        return 'Critical Point';
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Critical Point Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Points where f'(x) = 0 or f'(x) does not exist</li>
            <li>Includes endpoints of the interval</li>
            <li>Types: Stationary (horizontal tangent), Singular (corner/cusp), Endpoint</li>
            <li>Used for optimization and curve sketching</li>
            <li>Numerical methods used for finding roots</li>
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
            placeholder="e.g., 3"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={findCriticalPoints}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Target className="w-5 h-5" />
        Find Critical Points
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
                    ✅ Critical Points Found
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

              {result.criticalPoints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.criticalPoints.map((cp, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getCriticalPointTypeColor(cp.type)}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-medium text-gray-500">
                            {getCriticalPointTypeLabel(cp.type)}
                          </div>
                          <div className="font-mono text-sm font-semibold mt-1">
                            ({cp.x.toFixed(4)}, {cp.y.toFixed(4)})
                          </div>
                          <div className="text-xs mt-1 opacity-75">
                            {cp.reason}
                          </div>
                        </div>
                        {cp.type === 'stationary' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            f' = 0
                          </div>
                        )}
                        {cp.type === 'singular' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            f' DNE
                          </div>
                        )}
                        {cp.type === 'endpoint' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            boundary
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No critical points found in the interval [{startPoint}, {endPoint}]
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
                  <span className="font-medium">💡 Note:</span> Critical points are found numerically using root-finding algorithms.
                  Results are approximations and may have small errors. For exact results, use symbolic methods.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CriticalPointCalculator;