// filename: optimization-problems.ts

const topic = {
  id: "optimization-problems",
  title: "Optimization Problems",
  summary:
    "Applications of differential calculus to find the largest or smallest possible value of a quantity under given conditions, using objective functions, constraints, and derivatives.",
  details: `
Optimization problems are one of the most important applications of differential calculus.

An optimization problem asks us to find the largest or smallest possible value of some quantity.

In simple terms:

  Optimization means finding the best possible result under given conditions.

The "best" result could mean:
  • maximum area,
  • minimum area,
  • maximum profit,
  • minimum cost,
  • maximum volume,
  • minimum distance,
  • maximum height,
  • minimum material,
  • maximum revenue,
  • minimum time.

The key idea is that we use derivatives to find where a quantity reaches its maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN OPTIMIZATION PROBLEM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have a rectangular piece of land and want to create the largest possible area using a fixed amount of fencing.

You might ask:

  What dimensions should the rectangle have to maximize its area?

This is an optimization problem.

We have:

Objective:
  Maximize Area

Constraint:
  The amount of fencing is fixed.

Calculus helps us determine the dimensions that produce the maximum area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MAXIMUM VS. MINIMUM OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two major types.

Maximization:
  We want the largest possible value.
  Examples: Maximum Area, Maximum Profit, Maximum Volume, Maximum Height

Minimization:
  We want the smallest possible value.
  Examples: Minimum Cost, Minimum Distance, Minimum Material, Minimum Surface Area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BASIC IDEA BEHIND OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function:
  y = f(x)

We want to find its maximum or minimum.

At a smooth interior maximum or minimum, the graph typically has a horizontal tangent.

Therefore:
  f'(x) = 0

becomes the key equation.

We solve f'(x) = 0 to find critical points, then determine which critical point produces the desired maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. OPTIMIZATION USUALLY HAS TWO FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important concept is that optimization problems often involve:

Objective Function:
  This is what we want to maximize or minimize.
  For example: A = xy if we're maximizing area.

Constraint:
  This is the condition that restricts our variables.
  For example: 2x + 2y = 100 if we have 100 meters of fencing.

The constraint allows us to rewrite the objective function using one variable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GENERAL OPTIMIZATION PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A reliable method is:

  1. Understand the problem
  2. Identify what must be maximized/minimized
  3. Identify the constraint
  4. Define variables
  5. Write the objective function
  6. Use the constraint to eliminate a variable
  7. Differentiate
  8. Set the derivative equal to zero
  9. Find critical numbers
  10. Determine maximum/minimum
  11. Answer the original question with units

This procedure works for a large number of calculus optimization problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: MAXIMUM AREA OF A RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have 100 m of fencing to create a rectangular enclosure.

Find the dimensions that give the maximum area.

Step 1: Define the variables
  Let x = length and y = width.

  The area is: A = xy

  Therefore, our objective is:
    Maximize A = xy

Step 2: Write the Constraint
  A rectangle has four sides.
  Therefore: 2x + 2y = 100

  Divide by 2: x + y = 50

  Solve for y: y = 50 - x

Step 3: Substitute into the Objective Function
  We originally have: A = xy

  Substitute y = 50 - x:
    A = x(50 - x)

  Expand:
    A = 50x - x²

  Now we have a function involving only one variable:
    A(x) = 50x - x²

Step 4: Differentiate
  A'(x) = 50 - 2x

  Set the derivative equal to zero:
    50 - 2x = 0

  Therefore:
    2x = 50
    x = 25

  Now find y:
    y = 50 - 25 = 25

  Therefore, the dimensions are:
    25 m × 25 m

Step 5: Find the Maximum Area
  A = 25(25) = 625 m²

  Therefore:
    Maximum area = 625 m²

  The rectangle that maximizes the area is actually a square.

This is a very common result:
  For a fixed perimeter, a square produces the maximum area among rectangles.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY DOES THE DERIVATIVE GIVE THE ANSWER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our area function was:
  A(x) = 50x - x²

Its graph is a downward-opening parabola.

The highest point occurs where A'(x) = 0.

So A'(x) = 0 identifies the point where the area stops increasing and begins decreasing.

That's exactly what we need for a maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VERIFYING THE MAXIMUM USING THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can calculate:
  A''(x) = -2

Since A''(x) < 0, the function is concave down.

Therefore:
  x = 25 gives a maximum

This is an application of the Second Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. OPTIMIZATION AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems are closely related to the topic of absolute maximum and minimum.

Once you create your objective function f(x), you find critical points using:
  f'(x) = 0

and potentially points where f'(x) does not exist.

Then you determine which candidate produces the desired result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2: MINIMUM COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the cost of producing x units is:
  C(x) = x² - 20x + 200

Find the production level that minimizes cost.

Step 1: Identify the objective
  We want to minimize C(x).

  Therefore: Minimize C(x) = x² - 20x + 200

Step 2: Differentiate
  C'(x) = 2x - 20

  Set: C'(x) = 0
  2x - 20 = 0
  x = 10

Step 3: Determine whether it is a minimum
  Find the second derivative:
    C''(x) = 2

  Since 2 > 0, the function is concave up.

  Therefore: x = 10 produces the minimum cost.

  Find the cost:
    C(10) = 100 - 200 + 200 = 100

  Therefore: Minimum cost = 100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 3: MAXIMUM VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have a rectangular sheet of cardboard measuring 20 cm × 30 cm.

You cut equal squares of side length x from each corner and fold the sides upward to create an open-top box.

Find the value of x that maximizes the volume.

Step 1: Understand the geometry
  After cutting squares of side x:
    The height is: x
    The new length is: 30 - 2x
    The new width is: 20 - 2x

  Therefore:
    V = x(30 - 2x)(20 - 2x)

  This is our objective function.

Step 2: Determine the Domain
  The dimensions must remain positive.

  Therefore:
    30 - 2x > 0 which gives x < 15
  and:
    20 - 2x > 0 which gives x < 10

  Also: x > 0

  Therefore:
    0 < x < 10

  This is important because not every mathematical critical point will necessarily make physical sense.

Step 3: Expand the Volume Function
  Start with:
    V = x(30 - 2x)(20 - 2x)

  First multiply:
    (30 - 2x)(20 - 2x) = 600 - 60x - 40x + 4x² = 600 - 100x + 4x²

  Multiply by x:
    V(x) = 600x - 100x² + 4x³

  So:
    V(x) = 4x³ - 100x² + 600x

Step 4: Differentiate
  V'(x) = 12x² - 200x + 600

  Set: V'(x) = 0
  12x² - 200x + 600 = 0

  Divide by 4:
    3x² - 50x + 150 = 0

  Using the quadratic formula:
    x = [50 ± √(2500 - 1800)]/(6)
    x = [50 ± √700]/6

  Approximately:
    x ≈ 1.785 or x ≈ 14.882

  But remember our physical domain:
    0 < x < 10

  Therefore, x ≈ 14.882 must be rejected.

  Thus:
    x ≈ 1.785 cm is the valid critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY THE DOMAIN MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is extremely important in optimization.

A calculator or algebra system might give you multiple solutions.

But you cannot automatically use all of them.

You must ask:
  Does this solution make physical and mathematical sense?

For the box:
  x = 14.882 would make 20 - 2x < 0.

That would produce an impossible negative width.

Therefore, it must be rejected.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. OPTIMIZATION PROBLEMS OFTEN HAVE CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constraint is what makes optimization different from simply finding the maximum or minimum of an arbitrary function.

Examples:
  • Rectangle: 2x + 2y = P
  • Fixed volume: V = lwh
  • Fixed distance: d = √(x² + y²)
  • Budget: Cost ≤ Budget
  • Surface area: S = 2lw + 2lh + 2wh

The constraint allows us to reduce the problem to a manageable function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective function is one of the most important concepts.

It represents the quantity we are trying to optimize.

For example:
  • Maximum Area: A = xy
  • Maximum Volume: V = lwh
  • Minimum Distance: D = √((x-a)² + (y-b)²)
  • Maximum Profit: P(x) = R(x) - C(x)
  • Minimum Cost: C(x)

You should identify the objective before doing calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. OPTIMIZATION WORD PROBLEMS: TRANSLATE WORDS INTO MATHEMATICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is often the hardest part.

For example:
  "A farmer has 200 meters of fencing."

This translates to:
  2x + 2y = 200

for a rectangular enclosure.

If the question says:
  "Find the largest possible area."

Then:
  A = xy

is the objective.

So the English problem becomes a mathematical problem:
  Maximize A = xy subject to 2x + 2y = 200

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ANOTHER IMPORTANT EXAMPLE: MINIMUM DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you want to find the point on the x-axis closest to P = (3, 4).

Let a point on the x-axis be (x, 0).

The distance between the two points is:
  D = √((x - 3)² + (0 - 4)²)

Therefore:
  D = √((x - 3)² + 16)

We want to minimize D.

Instead of differentiating the square root, we can minimize:
  D² = (x - 3)² + 16

This works because the square-root function is increasing.

Differentiate:
  d/dx (D²) = 2(x - 3)

Set equal to zero:
  2(x - 3) = 0

Therefore:
  x = 3

The closest point is:
  (3, 0)

The minimum distance is:
  4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY SOMETIMES WE OPTIMIZE THE SQUARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For distance problems, we often have:
  D = √(expression)

Differentiating this can be more complicated.

Instead, use D².

Because D ≥ 0, minimizing D is equivalent to minimizing D².

For example:
  D = √((x - 3)² + 16)

can be replaced by:
  D² = (x - 3)² + 16

This makes the calculus much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ABSOLUTE OPTIMIZATION VS. LOCAL OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In optimization problems, we usually want the absolute maximum or minimum within the physically meaningful domain.

Suppose 0 ≤ x ≤ 10.

You shouldn't only look at f'(x) = 0.

You should also consider the endpoints:
  x = 0 and x = 10

So the optimization process is closely related to the Closed-Interval Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. OPTIMIZATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an optimization problem, ask:

Question 1: What am I trying to maximize or minimize?
  That becomes the objective function.

Question 2: What information limits the variables?
  That becomes the constraint.

Question 3: Can I express everything using one variable?
  If yes, substitute the constraint into the objective.

Question 4: What is the domain?
  Make sure the answer makes physical sense.

Question 5: Where is the derivative zero or undefined?
  Find critical numbers.

Question 6: Which critical number gives the desired result?
  Use First Derivative Test, Second Derivative Test, or compare values.

Question 7: What does the answer mean in the original problem?
  Give the correct units and interpretation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Differentiating before creating the correct function
  Don't immediately differentiate.
  First determine: What are we optimizing?

Mistake 2: Forgetting the constraint
  The constraint is what connects the variables.
  Without it, you may have too many variables.

Mistake 3: Using the wrong variable
  Clearly define x = ... and y = ...

Mistake 4: Ignoring the domain
  A mathematical answer might not make physical sense.
  For example, a length cannot normally be -5 cm.

Mistake 5: Finding a critical point but not determining whether it is maximum or minimum
  Finding f'(x) = 0 only gives a candidate.
  You still need to determine its behavior.

Mistake 6: Forgetting the original question
  If the problem asks: "Find the dimensions."
  Don't give only x = 25.
  Give 25 m × 25 m.
  If it asks for the maximum area, calculate the area too.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. OPTIMIZATION AND THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test can quickly classify a critical point.

If f'(c) = 0 and f''(c) > 0, then Local Minimum.
If f'(c) = 0 and f''(c) < 0, then Local Maximum.

This is particularly useful in optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. OPTIMIZATION IN REAL LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization is everywhere.

Business: Find Maximum Profit
Manufacturing: Find Minimum Production Cost
Engineering: Find Minimum Material
Architecture: Find Maximum Area
Transportation: Find Minimum Travel Time
Physics: Find Maximum Height

Computer Science:
  Optimization concepts also appear in algorithm optimization, resource allocation, scheduling, network optimization, machine learning, and computational efficiency.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE COMPLETE OPTIMIZATION PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The overall process can be visualized as:

  Word Problem
    ↓
  Define Variables
    ↓
  Identify Constraint
    ↓
  Create Objective Function
    ↓
  Use Constraint to Get One Variable
    ↓
  Differentiate
    ↓
  f'(x) = 0
    ↓
  Critical Numbers
    ↓
  Test/Compare
    ↓
  Maximum or Minimum
    ↓
  Interpret the Answer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangle:
    A = lw
    P = 2l + 2w

  Box:
    V = lwh

  Circle:
    A = πr²
    C = 2πr

  Cylinder:
    V = πr²h
    S = 2πr² + 2πrh

  Distance:
    d = √((x₂ - x₁)² + (y₂ - y₁)²)
    Often minimize d² instead of d.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. MOST IMPORTANT IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The heart of an optimization problem is:

  Objective Function + Constraint + Derivative

You first determine what you want to optimize, then use the constraint to express it in one variable, and finally use the derivative to find where the quantity reaches its maximum or minimum.

The most important workflow to memorize is:

  Understand → Define → Constraint → Objective → Differentiate → 
  Critical Point → Test → Answer

And remember:

  f'(x) = 0 does not automatically mean maximum or minimum. It gives a 
  candidate. You must verify the result using the Second Derivative Test, 
  First Derivative Test, or comparison of candidate values.
  `,
  examples: [
    "Maximum area with 100m fencing → 25m × 25m square, area = 625m²",
    "Minimum cost: C(x) = x² - 20x + 200 → x = 10, cost = 100",
    "Maximum volume box from 20×30 sheet → x ≈ 1.785 cm",
    "Minimum distance from (3,4) to x-axis → closest point (3,0), distance 4",
    "Optimization: Objective + Constraint + Derivative",
    "Always check domain: reject impossible solutions",
    "f'(x) = 0 gives candidates; verify with Second Derivative Test",
  ],
};

export default topic;