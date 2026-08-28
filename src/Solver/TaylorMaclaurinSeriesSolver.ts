// Solver/TaylorMaclaurinSeriesSolver.ts — Generates Taylor and Maclaurin polynomial series approximations
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { normalizeExpression, extractPoint } from '../Calculus_One_Calculator/Utils/expressionParser';
import { symbolicDerivative, evaluateAt, generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { factorial } from '../Calculus_One_Calculator/Utils/seriesUtils';
import { prettify, formatNumber, toSuperscript } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveTaylorMaclaurin(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a function, expansion center, and degree. Examples:\n' +
      '• "e^x at x = 0, n = 4" (Maclaurin series for e^x)\n' +
      '• "sin(x) at x = 0, n = 5" (Maclaurin series for sin(x))\n' +
      '• "ln(x) at x = 1, n = 3" (Taylor series for ln(x) centered at a = 1)\n' +
      '• "cos(x) at x = pi, n = 4" (Taylor series centered at a = π)'
    );
  }

  // Parse degree n: e.g. "n = 4" or ", 4" or "degree = 4"
  let degree = 4;
  let exprInput = trimmed;

  const nMatch = trimmed.match(/(?:,\s*(?:degree\s*=\s*|order\s*=\s*|n\s*=\s*)?|degree\s*=\s*|n\s*=\s*)(\d+)/i);
  if (nMatch) {
    degree = Math.min(Math.max(parseInt(nMatch[1], 10), 1), 7);
    exprInput = trimmed.slice(0, nMatch.index).trim().replace(/,+$/, '');
  }

  const { expr, point: center, pointStr: centerStr } = extractPoint(exprInput, 0);
  const normalized = normalizeExpression(expr);
  const isMaclaurin = center === 0;

  const steps: SolverStep[] = [];
  steps.push({
    title: `1. ${isMaclaurin ? 'Maclaurin' : 'Taylor'} Series Definition`,
    expression: isMaclaurin
      ? `T_${degree}(x) = ∑[k=0 to ${degree}] (f^(k)(0) / k!) · x^k`
      : `T_${degree}(x) = ∑[k=0 to ${degree}] (f^(k)(${centerStr}) / k!) · (x - ${centerStr})^k`,
    explanation: `Construct the degree-${degree} polynomial matching the function and its first ${degree} derivatives at the center a = ${centerStr}.`,
  });

  let currentDeriv = normalized;
  const polyTerms: string[] = [];
  const derivTableRows: string[] = [];

  for (let k = 0; k <= degree; k++) {
    const kFact = factorial(k);
    let derivAtCenter = evaluateAt(currentDeriv, center);
    if (!Number.isFinite(derivAtCenter)) derivAtCenter = 0;

    const coeff = derivAtCenter / kFact;

    derivTableRows.push(
      `• k = ${k}: f^(${k})(x) = ${prettify(currentDeriv)} ⇒ f^(${k})(${centerStr}) = ${formatNumber(derivAtCenter)} ⇒ c_${k} = (${formatNumber(derivAtCenter)}) / ${k}! = ${formatNumber(coeff)}`
    );

    if (Math.abs(coeff) > 1e-6) {
      const coeffFormatted = formatNumber(coeff);
      const varPart = k === 0
        ? ''
        : (isMaclaurin
            ? (k === 1 ? 'x' : `x${toSuperscript(k)}`)
            : (k === 1 ? `(x - ${centerStr})` : `(x - ${centerStr})${toSuperscript(k)}`));

      const termStr = (coeffFormatted === '1' && k !== 0) ? varPart : `${coeffFormatted}${varPart}`;
      polyTerms.push(termStr);
    }

    currentDeriv = symbolicDerivative(currentDeriv) || '0';
  }

  steps.push({
    title: `2. Successive Derivatives at Center a = ${centerStr}`,
    expression: derivTableRows.join('\n'),
    explanation: `Compute f^(k)(${centerStr}) for each order k from 0 to ${degree}, and divide by k!.`,
  });

  const assembledPoly = polyTerms.length > 0 ? polyTerms.join(' + ').replace(/\+\s*-/g, '- ') : '0';

  steps.push({
    title: `3. Assemble Degree-${degree} Polynomial T_${degree}(x)`,
    expression: `T_${degree}(x) = ${prettify(assembledPoly)}`,
    explanation: 'Combine non-zero terms into standard polynomial form.',
  });

  const finalAnswer = `T_${degree}(x) = ${prettify(assembledPoly)}`;

  // Graph original function vs Taylor polynomial
  const xMin = center - 3;
  const xMax = center + 3;
  const originalPoints = generateGraphPoints(normalized, xMin, xMax, 100);
  const taylorPoints = generateGraphPoints(assembledPoly.replace(/([0-9])\(/g, '$1*('), xMin, xMax, 100);

  return {
    success: true,
    answer: finalAnswer,
    summary: `${isMaclaurin ? 'Maclaurin' : 'Taylor'} polynomial of degree ${degree} for ${prettify(normalized)}: ${finalAnswer}.`,
    steps,
    explanation: 'Taylor and Maclaurin polynomials approximate transcendental and complex curves with polynomials that share matching derivatives at the expansion center.',
    graph: {
      points: originalPoints,
      equation: `f(x) = ${prettify(normalized)}`,
      xMin,
      xMax,
      additionalCurves: taylorPoints.length > 0 ? [
        { points: taylorPoints, label: `T_${degree}(x) approximation`, color: '#2563EB' }
      ] : undefined,
      highlights: [{ x: center, y: evaluateAt(normalized, center), label: `Center a = ${centerStr}` }],
    },
  };
}
