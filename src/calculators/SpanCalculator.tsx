// components/SpanCalculator.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'span' | 'basis' | 'dimension' | 'independence';

const SpanCalculator: React.FC = () => {
  const [vectors, setVectors] = useState<number[][]>([
    [1, 0, 0],
    [0, 1, 0]
  ]);
  const [operation, setOperation] = useState<Operation>('span');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  // Format vector for display
  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  // Format matrix for display
  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n');
  };

  // Check if a row is zero
  const isZeroRow = (row: number[]): boolean => {
    return row.every(val => Math.abs(val) < 1e-10);
  };

  // Perform Gaussian elimination to find row echelon form
  const gaussianElimination = (matrix: number[][]): { 
    rank: number; 
    steps: string[]; 
    stepExplanations: string[];
    reduced: number[][];
    pivotColumns: number[];
    basisIndices: number[];
  } => {
    const steps: string[] = [];
    const stepExplanations: string[] = [];
    const m = matrix.map(row => [...row]);
    const rows = m.length;
    const cols = m[0]?.length || 0;
    
    steps.push('Converting to Row Echelon Form:');
    stepExplanations.push('Gaussian elimination transforms the matrix to row echelon form.');
    steps.push(formatMatrix(m));
    stepExplanations.push('The initial matrix of vectors as rows.');
    steps.push('');
    stepExplanations.push('');

    let rank = 0;
    let row = 0;
    const pivotColumns: number[] = [];
    const basisIndices: number[] = [];

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
        steps.push(`Column ${col + 1}: No pivot found (all zeros)`);
        stepExplanations.push(`No non-zero element found in column ${col + 1} below the current row.`);
        continue;
      }

      // Swap rows if needed
      if (pivot !== row) {
        [m[row], m[pivot]] = [m[pivot], m[row]];
        steps.push(`🔄 Swap Row ${row + 1} with Row ${pivot + 1}`);
        stepExplanations.push(`Swapping rows to get a non-zero pivot in column ${col + 1}.`);
        steps.push(formatMatrix(m));
        stepExplanations.push('The matrix after swapping rows.');
        steps.push('');
        stepExplanations.push('');
      }

      // Normalize pivot row
      const pivotVal = m[row][col];
      for (let j = col; j < cols; j++) {
        m[row][j] /= pivotVal;
      }
      steps.push(`➗ Normalize Row ${row + 1}`);
      stepExplanations.push(`Dividing the pivot row by ${pivotVal.toFixed(4)} to make the pivot 1.`);
      steps.push(formatMatrix(m));
      stepExplanations.push('The matrix after normalizing the pivot row.');
      steps.push('');
      stepExplanations.push('');

      // Eliminate below
      let eliminated = false;
      for (let i = row + 1; i < rows; i++) {
        const factor = m[i][col];
        if (Math.abs(factor) > 1e-10) {
          for (let j = col; j < cols; j++) {
            m[i][j] -= factor * m[row][j];
          }
          eliminated = true;
          steps.push(`➖ Row ${i + 1} = Row ${i + 1} - ${factor.toFixed(4)} × Row ${row + 1}`);
          stepExplanations.push(`Eliminating element in row ${i+1}, column ${col+1} using the pivot.`);
        }
      }
      if (eliminated) {
        steps.push(formatMatrix(m));
        stepExplanations.push('The matrix after eliminating below the pivot.');
        steps.push('');
        stepExplanations.push('');
      }

      // Eliminate above (for reduced row echelon form)
      for (let i = 0; i < row; i++) {
        const factor = m[i][col];
        if (Math.abs(factor) > 1e-10) {
          for (let j = col; j < cols; j++) {
            m[i][j] -= factor * m[row][j];
          }
          steps.push(`➖ Row ${i + 1} = Row ${i + 1} - ${factor.toFixed(4)} × Row ${row + 1}`);
          stepExplanations.push(`Eliminating above the pivot in row ${i+1}.`);
        }
      }

      pivotColumns.push(col);
      basisIndices.push(row);
      rank++;
      row++;
    }

    steps.push('✅ Row Reduced Echelon Form:');
    stepExplanations.push('The final reduced row echelon form of the matrix.');
    steps.push(formatMatrix(m));
    stepExplanations.push('The matrix in reduced row echelon form.');
    steps.push('');
    stepExplanations.push('');

    // Count zero rows
    let zeroRows = 0;
    for (let i = 0; i < rows; i++) {
      if (isZeroRow(m[i])) {
        zeroRows++;
      }
    }
    if (zeroRows > 0) {
      steps.push(`Found ${zeroRows} zero row(s)`);
      stepExplanations.push('Zero rows indicate linear dependence among the vectors.');
      steps.push('');
      stepExplanations.push('');
    }

    return { rank, steps, stepExplanations, reduced: m, pivotColumns, basisIndices };
  };

  // Check if vectors span the space
  const checkSpan = (vectors: number[][], dim: number): { spans: boolean; rank: number; steps: string[]; stepExplanations: string[] } => {
    const steps: string[] = [];
    const stepExplanations: string[] = [];
    const matrix = vectors.map(v => [...v]);
    const { rank, steps: gaussSteps, stepExplanations: gaussExplanations } = gaussianElimination(matrix);
    steps.push(...gaussSteps);
    stepExplanations.push(...gaussExplanations);
    
    const spans = rank === dim;
    return { spans, rank, steps, stepExplanations };
  };

  const performOperation = () => {
    setError('');
    setResult('');
    setSteps([]);

    try {
      // Validate vectors
      if (vectors.length === 0) {
        setError('Please add at least one vector');
        return;
      }

      const dim = vectors[0].length;
      
      // Check if all vectors have the same dimension
      for (let i = 1; i < vectors.length; i++) {
        if (vectors[i].length !== dim) {
          setError(`All vectors must have the same dimension. Vector ${i+1} has ${vectors[i].length}D but expected ${dim}D`);
          return;
        }
      }

      const stepList: { step: string; explanation: string }[] = [];
      let resultValue = '';

      switch (operation) {
        case 'span': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors whose span we want to find.'
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
            step: `Dimension of space: ${dim}D`,
            explanation: `The vectors live in a ${dim}-dimensional space.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          stepList.push({
            step: '📝 Checking if the vectors span the space',
            explanation: 'Vectors span the space if their rank equals the dimension of the space.'
          });
          stepList.push({
            step: 'Vectors span the space if their rank equals the dimension of the space',
            explanation: 'The rank is the number of linearly independent vectors in the set.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps, stepExplanations: gaussExplanations } = gaussianElimination(matrix);
          gaussSteps.forEach((step, idx) => {
            stepList.push({
              step: step,
              explanation: gaussExplanations[idx] || ''
            });
          });

          const spans = rank === dim;
          
          stepList.push({
            step: `📌 Rank = ${rank}`,
            explanation: `The rank of the vector set is ${rank}.`
          });
          stepList.push({
            step: `Dimension = ${dim}`,
            explanation: `The space has dimension ${dim}.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          // Find the span description
          stepList.push({
            step: '📐 Span Description:',
            explanation: 'Describing the subspace spanned by the vectors.'
          });
          if (spans) {
            stepList.push({
              step: `✅ The vectors span the entire space R^${dim}`,
              explanation: `The vectors generate the full ${dim}-dimensional space.`
            });
            stepList.push({
              step: `The span is the full ${dim}-dimensional space`,
              explanation: `Every vector in R^${dim} can be expressed as a linear combination of these vectors.`
            });
          } else {
            stepList.push({
              step: `⚠️ The vectors span a ${rank}-dimensional subspace of R^${dim}`,
              explanation: `The vectors generate a ${rank}-dimensional subspace, not the full space.`
            });
            stepList.push({
              step: `The span has ${dim - rank} fewer dimensions than the full space`,
              explanation: `The subspace is missing ${dim - rank} dimensions from the full space.`
            });
            
            // Describe the subspace
            stepList.push({
              step: '',
              explanation: ''
            });
            stepList.push({
              step: '📐 Subspace Description:',
              explanation: 'Visualizing the subspace.'
            });
            if (rank === 0) {
              stepList.push({
                step: 'The span is the zero vector space (dimension 0)',
                explanation: 'All vectors are zero.'
              });
            } else if (rank === 1) {
              stepList.push({
                step: 'The span is a line through the origin',
                explanation: 'All vectors lie on a single line passing through the origin.'
              });
            } else if (rank === 2) {
              stepList.push({
                step: 'The span is a plane through the origin',
                explanation: 'All vectors lie on a plane passing through the origin.'
              });
            } else if (rank === 3) {
              stepList.push({
                step: 'The span is a 3-dimensional subspace (hyperplane)',
                explanation: 'The vectors span a 3-dimensional subspace.'
              });
            } else {
              stepList.push({
                step: `The span is a ${rank}-dimensional subspace`,
                explanation: `The vectors span a ${rank}-dimensional subspace.`
              });
            }
          }

          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '💡 What this means:',
            explanation: 'Understanding the implications of the span.'
          });
          if (spans) {
            stepList.push({
              step: '• Every vector in R^' + dim + ' can be written as a linear combination of the given vectors',
              explanation: `Any vector in R^${dim} can be expressed using these vectors.`
            });
            stepList.push({
              step: '• The vectors form a spanning set for the entire space',
              explanation: `The vectors are a spanning set for R^${dim}.`
            });
          } else {
            stepList.push({
              step: '• Only vectors in the ' + rank + '-dimensional subspace can be written as linear combinations',
              explanation: `Only vectors in the ${rank}-dimensional subspace can be represented.`
            });
            stepList.push({
              step: '• There exist vectors in R^' + dim + ' that cannot be represented',
              explanation: `Some vectors in R^${dim} are outside the span.`
            });
          }

          resultValue = spans 
            ? `✅ The vectors span R^${dim} (dimension ${rank})` 
            : `⚠️ The vectors span a ${rank}-dimensional subspace of R^${dim}`;
          break;
        }

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
            step: '📝 Finding a Basis for the Span',
            explanation: 'A basis is a set of linearly independent vectors that span the space.'
          });
          stepList.push({
            step: 'A basis is a set of linearly independent vectors that span the space.',
            explanation: 'The basis vectors are linearly independent and generate the entire span.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps, stepExplanations: gaussExplanations, basisIndices } = gaussianElimination(matrix);
          gaussSteps.forEach((step, idx) => {
            stepList.push({
              step: step,
              explanation: gaussExplanations[idx] || ''
            });
          });

          // Extract basis vectors
          const basisVectors = basisIndices.map(idx => vectors[idx]);
          
          stepList.push({
            step: `📌 Rank = ${rank}`,
            explanation: `The rank of the vector set is ${rank}.`
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
              step: `⚠️ The vectors form a basis for a ${rank}-dimensional subspace of R^${dim}`,
              explanation: `The basis spans a ${rank}-dimensional subspace, not the full space.`
            });
            stepList.push({
              step: `Number of basis vectors (${rank}) < Dimension (${dim})`,
              explanation: `The basis has ${rank} vectors, less than the dimension.`
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
          const { rank, steps: gaussSteps, stepExplanations: gaussExplanations } = gaussianElimination(matrix);
          gaussSteps.forEach((step, idx) => {
            stepList.push({
              step: step,
              explanation: gaussExplanations[idx] || ''
            });
          });

          stepList.push({
            step: `📌 Dimension = Rank = ${rank}`,
            explanation: `The dimension of the span is ${rank}.`
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          stepList.push({
            step: '📐 Subspace Description:',
            explanation: 'Visualizing the subspace based on its dimension.'
          });
          if (rank === 0) {
            stepList.push({
              step: 'The span is the zero vector space',
              explanation: 'The span contains only the zero vector.'
            });
          } else if (rank === 1) {
            stepList.push({
              step: 'The span is a line through the origin',
              explanation: 'All vectors lie on a single line.'
            });
          } else if (rank === 2) {
            stepList.push({
              step: 'The span is a plane through the origin',
              explanation: 'All vectors lie on a plane.'
            });
          } else if (rank === 3) {
            stepList.push({
              step: 'The span is a 3-dimensional subspace',
              explanation: 'The vectors span a 3D subspace.'
            });
          } else {
            stepList.push({
              step: `The span is a ${rank}-dimensional subspace`,
              explanation: `The vectors span a ${rank}-dimensional subspace.`
            });
          }
          
          if (rank === dim) {
            stepList.push({
              step: `✅ The span is the entire space R^${dim}`,
              explanation: `The vectors generate the full ${dim}-dimensional space.`
            });
          } else {
            stepList.push({
              step: `⚠️ The span is a proper subspace of R^${dim} (${dim - rank} dimensions less)`,
              explanation: `The span is a proper subspace missing ${dim - rank} dimensions.`
            });
          }

          resultValue = `Dimension of span = ${rank}`;
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
          const { rank, steps: gaussSteps, stepExplanations: gaussExplanations } = gaussianElimination(matrix);
          gaussSteps.forEach((step, idx) => {
            stepList.push({
              step: step,
              explanation: gaussExplanations[idx] || ''
            });
          });

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
              explanation: 'No vector can be written as a linear combination of the others.'
            });
            stepList.push({
              step: `Since the rank (${rank}) equals the number of vectors (${vectors.length})`,
              explanation: `The rank equals the number of vectors, meaning they are all independent.`
            });
            stepList.push({
              step: 'No vector can be written as a linear combination of the others',
              explanation: 'Each vector adds a new dimension to the span.'
            });
          } else {
            stepList.push({
              step: '❌ The vectors are linearly dependent!',
              explanation: 'At least one vector can be written as a combination of the others.'
            });
            stepList.push({
              step: `Since the rank (${rank}) is less than the number of vectors (${vectors.length})`,
              explanation: `The rank is less than the number of vectors, indicating dependence.`
            });
            stepList.push({
              step: `There is a redundancy of ${vectors.length - rank} vector(s)`,
              explanation: `${vectors.length - rank} vectors are redundant in the set.`
            });
          }

          resultValue = independent 
            ? '✅ The vectors are linearly independent' 
            : '❌ The vectors are linearly dependent';
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
      [0, 1, 0]
    ]);
    setOperation('span');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newVectors: number[][];
    switch (example) {
      case 'line':
        newVectors = [
          [1, 0, 0]
        ];
        break;
      case 'plane':
        newVectors = [
          [1, 0, 0],
          [0, 1, 0]
        ];
        break;
      case 'space':
        newVectors = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ];
        break;
      case 'dependent':
        newVectors = [
          [1, 2, 3],
          [2, 4, 6],
          [3, 6, 9]
        ];
        break;
      case '2D_line':
        newVectors = [
          [1, 2]
        ];
        break;
      case '2D_plane':
        newVectors = [
          [1, 0],
          [0, 1]
        ];
        break;
      default:
        newVectors = [
          [1, 0, 0],
          [0, 1, 0]
        ];
    }
    setVectors(newVectors);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'span': 'Find the span and dimension of the vector set',
      'basis': 'Find a basis for the span of the vectors',
      'dimension': 'Find the dimension of the span',
      'independence': 'Check if the vectors are linearly independent'
    };
    return descriptions[op] || '';
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
              Span & Subspace Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Find the span, basis, dimension, and check independence of vector sets with step-by-step explanations
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
            className="px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] outline-none text-xs sm:text-sm font-semibold text-gray-800 bg-white transition shadow-2xs"
          >
            <option value="span">Span & Dimension</option>
            <option value="basis">Find Basis</option>
            <option value="dimension">Dimension Only</option>
            <option value="independence">Independence Check</option>
          </select>
          <span className="text-xs text-gray-500 font-medium">{getOperationDescription(operation)}</span>
        </div>

        {/* Quick Examples */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Presets & Examples:</span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'line', label: 'Line (1D)' },
              { id: 'plane', label: 'Plane (2D)' },
              { id: 'space', label: 'Space (3D)' },
              { id: 'dependent', label: 'Dependent' },
              { id: '2D_line', label: '2D Line' },
              { id: '2D_plane', label: '2D Plane' }
            ].map(ex => (
              <button
                key={ex.id}
                onClick={() => loadExample(ex.id)}
                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:border-[#166534]/30 hover:bg-[#F0FDF4] text-xs font-semibold text-gray-700 transition shadow-2xs"
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
              <span className="w-2 h-2 rounded-full bg-[#166534]"></span>
              Vectors ({vectors.length} vectors, {vectors[0]?.length || 0}D)
            </h4>
            <div className="flex gap-2">
              <button
                onClick={addVector}
                className="px-3 py-1.5 bg-[#166534] hover:bg-[#14532D] text-white text-xs font-semibold rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
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
                    ? 'border border-green-200 bg-green-50 hover:bg-green-100 text-green-700'
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
                    <td className="border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-700 text-center bg-[#F0FDF4]/40">
                      v{i + 1}
                    </td>
                    {vec.map((val, j) => (
                      <td key={j} className="border border-gray-200 p-1.5">
                        <input
                          type="number"
                          value={val}
                          onChange={(e) => updateVector(i, j, e.target.value)}
                          className="w-16 sm:w-18 px-2 py-1 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#166534] hover:bg-[#14532D] text-white font-bold rounded-xl shadow-md shadow-[#166534]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
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
        <div className="p-4 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">{error}</span>
        </div>
      )}

      {/* Result Card */}
      {result && (
        <div className="rounded-2xl border border-[#166534]/30 bg-gradient-to-br from-[#F0FDF4] to-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#166534] bg-[#F0FDF4] px-2.5 py-1 rounded-md border border-[#F0D5D8]">
                {operation.toUpperCase()} RESULT
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">Span Analysis</h4>
            </div>
            <PDFExport
              title={`Vector Span & Subspace - ${operation.toUpperCase()}`}
              data={result}
              steps={steps}
              inputs={`Vectors:\n${vectors.map((v, i) => `v${i+1} = (${v.join(', ')})`).join('\n')}\nOperation: ${operation}`}
              fileName={`span_${operation}_result`}
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#166534]"></span>
              Step-by-Step Breakdown
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#166534] border border-[#F0D5D8]">
              {operation.toUpperCase()}
            </span>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {steps.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
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
          <svg className="w-4 h-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Supported Operations & Vector Space Rules
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          {['Span & Dimension', 'Find Basis', 'Dimension Only', 'Independence Check'].map((op, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-semibold text-gray-700 text-center">
              {op}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed pt-1">
          Add or remove vectors to change the set. Add or remove dimensions to change the vector space.
          The calculator uses Gaussian elimination to determine the span, basis, and subspace dimensions.
        </p>
      </div>
    </div>
  );
};

export default SpanCalculator;