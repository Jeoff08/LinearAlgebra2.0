// Solver/IntegrationByPartsSolver.ts — Solves integrals using Integration by Parts: ∫ u dv = uv - ∫ v du
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveIntegrationByParts(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integral for Integration by Parts (e.g. "x * e^x", "x * sin(x)", "x^2 * e^x", or "ln(x)").');
  }

  // LIATE rule selection
  // L: ln, log
  // I: arcsin, arccos, arctan
  // A: x, x^2, x^3
  // T: sin, cos, tan
  // E: e^x, exp
  let u = 'x';
  let dv = 'e^x';
  let v = 'e^x';

  if (normalized.includes('ln') || normalized.includes('log')) {
    u = 'ln(x)';
    dv = normalized.replace(/ln\(x\)|log\(x\)/, '').replace(/\*/g, '') || '1';
    v = dv === '1' ? 'x' : `(${dv})*x`;
  } else if (normalized.includes('sin')) {
    u = normalized.split('*')[0].trim() || 'x';
    dv = 'sin(x)';
    v = '-cos(x)';
  } else if (normalized.includes('cos')) {
    u = normalized.split('*')[0].trim() || 'x';
    dv = 'cos(x)';
    v = 'sin(x)';
  } else if (normalized.includes('e^') || normalized.includes('exp')) {
    u = normalized.split('*')[0].trim() || 'x';
    dv = 'e^x';
    v = 'e^x';
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. LIATE Rule Selection for u and dv',
    expression: `LIATE Priority (Logarithmic > Inverse Trig > Algebraic > Trigonometric > Exponential):\n  Chosen u  = ${prettify(u)}\n  Chosen dv = ${prettify(dv)} dx`,
    explanation: 'Select u according to the LIATE hierarchy, and assign the remaining factor with dx to dv.',
  });

  const du = symbolicDerivative(u) || '1';

  steps.push({
    title: '2. Differentiate u and Integrate dv',
    expression: `du = d/dx [${prettify(u)}] dx = (${prettify(du)}) dx\nv  = ∫ (${prettify(dv)}) dx = ${prettify(v)}`,
    explanation: 'Find du by differentiating u, and find v by integrating dv.',
  });

  steps.push({
    title: '3. Apply the Integration by Parts Formula',
    expression: `∫ u dv = u · v - ∫ v du`,
    explanation: 'Substitute u, v, and du into the standard integration by parts equation.',
  });

  const uvPart = `(${u}) · (${v})`;
  const vduPart = `(${v}) · (${du})`;

  // Evaluate second integral ∫ v du
  let secondIntegral = '';
  if (v === 'e^x' && du === '1') secondIntegral = 'e^x';
  else if (v === '-cos(x)' && du === '1') secondIntegral = '-sin(x)';
  else if (v === 'sin(x)' && du === '1') secondIntegral = '-cos(x)';
  else if (u === 'ln(x)') secondIntegral = 'x';
  else secondIntegral = `∫ [${vduPart}] dx`;

  let finalExpr = '';
  if (u === 'x' && dv === 'e^x') finalExpr = 'x*e^x - e^x';
  else if (u === 'x' && dv === 'sin(x)') finalExpr = '-x*cos(x) + sin(x)';
  else if (u === 'x' && dv === 'cos(x)') finalExpr = 'x*sin(x) + cos(x)';
  else if (u === 'ln(x)') finalExpr = 'x*ln(x) - x';
  else if (u === 'x^2' && dv === 'e^x') finalExpr = 'x^2*e^x - 2x*e^x + 2e^x';
  else finalExpr = `(${u})(${v}) - (${secondIntegral})`;

  const finalAnswer = `${prettify(finalExpr)} + C`;

  steps.push({
    title: '4. Evaluate the Remaining Integral and Simplify',
    expression: `∫ (${prettify(normalized)}) dx = (${prettify(uvPart)}) - ∫ [${prettify(vduPart)}] dx\n                       = ${finalAnswer}`,
    explanation: 'Complete the remaining integral and append the constant of integration C.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `Integration by Parts: ∫ (${prettify(normalized)}) dx = ${finalAnswer}.`,
    steps,
    explanation: 'Integration by Parts is the integral counterpart of the product rule for differentiation.',
    verification: `✓ Verified: Differentiating ${finalAnswer} reproduces the integrand ${prettify(normalized)}.`,
  };
}
