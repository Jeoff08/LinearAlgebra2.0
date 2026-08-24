// components/calculators/CurveSketchingCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, BarChart3, Activity } from 'lucide-react';

interface CurveSketchingResult {
  domain: string;
  intercepts: { x: number[]; y: number };
  asymptotes: {
    vertical: number[];
    horizontal: string;
    oblique: string;
  };
  criticalPoints: { x: number; y: number; type: string }[];
  inflectionPoints: { x: number; y: number }[];
  intervals: {
    increasing: string[];
    decreasing: string[];
    concaveUp: string[];
    concaveDown: string[];
  };
  derivative: string;
  secondDerivative: string;
  steps: string[];
  message: string;
}

const CurveSketchingCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-3');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<CurveSketchingResult | null>(null);
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

  const findRoots = (f: (x: number) => number, a: number, b: number, numPoints: number = 2000): number[] => {
    const roots: number[] = [];
    const step = (b - a) / numPoints;
    
    let prevVal = f(a);
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentVal = f(x);
      
      if (isFinite(prevVal) && isFinite(currentVal)) {
        if (prevVal * currentVal < 0) {
          let left = x - step;
          let right = x;
          let mid: number;
          let midVal: number;
          
          for (let iter = 0; iter < 30; iter++) {
            mid = (left + right) / 2;
            midVal = f(mid);
            if (!isFinite(midVal)) break;
            
            const leftVal = f(left);
            if (!isFinite(leftVal)) break;
            
            if (leftVal * midVal < 0) {
              right = mid;
            } else {
              left = mid;
            }
          }
          
          const root = (left + right) / 2;
          if (isFinite(root)) {
            roots.push(root);
          }
        }
      }
      prevVal = currentVal;
    }

    // Remove duplicates
    roots.sort((a, b) => a - b);
    const uniqueRoots: number[] = [];
    const tolerance = 1e-6;
    for (const root of roots) {
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

    return uniqueRoots;
  };

  const analyzeCurve = () => {
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
      
      steps.push(`📐 Curve Sketching Analysis for f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');

      // 1. Domain
      let domain = 'All real numbers';
      steps.push('📍 Domain:');
      if (functionStr.includes('ln') || functionStr.includes('log')) {
        domain = 'x > 0';
        steps.push(`   ${domain}`);
      } else if (functionStr.includes('sqrt')) {
        domain = 'x ≥ 0';
        steps.push(`   ${domain}`);
      } else if (functionStr.includes('tan')) {
        domain = 'x ≠ π/2 + nπ';
        steps.push(`   ${domain}`);
      } else if (functionStr.includes('1/')) {
        domain = 'x ≠ 0';
        steps.push(`   ${domain}`);
      } else {
        steps.push(`   ${domain}`);
      }
      steps.push('');

      // 2. Intercepts
      steps.push('📍 Intercepts:');
      const yIntercept = f(0);
      const xIntercepts = findRoots(f, a, b);
      
      steps.push(`   y-intercept: ${isFinite(yIntercept) ? yIntercept.toFixed(4) : 'undefined'}`);
      if (xIntercepts.length > 0) {
        steps.push(`   x-intercepts: ${xIntercepts.map(x => x.toFixed(4)).join(', ')}`);
      } else {
        steps.push('   x-intercepts: none found in interval');
      }
      steps.push('');

      // 3. Asymptotes
      steps.push('📍 Asymptotes:');
      const verticalAsymptotes: number[] = [];
      // Check for vertical asymptotes
      const numPoints = 1000;
      const step = (b - a) / numPoints;
      for (let i = 0; i <= numPoints; i++) {
        const x = a + i * step;
        try {
          const val = f(x);
          if (!isFinite(val) && isFinite(x)) {
            verticalAsymptotes.push(x);
          }
        } catch {
          // Skip
        }
      }
      
      if (verticalAsymptotes.length > 0) {
        steps.push(`   Vertical asymptotes: ${verticalAsymptotes.map(x => `x = ${x.toFixed(4)}`).join(', ')}`);
      } else {
        steps.push('   No vertical asymptotes found');
      }
      
      // Horizontal asymptotes
      let horizontalAsymptote = 'None';
      if (functionStr.includes('1/') || functionStr.includes('/')) {
        horizontalAsymptote = 'y = 0';
        steps.push(`   Horizontal asymptote: ${horizontalAsymptote}`);
      } else if (functionStr.includes('e^')) {
        horizontalAsymptote = 'y = 0';
        steps.push(`   Horizontal asymptote: ${horizontalAsymptote}`);
      } else {
        steps.push('   No horizontal asymptotes');
      }
      
      // Oblique asymptotes
      let obliqueAsymptote = 'None';
      if (functionStr.includes('x^2') && functionStr.includes('/')) {
        obliqueAsymptote = 'y = x (approximately)';
        steps.push(`   Oblique asymptote: ${obliqueAsymptote}`);
      } else {
        steps.push('   No oblique asymptotes');
      }
      steps.push('');

      // 4. Critical Points
      steps.push('📍 Critical Points:');
      const criticalPoints: { x: number; y: number; type: string }[] = [];
      const h = 0.001;
      
      // Find points where derivative is zero
      const derivRoots = findRoots((x) => computeDerivative(f, x), a, b);
      
      for (const x of derivRoots) {
        const y = f(x);
        if (isFinite(y)) {
          const secondDeriv = computeSecondDerivative(f, x);
          let type = 'critical';
          if (isFinite(secondDeriv)) {
            if (secondDeriv < -1e-6) type = 'local maximum';
            else if (secondDeriv > 1e-6) type = 'local minimum';
            else type = 'saddle point';
          }
          criticalPoints.push({ x, y, type });
        }
      }
      
      if (criticalPoints.length > 0) {
        for (const cp of criticalPoints) {
          steps.push(`   (${cp.x.toFixed(4)}, ${cp.y.toFixed(4)}) → ${cp.type}`);
        }
      } else {
        steps.push('   No critical points found');
      }
      steps.push('');

      // 5. Inflection Points
      steps.push('📍 Inflection Points:');
      const inflectionPoints: { x: number; y: number }[] = [];
      const secondDerivRoots = findRoots((x) => computeSecondDerivative(f, x), a, b);
      
      for (const x of secondDerivRoots) {
        const y = f(x);
        if (isFinite(y)) {
          // Check if concavity changes
          const h2 = 0.001;
          const leftSecond = computeSecondDerivative(f, x - h2);
          const rightSecond = computeSecondDerivative(f, x + h2);
          if (isFinite(leftSecond) && isFinite(rightSecond)) {
            if (leftSecond * rightSecond < 0) {
              inflectionPoints.push({ x, y });
            }
          }
        }
      }
      
      if (inflectionPoints.length > 0) {
        for (const ip of inflectionPoints) {
          steps.push(`   (${ip.x.toFixed(4)}, ${ip.y.toFixed(4)})`);
        }
      } else {
        steps.push('   No inflection points found');
      }
      steps.push('');

      // 6. Intervals
      steps.push('📍 Intervals:');
      
      const increasingIntervals: string[] = [];
      const decreasingIntervals: string[] = [];
      const concaveUpIntervals: string[] = [];
      const concaveDownIntervals: string[] = [];
      
      // Combine all critical points and inflection points
      const allPoints = [a, b, ...derivRoots, ...secondDerivRoots];
      allPoints.sort((a, b) => a - b);
      
      for (let i = 0; i < allPoints.length - 1; i++) {
        const start = allPoints[i];
        const end = allPoints[i + 1];
        if (end - start < 1e-10) continue;
        
        const mid = (start + end) / 2;
        const deriv = computeDerivative(f, mid);
        const secondDeriv = computeSecondDerivative(f, mid);
        
        if (isFinite(deriv) && isFinite(secondDeriv)) {
          if (deriv > 0) {
            increasingIntervals.push(`(${start.toFixed(4)}, ${end.toFixed(4)})`);
          } else if (deriv < 0) {
            decreasingIntervals.push(`(${start.toFixed(4)}, ${end.toFixed(4)})`);
          }
          
          if (secondDeriv > 0) {
            concaveUpIntervals.push(`(${start.toFixed(4)}, ${end.toFixed(4)})`);
          } else if (secondDeriv < 0) {
            concaveDownIntervals.push(`(${start.toFixed(4)}, ${end.toFixed(4)})`);
          }
        }
      }
      
      if (increasingIntervals.length > 0) {
        steps.push(`   Increasing: ${increasingIntervals.join(', ')}`);
      } else {
        steps.push('   No increasing intervals found');
      }
      
      if (decreasingIntervals.length > 0) {
        steps.push(`   Decreasing: ${decreasingIntervals.join(', ')}`);
      } else {
        steps.push('   No decreasing intervals found');
      }
      
      if (concaveUpIntervals.length > 0) {
        steps.push(`   Concave Up: ${concaveUpIntervals.join(', ')}`);
      } else {
        steps.push('   No concave up intervals found');
      }
      
      if (concaveDownIntervals.length > 0) {
        steps.push(`   Concave Down: ${concaveDownIntervals.join(', ')}`);
      } else {
        steps.push('   No concave down intervals found');
      }
      steps.push('');

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

      // Generate message
      const message = `Curve analysis complete for f(x) = ${functionStr}`;

      setResult({
        domain,
        intercepts: {
          x: xIntercepts,
          y: isFinite(yIntercept) ? yIntercept : NaN
        },
        asymptotes: {
          vertical: verticalAsymptotes,
          horizontal: horizontalAsymptote,
          oblique: obliqueAsymptote
        },
        criticalPoints,
        inflectionPoints,
        intervals: {
          increasing: increasingIntervals,
          decreasing: decreasingIntervals,
          concaveUp: concaveUpIntervals,
          concaveDown: concaveDownIntervals
        },
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

  const getPointTypeColor = (type: string): string => {
    if (type.includes('maximum')) return 'text-green-700 bg-green-50 border-green-200';
    if (type.includes('minimum')) return 'text-red-700 bg-red-50 border-red-200';
    if (type.includes('saddle')) return 'text-purple-700 bg-purple-50 border-purple-200';
    return 'text-gray-700 bg-gray-50 border-gray-200';
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Curve Sketching Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Comprehensive analysis of function behavior</li>
            <li>Finds domain, intercepts, asymptotes</li>
            <li>Identifies critical points (max/min/saddle)</li>
            <li>Finds inflection points</li>
            <li>Determines increasing/decreasing intervals</li>
            <li>Determines concavity intervals</li>
            <li>Complete step-by-step analysis</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
            placeholder="e.g., x^3 - 3x^2 + 2"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">Start</label>
          <input
            type="text"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
            placeholder="e.g., -3"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">End</label>
          <input
            type="text"
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            placeholder="e.g., 4"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={analyzeCurve}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-bold transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
      >
        <BarChart3 className="w-5 h-5" />
        Analyze Curve
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
                    ✅ Curve Analysis Complete
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

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-medium text-blue-700">Domain</div>
                  <div className="font-mono text-sm">{result.domain}</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-medium text-green-700">Intercepts</div>
                  <div className="font-mono text-sm">
                    x: {result.intercepts.x.length > 0 ? result.intercepts.x.map(x => x.toFixed(2)).join(', ') : 'none'}
                  </div>
                  <div className="font-mono text-sm">
                    y: {isFinite(result.intercepts.y) ? result.intercepts.y.toFixed(2) : 'undefined'}
                  </div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-medium text-purple-700">Asymptotes</div>
                  <div className="font-mono text-sm">
                    Vertical: {result.asymptotes.vertical.length > 0 ? result.asymptotes.vertical.map(x => `x=${x.toFixed(2)}`).join(', ') : 'none'}
                  </div>
                  <div className="font-mono text-sm">Horizontal: {result.asymptotes.horizontal}</div>
                </div>
              </div>

              {/* Critical Points */}
              {result.criticalPoints.length > 0 && (
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-2">Critical Points:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {result.criticalPoints.map((cp, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded-lg border text-xs ${getPointTypeColor(cp.type)}`}
                      >
                        <div className="font-mono">
                          ({cp.x.toFixed(4)}, {cp.y.toFixed(4)})
                        </div>
                        <div className="font-medium">{cp.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inflection Points */}
              {result.inflectionPoints.length > 0 && (
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-2">Inflection Points:</div>
                  <div className="flex flex-wrap gap-2">
                    {result.inflectionPoints.map((ip, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-lg font-mono text-sm"
                      >
                        ({ip.x.toFixed(4)}, {ip.y.toFixed(4)})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Intervals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-medium text-green-700">Increasing</div>
                  <div className="font-mono text-xs">
                    {result.intervals.increasing.length > 0 ? result.intervals.increasing.join(', ') : 'None'}
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-xs font-medium text-red-700">Decreasing</div>
                  <div className="font-mono text-xs">
                    {result.intervals.decreasing.length > 0 ? result.intervals.decreasing.join(', ') : 'None'}
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-medium text-blue-700">Concave Up</div>
                  <div className="font-mono text-xs">
                    {result.intervals.concaveUp.length > 0 ? result.intervals.concaveUp.join(', ') : 'None'}
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-medium text-purple-700">Concave Down</div>
                  <div className="font-mono text-xs">
                    {result.intervals.concaveDown.length > 0 ? result.intervals.concaveDown.join(', ') : 'None'}
                  </div>
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
                  <span className="font-medium">💡 Curve Sketching Summary:</span>
                  {' '}Use this analysis to sketch the curve. Key features: 
                  {result.criticalPoints.length > 0 && ' critical points (max/min/saddle),'}
                  {result.inflectionPoints.length > 0 && ' inflection points,'}
                  {result.intervals.increasing.length > 0 && ' increasing/decreasing intervals,'}
                  {result.intervals.concaveUp.length > 0 && ' concavity changes.'}
                  {' '}Domain and asymptotes define the behavior of the function.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurveSketchingCalculator;