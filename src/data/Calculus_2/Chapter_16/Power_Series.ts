// filename: PowerSeries.ts

const topic = {
  id: "power-series",
  title: "Power Series",
  summary:
    "A comprehensive guide to power series in calculus. Covers definitions, radius and interval of convergence, the Ratio Test and Root Test, endpoint testing, differentiation and integration of power series, and connections to Taylor series.",
  details: `
A power series is one of the most important topics in infinite series and is the foundation for many advanced ideas in calculus, including Taylor series, Maclaurin series, approximation, differential equations, and numerical methods.

The basic idea is that instead of having a polynomial with a finite number of terms, we allow the polynomial to have infinitely many terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A POWER SERIES?

A power series centered at a has the form:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

where:

  cₙ are constants called coefficients,
  x is the variable,
  a is the center of the power series,
  n is the term index.

Written out:

  c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ...

For example:

  Σₙ₌₀^∞ xⁿ

means:

  1 + x + x² + x³ + x⁴ + ....

This is a power series centered at:

  a = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL FORM

The general form is:

  c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ...

or using summation notation:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Notice the powers:

  (x - a)⁰, (x - a)¹, (x - a)², (x - a)³, ...

The exponent increases as n increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. POWER SERIES CENTERED AT ZERO

When:

  a = 0,

the power series becomes:

  Σₙ₌₀^∞ cₙ xⁿ.

Written out:

  c₀ + c₁x + c₂x² + c₃x³ + ....

This is sometimes called a Maclaurin-type power series.

For example:

  Σₙ₌₀^∞ xⁿ/n!

is:

  1 + x + x²/2! + x³/3! + x⁴/4! + ....

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POWER SERIES CENTERED AT a

Suppose the center is:

  a = 2.

Then the series looks like:

  Σₙ₌₀^∞ cₙ(x - 2)ⁿ.

For example:

  Σₙ₌₀^∞ (x - 2)ⁿ/3ⁿ.

Written out:

  1 + (x - 2)/3 + (x - 2)²/9 + (x - 2)³/27 + ....

The center is:

  a = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY ARE POWER SERIES IMPORTANT?

Power series allow us to represent complicated functions using powers of x.

For example:

  eˣ = 1 + x + x²/2! + x³/3! + ...

and:

  sin x = x - x³/3! + x⁵/5! - ....

This means we can approximate complicated functions using polynomials.

For example, instead of calculating e^0.1 directly, we can use:

  e^0.1 ≈ 1 + 0.1 + 0.1²/2! + 0.1³/3!.

Power series therefore connect infinite series to practical approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE MOST IMPORTANT IDEA: CONVERGENCE

A power series is an infinite series, so it does not necessarily converge for every value of x.

Consider:

  Σₙ₌₀^∞ xⁿ.

For some values of x, it converges.

For others, it diverges.

For example, if:

  x = 1/2,

we get:

  1 + 1/2 + 1/4 + 1/8 + ...,

which converges.

But if:

  x = 2,

we get:

  1 + 2 + 4 + 8 + 16 + ...,

which diverges.

Therefore, we need to determine where a power series converges.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTERVAL OF CONVERGENCE

A power series generally converges on an interval centered around its center a.

For example:

  Σₙ₌₀^∞ xⁿ/2ⁿ.

This can be written as:

  Σₙ₌₀^∞ (x/2)ⁿ.

It is a geometric series.

A geometric series converges when:

  |x/2| < 1.

Therefore:

  |x| < 2.

So:

  -2 < x < 2.

The interval of convergence initially is:

  (-2, 2).

But we must still check the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RADIUS OF CONVERGENCE

The radius of convergence tells us how far from the center the power series converges.

For a power series centered at a:

  Σ cₙ(x - a)ⁿ,

there is generally a number R such that:

  |x - a| < R

means the series converges.

The number R is called the radius of convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THREE REGIONS OF CONVERGENCE

For many power series:

Inside the radius:

  |x - a| < R

the series converges.

Outside the radius:

  |x - a| > R

the series diverges.

At the endpoints:

  |x - a| = R

we must test the endpoints individually.

This gives the important picture:

  Diverges    Converges    Diverges
  ←───────────    a    ───────────→

More precisely:

  a - R and a + R

are the endpoints that need individual testing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: GEOMETRIC POWER SERIES

Consider:

  Σₙ₌₀^∞ xⁿ.

This is:

  1 + x + x² + x³ + ....

Using the geometric series formula:

  Σₙ₌₀^∞ rⁿ

converges when:

  |r| < 1.

Here:

  r = x.

Therefore:

  |x| < 1.

So:

  -1 < x < 1.

Now check the endpoints.

At x = 1:

  1 + 1 + 1 + 1 + ...

diverges.

At x = -1:

  1 - 1 + 1 - 1 + ...

also diverges.

Therefore:

  Interval of convergence = (-1, 1)

and:

  R = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING THE RADIUS USING THE RATIO TEST

The Ratio Test is one of the most useful methods for finding the radius of convergence.

Suppose:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Let:

  uₙ = cₙ(x - a)ⁿ.

Calculate:

  L = lim_{n→∞} |uₙ₊₁/uₙ|.

The Ratio Test says the series converges when:

  L < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE USING THE RATIO TEST

Consider:

  Σₙ₌₀^∞ xⁿ/n!.

Let:

  uₙ = xⁿ/n!.

Calculate:

  |uₙ₊₁/uₙ|.

We get:

  |xⁿ⁺¹/(n + 1)! · n!/xⁿ|.

Simplify:

  = |x|/(n + 1).

Take the limit:

  lim_{n→∞} |x|/(n + 1) = 0.

Since:

  0 < 1

for every finite x, the series converges for every real number x.

Therefore:

  R = ∞.

The interval of convergence is:

  (-∞, ∞).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: POWER SERIES CENTERED AT 2

Consider:

  Σₙ₌₀^∞ (x - 2)ⁿ/5ⁿ.

Rewrite:

  Σₙ₌₀^∞ ((x - 2)/5)ⁿ.

This is geometric.

Therefore:

  |(x - 2)/5| < 1.

Multiply by 5:

  |x - 2| < 5.

Therefore:

  -5 < x - 2 < 5.

Add 2:

  -3 < x < 7.

So:

  R = 5

and the possible interval is:

  (-3, 7).

Now check endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CHECKING THE LEFT ENDPOINT

At:

  x = -3,

we get:

  (x - 2)/5 = (-5)/5 = -1.

The series becomes:

  Σₙ₌₀^∞ (-1)ⁿ.

This diverges.

Therefore, -3 is excluded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CHECKING THE RIGHT ENDPOINT

At:

  x = 7,

we get:

  (x - 2)/5 = 5/5 = 1.

The series becomes:

  Σₙ₌₀^∞ 1,

which diverges.

Therefore, 7 is also excluded.

Thus:

  Interval of convergence = (-3, 7)

and:

  R = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY ENDPOINT TESTING IS IMPORTANT

This is one of the most common mistakes students make.

Suppose you find:

  |x - a| < R.

You cannot automatically say:

  [a - R, a + R]

or even:

  (a - R, a + R)

without testing the endpoints.

The endpoints can behave differently.

For example, one endpoint might converge while the other diverges.

You must always check:

  x = a - R

and:

  x = a + R.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WHERE ONE ENDPOINT CONVERGES

Consider:

  Σₙ₌₁^∞ xⁿ/n.

Use the Ratio Test:

  uₙ = xⁿ/n.

Then:

  |uₙ₊₁/uₙ| = |xⁿ⁺¹/(n + 1) · n/xⁿ|.

Thus:

  = |x| · n/(n + 1).

Taking the limit:

  L = |x|.

For convergence:

  |x| < 1.

Therefore:

  -1 < x < 1.

Now check the endpoints.

At x = 1:

  Σ 1/n

diverges.

At x = -1:

  Σ (-1)ⁿ/n

converges by the Alternating Series Test.

Therefore:

  Interval of convergence = [-1, 1)

and:

  R = 1.

This example demonstrates why endpoint testing is essential.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. RADIUS VS. INTERVAL OF CONVERGENCE

These two concepts are related but different.

Radius of convergence:

A single number:

  R

that tells you the distance from the center where convergence occurs.

Interval of convergence:

The actual values of x for which the series converges.

For example:

  |x - 2| < 3.

The radius is:

  R = 3.

The basic interval is:

  -1 < x < 5.

After testing endpoints, the final interval could be something such as:

  [-1, 5)

depending on endpoint behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. POWER SERIES AS FUNCTIONS

A power series can define a function.

For example:

  f(x) = Σₙ₌₀^∞ xⁿ.

Inside its interval of convergence:

  f(x) = 1 + x + x² + x³ + ....

Using the geometric formula:

  f(x) = 1/(1 - x)

for:

  |x| < 1.

This is a powerful idea.

An infinite series can represent an ordinary function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. GEOMETRIC SERIES AS A POWER SERIES

The geometric series:

  1 + r + r² + r³ + ...

has sum:

  1/(1 - r),

provided:

  |r| < 1.

Replace r with x:

  1 + x + x² + x³ + ... = 1/(1 - x).

Therefore:

  1/(1 - x) = Σₙ₌₀^∞ xⁿ

for:

  |x| < 1.

This is one of the most important power series identities in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. DIFFERENTIATING A POWER SERIES

One of the major advantages of power series is that we can differentiate them term-by-term inside their interval of convergence.

Suppose:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Then:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

For example:

  f(x) = 1 + x + x² + x³ + ....

Differentiate:

  f'(x) = 1 + 2x + 3x² + 4x³ + ....

Since:

  f(x) = 1/(1 - x),

we know:

  f'(x) = 1/(1 - x)².

Therefore:

  1/(1 - x)² = 1 + 2x + 3x² + 4x³ + ...

for:

  |x| < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. INTEGRATING A POWER SERIES

Power series can also be integrated term-by-term.

If:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ,

then:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1)(x - a)ⁿ⁺¹.

For example:

  1/(1 - x) = 1 + x + x² + x³ + ....

Integrate:

  ∫ 1/(1 - x) dx = x + x²/2 + x³/3 + x⁴/4 + ... + C.

Since:

  ∫ 1/(1 - x) dx = -ln|1 - x| + C,

we obtain:

  -ln(1 - x) = x + x²/2 + x³/3 + x⁴/4 + ...

for:

  |x| < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. POWER SERIES AND TAYLOR SERIES

Power series are closely connected to Taylor series.

A Taylor series centered at a is:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ.

This is a special type of power series.

So:

  Every Taylor series is a power series

but not every arbitrary power series necessarily comes from a Taylor expansion of a function in the way Taylor's theorem describes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. MACLAURIN SERIES

When the center is:

  a = 0,

the Taylor series becomes a Maclaurin series:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ.

For example:

  eˣ = 1 + x + x²/2! + x³/3! + ....

This is a power series centered at zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. FAMOUS POWER SERIES

You should become familiar with several fundamental series.

Exponential function:

  eˣ = Σₙ₌₀^∞ xⁿ/n!

for all real x.

Sine:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ...

for all real x.

Cosine:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ...

for all real x.

Geometric series:

  1/(1 - x) = 1 + x + x² + x³ + ...

for:

  |x| < 1.

Natural logarithm:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ...

for:

  -1 < x ≤ 1

with the endpoint behavior requiring careful interpretation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. KEY FORMULAS TO REMEMBER

  Power Series:
    Σₙ₌₀^∞ cₙ(x - a)ⁿ

  Radius of Convergence:
    |x - a| < R (converges), |x - a| > R (diverges)

  Ratio Test for Radius:
    lim_{n→∞} |cₙ₊₁/cₙ| · |x - a| < 1

  Geometric Series:
    1/(1 - x) = Σₙ₌₀^∞ xⁿ, |x| < 1

  Exponential:
    eˣ = Σₙ₌₀^∞ xⁿ/n!

  Sine:
    sin x = Σₙ₌₀^∞ (-1)ⁿ x²ⁿ⁺¹/(2n + 1)!

  Cosine:
    cos x = Σₙ₌₀^∞ (-1)ⁿ x²ⁿ/(2n)!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. SIMPLE SUMMARY

A power series has the general form:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

where a is the center.

The two most important concepts are:

Radius of convergence:

  |x - a| < R

where R tells us how far from the center the series converges.

Interval of convergence:

The complete set of x-values for which the series converges, including or excluding endpoints after testing them individually.

The general structure is:

  |x - a| < R → converges
  |x - a| > R → diverges
  |x - a| = R → test separately

And remember:

A power series is essentially an infinite polynomial whose convergence depends on x.

The most important skills for this topic are:

  Recognizing a power series.
  Identifying its center.
  Using the Ratio Test or Root Test.
  Finding the radius of convergence.
  Finding the interval of convergence.
  Testing both endpoints separately.
  Understanding how power series can represent functions.
  Differentiating and integrating power series.
  Connecting power series to Taylor and Maclaurin series.
  Using power series to approximate complicated functions.

Easy way to remember: A power series is like an infinite polynomial centered at a. It converges within a radius R from the center. Always test the endpoints separately!
  `,
  examples: [
    "Σ xⁿ → R = 1, interval (-1, 1)",
    "Σ xⁿ/n! → R = ∞, interval (-∞, ∞)",
    "Σ (x - 2)ⁿ/5ⁿ → R = 5, interval (-3, 7)",
    "Σ xⁿ/n → R = 1, interval [-1, 1)",
    "1/(1 - x) = Σ xⁿ, |x| < 1",
    "eˣ = Σ xⁿ/n!, all x",
    "sin x = Σ (-1)ⁿ x²ⁿ⁺¹/(2n+1)!, all x",
    "cos x = Σ (-1)ⁿ x²ⁿ/(2n)!, all x",
    "Differentiate power series term-by-term",
    "Integrate power series term-by-term",
  ],
};

export default topic;