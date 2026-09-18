// components/MatrixInverse.tsx
import React, { useState, useEffect, useRef } from 'react';
import PDFExport from './PDFExport';

const MatrixInverse: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [4, 7],
    [2, 6]
  ]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);
  const [tryFlash, setTryFlash] = useState(false);
  const solveRef = useRef<(() => void) | null>(null);

  // Listen for "Try in Calculator" events dispatched from topic sections
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.matrix && Array.isArray(detail.matrix) && detail.matrix.length >= 2) {
        const mat: number[][] = detail.matrix;
        setMatrix(mat);
        setResult('');
        setSteps([]);
        setError('');
        setTryFlash(true);
        setTimeout(() => setTryFlash(false), 1500);
        // Auto-solve after state update
        setTimeout(() => solveRef.current?.(), 100);
      }
    };
    document.addEventListener('try-in-calculator', handler);
    return () => document.removeEventListener('try-in-calculator', handler);
  }, []);

  // Keep solve function in ref so the event handler always calls the latest version
  useEffect(() => {
    solveRef.current = calculateInverse;
  });

  // Get the determinant of a matrix
  const getDeterminant = (matrix: number[][]): number => {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    
    let det = 0;
    for (let j = 0; j < n; j++) {
      const minor = matrix
        .filter((_, i) => i !== 0)
        .map(row => row.filter((_, k) => k !== j));
      det += matrix[0][j] * (j % 2 === 0 ? 1 : -1) * getDeterminant(minor);
    }
    return det;
  };

  // Get minor matrix
  const getMinor = (matrix: number[][], row: number, col: number): number[][] => {
    return matrix
      .filter((_, i) => i !== row)
      .map(row => row.filter((_, j) => j !== col));
  };

  // Transpose matrix
  const transpose = (matrix: number[][]): number[][] => {
    const result: number[][] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = [];
      for (let i = 0; i < matrix.length; i++) {
        result[j][i] = matrix[i][j];
      }
    }
    return result;
  };

  // Multiply matrices
  const multiply = (A: number[][], B: number[][]): number[][] => {
    const result: number[][] = [];
    for (let i = 0; i < A.length; i++) {
      result[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < A[0].length; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  };

  // Format matrix for display
  const formatMatrix = (matrix: number[][]): string => {
    if (!matrix || matrix.length === 0) return '[]';
    return matrix.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n');
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

  const calculateInverse = () => {
    setError('');
    setResult('');
    setSteps([]);

    const n = matrix.length;
    
    // Check if square
    if (n !== matrix[0]?.length) {
      setError('Matrix must be square (same number of rows and columns)');
      return;
    }

    const stepList: { step: string; explanation: string }[] = [];
    
    // Step 1: Show original matrix
    stepList.push({
      step: 'Step 1: Original Matrix',
      explanation: 'The matrix we want to find the inverse of. It must be square.'
    });
    stepList.push({
      step: formatMatrix(matrix),
      explanation: 'The input matrix A displayed in matrix form.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    // Step 2: Calculate determinant
    stepList.push({
      step: 'Step 2: Calculate Determinant',
      explanation: 'The determinant tells us if the matrix is invertible (non-zero determinant).'
    });
    const det = getDeterminant(matrix);
    stepList.push({
      step: `det(A) = ${det.toFixed(4)}`,
      explanation: `The determinant value is ${det.toFixed(4)}.`
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    // Check if determinant is zero
    if (Math.abs(det) < 1e-10) {
      setError(`Matrix is singular (determinant = ${det.toFixed(4)}). No inverse exists.`);
      setSteps(stepList);
      return;
    }

    // For 2x2 matrix
    if (n === 2) {
      const [[a, b], [c, d]] = matrix;
      
      stepList.push({
        step: 'Step 3: Apply 2×2 Inverse Formula',
        explanation: 'For a 2×2 matrix, the inverse formula is A⁻¹ = (1/det) × [d, -b; -c, a].'
      });
      stepList.push({
        step: `A⁻¹ = (1/${det.toFixed(4)}) × [${d}, ${-b}; ${-c}, ${a}]`,
        explanation: 'Substitute the values into the formula.'
      });
      stepList.push({
        step: '',
        explanation: ''
      });

      const inv = [
        [d / det, -b / det],
        [-c / det, a / det]
      ];

      stepList.push({
        step: 'Step 4: Inverse Matrix',
        explanation: 'The calculated inverse matrix.'
      });
      stepList.push({
        step: formatMatrix(inv),
        explanation: 'The inverse matrix A⁻¹.'
      });
      stepList.push({
        step: '',
        explanation: ''
      });

      // Verification
      stepList.push({
        step: 'Step 5: Verification (A × A⁻¹ = I)',
        explanation: 'Verify the result by multiplying the original matrix by its inverse.'
      });
      const identity = multiply(matrix, inv);
      stepList.push({
        step: formatMatrix(identity.map(row => row.map(v => Math.abs(v) < 1e-10 ? 0 : v))),
        explanation: 'The product should be the identity matrix.'
      });
      
      // Check if identity
      let isIdentity = true;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const expected = i === j ? 1 : 0;
          if (Math.abs(identity[i][j] - expected) > 1e-6) {
            isIdentity = false;
            break;
          }
        }
      }
      stepList.push({
        step: isIdentity ? '✅ Verification successful!' : '⚠️ Minor rounding discrepancies',
        explanation: isIdentity ? 'The inverse is correct.' : 'Small rounding errors from floating point calculations.'
      });
      
      setResult(formatMatrix(inv));
      setSteps(stepList);
      return;
    }

    // For 3x3 and above - Cofactor method
    stepList.push({
      step: 'Step 3: Calculate Cofactor Matrix',
      explanation: 'The cofactor matrix consists of signed minors for each element.'
    });
    
    const cofactorMatrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      cofactorMatrix[i] = [];
      for (let j = 0; j < n; j++) {
        const minor = getMinor(matrix, i, j);
        const minorDet = getDeterminant(minor);
        const sign = (i + j) % 2 === 0 ? 1 : -1;
        cofactorMatrix[i][j] = minorDet * sign;
      }
    }
    
    stepList.push({
      step: 'Cofactor Matrix:',
      explanation: 'Each element is the minor determinant multiplied by the sign (-1)^(i+j).'
    });
    stepList.push({
      step: formatMatrix(cofactorMatrix),
      explanation: 'The cofactor matrix C.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    stepList.push({
      step: 'Step 4: Calculate Adjugate Matrix (Transpose of Cofactor)',
      explanation: 'The adjugate matrix is the transpose of the cofactor matrix.'
    });
    const adjugate = transpose(cofactorMatrix);
    stepList.push({
      step: formatMatrix(adjugate),
      explanation: 'The adjugate matrix adj(A).'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    stepList.push({
      step: `Step 5: Calculate Inverse (Multiply by 1/${det.toFixed(4)})`,
      explanation: `The inverse is A⁻¹ = (1/det(A)) × adj(A).`
    });
    const inverse = adjugate.map(row => row.map(val => val / det));
    stepList.push({
      step: formatMatrix(inverse),
      explanation: 'The final inverse matrix.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    // Verification
    stepList.push({
      step: 'Step 6: Verification (A × A⁻¹ = I)',
      explanation: 'Verify the result by multiplying the original matrix by its inverse.'
    });
    const identity = multiply(matrix, inverse);
    stepList.push({
      step: formatMatrix(identity.map(row => row.map(v => Math.abs(v) < 1e-10 ? 0 : v))),
      explanation: 'The product should be the identity matrix.'
    });
    
    let isIdentity = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const expected = i === j ? 1 : 0;
        if (Math.abs(identity[i][j] - expected) > 1e-6) {
          isIdentity = false;
          break;
        }
      }
    }
    stepList.push({
      step: isIdentity ? '✅ Verification successful!' : '⚠️ Minor rounding discrepancies',
      explanation: isIdentity ? 'The inverse is correct.' : 'Small rounding errors from floating point calculations.'
    });

    setResult(formatMatrix(inverse));
    setSteps(stepList);
  };

  const addRow = () => {
    const newMatrix = [...matrix];
    const cols = newMatrix[0]?.length || 2;
    newMatrix.push(Array(cols).fill(0));
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeRow = () => {
    if (matrix.length > 1) {
      const newMatrix = [...matrix];
      newMatrix.pop();
      setMatrix(newMatrix);
      setResult('');
      setSteps([]);
      setError('');
    }
  };

  const addCol = () => {
    const newMatrix = [...matrix];
    newMatrix.forEach(row => row.push(0));
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeCol = () => {
    if (matrix[0]?.length > 1) {
      const newMatrix = [...matrix];
      newMatrix.forEach(row => row.pop());
      setMatrix(newMatrix);
      setResult('');
      setSteps([]);
      setError('');
    }
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
    setMatrix([
      [4, 7],
      [2, 6]
    ]);
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newMatrix: number[][];
    switch (example) {
      case '2x2':
        newMatrix = [
          [4, 7],
          [2, 6]
        ];
        break;
      case '2x2 singular':
        newMatrix = [
          [1, 2],
          [2, 4]
        ];
        break;
      case '3x3':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 10]
        ];
        break;
      case '3x3 singular':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
        break;
      case '4x4':
        newMatrix = [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
          [4, 5, 6, 7]
        ];
        break;
      default:
        newMatrix = [
          [4, 7],
          [2, 6]
        ];
    }
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  return (
    <div className={`space-y-6 transition-all duration-500 ${tryFlash ? 'ring-4 ring-[#166534]/40 rounded-2xl p-2 bg-[#F0FDF4]/30' : ''}`}>
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#166534]"></span>
            Matrix Inverse Calculator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Calculate the inverse (A⁻¹) of square matrices with verified step-by-step breakdowns
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          <button
            onClick={() => loadExample('2x2')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#F0FDF4] hover:text-[#166534] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2×2
          </button>
          <button
            onClick={() => loadExample('2x2 singular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#F0FDF4] hover:text-[#166534] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2×2 Singular
          </button>
          <button
            onClick={() => loadExample('3x3')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#F0FDF4] hover:text-[#166534] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3
          </button>
          <button
            onClick={() => loadExample('3x3 singular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#F0FDF4] hover:text-[#166534] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3 Singular
          </button>
          <button
            onClick={() => loadExample('4x4')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#F0FDF4] hover:text-[#166534] text-gray-700 rounded-lg transition cursor-pointer"
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

      {/* Matrix Input */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#166534]"></span>
            Matrix A ({matrix.length}×{matrix[0]?.length || 0})
          </h4>
          <div className="flex gap-1.5">
            <button
              onClick={addRow}
              className="text-xs px-2.5 py-1 bg-[#F0FDF4] text-[#166534] hover:bg-[#166534] hover:text-white rounded-lg font-semibold transition cursor-pointer"
            >
              +Row
            </button>
            <button
              onClick={removeRow}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                matrix.length > 1
                  ? 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
              disabled={matrix.length <= 1}
            >
              -Row
            </button>
            <button
              onClick={addCol}
              className="text-xs px-2.5 py-1 bg-[#F0FDF4] text-[#166534] hover:bg-[#166534] hover:text-white rounded-lg font-semibold transition cursor-pointer"
            >
              +Col
            </button>
            <button
              onClick={removeCol}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                matrix[0]?.length > 1
                  ? 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
              disabled={matrix[0]?.length <= 1}
            >
              -Col
            </button>
          </div>
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
                        className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] outline-none transition shadow-2xs"
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

        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-gray-500">{matrix.length} × {matrix[0]?.length || 0} matrix</span>
          {matrix.length !== matrix[0]?.length && (
            <span className="text-green-600 font-semibold">⚠️ Matrix must be square</span>
          )}
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={calculateInverse}
          disabled={matrix.length !== matrix[0]?.length}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all text-xs sm:text-sm shadow-md cursor-pointer ${
            matrix.length === matrix[0]?.length
              ? 'bg-[#166534] hover:bg-[#14532D] text-white shadow-[#166534]/20 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Calculate Inverse
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
        <div className="p-4 bg-[#F0FDF4] rounded-xl border border-[#166534]/20 text-xs sm:text-sm font-semibold text-[#166534]">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#166534]/30 bg-gradient-to-br from-[#F0FDF4] to-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#166534]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#166534]">Inverse Matrix (A⁻¹)</h3>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title={`Matrix Inverse (A⁻¹) - ${matrix.length}×${matrix[0]?.length || matrix.length}`}
                  data={result}
                  steps={steps.map(s => `${s.step}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || matrix.length}):\n${formatMatrix(matrix)}`}
                  fileName={`matrix_inverse_${matrix.length}x${matrix[0]?.length || matrix.length}`}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-sm sm:text-base font-bold text-gray-900 whitespace-pre-wrap">
              {result}
            </div>
          </div>

          {/* Steps with explanation beside */}
          {showSteps && steps.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#166534]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Detailed Step Breakdown</h3>
              </div>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {steps.filter(item => item.step.trim() !== '').map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 font-mono text-xs sm:text-sm text-gray-800 whitespace-pre-wrap">
                        {item.step}
                      </div>
                    </div>
                    {item.explanation && (
                      <div className="pt-2 pl-8 border-t border-gray-200/60">
                        <p className="text-xs text-gray-500 italic">
                          <span className="font-semibold text-[#166534] not-italic">Note: </span>
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
          <svg className="w-4 h-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Inversion Properties & Guide
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Matrix must be square (n × n)</li>
          <li>Inverse exists only if determinant det(A) ≠ 0</li>
          <li>Formula for 2×2: A⁻¹ = (1/det) × [d, -b; -c, a]</li>
          <li>Higher dimensions: Uses cofactor matrix and adjoint A⁻¹ = (1/det) × adj(A)</li>
          <li>Verification: A × A⁻¹ = I (Identity Matrix)</li>
        </ul>
      </div>
    </div>
  );
};

export default MatrixInverse;