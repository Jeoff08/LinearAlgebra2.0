// Solver/IncreasingDecreasingSolver.ts — Determines intervals where a function is increasing or decreasing
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, findRoots, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { performSignChart, formatIntervalList, type Interval } from '../Calculus_One_Calculator/Utils/intervalUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveIncreasingDecreasing(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a function (e.g. "x^3 - 3x^2" or "2x^3 - 6x^2 + 2").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}`,
    explanation: 'A function is strictly increasing where f\'(x) > 0 and strictly decreasing where f\'(x) < 0.',
  });

  const fPrime = symbolicDerivative(normalized) || '0';
  steps.push({
    title: "2. First Derivative f'(x)",
    expression: `f'(x) = d/dx [${prettify(normalized)}] = ${prettify(fPrime)}`,
    explanation: 'Compute the first derivative to find the slope function.',
  });

  const roots = findRoots(fPrime, -10, 10, 0.2);
  steps.push({
    title: "3. Find Partition Numbers (f'(x) = 0)",
    expression: roots.length > 0 ? `Critical points at x = ${roots.join(', ')}` : "No real critical points found in [-10, 10].",
    explanation: 'The critical points divide the real number line into test intervals.',
  });

  const signResults = performSignChart(
    (x) => evaluateAt(fPrime, x),
    roots,
    'Increasing (f\'(x) > 0)',
    'Decreasing (f\'(x) < 0)'
  );

  const signTableText = signResults.map(s => {
    const startStr = s.interval.start === -Infinity ? '-∞' : String(s.interval.start);
    const endStr = s.interval.end === Infinity ? '∞' : String(s.interval.end);
    return `• Interval (${startStr}, ${endStr}): Test x = ${s.testPoint} ⇒ f'(${s.testPoint}) = ${s.testValue} (${s.sign}) ⇒ ${s.behavior}`;
  }).join('\n');

  steps.push({
    title: '4. First Derivative Sign Chart',
    expression: signTableText,
    explanation: 'Pick a test value inside each interval to evaluate the sign of f\'(x).',
  });

  const increasingIntervals: Interval[] = signResults.filter(s => s.sign === '+').map(s => s.interval);
  const decreasingIntervals: Interval[] = signResults.filter(s => s.sign === '-').map(s => s.interval);

  const incStr = formatIntervalList(increasingIntervals);
  const decStr = formatIntervalList(decreasingIntervals);

  steps.push({
    title: '5. Interval Conclusions',
    expression: `Increasing on: ${incStr}\nDecreasing on: ${decStr}`,
    explanation: 'Combine intervals having matching signs.',
  });

  const finalAnswer = `Increasing on ${incStr}; Decreasing on ${decStr}`;
  const points = generateGraphPoints(normalized, -6, 6, 120);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Intervals of increase/decrease for f(x) = ${prettify(normalized)}.`,
    steps,
    explanation: 'Intervals where f\'(x) > 0 correspond to upward sloping sections of f(x); f\'(x) < 0 corresponds to downward sloping sections.',
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -6,
      xMax: 6,
    },
  };
}
