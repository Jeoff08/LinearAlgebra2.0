// Utils/polynomialUtils.ts — Polynomial decomposition, arithmetic and solver helpers
import { formatNumber } from './mathFormatting';

export interface PolyTerm {
  coeff: number;
  exponent: number;
}

/** Parses standard polynomial expressions like "x^3 - 4x^2 - 5x + 8" into PolyTerm array */
export function parsePolynomial(expr: string, variable: string = 'x'): PolyTerm[] {
  const terms: PolyTerm[] = [];
  // Normalize minus signs and insert + before minus for splitting, but preserve scientific notation or parentheses
  const clean = expr
    .replace(/\s+/g, '')
    .replace(/([^\^(\[])-/g, '$1+-')
    .replace(/^-(.+)$/, '+-$1');
  const rawParts = clean.split('+').filter(p => p.length > 0);

  for (const part of rawParts) {
    // Check if it contains variable
    const varIndex = part.indexOf(variable);
    if (varIndex === -1) {
      // Constant term
      const cleanConst = part.replace(/[()]/g, '');
      const c = parseFloat(cleanConst);
      if (!Number.isNaN(c) && c !== 0) {
        terms.push({ coeff: c, exponent: 0 });
      }
    } else {
      // Has variable
      let coeffPart = part.slice(0, varIndex).replace(/\*+$/, '');
      let coeff = 1;
      if (coeffPart === '' || coeffPart === '+') coeff = 1;
      else if (coeffPart === '-') coeff = -1;
      else {
        // Handle potential fractions like (1/2)
        const cleanCoeff = coeffPart.replace(/[()]/g, '');
        if (cleanCoeff.includes('/')) {
          const [n, d] = cleanCoeff.split('/');
          coeff = parseFloat(n) / parseFloat(d);
        } else {
          coeff = parseFloat(cleanCoeff);
        }
      }

      let exponent = 1;
      const caretIndex = part.indexOf('^', varIndex);
      if (caretIndex !== -1) {
        const expStr = part.slice(caretIndex + 1).replace(/[()]/g, '');
        exponent = parseFloat(expStr);
      }

      if (!Number.isNaN(coeff) && !Number.isNaN(exponent) && coeff !== 0) {
        terms.push({ coeff, exponent });
      }
    }
  }


  // Combine like terms
  const map: Record<number, number> = {};
  for (const t of terms) {
    map[t.exponent] = (map[t.exponent] || 0) + t.coeff;
  }

  const combined: PolyTerm[] = [];
  for (const [expStr, coeff] of Object.entries(map)) {
    const exponent = parseFloat(expStr);
    if (Math.abs(coeff) > 1e-10) {
      combined.push({ coeff, exponent });
    }
  }

  // Sort descending by exponent
  combined.sort((a, b) => b.exponent - a.exponent);
  return combined;
}

/** Find polynomial degree */
export function getPolynomialDegree(terms: PolyTerm[]): number {
  if (terms.length === 0) return 0;
  return Math.max(...terms.map(t => t.exponent));
}

/** Differentiate a list of polynomial terms */
export function differentiatePoly(terms: PolyTerm[]): PolyTerm[] {
  const result: PolyTerm[] = [];
  for (const t of terms) {
    if (t.exponent !== 0) {
      result.push({
        coeff: t.coeff * t.exponent,
        exponent: t.exponent - 1,
      });
    }
  }
  return result;
}

/** Integrate a list of polynomial terms (returns terms without + C) */
export function integratePoly(terms: PolyTerm[]): PolyTerm[] {
  const result: PolyTerm[] = [];
  for (const t of terms) {
    result.push({
      coeff: t.coeff / (t.exponent + 1),
      exponent: t.exponent + 1,
    });
  }
  return result;
}

/** Format PolyTerms array back to readable string */
export function formatPolyTerms(terms: PolyTerm[], variable: string = 'x'): string {
  if (terms.length === 0) return '0';
  const parts: string[] = [];

  for (let i = 0; i < terms.length; i++) {
    const { coeff, exponent } = terms[i];
    if (Math.abs(coeff) < 1e-10) continue;

    const absC = Math.abs(coeff);
    const sign = i === 0 ? (coeff < 0 ? '-' : '') : (coeff < 0 ? ' - ' : ' + ');
    const coeffFormatted = formatNumber(absC);
    const coeffDisplay = (coeffFormatted === '1' && exponent !== 0) ? '' : coeffFormatted;

    let varDisplay = '';
    if (exponent === 1) varDisplay = variable;
    else if (exponent !== 0) varDisplay = `${variable}^${exponent}`;

    parts.push(`${sign}${coeffDisplay}${varDisplay}`);
  }

  return parts.length === 0 ? '0' : parts.join('');
}

/** Solve quadratic equation ax² + bx + c = 0 */
export function solveQuadratic(a: number, b: number, c: number): { roots: number[]; discriminant: number; stepDesc: string } {
  const discriminant = b * b - 4 * a * c;
  const roots: number[] = [];
  let stepDesc = `Quadratic formula: x = (-b ± √(b² - 4ac)) / (2a)\n` +
    `Here a = ${a}, b = ${b}, c = ${c}\n` +
    `Discriminant Δ = (${b})² - 4(${a})(${c}) = ${discriminant}`;

  if (discriminant > 0) {
    const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(Number(r1.toFixed(4)), Number(r2.toFixed(4)));
    stepDesc += `\nΔ > 0: Two distinct real roots: x₁ = ${roots[0]}, x₂ = ${roots[1]}`;
  } else if (Math.abs(discriminant) < 1e-10) {
    const r = -b / (2 * a);
    roots.push(Number(r.toFixed(4)));
    stepDesc += `\nΔ = 0: One repeated real root: x = ${roots[0]}`;
  } else {
    stepDesc += `\nΔ < 0: No real roots (complex conjugate pair).`;
  }

  return { roots, discriminant, stepDesc };
}
