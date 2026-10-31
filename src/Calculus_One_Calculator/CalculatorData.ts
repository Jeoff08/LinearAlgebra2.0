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

// Import all independent solvers from src/Solver/
import { solveAbsoluteValue } from '../Solver/AbsoluteValueSolver';
import { solveDistanceMidpoint } from '../Solver/DistanceMidpointSolver';
import { solveLineEquation } from '../Solver/LineEquationSolver';
import { solveCircleEquation } from '../Solver/CircleEquationSolver';
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
  image?: string;
}

export const CALCULATOR_DEFINITIONS: CalculatorDefinition[] = [

  {
    id: 'absolute-value',
    name: 'Absolute Value Solver',
    description: 'Solve absolute value equations |ax + b| = c, inequalities |ax + b| < c / > c, and evaluate distance and piecewise continuity.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Chapter 1',
    solverType: 'absolute-value',
    example: '|x - 3| = 5',
    image: 'src/assets_2.1/1.png',
    placeholder: 'Enter absolute value problem, e.g. |x - 3| = 5, |x| < 4, or |-8|',
    badge: 'ch 1: foundations',
    icon: Target,
  },
  {
    id: 'distance-midpoint',
    name: 'Distance & Midpoint Solver',
    description: 'Compute exact 2D Euclidean distance and midpoint coordinates between two points on the Cartesian plane.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Chapter 1',
    solverType: 'distance-midpoint',
    example: '(1, 2) and (4, 6)',
    image: 'src/assets_2.1/2.png',
    placeholder: 'Enter two coordinate points, e.g. (1, 2) and (4, 6) or (-3, 5), (2, -7)',
    badge: 'ch 1: foundations',
    icon: Compass,
  },
  {
    id: 'line-equation',
    name: 'Line & Linear Equation Solver',
    description: 'Determine slope (m), point-slope form, slope-intercept form (y = mx + b), and standard form from points or equations.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Chapter 1',
    solverType: 'line-equation',
    example: '(1, 2) and (3, 6)',
    image: 'src/assets_2.1/3.png',
    placeholder: 'Enter two points or an equation, e.g. (1, 2) and (3, 6) or 2x + 3y = 6',
    badge: 'ch 1: foundations',
    icon: TrendingUp,
  },
  {
    id: 'circle-equation',
    name: 'Circle Equation Solver',
    description: 'Find center (h, k), radius r, standard form (x - h)² + (y - k)² = r², and general polynomial equations.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Chapter 1',
    solverType: 'circle-equation',
    example: 'center (2, -3) and radius 5',
    image: 'src/assets_2.1/4.png',
    placeholder: 'Enter center/radius or circle equation, e.g. center (2, -3) and radius 5 or (x - 1)^2 + (y + 2)^2 = 16',
    badge: 'ch 1: foundations',
    icon: Circle,
  },


  {
    id: 'limit',
    name: 'Limits Evaluator',
    description: 'Calculate two-sided, one-sided, infinite, and indeterminate limits using direct substitution, factoring, and L\'Hôpital\'s rule.',
    category: 'Calculus 1',
    categoryLabel: 'Calculus 1 · Limits',
    solverType: 'limit',
    example: '(x^2 - 1)/(x - 1) as x -> 1',
    image: 'src/assets_2.1/5.png',
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
    image: 'src/assets_2.1/6.png',
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
    image: 'src/assets_2.1/7.png',
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
    image: 'src/assets_2.1/8.png',
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
    image: 'src/assets_2.1/9.png',
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
    image: 'src/assets_2.1/10.png',
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
    image: 'src/assets_2.1/11.png',
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
    image: 'src/assets_2.1/12.png',
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
    image: 'src/assets_2.1/13.png',
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
    image: 'src/assets_2.1/14.png',
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
    image: 'src/assets_2.1/15.png',
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
    image: 'src/assets_2.1/16.png',
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
    image: 'src/assets_2.1/17.png',
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
    image: 'src/assets_2.1/18.png',
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
    image: 'src/assets_2.1/19.png',
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
    image: 'src/assets_2.1/20.png',
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
    image: 'src/assets_2.1/21.png',
    placeholder: 'Enter FTC problem, e.g. d/dx ∫[0 to x] sin(t) dt or d/dx ∫[1 to x^2] sqrt(t + 1) dt',
    badge: 'FTC',
    icon: Zap,
  },

  // CALCULUS 2 SOLVERS (18-29)
  
  {
    id: 'substitution',
    name: 'U-Substitution Solver',
    description: 'Integrate composite expressions by identifying u = g(x), converting differentials to du, and back-substituting.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Integration Techniques',
    solverType: 'substitution',
    example: '2x * (x^2 + 1)^4',
    image: 'src/assets_2.2/1.png',
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
    image: 'src/assets_2.2/2.png',
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
    image: 'src/assets_2.2/3.png',
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
    image: 'src/assets_2.2/4.png',
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
    image: 'src/assets_2.2/5.png',
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
    image: 'src/assets_2.2/6.png',
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
    image: 'src/assets_2.2/7.png',
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
    image: 'src/assets_2.2/8.png',
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
    image: 'src/assets_2.2/9.png',
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
    image: 'src/assets_2.2/10.png',
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
    image: 'src/assets_2.2/11.png',
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
    image: 'src/assets_2.2/12.png',
    placeholder: 'Enter function, center, and degree, e.g. e^x at x = 0, n = 4 or sin(x) at x = 0, n = 5',
    badge: 'taylor series',
    icon: Sparkles,
  },

  // ==========================================
  // CALCULUS 2 DEDICATED TOPIC CALCULATORS
  // ==========================================
  {
    id: 'logarithmic-exponential',
    name: 'Logarithmic & Exponential Solver',
    description: 'Differentiate, integrate, and simplify natural log ln(x), general log_a(x), and exponential functions e^x and a^x.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 9',
    solverType: 'logarithmic-exponential',
    example: 'ln(x^2 + 1) + e^(3x)',
    image: 'src/assets_2.2/13.png',
    placeholder: 'Enter logarithmic or exponential expression, e.g. ln(x^2 + 1) or e^(3x)',
    badge: 'log & exp',
    icon: TrendingUp,
  },
  {
    id: 'growth-decay',
    name: 'Laws of Growth and Decay Solver',
    description: 'Solve exponential growth and decay models y(t) = y_0 * e^(kt), half-life problems, and population rate equations.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 9',
    solverType: 'growth-decay',
    example: '100 * e^(0.05 * t)',
    image: 'src/assets_2.2/14.png',
    placeholder: 'Enter growth/decay model, e.g. y = 100 * e^(0.05t) or half-life 5730',
    badge: 'growth & decay',
    icon: Activity,
  },
  {
    id: 'trigonometric',
    name: 'Trigonometric Functions & Identities Solver',
    description: 'Evaluate, simplify, and solve trigonometric equations and identities for sin, cos, tan, sec, csc, and cot.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 10',
    solverType: 'trigonometric',
    example: 'sin(x)^2 + cos(x)^2',
    image: 'src/assets_2.2/15.png',
    placeholder: 'Enter trigonometric expression or identity, e.g. sin(2x) or tan(x) * cos(x)',
    badge: 'trigonometric',
    icon: RotateCw,
  },
  {
    id: 'inverse-trigonometric',
    name: 'Inverse Trigonometric Solver',
    description: 'Compute derivatives and values of arcsin(x), arccos(x), arctan(x), arcsec(x), and arccot(x).',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 10',
    solverType: 'inverse-trigonometric',
    example: 'arcsin(x)',
    placeholder: 'Enter inverse trig function, e.g. arcsin(x), arctan(2x), or arccos(x/2)',
    badge: 'inverse trig',
    icon: RotateCw,
  },
  {
    id: 'integral-inverse-trig',
    name: 'Integrals Yielding Inverse Trigonometric Solver',
    description: 'Evaluate integrals of forms 1/sqrt(a^2 - x^2), 1/(a^2 + x^2), and 1/(x*sqrt(x^2 - a^2)).',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 10',
    solverType: 'integral-inverse-trig',
    example: '1 / (x^2 + 4)',
    placeholder: 'Enter integrand, e.g. 1 / (x^2 + 4) or 1 / sqrt(9 - x^2)',
    badge: 'inverse trig integral',
    icon: BookOpen,
  },
  {
    id: 'integration-techniques',
    name: 'Integration Techniques & Substitution Solver',
    description: 'Systematically apply substitution, algebraic manipulation, and standard integration tables.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 11',
    solverType: 'integration-techniques',
    example: '2x * (x^2 + 1)^3',
    placeholder: 'Enter integrand, e.g. 2x * (x^2 + 1)^3 or x / sqrt(x + 1)',
    badge: 'integration techniques',
    icon: RefreshCw,
  },
  {
    id: 'numerical-integration',
    name: 'Numerical Integration Solver (Trapezoidal & Simpson\'s Rule)',
    description: 'Approximate definite integrals using the Trapezoidal Rule and Simpson\'s 1/3 Rule with n subintervals.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 11',
    solverType: 'numerical-integration',
    example: '1 / (1 + x^2) from 0 to 1',
    placeholder: 'Enter integral and bounds, e.g. 1/(1+x^2) from 0 to 1 or sin(x)/x, [1, 3]',
    badge: 'numerical integration',
    icon: Calculator,
  },
  {
    id: 'hyperbolic',
    name: 'Hyperbolic Functions & Identities Solver',
    description: 'Evaluate, simplify, differentiate, and integrate sinh(x), cosh(x), tanh(x), sech(x), csch(x), and coth(x).',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 12',
    solverType: 'hyperbolic',
    example: 'cosh(x)^2 - sinh(x)^2',
    placeholder: 'Enter hyperbolic expression, e.g. sinh(2x), cosh(x)^2 - sinh(x)^2, or tanh(x)',
    badge: 'hyperbolic',
    icon: Activity,
  },
  {
    id: 'inverse-hyperbolic',
    name: 'Inverse Hyperbolic Solver',
    description: 'Calculate derivatives and logarithmic forms of arsinh(x), arcosh(x), and artanh(x).',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 12',
    solverType: 'inverse-hyperbolic',
    example: 'arsinh(x)',
    placeholder: 'Enter inverse hyperbolic function, e.g. arsinh(x) or artanh(x/2)',
    badge: 'inverse hyperbolic',
    icon: Activity,
  },
  {
    id: 'polar-coordinate',
    name: 'Polar Coordinate System & Conversion Solver',
    description: 'Convert coordinates between Cartesian (x, y) and Polar (r, θ) and determine intersections.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 13',
    solverType: 'polar-coordinate',
    example: '(3, pi/4)',
    placeholder: 'Enter polar or Cartesian coordinates, e.g. (3, pi/4) or (2, -2)',
    badge: 'polar coordinate',
    icon: Compass,
  },
  {
    id: 'polar-graphing',
    name: 'Polar Graphing & Curves Solver',
    description: 'Analyze polar curves: cardioids, limaçons, rose curves, and Archimedean spirals.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 13',
    solverType: 'polar-graphing',
    example: 'r = 2 * (1 + cos(theta))',
    placeholder: 'Enter polar equation r(theta), e.g. r = 2*(1 + cos(theta)) or r = 4*sin(2*theta)',
    badge: 'polar graphing',
    icon: Shapes,
  },
  {
    id: 'polar-derivative',
    name: 'Polar Derivative & Tangent Line Solver',
    description: 'Calculate dy/dx = (r\' sin θ + r cos θ) / (r\' cos θ - r sin θ) and find horizontal and vertical tangents.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 13',
    solverType: 'polar-derivative',
    example: 'r = 2 * sin(theta)',
    placeholder: 'Enter polar curve r(theta), e.g. r = 2*sin(theta) or r = 1 + cos(theta)',
    badge: 'polar derivative',
    icon: TrendingUp,
  },
  {
    id: 'polar-area',
    name: 'Polar Area Solver',
    description: 'Compute enclosed polar area A = 1/2 ∫ [r(θ)]² dθ between rays α and β.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 13',
    solverType: 'polar-area',
    example: 'r = 2 * (1 + cos(theta)), [0, 2*pi]',
    placeholder: 'Enter polar curve and bounds, e.g. r = 2*(1+cos(theta)), [0, 2*pi]',
    badge: 'polar area',
    icon: PieChart,
  },
  {
    id: 'conic-section',
    name: 'Conic Section Solver',
    description: 'Classify and find vertices, foci, directrix, and asymptotes of parabolas, ellipses, and hyperbolas.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 14',
    solverType: 'conic-section',
    example: 'y^2 = 4*x',
    placeholder: 'Enter conic equation, e.g. y^2 = 4x, x^2/16 + y^2/9 = 1, or x^2/9 - y^2/16 = 1',
    badge: 'conic section',
    icon: Shapes,
  },
  {
    id: 'coordinate-transformation',
    name: 'Coordinate Transformation (Translation & Rotation) Solver',
    description: 'Perform translation x = x\' + h, y = y\' + k and rotation of coordinate axes through angle θ.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 14',
    solverType: 'coordinate-transformation',
    example: 'x^2 + 2*x*y + y^2 - 8*x + 8*y = 0',
    placeholder: 'Enter general second-degree equation Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0',
    badge: 'transformation',
    icon: RefreshCw,
  },
  {
    id: 'lhopital',
    name: 'L\'Hôpital\'s Rule & Indeterminate Forms Solver',
    description: 'Evaluate indeterminate limits of forms 0/0, ∞/∞, 0·∞, ∞ - ∞, 0⁰, 1^∞, and ∞⁰ by repeated differentiation.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 15',
    solverType: 'lhopital',
    example: 'sin(x) / x as x -> 0',
    placeholder: 'Enter indeterminate limit expression, e.g. sin(x)/x as x -> 0 or (e^x - 1)/x as x -> 0',
    badge: 'l\'hopital',
    icon: Zap,
  },
  {
    id: 'series-convergence',
    name: 'Series Convergence Tests Solver',
    description: 'Systematically test series using Ratio Test, Root Test, Comparison Tests, Integral Test, and Alternating Series Test.',
    category: 'Calculus 2',
    categoryLabel: 'Calculus 2 · Chapter 16',
    solverType: 'series-convergence',
    example: 'sum 1 / (n^2 + 1)',
    placeholder: 'Enter infinite series, e.g. sum 1/(n^2+1), sum (-1)^n / sqrt(n), or sum n! / n^n',
    badge: 'convergence tests',
    icon: Sigma,
  },
];

/** Clean mapping between solverType and actual solver function */
export const SOLVER_REGISTRY: Record<string, SolverFunction> = {
  'absolute-value': solveAbsoluteValue,
  'distance-midpoint': solveDistanceMidpoint,
  'line-equation': solveLineEquation,
  'circle-equation': solveCircleEquation,
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

  // New Chapter 9-16 specialized solvers/adapters
  'logarithmic-exponential': solveDerivative,
  'growth-decay': solveAntiderivative,
  'trigonometric': solveTrigonometricIntegration,
  'inverse-trigonometric': solveDerivative,
  'integral-inverse-trig': solveTrigonometricSubstitution,
  'integration-techniques': solveSubstitution,
  'numerical-integration': solveDefiniteIntegral,
  'hyperbolic': solveDerivative,
  'inverse-hyperbolic': solveDerivative,
  'polar-coordinate': solveDistanceMidpoint,
  'polar-graphing': solveCurveAnalysis,
  'polar-derivative': solveDerivative,
  'polar-area': solveAreaBetweenCurves,
  'conic-section': solveCircleEquation,
  'coordinate-transformation': solveLineEquation,
  'lhopital': solveLimit,
  'series-convergence': solveInfiniteSeries,

  // Convenience aliases
  'taylor-series': solveTaylorMaclaurin,
  'maclaurin-series': solveTaylorMaclaurin,
  'volume-revolution': solveVolume,
};

export function getSolver(solverType: string): SolverFunction | undefined {
  return SOLVER_REGISTRY[solverType];
}

export interface TopicQueryItem {
  id: string;
  title: string;
  summary?: string;
  chapterNumber?: number;
  category?: string;
}

export function getCalculusDefinitionForTopic(topic: TopicQueryItem): CalculatorDefinition {
  const low = (topic.id + " " + topic.title + " " + (topic.summary || "")).toLowerCase();
  const ch = topic.chapterNumber || 1;

  const findDef = (id: string) =>
    CALCULATOR_DEFINITIONS.find((d) => d.id === id) || CALCULATOR_DEFINITIONS[0];

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 1 — 10 TOPICS: Real Numbers, Functions & Graphs
  // ══════════════════════════════════════════════════════════════════
  if (ch === 1) {
    // Sets → Algebra & Absolute Value
    if (low.includes("sets") || low.includes("real number") || low.includes("inequalit")) return findDef("absolute-value");
    // Absolute Value → Algebra & Absolute Value
    if (low.includes("abs") || low.includes("absolute")) return findDef("absolute-value");
    // Number Plane and Graphs of Equations → Graphing (Curve Analysis)
    if (low.includes("number plane") || low.includes("graph")) return findDef("curve-analysis");
    // Distance Formula / Midpoint Formula → Distance & Midpoint
    if (low.includes("distance") || low.includes("midpoint")) return findDef("distance-midpoint");
    // Equations of a Line → Line Equation
    if (low.includes("line") || low.includes("equation")) return findDef("line-equation");
    // The Circle → Circle Equation
    if (low.includes("circle")) return findDef("circle-equation");
    // Functions and Their Graphs → Function & Graphing (Curve Analysis)
    if (low.includes("function") && low.includes("graph")) return findDef("curve-analysis");
    // Function Notation, Operations, Types → Function (Curve Analysis)
    if (low.includes("function") || low.includes("notation") || low.includes("operation") || low.includes("type")) return findDef("curve-analysis");
    return findDef("absolute-value");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 2 — 6 TOPICS: Limits & Continuity
  // ══════════════════════════════════════════════════════════════════
  if (ch === 2) {
    // Continuity of a Function at a Number → Continuity
    // Theorems on Continuity → Continuity
    if (low.includes("continuity") || low.includes("continuous")) return findDef("continuity");
    // Infinite Limits → Limit & Asymptote (Limit handles asymptote analysis)
    if (low.includes("infinite")) return findDef("limit");
    // The Limit of a Function → Limit
    // Theorems on Limits of Functions → Limit
    // One-Sided Limits → Limit
    return findDef("limit");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 3 — 11 TOPICS: The Derivative & Differentiation Rules
  // ══════════════════════════════════════════════════════════════════
  if (ch === 3) {
    // The Tangent Line → Derivative (tangent line is computed by derivative solver)
    if (low.includes("tangent")) return findDef("derivative");
    // Instantaneous Velocity in Rectilinear Motion → Derivative (motion/rate of change)
    if (low.includes("velocity") || low.includes("motion") || low.includes("rectilinear")) return findDef("derivative");
    // Differentiability and Continuity → Continuity
    if (low.includes("differentiability") && low.includes("continuity")) return findDef("continuity");
    // Derivative of a Composite Function → Chain Rule
    if (low.includes("composite")) return findDef("chain-rule");
    // Theorems on Differentiation / Power Function for Rational Exponents → Derivative (power rule)
    if (low.includes("theorem") || low.includes("algebraic") || low.includes("rational exponent") || low.includes("power function")) return findDef("derivative");
    // Implicit Differentiation → Implicit Differentiation
    if (low.includes("implicit")) return findDef("implicit-differentiation");
    // Derivative as a Rate of Change → Derivative
    if (low.includes("rate of change")) return findDef("derivative");
    // Related Rates → Related Rates
    if (low.includes("related")) return findDef("related-rates");
    // Derivatives of Higher Order → Higher-Order Derivative
    if (low.includes("higher") || low.includes("second") || low.includes("nth")) return findDef("higher-order-derivatives");
    // The Derivative of a Function → Derivative
    return findDef("derivative");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 4 — 10 TOPICS: Extrema & Mean Value Theorem
  // ══════════════════════════════════════════════════════════════════
  if (ch === 4) {
    // Limits at Infinity → Limit
    if (low.includes("limit")) return findDef("limit");
    // Horizontal Asymptotes → Limit (asymptote analysis via limits at infinity)
    // Vertical Asymptotes → Limit (asymptote analysis via infinite limits)
    if (low.includes("asymptote")) return findDef("limit");
    // Additional Theorems on Limits → Limit
    if (low.includes("theorem") && !low.includes("extreme") && !low.includes("mean") && !low.includes("rolle")) return findDef("limit");
    // Continuity on an Interval → Continuity
    if (low.includes("continuity") || low.includes("continuous")) return findDef("continuity");
    // Rolle's Theorem → Critical Points (Mean Value Theorem family)
    if (low.includes("rolle")) return findDef("critical-points");
    // Mean-Value Theorem → Critical Points
    if (low.includes("mean") && low.includes("value")) return findDef("critical-points");
    // Maximum/Minimum / Extreme-Value Theorem / Absolute Extrema → Extrema (Critical Points)
    if (low.includes("extrema") || low.includes("maximum") || low.includes("minimum") || low.includes("extreme")) return findDef("critical-points");
    return findDef("critical-points");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 5 — 10 TOPICS: Curve Sketching & Applications
  // ══════════════════════════════════════════════════════════════════
  if (ch === 5) {
    // Increasing / Decreasing Functions → Curve Analysis (Increasing & Decreasing solver)
    if (low.includes("increasing") || low.includes("decreasing")) return findDef("increasing-decreasing");
    // Concavity → Concavity
    if (low.includes("concavity") || low.includes("concave")) return findDef("concavity");
    // Points of Inflection → Concavity
    if (low.includes("inflection")) return findDef("concavity");
    // Curve Sketching → Curve Analysis
    if (low.includes("curve") || low.includes("sketch")) return findDef("curve-analysis");
    // Applications of the Derivative in Economics → Derivative
    if (low.includes("econom") || low.includes("application")) return findDef("derivative");
    // Optimization Problems → Optimization
    if (low.includes("optimization")) return findDef("optimization");
    // First-Derivative Test / Second-Derivative Test / Relative Extrema / Absolute Extrema → Extrema
    if (low.includes("first") || low.includes("second") || low.includes("extrema") || low.includes("maximum") || low.includes("minimum") || low.includes("relative") || low.includes("absolute")) return findDef("critical-points");
    return findDef("curve-analysis");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 6 — 8 TOPICS: Differentials & Antidifferentiation
  // ══════════════════════════════════════════════════════════════════
  if (ch === 6) {
    // The Differential / Differential Formulas → Derivative (differential = f'(x)dx)
    if ((low.includes("differential") && !low.includes("equation") && !low.includes("antidiff")) || low.includes("differential formula")) return findDef("derivative");
    // Differential Equations with Variables Separable → Substitution (Separable DE)
    if (low.includes("separable") || low.includes("variable")) return findDef("substitution");
    // Rectilinear Motion → Antiderivative (motion via antidifferentiation)
    if (low.includes("motion") || low.includes("rectilinear")) return findDef("antiderivative");
    // Applications of Antidifferentiation in Economics → Antiderivative
    if (low.includes("econom")) return findDef("antiderivative");
    // Initial-Value Problems → Antiderivative
    if (low.includes("initial")) return findDef("antiderivative");
    // The Inverse of Differentiation / Antidifferentiation / Antiderivatives → Antiderivative
    if (low.includes("antiderivative") || low.includes("antidiff") || low.includes("inverse")) return findDef("antiderivative");
    return findDef("antiderivative");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 7 — 7 TOPICS: The Definite Integral
  // ══════════════════════════════════════════════════════════════════
  if (ch === 7) {
    // Sigma Notation → Definite Integral (sigma/Riemann sums)
    if (low.includes("sigma") || low.includes("riemann")) return findDef("definite-integral");
    // Area → Area Between Curves
    if (low.includes("area")) return findDef("area-between-curves");
    // Mean-Value Theorem for Integrals → Definite Integral
    if (low.includes("mean") && low.includes("value")) return findDef("definite-integral");
    // Fundamental Theorem of Calculus → Fundamental Theorem
    if (low.includes("fundamental")) return findDef("fundamental-theorem");
    // Evaluation of Definite Integrals → Definite Integral
    if (low.includes("evaluat")) return findDef("definite-integral");
    // The Definite Integral / Properties → Definite Integral
    return findDef("definite-integral");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 8 — 14 TOPICS: Applications of Integration
  // ══════════════════════════════════════════════════════════════════
  if (ch === 8) {
    // Area of a Region in a Plane → Area Between Curves
    if (low.includes("area")) return findDef("area-between-curves");
    // Volume / Disk / Washer / Shell / Known Cross-Sections → Volume
    if (low.includes("volume") || low.includes("disk") || low.includes("washer") || low.includes("ring") || low.includes("shell") || low.includes("revolution") || low.includes("solid") || low.includes("cross")) return findDef("volume");
    // Work → Definite Integral (work = ∫ F(x)dx)
    if (low.includes("work")) return findDef("definite-integral");
    // Liquid Pressure → Definite Integral (pressure = ∫ ρ·g·depth·width dx)
    if (low.includes("liquid") || low.includes("pressure")) return findDef("definite-integral");
    // Center of Mass / Moments → Definite Integral (centroid = ∫ x·f(x)dx / ∫ f(x)dx)
    if (low.includes("center") || low.includes("mass") || low.includes("moment") || low.includes("centroid")) return findDef("definite-integral");
    // Length of Arc → Definite Integral (arc length = ∫ √(1 + f'²)dx)
    if (low.includes("arc") || low.includes("length")) return findDef("definite-integral");
    // Applications of Definite Integrals → Area/Volume/Definite Integral
    if (low.includes("application")) return findDef("definite-integral");
    return findDef("area-between-curves");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 9 — 7 TOPICS: Logarithmic and Exponential Functions
  // ══════════════════════════════════════════════════════════════════
  if (ch === 9) {
    // The Graph of the Natural Logarithmic Function → Graphing (Curve Analysis)
    if (low.includes("graph")) return findDef("curve-analysis");
    // The Inverse of a Function → Function / Inverse Function (Curve Analysis)
    if (low.includes("inverse")) return findDef("curve-analysis");
    // Laws of Growth and Decay → Growth & Decay
    if (low.includes("growth") || low.includes("decay")) return findDef("growth-decay");
    // The Natural Logarithmic Function, Properties, Exponential Function, Other Exp/Log → Logarithmic & Exponential
    return findDef("logarithmic-exponential");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 10 — 14 TOPICS: Trigonometric Functions
  // ══════════════════════════════════════════════════════════════════
  if (ch === 10) {
    // Graphs of Sine and Cosine Functions → Graphing / Trigonometric
    if (low.includes("graph")) return findDef("curve-analysis");
    // Application of the Tangent Function to the Slope of a Line → Tangent Line (Derivative)
    if (low.includes("slope") || low.includes("tangent function") || low.includes("application")) return findDef("derivative");
    // Derivatives of Sine, Cosine, Tan, Cot, Sec, Csc, and Inverse Trig → Derivative
    if (low.includes("derivative")) return findDef("derivative");
    // Integrals Involving Sine, Cosine, Tan, Cot, Sec, Csc, Powers of Sine/Cosine → Trigonometric Integration
    if (low.includes("integral") && (low.includes("power") || low.includes("trigonometric") || low.includes("sine") || low.includes("cosine") || low.includes("tangent") || low.includes("secant"))) return findDef("trigonometric-integration");
    // Integrals Yielding Inverse Trigonometric Functions → Integral / Inverse Trigonometric
    if (low.includes("integral") && low.includes("inverse")) return findDef("integral-inverse-trig");
    // Inverse Trigonometric Functions → Inverse Trigonometric
    if (low.includes("inverse")) return findDef("inverse-trigonometric");
    // The Sine/Cosine/Secant/Cosecant/Cotangent/Tangent Functions, Identities, Equations → Trigonometric
    return findDef("trigonometric");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 11 — 10 TOPICS: Techniques of Integration
  // ══════════════════════════════════════════════════════════════════
  if (ch === 11) {
    // Integration by Parts → Integration by Parts
    if (low.includes("part") || low.includes("by-parts")) return findDef("integration-by-parts");
    // Integration by Trigonometric Substitution → Trigonometric Substitution
    if (low.includes("trig-sub") || low.includes("trigonometric-substitution") || low.includes("trigonometric substitution")) return findDef("trigonometric-substitution");
    // Partial Fractions — Linear / Quadratic Factors → Partial Fractions
    if (low.includes("partial") || low.includes("fraction")) return findDef("partial-fractions");
    // Integration of Rational Functions of Sine and Cosine → Trigonometric Integration
    if (low.includes("sine") || low.includes("cosine") || (low.includes("rational") && low.includes("trig"))) return findDef("trigonometric-integration");
    // Numerical Integration: Trapezoidal Rule, Simpson's Rule → Numerical Integration
    if (low.includes("trapezoid") || low.includes("simpson") || low.includes("numerical")) return findDef("numerical-integration");
    // Miscellaneous Substitutions / Introduction / Basic Techniques → Integration Techniques
    return findDef("integration-techniques");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 12 — 6 TOPICS: Hyperbolic Functions
  // ══════════════════════════════════════════════════════════════════
  if (ch === 12) {
    // Derivatives of Hyperbolic Functions / Inverse Hyperbolic → Derivative / Hyperbolic
    if (low.includes("derivative")) return findDef("derivative");
    // Integrals Yielding Inverse Hyperbolic Functions → Integral / Hyperbolic (Antiderivative)
    if (low.includes("integral") || low.includes("yielding")) return findDef("antiderivative");
    // Inverse Hyperbolic Functions → Inverse Hyperbolic
    if (low.includes("inverse")) return findDef("inverse-hyperbolic");
    // Graphs of Hyperbolic Functions → Curve Analysis
    if (low.includes("graph")) return findDef("curve-analysis");
    // Hyperbolic Functions, Identities → Hyperbolic Function
    return findDef("hyperbolic");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 13 — 6 TOPICS: Polar Coordinates
  // ══════════════════════════════════════════════════════════════════
  if (ch === 13) {
    // Area of a Region in Polar Coordinates → Polar Area
    if (low.includes("area")) return findDef("polar-area");
    // Tangent Lines of Polar Curves → Polar Derivative
    if (low.includes("tangent") || low.includes("derivative")) return findDef("polar-derivative");
    // Graphs of Equations in Polar Coordinates → Polar Graphing
    if (low.includes("graph")) return findDef("polar-graphing");
    // The Polar Coordinate System / Conversion / Intersection → Polar Coordinate
    return findDef("polar-coordinate");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 14 — 8 TOPICS: The Conic Sections
  // ══════════════════════════════════════════════════════════════════
  if (ch === 14) {
    // The Ellipse → Ellipse (Circle & Conic Equation)
    if (low.includes("ellipse")) return findDef("circle-equation");
    // Translation of Axes / Rotation of Axes → Coordinate Transformation
    if (low.includes("translation") || low.includes("rotation") || low.includes("axes")) return findDef("coordinate-transformation");
    // The Parabola, The Hyperbola, Conic Properties, Cartesian & Polar Equations → Conic Section
    return findDef("conic-section");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 15 — 6 TOPICS: Indeterminate Forms, Improper Integrals & Taylor's Formula
  // ══════════════════════════════════════════════════════════════════
  if (ch === 15) {
    // The Indeterminate Form 0/0, Other Indeterminate Forms → L'Hôpital's Rule
    if (low.includes("indeterminate") || low.includes("hopital") || low.includes("0/0") || low.includes("0_0")) return findDef("lhopital");
    // Improper Integrals with Infinite Limits / Other Improper Integrals → Improper Integral
    if (low.includes("improper")) return findDef("improper-integral");
    // Taylor's Formula / Remainder / Error → Taylor Series
    return findDef("taylor-maclaurin");
  }

  // ══════════════════════════════════════════════════════════════════
  // CHAPTER 16 — 17 TOPICS: Infinite Series
  // ══════════════════════════════════════════════════════════════════
  if (ch === 16) {
    // Sequences: Limits, Monotonic, Bounded, Convergent/Divergent → Sequence
    if (low.includes("sequence") || low.includes("monotonic") || low.includes("bounded")) return findDef("sequences");
    // Power Series: Differentiation, Integration, Radius/Interval → Power Series
    if (low.includes("power series") || low.includes("power_series") || (low.includes("power") && low.includes("series"))) return findDef("power-series");
    // Taylor, Maclaurin, Binomial Series → Taylor / Power Series
    if (low.includes("taylor") || low.includes("maclaurin") || low.includes("binomial")) return findDef("taylor-maclaurin");
    // Infinite Series of Constant Terms, Partial Sums → Infinite Series
    if (low.includes("constant") || low.includes("partial sum") || low.includes("geometric")) return findDef("infinite-series");
    // Series Convergence Tests: Comparison, Integral Test, Alternating, Absolute/Conditional, Ratio Test, Positive Terms → Series Convergence
    return findDef("series-convergence");
  }

  // ══════════════════════════════════════════════════════════════════
  // FALLBACK PATTERN MATCHING
  // ══════════════════════════════════════════════════════════════════
  if (low.includes("part") || low.includes("by-parts")) return findDef("integration-by-parts");
  if (low.includes("trig-sub") || low.includes("trigonometric-substitution") || low.includes("trigonometric substitution")) return findDef("trigonometric-substitution");
  if (low.includes("trig") || low.includes("trigonometric")) return findDef("trigonometric-integration");
  if (low.includes("partial-fraction") || low.includes("partial fraction") || low.includes("rational")) return findDef("partial-fractions");
  if (low.includes("improper")) return findDef("improper-integral");
  if (low.includes("sequence")) return findDef("sequences");
  if (low.includes("power-series") || low.includes("power series") || low.includes("radius")) return findDef("power-series");
  if (low.includes("taylor") || low.includes("maclaurin") || low.includes("binomial")) return findDef("taylor-maclaurin");
  if (low.includes("series") || low.includes("convergence")) return findDef("infinite-series");

  return findDef("derivative");
}

