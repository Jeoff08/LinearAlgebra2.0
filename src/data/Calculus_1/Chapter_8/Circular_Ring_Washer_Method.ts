// filename: circular-ring-washer-method.ts

const topic = {
  id: "circular-ring-washer-method",
  title: "Circular-Ring / Washer Method",
  summary:
    "A technique in integral calculus used to find the volume of a solid of revolution with a hole in the middle, using ring-shaped cross-sections with outer and inner radii.",
  details: `
The Circular-Ring Method, more commonly called the Washer Method, is a technique in integral calculus used to find the volume of a solid of revolution.

It is used when a two-dimensional region is rotated around an axis and the resulting solid has a hole in the middle.

Unlike the Circular-Disk Method, where each cross-section is a solid circle, the Washer Method produces cross-sections that look like a ring or washer.

The main idea is:

  Find the area of each thin circular ring, then add all the rings together using integration.

The general formula is:
  V = π ∫ₐᵇ [R(x)² - r(x)²] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CIRCULAR RING OR WASHER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A washer is a circular shape with a hole in the center.

It looks similar to:

        _____________
      /               \\
     /                 \\
    |       _____       |
    |      /     \\      |
    |      \\_____/      |
     \\                 /
      \\_______________/

A washer has two important radii:

Outer Radius R:
  The distance from the axis of rotation to the outer boundary.

Inner Radius r:
  The distance from the axis of rotation to the inner boundary.

Because there is a hole, we subtract the smaller circular area from the larger circular area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND THE WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area of a large circle is:
  A_outer = πR²

The area of the smaller hole is:
  A_inner = πr²

Therefore, the area of the washer is:
  A = πR² - πr²

Factor out π:
  A = π(R² - r²)

Each washer has a very small thickness, such as dx.

Therefore, the small volume is:
  dV = π(R² - r²) dx

Adding infinitely many washers gives:
  V = π ∫ₐᵇ (R² - r²) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE SUBTRACT THE INNER CIRCLE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a large circular disk:
  Outer Area = πR²

Now imagine cutting a smaller circle out of its center:
  Hole Area = πr²

The remaining area is:
  Washer Area = Outer Circle Area - Inner Circle Area

Therefore:
  A = π(R² - r²)

This is the most important concept in the Washer Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DISK METHOD VS. WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two methods are closely related.

  Circular-Disk Method       |  Circular-Ring / Washer Method
  ────────────────────────────┼───────────────────────────────────────────
  No hole                     |  Has a hole
  Solid circle                |  Ring-shaped circle
  One radius                  |  Two radii
  V = π ∫ r² dx              |  V = π ∫ (R² - r²) dx

Disk Method:
  V = π ∫ r² dx

Washer Method:
  V = π ∫ (R² - r²) dx

The Disk Method is actually a special case of the Washer Method where r = 0.

Then:
  R² - r² = R²

So the washer becomes a solid disk.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: ROTATING AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the volume generated when the region between y = 2 and y = x from x = 0 to x = 2 is rotated around the x-axis.

Step 1: Identify the Axis of Rotation
  The region is rotated around the x-axis.
  The radius is measured vertically from the x-axis.

Step 2: Identify the Outer Radius
  The upper curve is y = 2.
  The distance from the x-axis to y = 2 is:
    R = 2
  This is the outer radius.

Step 3: Identify the Inner Radius
  The lower curve is y = x.
  The distance from the x-axis to the curve is:
    r = x
  This is the inner radius.

Step 4: Set Up the Integral
  The Washer Method formula is:
    V = π ∫ₐᵇ (R² - r²) dx

  Substitute the values:
    V = π ∫₀² (2² - x²) dx

  Simplify:
    V = π ∫₀² (4 - x²) dx

Step 5: Integrate
  V = π [4x - x³/3]₀²

Step 6: Apply the Limits
  Substitute x = 2:
    4(2) - 2³/3 = 8 - 8/3

  Substitute x = 0:
    0

  Therefore:
    V = π (8 - 8/3)
    V = π (24/3 - 8/3)
    V = 16π/3

Therefore:
  V = 16π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. UNDERSTANDING OUTER RADIUS AND INNER RADIUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important question in the Washer Method is:

  Which distance is the outer radius, and which distance is the inner radius?

Always remember:
  R = Farthest distance from the axis
  r = Closest distance from the axis

For example, if the axis of rotation is the x-axis:

        y=5
        ----------------  ← Farther curve

              ↑
              | R
              ↓

        y=2
        ----------------  ← Closer curve

              ↑
              | r
              ↓

================================
             x-axis

Therefore:
  Farther curve → Outer Radius
  Closer curve → Inner Radius

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ROTATING AROUND THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When rotating around the y-axis, you often use horizontal slices.

The formula becomes:
  V = π ∫꜀ᵈ [R(y)² - r(y)²] dy

In this case:
  The radius is measured horizontally.
  Functions are often written as: x = f(y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: WASHER METHOD USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region is between x = 4 and x = y from y = 0 to y = 4, and is rotated around the y-axis.

Step 1: Find the Outer Radius
  The curve x = 4 is farther from the y-axis.
  Therefore: R = 4

Step 2: Find the Inner Radius
  The curve x = y is closer to the y-axis.
  Therefore: r = y

Step 3: Set Up the Integral
  V = π ∫₀⁴ (4² - y²) dy
  V = π ∫₀⁴ (16 - y²) dy

Step 4: Integrate
  V = π [16y - y³/3]₀⁴

Substitute:
  V = π (64 - 64/3)
  V = π (192/3 - 64/3)
  V = 128π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROTATION AROUND OTHER LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The axis of rotation does not always have to be the x-axis or y-axis.

You may rotate around a line such as:
  y = 3
or:
  x = 2

In these cases, you must carefully calculate the distance from the curve to the axis.

Rotation Around y = k:
  If the axis of rotation is y = k, the radius is a vertical distance.

  For a curve y = f(x), the distance is:
    |f(x) - k|

  For example, if the curve is y = x² and the axis is y = 5, the distance may be:
    5 - x²

  depending on the region's position relative to the axis.

Rotation Around x = k:
  If the axis is x = k, the radius is a horizontal distance.

  For a curve x = f(y), the distance is:
    |f(y) - k|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY IS SKETCHING IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Washer Method can become confusing if you do not know which curve is farther from the axis.

A rough sketch helps you identify:
  • The axis of rotation
  • The outer radius
  • The inner radius
  • The boundaries of the region
  • The correct direction of slicing

For example, always ask:
  Which curve is farther from the axis?
  That distance is R.

Then ask:
  Which curve is closer to the axis?
  That distance is r.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CHOOSING dx OR dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful rule is:
  For the Washer Method, slices are generally perpendicular to the axis of rotation.

Rotating Around the x-Axis:
  Use vertical slices: dx
  The washers are stacked from left to right.

Rotating Around the y-Axis:
  Use horizontal slices: dy
  The washers are stacked from bottom to top.

Rotating Around a Horizontal Line:
  Example: y = 3
  Use vertical slices: dx

Rotating Around a Vertical Line:
  Example: x = 2
  Use horizontal slices: dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL STEPS FOR SOLVING WASHER METHOD PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Draw or Analyze the Region
  Identify:
    • The curves
    • The boundaries
    • The axis of rotation

Step 2: Determine the Direction of the Slice
  Choose slices perpendicular to the axis.
    Horizontal axis → usually dx
    Vertical axis → usually dy

Step 3: Find the Outer Radius
  R = Distance from Axis to Farther Boundary

Step 4: Find the Inner Radius
  r = Distance from Axis to Closer Boundary

Step 5: Write the Formula
  V = π ∫ₐᵇ (R² - r²) dx
  or:
  V = π ∫꜀ᵈ (R² - r²) dy

Step 6: Simplify the Expression
  Square both radii first.
  For example:
    (2)² - x² becomes 4 - x²

Step 7: Integrate
  Find the antiderivative and apply the limits.

Step 8: Write the Final Answer
  Volume is always expressed in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Forgetting to Square the Radii
  Incorrect:
    V = π ∫ (R - r) dx
  Correct:
    V = π ∫ (R² - r²) dx

2. Reversing Outer and Inner Radius
  Incorrect:
    r² - R²
  This may give a negative volume.
  Correct:
    R² - r²
  Always use: Outer² - Inner²

3. Measuring the Radius Incorrectly
  The radius is always the distance to the axis of rotation, not simply the value of the function.

  If the axis is y = 5 and the curve is y = x², the radius may be:
    5 - x²
  rather than simply x².

4. Using the Wrong Variable
  Remember:
    Horizontal axis → usually dx
    Vertical axis → usually dy

5. Forgetting Cubic Units
  The final answer represents volume: units³, not units².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Washer Method Using dx:
    V = π ∫ₐᵇ [R(x)² - r(x)²] dx

  Washer Method Using dy:
    V = π ∫꜀ᵈ [R(y)² - r(y)²] dy

  Outer Radius:
    R = Distance from Axis to Farther Curve

  Inner Radius:
    r = Distance from Axis to Closer Curve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • The Circular-Ring Method is also called the Washer Method.
  • It is used to find the volume of a solid of revolution with a hole.
  • Each cross-section is a circular ring.
  • There are two radii:
    R = Outer Radius
    r = Inner Radius
  • The area of a washer is: π(R² - r²)
  • The volume formula is: V = π ∫ (R² - r²)
  • The radii are measured from the axis of rotation.
  • Always subtract: Outer² - Inner²
  • Volume is expressed in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Circular-Ring / Washer Method is used to find the volume of a solid created by rotating a region around an axis when the resulting solid has a hole in the center.

The process is:
  Find Outer Radius → Find Inner Radius → Square Both → Subtract → Integrate

The main formula is:
  V = π ∫ₐᵇ (R² - r²) dx
or:
  V = π ∫꜀ᵈ (R² - r²) dy

The most important rule to remember is:
  Washer Area = Outer Circle Area - Inner Circle Area

So whenever you see a solid of revolution with a hole in the middle, think:
  Washer Method = Outer² - Inner²
  `,
  examples: [
    "Region between y=2 and y=x from 0 to 2 around x-axis → V = π ∫₀² (4 - x²) dx = 16π/3",
    "Region between x=4 and x=y from 0 to 4 around y-axis → V = π ∫₀⁴ (16 - y²) dy = 128π/3",
    "Washer Method: V = π ∫ (R² - r²) dx",
    "Outer radius = farther from axis, inner radius = closer to axis",
    "Always use: Outer² - Inner²",
    "Slices perpendicular to axis of rotation",
    "Disk Method is special case of Washer Method when r = 0",
  ],
};

export default topic;