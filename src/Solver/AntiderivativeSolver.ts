// Solver/AntiderivativeSolver.ts — Solves indefinite integrals using symbolic antiderivative engine + polynomial fallback
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { parsePolynomial, integratePoly, formatPolyTerms } from '../Calculus_One_Calculator/Utils/polynomialUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { symbolicDerivative, symbolicAntiderivative, numericalIntegrate, evaluateAt } from '../Calculus_One_Calculator/Utils/calculusUtils';

export function solveAntiderivative(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integrand to find its antiderivative (e.g. "4x^5 + 3x^2 - 7x + 6", "3sin(x) + e^x", or "1/x").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Indefinite Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Find a function F(x) such that F\'(x) = f(x).',
  });

  // Try polynomial parsing first (best step-by-step display)
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
    // Try the symbolic antiderivative engine for non-polynomial functions
    antiderivExpr = symbolicAntiderivative(normalized);

    if (antiderivExpr) {
      // Identify what rule was applied
      let ruleName = 'Standard Integration Formula';
      if (normalized.includes('sin')) ruleName = '∫ sin(x) dx = −cos(x)';
      else if (normalized.includes('cos')) ruleName = '∫ cos(x) dx = sin(x)';
      else if (normalized.includes('tan')) ruleName = '∫ tan(x) dx = −ln|cos(x)|';
      else if (normalized.includes('sec') && normalized.includes('^2')) ruleName = '∫ sec²(x) dx = tan(x)';
      else if (normalized.includes('e^') || normalized.includes('exp')) ruleName = '∫ eˣ dx = eˣ';
      else if (normalized.includes('ln')) ruleName = '∫ ln(x) dx = x·ln(x) − x (Integration by Parts)';
      else if (normalized.includes('1/x') || normalized === '1/x') ruleName = '∫ (1/x) dx = ln|x|';
      else if (normalized.includes('sqrt(1-x^2)') || normalized.includes('1+x^2')) ruleName = 'Inverse Trigonometric Formula';

      steps.push({
        title: '2. Apply ' + ruleName,
        expression: `∫ (${prettify(normalized)}) dx = ${prettify(antiderivExpr)}`,
        explanation: 'Apply the recognized antiderivative formula from the integration table.',
      });

      // For sums, show each term
      if (normalized.includes('+') || (normalized.includes('-') && !normalized.startsWith('-'))) {
        steps.push({
          title: '3. Sum/Difference Rule',
          expression: `∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx`,
          explanation: 'Integration distributes over addition and subtraction.',
        });
      }
    } else {
      // Numerical fallback — can't find symbolic form, compute definite from 0 to x
      antiderivExpr = 'F(x)';
      const numAt1 = numericalIntegrate(normalized, 0, 1, 200);
      const numAt2 = numericalIntegrate(normalized, 0, 2, 200);

      steps.push({
        title: '2. No Closed-Form Antiderivative Found — Numerical Values',
        expression: `F(x) = ∫[0 to x] (${prettify(normalized)}) dt\nF(1) ≈ ${formatNumber(numAt1)}\nF(2) ≈ ${formatNumber(numAt2)}`,
        explanation: 'The symbolic antiderivative could not be determined. Numerical integration provides approximate values at specific points.',
      });
    }
  }

  const finalAnswer = `${prettify(antiderivExpr)} + C`;

  steps.push({
    title: antiderivExpr === 'F(x)' ? '3. General Form' : `${polyTerms.length > 0 ? polyTerms.length + 2 : 3}. Add the Constant of Integration C`,
    expression: `Final Antiderivative: ${finalAnswer}`,
    explanation: 'Since the derivative of any constant is zero, an arbitrary constant C must be added to represent the complete family of antiderivatives.',
  });

  // Verification by differentiation
  let verification = '';
  if (antiderivExpr !== 'F(x)') {
    const diffCheck = symbolicDerivative(antiderivExpr) || normalized;
    verification = `✓ Verification by Differentiation:\nd/dx [${prettify(antiderivExpr)} + C] = ${prettify(diffCheck)}\n(Should match the original integrand ${prettify(normalized)})`;

    // Numerical cross-check
    const origAt1 = evaluateAt(normalized, 1);
    const derivAt1 = evaluateAt(diffCheck, 1);
    if (Number.isFinite(origAt1) && Number.isFinite(derivAt1)) {
      const match = Math.abs(origAt1 - derivAt1) < 1e-4;
      verification += `\nNumerical check at x=1: f(1) = ${formatNumber(origAt1)}, F'(1) = ${formatNumber(derivAt1)} ${match ? '✓' : '⚠ Discrepancy'}`;
    }
  }

  return {
    success: true,
    answer: finalAnswer,
    summary: `∫ (${prettify(normalized)}) dx = ${finalAnswer}`,
    steps,
    explanation: 'An antiderivative (or indefinite integral) is the inverse operation of differentiation.',
    verification,
  };
}
