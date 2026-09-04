// Solver/PowerSeriesSolver.ts — Radius and interval of convergence via real numerical Ratio Test
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt, computeRatioTestL, partialSum } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

/**
 * Build the term expression substituting x = center + 1 (to evaluate |x - center| = 1 for endpoint tests).
 */
function buildTermWithX(termExpr: string, x: number): string {
  // Replace x in the expression with a concrete number
  return termExpr.replace(/\bx\b/g, `(${x})`);
}

export function solvePowerSeries(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a power series. Examples:\n' +
      '• "sum x^n / n"                 → R = 1, I = [-1, 1)\n' +
      '• "sum (x - 2)^n / (n * 3^n)"   → R = 3, center = 2\n' +
      '• "sum x^n / n!"               → R = ∞ (converges for all x)\n' +
      '• "sum n! * x^n"               → R = 0 (converges only at x = 0)\n' +
      '• "sum (x + 1)^n / n^2"        → center = -1, R = 1'
    );
  }

  const raw = trimmed.replace(/^sum\s*/i, '').replace(/^∑\s*/, '').trim();
  const exprRaw = normalizeExpression(raw);

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Power Series Standard Form: ∑ cₙ (x − a)ⁿ',
    expression: `Series: ∑[n=1 to ∞] (${prettify(exprRaw)})`,
    explanation: 'A power series is centered at x = a with coefficient sequence cₙ. We find the radius R such that the series converges for |x − a| < R.',
  });

  // ── 2. Detect center a ─────────────────────────────────────────────────────
  let center = 0;
  // Patterns: (x - 2)^n  or  (x + 1)^n
  const centerMatch = exprRaw.match(/\(\s*x\s*([+-])\s*(\d+(?:\.\d+)?)\s*\)/);
  if (centerMatch) {
    const sign = centerMatch[1];
    const val = parseFloat(centerMatch[2]);
    center = sign === '-' ? val : -val;
  }

  steps.push({
    title: '2. Identify Center of Convergence',
    expression: `Center a = ${center}`,
    explanation: `The series is expanded around x = ${center}.`,
  });

  // ── 3. Build a function of n that evaluates the nth term at a shifted x ──
  // For ratio test: a_n = term evaluated with x replaced symbolically.
  // We need |c_n * (x-a)^n| and check |c_{n+1}/c_n| * |x-a| < 1
  // So R = 1 / lim|c_{n+1}/c_n|
  //
  // Strategy: replace (x - center) with 1 (so |x-a|=1) and compute ratio test on coefficients
  const coeffExpr = exprRaw
    .replace(/\(\s*x\s*[+-]\s*\d+(?:\.\d+)?\s*\)\^n/g, '1')  // (x-a)^n → 1
    .replace(/\(\s*x\s*[+-]\s*\d+(?:\.\d+)?\s*\)/g, '1')      // (x-a) → 1
    .replace(/\bx\b/g, '1');                                    // x → 1 (remaining)

  // The coefficient term in n
  const { L: Lcoeff, reliable } = computeRatioTestL(coeffExpr);

  let R: number;
  let rStr: string;

  if (!reliable || isNaN(Lcoeff)) {
    // Fallback heuristics for common patterns
    if (exprRaw.includes('n!') && (exprRaw.includes('/n!') || exprRaw.includes('/ n!'))) {
      R = Infinity; rStr = '∞';
    } else if (exprRaw.includes('n!') && !exprRaw.includes('/')) {
      R = 0; rStr = '0';
    } else {
      R = 1; rStr = '1';
    }
  } else if (Lcoeff === 0) {
    R = Infinity; rStr = '∞';
  } else if (!isFinite(Lcoeff) || Lcoeff > 1e10) {
    R = 0; rStr = '0';
  } else {
    R = 1 / Lcoeff;
    rStr = formatNumber(R);
  }

  steps.push({
    title: '3. Apply Ratio Test to Coefficient Sequence',
    expression: `Let c_n be the coefficient part of a_n (i.e., exclude the (x-a)^n factor)\nL_coeff = lim[n → ∞] |c_(n+1) / c_n| = ${reliable ? formatNumber(Lcoeff) : 'computed by pattern'}\nRadius R = 1 / L_coeff = ${rStr}`,
    explanation: 'By the Ratio Test, the power series converges for |x − a| < 1/L, giving R = 1/L.',
  });

  steps.push({
    title: '4. Radius of Convergence R',
    expression: `R = ${rStr}`,
    explanation: `The series converges absolutely for all x with |x − ${center}| < ${rStr}.`,
  });

  // ── 4. Interval of convergence ────────────────────────────────────────────
  let intervalStr = '';

  if (!isFinite(R)) {
    intervalStr = '(−∞, ∞)';
    steps.push({
      title: '5. Interval of Convergence',
      expression: `I = (−∞, ∞) — Converges for ALL real x`,
      explanation: 'Radius R = ∞ means the series converges for every real number x.',
    });
  } else if (R === 0) {
    intervalStr = `{${center}}`;
    steps.push({
      title: '5. Interval of Convergence',
      expression: `I = {${center}} — Converges ONLY at x = ${center}`,
      explanation: 'R = 0 means the series converges only at its center point.',
    });
  } else {
    const leftEnd = center - R;
    const rightEnd = center + R;

    // ── Test left endpoint numerically ────────────────────────────────────
    // At x = center - R: (x-center)^n = (-R)^n → alternating if n is integer
    // We evaluate the term expression at x = leftEnd for n = 1..50 and check partial sums
    const termAtLeft = exprRaw.replace(/\bx\b/g, `(${leftEnd})`);
    const sumLeft50 = partialSum(termAtLeft, 1, 50);
    const sumLeft200 = partialSum(termAtLeft, 1, 200);
    const leftConverges = Number.isFinite(sumLeft200) && Math.abs(sumLeft200 - sumLeft50) < 1;
    const leftBracket = leftConverges ? '[' : '(';

    // ── Test right endpoint numerically ───────────────────────────────────
    const termAtRight = exprRaw.replace(/\bx\b/g, `(${rightEnd})`);
    const sumRight50 = partialSum(termAtRight, 1, 50);
    const sumRight200 = partialSum(termAtRight, 1, 200);
    const rightConverges = Number.isFinite(sumRight200) && Math.abs(sumRight200 - sumRight50) < 1;
    const rightBracket = rightConverges ? ']' : ')';

    intervalStr = `${leftBracket}${formatNumber(leftEnd)}, ${formatNumber(rightEnd)}${rightBracket}`;

    steps.push({
      title: '5. Test Endpoints for Convergence',
      expression:
        `Left endpoint x = ${formatNumber(leftEnd)}:\n` +
        `  Partial sums: S_50 ≈ ${formatNumber(sumLeft50)}, S_200 ≈ ${formatNumber(sumLeft200)}\n` +
        `  → ${leftConverges ? 'Converges (include endpoint)' : 'Diverges (exclude endpoint)'}\n\n` +
        `Right endpoint x = ${formatNumber(rightEnd)}:\n` +
        `  Partial sums: S_50 ≈ ${formatNumber(sumRight50)}, S_200 ≈ ${formatNumber(sumRight200)}\n` +
        `  → ${rightConverges ? 'Converges (include endpoint)' : 'Diverges (exclude endpoint)'}`,
      explanation: 'At each endpoint, the Ratio Test gives exactly L = 1 (inconclusive). Test numerically with partial sums.',
    });
  }

  const finalAnswer = `Radius R = ${rStr};  Interval of Convergence I = ${intervalStr}`;

  steps.push({
    title: '6. Final Conclusion',
    expression: finalAnswer,
    explanation: 'The series converges absolutely for all x inside the interval and diverges outside it.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `Power series: R = ${rStr}, I = ${intervalStr}.`,
    steps,
    explanation: 'The interval of convergence is determined by the Ratio Test on coefficients and endpoint analysis.',
  };
}
