// filename: definite-integral.ts

const topic = {
  id: "definite-integral",
  title: "Definite Integral",
  summary:
    "A fundamental concept in calculus used to find the net area between a curve and the x-axis over a specific interval, represented as ∫ₐᵇ f(x) dx and evaluated using the Fundamental Theorem of Calculus.",
  details: `
A Definite Integral is a fundamental concept in calculus used to find the net area between a curve and the x-axis over a specific interval.

It is written as:
  ∫ₐᵇ f(x) dx

The numbers a and b specify the interval over which we are integrating.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  y = f(x)

and we want to find the area from:
  x = a

to:
  x = b.

The definite integral is:
  ∫ₐᵇ f(x) dx

You can think of it as adding up infinitely many extremely thin rectangles:
  Area ≈ many thin rectangles

As the rectangles become infinitely thin, the approximation approaches the exact integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PARTS OF A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ₐᵇ f(x) dx

Each part has a name:

  Part       Name              Meaning
  ────────────────────────────────────────────────────────────
  ∫          Integral symbol   Indicates integration
  a          Lower limit       Starting x-value
  b          Upper limit       Ending x-value
  f(x)       Integrand         Function being integrated
  dx         Differential      Indicates integration with respect to x

For example:
  ∫₀⁴ x² dx

has:
  a = 0
  b = 4
  f(x) = x²
  dx = dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DEFINITE INTEGRAL VS. INDEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Indefinite Integral:
  ∫ f(x) dx

produces a family of antiderivatives:
  F(x) + C

For example:
  ∫ x² dx = x³/3 + C

Definite Integral:
  ∫ₐᵇ f(x) dx

produces a single numerical value.

For example:
  ∫₀⁴ x² dx = 64/3

So:
  Indefinite integral → function + C
while:
  Definite integral → number

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DEFINITE INTEGRAL AS AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≥ 0 throughout [a, b], then:
  ∫ₐᵇ f(x) dx

represents the area between the curve and the x-axis.

For example:
  ∫₀⁴ x² dx

represents the area under:
  y = x²

from x = 0 to x = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. AREA IS NOT ALWAYS POSITIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important ideas.

A definite integral represents signed area, also called net area.

If the function is above the x-axis:
  f(x) > 0

the integral contributes positive area.

If the function is below the x-axis:
  f(x) < 0

the integral contributes negative area.

Therefore:
  Above x-axis → +
  Below x-axis → -

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE OF POSITIVE AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x

from:
  0 ≤ x ≤ 2.

The function is above the x-axis.

Therefore:
  ∫₀² x dx

represents positive area.

Using the power rule:
  ∫ x dx = x²/2

so:
  ∫₀² x dx = [x²/2]₀²
  = 2²/2 - 0²/2
  = 2

Therefore:
  2 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE OF NEGATIVE AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x

from:
  -2 ≤ x ≤ 0.

The function is below the x-axis.

Therefore:
  ∫₋₂⁰ x dx

will be negative.

Calculate:
  [x²/2]₋₂⁰
  = 0 - (-2)²/2
  = 0 - 2
  = -2

The integral is:
  -2

even though the geometric area is:
  2

This is because the definite integral represents net signed area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. NET AREA VS. TOTAL AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function is above the x-axis in one region and below it in another.

The definite integral gives:
  Net Area

not necessarily the total geometric area.

For example:
  Area above = 10
  Area below = 4

Then:
  Net Area = 10 - 4 = 6

But the total geometric area is:
  10 + 4 = 14

Therefore:
  Net area ≠ total area

when the curve crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE DEFINITE INTEGRAL AND RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral is closely connected to the Riemann Sum.

A Riemann Sum approximates the area using a finite number of rectangles:
  Σᵢ₌₁ⁿ f(xᵢ*) Δx

where xᵢ* is a chosen point within each subinterval.

As the number of rectangles approaches infinity:
  n → ∞
and:
  Δx → 0

the Riemann Sum becomes the exact definite integral:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

This is the formal definition of the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONNECTION TO RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The different Riemann sums are all approximations of the same definite integral.

Left Riemann Sum:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

Right Riemann Sum:
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

Midpoint Riemann Sum:
  Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx

As:
  n → ∞

all of these approach:
  ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important results in calculus is the Fundamental Theorem of Calculus.

It connects:
  Integration
with:
  Differentiation

If F'(x) = f(x), then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This gives us a much faster way to evaluate definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE USING THE FUNDAMENTAL THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀⁴ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

So:
  F(x) = x³/3

Step 2: Evaluate at the limits
  F(4) = 4³/3 = 64/3
and:
  F(0) = 0

Step 3: Subtract
  F(4) - F(0) = 64/3 - 0

Therefore:
  ∫₀⁴ x² dx = 64/3

or approximately:
  21.333

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE EVALUATION NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of writing F(b) - F(a) every time, we often write:
  [F(x)]ₐᵇ

For example:
  ∫₀⁴ x² dx

becomes:
  [x³/3]₀⁴

which means:
  4³/3 - 0³/3 = 64/3

So:
  [F(x)]ₐᵇ = F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. PROPERTIES OF DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definite integrals have several important properties.

Property 1: Same Limits
  ∫ₐᵃ f(x) dx = 0
  There is no interval, so the area is zero.

Property 2: Reversing the Limits
  ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx
  For example:
    ∫₀² x dx = 2
  therefore:
    ∫₂₀ x dx = -2

Property 3: Splitting an Interval
  If c lies between a and b:
    ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  This allows us to break a complicated interval into smaller pieces.

Property 4: Constant Multiple
  If c is a constant:
    ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

Property 5: Sum and Difference
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx
  Similarly:
    ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DEFINITE INTEGRAL AND AVERAGE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral can also be used to find the average value of a function.

The average value of f(x) on [a, b] is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

For example:
  f(x) = x² on [0, 4].

We know:
  ∫₀⁴ x² dx = 64/3

Therefore:
  f_avg = (1/4) · 64/3 = 16/3

So:
  f_avg = 16/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DEFINITE INTEGRAL AS ACCUMULATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral isn't limited to area.

It can represent total accumulation.

For example:
  If v(t) represents velocity, then:
    ∫ₐᵇ v(t) dt
  gives the change in position over the time interval.

Similarly, if r(t) represents a rate of water entering a tank, then:
    ∫ₐᵇ r(t) dt
  gives the total amount of water added.

So integration can be thought of as:
  Accumulating small changes into a total

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: VELOCITY AND POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose v(t) = 3t² represents the velocity of an object.

The displacement from t = 0 to t = 2 is:
  ∫₀² 3t² dt

Find the antiderivative:
  ∫ 3t² dt = t³

Evaluate:
  [t³]₀² = 2³ - 0³ = 8

Therefore:
  Displacement = 8 units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DEFINITE INTEGRAL AND THE AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral can also find the area between two curves.

If f(x) is above g(x), then:
  A = ∫ₐᵇ [f(x) - g(x)] dx

The basic idea is:
  Area = ∫ (top - bottom) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area between:
  f(x) = x + 2
and:
  g(x) = x

from:
  x = 0 to x = 3.

The upper function is:
  x + 2

and the lower function is:
  x.

Therefore:
  A = ∫₀³ [(x + 2) - x] dx

Simplify:
  A = ∫₀³ 2 dx
  A = [2x]₀³ = 6

Therefore:
  A = 6 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the limits
  A definite integral must have limits: ∫ₐᵇ
  An integral without limits is an indefinite integral.

Mistake 2: Adding +C
  For a definite integral:
    Do NOT need +C
  For example:
    ∫₀⁴ x² dx = [x³/3]₀⁴
  not:
    x³/3 + C
  The constant cancels anyway.

Mistake 3: Forgetting to subtract
  You must calculate:
    F(b) - F(a)
  not:
    F(a) + F(b)

Mistake 4: Confusing net area with total area
  A definite integral gives signed/net area.
  If the problem asks for the total geometric area, regions below the x-axis must be treated as positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definition using Riemann Sums:
    ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

  Fundamental Theorem of Calculus:
    If F'(x) = f(x), then:
      ∫ₐᵇ f(x) dx = F(b) - F(a)

  Evaluation notation:
    [F(x)]ₐᵇ = F(b) - F(a)

  Average value:
    f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

  Area between two curves:
    A = ∫ₐᵇ [upper function - lower function] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. DEFINITE INTEGRAL VS. RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are closely connected:

  Riemann Sum → Approximation
while:
  Definite Integral → Exact Accumulation

For example:
  Lₙ, Rₙ, Mₙ, Tₙ

are numerical approximations.

But:
  ∫ₐᵇ f(x) dx

represents the exact value when the function is integrable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The development of the idea looks like this:

  Area Under a Curve
    ↓
  Divide Into Small Pieces
    ↓
  Riemann Sums
    ↓
  More and More Pieces
    ↓
  n → ∞
    ↓
  Definite Integral
    ∫ₐᵇ f(x) dx

Then, using the Fundamental Theorem of Calculus:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                     Meaning
  ───────────────────────────────────────────────────────────────────────
  Definite Integral           Exact net accumulation over an interval
  ∫ₐᵇ                         Integrate from a to b
  f(x)                        Integrand
  dx                          Variable of integration
  Above x-axis                Positive contribution
  Below x-axis                Negative contribution
  Riemann Sum                 Approximation using finite pieces
  n → ∞                       Gives the exact integral
  FTC                         Converts an integral into F(b) - F(a)

The most important formula:
  ∫ₐᵇ f(x) dx = F(b) - F(a) where F'(x) = f(x)

In simple terms:
  A definite integral measures the exact net accumulation of a function over 
  a specified interval. Geometrically, it represents signed area, and 
  computationally, the Fundamental Theorem of Calculus lets us find it using 
  an antiderivative.
  `,
  examples: [
    "∫₀⁴ x² dx = [x³/3]₀⁴ = 64/3",
    "∫₀² x dx = [x²/2]₀² = 2",
    "∫₋₂⁰ x dx = [x²/2]₋₂⁰ = -2 (signed area)",
    "∫ₐᵇ f(x) dx = F(b) - F(a) (FTC)",
    "Average value: f_avg = (1/(b-a)) ∫ₐᵇ f(x) dx",
    "Area between curves: A = ∫ₐᵇ [f(x) - g(x)] dx",
    "∫₀² 3t² dt = [t³]₀² = 8 (displacement)",
  ],
};

export default topic;