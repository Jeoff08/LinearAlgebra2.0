// filename: GeometricSeries.ts

const topic = {
  id: "geometric-series",
  title: "Geometric Series",
  summary:
    "A comprehensive guide to geometric series in calculus. Covers the general form, common ratio, convergence condition, infinite and finite sum formulas, and applications to power series.",
  details: `
A geometric series is an infinite series in which every term is obtained by multiplying the previous term by the same constant number.

That constant is called the common ratio.

For example:

  1 + 1/2 + 1/4 + 1/8 + 1/16 + ...

Each term is obtained by multiplying the previous term by:

  1/2.

Therefore:

  r = 1/2

and this is a geometric series.

Geometric series are one of the most important topics in Calculus 2 because they provide the foundation for understanding many later topics, including power series, Taylor series, Maclaurin series, and convergence tests.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GENERAL FORM OF A GEOMETRIC SERIES

A geometric series has the form:

  a + ar + ar² + ar³ + ar⁴ + ...

where:

  a = first term
  r = common ratio

In sigma notation:

  Σₙ₌₀^∞ arⁿ

For example:

  3 + 6 + 12 + 24 + 48 + ...

has:

  a = 3

and:

  r = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS THE COMMON RATIO?

The common ratio is the number used to multiply one term to obtain the next term.

For:

  2, 6, 18, 54, 162, ...

we calculate:

  6/2 = 3
  18/6 = 3
  54/18 = 3.

Therefore:

  r = 3.

The ratio is constant, so the sequence is geometric.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC SEQUENCE VS. GEOMETRIC SERIES

These two concepts should not be confused.

Geometric sequence:

  a, ar, ar², ar³, ...

This is simply a list of terms.

Geometric series:

  a + ar + ar² + ar³ + ...

This is the sum of those terms.

For example:

Sequence:

  1, 1/2, 1/4, 1/8, ...

Series:

  1 + 1/2 + 1/4 + 1/8 + ...

So:

  Sequence = terms
  Series = sum of terms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE INFINITE GEOMETRIC SERIES FORMULA

The most important formula is:

  Σₙ₌₀^∞ arⁿ = a/(1 - r)

but this formula works only when:

  |r| < 1.

This condition is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES THE FORMULA WORK?

Let's start with a finite geometric series:

  Sₙ = a + ar + ar² + ... + arⁿ.

Multiply both sides by r:

  rSₙ = ar + ar² + ar³ + ... + arⁿ⁺¹.

Now subtract:

  Sₙ - rSₙ = a - arⁿ⁺¹.

Factor the left side:

  Sₙ(1 - r) = a(1 - rⁿ⁺¹).

Therefore:

  Sₙ = a(1 - rⁿ⁺¹)/(1 - r)

This is the formula for the finite geometric sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FROM FINITE TO INFINITE

Now suppose:

  |r| < 1.

As n → ∞:

  rⁿ⁺¹ → 0.

Therefore:

  Sₙ = a(1 - rⁿ⁺¹)/(1 - r)

becomes:

  S = a(1 - 0)/(1 - r).

Thus:

  S = a/(1 - r).

That is the infinite geometric series formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY MUST |r| < 1?

This is the most important condition.

For the infinite geometric series to converge, the terms must approach zero:

  arⁿ → 0.

This happens when:

  |r| < 1.

For example:

  r = 1/2.

Then:

  (1/2)ⁿ → 0.

But if:

  r = 2,

then:

  2ⁿ → ∞.

The terms do not approach zero, so the series cannot converge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THREE IMPORTANT CASES

For a geometric series:

  Σₙ₌₀^∞ arⁿ,

there are three major cases.

Case 1: |r| < 1

  Converges

and:

  S = a/(1 - r).

Case 2: |r| > 1

  Diverges

because the terms grow instead of approaching zero.

Case 3: |r| = 1

  Diverges

because the terms do not approach zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 1: BASIC GEOMETRIC SERIES

Find:

  1 + 1/2 + 1/4 + 1/8 + ...

Identify:

  a = 1

and:

  r = 1/2.

Check convergence:

  |r| = 1/2 < 1.

Therefore, the series converges.

Use:

  S = a/(1 - r).

Thus:

  S = 1/(1 - 1/2).

Therefore:

  S = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2: FIRST TERM IS NOT 1

Find:

  3 + 3/2 + 3/4 + 3/8 + ...

The first term is:

  a = 3.

The common ratio is:

  r = (3/2)/3 = 1/2.

Since:

  |r| < 1,

the series converges.

Therefore:

  S = 3/(1 - 1/2).

So:

  S = 3/(1/2) = 6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 3: NEGATIVE COMMON RATIO

Consider:

  1 - 1/2 + 1/4 - 1/8 + 1/16 - ...

Here:

  a = 1

and:

  r = -1/2.

Notice the signs alternate:

  +, -, +, -, +, ...

Check:

  |r| = 1/2 < 1.

Therefore, the series converges.

Use:

  S = a/(1 - r).

Thus:

  S = 1/(1 - (-1/2)) = 1/(1 + 1/2) = 2/3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. NEGATIVE RATIOS AND OSCILLATION

When:

  -1 < r < 0,

the terms alternate signs.

For example:

  2 - 1 + 1/2 - 1/4 + 1/8 - ...

Here:

  r = -1/2.

The partial sums move back and forth:

  2, 1, 1.5, 1.25, 1.375, ...

Although the partial sums oscillate, the oscillations become smaller and smaller.

Eventually they approach:

  4/3.

Indeed:

  S = 2/(1 - (-1/2)) = 2/(3/2) = 4/3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 4: A DIVERGENT GEOMETRIC SERIES

Consider:

  1 + 2 + 4 + 8 + 16 + ...

Here:

  a = 1

and:

  r = 2.

Since:

  |r| = 2 > 1,

the series diverges.

Therefore:

  1 + 2 + 4 + 8 + ... diverges.

There is no finite sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE 5: RATIO EQUAL TO 1

Consider:

  5 + 5 + 5 + 5 + ...

Here:

  a = 5, r = 1.

Since:

  |r| = 1,

the series diverges.

Indeed, its partial sums are:

  5, 10, 15, 20, 25, ...

which grow without bound.

Therefore:

  Diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE 6: RATIO EQUAL TO -1

Consider:

  1 - 1 + 1 - 1 + 1 - 1 + ...

Here:

  r = -1.

The partial sums are:

  1, 0, 1, 0, 1, 0, ...

They oscillate and never approach a single number.

Therefore:

  The series diverges.

This demonstrates why:

  |r| = 1

does not satisfy the convergence condition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FINDING THE SUM WHEN THE SERIES STARTS AT n = 1

Be careful with the starting index.

Suppose:

  Σₙ₌₁^∞ arⁿ.

The first term is not a.

Instead:

  a₁ = ar.

Therefore:

  Σₙ₌₁^∞ arⁿ = ar/(1 - r)

when:

  |r| < 1.

For example:

  Σₙ₌₁^∞ (1/2)ⁿ

has first term:

  1/2.

Therefore:

  S = (1/2)/(1 - 1/2) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FINITE GEOMETRIC SERIES

Not every geometric series is infinite.

A finite geometric sum has the form:

  a + ar + ar² + ... + arⁿ⁻¹.

Its formula is:

  Sₙ = a(1 - rⁿ)/(1 - r)

when:

  r ≠ 1.

For example:

  2 + 6 + 18 + 54.

Here:

  a = 2, r = 3, n = 4.

Therefore:

  S₄ = 2(1 - 3⁴)/(1 - 3).

Since:

  3⁴ = 81,

we get:

  S₄ = 2(1 - 81)/(-2) = (-160)/(-2) = 80.

Indeed:

  2 + 6 + 18 + 54 = 80.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. INFINITE VS. FINITE GEOMETRIC SERIES

Finite:

  a + ar + ar² + ... + arⁿ⁻¹

Formula:

  Sₙ = a(1 - rⁿ)/(1 - r)

Infinite:

  a + ar + ar² + ar³ + ...

Formula:

  S = a/(1 - r)

provided:

  |r| < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. GEOMETRIC SERIES WITH FRACTIONS

Consider:

  5/2 + 5/4 + 5/8 + 5/16 + ...

First term:

  a = 5/2.

Common ratio:

  r = 1/2.

Since:

  |1/2| < 1,

the series converges.

Therefore:

  S = (5/2)/(1 - 1/2) = (5/2)/(1/2) = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. GEOMETRIC SERIES WITH A VARIABLE

Consider:

  1 + x + x² + x³ + x⁴ + ...

This is a geometric series where:

  a = 1

and:

  r = x.

Therefore:

  1 + x + x² + x³ + ... = 1/(1 - x)

provided:

  |x| < 1.

This formula is extremely important because it becomes the foundation of power series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE GEOMETRIC SERIES AS A FUNCTION

The formula:

  1 + x + x² + x³ + ... = 1/(1 - x)

means that the function:

  1/(1 - x)

can be represented by an infinite power series when:

  |x| < 1.

Thus:

  1/(1 - x) = Σₙ₌₀^∞ xⁿ

for:

  -1 < x < 1.

This is one of the most important connections between geometric series and later Calculus 2 topics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: GEOMETRIC SERIES AS A FUNCTION

Consider:

  1 + 2x + 4x² + 8x³ + ...

The first term is:

  a = 1

and the ratio is:

  r = 2x.

Therefore:

  S = 1/(1 - 2x)

provided:

  |2x| < 1.

Thus:

  -1/2 < x < 1/2.

Therefore:

  1 + 2x + 4x² + 8x³ + ... = 1/(1 - 2x)

for:

  |x| < 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. GEOMETRIC SERIES AND LIMITS

The reason geometric series work is directly connected to limits.

Recall the finite sum:

  Sₙ = a(1 - rⁿ)/(1 - r).

If:

  |r| < 1,

then:

  lim_{n→∞} rⁿ = 0.

Therefore:

  lim_{n→∞} Sₙ = a/(1 - r).

So the infinite geometric series formula is actually a consequence of the limit of the partial sums.

This is an important conceptual connection:

  Geometric Series → Partial Sums → Limits → Infinite Sum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. WHY DOES A GEOMETRIC SERIES CONVERGE?

Consider:

  1 + 1/2 + 1/4 + 1/8 + ...

The terms become smaller:

  1, 1/2, 1/4, 1/8, 1/16, ...

The partial sums are:

  1, 1.5, 1.75, 1.875, 1.9375, 1.96875, ...

The partial sums get closer and closer to 2.

They never need to "finish" adding infinitely many terms. Instead, the sequence of partial sums approaches a limit.

That limit is the infinite sum:

  2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMMON RATIO DETERMINES EVERYTHING

For a geometric series:

  a + ar + ar² + ...,

the common ratio r determines its behavior.

  0 < r < 1:
    Positive terms decrease toward zero.
    The series converges.

  -1 < r < 0:
    Terms alternate signs and shrink toward zero.
    The series converges.

  r > 1:
    Terms grow.
    The series diverges.

  r < -1:
    Terms alternate while growing in magnitude.
    The series diverges.

  r = 1:
    Terms remain constant.
    The series diverges.

  r = -1:
    Terms alternate between two values.
    The series diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK CLASSIFICATION TABLE

  Common ratio r        Behavior                    Result
  ──────────────────────────────────────────────────────────────
  0 < r < 1             Positive terms shrink       Converges
  -1 < r < 0            Alternating terms shrink    Converges
  r = 0                 All later terms are 0       Converges
  r = 1                 Constant terms              Diverges
  r = -1                Oscillates                  Diverges
  r > 1                 Terms grow                  Diverges
  r < -1                Alternating terms grow      Diverges

The complete rule is simply:

  |r| < 1 → converges
  |r| ≥ 1 → diverges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. KEY FORMULAS TO REMEMBER

  General geometric series:
    a + ar + ar² + ar³ + ...

  Sigma notation:
    Σₙ₌₀^∞ arⁿ

  Infinite geometric sum:
    S = a/(1 - r), |r| < 1

  Finite geometric sum:
    Sₙ = a(1 - rⁿ)/(1 - r), r ≠ 1

  Fundamental power series:
    1/(1 - x) = Σₙ₌₀^∞ xⁿ, |x| < 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. SIMPLE SUMMARY

The central idea behind a geometric series is repeated multiplication.

For:

  a + ar + ar² + ar³ + ...,

every term is obtained by multiplying by r.

If:

  |r| < 1,

the terms become smaller and smaller:

  arⁿ → 0.

The partial sums approach a finite number, so the series converges:

  Σₙ₌₀^∞ arⁿ = a/(1 - r).

If:

  |r| ≥ 1,

the terms do not shrink sufficiently toward zero, and the series diverges.

So the single most important rule to remember is:

  |r| < 1 → Geometric series converges
  |r| ≥ 1 → Geometric series diverges

And when it converges:

  S = a/(1 - r).

This formula and the condition |r| < 1 are two of the most important formulas to master before proceeding to the convergence tests for infinite series.

Easy way to remember: A geometric series converges when the common ratio has absolute value less than 1. The sum is the first term divided by (1 minus the ratio). If |r| ≥ 1, it diverges.
  `,
  examples: [
    "1 + 1/2 + 1/4 + ... = 2 (a = 1, r = 1/2)",
    "3 + 3/2 + 3/4 + ... = 6 (a = 3, r = 1/2)",
    "1 - 1/2 + 1/4 - 1/8 + ... = 2/3 (a = 1, r = -1/2)",
    "2 - 1 + 1/2 - 1/4 + ... = 4/3 (a = 2, r = -1/2)",
    "1 + 2 + 4 + 8 + ... diverges (r = 2 > 1)",
    "5 + 5 + 5 + ... diverges (r = 1)",
    "1 - 1 + 1 - 1 + ... diverges (r = -1)",
    "Σₙ₌₁^∞ (1/2)ⁿ = 1 (starts at n = 1)",
    "1 + x + x² + x³ + ... = 1/(1 - x), |x| < 1",
    "Sₙ = a(1 - rⁿ)/(1 - r) for finite geometric series",
  ],
};

export default topic;