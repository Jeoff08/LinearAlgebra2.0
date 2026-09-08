// components/TransposeCalculator.tsx
import React, { useState } from "react";
import PDFExport from "./PDFExport";

interface Step {
  title: string;
  description: string;
  matrix?: number[][];
  label?: string;
  explanation?: string;
}

const TransposeCalculator: React.FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  const [result, setResult] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);
  const [showExplanation, setShowExplanation] = useState(true);

  const calculateTranspose = () => {
    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;

    if (rows === 0 || cols === 0) {
      setResult("❌ Matrix is empty.");
      setSteps([]);
      return;
    }

    const stepsList: Step[] = [];

    // Step 1: Display original matrix
    stepsList.push({
      title: "Step 1: Original Matrix",
      description: `We start with the ${rows}×${cols} matrix A.`,
      matrix: matrix,
      label: "A =",
      explanation:
        "The original matrix is the input we want to transpose. The transpose operation will swap its rows with columns.",
    });

    // Step 2: Explain transpose operation
    stepsList.push({
      title: "Step 2: Transpose Operation",
      description:
        `The transpose of a matrix is obtained by swapping rows with columns.\n` +
        `A^T[i][j] = A[j][i]\n\n` +
        `The resulting matrix will be ${cols}×${rows}.`,
      explanation:
        "When we transpose a matrix, every element at position (i,j) moves to position (j,i). This means the first row becomes the first column, the second row becomes the second column, and so on.",
    });

    // Step 3: Show step-by-step transposition
    stepsList.push({
      title: "Step 3: Transpose Process",
      description: "Each element is moved from position (i,j) to (j,i):",
      explanation:
        "For each element in the original matrix, we record its position and the corresponding position it will occupy in the transposed matrix.",
    });

    // Show the mapping
    const mapping: string[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        mapping.push(
          `A[${i + 1}][${j + 1}] = ${matrix[i][j]} → A^T[${j + 1}][${i + 1}] = ${matrix[i][j]}`,
        );
      }
    }
    stepsList.push({
      title: "  Element Mapping",
      description: mapping.join("\n"),
      explanation:
        "This mapping shows exactly where each element from the original matrix goes in the transposed matrix. The position (i,j) in A becomes position (j,i) in A^T.",
    });

    // Step 4: Build the transposed matrix
    const transposed: number[][] = Array.from({ length: cols }, () =>
      Array(rows).fill(0),
    );
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposed[j][i] = matrix[i][j];
      }
    }

    stepsList.push({
      title: "Step 4: Transposed Matrix",
      description: `The transposed matrix A^T has size ${cols}×${rows}.`,
      matrix: transposed,
      label: "A^T =",
      explanation:
        "After moving all elements to their new positions, we get the transposed matrix. Notice how the dimensions have swapped from " +
        `${rows}×${cols} to ${cols}×${rows}.`,
    });

    // Step 5: Verify properties (if square matrix)
    if (rows === cols) {
      // Check if symmetric
      let isSymmetric = true;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (matrix[i][j] !== matrix[j][i]) {
            isSymmetric = false;
            break;
          }
        }
        if (!isSymmetric) break;
      }

      stepsList.push({
        title: "Step 5: Matrix Properties",
        description:
          `Since the matrix is ${rows}×${rows} (square), we can check special properties:\n` +
          `${isSymmetric ? "✅ The matrix is SYMMETRIC (A = A^T)" : "❌ The matrix is NOT symmetric (A ≠ A^T)"}\n` +
          `(A^T)^T = A is always true for any matrix.`,
        explanation:
          "For square matrices, we can check if they are symmetric (equal to their transpose). A symmetric matrix has the property A[i][j] = A[j][i] for all i,j.",
      });

      // Check if it's a symmetric matrix
      if (isSymmetric) {
        stepsList.push({
          title: "  Symmetric Matrix",
          description:
            "A symmetric matrix is equal to its transpose. This means the matrix is symmetric about its main diagonal.",
          explanation:
            "In a symmetric matrix, the elements on opposite sides of the main diagonal are equal. The transpose operation leaves a symmetric matrix unchanged.",
        });
      }

      // Check if it's a skew-symmetric matrix
      let isSkewSymmetric = true;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (matrix[i][j] !== -matrix[j][i]) {
            isSkewSymmetric = false;
            break;
          }
        }
        if (!isSkewSymmetric) break;
      }

      if (isSkewSymmetric) {
        stepsList.push({
          title: "  Skew-Symmetric Matrix",
          description:
            "A skew-symmetric matrix satisfies A = -A^T, meaning all diagonal elements are zero.",
          explanation:
            "A skew-symmetric matrix has zero diagonal elements and opposite values across the diagonal. For example, A[0][1] = -A[1][0].",
        });
      }
    }

    // Step 6: Final result with properties
    let finalDescription =
      `The transpose of A is:\n\n` +
      `A^T = \n${transposed.map((row) => row.map((v) => v.toFixed(2)).join(" ")).join("\n")}`;

    if (rows === cols) {
      // Calculate if it's symmetric
      let isSymmetric = true;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (matrix[i][j] !== matrix[j][i]) {
            isSymmetric = false;
            break;
          }
        }
        if (!isSymmetric) break;
      }

      if (isSymmetric) {
        finalDescription += `\n\n✅ This is a SYMMETRIC matrix (A = A^T)`;
      } else {
        finalDescription += `\n\n❌ This is NOT a symmetric matrix (A ≠ A^T)`;
      }
    } else {
      finalDescription += `\n\n📊 The matrix is ${rows}×${cols} (non-square). Transpose gives ${cols}×${rows}.`;
    }

    stepsList.push({
      title: "✅ Final Result",
      description: finalDescription,
      explanation:
        "The transpose operation is complete. The resulting matrix has all elements correctly positioned, and we have identified any special properties of the original matrix.",
    });

    setSteps(stepsList);

    // Set result for display
    const resultText =
      "=== TRANSPOSE CALCULATION STEPS ===\n\n" +
      stepsList
        .map(
          (step) =>
            `${step.title}\n${step.description}\n${step.matrix ? formatMatrix(step.matrix, step.label || "") : ""}\n`,
        )
        .join("\n");

    setResult(resultText);
  };

  const formatMatrix = (matrix: number[][], label: string): string => {
    if (!matrix || matrix.length === 0) return "";
    const formatted = matrix
      .map((row) => row.map((v) => v.toFixed(2)).join(" "))
      .join("\n");
    return `${label}\n${formatted}`;
  };

  const handleMatrixChange = (
    rowIndex: number,
    colIndex: number,
    value: string,
  ) => {
    const newM = [...matrix];
    if (value === "" || value === "-") {
      newM[rowIndex][colIndex] = 0;
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        newM[rowIndex][colIndex] = num;
      }
    }
    setMatrix(newM);
    setResult("");
    setSteps([]);
  };

  const addRow = () => {
    const cols = matrix[0]?.length || 2;
    setMatrix([...matrix, Array(cols).fill(0)]);
    setResult("");
    setSteps([]);
  };

  const addColumn = () => {
    setMatrix(matrix.map((row) => [...row, 0]));
    setResult("");
    setSteps([]);
  };

  const removeRow = () => {
    if (matrix.length > 1) {
      setMatrix(matrix.slice(0, -1));
      setResult("");
      setSteps([]);
    }
  };

  const removeColumn = () => {
    if ((matrix[0]?.length || 0) > 1) {
      setMatrix(matrix.map((row) => row.slice(0, -1)));
      setResult("");
      setSteps([]);
    }
  };

  const clearMatrix = () => {
    setMatrix(matrix.map((row) => row.map(() => 0)));
    setResult("");
    setSteps([]);
  };

  const renderMatrix = (matrix: number[][], label?: string) => {
    if (!matrix || matrix.length === 0) return null;
    return (
      <div className="mt-2">
        {label && <span className="font-mono text-xs font-bold text-[#7B1824]">{label}</span>}
        <div className="inline-block mt-1 border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
          {matrix.map((row, i) => (
            <div key={i} className="flex border-b border-gray-100 last:border-0">
              {row.map((val, j) => (
                <div
                  key={j}
                  className="w-16 sm:w-20 px-2 sm:px-3 py-1.5 text-center font-mono text-xs sm:text-sm font-bold border-r border-gray-100 last:border-0 bg-white text-gray-900"
                >
                  {val.toFixed(2)}
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
      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7B1824]"></span>
            Matrix Transpose Calculator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Compute the transpose (Aᵀ) and detect symmetry / skew-symmetry
          </p>
        </div>
      </div>

      {/* Input Matrix Card */}
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
              onClick={addColumn}
              className="text-xs px-2.5 py-1 bg-[#FDF2F4] text-[#7B1824] hover:bg-[#7B1824] hover:text-white rounded-lg font-semibold transition cursor-pointer"
            >
              +Col
            </button>
            <button
              onClick={removeColumn}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition ${
                (matrix[0]?.length || 0) > 1
                  ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
              disabled={(matrix[0]?.length || 0) <= 1}
            >
              -Col
            </button>
            <button
              onClick={clearMatrix}
              className="text-xs px-2.5 py-1 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg font-semibold transition cursor-pointer ml-1"
            >
              Clear
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
                        value={val === 0 ? "" : val}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            inputValue === "" ||
                            inputValue === "-" ||
                            /^-?\d*\.?\d*$/.test(inputValue)
                          ) {
                            handleMatrixChange(i, j, inputValue);
                          }
                        }}
                        className="w-16 sm:w-18 px-2 py-1.5 text-center font-mono font-bold text-sm bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7B1824]/20 focus:border-[#7B1824] outline-none transition shadow-2xs"
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

      {/* Calculate Button */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={calculateTranspose}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7B1824] hover:bg-[#60101B] text-white font-bold rounded-xl shadow-md shadow-[#7B1824]/20 transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Calculate Transpose
        </button>
        {steps.length > 0 && (
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="px-4 py-2 border border-gray-200 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition text-xs shadow-2xs cursor-pointer inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {showExplanation ? "Hide" : "Show"} Step Breakdown
          </button>
        )}
      </div>

      {steps.length > 0 && (
        <div className="space-y-6">
          {/* Result Summary */}
          <div className="rounded-2xl border border-[#7B1824]/30 bg-gradient-to-br from-[#FFF8F9] to-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#7B1824]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B1824]">Transposed Matrix (Aᵀ)</h3>
              </div>
              <div className="flex-shrink-0">
                <PDFExport
                  title="Transpose Calculator (Aᵀ)"
                  data={`Original Size: ${matrix.length}×${matrix[0]?.length || 0}\nTransposed Size: ${matrix[0]?.length || 0}×${matrix.length}\n${result}`}
                  steps={steps.map(s => `${s.title}\n${s.description}${s.matrix ? '\n' + s.matrix.map(r => `[${r.map(v => v.toFixed(4)).join(', ')}]`).join('\n') : ''}${s.explanation ? ` - ${s.explanation}` : ''}`)}
                  inputs={`Matrix A (${matrix.length}×${matrix[0]?.length || 0}):\n${matrix.map(r => `[${r.join(', ')}]`).join('\n')}`}
                  fileName="matrix_transpose"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-bold uppercase text-gray-400 block">Original Size</span>
                <span className="font-mono text-xs font-bold text-gray-800">{matrix.length} × {matrix[0]?.length || 0}</span>
              </div>
              <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-bold uppercase text-gray-400 block">Transposed Size</span>
                <span className="font-mono text-xs font-bold text-gray-800">{matrix[0]?.length || 0} × {matrix.length}</span>
              </div>
              {matrix.length === matrix[0]?.length && (
                <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Matrix Type</span>
                  <span className="font-mono text-xs font-bold text-[#7B1824]">
                    {steps.some(step => step.title.includes("Symmetric") && step.description.includes("✅")) ? "Symmetric" : "Non-Symmetric"}
                  </span>
                </div>
              )}
            </div>

            {result && (
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#F0D5D8] shadow-inner font-mono text-sm sm:text-base font-bold text-gray-900 whitespace-pre-wrap">
                {result}
              </div>
            )}
          </div>

          {/* Step-by-Step Explanation */}
          {showExplanation && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#7B1824]"></span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Detailed Step Breakdown</h3>
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-50 transition space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#7B1824] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-1">
                        <p className="font-bold text-xs sm:text-sm text-gray-900">{step.title}</p>
                        <div className="font-mono text-xs text-gray-700 whitespace-pre-wrap">{step.description}</div>
                        {step.matrix && step.matrix.length > 0 && (
                          <div className="mt-2">
                            {renderMatrix(step.matrix, step.label)}
                          </div>
                        )}
                      </div>
                    </div>
                    {step.explanation && (
                      <div className="pt-2 pl-8 border-t border-gray-200/60">
                        <p className="text-xs text-gray-500 italic">
                          <span className="font-semibold text-[#7B1824] not-italic">Note: </span>
                          {step.explanation}
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
          Transpose Rules & Properties
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Rows and columns are swapped: (Aᵀ)ᵢⱼ = Aⱼᵢ</li>
          <li>Double transpose property: (Aᵀ)ᵀ = A</li>
          <li>For square matrices, symmetric if A = Aᵀ, skew-symmetric if A = -Aᵀ</li>
          <li>Sum property: (A + B)ᵀ = Aᵀ + Bᵀ; Product property: (AB)ᵀ = BᵀAᵀ</li>
        </ul>
      </div>
    </div>
  );
};

export default TransposeCalculator;
