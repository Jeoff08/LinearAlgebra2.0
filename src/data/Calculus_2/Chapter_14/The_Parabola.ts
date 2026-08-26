// filename: TheParabola.ts

const topic = {
  id: "the-parabola",
  title: "The Parabola",
  summary:
    "A comprehensive guide to parabolas as conic sections. Covers the geometric definition, parts (vertex, focus, directrix, axis of symmetry), standard equations, quadratic form, and real-world applications.",
  details: `
A parabola is one of the four main conic sections in mathematics. It is a smooth, U-shaped curve formed by all points in a plane that are equally distant from a fixed point called the focus and a fixed line called the directrix.

Parabolas are important in analytic geometry, algebra, physics, engineering, architecture, and calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF A PARABOLA

Imagine a fixed point called the focus and a fixed straight line called the directrix.

A point P(x, y) belongs to the parabola if:

  Distance from P to the focus = Distance from P to the directrix

This special condition creates the characteristic curved shape of a parabola.

Main idea:

  A parabola is the set of all points that are equally distant from the focus and the directrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE PARTS OF A PARABOLA

A parabola has several important parts:

A. Vertex

The vertex is the turning point of the parabola.

It can be:

  The lowest point if the parabola opens upward.
  The highest point if the parabola opens downward.
  The leftmost or rightmost point if the parabola opens sideways.

For example:

  y = x²

The vertex is:

  (0, 0)

B. Focus

The focus is a fixed point inside the parabola.

Every point on the parabola is the same distance from:

  the focus
  the directrix

The focus helps define the exact shape and position of the parabola.

C. Directrix

The directrix is a fixed straight line associated with the parabola.

The parabola curves around the focus while maintaining equal distance between the focus and directrix.

D. Axis of Symmetry

The axis of symmetry is an imaginary line that divides the parabola into two identical halves.

For example:

  y = x²

The axis of symmetry is:

  x = 0

The left and right sides are mirror images.

E. Latus Rectum

The latus rectum is a line segment that:

  passes through the focus
  is perpendicular to the axis of symmetry
  has endpoints on the parabola

It is useful when studying the geometric properties of parabolas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. STANDARD EQUATIONS OF A PARABOLA

There are two main orientations of a parabola.

A. Vertical Parabola

The standard form is:

  (x - h)² = 4p(y - k)

The vertex is:

  (h, k)

The parabola opens:

  Upward if p > 0
  Downward if p < 0

The focus is:

  (h, k + p)

The directrix is:

  y = k - p

The axis of symmetry is:

  x = h

Example

  x² = 8y

Compare this with:

  x² = 4py

Therefore:

  4p = 8
  p = 2

So:

  Vertex: (0, 0)
  Focus: (0, 2)
  Directrix: y = -2
  Axis of symmetry: x = 0

Since p > 0, the parabola opens upward.

B. Horizontal Parabola

The standard form is:

  (y - k)² = 4p(x - h)

The vertex is:

  (h, k)

The parabola opens:

  Right if p > 0
  Left if p < 0

The focus is:

  (h + p, k)

The directrix is:

  x = h - p

The axis of symmetry is:

  y = k

Example

  y² = -12x

Compare:

  y² = 4px

Therefore:

  4p = -12
  p = -3

So:

  Vertex: (0, 0)
  Focus: (-3, 0)
  Directrix: x = 3
  Axis of symmetry: y = 0

Because p < 0, the parabola opens to the left.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HOW TO DETERMINE THE DIRECTION OF A PARABOLA

Look at the variable that is squared.

  Equation Form                    Direction
  ──────────────────────────────────────────────
  (x - h)² = 4p(y - k)             Up or Down
  (y - k)² = 4p(x - h)             Left or Right

Easy rule:
  x² → vertical parabola
  y² → horizontal parabola

The sign of p determines the exact direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PARABOLA AS A QUADRATIC FUNCTION

Another common form of a parabola is:

  y = ax² + bx + c

This is called the quadratic function form.

For example:

  y = x²
  y = 2x²
  y = -x² + 4

All of these equations produce parabolas.

The Role of a

In:

  y = ax² + bx + c

the value of a determines the direction and width.

If a > 0

The parabola opens upward:

  y = x²

If a < 0

The parabola opens downward:

  y = -x²

Width of the Parabola

  Large |a| → narrower parabola
  Small |a| → wider parabola

For example:

  y = 5x²

is narrower than:

  y = x²

while:

  y = (1/2)x²

is wider.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING THE VERTEX OF A QUADRATIC PARABOLA

Given:

  y = ax² + bx + c

The x-coordinate of the vertex is:

  x = -b/(2a)

Then substitute that value into the equation to find y.

Example

Find the vertex of:

  y = x² - 4x + 3

Here:

  a = 1
  b = -4

Use:

  x = -b/(2a)
  x = -(-4)/(2(1))
  x = 2

Substitute x = 2:

  y = (2)² - 4(2) + 3
  y = 4 - 8 + 3
  y = -1

Therefore, the vertex is:

  (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AXIS OF SYMMETRY

The axis of symmetry passes through the vertex.

For a quadratic equation:

  y = ax² + bx + c

the axis of symmetry is:

  x = -b/(2a)

Using the previous example:

  y = x² - 4x + 3

The axis of symmetry is:

  x = 2

This means the parabola is perfectly symmetrical around the vertical line x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTERCEPTS OF A PARABOLA

A. Y-intercept

The y-intercept occurs when:

  x = 0

Example:

  y = x² - 4x + 3

Substitute x = 0:

  y = 3

Therefore, the y-intercept is:

  (0, 3)

B. X-intercepts

The x-intercepts occur when:

  y = 0

Example:

  x² - 4x + 3 = 0

Factor:

  (x - 1)(x - 3) = 0

Therefore:

  x = 1

or

  x = 3

The x-intercepts are:

  (1, 0)

and

  (3, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GRAPH OF A PARABOLA

A simple example is:

  y = x²

Some points are:

  x     y = x²
  ─────────────
  -2    4
  -1    1
  0     0
  1     1
  2     4

When plotted, these points form a U-shaped curve.

Important characteristics:

  Vertex: (0, 0)
  Opens upward
  Symmetrical about the y-axis
  Axis of symmetry: x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FOCUS AND DIRECTRIX CONCEPT

Consider a parabola with:

  Focus = (0, 2)

and:

  Directrix: y = -2

The vertex lies exactly halfway between them:

  (0, 0)

Any point on the parabola has the same distance to the focus and directrix.

For example, if a point is 5 units away from the focus, it must also be 5 units away from the directrix.

This equal-distance property is what mathematically defines a parabola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PARABOLAS IN REAL LIFE

Parabolas appear in many practical situations.

A. Satellite Dishes

Satellite dishes use a parabolic shape because signals entering parallel to the axis are reflected toward the focus.

B. Car Headlights

The bulb is placed near the focus of a parabolic reflector. Light reflects outward in nearly parallel rays.

C. Suspension Bridges

The cables of suspension bridges can approximately form parabolic curves under certain loading conditions.

D. Projectile Motion

When an object is thrown through the air, its path is approximately a parabola.

For example:

  Throwing a basketball
  Kicking a football
  Launching a projectile

Ignoring air resistance, the path often follows a quadratic equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. PARABOLA IN CALCULUS

Parabolas are extremely important in calculus because quadratic functions are commonly used to study:

  Maximum and minimum values
  Optimization problems
  Velocity and acceleration
  Area under curves
  Tangent lines
  Rates of change

For example:

  y = x²

Its derivative is:

  dy/dx = 2x

The derivative tells us the slope of the tangent line at any point on the parabola.

At:

  x = 2

the slope is:

  2(2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. KEY FORMULAS TO REMEMBER

Vertical Parabola:

  (x - h)² = 4p(y - k)
  Vertex: (h, k)
  Focus: (h, k + p)
  Directrix: y = k - p
  Opens up/down

Horizontal Parabola:

  (y - k)² = 4p(x - h)
  Vertex: (h, k)
  Focus: (h + p, k)
  Directrix: x = h - p
  Opens left/right

Quadratic Form:

  y = ax² + bx + c
  Vertex x-coordinate: x = -b/(2a)
  Axis of symmetry: x = -b/(2a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SIMPLE SUMMARY

The parabola is a curved graph defined geometrically by points that are equally distant from a focus and a directrix. In algebra, it commonly appears as a quadratic equation. Understanding its vertex, axis of symmetry, focus, directrix, and direction of opening is essential for graphing and solving problems involving parabolas.

Easy way to remember: A parabola is the set of points equidistant from a point (focus) and a line (directrix). In algebra, it's y = ax² + bx + c. The vertex is the turning point, and the axis of symmetry passes through it.
  `,
  examples: [
    "x² = 8y → vertex (0,0), focus (0,2), directrix y = -2, opens upward",
    "y² = -12x → vertex (0,0), focus (-3,0), directrix x = 3, opens left",
    "y = x² - 4x + 3 → vertex (2,-1), axis of symmetry x = 2",
    "y = x² → vertex (0,0), opens upward, axis of symmetry x = 0",
    "y = 5x² → narrower than y = x²",
    "y = (1/2)x² → wider than y = x²",
    "Parabola applications: satellite dishes, headlights, suspension bridges, projectile motion",
  ],
};

export default topic;