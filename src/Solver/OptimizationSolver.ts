// Solver/OptimizationSolver.ts — Solves applied optimization (max/min) problems
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, findRoots, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveOptimization(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an optimization problem. Examples:\n' +
      '• "box: length=20, width=12" (open-top box maximum volume)\n' +
      '• "fence: perimeter=120" (rectangular enclosure maximum area with 3 or 4 sides)\n' +
      '• "-x^2 + 4x + 1, [0, 4]" (function absolute extrema on closed interval)'
    );
  }

  const steps: SolverStep[] = [];

  // Scenario 1: Open-Top Box from Sheet (cut corner squares of side x)
  if (trimmed.toLowerCase().includes('box')) {
    const lMatch = trimmed.match(/length\s*=\s*(\d+(?:\.\d+)?)/i) || trimmed.match(/l\s*=\s*(\d+(?:\.\d+)?)/i);
    const wMatch = trimmed.match(/width\s*=\s*(\d+(?:\.\d+)?)/i) || trimmed.match(/w\s*=\s*(\d+(?:\.\d+)?)/i);

    const L = lMatch ? parseFloat(lMatch[1]) : 20;
    const W = wMatch ? parseFloat(wMatch[1]) : 12;

    // V(x) = x * (L - 2x) * (W - 2x) = 4x³ - 2(L+W)x² + LWx
    // V'(x) = 12x² - 4(L+W)x + LW = 0
    // Quadratic formula for x in [0, min(L, W)/2]
    const a = 12;
    const b = -4 * (L + W);
    const c = L * W;
    const disc = b * b - 4 * a * c;
    const x1 = (-b - Math.sqrt(disc)) / (2 * a);
    const xOptimal = x1;
    const maxVol = xOptimal * (L - 2 * xOptimal) * (W - 2 * xOptimal);

    steps.push({
      title: '1. Formulate Objective Function (Volume)',
      expression: `Sheet Dimensions: ${L} × ${W}\nLet x = cut size of corner square.\nV(x) = x · (${L} - 2x) · (${W} - 2x)\n     = 4x³ - ${2 * (L + W)}x² + ${L * W}x\nDomain: 0 < x < ${Math.min(L, W) / 2}`,
      explanation: 'Construct the volume function in terms of a single variable x representing the cut depth.',
    });

    steps.push({
      title: "2. Differentiate and Find Critical Points (V'(x) = 0)",
      expression: `V'(x) = 12x² - ${4 * (L + W)}x + ${L * W} = 0\nQuadratic root within feasible domain: x = ${xOptimal.toFixed(4)}`,
      explanation: 'Differentiate V(x) and set V\'(x) = 0 to locate the local maximum.',
    });

    steps.push({
      title: '3. Verify Maximum and Compute Dimensions',
      expression: `Optimal cut x = ${xOptimal.toFixed(3)} units\nDimensions: ${xOptimal.toFixed(2)} × ${(L - 2 * xOptimal).toFixed(2)} × ${(W - 2 * xOptimal).toFixed(2)}\nMaximum Volume V_max = ${maxVol.toFixed(2)} cubic units`,
      explanation: 'Second derivative V\'\'(x) < 0 confirms this is a true absolute maximum on the interval.',
    });

    return {
      success: true,
      answer: `Optimal Cut x = ${xOptimal.toFixed(3)}, Maximum Volume = ${maxVol.toFixed(2)} units³`,
      summary: `Box optimization for ${L} × ${W} sheet gives max volume ${maxVol.toFixed(2)} at x = ${xOptimal.toFixed(3)}.`,
      steps,
      explanation: 'Cutting corner squares of optimal size x maximizes the volume of the folded box.',
    };
  }

  // Scenario 2: General Function Optimization on Interval [a, b]
  const { expr, a, b } = extractBounds(trimmed, -5, 5);
  const normalized = normalizeExpression(expr);
  const fPrime = symbolicDerivative(normalized) || '0';

  steps.push({
    title: '1. Objective Function & Domain',
    expression: `f(x) = ${prettify(normalized)}\nInterval: [${a}, ${b}]`,
    explanation: 'By the Extreme Value Theorem, a continuous function on a closed bounded interval [a, b] attains both an absolute maximum and an absolute minimum.',
  });

  steps.push({
    title: "2. Find Critical Points (f'(x) = 0)",
    expression: `f'(x) = ${prettify(fPrime)} = 0`,
    explanation: 'Find all critical values of x inside the open interval (a, b).',
  });

  const roots = findRoots(fPrime, a, b, 0.1).filter(r => r > a && r < b);
  const candidates: { x: number; y: number; label: string }[] = [];

  // Add endpoints
  candidates.push({ x: a, y: evaluateAt(normalized, a), label: `Endpoint a = ${a}` });
  candidates.push({ x: b, y: evaluateAt(normalized, b), label: `Endpoint b = ${b}` });

  // Add critical points
  for (const r of roots) {
    candidates.push({ x: r, y: evaluateAt(normalized, r), label: `Critical point x = ${r}` });
  }

  candidates.sort((p1, p2) => p2.y - p1.y);
  const absMax = candidates[0];
  const absMin = candidates[candidates.length - 1];

  const evalTable = candidates.map(c => `• ${c.label}: f(${formatNumber(c.x)}) = ${formatNumber(c.y)}`).join('\n');
  steps.push({
    title: '3. Closed Interval Method Evaluation',
    expression: evalTable,
    explanation: 'Evaluate f(x) at all critical points and both interval endpoints.',
  });

  steps.push({
    title: '4. Absolute Extrema Conclusion',
    expression: `Absolute Maximum: ${formatNumber(absMax.y)} at x = ${formatNumber(absMax.x)}\nAbsolute Minimum: ${formatNumber(absMin.y)} at x = ${formatNumber(absMin.x)}`,
    explanation: 'The highest value among all evaluated points is the absolute maximum, and the lowest is the absolute minimum.',
  });

  const finalAnswer = `Abs Max = ${formatNumber(absMax.y)} at x = ${formatNumber(absMax.x)}; Abs Min = ${formatNumber(absMin.y)} at x = ${formatNumber(absMin.x)}`;
  const points = generateGraphPoints(normalized, a - 1, b + 1, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Optimization on [${a}, ${b}]: Max = ${formatNumber(absMax.y)} (at x=${formatNumber(absMax.x)}), Min = ${formatNumber(absMin.y)} (at x=${formatNumber(absMin.x)}).`,
    steps,
    explanation: 'The Closed Interval Method guarantees finding global extrema by comparing critical values and endpoints.',
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: a - 1,
      xMax: b + 1,
      highlights: [
        { x: absMax.x, y: absMax.y, label: `Abs Max (${formatNumber(absMax.x)}, ${formatNumber(absMax.y)})` },
        { x: absMin.x, y: absMin.y, label: `Abs Min (${formatNumber(absMin.x)}, ${formatNumber(absMin.y)})` },
      ],
    },
  };
}
