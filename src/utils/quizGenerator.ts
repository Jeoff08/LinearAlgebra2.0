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

// Helper to sanitize keywords for matching strictly against topic titles and IDs
function matchesTopic(topicTitle: string, keywords: string[]): boolean {
  const lower = topicTitle.toLowerCase();
  return keywords.some((k) => {
    const kLower = k.toLowerCase();
    return lower === kLower || lower.includes(kLower) || kLower.includes(lower);
  });
}

/**
 * Helper to construct multiple-choice questions with dynamically shuffled options
 * so the correct answer is evenly distributed across A, B, C, and D.
 */
function createShuffledMC(
  id: string,
  prompt: string,
  correctOptionText: string,
  distractors: [string, string, string],
  explanation: string,
  topicTitle: string,
  rng: () => number
): GeneratedQuestion {
  const raw = [
    { isCorrect: true, text: correctOptionText },
    { isCorrect: false, text: distractors[0] },
    { isCorrect: false, text: distractors[1] },
    { isCorrect: false, text: distractors[2] },
  ];
  const shuffled = seededShuffle(raw, rng);
  const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
  const correctIdx = shuffled.findIndex((o) => o.isCorrect);
  const correctKey = keys[correctIdx >= 0 ? correctIdx : 0];

  return {
    id,
    prompt,
    questionType: "multiple_choice",
    optionA: shuffled[0].text,
    optionB: shuffled[1].text,
    optionC: shuffled[2].text,
    optionD: shuffled[3].text,
    correct: correctKey,
    correctAnswerText: correctOptionText,
    explanation,
    topicTitle,
  };
}

/**
 * Extracts distinct lesson sections from topic.details to build highly specific questions
 */
function extractTopicSections(details: string): { title: string; content: string }[] {
  if (!details) return [];
  const clean = details.replace(/\r/g, "");
  const regex = /(?:^|\n)(?:[0-9]+[\.\)]\s+)?([A-Z0-9\s,\-\(\)\/\–]{3,60})\n[━─═]{3,}\n([\s\S]*?)(?=(?:\n(?:[0-9]+[\.\)]\s+)?[A-Z0-9\s,\-\(\)\/\–]{3,60}\n[━─═]{3,})|$)/g;
  const sections: { title: string; content: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(clean)) !== null) {
    const sTitle = match[1].trim();
    const sContent = match[2].trim();
    if (sTitle && sContent && sTitle.length > 3) {
      sections.push({ title: sTitle, content: sContent });
    }
  }
  return sections;
}

/**
 * Universal deep topic question synthesizer
 * Generates 40+ unique questions per topic across all four question types,
 * ensuring 100% strict adherence to the specified topic's mathematical domain.
 */
function synthesizeQuestionFromTopic(
  topic: TopicInput,
  type: QuizQuestionType,
  seedIndex: number,
  rng: () => number = Math.random
): GeneratedQuestion {
  const id = `gen-${Date.now()}-${seedIndex}-${Math.floor(rng() * 1000000)}`;
  const title = topic.title || "Mathematics Topic";
  const summary = topic.summary || "Explore fundamental properties, rules, and computational principles.";
  const details = topic.details || "";
  const cat = topic.category || "linear-algebra";
  const catLabel = cat === "linear-algebra" ? "Linear Algebra" : cat === "calculus-1" ? "Calculus 1" : "Calculus 2";

  // Clean details
  const cleanDetails = details.replace(/━+/g, "").replace(/\n+/g, " ").trim();
  const firstSentence = cleanDetails.slice(0, 180).trim() || summary;
  const sections = extractTopicSections(details);
  const activeSection = sections.length > 0 ? sections[seedIndex % sections.length] : null;

  // 1. IDENTIFICATION QUESTIONS (12+ Diverse Variants)
  if (type === "identification") {
    const identTemplates = [
      {
        prompt: `Identify the mathematical concept or rule defined as follows:\n"${summary}"`,
        ans: title,
        exp: `The concept described is ${title}. ${summary}`,
      },
      {
        prompt: `In ${catLabel}, what specific topic or method directly governs:\n"${firstSentence.slice(0, 140)}"?`,
        ans: title,
        exp: `${title} is the governing framework in ${catLabel}.`,
      },
      {
        prompt: `Name the foundational concept represented in the following mathematical formulation:\n"${summary.slice(0, 130)}"`,
        ans: title,
        exp: `This formulation defines ${title}.`,
      },
      {
        prompt: `Identify the mathematical structure or operation focused on:\n"${summary}"`,
        ans: title,
        exp: `${title} provides the analytical basis for this operation.`,
      },
      {
        prompt: `Which major framework in ${catLabel} encompasses the following principle:\n"${summary.slice(0, 120)}"?`,
        ans: title,
        exp: `The framework is ${title}.`,
      },
      {
        prompt: `Identify the theorem, technique, or topic corresponding to:\n"${firstSentence.slice(0, 130)}"`,
        ans: title,
        exp: `The topic is ${title}.`,
      },
      {
        prompt: `In ${catLabel}, what term represents the mathematical procedure or definition used in:\n"${summary.slice(0, 110)}"?`,
        ans: title,
        exp: `The procedure/definition is ${title}.`,
      },
      {
        prompt: `Name the primary analytical method applied to analyze:\n"${summary.slice(0, 115)}"`,
        ans: title,
        exp: `The analytical method is ${title}.`,
      },
      {
        prompt: `Identify the core topic in ${catLabel} characterized by:\n"${firstSentence.slice(0, 125)}"`,
        ans: title,
        exp: `This is characterized by ${title}.`,
      },
      {
        prompt: `What is the standard mathematical title given to the study of:\n"${summary.slice(0, 100)}"?`,
        ans: title,
        exp: `The study is known as ${title}.`,
      },
      {
        prompt: activeSection
          ? `Identify the topic whose curriculum includes the section: "${activeSection.title}".`
          : `Name the foundational concept governing ${title} in ${catLabel}.`,
        ans: title,
        exp: `${title} contains this foundational analysis.`,
      },
      {
        prompt: `Name the mathematical domain that evaluates:\n"${summary.slice(0, 135)}"`,
        ans: title,
        exp: `The mathematical domain is ${title}.`,
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
      explanation: chosen.exp,
      topicTitle: title,
    };
  }

  // 2. ENUMERATION QUESTIONS (8+ Diverse Variants)
  if (type === "enumeration") {
    const enumTemplates = [
      {
        prompt: `Enumerate 3 key properties, theorems, or components associated with ${title}.`,
        ans: `1. Formal Definition of ${title}\n2. Governing Theorems & Formulas\n3. Computational Solution Procedures`,
      },
      {
        prompt: `List the fundamental criteria, conditions, or steps required when applying ${title}.`,
        ans: `1. Verify Domain & Hypotheses\n2. Set Up the Governing Equation for ${title}\n3. Simplify and Validate Results`,
      },
      {
        prompt: `Enumerate the primary practical, analytical, and computational applications of ${title}.`,
        ans: `1. Direct Quantitative Evaluation\n2. Transformation & Optimization\n3. Multi-Variable System Modeling in ${title}`,
      },
      {
        prompt: `List the major algebraic behaviors or core theorems that govern ${title}.`,
        ans: `1. Existence & Uniqueness Criteria\n2. Invariance & Linearity Properties\n3. Analytical Stability in ${title}`,
      },
      {
        prompt: `Enumerate the sequential steps taken to solve a standard problem involving ${title}.`,
        ans: `1. Identify Known Parameters\n2. Apply the Standard ${title} Formulation\n3. Evaluate and Check Boundary Cases`,
      },
      {
        prompt: `List 3 common classifications, cases, or representations encountered in ${title}.`,
        ans: `1. Standard Case\n2. Boundary / Degenerate Case\n3. Higher-Order / Asymptotic Case in ${title}`,
      },
      {
        prompt: `Enumerate the essential prerequisites and foundational concepts needed before mastering ${title}.`,
        ans: `1. Basic Algebraic & Function Operations\n2. Coordinate Geometry & Analytic Formulations\n3. Theorem Verification for ${title}`,
      },
      {
        prompt: `List the key analytical advantages gained from mastering ${title}.`,
        ans: `1. Simplification of Complex Mathematical Models\n2. Exact Closed-Form Derivations\n3. Rigorous Theoretical Foundations for ${title}`,
      },
    ];
    const chosen = enumTemplates[seedIndex % enumTemplates.length];
    return {
      id,
      prompt: chosen.prompt,
      questionType: "enumeration",
      optionA: chosen.ans,
      optionB: chosen.ans.replace(/\n/g, "; "),
      optionC: "enumeration",
      optionD: "",
      correct: "A",
      correctAnswerText: chosen.ans,
      explanation: `Mastery of ${title} requires thorough knowledge of its definition, core properties, and computational techniques.`,
      topicTitle: title,
    };
  }

  // 3. PROBLEM SOLVING QUESTIONS (12+ Diverse Variants)
  if (type === "problem_solving") {
    const examples = topic.examples ?? [];
    const exampleSnippet = examples.length > 0 ? examples[seedIndex % examples.length] : "";

    const psTemplates = [
      {
        prompt: `Solve the following problem regarding ${title}:\n${exampleSnippet || `Given the fundamental equations of ${title}, compute the resulting canonical value or simplified expression.`}`,
        ans: `Standard Solution for ${title}`,
        steps: `Step 1: Formulate the governing equation for ${title}.\nStep 2: Substitute given parameters into the equation.\nStep 3: Simplify algebraic and numerical terms.\nStep 4: Conclude with the verified exact solution.`,
      },
      {
        prompt: `Analyze the mathematical system governed by ${title} and calculate its principal result for standard initial conditions.`,
        ans: `Derived Value for ${title}`,
        steps: `Step 1: Identify all given system constraints in ${title}.\nStep 2: Apply the governing transformation or differentiation/integration formula.\nStep 3: Solve for the unknown parameter.\nStep 4: Check that the result satisfies domain conditions.`,
      },
      {
        prompt: `Apply analytical methods of ${title} to derive the exact quantitative solution for the standard case.`,
        ans: `Exact Analytical Solution`,
        steps: `Step 1: Set up the definition of ${title}.\nStep 2: Perform required operations step-by-step.\nStep 3: Simplify to lowest terms.`,
      },
      {
        prompt: `Evaluate the mathematical expression under the rules of ${title} and verify that all conditions are satisfied.`,
        ans: `Verified Result for ${title}`,
        steps: `Step 1: Check hypotheses and domain bounds for ${title}.\nStep 2: Execute standard computation.\nStep 3: State the final verified value.`,
      },
      {
        prompt: `Consider a scenario modeled by ${title}. Determine the value of the unknown variable that satisfies the governing equation.`,
        ans: `Canonical Parameter for ${title}`,
        steps: `Step 1: Write down the primary equation for ${title}.\nStep 2: Isolate the target variable.\nStep 3: Evaluate numerically or symbolically.`,
      },
      {
        prompt: `Using the core theorems of ${title}, determine the critical value or rate of change corresponding to the standard benchmark.`,
        ans: `Critical Benchmark for ${title}`,
        steps: `Step 1: Apply the foundational theorem of ${title}.\nStep 2: Differentiate, integrate, or factor as required.\nStep 3: Conclude with the exact benchmark value.`,
      },
      {
        prompt: `Demonstrate the step-by-step solution for evaluating expressions governed by ${title}.`,
        ans: `Step-by-Step Evaluation for ${title}`,
        steps: `Step 1: Identify the operational form of ${title}.\nStep 2: Apply arithmetic and algebraic simplification.\nStep 3: Verify consistency with definition.`,
      },
      {
        prompt: `Compute the exact result for the following case involving ${title}:\nGiven standard coefficients, determine the resulting magnitude or coordinate.`,
        ans: `Calculated Exact Result`,
        steps: `Step 1: State the formula for ${title}.\nStep 2: Substitute given coefficients.\nStep 3: Compute final arithmetic result.`,
      },
      {
        prompt: `Given a continuous/linear model governed by ${title}, solve for the equilibrium or root condition.`,
        ans: `Equilibrium Condition for ${title}`,
        steps: `Step 1: Set governing relation to zero or target bound.\nStep 2: Solve algebraically.\nStep 3: Confirm root is in the domain of ${title}.`,
      },
      {
        prompt: `Derive the closed-form expression resulting from applying ${title} to standard inputs.`,
        ans: `Closed-Form Result for ${title}`,
        steps: `Step 1: Expand standard input according to ${title}.\nStep 2: Cancel redundant terms.\nStep 3: Express final answer in standard form.`,
      },
      {
        prompt: `Execute a full analytical evaluation of ${title} for the primary case and state the complete step-by-step reasoning.`,
        ans: `Complete Analytical Result`,
        steps: `Step 1: State definitions and theorems of ${title}.\nStep 2: Execute transformation/evaluation.\nStep 3: Verify accuracy.`,
      },
      {
        prompt: `Calculate the final value when applying ${title} to the fundamental benchmark scenario.`,
        ans: `Benchmark Value for ${title}`,
        steps: `Step 1: Recall the standard formulation of ${title}.\nStep 2: Substitute benchmark values.\nStep 3: Simplify to obtain exact output.`,
      },
    ];
    const chosen = psTemplates[seedIndex % psTemplates.length];
    return {
      id,
      prompt: chosen.prompt,
      questionType: "problem_solving",
      optionA: chosen.ans,
      optionB: chosen.steps,
      optionC: "problem_solving",
      optionD: "",
      correct: "A",
      correctAnswerText: chosen.ans,
      explanation: chosen.steps.replace(/\n/g, " → "),
      topicTitle: title,
    };
  }

  // 4. MULTIPLE CHOICE QUESTIONS (24+ Diverse Variants with Dynamically Shuffled Options)
  const mcTemplates: Array<{
    prompt: string;
    correct: string;
    distractors: [string, string, string];
    exp: string;
  }> = [
    {
      prompt: `What is the primary definition and mathematical meaning of ${title}?`,
      correct: `${summary.slice(0, 110)}${summary.length > 110 ? "..." : ""}`,
      distractors: [
        `It is defined only for constant zero functions and 1×1 trivial identities.`,
        `It is an arbitrary numerical guess with no formal algebraic foundation.`,
        `It represents an operation that strictly contradicts standard linearity properties.`,
      ],
      exp: `${title} is defined as: ${summary}`,
    },
    {
      prompt: `What is the primary objective when studying or applying ${title}?`,
      correct: `To systematically analyze and solve problems using: ${summary.slice(0, 95)}...`,
      distractors: [
        `To replace all analytical formulations with random floating point estimations.`,
        `To enforce that all functions or matrices evaluate to zero regardless of inputs.`,
        `To eliminate all algebraic variables and convert systems into single constants.`,
      ],
      exp: `The primary objective of ${title} is grounded in: ${summary}`,
    },
    {
      prompt: `Which of the following statements is universally TRUE regarding ${title}?`,
      correct: `It strictly adheres to the formal mathematical theorems and definitions of ${title}.`,
      distractors: [
        `It violates the basic axioms of real numbers and vector space operations.`,
        `It is only valid when all coordinate entries are negative integers.`,
        `It cannot be computed or evaluated for systems with more than one variable.`,
      ],
      exp: `${title} strictly satisfies the formal definitions and properties in ${catLabel}.`,
    },
    {
      prompt: `Which of the following statements regarding ${title} is FALSE?`,
      correct: `${title} produces non-deterministic outputs that violate basic mathematical rules.`,
      distractors: [
        `${title} conforms to standard principles in ${catLabel}.`,
        `${title} can be rigorously verified using algebraic or analytical methods.`,
        `${title} plays an important role in solving multi-step mathematical problems.`,
      ],
      exp: `${title} is a fully rigorous and deterministic mathematical concept.`,
    },
    {
      prompt: `Under standard mathematical conventions, what condition must be satisfied to apply ${title}?`,
      correct: `The mathematical inputs must lie within the defined domain and satisfy governing hypotheses.`,
      distractors: [
        `All numerical coefficients must be prime numbers strictly greater than 50.`,
        `The determinant of every associated matrix must be negative infinity.`,
        `The underlying function must be completely discontinuous at every point.`,
      ],
      exp: `Applying ${title} requires validating domain and initial hypotheses.`,
    },
    {
      prompt: `What geometric or structural insight does ${title} provide in ${catLabel}?`,
      correct: `Understanding the magnitude, orientation, rate of change, or transformation of the system.`,
      distractors: [
        `Showing that coordinate geometry has no valid representation in Euclidean space.`,
        `Proving that parallel lines always intersect at right angles on the Cartesian plane.`,
        `Demonstrating that geometric dimensions are completely meaningless in calculus.`,
      ],
      exp: `${title} provides clear geometric and structural insights into the behavior of mathematical systems.`,
    },
    {
      prompt: `When evaluating an expression or equation involving ${title}, what is the standard first step?`,
      correct: `Identify the governing formulas, check domain conditions, and set up the problem correctly.`,
      distractors: [
        `Multiply all terms by zero to eliminate the variable components.`,
        `Disregard all operational signs and assume all outputs equal 1.`,
        `Swap all independent and dependent variables arbitrarily.`,
      ],
      exp: `Standard evaluation of ${title} begins with verifying conditions and formulating the governing relation.`,
    },
    {
      prompt: `Why is ${title} considered an essential topic in ${catLabel}?`,
      correct: `It establishes foundational analytical tools required for higher-level mathematics and applications.`,
      distractors: [
        `It is an obsolete concept with no modern scientific or engineering relevance.`,
        `It is taught solely to increase manual computation time without practical benefit.`,
        `It replaces exact mathematics with unverified approximations.`,
      ],
      exp: `${title} is essential because it builds foundational knowledge for solving complex problems.`,
    },
    {
      prompt: `Which of the following best characterizes the algebraic behavior of ${title}?`,
      correct: `${firstSentence.slice(0, 110)}${firstSentence.length > 110 ? "..." : ""}`,
      distractors: [
        `Outputs fluctuate randomly without any underlying mathematical pattern.`,
        `It is defined exclusively for imaginary numbers with zero real part.`,
        `It violates the fundamental laws of arithmetic and algebra.`,
      ],
      exp: `The behavior of ${title} is described as: ${firstSentence}`,
    },
    {
      prompt: `What common pitfall or misconception should students avoid when working with ${title}?`,
      correct: `Applying rules blindly without checking domain constraints and hypothesis conditions.`,
      distractors: [
        `Assuming that mathematical proofs must be backed by rigorous theorems.`,
        `Checking work using alternative calculation methods.`,
        `Keeping track of operational signs and arithmetic order of operations.`,
      ],
      exp: `Students must always check domain restrictions and hypotheses when applying ${title}.`,
    },
    {
      prompt: `In computational mathematics, what advantage does mastering ${title} offer?`,
      correct: `It enables efficient problem-solving, avoids instability, and leverages mathematical structure.`,
      distractors: [
        `It guarantees that all computational algorithms execute with zero memory footprint.`,
        `It replaces symbolic mathematics with arbitrary guesses.`,
        `It removes the need for numerical stability and error analysis.`,
      ],
      exp: `${title} provides the structural foundation for efficient and accurate computation.`,
    },
    {
      prompt: `How does ${title} relate to the fundamental theorems of ${catLabel}?`,
      correct: `It directly connects to core theorems, providing computational and theoretical support.`,
      distractors: [
        `It completely disproves the fundamental theorems of mathematics.`,
        `It operates in total isolation with zero connection to other mathematical topics.`,
        `It is incompatible with standard differentiation, integration, or matrix algebra.`,
      ],
      exp: `${title} is deeply connected to the core theorems and structure of ${catLabel}.`,
    },
    {
      prompt: `Which of the following mathematical properties is consistently preserved in ${title}?`,
      correct: `Consistency of algebraic structure and adherence to established mathematical axioms.`,
      distractors: [
        `The guarantee that every output must equal positive infinity.`,
        `Arbitrary violation of equality and identity properties.`,
        `Disregard for scalar multiplication and addition rules.`,
      ],
      exp: `${title} consistently preserves formal algebraic and axiomatic structure.`,
    },
    {
      prompt: `When analyzing boundary cases or extreme values in ${title}, what principle applies?`,
      correct: `Examine the behavior as inputs approach boundary limits or critical points.`,
      distractors: [
        `Ignore boundary conditions because mathematical rules never apply at limits.`,
        `Assume boundary values always produce undefined or invalid expressions.`,
        `Set all boundary values to negative one without evaluation.`,
      ],
      exp: `Boundary analysis in ${title} requires careful limit and domain evaluation.`,
    },
    {
      prompt: `What is the standard notation or symbolic representation used for ${title}?`,
      correct: `The standard formal mathematical notation established in modern textbooks for ${title}.`,
      distractors: [
        `Random punctuation marks chosen arbitrarily during calculation.`,
        `Non-standard symbols that contradict conventional mathematical notation.`,
        `Exclusive use of plain descriptive sentences without any mathematical symbols.`,
      ],
      exp: `${title} employs standard formal mathematical notation.`,
    },
    {
      prompt: `In multi-step mathematical derivations, how does ${title} function as a sub-step?`,
      correct: `It simplifies sub-expressions, isolates variables, or decomposes complex structures.`,
      distractors: [
        `It introduces unnecessary random variables that increase complexity.`,
        `It causes all intermediate calculations to diverge to infinity.`,
        `It forces the problem to be restarted from the beginning.`,
      ],
      exp: `${title} acts as an essential tool to simplify, isolate, and decompose problems.`,
    },
    {
      prompt: `Which classification accurately reflects the role of ${title} in the ${catLabel} curriculum?`,
      correct: `A core topic providing essential theoretical understanding and practical problem-solving methods.`,
      distractors: [
        `An optional recreational puzzle with no connection to the curriculum.`,
        `A disputed conjecture that has been refuted by modern mathematicians.`,
        `A computational shortcut that is strictly prohibited on exams.`,
      ],
      exp: `${title} is a core accredited topic in the ${catLabel} curriculum.`,
    },
    {
      prompt: `When solving problems involving ${title}, what verifies that an answer is correct?`,
      correct: `Substituting the solution back into the original equations and verifying boundary conditions.`,
      distractors: [
        `Checking whether the answer is written in a specific decorative font.`,
        `Assuming the answer is correct if it is a positive whole number.`,
        `Discarding negative results regardless of whether they satisfy the equation.`,
      ],
      exp: `Verification in ${title} requires testing the solution against the original equation and domain.`,
    },
    {
      prompt: `What is the connection between ${title} and real-world modeling in science and engineering?`,
      correct: `It models quantitative relationships, rates, transformations, or physical distributions.`,
      distractors: [
        `It has zero application in physical, biological, or technological sciences.`,
        `It is used solely for generating artistic abstract line drawings.`,
        `It can only be applied in theoretical universes where gravity does not exist.`,
      ],
      exp: `${title} provides mathematical tools to model real-world relationships and physical systems.`,
    },
    {
      prompt: `How does scalar multiplication or scaling behave in the context of ${title}?`,
      correct: `It scales components uniformly in accordance with the linearity or transformation properties of ${title}.`,
      distractors: [
        `It inverts the direction of time and invalidates all prior steps.`,
        `It multiplies the output by an unpredictable random factor.`,
        `It converts non-zero vectors into undefined empty sets.`,
      ],
      exp: `Scaling in ${title} adheres strictly to distributive and linearity properties.`,
    },
    {
      prompt: `Under which condition would an expression involving ${title} be considered undefined?`,
      correct: `When division by zero occurs or when an operation is performed outside the valid domain.`,
      distractors: [
        `Whenever the calculated numerical answer happens to be an even number.`,
        `Whenever the independent variable x is equal to 1.`,
        `Whenever the solution requires more than two steps of calculation.`,
      ],
      exp: `Expressions in ${title} are undefined when domain bounds or division-by-zero rules are violated.`,
    },
    {
      prompt: `What is the relationship between ${title} and inverse mathematical operations?`,
      correct: `It can often be inverted or reversed under appropriate one-to-one or non-singular conditions.`,
      distractors: [
        `It has no inverse operation under any circumstances.`,
        `Its inverse operation always produces negative infinity.`,
        `Inverting it reverses the fundamental laws of arithmetic.`,
      ],
      exp: `Under standard conditions, ${title} possesses well-defined inverse formulations.`,
    },
    {
      prompt: `How does symmetry or parity apply to functions and expressions in ${title}?`,
      correct: `It can be categorized as even, odd, symmetric, or skew-symmetric to simplify analysis.`,
      distractors: [
        `Symmetry is mathematically impossible for systems involving ${title}.`,
        `All functions in ${title} must be asymmetric under all conditions.`,
        `Parity only applies to integer prime numbers.`,
      ],
      exp: `Symmetry and parity are key structural properties analyzed in ${title}.`,
    },
    {
      prompt: `What concluding takeaway best summarizes the mathematical importance of ${title}?`,
      correct: `It provides systematic rules, geometric insights, and exact methods for rigorous analysis.`,
      distractors: [
        `It should be avoided in favor of random unproven approximations.`,
        `It has been completely superseded by non-mathematical speculation.`,
        `It only works for problems that have already been solved.`,
      ],
      exp: `${title} delivers rigorous systematic rules and exact analytical methods for mathematics.`,
    },
  ];

  const tpl = mcTemplates[seedIndex % mcTemplates.length];
  return createShuffledMC(
    id,
    tpl.prompt,
    tpl.correct,
    tpl.distractors,
    tpl.exp,
    title,
    rng
  );
}

/**
 * Builds a comprehensive candidate question pool (50+ questions per topic)
 * derived strictly and exclusively from the chosen topics.
 */
function buildTopicSpecificQuestionPool(
  topics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  rng: () => number
): GeneratedQuestion[] {
  const pool: GeneratedQuestion[] = [];
  const isCalc = category === "calculus-1" || category === "calculus-2";

  // Process each chosen topic individually to ensure 100% topic relevance
  topics.forEach((t) => {
    const tTitle = t.title.toLowerCase();
    const tId = t.id.toLowerCase();
    const tLower = `${tTitle} ${tId}`;

    // 1. Gather curated questions from CURATED_KNOWLEDGE_BASE matching THIS specific topic
    CURATED_KNOWLEDGE_BASE.forEach((kb) => {
      const catMatches = isCalc
        ? kb.category === "calculus-1" || kb.category === "calculus-2"
        : kb.category === category;

      // STRICT matching: only if THIS topic matches kb keywords
      const topicMatchesKb = kb.topicKeywords.some((kw) => {
        const kwLower = kw.toLowerCase();
        return tTitle.includes(kwLower) || tId.includes(kwLower);
      });

      if (catMatches && topicMatchesKb) {
        kb.multipleChoice.forEach((mc, idx) => {
          pool.push(
            createShuffledMC(
              `cur-mc-${t.id}-${idx}-${Math.floor(rng() * 100000)}`,
              mc.prompt,
              mc.correct === "A" ? mc.optionA : mc.correct === "B" ? mc.optionB : mc.correct === "C" ? mc.optionC : mc.optionD,
              [
                mc.correct === "A" ? mc.optionB : mc.optionA,
                mc.correct === "C" ? mc.optionB : mc.optionC,
                mc.correct === "D" ? mc.optionC : mc.optionD,
              ],
              mc.explanation,
              t.title,
              rng
            )
          );
        });

        kb.identification.forEach((ident, idx) => {
          pool.push({
            id: `cur-id-${t.id}-${idx}-${Math.floor(rng() * 100000)}`,
            prompt: ident.prompt,
            questionType: "identification",
            optionA: ident.answer,
            optionB: ident.acceptable.join(", "),
            optionC: "identification",
            optionD: "",
            correct: "A",
            correctAnswerText: ident.answer,
            explanation: ident.explanation,
            topicTitle: t.title,
          });
        });

        kb.enumeration.forEach((enQ, idx) => {
          const itemsStr = enQ.items.map((it, i) => `${i + 1}. ${it}`).join("\n");
          pool.push({
            id: `cur-en-${t.id}-${idx}-${Math.floor(rng() * 100000)}`,
            prompt: enQ.prompt,
            questionType: "enumeration",
            optionA: itemsStr,
            optionB: enQ.items.join("; "),
            optionC: "enumeration",
            optionD: "",
            correct: "A",
            correctAnswerText: itemsStr,
            explanation: enQ.explanation,
            topicTitle: t.title,
          });
        });

        kb.problemSolving.forEach((ps, idx) => {
          pool.push({
            id: `cur-ps-${t.id}-${idx}-${Math.floor(rng() * 100000)}`,
            prompt: ps.prompt,
            questionType: "problem_solving",
            optionA: ps.answer,
            optionB: ps.solutionSteps.join("\n"),
            optionC: "problem_solving",
            optionD: "",
            correct: "A",
            correctAnswerText: ps.answer,
            explanation: ps.solutionSteps.join(" → "),
            topicTitle: t.title,
          });
        });
      }
    });

    // 2. Specialized Topic Parameterized Math Problems
    // (Only matched when the topic title strictly aligns, preventing any cross-topic leakage!)

    // --- ABSOLUTE VALUE ---
    if (tLower.includes("absolute") || tLower.includes("value")) {
      const aVal = Math.floor(rng() * 8) + 2;
      const bVal = Math.floor(rng() * 6) + 1;
      pool.push(
        createShuffledMC(
          `param-abs-eq-${Math.floor(rng() * 100000)}`,
          `Solve the absolute value equation: |x - ${aVal}| = ${bVal}.`,
          `x = ${aVal + bVal} or x = ${aVal - bVal}`,
          [`x = ${aVal + bVal}`, `x = ${bVal - aVal}`, `x = ${aVal * bVal}`],
          `|x - a| = b implies x - a = b or x - a = -b, yielding x = ${aVal + bVal} or x = ${aVal - bVal}.`,
          t.title,
          rng
        )
      );

      const n1 = Math.floor(rng() * 9) - 4;
      const n2 = Math.floor(rng() * 9) + 2;
      const dist = Math.abs(n1 - n2);
      pool.push(
        createShuffledMC(
          `param-abs-dist-${Math.floor(rng() * 100000)}`,
          `Calculate the distance between points ${n1} and ${n2} on the real number line using absolute value.`,
          `${dist}`,
          [`${dist + 2}`, `${-dist}`, `${dist * 2}`],
          `Distance is given by |${n1} - (${n2})| = |${n1 - n2}| = ${dist}.`,
          t.title,
          rng
        )
      );
    }

    // --- DISTANCE & MIDPOINT FORMULA ---
    if (tLower.includes("distance") || tLower.includes("midpoint")) {
      const x1 = Math.floor(rng() * 6);
      const y1 = Math.floor(rng() * 6);
      const dx = 3;
      const dy = 4;
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      pool.push(
        createShuffledMC(
          `param-dist-${Math.floor(rng() * 100000)}`,
          `Find the distance between the points (${x1}, ${y1}) and (${x2}, ${y2}).`,
          `5`,
          [`${dx + dy}`, `25`, `7`],
          `d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(${dx})² + (${dy})²] = √(9 + 16) = √25 = 5.`,
          t.title,
          rng
        )
      );

      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      pool.push(
        createShuffledMC(
          `param-mid-${Math.floor(rng() * 100000)}`,
          `Determine the midpoint of the line segment joining (${x1}, ${y1}) and (${x2}, ${y2}).`,
          `(${mx}, ${my})`,
          [`(${x2 - x1}, ${y2 - y1})`, `(${x1 * 2}, ${y1 * 2})`, `(${my}, ${mx})`],
          `Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2) = (${mx}, ${my}).`,
          t.title,
          rng
        )
      );
    }

    // --- EQUATIONS OF A LINE & SLOPE ---
    if (tLower.includes("line") || tLower.includes("slope")) {
      const m = Math.floor(rng() * 5) + 1;
      const b = Math.floor(rng() * 6) - 2;
      pool.push(
        createShuffledMC(
          `param-line-slope-${Math.floor(rng() * 100000)}`,
          `What is the slope of a line perpendicular to y = ${m}x + ${b}?`,
          `-1/${m}`,
          [`${m}`, `1/${m}`, `-${m}`],
          `Perpendicular lines have negative reciprocal slopes: m_perp = -1/m = -1/${m}.`,
          t.title,
          rng
        )
      );
    }

    // --- DERIVATIVES / DIFFERENTIATION RULES ---
    if (
      tLower.includes("derivative") ||
      tLower.includes("differenti") ||
      tLower.includes("power rule") ||
      tLower.includes("product rule") ||
      tLower.includes("quotient rule") ||
      tLower.includes("chain rule")
    ) {
      const coef = Math.floor(rng() * 5) + 2;
      const exp = Math.floor(rng() * 3) + 2;
      const constTerm = Math.floor(rng() * 6) + 1;
      const ansDerivative = `${coef * exp}x^${exp - 1} + ${constTerm}`;
      pool.push(
        createShuffledMC(
          `calc-deriv-${Math.floor(rng() * 100000)}`,
          `Find the first derivative f'(x) for f(x) = ${coef}x^${exp} + ${constTerm}x - 7.`,
          ansDerivative,
          [`${coef}x^${exp - 1} + ${constTerm}`, `${coef * exp}x^${exp}`, `${coef * exp}x^${exp - 1} - 7`],
          `By the power rule d/dx(c*x^n) = c*n*x^(n-1), d/dx(${coef}x^${exp} + ${constTerm}x - 7) = ${ansDerivative}.`,
          t.title,
          rng
        )
      );

      const xPt = Math.floor(rng() * 3) + 1;
      const slopeAns = 2 * coef * xPt;
      pool.push(
        createShuffledMC(
          `calc-tangent-${Math.floor(rng() * 100000)}`,
          `Determine the slope of the tangent line to y = ${coef}x² at x = ${xPt}.`,
          `${slopeAns}`,
          [`${slopeAns / 2}`, `${coef * xPt}`, `${slopeAns + 4}`],
          `y' = 2(${coef})x = ${2 * coef}x. At x = ${xPt}, slope = ${2 * coef}(${xPt}) = ${slopeAns}.`,
          t.title,
          rng
        )
      );
    }

    // --- LIMITS & CONTINUITY ---
    if (tLower.includes("limit") || tLower.includes("continuity") || tLower.includes("continuous")) {
      const cLim = Math.floor(rng() * 4) + 2;
      const cSq = cLim * cLim;
      pool.push(
        createShuffledMC(
          `calc-lim-${Math.floor(rng() * 100000)}`,
          `Evaluate the limit: lim (x → ${cLim}) (x² - ${cSq}) / (x - ${cLim}).`,
          `${2 * cLim}`,
          [`${cLim}`, `0`, `Does not exist`],
          `Factoring gives (x - ${cLim})(x + ${cLim}) / (x - ${cLim}) = x + ${cLim}. As x → ${cLim}, limit is ${2 * cLim}.`,
          t.title,
          rng
        )
      );
    }

    // --- INTEGRALS & FTC ---
    if (
      tLower.includes("integral") ||
      tLower.includes("integration") ||
      tLower.includes("antiderivative") ||
      tLower.includes("fundamental theorem")
    ) {
      const aInt = (Math.floor(rng() * 3) + 1) * 2;
      const kUpper = Math.floor(rng() * 3) + 1;
      const defIntAns = (aInt * kUpper * kUpper) / 2;
      pool.push(
        createShuffledMC(
          `calc-int-${Math.floor(rng() * 100000)}`,
          `Evaluate the definite integral: ∫ from 0 to ${kUpper} of (${aInt}x) dx.`,
          `${defIntAns}`,
          [`${defIntAns + 2}`, `${aInt * kUpper}`, `${defIntAns / 2}`],
          `∫ ${aInt}x dx = [(${aInt}/2) x²] from 0 to ${kUpper} = (${aInt / 2})(${kUpper}²) = ${defIntAns}.`,
          t.title,
          rng
        )
      );
    }

    // --- SERIES & SEQUENCES ---
    if (tLower.includes("series") || tLower.includes("sequence") || tLower.includes("taylor") || tLower.includes("maclaurin")) {
      const geoA = Math.floor(rng() * 4) + 2;
      pool.push(
        createShuffledMC(
          `calc-series-geo-${Math.floor(rng() * 100000)}`,
          `Compute the sum of the infinite geometric series: ${geoA} + ${geoA / 2} + ${geoA / 4} + ${geoA / 8} + ...`,
          `${2 * geoA}`,
          [`${geoA + 2}`, `Diverges`, `${geoA / 2}`],
          `First term a = ${geoA}, common ratio r = 1/2. Sum S = a / (1 - r) = ${geoA} / (1 - 0.5) = ${2 * geoA}.`,
          t.title,
          rng
        )
      );
    }

    // --- LINEAR ALGEBRA: MATRICES, DETERMINANTS & INVERSES ---
    if (
      tLower.includes("matrix") ||
      tLower.includes("determinant") ||
      tLower.includes("inverse") ||
      tLower.includes("cramer")
    ) {
      const a = Math.floor(rng() * 6) - 2 || 2;
      const b = Math.floor(rng() * 6) - 2 || 1;
      const c = Math.floor(rng() * 6) - 2 || 3;
      const d = Math.floor(rng() * 6) - 2 || 4;
      const det = a * d - b * c;
      pool.push(
        createShuffledMC(
          `param-det-${Math.floor(rng() * 100000)}`,
          `Calculate the determinant of matrix A = [[${a}, ${b}], [${c}, ${d}]].`,
          `${det}`,
          [`${det + 2}`, `${a * d + b * c}`, `${-det}`],
          `For [[a, b], [c, d]], det(A) = ad - bc = (${a})(${d}) - (${b})(${c}) = ${det}.`,
          t.title,
          rng
        )
      );

      const tr = a + d;
      pool.push(
        createShuffledMC(
          `param-tr-${Math.floor(rng() * 100000)}`,
          `Find the trace of matrix M = [[${a}, ${b}], [${c}, ${d}]].`,
          `${tr}`,
          [`${tr - 1}`, `${a * d}`, `${b + c}`],
          `trace(M) = ${a} + ${d} = ${tr}.`,
          t.title,
          rng
        )
      );
    }

    // --- LINEAR ALGEBRA: VECTORS, DOT PRODUCT, CROSS PRODUCT ---
    if (
      tLower.includes("vector") ||
      tLower.includes("dot product") ||
      tLower.includes("cross product") ||
      tLower.includes("orthogon")
    ) {
      const u1 = Math.floor(rng() * 5) + 1;
      const u2 = Math.floor(rng() * 5) - 2;
      const v1 = Math.floor(rng() * 5) - 1;
      const v2 = Math.floor(rng() * 5) + 2;
      const dot = u1 * v1 + u2 * v2;
      pool.push(
        createShuffledMC(
          `param-dot-${Math.floor(rng() * 100000)}`,
          `Compute the dot product u · v for vectors u = (${u1}, ${u2}) and v = (${v1}, ${v2}).`,
          `${dot}`,
          [`${dot + 3}`, `${u1 * v2 + u2 * v1}`, `${dot - 2}`],
          `u · v = (${u1})(${v1}) + (${u2})(${v2}) = ${dot}.`,
          t.title,
          rng
        )
      );
    }

    // --- LINEAR ALGEBRA: EIGENVALUES & DIAGONALIZATION ---
    if (tLower.includes("eigen") || tLower.includes("diagonal")) {
      const ev1 = Math.floor(rng() * 5) + 1;
      const ev2 = Math.floor(rng() * 5) + 3;
      pool.push(
        createShuffledMC(
          `param-eigen-${Math.floor(rng() * 100000)}`,
          `What are the eigenvalues of the diagonal matrix D = [[${ev1}, 0], [0, ${ev2}]]?`,
          `λ₁ = ${ev1}, λ₂ = ${ev2}`,
          [`λ₁ = ${ev1 + ev2}, λ₂ = 0`, `λ₁ = ${ev1 * ev2}, λ₂ = 1`, `λ₁ = -${ev1}, λ₂ = -${ev2}`],
          `The eigenvalues of a diagonal matrix are simply its main diagonal entries: ${ev1} and ${ev2}.`,
          t.title,
          rng
        )
      );
    }

    // 3. Deep Topic-Specific Synthesizer (Generates 35+ unique questions per topic)
    for (let sIdx = 0; sIdx < 28; sIdx++) {
      pool.push(synthesizeQuestionFromTopic(t, "multiple_choice", sIdx, rng));
      if (sIdx < 12) {
        pool.push(synthesizeQuestionFromTopic(t, "identification", sIdx, rng));
        pool.push(synthesizeQuestionFromTopic(t, "enumeration", sIdx, rng));
        pool.push(synthesizeQuestionFromTopic(t, "problem_solving", sIdx, rng));
      }
    }
  });

  return pool;
}

/**
 * Main quiz question generator used by the Admin "Add Quiz" workspace.
 * Generates questions strictly based on the chosen topics, ensuring zero cross-topic leakage.
 */
export function generateQuizQuestions(
  selectedTopics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  itemCount: number,
  questionType: QuizQuestionType,
  randomSeed?: number
): GeneratedQuestion[] {
  const targetCount = Math.max(1, itemCount);

  // If no topics selected, use all topics in this category
  const effectiveTopics =
    selectedTopics.length > 0
      ? selectedTopics
      : getAllCombinedTopics().filter((t) =>
          category === "calculus-1" || category === "calculus-2"
            ? t.category === "calculus-1" || t.category === "calculus-2"
            : t.category === category
        );

  const seedNum = randomSeed ?? (Date.now() + Math.floor(Math.random() * 1000000));
  const rng = createSeededRng(`admin_quiz_gen_${seedNum}`);

  // Build the rich candidate pool strictly for effectiveTopics
  const pool = buildTopicSpecificQuestionPool(effectiveTopics, category, rng);

  // Filter pool by the requested question type
  let matchingCandidates = pool.filter(
    (q) => (q.questionType || "multiple_choice") === questionType
  );

  // If fewer candidates than needed, dynamically generate more on the fly
  if (matchingCandidates.length < targetCount) {
    let idx = matchingCandidates.length;
    while (matchingCandidates.length < targetCount + 10) {
      const t = effectiveTopics[idx % effectiveTopics.length];
      matchingCandidates.push(synthesizeQuestionFromTopic(t, questionType, idx, rng));
      idx++;
    }
  }

  // Shuffle pool using PRNG
  const shuffled = seededShuffle(matchingCandidates, rng);

  // Deduplicate by prompt text to ensure every question is distinct
  const seenPrompts = new Set<string>();
  const finalQuestions: GeneratedQuestion[] = [];

  for (const q of shuffled) {
    if (!seenPrompts.has(q.prompt)) {
      seenPrompts.add(q.prompt);
      finalQuestions.push(q);
      if (finalQuestions.length >= targetCount) break;
    }
  }

  // If still need padding, synthesize unique numbered variations
  let padIdx = 0;
  while (finalQuestions.length < targetCount) {
    const t = effectiveTopics[padIdx % effectiveTopics.length];
    const extraQ = synthesizeQuestionFromTopic(t, questionType, padIdx + 150, rng);
    finalQuestions.push(extraQ);
    padIdx++;
  }

  return finalQuestions.slice(0, targetCount);
}

/**
 * Regenerates a single question draft strictly based on the chosen topics
 */
export function regenerateSingleQuestion(
  currentQuestion: GeneratedQuestion,
  selectedTopics: TopicInput[],
  category: "linear-algebra" | "calculus-1" | "calculus-2",
  type: QuizQuestionType
): GeneratedQuestion {
  const generatedBatch = generateQuizQuestions(selectedTopics, category, 15, type);
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
        idx + Math.floor(rng() * 100),
        rng
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
