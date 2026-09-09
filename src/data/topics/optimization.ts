const topic = {
  id: "optimization",
  title: "Optimization",
  summary:
    "Linear programming, objective functions, constraints, feasible regions, simplex method, and duality.",
  details: `
Optimization is the process of finding the best possible solution to a problem while satisfying certain conditions or constraints. In mathematics, optimization is used to find the maximum or minimum value of a function.

In simple terms, optimization asks:

  "What is the best possible choice among all available choices?"

For example, a company may want to maximize its profit, a delivery system may want to minimize travel distance, or a machine-learning model may want to minimize its prediction error.

Mathematically, an optimization problem can be written as:

  Minimize or Maximize f(x)

subject to certain constraints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective function is the mathematical expression that we aim to minimize or maximize. It captures the goal of the optimization problem, such as profit, cost, error, or efficiency. In many applications, the objective function depends on several variables, and the goal is to find the values that yield the best outcome. The choice of objective function is critical because it reflects what we consider "best." In linear programming, the objective is linear; in nonlinear optimization, it may be quadratic or more complex. The objective function is often denoted f(x), where x is a vector of decision variables. Understanding the objective is the first step in formulating and solving any optimization problem, as it directs the search for the optimal solution.

The function that we want to minimize or maximize is called the objective function.

Example:

  f(x) = x² - 4x + 5

Suppose we want to find the minimum value of f(x).

The objective is:

  Minimize f(x)

The function describes what we are trying to optimize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE OF OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A simple optimization problem illustrates the core procedure: finding the point where the derivative of the objective function vanishes, then verifying that it is indeed a minimum or maximum. This univariate example demonstrates the use of calculus in optimization, which extends to multivariate problems via gradients and Hessians. The process of setting the derivative to zero and solving for the variable is a direct application of the fact that at an extremum (in the interior of the domain), the function's rate of change is zero. This technique is foundational for unconstrained optimization and provides a basis for more advanced methods like gradient descent for functions where a closed‑form solution is not available.

Consider:

  f(x) = x² - 4x + 5

To find the minimum, take the derivative:

  f'(x) = 2x - 4

Set the derivative equal to zero:

  2x - 4 = 0

Therefore:

  x = 2

Substitute x = 2:

  f(2) = 2² - 4(2) + 5
  f(2) = 4 - 8 + 5
  f(2) = 1

So the minimum value is 1 and it occurs at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems are broadly classified into maximization and minimization tasks, depending on whether we seek the largest or smallest value of the objective function. Maximization is common in economics and business (e.g., profit, revenue), while minimization appears in engineering and science (e.g., cost, error, energy). Mathematically, maximizing f(x) is equivalent to minimizing -f(x), so the two are often treated together. In practice, the choice between maximization and minimization is determined by the nature of the problem. Many algorithms are designed for minimization, and maximization problems are converted accordingly. Understanding the distinction is essential for correctly formulating an optimization problem and interpreting its solution.

Optimization problems can involve either maximization or minimization.

────────────────────────────────────────────────────────────────────────────────

Maximization

The goal is to find the largest possible value:

  max f(x)

Examples:
  • Profit
  • Production
  • Efficiency
  • Accuracy
  • Performance

────────────────────────────────────────────────────────────────────────────────

Minimization

The goal is to find the smallest possible value:

  min f(x)

Examples:
  • Cost
  • Distance
  • Error
  • Energy consumption
  • Processing time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LOCAL AND GLOBAL OPTIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In many optimization problems, the objective function may have multiple peaks and valleys. A local optimum is a point that is better (or worse) than its immediate neighbours, but not necessarily the best overall. A global optimum is the absolute best point over the entire feasible region. Distinguishing between local and global optima is crucial because many algorithms, especially gradient‑based ones, can get trapped in local optima. Convex problems are special because any local minimum is also global, which simplifies the search. In non‑convex problems, global optimization is much harder and often requires specialised techniques or random restarts. Understanding this distinction helps in selecting appropriate algorithms and in interpreting the results of an optimization run.

An optimization problem can have different types of optimal points.

  • A local minimum is a point where the function is smaller than nearby values.
  • A local maximum is a point where the function is larger than nearby values.
  • A global minimum is the smallest value over the entire domain.
  • A global maximum is the largest value over the entire domain.

Example: A function can have several local minima but only one global minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DERIVATIVES AND OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Calculus provides the primary theoretical tools for optimization. The derivative of a function gives its instantaneous rate of change. At a local extremum (interior of the domain), this rate of change must be zero, leading to the condition f'(x) = 0. These points are called critical points. However, not every critical point is an extremum; it could be a saddle point or an inflection point. The second derivative test or higher‑order analysis is needed to classify them. In multivariate optimization, the gradient (vector of partial derivatives) must be zero, and the Hessian (matrix of second derivatives) provides the curvature information. Thus, derivatives are fundamental to both finding and verifying optimal solutions, forming the basis for many numerical optimization algorithms.

Calculus is closely connected to optimization.

For a differentiable function f(x), a possible optimum occurs where:

  f'(x) = 0

These points are called critical points.

However, not every critical point is a maximum or minimum.

Example:

  f(x) = x³

Its derivative is:

  f'(x) = 3x²

Setting 3x² = 0 gives x = 0.

But x = 0 is neither a maximum nor a minimum because the function continues increasing through that point.

Therefore, critical points must be analyzed further.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative test is a simple way to classify critical points of a univariate function. If the second derivative at a critical point is positive, the function is convex (concave up) there, indicating a local minimum. If it is negative, the function is concave, indicating a local maximum. If the second derivative is zero, the test is inconclusive, and higher‑order derivatives must be examined. This test is widely used in introductory calculus and extends to multivariable functions through the Hessian matrix: positive definiteness of the Hessian implies a local minimum, negative definiteness a local maximum, and indefiniteness a saddle point. The second derivative test provides a quick check of the nature of a stationary point, which is essential for verifying optimality.

The second derivative can help determine whether a critical point is a local maximum or minimum.

If f'(x) = 0, then examine f''(x).

  • If f''(x) > 0, the point is generally a local minimum.
  • If f''(x) < 0, the point is generally a local maximum.

Example:

  f(x) = x² - 4x + 5

We have:

  f'(x) = 2x - 4    and    f''(x) = 2

Since f''(x) > 0, the critical point is a minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. MULTIVARIABLE OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many real-world optimization problems involve multiple variables. For example, a company may need to decide on the quantities of several products to produce, or a machine‑learning model may have hundreds of parameters. In such cases, we work with functions of several variables. The optimality conditions extend naturally: the gradient (vector of first partial derivatives) must be zero at a stationary point. The Hessian matrix of second partial derivatives determines whether the point is a minimum, maximum, or saddle. Multivariable optimization is the domain of gradient‑based methods like gradient descent and Newton's method, which iteratively move toward a stationary point. This framework is central to many fields, including economics, engineering, and data science, where decisions depend on multiple interacting factors.

Optimization becomes more powerful when there are multiple variables.

Example:

  f(x, y) = x² + y²

We want to minimize f(x, y).

The partial derivatives are:

  ∂f/∂x = 2x    and    ∂f/∂y = 2y

Set both equal to zero:

  2x = 0    and    2y = 0

Therefore:

  x = 0,    y = 0

The minimum occurs at (0, 0).

The minimum value is:

  f(0, 0) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GRADIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The gradient is a vector that collects all first‑order partial derivatives of a multivariable function. It points in the direction of the steepest increase of the function, meaning that moving in the direction of the gradient increases the function value most quickly. Conversely, moving in the negative gradient direction gives the steepest decrease, which is the basis for gradient descent. The gradient is fundamental to many optimization algorithms because it provides local information about the function's slope. In machine learning, the gradient of the loss function with respect to model parameters is computed using backpropagation and used to update the parameters. Understanding the gradient is essential for designing and using gradient‑based optimization methods, which are among the most widely used techniques.

For a function of several variables, the gradient contains the partial derivatives.

For f(x, y), the gradient is:

  ∇f = [∂f/∂x]
       [∂f/∂y]

For three variables, f(x, y, z), the gradient becomes:

  ∇f = [∂f/∂x]
       [∂f/∂y]
       [∂f/∂z]

The gradient points in the direction of steepest increase of the function.

Therefore, the negative gradient points toward the direction of steepest decrease.

This idea is fundamental to Gradient Descent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GRADIENT DESCENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gradient Descent is one of the most important optimization algorithms in Computer Science and Machine Learning. The basic idea is to repeatedly move in the direction that decreases the objective function. The update rule uses the negative gradient, scaled by a learning rate, to adjust the current point. This iterative process continues until the algorithm converges to a minimum (or a point close enough). Gradient Descent is simple to implement and works well for many problems, especially when the objective function is convex or smooth. Variants like Stochastic Gradient Descent (SGD) and its adaptive versions (Adam, RMSprop) are the workhorses of deep learning training. The method's success stems from its ability to handle large datasets and high‑dimensional parameter spaces efficiently, making it the algorithm of choice for many modern applications.

Gradient Descent is one of the most important optimization algorithms in Computer Science and Machine Learning.

The basic idea is to repeatedly move in the direction that decreases the objective function.

The update rule is:

  xₖ₊₁ = xₖ - α ∇f(xₖ)

where:
  • xₖ is the current point
  • xₖ₊₁ is the next point
  • α is the learning rate
  • ∇f(xₖ) is the gradient

The learning rate determines how large each step is.

────────────────────────────────────────────────────────────────────────────────

Example of Gradient Descent

Consider:

  f(x) = x²

The derivative is:

  f'(x) = 2x

The gradient descent update becomes:

  xₖ₊₁ = xₖ - α(2xₖ)

Suppose x₀ = 5 and α = 0.1.

Then:

  x₁ = 5 - 0.1(10) = 4
  x₂ = 4 - 0.1(8) = 3.2
  x₃ = 3.2 - 0.1(6.4) = 2.56

The values continue moving toward x = 0, which is the minimum.

Conceptually:

  5 → 4 → 3.2 → 2.56 → ... → 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LEARNING RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The learning rate, often denoted α, is a hyperparameter that controls the step size in gradient descent. It determines how much we adjust the parameters in response to the estimated error. A small learning rate leads to slow convergence and may require many iterations, while a large learning rate can cause overshooting, oscillations, or even divergence. Choosing an appropriate learning rate is crucial for successful optimization; in practice, it is often tuned through experimentation or adapted automatically using techniques like line search or adaptive methods (e.g., AdaGrad, Adam). The learning rate can also be scheduled to decrease over time, allowing for larger steps initially and finer adjustments later. Understanding the trade‑offs involved in setting the learning rate is essential for effective use of gradient‑based optimization.

The learning rate controls how large a step the optimization algorithm takes.

It is usually represented by α.

  • If the learning rate is too small, optimization may be very slow.
  • If the learning rate is too large, the algorithm may overshoot the minimum or even diverge.

Conceptually:

  Small α → slow learning
  Large α → possible instability

Therefore, selecting an appropriate learning rate is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONVEX OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Convex optimization is a special class of problems where the objective function is convex and the feasible region is a convex set. Convex functions have the property that any local minimum is also a global minimum, which greatly simplifies the optimization process. This property is due to the shape of the function: it lies below the chord between any two points, so there are no "valleys" that trap local search methods. Convex problems are tractable and can be solved efficiently using algorithms like gradient descent, interior‑point methods, or subgradient methods. Many important problems in machine learning, such as linear regression and support vector machines, are convex. The ability to guarantee a global optimum makes convex optimization a cornerstone of both theory and practice, providing a solid foundation for many applications.

A function is convex when its graph has a bowl-like structure.

For a convex optimization problem, a local minimum is also a global minimum under appropriate conditions.

Example:

  f(x) = x²

is convex.

Its graph has a single lowest point: x = 0.

Therefore:

  local minimum = global minimum

Convex optimization is important because convex problems are generally easier to solve reliably.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUADRATIC OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quadratic optimization deals with objective functions that are quadratic in the variables, which are common in many areas. The general form involves a symmetric matrix A, a vector b, and a scalar c. The gradient is linear in x, and setting it to zero yields a linear system A x = b, linking optimization directly to solving linear equations. This connection is powerful because it allows us to use efficient numerical linear algebra methods to solve quadratic problems. Quadratic programs are used in portfolio optimization, control theory, and as subproblems in more complex algorithms like sequential quadratic programming. When A is positive definite, the problem is convex and has a unique global minimum. Understanding this relationship helps in leveraging linear algebra techniques for optimization problems.

A quadratic function can be written as:

  f(x) = ½ xᵀ A x - bᵀ x + c

where:
  • x is a vector
  • A is a matrix
  • b is a vector
  • c is a scalar

Quadratic optimization is strongly connected to Linear Algebra.

For example, the gradient is:

  ∇f(x) = A x - b

when A is symmetric.

Setting the gradient equal to zero gives:

  A x - b = 0

Therefore:

  A x = b

This demonstrates an important relationship:

  An optimization problem can sometimes be transformed into a system of linear equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. HESSIAN MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Hessian matrix is a square matrix of second‑order partial derivatives of a multivariable function. It captures the local curvature of the function, providing information about whether a stationary point is a minimum, maximum, or saddle point. A positive definite Hessian indicates a local minimum, a negative definite Hessian indicates a local maximum, and an indefinite Hessian indicates a saddle point. In Newton's method, the Hessian is used to determine the step direction and size, often leading to faster convergence than gradient descent. However, computing and storing the Hessian can be expensive for large problems, leading to quasi‑Newton methods that approximate it. The Hessian is also central to second‑order optimality conditions and to the analysis of convergence rates in optimization algorithms.

For multivariable optimization, the Hessian matrix contains the second-order partial derivatives.

For f(x, y), the Hessian is:

  H = [∂²f/∂x²    ∂²f/∂x∂y]
      [∂²f/∂y∂x    ∂²f/∂y²]

The Hessian provides information about the curvature of a function.

  • If the Hessian is positive definite at a critical point, the point is typically a local minimum.
  • If it is negative definite, the point is typically a local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CONSTRAINED OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In many practical situations, the decision variables cannot be chosen arbitrarily; they must satisfy certain constraints. These constraints may represent physical limitations, resource capacities, or policy requirements. Constrained optimization formalises such problems by adding equality or inequality constraints to the objective function. The feasible region is the set of points that satisfy all constraints. The optimal solution lies on the boundary of this region in many cases. Solving constrained problems often requires specialised methods like the Lagrange multiplier technique or penalty methods. In linear programming, the constraints and objective are linear, and the optimal solution occurs at a vertex of the feasible region. Understanding constraints is essential for modeling real‑world problems accurately and for choosing the appropriate solution approach.

Sometimes we cannot choose any value we want. There may be constraints.

Example:

  x + y = 10

Suppose we want to minimize:

  f(x, y) = x² + y²

subject to:

  x + y = 10

The condition x + y = 10 is called a constraint.

The optimization problem can be written as:

  min f(x, y) = x² + y²
  subject to: x + y = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LAGRANGE MULTIPLIERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Lagrange multiplier method is a technique for solving constrained optimization problems with equality constraints. It introduces a new variable (the Lagrange multiplier λ) for each constraint and constructs the Lagrangian, which combines the objective and the constraints. The optimality conditions are obtained by setting the gradient of the Lagrangian to zero. This method is elegant and works well when the constraints are differentiable and the problem is smooth. In economic theory, Lagrange multipliers have an interpretation as shadow prices, indicating the sensitivity of the objective to changes in the constraint. While this method is primarily for equality constraints, inequalities can be handled via the Karush‑Kuhn‑Tucker (KKT) conditions, which extend the idea to general constraints. The Lagrange multiplier method is a cornerstone of constrained optimization and is widely used in engineering, economics, and operations research.

One method for solving constrained optimization problems is the Lagrange Multiplier Method.

For f(x, y) subject to g(x, y) = c, we construct:

  ℒ(x, y, λ) = f(x, y) + λ(g(x, y) - c)

Then we solve:

  ∂ℒ/∂x = 0
  ∂ℒ/∂y = 0
  ∂ℒ/∂λ = 0

The variable λ is called the Lagrange multiplier.

────────────────────────────────────────────────────────────────────────────────

Example of Lagrange Multipliers

Suppose we want to minimize:

  f(x, y) = x² + y²

subject to:

  x + y = 10

Construct:

  ℒ = x² + y² + λ(x + y - 10)

Take the partial derivatives:

  2x + λ = 0
  2y + λ = 0
  x + y - 10 = 0

From the first two equations:

  2x = 2y

Therefore:

  x = y

Since x + y = 10, we obtain:

  x = y = 5

Thus, (x, y) = (5, 5) gives the minimum.

The minimum value is:

  f(5, 5) = 25 + 25 = 50

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. LINEAR PROGRAMMING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear programming (LP) is a powerful optimization method where both the objective function and all constraints are linear. The feasible region is a convex polytope, and the optimal solution, if it exists, occurs at one of its vertices. LPs are solved efficiently using the simplex method or interior‑point methods. Linear programming has a wide range of applications, including production planning, transportation, resource allocation, and network flow. The theory of duality is central to LP, providing insights into the relationship between a primal problem and its dual, which often has a meaningful economic interpretation. LP is one of the most mature and widely used optimization techniques, and its mathematical foundation is deeply connected to Linear Algebra, particularly through the representation of constraints as linear equations and inequalities.

Linear Programming is an optimization method in which the objective function and constraints are linear.

Example:

  Maximize Z = 3x + 2y

subject to:

  x + y ≤ 10
  2x + y ≤ 15
  x ≥ 0
  y ≥ 0

This type of problem is called a linear programming problem.

Linear programming is widely used in:
  • Business
  • Manufacturing
  • Transportation
  • Scheduling
  • Resource allocation
  • Supply-chain management

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INTEGER PROGRAMMING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integer programming is a class of optimization problems where some or all of the decision variables are required to be integers. This restriction arises naturally in many practical situations, such as deciding the number of employees to hire, machines to purchase, or trucks to deploy. Integer programs are generally much harder to solve than linear programs because the feasible set is discrete and non‑convex. They are often solved using branch‑and‑bound or cutting‑plane methods. Mixed‑integer programming (MIP) allows both integer and continuous variables. Despite the computational difficulty, integer programming is essential in operations research, logistics, and scheduling, where fractional solutions are not meaningful. The connection to Linear Algebra is less direct but still present through the matrix representation of constraints.

In some optimization problems, variables must be integers.

Example:

  x ∈ ℤ

Suppose a company needs to determine how many trucks to use.

It cannot use 3.5 trucks.

Therefore, the variable must be an integer.

This leads to Integer Programming.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. NONLINEAR OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nonlinear optimization deals with problems where the objective function or constraints include nonlinear terms, such as x², sin(x), or eˣ. These problems are more general and more challenging than linear ones, as they can have multiple local optima and require sophisticated algorithms. The solution methods often use derivatives (gradients and Hessians) and may be iterative. Nonlinear programming covers a vast range of applications, from engineering design to portfolio optimisation. The theoretical foundation includes the Karush‑Kuhn‑Tucker (KKT) conditions, which generalise Lagrange multipliers to inequality constraints. Nonlinear optimization is central to many areas of modern science and engineering, and its interplay with Linear Algebra appears through the use of matrix operations in algorithms like Newton's method and sequential quadratic programming.

If the objective function or constraints contain nonlinear terms, the problem is called nonlinear optimization.

Example:

  f(x) = x² + 3x + 1

This is nonlinear because of x².

Other examples include:
  • xy
  • sin(x)
  • eˣ

Nonlinear optimization can be significantly more difficult than linear optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. UNCONSTRAINED VS. CONSTRAINED OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization problems are divided into unconstrained and constrained categories. In unconstrained optimization, there are no restrictions on the variables; the goal is simply to find the minimum or maximum of the objective function over the entire space. This is easier because the search is unrestricted, and optimality conditions are relatively simple. In constrained optimization, there are additional conditions that the variables must satisfy, which define a feasible region. The optimal solution may lie on the boundary of this region, making the problem more complex. Many real‑world problems have constraints, so constrained optimization is more common. The methods used differ significantly: unconstrained problems often use gradient descent or Newton's method, while constrained ones may use Lagrange multipliers, penalty functions, or active‑set methods. Understanding this distinction helps in selecting the right approach for a given problem.

Optimization problems can be divided into two major categories.

────────────────────────────────────────────────────────────────────────────────

Unconstrained Optimization

There are no explicit restrictions.

  min f(x)

Example:

  min x²

────────────────────────────────────────────────────────────────────────────────

Constrained Optimization

There are restrictions.

  min f(x)

subject to:

  g(x) ≤ 0

Example:

  min x² + y²
  subject to: x + y = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. OPTIMIZATION AND LINEAR ALGEBRA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Algebra provides the language and tools for representing and solving many optimization problems. Variables are naturally stored as vectors, and relationships between them are expressed using matrices. For example, a quadratic objective is written using a symmetric matrix A, and its gradient involves a matrix‑vector product. Solving the optimality conditions often reduces to solving a linear system. In linear programming, the constraints are linear equations and inequalities, again represented by matrices. Matrix factorizations like LU, QR, and Cholesky are used in algorithms for both constrained and unconstrained optimization. The connection is so deep that many optimization techniques are essentially applied Linear Algebra. Thus, proficiency in Linear Algebra is essential for understanding and implementing optimization algorithms, and optimisation, in turn, provides a rich source of applications for Linear Algebra.

Optimization is strongly connected to Linear Algebra.

Vectors are used to represent variables:

  x = [x₁]
      [x₂]
      [⋮]
      [xₙ]

Matrices are used to represent relationships between variables.

For example, a quadratic objective can be written as:

  f(x) = ½ xᵀ A x - bᵀ x + c

The gradient is:

  ∇f(x) = A x - b

and the Hessian is:

  ∇²f(x) = A

Therefore, matrices provide the mathematical structure needed for many optimization algorithms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. OPTIMIZATION AND LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Least squares is a classic optimization problem with deep connections to Linear Algebra. Given an overdetermined system A x ≈ b, we seek the vector x that minimises the sum of squared residuals, i.e., minₓ ||A x − b||². This problem arises in data fitting, regression, and signal processing. The solution can be found by solving the normal equations Aᵀ A x = Aᵀ b, which is a linear system. Numerically, QR decomposition or SVD are preferred for stability. The least‑squares problem is a prime example of how optimisation and Linear Algebra intertwine: the objective is quadratic, the gradient leads to a linear system, and matrix factorisations provide robust solutions. Understanding least squares is essential for anyone working with data, as it is the basis for linear regression and many other modelling techniques.

Least Squares is one of the most important optimization problems.

Suppose we have:

  A x ≈ b

We want to find the vector x that minimizes the squared error:

  minₓ ||A x - b||²

This is an optimization problem.

The resulting normal equations are:

  Aᵀ A x = Aᵀ b

QR Decomposition and SVD can provide numerically better approaches for solving least-squares problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. OPTIMIZATION IN MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimization is the engine that drives machine learning. During training, we define a loss function that measures the discrepancy between the model's predictions and the true labels. The goal is to find the model parameters that minimise this loss. This is typically done using gradient‑based methods, especially stochastic gradient descent (SGD) and its variants. The loss function is often non‑convex and high‑dimensional, making optimisation challenging. However, the sheer scale of modern models (with millions of parameters) requires efficient algorithms that can handle large datasets. The interplay between optimisation and linear algebra is evident here: gradients are computed using matrix multiplications (backpropagation), and parameter updates are vector operations. Thus, a solid understanding of optimisation is crucial for designing, training, and interpreting machine learning models.

Optimization is one of the foundations of Machine Learning.

A machine-learning model makes predictions, compares them with the correct answers, and calculates an error called a loss function.

Example:

  L(θ)

represents the loss depending on model parameters θ.

The goal is:

  minₓ L(θ)

The optimization algorithm changes the model parameters so that the loss becomes smaller.

Gradient Descent is one of the most commonly used methods.

────────────────────────────────────────────────────────────────────────────────

Example: Neural Network Optimization

Suppose a neural network has parameters:

  θ = [w₁]
      [w₂]
      [w₃]

The network produces a prediction, and a loss function measures the error:

  L(θ)

The gradient is:

  ∇L(θ)

The parameters are updated using:

  θ_new = θ_old - α ∇L(θ_old)

This process is repeated many times during training.

Therefore, optimization is one of the mathematical foundations behind modern machine learning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. OPTIMIZATION IN COMPUTER SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimisation appears across many subfields of Computer Science. In artificial intelligence, we optimise model parameters to improve prediction accuracy. In computer graphics, we optimise rendering parameters for visual quality and performance. In networking, we optimise routing and bandwidth allocation. In algorithms, we design methods that minimise time and space complexity. In databases, query optimisation finds the most efficient execution plan. Even in software engineering, performance tuning is a form of optimisation. The mathematical techniques vary, but they all share the goal of finding the best solution under given constraints. The widespread use of optimisation in CS underscores its importance and justifies the deep study of both its theory and its practical algorithms.

Optimization appears in many areas of Computer Science.

  • Artificial Intelligence: Finding model parameters that minimize prediction error
  • Machine Learning: Training models using optimization algorithms
  • Computer Graphics: Finding efficient transformations and rendering parameters
  • Networking: Optimizing routing and resource allocation
  • Databases: Optimizing query execution plans
  • Algorithms: Finding solutions that minimize time or memory usage
  • Robotics: Finding efficient paths and movements
  • Scheduling: Assigning tasks while minimizing time or cost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. OPTIMIZATION IN REAL-WORLD PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Real‑world optimization problems are everywhere. A delivery company needs to route its vehicles to minimise fuel and time while meeting delivery windows. An airline must schedule crews and aircraft to minimise costs and delays. A factory needs to decide production quantities to maximise profit given limited resources. These problems are often modelled as linear or integer programs and solved using optimisation software. The process involves defining variables, formulating the objective and constraints, and then applying numerical methods. The solutions can lead to significant cost savings, improved efficiency, and better resource utilisation. The ability to recognise and formulate such problems is a valuable skill, and the mathematical tools provided by Linear Algebra are essential for their solution.

Consider a delivery company.

The company has several warehouses and customers.

It wants to determine:
  • Which vehicle should deliver each package?
  • Which route should each vehicle take?
  • How much fuel will be used?
  • How can delivery time be minimized?

This can be modeled as an optimization problem.

The objective might be:

  Minimize total delivery cost

while satisfying constraints such as:
  • Vehicle capacity
  • Delivery deadlines
  • Available vehicles

This demonstrates how mathematical optimization can solve practical problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMMON OPTIMIZATION ALGORITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A variety of optimisation algorithms exist, each suited to different problem classes. Gradient descent and its stochastic variants are the default for large‑scale machine learning. Newton's method converges quadratically but requires the Hessian, making it costly. Conjugate gradient works well for quadratic problems and uses only gradient information. For constrained problems, interior‑point methods and active‑set methods are popular. In linear programming, the simplex method is classic and still widely used, while interior‑point methods are competitive for large problems. Understanding the strengths and weaknesses of these algorithms is key to selecting the right one. The choice often involves trade‑offs between speed, accuracy, robustness, and ease of implementation.

Some important optimization methods include:

  • Gradient Descent
  • Stochastic Gradient Descent
  • Newton's Method
  • Coordinate Descent
  • Conjugate Gradient
  • Lagrange Multipliers
  • Linear Programming
  • Quadratic Programming
  • Interior-Point Methods
  • Sequential Quadratic Programming

Each method is designed for particular types of optimization problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. GRADIENT DESCENT VS. NEWTON'S METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gradient descent and Newton's method are two classic optimisation algorithms. Gradient descent uses only first‑order information (the gradient) to decide the descent direction; it is simple and cheap per iteration but can converge slowly, especially for ill‑conditioned problems. Newton's method uses second‑order information (the Hessian) to compute a step that directly aims for the stationary point; it converges much faster near the solution but is expensive to compute and requires solving a linear system at each step. The choice between them depends on the problem size and the cost of computing the Hessian. In practice, quasi‑Newton methods (like BFGS) approximate the Hessian, striking a balance between convergence speed and computational cost. Understanding this trade‑off helps in selecting an appropriate method for a given task.

Gradient Descent uses first-order information:

  xₖ₊₁ = xₖ - α ∇f(xₖ)

Newton's Method uses both first- and second-order information:

  xₖ₊₁ = xₖ - H(xₖ)⁻¹ ∇f(xₖ)

where H(xₖ) is the Hessian matrix.

Newton's Method can converge very quickly near a solution, but calculating and inverting the Hessian can be computationally expensive for large problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. OPTIMIZATION AND NUMERICAL LINEAR ALGEBRA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical Linear Algebra and optimization are deeply intertwined. Optimization algorithms frequently rely on linear algebra operations: matrix‑vector products for gradients, matrix factorisations for solving Newton systems, and eigenvalue computations for curvature analysis. Efficient implementation of these operations is critical for large‑scale problems. For example, Newton's method requires solving H(x) p = −∇f(x), which is a linear system. Direct solvers use LU or Cholesky factorisations, while iterative solvers may use conjugate gradient. In addition, many optimisation algorithms are designed to exploit sparsity, which is a concern shared with numerical linear algebra. The synergy between the two fields is evident in modern software libraries, which provide optimised linear algebra routines for optimisation tasks. A strong foundation in both areas is essential for advanced computational work.

Optimization and Numerical Linear Algebra are closely connected.

Optimization algorithms frequently require:
  • Matrix multiplication
  • Matrix-vector multiplication
  • Solving linear systems
  • Matrix factorizations
  • Eigenvalue calculations
  • Gradient calculations
  • Hessian calculations

For example, Newton's Method requires solving a system involving the Hessian:

  H(xₖ) pₖ = -∇f(xₖ)

Numerical Linear Algebra provides the computational tools needed to solve this efficiently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. IMPORTANT OPTIMIZATION CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mastering optimisation requires familiarity with a core set of concepts: the objective function, the distinction between maxima and minima, local vs. global optima, and the role of derivatives and gradients. The Hessian provides curvature information. Constrained optimisation introduces feasible regions and Lagrange multipliers. Linear programming, integer programming, and nonlinear programming are major subfields, each with its own methods. Additionally, understanding how optimisation connects to Linear Algebra—through quadratic forms, normal equations, and matrix factorisations—is crucial. These concepts form the foundation for both theoretical analysis and practical algorithm design. Whether you are developing new optimisation algorithms or applying existing ones, a solid grasp of these ideas is indispensable.

When studying Optimization, it is important to understand:

  • Objective Function
  • Maximum and Minimum
  • Local and Global Optima
  • Gradient
  • Hessian
  • Gradient Descent
  • Learning Rate
  • Convex Optimization
  • Constrained Optimization
  • Lagrange Multipliers
  • Linear Programming
  • Nonlinear Optimization
  • Least Squares
  • Numerical Optimization
  • Optimization in Machine Learning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Optimization is the study of finding the best possible solution to a problem by minimizing or maximizing an objective function.

The basic form is:

  minₓ f(x)

or:

  maxₓ f(x)

Optimization can be:
  • Unconstrained or constrained
  • Linear or nonlinear
  • Convex or non-convex
  • Continuous or discrete

Important mathematical tools include:

  • Gradient:         ∇f(x)
  • Hessian:          H(x)
  • Gradient Descent: xₖ₊₁ = xₖ - α ∇f(xₖ)
  • Lagrange Multipliers: ℒ = f + λ(g - c)
  • Linear Programming: maximize linear objective with linear constraints
  • Least Squares: minₓ ||A x - b||²

Key Relationships to Linear Algebra:

  • Quadratic functions use matrices: f(x) = ½ xᵀ A x - bᵀ x + c
  • Gradient: ∇f(x) = A x - b
  • Hessian: ∇²f(x) = A
  • Normal equations: Aᵀ A x = Aᵀ b

The key idea to remember:

  Optimization is the process of finding the best possible solution while minimizing or maximizing a chosen objective, often subject to specific constraints.

In Linear Algebra and Computer Science, optimization is especially important because it connects vectors, matrices, derivatives, numerical methods, machine learning, artificial intelligence, data science, engineering, and real-world decision-making.
  `,
  examples: [
    "Objective function: f(x) = x² - 4x + 5 → min at x = 2, f(2) = 1",
    "Derivative: f'(x) = 2x - 4, set to 0 → x = 2",
    "Second derivative test: f''(x) = 2 > 0 → minimum",
    "Multivariable: f(x,y) = x² + y² → min at (0,0)",
    "Gradient: ∇f = [∂f/∂x, ∂f/∂y]ᵀ",
    "Gradient Descent: xₖ₊₁ = xₖ - α ∇f(xₖ)",
    "Learning rate α controls step size",
    "Convex function: f(x) = x² has global minimum at x = 0",
    "Quadratic: f(x) = ½ xᵀ A x - bᵀ x + c",
    "Hessian: H = [[∂²f/∂x², ∂²f/∂x∂y],[∂²f/∂y∂x, ∂²f/∂y²]]",
    "Lagrange multipliers: ℒ = f + λ(g - c)",
    "Example: min x²+y² subject to x+y=10 → (5,5), min=50",
    "Linear programming: maximize Z = 3x + 2y with constraints",
    "Least squares: minₓ ||A x - b||²",
    "Newton's method: xₖ₊₁ = xₖ - H⁻¹ ∇f",
    "Formulate a small linear program and solve it graphically",
    "Set up a simplex tableau for a simple LP.",
  ],
};

export default topic;