// Utils/mathFormatting.ts — Display formatting utilities

const SUPERSCRIPT_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  'n': 'ⁿ', '-': '⁻', '+': '⁺', '(': '⁽', ')': '⁾',
  'x': 'ˣ', 'k': 'ᵏ',
};

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  'n': 'ₙ', 'k': 'ₖ', 'i': 'ᵢ',
};

export function toSuperscript(s: string | number): string {
  return String(s).split('').map(c => SUPERSCRIPT_MAP[c] ?? c).join('');
}

export function toSubscript(s: string | number): string {
  return String(s).split('').map(c => SUBSCRIPT_MAP[c] ?? c).join('');
}

export function formatCoefficient(c: number, isLeading: boolean = false): string {
  if (c === 0) return '0';
  if (c === 1) return isLeading ? '' : '+ ';
  if (c === -1) return isLeading ? '-' : '- ';
  if (c > 0) return isLeading ? String(c) : `+ ${c}`;
  return isLeading ? String(c) : `- ${Math.abs(c)}`;
}

export function formatFraction(num: number, den: number): string {
  if (den === 1) return String(num);
  if (den === -1) return String(-num);
  const sign = (num < 0) !== (den < 0) ? '-' : '';
  const an = Math.abs(num);
  const ad = Math.abs(den);
  return `${sign}(${an}/${ad})`;
}

export function formatTerm(coeff: number, variable: string, exp: number, isLeading: boolean = false): string {
  if (coeff === 0) return '';
  if (exp === 0) {
    if (isLeading) return String(coeff);
    return coeff > 0 ? `+ ${coeff}` : `- ${Math.abs(coeff)}`;
  }
  
  const sign = isLeading
    ? (coeff < 0 ? '-' : '')
    : (coeff < 0 ? '- ' : '+ ');
  
  const absC = Math.abs(coeff);
  const coeffStr = absC === 1 ? '' : String(absC);
  const varStr = exp === 1 ? variable : `${variable}${toSuperscript(String(exp))}`;
  
  return `${sign}${coeffStr}${varStr}`;
}

export function formatPolynomial(coeffs: number[], variable: string = 'x'): string {
  if (coeffs.length === 0) return '0';
  const terms: string[] = [];
  for (let i = coeffs.length - 1; i >= 0; i--) {
    if (coeffs[i] === 0) continue;
    terms.push(formatTerm(coeffs[i], variable, i, terms.length === 0));
  }
  return terms.length === 0 ? '0' : terms.join(' ').trim();
}

export function formatNumber(n: number): string {
  if (Number.isInteger(n)) return String(n);
  if (!Number.isFinite(n)) return n > 0 ? '∞' : '-∞';
  if (Number.isNaN(n)) return 'undefined';
  
  const commonDenoms = [2, 3, 4, 5, 6, 8, 10, 12, 16];
  for (const d of commonDenoms) {
    const num = n * d;
    if (Math.abs(num - Math.round(num)) < 1e-9) {
      const roundedNum = Math.round(num);
      const g = gcd(Math.abs(roundedNum), d);
      const sn = roundedNum / g;
      const sd = d / g;
      if (sd === 1) return String(sn);
      return formatFraction(sn, sd);
    }
  }
  
  const rounded = Number(n.toPrecision(6));
  return String(rounded);
}

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

export function prettify(expr: string): string {
  if (!expr) return '';
  let s = expr;
  s = s.replace(/\^(\d+)/g, (_, exp) => toSuperscript(exp));
  s = s.replace(/\^(-\d+)/g, (_, exp) => toSuperscript(exp));
  s = s.replace(/sqrt\(([^)]+)\)/gi, '√($1)');
  s = s.replace(/\binfinity\b/gi, '∞');
  s = s.replace(/\binf\b/gi, '∞');
  s = s.replace(/\bpi\b/gi, 'π');
  s = s.replace(/\s*\*\s*/g, ' · ');
  return s;
}

export function derivativeNotation(funcExpr: string, order: number = 1, variable: string = 'x'): string {
  if (order === 1) return `d/d${variable}[${funcExpr}]`;
  return `d${toSuperscript(String(order))}/d${variable}${toSuperscript(String(order))}[${funcExpr}]`;
}

export function integralNotation(funcExpr: string, variable: string = 'x', lower?: string, upper?: string): string {
  if (lower !== undefined && upper !== undefined) {
    return `∫[${lower} to ${upper}] (${funcExpr}) d${variable}`;
  }
  return `∫ (${funcExpr}) d${variable}`;
}
