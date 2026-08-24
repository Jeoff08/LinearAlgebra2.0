// components/calculators/ConcavityCalculator.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Smile, Frown, RotateCcw } from 'lucide-react';

/* =========================================================================
 * Symbolic math engine
 * -------------------------------------------------------------------------
 * A small tokenizer + recursive-descent parser turns the user's f(x) into
 * an AST. That same AST is used both to EVALUATE the function (no more
 * fragile string-substitution / new Function() tricks) and to SYMBOLICALLY
 * DIFFERENTIATE it, so the f'(x) and f''(x) shown to the user are actually
 * computed from the real rules of calculus rather than guessed by matching
 * substrings like "x^3" or "sin". This is what makes the results accurate.
 * ========================================================================= */

type ASTNode =
  | { type: 'num'; value: number }
  | { type: 'var' }
  | { type: 'const'; name: 'pi' | 'e' }
  | { type: 'neg'; arg: ASTNode }
  | { type: 'bin'; op: '+' | '-' | '*' | '/' | '^'; left: ASTNode; right: ASTNode }
  | { type: 'func'; name: 'sin' | 'cos' | 'tan' | 'sqrt' | 'ln' | 'log' | 'exp'; arg: ASTNode };

type Token =
  | { type: 'num'; value: number }
  | { type: 'id'; value: string }
  | { type: 'op'; value: '+' | '-' | '*' | '/' | '^' }
  | { type: 'lparen' }
  | { type: 'rparen' };

const FUNCTION_NAMES = ['sin', 'cos', 'tan', 'sqrt', 'ln', 'log', 'exp'] as const;
const KNOWN_WORDS = [...FUNCTION_NAMES, 'pi', 'x', 'e'];

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  const s = input.replace(/\s+/g, '');
  let i = 0;

  while (i < s.length) {
    const c = s[i];

    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const numStr = s.slice(i, j);
      if ((numStr.match(/\./g) || []).length > 1) {
        throw new Error(`Invalid number "${numStr}"`);
      }
      tokens.push({ type: 'num', value: parseFloat(numStr) });
      i = j;
      continue;
    }

    if (/[a-zA-Zπ]/.test(c)) {
      if (c === 'π') {
        tokens.push({ type: 'id', value: 'pi' });
        i++;
        continue;
      }
      let j = i;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
      const word = s.slice(i, j);

      // Greedily split concatenated known names, e.g. "xsin" -> x, sin
      const sortedNames = [...KNOWN_WORDS].sort((a, b) => b.length - a.length);
      let k = 0;
      while (k < word.length) {
        const match = sortedNames.find((name) => word.startsWith(name, k));
        if (!match) {
          throw new Error(`Unrecognized term "${word.slice(k)}" in the function`);
        }
        tokens.push({ type: 'id', value: match });
        k += match.length;
      }
      i = j;
      continue;
    }

    if (c === '(') { tokens.push({ type: 'lparen' }); i++; continue; }
    if (c === ')') { tokens.push({ type: 'rparen' }); i++; continue; }
    if ('+-*/^'.includes(c)) { tokens.push({ type: 'op', value: c as '+' | '-' | '*' | '/' | '^' }); i++; continue; }

    throw new Error(`Unexpected character "${c}"`);
  }

  return tokens;
}

function parseTokens(tokens: Token[]): ASTNode {
  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];
  const isFuncName = (v: string): v is (typeof FUNCTION_NAMES)[number] =>
    (FUNCTION_NAMES as readonly string[]).includes(v);

  const startsFactor = () => {
    const t = peek();
    return !!t && (t.type === 'num' || t.type === 'id' || t.type === 'lparen');
  };

  function parsePrimary(): ASTNode {
    const t = peek();
    if (!t) throw new Error('Unexpected end of expression');

    if (t.type === 'num') { next(); return { type: 'num', value: t.value }; }

    if (t.type === 'lparen') {
      next();
      const e = parseExpression();
      if (!peek() || peek().type !== 'rparen') throw new Error('Missing closing parenthesis');
      next();
      return e;
    }

    if (t.type === 'id') {
      if (isFuncName(t.value)) {
        next();
        if (!peek() || peek().type !== 'lparen') throw new Error(`Expected "(" after ${t.value}`);
        next();
        const arg = parseExpression();
        if (!peek() || peek().type !== 'rparen') throw new Error('Missing closing parenthesis');
        next();
        return { type: 'func', name: t.value, arg };
      }
      if (t.value === 'pi') { next(); return { type: 'const', name: 'pi' }; }
      if (t.value === 'e') { next(); return { type: 'const', name: 'e' }; }
      if (t.value === 'x') { next(); return { type: 'var' }; }
    }

    throw new Error('Unexpected token in expression');
  }

  function parseUnary(): ASTNode {
    const t = peek();
    if (t && t.type === 'op' && t.value === '-') {
      next();
      const inner = parseUnary();
      // Fold literal negatives (the "-1" in x^-1) so later logic that looks
      // for a constant exponent/coefficient recognizes it as one.
      if (inner.type === 'num') return { type: 'num', value: -inner.value };
      return { type: 'neg', arg: inner };
    }
    if (t && t.type === 'op' && t.value === '+') { next(); return parseUnary(); }
    return parsePower();
  }

  function parsePower(): ASTNode {
    const base = parsePrimary();
    const t = peek();
    if (t && t.type === 'op' && t.value === '^') {
      next();
      const exp = parseUnary(); // right-associative, allows x^-1
      return { type: 'bin', op: '^', left: base, right: exp };
    }
    return base;
  }

  function parseTerm(): ASTNode {
    let node = parseUnary();
    for (;;) {
      const t = peek();
      if (t && t.type === 'op' && (t.value === '*' || t.value === '/')) {
        next();
        node = { type: 'bin', op: t.value, left: node, right: parseUnary() };
      } else if (startsFactor()) {
        // implicit multiplication, e.g. "3x", "2sin(x)", "(x+1)(x-2)"
        node = { type: 'bin', op: '*', left: node, right: parseUnary() };
      } else {
        break;
      }
    }
    return node;
  }

  function parseExpression(): ASTNode {
    let node = parseTerm();
    for (;;) {
      const t = peek();
      if (t && t.type === 'op' && (t.value === '+' || t.value === '-')) {
        next();
        node = { type: 'bin', op: t.value, left: node, right: parseTerm() };
      } else {
        break;
      }
    }
    return node;
  }

  const result = parseExpression();
  if (pos < tokens.length) throw new Error('Unexpected trailing characters');
  return result;
}

function parseFunctionString(fn: string): ASTNode {
  const tokens = tokenize(fn);
  if (tokens.length === 0) throw new Error('Empty expression');
  return parseTokens(tokens);
}

function evaluateAST(node: ASTNode, x: number): number {
  switch (node.type) {
    case 'num': return node.value;
    case 'var': return x;
    case 'const': return node.name === 'pi' ? Math.PI : Math.E;
    case 'neg': return -evaluateAST(node.arg, x);
    case 'bin': {
      const a = evaluateAST(node.left, x);
      const b = evaluateAST(node.right, x);
      switch (node.op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '^': return Math.pow(a, b);
      }
    }
    // eslint-disable-next-line no-fallthrough
    case 'func': {
      const a = evaluateAST(node.arg, x);
      switch (node.name) {
        case 'sin': return Math.sin(a);
        case 'cos': return Math.cos(a);
        case 'tan': return Math.tan(a);
        case 'sqrt': return Math.sqrt(a);
        case 'ln': return Math.log(a);
        case 'log': return Math.log10(a);
        case 'exp': return Math.exp(a);
      }
    }
  }
}

const num = (v: number): ASTNode => ({ type: 'num', value: v });
const bin = (op: '+' | '-' | '*' | '/' | '^', l: ASTNode, r: ASTNode): ASTNode => ({ type: 'bin', op, left: l, right: r });
const negNode = (a: ASTNode): ASTNode => ({ type: 'neg', arg: a });
const fnNode = (name: (typeof FUNCTION_NAMES)[number], a: ASTNode): ASTNode => ({ type: 'func', name, arg: a });

function differentiate(node: ASTNode): ASTNode {
  switch (node.type) {
    case 'num': return num(0);
    case 'var': return num(1);
    case 'const': return num(0);
    case 'neg': return negNode(differentiate(node.arg));
    case 'func': {
      const u = node.arg;
      const du = differentiate(u);
      switch (node.name) {
        case 'sin': return bin('*', fnNode('cos', u), du);
        case 'cos': return negNode(bin('*', fnNode('sin', u), du));
        case 'tan': return bin('/', du, bin('^', fnNode('cos', u), num(2)));
        case 'ln': return bin('/', du, u);
        case 'log': return bin('/', du, bin('*', u, fnNode('ln', num(10))));
        case 'sqrt': return bin('/', du, bin('*', num(2), fnNode('sqrt', u)));
        case 'exp': return bin('*', fnNode('exp', u), du);
      }
    }
    // eslint-disable-next-line no-fallthrough
    case 'bin': {
      const { op, left: a, right: b } = node;
      const da = differentiate(a);
      const db = differentiate(b);
      switch (op) {
        case '+': return bin('+', da, db);
        case '-': return bin('-', da, db);
        case '*': return bin('+', bin('*', da, b), bin('*', a, db));
        case '/': return bin('/', bin('-', bin('*', da, b), bin('*', a, db)), bin('^', b, num(2)));
        case '^': {
          if (b.type === 'num') {
            const n = b.value;
            if (n === 0) return num(0);
            return bin('*', bin('*', num(n), bin('^', a, num(n - 1))), da);
          }
          if (a.type === 'const' && a.name === 'e') {
            return bin('*', bin('^', a, b), db);
          }
          // General case a(x)^b(x) via logarithmic differentiation:
          // d/dx[a^b] = a^b * (b' * ln(a) + b * a'/a)
          return bin(
            '*',
            bin('^', a, b),
            bin('+', bin('*', db, fnNode('ln', a)), bin('*', b, bin('/', da, a)))
          );
        }
      }
    }
  }
}

// Returns the literal value if `n` is a numeric-literal node, otherwise null.
// (Using a plain function instead of a type-predicate guard sidesteps flaky
// narrowing on nested property access like b.left.value across TS versions.)
function asNum(n: ASTNode): number | null {
  return n.type === 'num' ? n.value : null;
}

function simplify(node: ASTNode): ASTNode {
  if (node.type === 'neg') {
    const a = simplify(node.arg);
    const av = asNum(a);
    if (av !== null) return num(-av);
    if (a.type === 'neg') return a.arg;
    return negNode(a);
  }
  if (node.type === 'func') {
    return { ...node, arg: simplify(node.arg) };
  }
  if (node.type === 'bin') {
    const a = simplify(node.left);
    const b = simplify(node.right);
    const op = node.op;
    const av = asNum(a);
    const bv = asNum(b);

    if (av !== null && bv !== null) {
      switch (op) {
        case '+': return num(av + bv);
        case '-': return num(av - bv);
        case '*': return num(av * bv);
        case '/': if (bv !== 0) return num(av / bv); break;
        case '^': return num(Math.pow(av, bv));
      }
    }
    if (op === '+') {
      if (av === 0) return b;
      if (bv === 0) return a;
    }
    if (op === '-') {
      if (bv === 0) return a;
      if (av === 0) return simplify(negNode(b));
    }
    if (op === '*') {
      if (av === 0 || bv === 0) return num(0);
      if (av === 1) return b;
      if (bv === 1) return a;
      // Collect numeric coefficients: 3 * (2 * x) -> 6 * x
      if (av !== null && b.type === 'bin' && b.op === '*') {
        const blv = asNum(b.left);
        const brv = asNum(b.right);
        if (blv !== null) return simplify(bin('*', num(av * blv), b.right));
        if (brv !== null) return simplify(bin('*', num(av * brv), b.left));
      }
      if (bv !== null && a.type === 'bin' && a.op === '*') {
        const alv = asNum(a.left);
        const arv = asNum(a.right);
        if (alv !== null) return simplify(bin('*', num(alv * bv), a.right));
        if (arv !== null) return simplify(bin('*', num(arv * bv), a.left));
      }
      if (bv !== null && av === null) return bin('*', b, a); // canonical: coefficient first
    }
    if (op === '/') {
      if (av === 0) return num(0);
      if (bv === 1) return a;
    }
    if (op === '^') {
      if (bv === 1) return a;
      if (bv === 0) return num(1);
    }
    return bin(op, a, b);
  }
  return node;
}

function simplifyFull(node: ASTNode): ASTNode {
  let prev = node;
  for (let i = 0; i < 8; i++) {
    const nxt = simplify(prev);
    if (JSON.stringify(nxt) === JSON.stringify(prev)) return nxt;
    prev = nxt;
  }
  return prev;
}

function formatNum(v: number): string {
  if (Number.isInteger(v)) return String(v);
  return String(parseFloat(v.toFixed(6)));
}

function stringifyAST(node: ASTNode, parentPrec = 0): string {
  const wrap = (str: string, prec: number) => (prec < parentPrec ? `(${str})` : str);
  switch (node.type) {
    case 'num': return wrap(formatNum(node.value), 5);
    case 'var': return 'x';
    case 'const': return node.name === 'pi' ? 'π' : 'e';
    case 'neg': return wrap('-' + stringifyAST(node.arg, 4), 3);
    case 'func': return `${node.name}(${stringifyAST(node.arg, 0)})`;
    case 'bin': {
      const precMap: Record<string, number> = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 4 };
      const prec = precMap[node.op];
      if (node.op === '^') {
        const l = stringifyAST(node.left, prec + 1);
        const r = stringifyAST(node.right, prec);
        return wrap(`${l}^${r}`, prec);
      }
      const l = stringifyAST(node.left, prec);
      let r = stringifyAST(node.right, prec + 1);
      if (node.op === '*') {
        // "2x" instead of "2*x", but guard against ambiguity like "x^2-sin(x)"
        // being misread as subtraction when it's really x^2 * (-sin(x)).
        const ambiguousSign = r.startsWith('-');
        const adjacentDigits = /[0-9.]$/.test(l) && /^[0-9.]/.test(r);
        if (ambiguousSign) r = `(${r})`;
        const sep = adjacentDigits ? ' * ' : '';
        return wrap(`${l}${sep}${r}`, prec);
      }
      return wrap(`${l} ${node.op} ${r}`, prec);
    }
  }
}

/* =========================================================================
 * Input normalization
 * -------------------------------------------------------------------------
 * People often paste a function copied from a document, slide, or a caption
 * describing an image, where exponents are real Unicode superscripts (x⁴)
 * rather than "^" notation, and roots use the √ glyph. This converts pasted
 * or typed text into the calculator's "^" / "sqrt(...)" syntax automatically.
 * Only these two symbols are touched — everything else passes through as-is.
 * ========================================================================= */

const SUPERSCRIPT_TO_DIGIT: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁻': '-', '⁺': '+',
};
const SUPERSCRIPT_CHARS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B';
const SUPERSCRIPT_RUN = new RegExp(`([0-9a-zA-Z)])([${SUPERSCRIPT_CHARS}]+)`, 'g');

function normalizeFunctionInput(raw: string): string {
  let s = raw;

  // A proper Unicode minus sign (as opposed to a hyphen) shows up whenever
  // math text is pasted from a formatted document — normalize it so the
  // parser (and the superscript conversion below) can read it.
  s = s.replace(/\u2212/g, '-');

  // Superscript exponents: "x⁴" -> "x^4", "(x+1)²" -> "(x+1)^2", "x⁻¹" -> "x^-1"
  s = s.replace(SUPERSCRIPT_RUN, (_match, base: string, sup: string) => {
    const digits = sup
      .split('')
      .map((ch: string) => SUPERSCRIPT_TO_DIGIT[ch] ?? '')
      .join('');
    return digits ? `${base}^${digits}` : `${base}${sup}`;
  });

  // Square-root glyph: "√(...)" -> "sqrt(...)"; "√25" / "√x" -> "sqrt(25)" / "sqrt(x)"
  s = s.replace(/√\(/g, 'sqrt(');
  s = s.replace(/√([0-9.]+|[a-zA-Z])/g, 'sqrt($1)');

  return s;
}

/* ========================================================================= */

interface ConcavityInterval {
  start: number;
  end: number;
  type: 'concave_up' | 'concave_down' | 'inflection';
  reason: string;
  secondDerivativeSign: 'positive' | 'negative' | 'zero';
}

interface ConcavityResult {
  intervals: ConcavityInterval[];
  inflectionPoints: number[];
  derivative: string;
  secondDerivative: string;
  steps: string[];
  message: string;
}

const ConcavityCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('4');
  const [result, setResult] = useState<ConcavityResult | null>(null);
  const [error, setError] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestionIndex, setSuggestionIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // Only one suggestion - the ^ symbol
  const suggestions = ['^'];

  const filteredSuggestions = suggestions.filter(s =>
    s.toLowerCase().includes(functionStr.toLowerCase()) || 
    functionStr.length > 0
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setSuggestionIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFunctionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const normalized = normalizeFunctionInput(rawValue);
    setFunctionStr(normalized);
    setSuggestionIndex(-1);
    
    // Show suggestion only when user types
    if (normalized.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) {
      if (e.key === 'Enter') {
        // If no suggestion, just proceed
        return;
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSuggestionIndex((prev) => (prev + 1) % filteredSuggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSuggestionIndex((prev) => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
    } else if (e.key === 'Enter' && suggestionIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[suggestionIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSuggestionIndex(-1);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Insert ^ at the current cursor position or at the end
    const cursorPos = inputRef.current?.selectionStart || functionStr.length;
    const before = functionStr.substring(0, cursorPos);
    const after = functionStr.substring(cursorPos);
    
    // Only insert the ^ symbol, no number
    setFunctionStr(before + suggestion + after);
    setShowSuggestions(false);
    setSuggestionIndex(-1);
    inputRef.current?.focus();
    
    // Move cursor after the inserted ^
    const newPos = cursorPos + suggestion.length;
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(newPos, newPos);
      }
    }, 0);
  };

  const validateFunction = (fn: string): { ok: true } | { ok: false; message: string } => {
    if (!fn || fn.trim() === '') return { ok: false, message: 'Please enter a function to analyze.' };
    try {
      const ast = parseFunctionString(fn);
      const testValue = evaluateAST(ast, 1);
      if (!isFinite(testValue)) {
        return { ok: false, message: 'That function is undefined at x = 1, which is used as a quick validity check. Try a different form.' };
      }
      return { ok: true };
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Invalid function syntax.';
      return { ok: false, message: `Invalid function: ${msg}. Use notation like x^3 - 3x^2 + 2, sin(x), or e^x.` };
    }
  };

  const findInflectionPoints = (f2: (x: number) => number, a: number, b: number): number[] => {
    const inflectionPoints: number[] = [];
    const numPoints = 2000;
    const step = (b - a) / numPoints;

    let prevSecondDeriv = f2(a);
    for (let i = 1; i <= numPoints; i++) {
      const x = a + i * step;
      const currentSecondDeriv = f2(x);

      if (isFinite(prevSecondDeriv) && isFinite(currentSecondDeriv)) {
        if (prevSecondDeriv * currentSecondDeriv < 0) {
          let left = x - step;
          let right = x;

          for (let iter = 0; iter < 40; iter++) {
            const mid = (left + right) / 2;
            const midVal = f2(mid);
            const leftVal = f2(left);
            if (!isFinite(midVal) || !isFinite(leftVal)) break;
            if (leftVal * midVal < 0) {
              right = mid;
            } else {
              left = mid;
            }
          }

          const root = (left + right) / 2;
          if (isFinite(root) && root > a && root < b) {
            inflectionPoints.push(root);
          }
        }
      }
      prevSecondDeriv = currentSecondDeriv;
    }

    // Points where the second derivative is undefined but the concavity
    // still visibly flips on either side of it.
    for (let i = 0; i <= numPoints; i++) {
      const x = a + i * step;
      const deriv = f2(x);
      if (!isFinite(deriv)) {
        const leftDeriv = f2(x - step);
        const rightDeriv = f2(x + step);
        if (isFinite(leftDeriv) && isFinite(rightDeriv)) {
          if (leftDeriv * rightDeriv < 0 || Math.abs(leftDeriv - rightDeriv) > 0.1) {
            inflectionPoints.push(x);
          }
        }
      }
    }

    inflectionPoints.sort((a, b) => a - b);
    const uniquePoints: number[] = [];
    const tolerance = 1e-6;
    for (const point of inflectionPoints) {
      if (!uniquePoints.some((existing) => Math.abs(point - existing) < tolerance)) {
        uniquePoints.push(point);
      }
    }
    return uniquePoints;
  };

  const analyzeConcavity = () => {
    const validation = validateFunction(functionStr);
    if (!validation.ok) {
      setError(validation.message);
      setResult(null);
      return;
    }

    const a = parseFloat(startPoint);
    const b = parseFloat(endPoint);

    if (isNaN(a) || isNaN(b)) {
      setError('Please enter valid numbers for the interval');
      setResult(null);
      return;
    }
    if (a >= b) {
      setError('Start point must be less than end point');
      setResult(null);
      return;
    }

    try {
      const ast = parseFunctionString(functionStr);
      const firstDerivAst = simplifyFull(differentiate(ast));
      const secondDerivAst = simplifyFull(differentiate(firstDerivAst));

      const f = (x: number) => evaluateAST(ast, x);
      const f2 = (x: number) => evaluateAST(secondDerivAst, x);

      const testStart = f(a);
      const testEnd = f(b);
      if (!isFinite(testStart) || !isFinite(testEnd)) {
        setError('Function is undefined at one or both endpoints. Please adjust the interval.');
        setResult(null);
        return;
      }

      const derivativeExpr = stringifyAST(firstDerivAst);
      const secondDerivativeExpr = stringifyAST(secondDerivAst);

      const steps: string[] = [];
      const intervals: ConcavityInterval[] = [];

      steps.push(`📐 f(x) = ${functionStr}`);
      steps.push(`   f'(x) = ${derivativeExpr}   (computed symbolically)`);
      steps.push(`   f''(x) = ${secondDerivativeExpr}   (computed symbolically)`);
      steps.push(`   Interval: [${a.toFixed(4)}, ${b.toFixed(4)}]`);
      steps.push('');

      const inflectionPoints = findInflectionPoints(f2, a, b);

      if (inflectionPoints.length > 0) {
        steps.push(`🔍 Solved f''(x) = 0 (or found where f''(x) is undefined) on the interval:`);
        steps.push(`   ${inflectionPoints.map((p) => p.toFixed(4)).join(', ')}`);
        steps.push('');
      } else {
        steps.push('🔍 f\'\'(x) does not change sign — no inflection points in this interval');
        steps.push('');
      }

      const allPoints = [a, ...inflectionPoints, b];

      for (let i = 0; i < allPoints.length - 1; i++) {
        const start = allPoints[i];
        const end = allPoints[i + 1];
        if (end - start < 1e-10) continue;

        const mid = (start + end) / 2;
        const secondDerivMid = f2(mid);

        let intervalType: 'concave_up' | 'concave_down' | 'inflection';
        let reason = '';
        let sign: 'positive' | 'negative' | 'zero' = 'positive';

        if (!isFinite(secondDerivMid)) {
          const leftVal = f2(start + 1e-6);
          const rightVal = f2(end - 1e-6);
          if (isFinite(leftVal) && isFinite(rightVal)) {
            if (leftVal > 0 && rightVal > 0) {
              intervalType = 'concave_up'; sign = 'positive';
              reason = `f''(x) > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else if (leftVal < 0 && rightVal < 0) {
              intervalType = 'concave_down'; sign = 'negative';
              reason = `f''(x) < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
            } else {
              intervalType = 'inflection'; sign = 'zero';
              reason = `f''(x) changes sign at this inflection point`;
            }
          } else {
            continue;
          }
        } else if (Math.abs(secondDerivMid) < 1e-9) {
          intervalType = 'inflection'; sign = 'zero';
          reason = `f''(x) = 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else if (secondDerivMid > 0) {
          intervalType = 'concave_up'; sign = 'positive';
          reason = `f''(x) > 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        } else {
          intervalType = 'concave_down'; sign = 'negative';
          reason = `f''(x) < 0 on (${start.toFixed(4)}, ${end.toFixed(4)})`;
        }

        intervals.push({ start, end, type: intervalType, reason, secondDerivativeSign: sign });
      }

      const concaveUpCount = intervals.filter((i) => i.type === 'concave_up').length;
      const concaveDownCount = intervals.filter((i) => i.type === 'concave_down').length;
      const inflectionCount = intervals.filter((i) => i.type === 'inflection').length;

      steps.push('📊 Concavity Analysis Results:');
      if (concaveUpCount > 0) steps.push(`   😊 ${concaveUpCount} interval(s) where f is concave up (f''(x) > 0)`);
      if (concaveDownCount > 0) steps.push(`   😟 ${concaveDownCount} interval(s) where f is concave down (f''(x) < 0)`);
      if (inflectionCount > 0) steps.push(`   🔄 ${inflectionCount} inflection point(s) where concavity changes`);

      let message = `Analyzed ${intervals.length} concavity interval(s)`;
      const details: string[] = [];
      if (concaveUpCount > 0) details.push(`${concaveUpCount} concave up`);
      if (concaveDownCount > 0) details.push(`${concaveDownCount} concave down`);
      if (inflectionPoints.length > 0) details.push(`${inflectionPoints.length} inflection points`);
      if (details.length > 0) message += ` (${details.join(', ')})`;

      setResult({
        intervals,
        inflectionPoints,
        derivative: derivativeExpr,
        secondDerivative: secondDerivativeExpr,
        steps,
        message,
      });
      setError('');
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Please check your input.';
      setError(`An error occurred while analyzing the function: ${msg}`);
      setResult(null);
    }
  };

  const clear = () => {
    setFunctionStr('');
    setStartPoint('');
    setEndPoint('');
    setResult(null);
    setError('');
    setShowSuggestions(false);
    setSuggestionIndex(-1);
  };

  const getConcavityColor = (type: string): string => {
    switch (type) {
      case 'concave_up': return 'text-green-700 bg-green-50 border-green-200';
      case 'concave_down': return 'text-red-700 bg-red-50 border-red-200';
      case 'inflection': return 'text-purple-700 bg-purple-50 border-purple-200';
      default: return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getConcavityIcon = (type: string) => {
    switch (type) {
      case 'concave_up': return <Smile className="w-4 h-4" />;
      case 'concave_down': return <Frown className="w-4 h-4" />;
      case 'inflection': return <Info className="w-4 h-4" />;
      default: return null;
    }
  };

  const getConcavityLabel = (type: string): string => {
    switch (type) {
      case 'concave_up': return 'Concave Up (∪)';
      case 'concave_down': return 'Concave Down (∩)';
      case 'inflection': return 'Inflection Point';
      default: return 'Unknown';
    }
  };

  const getSecondDerivativeLabel = (sign: string): string => {
    switch (sign) {
      case 'positive': return "f''(x) > 0";
      case 'negative': return "f''(x) < 0";
      case 'zero': return "f''(x) = 0";
      default: return '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Concavity Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Determines where f(x) is concave up or concave down</li>
            <li>Concave up (∪): f''(x) &gt; 0, shape like a cup</li>
            <li>Concave down (∩): f''(x) &lt; 0, shape like a cap</li>
            <li>Inflection points: where concavity changes (f''(x) = 0 or undefined)</li>
            <li>f'(x) and f''(x) are computed symbolically for exact results</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            ref={inputRef}
            type="text"
            value={functionStr}
            onChange={handleFunctionChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (functionStr.length > 0) {
                setShowSuggestions(true);
              }
            }}
            placeholder="e.g., x^3 - 3x^2 + 2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
          
          {/* ^ Symbol Suggestion - only inserts ^ */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div 
              ref={suggestionRef}
              className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg"
            >
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors font-mono text-sm flex items-center gap-2 ${
                    index === suggestionIndex ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setSuggestionIndex(index)}
                >
                  <span className="text-blue-600 font-bold text-lg">{suggestion}</span>
                  <span className="text-gray-600">Insert power symbol (^)</span>
                  <span className="text-xs text-gray-400 ml-auto">
                    {index === suggestionIndex ? 'Press Enter' : 'Click'}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          <p className="text-xs text-gray-500 mt-1">
            💡 Example: x^3 - 3x^2 + 2, sin(x), e^x, ln(x), sqrt(x) — pasting x⁴ or √x also works
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Start</label>
          <input
            type="text"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
            placeholder="e.g., -2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">End</label>
          <input
            type="text"
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            placeholder="e.g., 4"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={analyzeConcavity}
          className="flex-1 bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Analyze Concavity
        </button>
        <button
          onClick={clear}
          className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium text-gray-700 flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Clear
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {result && (
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-lg font-semibold text-green-700">✅ Analysis Complete</div>
                  <div className="text-sm text-gray-500">{result.message}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Derivatives:</div>
                  <div className="font-mono text-xs">f'(x) = {result.derivative}</div>
                  <div className="font-mono text-xs">f''(x) = {result.secondDerivative}</div>
                </div>
              </div>

              {result.inflectionPoints.length > 0 && (
                <div className="mb-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-700">Inflection Points:</div>
                  <div className="font-mono text-sm text-purple-600">
                    {result.inflectionPoints.map((p) => `${p.toFixed(4)}`).join(', ')}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">Concavity changes at these points</div>
                </div>
              )}

              {result.intervals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.intervals.map((interval, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${getConcavityColor(interval.type)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getConcavityIcon(interval.type)}
                          <span className="font-medium">{getConcavityLabel(interval.type)}</span>
                        </div>
                        <div className="text-xs bg-white/50 px-2 py-1 rounded font-mono">
                          ({interval.start.toFixed(4)}, {interval.end.toFixed(4)})
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-75">{interval.reason}</div>
                      <div className="text-xs mt-1 font-mono text-gray-600">
                        {getSecondDerivativeLabel(interval.secondDerivativeSign)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No concavity intervals found in the specified range
                </div>
              )}

              <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600">
                  <span className="font-medium">💡 Key Insight:</span>
                  {result.intervals.some((i) => i.type === 'concave_up') && ' 😊 Concave up (∪) means the function is curving upward like a cup.'}
                  {result.intervals.some((i) => i.type === 'concave_down') && ' 😟 Concave down (∩) means the function is curving downward like a cap.'}
                  {result.inflectionPoints.length > 0 && ' 🔄 Inflection points are where the concavity changes from up to down or vice versa.'}
                </div>
              </div>

              {/* Step-by-step solution: always shown, not collapsed behind a toggle */}
              <div className="mt-4">
                <div className="text-sm font-medium text-gray-700 mb-1">Step-by-Step Solution</div>
                <div className="space-y-1 font-mono text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {result.steps.map((step, index) => (
                    <div key={index} className="py-0.5">{step || '\u00A0'}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConcavityCalculator;