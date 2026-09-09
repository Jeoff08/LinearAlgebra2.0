// filename: circular-ring-washer-method.ts

const topic = {
  id: "circular-ring-washer-method",
  title: "Circular-Ring / Washer Method",
  summary:
    "A technique in integral calculus used to find the volume of a solid of revolution with a hole in the middle, using ring-shaped cross-sections with outer and inner radii.",
  details: `
The Circular-Ring Method, more commonly called the Washer Method, is a technique in integral calculus used to find the volume of a solid of revolution. It is used when a two-dimensional region is rotated around an axis and the resulting solid has a hole in the middle. Unlike the Circular-Disk Method, where each cross-section is a solid circle, the Washer Method produces cross-sections that look like a ring or washer. The main idea is to find the area of each thin circular ring, then add all the rings together using integration. This method is essential for computing volumes of solids that are not solid cylinders or cones but have a cavity or hollow region. Understanding the Washer Method is a key step in mastering integral calculus applications in geometry and physics.

The main idea is:

  Find the area of each thin circular ring, then add all the rings together using integration.

The general formula is:
  V = π ∫ₐᵇ [R(x)² - r(x)²] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CIRCULAR RING OR WASHER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A washer is a circular shape with a hole in the center, resembling a flat ring or a doughnut. It is formed by taking a larger circle and removing a smaller concentric circle from its center. This shape has two important radii: the outer radius R, which is the distance from the axis of rotation to the outer boundary, and the inner radius r, which is the distance from the axis of rotation to the inner boundary. The area of the washer is the difference between the area of the outer circle and the area of the inner circle. Because there is a hole, we subtract the smaller circular area from the larger circular area to get the area of the ring. This subtraction is the key feature of the Washer Method and is what distinguishes it from the Disk Method, where there is no hole and only one radius is needed.

It looks similar to:

"image": "src/assets/11.png",

A washer has two important radii:

Outer Radius R:
  The distance from the axis of rotation to the outer boundary.

Inner Radius r:
  The distance from the axis of rotation to the inner boundary.

Because there is a hole, we subtract the smaller circular area from the larger circular area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND THE WASHER METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area of a large circle is A_outer = πR², and the area of the smaller hole is A_inner = πr². Therefore, the area of the washer is A = πR² - πr², which simplifies to A = π(R² - r²). Each washer has a very small thickness, such as dx (for vertical slicing) or dy (for horizontal slicing). The volume of each thin washer is dV = π(R² - r²) dx. Adding infinitely many washers over the interval from a to b gives the total volume: V = π ∫ₐᵇ (R² - r²) dx. This integration process sums the volumes of all the washers, resulting in the exact volume of the solid. The Washer Method is a direct application of the concept of integration as a summation of infinitesimal contributions. It is particularly useful for solids that have a central hole, such as a hollow cylinder or a pipe.

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

Imagine a large circular disk with area πR². Now imagine cutting a smaller circle out of its center, with area πr². The remaining shape is a washer or ring, and its area is the area of the outer circle minus the area of the inner circle: A = πR² - πr² = π(R² - r²). This subtraction is the most important concept in the Washer Method. The hole represents the region that is not part of the solid, and we must remove it to find the volume of the actual object. In terms of integration, the volume of the solid is the integral of the area of the washer over the length of the solid. By subtracting the inner circle area from the outer circle area, we ensure that the hole is excluded from the volume calculation. This principle is what makes the Washer Method different from the Disk Method and is essential for correctly computing volumes of solids with holes.

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

The two methods are closely related. The Circular-Disk Method is used when the cross-sections are solid circles with no hole, while the Circular-Ring (Washer) Method is used when the cross-sections are rings with a hole. The formulas are similar: for disks, V = π ∫ r² dx; for washers, V = π ∫ (R² - r²) dx. In fact, the Circular-Disk Method is a special case of the Washer Method where the inner radius is zero. If there is no hole, then r = 0, and the washer formula reduces to the disk formula: V = π ∫ (R² - 0²) dx = π ∫ R² dx. This relationship helps in understanding that the Washer Method is more general and can handle both solid and hollow solids. The choice between the two methods depends on whether the solid has a hole. When the region being rotated touches the axis of rotation, the Disk Method is used; when it does not, the Washer Method is required.

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

Let's work through an example of the Washer Method with rotation around the x-axis. Suppose we want to find the volume generated when the region between y = 2 and y = x from x = 0 to x = 2 is rotated around the x-axis. The axis of rotation is the x-axis, so the radius is measured vertically. The upper curve is y = 2, which is farther from the x-axis, so the outer radius is R = 2. The lower curve is y = x, which is closer to the x-axis, so the inner radius is r = x. Using the Washer Method formula, we set up V = π ∫₀² (2² - x²) dx = π ∫₀² (4 - x²) dx. Integrating gives V = π [4x - x³/3]₀² = π (8 - 8/3) = 16π/3. The volume is 16π/3 cubic units. This example illustrates the importance of correctly identifying the outer and inner radii based on the curves' distances from the axis of rotation.

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

The most important question in the Washer Method is: which distance is the outer radius, and which distance is the inner radius? Always remember that the outer radius R is the farthest distance from the axis of rotation, and the inner radius r is the closest distance. For example, when rotating around the x-axis, the curve with the larger y-value (farther from the x-axis) gives the outer radius, and the curve with the smaller y-value (closer to the x-axis) gives the inner radius. When rotating around the y-axis, the curve with the larger x-value (farther from the y-axis) gives the outer radius, and the curve with the smaller x-value (closer to the y-axis) gives the inner radius. Correctly identifying the radii is essential for setting up the integral correctly. If the radii are reversed, the volume will be negative or incorrect. A rough sketch of the region and the axis of rotation is invaluable for determining which curve is farther and which is closer.

The most important question in the Washer Method is:

  Which distance is the outer radius, and which distance is the inner radius?

Always remember:
  R = Farthest distance from the axis
  r = Closest distance from the axis

For example, if the axis of rotation is the x-axis:

"image": "src/assets/12.png",

Therefore:
  Farther curve → Outer Radius
  Closer curve → Inner Radius

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ROTATING AROUND THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When rotating around the y-axis, the same principles apply, but the roles of x and y are exchanged. We use horizontal slices instead of vertical ones, and the thickness of each washer is dy instead of dx. The formula becomes V = π ∫꜀ᵈ [R(y)² - r(y)²] dy. The radius is measured horizontally from the y-axis. Functions are often written as x = f(y) to express the radius in terms of y. The outer radius R(y) is the distance from the y-axis to the farther curve, and the inner radius r(y) is the distance to the closer curve. This approach is used when the region is more naturally described as a function of y or when the axis of rotation is vertical. The Washer Method is versatile and can be adapted to any axis of rotation, as long as the radii are correctly expressed as functions of the integration variable.

When rotating around the y-axis, you often use horizontal slices.

The formula becomes:
  V = π ∫꜀ᵈ [R(y)² - r(y)²] dy

In this case:
  The radius is measured horizontally.
  Functions are often written as: x = f(y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: WASHER METHOD USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the region is between x = 4 and x = y from y = 0 to y = 4, and is rotated around the y-axis. The axis of rotation is the y-axis, so we use horizontal slices and integrate with respect to y. The curve x = 4 is farther from the y-axis, so the outer radius is R = 4. The curve x = y is closer to the y-axis, so the inner radius is r = y. Using the Washer Method formula, V = π ∫₀⁴ (4² - y²) dy = π ∫₀⁴ (16 - y²) dy. Integrating gives V = π [16y - y³/3]₀⁴ = π (64 - 64/3) = 128π/3. The volume is 128π/3 cubic units. This example demonstrates that the Washer Method works equally well for rotation around the y-axis, as long as the radii are correctly identified and expressed in terms of y.

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

The axis of rotation does not always have to be the x-axis or y-axis. You may rotate around a line such as y = 3 or x = 2. In these cases, you must carefully calculate the distance from the curve to the axis. For rotation around a horizontal line y = k, the radius is a vertical distance. For a curve y = f(x), the distance is |f(x) - k|. The outer radius is the larger of these distances, and the inner radius is the smaller. For rotation around a vertical line x = k, the radius is a horizontal distance. For a curve x = f(y), the distance is |f(y) - k|. When the axis is not the origin, the radii are not simply the function values but are the differences between the function values and the axis position. This requires careful analysis and often a sketch to determine which curve is farther from the axis. The method remains the same: identify the outer and inner radii, square them, subtract, and integrate.

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

The Washer Method can become confusing if you do not know which curve is farther from the axis. A rough sketch helps you identify the axis of rotation, the outer radius, the inner radius, the boundaries of the region, and the correct direction of slicing. When you have a visual representation, it becomes much easier to determine which curve is the outer boundary and which is the inner boundary. Always ask: which curve is farther from the axis? That distance is R. Then ask: which curve is closer to the axis? That distance is r. Without a sketch, it is easy to reverse the radii or misidentify the limits of integration. The sketch does not need to be highly accurate; a simple diagram is sufficient to guide the setup of the integral. This practice is essential for avoiding common errors and for building confidence in applying the Washer Method.

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

A useful rule is that for the Washer Method, slices are generally perpendicular to the axis of rotation. When rotating around the x-axis, the washers are stacked from left to right, and we use vertical slices with thickness dx. When rotating around the y-axis, the washers are stacked from bottom to top, and we use horizontal slices with thickness dy. When rotating around a horizontal line (e.g., y = 3), we use vertical slices with dx, and when rotating around a vertical line (e.g., x = 2), we use horizontal slices with dy. This rule ensures that the washers are perpendicular to the axis, making the radii the distances from the axis to the curves. Choosing the correct direction of integration is essential for setting up the integral correctly and for ensuring that the limits of integration correspond to the region being rotated.

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

Solving a volume problem using the Washer Method involves a systematic process. First, draw or analyse the region to identify the curves, the boundaries, and the axis of rotation. Second, determine the direction of the slice: slices are perpendicular to the axis of rotation (dx for horizontal axis, dy for vertical axis). Third, find the outer radius R, which is the distance from the axis to the farther boundary. Fourth, find the inner radius r, which is the distance from the axis to the closer boundary. Fifth, write the formula V = π ∫ (R² - r²) dx (or with dy). Sixth, simplify the expression by squaring the radii and subtracting. Seventh, integrate to find the antiderivative and apply the limits of integration. Finally, write the final answer in cubic units. Following these steps helps organise the solution and reduces errors.

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

Several common mistakes can occur when applying the Washer Method. One frequent error is forgetting to square the radii: the formula is π(R² - r²), not π(R - r). Another mistake is reversing the outer and inner radii, which gives a negative volume. Always use Outer² - Inner². Measuring the radius incorrectly is also common; the radius is always the distance to the axis of rotation, not simply the value of the function. If the axis is y = 5 and the curve is y = x², the radius may be 5 - x² rather than x². Using the wrong variable (dx instead of dy) is another common error; remember that horizontal axes use dx and vertical axes use dy. Finally, forgetting cubic units in the final answer is a minor but common oversight. Being aware of these pitfalls helps in avoiding them and ensures accurate results.

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

The Washer Method is a fundamental technique for finding volumes of solids of revolution with holes. The key concepts are: the Circular-Ring Method is also called the Washer Method; it is used to find the volume of a solid of revolution with a hole; each cross-section is a circular ring; there are two radii, R (outer) and r (inner); the area of a washer is π(R² - r²); the volume formula is V = π ∫ (R² - r²) dx (or dy); the radii are measured from the axis of rotation; always subtract Outer² - Inner²; and the final answer is in cubic units. Understanding these concepts is essential for applying the method correctly and for distinguishing it from the Disk Method. The Washer Method is a powerful tool that demonstrates the power of integration in solving geometric problems involving hollow solids.

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

The Circular-Ring / Washer Method is used to find the volume of a solid created by rotating a region around an axis when the resulting solid has a hole in the center. The process is: find the outer radius, find the inner radius, square both, subtract, and integrate. The main formula is V = π ∫ₐᵇ (R² - r²) dx or V = π ∫꜀ᵈ (R² - r²) dy. The most important rule to remember is that the washer area is the outer circle area minus the inner circle area. So whenever you see a solid of revolution with a hole in the middle, think: Washer Method = Outer² - Inner². This method is essential for computing volumes of hollow objects and is a key application of integral calculus.

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