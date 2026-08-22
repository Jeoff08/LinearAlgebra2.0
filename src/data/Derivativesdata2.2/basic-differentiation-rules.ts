const topic = {
  id: "basic-differentiation-rules",
  title: "Basic Differentiation Rules",
  summary:
    "Constant rule, power rule, constant multiple rule, sum and difference rules, and differentiating polynomials.",
  details: `
Differentiation rules are the basic techniques used to find the derivative of a function quickly and efficiently.

Instead of using the limit definition every time:

  f'(x) = lim(h→0) [f(x+h) - f(x)]/h

we can use established rules.

The main idea is: Differentiation Rules → Quickly Find Derivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a constant is zero.

If f(x) = c where c is a constant, then: f'(x) = 0

Example: f(x) = 7, therefore: f'(x) = 0

Another example: f(x) = -25, f'(x) = 0

Why? A constant does not change as x changes. Its rate of change is therefore: 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule is one of the most important differentiation rules.

If f(x) = xⁿ, then: f'(x) = nxⁿ⁻¹

In simple words: Bring the exponent down, multiply, then subtract 1 from the exponent.

Example 1: f(x) = x⁵ → Bring down 5: 5x⁴, therefore: f'(x) = 5x⁴

Example 2: f(x) = x⁸ → f'(x) = 8x⁷

Example 3: f(x) = x² → f'(x) = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function is multiplied by a constant, keep the constant and differentiate the function.

If f(x) = c·g(x), then: f'(x) = c·g'(x)

Example: f(x) = 5x³

Differentiate x³: 3x²

Keep the 5: f'(x) = 15x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a sum is the sum of the derivatives.

If f(x) = g(x) + h(x), then: f'(x) = g'(x) + h'(x)

Example: f(x) = x³ + x²

Differentiate each term:
  • d/dx(x³) = 3x²
  • d/dx(x²) = 2x

Therefore: f'(x) = 3x² + 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a difference is the difference of the derivatives.

If f(x) = g(x) - h(x), then: f'(x) = g'(x) - h'(x)

Example: f(x) = x⁴ - x²

Differentiate: 4x³ - 2x

Therefore: f'(x) = 4x³ - 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POLYNOMIAL DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The previous rules can be combined to differentiate polynomials.

Consider: f(x) = 4x⁵ - 3x³ + 7x² - 2x + 9

Differentiate each term:
  • 4x⁵ → 20x⁴
  • -3x³ → -9x²
  • 7x² → 14x
  • -2x → -2
  • 9 → 0

Therefore: f'(x) = 20x⁴ - 9x² + 14x - 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DERIVATIVE OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since x = x¹, use the Power Rule:

  d/dx(x¹) = 1·x⁰

Since x⁰ = 1, we get: d/dx(x) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE OF x⁰
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since x⁰ = 1, and 1 is a constant: d/dx(1) = 0

This is consistent with the Power Rule: d/dx(x⁰) = 0·x⁻¹ = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. NEGATIVE EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works with negative exponents.

Suppose: f(x) = x⁻³

Apply: nxⁿ⁻¹

Therefore: f'(x) = -3x⁻⁴

or: f'(x) = -3/x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FRACTIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works with fractional exponents.

Example: f(x) = x¹/²

Then: f'(x) = 1/2 · x⁻¹/²

Therefore: f'(x) = 1/(2√x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVE OF A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rewrite the square root using an exponent: √x = x¹/²

Then apply the Power Rule: d/dx(x¹/²) = 1/2 · x⁻¹/²

Therefore: d/dx(√x) = 1/(2√x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DERIVATIVE OF A RECIPROCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rewrite: 1/x as x⁻¹

Then use the Power Rule: d/dx(x⁻¹) = -x⁻²

Therefore: d/dx(1/x) = -1/x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONSTANT TIMES A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 7x⁴

Keep the constant: 7

Differentiate: x⁴ → 4x³

Therefore: f'(x) = 28x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE COMBINING BASIC RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative: f(x) = 6x⁴ - 5x³ + 2x² - 8x + 10

Differentiate each term:
  • 6x⁴ → 24x³
  • -5x³ → -15x²
  • 2x² → 4x
  • -8x → -8
  • 10 → 0

Therefore: f'(x) = 24x³ - 15x² + 4x - 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. BASIC RULES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are the most important rules to memorize:

  • Constant Rule: d/dx(c) = 0
  • Power Rule: d/dx(xⁿ) = nxⁿ⁻¹
  • Constant Multiple Rule: d/dx[c·f(x)] = c·f'(x)
  • Sum Rule: d/dx[f(x) + g(x)] = f'(x) + g'(x)
  • Difference Rule: d/dx[f(x) - g(x)] = f'(x) - g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: c
Derivative: 0

Function: x
Derivative: 1

Function: x²
Derivative: 2x

Function: x³
Derivative: 3x²

Function: xⁿ
Derivative: nxⁿ⁻¹

Function: c·xⁿ
Derivative: c·n·xⁿ⁻¹

Function: √x
Derivative: 1/(2√x)

Function: 1/x
Derivative: -1/x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting to subtract 1
  Incorrect: d/dx(x⁵) = 5x⁵
  Correct: d/dx(x⁵) = 5x⁴
  Remember: Exponent comes down, then exponent decreases by 1.

❌ Mistake 2: Forgetting the coefficient
  Incorrect: d/dx(4x³) = 3x²
  Correct: d/dx(4x³) = 12x²

❌ Mistake 3: Differentiating constants incorrectly
  Incorrect: d/dx(8) = 8
  Correct: d/dx(8) = 0

❌ Mistake 4: Forgetting the negative sign
  For f(x) = x⁻², the derivative is: f'(x) = -2x⁻³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHY BASIC DIFFERENTIATION RULES MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These rules are the foundation for almost everything you will do with derivatives.

You will use them when learning:
  • Tangent lines
  • Normal lines
  • Increasing and decreasing functions
  • Critical points
  • Local extrema
  • Optimization
  • Related rates
  • Curve sketching
  • Concavity
  • Second derivatives
  • Motion problems
  • Linear approximation

Later, you will combine these basic rules with:
  • Product Rule
  • Quotient Rule
  • Chain Rule
  • Rules for exponential, logarithmic, and trigonometric functions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Basic Differentiation Rules, remember:

  • The Power Rule is the most important: d/dx(xⁿ) = nxⁿ⁻¹
  • The derivative of a constant is always 0.
  • Constants stay with the function when differentiating.
  • The derivative of a sum is the sum of the derivatives.
  • The derivative of a difference is the difference of the derivatives.

Easy way to remember the Power Rule:
  POWER RULE: xⁿ → nxⁿ⁻¹
  1. Bring the exponent down: x⁵ → 5x⁵
  2. Subtract 1 from the exponent: 5x⁵ → 5x⁴
  Final: x⁵ → 5x⁴

Then for a polynomial, simply differentiate each term separately: Term by term.

So the overall idea is:
  Basic Differentiation = Power Rule + Constant Rule + Sum/Difference Rules + Constant Multiple Rule

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Basic Differentiation Rules are the foundation of differential calculus and the starting point for finding derivatives.

Key concepts covered:

  ✓ Constant Rule
  ✓ Power Rule
  ✓ Constant Multiple Rule
  ✓ Sum Rule
  ✓ Difference Rule
  ✓ Polynomial Differentiation
  ✓ Derivative of x
  ✓ Derivative of x⁰
  ✓ Negative Exponents
  ✓ Fractional Exponents
  ✓ Derivative of √x
  ✓ Derivative of 1/x
  ✓ Combining Rules
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx(7) = 0",
    "d/dx(x⁵) = 5x⁴",
    "d/dx(x⁸) = 8x⁷",
    "d/dx(x²) = 2x",
    "d/dx(5x³) = 15x²",
    "d/dx(x³ + x²) = 3x² + 2x",
    "d/dx(x⁴ - x²) = 4x³ - 2x",
    "d/dx(4x⁵ - 3x³ + 7x² - 2x + 9) = 20x⁴ - 9x² + 14x - 2",
    "d/dx(x) = 1",
    "d/dx(x⁻³) = -3x⁻⁴ = -3/x⁴",
    "d/dx(√x) = 1/(2√x)",
    "d/dx(1/x) = -1/x²",
    "d/dx(7x⁴) = 28x³",
    "d/dx(6x⁴ - 5x³ + 2x² - 8x + 10) = 24x³ - 15x² + 4x - 8",
    "Constant Rule: d/dx(c) = 0",
    "Power Rule: d/dx(xⁿ) = nxⁿ⁻¹",
    "Sum Rule: d/dx[f(x)+g(x)] = f'(x)+g'(x)",
    "Difference Rule: d/dx[f(x)-g(x)] = f'(x)-g'(x)",
    "Constant Multiple Rule: d/dx[c·f(x)] = c·f'(x)",
  ],
};

export default topic;