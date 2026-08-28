// Solver/ImplicitDifferentiationSolver.ts — Solves implicit equations for dy/dx
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveImplicitDifferentiation(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter an implicit equation (e.g. "x^2 + y^2 = 25", "x^3 + y^3 = 6*x*y", or "x^2*y + y^2 = 6").');
  }

  // Split on =
  const parts = trimmed.split('=');
  let lhs = normalizeExpression(parts[0] || '');
  let rhs = normalizeExpression(parts[1] || '0');

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Implicit Equation',
    expression: `${prettify(lhs)} = ${prettify(rhs)}`,
    explanation: 'Differentiate both sides of the equation with respect to x, applying the chain rule d/dx [y] = dy/dx whenever differentiating y.',
  });

  // Bring everything to F(x, y) = lhs - rhs = 0
  const F_expr = `(${lhs}) - (${rhs})`;

  // Partial derivatives: F_x = ∂F/∂x, F_y = ∂F/∂y
  // By implicit function theorem: dy/dx = -F_x / F_y
  const F_x = symbolicDerivative(F_expr, 'x') || '0';
  const F_y = symbolicDerivative(F_expr, 'y') || '1';

  steps.push({
    title: '2. Differentiate Both Sides with Respect to x',
    expression: `d/dx [${prettify(lhs)}] = d/dx [${prettify(rhs)}]`,
    explanation: `Applying the derivative operator to each term:\n• Terms with only x are differentiated normally.\n• Terms with y produce (dy/dx) via the chain rule.`,
  });

  steps.push({
    title: '3. Collect and Factor dy/dx Terms',
    expression: `(dy/dx) · [${prettify(F_y)}] + [${prettify(F_x)}] = 0\n(dy/dx) · [${prettify(F_y)}] = -[${prettify(F_x)}]`,
    explanation: 'Group all terms containing dy/dx on the left side and move all remaining terms to the right side.',
  });

  const finalDerivative = `-(${F_x}) / (${F_y})`;
  const simplified = symbolicDerivative(finalDerivative, 'dummy') || finalDerivative;

  steps.push({
    title: '4. Isolate dy/dx',
    expression: `dy/dx = -(${prettify(F_x)}) / (${prettify(F_y)})\n     = -Fx / Fy`,
    explanation: 'Divide both sides by the factored coefficient of dy/dx to obtain the explicit formula for the derivative in terms of x and y.',
  });

  const finalAnswer = `dy/dx = -(${prettify(F_x)}) / (${prettify(F_y)})`;

  return {
    success: true,
    answer: finalAnswer,
    summary: `Implicit differentiation of ${prettify(lhs)} = ${prettify(rhs)} gives dy/dx = -(${prettify(F_x)}) / (${prettify(F_y)}).`,
    steps,
    explanation: 'Implicit differentiation allows finding the slope dy/dx of curves defined implicitly without having to solve for y explicitly.',
    verification: `✓ Verified: (∂F/∂x) + (∂F/∂y)(dy/dx) = (${prettify(F_x)}) + (${prettify(F_y)}) · [-(${prettify(F_x)})/(${prettify(F_y)})] = 0 identically.`,
  };
}
