// filename: area-of-a-region-in-a-plane.ts

const topic = {
  id: "area-of-a-region-in-a-plane",
  title: "Area of a Region in a Plane",
  summary:
    "Using definite integrals to calculate the amount of two-dimensional space enclosed by one or more curves or boundaries, including area under curves and between curves.",
  details: `
The area of a region in a plane is the amount of two-dimensional space enclosed by one or more curves or boundaries. In calculus, we use definite integrals to calculate areas of regions with curved boundaries.

For simple shapes such as rectangles and triangles, geometry formulas are enough. However, when the boundaries are curves such as:
  y = x², y = sin x, y = √x

ordinary geometry formulas may not work. Calculus allows us to divide the region into many tiny pieces, calculate their areas, and add them together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA OF AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to find the area under the curve:
  y = f(x)

from x = a to x = b.

If f(x) ≥ 0, the area is:
  A = ∫ₐᵇ f(x) dx

This represents the area between:
  • the curve y = f(x)
  • the x-axis
  • the vertical line x = a
  • the vertical line x = b

Visual idea:
        y
        |
        |        / curve
        |      /
        |    /
        |  /
--------|---------------- x
        a        b

The region underneath the curve is divided into infinitely many tiny rectangles. The definite integral adds all those tiny areas together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x²

Find the area under the curve from x = 0 to x = 2.

Using the area formula:
  A = ∫₀² x² dx

Find the antiderivative:
  ∫ x² dx = x³/3

Evaluate:
  A = [x³/3]₀²
  A = 2³/3 - 0³/3
  A = 8/3

Therefore:
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of integration is finding the area between two curves.

Suppose we have:
  y = f(x)
and:
  y = g(x)

If f(x) is above g(x), then the area between them is:
  A = ∫ₐᵇ [f(x) - g(x)] dx

Important Rule:
  Area = Top Function - Bottom Function

The upper curve determines the top boundary, while the lower curve determines the bottom boundary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area between:
  y = x²
and:
  y = 2x

Step 1: Find the Points of Intersection
  Set the equations equal:
    x² = 2x

  Move everything to one side:
    x² - 2x = 0

  Factor:
    x(x - 2) = 0

  Therefore:
    x = 0 and x = 2

  These are the limits of integration.

Step 2: Determine Which Function Is on Top
  Compare:
    y = 2x and y = x²

  Between x = 0 and x = 2, the line y = 2x is above the parabola y = x².

  Therefore:
    A = ∫₀² (2x - x²) dx

Step 3: Integrate
  A = ∫₀² (2x - x²) dx

  The antiderivative is:
    A = [x² - x³/3]₀²

  Substitute the limits:
    A = (4 - 8/3) - 0
    A = 12/3 - 8/3
    A = 4/3

  Therefore, the area between the curves is:
    4/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. AREA USING HORIZONTAL RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes it is easier to integrate with respect to y instead of x.

In this case, the formula becomes:
  A = ∫꜀ᵈ [Right Function - Left Function] dy

Important Rule:
  When integrating with respect to y:
    Area = Right - Left

This is similar to vertical integration:
  • With dx: Top - Bottom
  • With dy: Right - Left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CHOOSING BETWEEN dx AND dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving area problems, you need to decide whether to use vertical or horizontal rectangles.

Vertical Rectangles:
  Use dx.
  Formula: A = ∫ₐᵇ [Top - Bottom] dx

Horizontal Rectangles:
  Use dy.
  Formula: A = ∫꜀ᵈ [Right - Left] dy

Choose the method that makes the problem easier and avoids splitting the region into too many separate integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. REGIONS CROSSING THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important distinction must be made between a definite integral and an area.

Consider a function below the x-axis.

For example:
  f(x) = -x

from x = 0 to x = 2.

The definite integral is:
  ∫₀² -x dx

which gives:
  -2

However, area cannot be negative.

Therefore, the actual area is:
  2 square units

To find total area when a function crosses the x-axis, we use:
  A = ∫ₐᵇ |f(x)| dx

or split the integral at the points where the function crosses the axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GENERAL STEPS FOR FINDING THE AREA OF A REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving area problems, follow these steps:

Step 1: Draw or Analyze the Region
  Understand the curves and identify the boundaries.
  Ask:
    • What curve is on top?
    • What curve is on the bottom?
    • Where do the curves intersect?
    • Should I use dx or dy?

Step 2: Find the Intersection Points
  Set the equations equal: f(x) = g(x)
  Solve for the values of x or y.
  These values usually become the limits of integration.

Step 3: Choose the Correct Formula
  For vertical slices:
    A = ∫ₐᵇ [Top - Bottom] dx

  For horizontal slices:
    A = ∫꜀ᵈ [Right - Left] dy

Step 4: Set Up the Integral
  Substitute the correct functions and limits.
  Example: A = ∫₀² (2x - x²) dx

Step 5: Evaluate the Integral
  Find the antiderivative and apply the limits.

Step 6: Write the Answer in Square Units
  Area always has squared units.
  Examples: cm², m², ft²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Area Under a Curve:
    A = ∫ₐᵇ f(x) dx
    when f(x) ≥ 0.

  Area Between Two Curves Using dx:
    A = ∫ₐᵇ [f(x) - g(x)] dx
    where f(x) = top function, g(x) = bottom function.

  Area Between Two Curves Using dy:
    A = ∫꜀ᵈ [Right - Left] dy

  Total Area:
    A = ∫ₐᵇ |f(x)| dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Area measures the space inside a region.
  • Definite integrals can calculate areas with curved boundaries.
  • When integrating with respect to x: Top - Bottom
  • When integrating with respect to y: Right - Left
  • Always find the intersection points first.
  • A definite integral can be negative, but area is always positive.
  • If a graph crosses an axis, you may need to split the integral.
  • The final answer should always be expressed in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The topic Area of a Region in a Plane teaches us how to use definite integrals to measure regions bounded by curves, lines, or axes. The main strategy is to divide the region into infinitely many tiny rectangles and add their areas using integration.

The most important rule is:
  Area = Top - Bottom

when integrating with respect to x, and:
  Area = Right - Left

when integrating with respect to y.
  `,
  examples: [
    "Area under f(x) = x² from 0 to 2 → A = ∫₀² x² dx = 8/3",
    "Area between y = 2x and y = x² → A = ∫₀² (2x - x²) dx = 4/3",
    "Area below x-axis: f(x) = -x from 0 to 2 → geometric area = 2",
    "Vertical slices: A = ∫ₐᵇ [Top - Bottom] dx",
    "Horizontal slices: A = ∫꜀ᵈ [Right - Left] dy",
    "Total area: A = ∫ₐᵇ |f(x)| dx",
    "Always find intersection points first",
  ],
};

export default topic;