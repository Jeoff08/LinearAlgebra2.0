// Solver/IntegrationByPartsSolver.ts — ∫ u dv = uv - ∫ v du  with automatic LIATE + symbolic computation
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, symbolicAntiderivative, evaluateAt, numericalIntegrate } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

/**
 * LIATE priority: higher = "more appropriate as u"
 * L = Logarithmic > I = Inverse trig > A = Algebraic > T = Trigonometric > E = Exponential
 */
function liatePriority(term: string): number {
  const t = term.replace(/\s/g, '');
  if (t.includes('ln(') || t.includes('log(')) return 5;                      // L
  if (t.includes('arcsin') || t.includes('arccos') || t.includes('arctan')) return 4;  // I
  if (/^[+-]?\d*\.?\d*\*?x(\^\d+)?$/.test(t) || t === 'x') return 3;         // A (polynomial in x)
  if (t.includes('sin(') || t.includes('cos(') || t.includes('tan(') ||
      t.includes('sec(') || t.includes('csc(') || t.includes('cot(')) return 2; // T
  if (t.includes('e^') || t.includes('exp(') || /^\d+\^x$/.test(t)) return 1; // E
  return 0;
}

/**
 * Split a product integrand into two factors for IBP.
 * Tries to split on explicit '*', or recognizes common patterns.
 */
function splitIntoBPFactors(expr: string): { factor1: string; factor2: string } | null {
  // 1. Explicit multiplication
  const parts = splitOnTopLevelStar(expr);
  if (parts.length === 2) {
    return { factor1: parts[0].trim(), factor2: parts[1].trim() };
  }

  // 2. Pattern: polynomial * function(x)
  // e.g. x * e^x, x^2 * sin(x), x * ln(x)
  const patterns: RegExp[] = [
    /^([+-]?\d*\.?\d*\*?x(?:\^\d+)?)\s*\*?\s*((?:sin|cos|tan|e\^|exp|ln|log|arcsin|arccos|arctan|sec|csc|cot)\(.+\)(?:\^\d+)?)$/i,
    /^((?:sin|cos|tan|e\^|exp|ln|log|sec|csc|cot)\(.+\)(?:\^\d+)?)\s*\*?\s*([+-]?\d*\.?\d*\*?x(?:\^\d+)?)$/i,
    /^([+-]?\d*\.?\d*\*?x(?:\^\d+)?)\s*\*?\s*(e\^\(?[^)]*\)?)$/i,
  ];

  for (const re of patterns) {
    const m = expr.match(re);
    if (m) return { factor1: m[1].trim(), factor2: m[2].trim() };
  }

  // 3. Single known function (IBP with dv = dx): ln(x), arcsin(x), arctan(x)
  const singleFuncs = ['ln(x)', 'log(x)', 'arcsin(x)', 'arccos(x)', 'arctan(x)'];
  for (const fn of singleFuncs) {
    if (expr.replace(/\s/g, '') === fn) {
      return { factor1: fn, factor2: '1' };
    }
  }

  return null;
}

/** Split on top-level '*' respecting parentheses */
function splitOnTopLevelStar(expr: string): string[] {
  let depth = 0;
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && ch === '*') {
      return [expr.slice(0, i), expr.slice(i + 1)];
    }
  }
  return [expr];
}

export function solveIntegrationByParts(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integral for Integration by Parts (e.g. "x * e^x", "x * sin(x)", "x^2 * e^x", "ln(x)", "x * ln(x)").');
  }

  const split = splitIntoBPFactors(normalized);
  if (!split) {
    return errorResult(
      `Could not identify two factors for Integration by Parts in "${normalized}".\n` +
      'Enter a product like "x * sin(x)" or a function like "ln(x)".'
    );
  }

  // Assign u and dv using LIATE priority
  let u: string, dvExpr: string;
  const p1 = liatePriority(split.factor1);
  const p2 = liatePriority(split.factor2);

  if (p1 >= p2) {
    u = split.factor1;
    dvExpr = split.factor2;
  } else {
    u = split.factor2;
    dvExpr = split.factor1;
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. LIATE Rule Selection for u and dv',
    expression:
      `LIATE Priority: Logarithmic > Inverse Trig > Algebraic > Trigonometric > Exponential\n` +
      `  Factor 1: "${prettify(split.factor1)}" — priority ${p1}\n` +
      `  Factor 2: "${prettify(split.factor2)}" — priority ${p2}\n\n` +
      `  Chosen u  = ${prettify(u)}\n` +
      `  Chosen dv = ${prettify(dvExpr)} dx`,
    explanation: 'Select u according to the LIATE hierarchy. The factor that is harder to integrate becomes u.',
  });

  // Compute du and v
  const du = symbolicDerivative(u) || '1';
  const v = symbolicAntiderivative(dvExpr === '1' ? '1' : dvExpr) || (dvExpr === '1' ? 'x' : `∫${dvExpr}dx`);

  steps.push({
    title: '2. Differentiate u and Integrate dv',
    expression:
      `du = d/dx [${prettify(u)}] dx = (${prettify(du)}) dx\n` +
      `v  = ∫ (${prettify(dvExpr)}) dx = ${prettify(v)}`,
    explanation: 'Find du by differentiating u, and find v by integrating dv.',
  });

  steps.push({
    title: '3. Apply the Integration by Parts Formula',
    expression: `∫ u dv = u · v − ∫ v du`,
    explanation: 'Substitute u, v, and du into the standard formula.',
  });

  // Construct u*v part
  const uvPart = `(${u}) · (${v})`;

  // The remaining integral: ∫ v * du dx
  const vduIntegrand = du === '1' ? v : `(${v}) * (${du})`;
  const remainingIntegral = symbolicAntiderivative(vduIntegrand);

  let finalExpr: string;
  if (remainingIntegral) {
    finalExpr = `${uvPart} - (${remainingIntegral})`;
  } else {
    // Try to simplify the remaining integral symbolically
    // Common cases: ∫ e^x dx = e^x, ∫ sin(x) dx = -cos(x), etc.
    finalExpr = `${uvPart} - ∫ [${prettify(vduIntegrand)}] dx`;
  }

  // Try to simplify the expression
  let simplified = finalExpr;
  try {
    // Clean up redundant parens for display
    simplified = simplified.replace(/\(\s*([a-z0-9]+)\s*\)/gi, '$1');
  } catch {
    // Use as-is
  }


  // Numerical verification
  let verification = '';
  const numOriginal = numericalIntegrate(normalized, 0, 1, 200);
  const numResult = evaluateAt(finalExpr.replace(/·/g, '*'), 1) - evaluateAt(finalExpr.replace(/·/g, '*'), 0);
  if (Number.isFinite(numOriginal) && Number.isFinite(numResult)) {
    const match = Math.abs(numOriginal - numResult) < 0.1;
    verification = `✓ Numerical check: ∫₀¹ (${prettify(normalized)}) dx ≈ ${formatNumber(numOriginal)}, F(1)−F(0) ≈ ${formatNumber(numResult)} ${match ? '✓' : '⚠'}`;
  }

  const finalAnswer = `${prettify(simplified)} + C`;

  steps.push({
    title: '4. Evaluate the Remaining Integral and Simplify',
    expression:
      `∫ (${prettify(normalized)}) dx\n` +
      `= ${prettify(uvPart)} − ∫ [${prettify(vduIntegrand)}] dx\n` +
      (remainingIntegral ? `= ${prettify(uvPart)} − (${prettify(remainingIntegral)})\n` : '') +
      `= ${finalAnswer}`,
    explanation: 'Complete the remaining integral and append the constant of integration C.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `Integration by Parts: ∫ (${prettify(normalized)}) dx = ${finalAnswer}.`,
    steps,
    explanation: 'Integration by Parts is the integral counterpart of the product rule for differentiation.',
    verification,
  };
}
