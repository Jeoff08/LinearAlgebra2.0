// filename: number-plane-and-graphs.ts

const topic = {
  id: "number-plane-and-graphs",
  title: "The Number Plane and Graphs of Equations",
  summary:
    "The coordinate plane (Cartesian plane) with x-axis and y-axis, ordered pairs, quadrants, plotting points, graphing linear and nonlinear equations, intercepts, and the importance of graphs in calculus.",
  details: `
The number plane, also called the coordinate plane or Cartesian plane, is a system used to locate points and represent mathematical relationships visually. It is one of the most important foundations in mathematics because it allows us to connect numbers, equations, and graphs. In simple terms, an equation can describe a relationship between variables, while a graph allows us to see that relationship visually. For example, consider the equation y = x + 2. Instead of only looking at the equation, we can choose different values of x, calculate the corresponding values of y, and plot the resulting points on the coordinate plane. When these points are connected, they form a graph. The number plane is extremely important in Algebra and Calculus because graphs help us understand the behavior of functions, increasing and decreasing values, intercepts, maximum and minimum points, slopes, curves, rates of change, limits, and derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE NUMBER PLANE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The number plane is formed by two perpendicular number lines called the x‑axis (horizontal) and the y‑axis (vertical). These axes intersect at a point called the origin, denoted by (0, 0). The origin is the starting point used to locate every other point on the plane. The x‑axis extends to the right for positive values and to the left for negative values, while the y‑axis extends upward for positive values and downward for negative values. Every point on the plane is described by an ordered pair (x, y), where the x‑coordinate indicates horizontal movement from the origin and the y‑coordinate indicates vertical movement. This system, developed by René Descartes, revolutionised mathematics by linking algebra and geometry. It allows us to visualise equations as geometric figures and to analyse geometric problems using algebra. Understanding the structure of the coordinate plane is essential for graphing functions, solving systems of equations, and studying calculus.

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

"image": "src/assets/53.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ORDERED PAIRS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A point on the coordinate plane is represented using an ordered pair (x, y). The first number is the x‑coordinate, which indicates the horizontal position relative to the origin, and the second number is the y‑coordinate, which indicates the vertical position. The order of the numbers is critical: (3, 5) and (5, 3) represent two entirely different points. The first point is located 3 units right and 5 units up, while the second is 5 units right and 3 units up. This is why they are called ordered pairs the sequence matters. When reading or writing ordered pairs, always remember that the x‑coordinate comes first, followed by the y‑coordinate. This convention is universal in mathematics, science, and engineering, ensuring clear communication of location. Mastering ordered pairs is the first step toward graphing equations and understanding functions, as every point on a graph corresponds to an ordered pair that satisfies the equation.

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

The x‑axis and y‑axis divide the coordinate plane into four regions called quadrants. These quadrants are numbered counterclockwise starting from the upper‑right. Quadrant I contains points with both coordinates positive (+, +). Quadrant II has negative x and positive y (-, +). Quadrant III has both coordinates negative (-, -). Quadrant IV has positive x and negative y (+, -). The axes themselves are not part of any quadrant; they are the boundaries. Knowing which quadrant a point lies in helps quickly determine the signs of its coordinates and is useful for understanding the behavior of functions and trigonometric ratios. For example, in Quadrant I, both sine and cosine are positive; in Quadrant II, sine is positive but cosine is negative. The quadrant system is a fundamental tool in coordinate geometry and is widely used in physics, engineering, and computer graphics for spatial reasoning.

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

To plot a point, we use its ordered pair to locate it on the coordinate plane. Start at the origin. The x‑coordinate tells you whether to move left or right: positive means right, negative means left. The y‑coordinate tells you whether to move up or down: positive means up, negative means down. For example, to plot (-2, 3), start at the origin, move 2 units to the left (because x = -2), then move 3 units up (because y = 3), and mark the point. This point lies in Quadrant II because its x‑coordinate is negative and y‑coordinate is positive. Plotting points accurately is a fundamental skill that underpins all graphing activities. It allows us to visualise data, draw graphs of equations, and understand geometric transformations. With practice, plotting points becomes intuitive and serves as the gateway to more advanced topics like functions and calculus.

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

A graph is a visual representation of mathematical information or relationships. In algebra, graphs are often used to show the relationship between two variables, typically x and y. For example, the equation y = x states that y equals x for all values. By creating a table of values, we can generate ordered pairs such as (-2, -2), (-1, -1), (0, 0), (1, 1), and (2, 2). When these points are plotted and connected, they form a straight line. The graph provides an immediate visual understanding of the equation: instead of only seeing symbols and numbers, we can see how x and y change together. This visualisation is powerful because it reveals patterns, trends, and properties that might not be obvious from the equation alone. Graphs are indispensable in mathematics, science, and economics for communicating data and relationships clearly and intuitively.

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

An equation can have many solutions, and each solution corresponds to an ordered pair that satisfies the equation. For example, the equation y = x + 2 has infinitely many solutions. We can choose any value for x, compute the corresponding y, and get a point. The set of all such points forms the graph of the equation. For y = x + 2, points like (-2, 0), (-1, 1), (0, 2), (1, 3), and (2, 4) all lie on the graph. When plotted and connected, they form a straight line. This is a fundamental concept: the graph of an equation is the collection of all points that satisfy that equation. Every point on the graph represents a solution, and every solution corresponds to a point on the graph. This idea bridges algebra and geometry and is the basis for solving equations graphically, analyzing functions, and understanding the behavior of mathematical models.

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

A common type of equation is the linear equation, which has the general form y = mx + b, where m is the slope and b is the y‑intercept. The slope describes how steep the line is and how y changes relative to x. It is calculated as m = (y₂ - y₁)/(x₂ - x₁), also known as "rise over run." A positive slope means the line rises from left to right, a negative slope means it falls, a slope of zero gives a horizontal line, and an undefined slope gives a vertical line. The y‑intercept b is the point where the line crosses the y‑axis (at x = 0). Linear equations are the simplest type of function and are widely used to model relationships with constant rates of change, such as distance‑time, cost‑quantity, and many physical laws. Understanding linear equations and their graphs is essential for progressing to more complex functions in calculus.

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

An intercept is a point where a graph crosses one of the coordinate axes. There are two important types: the x‑intercept and the y‑intercept. The x‑intercept occurs where the graph crosses the x‑axis, which means y = 0 at that point. To find it, set y = 0 in the equation and solve for x. For example, in y = x - 3, setting y = 0 gives x = 3, so the x‑intercept is (3, 0). The y‑intercept occurs where the graph crosses the y‑axis, which means x = 0. To find it, set x = 0 and solve for y. In the same equation, x = 0 gives y = -3, so the y‑intercept is (0, -3). Intercepts are useful because they provide two easily identifiable points that can be used to sketch the graph of a line. They also give insight into the behavior of a function, such as where it starts or where it crosses important thresholds.

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

Not all equations produce straight lines. Different types of equations produce graphs with distinct shapes, each revealing different properties. Linear functions yield straight lines. Quadratic functions like y = x² produce U‑shaped parabolas, which open upward or downward depending on the coefficient. Absolute value functions like y = |x| create V‑shaped graphs. Cubic functions like y = x³ give S‑shaped curves that change direction at the origin. Rational functions like y = 1/x produce two separate branches with vertical and horizontal asymptotes. Exponential functions grow or decay rapidly. Recognising these graph shapes is crucial because it allows us to anticipate the behavior of a function from its equation. In calculus, these shapes help us understand limits, derivatives, and integrals, as each shape has characteristic features like maxima, minima, and asymptotes.

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

A common method for graphing an equation is to create a table of values. This involves choosing several input values (x), applying the equation to compute the corresponding outputs (y), and then plotting the resulting ordered pairs on the coordinate plane. For example, to graph y = x², we might choose x = -2, -1, 0, 1, 2, which give y = 4, 1, 0, 1, 4 respectively. Plotting these points and connecting them smoothly reveals the U‑shape of a parabola. This method is particularly useful for equations that are not linear, as it gives a visual sense of the curve's shape. With enough points, the graph becomes accurate and reveals important features like intercepts, turning points, and symmetry. This approach is foundational for understanding functions and is often the first step in more advanced graphing techniques, including using derivatives to find critical points.

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

Graphs become even more important when studying Calculus because they provide a visual framework for understanding change and behaviour. Calculus is concerned with how quantities change, and graphs make these changes visible. For example, a graph can show whether a function is increasing or decreasing over an interval, and where it reaches maximum or minimum values. The steepness of the graph indicates the rate of change, which is the foundation of derivatives. Graphs also help us understand limits by showing what value a function approaches as x gets close to a certain point. In integral calculus, graphs are used to visualise areas under curves, which represent accumulated quantities. Without graphs, many calculus concepts would remain abstract; with graphs, they become intuitive and accessible. Therefore, a solid understanding of graphing is essential before diving into calculus.

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

The number plane and graphs of equations allow us to represent mathematical relationships visually. The coordinate plane contains the x‑axis (horizontal), the y‑axis (vertical), the origin at (0, 0), and four quadrants that help identify the locations of points. Points are represented using ordered pairs (x, y), where the first number gives the horizontal position and the second gives the vertical position. Graphs are created by plotting all the points that satisfy an equation; different equations produce different shapes, including straight lines, parabolas, V‑shapes, and curves. Intercepts are points where the graph crosses the axes, and the slope describes the steepness of a line. Understanding the number plane and graphs provides an essential foundation for Algebra, Functions, and Calculus because they allow us to visualise relationships, analyse behaviour, and solve problems geometrically. The most important idea to remember is that an equation describes a mathematical relationship, while a graph allows us to see that relationship visually.

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