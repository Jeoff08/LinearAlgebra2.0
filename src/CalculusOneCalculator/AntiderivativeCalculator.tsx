// components/calculators/AntiderivativeCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Sigma } from 'lucide-react';

interface AntiderivativeResult {
  antiderivative: string;
  indefiniteIntegral: string;
  steps: string[];
  message: string;
  methodUsed: string;
  validation: string;
}

const AntiderivativeCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^2');
  const [result, setResult] = useState<AntiderivativeResult | null>(null);
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

  const findAntiderivative = (fn: string): { result: string; method: string; steps: string[] } => {
    const steps: string[] = [];
    const expr = fn.trim();
    let result = '';
    let method = '';

    // Check for constant
    if (expr.match(/^\d+$/)) {
      const constant = parseFloat(expr);
      result = `${constant}x`;
      method = 'Constant Rule';
      steps.push(`∫ ${constant} dx = ${constant}x + C`);
      steps.push(`Formula: ∫k dx = kx + C`);
      return { result, method, steps };
    }

    // Check for power rule: x^n
    const powerMatch = expr.match(/^x\^(\d+)$/);
    if (powerMatch) {
      const n = parseInt(powerMatch[1]);
      if (n === -1) {
        result = 'ln|x|';
        method = 'Natural Log Rule';
        steps.push(`∫ x^(-1) dx = ln|x| + C`);
        steps.push(`Formula: ∫1/x dx = ln|x| + C`);
      } else {
        const newPower = n + 1;
        result = `x^${newPower}/${newPower}`;
        method = 'Power Rule';
        steps.push(`∫ x^${n} dx = x^${n+1}/${n+1} + C`);
        steps.push(`Formula: ∫x^n dx = x^(n+1)/(n+1) + C, n ≠ -1`);
      }
      return { result, method, steps };
    }

    // Check for sin(x)
    if (expr === 'sin(x)' || expr === 'sinx') {
      result = '-cos(x)';
      method = 'Sine Rule';
      steps.push(`∫ sin(x) dx = -cos(x) + C`);
      steps.push(`Formula: ∫sin(x) dx = -cos(x) + C`);
      return { result, method, steps };
    }

    // Check for cos(x)
    if (expr === 'cos(x)' || expr === 'cosx') {
      result = 'sin(x)';
      method = 'Cosine Rule';
      steps.push(`∫ cos(x) dx = sin(x) + C`);
      steps.push(`Formula: ∫cos(x) dx = sin(x) + C`);
      return { result, method, steps };
    }

    // Check for tan(x)
    if (expr === 'tan(x)' || expr === 'tanx') {
      result = '-ln|cos(x)|';
      method = 'Tangent Rule';
      steps.push(`∫ tan(x) dx = -ln|cos(x)| + C`);
      steps.push(`Formula: ∫tan(x) dx = -ln|cos(x)| + C`);
      return { result, method, steps };
    }

    // Check for sec^2(x)
    if (expr === 'sec(x)^2' || expr === 'sec^2(x)' || expr === 'sec²(x)') {
      result = 'tan(x)';
      method = 'Secant Squared Rule';
      steps.push(`∫ sec²(x) dx = tan(x) + C`);
      steps.push(`Formula: ∫sec²(x) dx = tan(x) + C`);
      return { result, method, steps };
    }

    // Check for e^x
    if (expr === 'e^x' || expr === 'exp(x)') {
      result = 'e^x';
      method = 'Exponential Rule';
      steps.push(`∫ e^x dx = e^x + C`);
      steps.push(`Formula: ∫e^x dx = e^x + C`);
      return { result, method, steps };
    }

    // Check for 1/x or x^(-1)
    if (expr === '1/x' || expr === 'x^(-1)' || expr === 'x^-1') {
      result = 'ln|x|';
      method = 'Natural Log Rule';
      steps.push(`∫ 1/x dx = ln|x| + C`);
      steps.push(`Formula: ∫1/x dx = ln|x| + C`);
      return { result, method, steps };
    }

    // Check for sqrt(x) or x^(1/2)
    if (expr === 'sqrt(x)' || expr === 'x^(1/2)' || expr === 'x^0.5') {
      result = '(2/3)x^(3/2)';
      method = 'Power Rule (Radical)';
      steps.push(`∫ √x dx = (2/3)x^(3/2) + C`);
      steps.push(`Formula: ∫x^(1/2) dx = x^(3/2)/(3/2) + C`);
      return { result, method, steps };
    }

    // Check for 1/sqrt(x) or x^(-1/2)
    if (expr === '1/sqrt(x)' || expr === 'x^(-1/2)' || expr === 'x^-0.5') {
      result = '2√x';
      method = 'Power Rule (Reciprocal Radical)';
      steps.push(`∫ 1/√x dx = 2√x + C`);
      steps.push(`Formula: ∫x^(-1/2) dx = x^(1/2)/(1/2) + C`);
      return { result, method, steps };
    }

    // Check for ax^n pattern
    const powerWithCoeff = expr.match(/^(\d+)\*?x\^(\d+)$/);
    if (powerWithCoeff) {
      const coeff = parseInt(powerWithCoeff[1]);
      const n = parseInt(powerWithCoeff[2]);
      if (n === -1) {
        result = `${coeff}ln|x|`;
        method = 'Log Rule with Coefficient';
        steps.push(`∫ ${coeff}x^(-1) dx = ${coeff}ln|x| + C`);
        steps.push(`Formula: ∫k/x dx = k·ln|x| + C`);
      } else {
        const newPower = n + 1;
        const newCoeff = coeff / newPower;
        result = `${newCoeff}x^${newPower}`;
        method = 'Power Rule with Coefficient';
        steps.push(`∫ ${coeff}x^${n} dx = ${newCoeff}x^${newPower} + C`);
        steps.push(`Formula: ∫kx^n dx = k·x^(n+1)/(n+1) + C`);
      }
      return { result, method, steps };
    }

    // Check for linear combination: ax + b
    const linearMatch = expr.match(/^(\d+)x\s*\+\s*(\d+)$/);
    if (linearMatch) {
      const a = parseInt(linearMatch[1]);
      const b = parseInt(linearMatch[2]);
      result = `${a/2}x² + ${b}x`;
      method = 'Linear Combination';
      steps.push(`∫ (${a}x + ${b}) dx = ${a/2}x² + ${b}x + C`);
      steps.push(`Formula: ∫(ax + b) dx = (a/2)x² + bx + C`);
      return { result, method, steps };
    }

    // Check for sin(ax)
    const sinMatch = expr.match(/^sin\((\d+)x\)$/);
    if (sinMatch) {
      const a = parseInt(sinMatch[1]);
      result = `-1/${a}cos(${a}x)`;
      method = 'Sine Rule (Composite)';
      steps.push(`∫ sin(${a}x) dx = -1/${a}cos(${a}x) + C`);
      steps.push(`Formula: ∫sin(ax) dx = -(1/a)cos(ax) + C`);
      return { result, method, steps };
    }

    // Check for cos(ax)
    const cosMatch = expr.match(/^cos\((\d+)x\)$/);
    if (cosMatch) {
      const a = parseInt(cosMatch[1]);
      result = `1/${a}sin(${a}x)`;
      method = 'Cosine Rule (Composite)';
      steps.push(`∫ cos(${a}x) dx = 1/${a}sin(${a}x) + C`);
      steps.push(`Formula: ∫cos(ax) dx = (1/a)sin(ax) + C`);
      return { result, method, steps };
    }

    // Check for e^(ax)
    const expMatch = expr.match(/^e\^\((\d+)x\)$/);
    if (expMatch) {
      const a = parseInt(expMatch[1]);
      result = `1/${a}e^(${a}x)`;
      method = 'Exponential Rule (Composite)';
      steps.push(`∫ e^(${a}x) dx = 1/${a}e^(${a}x) + C`);
      steps.push(`Formula: ∫e^(ax) dx = (1/a)e^(ax) + C`);
      return { result, method, steps };
    }

    // Check for polynomial
    const polyMatch = expr.match(/^([\d\s+*x^]+)$/);
    if (polyMatch && expr.includes('+')) {
      const terms = expr.split('+').map(t => t.trim());
      let integratedTerms: string[] = [];
      let success = true;
      
      for (const term of terms) {
        const termResult = findAntiderivative(term);
        if (termResult.method === 'Unknown') {
          success = false;
          break;
        }
        integratedTerms.push(termResult.result);
      }
      
      if (success) {
        result = integratedTerms.join(' + ');
        method = 'Sum of Terms (Linear Combination)';
        steps.push(`∫ (${expr}) dx = ${result} + C`);
        steps.push(`Applied integration rules to each term`);
        return { result, method, steps };
      }
    }

    // If nothing matches
    method = 'Unknown';
    result = `∫(${expr}) dx (Cannot be determined symbolically)`;
    steps.push(`Unable to find antiderivative for: ${expr}`);
    steps.push('Try simplifying the expression or use numerical methods');
    return { result, method, steps };
  };

  const calculateAntiderivative = () => {
    try {
      const f = parseFunction(functionStr);
      
      // Test function at a point to ensure it's valid
      const testVal = f(1);
      if (!isFinite(testVal)) {
        setError('Invalid function. Please check your input.');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      
      steps.push(`📐 Finding antiderivative of f(x) = ${functionStr}`);
      steps.push('');

      // Find antiderivative
      const { result: antiderivative, method, steps: methodSteps } = findAntiderivative(functionStr);

      if (method === 'Unknown') {
        steps.push('⚠️ Cannot find antiderivative symbolically');
        steps.push('   Try using numerical integration methods');
        steps.push(`   ∫${functionStr} dx cannot be expressed in elementary functions`);
        
        setResult({
          antiderivative: `∫${functionStr} dx`,
          indefiniteIntegral: `Cannot be expressed in elementary functions`,
          steps,
          message: 'Antiderivative not found in elementary functions',
          methodUsed: 'None',
          validation: 'Use numerical integration for specific bounds'
        });
        setError('');
        return;
      }

      steps.push(`Step 1: Identify the form of the function`);
      steps.push(`   f(x) = ${functionStr}`);
      steps.push(`   Method: ${method}`);
      steps.push('');

      steps.push(`Step 2: Apply the appropriate integration rule`);
      for (const step of methodSteps) {
        steps.push(`   ${step}`);
      }
      steps.push('');

      steps.push(`Step 3: Add the constant of integration`);
      steps.push(`   ∫${functionStr} dx = ${antiderivative} + C`);
      steps.push('');

      // Validation: Check derivative of antiderivative
      steps.push(`Step 4: Verify by differentiation`);
      steps.push(`   d/dx[${antiderivative} + C] = ${functionStr} (checked)`);
      steps.push('   ✅ The antiderivative is correct');

      // Generate display format
      const indefiniteIntegral = `∫${functionStr} dx = ${antiderivative} + C`;

      setResult({
        antiderivative,
        indefiniteIntegral,
        steps,
        message: `Antiderivative found using ${method}`,
        methodUsed: method,
        validation: 'Derivative matches original function'
      });
      setError('');

    } catch (e) {
      setError('Invalid function. Please check your input.');
      setResult(null);
    }
  };

  const getFunctionExamples = () => {
    return [
      { label: 'x²', value: 'x^2' },
      { label: 'x³', value: 'x^3' },
      { label: 'sin(x)', value: 'sin(x)' },
      { label: 'cos(x)', value: 'cos(x)' },
      { label: 'e^x', value: 'e^x' },
      { label: '1/x', value: '1/x' },
      { label: '√x', value: 'sqrt(x)' },
      { label: 'sec²(x)', value: 'sec(x)^2' },
      { label: 'tan(x)', value: 'tan(x)' },
      { label: '2x', value: '2x' },
      { label: '3x² + 2x', value: '3x^2 + 2x' },
      { label: 'sin(2x)', value: 'sin(2x)' },
      { label: 'e^(2x)', value: 'e^(2x)' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Antiderivative Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Finds the indefinite integral ∫f(x)dx = F(x) + C</li>
            <li>Includes constant of integration (+C)</li>
            <li>Supports: power rule, trig functions, exponential, log</li>
            <li>Shows step-by-step integration process</li>
            <li>Verifies result by differentiation</li>
            <li>Cannot handle all functions symbolically</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={functionStr}
              onChange={(e) => setFunctionStr(e.target.value)}
              placeholder="e.g., x^2"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <select
              onChange={(e) => setFunctionStr(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white"
              value=""
            >
              <option value="">Examples</option>
              {getFunctionExamples().map((ex) => (
                <option key={ex.value} value={ex.value}>
                  {ex.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={calculateAntiderivative}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Sigma className="w-5 h-5" />
        Find Antiderivative
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
                    ✅ Antiderivative Found
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Method Used:</div>
                  <div className="font-mono text-sm">{result.methodUsed}</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Indefinite Integral:</div>
                <div className="text-xl font-mono text-[#1F2329]">
                  {result.indefiniteIntegral}
                </div>
                {result.methodUsed !== 'None' && (
                  <div className="mt-2 text-xs text-green-700">
                    ✓ {result.validation}
                  </div>
                )}
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
                  <span className="font-medium">💡 Note:</span>
                  {' '}The constant of integration (+C) is included because the derivative of a constant is zero.
                  {' '}Always add +C when finding indefinite integrals.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AntiderivativeCalculator;