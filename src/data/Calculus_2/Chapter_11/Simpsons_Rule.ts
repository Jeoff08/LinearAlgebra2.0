// filename: SimpsonsRule.ts

const topic = {
  id: "simpsons-rule",
  title: "Simpson's Rule",
  summary:
    "A comprehensive guide to Simpson's Rule for numerical integration. Covers the formula, derivation, coefficient pattern, error analysis, and comparison with the Trapezoidal Rule. Requires n to be even.",
  details: `
Simpson's Rule is a numerical integration technique used to approximate a definite integral when finding an exact antiderivative is difficult, complicated, or impossible.

It is one of the most important numerical integration methods in Calculus 2.

The basic idea is:

  Instead of approximating the curve with rectangles or straight lines, Simpson's Rule approximates the curve using quadratic functions (parabolas).

This often makes Simpson's Rule more accurate than the Left Riemann Sum, Right Riemann Sum, and Trapezoidal Rule for sufficiently smooth functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE PROBLEM SIMPSON'S RULE SOLVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate:

  ∫ₐᵇ f(x) dx.

If we can find an antiderivative F(x), then:

  ∫ₐᵇ f(x) dx = F(b) - F(a).

But some functions don't have convenient elementary antiderivatives.

For example:

  ∫₀¹ e^(-x²) dx.

There is no elementary function F(x) such that:

  F'(x) = e^(-x²).

Instead, we can approximate the integral numerically.

Simpson's Rule gives us one way to do that.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several ways to approximate a curve.

Riemann Sum

Uses:

  rectangles

Trapezoidal Rule

Uses:

  straight-line segments

Simpson's Rule

Uses:

  parabolic curves

A parabola can often follow a curved function more closely than a straight line.

Therefore:

  Simpson's Rule can provide a highly accurate approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BASIC SIMPSON'S RULE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Composite Simpson's Rule is:

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 2f(xₙ₋₂) + 4f(xₙ₋₁) + f(xₙ)]

where:

  Δx = (b - a)/n

and:

  n must be even.

That last condition is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY MUST n BE EVEN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simpson's Rule works by fitting a parabola through three consecutive points.

For example:

  x₀, x₁, x₂.

Then another parabola is used for:

  x₂, x₃, x₄.

Then:

  x₄, x₅, x₆.

Notice that each parabola covers two subintervals.

Therefore, the total number of subintervals must be even:

  n = 2, 4, 6, 8, ...

Valid:

  n = 4
  n = 6
  n = 10

Invalid:

  n = 3
  n = 5
  n = 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY ARE THE COEFFICIENTS 1, 4, 2, 4, 2, ..., 4, 1?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important parts of Simpson's Rule.

The pattern is:

  1, 4, 2, 4, 2, ..., 4, 1

The first and last function values have coefficient:

  1.

The odd-indexed interior values have coefficient:

  4.

The even-indexed interior values have coefficient:

  2.

Therefore:

  Sₙ = (Δx/3)[1·f(x₀) + 4·f(x₁) + 2·f(x₂) + 4·f(x₃) + ... + 4·f(xₙ₋₁) + 1·f(xₙ)]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHERE DOES SIMPSON'S RULE COME FROM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have three points:

  (x₀, f(x₀)),
  (x₁, f(x₁)),
  (x₂, f(x₂)).

Instead of assuming the curve is a straight line, Simpson's Rule finds a quadratic polynomial:

  p(x) = Ax² + Bx + C

that passes through these three points.

Then instead of integrating the original complicated function, we approximate:

  ∫ₓ₀ˣ² f(x) dx

using:

  ∫ₓ₀ˣ² p(x) dx.

The result produces the famous coefficients:

  1, 4, 1.

For one pair of intervals:

  ∫ₓ₀ˣ² f(x) dx ≈ (Δx/3)[f(x₀) + 4f(x₁) + f(x₂)]

When we combine many pairs of intervals, we get:

  1, 4, 2, 4, 2, ..., 4, 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE BASIC THREE-POINT SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For two subintervals, the formula is:

  ∫ₓ₀ˣ² f(x) dx ≈ (Δx/3)[f(x₀) + 4f(x₁) + f(x₂)]

This is sometimes called the one-panel Simpson's Rule.

The points are:

  x₀, x₁, x₂.

The coefficients are:

  1, 4, 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 1: SIMPLE SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀² x² dx

using Simpson's Rule with:

  n = 2.

First:

  Δx = (2 - 0)/2 = 1.

The x-values are:

  x₀ = 0,
  x₁ = 1,
  x₂ = 2.

Our function is:

  f(x) = x².

Therefore:

  f(0) = 0,
  f(1) = 1,
  f(2) = 4.

Apply Simpson's Rule:

  S₂ = (1/3)[f(0) + 4f(1) + f(2)].

Substitute:

  S₂ = (1/3)[0 + 4(1) + 4].

Therefore:

  S₂ = (1/3)(8).

Thus:

  S₂ = 8/3

or:

  S₂ ≈ 2.6667

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SOMETHING IMPORTANT HAPPENED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exact integral is:

  ∫₀² x² dx = [x³/3]₀² = 8/3.

Therefore:

  S₂ = 8/3

which means Simpson's Rule gave the exact answer.

Why?

Because:

  f(x) = x²

is itself a quadratic function.

Simpson's Rule uses a quadratic approximation, so it reproduces quadratic functions exactly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2: SIMPSON'S RULE WITH FOUR SUBINTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀² x² dx

using:

  n = 4.

First:

  Δx = (2 - 0)/4 = 0.5.

The x-values are:

  0, 0.5, 1, 1.5, 2.

Calculate the function values:

  x     f(x) = x²
  ──────────────
  0     0
  0.5   0.25
  1     1
  1.5   2.25
  2     4

Now use:

  S₄ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + f(x₄)].

Substitute:

  S₄ = (0.5/3)[0 + 4(0.25) + 2(1) + 4(2.25) + 4].

Simplify:

  S₄ = (1/6)[0 + 1 + 2 + 9 + 4].

Therefore:

  S₄ = 16/6 = 8/3.

Thus:

  S₄ = 8/3 ≈ 2.6667

Again, it is exact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. GENERAL STEP-BY-STEP PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Simpson's Rule problem, follow these steps.

Step 1: Identify a, b, and n

Given:

  ∫ₐᵇ f(x) dx.

Step 2: Make sure n is even

Remember:

  n = 2, 4, 6, 8, ...

If n is odd, the standard Composite Simpson's Rule cannot be applied directly to the entire interval.

Step 3: Calculate Δx

  Δx = (b - a)/n

Step 4: Generate the x-values

Use:

  xᵢ = a + iΔx

for:

  i = 0, 1, ..., n.

Step 5: Calculate f(xᵢ)

Evaluate:

  f(x₀), f(x₁), ..., f(xₙ).

Step 6: Apply the coefficient pattern

Use:

  1, 4, 2, 4, 2, ..., 4, 1

Step 7: Multiply by Δx/3

Finally:

  Sₙ = (Δx/3)(weighted sum)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A COMPLETE EXAMPLE WITH A NON-POLYNOMIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀¹ e^(-x²) dx

using Simpson's Rule with:

  n = 4.

This is a great example because the integral doesn't have an elementary antiderivative.

Step 1: Calculate Δx

  Δx = (1 - 0)/4 = 0.25.

Step 2: Find the x-Values

  x₀ = 0
  x₁ = 0.25
  x₂ = 0.5
  x₃ = 0.75
  x₄ = 1.

Step 3: Calculate Function Values

Our function is:

  f(x) = e^(-x²).

Approximately:

  f(0) = 1,
  f(0.25) ≈ 0.9394,
  f(0.5) ≈ 0.7788,
  f(0.75) ≈ 0.5698,
  f(1) ≈ 0.3679.

Step 4: Apply Simpson's Rule

  S₄ = (0.25/3)[1 + 4(0.9394) + 2(0.7788) + 4(0.5698) + 0.3679].

This gives approximately:

  S₄ ≈ 0.7468

The important point is that we obtained a numerical approximation even though:

  ∫ e^(-x²) dx

does not have an elementary antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY SIMPSON'S RULE IS ACCURATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule uses a linear approximation:

  f(x) ≈ Ax + B.

Simpson's Rule uses a quadratic approximation:

  f(x) ≈ Ax² + Bx + C.

A quadratic function can capture curvature.

Therefore, Simpson's Rule often follows the original function more closely.

Conceptually:

  Rectangle → Line → Parabola

The parabola generally provides a better local approximation to a smooth curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ERROR OF SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For sufficiently smooth functions, the error can be written as:

  E_S = -[(b - a)⁵/(180n⁴)] · f⁽⁴⁾(ξ)

for some:

  ξ ∈ (a, b).

This means Simpson's Rule depends on the fourth derivative of the function.

If:

  |f⁽⁴⁾(x)| ≤ K,

then:

  |E_S| ≤ K(b - a)⁵/(180n⁴)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY n⁴ IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Compare the error orders.

For the Trapezoidal Rule:

  O(1/n²)

For Simpson's Rule:

  O(1/n⁴)

The fourth power means that increasing n can dramatically improve the approximation.

For example, if n is doubled:

  n → 2n,

then approximately:

  1/(2n)⁴ = 1/(16n⁴).

So the error can decrease by roughly a factor of:

  16

under the usual smoothness assumptions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPSON'S RULE AND POLYNOMIAL ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One particularly important fact is:

  Simpson's Rule is exact for every polynomial of degree 3 or less.

That means it is exact for:

  f(x) = 1,
  f(x) = x,
  f(x) = x²,

and:

  f(x) = x³.

Even though Simpson's Rule uses quadratic approximations, the symmetry of the method makes it exact for cubic polynomials as well.

It is generally not exact for arbitrary fourth-degree or higher polynomials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH A CUBIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫₀² x³ dx.

The exact answer is:

  [x⁴/4]₀² = 16/4 = 4.

Using Simpson's Rule with n = 2:

  Δx = 1.

Function values:

  f(0) = 0,
  f(1) = 1,
  f(2) = 8.

Therefore:

  S₂ = (1/3)[0 + 4(1) + 8].

Thus:

  S₂ = 12/3 = 4.

So:

  S₂ = 4

which is exactly correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPSON'S RULE VS. TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the difference:

Trapezoidal Rule

Uses:

  1, 2, 2, 2, ..., 2, 1

and:

  Tₙ = (Δx/2)[weighted sum]

Simpson's Rule

Uses:

  1, 4, 2, 4, 2, ..., 4, 1

and:

  Sₙ = (Δx/3)[weighted sum]

The coefficient patterns are very important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SIDE-BY-SIDE COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature              Trapezoidal Rule        Simpson's Rule
  ──────────────────────────────────────────────────────────────────────────
  Approximation        Straight lines           Parabolas
  Basic coefficients   1, 2, ..., 2, 1         1, 4, 2, 4, ..., 4, 1
  Multiplier           Δx/2                    Δx/3
  Requirement on n     Any positive integer    n must be even
  Error order          O(1/n²)                 O(1/n⁴)
  Requires smoothness  Yes                     Yes
  Generally more       Less                    More
  accurate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. WHAT IF n IS ODD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard Composite Simpson's Rule requires:

  n even.

Suppose a problem gives:

  n = 5.

You cannot directly apply the standard Simpson's Rule formula to all five subintervals.

One common approach is to use Simpson's Rule on an even number of subintervals and another numerical method on the remaining interval, such as the Trapezoidal Rule.

However, in most introductory Calculus problems, the problem will specify an even n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SIMPSON'S RULE WITH TABULATED DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simpson's Rule can also work with a table of measured values.

Suppose:

  x     f(x)
  ──────────
  0     2
  1     4
  2     5
  3     7
  4     10

There are:

  n = 4

subintervals, which is valid.

Since:

  Δx = 1,

we have:

  S₄ = (1/3)[2 + 4(4) + 2(5) + 4(7) + 10].

Therefore:

  S₄ = (1/3)[2 + 16 + 10 + 28 + 10].

Thus:

  S₄ = 66/3.

So:

  S₄ = 22.

This illustrates why Simpson's Rule is useful even when you don't know an explicit formula for the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. SIMPSON'S RULE FOR AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that a definite integral represents signed area.

If:

  f(x) > 0,

then:

  ∫ₐᵇ f(x) dx

represents positive area.

If:

  f(x) < 0,

the integral contributes negative area.

Simpson's Rule follows the same principle.

If the graph crosses the x-axis, you may need to divide the integral into separate intervals if the question asks for total geometric area rather than signed area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPSON'S RULE AND APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simpson's Rule has many practical applications.

Physics

Estimating quantities such as:

  displacement;
  work;
  mass;
  energy.

Engineering

Estimating:

  areas;
  volumes;
  loads;
  physical measurements.

Statistics

Approximating probabilities involving complicated density functions.

Computer Science

Numerical algorithms can use Simpson's Rule to approximate integrals in simulations and scientific computing.

Data Science

When data points are sampled from a continuous process, numerical integration can estimate cumulative quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using an odd n

Remember:

  n must be even.

Mistake 2: Using the Trapezoidal coefficients

Do not use:

  1, 2, 2, 2, ..., 2, 1.

Those belong to the Trapezoidal Rule.

Simpson's Rule uses:

  1, 4, 2, 4, 2, ..., 4, 1

Mistake 3: Forgetting Δx/3

The complete formula contains:

  Δx/3

not simply Δx.

Mistake 4: Giving every interior point the same coefficient

The coefficients alternate:

  4, 2, 4, 2, 4, ...

They do not all equal 2 or 4.

Mistake 5: Using the wrong number of x-values

If:

  n = 4,

you need:

  n + 1 = 5

points:

  x₀, x₁, x₂, x₃, x₄.

Remember:

  number of points = n + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. A FAST WAY TO SOLVE SIMPSON'S RULE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an exam, you can use this checklist:

Given:

  ∫ₐᵇ f(x) dx

and n.

Do this:

1. Check n:

  n = even?

2. Find:

  Δx = (b - a)/n.

3. Create the x-values:

  xᵢ = a + iΔx.

4. Calculate:

  f(x₀), f(x₁), ..., f(xₙ).

5. Apply:

  1, 4, 2, 4, 2, ..., 4, 1

6. Multiply by:

  Δx/3.

7. Report the approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Δx = (b - a)/n

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 2f(xₙ₋₂) + 4f(xₙ₋₁) + f(xₙ)]

  n must be even

  |E_S| ≤ K(b - a)⁵/(180n⁴)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. THE MOST IMPORTANT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you remember only one formula from this topic, remember:

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 2f(xₙ₋₂) + 4f(xₙ₋₁) + f(xₙ)]

with:

  Δx = (b - a)/n

and:

  n is even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simpson's Rule is a numerical integration method that approximates a definite integral by replacing sections of a curve with parabolic approximations.

The central concept is:

  Curve → Parabolic approximations → Approximate area

The coefficient pattern is:

  1, 4, 2, 4, 2, ..., 4, 1

and the formula is:

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 4f(xₙ₋₁) + f(xₙ)]

where:

  Δx = (b - a)/n

and:

  n must be even.

The key difference to remember is:

  Trapezoidal Rule → straight lines

while:

  Simpson's Rule → parabolas

Because Simpson's Rule uses quadratic approximations, it is generally much more accurate for smooth functions, with an error that behaves like:

  O(1/n⁴)

compared with the Trapezoidal Rule's:

  O(1/n²).

And one particularly useful fact for exams is:

  Simpson's Rule is exact for polynomials of degree 3 or less.

Easy way to remember: Simpson's Rule uses parabolas with coefficients 1, 4, 2, 4, 2, ..., 4, 1. The coefficients alternate 4 and 2 on the inside. n must be even. Multiply by Δx/3.
  `,
  examples: [
    "∫₀² x² dx with n=2: S₂ = 8/3 ≈ 2.6667 (exact)",
    "∫₀² x² dx with n=4: S₄ = 8/3 ≈ 2.6667 (exact)",
    "∫₀¹ e^(-x²) dx with n=4: S₄ ≈ 0.7468",
    "∫₀² x³ dx with n=2: S₂ = 4 (exact for cubics)",
    "Δx = (b - a)/n, n must be even",
    "Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 4f(xₙ₋₁) + f(xₙ)]",
    "|E_S| ≤ K(b - a)⁵/(180n⁴)",
    "Table data: S₄ = (1/3)[2 + 4(4) + 2(5) + 4(7) + 10] = 22",
  ],
};

export default topic;