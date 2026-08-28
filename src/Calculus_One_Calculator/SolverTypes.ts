// SolverTypes.ts — Shared interfaces for all Calculus solvers

export interface SolverStep {
  title: string;
  expression?: string;
  explanation?: string;
}

export interface GraphPoint {
  x: number;
  y: number;
}

export interface GraphHighlight {
  x: number;
  y: number;
  label: string;
  color?: string;
}

export interface GraphCurve {
  points: GraphPoint[];
  label: string;
  color?: string;
}

export interface GraphData {
  type?: 'function' | 'scatter' | 'interval' | 'area';
  points: GraphPoint[];
  equation: string;
  xMin: number;
  xMax: number;
  yMin?: number;
  yMax?: number;
  additionalCurves?: GraphCurve[];
  highlights?: GraphHighlight[];
  shadedRegion?: { from: number; to: number; label?: string };
}

export interface SolverResult {
  success: boolean;
  answer: string;
  summary?: string;
  steps: SolverStep[];
  explanation?: string;
  verification?: string;
  graph?: GraphData;
  error?: string;
}

export type SolverFunction = (input: string) => SolverResult;

export function errorResult(msg: string): SolverResult {
  return {
    success: false,
    answer: '',
    steps: [],
    error: msg,
  };
}
