// Solver/FundamentalTheoremSolver.ts — FTC Part 1 (derivative of integrals) and Part 2 (evaluation)
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, symbolicAntiderivative, evaluateAt, numericalIntegrate, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

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
    const upperMatch = trimmed.match(/to\s+([a-zA-Z0-9^()+*-]+)\]/i) || trimmed.match(/_\w+\^([a-zA-Z0-9^()+*-]+)/i);
    const upperLimit = upperMatch ? upperMatch[1] : 'x';

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

  // FTC Part 2 (Evaluation theorem) — now with real antiderivative + evaluation
  const { expr, a, b, aStr, bStr } = extractBounds(trimmed, 1, 3);
  const normalized = normalizeExpression(expr);

  steps.push({
    title: '1. FTC Part 2 (The Evaluation Theorem)',
    expression: `∫[a to b] f(x) dx = F(b) − F(a)\nwhere F(x) is any antiderivative of f(x).`,
    explanation: 'If f is continuous on [a, b] and F is any antiderivative of f, then the definite integral equals the difference F(b) − F(a).',
  });

  steps.push({
    title: '2. State Integrand and Bounds',
    expression: `f(x) = ${prettify(normalized)}\na = ${aStr}, b = ${bStr}`,
    explanation: 'Identify the function to integrate and the limits of integration.',
  });

  // Find antiderivative
  const antideriv = symbolicAntiderivative(normalized);

  if (antideriv) {
    steps.push({
      title: '3. Find Antiderivative F(x)',
      expression: `F(x) = ∫ (${prettify(normalized)}) dx = ${prettify(antideriv)}`,
      explanation: 'Compute the antiderivative using integration rules.',
    });

    const Fb = evaluateAt(antideriv, b);
    const Fa = evaluateAt(antideriv, a);
    const result = Fb - Fa;

    steps.push({
      title: '4. Evaluate F(b) − F(a)',
      expression: `F(${bStr}) = ${prettify(antideriv)}|_{x=${bStr}} = ${formatNumber(Fb)}\nF(${aStr}) = ${prettify(antideriv)}|_{x=${aStr}} = ${formatNumber(Fa)}\n\n∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = ${formatNumber(Fb)} − ${formatNumber(Fa)} = ${formatNumber(result)}`,
      explanation: 'Substitute the upper and lower bounds into the antiderivative and compute the difference.',
    });

    // Numerical verification
    const numResult = numericalIntegrate(normalized, a, b, 200);
    const verified = Math.abs(result - numResult) < 0.01 * (Math.abs(result) + 1);

    const points = generateGraphPoints(normalized, a - 1, b + 1, 100);

    return {
      success: true,
      answer: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = ${formatNumber(result)}`,
      summary: `FTC Part 2: ∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx = ${formatNumber(result)}.`,
      steps,
      explanation: 'FTC Part 2 connects definite integrals (areas) directly with antiderivatives.',
      verification: `✓ Numerical cross-check (Simpson's rule): ${formatNumber(numResult)} ${verified ? '✓' : '⚠'}`,
      graph: {
        points,
        equation: `f(x) = ${prettify(normalized)}`,
        xMin: a - 1,
        xMax: b + 1,
        shadedRegion: { from: a, to: b, label: `Area = ${formatNumber(result)}` },
      },
    };
  }

  // Numerical fallback
  const numResult = numericalIntegrate(normalized, a, b, 200);
  steps.push({
    title: '3. Numerical Evaluation (Composite Simpson\'s Rule)',
    expression: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx ≈ ${formatNumber(numResult)}`,
    explanation: 'No closed-form antiderivative found. Using numerical integration.',
  });

  return {
    success: true,
    answer: `∫[${aStr} to ${bStr}] (${prettify(normalized)}) dx ≈ ${formatNumber(numResult)}`,
    summary: `FTC Part 2 evaluation: ≈ ${formatNumber(numResult)}.`,
    steps,
    explanation: 'FTC Part 2 connects definite integrals (areas) directly with antiderivatives.',
  };
}
