// Solver/DistanceMidpointSolver.ts — Calculates distance and midpoint between two 2D points
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveDistanceMidpoint(input: string): SolverResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return errorResult(
      'Please enter two coordinate points. Examples:\n' +
      '• "(1, 2) and (4, 6)"\n' +
      '• "(-3, 5), (2, -7)"\n' +
      '• "P(0, 0), Q(6, 8)"'
    );
  }

  // Parse 2 coordinate pairs: (x1, y1) and (x2, y2)
  const matches = [...trimmed.matchAll(/\(?\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)\s*\)?/g)];
  if (matches.length < 2) {
    return errorResult('Please provide two valid coordinate points in the format "(x1, y1) and (x2, y2)".');
  }

  const x1 = parseFloat(matches[0][1]);
  const y1 = parseFloat(matches[0][2]);
  const x2 = parseFloat(matches[1][1]);
  const y2 = parseFloat(matches[1][2]);

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distSq = dx * dx + dy * dy;
  const dist = Math.sqrt(distSq);

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const steps: SolverStep[] = [];

  steps.push({
    title: '1. Identify Given Coordinate Points',
    expression: `Point A: (${x1}, ${y1})\nPoint B: (${x2}, ${y2})`,
    explanation: 'Extract coordinate values (x₁, y₁) and (x₂, y₂).',
  });

  steps.push({
    title: '2. Distance Formula Application',
    expression: `d = √[ (x₂ - x₁)² + (y₂ - y₁)² ]\n  = √[ (${x2} - ${x1})² + (${y2} - ${y1})² ]\n  = √[ (${dx})² + (${dy})² ]\n  = √[ ${dx * dx} + ${dy * dy} ]\n  = √${distSq} ≈ ${formatNumber(dist)}`,
    explanation: 'The Pythagorean Distance Theorem calculates straight-line Euclidean distance between two points.',
  });

  steps.push({
    title: '3. Midpoint Formula Application',
    expression: `M = ( (x₁ + x₂)/2, (y₁ + y₂)/2 )\n  = ( (${x1} + ${x2})/2, (${y1} + ${y2})/2 )\n  = (${formatNumber(midX)}, ${formatNumber(midY)})`,
    explanation: 'The midpoint is the arithmetic average of the x-coordinates and y-coordinates.',
  });

  return {
    success: true,
    answer: `Distance d = ${formatNumber(dist)} (√${distSq})  |  Midpoint M = (${formatNumber(midX)}, ${formatNumber(midY)})`,
    summary: `Distance: ${formatNumber(dist)}, Midpoint: (${formatNumber(midX)}, ${formatNumber(midY)})`,
    steps,
    explanation: 'Distance and midpoint are fundamental geometric formulas connecting algebra and the Cartesian coordinate plane.',
  };
}
