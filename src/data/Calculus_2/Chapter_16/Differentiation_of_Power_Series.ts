// filename: DifferentiationOfPowerSeries.ts

const topic = {
  id: "differentiation-of-power-series",
  title: "Differentiation of Power Series",
  summary:
    "A comprehensive guide to differentiating power series term-by-term. Covers the general formula, radius of convergence preservation, applications to geometric series, and connections to Taylor series.",
  details: `
Differentiation of power series is the process of finding the derivative of a function represented by an infinite power series.

This is extremely useful because instead of differentiating a complicated function directly, we can often differentiate its power series term-by-term.

The central idea is:

  Differentiate each term of the power series separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. START WITH A POWER SERIES

Recall that a general power series centered at a is:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Written out:

  f(x) = c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ...

We want to find:

  f'(x).

Differentiate each term:

  d/dx [c₀] = 0,
  d/dx [c₁(x - a)] = c₁,
  d/dx [c₂(x - a)²] = 2c₂(x - a),
  d/dx [c₃(x - a)³] = 3c₃(x - a)².

Therefore:

  f'(x) = c₁ + 2c₂(x - a) + 3c₃(x - a)² + ...

In summation notation:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

This is the main formula you need to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE DIFFERENTIATION RULE

If:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ

has radius of convergence R > 0, then within the interval:

  |x - a| < R

we can differentiate term-by-term:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

An important result is that the radius of convergence stays the same.

So if the original power series has radius:

  R,

then its differentiated power series also has radius:

  R.

The behavior at the endpoints may need to be checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES TERM-BY-TERM DIFFERENTIATION WORK?

You may wonder:

  How can we differentiate infinitely many terms?

For a power series, convergence gives us enough structure to do this inside its radius of convergence.

Suppose:

  f(x) = 1 + x + x² + x³ + x⁴ + ....

Within its interval of convergence, this infinite series represents a function.

We can then differentiate:

  f'(x) = 0 + 1 + 2x + 3x² + 4x³ + ....

So:

  d/dx (Σₙ₌₀^∞ cₙ(x - a)ⁿ) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC EXAMPLE

Consider:

  f(x) = 1 + x + x² + x³ + x⁴ + ....

Differentiate each term:

  f'(x) = 0 + 1 + 2x + 3x² + 4x³ + ....

Therefore:

  f'(x) = 1 + 2x + 3x² + 4x³ + ...

or:

  f'(x) = Σₙ₌₁^∞ n xⁿ⁻¹.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONNECTION WITH THE GEOMETRIC SERIES

We know:

  1 + x + x² + x³ + ... = 1/(1 - x)

for:

  |x| < 1.

Differentiate the left side:

  1 + 2x + 3x² + 4x³ + ....

Differentiate the right side:

  d/dx (1/(1 - x)) = 1/(1 - x)².

Therefore:

  1 + 2x + 3x² + 4x³ + ... = 1/(1 - x)²

for:

  |x| < 1.

This is a very important power-series identity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIFFERENTIATING A POWER SERIES CENTERED AT a

Suppose:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Differentiate:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

Notice what happens to the exponent:

  (x - a)ⁿ

becomes:

  n(x - a)ⁿ⁻¹.

This is simply the ordinary Power Rule:

  d/dx (x - a)ⁿ = n(x - a)ⁿ⁻¹.

So differentiating a power series is really applying the Power Rule to every term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE CENTERED AT x = 2

Consider:

  f(x) = 3 + 4(x - 2) + 5(x - 2)² + 6(x - 2)³ + ....

Differentiate:

  f'(x) = 4 + 10(x - 2) + 18(x - 2)² + ....

Let's see the terms individually:

  d/dx [3] = 0,
  d/dx [4(x - 2)] = 4,
  d/dx [5(x - 2)²] = 10(x - 2),
  d/dx [6(x - 2)³] = 18(x - 2)².

Therefore:

  f'(x) = 4 + 10(x - 2) + 18(x - 2)² + ....

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DIFFERENTIATING A SERIES WITH COEFFICIENTS

Consider:

  f(x) = Σₙ₌₀^∞ xⁿ/n!.

Differentiate term-by-term:

  f'(x) = Σₙ₌₁^∞ n xⁿ⁻¹/n!.

Since:

  n! = n(n - 1)!,

we have:

  n/n! = 1/(n - 1)!.

Therefore:

  f'(x) = Σₙ₌₁^∞ xⁿ⁻¹/(n - 1)!.

Let:

  k = n - 1.

Then:

  f'(x) = Σₖ₌₀^∞ xᵏ/k!.

But this is the original series:

  f(x) = eˣ.

Therefore:

  d/dx eˣ = eˣ.

This is a beautiful example of how power series can demonstrate familiar calculus results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIFFERENTIATING THE SINE SERIES

Recall:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ....

Differentiate term-by-term:

  d/dx (sin x) = 1 - 3x²/3! + 5x⁴/5! - 7x⁶/7! + ....

Simplify:

  3/3! = 1/2!,
  5/5! = 1/4!,

and so on.

Therefore:

  f'(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

But this is the power series for cos x.

Thus:

  d/dx sin x = cos x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIATING THE COSINE SERIES

Recall:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

Differentiate:

  -2x/2! + 4x³/4! - 6x⁵/6! + ....

Simplifying:

  -x + x³/3! - x⁵/5! + ....

This is:

  -sin x.

Therefore:

  d/dx cos x = -sin x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIATING THE GEOMETRIC SERIES MULTIPLE TIMES

Start with:

  1/(1 - x) = Σₙ₌₀^∞ xⁿ.

Differentiate once:

  1/(1 - x)² = Σₙ₌₁^∞ n xⁿ⁻¹.

Differentiate again:

  2/(1 - x)³ = Σₙ₌₂^∞ n(n - 1)xⁿ⁻².

Differentiate again:

  6/(1 - x)⁴ = Σₙ₌₃^∞ n(n - 1)(n - 2)xⁿ⁻³.

So repeated differentiation gives:

  dᵏ/dxᵏ (1/(1 - x)) = k!/(1 - x)ᵏ⁺¹.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HIGHER DERIVATIVES OF POWER SERIES

The differentiation process can be repeated.

If:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ,

then:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

Differentiate again:

  f''(x) = Σₙ₌₂^∞ n(n - 1)cₙ(x - a)ⁿ⁻².

Third derivative:

  f'''(x) = Σₙ₌₃^∞ n(n - 1)(n - 2)cₙ(x - a)ⁿ⁻³.

In general:

  f⁽ᵏ⁾(x) = Σₙ₌ₖ^∞ n(n - 1)...(n - k + 1)cₙ(x - a)ⁿ⁻ᵏ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONNECTION TO TAYLOR SERIES

This is where differentiation of power series becomes especially important.

Suppose:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ.

Then:

  f(a) = c₀.

Differentiate:

  f'(x) = c₁ + 2c₂(x - a) + 3c₃(x - a)² + ....

Set x = a:

  f'(a) = c₁.

Differentiate again:

  f''(a) = 2c₂.

Therefore:

  c₂ = f''(a)/2!.

Similarly:

  c₃ = f'''(a)/3!.

In general:

  cₙ = f⁽ⁿ⁾(a)/n!.

Substituting this into the power series gives the Taylor series:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ.

So differentiation of power series is one of the key ideas behind Taylor series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: FINDING TAYLOR COEFFICIENTS

Suppose:

  f(x) = eˣ.

We know:

  f'(x) = eˣ,
  f''(x) = eˣ,

and in fact:

  f⁽ⁿ⁾(x) = eˣ.

At x = 0:

  f⁽ⁿ⁾(0) = 1.

Therefore:

  cₙ = 1/n!.

Thus:

  eˣ = Σₙ₌₀^∞ xⁿ/n!.

This gives:

  eˣ = 1 + x + x²/2! + x³/3! + ....

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RADIUS OF CONVERGENCE AFTER DIFFERENTIATION

A very important theorem says:

If:

  Σₙ₌₀^∞ cₙ(x - a)ⁿ

has radius of convergence R, then:

  Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹

has the same radius of convergence.

Therefore:

  R_original = R_derivative.

For example:

  Σₙ₌₀^∞ xⁿ

has:

  R = 1.

Its derivative:

  Σₙ₌₁^∞ n xⁿ⁻¹

also has:

  R = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. BUT WHAT ABOUT THE ENDPOINTS?

Here's an important subtlety.

The radius stays the same, but the endpoint behavior can change.

Consider:

  Σₙ₌₁^∞ xⁿ/n.

Its interval of convergence is:

  [-1, 1).

Now differentiate:

  Σₙ₌₁^∞ xⁿ⁻¹.

Rewrite:

  Σₙ₌₀^∞ xⁿ.

This converges only when:

  |x| < 1.

So its interval is:

  (-1, 1).

Notice:

  Same radius, different endpoint behavior.

This is very important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY DOES THE RADIUS STAY THE SAME?

Differentiation introduces factors such as:

  n, n(n - 1), n(n - 1)(n - 2), ...

These factors grow, but not quickly enough to change the fundamental radius determined by the exponential rate of the coefficients.

For example:

  n^(1/n) → 1.

So factors like n do not change the radius of convergence.

This is why differentiation preserves the radius.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. KEY FORMULAS TO REMEMBER

  Power Series:
    f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ

  First Derivative:
    f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹

  Second Derivative:
    f''(x) = Σₙ₌₂^∞ n(n - 1)cₙ(x - a)ⁿ⁻²

  k-th Derivative:
    f⁽ᵏ⁾(x) = Σₙ₌ₖ^∞ n!/(n - k)! · cₙ(x - a)ⁿ⁻ᵏ

  Coefficient Formula:
    cₙ = f⁽ⁿ⁾(a)/n!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SIMPLE SUMMARY

If you have:

  f(x) = Σₙ₌₀^∞ cₙ(x - a)ⁿ,

then inside its radius of convergence:

  f'(x) = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹.

The most important facts are:

  Differentiate term-by-term.
  Apply the ordinary Power Rule to each term.
  The differentiated series has the same radius of convergence.
  The endpoints may behave differently, so check them separately.
  Repeated differentiation gives higher derivatives.
  Differentiation helps derive new power series from known ones.
  The derivatives of power series lead directly to Taylor series.
  The coefficients satisfy:
    cₙ = f⁽ⁿ⁾(a)/n!.

The key formula to remember:

  d/dx [Σₙ₌₀^∞ cₙ(x - a)ⁿ] = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹

Simple way to remember it:

  Bring the exponent down, multiply the coefficient, then reduce the exponent by 1—just like the ordinary Power Rule, but do it for every term of the infinite series.

Easy way to remember: Differentiate a power series by applying the Power Rule to each term. The radius of convergence stays the same, but endpoints may change. This connects directly to Taylor series coefficients.
  `,
  examples: [
    "f(x) = Σ xⁿ → f'(x) = Σ n xⁿ⁻¹ = 1 + 2x + 3x² + ...",
    "f(x) = 1/(1 - x) = Σ xⁿ → f'(x) = 1/(1 - x)² = Σ (n+1)xⁿ",
    "f(x) = Σ xⁿ/n! → f'(x) = Σ xⁿ/n! = f(x)",
    "d/dx (sin x) = cos x via power series",
    "d/dx (cos x) = -sin x via power series",
    "d/dx [Σₙ₌₀^∞ cₙ(x - a)ⁿ] = Σₙ₌₁^∞ n cₙ(x - a)ⁿ⁻¹",
    "R_original = R_derivative",
    "cₙ = f⁽ⁿ⁾(a)/n! (Taylor coefficient formula)",
  ],
};

export default topic;