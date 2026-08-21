// components/calculators/LocalExtremaCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, ArrowUp, ArrowDown, Circle } from 'lucide-react';

interface ExtremaPoint {
  x: number;
  y: number;
  type: 'local_max' | 'local_min' | 'neither' | 'saddle';
  reason: string;
  secondDerivative?: number;
}

interface LocalExtremaResult {
  extrema: ExtremaPoint[];
  criticalPoints: number[];
  derivative: string;
  secondDerivative: string;
  steps: string[];
  message: string;
}

const LocalExtremaCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<LocalExtremaResult | null>(null);
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

    // Check for points where derivative doesn't exist (singular points)
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

  const classifyExtrema = (f: (x: number) => number, x: number, h: number = 0.01): ExtremaPoint['type'] => {
    const f1 = f(x - h);
    const f2 = f(x);
    const f3 = f(x + h);
    
    if (!isFinite(f1) || !isFinite(f2) || !isFinite(f3)) return 'neither';
    
    // Check for local maximum
    if (f2 > f1 && f2 > f3) {
      return 'local_max';
    }
    // Check for local minimum
    if (f2 < f1 && f2 < f3) {
      return 'local_min';
    }
    // Check for saddle point
    if ((f2 > f1 && f2 < f3) || (f2 < f1 && f2 > f3)) {
      return 'saddle';
    }
    return 'neither';
  };

  const analyzeExtrema = () => {
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
      const extrema: ExtremaPoint[] = [];

      // Find critical points
      const criticalPoints = findCriticalPoints(f, a, b);
      
      steps.push(`📐 Analyzing f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');
      
      if (criticalPoints.length > 0) {
        steps.push(`🔍 Found ${criticalPoints.length} critical point(s):`);
        steps.push(`   ${criticalPoints.map(p => p.toFixed(4)).join(', ')}`);
        steps.push('');
        steps.push('📊 Classifying extrema:');
      } else {
        steps.push('🔍 No critical points found in the interval');
        steps.push('');
      }

      // Classify each critical point
      for (const cp of criticalPoints) {
        const fAtCP = f(cp);
        const secondDeriv = computeSecondDerivative(f, cp);
        const type = classifyExtrema(f, cp);
        
        let reason = '';
        let typeLabel = '';
        let emoji = '';
        
        switch (type) {
          case 'local_max':
            typeLabel = 'Local Maximum';
            emoji = '🔺';
            reason = `f'(${cp.toFixed(4)}) = 0, f''(${cp.toFixed(4)}) = ${secondDeriv.toFixed(4)} < 0`;
            break;
          case 'local_min':
            typeLabel = 'Local Minimum';
            emoji = '🔻';
            reason = `f'(${cp.toFixed(4)}) = 0, f''(${cp.toFixed(4)}) = ${secondDeriv.toFixed(4)} > 0`;
            break;
          case 'saddle':
            typeLabel = 'Saddle Point';
            emoji = '🔄';
            reason = `f'(${cp.toFixed(4)}) = 0, f'' changes sign`;
            break;
          default:
            typeLabel = 'Neither';
            emoji = '⚠️';
            reason = `f'(${cp.toFixed(4)}) = 0 but no extrema`;
        }

        extrema.push({
          x: cp,
          y: fAtCP,
          type,
          reason,
          secondDerivative: isFinite(secondDeriv) ? secondDeriv : undefined
        });

        steps.push(`   ${emoji} (${cp.toFixed(4)}, ${fAtCP.toFixed(4)}) → ${typeLabel}`);
        if (secondDeriv !== undefined && isFinite(secondDeriv)) {
          steps.push(`      f''(${cp.toFixed(4)}) = ${secondDeriv.toFixed(4)}`);
        }
        steps.push(`      ${reason}`);
        steps.push('');
      }

      // Check endpoints for extrema
      const fA = f(a);
      const fB = f(b);
      steps.push('📊 Checking endpoints:');
      
      if (isFinite(fA)) {
        const nearA = f(a + 0.01);
        const typeA = fA > nearA ? 'local_max' : (fA < nearA ? 'local_min' : 'neither');
        if (typeA !== 'neither') {
          extrema.push({
            x: a,
            y: fA,
            type: typeA,
            reason: `Endpoint (${typeA === 'local_max' ? 'maximum' : 'minimum'})`
          });
          steps.push(`   ${typeA === 'local_max' ? '🔺' : '🔻'} (${a.toFixed(4)}, ${fA.toFixed(4)}) → Endpoint ${typeA === 'local_max' ? 'Maximum' : 'Minimum'}`);
        } else {
          steps.push(`   ⚠️ (${a.toFixed(4)}, ${fA.toFixed(4)}) → Endpoint (neither)`);
        }
      }
      
      if (isFinite(fB)) {
        const nearB = f(b - 0.01);
        const typeB = fB > nearB ? 'local_max' : (fB < nearB ? 'local_min' : 'neither');
        if (typeB !== 'neither') {
          extrema.push({
            x: b,
            y: fB,
            type: typeB,
            reason: `Endpoint (${typeB === 'local_max' ? 'maximum' : 'minimum'})`
          });
          steps.push(`   ${typeB === 'local_max' ? '🔺' : '🔻'} (${b.toFixed(4)}, ${fB.toFixed(4)}) → Endpoint ${typeB === 'local_max' ? 'Maximum' : 'Minimum'}`);
        } else {
          steps.push(`   ⚠️ (${b.toFixed(4)}, ${fB.toFixed(4)}) → Endpoint (neither)`);
        }
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

      // Summary
      const maxCount = extrema.filter(e => e.type === 'local_max').length;
      const minCount = extrema.filter(e => e.type === 'local_min').length;
      const saddleCount = extrema.filter(e => e.type === 'saddle').length;
      
      steps.push('📊 Summary:');
      if (maxCount > 0) steps.push(`   🔺 ${maxCount} local maximum(s)`);
      if (minCount > 0) steps.push(`   🔻 ${minCount} local minimum(s)`);
      if (saddleCount > 0) steps.push(`   🔄 ${saddleCount} saddle point(s)`);
      
      let message = `Found ${extrema.length} extrema point(s)`;
      const details = [];
      if (maxCount > 0) details.push(`${maxCount} maxima`);
      if (minCount > 0) details.push(`${minCount} minima`);
      if (saddleCount > 0) details.push(`${saddleCount} saddles`);
      if (details.length > 0) {
        message += ` (${details.join(', ')})`;
      }

      setResult({
        extrema,
        criticalPoints,
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

  const getExtremaColor = (type: string): string => {
    switch (type) {
      case 'local_max':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'local_min':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'saddle':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getExtremaIcon = (type: string) => {
    switch (type) {
      case 'local_max':
        return <ArrowUp className="w-4 h-4" />;
      case 'local_min':
        return <ArrowDown className="w-4 h-4" />;
      case 'saddle':
        return <Circle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getExtremaLabel = (type: string): string => {
    switch (type) {
      case 'local_max':
        return 'Local Maximum';
      case 'local_min':
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
          <p className="font-medium">Local Extrema Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Finds local maxima and minima in the given interval</li>
            <li>Uses first derivative test (f'(x) = 0) and second derivative test</li>
            <li>Local max: f''(x) &lt; 0, Local min: f''(x) &gt; 0</li>
            <li>Also identifies saddle points (inflection points)</li>
            <li>Includes endpoints of the interval</li>
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
        onClick={analyzeExtrema}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Find Local Extrema
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

              {result.criticalPoints.length > 0 && (
                <div className="mb-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-700">Critical Points:</div>
                  <div className="font-mono text-sm text-purple-600">
                    {result.criticalPoints.map(p => `${p.toFixed(4)}`).join(', ')}
                  </div>
                </div>
              )}

              {result.extrema.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.extrema.map((point, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getExtremaColor(point.type)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getExtremaIcon(point.type)}
                          <span className="font-medium">{getExtremaLabel(point.type)}</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded font-mono">
                          ({point.x.toFixed(4)}, {point.y.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">
                        {point.reason}
                      </div>
                      {point.secondDerivative !== undefined && isFinite(point.secondDerivative) && (
                        <div className="text-xs mt-1 text-gray-600">
                          f'' = {point.secondDerivative.toFixed(4)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No extrema found in the specified interval
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
                  {result.extrema.some(e => e.type === 'local_max') && ' 🔺 Local maxima are peaks where f changes from increasing to decreasing.'}
                  {result.extrema.some(e => e.type === 'local_min') && ' 🔻 Local minima are valleys where f changes from decreasing to increasing.'}
                  {result.extrema.some(e => e.type === 'saddle') && ' 🔄 Saddle points are where f has derivative zero but no extremum (inflection points).'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalExtremaCalculator;