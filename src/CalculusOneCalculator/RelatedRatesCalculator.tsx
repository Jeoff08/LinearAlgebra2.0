// components/calculators/RelatedRatesCalculator.tsx
import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Clock, ArrowRight } from 'lucide-react';

interface RelatedRatesResult {
  equation: string;
  derivativeEquation: string;
  solution: string;
  valueAtPoint?: number;
  steps: string[];
  message: string;
  variables: string[];
  rates: { variable: string; value: number; isKnown: boolean }[];
}

const RelatedRatesCalculator: React.FC = () => {
  const [equationStr, setEquationStr] = useState('A = πr^2');
  const [variableStr, setVariableStr] = useState('r');
  const [rateStr, setRateStr] = useState('dr/dt');
  const [targetRateStr, setTargetRateStr] = useState('dA/dt');
  const [valuesStr, setValuesStr] = useState('r=5, dr/dt=2');
  const [result, setResult] = useState<RelatedRatesResult | null>(null);
  const [error, setError] = useState<string>('');

  const parseEquation = (eq: string): { left: string; right: string } => {
    const parts = eq.split('=');
    if (parts.length !== 2) {
      throw new Error('Invalid equation format. Use "left = right"');
    }
    return { left: parts[0].trim(), right: parts[1].trim() };
  };

  const parseValues = (valuesStr: string): Record<string, number> => {
    const result: Record<string, number> = {};
    if (!valuesStr.trim()) return result;
    
    const pairs = valuesStr.split(',').map(s => s.trim());
    for (const pair of pairs) {
      const [key, value] = pair.split('=').map(s => s.trim());
      if (key && value) {
        result[key] = parseFloat(value);
        if (isNaN(result[key])) {
          throw new Error(`Invalid value for ${key}`);
        }
      }
    }
    return result;
  };

  const extractVariables = (expr: string): string[] => {
    const vars: string[] = [];
    const matches = expr.match(/[a-z]+/g) || [];
    const uniqueVars = [...new Set(matches)];
    // Filter out function names and constants
    const exclude = ['sin', 'cos', 'tan', 'log', 'ln', 'sqrt', 'exp', 'pi', 'e', 'Math'];
    return uniqueVars.filter(v => !exclude.includes(v) && v.length === 1);
  };

  const differentiateImplicitly = (expr: string, varName: string, rates: Record<string, string>): string => {
    // This is a simplified differentiation for common patterns
    // For a full implementation, a proper symbolic differentiation would be needed
    
    let result = expr;
    
    // Handle basic power rule: x^n -> n*x^(n-1)*dx/dt
    const powerPattern = /([a-z])\^(\d+)/g;
    result = result.replace(powerPattern, (match, varChar, power) => {
      const n = parseInt(power);
      if (n === 1) return `${varChar}*d${varChar}/dt`;
      if (n === 2) return `2*${varChar}*d${varChar}/dt`;
      return `${n}*${varChar}^${n-1}*d${varChar}/dt`;
    });
    
    // Handle products: xy -> x*dy/dt + y*dx/dt
    const productPattern = /([a-z])\s*\*\s*([a-z])/g;
    result = result.replace(productPattern, (match, var1, var2) => {
      return `${var1}*d${var2}/dt + ${var2}*d${var1}/dt`;
    });
    
    // Handle basic functions
    result = result.replace(/sin\(([a-z])\)/g, (match, varChar) => {
      return `cos(${varChar})*d${varChar}/dt`;
    });
    
    result = result.replace(/cos\(([a-z])\)/g, (match, varChar) => {
      return `-sin(${varChar})*d${varChar}/dt`;
    });
    
    result = result.replace(/ln\(([a-z])\)/g, (match, varChar) => {
      return `(1/${varChar})*d${varChar}/dt`;
    });
    
    // Handle standalone variables
    const varPattern = /\b([a-z])\b(?!\s*\^)/g;
    result = result.replace(varPattern, (match, varChar) => {
      if (varChar !== 't' && varChar !== 'dt' && varChar !== 'd') {
        return `d${varChar}/dt`;
      }
      return match;
    });
    
    return result;
  };

  const solveRelatedRates = () => {
    try {
      const { left, right } = parseEquation(equationStr);
      const variables = extractVariables(left + right);
      
      // Parse values
      const values = parseValues(valuesStr);
      
      // Parse rates
      const rateParts = rateStr.split('/');
      const targetRateParts = targetRateStr.split('/');
      
      if (rateParts.length !== 2 || targetRateParts.length !== 2) {
        setError('Rates must be in the format d(variable)/dt');
        setResult(null);
        return;
      }
      
      const rateVar = rateParts[0].replace('d', '');
      const targetVar = targetRateParts[0].replace('d', '');
      
      // Build derivative equation
      const leftDerivative = differentiateImplicitly(left, rateVar, {});
      const rightDerivative = differentiateImplicitly(right, rateVar, {});
      
      const derivativeEquation = `${leftDerivative} = ${rightDerivative}`;
      
      // Evaluate at given point
      let solution = '';
      let valueAtPoint: number | undefined;
      const steps: string[] = [];
      
      steps.push(`📐 Related Rates Problem`);
      steps.push(`   Equation: ${equationStr}`);
      steps.push(`   Given: ${variableStr} = ${values[variableStr] || '?'}`);
      steps.push(`   Rate: ${rateStr} = ${values[rateVar] || '?'}`);
      steps.push(`   Find: ${targetRateStr}`);
      steps.push('');
      
      // Check if we have all required values
      const missingVars: string[] = [];
      for (const varName of variables) {
        if (!values[varName] && varName !== targetVar && varName !== rateVar) {
          missingVars.push(varName);
        }
      }
      
      if (missingVars.length > 0) {
        steps.push(`⚠️ Missing values for: ${missingVars.join(', ')}`);
        steps.push(`   Using symbolic solution`);
        solution = `Requires values for ${missingVars.join(', ')}`;
      } else {
        steps.push(`Step 1: Differentiate implicitly with respect to t`);
        steps.push(`   ${equationStr}`);
        steps.push(`   → ${derivativeEquation}`);
        steps.push('');
        
        steps.push(`Step 2: Substitute known values`);
        for (const [key, value] of Object.entries(values)) {
          if (key !== targetVar && key !== rateVar) {
            steps.push(`   ${key} = ${value}`);
          }
        }
        steps.push(`   ${rateVar} = ${values[rateVar] || '?'}`);
        steps.push('');
        
        // Solve for target rate
        const targetValue = values[targetVar];
        const rateValue = values[rateVar];
        
        if (rateValue !== undefined && targetValue !== undefined) {
          // Try to solve the derivative equation for the target rate
          // For common patterns
          let result = 0;
          let solved = false;
          
          // Check for common patterns
          if (leftDerivative.includes('2') && leftDerivative.includes('*') && leftDerivative.includes('d')) {
            // Pattern: d(something)/dt = ...
            const ratePattern = new RegExp(`d${targetVar}/dt`, 'g');
            const leftRate = leftDerivative.match(ratePattern);
            const rightRate = rightDerivative.match(ratePattern);
            
            if (leftRate && leftRate.length > 0) {
              // Try to solve for the rate
              steps.push(`Step 3: Solve for ${targetRateStr}`);
              steps.push(`   Substitute values and solve`);
              
              // For A = πr^2 pattern
              if (equationStr.includes('π') && equationStr.includes('^2')) {
                result = 2 * Math.PI * targetValue * rateValue;
                solution = `${targetRateStr} = 2πr·${rateStr} = 2π(${targetValue})(${rateValue}) = ${result.toFixed(4)}`;
                valueAtPoint = result;
                solved = true;
                steps.push(`   ${targetRateStr} = ${result.toFixed(4)}`);
              }
              // For V = (4/3)πr^3 (sphere)
              else if (equationStr.includes('4/3') && equationStr.includes('π') && equationStr.includes('^3')) {
                result = 4 * Math.PI * Math.pow(targetValue, 2) * rateValue;
                solution = `${targetRateStr} = 4πr²·${rateStr} = 4π(${targetValue}²)(${rateValue}) = ${result.toFixed(4)}`;
                valueAtPoint = result;
                solved = true;
                steps.push(`   ${targetRateStr} = ${result.toFixed(4)}`);
              }
              // For V = lwh (rectangular prism)
              else if (equationStr.includes('*') && variables.length >= 2) {
                // General product rule
                const varList = variables.filter(v => v !== targetVar && v !== rateVar);
                if (varList.length > 0) {
                  // Use numeric differentiation to find the rate
                  const h = 0.001;
                  // This is a simplified approach
                  const currentVal = evaluateEquation(equationStr, values);
                  if (isFinite(currentVal)) {
                    const tempValues = { ...values };
                    tempValues[rateVar] = (rateValue || 0) + h;
                    const newVal = evaluateEquation(equationStr, tempValues);
                    const deriv = (newVal - currentVal) / h;
                    result = deriv;
                    solution = `${targetRateStr} ≈ ${deriv.toFixed(4)} (numerical)`;
                    valueAtPoint = deriv;
                    solved = true;
                    steps.push(`   ${targetRateStr} = ${deriv.toFixed(4)}`);
                  }
                }
              }
              
              if (!solved) {
                steps.push(`   Using numerical differentiation`);
                const h = 0.001;
                const currentVal = evaluateEquation(equationStr, values);
                const tempValues = { ...values };
                tempValues[rateVar] = (rateValue || 0) + h;
                const newVal = evaluateEquation(equationStr, tempValues);
                const deriv = (newVal - currentVal) / h;
                result = deriv;
                solution = `${targetRateStr} ≈ ${deriv.toFixed(4)} (numerical)`;
                valueAtPoint = deriv;
                steps.push(`   ${targetRateStr} = ${deriv.toFixed(4)}`);
              }
            }
          } else {
            steps.push(`   Complex derivative pattern detected`);
            steps.push(`   Using numerical differentiation`);
            const h = 0.001;
            const currentVal = evaluateEquation(equationStr, values);
            const tempValues = { ...values };
            tempValues[rateVar] = (rateValue || 0) + h;
            const newVal = evaluateEquation(equationStr, tempValues);
            const deriv = (newVal - currentVal) / h;
            result = deriv;
            solution = `${targetRateStr} ≈ ${deriv.toFixed(4)} (numerical)`;
            valueAtPoint = deriv;
            steps.push(`   ${targetRateStr} = ${deriv.toFixed(4)}`);
          }
        } else {
          steps.push(`⚠️ Missing rate or target value`);
          solution = `Cannot solve - missing values for ${targetVar} or ${rateVar}`;
        }
      }
      
      // Build rates list
      const rates: { variable: string; value: number; isKnown: boolean }[] = [];
      for (const varName of variables) {
        if (values[varName] !== undefined) {
          rates.push({
            variable: varName,
            value: values[varName],
            isKnown: true
          });
        }
      }
      if (values[rateVar] !== undefined) {
        rates.push({
          variable: rateVar,
          value: values[rateVar],
          isKnown: true
        });
      }

      const message = valueAtPoint !== undefined 
        ? `${targetRateStr} = ${valueAtPoint.toFixed(4)}`
        : 'Solution requires additional values';

      setResult({
        equation: equationStr,
        derivativeEquation,
        solution,
        valueAtPoint,
        steps,
        message,
        variables,
        rates
      });
      setError('');

    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid input. Please check your entries.');
      setResult(null);
    }
  };

  const evaluateEquation = (eq: string, values: Record<string, number>): number => {
    let expr = eq;
    // Substitute values
    for (const [key, val] of Object.entries(values)) {
      expr = expr.replace(new RegExp(`\\b${key}\\b`, 'g'), `(${val})`);
    }
    // Replace constants
    expr = expr.replace(/π/g, `(${Math.PI})`);
    expr = expr.replace(/e(?![xp])/g, `(${Math.E})`);
    // Handle powers
    expr = expr.replace(/\^/g, '**');
    // Handle functions
    expr = expr.replace(/sin\(/g, 'Math.sin(');
    expr = expr.replace(/cos\(/g, 'Math.cos(');
    expr = expr.replace(/tan\(/g, 'Math.tan(');
    expr = expr.replace(/log\(/g, 'Math.log10(');
    expr = expr.replace(/ln\(/g, 'Math.log(');
    expr = expr.replace(/sqrt\(/g, 'Math.sqrt(');
    expr = expr.replace(/exp\(/g, 'Math.exp(');
    
    try {
      return new Function(`return (${expr})`)();
    } catch {
      return NaN;
    }
  };

  const getExampleProblems = () => {
    return [
      { 
        label: 'Circle Area', 
        equation: 'A = πr^2',
        variable: 'r',
        rate: 'dr/dt',
        target: 'dA/dt',
        values: 'r=5, dr/dt=2'
      },
      { 
        label: 'Sphere Volume', 
        equation: 'V = (4/3)πr^3',
        variable: 'r',
        rate: 'dr/dt',
        target: 'dV/dt',
        values: 'r=3, dr/dt=0.5'
      },
      { 
        label: 'Cylinder Volume', 
        equation: 'V = πr^2h',
        variable: 'r',
        rate: 'dr/dt',
        target: 'dV/dt',
        values: 'r=2, h=5, dr/dt=0.1'
      },
      { 
        label: 'Rectangle Area', 
        equation: 'A = lw',
        variable: 'l',
        rate: 'dl/dt',
        target: 'dA/dt',
        values: 'l=4, w=3, dl/dt=2'
      },
    ];
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Related Rates Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Finds how one quantity changes with respect to another</li>
            <li>Uses implicit differentiation with respect to time (t)</li>
            <li>Supports common geometric formulas and products</li>
            <li>Enter equation, variables, rates, and known values</li>
            <li>Numerical methods used for complex derivatives</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Equation</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={equationStr}
              onChange={(e) => setEquationStr(e.target.value)}
              placeholder="e.g., A = πr^2"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
            />
            <select
              onChange={(e) => {
                const problem = getExampleProblems().find(p => p.label === e.target.value);
                if (problem) {
                  setEquationStr(problem.equation);
                  setVariableStr(problem.variable);
                  setRateStr(problem.rate);
                  setTargetRateStr(problem.target);
                  setValuesStr(problem.values);
                }
              }}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition bg-white text-sm"
              value=""
            >
              <option value="">Examples</option>
              {getExampleProblems().map((ex) => (
                <option key={ex.label} value={ex.label}>
                  {ex.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Variable</label>
          <input
            type="text"
            value={variableStr}
            onChange={(e) => setVariableStr(e.target.value)}
            placeholder="e.g., r"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Known Rate</label>
          <input
            type="text"
            value={rateStr}
            onChange={(e) => setRateStr(e.target.value)}
            placeholder="e.g., dr/dt"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Target Rate</label>
          <input
            type="text"
            value={targetRateStr}
            onChange={(e) => setTargetRateStr(e.target.value)}
            placeholder="e.g., dA/dt"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Values</label>
          <input
            type="text"
            value={valuesStr}
            onChange={(e) => setValuesStr(e.target.value)}
            placeholder="e.g., r=5, dr/dt=2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <button
        onClick={solveRelatedRates}
        className="w-full bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
      >
        <Clock className="w-5 h-5" />
        Solve Related Rates
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
            {result.valueAtPoint !== undefined ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className={`text-lg font-semibold ${result.valueAtPoint !== undefined ? 'text-green-700' : 'text-yellow-700'}`}>
                    {result.valueAtPoint !== undefined ? '✅ Solution Found' : '⚠️ Incomplete Solution'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                {result.valueAtPoint !== undefined && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">{targetRateStr} =</div>
                    <div className="text-xl font-bold text-[#1F2329] font-mono">
                      {result.valueAtPoint.toFixed(4)}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-medium text-purple-700 mb-1">Equation</div>
                  <div className="font-mono text-sm">{result.equation}</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-medium text-blue-700 mb-1">Derivative</div>
                  <div className="font-mono text-sm">{result.derivativeEquation}</div>
                </div>
              </div>

              {result.valueAtPoint !== undefined && (
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
                  <div className="text-sm font-medium text-gray-700">Solution:</div>
                  <div className="text-lg font-mono text-[#1F2329]">
                    {result.solution}
                  </div>
                </div>
              )}

              {result.variables.length > 0 && (
                <div className="mb-4 p-2 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-xs font-medium text-gray-600 mb-1">Variables:</div>
                  <div className="flex flex-wrap gap-2">
                    {result.rates.map((rate, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs font-mono ${
                          rate.isKnown
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {rate.variable} = {rate.value.toFixed(4)}
                        {rate.isKnown && ' ✓'}
                      </span>
                    ))}
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
                  <span className="font-medium">💡 Note:</span> 
                  {' '}Related rates problems involve finding the rate of change of one quantity in terms of the rate of change of another.
                  {' '}The solution uses implicit differentiation with respect to time (t).
                  {' '}For complex derivatives, numerical methods are used.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedRatesCalculator;