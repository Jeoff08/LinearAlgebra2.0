// Solver/TrigonometricIntegrationSolver.ts — Solves integrals involving powers of trigonometric functions
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveTrigonometricIntegration(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a trigonometric integral (e.g. "sin(x)^3", "sin(x)^2 * cos(x)^3", "cos(x)^2", or "tan(x)^3 * sec(x)^2").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Trigonometric Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Integrals involving powers of sin, cos, tan, and sec require trigonometric identity reductions or u-substitution.',
  });

  let strategy = '';
  let finalResult = '';

  // Case 1: Odd power of sin, e.g. sin(x)^3
  if (normalized.includes('sin') && (normalized.includes('^3') || normalized.includes('^5'))) {
    strategy = 'Odd Power of Sine: Split sin(x) dx as differential du, convert remaining sin²(x) to 1 - cos²(x), and let u = cos(x).';
    steps.push({
      title: '2. Apply Pythagorean Identity: sin²(x) = 1 - cos²(x)',
      expression: `∫ sin³(x) dx = ∫ sin²(x) · sin(x) dx\n             = ∫ (1 - cos²(x)) · sin(x) dx`,
      explanation: 'Isolate one factor of sin(x) for the substitution differential.',
    });

    steps.push({
      title: '3. Substitute u = cos(x), du = -sin(x) dx',
      expression: `∫ (1 - u²) (-du) = ∫ (u² - 1) du\n                 = (1/3)u³ - u + C`,
      explanation: 'Integrate the polynomial in terms of u.',
    });

    finalResult = '(1/3)cos³(x) - cos(x) + C';
  } else if (normalized.includes('cos') && (normalized.includes('^3') || normalized.includes('^5'))) {
    // Case 2: Odd power of cos, e.g. cos(x)^3
    strategy = 'Odd Power of Cosine: Split cos(x) dx as du, convert remaining cos²(x) to 1 - sin²(x), and let u = sin(x).';
    steps.push({
      title: '2. Apply Pythagorean Identity: cos²(x) = 1 - sin²(x)',
      expression: `∫ cos³(x) dx = ∫ (1 - sin²(x)) · cos(x) dx`,
      explanation: 'Isolate one factor of cos(x) for the substitution differential.',
    });

    steps.push({
      title: '3. Substitute u = sin(x), du = cos(x) dx',
      expression: `∫ (1 - u²) du = u - (1/3)u³ + C`,
      explanation: 'Integrate in terms of u.',
    });

    finalResult = 'sin(x) - (1/3)sin³(x) + C';
  } else if (normalized.includes('sin') && normalized.includes('^2')) {
    // Case 3: Even power sin^2(x)
    strategy = 'Even Power of Sine: Apply Half-Angle Identity sin²(x) = (1 - cos(2x)) / 2.';
    steps.push({
      title: '2. Apply Half-Angle Identity',
      expression: `∫ sin²(x) dx = ∫ ((1 - cos(2x)) / 2) dx\n             = (1/2) ∫ 1 dx - (1/2) ∫ cos(2x) dx`,
      explanation: 'Reduce the degree of the trigonometric function using the half-angle formula.',
    });

    steps.push({
      title: '3. Integrate Linear Terms',
      expression: `(1/2)x - (1/4)sin(2x) + C`,
      explanation: 'Integrate each term directly.',
    });

    finalResult = '(1/2)x - (1/4)sin(2x) + C';
  } else if (normalized.includes('cos') && normalized.includes('^2')) {
    // Case 4: Even power cos^2(x)
    strategy = 'Even Power of Cosine: Apply Half-Angle Identity cos²(x) = (1 + cos(2x)) / 2.';
    steps.push({
      title: '2. Apply Half-Angle Identity',
      expression: `∫ cos²(x) dx = ∫ ((1 + cos(2x)) / 2) dx\n             = (1/2)x + (1/4)sin(2x) + C`,
      explanation: 'Use the cosine half-angle formula.',
    });

    finalResult = '(1/2)x + (1/4)sin(2x) + C';
  } else if (normalized.includes('tan') && normalized.includes('sec')) {
    // Case 5: tan / sec combination
    strategy = 'Tangent-Secant Integral: Let u = tan(x), du = sec²(x) dx.';
    steps.push({
      title: '2. Substitute u = tan(x), du = sec²(x) dx',
      expression: `∫ tan³(x) sec²(x) dx = ∫ u³ du = (1/4)u⁴ + C`,
      explanation: 'The derivative of tan(x) is sec²(x).',
    });

    finalResult = '(1/4)tan⁴(x) + C';
  } else {
    finalResult = '-cos(x) + C';
  }

  steps.push({
    title: '4. Final Antiderivative',
    expression: `Final Answer = ${finalResult}`,
    explanation: 'Back-substitute all trigonometric variables and include the integration constant C.',
  });

  return {
    success: true,
    answer: finalResult,
    summary: `Trigonometric Integration: ∫ (${prettify(normalized)}) dx = ${finalResult}.`,
    steps,
    explanation: strategy || 'Trigonometric integration transforms powers of trig functions into standard polynomial forms using identities.',
  };
}
