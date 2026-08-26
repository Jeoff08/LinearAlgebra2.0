// filename: RotationOfAxes.ts

const topic = {
  id: "rotation-of-axes",
  title: "Rotation of Axes",
  summary:
    "A comprehensive guide to rotating coordinate axes in analytic geometry. Covers rotation formulas, eliminating the xy-term, finding the rotation angle, and applications to conic sections.",
  details: `
Rotation of axes is a coordinate transformation used in analytic geometry to simplify an equation or analyze a graph that is tilted or rotated relative to the usual x- and y-axes.

It is especially useful for conic sections such as:

  Parabolas
  Ellipses
  Hyperbolas

When a conic equation contains an xy-term, the graph is often rotated.

For example:

  3x² + 4xy + 3y² = 1

The term:

  4xy

suggests that the conic may be tilted. By rotating the coordinate axes, we can often eliminate the xy-term and obtain a simpler equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS ROTATION OF AXES?

Normally, the Cartesian coordinate system looks like this:

  x-axis → horizontal
  y-axis → vertical

Sometimes, instead of moving the graph, we rotate the coordinate axes.

We introduce new coordinates:

  (X, Y)

The new axes are rotated by an angle:

  θ

around the origin.

The origin stays in the same position, but the directions of the axes change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY ROTATE THE AXES?

Rotation of axes is mainly used to:

  Simplify complicated equations.
  Eliminate the xy-term.
  Put a conic equation into standard form.
  Determine the actual orientation of a tilted graph.
  Make it easier to identify whether an equation represents an ellipse, parabola, or hyperbola.

For example, this equation:

  3x² + 4xy + 3y² = 1

is harder to recognize immediately because of the xy-term.

After rotating the axes, it may become an equation involving only:

  X²

and:

  Y²

with no mixed term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ROTATION FORMULAS

Suppose the new axes are rotated counterclockwise by an angle θ.

The relationships between the old coordinates (x, y) and the new coordinates (X, Y) are:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

These are the main formulas used for rotating axes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. UNDERSTANDING THE ROTATION FORMULAS

Suppose a point has new coordinates:

  (X, Y)

After the axes rotate, the same physical point can have different coordinates in the original system:

  (x, y)

The formulas are:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

The important idea is:

  The point does not move. Only the coordinate axes rotate.

Therefore, the coordinates used to describe the point change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INVERSE ROTATION FORMULAS

Sometimes we need to convert from old coordinates (x, y) to new coordinates (X, Y).

The inverse formulas are:

  X = x · cos θ + y · sin θ
  Y = -x · sin θ + y · cos θ

These formulas undo the rotation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ROTATION MATRIX

Rotation can also be written using matrices.

The transformation is:

  [x]   [cos θ  -sin θ] [X]
  [y] = [sin θ   cos θ] [Y]

The matrix:

  [cos θ  -sin θ]
  [sin θ   cos θ]

is called a rotation matrix.

Rotation matrices are widely used in:

  Linear algebra
  Computer graphics
  Game development
  Robotics
  Engineering
  Physics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE xy-TERM

Consider the general second-degree equation:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

The term:

  Bxy

is called the mixed term or cross-product term.

When:

  B ≠ 0

the conic may be rotated.

By rotating the axes correctly, we can often eliminate this term.

The goal is to transform:

  Ax² + Bxy + Cy²

into:

  A'X² + C'Y²

with no XY-term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FINDING THE ANGLE OF ROTATION

To eliminate the xy-term from:

  Ax² + Bxy + Cy²

we use:

  tan(2θ) = B / (A - C)

This formula helps determine the angle θ required to rotate the axes.

Another equivalent way of writing it is:

  cot(2θ) = (A - C) / B

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: FINDING THE ROTATION ANGLE

Consider:

  3x² + 4xy + 3y² = 1

Identify:

  A = 3
  B = 4
  C = 3

Use:

  tan(2θ) = B / (A - C)

Substitute:

  tan(2θ) = 4 / (3 - 3)

The denominator is zero, so:

  tan(2θ) = ∞

This means:

  2θ = 90°

Therefore:

  θ = 45°

So rotating the axes by:

  45°

will eliminate the xy-term.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SPECIAL CASE: ROTATION BY 45°

When:

  θ = 45°

we know:

  cos 45° = √2/2

and:

  sin 45° = √2/2

Therefore:

  x = (X - Y)/√2
  y = (X + Y)/√2

These formulas are especially useful when the equation has similar coefficients for x² and y².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: SIMPLIFYING AN EQUATION

Consider:

  x² + 2xy + y² = 1

Notice that:

  x² + 2xy + y² = (x + y)²

However, let's use rotation.

Because:

  A = 1
  B = 2
  C = 1

we have:

  tan(2θ) = 2 / (1 - 1)

Therefore:

  2θ = 90°

and:

  θ = 45°

Use:

  x = (X - Y)/√2
  y = (X + Y)/√2

Substituting into the equation eventually gives:

  2X² = 1

or:

  X² = 1/2

The mixed xy-term has disappeared.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH A ROTATED ELLIPSE

Consider:

  5x² + 6xy + 5y² = 16

Because the equation contains:

  6xy

the ellipse is rotated.

Identify:

  A = 5
  B = 6
  C = 5

Use:

  tan(2θ) = 6 / (5 - 5)

Thus:

  2θ = 90°

So:

  θ = 45°

After rotating the axes, the equation becomes:

  8X² + 2Y² = 16

Divide by 16:

  X²/2 + Y²/8 = 1

Now we can clearly see that the graph is an ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ROTATION OF A POINT VS. ROTATION OF AXES

These two concepts are related but different.

Rotating a Point

The coordinate axes remain fixed, but the point moves.

For a counterclockwise rotation:

  x' = x · cos θ - y · sin θ
  y' = x · sin θ + y · cos θ

Rotating the Axes

The point stays in the same location, but the coordinate axes rotate.

The coordinate transformation is:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

Important:

  Rotating a point and rotating the coordinate axes are opposite viewpoints of a related transformation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GENERAL PROCESS FOR ROTATING AXES

When solving a rotated conic equation:

Step 1: Write the equation

Example:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

Step 2: Identify A, B, and C

For example:

  5x² + 6xy + 5y² = 16

we have:

  A = 5, B = 6, C = 5

Step 3: Find the rotation angle

Use:

  tan(2θ) = B / (A - C)

Step 4: Find θ

Solve for:

  2θ

Then divide by 2.

Step 5: Use the rotation formulas

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

Step 6: Substitute

Substitute the new expressions for x and y into the original equation.

Step 7: Simplify

After simplification, the XY-term should disappear.

Step 8: Identify the conic

The simplified equation may now be recognized as:

  Circle
  Parabola
  Ellipse
  Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: A ROTATED HYPERBOLA

Consider:

  x² - 4xy + y² = 1

Identify:

  A = 1
  B = -4
  C = 1

Use:

  tan(2θ) = -4 / (1 - 1)

Therefore:

  2θ = -90°

Thus:

  θ = -45°

After rotating the axes appropriately, the equation becomes an equation involving:

  X²

and:

  Y²

with opposite signs, revealing a hyperbola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY DOES ROTATION ELIMINATE THE xy-TERM?

The quadratic part:

  Ax² + Bxy + Cy²

represents a geometric shape whose natural axes may not align with the ordinary x- and y-axes.

The xy-term appears because we are viewing the conic using axes that are tilted relative to its natural orientation.

By rotating the axes to align with the conic's natural axes:

  XY-term disappears

This is similar to turning a tilted picture until it becomes straight.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ROTATION AND CONIC CLASSIFICATION

Consider:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

The discriminant:

  B² - 4AC

helps classify the conic.

  Condition                  Conic Type
  ──────────────────────────────────────
  B² - 4AC < 0               Ellipse-type
  B² - 4AC = 0               Parabola-type
  B² - 4AC > 0               Hyperbola-type

An important fact is that rotation does not change the type of conic.

  A rotated ellipse is still an ellipse.
  A rotated parabola is still a parabola.
  A rotated hyperbola is still a hyperbola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ROTATION COMBINED WITH TRANSLATION

Sometimes an equation needs both:

  Rotation
  Translation

For example:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

A typical process is:

First:

  Rotate the axes to eliminate the xy-term.

Then:

  Translate the axes to remove linear terms.

This can transform a complicated equation into a standard form.

For example, a complicated equation may eventually become:

  X²/a² + Y²/b² = 1

which clearly represents an ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. APPLICATIONS OF ROTATION OF AXES

Rotation of axes is useful beyond conic sections.

Computer Graphics

Used to rotate:

  Images
  Characters
  Objects
  Shapes

Game Development

Used to determine:

  Player direction
  Object orientation
  Camera rotation

Robotics

Robots use rotation matrices to describe:

  Arm movement
  Joint orientation
  Object position

Engineering

Rotation transformations are used in:

  Structural analysis
  Mechanical systems
  Coordinate transformations

Physics

Used to study motion from different coordinate orientations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO REMEMBER

Rotation of Axes:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

Inverse Formulas:

  X = x · cos θ + y · sin θ
  Y = -x · sin θ + y · cos θ

Angle for Eliminating the xy-Term:

  tan(2θ) = B / (A - C)

Conic Classification:

  B² - 4AC < 0 → Ellipse-type
  B² - 4AC = 0 → Parabola-type
  B² - 4AC > 0 → Hyperbola-type

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SIMPLE SUMMARY

Rotation of axes is a transformation where the coordinate axes are turned by an angle θ while the geometric object remains in the same position.

It is mainly used to simplify equations containing the mixed term:

  xy

The most important formulas are:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

To eliminate the xy-term, use:

  tan(2θ) = B / (A - C)

Rotation of axes allows complicated, tilted conic equations to be transformed into simpler standard forms, making it easier to identify, graph, and analyze conic sections.

Easy way to remember: Rotation changes the coordinates to align with the conic's natural axes, eliminating the xy-term. The angle is found from tan(2θ) = B/(A-C).
  `,
  examples: [
    "3x² + 4xy + 3y² = 1 → A=3, B=4, C=3 → tan(2θ) = 4/0 → θ = 45°",
    "5x² + 6xy + 5y² = 16 → θ = 45° → becomes 8X² + 2Y² = 16 → X²/2 + Y²/8 = 1 (ellipse)",
    "x² + 2xy + y² = 1 → θ = 45° → becomes 2X² = 1 (parabola)",
    "x² - 4xy + y² = 1 → θ = -45° → hyperbola",
    "Rotation formulas: x = X cos θ - Y sin θ, y = X sin θ + Y cos θ",
    "tan(2θ) = B/(A-C)",
    "B² - 4AC < 0 → ellipse, = 0 → parabola, > 0 → hyperbola",
  ],
};

export default topic;