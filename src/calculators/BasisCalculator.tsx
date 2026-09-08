// components/BasisCalculator.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'basis' | 'dimension' | 'span' | 'independence';

const BasisCalculator: React.FC = () => {
  const [vectors, setVectors] = useState<number[][]>([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]);
  const [operation, setOperation] = useState<Operation>('basis');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n');
  };

  const isZeroRow = (row: number[]): boolean => {
    return row.every(val => Math.abs(val) < 1e-10);
  };

  const gaussianElimination = (matrix: number[][]): { 
    rank: number; 
    steps: { step: string; explanation: string }[]; 
    reduced: number[][];
    pivotColumns: number[];
    basisIndices: number[];
  } => {
    const steps: { step: string; explanation: string }[] = [];
    const m = matrix.map(row => [...row]);
    const rows = m.length;
    const cols = m[0]?.length || 0;
    
    steps.push({
      step: 'Converting to Row Echelon Form:',
      explanation: 'Gaussian elimination transforms the matrix to row echelon form.'
    });
    steps.push({
      step: formatMatrix(m),
      explanation: 'The initial matrix of vectors as rows.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    let rank = 0;
    let row = 0;
    const pivotColumns: number[] = [];
    const basisIndices: number[] = [];

    for (let col = 0; col < cols && row < rows; col++) {
      let pivot = row;
      let maxVal = Math.abs(m[row][col]);
      for (let i = row + 1; i < rows; i++) {
        if (Math.abs(m[i][col]) > maxVal) {
          maxVal = Math.abs(m[i][col]);
          pivot = i;
        }
      }

      if (maxVal < 1e-10) {
        steps.push({
          step: `Column ${col + 1}: No pivot found (all zeros)`,
          explanation: `No non-zero element found in column ${col + 1}.`
        });
        continue;
      }

      if (pivot !== row) {
        [m[row], m[pivot]] = [m[pivot], m[row]];
        steps.push({
          step: `🔄 Swap Row ${row + 1} with Row ${pivot + 1}`,
          explanation: `Swapping rows for numerical stability.`
        });
        steps.push({
          step: formatMatrix(m),
          explanation: 'The matrix after swapping rows.'
        });
        steps.push({
          step: '',
          explanation: ''
        });
      }

      const pivotVal = m[row][col];
      for (let j = col; j < cols; j++) {
        m[row][j] /= pivotVal;
      }
      steps.push({
        step: `➗ Normalize Row ${row + 1}`,
        explanation: `Dividing row ${row+1} by the pivot value to make it 1.`
      });
      steps.push({
        step: formatMatrix(m),
        explanation: 'The matrix after normalizing the pivot row.'
      });
      steps.push({
        step: '',
        explanation: ''
      });

      let eliminated = false;
      for (let i = row + 1; i < rows; i++) {
        const factor = m[i][col];
        if (Math.abs(factor) > 1e-10) {
          for (let j = col; j < cols; j++) {
            m[i][j] -= factor * m[row][j];
          }
          eliminated = true;
          steps.push({
            step: `➖ Row ${i + 1} = Row ${i + 1} - ${factor.toFixed(4)} × Row ${row + 1}`,
            explanation: `Eliminating element in row ${i+1}, column ${col+1}.`
          });
        }
      }
      if (eliminated) {
        steps.push({
          step: formatMatrix(m),
          explanation: 'The matrix after eliminating below the pivot.'
        });
        steps.push({
          step: '',
          explanation: ''
        });
      }

      for (let i = 0; i < row; i++) {
        const factor = m[i][col];
        if (Math.abs(factor) > 1e-10) {
          for (let j = col; j < cols; j++) {
            m[i][j] -= factor * m[row][j];
          }
          steps.push({
            step: `➖ Row ${i + 1} = Row ${i + 1} - ${factor.toFixed(4)} × Row ${row + 1}`,
            explanation: `Eliminating above the pivot in row ${i+1}.`
          });
        }
      }
      if (eliminated) {
        steps.push({
          step: formatMatrix(m),
          explanation: 'The matrix after eliminating above the pivot.'
        });
        steps.push({
          step: '',
          explanation: ''
        });
      }

      pivotColumns.push(col);
      basisIndices.push(row);
      rank++;
      row++;
    }

    steps.push({
      step: '✅ Row Reduced Echelon Form:',
      explanation: 'The final reduced row echelon form of the matrix.'
    });
    steps.push({
      step: formatMatrix(m),
      explanation: 'The matrix in reduced row echelon form.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    return { rank, steps, reduced: m, pivotColumns, basisIndices };
  };

  const performOperation = () => {
    setError('');
    setResult('');
    setSteps([]);

    try {
      if (vectors.length === 0) {
        setError('Please add at least one vector');
        return;
      }

      const dim = vectors[0].length;
      for (let i = 1; i < vectors.length; i++) {
        if (vectors[i].length !== dim) {
          setError(`All vectors must have the same dimension. Vector ${i+1} has ${vectors[i].length}D but expected ${dim}D`);
          return;
        }
      }

      const stepList: { step: string; explanation: string }[] = [];
      let resultValue = '';

      switch (operation) {
        case 'basis': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors we want to find a basis for.'
          });
          vectors.forEach((v, i) => {
            stepList.push({
              step: `v${i+1} = ${formatVector(v)}`,
              explanation: `Vector ${i+1} with ${v.length} components.`
            });
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `Number of vectors: ${vectors.length}`,
            explanation: `We have ${vectors.length} vectors in the set.`
          });
          stepList.push({
            step: `Dimension: ${dim}D`,
            explanation: `The vectors live in a ${dim}-dimensional space.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          stepList.push({
            step: '📝 Finding a Basis for the Span',
            explanation: 'A basis is a set of linearly independent vectors that span the space.'
          });
          stepList.push({
            step: 'A basis is a set of linearly independent vectors that span the space.',
            explanation: 'The basis vectors are linearly independent and generate the entire span.'
          });
          stepList.push({
            step: 'We use Gaussian elimination to find the linearly independent vectors.',
            explanation: 'The pivot rows in the row echelon form identify the independent vectors.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps, basisIndices } = gaussianElimination(matrix);
          stepList.push(...gaussSteps);

          const basisVectors = basisIndices.map(idx => vectors[idx]);
          
          stepList.push({
            step: `📌 Rank = ${rank}`,
            explanation: `The rank of the vector set is ${rank}.`
          });
          stepList.push({
            step: `Dimension of span = ${rank}`,
            explanation: `The span has dimension ${rank}.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          if (rank === 0) {
            stepList.push({
              step: '⚠️ The span is the zero vector space',
              explanation: 'The span contains only the zero vector.'
            });
            resultValue = 'Basis: The zero vector space (dimension 0)';
            break;
          }

          stepList.push({
            step: '✅ Basis Vectors:',
            explanation: 'The linearly independent vectors that form the basis.'
          });
          basisVectors.forEach((v, i) => {
            stepList.push({
              step: `  b${i+1} = ${formatVector(v)}`,
              explanation: `Basis vector ${i+1}.`
            });
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          if (rank === dim) {
            stepList.push({
              step: `🎉 The vectors form a basis for R^${dim}!`,
              explanation: `The vectors are linearly independent and span the full space.`
            });
            stepList.push({
              step: `Number of basis vectors (${rank}) = Dimension (${dim})`,
              explanation: `The basis has ${rank} vectors, equal to the dimension.`
            });
          } else {
            stepList.push({
              step: `⚠️ The vectors span a ${rank}-dimensional subspace of R^${dim}`,
              explanation: `The basis spans a ${rank}-dimensional subspace, not the full space.`
            });
            stepList.push({
              step: `Number of basis vectors (${rank}) < Dimension (${dim})`,
              explanation: `The basis has ${rank} vectors, less than the dimension.`
            });
            stepList.push({
              step: 'The basis vectors form a basis for the subspace, not the whole space.',
              explanation: 'The basis is only for the span, not the entire ambient space.'
            });
          }

          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '💡 Interpretation:',
            explanation: 'Understanding the implications of the basis.'
          });
          if (rank === dim) {
            stepList.push({
              step: '• The vectors form a basis for the entire space',
              explanation: `The basis generates R^${dim}.`
            });
            stepList.push({
              step: `• The subspace is R^${dim}`,
              explanation: 'The span is the full space.'
            });
          } else {
            stepList.push({
              step: `• The vectors form a basis for a ${rank}-dimensional subspace`,
              explanation: `The basis generates a ${rank}-dimensional subspace.`
            });
            stepList.push({
              step: `• The subspace has ${dim - rank} fewer dimensions than the full space`,
              explanation: `The subspace is missing ${dim - rank} dimensions.`
            });
          }

          resultValue = `Basis vectors:\n${basisVectors.map(v => formatVector(v)).join('\n')}`;
          break;
        }

        case 'dimension': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors whose span dimension we want to find.'
          });
          vectors.forEach((v, i) => {
            stepList.push({
              step: `v${i+1} = ${formatVector(v)}`,
              explanation: `Vector ${i+1} with ${v.length} components.`
            });
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          stepList.push({
            step: '📐 Finding the Dimension of the Span',
            explanation: 'The dimension is the number of linearly independent vectors in the set.'
          });
          stepList.push({
            step: 'The dimension is the number of linearly independent vectors in the set',
            explanation: 'The dimension equals the rank of the matrix formed by the vectors.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps } = gaussianElimination(matrix);
          stepList.push(...gaussSteps);

          stepList.push({
            step: `📌 Dimension = Rank = ${rank}`,
            explanation: `The dimension of the span is ${rank}.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          if (rank === dim) {
            stepList.push({
              step: `✅ The vectors span the entire space R^${dim}`,
              explanation: `The vectors generate the full ${dim}-dimensional space.`
            });
            stepList.push({
              step: `The dimension of the span is ${rank}`,
              explanation: 'The span has full dimension.'
            });
          } else {
            stepList.push({
              step: `⚠️ The vectors only span a ${rank}-dimensional subspace of R^${dim}`,
              explanation: `The span is a proper subspace of R^${dim}.`
            });
            stepList.push({
              step: `The subspace has ${dim - rank} fewer dimensions than the full space`,
              explanation: `The span is missing ${dim - rank} dimensions.`
            });
          }

          resultValue = `Dimension = ${rank}`;
          break;
        }

        case 'span': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors we want to check if they span the space.'
          });
          vectors.forEach((v, i) => {
            stepList.push({
              step: `v${i+1} = ${formatVector(v)}`,
              explanation: `Vector ${i+1} with ${v.length} components.`
            });
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          stepList.push({
            step: '📝 Checking if vectors span the space',
            explanation: 'Vectors span the space if their rank equals the dimension.'
          });
          stepList.push({
            step: 'Vectors span the space if their rank equals the dimension',
            explanation: 'The rank must equal the dimension of the space.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps } = gaussianElimination(matrix);
          stepList.push(...gaussSteps);

          const spans = rank === dim;
          
          stepList.push({
            step: `📌 Rank = ${rank}, Dimension = ${dim}`,
            explanation: `The rank is ${rank} and the space dimension is ${dim}.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          if (spans) {
            stepList.push({
              step: '✅ The vectors span the entire space R^' + dim,
              explanation: `The vectors generate the full ${dim}-dimensional space.`
            });
            stepList.push({
              step: `The rank (${rank}) equals the dimension (${dim})`,
              explanation: 'The vectors are sufficient to reach every vector in the space.'
            });
          } else {
            stepList.push({
              step: '❌ The vectors do not span the entire space R^' + dim,
              explanation: `The vectors only generate a ${rank}-dimensional subspace.`
            });
            stepList.push({
              step: `The rank (${rank}) is less than the dimension (${dim})`,
              explanation: 'Some vectors in the space cannot be reached.'
            });
            stepList.push({
              step: `The vectors only span a ${rank}-dimensional subspace`,
              explanation: `The span is a ${rank}-dimensional subspace of R^${dim}.`
            });
          }

          resultValue = spans ? '✅ The vectors span the space' : '❌ The vectors do not span the space';
          break;
        }

        case 'independence': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors we want to check for linear independence.'
          });
          vectors.forEach((v, i) => {
            stepList.push({
              step: `v${i+1} = ${formatVector(v)}`,
              explanation: `Vector ${i+1} with ${v.length} components.`
            });
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          stepList.push({
            step: '📝 Checking Linear Independence',
            explanation: 'A set of vectors is linearly independent if the only solution to c₁v₁ + ... + cₙvₙ = 0 is all coefficients zero.'
          });
          stepList.push({
            step: 'c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0',
            explanation: 'Linear independence means no vector can be expressed as a combination of others.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps } = gaussianElimination(matrix);
          stepList.push(...gaussSteps);

          const independent = rank === vectors.length;
          
          stepList.push({
            step: `📌 Rank = ${rank}`,
            explanation: `The rank of the vector set is ${rank}.`
          });
          stepList.push({
            step: `Number of vectors = ${vectors.length}`,
            explanation: `There are ${vectors.length} vectors in the set.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          if (independent) {
            stepList.push({
              step: '✅ The vectors are linearly independent!',
              explanation: 'No vector is redundant.'
            });
            stepList.push({
              step: `Since the rank (${rank}) equals the number of vectors (${vectors.length})`,
              explanation: 'All vectors contribute new directions.'
            });
          } else {
            stepList.push({
              step: '❌ The vectors are linearly dependent!',
              explanation: 'At least one vector is redundant.'
            });
            stepList.push({
              step: `Since the rank (${rank}) is less than the number of vectors (${vectors.length})`,
              explanation: 'Some vectors can be expressed as combinations of others.'
            });
          }

          resultValue = independent ? '✅ The vectors are linearly independent' : '❌ The vectors are linearly dependent';
          break;
        }

        default:
          throw new Error('Operation not supported');
      }

      setResult(resultValue);
      setSteps(stepList);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    }
  };

  const addVector = () => {
    const dim = vectors[0]?.length || 3;
    setVectors([...vectors, Array(dim).fill(0)]);
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeVector = () => {
    if (vectors.length > 1) {
      setVectors(vectors.slice(0, -1));
      setResult('');
      setSteps([]);
      setError('');
    }
  };

  const addDimension = () => {
    const newVectors = vectors.map(v => [...v, 0]);
    setVectors(newVectors);
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeDimension = () => {
    if (vectors[0]?.length > 1) {
      const newVectors = vectors.map(v => v.slice(0, -1));
      setVectors(newVectors);
      setResult('');
      setSteps([]);
      setError('');
    }
  };

  const updateVector = (vecIndex: number, compIndex: number, value: string) => {
    const newVectors = [...vectors];
    const numValue = parseFloat(value);
    newVectors[vecIndex][compIndex] = isNaN(numValue) ? 0 : numValue;
    setVectors(newVectors);
    setResult('');
    setSteps([]);
    setError('');
  };

  const resetVectors = () => {
    setVectors([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);
    setOperation('basis');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newVectors: number[][];
    switch (example) {
      case 'standard': newVectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; break;
      case 'dependent': newVectors = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]; break;
      case 'spanning': newVectors = [[1, 0, 0], [0, 1, 0], [1, 1, 0]]; break;
      case 'not_spanning': newVectors = [[1, 0, 0], [0, 1, 0]]; break;
      case '2D': newVectors = [[1, 0], [0, 1]]; break;
      case '4vectors': newVectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 1]]; break;
      default: newVectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }
    setVectors(newVectors);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'basis': 'Find a basis for the span of the vectors',
      'dimension': 'Find the dimension of the span',
      'span': 'Check if the vectors span the entire space',
      'independence': 'Check if the vectors are linearly independent'
    };
    return descriptions[op] || '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-[#7B1824]/20 bg-gradient-to-r from-[#7B1824]/10 via-[#7B1824]/5 to-transparent p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#7B1824] text-white flex items-center justify-center shadow-sm shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
              Basis & Vector Space Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Find basis, dimension, check spanning and independence of vector sets with step-by-step explanations
            </p>
          </div>
        </div>
      </div>

      {/* Main Controls Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-5">
        {/* Operation Selection */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-xs sm:text-sm font-bold text-gray-700">Operation:</label>
          <select
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value as Operation);
              setResult('');
              setSteps([]);
              setError('');
            }}
            className="px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-xs sm:text-sm font-semibold text-gray-800 bg-white transition shadow-2xs"
          >
            <option value="basis">Find Basis</option>
            <option value="dimension">Dimension</option>
            <option value="span">Span Check</option>
            <option value="independence">Independence Check</option>
          </select>
          <span className="text-xs text-gray-500 font-medium">{getOperationDescription(operation)}</span>
        </div>

        {/* Quick Examples */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Presets & Examples:</span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'standard', label: 'Standard Basis' },
              { id: 'dependent', label: 'Dependent' },
              { id: 'spanning', label: 'Spanning' },
              { id: 'not_spanning', label: 'Not Spanning' },
              { id: '2D', label: '2D' },
              { id: '4vectors', label: '4 Vectors' }
            ].map(ex => (
              <button
                key={ex.id}
                onClick={() => loadExample(ex.id)}
                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:border-[#7B1824]/30 hover:bg-[#FDF2F4] text-xs font-semibold text-gray-700 transition shadow-2xs"
              >
                {ex.label}
              </button>
            ))}
            <button
              onClick={resetVectors}
              className="px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-semibold text-gray-600 transition shadow-2xs"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Vector Input */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Vectors ({vectors.length} vectors, {vectors[0]?.length || 0}D)
            </h4>
            <div className="flex gap-2">
              <button
                onClick={addVector}
                className="px-3 py-1.5 bg-[#7B1824] hover:bg-[#60101B] text-white text-xs font-semibold rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Vector
              </button>
              <button
                onClick={removeVector}
                disabled={vectors.length <= 1}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition inline-flex items-center gap-1.5 ${
                  vectors.length > 1
                    ? 'border border-red-200 bg-red-50 hover:bg-red-100 text-red-700'
                    : 'border border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Remove Vector
              </button>
            </div>
          </div>

          <div className="overflow-x-auto p-1">
            <table className="border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600">Vector</th>
                  {vectors[0]?.map((_, j) => (
                    <th key={j} className="border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600">
                      Dim {j + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {vectors.map((vec, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition">
                    <td className="border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-700 text-center bg-[#FDF2F4]/40">
                      v{i + 1}
                    </td>
                    {vec.map((val, j) => (
                      <td key={j} className="border border-gray-200 p-1.5">
                        <input
                          type="number"
                          value={val}
                          onChange={(e) => updateVector(i, j, e.target.value)}
                          className="w-16 sm:w-18 px-2 py-1 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          step="any"
                          placeholder="0"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2">
            <span className="text-gray-500 font-medium">{vectors.length} vectors, {vectors[0]?.length || 0} Dimensions</span>
            <div className="flex gap-2">
              <button
                onClick={addDimension}
                className="px-3 py-1 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold transition shadow-2xs"
              >
                + Add Dimension
              </button>
              <button
                onClick={removeDimension}
                disabled={vectors[0]?.length <= 1}
                className={`px-3 py-1 rounded-xl border font-semibold transition shadow-2xs ${
                  vectors[0]?.length > 1
                    ? 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                    : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                - Remove Dimension
              </button>
            </div>
          </div>
        </div>

        {/* Calculate Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
          <button
            onClick={performOperation}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7B1824] hover:bg-[#60101B] text-white font-bold rounded-xl shadow-md shadow-[#7B1824]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Calculate
          </button>
          {steps.length > 0 && (
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {showSteps ? 'Hide' : 'Show'} Steps ({steps.length})
            </button>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">{error}</span>
        </div>
      )}

      {/* Result Card */}
      {result && (
        <div className="rounded-2xl border border-[#7B1824]/30 bg-gradient-to-br from-[#FFF8F9] to-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#7B1824] bg-[#FDF2F4] px-2.5 py-1 rounded-md border border-[#F0D5D8]">
                {operation.toUpperCase()} RESULT
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">Basis Analysis</h4>
            </div>
            <PDFExport
              title={`Basis & Vector Space - ${operation.toUpperCase()}`}
              data={result}
              steps={steps}
              inputs={`Vectors:\n${vectors.map((v, i) => `v${i+1} = [${v.join(', ')}]`).join('\n')}\nSelected Operation: ${operation}`}
              fileName={`basis_${operation}_result`}
            />
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-base sm:text-lg font-bold text-gray-900">
            {result}
          </div>
        </div>
      )}

      {/* Steps Breakdown */}
      {showSteps && steps.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
              Step-by-Step Breakdown
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FDF2F4] text-[#7B1824] border border-[#F0D5D8]">
              {operation.toUpperCase()}
            </span>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {steps.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 font-mono text-xs sm:text-sm font-semibold text-gray-900 whitespace-pre-wrap">
                    {item.step || 'Details:'}
                  </div>
                </div>
                {item.explanation && (
                  <div className="ml-7.5 p-3 rounded-lg bg-white border border-[#F0D5D8] text-xs text-gray-700 font-medium">
                    {item.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Operations Info Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs space-y-3">
        <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#7B1824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Supported Operations & Vector Space Rules
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          {['Find Basis', 'Dimension', 'Span Check', 'Independence Check'].map((op, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-semibold text-gray-700 text-center">
              {op}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed pt-1">
          Add or remove vectors to change the set. Add or remove dimensions to change the vector space.
          The calculator applies Gaussian elimination to find the basis and determine fundamental vector space properties.
        </p>
      </div>
    </div>
  );
};

export default BasisCalculator;