// filename: sum-and-difference-rules-for-integration.ts

const topic = {
  id: "sum-and-difference-rules-for-integration",
  title: "Sum and Difference Rules for Integration",
  summary:
    "Rules that allow integration of expressions containing multiple terms added or subtracted by integrating each term separately while preserving the addition or subtraction signs.",
  details: `
The Sum and Difference Rules tell us how to integrate expressions containing multiple terms that are added or subtracted.

The main idea is:

  Integrate each term separately, while keeping the addition or subtraction signs.

These rules are especially useful when integrating polynomials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Rule states:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

In simple terms:

  The integral of a sum is the sum of the individual integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (x² + x³) dx

Separate the terms:
  ∫ x² dx + ∫ x³ dx

Apply the Power Rule:
  x³/3 + x⁴/4 + C

Therefore:
  ∫ (x² + x³) dx = x³/3 + x⁴/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES THE SUM RULE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F'(x) = f(x)
and:
  G'(x) = g(x)

The derivative of a sum is:
  d/dx [F(x) + G(x)] = F'(x) + G'(x)

Therefore:
  = f(x) + g(x)

Integration reverses this process:
  ∫ [f(x) + g(x)] dx = F(x) + G(x) + C

So the Sum Rule is simply the reverse of the Sum Rule for differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Difference Rule works the same way.
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

In simple terms:

  Integrate each term separately and keep the minus sign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIC DIFFERENCE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (x⁴ - x²) dx

Separate:
  ∫ x⁴ dx - ∫ x² dx

Apply the Power Rule:
  x⁵/5 - x³/3 + C

Therefore:
  ∫ (x⁴ - x²) dx = x⁵/5 - x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMBINING SUM AND DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most polynomial integrals contain both addition and subtraction.

For example:
  ∫ (x⁵ + 3x³ - 7x² + 4x - 9) dx

Separate every term:
  ∫ x⁵ dx + ∫ 3x³ dx - ∫ 7x² dx + ∫ 4x dx - ∫ 9 dx

Now integrate each term:
  x⁶/6 + 3x⁴/4 - 7x³/3 + 2x² - 9x + C

Therefore:
  x⁶/6 + 3x⁴/4 - 7x³/3 + 2x² - 9x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SUM RULE WITH CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Rule can be combined with the Constant Multiple Rule.

Consider:
  ∫ (5x³ + 7x²) dx

Separate:
  ∫ 5x³ dx + ∫ 7x² dx

Move constants outside:
  5∫ x³ dx + 7∫ x² dx

Apply the Power Rule:
  5(x⁴/4) + 7(x³/3) + C

Therefore:
  5x⁴/4 + 7x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DIFFERENCE RULE WITH CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ (8x⁴ - 6x²) dx

Separate:
  ∫ 8x⁴ dx - ∫ 6x² dx

Apply the Constant Multiple Rule:
  8∫ x⁴ dx - 6∫ x² dx

Apply the Power Rule:
  8(x⁵/5) - 6(x³/3) + C

Simplify:
  8x⁵/5 - 2x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY CAN WE INTEGRATE EACH TERM SEPARATELY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration is linear.

That means:
  ∫ [a f(x) + b g(x)] dx = a ∫ f(x) dx + b ∫ g(x) dx

where a and b are constants.

This single property combines both:
  • Constant Multiple Rule
  • Sum Rule
  • Difference Rule

This is why polynomial integration can be done term-by-term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH THREE TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (3x⁴ + 2x² + 5) dx

Separate:
  ∫ 3x⁴ dx + ∫ 2x² dx + ∫ 5 dx

Integrate:
  3(x⁵/5) + 2(x³/3) + 5x + C

Therefore:
  3x⁵/5 + 2x³/3 + 5x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH FOUR TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (6x⁵ - 4x³ + 9x² - 7) dx

Integrate term-by-term:
  6∫ x⁵ dx - 4∫ x³ dx + 9∫ x² dx - 7∫ 1 dx

Apply the Power Rule:
  6(x⁶/6) - 4(x⁴/4) + 9(x³/3) - 7x + C

Simplify:
  x⁶ - x⁴ + 3x³ - 7x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH NEGATIVE TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ (-3x⁴ + 5x² - 8x) dx

Integrate each term:
  -3∫ x⁴ dx + 5∫ x² dx - 8∫ x dx
  = -3(x⁵/5) + 5(x³/3) - 8(x²/2) + C

Therefore:
  -3x⁵/5 + 5x³/3 - 4x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH RADICALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum and Difference Rules also work with radicals.

Evaluate:
  ∫ (√x + x²) dx

Rewrite:
  ∫ (x^(1/2) + x²) dx

Separate:
  ∫ x^(1/2) dx + ∫ x² dx

Apply the Power Rule:
  (2/3)x^(3/2) + x³/3 + C

Therefore:
  (2/3)x^(3/2) + x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rule isn't limited to polynomials.

Evaluate:
  ∫ (sin x + cos x) dx

Separate:
  ∫ sin x dx + ∫ cos x dx

Use the basic trigonometric integrals:
  -cos x + sin x + C

Therefore:
  -cos x + sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (eˣ + 3x²) dx

Separate:
  ∫ eˣ dx + ∫ 3x² dx

Integrate:
  eˣ + x³ + C

Therefore:
  eˣ + x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE COMBINING EVERYTHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (4x⁵ - 3x² + 7 cos x - 2eˣ + 6) dx

Separate every term:
  ∫ 4x⁵ dx - ∫ 3x² dx + ∫ 7 cos x dx - ∫ 2eˣ dx + ∫ 6 dx

Now integrate:
  4(x⁶/6) - 3(x³/3) + 7 sin x - 2eˣ + 6x + C

Simplify:
  2x⁶/3 - x³ + 7 sin x - 2eˣ + 6x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CHECKING THE ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we obtained:
  F(x) = 2x⁶/3 - x³ + 7 sin x - 2eˣ + 6x + C

Differentiate:
  F'(x) = 4x⁵ - 3x² + 7 cos x - 2eˣ + 6

This matches the original integrand:
  4x⁵ - 3x² + 7 cos x - 2eˣ + 6

Therefore, the answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT: DON'T COMBINE TERMS INCORRECTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ (x³ + x²) dx

You cannot simply write:
  ∫ x⁵ dx

because:
  x³ + x² ≠ x⁵

Instead, integrate each term:
  x⁴/4 + x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE RULES TOGETHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three basic linearity rules can be remembered together.

Constant Multiple Rule:
  ∫ c f(x) dx = c ∫ f(x) dx

Sum Rule:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Difference Rule:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Together:
  ∫ [a f(x) ± b g(x)] dx = a ∫ f(x) dx ± b ∫ g(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK METHOD FOR POLYNOMIAL INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  ∫ (5x⁴ - 3x² + 7x - 2) dx

use this process:

Step 1 — Separate terms
  5∫ x⁴ dx - 3∫ x² dx + 7∫ x dx - 2∫ dx

Step 2 — Apply the Power Rule
  5(x⁵/5) - 3(x³/3) + 7(x²/2) - 2x

Step 3 — Simplify
  x⁵ - x³ + 7x²/2 - 2x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Integrate terms separately
  ∫ (f + g) dx = ∫ f dx + ∫ g dx

2. Keep the signs
  If the original expression has a minus:
    f(x) - g(x)
  the integral also has a minus:
    ∫ f(x) dx - ∫ g(x) dx

3. Constants can come outside
  ∫ c f(x) dx = c ∫ f(x) dx

4. Add C
  For an indefinite integral:
    +C

5. Check by differentiating
  If your derivative gives the original integrand, your integration is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EASY MEMORY TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think:

  SEPARATE → INTEGRATE → SIMPLIFY → +C

For example:
  ∫ (6x³ - 4x² + 8x - 5) dx

Separate:
  6∫ x³ dx - 4∫ x² dx + 8∫ x dx - 5∫ dx

Integrate:
  6(x⁴/4) - 4(x³/3) + 8(x²/2) - 5x + C

Simplify:
  3x⁴/2 - 4x³/3 + 4x² - 5x + C

That's the fundamental use of the Sum and Difference Rules: break a complicated integral into simpler pieces, integrate each piece, and preserve the original signs.
  `,
  examples: [
    "∫ (x² + x³) dx = x³/3 + x⁴/4 + C",
    "∫ (x⁴ - x²) dx = x⁵/5 - x³/3 + C",
    "∫ (x⁵ + 3x³ - 7x² + 4x - 9) dx = x⁶/6 + 3x⁴/4 - 7x³/3 + 2x² - 9x + C",
    "∫ (5x³ + 7x²) dx = 5x⁴/4 + 7x³/3 + C",
    "∫ (8x⁴ - 6x²) dx = 8x⁵/5 - 2x³ + C",
    "∫ (3x⁴ + 2x² + 5) dx = 3x⁵/5 + 2x³/3 + 5x + C",
    "∫ (4x⁵ - 3x² + 7 cos x - 2eˣ + 6) dx = 2x⁶/3 - x³ + 7 sin x - 2eˣ + 6x + C",
  ],
};

export default topic;