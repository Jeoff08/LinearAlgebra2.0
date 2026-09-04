// Solver/LineEquationSolver.ts — Finds slope, point-slope, slope-intercept, and standard forms of a line
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { generateGraphPoints } from '../Calculus_One_Calculator/Utils/calculusUtils';
import { formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveLineEquation(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter two points or a slope and point. Examples:\n' +
      '• "(1, 2) and (3, 6)"\n' +
      '• "m = 2 through (1, 3)"\n' +
      '• "2x + 3y = 6"'
    );
  }

  const steps: SolverStep[] = [];

  // Check 1: Two points (x1, y1) and (x2, y2)
  const pointMatches = [...trimmed.matchAll(/\(?\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)\s*\)?/g)];
  if (pointMatches.length >= 2) {
    const x1 = parseFloat(pointMatches[0][1]);
    const y1 = parseFloat(pointMatches[0][2]);
    const x2 = parseFloat(pointMatches[1][1]);
    const y2 = parseFloat(pointMatches[1][2]);

    if (x1 === x2) {
      // Vertical line
      return {
        success: true,
        answer: `x = ${x1} (Vertical Line, Slope Undefined)`,
        summary: `Vertical line equation passing through x = ${x1}.`,
        steps: [
          {
            title: '1. Slope Calculation (Vertical Line)',
            expression: `m = (${y2} - ${y1}) / (${x2} - ${x1}) = ${y2 - y1} / 0 (Undefined)`,
            explanation: 'The change in x is zero (Δx = 0), which means the slope is undefined and the line is vertical.',
          },
          {
            title: '2. Standard Form',
            expression: `x = ${x1}`,
            explanation: 'All points on this line have an x-coordinate of ' + x1 + '.',
          },
        ],
        explanation: 'Vertical lines have an undefined slope and equations of the form x = c.',
      };
    }

    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;

    steps.push({
      title: '1. Compute the Slope (m)',
      expression: `m = (y₂ - y₁) / (x₂ - x₁)\n  = (${y2} - ${y1}) / (${x2} - ${x1})\n  = ${y2 - y1} / ${x2 - x1} = ${formatNumber(m)}`,
      explanation: 'Slope measures the rate of change or steepness (rise over run).',
    });

    steps.push({
      title: '2. Point-Slope Form',
      expression: `y - y₁ = m(x - x₁)\ny - (${y1}) = ${formatNumber(m)}(x - (${x1}))`,
      explanation: 'Substitute slope m and point (x₁, y₁) into the point-slope formula.',
    });

    steps.push({
      title: '3. Slope-Intercept Form (y = mx + b)',
      expression: `y = ${formatNumber(m)}x ${b >= 0 ? `+ ${formatNumber(b)}` : `- ${formatNumber(Math.abs(b))}`}`,
      explanation: `Expand and solve for y to find the y-intercept b = ${formatNumber(b)}.`,
    });

    const bSign = b >= 0 ? `+ ${formatNumber(b)}` : `- ${formatNumber(Math.abs(b))}`;
    const slopeInterceptEq = `y = ${formatNumber(m)}x ${bSign}`;
    const points = generateGraphPoints(`${m}*x + ${b}`, -10, 10, 100);

    return {
      success: true,
      answer: slopeInterceptEq,
      summary: `Slope m = ${formatNumber(m)}, y-intercept b = ${formatNumber(b)}.`,
      steps,
      explanation: 'The equation of a straight line uniquely determines its geometric path on the Cartesian plane.',
      graph: {
        points,
        equation: slopeInterceptEq,
        xMin: -10,
        xMax: 10,
        highlights: [
          { x: x1, y: y1, label: `(${x1}, ${y1})` },
          { x: x2, y: y2, label: `(${x2}, ${y2})` },
        ],
      },
    };
  }

  // Check 2: Standard form Ax + By = C
  const stdMatch = trimmed.match(/([+-]?\d*(?:\.\d+)?)?\s*\*?\s*x\s*([+-]\s*\d*(?:\.\d+)?)?\s*\*?\s*y\s*=\s*([+-]?\d+(?:\.\d+)?)/i);
  if (stdMatch) {
    const aRaw = stdMatch[1];
    const a = aRaw === '' || aRaw === '+' || aRaw === undefined ? 1 : aRaw === '-' ? -1 : parseFloat(aRaw);
    const bRaw = stdMatch[2]?.replace(/\s+/g, '');
    const bCoeff = bRaw === '' || bRaw === '+' || bRaw === undefined ? 1 : bRaw === '-' ? -1 : parseFloat(bRaw);
    const c = parseFloat(stdMatch[3]);

    if (bCoeff !== 0) {
      const m = -a / bCoeff;
      const yInt = c / bCoeff;
      const xInt = a !== 0 ? c / a : 0;

      steps.push({
        title: '1. Isolate y to Obtain Slope-Intercept Form',
        expression: `${bCoeff}y = -${a}x + ${c}\ny = (${-a}/${bCoeff})x + (${c}/${bCoeff})\ny = ${formatNumber(m)}x ${yInt >= 0 ? `+ ${formatNumber(yInt)}` : `- ${formatNumber(Math.abs(yInt))}`}`,
        explanation: 'Convert standard form Ax + By = C to slope-intercept form y = mx + b.',
      });

      steps.push({
        title: '2. Intercepts Calculation',
        expression: `y-intercept (set x=0): (0, ${formatNumber(yInt)})\nx-intercept (set y=0): (${formatNumber(xInt)}, 0)`,
        explanation: 'The intercepts are the points where the line crosses the coordinate axes.',
      });

      const slopeInterceptEq = `y = ${formatNumber(m)}x ${yInt >= 0 ? `+ ${formatNumber(yInt)}` : `- ${formatNumber(Math.abs(yInt))}`}`;
      const points = generateGraphPoints(`${m}*x + ${yInt}`, -10, 10, 100);

      return {
        success: true,
        answer: slopeInterceptEq,
        summary: `Slope m = ${formatNumber(m)}, Intercepts: (0, ${formatNumber(yInt)}) & (${formatNumber(xInt)}, 0)`,
        steps,
        explanation: 'Linear equations represent lines with constant rate of change.',
        graph: {
          points,
          equation: slopeInterceptEq,
          xMin: -10,
          xMax: 10,
          highlights: [
            { x: 0, y: yInt, label: `y-int (0, ${formatNumber(yInt)})` },
            { x: xInt, y: 0, label: `x-int (${formatNumber(xInt)}, 0)` },
          ],
        },
      };
    }
  }

  return errorResult('Please provide two points e.g. "(1, 2) and (3, 6)" or an equation e.g. "2x + 3y = 6".');
}
