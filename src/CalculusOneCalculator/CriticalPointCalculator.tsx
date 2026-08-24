// components/calculators/CriticalPointCalculator.tsx
import React, { useRef, useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, Info, Target, X } from 'lucide-react';

interface CriticalPointResult {
  criticalPoints: {
    x: number;
    y: number;
    type: 'critical' | 'stationary' | 'singular' | 'endpoint';
    reason: string;
  }[];
  derivative: string;
  steps: string[];
  message: string;
}

/* =========================================================================
 * Symbolic math engine — scoped ONLY to what this Critical Point Calculator
 * needs (parse f(x), differentiate it exactly, evaluate f and f' at a
 * point). This intentionally replaces the previous approach of guessing
 * f'(x) from substrings of the input text (which was wrong for anything
 * beyond the exact demo example) and replaces finite-difference derivative
 * approximation with an exact symbolic derivative for accurate root-finding.
 * ======================================================================= */

type ASTNode =
  | { kind: 'num'; value: number }
  | { kind: 'var' }
  | { kind: 'const'; name: 'pi' | 'e' }
  | { kind: 'add'; a: ASTNode; b: ASTNode }
  | { kind: 'sub'; a: ASTNode; b: ASTNode }
  | { kind: 'mul'; a: ASTNode; b: ASTNode }
  | { kind: 'div'; a: ASTNode; b: ASTNode }
  | { kind: 'pow'; a: ASTNode; b: ASTNode }
  | { kind: 'neg'; a: ASTNode }
  | { kind: 'func'; name: 'sin' | 'cos' | 'tan' | 'ln' | 'log' | 'sqrt' | 'exp'; arg: ASTNode };

type Tok =
  | { t: 'num'; v: number }
  | { t: 'id'; v: string }
  | { t: 'op'; v: '+' | '-' | '*' | '/' | '^' }
  | { t: '(' }
  | { t: ')' };

const FUNC_WORDS = ['sqrt', 'sin', 'cos', 'tan', 'ln', 'log', 'exp', 'pi'];

function tokenize(raw: string): Tok[] {
  const s = raw.replace(/π/g, 'pi').replace(/\s+/g, '');
  const toks: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const numStr = s.slice(i, j);
      const num = parseFloat(numStr);
      if (Number.isNaN(num)) throw new Error(`Invalid number near "${numStr}"`);
      toks.push({ t: 'num', v: num });
      i = j;
      continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      let matchedWord: string | null = null;
      for (const w of FUNC_WORDS) {
        if (s.startsWith(w, i)) { matchedWord = w; break; }
      }
      if (matchedWord) {
        toks.push({ t: 'id', v: matchedWord });
        i += matchedWord.length;
      } else if (c === 'x' || c === 'e') {
        toks.push({ t: 'id', v: c });
        i += 1;
      } else {
        throw new Error(`"${c}" isn't supported here — this calculator only handles x, sin, cos, tan, ln, log, sqrt, exp, e and pi`);
      }
      continue;
    }
    if (c === '+' || c === '-' || c === '*' || c === '/' || c === '^') {
      toks.push({ t: 'op', v: c as '+' | '-' | '*' | '/' | '^' });
      i++;
      continue;
    }
    if (c === '(') { toks.push({ t: '(' }); i++; continue; }
    if (c === ')') { toks.push({ t: ')' }); i++; continue; }
    throw new Error(`Unexpected character "${c}" in f(x)`);
  }
  return toks;
}

function parseTokens(toks: Tok[]): ASTNode {
  let pos = 0;
  const peek = () => toks[pos];
  const next = () => toks[pos++];

  const atFactorStart = (): boolean => {
    const t = peek();
    if (!t) return false;
    return t.t === 'num' || t.t === 'id' || t.t === '(';
  };

  function parseAddSub(): ASTNode {
    let node = parseMulDiv();
    while (peek() && peek()!.t === 'op' && ((peek() as { t: 'op'; v: string }).v === '+' || (peek() as { t: 'op'; v: string }).v === '-')) {
      const op = next() as { t: 'op'; v: '+' | '-' };
      const rhs = parseMulDiv();
      node = op.v === '+' ? { kind: 'add', a: node, b: rhs } : { kind: 'sub', a: node, b: rhs };
    }
    return node;
  }

  function parseMulDiv(): ASTNode {
    let node = parseImplicitMul();
    while (peek() && peek()!.t === 'op' && ((peek() as { t: 'op'; v: string }).v === '*' || (peek() as { t: 'op'; v: string }).v === '/')) {
      const op = next() as { t: 'op'; v: '*' | '/' };
      const rhs = parseImplicitMul();
      node = op.v === '*' ? { kind: 'mul', a: node, b: rhs } : { kind: 'div', a: node, b: rhs };
    }
    return node;
  }

  function parseImplicitMul(): ASTNode {
    let node = parseUnary();
    while (atFactorStart()) {
      const rhs = parseUnary();
      node = { kind: 'mul', a: node, b: rhs };
    }
    return node;
  }

  function parseUnary(): ASTNode {
    const t = peek();
    if (t && t.t === 'op' && t.v === '-') { next(); return { kind: 'neg', a: parseUnary() }; }
    if (t && t.t === 'op' && t.v === '+') { next(); return parseUnary(); }
    return parsePow();
  }

  function parsePow(): ASTNode {
    const base = parsePrimary();
    const t = peek();
    if (t && t.t === 'op' && t.v === '^') {
      next();
      const exp = parseUnary();
      return { kind: 'pow', a: base, b: exp };
    }
    return base;
  }

  function parsePrimary(): ASTNode {
    const t = next();
    if (!t) throw new Error('f(x) is incomplete — check for a missing term');
    if (t.t === 'num') return { kind: 'num', value: t.v };
    if (t.t === '(') {
      const inner = parseAddSub();
      const close = next();
      if (!close || close.t !== ')') throw new Error('Missing closing parenthesis in f(x)');
      return inner;
    }
    if (t.t === 'id') {
      if (t.v === 'x') return { kind: 'var' };
      if (t.v === 'pi') return { kind: 'const', name: 'pi' };
      if (t.v === 'e') return { kind: 'const', name: 'e' };
      const open = next();
      if (!open || open.t !== '(') throw new Error(`Expected "(" after ${t.v}`);
      const arg = parseAddSub();
      const close = next();
      if (!close || close.t !== ')') throw new Error(`Missing closing parenthesis after ${t.v}(...)`);
      return { kind: 'func', name: t.v as 'sin' | 'cos' | 'tan' | 'ln' | 'log' | 'sqrt' | 'exp', arg };
    }
    throw new Error('Unexpected token in f(x)');
  }

  const result = parseAddSub();
  if (pos !== toks.length) throw new Error('Could not fully parse f(x) — check for a stray character');
  return result;
}

function parseMathExpression(raw: string): ASTNode {
  if (!raw || !raw.trim()) throw new Error('Please enter a function f(x)');
  const toks = tokenize(raw);
  if (toks.length === 0) throw new Error('Please enter a function f(x)');
  return parseTokens(toks);
}

function evaluateAST(node: ASTNode, x: number): number {
  switch (node.kind) {
    case 'num': return node.value;
    case 'var': return x;
    case 'const': return node.name === 'pi' ? Math.PI : Math.E;
    case 'add': return evaluateAST(node.a, x) + evaluateAST(node.b, x);
    case 'sub': return evaluateAST(node.a, x) - evaluateAST(node.b, x);
    case 'mul': return evaluateAST(node.a, x) * evaluateAST(node.b, x);
    case 'div': return evaluateAST(node.a, x) / evaluateAST(node.b, x);
    case 'pow': return Math.pow(evaluateAST(node.a, x), evaluateAST(node.b, x));
    case 'neg': return -evaluateAST(node.a, x);
    case 'func': {
      const v = evaluateAST(node.arg, x);
      switch (node.name) {
        case 'sin': return Math.sin(v);
        case 'cos': return Math.cos(v);
        case 'tan': return Math.tan(v);
        case 'ln': return Math.log(v);
        case 'log': return Math.log10(v);
        case 'sqrt': return Math.sqrt(v);
        case 'exp': return Math.exp(v);
      }
    }
  }
}

const NUM0: ASTNode = { kind: 'num', value: 0 };
const NUM1: ASTNode = { kind: 'num', value: 1 };

function differentiateAST(node: ASTNode): ASTNode {
  switch (node.kind) {
    case 'num': return NUM0;
    case 'const': return NUM0;
    case 'var': return NUM1;
    case 'neg': return { kind: 'neg', a: differentiateAST(node.a) };
    case 'add': return { kind: 'add', a: differentiateAST(node.a), b: differentiateAST(node.b) };
    case 'sub': return { kind: 'sub', a: differentiateAST(node.a), b: differentiateAST(node.b) };
    case 'mul':
      return {
        kind: 'add',
        a: { kind: 'mul', a: differentiateAST(node.a), b: node.b },
        b: { kind: 'mul', a: node.a, b: differentiateAST(node.b) },
      };
    case 'div':
      return {
        kind: 'div',
        a: {
          kind: 'sub',
          a: { kind: 'mul', a: differentiateAST(node.a), b: node.b },
          b: { kind: 'mul', a: node.a, b: differentiateAST(node.b) },
        },
        b: { kind: 'pow', a: node.b, b: { kind: 'num', value: 2 } },
      };
    case 'pow': {
      const { a, b } = node;
      const da = differentiateAST(a);
      const db = differentiateAST(b);
      // d/dx e^u = e^u * u'
      if (a.kind === 'const' && a.name === 'e') {
        return { kind: 'mul', a: node, b: db };
      }
      // constant exponent: power rule with chain rule, d/dx a^n = n*a^(n-1)*a'
      if (b.kind === 'num') {
        const newExp: ASTNode = { kind: 'num', value: b.value - 1 };
        return {
          kind: 'mul',
          a: { kind: 'mul', a: b, b: { kind: 'pow', a, b: newExp } },
          b: da,
        };
      }
      // general case a^b = e^(b ln a): derivative = a^b * (b' ln a + b a'/a)
      return {
        kind: 'mul',
        a: node,
        b: {
          kind: 'add',
          a: { kind: 'mul', a: db, b: { kind: 'func', name: 'ln', arg: a } },
          b: { kind: 'div', a: { kind: 'mul', a: b, b: da }, b: a },
        },
      };
    }
    case 'func': {
      const u = node.arg;
      const du = differentiateAST(u);
      switch (node.name) {
        case 'sin': return { kind: 'mul', a: { kind: 'func', name: 'cos', arg: u }, b: du };
        case 'cos': return { kind: 'mul', a: { kind: 'neg', a: { kind: 'func', name: 'sin', arg: u } }, b: du };
        case 'tan': return { kind: 'div', a: du, b: { kind: 'pow', a: { kind: 'func', name: 'cos', arg: u }, b: { kind: 'num', value: 2 } } };
        case 'ln': return { kind: 'div', a: du, b: u };
        case 'log': return { kind: 'div', a: du, b: { kind: 'mul', a: u, b: { kind: 'num', value: Math.LN10 } } };
        case 'sqrt': return { kind: 'div', a: du, b: { kind: 'mul', a: { kind: 'num', value: 2 }, b: node } };
        case 'exp': return { kind: 'mul', a: node, b: du };
      }
    }
  }
}

function isNum(n: ASTNode): n is { kind: 'num'; value: number } {
  return n.kind === 'num';
}
const isZero = (n: ASTNode) => isNum(n) && n.value === 0;
const isOne = (n: ASTNode) => isNum(n) && n.value === 1;

/* -------------------------------------------------------------------------
 * Coefficient flattening helpers.
 *
 * Product/quotient/power rule expansions naturally produce chains like
 * mul(3, mul(2, x)) or neg(mul(neg(a), b)) that are each individually
 * "simplified" but never get combined into a single 6*x or a*b. These two
 * helpers pull every numeric factor (including ones hiding behind `neg`)
 * out of a mul/neg chain into one coefficient, so the derivative collapses
 * to a canonical "coefficient * remaining expression" form instead of
 * leaving nested, unmerged constants in the output.
 * ---------------------------------------------------------------------- */
function collectCoeff(n: ASTNode): { coeff: number; rest: ASTNode | null } {
  if (n.kind === 'num') return { coeff: n.value, rest: null };
  if (n.kind === 'neg') {
    const inner = collectCoeff(n.a);
    return { coeff: -inner.coeff, rest: inner.rest };
  }
  if (n.kind === 'mul') {
    const l = collectCoeff(n.a);
    const r = collectCoeff(n.b);
    const coeff = l.coeff * r.coeff;
    const rest = l.rest && r.rest ? { kind: 'mul' as const, a: l.rest, b: r.rest } : (l.rest ?? r.rest ?? null);
    return { coeff, rest };
  }
  return { coeff: 1, rest: n };
}

function buildFromCoeff(coeff: number, rest: ASTNode | null): ASTNode {
  if (rest === null) return { kind: 'num', value: coeff };
  if (coeff === 0) return { kind: 'num', value: 0 };
  if (coeff === 1) return rest;
  if (coeff === -1) return { kind: 'neg', a: rest };
  if (coeff < 0) return { kind: 'neg', a: { kind: 'mul', a: { kind: 'num', value: -coeff }, b: rest } };
  return { kind: 'mul', a: { kind: 'num', value: coeff }, b: rest };
}

function simplifyAST(node: ASTNode): ASTNode {
  switch (node.kind) {
    case 'num': case 'var': case 'const':
      return node;
    case 'neg': {
      const a = simplifyAST(node.a);
      const { coeff, rest } = collectCoeff({ kind: 'neg', a });
      return buildFromCoeff(coeff, rest);
    }
    case 'add': {
      const a = simplifyAST(node.a), b = simplifyAST(node.b);
      if (isZero(a)) return b;
      if (isZero(b)) return a;
      if (isNum(a) && isNum(b)) return { kind: 'num', value: a.value + b.value };
      // a + (-b) reads better as a - b
      if (b.kind === 'neg') return simplifyAST({ kind: 'sub', a, b: b.a });
      if (a.kind === 'neg') return simplifyAST({ kind: 'sub', a: b, b: a.a });
      return { kind: 'add', a, b };
    }
    case 'sub': {
      const a = simplifyAST(node.a), b = simplifyAST(node.b);
      if (isZero(b)) return a;
      if (isZero(a)) return simplifyAST({ kind: 'neg', a: b });
      if (isNum(a) && isNum(b)) return { kind: 'num', value: a.value - b.value };
      // a - (-b) reads better as a + b
      if (b.kind === 'neg') return simplifyAST({ kind: 'add', a, b: b.a });
      return { kind: 'sub', a, b };
    }
    case 'mul': {
      const a = simplifyAST(node.a), b = simplifyAST(node.b);
      if (isZero(a) || isZero(b)) return { kind: 'num', value: 0 };
      // Flatten nested constant factors (e.g. 3 * (2 * x)) into one coefficient
      // instead of leaving them as unmerged, awkwardly-parenthesized products.
      const { coeff, rest } = collectCoeff({ kind: 'mul', a, b });
      return buildFromCoeff(coeff, rest);
    }
    case 'div': {
      const a = simplifyAST(node.a), b = simplifyAST(node.b);
      if (isZero(a)) return { kind: 'num', value: 0 };
      if (isOne(b)) return a;
      if (isNum(a) && isNum(b) && b.value !== 0) return { kind: 'num', value: a.value / b.value };
      // Reduce a numeric denominator into the numerator's coefficient, e.g. (6*x)/2 -> 3*x
      if (isNum(b) && b.value !== 0) {
        const { coeff, rest } = collectCoeff(a);
        return buildFromCoeff(coeff / b.value, rest);
      }
      return { kind: 'div', a, b };
    }
    case 'pow': {
      const a = simplifyAST(node.a), b = simplifyAST(node.b);
      if (isZero(b)) return { kind: 'num', value: 1 };
      if (isOne(b)) return a;
      if (isNum(a) && isNum(b)) return { kind: 'num', value: Math.pow(a.value, b.value) };
      return { kind: 'pow', a, b };
    }
    case 'func': {
      const arg = simplifyAST(node.arg);
      return { kind: 'func', name: node.name, arg };
    }
  }
}

function precedence(node: ASTNode): number {
  switch (node.kind) {
    case 'add': case 'sub': return 1;
    case 'mul': case 'div': return 2;
    case 'neg': return 3;
    case 'pow': return 4;
    default: return 5;
  }
}

function astToString(node: ASTNode, parentPrec = 0): string {
  const wrap = (s: string) => (precedence(node) < parentPrec ? `(${s})` : s);
  switch (node.kind) {
    case 'num': {
      const rounded = Math.round(node.value * 1e10) / 1e10;
      return wrap(`${rounded}`);
    }
    case 'var': return 'x';
    case 'const': return node.name === 'pi' ? 'π' : 'e';
    case 'neg': return wrap(`-${astToString(node.a, 3)}`);
    case 'add': return wrap(`${astToString(node.a, 1)} + ${astToString(node.b, 2)}`);
    case 'sub': return wrap(`${astToString(node.a, 1)} - ${astToString(node.b, 2)}`);
    case 'mul': {
      const aStr = astToString(node.a, 2);
      const bStr = astToString(node.b, 3);
      // omit the * between a numeric coefficient and the term right after it, e.g. "3x" not "3*x"
      const sep = node.a.kind === 'num' && /^[a-zA-Zπ(]/.test(bStr) ? '' : '*';
      return wrap(`${aStr}${sep}${bStr}`);
    }
    case 'div': return wrap(`${astToString(node.a, 2)}/${astToString(node.b, 3)}`);
    case 'pow': return wrap(`${astToString(node.a, 5)}^${astToString(node.b, 4)}`);
    case 'func': return `${node.name}(${astToString(node.arg, 0)})`;
  }
}

/* ================================ Component ============================= */

const CriticalPointCalculator: React.FC = () => {
  const [functionStr, setFunctionStr] = useState('x^3 - 3x^2 + 2');
  const [startPoint, setStartPoint] = useState('-2');
  const [endPoint, setEndPoint] = useState('3');
  const [result, setResult] = useState<CriticalPointResult | null>(null);
  const [error, setError] = useState<string>('');
  const [showCaretHint, setShowCaretHint] = useState(false);

  const fxInputRef = useRef<HTMLInputElement>(null);

  const updateCaretHint = (input: HTMLInputElement) => {
    const pos = input.selectionStart ?? input.value.length;
    const before = input.value[pos - 1];
    const after = input.value[pos];
    const justTypedX = before === 'x' && (!after || !/[\^0-9]/.test(after));
    setShowCaretHint(justTypedX);
  };

  const insertAtCursor = (text: string) => {
    const input = fxInputRef.current;
    if (!input) {
      setFunctionStr((prev) => prev + text);
      return;
    }
    const start = input.selectionStart ?? functionStr.length;
    const end = input.selectionEnd ?? functionStr.length;
    const newValue = functionStr.slice(0, start) + text + functionStr.slice(end);
    setFunctionStr(newValue);
    setShowCaretHint(false);
    requestAnimationFrame(() => {
      input.focus();
      const pos = start + text.length;
      input.setSelectionRange(pos, pos);
    });
  };

  const handleFxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFunctionStr(e.target.value);
    updateCaretHint(e.target);
  };

  const handleClear = () => {
    setFunctionStr('');
    setStartPoint('');
    setEndPoint('');
    setResult(null);
    setError('');
    setShowCaretHint(false);
  };

  const findCriticalPoints = () => {
    try {
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

      // Parse f(x) into an exact symbolic expression, then differentiate it
      // exactly — this is what makes the derivative (and every root found
      // from it) accurate, instead of guessed from the input text.
      const ast = parseMathExpression(functionStr);
      const f = (val: number) => evaluateAST(ast, val);
      const dAst = simplifyAST(differentiateAST(ast));
      const fPrime = (val: number) => evaluateAST(dAst, val);
      const derivativeExpr = astToString(dAst);

      const steps: string[] = [];
      const criticalPoints: { x: number; y: number; type: 'critical' | 'stationary' | 'singular' | 'endpoint'; reason: string }[] = [];

      const numPoints = 1000;
      const step = (b - a) / numPoints;

      steps.push(`📐 Finding critical points of f(x) = ${functionStr}`);
      steps.push(`   f'(x) = ${derivativeExpr}`);
      steps.push(`   Interval: [${a}, ${b}]`);
      steps.push('');

      // Endpoints
      const fA = f(a);
      const fB = f(b);
      if (isFinite(fA)) {
        criticalPoints.push({ x: a, y: fA, type: 'endpoint', reason: 'Left endpoint' });
        steps.push(`✅ Left endpoint: (${a.toFixed(4)}, ${fA.toFixed(4)})`);
      }
      if (isFinite(fB)) {
        criticalPoints.push({ x: b, y: fB, type: 'endpoint', reason: 'Right endpoint' });
        steps.push(`✅ Right endpoint: (${b.toFixed(4)}, ${fB.toFixed(4)})`);
      }

      // Stationary points: roots of the exact derivative, found by scanning
      // for sign changes and refining with bisection.
      steps.push('');
      steps.push("🔍 Searching for stationary points (f'(x) = 0)...");

      const derivativeRoots: number[] = [];
      let prevDeriv = fPrime(a);
      if (isFinite(prevDeriv) && prevDeriv === 0 && isFinite(f(a))) {
        derivativeRoots.push(a);
      }
      for (let i = 1; i <= numPoints; i++) {
        const x = a + i * step;
        const currentDeriv = fPrime(x);

        if (isFinite(currentDeriv) && currentDeriv === 0) {
          // The root lands exactly on this scan point (common with round
          // interval/step combinations, e.g. x = 0). prevDeriv * currentDeriv
          // would be exactly 0 here too, which never satisfies "< 0", so this
          // has to be caught as its own case or it's silently skipped.
          if (isFinite(f(x))) derivativeRoots.push(x);
        } else if (isFinite(prevDeriv) && isFinite(currentDeriv) && prevDeriv * currentDeriv < 0) {
          let left = x - step;
          let right = x;

          for (let iter = 0; iter < 40; iter++) {
            const mid = (left + right) / 2;
            const midDeriv = fPrime(mid);
            const leftDeriv = fPrime(left);
            if (!isFinite(midDeriv) || !isFinite(leftDeriv)) break;
            if (leftDeriv * midDeriv < 0) {
              right = mid;
            } else {
              left = mid;
            }
          }

          const root = (left + right) / 2;
          if (isFinite(root) && isFinite(f(root))) {
            derivativeRoots.push(root);
          }
        }
        prevDeriv = currentDeriv;
      }

      const tolerance = 1e-6;
      derivativeRoots.sort((x, y) => x - y);
      const uniqueRoots: number[] = [];
      for (const root of derivativeRoots) {
        if (root > a && root < b) {
          const isDuplicate = uniqueRoots.some((existing) => Math.abs(root - existing) < tolerance);
          if (!isDuplicate) uniqueRoots.push(root);
        }
      }

      if (uniqueRoots.length > 0) {
        steps.push(`   Found ${uniqueRoots.length} stationary point(s):`);
        for (const root of uniqueRoots) {
          const fRoot = f(root);
          if (isFinite(fRoot)) {
            criticalPoints.push({
              x: root,
              y: fRoot,
              type: 'stationary',
              reason: `f'(${root.toFixed(4)}) = 0`,
            });
            steps.push(`   ✅ (${root.toFixed(4)}, ${fRoot.toFixed(4)})`);
          }
        }
      } else {
        steps.push('   No stationary points found in the interval');
      }

      // Singular points: places where f(x) exists but f'(x) does not
      // (e.g. sqrt(x) or ln(x) at x = 0, 1/x at x = 0).
      steps.push('');
      steps.push("🔍 Checking for singular points (where f'(x) does not exist)...");

      const finePoints = 2000;
      const fineStep = (b - a) / finePoints;
      let singularFound = false;
      for (let i = 1; i < finePoints; i++) {
        const x = a + i * fineStep;
        let fX: number;
        let dX: number;
        try {
          fX = f(x);
          dX = fPrime(x);
        } catch {
          continue;
        }
        if (isFinite(fX) && !isFinite(dX)) {
          const isDuplicate = criticalPoints.some((cp) => Math.abs(cp.x - x) < tolerance);
          if (!isDuplicate) {
            criticalPoints.push({
              x,
              y: fX,
              type: 'singular',
              reason: `f'(${x.toFixed(4)}) is undefined`,
            });
            steps.push(`   ⚠️ (${x.toFixed(4)}, ${fX.toFixed(4)}) - derivative undefined`);
            singularFound = true;
          }
        }
      }
      if (!singularFound) {
        steps.push('   No singular points found in the interval');
      }

      criticalPoints.sort((x, y) => x.x - y.x);

      let message = `Found ${criticalPoints.length} critical point(s)`;
      const stationaryCount = criticalPoints.filter((p) => p.type === 'stationary').length;
      const singularCount = criticalPoints.filter((p) => p.type === 'singular').length;
      const endpointCount = criticalPoints.filter((p) => p.type === 'endpoint').length;

      const details: string[] = [];
      if (stationaryCount > 0) details.push(`${stationaryCount} stationary`);
      if (singularCount > 0) details.push(`${singularCount} singular`);
      if (endpointCount > 0) details.push(`${endpointCount} endpoints`);
      if (details.length > 0) message += ` (${details.join(', ')})`;

      steps.push('');
      steps.push(`📊 Summary: ${message}`);

      setResult({ criticalPoints, derivative: derivativeExpr, steps, message });
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid function or interval. Please check your input.');
      setResult(null);
    }
  };

  const getCriticalPointTypeColor = (type: string): string => {
    switch (type) {
      case 'stationary':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'singular':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'endpoint':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getCriticalPointTypeLabel = (type: string): string => {
    switch (type) {
      case 'stationary':
        return 'Stationary Point';
      case 'singular':
        return 'Singular Point';
      case 'endpoint':
        return 'Endpoint';
      default:
        return 'Critical Point';
    }
  };

  const insertButtons: { label: string; insert: string }[] = [
    { label: '^', insert: '^' },
    { label: 'x²', insert: 'x^2' },
    { label: 'x³', insert: 'x^3' },
    { label: 'π', insert: 'pi' },
    { label: 'sin(', insert: 'sin(' },
    { label: 'cos(', insert: 'cos(' },
    { label: 'tan(', insert: 'tan(' },
    { label: 'ln(', insert: 'ln(' },
    { label: 'sqrt(', insert: 'sqrt(' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <p className="font-medium">Critical Point Information:</p>
          <ul className="text-xs list-disc list-inside mt-1">
            <li>Points where f'(x) = 0 or f'(x) does not exist</li>
            <li>Includes endpoints of the interval</li>
            <li>Types: Stationary (horizontal tangent), Singular (corner/cusp), Endpoint</li>
            <li>Used for optimization and curve sketching</li>
            <li>f'(x) is computed exactly (symbolically), not approximated</li>
            <li>Supports: x, +, -, *, /, ^, sin, cos, tan, ln, log, sqrt, exp, pi, e</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">f(x)</label>
          <input
            ref={fxInputRef}
            type="text"
            value={functionStr}
            onChange={handleFxChange}
            onSelect={(e) => updateCaretHint(e.currentTarget)}
            onBlur={() => setShowCaretHint(false)}
            placeholder="e.g., x^3 - 3x^2 + 2"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
          {showCaretHint && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => insertAtCursor('^')}
              className="absolute right-1 top-full mt-1 z-10 text-xs bg-[#1F2329] text-[#B6FF2E] px-2 py-1 rounded shadow hover:bg-[#282E37] transition"
            >
              Insert ^ for exponent
            </button>
          )}
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
            placeholder="e.g., 3"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition font-mono"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs text-slate-500" htmlFor="insert-into-fx">Insert into f(x):</label>
        <select
          id="insert-into-fx"
          value=""
          onChange={(e) => {
            const val = e.target.value;
            if (val) insertAtCursor(val);
          }}
          className="text-xs font-mono px-2 py-1.5 border border-slate-300 rounded bg-white hover:bg-slate-50 focus:ring-2 focus:ring-[#1F2329] focus:border-transparent transition"
        >
          <option value="" disabled>Choose symbol / function…</option>
          {insertButtons.map((btn) => (
            <option key={btn.label} value={btn.insert}>
              {btn.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={findCriticalPoints}
          className="flex-1 bg-[#1F2329] text-[#B6FF2E] py-3 rounded-lg font-medium hover:bg-[#282E37] transition shadow-md flex items-center justify-center gap-2"
        >
          <Target className="w-5 h-5" />
          Find Critical Points
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition shadow-md flex items-center justify-center gap-2"
        >
          <X className="w-5 h-5" />
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
                  <div className="text-lg font-semibold text-green-700">
                    ✅ Critical Points Found
                  </div>
                  <div className="text-sm text-gray-500">
                    {result.message}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500">Derivative:</div>
                  <div className="font-mono text-sm">f'(x) = {result.derivative}</div>
                </div>
              </div>

              {result.criticalPoints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {result.criticalPoints.map((cp, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getCriticalPointTypeColor(cp.type)}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-medium text-gray-500">
                            {getCriticalPointTypeLabel(cp.type)}
                          </div>
                          <div className="font-mono text-sm font-semibold mt-1">
                            ({cp.x.toFixed(4)}, {cp.y.toFixed(4)})
                          </div>
                          <div className="text-xs mt-1 opacity-75">
                            {cp.reason}
                          </div>
                        </div>
                        {cp.type === 'stationary' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            f' = 0
                          </div>
                        )}
                        {cp.type === 'singular' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            f' DNE
                          </div>
                        )}
                        {cp.type === 'endpoint' && (
                          <div className="text-xs bg-white/50 px-2 py-1 rounded">
                            boundary
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-600">
                  No critical points found in the interval [{startPoint}, {endPoint}]
                </div>
              )}

              <details>
                <summary className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-800">
                  Show Detailed Steps
                </summary>
                <div className="mt-2 space-y-1 font-mono text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {result.steps.map((step, index) => (
                    <div key={index} className="py-0.5">
                      {step}
                    </div>
                  ))}
                </div>
              </details>

              <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600">
                  <span className="font-medium">💡 Note:</span> f'(x) is derived exactly (symbolically) from f(x), so
                  root-finding runs on the true derivative rather than an approximation. Reported (x, y) values are
                  still numerical approximations from bisection, accurate to about 1e-10.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CriticalPointCalculator;