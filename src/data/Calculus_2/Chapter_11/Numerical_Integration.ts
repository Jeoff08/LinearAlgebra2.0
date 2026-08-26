// filename: NumericalIntegration.ts

const topic = {
  id: "numerical-integration",
  title: "Numerical Integration",
  summary:
    "A comprehensive guide to approximating definite integrals when exact antiderivatives are difficult or impossible to find. Covers Riemann sums, Midpoint Rule, Trapezoidal Rule, Simpson's Rule, and error analysis.",
  details: `
Numerical Integration is an important topic in Calculus 2 that deals with finding an approximate value of a definite integral when finding an exact antiderivative is difficult, impossible, or unnecessary.

The basic idea is:

  ∫ₐᵇ f(x) dx

represents the exact signed area between the graph of f(x) and the x-axis from x = a to x = b.

Sometimes, however, we cannot easily find an elementary antiderivative of f(x). In such cases, we can approximate the integral numerically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS NUMERICAL INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to calculate:

  ∫ₐᵇ f(x) dx.

If we know an antiderivative F(x), the Fundamental Theorem of Calculus gives:

  ∫ₐᵇ f(x) dx = F(b) - F(a).

But what if F(x) is difficult or impossible to determine?

For example:

  ∫₀¹ e^(-x²) dx.

The function:

  e^(-x²)

does not have an elementary antiderivative.

Instead of finding an exact antiderivative, we can approximate the area using numerical methods.

Thus:

  Numerical integration ≈ area under a curve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE NUMERICAL INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical integration is useful when:

  • an antiderivative cannot be expressed using elementary functions;
  • the function is known only from experimental data;
  • the function is complicated;
  • we need a numerical answer rather than an exact symbolic expression;
  • a computer or calculator needs to approximate an integral.

For example:

  ∫₀¹ e^(-x²) dx

cannot be simplified into elementary functions, but its numerical value can be approximated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BASIC IDEA: DIVIDE THE INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want:

  ∫ₐᵇ f(x) dx.

Divide the interval:

  [a, b]

into n smaller intervals.

The width of each interval is:

  Δx = (b - a)/n

The smaller Δx becomes, the more closely our approximation can follow the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical integration is closely connected to Riemann sums.

A Riemann sum approximates:

  ∫ₐᵇ f(x) dx

by adding the areas of rectangles.

The general form is:

  Σᵢ₌₁ⁿ f(xᵢ*) Δx

where xᵢ* is a selected point inside each subinterval.

Depending on where the point is chosen, we get:

  • Left Riemann Sum
  • Right Riemann Sum
  • Midpoint Riemann Sum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. LEFT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the left Riemann sum, we use the left endpoint of every subinterval.

The formula is:

  Lₙ = Δx · Σᵢ₌₀ⁿ⁻¹ f(xᵢ)

where:

  Δx = (b - a)/n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: LEFT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀² x² dx

using n = 4.

First calculate:

  Δx = (2 - 0)/4 = 1/2.

The intervals are:

  [0, 0.5], [0.5, 1], [1, 1.5], [1.5, 2].

The left endpoints are:

  0, 0.5, 1, 1.5.

Evaluate:

  f(x) = x².

Therefore:

  f(0) = 0,
  f(0.5) = 0.25,
  f(1) = 1,
  f(1.5) = 2.25.

Thus:

  L₄ = 0.5(0 + 0.25 + 1 + 2.25).

Therefore:

  L₄ = 0.5(3.5).

So:

  L₄ = 1.75

The exact answer is:

  ∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.667.

So the left sum underestimates the integral because x² is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RIGHT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The right Riemann sum uses the right endpoint of each subinterval.

The formula is:

  Rₙ = Δx · Σᵢ₌₁ⁿ f(xᵢ)

For the previous example:

  x = 0.5, 1, 1.5, 2.

Therefore:

  R₄ = 0.5(0.25 + 1 + 2.25 + 4).

Thus:

  R₄ = 0.5(7.5).

So:

  R₄ = 3.75

This overestimates the exact integral because x² is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MIDPOINT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Midpoint Rule uses the midpoint of each subinterval instead of the left or right endpoint.

The formula is:

  Mₙ = Δx · Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2)

The midpoint is:

  xᵢ* = (xᵢ₋₁ + xᵢ)/2

The midpoint rule is often more accurate than the left or right Riemann sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: MIDPOINT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Again consider:

  ∫₀² x² dx

with:

  n = 4.

We already know:

  Δx = 0.5.

The midpoints are:

  0.25, 0.75, 1.25, 1.75.

Evaluate:

  f(0.25) = 0.0625,
  f(0.75) = 0.5625,
  f(1.25) = 1.5625,
  f(1.75) = 3.0625.

Therefore:

  M₄ = 0.5(0.0625 + 0.5625 + 1.5625 + 3.0625).

Thus:

  M₄ = 2.625.

So:

  M₄ = 2.625

The exact answer is:

  2.667...

which is quite close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important numerical integration technique is the Trapezoidal Rule.

Instead of approximating the area using rectangles, we approximate each section of the curve using a trapezoid.

The formula is:

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

where:

  Δx = (b - a)/n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY IS IT CALLED THE TRAPEZOIDAL RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A trapezoid has area:

  A = (1/2)(b₁ + b₂)h.

For one interval:

  [xᵢ, xᵢ₊₁],

the two parallel sides are approximately:

  f(xᵢ)

and:

  f(xᵢ₊₁).

The width is:

  Δx.

Therefore:

  Aᵢ ≈ (1/2)[f(xᵢ) + f(xᵢ₊₁)]Δx.

Adding all the trapezoids produces the Trapezoidal Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:

  ∫₀² x² dx

using n = 4.

We have:

  Δx = 0.5.

The x-values are:

  0, 0.5, 1, 1.5, 2.

The function values are:

  0, 0.25, 1, 2.25, 4.

Therefore:

  T₄ = (0.5/2)[0 + 2(0.25) + 2(1) + 2(2.25) + 4].

So:

  T₄ = 0.25[0 + 0.5 + 2 + 4.5 + 4].

Thus:

  T₄ = 2.75

The exact answer is:

  2.667.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RELATIONSHIP BETWEEN TRAPEZOIDAL AND RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important relationship:

  Tₙ = (Lₙ + Rₙ)/2

The Trapezoidal Rule is essentially the average of the left and right Riemann sums.

For our example:

  L₄ = 1.75

and:

  R₄ = 3.75.

Therefore:

  T₄ = (1.75 + 3.75)/2.

Thus:

  T₄ = 2.75.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A more accurate numerical integration method is Simpson's Rule.

Instead of approximating the curve using straight lines, Simpson's Rule approximates the curve using quadratic polynomials.

The basic composite Simpson's Rule is:

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + 2f(xₙ₋₂) + 4f(xₙ₋₁) + f(xₙ)]

where n must be even.

This is an important condition:

  n must be even

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY IS SIMPSON'S RULE MORE ACCURATE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Trapezoidal Rule approximates the curve using straight lines.

Simpson's Rule approximates the curve using parabolic arcs.

A parabola can often follow a curved function more closely than a straight line.

Conceptually:

  Rectangles → Trapezoids → Parabolas

generally gives increasingly sophisticated approximations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use Simpson's Rule to approximate:

  ∫₀² x² dx

with:

  n = 4.

We have:

  Δx = 0.5.

The function values are:

  f(0) = 0,
  f(0.5) = 0.25,
  f(1) = 1,
  f(1.5) = 2.25,
  f(2) = 4.

Apply the formula:

  S₄ = (0.5/3)[0 + 4(0.25) + 2(1) + 4(2.25) + 4].

Thus:

  S₄ = (1/6)[0 + 1 + 2 + 9 + 4].

Therefore:

  S₄ = 16/6 = 8/3.

So:

  S₄ = 8/3 ≈ 2.667

In this example, Simpson's Rule gives the exact answer because x² itself is a quadratic function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMPARISON OF THE MAIN METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  ∫₀² x² dx,

we obtained approximately:

  Method           Approximation
  ──────────────────────────────
  Left Riemann     1.75
  Right Riemann    3.75
  Midpoint         2.625
  Trapezoidal      2.75
  Simpson          2.667 (exact)
  Exact            2.667

This demonstrates why increasing the sophistication of the approximation can improve accuracy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ERROR IN NUMERICAL INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because numerical integration produces an approximation, there is generally an error.

The error can be written as:

  E = Exact Value - Approximate Value

Often we care about the absolute error:

  |E| = |Exact - Approximate|

For example, if the exact value is:

  10

and our approximation is:

  9.8,

then:

  E = 10 - 9.8 = 0.2.

The absolute error is:

  0.2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. INCREASING THE NUMBER OF SUBINTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the simplest ways to improve a numerical approximation is to increase n.

Recall:

  Δx = (b - a)/n.

As n increases:

  Δx → 0.

The rectangles, trapezoids, or parabolic approximations become narrower and generally follow the function more closely.

Thus:

  n ↑ ⇒ Δx ↓ ⇒ usually better approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. ERROR BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different methods have different levels of accuracy.

For sufficiently smooth functions, the approximate error orders are:

  Left and Right Riemann Sums    O(1/n)
  Trapezoidal Rule               O(1/n²)
  Midpoint Rule                  O(1/n²)
  Simpson's Rule                 O(1/n⁴)

This means Simpson's Rule generally improves much faster as n increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ERROR BOUND FOR THE TRAPEZOIDAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  |f''(x)| ≤ K

on:

  [a, b],

then the Trapezoidal Rule error satisfies:

  |E_T| ≤ K(b - a)³ / (12n²)

This formula allows us to determine how accurate the approximation is expected to be.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. ERROR BOUND FOR THE MIDPOINT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  |f''(x)| ≤ K,

then:

  |E_M| ≤ K(b - a)³ / (24n²)

Notice that the denominator contains:

  24n²

instead of:

  12n².

This helps explain why the midpoint rule can be more accurate than the trapezoidal rule for the same n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. ERROR BOUND FOR SIMPSON'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  |f⁽⁴⁾(x)| ≤ K,

then Simpson's Rule has the error bound:

  |E_S| ≤ K(b - a)⁵ / (180n⁴)

where n is even.

The n⁴ in the denominator is significant because the error decreases rapidly as n increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. OVERESTIMATION AND UNDERESTIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The shape of the function can help determine whether a method overestimates or underestimates.

For an increasing function:

  Left Riemann Sum tends to underestimate.
  Right Riemann Sum tends to overestimate.

For a concave-up function:

  Trapezoidal Rule tends to overestimate.
  Midpoint Rule tends to underestimate.

For a concave-down function:

  Trapezoidal Rule tends to underestimate.
  Midpoint Rule tends to overestimate.

These are extremely useful observations when checking whether your numerical answer makes sense.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. NUMERICAL INTEGRATION WITH A CALCULATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many calculators can directly approximate:

  ∫ₐᵇ f(x) dx.

For example, a calculator may have a numerical integral function.

You enter:

  ∫₀¹ e^(-x²) dx.

The calculator can return an approximate decimal value even though there is no elementary antiderivative.

This is one of the practical reasons numerical integration is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. NUMERICAL INTEGRATION IN COMPUTER SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical integration is also important in computer science and programming.

A computer can approximate:

  ∫ₐᵇ f(x) dx

by repeatedly evaluating the function.

For example, a basic midpoint algorithm follows the idea:

  Δx = (b - a)/n

and then:

  I ≈ Δx · Σᵢ₌₁ⁿ f(a + (i - 1/2)Δx).

This can be implemented in almost any programming language.

The larger n becomes, the more function evaluations are required, but the approximation generally becomes more accurate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. NUMERICAL INTEGRATION VS. EXACT INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to understand the difference.

Exact integration

Produces an exact mathematical expression:

  ∫ 2x dx = x² + C.

Numerical integration

Produces an approximation:

  ∫₀¹ e^(-x²) dx ≈ 0.7468.

So:

  Exact integration → symbolic answer

while:

  Numerical integration → decimal approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. WHEN SHOULD YOU USE NUMERICAL INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical integration is especially useful when:

1. No elementary antiderivative exists

Example:

  ∫ e^(-x²) dx.

2. The function comes from measured data

Suppose you have a table of:

  (x, f(x))

values instead of a formula.

You can use numerical methods to estimate the area.

3. The function is extremely complicated

Even if an exact antiderivative technically exists, numerical methods may be much faster.

4. You only need a decimal answer

For engineering, physics, statistics, and computer applications, an approximation may be sufficient.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. MAIN NUMERICAL INTEGRATION METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The major methods you should remember are:

  Riemann Sum:
    Σ f(xᵢ*) Δx

  Left Riemann:
    Lₙ = Δx · Σᵢ₌₀ⁿ⁻¹ f(xᵢ)

  Right Riemann:
    Rₙ = Δx · Σᵢ₌₁ⁿ f(xᵢ)

  Midpoint:
    Mₙ = Δx · Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2)

  Trapezoidal:
    Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]

  Simpson's:
    Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + ... + 4f(xₙ₋₁) + f(xₙ)]

with n even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Δx = (b - a)/n

  Trapezoidal Rule:
    Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]

  Simpson's Rule (n even):
    Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + ... + 4f(xₙ₋₁) + f(xₙ)]

  Trapezoidal Error Bound:
    |E_T| ≤ K(b - a)³ / (12n²)

  Midpoint Error Bound:
    |E_M| ≤ K(b - a)³ / (24n²)

  Simpson's Error Bound:
    |E_S| ≤ K(b - a)⁵ / (180n⁴)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. A USEFUL CONCEPTUAL PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the exact area:

  ∫ₐᵇ f(x) dx

as the area under a curved boundary.

Different numerical methods approximate that curve differently:

  Rectangles     for Riemann sums,
  Trapezoids     for the Trapezoidal Rule, and
  Parabolas      for Simpson's Rule.

As the subintervals become smaller, the approximating shapes generally become better representations of the actual curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical Integration is the process of approximating a definite integral:

  ∫ₐᵇ f(x) dx

when an exact antiderivative is difficult or unavailable.

The central idea is:

  Divide the interval → Approximate each small region → Add the approximations

The main techniques are:

  • Left Riemann Sum
  • Right Riemann Sum
  • Midpoint Rule
  • Trapezoidal Rule
  • Simpson's Rule

The most important formulas are:

  Δx = (b - a)/n

  Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]

  Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + ... + 4f(xₙ₋₁) + f(xₙ)] (n even)

The key concept to remember is:

  Numerical Integration turns a difficult area problem into a manageable approximation problem.

In practice, Midpoint and Trapezoidal Rules provide useful approximations, while Simpson's Rule is usually much more accurate for sufficiently smooth functions.

Easy way to remember: Rectangles are basic, trapezoids are better, parabolas are best. Increase n for more accuracy.
  `,
  examples: [
    "∫₀² x² dx with n=4: L₄ = 1.75, R₄ = 3.75, M₄ = 2.625, T₄ = 2.75, S₄ = 2.667 (exact)",
    "Δx = (b - a)/n",
    "Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]",
    "Sₙ = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + ... + 4f(xₙ₋₁) + f(xₙ)] (n even)",
    "|E_T| ≤ K(b - a)³/(12n²)",
    "|E_M| ≤ K(b - a)³/(24n²)",
    "|E_S| ≤ K(b - a)⁵/(180n⁴)",
  ],
};

export default topic;