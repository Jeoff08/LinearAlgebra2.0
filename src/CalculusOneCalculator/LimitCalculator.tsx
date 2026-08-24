// components/calculators/LimitCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle } from 'lucide-react';

const LimitCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('(x^2-1)/(x-1)');
  const [point, setPoint] = useState('1');
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
      
      // Try direct evaluation
      let direct = f(a);
      if (isFinite(direct)) {
        setResult(`lim(x→${a}) = ${direct.toFixed(4)}`);
        setError('');
        return;
      }
      
      // Try approaching from both sides
      const left = f(a - 1e-7);
      const right = f(a + 1e-7);
      if (isFinite(left) && isFinite(right) && Math.abs(left - right) < 1e-6) {
        setResult(`lim(x→${a}) ≈ ${((left + right) / 2).toFixed(4)}`);
        setError('');
        return;
      }
      setResult(`Limit: Left=${left.toFixed(4)}, Right=${right.toFixed(4)} (may not exist)`);
      setError('');
    } catch (e) {
      setError('Invalid function or point');
      setResult('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            type="text"
            value={functionStr}
            onChange={(e) => setFunctionStr(e.target.value)}
            placeholder="e.g., (x^2-1)/(x-1)"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-1">x →</label>
          <input
            type="text"
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-bold transition shadow-md shadow-blue-500/20"
      >
        Calculate Limit
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

export default LimitCalculator;