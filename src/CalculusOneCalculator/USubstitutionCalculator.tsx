// components/calculators/USubstitutionCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, ArrowRight, RefreshCw } from 'lucide-react';

interface USubstitutionResult {
  result: string;
  indefiniteIntegral: string;
  definiteValue?: number;
  u: string;
  du: string;
  steps: string[];
  methodUsed: string;
  message: string;
}

const USubstitutionCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('2x * sin(x^2)');
  const [lowerBound, setLowerBound] = useState('0');
  const [upperBound, setUpperBound] = useState('1');
  const [uSubstitution, setUSubstitution] = useState('');
  const [useDefinite, setUseDefinite] = useState(false);
  const [result, setResult] = useState<USubstitutionResult | null>(null);
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

  const detectUSubstitution = (fn: string): { u: string; du: string; success: boolean } => {
    const expr = fn.trim();
    
    // Pattern: f(g(x)) * g'(x)
    // Check for sin(x^2) * 2x pattern
    if (expr.includes('sin') && expr.includes('^2')) {
      const sinMatch = expr.match(/sin\(([^)]+)\)/);
      if (sinMatch) {
        const inner = sinMatch[1];
        // Check if there's a derivative term
        if (expr.includes('2x') || expr.includes('2*x')) {
          return { u: inner, du: `2x dx`, success: true };
        }
      }
    }

    // Pattern: cos(x^2) * 2x
    if (expr.includes('cos') && expr.includes('^2')) {
      const cosMatch = expr.match(/cos\(([^)]+)\)/);
      if (cosMatch) {
        const inner = cosMatch[1];
        if (expr.includes('2x') || expr.includes('2*x')) {
          return { u: inner, du: `2x dx`, success: true };
        }
      }
    }

    // Pattern: e^(x^2) * 2x
    if (expr.includes('e^') && expr.includes('^2')) {
      const expMatch = expr.match(/e\^\(([^)]+)\)/);
      if (expMatch) {
        const inner = expMatch[1];
        if (expr.includes('2x') || expr.includes('2*x')) {
          return { u: inner, du: `2x dx`, success: true };
        }
      }
    }

    // Pattern: x * (something)^n
    const powerMatch = expr.match(/x\s*\*\s*\(([^)]+)\)\^(\d+)/);
    if (powerMatch) {
      const inner = powerMatch[1];
      const power = parseInt(powerMatch[2]);
      if (power > 0) {
        return { u: inner, du: `dx`, success: true };
      }
    }

    // Pattern: 1/(ax + b)
    const reciprocalMatch = expr.match(/1\s*\/\s*\((\d+)x\s*\+\s*(\d+)\)/);
    if (reciprocalMatch) {
      const a = parseInt(reciprocalMatch[1]);
      return { u: `${a}x + ${reciprocalMatch[2]}`, du: `${a} dx`, success: true };
    }

    // Pattern: cos(ax) * a
    const cosAMatch = expr.match(/cos\((\d+)x\)\s*\*\s*(\d+)/);
    if (cosAMatch) {
      const a = parseInt(cosAMatch[1]);
      const coeff = parseInt(cosAMatch[2]);
      if (a === coeff) {
        return { u: `${a}x`, du: `${a} dx`, success: true };
      }
    }

    // Pattern: sin(ax) * a
    const sinAMatch = expr.match(/sin\((\d+)x\)\s*\*\s*(\d+)/);
    if (sinAMatch) {
      const a = parseInt(sinAMatch[1]);
      const coeff = parseInt(sinAMatch[2]);
      if (a === coeff) {
        return { u: `${a}x`, du: `${a} dx`, success: true };
      }
    }

    // Pattern: (linear)^n * constant
    const linearPowerMatch = expr.match(/\((\d+)x\s*\+\s*(\d+)\)\^(\d+)\s*\*\s*(\d+)/);
    if (linearPowerMatch) {
      const a = parseInt(linearPowerMatch[1]);
      const coeff = parseInt(linearPowerMatch[4]);
      if (a === coeff) {
        return { u: `${a}x + ${linearPowerMatch[2]}`, du: `${a} dx`, success: true };
      }
    }

    return { u: '', du: '', success: false };
  };

  const findAntiderivative = (fn: string): string => {
    const expr = fn.trim();

    // Power rule: u^n
    const powerMatch = expr.match(/u\^(\d+)/);
    if (powerMatch) {
      const n = parseInt(powerMatch[1]);
      if (n === -1) {
        return 'ln|u|';
      }
      return `u^${n+1}/${n+1}`;
    }

    // sin(u)
    if (expr === 'sin(u)') {
      return '-cos(u)';
    }

    // cos(u)
    if (expr === 'cos(u)') {
      return 'sin(u)';
    }

    // tan(u)
    if (expr === 'tan(u)') {
      return '-ln|cos(u)|';
    }

    // sec^2(u)
    if (expr === 'sec(u)^2' || expr === 'sec^2(u)') {
      return 'tan(u)';
    }

    // e^u
    if (expr === 'e^u') {
      return 'e^u';
    }

    // 1/u
    if (expr === '1/u') {
      return 'ln|u|';
    }

    // Constant * u^n
    const constPowerMatch = expr.match(/^(\d+)\*u\^(\d+)$/);
    if (constPowerMatch) {
      const coeff = parseInt(constPowerMatch[1]);
      const n = parseInt(constPowerMatch[2]);
      if (n === -1) {
        return `${coeff}ln|u|`;
      }
      return `${coeff/(n+1)}u^${n+1}`;
    }

    // Polynomial in u
    if (expr.includes('+')) {
      const terms = expr.split('+').map(t => t.trim());
      let integratedTerms: string[] = [];
      for (const term of terms) {
        const termResult = findAntiderivative(term);
        integratedTerms.push(termResult);
      }
      return integratedTerms.join(' + ');
    }

    return `∫(${expr}) du`;
  };

  const evaluateExpression = (expr: string, u: number): number => {
    let sanitized = expr
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/ln\|/g, 'Math.log(Math.abs(')
      .replace(/\|/g, ')')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/u\^/g, 'Math.pow(u,');
    
    sanitized = sanitized.replace(/\^/g, '**');
    sanitized = sanitized.replace(/(\d+)\/(\d+)/g, '($1/$2)');
    sanitized = sanitized.replace(/π/g, 'Math.PI');
    sanitized = sanitized.replace(/pi/g, 'Math.PI');
    sanitized = sanitized.replace(/u/g, `(${u})`);
    
    try {
      return new Function(`return (${sanitized})`)();
    } catch {
      return NaN;
    }
  };

  const calculateUSubstitution = () => {
    try {
      const f = parseFunction(functionStr);
      const a = parseFloat(lowerBound);
      const b = parseFloat(upperBound);
      
      if (useDefinite && (isNaN(a) || isNaN(b))) {
        setError('Please enter valid numbers for the bounds');
        setResult(null);
        return;
      }

      if (useDefinite && a >= b) {
        setError('Lower bound must be less than upper bound');
        setResult(null);
        return;
      }

      const steps: string[] = [];
      
      steps.push(`📐 u-Substitution Calculator`);
      steps.push(`   ∫ ${functionStr} dx`);
      if (useDefinite) {
        steps.push(`   Bounds: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      }
      steps.push('');

      // Detect u-substitution
      let detectedU = '';
      let detectedDu = '';
      
      if (uSubstitution.trim()) {
        // Use user-provided u
        detectedU = uSubstitution.trim();
        detectedDu = 'du';
        steps.push(`Step 1: User-specified substitution`);
        steps.push(`   u = ${detectedU}`);
        steps.push(`   du = ${detectedDu}`);
      } else {
        // Auto-detect
        const detection = detectUSubstitution(functionStr);
        if (detection.success) {
          detectedU = detection.u;
          detectedDu = detection.du;
          steps.push(`Step 1: Detect substitution pattern`);
          steps.push(`   u = ${detectedU}`);
          steps.push(`   du = ${detectedDu}`);
        } else {
          steps.push(`⚠️ Could not automatically detect u-substitution`);
          steps.push(`   Try specifying u explicitly or use a different method`);
          
          setResult({
            result: 'Cannot determine',
            indefiniteIntegral: 'No valid substitution found',
            u: '',
            du: '',
            steps,
            methodUsed: 'None',
            message: 'Automatic detection failed. Please specify u manually.'
          });
          setError('');
          return;
        }
      }

      steps.push('');

      // Rewrite integral in terms of u
      let uIntegrand = '';
      let substitutionWork = '';
      
      // Common patterns
      if (functionStr.includes('sin') && functionStr.includes('^2')) {
        uIntegrand = 'sin(u)';
        substitutionWork = `2x dx = du`;
      } else if (functionStr.includes('cos') && functionStr.includes('^2')) {
        uIntegrand = 'cos(u)';
        substitutionWork = `2x dx = du`;
      } else if (functionStr.includes('e^') && functionStr.includes('^2')) {
        uIntegrand = 'e^u';
        substitutionWork = `2x dx = du`;
      } else if (functionStr.includes('*')) {
        // Try to extract the integrand in terms of u
        const parts = functionStr.split('*');
        if (parts.length >= 2) {
          // Remove the derivative term
          const lastPart = parts[parts.length - 1];
          if (lastPart.includes('dx') || lastPart.includes('x')) {
            // The remaining parts form the u-integrand
            const remaining = parts.slice(0, -1).join('*');
            // Replace x with u in the remaining part if possible
            uIntegrand = remaining.replace(/x/g, 'u');
            substitutionWork = `${detectedDu}`;
          } else {
            uIntegrand = functionStr.replace(/x/g, 'u');
          }
        } else {
          uIntegrand = functionStr.replace(/x/g, 'u');
        }
      } else {
        uIntegrand = functionStr.replace(/x/g, 'u');
      }

      steps.push(`Step 2: Rewrite integral in terms of u`);
      steps.push(`   du = ${detectedDu}`);
      steps.push(`   ∫ ${functionStr} dx = ∫ ${uIntegrand} du`);
      steps.push('');

      // Find antiderivative in terms of u
      const antiderivativeU = findAntiderivative(uIntegrand);
      
      steps.push(`Step 3: Integrate with respect to u`);
      steps.push(`   ∫ ${uIntegrand} du = ${antiderivativeU} + C`);
      steps.push('');

      // Substitute back to x
      const antiderivativeX = antiderivativeU.replace(/u/g, `(${detectedU})`);
      
      steps.push(`Step 4: Substitute back to x`);
      steps.push(`   ${antiderivativeU} + C → ${antiderivativeX} + C`);
      steps.push('');

      let definiteValue: number | undefined;
      let finalResult = '';

      if (useDefinite) {
        steps.push(`Step 5: Evaluate definite integral`);
        
        // Evaluate antiderivative at bounds
        const F_a = evaluateExpression(antiderivativeX, a);
        const F_b = evaluateExpression(antiderivativeX, b);
        
        if (isFinite(F_a) && isFinite(F_b)) {
          definiteValue = F_b - F_a;
          steps.push(`   F(${b.toFixed(4)}) - F(${a.toFixed(4)}) = ${definiteValue.toFixed(6)}`);
          finalResult = definiteValue.toFixed(6);
        } else {
          steps.push(`   ⚠️ Cannot evaluate at bounds (function may be undefined)`);
          finalResult = `${antiderivativeX} + C`;
        }
      } else {
        finalResult = `${antiderivativeX} + C`;
      }

      // Verify with numerical integration
      if (useDefinite && definiteValue !== undefined) {
        const h = (b - a) / 1000;
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
          const x1 = a + i * h;
          const x2 = a + (i + 1) * h;
          sum += (f(x1) + f(x2)) / 2 * h;
        }
        steps.push('');
        steps.push(`Verification (numerical): ${sum.toFixed(6)}`);
        steps.push(`Error: ${Math.abs(definiteValue - sum).toFixed(10)}`);
      }

      const indefiniteIntegral = `∫ ${uIntegrand} du = ${antiderivativeU} + C`;

      setResult({
        result: finalResult,
        indefiniteIntegral,
        definiteValue,
        u: detectedU,
        du: detectedDu,
        steps,
        methodUsed: 'u-Substitution',
        message: useDefinite ? 'Definite integral evaluated using u-substitution' : 'Indefinite integral found using u-substitution'
      });
      setError('');

    } catch (e) {
      setError('Invalid function or substitution. Please check your input.');
      setResult(null);
    }
  };

  const getFunctionExamples = () => {
    return [
      { label: '2x·sin(x²)', value: '2x * sin(x^2)' },
      { label: '2x·cos(x²)', value: '2x * cos(x^2)' },
      { label: '2x·e^(x²)', value: '2x * e^(x^2)' },
      { label: 'x·(x²+1)^3', value: 'x * (x^2 + 1)^3' },
      { label: '1/(2x+1)', value: '1/(2x + 1)' },
      { label: 'cos(2x)·2', value: 'cos(2x) * 2' },
      { label: 'sin(3x)·3', value: 'sin(3x) * 3' },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">u-Substitution Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Technique for integrating composite functions</li>
            <li>Choose u = g(x), then du = g'(x) dx</li>
            <li>Rewrite integral in terms of u and integrate</li>
            <li>Supports both indefinite and definite integrals</li>
            <li>Auto-detects common substitution patterns</li>
            <li>Shows step-by-step transformation</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x) dx</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={functionStr}
              onChange={(e) => setFunctionStr(e.target.value)}
              placeholder="e.g., 2x * sin(x^2)"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <select
              onChange={(e) => setFunctionStr(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white text-sm"
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
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">u = (optional, auto-detect if empty)</label>
          <input
            type="text"
            value={uSubstitution}
            onChange={(e) => setUSubstitution(e.target.value)}
            placeholder="e.g., x^2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={useDefinite}
            onChange={(e) => setUseDefinite(e.target.checked)}
            className="w-4 h-4 text-[#1F2329] rounded"
          />
          Definite Integral
        </label>
        {useDefinite && (
          <>
            <input
              type="text"
              value={lowerBound}
              onChange={(e) => setLowerBound(e.target.value)}
              placeholder="a"
              className="w-20 px-3 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono text-sm"
            />
            <span className="text-slate-600">→</span>
            <input
              type="text"
              value={upperBound}
              onChange={(e) => setUpperBound(e.target.value)}
              placeholder="b"
              className="w-20 px-3 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono text-sm"
            />
          </>
        )}
      </div>

      <button
        onClick={calculateUSubstitution}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Apply u-Substitution
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
                    ✅ u-Substitution Applied
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Method:</div>
                  <div className="font-mono text-sm">{result.methodUsed}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-medium text-purple-700">u =</div>
                  <div className="font-mono text-sm">{result.u}</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-medium text-blue-700">du =</div>
                  <div className="font-mono text-sm">{result.du}</div>
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                <div className="text-xs font-medium text-green-700">
                  {useDefinite ? 'Definite Integral Result:' : 'Indefinite Integral:'}
                </div>
                <div className="text-lg font-mono text-[#1F2329]">
                  {result.result}
                </div>
                {result.definiteValue !== undefined && (
                  <div className="text-xs text-gray-600 mt-1">
                    ∫[{lowerBound} to {upperBound}] {functionStr} dx = {result.definiteValue.toFixed(6)}
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
                  <span className="font-medium">💡 When to use:</span>
                  {' '}u-substitution is useful when you have a composite function where one part is the derivative of the other.
                  {' '}Look for patterns like f(g(x))·g'(x).
                  {' '}If auto-detection fails, try specifying u manually.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default USubstitutionCalculator;