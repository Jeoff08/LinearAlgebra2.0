// filename: circular-disk-method.ts

const topic = {
  id: "circular-disk-method",
  title: "Circular-Disk Method",
  summary:
    "A technique in integral calculus used to find the volume of a solid of revolution by dividing the solid into infinitely many thin circular disks and integrating their volumes.",
  details: `
The Circular-Disk Method is a technique in integral calculus used to find the volume of a solid of revolution. It is used when a two-dimensional region is rotated around an axis and the resulting solid has solid circular cross-sections with no hole in the middle.

The basic idea is simple:

  Divide the solid into many extremely thin circular disks, find the volume of each disk, and add all of them together using integration.

The general idea is:
  Volume = Sum of infinitely many thin disks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CIRCULAR DISK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A circular disk is a solid, thin circular slice.

Imagine slicing a cylinder into very thin pieces:

      __________
    /          \\
   |            |
   |            |
    \\__________/

       One Disk

Each disk has:
  • A circular face
  • A radius r
  • A very small thickness

The volume of a thin disk is approximately:
  Volume of Disk = Area of Circle × Thickness

Since the area of a circle is:
  A = πr²

the volume of one thin disk is:
  dV = πr² dx

When we add infinitely many disks together, we get the volume of the entire solid.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the radius of each disk is r(x), then the volume is:
  V = π ∫ₐᵇ [r(x)]² dx

Where:
  V = Volume of the solid
  r(x) = Radius of each circular disk
  a = Starting value
  b = Ending value
  dx = Thickness of each thin disk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HOW THE METHOD WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a region is bounded by y = f(x) and the x-axis.

If the region is rotated around the x-axis, it forms a three-dimensional solid.

Each vertical slice becomes a circular disk.

The process is:
  Vertical Slice → Rotate Around Axis → Circular Disk

A tiny slice has:
  Radius: r = f(x)
  Thickness: dx
  Cross-sectional Area: A(x) = π[f(x)]²

Therefore:
  dV = π[f(x)]² dx

Adding all the disks:
  V = π ∫ₐᵇ [f(x)]² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VISUALIZING THE CIRCULAR-DISK METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the curve is y = f(x) and the region below it is rotated around the x-axis.

Before Rotation:

       y
       |
       |       •
       |      /
       |     /
       |    /
-------|---------------- x
       a                b

When rotated around the x-axis:

          Rotation

             →

        ______________
      /                \\
     |    ○  ○  ○  ○    |
      \\________________/

The solid can be imagined as a stack of infinitely many circular disks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE πr²?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cross-section of the solid is a circle.

The area of a circle is:
  A = πr²

For each thin slice:
  Volume = Circular Area × Thickness

Therefore:
  dV = πr² dx

Integration adds all the thin volumes:
  V = ∫ₐᵇ dV

Substitute dV:
  V = π ∫ₐᵇ r² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: ROTATING AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the volume generated when the region under y = x from x = 0 to x = 3 is rotated around the x-axis.

Step 1: Identify the Radius
  The distance from the curve y = x to the x-axis is:
    r = x

Step 2: Write the Formula
  V = π ∫ₐᵇ r² dx

  Substitute:
    V = π ∫₀³ x² dx

Step 3: Integrate
  The antiderivative of x² is x³/3.

  Therefore:
    V = π [x³/3]₀³

Step 4: Apply the Limits
  V = π (3³/3 - 0³/3)
  V = π (27/3)
  V = 9π

Therefore:
  9π cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 2: USING A CURVED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the volume generated when y = √x from x = 0 to x = 4 is rotated around the x-axis.

Step 1: Identify the Radius
  Since the region is rotated around the x-axis:
    r = √x

Step 2: Set Up the Integral
  V = π ∫₀⁴ (√x)² dx

  Since (√x)² = x, we get:
    V = π ∫₀⁴ x dx

Step 3: Integrate
  V = π [x²/2]₀⁴

Step 4: Apply the Limits
  V = π (16/2 - 0)
  V = 8π

Therefore:
  V = 8π cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CIRCULAR-DISK METHOD USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Circular-Disk Method can also use horizontal slices.

Suppose the region is rotated around the y-axis.

Instead of dx, we use dy.

The formula becomes:
  V = π ∫꜀ᵈ [r(y)]² dy

In this situation:
  • The radius is usually expressed in terms of y.
  • The functions may need to be rewritten as: x = f(y)

Example:
  Suppose x = √y from y = 0 to y = 4 is rotated around the y-axis.

  The radius is:
    r = √y

  Therefore:
    V = π ∫₀⁴ (√y)² dy
    V = π ∫₀⁴ y dy
    V = π [y²/2]₀⁴
    V = 8π

  Therefore:
    V = 8π cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHEN CAN YOU USE THE CIRCULAR-DISK METHOD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Circular-Disk Method is appropriate when:

1. The Region Touches the Axis of Rotation
  For example: y = f(x) and the region extends all the way to y = 0.
  When rotated, the center is completely filled.

2. The Cross-Sections Are Solid Circles
  The cross-section should look like:
       _________
     /           \\
    |             |
     \\___________/
  not like a ring.

3. There Is No Hole in the Solid
  If there is a hole, you should usually use the Washer Method instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CIRCULAR-DISK METHOD VS. WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two methods are very similar.

  Circular-Disk Method     |  Washer Method
  ──────────────────────────┼─────────────────────────────────
  No hole                   |  Has a hole
  One radius                |  Two radii
  Solid circular cross-section |  Ring-shaped cross-section
  V = π ∫ r² dx            |  V = π ∫ (R² - r²) dx

Disk:
  V = π ∫ r² dx

Washer:
  V = π ∫ (R² - r²) dx

The Circular-Disk Method can actually be considered a special case of the Washer Method where r = 0.

Then:
  V = π (R² - 0²)

which becomes:
  V = πR²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CHOOSING THE CORRECT DIRECTION OF SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful rule is:
  The slices used for the Disk Method are usually perpendicular to the axis of rotation.

Rotating Around the x-Axis:
  Use vertical slices: dx
  x-axis → ————————————————
          │
          │ vertical slice
          │

Rotating Around the y-Axis:
  Use horizontal slices: dy
          y-axis
            │
  ——————————│——————————————
            │ horizontal slice

This creates circular disks perpendicular to the axis of rotation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL STEPS FOR SOLVING DISK METHOD PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Sketch or Analyze the Region
  Identify:
    • The function
    • The boundaries
    • The axis of rotation

Step 2: Determine the Radius
  Remember:
    Radius = Distance from the Curve to the Axis of Rotation

  For rotation around the x-axis:
    r = f(x)

  For rotation around the y-axis:
    r = f(y)
  depending on how the function is written.

Step 3: Determine the Limits
  Find where the region starts and ends.
  For example: a = 0, b = 3

Step 4: Write the Integral
  V = π ∫ₐᵇ [r(x)]² dx

Step 5: Integrate
  Find the antiderivative.

Step 6: Apply the Limits
  Calculate: F(b) - F(a)

Step 7: Write the Final Answer
  Volume must be expressed in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Forgetting to Square the Radius
  Incorrect:
    V = π ∫ r dx
  Correct:
    V = π ∫ r² dx

2. Using the Function Directly Without Checking the Radius
  Always ask: What is the distance from the curve to the axis of rotation?
  The radius may not always be simply f(x).

3. Using the Disk Method When There Is a Hole
  If the solid has an empty space in the middle, use:
    V = π ∫ (R² - r²) dx
  instead.

4. Using the Wrong Variable
  Around the x-axis → usually use dx
  Around the y-axis → usually use dy
  The slices should be perpendicular to the axis when using disks.

5. Forgetting Cubic Units
  Area is measured in square units: units²
  But volume is measured in cubic units: units³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rotating Around the x-Axis:
    V = π ∫ₐᵇ [f(x)]² dx

  Rotating Around the y-Axis:
    V = π ∫꜀ᵈ [f(y)]² dy

  General Disk Formula:
    V = ∫ₐᵇ π[r(x)]² dx
  or:
    V = ∫꜀ᵈ π[r(y)]² dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • The Circular-Disk Method finds the volume of a solid of revolution.
  • The solid is divided into infinitely many thin circular disks.
  • Each disk has volume: dV = πr² dx
  • The radius is the distance from the curve to the axis of rotation.
  • The main formula is: V = π ∫ₐᵇ r² dx
  • Use the method when there is no hole in the solid.
  • The slices are perpendicular to the axis of rotation.
  • Always square the radius.
  • The final answer is in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Circular-Disk Method is used to find the volume of a three-dimensional solid formed by rotating a region around an axis. The solid is imagined as being made of infinitely many thin circular disks.

The main formula is:
  V = π ∫ₐᵇ [r(x)]² dx

The process is:
  Identify the Axis → Find the Radius → Square the Radius → Set Up the Integral → Integrate

The most important idea to remember is:
  Radius = Distance from the Curve to the Axis of Rotation

and the Disk Method should be used when the resulting cross-sections are solid circles with no hole.
  `,
  examples: [
    "y = x from 0 to 3 around x-axis → V = π ∫₀³ x² dx = 9π",
    "y = √x from 0 to 4 around x-axis → V = π ∫₀⁴ x dx = 8π",
    "x = √y from 0 to 4 around y-axis → V = π ∫₀⁴ y dy = 8π",
    "Disk Method: V = π ∫ r² dx",
    "Slices perpendicular to axis of rotation",
    "No hole in the solid",
    "Radius = distance from curve to axis",
  ],
};

export default topic;