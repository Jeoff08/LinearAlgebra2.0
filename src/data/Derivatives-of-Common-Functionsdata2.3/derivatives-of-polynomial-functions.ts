const topic = {
  id: "derivatives-of-polynomial-functions",
  title: "Derivatives of Polynomial Functions",
  summary:
    "Differentiating polynomial functions term-by-term using the power rule, constant multiple rule, and sum and difference rules.",
  details: `
The derivative of a polynomial function is found by differentiating each term separately using the Power Rule, Constant Multiple Rule, and Sum and Difference Rules.

A polynomial generally has the form:

  f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

where the a's are constants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GENERAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a polynomial: f(x) = aₙxⁿ + ... + a₂x² + a₁x + a₀

its derivative is: f'(x) = naₙxⁿ⁻¹ + ... + 2a₂x + a₁

The constant a₀ disappears because: d/dx(a₀) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW TO DIFFERENTIATE A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these steps:
  1. Differentiate each term separately.
  2. Multiply the coefficient by the exponent.
  3. Subtract 1 from the exponent.
  4. Constants become zero.
  5. Combine the results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1: BASIC POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f'(x) if f(x) = 3x⁴ + 2x³ - 5x² + 7x - 10

Differentiate each term:
  • d/dx(3x⁴) = 12x³
  • d/dx(2x³) = 6x²
  • d/dx(-5x²) = -10x
  • d/dx(7x) = 7
  • d/dx(-10) = 0

Therefore: f'(x) = 12x³ + 6x² - 10x + 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative of: f(x) = 5x⁶ - 4x⁴ + 8x² - 3

Apply the Power Rule term-by-term:
  f'(x) = 30x⁵ - 16x³ + 16x

The constant -3 becomes 0.

Therefore: f'(x) = 30x⁵ - 16x³ + 16x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 3: CUBIC POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 2x³ - 7x² + 4x + 9

Differentiate:
  f'(x) = 6x² - 14x + 4

Therefore: f'(x) = 6x² - 14x + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 4: QUADRATIC POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4x² - 6x + 8

Differentiate each term:
  • d/dx(4x²) = 8x
  • d/dx(-6x) = -6
  • d/dx(8) = 0

Therefore: f'(x) = 8x - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 5: POLYNOMIAL WITH FRACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = ½x⁴ - ¾x² + 5x - 6

Differentiate:
  f'(x) = ½(4x³) - ¾(2x) + 5

Simplify: f'(x) = 2x³ - ³⁄₂x + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 6: POLYNOMIAL WITH MISSING TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 7x⁵ - 3x² + 4

Notice that there are no x⁴ or x³ terms.

That's completely fine.

Differentiate: f'(x) = 35x⁴ - 6x

Therefore: f'(x) = 35x⁴ - 6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DEGREE OF A POLYNOMIAL AND ITS DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important property is: The derivative of a nonconstant polynomial has a degree one less than the original polynomial.

Example: f(x) = 5x⁶ + 2x³ - 4 has degree 6.

Its derivative: f'(x) = 30x⁵ + 6x² has degree 5.

So: deg(f') = deg(f) - 1 for a nonconstant polynomial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can differentiate a polynomial more than once.

For: f(x) = x⁴ - 3x³ + 2x²

First derivative: f'(x) = 4x³ - 9x² + 4x

Differentiate again: f''(x) = 12x² - 18x + 4

Therefore: f''(x) = 12x² - 18x + 4

The second derivative is useful for studying concavity, inflection points, and other properties of polynomial graphs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT RULES USED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When differentiating polynomial functions, you'll mainly use:

  • Constant Rule: d/dx(c) = 0
  • Power Rule: d/dx(xⁿ) = nxⁿ⁻¹
  • Constant Multiple Rule: d/dx[c·f(x)] = c·f'(x)
  • Sum and Difference Rules: (f+g)' = f' + g' and (f-g)' = f' - g'

Together, these rules allow you to differentiate virtually any polynomial directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to reduce the exponent
  Incorrect: d/dx(x⁵) = 5x⁵
  Correct: d/dx(x⁵) = 5x⁴

Mistake 2: Forgetting the coefficient
  For 4x³, the derivative is 4(3x²), not 3x².
  Correct: 12x²

Mistake 3: Keeping the constant
  For f(x) = x³ + 5, the derivative is f'(x) = 3x² because d/dx(5) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given: f(x) = 6x⁵ - 2x⁴ + 9x³ - 4x + 12

Differentiate term-by-term:
  • 6x⁵ → 30x⁴
  • -2x⁴ → -8x³
  • 9x³ → 27x²
  • -4x → -4
  • 12 → 0

Therefore: f'(x) = 30x⁴ - 8x³ + 27x² - 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Polynomial Functions, remember:

  • To differentiate a polynomial, apply the Power Rule to every term.
  • Keep the signs.
  • Constants become zero.
  • The derivative of a polynomial has degree one less than the original.

The most important formula is:

  d/dx(axⁿ) = an·xⁿ⁻¹

So whenever you see a polynomial, simply differentiate it term-by-term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Polynomial Functions are the foundation of differential calculus and the starting point for many derivative applications.

Key concepts covered:

  ✓ General Rule
  ✓ How to Differentiate a Polynomial
  ✓ Basic Polynomial Examples
  ✓ Cubic Polynomial
  ✓ Quadratic Polynomial
  ✓ Polynomial with Fractions
  ✓ Polynomial with Missing Terms
  ✓ Degree of a Polynomial and Its Derivative
  ✓ Second Derivative
  ✓ Important Rules
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = 3x⁴ + 2x³ - 5x² + 7x - 10 → f'(x) = 12x³ + 6x² - 10x + 7",
    "f(x) = 5x⁶ - 4x⁴ + 8x² - 3 → f'(x) = 30x⁵ - 16x³ + 16x",
    "f(x) = 2x³ - 7x² + 4x + 9 → f'(x) = 6x² - 14x + 4",
    "f(x) = 4x² - 6x + 8 → f'(x) = 8x - 6",
    "f(x) = ½x⁴ - ¾x² + 5x - 6 → f'(x) = 2x³ - ³⁄₂x + 5",
    "f(x) = 7x⁵ - 3x² + 4 → f'(x) = 35x⁴ - 6x",
    "f(x) = 6x⁵ - 2x⁴ + 9x³ - 4x + 12 → f'(x) = 30x⁴ - 8x³ + 27x² - 4",
    "f(x) = x⁴ - 3x³ + 2x² → f''(x) = 12x² - 18x + 4",
    "deg(f') = deg(f) - 1 for nonconstant polynomials",
    "d/dx(axⁿ) = an·xⁿ⁻¹",
    "Constant Rule: d/dx(c) = 0",
    "Power Rule: d/dx(xⁿ) = nxⁿ⁻¹",
    "Don't forget: constants become 0",
    "Don't forget: reduce the exponent by 1",
  ],
};

export default topic;