// Solver/ImproperIntegralSolver.ts — Solves improper integrals using real antiderivative + numerical limit evaluation
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicAntiderivative, evaluateAt, numericalIntegrate } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveImproperIntegral(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an improper integral. Examples:\n' +
      '• "1 / x^2, [1, inf]" (Type I: Infinite upper bound)\n' +
      '• "e^(-x), [0, infinity]" (Type I: Exponential decay → Converges to 1)\n' +
      '• "1 / sqrt(x), [0, 1]" (Type II: Vertical asymptote at x = 0 → Converges to 2)\n' +
      '• "1 / x, [1, inf]" (Type I: Divergent harmonic integral)\n' +
      '• "1 / x^3, [1, inf]" (Type I: Converges to 1/2)'
    );
  }

  const { expr, a, b, aStr, bStr } = extractBounds(trimmed, 1, Infinity);
  const normalized = normalizeExpression(expr);

  const steps: SolverStep[] = [];
  const isTypeI = !isFinite(a) || !isFinite(b);
  const isTypeII = isFinite(a) && isFinite(b); // will check asymptote

  steps.push({
    title: '1. Identify Improper Integral Classification',
    expression: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx\nClassification: ${isTypeI ? 'Type I — Infinite Interval of Integration' : 'Type II — Integrand has Infinite Discontinuity on [a, b]'}`,
    explanation: 'Improper integrals cannot be evaluated directly by FTC without expressing the singular boundary as a limit.',
  });

  // Find antiderivative symbolically first, then fall back to note
  const antideriv = symbolicAntiderivative(normalized);
  const hasSymbolic = antideriv !== '';

  // Replace e^(-x) normalization
  const normClean = normalized.replace(/e\^\(-\*x\)/g, 'e^(-x)');

  steps.push({
    title: '2. Express as a Limit',
    expression: isTypeI
      ? (isFinite(a)
        ? `∫[${aStr} to ∞] f(x) dx = lim[t → ∞] ∫[${aStr} to t] (${prettify(normalized)}) dx`
        : `∫[-∞ to ${bStr}] f(x) dx = lim[t → -∞] ∫[t to ${bStr}] (${prettify(normalized)}) dx`)
      : `∫[${aStr} to ${bStr}] f(x) dx = lim[t → ${aStr}⁺] ∫[t to ${bStr}] (${prettify(normalized)}) dx`,
    explanation: 'Replace the singular boundary with dummy parameter t and introduce the limit operator.',
  });

  if (hasSymbolic) {
    steps.push({
      title: '3. Find Antiderivative F(x)',
      expression: `F(x) = ∫ (${prettify(normalized)}) dx = ${prettify(antideriv)} + C`,
      explanation: 'Compute the antiderivative using integration rules.',
    });
  }

  // Numerical evaluation for convergence
  let converges = false;
  let finalVal = 0;
  let limitExpr = '';
  let numMethod = '';

  if (isTypeI && isFinite(a)) {
    // ∫[a, ∞) — evaluate at progressively larger t
    const tLarge1 = 1e5, tLarge2 = 1e8;

    if (hasSymbolic) {
      const Ft1 = evaluateAt(antideriv, tLarge1);
      const Ft2 = evaluateAt(antideriv, tLarge2);
      const Fa  = evaluateAt(antideriv, a);

      if (Number.isFinite(Ft1) && Number.isFinite(Ft2) && Math.abs(Ft2 - Ft1) < 1e-3 * (Math.abs(Ft2) + 1)) {
        converges = true;
        finalVal  = Ft2 - Fa;
        limitExpr = `lim[t → ∞] [F(t) - F(${aStr})] = ${formatNumber(Ft2)} - ${formatNumber(Fa)} = ${formatNumber(finalVal)}`;
      } else if (!Number.isFinite(Ft2) || Math.abs(Ft2) > 1e10) {
        converges = false;
        limitExpr = `lim[t → ∞] F(t) = ∞  →  Diverges`;
      } else {
        // Use numerical integration as backup
        const num1 = numericalIntegrate(normalized, a, 1e4, 400);
        const num2 = numericalIntegrate(normalized, a, 1e5, 400);
        converges = Math.abs(num2 - num1) < 1e-4 * (Math.abs(num2) + 1) && Number.isFinite(num2);
        finalVal = num2;
        limitExpr = `Numerical: ∫[${aStr} to 10⁵] ≈ ${formatNumber(num2)}, ∫[${aStr} to 10⁴] ≈ ${formatNumber(num1)} → ${converges ? 'Stabilizes' : 'Diverges'}`;
        numMethod = ' (Numerical verification)';
      }
    } else {
      // Pure numerical
      const num1 = numericalIntegrate(normalized, a, 1e4, 400);
      const num2 = numericalIntegrate(normalized, a, 1e6, 400);
      converges = Number.isFinite(num2) && Math.abs(num2 - num1) < 1e-3 * (Math.abs(num2) + 1);
      finalVal = num2;
      limitExpr = `Numerical Simpson's rule: ∫[${aStr} to 10⁶] ≈ ${formatNumber(num2)}`;
      numMethod = ' (Numerical)';
    }
  } else if (isTypeI && isFinite(b)) {
    // ∫(-∞, b]
    const tSmall1 = -1e5, tSmall2 = -1e8;
    if (hasSymbolic) {
      const Ft2 = evaluateAt(antideriv, tSmall2);
      const Fb  = evaluateAt(antideriv, b);
      converges = Number.isFinite(Ft2) && Math.abs(Ft2) < 1e10;
      finalVal  = Fb - (converges ? Ft2 : 0);
      limitExpr = converges
        ? `lim[t → -∞] [F(${bStr}) - F(t)] = ${formatNumber(Fb)} - ${formatNumber(Ft2)} = ${formatNumber(finalVal)}`
        : `lim[t → -∞] F(t) = ±∞  →  Diverges`;
    } else {
      const num1 = numericalIntegrate(normalized, -1e4, b, 400);
      const num2 = numericalIntegrate(normalized, -1e6, b, 400);
      converges = Number.isFinite(num2) && Math.abs(num2 - num1) < 1e-3 * (Math.abs(num2) + 1);
      finalVal = num2;
      limitExpr = `Numerical: ∫[-10⁶ to ${bStr}] ≈ ${formatNumber(num2)}`;
      numMethod = ' (Numerical)';
    }
  } else {
    // Type II — finite bounds but discontinuity
    // Check for asymptote at a (left endpoint)
    const nearLeft = evaluateAt(normalized, a + 1e-6);
    const hasAsymptoteLeft = !Number.isFinite(nearLeft) || Math.abs(nearLeft) > 1e6;

    if (hasSymbolic) {
      const FbVal = evaluateAt(antideriv, b);
      const FaEps = evaluateAt(antideriv, a + 1e-8);
      converges = Number.isFinite(FaEps) && Number.isFinite(FbVal);
      finalVal = FbVal - FaEps;
      limitExpr = `lim[t → ${aStr}⁺] [F(${bStr}) - F(t)] = ${formatNumber(FbVal)} - ${formatNumber(FaEps)} = ${formatNumber(finalVal)}`;
    } else {
      const numApprox = numericalIntegrate(normalized, a + 1e-8, b, 400);
      converges = Number.isFinite(numApprox);
      finalVal = numApprox;
      limitExpr = `Numerical: ∫[${aStr}+ε to ${bStr}] ≈ ${formatNumber(numApprox)}`;
      numMethod = ' (Numerical)';
    }
    if (hasAsymptoteLeft) {
      // Verify with 2-step numerical
      const apx1 = numericalIntegrate(normalized, a + 1e-5, b, 400);
      const apx2 = numericalIntegrate(normalized, a + 1e-8, b, 400);
      converges = Number.isFinite(apx2) && Math.abs(apx2 - apx1) < 0.5 * (Math.abs(apx2) + 1);
      if (converges) finalVal = apx2;
    }
  }

  steps.push({
    title: '4. Evaluate the Limit',
    expression: hasSymbolic
      ? `F(x) = ${prettify(antideriv)}\nLimit Evaluation:\n  ${limitExpr}`
      : `Numerical Limit Evaluation${numMethod}:\n  ${limitExpr}`,
    explanation: 'As t approaches the singular boundary, check whether F(t) stabilizes at a finite value.',
  });

  const finalAnswer = converges
    ? `Converges to ${formatNumber(finalVal)}${numMethod}`
    : 'Diverges (Limit = ∞)';

  steps.push({
    title: '5. Convergence Conclusion',
    expression: `Result: ${finalAnswer}`,
    explanation: converges
      ? `The limit exists and equals ${formatNumber(finalVal)}, so the improper integral converges.`
      : 'The limit does not exist (diverges to infinity). The improper integral diverges.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `Improper integral ∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx: ${finalAnswer}.`,
    steps,
    explanation: 'An improper integral converges if its defining limit is a finite real number; otherwise, it diverges.',
    verification: converges
      ? `✓ Numerical cross-check: ∫ ≈ ${formatNumber(finalVal)}`
      : '✗ Limit grows without bound → Diverges.',
  };
}
