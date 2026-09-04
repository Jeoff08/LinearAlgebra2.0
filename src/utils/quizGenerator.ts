// filename: src/utils/quizGenerator.ts

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

// Fallback question synthesizer that uses raw topic details/summary
function synthesizeQuestionFromTopic(
  topic: TopicInput,
  type: QuizQuestionType,
  seedIndex: number
): GeneratedQuestion {
  const id = `gen-${Date.now()}-${seedIndex}-${Math.random().toString(36).slice(2, 7)}`;
  const title = topic.title || "Mathematics Topic";
  const summary = topic.summary || "Explore fundamental properties and principles.";
  const details = topic.details || "";

  // Extract any short sentence or bullet points from details if available
  const cleanDetails = details.replace(/━+/g, "").replace(/\n+/g, " ").trim();
  const firstSentence = cleanDetails.slice(0, 180).trim() || summary;

  if (type === "identification") {
    return {
      id,
      prompt: `Identify the mathematical concept or rule described:\n"${summary}"`,
      questionType: "identification",
      optionA: title,
      optionB: "Topic Definition",
      optionC: "identification",
      optionD: "",
      correct: "A",
      correctAnswerText: title,
      explanation: `The concept described is ${title}. ${summary}`,
      topicTitle: title,
    };
  }

  if (type === "enumeration") {
    return {
      id,
      prompt: `Enumerate the key properties, theorems, or components associated with ${title}.`,
      questionType: "enumeration",
      optionA: `Key properties of ${title}: 1. Definition and Conditions, 2. Standard Formula, 3. Practical Applications`,
      optionB: "Enumeration items",
      optionC: "enumeration",
      optionD: "",
      correct: "A",
      correctAnswerText: `1. Formal Definition, 2. Mathematical Properties, 3. Solution Methods for ${title}`,
      explanation: `Mastery of ${title} requires understanding its definition, core properties, and computational techniques.`,
      topicTitle: title,
    };
  }

  if (type === "problem_solving") {
    const examples = topic.examples ?? [];
    const exampleSnippet =
      examples.length > 0 ? examples[seedIndex % examples.length] : "";

    return {
      id,
      prompt: exampleSnippet
        ? `Solve the following problem regarding ${title}:\n${exampleSnippet}`
        : `Solve the fundamental standard problem for ${title}: analyze the given system/function and compute its key value or simplified form.`,
      questionType: "problem_solving",
      optionA: `Solution to ${title}`,
      optionB: "Step 1: Set up the formula. Step 2: Perform calculations. Step 3: Simplify.",
      optionC: "problem_solving",
      optionD: "",
      correct: "A",
      correctAnswerText: `Standard Solved Value for ${title}`,
      explanation: `To solve problems in ${title}, apply the standard theorems and step-by-step analytical methods.`,
      topicTitle: title,
    };
  }

  // Default: Multiple Choice
  return {
    id,
    prompt: `Which of the following statements is TRUE regarding ${title}?`,
    questionType: "multiple_choice",
    optionA: `${summary.slice(0, 80)}...`,
    optionB: `It is completely unrelated to ${title} and has no applications.`,
    optionC: `It only applies to 1×1 matrices or constant zero functions.`,
    optionD: `Its definition violates the fundamental axioms of mathematics.`,
    correct: "A",
    correctAnswerText: `${summary.slice(0, 80)}...`,
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
  const matchingCurated: CuratedTopicQuestions[] = [];
  CURATED_KNOWLEDGE_BASE.forEach((kb) => {
    if (kb.category === category) {
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
    CURATED_KNOWLEDGE_BASE.filter((kb) => kb.category === category).forEach((kb) => {
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
