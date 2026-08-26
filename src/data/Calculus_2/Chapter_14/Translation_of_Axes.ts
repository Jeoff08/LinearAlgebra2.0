// filename: TranslationOfAxes.ts

const topic = {
  id: "translation-of-axes",
  title: "Translation of Axes",
  summary:
    "A comprehensive guide to translating coordinate axes in analytic geometry. Covers the definition, formulas, applications to conic sections (circles, parabolas), and the difference between translating axes and translating graphs.",
  details: `
Translation of Axes is a topic in analytic geometry that involves moving the coordinate axes from one position to another without changing their direction. In simpler terms, instead of rotating the x- and y-axes, we simply shift their origin to a new location.

This technique is especially useful when simplifying equations of conic sections such as:

  Circles
  Parabolas
  Ellipses
  Hyperbolas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES TRANSLATION MEAN?

The word translation means moving or shifting.

In the coordinate plane, translation of axes means moving:

  the x-axis
  the y-axis
  the origin

to a new location.

The axes remain:

  Parallel to their original positions
  Perpendicular to each other

Only their location changes.

Example

Suppose the original origin is:

  O = (0, 0)

We move the origin to:

  O' = (h, k)

The new coordinate system is still perpendicular, but its origin is now at (h, k).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY TRANSLATE THE AXES?

Translation of axes is mainly used to make complicated equations easier to understand and solve.

Consider:

  x² + y² - 6x + 8y + 9 = 0

This equation looks complicated because it contains:

  x²
  y²
  x
  y
  constants

By translating the axes, we can transform the equation into a simpler form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TRANSLATION OF THE ORIGIN

Suppose we move the origin from:

  (0, 0)

to:

  (h, k)

We introduce new coordinates:

  X

and

  Y

The relationship between the old and new coordinates is:

  x = X + h
  y = Y + k

These are the basic formulas for translating the axes.

Understanding the Formula

Suppose the new origin is:

  (h, k)

A point that has coordinates:

  (X, Y)

in the new coordinate system has coordinates:

  (X + h, Y + k)

in the original coordinate system.

Therefore:

  x = X + h
  y = Y + k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE OF TRANSLATION

Suppose we move the origin to:

  (3, 2)

Then:

  h = 3

and:

  k = 2

The translation formulas become:

  x = X + 3
  y = Y + 2

Suppose a point has new coordinates:

  (X, Y) = (2, 1)

Its original coordinates are:

  x = 2 + 3 = 5
  y = 1 + 2 = 3

Therefore, in the original coordinate system:

  (x, y) = (5, 3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. OLD COORDINATES AND NEW COORDINATES

It is important to distinguish between the two coordinate systems.

Old Coordinate System

Uses:

  (x, y)

New Coordinate System

Uses:

  (X, Y)

If the origin moves to:

  (h, k)

then:

  x = X + h
  y = Y + k

Conversely:

  X = x - h
  Y = y - k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TRANSLATION OF A CIRCLE

Consider:

  x² + y² - 6x + 8y + 9 = 0

We want to simplify this equation.

First, group the terms:

  x² - 6x + y² + 8y = -9

Complete the square.

For x:

  x² - 6x = (x - 3)² - 9

For y:

  y² + 8y = (y + 4)² - 16

Substitute:

  (x - 3)² - 9 + (y + 4)² - 16 = -9

Simplify:

  (x - 3)² + (y + 4)² = 16

This represents a circle with:

  Center: (3, -4)
  Radius: 4

Translating the Axes

Move the origin to the center:

  (3, -4)

Using:

  x = X + 3
  y = Y - 4

The equation becomes:

  X² + Y² = 16

This is much simpler.

The complicated equation has been transformed into the standard equation of a circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. TRANSLATION OF A PARABOLA

Consider:

  y = x² + 4x + 3

Complete the square:

  y = x² + 4x + 4 - 4 + 3
  y = (x + 2)² - 1

The vertex is:

  (-2, -1)

We can move the origin to:

  (-2, -1)

Then the parabola can be represented more simply in the new coordinate system.

The complicated-looking equation:

  y = x² + 4x + 3

becomes:

  Y = X²

This shows that translating the axes allows us to move the vertex to the new origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GRAPHICAL IDEA

Consider the basic parabola:

  y = x²

Now consider:

  y = (x - 2)² + 3

The graph has been translated:

  2 units to the right
  3 units upward

The shape of the parabola does not change. Only its position changes.

This is an important idea:

  Translation changes the position of a graph but does not change its shape or size.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL TRANSLATION FORMULAS

Suppose the origin is moved from:

  O = (0, 0)

to:

  O' = (h, k)

Then:

From new coordinates to old coordinates:

  x = X + h
  y = Y + k

From old coordinates to new coordinates:

  X = x - h
  Y = y - k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HOW TRANSLATION SIMPLIFIES EQUATIONS

Suppose we have a general equation:

  Ax² + By² + Cx + Dy + E = 0

The linear terms:

  Cx

and:

  Dy

can make the equation more complicated.

By choosing an appropriate new origin, translation may eliminate these linear terms.

For example, a complicated conic equation may become:

  X² + Y² = r²

or:

  X² = 4pY

or:

  X²/a² + Y²/b² = 1

These are standard forms that are much easier to analyze.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TRANSLATION VS. MOVING THE GRAPH

There is an important difference between these two ideas.

Translating the Graph

The coordinate axes remain fixed, but the graph moves.

Example:

  y = x²

becomes:

  y = (x - 2)² + 3

The parabola moves.

Translating the Axes

The graph remains in the same physical position, but the coordinate system moves.

The origin changes from:

  (0, 0)

to:

  (h, k)

This changes how we describe the coordinates of points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEP-BY-STEP METHOD FOR TRANSLATING AXES

Step 1: Identify the new origin

Suppose:

  (h, k)

is the new origin.

Step 2: Introduce new variables

Use:

  X

and:

  Y

for the new coordinate system.

Step 3: Apply the formulas

  x = X + h
  y = Y + k

Step 4: Substitute into the original equation

Replace every:

  x with X + h
  y with Y + k

Step 5: Simplify

Expand and simplify the equation until you obtain a simpler form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE PROBLEM

Translate the axes to the point:

  (2, -3)

The new origin is:

  (h, k) = (2, -3)

Therefore:

  x = X + 2
  y = Y - 3

Suppose the original equation is:

  x² + y² - 4x + 6y = 0

Substitute:

  (X + 2)² + (Y - 3)² - 4(X + 2) + 6(Y - 3) = 0

Expand:

  X² + 4X + 4 + Y² - 6Y + 9 - 4X - 8 + 6Y - 18 = 0

Simplify:

  X² + Y² - 13 = 0

Therefore:

  X² + Y² = 13

The translated equation is now much simpler.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANCE OF TRANSLATION OF AXES

Translation of axes is useful because it helps us:

  Simplify complicated equations
  Identify the center of circles
  Identify the vertex of parabolas
  Analyze ellipses and hyperbolas
  Convert equations into standard forms
  Make graphing easier
  Understand transformations in analytic geometry

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER

  x = X + h
  y = Y + k
  X = x - h
  Y = y - k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY

Translation of axes means shifting the coordinate system to a new origin while keeping the axes parallel to their original directions.

The most important formulas are:

  x = X + h
  y = Y + k

and conversely:

  X = x - h
  Y = y - k

This technique is extremely useful in analytic geometry because it transforms complicated equations into simpler standard forms, making conic sections such as circles, parabolas, ellipses, and hyperbolas easier to study.

Easy way to remember: Translation moves the origin to (h, k). New coordinates (X, Y) relate to old coordinates (x, y) by x = X + h and y = Y + k.
  `,
  examples: [
    "Translate origin to (3,2): x = X + 3, y = Y + 2",
    "Circle: x² + y² - 6x + 8y + 9 = 0 → translate to (3,-4) → X² + Y² = 16",
    "Parabola: y = x² + 4x + 3 → vertex (-2,-1) → translate to (-2,-1) → Y = X²",
    "Point (X,Y) = (2,1) with h=3, k=2 → (x,y) = (5,3)",
    "x² + y² - 4x + 6y = 0 → translate to (2,-3) → X² + Y² = 13",
  ],
};

export default topic;