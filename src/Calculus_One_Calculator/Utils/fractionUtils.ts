// Utils/fractionUtils.ts — Fraction arithmetic utilities

export interface Fraction {
  num: number;
  den: number;
}

export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(Math.round(a) * Math.round(b)) / gcd(a, b);
}

export function fraction(num: number, den: number): Fraction {
  if (den === 0) throw new Error('Division by zero');
  if (num === 0) return { num: 0, den: 1 };
  const sign = (den < 0) ? -1 : 1;
  const g = gcd(Math.abs(num), Math.abs(den));
  return { num: sign * num / g, den: Math.abs(den) / g };
}

export function fromInt(n: number): Fraction {
  return { num: Math.round(n), den: 1 };
}

export function fromDecimal(d: number, maxDen: number = 1000): Fraction {
  if (Number.isInteger(d)) return { num: d, den: 1 };
  let sign = d < 0 ? -1 : 1;
  d = Math.abs(d);
  
  let bestNum = Math.round(d);
  let bestDen = 1;
  let bestErr = Math.abs(d - bestNum);
  
  for (let den = 2; den <= maxDen; den++) {
    const num = Math.round(d * den);
    const err = Math.abs(d - num / den);
    if (err < bestErr) {
      bestErr = err;
      bestNum = num;
      bestDen = den;
      if (err < 1e-9) break;
    }
  }
  
  return fraction(sign * bestNum, bestDen);
}

export function add(a: Fraction, b: Fraction): Fraction {
  return fraction(a.num * b.den + b.num * a.den, a.den * b.den);
}

export function subtract(a: Fraction, b: Fraction): Fraction {
  return fraction(a.num * b.den - b.num * a.den, a.den * b.den);
}

export function multiply(a: Fraction, b: Fraction): Fraction {
  return fraction(a.num * b.num, a.den * b.den);
}

export function divide(a: Fraction, b: Fraction): Fraction {
  if (b.num === 0) throw new Error('Division by zero');
  return fraction(a.num * b.den, a.den * b.num);
}

export function negate(f: Fraction): Fraction {
  return { num: -f.num, den: f.den };
}

export function toDecimal(f: Fraction): number {
  return f.num / f.den;
}

export function formatFrac(f: Fraction): string {
  if (f.den === 1) return String(f.num);
  if (f.num < 0) return `-(${Math.abs(f.num)}/${f.den})`;
  return `(${f.num}/${f.den})`;
}

export function equals(a: Fraction, b: Fraction): boolean {
  const sa = fraction(a.num, a.den);
  const sb = fraction(b.num, b.den);
  return sa.num === sb.num && sa.den === sb.den;
}
