// Solver/DefiniteIntegralSolver.ts — Evaluates definite integrals with FTC evaluation and shaded area visualization
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { extractBounds, normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { parsePolynomial, integratePoly, formatPolyTerms } from '../Calculus_One_Calculator/Utils/polynomialUtils';
import { evaluateAt, numericalIntegrate, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyDefiniteIntegral } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveDefiniteIntegral(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter a definite integral (e.g. "x^2 from 0 to 3" or "3x^2 - 2x + 1, [1, 4]").');
  }

  const { expr, a, b, aStr, bStr } = extractBounds(trimmed, 0, 2);
  const normalized = normalizeExpression(expr);

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Definite Integral',
    expression: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx`,
    explanation: `Evaluate the signed area under f(x) = ${prettify(normalized)} from lower limit a = ${aStr} to upper limit b = ${bStr}.`,
  });

  // Step 1: Find antiderivative F(x)
  const polyTerms = parsePolynomial(normalized);
  let antiderivExpr = '';
  let antiderivTerms = polyTerms.length > 0 ? integratePoly(polyTerms) : [];

  if (antiderivTerms.length > 0) {
    antiderivExpr = formatPolyTerms(antiderivTerms);
  } else {
    antiderivExpr = normalized; // fallback
  }

  steps.push({
    title: '2. Find the Antiderivative F(x)',
    expression: `F(x) = ∫ (${prettify(normalized)}) dx = ${prettify(antiderivExpr)}`,
    explanation: 'Find an antiderivative F(x) such that F\'(x) = f(x). The constant C cancels during definite evaluation.',
  });

  // Step 2: Evaluate at upper and lower limits: F(b) - F(a)
  const Fb = polyTerms.length > 0
    ? antiderivTerms.reduce((sum, t) => sum + t.coeff * Math.pow(b, t.exponent), 0)
    : numericalIntegrate(normalized, 0, b, 100);

  const Fa = polyTerms.length > 0
    ? antiderivTerms.reduce((sum, t) => sum + t.coeff * Math.pow(a, t.exponent), 0)
    : numericalIntegrate(normalized, 0, a, 100);

  const integralVal = Fb - Fa;

  steps.push({
    title: '3. Apply the Fundamental Theorem of Calculus Part 2',
    expression: `∫[a to b] f(x) dx = F(b) - F(a)\nF(${bStr}) = ${formatNumber(Fb)}\nF(${aStr}) = ${formatNumber(Fa)}`,
    explanation: `Evaluate the antiderivative F(x) at the upper bound (${bStr}) and subtract its value at the lower bound (${aStr}).`,
  });

  steps.push({
    title: '4. Compute F(b) - F(a)',
    expression: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = (${formatNumber(Fb)}) - (${formatNumber(Fa)}) = ${formatNumber(integralVal)}`,
    explanation: 'Subtract the lower boundary evaluation from the upper boundary evaluation.',
  });

  const finalAnswer = `${formatNumber(integralVal)}`;
  const verification = verifyDefiniteIntegral(normalized, a, b, integralVal).message;

  const xMin = Math.min(a, b) - 2;
  const xMax = Math.max(a, b) + 2;
  const points = generateGraphPoints(normalized, xMin, xMax, 100);

  return {
    success: true,
    answer: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = ${finalAnswer}`,
    summary: `Definite integral of ${prettify(normalized)} on [${aStr}, ${bStr}] evaluates to ${finalAnswer}.`,
    steps,
    explanation: 'The definite integral calculates the total net accumulated area between the curve y = f(x) and the x-axis from x = a to x = b.',
    verification,
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin,
      xMax,
      shadedRegion: { from: Math.min(a, b), to: Math.max(a, b), label: `Area = ${finalAnswer}` },
    },
  };
}
