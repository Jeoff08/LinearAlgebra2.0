// Solver/CriticalPointsSolver.ts — Finds and classifies critical points of mathematical functions
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, findRoots, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveCriticalPoints(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a function to find critical points (e.g. "x^3 - 3x^2 - 9x + 5" or "2x^3 - 9x^2 + 12x").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}`,
    explanation: 'Critical points occur where f\'(x) = 0 or where f\'(x) is undefined.',
  });

  const fPrime = symbolicDerivative(normalized) || '0';
  const fDoublePrime = symbolicDerivative(fPrime) || '0';

  steps.push({
    title: "2. Compute the First Derivative f'(x)",
    expression: `f'(x) = d/dx [${prettify(normalized)}] = ${prettify(fPrime)}`,
    explanation: "Differentiate f(x) to determine the slope equation.",
  });

  steps.push({
    title: "3. Solve f'(x) = 0",
    expression: `${prettify(fPrime)} = 0`,
    explanation: "Find all real x values that make the first derivative zero.",
  });

  const roots = findRoots(fPrime, -10, 10, 0.2);
  const classified: { x: number; y: number; type: string; f2val: number }[] = [];

  for (const r of roots) {
    const yVal = evaluateAt(normalized, r);
    const f2Val = evaluateAt(fDoublePrime, r);
    let type = 'Critical Point';
    if (f2Val > 1e-4) {
      type = 'Local Minimum (f\'\'(x) > 0, Concave Up)';
    } else if (f2Val < -1e-4) {
      type = 'Local Maximum (f\'\'(x) < 0, Concave Down)';
    } else {
      type = 'Inconclusive / Saddle Point (f\'\'(x) = 0)';
    }
    classified.push({ x: r, y: yVal, type, f2val: f2Val });
  }

  if (classified.length > 0) {
    const classDetails = classified.map(c =>
      `• Point (${formatNumber(c.x)}, ${formatNumber(c.y)}):\n  f''(${c.x}) = ${formatNumber(c.f2val)} ⇒ ${c.type}`
    ).join('\n\n');

    steps.push({
      title: '4. Second Derivative Test Classification',
      expression: classDetails,
      explanation: 'Apply the Second Derivative Test: f\'\'(c) > 0 indicates a local minimum; f\'\'(c) < 0 indicates a local maximum.',
    });
  } else {
    steps.push({
      title: '4. Critical Point Evaluation',
      expression: 'No real critical points found in [-10, 10].',
      explanation: 'f\'(x) has no real zeros or the function is strictly monotonic.',
    });
  }

  const finalSummary = classified.length > 0
    ? classified.map(c => `(${formatNumber(c.x)}, ${formatNumber(c.y)}) [${c.type.split(' ')[1]}]`).join(', ')
    : 'None';

  const xMin = classified.length > 0 ? Math.min(...classified.map(c => c.x)) - 3 : -6;
  const xMax = classified.length > 0 ? Math.max(...classified.map(c => c.x)) + 3 : 6;
  const points = generateGraphPoints(normalized, xMin, xMax, 120);

  return {
    success: true,
    answer: `Critical Points: ${finalSummary}`,
    summary: `Found ${classified.length} critical point(s) for f(x) = ${prettify(normalized)}.`,
    steps,
    explanation: 'Critical points are candidates for local extrema (peaks and valleys) of the function.',
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin,
      xMax,
      highlights: classified.map(c => ({
        x: c.x,
        y: c.y,
        label: `${c.type.split(' ')[0]} ${c.type.split(' ')[1]} (${formatNumber(c.x)}, ${formatNumber(c.y)})`,
      })),
    },
  };
}
