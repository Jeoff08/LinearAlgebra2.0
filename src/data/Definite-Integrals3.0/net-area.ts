// filename: net-area.ts

const topic = {
  id: "net-area",
  title: "Net Area",
  summary:
    "The signed area represented by a definite integral, accounting for whether a region is above or below the x-axis, where positive areas cancel with negative areas.",
  details: `
The Net Area is the signed area represented by a definite integral. It accounts for whether a region is above or below the x-axis.

This is an important concept because the value of a definite integral is not always the same as the total geometric area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  y = f(x)

on the interval [a, b].

The definite integral is:
  ∫ₐᵇ f(x) dx

This represents the net area between the curve and the x-axis.

The key rule is:
  Above the x-axis → Positive
  Below the x-axis → Negative

Therefore, positive and negative regions can cancel each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. NET AREA VS. TOTAL AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Net Area:
  Takes signs into account:
    Net Area = Area Above - Area Below

Total Area:
  Treats every region as positive:
    Total Area = Area Above + Area Below

So:
  Net Area ≠ Total Area

when the function crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. AREA ABOVE THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≥ 0 on the interval [a, b], then:
  Net Area = ∫ₐᵇ f(x) dx

The integral is positive.

Example:
  Consider f(x) = x on [0, 2].

Since x ≥ 0:
  ∫₀² x dx

is positive.

Calculate:
  [x²/2]₀² = 2

Therefore:
  Net Area = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. AREA BELOW THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≤ 0, then:
  ∫ₐᵇ f(x) dx < 0

The integral is negative because the region lies below the x-axis.

Example:
  Consider f(x) = -x on [0, 2].

Then:
  ∫₀² -x dx
  = [-x²/2]₀²
  = -2

Therefore:
  Net Area = -2

But the geometric area is:
  2

because area itself is conventionally positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES THE AREA BECOME NEGATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the x-axis as a reference line.

If the graph is above it:
  f(x) > 0
the integral adds positive contributions.

If the graph is below it:
  f(x) < 0
the integral adds negative contributions.

Therefore:
  Net Area = (+areas) + (-areas)

For example:
  8 + (-3) = 5

So the net area is:
  5

even though the total geometric area is:
  8 + 3 = 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: FUNCTION CROSSES THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x from x = -2 to x = 2.

The graph crosses the x-axis at x = 0.

There are two regions:
  [-2, 0]: below the x-axis
  [0, 2]: above the x-axis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CALCULATE THE NET AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We calculate:
  ∫₋₂² x dx

The antiderivative is:
  x²/2

Therefore:
  [x²/2]₋₂²
  = 2²/2 - (-2)²/2
  = 2 - 2
  = 0

The net area is:
  0

because the positive and negative regions have equal size.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. BUT IS THE ACTUAL AREA ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No!

This is a very important point.

The graph has two triangular regions, each with area:
  (1/2)(2)(2) = 2

So:
  Area below: 2
  Area above: 2

The net area is:
  2 - 2 = 0

But the total geometric area is:
  2 + 2 = 4

Therefore:
  Net Area = 0
while:
  Total Area = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING TOTAL AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the problem asks for the total area, you cannot simply evaluate:
  ∫ₐᵇ f(x) dx

when the function crosses the x-axis.

Instead, you must split the integral at the points where:
  f(x) = 0

Then make each region positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: TOTAL AREA FOR f(x) = x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the total area between y = x and the x-axis from -2 ≤ x ≤ 2.

First find where the function crosses the axis:
  x = 0

Split the interval:
  [-2, 0] and [0, 2]

The left region is below the axis, so its integral is negative.

Therefore, we take its absolute value:
  A = -∫₋₂⁰ x dx + ∫₀² x dx

Calculate:
  -[x²/2]₋₂⁰ + [x²/2]₀²
  = -(-2) + 2
  A = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. USING ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a convenient formula for total area:
  A_total = ∫ₐᵇ |f(x)| dx

The absolute value makes every part of the function nonnegative.

For example:
  ∫₋₂² |x| dx

gives the total geometric area between y = x and the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. NET AREA FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function has regions above and below the x-axis:
  A_net = A_above - A_below

For example, if:
  A_above = 15
and:
  A_below = 6

then:
  A_net = 15 - 6 = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TOTAL AREA FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the same example:
  A_total = 15 + 6
  A_total = 21

Therefore:
  Net Area = 9
while:
  Total Area = 21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING WHERE THE FUNCTION CHANGES SIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before calculating net or total area, you should check whether the function crosses the x-axis.

To find the crossing points, solve:
  f(x) = 0

These points are called the zeros, roots, or x-intercepts of the function.

They divide the interval into regions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the net area represented by:
  ∫₋₁² (x² - x) dx

First factor:
  x² - x = x(x - 1)

The zeros are:
  x = 0 and x = 1

So the function changes sign at:
  0 and 1

The interval must be divided into:
  [-1, 0], [0, 1], [1, 2]

For net area, however, we can simply evaluate the original definite integral:
  ∫₋₁² (x² - x) dx

An antiderivative is:
  x³/3 - x²/2

Therefore:
  [x³/3 - x²/2]₋₁²

At x = 2:
  8/3 - 2 = 2/3

At x = -1:
  -1/3 - 1/2 = -5/6

Therefore:
  2/3 - (-5/6) = 4/6 + 5/6 = 9/6 = 3/2

So the net area is:
  3/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FINDING TOTAL AREA FOR THE SAME FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For total area, we need to determine where the function is positive and negative.

f(x) = x(x - 1)

On [-1, 0]:
  Both x and x - 1 are negative, so f(x) > 0.

On [0, 1]:
  One factor is positive and the other negative, so f(x) < 0.

On [1, 2]:
  Both factors are positive, so f(x) > 0.

Therefore:
  A_total = ∫₋₁⁰ f(x) dx - ∫₀¹ f(x) dx + ∫₁² f(x) dx

The negative region is changed to positive by placing a minus sign in front of its integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. NET AREA VS. TOTAL AREA: VISUAL UNDERSTANDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine the following situation:
  Above area = 12
  Below area = 5

Then:
  Net area: 12 - 5 = 7
  Total area: 12 + 5 = 17

So:
  Net = 7, Total = 17

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. NET AREA AND DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The connection can be summarized as:
  ∫ₐᵇ f(x) dx = Net Area

provided we interpret the regions with their signs.

But:
  ∫ₐᵇ |f(x)| dx = Total Geometric Area

This distinction is fundamental.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. NET AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Net area can also be calculated between two curves.

Suppose f(x) is above g(x).

Then:
  A_net = ∫ₐᵇ [f(x) - g(x)] dx

The basic idea is:
  Net Area = ∫ (top - bottom) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: AREA BETWEEN TWO LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) = x + 3 and g(x) = x + 1.

From 0 ≤ x ≤ 4, the top function is:
  x + 3
and the bottom function is:
  x + 1

Therefore:
  A = ∫₀⁴ [(x + 3) - (x + 1)] dx

Simplify:
  A = ∫₀⁴ 2 dx
  = [2x]₀⁴
  = 8

Thus:
  A = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. NET AREA AND SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry can make net-area calculations much easier.

Even Function:
  If f(-x) = f(x), then:
    ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

Odd Function:
  If f(-x) = -f(x), then:
    ∫₋ₐᵃ f(x) dx = 0

For an odd function, equal positive and negative regions cancel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE OF AN ODD FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x³.

Since (-x)³ = -x³, it is odd.

Therefore:
  ∫₋₃³ x³ dx = 0

So:
  Net Area = 0

However, the total geometric area is not zero.

The positive and negative regions have equal size, so:
  Total Area = 2∫₀³ x³ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Thinking every area must be positive
  A definite integral can be negative:
    ∫ₐᵇ f(x) dx < 0
  if the function is below the x-axis.

Mistake 2: Confusing net area with total area
  Remember:
    Net = + areas - areas
  while:
    Total = + areas + areas

Mistake 3: Not checking x-intercepts
  If the function crosses the x-axis, you should find f(x) = 0.
  These points tell you where the sign changes.

Mistake 4: Forgetting the absolute value for total area
  You can use:
    A_total = ∫ₐᵇ |f(x)| dx
  or split the integral and change the sign of the negative regions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. PROBLEM-SOLVING PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked for net area:

Step 1: Identify f(x) and [a, b].

Step 2: Set up ∫ₐᵇ f(x) dx.

Step 3: Evaluate the definite integral.

Step 4: Interpret the sign.
  + → net area above
  - → net area below

When asked for total area:

Step 1: Solve f(x) = 0.

Step 2: Identify where the function is positive or negative.

Step 3: Split the integral at the x-intercepts.

Step 4: Make every region positive.

Step 5: Add all the areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Net area:
    A_net = ∫ₐᵇ f(x) dx

  Total area:
    A_total = ∫ₐᵇ |f(x)| dx

  Above the x-axis:
    A = ∫ₐᵇ f(x) dx
    when f(x) ≥ 0.

  Below the x-axis:
    A = -∫ₐᵇ f(x) dx
    when f(x) ≤ 0.

  Between two curves:
    A = ∫ₐᵇ [upper - lower] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept               Formula                     Meaning
  ────────────────────────────────────────────────────────────────────────────
  Net Area              ∫ₐᵇ f(x) dx                 Signed area
  Total Area            ∫ₐᵇ |f(x)| dx               Unsigned geometric area
  Above x-axis          Positive                    Adds to net area
  Below x-axis          Negative                    Subtracts from net area
  Area between curves   ∫ (top - bottom) dx         Difference between curves

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of net area as a balance:
  Net Area = Positive Area - Negative Area

For example:
  15 - 7 = 8

So:
  Net Area = 8

while:
  Total Area = 15 + 7 = 22

The key idea is:

  A definite integral measures signed area. Regions above the x-axis count 
  positively, while regions below the x-axis count negatively.

Therefore, always distinguish between:

  NET AREA
and:
  TOTAL GEOMETRIC AREA

because they can produce completely different answers.
  `,
  examples: [
    "Net area for f(x) = x on [0,2] → ∫₀² x dx = 2",
    "Net area for f(x) = -x on [0,2] → ∫₀² -x dx = -2",
    "Net area for f(x) = x on [-2,2] → ∫₋₂² x dx = 0",
    "Total area for f(x) = x on [-2,2] → ∫₋₂² |x| dx = 4",
    "Net area for f(x) = x² - x on [-1,2] → ∫₋₁² (x² - x) dx = 3/2",
    "Even function on [-a,a]: ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx",
    "Odd function on [-a,a]: ∫₋ₐᵃ f(x) dx = 0",
  ],
};

export default topic;