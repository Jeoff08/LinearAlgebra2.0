// filename: src/utils/quizGenerator.ts

import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "../data/topics/index";
import { ALL_CALCULUS_TOPICS } from "../data/calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "../data/calculus-2-topics";
import type { QuizQuestionItem } from "../types/dashboard";

export type QuizQuestionType =
  | "multiple_choice"
  | "identification"
  | "enumeration"
  | "problem_solving";

export interface GeneratedQuestion {
  id: string;
  prompt: string;
  questionType: QuizQuestionType;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
  correctAnswerText: string;
  explanation: string;
  topicTitle: string;
}

export interface TopicInput {
  id: string;
  title: string;
  category: "linear-algebra" | "calculus-1" | "calculus-2";
  categoryLabel?: string;
  chapter?: string;
  summary?: string;
  details?: string;
  examples?: string[];
}

// Built-in topic knowledge banks with verified questions for all four question types
interface CuratedTopicQuestions {
  topicKeywords: string[];
  category: "linear-algebra" | "calculus-1" | "calculus-2";
  multipleChoice: Array<{
    prompt: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correct: "A" | "B" | "C" | "D";
    explanation: string;
  }>;
  identification: Array<{
    prompt: string;
    answer: string;
    acceptable: string[];
    explanation: string;
  }>;
  enumeration: Array<{
    prompt: string;
    items: string[];
    explanation: string;
  }>;
  problemSolving: Array<{
    prompt: string;
    answer: string;
    solutionSteps: string[];
  }>;
}

const CURATED_KNOWLEDGE_BASE: CuratedTopicQuestions[] = [
  // 1. Matrices & Matrix Operations (Linear Algebra)
  {
    topicKeywords: ["matrices", "matrix", "matrix operations", "transpose"],
    category: "linear-algebra",
    multipleChoice: [
      {
        prompt: "If matrix A is of size 2×3 and matrix B is of size 3×4, what is the size of product AB?",
        optionA: "2×4",
        optionB: "3×3",
        optionC: "2×3",
        optionD: "Cannot be multiplied",
        correct: "A",
        explanation: "When multiplying (m×k) by (k×n), the resulting matrix has dimension m×n = 2×4.",
      },
      {
        prompt: "Which property does matrix multiplication generally FAIL to satisfy?",
        optionA: "Associative property: (AB)C = A(BC)",
        optionB: "Commutative property: AB = BA",
        optionC: "Distributive property: A(B + C) = AB + AC",
        optionD: "Identity property: AI = IA = A",
        correct: "B",
        explanation: "In general, AB ≠ BA, meaning matrix multiplication is non-commutative.",
      },
      {
        prompt: "What is the transpose of a symmetric matrix A?",
        optionA: "-A",
        optionB: "A⁻¹",
        optionC: "A",
        optionD: "I",
        correct: "C",
        explanation: "By definition, a matrix A is symmetric if and only if A^T = A.",
      },
    ],
    identification: [
      {
        prompt: "Identify the matrix operation where rows and columns are interchanged such that the entry at (i, j) becomes the entry at (j, i).",
        answer: "Transpose",
        acceptable: ["transpose", "matrix transpose", "transposition"],
        explanation: "The transpose of A, denoted A^T, swaps rows and columns.",
      },
      {
        prompt: "Identify the square matrix with ones along the main diagonal and zeros everywhere else.",
        answer: "Identity Matrix",
        acceptable: ["identity matrix", "unit matrix", "identity"],
        explanation: "The identity matrix I acts as the multiplicative identity such that AI = IA = A.",
      },
      {
        prompt: "Identify the term for the sum of the diagonal elements of a square matrix.",
        answer: "Trace",
        acceptable: ["trace", "matrix trace", "tr(a)"],
        explanation: "The trace tr(A) = ∑ a_ii is the sum of main diagonal entries.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate three fundamental matrix operations.",
        items: ["Matrix Addition", "Scalar Multiplication", "Matrix Multiplication"],
        explanation: "The three core elementary operations on matrices are addition, scalar scaling, and multiplication.",
      },
      {
        prompt: "Enumerate three special types of square matrices.",
        items: ["Symmetric Matrix", "Diagonal Matrix", "Identity Matrix"],
        explanation: "Common classifications include symmetric, diagonal, triangular, and identity matrices.",
      },
    ],
    problemSolving: [
      {
        prompt: "Given matrix A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]], compute the product AB.",
        answer: "[[4, 6], [10, 12]]",
        solutionSteps: [
          "Row 1 × Col 1: (1)(2) + (2)(1) = 2 + 2 = 4",
          "Row 1 × Col 2: (1)(0) + (2)(3) = 0 + 6 = 6",
          "Row 2 × Col 1: (3)(2) + (4)(1) = 6 + 4 = 10",
          "Row 2 × Col 2: (3)(0) + (4)(3) = 0 + 12 = 12",
          "Result AB = [[4, 6], [10, 12]]",
        ],
      },
      {
        prompt: "Find the trace of matrix M = [[5, 2, -1], [3, 8, 4], [0, 1, -2]].",
        answer: "11",
        solutionSteps: [
          "Locate the main diagonal elements: m₁₁ = 5, m₂₂ = 8, m₃₃ = -2.",
          "Compute the sum: trace(M) = 5 + 8 + (-2) = 11.",
        ],
      },
    ],
  },

  // 2. Determinants & Inverses (Linear Algebra)
  {
    topicKeywords: ["determinants", "determinant", "inverses", "inverse", "cramer"],
    category: "linear-algebra",
    multipleChoice: [
      {
        prompt: "If det(A) = 0 for a square matrix A, which statement is TRUE?",
        optionA: "The matrix A is invertible",
        optionB: "The matrix A is singular and has no inverse",
        optionC: "The rows of A are linearly independent",
        optionD: "The rank of A equals its dimension n",
        correct: "B",
        explanation: "det(A) = 0 implies A is singular, meaning its inverse does not exist.",
      },
      {
        prompt: "What is det(AB) for two n×n matrices A and B?",
        optionA: "det(A) + det(B)",
        optionB: "det(A) × det(B)",
        optionC: "det(A) / det(B)",
        optionD: "det(A) - det(B)",
        correct: "B",
        explanation: "The determinant of a product is the product of determinants: det(AB) = det(A)det(B).",
      },
      {
        prompt: "What is det(A⁻¹) in terms of det(A)?",
        optionA: "-det(A)",
        optionB: "det(A)",
        optionC: "1 / det(A)",
        optionD: "(det(A))²",
        correct: "C",
        explanation: "Since A A⁻¹ = I and det(I) = 1, det(A⁻¹) = 1 / det(A).",
      },
    ],
    identification: [
      {
        prompt: "Identify the scalar value computed from a square matrix that determines whether the matrix is invertible.",
        answer: "Determinant",
        acceptable: ["determinant", "det", "det(a)"],
        explanation: "The determinant det(A) characterizes invertibility, volume scaling, and solvability.",
      },
      {
        prompt: "Identify the matrix B such that AB = BA = I for a given square matrix A.",
        answer: "Inverse Matrix",
        acceptable: ["inverse", "inverse matrix", "matrix inverse", "a^-1"],
        explanation: "The multiplicative inverse of A satisfies A A⁻¹ = A⁻¹ A = I.",
      },
      {
        prompt: "Identify the rule that uses determinants to solve a system of linear equations with an invertible coefficient matrix.",
        answer: "Cramer's Rule",
        acceptable: ["cramer's rule", "cramers rule", "cramer rule"],
        explanation: "Cramer's Rule expresses each unknown x_i as det(A_i) / det(A).",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate three elementary row operations used in computing determinants and Gaussian elimination.",
        items: [
          "Row Swapping (Interchanging two rows)",
          "Row Scaling (Multiplying a row by a nonzero scalar)",
          "Row Addition (Adding a multiple of one row to another)",
        ],
        explanation: "Elementary row operations preserve the solution set of linear systems.",
      },
      {
        prompt: "Enumerate two methods for computing the inverse of an invertible matrix.",
        items: ["Gauss-Jordan Elimination [A | I] -> [I | A⁻¹]", "Adjugate Formula: A⁻¹ = (1/det(A)) adj(A)"],
        explanation: "Both row reduction and cofactor expansion/adjugate yield the inverse matrix.",
      },
    ],
    problemSolving: [
      {
        prompt: "Calculate the determinant of the 2×2 matrix A = [[3, 5], [2, 4]].",
        answer: "2",
        solutionSteps: [
          "Use the 2×2 formula: det(A) = ad - bc.",
          "Substitute: det(A) = (3)(4) - (5)(2) = 12 - 10 = 2.",
        ],
      },
      {
        prompt: "Find the inverse of matrix A = [[4, 7], [1, 2]].",
        answer: "[[2, -7], [-1, 4]]",
        solutionSteps: [
          "Step 1: Compute det(A) = (4)(2) - (7)(1) = 8 - 7 = 1.",
          "Step 2: Swap diagonal elements: 4 and 2 swap -> [[2, ...], [..., 4]].",
          "Step 3: Negate off-diagonal elements: 7 -> -7, 1 -> -1.",
          "Step 4: Divide by det(A) = 1, giving A⁻¹ = [[2, -7], [-1, 4]].",
        ],
      },
    ],
  },

  // 3. Eigenvalues & Eigenvectors (Linear Algebra)
  {
    topicKeywords: ["eigen", "eigenvalues", "eigenvectors", "diagonalization"],
    category: "linear-algebra",
    multipleChoice: [
      {
        prompt: "Which equation defines an eigenvalue λ and eigenvector v for a square matrix A?",
        optionA: "Av = λv",
        optionB: "Av = 0",
        optionC: "A + v = λ",
        optionD: "Av = λ²",
        correct: "A",
        explanation: "An eigenvector v satisfies Av = λv where v ≠ 0 and λ is a scalar.",
      },
      {
        prompt: "The eigenvalues of a matrix A are the roots of which equation?",
        optionA: "det(A + λI) = 0",
        optionB: "det(A - λI) = 0",
        optionC: "trace(A) = λ",
        optionD: "A - λ = 0",
        correct: "B",
        explanation: "The characteristic equation det(A - λI) = 0 yields the eigenvalues.",
      },
    ],
    identification: [
      {
        prompt: "Identify the polynomial equation det(A - λI) = 0 used to find eigenvalues.",
        answer: "Characteristic Equation",
        acceptable: ["characteristic equation", "characteristic polynomial"],
        explanation: "Solving det(A - λI) = 0 gives the characteristic roots (eigenvalues).",
      },
      {
        prompt: "Identify the non-zero vector v such that multiplying it by matrix A only changes its scale by factor λ.",
        answer: "Eigenvector",
        acceptable: ["eigenvector", "characteristic vector"],
        explanation: "An eigenvector direction remains unchanged under the linear transformation A.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate two key properties relating the eigenvalues of a matrix to its trace and determinant.",
        items: [
          "Sum of eigenvalues equals the trace: ∑ λ_i = tr(A)",
          "Product of eigenvalues equals the determinant: ∏ λ_i = det(A)",
        ],
        explanation: "The trace and determinant are fundamental invariants of the matrix eigenvalues.",
      },
    ],
    problemSolving: [
      {
        prompt: "Find the eigenvalues of matrix A = [[2, 0], [0, 5]].",
        answer: "2 and 5",
        solutionSteps: [
          "For a diagonal or triangular matrix, eigenvalues are the diagonal entries.",
          "Characteristic polynomial: det([[2 - λ, 0], [0, 5 - λ]]) = (2 - λ)(5 - λ) = 0.",
          "Eigenvalues are λ₁ = 2, λ₂ = 5.",
        ],
      },
    ],
  },

  // 4. Vectors, Dot & Cross Product (Linear Algebra)
  {
    topicKeywords: ["vectors", "vector", "dot product", "cross product", "orthogonality"],
    category: "linear-algebra",
    multipleChoice: [
      {
        prompt: "If the dot product of two non-zero vectors u and v is zero (u · v = 0), what does this indicate?",
        optionA: "The vectors are parallel",
        optionB: "The vectors are perpendicular (orthogonal)",
        optionC: "The vectors have the same magnitude",
        optionD: "The vectors point in opposite directions",
        correct: "B",
        explanation: "Since u · v = ||u|| ||v|| cos(θ), u · v = 0 means cos(θ) = 0, so θ = 90°.",
      },
      {
        prompt: "What is the direction of the cross product u × v relative to vectors u and v?",
        optionA: "Parallel to u",
        optionB: "In the plane of u and v",
        optionC: "Orthogonal (perpendicular) to both u and v",
        optionD: "Opposite to v",
        correct: "C",
        explanation: "u × v produces a 3D vector perpendicular to the plane containing u and v.",
      },
    ],
    identification: [
      {
        prompt: "Identify the operation between two vectors in R³ that produces a vector perpendicular to both.",
        answer: "Cross Product",
        acceptable: ["cross product", "vector product"],
        explanation: "The cross product u × v is defined only in three dimensions and yields a normal vector.",
      },
      {
        prompt: "Identify the scalar operation u · v = u₁v₁ + u₂v₂ + ... + u_nv_n.",
        answer: "Dot Product",
        acceptable: ["dot product", "scalar product", "inner product"],
        explanation: "The dot product measures alignment and projection of vectors.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate three fundamental vector operations in Rⁿ.",
        items: ["Vector Addition", "Scalar Multiplication", "Dot Product"],
        explanation: "Vector spaces are defined by addition and scalar multiplication, supplemented by dot products.",
      },
    ],
    problemSolving: [
      {
        prompt: "Compute the dot product of vectors u = [3, -2, 4] and v = [2, 5, 1].",
        answer: "0",
        solutionSteps: [
          "Formula: u · v = (u₁v₁) + (u₂v₂) + (u₃v₃)",
          "u · v = (3)(2) + (-2)(5) + (4)(1) = 6 - 10 + 4 = 0",
          "Since the dot product is 0, the vectors are orthogonal.",
        ],
      },
    ],
  },

  // 5. Calculus 1: Limits & Continuity
  {
    topicKeywords: ["limits", "limit", "continuity", "continuous", "real numbers"],
    category: "calculus-1",
    multipleChoice: [
      {
        prompt: "What is the limit of (sin x) / x as x approaches 0?",
        optionA: "0",
        optionB: "1",
        optionC: "Infinity",
        optionD: "Undefined",
        correct: "B",
        explanation: "The fundamental trigonometric limit lim(x→0) (sin x)/x = 1.",
      },
      {
        prompt: "A function f(x) is continuous at x = c if and only if which condition holds?",
        optionA: "f(c) is defined only",
        optionB: "lim(x→c) f(x) exists and equals f(c)",
        optionC: "f'(c) > 0",
        optionD: "f(x) has an asymptote at c",
        correct: "B",
        explanation: "Continuity requires: 1) f(c) exists, 2) lim f(x) exists, and 3) limit equals f(c).",
      },
    ],
    identification: [
      {
        prompt: "Identify the theorem stating that if f is continuous on [a, b] and u is between f(a) and f(b), there exists c in [a, b] where f(c) = u.",
        answer: "Intermediate Value Theorem",
        acceptable: ["intermediate value theorem", "ivt"],
        explanation: "The Intermediate Value Theorem guarantees that continuous functions take all intermediate values.",
      },
      {
        prompt: "Identify the rule used to evaluate limits of indeterminate forms 0/0 or ∞/∞ by differentiating numerator and denominator.",
        answer: "L'Hopital's Rule",
        acceptable: ["l'hopital's rule", "l'hopital", "l hospital", "l'hospital's rule"],
        explanation: "L'Hôpital's Rule states lim f(x)/g(x) = lim f'(x)/g'(x) for indeterminate 0/0 or ∞/∞.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate the three conditions required for a function f(x) to be continuous at a point x = c.",
        items: [
          "f(c) is defined (c is in the domain)",
          "lim_{x→c} f(x) exists",
          "lim_{x→c} f(x) = f(c)",
        ],
        explanation: "A function must satisfy all three criteria to be continuous at a point.",
      },
    ],
    problemSolving: [
      {
        prompt: "Evaluate the limit: lim_{x→2} (x² - 4) / (x - 2).",
        answer: "4",
        solutionSteps: [
          "Direct substitution yields indeterminate form 0/0.",
          "Factor the numerator: x² - 4 = (x - 2)(x + 2).",
          "Cancel common factor (x - 2): lim_{x→2} (x + 2).",
          "Evaluate: 2 + 2 = 4.",
        ],
      },
    ],
  },

  // 6. Calculus 1: Derivatives & Differentiation Rules
  {
    topicKeywords: ["derivative", "derivatives", "differentiation", "tangent", "chain rule", "extrema"],
    category: "calculus-1",
    multipleChoice: [
      {
        prompt: "What is the derivative of f(x) = xⁿ according to the Power Rule?",
        optionA: "n x^(n-1)",
        optionB: "x^(n+1) / (n+1)",
        optionC: "n x^(n+1)",
        optionD: "x^(n-1)",
        correct: "A",
        explanation: "The power rule states d/dx [xⁿ] = n x^(n-1).",
      },
      {
        prompt: "What is the Product Rule for differentiating u(x)v(x)?",
        optionA: "u'v'",
        optionB: "u'v + uv'",
        optionC: "u'v - uv'",
        optionD: "(u'v - uv') / v²",
        correct: "B",
        explanation: "d/dx [u v] = u' v + u v'.",
      },
      {
        prompt: "Which rule is used to differentiate composite functions f(g(x))?",
        optionA: "Quotient Rule",
        optionB: "Chain Rule",
        optionC: "Power Rule",
        optionD: "Constant Rule",
        correct: "B",
        explanation: "The Chain Rule states d/dx [f(g(x))] = f'(g(x)) · g'(x).",
      },
    ],
    identification: [
      {
        prompt: "Identify the calculus rule stating that the derivative of f(g(x)) is f'(g(x)) · g'(x).",
        answer: "Chain Rule",
        acceptable: ["chain rule", "the chain rule"],
        explanation: "The Chain Rule computes derivatives of nested or composite functions.",
      },
      {
        prompt: "Identify the geometric meaning of the first derivative f'(a) evaluated at x = a.",
        answer: "Slope of the Tangent Line",
        acceptable: ["slope of the tangent line", "slope of tangent", "tangent slope", "slope"],
        explanation: "The derivative at a point represents the instantaneous rate of change and the tangent slope.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate four fundamental rules of differentiation.",
        items: ["Power Rule", "Product Rule", "Quotient Rule", "Chain Rule"],
        explanation: "These four rules form the core toolkit for finding algebraic derivatives.",
      },
      {
        prompt: "Enumerate the two tests used to classify local extrema of a differentiable function.",
        items: ["First Derivative Test", "Second Derivative Test"],
        explanation: "Extrema are analyzed via sign changes in f'(x) or concavity via f''(x).",
      },
    ],
    problemSolving: [
      {
        prompt: "Find the derivative of f(x) = 3x⁴ - 5x² + 7x - 9.",
        answer: "12x³ - 10x + 7",
        solutionSteps: [
          "Apply power rule to 3x⁴: 3(4x³) = 12x³.",
          "Apply power rule to -5x²: -5(2x) = -10x.",
          "Apply power rule to 7x: 7(1) = 7.",
          "Derivative of constant -9 is 0.",
          "Combine: f'(x) = 12x³ - 10x + 7.",
        ],
      },
      {
        prompt: "Find the slope of the tangent line to y = x³ - 2x at x = 2.",
        answer: "10",
        solutionSteps: [
          "Find derivative: y' = 3x² - 2.",
          "Substitute x = 2: y'(2) = 3(2)² - 2 = 3(4) - 2 = 12 - 2 = 10.",
        ],
      },
    ],
  },

  // 7. Calculus 1: Integrals & Antidifferentiation
  {
    topicKeywords: ["integral", "integration", "antiderivative", "definite integral", "area"],
    category: "calculus-1",
    multipleChoice: [
      {
        prompt: "What is the antiderivative of f(x) = x³ with respect to x?",
        optionA: "3x² + C",
        optionB: "(1/4)x⁴ + C",
        optionC: "(1/3)x⁴ + C",
        optionD: "4x³ + C",
        correct: "B",
        explanation: "By the reverse power rule, ∫ xⁿ dx = x^(n+1)/(n+1) + C, so ∫ x³ dx = x⁴/4 + C.",
      },
      {
        prompt: "The Fundamental Theorem of Calculus Part 2 states that if F'(x) = f(x), then ∫_a^b f(x) dx equals:",
        optionA: "F(a) - F(b)",
        optionB: "F(b) - F(a)",
        optionC: "f(b) - f(a)",
        optionD: "F'(b) - F'(a)",
        correct: "B",
        explanation: "FTC Part 2: ∫_a^b f(x) dx = F(b) - F(a).",
      },
    ],
    identification: [
      {
        prompt: "Identify the theorem that connects differentiation and integration as inverse processes.",
        answer: "Fundamental Theorem of Calculus",
        acceptable: ["fundamental theorem of calculus", "ftc"],
        explanation: "The FTC bridges derivatives and integrals, enabling exact evaluation of definite integrals.",
      },
      {
        prompt: "Identify the constant added to an indefinite integral representing any vertical shift.",
        answer: "Constant of Integration",
        acceptable: ["constant of integration", "c", "arbitrary constant"],
        explanation: "The constant +C accounts for all functions having the same derivative.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate two parts of the Fundamental Theorem of Calculus.",
        items: [
          "Part 1: d/dx [∫_a^x f(t) dt] = f(x)",
          "Part 2: ∫_a^b f(x) dx = F(b) - F(a) where F' = f",
        ],
        explanation: "Part 1 addresses the derivative of an accumulation function; Part 2 provides exact evaluation.",
      },
    ],
    problemSolving: [
      {
        prompt: "Evaluate the definite integral: ∫₀³ (2x + 1) dx.",
        answer: "12",
        solutionSteps: [
          "Find the antiderivative: F(x) = x² + x.",
          "Evaluate at upper limit x = 3: F(3) = (3)² + 3 = 9 + 3 = 12.",
          "Evaluate at lower limit x = 0: F(0) = 0² + 0 = 0.",
          "Subtract: F(3) - F(0) = 12 - 0 = 12.",
        ],
      },
    ],
  },

  // 8. Calculus 2: Techniques of Integration
  {
    topicKeywords: ["techniques of integration", "integration by parts", "partial fractions", "trigonometric"],
    category: "calculus-2",
    multipleChoice: [
      {
        prompt: "What is the Integration by Parts formula derived from the Product Rule?",
        optionA: "∫ u dv = uv - ∫ v du",
        optionB: "∫ u dv = uv + ∫ v du",
        optionC: "∫ u dv = u'v + uv'",
        optionD: "∫ u dv = (u/v) - ∫ du",
        correct: "A",
        explanation: "Integration by parts formula is ∫ u dv = uv - ∫ v du.",
      },
      {
        prompt: "Which acronym is widely used to choose 'u' in Integration by Parts?",
        optionA: "PEMDAS",
        optionB: "LIATE",
        optionC: "FOIL",
        optionD: "SOHCAHTOA",
        correct: "B",
        explanation: "LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.",
      },
    ],
    identification: [
      {
        prompt: "Identify the integration technique used to decompose a rational function into simpler fractions.",
        answer: "Partial Fraction Decomposition",
        acceptable: ["partial fractions", "partial fraction decomposition"],
        explanation: "Partial fractions breaks rational expressions P(x)/Q(x) into integrable terms.",
      },
      {
        prompt: "Identify the technique that uses the formula ∫ u dv = uv - ∫ v du.",
        answer: "Integration by Parts",
        acceptable: ["integration by parts", "by parts"],
        explanation: "Integration by parts is the integral analog of the derivative product rule.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate the priority order of the LIATE rule used in Integration by Parts.",
        items: [
          "L - Logarithmic functions",
          "I - Inverse trigonometric functions",
          "A - Algebraic functions",
          "T - Trigonometric functions",
          "E - Exponential functions",
        ],
        explanation: "Functions higher on the LIATE list are chosen as u.",
      },
    ],
    problemSolving: [
      {
        prompt: "Evaluate the integral: ∫ x eˣ dx using Integration by Parts.",
        answer: "x eˣ - eˣ + C",
        solutionSteps: [
          "Choose u = x, dv = eˣ dx.",
          "Differentiate and integrate: du = dx, v = eˣ.",
          "Apply formula: ∫ u dv = uv - ∫ v du = x eˣ - ∫ eˣ dx.",
          "Compute remaining integral: x eˣ - eˣ + C.",
        ],
      },
    ],
  },

  // 9. Calculus 2: Infinite Series & Taylor Polynomials
  {
    topicKeywords: ["series", "infinite series", "taylor", "maclaurin", "convergence"],
    category: "calculus-2",
    multipleChoice: [
      {
        prompt: "For a geometric series ∑ arⁿ, for which values of the common ratio |r| does the series converge?",
        optionA: "|r| > 1",
        optionB: "|r| < 1",
        optionC: "|r| = 1",
        optionD: "All real values of r",
        correct: "B",
        explanation: "A geometric series converges to a/(1 - r) if and only if |r| < 1.",
      },
      {
        prompt: "What is a Maclaurin series?",
        optionA: "A Taylor series centered at x = 0",
        optionB: "A Taylor series centered at x = 1",
        optionC: "An alternating harmonic series",
        optionD: "A finite polynomial",
        correct: "A",
        explanation: "A Maclaurin series is simply a Taylor series with center a = 0.",
      },
    ],
    identification: [
      {
        prompt: "Identify the series representation of a function as an infinite sum of powers (x - a)ⁿ using derivatives at center a.",
        answer: "Taylor Series",
        acceptable: ["taylor series", "taylor polynomial"],
        explanation: "f(x) = ∑ [fⁿ(a) / n!] (x - a)ⁿ represents the function near a.",
      },
      {
        prompt: "Identify the test that checks whether lim_{n→∞} |a_{n+1} / a_n| < 1 to determine absolute convergence.",
        answer: "Ratio Test",
        acceptable: ["ratio test", "the ratio test"],
        explanation: "The Ratio Test evaluates the limit of successive term ratios to determine convergence.",
      },
    ],
    enumeration: [
      {
        prompt: "Enumerate three common convergence tests for infinite series.",
        items: ["Ratio Test", "Geometric Series Test", "Integral Test"],
        explanation: "Standard tests include the Ratio Test, Root Test, Comparison Tests, and Alternating Series Test.",
      },
    ],
    problemSolving: [
      {
        prompt: "Find the sum of the infinite geometric series: 4 + 2 + 1 + 1/2 + 1/4 + ...",
        answer: "8",
        solutionSteps: [
          "First term: a = 4.",
          "Common ratio: r = 2/4 = 1/2.",
          "Check convergence: |r| = 1/2 < 1, so the series converges.",
          "Use sum formula: S = a / (1 - r) = 4 / (1 - 1/2) = 4 / (1/2) = 8.",
        ],
      },
    ],
  },
];

// Helper to sanitize keywords for matching
function matchesTopic(topicTitle: string, keywords: string[]): boolean {
  const lower = topicTitle.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
}

// Fallback question synthesizer that uses raw topic details/summary with diverse templates
function synthesizeQuestionFromTopic(
  topic: TopicInput,
  type: QuizQuestionType,
  seedIndex: number
): GeneratedQuestion {
  const id = `gen-${Date.now()}-${seedIndex}-${Math.random().toString(36).slice(2, 7)}`;
  const title = topic.title || "Mathematics Topic";
  const summary = topic.summary || "Explore fundamental properties and principles.";
  const details = topic.details || "";
  const cat = topic.category || "linear-algebra";
  const catLabel = cat === "linear-algebra" ? "Linear Algebra" : cat === "calculus-1" ? "Calculus 1" : "Calculus 2";

  // Extract clean text
  const cleanDetails = details.replace(/━+/g, "").replace(/\n+/g, " ").trim();
  const firstSentence = cleanDetails.slice(0, 180).trim() || summary;

  if (type === "identification") {
    const identTemplates = [
      {
        prompt: `Identify the mathematical concept or rule described:\n"${summary}"`,
        ans: title,
      },
      {
        prompt: `In ${catLabel}, what specific topic or method directly governs: "${summary.slice(0, 130)}"?`,
        ans: title,
      },
      {
        prompt: `Name the foundational mathematical concept defined as follows:\n"${firstSentence.slice(0, 140)}"`,
        ans: title,
      },
      {
        prompt: `Identify the mathematical structure or operation focused on: "${summary}"`,
        ans: title,
      },
      {
        prompt: `Which major framework in ${catLabel} encompasses the following principle:\n"${summary.slice(0, 120)}"?`,
        ans: title,
      },
      {
        prompt: `Identify the theorem, technique, or domain corresponding to:\n"${firstSentence.slice(0, 130)}"`,
        ans: title,
      },
    ];
    const chosen = identTemplates[seedIndex % identTemplates.length];
    return {
      id,
      prompt: chosen.prompt,
      questionType: "identification",
      optionA: chosen.ans,
      optionB: "Topic Definition",
      optionC: "identification",
      optionD: "",
      correct: "A",
      correctAnswerText: chosen.ans,
      explanation: `The concept described is ${title}. ${summary}`,
      topicTitle: title,
    };
  }

  if (type === "enumeration") {
    const enumTemplates = [
      {
        prompt: `Enumerate 3 key properties, theorems, or components associated with ${title}.`,
        ans: `1. Formal Definition, 2. Mathematical Properties, 3. Solution Methods for ${title}`,
      },
      {
        prompt: `List the fundamental criteria, conditions, or steps required when applying ${title}.`,
        ans: `1. Initial Conditions, 2. Analytical Formulation, 3. Verification of Results in ${title}`,
      },
      {
        prompt: `Enumerate the primary practical and computational applications of ${title}.`,
        ans: `1. Direct Computation, 2. Transformation / Factorization, 3. System Analysis in ${title}`,
      },
      {
        prompt: `List the major algebraic behaviors or core theorems that govern ${title}.`,
        ans: `1. Existence and Uniqueness, 2. Algebraic Invariants, 3. Numerical Stability in ${title}`,
      },
    ];
    const chosen = enumTemplates[seedIndex % enumTemplates.length];
    return {
      id,
      prompt: chosen.prompt,
      questionType: "enumeration",
      optionA: chosen.ans,
      optionB: "Enumeration items",
      optionC: "enumeration",
      optionD: "",
      correct: "A",
      correctAnswerText: chosen.ans,
      explanation: `Mastery of ${title} requires understanding its definition, core properties, and computational techniques.`,
      topicTitle: title,
    };
  }

  if (type === "problem_solving") {
    const examples = topic.examples ?? [];
    const exampleSnippet =
      examples.length > 0 ? examples[seedIndex % examples.length] : "";

    const psTemplates = [
      `Solve the following standard problem regarding ${title}:\n${exampleSnippet || `Given the fundamental equations of ${title}, compute the resulting canonical value or simplified expression.`}`,
      `Analyze the mathematical formulation for ${title} and calculate its principal result.`,
      `Evaluate the system described by ${title}: determine the necessary parameters that satisfy all governing conditions.`,
      `Apply analytical methods of ${title} to derive the exact quantitative solution for the standard case.`,
    ];
    const chosenPrompt = psTemplates[seedIndex % psTemplates.length];

    return {
      id,
      prompt: chosenPrompt,
      questionType: "problem_solving",
      optionA: `Solution to ${title}`,
      optionB: "Step 1: Set up the formula. Step 2: Perform calculations. Step 3: Simplify.",
      optionC: "problem_solving",
      optionD: "",
      correct: "A",
      correctAnswerText: `Standard Solution for ${title}`,
      explanation: `To solve problems in ${title}, apply the standard theorems and step-by-step analytical methods.`,
      topicTitle: title,
    };
  }

  // Default: Multiple Choice with 16 distinct prompt templates and diverse distractors
  const mcTemplates = [
    {
      prompt: `Which of the following statements is TRUE regarding ${title}?`,
      correct: `${summary.slice(0, 95)}...`,
      distractors: [
        `It is completely unrelated to ${title} and has no practical mathematical application.`,
        `It only applies to 1×1 matrices or constant zero functions.`,
        `Its definition violates the fundamental linearity properties in mathematics.`,
      ],
    },
    {
      prompt: `What is the primary mathematical purpose or role of ${title}?`,
      correct: `To analyze, decompose, or compute properties represented by: ${summary.slice(0, 85)}...`,
      distractors: [
        `To replace all algebraic equations with arbitrary numerical guesses.`,
        `To enforce that all matrices have zero determinant regardless of entries.`,
        `To convert all non-linear functions into single-digit constants.`,
      ],
    },
    {
      prompt: `In the study of ${title}, which theoretical condition must typically be met?`,
      correct: `The mathematical system must satisfy the core axioms and definitions of ${title}.`,
      distractors: [
        `The determinant must always equal zero under all circumstances.`,
        `The system must contain strictly negative integer coordinates only.`,
        `The dimension of the vector space must be strictly less than 1.`,
      ],
    },
    {
      prompt: `How is ${title} applied when solving complex mathematical or computational models?`,
      correct: `By leveraging its specific theorems and structural properties: ${summary.slice(0, 80)}...`,
      distractors: [
        `By completely bypassing all matrix algebra and linear transformations.`,
        `By assuming all variable components cancel out to positive infinity.`,
        `By restricting calculations exclusively to trivial identity operations.`,
      ],
    },
    {
      prompt: `Which of the following best characterizes the mathematical behavior of ${title}?`,
      correct: `${firstSentence.slice(0, 95)}...`,
      distractors: [
        `It produces non-deterministic random outputs with no algebraic consistency.`,
        `It is defined only when matrices contain exclusively complex imaginary entries.`,
        `It contradicts the fundamental theorem of linear algebra.`,
      ],
    },
    {
      prompt: `When working with ${title}, what fundamental property is consistently utilized?`,
      correct: `Consistent preservation of algebraic structure and defined computational rules.`,
      distractors: [
        `Disregard for scalar multiplication and vector addition rules.`,
        `The requirement that every square matrix must be singular.`,
        `The assumption that matrix multiplication is always commutative (AB = BA).`,
      ],
    },
    {
      prompt: `Why is ${title} considered an essential topic in ${catLabel}?`,
      correct: `It provides foundational insights and tools for solving advanced multi-variable problems.`,
      distractors: [
        `It is a legacy topic that is no longer valid in modern mathematics.`,
        `It only serves to increase manual calculation time without practical benefit.`,
        `It requires discarding standard matrix inversion and rank theorems.`,
      ],
    },
    {
      prompt: `Which of the following statements regarding ${title} is FALSE?`,
      correct: `${title} cannot be applied or computed for systems with more than 2 dimensions.`,
      distractors: [
        `${title} adheres to standard linear algebraic principles.`,
        `${title} can be used to analyze systems of equations and transformations.`,
        `${title} is connected to properties such as rank, determinants, or decompositions.`,
      ],
    },
    {
      prompt: `In practical numerical computing, what advantage does understanding ${title} offer?`,
      correct: `It enables efficient algorithms, avoids numerical instability, and leverages structure.`,
      distractors: [
        `It guarantees that all algorithms execute in exactly 0 milliseconds.`,
        `It eliminates the need for computer memory when storing large datasets.`,
        `It replaces floating point arithmetic with arbitrary symbolic strings.`,
      ],
    },
    {
      prompt: `What geometric or algebraic insight does ${title} provide?`,
      correct: `Understanding how transformations scale, project, decompose, or preserve dimensions.`,
      distractors: [
        `Demonstrating that vector spaces have no meaningful geometric interpretation.`,
        `Proving that parallel lines always intersect at a right angle in Euclidean space.`,
        `Showing that eigenvalues do not exist for any square matrix.`,
      ],
    },
    {
      prompt: `Under standard mathematical definitions, ${title} is most closely associated with:`,
      correct: `Core curriculum principles: ${summary.slice(0, 90)}...`,
      distractors: [
        `Elementary high-school arithmetic only, with no advanced relevance.`,
        `Unprovable conjectures that have no known algebraic applications.`,
        `Algorithms that are strictly illegal in matrix decomposition theory.`,
      ],
    },
    {
      prompt: `Which of the following criteria validates the application of ${title}?`,
      correct: `The underlying matrices or equations must conform to the formal domain specifications.`,
      distractors: [
        `All matrix entries must be prime numbers greater than 100.`,
        `The matrix must have an equal number of positive and negative eigenvalues.`,
        `The row rank and column rank must be strictly different numbers.`,
      ],
    },
  ];

  const tpl = mcTemplates[seedIndex % mcTemplates.length];
  return {
    id,
    prompt: tpl.prompt,
    questionType: "multiple_choice",
    optionA: tpl.correct,
    optionB: tpl.distractors[0],
    optionC: tpl.distractors[1],
    optionD: tpl.distractors[2],
    correct: "A",
    correctAnswerText: tpl.correct,
    explanation: `${title} is characterized by: ${summary}`,
    topicTitle: title,
  };
}

/**
 * Main Quiz Generation Function
 */
export function generateQuizQuestions(
  selectedTopics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  itemCount: number,
  questionType: QuizQuestionType
): GeneratedQuestion[] {
  const result: GeneratedQuestion[] = [];
  const targetCount = Math.max(1, itemCount);

  // 1. Gather curated questions matching the selected topics
  const isCalculus = category === "calculus-1" || category === "calculus-2";
  const matchingCurated: CuratedTopicQuestions[] = [];
  CURATED_KNOWLEDGE_BASE.forEach((kb) => {
    const isMatchingCategory =
      isCalculus
        ? (kb.category === "calculus-1" || kb.category === "calculus-2")
        : kb.category === category;
    if (isMatchingCategory) {
      const isRelevant = selectedTopics.some((t) =>
        matchesTopic(t.title, kb.topicKeywords)
      );
      if (isRelevant) {
        matchingCurated.push(kb);
      }
    }
  });

  // If no specific topic matched, match by category
  if (matchingCurated.length === 0) {
    CURATED_KNOWLEDGE_BASE.filter((kb) =>
      isCalculus
        ? (kb.category === "calculus-1" || kb.category === "calculus-2")
        : kb.category === category
    ).forEach((kb) => {
      matchingCurated.push(kb);
    });
  }

  // 2. Pool curated questions of the requested type
  const curatedPool: GeneratedQuestion[] = [];

  matchingCurated.forEach((kb) => {
    const topicLabel = kb.topicKeywords[0]
      ? kb.topicKeywords[0].charAt(0).toUpperCase() + kb.topicKeywords[0].slice(1)
      : "Topic";

    if (questionType === "multiple_choice") {
      kb.multipleChoice.forEach((mc, idx) => {
        const correctText =
          mc.correct === "A"
            ? mc.optionA
            : mc.correct === "B"
            ? mc.optionB
            : mc.correct === "C"
            ? mc.optionC
            : mc.optionD;

        curatedPool.push({
          id: `mc-${idx}-${Math.random().toString(36).slice(2, 7)}`,
          prompt: mc.prompt,
          questionType: "multiple_choice",
          optionA: mc.optionA,
          optionB: mc.optionB,
          optionC: mc.optionC,
          optionD: mc.optionD,
          correct: mc.correct,
          correctAnswerText: correctText,
          explanation: mc.explanation,
          topicTitle: topicLabel,
        });
      });
    } else if (questionType === "identification") {
      kb.identification.forEach((ident, idx) => {
        curatedPool.push({
          id: `id-${idx}-${Math.random().toString(36).slice(2, 7)}`,
          prompt: ident.prompt,
          questionType: "identification",
          optionA: ident.answer,
          optionB: ident.acceptable.join(", "),
          optionC: "identification",
          optionD: "",
          correct: "A",
          correctAnswerText: ident.answer,
          explanation: ident.explanation,
          topicTitle: topicLabel,
        });
      });
    } else if (questionType === "enumeration") {
      kb.enumeration.forEach((enumQ, idx) => {
        const itemsStr = enumQ.items.map((it, i) => `${i + 1}. ${it}`).join("\n");
        curatedPool.push({
          id: `en-${idx}-${Math.random().toString(36).slice(2, 7)}`,
          prompt: enumQ.prompt,
          questionType: "enumeration",
          optionA: itemsStr,
          optionB: enumQ.items.join("; "),
          optionC: "enumeration",
          optionD: "",
          correct: "A",
          correctAnswerText: itemsStr,
          explanation: enumQ.explanation,
          topicTitle: topicLabel,
        });
      });
    } else if (questionType === "problem_solving") {
      kb.problemSolving.forEach((ps, idx) => {
        curatedPool.push({
          id: `ps-${idx}-${Math.random().toString(36).slice(2, 7)}`,
          prompt: ps.prompt,
          questionType: "problem_solving",
          optionA: ps.answer,
          optionB: ps.solutionSteps.join("\n"),
          optionC: "problem_solving",
          optionD: "",
          correct: "A",
          correctAnswerText: ps.answer,
          explanation: ps.solutionSteps.join(" → "),
          topicTitle: topicLabel,
        });
      });
    }
  });

  // Shuffle curated pool
  const shuffledCurated = [...curatedPool].sort(() => 0.5 - Math.random());

  // 3. Fill with curated questions first
  for (let i = 0; i < shuffledCurated.length && result.length < targetCount; i++) {
    result.push(shuffledCurated[i]);
  }

  // 4. If we still need more questions, synthesize from the selected topics
  let topicIdx = 0;
  const effectiveTopics = selectedTopics.length > 0 ? selectedTopics : [
    {
      id: "general",
      title: category === "linear-algebra" ? "Linear Algebra" : category === "calculus-1" ? "Calculus 1" : "Calculus 2",
      category,
      summary: "Core mathematical methods and applications.",
      details: "",
    },
  ];

  while (result.length < targetCount) {
    const currentTopic = effectiveTopics[topicIdx % effectiveTopics.length];
    const synthesized = synthesizeQuestionFromTopic(
      currentTopic,
      questionType,
      result.length
    );
    result.push(synthesized);
    topicIdx++;
  }

  return result.slice(0, targetCount);
}

/**
 * Regenerate a single question based on topics
 */
export function regenerateSingleQuestion(
  currentQuestion: GeneratedQuestion,
  selectedTopics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  type: QuizQuestionType
): GeneratedQuestion {
  const generatedBatch = generateQuizQuestions(selectedTopics, category, 5, type);
  // Pick one whose prompt doesn't match the current prompt
  const different = generatedBatch.find((q) => q.prompt !== currentQuestion.prompt);
  return different || generatedBatch[0];
}

/* ======================================================================= */
/* PER-STUDENT RANDOMIZED QUESTION GENERATOR                               */
/* Generates distinct questionnaires per student for the same topic(s)     */
/* ======================================================================= */

export function getAllCombinedTopics(): TopicInput[] {
  const list: TopicInput[] = [];

  if (Array.isArray(LINEAR_ALGEBRA_TOPICS_RAW)) {
    LINEAR_ALGEBRA_TOPICS_RAW.forEach((t, idx) => {
      if (t && t.title) {
        list.push({
          id: t.id || `la-${idx}`,
          title: t.title,
          category: "linear-algebra",
          categoryLabel: "Linear Algebra",
          chapter: `Module ${idx + 1}`,
          summary: t.summary || "",
          details: t.details || "",
          examples: Array.isArray(t.examples) ? t.examples : [],
        });
      }
    });
  }

  if (Array.isArray(ALL_CALCULUS_TOPICS)) {
    ALL_CALCULUS_TOPICS.forEach((t) => {
      if (t && t.title) {
        list.push({
          id: t.id,
          title: t.title,
          category: "calculus-1",
          categoryLabel: "Calculus 1",
          chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
          summary: t.summary || "",
          details: t.details || "",
          examples: Array.isArray(t.examples) ? t.examples : [],
        });
      }
    });
  }

  if (Array.isArray(ALL_CALCULUS_2_TOPICS)) {
    ALL_CALCULUS_2_TOPICS.forEach((t) => {
      if (t && t.title) {
        list.push({
          id: t.id,
          title: t.title,
          category: "calculus-2",
          categoryLabel: "Calculus 2",
          chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
          summary: t.summary || "",
          details: t.details || "",
          examples: Array.isArray(t.examples) ? t.examples : [],
        });
      }
    });
  }

  return list;
}

export function createSeededRng(seed: string): () => number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function resolveTopicsForQuiz(
  quizTopic: string,
  providedTopics?: TopicInput[],
  category?: "linear-algebra" | "calculus-1" | "calculus-2",
  quizTitle?: string
): TopicInput[] {
  if (Array.isArray(providedTopics) && providedTopics.length > 0) {
    return providedTopics;
  }

  const allTopics = getAllCombinedTopics();
  const lowerTopic = (quizTopic || "").toLowerCase().trim();
  const lowerTitle = (quizTitle || "").toLowerCase().trim();
  const combined = `${lowerTopic} ${lowerTitle}`;

  // Try matching by specific topic titles / IDs
  const matchingByTitle = allTopics.filter((t) => {
    const tTitle = t.title.toLowerCase();
    const tId = t.id.toLowerCase();
    return (
      combined.includes(tTitle) ||
      combined.includes(tId) ||
      (tTitle.length > 5 && combined.includes(tTitle.slice(0, 10)))
    );
  });

  if (matchingByTitle.length > 0) {
    return matchingByTitle;
  }

  const isCalculus =
    category === "calculus-1" ||
    category === "calculus-2" ||
    combined.includes("calculus") ||
    combined.includes("101") ||
    combined.includes("102");

  if (isCalculus) {
    return allTopics.filter(
      (t) => t.category === "calculus-1" || t.category === "calculus-2"
    );
  }

  return allTopics.filter((t) => t.category === "linear-algebra");
}

/**
 * Builds a large candidate question pool (100+ questions) derived strictly from the
 * specified topics, blending curated items, section-specific concepts, and parameterized math calculations.
 */
function buildTopicSpecificQuestionPool(
  topics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  rng: () => number
): GeneratedQuestion[] {
  const pool: GeneratedQuestion[] = [];
  const topicTitles = topics.map((t) => t.title.toLowerCase());
  const topicIds = topics.map((t) => t.id.toLowerCase());
  const isCalc = category === "calculus-1" || category === "calculus-2";

  const matchesAnyTopic = (keywords: string[]) =>
    keywords.some((kw) => {
      const lower = kw.toLowerCase();
      return (
        topicTitles.some((t) => t.includes(lower) || lower.includes(t)) ||
        topicIds.some((id) => id.includes(lower) || lower.includes(id))
      );
    });

  // 1. Gather curated questions from CURATED_KNOWLEDGE_BASE matching topics
  CURATED_KNOWLEDGE_BASE.forEach((kb) => {
    const catMatches = isCalc
      ? kb.category === "calculus-1" || kb.category === "calculus-2"
      : kb.category === category;

    if (catMatches && (matchesAnyTopic(kb.topicKeywords) || topics.length >= 10)) {
      const label = kb.topicKeywords[0]
        ? kb.topicKeywords[0].charAt(0).toUpperCase() + kb.topicKeywords[0].slice(1)
        : "Topic";

      kb.multipleChoice.forEach((mc, idx) => {
        pool.push({
          id: `cur-mc-${idx}-${Math.floor(rng() * 100000)}`,
          prompt: mc.prompt,
          questionType: "multiple_choice",
          optionA: mc.optionA,
          optionB: mc.optionB,
          optionC: mc.optionC,
          optionD: mc.optionD,
          correct: mc.correct,
          correctAnswerText:
            mc.correct === "A"
              ? mc.optionA
              : mc.correct === "B"
              ? mc.optionB
              : mc.correct === "C"
              ? mc.optionC
              : mc.optionD,
          explanation: mc.explanation,
          topicTitle: label,
        });
      });

      kb.identification.forEach((ident, idx) => {
        pool.push({
          id: `cur-id-${idx}-${Math.floor(rng() * 100000)}`,
          prompt: ident.prompt,
          questionType: "identification",
          optionA: ident.answer,
          optionB: ident.acceptable.join(", "),
          optionC: "identification",
          optionD: "",
          correct: "A",
          correctAnswerText: ident.answer,
          explanation: ident.explanation,
          topicTitle: label,
        });
      });

      kb.enumeration.forEach((en, idx) => {
        const itemsStr = en.items.map((it, i) => `${i + 1}. ${it}`).join("\n");
        pool.push({
          id: `cur-en-${idx}-${Math.floor(rng() * 100000)}`,
          prompt: en.prompt,
          questionType: "enumeration",
          optionA: itemsStr,
          optionB: en.items.join("; "),
          optionC: "enumeration",
          optionD: "",
          correct: "A",
          correctAnswerText: itemsStr,
          explanation: en.explanation,
          topicTitle: label,
        });
      });

      kb.problemSolving.forEach((ps, idx) => {
        pool.push({
          id: `cur-ps-${idx}-${Math.floor(rng() * 100000)}`,
          prompt: ps.prompt,
          questionType: "problem_solving",
          optionA: ps.answer,
          optionB: ps.solutionSteps.join("\n"),
          optionC: "problem_solving",
          optionD: "",
          correct: "A",
          correctAnswerText: ps.answer,
          explanation: ps.solutionSteps.join(" → "),
          topicTitle: label,
        });
      });
    }
  });

  // 2. Generate Parameterized Problems with numbers determined by student's RNG
  topics.forEach((t) => {
    const tLower = (t.title + " " + (t.id || "")).toLowerCase();

    // LINEAR ALGEBRA PARAMETERIZED QUESTIONS
    if (category === "linear-algebra" || t.category === "linear-algebra") {
      // Determinant calculation with random entries
      if (tLower.includes("matrix") || tLower.includes("determinant") || tLower.includes("algebra") || tLower.includes("advanced")) {
        const a = Math.floor(rng() * 7) - 3 || 2;
        const b = Math.floor(rng() * 7) - 3 || 1;
        const c = Math.floor(rng() * 7) - 3 || 3;
        const d = Math.floor(rng() * 7) - 3 || 4;
        const det = a * d - b * c;
        pool.push({
          id: `param-det-${Math.floor(rng() * 100000)}`,
          prompt: `Calculate the determinant of matrix A = [[${a}, ${b}], [${c}, ${d}]].`,
          questionType: "multiple_choice",
          optionA: `${det}`,
          optionB: `${det + 2}`,
          optionC: `${a * d + b * c}`,
          optionD: `${-det}`,
          correct: "A",
          correctAnswerText: `${det}`,
          explanation: `For a 2×2 matrix [[a, b], [c, d]], det(A) = ad - bc = (${a})(${d}) - (${b})(${c}) = ${det}.`,
          topicTitle: t.title,
        });

        const tr = a + d;
        pool.push({
          id: `param-tr-${Math.floor(rng() * 100000)}`,
          prompt: `Find the trace of matrix M = [[${a}, ${b}], [${c}, ${d}]].`,
          questionType: "multiple_choice",
          optionA: `${tr}`,
          optionB: `${tr - 1}`,
          optionC: `${a * d}`,
          optionD: `${b + c}`,
          correct: "A",
          correctAnswerText: `${tr}`,
          explanation: `The trace of a square matrix is the sum of main diagonal elements: trace(M) = ${a} + ${d} = ${tr}.`,
          topicTitle: t.title,
        });

        // Transpose question
        pool.push({
          id: `param-trans-${Math.floor(rng() * 100000)}`,
          prompt: `If A = [[${a}, ${b}], [${c}, ${d}]], what is entry (2, 1) of the transpose Aᵀ?`,
          questionType: "multiple_choice",
          optionA: `${b}`,
          optionB: `${c}`,
          optionC: `${a}`,
          optionD: `${d}`,
          correct: "A",
          correctAnswerText: `${b}`,
          explanation: `The transpose interchanges rows and columns: (Aᵀ)₂₁ = A₁₂ = ${b}.`,
          topicTitle: t.title,
        });

        // Scalar multiplication question
        const scalarK = Math.floor(rng() * 4) + 2;
        pool.push({
          id: `param-scalar-${Math.floor(rng() * 100000)}`,
          prompt: `For matrix A = [[${a}, ${b}], [${c}, ${d}]], compute entry (1, 1) of matrix ${scalarK}A.`,
          questionType: "multiple_choice",
          optionA: `${scalarK * a}`,
          optionB: `${scalarK + a}`,
          optionC: `${scalarK * b}`,
          optionD: `${a}`,
          correct: "A",
          correctAnswerText: `${scalarK * a}`,
          explanation: `Scalar multiplication multiplies each entry by ${scalarK}: ${scalarK} * ${a} = ${scalarK * a}.`,
          topicTitle: t.title,
        });

        // Problem solving determinant
        pool.push({
          id: `param-ps-det-${Math.floor(rng() * 100000)}`,
          prompt: `Given matrix M = [[${a}, ${b}], [${c}, ${d}]], compute det(M).`,
          questionType: "problem_solving",
          optionA: `${det}`,
          optionB: `det = (${a})(${d}) - (${b})(${c}) = ${det}`,
          optionC: "problem_solving",
          optionD: "",
          correct: "A",
          correctAnswerText: `${det}`,
          explanation: `det(M) = ${a} * ${d} - ${b} * ${c} = ${det}`,
          topicTitle: t.title,
        });
      }

      // Matrix Operations (Transpose, Inverses, Rank, Decompositions)
      if (tLower.includes("matrix") || tLower.includes("advanced") || tLower.includes("inverse") || tLower.includes("rank") || tLower.includes("algebra")) {
        // Upper triangular eigenvalues
        const ev1 = Math.floor(rng() * 7) + 1;
        const ev2 = Math.floor(rng() * 7) + 2;
        const offDiag = Math.floor(rng() * 5) + 1;
        pool.push({
          id: `param-eig-${Math.floor(rng() * 100000)}`,
          prompt: `Find the eigenvalues of the upper triangular matrix T = [[${ev1}, ${offDiag}], [0, ${ev2}]].`,
          questionType: "multiple_choice",
          optionA: `λ₁ = ${ev1}, λ₂ = ${ev2}`,
          optionB: `λ₁ = ${ev1 + offDiag}, λ₂ = ${ev2}`,
          optionC: `λ₁ = 0, λ₂ = ${ev1 * ev2}`,
          optionD: `λ₁ = ${ev1 - ev2}, λ₂ = ${offDiag}`,
          correct: "A",
          correctAnswerText: `λ₁ = ${ev1}, λ₂ = ${ev2}`,
          explanation: `The eigenvalues of any triangular matrix are simply its main diagonal entries: ${ev1} and ${ev2}.`,
          topicTitle: t.title,
        });

        // Rank-nullity calculation
        const colsN = Math.floor(rng() * 3) + 4; // 4 to 6
        const rankR = Math.floor(rng() * 3) + 2; // 2 to 4
        const nullityAns = colsN - rankR;
        pool.push({
          id: `param-rn-${Math.floor(rng() * 100000)}`,
          prompt: `By the Rank-Nullity Theorem, if matrix A has ${colsN} columns and rank(A) = ${rankR}, what is nullity(A)?`,
          questionType: "multiple_choice",
          optionA: `${nullityAns}`,
          optionB: `${colsN + rankR}`,
          optionC: `${rankR}`,
          optionD: `${nullityAns + 2}`,
          correct: "A",
          correctAnswerText: `${nullityAns}`,
          explanation: `Rank-Nullity Theorem: rank(A) + nullity(A) = number of columns (${colsN}). Nullity = ${colsN} - ${rankR} = ${nullityAns}.`,
          topicTitle: t.title,
        });

        // Determinant scaling property
        const dimN = 2;
        const cFactor = Math.floor(rng() * 3) + 2;
        const origDet = Math.floor(rng() * 4) + 2;
        const scaledDet = Math.pow(cFactor, dimN) * origDet;
        pool.push({
          id: `param-det-scale-${Math.floor(rng() * 100000)}`,
          prompt: `If A is a 2×2 matrix with det(A) = ${origDet}, what is det(${cFactor}A)?`,
          questionType: "multiple_choice",
          optionA: `${scaledDet}`,
          optionB: `${cFactor * origDet}`,
          optionC: `${origDet}`,
          optionD: `${scaledDet + cFactor}`,
          correct: "A",
          correctAnswerText: `${scaledDet}`,
          explanation: `For an n×n matrix, det(cA) = cⁿ · det(A). Here (c²) · det(A) = (${cFactor}²)(${origDet}) = ${scaledDet}.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `concept-inv-${Math.floor(rng() * 100000)}`,
          prompt: `Which of the following conditions is necessary and sufficient for a square matrix A to be invertible?`,
          questionType: "multiple_choice",
          optionA: `det(A) ≠ 0 and rank(A) equals the number of columns`,
          optionB: `det(A) = 0 and trace(A) > 0`,
          optionC: `A is symmetric and has all non-negative entries`,
          optionD: `A has at least one row consisting entirely of zeros`,
          correct: "A",
          correctAnswerText: `det(A) ≠ 0 and rank(A) equals the number of columns`,
          explanation: `A square matrix A is invertible (nonsingular) if and only if its determinant is non-zero and it has full rank.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `concept-rank-${Math.floor(rng() * 100000)}`,
          prompt: `According to the Rank-Nullity Theorem, for any m×n matrix A:`,
          questionType: "multiple_choice",
          optionA: `rank(A) + nullity(A) = n (number of columns)`,
          optionB: `rank(A) + nullity(A) = m (number of rows)`,
          optionC: `rank(A) × nullity(A) = det(A)`,
          optionD: `rank(A) = nullity(A) for all matrices`,
          correct: "A",
          correctAnswerText: `rank(A) + nullity(A) = n (number of columns)`,
          explanation: `The fundamental Rank-Nullity theorem states that dim(col(A)) + dim(null(A)) = n.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `concept-sparse-${Math.floor(rng() * 100000)}`,
          prompt: `What is the primary motivation for using sparse matrix representations (such as CSR or CSC formats) in computational linear algebra?`,
          questionType: "multiple_choice",
          optionA: `To save memory and accelerate operations by storing only non-zero entries`,
          optionB: `To ensure the matrix is always invertible`,
          optionC: `To force all eigenvalues to be real and positive`,
          optionD: `To eliminate the need for matrix transpose operations`,
          correct: "A",
          correctAnswerText: `To save memory and accelerate operations by storing only non-zero entries`,
          explanation: `Sparse matrices contain predominantly zeros; sparse formats store only non-zero elements and their indices.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `concept-cond-${Math.floor(rng() * 100000)}`,
          prompt: `In numerical linear algebra, what does a very large condition number κ(A) indicate about the system Ax = b?`,
          questionType: "multiple_choice",
          optionA: `The system is ill-conditioned; small perturbations in b cause large errors in x`,
          optionB: `The system is well-conditioned and guaranteed to converge in one iteration`,
          optionC: `Matrix A is an identity matrix`,
          optionD: `The determinant of A is strictly greater than 1,000`,
          correct: "A",
          correctAnswerText: `The system is ill-conditioned; small perturbations in b cause large errors in x`,
          explanation: `A large condition number indicates that solutions to Ax = b are sensitive to numerical errors.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `ident-lu-${Math.floor(rng() * 100000)}`,
          prompt: `Identify the matrix decomposition method that factors a matrix A into the product of a lower triangular matrix and an upper triangular matrix.`,
          questionType: "identification",
          optionA: `LU Decomposition`,
          optionB: `lu decomposition, lu factorization, lu`,
          optionC: "identification",
          optionD: "",
          correct: "A",
          correctAnswerText: `LU Decomposition`,
          explanation: `LU decomposition factors A into L (unit lower triangular) and U (upper triangular).`,
          topicTitle: t.title,
        });

        pool.push({
          id: `ident-ortho-${Math.floor(rng() * 100000)}`,
          prompt: `Identify the type of square matrix Q that satisfies the property QᵀQ = QQᵀ = I.`,
          questionType: "identification",
          optionA: `Orthogonal Matrix`,
          optionB: `orthogonal, orthogonal matrix`,
          optionC: "identification",
          optionD: "",
          correct: "A",
          correctAnswerText: `Orthogonal Matrix`,
          explanation: `An orthogonal matrix has orthonormal columns and rows, so its transpose equals its inverse.`,
          topicTitle: t.title,
        });
      }

      // Vectors & Dot Product
      if (tLower.includes("vector") || tLower.includes("space") || tLower.includes("orthogonal") || tLower.includes("algebra")) {
        const u1 = Math.floor(rng() * 5) + 1;
        const u2 = Math.floor(rng() * 5) - 2;
        const v1 = Math.floor(rng() * 5) - 2;
        const v2 = Math.floor(rng() * 5) + 1;
        const dot = u1 * v1 + u2 * v2;
        pool.push({
          id: `param-dot-${Math.floor(rng() * 100000)}`,
          prompt: `Compute the dot product of vectors u = (${u1}, ${u2}) and v = (${v1}, ${v2}).`,
          questionType: "multiple_choice",
          optionA: `${dot}`,
          optionB: `${dot + 3}`,
          optionC: `${u1 * v2 + u2 * v1}`,
          optionD: `${dot - 2}`,
          correct: "A",
          correctAnswerText: `${dot}`,
          explanation: `u · v = (${u1})(${v1}) + (${u2})(${v2}) = ${dot}.`,
          topicTitle: t.title,
        });

        const normSq = u1 * u1 + u2 * u2;
        pool.push({
          id: `param-norm-${Math.floor(rng() * 100000)}`,
          prompt: `Calculate the squared Euclidean norm ||u||² for vector u = (${u1}, ${u2}).`,
          questionType: "multiple_choice",
          optionA: `${normSq}`,
          optionB: `${normSq + 1}`,
          optionC: `${u1 + u2}`,
          optionD: `${normSq * 2}`,
          correct: "A",
          correctAnswerText: `${normSq}`,
          explanation: `||u||² = (${u1})² + (${u2})² = ${u1 * u1} + ${u2 * u2} = ${normSq}.`,
          topicTitle: t.title,
        });
      }
    }

    // CALCULUS PARAMETERIZED QUESTIONS
    if (isCalc || t.category === "calculus-1" || t.category === "calculus-2") {
      // Derivatives / Power Rule
      if (tLower.includes("derivative") || tLower.includes("differentiation") || tLower.includes("tangent") || tLower.includes("extrema") || tLower.includes("calculus") || tLower.includes("analytic")) {
        const coef = Math.floor(rng() * 5) + 2;
        const exp = Math.floor(rng() * 3) + 2;
        const constTerm = Math.floor(rng() * 6) + 1;
        const ansDerivative = `${coef * exp}x^${exp - 1} + ${constTerm}`;
        pool.push({
          id: `calc-deriv-${Math.floor(rng() * 100000)}`,
          prompt: `Find the first derivative f'(x) for f(x) = ${coef}x^${exp} + ${constTerm}x - 7.`,
          questionType: "multiple_choice",
          optionA: ansDerivative,
          optionB: `${coef}x^${exp - 1} + ${constTerm}`,
          optionC: `${coef * exp}x^${exp}`,
          optionD: `${coef * exp}x^${exp - 1} - 7`,
          correct: "A",
          correctAnswerText: ansDerivative,
          explanation: `By the power rule d/dx(c*x^n) = c*n*x^(n-1), d/dx(${coef}x^${exp} + ${constTerm}x - 7) = ${ansDerivative}.`,
          topicTitle: t.title,
        });

        // Limit problem
        const cLim = Math.floor(rng() * 5) + 2;
        const cSq = cLim * cLim;
        pool.push({
          id: `calc-lim-${Math.floor(rng() * 100000)}`,
          prompt: `Evaluate the limit: lim (x → ${cLim}) (x² - ${cSq}) / (x - ${cLim}).`,
          questionType: "multiple_choice",
          optionA: `${2 * cLim}`,
          optionB: `${cLim}`,
          optionC: `0`,
          optionD: `Does not exist`,
          correct: "A",
          correctAnswerText: `${2 * cLim}`,
          explanation: `Factoring gives (x - ${cLim})(x + ${cLim}) / (x - ${cLim}) = x + ${cLim}. As x → ${cLim}, limit is ${cLim} + ${cLim} = ${2 * cLim}.`,
          topicTitle: t.title,
        });

        // Tangent line slope
        const xPt = Math.floor(rng() * 4) + 1;
        const slopeAns = 2 * coef * xPt;
        pool.push({
          id: `calc-tangent-${Math.floor(rng() * 100000)}`,
          prompt: `Determine the slope of the tangent line to y = ${coef}x² at x = ${xPt}.`,
          questionType: "multiple_choice",
          optionA: `${slopeAns}`,
          optionB: `${slopeAns / 2}`,
          optionC: `${coef * xPt}`,
          optionD: `${slopeAns + 4}`,
          correct: "A",
          correctAnswerText: `${slopeAns}`,
          explanation: `y' = 2(${coef})x = ${2 * coef}x. At x = ${xPt}, slope = ${2 * coef}(${xPt}) = ${slopeAns}.`,
          topicTitle: t.title,
        });
      }

      // Integrals / Definite Integrals
      if (tLower.includes("integral") || tLower.includes("integration") || tLower.includes("area") || tLower.includes("series") || tLower.includes("calculus")) {
        const aInt = (Math.floor(rng() * 4) + 1) * 2;
        const kUpper = Math.floor(rng() * 4) + 1;
        const defIntAns = (aInt * kUpper * kUpper) / 2;
        pool.push({
          id: `calc-int-${Math.floor(rng() * 100000)}`,
          prompt: `Evaluate the definite integral: ∫ from 0 to ${kUpper} of (${aInt}x) dx.`,
          questionType: "multiple_choice",
          optionA: `${defIntAns}`,
          optionB: `${defIntAns + 2}`,
          optionC: `${aInt * kUpper}`,
          optionD: `${defIntAns / 2}`,
          correct: "A",
          correctAnswerText: `${defIntAns}`,
          explanation: `∫ ${aInt}x dx = [(${aInt}/2) x²] from 0 to ${kUpper} = (${aInt / 2})(${kUpper}²) = ${defIntAns}.`,
          topicTitle: t.title,
        });

        pool.push({
          id: `calc-ibp-concept-${Math.floor(rng() * 100000)}`,
          prompt: `Which of the following integration techniques is based directly on reversing the product rule of differentiation?`,
          questionType: "multiple_choice",
          optionA: `Integration by Parts: ∫ u dv = uv - ∫ v du`,
          optionB: `Trigonometric Substitution using x = a*sin(θ)`,
          optionC: `Partial Fraction Decomposition`,
          optionD: `Trapezoidal Numerical Approximation`,
          correct: "A",
          correctAnswerText: `Integration by Parts: ∫ u dv = uv - ∫ v du`,
          explanation: `Integration by parts originates from d/dx(uv) = u'v + uv' integrated over both sides.`,
          topicTitle: t.title,
        });

        // Geometric series sum
        const geoA = Math.floor(rng() * 4) + 2;
        pool.push({
          id: `calc-series-geo-${Math.floor(rng() * 100000)}`,
          prompt: `Compute the sum of the infinite geometric series: ${geoA} + ${geoA / 2} + ${geoA / 4} + ${geoA / 8} + ...`,
          questionType: "multiple_choice",
          optionA: `${2 * geoA}`,
          optionB: `${geoA + 2}`,
          optionC: `Diverges`,
          optionD: `${geoA / 2}`,
          correct: "A",
          correctAnswerText: `${2 * geoA}`,
          explanation: `First term a = ${geoA}, common ratio r = 1/2. Sum S = a / (1 - r) = ${geoA} / (1 - 0.5) = ${2 * geoA}.`,
          topicTitle: t.title,
        });
      }
    }

    // 3. Synthesize conceptual questions from topic summary & details (16 diverse variants)
    for (let sIdx = 0; sIdx < 16; sIdx++) {
      pool.push(synthesizeQuestionFromTopic(t, "multiple_choice", sIdx));
      if (sIdx < 8) {
        pool.push(synthesizeQuestionFromTopic(t, "identification", sIdx));
        pool.push(synthesizeQuestionFromTopic(t, "enumeration", sIdx));
        pool.push(synthesizeQuestionFromTopic(t, "problem_solving", sIdx));
      }
    }
  });

  return pool;
}

/**
 * Generates a unique, personalized questionnaire for a specific student,
 * strictly derived from the same topics that the admin chose for the quiz.
 *
 * For example, if 40 students take the quiz on "Advanced Matrix Topics",
 * each student gets a different set of questions with different numbers/prompts,
 * but all questions are exclusively from the selected topics.
 */
export function generateStudentPersonalizedQuizQuestions(
  quizId: string,
  studentId: string,
  quizTopic: string,
  baseQuestions: QuizQuestionItem[],
  chosenTopics?: TopicInput[],
  category?: "linear-algebra" | "calculus-1" | "calculus-2",
  quizTitle?: string
): QuizQuestionItem[] {
  if (!Array.isArray(baseQuestions) || baseQuestions.length === 0) {
    return [];
  }

  // 1. Resolve topics for this quiz
  const effectiveTopics = resolveTopicsForQuiz(quizTopic, chosenTopics, category, quizTitle);
  const effectiveCategory =
    category ||
    (effectiveTopics.some(
      (t) => t.category === "calculus-1" || t.category === "calculus-2"
    )
      ? "calculus-1"
      : "linear-algebra");

  // 2. Initialize seeded PRNG for this student & quiz
  const seedString = `${studentId}_${quizId}`;
  const rng = createSeededRng(seedString);

  // 3. Build a large, diverse candidate pool of questions for these topics (100+ candidates)
  const candidatePool: GeneratedQuestion[] = buildTopicSpecificQuestionPool(
    effectiveTopics,
    effectiveCategory,
    rng
  );

  // 4. For each question in baseQuestions, pick a question of matching type from the pool
  const usedPrompts = new Set<string>();
  const personalizedQuestions: QuizQuestionItem[] = [];

  baseQuestions.forEach((baseQ, idx) => {
    const qType = baseQ.questionType || "multiple_choice";

    // Filter candidate pool by question type
    let matchingTypeCandidates = candidatePool.filter(
      (c) =>
        (c.questionType || "multiple_choice") === qType &&
        !usedPrompts.has(c.prompt)
    );

    // If exhausted, allow any candidate of this type
    if (matchingTypeCandidates.length === 0) {
      matchingTypeCandidates = candidatePool.filter(
        (c) => (c.questionType || "multiple_choice") === qType
      );
    }

    // Pick one using student's rng
    let chosenCandidate: GeneratedQuestion;
    if (matchingTypeCandidates.length > 0) {
      const pickIdx = Math.floor(rng() * matchingTypeCandidates.length);
      chosenCandidate = matchingTypeCandidates[pickIdx];
    } else {
      // Synthesize on the fly for this topic with student's seed
      const topicForQ = effectiveTopics[idx % effectiveTopics.length];
      chosenCandidate = synthesizeQuestionFromTopic(
        topicForQ,
        qType,
        idx + Math.floor(rng() * 100)
      );
    }

    usedPrompts.add(chosenCandidate.prompt);

    // If multiple choice, shuffle the options using student's rng so choice letters also vary
    if (qType === "multiple_choice") {
      const rawOptions = [
        { key: "A" as const, text: chosenCandidate.optionA },
        { key: "B" as const, text: chosenCandidate.optionB },
        { key: "C" as const, text: chosenCandidate.optionC },
        { key: "D" as const, text: chosenCandidate.optionD },
      ];
      const shuffledOptions = seededShuffle(rawOptions, rng);
      const optKeys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
      const newCorrectKey =
        optKeys[
          shuffledOptions.findIndex((o) => o.key === chosenCandidate.correct)
        ] || "A";

      personalizedQuestions.push({
        id: `sq-${quizId}-${studentId}-${idx + 1}`,
        questionIndex: idx + 1,
        prompt: chosenCandidate.prompt,
        questionType: "multiple_choice",
        optionA: shuffledOptions[0].text,
        optionB: shuffledOptions[1].text,
        optionC: shuffledOptions[2].text,
        optionD: shuffledOptions[3].text,
        correctAnswer: newCorrectKey,
        correctAnswerText:
          chosenCandidate.correctAnswerText || chosenCandidate.optionA,
        explanation: chosenCandidate.explanation || "",
      });
    } else {
      personalizedQuestions.push({
        id: `sq-${quizId}-${studentId}-${idx + 1}`,
        questionIndex: idx + 1,
        prompt: chosenCandidate.prompt,
        questionType: qType,
        optionA: chosenCandidate.optionA,
        optionB: chosenCandidate.optionB,
        optionC: chosenCandidate.optionC,
        optionD: chosenCandidate.optionD,
        correctAnswer: chosenCandidate.correct || "A",
        correctAnswerText:
          chosenCandidate.correctAnswerText || chosenCandidate.optionA,
        explanation: chosenCandidate.explanation || chosenCandidate.optionB,
      });
    }
  });

  return personalizedQuestions;
}
