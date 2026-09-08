// components/DotProduct.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'dot' | 'cross' | 'angle' | 'projection' | 'norm';

const DotProduct: React.FC = () => {
  const [vectorA, setVectorA] = useState<number[]>([1, 2, 3]);
  const [vectorB, setVectorB] = useState<number[]>([4, 5, 6]);
  const [operation, setOperation] = useState<Operation>('dot');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  // Format vector for display
  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  // Calculate magnitude (norm) of a vector
  const calculateNorm = (v: number[]): number => {
    return Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
  };

  // Calculate dot product
  const calculateDot = (v1: number[], v2: number[]): number => {
    return v1.reduce((sum, val, i) => sum + val * (v2[i] || 0), 0);
  };

  // Calculate cross product (3D only)
  const calculateCross = (v1: number[], v2: number[]): number[] => {
    if (v1.length !== 3 || v2.length !== 3) {
      return [];
    }
    return [
      v1[1] * v2[2] - v1[2] * v2[1],
      v1[2] * v2[0] - v1[0] * v2[2],
      v1[0] * v2[1] - v1[1] * v2[0]
    ];
  };

  // Calculate angle between vectors (in degrees)
  const calculateAngle = (v1: number[], v2: number[]): number => {
    const dot = calculateDot(v1, v2);
    const norm1 = calculateNorm(v1);
    const norm2 = calculateNorm(v2);
    if (norm1 === 0 || norm2 === 0) return 0;
    const cosAngle = dot / (norm1 * norm2);
    const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
    return angleRad * 180 / Math.PI;
  };

  // Calculate projection of v1 onto v2
  const calculateProjection = (v1: number[], v2: number[]): number[] => {
    const dot = calculateDot(v1, v2);
    const norm2 = calculateNorm(v2);
    if (norm2 === 0) return v1.map(() => 0);
    const scalar = dot / (norm2 * norm2);
    return v2.map(val => val * scalar);
  };

  const performOperation = () => {
    setError('');
    setResult('');
    setSteps([]);

    const stepList: { step: string; explanation: string }[] = [];

    try {
      // Validate vectors
      if (vectorA.length === 0 || vectorB.length === 0) {
        setError('Vectors cannot be empty');
        return;
      }

      // Check if vectors have same dimension
      if (vectorA.length !== vectorB.length && operation !== 'norm') {
        setError(`Vectors must have the same dimension (${vectorA.length} ≠ ${vectorB.length})`);
        return;
      }

      // Check if vectors are 3D for cross product
      if (operation === 'cross' && (vectorA.length !== 3 || vectorB.length !== 3)) {
        setError('Cross product requires 3D vectors');
        return;
      }

      stepList.push({
        step: '📊 Input Vectors:',
        explanation: 'The input vectors for the vector operation.'
      });
      stepList.push({
        step: `A = ${formatVector(vectorA)}`,
        explanation: `Vector A with ${vectorA.length} components.`
      });
      stepList.push({
        step: `B = ${formatVector(vectorB)}`,
        explanation: `Vector B with ${vectorB.length} components.`
      });
      stepList.push({
        step: '',
        explanation: ''
      });

      let resultValue: string = '';
      let resultData: any = null;

      switch (operation) {
        case 'dot': {
          stepList.push({
            step: '📐 Operation: Dot Product',
            explanation: 'The dot product measures the similarity and angle between two vectors.'
          });
          stepList.push({
            step: 'Formula: A · B = A₁×B₁ + A₂×B₂ + ... + Aₙ×Bₙ',
            explanation: 'The dot product is the sum of products of corresponding components.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const products = vectorA.map((v, i) => v * vectorB[i]);
          stepList.push({
            step: `Products: ${formatVector(products)}`,
            explanation: 'Multiply each corresponding component of A and B.'
          });
          const dot = products.reduce((a, b) => a + b, 0);
          stepList.push({
            step: `Sum of products: ${dot.toFixed(4)}`,
            explanation: 'Sum all the products to get the dot product.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ A · B = ${dot.toFixed(4)}`,
            explanation: 'The final dot product result.'
          });
          
          resultValue = `A · B = ${dot.toFixed(4)}`;
          resultData = dot;
          
          // Additional interpretation
          if (dot === 0) {
            stepList.push({
              step: '💡 The dot product is zero → The vectors are orthogonal (perpendicular)',
              explanation: 'Zero dot product indicates the vectors are perpendicular.'
            });
          } else if (dot > 0) {
            stepList.push({
              step: '💡 The dot product is positive → The angle between vectors is acute (< 90°)',
              explanation: 'Positive dot product indicates an acute angle.'
            });
          } else {
            stepList.push({
              step: '💡 The dot product is negative → The angle between vectors is obtuse (> 90°)',
              explanation: 'Negative dot product indicates an obtuse angle.'
            });
          }
          break;
        }

        case 'cross': {
          stepList.push({
            step: '📐 Operation: Cross Product',
            explanation: 'The cross product produces a vector perpendicular to both input vectors.'
          });
          stepList.push({
            step: 'Formula: A × B = (A₂×B₃ - A₃×B₂, A₃×B₁ - A₁×B₃, A₁×B₂ - A₂×B₁)',
            explanation: 'The cross product components using the determinant method.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const cross = calculateCross(vectorA, vectorB);
          stepList.push({
            step: `A × B = ${formatVector(cross)}`,
            explanation: 'The resulting cross product vector.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          // Calculate magnitude of cross product
          const crossNorm = calculateNorm(cross);
          stepList.push({
            step: `||A × B|| = ${crossNorm.toFixed(4)}`,
            explanation: 'The magnitude of the cross product vector.'
          });
          stepList.push({
            step: `This represents the area of the parallelogram formed by the vectors`,
            explanation: 'The magnitude equals the area of the parallelogram spanned by A and B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ A × B = ${formatVector(cross)}`,
            explanation: 'The final cross product result.'
          });
          
          resultValue = `A × B = ${formatVector(cross)}`;
          resultData = cross;
          break;
        }

        case 'angle': {
          stepList.push({
            step: '📐 Operation: Angle Between Vectors',
            explanation: 'The angle between vectors measures how aligned or opposed they are.'
          });
          stepList.push({
            step: 'Formula: θ = arccos((A · B) / (||A|| × ||B||))',
            explanation: 'The angle is found using the cosine relationship with the dot product.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const dot = calculateDot(vectorA, vectorB);
          const normA = calculateNorm(vectorA);
          const normB = calculateNorm(vectorB);
          
          stepList.push({
            step: `A · B = ${dot.toFixed(4)}`,
            explanation: 'Calculate the dot product of vectors A and B.'
          });
          stepList.push({
            step: `||A|| = ${normA.toFixed(4)}`,
            explanation: 'Calculate the magnitude (norm) of vector A.'
          });
          stepList.push({
            step: `||B|| = ${normB.toFixed(4)}`,
            explanation: 'Calculate the magnitude (norm) of vector B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          if (normA === 0 || normB === 0) {
            stepList.push({
              step: '⚠️ One of the vectors is zero, angle is undefined',
              explanation: 'Zero vector has no direction, so angle is undefined.'
            });
            setError('Cannot calculate angle with zero vector');
            return;
          }
          
          const cosAngle = dot / (normA * normB);
          stepList.push({
            step: `cos(θ) = ${dot.toFixed(4)} / (${normA.toFixed(4)} × ${normB.toFixed(4)}) = ${cosAngle.toFixed(4)}`,
            explanation: 'Calculate the cosine of the angle using the formula.'
          });
          const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
          const angleDeg = angleRad * 180 / Math.PI;
          stepList.push({
            step: `θ = arccos(${cosAngle.toFixed(4)}) = ${angleDeg.toFixed(4)}°`,
            explanation: 'Find the angle in degrees from the cosine value.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          // Interpretation
          if (Math.abs(angleDeg) < 1e-6) {
            stepList.push({
              step: '💡 The vectors are parallel and point in the same direction',
              explanation: 'Angle of 0° means vectors point in the same direction.'
            });
          } else if (Math.abs(angleDeg - 180) < 1e-6) {
            stepList.push({
              step: '💡 The vectors are parallel and point in opposite directions',
              explanation: 'Angle of 180° means vectors point in opposite directions.'
            });
          } else if (Math.abs(angleDeg - 90) < 1e-6) {
            stepList.push({
              step: '💡 The vectors are orthogonal (perpendicular)',
              explanation: 'Angle of 90° means vectors are perpendicular.'
            });
          } else if (angleDeg < 90) {
            stepList.push({
              step: `💡 The angle is acute (${angleDeg.toFixed(4)}°) → The vectors point in similar directions`,
              explanation: 'Acute angle means vectors are generally aligned.'
            });
          } else {
            stepList.push({
              step: `💡 The angle is obtuse (${angleDeg.toFixed(4)}°) → The vectors point in different directions`,
              explanation: 'Obtuse angle means vectors are generally opposed.'
            });
          }
          
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ θ = ${angleDeg.toFixed(4)}°`,
            explanation: 'The final angle between vectors.'
          });
          
          resultValue = `θ = ${angleDeg.toFixed(4)}°`;
          resultData = angleDeg;
          break;
        }

        case 'projection': {
          stepList.push({
            step: '📐 Operation: Vector Projection',
            explanation: 'Projection finds the component of vector A that lies along vector B.'
          });
          stepList.push({
            step: 'Formula: proj_B(A) = ((A · B) / ||B||²) × B',
            explanation: 'The projection scalar times vector B gives the projection of A onto B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const dot = calculateDot(vectorA, vectorB);
          const normB = calculateNorm(vectorB);
          
          stepList.push({
            step: `A · B = ${dot.toFixed(4)}`,
            explanation: 'Calculate the dot product of vectors A and B.'
          });
          stepList.push({
            step: `||B||² = ${(normB * normB).toFixed(4)}`,
            explanation: 'Square the norm of B to get the denominator for the projection scalar.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          if (normB === 0) {
            stepList.push({
              step: '⚠️ Cannot project onto zero vector',
              explanation: 'Projection onto a zero vector is undefined.'
            });
            setError('Cannot project onto zero vector');
            return;
          }
          
          const scalar = dot / (normB * normB);
          stepList.push({
            step: `scalar = ${dot.toFixed(4)} / ${(normB * normB).toFixed(4)} = ${scalar.toFixed(4)}`,
            explanation: 'The scalar that multiplies B to get the projection of A onto B.'
          });
          const projection = vectorB.map(v => v * scalar);
          stepList.push({
            step: `proj = ${scalar.toFixed(4)} × ${formatVector(vectorB)} = ${formatVector(projection)}`,
            explanation: 'Multiply vector B by the scalar to get the projection vector.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          // Calculate the orthogonal component
          const orthogonal = vectorA.map((v, i) => v - projection[i]);
          stepList.push({
            step: `Orthogonal component = A - proj = ${formatVector(orthogonal)}`,
            explanation: 'The orthogonal component is the part of A that is perpendicular to B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ proj_B(A) = ${formatVector(projection)}`,
            explanation: 'The final projection result.'
          });
          
          resultValue = `proj_B(A) = ${formatVector(projection)}`;
          resultData = projection;
          break;
        }

        case 'norm': {
          stepList.push({
            step: '📐 Operation: Vector Norm (Magnitude)',
            explanation: 'The norm represents the length or magnitude of the vector.'
          });
          stepList.push({
            step: 'Formula: ||A|| = √(A₁² + A₂² + ... + Aₙ²)',
            explanation: 'The norm is the square root of the sum of squared components.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const squared = vectorA.map(v => v * v);
          stepList.push({
            step: `Squared components: ${formatVector(squared)}`,
            explanation: 'Square each component of vector A.'
          });
          const sum = squared.reduce((a, b) => a + b, 0);
          stepList.push({
            step: `Sum of squares: ${sum.toFixed(4)}`,
            explanation: 'Sum all the squared components.'
          });
          const norm = Math.sqrt(sum);
          stepList.push({
            step: `√(${sum.toFixed(4)}) = ${norm.toFixed(4)}`,
            explanation: 'Take the square root of the sum to get the norm.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          stepList.push({
            step: `✅ ||A|| = ${norm.toFixed(4)}`,
            explanation: 'The final norm value.'
          });
          
          resultValue = `||A|| = ${norm.toFixed(4)}`;
          resultData = norm;
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

  const addComponent = (vectorNum: number) => {
    if (vectorNum === 1) {
      setVectorA([...vectorA, 0]);
    } else {
      setVectorB([...vectorB, 0]);
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeComponent = (vectorNum: number) => {
    if (vectorNum === 1 && vectorA.length > 1) {
      setVectorA(vectorA.slice(0, -1));
    } else if (vectorNum === 2 && vectorB.length > 1) {
      setVectorB(vectorB.slice(0, -1));
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const updateVector = (vectorNum: number, index: number, value: string) => {
    if (value === '') {
      if (vectorNum === 1) {
        const newV = [...vectorA];
        newV[index] = 0;
        setVectorA(newV);
      } else {
        const newV = [...vectorB];
        newV[index] = 0;
        setVectorB(newV);
      }
      setResult('');
      setSteps([]);
      setError('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (vectorNum === 1) {
      const newV = [...vectorA];
      newV[index] = isNaN(numValue) ? 0 : numValue;
      setVectorA(newV);
    } else {
      const newV = [...vectorB];
      newV[index] = isNaN(numValue) ? 0 : numValue;
      setVectorB(newV);
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const resetVectors = () => {
    setVectorA([1, 2, 3]);
    setVectorB([4, 5, 6]);
    setOperation('dot');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let vA: number[], vB: number[];
    switch (example) {
      case 'orthogonal':
        vA = [1, 0, 0];
        vB = [0, 1, 0];
        break;
      case 'parallel':
        vA = [2, 4, 6];
        vB = [1, 2, 3];
        break;
      case 'opposite':
        vA = [1, 2, 3];
        vB = [-1, -2, -3];
        break;
      case '2D':
        vA = [3, 4];
        vB = [1, 2];
        break;
      case '3D':
        vA = [1, 2, 3];
        vB = [4, 5, 6];
        break;
      case '4D':
        vA = [1, 2, 3, 4];
        vB = [5, 6, 7, 8];
        break;
      default:
        vA = [1, 2, 3];
        vB = [4, 5, 6];
    }
    setVectorA(vA);
    setVectorB(vB);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'dot': 'Calculate the dot product of two vectors',
      'cross': 'Calculate the cross product of two 3D vectors',
      'angle': 'Calculate the angle between two vectors (in degrees)',
      'projection': 'Project one vector onto another',
      'norm': 'Calculate the magnitude (length) of vector A'
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
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
            Dot Product & Vector Operations
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Calculate dot product, cross product, angle between vectors, and projections
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          <button
            onClick={() => loadExample('orthogonal')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Orthogonal
          </button>
          <button
            onClick={() => loadExample('parallel')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Parallel
          </button>
          <button
            onClick={() => loadExample('opposite')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Opposite
          </button>
          <button
            onClick={() => loadExample('2D')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            2D
          </button>
          <button
            onClick={() => loadExample('3D')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            3D
          </button>
          <button
            onClick={() => loadExample('4D')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            4D
          </button>
          <button
            onClick={resetVectors}
            className="px-2.5 py-1 text-xs font-semibold border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Operation Selection */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap gap-4 items-center justify-between">
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
            className="px-3.5 py-2 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs"
          >
            <option value="dot">Dot Product</option>
            <option value="cross">Cross Product (3D)</option>
            <option value="angle">Angle Between</option>
            <option value="projection">Projection</option>
            <option value="norm">Norm (Magnitude)</option>
          </select>
          <span className="text-xs text-gray-500 font-medium italic">{getOperationDescription(operation)}</span>
        </div>
      </div>

      {/* Vector Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vector A */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Vector A ({vectorA.length}D)
            </h4>
            <div className="flex gap-1.5">
              <button
                onClick={() => addComponent(1)}
                className="text-xs px-2.5 py-1 bg-[#FDF2F4] text-[#7B1824] hover:bg-[#7B1824] hover:text-white rounded-lg font-semibold transition cursor-pointer"
              >
                + Component
              </button>
              <button
                onClick={() => removeComponent(1)}
                disabled={vectorA.length <= 1}
                className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                  vectorA.length > 1
                    ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                - Component
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
            {vectorA.map((val, i) => (
              <input
                key={i}
                type="number"
                value={getDisplayValue(val)}
                onChange={(e) => updateVector(1, i, e.target.value)}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    updateVector(1, i, '');
                  }
                }}
                className="w-16 sm:w-18 px-2 py-1.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-center font-mono font-bold text-sm shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                step="any"
                placeholder="0"
              />
            ))}
            <span className="text-xs font-mono text-gray-500 ml-auto">A = {formatVector(vectorA)}</span>
          </div>
        </div>

        {/* Vector B */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Vector B ({vectorB.length}D)
            </h4>
            <div className="flex gap-1.5">
              <button
                onClick={() => addComponent(2)}
                className="text-xs px-2.5 py-1 bg-[#FDF2F4] text-[#7B1824] hover:bg-[#7B1824] hover:text-white rounded-lg font-semibold transition cursor-pointer"
              >
                + Component
              </button>
              <button
                onClick={() => removeComponent(2)}
                disabled={vectorB.length <= 1}
                className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                  vectorB.length > 1
                    ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                - Component
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
            {vectorB.map((val, i) => (
              <input
                key={i}
                type="number"
                value={getDisplayValue(val)}
                onChange={(e) => updateVector(2, i, e.target.value)}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    updateVector(2, i, '');
                  }
                }}
                className="w-16 sm:w-18 px-2 py-1.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-center font-mono font-bold text-sm shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                step="any"
                placeholder="0"
              />
            ))}
            <span className="text-xs font-mono text-gray-500 ml-auto">B = {formatVector(vectorB)}</span>
          </div>
        </div>
      </div>

      {/* Warnings */}
      {vectorA.length !== vectorB.length && operation !== 'norm' && (
        <div className="p-3 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs text-[#7B1824] font-semibold">
          ⚠️ Warning: Vectors have different dimensions ({vectorA.length}D vs {vectorB.length}D).
          {operation === 'dot' && ' Dot product requires same dimensions.'}
          {operation === 'angle' && ' Angle calculation requires same dimensions.'}
          {operation === 'projection' && ' Projection requires same dimensions.'}
          {operation === 'cross' && ' Cross product requires 3D vectors.'}
        </div>
      )}

      {operation === 'cross' && (vectorA.length !== 3 || vectorB.length !== 3) && (
        <div className="p-3 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs text-[#7B1824] font-semibold">
          ⚠️ Cross product requires 3D vectors. Current dimensions: A={vectorA.length}D, B={vectorB.length}D
        </div>
      )}

      {/* Calculate Button */}
      <div className="flex flex-wrap gap-3">
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
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Computed Result</h3>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title={`Vector Operations - ${operation.toUpperCase()}`}
                  data={result}
                  steps={steps.map(s => `${s.step}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Vector A = (${vectorA.join(', ')})\nVector B = (${vectorB.join(', ')})\nOperation = ${operation}`}
                  fileName={`dotproduct_${operation}`}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-base sm:text-lg font-bold text-gray-900 whitespace-pre-wrap">
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
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
        <p className="font-bold text-gray-800 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
          <svg className="w-4 h-4 text-[#7B1824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Supported Operations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {['Dot Product', 'Cross Product (3D)', 'Angle Between', 'Vector Projection', 'Norm (Magnitude)'].map((op, i) => (
            <span key={i} className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              {op}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotProduct;