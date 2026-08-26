// filename: PolarEquationsOfTheConics.ts

const topic = {
  id: "polar-equations-of-the-conics",
  title: "Polar Equations of the Conics",
  summary:
    "A comprehensive guide to conic sections in polar coordinates. Covers the unified polar equation with focus at the pole, eccentricity classification, orientation, and conversion to Cartesian form.",
  details: `
Polar equations of conics describe circles, ellipses, parabolas, and hyperbolas using the polar coordinate system instead of the usual Cartesian (x, y) coordinate system.

This topic is important because polar equations provide a unified way to describe conic sections using two important concepts:

  Focus
  Directrix

The shape of the conic depends mainly on a quantity called eccentricity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. REVIEW: POLAR COORDINATES

In the polar coordinate system, a point is written as:

  (r, θ)

where:

  r = distance from the pole (origin)
  θ = angle measured from the polar axis

The relationships between Cartesian and polar coordinates are:

  x = r · cos θ
  y = r · sin θ

and:

  r² = x² + y²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL IDEA OF A CONIC IN POLAR FORM

A conic section can be defined as the set of points P such that:

  (distance from P to the focus) / (distance from P to the directrix) = e

where:

  e = eccentricity

For polar conics, we usually place the focus at the pole, which makes the equation easier to derive and use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST IMPORTANT POLAR EQUATION OF A CONIC

One common form is:

  r = ed / (1 + e · cos θ)

Another common form is:

  r = ed / (1 - e · cos θ)

We can also have equations involving sine:

  r = ed / (1 + e · sin θ)

or:

  r = ed / (1 - e · sin θ)

where:

  r = distance from the focus
  θ = polar angle
  e = eccentricity
  d = distance related to the position of the directrix

The signs and whether we use sine or cosine determine the orientation of the conic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. UNDERSTANDING ECCENTRICITY

The value of e determines which conic section we have.

  Value of e        Conic
  ──────────────────────────
  0 < e < 1         Ellipse
  e = 1             Parabola
  e > 1             Hyperbola

A circle is usually treated separately in polar coordinates because its focus-directrix definition is not the standard way we describe a circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POLAR EQUATION OF AN ELLIPSE

An ellipse has:

  0 < e < 1

Example:

  r = 6 / (1 + (1/2) · cos θ)

Compare this with:

  r = ed / (1 + e · cos θ)

Therefore:

  e = 1/2

Since:

  0 < 1/2 < 1

the curve is an:

  Ellipse

Properties of the Ellipse

For a polar ellipse:

  One focus is at the pole.
  The eccentricity is less than 1.
  The curve is closed.
  It has an oval shape.
  The denominator never becomes zero for real θ.

For example:

  r = 6 / (1 + (1/2) · cos θ)

The curve forms a closed oval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POLAR EQUATION OF A PARABOLA

A parabola has:

  e = 1

Therefore, the general equation becomes:

  r = d / (1 ± cos θ)

or:

  r = d / (1 ± sin θ)

Example:

  r = 4 / (1 - cos θ)

Since the eccentricity is:

  e = 1

the graph represents a:

  Parabola

Properties of a Polar Parabola

  One focus is at the pole.
  It has one branch.
  It is not a closed curve.
  It extends infinitely.
  The focus-directrix ratio is exactly 1.

The denominator may become zero at certain angles, causing r to grow very large. This corresponds to the parabola extending infinitely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. POLAR EQUATION OF A HYPERBOLA

A hyperbola has:

  e > 1

Example:

  r = 8 / (1 + 2 · cos θ)

Compare:

  r = ed / (1 + e · cos θ)

Therefore:

  e = 2

Since:

  2 > 1

the graph represents a:

  Hyperbola

Properties of a Polar Hyperbola

  One focus is located at the pole.
  The curve has two branches.
  The eccentricity is greater than 1.
  The denominator can become zero.
  The curve extends infinitely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY ARE THERE DIFFERENT FORMS?

You may see:

  r = ed / (1 + e · cos θ)

or:

  r = ed / (1 - e · cos θ)

or equations involving sine.

These differences change the orientation of the conic.

Cosine Forms

Cosine is related to the horizontal direction.

  r = ed / (1 + e · cos θ)

or:

  r = ed / (1 - e · cos θ)

The conic is oriented primarily left or right.

Sine Forms

Sine is related to the vertical direction.

  r = ed / (1 + e · sin θ)

or:

  r = ed / (1 - e · sin θ)

The conic is oriented primarily upward or downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EFFECT OF THE SIGN

The sign affects the direction in which the conic is oriented.

Example:

  r = ed / (1 - e · cos θ)

and:

  r = ed / (1 + e · cos θ)

These have similar shapes but face in opposite horizontal directions.

Similarly:

  r = ed / (1 - e · sin θ)

and:

  r = ed / (1 + e · sin θ)

have similar shapes but face in opposite vertical directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL FORMS TO REMEMBER

The most common polar forms of conics are:

Horizontal Orientation:

  r = ed / (1 ± e · cos θ)

Vertical Orientation:

  r = ed / (1 ± e · sin θ)

These formulas are extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW TO IDENTIFY THE CONIC FROM A POLAR EQUATION

Consider:

  r = 12 / (1 + (3/4) · cos θ)

The coefficient of the trigonometric function is:

  e = 3/4

Since:

  0 < 3/4 < 1

the graph is an:

  Ellipse

Example 2

  r = 5 / (1 - sin θ)

The eccentricity is:

  e = 1

Therefore:

  Parabola

Example 3

  r = 10 / (1 + 3 · cos θ)

The eccentricity is:

  e = 3

Since:

  3 > 1

the graph is:

  Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FINDING THE ECCENTRICITY

Suppose:

  r = 8 / (1 + 2 · sin θ)

Compare with:

  r = ed / (1 + e · sin θ)

The coefficient of sin θ is:

  e = 2

Therefore:

  e > 1

So the equation represents a:

  Hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING THE DIRECTRIX PARAMETER

Consider:

  r = 6 / (1 + (1/2) · cos θ)

Compare with:

  r = ed / (1 + e · cos θ)

We know:

  e = 1/2

The numerator is:

  ed = 6

Therefore:

  (1/2)d = 6

Multiply both sides by 2:

  d = 12

So the directrix-related distance parameter is:

  d = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CONVERTING A POLAR CONIC TO CARTESIAN FORM

Suppose:

  r = 4 / (1 - cos θ)

Multiply both sides:

  r(1 - cos θ) = 4

Distribute:

  r - r · cos θ = 4

Use:

  r · cos θ = x

Therefore:

  r - x = 4

So:

  r = x + 4

Square both sides:

  r² = (x + 4)²

Since:

  r² = x² + y²

we get:

  x² + y² = x² + 8x + 16

Cancel x²:

  y² = 8x + 16

Therefore:

  y² = 8(x + 2)

This is the Cartesian equation of a parabola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE ROLE OF THE FOCUS

One major advantage of polar equations is that the focus is naturally placed at the pole.

Since:

  r

represents the distance from the pole to a point, it can directly represent the distance from the point to the focus.

This makes focus-directrix relationships easier to express mathematically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CHARACTERISTICS OF POLAR CONICS

Ellipse:

  0 < e < 1
  Closed curve
  Oval-shaped
  One focus at the pole

Parabola:

  e = 1
  One continuous curve
  Opens infinitely
  One focus at the pole

Hyperbola:

  e > 1
  Two branches
  Extends infinitely
  One focus at the pole

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMPARISON TABLE

  Conic       Eccentricity    Polar Form
  ──────────────────────────────────────────────────────────────────────────
  Ellipse     0 < e < 1       r = ed / (1 ± e · cos θ)
  Parabola    e = 1           r = d / (1 ± cos θ)
  Hyperbola   e > 1           r = ed / (1 ± e · cos θ)

The same forms can also use sin θ for vertical orientation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT NOTES ABOUT THE CONSTANT IN THE NUMERATOR

You may see different textbooks write the polar equation as:

  r = ed / (1 ± e · cos θ)

or:

  r = p / (1 ± e · cos θ)

where:

  p = ed

The value p is often called the semi-latus rectum.

So:

  r = p / (1 ± e · cos θ)

and

  r = ed / (1 ± e · cos θ)

represent the same general type of equation when p = ed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. STEP-BY-STEP METHOD FOR SOLVING POLAR CONIC PROBLEMS

Step 1: Identify the form

Look for:

  r = constant / (1 ± e · cos θ)

or:

  r = constant / (1 ± e · sin θ)

Step 2: Identify the eccentricity

Look at the coefficient of:

  cos θ

or:

  sin θ

That coefficient is:

  e

Step 3: Classify the conic

  0 < e < 1 → Ellipse
  e = 1 → Parabola
  e > 1 → Hyperbola

Step 4: Determine orientation

  cos θ → Horizontal orientation
  sin θ → Vertical orientation

The plus or minus sign determines which direction the conic faces.

Step 5: Find additional information

If needed:

  p = ed

Therefore:

  d = p/e

This can help determine the corresponding directrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO REMEMBER

  r = ed / (1 ± e · cos θ)
  r = ed / (1 ± e · sin θ)
  p = ed

  Ellipse:   0 < e < 1
  Parabola:  e = 1
  Hyperbola: e > 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SIMPLE SUMMARY

The polar equations of conics provide a powerful and unified way of describing ellipses, parabolas, and hyperbolas.

The most important forms are:

  r = ed / (1 ± e · cos θ)

and:

  r = ed / (1 ± e · sin θ)

The most important property is the eccentricity:

  0 < e < 1 → Ellipse
  e = 1 → Parabola
  e > 1 → Hyperbola

By examining the value of e, the trigonometric function used, and the sign in the denominator, we can identify the type, shape, and orientation of a conic in polar coordinates.

Easy way to remember: The polar equation of a conic has the form r = ed / (1 ± e·cosθ). The coefficient of cosθ (or sinθ) is the eccentricity e. If e < 1 it's an ellipse, e = 1 is a parabola, and e > 1 is a hyperbola.
  `,
  examples: [
    "r = 6/(1 + (1/2)cosθ) → e = 1/2 → ellipse",
    "r = 5/(1 - sinθ) → e = 1 → parabola",
    "r = 10/(1 + 3cosθ) → e = 3 → hyperbola",
    "r = 8/(1 + 2sinθ) → e = 2 → hyperbola",
    "r = 4/(1 - cosθ) → convert to Cartesian: y² = 8(x + 2)",
    "r = ed/(1 + e·cosθ) → general horizontal form",
    "r = ed/(1 + e·sinθ) → general vertical form",
  ],
};

export default topic;