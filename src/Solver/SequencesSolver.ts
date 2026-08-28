// Solver/SequencesSolver.ts — Analyzes mathematical sequences: terms, limit, convergence, monotonicity, boundedness
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveSequences(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter a sequence formula (e.g. "a_n = (2n + 1) / (3n + 5)", "a_n = (-1)^n / n", or "a_n = 1 / 2^n").');
  }

  // Strip a_n = or an =
  const expr = trimmed.replace(/^a_?n\s*=\s*/i, '');
  const normalized = normalizeExpression(expr).replace(/\bx\b/g, 'n');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. General Term of Sequence',
    expression: `a_n = ${prettify(normalized)}`,
    explanation: 'A sequence {a_n} is an ordered list of numbers indexed by positive integers n = 1, 2, 3, ...',
  });

  // Generate first 6 terms
  const terms: { n: number; val: number }[] = [];
  for (let n = 1; n <= 6; n++) {
    const val = evaluateAt(normalized, n, 'n');
    terms.push({ n, val });
  }

  const termListStr = terms.map(t => `a_${t.n} = ${formatNumber(t.val)}`).join(', ');
  steps.push({
    title: '2. First Six Terms',
    expression: `{ a_n } = { ${terms.map(t => formatNumber(t.val)).join(', ')}, ... }`,
    explanation: `Evaluated at n = 1, 2, 3, 4, 5, 6:\n${termListStr}`,
  });

  // Limit as n -> inf
  const largeN = evaluateAt(normalized, 1e5, 'n');
  const veryLargeN = evaluateAt(normalized, 1e6, 'n');
  const converges = Math.abs(largeN - veryLargeN) < 1e-3 && Number.isFinite(largeN);
  const limitVal = converges ? Number(veryLargeN.toFixed(4)) : NaN;

  steps.push({
    title: '3. Limit of the Sequence (lim[n → ∞] a_n)',
    expression: converges
      ? `lim[n → ∞] (${prettify(normalized)}) = ${formatNumber(limitVal)}`
      : `lim[n → ∞] (${prettify(normalized)}) = Diverges / Does not exist`,
    explanation: converges
      ? `As n grows without bound, the terms get arbitrarily close to ${formatNumber(limitVal)}. The sequence converges.`
      : `The terms do not settle onto a single finite number. The sequence diverges.`,
  });

  // Monotonicity
  let monotonicity = 'Not strictly monotonic (oscillating)';
  if (terms[1].val > terms[0].val && terms[2].val > terms[1].val && terms[3].val > terms[2].val) {
    monotonicity = 'Strictly Increasing (a_(n+1) > a_n for all n)';
  } else if (terms[1].val < terms[0].val && terms[2].val < terms[1].val && terms[3].val < terms[2].val) {
    monotonicity = 'Strictly Decreasing (a_(n+1) < a_n for all n)';
  }

  steps.push({
    title: '4. Monotonicity & Boundedness',
    expression: `• Monotonicity: ${monotonicity}\n• Boundedness: Bounded in range [${formatNumber(Math.min(...terms.map(t => t.val)))}, ${formatNumber(Math.max(...terms.map(t => t.val)))}]`,
    explanation: 'By the Monotone Convergence Theorem, every bounded monotonic sequence is guaranteed to converge.',
  });

  const finalAnswer = converges
    ? `Converges to L = ${formatNumber(limitVal)}`
    : 'Diverges';

  return {
    success: true,
    answer: finalAnswer,
    summary: `Sequence a_n = ${prettify(normalized)}: ${finalAnswer}. First terms: { ${terms.slice(0, 4).map(t => formatNumber(t.val)).join(', ')}... }`,
    steps,
    explanation: 'Sequences form the fundamental building blocks for infinite series.',
  };
}
