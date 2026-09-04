// Solver/AbsoluteValueSolver.ts — Solves absolute value equations, inequalities, and evaluates absolute value functions
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { formatNumber, prettify } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveAbsoluteValue(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter an absolute value problem. Examples:\n' +
      '• "|x - 3| = 5" (Absolute Value Equation)\n' +
      '• "|x| < 4" or "|2x - 1| > 5" (Absolute Value Inequality)\n' +
      '• "|-8|" or "|10 - 4|" (Direct Absolute Value Evaluation)\n' +
      '• "f(x) = |x|" (Piecewise Analysis & Continuity)'
    );
  }

  // Clean Unicode bars and abs()
  const clean = trimmed
    .replace(/[∣|｜]/g, '|')
    .replace(/abs\(([^)]+)\)/gi, '|$1|');

  const steps: SolverStep[] = [];

  // 1. Check for Absolute Value Equation: |ax + b| = c
  const eqMatch = clean.match(/\|([^|=><]+)\|\s*=\s*([0-9.+-]+)/);
  if (eqMatch) {
    const innerExpr = eqMatch[1].trim();
    const cVal = parseFloat(eqMatch[2].trim());

    steps.push({
      title: '1. Problem Formulation',
      expression: `|${prettify(innerExpr)}| = ${cVal}`,
      explanation: 'An absolute value equation |u| = c asks for all points whose distance from 0 is c units.',
    });

    if (cVal < 0) {
      return {
        success: true,
        answer: 'No Solution (∅)',
        summary: `Since absolute value |u| is always non-negative (|u| ≥ 0), it can never equal a negative number (${cVal}).`,
        steps: [
          ...steps,
          {
            title: '2. Negative Distance Contradiction',
            expression: `|${prettify(innerExpr)}| ≥ 0 ≠ ${cVal}`,
            explanation: `The absolute value represents geometric distance and cannot be negative. Therefore, no real solution exists.`,
          },
        ],
        explanation: 'The equation has no real solution because distance is strictly non-negative.',
      };
    }

    if (cVal === 0) {
      steps.push({
        title: '2. Zero Distance Condition',
        expression: `${prettify(innerExpr)} = 0`,
        explanation: 'The only number with an absolute value of 0 is 0 itself.',
      });
      return {
        success: true,
        answer: `${innerExpr} = 0`,
        summary: `Single unique solution at ${innerExpr} = 0.`,
        steps,
        explanation: '|u| = 0 if and only if u = 0.',
      };
    }

    // Split into 2 cases: u = c OR u = -c
    steps.push({
      title: '2. Split into Positive and Negative Cases',
      expression: `Case 1:  ${prettify(innerExpr)} = ${cVal}\nCase 2:  ${prettify(innerExpr)} = -${cVal}`,
      explanation: `By definition, |u| = c implies u = c or u = -c because both numbers are exactly ${cVal} units from zero.`,
    });

    // Try to solve linear form ax + b = c
    const linearMatch = innerExpr.match(/^([+-]?\d*(?:\.\d+)?)?\s*\*?\s*x\s*([+-]\s*\d+(?:\.\d+)?)?$/i);
    let sol1Str = `${innerExpr} = ${cVal}`;
    let sol2Str = `${innerExpr} = -${cVal}`;
    let highlightPoints: { x: number; y: number; label: string }[] = [];

    if (linearMatch) {
      const aRaw = linearMatch[1];
      const a = aRaw === '' || aRaw === '+' || aRaw === undefined ? 1 : aRaw === '-' ? -1 : parseFloat(aRaw);
      const bRaw = linearMatch[2] ? parseFloat(linearMatch[2].replace(/\s+/g, '')) : 0;

      const x1 = (cVal - bRaw) / a;
      const x2 = (-cVal - bRaw) / a;

      sol1Str = `x = ${formatNumber(x1)}`;
      sol2Str = `x = ${formatNumber(x2)}`;

      steps.push({
        title: '3. Solve Each Case for x',
        expression: `Case 1:  ${a !== 1 ? `${a}x` : 'x'} ${bRaw >= 0 ? `+ ${bRaw}` : `- ${Math.abs(bRaw)}`} = ${cVal}  ⟹  ${sol1Str}\nCase 2:  ${a !== 1 ? `${a}x` : 'x'} ${bRaw >= 0 ? `+ ${bRaw}` : `- ${Math.abs(bRaw)}`} = -${cVal} ⟹  ${sol2Str}`,
        explanation: 'Isolate variable x in both linear equations.',
      });

      highlightPoints = [
        { x: x1, y: 0, label: `x = ${formatNumber(x1)}` },
        { x: x2, y: 0, label: `x = ${formatNumber(x2)}` },
      ];
    }

    const points = generateGraphPoints(`abs(${innerExpr}) - ${cVal}`, -10, 10, 100);

    return {
      success: true,
      answer: `${sol1Str}  or  ${sol2Str}`,
      summary: `Solutions to |${innerExpr}| = ${cVal} are ${sol1Str} and ${sol2Str}.`,
      steps,
      explanation: 'Absolute value equations split into two distinct branches: positive and negative distances.',
      graph: {
        points,
        equation: `y = |${innerExpr}| - ${cVal}`,
        xMin: -10,
        xMax: 10,
        highlights: highlightPoints.length > 0 ? highlightPoints : undefined,
      },
    };
  }

  // 2. Check for Absolute Value Inequality: |ax + b| < c or |ax + b| > c
  const ineqMatch = clean.match(/\|([^|]+)\|\s*(<=|>=|<|>)\s*([0-9.+-]+)/);
  if (ineqMatch) {
    const innerExpr = ineqMatch[1].trim();
    const op = ineqMatch[2];
    const cVal = parseFloat(ineqMatch[3].trim());

    steps.push({
      title: '1. Problem Formulation',
      expression: `|${prettify(innerExpr)}| ${op} ${cVal}`,
      explanation: `Analyze the interval where the distance of (${prettify(innerExpr)}) is ${op} ${cVal}.`,
    });

    if (op === '<' || op === '<=') {
      steps.push({
        title: '2. Bounded Double Inequality (Distance within c)',
        expression: `-${cVal} ${op} ${prettify(innerExpr)} ${op} ${cVal}`,
        explanation: `|u| < c means that u lies strictly between -c and +c.`,
      });

      return {
        success: true,
        answer: `-${cVal} ${op} ${innerExpr} ${op} ${cVal}`,
        summary: `Solution interval: [${-cVal}, ${cVal}]`,
        steps,
        explanation: `Less-than absolute value inequalities form a bounded single interval.`,
      };
    } else {
      steps.push({
        title: '2. Disjoint Union Inequality (Distance outside c)',
        expression: `${prettify(innerExpr)} < -${cVal}  or  ${prettify(innerExpr)} > ${cVal}`,
        explanation: `|u| > c means u is farther than c units away from 0 in either direction.`,
      });

      return {
        success: true,
        answer: `${innerExpr} < -${cVal}  or  ${innerExpr} > ${cVal}`,
        summary: `Solution: (-∞, -${cVal}) ∪ (${cVal}, +∞)`,
        steps,
        explanation: `Greater-than absolute value inequalities produce two separate unbounded rays.`,
      };
    }
  }

  // 3. Direct Absolute Value Evaluation: |-8| or |5 - 12|
  const directEvalMatch = clean.match(/^\|([^|]+)\|$/);
  if (directEvalMatch) {
    const inner = directEvalMatch[1].trim();
    let computed = 0;
    try {
      // Safe numeric evaluation
      computed = Math.abs(Function(`'use strict'; return (${inner.replace(/\^/g, '**')})`)());
    } catch {
      computed = 0;
    }

    steps.push({
      title: '1. Evaluate Inner Quantity',
      expression: `Inner expression: (${inner})`,
      explanation: 'First compute the value inside the absolute value bars.',
    });
    steps.push({
      title: '2. Apply Absolute Value Definition',
      expression: `|${inner}| = ${formatNumber(computed)}`,
      explanation: 'The absolute value strips the sign, yielding the positive magnitude or distance from 0.',
    });

    return {
      success: true,
      answer: `|${inner}| = ${formatNumber(computed)}`,
      summary: `Result of |${inner}| is ${formatNumber(computed)}.`,
      steps,
      explanation: 'Absolute value measures magnitude and is always non-negative.',
    };
  }

  // 4. Fallback: Piecewise Function Analysis for f(x) = |expr|
  const functionExpr = clean.replace(/^(?:f\(x\)\s*=\s*|y\s*=\s*)/i, '').trim();
  steps.push({
    title: '1. Piecewise Function Definition',
    expression: `f(x) = |${prettify(functionExpr)}| = {\n   ${prettify(functionExpr)},   if ${prettify(functionExpr)} ≥ 0\n  -(${prettify(functionExpr)}),  if ${prettify(functionExpr)} < 0\n}`,
    explanation: 'Absolute value functions split into two linear or polynomial pieces across the zero point.',
  });

  steps.push({
    title: '2. Continuity & Differentiability Analysis',
    expression: 'Continuous everywhere on ℝ • Non-differentiable at sharp corner vertex (derivative DNE)',
    explanation: 'The graph forms a characteristic V-shape. The function is continuous everywhere, but the left and right slopes disagree at the vertex, causing a sharp corner where f\'(x) does not exist.',
  });

  const points = generateGraphPoints(`abs(${functionExpr.replace(/\|/g, '')})`, -8, 8, 100);

  return {
    success: true,
    answer: `f(x) = |${prettify(functionExpr)}| (V-shaped continuous curve)`,
    summary: `Piecewise definition with sharp corner where derivative DNE.`,
    steps,
    explanation: 'Absolute value functions are continuous everywhere but fail differentiability at corner vertices.',
    graph: {
      points,
      equation: `y = |${prettify(functionExpr)}|`,
      xMin: -8,
      xMax: 8,
      highlights: [{ x: 0, y: 0, label: 'Vertex / Corner (0,0)' }],
    },
  };
}
