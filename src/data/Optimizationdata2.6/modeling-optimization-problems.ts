// filename: modeling-optimization-problems.ts

const topic = {
  id: "modeling-optimization-problems",
  title: "Modeling Optimization Problems",
  summary:
    "The process of converting a real-world situation into a mathematical model that can be optimized using calculus, including identifying variables, objectives, constraints, and domains.",
  details: `
Modeling Optimization Problems is the process of converting a real-world situation into a mathematical model that can be optimized using calculus.

Instead of immediately differentiating, the main challenge is to determine:

  • What quantity should be maximized or minimized?
  • What variables are involved?
  • What relationships connect those variables?
  • What restrictions must the variables satisfy?
  • How can the situation be represented by a function?

The central idea is:

  Real-World Situation → Mathematical Model → Optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS MATHEMATICAL MODELING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A mathematical model is a mathematical representation of a real-world situation.

For example:

A farmer has 200 meters of fencing and wants to create the largest rectangular field possible.

The real-world situation becomes:

  Variables:
    x = length
    y = width

  Constraint:
    2x + 2y = 200

  Objective:
    A = xy

Now we have a mathematical model:
  A = xy, 2x + 2y = 200

Calculus can then determine the optimal dimensions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY MODELING IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In many optimization problems, the calculus itself is not the hardest part.

The difficult part is translating words into equations.

For example, if a problem says:

  "A rectangular enclosure must contain the greatest possible area using 100 meters of fencing."

You need to recognize:
  Area = xy
and:
  2x + 2y = 100

before you can differentiate anything.

Therefore:
  Good modeling makes optimization much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FOUR MAIN PARTS OF AN OPTIMIZATION MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most optimization models contain four important components.

1. Variables:
  What quantities are unknown?
    x, y, r, h, ...

2. Objective Function:
  What are you trying to maximize or minimize?
    A(x), V(x), C(x), P(x), d(x)

3. Constraint:
  What condition limits the variables?
    g(x, y) = c

4. Domain:
  What values are physically or mathematically possible?
  For example: x > 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective function represents what you are trying to optimize.

Examples:

  Area: A = lw
  Volume: V = lwh
  Cost: C(x)
  Revenue: R(x)
  Profit: P(x) = R(x) - C(x)
  Distance: d = √((x₂ - x₁)² + (y₂ - y₁)²)

The objective function is essentially answering:

  "What does 'best' mean in this problem?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constraint describes something that must remain fixed or satisfied.

For example:

  You have 100 meters of fencing.
  This becomes:
    2x + 2y = 100

Another example:

  A box must have a volume of 500 cm³.
  This becomes:
    lwh = 500

Another:

  A point lies on the curve y = x² + 1.
  This becomes:
    y = x² + 1

Constraints are what make the problem an optimization problem rather than simply evaluating a formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE MODELING PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A reliable modeling process is:

  1. Read the problem
  2. Identify what is being optimized
  3. Define variables
  4. Draw a diagram if useful
  5. Write the objective function
  6. Write the constraint
  7. Eliminate variables
  8. Determine the domain
  9. Differentiate
  10. Find critical numbers
  11. Test candidates
  12. Interpret the result

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 1: READ THE PROBLEM CAREFULLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before writing equations, identify the important information.

Look for words such as:
  • maximize
  • minimize
  • greatest
  • smallest
  • largest
  • shortest
  • cheapest
  • most profitable
  • least expensive
  • closest

These usually indicate the objective.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 2: DEFINE VARIABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Clearly state what each variable represents.

For example:
  x = width of rectangle
  y = length of rectangle

Avoid using variables without explaining them.

A good model always begins with clear variable definitions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 3: DRAW A DIAGRAM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For geometric problems, a diagram can be extremely helpful.

For example:

        y
   ┌───────────┐
   │           │
 x │           │
   │           │
   └───────────┘

Then:
  A = xy
and if the perimeter is 100:
  2x + 2y = 100

A simple diagram can prevent many modeling mistakes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. STEP 4: WRITE THE OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the problem asks for the maximum area of a rectangle.

The objective is:
  A = xy

Suppose it asks for maximum volume:
  V = lwh

Suppose it asks for maximum profit:
  P = R - C

The objective function tells calculus what to optimize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP 5: WRITE THE CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the rectangle has 100 meters of fencing:
  2x + 2y = 100

This is the constraint.

Solve for one variable:
  2y = 100 - 2x
  y = 50 - x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEP 6: REDUCE TO ONE VARIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective was:
  A = xy

Substitute:
  y = 50 - x

Therefore:
  A = x(50 - x)

So:
  A(x) = 50x - x²

This is now a one-variable optimization problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STEP 7: DETERMINE THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since x and y represent physical lengths:
  x > 0
and:
  y > 0

Since y = 50 - x, we need:
  50 - x > 0

Therefore:
  x < 50

So the domain is:
  0 < x < 50

Domain restrictions are part of the mathematical model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. STEP 8: OPTIMIZE THE MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now use calculus.

We have:
  A(x) = 50x - x²

Differentiate:
  A'(x) = 50 - 2x

Set:
  A'(x) = 0
  50 - 2x = 0
  x = 25

Then:
  y = 50 - 25 = 25

Thus:
  x = 25, y = 25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. STEP 9: INTERPRET THE ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The mathematical answer is:
  x = 25, y = 25

But the real-world answer should be stated as:

  "The rectangular enclosure should be 25 meters by 25 meters to maximize its area."

The maximum area is:
  A = 25(25)
  A = 625 m²

This final interpretation is an important part of modeling.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: MODELING A BOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem:
  A 30 cm × 20 cm sheet is used to create an open box by cutting squares of 
  side x from each corner.
  Find the dimensions that maximize volume.

Step 1: Define the variable
  Let:
    x = side length of each cut-out square

Step 2: Determine the new dimensions
  Original length: 30
  Two x-sized pieces are removed:
    L = 30 - 2x

  Original width: 20
    W = 20 - 2x

  Height:
    H = x

Step 3: Write the objective
  Volume:
    V = LWH
  Therefore:
    V(x) = x(30 - 2x)(20 - 2x)

Step 4: Determine the domain
  We require:
    x > 0
  and:
    30 - 2x > 0
    20 - 2x > 0

  The stricter restriction is:
    x < 10

  Therefore:
    0 < x < 10

Now the problem has been successfully modeled.

The remaining calculus is:
  V'(x) = 0
followed by testing the critical points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. MODELING A BUSINESS PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Modeling isn't limited to geometry.

Suppose:
  A company sells a product for a price that decreases as more units are sold.

Suppose the price is:
  p(x) = 100 - 2x

where x is the number of units sold.

Revenue Model:
  Revenue is:
    R = (price)(quantity)
  Therefore:
    R(x) = xp(x)
  So:
    R(x) = x(100 - 2x)
  or:
    R(x) = 100x - 2x²

That is the mathematical model for revenue.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. MODELING PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the company's cost is:
  C(x) = 500 + 20x

Revenue:
  R(x) = 100x - 2x²

Profit is:
  P(x) = R(x) - C(x)

Therefore:
  P(x) = 100x - 2x² - (500 + 20x)

Simplify:
  P(x) = 80x - 2x² - 500

Now we can optimize:
  P'(x) = 80 - 4x

Set:
  P'(x) = 0
giving:
  x = 20

Thus the model predicts that:
  20 units
maximizes profit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. MODELING A DISTANCE PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a point:
  P = (a, b)

is given and we want to find the closest point on:
  y = f(x)

A point on the curve is:
  Q = (x, f(x))

The distance is:
  d = √((x - a)² + (f(x) - b)²)

Instead of using d, model the squared distance:
  D(x) = (x - a)² + (f(x) - b)²

Then minimize:
  D(x)

This is a distance optimization model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. MODELING A COST PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company produces x units.

The cost may consist of:
  Fixed cost: F
  Variable cost: V(x)

Therefore:
  C(x) = F + V(x)

For example:
  C(x) = 5000 + 25x + 0.05x²

This model can then be used to determine:
  • minimum cost
  • marginal cost
  • average cost
  • optimal production levels

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. MODELING WITH MULTIPLE CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some problems have more than one relationship.

For example:
  A box must have a volume of 1000 cm³ and use the least possible material.

You might have:
  V = lwh = 1000

as the volume constraint.

The surface area might be:
  S = 2lw + 2lh + 2wh

The objective is:
  Minimize S

while satisfying:
  lwh = 1000

The model consists of:
  Objective: S
and:
  Constraint: lwh = 1000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. MODELING WITH FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A powerful way to think about optimization is:

  Real-world quantity Q
  becomes:
    Q = f(x)

Then calculus determines where:
  f'(x) = 0

The modeling process is essentially deciding what f(x) should be.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. OBJECTIVE VS. CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Consider:

  A farmer wants to maximize the area of a rectangular field using 200 meters of fencing.

Objective:
  A = xy
because we want maximum area.

Constraint:
  2x + 2y = 200
because the amount of fencing is fixed.

Remember:
  Objective = what you optimize
  Constraint = what limits you

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MODELING PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangle: A = xy, Constraint: 2x + 2y = P
  Box: V = lwh
  Cylinder: V = πr²h, Surface area: S = 2πr² + 2πrh
  Circle: A = πr², C = 2πr
  Triangle: A = (1/2)bh
  Profit: P = R - C
  Revenue: R = px
  Distance: d = √((Δx)² + (Δy)²) or d² = (Δx)² + (Δy)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. MODELING AND UNITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always keep track of units.

For example:
  Length: meters
  Area: m²
  Volume: m³
  Cost: dollars
  Profit: dollars

If your answer is:
  x = 25

you should know whether it means:
  • 25 meters
  • 25 units
  • 25 dollars

depending on the model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. DIMENSIONAL ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Units can help detect modeling errors.

For example:
  length × width
gives:
  m × m = m²

which is correct for area.

Similarly:
  length × width × height
gives:
  m³

which is correct for volume.

If your supposed volume equation produces:
  m²

something is probably wrong.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. COMMON MODELING MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Not defining variables
  Don't immediately write equations without explaining: x = ?

Mistake 2: Optimizing the wrong quantity
  If the question asks for maximum profit:
    Optimize P
  not simply revenue.

Mistake 3: Ignoring the constraint
  The constraint is what connects your variables.

Mistake 4: Using the wrong geometric formula
  Make sure you know whether you're dealing with:
    • area
    • perimeter
    • volume
    • surface area
    • circumference

Mistake 5: Ignoring physical restrictions
  For example:
    x > 0
  and:
    x < 10
  may be required.

Mistake 6: Forgetting units
  Always interpret the final answer with the correct units.

Mistake 7: Solving the calculus but not the original problem
  If you get x = 25, you still need to explain what 25 represents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. A POWERFUL MODELING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before differentiating, ask:

  Question 1: What am I optimizing?
    A, V, C, R, P, d, ...

  Question 2: What are my variables?
    x, y, ...

  Question 3: What information is fixed?
    This usually creates the constraint.

  Question 4: What equation represents the constraint?
    g(x, y) = c

  Question 5: Can I eliminate one variable?
    y = f(x)

  Question 6: What is the valid domain?
    a ≤ x ≤ b or a < x < b

  Question 7: What function am I actually optimizing?
    F(x)

Only after answering these questions should you start differentiating.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE FULL MODELING EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's put everything together.

Problem:
  A farmer has 120 meters of fencing and wants to enclose a rectangular field 
  along a straight wall. The wall forms one side, so only three sides need 
  fencing. Find the dimensions that maximize the area.

Step 1: Define variables
  Let:
    x = width
    y = length

Step 2: Identify the objective
  We want maximum area:
    A = xy

Step 3: Identify the constraint
  Only three sides require fencing:
    2x + y = 120

Step 4: Solve for one variable
  y = 120 - 2x

Step 5: Create the model
  Substitute into area:
    A = x(120 - 2x)
  Therefore:
    A(x) = 120x - 2x²

Step 6: Determine the domain
  Since:
    x > 0
  and:
    120 - 2x > 0
  we get:
    0 < x < 60

Step 7: Differentiate
  A'(x) = 120 - 4x

Set equal to zero:
  120 - 4x = 0
  x = 30

Step 8: Find the other dimension
  y = 120 - 2(30)
  y = 60

Step 9: Interpret
  The optimal dimensions are:
    30 m × 60 m

  Maximum area:
    A = 30(60)
    A_max = 1800 m²

This example demonstrates the complete modeling process.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. THE MODELING HIERARCHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of optimization as having three levels:

Level 1 — Reality:
  A real-world situation:
    "Build a container with the greatest possible capacity."

  ↓

Level 2 — Mathematical Model:
  V(x) = x(L - 2x)(W - 2x)

  ↓

Level 3 — Calculus:
  V'(x) = 0

  ↓

Result:
  x = optimal dimension

This is why modeling is so important: calculus can only optimize the model you create.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Modeling Optimization Problems is the bridge between a real-world problem and calculus.

The complete process is:

  Real Situation → Variables → Objective → Constraint → 
  One-Variable Model → Derivative → Critical Number → Optimal Solution

The most important distinction:

  Objective = What you want to maximize/minimize
  Constraint = What limits your choices

And the most important skill is:

  Translate the words of the problem into equations before doing any calculus.

Once the correct mathematical model is created, the rest of the optimization process—differentiate, find critical numbers, test them, and interpret the result—becomes much more systematic.
  `,
  examples: [
    "Rectangle with 200m fencing → x = 50, y = 50, max area = 2500m²",
    "Open box from 30×20 sheet → V(x) = x(30-2x)(20-2x), domain 0<x<10",
    "Revenue model with price p(x) = 100 - 2x → R(x) = 100x - 2x²",
    "Profit model: C(x) = 500 + 20x, R(x) = 100x - 2x² → P(x) = 80x - 2x² - 500",
    "Distance model: D(x) = (x-a)² + (f(x)-b)² for closest point on curve",
    "Three-sided fencing along wall: 2x + y = 120 → x = 30, y = 60",
  ],
};

export default topic;