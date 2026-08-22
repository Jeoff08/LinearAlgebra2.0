// filename: area-optimization.ts

const topic = {
  id: "area-optimization",
  title: "Area Optimization",
  summary:
    "Using calculus to find the largest or smallest possible area under given constraints, combining geometry, algebra, and derivatives.",
  details: `
Area Optimization is a type of optimization problem where the goal is to find the largest or smallest possible area under certain conditions or constraints.

It combines geometry, algebra, and derivatives.

The central idea is:

Use calculus to find the dimensions that produce the best possible area.

Most commonly, Area Optimization asks you to find a maximum area, but it can also involve minimizing area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AREA OPTIMIZATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have a fixed amount of material, fencing, or boundary and want to create the largest possible region.

For example:

A farmer has 100 meters of fencing and wants to enclose a rectangular field with the greatest possible area.

The area of a rectangle is:

  A = lw

But the fencing creates a restriction:

  2l + 2w = 100

The goal is therefore:

  Maximize A

while satisfying:

  2l + 2w = 100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective function is the formula representing the area you want to optimize.

For a rectangle:

  A = lw

For a triangle:

  A = (1/2)bh

For a circle:

  A = πr²

For more complicated shapes, you may need to divide the figure into smaller shapes and add their areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constraint is the condition that restricts the dimensions.

Examples:

  • Fixed perimeter: 2l + 2w = P
  • Fixed circumference: 2πr = C
  • Fixed amount of material
  • A point lying on a curve: y = 16 - x²

An equation can describe how much material is available or how the variables are related geometrically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GENERAL PROCEDURE FOR AREA OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the following process:

  Step 1: Identify what area you need to maximize or minimize.
  Step 2: Define the variables.
  Step 3: Write the area formula.
  Step 4: Write the constraint.
  Step 5: Use the constraint to eliminate one variable.
  Step 6: Create a one-variable area function: A(x)
  Step 7: Differentiate: A'(x)
  Step 8: Find critical numbers: A'(x) = 0
  Step 9: Determine whether the critical number gives a maximum or minimum.
  Step 10: Interpret the answer in the original geometric situation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: MAXIMUM AREA OF A RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem:
A rectangular field has 100 meters of fencing. What dimensions give the maximum possible area?

Step 1: Define variables
  Let:
    x = length
    y = width

Step 2: Write the area
  A = xy
  This is the quantity we want to maximize.

Step 3: Write the constraint
  The perimeter is 100:
    2x + 2y = 100
  Divide by 2:
    x + y = 50
  Solve for y:
    y = 50 - x

Step 4: Create the area function
  Substitute:
    A = x(50 - x)
  Therefore:
    A(x) = 50x - x²

Step 5: Differentiate
  A'(x) = 50 - 2x
  Set equal to zero:
    50 - 2x = 0
    x = 25

Step 6: Find the width
  y = 50 - 25
  y = 25
  Therefore:
    x = 25, y = 25

Step 7: Find the maximum area
  A = 25(25)
  A = 625 m²
  Thus:
    Maximum area = 625 m²

The optimal rectangle is:
  25 m × 25 m

Notice that the optimal rectangle is a square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES A SQUARE GIVE MAXIMUM AREA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a fixed perimeter, a square distributes the available boundary equally between its dimensions.

For example, with a perimeter of 100:

  Rectangle 1: 10 × 40 → Area: 400
  Rectangle 2: 20 × 30 → Area: 600
  Square: 25 × 25 → Area: 625

The closer the dimensions become to each other, the larger the area becomes.

Therefore:

  Among rectangles with a fixed perimeter, the square has maximum area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA BETWEEN A CURVE AND A RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area optimization can become more interesting when a rectangle is placed underneath a curve.

Suppose:
  y = 16 - x²

and we want to construct the largest rectangle beneath the curve and above the x-axis.

Because the curve is symmetric, let the right side of the rectangle be x.

Then:

  Width: The rectangle extends from -x to x, so Width = 2x
  Height: The height is determined by the curve: Height = 16 - x²

Area Function:
  A = width × height
  A(x) = 2x(16 - x²)
  A(x) = 32x - 2x³

Differentiate:
  A'(x) = 32 - 6x²

Set equal to zero:
  32 - 6x² = 0
  6x² = 32
  x² = 16/3
  x = 4/√3

We take the positive value because x represents a length.

Find the Height:
  y = 16 - x²
  y = 16 - 16/3
  y = 32/3

So the optimal rectangle has:
  Width = 8/√3
  Height = 32/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AREA OPTIMIZATION WITH A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rectangle is inscribed inside a circle of radius r.

Let the rectangle have dimensions:
  2x × 2y

The diagonal of the rectangle is the diameter of the circle:
  2r

Using the Pythagorean theorem:
  (2x)² + (2y)² = (2r)²

Simplify:
  x² + y² = r²

The area is:
  A = (2x)(2y) = 4xy

Using the constraint:
  y = √(r² - x²)

we obtain:
  A(x) = 4x√(r² - x²)

We can differentiate this function and find the critical point.

The result is:
  x = y

Therefore, the maximum-area rectangle inscribed in a circle is a square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. AREA OPTIMIZATION WITH A FIXED PERIMETER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important result is:

If a rectangle has perimeter P, then:
  2x + 2y = P
  y = P/2 - x

The area becomes:
  A(x) = x(P/2 - x)
  A(x) = (P/2)x - x²

Differentiate:
  A'(x) = P/2 - 2x

Set equal to zero:
  P/2 - 2x = 0
  x = P/4

Similarly:
  y = P/4

Thus:
  x = y = P/4

The maximum area is:
  A_max = (P/4)(P/4) = P²/16

This is a very useful formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MINIMUM AREA PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Although maximum area is more common, some problems ask for the minimum area.

For example:
  Find the smallest possible area of a shape satisfying a particular geometric constraint.

The procedure is exactly the same:

  A(x) → A'(x) = 0

and determine whether the critical point produces a minimum.

Using the Second Derivative Test:
  A''(x) > 0 indicates a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AREA OPTIMIZATION WITH THREE-SIDED FENCING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A particularly common problem is a rectangle against a wall.

Suppose one side of the rectangle is along a wall, so only three sides require fencing.

Let:
  x = width
  y = length

If 100 meters of fencing are available:
  2x + y = 100

Solve for y:
  y = 100 - 2x

The area is:
  A = xy
  A(x) = x(100 - 2x)
  A(x) = 100x - 2x²

Differentiate:
  A'(x) = 100 - 4x

Set equal to zero:
  100 - 4x = 0
  x = 25

Find y:
  y = 100 - 2(25)
  y = 50

Therefore:
  25 m × 50 m produces the maximum area.

The maximum area is:
  A = 25(50) = 1250 m²

Notice that this is different from the four-sided fencing problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain is extremely important.

Suppose:
  A(x) = x(100 - 2x)

Since dimensions must be positive:
  x > 0
  and:
  100 - 2x > 0
  Therefore:
  x < 50

So:
  0 < x < 50

The critical point:
  x = 25 is valid.

But a result such as:
  x = 60 would be impossible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. AREA OPTIMIZATION AND THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = 100x - 2x²

Then:
  A'(x) = 100 - 4x
  A''(x) = -4

Since:
  A''(x) < 0

the graph is concave downward.

Therefore:
  The critical point is a maximum.

This is often a quick way to verify a maximum-area solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON AREA OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should expect problems involving:

  • Rectangles: A = lw
  • Squares: A = s²
  • Triangles: A = (1/2)bh
  • Circles: A = πr²
  • Rectangles under curves: A = width × height
  • Inscribed shapes: Finding the largest shape that fits inside circles, triangles, rectangles, parabolas
  • Fencing problems: Finding the largest enclosed area using a fixed amount of fencing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Optimizing the wrong quantity
  If the question asks for maximum area, your objective should be A.

Mistake 2: Forgetting the constraint
  The constraint is what connects your variables.

Mistake 3: Not reducing to one variable
  Try to obtain A(x) before differentiating.

Mistake 4: Ignoring the diagram
  A diagram can reveal relationships that are difficult to see from the text alone.

Mistake 5: Accepting an impossible dimension
  Always check x > 0 and other geometric restrictions.

Mistake 6: Forgetting what the answer represents
  If x = 25, don't simply write x = 25. Instead explain:
  "The width should be 25 meters."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK PROBLEM-SOLVING TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Area Optimization, remember:

  1. Draw the figure
  2. Define the variables
  3. Identify the area
  4. Write the constraint
  5. Solve for one variable
  6. Create A(x)
  7. Find A'(x)
  8. Set A'(x) = 0
  9. Test the critical point
  10. Check the domain
  11. State the dimensions and area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangle:
    A = lw

  Rectangle with fixed perimeter P:
    A_max = P²/16
    and the optimal dimensions are:
    l = w = P/4

  Triangle:
    A = (1/2)bh

  Circle:
    A = πr²

  Semicircle:
    A = (1/2)πr²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area Optimization is about turning a geometric problem into a function that calculus can optimize.

The key process is:

  Geometry → Area Formula → Constraint → A(x) → A'(x) → A'(x) = 0 → Maximum/Minimum Area

The most important question to ask:

  "What dimensions will make the area as large or as small as possible while still satisfying the given constraint?"

Once you can identify the area function and the constraint, the calculus portion becomes much easier.
  `,
  examples: [
    "Maximize area of rectangle with 100m fencing → 25m × 25m square, area = 625m²",
    "Find largest rectangle under y = 16 - x² → width = 8/√3, height = 32/3",
    "Rectangle inscribed in circle → square gives maximum area",
    "Three-sided fencing with 100m → 25m × 50m, area = 1250m²",
    "Fixed perimeter P rectangle → max area = P²/16 with sides P/4",
    "Minimum area with given constraint using second derivative test",
  ],
};

export default topic;