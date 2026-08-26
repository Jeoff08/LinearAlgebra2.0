// filename: PropertiesOfConics.ts

const topic = {
  id: "properties-of-conics",
  title: "Properties of Conics",
  summary:
    "A comprehensive guide to the properties of conic sections: circles, parabolas, ellipses, and hyperbolas. Covers standard equations, key parts (center, vertices, foci, directrix, asymptotes), eccentricity, and classification.",
  details: `
Conics, or conic sections, are curves formed when a plane intersects a double cone at different angles. The main conic sections are:

  Circle
  Parabola
  Ellipse
  Hyperbola

Each conic has its own shape, equation, properties, and important geometric parts. Understanding the properties of conics helps us identify, graph, and analyze these curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE CONIC SECTIONS?

Imagine two cones joined at their tips, forming a double cone. When a flat plane cuts through this double cone, different curves can be produced depending on the angle of the cut.

The resulting curve may be:

  A circle
  An ellipse
  A parabola
  A hyperbola

These are collectively called conic sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE GENERAL EQUATION OF A CONIC

A general second-degree equation in two variables is:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

where:

  A, B, C, D, E, F

are constants.

Different values of these coefficients can produce different conic sections.

The term:

  Bxy

is called the cross-product term. When this term is present, the conic may be rotated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FOUR MAIN CONICS

  Conic       Basic Shape        Important Property
  ──────────────────────────────────────────────────────────────────────────
  Circle      Round              Equal distance from center
  Parabola    U-shaped           Equal distance from focus and directrix
  Ellipse     Oval               Sum of distances from two foci is constant
  Hyperbola   Two separate curves Difference of distances from two foci is constant

Let's discuss each one in detail.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. PROPERTIES OF A CIRCLE

A circle is the set of all points that are the same distance from a fixed point called the center.

Standard Equation

  (x - h)² + (y - k)² = r²

where:

  (h, k) = center
  r = radius

Important Properties

A. Center

The center is the fixed point in the middle of the circle.

Example:

  (x - 3)² + (y + 2)² = 16

Center:

  (3, -2)

B. Radius

The radius is the distance from the center to any point on the circle.

From:

  r² = 16

we get:

  r = 4

C. Symmetry

A circle is symmetric about:

  The horizontal line through its center
  The vertical line through its center
  Any diameter

This makes the circle highly symmetrical.

D. Eccentricity

The eccentricity of a circle is:

  e = 0

A circle is actually considered a special case of an ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PROPERTIES OF A PARABOLA

A parabola is the set of all points that are equally distant from:

  A fixed point called the focus
  A fixed line called the directrix

Standard Forms

Vertical Parabola:

  (x - h)² = 4p(y - k)

Horizontal Parabola:

  (y - k)² = 4p(x - h)

Important Properties

A. Vertex

The vertex is the turning point of the parabola:

  (h, k)

B. Focus

The focus is located inside the parabola.

For a vertical parabola:

  (h, k + p)

C. Directrix

For a vertical parabola:

  y = k - p

The directrix is a fixed line outside the parabola.

D. Axis of Symmetry

The axis passes through:

  The vertex
  The focus

For a vertical parabola:

  x = h

E. Eccentricity

For every parabola:

  e = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PROPERTIES OF AN ELLIPSE

An ellipse is the set of all points where the sum of the distances from two fixed points is constant.

The fixed points are called the foci.

Standard Equation

Horizontal Major Axis:

  (x - h)²/a² + (y - k)²/b² = 1

where:

  a > b

Important Properties

A. Center

The center is:

  (h, k)

B. Vertices

The vertices are the endpoints of the major axis.

For a horizontal ellipse:

  (h - a, k)

and

  (h + a, k)

C. Co-vertices

The co-vertices are the endpoints of the minor axis:

  (h, k - b)

and:

  (h, k + b)

D. Foci

The foci lie along the major axis.

The relationship is:

  c² = a² - b²

The foci for a horizontal ellipse are:

  (h - c, k)

and:

  (h + c, k)

E. Eccentricity

The eccentricity is:

  e = c/a

For an ellipse:

  0 < e < 1

A smaller eccentricity means the ellipse looks more like a circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PROPERTIES OF A HYPERBOLA

A hyperbola is the set of all points where the absolute difference between the distances from two fixed points is constant.

The fixed points are called the foci.

Standard Equation

Horizontal Hyperbola:

  (x - h)²/a² - (y - k)²/b² = 1

Vertical Hyperbola:

  (y - k)²/a² - (x - h)²/b² = 1

Important Properties

A. Center

The center is:

  (h, k)

B. Vertices

For a horizontal hyperbola:

  (h - a, k)

and:

  (h + a, k)

C. Foci

The relationship is:

  c² = a² + b²

The foci are:

  (h - c, k)

and:

  (h + c, k)

D. Asymptotes

Hyperbolas have lines called asymptotes.

The branches of the hyperbola get closer and closer to these lines but theoretically never meet them.

For a horizontal hyperbola:

  y - k = ±(b/a)(x - h)

E. Eccentricity

For a hyperbola:

  e > 1

Its eccentricity is:

  e = c/a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ECCENTRICITY OF CONICS

One of the most important properties of conic sections is eccentricity.

Eccentricity tells us how much a conic differs from being perfectly circular.

  Conic       Eccentricity
  ──────────────────────────
  Circle      e = 0
  Ellipse     0 < e < 1
  Parabola    e = 1
  Hyperbola   e > 1

This is one of the easiest ways to classify conic sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FOCUS AND DIRECTRIX PROPERTY

A more general definition of conics uses a focus and a directrix.

For any point P on a conic:

  e = (distance from P to focus) / (distance from P to directrix)

Depending on the value of eccentricity:

Circle:
  e = 0

Ellipse:
  0 < e < 1

The point is generally closer to the focus than to the directrix according to the conic definition.

Parabola:
  e = 1

Distance to focus = distance to directrix.

Hyperbola:
  e > 1

The focus-distance/directrix-distance ratio is greater than 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SYMMETRY OF CONICS

Conics often have important symmetry properties.

Circle

Symmetrical about:

  Horizontal axis through the center
  Vertical axis through the center
  Every diameter

Parabola

Symmetrical about its:

  Axis of symmetry

Ellipse

Symmetrical about:

  Major axis
  Minor axis

Hyperbola

Symmetrical about:

  Transverse axis
  Conjugate axis

The center is also a point of symmetry for ellipses and hyperbolas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. MAJOR PARTS OF CONICS

  Part        Circle    Parabola    Ellipse    Hyperbola
  ──────────────────────────────────────────────────────────────
  Center      Yes       No          Yes        Yes
  Vertex      No        Yes         Yes        Yes
  Focus/Foci  Special   One focus   Two foci   Two foci
  Directrix   Not used  Yes         Yes        Yes
  Axis of     Infinite  One         Two        Two
  Symmetry
  Asymptotes  No        No          No         Yes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPARING THE EQUATIONS

Circle:

  (x - h)² + (y - k)² = r²

Notice the two squared terms have:

  The same coefficient
  The same sign

Ellipse:

  (x - h)²/a² + (y - k)²/b² = 1

Notice:

  Both squared terms have the same sign
  Denominators are different

Parabola:

  (x - h)² = 4p(y - k)

or:

  (y - k)² = 4p(x - h)

Notice:

  Only one variable is squared

Hyperbola:

  (x - h)²/a² - (y - k)²/b² = 1

Notice:

  Squared terms have opposite signs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. HOW TO IDENTIFY A CONIC FROM ITS EQUATION

Here is a quick guide:

Only one variable is squared

Example:

  x² = 4y

→ Parabola

Both variables are squared with the same coefficient

Example:

  x² + y² = 25

→ Circle

Both variables are squared with the same sign but different coefficients

Example:

  x²/9 + y²/4 = 1

→ Ellipse

Both variables are squared with opposite signs

Example:

  x²/9 - y²/4 = 1

→ Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE DISCRIMINANT TEST FOR CONICS

For the general equation:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

the expression:

  B² - 4AC

can help classify a nondegenerate conic:

  If B² - 4AC < 0 → Ellipse-type (including a circle as a special case)
  If B² - 4AC = 0 → Parabola-type
  If B² - 4AC > 0 → Hyperbola-type

A circle is a special ellipse-type conic and requires additional coefficient conditions in the chosen coordinate system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. REAL-LIFE APPLICATIONS OF CONICS

Circle

Used in:

  Wheels
  Clocks
  Gears
  Circular buildings

Parabola

Used in:

  Satellite dishes
  Car headlights
  Reflecting telescopes
  Projectile motion

Ellipse

Used in:

  Planetary orbits
  Whispering galleries
  Elliptical mirrors
  Some architectural designs

Hyperbola

Used in:

  GPS and navigation calculations
  Radio signal location
  Astronomy
  Hyperbolic structures

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT RELATIONSHIPS

For an ellipse:

  c² = a² - b²

For a hyperbola:

  c² = a² + b²

For a parabola:

  Distance to focus = Distance to directrix

For a circle:

  Distance from center = r

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER

  Circle:    (x - h)² + (y - k)² = r², e = 0
  Ellipse:   (x - h)²/a² + (y - k)²/b² = 1, 0 < e < 1
  Parabola:  (x - h)² = 4p(y - k), e = 1
  Hyperbola: (x - h)²/a² - (y - k)²/b² = 1, e > 1

  Ellipse:   c² = a² - b²
  Hyperbola: c² = a² + b²
  Eccentricity: e = c/a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY

The properties of conics help us understand how each conic section behaves and how it differs from the others.

The four major conics can be summarized as:

  Conic       Defining Property                               Eccentricity
  ──────────────────────────────────────────────────────────────────────────
  Circle      Equal distance from center                        e = 0
  Ellipse     Sum of distances to two foci is constant          0 < e < 1
  Parabola    Equal distance from focus and directrix           e = 1
  Hyperbola   Difference of distances to two foci is constant   e > 1

Understanding focus, directrix, vertices, axes, symmetry, eccentricity, and standard equations provides a strong foundation for studying all conic sections in analytic geometry and calculus.

Easy way to remember: Circle is perfectly round (e=0), ellipse is oval (0<e<1), parabola is U-shaped (e=1), hyperbola has two branches (e>1). Use the discriminant B² - 4AC to classify.
  `,
  examples: [
    "Circle: (x - 3)² + (y + 2)² = 16 → center (3,-2), radius 4, e = 0",
    "Parabola: x² = 8y → vertex (0,0), focus (0,2), directrix y = -2, e = 1",
    "Ellipse: x²/9 + y²/4 = 1 → center (0,0), a=3, b=2, c=√5, e = √5/3",
    "Hyperbola: x²/9 - y²/4 = 1 → center (0,0), a=3, b=2, c=√13, e = √13/3",
    "Ellipse c² = a² - b²",
    "Hyperbola c² = a² + b²",
    "Discriminant test: B² - 4AC < 0 → ellipse, = 0 → parabola, > 0 → hyperbola",
  ],
};

export default topic;