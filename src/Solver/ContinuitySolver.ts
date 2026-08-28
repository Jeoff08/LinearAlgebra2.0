// Solver/ContinuitySolver.ts — Analyzes function continuity at a point and classifies discontinuities
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { extractPoint } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { formatNumber, prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveContinuity(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter a continuity problem (e.g. "(x^2 - 4)/(x - 2) at x = 2" or "x^2 + 3x at x = 1").');
  }

  const { expr, point, pointStr } = extractPoint(trimmed, 0);
  const steps: SolverStep[] = [];

  steps.push({
    title: '1. Continuity Definition (3 Conditions)',
    expression: `f(x) is continuous at x = c if and only if:\n1) f(c) is defined\n2) lim[x → c] f(x) exists\n3) lim[x → c] f(x) = f(c)`,
    explanation: `Testing function f(x) = ${prettify(expr)} at point c = ${pointStr}.`,
  });

  // Condition 1: Evaluate f(c)
  const fc = evaluateAt(expr, point);
  const isDefined = Number.isFinite(fc) && !Number.isNaN(fc);
  steps.push({
    title: '2. Condition 1: Is f(c) defined?',
    expression: isDefined ? `f(${pointStr}) = ${formatNumber(fc)}` : `f(${pointStr}) is Undefined`,
    explanation: isDefined
      ? `Condition 1 is SATISFIED. f(${pointStr}) = ${formatNumber(fc)}.`
      : `Condition 1 FAILS. The function has a division by zero or is not defined at x = ${pointStr}.`,
  });

  // Condition 2: Evaluate limit
  const leftVal = evaluateAt(expr, point - 1e-5);
  const rightVal = evaluateAt(expr, point + 1e-5);
  const limitExists = Math.abs(leftVal - rightVal) < 1e-2 && Number.isFinite(leftVal);
  const limitVal = limitExists ? (leftVal + rightVal) / 2 : NaN;

  steps.push({
    title: '3. Condition 2: Does lim[x → c] f(x) exist?',
    expression: limitExists
      ? `lim[x → ${pointStr}⁻] f(x) ≈ ${leftVal.toFixed(3)}, lim[x → ${pointStr}⁺] f(x) ≈ ${rightVal.toFixed(3)} ⇒ Limit = ${formatNumber(limitVal)}`
      : `lim[x → ${pointStr}⁻] f(x) = ${leftVal.toFixed(3)} ≠ lim[x → ${pointStr}⁺] f(x) = ${rightVal.toFixed(3)}`,
    explanation: limitExists
      ? `Condition 2 is SATISFIED. Left and right hand limits match at ${formatNumber(limitVal)}.`
      : `Condition 2 FAILS. Left and right hand limits do not match or diverge to infinity.`,
  });

  // Condition 3 & Classification
  let isContinuous = false;
  let discontinuityType = '';
  let finalAnswer = '';

  if (isDefined && limitExists && Math.abs(fc - limitVal) < 1e-3) {
    isContinuous = true;
    finalAnswer = `Continuous at x = ${pointStr}`;
    steps.push({
      title: '4. Condition 3: Does lim[x → c] f(x) = f(c)?',
      expression: `${formatNumber(limitVal)} = ${formatNumber(fc)} (Equal)`,
      explanation: `All 3 continuity conditions are met. f(x) is continuous at x = ${pointStr}.`,
    });
  } else {
    isContinuous = false;
    if (!isDefined && limitExists) {
      discontinuityType = 'Removable Discontinuity (Hole)';
    } else if (Math.abs(leftVal - rightVal) >= 1e-2 && Number.isFinite(leftVal) && Number.isFinite(rightVal)) {
      discontinuityType = 'Jump Discontinuity';
    } else {
      discontinuityType = 'Infinite / Essential Discontinuity (Vertical Asymptote)';
    }
    finalAnswer = `Discontinuous at x = ${pointStr} (${discontinuityType})`;

    steps.push({
      title: '4. Discontinuity Classification',
      expression: `Type: ${discontinuityType}`,
      explanation: `Because one or more conditions failed, f(x) has a ${discontinuityType} at x = ${pointStr}.`,
    });
  }

  const xMin = point - 5;
  const xMax = point + 5;
  const points = generateGraphPoints(expr, xMin, xMax, 120);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Continuity analysis at x = ${pointStr}: ${finalAnswer}.`,
    steps,
    explanation: isContinuous
      ? `The graph of f(x) can be drawn without lifting the pencil at x = ${pointStr}.`
      : `The function is broken or undefined at x = ${pointStr}, resulting in a ${discontinuityType}.`,
    graph: {
      points,
      equation: `f(x) = ${prettify(expr)}`,
      xMin,
      xMax,
      highlights: [{ x: point, y: isDefined ? fc : (limitExists ? limitVal : 0), label: finalAnswer }],
    },
  };
}
