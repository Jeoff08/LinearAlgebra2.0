const topic = {
  id: "matrices",
  title: "Matrices",
  summary:
    "Matrix notation, types, arithmetic, transpose and trace, and special properties.",
  details: `
A Matrix is a rectangular arrangement of numbers, symbols, or expressions organized into rows and columns. Matrices are one of the most important objects in Linear Algebra because they provide an efficient way to organize and manipulate mathematical information.

A matrix is usually represented by a capital letter such as A, B, or C and its entries are written inside brackets.

Example:

  A = [1  2  3]
      [4  5  6]

This matrix has 2 rows and 3 columns, so it is called a 2×3 matrix.

Matrices are used to represent systems of equations, linear transformations, data, relationships between variables, and many other mathematical structures.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ELEMENTS OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The individual numbers inside a matrix are called entries or elements. Each entry is identified by its position using two subscripts: the first denotes the row, the second the column. This systematic indexing is essential because it allows us to reference specific pieces of data and perform operations that depend on position, such as matrix addition and multiplication. The notation aᵢⱼ is standard in mathematics and provides a clear way to describe algorithms and proofs. For example, when we talk about the diagonal of a square matrix, we refer to entries where the row and column indices are equal. Understanding how to locate and interpret entries is the first step in working with any matrix, whether it represents a dataset, a system of equations, or a linear transformation.

Consider:

  A = [2  5  7]
      [1  4  9]

The entry in the first row and first column is:

  a₁₁ = 2

The entry in the first row and second column is:

  a₁₂ = 5

The entry in the second row and third column is:

  a₂₃ = 9

In general, aᵢⱼ represents the entry located in the i-th row and j-th column.

The first subscript identifies the row, while the second identifies the column.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ORDER OR DIMENSION OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The order or dimension of a matrix describes the number of rows and columns it contains, typically written as m × n (read "m by n"). The order determines the size of the matrix and is crucial for defining whether operations like addition or multiplication are possible. For addition, two matrices must have the same order; for multiplication, the number of columns of the first must match the number of rows of the second. The order also affects the shape of the output: for example, the product of an m×n matrix and an n×p matrix is m×p. In applications, the order often reflects the structure of the data rows may correspond to observations, columns to variables. Knowing the order is therefore the first thing to check before performing any matrix operation, and it is a fundamental aspect of matrix notation.

If a matrix has m rows and n columns, its order is m × n.

Example:

  A = [1  2]
      [3  4]
      [5  6]

has 3 rows and 2 columns.

Therefore, A is a 3×2 matrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ROW MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A row matrix is a matrix that consists of a single row. It is also called a row vector because it can be used to represent a vector in row form. Row matrices are often used to store a list of values, such as the coefficients of a linear equation or the features of a single data point. In linear algebra, row matrices are sometimes used in inner products and in the construction of linear combinations when we multiply a row matrix by a column matrix. Although they are less common than column vectors in some contexts, they play an important role in matrix multiplication, where the product of a row matrix and a column matrix yields a scalar (the dot product). Row matrices are also used to represent the rows of a larger matrix, and their linear independence determines the row rank.

Example:

  A = [2  4  6  8]

It has dimension 1×4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COLUMN MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A column matrix has only one column. In linear algebra, column matrices are the standard representation for vectors, as they align naturally with the convention of writing a linear system as A x = b, where x and b are column vectors. Column matrices are used extensively in physics and engineering to represent quantities like position, velocity, and force. They are also the building blocks of matrices: a matrix can be viewed as a collection of column vectors placed side by side. Operations like matrix-vector multiplication are defined in terms of columns, and the column space of a matrix is the set of all linear combinations of its column vectors. Understanding column matrices is therefore essential for grasping many core concepts of linear algebra.

Example:

  B = [2]
      [4]
      [6]
      [8]

It has dimension 4×1.

Column matrices are particularly important because vectors are commonly represented as column matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SQUARE MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A square matrix has the same number of rows and columns, i.e., m = n. Square matrices are especially important because they are the only type for which concepts like determinant, trace, eigenvalues, and inverses are defined. Many fundamental results in linear algebra, such as the invertible matrix theorem, apply only to square matrices. They represent linear transformations from a vector space to itself, which allows the study of properties like rotation, scaling, and eigen-decomposition. Square matrices also arise naturally in systems of linear equations where the number of equations equals the number of unknowns. Their algebraic structure is rich and includes special classes like symmetric, skew-symmetric, orthogonal, and diagonal matrices.

Example:

  A = [1  2]
      [3  4]

It has two rows and two columns, so it is a 2×2 square matrix.

Square matrices are especially important because concepts such as determinants, eigenvalues, eigenvectors, inverses, and diagonalization are primarily associated with square matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ZERO MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A zero matrix is a matrix in which every entry is zero. It is the additive identity for matrix addition: adding it to any compatible matrix leaves that matrix unchanged. The zero matrix is denoted by O or 0, and it can have any dimensions. In linear algebra, the zero matrix is used to represent the zero transformation, which maps every vector to the zero vector. It also plays a central role in homogeneous systems of equations (A x = 0) and in defining the null space of a matrix. In numerical computations, the zero matrix is often used as an initialisation for accumulating sums or products. Despite its simplicity, it is a fundamental object that appears in many theoretical results, such as the fact that a matrix is invertible iff its null space contains only the zero vector.

Example:

  0 = [0  0]
      [0  0]

The zero matrix acts similarly to the number 0.

For compatible matrices:

  A + 0 = A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IDENTITY MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The identity matrix is the multiplicative identity for matrix multiplication. It is a square matrix with ones on the main diagonal and zeros elsewhere. Multiplying any compatible matrix by the identity matrix on the left or right leaves the matrix unchanged. The identity matrix is denoted by I, and its size is often indicated by a subscript (e.g., I₃ for a 3×3 identity matrix). It plays a central role in defining matrix inverses, as a matrix A has inverse A⁻¹ iff A A⁻¹ = I. The identity matrix also appears in the definition of linear independence, in the construction of elementary matrices, and in many proofs involving matrix equations. Its simple structure makes it a powerful tool for both theoretical and computational work.

A 2×2 identity matrix is:

  I₂ = [1  0]
       [0  1]

A 3×3 identity matrix is:

  I₃ = [1  0  0]
       [0  1  0]
       [0  0  1]

When a matrix is multiplied by the appropriate identity matrix, it remains unchanged:

  A I = I A = A

The identity matrix is especially important when studying matrix inverses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DIAGONAL MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A diagonal matrix is a square matrix in which all entries outside the main diagonal are zero. The diagonal entries can be any scalars. Diagonal matrices are among the simplest to work with because their multiplication and powers are performed element-wise on the diagonal. They are also easy to invert (if all diagonal entries are nonzero) and their determinant is simply the product of the diagonal entries. In linear algebra, diagonal matrices are important because they represent scaling transformations along the coordinate axes. Many matrices can be diagonalised (expressed as P D P⁻¹) if they have a complete set of eigenvectors, which simplifies many computations. Diagonal matrices are also used in statistics, where covariance matrices are often diagonalised through principal component analysis.

Example:

  A = [2  0  0]
      [0  5  0]
      [0  0  7]

The entries 2, 5, 7 form the main diagonal.

An identity matrix is a special type of diagonal matrix where every diagonal entry is 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SCALAR MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A scalar matrix is a diagonal matrix in which all the diagonal entries are equal to the same scalar. It can be written as c I, where c is the scalar and I is the identity matrix. Multiplying any matrix by a scalar matrix is equivalent to multiplying the matrix by the scalar c, which commutes with any matrix. Scalar matrices appear frequently in eigenvalue problems, where a scalar matrix represents uniform scaling. They are also used in defining the centre of the matrix algebra, as they commute with all matrices of the same size. In physics, scalar matrices represent isotropic scaling, which does not depend on direction. Their simplicity makes them useful for constructing examples and counterexamples in proofs.

Example:

  A = [4  0  0]
      [0  4  0]
      [0  0  4]

This can be written as:

  A = 4I

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. UPPER TRIANGULAR MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An upper triangular matrix is a square matrix where all entries below the main diagonal are zero. This structure arises naturally in Gaussian elimination, where the coefficient matrix is transformed into row echelon form. Upper triangular matrices are easy to solve by back-substitution, and their determinant is the product of the diagonal entries. They are also closed under multiplication and inversion (if the diagonal is nonzero). In numerical linear algebra, many algorithms rely on triangular forms for efficiency and stability. The LU decomposition factors a matrix into lower and upper triangular parts. Upper triangular matrices also appear in eigenvalue algorithms, such as the Schur decomposition, which reduces any matrix to an upper triangular form while preserving eigenvalues.

Example:

  A = [2  3  4]
      [0  5  6]
      [0  0  7]

Upper triangular matrices are important in Gaussian Elimination, LU Decomposition, and solving systems of equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LOWER TRIANGULAR MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A lower triangular matrix is a square matrix where all entries above the main diagonal are zero. Like upper triangular matrices, they are easy to solve (by forward substitution) and their determinant is the product of the diagonal entries. Lower triangular matrices are often used in LU decomposition, where they represent the lower part of the factorisation. They also appear in the Cholesky decomposition for symmetric positive definite matrices. Many iterative methods in numerical analysis use triangular matrices to improve convergence. The set of lower triangular matrices with nonzero diagonal forms a group under multiplication. They are also used in signal processing and control theory to represent causal systems.

Example:

  A = [2  0  0]
      [3  5  0]
      [4  6  7]

Lower triangular matrices are also important in LU Decomposition and forward substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. MATRIX EQUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two matrices are equal if they have the same dimensions and every corresponding entry is identical. This definition is straightforward but essential because it allows us to compare matrices and to set up equations involving matrices. Matrix equality is used in solving matrix equations, such as A X = B, where we compare entries to determine X. It also underpins the concept of matrix addition and scalar multiplication, as these operations are defined entry-wise. In proofs, we often show that two matrices are equal by showing that their entries match. Equality of matrices is also the basis for defining the zero matrix and the identity matrix, which are unique given their dimensions. Understanding this definition is fundamental to manipulating matrices algebraically.

Example:

  A = [1  2]    B = [1  2]
      [3  4]        [3  4]

are equal.

Therefore:

  A = B

However:

  [1  2]    and    [1  2  3]
  [3  4]           [4  5  6]

cannot be equal because they have different dimensions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MATRIX ADDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix addition is performed element-wise, adding corresponding entries of two matrices of the same dimensions. This operation is commutative and associative, making it similar to scalar addition but extended to arrays. Matrix addition is used to combine data sets, add linear transformations, or accumulate updates in iterative algorithms. It is also the basis for defining the zero matrix as the additive identity. In applications like image processing, adding matrices can represent combining images or applying filters. In statistics, adding covariance matrices may model the combination of independent sources of variance. Matrix addition is a simple yet powerful tool that allows us to merge information from multiple sources.

Suppose:

  A = [1  2]    B = [5  6]
      [3  4]        [7  8]

Add corresponding entries:

  A + B = [1+5  2+6] = [6   8]
          [3+7  4+8]   [10 12]

Therefore:

  A + B = [6   8]
          [10 12]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MATRIX SUBTRACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix subtraction is the element-wise difference of two matrices of the same dimensions. It follows the same rules as addition and is used to compute residuals, differences, or deviations. For example, in linear regression, subtracting predicted values from actual values yields the residual vector. In image processing, subtracting two images can highlight differences. Matrix subtraction is also used in defining the linear combination operation, where we may subtract a multiple of one vector from another during Gaussian elimination. As with addition, commutativity does not hold for subtraction, but it is anticommutative (A - B = -(B - A)). It is a fundamental operation that allows us to quantify changes and errors.

Using the same matrices:

  A - B = [1-5  2-6] = [-4  -4]
          [3-7  4-8]   [-4  -4]

Therefore:

  A - B = [-4  -4]
          [-4  -4]

Again, the matrices must have the same dimensions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SCALAR MULTIPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scalar multiplication involves multiplying every entry of a matrix by a single scalar. This operation scales the matrix, which corresponds to scaling a linear transformation or scaling all features in a dataset. It is distributive over matrix addition and associative with matrix multiplication. Scalar multiplication is used in normalising matrices, adjusting weights in neural networks, and in many optimisation algorithms. It also plays a role in computing the inverse of a scalar multiple of a matrix. In geometry, scalar multiplication uniformly scales objects represented by matrices. It is one of the two operations that define a vector space of matrices, together with matrix addition.

Example:

  A = [1  2]
      [3  4]

Multiplying by 3:

  3A = 3[1  2] = [3   6]
       [3  4]   [9  12]

Therefore:

  3A = [3   6]
       [9  12]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MATRIX MULTIPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix multiplication is a binary operation that combines two matrices to produce a third matrix. It is defined only when the number of columns of the first matrix equals the number of rows of the second. The entry in the i-th row and j-th column of the product is the dot product of the i-th row of the first matrix and the j-th column of the second. This operation represents the composition of linear transformations, making it central to linear algebra. Matrix multiplication is associative but not commutative. It is used extensively in computer graphics (composing rotations, scaling), in machine learning (forward propagation in neural networks), and in solving systems of equations. Efficient algorithms for matrix multiplication are a major topic in numerical computing.

Two matrices A and B can be multiplied when the number of columns of A equals the number of rows of B.

If A is m×n and B is n×p, then AB will have dimension m×p.

Example:

  A = [1  2]    B = [5  6]
      [3  4]        [7  8]

Calculate the first entry:

  (1)(5) + (2)(7) = 19

The second entry is:

  (1)(6) + (2)(8) = 22

The third entry is:

  (3)(5) + (4)(7) = 43

The fourth entry is:

  (3)(6) + (4)(8) = 50

Therefore:

  AB = [19 22]
       [43 50]

Matrix multiplication follows the row-by-column rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. MATRIX MULTIPLICATION IS NOT COMMUTATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Unlike scalar multiplication, matrix multiplication is not commutative: in general, AB ≠ BA. This is a fundamental difference that must be respected when manipulating matrix expressions. Even when both products are defined (which requires A and B to be square of the same size), the order matters. For example, rotations in 3D do not commute: rotating an object around the x-axis and then around the y-axis yields a different result than the reverse order. This non-commutativity reflects the composition of linear transformations, where the order of application affects the final outcome. In algorithms, care must be taken to maintain the correct order when multiplying matrices, especially when inverses are involved. This property also affects the solving of matrix equations and the derivation of many theoretical results.

For ordinary numbers:

  ab = ba

However, for matrices, this is generally not true.

In general:

  AB ≠ BA

This is one of the most important differences between ordinary arithmetic and matrix arithmetic.

Sometimes AB exists while BA does not even exist because of incompatible dimensions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. TRANSPOSE OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The transpose of a matrix is obtained by flipping it over its main diagonal: rows become columns and columns become rows. This operation is denoted by Aᵀ. The transpose changes the dimensions of the matrix; for example, an m×n matrix becomes n×m. The transpose has several important properties: (Aᵀ)ᵀ = A, (A + B)ᵀ = Aᵀ + Bᵀ, (cA)ᵀ = cAᵀ, and (AB)ᵀ = Bᵀ Aᵀ. The transpose is used to define symmetric matrices (Aᵀ = A) and in many applications, such as solving least-squares problems (normal equations) and computing covariance matrices. In geometry, the transpose corresponds to the adjoint of a linear transformation with respect to the standard inner product. It is also the basis for the concept of orthogonal matrices.

The transpose of a matrix is obtained by changing its rows into columns and its columns into rows.

The transpose of A is written as Aᵀ.

Example:

  A = [1  2  3]
      [4  5  6]

Then:

  Aᵀ = [1  4]
       [2  5]
       [3  6]

A 2×3 matrix becomes a 3×2 matrix after transposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SYMMETRIC MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A square matrix A is symmetric if it is equal to its own transpose: Aᵀ = A. This condition implies that the entries are symmetric about the main diagonal (aᵢⱼ = aⱼᵢ). Symmetric matrices have many desirable properties: all their eigenvalues are real, eigenvectors corresponding to distinct eigenvalues are orthogonal, and they are always diagonalisable by an orthogonal matrix. These properties make symmetric matrices central in applications like principal component analysis, quadratic forms, and optimisation. Covariance matrices in statistics are symmetric, as are Hessian matrices in calculus. The spectral theorem for symmetric matrices is one of the most important results in linear algebra, providing a foundation for many numerical methods.

A square matrix is symmetric if:

  Aᵀ = A

Example:

  A = [1  2  3]
      [2  4  5]
      [3  5  6]

Taking the transpose gives the same matrix.

Therefore:

  A is symmetric.

Symmetric matrices appear frequently in optimization, statistics, geometry, and many areas of applied Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. DETERMINANT OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The determinant is a scalar value that can be computed from a square matrix. It provides important information about the matrix: it is zero if and only if the matrix is singular (non‑invertible); its absolute value gives the scaling factor of the linear transformation on area or volume; its sign indicates whether the orientation is preserved or reversed. The determinant is used in Cramer's rule for solving systems of linear equations, in computing eigenvalues via the characteristic polynomial, and in checking linear independence. For 2×2 matrices, it is simple: ad - bc. For larger matrices, it can be computed by expansion (cofactor expansion) or by row reduction. The determinant is a fundamental invariant of a matrix and is essential in many theoretical proofs.

The determinant is a scalar value associated with a square matrix.

For a 2×2 matrix:

  A = [a  b]
      [c  d]

the determinant is:

  det(A) = ad - bc

Example:

  A = [2  3]
      [1  4]

Then:

  det(A) = (2)(4) - (3)(1) = 8 - 3 = 5

Therefore:

  det(A) = 5

The determinant is important for determining whether a square matrix has an inverse.

If det(A) ≠ 0, then A is invertible.

If det(A) = 0, then A is singular and does not have an inverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. MATRIX INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse of a square matrix A, denoted A⁻¹, is the matrix such that A A⁻¹ = A⁻¹ A = I. It exists only if det(A) ≠ 0. The inverse is the matrix analogue of the reciprocal of a number and is used to solve systems of linear equations (x = A⁻¹ b). It also appears in many algebraic simplifications and in theoretical work. However, computing the inverse explicitly for large matrices is often avoided in numerical practice due to stability and efficiency concerns; instead, factorisations like LU or QR are preferred. The concept of the inverse is central to the definition of invertibility and to many properties of matrices, including the characterisation of invertible matrices through rank, null space, and determinant.

The inverse of a square matrix A is written as A⁻¹.

It satisfies:

  A A⁻¹ = A⁻¹ A = I

Example:

  A = [2  1]
      [3  2]

Its inverse is:

  A⁻¹ = [2  -1]
        [-3  2]

Multiplying them gives:

  [2  1] [2  -1] = [1  0] = I
  [3  2] [-3  2]   [0  1]

Matrix inverses are useful for solving systems of equations:

  A x = b

If A⁻¹ exists:

  x = A⁻¹ b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. MATRICES AND SYSTEMS OF LINEAR EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most powerful uses of matrices is to represent and solve systems of linear equations. A system of m equations in n unknowns can be written compactly as A x = b, where A is the m×n coefficient matrix, x is the n×1 vector of unknowns, and b is the m×1 vector of constants. This abstraction allows us to apply matrix methods such as Gaussian elimination, LU decomposition, and matrix inversion to find solutions. The matrix form also reveals the structure of the system: the columns of A correspond to variables, and the rows correspond to equations. The solvability of the system is determined by the rank of A and the augmented matrix. This matrix representation is the foundation of linear algebra and is used in countless applications.

Consider:

  2x + y = 5
  3x + 2y = 8

This can be written as:

  [2  1] [x] = [5]
  [3  2] [y]   [8]

In compact form:

  A x = b

This representation allows us to use techniques such as:
  • Gaussian Elimination
  • Gauss-Jordan Elimination
  • Matrix Inverses
  • LU Decomposition
  • Cramer's Rule
  • Least Squares

to solve systems efficiently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. AUGMENTED MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An augmented matrix is a compact representation of a system of linear equations that combines the coefficient matrix A and the constant vector b into a single matrix, separated by a vertical bar. This form is used in Gaussian elimination to apply row operations simultaneously to both sides of the equations. The augmented matrix notation makes it easy to perform row reduction without explicitly writing variables, which simplifies the process and reduces errors. The consistency of the system can be checked by comparing the rank of the coefficient matrix with the rank of the augmented matrix. The augmented matrix is a practical tool that streamlines the solution process and is used in many numerical algorithms.

For:

  2x + y = 5
  3x + 2y = 8

the augmented matrix is:

  [2  1 | 5]
  [3  2 | 8]

The vertical line separates the coefficient matrix from the constants.

Row operations can then be applied to solve the system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. ROW OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Elementary row operations are the three fundamental transformations that can be applied to a matrix without changing the solution set of the associated linear system. They are: (1) swapping two rows, (2) multiplying a row by a nonzero scalar, and (3) adding a multiple of one row to another row. These operations are used in Gaussian elimination to reduce a matrix to row echelon form and later to reduced row echelon form. They also form the basis for finding matrix inverses and computing determinants. Each row operation corresponds to left-multiplication by an elementary matrix, which itself is invertible. Understanding row operations is crucial for mastering the algorithmic aspects of linear algebra.

There are three elementary row operations:

  1. Row Swap: Exchange two rows
     R₁ ↔ R₂

  2. Row Scaling: Multiply a row by a nonzero scalar
     R₁ → cR₁

  3. Row Replacement: Add a multiple of one row to another
     R₂ → R₂ + cR₁

These operations form the foundation of Gaussian Elimination and Gauss-Jordan Elimination.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. RANK OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rank of a matrix is the maximum number of linearly independent rows or columns. Equivalently, it is the dimension of the column space (or row space) of the matrix. The rank reveals the amount of independent information in the matrix and determines the solution set of the system A x = b: a system is consistent iff rank(A) = rank([A|b]), and if consistent, it has a unique solution iff rank(A) equals the number of unknowns. The rank-nullity theorem states that rank(A) + nullity(A) = number of columns. Rank is also used in data analysis to determine the intrinsic dimensionality of data, and in numerical linear algebra to assess the condition of a matrix. Computing the rank is typically done via row reduction.

The rank of a matrix is the maximum number of linearly independent rows or columns.

It can also be described as the dimension of the matrix's column space:

  rank(A) = dim(Col(A))

Example:

  A = [1  2]
      [2  4]

The second row is twice the first:

  [2  4] = 2[1  2]

Therefore, there is only one independent row.

Thus:

  rank(A) = 1

Rank provides important information about whether a system has unique solutions, infinitely many solutions, or no solutions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. MATRICES AS LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrices are not just arrays of numbers; they represent linear transformations between vector spaces. Given a matrix A, the mapping T(x) = A x is linear, meaning it preserves addition and scalar multiplication. This viewpoint connects algebra with geometry: a matrix can rotate, scale, shear, reflect, or project vectors. The columns of the matrix are the images of the standard basis vectors, and the transformation is fully determined by its action on these basis vectors. Understanding matrices as transformations allows us to interpret operations like composition (matrix multiplication) and invertibility (reversibility). This perspective is fundamental in computer graphics, robotics, and physics, where we manipulate objects in space using transformation matrices.

Matrices are not only tables of numbers. They can also represent linear transformations.

If:

  A = [2  0]
      [0  3]

then:

  T(x, y) = (2x, 3y)

This transformation stretches the x-direction by 2 and the y-direction by 3.

Therefore:

  T(x) = A x

provides a connection between matrices and geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. MATRIX AND VECTOR RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vectors can be seen as special cases of matrices: a column vector is an n×1 matrix, and a row vector is a 1×n matrix. This unifies the concepts of vectors and matrices and allows us to use matrix multiplication to transform vectors. The product A x computes a linear combination of the columns of A, where the coefficients are the components of x. This perspective is central to many applications: in machine learning, a dataset is often a matrix where each row is a feature vector; in physics, a force vector is multiplied by a rotation matrix to change coordinates. Understanding the matrix-vector product is key to interpreting how matrices act on data and how systems of equations are solved.

A vector can be represented as a column matrix:

  x = [x₁]
      [x₂]
      [⋮ ]
      [xₙ]

When a matrix multiplies a vector, A x, the matrix transforms the vector.

Example:

  A = [1  2]    x = [2]
      [3  4]        [1]

Then:

  A x = [1(2) + 2(1)] = [4]
        [3(2) + 4(1)]   [10]

Therefore:

  A x = [4 ]
        [10]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. MATRICES AND EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalues and eigenvectors are fundamental properties of square matrices. An eigenvector v of a matrix A is a nonzero vector that, when transformed by A, is only scaled by a scalar λ (the eigenvalue): A v = λ v. This equation means that the direction of v is unchanged by the transformation. Eigenvalues and eigenvectors are critical in many applications: they determine the stability of dynamical systems, they are used in principal component analysis to reduce dimensionality, they appear in the solution of differential equations, and they form the basis of spectral graph theory. The set of eigenvalues is called the spectrum, and it provides deep insight into the matrix's behaviour, such as whether it is invertible (zero not in spectrum) and its rate of growth (spectral radius).

Matrices also play an important role in eigenvalues and eigenvectors.

An eigenvector v of a matrix A satisfies:

  A v = λ v

where λ is the eigenvalue.

This means that applying the matrix to an eigenvector changes its magnitude but does not change its fundamental direction.

Eigenvalues and eigenvectors are important in:
  • Differential equations
  • Physics
  • Data science
  • Machine learning
  • Stability analysis
  • Principal Component Analysis
  • Quantum mechanics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. MATRICES AND DIAGONALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Diagonalisation is the process of expressing a square matrix A as A = P D P⁻¹, where D is a diagonal matrix and P is an invertible matrix whose columns are eigenvectors of A. This decomposition is possible only if A has a complete set of linearly independent eigenvectors. Diagonalisation simplifies many computations: powers of A become Aᵏ = P Dᵏ P⁻¹, and functions of A (like the exponential) can be computed easily. It also reveals the eigenstructure of the transformation, showing the independent scaling factors along the eigenvectors. Diagonalisation is a cornerstone of linear algebra and is used in solving systems of differential equations, in statistical analysis (e.g., PCA), and in many numerical algorithms.

Some matrices can be expressed in the form:

  A = P D P⁻¹

where D is a diagonal matrix.

This process is called diagonalization.

Diagonal matrices are much easier to work with than general matrices, which is why diagonalization is useful for simplifying matrix powers and many other calculations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. APPLICATIONS OF MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrices are ubiquitous in modern science and engineering. They are used to solve systems of equations, model physical systems, compress data, and enable machine learning. In computer graphics, matrices represent rotations, translations, and perspective projections. In robotics, they describe the position and orientation of links. In image processing, an image is a matrix of pixel intensities; operations like filters and transformations are matrix operations. In statistics, covariance matrices describe relationships between variables. In machine learning, weight matrices in neural networks store learned parameters. The versatility of matrices comes from their ability to represent linear relations compactly and to enable fast computation using linear algebra libraries. Almost every field that uses quantitative data or mathematical models relies on matrices.

Matrices are used in many fields.

Computer Graphics
  • Rotation, scaling, reflection, projection
  • Translation using homogeneous coordinates
  • Transforming images and 3D objects efficiently

Computer Science
  • Algorithms, graphs, image processing
  • Artificial intelligence and computer vision

Machine Learning
  • Data represented as matrices
  • Large numbers of matrix operations during training and prediction

Engineering
  • Modeling forces, circuits, structures
  • Control systems and physical systems

Economics
  • Representing relationships between industries
  • Resources, prices, and economic variables

Statistics
  • Covariance matrices, regression
  • Data analysis and multivariate statistics

Robotics
  • Describing position, orientation, and movement of robotic components

Image Processing
  • Digital image as a matrix of pixel values

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. IMPORTANT MATRIX CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To become proficient in matrices, one must master a set of core concepts that are frequently used throughout linear algebra. These include the dimensions and types of matrices, the basic operations (addition, subtraction, scalar multiplication, and multiplication), the transpose, the determinant, the inverse, and the rank. Additionally, understanding how matrices relate to linear transformations, systems of equations, and eigenvalues is essential. These concepts are interconnected: for example, the determinant determines invertibility, which in turn determines whether a system has a unique solution. The rank reveals the dimension of the column space, which is related to the number of independent equations. A solid grasp of these fundamentals enables you to tackle more advanced topics like matrix decompositions, numerical methods, and applications in data science and engineering.

When studying matrices, it is important to understand the following concepts:

  • Matrix Dimensions
  • Matrix Addition
  • Scalar Multiplication
  • Matrix Multiplication
  • Transpose
  • Determinant
  • Inverse
  • Rank
  • Row Reduction
  • Matrix Factorization
  • Linear Transformations
  • Eigenvalues and Eigenvectors

These concepts form the foundation for more advanced topics in Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a Matrix is a rectangular arrangement of numbers, symbols, or expressions organized into rows and columns.

A matrix can be used to represent mathematical information and perform operations efficiently.

Example:

  A = [1  2]
      [3  4]

is a 2×2 matrix.

Matrices can be:
  • Added and subtracted
  • Multiplied by scalars
  • Multiplied by other matrices
  • Transposed
  • Inverted, when possible
  • Reduced using row operations
  • Used to calculate determinants
  • Used to represent linear transformations
  • Used to solve systems of equations
  • Used to study eigenvalues and eigenvectors

Common Matrix Types:

  • Row Matrix:   1 × n
  • Column Matrix: m × 1
  • Square Matrix: m = n
  • Zero Matrix:  all entries are 0
  • Identity Matrix: I (diagonal entries = 1)
  • Diagonal Matrix: non-diagonal entries = 0
  • Scalar Matrix: diagonal entries all equal
  • Upper Triangular: zeros below diagonal
  • Lower Triangular: zeros above diagonal
  • Symmetric Matrix: Aᵀ = A

The key idea to remember:

  A matrix is more than just an arrangement of numbers; it is a powerful mathematical tool for representing data, solving systems of equations, and describing transformations between vector spaces.

Matrices form one of the central foundations of Linear Algebra and connect directly to vectors, systems of equations, linear transformations, determinants, inverses, LU Decomposition, eigenvalues, diagonalization, least squares, and many real-world applications.
  `,
  examples: [
    "Matrix addition: A + B = [[1+5,2+6],[3+7,4+8]] = [[6,8],[10,12]]",
    "Scalar multiplication: 3A = [[3,6],[9,12]]",
    "Matrix multiplication: [[1,2],[3,4]] × [[5,6],[7,8]] = [[19,22],[43,50]]",
    "Transpose: Aᵀ = [[1,4],[2,5],[3,6]] for A = [[1,2,3],[4,5,6]]",
    "Symmetric matrix: A = [[1,2,3],[2,4,5],[3,5,6]]",
    "Determinant: det([[2,3],[1,4]]) = 5",
    "Inverse: A⁻¹ = [[2,-1],[-3,2]] for A = [[2,1],[3,2]]",
    "Rank: rank([[1,2],[2,4]]) = 1",
    "Identity matrix: I₂ = [[1,0],[0,1]]",
    "Zero matrix: 0 = [[0,0],[0,0]]",
    "Diagonal matrix: [[2,0,0],[0,5,0],[0,0,7]]",
    "Upper triangular: [[2,3,4],[0,5,6],[0,0,7]]",
    "Lower triangular: [[2,0,0],[3,5,0],[4,6,7]]",
    "Multiply 2x2 matrices",
    "Identify an example of a symmetric matrix.",
  ],
};

export default topic;