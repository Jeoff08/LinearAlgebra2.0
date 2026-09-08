// components/RankCalculator.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

const RankCalculator: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  // Format matrix for display
  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => 
      `[${row.map(v => v.toFixed(4)).join(', ')}]`
    ).join('\n');
  };

  // Check if matrix is a zero row
  const isZeroRow = (row: number[]): boolean => {
    return row.every(val => Math.abs(val) < 1e-10);
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

  // Calculate rank using Gaussian elimination
  const calculateRank = () => {
    setError('');
    setResult('');
    setSteps([]);

    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;

    if (rows === 0 || cols === 0) {
      setError('Matrix is empty');
      return;
    }

    const stepList: { step: string; explanation: string }[] = [];
    const m = matrix.map(row => [...row]);
    
    stepList.push({
      step: '📊 Step 1: Original Matrix',
      explanation: 'The original matrix A whose rank we want to find.'
    });
    stepList.push({
      step: formatMatrix(m),
      explanation: 'The input matrix displayed in matrix form.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    stepList.push({
      step: '📝 Step 2: Gaussian Elimination (Row Reduction)',
      explanation: 'Converting to Row Echelon Form using row operations.'
    });
    stepList.push({
      step: 'Converting to Row Echelon Form:',
      explanation: 'The rank is the number of non-zero rows in Row Echelon Form.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    let rank = 0;
    let row = 0;

    for (let col = 0; col < cols && row < rows; col++) {
      // Find pivot
      let pivot = row;
      let maxVal = Math.abs(m[row][col]);
      for (let i = row + 1; i < rows; i++) {
        if (Math.abs(m[i][col]) > maxVal) {
          maxVal = Math.abs(m[i][col]);
          pivot = i;
        }
      }

      // Check if pivot is zero
      if (maxVal < 1e-10) {
        stepList.push({
          step: `Column ${col + 1}: No pivot found (all zeros)`,
          explanation: 'This column has no non-zero elements below the current row, so we move to the next column.'
        });
        continue;
      }

      // Swap rows if needed
      if (pivot !== row) {
        [m[row], m[pivot]] = [m[pivot], m[row]];
        stepList.push({
          step: `🔄 Swap Row ${row + 1} with Row ${pivot + 1}`,
          explanation: 'Swapping rows to get a non-zero pivot in the current position.'
        });
      }

      // Normalize pivot row
      const pivotVal = m[row][col];
      stepList.push({
        step: `➗ Normalize Row ${row + 1} by dividing by ${pivotVal.toFixed(4)}`,
        explanation: 'Dividing the pivot row by the pivot value to make the pivot equal to 1.'
      });
      for (let j = col; j < cols; j++) {
        m[row][j] /= pivotVal;
      }
      stepList.push({
        step: formatMatrix(m),
        explanation: 'The matrix after normalizing the pivot row.'
      });
      stepList.push({
        step: '',
        explanation: ''
      });

      // Eliminate below
      let eliminated = false;
      for (let i = row + 1; i < rows; i++) {
        const factor = m[i][col];
        if (Math.abs(factor) > 1e-10) {
          for (let j = col; j < cols; j++) {
            m[i][j] -= factor * m[row][j];
          }
          eliminated = true;
          stepList.push({
            step: `➖ Row ${i + 1} = Row ${i + 1} - ${factor.toFixed(4)} × Row ${row + 1}`,
            explanation: `Eliminating the element in column ${col + 1} of row ${i + 1} using the pivot row.`
          });
        }
      }
      if (eliminated) {
        stepList.push({
          step: formatMatrix(m),
          explanation: 'The matrix after eliminating below the pivot.'
        });
        stepList.push({
          step: '',
          explanation: ''
        });
      }

      rank++;
      row++;
    }

    // Count non-zero rows
    let nonZeroRows = 0;
    for (let i = 0; i < rows; i++) {
      if (!isZeroRow(m[i])) {
        nonZeroRows++;
      }
    }

    stepList.push({
      step: '✅ Step 3: Row Echelon Form',
      explanation: 'The matrix in Row Echelon Form with leading 1s.'
    });
    stepList.push({
      step: formatMatrix(m),
      explanation: 'The final Row Echelon Form matrix.'
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    stepList.push({
      step: `📌 Step 4: Count Non-Zero Rows`,
      explanation: 'The rank is the number of non-zero rows in the Row Echelon Form.'
    });
    stepList.push({
      step: `Number of non-zero rows = ${nonZeroRows}`,
      explanation: `There are ${nonZeroRows} rows with at least one non-zero element.`
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    // Check for zero rows
    const zeroRows = rows - nonZeroRows;
    if (zeroRows > 0) {
      stepList.push({
        step: `Found ${zeroRows} zero row(s)`,
        explanation: 'Zero rows are removed when calculating the rank.'
      });
    }

    stepList.push({
      step: `🎯 Final Result: Rank = ${nonZeroRows}`,
      explanation: `The matrix has rank ${nonZeroRows}.`
    });
    stepList.push({
      step: '',
      explanation: ''
    });

    // Explanation of rank
    stepList.push({
      step: '💡 What does this mean?',
      explanation: 'The rank tells us about the linear independence of the matrix.'
    });
    if (nonZeroRows === Math.min(rows, cols)) {
      stepList.push({
        step: `✅ The matrix has full rank (${nonZeroRows}).`,
        explanation: `The rank equals the maximum possible rank of ${Math.min(rows, cols)}.`
      });
      stepList.push({
        step: 'This means the rows/columns are linearly independent.',
        explanation: 'All rows and columns are linearly independent.'
      });
    } else {
      stepList.push({
        step: `⚠️ The matrix does NOT have full rank.`,
        explanation: `Rank (${nonZeroRows}) is less than the maximum possible rank of ${Math.min(rows, cols)}.`
      });
      stepList.push({
        step: `Rank (${nonZeroRows}) < ${Math.min(rows, cols)}`,
        explanation: 'There are linearly dependent rows or columns.'
      });
      stepList.push({
        step: 'This means the rows/columns are linearly dependent.',
        explanation: 'Some rows or columns can be expressed as combinations of others.'
      });
    }

    setResult(`Rank = ${nonZeroRows}`);
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
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newMatrix: number[][];
    switch (example) {
      case '2x3':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6]
        ];
        break;
      case '3x3 full':
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
      case '3x4':
        newMatrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12]
        ];
        break;
      case 'identity':
        newMatrix = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ];
        break;
      case '4x4':
        newMatrix = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]
        ];
        break;
      default:
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
    }
    setMatrix(newMatrix);
    setResult('');
    setSteps([]);
    setError('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
            Matrix Rank Calculator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Compute matrix rank, nullity, and Row Echelon Form via Gaussian elimination
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          <button
            onClick={() => loadExample('2x3')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2×3
          </button>
          <button
            onClick={() => loadExample('3x3 full')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3 Full Rank
          </button>
          <button
            onClick={() => loadExample('3x3 singular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×3 Singular
          </button>
          <button
            onClick={() => loadExample('3x4')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3×4
          </button>
          <button
            onClick={() => loadExample('identity')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Identity
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

      {/* Matrix Input */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
            Matrix A ({matrix.length}×{matrix[0]?.length || 0})
          </h4>
          <div className="flex gap-1.5">
            <button
              onClick={addRow}
              className="text-xs px-2.5 py-1 bg-[#FDF2F4] text-[#7B1824] hover:bg-[#7B1824] hover:text-white rounded-lg font-semibold transition cursor-pointer"
            >
              +Row
            </button>
            <button
              onClick={removeRow}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                matrix.length > 1
                  ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
              disabled={matrix.length <= 1}
            >
              -Row
            </button>
            <button
              onClick={addCol}
              className="text-xs px-2.5 py-1 bg-[#FDF2F4] text-[#7B1824] hover:bg-[#7B1824] hover:text-white rounded-lg font-semibold transition cursor-pointer"
            >
              +Col
            </button>
            <button
              onClick={removeCol}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                matrix[0]?.length > 1
                  ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
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

        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-gray-500">{matrix.length} × {matrix[0]?.length || 0} matrix</span>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={calculateRank}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7B1824] hover:bg-[#60101B] text-white font-bold rounded-xl shadow-md shadow-[#7B1824]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Calculate Rank
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
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Rank & Nullity</h3>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title={`Matrix Rank & Nullity (${matrix.length}×${matrix[0]?.length || matrix.length})`}
                  data={result}
                  steps={steps.map(s => `${s.step}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || matrix.length}):\n${formatMatrix(matrix)}`}
                  fileName={`matrix_rank_${matrix.length}x${matrix[0]?.length || matrix.length}`}
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
          Rank Properties & Row Echelon Form
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Rank equals the number of non-zero rows in Row Echelon Form (REF)</li>
          <li>Rank-Nullity Theorem: Rank(A) + Nullity(A) = Number of columns</li>
          <li>Full row rank occurs when Rank(A) = m; full column rank when Rank(A) = n</li>
          <li>A square matrix (n × n) is invertible if and only if Rank(A) = n</li>
        </ul>
      </div>
    </div>
  );
};

export default RankCalculator;