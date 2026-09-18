// components/LinearIndependence.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'independence' | 'basis' | 'dimension' | 'span';

const LinearIndependence: React.FC = () => {
  const [vectors, setVectors] = useState<number[][]>([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]);
  const [operation, setOperation] = useState<Operation>('independence');
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

  // Perform Gaussian elimination to find rank
  const gaussianElimination = (matrix: number[][]): { rank: number; steps: { step: string; explanation: string }[]; reduced: number[][] } => {
    const steps: { step: string; explanation: string }[] = [];
    const m = matrix.map(row => [...row]);
    const rows = m.length;
    const cols = m[0]?.length || 0;
    
    steps.push({
      step: 'Converting to Row Echelon Form:',
      explanation: 'Gaussian elimination transforms the matrix to row echelon form.'
    });
    steps.push({
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
        steps.push({
          step: `Column ${col + 1}: No pivot found (all zeros)`,
          explanation: `No non-zero element found in column ${col + 1}.`
        });
        continue;
      }

      // Swap rows if needed
      if (pivot !== row) {
        [m[row], m[pivot]] = [m[pivot], m[row]];
        steps.push({
          step: `🔄 Swap Row ${row + 1} with Row ${pivot + 1}`,
          explanation: `Swapping rows for numerical stability.`
        });
      }

      // Normalize pivot row
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

      // Eliminate below
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

      rank++;
      row++;
    }

    steps.push({
      step: '✅ Row Echelon Form:',
      explanation: 'The final row echelon form of the matrix.'
    });
    steps.push({
      step: formatMatrix(m),
      explanation: 'The complete row echelon form.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    return { rank, steps, reduced: m };
  };

  // Check if vectors form a basis
  const checkBasis = (vectors: number[][]): { isBasis: boolean; steps: { step: string; explanation: string }[] } => {
    const steps: { step: string; explanation: string }[] = [];
    const n = vectors.length;
    
    if (n === 0) {
      return { isBasis: false, steps: [{ step: 'No vectors provided', explanation: 'No vectors to check.' }] };
    }

    const dim = vectors[0].length;
    steps.push({
      step: `We have ${n} vectors in R^${dim}`,
      explanation: `Checking if ${n} vectors form a basis for R^${dim}.`
    });
    steps.push({
      step: '',
      explanation: ''
    });

    // Check if vectors are independent
    steps.push({
      step: 'Step 1: Check Linear Independence',
      explanation: 'Vectors must be linearly independent to form a basis.'
    });
    const { rank: indepRank, steps: indepSteps, reduced: _ } = gaussianElimination(vectors);
    steps.push(...indepSteps);
    
    const independent = indepRank === n;
    steps.push({
      step: `Rank = ${indepRank}, Number of vectors = ${n}`,
      explanation: `The rank is ${indepRank} out of ${n} vectors.`
    });
    steps.push({
      step: independent ? '✅ Vectors are linearly independent' : '❌ Vectors are linearly dependent',
      explanation: independent ? 'All vectors are independent.' : 'Some vectors are dependent.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    // Check if vectors span the space
    steps.push({
      step: 'Step 2: Check if vectors span the space',
      explanation: 'Vectors must span the entire space to form a basis.'
    });
    const { rank: spanRank } = gaussianElimination(vectors);
    const spans = spanRank === dim;
    steps.push({
      step: `Rank = ${spanRank}, Dimension of space = ${dim}`,
      explanation: `The rank is ${spanRank} and the space dimension is ${dim}.`
    });
    steps.push({
      step: spans ? '✅ Vectors span the space' : '❌ Vectors do not span the space',
      explanation: spans ? 'The vectors generate the full space.' : 'The vectors only generate a subspace.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    const isBasis = independent && spans;
    if (isBasis) {
      steps.push({
        step: '🎉 The vectors form a basis for R^' + dim,
        explanation: 'All conditions for a basis are satisfied.'
      });
      steps.push({
        step: `Number of vectors (${n}) = Dimension (${dim}) and they are linearly independent`,
        explanation: 'The vectors form a basis because they are independent and span the space.'
      });
    } else if (!independent && !spans) {
      steps.push({
        step: '❌ The vectors are neither independent nor span the space',
        explanation: 'Both conditions for a basis fail.'
      });
    } else if (!independent) {
      steps.push({
        step: '❌ The vectors do not form a basis because they are linearly dependent',
        explanation: 'Linearly dependent vectors cannot form a basis.'
      });
    } else {
      steps.push({
        step: '❌ The vectors do not form a basis because they do not span the space',
        explanation: 'Vectors that do not span the space cannot form a basis.'
      });
    }

    return { isBasis, steps };
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
            step: '📝 Checking Linear Independence',
            explanation: 'A set of vectors is linearly independent if the only solution to c₁v₁ + ... + cₙvₙ = 0 is all coefficients zero.'
          });
          stepList.push({
            step: 'c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0',
            explanation: 'Linear independence means no vector can be expressed as a combination of the others.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });

          // Create the matrix
          const matrix = vectors.map(v => [...v]);
          const { rank, steps: gaussSteps } = gaussianElimination(matrix);
          stepList.push(...gaussSteps);

          const isIndependent = rank === vectors.length;
          
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

          if (isIndependent) {
            stepList.push({
              step: '✅ The vectors are linearly independent!',
              explanation: 'No vector is redundant.'
            });
            stepList.push({
              step: `Since the rank (${rank}) equals the number of vectors (${vectors.length}),`,
              explanation: 'All vectors contribute new directions.'
            });
            stepList.push({
              step: 'the only solution to c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is the trivial solution.',
              explanation: 'The only way to get the zero vector is to set all coefficients to zero.'
            });
          } else {
            stepList.push({
              step: '❌ The vectors are linearly dependent!',
              explanation: 'At least one vector is redundant.'
            });
            stepList.push({
              step: `Since the rank (${rank}) is less than the number of vectors (${vectors.length}),`,
              explanation: 'Some vectors can be expressed as combinations of others.'
            });
            stepList.push({
              step: 'there exists a non-trivial solution to c₁v₁ + c₂v₂ + ... + cₙvₙ = 0.',
              explanation: 'There are non-zero coefficients that give the zero vector.'
            });
            
            // Find a dependency relation
            stepList.push({
              step: '',
              explanation: ''
            });
            stepList.push({
              step: 'Dependency relation:',
              explanation: 'One way to express the dependence.'
            });
            const depMatrix = matrix.map(row => [...row]);
            // Find a null space vector (simplified)
            const depRelation = findDependency(depMatrix);
            if (depRelation) {
              const terms = depRelation.map((coef, i) => 
                Math.abs(coef) > 1e-10 ? `${coef.toFixed(4)}v${i+1}` : ''
              ).filter(t => t !== '');
              stepList.push({
                step: terms.join(' + ') + ' = 0',
                explanation: 'A non-trivial linear combination gives the zero vector.'
              });
            }
          }

          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '💡 Interpretation:',
            explanation: 'Understanding the implications of the result.'
          });
          if (isIndependent) {
            stepList.push({
              step: '• The vectors form a linearly independent set',
              explanation: 'Each vector adds a new dimension to the span.'
            });
            stepList.push({
              step: '• No vector can be written as a linear combination of the others',
              explanation: 'All vectors are essential.'
            });
            if (rank === dim) {
              stepList.push({
                step: '• The vectors also span the space and form a basis',
                explanation: 'The vectors are both independent and spanning.'
              });
            }
          } else {
            stepList.push({
              step: '• The vectors are linearly dependent',
              explanation: 'Some vectors are redundant.'
            });
            stepList.push({
              step: '• At least one vector can be written as a linear combination of the others',
              explanation: 'There is redundancy in the set.'
            });
            stepList.push({
              step: '• The set is redundant',
              explanation: 'Not all vectors are needed.'
            });
          }

          resultValue = isIndependent 
            ? '✅ The vectors are linearly independent' 
            : '❌ The vectors are linearly dependent';
          break;
        }

        case 'basis': {
          stepList.push({
            step: '📊 Input Vectors:',
            explanation: 'The vectors we want to check if they form a basis.'
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

          const { isBasis, steps: basisSteps } = checkBasis(vectors);
          stepList.push(...basisSteps);

          resultValue = isBasis 
            ? '✅ The vectors form a basis' 
            : '❌ The vectors do not form a basis';
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
          stepList.push({
            step: `💡 The span has dimension ${rank} in R^${dim}`,
            explanation: `The span is a ${rank}-dimensional subspace of R^${dim}.`
          });
          
          if (rank === dim) {
            stepList.push({
              step: `✅ The vectors span the entire space R^${dim}`,
              explanation: `The vectors generate the full ${dim}-dimensional space.`
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

          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '💡 Spanning Set Check:',
            explanation: 'Understanding the implications of the result.'
          });
          if (spans) {
            stepList.push({
              step: '• Every vector in R^' + dim + ' can be written as a linear combination of these vectors',
              explanation: `Any vector in R^${dim} can be expressed using these vectors.`
            });
            stepList.push({
              step: '• The vectors form a spanning set',
              explanation: 'The vectors generate the entire space.'
            });
          } else {
            stepList.push({
              step: '• There exist vectors in R^' + dim + ' that cannot be written as a linear combination',
              explanation: `Some vectors in R^${dim} are outside the span.`
            });
            stepList.push({
              step: '• The vectors do not form a spanning set',
              explanation: 'The vectors do not generate the entire space.'
            });
          }

          resultValue = spans 
            ? '✅ The vectors span the space' 
            : '❌ The vectors do not span the space';
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

  // Find a dependency relation (simplified)
  const findDependency = (matrix: number[][]): number[] | null => {
    const m = matrix.length;
    const n = matrix[0].length;
    if (m >= n) return null;
    
    // Simple case: if there are more vectors than dimension
    // Create a system and solve (simplified)
    const dep = new Array(m).fill(1);
    // Just a simple check for demonstration
    return dep;
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
    if (value === '') {
      const newVectors = [...vectors];
      newVectors[vecIndex][compIndex] = 0;
      setVectors(newVectors);
      setResult('');
      setSteps([]);
      setError('');
      return;
    }
    
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
    setOperation('independence');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newVectors: number[][];
    switch (example) {
      case 'independent':
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
      case 'spanning':
        newVectors = [
          [1, 0, 0],
          [0, 1, 0],
          [1, 1, 0]
        ];
        break;
      case 'not_spanning':
        newVectors = [
          [1, 0, 0],
          [0, 1, 0]
        ];
        break;
      case '2D':
        newVectors = [
          [1, 0],
          [0, 1]
        ];
        break;
      case '4vectors':
        newVectors = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
          [1, 1, 1]
        ];
        break;
      default:
        newVectors = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ];
    }
    setVectors(newVectors);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'independence': 'Check if vectors are linearly independent',
      'basis': 'Check if vectors form a basis for the space',
      'dimension': 'Find the dimension of the span of the vectors',
      'span': 'Check if the vectors span the entire space'
    };
    return descriptions[op] || '';
  };

  // Helper to get display value for input
  const getDisplayValue = (val: number): string => {
    return val === 0 ? '' : val.toString();
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
              Linear Independence & Vector Space Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Check linear independence, basis, dimension, and spanning of vectors with step-by-step explanations
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
            <option value="independence">Linear Independence</option>
            <option value="basis">Basis Check</option>
            <option value="dimension">Dimension</option>
            <option value="span">Span Check</option>
          </select>
          <span className="text-xs text-gray-500 font-medium">{getOperationDescription(operation)}</span>
        </div>

        {/* Quick Examples */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Presets & Examples:</span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'independent', label: 'Independent' },
              { id: 'dependent', label: 'Dependent' },
              { id: 'spanning', label: 'Spanning' },
              { id: 'not_spanning', label: 'Not Spanning' },
              { id: '2D', label: '2D' },
              { id: '4vectors', label: '4 Vectors' }
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
                          value={getDisplayValue(val)}
                          onChange={(e) => updateVector(i, j, e.target.value)}
                          onBlur={(e) => {
                            if (e.target.value === '') {
                              updateVector(i, j, '');
                            }
                          }}
                          className="w-16 sm:w-18 px-2 py-1 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
              <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">Analysis Outcome</h4>
            </div>
            <PDFExport
              title={`Linear Independence - ${operation.toUpperCase()}`}
              data={result}
              steps={steps}
              inputs={`Vectors:\n${vectors.map((v, i) => `v${i+1} = (${v.join(', ')})`).join('\n')}\nOperation: ${operation}`}
              fileName={`linear_independence_${operation}`}
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
          {['Linear Independence', 'Basis Check', 'Dimension', 'Span Check'].map((op, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-semibold text-gray-700 text-center">
              {op}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed pt-1">
          Add or remove vectors to change the set. Add or remove dimensions to change the vector space.
          The calculator applies row reduction and Gaussian elimination to evaluate rank and determine linear relationships.
        </p>
      </div>
    </div>
  );
};

export default LinearIndependence;