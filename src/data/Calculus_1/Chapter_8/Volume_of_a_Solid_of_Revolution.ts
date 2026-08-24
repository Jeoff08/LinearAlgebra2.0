// filename: volume-of-a-solid-of-revolution.ts

const topic = {
  id: "volume-of-a-solid-of-revolution",
  title: "Volume of a Solid of Revolution",
  summary:
    "A three-dimensional object formed by rotating a two-dimensional region around a line or axis, with volume calculated using the Disk Method, Washer Method, or Shell Method.",
  details: `
A solid of revolution is a three-dimensional object formed when a two-dimensional region is rotated around a line or axis.

For example, imagine rotating a region under a curve around the x-axis. As the region spins, it creates a three-dimensional solid.

Common examples of solids of revolution include shapes similar to:
  • Cylinders
  • Cones
  • Spheres
  • Bowls
  • Vases
  • Hollow tubes

Calculus allows us to find the exact volume of these solids using definite integrals.

The two main methods are:
  • Disk and Washer Method
  • Shell Method

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A SOLID OF REVOLUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have the curve:
  y = f(x)

and the region between the curve and the x-axis.

If we rotate that region around the x-axis, the flat two-dimensional region becomes a three-dimensional solid.

The general idea is:
  2D Region + Rotation = 3D Solid

For example, rotating the region under a curve around an axis can create a shape like this:

  2D Region                 Rotation                3D Solid

      y                                                ______
      |       /                                      /      \
      |      /            →                       /          \
      |     /                                  |              |
  ----|----/--------- x                          \          /
                                                 \______/

The amount of space inside the resulting three-dimensional object is called its volume.

Volume is measured in cubic units:
  cm³, m³, ft³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Calculus finds volume by dividing a solid into many extremely thin pieces.

Each small piece has a tiny volume:
  dV

Then we add all the tiny volumes together:
  V = ∫ dV

The method used depends on the shape of the small pieces:
  • Circular disks
  • Washers
  • Cylindrical shells

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DISK METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Disk Method is used when rotating a region around an axis creates solid circular cross-sections with no holes.

Imagine slicing the solid into many thin circular disks.

The volume of one disk is:
  Volume = Area of Circle × Thickness

The area of a circle is:
  A = πr²

Therefore:
  dV = πr² dx

Adding all the disks:
  V = π ∫ₐᵇ [r(x)]² dx

where:
  r(x) = radius of each disk
  a and b = limits of integration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: DISK METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the volume generated when the region under y = x from x = 0 to x = 2 is rotated around the x-axis.

The radius of each disk is the distance from the curve to the x-axis:
  r = x

Using the Disk Method:
  V = π ∫₀² x² dx

Integrate:
  V = π [x³/3]₀²
  V = π(8/3)

Therefore:
  V = 8π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE SQUARE THE RADIUS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula contains r² because each cross-section is a circle.

The area of a circle is:
  A = πr²

For every tiny slice, we calculate the circular area first, then multiply by the thickness.

So:
  Volume = Cross-sectional Area × Thickness

Integration adds all those thin circular volumes together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Washer Method is used when the solid has a hole in the middle.

Instead of a solid disk, each cross-section looks like a washer.

A washer looks like this:

       _____________
     /               \
    |      _____      |
    |     /     \     |
    |     \_____/     |
     \_______________/

It has:
  • An outer radius R
  • An inner radius r

The area of the washer is:
  A = πR² - πr²

Factor out π:
  A = π(R² - r²)

Therefore, the volume is:
  V = π ∫ₐᵇ [R(x)² - r(x)²] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region between y = 2 and y = x from x = 0 to x = 2 is rotated around the x-axis.

The outer radius is:
  R = 2

The inner radius is:
  r = x

Therefore:
  V = π ∫₀² (2² - x²) dx

Simplify:
  V = π ∫₀² (4 - x²) dx

Integrate:
  V = π [4x - x³/3]₀²

Substitute:
  V = π (8 - 8/3)
  V = π (24/3 - 8/3)
  V = 16π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ROTATION AROUND THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region is rotated around the y-axis.

You may use disks or washers with respect to y.

The formula becomes:
  V = π ∫꜀ᵈ [R(y)² - r(y)²] dy

For a solid disk:
  V = π ∫꜀ᵈ [R(y)]² dy

When using dy, the functions often need to be written in terms of y:
  x = f(y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE SHELL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shell Method uses thin cylindrical shells instead of disks.

Imagine wrapping the solid with many thin hollow cylinders.

The volume of a thin shell is approximately:
  Volume = 2π(radius)(height)(thickness)

Therefore:
  dV = 2π r h dx

The general formula is:
  V = 2π ∫ₐᵇ (radius)(height) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SHELL METHOD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region under y = x from x = 0 to x = 2 is rotated around the y-axis.

Using vertical shells:

Radius:
  The distance from x to the y-axis is:
    r = x

Height:
  The height of the region is:
    h = x

Therefore:
  V = 2π ∫₀² x(x) dx
  V = 2π ∫₀² x² dx

Integrate:
  V = 2π [x³/3]₀²
  V = 2π(8/3)

Therefore:
  V = 16π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CHOOSING THE CORRECT METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choosing the correct method can make a problem much easier.

Use the Disk Method When:
  • There is no hole in the solid.
  • Cross-sections are solid circles.
  • The region touches the axis of rotation.

Formula:
  V = π ∫ₐᵇ [r(x)]² dx

Use the Washer Method When:
  • There is a hole in the solid.
  • Cross-sections look like rings or washers.
  • You need an outer radius and inner radius.

Formula:
  V = π ∫ₐᵇ [R(x)² - r(x)²] dx

Use the Shell Method When:
  • Thin slices parallel to the axis of rotation are easier.
  • The solid can be represented using cylindrical shells.
  • Using washers would require complicated algebra.

Formula:
  V = 2π ∫ₐᵇ (radius)(height) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ROTATION AROUND DIFFERENT AXES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The axis of rotation is very important because it determines the radius.

Rotation Around the x-Axis:
  The radius is usually a vertical distance:
    r = y = f(x)

  Example:
    V = π ∫ₐᵇ [f(x)]² dx

Rotation Around the y-Axis:
  The radius is usually a horizontal distance:
    r = x

  Example using shells:
    V = 2π ∫ₐᵇ x f(x) dx

Rotation Around y = k:
  If the axis of rotation is y = k, the radius is the distance between the curve and the line y = k.

  For example:
    r = |f(x) - k|

Rotation Around x = k:
  If the axis is x = k, the radius is the horizontal distance from the curve to x = k.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPT: RADIUS IS ALWAYS A DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important things to remember is:
  Radius = Distance from the Region to the Axis of Rotation

For example, if rotating around y = 3 and a curve is y = x², the radius may be:
  R = 3 - x²

depending on which side of the axis the curve lies.

Always visualize or sketch the graph before creating the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GENERAL STEPS FOR SOLVING VOLUME PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Draw or Analyze the Region
  Identify:
    • The curves
    • The boundaries
    • The axis of rotation

Step 2: Choose a Method
  Decide between:
    • Disk
    • Washer
    • Shell

Step 3: Determine the Radius
  Remember: Radius = Distance to the Axis of Rotation

Step 4: Determine the Height
  For shells:
    Height = Top - Bottom
  or:
    Height = Right - Left
  depending on the direction.

Step 5: Set Up the Integral
  For disks:
    V = π ∫ r² dx

  For washers:
    V = π ∫ (R² - r²) dx

  For shells:
    V = 2π ∫ r h dx

Step 6: Evaluate the Integral
  Find the antiderivative and apply the limits.

Step 7: Write the Answer in Cubic Units
  Examples: cm³, m³, ft³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Disk Method:
    V = π ∫ₐᵇ [r(x)]² dx

  Washer Method:
    V = π ∫ₐᵇ [R(x)² - r(x)²] dx

  Shell Method:
    V = 2π ∫ₐᵇ (radius)(height) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • A solid of revolution is created by rotating a two-dimensional region around an axis.
  • The result is a three-dimensional object.
  • Volume measures the amount of space inside the solid.
  • Disk Method is used for solid circular cross-sections.
  • Washer Method is used when there is a hole.
  • Shell Method uses cylindrical shells.
  • The radius is always the distance from the region to the axis of rotation.
  • The axis of rotation determines how the integral is set up.
  • Volume is always measured in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Volume of a Solid of Revolution is found by rotating a two-dimensional region around a line or axis and using integration to calculate the space inside the resulting three-dimensional solid.

The three major formulas are:

  V = π ∫ r² dx
for the Disk Method,

  V = π ∫ (R² - r²) dx
for the Washer Method, and

  V = 2π ∫ r h dx
for the Shell Method.

The most important steps are:

  Analyze the Region → Identify the Axis → Choose a Method → Find Radius/Height → Integrate

The key idea to always remember is:

  Volume is built by adding infinitely many tiny pieces of the solid.
  `,
  examples: [
    "Disk Method: y = x from 0 to 2 around x-axis → V = 8π/3",
    "Washer Method: y = 2 and y = x from 0 to 2 around x-axis → V = 16π/3",
    "Shell Method: y = x from 0 to 2 around y-axis → V = 16π/3",
    "Disk Method: V = π ∫ r² dx",
    "Washer Method: V = π ∫ (R² - r²) dx",
    "Shell Method: V = 2π ∫ r h dx",
    "Radius = distance from region to axis of rotation",
  ],
};

export default topic;