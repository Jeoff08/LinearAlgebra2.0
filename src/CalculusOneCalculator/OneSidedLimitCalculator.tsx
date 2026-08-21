// components/calculators/OneSidedLimitCalculator.tsx
import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const OneSidedLimitCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('1/x');
  const [point, setPoint] = useState('0');
  const [side, setSide] = useState('left');
  const [result, setResult] = useState<string>('');
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

  const calculate = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(point);
      const h = 1e-8;
      const val = side === 'left' ? f(a - h) : f(a + h);
      if (!isFinite(val)) {
        setResult(`Limit from ${side} does not exist (infinite)`);
        setError('');
        return;
      }
      const symbol = side === 'left' ? '⁻' : '⁺';
      setResult(`lim(x→${a}${symbol}) = ${val.toFixed(6)}`);
      setError('');
    } catch (e) {
      setError('Invalid input');
      setResult('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
            placeholder="e.g., 1/x"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">x →</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 0"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Side</label>
          <select
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition"
          >
            <option value="left">Left (-)</option>
            <option value="right">Right (+)</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md"
      >
        Calculate One-Sided Limit
      </button>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {result && !error && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-800 font-mono">{result}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneSidedLimitCalculator;