const topic = {
  id: "exponential-functions",
  title: "Exponential Functions",
  summary:
    "Definition of exponential functions, exponential growth and decay, domain and range, transformations, exponential equations, and applications.",
  details: `
An exponential function is a function in which the variable appears in the exponent.

The general form is:

  f(x) = abˣ

where:
  • a ≠ 0 is the initial value
  • b > 0 is the base
  • b ≠ 1
  • x is the exponent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLES OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • f(x) = 2ˣ
  • f(x) = 3(2ˣ)
  • f(x) = 5(½)ˣ
  • f(x) = 10(1.5)ˣ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When b > 1, the function represents exponential growth.

Example: f(x) = 2ˣ

As x increases, the value of f(x) increases rapidly.

Some values are:
  • 2⁰ = 1
  • 2¹ = 2
  • 2² = 4
  • 2³ = 8
  • 2⁴ = 16

The function keeps increasing as x becomes larger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When 0 < b < 1, the function represents exponential decay.

Example: f(x) = (½)ˣ

As x increases, the function gets closer and closer to zero.

Some values are:
  • (½)⁰ = 1
  • (½)¹ = ½
  • (½)² = ¼
  • (½)³ = ⅛

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain of a basic exponential function is: (-∞, ∞)

This means that x can be any real number.

Example: f(x) = 2ˣ is defined for every real value of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a basic exponential function f(x) = abˣ with a > 0, the range is: (0, ∞)

The function approaches zero but never actually reaches it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. Y-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the y-intercept, substitute x = 0.

For: f(x) = 3(2ˣ)

  f(0) = 3(2⁰) = 3(1) = 3

Therefore: (0, 3) is the y-intercept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. HORIZONTAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A basic exponential function has a horizontal asymptote: y = 0

Example: f(x) = 2ˣ approaches 0 as x approaches negative infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A more general exponential function can be written as:

  f(x) = abˣ⁻ʰ + k

where:
  • a → vertical stretch/compression or reflection
  • h → horizontal shift
  • k → vertical shift
  • y = k → horizontal asymptote

Example: f(x) = 2ˣ⁻³ + 4

has a horizontal shift of 3 units to the right and a vertical shift of 4 units upward.

Its horizontal asymptote is: y = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXPONENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An exponential equation contains the variable in the exponent.

Example: 2ˣ = 16

Since 16 = 2⁴, we have: 2ˣ = 2⁴

Therefore: x = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. USING LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the bases cannot easily be made the same.

Example: 3ˣ = 10

Take the natural logarithm of both sides:

  ln(3ˣ) = ln(10)

Using the logarithm power rule:

  x·ln(3) = ln(10)

Therefore: x = ln(10)/ln(3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE NATURAL EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The natural exponential function is:

  f(x) = eˣ

where e ≈ 2.71828... is Euler's number.

This function is especially important in Calculus because its derivative is itself:

  d/dx(eˣ) = eˣ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. APPLICATIONS OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions are commonly used to model:

  • Population growth
  • Bacterial growth
  • Compound interest
  • Investment growth
  • Depreciation
  • Radioactive decay
  • Spread of information
  • Cooling and heating models
  • Inflation
  • Loan and financial models

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: COMPOUND INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula for compound interest is:

  A = P(1 + r/n)ⁿᵗ

where:
  • P = principal
  • r = annual interest rate
  • n = number of compounding periods per year
  • t = time
  • A = final amount

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CONTINUOUS GROWTH AND DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuous growth and decay can be modeled using:

  A = Peʳᵗ

where:
  • P = initial amount
  • r = growth rate (positive for growth, negative for decay)
  • t = time
  • A = final amount

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LAWS OF EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Important laws of exponents to remember:

  • aᵐ · aⁿ = aᵐ⁺ⁿ
  • aᵐ/aⁿ = aᵐ⁻ⁿ
  • (aᵐ)ⁿ = aᵐⁿ
  • (ab)ᵐ = aᵐbᵐ
  • a⁰ = 1 (where a ≠ 0)
  • a⁻ⁿ = 1/aⁿ
  • aᵐ/ⁿ = ⁿ√(aᵐ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXPONENTIAL FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions are extremely important in Calculus.

Derivative of exponential functions:
  d/dx(aˣ) = aˣ · ln(a)

Derivative of natural exponential:
  d/dx(eˣ) = eˣ

Integral of exponential functions:
  ∫aˣ dx = aˣ/ln(a) + C

Integral of natural exponential:
  ∫eˣ dx = eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Exponential Functions, remember:

  • The variable is in the exponent.
  • If b > 1, the function grows.
  • If 0 < b < 1, the function decays.
  • The domain is all real numbers.
  • The range is (0, ∞) for a > 0.
  • The horizontal asymptote is y = 0 (or y = k with transformations).

The key idea to remember is:

  An exponential function is a function where the variable is in the exponent. When the base is greater than 1, the function shows exponential growth; when the base is between 0 and 1, it shows exponential decay. Exponential functions are essential in Calculus and are widely used to model real-world phenomena such as population growth, compound interest, and radioactive decay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Definition of Exponential Functions
  ✓ Exponential Growth
  ✓ Exponential Decay
  ✓ Domain and Range
  ✓ Y-Intercepts
  ✓ Horizontal Asymptotes
  ✓ Transformations
  ✓ Exponential Equations
  ✓ Using Logarithms
  ✓ Natural Exponential Function (eˣ)
  ✓ Laws of Exponents
  ✓ Compound Interest
  ✓ Continuous Growth and Decay
  ✓ Applications
  ✓ Exponential Functions in Calculus
  `,
  examples: [
    "Identify growth or decay: f(x) = 2ˣ → growth (b > 1)",
    "Identify growth or decay: f(x) = (½)ˣ → decay (0 < b < 1)",
    "Find domain of f(x) = 2ˣ → (-∞, ∞)",
    "Find range of f(x) = 2ˣ → (0, ∞)",
    "Find y-intercept of f(x) = 3(2ˣ) → (0, 3)",
    "Find horizontal asymptote of f(x) = 2ˣ → y = 0",
    "Find horizontal asymptote of f(x) = 2ˣ⁻³ + 4 → y = 4",
    "Solve: 2ˣ = 16 → x = 4",
    "Solve: 3ˣ = 10 → x = ln(10)/ln(3)",
    "Transform f(x) = 2ˣ to f(x) = 2ˣ⁻³ + 4 → shift right 3, up 4",
    "Find derivative of f(x) = eˣ → f'(x) = eˣ",
    "Find derivative of f(x) = 2ˣ → f'(x) = 2ˣ ln(2)",
    "Find integral of ∫eˣ dx → eˣ + C",
    "Find integral of ∫2ˣ dx → 2ˣ/ln(2) + C",
    "Compound interest: A = P(1 + r/n)ⁿᵗ",
    "Continuous growth: A = Peʳᵗ",
  ],
};

export default topic;