// filename: CartesianEquationsOfTheConics.ts

const topic = {
  id: "cartesian-equations-of-the-conics",
  title: "Cartesian Equations of the Conics",
  summary:
    "A comprehensive guide to conic sections in Cartesian coordinates. Covers the standard equations of circles, parabolas, ellipses, and hyperbolas, along with identification techniques and key properties.",
  details: `
Cartesian equations of conics describe conic sections using the rectangular coordinate system with coordinates:

  (x, y)

Unlike polar equations, which use (r, θ), Cartesian equations use the familiar horizontal x-axis and vertical y-axis.

The four main conic sections are:

  Circle
  Parabola
  Ellipse
  Hyperbola

Each conic has characteristic Cartesian equations that help us identify its shape, position, size, and orientation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CARTESIAN COORDINATE SYSTEM?

The Cartesian coordinate system consists of:

  A horizontal x-axis
  A vertical y-axis
  An origin at: (0, 0)

Every point is represented as:

  (x, y)

For example:

  (3, 2)

means:

  Move 3 units along the x-axis.
  Move 2 units along the y-axis.

Cartesian equations express relationships between x and y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL CARTESIAN EQUATION OF A CONIC

The general second-degree equation is:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

where:

  A, B, C, D, E, F

are constants.

Different combinations of these coefficients can represent different conic sections.

For example:

  Only one variable squared → usually a parabola
  Both variables squared with the same sign → circle or ellipse
  Both variables squared with opposite signs → hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CARTESIAN EQUATION OF A CIRCLE

A circle consists of all points that are the same distance from a fixed point called the center.

Standard Form

  (x - h)² + (y - k)² = r²

where:

  (h, k) = center
  r = radius

Example

  (x - 2)² + (y + 3)² = 25

The center is:

  (2, -3)

The radius is:

  r = √25 = 5

General Form of a Circle

Expanding the standard equation gives:

  x² + y² + Dx + Ey + F = 0

Notice that:

  x² and y² have equal coefficients.
  Both squared terms have the same sign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CARTESIAN EQUATION OF A PARABOLA

A parabola is the set of all points equally distant from a:

  Focus
  Directrix

There are two main orientations.

A. Vertical Parabola

  (x - h)² = 4p(y - k)

The vertex is:

  (h, k)

If:

  p > 0

the parabola opens upward.

If:

  p < 0

the parabola opens downward.

Example

  (x - 1)² = 8(y + 2)

Compare with:

  (x - h)² = 4p(y - k)

We get:

  h = 1
  k = -2

and:

  4p = 8

so:

  p = 2

Therefore:

  Vertex: (1, -2)
  Opens upward

B. Horizontal Parabola

  (y - k)² = 4p(x - h)

If:

  p > 0

the parabola opens right.

If:

  p < 0

the parabola opens left.

Example

  (y + 1)² = -12(x - 3)

The vertex is:

  (3, -1)

Since:

  4p = -12
  p = -3

The parabola opens to the left.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CARTESIAN EQUATION OF AN ELLIPSE

An ellipse is the set of points for which the sum of the distances to two fixed points, called the foci, is constant.

Horizontal Ellipse

  (x - h)²/a² + (y - k)²/b² = 1

where:

  a > b

The major axis is horizontal.

Vertical Ellipse

  (x - h)²/b² + (y - k)²/a² = 1

where:

  a > b

The major axis is vertical.

Important Relationship

For an ellipse:

  c² = a² - b²

where:

  a = semi-major axis
  b = semi-minor axis
  c = distance from center to each focus

Example

  x²/25 + y²/9 = 1

Since:

  25 > 9

the major axis is horizontal.

Therefore:

  a = 5
  b = 3

Find c:

  c² = 25 - 9
  c² = 16
  c = 4

The foci are:

  (-4, 0)

and:

  (4, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CARTESIAN EQUATION OF A HYPERBOLA

A hyperbola consists of two separate curves called branches.

The absolute difference between the distances from any point on the hyperbola to the two foci is constant.

Horizontal Hyperbola

  (x - h)²/a² - (y - k)²/b² = 1

The hyperbola opens:

  Left
  Right

Vertical Hyperbola

  (y - k)²/a² - (x - h)²/b² = 1

The hyperbola opens:

  Up
  Down

Important Relationship

For a hyperbola:

  c² = a² + b²

Example

  x²/16 - y²/9 = 1

Therefore:

  a = 4
  b = 3

Find c:

  c² = 16 + 9
  c = 5

The foci are:

  (-5, 0)

and:

  (5, 0)

The hyperbola opens left and right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. HOW TO IDENTIFY CONICS FROM CARTESIAN EQUATIONS

One of the most useful skills is identifying a conic just by looking at its equation.

A. Parabola

Only one variable is squared.

Example:

  x² = 4y

or:

  y² = 8x

Result:

  Parabola

B. Circle

Both x and y are squared with:

  The same coefficient
  The same sign

Example:

  x² + y² = 25

Result:

  Circle

C. Ellipse

Both variables are squared with:

  The same sign
  Different coefficients

Example:

  x²/9 + y²/4 = 1

Result:

  Ellipse

D. Hyperbola

Both variables are squared with:

  Opposite signs

Example:

  x²/9 - y²/4 = 1

Result:

  Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPARISON OF STANDARD CARTESIAN EQUATIONS

  Conic       Standard Equation
  ──────────────────────────────────────────────────────────────
  Circle      (x - h)² + (y - k)² = r²
  Parabola    (x - h)² = 4p(y - k) or (y - k)² = 4p(x - h)
  Ellipse     (x - h)²/a² + (y - k)²/b² = 1
  Hyperbola   (x - h)²/a² - (y - k)²/b² = 1

These equations are called standard forms because they make the important properties of the conic easy to identify.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL EQUATION VS. STANDARD EQUATION

General Equation:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

This equation may look complicated.

Example:

  x² + y² - 4x + 6y - 12 = 0

It is not immediately obvious what the center or radius is.

Standard Equation

By completing the square, we can transform it.

Start with:

  x² + y² - 4x + 6y - 12 = 0

Group terms:

  x² - 4x + y² + 6y = 12

Complete the square:

  (x - 2)² - 4 + (y + 3)² - 9 = 12

Move constants:

  (x - 2)² + (y + 3)² = 25

Now we can easily identify:

  Center: (2, -3)
  Radius: 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TRANSLATION IN CARTESIAN EQUATIONS

Cartesian equations can be translated by shifting the coordinate system.

Suppose the origin moves to:

  (h, k)

Using new coordinates:

  (X, Y)

we use:

  x = X + h
  y = Y + k

Translation is useful because it can simplify equations.

For example:

  (x - 2)² + (y + 3)² = 25

If the origin is translated to:

  (2, -3)

the equation becomes:

  X² + Y² = 25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ROTATION OF CARTESIAN AXES

Sometimes a conic contains the term:

  Bxy

For example:

  3x² + 4xy + 3y² = 1

The xy term often indicates that the conic is rotated relative to the usual x- and y-axes.

To simplify the equation, we may rotate the axes.

The rotation formulas are:

  x = X · cos θ - Y · sin θ
  y = X · sin θ + Y · cos θ

This transformation can eliminate the xy term for suitable choices of θ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DISCRIMINANT TEST FOR CARTESIAN CONICS

For the general equation:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

we can examine:

  B² - 4AC

For a nondegenerate conic:

If:

  B² - 4AC < 0

The conic is ellipse-type.

This includes circles as a special case.

If:

  B² - 4AC = 0

The conic is parabola-type.

If:

  B² - 4AC > 0

The conic is hyperbola-type.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CARTESIAN COORDINATES AND GRAPHING

Cartesian equations make graphing easier because points can be represented directly as:

  (x, y)

For example:

  y = x²

is a parabola.

For each value of x, we calculate a corresponding value of y.

The points can then be plotted on the Cartesian plane to form the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT PROPERTIES TO FIND

When analyzing a Cartesian equation of a conic, we often need to find:

Circle:
  Center
  Radius

Parabola:
  Vertex
  Focus
  Directrix
  Axis of symmetry
  Direction of opening

Ellipse:
  Center
  Major axis
  Minor axis
  Vertices
  Co-vertices
  Foci

Hyperbola:
  Center
  Vertices
  Foci
  Asymptotes
  Direction of opening

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: IDENTIFYING DIFFERENT CONICS

Equation 1:

  x² + y² = 36

Both squared terms have the same coefficient and sign.

  Circle

Equation 2:

  y² = 12x

Only one variable is squared.

  Parabola

Equation 3:

  x²/16 + y²/9 = 1

Both squared terms have the same sign but different denominators.

  Ellipse

Equation 4:

  x²/25 - y²/4 = 1

The squared terms have opposite signs.

  Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. CARTESIAN VS. POLAR EQUATIONS OF CONICS

  Feature         Cartesian                  Polar
  ──────────────────────────────────────────────────────────────────────────
  Coordinates     (x, y)                     (r, θ)
  Main variables  x, y                       r, θ
  Focus placement Anywhere                   Often at the pole
  Common use      Graphing and algebra       Focus-directrix problems
  Standard form   Different for each conic   Unified using eccentricity

For polar coordinates:

  r = ed / (1 ± e · cos θ)

or:

  r = ed / (1 ± e · sin θ)

For Cartesian coordinates, each conic has its own standard equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER

  Circle:    (x - h)² + (y - k)² = r²
  Parabola:  (x - h)² = 4p(y - k) or (y - k)² = 4p(x - h)
  Ellipse:   (x - h)²/a² + (y - k)²/b² = 1
  Hyperbola: (x - h)²/a² - (y - k)²/b² = 1

  Ellipse:   c² = a² - b²
  Hyperbola: c² = a² + b²
  Discriminant: B² - 4AC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY

Cartesian equations of conics describe circles, parabolas, ellipses, and hyperbolas using the coordinate variables:

  (x, y)

The most important standard forms are:

  Circle:    (x - h)² + (y - k)² = r²
  Parabola:  (x - h)² = 4p(y - k) or (y - k)² = 4p(x - h)
  Ellipse:   (x - h)²/a² + (y - k)²/b² = 1
  Hyperbola: (x - h)²/a² - (y - k)²/b² = 1

By recognizing the patterns in these equations, you can quickly identify the type of conic and determine its important properties such as its center, vertex, focus, axes, radius, or asymptotes.

Easy way to remember: Circle has x² and y² with equal coefficients. Parabola has only one squared term. Ellipse has x² and y² with different positive coefficients. Hyperbola has x² and y² with opposite signs.
  `,
  examples: [
    "x² + y² = 36 → circle, center (0,0), radius 6",
    "y² = 12x → parabola, vertex (0,0), opens right",
    "x²/16 + y²/9 = 1 → ellipse, a=4, b=3, c=√7",
    "x²/25 - y²/4 = 1 → hyperbola, a=5, b=2, c=√29",
    "x² + y² - 4x + 6y - 12 = 0 → complete square → (x-2)² + (y+3)² = 25",
    "Discriminant test: B² - 4AC < 0 → ellipse, = 0 → parabola, > 0 → hyperbola",
  ],
};

export default topic;