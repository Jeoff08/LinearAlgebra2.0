const topic = {
  id: "rank",
  title: "Rank",
  summary:
    "Row rank, column rank, rank-nullity relationship and interpretations.",
  details: `
Rank is one of the most important concepts in Linear Algebra because it tells us how much independent information is contained in a matrix. The rank of a matrix is the maximum number of linearly independent rows or columns in that matrix. In simpler terms, the rank of a matrix tells us how many independent directions or pieces of information the matrix contains. This seemingly simple number has profound implications: it determines whether a system of equations has a solution, whether a matrix is invertible, and how much a linear transformation reduces the dimension of its input space. Rank is also a key concept in data science, where it indicates the true dimensionality of a dataset, and in machine learning, where it underlies matrix factorization techniques. The rank of a matrix A is written as rank(A). Understanding rank is essential for grasping the structure of linear systems, the behaviour of transformations, and the relationships between the fundamental subspaces.

Rank is closely connected to:
  • Linear independence
  • Span
  • Systems of equations
  • Matrix inverses
  • Linear transformations
  • Fundamental subspaces
  • Eigenvalues
  • Least Squares

The rank of a matrix A is written as rank(A).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DEFINITION OF RANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank is the number of linearly independent rows or columns in a matrix. This number measures the "information content" of the matrix: if the rank is high, the matrix captures many independent directions; if it is low, there is redundancy among the rows or columns. For a square matrix, full rank means the matrix is invertible and its determinant is nonzero. For rectangular matrices, the rank is at most the smaller of the number of rows and columns. The rank also determines the dimension of the column space and the row space, and it is a key parameter in the Rank‑Nullity Theorem. In applications, rank helps identify redundant features in datasets, assess the solvability of linear systems, and enable low‑rank approximations for compression and denoising. It is one of the most fundamental invariants of a matrix.

Suppose we have a matrix:

  A = [1  2]
      [3  4]

The two rows:

  [1  2]    and    [3  4]

are linearly independent.

The two columns are also linearly independent.

Therefore:

  rank(A) = 2

The matrix contains two independent directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. RANK AND LINEAR INDEPENDENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank is directly related to linear independence. If the columns of a matrix are linearly independent, then the matrix has full column rank, which equals the number of columns. Similarly, if the rows are independent, the matrix has full row rank. In fact, the column rank and the row rank are always equal, a theorem that is central to the definition of rank. This means we can compute rank by finding the number of independent columns or rows; whichever is easier. For a square matrix, full rank is equivalent to the columns forming a basis for the space, which in turn implies invertibility. In data analysis, the rank of a data matrix tells us how many independent features are present, and a low rank suggests that the data can be compressed or reduced in dimensionality without significant loss of information.

If the columns of a matrix are linearly independent, then the matrix has full column rank.

Example:

  A = [1  0]
      [0  1]

Its columns are:

  a₁ = [1]    a₂ = [0]
       [0]         [1]

Neither column can be written as a multiple of the other.

Therefore, they are linearly independent.

Thus:

  rank(A) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RANK USING ROW REDUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common methods for finding the rank of a matrix is Gaussian Elimination or Row Reduction. The rank is equal to the number of pivot positions in the row-reduced matrix. Row reduction transforms the matrix to row echelon form, where each pivot indicates a linearly independent row. This method is efficient and works for any matrix, regardless of its size or shape. It also provides a way to find a basis for the row space, the column space, and the null space. Because elementary row operations do not change the rank, we can apply them freely without affecting the result. This makes row reduction the standard technique for computing rank in both theoretical and practical settings, and it is the foundation of many numerical algorithms in linear algebra.

One of the most common methods for finding the rank of a matrix is Gaussian Elimination or Row Reduction.

The rank is equal to the number of pivot positions in the row-reduced matrix.

Example:

  A = [1  2  3]
      [2  4  6]
      [1  1  2]

Perform the row operation:

  R₂ → R₂ - 2R₁

This gives:

  [1  2  3]
  [0  0  0]
  [1  1  2]

Next:

  R₃ → R₃ - R₁

Therefore:

  [1  2  3]
  [0  0  0]
  [0 -1 -1]

There are two nonzero rows.

Therefore:

  rank(A) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RANK AND PIVOT POSITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A pivot is the first nonzero entry in a nonzero row after row reduction. Each pivot corresponds to a leading variable, and the number of pivots is exactly the rank of the matrix. Pivot positions are important because they identify the linearly independent rows and columns. In Gaussian elimination, the pivots are used to eliminate entries below them, and the count of pivots directly gives the rank. If a row has no pivot, it is a row of zeros, indicating that the row is a linear combination of other rows. Thus, the rank is the number of rows that contain a pivot. This interpretation is particularly useful when solving systems of equations: the number of pivots tells us how many equations are independent and how many free variables exist in the solution.

A pivot is the first nonzero entry in a nonzero row after row reduction.

Example:

  [1  2  3]
  [0  1  4]
  [0  0  1]

has three pivots at positions (1,1), (2,2), and (3,3).

Therefore:

  rank(A) = 3

The number of pivots is equal to the rank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANK AND NONZERO ROWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After reducing a matrix to row-echelon form, the rank is equal to the number of nonzero rows. This follows from the fact that each nonzero row corresponds to a linearly independent equation, while rows of zeros represent dependencies. The row-echelon form makes it easy to count the nonzero rows, which is often quicker than counting pivots explicitly. This method is particularly useful when we want to find the rank without performing full Gauss‑Jordan elimination, as it only requires forward elimination. In many textbooks, the rank is defined as the number of nonzero rows in the row echelon form of the matrix, which is a practical and intuitive definition. It also reinforces the connection between rank and the row space dimension.

After reducing a matrix to row-echelon form, the rank is equal to the number of nonzero rows.

Example:

  A = [1  2  3]
      [0  1  4]
      [0  0  0]

There are two nonzero rows.

Therefore:

  rank(A) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: RANK OF A 3×3 MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  A = [1  2  3]
      [2  4  6]
      [3  6  9]

Notice that:

  R₂ = 2R₁    and    R₃ = 3R₁

Therefore, all rows depend on the first row.

After row reduction:

  A → [1  2  3]
      [0  0  0]
      [0  0  0]

There is only one pivot.

Therefore:

  rank(A) = 1

The matrix contains only one independent direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RANK OF THE IDENTITY MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the identity matrix:

  Iₙ = [1  0  ...  0]
       [0  1  ...  0]
       [⋮  ⋮  ⋱   ⋮]
       [0  0  ...  1]

Every row and column is linearly independent.

Therefore:

  rank(Iₙ) = n

The identity matrix has full rank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FULL RANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A matrix has full rank when its rank is as large as possible. For an m×n matrix, the rank is at most the smaller of the number of rows and columns. When the rank equals min(m, n), the matrix is said to have full rank. For a square matrix, full rank means the matrix is invertible, which implies that its determinant is nonzero and its columns form a basis. For rectangular matrices, full row rank (rank = m) means the rows are independent, and full column rank (rank = n) means the columns are independent. Full rank matrices are important because they represent transformations that are injective (full column rank) or surjective (full row rank). In data science, a full rank data matrix means all features are independent, which simplifies many analyses.

A matrix has full rank when its rank is as large as possible.

For an m×n matrix:

  rank(A) ≤ min(m, n)

Therefore, the maximum possible rank is:

  min(m, n)

Example: A 3×5 matrix can have a maximum rank of:

  min(3, 5) = 3

Therefore, its full rank is 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROW RANK AND COLUMN RANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two ways to describe rank: row rank, which is the number of linearly independent rows, and column rank, which is the number of linearly independent columns. A fundamental theorem of Linear Algebra states that the row rank and column rank are always equal, so we simply call this common value the rank of the matrix. This theorem is surprising but highly useful: it means we can compute rank by examining either the rows or the columns, whichever is easier. It also implies that the dimension of the row space equals the dimension of the column space, which is a key insight into the structure of matrices. This equality is the basis for many results, such as the fact that the rank is invariant under transposition and that the number of pivots in the row echelon form equals the number of pivot columns.

There are two ways to describe rank:

  • Row Rank: The number of linearly independent rows.
  • Column Rank: The number of linearly independent columns.

A fundamental theorem of Linear Algebra states that:

  Row Rank = Column Rank

Therefore, we simply call this value the rank of the matrix.

────────────────────────────────────────────────────────────────────────────────

Example of Row Rank and Column Rank

Consider:

  A = [1  2  3]
      [2  4  6]

The second row is twice the first:

  R₂ = 2R₁

Therefore, there is only one independent row.

Thus:

  Row Rank = 1

The columns are:

  a₁ = [1]    a₂ = [2]    a₃ = [3]
       [2]         [4]         [6]

Each column is a multiple of [1, 2]ᵀ.

Therefore:

  Column Rank = 1

Hence:

  rank(A) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RANK AND THE NULL SPACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank is closely connected to the null space. For an m×n matrix, the equation A x = 0 defines the null space, which consists of all vectors that are mapped to zero. The Rank-Nullity Theorem states that the rank plus the nullity (the dimension of the null space) equals the number of columns of the matrix. This theorem is fundamental because it reveals a trade‑off: the more independent directions the matrix has in its column space (higher rank), the fewer directions it "crushes" to zero (lower nullity). Conversely, a low rank means the nullity is high, indicating many redundant dimensions. This theorem is essential for understanding the solution set of linear systems, as the nullity gives the number of free variables, and it is also used in many proofs and applications, from differential equations to data analysis.

Rank is closely connected to the null space.

For an m×n matrix:

  A x = 0

the set of all solutions is called the null space.

The Rank-Nullity Theorem states:

  rank(A) + nullity(A) = n

where n is the number of columns of A.

This is one of the most important theorems in Linear Algebra.

────────────────────────────────────────────────────────────────────────────────

Example of Rank-Nullity

Suppose A has 5 columns and:

  rank(A) = 3

Using the Rank-Nullity Theorem:

  3 + nullity(A) = 5

Therefore:

  nullity(A) = 2

So the matrix has three independent directions in its column space and two dimensions in its null space.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RANK AND SYSTEMS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank can be used to determine whether a system of equations has a solution. Consider A x = b. A system is consistent if the rank of the coefficient matrix A equals the rank of the augmented matrix [A | b]. If these ranks are equal, the system has at least one solution; if they are not equal, the system is inconsistent and has no solution. Moreover, if the rank equals the number of unknowns, the solution is unique; if the rank is less than the number of unknowns, there are infinitely many solutions (assuming consistency). This criterion is one of the most practical uses of rank, as it provides a clear, algebraic test for the solvability of linear systems. It is used in engineering, economics, and science to check whether a model's equations are consistent and to determine the degrees of freedom.

Rank can be used to determine whether a system of equations has a solution.

Consider:

  A x = b

A system is consistent if:

  rank(A) = rank([A | b])

Here, [A | b] is the augmented matrix.

────────────────────────────────────────────────────────────────────────────────

Unique Solution

For a system with n unknowns, a unique solution occurs when:

  rank(A) = n

and the system is consistent.

Example: If A is a 3×3 matrix and rank(A) = 3, then the columns are linearly independent.

If the system is consistent, it has a unique solution.

────────────────────────────────────────────────────────────────────────────────

Infinitely Many Solutions

A system can have infinitely many solutions when:

  rank(A) < n

while:

  rank(A) = rank([A | b])

The system is consistent, but there are free variables.

Example: If there are 3 unknowns and rank(A) = 2, then there is at least one free variable.

Therefore, the system has infinitely many solutions if it is consistent.

────────────────────────────────────────────────────────────────────────────────

No Solution

A system has no solution when:

  rank(A) < rank([A | b])

Example:

  x + y = 2
  2x + 2y = 5

has the augmented matrix:

  [1  1 | 2]
  [2  2 | 5]

Row reduction gives:

  [1  1 | 2]
  [0  0 | 1]

The second row represents 0 = 1, which is impossible.

Therefore:

  No solution

because the coefficient matrix and augmented matrix have different ranks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RANK AND MATRIX INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a square matrix A ∈ ℝ^(n×n), the matrix is invertible if and only if it has full rank, i.e., rank(A) = n. This means that the columns are linearly independent, the rows are linearly independent, and the determinant is nonzero. Conversely, if the rank is less than n, the matrix is singular and does not have an inverse. This connection is fundamental because it provides a way to test invertibility using row reduction: if the reduced row echelon form of A is the identity matrix, then the rank is n and the inverse exists. In practice, computing the rank is often more efficient than computing the determinant for large matrices, especially in numerical linear algebra where rank tests are used to detect ill‑conditioned systems.

For a square matrix A ∈ ℝ^(n×n):

  A is invertible if and only if:

  rank(A) = n

Therefore:

  A⁻¹ exists  ⟺  rank(A) = n

For a 3×3 matrix, full rank means rank(A) = 3.

If the rank is less than 3, the matrix is singular and does not have an inverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RANK AND DETERMINANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a square matrix A ∈ ℝ^(n×n), the determinant is nonzero if and only if the matrix has full rank. This follows directly from the fact that the determinant is a product of the pivots, and a zero determinant indicates that at least one pivot is missing, reducing the rank. This relationship is useful for quickly checking invertibility for small matrices, but for large matrices, rank via row reduction is preferred due to numerical stability. The determinant also appears in the characteristic equation for eigenvalues, where the rank helps determine the multiplicity of the eigenvalue zero. In geometric terms, the determinant measures the volume scaling factor of the transformation; a zero determinant means the transformation collapses space, and the rank gives the dimension of the image.

For a square matrix A ∈ ℝ^(n×n):

  det(A) ≠ 0  ⟺  rank(A) = n

Therefore, if det(A) = 0, the matrix does not have full rank.

Example:

  A = [1  2]
      [2  4]

Its determinant is:

  det(A) = (1)(4) - (2)(2) = 4 - 4 = 0

Therefore:

  rank(A) < 2

In fact:

  rank(A) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. RANK AND LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A matrix can represent a linear transformation T: ℝⁿ → ℝᵐ. The rank of A tells us the dimension of the range or image of the transformation, i.e., the number of independent output directions that the transformation can produce. This is a key geometric interpretation: the rank is the dimension of the subspace that the transformation maps onto. If the rank is small, the transformation collapses many directions; if the rank is large, it preserves many directions. The rank‑nullity theorem then tells us that the dimension of the kernel (the directions collapsed) plus the rank equals the dimension of the domain. Understanding rank as the dimension of the image helps in visualising transformations and in applications like robotics, where the rank of the Jacobian matrix determines the degrees of freedom of a manipulator.

A matrix can represent a linear transformation:

  T: ℝⁿ → ℝᵐ

The rank of A tells us the dimension of the range or image of the transformation.

Therefore:

  dim(Range(T)) = rank(A)

This tells us how many independent output directions the transformation can produce.

────────────────────────────────────────────────────────────────────────────────

Example of Rank as a Transformation

Consider:

  A = [1  0]
      [0  0]

For:

  x = [x]
      [y]

we get:

  A x = [x]
        [0]

Notice that every output lies along the x-axis.

Therefore, the range has only one independent direction.

Thus:

  rank(A) = 1

The transformation reduces the two-dimensional input into a one-dimensional output space.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RANK AND FUNDAMENTAL SUBSPACES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank is connected to the four fundamental subspaces. The rank gives the dimension of the column space and the row space. It also determines the dimension of the null space via the Rank‑Nullity Theorem. For a matrix with n columns, the dimension of the null space is n - rank(A), and the dimension of the left null space is m - rank(A). These relationships form a complete description of the matrix's action: the column space and the left null space are orthogonal complements in the codomain, and the row space and the null space are orthogonal complements in the domain. This orthogonal decomposition is a cornerstone of linear algebra and is used in many applications, including least‑squares problems and the SVD.

Rank is connected to the four fundamental subspaces:

  • Column Space
  • Null Space
  • Row Space
  • Left Null Space

The rank gives the dimension of the column space:

  dim(Col(A)) = rank(A)

It also gives the dimension of the row space:

  dim(Row(A)) = rank(A)

If A has n columns:

  dim(Null(A)) = n - rank(A)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RANK OF A PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For matrices A and B where the product AB is defined, the rank of the product is at most the minimum of the ranks of the individual matrices. This means that multiplying matrices cannot create new independent directions; the rank of the product is limited by the rank of each factor. This property is important in numerical linear algebra, where it is used to bound the rank of products and to analyse the stability of algorithms. It also has implications in control theory and signal processing, where the rank of a product determines the number of independent signals that can be transmitted through a cascade of systems. Equality can occur if the matrices have certain properties, but in general the rank of a product is often smaller than the minimum of the ranks.

For matrices A and B where the product AB is defined:

  rank(AB) ≤ min(rank(A), rank(B))

This means multiplying matrices cannot produce more independent directions than the matrices already contain.

Example: If rank(A) = 2 and rank(B) = 3, then:

  rank(AB) ≤ 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. RANK AND TRANSPOSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rank of a matrix is unchanged when it is transposed. This follows from the equality of row rank and column rank: transposing swaps rows and columns, so the row rank of A becomes the column rank of Aᵀ, and vice versa. Since the two are equal, the rank remains the same. This property is extremely useful because it allows us to work with either the rows or the columns, whichever is more convenient. It also explains why the singular values of a matrix and its transpose are the same, and why the SVD can be applied to either. In many algorithms, transposing a matrix is used to transform a problem into a more convenient form without changing the rank.

The rank of a matrix is unchanged when it is transposed:

  rank(Aᵀ) = rank(A)

This makes sense because the row rank and column rank are equal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. RANK AND ELEMENTARY ROW OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Elementary row operations do not change the rank of a matrix. The three basic row operations are swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another row. Each of these operations corresponds to multiplying the matrix on the left by an elementary matrix, which is invertible. Since multiplying by an invertible matrix does not change the rank, the rank is preserved under row operations. This is why row reduction is such a useful method for finding rank: we can simplify the matrix as much as we like without changing its rank, making it easy to count the independent rows or columns. This invariance is the foundation of Gaussian elimination and many other numerical algorithms.

Elementary row operations do not change the rank of a matrix.

The three basic row operations are:
  1. Swapping two rows
  2. Multiplying a row by a nonzero scalar
  3. Adding a multiple of one row to another row

Therefore:

  rank(A) = rank(RREF(A))

This is why row reduction is such a useful method for finding rank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: FINDING RANK USING RREF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  A = [1  2  3]
      [2  4  6]
      [1  3  4]

Perform:

  R₂ → R₂ - 2R₁
  R₃ → R₃ - R₁

We get:

  [1  2  3]
  [0  0  0]
  [0  1  1]

Swap the second and third rows:

  [1  2  3]
  [0  1  1]
  [0  0  0]

There are two pivot positions.

Therefore:

  rank(A) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. RANK AND DATA SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank is important in Data Science because datasets are often represented as matrices. Suppose a dataset contains 100 features, but many of those features are dependent on one another. The matrix might have 100 columns but a rank of only 60. This means that although there are 100 recorded features, only 60 independent directions of information exist. The rank tells us the true dimensionality of the data, which can be much lower than the number of measured variables. This insight is used in principal component analysis (PCA) and other dimensionality reduction techniques to reduce the number of features while preserving most of the variation. Low rank also indicates redundancy, which can be exploited for compression, noise reduction, and speed in machine learning algorithms. Understanding the rank of a data matrix is therefore essential for efficient and effective data analysis.

Rank is important in Data Science because datasets are often represented as matrices.

Suppose a dataset contains 100 features, but many of those features are dependent on one another.

The matrix might have 100 columns but a rank of only 60.

This means that although there are 100 recorded features, only 60 independent directions of information exist.

Therefore, rank can help identify:
  • Redundant information
  • Dependent variables
  • Low-dimensional structure
  • Feature relationships

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. RANK AND MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rank appears in Machine Learning through linear regression, dimensionality reduction, matrix factorization, neural networks, recommendation systems, and Principal Component Analysis. In linear regression, the rank of the design matrix determines whether the normal equations have a unique solution. In recommendation systems, low-rank matrix factorization is used to predict user preferences by finding a low-rank approximation of the user‑item matrix. In neural networks, the rank of weight matrices can indicate the effective capacity of the network. Understanding rank helps in diagnosing issues like multicollinearity, overfitting, and underfitting. Moreover, many optimisation problems in machine learning involve rank constraints, and low‑rank regularisation is a common technique for improving generalisation.

Rank appears in Machine Learning through:
  • Linear regression
  • Dimensionality reduction
  • Matrix factorization
  • Neural networks
  • Recommendation systems
  • Principal Component Analysis
  • Low-rank approximation

For example, recommendation systems often use low-rank matrix factorization to represent a large user-item matrix using a smaller number of latent factors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. RANK AND IMAGE COMPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Images can be represented as matrices of pixel values. A large image matrix may contain redundant information. Instead of storing every value exactly, a low-rank approximation can be used. If A ≈ Aₖ, where Aₖ has a much smaller rank, the image can sometimes be represented using less storage while maintaining much of its visual information. This idea is closely connected to Singular Value Decomposition (SVD). By keeping only the largest singular values, we obtain a low-rank approximation that preserves the most important features of the image. This technique is used in image compression, denoising, and feature extraction. It demonstrates how the concept of rank directly applies to practical problems, reducing storage and transmission costs while preserving visual quality.

Images can be represented as matrices of pixel values.

A large image matrix may contain redundant information.

Instead of storing every value exactly, a low-rank approximation can be used.

If:

  A ≈ Aₖ

where Aₖ has a much smaller rank, the image can sometimes be represented using less storage while maintaining much of its visual information.

This idea is closely connected to Singular Value Decomposition (SVD).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. RANK AND SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Singular Value Decomposition of a matrix is A = U Σ Vᵀ. The rank of A is equal to the number of nonzero singular values in Σ. This is a powerful characterisation of rank because the singular values are ordered and nonnegative, and they give a precise measure of how much each direction contributes to the matrix. The rank is the number of directions that have a nonzero contribution. This viewpoint is used in many algorithms: by truncating the small singular values, we obtain a low‑rank approximation that is optimal in the least‑squares sense. The SVD thus provides both the rank and a way to reduce the rank while minimising the loss of information. It is one of the most important tools in numerical linear algebra.

The Singular Value Decomposition of a matrix is:

  A = U Σ Vᵀ

The rank of A is equal to the number of nonzero singular values in Σ.

Example: If:

  Σ = [5  0  0]
      [0  2  0]
      [0  0  0]

there are two nonzero singular values: 5 and 2.

Therefore:

  rank(A) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. RANK AND LOW-RANK APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A matrix is called low rank when its rank is significantly smaller than its dimensions. For example, a 1000×1000 matrix could theoretically have rank 1000, but if its rank is only 20, then it has a strong low-dimensional structure. Low-rank matrices arise in many applications because real-world data often has hidden structure or dependencies. Low-rank approximation is used to reduce storage, speed up computations, and remove noise. The Eckart‑Young theorem states that the best rank‑k approximation in the Frobenius norm is given by the SVD, keeping the first k singular values. This theorem is the foundation of many algorithms in signal processing, image compression, and recommendation systems. Understanding low rank helps in recognising that many high‑dimensional datasets can be represented efficiently with much fewer parameters.

A matrix is called low rank when its rank is significantly smaller than its dimensions.

Example: A 1000×1000 matrix could theoretically have rank 1000.

But if its rank is only 20, then it has a strong low-dimensional structure.

This is useful in:
  • Data compression
  • Image processing
  • Recommendation systems
  • Machine Learning
  • Noise reduction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT RANK CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Rank, make sure you understand:

  • rank(A)
  • Row Rank
  • Column Rank
  • Pivot Positions
  • Full Rank
  • Rank-Nullity Theorem
  • Column Space
  • Null Space
  • Matrix Invertibility
  • Linear Systems
  • Low-Rank Approximation
  • Singular Value Decomposition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  A = [1  2  3]
      [2  4  6]
      [3  6  9]

Since:

  R₂ = 2R₁    and    R₃ = 3R₁

there is only one independent row.

Therefore:

  rank(A) = 1

Since A has 3 columns, the Rank-Nullity Theorem gives:

  1 + nullity(A) = 3

Therefore:

  nullity(A) = 2

This tells us that the matrix has:
  • 1 independent direction in its column space
  • 1 independent row direction
  • 2 dimensions in its null space

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Rank measures the number of independent rows or columns in a matrix.

The most important formula is:

  rank(A) = number of linearly independent columns
          = number of linearly independent rows

When a matrix is row-reduced:

  rank(A) = number of pivots

Rank is also connected to the Rank-Nullity Theorem:

  rank(A) + nullity(A) = n

For a square matrix:

  rank(A) = n  ⟺  A is invertible

Rank also determines the dimension of the column space and plays a major role in systems of equations, linear transformations, matrix factorization, SVD, data compression, and Machine Learning.

Key Facts:

  • rank(A) ≤ min(m, n)
  • rank(A) = rank(Aᵀ)
  • rank(AB) ≤ min(rank(A), rank(B))
  • rank(A) = n  ⟺  columns are linearly independent
  • rank(A) = n  ⟺  det(A) ≠ 0  ⟺  A is invertible

The key idea to remember:

  Rank tells us how many independent directions or pieces of information a matrix contains. It is one of the fundamental measurements of a matrix and connects Linear Algebra concepts such as independence, span, null spaces, transformations, and matrix invertibility.
  `,
  examples: [
    "Rank: number of linearly independent rows/columns",
    "Example: A = [[1,2],[3,4]] → rank = 2",
    "Example: A = [[1,2,3],[2,4,6],[3,6,9]] → rank = 1",
    "Row reduction: rank = number of pivots",
    "Full rank: rank(A) = min(m,n)",
    "Row rank = Column rank",
    "Rank-Nullity: rank(A) + nullity(A) = n",
    "Identity matrix: rank(Iₙ) = n",
    "Invertible: rank(A) = n  ⟺  A⁻¹ exists",
    "Determinant: det(A) ≠ 0  ⟺  rank(A) = n",
    "Consistent system: rank(A) = rank([A|b])",
    "Unique solution: rank(A) = n and consistent",
    "Infinitely many solutions: rank(A) < n and consistent",
    "No solution: rank(A) < rank([A|b])",
    "Rank of product: rank(AB) ≤ min(rank(A), rank(B))",
    "Transpose: rank(Aᵀ) = rank(A)",
    "SVD: rank = number of nonzero singular values",
    "Find rank by row reduction",
    "Use rank to determine if a system has infinitely many solutions.",
  ],
};

export default topic;