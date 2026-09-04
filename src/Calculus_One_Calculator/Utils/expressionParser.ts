// Comprehensive superscript reverse mapping covering all exponents
const SUPERSCRIPT_REVERSE: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', '⁻': '-', '⁺': '+', '⁽': '(', '⁾': ')',
  'ˣ': 'x', 'ʸ': 'y', 'ᶻ': 'z', 'ᵏ': 'k', 'ⁱ': 'i',
  'ᵃ': 'a', 'ᵇ': 'b', 'ᶜ': 'c', 'ᵈ': 'd', 'ᵉ': 'e',
  'ᵐ': 'm', 'ᵖ': 'p', 'ʳ': 'r', 'ˢ': 's', 'ᵗ': 't',
  'ᶿ': 'theta', 'ᵅ': 'alpha', 'ᵝ': 'beta', 'ᵞ': 'gamma',
};

// Map special mathematical letterlike symbols not fully decomposed by NFKD
const SPECIAL_MATH_SYMBOLS: Record<string, string> = {
  'ℎ': 'h', 'ℏ': 'h', 'ℯ': 'e', 'ℊ': 'g', 'ℴ': 'o', 'ℐ': 'I', 'ℒ': 'L',
  'ℳ': 'M', 'ℛ': 'R', 'ℭ': 'C', 'ℌ': 'H', 'ℑ': 'I', 'ℜ': 'R', 'ℨ': 'Z',
  'ℂ': 'C', 'ℍ': 'H', 'ℕ': 'N', 'ℙ': 'P', 'ℚ': 'Q', 'ℝ': 'R', 'ℤ': 'Z',
  'ⅅ': 'D', 'ⅆ': 'd', 'ⅇ': 'e', 'ⅈ': 'i', 'ⅉ': 'j',
};

/** Normalizes mathematical input string from ANY font family, Unicode math style, LaTeX, or plain text */
export function normalizeExpression(raw: string): string {
  if (!raw) return '';
  let s = raw.trim();

  // 1. Strip enclosing LaTeX math delimiters: $...$, $$...$$, \(...\), \[...\]
  s = s.replace(/^\$\$([\s\S]*)\$\$$/, '$1');
  s = s.replace(/^\$([\s\S]*)\$$/, '$1');
  s = s.replace(/^\\\[([\s\S]*)\\\]$/, '$1');
  s = s.replace(/^\\\(([\s\S]*)\\\)$/, '$1');

  // 2. CRITICAL: Convert Unicode superscripts BEFORE NFKD decomposition
  // (Otherwise NFKD turns x³ into x3 instead of x^3)
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻⁺⁽⁾ˣʸᶻᵏⁱᵃᵇᶜᵈᵉᵐᵖʳˢᵗᶿᵅᵝᵞ]+/g, (match) => {
    const normal = match.split('').map(c => SUPERSCRIPT_REVERSE[c] ?? c).join('');
    return `^(${normal})`;
  });

  // 3. Map special Letterlike symbols that may not decompose in standard NFKD
  for (const [sym, repl] of Object.entries(SPECIAL_MATH_SYMBOLS)) {
    s = s.replaceAll(sym, repl);
  }

  // 4. Universal Unicode Math Font Normalization:
  // NFKD converts ALL mathematical alphanumeric styles (Bold, Italic, Bold-Italic,
  // Script, Calligraphic, Fraktur/Gothic, Double-Struck/Blackboard Bold,
  // Sans-Serif, Sans-Serif Bold/Italic, Monospace, and Fullwidth characters) into plain ASCII!
  s = s.normalize('NFKD');

  // 5. Normalize all variations of dashes, minuses, and hyphens into standard ASCII '-'
  // (U+2212 minus, U+2010 hyphen, U+2011 non-breaking, U+2012 figure dash, U+2013 en-dash,
  //  U+2014 em-dash, U+2015 horizontal bar, U+FE63 small hyphen, U+FF0D fullwidth hyphen, U+02D7)
  s = s.replace(/[\u2212\u2010\u2011\u2012\u2013\u2014\u2015\uFE63\uFF0D\u02D7]/g, '-');

  // 6. Normalize all variations of addition symbols into standard ASCII '+'
  s = s.replace(/[\uFF0B\uFE62\u2295]/g, '+');

  // 7. Normalize all variations of multiplication symbols into standard ASCII '*'
  // (· U+00B7, ⋅ U+22C5, × U+00D7, ∗ U+2217, ✕ U+2715, ✖ U+2716, ⸱ U+2E33, • U+2022)
  s = s.replace(/[\u00B7\u22C5\u00D7\u2217\u2715\u2716\u2E33\u2022]/g, '*');

  // 8. Normalize all variations of division symbols into standard ASCII '/'
  // (÷ U+00F7, ∕ U+2215, ⁄ U+2044, ➗ U+2797, ／ U+FF0F)
  s = s.replace(/[\u00F7\u2215\u2044\u2797\uFF0F]/g, '/');

  // 9. Normalize all bracket and parenthesis styles into standard ASCII '(' and ')'
  s = s.replace(/[\uFF08\u3014\uFF3B\u3010\u27E8\u2768\u276A\u276C\u276E\u27EE]/g, '(');
  s = s.replace(/[\uFF09\u3015\uFF3D\u3011\u27E9\u2769\u276B\u276D\u276F\u27EF]/g, ')');

  // 10. Remove zero-width, non-breaking, and invisible spaces
  s = s.replace(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, ' ');


  // 5. LaTeX Command Simplifications
  // \frac{a}{b} or \dfrac{a}{b} -> ((a)/(b))
  s = s.replace(/\\d?frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '(($1)/($2))');
  // \sqrt[n]{x} -> (x)^(1/n)
  s = s.replace(/\\sqrt\s*\[([^[\]]+)\]\s*\{([^{}]+)\}/g, '(($2)^(1/($1)))');
  // \sqrt{x} -> sqrt(x)
  s = s.replace(/\\sqrt\s*\{([^{}]+)\}/g, 'sqrt($1)');
  // LaTeX functions: \sin, \cos, \tan, \ln, \exp, \log, etc.
  s = s.replace(/\\(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|sinh|cosh|tanh|ln|log|exp)\b/g, '$1');
  // LaTeX formatting & symbols: \left, \right, \cdot, \times, \pi, \infty, \text{...}
  s = s.replace(/\\(?:left|right)\s*/g, '');
  s = s.replace(/\\(?:cdot|times|ast)\b/g, '*');
  s = s.replace(/\\div\b/g, '/');
  s = s.replace(/\\pi\b/g, 'pi');
  s = s.replace(/\\(?:infty|inf)\b/g, 'inf');
  s = s.replace(/\\(?:mathrm|mathbf|mathit|text)\s*\{([^{}]*)\}/g, '$1');
  s = s.replace(/\\int\b/g, '');

  // 6. Convert LaTeX exponent braces: ^{3} -> ^(3) or ^{...} -> ^(...)
  s = s.replace(/\^\s*\{([^{}]+)\}/g, '^($1)');

  // 7. Strip leading f(x)=, y=, g(x)=, P(x)=, y'=, etc.
  s = s.replace(/^(?:[a-zA-Z]\([a-zA-Z]\)|y|P|Q|f|g|h)\s*=\s*/i, '');

  // 8. Strip ∫ and trailing dx/dt/d... if typed in
  s = s.replace(/^∫\s*/i, '');
  s = s.replace(/\s*d[a-z]\s*$/i, '');

  // 9. Convert √(...) or √x to sqrt(...)
  s = s.replace(/√\(([^)]+)\)/g, 'sqrt($1)');
  s = s.replace(/√([a-zA-Z0-9]+)/g, 'sqrt($1)');

  // 10. Convert π to pi
  s = s.replace(/π/g, 'pi');

  // 11. Support casual shorthand: variable followed immediately by digit(s) without caret (e.g. x3 -> x^3, x2 -> x^2)
  // Only for single-letter variables x, y, z, t, n not preceded by other letters
  s = s.replace(/(?<=[^a-zA-Z]|^)([xyztuvn])([2-9])(?=[^a-zA-Z0-9]|$)/g, '$1^$2');

  // 12. Insert implicit multiplication:
  // Number followed by variable/parenthesis: 4x -> 4*x, 4(x) -> 4*(x), 4x^2 -> 4*x^2
  s = s.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
  // Closing paren followed by opening paren or variable/number: (x+1)(x-1) -> (x+1)*(x-1), (x+1)x -> (x+1)*x
  s = s.replace(/(\))([a-zA-Z0-9(])/g, '$1*$2');
  // Variable followed by opening paren: x(x+1) -> x*(x+1), but NOT for known function names like sin(x)
  const knownFuncs = ['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'ln', 'log', 'exp', 'sqrt', 'abs', 'sinh', 'cosh', 'tanh'];
  const knownPattern = new RegExp(`\\b(${knownFuncs.join('|')})\\s*\\(`, 'g');
  // Temporary placeholder for known functions
  const placeholders: string[] = [];
  s = s.replace(knownPattern, (match) => {
    placeholders.push(match);
    return `__FN_${placeholders.length - 1}__(`;
  });
  // Variable followed by paren: x( -> x*(
  s = s.replace(/([a-zA-Z])(\()/g, '$1*$2');
  // Restore known functions
  placeholders.forEach((orig, idx) => {
    s = s.replace(`__FN_${idx}__(`, orig);
  });

  // 13. Fix e^x -> e^(x) if needed by mathjs
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
