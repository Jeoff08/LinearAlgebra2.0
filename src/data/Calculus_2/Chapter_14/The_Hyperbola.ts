// filename: TheHyperbola.ts

const topic = {
  id: "the-hyperbola",
  title: "The Hyperbola",
  summary:
    "A comprehensive guide to hyperbolas as conic sections. Covers the geometric definition, standard equations, key parts (center, vertices, foci, asymptotes, transverse/conjugate axes), eccentricity, and real-world applications.",
  details: `
A hyperbola is one of the four major conic sections. It is a curve consisting of two separate branches that extend infinitely in opposite directions.

A hyperbola is defined as the set of all points for which the absolute difference of the distances from two fixed points is constant. These fixed points are called the foci.

Hyperbolas are important in:

  Analytic geometry
  Calculus
  Physics
  Astronomy
  Engineering
  Navigation and GPS systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF A HYPERBOLA

Suppose we have two fixed points:

  F₁ and F₂

called the foci.

A point P belongs to the hyperbola if:

  |PF₁ - PF₂| = constant

This means that no matter where P is located on the hyperbola, the absolute difference between its distances to the two foci remains constant.

This is the main defining property of a hyperbola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SHAPE OF A HYPERBOLA

Unlike a circle or ellipse, a hyperbola has two separate curves, called branches.

The branches may open:

  Left and right
  Up and down

The branches move farther apart but approach certain straight lines called asymptotes.

A hyperbola extends infinitely and is not a closed curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. IMPORTANT PARTS OF A HYPERBOLA

The major parts are:

  Center
  Vertices
  Foci
  Transverse axis
  Conjugate axis
  Asymptotes
  Latus rectum
  Eccentricity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE CENTER

The center is the midpoint between the two branches.

It is also the midpoint between:

  The two vertices
  The two foci

For a hyperbola in standard form, the center is:

  (h, k)

The center is an important point of symmetry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE TRANSVERSE AXIS

The transverse axis is the axis that passes through:

  The center
  The vertices
  The foci

It indicates the direction in which the hyperbola opens.

The length of the transverse axis is:

  2a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE CONJUGATE AXIS

The conjugate axis is perpendicular to the transverse axis.

Its length is:

  2b

Unlike the transverse axis, the conjugate axis does not pass through the branches of the hyperbola.

However, it is very important for finding the asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE VERTICES

The vertices are the points on the hyperbola closest to the center.

They lie along the transverse axis.

The distance from the center to each vertex is:

  a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE FOCI

The foci are fixed points located farther from the center than the vertices.

The distance from the center to each focus is:

  c

For a hyperbola:

  c² = a² + b²

Notice the important difference:

  Ellipse:    c² = a² - b²
  Hyperbola:  c² = a² + b²

Therefore:

  c > a

This means the foci are located outside the vertices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. HORIZONTAL HYPERBOLA

A horizontal hyperbola has the standard equation:

  (x - h)²/a² - (y - k)²/b² = 1

The hyperbola opens:

  Left and Right

Important Parts

Center:
  (h, k)

Vertices:
  (h - a, k)

and:

  (h + a, k)

Foci:
  (h - c, k)

and:

  (h + c, k)

where:

  c² = a² + b²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VERTICAL HYPERBOLA

A vertical hyperbola has the equation:

  (y - k)²/a² - (x - h)²/b² = 1

The hyperbola opens:

  Up and Down

Important Parts

Center:
  (h, k)

Vertices:
  (h, k - a)

and:

  (h, k + a)

Foci:
  (h, k - c)

and:

  (h, k + c)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW TO IDENTIFY THE DIRECTION

Look at the term that is positive.

Example:

  x²/9 - y²/4 = 1

The x² term is positive.

Therefore, the hyperbola opens:

  Left and Right

Example:

  y²/16 - x²/9 = 1

The y² term is positive.

Therefore, the hyperbola opens:

  Up and Down

Easy Rule:

  The variable with the positive term tells you the direction in which the hyperbola opens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ASYMPTOTES

One of the most important properties of a hyperbola is its asymptotes.

Asymptotes are straight lines that the branches of the hyperbola approach as they extend infinitely.

The branches get closer and closer to the asymptotes but do not intersect them.

Horizontal Hyperbola Asymptotes

For:

  (x - h)²/a² - (y - k)²/b² = 1

the asymptotes are:

  y - k = ±(b/a)(x - h)

Vertical Hyperbola Asymptotes

For:

  (y - k)²/a² - (x - h)²/b² = 1

the asymptotes are:

  y - k = ±(a/b)(x - h)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: HORIZONTAL HYPERBOLA

Consider:

  x²/16 - y²/9 = 1

Step 1: Identify the center

Since there are no shifts:

  (0, 0)

Step 2: Find a and b

  a² = 16
  a = 4
  b² = 9
  b = 3

Step 3: Find c

Use:

  c² = a² + b²
  c² = 16 + 9
  c = 5

Step 4: Find the vertices

Because the hyperbola is horizontal:

  (-4, 0)

and:

  (4, 0)

Step 5: Find the foci

  (-5, 0)

and:

  (5, 0)

Step 6: Find the asymptotes

Use:

  y = ±(b/a)x
  y = ±(3/4)x

Therefore:

  y = (3/4)x

and:

  y = -(3/4)x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GRAPH OF A HYPERBOLA

For:

  x²/16 - y²/9 = 1

the graph has:

  Center: (0, 0)
  Opens left and right
  Vertices: (-4, 0), (4, 0)
  Foci: (-5, 0), (5, 0)
  Asymptotes: y = ±(3/4)x

The asymptotes form a guide for sketching the two branches.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE RECTANGLE METHOD

A useful method for graphing a hyperbola is the rectangle method.

For a horizontal hyperbola centered at:

  (h, k)

we use:

  a units left and right
  b units up and down

This forms a rectangle centered at (h, k).

The diagonals of this rectangle form the asymptotes.

The hyperbola branches pass through the vertices and approach the diagonals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ECCENTRICITY OF A HYPERBOLA

The eccentricity of a hyperbola is:

  e = c/a

Since:

  c > a

we always have:

  e > 1

Example

Using:

  c = 5

and:

  a = 4

we get:

  e = 5/4 = 1.25

Since:

  e > 1

the conic is confirmed to be a hyperbola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE DIFFERENCE OF DISTANCES PROPERTY

For a hyperbola:

  |PF₁ - PF₂| = 2a

This is an important property.

The absolute difference between the distances from any point P on the hyperbola to the two foci is always equal to:

  2a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LATUS RECTUM

The latus rectum is a line segment that:

  Passes through a focus
  Is perpendicular to the transverse axis
  Has endpoints on the hyperbola

For a hyperbola, the length of the latus rectum is:

  2b²/a

This is useful in more advanced studies of conic sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. REFLECTION PROPERTY

Hyperbolas also have an important reflection property.

A ray directed toward one focus reflects from the hyperbola in a direction related to the other focus.

This property has applications in:

  Optics
  Radio systems
  Astronomy
  Signal processing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. REAL-LIFE APPLICATIONS OF HYPERBOLAS

A. Navigation and Positioning

Hyperbolas can be used to determine location based on differences in signal arrival times.

B. Astronomy

Some celestial objects follow hyperbolic trajectories when they pass through a gravitational system without becoming permanently bound.

C. Engineering

Hyperbolic shapes are used in certain cooling towers and structural designs.

D. Optics

Hyperbolic mirrors are used in telescopes and optical instruments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. HYPERBOLA VS. ELLIPSE

These two conics have important similarities and differences.

  Property          Ellipse                    Hyperbola
  ──────────────────────────────────────────────────────────────────────────
  Shape             Closed oval                Two separate branches
  Foci              Inside curve               Beyond vertices
  Distance property Sum is constant            Difference is constant
  Relationship      c² = a² - b²               c² = a² + b²
  Eccentricity      0 < e < 1                  e > 1
  Asymptotes        None                       Yes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER

Horizontal Hyperbola:

  (x - h)²/a² - (y - k)²/b² = 1
  Center: (h, k)
  Vertices: (h ± a, k)
  Foci: (h ± c, k)
  Asymptotes: y - k = ±(b/a)(x - h)

Vertical Hyperbola:

  (y - k)²/a² - (x - h)²/b² = 1
  Center: (h, k)
  Vertices: (h, k ± a)
  Foci: (h, k ± c)
  Asymptotes: y - k = ±(a/b)(x - h)

Relationships:

  c² = a² + b²
  e = c/a
  e > 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY

A hyperbola is a conic section consisting of two separate branches. It is defined by the property that the absolute difference of the distances from any point on the curve to the two foci is constant.

The most important relationship is:

  c² = a² + b²

The standard forms are:

Horizontal:
  (x - h)²/a² - (y - k)²/b² = 1

Vertical:
  (y - k)²/a² - (x - h)²/b² = 1

A hyperbola can be recognized by its:

  Two separate branches
  Two foci
  Vertices
  Asymptotes
  Eccentricity greater than 1

Understanding these properties makes it easier to graph, analyze, and solve problems involving hyperbolas.

Easy way to remember: Hyperbola has two branches, opens either horizontally or vertically. The positive term determines the direction. c² = a² + b² (unlike ellipse where it's c² = a² - b²). Asymptotes are key features.
  `,
  examples: [
    "x²/16 - y²/9 = 1 → center (0,0), a=4, b=3, c=5, vertices (±4,0), foci (±5,0), asymptotes y = ±(3/4)x",
    "y²/16 - x²/9 = 1 → center (0,0), a=4, b=3, c=5, vertices (0,±4), foci (0,±5), asymptotes y = ±(4/3)x",
    "c² = a² + b²",
    "e = c/a, e > 1",
    "Ellipse: c² = a² - b², Hyperbola: c² = a² + b²",
    "|PF₁ - PF₂| = 2a",
    "Navigation systems use hyperbolas for positioning",
  ],
};

export default topic;