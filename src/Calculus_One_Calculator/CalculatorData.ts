// CalculatorData.ts — Menu, metadata, and routing registry for all 29 Calculus calculators
import type { ComponentType } from 'react';
import {
  Calculator,
  Activity,
  TrendingUp,
  Layers,
  Sparkles,
  Zap,
  BookOpen,
  Hash,
  Compass,
  Maximize2,
  RefreshCw,
  Box,
  Circle,
  Shapes,
  Sliders,
  Target,
  BarChart2,
  RotateCw,
  PieChart,
  Repeat,
  Sigma,
  GitBranch,
} from 'lucide-react';
import type { SolverFunction } from './SolverTypes';

// Import all 29 independent solvers from src/Solver/
import { solveLimit } from '../Solver/LimitSolver';
import { solveContinuity } from '../Solver/ContinuitySolver';
import { solveDerivative } from '../Solver/DerivativeSolver';
import { solveProductRule } from '../Solver/ProductRuleSolver';
import { solveQuotientRule } from '../Solver/QuotientRuleSolver';
import { solveChainRule } from '../Solver/ChainRuleSolver';
import { solveImplicitDifferentiation } from '../Solver/ImplicitDifferentiationSolver';
import { solveHigherOrderDerivatives } from '../Solver/HigherOrderDerivativesSolver';
import { solveRelatedRates } from '../Solver/RelatedRatesSolver';
import { solveCriticalPoints } from '../Solver/CriticalPointsSolver';
import { solveIncreasingDecreasing } from '../Solver/IncreasingDecreasingSolver';
import { solveConcavity } from '../Solver/ConcavitySolver';
import { solveOptimization } from '../Solver/OptimizationSolver';
import { solveCurveAnalysis } from '../Solver/CurveAnalysisSolver';
import { solveAntiderivative } from '../Solver/AntiderivativeSolver';
import { solveDefiniteIntegral } from '../Solver/DefiniteIntegralSolver';
import { solveFundamentalTheorem } from '../Solver/FundamentalTheoremSolver';
import { solveSubstitution } from '../Solver/SubstitutionSolver';
import { solveAreaBetweenCurves } from '../Solver/AreaBetweenCurvesSolver';
import { solveVolume } from '../Solver/VolumeSolver';
import { solveIntegrationByParts } from '../Solver/IntegrationByPartsSolver';
import { solveTrigonometricIntegration } from '../Solver/TrigonometricIntegrationSolver';
import { solveTrigonometricSubstitution } from '../Solver/TrigonometricSubstitutionSolver';
import { solvePartialFractions } from '../Solver/PartialFractionsSolver';
import { solveImproperIntegral } from '../Solver/ImproperIntegralSolver';
import { solveSequences } from '../Solver/SequencesSolver';
import { solveInfiniteSeries } from '../Solver/InfiniteSeriesSolver';
import { solvePowerSeries } from '../Solver/PowerSeriesSolver';
import { solveTaylorMaclaurin } from '../Solver/TaylorMaclaurinSeriesSolver';

export interface CalculatorDefinition {
  id: string;
  name: string;
  description: string;
  category: 'Calculus 1' | 'Calculus 2';
  categoryLabel: string;
  solverType: string;
  example: string;
  placeholder: string;
  badge?: string;
  icon: ComponentType<{ className?: string }>;
}

export const CALCULATOR_DEFINITIONS: CalculatorDefinition[] = [
  // ==========================================
  // CALCULUS 1 SOLVERS (1-17)
  // ==========================================
  {
    id: 'limit',
    name: 'Limits Evaluator',
    description: 'Calculate two-sided, one-sided, infinite, and indeterminate limits using direct substitution, factoring, and L\'Hôpital\'s rule.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Limits',
    solverType: 'limit',
    example: '(x^2 - 1)/(x - 1) as x -> 1',
    placeholder: 'Enter expression and limit point, e.g. (x^2 - 1)/(x - 1) as x -> 1 or sin(x)/x as x -> 0',
    badge: 'limits',
    icon: Compass,
  },
  {
    id: 'continuity',
    name: 'Continuity & Discontinuity Solver',
    description: 'Test the 3 continuity conditions at a point and classify discontinuities as removable, jump, or infinite.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Limits',
    solverType: 'continuity',
    example: '(x^2 - 4)/(x - 2) at x = 2',
    placeholder: 'Enter function and point, e.g. (x^2 - 4)/(x - 2) at x = 2',
    badge: 'continuity',
    icon: Activity,
  },
  {
    id: 'derivative',
    name: 'Derivative & Power Rule Solver',
    description: 'Find symbolic first derivatives of functions with complete step-by-step differentiation rules and tangent slopes.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'derivative',
    example: 'x^3 + 4x^2 - 7x + 2',
    placeholder: 'Enter mathematical function f(x), e.g. x^3 + 4x^2 - 7x + 2 or 3sin(x) + e^x',
    badge: 'derivatives',
    icon: TrendingUp,
  },
  {
    id: 'product-rule',
    name: 'Product Rule Solver',
    description: 'Differentiate products of functions (u · v)\' = u\'v + uv\' with complete factor decomposition.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'product-rule',
    example: '(x^2 + 1) * sin(x)',
    placeholder: 'Enter product u(x) * v(x), e.g. (x^2 + 1) * sin(x) or x^3 * e^x',
    badge: 'product rule',
    icon: Layers,
  },
  {
    id: 'quotient-rule',
    name: 'Quotient Rule Solver',
    description: 'Differentiate rational expressions (u / v)\' = (u\'v - uv\') / v² with low d-high minus high d-low steps.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'quotient-rule',
    example: '(x^2 + 1) / (x - 3)',
    placeholder: 'Enter rational function u(x) / v(x), e.g. (x^2 + 1) / (x - 3) or sin(x) / x',
    badge: 'quotient rule',
    icon: Hash,
  },
  {
    id: 'chain-rule',
    name: 'Chain Rule Solver',
    description: 'Differentiate composite functions f(g(x)) by decomposing inner and outer functions and computing dy/du · du/dx.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'chain-rule',
    example: '(3x^2 + 5)^4',
    placeholder: 'Enter composite function, e.g. (3x^2 + 5)^4, sin(2x + 1), or e^(x^2)',
    badge: 'chain rule',
    icon: GitBranch,
  },
  {
    id: 'implicit-differentiation',
    name: 'Implicit Differentiation Solver',
    description: 'Find dy/dx for equations where y cannot easily be isolated by applying chain rules to all y-terms.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'implicit-differentiation',
    example: 'x^2 + y^2 = 25',
    placeholder: 'Enter implicit equation in x and y, e.g. x^2 + y^2 = 25 or x^3 + y^3 = 6*x*y',
    badge: 'implicit',
    icon: Sparkles,
  },
  {
    id: 'higher-order-derivatives',
    name: 'Higher-Order Derivatives Solver',
    description: 'Calculate 2nd, 3rd, and nth derivatives with step-by-step intermediate formulas (velocity, acceleration, jerk).',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Derivatives',
    solverType: 'higher-order-derivatives',
    example: 'x^5 - 4x^3 + 2x, order = 3',
    placeholder: 'Enter function and order, e.g. x^5 - 4x^3 + 2x, order = 3',
    badge: 'higher order',
    icon: Repeat,
  },
  {
    id: 'related-rates',
    name: 'Related Rates Solver',
    description: 'Solve geometric related rates problems involving sliding ladders, expanding spheres, conical tanks, and ripples.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Applications',
    solverType: 'related-rates',
    example: 'ladder: length=10, x=6, dx/dt=2',
    placeholder: 'Enter scenario, e.g. ladder: length=10, x=6, dx/dt=2 or sphere: radius=5, dr/dt=2',
    badge: 'related rates',
    icon: Sliders,
  },
  {
    id: 'critical-points',
    name: 'Critical Points & Extrema Solver',
    description: 'Find where f\'(x) = 0 and classify local maxima, minima, and saddle points using the Second Derivative Test.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Curve Sketching',
    solverType: 'critical-points',
    example: 'x^3 - 3x^2 - 9x + 5',
    placeholder: 'Enter function f(x), e.g. x^3 - 3x^2 - 9x + 5 or 2x^3 - 9x^2 + 12x',
    badge: 'critical points',
    icon: Target,
  },
  {
    id: 'increasing-decreasing',
    name: 'Increasing & Decreasing Intervals',
    description: 'Determine exact intervals of increase and decrease using first derivative sign test charts.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Curve Sketching',
    solverType: 'increasing-decreasing',
    example: 'x^3 - 3x^2',
    placeholder: 'Enter function f(x), e.g. x^3 - 3x^2 or 2x^3 - 6x^2 + 2',
    badge: 'intervals',
    icon: BarChart2,
  },
  {
    id: 'concavity',
    name: 'Concavity & Inflection Points Solver',
    description: 'Find intervals where f(x) is concave up or concave down, and identify all points of inflection using f\'\'(x).',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Curve Sketching',
    solverType: 'concavity',
    example: 'x^3 - 6x^2 + 9x',
    placeholder: 'Enter function f(x), e.g. x^3 - 6x^2 + 9x or x^4 - 4x^3',
    badge: 'concavity',
    icon: PieChart,
  },
  {
    id: 'optimization',
    name: 'Applied Optimization Solver',
    description: 'Solve real-world optimization problems (maximum volume boxes, minimal fencing, and closed interval global extrema).',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Applications',
    solverType: 'optimization',
    example: 'box: length=20, width=12',
    placeholder: 'Enter problem, e.g. box: length=20, width=12 or -x^2 + 4x + 1, [0, 4]',
    badge: 'optimization',
    icon: Maximize2,
  },
  {
    id: 'curve-analysis',
    name: 'Full Curve Analysis & Sketcher',
    description: 'Complete 7-step analysis: domain, intercepts, symmetry, asymptotes, critical points, concavity, and graph.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Curve Sketching',
    solverType: 'curve-analysis',
    example: 'x^3 - 3x',
    placeholder: 'Enter function f(x), e.g. x^3 - 3x or x^4 - 4x^2',
    badge: 'curve analysis',
    icon: Shapes,
  },
  {
    id: 'antiderivative',
    name: 'Antiderivative & Indefinite Integral',
    description: 'Compute indefinite integrals ∫ f(x) dx with power rules, trig formulas, and constant of integration + C.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Integrals',
    solverType: 'antiderivative',
    example: '4x^5 + 3x^2 - 7x + 6',
    placeholder: 'Enter integrand f(x), e.g. 4x^5 + 3x^2 - 7x + 6 or 3sin(x) + e^x',
    badge: 'antiderivatives',
    icon: BookOpen,
  },
  {
    id: 'definite-integral',
    name: 'Definite Integrals & FTC Solver',
    description: 'Evaluate definite integrals with upper and lower bounds, area accumulation, and numerical Simpson verification.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Integrals',
    solverType: 'definite-integral',
    example: 'x^2 from 0 to 3',
    placeholder: 'Enter integrand and bounds, e.g. x^2 from 0 to 3 or 3x^2 - 2x + 1, [1, 4]',
    badge: 'definite integrals',
    icon: Calculator,
  },
  {
    id: 'fundamental-theorem',
    name: 'Fundamental Theorem of Calculus (FTC)',
    description: 'Apply FTC Part 1 (d/dx ∫[a to g(x)] f(t) dt) with Leibniz chain rule, and FTC Part 2 evaluation theorem.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Integrals',
    solverType: 'fundamental-theorem',
    example: 'd/dx ∫[0 to x] sin(t) dt',
    placeholder: 'Enter FTC problem, e.g. d/dx ∫[0 to x] sin(t) dt or d/dx ∫[1 to x^2] sqrt(t + 1) dt',
    badge: 'FTC',
    icon: Zap,
  },

  // ==========================================
  // CALCULUS 2 SOLVERS (18-29)
  // ==========================================
  {
    id: 'substitution',
    name: 'U-Substitution Solver',
    description: 'Integrate composite expressions by identifying u = g(x), converting differentials to du, and back-substituting.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'substitution',
    example: '2x * (x^2 + 1)^4',
    placeholder: 'Enter integrand, e.g. 2x * (x^2 + 1)^4 or x * e^(x^2)',
    badge: 'u-sub',
    icon: RefreshCw,
  },
  {
    id: 'area-between-curves',
    name: 'Area Between Curves Solver',
    description: 'Compute the 2D enclosed area between two curves A = ∫ |f(x) - g(x)| dx with automatic intersection points.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Applications of Integration',
    solverType: 'area-between-curves',
    example: '2x - x^2, x^2',
    placeholder: 'Enter two curves, e.g. 2x - x^2, x^2 or f(x) = x^2, g(x) = 4',
    badge: 'area',
    icon: Shapes,
  },
  {
    id: 'volume',
    name: 'Volume of Revolution Solver',
    description: 'Calculate 3D solid volumes of revolution using the Disk Method, Washer Method, and Cylindrical Shells.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Applications of Integration',
    solverType: 'volume',
    example: 'y = sqrt(x), [0, 4], about x-axis',
    placeholder: 'Enter function, bounds, and axis, e.g. y = sqrt(x), [0, 4], about x-axis',
    badge: 'volume',
    icon: Box,
  },
  {
    id: 'integration-by-parts',
    name: 'Integration by Parts Solver',
    description: 'Solve integrals using ∫ u dv = uv - ∫ v du with LIATE priority rule and full tabular integration.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'integration-by-parts',
    example: 'x * e^x',
    placeholder: 'Enter product integrand, e.g. x * e^x, x * sin(x), or ln(x)',
    badge: 'by parts',
    icon: Layers,
  },
  {
    id: 'trigonometric-integration',
    name: 'Trigonometric Integrals Solver',
    description: 'Solve powers and products of sin, cos, tan, and sec using half-angle and Pythagorean trigonometric identities.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'trigonometric-integration',
    example: 'sin(x)^3',
    placeholder: 'Enter trig powers, e.g. sin(x)^3 or sin(x)^2 * cos(x)^3 or cos(x)^2',
    badge: 'trig integrals',
    icon: RotateCw,
  },
  {
    id: 'trigonometric-substitution',
    name: 'Trigonometric Substitution Solver',
    description: 'Eliminate radicals of forms √(a² - x²), √(a² + x²), and √(x² - a²) using sine, tangent, and secant substitutions.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'trigonometric-substitution',
    example: '1 / sqrt(9 - x^2)',
    placeholder: 'Enter radical integrand, e.g. 1 / sqrt(9 - x^2) or 1 / (x^2 + 4)',
    badge: 'trig sub',
    icon: Circle,
  },
  {
    id: 'partial-fractions',
    name: 'Partial Fractions Decomposition',
    description: 'Decompose rational functions P(x)/Q(x) into simple linear fractions and integrate into logarithmic forms.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'partial-fractions',
    example: '1 / (x^2 - 1)',
    placeholder: 'Enter rational fraction, e.g. 1 / (x^2 - 1) or (5x - 3) / (x^2 - 2x - 3)',
    badge: 'partial fractions',
    icon: GitBranch,
  },
  {
    id: 'improper-integral',
    name: 'Improper Integrals Solver',
    description: 'Evaluate Type I integrals with infinite bounds and Type II integrals with vertical asymptotes using limits.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'improper-integral',
    example: '1 / x^2, [1, inf]',
    placeholder: 'Enter improper integral, e.g. 1 / x^2, [1, inf] or e^(-x), [0, infinity]',
    badge: 'improper',
    icon: Compass,
  },
  {
    id: 'sequences',
    name: 'Sequences & Convergence Solver',
    description: 'Generate sequence terms, evaluate lim[n→∞] a_n, and determine monotonicity and boundedness.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Series & Sequences',
    solverType: 'sequences',
    example: 'a_n = (2n + 1) / (3n + 5)',
    placeholder: 'Enter sequence formula a_n, e.g. a_n = (2n + 1) / (3n + 5) or a_n = (-1)^n / n',
    badge: 'sequences',
    icon: Sigma,
  },
  {
    id: 'infinite-series',
    name: 'Infinite Series Convergence Tests',
    description: 'Test series for convergence using Geometric, p-Series, Ratio, Divergence, and Alternating Series (Leibniz) tests.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Series & Sequences',
    solverType: 'infinite-series',
    example: 'sum (1/2)^n',
    placeholder: 'Enter infinite series, e.g. sum (1/2)^n, sum 1 / n^2, or sum (-1)^n / n',
    badge: 'series tests',
    icon: Sigma,
  },
  {
    id: 'power-series',
    name: 'Power Series & Convergence Interval',
    description: 'Determine the expansion center, Radius of Convergence R via the Ratio Test, and Interval of Convergence I.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Series & Sequences',
    solverType: 'power-series',
    example: 'sum x^n / n',
    placeholder: 'Enter power series, e.g. sum x^n / n or sum (x - 2)^n / (n * 3^n)',
    badge: 'power series',
    icon: Activity,
  },
  {
    id: 'taylor-maclaurin',
    name: 'Taylor & Maclaurin Series Solver',
    description: 'Construct nth-degree Taylor and Maclaurin polynomials with successive derivative tables and approximation graphs.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Series & Sequences',
    solverType: 'taylor-maclaurin',
    example: 'e^x at x = 0, n = 4',
    placeholder: 'Enter function, center, and degree, e.g. e^x at x = 0, n = 4 or sin(x) at x = 0, n = 5',
    badge: 'taylor series',
    icon: Sparkles,
  },
];

/** Clean mapping between solverType and actual solver function */
export const SOLVER_REGISTRY: Record<string, SolverFunction> = {
  'limit': solveLimit,
  'continuity': solveContinuity,
  'derivative': solveDerivative,
  'product-rule': solveProductRule,
  'quotient-rule': solveQuotientRule,
  'chain-rule': solveChainRule,
  'implicit-differentiation': solveImplicitDifferentiation,
  'higher-order-derivatives': solveHigherOrderDerivatives,
  'related-rates': solveRelatedRates,
  'critical-points': solveCriticalPoints,
  'increasing-decreasing': solveIncreasingDecreasing,
  'concavity': solveConcavity,
  'optimization': solveOptimization,
  'curve-analysis': solveCurveAnalysis,
  'antiderivative': solveAntiderivative,
  'definite-integral': solveDefiniteIntegral,
  'fundamental-theorem': solveFundamentalTheorem,
  'substitution': solveSubstitution,
  'area-between-curves': solveAreaBetweenCurves,
  'volume': solveVolume,
  'integration-by-parts': solveIntegrationByParts,
  'trigonometric-integration': solveTrigonometricIntegration,
  'trigonometric-substitution': solveTrigonometricSubstitution,
  'partial-fractions': solvePartialFractions,
  'improper-integral': solveImproperIntegral,
  'sequences': solveSequences,
  'infinite-series': solveInfiniteSeries,
  'power-series': solvePowerSeries,
  'taylor-maclaurin': solveTaylorMaclaurin,
  // Convenience aliases
  'taylor-series': solveTaylorMaclaurin,
  'maclaurin-series': solveTaylorMaclaurin,
  'volume-revolution': solveVolume,
};

export function getSolver(solverType: string): SolverFunction | undefined {
  return SOLVER_REGISTRY[solverType];
}
