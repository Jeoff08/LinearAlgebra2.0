// filename: AlternatingSeries.ts

const topic = {
  id: "alternating-series",
  title: "Alternating Series",
  summary:
    "A comprehensive guide to alternating series in calculus. Covers the Alternating Series Test, absolute vs. conditional convergence, remainder estimation, and worked examples.",
  details: `
An alternating series is an infinite series whose terms alternate between positive and negative values.

Instead of having all positive terms like:

  1/2 + 1/4 + 1/8 + ...,

an alternating series looks like:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ...

The signs keep switching:

  +, -, +, -, +, -, ...

Alternating Series are important because a series whose terms decrease toward zero can converge even when the corresponding positive-term series diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN ALTERNATING SERIES?

The general form of an alternating series is:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ

or:

  Σₙ₌₁^∞ (-1)ⁿ · bₙ

where:

  bₙ > 0.

The factor:

  (-1)ⁿ

or:

  (-1)ⁿ⁻¹

is what causes the signs to alternate.

For example:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n

produces:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ....

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY ARE ALTERNATING SERIES IMPORTANT?

Consider the Harmonic Series:

  Σₙ₌₁^∞ 1/n.

We already know that it diverges.

That means:

  1 + 1/2 + 1/3 + 1/4 + ...

grows without approaching a finite number.

But now alternate the signs:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ...

This series converges.

In fact:

  1 - 1/2 + 1/3 - 1/4 + ... = ln 2.

This is a very important example because it demonstrates that changing the signs can completely change the convergence behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE ALTERNATING SERIES TEST

The primary test for alternating series is the Alternating Series Test, also called the Leibniz Test.

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ

where:

  bₙ > 0.

The series converges if the following two conditions are satisfied:

Condition 1: The terms decrease

  bₙ₊₁ ≤ bₙ

for sufficiently large n.

In other words, the positive magnitudes must get smaller.

Condition 2: The terms approach zero

  lim_{n→∞} bₙ = 0.

Therefore, the Alternating Series Test says:

  bₙ decreases and bₙ → 0 ⇒ Σ (-1)ⁿ⁻¹ · bₙ converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE TWO CONDITIONS TO MEMORIZE

This is the most important part.

For:

  Σ (-1)ⁿ⁻¹ · bₙ,

check:

  bₙ → 0

and:

  bₙ is decreasing.

Think:

  Decreasing + Zero = Alternating Series Converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: ALTERNATING HARMONIC SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n.

This gives:

  1 - 1/2 + 1/3 - 1/4 + ....

Here:

  bₙ = 1/n.

Condition 1: Does bₙ → 0?

  lim_{n→∞} 1/n = 0.

Yes.

Condition 2: Is bₙ decreasing?

We have:

  1 > 1/2 > 1/3 > 1/4 > ....

Yes.

Therefore, the Alternating Series Test applies.

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n converges.

In fact, its exact sum is:

  ln 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IMPORTANT: IT CONVERGES CONDITIONALLY

There is something interesting about:

  1 - 1/2 + 1/3 - 1/4 + ....

The original alternating series converges:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n

but if we take the absolute values:

  Σₙ₌₁^∞ |(-1)ⁿ⁻¹/n| = Σₙ₌₁^∞ 1/n,

we get the Harmonic Series, which diverges.

Therefore, the alternating harmonic series is conditionally convergent.

  Converges conditionally

This is an important concept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ABSOLUTE CONVERGENCE VS. CONDITIONAL CONVERGENCE

There are two important types of convergence for series with positive and negative terms.

Absolute Convergence

A series:

  Σ aₙ

is absolutely convergent if:

  Σ |aₙ| converges.

If a series is absolutely convergent, then the original series definitely converges.

Conditional Convergence

A series is conditionally convergent if:

  Σ aₙ converges

but:

  Σ |aₙ| diverges.

The alternating harmonic series is the classic example.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE OF ABSOLUTE CONVERGENCE

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/n².

Take the absolute value:

  |(-1)ⁿ/n²| = 1/n².

Therefore:

  Σ |(-1)ⁿ/n²| = Σ 1/n².

This is a p-series with:

  p = 2 > 1.

Therefore, it converges.

So:

  Σₙ₌₁^∞ (-1)ⁿ/n² converges absolutely.

Notice that the Alternating Series Test also works here, but we can make the stronger conclusion: absolute convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: A MORE COMPLICATED ALTERNATING SERIES

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · 1/(n² + 3).

Here:

  bₙ = 1/(n² + 3).

Check the limit:

  lim_{n→∞} 1/(n² + 3) = 0.

Check decreasing behavior:

As n increases, n² + 3 increases, so:

  1/(n² + 3)

decreases.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · 1/(n² + 3) converges.

Furthermore:

  Σₙ₌₁^∞ |(-1)ⁿ⁻¹ · 1/(n² + 3)| = Σₙ₌₁^∞ 1/(n² + 3).

Since:

  1/(n² + 3) < 1/n²

and:

  Σ 1/n²

converges, the series actually converges absolutely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. A SERIES THAT FAILS THE TEST

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · n/(n + 1).

Here:

  bₙ = n/(n + 1).

Check the limit:

  lim_{n→∞} n/(n + 1) = 1.

But the Alternating Series Test requires:

  lim_{n→∞} bₙ = 0.

It does not.

Therefore, the series diverges.

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · n/(n + 1) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE nth-TERM TEST STILL APPLIES

Remember an extremely important rule:

If the terms of a series do not approach zero, the series must diverge.

For any series:

  Σ aₙ,

if:

  lim_{n→∞} aₙ ≠ 0

or the limit does not exist, then:

  Σ aₙ diverges.

This applies to alternating series too.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY DOES THE ALTERNATING SERIES TEST WORK?

Consider:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ....

Look at the partial sums:

  S₁ = 1
  S₂ = 1 - 1/2 = 1/2
  S₃ = 1 - 1/2 + 1/3 = 5/6
  S₄ = 1 - 1/2 + 1/3 - 1/4 = 7/12.

The partial sums move back and forth.

The positive terms push the sum upward:

  S₁, S₃, S₅, ...

while the negative terms pull it downward:

  S₂, S₄, S₆, ...

Because the magnitudes:

  bₙ

are getting smaller and eventually approach zero, these oscillations become smaller and smaller.

Eventually, the partial sums approach a single finite number.

That's the basic intuition behind the Alternating Series Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ALTERNATING SERIES REMAINDER ESTIMATE

One of the most useful properties of an alternating series is that we can estimate the error when we stop after a finite number of terms.

Suppose:

  S = Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ

satisfies the Alternating Series Test.

If:

  S_N

is the partial sum after N terms, then the remainder:

  R_N = S - S_N

satisfies:

  |R_N| ≤ b_{N+1}.

This is called the Alternating Series Remainder Estimate.

In words:

  The error is no larger than the first term you did not include.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE OF THE REMAINDER ESTIMATE

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n.

Suppose we stop after 10 terms.

Then:

  S₁₀ = 1 - 1/2 + 1/3 - 1/4 + ... - 1/10.

The next term is:

  b₁₁ = 1/11.

Therefore:

  |R₁₀| ≤ 1/11.

So:

  |R₁₀| ≤ 0.0909.

This means the error in using the first 10 terms is at most about 0.0909.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. HOW MANY TERMS DO WE NEED?

Suppose we want the error to be less than:

  0.001.

For the alternating harmonic series:

  |R_N| ≤ 1/(N + 1).

We want:

  1/(N + 1) < 0.001.

Since:

  0.001 = 1/1000,

we need:

  N + 1 > 1000.

Therefore:

  N ≥ 1000.

So at least 1000 terms are needed to guarantee an error smaller than 0.001.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ALTERNATING SERIES WITH POWERS

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/nᵖ.

Here:

  bₙ = 1/nᵖ.

If:

  p > 0,

then:

  1/nᵖ → 0

and the terms decrease.

Therefore, the Alternating Series Test gives convergence for:

  p > 0.

But now examine absolute convergence.

Taking absolute values gives:

  Σ 1/nᵖ.

This converges only if:

  p > 1.

Therefore:

  p > 1     → Absolutely convergent
  0 < p ≤ 1 → Conditionally convergent
  p ≤ 0     → Divergent

This is a very useful result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: p = 1/2

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/√n.

This is:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n^(1/2).

Since:

  p = 1/2 > 0,

the Alternating Series Test tells us that it converges.

But its absolute-value series is:

  Σ 1/√n = Σ 1/n^(1/2).

Because:

  p = 1/2 ≤ 1,

this diverges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/√n converges conditionally.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: p = 2

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n².

The Alternating Series Test says it converges.

But more strongly:

  Σ |(-1)ⁿ⁻¹/n²| = Σ 1/n².

Since:

  p = 2 > 1,

the absolute series converges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹/n² converges absolutely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HOW TO CHECK IF bₙ IS DECREASING

Sometimes it is obvious.

For example:

  bₙ = 1/n

clearly decreases:

  1 > 1/2 > 1/3 > 1/4 > ....

But sometimes it is not obvious.

We can use a function:

  f(x) = bₓ.

If:

  f'(x) < 0,

then bₙ is decreasing.

Example

Suppose:

  bₙ = ln n / n.

Let:

  f(x) = ln x / x.

Differentiate using the quotient rule:

  f'(x) = (1 - ln x)/x².

For:

  x > e,

we have:

  ln x > 1,

so:

  1 - ln x < 0.

Therefore:

  f'(x) < 0

for x > e.

So bₙ is eventually decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: ALTERNATING ln n / n

Consider:

  Σₙ₌₂^∞ (-1)ⁿ⁻¹ · ln n / n.

Let:

  bₙ = ln n / n.

First check:

  lim_{n→∞} ln n / n = 0.

Yes.

We also found that:

  ln n / n

is eventually decreasing.

Therefore, by the Alternating Series Test:

  Σₙ₌₂^∞ (-1)ⁿ⁻¹ · ln n / n converges.

However, its absolute series:

  Σₙ₌₂^∞ ln n / n

diverges.

Therefore, it is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKE: "IT ALTERNATES, SO IT CONVERGES"

This is false.

Just because signs alternate does not guarantee convergence.

For example:

  1 - 1 + 1 - 1 + 1 - 1 + ...

alternates, but its terms do not approach zero:

  |aₙ| = 1.

Therefore, it diverges.

Another example:

  1 - 2 + 3 - 4 + 5 - 6 + ...

alternates, but the magnitude of the terms actually increases.

It diverges.

So:

  Alternating signs alone are not enough.

You need the terms to decrease toward zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKE: CHECKING ONLY bₙ → 0

Suppose:

  bₙ → 0.

That alone does not prove that an alternating series converges.

The Alternating Series Test requires:

  bₙ → 0

and:

  bₙ is decreasing eventually.

Both conditions matter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. ALTERNATING SERIES VS. ABSOLUTE CONVERGENCE

When you encounter:

  Σ (-1)ⁿ · bₙ,

a good strategy is:

Step 1

Check whether:

  lim_{n→∞} bₙ = 0.

If not:

  Diverges

immediately.

Step 2

Check whether bₙ decreases.

If yes:

  Converges by the Alternating Series Test.

Step 3

Check absolute convergence:

  Σ |aₙ| = Σ bₙ.

If this converges:

  Absolutely convergent.

If it diverges:

  Conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER

  Alternating Series:
    Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ, bₙ > 0

  Alternating Series Test:
    bₙ → 0 and bₙ decreasing ⇒ converges

  Remainder Estimate:
    |R_N| ≤ b_{N+1}

  Absolute Convergence:
    Σ |aₙ| converges

  Conditional Convergence:
    Σ aₙ converges but Σ |aₙ| diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SIMPLE SUMMARY

An Alternating Series is a series whose terms switch signs:

  Σ (-1)ⁿ⁻¹ · bₙ

where:

  bₙ > 0.

The Alternating Series Test states that if:

  bₙ → 0

and:

  bₙ is decreasing

then:

  Σ (-1)ⁿ⁻¹ · bₙ converges.

The most important distinction is:

  Absolute convergence:   Σ |aₙ| converges
  Conditional convergence: Σ aₙ converges but Σ |aₙ| diverges

And the most useful error formula is:

  |R_N| ≤ b_{N+1}.

Easy memory trick:

  Alternating + Decreasing + Approaches Zero = Converges.

But remember:

  Alternating signs alone do NOT guarantee convergence.

Easy way to remember: For an alternating series, check that the positive terms decrease to zero. If they do, the series converges. The error is bounded by the first omitted term.
  `,
  examples: [
    "Σ (-1)ⁿ⁻¹/n = ln 2 (conditionally convergent)",
    "Σ (-1)ⁿ/n² converges absolutely (p = 2 > 1)",
    "Σ (-1)ⁿ⁻¹/√n converges conditionally (p = 1/2)",
    "Σ (-1)ⁿ⁻¹ · n/(n+1) diverges (limit = 1 ≠ 0)",
    "1 - 1 + 1 - 1 + ... diverges (terms don't → 0)",
    "|R_N| ≤ b_{N+1} for alternating series",
    "bₙ → 0 and decreasing ⇒ converges",
    "Absolute convergence ⇒ convergence, but not conversely",
  ],
};

export default topic;