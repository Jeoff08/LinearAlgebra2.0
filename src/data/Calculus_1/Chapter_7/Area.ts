// filename: area.ts

const topic = {
  id: "area",
  title: "Area",
  summary:
    "The amount of space covered by a two-dimensional shape or region, measured in square units, with applications from basic geometry to definite integrals and area under curves.",
  details: `
Area is the amount of space covered by a two-dimensional (2D) shape or region. In simple terms, area tells us how much surface is inside a boundary.

For example, if you have a rectangular piece of paper, its area tells you how much space the paper covers.

Area is measured in square units, such as:
  cm², m², ft², in²

The word square is important because area measures two dimensions:
  length × width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA OF AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a rectangle that is divided into small squares.

If each small square has an area of 1 unit² and there are 12 squares inside the rectangle, then the total area is:
  12 square units

This basic idea of adding small pieces together is very important in Calculus.

In fact:
  Area → Approximation → Riemann Sum → Definite Integral

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COMMON AREA FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Rectangle:
  The area of a rectangle is:
    A = lw
  where:
    A = area
    l = length
    w = width

  Example:
    Suppose l = 8 m and w = 5 m.
    Then:
      A = (8)(5) = 40 m²

2. Square:
  Since all sides of a square are equal:
    A = s²
  where s is the length of one side.

  Example:
    If s = 6 cm, then:
      A = 6² = 36 cm²

3. Triangle:
  The formula for the area of a triangle is:
    A = (1/2)bh
  where:
    b = base
    h = perpendicular height

  Example:
    Suppose b = 10 and h = 6.
    Then:
      A = (1/2)(10)(6) = 30 square units

4. Circle:
  The area of a circle is:
    A = πr²
  where:
    r = radius
    π ≈ 3.14159

  Example:
    If r = 4, then:
      A = π(4)² = 16π ≈ 50.27 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. AREA IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In Calculus, we are often interested in finding the area under a curve.

Consider a function:
  y = f(x)

We may want to find the area between:
  • the curve y = f(x)
  • the x-axis
  • x = a
  • x = b

Visually, we are finding the region underneath the graph.

The general idea is:
  Area = ∫ₐᵇ f(x) dx

However, this formula works directly as geometric area when:
  f(x) ≥ 0

throughout the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: AREA UNDER A SIMPLE CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = x

Find the area under the curve from x = 0 to x = 3.

Using integration:
  A = ∫₀³ x dx

The antiderivative of x is:
  x²/2

Therefore:
  A = [x²/2]₀³

Substitute the limits:
  A = 3²/2 - 0²/2 = 9/2

Therefore:
  A = 4.5 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES INTEGRATION FIND AREA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A curved region is difficult to measure using ordinary geometry formulas.

For example, we cannot usually use:
  A = lw

because the top boundary is curved.

So Calculus solves this problem by dividing the region into many small rectangles.

Each rectangle has approximately:
  Area = height × width

or:
  f(xᵢ) Δx

If we add all the small rectangle areas:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

we get an approximation of the total area.

This is called a Riemann Sum.

As the rectangles become thinner:
  Δx → 0

and the number of rectangles increases:
  n → ∞

the approximation becomes exact:
  A = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This leads to the definite integral:
  A = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AREA USING RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to estimate the area under a curve.

We divide the interval [a, b] into n rectangles.

The width of each rectangle is:
  Δx = (b - a)/n

Each rectangle has approximately:
  Area = f(xᵢ) Δx

Adding all rectangles:
  A ≈ Σᵢ₌₁ⁿ f(xᵢ) Δx

The more rectangles we use, the better the approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LEFT, RIGHT, AND MIDPOINT APPROXIMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several ways to choose the height of each rectangle.

1. Left Riemann Sum:
  Use the left endpoint of each interval.
  Lₙ = Σᵢ₌₁ⁿ f(xᵢ₋₁) Δx

2. Right Riemann Sum:
  Use the right endpoint of each interval.
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

3. Midpoint Riemann Sum:
  Use the middle point of each interval.
  Mₙ = Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2) Δx

The midpoint approximation is often more accurate than simply using the left or right endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: AREA USING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area under:
  f(x) = x²

from:
  x = 0 to x = 2

Step 1: Set up the integral
  A = ∫₀² x² dx

Step 2: Find the antiderivative
  ∫ x² dx = x³/3

Step 3: Apply the limits
  A = [x³/3]₀²
  A = 2³/3 - 0³/3
  A = 8/3

Therefore:
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. AREA BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Calculus can also find the area between two curves.

Suppose y = f(x) is above y = g(x).

Then the area between them is:
  A = ∫ₐᵇ [f(x) - g(x)] dx

The basic principle is:
  Area = Top Function - Bottom Function

Example:
  Find the area between y = x + 2 and y = x².

  First, determine which function is on top over the chosen interval. Then the area is calculated using:
    A = ∫ₐᵇ [(top) - (bottom)] dx

  For every small vertical strip:
    Area of strip = (top height - bottom height) × width

  Adding infinitely many thin strips gives the total area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT: AREA VS. DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two ideas are closely related but are not always exactly the same.

A definite integral calculates signed area.

Areas above the x-axis are positive.
Areas below the x-axis are negative.

For example:
  ∫ₐᵇ f(x) dx

may subtract the area below the axis from the area above the axis.

But geometric area should always be positive.

Therefore, when finding total geometric area:
  A = ∫ₐᵇ |f(x)| dx

if the graph crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: AREA BELOW THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = -x

from:
  x = 0 to x = 2

The definite integral is:
  ∫₀² -x dx = [-x²/2]₀² = -2

The integral gives:
  -2

But area cannot be negative.

Therefore, the actual geometric area is:
  2 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEPS FOR SOLVING AREA PROBLEMS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Understand the Region
  Identify:
    • The function or functions
    • The boundaries
    • The interval
    • The x-axis or another curve

Step 2: Sketch the Graph
  A graph helps determine:
    • Where the function is positive or negative
    • Which function is on top
    • Where curves intersect
    • The correct limits of integration

Step 3: Set Up the Integral
  For area under a curve:
    A = ∫ₐᵇ f(x) dx

  For area between curves:
    A = ∫ₐᵇ [f(x) - g(x)] dx

Step 4: Integrate
  Find the antiderivative.

Step 5: Apply the Limits
  Evaluate: F(b) - F(a)

Step 6: Check the Answer
  Remember: Area must be positive.
  If necessary, split the integral into multiple parts or use absolute values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting Square Units
  Area should be written in square units.
  For example: 25 cm², not simply 25 cm.

Mistake 2: Using Bottom Minus Top
  For area between curves:
    Area = Top - Bottom
  Using Bottom - Top may produce a negative answer.

Mistake 3: Ignoring the X-Axis
  If the graph crosses the x-axis, you may need to divide the problem into separate intervals.

  For example:
    A = |∫ₐᶜ f(x) dx| + |∫꜀ᵇ f(x) dx|

  where c is the point where the graph crosses the axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                         Formula
  ───────────────────────────────────────────────────────────────────────────
  Rectangle                      A = lw
  Square                         A = s²
  Triangle                       A = (1/2)bh
  Circle                         A = πr²
  Area under a positive curve    A = ∫ₐᵇ f(x) dx
  Area between curves            A = ∫ₐᵇ [Top - Bottom] dx
  Total area crossing axis       A = ∫ₐᵇ |f(x)| dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental concept of area in Calculus is:

  Divide the region into many tiny pieces and add them together.

This begins with ordinary geometry, develops into Sigma Notation and Riemann Sums, and eventually leads to the Definite Integral:

  Area = ∫ₐᵇ f(x) dx

Understanding area is essential because it serves as one of the main foundations of integral calculus and many applications of integration.
  `,
  examples: [
    "Rectangle area: l=8m, w=5m → A = 40 m²",
    "Square area: s=6cm → A = 36 cm²",
    "Triangle area: b=10, h=6 → A = 30 square units",
    "Circle area: r=4 → A = 16π square units",
    "Area under f(x) = x from 0 to 3 → A = 9/2 square units",
    "Area under f(x) = x² from 0 to 2 → A = 8/3 square units",
    "Area below x-axis: f(x)=-x from 0 to 2 → geometric area = 2",
  ],
};

export default topic;