// AlgebraSolver.ts - Fixed Implementation
// All solvers now correctly handle their designated problem classes

import { create, all, Fraction, type Complex } from 'mathjs';

// Initialize mathjs with exact arithmetic
const math = create(all, {
  number: 'Fraction',
  precision: 64
});

// Standard floating-point math instance for numeric fallback and approximations
const mathFloat = create(all, {
  number: 'number'
});

// ─────────────────────────────────────────────────────────────────
//  TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────

export type SolverMode =
  | "simplify"
  | "linear"
  | "quadratic"
  | "inequality"
  | "quadratic-inequality"
  | "abs-value"
  | "abs-equation"
  | "abs-inequality";

export interface SolutionStep {
  step: string;
  explanation: string;
}

export interface SolverResult {
  result: string;
  steps: SolutionStep[];
  verified?: string;
}

export type ProblemType = 
  | 'simplify'
  | 'linear-equation'
  | 'quadratic-equation'
  | 'linear-inequality'
  | 'quadratic-inequality'
  | 'absolute-value'
  | 'absolute-equation'
  | 'absolute-inequality'
  | 'evaluation'
  | 'unknown';

export interface ParsedExpression {
  type: ProblemType;
  left?: string;
  right?: string;
  operator?: string;
  variable: string;
  hasAbsoluteValue: boolean;
  absoluteInner?: string;
  absoluteCount: number;
  absoluteExpressions: string[];
  original: string;
  normalized?: string;
}

// ─────────────────────────────────────────────────────────────────
//  AST NODE TYPES FOR RELIABLE PARSING
// ─────────────────────────────────────────────────────────────────

interface ASTNode {
  type?: string;
  toString(): string;
  evaluate(context?: Record<string, any>): any;
  simplify(): ASTNode;
  collectTerms(): Term[];
  hasVariable(): boolean;
  getVariables(): string[];
  getDegree(varName: string): number;
}

interface Term {
  coefficient: any;
  variable: string;
  degree: number;
}

class NumberNode implements ASTNode {
  constructor(public value: any) {}

  toString(): string {
    if (this.value instanceof Fraction) {
      const sign = Number(this.value.s) < 0 ? '-' : '';
      if (Number(this.value.d) === 1) return `${sign}${this.value.n}`;
      return `${sign}${this.value.n}/${this.value.d}`;
    }
    if (typeof this.value === 'number' && !Number.isInteger(this.value)) {
      return this.value.toString();
    }
    return String(this.value);
  }

  evaluate(context?: Record<string, any>): any {
    return this.value;
  }

  simplify(): ASTNode {
    return this;
  }

  collectTerms(): Term[] {
    return [{ coefficient: this.value, variable: '', degree: 0 }];
  }

  hasVariable(): boolean {
    return false;
  }

  getVariables(): string[] {
    return [];
  }

  getDegree(varName: string): number {
    return 0;
  }
}

class VariableNode implements ASTNode {
  constructor(public name: string) {}

  toString(): string {
    return this.name;
  }

  evaluate(context?: Record<string, any>): any {
    if (context && context[this.name] !== undefined) {
      return context[this.name];
    }
    return this.name;
  }

  simplify(): ASTNode {
    return this;
  }

  collectTerms(): Term[] {
    return [{ coefficient: 1, variable: this.name, degree: 1 }];
  }

  hasVariable(): boolean {
    return true;
  }

  getVariables(): string[] {
    return [this.name];
  }

  getDegree(varName: string): number {
    return this.name === varName ? 1 : 0;
  }
}

class PowerNode implements ASTNode {
  constructor(public base: ASTNode, public exponent: ASTNode) {}

  toString(): string {
    const baseStr = this.base.toString();
    const expStr = this.exponent.toString();
    if (expStr === '2') return `${baseStr}²`;
    if (expStr === '3') return `${baseStr}³`;
    return `${baseStr}^${expStr}`;
  }

  evaluate(context?: Record<string, any>): any {
    const baseVal = this.base.evaluate(context);
    const expVal = this.exponent.evaluate(context);
    return math.pow(baseVal, expVal);
  }

  simplify(): ASTNode {
    const simplifiedBase = this.base.simplify();
    const simplifiedExp = this.exponent.simplify();
    
    // If exponent is 0, result is 1
    if (simplifiedExp instanceof NumberNode && 
        (simplifiedExp.value === 0 || simplifiedExp.value === '0')) {
      return new NumberNode(1);
    }
    
    // If exponent is 1, result is base
    if (simplifiedExp instanceof NumberNode && 
        (simplifiedExp.value === 1 || simplifiedExp.value === '1')) {
      return simplifiedBase;
    }
    
    // If base is a number and exponent is a number, evaluate
    if (simplifiedBase instanceof NumberNode && simplifiedExp instanceof NumberNode) {
      const baseVal = simplifiedBase.value;
      const expVal = simplifiedExp.value;
      
      if (typeof baseVal === 'number' && typeof expVal === 'number') {
        return new NumberNode(Math.pow(baseVal, expVal));
      }
      if (baseVal instanceof Fraction && expVal instanceof Fraction) {
        if (Number(expVal.d) === 1) {
          const n = Number(expVal.n);
          if (n >= 0 && Number.isInteger(n)) {
            const result = math.pow(baseVal, n);
            return new NumberNode(result);
          }
        }
      }
    }
    
    // Check for (x^a)^b = x^(a*b)
    if (simplifiedBase instanceof PowerNode) {
      const innerExp = simplifiedBase.exponent;
      if (innerExp instanceof NumberNode && simplifiedExp instanceof NumberNode) {
        const newExp = this.multiplyValues(innerExp.value, simplifiedExp.value);
        if (newExp !== null) {
          return new PowerNode(simplifiedBase.base, new NumberNode(newExp));
        }
      }
    }
    
    return new PowerNode(simplifiedBase, simplifiedExp);
  }

  private multiplyValues(a: any, b: any): any {
    try {
      return math.multiply(a, b);
    } catch {
      return null;
    }
  }

  collectTerms(): Term[] {
    if (this.base instanceof VariableNode) {
      let degree = 1;
      if (this.exponent instanceof NumberNode) {
        const val = this.exponent.value;
        if (typeof val === 'number') {
          degree = val;
        } else if (val instanceof Fraction && Number(val.d) === 1) {
          degree = (Number(val.s) < 0 ? -1 : 1) * Number(val.n);
        }
      }
      return [{ coefficient: 1, variable: this.base.name, degree: degree }];
    }
    if (this.base instanceof NumberNode && this.exponent instanceof NumberNode) {
      try {
        const val = math.pow(this.base.value, this.exponent.value);
        return [{ coefficient: val, variable: '', degree: 0 }];
      } catch {
        return [];
      }
    }
    // Handle compound expressions raised to an integer power like (x + 5)^2
    let expInt = 1;
    if (this.exponent instanceof NumberNode) {
      const val = this.exponent.value;
      if (typeof val === 'number') expInt = Math.floor(val);
      else if (val instanceof Fraction && Number(val.d) === 1) expInt = (Number(val.s) < 0 ? -1 : 1) * Number(val.n);
    }
    if (expInt === 0) {
      return [{ coefficient: 1, variable: '', degree: 0 }];
    }
    if (expInt === 1) {
      return this.base.collectTerms();
    }
    if (expInt >= 2 && expInt <= 10) {
      const baseTerms = this.base.collectTerms();
      let current = baseTerms;
      for (let i = 1; i < expInt; i++) {
        const multiplied: Term[] = [];
        for (const lt of current) {
          for (const rt of baseTerms) {
            const coeff = math.multiply(lt.coefficient, rt.coefficient);
            const variable = lt.variable || rt.variable;
            const degree = (lt.degree || 0) + (rt.degree || 0);
            multiplied.push({ coefficient: coeff, variable, degree });
          }
        }
        const combined: Record<string, Term> = {};
        for (const term of multiplied) {
          const key = term.variable + ':' + term.degree;
          if (combined[key]) {
            combined[key].coefficient = math.add(combined[key].coefficient, term.coefficient);
          } else {
            combined[key] = { ...term };
          }
        }
        current = Object.values(combined);
      }
      return current;
    }
    return [];
  }

  hasVariable(): boolean {
    return this.base.hasVariable() || this.exponent.hasVariable();
  }

  getVariables(): string[] {
    const vars = this.base.getVariables();
    vars.push(...this.exponent.getVariables());
    return [...new Set(vars)];
  }

  getDegree(varName: string): number {
    const terms = this.collectTerms();
    let maxDegree = 0;
    for (const term of terms) {
      if (term.variable === varName && term.degree > maxDegree) {
        maxDegree = term.degree;
      }
    }
    return maxDegree;
  }
}

class BinaryOpNode implements ASTNode {
  constructor(
    public left: ASTNode,
    public right: ASTNode,
    public operator: string
  ) {}

  toString(): string {
    const leftStr = this.left.toString();
    const rightStr = this.right.toString();
    if (this.operator === '*') {
      // Remove unnecessary multiplication symbols for readability
      if (/^[a-zA-Z]/.test(rightStr) && /[0-9]$/.test(leftStr)) {
        return leftStr + rightStr;
      }
      if (/^[a-zA-Z]/.test(leftStr) && /^[a-zA-Z]/.test(rightStr)) {
        return leftStr + rightStr;
      }
    }
    return `${leftStr} ${this.operator} ${rightStr}`;
  }

  evaluate(context?: Record<string, any>): any {
    const leftVal = this.left.evaluate(context);
    const rightVal = this.right.evaluate(context);
    
    switch (this.operator) {
      case '+': return math.add(leftVal, rightVal);
      case '-': return math.subtract(leftVal, rightVal);
      case '*': return math.multiply(leftVal, rightVal);
      case '/': return math.divide(leftVal, rightVal);
      default: throw new Error(`Unknown operator: ${this.operator}`);
    }
  }

  simplify(): ASTNode {
    const left = this.left.simplify();
    const right = this.right.simplify();
    
    // Handle addition
    if (this.operator === '+') {
      // x + 0 = x
      if (right instanceof NumberNode && this.isZero(right.value)) return left;
      if (left instanceof NumberNode && this.isZero(left.value)) return right;
      
      // Combine like terms
      const leftTerms = left.collectTerms();
      const rightTerms = right.collectTerms();
      
      // If both are number nodes, combine
      if (left instanceof NumberNode && right instanceof NumberNode) {
        return new NumberNode(math.add(left.value, right.value));
      }
      
      // Combine like terms
      const combined = this.combineLikeTerms(leftTerms, rightTerms, '+');
      if (combined.length === 1) {
        return this.termToNode(combined[0]);
      }
      
      // Keep as addition
      return new BinaryOpNode(left, right, '+');
    }
    
    // Handle subtraction
    if (this.operator === '-') {
      // x - 0 = x
      if (right instanceof NumberNode && this.isZero(right.value)) return left;
      // 0 - x = -x
      if (left instanceof NumberNode && this.isZero(left.value)) {
        return new BinaryOpNode(new NumberNode(0), right, '-');
      }
      
      // If both are number nodes, combine
      if (left instanceof NumberNode && right instanceof NumberNode) {
        return new NumberNode(math.subtract(left.value, right.value));
      }
      
      // Combine like terms
      const leftTerms = left.collectTerms();
      const rightTerms = right.collectTerms();
      const combined = this.combineLikeTerms(leftTerms, rightTerms, '-');
      if (combined.length === 1) {
        return this.termToNode(combined[0]);
      }
      
      return new BinaryOpNode(left, right, '-');
    }
    
    // Handle multiplication
    if (this.operator === '*') {
      // x * 1 = x
      if (right instanceof NumberNode && this.isOne(right.value)) return left;
      if (left instanceof NumberNode && this.isOne(left.value)) return right;
      
      // x * 0 = 0
      if (right instanceof NumberNode && this.isZero(right.value)) return new NumberNode(0);
      if (left instanceof NumberNode && this.isZero(left.value)) return new NumberNode(0);
      
      // If both are number nodes, combine
      if (left instanceof NumberNode && right instanceof NumberNode) {
        return new NumberNode(math.multiply(left.value, right.value));
      }
      
      // Combine coefficients
      if (left instanceof NumberNode && right.hasVariable()) {
        const coeff = left.value;
        return new BinaryOpNode(new NumberNode(coeff), right, '*');
      }
      if (right instanceof NumberNode && left.hasVariable()) {
        const coeff = right.value;
        return new BinaryOpNode(new NumberNode(coeff), left, '*');
      }
      
      return new BinaryOpNode(left, right, '*');
    }
    
    // Handle division
    if (this.operator === '/') {
      // x / 1 = x
      if (right instanceof NumberNode && this.isOne(right.value)) return left;
      
      // 0 / x = 0 (x ≠ 0)
      if (left instanceof NumberNode && this.isZero(left.value)) return new NumberNode(0);
      
      // If both are number nodes, combine
      if (left instanceof NumberNode && right instanceof NumberNode) {
        return new NumberNode(math.divide(left.value, right.value));
      }
      
      return new BinaryOpNode(left, right, '/');
    }
    
    return new BinaryOpNode(left, right, this.operator);
  }

  private isZero(value: any): boolean {
    if (typeof value === 'number') return Math.abs(value) < 1e-10;
    if (value instanceof Fraction) return Number(value.n) === 0;
    return value === 0 || value === '0';
  }

  private isOne(value: any): boolean {
    if (typeof value === 'number') return Math.abs(value - 1) < 1e-10;
    if (value instanceof Fraction) return Number(value.s) >= 0 && Number(value.n) === Number(value.d) && Number(value.n) !== 0;
    return value === 1 || value === '1';
  }

  private isNegOne(value: any): boolean {
    if (typeof value === 'number') return Math.abs(value + 1) < 1e-10;
    if (value instanceof Fraction) return Number(value.s) < 0 && Number(value.n) === Number(value.d) && Number(value.n) !== 0;
    return value === -1 || value === '-1';
  }

  // Reconstruct a single collected Term back into an ASTNode, preserving its
  // exponent (degree). This is the piece that must never collapse a
  // degree-2 (or higher) term into a plain VariableNode - doing so silently
  // loses the power information and corrupts downstream coefficient
  // extraction (e.g. for quadratics).
  private termToNode(term: Term): ASTNode {
    if (term.variable === '' || term.degree === 0) {
      return new NumberNode(term.coefficient);
    }

    const base: ASTNode = term.degree === 1
      ? new VariableNode(term.variable)
      : new PowerNode(new VariableNode(term.variable), new NumberNode(term.degree));

    if (this.isOne(term.coefficient)) {
      return base;
    }
    if (this.isNegOne(term.coefficient)) {
      return new BinaryOpNode(new NumberNode(0), base, '-');
    }
    return new BinaryOpNode(new NumberNode(term.coefficient), base, '*');
  }

  private combineLikeTerms(
    left: Term[],
    right: Term[],
    operator: string
  ): Term[] {
    const allTerms = [...left];
    const rightMultiplier = operator === '-' ? -1 : 1;
    
    for (const term of right) {
      const coeff = math.multiply(term.coefficient, rightMultiplier);
      allTerms.push({ ...term, coefficient: coeff });
    }
    
    const combined: Record<string, Term> = {};
    
    for (const term of allTerms) {
      const key = term.variable + ':' + term.degree;
      if (combined[key]) {
        combined[key].coefficient = math.add(combined[key].coefficient, term.coefficient);
      } else {
        combined[key] = { ...term };
      }
    }
    
    return Object.values(combined).filter(t => {
      if (typeof t.coefficient === 'number') {
        return Math.abs(t.coefficient) > 1e-10;
      }
      if (t.coefficient instanceof Fraction) {
        return Number(t.coefficient.n) !== 0;
      }
      return t.coefficient !== 0;
    });
  }

  collectTerms(): Term[] {
    const leftTerms = this.left.collectTerms();
    const rightTerms = this.right.collectTerms();
    
    if (this.operator === '+') {
      return this.combineLikeTerms(leftTerms, rightTerms, '+');
    }
    
    if (this.operator === '-') {
      return this.combineLikeTerms(leftTerms, rightTerms, '-');
    }
    
    // For multiplication, distribute
    if (this.operator === '*') {
      const result: Term[] = [];
      for (const lt of leftTerms) {
        for (const rt of rightTerms) {
          const coeff = math.multiply(lt.coefficient, rt.coefficient);
          const variable = lt.variable || rt.variable;
          const degree = (lt.degree || 0) + (rt.degree || 0);
          result.push({ coefficient: coeff, variable, degree });
        }
      }
      return this.combineLikeTerms(result, [], '+');
    }

    // For division by a plain constant (e.g. x^2/2, 3x/4), distribute the
    // division across each term's coefficient so fraction coefficients are
    // extracted correctly instead of being dropped.
    if (this.operator === '/') {
      if (rightTerms.length === 1 && rightTerms[0].variable === '') {
        const divisor = rightTerms[0].coefficient;
        return leftTerms.map(t => ({
          coefficient: math.divide(t.coefficient, divisor),
          variable: t.variable,
          degree: t.degree
        }));
      }
      return [];
    }
    
    return [];
  }

  hasVariable(): boolean {
    return this.left.hasVariable() || this.right.hasVariable();
  }

  getVariables(): string[] {
    const vars = this.left.getVariables();
    vars.push(...this.right.getVariables());
    return [...new Set(vars)];
  }

  getDegree(varName: string): number {
    // For a binary operation, we need to find the degree
    // This is a simplified approach - for proper degree extraction,
    // we should use collectTerms and find the max degree
    const terms = this.collectTerms();
    let maxDegree = 0;
    for (const term of terms) {
      if (term.variable === varName && term.degree > maxDegree) {
        maxDegree = term.degree;
      }
    }
    return maxDegree;
  }
}

class AbsNode implements ASTNode {
  constructor(public inner: ASTNode) {}

  toString(): string {
    return `|${this.inner.toString()}|`;
  }

  evaluate(context?: Record<string, any>): any {
    const val = this.inner.evaluate(context);
    return math.abs(val);
  }

  simplify(): ASTNode {
    const simplifiedInner = this.inner.simplify();
    
    // If inner is a number, evaluate absolute value
    if (simplifiedInner instanceof NumberNode) {
      const val = simplifiedInner.value;
      if (typeof val === 'number') {
        return new NumberNode(Math.abs(val));
      }
      if (val instanceof Fraction) {
        return new NumberNode(math.abs(val));
      }
    }
    
    // If inner is negative, return positive
    if (simplifiedInner instanceof BinaryOpNode && simplifiedInner.operator === '-') {
      if (simplifiedInner.left instanceof NumberNode && 
          this.isZero(simplifiedInner.left.value)) {
        return simplifiedInner.right;
      }
    }
    
    return new AbsNode(simplifiedInner);
  }

  private isZero(value: any): boolean {
    if (typeof value === 'number') return Math.abs(value) < 1e-10;
    if (value instanceof Fraction) return Number(value.n) === 0;
    return value === 0 || value === '0';
  }

  collectTerms(): Term[] {
    return this.inner.collectTerms();
  }

  hasVariable(): boolean {
    return this.inner.hasVariable();
  }

  getVariables(): string[] {
    return this.inner.getVariables();
  }

  getDegree(varName: string): number {
    return this.inner.getDegree(varName);
  }
}

// ─────────────────────────────────────────────────────────────────
//  PARSER - Converts strings to AST
// ─────────────────────────────────────────────────────────────────

class Parser {
  private tokens: string[] = [];
  private pos: number = 0;
  private variable: string = 'x';
  
  // Unicode superscript mapping for exponent normalization
  private superscriptMap: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9'
  };

  parse(input: string, variable: string = 'x'): ASTNode {
    this.variable = variable;
    this.tokens = this.tokenize(input);
    this.pos = 0;
    const result = this.parseExpression();
    // Ensure we consumed all tokens
    if (this.pos < this.tokens.length) {
      // Try to parse the remaining tokens as a separate expression
      const remaining = this.tokens.slice(this.pos).join('');
      if (remaining.trim()) {
        // This might be a malformed expression, but we'll try to handle it
        // by creating a binary operation with the result
        const remainingNode = this.parseExpression();
        return new BinaryOpNode(result, remainingNode, '+');
      }
    }
    return result;
  }

  private tokenize(input: string): string[] {
    // Normalize the input
    let s = input
      // Replace unicode superscripts
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (match) => this.superscriptMap[match] || match)
      // Replace power symbols
      .replace(/²/g, '^2')
      .replace(/³/g, '^3')
      .replace(/⁴/g, '^4')
      .replace(/⁵/g, '^5')
      .replace(/⁶/g, '^6')
      .replace(/⁷/g, '^7')
      .replace(/⁸/g, '^8')
      .replace(/⁹/g, '^9')
      // Replace math symbols
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/≤/g, '<=')
      .replace(/≥/g, '>=')
      .replace(/≠/g, '!=')
      .replace(/π/g, 'pi')
      .replace(/√/g, 'sqrt')
      // Handle absolute value - convert | to a token
      .replace(/\|/g, ' | ')
      // Handle implicit multiplication
      .replace(/(\d+)([a-zA-Z])/g, '$1*$2')
      .replace(/(\d+)\(/g, '$1*(')
      .replace(/([a-zA-Z])\(/g, '$1*(')
      .replace(/\)\(/g, ')*(')
      .replace(/\)([a-zA-Z])/g, ')*$1')
      // Handle absolute value with implicit multiplication - but don't insert before closing |
      .replace(/(\d+)\|/g, '$1*|')
      .replace(/([a-zA-Z])\|/g, '$1*|')
      .replace(/\)\|/g, ')*|')
      .replace(/\|\(/g, '|*(');

    // Tokenize
    const tokens: string[] = [];
    let current = '';
    let inNumber = false;
    let inWord = false;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      
      // Handle absolute value as a token
      if (char === '|') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push('|');
        continue;
      }

      // Handle whitespace
      if (char === ' ' || char === '\t') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        continue;
      }

      // Handle numbers
      if (char >= '0' && char <= '9' || char === '.') {
        if (!inNumber && current) {
          tokens.push(current);
          current = '';
        }
        inNumber = true;
        current += char;
        continue;
      }

      // Handle letters (variables and functions)
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        if (!inWord && current) {
          tokens.push(current);
          current = '';
        }
        inWord = true;
        current += char;
        continue;
      }

      // Handle operators and parentheses
      if ('+-*/^()'.includes(char)) {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push(char);
        continue;
      }

      // Handle multi-character operators
      if (char === '<' && i + 1 < s.length && s[i + 1] === '=') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push('<=');
        i++;
        continue;
      }

      if (char === '>' && i + 1 < s.length && s[i + 1] === '=') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push('>=');
        i++;
        continue;
      }

      if (char === '!' && i + 1 < s.length && s[i + 1] === '=') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push('!=');
        i++;
        continue;
      }

      // Handle equality
      if (char === '=') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push('=');
        continue;
      }

      // Handle comparison operators
      if (char === '<' || char === '>') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push(char);
        continue;
      }

      // Any other character
      if (char.match(/[^a-zA-Z0-9.+\-*/^()]/)) {
        if (current) {
          tokens.push(current);
          current = '';
        }
        continue;
      }

      current += char;
    }

    if (current) {
      tokens.push(current);
    }

    return tokens;
  }

  private peek(): string {
    return this.pos < this.tokens.length ? this.tokens[this.pos] : '';
  }

  private next(): string {
    return this.pos < this.tokens.length ? this.tokens[this.pos++] : '';
  }

  private match(expected: string): boolean {
    if (this.peek() === expected) {
      this.next();
      return true;
    }
    return false;
  }

  private parseExpression(): ASTNode {
    let left = this.parseTerm();
    
    while (this.peek() === '+' || this.peek() === '-') {
      const operator = this.next();
      const right = this.parseTerm();
      left = new BinaryOpNode(left, right, operator);
    }
    
    return left;
  }

  private parseTerm(): ASTNode {
    let left = this.parseFactor();
    
    while (this.peek() === '*' || this.peek() === '/') {
      const operator = this.next();
      const right = this.parseFactor();
      left = new BinaryOpNode(left, right, operator);
    }
    
    return left;
  }

  private parseFactor(): ASTNode {
    // Handle unary minus
    if (this.peek() === '-') {
      this.next();
      const factor = this.parseFactor();
      return new BinaryOpNode(new NumberNode(0), factor, '-');
    }
    
    // Handle unary plus
    if (this.peek() === '+') {
      this.next();
      return this.parseFactor();
    }
    
    // Handle parentheses
    if (this.peek() === '(') {
      this.next();
      const expr = this.parseExpression();
      if (this.peek() === ')') {
        this.next();
      }
      if (this.peek() === '^') {
        this.next();
        const exponent = this.parseFactor();
        return new PowerNode(expr, exponent);
      }
      return expr;
    }
    
    // Handle absolute value
    if (this.peek() === '|') {
      this.next();
      const inner = this.parseExpression();
      if (this.peek() === '|') {
        this.next();
      }
      if (this.peek() === '^') {
        this.next();
        const exponent = this.parseFactor();
        return new PowerNode(new AbsNode(inner), exponent);
      }
      return new AbsNode(inner);
    }
    
    // Handle numbers
    const token = this.next();
    
    // Check if it's a number
    if (/^[\d.]+$/.test(token)) {
      const num = parseFloat(token);
      const numNode = new NumberNode(num);

      // A numeric literal can also be raised to a power (e.g. "3^2"). Numbers
      // must support exponentiation the same way variables do, otherwise the
      // exponent tokens are left unconsumed and silently dropped.
      if (this.peek() === '^') {
        this.next();
        const exponent = this.parseFactor();
        return new PowerNode(numNode, exponent);
      }

      return numNode;
    }
    
    // Check if it's a variable
    if (/^[a-zA-Z]$/.test(token) || token === 'x' || token === 'y' || token === 'z') {
      const varNode = new VariableNode(token);
      
      // Check for exponent
      if (this.peek() === '^') {
        this.next();
        const exponent = this.parseFactor();
        return new PowerNode(varNode, exponent);
      }
      
      return varNode;
    }
    
    // Check if it's a function
    if (token === 'sqrt' || token === 'abs') {
      if (this.peek() === '(') {
        this.next();
        const arg = this.parseExpression();
        if (this.peek() === ')') {
          this.next();
        }
        
        if (token === 'abs') {
          return new AbsNode(arg);
        }
        
        // For sqrt, handle as power
        const sqrtNode = new PowerNode(arg, new NumberNode(0.5));
        return sqrtNode;
      }
    }
    
    // Handle implicit multiplication: number followed by variable
    if (/^[\d.]+$/.test(token) && /^[a-zA-Z]$/.test(this.peek())) {
      const numNode = new NumberNode(parseFloat(token));
      const varNode = new VariableNode(this.next());
      return new BinaryOpNode(numNode, varNode, '*');
    }
    
    // Handle pi
    if (token === 'pi') {
      return new NumberNode(Math.PI);
    }
    
    return new NumberNode(0);
  }
}

// ─────────────────────────────────────────────────────────────────
//  MAIN SOLVER CLASS
// ─────────────────────────────────────────────────────────────────

export class AlgebraSolver {
  private variable: string = 'x';
  private steps: SolutionStep[] = [];
  private domainRestrictions: string[] = [];
  private parser: Parser;
  private originalInput: string = '';

  constructor() {
    this.parser = new Parser();
  }

  // ──────────────────────────────────────────────────────────────
  //  PUBLIC API
  // ──────────────────────────────────────────────────────────────

  public solve(input: string): SolverResult {
    this.steps = [];
    this.domainRestrictions = [];
    this.originalInput = input;
    
    try {
      // Step 1: Normalize input
      const normalized = this.normalize(input);
      this.addStep('Normalized Input', `"${input}" → "${normalized}"`);
      
      // Step 2: Parse the expression
      const parsed = this.parse(normalized);
      parsed.original = input;
      parsed.normalized = normalized;
      
      // Step 3: Route to appropriate solver
      return this.route(parsed);
    } catch (error: any) {
      return {
        result: `Error: ${error.message}`,
        steps: this.steps.length > 0 ? this.steps : [{ step: 'Error', explanation: error.message }],
        verified: 'Failed to solve'
      };
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  PUBLIC MODE-SPECIFIC METHODS (for backward compatibility)
  // ──────────────────────────────────────────────────────────────

  public simplifyExpressionPublic(input: string): SolverResult {
    return this.solve(input);
  }

  public solveLinearEquationPublic(input: string): SolverResult {
    return this.solve(input);
  }

  public solveQuadraticEquationPublic(input: string): SolverResult {
    return this.solve(input);
  }

  public solveInequalityPublic(input: string): SolverResult {
    return this.solve(input);
  }

  public evaluateAbsoluteValuePublic(input: string): SolverResult {
    return this.solve(input);
  }

  public solveAbsoluteValueEquationPublic(input: string): SolverResult {
    return this.solve(input);
  }

  public solveAbsoluteValueInequalityPublic(input: string): SolverResult {
    return this.solve(input);
  }

  // ──────────────────────────────────────────────────────────────
  //  NORMALIZATION (FIXED - Protects absolute values)
  // ──────────────────────────────────────────────────────────────

  private normalize(input: string): string {
    let s = input
      .replace(/²/g, '^2')
      .replace(/³/g, '^3')
      .replace(/⁴/g, '^4')
      .replace(/⁵/g, '^5')
      .replace(/⁶/g, '^6')
      .replace(/⁷/g, '^7')
      .replace(/⁸/g, '^8')
      .replace(/⁹/g, '^9')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/≤/g, '<=')
      .replace(/≥/g, '>=')
      .replace(/≠/g, '!=')
      .replace(/π/g, 'pi')
      .replace(/√/g, 'sqrt')
      .replace(/\s+/g, ' ')
      .trim();

    // Extract variable (first single letter that appears)
    const varMatch = s.match(/(?<![a-zA-Z])[a-zA-Z](?![a-zA-Z])/);
    if (varMatch) {
      this.variable = varMatch[0];
    }

    // Handle implicit multiplication safely - protect absolute values
    s = this.insertImplicitMultiplication(s);

    return s;
  }

  private insertImplicitMultiplication(expr: string): string {
    // First, protect absolute value delimiters by replacing them with a placeholder
    let result = expr;
    const absMatches: string[] = [];
    let absCounter = 0;
    
    // Temporarily replace absolute values with placeholders
    result = result.replace(/\|([^|]*)\|/g, (match) => {
      const placeholder = `__ABS_${absCounter}__`;
      absMatches.push(match);
      absCounter++;
      return placeholder;
    });
    
    // Now apply multiplication insertion on the protected string
    result = result
      .replace(/(\d+)([a-zA-Z])/g, '$1*$2')
      .replace(/(\d+)\(/g, '$1*(')
      .replace(/([a-zA-Z])\(/g, '$1*(')
      .replace(/\)\(/g, ')*(')
      .replace(/\)([a-zA-Z])/g, ')*$1')
      .replace(/(\d+)\|/g, '$1*|')
      .replace(/([a-zA-Z])\|/g, '$1*|')
      .replace(/\)\|/g, ')*|')
      .replace(/\|\(/g, '|*(');
    
    // Restore absolute values
    for (let i = 0; i < absMatches.length; i++) {
      const placeholder = `__ABS_${i}__`;
      // Make sure we don't have extra * before the closing |
      let restored = absMatches[i];
      result = result.replace(placeholder, restored);
    }
    
    return result;
  }

  // ──────────────────────────────────────────────────────────────
  //  PARSING
  // ──────────────────────────────────────────────────────────────

  private parse(input: string): ParsedExpression {
    const result: ParsedExpression = {
      type: 'simplify',
      variable: this.variable,
      hasAbsoluteValue: false,
      absoluteCount: 0,
      absoluteExpressions: [],
      original: this.originalInput
    };

    // Check for absolute value
    const absMatches = input.match(/\|([^|]*)\|/g);
    if (absMatches) {
      result.hasAbsoluteValue = true;
      result.absoluteCount = absMatches.length;
      for (const match of absMatches) {
        const inner = match.slice(1, -1);
        result.absoluteExpressions.push(inner);
      }
      if (absMatches.length === 1) {
        result.absoluteInner = absMatches[0].slice(1, -1);
      }
    }

    // Check for inequality (must check before equation)
    const inequalityMatch = this.matchInequality(input);
    if (inequalityMatch) {
      const { left, op, right } = inequalityMatch;
      result.type = 'linear-inequality';
      result.left = left.trim();
      result.right = right.trim();
      result.operator = op;
      
      if (this.isQuadratic(left.trim()) || this.isQuadratic(right.trim())) {
        result.type = 'quadratic-inequality';
      }
      
      if (result.hasAbsoluteValue) {
        result.type = 'absolute-inequality';
      }
      
      return result;
    }

    // Check for equation
    const eqMatch = input.match(/([^=]*)\s*=\s*([^=]*)/);
    if (eqMatch) {
      const [, left, right] = eqMatch;
      result.left = left?.trim() || '';
      result.right = right?.trim() || '';
      result.operator = '=';
      
      if (result.hasAbsoluteValue) {
        result.type = 'absolute-equation';
      } else if (this.isQuadratic(left?.trim() || '')) {
        result.type = 'quadratic-equation';
      } else {
        result.type = 'linear-equation';
      }
      
      return result;
    }

    // Pure expression
    if (result.hasAbsoluteValue) {
      // Check if it's a numeric absolute value evaluation
      const inner = result.absoluteExpressions[0] || '';
      if (!inner.match(/[a-zA-Z]/) && !input.includes('=') && !input.match(/[<>=!]/)) {
        result.type = 'absolute-value';
        return result;
      }
      
      // Symbolic absolute value expression
      if (result.absoluteCount === 1) {
        result.type = 'absolute-value';
        return result;
      }
    }

    // Try to detect if it's an evaluation with assignment
    const assignmentMatch = input.match(/(.+?)\s*,\s*([a-zA-Z])\s*=\s*([\d.]+)/);
    if (assignmentMatch) {
      const [, expr, varName, value] = assignmentMatch;
      result.type = 'evaluation';
      result.left = expr.trim();
      result.variable = varName;
      result.right = value;
      return result;
    }

    // Default to simplification
    result.type = 'simplify';
    result.left = input;
    return result;
  }

  private matchInequality(input: string): { left: string; op: string; right: string } | null {
    const patterns = [
      { op: '>=', regex: /([^>=]*)\s*>=\s*([^>=]*)/ },
      { op: '<=', regex: /([^<=]*)\s*<=\s*([^<=]*)/ },
      { op: '!=', regex: /([^!=]*)\s*!=\s*([^!=]*)/ },
      { op: '>', regex: /([^>]*)\s*>\s*([^>]*)/ },
      { op: '<', regex: /([^<]*)\s*<\s*([^<]*)/ }
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern.regex);
      if (match) {
        return { left: match[1], op: pattern.op, right: match[2] };
      }
    }

    return null;
  }

  private isQuadratic(expr: string): boolean {
    // Check for squared variable using AST parsing
    try {
      const ast = this.parser.parse(expr, this.variable);
      const terms = ast.collectTerms();
      for (const term of terms) {
        if (term.variable === this.variable && term.degree === 2) {
          return true;
        }
      }
      return false;
    } catch {
      // Fallback to regex
      const patterns = [
        /[a-zA-Z]\s*\^\s*2/,
        /[a-zA-Z]²/,
        /[a-zA-Z]\s*\*\s*[a-zA-Z]/
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(expr)) {
          return true;
        }
      }
      
      return false;
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  ROUTING
  // ──────────────────────────────────────────────────────────────

  private route(parsed: ParsedExpression): SolverResult {
    switch (parsed.type) {
      case 'simplify':
        return this.simplifyExpression(parsed);
      case 'evaluation':
        return this.evaluateWithAssignment(parsed);
      case 'linear-equation':
        return this.solveLinearEquation(parsed);
      case 'quadratic-equation':
        return this.solveQuadraticEquation(parsed);
      case 'linear-inequality':
        return this.solveLinearInequality(parsed);
      case 'quadratic-inequality':
        return this.solveQuadraticInequality(parsed);
      case 'absolute-value':
        return this.evaluateAbsoluteValue(parsed);
      case 'absolute-equation':
        return this.solveAbsoluteEquation(parsed);
      case 'absolute-inequality':
        return this.solveAbsoluteInequality(parsed);
      default:
        return this.simplifyExpression(parsed);
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  SIMPLIFY EXPRESSIONS (LOCKED - DO NOT MODIFY)
  // ──────────────────────────────────────────────────────────────

  private simplifyExpression(parsed: ParsedExpression): SolverResult {
    const expr = parsed.left || parsed.original || '';
    const variable = this.variable || 'x';
    
    this.addStep('Original Expression', expr);
    
    try {
      // Parse to AST
      const ast = this.parser.parse(expr, variable);
      
      // Step 1: Expand parentheses / operations
      const simplifiedAst = ast.simplify();
      const expandedStr = simplifiedAst.toString();
      if (expandedStr !== expr) {
        this.addStep('Expand Parentheses', expandedStr);
      }
      
      // Step 2: Collect & combine like terms
      const terms = ast.collectTerms();
      const resultStr = this.termsToString(terms, variable);
      
      this.addStep('Combine Like Terms', resultStr);
      
      return {
        result: resultStr,
        steps: this.steps,
        verified: 'Expression simplified successfully'
      };
    } catch (error: any) {
      try {
        // Fallback to mathjs
        const node = math.parse(expr);
        const simplified = math.simplify(node);
        const result = simplified.toString();
        const formattedResult = this.formatResult(result);
        this.addStep('Parsed Expression', formattedResult);
        return {
          result: formattedResult,
          steps: this.steps,
          verified: 'Expression simplified successfully'
        };
      } catch (e: any) {
        return {
          result: `Could not simplify: ${error.message}`,
          steps: this.steps,
          verified: 'Simplification failed'
        };
      }
    }
  }

  private termsToString(terms: Term[], defaultVar: string = 'x'): string {
    const nonZero = terms.filter(t => {
      if (typeof t.coefficient === 'number') return Math.abs(t.coefficient) > 1e-10;
      if (t.coefficient instanceof Fraction) return Number(t.coefficient.n) !== 0;
      return t.coefficient !== 0;
    });

    if (nonZero.length === 0) return '0';

    // Sort terms: highest degree first, then by variable name, constants last
    nonZero.sort((a, b) => {
      const degA = a.degree || 0;
      const degB = b.degree || 0;
      if (degA !== degB) return degB - degA;
      return (a.variable || '').localeCompare(b.variable || '');
    });

    const parts: string[] = [];

    for (let i = 0; i < nonZero.length; i++) {
      const term = nonZero[i];
      const coeff = term.coefficient;
      const v = term.variable || (term.degree > 0 ? defaultVar : '');
      const deg = term.degree || 0;
      
      const numVal = this.toNumber(coeff);
      const isNeg = numVal < 0;
      const absCoeff = Math.abs(numVal);
      const absCoeffStr = this.formatNumber(absCoeff);
      
      let termStr = '';
      if (deg === 0 || !v) {
        termStr = absCoeffStr;
      } else {
        const varPart = deg === 1 ? v : (deg === 2 ? `${v}²` : (deg === 3 ? `${v}³` : `${v}^${deg}`));
        if (Math.abs(absCoeff - 1) < 1e-10) {
          termStr = varPart;
        } else {
          termStr = `${absCoeffStr}${varPart}`;
        }
      }

      if (i === 0) {
        parts.push(isNeg ? `-${termStr}` : termStr);
      } else {
        parts.push(isNeg ? `- ${termStr}` : `+ ${termStr}`);
      }
    }

    return parts.join(' ');
  }

  // ──────────────────────────────────────────────────────────────
  //  FORMAT RESULT HELPER
  // ──────────────────────────────────────────────────────────────

  private toSuperscript(numStr: string): string {
    const SUPERSCRIPT_MAP: Record<string, string> = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
      '+': '⁺', '-': '⁻'
    };
    return numStr.split('').map(ch => SUPERSCRIPT_MAP[ch] || ch).join('');
  }

  private getDegree(term: string, variable: string): number {
    const clean = term.replace(/\s+/g, '');
    
    // Check for unicode powers
    const unicodeMatch = clean.match(new RegExp(`${variable}([⁰¹²³⁴⁵⁶⁷⁸⁹]+)`));
    if (unicodeMatch && unicodeMatch[1]) {
      const revMap: Record<string, string> = {
        '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
        '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9'
      };
      const powerStr = unicodeMatch[1].split('').map(c => revMap[c] || c).join('');
      const p = parseInt(powerStr, 10);
      if (!isNaN(p)) return p;
    }

    // Check for ^ power
    const caretMatch = clean.match(new RegExp(`${variable}\\^(\\d+)`));
    if (caretMatch && caretMatch[1]) {
      const p = parseInt(caretMatch[1], 10);
      if (!isNaN(p)) return p;
    }

    // Check for linear
    if (clean.includes(variable)) {
      return 1;
    }

    // Pure constant
    if (!clean.match(/[a-zA-Z]/)) {
      return 0;
    }

    return -0.5;
  }

  private cleanSingleTerm(term: string, isFirst: boolean): string {
    let t = term.trim();
    let isNegative = false;
    if (t.startsWith('-')) {
      isNegative = true;
      t = t.substring(1).trim();
    } else if (t.startsWith('+')) {
      t = t.substring(1).trim();
    }

    // Convert ^n to superscripts
    t = t.replace(/\^(\d+)/g, (_, p1) => this.toSuperscript(p1));
    t = t.replace(/\^2/g, '²').replace(/\^3/g, '³');

    // Remove unnecessary multiplication
    t = t.replace(/(\d+)\s*\*\s*([a-zA-Z])/g, '$1$2');
    t = t.replace(/([a-zA-Z])\s*\*\s*([a-zA-Z])/g, '$1$2');
    t = t.replace(/(\d+)\s*\*\s*\(/g, '$1(');
    t = t.replace(/([a-zA-Z])\s*\*\s*\(/g, '$1(');
    t = t.replace(/\)\s*\*\s*\(/g, ')(');
    t = t.replace(/(\d+)\s*\*\s*\|/g, '$1|');
    t = t.replace(/([a-zA-Z])\s*\*\s*\|/g, '$1|');
    t = t.replace(/\|([^|]*)\|\s*\*\s*(\d+)/g, '$2|$1|');
    t = t.replace(/\|([^|]*)\|\s*\*\s*([a-zA-Z])/g, '|$1|$2');
    t = t.replace(/\|([^|]*)\|\s*\*\s*\(/g, '|$1|(');
    t = t.replace(/\s*\*\s*/g, '');

    // Remove redundant 1
    t = t.replace(/^1([a-zA-Z])/g, '$1');

    if (isFirst) {
      return isNegative ? `-${t}` : t;
    } else {
      return isNegative ? `- ${t}` : `+ ${t}`;
    }
  }

  private splitTopLevelTerms(expr: string): string[] {
    const terms: string[] = [];
    let current = '';
    let parenDepth = 0;
    let absDepth = 0;

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if (char === '(') parenDepth++;
      else if (char === ')') parenDepth = Math.max(0, parenDepth - 1);
      else if (char === '|') absDepth = absDepth === 0 ? 1 : 0;

      if ((char === '+' || char === '-') && parenDepth === 0 && absDepth === 0 && i > 0 && current.trim()) {
        terms.push(current.trim());
        current = char;
      } else {
        current += char;
      }
    }

    if (current.trim()) {
      terms.push(current.trim());
    }

    return terms;
  }

  private formatResult(result: string): string {
    if (!result || !result.trim()) return '';

    // If interval notation, leave intact
    if (result.trim().startsWith('[') || result.trim().startsWith('(')) {
      if (result.includes(',') && (result.trim().endsWith(']') || result.trim().endsWith(')'))) {
        return result;
      }
    }

    // If result has logical splitters, format each component
    if (result.includes(' or ')) {
      return result.split(' or ').map(part => this.formatResult(part)).join(' or ');
    }
    if (result.includes(' and ')) {
      return result.split(' and ').map(part => this.formatResult(part)).join(' and ');
    }
    if (result.includes(' = ')) {
      const sides = result.split(' = ');
      return sides.map(s => this.formatResult(s.trim())).join(' = ');
    }
    for (const op of ['<=', '>=', '!=', '≤', '≥', '≠', '<', '>']) {
      if (result.includes(` ${op} `)) {
        const sides = result.split(` ${op} `);
        return sides.map(s => this.formatResult(s.trim())).join(` ${op} `);
      }
    }

    let clean = result
      .replace(/(\d+)\s*\^\s*(\d+)/g, (_, b, p) => `${b}^${p}`)
      .replace(/([a-zA-Z])\s*\^\s*(\d+)/g, (_, v, p) => `${v}^${p}`)
      .replace(/(\d+)\s*\*\s*/g, '$1*')
      .replace(/\s*\*\s*([a-zA-Z])/g, '*$1');

    const terms = this.splitTopLevelTerms(clean);
    if (terms.length === 0) return '0';
    if (terms.length === 1 && !terms[0]) return '0';

    const variable = this.variable || 'x';
    const indexed = terms.map(t => ({
      raw: t,
      deg: this.getDegree(t, variable)
    }));

    indexed.sort((a, b) => b.deg - a.deg);

    const formattedParts: string[] = [];
    for (let i = 0; i < indexed.length; i++) {
      formattedParts.push(this.cleanSingleTerm(indexed[i].raw, i === 0));
    }

    return formattedParts.join(' ');
  }

  // ──────────────────────────────────────────────────────────────
  //  EVALUATE WITH ASSIGNMENT
  // ──────────────────────────────────────────────────────────────

  private evaluateWithAssignment(parsed: ParsedExpression): SolverResult {
    const expr = parsed.left || '';
    const variable = parsed.variable || this.variable;
    const value = parseFloat(parsed.right || '0');
    
    this.addStep('Evaluation', `Evaluate "${expr}" with ${variable} = ${value}`);
    
    try {
      const result = math.evaluate(expr, { [variable]: value });
      const formattedResult = this.formatNumber(result);
      
      this.addStep('Result', `${expr} = ${formattedResult} (when ${variable} = ${value})`);
      
      return {
        result: formattedResult.toString(),
        steps: this.steps,
        verified: `Verified: ${variable} = ${value} → ${formattedResult}`
      };
    } catch (error: any) {
      return {
        result: `Could not evaluate: ${error.message}`,
        steps: this.steps,
        verified: 'Evaluation failed'
      };
    }
  }

  private formatNumber(value: any): string {
    // Never surface an invalid numerical result to the user. If a
    // calculation produced NaN/Infinity somewhere upstream, surface a clear
    // marker instead of a fake-looking number.
    if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
      return 'undefined';
    }
    if (value && typeof value === 'object' && value.d !== undefined && value.n !== undefined) {
      const sign = Number(value.s) < 0 ? '-' : '';
      if (Number(value.d) === 1) {
        return `${sign}${value.n}`;
      }
      return `${sign}${value.n}/${value.d}`;
    }
    if (typeof value === 'number') {
      if (Number.isInteger(value)) {
        return value.toString();
      }
      try {
        const frac: any = math.fraction(value);
        if (frac && Number(frac.d) !== 1 && Number(frac.d) <= 1000) {
          const sign = Number(frac.s) < 0 ? '-' : '';
          return `${sign}${frac.n}/${frac.d}`;
        }
      } catch {}
      return value.toFixed(4).replace(/\.?0+$/, '');
    }
    return value.toString();
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE LINEAR EQUATIONS (LOCKED - DO NOT MODIFY)
  // ──────────────────────────────────────────────────────────────

  private solveLinearEquation(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const variable = this.variable;
    
    this.addStep('Equation Setup', `${left} = ${right}`);
    
    try {
      // Parse both sides
      const leftAst = this.parser.parse(left, variable);
      const rightAst = this.parser.parse(right, variable);
      
      // Build combined: left - right = 0
      const combined = new BinaryOpNode(leftAst, rightAst, '-');
      this.addStep('Combine Terms', `${combined.toString()} = 0`);
      
      // Simplify
      const simplified = combined.simplify();
      const simplifiedStr = simplified.toString();
      this.addStep('Simplified', `${simplifiedStr} = 0`);
      
      // Extract coefficients from the simplified expression
      const terms = simplified.collectTerms();
      
      // Find variable coefficient and constant
      let a = 0;
      let c = 0;
      
      for (const term of terms) {
        if (term.variable === variable) {
          a += Number(term.coefficient);
        } else if (term.variable === '') {
          c += Number(term.coefficient);
        }
      }
      
      this.addStep('Coefficients', `a = ${a}, c = ${c}`);
      
      // Check for identity (0 = 0)
      if (Math.abs(a) < 1e-10 && Math.abs(c) < 1e-10) {
        this.addStep('Identity', 'The equation simplifies to 0 = 0');
        return {
          result: 'All real numbers',
          steps: this.steps,
          verified: 'The equation is an identity - all real numbers are solutions'
        };
      }
      
      // Check for contradiction (0 = constant)
      if (Math.abs(a) < 1e-10 && Math.abs(c) > 1e-10) {
        this.addStep('Contradiction', `${c} = 0 is impossible`);
        return {
          result: 'No solution',
          steps: this.steps,
          verified: 'The equation is a contradiction - no solution exists'
        };
      }
      
      // Solve: ax + c = 0 => x = -c/a
      const solution = -c / a;
      const formattedSolution = this.formatNumber(solution);
      const result = `${variable} = ${formattedSolution}`;
      
      this.addStep('Solution', result);
      
      // Verify the solution
      const verification = this.verifyEquationSolution(left, right, variable, solution);
      
      return {
        result: this.formatResult(result),
        steps: this.steps,
        verified: verification
      };
      
    } catch (error: any) {
      return {
        result: `Could not solve: ${error.message}`,
        steps: this.steps,
        verified: 'Solving failed'
      };
    }
  }

  private verifyEquationSolution(left: string, right: string, variable: string, solution: any): string {
    try {
      // Use the original expression for verification
      const leftEval = this.evaluateWithAbs(left, { [variable]: solution });
      const rightEval = this.evaluateWithAbs(right, { [variable]: solution });
      
      const leftFormatted = this.formatNumber(leftEval);
      const rightFormatted = this.formatNumber(rightEval);
      
      const isEqual = this.valuesEqual(leftEval, rightEval);
      
      if (isEqual) {
        return `✓ Verified: ${left} = ${right} when ${variable} = ${this.formatNumber(solution)}`;
      } else {
        return `⚠️ Verification failed: ${leftFormatted} ≠ ${rightFormatted}`;
      }
    } catch (error) {
      return `⚠️ Could not verify: ${error}`;
    }
  }

  private evaluateWithAbs(expr: string, context: Record<string, any>): any {
    // Convert |...| to abs(...) for evaluation.
    let converted = this.insertImplicitMultiplication(expr);
    converted = converted.replace(/\|([^|]*)\|/g, (_match, inner) => {
      return `abs(${this.insertImplicitMultiplication(inner)})`;
    });
    converted = converted
      .replace(/(\d)\s*abs\(/g, '$1*abs(')
      .replace(/\)\s*abs\(/g, ')*abs(');

    try {
      return math.evaluate(converted, context);
    } catch {
      const numContext: Record<string, any> = {};
      for (const [k, v] of Object.entries(context)) {
        numContext[k] = this.toNumber(v);
      }
      return mathFloat.evaluate(converted, numContext);
    }
  }

  private valuesEqual(a: any, b: any): boolean {
    const na = this.toNumber(a);
    const nb = this.toNumber(b);
    if (Number.isFinite(na) && Number.isFinite(nb)) {
      const scale = Math.max(1, Math.abs(na), Math.abs(nb));
      return Math.abs(na - nb) < 1e-5 * scale;
    }
    if (a instanceof Fraction && b instanceof Fraction) {
      return a.equals(b);
    }
    return a === b;
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE QUADRATIC EQUATIONS (FIXED)
  // ──────────────────────────────────────────────────────────────

  private solveQuadraticEquation(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const variable = this.variable;
    
    this.addStep('Quadratic Equation', `${left} = ${right}`);
    
    try {
      // Parse both sides
      const leftAst = this.parser.parse(left, variable);
      const rightAst = this.parser.parse(right, variable);
      
      // Build combined: left - right = 0
      const combined = new BinaryOpNode(leftAst, rightAst, '-');
      const simplified = combined.simplify();
      const simplifiedStr = simplified.toString();
      this.addStep('Standard Form', `${simplifiedStr} = 0`);
      
      // Extract coefficients - CRITICAL: separate by power
      const terms = simplified.collectTerms();
      let a = 0, b = 0, c = 0;
      
      for (const term of terms) {
        const coeff = this.toNumber(term.coefficient);
        if (term.variable === variable && term.degree === 2) {
          a += coeff;
        } else if (term.variable === variable && term.degree === 1) {
          b += coeff;
        } else if (term.variable === '') {
          c += coeff;
        }
      }
      
      // Check if it's actually linear
      if (Math.abs(a) < 1e-10) {
        const linearParsed: ParsedExpression = {
          type: 'linear-equation',
          left: left,
          right: right,
          variable: variable,
          hasAbsoluteValue: false,
          absoluteCount: 0,
          absoluteExpressions: [],
          original: parsed.original
        };
        return this.solveLinearEquation(linearParsed);
      }
      
      this.addStep('Coefficients', `a = ${this.formatNumber(a)}, b = ${this.formatNumber(b)}, c = ${this.formatNumber(c)}`);
      
      // Calculate discriminant
      const discriminant = b * b - 4 * a * c;
      const discFormatted = this.formatNumber(discriminant);
      this.addStep('Discriminant', `Δ = b² - 4ac = ${discFormatted}`);
      
      let result = '';
      let verification = '';
      
      // Handle cases based on discriminant
      if (discriminant < 0) {
        // Complex solutions
        const real = -b / (2 * a);
        const imag = Math.sqrt(Math.abs(discriminant)) / (2 * a);
        const realFormatted = this.formatNumber(real);
        const imagAbs = Math.abs(imag);
        const imagFormatted = this.formatNumber(imagAbs);
        
        if (imagAbs < 1e-10) {
          result = `${variable} = ${realFormatted}`;
        } else if (Math.abs(real) < 1e-10) {
          result = `${variable} = ±${imagFormatted}i`;
        } else {
          result = `${variable} = ${realFormatted} ± ${imagFormatted}i`;
        }
        verification = `No real solutions (discriminant = ${discFormatted} < 0)`;
      } else if (Math.abs(discriminant) < 1e-10) {
        // Double root
        const solution = -b / (2 * a);
        const formattedSolution = this.formatNumber(solution);
        result = `${variable} = ${formattedSolution}`;
        verification = this.verifyEquationSolution(left, right, variable, solution);
      } else {
        // Two distinct real solutions
        const sqrtD = Math.sqrt(discriminant);
        const isPerfectSquare = Math.abs(Math.round(sqrtD) - sqrtD) < 1e-10;
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);
        const sorted = [x1, x2].sort((a, b) => a - b);
        
        if (isPerfectSquare) {
          result = `${variable} = ${this.formatNumber(sorted[0])} or ${variable} = ${this.formatNumber(sorted[1])}`;
        } else {
          const exactForm = this.formatRadicalRoots(a, b, discriminant);
          result = `${variable} = ${exactForm}`;
        }
        
        const v1 = this.verifyEquationSolution(left, right, variable, sorted[0]);
        const v2 = this.verifyEquationSolution(left, right, variable, sorted[1]);
        verification = `${v1} | ${v2}`;
      }
      
      this.addStep('Solution', result);
      
      return {
        result: this.formatResult(result),
        steps: this.steps,
        verified: verification
      };
      
    } catch (error: any) {
      return {
        result: `Could not solve quadratic: ${error.message}`,
        steps: this.steps,
        verified: 'Solving failed'
      };
    }
  }

  private formatRadicalRoots(a: number, b: number, d: number): string {
    const twoA = 2 * a;
    const negB = -b;
    
    if (Number.isInteger(d) && Number.isInteger(twoA) && Number.isInteger(negB)) {
      const { outside, inside } = this.simplifyRadical(d);
      const g = this.gcd(this.gcd(Math.abs(negB), outside), Math.abs(twoA));
      let topB = negB / g;
      const topK = outside / g;
      let bot = twoA / g;
      
      if (bot < 0) {
        topB = -topB;
        bot = -bot;
      }
      
      const radStr = topK === 1 ? `√${inside}` : `${topK}√${inside}`;
      
      if (topB === 0) {
        return bot === 1 ? `±${radStr}` : `±${radStr}/${bot}`;
      }
      return bot === 1 ? `${topB} ± ${radStr}` : `(${topB} ± ${radStr})/${bot}`;
    }
    
    const sqrtD = Math.sqrt(d);
    const x1 = (-b - sqrtD) / (2 * a);
    const x2 = (-b + sqrtD) / (2 * a);
    return `${this.formatNumber(Math.min(x1, x2))} or ${this.formatNumber(Math.max(x1, x2))}`;
  }

  private gcd(a: number, b: number): number {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  private simplifyRadical(n: number): { outside: number; inside: number } {
    let inside = Math.round(n);
    let outside = 1;
    for (let i = 2; i * i <= inside; i++) {
      while (inside % (i * i) === 0) {
        outside *= i;
        inside /= (i * i);
      }
    }
    return { outside, inside };
  }

  private toNumber(value: any): number {
    if (typeof value === 'number') return value;
    if (value instanceof Fraction) {
      return (Number(value.s) < 0 ? -1 : 1) * Number(value.n) / Number(value.d);
    }
    if (value && typeof value === 'object' && value.d !== undefined && value.n !== undefined) {
      return (Number(value.s) < 0 ? -1 : 1) * Number(value.n) / Number(value.d);
    }
    if (typeof value === 'string') {
      const num = parseFloat(value);
      if (!isNaN(num)) return num;
    }
    return 0;
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE LINEAR INEQUALITIES (LOCKED - DO NOT MODIFY)
  // ──────────────────────────────────────────────────────────────

  private solveLinearInequality(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const operator = parsed.operator || '>';
    const variable = this.variable;
    
    this.addStep('Inequality', `${left} ${operator} ${right}`);
    
    try {
      // Parse both sides
      const leftAst = this.parser.parse(left, variable);
      const rightAst = this.parser.parse(right, variable);
      
      // Build combined: left - right
      const combined = new BinaryOpNode(leftAst, rightAst, '-');
      const simplified = combined.simplify();
      const simplifiedStr = simplified.toString();
      this.addStep('Simplified', `${simplifiedStr} ${operator} 0`);
      
      // Extract coefficients
      const terms = simplified.collectTerms();
      let a = 0, c = 0;
      
      for (const term of terms) {
        if (term.variable === variable) {
          a += this.toNumber(term.coefficient);
        } else if (term.variable === '') {
          c += this.toNumber(term.coefficient);
        }
      }
      
      this.addStep('Coefficients', `a = ${a}, c = ${c}`);
      
      // Check special cases
      if (Math.abs(a) < 1e-10) {
        const isTrue = this.evaluateInequality(0, c, operator);
        if (isTrue) {
          return {
            result: 'All real numbers',
            steps: this.steps,
            verified: 'The inequality is always true'
          };
        } else {
          return {
            result: 'No solution',
            steps: this.steps,
            verified: 'The inequality is always false'
          };
        }
      }
      
      // Solve: a*x + c operator 0 => a*x operator -c
      const rhs = -c;
      let finalOp = operator;
      
      // If a is negative, flip the inequality
      if (a < 0) {
        finalOp = this.flipInequality(operator);
        this.addStep('Flip Direction', `Dividing by negative ${this.formatNumber(a)}, flip ${operator} to ${finalOp}`);
      }
      
      const solution = rhs / a;
      const formattedSolution = this.formatNumber(solution);
      
      let result = `${variable} ${finalOp} ${formattedSolution}`;
      const interval = this.toIntervalNotation(finalOp, solution);
      this.addStep('Solution', `${result} (${interval})`);
      
      return {
        result: this.formatResult(result),
        steps: this.steps,
        verified: `Solution: ${result} (interval: ${interval})`
      };
      
    } catch (error: any) {
      return {
        result: `Could not solve inequality: ${error.message}`,
        steps: this.steps,
        verified: 'Solving failed'
      };
    }
  }

  private flipInequality(op: string): string {
    switch (op) {
      case '>': return '<';
      case '<': return '>';
      case '>=': return '<=';
      case '<=': return '>=';
      case '!=': return '!=';
      default: return op;
    }
  }

  private toIntervalNotation(op: string, value: number): string {
    const formatted = this.formatNumber(value);
    switch (op) {
      case '>': return `(${formatted}, ∞)`;
      case '<': return `(-∞, ${formatted})`;
      case '>=': return `[${formatted}, ∞)`;
      case '<=': return `(-∞, ${formatted}]`;
      case '!=': return `(-∞, ${formatted}) ∪ (${formatted}, ∞)`;
      default: return '';
    }
  }

  private evaluateInequality(left: number, right: number, operator: string): boolean {
    switch (operator) {
      case '>': return left > right;
      case '<': return left < right;
      case '>=': return left >= right;
      case '<=': return left <= right;
      case '!=': return Math.abs(left - right) > 1e-10;
      default: return false;
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE QUADRATIC INEQUALITIES (FIXED)
  // ──────────────────────────────────────────────────────────────

  private solveQuadraticInequality(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const operator = parsed.operator || '>';
    const variable = this.variable;
    
    this.addStep('Quadratic Inequality', `${left} ${operator} ${right}`);
    
    try {
      // Parse both sides
      const leftAst = this.parser.parse(left, variable);
      const rightAst = this.parser.parse(right, variable);
      
      // Build combined: left - right
      const combined = new BinaryOpNode(leftAst, rightAst, '-');
      const simplified = combined.simplify();
      const simplifiedStr = simplified.toString();
      this.addStep('Standard Form', `${simplifiedStr} ${operator} 0`);
      
      // Extract coefficients - CRITICAL: separate by power
      const terms = simplified.collectTerms();
      let a = 0, b = 0, c = 0;
      
      for (const term of terms) {
        const coeff = this.toNumber(term.coefficient);
        if (term.variable === variable && term.degree === 2) {
          a += coeff;
        } else if (term.variable === variable && term.degree === 1) {
          b += coeff;
        } else if (term.variable === '') {
          c += coeff;
        }
      }
      
      // Check if it's actually linear
      if (Math.abs(a) < 1e-10) {
        const linearParsed: ParsedExpression = {
          type: 'linear-inequality',
          left: left,
          right: right,
          operator: operator,
          variable: variable,
          hasAbsoluteValue: false,
          absoluteCount: 0,
          absoluteExpressions: [],
          original: parsed.original
        };
        return this.solveLinearInequality(linearParsed);
      }
      
      this.addStep('Coefficients', `a = ${this.formatNumber(a)}, b = ${this.formatNumber(b)}, c = ${this.formatNumber(c)}`);
      
      const discriminant = b * b - 4 * a * c;
      this.addStep('Discriminant', `Δ = ${this.formatNumber(discriminant)}`);
      
      // Find critical points (roots)
      let roots: number[] = [];
      
      if (discriminant < 0) {
        // No real roots - check a single test point
        const testVal = a > 0 ? 0 : 0; // Use 0 as test point
        const evalResult = this.evaluateQuadratic(a, b, c, testVal);
        const isTrue = this.evaluateInequality(evalResult, 0, operator);
        
        if (isTrue) {
          return {
            result: 'All real numbers',
            steps: this.steps,
            verified: `The inequality is always true (no real roots, sign determined by a = ${this.formatNumber(a)})`
          };
        } else {
          return {
            result: 'No solution',
            steps: this.steps,
            verified: `The inequality is always false (no real roots, sign determined by a = ${this.formatNumber(a)})`
          };
        }
      } else if (Math.abs(discriminant) < 1e-10) {
        // One double root
        const root = -b / (2 * a);
        roots = [root];
        this.addStep('Critical Point', `${variable} = ${this.formatNumber(root)} (double root)`);
        
        // Test points on both sides
        const testPoints = [root - 1, root + 1];
        const results = testPoints.map(t => this.evaluateQuadratic(a, b, c, t));
        const isTrue1 = this.evaluateInequality(results[0], 0, operator);
        const isTrue2 = this.evaluateInequality(results[1], 0, operator);
        
        if (isTrue1 && isTrue2) {
          // Both sides satisfy, but root may or may not
          const atRoot = this.evaluateInequality(0, 0, operator);
          if (atRoot) {
            return {
              result: 'All real numbers',
              steps: this.steps,
              verified: `Inequality holds for all real numbers (including the root)`
            };
          } else {
            return {
              result: `All real numbers except ${variable} = ${this.formatNumber(root)}`,
              steps: this.steps,
              verified: `Inequality holds for all x ≠ ${this.formatNumber(root)}`
            };
          }
        } else if (isTrue1 || isTrue2) {
          // Only one side satisfies
          const atRoot = this.evaluateInequality(0, 0, operator);
          if (atRoot) {
            return {
              result: `All real numbers`,
              steps: this.steps,
              verified: `Inequality holds for all real numbers`
            };
          } else {
            return {
              result: `${variable} ≠ ${this.formatNumber(root)}`,
              steps: this.steps,
              verified: `Inequality holds for x ≠ ${this.formatNumber(root)}`
            };
          }
        } else {
          // Neither side satisfies the inequality. The parabola only
          // touches zero exactly at the double root, so for a non-strict
          // inequality that includes equality (>= or <=) that single point
          // is still a valid solution - it must not be reported as "No
          // solution".
          const atRoot = this.evaluateInequality(0, 0, operator);
          if (atRoot) {
            return {
              result: `${variable} = ${this.formatNumber(root)}`,
              steps: this.steps,
              verified: `Inequality holds only at the double root x = ${this.formatNumber(root)}`
            };
          }
          return {
            result: 'No solution',
            steps: this.steps,
            verified: 'Inequality does not hold for any value'
          };
        }
      } else {
        // Two distinct roots
        const sqrtD = Math.sqrt(discriminant);
        const x1 = (-b - sqrtD) / (2 * a);
        const x2 = (-b + sqrtD) / (2 * a);
        roots = [Math.min(x1, x2), Math.max(x1, x2)];
        
        const root1Formatted = this.formatNumber(roots[0]);
        const root2Formatted = this.formatNumber(roots[1]);
        this.addStep('Critical Points', `${variable} = ${root1Formatted}, ${variable} = ${root2Formatted}`);
        
        // Test intervals
        const intervals = [
          { label: `(-∞, ${root1Formatted})`, test: roots[0] - 1 },
          { label: `(${root1Formatted}, ${root2Formatted})`, test: (roots[0] + roots[1]) / 2 },
          { label: `(${root2Formatted}, ∞)`, test: roots[1] + 1 }
        ];
        
        const solutions: string[] = [];
        let signInfo = '';
        let includeRoot1 = false;
        let includeRoot2 = false;
        
        for (const interval of intervals) {
          const evalResult = this.evaluateQuadratic(a, b, c, interval.test);
          const isTrue = this.evaluateInequality(evalResult, 0, operator);
          const sign = evalResult > 0 ? '+' : '-';
          signInfo += `${interval.label}: ${sign} `;
          
          if (isTrue) {
            solutions.push(interval.label);
          }
        }
        
        // Check roots for non-strict inequalities
        if (operator === '>=' || operator === '<=') {
          const root1Eval = this.evaluateQuadratic(a, b, c, roots[0]);
          const root2Eval = this.evaluateQuadratic(a, b, c, roots[1]);
          includeRoot1 = this.evaluateInequality(root1Eval, 0, operator);
          includeRoot2 = this.evaluateInequality(root2Eval, 0, operator);
        } else if (operator === '!=') {
          // Roots are excluded for !=
          includeRoot1 = false;
          includeRoot2 = false;
        } else {
          // Strict inequalities exclude roots
          includeRoot1 = false;
          includeRoot2 = false;
        }
        
        this.addStep('Sign Analysis', signInfo);
        
        // Build result based on which intervals satisfy
        let result = '';
        const variableName = variable;
        
        if (solutions.length === 0) {
          result = 'No solution';
        } else if (solutions.length === 1) {
          // Check if we should adjust for roots
          const sol = solutions[0];
          if (sol === `(-∞, ${root1Formatted})`) {
            result = `${variableName} < ${root1Formatted}`;
            if (includeRoot1 && operator !== '!=') {
              result = `${variableName} ≤ ${root1Formatted}`;
            }
          } else if (sol === `(${root1Formatted}, ${root2Formatted})`) {
            result = `${root1Formatted} < ${variableName} < ${root2Formatted}`;
            if (includeRoot1 && includeRoot2) {
              result = `${root1Formatted} ≤ ${variableName} ≤ ${root2Formatted}`;
            } else if (includeRoot1) {
              result = `${root1Formatted} ≤ ${variableName} < ${root2Formatted}`;
            } else if (includeRoot2) {
              result = `${root1Formatted} < ${variableName} ≤ ${root2Formatted}`;
            }
          } else if (sol === `(${root2Formatted}, ∞)`) {
            result = `${variableName} > ${root2Formatted}`;
            if (includeRoot2 && operator !== '!=') {
              result = `${variableName} ≥ ${root2Formatted}`;
            }
          } else {
            result = sol;
          }
        } else if (solutions.length === 2) {
          const s1 = solutions[0];
          const s2 = solutions[1];
          
          // Combine the two intervals
          if (s1 === `(-∞, ${root1Formatted})` && s2 === `(${root2Formatted}, ∞)`) {
            result = `${variableName} < ${root1Formatted} or ${variableName} > ${root2Formatted}`;
            if (includeRoot1 && operator !== '!=') {
              result = `${variableName} ≤ ${root1Formatted} or ${variableName} > ${root2Formatted}`;
            }
            if (includeRoot2 && operator !== '!=') {
              result = `${variableName} < ${root1Formatted} or ${variableName} ≥ ${root2Formatted}`;
            }
            if (includeRoot1 && includeRoot2 && operator !== '!=') {
              result = `${variableName} ≤ ${root1Formatted} or ${variableName} ≥ ${root2Formatted}`;
            }
          } else if (s1 === `(-∞, ${root1Formatted})` && s2 === `(${root1Formatted}, ${root2Formatted})`) {
            result = `${variableName} < ${root2Formatted}`;
            if (includeRoot2 && operator !== '!=') {
              result = `${variableName} ≤ ${root2Formatted}`;
            }
          } else if (s1 === `(${root1Formatted}, ${root2Formatted})` && s2 === `(${root2Formatted}, ∞)`) {
            result = `${variableName} > ${root1Formatted}`;
            if (includeRoot1 && operator !== '!=') {
              result = `${variableName} ≥ ${root1Formatted}`;
            }
          } else {
            result = `${s1} or ${s2}`;
          }
        } else {
          result = solutions.join(' or ');
        }
        
        // If it's !=, we need a different format
        if (operator === '!=' && roots.length === 2) {
          result = `${variableName} ≠ ${root1Formatted} and ${variableName} ≠ ${root2Formatted}`;
        }
        
        this.addStep('Solution', result);
        
        return {
          result: this.formatResult(result),
          steps: this.steps,
          verified: `Solved using sign analysis on intervals ${intervals.map(i => i.label).join(', ')}`
        };
      }
      
    } catch (error: any) {
      return {
        result: `Could not solve quadratic inequality: ${error.message}`,
        steps: this.steps,
        verified: 'Solving failed'
      };
    }
  }

  private evaluateQuadratic(a: number, b: number, c: number, x: number): number {
    return a * x * x + b * x + c;
  }

  // ──────────────────────────────────────────────────────────────
  //  ABSOLUTE VALUE EXPRESSIONS (FIXED)
  // ──────────────────────────────────────────────────────────────

  private evaluateAbsoluteValue(parsed: ParsedExpression): SolverResult {
    const inner = parsed.absoluteInner || parsed.absoluteExpressions[0] || '';
    
    this.addStep('Absolute Value', `|${inner}|`);
    
    // Check if inner contains variable
    if (inner.match(/[a-zA-Z]/)) {
      // Contains variable - keep symbolic
      const formattedInner = this.formatResult(inner);
      let result = `|${formattedInner}|`;
      
      // Check for numeric coefficient outside
      const leftExpr = parsed.left || '';
      const outerMatch = leftExpr.match(/^(\d+)\s*\*?\s*\|/);
      if (outerMatch) {
        const coeff = outerMatch[1];
        result = `${coeff}|${formattedInner}|`;
      }
      
      // Try to simplify with AST
      try {
        const ast = this.parser.parse(inner, this.variable);
        const simplified = ast.simplify();
        const simplifiedStr = simplified.toString();
        if (simplifiedStr !== inner) {
          this.addStep('Simplify Inside', `${inner} → ${simplifiedStr}`);
          result = `|${this.formatResult(simplifiedStr)}|`;
        }
      } catch {}
      
      // Add step showing piecewise definition
      this.addStep('Piecewise Definition', `|${inner}| = ${inner} if ${inner} ≥ 0, -${inner} if ${inner} < 0`);
      
      return {
        result: result,
        steps: this.steps,
        verified: `Expression contains variable - kept as ${result}`
      };
    }
    
    // Numeric absolute value - FIXED: evaluate with proper precedence
    try {
      // Evaluate the inner expression with proper precedence
      const result = this.evaluateNumericExpression(inner);
      const absResult = Math.abs(result);
      const formattedResult = this.formatNumber(absResult);
      
      // Check if there's a coefficient
      const leftExpr = parsed.left || '';
      const outerMatch = leftExpr.match(/^(\d+)\s*\*?\s*\|/);
      if (outerMatch) {
        const coeff = parseFloat(outerMatch[1]);
        const total = coeff * absResult;
        const formattedTotal = this.formatNumber(total);
        this.addStep('Evaluate', `${coeff}|${inner}| = ${coeff} * ${formattedResult} = ${formattedTotal}`);
        return {
          result: formattedTotal.toString(),
          steps: this.steps,
          verified: `|${inner}| = ${formattedResult}, ${coeff}|${inner}| = ${formattedTotal}`
        };
      }
      
      this.addStep('Evaluate', `|${inner}| = |${this.formatNumber(result)}| = ${formattedResult}`);
      
      return {
        result: formattedResult.toString(),
        steps: this.steps,
        verified: `|${inner}| = ${formattedResult}`
      };
      
    } catch (error: any) {
      return {
        result: `|${inner}| (cannot evaluate: ${error.message})`,
        steps: this.steps,
        verified: 'Evaluation failed'
      };
    }
  }

  private evaluateNumericExpression(expr: string): number {
    // Convert to a safe format for mathjs
    let safe = expr
      .replace(/²/g, '^2')
      .replace(/³/g, '^3')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-');
    
    // Handle implicit multiplication
    safe = safe.replace(/(\d+)([a-zA-Z])/g, '$1*$2');
    
    // If there are variables, we can't evaluate
    if (safe.match(/[a-zA-Z]/)) {
      throw new Error('Expression contains variables');
    }
    
    // Evaluate using mathjs
    const result = math.evaluate(safe);
    if (typeof result === 'number') {
      return result;
    }
    if (result instanceof Fraction) {
      return (Number(result.s) < 0 ? -1 : 1) * Number(result.n) / Number(result.d);
    }
    return Number(result);
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE ABSOLUTE VALUE EQUATIONS (FIXED)
  // ──────────────────────────────────────────────────────────────

  private solveAbsoluteEquation(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const variable = this.variable;
    
    const absMatch = left.match(/\|([^|]*)\|/);
    if (!absMatch) {
      // Fall back to linear equation
      const linearParsed: ParsedExpression = {
        type: 'linear-equation',
        left: left,
        right: right,
        variable: variable,
        hasAbsoluteValue: false,
        absoluteCount: 0,
        absoluteExpressions: [],
        original: parsed.original
      };
      return this.solveLinearEquation(linearParsed);
    }
    
    const inner = absMatch[1];
    let rightVal: any;
    
    try {
      // Try to evaluate the right side
      rightVal = this.evaluateNumericExpression(right);
    } catch {
      // Right side contains variable - use general method
      return this.solveGeneralAbsoluteEquation(parsed);
    }
    
    // Account for any coefficient or divisor applied to the absolute value
    // term itself (e.g. "2|x-1| = 6" or "|3x-1|/2 = 4") by isolating what
    // |inner| actually needs to equal.
    const isolated = this.isolateAbsoluteTarget(left, rightVal, absMatch[0]);
    if (isolated.ok) {
      this.addStep('Isolate Absolute Value', `|${inner}| = ${this.formatNumber(isolated.value)}`);
      rightVal = isolated.value;
    }
    
    const rightFormatted = this.formatNumber(rightVal);
    this.addStep('Absolute Value Equation', `|${inner}| = ${rightFormatted}`);
    
    // Handle special cases
    if (rightVal < 0) {
      this.addStep('No Solution', `Absolute value cannot be negative (|expression| ≥ 0)`);
      return {
        result: 'No solution',
        steps: this.steps,
        verified: '|expression| ≥ 0 for all values, cannot equal negative'
      };
    }
    
    if (parsed.absoluteCount > 1) {
      return this.solveMultipleAbsoluteValues(parsed);
    }
    
    const solutions: any[] = [];
    
    // Case 1: inner = rightVal
    try {
      const eq1 = `${inner} = ${rightVal}`;
      const result1 = this.solveEquationString(eq1);
      if (result1 !== null && !isNaN(result1) && Number.isFinite(result1)) {
        solutions.push(result1);
      }
    } catch {}
    
    // Case 2: inner = -rightVal
    if (rightVal > 0) {
      try {
        const eq2 = `${inner} = ${-rightVal}`;
        const result2 = this.solveEquationString(eq2);
        if (result2 !== null && !isNaN(result2) && Number.isFinite(result2)) {
          solutions.push(result2);
        }
      } catch {}
    }
    
    // Deduplicate solutions
    const uniqueSolutions = this.uniqueSolutions(solutions);
    
    let result = '';
    if (uniqueSolutions.length === 0) {
      result = 'No solution';
    } else if (uniqueSolutions.length === 1) {
      result = `${variable} = ${this.formatNumber(uniqueSolutions[0])}`;
    } else {
      result = uniqueSolutions.map((s: any) => `${variable} = ${this.formatNumber(s)}`).join(' or ');
    }
    
    this.addStep('Solutions', result);
    
    // Verify each solution using the original input
    let verification = '';
    for (const sol of uniqueSolutions) {
      const v = this.verifyEquationSolution(left, right, variable, sol);
      verification += v + ' ';
    }
    
    return {
      result: this.formatResult(result),
      steps: this.steps,
      verified: verification || 'All solutions verified'
    };
  }

  private solveGeneralAbsoluteEquation(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const variable = this.variable;
    
    this.addStep('General Absolute Equation', `${left} = ${right}`);
    
    const absMatches = left.match(/\|([^|]*)\|/g) || [];
    if (absMatches.length === 0 || !absMatches[0]) {
      return this.solveLinearEquation(parsed);
    }
    
    const inner = absMatches[0].slice(1, -1);
    const solutions: any[] = [];
    
    this.addStep('Domain Restriction', `${right} ≥ 0 (since |expression| ≥ 0)`);
    
    // Case 1: inner = right
    try {
      const eq1 = `${inner} = ${right}`;
      const result1 = this.solveEquationString(eq1);
      if (result1 !== null && !isNaN(result1) && Number.isFinite(result1)) {
        // Check domain: right ≥ 0
        const domainCheck = this.evaluateWithAbs(right, { [variable]: result1 });
        if (this.isNonNegative(domainCheck)) {
          solutions.push(result1);
        }
      }
    } catch {}
    
    // Case 2: inner = -right
    try {
      const eq2 = `${inner} = -(${right})`;
      const result2 = this.solveEquationString(eq2);
      if (result2 !== null && !isNaN(result2) && Number.isFinite(result2)) {
        // Check domain: right ≥ 0
        const domainCheck = this.evaluateWithAbs(right, { [variable]: result2 });
        if (this.isNonNegative(domainCheck)) {
          solutions.push(result2);
        }
      }
    } catch {}
    
    const uniqueSolutions = this.uniqueSolutions(solutions);
    
    let result = '';
    if (uniqueSolutions.length === 0) {
      result = 'No solution';
    } else if (uniqueSolutions.length === 1) {
      result = `${variable} = ${this.formatNumber(uniqueSolutions[0])}`;
    } else {
      result = uniqueSolutions.map((s: any) => `${variable} = ${this.formatNumber(s)}`).join(' or ');
    }
    
    this.addStep('Solutions', result);
    
    // Verify using original input
    let verification = '';
    for (const sol of uniqueSolutions) {
      const v = this.verifyEquationSolution(left, right, variable, sol);
      verification += v + ' ';
    }
    
    return {
      result: this.formatResult(result),
      steps: this.steps,
      verified: verification || `Solutions verified with domain restrictions: ${result}`
    };
  }

  // Given an equation/inequality's left side and a purely numeric right-hand
  // value, determine what the located |inner| absolute-value term itself
  // must equal - accounting for any coefficient or divisor applied to it
  // (e.g. "2|x-1| = 6" means |x-1| = 3; "|3x-1|/2 = 4" means |3x-1| = 8).
  // This is done generically (not by hardcoding "leading coefficient" or
  // "trailing divisor" patterns) by substituting the |...| term with a
  // placeholder variable and solving the resulting linear equation for it,
  // reusing the same AST/coefficient-extraction machinery used elsewhere.
  private pickUnusedLetter(text: string): string {
    for (const ch of 'qwertyuiopasdfghjklzxcvbnm') {
      if (!text.includes(ch) && !text.includes(ch.toUpperCase())) return ch;
    }
    return 'q';
  }

  private isolateAbsoluteTarget(left: string, rightVal: number, absExprText: string): { ok: boolean; value: number; negatedCoefficient: boolean } {
    const idx = left.indexOf(absExprText);
    if (idx === -1) return { ok: false, value: rightVal, negatedCoefficient: false };

    const placeholder = this.pickUnusedLetter(left);
    const withPlaceholder = left.slice(0, idx) + placeholder + left.slice(idx + absExprText.length);

    // Nothing surrounds the absolute value - there's no coefficient/divisor
    // to isolate, so the raw right-hand value is already the target.
    if (withPlaceholder.trim() === placeholder) return { ok: false, value: rightVal, negatedCoefficient: false };

    try {
      const leftAst = this.parser.parse(withPlaceholder, placeholder);
      const rightAst = this.parser.parse(String(rightVal), placeholder);
      const combined = new BinaryOpNode(leftAst, rightAst, '-');
      const simplified = combined.simplify();
      const terms = simplified.collectTerms();

      let a = 0, c = 0, sawOtherVar = false;
      for (const term of terms) {
        if (term.variable === placeholder) a += this.toNumber(term.coefficient);
        else if (term.variable === '') c += this.toNumber(term.coefficient);
        else sawOtherVar = true;
      }

      if (sawOtherVar || Math.abs(a) < 1e-10) return { ok: false, value: rightVal, negatedCoefficient: false };

      const target = -c / a;
      if (!Number.isFinite(target) || isNaN(target)) return { ok: false, value: rightVal, negatedCoefficient: false };
      return { ok: true, value: target, negatedCoefficient: a < 0 };
    } catch {
      return { ok: false, value: rightVal, negatedCoefficient: false };
    }
  }

  private isNonNegative(value: any): boolean {
    if (typeof value === 'number') {
      return value >= 0 || Math.abs(value) < 1e-10;
    }
    if (value instanceof Fraction) {
      return Number(value.s) >= 0 || Number(value.n) === 0;
    }
    return true;
  }

  private solveEquationString(equation: string): any {
    try {
      const eqMatch = equation.match(/([^=]*)\s*=\s*([^=]*)/);
      if (!eqMatch) return null;
      
      const [, left, right] = eqMatch;
      const variable = this.variable;
      
      // Try to solve with AST
      try {
        const leftAst = this.parser.parse(left, variable);
        const rightAst = this.parser.parse(right, variable);
        const combined = new BinaryOpNode(leftAst, rightAst, '-');
        const simplified = combined.simplify();
        const terms = simplified.collectTerms();
        
        let a = 0, c = 0;
        for (const term of terms) {
          if (term.variable === variable) {
            a += this.toNumber(term.coefficient);
          } else if (term.variable === '') {
            c += this.toNumber(term.coefficient);
          }
        }
        
        if (Math.abs(a) > 1e-10) {
          const result = -c / a;
          // Validate result - prevent NaN
          if (isNaN(result) || !isFinite(result)) {
            return null;
          }
          return result;
        }
      } catch {}
      
      // Try direct evaluation with mathjs
      try {
        // Convert left and right to evaluable forms
        const leftEval = left.trim();
        const rightEval = right.trim();
        
        if (leftEval === variable) {
          const val = math.evaluate(rightEval);
          return this.toNumber(val);
        }
        if (rightEval === variable) {
          const val = math.evaluate(leftEval);
          return this.toNumber(val);
        }
      } catch {}
      
      return null;
    } catch {
      return null;
    }
  }

  private solveMultipleAbsoluteValues(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const variable = this.variable;
    
    this.addStep('Multiple Absolute Values', left);
    
    const absPatterns = left.match(/\|([^|]*)\|/g) || [];
    const absInners = absPatterns.map(p => p.slice(1, -1));
    
    // Find critical points
    const criticalPoints: number[] = [];
    for (const inner of absInners) {
      try {
        const eq = `${inner} = 0`;
        const result = this.solveEquationString(eq);
        if (result !== null && !isNaN(result) && Number.isFinite(result)) {
          criticalPoints.push(result);
        }
      } catch {}
    }
    
    const points = Array.from(new Set(criticalPoints)).sort((a, b) => a - b);
    this.addStep('Critical Points', `[${points.map(p => this.formatNumber(p)).join(', ')}]`);
    
    const intervals: Array<{ start: number; end: number; label: string }> = [];
    if (points.length === 0) {
      intervals.push({ start: -Infinity, end: Infinity, label: '(-∞, ∞)' });
    } else {
      intervals.push({ start: -Infinity, end: points[0], label: `(-∞, ${this.formatNumber(points[0])})` });
      for (let i = 0; i < points.length - 1; i++) {
        intervals.push({ 
          start: points[i], 
          end: points[i + 1], 
          label: `(${this.formatNumber(points[i])}, ${this.formatNumber(points[i + 1])})` 
        });
      }
      intervals.push({ 
        start: points[points.length - 1], 
        end: Infinity, 
        label: `(${this.formatNumber(points[points.length - 1])}, ∞)` 
      });
    }
    
    this.addStep('Intervals', intervals.map(i => i.label).join(', '));
    
    const solutions: any[] = [];
    let rightVal: any;
    try {
      rightVal = this.evaluateNumericExpression(right);
    } catch {
      // Right side contains variable
      return this.solveGeneralAbsoluteEquation(parsed);
    }
    
    for (const interval of intervals) {
      let testPoint = 0;
      if (isFinite(interval.start) && isFinite(interval.end)) {
        testPoint = (interval.start + interval.end) / 2;
      } else if (isFinite(interval.start)) {
        testPoint = interval.start + 1;
      } else if (isFinite(interval.end)) {
        testPoint = interval.end - 1;
      } else {
        testPoint = 0;
      }
      
      let exprWithoutAbs = left;
      for (let i = 0; i < absPatterns.length; i++) {
        const pattern = absPatterns[i];
        const inner = absInners[i];
        try {
          const testValue = this.evaluateNumericExpression(inner.replace(variable, `(${testPoint})`));
          if (testValue < 0) {
            exprWithoutAbs = exprWithoutAbs.replace(pattern, `(-(${inner}))`);
          } else {
            exprWithoutAbs = exprWithoutAbs.replace(pattern, `(${inner})`);
          }
        } catch {}
      }
      
      try {
        const eq = `${exprWithoutAbs} = ${rightVal}`;
        const result = this.solveEquationString(eq);
        if (result !== null && !isNaN(result) && Number.isFinite(result)) {
          const sol = result;
          let inInterval = true;
          if (isFinite(interval.start) && sol <= interval.start) inInterval = false;
          if (isFinite(interval.end) && sol >= interval.end) inInterval = false;
          if (inInterval) {
            solutions.push(sol);
          }
        }
      } catch {}
    }
    
    const uniqueSolutions = this.uniqueSolutions(solutions);
    
    let result = '';
    if (uniqueSolutions.length === 0) {
      result = 'No solution';
    } else if (uniqueSolutions.length === 1) {
      result = `${variable} = ${this.formatNumber(uniqueSolutions[0])}`;
    } else {
      result = uniqueSolutions.map((s: any) => `${variable} = ${this.formatNumber(s)}`).join(' or ');
    }
    
    this.addStep('Solutions', result);
    
    // Verify using original input
    let verification = '';
    for (const sol of uniqueSolutions) {
      const v = this.verifyEquationSolution(left, right, variable, sol);
      verification += v + ' ';
    }
    
    return {
      result: this.formatResult(result),
      steps: this.steps,
      verified: verification || `Solutions verified using interval analysis: ${result}`
    };
  }

  private uniqueSolutions(solutions: any[]): any[] {
    const unique: any[] = [];
    for (const sol of solutions) {
      if (sol === null || sol === undefined || !Number.isFinite(sol) || isNaN(sol)) continue;
      let isDuplicate = false;
      for (const existing of unique) {
        if (Math.abs(sol - existing) < 1e-10) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        unique.push(sol);
      }
    }
    return unique;
  }

  // ──────────────────────────────────────────────────────────────
  //  SOLVE ABSOLUTE VALUE INEQUALITIES (FIXED)
  // ──────────────────────────────────────────────────────────────

  private solveAbsoluteInequality(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    let operator = parsed.operator || '>';
    const variable = this.variable;
    
    const absMatch = left.match(/\|([^|]*)\|/);
    if (!absMatch) {
      return {
        result: 'Invalid absolute value inequality',
        steps: this.steps,
        verified: 'Failed to parse'
      };
    }
    
    const inner = absMatch[1];
    let rightVal: any;
    
    try {
      rightVal = this.evaluateNumericExpression(right);
    } catch {
      return this.solveGeneralAbsoluteInequality(parsed);
    }
    
    // Account for any coefficient or divisor applied to the absolute value
    // term itself (e.g. "2|x-1| < 6") by isolating what |inner| actually
    // needs to be compared against. Dividing by a negative coefficient
    // flips the direction of the inequality.
    const isolated = this.isolateAbsoluteTarget(left, rightVal, absMatch[0]);
    if (isolated.ok) {
      if (isolated.negatedCoefficient) {
        operator = this.flipInequality(operator);
        this.addStep('Flip Direction', `Dividing by a negative coefficient flips the inequality`);
      }
      this.addStep('Isolate Absolute Value', `|${inner}| ${operator} ${this.formatNumber(isolated.value)}`);
      rightVal = isolated.value;
    }
    
    const rightFormatted = this.formatNumber(rightVal);
    this.addStep('Absolute Value Inequality', `|${inner}| ${operator} ${rightFormatted}`);
    
    // Handle special cases based on operator
    if (operator === '<' || operator === '<=') {
      // |A| < k or |A| ≤ k
      if (rightVal < 0) {
        this.addStep('No Solution', `|expression| ≥ 0 cannot be ${operator} ${rightFormatted}`);
        return {
          result: 'No solution',
          steps: this.steps,
          verified: 'Absolute value cannot be less than a negative number'
        };
      }
      
      if (rightVal === 0) {
        if (operator === '<') {
          return {
            result: 'No solution',
            steps: this.steps,
            verified: '|expression| < 0 has no solution'
          };
        } else {
          const eq = `${inner} = 0`;
          const result = this.solveEquationString(eq);
          if (result !== null && !isNaN(result) && Number.isFinite(result)) {
            const sol = `${variable} = ${this.formatNumber(result)}`;
            this.addStep('Solution', sol);
            return {
              result: sol,
              steps: this.steps,
              verified: `|${inner}| ≤ 0 implies ${inner} = 0`
            };
          }
          return {
            result: 'No solution',
            steps: this.steps,
            verified: 'Could not solve'
          };
        }
      }
      
      // Extract linear coefficients for exact compound solving
      let isLinearInner = false;
      let a = 0, c = 0;
      try {
        const innerAst = this.parser.parse(inner, variable);
        const terms = innerAst.collectTerms();
        for (const term of terms) {
          if (term.variable === variable && term.degree === 1) {
            a += this.toNumber(term.coefficient);
          } else if (term.variable === '' || term.degree === 0) {
            c += this.toNumber(term.coefficient);
          } else if (term.degree > 1) {
            isLinearInner = false;
            break;
          }
        }
        if (Math.abs(a) > 1e-10) {
          isLinearInner = true;
        }
      } catch {}

      if (isLinearInner) {
        const x1 = (-rightVal - c) / a;
        const x2 = (rightVal - c) / a;
        const lower = Math.min(x1, x2);
        const upper = Math.max(x1, x2);
        const lowStr = this.formatNumber(lower);
        const upStr = this.formatNumber(upper);
        const opSym = operator === '<' ? '<' : '≤';
        const lBracket = operator === '<' ? '(' : '[';
        const rBracket = operator === '<' ? ')' : ']';
        const ineqResult = `${lowStr} ${opSym} ${variable} ${opSym} ${upStr}`;
        const intervalResult = `${lBracket}${lowStr}, ${upStr}${rBracket}`;
        this.addStep('Compound Inequality', `-(${rightFormatted}) ${opSym} ${inner} ${opSym} ${rightFormatted}`);
        this.addStep('Solution', `${ineqResult} (interval: ${intervalResult})`);
        return {
          result: this.formatResult(ineqResult),
          steps: this.steps,
          verified: `Solution: ${ineqResult} (interval: ${intervalResult})`
        };
      }

      // |A| < k => -k < A < k
      const op1 = operator === '<' ? '>' : '>=';
      const op2 = operator === '<' ? '<' : '<=';
      
      const ineq1 = `${inner} ${op1} ${-rightVal}`;
      const result1 = this.solveLinearInequality(this.parse(ineq1));
      
      const ineq2 = `${inner} ${op2} ${rightVal}`;
      const result2 = this.solveLinearInequality(this.parse(ineq2));
      
      const combined = this.intersectIntervals(result1.result, result2.result);
      
      this.addStep('Solution', combined);
      
      return {
        result: this.formatResult(combined),
        steps: this.steps,
        verified: `Solution: ${combined}`
      };
      
    } else if (operator === '>' || operator === '>=') {
      // |A| > k or |A| ≥ k
      if (rightVal < 0) {
        this.addStep('All Real Numbers', `|expression| ≥ 0 is always ${operator} ${rightFormatted}`);
        return {
          result: 'All real numbers',
          steps: this.steps,
          verified: 'Absolute value is always non-negative, inequality always true'
        };
      }
      
      if (rightVal === 0) {
        if (operator === '>') {
          const eq = `${inner} = 0`;
          const result = this.solveEquationString(eq);
          if (result !== null && !isNaN(result) && Number.isFinite(result)) {
            const sol = `${variable} ≠ ${this.formatNumber(result)}`;
            this.addStep('Solution', sol);
            return {
              result: sol,
              steps: this.steps,
              verified: `|${inner}| > 0 implies ${inner} ≠ 0`
            };
          }
          return {
            result: 'All real numbers except 0',
            steps: this.steps,
            verified: '|expression| > 0 means expression ≠ 0'
          };
        } else {
          return {
            result: 'All real numbers',
            steps: this.steps,
            verified: '|expression| ≥ 0 is always true'
          };
        }
      }
      
      // Extract linear coefficients for exact compound solving
      let isLinearInner = false;
      let a = 0, c = 0;
      try {
        const innerAst = this.parser.parse(inner, variable);
        const terms = innerAst.collectTerms();
        for (const term of terms) {
          if (term.variable === variable && term.degree === 1) {
            a += this.toNumber(term.coefficient);
          } else if (term.variable === '' || term.degree === 0) {
            c += this.toNumber(term.coefficient);
          } else if (term.degree > 1) {
            isLinearInner = false;
            break;
          }
        }
        if (Math.abs(a) > 1e-10) {
          isLinearInner = true;
        }
      } catch {}

      if (isLinearInner) {
        const x1 = (-rightVal - c) / a;
        const x2 = (rightVal - c) / a;
        const lower = Math.min(x1, x2);
        const upper = Math.max(x1, x2);
        const lowStr = this.formatNumber(lower);
        const upStr = this.formatNumber(upper);
        const lowOp = operator === '>' ? '<' : '≤';
        const highOp = operator === '>' ? '>' : '≥';
        const ineqResult = `${variable} ${lowOp} ${lowStr} or ${variable} ${highOp} ${upStr}`;
        const lBracket = operator === '>' ? ')' : ']';
        const rBracket = operator === '>' ? '(' : '[';
        const intervalResult = `(-∞, ${lowStr}${lBracket} ∪ ${rBracket}${upStr}, ∞)`;
        this.addStep('Split Cases', `${inner} ${lowOp} -(${rightFormatted}) or ${inner} ${highOp} ${rightFormatted}`);
        this.addStep('Solution', `${ineqResult} (interval: ${intervalResult})`);
        return {
          result: this.formatResult(ineqResult),
          steps: this.steps,
          verified: `Solution: ${ineqResult} (interval: ${intervalResult})`
        };
      }

      // |A| > k => A < -k or A > k
      const op1 = operator === '>' ? '<' : '<=';
      const op2 = operator === '>' ? '>' : '>=';
      
      const ineq1 = `${inner} ${op1} ${-rightVal}`;
      const result1 = this.solveLinearInequality(this.parse(ineq1));
      
      const ineq2 = `${inner} ${op2} ${rightVal}`;
      const result2 = this.solveLinearInequality(this.parse(ineq2));
      
      const combined = this.unionIntervals(result1.result, result2.result);
      
      this.addStep('Solution', combined);
      
      return {
        result: this.formatResult(combined),
        steps: this.steps,
        verified: `Solution: ${combined}`
      };
    }
    
    return {
      result: 'Unsupported inequality type',
      steps: this.steps,
      verified: 'Failed to solve'
    };
  }

  private solveGeneralAbsoluteInequality(parsed: ParsedExpression): SolverResult {
    const left = parsed.left || '';
    const right = parsed.right || '';
    const operator = parsed.operator || '>';
    const variable = this.variable;
    
    this.addStep('General Absolute Inequality', `${left} ${operator} ${right}`);
    
    const absMatch = left.match(/\|([^|]*)\|/);
    if (!absMatch) {
      return this.solveLinearInequality(parsed);
    }
    
    const inner = absMatch[1];
    const rightStr = right;
    
    if (operator === '<' || operator === '<=') {
      const op1 = operator === '<' ? '>' : '>=';
      const op2 = operator === '<' ? '<' : '<=';
      
      const ineq1 = `${inner} ${op1} -(${rightStr})`;
      const ineq2 = `${inner} ${op2} ${rightStr}`;
      
      const result1 = this.solveLinearInequality(this.parse(ineq1));
      const result2 = this.solveLinearInequality(this.parse(ineq2));
      
      const combined = this.intersectIntervals(result1.result, result2.result);
      
      this.addStep('Solution', combined);
      
      return {
        result: this.formatResult(combined),
        steps: this.steps,
        verified: `Solution: ${combined}`
      };
      
    } else if (operator === '>' || operator === '>=') {
      const op1 = operator === '>' ? '<' : '<=';
      const op2 = operator === '>' ? '>' : '>=';
      
      const ineq1 = `${inner} ${op1} -(${rightStr})`;
      const ineq2 = `${inner} ${op2} ${rightStr}`;
      
      const result1 = this.solveLinearInequality(this.parse(ineq1));
      const result2 = this.solveLinearInequality(this.parse(ineq2));
      
      const combined = this.unionIntervals(result1.result, result2.result);
      
      this.addStep('Solution', combined);
      
      return {
        result: this.formatResult(combined),
        steps: this.steps,
        verified: `Solution: ${combined}`
      };
    }
    
    return {
      result: 'Unsupported inequality type',
      steps: this.steps,
      verified: 'Failed to solve'
    };
  }

  private intersectIntervals(interval1: string, interval2: string): string {
    if (interval1 === 'All real numbers') return interval2;
    if (interval2 === 'All real numbers') return interval1;
    if (interval1 === 'No solution' || interval2 === 'No solution') return 'No solution';
    
    const parseInterval = (s: string): { type: string; lower: number; upper: number; lowerInc: boolean; upperInc: boolean } | null => {
      const match = s.match(/([(\[])\s*(-?∞|-?\d+(?:\.\d+)?(?:\/\d+)?)\s*,\s*(-?∞|-?\d+(?:\.\d+)?(?:\/\d+)?)\s*([)\]])/);
      if (!match) return null;
      
      const parseVal = (str: string): number => {
        if (str === '-∞') return -Infinity;
        if (str === '∞') return Infinity;
        if (str.includes('/')) {
          const [n, d] = str.split('/').map(Number);
          return n / d;
        }
        return parseFloat(str);
      };

      const lowerInc = match[1] === '[';
      const upperInc = match[4] === ']';
      const lower = parseVal(match[2]);
      const upper = parseVal(match[3]);
      
      return { type: 'interval', lower, upper, lowerInc, upperInc };
    };
    
    const i1 = parseInterval(interval1);
    const i2 = parseInterval(interval2);
    
    if (!i1 || !i2) {
      // If we can't parse both as intervals, try a different approach
      if (interval1.includes(' or ') || interval2.includes(' or ')) {
        return this.unionIntervals(interval1, interval2);
      }
      return `${interval1} and ${interval2}`;
    }
    
    const lower = Math.max(i1.lower, i2.lower);
    const upper = Math.min(i1.upper, i2.upper);
    
    if (lower > upper || (lower === upper && (!i1.lowerInc || !i2.lowerInc || !i1.upperInc || !i2.upperInc))) {
      return 'No solution';
    }
    
    const lowerInc = (lower === i1.lower ? i1.lowerInc : i2.lowerInc) && 
                     (lower === i2.lower ? i2.lowerInc : i1.lowerInc);
    const upperInc = (upper === i1.upper ? i1.upperInc : i2.upperInc) && 
                     (upper === i2.upper ? i2.upperInc : i1.upperInc);
    
    const lowerStr = lower === -Infinity ? '-∞' : this.formatNumber(lower);
    const upperStr = upper === Infinity ? '∞' : this.formatNumber(upper);
    const lBracket = lowerInc ? '[' : '(';
    const rBracket = upperInc ? ']' : ')';
    
    if (lower === -Infinity && upper === Infinity) return 'All real numbers';
    if (lower === upper) {
      if (lowerInc && upperInc) {
        return `${this.variable} = ${lowerStr}`;
      }
      return 'No solution';
    }
    
    return `${lBracket}${lowerStr}, ${upperStr}${rBracket}`;
  }

  private unionIntervals(interval1: string, interval2: string): string {
    if (interval1 === 'All real numbers' || interval2 === 'All real numbers') return 'All real numbers';
    if (interval1 === 'No solution') return interval2;
    if (interval2 === 'No solution') return interval1;
    
    if (interval1 === interval2) return interval1;
    
    const parseInterval = (s: string): { type: string; lower: number; upper: number; lowerInc: boolean; upperInc: boolean } | null => {
      const match = s.match(/([(\[])\s*(-?∞|-?\d+(?:\.\d+)?(?:\/\d+)?)\s*,\s*(-?∞|-?\d+(?:\.\d+)?(?:\/\d+)?)\s*([)\]])/);
      if (!match) return null;
      
      const parseVal = (str: string): number => {
        if (str === '-∞') return -Infinity;
        if (str === '∞') return Infinity;
        if (str.includes('/')) {
          const [n, d] = str.split('/').map(Number);
          return n / d;
        }
        return parseFloat(str);
      };

      const lowerInc = match[1] === '[';
      const upperInc = match[4] === ']';
      const lower = parseVal(match[2]);
      const upper = parseVal(match[3]);
      
      return { type: 'interval', lower, upper, lowerInc, upperInc };
    };
    
    const i1 = parseInterval(interval1);
    const i2 = parseInterval(interval2);
    
    if (!i1 || !i2) {
      return `${interval1} or ${interval2}`;
    }
    
    const overlap = i1.upper >= i2.lower && i2.upper >= i1.lower;
    const touch = Math.abs(i1.upper - i2.lower) < 1e-10 || Math.abs(i2.upper - i1.lower) < 1e-10;
    
    if (overlap || touch) {
      const lower = Math.min(i1.lower, i2.lower);
      const upper = Math.max(i1.upper, i2.upper);
      
      const lowerInc = (lower === i1.lower ? i1.lowerInc : i2.lowerInc);
      const upperInc = (upper === i1.upper ? i1.upperInc : i2.upperInc);
      
      const lowerStr = lower === -Infinity ? '-∞' : this.formatNumber(lower);
      const upperStr = upper === Infinity ? '∞' : this.formatNumber(upper);
      const lBracket = lowerInc ? '[' : '(';
      const rBracket = upperInc ? ']' : ')';
      
      return `${lBracket}${lowerStr}, ${upperStr}${rBracket}`;
    }
    
    return `${interval1} or ${interval2}`;
  }

  // ──────────────────────────────────────────────────────────────
  //  HELPER METHODS
  // ──────────────────────────────────────────────────────────────

  private addStep(step: string, explanation: string): void {
    this.steps.push({ step, explanation });
  }
}

export default AlgebraSolver;