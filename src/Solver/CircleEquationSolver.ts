// Solver/CircleEquationSolver.ts — Finds center, radius, and standard form of circles
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveCircleEquation(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter a circle problem. Examples:\n' +
      '• "center (2, -3) and radius 5"\n' +
      '• "(x - 1)^2 + (y + 2)^2 = 16"\n' +
      '• "x^2 + y^2 - 4x + 6y - 12 = 0"'
    );
  }

  const steps: SolverStep[] = [];

  // 1. Check center and radius format: e.g. "center (2, -3) and radius 5"
  const centerRadiusMatch = trimmed.match(/center\s*\(?\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)\s*\)?\s*(?:and|,)?\s*radius\s*([+-]?\d+(?:\.\d+)?)/i);
  if (centerRadiusMatch) {
    const h = parseFloat(centerRadiusMatch[1]);
    const k = parseFloat(centerRadiusMatch[2]);
    const r = parseFloat(centerRadiusMatch[3]);

    const rSq = r * r;
    const hSign = h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`;
    const kSign = k >= 0 ? `- ${k}` : `+ ${Math.abs(k)}`;
    const stdEq = `(x ${hSign})² + (y ${kSign})² = ${rSq}`;

    steps.push({
      title: '1. Standard Form Equation of a Circle',
      expression: `(x - h)² + (y - k)² = r²`,
      explanation: 'The standard form defines all points (x, y) at distance r from center (h, k).',
    });

    steps.push({
      title: '2. Substitute Center and Radius Values',
      expression: `h = ${h}, k = ${k}, r = ${r}\n(x - (${h}))² + (y - (${k}))² = (${r})²\n${stdEq}`,
      explanation: `Square the radius to obtain r² = ${rSq}.`,
    });

    return {
      success: true,
      answer: stdEq,
      summary: `Circle centered at (${h}, ${k}) with radius r = ${r} and diameter d = ${2 * r}.`,
      steps,
      explanation: 'A circle is the locus of points in a plane equidistant from a fixed center point.',
    };
  }

  // 2. Check Standard Form: (x - h)^2 + (y - k)^2 = r^2
  const stdMatch = trimmed.match(/\(x\s*([+-]\s*\d+(?:\.\d+)?)\)\^?2\s*\+\s*\(y\s*([+-]\s*\d+(?:\.\d+)?)\)\^?2\s*=\s*([0-9.+-]+)/i);
  if (stdMatch) {
    const hVal = -parseFloat(stdMatch[1].replace(/\s+/g, ''));
    const kVal = -parseFloat(stdMatch[2].replace(/\s+/g, ''));
    const rSq = parseFloat(stdMatch[3]);
    const r = Math.sqrt(Math.max(0, rSq));

    steps.push({
      title: '1. Match with Standard Form (x - h)² + (y - k)² = r²',
      expression: `(x - (${hVal}))² + (y - (${kVal}))² = ${rSq}`,
      explanation: 'Extract center coordinates h and k by inverting the signs inside parentheses.',
    });

    steps.push({
      title: '2. Compute the Radius',
      expression: `r = √(${rSq}) = ${formatNumber(r)}`,
      explanation: 'Take the principal square root of the right-hand constant.',
    });

    return {
      success: true,
      answer: `Center: (${hVal}, ${kVal})  |  Radius: r = ${formatNumber(r)}`,
      summary: `Center (${hVal}, ${kVal}), Radius r = ${formatNumber(r)}, Area = ${(Math.PI * rSq).toFixed(2)}, Circumference = ${(2 * Math.PI * r).toFixed(2)}`,
      steps,
      explanation: 'The standard form directly gives the center coordinates and radius.',
    };
  }

  // 3. General form: x^2 + y^2 + Dx + Ey + F = 0
  const genMatch = trimmed.match(/x\^?2\s*\+\s*y\^?2\s*([+-]\s*\d*(?:\.\d+)?)\s*\*?\s*x\s*([+-]\s*\d*(?:\.\d+)?)\s*\*?\s*y\s*([+-]\s*\d+(?:\.\d+)?)\s*=\s*0/i);
  if (genMatch) {
    const dRaw = genMatch[1].replace(/\s+/g, '');
    const eRaw = genMatch[2].replace(/\s+/g, '');
    const f = parseFloat(genMatch[3].replace(/\s+/g, ''));

    const D = dRaw === '' || dRaw === '+' ? 1 : dRaw === '-' ? -1 : parseFloat(dRaw);
    const E = eRaw === '' || eRaw === '+' ? 1 : eRaw === '-' ? -1 : parseFloat(eRaw);

    const h = -D / 2;
    const k = -E / 2;
    const rSq = h * h + k * k - f;
    const r = Math.sqrt(Math.max(0, rSq));

    steps.push({
      title: '1. Group x and y Terms & Move Constant',
      expression: `(x² ${D >= 0 ? `+ ${D}` : `- ${Math.abs(D)}`}x) + (y² ${E >= 0 ? `+ ${E}` : `- ${Math.abs(E)}`}y) = ${-f}`,
      explanation: 'Prepare each quadratic group for completing the square.',
    });

    steps.push({
      title: '2. Complete the Square for x and y',
      expression: `Add (${D}/2)² = ${h * h} to both sides for x\nAdd (${E}/2)² = ${k * k} to both sides for y\n(x - (${h}))² + (y - (${k}))² = ${-f} + ${h * h} + ${k * k} = ${formatNumber(rSq)}`,
      explanation: 'Completing the square converts general polynomial form into center-radius standard form.',
    });

    const stdEq = `(x ${h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`})² + (y ${k >= 0 ? `- ${k}` : `+ ${Math.abs(k)}`})² = ${formatNumber(rSq)}`;

    return {
      success: true,
      answer: `Center: (${formatNumber(h)}, ${formatNumber(k)})  |  Radius: r = ${formatNumber(r)}`,
      summary: `Standard Form: ${stdEq}  (Center: (${formatNumber(h)}, ${formatNumber(k)}), r = ${formatNumber(r)})`,
      steps,
      explanation: 'Completing the square reveals the geometric center and radius of the circle.',
    };
  }

  return errorResult('Please enter circle details e.g. "center (2, -3) and radius 5" or "(x - 1)^2 + (y + 2)^2 = 16".');
}
