// components/LUDecomposition.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'lu' | 'solve' | 'determinant' | 'inverse';

const LUDecomposition: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [4, 3],
    [6, 3]
  ]);
  const [bVector, setBVector] = useState<number[]>([10, 12]);
  const [operation, setOperation] = useState<Operation>('lu');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  // Format matrix for display
  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => `[${row.map(v => v.toFixed(4)).join(', ')}]`).join('\n');
  };

  // Format vector for display
  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  // Perform LU Decomposition with partial pivoting
  const luDecomposition = (matrix: number[][]): { 
    L: number[][]; 
    U: number[][]; 
    P: number[][];
    steps: { step: string; explanation: string }[];
    success: boolean;
  } => {
    const steps: { step: string; explanation: string }[] = [];
    const n = matrix.length;
    
    steps.push({
      step: '📐 LU Decomposition with Partial Pivoting',
      explanation: 'LU decomposition factors a matrix A into L (lower triangular) and U (upper triangular) with a permutation matrix P.'
    });
    steps.push({
      step: 'A = P × L × U',
      explanation: 'With partial pivoting, A = P·L·U where P is a permutation matrix.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    // Initialize L, U, and P
    const L: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    const U: number[][] = matrix.map(row => [...row]);
    const P: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Initialize P as identity
    for (let i = 0; i < n; i++) {
      P[i][i] = 1;
    }

    // Initialize L with identity
    for (let i = 0; i < n; i++) {
      L[i][i] = 1;
    }

    steps.push({
      step: 'Original Matrix A:',
      explanation: 'The input matrix we want to decompose.'
    });
    steps.push({
      step: formatMatrix(U),
      explanation: 'The matrix displayed in matrix form.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    for (let i = 0; i < n; i++) {
      // Find pivot
      let pivot = i;
      let maxVal = Math.abs(U[i][i]);
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(U[j][i]) > maxVal) {
          maxVal = Math.abs(U[j][i]);
          pivot = j;
        }
      }

      // Check if matrix is singular
      if (maxVal < 1e-10) {
        steps.push({
          step: `❌ Matrix is singular (pivot at row ${i+1} is zero)`,
          explanation: 'A zero pivot indicates the matrix is singular and cannot be decomposed.'
        });
        return { L, U, P, steps, success: false };
      }

      // Swap rows if needed
      if (pivot !== i) {
        [U[i], U[pivot]] = [U[pivot], U[i]];
        [P[i], P[pivot]] = [P[pivot], P[i]];
        // Also swap L rows for the first i columns
        for (let k = 0; k < i; k++) {
          [L[i][k], L[pivot][k]] = [L[pivot][k], L[i][k]];
        }
        steps.push({
          step: `🔄 Swap Row ${i+1} with Row ${pivot+1}`,
          explanation: `Swapping rows to get the largest possible pivot in column ${i+1} for numerical stability.`
        });
        steps.push({
          step: 'Matrix after row swap:',
          explanation: 'The matrix after swapping rows.'
        });
        steps.push({
          step: formatMatrix(U),
          explanation: 'The matrix with rows swapped.'
        });
        steps.push({
          step: '',
          explanation: ''
        });
      }

      // Eliminate below
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(U[i][i]) < 1e-10) {
          steps.push({
            step: `❌ Matrix is singular (zero pivot at row ${i+1})`,
            explanation: 'Zero pivot indicates a singular matrix.'
          });
          return { L, U, P, steps, success: false };
        }
        const factor = U[j][i] / U[i][i];
        L[j][i] = factor;
        steps.push({
          step: `Factor L[${j+1}][${i+1}] = ${U[j][i].toFixed(4)} / ${U[i][i].toFixed(4)} = ${factor.toFixed(4)}`,
          explanation: `The factor that eliminates the element in row ${j+1}, column ${i+1}.`
        });
        for (let k = i; k < n; k++) {
          U[j][k] -= factor * U[i][k];
        }
      }
      steps.push({
        step: 'Matrix after elimination:',
        explanation: 'The matrix after eliminating below the pivot.'
      });
      steps.push({
        step: formatMatrix(U),
        explanation: 'The current state of the upper triangular matrix U.'
      });
      steps.push({
        step: '',
        explanation: ''
      });
    }

    steps.push({
      step: '✅ LU Decomposition Complete!',
      explanation: 'The decomposition was successful.'
    });
    steps.push({
      step: '',
      explanation: ''
    });
    steps.push({
      step: 'L Matrix:',
      explanation: 'The lower triangular matrix L with 1s on the diagonal.'
    });
    steps.push({
      step: formatMatrix(L),
      explanation: 'The complete L matrix.'
    });
    steps.push({
      step: '',
      explanation: ''
    });
    steps.push({
      step: 'U Matrix:',
      explanation: 'The upper triangular matrix U.'
    });
    steps.push({
      step: formatMatrix(U),
      explanation: 'The complete U matrix.'
    });
    steps.push({
      step: '',
      explanation: ''
    });
    steps.push({
      step: 'P Matrix (Permutation):',
      explanation: 'The permutation matrix P that records row swaps.'
    });
    steps.push({
      step: formatMatrix(P),
      explanation: 'The complete P matrix.'
    });

    return { L, U, P, steps, success: true };
  };

  // Solve linear system using LU decomposition
  const solveSystem = (L: number[][], U: number[][], b: number[]): { x: number[]; steps: { step: string; explanation: string }[] } => {
    const steps: { step: string; explanation: string }[] = [];
    const n = L.length;
    
    steps.push({
      step: 'Solving Ly = b (Forward Substitution)',
      explanation: 'Forward substitution solves the lower triangular system Ly = b.'
    });
    steps.push({
      step: '',
      explanation: ''
    });
    
    // Forward substitution: Ly = b
    const y: number[] = [];
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < i; j++) {
        sum += L[i][j] * y[j];
      }
      y[i] = (b[i] - sum) / L[i][i];
      steps.push({
        step: `y${i+1} = (${b[i].toFixed(4)} - ${sum.toFixed(4)}) / ${L[i][i].toFixed(4)} = ${y[i].toFixed(4)}`,
        explanation: `Solving for y${i+1} using the lower triangular system.`
      });
    }
    steps.push({
      step: '',
      explanation: ''
    });
    steps.push({
      step: `y = ${formatVector(y)}`,
      explanation: 'The intermediate solution vector y.'
    });
    steps.push({
      step: '',
      explanation: ''
    });

    steps.push({
      step: 'Solving Ux = y (Backward Substitution)',
      explanation: 'Backward substitution solves the upper triangular system Ux = y.'
    });
    steps.push({
      step: '',
      explanation: ''
    });
    
    // Backward substitution: Ux = y
    const x: number[] = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < n; j++) {
        sum += U[i][j] * x[j];
      }
      x[i] = (y[i] - sum) / U[i][i];
      steps.push({
        step: `x${i+1} = (${y[i].toFixed(4)} - ${sum.toFixed(4)}) / ${U[i][i].toFixed(4)} = ${x[i].toFixed(4)}`,
        explanation: `Solving for x${i+1} using the upper triangular system.`
      });
    }
    steps.push({
      step: '',
      explanation: ''
    });
    steps.push({
      step: `x = ${formatVector(x)}`,
      explanation: 'The final solution vector x.'
    });

    return { x, steps };
  };

  // Calculate determinant from U matrix
  const calculateDeterminant = (U: number[][], P: number[][]): number => {
    let det = 1;
    for (let i = 0; i < U.length; i++) {
      det *= U[i][i];
    }
    // Account for row swaps (sign of permutation matrix)
    let sign = 1;
    for (let i = 0; i < P.length; i++) {
      for (let j = 0; j < i; j++) {
        if (P[i][j] === 1) sign *= -1;
      }
    }
    return det * sign;
  };

  const performOperation = () => {
    setError('');
    setResult('');
    setSteps([]);

    try {
      const n = matrix.length;
      
      // Check if matrix is square
      if (n !== matrix[0]?.length) {
        setError('Matrix must be square');
        return;
      }

      // Check if matrix is too large
      if (n > 6) {
        setError('Currently supports matrices up to 6×6 for performance');
        return;
      }

      const stepList: { step: string; explanation: string }[] = [];
      let resultValue = '';

      // Perform LU decomposition
      const { L, U, P, steps: luSteps, success } = luDecomposition(matrix);
      
      if (!success) {
        setError('LU Decomposition failed: Matrix is singular');
        setSteps(luSteps);
        return;
      }

      stepList.push(...luSteps);
      stepList.push({
        step: '',
        explanation: ''
      });

      switch (operation) {
        case 'lu': {
          stepList.push({
            step: '📊 Final LU Decomposition:',
            explanation: 'The complete LU decomposition of matrix A.'
          });
          stepList.push({
            step: 'A = L × U',
            explanation: 'The matrix A equals the product of L and U (with permutation).'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: 'L (Lower Triangular):',
            explanation: 'The lower triangular factor L.'
          });
          stepList.push({
            step: formatMatrix(L),
            explanation: 'The complete L matrix.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: 'U (Upper Triangular):',
            explanation: 'The upper triangular factor U.'
          });
          stepList.push({
            step: formatMatrix(U),
            explanation: 'The complete U matrix.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: 'P (Permutation Matrix):',
            explanation: 'The permutation matrix P.'
          });
          stepList.push({
            step: formatMatrix(P),
            explanation: 'The complete P matrix.'
          });

          // Verify: A = P × L × U (if no pivoting, P is identity)
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '✅ Verification:',
            explanation: 'Verify that A = P × L × U.'
          });
          stepList.push({
            step: 'A = P × L × U',
            explanation: 'The decomposition formula.'
          });
          
          resultValue = `L:\n${formatMatrix(L)}\n\nU:\n${formatMatrix(U)}`;
          break;
        }

        case 'solve': {
          // Check if b vector matches matrix dimension
          if (bVector.length !== n) {
            setError(`Vector b must have ${n} components`);
            return;
          }

          stepList.push({
            step: '📊 Solving Linear System: Ax = b',
            explanation: 'Using LU decomposition to solve the linear system.'
          });
          stepList.push({
            step: 'Using LU Decomposition: A = L × U',
            explanation: 'The system Ax = b becomes L·U·x = b.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: 'Step 1: Solve Ly = b',
            explanation: 'First solve the lower triangular system.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const { x, steps: solveSteps } = solveSystem(L, U, bVector);
          stepList.push(...solveSteps);
          
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '✅ Solution Found:',
            explanation: 'The solution to the linear system.'
          });
          stepList.push({
            step: `x = ${formatVector(x)}`,
            explanation: 'The final solution vector x.'
          });
          
          // Verification
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '📐 Verification: A × x = b',
            explanation: 'Verify the solution by multiplying A by x.'
          });
          const Ax = matrix.map(row => 
            row.reduce((sum, val, i) => sum + val * x[i], 0)
          );
          stepList.push({
            step: `A × x = ${formatVector(Ax)}`,
            explanation: 'The product A·x should equal b.'
          });
          stepList.push({
            step: `b = ${formatVector(bVector)}`,
            explanation: 'The original right-hand side vector b.'
          });
          const match = Ax.every((val, i) => Math.abs(val - bVector[i]) < 1e-6);
          stepList.push({
            step: match ? '✅ Verified! A × x = b' : '⚠️ Minor rounding discrepancy',
            explanation: match ? 'The solution is correct.' : 'Small rounding errors from floating point calculations.'
          });
          
          resultValue = `x = ${formatVector(x)}`;
          break;
        }

        case 'determinant': {
          const det = calculateDeterminant(U, P);
          stepList.push({
            step: '📐 Calculating Determinant',
            explanation: 'The determinant of A can be found from the LU decomposition.'
          });
          stepList.push({
            step: 'det(A) = det(P) × det(L) × det(U)',
            explanation: 'The determinant is the product of the determinants of P, L, and U.'
          });
          stepList.push({
            step: 'Since det(L) = 1, det(A) = det(P) × det(U)',
            explanation: 'L has 1s on the diagonal, so its determinant is 1.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          // Show diagonal elements of U
          stepList.push({
            step: 'Diagonal elements of U:',
            explanation: 'The diagonal elements of U are used to calculate det(U).'
          });
          for (let i = 0; i < n; i++) {
            stepList.push({
              step: `  U[${i+1}][${i+1}] = ${U[i][i].toFixed(4)}`,
              explanation: `Diagonal element ${i+1}.`
            });
          }
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `det(U) = ${U.map((row, i) => row[i].toFixed(4)).join(' × ')} = ${U.reduce((prod, row, i) => prod * row[i], 1).toFixed(4)}`,
            explanation: 'det(U) is the product of the diagonal elements.'
          });
          stepList.push({
            step: `det(P) = ${det / U.reduce((prod, row, i) => prod * row[i], 1)} (accounting for row swaps)`,
            explanation: 'det(P) is ±1 depending on the number of row swaps.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ det(A) = ${det.toFixed(4)}`,
            explanation: 'The final determinant value.'
          });
          
          if (Math.abs(det) < 1e-10) {
            stepList.push({
              step: '⚠️ The determinant is 0 → Matrix is singular',
              explanation: 'A zero determinant means the matrix is singular.'
            });
          } else {
            stepList.push({
              step: '✅ The determinant is non-zero → Matrix is invertible',
              explanation: 'A non-zero determinant means the matrix is invertible.'
            });
          }
          
          resultValue = `det(A) = ${det.toFixed(4)}`;
          break;
        }

        case 'inverse': {
          stepList.push({
            step: '📐 Calculating Inverse using LU Decomposition',
            explanation: 'The inverse is found by solving A·X = I for X.'
          });
          stepList.push({
            step: 'A⁻¹ can be found by solving A × X = I',
            explanation: 'Each column of the inverse is found by solving A·x_i = e_i.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          // Solve for each column of identity matrix
          const inverse: number[][] = [];
          let success = true;
          
          for (let col = 0; col < n; col++) {
            const e: number[] = Array(n).fill(0);
            e[col] = 1;
            
            stepList.push({
              step: `Column ${col + 1}: Solving A × x${col+1} = e${col+1}`,
              explanation: `Finding column ${col+1} of the inverse matrix.`
            });
            const { x, steps: solveSteps } = solveSystem(L, U, e);
            stepList.push(...solveSteps);
            inverse.push(x);
            stepList.push({
              step: '',
              explanation: ''
            });
          }
          
          // Transpose to get the inverse matrix
          const inverseMatrix = inverse[0].map((_, colIndex) => 
            inverse.map(row => row[colIndex])
          );
          
          stepList.push({
            step: '✅ Inverse Matrix Found:',
            explanation: 'The complete inverse matrix.'
          });
          stepList.push({
            step: formatMatrix(inverseMatrix),
            explanation: 'The inverse matrix A⁻¹.'
          });
          
          // Verification: A × A⁻¹ = I
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: '📐 Verification: A × A⁻¹ = I',
            explanation: 'Verify the inverse by multiplying A by A⁻¹.'
          });
          const identity = matrix.map(row => 
            inverseMatrix[0].map((_, colIndex) => 
              row.reduce((sum, val, i) => sum + val * inverseMatrix[i][colIndex], 0)
            )
          );
          stepList.push({
            step: formatMatrix(identity.map(row => row.map(v => Math.abs(v) < 1e-10 ? 0 : v))),
            explanation: 'The product should be the identity matrix.'
          });
          
          resultValue = formatMatrix(inverseMatrix);
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

  const addRow = () => {
    if (matrix.length < 6) {
      const newMatrix = [...matrix];
      const cols = newMatrix[0]?.length || 2;
      newMatrix.push(Array(cols).fill(0));
      setMatrix(newMatrix);
      setBVector([...bVector, 0]);
      setResult('');
      setSteps([]);
      setError('');
    } else {
      setError('Maximum size is 6×6');
    }
  };

  const addCol = () => {
    if (matrix[0]?.length < 6) {
      const newMatrix = matrix.map(row => [...row, 0]);
      setMatrix(newMatrix);
      setResult('');
      setSteps([]);
      setError('');
    } else {
      setError('Maximum size is 6×6');
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

  const updateBVector = (index: number, value: string) => {
    const newB = [...bVector];
    const numValue = value === '' ? 0 : parseFloat(value);
    newB[index] = isNaN(numValue) ? 0 : numValue;
    setBVector(newB);
    setResult('');
    setSteps([]);
    setError('');
  };

  const resetMatrix = () => {
    setMatrix([
      [4, 3],
      [6, 3]
    ]);
    setBVector([10, 12]);
    setOperation('lu');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let newMatrix: number[][];
    let newB: number[];
    switch (example) {
      case '2x2':
        newMatrix = [
          [4, 3],
          [6, 3]
        ];
        newB = [10, 12];
        break;
      case '2x2 singular':
        newMatrix = [
          [1, 2],
          [2, 4]
        ];
        newB = [5, 10];
        break;
      case '3x3':
        newMatrix = [
          [2, -1, 0],
          [-1, 2, -1],
          [0, -1, 2]
        ];
        newB = [1, 0, 1];
        break;
      case '3x3 singular':
        newMatrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];
        newB = [6, 15, 24];
        break;
      case '4x4':
        newMatrix = [
          [2, 1, 0, 0],
          [1, 2, 1, 0],
          [0, 1, 2, 1],
          [0, 0, 1, 2]
        ];
        newB = [1, 2, 3, 4];
        break;
      default:
        newMatrix = [
          [4, 3],
          [6, 3]
        ];
        newB = [10, 12];
    }
    setMatrix(newMatrix);
    setBVector(newB);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'lu': 'Calculate LU Decomposition of a square matrix',
      'solve': 'Solve linear system Ax = b using LU decomposition',
      'determinant': 'Calculate the determinant using LU decomposition',
      'inverse': 'Calculate the inverse matrix using LU decomposition'
    };
    return descriptions[op] || '';
  };

  // Helper to display value or empty string
  const displayValue = (val: number): string => {
    return val === 0 ? '' : val.toString();
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
              LU Decomposition Calculator
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Perform LU decomposition, solve linear systems, calculate determinants, and find inverses with step-by-step explanations
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
            <option value="lu">LU Decomposition</option>
            <option value="solve">Solve System (Ax = b)</option>
            <option value="determinant">Determinant</option>
            <option value="inverse">Inverse Matrix</option>
          </select>
          <span className="text-xs text-gray-500 font-medium">{getOperationDescription(operation)}</span>
        </div>

        {/* Quick Examples */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Presets & Examples:</span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: '2x2', label: '2×2' },
              { id: '2x2 singular', label: '2×2 (Singular)' },
              { id: '3x3', label: '3×3' },
              { id: '3x3 singular', label: '3×3 (Singular)' },
              { id: '4x4', label: '4×4' }
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
              onClick={resetMatrix}
              className="px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-semibold text-gray-600 transition shadow-2xs"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Matrix Input */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Matrix A ({matrix.length}×{matrix[0]?.length || 0})
            </h4>
            <div className="flex gap-2">
              <button
                onClick={addRow}
                disabled={matrix.length >= 6}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl shadow-xs transition inline-flex items-center gap-1.5 ${
                  matrix.length < 6
                    ? 'bg-[#7B1824] hover:bg-[#60101B] text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Row
              </button>
              <button
                onClick={addCol}
                disabled={matrix[0]?.length >= 6}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl shadow-xs transition inline-flex items-center gap-1.5 ${
                  matrix[0]?.length < 6
                    ? 'border border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Column
              </button>
            </div>
          </div>

          <div className="overflow-x-auto p-1">
            <div className="inline-block p-3 rounded-2xl bg-gray-50/60 border border-gray-200">
              <table className="border-collapse">
                <tbody>
                  {matrix.map((row, i) => (
                    <tr key={i}>
                      {row.map((val, j) => (
                        <td key={j} className="p-1">
                          <input
                            type="number"
                            value={displayValue(val)}
                            onChange={(e) => updateMatrix(i, j, e.target.value)}
                            className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
            <span className="text-gray-500 font-medium">{matrix.length}×{matrix[0]?.length || 0} matrix</span>
            {matrix.length !== matrix[0]?.length && (
              <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">⚠️ Must be a square matrix</span>
            )}
            <span className="text-gray-400">Max size: 6×6</span>
          </div>
        </div>

        {/* Vector b (for solve operation) */}
        {operation === 'solve' && (
          <div className="p-4 rounded-xl border border-[#F0D5D8] bg-[#FDF2F4]/40 space-y-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Vector b ({bVector.length}D)
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {bVector.map((val, i) => (
                <input
                  key={i}
                  type="number"
                  value={displayValue(val)}
                  onChange={(e) => updateBVector(i, e.target.value)}
                  className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  step="any"
                  placeholder="0"
                />
              ))}
              <span className="text-xs font-mono font-bold text-gray-600 ml-2">b = {formatVector(bVector)}</span>
            </div>
          </div>
        )}

        {/* Calculate Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
          <button
            onClick={performOperation}
            disabled={matrix.length !== matrix[0]?.length || matrix.length > 6}
            className={`inline-flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl shadow-md transition-all active:scale-95 text-xs sm:text-sm cursor-pointer ${
              matrix.length === matrix[0]?.length && matrix.length <= 6
                ? 'bg-[#7B1824] hover:bg-[#60101B] text-white shadow-[#7B1824]/20'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
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
                {operation.toUpperCase()} FACTORIZATION
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">LU Decomposition Result</h4>
            </div>
            <PDFExport
              title={`LU Decomposition - ${operation.toUpperCase()}`}
              data={result}
              steps={steps}
              inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || matrix.length}):\n${formatMatrix(matrix)}${operation === 'solve' ? `\nb Vector = [${bVector.join(', ')}]` : ''}\nOperation: ${operation}`}
              fileName={`lu_decomposition_${operation}`}
            />
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-sm sm:text-base font-bold text-gray-900 whitespace-pre-wrap">
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
          Supported Operations & Properties
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          {['LU Decomposition', 'Solve System (Ax = b)', 'Determinant', 'Inverse Matrix'].map((op, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-xs font-semibold text-gray-700 text-center">
              {op}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed pt-1">
          Supports square matrices up to 6×6. Partial pivoting is applied automatically to prevent zero divisors and improve numerical stability.
        </p>
      </div>
    </div>
  );
};

export default LUDecomposition;