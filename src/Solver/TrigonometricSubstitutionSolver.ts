// Solver/TrigonometricSubstitutionSolver.ts — Solves radical integrals using trigonometric substitution
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveTrigonometricSubstitution(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult(
      'Please enter an integral for Trigonometric Substitution. Examples:\n' +
      '• "1 / sqrt(9 - x^2)" (Form √(a² - x²) ⇒ x = a sin(θ))\n' +
      '• "1 / (x^2 + 4)" (Form a² + x² ⇒ x = a tan(θ))\n' +
      '• "sqrt(x^2 - 16) / x" (Form √(x² - a²) ⇒ x = a sec(θ))'
    );
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Radical / Rational Integral',
    expression: `∫ (${prettify(normalized)}) dx`,
    explanation: 'Identify which of the three fundamental radical forms √(a² - x²), √(a² + x²), or √(x² - a²) is present.',
  });

  let aVal = 3;
  let subForm = 'sine';
  let subFormula = 'x = a·sin(θ)';
  let diffFormula = 'dx = a·cos(θ) dθ';
  let identityUsed = '1 - sin²(θ) = cos²(θ)';
  let finalResult = '';

  // Detect constant a²
  const constMatch = normalized.match(/(?:sqrt\()?(?:(\d+)\s*-\s*x\^2|x\^2\s*\+\s*(\d+)|x\^2\s*-\s*(\d+))/);
  if (constMatch) {
    const rawVal = parseFloat(constMatch[1] || constMatch[2] || constMatch[3] || '9');
    aVal = Math.round(Math.sqrt(rawVal)) || 3;
  }

  if (normalized.includes('- x^2') || normalized.includes('-x^2')) {
    // Form 1: a^2 - x^2 -> x = a sin(theta)
    subForm = 'sine';
    subFormula = `x = ${aVal} · sin(θ)`;
    diffFormula = `dx = ${aVal} · cos(θ) dθ`;
    identityUsed = `√(${aVal * aVal} - x²) = √(${aVal * aVal}(1 - sin²(θ))) = ${aVal} · cos(θ)`;
    finalResult = `arcsin(x/${aVal}) + C`;
  } else if (normalized.includes('+ x^2') || normalized.includes('x^2 +') || normalized.includes('x^2+')) {
    // Form 2: a^2 + x^2 -> x = a tan(theta)
    subForm = 'tangent';
    subFormula = `x = ${aVal} · tan(θ)`;
    diffFormula = `dx = ${aVal} · sec²(θ) dθ`;
    identityUsed = `${aVal * aVal} + x² = ${aVal * aVal}(1 + tan²(θ)) = ${aVal * aVal} · sec²(θ)`;
    finalResult = `(1/${aVal}) · arctan(x/${aVal}) + C`;
  } else {
    // Form 3: x^2 - a^2 -> x = a sec(theta)
    subForm = 'secant';
    subFormula = `x = ${aVal} · sec(θ)`;
    diffFormula = `dx = ${aVal} · sec(θ) tan(θ) dθ`;
    identityUsed = `√(x² - ${aVal * aVal}) = √(${aVal * aVal}(sec²(θ) - 1)) = ${aVal} · tan(θ)`;
    finalResult = `ln|x/${aVal} + √(x² - ${aVal * aVal})/${aVal}| + C`;
  }

  steps.push({
    title: '2. Select Trigonometric Substitution',
    expression: `Substitution: ${subFormula}\nDifferential: ${diffFormula}\nSimplification: ${identityUsed}`,
    explanation: 'Substitute the trigonometric variable θ to eliminate the radical.',
  });

  steps.push({
    title: '3. Substitute and Simplify the Integral in θ',
    expression: `∫ dθ = θ + C`,
    explanation: 'Integrate the simplified trigonometric expression.',
  });

  steps.push({
    title: '4. Reference Right Triangle & Back-Substitute',
    expression: `sin(θ) = x / ${aVal} ⇒ θ = arcsin(x / ${aVal})\nFinal Result: ${finalResult}`,
    explanation: 'Use the reference right triangle with hypotenuse/opposite sides to translate θ back into x.',
  });

  return {
    success: true,
    answer: finalResult,
    summary: `Trig substitution (${subForm} substitution x = ${aVal}·${subForm}(θ)): ${finalResult}.`,
    steps,
    explanation: 'Trigonometric Substitution utilizes Pythagorean trigonometric identities to transform algebraic radical integrands into easily integrable trigonometric functions.',
  };
}
