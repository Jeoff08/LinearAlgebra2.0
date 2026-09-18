// components/QRDecomposition.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

interface Step {
  title: string;
  description: string;
  matrix?: number[][];
  label?: string;
  explanation?: string;
}

const QRDecomposition: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([[1, 2], [3, 4], [5, 6]]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [showExplanation, setShowExplanation] = useState(true);

  const calculateQR = () => {
    const m = matrix.length;
    const n = matrix[0]?.length || 0;
    const Q: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const R: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    const stepsList: Step[] = [];

    // Add initial matrix
    stepsList.push({
      title: 'Step 1: Original Matrix',
      description: `We start with the ${m}×${n} matrix A that we want to decompose into Q (orthogonal) and R (upper triangular).`,
      matrix: matrix,
      label: 'A =',
      explanation: 'QR decomposition factors a matrix A into Q (orthogonal matrix) and R (upper triangular matrix). This is useful for solving linear systems and eigenvalue problems.'
    });

    // Gram-Schmidt process
    for (let j = 0; j < n; j++) {
      // Copy column j
      const v = matrix.map(row => row[j]);
      
      stepsList.push({
        title: `Step ${j + 2}: Process Column ${j + 1}`,
        description: `Taking column ${j + 1} of matrix A as vector v${j+1} = [${v.map(val => val.toFixed(2)).join(', ')}]^T`,
        matrix: matrix.map(row => [row[j]]),
        label: `v${j+1} =`,
        explanation: 'The Gram-Schmidt process takes each column of A and orthogonalizes it against all previous columns.'
      });

      // Orthogonalize against previous columns
      for (let i = 0; i < j; i++) {
        // Calculate R[i][j]
        R[i][j] = 0;
        for (let k = 0; k < m; k++) {
          R[i][j] += Q[k][i] * matrix[k][j];
        }
        
        // Subtract projection
        for (let k = 0; k < m; k++) {
          v[k] -= R[i][j] * Q[k][i];
        }

        stepsList.push({
          title: `  Projection onto q${i+1}`,
          description: `r${i+1}${j+1} = q${i+1}^T · v${j+1} = ${R[i][j].toFixed(4)}\nSubtracting projection from v${j+1}: v${j+1} = v${j+1} - ${R[i][j].toFixed(4)}·q${i+1}`,
          matrix: v.map(val => [val]),
          label: `v${j+1} (after orthogonalization) =`,
          explanation: `Remove the component of v${j+1} that lies along q${i+1} to make it orthogonal to q${i+1}.`
        });
      }

      // Calculate norm for R[j][j]
      let norm = 0;
      for (let k = 0; k < m; k++) {
        norm += v[k] * v[k];
      }
      R[j][j] = Math.sqrt(norm);
      
      // Normalize to get Q column
      for (let k = 0; k < m; k++) {
        Q[k][j] = v[k] / R[j][j];
      }

      stepsList.push({
        title: `  Normalize v${j+1}`,
        description: `r${j+1}${j+1} = ||v${j+1}|| = ${R[j][j].toFixed(4)}\nq${j+1} = v${j+1} / r${j+1}${j+1} = [${Q.map(row => row[j].toFixed(4)).join(', ')}]^T`,
        matrix: Q.map(row => [row[j]]),
        label: `q${j+1} =`,
        explanation: `Normalize the orthogonalized vector v${j+1} to get a unit vector q${j+1}. This forms the next column of Q.`
      });
    }

    // Add final Q and R matrices
    stepsList.push({
      title: 'Step 5: Final Results',
      description: `The QR decomposition is complete!\nQ is an orthogonal matrix (Q^T·Q = I)\nR is an upper triangular matrix`,
      matrix: Q,
      label: 'Q =',
      explanation: 'Q is an orthogonal matrix where each column is a unit vector and all columns are mutually perpendicular.'
    });

    stepsList.push({
      title: 'Final R Matrix',
      description: 'R is the upper triangular matrix from the decomposition.',
      matrix: R,
      label: 'R =',
      explanation: 'R is upper triangular with the orthogonalization coefficients on and above the diagonal.'
    });

    // Verify the decomposition
    const reconstructed: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          reconstructed[i][j] += Q[i][k] * R[k][j];
        }
      }
    }

    let maxDiff = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        maxDiff = Math.max(maxDiff, Math.abs(matrix[i][j] - reconstructed[i][j]));
      }
    }

    stepsList.push({
      title: '✅ Verification',
      description: `Checking if Q·R = A (original matrix)\nMaximum difference: ${maxDiff.toFixed(10)}\n${maxDiff < 1e-10 ? '✅ Decomposition is correct!' : '⚠️ Decomposition has errors'}`,
      explanation: 'Multiplying Q by R should reconstruct the original matrix A. The maximum difference indicates the accuracy of the decomposition.'
    });

    setSteps(stepsList);

    // Set result for display
    const resultText = 
      '=== QR DECOMPOSITION STEPS ===\n\n' +
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
      <div className="mt-2">
        {label && <span className="font-mono text-blue-700">{label}</span>}
        <div className="inline-block mt-1">
          {matrix.map((row, i) => (
            <div key={i} className="flex">
              {row.map((val, j) => (
                <div key={j} className="w-16 px-2 py-1 text-center font-mono text-sm border border-blue-200 bg-white">
                  {val.toFixed(4)}
                </div>
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
              QR Decomposition Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Factor matrix A into orthogonal Q and upper triangular R using the Gram-Schmidt process
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
            onClick={calculateQR}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#166534] hover:bg-[#14532D] text-white font-bold rounded-xl shadow-md shadow-[#166534]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Calculate QR
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
                  ORTHOGONAL DECOMPOSITION COMPLETE
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">A = Q · R Factorization</h4>
              </div>
              <PDFExport
                title="QR Decomposition (A = QR)"
                data={`Matrix Size: ${matrix.length}×${matrix[0]?.length || 0}\nQ Size: ${matrix.length}×${matrix[0]?.length || 0}\nR Size: ${matrix[0]?.length || 0}×${matrix[0]?.length || 0}\n${result}`}
                steps={steps.map(s => ({
                  step: `${s.title}\n${s.description}${s.matrix ? '\n' + s.matrix.map(r => `[${r.map(v => v.toFixed(4)).join(', ')}]`).join('\n') : ''}`,
                  explanation: s.explanation
                }))}
                inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || 0}):\n${matrix.map(r => `[${r.join(', ')}]`).join('\n')}`}
                fileName="qr_decomposition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Matrix A Size</span>
                <span className="font-mono text-base font-bold text-[#166534]">{matrix.length} × {matrix[0]?.length || 0}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Matrix Q Size</span>
                <span className="font-mono text-base font-bold text-[#166534]">{matrix.length} × {matrix[0]?.length || 0}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#F0D5D8] shadow-2xs">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Matrix R Size</span>
                <span className="font-mono text-base font-bold text-[#166534]">{matrix[0]?.length || 0} × {matrix[0]?.length || 0}</span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Breakdown */}
          {showExplanation && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#166534]"></span>
                  Step-by-Step Gram-Schmidt Breakdown
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#166534] border border-[#F0D5D8]">
                  Gram-Schmidt Orthogonalization
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
                          <div className="mt-2 inline-block rounded-xl border border-[#F0D5D8] bg-white p-2.5 shadow-2xs">
                            {step.label && (
                              <p className="text-[11px] font-bold text-[#166534] mb-1">{step.label}</p>
                            )}
                            <div className="space-y-1">
                              {step.matrix.map((row, rIdx) => (
                                <div key={rIdx} className="flex gap-2">
                                  {row.map((val, cIdx) => (
                                    <span key={cIdx} className="w-16 px-1.5 py-0.5 text-center font-mono text-xs bg-gray-50 rounded border border-gray-100">
                                      {val.toFixed(4)}
                                    </span>
                                  ))}
                                </div>
                              ))}
                            </div>
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
          Gram-Schmidt Process & QR Properties
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          QR decomposition factors an m×n matrix A into an orthogonal matrix Q (where QᵀQ = I) and an upper triangular matrix R.
          It is foundational for numerically stable linear least squares regression, eigenvalue computation (QR algorithm), and solving systems of linear equations.
        </p>
      </div>
    </div>
  );
};

export default QRDecomposition;