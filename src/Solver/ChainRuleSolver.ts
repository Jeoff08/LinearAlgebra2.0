// Solver/ChainRuleSolver.ts — Solves composite function derivatives using the chain rule: d/dx [f(g(x))] = f'(g(x)) · g'(x)
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyDerivative } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveChainRule(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a composite function (e.g. "(3x^2 + 5)^4", "sin(2x + 1)", "e^(x^2)", or "sqrt(4 - x^2)").');
  }

  // Decompose outer vs inner function
  let outer = 'u';
  let inner = 'x';

  // Check common composite patterns:
  // Pattern 1: (...) ^ n
  const powerMatch = normalized.match(/^\((.+?)\)\s*\^\s*([0-9.-]+)$/);
  // Pattern 2: sin(...), cos(...), tan(...), ln(...), exp(...)
  const trigMatch = normalized.match(/^(sin|cos|tan|sec|csc|cot|ln|log|exp|sqrt)\((.+?)\)$/i);
  // Pattern 3: e^(...)
  const expMatch = normalized.match(/^e\^\((.+?)\)$/i);

  if (powerMatch) {
    inner = powerMatch[1];
    outer = `u^${powerMatch[2]}`;
  } else if (trigMatch) {
    const fnName = trigMatch[1].toLowerCase();
    inner = trigMatch[2];
    outer = `${fnName}(u)`;
  } else if (expMatch) {
    inner = expMatch[1];
    outer = 'e^u';
  } else {
    // Default fallback decomposition
    inner = normalized.replace(/^[a-z]+\(/i, '').replace(/\)$/, '') || 'x';
    outer = normalized.replace(inner, 'u');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Decompose into Outer and Inner Functions',
    expression: `Composite: y = f(g(x))\n  Inner function: u = g(x) = ${prettify(inner)}\n  Outer function: y = f(u) = ${prettify(outer)}`,
    explanation: 'Identify the inner function u and rewrite the original function in terms of u.',
  });

  const dyDu = symbolicDerivative(outer, 'u') || 'f\'(u)';
  const duDx = symbolicDerivative(inner, 'x') || 'g\'(x)';

  steps.push({
    title: '2. Differentiate Outer and Inner Functions',
    expression: `dy/du = d/du [${prettify(outer)}] = ${prettify(dyDu)}\ndu/dx = d/dx [${prettify(inner)}] = ${prettify(duDx)}`,
    explanation: 'Find the derivative of the outer function with respect to u, and the inner function with respect to x.',
  });

  steps.push({
    title: '3. Apply the Chain Rule Formula',
    expression: `dy/dx = (dy/du) · (du/dx)`,
    explanation: 'Multiply the derivative of the outer function by the derivative of the inner function.',
  });

  const substituted = dyDu.replace(/\bu\b/g, `(${inner})`);
  const finalDeriv = symbolicDerivative(normalized) || `(${substituted}) * (${duDx})`;

  steps.push({
    title: '4. Substitute u = g(x) and Multiply',
    expression: `dy/dx = [${prettify(substituted)}] · [${prettify(duDx)}]\n     = ${prettify(finalDeriv)}`,
    explanation: 'Replace all occurrences of u with g(x) and simplify the final algebraic expression.',
  });

  const finalAnswer = `dy/dx = ${prettify(finalDeriv)}`;
  const verification = verifyDerivative(normalized, finalDeriv).message;

  const points = generateGraphPoints(normalized, -4, 4, 100);
  const derivPoints = generateGraphPoints(finalDeriv, -4, 4, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Chain Rule: d/dx [${prettify(normalized)}] = ${prettify(finalDeriv)}`,
    steps,
    explanation: 'The Chain Rule allows us to differentiate composite functions by multiplying the derivative of the outer function by the derivative of the inner function.',
    verification,
    graph: {
      points,
      equation: `y = ${prettify(normalized)}`,
      xMin: -4,
      xMax: 4,
      additionalCurves: derivPoints.length > 0 ? [
        { points: derivPoints, label: `dy/dx = ${prettify(finalDeriv)}`, color: '#2563EB' }
      ] : undefined,
    },
  };
}
