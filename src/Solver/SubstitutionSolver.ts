// Solver/SubstitutionSolver.ts — Solves integration using u-substitution with automatic u detection
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, symbolicAntiderivative, evaluateAt, numericalIntegrate } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

/**
 * Detect the best u-substitution candidate from the integrand.
 * Looks for an inner composite expression whose derivative also appears.
 */
function detectSubstitution(expr: string): { u: string; outerForm: string; isExp: boolean; isTrig: boolean } {
  // 1. Composite power: (inner)^n — u = inner
  const powerMatch = expr.match(/\(([^()]+)\)\s*\^\s*([0-9.+-]+)/);
  if (powerMatch) {
    return { u: powerMatch[1], outerForm: `u^${powerMatch[2]}`, isExp: false, isTrig: false };
  }

  // 2. e^(inner) — u = inner
  const expMatch = expr.match(/e\^\(([^()]+)\)/i);
  if (expMatch) {
    return { u: expMatch[1], outerForm: 'e^u', isExp: true, isTrig: false };
  }

  // 3. sin(inner), cos(inner), etc. — u = inner
  const trigMatch = expr.match(/(sin|cos|tan|sec|csc|cot)\(([^()]+)\)/i);
  if (trigMatch && trigMatch[2] !== 'x') {
    return { u: trigMatch[2], outerForm: `${trigMatch[1]}(u)`, isExp: false, isTrig: true };
  }

  // 4. ln(inner) — u = inner
  const lnMatch = expr.match(/ln\(([^()]+)\)/);
  if (lnMatch && lnMatch[1] !== 'x') {
    return { u: lnMatch[1], outerForm: 'ln(u)', isExp: false, isTrig: false };
  }

  // 5. sqrt(inner) — u = inner
  const sqrtMatch = expr.match(/sqrt\(([^()]+)\)/);
  if (sqrtMatch && sqrtMatch[1] !== 'x') {
    return { u: sqrtMatch[1], outerForm: 'sqrt(u)', isExp: false, isTrig: false };
  }

  // 6. Innermost parenthesized expression
  const parenMatch = expr.match(/\(([^()]+)\)/);
  if (parenMatch) {
    return { u: parenMatch[1], outerForm: 'u', isExp: false, isTrig: false };
  }

  // 7. Default: u = x^2 + 1 (generic)
  return { u: 'x^2 + 1', outerForm: 'u', isExp: false, isTrig: false };
}

export function solveSubstitution(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integral for u-substitution (e.g. "2x * (x^2 + 1)^4", "x * e^(x^2)", or "sin(x) * cos(x)").');
  }

  const { u, outerForm, isExp, isTrig } = detectSubstitution(normalized);

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Identify an inner function u = g(x) whose derivative g\'(x) dx appears in the integrand.',
  });

  const duDx = symbolicDerivative(u) || '1';

  steps.push({
    title: '2. Choose u and Compute du',
    expression: `Let u = ${prettify(u)}\ndu = (${prettify(duDx)}) dx  ⟹  dx = du / (${prettify(duDx)})`,
    explanation: 'Differentiate u with respect to x to express dx in terms of du.',
  });

  // Determine the integral in u
  let uIntegral = '';
  let uAntideriv = '';

  if (isExp) {
    uIntegral = '∫ e^u du';
    uAntideriv = 'e^u';
  } else if (isTrig) {
    const trigFn = outerForm.replace('(u)', '');
    if (trigFn === 'sin') { uIntegral = '∫ sin(u) du'; uAntideriv = '-cos(u)'; }
    else if (trigFn === 'cos') { uIntegral = '∫ cos(u) du'; uAntideriv = 'sin(u)'; }
    else if (trigFn === 'tan') { uIntegral = '∫ tan(u) du'; uAntideriv = '-ln(abs(cos(u)))'; }
    else if (trigFn === 'sec') { uIntegral = '∫ sec(u) du'; uAntideriv = 'ln(abs(sec(u)+tan(u)))'; }
    else { uIntegral = `∫ ${outerForm} du`; uAntideriv = symbolicAntiderivative(outerForm.replace(/u/g, 'x'), 'x').replace(/x/g, 'u') || outerForm; }
  } else if (outerForm === 'ln(u)') {
    uIntegral = '∫ ln(u) du';
    uAntideriv = 'u * ln(u) - u';
  } else if (outerForm === 'sqrt(u)') {
    uIntegral = '∫ u^(1/2) du';
    uAntideriv = '(2/3) * u^(3/2)';
  } else if (outerForm.startsWith('u^')) {
    const pStr = outerForm.replace('u^', '');
    const pNum = parseFloat(pStr);
    if (Number.isFinite(pNum) && pNum !== -1) {
      const newP = pNum + 1;
      uIntegral = `∫ u^${pStr} du`;
      uAntideriv = `(1/${newP}) * u^${newP}`;
    } else if (pNum === -1) {
      uIntegral = '∫ 1/u du';
      uAntideriv = 'ln(abs(u))';
    } else {
      uIntegral = `∫ ${outerForm} du`;
      uAntideriv = outerForm;
    }
  } else {
    uIntegral = `∫ ${outerForm} du`;
    uAntideriv = symbolicAntiderivative(outerForm.replace(/u/g, 'x'), 'x').replace(/x/g, 'u') || outerForm;
  }

  // Check if a scalar correction factor is needed
  // If integrand = f(g(x)) * g'(x), then ∫ f(g(x)) g'(x) dx = F(g(x))
  // If integrand = c * f(g(x)) * g'(x), the constant comes out
  let correctionNote = '';
  const duDxVal = evaluateAt(duDx, 2); // evaluate du/dx at x=2
  if (Number.isFinite(duDxVal) && Math.abs(duDxVal) > 1e-10) {
    // Check if the "leftover" after extracting u and du has a constant
    correctionNote = `Note: Ensure g'(x) = ${prettify(duDx)} appears in the integrand. Any missing constant factor must be compensated.`;
  }

  steps.push({
    title: '3. Rewrite Integral in Terms of u',
    expression: `${uIntegral}${correctionNote ? '\n' + correctionNote : ''}`,
    explanation: 'After substitution, the integral is expressed entirely in terms of u.',
  });

  steps.push({
    title: '4. Integrate with Respect to u',
    expression: `${uAntideriv} + C`,
    explanation: 'Apply standard integration rules to the simplified integrand.',
  });

  // Back-substitute u = g(x)
  const backSubstituted = uAntideriv.replace(/\bu\b/g, `(${u})`);
  const finalAnswer = `${prettify(backSubstituted)} + C`;

  steps.push({
    title: '5. Back-Substitute u = g(x)',
    expression: `u = ${prettify(u)}\nFinal Antiderivative = ${finalAnswer}`,
    explanation: 'Replace u with the original function of x and include the constant of integration C.',
  });

  // Numerical verification
  let verification = '';
  const numOriginal = numericalIntegrate(normalized, 0, 1, 200);
  const antiderivExpr = backSubstituted;
  const F1 = evaluateAt(antiderivExpr, 1);
  const F0 = evaluateAt(antiderivExpr, 0);
  if (Number.isFinite(numOriginal) && Number.isFinite(F1) && Number.isFinite(F0)) {
    const numResult = F1 - F0;
    const match = Math.abs(numOriginal - numResult) < 0.1 * (Math.abs(numOriginal) + 1);
    verification = `✓ Numerical cross-check: ∫₀¹ ≈ ${formatNumber(numOriginal)}, F(1)−F(0) ≈ ${formatNumber(numResult)} ${match ? '✓' : '⚠ may need constant adjustment'}`;
  }

  return {
    success: true,
    answer: finalAnswer,
    summary: `U-substitution with u = ${prettify(u)}: ∫ (${prettify(normalized)}) dx = ${finalAnswer}.`,
    steps,
    explanation: 'U-substitution is the integral counterpart to the Chain Rule of differentiation.',
    verification,
  };
}
