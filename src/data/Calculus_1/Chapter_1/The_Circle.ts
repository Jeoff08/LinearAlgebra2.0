// filename: the-circle.ts

const topic = {
  id: "the-circle",
  title: "The Circle",
  summary:
    "A set of all points on a plane that are the same distance from a fixed point called the center, with standard equation (x-h)² + (y-k)² = r², and applications in geometry and calculus.",
  details: `
A circle is one of the most important shapes in mathematics and geometry. It is a set of all points on a plane that are the same distance from one fixed point called the center.

In simple terms, imagine placing a pencil at one fixed point and keeping the distance between the pencil and the center constant while rotating it around the center. The path created by the pencil forms a circle.

A circle appears in many real-life objects, such as:
  • Wheels
  • Clocks
  • Coins
  • Plates
  • Gears
  • Circular tracks

In mathematics, circles are studied using geometry and algebra. On the coordinate plane, we can represent a circle using an equation and analyze its center, radius, position, and other properties.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PARTS OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand a circle, we first need to know its important parts.

Center:
  The center is the fixed point in the middle of the circle.
  Every point on the circle is the same distance from the center.
  For example, if the center is (0, 0) and the radius is 5, then every point on the circle is exactly 5 units away from the origin.

Radius:
  The radius is the distance from the center of the circle to any point on the circle.
  It is usually represented by r.
  All radii of the same circle have the same length.
  For example, if r = 5, then every point on the circle is exactly 5 units away from the center.

Diameter:
  The diameter is a line segment that passes through the center and connects two points on the circle.
  The diameter is twice the radius:
    d = 2r
  For example, if r = 5, then:
    d = 2(5) = 10

Circumference:
  The circumference is the distance around the circle.
  It is similar to the perimeter of a polygon.
  The formula is:
    C = 2πr
  Since the diameter is d = 2r, the circumference can also be written as:
    C = πd

Area:
  The area of a circle represents the amount of space inside the circle.
  The formula is:
    A = πr²
  For example, if the radius is r = 4, then:
    A = π(4)² = 16π
  Therefore:
    A = 16π square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE EQUATION OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle can be represented using an equation on the coordinate plane.

The standard equation of a circle is:
  (x - h)² + (y - k)² = r²

where:
  (h, k) is the center of the circle.
  r is the radius.
  (x, y) represents any point on the circle.

This equation comes from the Distance Formula.

Remember that every point on a circle has the same distance from the center.

Suppose the center is (h, k) and a point on the circle is (x, y).

The distance between these points must equal the radius.

Using the Distance Formula:
  r = √((x - h)² + (y - k)²)

Squaring both sides gives:
  r² = (x - h)² + (y - k)²

Therefore:
  (x - h)² + (y - k)² = r²

This equation tells us exactly why a circle has its shape: every point (x, y) must remain the same distance r from the center.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CIRCLE CENTERED AT THE ORIGIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The simplest form of a circle has its center at the origin:
  (0, 0)

The equation becomes:
  x² + y² = r²

This happens because h = 0 and k = 0.

Therefore:
  (x - 0)² + (y - 0)² = r²

which simplifies to:
  x² + y² = r²

Example:
  Suppose a circle has:
    Center: (0, 0)
    Radius: 5

  Using:
    x² + y² = r²

  Substitute r = 5:
    x² + y² = 25

  Therefore, the equation of the circle is:
    x² + y² = 25

  Points such as:
    (5, 0), (-5, 0), (0, 5), and (0, -5)

  all satisfy the equation.

  For example:
    (5)² + (0)² = 25

  Therefore, (5, 0) lies on the circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CIRCLE WITH A DIFFERENT CENTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider a circle with:
  Center: (3, 2)
  Radius: 4

Using the standard equation:
  (x - h)² + (y - k)² = r²

Substitute:
  h = 3
  k = 2
  r = 4

The equation becomes:
  (x - 3)² + (y - 2)² = 16

Therefore:
  (x - 3)² + (y - 2)² = 16

This equation represents a circle centered at (3, 2) with a radius of 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FINDING THE CENTER AND RADIUS FROM AN EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we are given:
  (x - 4)² + (y + 2)² = 9

We compare this equation with:
  (x - h)² + (y - k)² = r²

For the x-part:
  x - 4 → h = 4

For the y-part:
  y + 2 = y - (-2) → k = -2

Finally:
  r² = 9 → r = 3

Therefore:
  Center = (4, -2)
and:
  Radius = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO GRAPH A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  (x - 2)² + (y - 1)² = 9

Step 1: Find the Center
  Compare with (x - h)² + (y - k)² = r²
  Therefore:
    h = 2
    k = 1
  The center is:
    (2, 1)

Step 2: Find the Radius
  Since r² = 9, then r = 3.

Step 3: Plot the Center
  Plot (2, 1) on the coordinate plane.

Step 4: Move the Radius in Different Directions
  From the center, move 3 units:
    • Right → (5, 1)
    • Left → (-1, 1)
    • Up → (2, 4)
    • Down → (2, -2)

  This gives four important points.

Step 5: Draw the Circle
  Connect these points with a smooth circular curve.

Every point on the curve is exactly 3 units away from the center.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GENERAL FORM OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle can also be written in general form:
  x² + y² + Dx + Ey + F = 0

For example:
  x² + y² - 6x + 4y - 12 = 0

This form does not immediately show the center and radius.

To find them, we usually use a process called completing the square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: CONVERTING GENERAL FORM TO STANDARD FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  x² + y² - 6x + 4y - 12 = 0

Step 1: Move the Constant
  x² - 6x + y² + 4y = 12

Step 2: Group the x and y Terms
  (x² - 6x) + (y² + 4y) = 12

Step 3: Complete the Square
  For x² - 6x:
    Take half of -6: -3
    Square it: 9

  For y² + 4y:
    Take half of 4: 2
    Square it: 4

  Add both values to both sides:
    x² - 6x + 9 + y² + 4y + 4 = 12 + 9 + 4

Step 4: Factor
  (x - 3)² + (y + 2)² = 25

Therefore, the standard form is:
  (x - 3)² + (y + 2)² = 25

From this equation:
  Center = (3, -2)
and:
  Radius = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT CHARACTERISTICS OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle has several important characteristics.

All Points Are the Same Distance from the Center:
  This is the main definition of a circle.
  If the radius is 5, every point on the circle must be exactly 5 units away from the center.

A Circle Is Symmetrical:
  A circle is symmetrical around its center.
  If a circle is centered at (0, 0), then it is symmetrical about:
    • The x-axis
    • The y-axis
    • The origin

A Circle Has No Corners:
  Unlike polygons, a circle has no sides or corners.
  It is a continuous curved shape.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CIRCLES AND FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important concept is that a complete circle is not a function of x.

Consider:
  x² + y² = 25

Solving for y:
  y = ±√(25 - x²)

For some x-values, there are two possible y-values.

For example, if x = 0, then:
  y = ±5

This gives two points:
  (0, 5) and (0, -5)

Because one x-value can produce two different y-values, the circle fails the Vertical Line Test.

Therefore:
  A complete circle is not a function.

However, the upper half and lower half of a circle can each be treated separately as functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONNECTION TO CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Circles are also important in Calculus.

When studying a circle, Calculus can help us analyze:
  • Slopes of tangent lines
  • Rates of change
  • Maximum and minimum points
  • Areas
  • Arc lengths
  • Motion along circular paths

Consider:
  x² + y² = r²

This equation contains both x and y. In Calculus, we can use implicit differentiation to find the slope of the tangent line.

Differentiate both sides:
  d/dx (x² + y²) = d/dx (r²)

This gives:
  2x + 2y(dy/dx) = 0

Solving for dy/dx gives:
  dy/dx = -x/y

This equation tells us the slope of the tangent line at any point on the circle where y ≠ 0.

This demonstrates how geometry and Calculus are connected.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. REAL-LIFE APPLICATIONS OF CIRCLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Circles are used in many fields.

Engineering:
  Engineers use circles when designing wheels, gears, pipes, and rotating machines.

Architecture:
  Circular structures and curved designs often involve circle equations.

Computer Graphics:
  Circles are used when creating shapes, animations, and collision systems.

Physics:
  Circular motion is important when studying objects moving around a fixed point.

Navigation:
  Circular regions can be used to represent areas within a certain distance from a location.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                   Formula
  ──────────────────────────────────────────────────────────────────────────
  Standard Form             (x - h)² + (y - k)² = r²
  Center at Origin          x² + y² = r²
  General Form              x² + y² + Dx + Ey + F = 0
  Radius                    r
  Diameter                  d = 2r
  Circumference             C = 2πr
  Area                      A = πr²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle is the set of all points that are the same distance from a fixed point called the center.

The most important parts of a circle are:
  • Center — the fixed point in the middle.
  • Radius — the distance from the center to the circle.
  • Diameter — twice the radius.
  • Circumference — the distance around the circle.
  • Area — the space inside the circle.

The standard equation of a circle is:
  (x - h)² + (y - k)² = r²

where:
  (h, k) is the center.
  r is the radius.

The most important idea to remember is:

  A circle consists of all points that are exactly the same distance from its center.

Understanding circles is important because they connect geometry, algebra, graphs, and Calculus, especially when studying tangent lines, derivatives, areas, and motion.
  `,
  examples: [
    "Circle centered at (0,0) with r = 5 → x² + y² = 25",
    "Circle centered at (3,2) with r = 4 → (x-3)² + (y-2)² = 16",
    "From (x-4)² + (y+2)² = 9 → center (4,-2), radius 3",
    "General form: x² + y² - 6x + 4y - 12 = 0 → center (3,-2), radius 5",
    "Circumference: C = 2πr",
    "Area: A = πr²",
    "Implicit differentiation: dy/dx = -x/y for x² + y² = r²",
  ],
};

export default topic;