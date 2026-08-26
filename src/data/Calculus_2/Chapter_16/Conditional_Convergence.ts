// filename: ConditionalConvergence.ts

const topic = {
  id: "conditional-convergence",
  title: "Conditional Convergence",
  summary:
    "A comprehensive guide to conditional convergence of infinite series. Covers the definition, the classic alternating harmonic series example, classification, and the importance of cancellation.",
  details: `
Conditional convergence occurs when an infinite series converges because of cancellation between positive and negative terms, but the series does not converge absolutely.

This is one of the most important ideas in infinite series because it shows that a series can converge even though the corresponding series of absolute values diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF CONDITIONAL CONVERGENCE

Suppose we have:

  Σₙ₌₁^∞ aₙ.

The series is conditionally convergent if:

  Σₙ₌₁^∞ aₙ converges

but:

  Σₙ₌₁^∞ |aₙ| diverges.

So there are two conditions:

  The original series converges.
  The absolute-value series diverges.

Therefore:

  Conditional Convergence = Convergence + Failure of Absolute Convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE CLASSIC EXAMPLE

The most famous example is the Alternating Harmonic Series:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n.

Written out:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ...

The terms alternate:

  +, -, +, -, +, -, ...

The series converges by the Alternating Series Test.

However, take the absolute values:

  Σₙ₌₁^∞ |(-1)ⁿ⁻¹/n|.

This becomes:

  Σₙ₌₁^∞ 1/n.

But:

  Σₙ₌₁^∞ 1/n

is the Harmonic Series, which diverges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS IT CALLED "CONDITIONAL"?

The word conditional means that convergence depends on a condition—in this case, the alternating signs.

Consider:

  1 - 1/2 + 1/3 - 1/4 + ....

The positive and negative terms partially cancel one another.

But if we remove the signs:

  1 + 1/2 + 1/3 + 1/4 + ...,

the cancellation disappears, and the series diverges.

So the convergence is dependent on the original arrangement and signs of the terms.

That is why we call it:

  Conditional Convergence

rather than absolute convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONDITIONAL VS. ABSOLUTE CONVERGENCE

This distinction is extremely important.

Suppose:

  Σ aₙ.

Absolutely convergent:

If:

  Σ |aₙ|

converges, then:

  Absolutely convergent.

Conditionally convergent:

If:

  Σ aₙ

converges but:

  Σ |aₙ|

diverges, then:

  Conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE THREE MAIN POSSIBILITIES

Every series can be classified based on these tests.

  Original Series    Absolute Series    Classification
  ──────────────────────────────────────────────────────────
  Converges          Converges          Absolutely convergent
  Converges          Diverges           Conditionally convergent
  Diverges           Diverges           Divergent

The key case for conditional convergence is:

  Σ aₙ converges but Σ |aₙ| diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO DETERMINE CONDITIONAL CONVERGENCE

Suppose you are given:

  Σ aₙ.

Use this procedure.

Step 1: Test the original series

Determine whether:

  Σ aₙ

converges.

If it diverges, then the series is simply divergent.

Step 2: Take the absolute values

Form:

  Σ |aₙ|.

Step 3: Test the absolute-value series

If:

  Σ |aₙ|

converges:

  Absolutely convergent.

If:

  Σ |aₙ|

diverges while the original series converges:

  Conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONDITIONAL CONVERGENCE AND THE ALTERNATING SERIES TEST

Conditional convergence frequently appears with alternating series.

Recall the Alternating Series Test.

For:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ,

the series converges if:

  lim_{n→∞} bₙ = 0

and bₙ is eventually decreasing.

If the corresponding absolute series:

  Σ bₙ

diverges, then the original alternating series is conditionally convergent.

So a common pattern is:

  Alternating Series Test + Divergent absolute series = Conditional convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: ALTERNATING HARMONIC SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n.

Step 1: Test the original series

Let:

  bₙ = 1/n.

We have:

  lim_{n→∞} 1/n = 0.

Also:

  1 > 1/2 > 1/3 > 1/4 > ....

Therefore, bₙ is decreasing.

By the Alternating Series Test:

  Original series converges.

Step 2: Test absolute convergence

Take absolute values:

  Σ |(-1)ⁿ⁻¹/n| = Σ 1/n.

The Harmonic Series diverges.

Therefore:

  Original series converges but not absolutely.

Hence:

  The series is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ANOTHER IMPORTANT EXAMPLE

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/√n.

Rewrite:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n^(1/2).

Original series:

Here:

  bₙ = 1/n^(1/2).

We have:

  lim_{n→∞} 1/√n = 0.

The sequence:

  1/√n

is decreasing.

Therefore, the Alternating Series Test tells us:

  Original series converges.

Absolute series:

Take absolute values:

  Σₙ₌₁^∞ 1/√n.

This is a p-series:

  Σ 1/n^(1/2).

Since:

  p = 1/2 < 1,

it diverges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/√n is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL ALTERNATING p-SERIES

A very useful family is:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/nᵖ.

We can classify it completely.

If p > 1:

The absolute-value series is:

  Σ 1/nᵖ.

Since p > 1, it converges.

Therefore:

  Absolutely convergent.

If 0 < p ≤ 1:

The Alternating Series Test gives convergence.

But:

  Σ 1/nᵖ

diverges.

Therefore:

  Conditionally convergent.

If p ≤ 0:

The terms do not approach zero.

Therefore:

  Divergent.

So:

  p > 1      → Absolutely convergent
  0 < p ≤ 1  → Conditionally convergent
  p ≤ 0      → Divergent

This table is worth memorizing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONDITIONAL CONVERGENCE AND CANCELLATION

Let's look more closely at why cancellation matters.

Consider:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ....

The positive terms alone are:

  1 + 1/3 + 1/5 + 1/7 + ...

and the negative terms alone are:

  -1/2 - 1/4 - 1/6 - 1/8 - ....

Each group individually has a tendency to grow without bound.

But when combined, the positive and negative terms partially cancel.

The terms become smaller:

  1, 1/2, 1/3, 1/4, ...

and the alternating cancellation becomes increasingly precise.

This allows the entire series to approach a finite limit.

That is the fundamental intuition behind conditional convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. PARTIAL SUMS

A useful way to understand conditional convergence is through partial sums.

For:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ...,

the partial sums are:

  S₁ = 1,
  S₂ = 1/2,
  S₃ = 5/6,
  S₄ = 7/12,
  S₅ = 47/60,

and so on.

The partial sums bounce above and below the eventual limit.

But the size of the bounce becomes smaller.

Eventually:

  Sₙ

approaches:

  ln 2.

So:

  Sₙ → ln 2.

That means the series converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE ABSOLUTE SERIES BEHAVES DIFFERENTLY

For the same series:

  1 - 1/2 + 1/3 - 1/4 + ...,

take absolute values:

  1 + 1/2 + 1/3 + 1/4 + ....

The partial sums now continually increase:

  1, 1.5, 1.833..., 2.083..., ...

They do not approach a finite limit.

Therefore:

  Σ 1/n diverges.

This demonstrates exactly why the original series is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CONDITIONAL CONVERGENCE DOES NOT MEAN "ALMOST DIVERGENT"

The word "conditional" can sometimes sound like the series is only barely convergent.

But mathematically, it has a precise meaning:

  Σ aₙ converges

while:

  Σ |aₙ| diverges.

It is not merely a weaker numerical approximation.

It describes the fundamental behavior of the series when its signs are retained versus removed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. REARRANGING CONDITIONALLY CONVERGENT SERIES

This is one of the most interesting consequences of conditional convergence.

For an absolutely convergent series, rearranging terms does not change the sum.

For a conditionally convergent series, rearranging the terms can change its behavior.

For example:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ...

converges to:

  ln 2.

But because it is only conditionally convergent, rearranging its terms can produce a different result.

The Riemann Rearrangement Theorem states that a conditionally convergent real series can be rearranged so that it converges to a chosen real number, or can be made to diverge to +∞ or -∞.

This is a major reason absolute convergence is considered much stronger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER

  Conditional Convergence:
    Σ aₙ converges but Σ |aₙ| diverges

  Alternating p-Series:
    p > 1      → Absolutely convergent
    0 < p ≤ 1  → Conditionally convergent
    p ≤ 0      → Divergent

  Classification:
    Absolute:      Σ aₙ converges and Σ |aₙ| converges
    Conditional:   Σ aₙ converges but Σ |aₙ| diverges
    Divergent:     Σ aₙ diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY

A series:

  Σ aₙ

is conditionally convergent when:

  Σ aₙ converges

but:

  Σ |aₙ| diverges.

The classic example is:

  1 - 1/2 + 1/3 - 1/4 + ...

which converges by the Alternating Series Test, while:

  1 + 1/2 + 1/3 + 1/4 + ...

diverges.

Therefore:

  1 - 1/2 + 1/3 - 1/4 + ... is conditionally convergent.

The three classifications to remember:

  Σ |aₙ| converges                          → Absolutely convergent
  Σ aₙ converges but Σ |aₙ| diverges         → Conditionally convergent
  Σ aₙ diverges                              → Divergent

Easy memory trick:

  Conditional convergence means the series converges only while its signs are allowed to cancel.

And the most important example to remember is:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n is conditionally convergent.

Easy way to remember: A conditionally convergent series converges, but if you take absolute values of all terms, it diverges. The convergence depends on cancellation between positive and negative terms.
  `,
  examples: [
    "Σ (-1)ⁿ⁻¹/n → conditionally convergent (alternating harmonic)",
    "Σ (-1)ⁿ⁻¹/√n → conditionally convergent (p = 1/2)",
    "Σ (-1)ⁿ⁻¹/n^(2/3) → conditionally convergent (p = 2/3)",
    "Σ (-1)ⁿ⁻¹/n² → absolutely convergent (p = 2 > 1)",
    "Σ (-1)ⁿ⁻¹ · n/(n²+1) → conditionally convergent",
    "Alternating p-series: p > 1 → absolute, 0 < p ≤ 1 → conditional",
    "Rearranging conditionally convergent series can change the sum",
    "Conditional convergence depends on sign cancellation",
  ],
};

export default topic;