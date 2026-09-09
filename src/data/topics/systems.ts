const topic = {
  id: "systems",
  title: "Systems of Linear Equations",
  summary:
    "Solving linear systems: Gaussian elimination, row operations, REF/RREF and solution classification.",
  details: `
A System of Linear Equations is a collection of two or more linear equations that involve the same variables. The goal is to find the values of the variables that satisfy all of the equations simultaneously.

In simple terms:

  A system of linear equations is a group of equations that must be solved together to find values that make every equation true at the same time.

Example:

  x + y = 7
  x - y = 1

is a system of two linear equations with two unknowns, x and y.

The solution is the ordered pair (x, y) = (4, 3) because 4 + 3 = 7 and 4 - 3 = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GENERAL FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A system of linear equations can be written in a compact algebraic form that clearly shows the structure. The general form consists of m equations in n unknowns, with coefficients aᵢⱼ, variables xⱼ, and constants bᵢ. This representation is essential because it allows us to apply matrix methods. The system is linear because each term is either a constant or a constant multiplied by a variable, and there are no products or powers of variables. This linearity ensures that the system can be studied using the powerful tools of linear algebra, such as superposition and matrix operations. Writing the system as A x = b abstracts away the individual equations and focuses on the matrix A and the vectors x and b, which is the foundation for many algorithms.

A system of linear equations can be written as:

  a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
  a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
  ⋮
  aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ

where:
  • x₁, x₂, ..., xₙ are the unknown variables
  • aᵢⱼ are coefficients
  • b₁, b₂, ..., bₘ are constants

The system can be represented compactly as:

  A x = b

where A is the coefficient matrix, x is the vector of unknowns, and b is the constant vector.

────────────────────────────────────────────────────────────────────────────────

Example

Consider:

  2x + y = 7
  x - y = 2

The coefficient matrix is:

  A = [2  1]
      [1 -1]

The variable vector is:

  x = [x]
      [y]

and the constant vector is:

  b = [7]
      [2]

Therefore:

  [2  1] [x] = [7]
  [1 -1] [y]   [2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A SOLUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A solution to a system is an assignment of values to all variables that makes every equation true simultaneously. The concept of a solution is the central object of study when solving systems. Finding solutions is equivalent to finding the intersection of all constraints represented by the equations. In geometric terms, for two variables, each equation is a line; the solution is the point where they meet. For more variables, it is the intersection of hyperplanes. A solution can be unique, meaning there is exactly one point satisfying all equations; infinitely many, forming a line, plane, or higher-dimensional subspace; or none at all when the constraints are contradictory. Understanding what constitutes a solution is the first step toward solving systems and interpreting the results in applications.

Example:

  x + y = 7
  x - y = 1

has the solution:

  x = 4,    y = 3

Check the first equation:

  4 + 3 = 7  ✓

Check the second equation:

  4 - 3 = 1  ✓

Since both equations are satisfied, (x, y) = (4, 3) is the solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THREE POSSIBLE TYPES OF SOLUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A system of linear equations can have one of three possible outcomes: a unique solution, infinitely many solutions, or no solution. This trichotomy is a fundamental result of linear algebra, often called the existence and uniqueness theorem. The type of solution is determined by the structure of the coefficient matrix and the augmented matrix. A unique solution occurs when the equations are independent and consistent, meaning they describe a single point of intersection. Infinitely many solutions arise when the equations are dependent, so they describe the same geometric object (e.g., coincident lines or planes). No solution occurs when the equations are inconsistent, meaning they describe parallel objects that never meet. These three cases are not just academic; they appear in real-world problems, such as determining whether a system of forces has a unique equilibrium, whether an electrical circuit has multiple valid current distributions, or whether a set of measured data can be perfectly fitted.

A system of linear equations can have:

  1. One unique solution
  2. Infinitely many solutions
  3. No solution

These possibilities are important when analyzing systems.

────────────────────────────────────────────────────────────────────────────────

1. Unique Solution

A system has a unique solution when exactly one set of values satisfies all equations.

Example:

  x + y = 7
  x - y = 1

has one solution: (x, y) = (4, 3).

Geometrically, if the equations are represented as lines, the lines intersect at exactly one point.

────────────────────────────────────────────────────────────────────────────────

2. Infinitely Many Solutions

A system has infinitely many solutions when the equations represent the same line or otherwise contain dependent equations.

Example:

  x + y = 5
  2x + 2y = 10

The second equation is simply twice the first:

  2(x + y) = 2(5)

Therefore, both equations represent the same line.

Any point satisfying x + y = 5 is a solution.

Examples: (0,5), (1,4), (2,3), (5,0) are all solutions.

Therefore, infinitely many solutions exist.

────────────────────────────────────────────────────────────────────────────────

3. No Solution

A system has no solution when the equations contradict each other.

Example:

  x + y = 5
  x + y = 8

cannot both be true.

The same expression x + y cannot equal both 5 and 8.

Therefore, no solution.

Geometrically, the two lines are parallel and never intersect.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For two variables, each linear equation represents a straight line in the Cartesian plane. The solution to the system is the point (or set of points) where the lines intersect. This geometric perspective makes the three types of solutions intuitive: intersecting lines give a unique solution, coincident lines give infinitely many solutions, and parallel lines give no solution. For three variables, each equation represents a plane, and the solution is the intersection of these planes. This visualization helps in understanding more abstract concepts like linear dependence and independence. Moreover, it shows that solving a system is equivalent to finding the common points of geometric objects, which is a powerful bridge between algebra and geometry. Graphical methods are limited to low dimensions, but they provide a strong foundation for understanding the behaviour of larger systems.

Example:

  y = 2x + 1    represents one line
  y = -x + 4    represents another line

Their intersection represents the solution of the system.

There are three possibilities:

  • One intersection        → One solution
  • Same line                → Infinitely many solutions
  • Parallel lines           → No solution

This geometric interpretation makes the three types of solutions easier to understand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. METHOD 1: SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The substitution method is one of the most straightforward techniques for solving systems of linear equations. It involves solving one equation for one variable in terms of the others, then substituting that expression into the remaining equations. This reduces the number of variables and equations, eventually leading to a single equation in one unknown. Substitution is particularly useful when one equation is already solved for a variable, or when the coefficients make isolation easy. While it can become cumbersome for systems with more than two or three variables, it is an essential technique to understand because it illustrates the concept of eliminating variables. Moreover, substitution provides a clear algebraic justification for the equivalence of different equations, and it connects to the idea of using one equation to express another variable, which is the basis for more advanced methods like Gaussian elimination.

Consider:

  x + y = 7
  x - y = 1

From the first equation:

  x = 7 - y

Substitute this into the second equation:

  (7 - y) - y = 1

Simplify:

  7 - 2y = 1

Therefore:

  -2y = -6

So:

  y = 3

Substitute y = 3 into x + y = 7:

  x + 3 = 7

Therefore:

  x = 4

The solution is (x, y) = (4, 3).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. METHOD 2: ELIMINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The elimination method, also known as the addition method, works by combining equations to eliminate one variable, resulting in a simpler system. This is typically done by adding or subtracting multiples of equations so that the coefficients of one variable cancel. Elimination is often more efficient than substitution for systems with two or three variables, especially when the coefficients are not conveniently isolated. It also scales better to larger systems because it can be performed systematically using row operations, which is the core of Gaussian elimination. The elimination method illustrates the key idea that adding a multiple of one equation to another does not change the solution set, a principle that is fundamental to all matrix-based solution techniques. Mastering elimination builds intuition for matrix row reduction and helps in understanding the concept of linear combinations.

Consider:

  2x + y = 7
  x - y = 2

Add the equations:

  (2x + y) + (x - y) = 7 + 2

The y terms cancel:

  3x = 9

Therefore:

  x = 3

Substitute into x - y = 2:

  3 - y = 2

Therefore:

  y = 1

Thus:

  (x, y) = (3, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. METHOD 3: GAUSSIAN ELIMINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gaussian elimination is one of the most important algorithms in linear algebra. It systematically transforms a system of linear equations into an equivalent system in row echelon form using elementary row operations. These operations—swapping rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another—preserve the solution set. The process works by creating zeros below each pivot, making it easy to solve the system by back-substitution. Gaussian elimination is the foundation for many numerical methods, including LU decomposition and matrix inversion. It is also the standard method for determining the rank of a matrix, detecting whether a system is consistent, and finding all solutions (unique or infinite). Its efficiency and generality make it the tool of choice for both theoretical proofs and practical computations, especially when implemented on computers.

Consider:

  x + y = 5
  2x + 3y = 12

The augmented matrix is:

  [1  1 | 5]
  [2  3 | 12]

Perform R₂ → R₂ - 2R₁:

  [1  1 | 5]
  [0  1 | 2]

The second row gives:

  y = 2

Substitute into the first equation:

  x + 2 = 5

Therefore:

  x = 3

Thus:

  (x, y) = (3, 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ROW ECHELON FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Row echelon form (REF) is a rectangular matrix form achieved by Gaussian elimination. In REF, each nonzero row has a leading entry (the first nonzero entry from the left) that is to the right of the leading entry in the row above, and all entries below a leading entry are zero. Rows consisting entirely of zeros are at the bottom. REF does not require the leading entries to be 1, nor does it require zeros above the leading entries. The significance of REF is that it immediately reveals the rank of the matrix (the number of nonzero rows) and the structure of the solution set. From REF, one can determine whether the system is consistent and identify free variables. Moreover, REF simplifies back-substitution, making it easy to express the solution. It is the first major step towards solving a system and is essential for understanding concepts like pivot positions and column space.

Example:

  [1  2  3]
  [0  1  4]
  [0  0  1]

is in row echelon form.

The important feature is that the pivots move toward the right as we move down the rows.

Row echelon form makes it easier to determine:
  • Rank
  • Solutions
  • Free variables
  • Consistency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. REDUCED ROW ECHELON FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reduced row echelon form (RREF) is a refinement of REF. In RREF, every leading entry is 1 (called a pivot), and each pivot is the only nonzero entry in its column. This means all entries above and below a pivot are zero. RREF is obtained by continuing the elimination process after reaching REF, using Gauss-Jordan elimination. The advantage of RREF is that it makes the solution immediately readable: each pivot corresponds to a basic variable, and the remaining variables are free. The RREF of a matrix is unique, which makes it a canonical form. This uniqueness is valuable for theoretical purposes, such as determining whether two matrices are row-equivalent. In practice, RREF is used to solve systems completely, find bases for null spaces, and perform many other linear algebra computations.

Example:

  [1  0  3]
  [0  1  2]

is in reduced row echelon form.

The pivot entries are 1, and each pivot is the only nonzero entry in its column.

RREF is especially useful because it can directly reveal the solution of a system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MATRIX FORM OF A SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Representing a system of linear equations as a matrix equation A x = b is a cornerstone of linear algebra. This compact notation not only saves space but also reveals the abstract structure: the coefficient matrix A acts as a linear transformation on the vector x to produce b. This viewpoint allows us to leverage all the machinery of matrix theory—such as inverses, determinants, eigenvalues, and decompositions—to analyze and solve systems. The matrix form also connects to geometry, as A defines a mapping between vector spaces. In computational contexts, storing the matrix A and vector b is much more efficient than writing out all equations. Furthermore, the matrix form is essential for understanding concepts like the column space (the set of all possible b for which the system is consistent) and the null space (the set of solutions to A x = 0). This representation is the bridge between elementary algebra and advanced linear algebra.

Example:

  2x + y = 8
  x - y = 1

can be written as:

  [2  1] [x] = [8]
  [1 -1] [y]   [1]

This matrix representation is one of the major reasons systems of equations are important in Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOMOGENEOUS SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A homogeneous system is a special case where the constant vector b is zero: A x = 0. Such a system always has at least the trivial solution x = 0. The existence of nontrivial solutions (x ≠ 0) depends on whether the columns of A are linearly dependent; this occurs when the rank of A is less than the number of variables. Homogeneous systems are fundamental because their solution space forms a vector subspace—the null space of A—which is central to understanding linear transformations. The null space reveals the degrees of freedom in a system: if A has a nontrivial null space, then any particular solution to a non-homogeneous system can be added to any vector in the null space to produce another solution, giving infinitely many solutions. Homogeneous systems also arise in eigenvalue problems, differential equations, and many other areas of mathematics and engineering.

A homogeneous system is a system where all constants are zero.

It has the form:

  A x = 0

Example:

  x + 2y = 0
  3x + 6y = 0

A homogeneous system always has at least one solution:

  x = 0

This is called the trivial solution.

────────────────────────────────────────────────────────────────────────────────

Nontrivial Solutions

A homogeneous system may also have solutions other than zero.

Example:

  x + y = 0

We can write:

  x = -y

Therefore, solutions include:
  (1, -1), (2, -2), (3, -3)

These are called nontrivial solutions.

A homogeneous system has nontrivial solutions when the coefficient matrix does not have full column rank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RANK AND SYSTEMS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rank of a matrix is a powerful tool for analyzing systems of linear equations. Rank, defined as the maximum number of linearly independent rows or columns, indicates the dimension of the column space. For a system A x = b, the comparison between rank(A) and rank([A | b]) determines consistency: the system has a solution if and only if these ranks are equal. When they are equal, the number of solutions depends on whether rank(A) equals the number of unknowns n. If rank(A) = n, the solution is unique; if rank(A) < n, there are infinitely many solutions, with n - rank(A) free variables. The rank-nullity theorem connects rank with the dimension of the null space: nullity = n - rank(A). This classification is not only theoretical; it is used in numerical algorithms to detect ill-conditioned systems and to choose appropriate solution strategies.

For A x = b, compare:

  rank(A)    with    rank([A | b])

The system is consistent if:

  rank(A) = rank([A | b])

If they are different:

  rank(A) < rank([A | b])

the system has no solution.

────────────────────────────────────────────────────────────────────────────────

Rank Conditions for Solutions

Suppose there are n unknowns.

  • Unique solution:     rank(A) = rank([A | b]) = n

  • Infinitely many:     rank(A) = rank([A | b]) < n

  • No solution:         rank(A) < rank([A | b])

These conditions are extremely useful when analyzing large systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SYSTEMS AND MATRIX INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the coefficient matrix A is square and invertible (non-singular), the system A x = b has the unique solution x = A⁻¹ b. This is the matrix analogue of solving a simple linear equation a x = b by multiplying by a⁻¹. The inverse matrix method is elegant and provides a closed-form solution, but it is rarely used in practice for large systems because computing the inverse is computationally expensive and numerically unstable. Instead, Gaussian elimination or LU decomposition are preferred. However, the inverse method is important conceptually because it demonstrates that solving a system is equivalent to applying the inverse transformation. It also highlights the condition for a unique solution: the matrix must be square and have full rank (determinant nonzero). The inverse also appears in theoretical derivations, such as the matrix form of least squares and in sensitivity analysis (condition numbers).

If A is a square and invertible matrix, then:

  A x = b

can be solved using:

  x = A⁻¹ b

Example:

  A = [2  1]
      [1  1]

If A⁻¹ exists, we can multiply both sides by A⁻¹:

  A⁻¹ A x = A⁻¹ b

Since A⁻¹ A = I, we get:

  x = A⁻¹ b

However, for larger systems, Gaussian Elimination, LU decomposition, or other numerical methods are often more practical than explicitly computing the inverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CRAMER'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cramer's Rule provides an explicit formula for the solution of a system of n linear equations in n unknowns using determinants. For each variable xᵢ, the solution is given by the ratio of the determinant of the matrix obtained by replacing the i-th column of A with b, to the determinant of A. This rule is elegant and useful for small systems (2×2 or 3×3) and for theoretical purposes, but it is computationally inefficient for large n because determinant calculation is O(n!). Moreover, Cramer's Rule is numerically unstable for nearly singular matrices. Nonetheless, it illustrates the deep connection between determinants and solutions of linear systems. It also serves as a tool for deriving properties of matrices, such as the fact that a system has a unique solution iff det(A) ≠ 0. In practice, it is mostly used in teaching to demonstrate the role of determinants.

For A x = b, the solution can be calculated using determinants.

For a two-variable system:

  ax + by = e
  cx + dy = f

the determinant is:

  D = det[a  b]
          [c  d]

If D ≠ 0, then there is a unique solution.

The variables can be calculated using:

  x = D_x / D    and    y = D_y / D

Cramer's Rule is useful for understanding the relationship between determinants and systems, although it is generally inefficient for large systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LU DECOMPOSITION AND SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU decomposition factors a square matrix A into the product of a lower triangular matrix L and an upper triangular matrix U (A = L U). This factorization is widely used in numerical linear algebra because it allows efficient solving of multiple systems with the same coefficient matrix A, but different right-hand side vectors b. The process involves two triangular solves: first solving L y = b (forward substitution) and then U x = y (backward substitution). Triangular systems are very cheap to solve. LU decomposition is the workhorse behind many linear algebra libraries, such as LAPACK. It also provides a way to compute the determinant (det(A) = product of diagonal entries of U) and the inverse if needed. The decomposition can be computed with partial pivoting to improve numerical stability, making it robust for practical computations.

A system:

  A x = b

can also be solved using LU Decomposition.

The matrix is factored as:

  A = L U

where:
  • L is a lower triangular matrix
  • U is an upper triangular matrix

Then:

  L U x = b

Let:

  U x = y

First solve:

  L y = b

then solve:

  U x = y

This method is particularly useful when solving multiple systems with the same coefficient matrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SYSTEMS AND LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Viewing a system A x = b as a linear transformation T(x) = A x gives a powerful conceptual framework. The system asks: for a given output b, what input x produces it under the transformation A? The existence of a solution corresponds to b being in the range (column space) of A. The uniqueness corresponds to the transformation being injective, which is equivalent to A having trivial null space (only the zero vector maps to zero). This perspective unifies systems of equations with geometry and functional analysis. It also makes it clear that the solution set is either empty, a single point, or an affine subspace (a translate of the null space). This viewpoint is essential when studying linear maps in abstract vector spaces, and it is the basis for many applications, such as control theory, signal processing, and machine learning, where we often want to find inputs that yield desired outputs.

A system:

  A x = b

can also be interpreted as asking:

  Which input vector x is transformed by A into b?

In other words:

  x → A → b

This connects systems of equations directly to Linear Transformations.

If b belongs to the column space of A, then the system has at least one solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SYSTEMS AND GEOMETRY IN THREE DIMENSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In three-dimensional space, each linear equation in three variables corresponds to a plane. The solution of a system of three equations is the intersection of three planes. This geometric interpretation is a natural extension of the two-dimensional line case. The intersection can be a single point (if the planes are independent), a line (if they share a common line), a plane (if all three equations describe the same plane), or empty (if the planes do not meet). Visualizing these possibilities helps in understanding the algebraic conditions, such as rank and consistency. It also provides insight into the concept of linear dependence: three planes may be parallel, intersect pairwise, or coincide. This geometric understanding is valuable in fields like computer graphics, where planes represent surfaces, and in physics, where constraints can be interpreted geometrically.

For three variables:

  a₁x + b₁y + c₁z = d₁
  a₂x + b₂y + c₂z = d₂
  a₃x + b₃y + c₃z = d₃

each equation represents a plane.

The solution is the point or set of points shared by all planes.

Possible situations include:
  • One common point → unique solution
  • A common line → infinitely many solutions
  • No common point → no solution

Thus, systems of equations connect algebraic calculations with geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: THREE EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here we work through a three-equation system step by step. This example illustrates the elimination method extended to three variables. The system is constructed so that subtraction of equations directly isolates variables, making it easy to solve. In general, larger systems require systematic elimination (Gaussian elimination), but this example shows the basic idea: by eliminating one variable at a time, we reduce the system to a triangular form. This process is the foundation for solving any system, and it is important to practice it with concrete numbers to build intuition. The solution (1,1,4) is unique because the three equations are independent, meaning the corresponding planes intersect at a single point.

Consider:

  x + y + z = 6
  2x + y + z = 7
  x + 2y + z = 7

Subtract the first equation from the second:

  x = 1

Subtract the first equation from the third:

  y = 1

Substitute into x + y + z = 6:

  1 + 1 + z = 6

Therefore:

  z = 4

Thus:

  (x, y, z) = (1, 1, 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. REAL-WORLD APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Systems of linear equations are ubiquitous in real-world applications. In engineering, they model electrical circuits (Kirchhoff's laws), structural frameworks (force balance), and fluid flow (network equations). In computer science, they are used in computer graphics (transformation matrices), robotics (inverse kinematics), machine learning (linear regression, support vector machines), and optimization (linear programming). In economics, they represent supply and demand, input-output models, and resource allocation. In physics, they describe equilibrium states, quantum mechanics (eigenvalue problems), and general relativity. The ability to set up and solve systems of linear equations is therefore a core skill across disciplines. Moreover, many nonlinear problems are approximated by linear systems, making linear algebra an essential tool for scientific computing. Understanding these applications motivates the study of solution methods and emphasizes the practical importance of linear systems.

Systems of linear equations are used throughout science, engineering, technology, economics, and computing.

Engineering
  • Electrical circuits
  • Structural forces
  • Mechanical systems
  • Fluid networks

Computer Science
  • Computer graphics
  • Robotics
  • Machine Learning
  • Computer Vision
  • Network analysis
  • Optimization

Economics
  • Supply and demand
  • Production
  • Resource allocation
  • Economic relationships

Physics
  • Forces
  • Motion
  • Energy
  • Electrical circuits

Data Science
  • Linear regression
  • Least Squares
  • Data fitting
  • Optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: REAL-WORLD APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This detailed example shows how to translate a word problem into a system of linear equations and solve it. The store problem is a classic mixture or inventory problem. We define variables for the quantities, write equations based on total items and total revenue, and solve by substitution. This demonstrates the process of modeling real situations with linear equations, which is the first step in applying linear algebra to practical problems. The solution is straightforward because the system is 2×2, but the same approach extends to larger problems with more variables and constraints. This example also reinforces the concept of consistency: the system has a unique solution because the two equations are independent, corresponding to a unique combination of sales that meets both conditions.

Suppose a store sells notebooks and pens.

Let:
  x = number of notebooks
  y = number of pens

Suppose the store sells 10 items total:

  x + y = 10

A notebook costs ₱50 and a pen costs ₱20, and the total sales are ₱350:

  50x + 20y = 350

The system is:

  x + y = 10
  50x + 20y = 350

From the first equation:

  y = 10 - x

Substitute:

  50x + 20(10 - x) = 350

Simplify:

  50x + 200 - 20x = 350
  30x = 150

Therefore:

  x = 5

Then:

  y = 10 - 5 = 5

So the store sold 5 notebooks and 5 pens.

This demonstrates how systems of linear equations can model real-world situations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mastering systems of linear equations requires familiarity with several key methods and concepts. Each method has its strengths and appropriate contexts. Substitution and elimination are fundamental for small systems and provide the basis for understanding larger methods. Gaussian elimination and Gauss-Jordan elimination are systematic algorithms that work for any size and are the standard in numerical computation. The matrix inverse and Cramer's Rule offer theoretical insights but are limited in practice. LU decomposition is the preferred method for multiple right-hand sides. Rank and the augmented matrix are essential for analyzing solution structure. Homogeneous systems and null spaces are crucial for understanding the underlying geometry. A solid grasp of all these techniques ensures that you can choose the most efficient and appropriate approach for any given problem, whether in a classroom, research, or industrial setting.

When studying Systems of Linear Equations, make sure you understand:

  • Substitution
  • Elimination
  • Gaussian Elimination
  • Gauss-Jordan Elimination
  • Matrix Inverse
  • Cramer's Rule
  • LU Decomposition
  • Rank
  • Augmented Matrix
  • Homogeneous Systems
  • Consistency
  • Unique and Infinite Solutions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a System of Linear Equations is a group of linear equations that must be satisfied simultaneously.

The most important matrix representation is:

  A x = b

A system can have:

  • One unique solution
  • Infinitely many solutions
  • No solution

Systems can be solved using methods such as:
  • Substitution
  • Elimination
  • Gaussian Elimination
  • Gauss-Jordan Elimination
  • Matrix Inverses
  • Cramer's Rule
  • LU Decomposition

Rank provides an important test for determining the type of solution:

  rank(A) = rank([A | b]) → consistent system
  rank(A) = rank([A | b]) = n → unique solution
  rank(A) = rank([A | b]) < n → infinitely many solutions
  rank(A) < rank([A | b]) → no solution

Key Forms:

  • Row Echelon Form (REF): pivots move right
  • Reduced Row Echelon Form (RREF): pivots are 1 and alone in their columns

Key Concepts:

  • Augmented matrix: [A | b]
  • Homogeneous system: A x = 0 (always has trivial solution)
  • Trivial solution: x = 0
  • Nontrivial solutions: x ≠ 0 (when columns are dependent)

The key idea to remember:

  A system of linear equations represents multiple linear relationships that must hold at the same time. In Linear Algebra, these systems are represented as A x = b, allowing us to use matrices, row reduction, rank, inverses, and factorizations to efficiently find and analyze their solutions.
  `,
  examples: [
    "System: x+y=7, x-y=1 → solution (4,3)",
    "System: x+y=5, 2x+2y=10 → infinitely many solutions",
    "System: x+y=5, x+y=8 → no solution",
    "Substitution: solve x+y=7, x-y=1 → (4,3)",
    "Elimination: solve 2x+y=7, x-y=2 → (3,1)",
    "Gaussian Elimination: augmented matrix [1 1|5; 2 3|12] → (3,2)",
    "REF: [1 2 3; 0 1 4; 0 0 1]",
    "RREF: [1 0 3; 0 1 2]",
    "Matrix form: A x = b",
    "Homogeneous: A x = 0 → trivial solution x = 0",
    "Rank condition: rank(A) = rank([A|b]) → consistent",
    "Cramer's Rule: x = D_x/D, y = D_y/D",
    "LU Decomposition: A = L U, solve L y = b, U x = y",
    "3 equations: x+y+z=6, 2x+y+z=7, x+2y+z=7 → (1,1,4)",
    "Real-world: notebooks and pens → x=5, y=5",
    "Solve by elimination: x+y=3, x-y=1",
    "Identify free variables from a system in RREF.",
  ],
};

export default topic;