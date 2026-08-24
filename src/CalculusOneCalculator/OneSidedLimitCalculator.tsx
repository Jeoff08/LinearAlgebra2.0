// components/calculators/OneSidedLimitCalculator.tsx
import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const OneSidedLimitCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('1/x');
  const [point, setPoint] = useState('0');
  const [side, setSide] = useState<'left' | 'right'>('left');
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
            placeholder="e.g., 1/x"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">x →</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 0"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#374151] mb-1">Direction</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-[#374151]">
            <input
              type="radio"
              value="left"
              checked={side === 'left'}
              onChange={(e) => setSide(e.target.value as 'left')}
              className="text-[#2563EB] focus:ring-[#2563EB]"
            />
            <span>From Left (x → a⁻)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-[#374151]">
            <input
              type="radio"
              value="right"
              checked={side === 'right'}
              onChange={(e) => setSide(e.target.value as 'right')}
              className="text-[#2563EB] focus:ring-[#2563EB]"
            />
            <span>From Right (x → a⁺)</span>
          </label>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-bold transition shadow-md shadow-blue-500/20 cursor-pointer"
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