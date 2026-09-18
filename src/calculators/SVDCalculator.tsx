// components/SVDCalculator.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

interface Step {
  title: string;
  description: string;
  matrix?: number[][];
  label?: string;
  value?: string;
  explanation?: string;
}

const SVDCalculator: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([[1, 1], [1, 1]]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [showExplanation, setShowExplanation] = useState(true);

  // Helper function to compute SVD for any matrix using power iteration method
  const computeSVD = (A: number[][]): { U: number[][], S: number[], V: number[][] } => {
    const m = A.length;
    const n = A[0]?.length || 0;
    
    if (m === 0 || n === 0) {
      return { U: [], S: [], V: [] };
    }

    // If it's a 2x2 matrix, use the analytical method
    if (m === 2 && n === 2) {
      return computeSVD2x2(A);
    }

    // For larger matrices, use a simplified iterative method
    // Compute A^T * A
    const ATA: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < m; k++) {
          sum += A[k][i] * A[k][j];
        }
        ATA[i][j] = sum;
      }
    }

    // Compute eigenvalues of ATA using power iteration
    const numSingularValues = Math.min(m, n);
    const singularValues: number[] = [];
    const V: number[][] = [];
    
    // Power iteration to find eigenvectors
    let remainingMatrix = ATA.map(row => [...row]);
    
    for (let k = 0; k < numSingularValues; k++) {
      // Initialize random vector
      let v = Array.from({ length: n }, () => Math.random());
      let norm = Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
      v = v.map(val => val / norm);
      
      // Power iteration
      for (let iter = 0; iter < 50; iter++) {
        // v = ATA * v
        const newV = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          let sum = 0;
          for (let j = 0; j < n; j++) {
            sum += remainingMatrix[i][j] * v[j];
          }
          newV[i] = sum;
        }
        
        // Normalize
        norm = Math.sqrt(newV.reduce((sum, val) => sum + val * val, 0));
        if (norm < 1e-10) break;
        v = newV.map(val => val / norm);
      }
      
      // Compute eigenvalue
      let eigenvalue = 0;
      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
          sum += ATA[i][j] * v[j];
        }
        eigenvalue += v[i] * sum;
      }
      
      const singularValue = Math.sqrt(Math.max(eigenvalue, 0));
      singularValues.push(singularValue);
      V.push(v);
      
      // Deflate the matrix
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          remainingMatrix[i][j] -= eigenvalue * v[i] * v[j];
        }
      }
    }
    
    // Sort singular values in descending order
    const indices = singularValues.map((_, i) => i);
    indices.sort((a, b) => singularValues[b] - singularValues[a]);
    
    const sortedS = indices.map(i => singularValues[i]);
    const sortedV = indices.map(i => V[i]);
    
    // Compute U = A * V * S^(-1)
    const U: number[][] = Array.from({ length: m }, () => Array(numSingularValues).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < numSingularValues; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
          sum += A[i][k] * sortedV[j][k];
        }
        U[i][j] = sortedS[j] > 1e-10 ? sum / sortedS[j] : 0;
      }
    }
    
    return { U, S: sortedS, V: sortedV };
  };

  // Analytical SVD for 2x2 matrices
  const computeSVD2x2 = (A: number[][]): { U: number[][], S: number[], V: number[][] } => {
    const [[a, b], [c, d]] = A;
    
    // Compute A^T * A
    const ata = [
      [a*a + c*c, a*b + c*d],
      [a*b + c*d, b*b + d*d]
    ];
    
    // Compute eigenvalues
    const trace = ata[0][0] + ata[1][1];
    const det = ata[0][0] * ata[1][1] - ata[0][1] * ata[1][0];
    const discriminant = trace * trace - 4 * det;
    
    const λ1 = (trace + Math.sqrt(Math.max(discriminant, 0))) / 2;
    const λ2 = (trace - Math.sqrt(Math.max(discriminant, 0))) / 2;
    
    const σ1 = Math.sqrt(Math.max(λ1, 0));
    const σ2 = Math.sqrt(Math.max(λ2, 0));
    
    // Compute eigenvectors for V
    let v1: number[], v2: number[];
    
    if (Math.abs(ata[0][1]) < 1e-10) {
      v1 = [1, 0];
      v2 = [0, 1];
    } else {
      const a11 = ata[0][0] - λ1;
      const a12 = ata[0][1];
      
      if (Math.abs(a11) > Math.abs(a12)) {
        v1 = [a12, -a11];
      } else {
        v1 = [a12, -a11];
      }
      
      const norm1 = Math.sqrt(v1[0]*v1[0] + v1[1]*v1[1]);
      if (norm1 > 1e-10) {
        v1 = [v1[0]/norm1, v1[1]/norm1];
      }
      
      v2 = [-v1[1], v1[0]];
    }
    
    // Sort singular values and vectors
    let sortedS: number[], sortedV: number[][];
    if (σ1 >= σ2) {
      sortedS = [σ1, σ2];
      sortedV = [v1, v2];
    } else {
      sortedS = [σ2, σ1];
      sortedV = [v2, v1];
    }
    
    // Compute U
    const u1 = sortedS[0] > 1e-10 ? [
      (a * sortedV[0][0] + b * sortedV[0][1]) / sortedS[0],
      (c * sortedV[0][0] + d * sortedV[0][1]) / sortedS[0]
    ] : [1, 0];
    
    const u2 = sortedS[1] > 1e-10 ? [
      (a * sortedV[1][0] + b * sortedV[1][1]) / sortedS[1],
      (c * sortedV[1][0] + d * sortedV[1][1]) / sortedS[1]
    ] : [0, 1];
    
    // Ensure U is orthogonal
    const U = [u1, u2];
    
    return { U, S: sortedS, V: sortedV };
  };

  const calculateSVD = () => {
    const m = matrix.length;
    const n = matrix[0]?.length || 0;
    
    if (m === 0 || n === 0) {
      setResult('❌ Matrix is empty.');
      setSteps([]);
      return;
    }

    const stepsList: Step[] = [];

    // Step 1: Display original matrix
    stepsList.push({
      title: 'Step 1: Original Matrix',
      description: `We start with the ${m}×${n} matrix A.`,
      matrix: matrix,
      label: 'A =',
      explanation: 'The original matrix A that we want to decompose using SVD.'
    });

    // Compute SVD
    const { U, S, V } = computeSVD(matrix);
    const numSingularValues = S.length;

    // Step 2: Show A^T * A for square matrices or general case
    if (m === n) {
      const ATA: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          let sum = 0;
          for (let k = 0; k < m; k++) {
            sum += matrix[k][i] * matrix[k][j];
          }
          ATA[i][j] = sum;
        }
      }
      
      stepsList.push({
        title: 'Step 2: Compute A^T·A',
        description: `Computing the Gram matrix A^T·A (${n}×${n})`,
        matrix: ATA,
        label: 'A^T · A =',
        explanation: 'The eigenvalues of A^T·A give the squared singular values.'
      });
    }

    // Step 3: Singular values
    stepsList.push({
      title: `Step ${m === n ? '3' : '2'}: Singular Values`,
      description: `The singular values are:\n${S.map((s, i) => `σ${i+1} = ${s.toFixed(4)}`).join('\n')}`,
      explanation: 'Singular values are the square roots of the eigenvalues of A^T·A. They represent the "stretching" factors of the transformation.'
    });

    // Step 4: U matrix
    stepsList.push({
      title: `Step ${m === n ? '4' : '3'}: Left Singular Vectors (U)`,
      description: `U is a ${m}×${numSingularValues} matrix with orthonormal columns.`,
      matrix: U,
      label: 'U =',
      explanation: 'U contains the left singular vectors, which are the eigenvectors of A·A^T.'
    });

    // Step 5: V matrix
    stepsList.push({
      title: `Step ${m === n ? '5' : '4'}: Right Singular Vectors (V)`,
      description: `V is a ${n}×${numSingularValues} matrix with orthonormal columns.`,
      matrix: V,
      label: 'V =',
      explanation: 'V contains the right singular vectors, which are the eigenvectors of A^T·A.'
    });

    // Step 6: Verify SVD
    stepsList.push({
      title: `Step ${m === n ? '6' : '5'}: Verify SVD Decomposition`,
      description: 'Checking if A = U·Σ·V^T (or U·Σ·V^T for full SVD)',
      explanation: 'We verify the decomposition by reconstructing A from U, Σ, and V.'
    });

    // Reconstruct matrix: U * diag(S) * V^T
    const reconstructed: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < numSingularValues; k++) {
          sum += U[i][k] * S[k] * (V[j]?.[k] || 0);
        }
        reconstructed[i][j] = sum;
      }
    }

    let maxDiff = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        maxDiff = Math.max(maxDiff, Math.abs(matrix[i][j] - reconstructed[i][j]));
      }
    }

    stepsList.push({
      title: '  Verification Results',
      description: `Maximum difference between A and U·Σ·V^T: ${maxDiff.toFixed(10)}\n` +
                   `${maxDiff < 1e-8 ? '✅ SVD decomposition is correct!' : '⚠️ SVD decomposition has errors'}`,
      explanation: 'The maximum difference between the original matrix and the reconstructed matrix. A small value indicates the decomposition is accurate.'
    });

    // Step 7: Final SVD Result
    stepsList.push({
      title: '✅ Final SVD Decomposition',
      description: `A = U · Σ · V^T\n\n` +
                   `U (${m}×${numSingularValues}):\n${U.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n')}\n\n` +
                   `Σ (${numSingularValues}×${numSingularValues}):\n${S.map((s, i) => 
                     Array.from({ length: numSingularValues }, (_, j) => i === j ? s : 0)
                       .map(v => v.toFixed(4)).join(' ')
                   ).join('\n')}\n\n` +
                   `V (${n}×${numSingularValues}):\n${V.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n')}`,
      explanation: 'The complete SVD decomposition showing U (left singular vectors), Σ (diagonal matrix of singular values), and V (right singular vectors).'
    });

    setSteps(stepsList);

    // Set result for display
    const resultText = 
      '=== SVD DECOMPOSITION STEPS ===\n\n' +
      stepsList.map(step => 
        `${step.title}\n${step.description}\n${step.matrix ? formatMatrix(step.matrix, step.label || '') : ''}\n`
      ).join('\n');

    setResult(resultText);
  };

  const formatMatrix = (matrix: number[][], label: string): string => {
    if (!matrix || matrix.length === 0) return '';
    const formatted = matrix.map(row => 
      row.map(v => v.toFixed(4)).join(' ')
    ).join('\n');
    return `${label}\n${formatted}`;
  };

  const handleMatrixChange = (rowIndex: number, colIndex: number, value: string) => {
    const newM = [...matrix];
    if (value === '' || value === '-') {
      newM[rowIndex][colIndex] = 0;
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        newM[rowIndex][colIndex] = num;
      }
    }
    setMatrix(newM);
    setResult('');
    setSteps([]);
  };

  const addRow = () => {
    const cols = matrix[0]?.length || 2;
    setMatrix([...matrix, Array(cols).fill(0)]);
    setResult('');
    setSteps([]);
  };

  const addColumn = () => {
    setMatrix(matrix.map(row => [...row, 0]));
    setResult('');
    setSteps([]);
  };

  const removeRow = () => {
    if (matrix.length > 1) {
      setMatrix(matrix.slice(0, -1));
      setResult('');
      setSteps([]);
    }
  };

  const removeColumn = () => {
    if ((matrix[0]?.length || 0) > 1) {
      setMatrix(matrix.map(row => row.slice(0, -1)));
      setResult('');
      setSteps([]);
    }
  };

  const clearMatrix = () => {
    setMatrix(matrix.map(row => row.map(() => 0)));
    setResult('');
    setSteps([]);
  };

  const renderMatrix = (matrix: number[][], label?: string) => {
    if (!matrix || matrix.length === 0) return null;
    return (
      <div className="mt-2 inline-block rounded-xl border border-[#F0D5D8] bg-white p-2.5 shadow-2xs">
        {label && <p className="text-[11px] font-bold text-[#166534] mb-1">{label}</p>}
        <div className="space-y-1">
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-2">
              {row.map((val, j) => (
                <span key={j} className="w-16 px-1.5 py-0.5 text-center font-mono text-xs bg-gray-50 rounded border border-gray-100">
                  {val.toFixed(4)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-[#166534]/20 bg-gradient-to-r from-[#166534]/10 via-[#166534]/5 to-transparent p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shadow-sm shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
              Singular Value Decomposition (SVD) Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Decompose any matrix A into orthogonal U, diagonal singular values Σ, and orthogonal Vᵀ
            </p>
          </div>
        </div>
      </div>

      {/* Main Controls Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#166534]"></span>
            Matrix A ({matrix.length}×{matrix[0]?.length || 0})
          </h4>
          <span className="text-xs text-gray-500 font-medium">Rows × Columns</span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto p-1">
          <div className="inline-block p-3 rounded-2xl bg-gray-50/60 border border-gray-200">
            <table className="border-collapse">
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((val, j) => (
                      <td key={j} className="p-1">
                        <input
                          type="text"
                          value={val === 0 ? '' : val}
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            if (inputValue === '' || inputValue === '-' || /^-?\d*\.?\d*$/.test(inputValue)) {
                              handleMatrixChange(i, j, inputValue);
                            }
                          }}
                          className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Controls and Dimension buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-100">
          <button
            onClick={calculateSVD}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#166534] hover:bg-[#14532D] text-white font-bold rounded-xl shadow-md shadow-[#166534]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Calculate SVD
          </button>
          <button
            onClick={clearMatrix}
            className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear
          </button>
          <button
            onClick={addRow}
            className="px-3.5 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-1"
          >
            + Row
          </button>
          <button
            onClick={addColumn}
            className="px-3.5 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-1"
          >
            + Col
          </button>
          {matrix.length > 1 && (
            <button
              onClick={removeRow}
              className="px-3.5 py-2 border border-green-200 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-xl transition text-xs cursor-pointer inline-flex items-center gap-1"
            >
              - Row
            </button>
          )}
          {(matrix[0]?.length || 0) > 1 && (
            <button
              onClick={removeColumn}
              className="px-3.5 py-2 border border-green-200 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-xl transition text-xs cursor-pointer inline-flex items-center gap-1"
            >
              - Col
            </button>
          )}
          {steps.length > 0 && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {showExplanation ? 'Hide' : 'Show'} Steps ({steps.length})
            </button>
          )}
        </div>
      </div>

      {steps.length > 0 && (
        <div className="space-y-6">
          {/* Result Hero Card */}
          <div className="rounded-2xl border border-[#166534]/30 bg-gradient-to-br from-[#F0FDF4] to-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#166534] bg-[#F0FDF4] px-2.5 py-1 rounded-md border border-[#F0D5D8]">
                  SINGULAR VALUE FACTORIZATION COMPLETE
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">A = U · Σ · Vᵀ</h4>
              </div>
              <PDFExport
                title="Singular Value Decomposition (A = UΣVᵀ)"
                data={`Matrix Size: ${matrix.length}×${matrix[0]?.length || 0}\nRank / Non-zero SVs: ${Math.min(matrix.length, matrix[0]?.length || 0)}\n${result}`}
                steps={steps.map(s => ({
                  step: `${s.title}\n${s.description}${s.matrix ? '\n' + s.matrix.map(r => `[${r.map(v => v.toFixed(4)).join(', ')}]`).join('\n') : ''}`,
                  explanation: s.explanation
                }))}
                inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || 0}):\n${matrix.map(r => `[${r.join(', ')}]`).join('\n')}`}
                fileName="svd_decomposition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Matrix Size</span>
                <span className="font-mono text-base font-bold text-[#166534]">{matrix.length} × {matrix[0]?.length || 0}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Singular Values</span>
                <span className="font-mono text-base font-bold text-[#166534]">{Math.min(matrix.length, matrix[0]?.length || 0)}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Decomposition</span>
                <span className="font-mono text-base font-bold text-[#166534]">U·Σ·Vᵀ</span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Breakdown */}
          {showExplanation && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#166534]"></span>
                  Step-by-Step SVD Derivation
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#166534] border border-[#F0D5D8]">
                  SVD Algorithm
                </span>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                {steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-1">
                        <p className="font-bold text-gray-900 text-xs sm:text-sm">{step.title}</p>
                        <div className="font-mono text-xs sm:text-sm text-gray-800 whitespace-pre-wrap">
                          {step.description}
                        </div>
                        {step.matrix && step.matrix.length > 0 && (
                          <div className="mt-2">
                            {renderMatrix(step.matrix, step.label)}
                          </div>
                        )}
                      </div>
                    </div>
                    {step.explanation && (
                      <div className="ml-7.5 p-3 rounded-lg bg-white border border-[#F0D5D8] text-xs text-gray-700 font-medium">
                        {step.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Operations Info Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-3">
        <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Singular Value Decomposition Properties
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          SVD decomposes any m×n matrix A into A = U·Σ·Vᵀ, where U is an m×m orthogonal matrix (left singular vectors),
          Σ is an m×n diagonal matrix with non-negative real singular values in decreasing order, and V is an n×n orthogonal matrix (right singular vectors).
          SVD is ubiquitous in dimensionality reduction (PCA), pseudo-inverse computation, data compression, and noise filtering.
        </p>
      </div>
    </div>
  );
};

export default SVDCalculator;