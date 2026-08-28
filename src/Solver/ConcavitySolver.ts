// Solver/ConcavitySolver.ts — Determines intervals of concavity and inflection points
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, findRoots, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { performSignChart, formatIntervalList, type Interval } from '../Calculus_One_Calculator/Utils/intervalUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveConcavity(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a function (e.g. "x^3 - 6x^2 + 9x" or "x^4 - 4x^3").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}`,
    explanation: 'Concavity is determined by the sign of the second derivative: f\'\'(x) > 0 (Concave Up / Bowl shaped) and f\'\'(x) < 0 (Concave Down / Dome shaped).',
  });

  const fPrime = symbolicDerivative(normalized) || '0';
  const fDoublePrime = symbolicDerivative(fPrime) || '0';

  steps.push({
    title: "2. Second Derivative f''(x)",
    expression: `f'(x)  = ${prettify(fPrime)}\nf''(x) = d/dx [f'(x)] = ${prettify(fDoublePrime)}`,
    explanation: 'Differentiate twice to find the concavity equation.',
  });

  const inflectionCandidates = findRoots(fDoublePrime, -10, 10, 0.2);
  steps.push({
    title: "3. Potential Inflection Points (f''(x) = 0)",
    expression: inflectionCandidates.length > 0
      ? `Roots of f''(x) = 0 at x = ${inflectionCandidates.join(', ')}`
      : 'No real zeros for f\'\'(x) found in [-10, 10].',
    explanation: 'Inflection points occur where f\'\'(x) = 0 (or is undefined) AND the concavity changes sign.',
  });

  const signResults = performSignChart(
    (x) => evaluateAt(fDoublePrime, x),
    inflectionCandidates,
    'Concave Up (∪)',
    'Concave Down (∩)'
  );

  const signTableText = signResults.map(s => {
    const startStr = s.interval.start === -Infinity ? '-∞' : String(s.interval.start);
    const endStr = s.interval.end === Infinity ? '∞' : String(s.interval.end);
    return `• Interval (${startStr}, ${endStr}): Test x = ${s.testPoint} ⇒ f''(${s.testPoint}) = ${s.testValue} (${s.sign}) ⇒ ${s.behavior}`;
  }).join('\n');

  steps.push({
    title: '4. Second Derivative Sign Chart',
    expression: signTableText,
    explanation: 'Test values in each interval to establish the sign of f\'\'(x).',
  });

  const cuIntervals: Interval[] = signResults.filter(s => s.sign === '+').map(s => s.interval);
  const cdIntervals: Interval[] = signResults.filter(s => s.sign === '-').map(s => s.interval);

  const cuStr = formatIntervalList(cuIntervals);
  const cdStr = formatIntervalList(cdIntervals);

  // Inflection points where sign flips across boundary
  const confirmedInflections: { x: number; y: number }[] = [];
  for (let i = 0; i < signResults.length - 1; i++) {
    if (signResults[i].sign !== signResults[i + 1].sign && signResults[i].sign !== '0' && signResults[i + 1].sign !== '0') {
      const xVal = signResults[i].interval.end;
      const yVal = evaluateAt(normalized, xVal);
      confirmedInflections.push({ x: xVal, y: yVal });
    }
  }

  const inflectionSummary = confirmedInflections.length > 0
    ? confirmedInflections.map(p => `(${formatNumber(p.x)}, ${formatNumber(p.y)})`).join(', ')
    : 'None';

  steps.push({
    title: '5. Inflection Points',
    expression: `Points of Inflection: ${inflectionSummary}`,
    explanation: 'An inflection point is a point on the graph where the concavity changes from concave up to concave down or vice-versa.',
  });

  const finalAnswer = `Concave Up on ${cuStr}; Concave Down on ${cdStr}; Inflection Points: ${inflectionSummary}`;
  const points = generateGraphPoints(normalized, -6, 6, 120);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Concavity analysis for f(x) = ${prettify(normalized)}. Inflection point(s): ${inflectionSummary}.`,
    steps,
    explanation: 'Inflection points mark transitions between curvature opening upward vs downward.',
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -6,
      xMax: 6,
      highlights: confirmedInflections.map(p => ({
        x: p.x,
        y: p.y,
        label: `Inflection (${formatNumber(p.x)}, ${formatNumber(p.y)})`,
      })),
    },
  };
}
