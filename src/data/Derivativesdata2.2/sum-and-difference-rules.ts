const topic = {
  id: "sum-and-difference-rules",
  title: "Sum and Difference Rules",
  summary:
    "Sum rule, difference rule, differentiating term-by-term, and examples with polynomials and other functions.",
  details: `
The Sum and Difference Rules tell us how to differentiate functions that are added or subtracted.

The main idea is simple: Differentiate each term separately, then add or subtract the results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = g(x) + h(x), then: f'(x) = g'(x) + h'(x)

In other words: d/dx[g(x) + h(x)] = d/dx[g(x)] + d/dx[h(x)]

Example: Find d/dx(x³ + x²)

Differentiate each term: d/dx(x³) + d/dx(x²)

Apply the Power Rule: 3x² + 2x

Therefore: 3x² + 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = g(x) - h(x), then: f'(x) = g'(x) - h'(x)

In simple terms: Differentiate each term while keeping the subtraction sign.

Example: Find d/dx(x⁵ - x²)

Differentiate each term: d/dx(x⁵) - d/dx(x²)

Apply the Power Rule: 5x⁴ - 2x

Therefore: 5x⁴ - 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE WITH MULTIPLE TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴ + 3x³ - 5x² + 7x

Differentiate every term separately:

  f'(x) = 4x³ + 9x² - 10x + 7

Therefore: f'(x) = 4x³ + 9x² - 10x + 7

Notice that the signs stay the same: + → +, - → -

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WITH CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4x³ + 6x - 10

Differentiate each term:
  d/dx(4x³) + d/dx(6x) - d/dx(10)

Using the Constant Multiple Rule, Power Rule, and Constant Rule:
  12x² + 6 - 0

Therefore: f'(x) = 12x² + 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH DIFFERENT TYPES OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum and Difference Rules also work with trigonometric and exponential functions.

Suppose: f(x) = x² + sin(x) - eˣ

Differentiate each term:
  f'(x) = 2x + cos(x) - eˣ

Therefore: f'(x) = 2x + cos(x) - eˣ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES THIS WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiation is linear, meaning we can break a complicated expression into smaller pieces.

Example: f(x) = x³ + 4x² - 7x

Instead of differentiating everything at once, break it into:
  • x³
  • 4x²
  • -7x

Then differentiate each one:
  • 3x²
  • 8x
  • -7

Finally, combine them: f'(x) = 3x² + 8x - 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMMON MISTAKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't forget the signs.

For: f(x) = x⁴ - 3x² + 5x - 8

The derivative is: 4x³ - 6x + 5

Not: 4x³ + 6x + 5

The negative sign in -3x² must remain: d/dx(-3x²) = -6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUICK TRICK TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see: Term₁ + Term₂ - Term₃

just:
  1. Differentiate the first term.
  2. Differentiate the second term.
  3. Differentiate the third term.
  4. Keep the original signs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. KEY FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sum Rule: (f + g)' = f' + g'

Difference Rule: (f - g)' = f' - g'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Sum and Difference Rules, remember:

  • Differentiate each term separately.
  • Keep the plus and minus signs.
  • The rules work with any differentiable functions.
  • They are often used with the Power Rule and Constant Multiple Rule.

The key idea is: Differentiate term-by-term. Keep the plus and minus signs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum and Difference Rules are fundamental differentiation rules used to differentiate polynomials and other functions.

Key concepts covered:

  ✓ Sum Rule
  ✓ Difference Rule
  ✓ Multiple Terms
  ✓ Constants
  ✓ Different Types of Functions
  ✓ Why It Works
  ✓ Common Mistakes
  ✓ Quick Trick
  `,
  examples: [
    "d/dx(x³ + x²) = 3x² + 2x",
    "d/dx(x⁵ - x²) = 5x⁴ - 2x",
    "f(x) = x⁴ + 3x³ - 5x² + 7x → f'(x) = 4x³ + 9x² - 10x + 7",
    "f(x) = 4x³ + 6x - 10 → f'(x) = 12x² + 6",
    "f(x) = x² + sin(x) - eˣ → f'(x) = 2x + cos(x) - eˣ",
    "f(x) = x³ + 4x² - 7x → f'(x) = 3x² + 8x - 7",
    "f(x) = x⁴ - 3x² + 5x - 8 → f'(x) = 4x³ - 6x + 5",
    "Sum Rule: (f + g)' = f' + g'",
    "Difference Rule: (f - g)' = f' - g'",
    "Differentiate term-by-term, keep signs",
  ],
};

export default topic;