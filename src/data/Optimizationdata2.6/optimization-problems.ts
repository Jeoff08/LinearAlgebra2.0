const topic = {
  id: "optimization-problems",
  title: "Optimization Problems",
  summary:
    "Definition of optimization problems, maximizing and minimizing, step-by-step procedure, and real-world applications.",
  details: `
Optimization Problems are calculus problems where we use derivatives to find the largest or smallest possible value of a quantity.

In simple terms: Optimization means finding the best possible solution under given conditions.

The goal may be to maximize something or minimize something.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN OPTIMIZATION PROBLEM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An optimization problem typically contains three important parts:
  • Objective — what you want to maximize or minimize
  • Constraint — what limits your choices
  • Variables — quantities that can change

Example: A farmer has 100 meters of fencing and wants to create a rectangular field with the largest possible area.

Here:
  • Objective: maximize area
  • Constraint: 100 meters of fencing
  • Variables: length and width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MAXIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A maximization problem asks you to find the greatest possible value.

Examples include:
  • Maximum area
  • Maximum volume
  • Maximum profit
  • Maximum revenue
  • Maximum height
  • Maximum distance
  • Maximum production

Mathematically: Maximize f(x)

Example: A(x) = 50x - x². If we want the largest possible area, we need to find the maximum value of A(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MINIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A minimization problem asks you to find the smallest possible value.

Examples include:
  • Minimum cost
  • Minimum distance
  • Minimum surface area
  • Minimum material
  • Minimum time
  • Minimum energy consumption

Mathematically: Minimize f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE GENERAL STEPS FOR SOLVING OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful procedure is:

Step 1: Understand the problem
  Read the problem carefully. Determine: What is being maximized? What is being minimized? What information is given? What restrictions exist?

Step 2: Draw a diagram
  For geometry problems, a diagram can make the problem much easier. Label the unknown quantities. Example: Length = x, Width = y

Step 3: Define the variables
  Choose variables for the unknown quantities. Example: x = length, y = width. Be consistent with your variables throughout the problem.

Step 4: Write the objective function
  The objective function represents what you are trying to optimize. For a rectangle: A = xy. If you want the maximum area, A = xy is your objective function.

Step 5: Write the constraint equation
  The constraint describes the restriction in the problem. Example: If the perimeter is 100, 2x + 2y = 100. This is the constraint.

Step 6: Rewrite the objective function using one variable
  Optimization using basic single-variable calculus requires an objective function involving only one variable. From 2x + 2y = 100, solve for y: y = 50 - x. Now substitute this into A = xy, giving A(x) = x(50 - x). Therefore: A(x) = 50x - x².

Step 7: Find the critical numbers
  Differentiate: A'(x) = 50 - 2x. Set the derivative equal to zero: 50 - 2x = 0 → x = 25. This is the critical number.

Step 8: Determine whether it is a maximum or minimum
  Take the second derivative: A''(x) = -2. Since A''(x) < 0, the function is concave downward. Therefore: x = 25 gives a maximum.

Step 9: Find the remaining variables
  Since y = 50 - x, we have y = 50 - 25 = 25. Therefore: x = 25, y = 25.

Step 10: Answer the original question
  The largest possible area is: A = 25(25) = 625 m². So the rectangle should be 25 m × 25 m.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. COMPLETE EXAMPLE: MAXIMUM AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: A farmer has 100 meters of fencing and wants to build a rectangular enclosure. What dimensions produce the maximum area?

Step 1: Define variables
  Let: x = length, y = width

Step 2: Write the constraint
  The perimeter is: 2x + 2y = 100. Divide by 2: x + y = 50. Solve for y: y = 50 - x.

Step 3: Write the objective function
  Area: A = xy. Substitute: A(x) = x(50 - x) = 50x - x².

Step 4: Differentiate: A'(x) = 50 - 2x. Set equal to zero: 50 - 2x = 0 → x = 25.

Step 5: Find y: y = 50 - 25 = 25.

Step 6: Find maximum area: A = 25(25) = 625 m².

Answer: 25 m × 25 m produces the maximum area of 625 m².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: MINIMUM DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization isn't limited to area.

Suppose we want to find the point on the x-axis closest to: P = (3, 4)

A point on the x-axis has coordinates: Q = (x, 0)

The distance formula is: d = √((x-3)² + (0-4)²) = √((x-3)² + 16)

Because the square root function is increasing, we can minimize the squared distance instead: D(x) = (x-3)² + 16

Differentiate: D'(x) = 2(x-3). Set equal to zero: 2(x-3) = 0 → x = 3.

Therefore: Q = (3, 0). The minimum distance is: d = 4.

So: Minimum distance = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: MAXIMUM VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a rectangular box with a fixed amount of material.

The volume is: V = lwh

If the constraints allow us to express l and w in terms of h, then we can create V(h) and differentiate: V'(h), then solve V'(h) = 0.

The resulting critical number can give the dimensions producing the maximum volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. OPTIMIZATION IN BUSINESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization is heavily used in economics and business.

Suppose a company's revenue is: R(x) = 100x - x², where x represents the number of products sold.

To find maximum revenue: R'(x) = 100 - 2x

Set: R'(x) = 0 → 100 - 2x = 0 → x = 50

Therefore, the company achieves maximum revenue when x = 50 units are sold, assuming the model and domain make that value feasible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. OPTIMIZATION AND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A major idea in optimization is the critical number.

For a function f(x), a critical number occurs when: f'(x) = 0 or when f'(x) does not exist, provided the point is in the domain of f.

Critical numbers are important because local maxima and minima can occur there.

However: Not every critical number is a maximum or minimum.

For example: f(x) = x³ has f'(x) = 3x², so f'(0) = 0. But x = 0 is neither a maximum nor a minimum.

So critical numbers must be tested.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test examines how the function changes around a critical number.

Local Maximum:
  If f'(x) > 0 before the critical point and f'(x) < 0 after it, then Local Maximum.
  The function changes: Increasing → Decreasing.

Local Minimum:
  If f'(x) < 0 before the critical point and f'(x) > 0 after it, then Local Minimum.
  The function changes: Decreasing → Increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test can sometimes determine the type of critical point more quickly.

At f'(c) = 0, calculate f''(c).
  • If f''(c) > 0, then Local Minimum (concave upward).
  • If f''(c) < 0, then Local Maximum (concave downward).
  • If f''(c) = 0, the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important parts of optimization is checking whether your answer makes sense.

For physical quantities: x > 0 because lengths, widths, volumes, and similar quantities cannot normally be negative.

Example: If 0 < x < 50, then a solution such as x = 75 is impossible, even if the algebra produces it.

Always check the domain and constraints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. OPEN-BOX OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common calculus problem involves creating an open box from a rectangular sheet.

Suppose a square sheet has side length 20 cm.

Squares of side x are cut from each corner.

The resulting box has:
  • Length = 20 - 2x
  • Width = 20 - 2x
  • Height = x

Therefore: V = x(20 - 2x)²

This is the objective function.

To maximize the volume: V'(x) = 0 is used to find the optimal x.

This type of problem teaches an important pattern: Geometry → Equation → Function → Derivative → Optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON TYPES OF OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometry:
  • Maximum rectangle area
  • Minimum surface area
  • Maximum box volume
  • Minimum perimeter
  • Maximum cylinder volume

Business:
  • Maximum profit
  • Maximum revenue
  • Minimum cost
  • Optimal production level

Distance:
  • Minimum distance between points
  • Shortest path
  • Closest point on a curve

Physics:
  • Maximum height
  • Minimum energy
  • Optimal speed
  • Maximum range

Engineering:
  • Minimum material
  • Maximum efficiency
  • Optimal dimensions
  • Minimum construction cost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Not identifying what to optimize
  Always ask: What exactly am I maximizing or minimizing?

❌ Mistake 2: Forgetting the constraint
  The constraint is what allows you to eliminate one variable.

❌ Mistake 3: Using two variables in the final derivative
  For basic single-variable optimization, you generally want f(x) rather than f(x, y).

❌ Mistake 4: Forgetting the domain
  A negative length is not physically meaningful.

❌ Mistake 5: Assuming every critical number is optimal
  You must determine whether the critical point is actually a maximum or minimum.

❌ Mistake 6: Forgetting endpoints
  If the problem has a closed interval, evaluate the endpoints as well.

❌ Mistake 7: Giving only the value of x
  Always translate the mathematical answer back into the original problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. OPTIMIZATION PROBLEM TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful template to memorize is:

  1. Define variables
  2. Identify the objective
  3. Write the objective function
  4. Identify the constraint
  5. Solve the constraint for one variable
  6. Substitute into the objective
  7. Differentiate
  8. Set f'(x) = 0
  9. Test critical points
  10. Check endpoints/domain
  11. Interpret the answer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Optimization Problems, remember:

  • Optimization problems combine algebra, geometry, and derivatives.
  • The basic pattern is: Real-World Problem → Constraint → Objective Function → Derivative → Critical Number → Maximum/Minimum.
  • Easy way to remember: What do I want? → What limits me? → Build the function → Differentiate → Find the critical point → Test it → Give the answer in context.
  • The most important skill is not simply taking the derivative. The difficult part is translating the real-world situation into the correct objective function and constraint.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization Problems are one of the most practical applications of derivatives in calculus.

Key concepts covered:

  ✓ What Is an Optimization Problem?
  ✓ Maximization Problems
  ✓ Minimization Problems
  ✓ General Steps
  ✓ Maximum Area Example
  ✓ Minimum Distance Example
  ✓ Maximum Volume Example
  ✓ Business Applications
  ✓ Critical Numbers
  ✓ First Derivative Test
  ✓ Second Derivative Test
  ✓ Domain Restrictions
  ✓ Open-Box Optimization
  ✓ Common Types
  ✓ Common Mistakes
  ✓ Problem Template
  `,
  examples: [
    "Maximize area with 100 m fencing: 25×25 rectangle → 625 m²",
    "Minimum distance from (3,4) to x-axis: closest point (3,0), distance 4",
    "Maximize revenue: R(x) = 100x - x² → x = 50 gives max revenue",
    "Open box from 20×20 sheet: V = x(20-2x)² → maximize volume",
    "First Derivative Test: + → - means maximum, - → + means minimum",
    "Second Derivative Test: f''(c) < 0 → maximum, f''(c) > 0 → minimum",
    "Domain check: lengths must be positive (x > 0)",
    "Critical number: f'(x) = 0 or DNE",
    "Business: maximize profit P(x) = R(x) - C(x)",
    "Geometry: maximize area, minimize surface area",
    "Physics: maximize height, minimize energy",
    "Engineering: minimize material, maximize efficiency",
    "Template: Define variables → Objective → Constraint → Differentiate → Solve → Interpret",
    "What do I want? → What limits me? → Build function → Differentiate → Find best value",
  ],
};

export default topic;   