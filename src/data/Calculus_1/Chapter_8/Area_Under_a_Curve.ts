// filename: area-under-a-curve.ts

const topic = {
  id: "area-under-a-curve",
  title: "Area Under a Curve",
  summary:
    "The amount of space between the graph of a function and the x-axis over a specific interval, calculated using the definite integral ∫ₐᵇ f(x) dx.",
  details: `
The area under a curve is one of the most fundamental applications of integration. It refers to the amount of space between the graph of a function and the coordinate axes over a specific interval.

For example, suppose we have the function:
  y = f(x)

and we want to find the area between the curve and the x-axis from:
  x = a to x = b

If the function is above the x-axis, the area is given by:
  A = ∫ₐᵇ f(x) dx

The symbol ∫ represents integration, which allows us to add together infinitely many tiny areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "AREA UNDER A CURVE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a curve drawn on a graph:
  y = f(x)

The region under the curve is bounded by:
  • The curve y = f(x)
  • The x-axis
  • A left boundary x = a
  • A right boundary x = b

For example:

          y
          |
          |          •
          |        •
          |      •
          |    •
          |  •
----------|---------------- x
          a              b

The shaded space between the curve and the x-axis is called the area under the curve.

If the curve stays above the x-axis, we can directly calculate the area using:
  A = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For simple shapes, we can use geometry formulas.

For example:
  Rectangle: A = lw
  Triangle: A = (1/2)bh

However, curved regions do not always have simple formulas.

Consider the curve:
  y = x²

The region underneath it is not a rectangle, triangle, or circle.

So how can we find its exact area?

Calculus solves this problem by dividing the region into many extremely thin rectangles.

Each small rectangle has:
  Width: Δx
  Height: f(x)

Therefore, the approximate area of one rectangle is:
  Area = f(x) Δx

Adding all the rectangles gives:
  f(x₁)Δx + f(x₂)Δx + f(x₃)Δx + ...

As the rectangles become thinner and thinner, the approximation becomes more accurate.

Eventually:
  A = ∫ₐᵇ f(x) dx

This is the main idea behind finding the area under a curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE DEFINITE INTEGRAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general formula is:
  A = ∫ₐᵇ f(x) dx

Where:
  A = Area
  f(x) = The function
  a = Left boundary
  b = Right boundary
  dx = Indicates that we are integrating with respect to x

The numbers a and b are called the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = x²

Find the area under the curve from x = 0 to x = 2.

We use:
  A = ∫₀² x² dx

The antiderivative of x² is:
  x³/3

Therefore:
  A = [x³/3]₀²

Substitute the upper limit:
  A = 2³/3

Substitute the lower limit:
  A = 0³/3

Therefore:
  A = 8/3 - 0
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING THE LIMITS OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ₐᵇ f(x) dx

The lower limit a tells us where the area begins.

The upper limit b tells us where the area ends.

For example:
  ∫₁⁴ f(x) dx

means that we are finding the area from x = 1 to x = 4.

The integral only calculates the area within that interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: AREA UNDER A STRAIGHT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = 2x

Find the area from x = 0 to x = 3.

Using integration:
  A = ∫₀³ 2x dx

Find the antiderivative:
  ∫ 2x dx = x²

Therefore:
  A = [x²]₀³

Substitute:
  A = 3² - 0²
  A = 9

Therefore:
  A = 9 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA UNDER A CURVE AND THE FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus makes finding areas much easier.

Suppose:
  A = ∫ₐᵇ f(x) dx

If F'(x) = f(x), then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This means:
  Step 1: Find the antiderivative F(x).
  Step 2: Substitute the upper limit b.
  Step 3: Substitute the lower limit a.
  Step 4: Subtract: F(b) - F(a)

Example:
  Find: ∫₁³ x² dx

  Step 1: Find the Antiderivative
    ∫ x² dx = x³/3

  Step 2: Apply the Limits
    [x³/3]₁³

  Step 3: Substitute
    = 3³/3 - 1³/3
    = 27/3 - 1/3
    = 26/3

  Therefore:
    A = 26/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT HAPPENS WHEN THE CURVE IS BELOW THE X-AXIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important concept.

Suppose:
  f(x) = -x

from x = 0 to x = 2.

The graph is below the x-axis.

If we calculate:
  ∫₀² -x dx

we get:
  [-x²/2]₀² = -2

But area cannot be negative.

The negative result only tells us that the graph is below the x-axis.

Therefore, the actual geometric area is:
  2 square units

Important Difference:
  Definite Integral ≠ Always Geometric Area

A definite integral calculates signed area:
  • Area above the x-axis → Positive
  • Area below the x-axis → Negative

Geometric area is always positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHEN A CURVE CROSSES THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function is above the x-axis in one interval and below it in another.

Example:
  f(x) = x - 1

from x = 0 to x = 3.

The function crosses the x-axis when:
  x - 1 = 0
  x = 1

We must split the area into two parts:
  A = A₁ + A₂

The first area is from 0 to 1.
The second area is from 1 to 3.

Mathematically:
  A = |∫₀¹ (x - 1) dx| + |∫₁³ (x - 1) dx|

This ensures that both areas are positive.

Another way to write total geometric area is:
  A = ∫ₐᵇ |f(x)| dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. AREA UNDER A CURVE USING SMALL RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The deeper idea behind integration comes from approximating the area using rectangles.

Suppose the interval is [a, b].

Divide the interval into n small parts.

The width of each rectangle is approximately:
  Δx = (b - a)/n

The approximate area of one rectangle is:
  f(xᵢ) Δx

Adding all rectangles:
  A ≈ f(x₁)Δx + f(x₂)Δx + ... + f(xₙ)Δx

Using sigma notation:
  A ≈ Σᵢ₌₁ⁿ f(xᵢ) Δx

As the number of rectangles approaches infinity:
  A = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This limit is called the definite integral:
  ∫ₐᵇ f(x) dx

So integration is essentially a process of adding infinitely many extremely small areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT STEPS IN SOLVING AREA UNDER A CURVE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Identify the Function
  Example: f(x) = x² + 1

Step 2: Identify the Interval
  Example: a = 0, b = 3

Step 3: Check the Graph
  Determine whether the function is:
    • Above the x-axis
    • Below the x-axis
    • Crossing the x-axis

Step 4: Set Up the Integral
  A = ∫ₐᵇ f(x) dx

Step 5: Find the Antiderivative
  For example: ∫ x² dx = x³/3

Step 6: Apply the Limits
  Use: F(b) - F(a)

Step 7: Write the Answer
  Always include square units: square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Forgetting the Limits
  Incorrect: ∫ x² dx
  when the problem asks for an area from x = 0 to x = 2.
  Correct: ∫₀² x² dx

2. Forgetting That Area Cannot Be Negative
  If the graph is below the x-axis, the integral may be negative.
  For geometric area, use the absolute value or split the interval.

3. Forgetting to Check Where the Graph Crosses the Axis
  If a function crosses the x-axis, you usually need to split the problem into separate intervals.

4. Forgetting the Units
  Area should be written in units², not just units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Area Above the x-Axis:
    A = ∫ₐᵇ f(x) dx
    provided f(x) ≥ 0.

  Area Below the x-Axis:
    A = -∫ₐᵇ f(x) dx
    when f(x) ≤ 0.

  Total Area When the Curve Crosses the Axis:
    A = ∫ₐᵇ |f(x)| dx

  Fundamental Theorem of Calculus:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
    where F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • The area under a curve is the space between the curve and the x-axis.
  • We use definite integrals to calculate the exact area.
  • The basic formula is: A = ∫ₐᵇ f(x) dx
  • The limits a and b determine where the region begins and ends.
  • Integration works by adding infinitely many tiny pieces of area.
  • A definite integral represents signed area.
  • Geometric area is always positive.
  • If the curve crosses the x-axis, split the interval or use absolute value.
  • Always express the final answer in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area Under a Curve is the process of finding the amount of space between a function and the x-axis over a specific interval. Calculus accomplishes this by dividing the region into infinitely many tiny rectangles and adding their areas together through a definite integral:

  A = ∫ₐᵇ f(x) dx

The main thing to remember is that if the curve goes below the x-axis, the definite integral may become negative, but the actual geometric area is always positive.
  `,
  examples: [
    "Area under f(x) = x² from 0 to 2 → A = ∫₀² x² dx = 8/3",
    "Area under f(x) = 2x from 0 to 3 → A = ∫₀³ 2x dx = 9",
    "Area under f(x) = x² from 1 to 3 → A = ∫₁³ x² dx = 26/3",
    "Area below x-axis: f(x) = -x from 0 to 2 → integral = -2, geometric area = 2",
    "Crossing x-axis: f(x) = x - 1 from 0 to 3 → split at x = 1",
    "Total area: A = ∫ₐᵇ |f(x)| dx",
    "FTC: ∫ₐᵇ f(x) dx = F(b) - F(a)",
  ],
};

export default topic;