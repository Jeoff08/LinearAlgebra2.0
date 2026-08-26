// filename: OtherImproperIntegrals.ts

const topic = {
  id: "other-improper-integrals",
  title: "Other Improper Integrals",
  summary:
    "A comprehensive guide to improper integrals with infinite discontinuities (Type II). Covers endpoints and interior discontinuities, the p-test near zero, convergence and divergence, and practical evaluation strategies.",
  details: `
An improper integral is a definite integral that cannot be evaluated using the ordinary definition because either:

  One or both limits of integration are infinite, or
  The function becomes unbounded or undefined somewhere in the interval of integration.

The previous topic focused on improper integrals with infinite limits, such as:

  ∫₁^∞ f(x) dx.

In this topic, we focus mainly on the other important type: improper integrals caused by infinite discontinuities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT MAKES AN INTEGRAL IMPROPER?

Consider the ordinary definite integral:

  ∫ₐᵇ f(x) dx.

If f(x) is continuous throughout the closed interval [a, b], the integral is a standard proper integral.

However, if f(x) becomes infinite or undefined somewhere in the interval, the integral is improper.

For example:

  ∫₀¹ 1/√x dx.

At x = 0:

  1/√0

is undefined.

In fact:

  1/√x → ∞ as x → 0⁺.

Therefore, even though both limits 0 and 1 are finite, the integral is improper.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TYPE II IMPROPER INTEGRALS

Improper integrals caused by an unbounded function are often called Type II improper integrals.

A typical form is:

  ∫ₐᵇ f(x) dx

where f(x) becomes unbounded at a, b, or some point c inside the interval.

There are three important cases:

Case 1: Infinite discontinuity at the upper endpoint

  ∫ₐᵇ f(x) dx

where:

  f(x) → ∞ as x → b⁻.

Case 2: Infinite discontinuity at the lower endpoint

  ∫ₐᵇ f(x) dx

where:

  f(x) → ∞ as x → a⁺.

Case 3: Infinite discontinuity inside the interval

  ∫ₐᵇ f(x) dx

where f(x) becomes unbounded at some:

  c, a < c < b.

The third case requires splitting the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INFINITE DISCONTINUITY AT THE LOWER ENDPOINT

Suppose f(x) becomes unbounded as:

  x → a⁺.

Then:

  ∫ₐᵇ f(x) dx = lim_{t→a⁺} ∫_tᵇ f(x) dx

provided the limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: CONVERGENT INTEGRAL AT THE LOWER ENDPOINT

Consider:

  ∫₀¹ 1/√x dx.

Rewrite:

  1/√x = x⁻¹/².

The function becomes infinite as x → 0⁺.

Therefore:

  ∫₀¹ x⁻¹/² dx = lim_{t→0⁺} ∫_t¹ x⁻¹/² dx.

Integrate:

  ∫ x⁻¹/² dx = 2√x.

Thus:

  lim_{t→0⁺} [2√x]_t¹.

Evaluate:

  = lim_{t→0⁺} (2 - 2√t).

Since:

  √t → 0,

we obtain:

  2.

Therefore:

  ∫₀¹ 1/√x dx = 2

and the integral converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. IMPORTANT LESSON

The function:

  1/√x

becomes infinite at x = 0, but its total area is still finite.

This is an important idea:

  An infinite function value does not automatically mean that the improper integral diverges.

The question is whether the total accumulated area approaches a finite value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INFINITE DISCONTINUITY AT THE UPPER ENDPOINT

Suppose f(x) becomes unbounded as:

  x → b⁻.

Then define:

  ∫ₐᵇ f(x) dx = lim_{t→b⁻} ∫ₐᵗ f(x) dx

provided the limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: UPPER ENDPOINT

Consider:

  ∫₀¹ 1/√(1 - x) dx.

At x = 1:

  √(1 - x) = 0,

so the function becomes infinite.

We therefore write:

  ∫₀¹ 1/√(1 - x) dx = lim_{t→1⁻} ∫₀ᵗ 1/√(1 - x) dx.

Using:

  u = 1 - x,

we have:

  du = -dx.

The antiderivative is:

  -2√(1 - x).

Therefore:

  lim_{t→1⁻} [-2√(1 - x)]₀ᵗ.

Evaluate:

  = lim_{t→1⁻} (-2√(1 - t) + 2).

Since:

  √(1 - t) → 0,

we get:

  2.

Thus:

  ∫₀¹ 1/√(1 - x) dx = 2

and the integral converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE OF DIVERGENCE

Consider:

  ∫₀¹ 1/x dx.

The function becomes infinite as:

  x → 0⁺.

Therefore:

  ∫₀¹ 1/x dx = lim_{t→0⁺} ∫_t¹ 1/x dx.

Integrate:

  ∫ 1/x dx = ln x.

Thus:

  lim_{t→0⁺} [ln x]_t¹.

Therefore:

  = lim_{t→0⁺} (ln 1 - ln t).

Since:

  ln 1 = 0

and:

  ln t → -∞,

we have:

  -ln t → ∞.

Thus:

  ∫₀¹ 1/x dx diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMPARING TWO SIMILAR INTEGRALS

Consider:

  ∫₀¹ 1/√x dx

and:

  ∫₀¹ 1/x dx.

Both functions become infinite at x = 0.

However:

  ∫₀¹ 1/√x dx = 2

while:

  ∫₀¹ 1/x dx

diverges.

The difference comes from how rapidly the functions become infinite near x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE p-TEST NEAR ZERO

A very useful rule is:

  ∫₀¹ 1/xᵖ dx

converges if:

  p < 1

and diverges if:

  p ≥ 1.

Notice that this is the opposite condition from the p-integral over infinity.

Near infinity:

  ∫₁^∞ 1/xᵖ dx

converges when:

  p > 1.

Near zero:

  ∫₀¹ 1/xᵖ dx

converges when:

  p < 1.

This distinction is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLES OF THE p-TEST NEAR ZERO

Example 1:

  ∫₀¹ 1/√x dx

Rewrite:

  x⁻¹/².

Thus:

  p = 1/2 < 1.

Therefore, it converges.

Example 2:

  ∫₀¹ 1/x^(1/3) dx.

Here:

  p = 1/3 < 1.

Therefore, it converges.

Example 3:

  ∫₀¹ 1/x dx.

Here:

  p = 1.

Therefore, it diverges.

Example 4:

  ∫₀¹ 1/x² dx.

Here:

  p = 2 > 1.

Therefore, it diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INFINITE DISCONTINUITY INSIDE THE INTERVAL

Now consider an integral where the function becomes infinite at an interior point.

For example:

  ∫₋₁¹ 1/x dx.

The function is undefined at:

  x = 0.

Since 0 is inside the interval [-1, 1], we must split the integral:

  ∫₋₁¹ 1/x dx = ∫₋₁⁰ 1/x dx + ∫₀¹ 1/x dx.

But each integral must be interpreted as a separate limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CORRECT TREATMENT OF AN INTERIOR DISCONTINUITY

We write:

  ∫₋₁⁰ 1/x dx = lim_{a→0⁻} ∫₋₁ᵃ 1/x dx

and:

  ∫₀¹ 1/x dx = lim_{b→0⁺} ∫_b¹ 1/x dx.

For the first:

  lim_{a→0⁻} [ln|x|]₋₁ᵃ.

This becomes:

  lim_{a→0⁻} ln|a|.

Since:

  |a| → 0⁺,

we have:

  ln|a| → -∞.

Therefore, the left side diverges.

The right side also diverges.

Thus:

  ∫₋₁¹ 1/x dx diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY CAN'T WE SIMPLY SAY THE ANSWER IS ZERO?

This is a very common mistake.

Someone might reason:

  ∫₋₁¹ 1/x dx = 0

because 1/x is an odd function and the interval is symmetric.

However, the ordinary symmetry rule cannot be used here because the function has an infinite discontinuity at x = 0.

The two improper integrals must converge independently.

They do not.

Therefore:

  ∫₋₁¹ 1/x dx diverges.

A related concept called the Cauchy principal value can sometimes assign a symmetric limiting value, but that is a different concept from convergence of the improper integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANOTHER INTERIOR DISCONTINUITY EXAMPLE

Consider:

  ∫₀² 1/√|x - 1| dx.

The function becomes infinite at:

  x = 1.

Therefore, split:

  ∫₀² 1/√|x - 1| dx = ∫₀¹ 1/√(1 - x) dx + ∫₁² 1/√(x - 1) dx.

Each side converges, so the entire integral converges.

In fact, each side equals 2, giving:

  4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GENERAL RULE FOR INTERIOR DISCONTINUITIES

If f(x) becomes infinite at x = c, where:

  a < c < b,

then:

  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫_cᵇ f(x) dx

where both parts are interpreted using one-sided limits:

  ∫ₐᶜ f(x) dx = lim_{t→c⁻} ∫ₐᵗ f(x) dx

and:

  ∫_cᵇ f(x) dx = lim_{t→c⁺} ∫_tᵇ f(x) dx.

The entire integral converges only if both limits converge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. A USEFUL CONVERGENCE RULE

For an integral near zero:

  ∫₀¹ x⁻ᵖ dx

we have:

  converges if p < 1,
  diverges if p ≥ 1.

For an integral extending to infinity:

  ∫₁^∞ x⁻ᵖ dx

we have:

  converges if p > 1,
  diverges if p ≤ 1.

Easy way to remember:

  Near zero: p < 1
  Near infinity: p > 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WITH A TRIGONOMETRIC FUNCTION

Consider:

  ∫₀^π/² tan x dx.

The tangent function becomes infinite as:

  x → π/2⁻.

Therefore:

  ∫₀^π/² tan x dx = lim_{t→π/2⁻} ∫₀ᵗ tan x dx.

Recall:

  ∫ tan x dx = -ln|cos x|.

Therefore:

  lim_{t→π/2⁻} [-ln|cos x|]₀ᵗ.

This becomes:

  lim_{t→π/2⁻} -ln|cos t|.

As:

  t → π/2⁻,

we have:

  cos t → 0⁺.

Therefore:

  ln(cos t) → -∞.

Hence:

  -ln(cos t) → ∞.

Thus:

  ∫₀^π/² tan x dx diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE WITH A CONVERGENT TRIGONOMETRIC INTEGRAL

Consider:

  ∫₀^π/² 1/√(cos x) dx.

The integrand becomes unbounded as:

  x → π/2⁻.

However, its singularity is mild enough that the integral can converge.

The important lesson is:

  The existence of an infinite discontinuity does not automatically imply divergence.

We must actually evaluate the corresponding limit or use a suitable convergence test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPROPER INTEGRAL VS. FUNCTION VALUE

Suppose:

  f(x) = 1/√x

on:

  0 < x ≤ 1.

The function is undefined at x = 0.

This does not prevent us from asking whether:

  ∫₀¹ f(x) dx

converges.

We are interested in the limit of the accumulated area, not the value of the function exactly at the problematic point.

That is why we use:

  lim_{t→0⁺} ∫_t¹ f(x) dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A GENERAL PROBLEM-SOLVING PROCEDURE

When you encounter an improper integral caused by an infinite discontinuity:

Step 1 — Find the problematic point

Determine where f(x) becomes undefined or unbounded.

Step 2 — Determine which side is approaching

For a lower endpoint:

  x → a⁺.

For an upper endpoint:

  x → b⁻.

For an interior point c:

  x → c⁻ and x → c⁺.

Step 3 — Replace the problematic endpoint with a variable

For example:

  ∫₀¹ f(x) dx

becomes:

  lim_{t→0⁺} ∫_t¹ f(x) dx.

Step 4 — Integrate

Find the antiderivative.

Step 5 — Take the appropriate limit.

Step 6 — Determine convergence.

Finite result:

  Converges

Infinite or nonexistent result:

  Diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES

Mistake 1: Ignoring the discontinuity

Do not treat:

  ∫₀¹ 1/x dx

like an ordinary definite integral.

The function is undefined at x = 0.

Mistake 2: Plugging the discontinuity directly into the antiderivative

For example:

  [ln x]₀¹

is not valid as an ordinary substitution because:

  ln 0

is undefined.

Instead, use:

  lim_{t→0⁺} [ln x]_t¹.

Mistake 3: Forgetting to split an interior discontinuity

For:

  ∫₋₁¹ 1/x dx,

you must split at x = 0.

Mistake 4: Assuming infinite function value means divergence

For example:

  ∫₀¹ 1/√x dx

converges even though:

  1/√x → ∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMPARISON OF IMPORTANT EXAMPLES

  Integral                    Problem           Result
  ──────────────────────────────────────────────────────────────────────────
  ∫₀¹ 1/√x dx                 Infinite at 0     Converges
  ∫₀¹ 1/x dx                  Infinite at 0     Diverges
  ∫₀¹ 1/x² dx                 Infinite at 0     Diverges
  ∫₀¹ 1/√(1 - x) dx           Infinite at 1     Converges
  ∫₀¹ 1/(1 - x) dx            Infinite at 1     Diverges
  ∫₋₁¹ 1/x dx                 Infinite at 0     Diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER

  ∫ₐᵇ f(x) dx = lim_{t→a⁺} ∫_tᵇ f(x) dx (lower endpoint)
  ∫ₐᵇ f(x) dx = lim_{t→b⁻} ∫ₐᵗ f(x) dx (upper endpoint)
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫_cᵇ f(x) dx (interior, split)

  p-test near zero:
    ∫₀¹ 1/xᵖ dx converges if p < 1, diverges if p ≥ 1

  p-test near infinity:
    ∫₁^∞ 1/xᵖ dx converges if p > 1, diverges if p ≤ 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE BIG PICTURE

There are two major types of improper integrals you should know:

Type I — Infinite Limits:

  ∫ₐ^∞ f(x) dx

or:

  ∫₋∞^b f(x) dx

or:

  ∫₋∞^∞ f(x) dx

These are handled by limits such as:

  b → ∞.

Type II — Infinite Discontinuities:

Examples:

  ∫₀¹ 1/√x dx

or:

  ∫₀¹ 1/(1 - x) dx.

These are handled using one-sided limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. SIMPLE SUMMARY

The central idea of Other Improper Integrals is that an integral can be improper even when its limits of integration are finite.

If the function becomes unbounded at an endpoint:

  ∫ₐᵇ f(x) dx = lim_{t→a⁺} ∫_tᵇ f(x) dx

or:

  ∫ₐᵇ f(x) dx = lim_{t→b⁻} ∫ₐᵗ f(x) dx.

If the function becomes unbounded at an interior point c:

  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫_cᵇ f(x) dx

with each part evaluated separately using one-sided limits.

And the most useful p-test to remember is:

  ∫₀¹ 1/xᵖ dx converges if p < 1, diverges if p ≥ 1

while:

  ∫₁^∞ 1/xᵖ dx converges if p > 1, diverges if p ≤ 1.

So the key skill is to identify where the function becomes problematic, replace that point with a one-sided limit, evaluate the resulting limit, and determine whether the accumulated area is finite or infinite.

Easy way to remember: Type I = infinite limits, Type II = infinite discontinuities. For Type II, use one-sided limits. Near zero, p < 1 converges; near infinity, p > 1 converges.
  `,
  examples: [
    "∫₀¹ 1/√x dx = 2 (converges, p = 1/2 < 1)",
    "∫₀¹ 1/x dx diverges (p = 1)",
    "∫₀¹ 1/x² dx diverges (p = 2 > 1)",
    "∫₀¹ 1/√(1 - x) dx = 2 (converges)",
    "∫₀¹ 1/(1 - x) dx diverges",
    "∫₋₁¹ 1/x dx diverges (interior discontinuity at 0)",
    "∫₀² 1/√|x - 1| dx = 4 (interior discontinuity, converges)",
    "∫₀^π/² tan x dx diverges",
    "p < 1 near zero → converges, p > 1 near infinity → converges",
  ],
};

export default topic;