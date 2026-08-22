// filename: 0-over-0-form.ts

const topic = {
  id: "0-over-0-form",
  title: "The 0/0 Indeterminate Form",
  summary:
    "The most common indeterminate form encountered when evaluating limits in calculus, where direct substitution produces 0/0, requiring further analysis through factoring, rationalizing, trigonometric identities, or L'Hôpital's Rule.",
  details: `
The 0/0 form is the most common indeterminate form encountered when evaluating limits in calculus.

It occurs when direct substitution into a limit produces:
  0/0

However, this does not mean that the limit equals 0, and it does not mean that the limit does not exist.

Instead:
  0/0 means that further analysis is required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE 0/0 FORM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate:
  lim(x→a) f(x)/g(x)

If direct substitution gives:
  f(a) = 0
and:
  g(a) = 0

then we obtain:
  f(a)/g(a) = 0/0

This is called the 0/0 indeterminate form.

The important point is:
  0/0 does not determine the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS 0/0 INDETERMINATE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0) x/x

Direct substitution gives:
  0/0

But for every x ≠ 0:
  x/x = 1

Therefore:
  lim(x→0) x/x = 1

Now consider:
  lim(x→0) x²/x

Again:
  0/0

But:
  x²/x = x

Therefore:
  lim(x→0) x²/x = 0

So the same 0/0 form can lead to different answers.

That's why it is indeterminate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. IMPORTANT DISTINCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not confuse:
  0/0
with:
  1/0

They are very different.

0/0:
  Indeterminate form
  It means the limit needs further analysis.

1/0:
  Undefined
  It often indicates that the function may approach:
    +∞, -∞
  or that the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC EXAMPLE: FACTORING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→2) (x² - 4)/(x - 2)

Step 1: Direct substitution
  (2² - 4)/(2 - 2) = 0/0

We have an indeterminate form.

Step 2: Factor
  x² - 4 = (x - 2)(x + 2)

Therefore:
  (x² - 4)/(x - 2) = ((x - 2)(x + 2))/(x - 2)

Cancel:
  = x + 2

Step 3: Evaluate the limit
  lim(x→2) (x + 2) = 4

Therefore:
  lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY CAN WE CANCEL x - 2?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Technically:
  ((x - 2)(x + 2))/(x - 2) = x + 2

only when:
  x ≠ 2

But limits are concerned with what happens near x = 2, not necessarily at x = 2.

Therefore, cancellation is valid for analyzing the limit.

This is one of the most important ideas behind removable discontinuities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: DIFFERENCE OF CUBES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→3) (x³ - 27)/(x - 3)

Direct substitution:
  (27 - 27)/(3 - 3) = 0/0

Factor:
  x³ - 27 = (x - 3)(x² + 3x + 9)

Therefore:
  (x³ - 27)/(x - 3) = x² + 3x + 9

Now substitute:
  3² + 3(3) + 9 = 9 + 9 + 9 = 27

Therefore:
  lim(x→3) (x³ - 27)/(x - 3) = 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: RATIONALIZING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the 0/0 form occurs because of a square root.

Consider:
  lim(x→0) (√(x + 1) - 1)/x

Direct substitution:
  (1 - 1)/0 = 0/0

We have an indeterminate form.

Rationalize:
  Multiply by the conjugate:
    (√(x + 1) - 1)/x · (√(x + 1) + 1)/(√(x + 1) + 1)

The numerator becomes:
  (x + 1) - 1 = x

Therefore:
  x/(x(√(x + 1) + 1))

Cancel x:
  1/(√(x + 1) + 1)

Now substitute:
  1/(√1 + 1) = 1/2

Therefore:
  lim(x→0) (√(x + 1) - 1)/x = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: TRIGONOMETRIC 0/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0) sin(x)/x

Direct substitution:
  sin(0)/0 = 0/0

This is indeterminate.

A fundamental trigonometric limit is:
  lim(x→0) sin(x)/x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ANOTHER TRIGONOMETRIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (1 - cos(x))/x²

Direct substitution gives:
  (1 - 1)/0 = 0/0

Use the identity:
  1 - cos(x) = 2sin²(x/2)

Then:
  (1 - cos(x))/x² = 2sin²(x/2)/x²

Rewrite:
  = (1/2)(sin(x/2)/(x/2))²

As x → 0, we know:
  sin(x/2)/(x/2) → 1

Therefore:
  lim(x→0) (1 - cos(x))/x² = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. USING L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The 0/0 form is one of the primary situations where L'Hôpital's Rule can be used.

If:
  lim(x→a) f(x)/g(x)

produces:
  0/0

then, under the appropriate conditions:
  lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)

provided the resulting limit exists or has the appropriate infinite behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE USING L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (eˣ - 1)/x

Direct substitution:
  (e⁰ - 1)/0 = 0/0

Apply L'Hôpital's Rule.

Differentiate the numerator:
  d/dx (eˣ - 1) = eˣ

Differentiate the denominator:
  d/dx (x) = 1

Therefore:
  lim(x→0) (eˣ - 1)/x = lim(x→0) eˣ/1

Evaluate:
  e⁰ = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→1) ln(x)/(x - 1)

Direct substitution:
  ln(1)/(1 - 1) = 0/0

Apply L'Hôpital's Rule:
  d/dx (ln(x)) = 1/x
and:
  d/dx (x - 1) = 1

Therefore:
  lim(x→1) ln(x)/(x - 1) = lim(x→1) (1/x)/1 = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON TECHNIQUES FOR 0/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter 0/0, try the following techniques.

1. Factoring:
  Useful for polynomial expressions:
    x² - a²
    x³ - a³

2. Canceling Common Factors:
  After factoring:
    (x - a)h(x)/(x - a) becomes h(x)

3. Rationalizing:
  Useful when square roots appear:
    √(x + a) - b
  Multiply by the conjugate.

4. Combining Fractions:
  Sometimes the numerator needs to be simplified before the limit can be evaluated.

5. Trigonometric Identities:
  Useful for expressions involving:
    sin(x), cos(x), tan(x)

6. Standard Limits:
  Important limits include:
    lim(x→0) sin(x)/x = 1
    lim(x→0) tan(x)/x = 1
    lim(x→0) (1 - cos(x))/x² = 1/2

7. L'Hôpital's Rule:
  Use when the expression is in 0/0 or ∞/∞ form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A GENERAL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  lim(x→a) f(x)/g(x)

Step 1:
  Try direct substitution.

Step 2:
  If you get 0/0, don't stop.

Step 3:
  Look at the expression.
  Ask: Can I factor it?
  If yes, factor.

Step 4:
  Ask: Can I rationalize it?
  If radicals are present, try the conjugate.

Step 5:
  Ask: Is there a useful trigonometric identity?
  Use one if appropriate.

Step 6:
  If appropriate, use L'Hôpital's Rule.

Step 7:
  Evaluate the resulting limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. 0/0 DOES NOT MEAN THE LIMIT IS ZERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is perhaps the most important concept.

Suppose:
  lim(x→1) (x² - 1)/(x - 1)

Direct substitution gives:
  0/0

But:
  x² - 1 = (x - 1)(x + 1)

so:
  (x² - 1)/(x - 1) = x + 1

Therefore:
  lim(x→1) (x + 1) = 2

Hence:
  0/0 → 2

The 0/0 form itself is not the answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. 0/0 CAN PRODUCE DIFFERENT RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are some examples:

  lim(x→0) x/x = 1
  lim(x→0) x²/x = 0
  lim(x→0) 5x/x = 5
  lim(x→0) x³/x² = 0

Each initially produces 0/0, but the limits are different.

This proves why:
  0/0 is indeterminate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. 0/0 AND REMOVABLE DISCONTINUITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A 0/0 limit often occurs at a removable discontinuity.

For example:
  f(x) = (x² - 1)/(x - 1)

Factor:
  f(x) = x + 1

for x ≠ 1.

At x = 1, the original function is undefined.

But the limit is:
  lim(x→1) f(x) = 2

Graphically, the function behaves like y = x + 1 with a hole at (1, 2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. 0/0 AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definition of the derivative itself often produces a 0/0 form.

Recall:
  f'(x) = lim(h→0) (f(x + h) - f(x))/h

For example, let:
  f(x) = x²

Then:
  f'(x) = lim(h→0) ((x + h)² - x²)/h

Expand:
  = lim(h→0) (x² + 2xh + h² - x²)/h
  = lim(h→0) (2xh + h²)/h

Factor:
  = lim(h→0) h(2x + h)/h

Cancel:
  = lim(h→0) (2x + h)

Therefore:
  f'(x) = 2x

The original derivative expression produced 0/0 when h = 0, but algebraic simplification resolves it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1:
  Thinking 0/0 = 0
  ❌ Incorrect.

Mistake 2:
  Thinking 0/0 = 1
  ❌ Also incorrect.

Mistake 3:
  Stopping immediately after getting 0/0.
  You need to continue analyzing.

Mistake 4:
  Applying L'Hôpital's Rule without checking the form.
  L'Hôpital's Rule is primarily for 0/0 and ∞/∞.

Mistake 5:
  Forgetting to simplify first.
  Sometimes factoring or rationalizing makes the problem much easier than using L'Hôpital's Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                        Method
  ───────────────────────────────────────────────────────────────
  Polynomial 0/0                   Factor and cancel
  Difference of powers             Factor
  Radical 0/0                      Rationalize
  Trigonometric 0/0                Use identities/standard limits
  Exponential 0/0                  Simplify or L'Hôpital
  Logarithmic 0/0                  Simplify or L'Hôpital
  Complicated 0/0                  L'Hôpital's Rule

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. PROBLEM-SOLVING FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a limit:
  lim(x→a) f(x)

Substitute

↓

Do you get 0/0?

↓

Yes → Don't stop.

↓

Try:
  Factor

↓

If necessary:
  Rationalize

↓

If trigonometric:
  Use identities

↓

If appropriate:
  L'Hôpital's Rule

↓

Evaluate the resulting limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Difference of squares:
    a² - b² = (a - b)(a + b)

  Difference of cubes:
    a³ - b³ = (a - b)(a² + ab + b²)

  Sum of cubes:
    a³ + b³ = (a + b)(a² - ab + b²)

  Fundamental trigonometric limit:
    lim(x→0) sin(x)/x = 1

  L'Hôpital's Rule:
    lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)
    when the original limit has the appropriate 0/0 or ∞/∞ form and the rule's conditions are satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The 0/0 form is not a final answer.

It is a warning sign that direct substitution cannot determine the limit.

Remember:
  0/0 ≠ 0
and:
  0/0 ≠ 1

Instead:
  0/0 ⇒ Use another technique

The general process is:

  Substitute → 0/0 → Simplify/Factor/Rationalize → or L'Hôpital → Evaluate

Easy way to remember:

  0/0 means "I don't know yet."

It tells you that the numerator and denominator are both approaching zero, and you must investigate how quickly they approach zero relative to each other. That comparison ultimately determines the actual limit.
  `,
  examples: [
    "lim(x→2) (x² - 4)/(x - 2) → factor → 4",
    "lim(x→3) (x³ - 27)/(x - 3) → factor → 27",
    "lim(x→0) (√(x+1) - 1)/x → rationalize → 1/2",
    "lim(x→0) sin(x)/x → standard limit → 1",
    "lim(x→0) (1 - cos(x))/x² → trig identity → 1/2",
    "lim(x→0) (eˣ - 1)/x → L'Hôpital → 1",
    "lim(x→1) ln(x)/(x - 1) → L'Hôpital → 1",
  ],
};

export default topic;