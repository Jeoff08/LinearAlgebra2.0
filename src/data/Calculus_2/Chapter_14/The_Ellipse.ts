// filename: TheEllipse.ts

const topic = {
  id: "the-ellipse",
  title: "The Ellipse",
  summary:
    "A comprehensive guide to ellipses as conic sections. Covers the geometric definition, standard equations, key parts (center, vertices, co-vertices, foci, major/minor axes), eccentricity, and real-world applications.",
  details: `
An ellipse is one of the four major conic sections. It is a closed, oval-shaped curve that can be defined as the set of all points in a plane for which the sum of the distances from two fixed points is constant.

These two fixed points are called the foci (singular: focus).

Ellipses are important in:

  Analytic geometry
  Calculus
  Astronomy
  Physics
  Engineering
  Architecture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF AN ELLIPSE

Suppose there are two fixed points:

  F₁ and F₂

These are the foci of the ellipse.

A point P belongs to the ellipse if:

  PF₁ + PF₂ = constant

In simple terms:

  No matter where a point P moves along the ellipse, the total distance from P to the two foci always remains the same.

This is the most important defining property of an ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SHAPE OF AN ELLIPSE

An ellipse looks like a stretched circle or an oval.

A circle is actually a special case of an ellipse.

If the two foci move closer and closer together, the ellipse becomes more circular.

If the foci are farther apart, the ellipse becomes more elongated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. IMPORTANT PARTS OF AN ELLIPSE

The main parts of an ellipse are:

  Center
  Major axis
  Minor axis
  Vertices
  Co-vertices
  Foci
  Semi-major axis
  Semi-minor axis
  Eccentricity

Let's discuss each one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CENTER

The center is the midpoint of the ellipse.

It is also the midpoint between:

  The two vertices
  The two co-vertices
  The two foci

For a standard ellipse:

  (h, k)

is the center.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MAJOR AXIS

The major axis is the longest diameter of the ellipse.

It passes through:

  The center
  Both foci
  The two vertices

The length of the major axis is:

  2a

where a is called the semi-major axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MINOR AXIS

The minor axis is the shortest diameter of the ellipse.

It passes through the center and is perpendicular to the major axis.

The length of the minor axis is:

  2b

where b is the semi-minor axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VERTICES

The vertices are the endpoints of the major axis.

If the ellipse is horizontal:

  (h - a, k)

and:

  (h + a, k)

If the ellipse is vertical:

  (h, k - a)

and:

  (h, k + a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CO-VERTICES

The co-vertices are the endpoints of the minor axis.

For a horizontal ellipse:

  (h, k - b)

and:

  (h, k + b)

For a vertical ellipse:

  (h - b, k)

and:

  (h + b, k)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE FOCI

The foci are two fixed points located inside the ellipse.

They always lie along the major axis.

The distance from the center to each focus is represented by:

  c

The relationship between a, b, and c is:

  c² = a² - b²

Therefore:

  c = √(a² - b²)

Since:

  a > b

we always have:

  c < a

This means the foci are always inside the ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HORIZONTAL ELLIPSE

The standard equation of a horizontal ellipse is:

  (x - h)²/a² + (y - k)²/b² = 1

where:

  a > b

The larger denominator is under the x-term, meaning the major axis is horizontal.

Important Properties

Center:
  (h, k)

Vertices:
  (h - a, k)

and:

  (h + a, k)

Co-vertices:
  (h, k - b)

and:

  (h, k + b)

Foci:
  (h - c, k)

and:

  (h + c, k)

where:

  c² = a² - b²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VERTICAL ELLIPSE

The standard equation is:

  (x - h)²/b² + (y - k)²/a² = 1

where:

  a > b

The larger denominator is under the y-term, meaning the major axis is vertical.

Important Properties

Center:
  (h, k)

Vertices:
  (h, k - a)

and:

  (h, k + a)

Co-vertices:
  (h - b, k)

and:

  (h + b, k)

Foci:
  (h, k - c)

and:

  (h, k + c)

where:

  c² = a² - b²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HOW TO IDENTIFY THE DIRECTION OF AN ELLIPSE

Consider:

  x²/25 + y²/9 = 1

The largest denominator is:

  25

and it is under x².

Therefore, the major axis is horizontal.

Now consider:

  x²/9 + y²/25 = 1

The largest denominator is:

  25

and it is under y².

Therefore, the major axis is vertical.

Easy Rule:

  The variable under the larger denominator determines the direction of the major axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: FINDING THE PARTS OF AN ELLIPSE

Given:

  x²/25 + y²/9 = 1

Step 1: Identify the center

Since there are no shifts:

  (0, 0)

Step 2: Identify a and b

  a² = 25
  b² = 9

Therefore:

  a = 5
  b = 3

Step 3: Find c

Use:

  c² = a² - b²
  c² = 25 - 9
  c² = 16
  c = 4

Step 4: Find the vertices

Because the major axis is horizontal:

  (-5, 0)

and:

  (5, 0)

Step 5: Find the co-vertices

  (0, -3)

and:

  (0, 3)

Step 6: Find the foci

  (-4, 0)

and:

  (4, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GRAPH OF AN ELLIPSE

For the equation:

  x²/25 + y²/9 = 1

the ellipse has:

  Center: (0, 0)
  Horizontal major axis
  Major axis length: 2a = 10
  Minor axis length: 2b = 6
  Vertices: (-5, 0) and (5, 0)
  Co-vertices: (0, -3) and (0, 3)
  Foci: (-4, 0) and (4, 0)

The graph is a closed oval centered at the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ECCENTRICITY OF AN ELLIPSE

The eccentricity measures how stretched or circular an ellipse is.

The formula is:

  e = c/a

For an ellipse:

  0 < e < 1

Example

Using:

  a = 5

and:

  c = 4

we get:

  e = 4/5 = 0.8

This tells us how elongated the ellipse is.

Interpretation:

  e close to 0 → more circular
  e close to 1 → more stretched

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ELLIPSE VS. CIRCLE

A circle can be considered a special type of ellipse.

For a circle:

  a = b

Therefore:

  c² = a² - b² = 0
  c = 0

The two foci coincide at the center.

Thus:

  e = 0

This gives us:

  Shape       Eccentricity
  ──────────────────────────
  Circle      e = 0
  Ellipse     0 < e < 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. REFLECTION PROPERTY OF AN ELLIPSE

One fascinating property of an ellipse is its reflection property.

If a signal starts from one focus:

  F₁

and reflects from the inside of the ellipse, it will pass through the other focus:

  F₂

This property is useful in:

  Acoustics
  Optical systems
  Medicine
  Architecture

For example, elliptical rooms can sometimes allow sound produced near one focus to be heard clearly near the other focus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ELLIPSES IN REAL LIFE

Ellipses appear in many areas of science and everyday life.

A. Planetary Orbits

Planets move in approximately elliptical orbits around the Sun, with the Sun located at one focus.

B. Architecture

Elliptical shapes are used in:

  Domes
  Arches
  Buildings

C. Whispering Galleries

Some elliptical structures have special sound properties because of the reflection property.

D. Engineering

Elliptical gears and components can be used in mechanical systems.

E. Medicine

Some medical devices and imaging systems use elliptical reflection principles.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. KEY FORMULAS TO REMEMBER

Horizontal Ellipse:

  (x - h)²/a² + (y - k)²/b² = 1, a > b
  Center: (h, k)
  Vertices: (h ± a, k)
  Co-vertices: (h, k ± b)
  Foci: (h ± c, k)

Vertical Ellipse:

  (x - h)²/b² + (y - k)²/a² = 1, a > b
  Center: (h, k)
  Vertices: (h, k ± a)
  Co-vertices: (h ± b, k)
  Foci: (h, k ± c)

Relationships:

  c² = a² - b²
  e = c/a
  0 < e < 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. SIMPLE SUMMARY

An ellipse is a closed curve where the sum of the distances from any point on the curve to two fixed points (foci) is constant.

The most important relationship is:

  c² = a² - b²

The standard equation tells us the ellipse's:

  Center
  Direction
  Major axis
  Minor axis
  Vertices
  Co-vertices
  Foci

The eccentricity:

  e = c/a

tells us how stretched the ellipse is. For every ellipse:

  0 < e < 1

Understanding these properties makes it much easier to graph and analyze ellipses in analytic geometry and calculus.

Easy way to remember: Ellipse is an oval where the sum of distances to two foci is constant. The major axis is the longer one (2a), minor axis is the shorter one (2b). The foci are inside, and c² = a² - b².
  `,
  examples: [
    "x²/25 + y²/9 = 1 → center (0,0), a=5, b=3, c=4, vertices (±5,0), co-vertices (0,±3), foci (±4,0)",
    "x²/9 + y²/25 = 1 → center (0,0), a=5, b=3, c=4, vertices (0,±5), co-vertices (±3,0), foci (0,±4)",
    "c² = a² - b²",
    "e = c/a, 0 < e < 1",
    "Circle is special case with a = b, c = 0, e = 0",
    "Planetary orbits are ellipses with Sun at one focus",
    "Whispering galleries use elliptical reflection property",
  ],
};

export default topic;