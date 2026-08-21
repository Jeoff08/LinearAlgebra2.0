// components/calculators/FTCCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Sigma, ArrowRight, BookOpen } from 'lucide-react';

interface FTCResult {
  value: number;
  derivative: string;
  antiderivative: string;
  steps: string[];
  theoremPart: 'Part 1' | 'Part 2' | 'Both';
  message: string;
}

const FTCCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^2');
  const [lowerBound, setLowerBound] = useState('0');
  const [upperBound, setUpperBound] = useState('1');
  const [ftcPart, setFtcPart] = useState<'part1' | 'part2' | 'both'>('both');
  const [result, setResult] = useState<FTCResult | null>(null);
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

  const findAntiderivative = (fn: string): { result: string; success: boolean } => {
    const expr = fn.trim();

    // Check for constant
    if (expr.match(/^\d+$/)) {
      const constant = parseFloat(expr);
      return { result: `${constant}x`, success: true };
    }

    // Check for power rule: x^n
    const powerMatch = expr.match(/^x\^(\d+)$/);
    if (powerMatch) {
      const n = parseInt(powerMatch[1]);
      if (n === -1) {
        return { result: 'ln|x|', success: true };
      }
      const newPower = n + 1;
      return { result: `x^${newPower}/${newPower}`, success: true };
    }

    // Check for sin(x)
    if (expr === 'sin(x)' || expr === 'sinx') {
      return { result: '-cos(x)', success: true };
    }

    // Check for cos(x)
    if (expr === 'cos(x)' || expr === 'cosx') {
      return { result: 'sin(x)', success: true };
    }

    // Check for tan(x)
    if (expr === 'tan(x)' || expr === 'tanx') {
      return { result: '-ln|cos(x)|', success: true };
    }

    // Check for sec^2(x)
    if (expr === 'sec(x)^2' || expr === 'sec^2(x)' || expr === 'sec²(x)') {
      return { result: 'tan(x)', success: true };
    }

    // Check for e^x
    if (expr === 'e^x' || expr === 'exp(x)') {
      return { result: 'e^x', success: true };
    }

    // Check for 1/x
    if (expr === '1/x' || expr === 'x^(-1)' || expr === 'x^-1') {
      return { result: 'ln|x|', success: true };
    }

    // Check for sqrt(x)
    if (expr === 'sqrt(x)' || expr === 'x^(1/2)' || expr === 'x^0.5') {
      return { result: '(2/3)x^(3/2)', success: true };
    }

    // Check for ax^n pattern
    const powerWithCoeff = expr.match(/^(\d+)\*?x\^(\d+)$/);
    if (powerWithCoeff) {
      const coeff = parseInt(powerWithCoeff[1]);
      const n = parseInt(powerWithCoeff[2]);
      if (n === -1) {
        return { result: `${coeff}ln|x|`, success: true };
      }
      const newPower = n + 1;
      const newCoeff = coeff / newPower;
      return { result: `${newCoeff}x^${newPower}`, success: true };
    }

    // Check for polynomial
    if (expr.includes('+')) {
      const terms = expr.split('+').map(t => t.trim());
      let integratedTerms: string[] = [];
      let success = true;
      
      for (const term of terms) {
        const termResult = findAntiderivative(term);
        if (!termResult.success) {
          success = false;
          break;
        }
        integratedTerms.push(termResult.result);
      }
      
      if (success) {
        return { result: integratedTerms.join(' + '), success: true };
      }
    }

    return { result: '', success: false };
  };

  const evaluateAntiderivative = (antiderivative: string, x: number): number => {
    let expr = antiderivative
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/ln\|/g, 'Math.log(Math.abs(')
      .replace(/\|/g, ')')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/x\^/g, 'Math.pow(x,');
    
    expr = expr.replace(/\^/g, '**');
    expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');
    expr = expr.replace(/π/g, 'Math.PI');
    expr = expr.replace(/pi/g, 'Math.PI');
    expr = expr.replace(/x/g, `(${x})`);
    
    try {
      return new Function(`return (${expr})`)();
    } catch {
      return NaN;
    }
  };

  const calculateFTC = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(lowerBound);
      const b = parseFloat(upperBound);
      
      if (isNaN(a) || isNaN(b)) {
        setError('Please enter valid numbers for the bounds');
        setResult(null);
        return;
      }

      if (a >= b) {
        setError('Lower bound must be less than upper bound');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      
      steps.push(`📐 Fundamental Theorem of Calculus Calculator`);
      steps.push(`   f(x) = ${functionStr}`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');

      // Find antiderivative
      const { result: antiderivative, success } = findAntiderivative(functionStr);

      // Part 1: d/dx ∫[a to x] f(t) dt = f(x)
      if (ftcPart === 'part1' || ftcPart === 'both') {
        steps.push('📖 FTC Part 1:');
        steps.push(`   d/dx [∫[${a.toFixed(4)} to x] ${functionStr} dt] = ${functionStr}`);
        steps.push(`   This is the derivative of the integral function.`);
        steps.push('');
      }

      // Helper function to get part label
      const getPartLabel = (part: string): string => {
        if (part === 'part1') return 'Part 1';
        if (part === 'part2') return 'Part 2';
        return 'Both';
      };

      const getPartNumber = (part: string): string => {
        if (part === 'part1') return '1';
        if (part === 'part2') return '2';
        return '1 & 2';
      };

      // Part 2: ∫[a to b] f(x) dx = F(b) - F(a)
      if (ftcPart === 'part2' || ftcPart === 'both') {
        steps.push('📖 FTC Part 2:');
        
        if (!success) {
          steps.push('   ⚠️ Cannot find antiderivative symbolically');
          steps.push('   Using numerical integration instead');
          
          // Numerical integration
          const h = (b - a) / 1000;
          let sum = 0;
          for (let i = 0; i < 1000; i++) {
            const x1 = a + i * h;
            const x2 = a + (i + 1) * h;
            sum += (f(x1) + f(x2)) / 2 * h;
          }
          
          steps.push(`   ∫[${a.toFixed(4)} to ${b.toFixed(4)}] ${functionStr} dx ≈ ${sum.toFixed(6)}`);
          
          setResult({
            value: sum,
            derivative: functionStr,
            antiderivative: 'Not found symbolically',
            steps,
            theoremPart: getPartLabel(ftcPart) as 'Part 1' | 'Part 2' | 'Both',
            message: `FTC Part ${getPartNumber(ftcPart)} applied (numerical integration)`
          });
          setError('');
          return;
        }

        steps.push(`   Step 1: Find antiderivative F(x)`);
        steps.push(`   F(x) = ∫${functionStr} dx = ${antiderivative} + C`);
        steps.push('');

        steps.push(`   Step 2: Evaluate F(b) - F(a)`);
        steps.push(`   F(${b.toFixed(4)}) - F(${a.toFixed(4)}) = [${antiderivative}]${a.toFixed(4)}^${b.toFixed(4)}`);
        
        const F_a = evaluateAntiderivative(antiderivative, a);
        const F_b = evaluateAntiderivative(antiderivative, b);
        
        if (!isFinite(F_a) || !isFinite(F_b)) {
          steps.push(`   ❌ Function is undefined at one of the bounds`);
          steps.push(`   Using numerical integration instead`);
          
          const h = (b - a) / 1000;
          let sum = 0;
          for (let i = 0; i < 1000; i++) {
            const x1 = a + i * h;
            const x2 = a + (i + 1) * h;
            sum += (f(x1) + f(x2)) / 2 * h;
          }
          
          setResult({
            value: sum,
            derivative: functionStr,
            antiderivative: antiderivative,
            steps,
            theoremPart: getPartLabel(ftcPart) as 'Part 1' | 'Part 2' | 'Both',
            message: `FTC Part ${getPartNumber(ftcPart)} applied (numerical backup)`
          });
          setError('');
          return;
        }

        const exactValue = F_b - F_a;
        
        steps.push(`   F(${b.toFixed(4)}) = ${F_b.toFixed(6)}`);
        steps.push(`   F(${a.toFixed(4)}) = ${F_a.toFixed(6)}`);
        steps.push(`   F(${b.toFixed(4)}) - F(${a.toFixed(4)}) = ${exactValue.toFixed(6)}`);
        steps.push('');

        // Verify with numerical integration
        const h = (b - a) / 1000;
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
          const x1 = a + i * h;
          const x2 = a + (i + 1) * h;
          sum += (f(x1) + f(x2)) / 2 * h;
        }
        
        steps.push(`   Step 3: Verify with numerical integration`);
        steps.push(`   Numerical approximation: ${sum.toFixed(6)}`);
        steps.push(`   Error: ${Math.abs(exactValue - sum).toFixed(10)}`);
        
        const theoremPart = getPartLabel(ftcPart) as 'Part 1' | 'Part 2' | 'Both';
        
        setResult({
          value: exactValue,
          derivative: functionStr,
          antiderivative: antiderivative,
          steps,
          theoremPart,
          message: `FTC ${theoremPart} successfully applied`
        });
        setError('');
      }

    } catch (e) {
      setError('Invalid function or bounds. Please check your input.');
      setResult(null);
    }
  };

  const getFunctionExamples = () => {
    return [
      { label: 'x²', value: 'x^2' },
      { label: 'sin(x)', value: 'sin(x)' },
      { label: 'cos(x)', value: 'cos(x)' },
      { label: 'e^x', value: 'e^x' },
      { label: '1/x', value: '1/x' },
      { label: 'sqrt(x)', value: 'sqrt(x)' },
      { label: '2x', value: '2x' },
      { label: 'x² + 2x', value: 'x^2 + 2x' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Fundamental Theorem of Calculus:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li><strong>Part 1:</strong> d/dx ∫[a to x] f(t) dt = f(x)</li>
            <li><strong>Part 2:</strong> ∫[a to b] f(x) dx = F(b) - F(a)</li>
            <li>Connects differentiation and integration</li>
            <li>Shows step-by-step application of both parts</li>
            <li>Verifies results with numerical integration</li>
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
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Lower Bound (a)</label>
          <input
            type="text"
            value={lowerBound}
            onChange={(e) => setLowerBound(e.target.value)}
            placeholder="e.g., 0"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Upper Bound (b)</label>
          <input
            type="text"
            value={upperBound}
            onChange={(e) => setUpperBound(e.target.value)}
            placeholder="e.g., 1"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">FTC Part to Apply</label>
          <select
            value={ftcPart}
            onChange={(e) => setFtcPart(e.target.value as 'part1' | 'part2' | 'both')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white"
          >
            <option value="part1">Part 1 (Derivative of Integral)</option>
            <option value="part2">Part 2 (Evaluate Definite Integral)</option>
            <option value="both">Both Parts</option>
          </select>
        </div>
        <div className="flex gap-2">
          <select
            onChange={(e) => setFunctionStr(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white text-sm"
            value=""
          >
            <option value="">Quick Examples</option>
            {getFunctionExamples().map((ex) => (
              <option key={ex.value} value={ex.value}>
                {ex.label}
              </option>
            ))}
          </select>
          <button
            onClick={calculateFTC}
            className="flex-1 bg-[#1F2329] text-[#B6FF2E] py-2 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Apply FTC
          </button>
        </div>
      </div>

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
                    ✅ FTC Applied
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Theorems Used:</div>
                  <div className="font-mono text-sm">{result.theoremPart}</div>
                </div>
              </div>

              {/* FTC Part 1 Result */}
              {(ftcPart === 'part1' || ftcPart === 'both') && (
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-3">
                  <div className="text-xs font-medium text-green-700">FTC Part 1:</div>
                  <div className="font-mono text-sm">
                    d/dx [∫[{lowerBound} to x] {functionStr} dt] = {result.derivative}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    The derivative of the integral equals the original function
                  </div>
                </div>
              )}

              {/* FTC Part 2 Result */}
              {(ftcPart === 'part2' || ftcPart === 'both') && result.antiderivative !== 'Not found symbolically' && (
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mb-3">
                  <div className="text-xs font-medium text-purple-700">FTC Part 2:</div>
                  <div className="font-mono text-sm">
                    ∫[{lowerBound} to {upperBound}] {functionStr} dx = {result.value.toFixed(6)}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    F(x) = {result.antiderivative} + C
                  </div>
                </div>
              )}

              {/* Numerical Result (if Part 2) */}
              {(ftcPart === 'part2' || ftcPart === 'both') && (
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                  <div className="text-xs font-medium text-blue-700">Result:</div>
                  <div className="text-xl font-bold text-[#1F2329] font-mono">
                    {result.value.toFixed(6)}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Definite integral evaluated from {lowerBound} to {upperBound}
                  </div>
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
                  {' '}The Fundamental Theorem of Calculus is the bridge between differential and integral calculus.
                  {' '}It shows that differentiation and integration are inverse operations.
                  {result.theoremPart === 'Both' && ' Both parts are demonstrated above.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FTCCalculator;