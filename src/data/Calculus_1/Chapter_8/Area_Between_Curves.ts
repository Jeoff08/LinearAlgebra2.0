// filename: area-between-curves.ts

const topic = {
  id: "area-between-curves",
  title: "Area Between Curves",
  summary:
    "The amount of space enclosed between two or more graphs, calculated using the definite integral of the difference between the top and bottom functions (or right and left functions).",
  details: `
The area between curves is the amount of space enclosed between two or more graphs. This is an important application of the definite integral.

For example, suppose we have two functions:
  y = f(x)
and:
  y = g(x)

If one curve is above the other, the space between them forms a region. Calculus allows us to calculate the exact area of that region.

The most important formula is:
  A = ∫ₐᵇ [Top Function - Bottom Function] dx

This formula is used when we divide the region into vertical slices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES AREA BETWEEN CURVES MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine two curves on a coordinate plane:

          y
          |
          |       Top Curve
          |      /    \\
          |     /        \\
          |    /          \\
          |   /____________\\
          |    Bottom Curve
----------|------------------------ x
          a                        b

The enclosed region is located:
  • Below the top curve
  • Above the bottom curve
  • Between the intersection points or boundaries

The goal is to calculate the total amount of space inside that region.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC FORMULA: TOP MINUS BOTTOM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose y = f(x) is above y = g(x) from x = a to x = b.

Then:
  A = ∫ₐᵇ [f(x) - g(x)] dx

Where:
  f(x) = Top function
  g(x) = Bottom function
  a = Left boundary
  b = Right boundary

The difference f(x) - g(x) represents the vertical distance between the two curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE SUBTRACT THE FUNCTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose at a particular value of x:
  f(x) = 10
and:
  g(x) = 4

The vertical distance between them is:
  10 - 4 = 6

So, the height of a small rectangle between the curves is:
  Height = Top - Bottom

If the width of the rectangle is dx, then the small area is approximately:
  dA = [f(x) - g(x)] dx

Adding all the infinitely small rectangles gives:
  A = ∫ₐᵇ [f(x) - g(x)] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING THE POINTS OF INTERSECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finding the area, we usually need to determine where the curves intersect.

Suppose y = f(x) and y = g(x).

At an intersection point:
  f(x) = g(x)

Therefore, we solve:
  f(x) = g(x)

The solutions give the values of x that often become the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: AREA BETWEEN A LINE AND A PARABOLA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area between:
  y = 2x
and:
  y = x²

Step 1: Find the Intersection Points
  Set the equations equal:
    2x = x²

  Move everything to one side:
    x² - 2x = 0

  Factor:
    x(x - 2) = 0

  Therefore:
    x = 0 or x = 2

  So, the curves intersect at x = 0 and x = 2.

Step 2: Determine Which Function Is on Top
  We compare y = 2x and y = x².

  Choose a value between 0 and 2, such as x = 1.

  For y = 2x:
    y = 2(1) = 2

  For y = x²:
    y = 1² = 1

  Therefore:
    2x > x²

  So:
    Top Function = 2x
  and:
    Bottom Function = x²

Step 3: Set Up the Integral
  Use: A = ∫ₐᵇ [Top - Bottom] dx

  Therefore:
    A = ∫₀² (2x - x²) dx

Step 4: Integrate
  Find the antiderivative:
    ∫ (2x - x²) dx = x² - x³/3

  Therefore:
    A = [x² - x³/3]₀²

Step 5: Apply the Limits
  Substitute x = 2:
    2² - 2³/3 = 4 - 8/3

  Substitute x = 0:
    0

  Therefore:
    A = 4 - 8/3

  Convert 4 into thirds:
    A = 12/3 - 8/3 = 4/3

  Therefore, the area between the curves is:
    4/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE MAIN RULE: TOP - BOTTOM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating with respect to x:
  A = ∫ₐᵇ [Top - Bottom] dx

You should always ask:
  Which graph is higher?

The higher graph is the top function, and the lower graph is the bottom function.

Remember:
  Area = Top - Bottom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA USING HORIZONTAL RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes vertical rectangles are not the easiest choice.

Instead, we can divide the region into horizontal rectangles.

In this case, we integrate with respect to y.

The formula becomes:
  A = ∫꜀ᵈ [Right Function - Left Function] dy

Important Rule:
  When using horizontal slices:
    Area = Right - Left

Where:
  Right function = right boundary
  Left function = left boundary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a region is bounded by:
  x = y²
and:
  x = 2y

To find the area, first find the intersections:
  y² = 2y

Move everything to one side:
  y² - 2y = 0

Factor:
  y(y - 2) = 0

Therefore:
  y = 0 and y = 2

Now determine which curve is on the right.

For 0 < y < 2:
  2y > y²

Therefore:
  Right curve: x = 2y
  Left curve: x = y²

The area is:
  A = ∫₀² (2y - y²) dy

Integrate:
  A = [y² - y³/3]₀²
  A = 4 - 8/3
  A = 4/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHAT IF THE CURVES SWITCH POSITIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes one function is on top in one interval but becomes the bottom function in another interval.

For example, suppose f(x) and g(x) intersect at several points.

You cannot simply use one integral if the top and bottom functions change.

You must split the area.

For example:
  A = ∫ₐᶜ [f(x) - g(x)] dx + ∫꜀ᵇ [g(x) - f(x)] dx

The process is:
  • Find all intersection points.
  • Divide the region into intervals.
  • Determine which function is on top in each interval.
  • Set up a separate integral for each region.
  • Add all the areas.

This ensures that every area is positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VERTICAL VS. HORIZONTAL SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two main ways to calculate the area between curves.

Method 1: Vertical Slices
  Use dx.
  Formula: A = ∫ₐᵇ (Top - Bottom) dx

  Each rectangle is vertical.
  The rectangle's:
    Width = dx
    Height = Top - Bottom

Method 2: Horizontal Slices
  Use dy.
  Formula: A = ∫꜀ᵈ (Right - Left) dy

  Each rectangle is horizontal.
  The rectangle's:
    Height = dy
    Width = Right - Left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW TO DECIDE WHETHER TO USE dx OR dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose the method that makes the problem easier.

Use dx when:
  • Functions are already written as y = f(x)
  • The region can easily be described from top to bottom
  • You can use one integral

Formula:
  A = ∫ₐᵇ (Top - Bottom) dx

Use dy when:
  • Functions are easily written as x = f(y)
  • The region is easier to describe from left to right
  • Using dx would require multiple integrals

Formula:
  A = ∫꜀ᵈ (Right - Left) dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL PROCEDURE FOR AREA BETWEEN CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Draw or Analyze the Graph
  Identify:
    • The curves
    • The enclosed region
    • The intersection points
  A sketch, even a rough one, can prevent mistakes.

Step 2: Find the Intersection Points
  Set f(x) = g(x).
  Solve for x.
  These usually become your integration limits.

Step 3: Decide Whether to Use dx or dy
  Ask: Is the region easier to describe vertically? Or horizontally?

Step 4: Identify the Boundaries
  For dx: Top - Bottom
  For dy: Right - Left

Step 5: Set Up the Integral
  Example: A = ∫₀² (2x - x²) dx

Step 6: Integrate
  Find the antiderivative.

Step 7: Apply the Limits
  Calculate: F(b) - F(a)

Step 8: Add Multiple Areas If Necessary
  If the curves change positions:
    A = A₁ + A₂ + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Subtracting in the Wrong Order
  Incorrect: Bottom - Top
  This usually gives a negative answer.
  Correct: Top - Bottom

2. Forgetting to Find Intersection Points
  The curves may only form a bounded region between certain values.
  Always solve f(x) = g(x) first.

3. Not Checking Which Function Is on Top
  Do not assume the first equation is the top function.
  Test a value between the intersection points.

4. Using Only One Integral When the Curves Switch
  If the curves change positions, split the interval into multiple integrals.

5. Forgetting Square Units
  Area must always be written in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Area Between Curves Using Vertical Slices:
    A = ∫ₐᵇ [Top - Bottom] dx

  Area Between Curves Using Horizontal Slices:
    A = ∫꜀ᵈ [Right - Left] dy

  When Curves Switch Positions:
    A = ∫ₐᶜ (Top₁ - Bottom₁) dx + ∫꜀ᵇ (Top₂ - Bottom₂) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • The area between curves is found using definite integrals.
  • First, find where the curves intersect.
  • When integrating with dx: Top - Bottom
  • When integrating with dy: Right - Left
  • Always check which function is above or to the right.
  • Split the region if the curves switch positions.
  • The final answer must be positive.
  • Always use square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area Between Curves is the process of finding the enclosed space between two or more functions using definite integrals.

The two most important formulas are:
  A = ∫ₐᵇ (Top - Bottom) dx
and:
  A = ∫꜀ᵈ (Right - Left) dy

The most important steps are:
  Find Intersections → Identify Boundaries → Set Up Integral → Integrate → Add Areas

In short: find the boundaries, subtract correctly, and integrate over the correct interval.
  `,
  examples: [
    "Area between y = 2x and y = x² → A = ∫₀² (2x - x²) dx = 4/3",
    "Area between x = 2y and x = y² → A = ∫₀² (2y - y²) dy = 4/3",
    "Vertical slices: A = ∫ₐᵇ [Top - Bottom] dx",
    "Horizontal slices: A = ∫꜀ᵈ [Right - Left] dy",
    "Find intersection points by setting f(x) = g(x)",
    "Split integral when curves switch positions",
    "Always check which function is on top",
  ],
};

export default topic;