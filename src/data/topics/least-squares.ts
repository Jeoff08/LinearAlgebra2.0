const topic = {
  id: "least-squares",
  title: "Least Squares",
  summary:
    "Overdetermined systems, normal equations, projections, and regression basics.",
  details: `
Least Squares is a method in Linear Algebra used to find the best approximate solution to a system of equations when an exact solution does not exist or when the data contains errors or inconsistencies. In many real-world situations, we have more equations than unknowns, or the data points do not perfectly fit a single equation. Instead of trying to find an exact solution that may not exist, the Least Squares method finds the solution that makes the overall error as small as possible. This approach is fundamental in statistics, data science, machine learning, engineering, economics, and scientific research. By minimizing the sum of the squared differences between the observed and predicted values, Least Squares provides a principled way to handle noise, uncertainty, and overdetermined systems.

The basic idea is:

  Find the solution that minimizes the total squared difference between the actual values and the predicted values.

This makes Least Squares extremely important in statistics, data science, machine learning, engineering, economics, and scientific research.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED LEAST SQUARES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In many practical problems, we encounter systems of linear equations where the number of equations exceeds the number of unknowns. Such overdetermined systems usually have no exact solution because the equations are inconsistent due to measurement errors, noise, or inherent variability in the data. Rather than discarding the extra equations or arbitrarily choosing a subset, we need a systematic way to find a solution that best fits all the available information. Least Squares provides this by finding the parameter values that minimize the sum of the squared residuals the differences between the observed values and those predicted by the model. This approach is robust and widely applicable, as it yields a unique solution under mild conditions and has a clear geometric interpretation in terms of orthogonal projections onto the column space of the coefficient matrix.

Consider the system:

  x + y = 3
  2x + y = 4

This system has an exact solution.

However, imagine that we have three equations:

  x + y = 3
  2x + y = 4
  3x + y = 7

It may not be possible for one pair of values (x, y) to satisfy all three equations exactly.

Instead of saying that the system has no useful solution, we can find values of x and y that provide the best overall fit.

This is where Least Squares becomes useful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA OF ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The core of the Least Squares method is the concept of error or residual. Given a model A x that predicts a vector b, the residual r = b - A x measures how far the prediction is from the actual observation. The goal is to make these residuals as small as possible in some sense. However, simply minimizing the sum of the residuals can lead to cancellation because positive and negative errors can offset each other, giving a misleadingly small total error. To avoid this, Least Squares minimizes the sum of the squares of the residuals, which treats all errors positively and penalizes large errors more heavily. This squared error is differentiable, making it amenable to calculus-based optimization, and it leads to the elegant normal equations. The square also ensures that the error is a convex function, guaranteeing a global minimum.

Suppose we want to predict a value b using a model A x.

The error or residual is:

  r = b - A x

The residual tells us how far the predicted values are from the actual values.

Least Squares attempts to make these residuals as small as possible.

Instead of minimizing the ordinary errors directly, we minimize their squared lengths:

  ||b - A x||²

The Least Squares problem can therefore be written as:

  minₓ ||b - A x||²

This is the central idea of the Least Squares method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. A SIMPLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A classic example of Least Squares is fitting a straight line to a set of data points. Suppose we have observed points (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ) and we hypothesize that the relationship is linear: y = mx + b. However, due to measurement errors or natural variation, the points do not lie exactly on a single line. We need to choose the slope m and intercept b that best represent the data. Least Squares provides a way to do this by minimizing the sum of the squared vertical distances between the observed y-values and the values predicted by the line. This line is called the least‑squares regression line. This example is the foundation of linear regression, one of the most widely used statistical techniques. It illustrates how the abstract linear algebra formulation translates into a concrete data-fitting problem with broad applicability.

Suppose we have the following data points:

  (1, 2), (2, 3), (3, 5)

We want to find a straight-line equation:

  y = mx + b

that best fits these points.

The problem is that the three points do not lie perfectly on one straight line.

Instead of forcing the line to pass through every point, Least Squares finds the line that minimizes the total squared error.

The predicted values are:

  ŷ = mx + b

For each data point, the residual is:

  rᵢ = yᵢ - ŷᵢ

The goal is to minimize:

  r₁² + r₂² + r₃²

Therefore, Least Squares finds the values of m and b that make the total squared error as small as possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MATRIX FORM OF LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Least Squares problem can be expressed concisely in matrix form, which is convenient for analysis and computation. We have a matrix A of size m×n (with m ≥ n, typically), a vector of unknowns x of size n, and an observed vector b of size m. We seek x such that A x ≈ b. The discrepancy is the residual vector r = b − A x. The goal is to find x that minimizes the squared Euclidean norm ||r||² = rᵀ r. This formulation is general: it covers linear regression, curve fitting, and many other inverse problems. The matrix A encodes the model structure, x contains the parameters to be determined, and b holds the measured data. The method works even when A is not square, and the solution is unique if the columns of A are linearly independent. This matrix formulation is the starting point for deriving the normal equations and for implementing computational algorithms.

A Least Squares problem can be written in matrix form as:

  A x ≈ b

Here:
  • A is the coefficient matrix
  • x contains the unknown parameters
  • b contains the observed values

Because an exact solution may not exist, we write A x ≈ b.

The Least Squares solution is the vector x̂ that minimizes:

  ||b - A x||²

Thus:

  x̂ = argminₓ ||b - A x||²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE NORMAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The normal equations provide a direct algebraic method for solving the Least Squares problem. They are derived by taking the derivative of the squared error ||b − A x||² with respect to x and setting it to zero. This yields the linear system Aᵀ A x = Aᵀ b, known as the normal equations. If Aᵀ A is invertible (which is true when the columns of A are linearly independent), the solution is x̂ = (Aᵀ A)⁻¹ Aᵀ b. This formula is elegant and provides a closed-form expression for the Least Squares solution. The normal equations are widely used in statistics and engineering, especially when the number of unknowns is moderate. However, for large or ill‑conditioned problems, alternative methods like QR decomposition or SVD are preferred for numerical stability. The normal equations also reveal the connection to projections: Aᵀ A is the Gram matrix of the columns of A, and Aᵀ b is the vector of inner products.

One of the most common methods for solving a Least Squares problem is the Normal Equations.

The normal equations are obtained by setting the derivative of the squared error to zero.

The result is:

  Aᵀ A x̂ = Aᵀ b

If Aᵀ A is invertible, we can solve for x̂:

  x̂ = (Aᵀ A)⁻¹ Aᵀ b

This formula provides the Least Squares solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP-BY-STEP EXAMPLE USING NORMAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A concrete example helps clarify the mechanics of the normal equations. Consider the overdetermined system with three equations and two unknowns. We assemble the coefficient matrix A, the unknown vector x, and the observation vector b. We then compute Aᵀ A and Aᵀ b, forming the normal equations. Solving this 2×2 system yields the Least Squares solution. This step-by-step procedure demonstrates how the abstract matrix formulas are applied in practice. The computed solution does not satisfy any of the original equations exactly, but it minimizes the sum of squared residuals. This example also shows that the normal equations can be solved using standard techniques for linear systems, making Least Squares accessible to anyone comfortable with basic linear algebra.

Consider the system:

  x + y = 2
  x + 2y = 3
  x + 3y = 5

There are three equations and two unknowns, so this is an overdetermined system.

Write the system as A x ≈ b where:

  A = [1  1]    x = [x]    b = [2]
      [1  2]        [y]        [3]
      [1  3]                   [5]

First calculate Aᵀ:

  Aᵀ = [1  1  1]
       [1  2  3]

Now calculate Aᵀ A:

  Aᵀ A = [3   6]
         [6  14]

Next calculate Aᵀ b:

  Aᵀ b = [10]
         [23]

The normal equations become:

  [3   6] [x] = [10]
  [6  14] [y]   [23]

This gives:

  3x + 6y = 10
  6x + 14y = 23

Solving these equations gives:

  y = 3/2    and    x = 1/3

Therefore, the Least Squares solution is:

  x̂ = [1/3]
       [3/2]

This solution does not satisfy every original equation exactly, but it gives the best overall approximation according to the Least Squares criterion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RESIDUALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After obtaining the Least Squares solution, we can compute the residual vector r = b − A x̂. The residuals are the differences between the observed values and the values predicted by the model. They provide crucial diagnostic information: large residuals indicate poor fit or outliers, and their distribution can reveal systematic errors or model misspecification. In statistics, residuals are used to assess the assumptions of linear regression, such as homoscedasticity and normality. The sum of squares of the residuals is the minimized objective function, and it measures the overall goodness-of-fit. Furthermore, the normal equations guarantee that the residual vector is orthogonal to the column space of A, meaning that the residuals are uncorrelated with the fitted values. This property is key to understanding the geometric interpretation of Least Squares and is used in deriving statistical properties of the estimators.

After finding a Least Squares solution, we can calculate the residual vector:

  r = b - A x̂

The residual tells us the difference between the observed values and the values predicted by our model.

Using the previous example:

  x̂ = [1/3]
       [3/2]

The predicted values are:

  A x̂ = [11/6]
        [10/3]
        [29/6]

Therefore, the residual vector is:

  r = [2]   [11/6] = [1/6]
      [3] - [10/3]   [-1/3]
      [5]   [29/6]   [1/6]

Thus:

  r = [1/6]
      [-1/3]
      [1/6]

The residuals represent the prediction errors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Least Squares has a beautiful geometric interpretation that connects linear algebra to geometry. The vector b may not lie in the column space of A, which is the subspace of all possible outputs A x. Therefore, there is no exact solution. Instead, we look for the point in the column space that is closest to b. This closest point is the orthogonal projection of b onto the column space. Thus, A x̂ = proj_Col(A) b. The residual r = b − A x̂ is perpendicular to every vector in the column space, meaning it is orthogonal to each column of A. This orthogonality condition is exactly the normal equations. This geometric viewpoint not only makes the method intuitive but also provides a way to visualize the solution in terms of projections. It also generalises to more abstract inner product spaces, making Least Squares a fundamental tool in functional analysis and approximation theory.

Least Squares has an important geometric interpretation.

The vector b may not belong to the column space of A.

Therefore, there may be no exact solution to A x = b.

Instead, Least Squares finds a vector A x̂ inside the column space of A that is closest to b.

In other words:

  A x̂ = proj_Col(A) b

The residual:

  r = b - A x̂

is perpendicular to the column space of A.

Therefore:

  Aᵀ r = 0

This relationship is exactly what produces the Normal Equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LEAST SQUARES AND LINEAR REGRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear regression is the most common application of Least Squares. In simple linear regression, we have a single predictor variable x and a response y, and we model the relationship as y ≈ mx + b. The unknowns are the slope m and intercept b. We collect n data points and set up the overdetermined system. The Least Squares solution gives the line that minimizes the sum of squared vertical distances from the points to the line. This is exactly the ordinary least squares (OLS) regression line. The method extends naturally to multiple linear regression, where there are several predictors, and the model is y ≈ x₁β₁ + x₂β₂ + ... + xₚβₚ + β₀. In that case, the matrix A contains the predictor values, and x is the vector of coefficients. Linear regression is used in virtually every field to model relationships, make predictions, and test hypotheses. Its foundation in Least Squares makes it one of the most important tools in data analysis.

One of the most common applications of Least Squares is Linear Regression.

Suppose we have data points:

  (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)

We want to find a line:

  y = mx + b

that best represents the data.

For each data point:

  yᵢ ≈ mxᵢ + b

This can be written as a matrix equation:

  [x₁  1] [m] ≈ [y₁]
  [x₂  1] [b]   [y₂]
  [⋮   ⋮]       [⋮ ]
  [xₙ  1]       [yₙ]

Least Squares finds the values of m and b that minimize the total squared prediction error.

This is the mathematical foundation of ordinary least-squares linear regression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LEAST SQUARES AND ORTHOGONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Least Squares solution is intimately tied to the concept of orthogonality. The residual vector r = b − A x̂ is orthogonal to every column of A, which means r lies in the orthogonal complement of the column space. This orthogonality is a necessary and sufficient condition for A x̂ to be the best approximation. It reflects the fact that the error cannot be reduced further by adjusting x within the column space; any change would introduce a component that is not perpendicular to the residual, increasing the squared norm. This property is derived directly from the normal equations, since Aᵀ r = 0. Orthogonality also ensures that the residual is uncorrelated with the fitted values, which is a key assumption in linear regression for unbiased estimation. This connection to inner products underscores the deep relationship between Least Squares and the geometry of inner product spaces.

Least Squares is closely connected to orthogonality.

The residual:

  r = b - A x̂

is orthogonal to every column of A.

Therefore:

  r ⟂ Col(A)

This means the error cannot be reduced further by moving within the column space.

Geometrically, the best approximation occurs when the error vector points directly away from the subspace.

This is why Least Squares is closely connected to Inner Product Spaces, orthogonal projections, and orthonormal bases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. OVERDETERMINED SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Overdetermined systems, which have more equations than unknowns, are a prime application of Least Squares. Such systems arise naturally in data fitting, where we have many observations and a few parameters to estimate. Because the equations are usually inconsistent, an exact solution is impossible. Least Squares provides a principled way to find a parameter vector that best reconciles all the equations. The method handles the redundancy gracefully: if some equations are contradictory, the solution balances the errors among them. This is particularly useful in fields like geodesy, where many measurements are taken to determine a few coordinates; in sensor networks, where readings from multiple sensors are fused; and in control systems, where a model is identified from noisy data. The overdetermined nature also improves robustness: with more data, the effect of individual noise is averaged out, leading to more reliable parameter estimates.

Least Squares is particularly useful for overdetermined systems.

An overdetermined system has more equations than unknowns.

Example:

  x + y = 2
  2x - y = 1
  3x + 2y = 5
  4x - y = 3

has four equations but only two unknowns.

Usually, there is no exact solution satisfying all four equations simultaneously.

Instead, Least Squares finds the values of x and y that produce the smallest overall squared error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. UNDERLYING IDEA OF ERROR MINIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The choice to minimize the sum of squared errors, rather than the sum of absolute errors or some other criterion, has several advantages. Squaring the errors ensures that the objective function is differentiable and convex, which simplifies optimization and guarantees a unique global minimum under mild conditions. It also penalizes large errors more heavily, which is appropriate in many applications where outliers are not too frequent. Moreover, the squared error is closely related to the Euclidean norm, linking the method to geometric concepts like projection and distance. In statistics, the Least Squares estimator is the best linear unbiased estimator (BLUE) under the Gauss-Markov assumptions, providing a strong justification. This error criterion is also computationally efficient because it leads to linear normal equations, making it feasible to solve large problems using standard linear algebra techniques.

Suppose we have errors e₁, e₂, e₃.

Simply adding the errors can be misleading because positive and negative errors can cancel:

  e₁ + e₂ + e₃

For example:

  2 + (-2) = 0

Even though the errors are not actually zero.

Least Squares avoids this problem by squaring the errors:

  e₁² + e₂² + e₃²

Now:

  2² + (-2)² = 4 + 4 = 8

Therefore, the total error remains positive.

The Least Squares method minimizes this total squared error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LEAST SQUARES AND THE PSEUDOINVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For general matrices A that may be rectangular or singular, the Moore-Penrose pseudoinverse provides a unified framework for solving Least Squares problems. The pseudoinverse, denoted A⁺, is a generalization of the ordinary inverse. For any matrix A, the vector x̂ = A⁺ b is the unique solution of the Least Squares problem that has minimum norm among all minimizers. This is particularly useful when A does not have full column rank, where the normal equations have infinitely many solutions. The pseudoinverse can be computed via the singular value decomposition (SVD) and is numerically stable. It is a cornerstone of many algorithms in signal processing, control theory, and statistics. The pseudoinverse also connects Least Squares to other areas, such as the solution of linear systems with constraints and the generalised inverse used in regression.

When A is not square or does not have a regular inverse, the Moore-Penrose pseudoinverse can be used.

It is commonly written as A⁺.

The Least Squares solution can be expressed as:

  x̂ = A⁺ b

This is especially useful for large systems and numerical computing.

The pseudoinverse generalizes the idea of an inverse to matrices that are not necessarily square or invertible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY NOT ALWAYS USE THE NORMAL EQUATIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Although the normal equations are elegant and easy to derive, they are not always the best computational approach. Forming Aᵀ A and then solving the system can be numerically unstable when A is ill‑conditioned that is, when its columns are nearly linearly dependent. In such cases, the condition number of Aᵀ A is the square of that of A, which amplifies errors and can lead to large inaccuracies in the solution. For large datasets, forming Aᵀ A may also be memory intensive. Instead, orthogonalization methods like QR decomposition or the singular value decomposition (SVD) are preferred. These methods are more robust and provide a direct, stable way to solve the Least Squares problem without explicitly forming the normal equations. They are the methods of choice in modern numerical linear algebra libraries and are used in high-performance computing applications.

Although the normal equations are mathematically convenient, computing:

  (Aᵀ A)⁻¹

can be numerically unstable when the columns of A are nearly linearly dependent.

For practical numerical computation, methods such as QR decomposition or the Singular Value Decomposition (SVD) are often preferred.

These methods can provide more numerical stability, especially when working with large datasets.

Therefore, while:

  x̂ = (Aᵀ A)⁻¹ Aᵀ b

is an important formula for understanding Least Squares, it is not always the best computational method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. APPLICATIONS OF LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Least Squares is used extensively in real-world applications.

  1. Data Science
     • Fitting models to datasets
     • Identifying relationships between variables

  2. Machine Learning
     • Linear regression
     • Optimization techniques based on minimizing squared errors

  3. Statistics
     • Estimating parameters from observed data

  4. Engineering
     • Fitting experimental measurements to mathematical models

  5. Economics
     • Estimating relationships between economic variables
     • Income, consumption, inflation, and prices

  6. Signal Processing
     • Estimating signals
     • Reducing measurement errors

  7. Computer Vision
     • Image reconstruction
     • Geometric estimation
     • Fitting models to visual data

  8. Scientific Research
     • Experimental measurements rarely fit a theoretical model perfectly
     • Determining parameters that best fit observed data

  9. Finance
     • Risk analysis
     • Portfolio optimization

  10. Control Systems
     • System identification
     • Parameter estimation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Least Squares is a mathematical method for finding the best approximate solution to a system when an exact solution may not exist.

The central problem is:

  minₓ ||b - A x||²

The most common theoretical solution uses the Normal Equations:

  Aᵀ A x̂ = Aᵀ b

and, when Aᵀ A is invertible:

  x̂ = (Aᵀ A)⁻¹ Aᵀ b

The geometric interpretation is that Least Squares finds the point in the column space of A that is closest to b.

Key Points:

  • Residual: r = b - A x
  • Least Squares minimizes ||r||²
  • The residual is orthogonal to Col(A): Aᵀ r = 0
  • Linear regression is a common application
  • The pseudoinverse generalizes the solution: x̂ = A⁺ b

The key idea to remember:

  Least Squares does not try to make every equation exactly correct. Instead, it finds the solution that makes the total squared error as small as possible.

This makes Least Squares one of the most important connections between Linear Algebra, statistics, data science, machine learning, optimization, and real-world data analysis.
  `,
  examples: [
    "Overdetermined system: 3 equations, 2 unknowns",
    "Least squares problem: minₓ ||b - Ax||²",
    "Normal equations: AᵀA x̂ = Aᵀ b",
    "Solution: x̂ = (AᵀA)⁻¹ Aᵀ b",
    "Example: Solve min ||Ax-b|| using normal equations",
    "Residual: r = b - A x̂",
    "Geometric: A x̂ = proj_Col(A) b",
    "Orthogonality: r ⟂ Col(A)",
    "Linear regression: y = mx + b",
    "Use linear regression to fit a line to data.",
    "Overdetermined system example with solution x̂ = [1/3, 3/2]ᵀ",
    "Pseudoinverse: x̂ = A⁺ b for non-square matrices",
    "QR decomposition and SVD for numerical stability",
  ],
};

export default topic;