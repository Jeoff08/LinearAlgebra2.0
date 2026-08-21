// components/calculators/ContinuityCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

interface ContinuityResult {
  isContinuous: boolean;
  message: string;
  details: string[];
  leftLimit?: number;
  rightLimit?: number;
  functionValue?: number;
}

const ContinuityCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('(x^2-1)/(x-1)');
  const [point, setPoint] = useState('1');
  const [result, setResult] = useState<ContinuityResult | null>(null);
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
      .replace(/\^/g, '**');
    return new Function('x', `return (${sanitized})`) as (x: number) => number;
  };

  const checkContinuity = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);
      
      if (isNaN(a)) {
        setError('Please enter a valid number for the point');
        setResult(null);
        return;
      }

      const details: string[] = [];
      
      // Step 1: Check if function is defined at point
      let fAtA: number;
      let isDefined = true;
      try {
        fAtA = f(a);
        if (!isFinite(fAtA)) {
          isDefined = false;
          details.push(`❌ f(${a}) is undefined (division by zero or infinity)`);
        } else {
          details.push(`✅ f(${a}) = ${fAtA.toFixed(6)}`);
        }
      } catch {
        isDefined = false;
        details.push(`❌ f(${a}) is undefined`);
        fAtA = NaN;
      }

      // Step 2: Check left-hand limit
      let leftLimit: number | undefined;
      let leftExists = true;
      try {
        const leftValues: number[] = [];
        for (let i = 1; i <= 12; i++) {
          const h = 1 / Math.pow(10, i);
          const val = f(a - h);
          if (isFinite(val)) {
            leftValues.push(val);
          }
        }
        if (leftValues.length > 0) {
          leftLimit = leftValues.reduce((sum, v) => sum + v, 0) / leftValues.length;
          // Check if values converge
          const variance = leftValues.reduce((sum, v) => sum + Math.pow(v - leftLimit!, 2), 0) / leftValues.length;
          if (variance < 1e-6) {
            details.push(`✅ Left-hand limit = ${leftLimit.toFixed(6)}`);
          } else {
            leftExists = false;
            details.push(`❌ Left-hand limit does not exist (oscillating or diverging)`);
          }
        } else {
          leftExists = false;
          details.push(`❌ Cannot compute left-hand limit`);
        }
      } catch {
        leftExists = false;
        details.push(`❌ Error computing left-hand limit`);
      }

      // Step 3: Check right-hand limit
      let rightLimit: number | undefined;
      let rightExists = true;
      try {
        const rightValues: number[] = [];
        for (let i = 1; i <= 12; i++) {
          const h = 1 / Math.pow(10, i);
          const val = f(a + h);
          if (isFinite(val)) {
            rightValues.push(val);
          }
        }
        if (rightValues.length > 0) {
          rightLimit = rightValues.reduce((sum, v) => sum + v, 0) / rightValues.length;
          const variance = rightValues.reduce((sum, v) => sum + Math.pow(v - rightLimit!, 2), 0) / rightValues.length;
          if (variance < 1e-6) {
            details.push(`✅ Right-hand limit = ${rightLimit.toFixed(6)}`);
          } else {
            rightExists = false;
            details.push(`❌ Right-hand limit does not exist (oscillating or diverging)`);
          }
        } else {
          rightExists = false;
          details.push(`❌ Cannot compute right-hand limit`);
        }
      } catch {
        rightExists = false;
        details.push(`❌ Error computing right-hand limit`);
      }

      // Step 4: Determine continuity
      const limitExists = leftExists && rightExists && leftLimit !== undefined && rightLimit !== undefined;
      
      let isContinuous = false;
      let message = '';
      
      if (!isDefined) {
        message = `f(${a}) is not defined`;
        isContinuous = false;
      } else if (!limitExists) {
        message = 'Limit does not exist';
        isContinuous = false;
      } else if (Math.abs(leftLimit! - rightLimit!) > 1e-6) {
        message = 'Left and right limits are not equal';
        isContinuous = false;
      } else if (Math.abs((leftLimit! + rightLimit!) / 2 - fAtA) > 1e-6) {
        message = `Limit value ≠ f(${a})`;
        isContinuous = false;
      } else {
        message = `f is continuous at x = ${a}`;
        isContinuous = true;
      }

      if (!isContinuous && isDefined && leftExists && rightExists && 
          leftLimit !== undefined && rightLimit !== undefined && 
          Math.abs(leftLimit - rightLimit) < 1e-6) {
        const limitValue = (leftLimit + rightLimit) / 2;
        if (isFinite(fAtA)) {
          details.push(`ℹ️ Limit = ${limitValue.toFixed(6)}, f(${a}) = ${fAtA.toFixed(6)}`);
          details.push(`ℹ️ Difference = ${Math.abs(limitValue - fAtA).toFixed(6)}`);
        }
      }

      setResult({
        isContinuous,
        message,
        details,
        leftLimit,
        rightLimit,
        functionValue: isDefined ? fAtA : undefined
      });
      setError('');

    } catch (e) {
      setError('Invalid function or point. Please check your input.');
      setResult(null);
    }
  };

  const getResultIcon = () => {
    if (!result) return null;
    if (result.isContinuous) {
      return <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />;
    }
    return <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />;
  };

  const getResultColor = () => {
    if (!result) return '';
    return result.isContinuous ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Continuity Conditions:</p>
          <p className="text-xs">A function f is continuous at x = a if:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>f(a) is defined</li>
            <li>lim(x→a) f(x) exists</li>
            <li>lim(x→a) f(x) = f(a)</li>
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
            placeholder="e.g., (x^2-1)/(x-1)"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">x =</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={checkContinuity}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Check Continuity
      </button>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {result && (
        <div className={`p-4 border rounded-lg ${getResultColor()}`}>
          <div className="flex items-start gap-3">
            {getResultIcon()}
            <div className="flex-1">
              <div className="text-lg font-semibold mb-2">
                {result.isContinuous ? (
                  <span className="text-green-700">✅ Continuous</span>
                ) : (
                  <span className="text-red-700">❌ Not Continuous</span>
                )}
                <span className="text-sm font-normal text-gray-600 ml-2">
                  at x = {point}
                </span>
              </div>
              
              <div className="text-sm font-medium text-gray-700 mb-2">
                {result.message}
              </div>

              <div className="space-y-1">
                {result.details.map((detail, index) => (
                  <div key={index} className="text-sm text-gray-600 font-mono">
                    {detail}
                  </div>
                ))}
              </div>

              {result.isContinuous && (
                <div className="mt-2 p-2 bg-green-100 rounded text-sm text-green-800 font-medium">
                  ✓ The function is continuous at x = {point}
                </div>
              )}

              {!result.isContinuous && (
                <div className="mt-2 p-2 bg-red-100 rounded text-sm text-red-800">
                  <span className="font-medium">✗ The function is discontinuous at x = {point}</span>
                  <br />
                  <span className="text-xs">
                    {result.details.some(d => d.includes('undefined')) 
                      ? 'The function is not defined at this point.'
                      : result.details.some(d => d.includes('does not exist'))
                      ? 'The limit does not exist at this point.'
                      : 'The limit value does not equal the function value.'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinuityCalculator;