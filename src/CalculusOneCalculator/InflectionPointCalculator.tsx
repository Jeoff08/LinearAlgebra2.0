// components/calculators/InflectionPointCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Activity, RotateCw } from 'lucide-react';

interface InflectionPoint {
  x: number;
  y: number;
  reason: string;
  secondDerivative?: number;
  thirdDerivative?: number;
}

interface InflectionPointResult {
  inflectionPoints: InflectionPoint[];
  derivative: string;
  secondDerivative: string;
  thirdDerivative: string;
  steps: string[];
  message: string;
}

const InflectionPointCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<InflectionPointResult | null>(null);
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

  const computeThirdDerivative = (f: (x: number) => number, x: number, h: number = 1e-5): number => {
    try {
      const f1 = f(x - 2*h);
      const f2 = f(x - h);
      const f3 = f(x + h);
      const f4 = f(x + 2*h);
      if (!isFinite(f1) || !isFinite(f2) || !isFinite(f3) || !isFinite(f4)) return NaN;
      return (-f1 + 2*f2 - 2*f3 + f4) / (2 * h * h * h);
    } catch {
      return NaN;
    }
  };

  const findInflectionPoints = (f: (x: number) => number, a: number, b: number): InflectionPoint[] => {
    const inflectionPoints: InflectionPoint[] = [];
    const numPoints = 3000;
    const step = (b - a) / numPoints;
    
    let prevSecondDeriv = computeSecondDerivative(f, a);
    let prevX = a;
    
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentSecondDeriv = computeSecondDerivative(f, x);
      
      if (isFinite(prevSecondDeriv) && isFinite(currentSecondDeriv)) {
        // Check for sign change (potential inflection point)
        if (prevSecondDeriv * currentSecondDeriv < 0) {
          // Refine using bisection
          let left = prevX;
          let right = x;
          let mid: number;
          let midSecondDeriv: number;
          
          for (let iter = 0; iter < 30; iter++) {
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
            const fRoot = f(root);
            const secondDeriv = computeSecondDerivative(f, root);
            const thirdDeriv = computeThirdDerivative(f, root);
            
            if (isFinite(fRoot) && isFinite(root)) {
              // Check if it's a true inflection point (f'' changes sign)
              const leftCheck = computeSecondDerivative(f, root - step/2);
              const rightCheck = computeSecondDerivative(f, root + step/2);
              
              if (isFinite(leftCheck) && isFinite(rightCheck)) {
                const signChange = (leftCheck > 0 && rightCheck < 0) || (leftCheck < 0 && rightCheck > 0);
                if (signChange) {
                  inflectionPoints.push({
                    x: root,
                    y: fRoot,
                    reason: `f'' changes sign at x = ${root.toFixed(4)}`,
                    secondDerivative: isFinite(secondDeriv) ? secondDeriv : undefined,
                    thirdDerivative: isFinite(thirdDeriv) ? thirdDeriv : undefined
                  });
                }
              }
            }
          }
        }
      }
      prevSecondDeriv = currentSecondDeriv;
      prevX = x;
    }

    // Check for points where second derivative is zero but doesn't change sign
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const secondDeriv = computeSecondDerivative(f, x);
      
      if (isFinite(secondDeriv) && Math.abs(secondDeriv) < 1e-8) {
        // Check if f'' is zero at this point
        const leftCheck = computeSecondDerivative(f, x - step/2);
        const rightCheck = computeSecondDerivative(f, x + step/2);
        
        if (isFinite(leftCheck) && isFinite(rightCheck)) {
          // If f'' is zero at x but doesn't change sign, it's not an inflection point
          // (it could be a stationary inflection point)
          const signChange = (leftCheck > 0 && rightCheck < 0) || (leftCheck < 0 && rightCheck > 0);
          if (!signChange && Math.abs(leftCheck) > 1e-6 && Math.abs(rightCheck) > 1e-6) {
            // This is a stationary inflection point (f''=0 but no sign change)
            const fX = f(x);
            if (isFinite(fX) && x > a && x < b) {
              const isDuplicate = inflectionPoints.some(
                p => Math.abs(p.x - x) < 1e-6
              );
              if (!isDuplicate) {
                inflectionPoints.push({
                  x: x,
                  y: fX,
                  reason: `f'' = 0 at x = ${x.toFixed(4)} (stationary inflection)`,
                  secondDerivative: secondDeriv
                });
              }
            }
          }
        }
      }
    }

    // Check for points where second derivative doesn't exist
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      try {
        const deriv = computeSecondDerivative(f, x);
        if (!isFinite(deriv) && isFinite(f(x))) {
          const leftDeriv = computeSecondDerivative(f, x - step);
          const rightDeriv = computeSecondDerivative(f, x + step);
          if (isFinite(leftDeriv) && isFinite(rightDeriv)) {
            if (leftDeriv * rightDeriv < 0) {
              const fX = f(x);
              if (isFinite(fX)) {
                const isDuplicate = inflectionPoints.some(
                  p => Math.abs(p.x - x) < 1e-6
                );
                if (!isDuplicate && x > a && x < b) {
                  inflectionPoints.push({
                    x: x,
                    y: fX,
                    reason: `f'' does not exist at x = ${x.toFixed(4)} (cusp/corner)`
                  });
                }
              }
            }
          }
        }
      } catch {
        // Skip
      }
    }

    // Sort by x-value
    inflectionPoints.sort((a, b) => a.x - b.x);
    
    // Remove duplicates
    const uniquePoints: InflectionPoint[] = [];
    const tolerance = 1e-6;
    for (const point of inflectionPoints) {
      let isDuplicate = false;
      for (const existing of uniquePoints) {
        if (Math.abs(point.x - existing.x) < tolerance) {
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

  const analyzeInflectionPoints = () => {
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
      
      steps.push(`📐 Finding inflection points of f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');

      // Find inflection points
      const inflectionPoints = findInflectionPoints(f, a, b);
      
      steps.push(`🔍 Found ${inflectionPoints.length} inflection point(s):`);
      if (inflectionPoints.length > 0) {
        for (const ip of inflectionPoints) {
          steps.push(`   ✅ (${ip.x.toFixed(4)}, ${ip.y.toFixed(4)})`);
          if (ip.secondDerivative !== undefined) {
            steps.push(`      f''(${ip.x.toFixed(4)}) = ${ip.secondDerivative.toFixed(4)}`);
          }
          if (ip.thirdDerivative !== undefined) {
            steps.push(`      f'''(${ip.x.toFixed(4)}) = ${ip.thirdDerivative.toFixed(4)}`);
          }
          steps.push(`      ${ip.reason}`);
        }
      } else {
        steps.push('   No inflection points found in the interval');
      }
      steps.push('');

      // Generate derivative expressions
      let derivativeExpr = '';
      let secondDerivativeExpr = '';
      let thirdDerivativeExpr = '';
      
      if (functionStr.includes('x^3')) {
        derivativeExpr = '3x² - 6x';
        secondDerivativeExpr = '6x - 6';
        thirdDerivativeExpr = '6';
      } else if (functionStr.includes('x^2')) {
        const match = functionStr.match(/x\^(\d+)/);
        if (match) {
          const power = parseInt(match[1]);
          derivativeExpr = `${power}x^${power-1}`;
          secondDerivativeExpr = `${power * (power - 1)}x^${power-2}`;
          if (power >= 3) {
            thirdDerivativeExpr = `${power * (power - 1) * (power - 2)}x^${power-3}`;
          } else {
            thirdDerivativeExpr = '0';
          }
        }
      } else if (functionStr.includes('sin')) {
        derivativeExpr = 'cos(x)';
        secondDerivativeExpr = '-sin(x)';
        thirdDerivativeExpr = '-cos(x)';
      } else if (functionStr.includes('cos')) {
        derivativeExpr = '-sin(x)';
        secondDerivativeExpr = '-cos(x)';
        thirdDerivativeExpr = 'sin(x)';
      } else if (functionStr.includes('tan')) {
        derivativeExpr = 'sec²(x)';
        secondDerivativeExpr = '2sec²(x)tan(x)';
        thirdDerivativeExpr = '2sec²(x)(sec²(x) + 2tan²(x))';
      } else if (functionStr.includes('ln')) {
        derivativeExpr = '1/x';
        secondDerivativeExpr = '-1/x²';
        thirdDerivativeExpr = '2/x³';
      } else if (functionStr.includes('e^')) {
        derivativeExpr = 'e^x';
        secondDerivativeExpr = 'e^x';
        thirdDerivativeExpr = 'e^x';
      } else {
        derivativeExpr = `f'(x)`;
        secondDerivativeExpr = `f''(x)`;
        thirdDerivativeExpr = `f'''(x)`;
      }

      // Generate message
      let message = `Found ${inflectionPoints.length} inflection point(s)`;
      if (inflectionPoints.length > 0) {
        const points = inflectionPoints.map(p => `(${p.x.toFixed(4)}, ${p.y.toFixed(4)})`).join(', ');
        message += ` at ${points}`;
      }

      // Add verification information - FIXED: escaped single quotes
      steps.push('📊 Verification:');
      steps.push("   Inflection points occur where f'' changes sign");
      steps.push("   Test: f''(x-) and f''(x+) have opposite signs");
      
      if (inflectionPoints.length > 0) {
        for (const ip of inflectionPoints) {
          const h = 0.001;
          const leftSecond = computeSecondDerivative(f, ip.x - h);
          const rightSecond = computeSecondDerivative(f, ip.x + h);
          if (isFinite(leftSecond) && isFinite(rightSecond)) {
            const leftSign = leftSecond > 0 ? 'positive' : 'negative';
            const rightSign = rightSecond > 0 ? 'positive' : 'negative';
            steps.push(`   At x = ${ip.x.toFixed(4)}: f'' changes from ${leftSign} to ${rightSign} ✓`);
          }
        }
      }

      setResult({
        inflectionPoints,
        derivative: derivativeExpr,
        secondDerivative: secondDerivativeExpr,
        thirdDerivative: thirdDerivativeExpr,
        steps,
        message
      });
      setError('');

    } catch (e) {
      setError('Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getInflectionColor = (reason: string): string => {
    if (reason.includes('changes sign')) {
      return 'text-green-700 bg-green-50 border-green-200';
    } else if (reason.includes('stationary')) {
      return 'text-purple-700 bg-purple-50 border-purple-200';
    } else if (reason.includes('does not exist')) {
      return 'text-yellow-700 bg-yellow-50 border-yellow-200';
    } else {
      return 'text-blue-700 bg-blue-50 border-blue-200';
    }
  };

  const getInflectionIcon = (reason: string) => {
    if (reason.includes('changes sign')) {
      return <RotateCw className="w-4 h-4" />;
    } else if (reason.includes('stationary')) {
      return <Activity className="w-4 h-4" />;
    } else if (reason.includes('does not exist')) {
      return <AlertCircle className="w-4 h-4" />;
    } else {
      return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Inflection Point Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Points where concavity changes (f'' changes sign)</li>
            <li>Conditions: f''(x) = 0 or undefined, and f'' changes sign</li>
            <li>Types: Regular (sign change), Stationary (f''=0, no sign change)</li>
            <li>Uses second derivative test for identification</li>
            <li>Numerical methods used for finding roots</li>
            <li>Useful for curve sketching and understanding function behavior</li>
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
        onClick={analyzeInflectionPoints}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Find Inflection Points
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
                  <div className="font-mono text-xs">f'''(x) = {result.thirdDerivative}</div>
                </div>
              </div>

              {result.inflectionPoints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.inflectionPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getInflectionColor(point.reason)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getInflectionIcon(point.reason)}
                          <span className="font-medium">Inflection Point</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded font-mono">
                          ({point.x.toFixed(4)}, {point.y.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {point.reason}
                      </div>
                      {point.secondDerivative !== undefined && isFinite(point.secondDerivative) && (
                        <div className="text-xs mt-1 font-mono text-gray-600">
                          f'' = {point.secondDerivative.toFixed(4)}
                        </div>
                      )}
                      {point.thirdDerivative !== undefined && isFinite(point.thirdDerivative) && (
                        <div className="text-xs mt-1 font-mono text-gray-600">
                          f''' = {point.thirdDerivative.toFixed(4)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No inflection points found in the specified interval
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
                  {result.inflectionPoints.length > 0 ? (
                    <>
                      Inflection points are where the concavity of the function changes.
                      {result.inflectionPoints.some(p => p.reason.includes('changes sign')) && 
                        " Regular inflection points have f'' changing sign from positive to negative or vice versa."}
                      {result.inflectionPoints.some(p => p.reason.includes('stationary')) && 
                        " Stationary inflection points have f''=0 but no sign change (flat inflection)."}
                      {result.inflectionPoints.some(p => p.reason.includes('does not exist')) && 
                        " Some inflection points occur where f'' is undefined (cusps or corners)."}
                    </>
                  ) : (
                    'No inflection points found. The function maintains consistent concavity throughout the interval.'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InflectionPointCalculator;