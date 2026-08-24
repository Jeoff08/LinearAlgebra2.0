// filename: number-plane-and-graphs.ts

const topic = {
  id: "number-plane-and-graphs",
  title: "The Number Plane and Graphs of Equations",
  summary:
    "The coordinate plane (Cartesian plane) with x-axis and y-axis, ordered pairs, quadrants, plotting points, graphing linear and nonlinear equations, intercepts, and the importance of graphs in calculus.",
  details: `
The number plane, also called the coordinate plane or Cartesian plane, is a system used to locate points and represent mathematical relationships visually. It is one of the most important foundations in mathematics because it allows us to connect numbers, equations, and graphs.

In simple terms, an equation can describe a relationship between variables, while a graph allows us to see that relationship visually.

For example, consider the equation:
  y = x + 2

Instead of only looking at the equation, we can choose different values of x, calculate the corresponding values of y, and plot the resulting points on the coordinate plane. When these points are connected, they form a graph.

The number plane is extremely important in Algebra and Calculus because graphs help us understand:
  • The behavior of functions
  • Increasing and decreasing values
  • Intercepts
  • Maximum and minimum points
  • Slopes
  • Curves
  • Rates of change
  • Limits and derivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE NUMBER PLANE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The number plane is formed by two perpendicular number lines.

These are called the:
  • x-axis — the horizontal axis
  • y-axis — the vertical axis

The x-axis and y-axis intersect at a point called the origin.

The origin is represented by:
  (0, 0)

This point is important because it is the starting point used to locate other points on the coordinate plane.

The x-Axis:
  The x-axis is the horizontal line.
  Values increase as we move to the right:
    0, 1, 2, 3, 4, ...
  Values decrease as we move to the left:
    ..., -4, -3, -2, -1, 0

The x-coordinate tells us how far to move horizontally.
For example:
  (4, 2)
The first number, 4, means we move 4 units to the right from the origin.

The y-Axis:
  The y-axis is the vertical line.
  Values increase as we move upward:
    1, 2, 3, 4, ...
  Values decrease as we move downward:
    ..., -4, -3, -2, -1

The y-coordinate tells us how far to move vertically.
Using the point:
  (4, 2)
The second number, 2, means we move 2 units upward.

Therefore, the point (4, 2) is located by:
  • Moving 4 units to the right.
  • Moving 2 units upward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ORDERED PAIRS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A point on the coordinate plane is represented using an ordered pair.

The general form is:
  (x, y)

The first number represents the horizontal position, while the second number represents the vertical position.

For example:
  (3, 5)
This means:
  x = 3
  y = 5

To locate the point, move 3 units to the right and then 5 units upward.

The order is extremely important.

For example:
  (3, 5)
is different from:
  (5, 3)

The first point has an x-coordinate of 3 and a y-coordinate of 5. The second point has an x-coordinate of 5 and a y-coordinate of 3.

Therefore:
  (3, 5) ≠ (5, 3)

unless both coordinates are the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FOUR QUADRANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The x-axis and y-axis divide the coordinate plane into four regions called quadrants.

Quadrant I:
  Located in the upper-right portion of the plane.
  Both coordinates are positive:
    (+, +)
  Example:
    (3, 4)

Quadrant II:
  Located in the upper-left portion of the plane.
  The x-coordinate is negative, while the y-coordinate is positive:
    (-, +)
  Example:
    (-3, 4)

Quadrant III:
  Located in the lower-left portion of the plane.
  Both coordinates are negative:
    (-, -)
  Example:
    (-3, -4)

Quadrant IV:
  Located in the lower-right portion of the plane.
  The x-coordinate is positive, while the y-coordinate is negative:
    (+, -)
  Example:
    (3, -4)

A useful way to remember the quadrants is to move counterclockwise starting from the upper-right:
  I → II → III → IV

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. PLOTTING POINTS ON THE NUMBER PLANE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To plot a point, we use its ordered pair.

For example:
  (-2, 3)

Step 1: Look at the x-coordinate
  The x-coordinate is -2.
  Move 2 units to the left.

Step 2: Look at the y-coordinate
  The y-coordinate is 3.
  Move 3 units upward.

Step 3: Mark the Point
  The point is located at (-2, 3).

Since the x-coordinate is negative and the y-coordinate is positive, the point is located in Quadrant II.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHAT IS A GRAPH?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A graph is a visual representation of mathematical information or relationships.

In Algebra, graphs are often used to show the relationship between two variables.

For example:
  y = x

This equation says that the value of y is equal to the value of x.

We can create a table of values:

  x      y = x
  ─────────────
  -2     -2
  -1     -1
   0      0
   1      1
   2      2

The ordered pairs are:
  (-2, -2), (-1, -1), (0, 0), (1, 1), (2, 2)

When these points are plotted and connected, they form a straight line.

The graph gives us a visual understanding of the equation. Instead of only seeing symbols and numbers, we can see how x and y change together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GRAPHS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An equation can have many solutions.

For example:
  y = x + 2

We can choose values for x and calculate the corresponding values of y.

  x      y = x + 2
  ──────────────────
  -2      0
  -1      1
   0      2
   1      3
   2      4

The corresponding points are:
  (-2, 0), (-1, 1), (0, 2), (1, 3), (2, 4)

When these points are plotted on the coordinate plane, they form a straight line.

Every point on that line satisfies the equation:
  y = x + 2

This is an important concept:
  The graph of an equation is the collection of all points that satisfy that equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LINEAR EQUATIONS AND THEIR GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common type of equation is the linear equation.

The general form is:
  y = mx + b

where:
  m represents the slope
  b represents the y-intercept

Understanding the Slope:
  The slope describes how steep a line is and how the line changes as x increases.

The slope can be calculated using:
  m = (y₂ - y₁)/(x₂ - x₁)

This is commonly described as:
  Slope = Rise / Run

The rise represents vertical movement, while the run represents horizontal movement.

Positive Slope:
  If a line rises from left to right, it has a positive slope.
  Example:
    y = 2x + 1
  As x increases, y also increases.

Negative Slope:
  If a line falls from left to right, it has a negative slope.
  Example:
    y = -2x + 1
  As x increases, y decreases.

Zero Slope:
  A horizontal line has a slope of m = 0.
  Example:
    y = 3
  No matter what value x has, the y-value always remains 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTERCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An intercept is a point where a graph crosses one of the coordinate axes.

There are two important types.

x-Intercept:
  The x-intercept is where the graph crosses the x-axis.
  At the x-axis, y = 0.

For example:
  y = x - 3

To find the x-intercept:
  0 = x - 3
  Therefore: x = 3

The x-intercept is:
  (3, 0)

y-Intercept:
  The y-intercept is where the graph crosses the y-axis.
  At the y-axis, x = 0.

Using:
  y = x - 3

Substitute x = 0:
  y = -3

Therefore, the y-intercept is:
  (0, -3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIFFERENT TYPES OF GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not all equations produce straight lines.

Linear Function:
  y = x + 2
  Produces a straight line.

Quadratic Function:
  y = x²
  Produces a curved graph called a parabola.

Absolute Value Function:
  y = |x|
  Produces a V-shaped graph.

Cubic Function:
  y = x³
  Produces a curved graph that changes direction around the origin.

Rational Function:
  y = 1/x
  Produces two separate curves and has values where the function is undefined.

Each type of equation has a different graph. Learning how to recognize these graphs helps us understand the behavior of mathematical functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HOW TO GRAPH AN EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common method for graphing an equation is to create a table of values.

Consider:
  y = x²

Choose several values of x.

  x      y = x²
  ──────────────
  -2     4
  -1     1
   0     0
   1     1
   2     4

This produces the points:
  (-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)

Plot these points on the coordinate plane and connect them smoothly.

The result is a U-shaped curve called a parabola.

This method is useful because it allows us to transform an algebraic equation into a visual representation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY GRAPHS ARE IMPORTANT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphs become even more important when studying Calculus.

Calculus is concerned with understanding how quantities change. A graph provides a visual representation of that change.

For example, a graph can help us identify:

Increasing Functions:
  A function is increasing when its graph moves upward as we move from left to right.

Decreasing Functions:
  A function is decreasing when its graph moves downward as we move from left to right.

Maximum and Minimum Points:
  Graphs can show the highest or lowest points of a function.

Rate of Change:
  The steepness of a graph helps describe how quickly a quantity changes.

Limits:
  Graphs help us observe what value a function approaches as x approaches a particular number.

Derivatives:
  The derivative represents the instantaneous rate of change or the slope of a curve at a particular point.

Integrals:
  Graphs are used to visualize areas under curves.

Therefore, understanding the coordinate plane is essential because most Calculus concepts involve analyzing functions on a graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                Description
  ───────────────────────────────────────────────────────────────────────
  Origin                 (0, 0)
  x-axis                 Horizontal axis
  y-axis                 Vertical axis
  Ordered pair           (x, y)
  Quadrant I             (+, +)
  Quadrant II            (-, +)
  Quadrant III           (-, -)
  Quadrant IV            (+, -)
  Slope                  m = (y₂ - y₁)/(x₂ - x₁)
  x-intercept            Set y = 0
  y-intercept            Set x = 0
  Linear equation        y = mx + b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The number plane and graphs of equations allow us to represent mathematical relationships visually.

The coordinate plane contains:
  • The x-axis, which represents horizontal movement.
  • The y-axis, which represents vertical movement.
  • The origin, located at (0, 0).
  • Four quadrants used to identify the locations of points.

Points are represented using ordered pairs:
  (x, y)

Graphs are created by plotting all the points that satisfy an equation. Different equations can produce different shapes, including straight lines, parabolas, V-shapes, and curves.

The most important idea to remember is:

  An equation describes a mathematical relationship, while a graph allows 
  us to see that relationship visually.

Understanding the number plane and graphs provides an essential foundation for Algebra, Functions, and Calculus.
  `,
  examples: [
    "Plot point (4, 2): move 4 right, 2 up",
    "Quadrants: (3, 4) is QI, (-3, 4) is QII, (-3, -4) is QIII, (3, -4) is QIV",
    "Graph of y = x is a straight line through the origin",
    "Graph of y = x + 2 is a line with slope 1, y-intercept 2",
    "Slope formula: m = (y₂ - y₁)/(x₂ - x₁)",
    "x-intercept: set y = 0; y-intercept: set x = 0",
    "Graph of y = x² is a parabola (U-shaped)",
  ],
};

export default topic;