const topic = {
  id: "introduction-to-optimization",
  title: "Introduction to Optimization",
  summary:
    "Definition of optimization, objective functions, constraints, maximizing and minimizing, and the general optimization process.",
  details: `
Optimization is the process of finding the best possible value of a quantity while satisfying certain conditions or restrictions.

In calculus, optimization is commonly used to find:
  • the maximum possible value
  • the minimum possible value
  • the largest area
  • the smallest cost
  • the greatest profit
  • the shortest distance
  • the least amount of material
  • the maximum volume

The central idea is: Use mathematics to determine the best solution among all possible choices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN OPTIMIZATION PROBLEM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An optimization problem usually gives you a situation where something needs to be maximized or minimized.

Example: A farmer has 100 meters of fencing and wants to create a rectangular enclosure with the largest possible area.

Here, the goal is to maximize the area.

Another example: Find the dimensions of a box that use the least amount of material while holding a required volume.

Here, the goal is to minimize the amount of material.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MAXIMUM VS. MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two major types of optimization.

Maximization: You are looking for the largest possible value.
  Examples: Maximum area, Maximum profit, Maximum volume, Maximum height, Maximum revenue.
  Mathematically: Maximize f(x)

Minimization: You are looking for the smallest possible value.
  Examples: Minimum cost, Minimum distance, Minimum surface area, Minimum time, Minimum material.
  Mathematically: Minimize f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The quantity you want to maximize or minimize is called the objective function.

Example: Suppose the area of a rectangle is A = xy. If the problem asks for the largest possible area, then A = xy is the objective function.

If a company has a profit function P(x) = 100x - x² and wants to find its greatest profit, then P(x) = 100x - x² is the objective function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems usually have constraints.

A constraint is a condition that limits the possible solutions.

Example: Suppose a rectangle has a perimeter of 100 meters. The perimeter equation is: 2x + 2y = 100. This equation is a constraint. It tells us that we cannot choose any arbitrary values of x and y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: MAXIMUM AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have 100 meters of fencing and want to build a rectangular enclosure with the greatest possible area.

Let: x = length and y = width

The perimeter is: 2x + 2y = 100

Divide by 2: x + y = 50

Solve for y: y = 50 - x

The area is: A = xy

Substitute y = 50 - x: A(x) = x(50 - x)

Therefore: A(x) = 50x - x²

Now we have transformed the problem into a single-variable optimization problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING THE CRITICAL NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To maximize the area, differentiate: A(x) = 50x - x²

Therefore: A'(x) = 50 - 2x

Set the derivative equal to zero: 50 - 2x = 0 → 2x = 50 → x = 25

So: y = 50 - 25 = 25

Therefore, the rectangle with the greatest area is: 25 m × 25 m

The maximum area is: A = 25(25) = 625 m²

Notice something important: the optimal rectangle is a square.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GENERAL OPTIMIZATION PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most calculus optimization problems can be solved using a similar procedure.

Step 1: Identify what you are optimizing
  Ask: What am I trying to maximize or minimize? This becomes your objective function.

Step 2: Identify the constraints
  Look for information that restricts the variables.
  Examples: P = 2x + 2y, V = lwh, x + y = 20

Step 3: Write the objective function
  Express the quantity being optimized mathematically. Example: A = xy

Step 4: Reduce to one variable
  Use the constraint to eliminate one variable.
  Example: x + y = 50 gives y = 50 - x, then A(x) = x(50 - x)

Step 5: Find the critical numbers
  Differentiate the objective function: A'(x), then solve A'(x) = 0.
  Also consider points where A'(x) does not exist, if they lie in the domain.

Step 6: Determine whether it is a maximum or minimum
  You can use: First Derivative Test, Second Derivative Test, or Absolute Maximum/Minimum analysis.
  For the second derivative: A''(x) < 0 usually indicates a local maximum, while A''(x) > 0 usually indicates a local minimum.

Step 7: Check the domain
  This is extremely important. The mathematical solution must make physical sense.
  For example, a length cannot normally be negative: x > 0.

Step 8: State the answer in context
  Don't stop at x = 25. Explain what x = 25 represents.
  Example: Therefore, the rectangle should have dimensions 25 m by 25 m, giving a maximum area of 625 m².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. OPTIMIZATION AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The reason derivatives are so useful in optimization is that they describe how a function is changing.

At a maximum or minimum, the graph often reaches a turning point.

For a differentiable function: f'(x) = 0 at an interior local maximum or minimum.

Geometrically, the tangent line is horizontal.

Example: f(x) = -x² + 4x

Then: f'(x) = -2x + 4

Set: -2x + 4 = 0 → x = 2

At x = 2, the function reaches its maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. REAL-WORLD APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization is one of the most practical applications of calculus.

Business:
  Companies can optimize: profit, revenue, production, pricing, operating costs.
  Example: P(x) = R(x) - C(x) where P = profit, R = revenue, C = cost. The company may want to find maximum profit.

Engineering:
  Engineers use optimization to determine: minimum material usage, maximum structural strength, minimum energy consumption, optimal dimensions, shortest routes.

Manufacturing:
  A manufacturer may want to produce the greatest number of products while minimizing production costs.

Transportation:
  Optimization can determine: shortest routes, minimum travel time, minimum fuel consumption, optimal vehicle scheduling.

Architecture:
  Optimization can be used to determine: maximum building space, minimum construction materials, optimal dimensions, efficient structural designs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ABSOLUTE OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems can involve an absolute maximum or absolute minimum.

For a function on a closed interval: [a, b]

we can evaluate:
  • Critical numbers inside the interval
  • The endpoints a and b

Then compare all function values.

Example: f(x) = x² - 4x + 3 on [0, 5]

First find: f'(x) = 2x - 4

Set: 2x - 4 = 0 → x = 2

Evaluate: f(0) = 3, f(2) = -1, f(5) = 8

Therefore: Absolute minimum = -1 and Absolute maximum = 8.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT VOCABULARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Term: Optimization
Meaning: Finding the best possible value

Term: Objective Function
Meaning: Function being maximized or minimized

Term: Constraint
Meaning: Condition restricting possible solutions

Term: Maximum
Meaning: Largest value

Term: Minimum
Meaning: Smallest value

Term: Critical Number
Meaning: Point where f'(x) = 0 or f'(x) does not exist

Term: Feasible Region
Meaning: Set of values satisfying the constraints

Term: Maximization
Meaning: Finding the greatest value

Term: Minimization
Meaning: Finding the least value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. KEY FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Area of a rectangle
Formula: A = lw

Concept: Perimeter of a rectangle
Formula: P = 2l + 2w

Concept: Area of a circle
Formula: A = πr²

Concept: Circumference
Formula: C = 2πr

Concept: Volume of a rectangular box
Formula: V = lwh

Concept: Volume of a cylinder
Formula: V = πr²h

Concept: Surface area of a cylinder
Formula: S = 2πr² + 2πrh

These formulas frequently appear as objective functions or constraints in optimization problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important concept to remember is:

  Optimization = Find the best possible value under given constraints

The typical calculus strategy is:

  Problem → Objective Function → Constraint → One Variable → Derivative → Critical Number → Maximum/Minimum

Simple way to remember it: What do I want? → What limits me? → Write the function → Differentiate → Find the best value → Interpret the answer.

This topic is the foundation for the later calculus topics Optimization Problems, Related Rates, Absolute Extrema, and Applications of Derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Introduction to Optimization is the foundation for solving real-world problems using derivatives.

Key concepts covered:

  ✓ What Is an Optimization Problem?
  ✓ Maximum vs. Minimum
  ✓ Objective Function
  ✓ Constraints
  ✓ Example: Maximum Area
  ✓ Finding the Critical Number
  ✓ General Optimization Process
  ✓ Optimization and Derivatives
  ✓ Real-World Applications
  ✓ Absolute Optimization
  ✓ Important Vocabulary
  ✓ Key Formulas
  `,
  examples: [
    "Maximize area with 100 m fencing: rectangle 25×25 → max area 625 m²",
    "Profit function: P(x) = 100x - x² → maximize profit",
    "Objective function: A = xy (area of rectangle)",
    "Constraint: 2x + 2y = 100 (perimeter)",
    "Reduce to one variable: y = 50 - x → A(x) = x(50 - x)",
    "Find critical number: A'(x) = 50 - 2x = 0 → x = 25",
    "Second derivative test: A''(x) = -2 < 0 → maximum",
    "Check domain: x > 0, y > 0",
    "Absolute max on [0,5]: f(x) = x² - 4x + 3 → max at x=5 (8), min at x=2 (-1)",
    "Business: maximize profit",
    "Engineering: minimize material usage",
    "Manufacturing: minimize production costs",
    "Transportation: minimize travel time",
    "Architecture: maximize building space",
    "Optimization = Best possible value under constraints",
  ],
};

export default topic;