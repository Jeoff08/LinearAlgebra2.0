const topic = {
  id: "numerical-linear-algebra",
  title: "Numerical Linear Algebra",
  summary:
    "Numerical stability, floating point errors, and numerical algorithms like iterative methods.",
  details: `
Numerical Linear Algebra is the branch of Linear Algebra that focuses on using computational and numerical methods to solve problems involving vectors, matrices, and systems of linear equations.

While traditional Linear Algebra often focuses on exact mathematical solutions, Numerical Linear Algebra focuses on finding accurate approximations using computers, especially when dealing with very large or complicated problems.

For example, a small system such as:

  2x + y = 5
  3x + 2y = 8

can be solved by hand. However, real-world problems may involve thousands or millions of equations and unknowns. Solving those systems manually would be impractical.

Numerical Linear Algebra provides algorithms that allow computers to solve these problems efficiently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY IS NUMERICAL LINEAR ALGEBRA IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical Linear Algebra is the backbone of modern scientific computing and data analysis. In virtually every field that uses computers to model physical phenomena, process signals, or analyse large datasets, numerical linear algebra provides the necessary algorithms. The importance lies in the scale: real problems routinely involve matrices with millions of entries, and exact symbolic solutions are impossible. Moreover, numerical methods must contend with finite precision arithmetic, which introduces unavoidable errors. Understanding how to choose the right algorithm and how to interpret its results is therefore essential for obtaining reliable and efficient computations. This discipline bridges pure mathematics with practical implementation, ensuring that theoretical solutions are realised in a form that machines can handle accurately and quickly.

Suppose a scientific simulation produces the system:

  A x = b

where A contains thousands of rows and columns.

A computer cannot simply "solve for x" in the same way a person solves a small equation on paper. It needs an efficient algorithm.

Numerical Linear Algebra provides methods such as:
  • Gaussian Elimination
  • LU Decomposition
  • QR Decomposition
  • Cholesky Decomposition
  • Iterative Methods
  • Eigenvalue Algorithms
  • Singular Value Decomposition
  • Least-Squares Methods

These methods allow computers to solve large mathematical problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXACT SOLUTIONS VS. NUMERICAL SOLUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In theoretical Linear Algebra, we often seek exact symbolic expressions for solutions, such as fractions or radicals. However, computers represent numbers in binary floating-point format, which can only approximate many real numbers. Consequently, numerical methods produce approximate solutions that are subject to rounding and truncation errors. The challenge is to ensure that these approximations are sufficiently close to the true solution for the intended application. This fundamental distinction between exact and numerical solutions drives the entire field of numerical linear algebra. It forces us to consider not only the solution itself but also the errors involved, the stability of the algorithm, and the conditioning of the problem. By acknowledging that approximations are the norm in computation, we can develop robust methods that give reliable answers despite unavoidable numerical inaccuracies.

In theoretical Linear Algebra, we may obtain an exact answer such as:

  x = 1/3

A numerical computer algorithm might represent the same value approximately as:

  x ≈ 0.333333

The numerical answer is not necessarily exactly equal to the mathematical value, but it can be extremely close.

This introduces an important concept:

  Approximation

Numerical Linear Algebra is therefore concerned not only with obtaining an answer but also with determining how accurate that answer is.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: SOLVING A LINEAR SYSTEM NUMERICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solving a linear system numerically is the quintessential task of numerical linear algebra. It involves representing the system in matrix form and then applying a systematic algorithm that a computer can execute. The example below illustrates the basic process, but the underlying principles extend to systems of any size. For small systems, the numerical solution often coincides with the exact solution to machine precision, but for larger or ill‑conditioned systems, careful attention must be paid to error propagation. The choice of algorithm whether direct or iterative depends on the structure and size of the matrix, as well as on the required accuracy. Ultimately, numerical solving is about transforming a mathematical problem into a sequence of arithmetic operations that can be reliably performed by a computer, yielding a usable solution within acceptable error bounds.

Consider:

  2x + y = 5
  3x + 2y = 8

We can write the system in matrix form:

  A x = b

where:

  A = [2  1]    x = [x]    b = [5]
      [3  2]        [y]        [8]

Using numerical Linear Algebra, we could solve this system using Gaussian Elimination, LU Decomposition, or another numerical method.

The exact solution is:

  x = 2,    y = 1

For a much larger system, the same basic mathematical idea can be implemented using a computer algorithm.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FLOATING-POINT NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Floating-point representation is the way computers store real numbers in a finite number of bits, typically following the IEEE 754 standard. This representation is analogous to scientific notation, with a sign, an exponent, and a mantissa (significand). Because only a limited number of digits can be stored, most real numbers cannot be represented exactly. This leads to round-off errors that accumulate during arithmetic operations. Understanding floating-point arithmetic is crucial because it affects the accuracy and stability of numerical algorithms. For instance, subtracting two nearly equal numbers can cause catastrophic cancellation, and multiplying by a large number can amplify small errors. Awareness of these limitations allows us to design algorithms that are robust to floating-point inaccuracies, ensuring that the final result is trustworthy despite the inherent approximations.

Computers usually cannot represent every real number exactly.

Instead, they use floating-point representation.

For example, a computer may store:

  1/3

approximately as:

  0.3333333333333333

This creates a small difference between the exact mathematical value and the computer's stored value.

This difference is called round-off error.

Example:

  exact value = 1/3
  computer approximation ≈ 0.333333

The difference between the exact value and approximation is an error.

Understanding floating-point arithmetic is one of the most important parts of Numerical Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. NUMERICAL ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical error is the discrepancy between the exact mathematical result and the computed result. It arises from two primary sources: round-off error and truncation error. Round-off error is due to the finite precision of floating-point arithmetic, while truncation error occurs when an infinite process (such as an infinite series or an integral) is approximated by a finite number of steps. Both types of errors are inevitable in numerical computations, and they must be managed through careful algorithm design and analysis. The magnitude of these errors determines the reliability of the computed solution. In numerical linear algebra, we often quantify errors using norms and use them to guide the choice of algorithm. By understanding the nature and sources of error, we can make informed decisions about when a solution is "good enough" for a given application.

Numerical computations can contain different types of errors.

Two important types are:

────────────────────────────────────────────────────────────────────────────────

Round-Off Error

Round-off error occurs because computers use a finite number of digits to represent numbers.

Example: 1/7 cannot be represented exactly using a finite decimal expansion.

The computer must approximate it.

────────────────────────────────────────────────────────────────────────────────

Truncation Error

Truncation error occurs when an infinite or continuous mathematical process is approximated using a finite calculation.

Example: An infinite series might be approximated by keeping only the first few terms:

  1 + 1/2 + 1/4 + 1/8 + ...

If we stop after several terms, the result is an approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FORWARD ERROR AND BACKWARD ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two complementary perspectives on error are forward error and backward error. Forward error measures how far the computed solution is from the true solution, typically using a vector norm. It is the most direct measure of accuracy but is often difficult to estimate without knowing the true solution. Backward error, on the other hand, asks how much the input data (the matrix A and the right-hand side b) would have to be perturbed for the computed solution to be exactly correct. Backward error is easier to compute and provides a stability measure: if the backward error is small, the algorithm is said to be backward stable. This concept is crucial because a small backward error implies that the computed solution is the exact solution of a nearby problem, which is often acceptable in practice. The relationship between forward and backward error is mediated by the condition number, providing a comprehensive error analysis.

Numerical Linear Algebra also studies how errors affect solutions.

Forward error measures how far the computed answer is from the true answer.

If the exact solution is x and the computed solution is x̂, then the error can be represented as:

  e = x̂ - x

Backward error asks a different question:

  How much would the original problem need to change for the computed answer to be exactly correct?

Backward error is especially important when evaluating the stability of numerical algorithms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical stability is a property of an algorithm that ensures small perturbations in the input (due to rounding or measurement errors) do not lead to disproportionately large changes in the output. An algorithm is stable if its results are insensitive to these perturbations. Backward stability, in particular, guarantees that the computed solution is the exact solution of a slightly perturbed problem, which is often sufficient for practical purposes. Stability is a key criterion when choosing an algorithm because unstable algorithms can produce wildly incorrect results even when the problem itself is well-conditioned. Many classical methods, such as Gaussian elimination with partial pivoting, are stable in practice, while others, like the normal equations for least squares, can be unstable for ill-conditioned systems. Understanding stability allows us to select and implement algorithms that yield reliable answers across a wide range of problems.

An algorithm is considered numerically stable when small computational errors do not cause large changes in the final result.

Example: Suppose the exact answer is x = 10.

If a small computational error changes the result to 10.0001, the algorithm may be considered stable for that problem.

However, if the same tiny numerical error causes the answer to become 1000, the algorithm is highly sensitive to numerical errors.

Therefore:

  Stability is about controlling the effect of computational errors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CONDITIONING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Conditioning is a property of the mathematical problem itself, independent of the algorithm used to solve it. It measures the sensitivity of the solution to perturbations in the input data. A well-conditioned problem has a condition number close to 1, meaning that small changes in the input cause only small changes in the output. An ill-conditioned problem has a large condition number, meaning that even tiny input errors can drastically change the output. The condition number of a matrix A, often denoted κ(A), is defined as ||A||·||A⁻¹|| for nonsingular matrices (under a chosen norm). A large condition number indicates that the matrix is nearly singular, and solving systems involving it may be numerically unstable. It is important to distinguish conditioning from stability: while stability is about the algorithm, conditioning is about the inherent difficulty of the problem. A well-conditioned problem can be solved stably, but an ill-conditioned problem may produce large errors regardless of the algorithm, so careful analysis is required.

Another important concept is conditioning.

The condition of a problem describes how sensitive its solution is to small changes in the input.

  • A well-conditioned problem does not change much when its input changes slightly.

  • An ill-conditioned problem can change dramatically even when the input changes only a little.

For a matrix A, the condition number is commonly written as κ(A) and, for a nonsingular matrix under a chosen norm:

  κ(A) = ||A|| · ||A⁻¹||

A large condition number generally indicates that the problem is sensitive to errors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GAUSSIAN ELIMINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gaussian elimination is the classic direct method for solving linear systems. It systematically transforms the coefficient matrix into upper triangular form through a series of row operations, making back substitution straightforward. This algorithm is the workhorse of many numerical libraries and is the basis for LU decomposition. Its complexity is O(n³) for dense matrices, which is acceptable for moderate sizes but becomes prohibitive for very large systems. In practice, Gaussian elimination is implemented with partial pivoting to enhance numerical stability, swapping rows to ensure that the pivot (the element used to eliminate below) is as large as possible. Understanding Gaussian elimination is essential because it underpins many more advanced techniques and provides a concrete example of how numerical linear algebra turns abstract matrix theory into a practical computational procedure.

One of the fundamental numerical methods for solving systems is Gaussian Elimination.

Suppose:

  A x = b

Gaussian Elimination transforms the system into an upper triangular system:

  U x = c

The triangular system can then be solved using back substitution.

Example:

  2x + y = 5
  3x + 2y = 8

We can eliminate x from the second equation and obtain a simpler equation for y.

For large systems, a computer performs these operations systematically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU decomposition factors a square matrix A into the product of a lower triangular matrix L and an upper triangular matrix U. It is essentially a record of the Gaussian elimination process, storing the elimination multipliers in L and the reduced matrix in U. The main advantage of LU decomposition is that it separates the work of elimination from the solution phase. Once the decomposition is computed, solving A x = b for any new b requires only forward and back substitution, which are O(n²) each. This makes LU decomposition extremely efficient for problems with multiple right-hand sides. Moreover, it provides a convenient way to compute determinants and matrix inverses, though these are often avoided in numerical practice due to stability concerns. With partial pivoting, LU decomposition is a stable and versatile tool for general linear systems.

Numerical Linear Algebra also uses LU Decomposition.

The matrix is written as:

  A = L U

where L is lower triangular and U is upper triangular.

Then:

  A x = b

becomes:

  L U x = b

We introduce an intermediate vector y:

  L y = b    followed by    U x = y

LU Decomposition is particularly useful when the same matrix A must be used with many different vectors b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PIVOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pivoting is a technique used during Gaussian elimination to improve numerical stability. When the pivot (the diagonal element used to eliminate entries below) is zero or very small, the algorithm may fail or produce large errors due to division by a tiny number. Pivoting involves swapping rows (partial pivoting) or columns (complete pivoting) to bring a larger element into the pivot position. Partial pivoting, which is the most common, only exchanges rows, which is enough to ensure stability for many practical problems. By choosing the largest available pivot, we reduce the growth of round-off errors and make the algorithm more robust. Pivoting also allows the algorithm to handle matrices that are singular or nearly singular, though in the singular case the decomposition will reveal the rank deficiency. Understanding pivoting is essential for implementing reliable linear solvers.

During Gaussian Elimination, we sometimes encounter a zero or very small pivot.

Example:

  A = [0  2]
      [1  3]

The first pivot is zero, so we cannot divide by it.

We can exchange the rows:

  [1  3]
  [0  2]

This process is called pivoting.

A common method is partial pivoting, where rows are exchanged so that a suitable large pivot is placed in the current position.

Pivoting helps improve numerical stability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ITERATIVE METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Iterative methods offer an alternative to direct methods for solving linear systems, particularly useful when the matrix is large and sparse. Instead of performing a fixed number of operations to obtain the solution, iterative methods start with an initial guess and refine it successively until a convergence criterion is met. Each iteration typically involves multiplying the matrix by a vector, which is cheap for sparse matrices. The cost per iteration is O(n²) for dense matrices, but for sparse matrices it can be much less. The convergence rate depends on the spectral properties of the matrix; for many problems, iterative methods can be orders of magnitude faster than direct methods. However, they may not converge at all for some matrices, and their analysis requires understanding of eigenvalues and vector norms. Popular iterative methods include Jacobi, Gauss-Seidel, and Krylov subspace methods like Conjugate Gradient and GMRES.

Not every large system should be solved using direct methods such as Gaussian Elimination.

For very large systems, iterative methods can be more efficient.

Instead of directly calculating the exact solution in a fixed number of elimination steps, an iterative method starts with an initial approximation and repeatedly improves it.

Example:

  x⁽⁰⁾ is an initial guess.

The algorithm produces:

  x⁽¹⁾, then x⁽²⁾, then x⁽³⁾

and continues until the solution is sufficiently accurate.

Conceptually:

  x⁽⁰⁾ → x⁽¹⁾ → x⁽²⁾ → ... → x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. JACOBI METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Jacobi method is one of the simplest iterative techniques for solving linear systems. It isolates each variable in terms of the others and updates all components simultaneously using the previous iteration's values. This makes the method easy to implement and inherently parallelizable, as each new value depends only on the old values. However, its convergence is guaranteed only for strictly diagonally dominant matrices (or positive definite matrices in some variants). The convergence rate can be slow, often linear, but for many practical problems with well-conditioned matrices, it is acceptable. The Jacobi method is a good starting point for understanding iterative methods and is often used as a preconditioner for more sophisticated Krylov methods. Its simplicity also makes it a useful teaching tool for illustrating the principles of fixed-point iteration.

The Jacobi Method is an iterative technique for solving systems of linear equations.

Consider:

  A x = b

Each variable is isolated using the corresponding equation, and new approximations are calculated repeatedly.

Example:

  4x + y = 9
  x + 3y = 7

We can rewrite these as:

  x = (9 - y) / 4
  y = (7 - x) / 3

Starting with an initial guess such as:

  x⁽⁰⁾ = 0,    y⁽⁰⁾ = 0

we repeatedly calculate improved values.

The process continues until the values converge to the solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GAUSS-SEIDEL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Gauss-Seidel method improves upon the Jacobi method by using the most recently computed values as soon as they are available. This typically accelerates convergence compared to Jacobi, often by a factor of two or more, without increasing the computational cost per iteration. The method is sequential in nature because each new component is computed using already updated components from the same iteration. This makes it less parallelizable than Jacobi but often faster in practice. Like Jacobi, convergence is guaranteed for strictly diagonally dominant matrices and for symmetric positive-definite matrices under certain conditions. The Gauss-Seidel method is widely used in applications such as power flow analysis in electrical engineering and in the solution of partial differential equations via finite differences, where matrices are often diagonally dominant.

The Gauss-Seidel Method is another iterative method.

It is similar to Jacobi iteration, but it immediately uses newly calculated values.

Example: If a new value of x is calculated, that new value is immediately used when calculating y.

This can often make Gauss-Seidel converge faster than the basic Jacobi Method for suitable systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONVERGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Convergence is the property of an iterative method that ensures the sequence of approximations approaches the true solution as the number of iterations increases. It is the most critical factor in deciding whether an iterative method is suitable for a given problem. Convergence can be analysed using error vectors and matrix norms; the error at iteration k is typically bounded by a constant times the k-th power of the spectral radius of the iteration matrix. If the spectral radius is less than 1, the method converges; otherwise, it diverges. For practical purposes, we monitor the residual or the change in the solution to detect convergence. Achieving fast convergence is often the goal, leading to the development of preconditioners and acceleration techniques. Understanding convergence helps in selecting the appropriate method and in setting termination criteria for stopping the iterations.

An iterative method is useful only if the sequence of approximations approaches the desired solution.

Example:

  x⁽¹⁾ = 1.5
  x⁽²⁾ = 1.75
  x⁽³⁾ = 1.875
  x⁽⁴⁾ = 1.9375

and so on.

If the values approach x = 2, then the method is converging.

If the values move farther away from the solution, the method is diverging.

Therefore, convergence is an important consideration when using iterative methods.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RESIDUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The residual is a practical measure of how well a computed solution satisfies the original system. It is defined as r = b - A x̂, where x̂ is the computed solution. A small residual indicates that the equations are nearly satisfied, which is often a necessary condition for a good solution. However, a small residual does not guarantee that x̂ is close to the true solution, especially when the matrix is ill-conditioned; a large condition number can amplify small residual errors into large forward errors. Nevertheless, the residual is easy to compute and is used in stopping criteria for iterative methods. Monitoring the residual allows us to assess progress and decide when to terminate the iteration. In backward error analysis, the residual directly measures the perturbation needed to make x̂ the exact solution, linking residual to stability.

In numerical Linear Algebra, the residual measures how well a computed solution satisfies the original system.

Suppose we have:

  A x̂ ≈ b

The residual is:

  r = b - A x̂

If r is close to zero, the computed solution satisfies the system closely.

Example: If:

  r = [0.001]
      [-0.002]

the residual is small, indicating that the computed solution is a good fit to the equations.

However, a small residual does not always guarantee that the computed solution is close to the true solution, especially when the problem is ill-conditioned.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QR DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR decomposition is a powerful factorization that expresses a matrix A as the product of an orthogonal matrix Q and an upper triangular matrix R. The orthogonality of Q (Qᵀ Q = I) means that it preserves norms, making QR decomposition numerically stable and especially suited for least‑squares problems. It is computed using Householder reflections or Givens rotations, both of which are stable and widely implemented. QR decomposition also plays a key role in eigenvalue algorithms (the QR algorithm) and in the solution of linear systems, particularly when the matrix is ill‑conditioned. For overdetermined systems, QR provides a direct way to find the least‑squares solution without forming the normal equations, thus avoiding squaring the condition number. Its versatility and stability make it a cornerstone of numerical linear algebra.

QR Decomposition expresses a matrix as:

  A = Q R

where Q is orthogonal and R is upper triangular.

QR is particularly useful for:
  • Least-squares problems
  • Orthogonalization
  • Eigenvalue algorithms
  • Numerically stable computations

Because orthogonal transformations preserve lengths and angles, QR methods can have strong numerical stability properties.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. CHOLESKY DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cholesky decomposition is a specialized factorization for symmetric positive‑definite matrices, which arise frequently in statistics, optimisation, and physical simulations. It factors A as A = L Lᵀ, where L is lower triangular. The decomposition is about twice as efficient as LU because it exploits symmetry and does not require pivoting for stability. Its existence is equivalent to positive definiteness, so it serves as a check for this property. Cholesky is used in solving linear systems, in generating correlated random variables, and in Kalman filters. Its square‑root form also helps in maintaining numerical stability and is the basis for many advanced algorithms. The ease of computation and storage efficiency make Cholesky the method of choice for positive‑definite problems.

For a symmetric positive-definite matrix:

  A = L Lᵀ

This is called Cholesky Decomposition.

Because it takes advantage of the special structure of the matrix, Cholesky can be more efficient than general LU Decomposition.

It is commonly used in numerical optimization, statistics, simulations, and solving systems involving covariance matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EIGENVALUE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalue problems are central to many areas of science and engineering, from vibration analysis to quantum mechanics. The problem is to find scalars λ (eigenvalues) and nonzero vectors v (eigenvectors) such that A v = λ v. For large matrices, directly solving the characteristic polynomial is impractical; instead, numerical algorithms like the QR algorithm or power iteration are used. These methods exploit iterative transformations to converge to the eigenvalues and eigenvectors without forming the polynomial. The QR algorithm, in particular, is the standard for dense eigenvalue problems due to its stability and efficiency. Eigenvalue computations are essential for understanding the behaviour of dynamical systems, performing principal component analysis, and many other applications. Numerical methods for eigenvalues require careful attention to conditioning and stability, as small perturbations can significantly affect the computed spectrum.

Numerical Linear Algebra also deals with finding eigenvalues and eigenvectors.

The eigenvalue problem is:

  A v = λ v

The goal is to find the values of λ and corresponding vectors v.

For large matrices, directly solving the characteristic polynomial can be computationally expensive.

Therefore, numerical algorithms such as the QR Algorithm are used to approximate eigenvalues efficiently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. SINGULAR VALUE DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Singular Value Decomposition (SVD) is one of the most versatile and powerful tools in numerical linear algebra. It factors any matrix A (rectangular or square) as A = U Σ Vᵀ, where U and V are orthogonal matrices and Σ is a diagonal matrix of non‑negative singular values. The singular values reveal the intrinsic structure: their magnitudes indicate the importance of each dimension, and their count gives the rank of A. SVD is used in data compression, where keeping only the largest singular values yields low‑rank approximations; in least‑squares, where it provides the minimum‑norm solution; and in principal component analysis, where it captures the dominant modes of variation. Its numerical stability and ability to handle rank‑deficient matrices make it the method of choice for many problems. The SVD is computationally more expensive than other factorizations, but its benefits often outweigh the cost.

Another important numerical technique is Singular Value Decomposition:

  A = U Σ Vᵀ

SVD is particularly valuable because it works with rectangular matrices and can reveal the important structure of a dataset.

It is used in:
  • Data compression
  • Dimensionality reduction
  • Image processing
  • Machine learning
  • Recommendation systems
  • Least squares
  • Rank approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SPARSE MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sparse matrices are matrices where most of the entries are zero. They arise naturally in many applications, such as finite element discretisations of partial differential equations, network analysis, and large‑scale optimisation. Exploiting sparsity is essential for solving large problems because storing and operating on all entries would be prohibitively expensive. Sparse storage formats, such as compressed sparse row (CSR) or coordinate (COO), store only the non‑zero entries along with their indices, drastically reducing memory usage. Moreover, algorithms designed for sparse matrices, including sparse LU, sparse Cholesky, and iterative methods, are much faster than their dense counterparts. Understanding sparse matrix techniques is a key skill in scientific computing and data science, where large but sparse datasets are common.

Large real-world systems often contain matrices where most entries are zero.

Example:

  A = [5  0  0  0]
      [0  3  0  0]
      [0  0  7  0]
      [0  0  0  2]

This is a sparse matrix because most entries are zero.

Instead of storing every zero, numerical software can store only the nonzero values and their locations.

This can greatly reduce:
  • Memory usage
  • Computation time
  • Storage requirements

Sparse matrix methods are extremely important when dealing with very large systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. DIRECT METHODS VS. ITERATIVE METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical Linear Algebra methods can be broadly classified into direct and iterative methods. Direct methods compute the solution in a fixed number of operations, typically based on matrix factorisations, and are guaranteed to produce the result (up to round‑off) after that many steps. They are robust and predictable, making them suitable for small to medium‑sized problems or dense matrices. Iterative methods, on the other hand, generate a sequence of approximations that converge to the solution. They are often the only practical choice for very large sparse systems because they can be stopped when sufficient accuracy is achieved and per‑iteration cost is low. The choice between them depends on factors such as matrix size, sparsity, conditioning, and available computational resources. Hybrid approaches, where direct methods are used as preconditioners for iterative ones, are common in advanced solvers.

Numerical Linear Algebra methods can generally be divided into two major categories.

────────────────────────────────────────────────────────────────────────────────

Direct Methods

Direct methods attempt to obtain the solution through a fixed sequence of operations.

Examples include:
  • Gaussian Elimination
  • LU Decomposition
  • QR Decomposition
  • Cholesky Decomposition

For an ideal exact-arithmetic setting, these methods produce the solution after a finite sequence of operations.

────────────────────────────────────────────────────────────────────────────────

Iterative Methods

Iterative methods start with an approximation and repeatedly improve it.

Examples include:
  • Jacobi Method
  • Gauss-Seidel Method
  • Conjugate Gradient Method
  • GMRES

These methods are particularly useful for very large or sparse systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CONJUGATE GRADIENT METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Conjugate Gradient (CG) method is a powerful iterative technique specifically designed for solving systems A x = b where A is symmetric positive‑definite. It is a Krylov subspace method that, in exact arithmetic, converges to the exact solution in at most n iterations, where n is the matrix size. In practice, it often converges much faster, especially when the matrix has a clustered spectrum. CG is particularly efficient for large sparse systems because each iteration requires only one matrix‑vector product and a few vector operations. It is widely used in computational mechanics, image processing, and machine learning. The method is also the basis for many preconditioned variants, which greatly accelerate convergence for ill‑conditioned problems. Understanding CG is essential for anyone working with large‑scale linear systems.

The Conjugate Gradient Method is an important iterative method for solving systems of the form:

  A x = b

when A is symmetric positive-definite.

Instead of directly eliminating variables, the method searches for the solution through a sequence of carefully chosen directions.

It is especially useful for large sparse systems where direct factorization would require too much memory or computation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMPUTATIONAL COMPLEXITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Computational complexity measures the amount of resources (typically time and memory) required by an algorithm as a function of the input size. In numerical linear algebra, the most common measure is the number of floating‑point operations (flops). For dense matrix operations, the complexity is often O(n³) for factorisations and O(n²) for triangular solves. Understanding these complexities is crucial for predicting the scalability of algorithms. For example, doubling the matrix size increases the cost of Gaussian elimination by a factor of eight, which can quickly become prohibitive. This is why sparse and iterative methods are essential for very large problems. Complexity analysis also guides the selection of algorithms: for small n, a simpler method may suffice, while for large n, more sophisticated algorithms are necessary.

Numerical Linear Algebra also studies how much computational work an algorithm requires.

For example, solving a dense n×n system using standard Gaussian Elimination requires approximately:

  O(n³)

operations.

This means that if the size of the matrix doubles, the computational work can increase by roughly a factor of eight.

This is why algorithm efficiency becomes extremely important for large matrices.

────────────────────────────────────────────────────────────────────────────────

Example of Computational Growth

Suppose a method requires approximately n³ operations.

  For n = 10:    10³ = 1,000
  For n = 100:   100³ = 1,000,000
  For n = 1,000: 1,000³ = 1,000,000,000

This demonstrates why numerical algorithms must be designed carefully when dealing with large matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. NUMERICAL LINEAR ALGEBRA IN COMPUTER SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical Linear Algebra is integral to many areas of Computer Science. In machine learning, training algorithms involve massive matrix operations, from weight updates to backpropagation. Computer graphics relies on matrix transformations for rendering 3D scenes, and computer vision uses linear algebra for image processing and feature extraction. Data science uses SVD and PCA to reduce dimensionality and uncover patterns. Even in artificial intelligence, optimisation algorithms like gradient descent often require solving linear systems or performing matrix factorisations. As hardware accelerators (GPUs) become more common, efficient numerical linear algebra implementations are critical for performance. Thus, a solid understanding of numerical methods is essential for computer scientists working at the intersection of software and mathematics.

Numerical Linear Algebra has many applications in Computer Science.

Machine Learning
  • Neural networks perform enormous numbers of matrix and vector operations

Computer Graphics
  • Matrices are used for transformations such as rotation, scaling, and projection

Computer Vision
  • Images and visual data are represented using matrices and processed using numerical algorithms

Data Science
  • Large datasets are represented as matrices and analyzed using methods such as SVD and PCA

Artificial Intelligence
  • Optimization algorithms frequently require solving systems involving matrices

Scientific Computing
  • Computers use numerical Linear Algebra to simulate physical and mathematical systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. NUMERICAL LINEAR ALGEBRA IN ENGINEERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Engineering disciplines rely heavily on numerical linear algebra to model and simulate physical systems. Structural engineers use it to determine stresses and displacements in buildings and bridges. Electrical engineers solve circuit equations and power flow problems. Mechanical engineers analyse vibrations and control systems. In all these cases, the governing equations are often linear or linearised, resulting in large sparse systems that must be solved efficiently. Numerical methods like finite element analysis (FEA) generate matrices that are solved using LU, Cholesky, or iterative methods. The accuracy and speed of these simulations directly impact design decisions, safety assessments, and cost optimisation. Consequently, engineers must understand the principles of numerical linear algebra to use simulation software effectively and to interpret its results correctly.

Engineers frequently encounter systems such as:

  A x = b

Examples:
  • Structural engineering: calculating unknown forces in a structure
  • Electrical engineering: solving circuit equations
  • Mechanical engineering: simulations of physical systems
  • Civil engineering: structural models with thousands of variables

Numerical Linear Algebra allows these problems to be solved efficiently using computers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. NUMERICAL LINEAR ALGEBRA IN REAL-WORLD SIMULATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Real-world simulations, such as weather forecasting, climate modelling, and aerodynamics, involve solving systems with millions of unknowns derived from discretised partial differential equations. These systems are typically sparse and require sophisticated numerical linear algebra techniques to be solved within reasonable time and memory limits. Direct methods are often infeasible; instead, preconditioned iterative methods are used. The choice of preconditioner, which is often based on incomplete factorisations or domain decomposition, greatly affects convergence. The development of efficient solvers is a field of active research, with applications in many areas of science and engineering. The example of temperature distribution in a building illustrates how a physical domain is divided into small cells, leading to a linear system that can be solved numerically. This approach is the essence of computational science.

Suppose engineers want to simulate the temperature distribution across a building.

The building can be divided into many small regions.

Each region has an unknown temperature.

The relationships between neighboring regions produce a large system:

  A x = b

If the building is divided into thousands of regions, the resulting matrix may have thousands of rows and columns.

A numerical Linear Algebra algorithm can solve the system and determine the approximate temperature at each location.

This demonstrates how a mathematical matrix problem can represent a real physical system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mastering numerical linear algebra requires familiarity with a core set of concepts that underpin all algorithms and analyses. Floating‑point arithmetic and round‑off error are the starting points, as they define the environment in which computations take place. Truncation error arises when infinite processes are approximated. The condition number characterises the sensitivity of the problem itself, while stability describes the algorithm's behaviour under perturbations. Residuals provide a practical check on the quality of a computed solution. Understanding these concepts is essential for interpreting results and diagnosing potential issues. Additionally, knowledge of the major algorithms Gaussian elimination, LU, QR, Cholesky, iterative methods, eigenvalue algorithms, and SVD and their applications is fundamental. Finally, awareness of computational complexity and sparse matrix techniques is crucial for handling large‑scale problems efficiently. Together, these concepts form the bedrock of practical computational linear algebra.

The major concepts in Numerical Linear Algebra include:

  • Floating-Point Arithmetic
  • Round-Off Error
  • Truncation Error
  • Conditioning
  • Stability
  • Residuals
  • Gaussian Elimination
  • LU Decomposition
  • QR Decomposition
  • Cholesky Decomposition
  • Iterative Methods
  • Eigenvalue Algorithms
  • Singular Value Decomposition
  • Sparse Matrices
  • Computational Complexity

These concepts form the foundation of computational Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Numerical Linear Algebra is the study of computational methods for solving problems involving vectors and matrices.

It becomes especially important when the problems are too large or complicated to solve manually.

Instead of focusing only on exact symbolic solutions, Numerical Linear Algebra considers:

  • How to solve problems efficiently
  • How computers represent numbers
  • How much error is introduced
  • How stable an algorithm is
  • How sensitive a problem is to input changes
  • How much computational time and memory are required

Key Methods:

  Direct Methods:
    • Gaussian Elimination
    • LU Decomposition
    • QR Decomposition
    • Cholesky Decomposition

  Iterative Methods:
    • Jacobi Method
    • Gauss-Seidel Method
    • Conjugate Gradient Method

  Factorizations:
    • SVD
    • Eigenvalue Decomposition

Key Concepts:

  • Round-off error: finite precision arithmetic
  • Truncation error: finite approximation of infinite processes
  • Condition number: sensitivity to input changes
  • Stability: robustness to numerical errors
  • Residual: how well the solution satisfies the system
  • Sparse matrices: efficient storage and computation

The key idea to remember:

  Numerical Linear Algebra uses algorithms and computers to obtain accurate and efficient solutions to large-scale problems involving matrices and vectors while carefully managing numerical errors.

It connects theoretical Linear Algebra with practical computing and is fundamental to Computer Science, Artificial Intelligence, Machine Learning, Data Science, Engineering, Scientific Computing, Computer Graphics, and Numerical Simulation.
  `,
  examples: [
    "Floating-point: 1/3 ≈ 0.3333333333333333",
    "Round-off error vs truncation error",
    "Forward error: e = x̂ - x",
    "Condition number: κ(A) = ||A||·||A⁻¹||",
    "Gaussian Elimination: A x = b → U x = c",
    "LU Decomposition: A = L U",
    "Pivoting: exchange rows when pivot is zero",
    "Jacobi Method: iterative approximation",
    "Gauss-Seidel Method: uses updated values immediately",
    "Residual: r = b - A x̂",
    "QR Decomposition: A = Q R",
    "Cholesky: A = L Lᵀ",
    "SVD: A = U Σ Vᵀ",
    "Sparse matrices: store only non-zero entries",
    "Conjugate Gradient: for symmetric positive-definite matrices",
    "O(n³) complexity for dense Gaussian Elimination",
    "Explain round-off vs truncation error",
    "Apply the Jacobi method to solve Ax=b.",
  ],
};

export default topic;