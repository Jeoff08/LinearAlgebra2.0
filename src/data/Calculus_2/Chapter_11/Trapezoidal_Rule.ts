// filename: TrapezoidalRule.ts

const topic = {
  id: "trapezoidal-rule",
  title: "Trapezoidal Rule",
  summary:
    "A comprehensive guide to the Trapezoidal Rule for numerical integration. Covers the formula, derivation, geometric interpretation, error analysis, and practical applications with both functions and tabulated data.",
  details: `
The Trapezoidal Rule is a numerical integration technique used in Calculus 2 to approximate the value of a definite integral.

It is especially useful when:

  • finding an exact antiderivative is difficult;
  • the function does not have a simple elementary antiderivative;
  • you only need an approximate numerical answer;
  • the function is available through a table of values.

The central idea is simple:

  Instead of approximating the area under a curve using rectangles, approximate it using trapezoids.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate:

  ∫ₐᵇ f(x) dx.

The integral represents the signed area between the graph of:

  y = f(x)

and the x-axis from:

  x = a

to:

  x = b.

If the curve is complicated, we can divide the interval into smaller pieces and approximate each piece of the curve with a straight line.

The region underneath each straight-line approximation forms a trapezoid.

Therefore:

  Area under curve ≈ Sum of trapezoid areas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. AREA OF A TRAPEZOID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the area formula for a trapezoid:

  A = (1/2)(b₁ + b₂)h

where:

  b₁ = first parallel side,
  b₂ = second parallel side,
  h = height.

For numerical integration, the two parallel sides are function values:

  f(xᵢ)

and:

  f(xᵢ₊₁).

The height is the width of the interval:

  Δx.

Therefore:

  Aᵢ ≈ (1/2)[f(xᵢ) + f(xᵢ₊₁)]Δx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIVIDING THE INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want:

  ∫ₐᵇ f(x) dx.

Divide:

  [a, b]

into n equal subintervals.

The width of each subinterval is:

  Δx = (b - a)/n

The x-values are:

  x₀ = a,
  x₁ = a + Δx,
  x₂ = a + 2Δx,

and so on until:

  xₙ = b.

Thus:

  xᵢ = a + iΔx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE COMPOSITE TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we use multiple trapezoids, we use the Composite Trapezoidal Rule.

Its formula is:

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

where:

  Δx = (b - a)/n

This is the main formula you need to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO THE MIDDLE TERMS HAVE A 2?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important things to understand.

Suppose there are four trapezoids:

  T₁, T₂, T₃, T₄.

Their areas are:

  T₁ = (Δx/2)[f(x₀) + f(x₁)]
  T₂ = (Δx/2)[f(x₁) + f(x₂)]
  T₃ = (Δx/2)[f(x₂) + f(x₃)]
  T₄ = (Δx/2)[f(x₃) + f(x₄)].

Add them:

  T₁ + T₂ + T₃ + T₄.

We get:

  (Δx/2)[f(x₀) + f(x₁) + f(x₁) + f(x₂) + f(x₂) + f(x₃) + f(x₃) + f(x₄)].

Group similar terms:

  (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + 2f(x₃) + f(x₄)].

That's why the formula contains:

  2f(x₁), 2f(x₂), ..., 2f(xₙ₋₁).

The interior points are shared by two neighboring trapezoids.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀² x² dx

using:

  n = 4.

Step 1: Find Δx

  Δx = (b - a)/n = (2 - 0)/4 = 0.5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 2: FIND THE x-VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Starting at:

  x₀ = 0,

add 0.5 each time:

  x₀ = 0
  x₁ = 0.5
  x₂ = 1
  x₃ = 1.5
  x₄ = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 3: CALCULATE FUNCTION VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our function is:

  f(x) = x².

Therefore:

  f(0) = 0
  f(0.5) = 0.25
  f(1) = 1
  f(1.5) = 2.25
  f(2) = 4.

We can organize this into a table:

  x     f(x) = x²
  ──────────────
  0     0
  0.5   0.25
  1     1
  1.5   2.25
  2     4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 4: APPLY THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

  T₄ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + 2f(x₃) + f(x₄)].

Substitute:

  T₄ = (0.5/2)[0 + 2(0.25) + 2(1) + 2(2.25) + 4].

Simplify:

  T₄ = 0.25[0 + 0.5 + 2 + 4.5 + 4].

Therefore:

  T₄ = 0.25(11).

So:

  T₄ = 2.75

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPARE WITH THE EXACT ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can calculate the exact integral:

  ∫₀² x² dx.

The antiderivative is:

  x³/3.

Therefore:

  [x³/3]₀² = 8/3.

Thus:

  Exact value ≈ 2.6667

while:

  T₄ = 2.75

The error is approximately:

  2.75 - 2.6667 ≈ 0.0833.

So the Trapezoidal Rule gives a reasonably close approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY DOES IT WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a curved function.

The actual graph might look something like a curve, while the Trapezoidal Rule connects two points with a straight line.

For a small interval, the straight line is usually close to the actual curve.

If we make the intervals smaller:

  Δx → 0,

then the straight-line segments follow the curve more closely.

Therefore:

  lim_{n→∞} Tₙ = ∫ₐᵇ f(x) dx

provided the function is sufficiently well-behaved.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule essentially replaces:

  curved sections

with:

  straight-line sections.

Each pair of adjacent points:

  (xᵢ, f(xᵢ))

and:

  (xᵢ₊₁, f(xᵢ₊₁))

is connected by a straight line.

The area beneath that line is a trapezoid.

Adding all of these gives:

  Tₙ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TRAPEZOIDAL RULE AND RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a very useful relationship:

  Tₙ = (Lₙ + Rₙ)/2

where:

  Lₙ = Left Riemann Sum,
  Rₙ = Right Riemann Sum.

This makes sense because each trapezoid uses both endpoints.

For example, if:

  L₄ = 1.75

and:

  R₄ = 3.75,

then:

  T₄ = (1.75 + 3.75)/2 = 2.75.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ANOTHER WAY TO REMEMBER THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of memorizing the entire formula, remember:

  Trapezoid area = (width/2)(left height + right height)

For multiple trapezoids:

  Tₙ = (Δx/2)[first + 2(middle) + last]

This makes the formula much easier to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE 2: A MORE COMPLICATED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₁³ 1/x dx

using n = 4.

First:

  Δx = (3 - 1)/4 = 0.5.

The x-values are:

  1, 1.5, 2, 2.5, 3.

The function is:

  f(x) = 1/x.

Therefore:

  f(1) = 1
  f(1.5) = 2/3
  f(2) = 1/2
  f(2.5) = 2/5
  f(3) = 1/3.

Apply:

  T₄ = (0.5/2)[1 + 2(2/3) + 2(1/2) + 2(2/5) + 1/3].

Thus:

  T₄ = 0.25[1 + 4/3 + 1 + 4/5 + 1/3].

This gives approximately:

  T₄ ≈ 1.1027.

The exact integral is:

  ∫₁³ 1/x dx = ln 3 ≈ 1.0986.

So the approximation is quite close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. OVERESTIMATION AND UNDERESTIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concavity of a function helps us determine whether the Trapezoidal Rule overestimates or underestimates.

Concave Up

If:

  f''(x) > 0,

the graph bends upward.

The secant lines connecting the endpoints generally lie above the curve.

Therefore:

  Tₙ > ∫ₐᵇ f(x) dx

so the Trapezoidal Rule tends to overestimate.

Example:

  f(x) = x².

Since:

  f''(x) = 2 > 0,

it is concave upward.

Thus the Trapezoidal Rule overestimates the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CONCAVE DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  f''(x) < 0,

the graph bends downward.

The secant lines generally lie below the curve.

Therefore:

  Tₙ < ∫ₐᵇ f(x) dx

and the Trapezoidal Rule tends to underestimate.

For example:

  f(x) = √x

is concave down for x > 0.

Therefore, the Trapezoidal Rule tends to underestimate the area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ERROR FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The error of the Composite Trapezoidal Rule can be expressed approximately as:

  E_T = -[(b - a)³/(12n²)] · f''(ξ)

for some:

  ξ ∈ (a, b).

This formula is useful theoretically because it tells us how the error depends on:

  • the interval length;
  • the number of subintervals;
  • the second derivative of the function.

For practical error bounds, if:

  |f''(x)| ≤ K

on [a, b], then:

  |E_T| ≤ K(b - a)³/(12n²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHAT DOES THE ERROR FORMULA TELL US?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Look at:

  1/n².

As n increases, the error decreases approximately proportional to:

  1/n².

For example, if you increase n from:

  n = 10

to:

  n = 20,

then approximately:

  1/20² = 1/4 · 1/10².

So the error can become roughly one-fourth as large.

This is one reason increasing the number of trapezoids improves accuracy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. FINDING THE REQUIRED NUMBER OF SUBINTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want:

  |E_T| < E.

We can use:

  K(b - a)³/(12n²) < E.

Solve for n:

  n² > K(b - a)³/(12E).

Therefore:

  n > √(K(b - a)³/(12E)).

Then choose the smallest integer satisfying the inequality.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. TRAPEZOIDAL RULE WITH A TABLE OF DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One major advantage of the Trapezoidal Rule is that we don't always need a formula for f(x).

Suppose we have experimental data:

  x     f(x)
  ──────────
  0     2
  1     3
  2     5
  3     8
  4     12

Here:

  Δx = 1.

Then:

  T₄ = (1/2)[2 + 2(3) + 2(5) + 2(8) + 12].

Therefore:

  T₄ = (1/2)(46).

So:

  T₄ = 23.

This is especially useful in experimental sciences and engineering, where measurements are collected at discrete points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. UNEQUAL INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard Composite Trapezoidal Rule assumes equal spacing:

  Δx = (b - a)/n.

But if the x-values are not equally spaced, calculate each trapezoid separately:

  Aᵢ = (xᵢ₊₁ - xᵢ)/2 [f(xᵢ) + f(xᵢ₊₁)]

Then:

  ∫ₐᵇ f(x) dx ≈ Σᵢ Aᵢ

This is useful when working with real-world data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. TRAPEZOIDAL RULE VS. MIDPOINT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Both are second-order methods, meaning their error generally behaves like:

  O(1/n²).

But they approximate the curve differently.

Trapezoidal Rule

Uses:

  endpoints

and connects them with straight lines.

Midpoint Rule

Uses:

  midpoints

and creates rectangles.

For a particular problem, either method may be more accurate depending on the function's shape.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. TRAPEZOIDAL RULE VS. SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule uses:

  linear approximation

while Simpson's Rule uses:

  quadratic approximation.

Their typical error orders are:

  Tₙ = O(1/n²)

and:

  Sₙ = O(1/n⁴).

Thus, Simpson's Rule can be significantly more accurate when the function is sufficiently smooth.

However, Simpson's Rule requires:

  n to be even,

while the Trapezoidal Rule does not have that restriction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. ADVANTAGES OF THE TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule is popular because it is:

Simple

The formula is easy to understand and implement.

Flexible

It works with any positive integer n.

Useful with Data

You can use it when you only have a table of measurements.

More Accurate Than Basic Rectangles

It often provides a better approximation than a simple left or right Riemann sum.

Easy to Program

It can be implemented efficiently in virtually any programming language.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. LIMITATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule is still an approximation.

It can be less accurate when:

  • the function has strong curvature;
  • the number of subintervals is small;
  • the function has discontinuities;
  • the function changes rapidly.

In such situations, increasing n can help, or a more sophisticated method such as Simpson's Rule may be preferable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. STEP-BY-STEP PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Trapezoidal Rule problem, follow this procedure:

Step 1: Identify a, b, and n

For:

  ∫ₐᵇ f(x) dx,

identify:

  a, b, n.

Step 2: Calculate the width

  Δx = (b - a)/n

Step 3: Generate the x-values

  xᵢ = a + iΔx.

Step 4: Calculate the function values

Find:

  f(x₀), f(x₁), ..., f(xₙ).

Step 5: Apply the formula

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]

Step 6: Simplify

The result is your numerical approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. IMPORTANT PATTERN TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can remember the Composite Trapezoidal Rule as:

  (Δx/2)[first + 2(middle values) + last]

For example, with six intervals:

  T₆ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + 2f(x₃) + 2f(x₄) + 2f(x₅) + f(x₆)]

The pattern is always:

  1, 2, 2, 2, ..., 2, 1

This is one of the easiest ways to remember the formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Δx = (b - a)/n

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

  Tₙ = (Lₙ + Rₙ)/2

  |E_T| ≤ K(b - a)³/(12n²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule approximates a definite integral by replacing sections of the curve with straight lines and calculating the areas of the resulting trapezoids.

The fundamental formula is:

  Δx = (b - a)/n

and:

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

The key ideas are:

  • Divide [a, b] into n equal pieces.
  • Calculate Δx.
  • Evaluate f(x) at each endpoint.
  • Give the first and last values a coefficient of 1.
  • Give all interior values a coefficient of 2.
  • Multiply the entire sum by Δx/2.

Most importantly:

  Trapezoidal Rule = approximate the curve with straight lines

and:

  lim_{n→∞} Tₙ = ∫ₐᵇ f(x) dx.

So, conceptually, the Trapezoidal Rule is the bridge between geometric area approximation and the definite integral: the more trapezoids we use, the more closely their total area approaches the true area represented by the integral.

Easy way to remember: Divide the area into trapezoids, average the heights, multiply by the width. The interior heights count twice because they're shared between adjacent trapezoids.
  `,
  examples: [
    "∫₀² x² dx with n=4: T₄ = 2.75 (exact = 2.6667)",
    "∫₁³ 1/x dx with n=4: T₄ ≈ 1.1027 (exact = ln 3 ≈ 1.0986)",
    "Δx = (b - a)/n",
    "Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]",
    "Tₙ = (Lₙ + Rₙ)/2",
    "|E_T| ≤ K(b - a)³/(12n²)",
    "Table data: T₄ = (1/2)[2 + 2(3) + 2(5) + 2(8) + 12] = 23",
  ],
};

export default topic;