// filename: the-circle.ts

const topic = {
  id: "the-circle",
  title: "The Circle",
  summary:
    "A set of all points on a plane that are the same distance from a fixed point called the center, with standard equation (x-h)² + (y-k)² = r², and applications in geometry and calculus.",
  details: `
A circle is one of the most important shapes in mathematics and geometry. It is a set of all points on a plane that are the same distance from one fixed point called the center. In simple terms, imagine placing a pencil at one fixed point and keeping the distance between the pencil and the center constant while rotating it around the center. The path created by the pencil forms a circle. A circle appears in many real-life objects, such as wheels, clocks, coins, plates, gears, and circular tracks. In mathematics, circles are studied using geometry and algebra. On the coordinate plane, we can represent a circle using an equation and analyse its center, radius, position, and other properties. Understanding the circle is fundamental because it appears in numerous fields, from basic geometry to advanced calculus, physics, and engineering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PARTS OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand a circle, we first need to know its important parts. Every circle has a center, which is the fixed point in the middle from which all points on the circle are equidistant. The distance from the center to any point on the circle is called the radius, denoted by r. The diameter is a line segment that passes through the center and connects two points on the circle; it is twice the radius (d = 2r). The circumference is the total distance around the circle, given by C = 2πr, and the area is the space enclosed by the circle, A = πr². These measurements are interconnected: knowing the radius allows us to compute the diameter, circumference, and area. These parts are not just definitions; they are essential for solving geometric problems and for understanding the circle's properties in coordinate geometry. For example, if you know the radius, you can immediately determine the size of the circle and its relationship to other geometric figures.

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

A circle can be represented using an equation on the coordinate plane, which allows us to describe it algebraically. The standard equation of a circle is (x - h)² + (y - k)² = r², where (h, k) is the center and r is the radius. This equation is derived directly from the Distance Formula, which states that the distance between two points (x₁, y₁) and (x₂, y₂) is √((x₂ - x₁)² + (y₂ - y₁)²). For a circle, every point (x, y) on the circle is exactly r units away from the center (h, k). Applying the Distance Formula gives r = √((x - h)² + (y - k)²), and squaring both sides yields the standard equation. This algebraic representation is powerful because it allows us to find the center and radius from an equation, graph the circle, and perform analytic geometry. Moreover, it connects coordinate geometry with algebra, making it a cornerstone of pre‑calculus and calculus studies. Understanding this equation is essential for solving problems involving tangents, intersections, and transformations of circles.

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

The simplest form of a circle has its center at the origin (0, 0). When h = 0 and k = 0, the standard equation simplifies to x² + y² = r². This is the most basic circle equation, and it is often used as a starting point for studying circles. For example, a circle with radius 5 centered at the origin has the equation x² + y² = 25. Points like (5, 0), (-5, 0), (0, 5), and (0, -5) all satisfy this equation. This symmetry about both axes and the origin makes the circle easy to graph and analyse. Understanding this special case is important because many problems involve circles centered at the origin, especially in physics and engineering where symmetry simplifies calculations. Moreover, this equation is the foundation for the more general form when the center is shifted. By mastering the origin‑centered circle, you build intuition for the effect of translations on the equation and the graph.

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

When the center is not at the origin, we use the full standard form (x - h)² + (y - k)² = r². For example, a circle centered at (3, 2) with radius 4 has the equation (x - 3)² + (y - 2)² = 16. The terms (x - h) and (y - k) represent the horizontal and vertical distances from any point (x, y) to the center. This form shows that the circle is simply a translation of the origin‑centered circle by h units horizontally and k units vertically. Being able to write the equation for any center and radius is crucial for solving problems involving circles that are not at the origin, such as those in coordinate geometry and real‑world applications like satellite orbits or circular tracks. It also helps in understanding how transformations affect the graph of a circle, which is a key skill in pre‑calculus and calculus.

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

Given an equation in standard form, we can read off the center and radius directly. For instance, in (x - 4)² + (y + 2)² = 9, we compare it to (x - h)² + (y - k)² = r². The x‑part gives h = 4, the y‑part gives k = -2 because y + 2 = y - (-2), and r² = 9 gives r = 3. This ability to extract the center and radius from the equation is essential for graphing the circle and for understanding its position relative to other geometric objects. It is also useful in solving problems that require knowing the circle's location, such as finding distances between centers or determining if a point lies on the circle. Practicing this skill builds fluency with the standard form and prepares you for converting between different forms of the circle equation.

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

Graphing a circle from its equation is straightforward once you know the center and radius. Start by plotting the center (h, k). Then, from the center, move r units right, left, up, and down to locate four points on the circle. These points are (h + r, k), (h - r, k), (h, k + r), and (h, k - r). Connect these points with a smooth, round curve, making sure that every point on the curve is exactly r units from the center. This method gives a good approximation of the circle. For example, for (x - 2)² + (y - 1)² = 9, the center is (2, 1) and radius is 3, so the points are (5, 1), (-1, 1), (2, 4), and (2, -2). Drawing the circle through these points helps visualise the equation and confirms that all points satisfy the distance condition. This graphing technique is widely used in coordinate geometry and is a foundational skill for interpreting equations visually.

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

"image": "src/assets/48.png",

Every point on the curve is exactly 3 units away from the center.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GENERAL FORM OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle can also be written in general form: x² + y² + Dx + Ey + F = 0. This form is often the result of expanding the standard form and collecting terms. While the general form is useful for certain algebraic manipulations, it does not immediately reveal the center or radius. To find them, we must convert it to standard form by completing the square. For example, x² + y² - 6x + 4y - 12 = 0 can be converted to (x - 3)² + (y + 2)² = 25, giving center (3, -2) and radius 5. The general form is commonly encountered when working with equations derived from geometric constraints or when performing operations like intersection of circles. Being able to convert between the two forms is an essential algebra skill that deepens understanding of the circle's geometric properties.

A circle can also be written in general form:
  x² + y² + Dx + Ey + F = 0

For example:
  x² + y² - 6x + 4y - 12 = 0

This form does not immediately show the center and radius.

To find them, we usually use a process called completing the square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: CONVERTING GENERAL FORM TO STANDARD FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Converting from general to standard form is a key skill. Consider x² + y² - 6x + 4y - 12 = 0. We first move the constant to the right side, then group the x and y terms. Complete the square for x² - 6x by taking half of -6, which is -3, and squaring it to get 9; add 9 to both sides. For y² + 4y, half of 4 is 2, square to get 4; add 4 to both sides. This yields (x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 = 25. Factoring gives (x - 3)² + (y + 2)² = 25. This transformation reveals that the circle has center (3, -2) and radius 5. This process is not just a mechanical exercise; it reinforces the relationship between the algebraic expression and the geometric circle, and it is widely used in calculus when dealing with conic sections and in solving systems of equations.

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

"image": "src/assets/49.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT CHARACTERISTICS OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle has several important characteristics that define its geometric nature. First, all points on the circle are equidistant from the center, which is the defining property. Second, a circle is highly symmetrical: it is symmetric about any line through its center, which means it has infinite lines of symmetry. It is also rotationally symmetric: rotating the circle about its center by any angle maps it onto itself. Third, a circle has no corners or edges; it is a smooth, continuous curve. Fourth, the ratio of the circumference to the diameter is constant and equal to π. These properties make the circle unique among geometric shapes and underpin many of its applications in physics and engineering. Understanding these characteristics helps in solving problems involving tangents, inscribed angles, and areas, and also in recognising when a shape is approximately circular.

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

"image": "src/assets/50.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CIRCLES AND FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important concept is that a complete circle is not a function of x. This is because a function requires that each input x corresponds to exactly one output y. However, for a circle like x² + y² = 25, solving for y gives y = ±√(25 - x²). For a given x (e.g., x = 0), we get two y‑values: 5 and -5. This violates the definition of a function. The vertical line test confirms this: any vertical line passing through the circle at x = 0 intersects at two points. However, the upper half (y ≥ 0) and the lower half (y ≤ 0) are each functions because they satisfy the vertical line test. This distinction is important in calculus when we need to differentiate or integrate portions of a circle. Treating a circle as a relation rather than a function allows us to use implicit differentiation to find slopes of tangents, which is a common technique in calculus.

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

"image": "src/assets/51.png",

However, the upper half and lower half of a circle can each be treated separately as functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONNECTION TO CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Circles are also important in Calculus. When studying a circle, Calculus can help us analyse slopes of tangent lines, rates of change, maximum and minimum points, areas, arc lengths, and motion along circular paths. Consider the equation x² + y² = r². We can use implicit differentiation to find the slope of the tangent line at any point. Differentiating both sides with respect to x gives 2x + 2y(dy/dx) = 0, which yields dy/dx = -x/y. This formula gives the slope of the tangent at any point (x, y) on the circle (provided y ≠ 0). This is a classic example of how implicit differentiation is used to handle relations that are not functions. Furthermore, circles appear in optimisation problems (e.g., finding the largest rectangle that fits in a circle) and in integrals for computing areas of circular segments. Understanding the circle from a calculus perspective enriches both geometry and analysis.

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

Circles are used in many fields. In engineering, circles are fundamental when designing wheels, gears, pipes, and rotating machinery, where circular shapes ensure smooth motion and even distribution of forces. In architecture, circular structures like domes, arches, and columns rely on circle geometry for both aesthetics and structural integrity. In computer graphics, circles are used for rendering shapes, detecting collisions (using bounding circles), and creating smooth animations. In physics, circular motion is a key concept when studying objects orbiting a planet, rotating on an axis, or moving in a circular path under a central force. In navigation, circular regions are used to represent areas within a certain radius, such as the range of a radio signal or the distance to a destination. These applications show that the circle is not just a theoretical concept but a practical tool that appears in everyday technology and science.

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

"image": "src/assets/52.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circle is the set of all points that are the same distance from a fixed point called the center. The most important parts of a circle are its center, radius, diameter, circumference, and area. The standard equation of a circle is (x - h)² + (y - k)² = r², where (h, k) is the center and r is the radius. This equation can be expanded to general form x² + y² + Dx + Ey + F = 0, and conversion between the two forms is done by completing the square. Circles are not functions because they fail the vertical line test, but their upper and lower halves can be treated as functions. In calculus, circles are studied using implicit differentiation to find tangent slopes, and they appear in many applications from engineering to physics. The most important idea to remember is that a circle consists of all points that are exactly the same distance from its center. Understanding circles is important because they connect geometry, algebra, graphs, and calculus, especially when studying tangent lines, derivatives, areas, and motion.

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