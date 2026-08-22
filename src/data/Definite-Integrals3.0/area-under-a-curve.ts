// filename: area-under-a-curve.ts

const topic = {
  id: "area-under-a-curve",
  title: "Area Under a Curve",
  summary:
    "One of the most important applications of definite integration, allowing us to find the exact area between a function and the x-axis over a given interval.",
  details: `
The area under a curve is one of the most important applications of definite integration. It allows us to find the exact area between a function and the x-axis over a given interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "AREA UNDER A CURVE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function:
  y = f(x)

and we want to find the area between the curve, the x-axis, and the vertical lines x = a and x = b.

Visually, we are looking for this region.

The definite integral gives this area:
  A = ∫ₐᵇ f(x) dx

provided that f(x) ≥ 0 throughout the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You may already know how to calculate the area of simple shapes:
  A_rectangle = lw
  A_triangle = (1/2)bh

But a curved region doesn't have a simple geometric formula.

Integration solves this by dividing the region into many extremely thin rectangles.

Imagine dividing the area into rectangles:
  Curved Area ≈ sum of many thin rectangles

As the rectangles become thinner and thinner, the approximation becomes more accurate.

In the limit:
  Area = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE DEFINITE INTEGRAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function f(x) that is nonnegative on [a, b]:
  A = ∫ₐᵇ f(x) dx

where:
  a = left endpoint
  b = right endpoint
  f(x) = height of the curve
  dx = infinitesimally small width
  A = area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: AREA UNDER y = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area under:
  f(x) = x²

from x = 0 to x = 2.

Step 1: Set up the integral
  A = ∫₀² x² dx

Step 2: Integrate
  Using the power rule:
    ∫ x² dx = x³/3

Therefore:
  A = [x³/3]₀²

Step 3: Evaluate the endpoints
  A = 2³/3 - 0³/3
  A = 8/3

Therefore:
  A = 8/3

or approximately:
  A ≈ 2.667 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING THE INTEGRAL GEOMETRICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The notation:
  ∫ₐᵇ f(x) dx

can be understood as:
  Add up infinitely many extremely thin rectangles from x = a to x = b.

Each small rectangle has approximately:
  Area = height × width

so:
  ΔA ≈ f(x) Δx

Adding them:
  A ≈ Σ f(xᵢ) Δx

As the width approaches zero:
  A = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This is the fundamental idea behind the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AREA WHEN THE CURVE IS BELOW THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is very important.

Suppose f(x) < 0 over an interval.

The definite integral will produce a negative value.

For example:
  f(x) = -x

from 0 to 2:
  ∫₀² -x dx
  = [-x²/2]₀²
  = -2

But an actual geometric area cannot be negative.

Therefore, the geometric area is:
  2

This leads to an important distinction:

Signed area:
  ∫ₐᵇ f(x) dx

Total geometric area:
  ∫ₐᵇ |f(x)| dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA ABOVE AND BELOW THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function crosses the x-axis, you must usually split the integral.

For example:
  f(x) = x

from -2 to 2.

The graph crosses the x-axis at:
  x = 0

The integral is:
  ∫₋₂² x dx = 0

Why?
  Because the positive and negative areas cancel each other.

But the total geometric area is not zero.

We calculate:
  A = ∫₋₂⁰ |x| dx + ∫₀² |x| dx

Since x is negative on [-2, 0]:
  A = -∫₋₂⁰ x dx + ∫₀² x dx

Both areas equal 2:
  A = 2 + 2
  A = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The idea can be extended to finding the area between two functions.

Suppose f(x) is the upper curve and g(x) is the lower curve.

Then:
  A = ∫ₐᵇ [f(x) - g(x)] dx

In words:
  Area = ∫ (top - bottom) dx

For example, suppose:
  f(x) = x + 2
and:
  g(x) = x²

Then the area between them would be:
  A = ∫ₐᵇ [(x + 2) - x²] dx

where a and b are the intersection points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING AREA USING ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus makes calculating areas much easier.

If F'(x) = f(x), then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

So the general procedure is:

Step 1: Identify the function
  f(x)

Step 2: Find its antiderivative
  F(x)

Step 3: Evaluate at the upper limit
  F(b)

Step 4: Evaluate at the lower limit
  F(a)

Step 5: Subtract
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area under:
  f(x) = 3x² + 2x + 1

from x = 1 to x = 3.

Set up:
  A = ∫₁³ (3x² + 2x + 1) dx

Integrate each term:
  A = [x³ + x² + x]₁³

Evaluate:
  A = (27 + 9 + 3) - (1 + 1 + 1)
  A = 39 - 3
  A = 36

So the area is:
  36 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AREA USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes it is easier to integrate with respect to y instead of x.

Instead of:
  A = ∫ₐᵇ f(x) dx

we can use:
  A = ∫꜀ᵈ g(y) dy

The choice depends on the shape of the region.

Integrating with respect to x:
  Think: top - bottom

Integrating with respect to y:
  Think: right - left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the limits
  Incorrect:
    ∫ x² dx
  for a specific area problem.
  You need:
    ∫ₐᵇ x² dx

Mistake 2: Forgetting that area cannot be negative
  If the integral gives -5, you need to determine whether the problem asks for signed area or geometric area.

Mistake 3: Using bottom minus top
  For vertical slices:
    Area = ∫ (top - bottom) dx
  not bottom minus top.

Mistake 4: Not splitting at an x-intercept
  If the function crosses the x-axis, you may need separate integrals:
    ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  with signs adjusted when finding total geometric area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. AREA UNDER A CURVE: KEY FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function above the x-axis:
    A = ∫ₐᵇ f(x) dx

  Total geometric area:
    A = ∫ₐᵇ |f(x)| dx

  Area between two curves:
    A = ∫ₐᵇ [f(x) - g(x)] dx

  Using dy:
    A = ∫꜀ᵈ [right - left] dy

  Fundamental Theorem of Calculus:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A SIMPLE WAY TO REMEMBER IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of integration as:
  Adding infinitely many tiny pieces of area.

A tiny rectangle has:
  dA = f(x) dx

Adding all of them gives:
  A = ∫ₐᵇ f(x) dx

So whenever you see a problem asking for the area under a curve, your first thought should be:

  Set up a definite integral.

Quick example:
  Find the area under y = 2x + 1 from x = 0 to x = 3.

  A = ∫₀³ (2x + 1) dx
  A = [x² + x]₀³
  A = 9 + 3
  A = 12 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area under a curve is the fundamental geometric interpretation of the definite integral.

The definite integral:
  ∫ₐᵇ f(x) dx

gives the net signed area between the curve and the x-axis.

If the function is always positive, this equals the geometric area.

If the function is always negative, the integral is negative, but the geometric area is the absolute value.

If the function crosses the x-axis, the integral gives the net signed area, and the total geometric area requires splitting the integral and taking absolute values.

The key process:

  Region → Set up integral → Find antiderivative → Evaluate limits → Area

Core idea:
  Area under a curve = definite integral

when the function is above the x-axis.
  `,
  examples: [
    "Area under y = x² from 0 to 2 → ∫₀² x² dx = 8/3",
    "Area under y = 3x² + 2x + 1 from 1 to 3 → ∫₁³ (3x² + 2x + 1) dx = 36",
    "Area under y = -x from 0 to 2 → ∫₀² -x dx = -2 (signed), geometric area = 2",
    "Area between y = x + 2 and y = x² → ∫ₐᵇ [(x + 2) - x²] dx",
    "Total area for f(x) = x from -2 to 2 → split at 0 → 4",
    "Area using dy: A = ∫꜀ᵈ (right - left) dy",
    "Area under y = 2x + 1 from 0 to 3 → ∫₀³ (2x + 1) dx = 12",
  ],
};

export default topic;