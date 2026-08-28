// Solver/QuotientRuleSolver.ts — Solves derivatives requiring the quotient rule: (u / v)' = (u'v - uv') / v²
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyDerivative } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveQuotientRule(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a quotient function (e.g. "(x^2 + 1) / (x - 3)" or "sin(x) / x").');
  }

  // Find division symbol /
  const slashIndex = normalized.indexOf('/');
  if (slashIndex === -1) {
    return errorResult('Quotient rule requires a rational/fraction expression containing a division symbol "/" (e.g. "(x^2 + 1) / (x - 3)").');
  }

  const u = normalized.slice(0, slashIndex).trim().replace(/^\(|\)$/g, '');
  const v = normalized.slice(slashIndex + 1).trim().replace(/^\(|\)$/g, '');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Identify the Numerator u(x) and Denominator v(x)',
    expression: `f(x) = u(x) / v(x)\n  u(x) (Numerator)   = ${prettify(u)}\n  v(x) (Denominator) = ${prettify(v)}`,
    explanation: 'Decompose the fraction into its top and bottom components.',
  });

  const uPrime = symbolicDerivative(u) || '1';
  const vPrime = symbolicDerivative(v) || '1';

  steps.push({
    title: '2. Compute the Individual Derivatives',
    expression: `u'(x) = d/dx [${prettify(u)}] = ${prettify(uPrime)}\nv'(x) = d/dx [${prettify(v)}] = ${prettify(vPrime)}`,
    explanation: 'Differentiate the numerator and denominator independently.',
  });

  steps.push({
    title: '3. Apply the Quotient Rule Formula',
    expression: `d/dx [u / v] = (u'(x) · v(x) - u(x) · v'(x)) / [v(x)]²`,
    explanation: '("Low d-High minus High d-Low, over the square of what\'s below")',
  });

  const simplified = symbolicDerivative(normalized) || `((${uPrime})*(${v}) - (${u})*(${vPrime})) / (${v})^2`;

  steps.push({
    title: '4. Substitute and Simplify',
    expression: `f'(x) = [(${prettify(uPrime)})(${prettify(v)}) - (${prettify(u)})(${prettify(vPrime)})] / [${prettify(v)}]²\n     = ${prettify(simplified)}`,
    explanation: 'Simplify the numerator and keep denominator in factored squared form where standard.',
  });

  const finalAnswer = `f'(x) = ${prettify(simplified)}`;
  const verification = verifyDerivative(normalized, simplified).message;

  const points = generateGraphPoints(normalized, -6, 6, 100);
  const derivPoints = generateGraphPoints(simplified, -6, 6, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Quotient Rule: d/dx [(${prettify(u)}) / (${prettify(v)})] = ${prettify(simplified)}`,
    steps,
    explanation: 'The Quotient Rule gives the derivative of a ratio of two differentiable functions.',
    verification,
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -6,
      xMax: 6,
      additionalCurves: derivPoints.length > 0 ? [
        { points: derivPoints, label: `f'(x) = ${prettify(simplified)}`, color: '#2563EB' }
      ] : undefined,
    },
  };
}
