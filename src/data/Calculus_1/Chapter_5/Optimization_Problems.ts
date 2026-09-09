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

An optimization problem is a real-world or mathematical scenario where we seek the best possible value of a certain quantity under specific constraints. The "best" value could be the maximum (largest) or minimum (smallest) of a function that models the situation. These problems are ubiquitous in fields like engineering, economics, physics, and business. For example, a farmer might want to maximize the area of a rectangular field given a fixed amount of fencing, or a manufacturer might want to minimize production costs while maintaining quality. The common thread is that we have an objective (what we want to optimize) and constraints (limitations on the variables). Calculus provides the tools to solve these problems by finding where the derivative of the objective function is zero, which indicates a potential extremum. Understanding how to set up and solve optimization problems is a key skill in applied mathematics.

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

Optimization problems fall into two broad categories: maximization and minimization. In a maximization problem, we seek the largest possible value of the objective function this could be maximum profit, maximum area, or maximum volume. In a minimization problem, we seek the smallest possible value such as minimum cost, minimum distance, or minimum material usage. The techniques for solving both types are essentially the same: we find the critical points where the derivative is zero, and then determine whether each critical point corresponds to a maximum or a minimum using the First or Second Derivative Test. The distinction is important because the context of the problem determines whether we are looking for the highest or lowest value. Often, a problem may involve both a maximum and a minimum, such as finding the dimensions that maximize volume while minimizing surface area.

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

The fundamental idea behind optimization is that at a smooth maximum or minimum of a function, the tangent line is horizontal, meaning the derivative is zero. This is because at the peak of a hill or the bottom of a valley, the function momentarily stops increasing or decreasing, and the slope is zero. Therefore, to find the extrema of a function, we solve f'(x) = 0 to find critical points. However, this condition is necessary but not sufficient: a critical point could be a maximum, a minimum, or neither (as in the case of an inflection point with a horizontal tangent). Thus, we must test each critical point to determine its nature. This is the essence of the calculus approach to optimization: find candidates, then classify them. The derivative provides a powerful and efficient way to locate where the optimal values occur.

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

Most real-world optimization problems involve two key functions: the objective function and the constraint. The objective function is the quantity we want to maximize or minimize for example, area, profit, or cost. The constraint is a condition that limits the variables, such as a fixed perimeter, a budget, or a fixed volume. The constraint is essential because it reduces the number of independent variables, allowing us to express the objective function in terms of a single variable. Without the constraint, the problem would have too many degrees of freedom and would not have a unique solution. By using the constraint to eliminate one variable, we transform the problem into a single-variable optimization problem, which can then be solved using the derivative. This two-function structure is a hallmark of optimization problems and is crucial for setting up the correct mathematical model.

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

A reliable method for solving optimization problems involves a series of logical steps. First, understand the problem and identify what needs to be optimized. Then, define the variables and write the objective function. Next, identify the constraint and use it to express the objective function in terms of a single variable. Once the function is in one variable, differentiate it, set the derivative to zero, and solve for the critical numbers. Finally, determine which critical number gives the desired maximum or minimum using the First or Second Derivative Test, and interpret the result in the context of the original problem. This systematic approach works for a wide variety of optimization problems and helps prevent common errors. The key is to be methodical and to always check the domain to ensure the solution is physically meaningful.

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

This classic optimization problem illustrates the entire procedure. Suppose we have 100 meters of fencing to enclose a rectangular field. We want to find the dimensions that maximize the area. We define length x and width y, with the constraint that the perimeter is 100: 2x + 2y = 100, which simplifies to x + y = 50. The objective is to maximize area A = xy. Using the constraint, we express y = 50 - x, so the area becomes A(x) = x(50 - x) = 50x - x². Differentiating gives A'(x) = 50 - 2x. Setting this to zero gives x = 25, and hence y = 25. The maximum area is 25 × 25 = 625 m². This result shows that for a fixed perimeter, the rectangle with maximum area is a square. This is a well-known and important result in geometry, and it demonstrates the power of calculus in solving practical problems.

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

The derivative gives the answer because the area function A(x) = 50x - x² is a downward-opening parabola. Its graph reaches its highest point at the vertex, which is exactly where the derivative is zero. At x = 25, the function stops increasing and begins decreasing, which is the signature of a maximum. The derivative test confirms that this critical point is indeed the maximum. This geometric interpretation helps in understanding why the derivative method works: the maximum (or minimum) of a smooth function occurs where the slope is zero. By setting the derivative to zero, we are finding the point where the graph is momentarily flat, which corresponds to the extremum. This principle applies to all smooth optimization problems.

Our area function was:
  A(x) = 50x - x²

Its graph is a downward-opening parabola.

The highest point occurs where A'(x) = 0.

So A'(x) = 0 identifies the point where the area stops increasing and begins decreasing.

That's exactly what we need for a maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VERIFYING THE MAXIMUM USING THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After finding a critical point, it's important to verify that it is indeed the type of extremum we want. The Second Derivative Test provides a quick way to do this. For A(x) = 50x - x², the second derivative is A''(x) = -2, which is negative. This indicates that the function is concave down at x = 25, confirming that it is a local maximum. If the second derivative were positive, the critical point would be a minimum. This test is particularly useful because it requires only a single evaluation of the second derivative at the critical point. It is efficient and often easier than the First Derivative Test. However, it only works when the second derivative exists and is nonzero at the critical point.

We can calculate:
  A''(x) = -2

Since A''(x) < 0, the function is concave down.

Therefore:
  x = 25 gives a maximum

This is an application of the Second Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. OPTIMIZATION AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems are intimately related to the concept of critical points. The critical points of the objective function are the candidates for extrema. By finding where the derivative is zero or undefined, we identify all possible locations for maximum or minimum values. However, not all critical points are extrema; some may be inflection points with horizontal tangents. Therefore, we must test each critical point to determine its nature. This is where the First and Second Derivative Tests come into play. In optimization, we often also need to consider the endpoints of the domain, especially when the domain is a closed interval. The absolute maximum or minimum may occur at an endpoint, so we must evaluate the function there as well. This connection to critical points is fundamental to the calculus approach to optimization.

Optimization problems are closely related to the topic of absolute maximum and minimum.

Once you create your objective function f(x), you find critical points using:
  f'(x) = 0

and potentially points where f'(x) does not exist.

Then you determine which candidate produces the desired result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2: MINIMUM COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cost minimization is a common optimization problem in business and manufacturing. Suppose the cost of producing x units of a product is given by C(x) = x² - 20x + 200. We want to find the production level that minimizes cost. Differentiating gives C'(x) = 2x - 20. Setting this to zero gives x = 10. The second derivative is C''(x) = 2, which is positive, confirming that x = 10 is a minimum. The minimum cost is C(10) = 100 - 200 + 200 = 100. This example illustrates how calculus can be used to find the optimal production level that minimizes costs. In real-world applications, cost functions may be more complex, but the approach remains the same: differentiate, find critical points, and verify using the second derivative.

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

This example involves maximizing the volume of a box made by cutting squares from the corners of a rectangular sheet. Suppose we have a 20 cm × 30 cm sheet, and we cut squares of side x from each corner, then fold up the sides. The resulting box has height x, length 30 - 2x, and width 20 - 2x. The volume is V = x(30 - 2x)(20 - 2x). Expanding gives V(x) = 4x³ - 100x² + 600x. The domain is 0 < x < 10 because the width must be positive. Differentiating gives V'(x) = 12x² - 200x + 600. Setting this to zero and solving gives two critical numbers: x ≈ 1.785 and x ≈ 14.882. However, only x ≈ 1.785 is within the domain. The second derivative test confirms it is a maximum. This example highlights the importance of the domain: the other critical point is mathematically valid but physically impossible because it would make the width negative.

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

The domain of the objective function is one of the most critical aspects of optimization. In many problems, the variables represent physical quantities like length, width, height, or time, which cannot be negative. Additionally, constraints like a fixed perimeter or volume impose upper bounds. When solving optimization problems, we must always consider the feasible domain and reject any critical points that fall outside it. In the box example, the critical point x ≈ 14.882 was rejected because it would make the width 20 - 2x negative. This step is often overlooked by students, but it is essential for producing a physically meaningful answer. Always define the domain before solving for critical points, and check your solutions against the domain.

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

Constraints are the conditions that restrict the variables in an optimization problem. They are what make the problem non-trivial and realistic. Without constraints, we could make a variable arbitrarily large to achieve an unbounded maximum, which is not physically meaningful. Examples of constraints include a fixed perimeter, a fixed volume, a budget limit, or a fixed surface area. The constraint equation allows us to express one variable in terms of another, reducing the objective function to a single variable. This reduction is essential for applying the derivative test. Understanding the role of constraints is crucial for correctly setting up optimization problems. Always identify the constraint before trying to differentiate.

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

The objective function is the mathematical expression of the quantity we want to optimize. It is the heart of the optimization problem. In the area problem, the objective is A = xy; in a profit problem, it is P(x) = R(x) - C(x); in a distance problem, it is D = √((x - a)² + (y - b)²). Identifying the objective function correctly is the most important step in setting up the problem. Once the objective is identified, we can use the constraint to reduce it to a single variable, differentiate, and find the extremum. The objective function is what we ultimately want to maximize or minimize, and the solution to the problem is the value of the objective at the optimal point. Always write down the objective function explicitly before proceeding with calculus.

The objective function represents the quantity we are trying to optimize.

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

One of the biggest challenges in optimization is translating a word problem into mathematical equations. This requires careful reading to identify the quantities involved, the objective, and the constraints. For example, "A farmer has 200 meters of fencing" tells us the perimeter constraint: 2x + 2y = 200. "Find the largest possible area" tells us the objective: A = xy. By systematically translating the English into algebra, we can set up the problem correctly. This skill is developed through practice. It is helpful to highlight key phrases in the problem statement: "maximum," "minimum," "largest," "smallest," "fixed," "constrained," etc. With experience, this translation becomes more natural. The ability to model real-world situations mathematically is one of the most valuable skills you can develop in calculus.

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

Distance minimization is a common type of optimization problem. Suppose we want to find the point on the x-axis closest to the point (3, 4). Any point on the x-axis has coordinates (x, 0). The distance between (x, 0) and (3, 4) is D = √((x - 3)² + (0 - 4)²) = √((x - 3)² + 16). We want to minimize D. Since the square root function is increasing, minimizing D is equivalent to minimizing D² = (x - 3)² + 16. Differentiating D² gives 2(x - 3), setting it to zero gives x = 3. The closest point is (3, 0), and the minimum distance is 4. This example illustrates the technique of optimizing the square of the distance to simplify differentiation.

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

In distance problems, the objective function often involves a square root, which can be cumbersome to differentiate. However, since the square root function is strictly increasing for non-negative inputs, the value of x that minimizes D is exactly the same as the value that minimizes D². Therefore, we can replace the distance D with its square D² and differentiate that instead. This simplification avoids the chain rule with a square root and makes the algebra much easier. This technique is not limited to distance problems; it can be applied whenever the objective function is a composition with a monotonic function. Recognizing when to use this simplification is a useful skill in optimization.

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

In optimization problems, we usually seek the absolute (global) maximum or minimum over the entire feasible domain, not just a local extremum. This distinction is crucial because a local extremum may not be the best overall solution. To find the absolute extremum, we must consider all critical points within the domain and also evaluate the function at the endpoints if the domain is a closed interval. The absolute maximum is the largest value among all candidates, and the absolute minimum is the smallest. This is why optimization problems are closely related to the closed-interval method. Always remember to check the endpoints, especially when the problem involves a physical domain with natural boundaries. The global optimum might be at a boundary, not at a critical point.

In optimization problems, we usually want the absolute maximum or minimum within the physically meaningful domain.

Suppose 0 ≤ x ≤ 10.

You shouldn't only look at f'(x) = 0.

You should also consider the endpoints:
  x = 0 and x = 10

So the optimization process is closely related to the Closed-Interval Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. OPTIMIZATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This checklist provides a systematic way to approach any optimization problem. By asking these questions in order, you can avoid common pitfalls and ensure a complete solution. Start by identifying what you are trying to optimize and what constraints exist. Then define variables, write the objective function, and use the constraint to reduce to one variable. Next, find the derivative, solve for critical numbers, and determine which gives the desired extremum. Finally, interpret the answer in the context of the original problem with appropriate units. This checklist is a valuable tool for both learning and solving problems.

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

There are several common mistakes in optimization. One is differentiating before correctly setting up the function; always identify the objective first. Another is forgetting the constraint, which leads to too many variables. Students sometimes use the wrong variable or define variables unclearly. Ignoring the domain is a frequent error a mathematical solution might be invalid because it gives a negative length. Also, finding a critical point but not determining whether it's a maximum or minimum is a common oversight. Finally, forgetting the original question: if the problem asks for dimensions, give both dimensions; if it asks for area, calculate the area. Being aware of these mistakes helps in avoiding them.

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

The Second Derivative Test is particularly useful in optimization because it provides a quick way to classify critical points. If f'(c) = 0 and f''(c) > 0, the function is concave up, indicating a local minimum. If f'(c) = 0 and f''(c) < 0, the function is concave down, indicating a local maximum. If f''(c) = 0, the test is inconclusive, and we must use the First Derivative Test or other methods. In many optimization problems, the second derivative is easy to compute, making this test a convenient choice. However, remember that it only works when the second derivative exists and is nonzero at the critical point. This test is a valuable tool in your optimization toolkit.

The Second Derivative Test can quickly classify a critical point.

If f'(c) = 0 and f''(c) > 0, then Local Minimum.
If f'(c) = 0 and f''(c) < 0, then Local Maximum.

This is particularly useful in optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. OPTIMIZATION IN REAL LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization is everywhere in real life. In business, companies use optimization to maximize profit or minimize cost. In manufacturing, engineers optimize to minimize material usage while maintaining strength. In architecture, optimization helps in designing structures that maximize space or minimize materials. In transportation, optimization reduces travel time or fuel consumption. In physics, optimization is used to find the maximum height or range of a projectile. In computer science, optimization algorithms are used in machine learning, resource allocation, and scheduling. The principles of calculus optimization are applied in virtually every field that involves quantitative decision-making. Understanding optimization prepares you for solving real-world problems effectively.

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

The complete optimization pattern can be visualized as a flowchart: start with the word problem, then define variables, identify the constraint, create the objective function, use the constraint to get one variable, differentiate, set f'(x) = 0, find critical numbers, test or compare, find the maximum or minimum, and finally interpret the answer. This pattern is the blueprint for solving any optimization problem. It emphasizes the importance of each step and shows how they connect to produce the final solution. By following this pattern consistently, you can tackle even complex optimization problems with confidence. The pattern is a valuable mental model that guides your problem-solving process.

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

Memorizing common geometric formulas can save time in optimization problems. For rectangles, A = lw and P = 2l + 2w. For boxes, V = lwh. For circles, A = πr² and C = 2πr. For cylinders, V = πr²h and S = 2πr² + 2πrh. For distance, d = √((x₂ - x₁)² + (y₂ - y₁)²), and often it's easier to minimize d². Having these formulas ready allows you to quickly set up the objective function without having to derive them from scratch. They are the building blocks of many optimization problems.

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

The most important idea in optimization is the relationship between the objective function, the constraint, and the derivative. The objective function is what you want to maximize or minimize. The constraint limits the variables. The derivative is the tool that finds the extremum. By combining these three elements, you can solve any optimization problem. The workflow is: understand the problem, define variables, identify the constraint, write the objective, differentiate, set the derivative to zero, find critical points, test, and interpret. Remember that f'(x) = 0 gives candidates, not necessarily the answer; you must verify the nature of each critical point. This framework is the key to mastering optimization.

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