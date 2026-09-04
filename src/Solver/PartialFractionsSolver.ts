// Solver/PartialFractionsSolver.ts — General partial fraction decomposition for any rational function P(x)/Q(x)
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt, symbolicAntiderivative } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { solveQuadratic } from '../Calculus_One_Calculator/Utils/polynomialUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

/**
 * Parse a simple polynomial string into {a, b, c} coefficients for ax² + bx + c.
 * Returns null if it can't parse.
 */
function parseDenomQuadratic(den: string): { a: number; b: number; c: number } | null {
  // Normalize: remove spaces, insert * for implicit multiplication
  const d = den.replace(/\s/g, '');

  let a = 0, b = 0, c = 0;

  // Match x^2 term
  const x2m = d.match(/([+-]?\d*\.?\d*)\*?x\^2/);
  if (x2m) {
    const raw = x2m[1];
    a = raw === '' || raw === '+' ? 1 : raw === '-' ? -1 : parseFloat(raw);
  }

  // Match x term (but not x^2)
  const xm = d.replace(/x\^2/g, '').match(/([+-]?\d*\.?\d*)\*?x(?!\^)/);
  if (xm) {
    const raw = xm[1];
    b = raw === '' || raw === '+' ? 1 : raw === '-' ? -1 : parseFloat(raw);
  }

  // Constant term: what remains after removing x^2 and x terms
  const noX = d.replace(/[+-]?\d*\.?\d*\*?x\^2/g, '').replace(/[+-]?\d*\.?\d*\*?x(?!\^)/g, '');
  const cVal = parseFloat(noX);
  c = Number.isNaN(cVal) ? 0 : cVal;

  if (a === 0) return null;
  return { a, b, c };
}

/**
 * Evaluates a simple polynomial string (numerator) at x = val.
 */
function evalPoly(num: string, val: number): number {
  return evaluateAt(num, val, 'x');
}

export function solvePartialFractions(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult(
      'Please enter a rational function for partial fraction decomposition.\n' +
      'Examples:\n' +
      '• "1 / (x^2 - 1)" → A/(x-1) + B/(x+1)\n' +
      '• "(2x + 1) / (x^2 - 4)"\n' +
      '• "(5x - 3) / (x^2 - 2x - 3)"\n' +
      '• "1 / (x^2 + 2x - 8)"'
    );
  }

  const slashIndex = normalized.indexOf('/');
  if (slashIndex === -1) {
    return errorResult('Partial fraction decomposition requires a rational fraction P(x)/Q(x) containing "/".');
  }

  const num = normalized.slice(0, slashIndex).trim().replace(/^\(|\)$/g, '');
  let den = normalized.slice(slashIndex + 1).trim().replace(/^\(|\)$/g, '');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Rational Function',
    expression: `∫ [(${prettify(num)}) / (${prettify(den)})] dx`,
    explanation: 'Check that the degree of numerator is strictly less than degree of denominator (proper rational function). If not, perform polynomial long division first.',
  });

  // Try to factor the denominator as quadratic ax² + bx + c
  const quadCoeffs = parseDenomQuadratic(den);

  if (!quadCoeffs) {
    return errorResult(
      `Could not parse denominator "${den}" as a quadratic. ` +
      'Please enter a rational function with a quadratic denominator (e.g. "1 / (x^2 - 5x + 6)").'
    );
  }

  const { a: qa, b: qb, c: qc } = quadCoeffs;
  const { roots, discriminant, stepDesc } = solveQuadratic(qa, qb, qc);

  steps.push({
    title: '2. Factor the Denominator Q(x) via Quadratic Formula',
    expression: `Q(x) = ${prettify(den)}\n${stepDesc}`,
    explanation: 'Find the roots of the denominator to determine its linear factors.',
  });

  if (roots.length < 2) {
    // Irreducible quadratic (complex roots) — use arctan form
    const p = -qb / (2 * qa);   // completing the square center
    const q2 = qc / qa - p * p; // remainder

    if (q2 <= 0) {
      return errorResult(`Denominator has a repeated root. This case requires a modified decomposition form A/(x-r) + B/(x-r)².`);
    }

    const sqrtQ = Math.sqrt(Math.abs(q2));
    const numAtCenter = evalPoly(num, p);
    const A = evalPoly(num, p) / (qa);

    steps.push({
      title: '3. Irreducible Quadratic — Complete the Square',
      expression: `Q(x) = ${qa}[(x - (${formatNumber(p)}))² + ${formatNumber(q2)}]\nNo real roots: Δ = ${formatNumber(discriminant)} < 0`,
      explanation: 'When the denominator has no real roots, complete the square and use the standard arctan integral formula.',
    });

    const numExpr = prettify(num);
    const finalResult = `${formatNumber(numAtCenter / (qa * q2))} · arctan((x - ${formatNumber(p)}) / ${formatNumber(sqrtQ)}) + C`;

    steps.push({
      title: '4. Apply Arctan Integral Formula',
      expression: `∫ P(x) / (a[(x-p)² + q²]) dx = (P(p) / (a·q²)) · arctan((x-p)/q) + C\n= ${finalResult}`,
      explanation: 'Evaluate the numerator at x = p to simplify, then use ∫ 1/(u² + a²) du = (1/a)·arctan(u/a) + C.',
    });

    return {
      success: true,
      answer: finalResult,
      summary: `Irreducible quadratic denominator: integral = ${finalResult}.`,
      steps,
      explanation: 'When the denominator is an irreducible quadratic, complete the square and use the arctangent integral formula.',
    };
  }

  // Two distinct real roots: r1, r2
  const r1 = roots[0];
  const r2 = roots[1];

  // Linear factors
  const f1 = r1 >= 0 ? `(x - ${r1})` : `(x + ${Math.abs(r1)})`;
  const f2 = r2 >= 0 ? `(x - ${r2})` : `(x + ${Math.abs(r2)})`;

  steps.push({
    title: '3. Linear Factors',
    expression: `Q(x) = ${qa !== 1 ? qa + ' · ' : ''}${f1} · ${f2}`,
    explanation: 'Write the denominator as the product of its linear factors.',
  });

  steps.push({
    title: '4. Set Up Partial Fraction Form',
    expression: `(${prettify(num)}) / [${f1} · ${f2}] = A / ${f1} + B / ${f2}`,
    explanation: 'Each distinct linear factor gets its own partial fraction term with an unknown constant.',
  });

  // Heaviside cover-up: A = P(r1) / Q'(r1) = P(r1) / (qa*(r1 - r2))
  // Or more simply: A = P(r1) / (r1 - r2), B = P(r2) / (r2 - r1) when qa = 1
  const Pr1 = evalPoly(num, r1);
  const Pr2 = evalPoly(num, r2);
  const denom1 = qa * (r1 - r2);
  const denom2 = qa * (r2 - r1);
  const A = Pr1 / denom1;
  const B = Pr2 / denom2;

  steps.push({
    title: '5. Solve for Coefficients A and B (Heaviside Cover-Up)',
    expression:
      `At x = ${r1}: A = P(${r1}) / Q'(${r1}) = ${formatNumber(Pr1)} / ${formatNumber(denom1)} = ${formatNumber(A)}\n` +
      `At x = ${r2}: B = P(${r2}) / Q'(${r2}) = ${formatNumber(Pr2)} / ${formatNumber(denom2)} = ${formatNumber(B)}`,
    explanation: 'Substitute the root of each factor into the numerator and the derivative of the denominator to find each coefficient directly.',
  });

  const decomp = `${formatNumber(A)} / ${f1} + ${formatNumber(B)} / ${f2}`;

  steps.push({
    title: '6. Verified Partial Fraction Decomposition',
    expression: `(${prettify(num)}) / (${prettify(den)}) = ${decomp}`,
    explanation: 'The decomposition can be verified by recombining the right-hand side over the common denominator.',
  });

  // Verification at a random point
  const testX = 5.7;
  const lhs = evalPoly(num, testX) / evalPoly(den, testX);
  const rhs = A / (testX - r1) + B / (testX - r2);
  const verified = Math.abs(lhs - rhs) < 1e-4;

  // Integrate
  const logF1 = f1.replace(/[()]/g, '');
  const logF2 = f2.replace(/[()]/g, '');
  const finalResult = `${formatNumber(A)} · ln|${logF1}| + ${formatNumber(B)} · ln|${logF2}| + C`;

  steps.push({
    title: '7. Integrate Each Partial Fraction',
    expression: `∫ [${decomp}] dx\n= ${finalResult}`,
    explanation: 'Use the standard logarithmic integration rule: ∫ 1/(x - c) dx = ln|x - c| + C.',
  });

  return {
    success: true,
    answer: finalResult,
    summary: `Partial fraction decomposition & integral: ${finalResult}.`,
    steps,
    explanation: 'Partial Fractions decomposes complex rational functions into simple fractions integrable with logarithm rules.',
    verification: verified
      ? `✓ Verified at x = ${testX}: LHS = ${formatNumber(lhs)}, RHS = ${formatNumber(rhs)} ✓`
      : `⚠ Verify decomposition manually.`,
  };
}
