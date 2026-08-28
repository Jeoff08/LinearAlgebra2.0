// Solver/AreaBetweenCurvesSolver.ts — Calculates the area between two curves: A = ∫[a to b] |f(x) - g(x)| dx
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractBounds } from '../Calculus_One_Calculator/Utils/expressionParser';
import { findRoots, evaluateAt, numericalIntegrate, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { prettify, formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveAreaBetweenCurves(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult('Please enter two functions (e.g. "f(x) = 2x - x^2, g(x) = x^2" or "x^2, 4" or "sin(x), cos(x), [0, pi]").');
  }

  // Parse two functions: separated by comma or "and" or f=..., g=...
  let fStr = '2x - x^2';
  let gStr = 'x^2';
  let customBounds = false;
  let customA = 0;
  let customB = 1;

  const parts = trimmed.split(/,|\band\b|;/i);
  if (parts.length >= 2) {
    fStr = normalizeExpression(parts[0]);
    gStr = normalizeExpression(parts[1]);
  }

  // Check if 3rd part has bounds
  if (parts.length >= 3) {
    const bInfo = extractBounds(parts.slice(2).join(','), 0, 1);
    customBounds = true;
    customA = bInfo.a;
    customB = bInfo.b;
  }

  const steps: SolverStep[] = [];
  steps.push({
    title: '1. Two Boundary Functions',
    expression: `Top / First Curve:  f(x) = ${prettify(fStr)}\nBottom / Second Curve: g(x) = ${prettify(gStr)}`,
    explanation: 'Find the area between the two bounding curves using the formula A = ∫[a to b] [f(x) - g(x)] dx.',
  });

  // Find intersections: f(x) - g(x) = 0
  const diffExpr = `(${fStr}) - (${gStr})`;
  const roots = findRoots(diffExpr, -10, 10, 0.1);

  let a = customBounds ? customA : 0;
  let b = customBounds ? customB : 1;

  if (!customBounds && roots.length >= 2) {
    a = roots[0];
    b = roots[roots.length - 1];
    steps.push({
      title: '2. Find Intersection Points (Set f(x) = g(x))',
      expression: `${prettify(fStr)} = ${prettify(gStr)}\n${prettify(diffExpr)} = 0\nIntersection points at x = ${a} and x = ${b}`,
      explanation: 'Solve for the x-coordinates where the curves intersect to determine the limits of integration.',
    });
  } else if (!customBounds && roots.length === 1) {
    a = roots[0];
    b = a + 2;
  }

  // Determine top vs bottom by testing midpoint
  const mid = (a + b) / 2;
  const fMid = evaluateAt(fStr, mid);
  const gMid = evaluateAt(gStr, mid);
  const fIsTop = fMid >= gMid;
  const topStr = fIsTop ? fStr : gStr;
  const botStr = fIsTop ? gStr : fStr;

  steps.push({
    title: '3. Determine Top vs. Bottom Curve',
    expression: `At test point x = ${mid.toFixed(2)}:\n  f(${mid.toFixed(2)}) = ${fMid.toFixed(2)}\n  g(${mid.toFixed(2)}) = ${gMid.toFixed(2)}\nTop Curve: ${prettify(topStr)}\nBottom Curve: ${prettify(botStr)}`,
    explanation: 'The integrand must always be [Top Curve - Bottom Curve] to guarantee a positive geometric area.',
  });

  const integrandStr = `(${topStr}) - (${botStr})`;
  const areaVal = Math.abs(numericalIntegrate(integrandStr, a, b, 200));

  steps.push({
    title: '4. Set Up and Evaluate Area Integral',
    expression: `Area A = ∫[${a} to ${b}] [(${prettify(topStr)}) - (${prettify(botStr)})] dx\n       = ${formatNumber(areaVal)} square units`,
    explanation: 'Compute the definite integral across the enclosure bounds.',
  });

  const finalAnswer = `Area = ${formatNumber(areaVal)} sq units`;
  const xMin = Math.min(a, b) - 2;
  const xMax = Math.max(a, b) + 2;
  const fPoints = generateGraphPoints(fStr, xMin, xMax, 100);
  const gPoints = generateGraphPoints(gStr, xMin, xMax, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `Area between ${prettify(fStr)} and ${prettify(gStr)} on [${a}, ${b}] is ${formatNumber(areaVal)} sq units.`,
    steps,
    explanation: 'The area between curves represents the 2D geometric surface enclosed between two continuous function graphs.',
    graph: {
      points: fPoints,
      equation: `f(x) = ${prettify(fStr)}`,
      xMin,
      xMax,
      additionalCurves: [
        { points: gPoints, label: `g(x) = ${prettify(gStr)}`, color: '#DC2626' }
      ],
      shadedRegion: { from: Math.min(a, b), to: Math.max(a, b), label: `Area = ${formatNumber(areaVal)}` },
    },
  };
}
