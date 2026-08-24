// filename: applications-involving-absolute-extrema.ts

const topic = {
  id: "applications-involving-absolute-extrema",
  title: "Applications Involving Absolute Extrema",
  summary:
    "Real-world optimization problems where we use absolute maximum and minimum values of a function to determine the greatest or smallest possible outcome, such as maximum area, minimum cost, or maximum profit.",
  details: `
Applications involving absolute extrema are problems where we use absolute maximum and absolute minimum values of a function to solve a real-world problem.

These applications are especially important in optimization because we often want to determine:
  • the greatest possible value of something,
  • the smallest possible value of something,
  • the maximum profit,
  • the minimum cost,
  • the maximum area or volume,
  • the minimum amount of material needed,
  • the maximum distance or height, or
  • the minimum time or energy required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN ABSOLUTE MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function is defined on an interval [a, b].

The function f(x) has an absolute maximum at x = c if:
  f(c) ≥ f(x)

for every x in the domain.

In simpler terms:
  The absolute maximum is the highest output value of the function over the 
  entire interval being considered.

For example:
  f(x) = -x² + 4 on the interval [-3, 3].

  The graph reaches its highest point at x = 0.

  Therefore, f(0) = 4 is the absolute maximum value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS AN ABSOLUTE MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) has an absolute minimum at x = c if:
  f(c) ≤ f(x)

for every x in the domain.

In simple terms:
  The absolute minimum is the lowest output value of the function over the 
  entire interval.

For f(x) = -x² + 4 on [-3, 3]:
  f(-3) = f(3) = -5

Therefore, the absolute minimum is -5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY ABSOLUTE EXTREMA ARE IMPORTANT IN APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In real-world problems, we usually aren't simply interested in the function itself.

Instead, we want to answer questions such as:
  • What dimensions produce the largest possible area?
  • What production level gives the greatest profit?
  • What amount of material produces the smallest cost?

These questions are optimization problems.

The general idea is:
  Real-world problem → Mathematical model → Function → Absolute extrema

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE CLOSED INTERVAL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a continuous function is defined on a closed interval [a, b], the Extreme Value Theorem tells us that the function must have both an absolute maximum and an absolute minimum.

To find them, use the following procedure.

Step 1: Find the derivative
  Calculate f'(x).

Step 2: Find the critical numbers
  Solve f'(x) = 0 and identify points where f'(x) does not exist, provided they are in the domain.

Step 3: Include the endpoints
  Evaluate the function at x = a and x = b.

Step 4: Evaluate the function at every candidate
  Calculate f(a), f(b), and f(c₁), f(c₂), ... for all critical numbers cᵢ.

Step 5: Compare the values
  The largest value is the absolute maximum.
  The smallest value is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. APPLICATION EXAMPLE: MAXIMUM AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have 40 meters of fencing and want to build a rectangular enclosure.

What dimensions give the maximum possible area?

Step 1: Define the variables
  Let x = width and y = length.

  Because the rectangle has four sides:
    2x + 2y = 40

  Divide by 2:
    x + y = 20

  Therefore:
    y = 20 - x

Step 2: Create the area function
  The area of a rectangle is:
    A = xy

  Substitute y = 20 - x:
    A(x) = x(20 - x)

  Therefore:
    A(x) = 20x - x²

  The possible values of x are:
    0 ≤ x ≤ 20

  So we need to find the absolute maximum of A(x) = 20x - x² on [0, 20].

Step 3: Differentiate
  A'(x) = 20 - 2x

  Set the derivative equal to zero:
    20 - 2x = 0

  Thus:
    2x = 20
    x = 10

  So x = 10 is a critical number.

Step 4: Evaluate the candidates
  The candidates are:
    x = 0, x = 10, x = 20

  Evaluate the area:
    A(0) = 20(0) - 0² = 0
    A(10) = 20(10) - 10² = 200 - 100 = 100
    A(20) = 20(20) - 20² = 0

  Therefore:
    A_max = 100 m²

  The dimensions are:
    10 m × 10 m

Conclusion:
  The rectangle with the largest possible area is a square.
  Maximum area = 100 m²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. APPLICATION EXAMPLE: MINIMUM COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company wants to produce x units of a product.

The cost function is:
  C(x) = x² - 20x + 150

Suppose production is restricted to:
  0 ≤ x ≤ 20

We want to determine the minimum cost.

Step 1: Differentiate
  C'(x) = 2x - 20

Set equal to zero:
  2x - 20 = 0

Therefore:
  x = 10

Step 2: Check the endpoints
  Evaluate:
    C(0) = 150
    C(10) = 100 - 200 + 150 = 50
    C(20) = 400 - 400 + 150 = 150

The smallest value is 50.

Therefore, the minimum cost occurs when:
  x = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. APPLICATION EXAMPLE: MAXIMUM PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute extrema are also commonly used in business.

Suppose revenue is:
  R(x) = 100x - x²

and cost is:
  C(x) = 20x + 100

Profit is defined as:
  P(x) = R(x) - C(x)

Therefore:
  P(x) = (100x - x²) - (20x + 100)

Simplify:
  P(x) = -x² + 80x - 100

Suppose:
  0 ≤ x ≤ 80

Differentiate:
  P'(x) = -2x + 80

Set equal to zero:
  -2x + 80 = 0

Thus:
  x = 40

Now evaluate:
  P(0) = -100
  P(40) = -(40)² + 80(40) - 100
  P(40) = -1600 + 3200 - 100
  P(40) = 1500
  P(80) = -100

Therefore:
  P_max = 1500

The company achieves its maximum profit when it produces:
  40 units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. APPLICATION EXAMPLE: MAXIMUM HEIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the height of a ball is modeled by:
  h(t) = -16t² + 64t + 5

Here:
  t = time in seconds
  h(t) = height in feet

We want to determine the maximum height.

Differentiate:
  h'(t) = -32t + 64

Set equal to zero:
  -32t + 64 = 0

Therefore:
  t = 2

Evaluate:
  h(2) = -16(2)² + 64(2) + 5
  h(2) = -64 + 128 + 5
  h(2) = 69

Therefore, the ball reaches a maximum height of:
  69 feet

at:
  2 seconds

Notice the distinction:
  • t = 2 is the location/input where the maximum occurs.
  • 69 feet is the absolute maximum value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT DISTINCTION: MAXIMUM POINT VS. MAXIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts.

Suppose f(3) = 10 is the largest value of the function.

Then:
  • Absolute maximum value: 10
  • Where the maximum occurs: x = 3
  • Absolute maximum point: (3, 10)

So don't confuse:
  x = 3
with:
  f(3) = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY ENDPOINTS MUST BE CHECKED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common mistake is to find f'(x) = 0 and stop.

That is not enough when working on a closed interval.

For example:
  f(x) = x³ - 3x on [-2, 2]

The derivative is:
  f'(x) = 3x² - 3

Set equal to zero:
  3x² - 3 = 0

Thus:
  x = ±1

But we must also check:
  x = -2, x = 2

So the complete candidate list is:
  -2, -1, 1, 2

We evaluate the function at all four points.

This is why the absolute extrema procedure always includes the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. GENERAL STRATEGY FOR APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an application involving absolute extrema, you can follow this structure:

1. Identify what you are trying to maximize or minimize
  Examples: Area, Volume, Profit, Cost, Distance, Height

2. Define a variable
  For example: x = width

3. Use the given information
  Turn the conditions of the problem into an equation.

4. Write the objective function
  Create the function you want to maximize or minimize:
    A(x), V(x), P(x), C(x), ...

5. Determine the domain
  This is extremely important.
  For example: 0 ≤ x ≤ 20

6. Differentiate
  Find f'(x)

7. Find critical numbers
  Solve f'(x) = 0 and check where f'(x) is undefined.

8. Check endpoints
  Evaluate the function at every endpoint.

9. Compare all values
  Largest value: Absolute Maximum
  Smallest value: Absolute Minimum

10. Interpret the answer
  Always return to the original problem.
  Don't just say: x = 10
  Instead explain what x = 10 means.

  For example:
    "Therefore, the rectangular enclosure has a maximum area when its 
     width and length are both 10 meters."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute extrema can be used in many different situations.

  Application         What we might maximize/minimize
  ────────────────────────────────────────────────────────────────────
  Rectangle           Maximum area
  Box                 Maximum volume
  Manufacturing       Minimum cost
  Business            Maximum profit
  Sales               Maximum revenue
  Projectile          Maximum height
  Transportation      Minimum distance
  Construction        Minimum material
  Engineering         Maximum efficiency
  Agriculture         Maximum crop area
  Packaging           Minimum surface area
  Economics           Maximum revenue/profit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important idea is:

  Applications involving absolute extrema are optimization problems.

We take a real-world situation, translate it into a mathematical function, and then use calculus to find its greatest or smallest possible value.

The overall process is:

  Problem → Variables → Constraint → Objective Function → Domain → 
  f'(x) → Critical Numbers → Endpoints → Compare → Interpret

Quick memory rule:
  Maximum = highest possible output.
  Minimum = lowest possible output.
  Critical points + endpoints = candidates for absolute extrema on a closed interval.

This topic is essentially the bridge between derivatives and real-world optimization: instead of simply calculating a derivative, you use the derivative to make a practical decision about the best or worst possible outcome.
  `,
  examples: [
    "Maximum area with 40m fencing: 10m × 10m square, area = 100m²",
    "Minimum cost: C(x) = x² - 20x + 150 on [0,20] → min at x = 10, cost = 50",
    "Maximum profit: P(x) = -x² + 80x - 100 on [0,80] → max at x = 40, profit = 1500",
    "Maximum height: h(t) = -16t² + 64t + 5 → max at t = 2, height = 69 ft",
    "Closed interval method: differentiate → critical numbers → endpoints → compare",
    "Always check endpoints: f(a) and f(b)",
    "Maximum vs. minimum: highest vs. lowest output value",
  ],
};

export default topic;