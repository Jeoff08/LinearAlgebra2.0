// filename: PolarCoordinateSystem.ts

const topic = {
  id: "polar-coordinate-system",
  title: "Polar Coordinate System",
  summary:
    "A comprehensive guide to the polar coordinate system, covering the basic concepts, conversion between polar and Cartesian coordinates, common polar curves, and calculus applications including area and arc length.",
  details: `
The Polar Coordinate System is another way of locating a point on a plane. Unlike the Cartesian coordinate system, which uses (x, y), the polar coordinate system uses:

  (r, θ)

where:

  r = the distance of the point from the origin (called the pole)
  θ = the angle measured from the positive horizontal axis (called the polar axis)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA

In the Cartesian coordinate system, we locate a point by moving:

  left or right → x
  up or down → y

For example:

  (3, 4)

means move 3 units horizontally and 4 units vertically.

In the polar coordinate system, we locate a point differently:

  Start at the origin.
  Rotate through an angle θ.
  Move outward a distance r.

For example:

  (5, 45°)

means:

  rotate 45° from the positive x-axis,
  move 5 units away from the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PARTS OF THE POLAR COORDINATE SYSTEM

The Pole

The pole is the center of the polar coordinate system.

It is equivalent to the origin:

  (0, 0)

in Cartesian coordinates.

The Polar Axis

The polar axis is the starting direction from which angles are measured.

Usually, it is the positive x-axis.

Positive angles are usually measured:

  counterclockwise → positive
  clockwise → negative

Radius r

The value r tells us how far the point is from the pole.

For example:

  (4, 30°)

means the point is 4 units away from the pole.

Normally:

  r > 0

However, polar coordinates can also have negative values of r, which makes polar coordinates more flexible than Cartesian coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNDERSTANDING THE ANGLE θ

The angle θ determines the direction of the point.

Common angles include:

  0°, 30°, 45°, 60°, 90°

or in radians:

  0, π/6, π/4, π/3, π/2

For example:

  (3, π/2)

means:

  rotate 90°,
  move 3 units away from the pole.

The point will lie directly above the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RELATIONSHIP BETWEEN POLAR AND CARTESIAN COORDINATES

Polar and Cartesian coordinates describe the same plane. Therefore, we can convert between them.

The most important formulas are:

  x = r · cos θ

and:

  y = r · sin θ

These formulas allow us to convert a polar coordinate into a Cartesian coordinate.

Example 1: Polar to Cartesian

Convert:

  (4, 30°)

Using:

  x = r · cos θ
  y = r · sin θ

Substitute:

  x = 4 · cos 30°

Since:

  cos 30° = √3/2

we get:

  x = 4(√3/2) = 2√3

Now calculate y:

  y = 4 · sin 30°

Since:

  sin 30° = 1/2
  y = 4(1/2) = 2

Therefore:

  (4, 30°) = (2√3, 2)

in Cartesian coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONVERTING CARTESIAN COORDINATES TO POLAR COORDINATES

Suppose we have:

  (x, y)

We can find r using the Pythagorean theorem:

  r = √(x² + y²)

To find the angle:

  tan θ = y/x

Therefore:

  θ = tan⁻¹(y/x)

However, you must be careful about the quadrant of the point.

Example 2: Cartesian to Polar

Convert:

  (3, 4)

into polar coordinates.

Step 1: Find r

  r = √(x² + y²)

Substitute:

  r = √(3² + 4²)
  r = √(9 + 16)
  r = √25
  r = 5

Step 2: Find θ

  tan θ = y/x
  tan θ = 4/3

Therefore:

  θ = tan⁻¹(4/3)

Approximately:

  θ ≈ 53.13°

So the polar coordinate is:

  (5, 53.13°)

or in radians:

  (5, 0.927)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IMPORTANT FORMULA: r² = x² + y²

Since:

  r = √(x² + y²)

we can square both sides:

  r² = x² + y²

This is one of the most important equations in polar coordinates.

It is particularly useful when converting equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. POLAR COORDINATES ARE NOT UNIQUE

One interesting property of polar coordinates is that a point can have multiple representations.

For example:

  (5, 30°)

is the same location as:

  (5, 390°)

because:

  30° + 360° = 390°

In general:

  (r, θ) = (r, θ + 360°n)

where n is any integer.

Using radians:

  (r, θ) = (r, θ + 2πn)

Example

These all represent the same point:

  (4, 45°)
  (4, 405°)
  (4, -315°)

because each angle points in the same direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. NEGATIVE VALUES OF r

A negative radius means that instead of moving in the direction of θ, we move in the opposite direction.

For example:

  (-3, 30°)

means:

  Rotate 30°.
  Instead of moving forward 3 units, move in the opposite direction.

This is equivalent to:

  (3, 210°)

because:

  30° + 180° = 210°

Therefore:

  (-r, θ) = (r, θ + 180°)

or in radians:

  (-r, θ) = (r, θ + π)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON POLAR CURVES

One major reason polar coordinates are important in Calculus is that they make certain curves easier to describe.

A. Circle

A simple polar equation:

  r = 3

represents a circle with radius 3 centered at the pole.

Why?

Because every point is exactly 3 units from the origin.

B. Spiral

An equation such as:

  r = θ

creates a spiral.

As θ increases, the value of r also increases. Therefore, the point continuously moves farther away from the pole.

C. Rose Curves

Equations such as:

  r = a · cos(nθ)

or:

  r = a · sin(nθ)

can create beautiful flower-like graphs called rose curves.

Example:

  r = 3 · cos(2θ)

produces a four-petal rose.

D. Cardioid

A cardioid is a heart-shaped curve.

Example:

  r = 1 + cos θ

The name cardioid comes from the word related to heart.

E. Limacon

An equation like:

  r = a + b · cos θ

or:

  r = a + b · sin θ

produces a family of curves called limacons.

Depending on the values of a and b, the graph may have:

  an inner loop,
  a dimple,
  a convex shape.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY POLAR COORDINATES ARE IMPORTANT IN CALCULUS

Polar coordinates are especially useful when dealing with curves that naturally involve:

  circles,
  rotations,
  spirals,
  symmetrical shapes,
  areas around a central point.

In Cartesian coordinates, a circle may require:

  x² + y² = r²

But in polar coordinates, the same circle can simply be:

  r = a

This often makes equations much simpler.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AREA IN POLAR COORDINATES

One important application in Calculus is finding the area enclosed by a polar curve.

The formula is:

  A = (1/2) ∫ₐᵇ [r(θ)]² dθ

where:

  r(θ) is the polar function,
  a and b are the starting and ending angles.

Example

Find the area inside:

  r = 2

from:

  θ = 0

to:

  θ = 2π

Using:

  A = (1/2) ∫₀²ᵖ r² dθ

Since r = 2:

  A = (1/2) ∫₀²ᵖ 4 dθ
  A = 2 ∫₀²ᵖ dθ
  A = 2(2π)
  A = 4π

This is exactly the area of a circle with radius 2:

  A = πr² = π(2)² = 4π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ARC LENGTH IN POLAR COORDINATES

Polar coordinates can also be used to find the length of a curve.

The formula is:

  L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

This is useful for finding the length of:

  spirals,
  loops,
  rose curves,
  cardioids,
  other complex curved paths.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SUMMARY OF IMPORTANT FORMULAS

Polar to Cartesian:

  x = r · cos θ
  y = r · sin θ

Cartesian to Polar:

  r = √(x² + y²)
  tan θ = y/x

Fundamental Relationship:

  r² = x² + y²

Area in Polar Coordinates:

  A = (1/2) ∫ₐᵇ r² dθ

Arc Length in Polar Coordinates:

  L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. KEY FORMULAS TO REMEMBER

  x = r · cos θ
  y = r · sin θ
  r = √(x² + y²)
  r² = x² + y²
  tan θ = y/x

  A = (1/2) ∫ₐᵇ r² dθ
  L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SIMPLE SUMMARY

The Polar Coordinate System describes points using distance and direction instead of horizontal and vertical movement.

  (r, θ)

Think of it like this:

  Cartesian coordinates: "Move left/right, then up/down."
  Polar coordinates: "Turn to this angle, then move this distance."

Polar coordinates become especially powerful in Calculus because they make it easier to analyze and calculate properties of circular, rotational, and spiral-shaped curves.

Easy way to remember: Polar coordinates are like giving directions using a compass—turn to a certain angle, then walk a certain distance.
  `,
  examples: [
    "(4, 30°) → Cartesian: (2√3, 2)",
    "(3, 4) → Polar: (5, 53.13°)",
    "r = 3 → circle of radius 3 centered at pole",
    "r = θ → spiral",
    "r = 3 cos(2θ) → four-petal rose",
    "r = 1 + cos θ → cardioid",
    "Area of r = 2 from θ = 0 to 2π: A = 4π",
  ],
};

export default topic;