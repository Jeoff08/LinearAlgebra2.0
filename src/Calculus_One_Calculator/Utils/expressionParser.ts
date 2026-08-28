// Utils/expressionParser.ts — Normalizing and parsing math expressions

const SUPERSCRIPT_REVERSE: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', '⁻': '-', '⁺': '+', '⁽': '(', '⁾': ')',
  'ˣ': 'x', 'ᵏ': 'k',
};

/** Normalizes mathematical input string */
export function normalizeExpression(raw: string): string {
  if (!raw) return '';
  let s = raw.trim();

  // Strip leading f(x)=, y=, g(x)=, etc.
  s = s.replace(/^(?:f\([a-z]\)|g\([a-z]\)|h\([a-z]\)|y)\s*=\s*/i, '');

  // Strip ∫ and dx if typed in
  s = s.replace(/^∫\s*/i, '');
  s = s.replace(/\s*d[a-z]\s*$/i, '');

  // Convert unicode superscripts to ^exponent
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻⁺⁽⁾ˣᵏ]+/g, (match) => {
    const normal = match.split('').map(c => SUPERSCRIPT_REVERSE[c] ?? c).join('');
    return `^(${normal})`;
  });

  // Convert √(...) or √x to sqrt(...)
  s = s.replace(/√\(([^)]+)\)/g, 'sqrt($1)');
  s = s.replace(/√([a-zA-Z0-9]+)/g, 'sqrt($1)');

  // Convert π to pi
  s = s.replace(/π/g, 'pi');

  // Insert multiplication between number and variable/paren: 3x -> 3*x, 2(x) -> 2*(x), (x+1)(x-1) -> (x+1)*(x-1)
  s = s.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
  s = s.replace(/(\))([a-zA-Z0-9(])/g, '$1*$2');
  s = s.replace(/([a-zA-Z])(\()/g, (match, p1) => {
    // If it's a known function name like sin, cos, tan, ln, log, exp, sqrt, abs, don't insert *
    const known = ['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'ln', 'log', 'exp', 'sqrt', 'abs'];
    return match; // mathjs handles sin(x) correctly
  });

  // Fix e^x -> exp(x) or e^(x) if needed by mathjs
  s = s.replace(/\be\^([a-zA-Z0-9]+)/g, 'e^($1)');

  return s.trim();
}

/** Extracts expression and target point from inputs like "x^2 - 4 at x = 2" or "(x^2 - 1)/(x - 1), x -> 1" */
export function extractPoint(input: string, defaultPoint: number = 0): { expr: string; point: number; pointStr: string } {
  let expr = input;
  let point = defaultPoint;
  let pointStr = String(defaultPoint);

  // Match "as x -> 2" or "x -> 2" or "x to 2" or "at x = 2" or ", x = 2" or ", 2"
  const arrowMatch = input.match(/(?:as\s+)?([a-z])\s*(?:->|→|to)\s*([+-]?\d+(?:\.\d+)?|inf|infinity|-inf|-infinity|pi)/i);
  const atMatch = input.match(/(?:at\s+|,\s*)(?:[a-z]\s*=\s*)?([+-]?\d+(?:\.\d+)?|pi|-pi)/i);

  if (arrowMatch) {
    expr = input.slice(0, arrowMatch.index).trim();
    pointStr = arrowMatch[2].toLowerCase();
    if (pointStr.includes('inf')) point = pointStr.startsWith('-') ? -Infinity : Infinity;
    else if (pointStr.includes('pi')) point = pointStr.startsWith('-') ? -Math.PI : Math.PI;
    else point = parseFloat(pointStr);
  } else if (atMatch && atMatch.index !== undefined && atMatch.index > 0) {
    expr = input.slice(0, atMatch.index).trim();
    pointStr = atMatch[1].toLowerCase();
    if (pointStr.includes('pi')) point = pointStr.startsWith('-') ? -Math.PI : Math.PI;
    else point = parseFloat(pointStr);
  }

  // Clean trailing commas
  expr = expr.replace(/,+$/, '').trim();

  return {
    expr: normalizeExpression(expr),
    point: Number.isFinite(point) ? point : defaultPoint,
    pointStr,
  };
}

/** Extracts integral bounds from inputs like "0 to 2", "[0, 2]", "from 0 to 2", or "x^2, 0, 2" */
export function extractBounds(input: string, defaultA: number = 0, defaultB: number = 1): { expr: string; a: number; b: number; aStr: string; bStr: string } {
  let expr = input;
  let a = defaultA;
  let b = defaultB;
  let aStr = String(defaultA);
  let bStr = String(defaultB);

  // Pattern: "from A to B" or "A to B"
  const fromTo = input.match(/(?:from\s+)?([+-]?\d+(?:\.\d+)?|pi|e|-pi)\s+to\s+([+-]?\d+(?:\.\d+)?|pi|e|-pi)/i);
  // Pattern: "[A, B]" or "[A to B]"
  const bracket = input.match(/\[\s*([+-]?\d+(?:\.\d+)?|pi|e|-pi)\s*[,to]\s*([+-]?\d+(?:\.\d+)?|pi|e|-pi)\s*\]/i);
  // Pattern: ", A, B"
  const comma = input.match(/,\s*([+-]?\d+(?:\.\d+)?|pi|e|-pi)\s*,\s*([+-]?\d+(?:\.\d+)?|pi|e|-pi)\s*$/i);

  const match = fromTo || bracket || comma;
  if (match && match.index !== undefined) {
    expr = input.slice(0, match.index).trim();
    aStr = match[1];
    bStr = match[2];
    a = parseConstantNumber(aStr);
    b = parseConstantNumber(bStr);
  }

  expr = expr.replace(/,+$/, '').trim();

  return {
    expr: normalizeExpression(expr),
    a,
    b,
    aStr,
    bStr,
  };
}

export function parseConstantNumber(str: string): number {
  const s = str.trim().toLowerCase();
  if (s === 'pi') return Math.PI;
  if (s === '-pi') return -Math.PI;
  if (s === 'e') return Math.E;
  if (s === 'inf' || s === 'infinity') return Infinity;
  if (s === '-inf' || s === '-infinity') return -Infinity;
  const val = parseFloat(s);
  return Number.isNaN(val) ? 0 : val;
}
