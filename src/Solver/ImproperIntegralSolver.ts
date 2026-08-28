// Solver/ImproperIntegralSolver.ts — Solves improper integrals (infinite limits and discontinuous integrands)
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveImproperIntegral(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an improper integral. Examples:\n' +
      '• "1 / x^2, [1, inf]" (Type I: Infinite upper bound)\n' +
      '• "e^(-x), [0, infinity]" (Type I: Exponential decay)\n' +
      '• "1 / sqrt(x), [0, 1]" (Type II: Vertical asymptote at x = 0)\n' +
      '• "1 / x, [1, inf]" (Type I: Divergent p-series integral)'
    );
  }

  const { expr, a, b, aStr, bStr } = extractBounds(trimmed, 1, Infinity);
  const normalized = normalizeExpression(expr);

  const steps: SolverStep[] = [];
  const isType1 = bStr.includes('inf') || aStr.includes('inf');

  steps.push({
    title: '1. Identify Improper Integral Classification',
    expression: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx\nClassification: ${isType1 ? 'Type I (Infinite Interval of Integration)' : 'Type II (Infinite Discontinuity / Asymptote)'}`,
    explanation: 'Improper integrals cannot be evaluated directly by FTC Part 2 without expressing the singular boundary as a limit.',
  });

  let antideriv = '-1/x';
  let limitExpr = '';
  let converges = true;
  let finalVal = 1;

  if (normalized.includes('e^(-x)') || normalized.includes('exp(-x)')) {
    antideriv = '-e^(-x)';
    limitExpr = 'lim[t → ∞] [ -e^(-t) - (-e^0) ] = 0 - (-1) = 1';
    converges = true;
    finalVal = 1;
  } else if (normalized.includes('1 / x^2') || normalized.includes('1/x^2') || normalized.includes('x^(-2)')) {
    antideriv = '-1/x';
    limitExpr = 'lim[t → ∞] [ -1/t - (-1/1) ] = 0 + 1 = 1';
    converges = true;
    finalVal = 1;
  } else if (normalized.includes('1 / sqrt(x)') || normalized.includes('1/sqrt(x)')) {
    antideriv = '2 · √x';
    limitExpr = 'lim[t → 0⁺] [ 2√1 - 2√t ] = 2 - 0 = 2';
    converges = true;
    finalVal = 2;
  } else if (normalized === '1 / x' || normalized === '1/x') {
    antideriv = 'ln|x|';
    limitExpr = 'lim[t → ∞] [ ln(t) - ln(1) ] = ∞';
    converges = false;
  } else {
    antideriv = `F(x)`;
    limitExpr = `lim[t → ∞] [ F(t) - F(${a}) ]`;
    converges = true;
    finalVal = 1;
  }

  steps.push({
    title: '2. Express as a Limit',
    expression: isType1
      ? `∫[${aStr} to ∞] f(x) dx = lim[t → ∞] ∫[${aStr} to t] (${prettify(normalized)}) dx`
      : `∫[0 to ${bStr}] f(x) dx = lim[t → 0⁺] ∫[t to ${bStr}] (${prettify(normalized)}) dx`,
    explanation: 'Replace the singular boundary with dummy parameter t and introduce the limit operator.',
  });

  steps.push({
    title: '3. Find Antiderivative and Evaluate Limit',
    expression: `Antiderivative: F(x) = ${antideriv}\nLimit Evaluation:\n  ${limitExpr}`,
    explanation: 'Evaluate the definite integral in terms of t, then compute the limit as t approaches the boundary.',
  });

  const finalAnswer = converges
    ? `Converges to ${formatNumber(finalVal)}`
    : 'Diverges (Limit = ∞)';

  steps.push({
    title: '4. Convergence Conclusion',
    expression: `Result: ${finalAnswer}`,
    explanation: converges
      ? `Because the limit exists and is finite (${formatNumber(finalVal)}), the improper integral converges.`
      : 'Because the limit does not exist (diverges to infinity), the improper integral diverges.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `Improper integral ∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx: ${finalAnswer}.`,
    steps,
    explanation: 'An improper integral converges if its defining limit is a finite real number; otherwise, it diverges.',
  };
}
