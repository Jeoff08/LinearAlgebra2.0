// filename: AbsoluteConvergence.ts

const topic = {
  id: "absolute-convergence",
  title: "Absolute Convergence",
  summary:
    "A comprehensive guide to absolute and conditional convergence of infinite series. Covers definitions, the Absolute Convergence Theorem, classification, examples, and the importance of rearrangement.",
  details: `
Absolute convergence is an important concept when studying infinite series, especially series that contain both positive and negative terms.

The main idea is simple:

  A series is absolutely convergent if the series formed by taking the absolute value of every term also converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS ABSOLUTE CONVERGENCE?

Suppose we have a series:

  Σₙ₌₁^∞ aₙ.

Take the absolute value of every term:

  |aₙ|.

We obtain a new series:

  Σₙ₌₁^∞ |aₙ|.

If this new series converges, then the original series is said to be absolutely convergent.

Therefore:

  Σₙ₌₁^∞ aₙ is absolutely convergent if Σₙ₌₁^∞ |aₙ| converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE TAKE ABSOLUTE VALUES?

Consider the alternating series:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ....

The positive and negative terms can partially cancel each other.

But absolute convergence asks:

  What happens if we remove all the cancellation?

Taking absolute values gives:

  1 + 1/2 + 1/3 + 1/4 + 1/5 + ....

This is the Harmonic Series, which diverges.

Therefore:

  1 - 1/2 + 1/3 - 1/4 + ...

is not absolutely convergent.

It is instead conditionally convergent.

This distinction is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MAIN THEOREM

One of the most important results is:

  Absolute convergence → ordinary convergence.

In other words, if:

  Σ |aₙ|

converges, then:

  Σ aₙ

must also converge.

However, the reverse is not necessarily true.

A series can converge without being absolutely convergent.

For example:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n

converges, but:

  Σₙ₌₁^∞ |(-1)ⁿ⁻¹/n| = Σₙ₌₁^∞ 1/n

diverges.

So:

  Absolute convergence is stronger than ordinary convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THREE POSSIBLE BEHAVIORS

For a series containing positive and negative terms, there are three important possibilities.

① Absolutely convergent:

  Σ aₙ

converges and:

  Σ |aₙ|

also converges.

② Conditionally convergent:

  Σ aₙ

converges, but:

  Σ |aₙ|

diverges.

③ Divergent:

  Σ aₙ

does not converge.

These can be summarized as:

  Original Series    Absolute Series    Classification
  ──────────────────────────────────────────────────────────
  Converges          Converges          Absolutely convergent
  Converges          Diverges           Conditionally convergent
  Diverges           Diverges           Divergent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: ABSOLUTELY CONVERGENT SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/n².

Take the absolute value:

  |(-1)ⁿ/n²| = 1/n².

Therefore:

  Σₙ₌₁^∞ |(-1)ⁿ/n²| = Σₙ₌₁^∞ 1/n².

This is a p-series with:

  p = 2.

Since:

  p > 1,

the series converges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ/n² is absolutely convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: CONDITIONALLY CONVERGENT SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n.

By the Alternating Series Test:

  1/n → 0

and:

  1/n

is decreasing.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n

converges.

Now take absolute values:

  Σₙ₌₁^∞ |(-1)ⁿ⁻¹/n| = Σₙ₌₁^∞ 1/n.

The Harmonic Series diverges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: DIVERGENT SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ.

The terms are:

  -1 + 1 - 1 + 1 - 1 + ....

For convergence, the terms must approach zero.

But:

  lim_{n→∞} (-1)ⁿ

does not exist.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ diverges.

There is no need to perform an absolute convergence test because the original series already fails the nth-term test for divergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ABSOLUTE CONVERGENCE AND p-SERIES

Absolute convergence is particularly easy to determine when the absolute-value series becomes a p-series.

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/nᵖ.

Taking absolute values gives:

  Σₙ₌₁^∞ 1/nᵖ.

We know:

  Σ 1/nᵖ

converges if:

  p > 1.

Therefore:

  p > 1 → absolute convergence.

If:

  0 < p ≤ 1,

the absolute series diverges, but the original alternating series converges by the Alternating Series Test.

Therefore:

  p > 1      → Absolutely convergent
  0 < p ≤ 1  → Conditionally convergent
  p ≤ 0      → Divergent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: p = 3/2

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/n^(3/2).

Take absolute values:

  Σ 1/n^(3/2).

Here:

  p = 3/2 > 1.

Therefore:

  Σ 1/n^(3/2)

converges.

Thus:

  Σₙ₌₁^∞ (-1)ⁿ/n^(3/2) converges absolutely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: p = 1/2

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/√n.

Taking absolute values:

  Σ 1/√n = Σ 1/n^(1/2).

Since:

  p = 1/2 < 1,

the absolute-value series diverges.

However, the original alternating series satisfies the Alternating Series Test because:

  1/√n → 0

and:

  1/√n

is decreasing.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ/√n is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ABSOLUTE CONVERGENCE USING COMPARISON

You do not always get a p-series after taking absolute values.

Sometimes you can use the Comparison Test.

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/(n² + 1).

Take absolute values:

  Σₙ₌₁^∞ 1/(n² + 1).

Since:

  n² + 1 > n²,

we have:

  1/(n² + 1) < 1/n².

Because:

  Σ 1/n²

converges, the Comparison Test gives:

  Σ 1/(n² + 1)

converges.

Therefore, the original series is:

  absolutely convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ABSOLUTE CONVERGENCE USING LIMIT COMPARISON

Consider:

  Σₙ₌₁^∞ (-1)ⁿ · (3n + 1)/(n³ + 5).

Take absolute values:

  Σ (3n + 1)/(n³ + 5).

We expect this to behave like:

  3/n².

Use Limit Comparison with:

  bₙ = 1/n².

Calculate:

  L = lim_{n→∞} ((3n + 1)/(n³ + 5)) / (1/n²).

Simplify:

  L = lim_{n→∞} n²(3n + 1)/(n³ + 5)
  = lim_{n→∞} (3n³ + n²)/(n³ + 5).

Divide by n³:

  L = lim_{n→∞} (3 + 1/n)/(1 + 5/n³) = 3.

Since:

  0 < 3 < ∞,

the absolute-value series has the same behavior as:

  Σ 1/n²,

which converges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ · (3n + 1)/(n³ + 5) converges absolutely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ABSOLUTE CONVERGENCE OF RATIONAL FUNCTIONS

Suppose you encounter:

  Σ (-1)ⁿ · P(n)/Q(n).

Take absolute values:

  Σ |P(n)/Q(n)|.

Then look at the dominant powers.

For example:

  (n³ + 1)/(n⁶ + 2n)

behaves like:

  n³/n⁶ = 1/n³.

Since:

  Σ 1/n³

converges, the original alternating series is absolutely convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A VERY IMPORTANT THEOREM

If:

  Σ |aₙ|

converges, then:

  Σ aₙ

must converge.

Symbolically:

  Σ |aₙ| < ∞ ⇒ Σ aₙ converges.

This is sometimes called the Absolute Convergence Theorem.

It means that once you've proven absolute convergence, you don't need to separately prove ordinary convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY ABSOLUTE CONVERGENCE IS STRONGER

Imagine a series containing positive and negative terms.

For example:

  a₁ - a₂ + a₃ - a₄ + ....

The signs can create cancellation.

Conditional convergence depends on this cancellation.

Absolute convergence is stronger because it says:

  Even if we remove all cancellation by making every term positive, the series still converges.

So:

  Conditional convergence:
    Depends on cancellation.

  Absolute convergence:
    Does not depend on cancellation.

That's why absolute convergence is considered the stronger form of convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. REARRANGING TERMS

Absolute convergence has another very important property.

If:

  Σ aₙ

converges absolutely, then rearranging the terms does not change the sum.

For an absolutely convergent series:

  Any rearrangement has the same sum.

This is not generally true for conditionally convergent series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY REARRANGEMENT MATTERS

Consider the alternating harmonic series:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ....

It is conditionally convergent.

For conditionally convergent series, rearranging the terms can change the resulting sum.

In fact, a famous result called the Riemann Rearrangement Theorem says that a conditionally convergent real series can be rearranged to:

  converge to a different finite value,
  diverge to +∞,
  diverge to -∞, or
  fail to have a limit.

This is one reason absolute convergence is so important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. KEY FORMULAS TO REMEMBER

  Absolute Convergence:
    Σ aₙ is absolutely convergent if Σ |aₙ| converges

  Absolute Convergence Theorem:
    Σ |aₙ| converges ⇒ Σ aₙ converges

  Classification:
    Absolute:      Σ aₙ converges and Σ |aₙ| converges
    Conditional:   Σ aₙ converges but Σ |aₙ| diverges
    Divergent:     Σ aₙ diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SIMPLE SUMMARY

The central definition is:

  Σ aₙ is absolutely convergent if Σ |aₙ| converges.

The hierarchy is:

  Absolute convergence → Convergence

but:

  Convergence → Absolute convergence.

The classic examples are:

Absolutely convergent:

  Σₙ₌₁^∞ (-1)ⁿ/n²

because:

  Σ 1/n²

converges.

Conditionally convergent:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n

because the alternating series converges, but:

  Σ 1/n

diverges.

Divergent:

  Σₙ₌₁^∞ (-1)ⁿ

because its terms do not approach zero.

Easy memory trick:

  Absolute convergence = ignore the signs and see if the series still converges.

If yes → absolutely convergent.

If no, but the original series converges → conditionally convergent.

If the original series also fails to converge → divergent.

Easy way to remember: Take the absolute value of every term. If that series converges, the original is absolutely convergent (and therefore convergent). If the absolute series diverges but the original converges, it's conditionally convergent.
  `,
  examples: [
    "Σ (-1)ⁿ/n² → absolutely convergent (p = 2 > 1)",
    "Σ (-1)ⁿ⁻¹/n → conditionally convergent (alternating harmonic)",
    "Σ (-1)ⁿ/√n → conditionally convergent (p = 1/2)",
    "Σ (-1)ⁿ/n^(3/2) → absolutely convergent (p = 3/2 > 1)",
    "Σ (-1)ⁿ/(n² + 1) → absolutely convergent (comparison with 1/n²)",
    "Σ (-1)ⁿ · (3n+1)/(n³+5) → absolutely convergent (limit comparison)",
    "Σ (-1)ⁿ → divergent (terms don't → 0)",
    "Absolute convergence ⇒ convergence, but not conversely",
    "Rearranging absolutely convergent series doesn't change the sum",
  ],
};

export default topic;