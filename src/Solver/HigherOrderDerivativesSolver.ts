// Solver/HigherOrderDerivativesSolver.ts — Computes nth-order derivatives with all intermediate steps
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, derivativeNotation } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveHigherOrderDerivatives(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter a function and order (e.g. "x^5 - 4x^3 + 2x, order = 3" or "sin(x), order = 4").');
  }

  // Parse order: e.g. "order = 3" or ", 3" or "nth = 2"
  let order = 2; // Default to 2nd derivative (acceleration / concavity)
  let expr = trimmed;

  const orderMatch = trimmed.match(/(?:,\s*(?:order\s*=\s*|n\s*=\s*)?|order\s*=\s*)(\d+)/i);
  if (orderMatch) {
    order = Math.min(Math.max(parseInt(orderMatch[1], 10), 1), 6);
    expr = trimmed.slice(0, orderMatch.index).trim().replace(/,+$/, '');
  }

  const normalized = normalizeExpression(expr);
  const steps: SolverStep[] = [];

  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}\nTarget Order: n = ${order}`,
    explanation: `Compute successive derivatives up to order ${order}: ${derivativeNotation(prettify(normalized), order)}.`,
  });

  let currentExpr = normalized;
  const history: { order: number; expr: string }[] = [];

  for (let k = 1; k <= order; k++) {
    const nextD = symbolicDerivative(currentExpr) || '0';
    history.push({ order: k, expr: nextD });

    const notation = k === 1 ? "f'(x)" : (k === 2 ? "f''(x)" : (k === 3 ? "f'''(x)" : `f^(${k})(x)`));
    const physicalMeaning = k === 1 ? ' (Velocity / Slope)' : (k === 2 ? ' (Acceleration / Concavity)' : (k === 3 ? ' (Jerk)' : ''));

    steps.push({
      title: `${k + 1}. Derivative Order ${k}: ${notation}${physicalMeaning}`,
      expression: `${notation} = d/dx [${prettify(currentExpr)}] = ${prettify(nextD)}`,
      explanation: `Differentiate the ${k === 1 ? 'original function' : `order ${k - 1} derivative`} with respect to x.`,
    });

    currentExpr = nextD;
  }

  const finalAnswer = `f^(${order})(x) = ${prettify(currentExpr)}`;
  const points = generateGraphPoints(normalized, -5, 5, 100);
  const finalPoints = generateGraphPoints(currentExpr, -5, 5, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `The order-${order} derivative of ${prettify(normalized)} is ${prettify(currentExpr)}.`,
    steps,
    explanation: `Higher-order derivatives represent the rate of change of the rate of change. The 2nd derivative governs concavity and acceleration.`,
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -5,
      xMax: 5,
      additionalCurves: finalPoints.length > 0 ? [
        { points: finalPoints, label: `f^(${order})(x) = ${prettify(currentExpr)}`, color: '#2563EB' }
      ] : undefined,
    },
  };
}
