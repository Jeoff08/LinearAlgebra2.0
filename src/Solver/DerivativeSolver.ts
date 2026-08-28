// Solver/DerivativeSolver.ts — Computes derivatives of mathematical functions with full step-by-step rule breakdowns
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { parsePolynomial, differentiatePoly, formatPolyTerms } from '../Calculus_One_Calculator/Utils/polynomialUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyDerivative } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveDerivative(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a valid mathematical function to differentiate (e.g. "x^3 + 4x^2 - 7x + 2" or "3sin(x) + e^x").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}`,
    explanation: `We want to find the first derivative f'(x) = d/dx [${prettify(normalized)}].`,
  });

  // Check if standard polynomial
  const polyTerms = parsePolynomial(normalized);
  let derivativeExpr = '';

  if (polyTerms.length > 0) {
    steps.push({
      title: '2. Apply the Sum / Difference Rule',
      expression: `d/dx [∑ term_i] = ∑ d/dx [term_i]`,
      explanation: 'Differentiate each term individually according to the power rule d/dx [a*x^n] = a*n*x^(n-1).',
    });

    const derivTerms = differentiatePoly(polyTerms);
    for (const t of polyTerms) {
      if (t.exponent === 0) {
        steps.push({
          title: `Differentiate Constant: ${t.coeff}`,
          expression: `d/dx (${t.coeff}) = 0`,
          explanation: 'The derivative of any constant is zero.',
        });
      } else {
        const newCoeff = t.coeff * t.exponent;
        const newExp = t.exponent - 1;
        const termStr = t.exponent === 1 ? `${t.coeff}x` : `${t.coeff}x^${t.exponent}`;
        const resStr = newExp === 0 ? String(newCoeff) : (newExp === 1 ? `${newCoeff}x` : `${newCoeff}x^${newExp}`);
        steps.push({
          title: `Apply Power Rule to: ${termStr}`,
          expression: `d/dx [${termStr}] = (${t.coeff}) · (${t.exponent})x^(${t.exponent} - 1) = ${resStr}`,
          explanation: `Multiply the coefficient by the exponent (${t.coeff} · ${t.exponent} = ${newCoeff}) and subtract 1 from the exponent (${t.exponent} - 1 = ${newExp}).`,
        });
      }
    }

    derivativeExpr = formatPolyTerms(derivTerms);
  } else {
    // General symbolic differentiation
    derivativeExpr = symbolicDerivative(normalized);
    steps.push({
      title: '2. Apply Differentiation Rules',
      expression: `d/dx [${prettify(normalized)}] = ${prettify(derivativeExpr)}`,
      explanation: 'Apply standard calculus rules (chain rule, product rule, trig/exponential derivative formulas).',
    });
  }

  if (!derivativeExpr) {
    derivativeExpr = symbolicDerivative(normalized) || '0';
  }

  const finalAnswer = `f'(x) = ${prettify(derivativeExpr)}`;

  // Verification
  const verification = verifyDerivative(normalized, derivativeExpr).message;

  // Graph original and derivative
  const xMin = -6;
  const xMax = 6;
  const originalPoints = generateGraphPoints(normalized, xMin, xMax, 100);
  const derivPoints = generateGraphPoints(derivativeExpr, xMin, xMax, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `The derivative of f(x) = ${prettify(normalized)} is f'(x) = ${prettify(derivativeExpr)}.`,
    steps,
    explanation: 'The derivative represents the instantaneous rate of change or the slope of the tangent line to the curve at any point x.',
    verification,
    graph: {
      points: originalPoints,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin,
      xMax,
      additionalCurves: derivPoints.length > 0 ? [
        {
          points: derivPoints,
          label: `f'(x) = ${prettify(derivativeExpr)}`,
          color: '#2563EB',
        },
      ] : undefined,
    },
  };
}
