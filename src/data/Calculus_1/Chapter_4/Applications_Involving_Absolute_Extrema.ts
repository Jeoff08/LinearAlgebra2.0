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

An absolute maximum is the highest value that a function attains over its entire domain or over a specified interval. In practical terms, if you are measuring something like profit, area, or height, the absolute maximum represents the best possible outcome the largest profit, the largest area, or the greatest height. Mathematically, for a function f defined on a set D, the absolute maximum occurs at a point c in D if f(c) is greater than or equal to every other value f(x) for all x in D. This means no other point in the domain produces a larger output. The absolute maximum is a global property; it is not just about being larger than nearby points (which would be a local maximum), but about being the largest of all. In optimization problems, finding the absolute maximum is often the primary goal, whether it is to maximize revenue, yield, or efficiency.

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

An absolute minimum is the lowest value that a function attains over its entire domain or interval. It corresponds to the worst-case scenario in many applications the smallest profit, the least cost, or the minimum distance. For a function f on a set D, the absolute minimum occurs at a point c if f(c) is less than or equal to every other value f(x) for all x in D. Like the absolute maximum, it is a global property: no point in the domain produces a smaller output. In optimization problems, we often seek to minimize costs, materials, or time, so finding the absolute minimum is crucial. The absolute minimum can occur at interior critical points or at the endpoints of a closed interval, so a thorough search is necessary.

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

In real-world problems, we rarely study functions for their own sake; we use them to make decisions. The power of calculus lies in its ability to find optimal solutions the best or worst outcomes under given constraints. For instance, a business wants to maximize profit, a farmer wants to maximize crop yield, an engineer wants to minimize material usage, and a logistics company wants to minimize delivery time. All these problems can be modeled mathematically: we define a function that represents the quantity we care about (profit, cost, area, etc.) and then find its absolute maximum or minimum over a feasible domain. This process from a real-world situation to a mathematical function and then to an optimal value is the essence of optimization. Absolute extrema provide the answers that guide practical decisions. Without this method, we would have to rely on guesswork or trial and error, which is inefficient and often impossible.

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

The closed interval method is the standard technique for finding absolute extrema when the function is continuous on a closed interval [a, b]. The Extreme Value Theorem guarantees that such a function will attain both an absolute maximum and an absolute minimum somewhere in that interval. The method is systematic: first, find all critical numbers inside the interval points where the derivative is zero or does not exist. Second, evaluate the function at each of these critical numbers and at the endpoints a and b. Third, compare these values. The largest value is the absolute maximum, and the smallest is the absolute minimum. This method works because absolute extrema can only occur at critical points or at the endpoints; there is no other possibility. It is reliable and relatively simple, making it the go-to approach for optimization problems with a closed and bounded domain.

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

One of the classic applications of absolute extrema is maximizing the area of a rectangle given a fixed perimeter. This problem illustrates how to use calculus to find the optimal dimensions. Suppose you have 40 meters of fencing to enclose a rectangular field. You want to know the width and length that give the largest possible area. We set up variables, use the perimeter constraint to express one variable in terms of the other, and then form the area function. The domain is constrained by the fact that dimensions cannot be negative and the perimeter is fixed. Applying the closed interval method differentiating, finding the critical number, and checking endpoints reveals that a square gives the maximum area. This result is intuitive but also mathematically proven. Such problems appear in many fields, from agriculture to architecture, where efficient use of materials is essential.

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

Cost minimization is a frequent objective in business and manufacturing. Given a cost function that depends on the number of units produced, we want to find the production level that yields the lowest total cost. For example, if C(x) = x² - 20x + 150, where x is the number of units produced, and production is constrained to the interval [0, 20], we can find the minimum cost by applying the closed interval method. Differentiating gives C'(x) = 2x - 20, so the critical number is x = 10. Evaluating the endpoints and the critical point, we find that the minimum cost is 50, occurring at x = 10. This type of analysis helps companies set production targets to minimize expenses, which is vital for profitability. It also illustrates that the minimum cost may occur at an interior point, not just at the boundaries.

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

Profit maximization is a fundamental goal in economics. Profit is defined as revenue minus cost, and we often want to find the production level that maximizes profit. For instance, if revenue is R(x) = 100x - x² and cost is C(x) = 20x + 100, then profit P(x) = R(x) - C(x) = -x² + 80x - 100. With a domain of [0, 80] (since revenue becomes negative beyond 80), we differentiate: P'(x) = -2x + 80, so the critical point is x = 40. Evaluating P(0), P(40), and P(80) shows that the maximum profit is 1500 at x = 40. This analysis is crucial for businesses to determine optimal output levels. It also demonstrates that the maximum profit can occur at a critical point, not necessarily at an endpoint, but we still need to check endpoints to be sure. This example is a classic application of absolute extrema in economics.

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

The motion of projectiles is a common application of absolute extrema in physics. When an object is thrown upward, its height as a function of time is a quadratic function with a maximum at the vertex. For example, h(t) = -16t² + 64t + 5 models the height (in feet) of a ball thrown from an initial height of 5 feet with initial velocity 64 ft/s. The coefficient of t² is negative, so the parabola opens downward, and the maximum occurs at the vertex. By differentiating, we get h'(t) = -32t + 64, which yields t = 2 seconds. Substituting back gives h(2) = 69 feet. This maximum height is the absolute maximum of the function over the time interval until the ball hits the ground (t ≥ 0). Such problems are essential in sports, engineering, and any field involving projectile motion.

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

It is crucial to distinguish between the input where the extremum occurs and the extremum value itself. In many optimization problems, we need to report both: the value of the variable that produces the optimal outcome and the optimal outcome itself. For example, if f(3) = 10 is the absolute maximum, then the absolute maximum value is 10, and it occurs at x = 3. The point on the graph is (3, 10). Confusing these can lead to incorrect conclusions, especially when interpreting the result in context. When you solve a problem, always state clearly what the variable represents and what the function value represents. For instance, "The maximum area is 100 square meters, achieved when the width and length are both 10 meters." This clarity ensures that the answer is meaningful and actionable.

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

A common mistake in optimization is to find the critical points where the derivative is zero and assume those are the only candidates for extrema. However, on a closed interval, the endpoints are always candidates and must be evaluated. For instance, consider f(x) = x³ - 3x on [-2, 2]. The derivative is f'(x) = 3x² - 3, which gives critical numbers x = ±1. But evaluating the function at the endpoints gives f(-2) = -2 and f(2) = 2, while f(-1) = 2 and f(1) = -2. Thus the absolute maximum is 2, occurring at both x = -1 and x = 2, and the absolute minimum is -2, occurring at x = 1 and x = -2. Notice that the maximum at x = 2 is an endpoint, not a critical point. If we had ignored endpoints, we would have missed the maximum at x = 2. Therefore, the closed interval method always includes endpoints as part of the candidate set. This is not optional; it is mandatory for correct results.

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

Solving optimization problems involves a systematic approach that translates a real-world scenario into a mathematical framework. The first step is to identify the quantity to be optimized (maximized or minimized). Then, assign a variable to represent a key unknown. Use any given constraints to express other quantities in terms of that variable, and write the objective function the function whose extrema we seek. It is essential to determine the domain of the objective function, which is often a closed interval based on physical limits. Then, apply the closed interval method: differentiate, find critical numbers, evaluate the function at those numbers and at the endpoints, and compare. Finally, interpret the results in the context of the original problem. This strategy works for a wide variety of applications, from geometry to economics to physics. With practice, it becomes a reliable routine for solving optimization problems.

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

Absolute extrema are not limited to abstract functions; they appear in nearly every field that uses quantitative analysis. In geometry, we maximize area or volume given fixed perimeters or surface areas. In business, we maximize profit or revenue and minimize cost. In physics, we maximize height or range of projectiles. In engineering, we minimize material usage or energy consumption. In economics, we find optimal production levels. In logistics, we minimize distance or time. In agriculture, we maximize crop yield. In packaging, we minimize surface area for a given volume. The list is extensive. Each application follows the same pattern: define a function, find its absolute extrema on a feasible domain, and interpret the result. Mastering this skill equips you to solve practical problems across many disciplines. The examples provided in this topic are a small sample of the vast array of possible applications.

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

The overarching concept is that applications involving absolute extrema are optimization problems. We take a real-world situation, represent it mathematically with a function, and then use calculus to find the function's absolute maximum or minimum. The process is a bridge between abstract derivatives and concrete decisions. The key steps are: define variables, establish a constraint, write the objective function, determine its domain, find critical numbers, evaluate endpoints, compare, and interpret. The most common mistake is forgetting to check endpoints, so always include them. Also, remember the distinction between the location of the extremum and the extremum value. With practice, you will be able to recognize optimization problems and solve them confidently. This skill is one of the most practical and rewarding applications of calculus.

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