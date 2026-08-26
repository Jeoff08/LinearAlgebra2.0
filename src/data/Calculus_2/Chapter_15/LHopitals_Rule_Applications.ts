// filename: LHopitalsRuleApplications.ts

const topic = {
  id: "lhopitals-rule-applications",
  title: "L'Hôpital's Rule Applications",
  summary:
    "A comprehensive guide to applying L'Hôpital's Rule for evaluating limits. Covers the two main indeterminate forms (0/0 and ∞/∞), transformations for other forms, repeated applications, and common pitfalls.",
  details: `
L'Hôpital's Rule is one of the most useful techniques for evaluating certain difficult limits, especially limits that produce the indeterminate forms:

  0/0

or:

  ∞/∞.

It allows us to replace a difficult quotient of functions with a quotient involving their derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS L'HÔPITAL'S RULE?

Suppose we want to evaluate:

  lim_{x→a} f(x)/g(x).

If direct substitution produces either:

  0/0

or:

  ∞/∞,

then, under the appropriate conditions, L'Hôpital's Rule states that:

  lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x)

provided the new limit exists or has the appropriate infinite behavior.

In simpler words:

  If a quotient produces 0/0 or ∞/∞, differentiate the numerator and denominator separately, then evaluate the new limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IMPORTANT: DIFFERENTIATE SEPARATELY

One of the most important rules is:

  f(x)/g(x) → f'(x)/g'(x)

You differentiate the numerator by itself and the denominator by itself.

You do not use the quotient rule.

For example:

  lim_{x→0} sin x / x.

Differentiate:

  d/dx (sin x) = cos x

and:

  d/dx (x) = 1.

So:

  sin x / x → cos x / 1.

Then:

  cos 0 = 1.

Therefore:

  lim_{x→0} sin x / x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHEN CAN L'HÔPITAL'S RULE BE USED?

The two most important indeterminate forms are:

Form 1:

  0/0

Form 2:

  ∞/∞

These are the standard forms for direct application of L'Hôpital's Rule.

You should not automatically apply L'Hôpital's Rule to expressions such as:

  0·∞,
  ∞−∞,
  0⁰,
  1^∞,

or:

  ∞⁰.

Those expressions must first be rewritten into a suitable quotient form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC APPLICATION: 0/0

Consider:

  lim_{x→0} sin x / x.

Step 1: Direct substitution

  sin 0 / 0 = 0/0.

This is indeterminate.

Step 2: Apply L'Hôpital's Rule

Differentiate numerator:

  (sin x)' = cos x.

Differentiate denominator:

  (x)' = 1.

Thus:

  lim_{x→0} cos x / 1.

Step 3: Substitute

  cos 0 / 1 = 1.

Therefore:

  1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: POLYNOMIAL FUNCTIONS

Evaluate:

  lim_{x→2} (x² - 4)/(x - 2).

Direct substitution:

  (2² - 4)/(2 - 2) = 0/0.

Apply L'Hôpital's Rule:

  d/dx (x² - 4) = 2x

and:

  d/dx (x - 2) = 1.

Therefore:

  lim_{x→2} 2x / 1.

Substitute:

  2(2) = 4.

Thus:

  4.

Although factoring would be simpler here, L'Hôpital's Rule also works.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE INVOLVING EXPONENTIAL FUNCTIONS

Evaluate:

  lim_{x→0} (eˣ - 1)/x.

Direct substitution gives:

  (e⁰ - 1)/0 = 0/0.

Apply L'Hôpital's Rule:

  d/dx (eˣ - 1) = eˣ

and:

  d/dx (x) = 1.

Therefore:

  lim_{x→0} eˣ / 1.

Substitute:

  e⁰ = 1.

Hence:

  1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE INVOLVING LOGARITHMS

Evaluate:

  lim_{x→1} ln x / (x - 1).

Direct substitution:

  ln 1 / (1 - 1) = 0/0.

Apply L'Hôpital's Rule:

  (ln x)' = 1/x

and:

  (x - 1)' = 1.

Therefore:

  lim_{x→1} (1/x)/1.

Substitute:

  1/1 = 1.

Thus:

  1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. APPLICATION TO ∞/∞

L'Hôpital's Rule is also useful when both numerator and denominator approach infinity.

Consider:

  lim_{x→∞} x²/eˣ.

As x→∞:

  x² → ∞

and:

  eˣ → ∞.

Thus:

  ∞/∞.

Apply L'Hôpital's Rule:

  d/dx (x²) = 2x

and:

  d/dx (eˣ) = eˣ.

Therefore:

  lim_{x→∞} 2x/eˣ.

This is still:

  ∞/∞.

So we can apply L'Hôpital's Rule again.

Differentiate:

  (2x)' = 2

and:

  (eˣ)' = eˣ.

Thus:

  lim_{x→∞} 2/eˣ.

Since:

  eˣ → ∞,

we obtain:

  0.

Therefore:

  lim_{x→∞} x²/eˣ = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. APPLYING L'HÔPITAL'S RULE MORE THAN ONCE

Sometimes one application does not remove the indeterminate form.

For example:

  lim_{x→0} (eˣ - 1 - x)/x².

First substitution:

  (1 - 1 - 0)/0 = 0/0.

Apply L'Hôpital:

  (eˣ - 1)/(2x).

Substitute x = 0:

  (1 - 1)/0 = 0/0.

Still indeterminate.

Apply L'Hôpital again:

  eˣ/2.

Now substitute:

  e⁰/2 = 1/2.

Therefore:

  lim_{x→0} (eˣ - 1 - x)/x² = 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. APPLICATION TO TRIGONOMETRIC FUNCTIONS

Consider:

  lim_{x→0} (x - sin x)/x³.

Direct substitution gives:

  (0 - sin 0)/0³ = 0/0.

Apply L'Hôpital:

  d/dx (x - sin x) = 1 - cos x

and:

  d/dx (x³) = 3x².

Therefore:

  lim_{x→0} (1 - cos x)/(3x²).

Substitution still gives:

  0/0.

Apply L'Hôpital again:

  sin x/(6x).

Still:

  0/0.

Apply L'Hôpital a third time:

  cos x/6.

Now substitute:

  cos 0/6 = 1/6.

Therefore:

  lim_{x→0} (x - sin x)/x³ = 1/6.

This demonstrates that L'Hôpital's Rule may need to be applied several times.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. APPLICATION TO 0·∞

L'Hôpital's Rule does not directly apply to:

  0·∞.

We must first convert the product into a quotient.

Consider:

  lim_{x→0⁺} x · ln x.

We have:

  x → 0

and:

  ln x → -∞.

Thus:

  0 · (-∞).

Rewrite:

  x · ln x = ln x / (1/x).

Now the form becomes:

  -∞/∞.

Apply L'Hôpital:

  (1/x)/(-1/x²).

Simplify:

  -x.

Therefore:

  lim_{x→0⁺} -x = 0.

Hence:

  lim_{x→0⁺} x · ln x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. APPLICATION TO ∞−∞

L'Hôpital's Rule also does not directly apply to:

  ∞−∞.

We first rewrite the expression as a quotient.

Consider:

  lim_{x→∞} (√(x² + 1) - x).

The direct form is:

  ∞−∞.

Rationalize:

  √(x² + 1) - x = ((x² + 1) - x²)/(√(x² + 1) + x).

Thus:

  = 1/(√(x² + 1) + x).

Now as x→∞:

  1/∞ = 0.

Therefore:

  0.

The important point is that we first transformed the expression before considering L'Hôpital's Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATION TO 1^∞

L'Hôpital's Rule can also help with indeterminate powers, but only after taking logarithms.

Consider:

  lim_{x→∞} (1 + 1/x)ˣ.

The form is:

  1^∞.

Let:

  y = (1 + 1/x)ˣ.

Take the natural logarithm:

  ln y = x · ln(1 + 1/x).

Rewrite:

  ln y = ln(1 + 1/x) / (1/x).

Now we have:

  0/0.

Apply L'Hôpital:

  (-1/x²)/(1 + 1/x) / (-1/x²).

After simplification, the limit is:

  1.

Thus:

  ln y → 1.

Exponentiating:

  y → e.

Therefore:

  lim_{x→∞} (1 + 1/x)ˣ = e.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. APPLICATION TO 0⁰

Consider:

  lim_{x→0⁺} xˣ.

The form is:

  0⁰.

Set:

  y = xˣ.

Take logarithms:

  ln y = x · ln x.

Rewrite:

  x · ln x = ln x / (1/x).

Now we have:

  -∞/∞.

Apply L'Hôpital:

  (1/x)/(-1/x²) = -x.

Therefore:

  ln y → 0.

Exponentiating:

  y → e⁰ = 1.

Thus:

  lim_{x→0⁺} xˣ = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A MAJOR APPLICATION: COMPARING RATES OF GROWTH

One of the most powerful applications of L'Hôpital's Rule is comparing functions that grow at different rates.

For example:

  lim_{x→∞} xⁿ/eˣ = 0

for any positive integer n.

This demonstrates that exponential growth eventually dominates polynomial growth.

For example:

  x, x², x³, x¹⁰⁰

all grow slower than:

  eˣ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: POLYNOMIAL VS. EXPONENTIAL

Evaluate:

  lim_{x→∞} x³/eˣ.

Initially:

  ∞/∞.

First application:

  3x²/eˣ.

Still:

  ∞/∞.

Second application:

  6x/eˣ.

Still:

  ∞/∞.

Third application:

  6/eˣ.

Now:

  6/∞ = 0.

Therefore:

  lim_{x→∞} x³/eˣ = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMPARING LOGARITHMIC AND POLYNOMIAL GROWTH

L'Hôpital's Rule can also demonstrate that logarithmic functions grow more slowly than powers of x.

Consider:

  lim_{x→∞} ln x / x.

We have:

  ∞/∞.

Apply L'Hôpital:

  (1/x)/1.

Therefore:

  lim_{x→∞} 1/x = 0.

Hence:

  lim_{x→∞} ln x / x = 0.

This tells us that:

  ln x grows much more slowly than x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES

Mistake 1: Using L'Hôpital Immediately

Do not automatically differentiate every limit.

First perform direct substitution.

For example:

  lim_{x→2} (x² + 3)

can simply be evaluated:

  2² + 3 = 7.

There is no indeterminate form.

Mistake 2: Applying It to the Wrong Form

L'Hôpital's Rule directly applies to:

  0/0, ∞/∞.

It does not directly apply to:

  0·∞,
  ∞−∞,
  0⁰,
  1^∞,

or:

  ∞⁰.

Those must be transformed first.

Mistake 3: Using the Quotient Rule

For:

  f(x)/g(x),

L'Hôpital says:

  f'(x)/g'(x)

not the quotient-rule formula:

  (f'g - fg')/g².

Mistake 4: Differentiating Only the Numerator

You must differentiate both:

  f(x) → f'(x)

and:

  g(x) → g'(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHEN SHOULD YOU STOP APPLYING L'HÔPITAL?

Stop when the resulting limit is no longer indeterminate.

For example:

  lim_{x→0} sin x / x

becomes:

  lim_{x→0} cos x / 1.

Now direct substitution gives:

  1.

So stop.

There is no reason to differentiate again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. L'HÔPITAL'S RULE VS. ALGEBRAIC METHODS

L'Hôpital's Rule is powerful, but it is not always the best first choice.

For example:

  lim_{x→2} (x² - 4)/(x - 2).

You can use L'Hôpital:

  2x/1 → 4.

But factoring is simpler:

  ((x - 2)(x + 2))/(x - 2) = x + 2 → 4.

So a good strategy is:

  Use algebraic simplification when it is easy; use L'Hôpital's Rule when the limit remains difficult.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. GENERAL PROBLEM-SOLVING STRATEGY

When you encounter a difficult limit:

Step 1 — Substitute

Find the direct form.

Step 2 — Identify the form

If you get:

  0/0

or:

  ∞/∞,

L'Hôpital may be appropriate.

Step 3 — Differentiate

Calculate:

  f'(x)

and:

  g'(x).

Step 4 — Evaluate the new limit

Try direct substitution again.

Step 5 — Repeat if necessary

If the result is still:

  0/0

or:

  ∞/∞,

you may apply L'Hôpital again, provided the conditions remain satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER

  lim_{x→0} sin x / x = 1
  lim_{x→0} (eˣ - 1)/x = 1
  lim_{x→1} ln x / (x - 1) = 1
  lim_{x→∞} xⁿ/eˣ = 0
  lim_{x→∞} ln x / x = 0
  lim_{x→∞} (1 + 1/x)ˣ = e

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY

L'Hôpital's Rule is essentially a tool for comparing the rates at which the numerator and denominator approach zero or infinity.

The core idea is:

  Indeterminate quotient → Differentiate numerator and denominator → Evaluate the new limit

The two forms to immediately associate with L'Hôpital's Rule are:

  0/0 and ∞/∞.

And remember the broader strategy:

  Recognize the form → Transform if necessary → Apply L'Hôpital → Repeat if necessary → Evaluate

Easy way to remember: If a limit gives 0/0 or ∞/∞, differentiate the top and bottom separately (not using the quotient rule), then try the limit again. Repeat if needed.
  `,
  examples: [
    "lim_{x→0} sin x / x = 1",
    "lim_{x→0} (eˣ - 1)/x = 1",
    "lim_{x→1} ln x / (x - 1) = 1",
    "lim_{x→0} (eˣ - 1 - x)/x² = 1/2 (apply twice)",
    "lim_{x→0} (x - sin x)/x³ = 1/6 (apply three times)",
    "lim_{x→∞} x³/eˣ = 0 (apply three times)",
    "lim_{x→∞} ln x / x = 0",
    "lim_{x→∞} (1 + 1/x)ˣ = e (uses logarithms first)",
    "lim_{x→0⁺} xˣ = 1 (uses logarithms first)",
    "lim_{x→0⁺} x ln x = 0 (transform 0·∞ to quotient)",
  ],
};

export default topic;