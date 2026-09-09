// filename: cylindrical-shell-method.ts

const topic = {
  id: "cylindrical-shell-method",
  title: "Cylindrical-Shell Method",
  summary:
    "A technique in integral calculus used to find the volume of a solid of revolution by dividing the solid into thin hollow cylindrical shells, using the formula V = 2π ∫ r h dx.",
  details: `
The Cylindrical-Shell Method is a technique in integral calculus used to find the volume of a solid of revolution. Instead of slicing the solid into disks or washers, this method imagines the solid as being made up of many thin, hollow cylindrical shells. The basic idea is to divide the region into thin strips, rotate each strip around an axis, form thin cylindrical shells, and add their volumes using integration. The general formula is V = 2π ∫ (radius)(height)(thickness). For example, when using vertical shells, V = 2π ∫ₐᵇ r(x)h(x) dx. This method is particularly useful when the axis of rotation is parallel to the strips and when the Washer Method would require complicated algebraic manipulations. Understanding the Shell Method provides an alternative perspective on volumes of revolution and is a valuable tool in the calculus toolkit.

The general formula is:
  V = 2π ∫ (radius)(height)(thickness)

For example, when using vertical shells:
  V = 2π ∫ₐᵇ r(x)h(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CYLINDRICAL SHELL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A cylindrical shell is like a very thin hollow cylinder, similar to the outer layer of a soda can or a pipe. It has a radius r, a height h, and a very small thickness dx or dy. When many of these thin shells are placed together concentrically, they form the complete solid of revolution. The shell method works by taking a thin vertical or horizontal strip from the region and rotating it around an axis. The resulting shape is a hollow cylinder, and its volume is approximately the circumference of the cylinder times its height times its thickness. This geometric interpretation makes the Shell Method intuitive: we are essentially wrapping the region around the axis, layer by layer, like rolling a piece of paper into a tube. Each shell contributes a small volume, and integrating over all shells gives the total volume of the solid.

It can be visualized as:

"image": "src/assets/8.png",

When many thin shells are placed together, they form the complete solid.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND THE SHELL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a thin shell can be approximated by the product of its circumference, its height, and its thickness. The circumference of a circle is C = 2πr, where r is the radius of the shell. Therefore, the volume of a single shell is dV = (2πr)(h)(thickness). If the thickness is dx (for vertical shells), then dV = 2πrh dx. Adding infinitely many shells over the interval from a to b gives the total volume: V = 2π ∫ₐᵇ r(x)h(x) dx. This formula is remarkably simple and powerful. It avoids the need to consider inner and outer radii separately, which makes it especially useful when the region is bounded by curves that are difficult to invert. The Shell Method essentially integrates the lateral area of each shell along the axis of rotation, accumulating the volume of the entire solid.

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

The Shell Method formula can be understood step by step by thinking of a thin cylindrical shell as a thin rectangular sheet wrapped into a circle. Imagine a rectangle with length equal to the circumference (2πr), height h, and thickness dx. The volume of this rectangular sheet is length × height × thickness, which is (2πr)(h)(dx). When this rectangle is wrapped around the axis, it forms a cylindrical shell with the same volume. Therefore, the volume of the shell is dV = 2πrh dx. Summing all such shells from a to b gives the total volume. This derivation is intuitive because it connects the geometry of a cylinder to the algebra of integration. It also highlights why the Shell Method is sometimes called the "cylindrical shell" method: the shells are exactly the layers that make up the solid, like the rings of an onion.

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

The Shell Method has three very important components: radius, height, and thickness. The radius is the distance from the strip to the axis of rotation. For example, if rotating around the y-axis, the radius of a vertical strip at x is r = x, because the distance from the strip to the y-axis is simply the x-coordinate. If rotating around a line x = k, the radius would be |x - k|. The height is the length of the strip. When using vertical strips, the height is the difference between the top and bottom functions: h = f(x) - g(x). When using horizontal strips, the height is the difference between the right and left functions: h = f(y) - g(y). The thickness is the infinitesimal width of the strip, which is dx for vertical strips and dy for horizontal strips. These three quantities together define the volume of each shell, and correctly identifying them is the key to setting up the integral. Misidentifying the radius or height is a common error, so careful analysis of the region and axis is essential.

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

Let's work through a complete example to see the Shell Method in action. Suppose we want to find the volume generated when the region under y = x from x = 0 to x = 2 is rotated around the y-axis. We choose the Shell Method because the axis of rotation is vertical (the y-axis), and vertical strips are parallel to this axis. Each vertical strip at position x has radius r = x (distance to the y-axis) and height h = x (from y = 0 to y = x). The volume of the shell is dV = 2πrh dx = 2πx(x) dx = 2πx² dx. Integrating from x = 0 to x = 2 gives V = 2π ∫₀² x² dx = 2π [x³/3]₀² = 2π (8/3) = 16π/3. This result is the volume of the solid formed by rotating the triangular region around the y-axis. This example illustrates the straightforward application of the Shell Method when the strips are parallel to the axis of rotation.

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

The Shell Method works because it correctly accounts for the volume contributed by each thin strip when rotated around an axis. Imagine taking a very thin vertical rectangle from the region. When this rectangle rotates around the y-axis, it sweeps out a hollow cylinder a cylindrical shell. The shell's radius is the distance from the strip to the axis, its height is the strip's length, and its thickness is the strip's width. The volume of this shell is approximately the circumference times the height times the thickness. By summing the volumes of all such shells, we obtain the total volume of the solid. The integration process essentially adds up the infinite number of shells, each with infinitesimal thickness, to give an exact volume. This method is particularly powerful because it avoids the need to compute the volume of the hole separately; the shell method naturally accounts for the hollow interior by integrating shells from the inside out. Each shell represents a layer of the solid, and together they fill the entire three-dimensional shape.

Imagine taking a very thin vertical rectangle from the region.

When the rectangle rotates around the y-axis, it forms a hollow cylinder.

Before Rotation:

"image": "src/assets/9.png",

Each strip creates one cylindrical shell.

The shell's:
  • Radius = distance from the strip to the axis
  • Height = height of the strip
  • Thickness = width of the strip

By adding the volumes of all shells, we obtain the entire volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SHELL METHOD AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When rotating around the x-axis, we usually use horizontal strips because they are parallel to the axis of rotation. The formula becomes V = 2π ∫꜀ᵈ r(y)h(y) dy. In this case, the radius is the vertical distance from the horizontal strip to the x-axis, which is simply r = y. The height is the horizontal length of the strip, which is the difference between the right and left functions. The thickness is dy. This approach is the mirror image of the vertical shell method for the y-axis. It is useful when the region is more naturally described in terms of y or when the functions are easier to integrate with respect to y. For example, if the region is bounded by x = f(y) and x = g(y), horizontal strips and the Shell Method around the x-axis can be very straightforward. The key is always to ensure that the strips are parallel to the axis of rotation.

When rotating around the x-axis, we usually use horizontal strips.

Therefore, we integrate with respect to dy.

The formula becomes:
  V = 2π ∫꜀ᵈ r(y)h(y) dy

The radius is the vertical distance from the horizontal strip to the x-axis.

The height is the horizontal length of the strip.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: ROTATION AROUND THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region is bounded by x = y and x = 2 from y = 0 to y = 2, and is rotated around the x-axis. Here, we use horizontal strips because they are parallel to the x-axis. The radius of each shell is the distance from the strip to the x-axis, which is r = y. The height of the strip is the horizontal length: h = Right - Left = 2 - y. The volume of each shell is dV = 2πrh dy = 2π y(2 - y) dy. Integrating from y = 0 to y = 2 gives V = 2π ∫₀² y(2 - y) dy = 2π ∫₀² (2y - y²) dy = 2π [y² - y³/3]₀² = 2π (4 - 8/3) = 2π (4/3) = 8π/3. This example demonstrates the Shell Method for a horizontal axis of rotation. It is important to note that the choice of shells (horizontal or vertical) depends on the axis of rotation and the orientation of the strips that are parallel to it.

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

A very important rule for the Shell Method is that the slices (strips) must be parallel to the axis of rotation. When rotating around the y-axis, we use vertical strips (with thickness dx) because they are parallel to the y-axis. When rotating around the x-axis, we use horizontal strips (with thickness dy) because they are parallel to the x-axis. This is the opposite of the Disk and Washer Methods, where the slices are perpendicular to the axis of rotation. Understanding this distinction is crucial. The Shell Method wraps the strips around the axis, so the strips must be aligned with the axis to form cylindrical shells. If the strips are perpendicular, they would form disks or washers instead. Therefore, when deciding which method to use, consider the orientation of the strips that would be easiest to work with and whether they are parallel or perpendicular to the axis.

A very important rule for the Shell Method is:

  Shell slices are parallel to the axis of rotation

Rotating Around the y-Axis:
  Use vertical strips: dx
  because vertical strips are parallel to the y-axis.

"image": "src/assets/10.png",

Rotating Around the x-Axis:
  Use horizontal strips: dy
  because horizontal strips are parallel to the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SHELL METHOD VS. DISK AND WASHER METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three methods Disk, Washer, and Shell all solve the same type of problem but divide the solid differently. The Disk Method uses solid circular disks perpendicular to the axis of rotation. The Washer Method uses ring-shaped cross-sections (washers) perpendicular to the axis. The Shell Method uses hollow cylindrical shells parallel to the axis. Each method has its advantages and is chosen based on the geometry of the region and the axis of rotation. Sometimes one method leads to a simpler integral than another. For example, the Shell Method is often easier when rotating around the y-axis and the region is described as a function of x, because it avoids rewriting equations in terms of y. Conversely, the Washer Method might be simpler when the region touches the axis of rotation and the cross-sections are easy to describe. The choice of method is a strategic decision that can significantly affect the complexity of the integration.

  Method            Small Piece                Main Formula
  ───────────────────────────────────────────────────────────────────────
  Disk Method       Solid circular disk         π ∫ r²
  Washer Method     Circular ring               π ∫ (R² - r²)
  Shell Method      Hollow cylindrical shell    2π ∫ r h

Disk Method:
  V = π ∫ r² dx

Washer Method:
  V = π ∫ (R² - r²) dx

Shell Method:
  V = 2π ∫ r h dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN SHOULD YOU USE THE SHELL METHOD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Shell Method is especially useful in several situations. First, when the strips parallel to the axis are easier to work with. For example, if rotating around the y-axis and the functions are already written as y = f(x), using vertical strips and dx is often more straightforward than rewriting the functions in terms of y. Second, when the Washer Method would require solving for another variable. For instance, if you have y = x² and are rotating around the y-axis, using washers would require expressing x as √y, which can be algebraically cumbersome. The Shell Method avoids this by using vertical strips with dx. Third, when the region has a complicated shape that would require multiple integrals with the Washer Method but only one with the Shell Method. In general, the Shell Method is a powerful alternative that can simplify many volume problems. It is often the method of choice when the axis of rotation is parallel to the strips and the region is easily described by functions of the integration variable.

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

The axis of rotation does not have to be the x-axis or y-axis. The Shell Method works for any vertical or horizontal axis. When rotating around a vertical line x = k, the radius is the horizontal distance from the strip to the axis, which is |x - k|. For example, if the axis is x = 5 and the strip is located at x, then the radius is 5 - x if the strip is to the left of the axis, or x - 5 if to the right. When rotating around a horizontal line y = k, the radius is the vertical distance |y - k|. The height of the strip is still the difference between the functions defining the region. The limits of integration and the variable of integration (dx or dy) depend on the orientation of the strips. Careful attention to the sign and magnitude of the radius is essential when the axis is not the coordinate axis.

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

Solving a volume problem using the Shell Method follows a systematic process. First, draw or analyse the region to identify the curves, the boundaries, and the axis of rotation. Second, choose strips that are parallel to the axis of rotation vertical strips with dx for a vertical axis, horizontal strips with dy for a horizontal axis. Third, find the radius, which is the distance from the strip to the axis of rotation. Fourth, find the height of the strip: for vertical strips, h = Top - Bottom; for horizontal strips, h = Right - Left. Fifth, set up the integral V = 2π ∫ r h dx (or dy). Sixth, multiply the radius and height, then integrate. Seventh, apply the limits of integration to evaluate the definite integral. Finally, express the answer in cubic units. Following these steps helps organise the solution and reduces errors. Practicing this method builds a solid understanding of how the Shell Method works and when to apply it.

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

Several common mistakes can occur when applying the Shell Method. One frequent error is forgetting the 2π factor in the formula; the shell volume is 2πrh dx, not just rh dx. Another common mistake is using the wrong radius. The radius is always the distance from the strip to the axis of rotation, not the x or y value itself unless the axis is at the origin. For example, if rotating around x = 5, the radius is |x - 5|, not x. Using the wrong height is also common: for vertical strips, height is Top - Bottom; for horizontal strips, height is Right - Left. Additionally, using slices perpendicular to the axis is a mistake that is for the Disk or Washer Method; for shells, slices must be parallel to the axis. Finally, forgetting cubic units in the final answer is a minor but common oversight. Being aware of these pitfalls helps in avoiding them and ensures accurate results.

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

The Shell Method is a versatile technique for finding volumes of revolution. The key concepts are: the solid is divided into thin hollow cylindrical shells; the shell volume comes from Circumference × Height × Thickness; the circumference is 2πr; the main formula is V = 2π ∫ r h; the radius is the distance from the strip to the axis; the height is the length of the strip; shell slices are parallel to the axis of rotation; and the final answer is in cubic units. Understanding these concepts is essential for applying the method correctly and for distinguishing it from the Disk and Washer Methods. The Shell Method is often the method of choice when the strips parallel to the axis are easier to work with, and it is a powerful tool in the calculus toolkit.

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

The Cylindrical-Shell Method is used to find the volume of a solid of revolution by imagining the solid as a collection of infinitely many thin hollow cylinders. The main formula is V = 2π ∫ (radius)(height) d(variable). The process is: identify the axis, choose parallel strips, find the radius, find the height, multiply 2πrh, and integrate. The most important rule is that the Shell Method uses the circumference (2πr) times the height times the thickness. And always remember: shell slices are parallel to the axis of rotation. This method provides an intuitive and often simpler alternative to the Disk and Washer Methods, especially when the axis of rotation is parallel to the strips and the region is described by simple functions.

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