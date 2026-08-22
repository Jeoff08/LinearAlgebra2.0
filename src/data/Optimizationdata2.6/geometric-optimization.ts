const topic = {
  id: "geometric-optimization",
  title: "Geometric Optimization",
  summary:
    "Using calculus to find maximum and minimum geometric quantities such as area, volume, surface area, and distance.",
  details: `
Geometric Optimization is a type of optimization problem where geometry and calculus are combined to find the maximum or minimum value of a geometric quantity.

The quantity being optimized might be:
  • Maximum area
  • Minimum perimeter
  • Maximum volume
  • Minimum surface area
  • Shortest distance
  • Largest possible dimensions
  • Smallest amount of material

The main idea is: Use geometric formulas to build a function, then use derivatives to find the best possible value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS GEOMETRIC OPTIMIZATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometric optimization starts with a geometric situation and asks you to find the best possible configuration.

Example: A rectangle has a fixed perimeter. What dimensions give it the largest possible area?

This is geometric because we use: A = lw and P = 2l + 2w.

It is an optimization problem because we want to maximize A.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE THREE MAIN COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most geometric optimization problems contain:

Objective: The quantity you want to maximize or minimize. Example: A = lw.

Constraint: The condition that limits the problem. Example: 2l + 2w = 100.

Variables: The unknown geometric quantities. Example: l = length, w = width.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. IMPORTANT GEOMETRIC FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should know several common formulas because they frequently become the objective function or constraint.

Rectangle:
  Area: A = lw
  Perimeter: P = 2l + 2w

Square:
  Area: A = s²
  Perimeter: P = 4s

Triangle:
  Area: A = ½bh

Circle:
  Area: A = πr²
  Circumference: C = 2πr

Cylinder:
  Volume: V = πr²h
  Surface area: S = 2πr² + 2πrh

Rectangular Box:
  Volume: V = lwh
  Surface area: S = 2lw + 2lh + 2wh

Sphere:
  Volume: V = 4/3πr³
  Surface area: S = 4πr²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For geometric optimization, use this process:

  Diagram → Variables → Geometry Formula → Constraint → One Variable → Derivative → Maximum/Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: MAXIMUM AREA OF A RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: A rectangle has a perimeter of 100 meters. Find the dimensions that produce the maximum area.

Step 1: Define variables
  Let: x = length, y = width

Step 2: Write the objective
  We want to maximize area: A = xy

Step 3: Write the constraint
  The perimeter is: 2x + 2y = 100
  Divide by 2: x + y = 50
  Solve for y: y = 50 - x

Step 4: Create a one-variable function
  A = x(50 - x) → A(x) = 50x - x²

Step 5: Differentiate: A'(x) = 50 - 2x
  Set the derivative equal to zero: 50 - 2x = 0 → x = 25

Step 6: Find the width: y = 50 - 25 = 25

Step 7: Find the maximum area: A = 25(25) = 625 m²

So the rectangle with the maximum area is actually a square: 25 m × 25 m.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IMPORTANT GEOMETRIC PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful results is: Among all rectangles with the same perimeter, the square has the greatest area.

Example: Rectangles with perimeter 100 m:
  • 10×40 → A = 400
  • 20×30 → A = 600
  • 25×25 → A = 625

The square produces the largest area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: MINIMUM SURFACE AREA OF A BOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you need a rectangular box with a fixed volume.

The volume is: V = lwh

Suppose the box has equal length and width: l = w = x, and height: h

Then: V = x²h

If the volume must be V₀, then: x²h = V₀ → h = V₀/x²

The surface area is: S = 2x² + 4xh

Substitute h = V₀/x²: S(x) = 2x² + 4V₀/x

Now differentiate: S'(x) = 4x - 4V₀/x²

Set: S'(x) = 0, then solve for x.

This gives the dimensions that use the least possible surface area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: MAXIMUM AREA OF A RECTANGLE UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rectangle is placed underneath a curve: y = 16 - x² and above the x-axis.

Because the curve is symmetric, suppose the rectangle has:
  • width = 2x
  • height = 16 - x²

The area is: A = (2x)(16 - x²) = 32x - 2x³

Differentiate: A'(x) = 32 - 6x²

Set equal to zero: 32 - 6x² = 0 → x² = 16/3 → x = 4/√3

The corresponding height is: y = 16 - 16/3 = 32/3

The rectangle's width is: 2x = 8/√3

This gives the rectangle with the maximum possible area under the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GEOMETRIC OPTIMIZATION AND DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization can also be used to find the shortest distance.

Suppose a point: P = (a, b) and a point: Q = (x, 0) lies on the x-axis.

The distance between them is: d = √((x-a)² + b²)

Instead of minimizing d, it is often easier to minimize: d² = (x-a)² + b²

Because the square root makes differentiation more complicated.

So we define: D(x) = (x-a)² + b²

Then: D'(x) = 2(x-a)

Set: D'(x) = 0 and solve for x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY WE CAN MINIMIZE THE SQUARED DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: d = √D

Since the square-root function is increasing, the value of d becomes smallest exactly when D is smallest.

Therefore: Minimize d² instead of d.

This is a very useful trick in geometric optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. OPEN-BOX PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common geometric optimization problem involves cutting squares from the corners of a rectangular sheet.

Suppose we have a sheet: 20 cm × 20 cm, and cut squares of side x from each corner.

After folding:
  • Length = 20 - 2x
  • Width = 20 - 2x
  • Height = x

Therefore: V = x(20 - 2x)²

This is the objective function because we want to maximize volume.

Differentiate: V'(x), set: V'(x) = 0, and determine the valid critical number.

The result gives the corner-cut size that creates the box with maximum volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GEOMETRIC OPTIMIZATION WITH CIRCLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rectangle is inscribed inside a circle of radius r.

If the rectangle has half-width x and half-height y, the Pythagorean theorem gives: x² + y² = r²

The rectangle's area is: A = (2x)(2y) = 4xy

The constraint: x² + y² = r² allows us to express one variable in terms of the other.

Then calculus can determine the dimensions that maximize the rectangle's area.

The result is: x = y, meaning the maximum-area rectangle inscribed in a circle is a square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GEOMETRIC OPTIMIZATION WITH CYLINDERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want a cylinder with a fixed volume but the minimum surface area.

Volume: V = πr²h → Solve for h: h = V/(πr²)

Surface area: S = 2πr² + 2πrh

Substitute: S(r) = 2πr² + 2πr(V/(πr²)) = 2πr² + 2V/r

Differentiate: S'(r) = 4πr - 2V/r²

Set: 4πr - 2V/r² = 0 → Solving gives the optimal radius.

This is a classic example of using calculus to find the most material-efficient cylinder.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DOMAIN IN GEOMETRIC OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain is especially important.

Suppose: V(x) = x(20 - 2x)²

Because the dimensions must be positive:
  • x > 0
  • 20 - 2x > 0 → 20 > 2x → x < 10

So the valid domain is: 0 < x < 10

A critical point outside this interval is not physically meaningful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MAXIMUM VS. MINIMUM IN GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maximum problems: Look for words such as largest, greatest, maximum, highest, biggest, most, greatest possible area, greatest possible volume.

Minimum problems: Look for words such as smallest, least, minimum, shortest, lowest, cheapest, least material, shortest distance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON GEOMETRIC OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rectangles:
  • Maximum area with fixed perimeter
  • Minimum perimeter with fixed area
  • Rectangle under a curve

Boxes:
  • Maximum volume
  • Minimum surface area
  • Open-top boxes

Cylinders:
  • Maximum volume
  • Minimum surface area
  • Fixed-volume containers

Circles:
  • Maximum area
  • Minimum circumference
  • Shapes inscribed in circles

Triangles:
  • Maximum area
  • Minimum perimeter
  • Inscribed triangles

Distance:
  • Shortest distance between objects
  • Closest point on a curve
  • Shortest path

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Choosing the wrong objective
  If the question asks for maximum area, your objective must be A, not perimeter or another quantity.

❌ Mistake 2: Forgetting the constraint
  The constraint connects the variables. Without it, you may not be able to reduce the problem to one variable.

❌ Mistake 3: Ignoring geometry
  The diagram and geometric relationships often provide the equations needed to solve the problem.

❌ Mistake 4: Forgetting physical restrictions
  A dimension cannot normally be x < 0. Always check the domain.

❌ Mistake 5: Not testing the critical point
  Finding f'(x) = 0 only gives a candidate. You still need to determine whether it produces a maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. GEOMETRIC OPTIMIZATION FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful mental framework is: Geometry Formula + Constraint + Derivative = Optimal Geometry.

Or more specifically: Diagram → Variables → Objective → Constraint → One Variable → f'(x) = 0 → Test → Answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK EXAMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: 2x + 2y = 100 and we want maximum area.

  • Objective: A = xy
  • Constraint: x + y = 50
  • Solve: y = 50 - x
  • Substitute: A(x) = x(50 - x)
  • Differentiate: A'(x) = 50 - 2x
  • Critical number: 50 - 2x = 0 → x = 25
  • Other dimension: y = 25
  • Maximum: A = 625

Therefore: Maximum area = 625 m².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Geometric Optimization, remember:

  • Geometric Optimization is essentially about taking a geometric situation and turning it into a calculus problem.
  • The most important pattern to remember is: Geometry → Equations → Function → Derivative → Critical Number → Optimal Solution.
  • The key question you should always ask is: "What geometric quantity am I trying to make as large or as small as possible, and what condition limits it?"

Once you identify those two things, the rest of the optimization problem becomes much more manageable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometric Optimization is a powerful application of calculus for solving real-world geometry problems.

Key concepts covered:

  ✓ What Is Geometric Optimization?
  ✓ The Three Main Components
  ✓ Important Geometric Formulas
  ✓ Basic Strategy
  ✓ Maximum Area of a Rectangle
  ✓ Important Geometric Principle
  ✓ Minimum Surface Area of a Box
  ✓ Rectangle Under a Curve
  ✓ Distance Optimization
  ✓ Squared Distance Trick
  ✓ Open-Box Problems
  ✓ Circles
  ✓ Cylinders
  ✓ Domain Considerations
  ✓ Maximum vs. Minimum
  ✓ Common Problems
  ✓ Common Mistakes
  `,
  examples: [
    "Rectangle with perimeter 100: max area at 25×25 → 625 m²",
    "Square has greatest area among rectangles with fixed perimeter",
    "Box with fixed volume: minimize surface area using S(x) = 2x² + 4V₀/x",
    "Rectangle under y = 16 - x²: max area at x = 4/√3",
    "Minimize distance from (a,b) to x-axis: D(x) = (x-a)² + b²",
    "Open box from 20×20 sheet: V(x) = x(20-2x)², domain 0 < x < 10",
    "Rectangle inscribed in circle: max area is square (x = y)",
    "Cylinder fixed volume: minimize surface area S(r) = 2πr² + 2V/r",
    "Check domain: dimensions must be positive",
    "Geometry → Equations → Function → Derivative → Optimal Solution",
    "Ask: What am I maximizing/minimizing? What limits it?",
    "Use squared distance to avoid square roots",
    "Square root is increasing, so minimize D instead of d",
  ],
};

export default topic;