const topic = {
  id: "rational-functions",
  title: "Rational Functions",
  summary:
    "Definition of rational functions, domain restrictions, zeros, vertical and horizontal asymptotes, holes, graphing, and transformations.",
  details: `
A rational function is a function that can be written as the ratio of two polynomial functions:

  f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials and Q(x) ≠ 0.

The denominator can never equal zero because division by zero is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLES OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • f(x) = (x + 2)/(x - 3)
  • f(x) = (x² - 4)/(x + 2)
  • f(x) = (2x² + 3x - 1)/(x² - 9)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IMPORTANT PARTS OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x + 1)/(x - 2)

  • Numerator: x + 1
  • Denominator: x - 2
  • Domain restriction: x ≠ 2
  • Vertical asymptote: x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain of a rational function consists of all real numbers except values that make the denominator equal to zero.

For: f(x) = (x + 1)/(x - 2)

Set the denominator equal to zero:

  x - 2 = 0
  x = 2

Therefore: Domain = (-∞, 2) ∪ (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ZEROS OR X-INTERCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the zeros of a rational function, set the numerator equal to zero, provided the denominator is not also zero.

For: f(x) = (x + 1)/(x - 2)

Set: x + 1 = 0

Therefore: x = -1

So the x-intercept is: (-1, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote occurs when the denominator becomes zero and the factor does not cancel.

For: f(x) = (x + 1)/(x - 2)

the denominator is zero at: x = 2

Therefore: x = 2 is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The horizontal asymptote can often be determined by comparing the degrees of the numerator and denominator.

Case 1: Numerator degree < denominator degree
  f(x) = (x + 1)/(x² + 1)
  The horizontal asymptote is: y = 0

Case 2: Same degree
  f(x) = (2x² + 3)/(x² + 1)
  Divide the leading coefficients: y = 2/1 = 2
  Therefore: y = 2

Case 3: Numerator degree > denominator degree
  There may be a slant/oblique asymptote or another polynomial asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SLANT/OBLIQUE ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the degree of the numerator is exactly one more than the degree of the denominator, the rational function has a slant asymptote.

Example: f(x) = (x² + 1)/(x - 1)

Polynomial division gives:
  f(x) = x + 1 + 2/(x - 1)

Therefore, the slant asymptote is: y = x + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A hole occurs when a common factor in the numerator and denominator cancels.

Consider: f(x) = (x² - 4)/(x - 2)

Factor the numerator:
  f(x) = (x - 2)(x + 2)/(x - 2)

Cancel: f(x) = x + 2

However, x = 2 was excluded from the original function.

Therefore, the graph has a hole at: (2, 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. Y-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the y-intercept, set x = 0 and evaluate.

For: f(x) = (x + 1)/(x - 2)

  f(0) = (0 + 1)/(0 - 2) = -1/2

Therefore, the y-intercept is: (0, -1/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GRAPH OF A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A basic rational function is: f(x) = 1/x

Its graph has two important asymptotes: x = 0 and y = 0

The graph approaches these lines but does not cross them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTION TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function can be transformed similarly to other functions.

The basic form is: f(x) = 1/x

A more general form is: f(x) = a/(x - h) + k

where:
  • a controls stretching/reflection
  • h shifts the graph horizontally
  • k shifts the graph vertically
  • x = h is the vertical asymptote
  • y = k is the horizontal asymptote

Example: f(x) = 2/(x - 3) + 1

has:
  • x = 3 as its vertical asymptote
  • y = 1 as its horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. OPERATIONS WITH RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiplication
───────────────

  f(x) = (x + 1)/(x - 2) · (x - 2)/(x + 3) = (x + 1)/(x + 3)

Division
─────────

  f(x) = (x + 1)/(x - 2) ÷ (x - 2)/(x + 3) = (x + 1)/(x - 2) · (x + 3)/(x - 2)

Addition
─────────

  f(x) = (x + 1)/(x - 2) + (x - 2)/(x + 3)

Find common denominator and simplify.

Subtraction
────────────

  f(x) = (x + 1)/(x - 2) - (x - 2)/(x + 3)

Find common denominator and simplify.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SOLVING RATIONAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To solve rational equations, multiply both sides by the common denominator.

Example: (x + 1)/(x - 2) = 3

Multiply both sides by (x - 2):

  x + 1 = 3(x - 2)
  x + 1 = 3x - 6
  1 + 6 = 3x - x
  7 = 2x
  x = 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. RATIONAL FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rational functions are important in Calculus for understanding limits, derivatives, and integrals.

Limits at Vertical Asymptotes:
  • As x approaches a vertical asymptote, the function tends toward ±∞

Limits at Horizontal Asymptotes:
  • As x → ±∞, the function approaches the horizontal asymptote

Derivatives:
  Rational functions can be differentiated using the quotient rule.

  f'(x) = [P'(x)Q(x) - P(x)Q'(x)]/[Q(x)]²

Integrals:
  Rational functions can be integrated using partial fraction decomposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Rational Functions, remember:

  • The denominator cannot be zero.
  • Vertical asymptotes occur where the denominator is zero (and not canceled).
  • Holes occur when factors cancel.
  • Horizontal asymptotes depend on the degrees of numerator and denominator.
  • Slant asymptotes occur when numerator degree is one more than denominator.

The key idea to remember is:

  A rational function is a ratio of two polynomials. The denominator determines important restrictions, while factoring, zeros, holes, and asymptotes help us understand its graph and behavior. Understanding rational functions is essential for Calculus, especially when studying limits, derivatives, and integrals involving rational expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rational Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Definition of Rational Functions
  ✓ Domain Restrictions
  ✓ Zeros and X-Intercepts
  ✓ Y-Intercepts
  ✓ Vertical Asymptotes
  ✓ Horizontal Asymptotes
  ✓ Slant Asymptotes
  ✓ Holes
  ✓ Graphing Rational Functions
  ✓ Transformations
  ✓ Operations (Multiply, Divide, Add, Subtract)
  ✓ Solving Rational Equations
  ✓ Rational Functions in Calculus
  `,
  examples: [
    "Find domain of f(x) = (x + 1)/(x - 2) → (-∞, 2) ∪ (2, ∞)",
    "Find zeros of f(x) = (x + 1)/(x - 2) → x = -1",
    "Find vertical asymptote of f(x) = (x + 1)/(x - 2) → x = 2",
    "Find horizontal asymptote of f(x) = (x + 1)/(x² + 1) → y = 0",
    "Find horizontal asymptote of f(x) = (2x² + 3)/(x² + 1) → y = 2",
    "Find slant asymptote of f(x) = (x² + 1)/(x - 1) → y = x + 1",
    "Find hole in f(x) = (x² - 4)/(x - 2) → (2, 4)",
    "Find y-intercept of f(x) = (x + 1)/(x - 2) → (0, -1/2)",
    "Transform f(x) = 1/x to f(x) = 2/(x - 3) + 1 → vertical asymptote x=3, horizontal asymptote y=1",
    "Multiply rational functions: (x+1)/(x-2) · (x-2)/(x+3) → (x+1)/(x+3)",
    "Solve: (x + 1)/(x - 2) = 3 → x = 7/2",
    "Use quotient rule to differentiate rational function",
  ],
};

export default topic;