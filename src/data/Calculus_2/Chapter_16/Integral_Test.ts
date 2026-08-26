// filename: IntegralTest.ts

const topic = {
  id: "integral-test",
  title: "Integral Test",
  summary:
    "A comprehensive guide to the Integral Test for determining convergence of infinite series. Covers conditions, procedure, the p-series connection, remainder estimation, and examples.",
  details: `
The Integral Test is a powerful method for determining whether an infinite series converges or diverges. It is especially useful when the terms of a series come from a function that is positive, continuous, and decreasing.

It creates a connection between an infinite series and an improper integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INFINITE SERIES?

Before understanding the Integral Test, remember that an infinite series has the form:

  Σₙ₌₁^∞ aₙ = a₁ + a₂ + a₃ + ...

The main question is:

  Does the series approach a finite value, or does it grow without bound?

If it approaches a finite number, the series converges.

If it does not approach a finite number, the series diverges.

For example:

  Σₙ₌₁^∞ 1/n²

converges, while:

  Σₙ₌₁^∞ 1/n

diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE IDEA BEHIND THE INTEGRAL TEST

Suppose we have a series:

  Σₙ₌₁^∞ aₙ

and we can find a function:

  f(x)

such that:

  f(n) = aₙ.

If f(x) is:

  continuous,
  positive, and
  decreasing

for x ≥ N, then we can compare the series with the improper integral:

  ∫_N^∞ f(x) dx.

The Integral Test states:

  Σₙ₌ₙ^∞ aₙ converges ⇔ ∫_N^∞ f(x) dx converges

and:

  Σₙ₌ₙ^∞ aₙ diverges ⇔ ∫_N^∞ f(x) dx diverges.

Important idea

  The series and integral have the same convergence behavior.

You don't necessarily use the integral to find the exact sum of the series. Instead, you use it primarily to determine whether the series converges or diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONDITIONS FOR THE INTEGRAL TEST

The Integral Test cannot automatically be applied to every series.

For:

  Σₙ₌ₙ^∞ aₙ,

we need a corresponding function f(x) where:

  f(n) = aₙ.

The function should eventually be:

① Positive

  f(x) > 0

② Continuous

There should be no discontinuities on the interval being considered.

③ Decreasing

As x increases, f(x) should decrease.

In other words:

  x₁ < x₂ ⇒ f(x₁) ≥ f(x₂).

Usually, we can verify decreasing behavior using derivatives:

  f'(x) < 0.

If all three conditions are satisfied, the Integral Test can be used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC PROCEDURE

When using the Integral Test, follow these steps.

Step 1: Identify aₙ

For example:

  aₙ = 1/n².

Step 2: Replace n with x

Construct:

  f(x) = 1/x².

Step 3: Check the conditions

We need to verify that f(x) is positive, continuous, and decreasing.

For x > 0:

  1/x² > 0.

It is continuous for x > 0.

Its derivative is:

  f'(x) = -2/x³ < 0,

so it is decreasing.

Therefore, the Integral Test applies.

Step 4: Evaluate the improper integral

  ∫₁^∞ 1/x² dx.

Rewrite it as:

  lim_{b→∞} ∫₁^b 1/x² dx.

Since:

  1/x² = x⁻²,

we have:

  ∫ x⁻² dx = -1/x.

Therefore:

  lim_{b→∞} [-1/x]₁^b
  = lim_{b→∞} (-1/b + 1).

Since:

  lim_{b→∞} 1/b = 0,

we get:

  1.

The integral converges.

Therefore:

  Σₙ₌₁^∞ 1/n² converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: THE HARMONIC SERIES

Consider:

  Σₙ₌₁^∞ 1/n.

We define:

  f(x) = 1/x.

The function is:

  positive for x > 0,
  continuous for x > 0,
  decreasing because:
    f'(x) = -1/x² < 0.

Therefore, the Integral Test applies.

Evaluate:

  ∫₁^∞ 1/x dx.

Write it as:

  lim_{b→∞} ∫₁^b 1/x dx.

Since:

  ∫ 1/x dx = ln x,

we get:

  lim_{b→∞} [ln x]₁^b.

Thus:

  lim_{b→∞} (ln b - ln 1).

Because:

  ln 1 = 0

and:

  ln b → ∞,

we have:

  ∫₁^∞ 1/x dx = ∞.

Therefore:

  Σₙ₌₁^∞ 1/n diverges.

This is called the Harmonic Series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE p-SERIES CONNECTION

The Integral Test is particularly useful for understanding the p-series:

  Σₙ₌₁^∞ 1/nᵖ.

The corresponding function is:

  f(x) = 1/xᵖ = x⁻ᵖ.

Consider:

  ∫₁^∞ 1/xᵖ dx.

For p ≠ 1:

  ∫ x⁻ᵖ dx = x^(1-p)/(1-p).

The behavior depends on p.

If p > 1:

Then:

  1 - p < 0.

Therefore:

  x^(1-p) → 0.

The integral converges.

Thus:

  Σₙ₌₁^∞ 1/nᵖ converges if p > 1.

If p = 1:

We obtain:

  Σₙ₌₁^∞ 1/n,

which is the Harmonic Series and diverges.

If p < 1:

The integral diverges.

Therefore:

  Σₙ₌₁^∞ 1/nᵖ converges if p > 1

and:

  Σₙ₌₁^∞ 1/nᵖ diverges if p ≤ 1.

This is one of the most important results involving the Integral Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY DOES THE INTEGRAL TEST WORK?

Imagine plotting f(x) and looking at rectangles whose widths are 1.

For a decreasing positive function, the rectangles associated with the series can be compared with the area underneath the curve.

Because the function is decreasing, the sum:

  a₁ + a₂ + a₃ + ...

behaves similarly to:

  ∫ f(x) dx.

The individual values might not be exactly equal to the corresponding areas, but their behavior as n → ∞ is closely connected.

That's why:

  Series converges ⇔ Integral converges

under the conditions of the Integral Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A MORE COMPLICATED SERIES

Consider:

  Σₙ₌₁^∞ 1/(n² + 1).

Define:

  f(x) = 1/(x² + 1).

Check positivity:

For x > 0:

  x² + 1 > 0,

so:

  f(x) > 0.

Check continuity:

The denominator is never zero:

  x² + 1 ≠ 0.

Therefore, f(x) is continuous.

Check decreasing behavior:

Differentiate:

  f'(x) = -2x/(x² + 1)².

For x > 0:

  f'(x) < 0.

Therefore, f(x) is decreasing.

The Integral Test applies.

Now evaluate:

  ∫₁^∞ 1/(x² + 1) dx.

We know that:

  ∫ 1/(x² + 1) dx = tan⁻¹ x.

Therefore:

  lim_{b→∞} [tan⁻¹ x]₁^b
  = lim_{b→∞} (tan⁻¹ b - tan⁻¹ 1).

Since:

  lim_{b→∞} tan⁻¹ b = π/2

and:

  tan⁻¹ 1 = π/4,

we obtain:

  π/2 - π/4 = π/4.

The integral converges.

Therefore:

  Σₙ₌₁^∞ 1/(n² + 1) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE OF A DIVERGENT SERIES

Consider:

  Σₙ₌₁^∞ 1/√n.

Rewrite:

  1/√n = 1/n^(1/2).

This is a p-series with:

  p = 1/2.

Since:

  p ≤ 1,

the series diverges.

Using the Integral Test:

  ∫₁^∞ 1/√x dx = ∫₁^∞ x⁻¹/² dx.

Integrating:

  2√x.

Thus:

  lim_{b→∞} [2√x]₁^b = lim_{b→∞} (2√b - 2).

Since:

  2√b → ∞,

the integral diverges.

Therefore:

  Σₙ₌₁^∞ 1/√n diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRAL TEST DOES NOT FIND THE EXACT SUM

This is an important point.

Suppose:

  Σₙ₌₁^∞ 1/n².

The Integral Test tells us:

  Σₙ₌₁^∞ 1/n²

converges.

But the integral:

  ∫₁^∞ 1/x² dx = 1

does not mean that:

  Σₙ₌₁^∞ 1/n² = 1.

In fact:

  Σₙ₌₁^∞ 1/n² = π²/6.

The integral is being used to determine convergence, not necessarily the exact sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ESTIMATING THE REMAINDER

One of the useful features of the Integral Test is that it can also help estimate how much of a convergent series remains after a certain number of terms.

Suppose:

  Σₙ₌₁^∞ aₙ

converges, and f(x) is positive and decreasing.

Define the remainder:

  R_N = Σₙ₌ₙ₊₁^∞ aₙ.

Then we can estimate it using:

  ∫_{N+1}^∞ f(x) dx ≤ R_N ≤ ∫_N^∞ f(x) dx

This is called the Integral Test Remainder Estimate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE OF REMAINDER ESTIMATION

Consider:

  Σₙ₌₁^∞ 1/n².

Suppose we want to estimate the remainder after N terms.

Since:

  f(x) = 1/x²,

we have:

  ∫_N^∞ 1/x² dx = 1/N.

Therefore:

  R_N ≤ 1/N.

For example, after 100 terms:

  R_100 ≤ 1/100.

Thus:

  R_100 ≤ 0.01.

So the error from stopping after 100 terms is at most 0.01.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INTEGRAL TEST VS. OTHER TESTS

The Integral Test is one of several convergence tests.

  Test                     Main idea
  ──────────────────────────────────────────────────────────────
  Integral Test            Compare series with an improper integral
  Comparison Test          Compare with another known series
  Limit Comparison Test    Compare the limiting ratio of terms
  Ratio Test               Examine aₙ₊₁/aₙ
  Root Test                Examine √[n]{aₙ}
  Alternating Series Test  Used for alternating series
  p-Series Test            Uses the value of p
  Geometric Series Test    Uses the common ratio r

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHEN SHOULD YOU USE THE INTEGRAL TEST?

The Integral Test is especially convenient when the series contains expressions that are easy to integrate.

Good candidates include:

  Σ 1/nᵖ,
  Σ 1/(n² + 1),
  Σ ln n / nᵖ,
  Σ 1/(n ln n),

and similar expressions.

For example:

  Σₙ₌₂^∞ 1/(n ln n)

is a good Integral Test candidate because:

  ∫ 1/(x ln x) dx = ln(ln x).

As x → ∞:

  ln(ln x) → ∞.

Therefore:

  Σₙ₌₂^∞ 1/(n ln n) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER

  Integral Test:
    Σₙ₌ₙ^∞ aₙ converges ⇔ ∫_N^∞ f(x) dx converges
    (f positive, continuous, decreasing, f(n) = aₙ)

  p-Series:
    Σₙ₌₁^∞ 1/nᵖ converges if p > 1, diverges if p ≤ 1

  Remainder Estimate:
    ∫_{N+1}^∞ f(x) dx ≤ R_N ≤ ∫_N^∞ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY

The Integral Test connects an infinite series to an improper integral.

For:

  Σₙ₌ₙ^∞ aₙ,

find f(x) such that:

  f(n) = aₙ.

If f(x) is positive, continuous, and decreasing, then:

  Σₙ₌ₙ^∞ aₙ converges ⇔ ∫_N^∞ f(x) dx converges.

The most important example is the p-series:

  Σₙ₌₁^∞ 1/nᵖ

where:

  p > 1 → converges

and:

  p ≤ 1 → diverges.

Easy memory trick:

  Positive + Continuous + Decreasing → Integrate → Check the Limit.

If the integral approaches a finite number, the series converges.

If the integral approaches infinity, the series diverges.

Easy way to remember: The Integral Test compares a series to an improper integral. If the function is positive, continuous, and decreasing, the series and integral share the same convergence behavior.
  `,
  examples: [
    "Σ 1/n² converges (p = 2 > 1, integral = 1)",
    "Σ 1/n diverges (harmonic series, integral diverges)",
    "Σ 1/√n diverges (p = 1/2 < 1, integral diverges)",
    "Σ 1/(n² + 1) converges (integral = π/4)",
    "Σ 1/(n ln n) diverges (integral diverges)",
    "p > 1 → converges, p ≤ 1 → diverges",
    "R_N ≤ ∫_N^∞ f(x) dx for remainder estimation",
    "Integral Test does not give exact sum, only convergence behavior",
  ],
};

export default topic;