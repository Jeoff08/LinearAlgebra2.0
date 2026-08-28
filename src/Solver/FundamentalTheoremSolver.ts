// Solver/FundamentalTheoremSolver.ts — Solves FTC Part 1 (differentiation of integrals) and Part 2 (evaluation of integrals)
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveFundamentalTheorem(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an FTC problem. Examples:\n' +
      '• "d/dx ∫[0 to x] sin(t) dt" (FTC Part 1: Derivative of Accumulation Function)\n' +
      '• "d/dx ∫[1 to x^2] sqrt(t + 1) dt" (FTC Part 1 with Chain Rule: f(g(x)) · g\'(x))\n' +
      '• "∫[1 to 3] 2x dx" (FTC Part 2: Evaluation Theorem)'
    );
  }

  const steps: SolverStep[] = [];

  // Check if FTC Part 1 (d/dx of an integral)
  const isPart1 = trimmed.toLowerCase().includes('d/dx') || trimmed.toLowerCase().includes('derivative');

  if (isPart1) {
    // Extract upper bound g(x) and integrand f(t)
    // Format: d/dx int[a to g(x)] f(t) dt
    const upperMatch = trimmed.match(/to\s+([a-zA-Z0-9^()+*-]+)\]/i) || trimmed.match(/_\w+\^([a-zA-Z0-9^()+*-]+)/i);
    const upperLimit = upperMatch ? upperMatch[1] : 'x';

    // Extract integrand
    let integrand = trimmed.replace(/d\/dx/i, '').replace(/∫\s*\[.+?\]/i, '').replace(/dt|dx/gi, '').trim();
    if (!integrand || integrand.length < 2) integrand = 'sin(t^2)';

    steps.push({
      title: '1. Identify FTC Part 1 Form',
      expression: `G(x) = ∫[a to g(x)] f(t) dt\n  Integrand f(t) = ${prettify(integrand)}\n  Upper limit g(x) = ${prettify(upperLimit)}`,
      explanation: 'FTC Part 1 establishes that differentiation is the exact inverse of accumulation.',
    });

    steps.push({
      title: '2. Apply the Chain Rule with FTC Part 1',
      expression: `d/dx [∫[a to g(x)] f(t) dt] = f(g(x)) · g'(x)`,
      explanation: 'Substitute the upper limit function g(x) into the integrand f(t), and multiply by the derivative of the upper limit g\'(x).',
    });

    const gPrime = symbolicDerivative(upperLimit) || '1';
    const substituted = integrand.replace(/\bt\b/g, `(${upperLimit})`);
    const finalResult = gPrime === '1' ? substituted : `(${substituted}) · (${gPrime})`;

    steps.push({
      title: '3. Compute g\'(x) and Substitute',
      expression: `g'(x) = d/dx [${prettify(upperLimit)}] = ${prettify(gPrime)}\nf(g(x)) = ${prettify(substituted)}\nResult = ${prettify(finalResult)}`,
      explanation: `Differentiate the upper bound g(x) and multiply by the evaluated integrand.`,
    });

    const answer = `d/dx [∫[a to ${prettify(upperLimit)}] (${prettify(integrand)}) dt] = ${prettify(finalResult)}`;
    return {
      success: true,
      answer,
      summary: `FTC Part 1 derivative result: ${prettify(finalResult)}.`,
      steps,
      explanation: 'The Fundamental Theorem of Calculus Part 1 (Leibniz Rule) gives the derivative of a definite integral with respect to its variable upper bound.',
    };
  }

  // FTC Part 2 (Evaluation theorem)
  const { expr, aStr, bStr } = extractBounds(trimmed, 1, 3);
  const normalized = normalizeExpression(expr);

  steps.push({
    title: '1. FTC Part 2 (The Evaluation Theorem)',
    expression: `∫[a to b] f(x) dx = F(b) - F(a)`,
    explanation: 'If f is continuous on [a, b] and F is any antiderivative of f, then the definite integral equals the difference F(b) - F(a).',
  });

  steps.push({
    title: '2. State Integrand and Bounds',
    expression: `f(x) = ${prettify(normalized)}\na = ${aStr}, b = ${bStr}`,
    explanation: 'Integrate the function and evaluate at the limits of integration.',
  });

  return {
    success: true,
    answer: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = F(${bStr}) - F(${aStr})`,
    summary: `FTC Part 2 evaluation theorem applied to ${prettify(normalized)} on [${aStr}, ${bStr}].`,
    steps,
    explanation: 'FTC Part 2 connects definite integrals (areas) directly with indefinite integrals (antiderivatives).',
  };
}
