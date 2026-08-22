// filename: integrals-of-logarithmic-functions.ts

const topic = {
  id: "integrals-of-logarithmic-functions",
  title: "Integrals of Logarithmic Functions",
  summary:
    "Integration rules for logarithmic functions including 1/x, ln x, log_a x, and the pattern f'(x)/f(x), with special attention to the absolute value and the exception to the power rule.",
  details: `
Logarithmic integration focuses mainly on finding antiderivatives involving functions such as:
  ln x, ln|x|, log_a x

The most important logarithmic integral to remember is:
  ∫ 1/x dx = ln|x| + C

Unlike powers of x, logarithmic functions often require a slightly different approach.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MOST IMPORTANT LOGARITHMIC INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  ∫ 1/x dx

We know:
  d/dx (ln|x|) = 1/x

Therefore:
  ∫ 1/x dx = ln|x| + C

This is one of the most important formulas in integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS THERE AN ABSOLUTE VALUE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You may wonder why we write:
  ln|x|

instead of simply:
  ln x

The reason is that the derivative satisfies:
  d/dx (ln|x|) = 1/x

for both positive and negative x, as long as:
  x ≠ 0

Therefore the general formula is:
  ∫ 1/x dx = ln|x| + C

If the problem explicitly tells you that x > 0, then you can write:
  ln x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY THE POWER RULE DOES NOT WORK FOR 1/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rewrite:
  1/x = x⁻¹

You might try the Power Rule:
  ∫ x⁻¹ dx = x⁰/0

But division by zero is undefined.

Therefore:
  The Power Rule does not work when n = -1

Instead, we use:
  ∫ x⁻¹ dx = ln|x| + C

This is the major exception to the Power Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTEGRAL OF k/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If there is a constant in the numerator:
  ∫ k/x dx

use the Constant Multiple Rule:
  k∫ 1/x dx

Therefore:
  ∫ k/x dx = k ln|x| + C

Example:
  ∫ 5/x dx
  = 5 ln|x| + C

So:
  5 ln|x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH A NEGATIVE CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ -7/x dx

Move -7 outside:
  -7∫ 1/x dx

Therefore:
  -7 ln|x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INTEGRAL OF ln x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider:
  ∫ ln x dx

This is different from:
  ∫ 1/x dx

The answer is not simply:
  ln x / x

Instead, we use Integration by Parts.

The formula is:
  ∫ u dv = uv - ∫ v du

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DERIVING ∫ ln x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:
  u = ln x

Then:
  du = (1/x) dx

Choose:
  dv = dx

Therefore:
  v = x

Using Integration by Parts:
  ∫ ln x dx = x ln x - ∫ x(1/x) dx

Simplify:
  = x ln x - ∫ 1 dx
  = x ln x - x + C

Therefore:
  ∫ ln x dx = x ln x - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CHECKING ∫ ln x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take:
  F(x) = x ln x - x + C

Differentiate using the Product Rule:
  d/dx (x ln x) = ln x + x(1/x)
  = ln x + 1

Then:
  d/dx (-x) = -1

So:
  F'(x) = ln x + 1 - 1
  F'(x) = ln x

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRAL OF ln|x|
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The corresponding general form is:
  ∫ ln|x| dx = x ln|x| - x + C

for x ≠ 0.

This is useful because logarithms naturally involve absolute values when their arguments can be negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRAL OF log_a x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the change-of-base formula:
  log_a x = ln x / ln a

Therefore:
  ∫ log_a x dx = (1/ln a) ∫ ln x dx

Using:
  ∫ ln x dx = x ln x - x + C

we obtain:
  ∫ log_a x dx = (x ln x - x) / ln a + C

where:
  a > 0, a ≠ 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: ∫ log_2 x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using:
  ∫ log_a x dx = (x ln x - x) / ln a + C

with a = 2:
  ∫ log_2 x dx = (x ln x - x) / ln 2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LOGARITHMIC FORM ln(ax)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ ln(ax) dx

where a is a positive constant.

Use Integration by Parts:
  u = ln(ax)

Then:
  du = (1/x) dx

and choose:
  dv = dx

so:
  v = x

Therefore:
  ∫ ln(ax) dx = x ln(ax) - ∫ 1 dx

Thus:
  ∫ ln(ax) dx = x ln(ax) - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: ∫ ln(3x) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the formula:
  ∫ ln(ax) dx = x ln(ax) - x + C

we get:
  x ln(3x) - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INTEGRAL OF f'(x)/f(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most useful logarithmic integration patterns.

If you see:
  ∫ f'(x)/f(x) dx

then:
  ∫ f'(x)/f(x) dx = ln|f(x)| + C

This comes directly from the derivative:
  d/dx (ln|f(x)|) = f'(x)/f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: ∫ 2x/(x² + 1) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Look at the denominator:
  x² + 1

Its derivative is:
  2x

That means the integral has the form:
  f'(x)/f(x)

Therefore:
  ∫ 2x/(x² + 1) dx = ln(x² + 1) + C

Since x² + 1 > 0, the absolute value is unnecessary here.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: ∫ 3x²/(x³ + 5) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:
  f(x) = x³ + 5

Then:
  f'(x) = 3x²

Therefore:
  ∫ 3x²/(x³ + 5) dx = ln|x³ + 5| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: ∫ 5/(5x + 2) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The denominator is:
  5x + 2

Its derivative is:
  5

Therefore:
  ∫ 5/(5x + 2) dx

matches:
  f'(x)/f(x)

So:
  ln|5x + 2| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHEN THE NUMERATOR DOESN'T EXACTLY MATCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ 1/(2x + 3) dx

The derivative of the denominator is:
  2

but the numerator is only 1.

We need to account for the missing factor of 2:
  ∫ 1/(2x + 3) dx = (1/2) ∫ 2/(2x + 3) dx

Therefore:
  (1/2) ln|2x + 3| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. GENERAL LINEAR DENOMINATOR FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful formula is:
  ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C

where:
  a ≠ 0

Example:
  ∫ 1/(4x - 7) dx

Therefore:
  (1/4) ln|4x - 7| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A POLYNOMIAL DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (6x² + 4)/(2x³ + 4x + 1) dx

Notice the denominator:
  f(x) = 2x³ + 4x + 1

Differentiate:
  f'(x) = 6x² + 4

The numerator is exactly the derivative of the denominator.

Therefore:
  ∫ (6x² + 4)/(2x³ + 4x + 1) dx = ln|2x³ + 4x + 1| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. LOGARITHMIC INTEGRATION AND u-SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The pattern:
  f'(x)/f(x)

is also closely connected to u-substitution.

Consider:
  ∫ 2x/(x² + 4) dx

Let:
  u = x² + 4

Then:
  du = 2x dx

The integral becomes:
  ∫ 1/u du

Using:
  ∫ 1/u du = ln|u| + C

we get:
  ln|x² + 4| + C

Since x² + 4 > 0:
  ln(x² + 4) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON LOGARITHMIC INTEGRATION PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Learn to recognize these patterns:

Pattern 1:
  ∫ 1/x dx = ln|x| + C

Pattern 2:
  ∫ k/x dx = k ln|x| + C

Pattern 3:
  ∫ f'(x)/f(x) dx = ln|f(x)| + C

Pattern 4:
  ∫ ln x dx = x ln x - x + C

Pattern 5:
  ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. DIFFERENCE BETWEEN ∫ 1/x dx AND ∫ ln x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are easy to confuse.

Integral of 1/x:
  ∫ 1/x dx = ln|x| + C

Integral of ln x:
  ∫ ln x dx = x ln x - x + C

They are completely different problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Applying the Power Rule to 1/x
  Incorrect:
    ∫ x⁻¹ dx = x⁰/0
  Correct:
    ∫ 1/x dx = ln|x| + C

❌ Mistake 2: Forgetting the derivative of the denominator
  For:
    ∫ 1/(3x + 1) dx
  don't write:
    ln|3x + 1| + C
  Differentiate it:
    3/(3x + 1)
  There's an extra 3.
  Correct:
    (1/3) ln|3x + 1| + C

❌ Mistake 3: Confusing ln x with 1/x
  Remember:
    d/dx (ln x) = 1/x
  Therefore:
    ∫ 1/x dx = ln|x| + C
  But:
    ∫ ln x dx = x ln x - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (4/x + 6x/(x² + 1) + ln x) dx

Separate the terms:
  ∫ 4/x dx + ∫ 6x/(x² + 1) dx + ∫ ln x dx

First:
  ∫ 4/x dx = 4 ln|x|

Second:
  ∫ 6x/(x² + 1) dx = 3 ln(x² + 1)

Third:
  ∫ ln x dx = x ln x - x

Therefore:
  4 ln|x| + 3 ln(x² + 1) + x ln x - x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. IMPORTANT FORMULAS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important logarithmic integration formulas are:

  ∫ 1/x dx = ln|x| + C
  ∫ k/x dx = k ln|x| + C
  ∫ ln x dx = x ln x - x + C
  ∫ log_a x dx = (x ln x - x) / ln a + C
  ∫ f'(x)/f(x) dx = ln|f(x)| + C
  ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. THE MOST IMPORTANT RECOGNITION TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an integral like:
  ∫ f'(x)/f(x) dx

think:

  "Derivative of the bottom over the bottom."

Then immediately use:
  ln|bottom| + C

For example:
  ∫ 6x²/(2x³ + 7) dx

The derivative of the denominator is:
  6x²

so:
  ln|2x³ + 7| + C

That pattern is one of the most useful logarithmic integration techniques you'll encounter in Calculus.
  `,
  examples: [
    "∫ 1/x dx = ln|x| + C",
    "∫ 5/x dx = 5 ln|x| + C",
    "∫ ln x dx = x ln x - x + C",
    "∫ 2x/(x² + 1) dx = ln(x² + 1) + C",
    "∫ 1/(2x + 3) dx = (1/2) ln|2x + 3| + C",
    "∫ (6x² + 4)/(2x³ + 4x + 1) dx = ln|2x³ + 4x + 1| + C",
    "∫ (4/x + 6x/(x² + 1) + ln x) dx = 4 ln|x| + 3 ln(x² + 1) + x ln x - x + C",
  ],
};

export default topic;