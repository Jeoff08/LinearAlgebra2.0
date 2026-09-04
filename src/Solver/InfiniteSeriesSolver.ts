// Solver/InfiniteSeriesSolver.ts — Determines convergence/divergence using real numerical tests
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAtN, computeRatioTestL, partialSum } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { testGeometricSeries, testPSeries } from '../Calculus_One_Calculator/Utils/seriesUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveInfiniteSeries(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an infinite series problem. Examples:\n' +
      '• "sum (1/2)^n"               → Geometric, converges to 2\n' +
      '• "sum 1 / n^2"               → p-Series p=2, converges\n' +
      '• "sum 1 / n"                 → Harmonic, diverges\n' +
      '• "sum (-1)^n / n"            → Alternating, converges conditionally\n' +
      '• "sum n / (n + 1)"           → nth-Term test, diverges\n' +
      '• "sum 1 / n!"                → Ratio test, converges (e−1)\n' +
      '• "sum n^2 / 2^n"             → Ratio test, converges'
    );
  }

  // Strip "sum" or "∑" prefix
  const raw = trimmed.replace(/^sum\s*/i, '').replace(/^∑\s*/, '').trim();
  // Normalize and replace x with n
  const expr = normalizeExpression(raw).replace(/\bx\b/g, 'n');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Infinite Series Formulation',
    expression: `∑[n=1 to ∞] a_n = ∑[n=1 to ∞] (${prettify(expr)})`,
    explanation: 'Determine whether the infinite summation ∑ a_n converges to a finite sum or diverges.',
  });

  // ── TEST 1: nth-Term Divergence Test ─────────────────────────────────────
  // lim[n→∞] a_n ≠ 0  ⟹  Diverges
  const largeN1 = evaluateAtN(expr, 100000);
  const largeN2 = evaluateAtN(expr, 1000000);
  const limitIsZero = Number.isFinite(largeN1) && Number.isFinite(largeN2) && Math.abs(largeN1) < 1e-5 && Math.abs(largeN2) < 1e-5;
  const limitVal = Number.isFinite(largeN2) ? largeN2 : NaN;

  if (!limitIsZero && Number.isFinite(limitVal) && Math.abs(limitVal) > 1e-5) {
    steps.push({
      title: '2. Apply the nth-Term Test for Divergence',
      expression: `lim[n → ∞] a_n = lim[n → ∞] (${prettify(expr)}) ≈ ${formatNumber(limitVal)} ≠ 0`,
      explanation: 'If the limit of individual terms is not zero, the series cannot converge.',
    });

    const finalAnswer = `Diverges by the nth-Term Test (lim a_n = ${formatNumber(limitVal)} ≠ 0)`;
    return {
      success: true,
      answer: finalAnswer,
      summary: `Series diverges because lim[n→∞] a_n = ${formatNumber(limitVal)} ≠ 0.`,
      steps,
      explanation: 'A necessary (but not sufficient) condition for convergence is that lim a_n = 0.',
    };
  }

  steps.push({
    title: '2. nth-Term Test Check',
    expression: `lim[n → ∞] a_n ≈ ${Number.isFinite(largeN2) ? formatNumber(largeN2) : 'undefined'} ≈ 0\n(Terms go to zero — test is inconclusive; apply another test)`,
    explanation: 'The nth-term going to zero is necessary but not sufficient for convergence.',
  });

  // ── TEST 2: Detect Geometric Series ──────────────────────────────────────
  // Geometric: a * r^n pattern. Estimate r = a(n+1)/a(n) at large n
  const isGeomCandidate = expr.includes('^n') || expr.match(/\d+\s*\^\s*n/);
  if (isGeomCandidate) {
    const a100 = evaluateAtN(expr, 100);
    const a101 = evaluateAtN(expr, 101);
    const a102 = evaluateAtN(expr, 102);
    if (Number.isFinite(a100) && Math.abs(a100) > 1e-300) {
      const r1 = Math.abs(a101 / a100);
      const r2 = Math.abs(a102 / a101);
      const isConst = Math.abs(r1 - r2) < 1e-6; // constant ratio ⟹ geometric
      if (isConst) {
        const r = r1;
        // Estimate 'a' = first term
        const firstTerm = evaluateAtN(expr, 0);
        const aVal = Number.isFinite(firstTerm) && Math.abs(firstTerm) > 1e-300 ? firstTerm : evaluateAtN(expr, 1);
        const geomResult = testGeometricSeries(aVal, r);

        steps.push({
          title: '3. Identify as Geometric Series ∑ a · rⁿ',
          expression: `Common ratio r = |a(n+1)/a(n)| ≈ ${formatNumber(r)}\n|r| = ${formatNumber(r)} ${r < 1 ? '< 1 ⟹ Converges' : '≥ 1 ⟹ Diverges'}`,
          explanation: 'A geometric series converges iff |r| < 1.',
        });

        if (geomResult.converges && geomResult.sum !== undefined) {
          steps.push({
            title: '4. Compute Geometric Sum S = a / (1 - r)',
            expression: `S = ${formatNumber(aVal)} / (1 - ${formatNumber(r)}) = ${formatNumber(geomResult.sum)}`,
            explanation: 'Use the closed-form sum formula for convergent geometric series.',
          });
        }

        const finalAnswer = geomResult.converges
          ? `Converges to S = ${formatNumber(geomResult.sum!)} (Geometric Series, |r| = ${formatNumber(r)} < 1)`
          : `Diverges (Geometric Series, |r| = ${formatNumber(r)} ≥ 1)`;

        return {
          success: true,
          answer: finalAnswer,
          summary: geomResult.explanation,
          steps,
          explanation: 'Geometric series have a constant ratio between successive terms.',
        };
      }
    }
  }

  // ── TEST 3: p-Series ∑ 1/nᵖ ──────────────────────────────────────────────
  const pMatch = expr.match(/^1\s*\/\s*n\s*\^\s*\(?\s*([0-9.]+)\s*\)?$/) ||
                 expr.match(/^n\s*\^\s*\(?\s*([+-]?\s*[0-9.]+)\s*\)?$/);
  if (pMatch || expr === '1 / n' || expr === '1/n') {
    let p = 1;
    if (pMatch) {
      const pRaw = parseFloat(pMatch[1]);
      p = expr.startsWith('n^') ? -pRaw : pRaw; // n^-p form
    }
    const pResult = testPSeries(p);

    steps.push({
      title: '3. Identify as p-Series: ∑ (1/nᵖ)',
      expression: `p = ${p}\nCondition: ${p > 1 ? 'p > 1 ⟹ Converges' : 'p ≤ 1 ⟹ Diverges'}`,
      explanation: 'The p-series ∑ 1/nᵖ converges iff p > 1.',
    });

    const finalAnswer = pResult.converges
      ? `Converges (p-Series, p = ${p} > 1)`
      : `Diverges (p-Series, p = ${p} ≤ 1${p === 1 ? ' — Harmonic Series' : ''})`;

    return {
      success: true,
      answer: finalAnswer,
      summary: pResult.explanation,
      steps,
      explanation: 'The p-series test is a benchmark convergence test.',
    };
  }

  // ── TEST 4: Alternating Series Test ───────────────────────────────────────
  const isAlternating = expr.includes('(-1)^n') || expr.includes('(-1)^(n') || expr.includes('-1^n');
  if (isAlternating) {
    // Check that |b_n| decreases to zero
    const bn = expr.replace(/\(-1\)\^n\s*\*?\s*/g, '').replace(/\(-1\)\^\(n.*?\)\s*\*?\s*/g, '').trim() || '1/n';
    const bnNorm = normalizeExpression(bn).replace(/\bx\b/g, 'n');
    const b100 = Math.abs(evaluateAtN(bnNorm, 100));
    const b1000 = Math.abs(evaluateAtN(bnNorm, 1000));
    const decreasing = b1000 < b100;
    const goesToZero = b1000 < 1e-3;

    steps.push({
      title: '3. Apply the Alternating Series Test (Leibniz Rule)',
      expression: `b_n = |a_n| = ${prettify(bnNorm)}\n1) Decreasing: b_n+1 ≤ b_n at large n? ${decreasing ? '✓ Yes' : '✗ Fails'}\n2) lim b_n → 0? b_1000 ≈ ${formatNumber(b1000)} ${goesToZero ? '✓ Yes' : '✗ Fails'}`,
      explanation: 'Both conditions (monotone decreasing + limit = 0) are required for the AST.',
    });

    if (decreasing && goesToZero) {
      const partS = partialSum(expr, 1, 100);
      const finalAnswer = `Converges conditionally by the Alternating Series Test`;
      return {
        success: true,
        answer: finalAnswer,
        summary: `Alternating series converges conditionally by Leibniz test. Partial sum (100 terms) ≈ ${formatNumber(partS)}.`,
        steps,
        explanation: 'Alternating series oscillate between positive and negative partial sums, converging if |b_n| ↘ 0.',
      };
    } else {
      return {
        success: true,
        answer: 'Diverges (Alternating Series Test conditions not met)',
        summary: 'The alternating series test conditions fail; the series diverges.',
        steps,
        explanation: 'Both |b_n| decreasing AND b_n → 0 are required for the AST to guarantee convergence.',
      };
    }
  }

  // ── TEST 5: Ratio Test — Numerically compute L ────────────────────────────
  const { L, reliable } = computeRatioTestL(expr);

  steps.push({
    title: '3. Apply the Ratio Test',
    expression: `L = lim[n → ∞] |a_(n+1) / a_n|\nNumerically estimated at n = 10,000: L ≈ ${reliable ? formatNumber(L) : 'unstable (try another test)'}\n${reliable ? (L < 1 ? 'L < 1 ⟹ Converges Absolutely' : L > 1 ? 'L > 1 ⟹ Diverges' : 'L = 1 ⟹ Inconclusive') : ''}`,
    explanation: 'The Ratio Test compares consecutive terms asymptotically. L < 1 means geometric decay → convergence.',
  });

  if (reliable && L < 1) {
    const partS = partialSum(expr, 1, 1000);
    const finalAnswer = `Converges Absolutely by the Ratio Test (L = ${formatNumber(L)} < 1)`;
    return {
      success: true,
      answer: finalAnswer,
      summary: `Ratio Test: L = ${formatNumber(L)} < 1. Converges absolutely. Partial sum (1000 terms) ≈ ${formatNumber(partS)}.`,
      steps,
      explanation: 'The Ratio Test detects asymptotic geometric decay, guaranteeing absolute convergence.',
    };
  }

  if (reliable && L > 1) {
    return {
      success: true,
      answer: `Diverges by the Ratio Test (L = ${formatNumber(L)} > 1)`,
      summary: `Ratio Test: L = ${formatNumber(L)} > 1. Series diverges.`,
      steps,
      explanation: 'When L > 1, terms grow without bound and the series must diverge.',
    };
  }

  // ── TEST 6: Comparison / Partial Sum Heuristic ────────────────────────────
  const p1000 = partialSum(expr, 1, 1000);
  const p10000 = partialSum(expr, 1, 10000);
  const isInfinite = !Number.isFinite(p10000) || Math.abs(p10000) > 1e10;
  const isGrowing = Math.abs(p10000 - p1000) > 0.01 * (Math.abs(p1000) + 1);

  steps.push({
    title: '4. Partial Sum Convergence Heuristic',
    expression: `Partial sum S_1000 = ${formatNumber(p1000)}\nPartial sum S_10000 = ${formatNumber(p10000)}\nDifference: ${formatNumber(Math.abs(p10000 - p1000))}`,
    explanation: 'If partial sums stabilize (difference shrinks), the series likely converges.',
  });

  const convergesHeuristic = !isInfinite && !isGrowing;
  const finalAnswer = convergesHeuristic
    ? `Likely Converges (Partial sums stabilize near ${formatNumber(p10000)})`
    : `Likely Diverges (Partial sums grow without bound)`;

  return {
    success: true,
    answer: finalAnswer,
    summary: convergesHeuristic
      ? `Series appears to converge. Partial sum (10000 terms) ≈ ${formatNumber(p10000)}.`
      : `Series appears to diverge (sums grow unboundedly).`,
    steps,
    explanation: 'When standard tests are inconclusive, numerical partial sums provide strong heuristic evidence.',
  };
}
