// Solver/CurveAnalysisSolver.ts — Full comprehensive function curve analysis and sketching summary
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, findRoots, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveCurveAnalysis(input: string): SolverResult {
  const normalized = normalizeExpression(input);
  if (!normalized) {
    return errorResult('Please enter a function for full curve analysis (e.g. "x^3 - 3x" or "x / (x^2 - 1)" or "x^4 - 4x^2").');
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Original Function',
    expression: `f(x) = ${prettify(normalized)}`,
    explanation: 'Perform a comprehensive 7-point calculus analysis to sketch and characterize the curve f(x).',
  });

  // 1. Intercepts
  const yIntercept = evaluateAt(normalized, 0);
  const xIntercepts = findRoots(normalized, -10, 10, 0.2);
  const xIntStr = xIntercepts.length > 0 ? xIntercepts.map(r => `(${formatNumber(r)}, 0)`).join(', ') : 'None';
  const yIntStr = Number.isFinite(yIntercept) ? `(0, ${formatNumber(yIntercept)})` : 'None / Undefined';

  steps.push({
    title: '2. Intercepts',
    expression: `• y-intercept (x = 0): ${yIntStr}\n• x-intercepts (f(x) = 0): ${xIntStr}`,
    explanation: 'Points where the curve crosses the coordinate axes.',
  });

  // 2. Symmetry
  const fPos = evaluateAt(normalized, 2);
  const fNeg = evaluateAt(normalized, -2);
  let symmetry = 'Neither even nor odd';
  if (Math.abs(fPos - fNeg) < 1e-4) {
    symmetry = 'Even Function (f(-x) = f(x)) — Symmetric about the y-axis';
  } else if (Math.abs(fPos + fNeg) < 1e-4) {
    symmetry = 'Odd Function (f(-x) = -f(x)) — Symmetric about the origin';
  }

  steps.push({
    title: '3. Symmetry',
    expression: symmetry,
    explanation: 'Check if the function exhibits algebraic reflectional or rotational symmetry.',
  });

  // 3. Asymptotes & End Behavior
  const limPosInf = evaluateAt(normalized, 1e5);
  const limNegInf = evaluateAt(normalized, -1e5);
  let horizAsymptotes = 'None';
  if (Number.isFinite(limPosInf) && Math.abs(limPosInf) < 1e4) {
    horizAsymptotes = `y = ${formatNumber(limPosInf)}`;
  }

  steps.push({
    title: '4. Asymptotes & Limits at Infinity',
    expression: `• lim[x → +∞] f(x) = ${formatNumber(limPosInf)}\n• lim[x → -∞] f(x) = ${formatNumber(limNegInf)}\n• Horizontal Asymptote: ${horizAsymptotes}`,
    explanation: 'Examine long-term asymptotic behavior as x grows arbitrarily large.',
  });

  // 4. First and Second Derivatives
  const fPrime = symbolicDerivative(normalized) || '0';
  const fDoublePrime = symbolicDerivative(fPrime) || '0';
  const criticalPoints = findRoots(fPrime, -10, 10, 0.2);
  const inflectionPoints = findRoots(fDoublePrime, -10, 10, 0.2);

  const critExtrema = criticalPoints.map(c => {
    const yVal = evaluateAt(normalized, c);
    const f2Val = evaluateAt(fDoublePrime, c);
    const kind = f2Val > 1e-4 ? 'Local Min' : (f2Val < -1e-4 ? 'Local Max' : 'Critical Pt');
    return `(${formatNumber(c)}, ${formatNumber(yVal)}) [${kind}]`;
  }).join(', ') || 'None';

  const inflStr = inflectionPoints.map(c => {
    const yVal = evaluateAt(normalized, c);
    return `(${formatNumber(c)}, ${formatNumber(yVal)})`;
  }).join(', ') || 'None';

  steps.push({
    title: "5. Derivatives & Extreme Values",
    expression: `• f'(x) = ${prettify(fPrime)}\n• Critical Points / Local Extrema: ${critExtrema}\n• f''(x) = ${prettify(fDoublePrime)}\n• Inflection Points: ${inflStr}`,
    explanation: 'First derivative determines slope and extrema; second derivative determines concavity and points of inflection.',
  });

  const finalSummary = `Analysis of f(x) = ${prettify(normalized)}: Intercepts: y=${yIntStr}, x=${xIntStr}; Extrema: ${critExtrema}; Inflections: ${inflStr}; ${symmetry}.`;
  const points = generateGraphPoints(normalized, -6, 6, 120);

  return {
    success: true,
    answer: finalSummary,
    summary: `Complete curve analysis for f(x) = ${prettify(normalized)}.`,
    steps,
    explanation: 'Curve analysis consolidates all calculus tools (limits, derivatives, extrema, concavity, asymptotes) to characterize functions completely.',
    graph: {
      points,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin: -6,
      xMax: 6,
      highlights: criticalPoints.map(c => ({
        x: c,
        y: evaluateAt(normalized, c),
        label: `Crit (${formatNumber(c)}, ${formatNumber(evaluateAt(normalized, c))})`,
      })),
    },
  };
}
