// Utils/calculusUtils.ts — Core calculus helper operations using mathjs & numerical methods
import * as math from 'mathjs';
import type { GraphPoint } from '../SolverTypes';

/** Safely evaluate a math expression string at a given x (or n) value */
export function evaluateAt(expr: string, xVal: number, variable: string = 'x'): number {
  try {
    const scope: Record<string, number> = { [variable]: xVal, pi: Math.PI, e: Math.E, n: xVal };
    const compiled = math.compile(expr);
    const res = compiled.evaluate(scope);
    if (typeof res === 'number') return res;
    if (typeof res === 'object' && res !== null && 're' in res) return (res as { re: number }).re;
    return Number(res);
  } catch {
    return NaN;
  }
}

/** Evaluate a sequence/series expression at integer index n */
export function evaluateAtN(expr: string, nVal: number): number {
  return evaluateAt(expr, nVal, 'n');
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
    if (Number.isFinite(val)) sum += factor * val;
  }
  return (h / 3) * sum;
}

/** Numerical estimation of a limit as variable → target */
export function numericalLimit(
  expr: string,
  target: number,
  direction: 'left' | 'right' | 'both' = 'both',
  variable: string = 'x'
): number {
  const h = 1e-7;
  const ev = (v: number) => evaluateAt(expr, v, variable);
  if (direction === 'left') return ev(target - h);
  if (direction === 'right') return ev(target + h);
  return (ev(target - h) + ev(target + h)) / 2;
}

/**
 * Compute Ratio Test limit L = lim(n→∞) |a(n+1)/a(n)|.
 * Tests at n = 500, 1000, 5000 for stability.
 */
export function computeRatioTestL(termExpr: string): { L: number; reliable: boolean } {
  const testNs = [500, 1000, 5000, 10000];
  const ratios: number[] = [];
  for (const n of testNs) {
    const an = evaluateAtN(termExpr, n);
    const an1 = evaluateAtN(termExpr, n + 1);
    if (Number.isFinite(an) && Number.isFinite(an1) && Math.abs(an) > 1e-300) {
      ratios.push(Math.abs(an1 / an));
    }
  }
  if (ratios.length < 2) return { L: NaN, reliable: false };
  const last = ratios[ratios.length - 1];
  const prev = ratios[ratios.length - 2];
  const reliable = Math.abs(last - prev) < 1e-4 && Number.isFinite(last);
  return { L: last, reliable };
}

/** Partial sum ∑[n=start..N] a_n */
export function partialSum(termExpr: string, start: number = 1, N: number = 1000): number {
  let sum = 0;
  for (let n = start; n <= N; n++) {
    const val = evaluateAtN(termExpr, n);
    if (!Number.isFinite(val)) break;
    sum += val;
    if (Math.abs(sum) > 1e15) return Infinity;
  }
  return sum;
}

/** Generate graph sample points for plotting */
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

/** Symbolic derivative via mathjs */
export function symbolicDerivative(expr: string, variable: string = 'x'): string {
  try {
    const parsed = math.parse(expr);
    const d = math.derivative(parsed, variable);
    let result = math.simplify(d).toString();
    try {
      result = math.simplify(math.parse(result).toString(), {}, { exactFractions: false }).toString();
    } catch {}
    if (expr.includes('/')) {
      try {
        const slash = expr.indexOf('/');
        const u = expr.slice(0, slash).trim().replace(/^\(|\)$/g, '');
        const v = expr.slice(slash + 1).trim().replace(/^\(|\)$/g, '');
        const uPrime = math.derivative(u, variable).toString();
        const vPrime = math.derivative(v, variable).toString();
        result = math.simplify(`((${uPrime})*(${v}) - (${u})*(${vPrime})) / ((${v})^2)`).toString();
      } catch {}
    }
    return result;
  } catch {
    return '';
  }
}

/** Symbolic simplify */
export function simplifyExpr(expr: string): string {
  try {
    return math.simplify(expr).toString();
  } catch {
    return expr;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SYMBOLIC ANTIDERIVATIVE ENGINE
// Rule-based integration table + polynomial power rule + chain-rule shortcuts.
// Returns the antiderivative WITHOUT "+ C", or '' if no rule applies.
// ─────────────────────────────────────────────────────────────────────────────

export function symbolicAntiderivative(expr: string, variable: string = 'x'): string {
  const x = variable;
  const s = expr.trim().replace(/\s+/g, ' ');
  if (!s || s === '0') return '0';

  // 1. Split on top-level +/- and integrate each term
  const terms = splitTopLevelTerms(s);
  if (terms.length > 1) {
    const parts = terms.map(t => symbolicAntiderivative(t.trim(), x));
    if (parts.every(p => p !== '')) {
      return parts.join(' + ').replace(/\+ -/g, '- ');
    }
  }

  // 2. Scalar multiple: c * f(x)
  const scM = s.match(/^([+-]?\d+(?:\.\d+)?(?:\/\d+)?)\s*\*\s*(.+)$/);
  if (scM) {
    const c = scM[1];
    const inner = symbolicAntiderivative(scM[2].trim(), x);
    if (inner) return `(${c}) * (${inner})`;
  }

  // 3. Pure constant
  if (!s.includes(x)) {
    const cNum = parseFloat(s);
    if (!Number.isNaN(cNum)) return `${cNum} * ${x}`;
    return `(${s}) * ${x}`;
  }

  // 4. Just "x"
  if (s === x) return `(1/2) * ${x}^2`;

  // 5. Power rule: [a*]x^n
  const pwRe = new RegExp(`^([+-]?\\d*\\.?\\d*)\\s*\\*?\\s*${x}\\s*\\^\\s*\\(?\\s*([+-]?\\d+(?:\\.\\d+)?)\\s*\\)?$`);
  const pwM = s.match(pwRe);
  if (pwM) {
    const raw = pwM[1];
    const a = raw === '' || raw === '+' ? 1 : raw === '-' ? -1 : parseFloat(raw);
    const n = parseFloat(pwM[2]);
    if (n === -1) {
      const pref = (a === 1 || isNaN(a)) ? '' : `${a} * `;
      return `${pref}ln(abs(${x}))`;
    }
    return fmtPT((isNaN(a) ? 1 : a) / (n + 1), x, n + 1);
  }
  // [c*]x (no exponent)
  const sxRe = new RegExp(`^([+-]?\\d*\\.?\\d*)\\s*\\*?\\s*${x}$`);
  const sxM = s.match(sxRe);
  if (sxM) {
    const raw = sxM[1];
    const a = raw === '' || raw === '+' ? 1 : raw === '-' ? -1 : parseFloat(raw);
    return fmtPT((isNaN(a) ? 1 : a) / 2, x, 2);
  }

  // 6. 1/x
  if (s.replace(/\s/g, '') === `1/${x}`) return `ln(abs(${x}))`;

  // 7. Standard trig (exact string match)
  const trigTable: [string, string][] = [
    [`sin(${x})`,         `-cos(${x})`],
    [`cos(${x})`,          `sin(${x})`],
    [`tan(${x})`,         `-ln(abs(cos(${x})))`],
    [`cot(${x})`,          `ln(abs(sin(${x})))`],
    [`sec(${x})^2`,        `tan(${x})`],
    [`csc(${x})^2`,       `-cot(${x})`],
    [`sec(${x})*tan(${x})`, `sec(${x})`],
    [`csc(${x})*cot(${x})`,`-csc(${x})`],
    [`sec(${x})`,          `ln(abs(sec(${x})+tan(${x})))`],
    [`csc(${x})`,         `-ln(abs(csc(${x})+cot(${x})))`],
  ];
  const clean = s.replace(/\s/g, '');
  for (const [pat, res] of trigTable) {
    if (clean === pat.replace(/\s/g, '')) return res;
  }

  // 8. sin²(x) / cos²(x) half-angle
  if (clean === `sin(${x})^2` || clean === `sin(${x})^(2)`) return `${x}/2 - sin(2*${x})/4`;
  if (clean === `cos(${x})^2` || clean === `cos(${x})^(2)`) return `${x}/2 + sin(2*${x})/4`;

  // 9. sin(k*x), cos(k*x)
  const skxRe = new RegExp(`^([+-]?\\d*\\.?\\d*)\\*?sin\\(([+-]?\\d+(?:\\.\\d+)?)\\*${x}\\)$`, 'i');
  const skm = clean.match(skxRe);
  if (skm) {
    const a = parseFloat(skm[1]) || 1;
    const k = parseFloat(skm[2]);
    return `${-(a/k)} * cos(${k}*${x})`;
  }
  const ckxRe = new RegExp(`^([+-]?\\d*\\.?\\d*)\\*?cos\\(([+-]?\\d+(?:\\.\\d+)?)\\*${x}\\)$`, 'i');
  const ckm = clean.match(ckxRe);
  if (ckm) {
    const a = parseFloat(ckm[1]) || 1;
    const k = parseFloat(ckm[2]);
    return `${a/k} * sin(${k}*${x})`;
  }

  // 10. Exponentials: e^x, exp(x)
  if ([`e^(${x})`, `e^${x}`, `exp(${x})`].some(p => clean === p.replace(/\s/g, ''))) {
    return `e^(${x})`;
  }
  // e^(k*x)
  const ekxRe = new RegExp(`^([+-]?\\d*\\.?\\d*)\\*?e\\^\\(([+-]?\\d+(?:\\.\\d+)?)\\*${x}\\)$`, 'i');
  const ekm = clean.match(ekxRe);
  if (ekm) {
    const a = parseFloat(ekm[1]) || 1;
    const k = parseFloat(ekm[2]);
    return `${a/k} * e^(${k}*${x})`;
  }
  // a^x
  const axRe = /^(\d+(?:\.\d+)?)\^x$/i;
  const axm = clean.match(axRe);
  if (axm) {
    const a = parseFloat(axm[1]);
    if (a > 0 && a !== 1) return `${a}^${x} / ln(${a})`;
  }

  // 11. ln(x), log(x)
  if (clean === `ln(${x})`) return `${x}*ln(${x})-${x}`;
  if (clean === `log(${x})`) return `${x}*log(${x})-${x}/ln(10)`;

  // 12. Inverse trig
  if (clean === `1/sqrt(1-${x}^2)`) return `arcsin(${x})`;
  if (clean === `1/(1+${x}^2)`)     return `arctan(${x})`;

  // 13. Coeff * trig/log/exp: 3*sin(x)
  const cfRe = /^([+-]?\d+(?:\.\d+)?)\*(sin|cos|tan|ln|exp|sec|csc|cot)\((.+)\)(.*)$/i;
  const cfm = clean.match(cfRe);
  if (cfm) {
    const coeff = parseFloat(cfm[1]);
    const fnStr = `${cfm[2]}(${cfm[3]})${cfm[4]}`;
    const integrated = symbolicAntiderivative(fnStr, x);
    if (integrated) return `(${coeff}) * (${integrated})`;
  }

  return ''; // Caller should fall back to numerical
}

/** Format a power-rule result term: c * x^n */
function fmtPT(coeff: number, v: string, exp: number): string {
  const c = parseFloat(coeff.toPrecision(8));
  if (exp === 0) return String(c);
  if (exp === 1) return c === 1 ? v : `${c} * ${v}`;
  return c === 1 ? `${v}^${exp}` : `${c} * ${v}^${exp}`;
}

/** Split expression into top-level additive terms (respects parenthesis depth) */
function splitTopLevelTerms(expr: string): string[] {
  const terms: string[] = [];
  let depth = 0;
  let cur = '';
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && (ch === '+' || ch === '-') && i > 0) {
      if (cur.trim()) terms.push(cur.trim());
      cur = ch;
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) terms.push(cur.trim());
  return terms.filter(t => t.length > 0);
}

// ─────────────────────────────────────────────────────────────────────────────

/** Find roots of expr via bisection sampling */
export function findRoots(expr: string, xMin: number = -10, xMax: number = 10, step: number = 0.25): number[] {
  const roots: number[] = [];
  let prevVal = evaluateAt(expr, xMin);
  for (let x = xMin + step; x <= xMax; x += step) {
    const val = evaluateAt(expr, x);
    if (Number.isFinite(prevVal) && Number.isFinite(val)) {
      if (prevVal === 0) {
        roots.push(Number((x - step).toFixed(4)));
      } else if (prevVal * val < 0) {
        let lo = x - step, hi = x;
        for (let it = 0; it < 25; it++) {
          const mid = (lo + hi) / 2;
          const fm = evaluateAt(expr, mid);
          if (Math.abs(fm) < 1e-7) { lo = mid; break; }
          if (evaluateAt(expr, lo) * fm < 0) hi = mid; else lo = mid;
        }
        const root = Number(lo.toFixed(4));
        if (!roots.some(r => Math.abs(r - root) < 1e-2)) roots.push(root);
      }
    }
    prevVal = val;
  }
  return roots;
}
