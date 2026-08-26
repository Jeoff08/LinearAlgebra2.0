// filename: SeriesOfPositiveTerms.ts

const topic = {
  id: "series-of-positive-terms",
  title: "Series of Positive Terms",
  summary:
    "A comprehensive guide to series of positive terms in calculus. Covers definitions, partial sums, monotonicity, the Comparison Test, Limit Comparison Test, Integral Test, Ratio Test, Root Test, and the p-series.",
  details: `
A series of positive terms is an infinite series whose terms are all positive (or, more generally, nonnegative).

It has the form:

  Σₙ₌₁^∞ aₙ

where:

  aₙ > 0

for every n.

Examples include:

  1 + 1/2 + 1/3 + 1/4 + ...

and:

  1 + 1/4 + 1/9 + 1/16 + ....

Series of positive terms are extremely important in Calculus 2 because many of the major convergence tests—such as the Comparison Test, Limit Comparison Test, Integral Test, Ratio Test, and Root Test—are commonly applied to positive-term series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A SERIES OF POSITIVE TERMS?

Suppose we have a sequence:

  a₁, a₂, a₃, a₄, ...

If every term satisfies:

  aₙ > 0,

then the corresponding series:

  a₁ + a₂ + a₃ + a₄ + ...

is called a series of positive terms.

In sigma notation:

  Σₙ₌₁^∞ aₙ, aₙ > 0.

For example:

  Σₙ₌₁^∞ 1/n²

is a positive-term series because:

  1/n² > 0

for every positive integer n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLES

Example 1:

  Σₙ₌₁^∞ 1/n

The terms are:

  1, 1/2, 1/3, 1/4, ...

Every term is positive.

Therefore, it is a positive-term series.

Example 2:

  Σₙ₌₁^∞ 1/n²

The terms are:

  1, 1/4, 1/9, 1/16, ...

Again:

  aₙ > 0.

Therefore, it is a positive-term series.

Example 3:

  Σₙ₌₁^∞ 2ⁿ/3ⁿ

Rewrite:

  Σₙ₌₁^∞ (2/3)ⁿ.

Every term is positive, so it is also a positive-term geometric series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. PARTIAL SUMS OF POSITIVE-TERM SERIES

For:

  Σₙ₌₁^∞ aₙ,

the N-th partial sum is:

  S_N = a₁ + a₂ + ... + a_N

or:

  S_N = Σₙ₌₁^N aₙ.

Because every term is positive:

  aₙ > 0,

adding another term can never make the sum smaller.

Therefore:

  S₁ < S₂ < S₃ < S₄ < ...

The sequence of partial sums is automatically increasing.

This is one of the most important properties of positive-term series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY ARE PARTIAL SUMS INCREASING?

Suppose:

  S_N = a₁ + a₂ + ... + a_N.

The next partial sum is:

  S_N₊₁ = a₁ + a₂ + ... + a_N + a_N₊₁.

Therefore:

  S_N₊₁ = S_N + a_N₊₁.

Since:

  a_N₊₁ > 0,

we have:

  S_N₊₁ > S_N.

Thus:

  S₁ < S₂ < S₃ < ...

The partial sums form an increasing sequence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONNECTION TO BOUNDED SEQUENCES

This connects directly to the previous topic, Bounded Sequences.

We learned that:

  Increasing + Bounded Above → Convergent.

For a positive-term series, the partial sums are already increasing.

Therefore, the main question becomes:

  Are the partial sums bounded above?

If yes, the series converges.

If the partial sums are not bounded above, the series diverges.

This gives a very important theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THEOREM FOR POSITIVE-TERM SERIES

For a series of positive terms:

  Σₙ₌₁^∞ aₙ, aₙ > 0,

the series converges if and only if its partial sums are bounded above.

In other words:

  Σ aₙ converges ⇔ {S_N} is bounded above.

Why?

Because:

  aₙ > 0
  Therefore S_N is increasing.
  If S_N is bounded above, the Monotone Convergence Theorem says S_N converges.
  If S_N is not bounded above, then it grows without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: A CONVERGENT POSITIVE-TERM SERIES

Consider:

  Σₙ₌₁^∞ 1/2ⁿ.

This is:

  1/2 + 1/4 + 1/8 + 1/16 + ....

The partial sums are:

  S₁ = 1/2
  S₂ = 3/4
  S₃ = 7/8
  S₄ = 15/16.

Notice:

  1/2 < 3/4 < 7/8 < 15/16 < 1.

Therefore, the partial sums are:

  increasing,
  bounded above by 1.

Hence, they converge.

Indeed:

  Σₙ₌₁^∞ 1/2ⁿ = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: A DIVERGENT POSITIVE-TERM SERIES

Consider:

  Σₙ₌₁^∞ 1/n.

This is:

  1 + 1/2 + 1/3 + 1/4 + ....

The partial sums are:

  1,
  1.5,
  1.833...,
  2.083...,

and they continue increasing.

Although the terms become smaller:

  1/n → 0,

the partial sums are not bounded above.

Therefore:

  Σₙ₌₁^∞ 1/n diverges.

This is the famous harmonic series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. VERY IMPORTANT: TERMS MUST APPROACH ZERO

A necessary condition for any infinite series to converge is:

  lim_{n→∞} aₙ = 0.

Therefore, for a positive-term series:

  lim_{n→∞} aₙ ≠ 0 → diverges.

For example:

  Σₙ₌₁^∞ n/(n + 1).

The terms approach:

  lim_{n→∞} n/(n + 1) = 1.

Since:

  1 ≠ 0,

the series diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. BUT aₙ → 0 IS NOT ENOUGH

This is extremely important.

Suppose:

  lim_{n→∞} aₙ = 0.

That does not guarantee:

  Σ aₙ

converges.

The harmonic series demonstrates this:

  1/n → 0

but:

  Σₙ₌₁^∞ 1/n

diverges.

Therefore:

  aₙ → 0 is necessary but not sufficient for convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY POSITIVE-TERM SERIES ARE SPECIAL

For a general series, positive and negative terms can cancel each other.

For example:

  1 - 1 + 1/2 - 1/2 + 1/3 - 1/3 + ....

But in a positive-term series:

  aₙ > 0,

there is no cancellation.

Every new term adds something to the total.

Therefore:

  S_N₊₁ > S_N.

This makes positive-term series much easier to analyze using inequalities and comparison methods.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPARISON TEST

One of the most important tools for positive-term series is the Comparison Test.

Suppose:

  0 ≤ aₙ ≤ bₙ.

Then:

If the larger series converges:

If:

  Σ bₙ

converges, then:

  Σ aₙ converges.

If the smaller series diverges:

If:

  Σ aₙ

diverges, then:

  Σ bₙ diverges.

The basic idea is:

  A smaller positive series cannot have a larger total than a convergent larger series.

And:

  A larger positive series cannot converge if it is at least as large as a divergent positive series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE USING THE COMPARISON TEST

Determine whether:

  Σₙ₌₁^∞ 1/(n² + 1)

converges.

Since:

  n² + 1 > n²,

we have:

  1/(n² + 1) < 1/n².

Therefore:

  0 < 1/(n² + 1) < 1/n².

We know:

  Σₙ₌₁^∞ 1/n²

converges because it is a p-series with:

  p = 2 > 1.

Therefore, by comparison:

  Σₙ₌₁^∞ 1/(n² + 1) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE OF DIVERGENCE BY COMPARISON

Consider:

  Σₙ₌₁^∞ 1/(√n + 1).

For n ≥ 1:

  √n + 1 ≤ 2√n.

Therefore:

  1/(√n + 1) ≥ 1/(2√n).

Now:

  Σₙ₌₁^∞ 1/(2√n) = (1/2) Σₙ₌₁^∞ 1/n^(1/2).

Since:

  p = 1/2 < 1,

the p-series diverges.

Our original series is larger than a divergent positive series, so:

  Σₙ₌₁^∞ 1/(√n + 1) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LIMIT COMPARISON TEST

Sometimes direct inequalities are difficult.

For positive terms, we can use the Limit Comparison Test.

Suppose:

  aₙ > 0, bₙ > 0.

Calculate:

  L = lim_{n→∞} aₙ/bₙ.

If:

  0 < L < ∞,

then:

  Σ aₙ and Σ bₙ have the same behavior.

That means they either:

  both converge, or
  both diverge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: LIMIT COMPARISON

Consider:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1).

For large n, the dominant terms are:

  3n

and:

  n³.

So we compare with:

  3n/n³ = 3/n².

Take:

  bₙ = 1/n².

Calculate:

  L = lim_{n→∞} ((3n + 2)/(n³ + 1)) / (1/n²).

Simplify:

  L = lim_{n→∞} n²(3n + 2)/(n³ + 1).

Divide by n³:

  L = lim_{n→∞} (3 + 2/n)/(1 + 1/n³) = 3.

Since:

  0 < 3 < ∞,

the two series have the same behavior.

Since:

  Σ 1/n²

converges:

  Σₙ₌₁^∞ (3n + 2)/(n³ + 1) converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. p-SERIES

The p-series is one of the main comparison series for positive-term series:

  Σₙ₌₁^∞ 1/nᵖ.

The rule is:

  p > 1 → converges

and:

  p ≤ 1 → diverges.

Examples:

  Σ 1/n² → converges
  Σ 1/n³ → converges
  Σ 1/n → diverges
  Σ 1/√n → diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. INTEGRAL TEST

Another important test for positive-term series is the Integral Test.

Suppose:

  aₙ = f(n)

where f(x) is:

  positive,
  continuous,
  decreasing.

Then:

  Σₙ₌₁^∞ aₙ

and:

  ∫₁^∞ f(x) dx

either both converge or both diverge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE USING THE INTEGRAL TEST

Consider:

  Σₙ₌₁^∞ 1/n².

Use:

  f(x) = 1/x².

Evaluate:

  ∫₁^∞ 1/x² dx.

Rewrite:

  ∫₁^∞ x⁻² dx.

The antiderivative is:

  -x⁻¹.

Therefore:

  lim_{b→∞} [-1/x]₁^b.

This gives:

  lim_{b→∞} (-1/b + 1) = 1.

The integral converges, so:

  Σₙ₌₁^∞ 1/n² converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. RATIO TEST FOR POSITIVE TERMS

The Ratio Test is especially useful when a series contains:

  factorials,
  powers,
  exponential terms.

For:

  Σ aₙ,

calculate:

  L = lim_{n→∞} |aₙ₊₁/aₙ|.

Then:

  L < 1 → Converges absolutely
  L > 1 → Diverges
  L = 1 → Inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ROOT TEST

Another useful test is the Root Test.

Calculate:

  L = lim_{n→∞} √[n]{aₙ}

for positive aₙ, or more generally:

  L = lim_{n→∞} √[n]{|aₙ|}.

Then:

  L < 1 → Converges
  L > 1 → Diverges
  L = 1 → Inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. POSITIVE-TERM GEOMETRIC SERIES

A geometric series is a special type of positive-term series when:

  a > 0

and:

  r > 0.

For example:

  1 + 1/2 + 1/4 + 1/8 + ....

Since:

  0 < r < 1,

it converges.

Its sum is:

  S = a/(1 - r).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. POSITIVE-TERM SERIES AND MONOTONICITY

This is an important connection to the previous topic.

For:

  S_N = Σₙ₌₁^N aₙ

with:

  aₙ > 0,

we have:

  S_N₊₁ = S_N + a_N₊₁.

Therefore:

  S_N₊₁ > S_N.

So:

  {S_N} is increasing.

Then the question of convergence becomes:

  Is {S_N} bounded above?

If yes:

  Series converges.

If no:

  Series diverges.

This is the deeper reason positive-term series are so important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER

  Positive-term series:
    Σₙ₌₁^∞ aₙ, aₙ > 0

  Partial sum:
    S_N = Σₙ₌₁^N aₙ

  Increasing partial sums:
    S_N₊₁ = S_N + a_N₊₁ > S_N

  Necessary condition:
    Σ aₙ converges ⇒ lim_{n→∞} aₙ = 0

  p-series:
    Σₙ₌₁^∞ 1/nᵖ converges when p > 1, diverges when p ≤ 1

  Positive-term convergence principle:
    Positive terms + bounded partial sums → convergence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SIMPLE SUMMARY

The central idea of a series of positive terms is that every term adds something positive to the partial sum:

  S_N = a₁ + a₂ + ... + a_N.

Therefore:

  S₁ < S₂ < S₃ < S₄ < ....

The partial sums form an increasing sequence.

So the entire question of convergence becomes a question of boundedness:

  aₙ > 0
    ↓
  S_N is increasing
    ↓
  If S_N is bounded above
    ↓
  S_N converges
    ↓
  Σ aₙ converges

But if the partial sums are not bounded above:

  Σ aₙ diverges.

The most important lesson is therefore:

  For positive-term series, convergence is determined by whether the increasing partial sums remain bounded.

And this is exactly why the next topics—Comparison Test, Limit Comparison Test, Integral Test, Ratio Test, and Root Test—are so important: they give us practical ways to determine whether those partial sums stay bounded without having to calculate them directly.

Easy way to remember: Positive-term series have increasing partial sums. They converge if and only if the partial sums are bounded above. Use comparison tests, p-series, or the integral test to determine boundedness.
  `,
  examples: [
    "Σ 1/n diverges (harmonic series, p = 1)",
    "Σ 1/n² converges (p-series, p = 2 > 1)",
    "Σ 1/√n diverges (p = 1/2 < 1)",
    "Σ 1/2ⁿ = 1 (geometric, converges)",
    "Σ 1/(n² + 1) converges (comparison with 1/n²)",
    "Σ 1/(√n + 1) diverges (comparison with 1/√n)",
    "Σ (3n + 2)/(n³ + 1) converges (limit comparison with 1/n²)",
    "Positive terms → partial sums increasing",
    "Increasing + bounded above → convergent",
  ],
};

export default topic;