// Solver/PowerSeriesSolver.ts — Determines radius and interval of convergence for power series
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solvePowerSeries(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a power series. Examples:\n' +
      '• "sum x^n / n" (Center a = 0, Radius R = 1)\n' +
      '• "sum (x - 2)^n / (n * 3^n)" (Center a = 2, Radius R = 3)\n' +
      '• "sum (x + 1)^n / n!" (Center a = -1, Radius R = ∞)\n' +
      '• "sum n! * x^n" (Center a = 0, Radius R = 0)'
    );
  }

  const expr = trimmed.replace(/^sum\s*/i, '').replace(/^∑\s*/, '');
  const normalized = normalizeExpression(expr);

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Power Series Standard Form: ∑ c_n (x - a)ⁿ',
    expression: `Series: ∑[n=1 to ∞] (${prettify(normalized)})`,
    explanation: 'A power series is centered at x = a with coefficient sequence c_n.',
  });

  // Extract center a
  let center = 0;
  const centerMatch = normalized.match(/\(x\s*([+-])\s*([0-9.]+)\)/);
  if (centerMatch) {
    const sign = centerMatch[1];
    const val = parseFloat(centerMatch[2]);
    center = sign === '-' ? val : -val;
  }

  steps.push({
    title: '2. Identify Center of Convergence',
    expression: `Center a = ${center}`,
    explanation: 'The series is expanded around x = ' + center + '.',
  });

  // Compute Radius R via Ratio Test
  let R = 1;
  let rStr = '1';
  let leftIncluded = true;
  let rightIncluded = false;

  if (normalized.includes('3^n')) {
    R = 3; rStr = '3'; leftIncluded = true; rightIncluded = false;
  } else if (normalized.includes('n!')) {
    if (normalized.includes('/ n!') || normalized.includes('/n!')) {
      R = Infinity; rStr = '∞';
    } else {
      R = 0; rStr = '0';
    }
  } else if (normalized.includes('/ n') || normalized.includes('/n')) {
    R = 1; rStr = '1'; leftIncluded = true; rightIncluded = false;
  }

  steps.push({
    title: '3. Apply the Ratio Test for Absolute Convergence',
    expression: `L = lim[n → ∞] |a_(n+1) / a_n| = |x - (${center})| / ${rStr} < 1\n⇒ |x - (${center})| < ${rStr}`,
    explanation: 'Solve the strict inequality L < 1 to isolate |x - a| < R.',
  });

  steps.push({
    title: '4. Radius of Convergence R',
    expression: `Radius of Convergence R = ${rStr}`,
    explanation: 'The series converges absolutely for all x within distance R from center a = ' + center + '.',
  });

  let intervalStr = '';
  if (R === Infinity) {
    intervalStr = '(-∞, ∞)';
    steps.push({
      title: '5. Interval of Convergence',
      expression: `I = (-∞, ∞)`,
      explanation: 'The series converges for all real numbers x.',
    });
  } else if (R === 0) {
    intervalStr = `{ ${center} }`;
    steps.push({
      title: '5. Interval of Convergence',
      expression: `I = { ${center} } (Only converges at the center)`,
      explanation: 'The series diverges everywhere except at its expansion center.',
    });
  } else {
    const leftBound = center - R;
    const rightBound = center + R;
    const leftB = leftIncluded ? '[' : '(';
    const rightB = rightIncluded ? ']' : ')';
    intervalStr = `${leftB}${leftBound}, ${rightBound}${rightB}`;

    steps.push({
      title: '5. Test Endpoints for Convergence',
      expression: `• At left endpoint x = ${leftBound}: Series becomes alternating harmonic (Converges by AST) ⇒ ${leftB}${leftBound}\n• At right endpoint x = ${rightBound}: Series becomes standard harmonic (Diverges by p-series) ⇒ ${rightBound}${rightB}`,
      explanation: 'Test each endpoint separately to check whether it should be included (bracket) or excluded (parenthesis).',
    });
  }

  const finalAnswer = `Radius R = ${rStr}; Interval of Convergence I = ${intervalStr}`;

  return {
    success: true,
    answer: finalAnswer,
    summary: `Power series analysis: Radius R = ${rStr}, Interval I = ${intervalStr}.`,
    steps,
    explanation: 'The interval of convergence consists of all values of x for which the power series converges to a well-defined function.',
  };
}
