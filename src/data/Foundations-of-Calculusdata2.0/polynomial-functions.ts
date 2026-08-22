const topic = {
  id: "polynomial-functions",
  title: "Polynomial Functions",
  summary:
    "Definition of polynomial functions, degree, leading coefficient, types of polynomials, zeros, graphs, end behavior, and operations.",
  details: `
A polynomial function is a function made up of terms containing constants and non-negative integer powers of a variable. The general form is:

  f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

where aₙ, aₙ₋₁, ..., a₀ are constants and n is a non-negative integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLES OF POLYNOMIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

f(x) = 3x² + 2x - 5

This is a quadratic polynomial because its highest exponent is 2.

f(x) = 2x³ - 4x² + x + 7

This is a cubic polynomial because its highest exponent is 3.

f(x) = 5x⁴ - 3x² + 8

This is a quartic polynomial because its highest exponent is 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IMPORTANT PARTS OF A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4x³ - 2x² + 7x - 9

  • Degree: 3
  • Leading coefficient: 4
  • Leading term: 4x³
  • Constant term: -9
  • Terms: 4x³, -2x², 7x, -9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TYPES OF POLYNOMIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Degree: 0, Name: Constant, Example: f(x) = 5
Degree: 1, Name: Linear, Example: f(x) = 2x + 3
Degree: 2, Name: Quadratic, Example: f(x) = x² - 4x + 3
Degree: 3, Name: Cubic, Example: f(x) = x³ + 2x - 1
Degree: 4, Name: Quartic, Example: f(x) = x⁴ - 3x² + 1
Degree: 5, Name: Quintic, Example: f(x) = x⁵ + x - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN AND RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For every polynomial function, Domain = (-∞, ∞) because polynomial functions are defined for every real value of x.

The range, however, depends on the polynomial.

Example: f(x) = x² has a range of [0, ∞)

Example: f(x) = x³ has a range of (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ZEROS OR ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A zero or root is an x-value where: f(x) = 0

Example: f(x) = x² - 5x + 6

Factor: (x - 2)(x - 3) = 0

Therefore: x = 2, x = 3

These are the roots of the polynomial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GRAPH OF A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polynomial functions produce smooth, continuous graphs without breaks, holes, or vertical asymptotes.

Example: f(x) = x³ - 3x

The graph's overall behavior depends heavily on the degree and leading coefficient.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an even-degree polynomial, both ends generally move in the same direction.

For an odd-degree polynomial, the ends generally move in opposite directions.

The leading coefficient determines whether the graph points upward or downward.

Even Degree (Leading Coefficient Positive):
  • As x → -∞, f(x) → +∞
  • As x → +∞, f(x) → +∞

Even Degree (Leading Coefficient Negative):
  • As x → -∞, f(x) → -∞
  • As x → +∞, f(x) → -∞

Odd Degree (Leading Coefficient Positive):
  • As x → -∞, f(x) → -∞
  • As x → +∞, f(x) → +∞

Odd Degree (Leading Coefficient Negative):
  • As x → -∞, f(x) → +∞
  • As x → +∞, f(x) → -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POLYNOMIAL OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should also know how to perform:

  • Addition of polynomials
  • Subtraction of polynomials
  • Multiplication of polynomials
  • Division of polynomials
  • Factoring
  • Finding zeros
  • Evaluating polynomial functions
  • Using the Remainder Theorem
  • Using the Factor Theorem
  • Finding polynomial behavior from its graph

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: EVALUATING A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given: f(x) = 2x³ - 3x + 4

Find f(2):

  f(2) = 2(2)³ - 3(2) + 4
  f(2) = 16 - 6 + 4
  f(2) = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ADDITION AND SUBTRACTION OF POLYNOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To add or subtract polynomials, combine like terms.

Example: (3x² + 2x - 5) + (x² - 4x + 1)

  = (3x² + x²) + (2x - 4x) + (-5 + 1)
  = 4x² - 2x - 4

Example: (3x² + 2x - 5) - (x² - 4x + 1)

  = 3x² + 2x - 5 - x² + 4x - 1
  = (3x² - x²) + (2x + 4x) + (-5 - 1)
  = 2x² + 6x - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. MULTIPLICATION OF POLYNOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To multiply polynomials, distribute each term of the first polynomial to every term of the second.

Example: (2x + 3)(x - 4)

  = 2x(x - 4) + 3(x - 4)
  = 2x² - 8x + 3x - 12
  = 2x² - 5x - 12

Example: (x + 2)(x² - 3x + 1)

  = x(x² - 3x + 1) + 2(x² - 3x + 1)
  = x³ - 3x² + x + 2x² - 6x + 2
  = x³ - x² - 5x + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FACTORING POLYNOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Factoring is the process of rewriting a polynomial as a product of simpler polynomials.

Example: x² - 5x + 6 = (x - 2)(x - 3)

Example: 2x² + 5x - 3 = (2x - 1)(x + 3)

Example: x³ - 8 = (x - 2)(x² + 2x + 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. REMAINDER THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Remainder Theorem states that if a polynomial f(x) is divided by (x - c), the remainder is f(c).

Example: For f(x) = x³ - 2x² + x - 5, find f(3)

  f(3) = 27 - 18 + 3 - 5 = 7

The remainder when f(x) is divided by (x - 3) is 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FACTOR THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Factor Theorem states that (x - c) is a factor of f(x) if and only if f(c) = 0.

Example: For f(x) = x³ - 4x² + x + 6

  f(2) = 8 - 16 + 2 + 6 = 0

Therefore, (x - 2) is a factor of f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. POLYNOMIALS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polynomials are fundamental in Calculus because they are easy to differentiate and integrate.

Derivative of a polynomial:
  f(x) = 3x⁴ - 2x³ + x - 5
  f'(x) = 12x³ - 6x² + 1

Integral of a polynomial:
  ∫(3x² - 4x + 1) dx = x³ - 2x² + x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Polynomial Functions, remember:

  • A polynomial has non-negative integer exponents only.
  • The degree determines the shape and behavior of the graph.
  • The leading coefficient affects the end behavior.
  • Polynomials are continuous and smooth everywhere.
  • Zeros can be found by factoring or using the quadratic formula.

The key idea to remember is:

  Polynomial functions are functions consisting of terms with variables raised only to non-negative integer powers. Their degree, coefficients, roots, and leading term determine many important properties of their graphs and behavior. Understanding polynomial functions is essential for Calculus because they are the building blocks for more complex functions and are frequently differentiated and integrated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polynomial Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Definition of Polynomial Functions
  ✓ Important Parts of a Polynomial
  ✓ Types of Polynomial Functions
  ✓ Domain and Range
  ✓ Zeros or Roots
  ✓ Graphs of Polynomial Functions
  ✓ End Behavior
  ✓ Addition and Subtraction
  ✓ Multiplication
  ✓ Factoring
  ✓ Remainder Theorem
  ✓ Factor Theorem
  ✓ Polynomials in Calculus
  `,
  examples: [
    "Identify degree and leading coefficient of f(x) = 4x³ - 2x² + 7x - 9 → degree 3, leading coefficient 4",
    "Identify type: f(x) = 3x² + 2x - 5 → quadratic",
    "Identify type: f(x) = 2x³ - 4x² + x + 7 → cubic",
    "Find zeros of f(x) = x² - 5x + 6 → x = 2, 3",
    "Find f(2) for f(x) = 2x³ - 3x + 4 → f(2) = 14",
    "Add polynomials: (3x² + 2x - 5) + (x² - 4x + 1) → 4x² - 2x - 4",
    "Subtract polynomials: (3x² + 2x - 5) - (x² - 4x + 1) → 2x² + 6x - 6",
    "Multiply: (2x + 3)(x - 4) → 2x² - 5x - 12",
    "Factor: x² - 5x + 6 → (x - 2)(x - 3)",
    "Use Remainder Theorem: f(3) for f(x) = x³ - 2x² + x - 5 → 7",
    "Use Factor Theorem: Check if (x - 2) is a factor of f(x) = x³ - 4x² + x + 6 → yes",
    "Find derivative: f(x) = 3x⁴ - 2x³ + x - 5 → f'(x) = 12x³ - 6x² + 1",
    "Find integral: ∫(3x² - 4x + 1) dx → x³ - 2x² + x + C",
    "Identify end behavior: f(x) = 2x⁴ + 3x² - 1 → both ends point up",
  ],
};

export default topic;