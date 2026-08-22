const topic = {
  id: "logarithmic-functions",
  title: "Logarithmic Functions",
  summary:
    "Definition of logarithmic functions, common and natural logarithms, domain and range, properties, solving equations, and applications.",
  details: `
A logarithmic function is the inverse of an exponential function. It tells us what exponent is needed to produce a certain number.

The general form is:

  f(x) = log_b(x)

where:
  • b > 0
  • b ≠ 1
  • x > 0
  • b is the base

The logarithmic equation y = log_b(x) is equivalent to the exponential equation:

  b^y = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLES OF LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

log₂(8) = 3 because 2³ = 8

log₅(25) = 2 because 5² = 25

log₁₀(1000) = 3 because 10³ = 1000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COMMON LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithm with base 10 is called a common logarithm:

  log(x) = log₁₀(x)

Example: log(100) = 2 because 10² = 100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. NATURAL LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithm with base e is called the natural logarithm:

  ln(x) = log_e(x)

where e ≈ 2.71828

Example: ln(e) = 1 because e¹ = e

Natural logarithms are especially important in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The argument of a logarithm must be positive.

For: f(x) = log₂(x)

the domain is: (0, ∞)

You cannot take the logarithm of zero or a negative real number.

  • log₂(0) is undefined
  • log₂(-4) is not defined as a real number

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The range of a basic logarithmic function is: (-∞, ∞)

This means that the output y can be any real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GRAPH OF A LOGARITHMIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = log₂(x)

The graph has a vertical asymptote at: x = 0

The function approaches x = 0 but never reaches it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RELATIONSHIP BETWEEN EXPONENTIAL AND LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential and logarithmic functions are inverses.

Example: y = 2ˣ has inverse: y = log₂(x)

This means: 2ˣ = y is equivalent to: x = log₂(y)

Important relationship:
  bˣ = y ⟺ log_b(y) = x

This is one of the most important relationships to understand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT LOGARITHM PROPERTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product Rule
─────────────

  log_b(MN) = log_b(M) + log_b(N)

Example: log₂(4·8) = log₂(4) + log₂(8)

Quotient Rule
──────────────

  log_b(M/N) = log_b(M) - log_b(N)

Power Rule
───────────

  log_b(Mᵖ) = p·log_b(M)

Example: log₂(x³) = 3log₂(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SPECIAL LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two particularly important identities are:

  log_b(1) = 0 because b⁰ = 1

  log_b(b) = 1 because b¹ = b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SOLVING LOGARITHMIC EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: log₂(x) = 5

Convert to exponential form:

  2⁵ = x

Therefore: x = 32

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH MULTIPLE TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve: log₂(x) + log₂(4) = 5

Using the product rule:

  log₂(4x) = 5

Convert to exponential form:

  4x = 2⁵
  4x = 32

Therefore: x = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CHANGE-OF-BASE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can convert a logarithm to another base using:

  log_b(x) = log(x)/log(b)

or:

  log_b(x) = ln(x)/ln(b)

Example: log₂(10) = ln(10)/ln(2)

This is useful when a calculator doesn't have a button for the specific base.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithmic function can have the form:

  f(x) = a·log_b(x - h) + k

where:
  • a → vertical stretch/compression or reflection
  • h → horizontal shift
  • k → vertical shift
  • x = h → vertical asymptote

Example: f(x) = log₂(x - 3) + 2

has:
  • Horizontal shift: 3 units right
  • Vertical shift: 2 units up
  • Vertical asymptote: x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. APPLICATIONS OF LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logarithms are used in many real-world applications, including:

  • Sound intensity and decibels
  • Earthquake magnitude
  • pH measurements
  • Population models
  • Financial calculations
  • Compound interest
  • Computer science algorithms
  • Data analysis
  • Scientific measurements
  • Exponential growth and decay

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LOGARITHMIC FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logarithmic functions are important in Calculus.

Derivative of logarithmic functions:
  d/dx[log_b(x)] = 1/(x·ln(b))

Derivative of natural logarithm:
  d/dx[ln(x)] = 1/x (for x > 0)

Integral of natural logarithm:
  ∫ln(x) dx = x·ln(x) - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Logarithmic Functions, remember:

  • A logarithm is the inverse of an exponential function.
  • The argument of a logarithm must be positive.
  • The domain is (0, ∞).
  • The range is (-∞, ∞).
  • The vertical asymptote is x = 0 (or x = h with transformations).
  • Product Rule: log_b(MN) = log_b(M) + log_b(N)
  • Quotient Rule: log_b(M/N) = log_b(M) - log_b(N)
  • Power Rule: log_b(Mᵖ) = p·log_b(M)
  • Change-of-base: log_b(x) = ln(x)/ln(b)

The key idea to remember is:

  A logarithmic function is the inverse of an exponential function. It tells you what exponent is needed to obtain a particular number, making logarithms especially useful for solving equations involving unknown exponents. Logarithmic functions are essential in Calculus and are widely used in science, engineering, and real-world applications.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logarithmic Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Definition of Logarithmic Functions
  ✓ Common Logarithms
  ✓ Natural Logarithms
  ✓ Domain and Range
  ✓ Graphs of Logarithmic Functions
  ✓ Vertical Asymptotes
  ✓ Exponential-Logarithmic Relationship
  ✓ Product Rule
  ✓ Quotient Rule
  ✓ Power Rule
  ✓ Special Logarithms
  ✓ Solving Logarithmic Equations
  ✓ Change-of-Base Formula
  ✓ Transformations
  ✓ Applications
  ✓ Logarithmic Functions in Calculus
  `,
  examples: [
    "Evaluate: log₂(8) = 3 because 2³ = 8",
    "Evaluate: log₅(25) = 2 because 5² = 25",
    "Evaluate: log(100) = 2 because 10² = 100",
    "Evaluate: ln(e) = 1 because e¹ = e",
    "Find domain of f(x) = log₂(x) → (0, ∞)",
    "Find range of f(x) = log₂(x) → (-∞, ∞)",
    "Find vertical asymptote of f(x) = log₂(x) → x = 0",
    "Find vertical asymptote of f(x) = log₂(x - 3) + 2 → x = 3",
    "Solve: log₂(x) = 5 → x = 32",
    "Solve: log₂(x) + log₂(4) = 5 → x = 8",
    "Use change-of-base: log₂(10) = ln(10)/ln(2)",
    "Use product rule: log₂(4·8) = log₂(4) + log₂(8)",
    "Use power rule: log₂(x³) = 3log₂(x)",
    "Find derivative of ln(x) → 1/x",
    "Find derivative of log₂(x) → 1/(x·ln(2))",
    "Find integral of ∫ln(x) dx → x·ln(x) - x + C",
    "Transform f(x) = log₂(x) to f(x) = log₂(x - 3) + 2 → right 3, up 2",
  ],
};

export default topic;