// Utils/calculusUtils.ts — Core calculus helper operations using mathjs & numerical methods
import * as math from 'mathjs';
import type { GraphPoint } from '../SolverTypes';

/** Safely evaluate a math expression string at a given x value */
export function evaluateAt(expr: string, xVal: number, variable: string = 'x'): number {
  try {
    const scope: Record<string, number> = { [variable]: xVal, pi: Math.PI, e: Math.E };
    const compiled = math.compile(expr);
    const res = compiled.evaluate(scope);
    if (typeof res === 'number') return res;
    if (typeof res === 'object' && res !== null && 're' in res) return (res as { re: number }).re;
    return Number(res);
  } catch {
    return NaN;
  }
}

/** Numerical derivative using central difference: f'(x) ≈ (f(x+h) - f(x-h)) / (2h) */
export function numericalDerivative(expr: string, xVal: number, h: number = 1e-6, variable: string = 'x'): number {
  const fPlus = evaluateAt(expr, xVal + h, variable);
  const fMinus = evaluateAt(expr, xVal - h, variable);
  return (fPlus - fMinus) / (2 * h);
}

/** Numerical second derivative: f''(x) ≈ (f(x+h) - 2f(x) + f(x-h)) / h² */
export function numericalSecondDerivative(expr: string, xVal: number, h: number = 1e-4, variable: string = 'x'): number {
  const fPlus = evaluateAt(expr, xVal + h, variable);
  const fMid = evaluateAt(expr, xVal, variable);
  const fMinus = evaluateAt(expr, xVal - h, variable);
  return (fPlus - 2 * fMid + fMinus) / (h * h);
}

/** Numerical definite integral using Composite Simpson's 1/3 Rule */
export function numericalIntegrate(expr: string, a: number, b: number, n: number = 200, variable: string = 'x'): number {
  if (a === b) return 0;
  if (n % 2 !== 0) n += 1;
  const h = (b - a) / n;
  let sum = evaluateAt(expr, a, variable) + evaluateAt(expr, b, variable);

  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    const factor = i % 2 === 0 ? 2 : 4;
    const val = evaluateAt(expr, x, variable);
    if (Number.isFinite(val)) {
      sum += factor * val;
    }
  }

  return (h / 3) * sum;
}

/** Generate graph sample points for plotting a function */
export function generateGraphPoints(
  expr: string,
  xMin: number = -10,
  xMax: number = 10,
  numPoints: number = 150,
  variable: string = 'x'
): GraphPoint[] {
  const points: GraphPoint[] = [];
  const step = (xMax - xMin) / (numPoints - 1);

  for (let i = 0; i < numPoints; i++) {
    const x = xMin + i * step;
    const y = evaluateAt(expr, x, variable);
    if (Number.isFinite(y) && Math.abs(y) < 1e5) {
      points.push({ x: Number(x.toFixed(4)), y: Number(y.toFixed(4)) });
    }
  }

  return points;
}

/** Symbolic derivative using mathjs with simplification */
export function symbolicDerivative(expr: string, variable: string = 'x'): string {
  try {
    const parsed = math.parse(expr);
    const d = math.derivative(parsed, variable);
    return math.simplify(d).toString();
  } catch {
    return '';
  }
}

/** Symbolic simplify using mathjs */
export function simplifyExpr(expr: string): string {
  try {
    return math.simplify(expr).toString();
  } catch {
    return expr;
  }
}

/** Find critical points by sampling and Newton-Raphson or bisection on derivative */
export function findRoots(expr: string, xMin: number = -10, xMax: number = 10, step: number = 0.25): number[] {
  const roots: number[] = [];
  let prevVal = evaluateAt(expr, xMin);

  for (let x = xMin + step; x <= xMax; x += step) {
    const val = evaluateAt(expr, x);
    if (Number.isFinite(prevVal) && Number.isFinite(val)) {
      if (prevVal === 0) {
        roots.push(Number((x - step).toFixed(4)));
      } else if (prevVal * val < 0) {
        // Root in [x - step, x], use bisection
        let low = x - step;
        let high = x;
        for (let iter = 0; iter < 25; iter++) {
          const mid = (low + high) / 2;
          const fMid = evaluateAt(expr, mid);
          if (Math.abs(fMid) < 1e-7) {
            low = mid;
            break;
          }
          if (evaluateAt(expr, low) * fMid < 0) {
            high = mid;
          } else {
            low = mid;
          }
        }
        const root = Number(low.toFixed(4));
        if (!roots.some(r => Math.abs(r - root) < 1e-2)) {
          roots.push(root);
        }
      }
    }
    prevVal = val;
  }

  return roots;
}
