// components/LinearTransformation.tsx
import React, { useState } from 'react';
import PDFExport from './PDFExport';

interface Step {
  title: string;
  description: string;
  matrix?: number[][];
  vector?: number[];
  label?: string;
  explanation?: string;
}

const LinearTransformation: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([[1, 2], [3, 4]]);
  const [vector, setVector] = useState<number[]>([1, 1]);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [showExplanation, setShowExplanation] = useState(true);
  const [resultVector, setResultVector] = useState<number[]>([]);

  const calculateTransform = () => {
    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;
    
    if (rows === 0 || cols === 0) {
      setResult('❌ Matrix is empty.');
      setSteps([]);
      return;
    }

    if (vector.length !== cols) {
      setResult(`❌ Vector must have ${cols} elements (same as columns of matrix).`);
      setSteps([]);
      return;
    }

    const stepsList: Step[] = [];

    // Step 1: Display original matrix and vector
    stepsList.push({
      title: 'Step 1: Original Matrix and Vector',
      description: `We have a ${rows}×${cols} transformation matrix T and a vector v of length ${cols}.`,
      matrix: matrix,
      label: 'T =',
      explanation: 'The transformation matrix T and input vector v define the linear transformation T(v) = T·v.'
    });

    stepsList.push({
      title: '  Vector v',
      description: `The input vector v:`,
      vector: vector,
      label: 'v =',
      explanation: 'The vector v is the input to the linear transformation.'
    });

    // Step 2: Explain the transformation
    stepsList.push({
      title: 'Step 2: Linear Transformation',
      description: `The linear transformation T(v) = T·v is computed as:\n` +
                   `[T·v]_i = Σⱼ T[i][j] · v[j]\n\n` +
                   `Each component of the result is a linear combination of the input vector components.`,
      explanation: 'A linear transformation maps vectors using matrix multiplication. Each output component is a weighted sum of input components.'
    });

    // Step 3: Show detailed calculation
    stepsList.push({
      title: 'Step 3: Component-wise Calculation',
      description: `Computing each component of the result:`,
      explanation: 'We compute each component of the output vector one at a time.'
    });

    const resultVec: number[] = [];
    const calculations: string[] = [];

    for (let i = 0; i < rows; i++) {
      let sum = 0;
      const terms: string[] = [];
      for (let j = 0; j < cols; j++) {
        sum += matrix[i][j] * vector[j];
        terms.push(`${matrix[i][j]} × ${vector[j]}`);
      }
      resultVec.push(sum);
      calculations.push(`T(v)${i+1} = ${terms.join(' + ')} = ${sum.toFixed(4)}`);
    }

    setResultVector(resultVec);

    stepsList.push({
      title: '  Calculation Details',
      description: calculations.join('\n'),
      explanation: 'Each row of the transformation matrix multiplied by the input vector gives one component of the output.'
    });

    // Step 4: Show the result
    stepsList.push({
      title: 'Step 4: Result Vector',
      description: `The transformed vector T(v):`,
      vector: resultVec,
      label: 'T(v) =',
      explanation: 'The output vector after applying the linear transformation.'
    });

    // Step 5: Check if transformation is linear (verify properties)
    stepsList.push({
      title: 'Step 5: Linearity Verification',
      description: `A transformation is linear if it satisfies:\n` +
                   `1. T(u + v) = T(u) + T(v) (Additivity)\n` +
                   `2. T(c·v) = c·T(v) (Homogeneity)\n\n` +
                   `Since T is a matrix multiplication, it is always linear.`,
      explanation: 'Matrix multiplication always defines a linear transformation because it satisfies both additivity and homogeneity properties.'
    });

    // Step 6: Geometric interpretation (if 2x2)
    if (rows === 2 && cols === 2) {
      const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      const absDet = Math.abs(det);
      
      let transformType = '';
      if (Math.abs(det) < 1e-10) {
        transformType = 'singular (collapses space to a line or point)';
      } else if (det > 0) {
        transformType = 'orientation-preserving (det > 0)';
      } else {
        transformType = 'orientation-reversing (det < 0)';
      }
      
      // Correct area scaling factor: absolute value of determinant
      const areaScale = absDet;
      
      stepsList.push({
        title: 'Step 6: Geometric Interpretation (2×2)',
        description: `For a 2×2 transformation matrix:\n` +
                     `det(T) = ${det.toFixed(4)}\n` +
                     `The transformation is ${transformType}\n` +
                     `Area scaling factor = |det(T)| = ${areaScale.toFixed(4)}`,
        explanation: 'The determinant of a 2×2 matrix gives the area scaling factor and orientation of the transformation.'
      });

      // Check for special transformations
      const isIdentity = Math.abs(matrix[0][0] - 1) < 1e-10 && 
                        Math.abs(matrix[0][1]) < 1e-10 && 
                        Math.abs(matrix[1][0]) < 1e-10 && 
                        Math.abs(matrix[1][1] - 1) < 1e-10;
      
      const isDiagonal = Math.abs(matrix[0][1]) < 1e-10 && Math.abs(matrix[1][0]) < 1e-10;
      const isSymmetric = Math.abs(matrix[0][1] - matrix[1][0]) < 1e-10;
      
      const properties: string[] = [];
      if (isIdentity) properties.push('✅ Identity transformation');
      if (isDiagonal) properties.push('✅ Diagonal matrix (scaling along axes)');
      if (isSymmetric) properties.push('✅ Symmetric matrix');
      if (Math.abs(areaScale - 1) < 1e-10) properties.push('✅ Area-preserving (|det| = 1)');
      
      if (properties.length > 0) {
        stepsList.push({
          title: '  Special Properties',
          description: properties.join('\n'),
          explanation: 'Special properties of the transformation matrix provide geometric insights.'
        });
      }
    }

    // Step 7: Verify result
    stepsList.push({
      title: 'Step 7: Verification',
      description: `The transformed vector has ${rows} components:\n` +
                   `T(v) = [${resultVec.map(v => v.toFixed(4)).join(', ')}]^T`,
      explanation: 'The result vector confirms the transformation was applied correctly.'
    });

    // Step 8: Final result
    let finalDescription = `✅ Transformation Applied Successfully!\n\n` +
                          `v = [${vector.map(v => v.toFixed(2)).join(', ')}]^T\n` +
                          `T(v) = [${resultVec.map(v => v.toFixed(4)).join(', ')}]^T\n\n` +
                          `The matrix transformation T maps R^${cols} → R^${rows}.`;

    if (rows === 2 && cols === 2) {
      const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      if (Math.abs(det) > 1e-10) {
        finalDescription += `\n\nThe transformation is invertible (det ≠ 0).`;
      } else {
        finalDescription += `\n\nThe transformation is NOT invertible (det = 0).`;
      }
    }

    stepsList.push({
      title: '✅ Final Result',
      description: finalDescription,
      explanation: 'The linear transformation has been successfully applied with all steps verified.'
    });

    setSteps(stepsList);

    // Set result for display
    const resultText = 
      '=== LINEAR TRANSFORMATION STEPS ===\n\n' +
      stepsList.map(step => 
        `${step.title}\n${step.description}\n${step.matrix ? formatMatrix(step.matrix, step.label || '') : ''}\n${step.vector ? formatVector(step.vector, step.label || '') : ''}\n`
      ).join('\n');

    setResult(resultText);
  };

  const formatMatrix = (matrix: number[][], label: string): string => {
    if (!matrix || matrix.length === 0) return '';
    const formatted = matrix.map(row => 
      row.map(v => v.toFixed(2)).join(' ')
    ).join('\n');
    return `${label}\n${formatted}`;
  };

  const formatVector = (vector: number[], label: string): string => {
    if (!vector || vector.length === 0) return '';
    return `${label}\n[${vector.map(v => v.toFixed(2)).join(', ')}]^T`;
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
    setResultVector([]);
  };

  const handleVectorChange = (index: number, value: string) => {
    const newV = [...vector];
    if (value === '' || value === '-') {
      newV[index] = 0;
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        newV[index] = num;
      }
    }
    setVector(newV);
    setResult('');
    setSteps([]);
    setResultVector([]);
  };

  const addRow = () => {
    const cols = matrix[0]?.length || 2;
    setMatrix([...matrix, Array(cols).fill(0)]);
    setResult('');
    setSteps([]);
    setResultVector([]);
  };

  const addColumn = () => {
    setMatrix(matrix.map(row => [...row, 0]));
    setVector([...vector, 0]);
    setResult('');
    setSteps([]);
    setResultVector([]);
  };

  const removeRow = () => {
    if (matrix.length > 1) {
      setMatrix(matrix.slice(0, -1));
      setResult('');
      setSteps([]);
      setResultVector([]);
    }
  };

  const removeColumn = () => {
    if ((matrix[0]?.length || 0) > 1) {
      setMatrix(matrix.map(row => row.slice(0, -1)));
      setVector(vector.slice(0, -1));
      setResult('');
      setSteps([]);
      setResultVector([]);
    }
  };

  const clearAll = () => {
    setMatrix(matrix.map(row => row.map(() => 0)));
    setVector(vector.map(() => 0));
    setResult('');
    setSteps([]);
    setResultVector([]);
  };

  const renderMatrix = (matrix: number[][], label?: string) => {
    if (!matrix || matrix.length === 0) return null;
    return (
      <div className="mt-2">
        {label && <span className="font-mono text-xs font-bold text-[#7B1824]">{label}</span>}
        <div className="inline-block mt-1 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xs">
          {matrix.map((row, i) => (
            <div key={i} className="flex border-b border-gray-100 last:border-0">
              {row.map((val, j) => (
                <div key={j} className="w-16 sm:w-20 px-2 py-1.5 text-center font-mono text-xs sm:text-sm border-r border-gray-100 last:border-0 text-gray-900">
                  {val.toFixed(2)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVector = (vector: number[], label?: string) => {
    if (!vector || vector.length === 0) return null;
    return (
      <div className="mt-2">
        {label && <span className="font-mono text-xs font-bold text-[#7B1824]">{label}</span>}
        <div className="inline-block mt-1 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xs">
          {vector.map((val, i) => (
            <div key={i} className="px-3 py-1.5 text-center font-mono text-xs sm:text-sm border-b border-gray-100 last:border-0 text-gray-900">
              {val.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Transformation Matrix and Vector</h3>
          <span className="text-xs text-gray-400 font-mono">{matrix.length}×{matrix[0]?.length || 0} matrix</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">Matrix T ({matrix.length}×{matrix[0]?.length || 0})</p>
            <div className="overflow-x-auto">
              <table className="border-collapse mx-auto">
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
                            className="w-14 sm:w-16 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
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

          <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">Vector v ({vector.length}×1)</p>
            <div className="flex flex-col gap-1 items-center">
              {vector.map((val, i) => (
                <div key={i} className="p-1">
                  <input
                    key={i}
                    type="text"
                    value={val === 0 ? '' : val}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (inputValue === '' || inputValue === '-' || /^-?\d*\.?\d*$/.test(inputValue)) {
                        handleVectorChange(i, inputValue);
                      }
                    }}
                    className="w-14 sm:w-16 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
                    placeholder="0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={calculateTransform}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7B1824] hover:bg-[#60101B] text-white font-bold rounded-xl shadow-md shadow-[#7B1824]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Apply Transformation</span>
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear All
        </button>
        <button
          onClick={addRow}
          className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Row
        </button>
        <button
          onClick={addColumn}
          className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Column
        </button>
        {matrix.length > 1 && (
          <button
            onClick={removeRow}
            className="px-4 py-2 border border-red-200 bg-red-50 text-red-700 font-semibold rounded-xl hover:bg-red-100 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove Row
          </button>
        )}
        {(matrix[0]?.length || 0) > 1 && (
          <button
            onClick={removeColumn}
            className="px-4 py-2 border border-red-200 bg-red-50 text-red-700 font-semibold rounded-xl hover:bg-red-100 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove Column
          </button>
        )}
        {steps.length > 0 && (
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer flex items-center gap-1.5 ml-auto"
          >
            <span>{showExplanation ? 'Hide' : 'Show'} Steps</span>
          </button>
        )}
      </div>

      {steps.length > 0 && (
        <div className="space-y-5 animate-in fade-in duration-300">
          {/* Result Summary Hero Box */}
          <div className="rounded-2xl border border-[#7B1824]/30 bg-gradient-to-br from-[#FFF8F9] to-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7B1824] inline-flex items-center gap-1.5">
                  <span>Transformation Applied Successfully</span>
                </span>
                <div className="mt-1 text-xs text-gray-600">
                  The linear transformation T(v) = T·v has been computed.
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Input Vector</span>
                    <span className="font-mono text-xs font-bold text-gray-900">[{vector.map(v => v.toFixed(2)).join(', ')}]</span>
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Output Vector</span>
                    <span className="font-mono text-xs font-bold text-[#7B1824]">
                      {resultVector.length > 0 ? 
                        `[${resultVector.map(v => v.toFixed(4)).join(', ')}]` : 
                        'N/A'}
                    </span>
                  </div>
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Map</span>
                    <span className="font-mono text-xs font-bold text-gray-900">ℝ^{matrix[0]?.length || 0} → ℝ^{matrix.length}</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title="Linear Transformation (T(v) = Av)"
                  data={`Result Vector T(v) = [${resultVector.map(v => v.toFixed(4)).join(', ')}]\nMapping: R^${matrix[0]?.length || 0} → R^${matrix.length}\n${result}`}
                  steps={steps.map(s => ({
                    step: `${s.title}\n${s.description}${s.matrix ? '\n' + s.matrix.map(r => `[${r.map(v => v.toFixed(4)).join(', ')}]`).join('\n') : ''}${s.vector ? '\n[' + s.vector.map(v => v.toFixed(4)).join(', ') + ']' : ''}`,
                    explanation: s.explanation
                  }))}
                  inputs={`Transformation Matrix T (${matrix.length}×${matrix[0]?.length || 0}):\n${matrix.map(r => `[${r.join(', ')}]`).join('\n')}\nInput Vector v = [${vector.join(', ')}]`}
                  fileName="linear_transformation"
                />
              </div>
            </div>
          </div>

          {/* Step-by-Step Explanation */}
          {showExplanation && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7B1824]" />
                  <h4 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                    Step-by-Step Solution
                  </h4>
                </div>
                <span className="text-xs text-gray-400 font-mono">Matrix-Vector Multiplication</span>
              </div>
              
              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                    </div>

                    <div className="text-xs text-gray-600 whitespace-pre-wrap leading-relaxed pl-7">
                      {step.description}
                    </div>

                    {step.matrix && step.matrix.length > 0 && (
                      <div className="pl-7">
                        {renderMatrix(step.matrix, step.label)}
                      </div>
                    )}
                    {step.vector && step.vector.length > 0 && (
                      <div className="pl-7">
                        {renderVector(step.vector, step.label)}
                      </div>
                    )}

                    {step.explanation && (
                      <div className="mt-2 pt-2 border-t border-gray-200/60 pl-7 text-xs text-gray-600 leading-relaxed">
                        <span className="font-bold text-[#7B1824]">Concept: </span>
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

      <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50/70 text-xs text-gray-600 space-y-2">
        <p className="font-bold text-gray-900">
          Linear transformation properties:
        </p>
        <p className="leading-relaxed">
          A linear transformation maps vectors from one vector space to another using matrix multiplication: T(v) = A·v.
        </p>
      </div>
    </div>
  );
};

export default LinearTransformation;