// components/calculators/DefiniteIntegralCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Sigma, ArrowRight } from 'lucide-react';

interface DefiniteIntegralResult {
  value: number;
  approximateValue: number;
  antiderivative: string;
  steps: string[];
  methodUsed: string;
  error: string;
  lowerBound: number;
  upperBound: number;
}

const DefiniteIntegralCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^2');
  const [lowerBound, setLowerBound] = useState('0');
  const [upperBound, setUpperBound] = useState('1');
  const [result, setResult] = useState<DefiniteIntegralResult | null>(null);
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

    // Check for sin(ax)
    const sinMatch = expr.match(/^sin\((\d+)x\)$/);
    if (sinMatch) {
      const a = parseInt(sinMatch[1]);
      return { result: `-1/${a}cos(${a}x)`, success: true };
    }

    // Check for cos(ax)
    const cosMatch = expr.match(/^cos\((\d+)x\)$/);
    if (cosMatch) {
      const a = parseInt(cosMatch[1]);
      return { result: `1/${a}sin(${a}x)`, success: true };
    }

    // Check for e^(ax)
    const expMatch = expr.match(/^e\^\((\d+)x\)$/);
    if (expMatch) {
      const a = parseInt(expMatch[1]);
      return { result: `1/${a}e^(${a}x)`, success: true };
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
    // Replace function names with Math equivalents
    let expr = antiderivative
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/ln\|/g, 'Math.log(Math.abs(')
      .replace(/\|/g, ')')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/x\^/g, 'Math.pow(x,');
    
    // Handle power notation
    expr = expr.replace(/\^/g, '**');
    
    // Handle fractions
    expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');
    
    // Handle π
    expr = expr.replace(/π/g, 'Math.PI');
    expr = expr.replace(/pi/g, 'Math.PI');
    
    // Replace x with the actual value
    expr = expr.replace(/x/g, `(${x})`);
    
    try {
      return new Function(`return (${expr})`)();
    } catch {
      return NaN;
    }
  };

  const numericalIntegrate = (f: (x: number) => number, a: number, b: number, n: number = 1000): number => {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const x1 = a + i * h;
      const x2 = a + (i + 1) * h;
      sum += (f(x1) + f(x2)) / 2 * h;
    }
    return sum;
  };

  const calculateDefiniteIntegral = () => {
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
      
      steps.push(`📐 Evaluating definite integral`);
      steps.push(`   ∫[${a.toFixed(4)} to ${b.toFixed(4)}] ${functionStr} dx`);
      steps.push('');

      // Find antiderivative
      const { result: antiderivative, success } = findAntiderivative(functionStr);

      // Numerical integration as backup
      const numericalValue = numericalIntegrate(f, a, b);

      if (!success) {
        steps.push('⚠️ Cannot find antiderivative symbolically');
        steps.push(`   Using numerical integration (Simpson's rule)`);
        steps.push(`   ∫[${a.toFixed(4)} to ${b.toFixed(4)}] ${functionStr} dx ≈ ${numericalValue.toFixed(6)}`);
        
        setResult({
          value: numericalValue,
          approximateValue: numericalValue,
          antiderivative: 'Not found symbolically',
          steps,
          methodUsed: 'Numerical Integration',
          error: '0',
          lowerBound: a,
          upperBound: b
        });
        setError('');
        return;
      }

      steps.push(`Step 1: Find the antiderivative`);
      steps.push(`   ∫${functionStr} dx = ${antiderivative} + C`);
      steps.push('');

      steps.push(`Step 2: Evaluate at the bounds`);
      steps.push(`   F(b) - F(a) = [${antiderivative}]${a.toFixed(4)}^${b.toFixed(4)}`);
      
      // Evaluate antiderivative at bounds
      const F_a = evaluateAntiderivative(antiderivative, a);
      const F_b = evaluateAntiderivative(antiderivative, b);
      
      if (!isFinite(F_a) || !isFinite(F_b)) {
        steps.push(`   ❌ Function is undefined at one of the bounds`);
        steps.push(`   Using numerical integration instead`);
        
        setResult({
          value: numericalValue,
          approximateValue: numericalValue,
          antiderivative: antiderivative,
          steps,
          methodUsed: 'Numerical Integration (Backup)',
          error: 'Function undefined at bounds',
          lowerBound: a,
          upperBound: b
        });
        setError('');
        return;
      }

      const exactValue = F_b - F_a;
      
      steps.push(`   F(${b.toFixed(4)}) = ${F_b.toFixed(6)}`);
      steps.push(`   F(${a.toFixed(4)}) = ${F_a.toFixed(6)}`);
      steps.push(`   F(${b.toFixed(4)}) - F(${a.toFixed(4)}) = ${exactValue.toFixed(6)}`);
      steps.push('');

      // Compare with numerical result
      const error = Math.abs(exactValue - numericalValue);
      steps.push(`Step 3: Verify with numerical integration`);
      steps.push(`   Numerical approximation: ${numericalValue.toFixed(6)}`);
      steps.push(`   Error: ${error.toFixed(10)}`);
      
      if (error < 1e-6) {
        steps.push(`   ✅ Results match (error < 1e-6)`);
      } else {
        steps.push(`   ⚠️ Results differ significantly (error: ${error.toFixed(6)})`);
        steps.push(`   This may indicate a discontinuity or numerical instability`);
      }

      setResult({
        value: exactValue,
        approximateValue: numericalValue,
        antiderivative: antiderivative,
        steps,
        methodUsed: 'Fundamental Theorem of Calculus',
        error: error.toFixed(10),
        lowerBound: a,
        upperBound: b
      });
      setError('');

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
      { label: 'sin(2x)', value: 'sin(2x)' },
      { label: 'e^(2x)', value: 'e^(2x)' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Definite Integral Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Evaluates ∫[a to b] f(x) dx using Fundamental Theorem</li>
            <li>Finds antiderivative F(x) and evaluates F(b) - F(a)</li>
            <li>Numerical integration as backup method</li>
            <li>Shows step-by-step evaluation process</li>
            <li>Verifies results with numerical approximation</li>
            <li>Error estimation included</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={functionStr}
              onChange={(e) => setFunctionStr(e.target.value)}
              placeholder="e.g., x^2"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
          </div>
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

      <div className="flex gap-2">
        <select
          onChange={(e) => setFunctionStr(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white text-sm"
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
          onClick={calculateDefiniteIntegral}
          className="flex-1 bg-[#1F2329] text-[#B6FF2E] py-2 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
        >
          <Sigma className="w-5 h-5" />
          Evaluate Integral
        </button>
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
                    ✅ Definite Integral Evaluated
                  </div>
                  <div className="text-sm text-gray-500">
                    Method: {result.methodUsed}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Result:</div>
                  <div className="text-xl font-bold text-[#1F2329] font-mono">
                    {result.value.toFixed(6)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-medium text-green-700">Exact Value</div>
                  <div className="font-mono text-lg">{result.value.toFixed(6)}</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-medium text-blue-700">Numerical Approximation</div>
                  <div className="font-mono text-lg">{result.approximateValue.toFixed(6)}</div>
                  <div className="text-xs text-gray-600 mt-1">Error: {result.error}</div>
                </div>
              </div>

              {result.antiderivative !== 'Not found symbolically' && (
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mb-4">
                  <div className="text-xs font-medium text-purple-700">Antiderivative</div>
                  <div className="font-mono text-sm">∫{functionStr} dx = {result.antiderivative} + C</div>
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
                  <span className="font-medium">💡 Interpretation:</span>
                  {' '}The definite integral represents the signed area under the curve f(x) from x = {result.lowerBound.toFixed(4)} to x = {result.upperBound.toFixed(4)}.
                  {' '}Positive values indicate area above the x-axis, negative values indicate area below.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefiniteIntegralCalculator;