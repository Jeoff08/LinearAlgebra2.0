// filename: GraphsOfPolarEquations.ts

const topic = {
  id: "graphs-of-polar-equations",
  title: "Graphs of Polar Equations",
  summary:
    "A comprehensive guide to graphing polar equations. Covers the basic concepts, common polar curves (circles, spirals, rose curves, cardioids, limacons, lemniscates), symmetry tests, and a step-by-step graphing strategy.",
  details: `
A polar equation is an equation that describes a curve using polar coordinates:

  (r, θ)

instead of Cartesian coordinates:

  (x, y)

In polar equations:

  r tells us the distance from the pole (origin).
  θ tells us the direction or angle.

A polar graph is created by calculating values of r for different values of θ, plotting the points, and connecting them smoothly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA OF GRAPHING POLAR EQUATIONS

Suppose we have:

  r = f(θ)

To graph this equation:

  Choose a value for θ.
  Calculate r.
  Plot the point (r, θ).
  Repeat for many values of θ.
  Connect the points smoothly.

Unlike Cartesian graphs, where we usually change x, in polar graphs we usually change the angle θ.

Example

Consider:

  r = 2θ

Let's calculate some points:

  θ       r = 2θ
  ──────────────────
  0       0
  π/4     π/2
  π/2     π
  π       2π

As the angle increases:

  θ ↑

the radius also increases:

  r ↑

The result is a spiral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW TO READ A POLAR GRAPH

Think of polar graphing like using a compass.

For every point:

  (r, θ)

you:

  Turn through the angle θ.
  Move outward r units from the origin.

For example:

  (4, 60°)

means:

  turn 60°,
  move 4 units from the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE EFFECT OF POSITIVE AND NEGATIVE r

This is one of the most important concepts in graphing polar equations.

Positive r

If:

  r > 0

move in the direction of θ.

For example:

  (3, 45°)

means move 3 units in the 45° direction.

Negative r

If:

  r < 0

move in the direction opposite to θ.

For example:

  (-3, 45°)

is equivalent to:

  (3, 225°)

because:

  45° + 180° = 225°

Therefore:

  (-r, θ) = (r, θ + π)

This is why polar graphs can sometimes create loops and unexpected shapes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMMON TYPES OF POLAR GRAPHS

There are several important families of polar equations.

A. Circles

One of the simplest polar equations is:

  r = a

This represents a circle centered at the pole with radius a.

Example

  r = 4

Every point is exactly 4 units away from the origin.

Therefore, the graph is a circle with radius 4.

Other Circle Equations

Consider:

  r = 2a · cos θ

Using:

  x = r · cos θ

we get:

  r² = 2ar · cos θ

Since:

  r² = x² + y²

and:

  r · cos θ = x

we get:

  x² + y² = 2ax

This represents a circle.

Similarly:

  r = 2a · sin θ

also represents a circle.

B. Spirals

A common spiral equation is:

  r = aθ

This is called an Archimedean spiral.

Example

  r = θ

As θ increases:

  r = θ

also increases.

The point keeps rotating while moving farther away from the pole.

This creates a spiral.

Important Idea

A spiral is formed because:

  the angle continuously changes,
  the distance from the origin continuously changes.

C. Rose Curves

Rose curves look like flowers.

The general equations are:

  r = a · cos(nθ)

or:

  r = a · sin(nθ)

The value of n determines the number of petals.

Number of Petals

If n is odd:

  Number of petals = n

Example:

  r = 3 · cos(3θ)

produces:

  3 petals

If n is even:

  Number of petals = 2n

Example:

  r = 3 · cos(2θ)

produces:

  4 petals

Example: Four-Petal Rose

  r = 2 · cos(2θ)

The maximum value of r is:

  2

The graph creates four symmetrical petals.

Rose curves are excellent examples of how trigonometric functions can create complex shapes.

D. Cardioids

A cardioid is a heart-shaped polar curve.

Common forms include:

  r = a + a · cos θ
  r = a - a · cos θ
  r = a + a · sin θ
  r = a - a · sin θ

Example

  r = 2 + 2 · cos θ

Factor:

  r = 2(1 + cos θ)

When:

  θ = 0
  r = 4

The graph extends farthest to the right.

When:

  θ = π
  r = 0

The graph returns to the pole.

This creates the pointed part of the cardioid.

E. Limacons

A limacon has the general form:

  r = a + b · cos θ

or:

  r = a + b · sin θ

Limacons can have different shapes depending on the relationship between a and b.

Types of Limacons

1. Inner Loop

If:

  |a| < |b|

the graph has an inner loop.

Example:

  r = 1 + 2 · cos θ

2. Cardioid

If:

  |a| = |b|

the graph becomes a cardioid.

Example:

  r = 2 + 2 · cos θ

3. Dimpled Limacon

If:

  |b| < |a| < 2|b|

the graph has a dimple.

4. Convex Limacon

If:

  |a| ≥ 2|b|

the graph becomes more rounded.

F. Lemniscates

A lemniscate looks like a figure-eight or an infinity symbol.

Common forms include:

  r² = a² · cos(2θ)

or:

  r² = a² · sin(2θ)

Example

  r² = 4 · cos(2θ)

This creates two loops.

The shape looks similar to:

  ∞

The loops appear because the value of the trigonometric expression changes between positive and negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MAKING A TABLE OF VALUES

One way to graph a polar equation manually is by creating a table.

Suppose:

  r = 2 · cos θ

  θ       r
  ──────────────────
  0       2
  π/6     √3
  π/4     √2
  π/3     1
  π/2     0
  π       -2

When r becomes negative, remember that the point is plotted in the opposite direction.

This is very important when sketching polar graphs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SYMMETRY IN POLAR GRAPHS

Checking symmetry can make graphing much easier.

There are three common types of symmetry.

A. Symmetry About the Polar Axis

The polar axis is the positive x-axis.

To test symmetry, replace:

  θ

with:

  -θ

If the equation remains unchanged, the graph is symmetric about the polar axis.

Example

  r = 2 · cos θ

Replace θ with -θ:

  r = 2 · cos(-θ)

Since:

  cos(-θ) = cos θ

we get:

  r = 2 · cos θ

Therefore, the graph is symmetric about the polar axis.

B. Symmetry About the Line θ = π/2

To test symmetry, replace:

  θ

with:

  π - θ

If the equation remains unchanged, the graph is symmetric about the vertical axis.

Example:

  r = 2 · sin θ

Since:

  sin(π - θ) = sin θ

the graph is symmetric about:

  θ = π/2

C. Symmetry About the Pole

To test symmetry about the pole, replace:

  r

with:

  -r

or replace:

  θ

with:

  θ + π

If the equation remains unchanged, the graph is symmetric about the pole.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT POINTS WHEN GRAPHING

When sketching a polar equation, look for the following.

Where is r = 0?

When:

  r = 0

the graph passes through the pole.

For example:

  r = 1 + cos θ

Set:

  1 + cos θ = 0

Therefore:

  cos θ = -1

So:

  θ = π

At this angle:

  r = 0

Therefore, the graph passes through the pole.

Where is r Maximum?

The maximum value of r tells you how far the graph extends from the pole.

For example:

  r = 3 + 2 · cos θ

Since:

  -1 ≤ cos θ ≤ 1

the maximum occurs when:

  cos θ = 1

Therefore:

  r = 3 + 2(1) = 5

The graph extends a maximum of 5 units from the pole.

Where is r Negative?

Negative values of r are important because they can create:

  loops,
  petals,
  additional branches.

For example:

  r = 1 + 2 · cos θ

Since the cosine can be negative, r can sometimes become negative. This produces the inner loop of the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP-BY-STEP STRATEGY FOR GRAPHING POLAR EQUATIONS

When given:

  r = f(θ)

follow these steps:

Step 1: Identify the type of equation

Ask:

  Is it a circle?
  Spiral?
  Rose?
  Cardioid?
  Limacon?
  Lemniscate?

Step 2: Check symmetry

Test for symmetry about:

  the polar axis,
  the vertical axis,
  the pole.

Step 3: Find important angles

Usually check:

  0, π/6, π/4, π/3, π/2

and also:

  π, 3π/2, 2π

Step 4: Find where r = 0

Solve:

  f(θ) = 0

This tells you where the graph passes through the pole.

Step 5: Find maximum and minimum values

Determine the largest and smallest values of r.

Step 6: Check for negative r

Negative values can create parts of the graph on the opposite side of the pole.

Step 7: Sketch the curve

Plot important points and connect them smoothly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: GRAPHING A ROSE CURVE

Graph:

  r = 2 · sin(3θ)

Step 1: Identify the type

This has the form:

  r = a · sin(nθ)

Therefore, it is a rose curve.

Step 2: Find the number of petals

Since:

  n = 3

and 3 is odd:

  3 petals

Step 3: Find maximum radius

Since:

  -1 ≤ sin(3θ) ≤ 1

we have:

  -2 ≤ r ≤ 2

The petals extend 2 units from the pole.

Step 4: Find where r = 0

  2 · sin(3θ) = 0
  sin(3θ) = 0

Therefore:

  3θ = nπ
  θ = nπ/3

These angles show where the graph passes through the pole.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY POLAR GRAPHS ARE IMPORTANT IN CALCULUS

Polar graphs are important because many curves are difficult to describe using ordinary Cartesian equations.

For example:

Circle

Cartesian:

  x² + y² = 9

Polar:

  r = 3

Spiral

Cartesian equations for spirals can be complicated.

Polar:

  r = θ

is very simple.

Polar graphs are especially useful in Calculus for studying:

  area enclosed by polar curves,
  area between polar curves,
  arc length,
  tangent lines,
  slopes of polar curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SUMMARY OF COMMON POLAR GRAPHS

  Equation Form                    Graph
  ──────────────────────────────────────────────────────────
  r = a                            Circle
  r = aθ                           Spiral
  r = a · cos(nθ)                  Rose Curve
  r = a · sin(nθ)                  Rose Curve
  r = a ± a · cos θ                Cardioid
  r = a ± a · sin θ                Cardioid
  r = a + b · cos θ                Limacon
  r = a + b · sin θ                Limacon
  r² = a² · cos(2θ)                Lemniscate
  r² = a² · sin(2θ)                Lemniscate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. KEY FORMULAS TO REMEMBER

  Polar graph: r = f(θ)

  Negative radius: (-r, θ) = (r, θ + π)

  Symmetry about polar axis: r(-θ) = r(θ)
  Symmetry about θ = π/2: r(π - θ) = r(θ)
  Symmetry about pole: r(θ + π) = r(θ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SIMPLE SUMMARY

A graph of a polar equation shows how the distance r changes as the angle θ changes.

The general form is:

  r = f(θ)

To graph it:

  Choose angles.
  Calculate r.
  Plot the polar points.
  Watch for r = 0.
  Watch for negative values of r.
  Use symmetry to simplify the graph.

The most important thing to remember is:

  In Cartesian graphs, we study how y changes as x changes.

  In polar graphs, we study how the distance r changes as the angle θ changes.

This makes polar coordinates especially powerful for graphing circles, spirals, roses, cardioids, limacons, and other rotationally symmetric curves.

Easy way to remember: Polar graphs are like drawing with a compass—turn to an angle, move out a distance, and connect the dots. Watch for r = 0 (passes through origin) and negative r (goes the opposite way).
  `,
  examples: [
    "r = 4 → circle of radius 4 centered at pole",
    "r = θ → Archimedean spiral",
    "r = 3 cos(3θ) → rose curve with 3 petals",
    "r = 3 cos(2θ) → rose curve with 4 petals",
    "r = 2 + 2 cos θ → cardioid",
    "r = 1 + 2 cos θ → limacon with inner loop",
    "r² = 4 cos(2θ) → lemniscate (figure-eight)",
    "r = 2 cos θ → circle through the pole",
    "Graphing strategy: identify type, check symmetry, find r = 0, find max r, sketch",
  ],
};

export default topic;