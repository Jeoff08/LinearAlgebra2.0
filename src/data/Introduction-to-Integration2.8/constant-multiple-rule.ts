// filename: constant-multiple-rule.ts

const topic = {
  id: "constant-multiple-rule",
  title: "Constant Multiple Rule",
  summary:
    "A basic integration rule that allows a constant to be moved outside an integral, simplifying the integration process for expressions with constant coefficients.",
  details: `
The Constant Multiple Rule is a basic integration rule that tells us what happens when a constant is multiplied by a function.

The main idea is simple:

  A constant can be moved outside an integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant, then:
  ∫ c f(x) dx = c ∫ f(x) dx

In other words, keep the constant outside and integrate the function normally.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A CONSTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant is a number that does not change with respect to the variable.

For example, in:
  5x³

the number 5 is a constant, while x³ is the variable expression.

Other examples of constants include:
  2, -7, 10, 1/2, π

So:
  8x⁴ has constant 8, while:
  -3x² has constant -3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 5x² dx

The 5 is a constant, so move it outside:
  5∫ x² dx

Apply the Power Rule:
  5(x³/3) + C

Therefore:
  ∫ 5x² dx = 5x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THIS RULE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember the derivative Constant Multiple Rule:
  d/dx [c f(x)] = c f'(x)

For example:
  d/dx [5x³] = 5(3x²) = 15x²

Integration reverses this process.

Therefore:
  ∫ 15x² dx = 5x³ + C

The constant can effectively be kept outside the integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH A LARGER CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 12x⁴ dx

Move 12 outside:
  12∫ x⁴ dx

Apply the Power Rule:
  12(x⁵/5) + C

Therefore:
  12x⁵/5 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WITH A NEGATIVE CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ -6x³ dx

Move -6 outside:
  -6∫ x³ dx

Apply the Power Rule:
  -6(x⁴/4) + C

Simplify:
  -3x⁴/2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH A FRACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ (3/4)x² dx

Move the constant outside:
  (3/4)∫ x² dx

Apply the Power Rule:
  (3/4)(x³/3) + C

The 3 cancels:
  x³/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH π
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple rule also works with constants such as π.

Consider:
  ∫ πx³ dx

Move π outside:
  π∫ x³ dx

Integrate:
  π(x⁴/4) + C

Therefore:
  πx⁴/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ 7eˣ dx

Move 7 outside:
  7∫ eˣ dx

Since:
  ∫ eˣ dx = eˣ + C

we get:
  7eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 4 cos x dx

Move the constant outside:
  4∫ cos x dx

Since:
  ∫ cos x dx = sin x + C

we get:
  4 sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ -8 sin x dx

Move -8 outside:
  -8∫ sin x dx

Since:
  ∫ sin x dx = -cos x

we get:
  -8(-cos x)

Therefore:
  8 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CONSTANT MULTIPLE RULE WITH POLYNOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ 3(2x³ + 5x² - 4x) dx

The entire expression is multiplied by 3.

We can move 3 outside:
  3∫ (2x³ + 5x² - 4x) dx

Now integrate:
  3(2x⁴/4 + 5x³/3 - 4x²/2) + C

Simplifying:
  3x⁴/2 + 5x³ - 6x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONSTANT MULTIPLE RULE + POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two rules are frequently used together.

Consider:
  ∫ 8x⁷ dx

Constant Multiple Rule:
  8∫ x⁷ dx

Power Rule:
  8(x⁸/8) + C

The 8 cancels:
  x⁸ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 15x⁴ dx

Take the constant outside:
  15∫ x⁴ dx

Power Rule:
  15(x⁵/5) + C

Simplify:
  3x⁵ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONSTANT MULTIPLE RULE WITH RADICALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ 6√x dx

Rewrite the square root:
  ∫ 6x^(1/2) dx

Move the constant:
  6∫ x^(1/2) dx

Apply the Power Rule:
  6(x^(3/2)/(3/2))
  = 6(2/3)x^(3/2)

Therefore:
  4x^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY THE RULE IS USEFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Without the Constant Multiple Rule, you might repeatedly carry the constant through every step.

For example:
  ∫ 20x⁵ dx

Instead of treating 20x⁵ as one complicated expression, separate it:
  20∫ x⁵ dx

Then:
  20(x⁶/6)
  10x⁶/3 + C

This makes integration much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CONSTANT MULTIPLE VS. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two rules are often used together.

Constant Multiple Rule:
  ∫ c f(x) dx = c ∫ f(x) dx

Sum Rule:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Consider:
  ∫ (6x³ + 4x²) dx

You can separate the terms:
  ∫ 6x³ dx + ∫ 4x² dx

Then apply the Constant Multiple Rule:
  6∫ x³ dx + 4∫ x² dx

Apply the Power Rule:
  6(x⁴/4) + 4(x³/3) + C

Therefore:
  3x⁴/2 + 4x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A VERY IMPORTANT DETAIL ABOUT C
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You might wonder why we don't write:
  c∫ f(x) dx = c(F(x) + C)

which would give:
  cF(x) + cC

The reason is that cC is still just another arbitrary constant.

For example:
  5C is still some constant, so we simply write C.

Therefore:
  c(F(x) + C) = cF(x) + C

for indefinite integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HOW TO RECOGNIZE A CONSTANT MULTIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Look for a number multiplying the function.

Example:
  7x⁴
  Constant: 7
  Function: x⁴

So:
  ∫ 7x⁴ dx = 7∫ x⁴ dx

Example:
  -3 sin x
  Constant: -3
  Function: sin x

Therefore:
  ∫ -3 sin x dx = -3∫ sin x dx

Example:
  (2/5)eˣ
  Constant: 2/5
  Function: eˣ

Therefore:
  ∫ (2/5)eˣ dx = (2/5)∫ eˣ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (9x⁵ - 6x³ + 12x) dx

Separate the terms:
  ∫ 9x⁵ dx - ∫ 6x³ dx + ∫ 12x dx

Move constants outside:
  9∫ x⁵ dx - 6∫ x³ dx + 12∫ x dx

Apply the Power Rule:
  9(x⁶/6) - 6(x⁴/4) + 12(x²/2) + C

Simplify:
  3x⁶/2 - 3x⁴/2 + 6x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. CHECKING THE ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take:
  F(x) = 3x⁶/2 - 3x⁴/2 + 6x² + C

Differentiate:
  F'(x) = (3/2)(6x⁵) - (3/2)(4x³) + 12x
  = 9x⁵ - 6x³ + 12x

This matches the original function.

Therefore, the integration is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting to multiply back
  For:
    ∫ 5x² dx
  you might incorrectly write:
    x³/3 + C
  The 5 was lost.
  Correct:
    5x³/3 + C

❌ Mistake 2: Dividing the constant incorrectly
  For:
    ∫ 8x³ dx
  the answer is:
    8(x⁴/4)
  which simplifies to:
    2x⁴ + C
  not:
    x⁴/32 + C

❌ Mistake 3: Treating a variable as a constant
  In:
    ∫ xy² dx
  if integrating with respect to x, y may be treated as a constant only in an appropriate context, but in ordinary single-variable calculus expressions, you must know what variable you're integrating with respect to.

  For:
    ∫ 5x² dx
  5 is definitely a constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Rule is:
  ∫ c f(x) dx = c ∫ f(x) dx

Remember:
  Pull the constant outside, integrate the function, then simplify.

For example:
  ∫ 7x³ dx
  = 7∫ x³ dx
  = 7(x⁴/4) + C
  = 7x⁴/4 + C

The rule works with polynomials, radicals, exponentials, logarithmic expressions, and trigonometric functions, making it one of the most frequently used rules in integration.
  `,
  examples: [
    "∫ 5x² dx = 5x³/3 + C",
    "∫ 12x⁴ dx = 12x⁵/5 + C",
    "∫ -6x³ dx = -3x⁴/2 + C",
    "∫ (3/4)x² dx = x³/4 + C",
    "∫ 7eˣ dx = 7eˣ + C",
    "∫ 4 cos x dx = 4 sin x + C",
    "∫ (9x⁵ - 6x³ + 12x) dx = 3x⁶/2 - 3x⁴/2 + 6x² + C",
  ],
};

export default topic;