// filename: properties-of-definite-integrals.ts

const topic = {
  id: "properties-of-definite-integrals",
  title: "Properties of Definite Integrals",
  summary:
    "Rules that help us simplify, manipulate, split, and evaluate definite integrals, including zero width, reversing limits, additivity, constant multiple, sum and difference, symmetry, and comparison properties.",
  details: `
The Properties of Definite Integrals are rules that help us simplify, manipulate, split, and evaluate definite integrals.

Instead of solving every integral from scratch, these properties allow us to recognize relationships between different integrals.

The general form of a definite integral is:
  ∫ₐᵇ f(x) dx

where:
  a = lower limit
  b = upper limit
  f(x) = integrand
  dx = variable of integration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PROPERTY OF ZERO WIDTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the upper and lower limits are the same, the integral is zero:
  ∫ₐᵃ f(x) dx = 0

Why?
  There is no interval between a and a.

Therefore, there is no area or accumulation.

Example:
  ∫₃³ (x² + 1) dx

Immediately:
  0

You don't need to find an antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. REVERSING THE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If we switch the lower and upper limits, the sign changes:
  ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx

Example:
  Suppose ∫₀² x dx = 2

Then:
  ∫₂₀ x dx = -2

The area didn't physically become negative—the orientation of the interval changed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ADDITIVITY OVER INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful properties is that we can split an integral at any point c between a and b:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

This means:
  Whole interval = First part + Second part

Example:
  Suppose we have ∫₀⁵ f(x) dx and want to split it at x = 2.

Then:
  ∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx

This is especially useful when the function changes behavior at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ADDITIVITY OVER MULTIPLE INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea works with multiple points.

For example:
  a < c < d < b

Then:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵈ f(x) dx + ∫ᵈᵇ f(x) dx

You can divide a large interval into as many smaller intervals as needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTANT MULTIPLE PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant can be moved outside the integral:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

where c is a constant.

Example:
  Evaluate: ∫₀² 5x² dx

Move 5 outside:
  5∫₀² x² dx

We know:
  ∫₀² x² dx = 8/3

Therefore:
  5(8/3) = 40/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SUM PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of a sum equals the sum of the integrals:
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

Example:
  Evaluate: ∫₀² (x² + x) dx

Split the integral:
  ∫₀² x² dx + ∫₀² x dx

Calculate:
  8/3 + 2 = 8/3 + 6/3 = 14/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIFFERENCE PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea works for subtraction:
  ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

Example:
  Evaluate: ∫₀² (x² - x) dx

Split:
  ∫₀² x² dx - ∫₀² x dx
  = 8/3 - 2
  = 8/3 - 6/3
  = 2/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LINEARITY OF DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple, sum, and difference properties can be combined into one important concept called linearity.

For constants c₁ and c₂:
  ∫ₐᵇ [c₁ f(x) + c₂ g(x)] dx = c₁ ∫ₐᵇ f(x) dx + c₂ ∫ₐᵇ g(x) dx

This is one of the most powerful properties for simplifying integrals.

Example:
  Suppose ∫₀² f(x) dx = 5 and ∫₀² g(x) dx = 3.

Find: ∫₀² [4f(x) - 2g(x)] dx.

Using linearity:
  4∫₀² f(x) dx - 2∫₀² g(x) dx

Substitute:
  4(5) - 2(3) = 20 - 6 = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMPARISON PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≥ g(x) throughout the interval [a, b], then:
  ∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx

In simple terms:
  If one function is always above another, its accumulated value is also greater or equal.

Example:
  Since x + 2 > x for every x, we know:
    ∫ₐᵇ (x + 2) dx > ∫ₐᵇ x dx
  for a < b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POSITIVITY PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≥ 0 on [a, b], then:
  ∫ₐᵇ f(x) dx ≥ 0

This makes sense because a function that stays above the x-axis has nonnegative accumulated area.

Example:
  For f(x) = x², we know x² ≥ 0 for all real x.

Therefore:
  ∫ₐᵇ x² dx ≥ 0

whenever a < b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NEGATIVE FUNCTION PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≤ 0 throughout [a, b], then:
  ∫ₐᵇ f(x) dx ≤ 0

Example:
  Consider f(x) = -x².

Since -x² ≤ 0, we know:
  ∫ₐᵇ -x² dx ≤ 0

for a < b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. BOUNDS PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose m ≤ f(x) ≤ M for every x in [a, b].

Then:
  m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)

This is called the comparison/bounds property.

Example:
  Suppose 2 ≤ f(x) ≤ 5 on [1, 4].

Then:
  b - a = 4 - 1 = 3.

Therefore:
  2(3) ≤ ∫₁⁴ f(x) dx ≤ 5(3)

So:
  6 ≤ ∫₁⁴ f(x) dx ≤ 15

This gives us a range for the integral without actually calculating it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ABSOLUTE VALUE PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For any integrable function:
  |∫ₐᵇ f(x) dx| ≤ ∫ₐᵇ |f(x)| dx

This tells us that the magnitude of the net area cannot be greater than the total area obtained by making everything positive.

Why?
  The definite integral allows positive and negative areas to cancel.
  But |f(x)| makes all contributions nonnegative.

Therefore:
  |net area| ≤ total area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IF TWO FUNCTIONS ARE EQUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = g(x) throughout [a, b], then:
  ∫ₐᵇ f(x) dx = ∫ₐᵇ g(x) dx

This is obvious mathematically, but it becomes useful when replacing complicated expressions with equivalent ones.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SYMMETRY: EVEN FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An even function satisfies:
  f(-x) = f(x)

If f(x) is even, then:
  ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

Example:
  Consider f(x) = x².
  It is even because (-x)² = x².

Therefore:
  ∫₋₂² x² dx = 2∫₀² x² dx.

Since:
  ∫₀² x² dx = 8/3,

we get:
  2(8/3) = 16/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SYMMETRY: ODD FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An odd function satisfies:
  f(-x) = -f(x)

If f(x) is odd, then:
  ∫₋ₐᵃ f(x) dx = 0

Example:
  Consider f(x) = x³.
  It is odd because (-x)³ = -x³.

Therefore:
  ∫₋₂² x³ dx = 0

The positive area on one side exactly cancels the negative area on the other side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. AVERAGE VALUE PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average value of f(x) on [a, b] is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

This property connects definite integrals to the average value of a function.

Example:
  For f(x) = x on [0, 4], we have:
    ∫₀⁴ x dx = 8.

Therefore:
  f_avg = 8/4 = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. MEAN VALUE THEOREM FOR INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f is continuous on [a, b], there exists some number c in [a, b] such that:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

Equivalently:
  f(c) = (1/(b - a)) ∫ₐᵇ f(x) dx

This says that the function reaches its average value somewhere on the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE OF THE MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let f(x) = x² on [0, 4].

We know:
  ∫₀⁴ x² dx = 64/3.

The average value is:
  f_avg = (1/4)(64/3) = 16/3.

Therefore there is some c ∈ [0, 4] such that:
  c² = 16/3.

Thus:
  c = 4/√3.

So the function reaches its average value somewhere in the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. DEFINITE INTEGRAL PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are the most important properties to remember:

Property 1 — Same limits:
  ∫ₐᵃ f(x) dx = 0

Property 2 — Reverse limits:
  ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx

Property 3 — Split interval:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

Property 4 — Constant multiple:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

Property 5 — Sum:
  ∫ₐᵇ [f + g] dx = ∫ₐᵇ f dx + ∫ₐᵇ g dx

Property 6 — Difference:
  ∫ₐᵇ [f - g] dx = ∫ₐᵇ f dx - ∫ₐᵇ g dx

Property 7 — Positive function:
  If f(x) ≥ 0:
    ∫ₐᵇ f(x) dx ≥ 0

Property 8 — Comparison:
  If f(x) ≥ g(x):
    ∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx

Property 9 — Even function:
  ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

Property 10 — Odd function:
  ∫₋ₐᵃ f(x) dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK RECOGNITION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

Same limits: ∫ₐᵃ → Think: 0

Reversed limits: ∫ᵇₐ → Think: Change the sign

A constant multiplier: ∫ₐᵇ c f(x) dx → Think: Move c outside

Addition: ∫ₐᵇ [f + g] dx → Think: Split the integral

Subtraction: ∫ₐᵇ [f - g] dx → Think: Split and subtract

An interval split at c: ∫ₐᵇ → Think: ∫ₐᶜ + ∫꜀ᵇ

Even function on [-a, a]: Think: 2∫₀ᵃ

Odd function on [-a, a]: Think: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The properties of definite integrals allow us to manipulate integrals without always evaluating them directly:

  Definite Integral
    ↓
  Split
  Combine
  Reverse
  Factor Constants
  Compare
  Use Symmetry

These rules become especially powerful when solving more complicated calculus problems.

The most important properties to memorize first are:

  ∫ₐᵃ f(x) dx = 0
  ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx
  ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

and for symmetry:

  f even ⇒ ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx
  f odd ⇒ ∫₋ₐᵃ f(x) dx = 0

In simple terms: The properties of definite integrals are the rules that let you break apart, combine, simplify, reverse, compare, and evaluate definite integrals more efficiently.
  `,
  examples: [
    "∫₃³ (x² + 1) dx = 0",
    "∫₀² x dx = 2, so ∫₂₀ x dx = -2",
    "∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx",
    "∫₀² 5x² dx = 5∫₀² x² dx = 40/3",
    "∫₀² (x² + x) dx = ∫₀² x² dx + ∫₀² x dx = 14/3",
    "∫₋₂² x² dx = 2∫₀² x² dx = 16/3 (even function)",
    "∫₋₂² x³ dx = 0 (odd function)",
  ],
};

export default topic;