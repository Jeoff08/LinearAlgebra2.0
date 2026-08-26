// filename: IndeterminateForm00.ts

const topic = {
  id: "indeterminate-form-00",
  title: "Indeterminate Form (0/0)",
  summary:
    "A comprehensive guide to handling the indeterminate form 0/0 in limits. Covers factoring, rationalization, trigonometric limits, L'Hôpital's Rule, and a general strategy for evaluating limits.",
  details: `
The indeterminate form 0/0 is one of the most important special cases encountered when evaluating limits in calculus. It occurs when direct substitution of the limiting value into a function produces:

  0/0.

This does not mean that the limit is zero or that the answer is simply undefined. Instead, it tells us that more algebraic or calculus techniques are needed to determine the actual limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES 0/0 MEAN?

Suppose we want to evaluate:

  lim_{x→a} f(x)/g(x).

If direct substitution gives:

  f(a)/g(a) = 0/0,

then the expression has an indeterminate form.

The word indeterminate means that the expression alone does not tell us what the limit is.

For example:

  lim_{x→1} (x² - 1)/(x - 1).

Substituting x = 1:

  (1² - 1)/(1 - 1) = 0/0.

At this point, we cannot conclude:

  lim_{x→1} (x² - 1)/(x - 1) = 0.

Instead, we must simplify the expression first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS 0/0 INDETERMINATE?

Consider several expressions that all produce 0/0, but have completely different limits.

Example A:

  lim_{x→0} x/x

For x ≠ 0:

  x/x = 1.

Therefore:

  lim_{x→0} x/x = 1.

Example B:

  lim_{x→0} x²/x

Simplify:

  x²/x = x.

Therefore:

  lim_{x→0} x²/x = 0.

Example C:

  lim_{x→0} x/x²

Simplify:

  x/x² = 1/x.

As x→0⁺:

  1/x → +∞,

while as x→0⁻:

  1/x → -∞.

Thus the two-sided limit does not exist.

So the same initial form 0/0 can lead to:

  1, 0, or DNE.

That is why 0/0 is called indeterminate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST COMMON WAY TO HANDLE 0/0: FACTORING

One of the easiest techniques is to factor the numerator and denominator and cancel common factors.

Consider:

  lim_{x→1} (x² - 1)/(x - 1).

Step 1: Substitute

  (1² - 1)/(1 - 1) = 0/0.

We have an indeterminate form.

Step 2: Factor

Use the difference of squares:

  x² - 1 = (x - 1)(x + 1).

Therefore:

  (x² - 1)/(x - 1) = ((x - 1)(x + 1))/(x - 1).

Step 3: Cancel the common factor

  = x + 1.

Step 4: Evaluate the limit

  lim_{x→1} (x + 1) = 2.

Therefore:

  lim_{x→1} (x² - 1)/(x - 1) = 2.

The important idea is that we don't evaluate the original expression at x = 1. We simplify the expression for values near 1, then evaluate the resulting limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE USING A QUADRATIC

Evaluate:

  lim_{x→2} (x² - 4)/(x - 2).

Direct substitution gives:

  (4 - 4)/(2 - 2) = 0/0.

Factor:

  x² - 4 = (x - 2)(x + 2).

Therefore:

  (x² - 4)/(x - 2) = x + 2.

Now evaluate:

  lim_{x→2} (x + 2) = 4.

Thus:

  4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RATIONALIZING THE EXPRESSION

Sometimes the 0/0 form appears because of a square root. In this situation, rationalization can be useful.

Consider:

  lim_{x→0} (√(x + 1) - 1)/x.

Direct substitution gives:

  (√1 - 1)/0 = 0/0.

Multiply the numerator and denominator by the conjugate:

  (√(x + 1) - 1)/x · (√(x + 1) + 1)/(√(x + 1) + 1).

Using:

  (a - b)(a + b) = a² - b²,

we obtain:

  ((x + 1) - 1) / (x(√(x + 1) + 1)).

Simplify:

  x / (x(√(x + 1) + 1)).

Cancel x:

  1 / (√(x + 1) + 1).

Now evaluate:

  lim_{x→0} 1 / (√(x + 1) + 1) = 1 / (1 + 1).

Therefore:

  1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. USING THE DIFFERENCE-OF-CUBES FORMULA

Factoring is also useful for higher powers.

Consider:

  lim_{x→2} (x³ - 8)/(x - 2).

Direct substitution:

  (2³ - 8)/(2 - 2) = 0/0.

Use:

  a³ - b³ = (a - b)(a² + ab + b²).

Thus:

  x³ - 8 = (x - 2)(x² + 2x + 4).

Therefore:

  (x³ - 8)/(x - 2) = x² + 2x + 4.

Now substitute x = 2:

  2² + 2(2) + 4 = 4 + 4 + 4 = 12.

Hence:

  12.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. USING TRIGONOMETRIC IDENTITIES

Some 0/0 limits involve trigonometric functions.

A fundamental limit is:

  lim_{x→0} sin x / x = 1.

This is extremely important because many more complicated limits can be transformed into this form.

Example

Evaluate:

  lim_{x→0} sin(3x) / x.

Rewrite:

  sin(3x)/x = 3 · sin(3x)/(3x).

Therefore:

  lim_{x→0} 3 · sin(3x)/(3x).

Since:

  lim_{u→0} sin u / u = 1,

we obtain:

  3(1) = 3.

Thus:

  3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ANOTHER TRIGONOMETRIC EXAMPLE

Evaluate:

  lim_{x→0} (1 - cos x) / x².

Direct substitution gives:

  (1 - 1)/0² = 0/0.

Use the identity:

  1 - cos x = 2 sin²(x/2).

Therefore:

  (1 - cos x)/x² = 2 sin²(x/2)/x².

Rewrite:

  = (1/2) · (sin(x/2)/(x/2))².

As x→0:

  sin(x/2)/(x/2) → 1.

Therefore:

  (1/2)(1)² = 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. USING L'HÔPITAL'S RULE

When algebraic simplification is difficult, L'Hôpital's Rule can be used for a 0/0 limit when its conditions are satisfied.

If:

  lim_{x→a} f(x)/g(x)

has the form 0/0, then under the appropriate conditions:

  lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x)

provided the latter limit exists.

Example

Evaluate:

  lim_{x→0} sin x / x.

Direct substitution:

  sin 0 / 0 = 0/0.

Differentiate numerator and denominator:

  d/dx (sin x) = cos x,

and:

  d/dx (x) = 1.

Therefore:

  lim_{x→0} cos x / 1.

Substitute:

  cos 0 = 1.

Thus:

  1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. REPEATED APPLICATION OF L'HÔPITAL'S RULE

Sometimes applying L'Hôpital's Rule once still produces 0/0.

For example:

  lim_{x→0} (eˣ - 1 - x)/x².

Direct substitution:

  (1 - 1 - 0)/0 = 0/0.

Apply L'Hôpital's Rule:

  (eˣ - 1)/(2x).

Substituting x = 0:

  (1 - 1)/0 = 0/0.

Apply L'Hôpital's Rule again:

  eˣ/2.

Now substitute x = 0:

  e⁰/2 = 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT: 0/0 IS NOT THE SAME AS 0

This distinction is very important.

If:

  0/0

appears after direct substitution, do not say the answer is zero.

Instead:

  0/0 is an indeterminate form.

It means we need to investigate the behavior of the function near the point.

Compare:

Ordinary zero:

  0/5 = 0.

This is definitely zero.

Indeterminate form:

  0/0.

This does not determine the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. 0/0 VS. UNDEFINED

There is an important distinction between undefined and indeterminate.

Undefined expression:

  5/0

is undefined.

Indeterminate form:

  0/0

is an indeterminate form when it occurs in a limit.

For example:

  lim_{x→1} (x² - 1)/(x - 1)

has 0/0 after substitution, but the limit is actually:

  2.

So the original expression may be undefined at x = 1, while its limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A GENERAL STRATEGY FOR 0/0 LIMITS

When you encounter:

  lim_{x→a} f(x)/g(x)

and direct substitution produces:

  0/0,

use this general procedure:

Step 1 — Substitute

Find:

  f(a)/g(a).

Step 2 — Confirm the form

If you obtain:

  0/0,

recognize it as an indeterminate form.

Step 3 — Look for simplification

Depending on the problem, try:

  Factoring
  Canceling common factors
  Rationalizing
  Trigonometric identities
  Special trigonometric limits
  L'Hôpital's Rule

Step 4 — Evaluate the simplified limit

After simplification, substitute the limiting value again.

Step 5 — If necessary, repeat

If the result is still 0/0, another technique may be necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON TECHNIQUES AT A GLANCE

  Situation                       Useful Technique
  ──────────────────────────────────────────────────────────────
  Polynomial 0/0                  Factoring
  Difference of squares           a² - b² = (a - b)(a + b)
  Difference of cubes             a³ - b³ = (a - b)(a² + ab + b²)
  Square roots                    Rationalization
  Trigonometric functions         Trig identities
  sin x / x                       Fundamental trig limit
  Complicated numerator/denominator  L'Hôpital's Rule
  Repeated 0/0                    Apply L'Hôpital again if appropriate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY EXAMPLES TO REMEMBER

Example 1:

  lim_{x→1} (x² - 1)/(x - 1) = 2

Example 2:

  lim_{x→0} (√(x + 1) - 1)/x = 1/2

Example 3:

  lim_{x→0} sin x / x = 1

Example 4:

  lim_{x→2} (x³ - 8)/(x - 2) = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER

  Difference of squares:   a² - b² = (a - b)(a + b)
  Difference of cubes:     a³ - b³ = (a - b)(a² + ab + b²)
  Fundamental trig limit:  lim_{x→0} sin x / x = 1
  L'Hôpital's Rule:        lim f/g = lim f'/g' (for 0/0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY

The most important thing to remember is:

  0/0 does not give the answer. It tells you that further work is required.

When you see:

  0/0

during a limit, think:

  "I cannot substitute directly. I need to simplify or use an appropriate limit technique."

The goal is to discover what the function approaches as x gets arbitrarily close to the specified value—not necessarily what the function equals exactly at that value.

Easy way to remember: 0/0 is a warning sign, not an answer. Factor, rationalize, use trig identities, or apply L'Hôpital's Rule to find the true limit.
  `,
  examples: [
    "lim_{x→1} (x² - 1)/(x - 1) = 2 (factoring)",
    "lim_{x→0} (√(x + 1) - 1)/x = 1/2 (rationalizing)",
    "lim_{x→2} (x³ - 8)/(x - 2) = 12 (difference of cubes)",
    "lim_{x→0} sin x / x = 1 (fundamental trig limit)",
    "lim_{x→0} sin(3x)/x = 3 (fundamental trig limit)",
    "lim_{x→0} (1 - cos x)/x² = 1/2 (trig identity)",
    "lim_{x→0} (eˣ - 1 - x)/x² = 1/2 (L'Hôpital's Rule, twice)",
    "0/5 = 0 (definite zero), 0/0 = indeterminate (needs work)",
  ],
};

export default topic;