// filename: ComparisonTests.ts

const topic = {
  id: "comparison-tests",
  title: "Comparison Tests",
  summary:
    "A comprehensive guide to the Direct Comparison Test and Limit Comparison Test for infinite series. Covers the rules, strategies, common comparison series, and worked examples.",
  details: `
The Comparison Tests are methods used to determine whether an infinite series converges or diverges by comparing it with another series whose behavior is already known.

They are especially useful when a series is difficult to evaluate directly, but its terms resemble a familiar series such as a geometric series or a p-series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA

Suppose we have:

  Σₙ₌₁^∞ aₙ

and we want to know whether it converges or diverges.

Instead of working directly with aₙ, we compare it with another series:

  Σₙ₌₁^∞ bₙ

whose convergence behavior we already know.

The most important comparison principle is:

  0 ≤ aₙ ≤ bₙ

or:

  0 ≤ bₙ ≤ aₙ.

The direction of the inequality determines what conclusion we can make.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIRECT COMPARISON TEST

The Direct Comparison Test compares the terms of two positive series directly.

Suppose:

  0 ≤ aₙ ≤ bₙ

for sufficiently large n.

Then there are two important cases.

Case 1: The larger series converges

If:

  Σ bₙ

converges, then:

  Σ aₙ also converges.

Why?

Because aₙ is smaller than bₙ, and the larger series already has a finite total.

Case 2: The smaller series diverges

If:

  0 ≤ bₙ ≤ aₙ

and:

  Σ bₙ

diverges, then:

  Σ aₙ also diverges.

Why?

Because aₙ is at least as large as a series that already grows without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE TWO RULES TO MEMORIZE

These are extremely important.

For convergence:

  0 ≤ aₙ ≤ bₙ and Σ bₙ converges ⇒ Σ aₙ converges.

Think:

  Small thing is controlled by a convergent big thing.

For divergence:

  0 ≤ bₙ ≤ aₙ and Σ bₙ diverges ⇒ Σ aₙ diverges.

Think:

  Big thing contains a divergent small thing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY COMPARISON WORKS

Suppose:

  0 ≤ aₙ ≤ bₙ.

Imagine adding all the terms:

  a₁ + a₂ + a₃ + ...

and:

  b₁ + b₂ + b₃ + ....

Since each aₙ is no larger than bₙ, the sum of the aₙ's cannot grow faster than the sum of the bₙ's.

Therefore, if:

  Σ bₙ

has a finite total, then:

  Σ aₙ

must also have a finite total.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: PROVING CONVERGENCE

Consider:

  Σₙ₌₁^∞ 1/(n² + 5).

We want to determine whether it converges.

Notice that:

  n² + 5 > n².

Taking reciprocals gives:

  1/(n² + 5) < 1/n².

Therefore:

  0 < 1/(n² + 5) < 1/n².

Now consider:

  Σₙ₌₁^∞ 1/n².

This is a p-series with:

  p = 2.

Since:

  2 > 1,

we know:

  Σₙ₌₁^∞ 1/n²

converges.

Therefore, by the Direct Comparison Test:

  Σₙ₌₁^∞ 1/(n² + 5) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: PROVING DIVERGENCE

Consider:

  Σₙ₌₁^∞ 1/(n + 5).

We know that:

  n + 5 ≤ 6n

for n ≥ 1.

Therefore:

  1/(n + 5) ≥ 1/(6n).

So:

  0 < 1/(6n) ≤ 1/(n + 5).

Now:

  Σₙ₌₁^∞ 1/(6n) = (1/6) Σₙ₌₁^∞ 1/n.

The Harmonic Series:

  Σₙ₌₁^∞ 1/n

diverges.

Therefore:

  Σₙ₌₁^∞ 1/(6n)

also diverges.

Since:

  1/(6n) ≤ 1/(n + 5),

the original series must diverge.

Thus:

  Σₙ₌₁^∞ 1/(n + 5) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE MOST IMPORTANT COMPARISON SERIES

You should memorize several standard series.

p-Series:

  Σₙ₌₁^∞ 1/nᵖ

converges when:

  p > 1

and diverges when:

  p ≤ 1.

Examples:

  Σ 1/n² → converges
  Σ 1/n³ → converges
  Σ 1/√n = Σ 1/n^(1/2) → diverges
  Σ 1/n → diverges.

Geometric Series:

A geometric series has the form:

  Σₙ₌₀^∞ arⁿ.

It converges when:

  |r| < 1

and diverges when:

  |r| ≥ 1.

For example:

  Σₙ₌₁^∞ 1/2ⁿ

converges because:

  r = 1/2.

This makes geometric series another useful comparison series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A POLYNOMIAL

Consider:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1).

We want to determine the behavior.

For large n:

  3n + 2

behaves approximately like:

  3n

and:

  n³ + 1

behaves approximately like:

  n³.

Therefore:

  (3n + 2)/(n³ + 1)

behaves approximately like:

  3n/n³ = 3/n².

Since:

  Σ 1/n²

converges, we expect the original series to converge.

A direct comparison can be established for sufficiently large n. For example, when n ≥ 1:

  3n + 2 ≤ 5n

and:

  n³ + 1 ≥ n³.

Therefore:

  (3n + 2)/(n³ + 1) ≤ 5n/n³ = 5/n².

Since:

  Σ 5/n²

converges, we conclude:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE USING THE HARMONIC SERIES

Consider:

  Σₙ₌₁^∞ (2n + 1)/(n² + 3).

For large n:

  (2n + 1)/(n² + 3)

behaves approximately like:

  2n/n² = 2/n.

Since:

  Σ 1/n

diverges, we expect the original series to diverge.

We can establish a comparison.

For n ≥ 1:

  2n + 1 ≥ 2n

and:

  n² + 3 ≤ 4n².

Therefore:

  (2n + 1)/(n² + 3) ≥ 2n/(4n²) = 1/(2n).

Since:

  Σ 1/(2n)

diverges, the original series diverges.

Thus:

  Σₙ₌₁^∞ (2n + 1)/(n² + 3) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LIMIT COMPARISON TEST

Sometimes it is difficult to establish a direct inequality.

In that situation, the Limit Comparison Test is often much easier.

Suppose:

  aₙ > 0, bₙ > 0.

Calculate:

  L = lim_{n→∞} aₙ/bₙ.

If:

  0 < L < ∞,

then:

  Σ aₙ and Σ bₙ either both converge or both diverge.

This is one of the most useful tests for series involving polynomials, radicals, logarithms, and rational expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: LIMIT COMPARISON

Consider:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1).

Choose:

  bₙ = 1/n².

Now calculate:

  aₙ/bₙ = ((3n + 2)/(n³ + 1)) / (1/n²).

Multiply:

  = n²(3n + 2)/(n³ + 1).

Now take the limit:

  L = lim_{n→∞} n²(3n + 2)/(n³ + 1).

Expand the numerator:

  L = lim_{n→∞} (3n³ + 2n²)/(n³ + 1).

Divide everything by n³:

  L = lim_{n→∞} (3 + 2/n)/(1 + 1/n³).

Therefore:

  L = 3.

Since:

  0 < 3 < ∞,

the two series have the same behavior.

We know:

  Σ 1/n²

converges.

Therefore:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HOW TO CHOOSE bₙ

This is often the hardest part.

The key is to look at the dominant terms.

Consider:

  aₙ = (5n³ + 2n + 1)/(7n⁵ + 4n² + 8).

For very large n, the highest powers dominate:

  5n³ + 2n + 1 ~ 5n³

and:

  7n⁵ + 4n² + 8 ~ 7n⁵.

Therefore:

  aₙ ~ 5n³/(7n⁵) = 5/(7n²).

So a natural comparison is:

  bₙ = 1/n².

Since:

  Σ 1/n²

converges, the original series converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A VERY USEFUL SHORTCUT FOR RATIONAL FUNCTIONS

For:

  Σ (polynomial in n)/(polynomial in n),

look at the degrees.

Suppose:

  aₙ = P(n)/Q(n).

If:

  deg P = m

and:

  deg Q = k,

then approximately:

  aₙ ~ C n^(m-k).

Equivalently:

  aₙ ~ C/n^(k-m).

So compare with:

  1/n^(k-m).

Example:

  (n² + 3)/(n⁵ + 1)

has numerator degree 2 and denominator degree 5.

Therefore:

  aₙ ~ 1/n³.

Since:

  Σ 1/n³

converges, the original series converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ANOTHER EXAMPLE

Consider:

  Σₙ₌₁^∞ (n⁴ + 2)/(3n⁵ + 7).

The dominant terms are:

  n⁴

and:

  3n⁵.

Thus:

  aₙ ~ n⁴/(3n⁵) = 1/(3n).

Therefore, compare with:

  1/n.

Since the Harmonic Series diverges:

  Σₙ₌₁^∞ (n⁴ + 2)/(3n⁵ + 7) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DIRECT COMPARISON VS. LIMIT COMPARISON

These two tests are related but used differently.

  Feature           Direct Comparison        Limit Comparison
  ──────────────────────────────────────────────────────────────────────────
  Method            Direct inequality        Calculate a limit
  Main requirement  aₙ ≤ bₙ or bₙ ≤ aₙ      0 < L < ∞
  Difficulty        Sometimes difficult      Often easier
  Best for          Simple inequalities      Similar-looking expressions
  Common comparison p-series                 p-series
  Conclusion        One-sided                Same behavior

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A CRITICAL WARNING ABOUT INEQUALITIES

This is one of the most common mistakes.

Suppose:

  0 < aₙ < bₙ.

And suppose:

  Σ bₙ

diverges.

Can we conclude that:

  Σ aₙ

diverges?

No!

This tells us nothing.

For example:

  1/n² < 1/n.

We know:

  Σ 1/n

diverges, but:

  Σ 1/n²

converges.

So:

  smaller than a divergent series ≠ necessarily divergent.

Likewise, if:

  aₙ > bₙ

and:

  Σ bₙ

converges, we cannot conclude that aₙ converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BEST MEMORY TRICK

Think of the comparison like this:

Convergence:

You need to put your series under a known convergent series:

  0 ≤ aₙ ≤ bₙ

where:

  Σ bₙ

converges.

Then:

  Σ aₙ converges.

Divergence:

You need to put your series above a known divergent series:

  0 ≤ bₙ ≤ aₙ

where:

  Σ bₙ

diverges.

Then:

  Σ aₙ diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMPARISON WITH COMMON SERIES

When doing comparison problems, these are the series you should immediately recognize:

Harmonic Series:

  Σ 1/n diverges

p-Series:

  Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1

Geometric Series:

  Σ arⁿ converges if |r| < 1, diverges if |r| ≥ 1

These are the benchmark series that you will compare against.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. KEY FORMULAS TO REMEMBER

  Direct Comparison:
    For convergence:  0 ≤ aₙ ≤ bₙ and Σ bₙ converges ⇒ Σ aₙ converges
    For divergence:   0 ≤ bₙ ≤ aₙ and Σ bₙ diverges ⇒ Σ aₙ diverges

  Limit Comparison:
    L = lim_{n→∞} aₙ/bₙ, 0 < L < ∞ ⇒ same behavior

  p-Series:
    Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. SIMPLE SUMMARY

The Comparison Tests determine the convergence or divergence of an infinite series by comparing it with a known series.

The main strategy to remember is:

  Find what aₙ behaves like for large n.

Then compare it with a familiar series, usually a p-series:

  Σ 1/nᵖ.

The single most useful shortcut is:

For rational functions of n, compare the highest powers in the numerator and denominator.

For example:

  (n³ + 5)/(n⁷ + 2) ~ 1/n⁴

so it behaves like a convergent p-series.

Whereas:

  (n⁴ + 1)/(n⁵ + 3) ~ 1/n

so it behaves like the divergent Harmonic Series.

Easy way to remember: To prove convergence, find a bigger convergent series. To prove divergence, find a smaller divergent series. For rational functions, compare the highest powers.
  `,
  examples: [
    "Σ 1/(n² + 5) converges (compare with 1/n²)",
    "Σ 1/(n + 5) diverges (compare with 1/n)",
    "Σ (3n + 2)/(n³ + 1) converges (compare with 1/n²)",
    "Σ (2n + 1)/(n² + 3) diverges (compare with 1/n)",
    "Σ (n² + 3)/(n⁵ + 1) converges (degree comparison)",
    "Σ (n⁴ + 2)/(3n⁵ + 7) diverges (degree comparison)",
    "L = lim_{n→∞} aₙ/bₙ, 0 < L < ∞ ⇒ same behavior",
    "p > 1 → converges, p ≤ 1 → diverges",
    "Smaller than convergent → converges, larger than divergent → diverges",
  ],
};

export default topic;