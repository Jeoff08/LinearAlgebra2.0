// filename: area-between-curves.ts

const topic = {
  id: "area-between-curves",
  title: "Area Between Curves",
  summary:
    "Finding the region enclosed between two graphs using a definite integral, with the formula A = ∫ₐᵇ (upper function - lower function) dx or A = ∫꜀ᵈ (right function - left function) dy.",
  details: `
The Area Between Curves topic is about finding the region enclosed between two graphs using a definite integral.

The main idea is:
  Area = ∫ₐᵇ (top function - bottom function) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have two functions:
  y = f(x)
and:
  y = g(x)

If f(x) is above g(x) from x = a to x = b, then the area between them is:
  A = ∫ₐᵇ [f(x) - g(x)] dx

Why?
  At each x, the vertical distance between the curves is:
    f(x) - g(x)

The integral adds all of those tiny vertical strips together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE IMPORTANT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating with respect to x:
  A = ∫ₐᵇ (upper - lower) dx

Remember:
  Top minus bottom.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area between:
  y = x²
and:
  y = 4

Step 1: Find the intersection points
  Set the equations equal:
    x² = 4
  Therefore:
    x = ±2

  So our limits are:
    a = -2, b = 2

Step 2: Determine which function is on top
  Between -2 and 2:
    4 > x²

  Therefore:
    Upper function: 4
    Lower function: x²

Step 3: Set up the integral
  A = ∫₋₂² (4 - x²) dx

Step 4: Integrate
  ∫ (4 - x²) dx = 4x - x³/3

  Therefore:
    A = [4x - x³/3]₋₂²

  At x = 2:
    8 - 8/3 = 16/3

  At x = -2:
    -8 + 8/3 = -16/3

  Subtract:
    16/3 - (-16/3) = 32/3

  Therefore:
    A = 32/3

  square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING THE INTERSECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is usually the first step when solving area-between-curves problems.

Suppose:
  f(x) = x + 2
and:
  g(x) = x²

Set them equal:
  x + 2 = x²

Rearrange:
  x² - x - 2 = 0

Factor:
  (x - 2)(x + 1) = 0

Therefore:
  x = 2, x = -1

These become the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area between:
  y = x + 2
and:
  y = x²

from their intersection points.

Step 1: Intersection points
  x + 2 = x²
  x² - x - 2 = 0
  (x - 2)(x + 1) = 0

  Thus:
    x = -1, x = 2

Step 2: Determine the upper curve
  Take x = 0:
    For x + 2: 0 + 2 = 2
    For x²: 0² = 0

  Therefore:
    x + 2 is above x².

Step 3: Set up the integral
  A = ∫₋₁² [(x + 2) - x²] dx

Step 4: Integrate
  A = ∫₋₁² (x + 2 - x²) dx
  A = [x²/2 + 2x - x³/3]₋₁²

Evaluating gives:
  A = 9/2

square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHAT IF THE CURVES SWITCH POSITIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is very important.

Suppose one curve is above the other on one interval, but they switch positions later.

You cannot simply use one upper-minus-lower expression across the entire interval.

You must split the integral.

For example:
  A = ∫ₐᶜ [upper - lower] dx + ∫꜀ᵇ [upper - lower] dx

where x = c is the point where the curves switch.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes it is easier to integrate with respect to y.

Instead of:
  A = ∫ₐᵇ (top - bottom) dx

we use:
  A = ∫꜀ᵈ (right - left) dy

Remember:
  With dx: Top - Bottom
  With dy: Right - Left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE OF dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the curves are:
  x = y²
and:
  x = 4

The region is easier to describe horizontally.

The right curve is:
  x = 4

The left curve is:
  x = y²

So:
  A = ∫₋₂² (4 - y²) dy

Therefore:
  A = [4y - y³/3]₋₂²
  A = 32/3

square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. AREA VS. NET AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is important.

A definite integral can produce a signed area:
  ∫ₐᵇ f(x) dx

Areas below the x-axis count as negative.

But when finding the actual geometric area between curves, the answer should be positive.

Therefore:
  Area = ∫ₐᵇ |upper - lower| dx

or split the integral wherever the curves cross.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an Area Between Curves problem:

Step 1 — Identify the curves
  y = f(x), y = g(x)

Step 2 — Find intersection points
  Set: f(x) = g(x)

Step 3 — Determine the upper and lower curves
  Use a test point if necessary.

Step 4 — Choose dx or dy
  For vertical slices: top - bottom
  For horizontal slices: right - left

Step 5 — Set up the integral
  A = ∫ₐᵇ [upper - lower] dx

Step 6 — Evaluate
  Use the Fundamental Theorem of Calculus.

Step 7 — Give the answer in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Reversing the functions
  Wrong:
    ∫ₐᵇ (bottom - top) dx
  Correct:
    ∫ₐᵇ (top - bottom) dx

❌ Mistake 2: Not finding intersections
  The intersection points usually determine the limits a and b.

❌ Mistake 3: Forgetting to split the integral
  If the curves switch positions:
    Split the integral

❌ Mistake 4: Confusing area with net area
  For geometric area, the result should not contain negative portions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUICK CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                |  Formula
  ──────────────────────────┼───────────────────────────────────────────
  Vertical slices           |  A = ∫ₐᵇ (top - bottom) dx
  Horizontal slices         |  A = ∫꜀ᵈ (right - left) dy
  Find intersections        |  Set f(x) = g(x)
  Curves switch             |  Split the integral
  Actual geometric area     |  Use positive differences

The most important thing to remember:
  Area Between Curves = ∫ (distance between curves)

For dx: Top - Bottom
For dy: Right - Left
  `,
  examples: [
    "Area between y = x² and y = 4 → A = ∫₋₂² (4 - x²) dx = 32/3",
    "Area between y = x + 2 and y = x² → A = ∫₋₁² [(x+2) - x²] dx = 9/2",
    "Area between x = y² and x = 4 → A = ∫₋₂² (4 - y²) dy = 32/3",
    "Vertical slices: A = ∫ₐᵇ (top - bottom) dx",
    "Horizontal slices: A = ∫꜀ᵈ (right - left) dy",
    "Find intersections by setting f(x) = g(x)",
    "Split integral when curves switch positions",
  ],
};

export default topic;