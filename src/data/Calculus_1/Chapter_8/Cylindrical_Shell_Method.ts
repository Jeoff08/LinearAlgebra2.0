// filename: cylindrical-shell-method.ts

const topic = {
  id: "cylindrical-shell-method",
  title: "Cylindrical-Shell Method",
  summary:
    "A technique in integral calculus used to find the volume of a solid of revolution by dividing the solid into thin hollow cylindrical shells, using the formula V = 2π ∫ r h dx.",
  details: `
The Cylindrical-Shell Method is a technique in integral calculus used to find the volume of a solid of revolution. Instead of slicing the solid into disks or washers, this method imagines the solid as being made up of many thin, hollow cylindrical shells.

The basic idea is:

  Divide the region into thin strips, rotate each strip around an axis, 
  form thin cylindrical shells, and add their volumes using integration.

The general formula is:
  V = 2π ∫ (radius)(height)(thickness)

For example, when using vertical shells:
  V = 2π ∫ₐᵇ r(x)h(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CYLINDRICAL SHELL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A cylindrical shell is like a very thin hollow cylinder.

Imagine the outside layer of a soda can or pipe.

A shell has:
  • Radius r
  • Height h
  • Thickness dx or dy

It can be visualized as:

        _____________
      /             \\
     /               \\
    |                 |  ← Thin cylindrical shell
    |                 |
    |                 |
     \\               /
      \\_____________/

When many thin shells are placed together, they form the complete solid.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND THE SHELL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a thin shell can be approximated by:
  Volume = Circumference × Height × Thickness

The circumference of a circle is:
  C = 2πr

Therefore:
  dV = (2πr)(h)(thickness)

If the thickness is dx, then:
  dV = 2πrh dx

Adding infinitely many shells gives:
  V = 2π ∫ₐᵇ r(x)h(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHERE DOES THE FORMULA COME FROM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shell Method formula can be understood step by step.

A thin cylindrical shell is like a thin rectangular sheet wrapped into a circle.

Imagine a rectangle with:
  • Length = circumference: 2πr
  • Height = h
  • Thickness = dx

The approximate volume is:
  Volume = (2πr)(h)(dx)

Therefore:
  dV = 2πrh dx

Now add all the tiny shells:
  V = ∫ dV

So:
  V = 2π ∫ₐᵇ rh dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RADIUS, HEIGHT, AND THICKNESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shell Method has three very important components.

Radius:
  The radius is:
    Distance from the strip to the axis of rotation

  For example, if rotating around the y-axis:
    r = x
  because the distance from a vertical strip at x to the y-axis is x.

Height:
  The height is the length of the strip.

  When using vertical strips:
    h = Top Function - Bottom Function

  When using horizontal strips:
    h = Right Function - Left Function

Thickness:
  The thickness is extremely small: dx or dy.
  The variable used depends on the direction of the slices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: ROTATING AROUND THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the volume generated when the region under y = x from x = 0 to x = 2 is rotated around the y-axis.

Step 1: Choose the Shell Method
  The region is rotated around the y-axis.
  We use vertical strips, which are parallel to the axis of rotation.
  When rotated, each strip creates a cylindrical shell.

Step 2: Find the Radius
  The distance from the vertical strip at x to the y-axis is:
    r = x

Step 3: Find the Height
  The region extends from y = 0 to y = x.
  Therefore:
    h = x

Step 4: Set Up the Integral
  The formula is:
    V = 2π ∫ₐᵇ rh dx

  Substitute:
    V = 2π ∫₀² x(x) dx

  Simplify:
    V = 2π ∫₀² x² dx

Step 5: Integrate
  V = 2π [x³/3]₀²
  V = 2π (8/3)

Therefore:
  V = 16π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES THE SHELL METHOD WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine taking a very thin vertical rectangle from the region.

When the rectangle rotates around the y-axis, it forms a hollow cylinder.

Before Rotation:

        y
        |
        |       █
        |       █ ← Thin strip
        |       █
--------|---------------- x

After Rotation:

         _________
       /           \\
      |             |
      |             |
       \\___________/

Each strip creates one cylindrical shell.

The shell's:
  • Radius = distance from the strip to the axis
  • Height = height of the strip
  • Thickness = width of the strip

By adding the volumes of all shells, we obtain the entire volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SHELL METHOD AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When rotating around the x-axis, we usually use horizontal strips.

Therefore, we integrate with respect to dy.

The formula becomes:
  V = 2π ∫꜀ᵈ r(y)h(y) dy

The radius is the vertical distance from the horizontal strip to the x-axis.

The height is the horizontal length of the strip.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: ROTATION AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region is bounded by x = y and x = 2 from y = 0 to y = 2, and is rotated around the x-axis.

Step 1: Find the Radius
  The distance from the horizontal strip to the x-axis is:
    r = y

Step 2: Find the Height
  The horizontal length is: Right - Left
  Therefore:
    h = 2 - y

Step 3: Set Up the Integral
  V = 2π ∫₀² y(2 - y) dy

Expand:
  V = 2π ∫₀² (2y - y²) dy

Step 4: Integrate
  V = 2π [y² - y³/3]₀²

Substitute:
  V = 2π (4 - 8/3)
  V = 2π (4/3)

Therefore:
  V = 8π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHOOSING THE DIRECTION OF THE STRIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important rule for the Shell Method is:

  Shell slices are parallel to the axis of rotation

Rotating Around the y-Axis:
  Use vertical strips: dx
  because vertical strips are parallel to the y-axis.

         y-axis
            │
            │
            │
            █ ← Vertical strip
            █
            │

Rotating Around the x-Axis:
  Use horizontal strips: dy
  because horizontal strips are parallel to the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SHELL METHOD VS. DISK AND WASHER METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three methods solve the same type of problem but divide the solid differently.

  Method          |  Small Piece              |  Main Formula
  ─────────────────┼───────────────────────────┼───────────────────────────
  Disk Method     |  Solid circular disk      |  π ∫ r²
  Washer Method   |  Circular ring            |  π ∫ (R² - r²)
  Shell Method    |  Hollow cylindrical shell  |  2π ∫ r h

Disk Method:
  V = π ∫ r² dx

Washer Method:
  V = π ∫ (R² - r²) dx

Shell Method:
  V = 2π ∫ r h dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN SHOULD YOU USE THE SHELL METHOD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shell Method is especially useful when:

1. The Strips Parallel to the Axis Are Easier
  For example, if rotating around the y-axis and the functions are already written as y = f(x), using vertical strips and dx may be easier.

2. The Washer Method Requires Solving for Another Variable
  Suppose y = x² and the region is rotated around the y-axis.
  Using washers might require rewriting the equation as x = √y.
  The Shell Method can avoid this.

3. The Region Has a Complicated Shape
  Sometimes the Shell Method produces only one simple integral while the Washer Method requires multiple integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ROTATION AROUND OTHER LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The axis of rotation does not have to be the x-axis or y-axis.

Rotation Around x = k:
  If the axis is x = k, the radius is the horizontal distance:
    r = |x - k|

  For example, if rotating around x = 5 and the strip is located at x, then:
    r = 5 - x
  if the strip is to the left of the axis.

Rotation Around y = k:
  If the axis is y = k, the radius is the vertical distance:
    r = |y - k|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL STEPS FOR SOLVING SHELL METHOD PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Draw or Analyze the Region
  Identify:
    • The curves
    • The boundaries
    • The axis of rotation

Step 2: Choose Strips Parallel to the Axis
  Remember: Shell slices are parallel to the axis
  Vertical axis → vertical strips → dx
  Horizontal axis → horizontal strips → dy

Step 3: Find the Radius
  r = Distance from Strip to Axis

Step 4: Find the Height
  For vertical strips:
    h = Top - Bottom

  For horizontal strips:
    h = Right - Left

Step 5: Set Up the Integral
  V = 2π ∫ r h dx
  or:
  V = 2π ∫ r h dy
  depending on the direction.

Step 6: Integrate
  Multiply radius and height, then integrate.

Step 7: Apply the Limits
  Evaluate: F(b) - F(a)

Step 8: Write the Answer in Cubic Units
  units³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Forgetting the 2π
  Incorrect:
    V = ∫ r h dx
  Correct:
    V = 2π ∫ r h dx

2. Using the Wrong Radius
  The radius is always the distance from the strip to the axis.
  For rotation around the y-axis: r = x
  For rotation around x = 5: r = |x - 5|

3. Using the Wrong Height
  For vertical strips: h = Top - Bottom
  For horizontal strips: h = Right - Left

4. Using Slices Perpendicular to the Axis
  That is usually for the Disk or Washer Method.
  For shells: Slices must be parallel to the axis

5. Forgetting Cubic Units
  The final answer is volume: units³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Vertical Shells:
    V = 2π ∫ₐᵇ r(x)h(x) dx

  Horizontal Shells:
    V = 2π ∫꜀ᵈ r(y)h(y) dy

  Radius:
    r = Distance from Strip to Axis

  Height:
    Vertical strips: h = Top - Bottom
    Horizontal strips: h = Right - Left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • The Cylindrical-Shell Method finds the volume of a solid of revolution.
  • The solid is divided into thin hollow cylindrical shells.
  • The shell volume comes from: Circumference × Height × Thickness
  • Circumference: 2πr
  • Main formula: V = 2π ∫ r h
  • The radius is the distance from the strip to the axis.
  • The height is the length of the strip.
  • Shell slices are parallel to the axis of rotation.
  • Volume is expressed in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Cylindrical-Shell Method is used to find the volume of a solid of revolution by imagining the solid as a collection of infinitely many thin hollow cylinders.

The main formula is:
  V = 2π ∫ (radius)(height) d(variable)

The process is:
  Identify the Axis → Choose Parallel Strips → Find Radius → Find Height → Multiply 2πrh → Integrate

The most important rule is:
  Shell Method = Circumference × Height × Thickness

And always remember:
  Shell slices are parallel to the axis of rotation.
  `,
  examples: [
    "y = x from 0 to 2 around y-axis → V = 2π ∫₀² x² dx = 16π/3",
    "x = y and x = 2 from 0 to 2 around x-axis → V = 2π ∫₀² y(2-y) dy = 8π/3",
    "Shell Method: V = 2π ∫ r h dx",
    "Vertical shells: r = x, h = Top - Bottom",
    "Horizontal shells: r = y, h = Right - Left",
    "Shell slices are parallel to axis of rotation",
    "Circumference = 2πr",
  ],
};

export default topic;