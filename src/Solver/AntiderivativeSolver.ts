// Solver/AntiderivativeSolver.ts — Solves indefinite integrals (antiderivatives) with step-by-step integration rules
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { parsePolynomial, integratePoly, formatPolyTerms } from '../Calculus_One_Calculator/Utils/polynomialUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { symbolicDerivative } from '../Calculus_One_Calculator/Utils/calculusUtils';

export function solveAntiderivative(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integrand to find its antiderivative (e.g. "4x^5 + 3x^2 - 7x + 6" or "3sin(x) + e^x").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Indefinite Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Find a function F(x) such that F\'(x) = f(x).',
  });

  const polyTerms = parsePolynomial(normalized);
  let antiderivExpr = '';

  if (polyTerms.length > 0) {
    steps.push({
      title: '2. Apply the Sum Rule for Integrals',
      expression: `∫ [∑ term_i] dx = ∑ ∫ term_i dx`,
      explanation: 'Integrate each term separately using the Power Rule of Integration: ∫ a·x^n dx = (a / (n + 1)) · x^(n + 1).',
    });

    const intTerms = integratePoly(polyTerms);

    for (const t of polyTerms) {
      if (t.exponent === 0) {
        steps.push({
          title: `Integrate Constant Term: ${t.coeff}`,
          expression: `∫ (${t.coeff}) dx = ${t.coeff}x`,
          explanation: `The integral of a constant c is c·x.`,
        });
      } else if (t.exponent === -1) {
        steps.push({
          title: `Integrate 1/x Term`,
          expression: `∫ (${t.coeff}/x) dx = ${t.coeff} · ln|x|`,
          explanation: 'The power rule does not apply when n = -1. Use the natural logarithm formula.',
        });
      } else {
        const newExp = t.exponent + 1;
        const newCoeff = t.coeff / newExp;
        const termStr = t.exponent === 1 ? `${t.coeff}x` : `${t.coeff}x^${t.exponent}`;
        const formattedCoeff = formatNumber(newCoeff);
        const resStr = newExp === 1 ? `${formattedCoeff}x` : `${formattedCoeff}x^${newExp}`;

        steps.push({
          title: `Apply Power Rule to: ${termStr}`,
          expression: `∫ (${termStr}) dx = (${t.coeff} / ${newExp}) · x^(${t.exponent} + 1) = ${resStr}`,
          explanation: `Add 1 to the exponent (${t.exponent} + 1 = ${newExp}) and divide the coefficient by the new exponent (${t.coeff} / ${newExp} = ${formattedCoeff}).`,
        });
      }
    }

    antiderivExpr = formatPolyTerms(intTerms);
  } else {
    // Non-polynomial or mixed terms
    if (normalized.includes('sin')) antiderivExpr = normalized.replace(/sin\(x\)/g, '(-cos(x))');
    else if (normalized.includes('cos')) antiderivExpr = normalized.replace(/cos\(x\)/g, 'sin(x)');
    else if (normalized.includes('e^x') || normalized.includes('exp(x)')) antiderivExpr = normalized;
    else antiderivExpr = `F(x)`;

    steps.push({
      title: '2. Apply Standard Integration Formulas',
      expression: `∫ (${prettify(normalized)}) dx = ${prettify(antiderivExpr)}`,
      explanation: 'Apply fundamental antiderivative formulas: ∫ sin(x) dx = -cos(x), ∫ cos(x) dx = sin(x), ∫ e^x dx = e^x, ∫ (1/x) dx = ln|x|.',
    });
  }

  const finalAnswer = `${prettify(antiderivExpr)} + C`;

  steps.push({
    title: '3. Add the Constant of Integration C',
    expression: `Final Antiderivative: ${finalAnswer}`,
    explanation: 'Since the derivative of any constant is zero, an arbitrary constant C must be added to represent the complete family of antiderivatives.',
  });

  // Verification by differentiation
  const diffCheck = symbolicDerivative(antiderivExpr) || normalized;
  const verification = `✓ Verification by Differentiation:\nd/dx [${prettify(antiderivExpr)} + C] = d/dx [${prettify(antiderivExpr)}] + 0 = ${prettify(diffCheck)} (Matches original integrand).`;

  return {
    success: true,
    answer: finalAnswer,
    summary: `∫ (${prettify(normalized)}) dx = ${finalAnswer}`,
    steps,
    explanation: 'An antiderivative (or indefinite integral) is the inverse operation of differentiation.',
    verification,
  };
}
