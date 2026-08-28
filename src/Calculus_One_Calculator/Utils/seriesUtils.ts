// Utils/seriesUtils.ts — Series calculation and convergence test helpers
import { formatFraction, toSuperscript } from './mathFormatting';

/** Computes factorial n! */
export function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

/** Format Taylor polynomial term: (f^(n)(c) / n!) * (x - c)^n */
export function formatTaylorTerm(nthDerivVal: number, n: number, center: number = 0, variable: string = 'x'): string {
  if (Math.abs(nthDerivVal) < 1e-10) return '';
  const nFact = factorial(n);
  const coeff = nthDerivVal / nFact;
  const absCoeff = Math.abs(coeff);

  const centerStr = center === 0 ? variable : `(${variable} - ${center})`;
  const varPart = n === 0 ? '' : (n === 1 ? centerStr : `${centerStr}${toSuperscript(n)}`);

  if (n === 0) {
    return Number.isInteger(coeff) ? String(coeff) : formatFraction(Math.round(coeff * 12), 12);
  }

  const fracStr = formatFraction(Math.round(nthDerivVal), Math.round(nFact));
  return `${fracStr}${varPart}`;
}

/** Check geometric series: ∑ a * r^n */
export function testGeometricSeries(a: number, r: number): { converges: boolean; sum?: number; explanation: string } {
  const absR = Math.abs(r);
  if (absR < 1) {
    const sum = a / (1 - r);
    return {
      converges: true,
      sum,
      explanation: `Geometric series with |r| = |${r}| = ${absR} < 1. Converges to a / (1 - r) = ${sum}.`,
    };
  } else {
    return {
      converges: false,
      explanation: `Geometric series with |r| = |${r}| = ${absR} ≥ 1. Diverges by the Geometric Series Test.`,
    };
  }
}

/** Check p-series: ∑ 1 / n^p */
export function testPSeries(p: number): { converges: boolean; explanation: string } {
  if (p > 1) {
    return {
      converges: true,
      explanation: `p-series with p = ${p} > 1. Converges by the p-Series Test.`,
    };
  } else {
    return {
      converges: false,
      explanation: `p-series with p = ${p} ≤ 1. Diverges by the p-Series Test (${p === 1 ? 'Harmonic Series' : ''}).`,
    };
  }
}

/** Check ratio test limit L = lim |a_{n+1} / a_n| */
export function interpretRatioTest(L: number): { converges: boolean | null; explanation: string } {
  if (L < 1) {
    return {
      converges: true,
      explanation: `L = ${L.toFixed(4)} < 1. The series converges absolutely by the Ratio Test.`,
    };
  } else if (L > 1) {
    return {
      converges: false,
      explanation: `L = ${L.toFixed(4)} > 1. The series diverges by the Ratio Test.`,
    };
  } else {
    return {
      converges: null,
      explanation: `L = 1. The Ratio Test is inconclusive; another convergence test must be used.`,
    };
  }
}
