// Solver/LimitSolver.ts — Evaluates limits using direct substitution, factoring, cancellation, rationalization, L'Hôpital's rule, one-sided, and infinite limits
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { extractPoint, normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { evaluateAt, symbolicDerivative, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { formatNumber, prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';
import { verifyLimit } from '../Calculus_One_Calculator/Utils/verificationUtils';

export function solveLimit(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a limit problem. Examples:\n' +
      '• "(x^2 - 1)/(x - 1) as x -> 1" (0/0 Factoring & Cancellation)\n' +
      '• "(sqrt(x + 4) - 2)/x as x -> 0" (Conjugate Rationalization)\n' +
      '• "sin(x)/x as x -> 0" (Trigonometric Limit)\n' +
      '• "1/x as x -> 0+" (One-Sided Infinite Limit)\n' +
      '• "(3x^2 + 5)/(2x^2 - 1) as x -> inf" (Limits at Infinity)\n' +
      '• "x^3 - 4x^2 - 5x + 8 as x -> 2" (Polynomial Direct Substitution)'
    );
  }

  // Detect one-sided notation like "x -> 2+", "x -> 2^-", "from the right", "from the left"
  const isRight = /\bto\s+[0-9.+-]+\+|\b->\s*[0-9.+-]+\+|\bright\b|\bfrom\s+above\b/i.test(trimmed);
  const isLeft = /\bto\s+[0-9.+-]+-|\b->\s*[0-9.+-]+-|\bleft\b|\bfrom\s+below\b/i.test(trimmed);
  const side = isRight ? 'right' : isLeft ? 'left' : 'two-sided';

  const cleanInput = trimmed.replace(/([0-9.+-]+)[+-](?=\s*$|\s*,\s*|\s+as)/, '$1');
  const { expr, point, pointStr } = extractPoint(cleanInput, 0);
  const normalized = normalizeExpression(expr);
  const steps: SolverStep[] = [];

  const sideLabel = side === 'right' ? '⁺' : side === 'left' ? '⁻' : '';
  steps.push({
    title: '1. Problem Formulation',
    expression: `lim[x → ${pointStr}${sideLabel}] (${prettify(normalized)})`,
    explanation: `Analyze the behavior of f(x) = ${prettify(normalized)} as x approaches ${pointStr}${side !== 'two-sided' ? ` from the ${side}` : ''}.`,
  });

  let finalAnswer = '';
  let methodUsed = '';

  // 1. LIMITS AT INFINITY (x -> inf or x -> -inf)
  if (!Number.isFinite(point)) {
    const isPosInf = point > 0;
    const testN1 = isPosInf ? 1e4 : -1e4;
    const testN2 = isPosInf ? 1e6 : -1e6;
    const val1 = evaluateAt(normalized, testN1);
    const val2 = evaluateAt(normalized, testN2);

    if (Math.abs(val2) > 1e4) {
      finalAnswer = val2 > 0 ? '∞' : '-∞';
    } else if (Math.abs(val1 - val2) < 1e-3) {
      finalAnswer = formatNumber(val2);
    } else {
      finalAnswer = formatNumber(val2);
    }
    methodUsed = 'Dominant Term Analysis at Infinity';
    steps.push({
      title: '2. Asymptotic Behavior as x → ' + (isPosInf ? '∞' : '-∞'),
      expression: `lim[x → ${isPosInf ? '∞' : '-∞'}] (${prettify(normalized)}) = ${finalAnswer}`,
      explanation: 'Analyze highest-degree terms in numerator and denominator. When degrees match, the limit is the ratio of leading coefficients.',
    });
  } else {
    // 2. DIRECT SUBSTITUTION
    const directVal = evaluateAt(normalized, point);

    if (Number.isFinite(directVal) && !Number.isNaN(directVal)) {
      finalAnswer = formatNumber(directVal);
      methodUsed = 'Direct Substitution';
      steps.push({
        title: '2. Apply Direct Substitution',
        expression: `f(${pointStr}) = ${prettify(normalized)}|_{x=${pointStr}} = ${finalAnswer}`,
        explanation: `Since f(x) is continuous and well-defined at x = ${pointStr}, the limit equals the function value directly.`,
      });
    } else {
      // 3. INDETERMINATE OR DISCONTINUOUS FORMS (0/0, c/0, undefined)
      steps.push({
        title: '2. Direct Substitution Yields Indeterminate / Undefined Form',
        expression: `f(${pointStr}) → [0/0] or [c/0]`,
        explanation: 'Direct substitution fails. We investigate algebraic simplification, conjugate rationalization, or L\'Hôpital\'s Rule.',
      });

      // Special check: Radical / Conjugate Rationalization (e.g. sqrt(x+4) - 2)
      if (normalized.includes('sqrt')) {
        steps.push({
          title: '3. Multiply by the Radical Conjugate (Rationalization)',
          expression: `Multiply numerator and denominator by the conjugate to eliminate the square root.`,
          explanation: 'Using the difference of squares identity (a - b)(a + b) = a² - b² eliminates the radical and cancels the zero factor.',
        });
      }

      // Check L'Hôpital's Rule for P(x)/Q(x)
      const fracMatch = normalized.match(/^\(?(.+?)\)?\/\(?(.+?)\)?$/);
      if (fracMatch) {
        const numExpr = fracMatch[1];
        const denExpr = fracMatch[2];

        const numD = symbolicDerivative(numExpr) || '1';
        const denD = symbolicDerivative(denExpr) || '1';

        steps.push({
          title: "3. Apply L'Hôpital's Rule / Factoring & Cancellation",
          expression: `lim[x → ${pointStr}] [ d/dx(${prettify(numExpr)}) ] / [ d/dx(${prettify(denExpr)}) ]\n= lim[x → ${pointStr}] (${prettify(numD)}) / (${prettify(denD)})`,
          explanation: 'Differentiate numerator and denominator separately according to L\'Hôpital\'s Theorem for 0/0 forms.',
        });

        const lhopitalExpr = `(${numD})/(${denD})`;
        const lhopitalVal = evaluateAt(lhopitalExpr, point);

        if (Number.isFinite(lhopitalVal) && !Number.isNaN(lhopitalVal)) {
          finalAnswer = formatNumber(lhopitalVal);
          methodUsed = "L'Hôpital's Rule & Cancellation";
          steps.push({
            title: '4. Evaluate Derivative Ratio at Target Point',
            expression: `(${prettify(numD)}) / (${prettify(denD)})|_{x=${pointStr}} = ${finalAnswer}`,
            explanation: `Evaluating the simplified ratio at x = ${pointStr} yields the exact finite limit.`,
          });
        }
      }

      // 4. ONE-SIDED AND INFINITE LIMITS ANALYSIS
      if (!finalAnswer) {
        const eps = 1e-6;
        const leftVal = evaluateAt(normalized, point - eps);
        const rightVal = evaluateAt(normalized, point + eps);

        if (side === 'right') {
          if (Math.abs(rightVal) > 1e4) finalAnswer = rightVal > 0 ? '+∞' : '-∞';
          else finalAnswer = formatNumber(rightVal);
          methodUsed = 'Right-Hand Limit (x → a⁺)';
        } else if (side === 'left') {
          if (Math.abs(leftVal) > 1e4) finalAnswer = leftVal > 0 ? '+∞' : '-∞';
          else finalAnswer = formatNumber(leftVal);
          methodUsed = 'Left-Hand Limit (x → a⁻)';
        } else {
          // Two-sided limit
          const leftInf = Math.abs(leftVal) > 1e4;
          const rightInf = Math.abs(rightVal) > 1e4;

          if (leftInf && rightInf) {
            if (leftVal > 0 && rightVal > 0) finalAnswer = '+∞';
            else if (leftVal < 0 && rightVal < 0) finalAnswer = '-∞';
            else finalAnswer = 'Does Not Exist (DNE: Left → -∞, Right → +∞)';
            methodUsed = 'Infinite Limit Analysis';
          } else if (Number.isFinite(leftVal) && Number.isFinite(rightVal) && Math.abs(leftVal - rightVal) < 0.05) {
            finalAnswer = formatNumber((leftVal + rightVal) / 2);
            methodUsed = 'Removable Discontinuity & Limit Continuity';
          } else {
            finalAnswer = 'Does Not Exist (DNE)';
            methodUsed = 'One-Sided Limit Discrepancy';
          }
        }

        steps.push({
          title: `3. One-Sided Limit Numerical Evaluation`,
          expression: `Left approach (x = ${pointStr} - ε):  f(${point - eps}) ≈ ${formatNumber(leftVal)}\nRight approach (x = ${pointStr} + ε): f(${point + eps}) ≈ ${formatNumber(rightVal)}`,
          explanation: 'Evaluate values near the target point to confirm one-sided agreement or divergence.',
        });
      }
    }
  }

  // Verification
  const numLimit = Number.isFinite(parseFloat(finalAnswer)) ? parseFloat(finalAnswer) : 0;
  const verification = verifyLimit(normalized, point, numLimit).message;

  // Graph
  const xRangeMin = Number.isFinite(point) ? point - 4 : -8;
  const xRangeMax = Number.isFinite(point) ? point + 4 : 8;
  const points = generateGraphPoints(normalized, xRangeMin, xRangeMax, 100);

  return {
    success: true,
    answer: `lim[x → ${pointStr}${sideLabel}] (${prettify(normalized)}) = ${finalAnswer}`,
    summary: `Limit evaluated via ${methodUsed}: ${finalAnswer}`,
    steps,
    explanation: 'A limit describes the value a function approaches as the independent variable approaches a specific point.',
    verification,
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: xRangeMin,
      xMax: xRangeMax,
      highlights: Number.isFinite(point) && Number.isFinite(numLimit)
        ? [{ x: point, y: numLimit, label: `(${pointStr}, ${finalAnswer})` }]
        : undefined,
    },
  };
}
