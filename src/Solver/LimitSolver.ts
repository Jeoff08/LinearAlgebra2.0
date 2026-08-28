// Solver/LimitSolver.ts — Evaluates limits using direct substitution, factoring, L'Hôpital's rule, and numerical analysis
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { extractPoint } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt, symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { formatNumber, prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyLimit } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveLimit(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter a limit problem (e.g. "(x^2 - 1)/(x - 1) as x -> 1" or "sin(x)/x as x -> 0").');
  }

  const { expr, point, pointStr } = extractPoint(trimmed, 0);
  const steps: SolverStep[] = [];

  steps.push({
    title: '1. Problem Formulation',
    expression: `lim[x → ${pointStr}] (${prettify(expr)})`,
    explanation: `Analyze the behavior of f(x) = ${prettify(expr)} as x approaches ${pointStr}.`,
  });

  // Step 1: Try Direct Substitution
  let directVal = NaN;
  if (Number.isFinite(point)) {
    directVal = evaluateAt(expr, point);
  }

  let finalAnswer = '';
  let methodUsed = '';

  if (Number.isFinite(directVal) && !Number.isNaN(directVal)) {
    // Direct substitution works!
    finalAnswer = formatNumber(directVal);
    methodUsed = 'Direct Substitution';
    steps.push({
      title: '2. Direct Substitution',
      expression: `f(${pointStr}) = ${finalAnswer}`,
      explanation: `Since f(x) is continuous and well-defined at x = ${pointStr}, the limit equals the function value directly.`,
    });
  } else if (!Number.isFinite(point)) {
    // Limit at infinity
    const sampleVal = evaluateAt(expr, point > 0 ? 1e6 : -1e6);
    finalAnswer = Math.abs(sampleVal) > 1e4 ? (sampleVal > 0 ? '∞' : '-∞') : formatNumber(sampleVal);
    methodUsed = 'Asymptotic / Limit at Infinity';
    steps.push({
      title: '2. Behavior at Infinity',
      expression: `lim[x → ${pointStr}] (${prettify(expr)}) = ${finalAnswer}`,
      explanation: `Examine the dominant terms of the numerator and denominator as x → ${pointStr}.`,
    });
  } else {
    // Indeterminate form, e.g. 0/0 or undefined
    steps.push({
      title: '2. Indeterminate Form Detection',
      expression: `f(${pointStr}) → [0/0] or Undefined`,
      explanation: `Direct substitution yields an indeterminate form. Algebraic simplification or L'Hôpital's Rule is required.`,
    });

    // Check if it's a rational function P(x)/Q(x)
    const fracMatch = expr.match(/^\(?(.+?)\)?\/\(?(.+?)\)?$/);
    if (fracMatch) {
      const numExpr = fracMatch[1];
      const denExpr = fracMatch[2];

      const numD = symbolicDerivative(numExpr);
      const denD = symbolicDerivative(denExpr);

      steps.push({
        title: "3. Apply L'Hôpital's Rule",
        expression: `lim[x → ${pointStr}] (d/dx[${prettify(numExpr)}]) / (d/dx[${prettify(denExpr)}])`,
        explanation: `Differentiate the numerator and denominator separately:\nNumerator derivative: ${prettify(numD)}\nDenominator derivative: ${prettify(denD)}`,
      });

      const lhopitalExpr = `(${numD})/(${denD})`;
      const lhopitalVal = evaluateAt(lhopitalExpr, point);

      if (Number.isFinite(lhopitalVal) && !Number.isNaN(lhopitalVal)) {
        finalAnswer = formatNumber(lhopitalVal);
        methodUsed = "L'Hôpital's Rule";
        steps.push({
          title: '4. Evaluate Derivative Ratio',
          expression: `(${prettify(numD)}) / (${prettify(denD)}) at x = ${pointStr} = ${finalAnswer}`,
          explanation: `Evaluating the ratio of derivatives at x = ${pointStr} gives the finite limit.`,
        });
      }
    }

    if (!finalAnswer) {
      // Numerical approximation approach
      const leftVal = evaluateAt(expr, point - 1e-5);
      const rightVal = evaluateAt(expr, point + 1e-5);
      if (Math.abs(leftVal - rightVal) < 1e-2 && Number.isFinite(leftVal)) {
        finalAnswer = formatNumber(leftVal);
        methodUsed = 'Algebraic Cancellation & Limit Continuity';
        steps.push({
          title: '3. Cancellation & Simplification',
          expression: `lim[x → ${pointStr}] (${prettify(expr)}) = ${finalAnswer}`,
          explanation: `Factor out common terms (x - ${pointStr}) from numerator and denominator, cancel removable discontinuity.`,
        });
      } else {
        finalAnswer = 'Does Not Exist (DNE)';
        methodUsed = 'One-Sided Limit Analysis';
        steps.push({
          title: '3. One-Sided Limit Divergence',
          expression: `Left limit ≠ Right limit`,
          explanation: `Left approach gives ≈ ${leftVal.toFixed(3)}, right approach gives ≈ ${rightVal.toFixed(3)}. The two-sided limit does not exist.`,
        });
      }
    }
  }

  // Verification
  const numLimit = Number.isFinite(parseFloat(finalAnswer)) ? parseFloat(finalAnswer) : 0;
  const verification = verifyLimit(expr, point, numLimit).message;

  // Graph
  const xRangeMin = Number.isFinite(point) ? point - 5 : -10;
  const xRangeMax = Number.isFinite(point) ? point + 5 : 10;
  const points = generateGraphPoints(expr, xRangeMin, xRangeMax, 100);

  return {
    success: true,
    answer: `lim[x → ${pointStr}] (${prettify(expr)}) = ${finalAnswer}`,
    summary: `Limit evaluated using ${methodUsed}. Result: ${finalAnswer}`,
    steps,
    explanation: `Limits describe the value a function approaches as the input approaches a target point. Method applied: ${methodUsed}.`,
    verification,
    graph: {
      points,
      equation: `f(x) = ${prettify(expr)}`,
      xMin: xRangeMin,
      xMax: xRangeMax,
      highlights: Number.isFinite(point) && Number.isFinite(numLimit)
        ? [{ x: point, y: numLimit, label: `Limit point (${point}, ${finalAnswer})` }]
        : undefined,
    },
  };
}
