// filename: ConvertingPolarAndCartesianCoordinates.ts

const topic = {
  id: "converting-polar-and-cartesian-coordinates",
  title: "Converting Polar and Cartesian Coordinates",
  summary:
    "A comprehensive guide to converting between polar and Cartesian coordinate systems. Covers the formulas for both directions, handling quadrants, special cases, and converting equations.",
  details: `
The polar coordinate system and the Cartesian coordinate system are two different ways of describing the location of a point on a plane.

  Cartesian coordinates: (x, y)
  Polar coordinates: (r, θ)

The important skill is learning how to convert from one system to the other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE TWO COORDINATE SYSTEMS

Cartesian Coordinates

A point is represented as:

  (x, y)

where:

  x represents horizontal distance
  y represents vertical distance

For example:

  (3, 4)

means:

  move 3 units to the right,
  move 4 units upward.

Polar Coordinates

A point is represented as:

  (r, θ)

where:

  r = distance from the origin
  θ = angle measured from the positive x-axis

For example:

  (5, 45°)

means:

  Rotate 45° from the positive x-axis.
  Move 5 units away from the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE CONNECTION BETWEEN THE SYSTEMS

Imagine a point P(x, y) located on a coordinate plane.

Draw a line from the origin to the point. This creates a right triangle.

The triangle has:

  Hypotenuse = r
  Horizontal side = x
  Vertical side = y

Using trigonometry:

  cos θ = x/r

Therefore:

  x = r · cos θ

Similarly:

  sin θ = y/r

Therefore:

  y = r · sin θ

These are the main formulas for converting Polar → Cartesian.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONVERTING POLAR COORDINATES TO CARTESIAN COORDINATES

To convert:

  (r, θ)

into:

  (x, y)

use:

  x = r · cos θ
  y = r · sin θ

Example 1

Convert:

  (4, 30°)

into Cartesian coordinates.

Step 1: Find x

  x = r · cos θ

Substitute:

  x = 4 · cos 30°

Since:

  cos 30° = √3/2

we get:

  x = 4(√3/2) = 2√3

Step 2: Find y

  y = r · sin θ

Substitute:

  y = 4 · sin 30°

Since:

  sin 30° = 1/2
  y = 4(1/2) = 2

Therefore:

  (4, 30°) = (2√3, 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE USING RADIANS

Convert:

  (6, π/3)

to Cartesian coordinates.

Find x

  x = r · cos θ
  x = 6 · cos(π/3)

Since:

  cos(π/3) = 1/2
  x = 6(1/2) = 3

Find y

  y = r · sin θ
  y = 6 · sin(π/3)

Since:

  sin(π/3) = √3/2
  y = 6(√3/2) = 3√3

Therefore:

  (6, π/3) = (3, 3√3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONVERTING CARTESIAN COORDINATES TO POLAR COORDINATES

To convert:

  (x, y)

into:

  (r, θ)

we need to find:

  The distance r
  The angle θ

Finding r

Using the Pythagorean theorem:

  r² = x² + y²

Therefore:

  r = √(x² + y²)

This formula gives the distance between the point and the origin.

Finding θ

Using tangent:

  tan θ = y/x

Therefore:

  θ = tan⁻¹(y/x)

However, there is an important warning:

The inverse tangent may give an angle in the wrong quadrant.

Therefore, always check where the point is located.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE FOUR QUADRANTS

The coordinate plane has four quadrants:

  Quadrant    x       y       Angle Range
  ──────────────────────────────────────────────
  I           +       +       0° to 90°
  II          -       +       90° to 180°
  III         -       -       180° to 270°
  IV          +       -       270° to 360°

When finding θ, the quadrant is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: CARTESIAN TO POLAR (QUADRANT I)

Convert:

  (3, 4)

to polar coordinates.

Step 1: Find r

  r = √(x² + y²)
  r = √(3² + 4²)
  r = √(9 + 16)
  r = √25
  r = 5

Step 2: Find θ

  tan θ = y/x
  tan θ = 4/3

Therefore:

  θ = tan⁻¹(4/3)
  θ ≈ 53.13°

Since the point (3, 4) is in Quadrant I, the angle is correct.

Therefore:

  (3, 4) = (5, 53.13°)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: POINT IN QUADRANT II

Convert:

  (-3, 4)

to polar coordinates.

Step 1: Find r

  r = √((-3)² + 4²)
  r = √(9 + 16)
  r = 5

Step 2: Find the Reference Angle

  tan θ = 4/(-3)

The calculator may give:

  tan⁻¹(-4/3) ≈ -53.13°

But the point is located in Quadrant II.

Therefore, the correct angle is:

  θ = 180° - 53.13° = 126.87°

Therefore:

  (-3, 4) = (5, 126.87°)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: POINT IN QUADRANT III

Convert:

  (-3, -4)

to polar coordinates.

Find r

  r = √((-3)² + (-4)²)
  r = 5

Find the reference angle

  tan θ = (-4)/(-3)
  tan θ = 4/3

Reference angle:

  θ_r = 53.13°

The point is in Quadrant III.

Therefore:

  θ = 180° + 53.13° = 233.13°

Therefore:

  (-3, -4) = (5, 233.13°)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: POINT IN QUADRANT IV

Convert:

  (3, -4)

to polar coordinates.

Find r

  r = √(3² + (-4)²)
  r = 5

Find the reference angle

  θ_r = 53.13°

The point is in Quadrant IV.

Therefore:

  θ = 360° - 53.13° = 306.87°

Therefore:

  (3, -4) = (5, 306.87°)

Another valid representation is:

  (5, -53.13°)

because negative angles move clockwise.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT SPECIAL CASES

Point on the Positive x-axis

For:

  (x, 0)

where x > 0:

  θ = 0

Example:

  (5, 0)

becomes:

  (5, 0)

in polar form.

Point on the Positive y-axis

For:

  (0, y)

where y > 0:

  θ = 90° = π/2

Point on the Negative x-axis

For:

  (x, 0)

where x < 0:

  θ = 180° = π

Point on the Negative y-axis

For:

  (0, y)

where y < 0:

  θ = 270° = 3π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CONVERTING EQUATIONS

We can also convert entire equations between Cartesian and polar form.

The important formulas are:

  x = r · cos θ
  y = r · sin θ
  x² + y² = r²

Example 1: Circle

Suppose:

  x² + y² = 25

Since:

  x² + y² = r²

we get:

  r² = 25

Therefore:

  r = 5

So the Cartesian equation:

  x² + y² = 25

becomes the polar equation:

  r = 5

Example 2: Converting a Line

Convert:

  x = 4

to polar form.

Using:

  x = r · cos θ

Substitute:

  r · cos θ = 4

Therefore:

  r = 4 · sec θ

Example 3: Converting a Cartesian Equation

Convert:

  x + y = 6

to polar form.

Substitute:

  x = r · cos θ

and:

  y = r · sin θ

Therefore:

  r · cos θ + r · sin θ = 6

Factor r:

  r(cos θ + sin θ) = 6

Therefore:

  r = 6/(cos θ + sin θ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SUMMARY OF CONVERSION FORMULAS

Polar → Cartesian

  x = r · cos θ
  y = r · sin θ

Steps:

  • Identify r and θ.
  • Calculate r · cos θ to find x.
  • Calculate r · sin θ to find y.
  • Write the answer as (x, y).

Cartesian → Polar

  r = √(x² + y²)
  tan θ = y/x

Steps:

  • Calculate r.
  • Find the reference angle using inverse tangent.
  • Check the quadrant.
  • Adjust the angle if necessary.
  • Write the answer as (r, θ).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK COMPARISON TABLE

  Conversion      Formula
  ────────────────────────────────────
  Polar → Cartesian    x = r · cos θ
  Polar → Cartesian    y = r · sin θ
  Cartesian → Polar    r = √(x² + y²)
  Cartesian → Polar    tan θ = y/x
  Equation Conversion  r² = x² + y²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER

  x = r · cos θ
  y = r · sin θ
  r = √(x² + y²)
  r² = x² + y²
  tan θ = y/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY

The most important thing to remember is:

From Polar to Cartesian:

  x = r · cos θ,    y = r · sin θ

From Cartesian to Polar:

  r = √(x² + y²)

and determine:

  θ = tan⁻¹(y/x)

while carefully checking the quadrant.

Think of the conversion this way:

  Polar coordinates describe a point using distance and direction.
  Cartesian coordinates describe the same point using horizontal and vertical position.

Understanding these conversions is essential because later topics in Calculus—such as polar graphs, area in polar coordinates, arc length, and applications of polar equations—all rely heavily on switching between these two coordinate systems.

Easy way to remember: Polar to Cartesian uses the right triangle formulas (cos and sin). Cartesian to Polar uses the distance formula (Pythagorean theorem) and inverse tangent. Always check the quadrant when finding θ.
  `,
  examples: [
    "(4, 30°) → Cartesian: (2√3, 2)",
    "(6, π/3) → Cartesian: (3, 3√3)",
    "(3, 4) → Polar: (5, 53.13°)",
    "(-3, 4) → Polar: (5, 126.87°)",
    "(-3, -4) → Polar: (5, 233.13°)",
    "(3, -4) → Polar: (5, 306.87°)",
    "x² + y² = 25 → polar: r = 5",
    "x = 4 → polar: r = 4 sec θ",
    "x + y = 6 → polar: r = 6/(cos θ + sin θ)",
  ],
};

export default topic;