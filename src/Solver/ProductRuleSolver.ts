// Solver/ProductRuleSolver.ts — Solves derivatives requiring the product rule: (u · v)' = u'v + uv'
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyDerivative } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveProductRule(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a product function (e.g. "(x^2 + 1) * sin(x)" or "x^3 * e^x").');
  }

  // Split on top-level multiplication or identify factors
  let u = 'x';
  let v = normalized;

  // Check for explicit *
  const multIndex = normalized.indexOf('*');
  if (multIndex !== -1) {
    u = normalized.slice(0, multIndex).trim().replace(/^\(|\)$/g, '');
    v = normalized.slice(multIndex + 1).trim().replace(/^\(|\)$/g, '');
  } else {
    // Try to separate e.g. x^2 sin(x) or x*e^x
    const match = normalized.match(/^(\(?.+?\)?)(sin\(.+\)|cos\(.+\)|tan\(.+\)|exp\(.+\)|e\^.+|\(?.+?\)?)$/);
    if (match) {
      u = match[1].replace(/^\(|\)$/g, '');
      v = match[2].replace(/^\(|\)$/g, '');
    }
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Identify the Factors u(x) and v(x)',
    expression: `f(x) = u(x) · v(x)\n  u(x) = ${prettify(u)}\n  v(x) = ${prettify(v)}`,
    explanation: 'State the two distinct functions being multiplied.',
  });

  const uPrime = symbolicDerivative(u) || '1';
  const vPrime = symbolicDerivative(v) || '1';

  steps.push({
    title: '2. Compute the Individual Derivatives',
    expression: `u'(x) = d/dx [${prettify(u)}] = ${prettify(uPrime)}\nv'(x) = d/dx [${prettify(v)}] = ${prettify(vPrime)}`,
    explanation: 'Differentiate u(x) and v(x) independently.',
  });

  steps.push({
    title: '3. Apply the Product Rule Formula',
    expression: `d/dx [u · v] = u'(x) · v(x) + u(x) · v'(x)`,
    explanation: 'Substitute u(x), u\'(x), v(x), and v\'(x) into the product rule formula.',
  });

  const rawSum = `(${uPrime}) * (${v}) + (${u}) * (${vPrime})`;
  const simplified = symbolicDerivative(normalized) || rawSum;

  steps.push({
    title: '4. Expand and Combine Terms',
    expression: `f'(x) = (${prettify(uPrime)})(${prettify(v)}) + (${prettify(u)})(${prettify(vPrime)})\n     = ${prettify(simplified)}`,
    explanation: 'Multiply out and combine like terms to achieve the simplified derivative.',
  });

  const finalAnswer = `f'(x) = ${prettify(simplified)}`;
  const verification = verifyDerivative(normalized, simplified).message;

  const points = generateGraphPoints(normalized, -5, 5, 100);
  const derivPoints = generateGraphPoints(simplified, -5, 5, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Product Rule: d/dx [(${prettify(u)}) · (${prettify(v)})] = ${prettify(simplified)}`,
    steps,
    explanation: 'The Product Rule states that the derivative of a product of two differentiable functions is the derivative of the first times the second, plus the first times the derivative of the second.',
    verification,
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -5,
      xMax: 5,
      additionalCurves: derivPoints.length > 0 ? [
        { points: derivPoints, label: `f'(x) = ${prettify(simplified)}`, color: '#2563EB' }
      ] : undefined,
    },
  };
}
