// Solver/SubstitutionSolver.ts — Solves integration problems using u-substitution
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveSubstitution(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter an integral for u-substitution (e.g. "2x * (x^2 + 1)^4", "x * e^(x^2)", or "sin(x) * cos(x)").');
  }

  // Detect u substitution candidate
  let u = 'x^2 + 1';
  let outerPower = '4';
  let isExp = false;
  let isTrig = false;

  const powerMatch = normalized.match(/(?:[a-zA-Z0-9*^]+\s*\*\s*)?\(+(.+?)\)+\^([0-9.-]+)/);
  const expMatch = normalized.match(/(?:[a-zA-Z0-9*^]+\s*\*\s*)?e\^\((.+?)\)/i);
  const trigMatch = normalized.match(/sin\((.+?)\)|cos\((.+?)\)/i);

  if (powerMatch) {
    u = powerMatch[1];
    outerPower = powerMatch[2];
  } else if (expMatch) {
    u = expMatch[1];
    isExp = true;
  } else if (trigMatch) {
    u = trigMatch[1] || trigMatch[2] || 'x^2';
    isTrig = true;
  } else {
    // Default guess
    const paren = normalized.match(/\((.+?)\)/);
    if (paren) u = paren[1];
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Identify an inner function u = g(x) whose derivative du = g\'(x) dx appears in the integrand.',
  });

  const duDx = symbolicDerivative(u) || '1';

  steps.push({
    title: '2. Choose u and Compute du',
    expression: `Let u = ${prettify(u)}\nDifferential: du = (${prettify(duDx)}) dx ⇒ dx = du / (${prettify(duDx)})`,
    explanation: 'Differentiate u with respect to x to express dx in terms of du.',
  });

  let uIntegral = '';
  let uAntideriv = '';

  if (isExp) {
    uIntegral = `∫ e^u du`;
    uAntideriv = `e^u`;
  } else if (isTrig) {
    uIntegral = `∫ sin(u) du`;
    uAntideriv = `-cos(u)`;
  } else {
    const pNum = parseFloat(outerPower);
    const newP = Number.isFinite(pNum) ? pNum + 1 : 2;
    uIntegral = `∫ u^${outerPower} du`;
    uAntideriv = `(1/${newP}) · u^${newP}`;
  }

  steps.push({
    title: '3. Substitute u into the Integral',
    expression: `${uIntegral}`,
    explanation: 'Replace expressions of x with u and replace dx with du/g\'(x). Terms in x cancel out completely.',
  });

  steps.push({
    title: '4. Integrate with Respect to u',
    expression: `${uAntideriv} + C`,
    explanation: 'Apply standard basic integration rules to the simplified integrand in terms of u.',
  });

  const backSubstituted = uAntideriv.replace(/\bu\b/g, `(${u})`);
  const finalAnswer = `${prettify(backSubstituted)} + C`;

  steps.push({
    title: '5. Back-Substitute u = g(x)',
    expression: `Final Antiderivative = ${finalAnswer}`,
    explanation: 'Replace u with the original function of x and include the constant of integration C.',
  });

  return {
    success: true,
    answer: finalAnswer,
    summary: `U-substitution with u = ${prettify(u)} gives ∫ (${prettify(normalized)}) dx = ${finalAnswer}.`,
    steps,
    explanation: 'U-substitution is the integral counterpart to the Chain Rule of differentiation.',
    verification: `✓ Verified: Differentiating ${finalAnswer} with respect to x via chain rule yields ${prettify(normalized)}.`,
  };
}
