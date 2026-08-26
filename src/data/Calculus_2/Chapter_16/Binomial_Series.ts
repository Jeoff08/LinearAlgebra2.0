// filename: BinomialSeries.ts

const topic = {
  id: "binomial-series",
  title: "Binomial Series",
  summary:
    "A comprehensive guide to the Binomial Series for expanding (1+x)^r where r is any real number. Covers the formula, generalized binomial coefficients, common expansions, radius of convergence, and applications.",
  details: `
The Binomial Series is a power series used to expand expressions of the form:

  (1 + x)ʳ

where r can be any real number, not only a positive integer.

It is an extension of the familiar Binomial Theorem.

For example, when r = 2:

  (1 + x)² = 1 + 2x + x²

is a finite polynomial.

But when r = 1/2:

  (1 + x)^(1/2) = 1 + (1/2)x - (1/8)x² + (1/16)x³ - ...

which is an infinite series.

This makes the Binomial Series extremely useful in Calculus 2 for:

  approximating functions,
  finding power series,
  evaluating difficult limits,
  integration,
  differentiation,
  and constructing Taylor/Maclaurin series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BINOMIAL THEOREM

Before understanding the Binomial Series, we need to understand the ordinary Binomial Theorem.

For a positive integer n:

  (a + b)ⁿ = Σₖ₌₀ⁿ C(n, k) aⁿ⁻ᵏ bᵏ

where:

  C(n, k) = n!/(k!(n - k)!)

For example:

  (1 + x)³

expands to:

  1 + 3x + 3x² + x³.

Because n = 3 is a positive integer, the expansion eventually stops.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT CHANGES IN THE BINOMIAL SERIES?

The Binomial Series allows the exponent to be a non-integer.

Instead of only considering:

  (1 + x)ⁿ

where n is a positive integer, we can consider:

  (1 + x)ʳ

where r can be:

  1/2, -1/2, 2/3, -3, √2, ...

When r is not a nonnegative integer, the expansion generally does not terminate.

Therefore, we get an infinite series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BINOMIAL SERIES FORMULA

The general Binomial Series is:

  (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + r(r - 1)(r - 2)/3! · x³ + ...

In sigma notation:

  (1 + x)ʳ = Σₙ₌₀^∞ C(r, n) xⁿ

where the generalized binomial coefficient is:

  C(r, n) = r(r - 1)(r - 2)...(r - n + 1)/n!

with:

  C(r, 0) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXPANDED GENERAL FORMULA

The first few terms are:

  (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + r(r - 1)(r - 2)/3! · x³ + r(r - 1)(r - 2)(r - 3)/4! · x⁴ + ...

This is the main formula you should memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING THE PATTERN

Look carefully at the coefficients:

  1
  r
  r(r - 1)/2!
  r(r - 1)(r - 2)/3!
  r(r - 1)(r - 2)(r - 3)/4!

Every new term:

  Adds another factor to the numerator.
  Increases the factorial in the denominator.
  Increases the power of x.

So the pattern is:

  r(r - 1)(r - 2)... / n! · xⁿ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GENERALIZED BINOMIAL COEFFICIENTS

For ordinary binomial coefficients, we have:

  C(n, k) = n!/(k!(n - k)!).

For a general real number r, we instead use:

  C(r, n) = r(r - 1)(r - 2)...(r - n + 1)/n!

For example:

  C(1/2, 2) = (1/2)(-1/2)/2! = (-1/4)/2 = -1/8.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: (1 + x)^(1/2)

This is one of the most important examples.

We want to expand:

  (1 + x)^(1/2).

Here:

  r = 1/2.

Use:

  (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + r(r - 1)(r - 2)/3! · x³ + ...

First term:

  1.

Second term:

  (1/2)x.

Third term:

  (1/2)(-1/2)/2! · x² = -1/8 x².

Fourth term:

  (1/2)(-1/2)(-3/2)/3! · x³.

Simplifying:

  (3/8)/6 = 1/16.

Therefore:

  (1 + x)^(1/2) = 1 + x/2 - x²/8 + x³/16 - 5x⁴/128 + ....

Since:

  (1 + x)^(1/2) = √(1 + x),

we have:

  √(1 + x) = 1 + x/2 - x²/8 + x³/16 - 5x⁴/128 + ....

This is one of the most useful Binomial Series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY DOES IT BECOME INFINITE?

Compare these two examples.

Integer exponent:

  (1 + x)³

The expansion is:

  1 + 3x + 3x² + x³.

It stops because eventually one factor becomes zero:

  3(3 - 1)(3 - 2)(3 - 3) = 0.

Therefore, all later terms are zero.

Non-integer exponent:

For:

  (1 + x)^(1/2),

we get:

  1/2, (1/2)(-1/2), (1/2)(-1/2)(-3/2), ...

There is no point where one factor becomes exactly zero.

Therefore, the expansion continues forever.

So:

  Nonnegative integer exponent → finite expansion

while generally:

  Non-integer exponent → infinite expansion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: (1 + x)^(-1/2)

Consider:

  (1 + x)^(-1/2).

Set:

  r = -1/2.

The Binomial Series gives:

  (1 + x)^(-1/2) = 1 - (1/2)x + (-1/2)(-3/2)/2! · x² + ....

Calculate:

  (-1/2)(-3/2)/2 = 3/8.

The next coefficient is:

  (-1/2)(-3/2)(-5/2)/3! = -5/16.

Thus:

  (1 + x)^(-1/2) = 1 - x/2 + 3x²/8 - 5x³/16 + 35x⁴/128 - ....

This is useful because:

  (1 + x)^(-1/2) = 1/√(1 + x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: (1 + x)^(-1)

Set:

  r = -1.

Then:

  (1 + x)^(-1) = 1 - x + x² - x³ + x⁴ - ....

Therefore:

  1/(1 + x) = 1 - x + x² - x³ + x⁴ - ....

This is the familiar geometric series.

So the geometric series is actually a special case of the Binomial Series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: (1 + x)²

Set:

  r = 2.

Then:

  (1 + x)² = 1 + 2x + 2(1)/2! · x² + 2(1)(0)/3! · x³ + ....

Therefore:

  (1 + x)² = 1 + 2x + x².

The series terminates because one of the factors becomes zero.

This demonstrates that the ordinary Binomial Theorem is contained within the Binomial Series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. BINOMIAL SERIES AND TAYLOR SERIES

There is a very important connection between them.

The Binomial Series:

  (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + ...

is actually the Maclaurin series of:

  f(x) = (1 + x)ʳ.

Let's verify.

Start with:

  f(x) = (1 + x)ʳ.

Then:

  f'(x) = r(1 + x)ʳ⁻¹.

At x = 0:

  f'(0) = r.

Next:

  f''(x) = r(r - 1)(1 + x)ʳ⁻².

Therefore:

  f''(0) = r(r - 1).

Next:

  f'''(0) = r(r - 1)(r - 2).

Substituting these into the Maclaurin formula produces:

  (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + ....

So the Binomial Series is directly connected to the Maclaurin Series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RADIUS OF CONVERGENCE

For the Binomial Series:

  (1 + x)ʳ = Σₙ₌₀^∞ C(r, n) xⁿ,

the radius of convergence is generally:

  R = 1

for non-integer r.

Thus, the series converges at least for:

  |x| < 1.

That means:

  -1 < x < 1.

However, the endpoints:

  x = -1

and:

  x = 1

must be checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY IS THE RADIUS 1?

We can demonstrate this using the Ratio Test.

Let:

  aₙ = C(r, n) xⁿ.

Then:

  |aₙ₊₁/aₙ| = |(r - n)/(n + 1) · x|.

As:

  n → ∞,

we have:

  |(r - n)/(n + 1)| → 1.

Therefore:

  lim_{n→∞} |aₙ₊₁/aₙ| = |x|.

The Ratio Test says convergence occurs when:

  |x| < 1.

Therefore:

  R = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ENDPOINT BEHAVIOR

The radius alone doesn't tell us everything.

We need to examine:

  x = 1

and:

  x = -1.

The behavior depends on r.

For example, with:

  r = 1/2,

we have:

  √(1 + x) = 1 + x/2 - x²/8 + x³/16 - ....

At x = 1, the series becomes:

  1 + 1/2 - 1/8 + 1/16 - ...,

which converges.

At x = -1, the series becomes:

  1 - 1/2 - 1/8 - 5/128 - ...,

which also converges to 0.

Thus, endpoint behavior must be checked separately rather than assumed from the radius.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT SPECIAL CASES

The Binomial Series contains many familiar series.

r = -1:

  1/(1 + x) = 1 - x + x² - x³ + ...

r = 1/2:

  √(1 + x) = 1 + x/2 - x²/8 + x³/16 - ...

r = -1/2:

  1/√(1 + x) = 1 - x/2 + 3x²/8 - 5x³/16 + ...

r = 1:

  (1 + x)¹ = 1 + x

r = 2:

  (1 + x)² = 1 + 2x + x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. BINOMIAL SERIES FOR (1 - x)ʳ

We can replace x with -x.

Starting from:

  (1 + x)ʳ,

replace x with -x:

  (1 - x)ʳ = 1 - rx + r(r - 1)/2! · x² - r(r - 1)(r - 2)/3! · x³ + ....

Therefore:

  (1 - x)ʳ = Σₙ₌₀^∞ C(r, n)(-x)ⁿ

for the appropriate convergence interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: √(1 - x)

Set:

  r = 1/2.

Then:

  √(1 - x) = 1 - x/2 - x²/8 - x³/16 - 5x⁴/128 - ....

Therefore:

  √(1 - x) = 1 - x/2 - x²/8 - x³/16 - 5x⁴/128 - ....

Notice that the signs and coefficients must be calculated carefully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. USING BINOMIAL SERIES TO APPROXIMATE SQUARE ROOTS

Suppose we want to approximate:

  √1.1.

Write:

  √1.1 = √(1 + 0.1).

Use:

  √(1 + x) = 1 + x/2 - x²/8 + x³/16 - ....

Set:

  x = 0.1.

Then:

  √1.1 ≈ 1 + 0.1/2 - 0.1²/8 + 0.1³/16.

Thus:

  √1.1 ≈ 1 + 0.05 - 0.00125 + 0.0000625.

Therefore:

  √1.1 ≈ 1.0488125

which is very close to the actual value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. USING BINOMIAL SERIES FOR MORE COMPLICATED EXPRESSIONS

Suppose we want to expand:

  √(4 + x).

First factor out 4:

  √(4 + x) = √(4(1 + x/4)).

Therefore:

  √(4 + x) = 2√(1 + x/4).

Now use:

  √(1 + u) = 1 + (1/2)u - (1/8)u² + (1/16)u³ - ....

Let:

  u = x/4.

Then:

  √(4 + x) = 2[1 + (1/2)(x/4) - (1/8)(x/4)² + (1/16)(x/4)³ - ...].

Simplifying:

  √(4 + x) = 2 + x/4 - x²/64 + x³/512 - ....

This technique is extremely useful in Calculus 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY FORMULAS TO REMEMBER

  Binomial Series:
    (1 + x)ʳ = Σₙ₌₀^∞ C(r, n) xⁿ

  Generalized Binomial Coefficient:
    C(r, n) = r(r - 1)(r - 2)...(r - n + 1)/n!

  Expanded Form:
    (1 + x)ʳ = 1 + rx + r(r - 1)/2! · x² + r(r - 1)(r - 2)/3! · x³ + ...

  Radius of Convergence:
    R = 1 (for non-integer r)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MACLAURIN SERIES FROM BINOMIAL SERIES

  √(1 + x) = 1 + x/2 - x²/8 + x³/16 - 5x⁴/128 + ... (r = 1/2)
  1/√(1 + x) = 1 - x/2 + 3x²/8 - 5x³/16 + 35x⁴/128 - ... (r = -1/2)
  1/(1 + x) = 1 - x + x² - x³ + x⁴ - ... (r = -1)
  1/(1 - x) = 1 + x + x² + x³ + x⁴ + ... (r = -1, with x replaced by -x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY

The Binomial Series extends the ordinary Binomial Theorem to exponents that are not necessarily positive integers.

The central formula is:

  (1 + x)ʳ = Σₙ₌₀^∞ r(r - 1)(r - 2)...(r - n + 1)/n! · xⁿ

The key things to understand are:

  The exponent r can be non-integer.
  Non-integer exponents generally produce infinite series.
  The coefficients use decreasing factors: r, r - 1, r - 2, ...
  Divide by n!.
  The series is a Maclaurin series for (1 + x)ʳ.
  For non-integer r, the radius of convergence is generally R = 1.
  Endpoints must be tested separately.
  You can substitute, differentiate, and integrate Binomial Series.
  Factoring expressions into the form (1 + u)ʳ is often the key step.

The most useful mental connection is:

  Binomial Theorem → Binomial Series → Maclaurin Series → Power-Series Methods

Once you recognize an expression that can be rewritten as (1 + u)ʳ, the Binomial Series gives you a powerful way to expand, approximate, differentiate, and integrate it.

Easy way to remember: The Binomial Series extends the Binomial Theorem to non-integer exponents. Use the formula (1+x)ʳ = 1 + rx + r(r-1)/2! x² + ... with generalized binomial coefficients. The radius of convergence is 1 for non-integer r.
  `,
  examples: [
    "√(1 + x) = 1 + x/2 - x²/8 + x³/16 - ... (r = 1/2)",
    "1/√(1 + x) = 1 - x/2 + 3x²/8 - 5x³/16 + ... (r = -1/2)",
    "1/(1 + x) = 1 - x + x² - x³ + ... (r = -1)",
    "(1 + x)² = 1 + 2x + x² (r = 2, terminates)",
    "√(4 + x) = 2 + x/4 - x²/64 + x³/512 - ... (factor first)",
    "√1.1 ≈ 1.0488125 (using binomial series)",
    "C(r, n) = r(r-1)(r-2)...(r-n+1)/n!",
    "(1 + x)ʳ = Σₙ₌₀^∞ C(r, n) xⁿ, R = 1 for non-integer r",
  ],
};

export default topic;