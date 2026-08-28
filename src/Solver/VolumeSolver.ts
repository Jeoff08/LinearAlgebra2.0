// Solver/VolumeSolver.ts — Solves volumes of revolution using Disk, Washer, and Shell methods
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { numericalIntegrate, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveVolume(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a volume of revolution problem. Examples:\n' +
      '• "y = sqrt(x), [0, 4], about x-axis" (Disk Method)\n' +
      '• "y = x^2, y = 4, [0, 2], about x-axis" (Washer Method)\n' +
      '• "y = 2x - x^2, [0, 2], about y-axis" (Cylindrical Shells Method)'
    );
  }

  const { expr, a, b, aStr, bStr } = extractBounds(trimmed, 0, 2);
  const normalized = normalizeExpression(expr);
  const isAboutY = trimmed.toLowerCase().includes('about y') || trimmed.toLowerCase().includes('shell');

  const steps: SolverStep[] = [];

  if (isAboutY) {
    // Cylindrical Shells Method: V = 2π ∫ x * f(x) dx
    steps.push({
      title: '1. Method Selection: Cylindrical Shells',
      expression: `Volume V = 2π ∫[a to b] (Radius) · (Height) dx\nRadius r(x) = x\nHeight h(x) = f(x) = ${prettify(normalized)}\nLimits: [${aStr}, ${bStr}]`,
      explanation: 'When rotating a region around the vertical y-axis, the cylindrical shells method integrates concentric cylindrical sheets.',
    });

    const shellIntegrand = `(${normalized}) * x`;
    const numInt = numericalIntegrate(shellIntegrand, a, b, 200);
    const volumeVal = 2 * Math.PI * numInt;

    steps.push({
      title: '2. Set Up Shell Integral',
      expression: `V = 2π ∫[${aStr} to ${bStr}] x · (${prettify(normalized)}) dx`,
      explanation: 'Multiply radius x by height f(x) and the circumference multiplier 2π.',
    });

    steps.push({
      title: '3. Evaluate Definite Integral',
      expression: `∫[${aStr} to ${bStr}] x·f(x) dx = ${formatNumber(numInt)}\nVolume V = 2π · (${formatNumber(numInt)}) = ${formatNumber(2 * numInt)}π ≈ ${volumeVal.toFixed(4)} cubic units`,
      explanation: 'Evaluate the definite integral and multiply by 2π.',
    });

    const finalAnswer = `V = ${formatNumber(2 * numInt)}π ≈ ${volumeVal.toFixed(4)} units³`;
    return {
      success: true,
      answer: finalAnswer,
      summary: `Volume of revolution (Shells around y-axis): ${finalAnswer}.`,
      steps,
      explanation: 'The Shell Method sums up thin cylindrical sheets to compute the 3D solid volume.',
    };
  }

  // Disk / Washer Method: V = π ∫ [R(x)]^2 dx
  steps.push({
    title: '1. Method Selection: Disk / Washer Method',
    expression: `Volume V = π ∫[a to b] [R(x)]² dx\nRadius R(x) = f(x) = ${prettify(normalized)}\nLimits: a = ${aStr}, b = ${bStr}`,
    explanation: 'When rotating a region around the horizontal x-axis, the disk method sums circular cross-sectional disks with area A(x) = π[R(x)]².',
  });

  const diskIntegrand = `(${normalized})^2`;
  const numInt = numericalIntegrate(diskIntegrand, a, b, 200);
  const volumeVal = Math.PI * numInt;

  steps.push({
    title: '2. Set Up Disk Integral',
    expression: `V = π ∫[${aStr} to ${bStr}] [${prettify(normalized)}]² dx`,
    explanation: 'Square the radius function R(x) and integrate across the bounds.',
  });

  steps.push({
    title: '3. Compute Solid of Revolution Volume',
    expression: `∫[${aStr} to ${bStr}] [f(x)]² dx = ${formatNumber(numInt)}\nVolume V = π · (${formatNumber(numInt)}) = ${formatNumber(numInt)}π ≈ ${volumeVal.toFixed(4)} cubic units`,
    explanation: 'Multiply the integrated squared radius by π.',
  });

  const finalAnswer = `V = ${formatNumber(numInt)}π ≈ ${volumeVal.toFixed(4)} units³`;
  const points = generateGraphPoints(normalized, a - 1, b + 1, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Volume of revolution (Disk method around x-axis): ${finalAnswer}.`,
    steps,
    explanation: 'The Disk Method computes the volume of a solid formed by revolving a 2D curve around an axis of rotation.',
    graph: {
      points,
      equation: `R(x) = ${prettify(normalized)}`,
      xMin: a - 1,
      xMax: b + 1,
      shadedRegion: { from: a, to: b, label: `Volume = ${finalAnswer}` },
    },
  };
}
