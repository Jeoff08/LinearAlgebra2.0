// filename: minimum-maximum-problems.ts

const topic = {
  id: "minimum-maximum-problems",
  title: "Minimum/Maximum Problems",
  summary:
    "The foundation of calculus optimization, involving finding the largest or smallest possible value of a quantity while satisfying certain conditions, including area, volume, cost, revenue, distance, and profit optimization.",
  details: `
Minimum/Maximum Problems are some of the most important applications of derivatives in calculus. They involve finding the largest or smallest possible value of a quantity while satisfying certain conditions.

These problems are collectively called optimization problems.

The goal is to determine:

  What value is as large or as small as possible?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE MINIMUM/MAXIMUM PROBLEMS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A maximum problem asks you to find the greatest possible value of a quantity.

Examples:
  • maximum area
  • maximum volume
  • maximum profit
  • maximum revenue
  • maximum height
  • maximum distance

A minimum problem asks you to find the smallest possible value.

Examples:
  • minimum cost
  • minimum distance
  • minimum surface area
  • minimum time
  • minimum material

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MAXIMUM VS. MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function:
  y = f(x)

A maximum occurs at a point where the function reaches a high value.

A minimum occurs at a point where the function reaches a low value.

For example:
  f(x) = x²

has a minimum at:
  x = 0

because:
  f(0) = 0
and:
  x² ≥ 0

for every real x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LOCAL VS. ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Local Maximum:
  A function has a local maximum at x = c if:
    f(c) ≥ f(x)
  for values of x near c.
  It is the highest point in a small neighborhood.

Local Minimum:
  A function has a local minimum at x = c if:
    f(c) ≤ f(x)
  for values of x near c.
  It is the lowest point nearby.

Absolute Maximum:
  An absolute maximum is the largest value of the function over its entire domain or specified interval.
    f(c) ≥ f(x) for every x in the domain

Absolute Minimum:
  An absolute minimum is the smallest value over the entire domain or interval.
    f(c) ≤ f(x) for every x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE BASIC OPTIMIZATION STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most minimum/maximum problems follow this pattern:

  Understand the Problem → Define Variables → Create Function → 
  Differentiate → Find Critical Numbers → Test → Interpret

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP 1: IDENTIFY WHAT YOU ARE OPTIMIZING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ask:

  "What quantity is the problem asking me to maximize or minimize?"

That quantity becomes your objective function.

For example:
  Area: A(x)
  Volume: V(x)
  Cost: C(x)
  Profit: P(x)
  Distance: D(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP 2: DEFINE VARIABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose variables that represent the unknown quantities.

For example:
  x = width
  y = length
or:
  x = number of units produced

Good variable definitions make the rest of the problem much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 3: IDENTIFY THE CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constraint is a condition that must always be satisfied.

Examples:
  Fixed perimeter: 2x + 2y = 100
  Fixed volume: πr²h = V
  Fixed amount of material: 2x + y = 50
  Point on a curve: y = x² + 1

The constraint allows us to connect multiple variables.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 4: CREATE A ONE-VARIABLE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important steps.

Suppose:
  A = xy
and the constraint is:
  x + y = 50

Solve for y:
  y = 50 - x

Substitute:
  A = x(50 - x)

Therefore:
  A(x) = 50x - x²

Now we have a function of one variable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 5: DIFFERENTIATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate the objective function.

If:
  A(x) = 50x - x²

then:
  A'(x) = 50 - 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. STEP 6: FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set:
  A'(x) = 0

Therefore:
  50 - 2x = 0
  2x = 50
  x = 25

This is a critical number.

Remember:
  A critical number is a candidate for a maximum or minimum.
  It isn't automatically the answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP 7: DETERMINE MAXIMUM OR MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several methods.

First Derivative Test:
  Look at the sign of f'(x).
  If + → - then Local Maximum
  If - → + then Local Minimum

Second Derivative Test:
  Calculate f''(x).
  If f''(c) > 0 then Local Minimum
  If f''(c) < 0 then Local Maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: MAXIMUM AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem:
  A rectangle has a perimeter of 100 meters. Find the dimensions that maximize its area.

Step 1: Variables
  Let:
    x = length
    y = width

Step 2: Objective
  A = xy

Step 3: Constraint
  2x + 2y = 100
  Divide by 2:
    x + y = 50
  Solve:
    y = 50 - x

Step 4: One-variable function
  A = x(50 - x)
  A = 50x - x²

Step 5: Derivative
  A' = 50 - 2x
  Set:
    50 - 2x = 0
  Therefore:
    x = 25
  Then:
    y = 50 - 25 = 25

Step 6: Maximum Area
  A = 25(25)
  A_max = 625 m²

So:
  25 m × 25 m
is the optimal rectangle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: MINIMUM COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  C(x) = x² - 12x + 50

Find the production level that minimizes cost.

Differentiate:
  C'(x) = 2x - 12

Set equal to zero:
  2x - 12 = 0
  x = 6

Now calculate the second derivative:
  C''(x) = 2

Since:
  C''(6) > 0

we have a minimum.

Therefore:
  x = 6
is the minimum-cost production level.

The minimum cost is:
  C(6) = 6² - 12(6) + 50
  C(6) = 36 - 72 + 50
  C(6) = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: MAXIMUM PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  R(x) = 100x - 0.2x²
and:
  C(x) = 20x + 500

Profit is:
  P(x) = R(x) - C(x)

Therefore:
  P(x) = 100x - 0.2x² - 20x - 500
  P(x) = 80x - 0.2x² - 500

Differentiate:
  P'(x) = 80 - 0.4x

Set:
  80 - 0.4x = 0
  0.4x = 80
  x = 200

Second derivative:
  P''(x) = -0.4

Since:
  P''(200) < 0

the point is a maximum.

Therefore:
  200 units
maximizes profit under this model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ENDPOINT TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For functions defined on a closed interval [a, b], you must check:

  • Critical numbers inside the interval
  • Left endpoint: a
  • Right endpoint: b

This is called the Closed Interval Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: ABSOLUTE MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x² - 4x + 5

on:
  [0, 5]

Step 1: Differentiate
  f'(x) = 2x - 4

Set:
  2x - 4 = 0
  x = 2

Step 2: Evaluate candidates

At x = 0:
  f(0) = 5

At x = 2:
  f(2) = 4 - 8 + 5 = 1

At x = 5:
  f(5) = 25 - 20 + 5 = 10

Compare: 5, 1, 10

Therefore:
  Absolute Minimum = 1 at x = 2
and:
  Absolute Maximum = 10 at x = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY ENDPOINTS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number is not necessarily the absolute maximum or minimum.

For example, a function might have a local maximum in the middle of an interval but have an even larger value at an endpoint.

Therefore:
  Critical points alone are not enough for absolute extrema on closed intervals.
  Always compare the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f'(x) changes sign around a critical number c.

Case 1: + → -
  The function increases and then decreases.
  Therefore: Local Maximum

Case 2: - → +
  The function decreases and then increases.
  Therefore: Local Minimum

Case 3: + → +
  No local extremum.

Case 4: - → -
  No local extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f'(c) = 0

Then evaluate:
  f''(c)

If f''(c) > 0:
  the graph is concave upward:
  Local Minimum

If f''(c) < 0:
  the graph is concave downward:
  Local Maximum

If f''(c) = 0:
  the test is inconclusive.
  You need another method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number occurs at x = c when:
  f'(c) = 0
or:
  f'(c) does not exist

provided c is in the domain of f.

Critical numbers are important because local extrema can occur there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT THEOREM: EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem states:

  If f is continuous on a closed interval [a, b],
  then f must have both:
    • an absolute maximum
    • an absolute minimum
  somewhere on [a, b].

This is why closed-interval optimization problems are so manageable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. TYPES OF MINIMUM/MAXIMUM PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You will encounter many different forms.

Geometry:
  Maximize: Area or Volume

Business:
  Maximize: Profit or Revenue
  Minimize: Cost

Distance:
  Minimize: Distance

Motion:
  Maximize or minimize: position, velocity, height, distance traveled

Engineering:
  Optimize: dimensions, material usage, efficiency, energy, cost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMMON WORDS THAT SIGNAL OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Watch for words such as:

Maximum:
  • greatest
  • largest
  • highest
  • most
  • greatest possible

Minimum:
  • smallest
  • shortest
  • lowest
  • least
  • closest
  • cheapest
  • least amount

When you see these words, think: Optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Differentiating before creating the correct function
  First determine what you're optimizing.

Mistake 2: Ignoring constraints
  A constraint is often the key to reducing the problem to one variable.

Mistake 3: Assuming every critical number is an answer
  Critical numbers are only candidates.

Mistake 4: Forgetting endpoints
  For [a, b], always check a and b.

Mistake 5: Confusing local and absolute extrema
  A local maximum isn't necessarily the absolute maximum.

Mistake 6: Not interpreting the result
  Don't stop at x = 25.
  Explain what x = 25 means in the original problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. UNIVERSAL OPTIMIZATION TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Almost every applied minimum/maximum problem can be approached using:

  1. Understand what is being optimized
  2. Define variables
  3. Identify constraints
  4. Write the objective function
  5. Reduce to one variable
  6. Determine the domain
  7. Find f'(x)
  8. Find critical numbers
  9. Test critical numbers
  10. Check endpoints when necessary
  11. Compare values
  12. State the final answer in context

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a problem, ask:

  What am I trying to optimize?
    A, V, C, R, P, d, etc.
    ↓
  What variables are involved?
    x, y, ...
    ↓
  What constraint connects them?
    g(x, y) = c
    ↓
  Can I eliminate one variable?
    y = f(x)
    ↓
  Create the objective function:
    F(x)
    ↓
  Differentiate:
    F'(x)
    ↓
  Find critical numbers:
    F'(x) = 0
    ↓
  Determine maximum/minimum
    ↓
  Interpret the answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. SUMMARY OF THE MAJOR TESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                        |  What to Do
  ──────────────────────────────────┼────────────────────────────────────────────
  Critical number                  |  Solve f'(x) = 0 or find where f' doesn't exist
  Local maximum                    |  f': + → -
  Local minimum                    |  f': - → +
  Second derivative maximum        |  f''(c) < 0
  Second derivative minimum        |  f''(c) > 0
  Closed interval                  |  Check critical numbers and endpoints
  Absolute maximum                 |  Largest candidate value
  Absolute minimum                 |  Smallest candidate value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Minimum/Maximum Problems are the foundation of calculus optimization.

The derivative tells us how a quantity is changing:
  f'(x)

At an interior maximum or minimum:
  f'(x) = 0

Then we determine whether the critical point represents a maximum or minimum.

The complete idea is:

  Real-World Problem → Mathematical Model → Objective Function → 
  Derivative → Critical Numbers → Maximum/Minimum

The most important rule to remember:

  Don't just find where the derivative is zero. Find the critical numbers, 
  test them, check the domain/endpoints, and then interpret the result in 
  the original problem.

That is the core method behind area optimization, volume optimization, cost and revenue optimization, distance optimization, and nearly every other optimization topic in Calculus 1.
  `,
  examples: [
    "Maximum area with 100m perimeter → 25m × 25m square, area = 625m²",
    "Minimum cost: C(x) = x² - 12x + 50 → x = 6, cost = 14",
    "Maximum profit: R(x) = 100x - 0.2x², C(x) = 20x + 500 → x = 200 units",
    "Absolute extrema on [0,5]: f(x) = x² - 4x + 5 → min=1 at x=2, max=10 at x=5",
    "Local max/min using first derivative test",
    "Closed interval method with endpoint checking",
  ],
};

export default topic;