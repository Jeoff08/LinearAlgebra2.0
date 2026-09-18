// components/SystemOfEquations.tsx
import React, { useState } from 'react';
import { Sparkles, Trash2, Plus, Play, Info, AlertCircle, Eye, EyeOff } from 'lucide-react';
import PDFExport from './PDFExport';

interface EquationResult {
  variables: Record<string, number>;
  steps: string[];
  error?: string;
  uniqueSolution: boolean;
}

const SystemOfEquations: React.FC = () => {
  const [equations, setEquations] = useState<string[]>(['2x + y - z = 8', '-3x - y + 2z = -11', '-2x + y + 2z = -3']);
  const [result, setResult] = useState<EquationResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(true);
  const [showSteps, setShowSteps] = useState(true);

  // Parse equation string to coefficients
  const parseEquation = (equation: string): { coefficients: Record<string, number>; constant: number; variables: string[] } | null => {
    const parts = equation.replace(/\s/g, '').split('=');
    if (parts.length !== 2) return null;
    
    const leftSide = parts[0];
    const constant = parseFloat(parts[1]);
    if (isNaN(constant)) return null;

    const coefficients: Record<string, number> = {};
    const variables: string[] = [];
    let currentTerm = '';
    let sign = 1;

    for (let i = 0; i < leftSide.length; i++) {
      const char = leftSide[i];
      
      if (char === '+' || char === '-') {
        if (currentTerm) {
          const { coeff, varName } = parseTerm(currentTerm);
          if (varName) {
            coefficients[varName] = (coefficients[varName] || 0) + sign * coeff;
            if (!variables.includes(varName)) variables.push(varName);
          } else {
            const existingConst = coefficients['constant'] || 0;
            coefficients['constant'] = existingConst + sign * coeff;
          }
          currentTerm = '';
        }
        sign = char === '+' ? 1 : -1;
      } else {
        currentTerm += char;
      }
    }

    if (currentTerm) {
      const { coeff, varName } = parseTerm(currentTerm);
      if (varName) {
        coefficients[varName] = (coefficients[varName] || 0) + sign * coeff;
        if (!variables.includes(varName)) variables.push(varName);
      } else {
        const existingConst = coefficients['constant'] || 0;
        coefficients['constant'] = existingConst + sign * coeff;
      }
    }

    const constValue = coefficients['constant'] || 0;
    delete coefficients['constant'];
    
    return { coefficients, constant: constant - constValue, variables };
  };

  const parseTerm = (term: string): { coeff: number; varName: string | null } => {
    const varMatch = term.match(/[a-zA-Z]/);
    if (!varMatch) {
      const coeff = parseFloat(term);
      return { coeff: isNaN(coeff) ? 0 : coeff, varName: null };
    }

    const varName = varMatch[0];
    const coeffStr = term.replace(varName, '');
    if (coeffStr === '' || coeffStr === '+') return { coeff: 1, varName };
    if (coeffStr === '-') return { coeff: -1, varName };
    const coeff = parseFloat(coeffStr);
    return { coeff: isNaN(coeff) ? 1 : coeff, varName };
  };

  // Solve system using Gaussian elimination with explanation
  const solveSystem = () => {
    const parsed = equations.map(eq => parseEquation(eq));
    
    if (parsed.some(p => p === null)) {
      setResult({
        variables: {},
        steps: ['Please enter valid equations in the format: ax + by + cz = d'],
        uniqueSolution: false,
        error: 'Please enter valid equations in the format: ax + by + cz = d'
      });
      return;
    }

    const allVariables = new Set<string>();
    parsed.forEach(p => {
      if (p) {
        Object.keys(p.coefficients).forEach(v => allVariables.add(v));
      }
    });
    const variableList = Array.from(allVariables).sort();

    if (parsed.length !== variableList.length) {
      setResult({
        variables: {},
        steps: [`Number of equations (${parsed.length}) must equal number of variables (${variableList.length})`],
        uniqueSolution: false,
        error: `Number of equations (${parsed.length}) must equal number of variables (${variableList.length})`
      });
      return;
    }

    const matrix: number[][] = parsed.map((eq) => {
      const row: number[] = [];
      variableList.forEach(varName => {
        row.push(eq?.coefficients[varName] || 0);
      });
      row.push(eq?.constant || 0);
      return row;
    });

    const steps: string[] = [];
    const n = matrix.length;
    const m = matrix[0].length;

    const augMatrix = matrix.map(row => [...row]);
    
    steps.push(`System of Equations:`);
    equations.forEach((eq, idx) => {
      steps.push(`   ${idx + 1}) ${eq}`);
    });
    steps.push(``);
    steps.push(`Augmented Matrix [A|b]:`);
    steps.push(formatMatrix(augMatrix, variableList));
    steps.push(``);

    for (let i = 0; i < n; i++) {
      let pivotRow = i;
      let maxVal = Math.abs(augMatrix[i][i]);
      for (let j = i + 1; j < n; j++) {
        const val = Math.abs(augMatrix[j][i]);
        if (val > maxVal) {
          maxVal = val;
          pivotRow = j;
        }
      }

      if (Math.abs(augMatrix[pivotRow][i]) < 1e-10) {
        setResult({
          variables: {},
          steps: ['System has no unique solution (matrix is singular).'],
          uniqueSolution: false,
          error: 'System has no unique solution (matrix is singular).'
        });
        return;
      }

      if (pivotRow !== i) {
        const temp = augMatrix[i];
        augMatrix[i] = augMatrix[pivotRow];
        augMatrix[pivotRow] = temp;
        steps.push(`Swap Row ${i + 1} with Row ${pivotRow + 1}`);
        steps.push(formatMatrix(augMatrix, variableList));
        steps.push(``);
      }

      const pivot = augMatrix[i][i];
      if (Math.abs(pivot - 1) > 1e-10) {
        for (let j = i; j < m; j++) {
          augMatrix[i][j] /= pivot;
        }
        steps.push(`Normalize Row ${i + 1} (divide by ${formatNumber(pivot)})`);
        steps.push(formatMatrix(augMatrix, variableList));
        steps.push(``);
      }

      for (let j = i + 1; j < n; j++) {
        const factor = augMatrix[j][i];
        if (Math.abs(factor) > 1e-10) {
          for (let k = i; k < m; k++) {
            augMatrix[j][k] -= factor * augMatrix[i][k];
          }
          steps.push(`Row ${j + 1} = Row ${j + 1} - (${formatNumber(factor)}) × Row ${i + 1}`);
          steps.push(formatMatrix(augMatrix, variableList));
          steps.push(``);
        }
      }
    }

    const solution: Record<string, number> = {};
    for (let i = n - 1; i >= 0; i--) {
      let sum = augMatrix[i][m - 1];
      for (let j = i + 1; j < n; j++) {
        sum -= augMatrix[i][j] * (solution[variableList[j]] || 0);
      }
      solution[variableList[i]] = Math.round(sum * 1e6) / 1e6;
    }

    steps.push(`Back Substitution:`);
    for (let i = n - 1; i >= 0; i--) {
      const varName = variableList[i];
      steps.push(`   ${varName} = ${formatNumber(solution[varName])}`);
    }

    setResult({
      variables: solution,
      steps,
      uniqueSolution: true
    });
  };

  const formatNumber = (num: number): string => {
    if (Math.abs(num) < 1e-10) return '0';
    if (Math.abs(num - Math.round(num)) < 1e-6) return Math.round(num).toString();
    return num.toFixed(3).replace(/\.?0+$/, '');
  };

  const formatMatrix = (mat: number[][], vars: string[]): string => {
    const colWidths: number[] = [];
    for (let j = 0; j < mat[0].length; j++) {
      let maxW = j < vars.length ? vars[j].length : 4;
      for (let i = 0; i < mat.length; i++) {
        const str = formatNumber(mat[i][j]);
        if (str.length > maxW) maxW = str.length;
      }
      colWidths.push(maxW + 2);
    }

    let result = '   ';
    for (let j = 0; j < vars.length; j++) {
      result += vars[j].padStart(colWidths[j]);
    }
    result += ' |' + 'Const'.padStart(colWidths[vars.length]) + '\n';
    result += '   ' + '-'.repeat(colWidths.reduce((a, b) => a + b, 0) + 2) + '\n';

    for (let i = 0; i < mat.length; i++) {
      result += '   ';
      for (let j = 0; j < vars.length; j++) {
        result += formatNumber(mat[i][j]).padStart(colWidths[j]);
      }
      result += ' |' + formatNumber(mat[i][vars.length]).padStart(colWidths[vars.length]) + '\n';
    }
    return result;
  };

  const addEquation = () => {
    setEquations([...equations, '']);
    setResult(null);
  };

  const removeEquation = (index: number) => {
    if (equations.length > 1) {
      setEquations(equations.filter((_, idx) => idx !== index));
      setResult(null);
    }
  };

  const clearAll = () => {
    setEquations(equations.map(() => ''));
    setResult(null);
  };

  // Explanation content
  const explanationContent = (
    <div className="space-y-2 text-xs text-gray-600">
      <p><span className="font-bold text-gray-900">How Gaussian Elimination Works:</span> This method transforms the augmented matrix into row echelon form through elementary row operations, then resolves variables via backward substitution.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><span className="font-semibold text-gray-800">Forward Elimination:</span> Transform into upper-triangular echelon form using row swapping, scaling, and row-replacement.</li>
        <li><span className="font-semibold text-gray-800">Back Substitution:</span> Solve for variables bottom-up, substituting calculated values into higher equations.</li>
        <li><span className="font-semibold text-gray-800">Verification:</span> Plug calculated values back into original equations to guarantee exact satisfaction.</li>
      </ul>
    </div>
  );

  const explanationText = `How Gaussian Elimination Works: This method solves systems of linear equations by transforming the augmented matrix into row echelon form through row operations, then solving for variables using back substitution.

Forward Elimination: Transform the matrix into row echelon form using row operations (swapping rows, multiplying rows, adding multiples of rows).
Back Substitution: Solve for variables starting from the last row and working backwards, substituting known values into previous equations.
Verification: Check the solution by plugging the values back into the original equations.`;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
            System of Equations ({equations.length} Equations)
          </label>
          <span className="text-xs text-gray-400 font-mono">Format: ax + by + cz = d</span>
        </div>

        <div className="space-y-2.5">
          {equations.map((eq, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="relative flex-1 rounded-xl border border-gray-200 bg-white p-1 focus-within:border-[#166534] transition shadow-2xs">
                <input
                  type="text"
                  value={eq}
                  onChange={(e) => {
                    const newEqs = [...equations];
                    newEqs[idx] = e.target.value;
                    setEquations(newEqs);
                    setResult(null);
                  }}
                  className="w-full px-3.5 py-2 text-sm text-gray-900 placeholder-gray-400 font-mono outline-none bg-transparent"
                  placeholder={`Equation ${idx + 1}: e.g., 2x + y - z = 8`}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 font-mono">
                  #{idx + 1}
                </span>
              </div>
              {equations.length > 1 && (
                <button
                  onClick={() => removeEquation(idx)}
                  className="p-2.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition cursor-pointer"
                  title="Remove equation"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={solveSystem}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#166534] hover:bg-[#14532D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#166534]/20 transition-all active:scale-95 cursor-pointer"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Solve System</span>
        </button>

        <button
          onClick={addEquation}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition cursor-pointer"
        >
          <Plus className="w-4 h-4 text-gray-500" />
          <span>Add Equation</span>
        </button>

        <button
          onClick={clearAll}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition cursor-pointer"
        >
          <Trash2 className="w-4 h-4 text-gray-500" />
          <span>Clear All</span>
        </button>

        {result && result.uniqueSolution && (
          <>
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition cursor-pointer ml-auto"
            >
              {showSteps ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
              <span>{showSteps ? 'Hide' : 'Show'} Steps</span>
            </button>
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition cursor-pointer"
            >
              <Info className="w-4 h-4 text-gray-500" />
              <span>{showExplanation ? 'Hide' : 'Show'} Concept</span>
            </button>
          </>
        )}
      </div>

      {/* Result Display */}
      {result && (
        <div className="space-y-5">
          {/* Error Message */}
          {!result.uniqueSolution && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 flex items-start gap-3 text-green-900">
              <AlertCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-green-900">Calculation Error</h4>
                <p className="text-xs text-green-700 leading-relaxed">{result.steps[0]}</p>
              </div>
            </div>
          )}

          {/* Solution Hero Card */}
          {result.uniqueSolution && (
            <div className="rounded-2xl border border-[#166534]/30 bg-gradient-to-br from-[#F0FDF4] to-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#166534]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Unique Solution Found</span>
                </div>
                <PDFExport
                  title="System of Linear Equations - Solution"
                  data={Object.entries(result.variables).map(([k, v]) => `${k} = ${v}`).join('\n')}
                  steps={result.steps}
                  inputs={`Equations:\n${equations.filter(e => e.trim()).join('\n')}`}
                  explanation={explanationText}
                  fileName="system_of_equations_solution"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {Object.entries(result.variables).map(([varName, value]) => (
                  <div key={varName} className="p-3.5 px-4 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-[#166534] font-black">{varName}</span>
                    <span className="text-gray-400">=</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Steps and Concept Card */}
          {result.uniqueSolution && showSteps && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#166534]" />
                  <h4 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                    Step-by-Step Solution
                  </h4>
                </div>
                <span className="text-xs text-gray-400 font-mono">Gaussian Elimination</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 p-4 rounded-xl bg-[#0C1017] text-white font-mono text-xs sm:text-sm whitespace-pre-wrap max-h-[420px] overflow-y-auto leading-relaxed border border-gray-800">
                  {result.steps.map((step, idx) => (
                    <div key={idx} className="py-0.5">{step}</div>
                  ))}
                </div>

                {showExplanation && (
                  <div className="lg:col-span-1 p-4 bg-gray-50/70 rounded-xl border border-gray-200 max-h-[420px] overflow-y-auto space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                      <Info className="w-3.5 h-3.5 text-[#166534]" />
                      <span>Method Concept</span>
                    </div>
                    {explanationContent}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info footer */}
      <div className="text-xs text-gray-500 bg-gray-50/70 p-3.5 rounded-xl border border-gray-200 flex items-start gap-2">
        <Info className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
        <p>
          Enter equations with standard variable names (e.g. <span className="font-mono text-gray-800 font-bold">2x + y - z = 8</span>). The system must have the same number of equations as variables for a unique solution.
        </p>
      </div>
    </div>
  );
};

export default SystemOfEquations;