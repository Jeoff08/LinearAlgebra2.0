const topic = {
  id: "lu",
  title: "LU Decomposition",
  summary:
    "LU factorization methods (Doolittle, Crout), pivoting and solving triangular systems.",
  details: `
LU Decomposition is a method in Linear Algebra for breaking a matrix into the product of two simpler matrices: a lower triangular matrix (L) and an upper triangular matrix (U). This factorization is one of the most fundamental tools in numerical linear algebra because it transforms the problem of solving a general linear system into two much simpler problems involving triangular matrices. Triangular systems are easy to solve using forward and backward substitution, making LU decomposition highly efficient. The name LU comes from these two matrices: L for Lower triangular and U for Upper triangular. The basic idea is A = L U, where A is the original matrix. LU Decomposition is especially useful for solving systems of linear equations efficiently, particularly when the same coefficient matrix is used with different right-hand sides. It also forms the basis for many other numerical algorithms, including matrix inversion and determinant computation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE TRIANGULAR MATRICES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Triangular matrices are square matrices where all entries on one side of the main diagonal are zero. A lower triangular matrix has zeros above the main diagonal, meaning all non-zero entries are on or below the diagonal. Conversely, an upper triangular matrix has zeros below the main diagonal, with all non-zero entries on or above the diagonal. These matrices are particularly important because they are easy to solve: lower triangular systems are solved by forward substitution (starting from the first equation), and upper triangular systems are solved by back substitution (starting from the last equation). This simplicity is what makes LU decomposition so powerful it reduces a general matrix problem to two triangular problems. Moreover, the determinant of a triangular matrix is simply the product of its diagonal entries, which makes determinant computation trivial once a matrix is factored into triangular form.

A lower triangular matrix has zeros above the main diagonal.

Example:

  L = [1  0  0]
      [2  1  0]
      [3  4  1]

The entries above the main diagonal are zero.

An upper triangular matrix has zeros below the main diagonal.

Example:

  U = [2  3  4]
      [0  5  6]
      [0  0  7]

The entries below the main diagonal are zero.

These matrices are easier to work with because they can be solved using forward substitution and back substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA OF LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The core idea behind LU decomposition is to factor a matrix A into a lower triangular matrix L and an upper triangular matrix U such that A = L U. This factorization allows us to solve the linear system A x = b in two stages. First, we introduce an intermediate vector y and solve L y = b using forward substitution. Since L is lower triangular, this is straightforward and yields y. Then, we solve U x = y using back substitution, which is equally simple because U is upper triangular. This two-stage process is much more efficient than solving the original system directly, especially when we need to solve multiple systems with the same A but different b vectors. Once the LU decomposition is computed, each new right-hand side requires only O(n²) operations (the two triangular solves) instead of O(n³) operations for a full Gaussian elimination.

Suppose we have:

  A x = b

If we decompose A as:

  A = L U

then:

  L U x = b

Instead of solving the original system directly, we introduce an intermediate vector y:

  L y = b

After finding y, we solve:

  U x = y

Therefore, the entire process becomes:

  A x = b  →  L U x = b  →  L y = b  →  U x = y

This is the central idea behind LU Decomposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE OF LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a complete example to illustrate the LU decomposition process. The method proceeds by applying Gaussian elimination to transform A into an upper triangular matrix U, while simultaneously recording the elimination multipliers in L. The multipliers mᵢⱼ represent the factor by which we multiply row j before subtracting it from row i to eliminate the entry below the pivot. These multipliers are stored in L below the diagonal, with the diagonal of L set to 1 (in the Doolittle variant). This process systematically reduces the matrix column by column until all entries below the diagonal are zero. The resulting U is the upper triangular matrix, and L is constructed from the multipliers. This decomposition is unique if no row swaps are required and the pivots are non-zero.

Consider the matrix:

  A = [2   1   1]
      [4  -6   0]
      [-2  7   2]

We want to decompose it into:

  A = L U

The goal is to use Gaussian elimination to transform A into an upper triangular matrix U.

The elimination steps are recorded in L.

────────────────────────────────────────────────────────────────────────────────

Step 1: Eliminate the First Column

Start with:

  A = [2   1   1]
      [4  -6   0]
      [-2  7   2]

To eliminate the 4 below the first pivot (2), calculate:

  m₂₁ = 4/2 = 2

Therefore:

  R₂ ← R₂ - 2R₁

Calculate:

  R₂ = [4, -6, 0] - 2[2, 1, 1] = [0, -8, -2]

Now eliminate the -2 below the first pivot:

  m₃₁ = -2/2 = -1

Thus:

  R₃ ← R₃ - (-1)R₁

This becomes:

  R₃ ← R₃ + R₁

Therefore:

  R₃ = [-2, 7, 2] + [2, 1, 1] = [0, 8, 3]

The matrix is now:

  [2   1   1]
  [0  -8  -2]
  [0   8   3]

────────────────────────────────────────────────────────────────────────────────

Step 2: Eliminate the Second Column

Now we need to eliminate the 8 below the second pivot (-8).

Calculate:

  m₃₂ = 8/(-8) = -1

Therefore:

  R₃ ← R₃ - (-1)R₂

So:

  R₃ ← R₃ + R₂

Calculate:

  [0, 8, 3] + [0, -8, -2] = [0, 0, 1]

Therefore, the resulting upper triangular matrix is:

  U = [2   1   1]
      [0  -8  -2]
      [0   0   1]

────────────────────────────────────────────────────────────────────────────────

Constructing the Lower Triangular Matrix

The multipliers used during Gaussian elimination are placed below the diagonal of L.

We found:

  m₂₁ = 2
  m₃₁ = -1
  m₃₂ = -1

Therefore:

  L = [1    0   0]
      [2    1   0]
      [-1  -1   1]

Thus:

  A = L U

where:

  L = [1    0   0]    U = [2   1   1]
      [2    1   0]        [0  -8  -2]
      [-1  -1   1]        [0   0   1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VERIFYING THE DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After performing the LU decomposition, it is always good practice to verify that the product L U indeed equals the original matrix A. This check confirms that the multipliers were correctly recorded and that the arithmetic is correct. The verification also reinforces the relationship between the elimination steps and the factors L and U. In practice, numerical errors can accumulate, especially with large matrices, so verification helps ensure accuracy. The product L U should match A exactly (up to rounding errors in floating-point arithmetic). This verification step is especially important when implementing LU decomposition in code, as it catches mistakes in the elimination process.

We can verify that L U = A.

Multiply:

  [1    0   0]   [2   1   1]   [2   1   1]
  [2    1   0] · [0  -8  -2] = [4  -6   0]
  [-1  -1   1]   [0   0   1]   [-2  7   2]

The first row becomes:  [2, 1, 1]
The second row becomes: [4, -6, 0]
The third row becomes:  [-2, 7, 2]

Therefore:

  L U = [2   1   1] = A
         [4  -6   0]
         [-2  7   2]

So the decomposition is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. USING LU DECOMPOSITION TO SOLVE A SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we have the LU decomposition of A, solving A x = b becomes a straightforward two-step procedure. First, we solve L y = b by forward substitution. Because L is lower triangular, we can compute y₁, then y₂, then y₃, and so on, using previously computed values. Next, we solve U x = y by back substitution. Because U is upper triangular, we start with xₙ and work backwards. This process is efficient and numerically stable. Moreover, if we need to solve multiple systems with the same A but different b vectors, we only need to perform the LU decomposition once; then, for each b, we just do the two triangular solves, which are O(n²) each, instead of O(n³) for each system.

Suppose we want to solve:

  A x = b

where:

  A = [2   1   1]    b = [5]
      [4  -6   0]        [-2]
      [-2  7   2]        [9]

Since A = L U, we have:

  L U x = b

Introduce:

  y = U x

Then solve:

  L y = b

────────────────────────────────────────────────────────────────────────────────

Step 1: Forward Substitution

We have:

  [1    0   0] [y₁] = [5]
  [2    1   0] [y₂]   [-2]
  [-1  -1   1] [y₃]   [9]

This produces the equations:

  y₁ = 5
  2y₁ + y₂ = -2
  -y₁ - y₂ + y₃ = 9

Since y₁ = 5, we get:

  2(5) + y₂ = -2
  y₂ = -12

Now:

  -5 - (-12) + y₃ = 9
  7 + y₃ = 9
  y₃ = 2

Therefore:

  y = [5]
      [-12]
      [2]

────────────────────────────────────────────────────────────────────────────────

Step 2: Back Substitution

Now solve:

  U x = y

Therefore:

  [2   1   1] [x₁] = [5]
  [0  -8  -2] [x₂]   [-12]
  [0   0   1] [x₃]   [2]

This gives:

  2x₁ + x₂ + x₃ = 5
  -8x₂ - 2x₃ = -12
  x₃ = 2

Starting with the last equation:

  x₃ = 2

Then:

  -8x₂ - 2(2) = -12
  -8x₂ - 4 = -12
  -8x₂ = -8
  x₂ = 1

Finally:

  2x₁ + 1 + 2 = 5
  2x₁ + 3 = 5
  2x₁ = 2
  x₁ = 1

Thus:

  x = [1]
      [1]
      [2]

This is the solution of the original system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LU DECOMPOSITION VS. GAUSSIAN ELIMINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition is closely related to Gaussian Elimination. In fact, Gaussian elimination is the engine that drives LU decomposition. When we perform Gaussian elimination on A, we transform it into an upper triangular matrix U. The same elimination steps, when applied to the right-hand side b, yield the solution. LU decomposition goes one step further by recording the elimination multipliers in the lower triangular matrix L. This allows us to reuse the elimination work for multiple right-hand sides. In essence, Gaussian elimination is the process of computing U and the transformation that produced it; LU decomposition explicitly stores that transformation as L. Thus, LU decomposition is not a new algorithm but rather a way of organizing and storing the results of Gaussian elimination for later use, making it more efficient for multiple systems.

LU Decomposition is closely related to Gaussian Elimination.

Gaussian Elimination transforms A into an upper triangular matrix U.

LU Decomposition goes one step further by recording the elimination multipliers in a lower triangular matrix L.

Therefore:

  A = L U

The relationship can be summarized as:

  Gaussian Elimination:  A → U
  LU Decomposition:      A → L and U

The U matrix contains the result of elimination, while L stores the information about the elimination operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LU DECOMPOSITION AND MULTIPLE SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the biggest advantages of LU Decomposition is that it is very efficient when solving multiple systems with the same coefficient matrix. In many applications, such as structural analysis, circuit simulation, and scientific computing, we often encounter the same A with many different b vectors. Without LU decomposition, each system would require a full Gaussian elimination, costing O(n³) operations each time. With LU decomposition, we factor A once (O(n³) operations) and then solve each system with two triangular solves (O(n²) operations each). This can lead to enormous savings when the number of right-hand sides is large. This efficiency is why LU decomposition is a standard tool in numerical linear algebra libraries.

Suppose we have:

  A x₁ = b₁
  A x₂ = b₂

and perhaps many more systems using the same A.

Instead of performing Gaussian Elimination repeatedly, we can calculate:

  A = L U

once.

Then for each new b, we solve:

  L y = b
  U x = y

This saves a significant amount of computation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LU DECOMPOSITION AND MATRIX INVERSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition can also be used to calculate a matrix inverse. If A = L U, then A⁻¹ = (L U)⁻¹ = U⁻¹ L⁻¹. However, explicitly computing the inverse is generally not recommended for numerical reasons; it is more efficient and stable to use the LU factors directly to solve systems. In practice, if we need the inverse, we can solve A X = I column by column using LU decomposition, where each column of X is the corresponding column of the inverse. This approach avoids the expensive and often unstable process of explicitly computing the inverse matrix. In most applications, solving systems is preferred over computing inverses, and LU decomposition facilitates this.

Suppose:

  A = L U

Then:

  A⁻¹ = (L U)⁻¹

Using the inverse product rule:

  A⁻¹ = U⁻¹ L⁻¹

However, in numerical applications, we usually avoid explicitly calculating the inverse when we only need to solve a system.

Instead, we use the LU factors directly.

This is generally more efficient and numerically preferable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LU DECOMPOSITION WITH PIVOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes Gaussian Elimination encounters a zero or very small pivot. A zero pivot means the elimination cannot proceed directly, while a very small pivot can lead to numerical instability due to large multipliers. To handle this, we use pivoting: swapping rows (or columns) to bring a larger element into the pivot position. Partial pivoting, the most common form, involves row exchanges. The decomposition then becomes P A = L U, where P is a permutation matrix that records the row swaps. Pivoting is essential for numerical stability, especially for matrices that are not strictly diagonally dominant or positive definite. In practice, most LU implementations use partial pivoting to ensure reliable results, even though it adds some complexity to the decomposition.

Sometimes Gaussian Elimination encounters a zero or very small pivot.

Example:

  A = [0  2]
      [1  3]

The first pivot is zero, so ordinary elimination cannot proceed directly.

In these situations, we can exchange rows using a permutation matrix P.

The decomposition then becomes:

  P A = L U

rather than simply:

  A = L U

This is called LU Decomposition with partial pivoting.

It is commonly used in numerical computing because pivoting improves numerical stability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DOOLITTLE METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Doolittle method is one of the most common algorithms for computing LU decomposition. In this method, the diagonal entries of L are set to 1, while the diagonal entries of U are determined by the elimination process. This choice simplifies the computation of the factors and is particularly convenient for hand calculations. The Doolittle method proceeds by eliminating entries column by column, storing the multipliers in L, and updating the remaining entries of U. It works well for matrices where the leading principal minors are non-zero (i.e., no row swaps are needed). Many textbooks use the Doolittle method as the standard introduction to LU decomposition because of its straightforward implementation.

One common method for calculating LU Decomposition is the Doolittle Method.

In the Doolittle method, the diagonal entries of L are set to 1:

  Lᵢᵢ = 1

Example:

  L = [1    0   0]
      [l₂₁  1   0]
      [l₃₁  l₃₂ 1]

The remaining entries of L and U are calculated so that:

  A = L U

This is one of the standard approaches for teaching and implementing LU Decomposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CROUT METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Crout method is an alternative approach to LU decomposition. In contrast to the Doolittle method, the Crout method sets the diagonal entries of U to 1, while the diagonal entries of L are determined by the elimination. This choice can be convenient in some implementations, particularly when solving systems where the right-hand side is updated frequently. The Crout method follows a similar elimination process, but the positions of the diagonal ones are swapped. Both methods produce valid LU decompositions, and the choice between them is often a matter of convention or numerical preference. The key difference is where the diagonal entries are normalized; the underlying mathematics is equivalent.

Another approach is the Crout Method.

Unlike the Doolittle method, Crout's method generally sets the diagonal entries of U equal to 1:

  Uᵢᵢ = 1

Example:

  U = [1  u₁₂  u₁₃]
      [0   1   u₂₃]
      [0   0    1]

Both Doolittle and Crout methods produce an LU factorization, but they organize the calculations differently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LDU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LDU decomposition is a refinement of LU decomposition that separates the diagonal entries into a separate diagonal matrix D. In this form, A = L D U, where L is a unit lower triangular matrix (diagonal entries all 1), D is a diagonal matrix containing the pivots (or other scaling factors), and U is a unit upper triangular matrix (diagonal entries all 1). This form can be useful for theoretical analysis, as it isolates the scaling factors from the triangular factors. The LDU decomposition is unique if A is invertible, and it is often used in proofs of matrix properties. It also relates to the Cholesky decomposition for symmetric positive definite matrices, where L and U are transposes of each other, and D contains the positive square roots.

LU Decomposition can sometimes be further separated into:

  A = L D U

where:
  • L is lower triangular
  • D is diagonal
  • U is upper triangular

This form is called LDU Decomposition.

It can be useful because separating the diagonal values can make certain matrix properties easier to analyze.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition is not primarily a geometric transformation like rotation or reflection. Instead, it provides an efficient way to represent the algebraic process of eliminating variables. The matrix U represents the simplified system obtained after elimination, while L records the elimination information needed to reconstruct the original matrix. The decomposition can be viewed as a way of breaking a complicated matrix problem into simpler triangular problems. Instead of directly solving A x = b, we solve L y = b and then U x = y. This two-step approach is the algebraic counterpart of the geometric idea of decomposing a transformation into simpler parts. Although LU decomposition does not have a direct geometric interpretation like rotations or scalings, it is a fundamental tool that enables many other geometric and computational algorithms.

LU Decomposition is not primarily a geometric transformation like rotation or reflection. Instead, it provides an efficient way to represent the algebraic process of eliminating variables.

The matrix U represents the simplified system obtained after elimination.

The matrix L records the elimination information needed to reconstruct the original matrix.

Therefore, LU Decomposition can be viewed as a way of breaking a complicated matrix problem into simpler triangular problems.

Instead of directly solving:

  A x = b

we solve:

  L y = b

and then:

  U x = y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. APPLICATIONS OF LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition is widely used in computational Linear Algebra.

  1. Engineering
     • Solving systems involving forces, structures, electrical circuits, and physical models

  2. Scientific Computing
     • Solving large systems of equations efficiently

  3. Computer Simulations
     • Repeatedly solving systems that arise during simulations

  4. Computer Graphics
     • Matrix systems involving transformations and geometric calculations

  5. Data Science
     • Numerical optimization and matrix computations

  6. Numerical Analysis
     • One of the fundamental methods for solving linear systems

  7. Finite Element Analysis
     • Solving large systems of equations using matrix factorization techniques

  8. Economics
     • Input-output analysis
     • Economic modeling

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ADVANTAGES OF LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition has several important advantages.

  1. Efficient for Multiple Right-Hand Sides
     • Once A = L U is calculated, different vectors b can be handled efficiently

  2. Uses Triangular Systems
     • Triangular systems are much easier to solve than general systems

  3. Related to Gaussian Elimination
     • LU Decomposition builds directly on a fundamental Linear Algebra technique

  4. Useful for Numerical Computation
     • Widely implemented in mathematical and scientific software

  5. Can Help Calculate Determinants
     • If A = L U, then det(A) = det(L) · det(U)
     • For triangular matrices, the determinant is the product of the diagonal entries
     • For Doolittle: det(A) = ∏ Uᵢᵢ (if no row permutations)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, LU Decomposition is a method of factoring a matrix into a lower triangular matrix and an upper triangular matrix:

  A = L U

The lower triangular matrix is:

  L = [1    0   0]
      [l₂₁  1   0]
      [l₃₁  l₃₂ 1]

in the common Doolittle form, while the upper triangular matrix has the form:

  U = [u₁₁  u₁₂  u₁₃]
      [0    u₂₂  u₂₃]
      [0     0   u₃₃]

To solve A x = b, we use A = L U and solve two simpler systems:

  L y = b    (forward substitution)
  U x = y    (back substitution)

If row exchanges are required, the decomposition is generally written as:

  P A = L U

Key Methods:

  • Doolittle Method: Lᵢᵢ = 1
  • Crout Method: Uᵢᵢ = 1
  • LDU Decomposition: A = L D U

The key idea to remember:

  LU Decomposition breaks a complicated matrix into two simpler triangular matrices, making systems of linear equations easier and more efficient to solve.

It is closely connected to Gaussian Elimination, forward substitution, back substitution, matrix inverses, determinants, numerical methods, and computational Linear Algebra.
  `,
  examples: [
    "Lower triangular matrix: L = [[1,0,0],[2,1,0],[3,4,1]]",
    "Upper triangular matrix: U = [[2,3,4],[0,5,6],[0,0,7]]",
    "LU decomposition: A = L U",
    "Example: A = [[2,1,1],[4,-6,0],[-2,7,2]] → L and U",
    "Forward substitution: L y = b",
    "Back substitution: U x = y",
    "Doolittle method: Lᵢᵢ = 1",
    "Crout method: Uᵢᵢ = 1",
    "LDU decomposition: A = L D U",
    "Pivoting: P A = L U when pivot is zero",
    "LU for multiple systems: compute once, solve many",
    "det(A) = det(L) · det(U) = ∏ Uᵢᵢ (Doolittle)",
    "Perform LU decomposition on a 3x3 matrix",
    "Use LU factors to solve Ax=b efficiently.",
  ],
};

export default topic;