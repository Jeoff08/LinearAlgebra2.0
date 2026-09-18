import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { playNavButtonAnimation } from "../utils/buttonAnimation";
import LINEAR_TOPICS from "../data/topics/index";
import ALL_CALCULUS_TOPICS from "../data/calculus-topics";
import ALL_CALCULUS_2_TOPICS from "../data/calculus-2-topics";
import mathBg from "../assets/math.jpeg";
import homeMathRedBg from "../assets/home-math-red-bg.png";
import dashboardBgUser from "../assets/Dashboard BG User.png";
import dashboardBg from "../assets/Dashboard BG.png";
import calculusBg from "../assets/Background.png";
import { 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Binary,
  Compass, 
  BookOpen, 
  Zap, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  TrendingUp, 
  Search, 
  X, 
  Calculator, 
  Activity,
  Landmark,
  FunctionSquare,
  Star,
  ShieldCheck,
  Bookmark,
  SlidersHorizontal,
  Maximize2,
  GraduationCap,
  Globe
} from "lucide-react";

export interface CategorizedTopic {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "linear-algebra" | "calculus";
  categoryLabel: string;
  subCategory?: string;
  subCategoryLabel?: string;
  chapterNumber?: number;
}

export interface LinearCalculatorCard {
  id: string;
  toolId: string;
  title: string;
  description: string;
  popoutDetail?: string;
  popular?: boolean;
  glyph: React.ReactNode;
  category?: "Linear Algebra" | "Calculus 1" | "Calculus 2";
  route?: string;
}

const LINEAR_ALGEBRA_CALCULATORS: LinearCalculatorCard[] = [
  {
    id: "equations",
    toolId: "equations",
    title: "System of Linear Equations",
    description: "Solve n equations with n variables using step-by-step Gaussian elimination.",
    popoutDetail: "Solves multiple linear equations simultaneously to find the values of unknown variables using methods such as elimination, substitution, or matrices.",
    popular: true,
    glyph: (
      <span className="font-mono text-xs font-black tracking-tighter text-white">
        Ax=b
      </span>
    ),
  },
  {
    id: "leastsquares",
    toolId: "leastsquares",
    title: "Least Squares Solver",
    description: "Find best-fit solutions for overdetermined systems using normal equations.",
    popoutDetail: "Finds the optimal approximate solution for overdetermined systems (where equations outnumber variables) by minimizing the sum of squared residuals using the normal equation AᵀAx̂ = Aᵀb.",
    glyph: (
      <span className="font-serif text-sm font-bold text-white">
        AᵀAx̂
      </span>
    ),
  },
  {
    id: "transformation",
    toolId: "transformation",
    title: "Linear Transformation",
    description: "Compute standard matrix representations T(v) = Av and coordinate mappings.",
    popoutDetail: "Evaluates linear mappings between vector spaces, determines their transformation matrices with respect to given bases, and explores kernel, image, and geometric reflections or shears.",
    glyph: (
      <span className="font-mono text-xs font-bold text-white">
        T(v)
      </span>
    ),
  },
  {
    id: "quadratic",
    toolId: "quadratic",
    title: "Quadratic Form",
    description: "Analyze matrix xᵀAx definiteness and principal axis diagonalizations.",
    popoutDetail: "Analyzes homogeneous quadratic polynomial expressions xᵀAx, classifies their definiteness (positive/negative definite or indefinite), and finds the principal axis transformation.",
    glyph: (
      <span className="font-mono text-[11px] font-bold text-white">
        xᵀAx
      </span>
    ),
  },
  {
    id: "matrix",
    toolId: "matrix",
    title: "Matrix Calculator",
    description: "Compute matrix powers, scalar multiplication, trace, and transpose.",
    popoutDetail: "Calculates general matrix powers Aᵏ, scalar multiplications, matrix traces, and evaluates algebraic matrix equations step-by-step.",
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: "matrixops",
    toolId: "matrixops",
    title: "Matrix Operations",
    description: "Perform addition, subtraction, scalar operations, and multiplication with steps.",
    popoutDetail: "Performs elementary matrix arithmetic (A + B, A - B, kA, A × B) with step-by-step elementwise calculations and dimension validation.",
    popular: true,
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: "inverse",
    toolId: "inverse",
    title: "Matrix Inverse (A⁻¹)",
    description: "Invert square matrices and calculate inverses using Gauss-Jordan elimination.",
    popoutDetail: "Calculates the multiplicative inverse matrix A⁻¹ such that AA⁻¹ = I using Gauss-Jordan elimination on the augmented matrix [A | I], or reports singular non-invertibility.",
    popular: true,
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        A⁻¹
      </span>
    ),
  },
  {
    id: "determinant",
    toolId: "determinant",
    title: "Determinant Calculator",
    description: "Compute matrix determinants using cofactor expansion and triangular reduction.",
    popoutDetail: "Computes the scalar determinant value det(A) of square matrices using cofactor expansion along rows/columns or row reduction to upper triangular form.",
    popular: true,
    glyph: (
      <span className="font-serif text-sm font-black text-white">
        |A|
      </span>
    ),
  },
  {
    id: "rank",
    toolId: "rank",
    title: "Matrix Rank & Nullity",
    description: "Determine matrix rank, nullity, pivot columns, and the rank-nullity theorem.",
    popoutDetail: "Reduces matrices to Row Echelon Form to identify pivot columns, calculate row/column rank, compute nullity, and verify the fundamental Rank-Nullity Theorem.",
    glyph: (
      <span className="font-mono text-[10px] font-black text-white">
        rk(A)
      </span>
    ),
  },
  {
    id: "transpose",
    toolId: "transpose",
    title: "Transpose Calculator",
    description: "Calculate matrix transpose Aᵀ, conjugate transpose, and verify symmetry.",
    popoutDetail: "Flips a matrix across its main diagonal to compute Aᵀ (swapping rows with columns), checks for symmetric or skew-symmetric matrices, and computes conjugate transposes.",
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        Aᵀ
      </span>
    ),
  },
  {
    id: "vector",
    toolId: "vector",
    title: "Vector Calculator",
    description: "Compute magnitude, unit vector normalization, angles, and directional components.",
    popoutDetail: "Computes Euclidean norm ‖v‖, normalizes vectors to unit length v/‖v‖, computes direction cosines, and analyzes vector components in arbitrary dimensions.",
    glyph: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="19" x2="19" y2="5" />
        <polyline points="12 5 19 5 19 12" />
      </svg>
    ),
  },
  {
    id: "dot",
    toolId: "dot",
    title: "Dot Product (u · v)",
    description: "Compute inner product u·v, angles between vectors, and orthogonality tests.",
    popoutDetail: "Calculates algebraic scalar product u·v = ∑uᵢvᵢ, computes the angle θ between two vectors via cos(θ) = (u·v)/(‖u‖‖v‖), and checks for orthogonality (u·v = 0).",
    glyph: (
      <span className="font-serif text-base font-bold text-white">
        u · v
      </span>
    ),
  },
  {
    id: "cross",
    toolId: "cross",
    title: "Cross Product (u × v)",
    description: "Calculate 3D vector normal cross product u×v and parallelogram areas.",
    popoutDetail: "Calculates the orthogonal 3D vector cross product u × v via formal 3×3 determinant expansion, and computes the geometric area of the spanned parallelogram ‖u × v‖.",
    glyph: (
      <span className="font-serif text-base font-bold text-white">
        u × v
      </span>
    ),
  },
  {
    id: "projection",
    toolId: "projection",
    title: "Vector Projection",
    description: "Calculate orthogonal projections of vectors onto lines and subspaces.",
    popoutDetail: "Decomposes a vector into orthogonal components, calculating the parallel projection proj_v(u) = ((u·v)/‖v‖²)v and the perpendicular component u - proj_v(u).",
    glyph: (
      <span className="font-mono text-[10px] font-bold text-white">
        proj_v(u)
      </span>
    ),
  },
  {
    id: "independence",
    toolId: "independence",
    title: "Linear Independence",
    description: "Test sets of vectors to determine if they are linearly independent or dependent.",
    popoutDetail: "Tests whether the equation c₁v₁ + c₂v₂ + ... + cₖvₖ = 0 has only the trivial solution (cᵢ = 0) by setting up a matrix and checking rank or determinant.",
    glyph: (
      <span className="font-mono text-[11px] font-bold text-white">
        c₁v₁+c₂v₂
      </span>
    ),
  },
  {
    id: "combination",
    toolId: "combination",
    title: "Linear Combination",
    description: "Express a target vector b as a linear combination of given vectors.",
    popoutDetail: "Solves for scalar coefficients c₁, c₂, ..., cₖ such that b = c₁v₁ + c₂v₂ + ... + cₖvₖ, showing the exact step-by-step augmented matrix row operations.",
    glyph: (
      <span className="font-mono text-[10px] font-bold text-white">
        b=∑cᵢvᵢ
      </span>
    ),
  },
  {
    id: "basis",
    toolId: "basis",
    title: "Basis & Dimension",
    description: "Extract a linearly independent basis for a spanning set and find dimension.",
    popoutDetail: "Extracts a minimal spanning set of linearly independent vectors for a given subspace, computes the dimension dim(V), and finds coordinates relative to the basis.",
    glyph: (
      <span className="font-serif text-sm font-bold text-white">
        dim(V)
      </span>
    ),
  },
  {
    id: "span",
    toolId: "span",
    title: "Span Calculator",
    description: "Determine whether a given vector belongs to span(v₁,...,vₖ) using rank tests.",
    popoutDetail: "Determines whether a candidate vector lies in the subspace spanned by a set of vectors by comparing the rank of the vector set with the augmented matrix rank.",
    glyph: (
      <span className="font-mono text-[10px] font-bold text-white">
        span(S)
      </span>
    ),
  },
  {
    id: "eigen",
    toolId: "eigen",
    title: "Eigenvalues & Eigenvectors",
    description: "Find eigenvalues and eigenvectors of a matrix step by step.",
    popoutDetail: "Finds scalar roots λ of the characteristic equation det(A - λI) = 0 and computes corresponding eigenspaces and eigenvectors solving (A - λI)v = 0.",
    popular: true,
    glyph: (
      <span className="font-serif text-lg font-black text-white">
        λ, v
      </span>
    ),
  },
  {
    id: "diagonalization",
    toolId: "diagonalization",
    title: "Matrix Diagonalization",
    description: "Diagonalize square matrices into PDP⁻¹ and compute rapid matrix powers.",
    popoutDetail: "Checks if a square matrix has n linearly independent eigenvectors, forms modal matrix P and diagonal matrix D such that A = PDP⁻¹, and enables rapid powers Aᵏ = PDᵏP⁻¹.",
    glyph: (
      <span className="font-mono text-[10px] font-black text-white">
        PDP⁻¹
      </span>
    ),
  },
  {
    id: "lu",
    toolId: "lu",
    title: "LU Decomposition",
    description: "Factorize matrices into Lower and Upper triangular matrices with pivoting.",
    popoutDetail: "Decomposes a square or rectangular matrix into a unit lower triangular matrix L, upper triangular matrix U, and permutation matrix P such that PA = LU with partial pivoting.",
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        PA=LU
      </span>
    ),
  },
  {
    id: "qr",
    toolId: "qr",
    title: "QR Decomposition",
    description: "Decompose matrices into orthogonal Q and upper triangular R via Gram-Schmidt.",
    popoutDetail: "Factors an m×n matrix into an orthogonal matrix Q (QᵀQ = I) and an upper triangular matrix R using the Gram-Schmidt orthogonalization process or Householder reflections.",
    glyph: (
      <span className="font-mono text-[11px] font-black text-white">
        A=QR
      </span>
    ),
  },
  {
    id: "svd",
    toolId: "svd",
    title: "SVD Calculator (UΣVᵀ)",
    description: "Perform Singular Value Decomposition A = UΣVᵀ for rectangular matrices.",
    popoutDetail: "Computes the singular values σᵢ, left singular vectors U, and right singular vectors V such that A = UΣVᵀ, facilitating low-rank matrix approximations and pseudoinverses.",
    popular: true,
    glyph: (
      <span className="font-mono text-[10px] font-black text-white">
        UΣVᵀ
      </span>
    ),
  },
];

const CALCULUS_CALCULATORS: LinearCalculatorCard[] = [
  // ── Calculus 1 (21 Calculators) ──
  {
    id: "absolute-value",
    toolId: "absolute-value",
    title: "Absolute Value",
    description: "Solve absolute value equations |ax+b|=c and evaluate distance and piecewise continuity.",
    popoutDetail: "Solves absolute value equations |ax + b| = c, inequalities |ax + b| < c / > c, and evaluates distance and piecewise continuity with graphical number-line insights.",
    glyph: <span className="font-mono text-xs font-black text-white">|x|</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=absolute-value",
  },
  {
    id: "distance-midpoint",
    toolId: "distance-midpoint",
    title: "Distance & Midpoint",
    description: "Compute exact 2D Euclidean distance and midpoint coordinates between two points.",
    popoutDetail: "Calculates Cartesian distance d = √((x₂ - x₁)² + (y₂ - y₁)²) and midpoint coordinates ((x₁+x₂)/2, (y₁+y₂)/2) with full geometric steps.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">d(A,B)</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=distance-midpoint",
  },
  {
    id: "line-equation",
    toolId: "line-equation",
    title: "Line Equations",
    description: "Determine slope (m), point-slope form, slope-intercept form (y = mx + b), and standard form.",
    popoutDetail: "Calculates slope m = (y₂ - y₁)/(x₂ - x₁), derives standard form Ax + By = C, point-slope, and slope-intercept equations from points or vectors.",
    glyph: <span className="font-mono text-xs font-bold text-white">y=mx+b</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=line-equation",
  },
  {
    id: "circle-equation",
    toolId: "circle-equation",
    title: "Circle Equation",
    description: "Find center (h, k), radius r, and standard form (x - h)² + (y - k)² = r².",
    popoutDetail: "Finds center (h, k), radius r, standard form (x - h)² + (y - k)² = r², and general polynomial forms through completing the square.",
    glyph: <span className="font-mono text-xs font-bold text-white">x²+y²</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=circle-equation",
  },
  {
    id: "limit",
    toolId: "limit",
    title: "Limits Evaluator",
    description: "Calculate two-sided, one-sided, infinite, and indeterminate limits using factoring and L'Hôpital's.",
    popoutDetail: "Evaluates limits lim[x→c] f(x) via direct substitution, algebraic factoring, rationalization, and L'Hôpital's rule for 0/0 or ∞/∞ indeterminate forms.",
    popular: true,
    glyph: <span className="font-mono text-[10px] font-black text-white">lim</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=limit",
  },
  {
    id: "continuity",
    toolId: "continuity",
    title: "Continuity Analysis",
    description: "Test 3 continuity conditions and classify removable, jump, and infinite discontinuities.",
    popoutDetail: "Tests the 3 continuity conditions at a point: f(c) defined, limit exists, and lim f(x) = f(c), classifying discontinuities rigorously.",
    glyph: <span className="font-serif text-sm font-bold text-white">f(c)</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=continuity",
  },
  {
    id: "derivative",
    toolId: "derivative",
    title: "Derivative & Power Rule",
    description: "Find symbolic first derivatives of functions with step-by-step differentiation rules.",
    popoutDetail: "Computes symbolic derivatives df/dx using the Power Rule d/dx[xⁿ] = n·xⁿ⁻¹, linearity, and provides tangent line equations at given coordinates.",
    popular: true,
    glyph: <span className="font-serif text-sm font-black text-white">d/dx</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=derivative",
  },
  {
    id: "product-rule",
    toolId: "product-rule",
    title: "Product Rule",
    description: "Differentiate products of functions (u · v)' = u'v + uv' with step-by-step factors.",
    popoutDetail: "Applies the product formula (u·v)' = u'v + uv' by identifying factors u(x) and v(x), computing respective derivatives, and simplifying.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">(uv)'</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=product-rule",
  },
  {
    id: "quotient-rule",
    toolId: "quotient-rule",
    title: "Quotient Rule",
    description: "Differentiate rational expressions (u / v)' = (u'v - uv') / v² systematically.",
    popoutDetail: "Differentiates quotient expressions using (u/v)' = (u'v - uv') / v² with low d-high minus high d-low factorization steps.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">(u/v)'</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=quotient-rule",
  },
  {
    id: "chain-rule",
    toolId: "chain-rule",
    title: "Chain Rule",
    description: "Differentiate composite functions f(g(x)) by computing dy/du · du/dx.",
    popoutDetail: "Decomposes composite functions into inner u = g(x) and outer y = f(u) to compute dy/dx = (dy/du) · (du/dx) with step-by-step substitutions.",
    popular: true,
    glyph: <span className="font-mono text-[10px] font-bold text-white">f(g(x))</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=chain-rule",
  },
  {
    id: "implicit-differentiation",
    toolId: "implicit-differentiation",
    title: "Implicit Differentiation",
    description: "Find dy/dx for equations where y cannot easily be isolated using implicit rules.",
    popoutDetail: "Differentiates both sides of an equation with respect to x, applies the chain rule to y-terms to yield dy/dx, and solves algebraically.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">dy/dx</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=implicit-differentiation",
  },
  {
    id: "higher-order-derivatives",
    toolId: "higher-order-derivatives",
    title: "Higher-Order Derivatives",
    description: "Calculate 2nd, 3rd, and nth derivatives for velocity, acceleration, and jerk.",
    popoutDetail: "Computes successive derivatives d²y/dx², d³y/dx³ up to order n, tracking physical interpretations of motion such as velocity, acceleration, and jerk.",
    glyph: <span className="font-serif text-sm font-bold text-white">d²y/dx²</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=higher-order-derivatives",
  },
  {
    id: "related-rates",
    toolId: "related-rates",
    title: "Related Rates",
    description: "Solve rate problems for ladders, expanding spheres, and conical tanks with respect to time.",
    popoutDetail: "Solves geometric rate-of-change word problems with respect to time (dt), linking variables through implicit geometry and rates.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">dx/dt</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=related-rates",
  },
  {
    id: "critical-points",
    toolId: "critical-points",
    title: "Critical Points & Extrema",
    description: "Find where f'(x) = 0 and classify local maxima, minima, and inflection points.",
    popoutDetail: "Solves for points where f'(x) = 0 or f'(x) is undefined, classifying local extrema via the First and Second Derivative Tests.",
    glyph: <span className="font-mono text-xs font-bold text-white">f'(x)=0</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=critical-points",
  },
  {
    id: "increasing-decreasing",
    toolId: "increasing-decreasing",
    title: "Increasing & Decreasing",
    description: "Determine exact intervals of increase and decrease using first derivative sign tests.",
    popoutDetail: "Constructs sign charts for f'(x) across domain partition intervals to rigorously find where functions rise (f' > 0) or fall (f' < 0).",
    glyph: <span className="font-mono text-xs font-bold text-white">↗ ↘</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=increasing-decreasing",
  },
  {
    id: "concavity",
    toolId: "concavity",
    title: "Concavity & Inflection",
    description: "Find intervals where f(x) is concave up or down, and all points of inflection using f''(x).",
    popoutDetail: "Computes second derivatives f''(x) to classify concavity (concave upward where f'' > 0, downward where f'' < 0) and locates inflection points.",
    glyph: <span className="font-mono text-xs font-bold text-white">∪ ∩</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=concavity",
  },
  {
    id: "optimization",
    toolId: "optimization",
    title: "Applied Optimization",
    description: "Solve real-world optimization problems for maximal box volume and minimal perimeter.",
    popoutDetail: "Finds optimal solutions to word problems by setting up primary objective functions, applying constraints, and maximizing or minimizing on intervals.",
    popular: true,
    glyph: <span className="font-serif text-sm font-bold text-white">max/min</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=optimization",
  },
  {
    id: "curve-analysis",
    toolId: "curve-analysis",
    title: "Full Curve Analysis",
    description: "Complete 7-step analysis: domain, intercepts, symmetry, asymptotes, and extrema.",
    popoutDetail: "Comprehensive analysis encompassing domain, intercepts, symmetry, asymptotes, critical points, intervals of increase/decrease, concavity, and graph.",
    glyph: <span className="font-mono text-xs font-bold text-white">f(x)∿</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=curve-analysis",
  },
  {
    id: "antiderivative",
    toolId: "antiderivative",
    title: "Antiderivatives & Integrals",
    description: "Compute indefinite integrals ∫ f(x) dx with power rules, trig formulas, and + C.",
    popoutDetail: "Finds indefinite integrals ∫ f(x) dx symbolically with power rule for integration, trigonometric antiderivatives, exponential forms, and constant of integration + C.",
    popular: true,
    glyph: <span className="font-serif text-base font-black text-white">∫dx</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=antiderivative",
  },
  {
    id: "definite-integral",
    toolId: "definite-integral",
    title: "Definite Integrals",
    description: "Evaluate definite integrals with upper and lower bounds and accumulated area.",
    popoutDetail: "Evaluates ∫[a to b] f(x) dx using the Fundamental Theorem of Calculus F(b) - F(a) with exact geometric net area calculation.",
    popular: true,
    glyph: <span className="font-serif text-sm font-black text-white">∫ₐᵇ</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=definite-integral",
  },
  {
    id: "fundamental-theorem",
    toolId: "fundamental-theorem",
    title: "Fundamental Theorem (FTC)",
    description: "Apply FTC Part 1 (d/dx ∫ f(t) dt) with Leibniz chain rule, and FTC Part 2.",
    popoutDetail: "Applies Leibniz rule for differentiating integrals with variable limits d/dx ∫[a to g(x)] f(t) dt = f(g(x))·g'(x) and evaluation theorem.",
    glyph: <span className="font-mono text-[10px] font-black text-white">FTC</span>,
    category: "Calculus 1",
    route: "/calculus-calculators?tool=fundamental-theorem",
  },

  // ── Calculus 2 (8 Calculators) ──
  {
    id: "substitution",
    toolId: "substitution",
    title: "U-Substitution",
    description: "Integrate composite functions by identifying u = g(x) and converting differentials du.",
    popoutDetail: "Applies the change of variables method for integration: chooses optimal u = g(x), finds du = g'(x)dx, transforms into simple integral, and back-substitutes.",
    popular: true,
    glyph: <span className="font-mono text-xs font-bold text-white">∫u du</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=substitution",
  },
  {
    id: "area-between-curves",
    toolId: "area-between-curves",
    title: "Area Between Curves",
    description: "Compute 2D enclosed area between curves A = ∫ |f(x) - g(x)| dx with intersections.",
    popoutDetail: "Calculates the total enclosed 2D region bounded by two functions by solving for intersection points and integrating top minus bottom (or right minus left).",
    glyph: <span className="font-serif text-xs font-bold text-white">∫|f-g|</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=area-between-curves",
  },
  {
    id: "volume",
    toolId: "volume",
    title: "Volume of Revolution",
    description: "Calculate 3D solid revolution volumes using Disk, Washer, and Cylindrical Shell methods.",
    popoutDetail: "Computes 3D volumes of revolution around horizontal or vertical axes using Disk method (π∫r² dx), Washer method (π∫(R² - r²) dx), or Shell method (2π∫r·h dx).",
    glyph: <span className="font-mono text-xs font-bold text-white">π∫r²</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=volume",
  },
  {
    id: "integration-by-parts",
    toolId: "integration-by-parts",
    title: "Integration by Parts",
    description: "Solve integrals using ∫ u dv = uv - ∫ v du with LIATE priority rule and tabular steps.",
    popoutDetail: "Applies integration by parts ∫ u dv = uv - ∫ v du using LIATE (Logarithmic, Inverse trig, Algebraic, Trig, Exponential) strategy and tabular integration.",
    popular: true,
    glyph: <span className="font-mono text-[10px] font-bold text-white">∫u dv</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=integration-by-parts",
  },
  {
    id: "trigonometric-integration",
    toolId: "trigonometric-integration",
    title: "Trigonometric Integrals",
    description: "Solve powers and products of sin, cos, tan, and sec using trig identities.",
    popoutDetail: "Integrates products and powers of trigonometric functions (sinᵐ(x)cosⁿ(x), tanᵐ(x)secⁿ(x)) using half-angle formulas and Pythagorean substitutions.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">∫sinⁿx</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=trigonometric-integration",
  },
  {
    id: "trigonometric-substitution",
    toolId: "trigonometric-substitution",
    title: "Trig Substitution",
    description: "Eliminate radicals √(a² - x²), √(a² + x²), and √(x² - a²) via sine, tangent, secant.",
    popoutDetail: "Simplifies radical expressions by substituting x = a·sin(θ), x = a·tan(θ), or x = a·sec(θ) with reference triangle back-substitution.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">√(a²-x²)</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=trigonometric-substitution",
  },
  {
    id: "partial-fractions",
    toolId: "partial-fractions",
    title: "Partial Fractions",
    description: "Decompose rational functions P(x)/Q(x) into simple linear fractions and integrate.",
    popoutDetail: "Decomposes rational functions with distinct linear, repeated linear, or irreducible quadratic factors into partial fraction terms before integrating.",
    glyph: <span className="font-mono text-[10px] font-bold text-white">A/(x-r)</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=partial-fractions",
  },
  {
    id: "improper-integral",
    toolId: "improper-integral",
    title: "Improper Integrals",
    description: "Evaluate Type I integrals with infinite bounds and Type II with vertical asymptotes.",
    popoutDetail: "Evaluates improper integrals with infinite limits (∫[a to ∞] f(x) dx) or integrand discontinuities using limit formulations to determine convergence or divergence.",
    glyph: <span className="font-serif text-xs font-bold text-white">∫ₐ^∞</span>,
    category: "Calculus 2",
    route: "/calculus-calculators?tool=improper-integral",
  },
];

const ALL_TOPICS: CategorizedTopic[] = [
  ...(Array.isArray(LINEAR_TOPICS) ? LINEAR_TOPICS : [])
    .filter((t) => Boolean(t && t.id && t.title))
    .map((t) => ({
      id: t.id,
      title: t.title,
      summary: t.summary || "",
      details: t.details || "",
      examples: Array.isArray(t.examples) ? t.examples : [],
      category: "linear-algebra" as const,
      categoryLabel: "Linear Algebra",
    })),
  ...(Array.isArray(ALL_CALCULUS_TOPICS)
    ? ALL_CALCULUS_TOPICS
    : (ALL_CALCULUS_TOPICS as any)?.default || []
  ).filter((t: any) => Boolean(t && t.id && t.title)),
  ...(Array.isArray(ALL_CALCULUS_2_TOPICS)
    ? ALL_CALCULUS_2_TOPICS
    : (ALL_CALCULUS_2_TOPICS as any)?.default || []
  ).filter((t: any) => Boolean(t && t.id && t.title)),
];

export interface ChapterCardItem {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  defaultTopicCount: number;
  icon: React.ReactNode;
}

// 8 Chapter Cards for Calculus I (Chapters 1 to 8) - Matching Reference Image Precisely
export const CALCULUS_1_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "calc1-ch1",
    chapterNumber: 1,
    title: "Functions and Limits",
    description: "Learn the basics of functions, limits, and continuity.",
    defaultTopicCount: 8,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16l15-7 15 7-15 7-15-7z" />
        <path d="M7 23l15 7 15-7" />
        <path d="M7 30l15 7 15-7" />
      </svg>
    ),
  },
  {
    id: "calc1-ch2",
    chapterNumber: 2,
    title: "Derivatives",
    description: "Master the rules and techniques of differentiation.",
    defaultTopicCount: 7,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36h28" />
        <path d="M12 28l9-9 6 6 9-11" />
        <path d="M29 14h7v7" />
      </svg>
    ),
  },
  {
    id: "calc1-ch3",
    chapterNumber: 3,
    title: "Applications of Derivatives",
    description: "Use derivatives to solve real-world problems.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 14c3 18 21 18 24 0" />
        <line x1="6" y1="23" x2="38" y2="23" strokeDasharray="3 3" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "calc1-ch4",
    chapterNumber: 4,
    title: "Integrals",
    description: "Understand antiderivatives, and integration techniques.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-3xl font-bold text-[#166534] select-none">
        ∫
      </div>
    ),
  },
  {
    id: "calc1-ch5",
    chapterNumber: 5,
    title: "Techniques of Integration",
    description: "Learn substitution, parts, and other methods.",
    defaultTopicCount: 7,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-3xl font-black text-[#166534] select-none">
        Σ
      </div>
    ),
  },
  {
    id: "calc1-ch6",
    chapterNumber: 6,
    title: "Infinite Series",
    description: "Explore convergence, tests, and series.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex flex-col items-center justify-center w-10 h-10 font-serif leading-none select-none text-[#166534]">
        <span className="text-xl font-black">Σ</span>
        <span className="text-sm font-black -mt-1">Σ</span>
      </div>
    ),
  },
  {
    id: "calc1-ch7",
    chapterNumber: 7,
    title: "Applications of Integration",
    description: "Volume, area, and other geometric uses.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6l15 8v16l-15 8-15-8V14l15-8z" />
        <path d="M22 6v32" />
        <path d="M7 14l15 8 15-8" />
      </svg>
    ),
  },
  {
    id: "calc1-ch8",
    chapterNumber: 8,
    title: "Advanced Topics",
    description: "Higher-order derivatives, techniques and more.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8v28h28" />
        <path d="M12 30c6-1 14-8 16-18" />
        <circle cx="28" cy="12" r="2.5" fill="#166534" />
      </svg>
    ),
  },
];

// 8 Chapter Cards for Calculus II (Chapters 9 to 16)
export const CALCULUS_2_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "calc2-ch9",
    chapterNumber: 9,
    title: "Inverse & Transcendental Functions",
    description: "Logarithmic, exponential, and inverse trigonometric functions.",
    defaultTopicCount: 6,
    icon: (
      <span className="font-mono text-sm font-bold text-[#166534]">f⁻¹(x)</span>
    ),
  },
  {
    id: "calc2-ch10",
    chapterNumber: 10,
    title: "Derivatives & Integrals of Trig",
    description: "Trigonometric derivatives, integrals, and identities.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M8 22c4-12 8-12 12 0s8 12 12 0 8-12 12 0" />
      </svg>
    ),
  },
  {
    id: "calc2-ch11",
    chapterNumber: 11,
    title: "Exponential & Logarithmic Functions",
    description: "Natural logarithms, exponential growth, and decay models.",
    defaultTopicCount: 6,
    icon: (
      <span className="font-mono text-base font-bold text-[#166534]">ln(x)</span>
    ),
  },
  {
    id: "calc2-ch12",
    chapterNumber: 12,
    title: "Techniques of Integration",
    description: "Integration by parts, partial fractions, and trig substitutions.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-2xl font-bold text-[#166534]">
        ∫udv
      </div>
    ),
  },
  {
    id: "calc2-ch13",
    chapterNumber: 13,
    title: "Indeterminate Forms & Improper Integrals",
    description: "L'Hôpital's rule, infinity limits, and improper integrals.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex flex-col items-center justify-center font-mono text-xs font-bold text-[#166534]">
        <span>lim</span>
        <span className="text-[9px]">x→∞</span>
      </div>
    ),
  },
  {
    id: "calc2-ch14",
    chapterNumber: 14,
    title: "Infinite Sequences & Series",
    description: "Convergence tests, geometric series, and alternating series.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-2xl font-black text-[#166534]">
        ∑ aₙ
      </div>
    ),
  },
  {
    id: "calc2-ch15",
    chapterNumber: 15,
    title: "Power Series & Taylor Polynomials",
    description: "Taylor and Maclaurin series, radius and interval of convergence.",
    defaultTopicCount: 6,
    icon: (
      <div className="flex items-center justify-center w-10 h-10 font-serif text-sm font-bold text-[#166534]">
        ∑ cₙxⁿ
      </div>
    ),
  },
  {
    id: "calc2-ch16",
    chapterNumber: 16,
    title: "Polar Coordinates & Parametrics",
    description: "Parametric equations, polar curves, areas, and conic sections.",
    defaultTopicCount: 6,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="22" cy="22" r="14" strokeDasharray="3 3" />
        <path d="M22 8c6 5 8 10 5 14s-9 2-8-3 6-5 8-3" />
      </svg>
    ),
  },
];

// 8 Chapter Cards for Linear Algebra (Chapters 1 to 8)
export const LINEAR_ALGEBRA_CHAPTER_CARDS: ChapterCardItem[] = [
  {
    id: "linear-ch1",
    chapterNumber: 1,
    title: "Foundations & Linear Systems",
    description: "Linear equations, Gaussian elimination, and row echelon forms.",
    defaultTopicCount: 3,
    icon: (
      <span className="font-mono text-xs font-black tracking-tight text-[#166534]">
        Ax=b
      </span>
    ),
  },
  {
    id: "linear-ch2",
    chapterNumber: 2,
    title: "Vector Equations & Span",
    description: "Vectors in Rⁿ, linear combinations, and spanning sets.",
    defaultTopicCount: 3,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="36" x2="36" y2="36" />
        <line x1="8" y1="36" x2="8" y2="8" />
        <line x1="8" y1="36" x2="32" y2="12" />
        <path d="M24 12h8v8" />
      </svg>
    ),
  },
  {
    id: "linear-ch3",
    chapterNumber: 3,
    title: "Matrix Algebra & Inverses",
    description: "Matrix multiplication, transpose, and invertible matrices.",
    defaultTopicCount: 3,
    icon: (
      <div className="flex items-center justify-center font-mono text-xs font-bold text-[#166534]">
        [A⁻¹]
      </div>
    ),
  },
  {
    id: "linear-ch4",
    chapterNumber: 4,
    title: "Determinants & Properties",
    description: "Cofactor expansion, Cramer's rule, and geometric volume.",
    defaultTopicCount: 2,
    icon: (
      <div className="flex items-center justify-center font-mono text-sm font-bold text-[#166534]">
        |A|
      </div>
    ),
  },
  {
    id: "linear-ch5",
    chapterNumber: 5,
    title: "Vector Spaces & Subspaces",
    description: "Subspaces, null spaces, column spaces, basis, and coordinate systems.",
    defaultTopicCount: 4,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 6 38 14 38 30 22 38 6 30 6 14" />
        <line x1="22" y1="6" x2="22" y2="38" />
        <line x1="6" y1="14" x2="38" y2="30" />
      </svg>
    ),
  },
  {
    id: "linear-ch6",
    chapterNumber: 6,
    title: "Linear Transformations & Rank",
    description: "Matrix transformations, kernel, range, and rank-nullity theorem.",
    defaultTopicCount: 2,
    icon: (
      <span className="font-mono text-xs font-bold text-[#166534]">
        T:V→W
      </span>
    ),
  },
  {
    id: "linear-ch7",
    chapterNumber: 7,
    title: "Eigenvalues & Diagonalization",
    description: "Characteristic polynomials, eigenspaces, and matrix powers.",
    defaultTopicCount: 2,
    icon: (
      <span className="font-serif text-2xl font-bold text-[#166534]">
        λ
      </span>
    ),
  },
  {
    id: "linear-ch8",
    chapterNumber: 8,
    title: "Orthogonality & Factorizations",
    description: "Inner products, Gram-Schmidt, LU, QR, and SVD factorizations.",
    defaultTopicCount: 8,
    icon: (
      <svg className="w-10 h-10 text-[#166534]" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="36" x2="36" y2="36" />
        <line x1="8" y1="36" x2="8" y2="8" />
        <rect x="8" y="26" width="10" height="10" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

function filterTopicByCalculusChapter(topic: CategorizedTopic, chNum: number): boolean {
  const ch = (topic as any).chapterNumber;
  if (ch !== undefined && ch !== null) return ch === chNum;
  const sub = (topic.subCategory || "").toLowerCase();
  return sub === `chapter-${chNum}`;
}

function filterTopicByLinearChapter(topic: CategorizedTopic, chNum: number): boolean {
  const id = (topic.id || "").toLowerCase();
  if (chNum === 1) return id === "foundations" || id === "systems" || id === "vectors";
  if (chNum === 2) return id === "matrices" || id === "inverses" || id === "advanced-matrix-topics";
  if (chNum === 3) return id === "determinants";
  if (chNum === 4) return id === "independence-span" || id === "fundamental-subspaces" || id === "change-of-basis" || id === "complex-vector-spaces";
  if (chNum === 5) return id === "linear-transformations" || id === "rank";
  if (chNum === 6) return id === "eigen" || id === "diagonalization";
  if (chNum === 7) return id === "orthogonality" || id === "inner-product" || id === "least-squares";
  if (chNum === 8) return id === "lu" || id === "qr" || id === "svd" || id === "matrix-factorizations" || id === "quadratic-forms" || id === "numerical-linear-algebra" || id === "optimization" || id === "applications";
  return true;
}

export default function PublicPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active view: "main" | "categories" | "topics-linear" | "topics-calculus" | "topics-calculus-2"
  const [activeView, setActiveView] = useState<"main" | "categories" | "topics-linear" | "topics-calculus" | "topics-calculus-2">(() => {
    const search = window.location.hash.includes("?")
      ? window.location.hash.substring(window.location.hash.indexOf("?"))
      : window.location.search;
    const params = new URLSearchParams(search);
    const tab = params.get("tab");
    if (tab === "topics") {
      const returnView = sessionStorage.getItem("returningTopicView");
      if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "topics-calculus-2") {
        return returnView;
      }
      return "categories";
    }
    return "main";
  });
  const [topicSearch, setTopicSearch] = useState("");
  const [selectedLinearChapter, setSelectedLinearChapter] = useState<number | null>(() => {
    const returnView = sessionStorage.getItem("returningTopicView");
    const ch = sessionStorage.getItem("returningChapter");
    if (returnView === "topics-linear" && ch) {
      const parsed = parseInt(ch, 10);
      return isNaN(parsed) ? null : parsed;
    }
    return null;
  });
  const [selectedCalculusChapter, setSelectedCalculusChapter] = useState<number | null>(() => {
    const returnView = sessionStorage.getItem("returningTopicView");
    const ch = sessionStorage.getItem("returningChapter");
    if (returnView === "topics-calculus" && ch) {
      const parsed = parseInt(ch, 10);
      return isNaN(parsed) ? null : parsed;
    }
    return null;
  });
  const [selectedCalculus2Chapter, setSelectedCalculus2Chapter] = useState<number | null>(() => {
    const returnView = sessionStorage.getItem("returningTopicView");
    const ch = sessionStorage.getItem("returningChapter");
    if (returnView === "topics-calculus-2" && ch) {
      const parsed = parseInt(ch, 10);
      return isNaN(parsed) ? null : parsed;
    }
    return null;
  });
  const [sortBy, setSortBy] = useState<"popular" | "az" | "examples">("popular");
  const [selectedModalCalc, setSelectedModalCalc] = useState<LinearCalculatorCard | null>(null);
  const [hoveredShowcaseCalc, setHoveredShowcaseCalc] = useState<LinearCalculatorCard | null>(null);

  // Split topics by subject
  const linearTopics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "linear-algebra"), []);
  const calculus1Topics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus" && ((t as any).chapterNumber || 1) <= 8), []);
  const calculus2Topics = useMemo(() => ALL_TOPICS.filter((t) => t.category === "calculus" && ((t as any).chapterNumber || 1) >= 9), []);
  const calculusTopics = calculus1Topics;

  // Filtered Linear Algebra topics
  const filteredLinearTopics = useMemo(() => {
    let list = linearTopics;
    if (selectedLinearChapter !== null) {
      list = list.filter((t) => filterTopicByLinearChapter(t, selectedLinearChapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query)
    );
  }, [linearTopics, topicSearch, selectedLinearChapter]);

  const sortedLinearTopics = useMemo(() => {
    let list = filteredLinearTopics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredLinearTopics, sortBy]);

  // Filtered Calculus 1 topics
  const filteredCalculus1Topics = useMemo(() => {
    let list = calculus1Topics;
    if (selectedCalculusChapter !== null) {
      list = list.filter((t) => filterTopicByCalculusChapter(t, selectedCalculusChapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculus1Topics, topicSearch, selectedCalculusChapter]);

  const sortedCalculus1Topics = useMemo(() => {
    let list = filteredCalculus1Topics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredCalculus1Topics, sortBy]);

  // Filtered Calculus 2 topics
  const filteredCalculus2Topics = useMemo(() => {
    let list = calculus2Topics;
    if (selectedCalculus2Chapter !== null) {
      list = list.filter((t) => filterTopicByCalculusChapter(t, selectedCalculus2Chapter));
    }
    const query = topicSearch.toLowerCase().trim();
    if (!query) return list;
    return list.filter((t) => 
      t.title.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query) ||
      (t.subCategoryLabel && t.subCategoryLabel.toLowerCase().includes(query))
    );
  }, [calculus2Topics, topicSearch, selectedCalculus2Chapter]);

  const sortedCalculus2Topics = useMemo(() => {
    let list = filteredCalculus2Topics;
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "examples") {
      return [...list].sort((a, b) => (b.examples?.length || 0) - (a.examples?.length || 0));
    }
    return list;
  }, [filteredCalculus2Topics, sortBy]);

  // Sync tab search param with view
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "home") {
      setActiveView("main");
    } else if (tab === "topics") {
      const returnView = sessionStorage.getItem("returningTopicView");
      const returnChapterStr = sessionStorage.getItem("returningChapter");
      const returnChapter = returnChapterStr ? parseInt(returnChapterStr, 10) : null;

      if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "topics-calculus-2") {
        setActiveView(returnView as any);
        if (returnChapter !== null && !isNaN(returnChapter)) {
          if (returnView === "topics-linear") setSelectedLinearChapter(returnChapter);
          if (returnView === "topics-calculus") setSelectedCalculusChapter(returnChapter);
          if (returnView === "topics-calculus-2") setSelectedCalculus2Chapter(returnChapter);
        }
        sessionStorage.removeItem("returningTopicView");
        sessionStorage.removeItem("returningChapter");
      } else {
        setActiveView((prev) => (prev === "main" ? "categories" : prev));
      }
    }
  }, [location.search, location.pathname]);

  // Listen to navigation events from Navbar
  useEffect(() => {
    const handleNavTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<"home" | "calculators" | "topics">;
      if (customEvent.detail === "home") {
        setActiveView("main");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (customEvent.detail === "topics") {
        setActiveView("categories");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("navtabchange", handleNavTabChange);
    return () => window.removeEventListener("navtabchange", handleNavTabChange);
  }, []);

  // Check if returning from topic page
  useEffect(() => {
    const returnView = sessionStorage.getItem("returningTopicView");
    const returnChapterStr = sessionStorage.getItem("returningChapter");
    const returnChapter = returnChapterStr ? parseInt(returnChapterStr, 10) : null;

    if (returnView === "topics-linear" || returnView === "topics-calculus" || returnView === "topics-calculus-2" || returnView === "categories") {
      setActiveView(returnView as any);
      if (returnChapter !== null && !isNaN(returnChapter)) {
        if (returnView === "topics-linear") setSelectedLinearChapter(returnChapter);
        if (returnView === "topics-calculus") setSelectedCalculusChapter(returnChapter);
        if (returnView === "topics-calculus-2") setSelectedCalculus2Chapter(returnChapter);
      }
      sessionStorage.removeItem("returningTopicView");
      sessionStorage.removeItem("returningChapter");
    } else if (sessionStorage.getItem("returningFromTopic")) {
      setActiveView("categories");
      sessionStorage.removeItem("returningFromTopic");
    }
  }, []);

  // Broadcast current activeView to Navbar
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("pageviewchange", { detail: { view: activeView } }));
  }, [activeView]);

  // Topic Mathematical Icon / Glyph Renderer matching reference image style
  const renderTopicGlyph = (topic: CategorizedTopic) => {
    const id = (topic.id || "").toLowerCase();
    const title = (topic.title || "").toLowerCase();

    if (id.includes("foundations") || title.includes("foundations")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white shadow-sm">
          <Landmark className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("real-number") || title.includes("real number") || id.includes("interval") || title.includes("interval")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-serif text-xl font-bold text-white shadow-sm">
          ℝ
        </div>
      );
    }
    if (id.includes("distance") || id.includes("midpoint") || title.includes("distance") || title.includes("midpoint")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white shadow-sm">
          <TrendingUp className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("line") || id.includes("slope") || title.includes("line") || title.includes("slope")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white shadow-sm">
          <Activity className="w-5 h-5" />
        </div>
      );
    }
    if (id.includes("function") || title.includes("function")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-mono text-sm font-bold text-white shadow-sm">
          f(x)
        </div>
      );
    }
    if (id.includes("domain") || id.includes("range") || title.includes("domain") || title.includes("range")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-mono text-xs font-bold text-white shadow-sm">
          [x]
        </div>
      );
    }
    if (id.includes("limit") || title.includes("limit")) {
      return (
        <div className="flex flex-col items-center justify-center h-10 w-10 rounded-xl bg-[#166534] text-white font-mono leading-tight shadow-sm">
          <span className="text-[10px] font-bold">lim</span>
          <span className="text-[7.5px] opacity-90">x→a</span>
        </div>
      );
    }
    if (id.includes("derivative") || title.includes("derivative")) {
      return (
        <div className="flex flex-col items-center justify-center h-10 w-10 rounded-xl bg-[#166534] text-white font-mono leading-tight shadow-sm">
          <span className="text-[9px] font-bold border-b border-white/60 pb-[0.5px]">d</span>
          <span className="text-[9px] font-bold pt-[0.5px]">dx</span>
        </div>
      );
    }
    if (id.includes("integral") || id.includes("integration") || title.includes("integral")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-serif text-xl font-bold text-white shadow-sm">
          ∫
        </div>
      );
    }
    if (id.includes("matrix") || id.includes("determinant") || id.includes("eigen") || id.includes("vector")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-mono text-xs font-bold text-white shadow-sm">
          [A]
        </div>
      );
    }
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] font-serif text-lg font-bold text-white shadow-sm">
        λ
      </div>
    );
  };

  const handleTopicClick = (topicId: string, category: "linear-algebra" | "calculus", e: React.MouseEvent) => {
    e.preventDefault();
    // If chapterNumber >= 9 it's a Calculus II topic
    const topic = ALL_TOPICS.find(t => t.id === topicId);
    const chNum = (topic as any)?.chapterNumber || 1;
    if (category === "calculus" && chNum >= 9) {
      sessionStorage.setItem("returningTopicView", "topics-calculus-2");
    } else if (category === "calculus") {
      sessionStorage.setItem("returningTopicView", "topics-calculus");
    } else {
      sessionStorage.setItem("returningTopicView", "topics-linear");
    }
    navigate(`/topics/${topicId}`);
  };

  // GSAP-Powered Live 3D Coverflow Carousel
  const carouselProgress = useRef({ value: 2 });
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const gsapTimelineRef = useRef<gsap.core.Tween | null>(null);
  const isUserInteracting = useRef(false);
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(2);

  const update3DCarousel = useCallback(() => {
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const current = carouselProgress.current.value;
    const activeIdx = ((Math.round(current) % total) + total) % total;
    setActiveIndicatorIndex(activeIdx);

    cardElementsRef.current.forEach((cardEl, idx) => {
      if (!cardEl) return;

      let diff = (idx - current) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const absDiff = Math.abs(diff);

      if (absDiff > 2.6) {
        gsap.set(cardEl, { opacity: 0, pointerEvents: "none", display: "none" });
        return;
      }

      const spacing = typeof window !== "undefined" && window.innerWidth < 640 ? 180 : 225;
      const x = diff * spacing;
      const rotateY = -diff * 14;
      const rotateZ = diff * 1.6;
      const scale = Math.max(0.78, 1.06 - absDiff * 0.12);
      const zIndex = Math.round(50 - absDiff * 10);
      const opacity = Math.max(0, 1 - Math.pow(absDiff / 2.7, 2));
      const isCenter = absDiff < 0.45;

      gsap.set(cardEl, {
        display: "flex",
        x: x,
        y: "-50%",
        rotateY: rotateY,
        rotateZ: rotateZ,
        scale: scale,
        zIndex: zIndex,
        opacity: opacity,
        pointerEvents: "auto",
        boxShadow: isCenter
          ? "0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(22,163,74,0.35)"
          : "0 12px 35px rgba(0,0,0,0.4)",
      });

      if (isCenter) {
        cardEl.classList.add("ring-2", "ring-[#16a34a]", "ring-offset-2", "ring-offset-black/40");
      } else {
        cardEl.classList.remove("ring-2", "ring-[#16a34a]", "ring-offset-2", "ring-offset-black/40");
      }
    });
  }, []);

  const startGSAPLiveMotion = useCallback(() => {
    if (gsapTimelineRef.current) {
      gsapTimelineRef.current.kill();
    }

    // Smooth, continuous slow 3D conveyor rotation using GSAP (~5.0 seconds per card)
    gsapTimelineRef.current = gsap.to(carouselProgress.current, {
      value: `+=${LINEAR_ALGEBRA_CALCULATORS.length}`,
      duration: LINEAR_ALGEBRA_CALCULATORS.length * 5.0,
      ease: "none",
      repeat: -1,
      onUpdate: update3DCarousel,
    });
  }, [update3DCarousel]);

  useEffect(() => {
    if (activeView !== "main") return;

    startGSAPLiveMotion();
    update3DCarousel();

    return () => {
      if (gsapTimelineRef.current) gsapTimelineRef.current.kill();
    };
  }, [activeView, startGSAPLiveMotion, update3DCarousel]);

  const smoothlyTransitionTo = (targetIdx: number) => {
    if (gsapTimelineRef.current) gsapTimelineRef.current.kill();

    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const current = carouselProgress.current.value;
    const currentNormalized = ((current % total) + total) % total;
    let diff = targetIdx - currentNormalized;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    gsap.to(carouselProgress.current, {
      value: current + diff,
      duration: 0.9,
      ease: "power3.out",
      onUpdate: update3DCarousel,
      onComplete: () => {
        gsap.delayedCall(3, () => {
          if (!isUserInteracting.current) {
            startGSAPLiveMotion();
          }
        });
      },
    });
  };

  const handlePrevSlide = () => {
    const current = Math.round(carouselProgress.current.value);
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const prevIdx = (((current - 1) % total) + total) % total;
    smoothlyTransitionTo(prevIdx);
  };

  const handleNextSlide = () => {
    const current = Math.round(carouselProgress.current.value);
    const total = LINEAR_ALGEBRA_CALCULATORS.length;
    const nextIdx = (current + 1) % total;
    smoothlyTransitionTo(nextIdx);
  };

  const handleMouseEnter = () => {
    isUserInteracting.current = true;
    if (gsapTimelineRef.current) {
      gsap.to(gsapTimelineRef.current, { timeScale: 0, duration: 0.6, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    isUserInteracting.current = false;
    if (gsapTimelineRef.current) {
      gsap.to(gsapTimelineRef.current, { timeScale: 1, duration: 0.9, ease: "power2.in" });
    }
  };

  // Mobile Touch Swipe Handlers for 3D Carousel
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    isUserInteracting.current = true;
    if (gsapTimelineRef.current) {
      gsap.to(gsapTimelineRef.current, { timeScale: 0, duration: 0.3 });
    }
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;

    if (delta > 35) {
      // Swiped right -> go to previous
      handlePrevSlide();
    } else if (delta < -35) {
      // Swiped left -> go to next
      handleNextSlide();
    } else {
      isUserInteracting.current = false;
      if (gsapTimelineRef.current) {
        gsap.to(gsapTimelineRef.current, { timeScale: 1, duration: 0.9 });
      }
    }
  };

  useEffect(() => {
    if (activeView !== "main") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#0e131b]">
      {activeView === "main" ? (
        /* ========================================================================= */
        /* VIEW 1: MATHVERSE LINEAR ALGEBRA 3D CAROUSEL HERO (EXACT REFERENCE IMAGE) */
        /* ========================================================================= */
        <div
          key="main-view"
          className="relative min-h-screen bg-[#092328] overflow-hidden flex flex-col justify-between"
        >
          {/* ── 1. Upper Hero Section Framed Close to the Edge with a Border ── */}
          <div className="relative w-full pt-20 sm:pt-24 pb-6 px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="relative w-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-[#14444d] shadow-[0_20px_60px_rgba(0,0,0,0.45)] pt-12 sm:pt-16 pb-16 sm:pb-24 lg:pb-28">
              {/* Background Image inside the bordered frame */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={dashboardBgUser}
                  alt="Dashboard Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
              </div>

              {/* Inner Content */}
              <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
                <div className="max-w-2xl">
                  {/* Red Tag / Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-[#16a34a] font-extrabold text-xs sm:text-[13px] tracking-[0.25em] uppercase block mb-2 sm:mb-3">
                      MATH TOOLS & TOPICS
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-3 sm:mb-4"
                  >
                    <span className="text-white block font-black">Linear Algebra / Calculus</span>
                    <span className="text-white block font-black">1 & 2</span>
                    <span className="text-[#16a34a] block font-black">Calculators</span>
                  </motion.h1>

                  {/* Subtitle Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className="text-[#D1D5DB] text-xs sm:text-sm md:text-base max-w-md font-normal leading-relaxed mb-5 sm:mb-6"
                  >
                    Solve vectors, matrices, systems of equations, and more with our easy-to-use linear algebra calculators.
                  </motion.p>

                  {/* CTA Action Buttons: Explore Calculators & Browse Topics */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    className="flex flex-wrap items-center gap-3 sm:gap-4"
                  >
                    {/* Primary Button: Explore Calculators */}
                    <button
                      onClick={(e) => {
                        playNavButtonAnimation(e, { color: "rgba(255, 255, 255, 0.4)" });
                        navigate("/calculator-hub");
                      }}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#166534]/40 hover:shadow-xl hover:shadow-[#166534]/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Calculator className="w-4 h-4 shrink-0" />
                      <span>Explore Calculators</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    {/* Secondary Button: Browse Topics */}
                    <button
                      onClick={(e) => {
                        playNavButtonAnimation(e, { color: "rgba(34, 197, 94, 0.45)" });
                        setActiveView("categories");
                        navigate("/?tab=topics");
                        window.dispatchEvent(new CustomEvent("navtabchange", { detail: "topics" }));
                      }}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 shrink-0 text-white/90" />
                      <span>Browse Topics</span>
                      <ArrowRight className="w-4 h-4 shrink-0 text-white/90" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main Lower Content Layout (23 Calculators Overview) with Pure White Background ── */}
          <div className="relative z-10 w-full bg-[#FFFFFF] border-t border-[#D1FAE5] py-12 sm:py-16 lg:py-20 flex flex-col justify-between flex-1">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-between flex-1">

            {/* ── Animated Linear Algebra Header Label ── */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start mb-6 sm:mb-8"
            >
              {/* Badge with pulse dot & shimmer animation */}
              <div 
                className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#166534]/10 border border-[#166534]/25 text-[#166534] shadow-xs cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#166534] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#166534]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase">
                  Linear Algebra
                </span>
              </div>

              {/* Animated Heading */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight flex items-center gap-3"
              >
                <span>Linear Algebra</span>
                <span className="text-[#166534] font-light">|</span>
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#6B7280]">
                  23 Specialized Calculators
                </span>
              </motion.h2>
            </motion.div>

            {/* ── Linear Algebra Calculators Overview ── */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-10 w-full px-2 sm:px-0 mb-4 self-start"
            >
              {/* Two-column layout: Left text (34%) | divider | Right unscrollable showcase (66%) */}
              <div className="flex flex-col lg:flex-row items-stretch gap-0">

                {/* ── LEFT: Title + Paragraph (Compact & Streamlined with Smooth Animations) ── */}
                <div className="w-full lg:w-[34%] flex flex-col justify-start pr-0 lg:pr-6 mb-6 lg:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5 mb-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#166534] text-white shadow-md">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111827]">
                      Linear Algebra Calculators
                    </h3>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15px] sm:text-[16px] leading-[1.7] font-normal text-[#4B5563] text-justify"
                  >
                    The Linear Algebra Calculator System consists of 23 specialized calculators designed to help students understand, solve, and analyze important concepts in Linear Algebra. These calculators include tools for solving systems of linear equations, least squares problems, linear transformations, quadratic forms, and general matrix calculations. Users can perform matrix operations, find inverses, determinants, ranks, nullities, and transposes.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15px] sm:text-[16px] leading-[1.7] font-normal text-[#4B5563] text-justify mt-3"
                  >
                    The system also provides vector-based calculators for vector operations, dot products, cross products, projections, linear independence, combinations, bases, and spans. Advanced calculators are included for eigenvalues, eigenvectors, matrix diagonalization, LU, QR, and SVD decomposition giving you a complete, step-by-step computational environment.
                  </motion.p>
                </div>

                {/* ── VERTICAL DIVIDER ── */}
                <div className="hidden lg:flex flex-col items-center mx-5 self-stretch">
                  <div className="w-px flex-1 bg-[#E5E7EB] rounded-full" />
                </div>
                {/* Horizontal divider for mobile */}
                <div className="block lg:hidden w-full h-px bg-[#E5E7EB] rounded-full my-6" />

                {/* ── RIGHT: Expanded Interactive Calculators Showcase (NON-SCROLLABLE) ── */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 w-full flex flex-col pl-0 lg:pl-3"
                >
                  {/* Poster Header (Moved OUTSIDE the border) */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3 pb-3 mb-2">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-serif text-3xl sm:text-4xl font-black text-[#166534] tracking-tight">
                        23
                      </span>
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-[#0F172A] uppercase">
                        Linear Algebra Calculators
                      </h4>
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Hover card to inspect • Click to launch
                    </p>
                  </div>

                  {/* Poster Container Card with Dashboard BG strictly inside the border; overflow-visible so hover tooltips can pop outside */}
                  <div className="w-full rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative">
                    {/* Background Image strictly clipped inside the border with crisp display */}
                    <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
                      <img
                        src={dashboardBg}
                        alt="Linear Algebra Background"
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Subtle balancing layer so white cards stay crisp against the wallpaper without turning it black */}
                      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                    </div>

                    {/* Non-scrollable Full Responsive Calculator Grid (All 23 displayed cleanly with smooth staggered entry) */}
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5 select-none">
                      {LINEAR_ALGEBRA_CALCULATORS.map((calc, idx) => (
                        <div
                          key={calc.id}
                          className={`relative ${hoveredShowcaseCalc?.id === calc.id ? "z-40" : "z-10"}`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.035, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => setSelectedModalCalc(calc)}
                            onMouseEnter={() => setHoveredShowcaseCalc(calc)}
                            onMouseLeave={() => setHoveredShowcaseCalc((prev) => (prev?.id === calc.id ? null : prev))}
                            className={`relative flex flex-col justify-between p-2.5 sm:p-3 rounded-xl bg-white border cursor-pointer text-left min-h-[108px] sm:min-h-[114px] transition-colors duration-200 ${
                              hoveredShowcaseCalc?.id === calc.id
                                ? "border-[#166534] shadow-lg shadow-[#166534]/20 ring-2 ring-[#166534]/25"
                                : "border-[#E2E8F0] hover:border-[#166534]/60 hover:shadow-md shadow-xs"
                            }`}
                          >
                            {/* Card Top: Index badge & Glyphs */}
                            <div className="flex items-start justify-between gap-1 mb-1.5">
                              <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-md bg-[#166534] text-[9.5px] font-black text-white shrink-0 shadow-xs">
                                {idx + 1}
                              </span>
                              <div className="h-6 w-6 rounded-md bg-[#166534] flex items-center justify-center text-white shrink-0 overflow-hidden text-[9.5px] shadow-xs group-hover:scale-110 group-hover:bg-[#14532D] transition-all duration-200">
                                {calc.glyph}
                              </div>
                            </div>

                            {/* Card Content: Title & Summary */}
                            <div className="flex-1 flex flex-col justify-end">
                              <div className="text-[11px] sm:text-xs font-black text-[#1E293B] group-hover:text-[#166534] line-clamp-1 leading-snug transition-colors duration-200">
                                {calc.title}
                              </div>
                              <p className="text-[9.5px] sm:text-[10px] text-[#64748B] line-clamp-2 leading-relaxed mt-0.5">
                                {calc.description}
                              </p>
                            </div>
                          </motion.div>

                          {/* Hover Tooltip: Smooth & Stable */}
                          {hoveredShowcaseCalc?.id === calc.id && (
                            <div 
                              className={`hidden lg:block absolute left-1/2 -translate-x-1/2 z-50 w-72 pointer-events-none drop-shadow-xl ${
                                idx < 5 
                                  ? "top-[calc(100%+10px)]" 
                                  : "bottom-[calc(100%+10px)]"
                              }`}
                            >
                              <div 
                                className="rounded-xl bg-[#0F172A] text-white p-3.5 border border-[#334155] text-left shadow-2xl relative pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                              >
                                <div className="flex items-center gap-2 mb-1.5 border-b border-white/10 pb-1.5">
                                  <span className="flex items-center justify-center h-4.5 w-4.5 rounded bg-[#166534] text-white text-[9.5px] font-bold">
                                    #{idx + 1}
                                  </span>
                                  <span className="font-bold text-xs text-white line-clamp-1">
                                    {calc.title}
                                  </span>
                                </div>
                                <div className="text-[11px] text-[#CBD5E1] leading-relaxed mb-1.5">
                                  <strong className="text-white block font-semibold mb-0.5 text-[11px]">What it calculates:</strong>
                                  {calc.popoutDetail || calc.description}
                                </div>
                                <div className="flex items-center justify-between text-[10px] text-[#94A3B8] pt-1 border-t border-white/10">
                                  <span>💡 Click to view modal</span>
                                  <span className="text-[#4ade80] font-semibold">Launch ↗</span>
                                </div>
                                {/* Arrow Pointer */}
                                <div className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0F172A] rotate-45 ${
                                  idx < 5
                                    ? "-top-1.5 border-l border-t border-[#334155]"
                                    : "-bottom-1.5 border-r border-b border-[#334155]"
                                }`} />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* ── Animated Calculus 1 & 2 Section Label & Explanation ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-[#D1FAE5] w-full"
            >
              {/* Badge with pulse dot */}
              <div 
                className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#166534]/10 border border-[#166534]/25 text-[#166534] shadow-xs cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#166534] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#166534]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase">
                  Calculus 1 & 2
                </span>
              </div>

              {/* Animated Heading */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight flex items-center gap-3 mb-6"
              >
                <span>Calculus 1 & 2</span>
                <span className="text-[#166534] font-light">|</span>
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#6B7280]">
                  Differential, Integral & Multivariable Topics
                </span>
              </motion.h2>

              {/* Text Explanations (18px text size) */}
              <div className="flex flex-col gap-4 text-[#4B5563] w-full">
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[18px] leading-[1.8] font-normal text-justify"
                >
                  The Calculus Calculator System consists of 29 specialized calculators, divided into 21 Calculus 1 calculators and 8 Calculus 2 calculators, designed to provide students with a complete environment for learning, practicing, and solving mathematical problems. Calculus 1 focuses on foundational concepts, including absolute values, coordinate geometry, lines, circles, limits, continuity, derivatives, and their applications. Students can use calculators for the Power Rule, Product Rule, Quotient Rule, Chain Rule, Implicit Differentiation, Higher-Order Derivatives, Related Rates, Critical Points, Increasing and Decreasing Intervals, Concavity, Inflection Points, Optimization, and Full Curve Analysis. Calculus 1 also introduces integration through antiderivatives, indefinite integrals, definite integrals, and the Fundamental Theorem of Calculus.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[18px] leading-[1.8] font-normal text-justify"
                >
                  Calculus 2 continues these concepts by introducing more advanced integration techniques and applications. Its calculators help students solve complex integrals and explore advanced topics such as integration methods, improper integrals, sequences, series, convergence, and other higher-level mathematical concepts. These tools allow students to understand complicated processes through organized solutions and step-by-step explanations.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[18px] leading-[1.8] font-normal text-justify"
                >
                  Together, the 29 calculators create a comprehensive Calculus learning system. By keeping Calculus 1 and Calculus 2 organized separately, students can easily access calculators appropriate to their current topic while gradually progressing from fundamental concepts to more advanced mathematical analysis.
                </motion.p>
              </div>

              {/* ── Calculus 29 Calculators Poster Showcase Grid (Like an image poster with hover & click) ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mt-8"
              >
                {/* Poster Header (Moved OUTSIDE the border) */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-3 pb-3 mb-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-serif text-3xl sm:text-4xl font-black text-[#166534] tracking-tight">
                      29
                    </span>
                    <h4 className="text-base sm:text-lg font-black tracking-tight text-[#0F172A] uppercase">
                      Calculus 1 & 2 Specialized Calculators
                    </h4>
                  </div>
                  <p className="text-xs text-[#64748B] font-medium">
                    Hover card to inspect • Click to launch
                  </p>
                </div>

                {/* Poster Container Card with Background.png strictly inside the border; overflow-visible so hover tooltips can pop outside */}
                <div className="w-full rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow relative">
                  {/* Background Image strictly clipped inside the border */}
                  <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
                    <img
                      src={calculusBg}
                      alt="Calculus Background"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Subtle balancing layer so white cards stay crisp against the wallpaper without turning it black */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                  </div>

                  {/* Non-scrollable Full Responsive Calculator Grid (All 29 displayed cleanly with smooth staggered entry) */}
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 select-none">
                    {CALCULUS_CALCULATORS.map((calc, idx) => (
                      <div
                        key={calc.id}
                        className={`relative ${hoveredShowcaseCalc?.id === calc.id ? "z-40" : "z-10"}`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.96 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.035, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onClick={() => setSelectedModalCalc(calc)}
                          onMouseEnter={() => setHoveredShowcaseCalc(calc)}
                          onMouseLeave={() => setHoveredShowcaseCalc((prev) => (prev?.id === calc.id ? null : prev))}
                          className={`relative flex flex-col justify-between p-2.5 sm:p-3 rounded-xl bg-white border cursor-pointer text-left min-h-[110px] sm:min-h-[118px] transition-colors duration-200 ${
                            hoveredShowcaseCalc?.id === calc.id
                              ? "border-[#166534] shadow-lg shadow-[#166534]/20 ring-2 ring-[#166534]/25"
                              : "border-[#E2E8F0] hover:border-[#166534]/60 hover:shadow-md shadow-xs"
                          }`}
                        >
                          {/* Card Top: Index badge, Category tag & Glyphs */}
                          <div className="flex items-start justify-between gap-1 mb-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-md bg-[#166534] text-[9.5px] font-black text-white shrink-0 shadow-xs">
                                {idx + 1}
                              </span>
                              <span className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded ${
                                calc.category === "Calculus 1"
                                  ? "bg-[#166534]/10 text-[#166534]"
                                  : "bg-[#1E293B]/10 text-[#1E293B]"
                              }`}>
                                {calc.category === "Calculus 1" ? "Calc 1" : "Calc 2"}
                              </span>
                            </div>
                            <div className="h-6 w-6 rounded-md bg-[#166534] flex items-center justify-center text-white shrink-0 overflow-hidden text-[9.5px] shadow-xs group-hover:scale-110 group-hover:bg-[#14532D] transition-all duration-200">
                              {calc.glyph}
                            </div>
                          </div>

                          {/* Card Content: Title & Summary */}
                          <div className="flex-1 flex flex-col justify-end">
                            <div className="text-[11px] sm:text-xs font-black text-[#1E293B] group-hover:text-[#166534] line-clamp-1 leading-snug transition-colors duration-200">
                              {calc.title}
                            </div>
                            <p className="text-[9.5px] sm:text-[10px] text-[#64748B] line-clamp-2 leading-relaxed mt-0.5">
                              {calc.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Hover Tooltip: Smooth & Stable */}
                        {hoveredShowcaseCalc?.id === calc.id && (
                          <div 
                            className={`hidden lg:block absolute left-1/2 -translate-x-1/2 z-50 w-72 pointer-events-none drop-shadow-xl ${
                              idx < 6
                                ? "top-[calc(100%+10px)]"
                                : "bottom-[calc(100%+10px)]"
                            }`}
                          >
                            <div 
                              className="rounded-xl bg-[#0F172A] text-white p-3.5 border border-[#334155] text-left shadow-2xl relative pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1.5 border-b border-white/10 pb-1.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="flex items-center justify-center h-4.5 w-4.5 rounded bg-[#166534] text-white text-[9.5px] font-bold">
                                    #{idx + 1}
                                  </span>
                                  <span className="font-bold text-xs text-white line-clamp-1">
                                    {calc.title}
                                  </span>
                                </div>
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-[#86efac]">
                                  {calc.category}
                                </span>
                              </div>
                              <div className="text-[11px] text-[#CBD5E1] leading-relaxed mb-1.5">
                                <strong className="text-white block font-semibold mb-0.5 text-[11px]">What it calculates:</strong>
                                {calc.popoutDetail || calc.description}
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-[#94A3B8] pt-1 border-t border-white/10">
                                <span>💡 Click to view modal</span>
                                <span className="text-[#4ade80] font-semibold">Launch ↗</span>
                              </div>
                              {/* Arrow Pointer */}
                              <div className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0F172A] rotate-45 ${
                                idx < 6
                                  ? "-top-1.5 border-l border-t border-[#334155]"
                                  : "-bottom-1.5 border-r border-b border-[#334155]"
                              }`} />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            </div>
          </div>

            {/* ── Calculator Popout Modal ── */}
            {selectedModalCalc && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setSelectedModalCalc(null)}
              >
                <div 
                  className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-black/60 border border-[#D1FAE5] text-[#111827] transform transition-all animate-in zoom-in-95 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close X Button */}
                  <button
                    onClick={() => setSelectedModalCalc(null)}
                    className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Modal Header */}
                  <div className="flex items-center gap-4 pr-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-lg shadow-[#166534]/30">
                      {selectedModalCalc.glyph}
                    </div>
                    <div>
                      {selectedModalCalc.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#dcfce7] bg-[#fbf2f4] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#166534] mb-1">
                          <Star className="h-3 w-3 fill-[#166534] text-[#166534]" />
                          Popular Tool
                        </span>
                      )}
                      <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight">
                        &ldquo;{selectedModalCalc.title}&rdquo;
                      </h2>
                    </div>
                  </div>

                  {/* Modal Body / Popout Detail */}
                  <div className="mt-6 rounded-2xl bg-[#FBF8F8] border border-[#F0E4E6] p-5">
                    <p className="text-sm sm:text-base text-[#374151] leading-relaxed font-medium">
                      {selectedModalCalc.popoutDetail || selectedModalCalc.description}
                    </p>
                  </div>

                  {/* Modal Actions */}
                  <div className="mt-7 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      onClick={() => setSelectedModalCalc(null)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        const target = selectedModalCalc.route || (selectedModalCalc.category?.startsWith("Calculus") ? `/calculus-calculators?tool=${selectedModalCalc.toolId}` : `/calculators?tool=${selectedModalCalc.toolId}`);
                        setSelectedModalCalc(null);
                        navigate(target);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#166534] hover:bg-[#14532D] text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#166534]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Launch Calculator</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      ) : activeView === "categories" ? (
        /* ========================================================================= */
        /* VIEW 2: CHOOSE YOUR TOPIC (MATCHING IMAGE 2 EXACTLY)                      */
        /* ========================================================================= */
        <div
          key="categories-view"
          className="relative min-h-screen bg-[#FDFBFB] pb-20"
        >
          {/* ========================================================================= */}
          {/* 1. TOP HERO SECTION (Chalkboard Background with Student)                 */}
          {/* ========================================================================= */}
          <section className="relative w-full overflow-hidden bg-[#0e131b] pt-20 pb-24 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36">
            {/* Blackboard Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-transparent to-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.75rem] leading-[1.08]"
                >
                  <span className="text-[#22c55e]">ALL TOPICS.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-5 max-w-lg text-sm sm:text-base font-normal text-white/80 leading-relaxed"
                >
                  Interactive learning, calculators, and
                  <br className="hidden sm:inline" />
                  step-by-step solutions all in one place.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-7 flex flex-wrap items-center gap-3.5"
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById("disciplines-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532D] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#166534]/30 transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Explore Topics</span>
                  </button>

                  <button
                    onClick={() => navigate("/calculator-hub")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-[#F9FAFB] px-5 py-3 text-xs sm:text-sm font-bold text-[#111827] shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <Calculator className="h-4 w-4 text-[#166534]" />
                    <span>Try Calculators</span>
                  </button>
                </motion.div>

                {/* Down Arrow Chevron */}
                <div className="mt-8">
                  <ChevronDown className="h-5 w-5 text-white/70 animate-bounce" />
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 2. THREE MAIN DISCIPLINE CARDS (Overlapping Hero Bottom)                 */}
          {/* ========================================================================= */}
          <section id="disciplines-section" className="relative z-20 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 -mt-16 sm:-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Linear Algebra */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedLinearChapter(null);
                  setActiveView("topics-linear");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#D1FAE5] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md shadow-[#166534]/20">
                      <Calculator className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#bbf7d0] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#166534]">
                      MATH
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#166534] transition-colors">
                        Linear Algebra
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#166534]">
                        26 Topics Available
                      </p>
                    </div>

                    {/* 01 / 10 Crimson Graphic Badge */}
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#166534] text-white shadow-md shadow-[#166534]/20 font-mono font-bold leading-tight shrink-0">
                      <span className="text-xs">01</span>
                      <span className="h-[1px] w-6 bg-white/40 my-0.5" />
                      <span className="text-xs">10</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Solve matrices, eigenvectors, vector spaces, and linear systems with step-by-step numerical solutions.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Binary className="h-3.5 w-3.5 text-[#166534]" />
                      Matrix Solvers
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#166534]">∑</span>
                      Eigen Systems
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Layers className="h-3.5 w-3.5 text-[#166534]" />
                      Vector Spaces
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Zap className="h-3.5 w-3.5 text-[#166534]" />
                      LU / QR / SVD
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Calculus I */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedCalculusChapter(null);
                  setActiveView("topics-calculus");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#D1FAE5] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md shadow-[#166534]/20">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#bbf7d0] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#166534]">
                      CALC I
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#166534] transition-colors">
                        Calculus I
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#166534]">
                        {calculusTopics.length} Topics Available
                      </p>
                    </div>

                    {/* Integral Graphic Mockup */}
                    <div className="relative flex h-14 w-18 items-center justify-center rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] p-1.5 shadow-xs shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 70 40" fill="none">
                        <path d="M5 35 Q20 5, 45 18 T65 8" stroke="#166534" strokeWidth="1.8" />
                        <path d="M5 35 Q20 5, 45 18 T65 8 L65 35 L5 35 Z" fill="rgba(22, 101, 52, 0.15)" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Master foundations of calculus, limits &amp; continuity, differentiation rules, tangent lines, and calculus essentials.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Zap className="h-3.5 w-3.5 text-[#166534]" />
                      Derivatives
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Activity className="h-3.5 w-3.5 text-[#166534]" />
                      Limit &amp; Continuity
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Compass className="h-3.5 w-3.5 text-[#166534]" />
                      Foundations
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <FunctionSquare className="h-3.5 w-3.5 text-[#166534]" />
                      Functions &amp; Graphs
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Calculus II */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setTopicSearch("");
                  setSelectedCalculus2Chapter(null);
                  setActiveView("topics-calculus-2");
                }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-[#D1FAE5] bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#bbf7d0] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-md shadow-[#166534]/20">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#bbf7d0] bg-[#fbf3f5] px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#166534]">
                      CALC II
                    </span>
                  </div>

                  {/* Header & Right Graphic Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] group-hover:text-[#166534] transition-colors">
                        Calculus II
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#166534]">
                        {calculus2Topics.length} Topics Available
                      </p>
                    </div>

                    {/* Sigma Badge */}
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#166534] text-white shadow-md shadow-[#166534]/20 font-mono font-bold leading-tight shrink-0">
                      <span className="text-lg font-serif">Σ</span>
                      <span className="text-[9px] mt-0.5 opacity-80">n=1</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6067] leading-relaxed mb-6 font-normal">
                    Explore advanced integration, transcendental functions, infinite series, polar coordinates, and conic sections.
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5EDEF]">
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#166534]">∫</span>
                      Integration
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <span className="font-serif font-bold text-[#166534]">∞</span>
                      Series
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Compass className="h-3.5 w-3.5 text-[#166534]" />
                      Polar &amp; Conics
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-[#FDFBFB] px-3 py-1.5 text-xs font-medium text-[#374151]">
                      <Activity className="h-3.5 w-3.5 text-[#166534]" />
                      Transcendentals
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 3. 6-FEATURE FOOTER CARD (Matching Image 3 Bottom Bar)                    */}
          {/* ========================================================================= */}
          <section className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 mt-12 sm:mt-16">
          </section>
        </div>
      ) : activeView === "topics-linear" ? (
        /* ========================================================================= */
        /* VIEW 3: LINEAR ALGEBRA TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)   */
        /* ========================================================================= */
        <div
          key="topics-linear-view"
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Authentic Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#052e16] border border-[#14532d] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4ade80] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#16a34a]">Linear Algebra Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore linear systems, matrix transformations, vector spaces, eigenvalues, and matrix factorizations with step-by-step verified explanations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedLinearChapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = LINEAR_ALGEBRA_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedLinearChapter);
                  const chTopics = sortedLinearTopics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedLinearChapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedLinearChapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedLinearChapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "linear-algebra", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#166534] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#166534] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#D1FAE5]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                        Curriculum
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium">
                        8 Chapters Available
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                      All Chapters
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                      Select any chapter to explore detailed lessons, theorems, and verified examples.
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      playNavButtonAnimation(e, { color: "rgba(22, 101, 52, 0.3)" });
                      setTopicSearch("");
                      setActiveView("categories");
                      navigate("/?tab=topics");
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Topics</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LINEAR_ALGEBRA_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = linearTopics.filter(
                    (t) => filterTopicByLinearChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedLinearChapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#D1FAE5] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#ECFDF5]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#166534] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#166534] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] group-hover:bg-[#15803d] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            )}
          </section>
        </div>
      ) : activeView === "topics-calculus" ? (
        /* ========================================================================= */
        /* VIEW 4: CALCULUS 1 TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)        */
        /* ========================================================================= */
        <div
          key="topics-calculus-view"
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION (Authentic Chalkboard Background with Student) */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#052e16] border border-[#14532d] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4ade80] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#16a34a]">Calculus Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore foundations of Calculus, Limit &amp; Continuity, and Derivatives with step-by-step verified explanations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedCalculusChapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = CALCULUS_1_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedCalculusChapter);
                  const chTopics = sortedCalculus1Topics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedCalculusChapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedCalculusChapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedCalculusChapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#166534] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#166534] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#D1FAE5]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                        Curriculum
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium">
                        8 Chapters Available
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                      All Chapters
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                      Select any chapter to explore detailed lessons, theorems, and verified examples.
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      playNavButtonAnimation(e, { color: "rgba(22, 101, 52, 0.3)" });
                      setTopicSearch("");
                      setActiveView("categories");
                      navigate("/?tab=topics");
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Topics</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CALCULUS_1_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = calculus1Topics.filter(
                    (t) => filterTopicByCalculusChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedCalculusChapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#D1FAE5] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#ECFDF5]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#166534] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#166534] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] group-hover:bg-[#15803d] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            )}
          </section>
        </div>
      ) : activeView === "topics-calculus-2" ? (
        /* ===================================================================== */
        /* VIEW 5: CALCULUS II TOPICS (MATCHING USER REFERENCE DESIGN EXACTLY)   */
        /* ===================================================================== */
        <div
          key="topics-calculus-2-view"
          className="min-h-screen bg-[#FDFBFB]"
        >
          {/* 1. TOP HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-[#090D14] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={mathBg}
                alt="Mathematics blackboard background"
                className="h-full w-full object-cover object-center opacity-45 scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,13,20,0.85)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Red TOPICS Eyebrow Tag */}
                  <div className="inline-flex items-center rounded-full bg-[#052e16] border border-[#14532d] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4ade80] mb-3 shadow-xs">
                    TOPICS
                  </div>

                  {/* Main Headline in Red */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-none mb-3">
                    <span className="text-[#16a34a]">Calculus II Topics</span>
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-gray-200/90 font-normal leading-relaxed max-w-2xl">
                    Explore advanced integration techniques, transcendental functions, infinite series, polar coordinates, and conic sections with step-by-step explanations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MAIN CARDS CONTAINER (8 Chapter Cards Grid or Chapter Drilldown) */}
          <section className="relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 pb-24">
            {selectedCalculus2Chapter !== null ? (
              /* View Mode B: Drill-down inside a specific chapter */
              <div className="space-y-6">
                {(() => {
                  const chInfo = CALCULUS_2_CHAPTER_CARDS.find((c) => c.chapterNumber === selectedCalculus2Chapter);
                  const chTopics = sortedCalculus2Topics;

                  return (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                              Chapter {selectedCalculus2Chapter}
                            </span>
                            <span className="text-xs text-[#6B7280] font-medium">
                              {chTopics.length} topics available
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                            {chInfo?.title || `Chapter ${selectedCalculus2Chapter}`}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            {chInfo?.description}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedCalculus2Chapter(null)}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to All Chapters</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {chTopics.length > 0 ? (
                          chTopics.map((topic) => (
                            <div
                              key={topic.id}
                              onClick={(e) => handleTopicClick(topic.id, "calculus", e)}
                              className="topic-grid-card group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  {renderTopicGlyph(topic)}
                                  <span className="text-xs font-medium text-[#6B7280]">
                                    {topic.examples?.length || 8} examples
                                  </span>
                                </div>

                                <h3 className="text-[17px] font-extrabold text-[#111827] group-hover:text-[#166534] transition-colors leading-snug mt-3 mb-2">
                                  {topic.title}
                                </h3>

                                <p className="text-xs sm:text-[13px] text-[#5D6067] leading-relaxed line-clamp-3 mb-6 font-normal">
                                  {topic.summary}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-bold text-[#166534] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                  View Topic <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full py-16 text-center text-[#6B7280] bg-white rounded-2xl border border-[#D1FAE5]">
                            No topics available in this chapter yet.
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* View Mode C: EXACT REFERENCE DESIGN — 8 CHAPTER CARDS GRID (4x2 Layout) */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D1FAE5] pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-full bg-[#166534] px-3 py-0.5 text-[11px] font-bold text-white">
                        Curriculum
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium">
                        8 Chapters Available
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                      All Chapters
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                      Select any chapter to explore detailed lessons, theorems, and verified examples.
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      playNavButtonAnimation(e, { color: "rgba(22, 101, 52, 0.3)" });
                      setTopicSearch("");
                      setActiveView("categories");
                      navigate("/?tab=topics");
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D1FAE5] bg-white hover:bg-[#F0FDF4] hover:border-[#bbf7d0] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#166534] transition-all duration-200 cursor-pointer self-start sm:self-auto shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Topics</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CALCULUS_2_CHAPTER_CARDS.map((chapter) => {
                  const chTopicsCount = calculus2Topics.filter(
                    (t) => filterTopicByCalculusChapter(t, chapter.chapterNumber)
                  ).length || chapter.defaultTopicCount;

                  return (
                    <div
                      key={chapter.id}
                      onClick={() => {
                        setSelectedCalculus2Chapter(chapter.chapterNumber);
                        setTopicSearch("");
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-[#D1FAE5] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[225px] cursor-pointer"
                    >
                      {/* Subtle pinkish/rose glow at bottom-left corner matching reference */}
                      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFE4E8]/80 via-[#ECFDF5]/40 to-transparent blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                      {/* Top Row: Chapter Badge + Topics Count */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="inline-flex items-center rounded-full bg-[#166534] px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-xs">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-[#6B7280]">
                          {chTopicsCount} topics
                        </span>
                      </div>

                      {/* Body: Custom Maroon Glyph Icon + Title + Description */}
                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                          {chapter.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-[#111827] group-hover:text-[#166534] transition-colors leading-snug tracking-tight mb-1.5">
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Right: Circular Dark Red Arrow Button */}
                      <div className="flex justify-end relative z-10 mt-auto pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] group-hover:bg-[#15803d] text-white shadow-sm transition-all duration-200 group-hover:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            )}
          </section>
        </div>
      ) : null}
    </div>
  );
}