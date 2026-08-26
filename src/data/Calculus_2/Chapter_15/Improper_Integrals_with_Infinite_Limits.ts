// filename: ImproperIntegralsWithInfiniteLimits.ts

const topic = {
  id: "improper-integrals-with-infinite-limits",
  title: "Improper Integrals with Infinite Limits",
  summary:
    "A comprehensive guide to improper integrals with infinite limits of integration. Covers definitions, convergence and divergence, the p-integral test, comparison test, and practical evaluation strategies.",
  details: `
An improper integral with an infinite limit of integration is a definite integral where one or both limits extend to infinity:

  ∫ₐ^∞ f(x) dx

or:

  ∫₋∞^b f(x) dx

or:

  ∫₋∞^∞ f(x) dx.

These integrals are called improper because ordinary definite integration is defined initially for finite intervals. We therefore cannot simply substitute ∞ into an antiderivative.

Instead, we use a limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED A LIMIT?

Consider:

  ∫₁^∞ 1/x² dx.

We cannot directly write:

  [-1/x]₁^∞

and simply substitute ∞.

Instead, replace infinity with a finite variable b:

  ∫₁^∞ 1/x² dx = lim_{b→∞} ∫₁^b 1/x² dx.

Now the integral is an ordinary definite integral over the finite interval [1, b].

This is the fundamental idea:

  ∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx

provided the limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC DEFINITION

For an integral of the form:

  ∫ₐ^∞ f(x) dx,

we define:

  ∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx

if this limit exists and is finite.

If the limit is a finite number, the improper integral converges.

If the limit does not exist or becomes infinite, the integral diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONVERGENCE AND DIVERGENCE

There are two important possibilities.

Convergent

If:

  lim_{b→∞} ∫ₐ^b f(x) dx = L

where L is a finite number, then:

  ∫ₐ^∞ f(x) dx converges to L.

Divergent

If:

  lim_{b→∞} ∫ₐ^b f(x) dx

is infinite or does not exist, then:

  ∫ₐ^∞ f(x) dx diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE OF A CONVERGENT IMPROPER INTEGRAL

Evaluate:

  ∫₁^∞ 1/x² dx.

Rewrite the improper integral using a limit:

  ∫₁^∞ 1/x² dx = lim_{b→∞} ∫₁^b 1/x² dx.

Rewrite the integrand:

  1/x² = x⁻².

Integrate:

  ∫ x⁻² dx = -1/x.

Therefore:

  lim_{b→∞} [-1/x]₁^b.

Evaluate the bounds:

  = lim_{b→∞} (-1/b + 1/1).

Thus:

  = lim_{b→∞} (1 - 1/b).

Since:

  1/b → 0,

we get:

  1.

Therefore:

  ∫₁^∞ 1/x² dx = 1

and the integral converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRIC INTERPRETATION

An improper integral such as:

  ∫₁^∞ 1/x² dx

represents the area under:

  y = 1/x²

from x = 1 indefinitely toward the right.

Even though the interval extends infinitely far, the function becomes sufficiently small that the total area approaches a finite value.

In this example, the total area is:

  1.

So an infinite interval does not necessarily mean infinite area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE OF A DIVERGENT IMPROPER INTEGRAL

Consider:

  ∫₁^∞ 1/x dx.

Write it as a limit:

  ∫₁^∞ 1/x dx = lim_{b→∞} ∫₁^b 1/x dx.

Integrate:

  ∫ 1/x dx = ln x.

Therefore:

  lim_{b→∞} [ln x]₁^b.

Evaluate:

  = lim_{b→∞} (ln b - ln 1).

Since:

  ln 1 = 0,

we get:

  lim_{b→∞} ln b.

But:

  ln b → ∞.

Therefore:

  ∫₁^∞ 1/x dx diverges.

Although:

  1/x → 0,

its area is still infinite.

This is a very important concept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. A FUNCTION APPROACHING ZERO DOES NOT GUARANTEE CONVERGENCE

It might seem reasonable to think:

  "If f(x) → 0, then the area must eventually become small enough."

That is not always true.

For example:

  lim_{x→∞} 1/x = 0,

but:

  ∫₁^∞ 1/x dx

diverges.

Compare this with:

  1/x²,

where:

  ∫₁^∞ 1/x² dx = 1.

Both functions approach zero, but 1/x² decreases sufficiently fast to produce finite total area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPROPER INTEGRALS WITH LOWER LIMIT -∞

Consider:

  ∫₋∞^0 f(x) dx.

We define this as:

  ∫₋∞^0 f(x) dx = lim_{a→-∞} ∫ₐ^0 f(x) dx

provided the limit exists.

Example

Evaluate:

  ∫₋∞^0 eˣ dx.

Rewrite:

  lim_{a→-∞} ∫ₐ^0 eˣ dx.

Integrate:

  ∫ eˣ dx = eˣ.

Therefore:

  lim_{a→-∞} [eˣ]ₐ^0.

Evaluate:

  = lim_{a→-∞} (1 - eᵃ).

As:

  a → -∞,

we have:

  eᵃ → 0.

Therefore:

  1 - 0 = 1.

Hence:

  ∫₋∞^0 eˣ dx = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRALS WITH BOTH LIMITS INFINITE

Now consider:

  ∫₋∞^∞ f(x) dx.

This is more subtle.

We cannot simply replace both limits simultaneously with a single limit.

Instead, choose a finite point c and split the integral:

  ∫₋∞^∞ f(x) dx = ∫₋∞^c f(x) dx + ∫_c^∞ f(x) dx

Each part must converge separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY WE SPLIT AT A FINITE POINT

Suppose:

  ∫₋∞^∞ f(x) dx

contains behavior at both ends.

We need to determine whether the area on the left converges and whether the area on the right converges.

It is possible for one side to converge while the other diverges.

Therefore:

  Both sides must converge for the entire integral to converge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE OF DIVERGENCE ON BOTH SIDES

Consider:

  ∫₋∞^∞ 1 dx.

Split at 0:

  ∫₋∞^0 1 dx + ∫_0^∞ 1 dx.

The first part diverges, and the second part also diverges.

Therefore:

  ∫₋∞^∞ 1 dx diverges.

This makes intuitive sense because the area under y = 1 over an infinite interval is infinite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE p-INTEGRAL TEST

One of the most useful results for improper integrals is the p-integral:

  ∫₁^∞ 1/xᵖ dx.

The result is:

  ∫₁^∞ 1/xᵖ dx converges if p > 1

and:

  ∫₁^∞ 1/xᵖ dx diverges if p ≤ 1.

This is extremely useful for quickly determining convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLES USING THE p-TEST

Example 1:

  ∫₁^∞ 1/x² dx.

Here:

  p = 2.

Since:

  2 > 1,

the integral converges.

Example 2:

  ∫₁^∞ 1/x³ dx.

Here:

  p = 3 > 1.

Therefore, it converges.

Example 3:

  ∫₁^∞ 1/√x dx.

Rewrite:

  1/√x = x⁻¹/².

Thus:

  p = 1/2.

Since:

  1/2 ≤ 1,

the integral diverges.

Example 4:

  ∫₁^∞ 1/x dx.

Here:

  p = 1.

Since p ≤ 1:

  diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GENERAL FORMULA FOR p > 1

For:

  ∫₁^∞ 1/xᵖ dx,

where p > 1:

  ∫ x⁻ᵖ dx = x^(1-p)/(1-p).

Therefore:

  ∫₁^∞ 1/xᵖ dx = lim_{b→∞} (b^(1-p) - 1)/(1-p).

Because p > 1:

  1 - p < 0,

so:

  b^(1-p) → 0.

Thus:

  ∫₁^∞ 1/xᵖ dx = 1/(p - 1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH p = 3

Evaluate:

  ∫₁^∞ 1/x³ dx.

Using:

  1/(p - 1),

with p = 3:

  1/(3 - 1) = 1/2.

Therefore:

  ∫₁^∞ 1/x³ dx = 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMPARISON OF COMMON FUNCTIONS

As x → ∞:

  1/x

decreases relatively slowly.

  1/x²

decreases faster.

  1/x³

decreases even faster.

Consequently:

  ∫₁^∞ 1/x dx

diverges, while:

  ∫₁^∞ 1/x² dx

and:

  ∫₁^∞ 1/x³ dx

converge.

The rate at which the function approaches zero is crucial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMPARISON TEST FOR IMPROPER INTEGRALS

Sometimes an integral does not have a simple p-integral form.

We can compare it with a known function.

Suppose:

  0 ≤ f(x) ≤ g(x)

for sufficiently large x.

If:

  ∫ₐ^∞ g(x) dx

converges, then:

  ∫ₐ^∞ f(x) dx also converges.

This is the Comparison Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE OF COMPARISON

Consider:

  ∫₁^∞ 1/(x² + 1) dx.

For x ≥ 1:

  x² + 1 > x².

Therefore:

  1/(x² + 1) < 1/x².

We know:

  ∫₁^∞ 1/x² dx

converges.

Since:

  0 < 1/(x² + 1) < 1/x²,

the comparison test tells us:

  ∫₁^∞ 1/(x² + 1) dx converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT DIFFERENCE: INFINITE LIMIT VS. INFINITE DISCONTINUITY

There are two major types of improper integrals.

Type I: Infinite interval

For example:

  ∫₁^∞ f(x) dx.

The problem occurs because the interval is infinite.

Type II: Infinite discontinuity

For example:

  ∫₀¹ 1/√x dx.

The interval is finite, but the function becomes unbounded at x = 0.

These are both improper integrals, but they are handled differently.

The topic here focuses specifically on infinite limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. A PRACTICAL PROCEDURE

When you see:

  ∫ₐ^∞ f(x) dx,

follow these steps:

Step 1

Replace ∞ with a variable:

  ∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx.

Step 2

Find the ordinary antiderivative.

Step 3

Evaluate the finite bounds.

Step 4

Take the limit as:

  b → ∞.

Step 5

Classify the result.

If finite:

  Convergent

If infinite or nonexistent:

  Divergent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE FROM START TO FINISH

Evaluate:

  ∫₂^∞ 1/x³ dx.

Step 1: Convert to a limit

  lim_{b→∞} ∫₂^b x⁻³ dx.

Step 2: Integrate

  ∫ x⁻³ dx = -1/(2x²).

Step 3: Evaluate

  lim_{b→∞} [-1/(2x²)]₂^b.

Thus:

  = lim_{b→∞} (-1/(2b²) + 1/8).

Step 4: Take the limit

Since:

  1/b² → 0,

we obtain:

  1/8.

Therefore:

  ∫₂^∞ 1/x³ dx = 1/8

and the integral converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER

  ∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx
  ∫₋∞^b f(x) dx = lim_{a→-∞} ∫ₐ^b f(x) dx
  ∫₋∞^∞ f(x) dx = ∫₋∞^c f(x) dx + ∫_c^∞ f(x) dx

  p-integral:
    ∫₁^∞ 1/xᵖ dx converges if p > 1, diverges if p ≤ 1
    For p > 1: ∫₁^∞ 1/xᵖ dx = 1/(p - 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY

An improper integral such as:

  ∫ₐ^∞ f(x) dx

does not mean that we integrate "to infinity" directly.

Instead:

  Infinity is replaced by a variable, and then a limit is taken.

Therefore:

  ∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx

is the central formula for this topic.

The central idea is that an infinite interval can still have a finite total area if the function decreases sufficiently rapidly.

Easy way to remember: Replace infinity with a variable, integrate over a finite interval, then take the limit. If the limit exists and is finite, the integral converges. Otherwise, it diverges.
  `,
  examples: [
    "∫₁^∞ 1/x² dx = 1 (converges)",
    "∫₁^∞ 1/x dx diverges",
    "∫₁^∞ 1/x³ dx = 1/2 (converges)",
    "∫₁^∞ 1/√x dx diverges (p = 1/2)",
    "∫₂^∞ 1/x³ dx = 1/8 (converges)",
    "∫₋∞^0 eˣ dx = 1 (converges)",
    "∫₋∞^∞ 1 dx diverges",
    "∫₁^∞ 1/(x² + 1) dx converges (comparison with 1/x²)",
    "p > 1 → converges, p ≤ 1 → diverges",
    "∫ₐ^∞ f(x) dx = lim_{b→∞} ∫ₐ^b f(x) dx",
  ],
};

export default topic;