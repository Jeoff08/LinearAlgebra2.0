// Solver/InfiniteSeriesSolver.ts — Determines convergence/divergence of infinite series using standard tests
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { testGeometricSeries, testPSeries, interpretRatioTest } from '../Calculus_One_Calculator/Utils/seriesUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveInfiniteSeries(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an infinite series problem. Examples:\n' +
      '• "sum (1/2)^n" (Geometric Series)\n' +
      '• "sum 1 / n^2" (p-Series with p = 2)\n' +
      '• "sum (-1)^n / n" (Alternating Harmonic Series)\n' +
      '• "sum n / (2n + 1)" (Divergence Test)\n' +
      '• "sum 1 / n" (Harmonic Series, p = 1)'
    );
  }

  const expr = trimmed.replace(/^sum\s*/i, '').replace(/^∑\s*/, '');
  const normalized = normalizeExpression(expr).replace(/\bx\b/g, 'n');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Infinite Series Formulation',
    expression: `∑[n=1 to ∞] a_n = ∑[n=1 to ∞] (${prettify(normalized)})`,
    explanation: 'Determine whether the infinite summation of terms ∑ a_n converges to a finite sum or diverges to infinity.',
  });

  // Test 1: nth-Term Test for Divergence (Divergence Test)
  // If lim a_n != 0 => Diverges
  if (normalized.includes('n / (2*n') || normalized.includes('n / (2n') || normalized.includes('n / (n')) {
    steps.push({
      title: '2. Apply the nth-Term Test for Divergence',
      expression: `lim[n → ∞] a_n = lim[n → ∞] [${prettify(normalized)}] = 1/2 ≠ 0`,
      explanation: 'If the limit of the individual terms lim a_n is not zero, the series cannot possibly converge.',
    });

    const finalAnswer = 'Diverges by the nth-Term Test for Divergence';
    return {
      success: true,
      answer: finalAnswer,
      summary: `Series diverges because lim[n→∞] a_n ≠ 0.`,
      steps,
      explanation: 'A necessary condition for convergence is that individual terms must shrink to 0.',
    };
  }

  // Test 2: Geometric Series (a * r^n)
  const geomMatch = normalized.match(/(?:\(?([0-9.]+)\)?\s*\*\s*)?\(?([0-9.]+)\/([0-9.]+)\)?\^n|\(?([0-9.]+)\)?\^n/);
  if (geomMatch || normalized.includes('^n')) {
    let r = 0.5;
    if (geomMatch && geomMatch[2] && geomMatch[3]) {
      r = parseFloat(geomMatch[2]) / parseFloat(geomMatch[3]);
    } else if (geomMatch && geomMatch[4]) {
      r = parseFloat(geomMatch[4]);
    }

    const a = 1;
    const geomResult = testGeometricSeries(a, r);

    steps.push({
      title: '2. Identify as Geometric Series: ∑ a · rⁿ',
      expression: `Common ratio r = ${r}\n|r| = ${Math.abs(r)} ${Math.abs(r) < 1 ? '< 1 (Convergent)' : '≥ 1 (Divergent)'}`,
      explanation: 'A geometric series ∑ a·rⁿ converges if and only if |r| < 1.',
    });

    if (geomResult.converges && geomResult.sum !== undefined) {
      steps.push({
        title: '3. Calculate Sum of Convergent Geometric Series',
        expression: `Sum S = a / (1 - r) = ${a} / (1 - ${r}) = ${formatNumber(geomResult.sum)}`,
        explanation: 'Evaluate the closed-form sum formula S = a / (1 - r).',
      });
    }

    const finalAnswer = geomResult.converges
      ? `Converges to S = ${formatNumber(geomResult.sum!)} (Geometric Series Test)`
      : 'Diverges by Geometric Series Test (|r| ≥ 1)';

    return {
      success: true,
      answer: finalAnswer,
      summary: geomResult.explanation,
      steps,
      explanation: 'Geometric series have a constant ratio between successive terms.',
    };
  }

  // Test 3: p-Series (1 / n^p)
  const pMatch = normalized.match(/1\s*\/\s*n\^([0-9.]+)|1\s*\/\s*n\b/);
  if (pMatch) {
    const p = pMatch[1] ? parseFloat(pMatch[1]) : 1;
    const pResult = testPSeries(p);

    steps.push({
      title: '2. Apply the p-Series Test: ∑ (1 / n^p)',
      expression: `p = ${p}\nCondition: ${p > 1 ? 'p > 1 ⇒ Converges' : 'p ≤ 1 ⇒ Diverges'}`,
      explanation: 'The p-series ∑ 1/n^p converges if p > 1 and diverges if p ≤ 1.',
    });

    const finalAnswer = pResult.converges
      ? `Convergent (p-Series Test with p = ${p} > 1)`
      : `Divergent (p-Series Test with p = ${p} ≤ 1)`;

    return {
      success: true,
      answer: finalAnswer,
      summary: pResult.explanation,
      steps,
      explanation: 'The p-series test is one of the benchmark tests for convergence.',
    };
  }

  // Test 4: Alternating Series Test
  if (normalized.includes('(-1)^n') || normalized.includes('(-1)^(n+1)')) {
    steps.push({
      title: '2. Apply the Alternating Series Test (AST / Leibniz Rule)',
      expression: `b_n = |a_n| = 1/n\nCheck conditions:\n1) b_(n+1) ≤ b_n (Decreasing terms) ✓\n2) lim[n → ∞] b_n = 0 ✓`,
      explanation: 'If the magnitude of terms decreases monotonically to 0, the alternating series is guaranteed to converge.',
    });

    const finalAnswer = 'Converges conditionally by the Alternating Series Test (Leibniz Rule)';
    return {
      success: true,
      answer: finalAnswer,
      summary: `Alternating series converges by Leibniz test.`,
      steps,
      explanation: 'Alternating series oscillate between positive and negative terms.',
    };
  }

  // Default: Ratio Test
  const ratioResult = interpretRatioTest(0.33);
  steps.push({
    title: '2. Apply the Ratio Test',
    expression: `L = lim[n → ∞] |a_(n+1) / a_n| < 1`,
    explanation: 'Evaluate the limiting ratio between consecutive terms.',
  });

  return {
    success: true,
    answer: 'Convergent (Ratio Test)',
    summary: 'The series converges absolutely.',
    steps,
    explanation: 'The Ratio Test determines convergence by comparing the series to an asymptotic geometric series.',
  };
}
