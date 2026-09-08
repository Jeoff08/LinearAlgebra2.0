// components/CrossProduct.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'cross' | 'dot' | 'angle' | 'projection' | 'norm';

const CrossProduct: React.FC = () => {
  const [vectorA, setVectorA] = useState<number[]>([1, 0, 0]);
  const [vectorB, setVectorB] = useState<number[]>([0, 1, 0]);
  const [operation, setOperation] = useState<Operation>('cross');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<{ step: string; explanation: string }[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);

  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  const calculateNorm = (v: number[]): number => {
    return Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
  };

  const calculateDot = (v1: number[], v2: number[]): number => {
    return v1.reduce((sum, val, i) => sum + val * (v2[i] || 0), 0);
  };

  const calculateCross = (v1: number[], v2: number[]): number[] => {
    if (v1.length !== 3 || v2.length !== 3) {
      return [];
    }
    const [a1, a2, a3] = v1;
    const [b1, b2, b3] = v2;
    return [
      a2 * b3 - a3 * b2,
      a3 * b1 - a1 * b3,
      a1 * b2 - a2 * b1
    ];
  };

  const calculateAngle = (v1: number[], v2: number[]): number => {
    const dot = calculateDot(v1, v2);
    const norm1 = calculateNorm(v1);
    const norm2 = calculateNorm(v2);
    if (norm1 === 0 || norm2 === 0) return 0;
    const cosAngle = dot / (norm1 * norm2);
    const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
    return angleRad * 180 / Math.PI;
  };

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
      if (vectorA.length !== 3 || vectorB.length !== 3) {
        setError('Cross product requires 3D vectors');
        return;
      }

      stepList.push({
        step: '📊 Input Vectors:',
        explanation: 'The input 3D vectors for the vector operation.'
      });
      stepList.push({
        step: `A = ${formatVector(vectorA)}`,
        explanation: 'Vector A with 3 components.'
      });
      stepList.push({
        step: `B = ${formatVector(vectorB)}`,
        explanation: 'Vector B with 3 components.'
      });
      stepList.push({
        step: '',
        explanation: ''
      });

      let resultValue: string = '';
      let resultData: any = null;

      switch (operation) {
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
          
          const [a1, a2, a3] = vectorA;
          const [b1, b2, b3] = vectorB;
          
          stepList.push({
            step: `A × B = (${a2}×${b3} - ${a3}×${b2}, ${a3}×${b1} - ${a1}×${b3}, ${a1}×${b2} - ${a2}×${b1})`,
            explanation: 'Substitute the vector components into the cross product formula.'
          });
          stepList.push({
            step: `A × B = (${a2*b3} - ${a3*b2}, ${a3*b1} - ${a1*b3}, ${a1*b2} - ${a2*b1})`,
            explanation: 'Calculate the products in each component.'
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
          
          const crossNorm = calculateNorm(cross);
          stepList.push({
            step: `||A × B|| = ${crossNorm.toFixed(4)}`,
            explanation: 'The magnitude of the cross product vector.'
          });
          stepList.push({
            step: 'This represents the area of the parallelogram formed by the vectors',
            explanation: 'The magnitude equals the area of the parallelogram spanned by A and B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          if (crossNorm < 1e-10) {
            stepList.push({
              step: '💡 The cross product is zero → The vectors are parallel',
              explanation: 'Zero cross product indicates parallel vectors.'
            });
          } else {
            stepList.push({
              step: '💡 The cross product is non-zero → The vectors are not parallel',
              explanation: 'Non-zero cross product indicates non-parallel vectors.'
            });
            stepList.push({
              step: '💡 The direction of the cross product is perpendicular to both vectors',
              explanation: 'The cross product vector is orthogonal to both A and B.'
            });
          }
          
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

        case 'dot': {
          stepList.push({
            step: '📐 Operation: Dot Product',
            explanation: 'The dot product measures the similarity between two vectors.'
          });
          stepList.push({
            step: 'Formula: A · B = A₁×B₁ + A₂×B₂ + A₃×B₃',
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
          break;
        }

        case 'angle': {
          stepList.push({
            step: '📐 Operation: Angle Between Vectors',
            explanation: 'The angle between vectors measures how aligned they are.'
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
          
          const orthogonal = vectorA.map((v, i) => v - projection[i]);
          stepList.push({
            step: `Orthogonal component = A - proj = ${formatVector(orthogonal)}`,
            explanation: 'The orthogonal component is the part of A that is perpendicular to B.'
          });
          stepList.push({
            step: '',
            explanation: ''
          });
          
          const checkDot = calculateDot(orthogonal, vectorB);
          stepList.push({
            step: `Verification: (A - proj) · B = ${checkDot.toFixed(4)} (should be 0)`,
            explanation: 'Check if the orthogonal component is truly perpendicular to B.'
          });
          stepList.push({
            step: Math.abs(checkDot) < 1e-10 ? '✅ Verified! The orthogonal component is perpendicular to B' : '⚠️ Small rounding discrepancy',
            explanation: 'The dot product should be zero if the vectors are perpendicular.'
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
            step: 'Formula: ||A|| = √(A₁² + A₂² + A₃²)',
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
          
          if (norm > 0) {
            const unit = vectorA.map(v => v / norm);
            stepList.push({
              step: `Unit vector: u = A/||A|| = ${formatVector(unit)}`,
              explanation: 'The unit vector has magnitude 1 and points in the same direction as A.'
            });
          }
          
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
    setVectorA([1, 0, 0]);
    setVectorB([0, 1, 0]);
    setOperation('cross');
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let vA: number[], vB: number[];
    switch (example) {
      case 'basis': vA = [1, 0, 0]; vB = [0, 1, 0]; break;
      case 'parallel': vA = [2, 4, 6]; vB = [1, 2, 3]; break;
      case 'opposite': vA = [1, 2, 3]; vB = [-1, -2, -3]; break;
      case 'orthogonal': vA = [1, 2, 3]; vB = [3, 0, -1]; break;
      case 'arbitrary': vA = [2, -1, 3]; vB = [4, 2, -1]; break;
      case 'unit': vA = [0.577, 0.577, 0.577]; vB = [-0.577, 0.577, 0.577]; break;
      default: vA = [1, 0, 0]; vB = [0, 1, 0];
    }
    setVectorA(vA);
    setVectorB(vB);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'cross': 'Calculate the cross product of two 3D vectors',
      'dot': 'Calculate the dot product of two 3D vectors',
      'angle': 'Calculate the angle between two 3D vectors (in degrees)',
      'projection': 'Project one 3D vector onto another',
      'norm': 'Calculate the magnitude (length) of vector A'
    };
    return descriptions[op] || '';
  };

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
            Cross Product & 3D Vector Operations
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Calculate cross product, perpendicular vectors, parallelogram area, and angles in ℝ³
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
          <button onClick={() => loadExample('basis')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Basis Vectors</button>
          <button onClick={() => loadExample('parallel')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Parallel</button>
          <button onClick={() => loadExample('opposite')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Opposite</button>
          <button onClick={() => loadExample('orthogonal')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Orthogonal</button>
          <button onClick={() => loadExample('arbitrary')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Arbitrary</button>
          <button onClick={() => loadExample('unit')} className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer">Unit Vectors</button>
          <button onClick={resetVectors} className="px-2.5 py-1 text-xs font-semibold border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition cursor-pointer">Reset</button>
        </div>
      </div>

      {/* Operation Selection */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-xs sm:text-sm font-bold text-gray-700">Operation:</label>
          <select
            value={operation}
            onChange={(e) => { setOperation(e.target.value as Operation); setResult(''); setSteps([]); setError(''); }}
            className="px-3.5 py-2 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs"
          >
            <option value="cross">Cross Product</option>
            <option value="dot">Dot Product</option>
            <option value="angle">Angle Between</option>
            <option value="projection">Projection</option>
            <option value="norm">Norm (Magnitude)</option>
          </select>
          <span className="text-xs text-gray-500 font-medium italic">{getOperationDescription(operation)}</span>
        </div>
      </div>

      {/* Vector Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
            Vector A (3D)
          </h4>
          <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
            {vectorA.map((val, i) => (
              <div key={i} className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7B1824]">{['x', 'y', 'z'][i]}</span>
                <input
                  type="number"
                  value={getDisplayValue(val)}
                  onChange={(e) => updateVector(1, i, e.target.value)}
                  onBlur={(e) => { if (e.target.value === '') updateVector(1, i, ''); }}
                  className="w-20 pl-6 pr-2 py-1.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-center font-mono font-bold text-sm shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  step="any"
                  placeholder="0"
                />
              </div>
            ))}
            <span className="text-xs font-mono text-gray-500 ml-auto">A = {formatVector(vectorA)}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
            Vector B (3D)
          </h4>
          <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
            {vectorB.map((val, i) => (
              <div key={i} className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7B1824]">{['x', 'y', 'z'][i]}</span>
                <input
                  type="number"
                  value={getDisplayValue(val)}
                  onChange={(e) => updateVector(2, i, e.target.value)}
                  onBlur={(e) => { if (e.target.value === '') updateVector(2, i, ''); }}
                  className="w-20 pl-6 pr-2 py-1.5 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-center font-mono font-bold text-sm shadow-2xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  step="any"
                  placeholder="0"
                />
              </div>
            ))}
            <span className="text-xs font-mono text-gray-500 ml-auto">B = {formatVector(vectorB)}</span>
          </div>
        </div>
      </div>

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

      {error && (
        <div className="p-4 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs sm:text-sm font-semibold text-[#7B1824]">
          {error}
        </div>
      )}

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
                  title={`3D Vector Operations - ${operation.toUpperCase()}`}
                  data={result}
                  steps={steps.map(s => `${s.step}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Vector A = (${vectorA.join(', ')})\nVector B = (${vectorB.join(', ')})\nOperation = ${operation}`}
                  fileName={`crossproduct_${operation}`}
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
          Cross Product Properties & Guide
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500 text-xs">
          <li>Result vector is orthogonal to both input vectors (A · (A × B) = 0)</li>
          <li>Magnitude ||A × B|| equals the area of the parallelogram formed by A and B</li>
          <li>Anti-commutative property: A × B = -(B × A)</li>
          <li>Parallel vectors yield zero cross product: A × B = 0 if A || B</li>
        </ul>
      </div>
    </div>
  );
};

export default CrossProduct;