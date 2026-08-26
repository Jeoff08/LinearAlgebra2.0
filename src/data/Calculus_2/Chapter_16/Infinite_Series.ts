// filename: InfiniteSeries.ts

const topic = {
  id: "infinite-series",
  title: "Infinite Series",
  summary:
    "A comprehensive guide to infinite series in calculus. Covers definitions, convergence and divergence, partial sums, geometric series, p-series, harmonic series, telescoping series, and major convergence tests.",
  details: `
An infinite series is the sum of the terms of an infinite sequence.

This is one of the most important topics in Calculus 2 because it allows us to study how infinitely many numbers can be added together and whether that infinite sum approaches a finite value.

The key distinction is:

  Sequence = list of numbers

while:

  Series = sum of numbers

For example, the sequence:

  1, 1/2, 1/4, 1/8, ...

produces the infinite series:

  1 + 1/2 + 1/4 + 1/8 + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INFINITE SERIES?

Suppose we have a sequence:

  a₁, a₂, a₃, a₄, ...

The corresponding infinite series is:

  a₁ + a₂ + a₃ + a₄ + ...

or using sigma notation:

  Σₙ₌₁^∞ aₙ

The symbol:

  Σ

means "sum."

The notation:

  Σₙ₌₁^∞ aₙ

means that we add the terms starting from n = 1 and continue indefinitely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE OF AN INFINITE SERIES

Consider:

  1 + 1/2 + 1/4 + 1/8 + 1/16 + ...

In sigma notation:

  Σₙ₌₀^∞ (1/2)ⁿ

The terms are:

  (1/2)⁰ = 1
  (1/2)¹ = 1/2
  (1/2)² = 1/4
  (1/2)³ = 1/8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST IMPORTANT IDEA: PARTIAL SUMS

We cannot literally add infinitely many terms one at a time.

Instead, we study the partial sums.

For the series:

  Σₙ₌₁^∞ aₙ,

the first partial sum is:

  S₁ = a₁.

The second partial sum is:

  S₂ = a₁ + a₂.

The third partial sum is:

  S₃ = a₁ + a₂ + a₃.

In general:

  S_N = Σₙ₌₁^N aₙ

The infinite series is then studied by examining:

  lim_{N→∞} S_N

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONVERGENCE OF AN INFINITE SERIES

An infinite series:

  Σₙ₌₁^∞ aₙ

converges if its sequence of partial sums approaches a finite number.

That is:

  lim_{N→∞} S_N = S

where S is a finite number.

Then we say:

  Σₙ₌₁^∞ aₙ = S

For example:

  1 + 1/2 + 1/4 + 1/8 + ...

converges to:

  2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIVERGENCE OF AN INFINITE SERIES

If the partial sums do not approach a finite number, the series diverges.

For example:

  1 + 1 + 1 + 1 + ...

has partial sums:

  S₁ = 1
  S₂ = 2
  S₃ = 3
  S₄ = 4

and so on.

Thus:

  S_N = N.

Since:

  N → ∞,

the partial sums do not approach a finite number.

Therefore:

  Σₙ₌₁^∞ 1 diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SEQUENCE VS. INFINITE SERIES

This distinction is extremely important.

Consider:

  1/2, 1/4, 1/8, 1/16, ...

This is a sequence.

Its limit is:

  lim_{n→∞} 1/2ⁿ = 0.

But if we add the terms:

  1/2 + 1/4 + 1/8 + 1/16 + ...,

we have a series.

Its sum is:

  1.

So:

  lim aₙ

and:

  Σ aₙ

are completely different questions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PARTIAL SUMS EXAMPLE

Consider:

  1 + 1/2 + 1/4 + 1/8 + ...

The partial sums are:

  S₁ = 1
  S₂ = 1 + 1/2 = 3/2
  S₃ = 1 + 1/2 + 1/4 = 7/4
  S₄ = 1 + 1/2 + 1/4 + 1/8 = 15/8.

In decimal form:

  1, 1.5, 1.75, 1.875, ...

The partial sums get closer and closer to:

  2.

Therefore:

  Σₙ₌₀^∞ (1/2)ⁿ = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GEOMETRIC SERIES

The geometric series is one of the most important types of infinite series.

It has the form:

  a + ar + ar² + ar³ + ...

or:

  Σₙ₌₀^∞ arⁿ

where:

  a is the first term,
  r is the common ratio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GEOMETRIC SERIES FORMULA

If:

  |r| < 1,

then the geometric series converges and its sum is:

  Σₙ₌₀^∞ arⁿ = a/(1 - r)

This is one of the most important formulas in Calculus 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: GEOMETRIC SERIES

Find:

  1 + 1/2 + 1/4 + 1/8 + ...

Here:

  a = 1

and:

  r = 1/2.

Since:

  |1/2| < 1,

the series converges.

Use:

  S = a/(1 - r).

Therefore:

  S = 1/(1 - 1/2) = 1/(1/2) = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN DOES A GEOMETRIC SERIES DIVERGE?

If:

  |r| ≥ 1,

the geometric series diverges.

For example:

  1 + 2 + 4 + 8 + 16 + ...

has:

  r = 2.

Since:

  |2| > 1,

the series diverges.

Another example:

  1 - 1 + 1 - 1 + 1 - ...

has:

  r = -1.

Since:

  |-1| = 1,

the series diverges.

Therefore:

  |r| < 1 → converges

and:

  |r| ≥ 1 → diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE nth-TERM TEST FOR DIVERGENCE

There is a very important test called the nth-Term Test or Divergence Test.

If:

  Σₙ₌₁^∞ aₙ

converges, then it is necessary that:

  lim_{n→∞} aₙ = 0.

Therefore, if:

  lim_{n→∞} aₙ ≠ 0

then the series must diverge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE OF THE DIVERGENCE TEST

Consider:

  Σₙ₌₁^∞ n/(n + 1).

Find the term limit:

  lim_{n→∞} n/(n + 1).

Divide by n:

  lim_{n→∞} 1/(1 + 1/n) = 1.

Thus:

  lim_{n→∞} aₙ = 1.

Since:

  1 ≠ 0,

the series diverges.

Therefore:

  Σₙ₌₁^∞ n/(n + 1) diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT WARNING

The condition:

  lim_{n→∞} aₙ = 0

is necessary, but it is not sufficient.

That means:

  aₙ → 0

does not automatically mean:

  Σ aₙ

converges.

This is one of the biggest sources of confusion in Calculus 2.

For example:

  Σₙ₌₁^∞ 1/n

has:

  lim_{n→∞} 1/n = 0.

But the series still diverges.

This is called the harmonic series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. HARMONIC SERIES

The harmonic series is:

  Σₙ₌₁^∞ 1/n

or:

  1 + 1/2 + 1/3 + 1/4 + 1/5 + ....

Although:

  1/n → 0,

the sum increases without bound.

Therefore:

  Σₙ₌₁^∞ 1/n diverges.

This is an extremely important example.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY TERMS GOING TO ZERO IS NOT ENOUGH

Think about adding small numbers.

For example:

  1/n

becomes very small.

But there are infinitely many of them:

  1 + 1/2 + 1/3 + 1/4 + ....

Even though each individual term becomes small, the total accumulation continues growing.

Therefore:

  aₙ → 0 ⇏ Σ aₙ converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. p-SERIES

Another extremely important family is the p-series:

  Σₙ₌₁^∞ 1/nᵖ

The rule is:

  p > 1 → converges

and:

  p ≤ 1 → diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLES OF p-SERIES

Example 1:

  Σₙ₌₁^∞ 1/n²

Here:

  p = 2 > 1.

Therefore:

  Converges.

Example 2:

  Σₙ₌₁^∞ 1/n³

Here:

  p = 3 > 1.

Therefore:

  Converges.

Example 3:

  Σₙ₌₁^∞ 1/n

Here:

  p = 1.

Therefore:

  Diverges.

Example 4:

  Σₙ₌₁^∞ 1/√n

Rewrite:

  1/√n = 1/n^(1/2).

Thus:

  p = 1/2 < 1.

Therefore:

  Diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. TELESCOPING SERIES

A telescoping series is a series in which many terms cancel when the partial sums are calculated.

For example:

  Σₙ₌₁^∞ (1/n - 1/(n + 1)).

The first few terms are:

  (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ...

Almost everything cancels:

  1 - 1/2 + 1/2 - 1/3 + 1/3 - 1/4 + ...

leaving:

  1.

Therefore:

  Σₙ₌₁^∞ (1/n - 1/(n + 1)) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. POSITIVE-TERM SERIES

A positive-term series is a series in which:

  aₙ ≥ 0.

For example:

  Σₙ₌₁^∞ 1/n².

These series are often studied using:

  comparison tests,
  limit comparison,
  integral test,
  ratio test,
  root test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ALTERNATING SERIES

An alternating series has terms that change signs.

For example:

  1 - 1/2 + 1/3 - 1/4 + 1/5 - ...

It can be written:

  Σₙ₌₁^∞ (-1)ⁿ⁺¹ · 1/n

The signs alternate:

  +, -, +, -, +, -, ...

Alternating series are important because they have their own convergence test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. ALTERNATING SERIES TEST

Suppose:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ.

The series converges if:

Condition 1:

  bₙ > 0.

Condition 2:

  bₙ is decreasing.

Condition 3:

  lim_{n→∞} bₙ = 0.

Then:

  Σₙ₌₁^∞ (-1)ⁿ⁻¹ · bₙ converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. ABSOLUTE AND CONDITIONAL CONVERGENCE

This is another major concept.

Suppose:

  Σ aₙ

converges.

If:

  Σ |aₙ|

also converges, then the original series is absolutely convergent.

If:

  Σ aₙ

converges but:

  Σ |aₙ|

diverges, then it is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. EXAMPLE OF ABSOLUTE CONVERGENCE

Consider:

  Σₙ₌₁^∞ (-1)ⁿ/n².

Take the absolute value:

  Σₙ₌₁^∞ |(-1)ⁿ/n²| = Σₙ₌₁^∞ 1/n².

Since this is a p-series with:

  p = 2 > 1,

it converges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ/n² converges absolutely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. EXAMPLE OF CONDITIONAL CONVERGENCE

Consider:

  Σₙ₌₁^∞ (-1)ⁿ⁺¹/n.

This is the alternating harmonic series:

  1 - 1/2 + 1/3 - 1/4 + ....

It converges by the Alternating Series Test.

But its absolute-value series is:

  Σₙ₌₁^∞ 1/n,

which diverges.

Therefore:

  Σₙ₌₁^∞ (-1)ⁿ⁺¹/n is conditionally convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. COMPARISON TEST

Suppose:

  0 ≤ aₙ ≤ bₙ.

If the larger series:

  Σ bₙ

converges, then:

  Σ aₙ converges.

Conversely, if:

  0 ≤ bₙ ≤ aₙ

and:

  Σ bₙ

diverges, then:

  Σ aₙ diverges.

The basic idea is:

  Compare a difficult series with a simpler series whose behavior is already known.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. INTEGRAL TEST

For certain positive decreasing functions, we can compare a series with an improper integral.

If:

  f(n) = aₙ

and f(x) is positive, continuous, and decreasing, then:

  Σₙ₌₁^∞ aₙ

and:

  ∫₁^∞ f(x) dx

either both converge or both diverge.

For example:

  Σₙ₌₁^∞ 1/nᵖ

can be analyzed using:

  ∫₁^∞ 1/xᵖ dx.

This leads to the p-series rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. RATIO TEST

The Ratio Test is especially useful when factorials and exponentials appear.

For:

  Σ aₙ,

calculate:

  L = lim_{n→∞} |aₙ₊₁/aₙ|.

Then:

If:

  L < 1,

the series converges absolutely.

If:

  L > 1,

the series diverges.

If:

  L = 1,

the test is inconclusive.

Thus:

  L < 1 → absolute convergence
  L > 1 → divergence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. ROOT TEST

The Root Test uses the n-th root:

  L = lim_{n→∞} √[n]{|aₙ|}.

The rules are similar to the Ratio Test.

If:

  L < 1,

the series converges absolutely.

If:

  L > 1,

the series diverges.

If:

  L = 1,

the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. WHY INFINITE SERIES MATTER

Infinite series are powerful because they allow us to represent complicated functions using simpler expressions.

For example, the exponential function can be represented by:

  eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...

Similarly:

  sin x = x - x³/3! + x⁵/5! - ...

and:

  cos x = 1 - x²/2! + x⁴/4! - ....

These are power series and eventually lead to Taylor and Maclaurin series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. KEY FORMULAS TO REMEMBER

  Infinite series:         Σₙ₌₁^∞ aₙ
  Partial sum:             S_N = Σₙ₌₁^N aₙ
  Convergence:             lim_{N→∞} S_N = S
  Geometric series:        Σₙ₌₀^∞ arⁿ = a/(1 - r), |r| < 1
  p-series:                Σₙ₌₁^∞ 1/nᵖ converges if p > 1, diverges if p ≤ 1
  Necessary condition:     Σ aₙ converges ⇒ lim_{n→∞} aₙ = 0
  Alternating series test: Σ (-1)ⁿ⁻¹ bₙ converges if bₙ → 0 decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. SIMPLE SUMMARY

Think of infinite series as an extension of ordinary addition.

For a finite sum:

  2 + 4 + 6 + 8 = 20.

For an infinite series:

  2 + 1 + 1/2 + 1/4 + 1/8 + ...

we cannot simply finish adding all the terms because there is no final term.

Instead, we calculate the partial sums:

  S₁, S₂, S₃, ...

and ask:

  Do the partial sums approach a finite number?

If yes:

  The series converges.

If no:

  The series diverges.

The most important conceptual distinction is:

  Sequence → terms
  Infinite Series → sum of terms

and:

  Series converges ⇔ its partial sums approach a finite limit.

This concept is the foundation for the next major Calculus 2 topics: geometric series, convergence tests, power series, Taylor series, and Maclaurin series.

Easy way to remember: A series is the sum of a sequence. The key question is whether the partial sums approach a finite limit. The nth-term test is necessary but not sufficient for convergence.
  `,
  examples: [
    "Σₙ₌₀^∞ (1/2)ⁿ = 1 + 1/2 + 1/4 + ... = 2 (geometric, r = 1/2)",
    "Σₙ₌₁^∞ 1/n² = converges (p-series, p = 2 > 1)",
    "Σₙ₌₁^∞ 1/n = diverges (harmonic series, p = 1)",
    "Σₙ₌₁^∞ 1/√n = diverges (p-series, p = 1/2 < 1)",
    "Σₙ₌₁^∞ (1/n - 1/(n+1)) = 1 (telescoping)",
    "Σₙ₌₁^∞ (-1)ⁿ⁺¹/n = converges conditionally (alternating harmonic)",
    "Σₙ₌₁^∞ (-1)ⁿ/n² = converges absolutely (p = 2)",
    "Σₙ₌₁^∞ n/(n+1) diverges (nth-term test: limit = 1 ≠ 0)",
    "Geometric series converges only when |r| < 1",
  ],
};

export default topic;