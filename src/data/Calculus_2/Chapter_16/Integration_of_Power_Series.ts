// filename: IntegrationOfPowerSeries.ts

const topic = {
  id: "integration-of-power-series",
  title: "Integration of Power Series",
  summary:
    "A comprehensive guide to integrating power series term-by-term. Covers the general formula, radius of convergence preservation, applications to logarithmic and trigonometric series, and definite integrals.",
  details: `
Integration of Power Series is the process of integrating a power series term by term. This is one of the important operations involving power series because it allows us to find new functions whose derivatives or antiderivatives are represented by infinite series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A POWER SERIES?

A power series centered at a has the general form:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

or written out:

  c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ...

where:

  cₙ = coefficients
  a = center of the power series
  x = variable
  n = index of the terms

For example:

  Σₙ₌₀^∞ xⁿ

means:

  1 + x + x² + x³ + x⁴ + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES IT MEAN TO INTEGRATE A POWER SERIES?

Suppose we have:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ.

We can integrate the series term by term:

  ∫ f(x) dx = ∫ Σₙ₌₀^∞ cₙ(x - a)ⁿ dx.

Under the usual power-series conditions, this becomes:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹.

This is the fundamental rule for integrating a power series.

The important idea:

For every term:

  cₙ(x - a)ⁿ,

use the ordinary power rule:

  ∫ cₙ(x - a)ⁿ dx = cₙ/(n + 1) · (x - a)ⁿ⁺¹.

So we simply:

  Keep the coefficient cₙ.
  Increase the exponent n to n + 1.
  Divide the coefficient by n + 1.
  Add the constant C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BASIC FORMULA

If:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ,

then:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹.

This is sometimes called term-by-term integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SIMPLE EXAMPLE

Consider:

  f(x) = 1 + x + x² + x³ + ....

Integrate both sides:

  ∫ f(x) dx = ∫ (1 + x + x² + x³ + ...) dx.

Integrate each term:

  x + x²/2 + x³/3 + x⁴/4 + ... + C.

Therefore:

  ∫ f(x) dx = x + x²/2 + x³/3 + x⁴/4 + ... + C.

In sigma notation:

  ∫ f(x) dx = C + Σₙ₌₀^∞ xⁿ⁺¹/(n + 1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE USING A GENERAL COEFFICIENT

Suppose:

  f(x) = Σₙ₌₀^∞ xⁿ/2ⁿ.

We want:

  ∫ f(x) dx.

Apply the integration rule:

  ∫ Σₙ₌₀^∞ xⁿ/2ⁿ dx = Σₙ₌₀^∞ (1/2ⁿ) · xⁿ⁺¹/(n + 1) + C.

Therefore:

  ∫ f(x) dx = C + Σₙ₌₀^∞ xⁿ⁺¹/((n + 1)2ⁿ).

Writing the first few terms:

  x + x²/4 + x³/12 + x⁴/32 + ... + C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY IS TERM-BY-TERM INTEGRATION ALLOWED?

A power series behaves particularly well inside its interval of convergence.

Suppose:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

has radius of convergence R.

Then its integrated series:

  Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹

has the same radius of convergence R.

This is an extremely important fact:

  Integration does not change the radius of convergence.

However, the behavior at the endpoints of the interval may need to be checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RADIUS OF CONVERGENCE

Suppose:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ

has radius of convergence R.

After integration:

  F(x) = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹,

the radius remains:

  R.

For example, if the original power series converges for:

  |x| < 3,

then the integrated power series also converges for:

  |x| < 3.

Thus:

  -3 < x < 3.

But we still need to test x = -3 and x = 3 individually.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: FINDING THE INTEGRATED SERIES

Consider:

  f(x) = Σₙ₌₀^∞ xⁿ.

We know this is the geometric series:

  1 + x + x² + x³ + ...

and it converges when:

  |x| < 1.

Integrate:

  ∫ f(x) dx = Σₙ₌₀^∞ xⁿ⁺¹/(n + 1) + C.

Thus:

  x + x²/2 + x³/3 + x⁴/4 + ... + C

for:

  |x| < 1.

We can actually connect this with a familiar function.

Since:

  1 + x + x² + x³ + ... = 1/(1 - x),

we have:

  ∫ 1/(1 - x) dx = -ln|1 - x| + C.

Therefore:

  x + x²/2 + x³/3 + ... = -ln(1 - x)

for:

  -1 < x < 1.

This is a very important power-series representation:

  -ln(1 - x) = Σₙ₌₁^∞ xⁿ/n

for:

  |x| < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRATION OF A MACLAURIN SERIES

A Maclaurin series is simply a power series centered at 0:

  f(x) = Σₙ₌₀^∞ cₙxⁿ.

Integrating gives:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · xⁿ⁺¹.

Example

Suppose:

  f(x) = 1 + 2x + 3x² + 4x³ + ....

Then:

  ∫ f(x) dx = x + x² + x³ + x⁴ + ... + C.

Why?

  ∫ 1 dx = x
  ∫ 2x dx = x²
  ∫ 3x² dx = x³
  ∫ 4x³ dx = x⁴.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRATION OF A TAYLOR SERIES

For a Taylor series centered at a:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ,

integrating gives:

  ∫ f(x) dx = C + Σₙ₌₀^∞ f⁽ⁿ⁾(a)/(n + 1)! · (x - a)ⁿ⁺¹

because:

  (n + 1)! = (n + 1)n!.

This allows us to obtain a Taylor series for an antiderivative without directly computing the antiderivative first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: INTEGRATING THE SINE SERIES

Recall the Maclaurin series for sine:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ....

Integrate term by term:

  ∫ sin x dx = x²/2 - x⁴/(4·3!) + x⁶/(6·5!) - x⁸/(8·7!) + ... + C.

Therefore:

  ∫ sin x dx = x²/2 - x⁴/24 + x⁶/720 - x⁸/40320 + ... + C.

Notice that this series represents:

  -cos x + C.

If we choose the constant appropriately, we obtain an antiderivative of sin x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: INTEGRATING THE COSINE SERIES

The Maclaurin series for cosine is:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

Integrate:

  ∫ cos x dx = x - x³/(3·2!) + x⁵/(5·4!) - x⁷/(7·6!) + ... + C.

Therefore:

  ∫ cos x dx = x - x³/6 + x⁵/120 - x⁷/5040 + ... + C.

which is the power-series representation of:

  sin x + C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: INTEGRATING eˣ

The Maclaurin series of eˣ is:

  eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ....

Integrate term by term:

  ∫ eˣ dx = x + x²/2 + x³/3! + x⁴/4! + x⁵/5! + ... + C.

Notice something interesting:

  ∫ eˣ dx = eˣ + C

and the resulting power series is again the series for eˣ, except for the constant term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INTEGRATION WITH A CENTER a ≠ 0

Not every power series is centered at zero.

Suppose:

  f(x) = Σₙ₌₀^∞ cₙ(x - 2)ⁿ.

Then:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - 2)ⁿ⁺¹.

For example:

  f(x) = 1 + (x - 2) + (x - 2)² + (x - 2)³ + ....

Integrating:

  (x - 2) + (x - 2)²/2 + (x - 2)³/3 + (x - 2)⁴/4 + ... + C.

The center remains 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DEFINITE INTEGRALS OF POWER SERIES

Power series can also be used to calculate definite integrals.

Suppose:

  f(x) = Σₙ₌₀^∞ cₙxⁿ.

Then:

  ∫ₐᵇ f(x) dx = ∫ₐᵇ Σₙ₌₀^∞ cₙxⁿ dx.

We can integrate term by term:

  ∫ₐᵇ f(x) dx = Σₙ₌₀^∞ cₙ/(n + 1) · (bⁿ⁺¹ - aⁿ⁺¹)

provided the conditions for term-by-term integration are satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE OF A DEFINITE INTEGRAL

Consider:

  ∫₀^(1/2) 1/(1 - x) dx.

We know:

  1/(1 - x) = Σₙ₌₀^∞ xⁿ.

Therefore:

  ∫₀^(1/2) 1/(1 - x) dx = ∫₀^(1/2) Σₙ₌₀^∞ xⁿ dx.

Integrate term by term:

  = Σₙ₌₀^∞ (1/2)ⁿ⁺¹/(n + 1).

Thus:

  ∫₀^(1/2) 1/(1 - x) dx = Σₙ₌₀^∞ 1/((n + 1)2ⁿ⁺¹).

Since:

  ∫₀^(1/2) 1/(1 - x) dx = ln 2,

we obtain:

  ln 2 = 1/2 + 1/8 + 1/24 + 1/64 + ....

This demonstrates how power series can be used to approximate definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INTEGRATION CAN CREATE NEW SERIES REPRESENTATIONS

One of the most useful purposes of integrating power series is that we can start with a known series and generate a new function's series.

For example:

  1/(1 + x) = 1 - x + x² - x³ + x⁴ - ....

Integrate:

  ∫ 1/(1 + x) dx = x - x²/2 + x³/3 - x⁴/4 + ... + C.

Since:

  ∫ 1/(1 + x) dx = ln(1 + x) + C,

we obtain:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ...

for:

  -1 < x ≤ 1

with endpoint behavior checked separately.

This is a famous power-series representation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DIFFERENTIATION VS. INTEGRATION OF POWER SERIES

There is an important relationship between these two operations.

Differentiation:

If:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ,

then:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

Integration:

  ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹.

So:

Differentiation: n → n - 1 and multiply by n.

Integration: n → n + 1 and divide by n + 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHAT HAPPENS TO THE RADIUS OF CONVERGENCE?

This is a very important exam concept.

If:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

has radius of convergence R, then:

After differentiation:

  Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹

has radius:

  R.

After integration:

  Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹

also has radius:

  R.

However:

  The endpoints must be tested separately.

The radius staying the same does not automatically mean the interval of convergence has exactly the same endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT EXAMPLE ABOUT ENDPOINTS

Consider:

  Σₙ₌₀^∞ xⁿ.

Its radius is:

  R = 1.

Its interval of convergence is:

  (-1, 1).

After integration:

  Σₙ₌₀^∞ xⁿ⁺¹/(n + 1).

The radius is still:

  R = 1.

But now consider the endpoints.

At x = 1:

  Σₙ₌₀^∞ 1/(n + 1) = 1 + 1/2 + 1/3 + ....

This is the harmonic series, which diverges.

At x = -1:

  Σₙ₌₀^∞ (-1)ⁿ⁺¹/(n + 1)

which is an alternating harmonic series and converges.

Therefore, the integrated series has interval:

  [-1, 1)

while the original geometric series had:

  (-1, 1).

This illustrates why endpoints must be checked independently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY FORMULAS TO REMEMBER

  Power Series:
    f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ

  Integrated Series:
    ∫ f(x) dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹

  Radius after Integration:
    R_new = R_old

  Definite Integral:
    ∫ₐᵇ f(x) dx = Σₙ₌₀^∞ cₙ/(n + 1) · (bⁿ⁺¹ - aⁿ⁺¹)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. SIMPLE SUMMARY

The most important formula for this topic is:

  ∫ [Σₙ₌₀^∞ cₙ(x - a)ⁿ] dx = C + Σₙ₌₀^∞ cₙ/(n + 1) · (x - a)ⁿ⁺¹.

And the most important convergence rule is:

  Integration preserves the radius of convergence.

but:

  Always check the endpoints separately.

The central idea:

Think of integration of a power series as ordinary integration performed on every term of the infinite series:

  1 + x + x² + x³ + ...

becomes:

  x + x²/2 + x³/3 + x⁴/4 + ... + C.

That simple operation is the foundation for generating many important Taylor and Maclaurin series, including series for functions such as ln(1 + x), ln(1 - x), and other functions whose series can be obtained from known expansions.

Easy way to remember: Integrate a power series by applying the Power Rule to each term. Increase the exponent by 1 and divide by the new exponent. The radius of convergence stays the same, but endpoints may change.
  `,
  examples: [
    "∫ (1 + x + x² + ...) dx = x + x²/2 + x³/3 + ... + C",
    "∫ Σ xⁿ dx = Σ xⁿ⁺¹/(n+1) + C",
    "∫ 1/(1 - x) dx = -ln(1 - x) = Σ xⁿ/n",
    "∫ sin x dx = -cos x = x²/2 - x⁴/24 + x⁶/720 - ... + C",
    "∫ cos x dx = sin x = x - x³/6 + x⁵/120 - ... + C",
    "∫ eˣ dx = eˣ = x + x²/2 + x³/6 + ... + C",
    "∫₀^(1/2) 1/(1 - x) dx = ln 2 = Σ 1/((n+1)2ⁿ⁺¹)",
    "ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ...",
    "R_integrated = R_original",
  ],
};

export default topic;