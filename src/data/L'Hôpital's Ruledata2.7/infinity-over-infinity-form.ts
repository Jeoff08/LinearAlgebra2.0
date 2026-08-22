// filename: infinity-over-infinity-form.ts

const topic = {
  id: "infinity-over-infinity-form",
  title: "The ∞/∞ Indeterminate Form",
  summary:
    "A common indeterminate form encountered when evaluating limits where both the numerator and denominator grow without bound, requiring comparison of growth rates, algebraic simplification, or L'Hôpital's Rule.",
  details: `
The ∞/∞ form is one of the common indeterminate forms encountered when evaluating limits.

It occurs when both the numerator and denominator grow without bound:
  lim(x→a) f(x)/g(x) = ∞/∞

This does not mean the answer is simply 1. The expression is indeterminate, meaning we need additional algebra or calculus techniques to determine the actual limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES ∞/∞ MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→∞) f(x)/g(x)

and both functions approach infinity:
  f(x) → ∞
and:
  g(x) → ∞

Then we have:
  ∞/∞

The important point is that different functions can grow at different rates.

For example:
  lim(x→∞) x/x = 1
but:
  lim(x→∞) x²/x = ∞
while:
  lim(x→∞) x/x² = 0

All three involve an ∞/∞ situation, but they produce completely different results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT CALLED AN INDETERMINATE FORM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because knowing that both parts approach infinity isn't enough to determine the result.

For example:

Example A:
  lim(x→∞) x/x
  Both numerator and denominator approach infinity: ∞/∞
  But: x/x = 1
  Therefore: 1

Example B:
  lim(x→∞) x²/x
  Again: ∞/∞
  But: x²/x = x
  Therefore: ∞

Example C:
  lim(x→∞) x/x²
  Again: ∞/∞
  But: x/x² = 1/x
  Therefore: 0

So:
  ∞/∞ is indeterminate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MAIN METHOD: COMPARE GROWTH RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For many ∞/∞ limits, especially rational functions, compare the highest powers of x.

Consider:
  lim(x→∞) (3x⁴ + 2x² - 5)/(6x⁴ - x + 1)

The highest power in the numerator is x⁴ and the highest power in the denominator is also x⁴.

Divide everything by x⁴:
  (3 + 2/x² - 5/x⁴)/(6 - 1/x³ + 1/x⁴)

As x → ∞:
  2/x² → 0
  5/x⁴ → 0
  1/x³ → 0
  1/x⁴ → 0

Therefore:
  (3 + 0 - 0)/(6 - 0 + 0) = 3/6 = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POLYNOMIAL DEGREE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions:
  lim(x→∞) (aₙxⁿ + ...)/(bₘxᵐ + ...)

you can compare the degrees.

Case 1: Same degree
  If n = m, then:
    Limit = aₙ/bₘ

Example:
  lim(x→∞) (2x³ - 7)/(5x³ + 2)
  Same degree: 3 = 3
  Therefore: 2/5

Case 2: Numerator degree is smaller
  If n < m, then:
    Limit = 0

Example:
  lim(x→∞) (4x² + 1)/(x⁵ + 3)
  Since 2 < 5, the denominator grows much faster.
  Therefore: 0

Case 3: Numerator degree is larger
  If n > m, then the numerator grows faster.
  Usually the limit is ±∞, depending on the signs.

Example:
  lim(x→∞) (x⁵ + 2)/(3x² + 1)
  Since 5 > 2, the numerator grows faster.
  Therefore: ∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. USING L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important method for an ∞/∞ form is L'Hôpital's Rule.

If:
  lim(x→a) f(x)/g(x)

produces:
  ∞/∞

then, under the appropriate conditions, we can differentiate the numerator and denominator separately:
  lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)

if the latter limit exists.

Example:
  Evaluate: lim(x→∞) x²/eˣ

As x → ∞:
  x² → ∞
and:
  eˣ → ∞

Therefore:
  ∞/∞

Apply L'Hôpital's Rule:
  lim(x→∞) x²/eˣ = lim(x→∞) 2x/eˣ

Still:
  ∞/∞

Apply L'Hôpital again:
  lim(x→∞) 2x/eˣ = lim(x→∞) 2/eˣ

Since eˣ → ∞, we get:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GROWTH RATE HIERARCHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful idea for ∞/∞ limits is that some types of functions grow faster than others.

A common hierarchy is:
  ln(x) << xᵖ << aˣ << x!

for appropriate positive constants p and a > 1.

In simpler terms:
  Logarithmic functions grow slower than polynomial functions, which grow slower than exponential functions.

For example:
  ln(x) << x << x² << x⁵ << 2ˣ

This helps predict many limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH A LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln(x)/x

Both approach infinity:
  ∞/∞

Apply L'Hôpital:
  lim(x→∞) ln(x)/x = lim(x→∞) (1/x)/1

Therefore:
  lim(x→∞) 1/x = 0

The reason is that x grows much faster than ln(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) x³/eˣ

This is:
  ∞/∞

Apply L'Hôpital:
  lim(x→∞) x³/eˣ = lim(x→∞) 3x²/eˣ

Again:
  ∞/∞

Apply again:
  lim(x→∞) 3x²/eˣ = lim(x→∞) 6x/eˣ

Again:
  ∞/∞

Apply again:
  lim(x→∞) 6x/eˣ = lim(x→∞) 6/eˣ

Therefore:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH SQUARE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) √(x² + 3x)/x

Both numerator and denominator approach infinity:
  ∞/∞

Factor x² inside the square root:
  √(x² + 3x)/x = √(x²(1 + 3/x))/x

Since x > 0 as x → ∞:
  = x√(1 + 3/x)/x

Cancel x:
  = √(1 + 3/x)

As x → ∞:
  3/x → 0

Therefore:
  √(1 + 0) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ∞/∞ VS. OTHER INDETERMINATE FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The major indeterminate forms you should recognize are:

  Form            Name
  ────────────────────────────────────
  0/0             Zero/Zero form
  ∞/∞             Infinity/Infinity form
  0 · ∞           Zero times infinity
  ∞ − ∞           Infinity minus infinity
  0^0             Zero to the zero power
  1^∞             One to infinity
  ∞^0             Infinity to the zero power

The important thing is:

  Indeterminate does not mean undefined

It means more work is required to determine the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON TECHNIQUES FOR ∞/∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter ∞/∞, you can consider:

Method 1 — Simplify algebraically
  Factor, cancel, rationalize, or divide by the dominant term.

Method 2 — Compare degrees
  Especially useful for rational functions.

Method 3 — Divide by the highest power
  For polynomial fractions.

Method 4 — L'Hôpital's Rule
  Differentiate numerator and denominator.

Method 5 — Compare growth rates
  Useful when logarithms, polynomials, exponentials, etc. appear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                       Method
  ───────────────────────────────────────────────────────────────────
  Rational function ∞/∞           Divide by highest power
  Same degree (n = m)             Limit = leading coefficient ratio
  Numerator degree smaller        Limit = 0
  Numerator degree larger         Limit = ±∞
  With logarithms                 L'Hôpital's Rule or growth rates
  With exponentials               L'Hôpital's Rule or growth rates
  With square roots               Factor and simplify

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. KEY TAKEAWAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important idea is:

  ∞/∞ is an indeterminate form

It does not automatically equal 1.

You must determine which part grows faster.

For rational functions:
  Numerator Degree vs. Denominator Degree
    n < m  →  Limit = 0
    n = m  →  Limit = aₙ/bₘ
    n > m  →  Limit = ±∞ (usually)

And when algebraic simplification is difficult, L'Hôpital's Rule is one of the main tools for resolving an ∞/∞ limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. PROBLEM-SOLVING FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a limit:
  lim(x→a) f(x)/g(x)

Substitute

↓

Do you get ∞/∞?

↓

Yes → Don't stop.

↓

Is it a rational function?

If yes:
  Compare degrees
  Divide by highest power

If no:
  Try L'Hôpital's Rule
  Compare growth rates

↓

Evaluate the resulting limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The ∞/∞ form is not a final answer.

It is a signal that direct substitution cannot determine the limit.

Remember:
  ∞/∞ ≠ 1
and:
  ∞/∞ ≠ ∞

Instead:
  ∞/∞ ⇒ Use another technique

The general process is:

  Substitute → ∞/∞ → Compare growth rates → or L'Hôpital → Evaluate

Easy way to remember:

  ∞/∞ means "which one grows faster?"

It tells you that both the numerator and denominator are growing without bound, and you must determine which one dominates. That comparison ultimately determines the actual limit.
  `,
  examples: [
    "lim(x→∞) (3x⁴ + 2x² - 5)/(6x⁴ - x + 1) → divide by x⁴ → 1/2",
    "lim(x→∞) (2x³ - 7)/(5x³ + 2) → same degree → 2/5",
    "lim(x→∞) (4x² + 1)/(x⁵ + 3) → numerator smaller → 0",
    "lim(x→∞) (x⁵ + 2)/(3x² + 1) → numerator larger → ∞",
    "lim(x→∞) x²/eˣ → L'Hôpital twice → 0",
    "lim(x→∞) ln(x)/x → L'Hôpital → 0",
    "lim(x→∞) √(x² + 3x)/x → factor and simplify → 1",
  ],
};

export default topic;