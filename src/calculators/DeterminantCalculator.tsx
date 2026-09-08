// components/DeterminantCalculator.tsx
import React, { useState, useEffect, useRef } from 'react';
import PDFExport from './PDFExport';

const DeterminantCalculator: React.FC = () => {
  const [size, setSize] = useState<2 | 3 | 4>(2);
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2],
    [3, 4]
  ]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);
  const solveRef = useRef<(() => void) | null>(null);

  // Listen for "Try in Calculator" events dispatched from topic sections
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.matrix && Array.isArray(detail.matrix) && detail.matrix.length >= 2) {
        const mat: number[][] = detail.matrix;
        const n = mat.length as 2 | 3 | 4;
        if (n >= 2 && n <= 4) {
          setSize(n);
          setMatrix(mat);
          setResult('');
          setSteps([]);
          setError('');
          setTimeout(() => solveRef.current?.(), 100);
        }
      }
    };
    document.addEventListener('try-in-calculator', handler);
    return () => document.removeEventListener('try-in-calculator', handler);
  }, []);

  useEffect(() => {
    solveRef.current = calculateDet;
  });

  // Get minor matrix
  const getMinor = (matrix: number[][], row: number, col: number): number[][] => {
    return matrix
      .filter((_, i) => i !== row)
      .map(row => row.filter((_, j) => j !== col));
  };

  // Helper function to get display value
  const getDisplayValue = (value: number): string => {
    return value === 0 ? '' : String(value);
  };

  // Handle input blur to ensure empty fields become 0
  const handleInputBlur = (row: number, col: number) => {
    const newMatrix = [...matrix];
    if (isNaN(newMatrix[row][col]) || newMatrix[row][col] === undefined) {
      newMatrix[row][col] = 0;
      setMatrix(newMatrix);
    }
  };

  // Calculate determinant for any size matrix
  const calculateDeterminant = (matrix: number[][]): { det: number; steps: { step: string; explanation: string }[] } => {
    const n = matrix.length;
    const steps: { step: string; explanation: string }[] = [];

    if (n === 1) {
      steps.push({
        step: `det([${matrix[0][0]}]) = ${matrix[0][0]}`,
        explanation: 'For a 1×1 matrix, the determinant is the single element.'
      });
      return { det: matrix[0][0], steps };
    }

    if (n === 2) {
      const [[a, b], [c, d]] = matrix;
      const det = a * d - b * c;
      steps.push({
        step: `det = (${a} × ${d}) - (${b} × ${c})`,
        explanation: 'For a 2×2 matrix, determinant = ad - bc.'
      });
      steps.push({
        step: `det = ${a*d} - ${b*c}`,
        explanation: 'Calculate the products and subtract them.'
      });
      steps.push({
        step: `det = ${det}`,
        explanation: 'The final determinant value.'
      });
      return { det, steps };
    }

    if (n === 3) {
      const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
      steps.push({
        step: 'Using the 3×3 determinant formula:',
        explanation: 'The determinant of a 3×3 matrix uses the rule of Sarrus or cofactor expansion.'
      });
      steps.push({
        step: `det = a(ei - fh) - b(di - fg) + c(dh - eg)`,
        explanation: 'The formula for the determinant of a 3×3 matrix.'
      });
      steps.push({
        step: `det = ${a}(${e}×${i} - ${f}×${h}) - ${b}(${d}×${i} - ${f}×${g}) + ${c}(${d}×${h} - ${e}×${g})`,
        explanation: 'Substitute the values into the formula.'
      });
      
      const term1 = e * i - f * h;
      const term2 = d * i - f * g;
      const term3 = d * h - e * g;
      
      steps.push({
        step: `det = ${a}(${term1}) - ${b}(${term2}) + ${c}(${term3})`,
        explanation: 'Calculate the three terms inside the parentheses.'
      });
      const det = a * term1 - b * term2 + c * term3;
      steps.push({
        step: `det = ${a*term1} - ${b*term2} + ${c*term3}`,
        explanation: 'Multiply and combine the terms.'
      });
      steps.push({
        step: `det = ${det}`,
        explanation: 'The final determinant value.'
      });
      return { det, steps };
    }

    // For 4x4 and above, use Laplace expansion
    steps.push({
      step: `Using Laplace expansion along first row (size ${n}×${n}):`,
      explanation: 'Laplace expansion calculates the determinant by expanding along a row or column using cofactors.'
    });
    steps.push({
      step: `det = Σ(j=1 to ${n}) (-1)^(1+j) × a₁ⱼ × det(M₁ⱼ)`,
      explanation: 'Each term is the product of the element, its sign, and the determinant of its minor.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    let det = 0;
    for (let j = 0; j < n; j++) {
      const minor = getMinor(matrix, 0, j);
      const minorDet = calculateDeterminant(minor);
      const sign = j % 2 === 0 ? 1 : -1;
      const term = sign * matrix[0][j] * minorDet.det;
      
      steps.push({
        step: `Term ${j+1}: (-1)^(1+${j+1}) × ${matrix[0][j]} × det(M₁${j+1})`,
        explanation: `Cofactor term ${j+1} with sign ${sign > 0 ? '+' : '-'}.`
      });
      steps.push({
        step: `  = ${sign > 0 ? '+' : '-'} × ${matrix[0][j]} × ${minorDet.det.toFixed(4)}`,
        explanation: 'Multiply the sign, element, and minor determinant.'
      });
      steps.push({
        step: `  = ${term.toFixed(4)}`,
        explanation: 'The contribution of this term to the determinant.'
      });
      steps.push({
        step: '',
        explanation: ''
      });
      
      det += term;
    }
    
    steps.push({
      step: `Total determinant = ${det.toFixed(4)}`,
      explanation: 'Sum all the cofactor terms to get the final determinant.'
    });
    return { det, steps };
  };

  const calculateDet = () => {
    setError('');
    setResult('');
    setSteps([]);

    // Check if matrix is square
    if (matrix.length !== matrix[0]?.length) {
      setError('Matrix must be square');
      return;
    }

    const result = calculateDeterminant(matrix);
    
    // Check for singular matrix
    if (Math.abs(result.det) < 1e-10) {
      setResult(`det = ${result.det.toFixed(4)}`);
      setSteps([
        ...result.steps,
        {
          step: '',
          explanation: ''
        },
        {
          step: '⚠️ The determinant is 0 (or very close to 0).',
          explanation: 'A zero determinant means the matrix is singular.'
        },
        {
          step: 'This means the matrix is singular and does not have an inverse.',
          explanation: 'Singular matrices are not invertible.'
        }
      ]);
    } else {
      setResult(`det = ${result.det.toFixed(4)}`);
      setSteps([
        ...result.steps,
        {
          step: '',
          explanation: ''
        },
        {
          step: '✅ The determinant is non-zero.',
          explanation: 'A non-zero determinant means the matrix is invertible.'
        },
        {
          step: 'This means the matrix is invertible and has an inverse.',
          explanation: 'Non-singular matrices have unique inverses.'
        }
      ]);
    }
  };

  const handleResize = (newSize: 2 | 3 | 4) => {
    setSize(newSize);
    const newMatrix: number[][] = [];
    for (let i = 0; i < newSize; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < newSize; j++) {
        newMatrix[i][j] = matrix[i]?.[j] || 0;
      }
    }
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  const updateMatrix = (row: number, col: number, value: string) => {
    const newMatrix = [...matrix];
    const numValue = value === '' ? 0 : parseFloat(value);
    newMatrix[row][col] = isNaN(numValue) ? 0 : numValue;
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  const resetMatrix = () => {
    let newMatrix: number[][];
    switch (size) {
      case 2:
        newMatrix = [
          [1, 2],
          [3, 4]
        ];
        break;
      case 3:
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
        break;
      case 4:
        newMatrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ];
        break;
      default:
        newMatrix = [
          [1, 2],
          [3, 4]
        ];
    }
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newMatrix: number[][];
    let newSize: 2 | 3 | 4 = 2;
    
    switch (example) {
      case '2x2':
        newMatrix = [
          [4, 7],
          [2, 6]
        ];
        newSize = 2;
        break;
      case '2x2 singular':
        newMatrix = [
          [1, 2],
          [2, 4]
        ];
        newSize = 2;
        break;
      case '3x3':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 10]
        ];
        newSize = 3;
        break;
      case '3x3 singular':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
        newSize = 3;
        break;
      case '4x4':
        newMatrix = [
          [1, 0, 2, -1],
          [3, 1, 0, 2],
          [1, -1, 1, 0],
          [2, 1, -1, 1]
        ];
        newSize = 4;
        break;
      default:
        newMatrix = [
          [4, 7],
          [2, 6]
        ];
        newSize = 2;
    }
    
    setSize(newSize);
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  // Format matrix for display
  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => `[${row.join(', ')}]`).join('\n');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
            Determinant Calculator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Calculate det(A) with Laplace expansion and formula breakdown
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          <button
            onClick={() => loadExample('2x2')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2×2
          </button>
          <button
            onClick={() => loadExample('2x2 singular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2×2 Singular
          </button>
          <button
            onClick={() => loadExample('3x3')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3
          </button>
          <button
            onClick={() => loadExample('3x3 singular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3 Singular
          </button>
          <button
            onClick={() => loadExample('4x4')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            4×4
          </button>
          <button
            onClick={resetMatrix}
            className="px-2.5 py-1 text-xs font-semibold border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Size Selection */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3">
        <span className="text-xs sm:text-sm font-bold text-gray-700">Matrix Dimension:</span>
        <div className="flex gap-2">
          {[2, 3, 4].map(n => (
            <button
              key={n}
              onClick={() => handleResize(n as 2 | 3 | 4)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                size === n 
                  ? 'bg-[#7B1824] text-white shadow-sm shadow-[#7B1824]/20' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {n} × {n}
            </button>
          ))}
        </div>
      </div>

      {/* Matrix Input */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
            Matrix A ({size}×{size})
          </h4>
          <span className="text-xs font-mono text-gray-400">
            {matrix.length} × {matrix[0]?.length || 0}
          </span>
        </div>

        <div className="overflow-x-auto p-3 bg-gray-50/70 rounded-xl border border-gray-100">
          <table className="border-separate border-spacing-1.5 mx-auto">
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i}>
                  {row.map((val, j) => (
                    <td key={j} className="p-0">
                      <input
                        type="text"
                        value={getDisplayValue(val)}
                        onChange={(e) => updateMatrix(i, j, e.target.value)}
                        onBlur={() => handleInputBlur(i, j)}
                        className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
                        placeholder="0"
                        step="any"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={calculateDet}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7B1824] hover:bg-[#60101B] text-white font-bold rounded-xl shadow-md shadow-[#7B1824]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Calculate Determinant
        </button>
        {steps.length > 0 && (
          <button
            onClick={() => setShowSteps(!showSteps)}
            className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {showSteps ? 'Hide' : 'Show'} Step Breakdown
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs sm:text-sm font-semibold text-[#7B1824]">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#7B1824]/30 bg-gradient-to-br from-[#FFF8F9] to-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#7B1824]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Computed Determinant</h3>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title={`Determinant of Matrix (${size}×${size})`}
                  data={result}
                  steps={steps.map(s => `${s.step}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Matrix A (${size}×${size}):\n${matrix.map(row => `[${row.join(', ')}]`).join('\n')}`}
                  fileName={`determinant_${size}x${size}`}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-base sm:text-lg font-bold text-gray-900">
              {result}
            </div>
          </div>

          {/* Steps with explanation beside */}
          {showSteps && steps.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Detailed Step Breakdown</h3>
              </div>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {steps.filter(item => item.step.trim() !== '').map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 font-mono text-xs sm:text-sm text-gray-800 whitespace-pre-wrap">
                        {item.step}
                      </div>
                    </div>
                    {item.explanation && (
                      <div className="pt-2 pl-8 border-t border-gray-200/60">
                        <p className="text-xs text-gray-500 italic">
                          <span className="font-semibold text-[#7B1824] not-italic">Note: </span>
                          {item.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Help */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2 text-xs text-gray-600">
        <p className="font-bold text-gray-800 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
          <svg className="w-4 h-4 text-[#7B1824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Determinant Rules & Properties
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>2×2 Matrix: det(A) = ad - bc</li>
          <li>3×3 Matrix: det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)</li>
          <li>4×4+ Matrix: Uses cofactor expansion along row 1</li>
          <li>det(A) = 0 implies the matrix is singular and cannot be inverted</li>
          <li>det(A) ≠ 0 confirms linear independence of rows and columns</li>
        </ul>
      </div>
    </div>
  );
};

export default DeterminantCalculator;