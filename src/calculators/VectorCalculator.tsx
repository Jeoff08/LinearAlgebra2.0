// components/VectorCalculator.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

type Operation = 'norm' | 'dot' | 'cross' | 'add' | 'subtract' | 'scalar' | 'angle' | 'projection' | 'unit';

const VectorCalculator: React.FC = () => {
  const [vector1, setVector1] = useState<number[]>([2, 3, 4]);
  const [vector2, setVector2] = useState<number[]>([1, 0, -1]);
  const [scalarValue, setScalarValue] = useState<number>(2);
  const [operation, setOperation] = useState<Operation>('norm');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [showSteps, setShowSteps] = useState(false);
  const [useSecondVector, setUseSecondVector] = useState(false);

  // Format vector for display
  const formatVector = (v: number[]): string => {
    return `(${v.map(val => val.toFixed(4)).join(', ')})`;
  };

  // Helper function to get display value
  const getDisplayValue = (value: number): string => {
    return value === 0 ? '' : String(value);
  };

  // Handle input blur to ensure empty fields become 0
  const handleInputBlur = (vectorNum: number, index: number) => {
    if (vectorNum === 1) {
      const newV = [...vector1];
      if (isNaN(newV[index]) || newV[index] === undefined) {
        newV[index] = 0;
        setVector1(newV);
      }
    } else {
      const newV = [...vector2];
      if (isNaN(newV[index]) || newV[index] === undefined) {
        newV[index] = 0;
        setVector2(newV);
      }
    }
    setResult('');
    setSteps([]);
    setError('');
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

  // Get unit vector
  const calculateUnit = (v: number[]): number[] => {
    const norm = calculateNorm(v);
    if (norm === 0) return v.map(() => 0);
    return v.map(val => val / norm);
  };

  const performOperation = () => {
    setError('');
    setResult('');
    setSteps([]);

    const stepList: string[] = [];

    try {
      // Validate vectors
      if (vector1.length === 0) {
        setError('Vector cannot be empty');
        return;
      }

      // Check if vectors have same dimension for certain operations
      if ((operation === 'dot' || operation === 'add' || operation === 'subtract' || operation === 'angle' || operation === 'projection') && 
          vector1.length !== vector2.length) {
        setError(`Vectors must have the same dimension (${vector1.length} ≠ ${vector2.length})`);
        return;
      }

      // Check if vectors are 3D for cross product
      if (operation === 'cross' && (vector1.length !== 3 || vector2.length !== 3)) {
        setError('Cross product requires 3D vectors');
        return;
      }

      stepList.push('📊 Input Vectors:');
      stepList.push(`v₁ = ${formatVector(vector1)}`);
      if (useSecondVector || operation === 'dot' || operation === 'cross' || operation === 'add' || operation === 'subtract' || operation === 'angle' || operation === 'projection') {
        stepList.push(`v₂ = ${formatVector(vector2)}`);
      }
      if (operation === 'scalar') {
        stepList.push(`Scalar = ${scalarValue}`);
      }
      stepList.push('');

      let resultValue: string = '';
      let resultData: any = null;

      switch (operation) {
        case 'norm': {
          stepList.push('📐 Operation: Vector Norm (Magnitude)');
          stepList.push(`Formula: ||v|| = √(v₁² + v₂² + ... + vₙ²)`);
          stepList.push('');
          
          const squared = vector1.map(v => v * v);
          stepList.push(`Squared components: ${formatVector(squared)}`);
          const sum = squared.reduce((a, b) => a + b, 0);
          stepList.push(`Sum of squares: ${sum.toFixed(4)}`);
          const norm = Math.sqrt(sum);
          stepList.push(`√(${sum.toFixed(4)}) = ${norm.toFixed(4)}`);
          stepList.push('');
          stepList.push(`✅ ||v|| = ${norm.toFixed(4)}`);
          
          resultValue = `||v|| = ${norm.toFixed(4)}`;
          resultData = norm;
          break;
        }

        case 'dot': {
          stepList.push('📐 Operation: Dot Product');
          stepList.push('Formula: v₁ · v₂ = v₁₁×v₂₁ + v₁₂×v₂₂ + ... + v₁ₙ×v₂ₙ');
          stepList.push('');
          
          const products = vector1.map((v, i) => v * vector2[i]);
          stepList.push(`Products: ${formatVector(products)}`);
          const dot = products.reduce((a, b) => a + b, 0);
          stepList.push(`Sum of products: ${dot.toFixed(4)}`);
          stepList.push('');
          stepList.push(`✅ v₁ · v₂ = ${dot.toFixed(4)}`);
          
          resultValue = `v₁ · v₂ = ${dot.toFixed(4)}`;
          resultData = dot;
          break;
        }

        case 'cross': {
          stepList.push('📐 Operation: Cross Product');
          stepList.push('Formula: v₁ × v₂ = (v₁₂×v₂₃ - v₁₃×v₂₂, v₁₃×v₂₁ - v₁₁×v₂₃, v₁₁×v₂₂ - v₁₂×v₂₁)');
          stepList.push('');
          
          const cross = calculateCross(vector1, vector2);
          stepList.push(`v₁ × v₂ = ${formatVector(cross)}`);
          stepList.push('');
          stepList.push(`✅ v₁ × v₂ = ${formatVector(cross)}`);
          
          resultValue = `v₁ × v₂ = ${formatVector(cross)}`;
          resultData = cross;
          break;
        }

        case 'add': {
          stepList.push('📐 Operation: Vector Addition');
          stepList.push('Formula: v₁ + v₂ = (v₁₁+v₂₁, v₁₂+v₂₂, ...)');
          stepList.push('');
          
          const sum = vector1.map((v, i) => v + vector2[i]);
          stepList.push(`v₁ + v₂ = ${formatVector(sum)}`);
          stepList.push('');
          stepList.push(`✅ v₁ + v₂ = ${formatVector(sum)}`);
          
          resultValue = `v₁ + v₂ = ${formatVector(sum)}`;
          resultData = sum;
          break;
        }

        case 'subtract': {
          stepList.push('📐 Operation: Vector Subtraction');
          stepList.push('Formula: v₁ - v₂ = (v₁₁-v₂₁, v₁₂-v₂₂, ...)');
          stepList.push('');
          
          const diff = vector1.map((v, i) => v - vector2[i]);
          stepList.push(`v₁ - v₂ = ${formatVector(diff)}`);
          stepList.push('');
          stepList.push(`✅ v₁ - v₂ = ${formatVector(diff)}`);
          
          resultValue = `v₁ - v₂ = ${formatVector(diff)}`;
          resultData = diff;
          break;
        }

        case 'scalar': {
          stepList.push('📐 Operation: Scalar Multiplication');
          stepList.push(`Formula: ${scalarValue} × v = (${scalarValue}×v₁, ${scalarValue}×v₂, ...)`);
          stepList.push('');
          
          const scaled = vector1.map(v => v * scalarValue);
          stepList.push(`${scalarValue} × v = ${formatVector(scaled)}`);
          stepList.push('');
          stepList.push(`✅ ${scalarValue} × v = ${formatVector(scaled)}`);
          
          resultValue = `${scalarValue} × v = ${formatVector(scaled)}`;
          resultData = scaled;
          break;
        }

        case 'angle': {
          stepList.push('📐 Operation: Angle Between Vectors');
          stepList.push('Formula: θ = arccos((v₁ · v₂) / (||v₁|| × ||v₂||))');
          stepList.push('');
          
          const dot = calculateDot(vector1, vector2);
          const norm1 = calculateNorm(vector1);
          const norm2 = calculateNorm(vector2);
          
          stepList.push(`v₁ · v₂ = ${dot.toFixed(4)}`);
          stepList.push(`||v₁|| = ${norm1.toFixed(4)}`);
          stepList.push(`||v₂|| = ${norm2.toFixed(4)}`);
          stepList.push('');
          
          if (norm1 === 0 || norm2 === 0) {
            stepList.push('⚠️ One of the vectors is zero, angle is undefined');
            setError('Cannot calculate angle with zero vector');
            return;
          }
          
          const cosAngle = dot / (norm1 * norm2);
          stepList.push(`cos(θ) = ${dot.toFixed(4)} / (${norm1.toFixed(4)} × ${norm2.toFixed(4)}) = ${cosAngle.toFixed(4)}`);
          const angleRad = Math.acos(Math.max(-1, Math.min(1, cosAngle)));
          const angleDeg = angleRad * 180 / Math.PI;
          stepList.push(`θ = arccos(${cosAngle.toFixed(4)}) = ${angleDeg.toFixed(4)}°`);
          stepList.push('');
          stepList.push(`✅ θ = ${angleDeg.toFixed(4)}°`);
          
          resultValue = `θ = ${angleDeg.toFixed(4)}°`;
          resultData = angleDeg;
          break;
        }

        case 'projection': {
          stepList.push('📐 Operation: Vector Projection');
          stepList.push('Formula: proj_v₂(v₁) = ((v₁ · v₂) / ||v₂||²) × v₂');
          stepList.push('');
          
          const dot = calculateDot(vector1, vector2);
          const norm2 = calculateNorm(vector2);
          
          stepList.push(`v₁ · v₂ = ${dot.toFixed(4)}`);
          stepList.push(`||v₂||² = ${(norm2 * norm2).toFixed(4)}`);
          stepList.push('');
          
          if (norm2 === 0) {
            stepList.push('⚠️ Cannot project onto zero vector');
            setError('Cannot project onto zero vector');
            return;
          }
          
          const scalar = dot / (norm2 * norm2);
          stepList.push(`scalar = ${dot.toFixed(4)} / ${(norm2 * norm2).toFixed(4)} = ${scalar.toFixed(4)}`);
          const projection = vector2.map(v => v * scalar);
          stepList.push(`proj = ${scalar.toFixed(4)} × ${formatVector(vector2)} = ${formatVector(projection)}`);
          stepList.push('');
          stepList.push(`✅ proj_v₂(v₁) = ${formatVector(projection)}`);
          
          resultValue = `proj_v₂(v₁) = ${formatVector(projection)}`;
          resultData = projection;
          break;
        }

        case 'unit': {
          stepList.push('📐 Operation: Unit Vector');
          stepList.push('Formula: u = v / ||v||');
          stepList.push('');
          
          const norm = calculateNorm(vector1);
          stepList.push(`||v|| = ${norm.toFixed(4)}`);
          
          if (norm === 0) {
            stepList.push('⚠️ Cannot normalize zero vector');
            setError('Cannot normalize zero vector');
            return;
          }
          
          const unit = vector1.map(v => v / norm);
          stepList.push(`u = ${formatVector(vector1)} / ${norm.toFixed(4)} = ${formatVector(unit)}`);
          stepList.push('');
          stepList.push(`✅ u = ${formatVector(unit)}`);
          
          resultValue = `u = ${formatVector(unit)}`;
          resultData = unit;
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
      setVector1([...vector1, 0]);
    } else {
      setVector2([...vector2, 0]);
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const removeComponent = (vectorNum: number) => {
    if (vectorNum === 1 && vector1.length > 1) {
      setVector1(vector1.slice(0, -1));
    } else if (vectorNum === 2 && vector2.length > 1) {
      setVector2(vector2.slice(0, -1));
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const updateVector = (vectorNum: number, index: number, value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    if (vectorNum === 1) {
      const newV = [...vector1];
      newV[index] = isNaN(numValue) ? 0 : numValue;
      setVector1(newV);
    } else {
      const newV = [...vector2];
      newV[index] = isNaN(numValue) ? 0 : numValue;
      setVector2(newV);
    }
    setResult('');
    setSteps([]);
    setError('');
  };

  const resetVectors = () => {
    setVector1([2, 3, 4]);
    setVector2([1, 0, -1]);
    setScalarValue(2);
    setResult('');
    setSteps([]);
    setError('');
  };

  const loadExample = (example: string) => {
    let v1: number[], v2: number[];
    switch (example) {
      case '2D':
        v1 = [3, 4];
        v2 = [1, 2];
        break;
      case '3D':
        v1 = [2, 3, 4];
        v2 = [1, 0, -1];
        break;
      case 'parallel':
        v1 = [2, 4, 6];
        v2 = [1, 2, 3];
        break;
      case 'perpendicular':
        v1 = [1, 0, 0];
        v2 = [0, 1, 0];
        break;
      case 'same':
        v1 = [1, 2, 3];
        v2 = [1, 2, 3];
        break;
      case 'zero':
        v1 = [0, 0, 0];
        v2 = [1, 2, 3];
        break;
      default:
        v1 = [2, 3, 4];
        v2 = [1, 0, -1];
    }
    setVector1(v1);
    setVector2(v2);
    setResult('');
    setSteps([]);
    setError('');
  };

  const getOperationRequiresSecondVector = (op: Operation): boolean => {
    return ['dot', 'cross', 'add', 'subtract', 'angle', 'projection'].includes(op);
  };

  const getOperationDescription = (op: Operation): string => {
    const descriptions = {
      'norm': 'Calculate the magnitude (length) of a vector',
      'dot': 'Calculate the dot product of two vectors',
      'cross': 'Calculate the cross product of two 3D vectors',
      'add': 'Add two vectors component-wise',
      'subtract': 'Subtract two vectors component-wise',
      'scalar': 'Multiply a vector by a scalar value',
      'angle': 'Calculate the angle between two vectors (in degrees)',
      'projection': 'Project one vector onto another',
      'unit': 'Find the unit vector (normalized vector)'
    };
    return descriptions[op] || '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
            Vector Calculator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Perform norm, dot product, cross product, projections, and angles with step-by-step breakdowns
          </p>
        </div>

        {/* Quick Examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-gray-400 mr-1">Presets:</span>
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
            onClick={() => loadExample('parallel')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Parallel
          </button>
          <button
            onClick={() => loadExample('perpendicular')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Perpendicular
          </button>
          <button
            onClick={() => loadExample('same')}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-[#FDF2F4] hover:text-[#7B1824] text-gray-700 rounded-lg transition cursor-pointer"
          >
            Same
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
              const newOp = e.target.value as Operation;
              setOperation(newOp);
              setUseSecondVector(getOperationRequiresSecondVector(newOp));
              setResult('');
              setSteps([]);
              setError('');
            }}
            className="px-3.5 py-2 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs"
          >
            <option value="norm">Norm (Magnitude)</option>
            <option value="dot">Dot Product</option>
            <option value="cross">Cross Product (3D)</option>
            <option value="add">Addition</option>
            <option value="subtract">Subtraction</option>
            <option value="scalar">Scalar Multiplication</option>
            <option value="angle">Angle Between</option>
            <option value="projection">Projection</option>
            <option value="unit">Unit Vector</option>
          </select>
          <span className="text-xs text-gray-500 font-medium italic">{getOperationDescription(operation)}</span>
        </div>
      </div>

      {/* Vector Inputs */}
      <div className="space-y-4">
        {/* Vector 1 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
              Vector v₁ ({vector1.length}D)
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
                disabled={vector1.length <= 1}
                className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                  vector1.length > 1
                    ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                - Remove
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
            {vector1.map((val, i) => (
              <input
                key={i}
                type="text"
                value={getDisplayValue(val)}
                onChange={(e) => updateVector(1, i, e.target.value)}
                onBlur={() => handleInputBlur(1, i)}
                className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
                placeholder="0"
                step="any"
              />
            ))}
            <span className="text-xs font-mono text-gray-500 ml-auto">v₁ = {formatVector(vector1)}</span>
          </div>
        </div>

        {/* Vector 2 (if needed) */}
        {useSecondVector && (
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
                Vector v₂ ({vector2.length}D)
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
                  disabled={vector2.length <= 1}
                  className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                    vector2.length > 1
                      ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  - Remove
                </button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center p-3 bg-gray-50/70 rounded-xl border border-gray-100">
              {vector2.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={getDisplayValue(val)}
                  onChange={(e) => updateVector(2, i, e.target.value)}
                  onBlur={() => handleInputBlur(2, i)}
                  className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
                  placeholder="0"
                  step="any"
                />
              ))}
              <span className="text-xs font-mono text-gray-500 ml-auto">v₂ = {formatVector(vector2)}</span>
            </div>
          </div>
        )}

        {/* Scalar input */}
        {operation === 'scalar' && (
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3">
            <h4 className="text-xs sm:text-sm font-bold text-gray-700">Scalar Value (k):</h4>
            <input
              type="number"
              value={scalarValue}
              onChange={(e) => setScalarValue(parseFloat(e.target.value) || 0)}
              className="w-24 px-3 py-1.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none text-center font-bold text-sm"
              step="any"
            />
          </div>
        )}
      </div>

      {/* Warnings */}
      {useSecondVector && vector1.length !== vector2.length && (
        <div className="p-3 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs text-[#7B1824] font-semibold">
          ⚠️ Warning: Vectors have different dimensions ({vector1.length}D vs {vector2.length}D). 
          {operation === 'dot' && ' Dot product requires equal dimensions.'}
          {operation === 'angle' && ' Angle calculation requires equal dimensions.'}
          {operation === 'projection' && ' Projection requires equal dimensions.'}
          {operation === 'add' && ' Addition requires equal dimensions.'}
          {operation === 'subtract' && ' Subtraction requires equal dimensions.'}
        </div>
      )}

      {operation === 'cross' && (vector1.length !== 3 || vector2.length !== 3) && (
        <div className="p-3 bg-[#FDF2F4] rounded-xl border border-[#7B1824]/20 text-xs text-[#7B1824] font-semibold">
          ⚠️ Cross product requires 3D vectors. Current dimensions: v₁={vector1.length}D, v₂={vector2.length}D
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
                  title={`Vector Calculator - ${operation.toUpperCase()}`}
                  data={result}
                  steps={steps}
                  inputs={`Vector 1 = (${vector1.join(', ')})${useSecondVector ? `\nVector 2 = (${vector2.join(', ')})` : ''}${operation === 'scalar' ? `\nScalar: ${scalarValue}` : ''}\nOperation: ${operation}`}
                  fileName={`vector_calc_${operation}`}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-base sm:text-lg font-bold text-gray-900 whitespace-pre-wrap">
              {result}
            </div>
          </div>

          {/* Steps */}
          {showSteps && steps.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Detailed Step Breakdown</h3>
              </div>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {steps.filter(s => s.trim() !== '').map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 font-mono text-xs sm:text-sm text-gray-800 whitespace-pre-wrap">
                        {step}
                      </div>
                    </div>
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
          Supported Vector Operations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {['Norm (Magnitude)', 'Dot Product', 'Cross Product (3D)', 'Vector Addition', 'Vector Subtraction', 'Scalar Multiplication', 'Angle Between Vectors', 'Vector Projection', 'Unit Vector'].map((op, i) => (
            <span key={i} className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              {op}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VectorCalculator;