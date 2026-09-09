const topic = {
  id: "qr",
  title: "QR Factorization",
  summary:
    "QR decomposition, relation to Gram–Schmidt, and solving least-squares problems.",
  details: `
QR Factorization, also called QR Decomposition, is a method in Linear Algebra that factors a matrix into the product of two matrices: an orthogonal matrix (Q) and an upper triangular matrix (R).

The basic formula is:

  A = Q R

where:
  • A is the original matrix
  • Q is an orthogonal matrix whose columns are orthonormal vectors
  • R is an upper triangular matrix

QR Factorization is especially important in Orthogonality, Least Squares, Numerical Linear Algebra, and Eigenvalue Computation.

The main idea is:

  QR Factorization takes a matrix and separates it into an orthogonal part (Q) and an upper triangular part (R).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES QR MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The name "QR" directly refers to the two matrices produced by the factorization: Q for an orthogonal (or unitary) matrix and R for an upper triangular matrix. The letter Q is often used for orthogonal matrices because of historical convention, and R stands for "right" or "rechts" (German for "right") as in upper triangular, which is also called right triangular. In the decomposition A = Q R, the columns of Q form an orthonormal basis for the column space of A, and R encodes the coefficients needed to express the original columns as linear combinations of these orthonormal vectors. This separation is powerful because orthogonal matrices preserve norms and inner products, which leads to numerical stability, while upper triangular matrices are easy to solve via back substitution. Understanding the meaning behind the names helps to remember the structure and purpose of this fundamental factorization.

The name comes directly from the two matrices involved:

  Q = Orthogonal Matrix
  R = Upper Triangular Matrix

Therefore:

  A = Q R

The columns of Q are orthonormal, which means:

  Qᵀ Q = I

The matrix R has zeros below its main diagonal:

  R = [r₁₁  r₁₂  r₁₃]
      [0    r₂₂  r₂₃]
      [0    0    r₃₃]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS QR FACTORIZATION IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR Factorization is important because it transforms a general matrix into a form that is easier and more stable to work with. The orthogonal factor Q preserves the Euclidean norm, which means that multiplying a vector by Q does not change its length. This property makes QR factorization particularly valuable in numerical computations because it avoids amplifying errors that would otherwise occur when forming products like AᵀA in least‑squares problems. Moreover, the upper triangular factor R allows us to solve linear systems and least‑squares problems efficiently by back substitution. QR decomposition is also the backbone of the QR algorithm for computing eigenvalues, one of the most important algorithms in numerical linear algebra. Its widespread use in scientific computing, data analysis, and machine learning stems from its excellent numerical stability and versatility.

It is commonly used for:
  • Solving Least-Squares problems
  • Orthogonalization
  • Numerical Linear Algebra
  • Eigenvalue computation
  • Data analysis
  • Scientific computing
  • Machine Learning

One of its biggest advantages is that it can be numerically more stable than directly solving normal equations in many least-squares problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RELATIONSHIP TO ORTHOGONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR Factorization is intimately linked to the concept of orthogonality. The columns of Q are orthonormal, meaning they are mutually perpendicular and each has unit length. This orthonormality is achieved by applying the Gram–Schmidt process to the columns of A, which successively removes the components of each column that lie in the span of the previous ones, leaving a set of independent directions that are perpendicular. In the factorization, the matrix Q provides an orthonormal basis for the column space of A, while R contains the coefficients that reconstruct the original columns from that basis. This connection to orthogonality is what makes QR so useful: orthonormal bases simplify many computations, preserve geometric properties, and contribute to numerical stability.

Suppose the columns of A are:

  a₁, a₂, ..., aₙ

QR Factorization transforms these columns into orthonormal vectors:

  q₁, q₂, ..., qₙ

These vectors become the columns of Q:

  Q = [|    |        |]
      [q₁   q₂  ...  qₙ]
      [|    |        |]

Because the columns are orthonormal:

  Qᵀ Q = I

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE OF QR FACTORIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a concrete example to see how QR factorization is computed using the Gram–Schmidt process. We start with a 2×2 matrix A whose columns are linearly independent. The first step is to set the first orthogonal vector u₁ equal to the first column of A and normalize it to obtain q₁. The second orthogonal vector u₂ is obtained by subtracting from the second column its projection onto q₁, ensuring that u₂ is perpendicular to q₁. Normalising u₂ yields q₂. The columns of Q are the orthonormal vectors q₁ and q₂, and the entries of R are the inner products that record the coefficients used in the reconstruction. This example illustrates the core idea: QR decomposes A into an orthonormal basis for its column space and the corresponding coefficients.

Consider:

  A = [1  1]
      [1  0]

We want to factor A into:

  A = Q R

The columns of A are:

  a₁ = [1]    a₂ = [1]
       [1]         [0]

We can use the Gram-Schmidt Process to turn these vectors into an orthonormal set.

────────────────────────────────────────────────────────────────────────────────

Step 1: Find the First Orthogonal Vector

Let:

  u₁ = a₁

Therefore:

  u₁ = [1]
       [1]

Its length is:

  ||u₁|| = √(1² + 1²) = √2

Normalize it:

  q₁ = u₁ / ||u₁||

Therefore:

  q₁ = [1/√2]
       [1/√2]

────────────────────────────────────────────────────────────────────────────────

Step 2: Find the Second Orthogonal Vector

Start with:

  a₂ = [1]
       [0]

Remove its projection onto q₁:

  u₂ = a₂ - (q₁ᵀ a₂) q₁

Calculate:

  q₁ᵀ a₂ = 1/√2

Therefore:

  u₂ = [1] - (1/√2)[1/√2] = [1/2]
       [0]          [1/√2]   [-1/2]

Its length is:

  ||u₂|| = 1/√2

Normalize it:

  q₂ = u₂ / ||u₂||

Thus:

  q₂ = [1/√2]
       [-1/√2]

────────────────────────────────────────────────────────────────────────────────

Step 3: Construct Q

Place the orthonormal vectors into the columns of Q:

  Q = [1/√2   1/√2]
      [1/√2  -1/√2]

Notice that:

  Qᵀ Q = I

Therefore, Q is orthogonal.

────────────────────────────────────────────────────────────────────────────────

Step 4: Find R

The matrix R can be calculated using:

  R = Qᵀ A

For this example:

  R = [√2     1/√2]
      [0      1/√2]

Therefore, the QR Factorization is:

  A = [1/√2   1/√2] [√2     1/√2]
      [1/√2  -1/√2] [0      1/√2]

The first matrix is Q, and the second matrix is R.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VERIFYING QR FACTORIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After computing the QR factors, it is essential to verify that the product Q R indeed returns the original matrix A. This verification not only confirms the correctness of the calculations but also reinforces the relationship between the orthonormal basis and the coefficients. In the example, multiplying Q and R yields the original matrix exactly, demonstrating that the decomposition is valid. In practice, due to floating‑point arithmetic, the product may be close to A but not identical; we check that the residual is small. This step is crucial for building confidence in the implementation and for detecting any numerical issues that may have arisen during the orthogonalization process. The verification also illustrates how the orthonormal basis and the upper triangular coefficients work together to represent the original data.

We can verify the result by multiplying Q and R:

  Q R = [1/√2   1/√2] [√2     1/√2]
        [1/√2  -1/√2] [0      1/√2]

The result is:

  Q R = [1  1]
        [1  0]

Therefore:

  Q R = A

The factorization is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. QR FACTORIZATION USING GRAM-SCHMIDT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Gram–Schmidt process is the classical method for computing QR factorization. It takes the columns of A one by one and orthogonalises each against all previously processed columns, producing an orthogonal set. Normalising each orthogonal vector yields the orthonormal columns of Q. The coefficients used in the orthogonalisation the inner products that are subtracted are stored in the corresponding entries of R. This method is conceptually simple and directly reflects the geometric idea of constructing an orthonormal basis. However, the classical Gram–Schmidt algorithm can suffer from numerical instability because small rounding errors accumulate as the process proceeds. Despite this, it is often used in educational settings and for small matrices. Understanding the Gram–Schmidt process is essential for grasping the foundation of QR factorization.

One common way of computing QR Factorization is the Gram-Schmidt Process.

The general idea is:

  A → orthogonal vectors → orthonormal vectors → Q → R

The process takes the columns of A and makes them orthonormal.

The resulting orthonormal vectors form Q, while the coefficients used during the process form R.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. MODIFIED GRAM-SCHMIDT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard Gram–Schmidt process is simple but can lose orthogonality in finite precision arithmetic, especially when the columns of A are nearly linearly dependent. Modified Gram–Schmidt addresses this by re‑orthogonalising each new vector against all previously computed orthogonal vectors in a sequential manner. Instead of computing the projection of the current column onto the previous orthonormal vectors in one step, it updates the vector after each orthogonalisation, reducing the accumulation of rounding errors. This small algorithmic change significantly improves numerical stability, making Modified Gram–Schmidt the method of choice in many practical implementations. It is often used in combination with Householder reflections or Givens rotations for more robust QR factorization in numerical libraries.

The standard Gram-Schmidt process can sometimes suffer from numerical errors when implemented on a computer.

A variation called Modified Gram-Schmidt improves numerical behavior.

Instead of performing certain projections all at once, Modified Gram-Schmidt updates the vectors sequentially.

This makes it more suitable for numerical computation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOUSEHOLDER REFLECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Householder transformations are another powerful method for computing QR factorization. A Householder reflection is an orthogonal matrix that mirrors a vector across a hyperplane, and it can be designed to zero out all entries below the diagonal of a column in one go. By applying a sequence of Householder reflections to A, we gradually introduce zeros below the diagonal, transforming the matrix into an upper triangular form R. The product of these reflections gives Q. This method is numerically stable and is the standard approach in many high‑performance libraries, such as LAPACK. Householder QR is particularly efficient for dense matrices because it performs operations in a block‑wise manner, making good use of cache and modern CPU architectures. It is also less prone to the loss of orthogonality than classical Gram–Schmidt.

Another important way to calculate QR Factorization is through Householder transformations.

A Householder transformation uses an orthogonal matrix to introduce zeros below the diagonal.

For example, a column such as:

  [a]
  [b]
  [c]

can be transformed into something like:

  [r]
  [0]
  [0]

Repeated transformations can turn A into an upper triangular matrix R.

The accumulated orthogonal transformations form Q.

Householder QR is often preferred in numerical software because it is generally more numerically stable than classical Gram-Schmidt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GIVENS ROTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Givens rotations provide a flexible and selective way to perform QR factorization. A Givens rotation is an orthogonal matrix that rotates a vector in a plane spanned by two coordinate axes, and it can be used to zero out a specific entry in a matrix. By applying a sequence of such rotations, we can systematically eliminate entries below the diagonal without affecting the zeros already introduced. This method is particularly useful for sparse matrices, where we want to avoid introducing fill‑in, and for incremental QR updates, where the matrix changes only slightly. Givens rotations are also employed in adaptive algorithms and in applications where fine‑grained control over the orthogonalisation is needed. They are less efficient for dense matrices than Householder reflections, but their flexibility makes them invaluable in certain contexts.

Another technique is the Givens Rotation.

A Givens rotation is an orthogonal transformation that can eliminate an individual matrix element.

For example, it can transform:

  [a]
  [b]

into:

  [r]
  [0]

This is useful when we want to eliminate individual entries below the diagonal.

Givens rotations are particularly useful for:
  • Sparse matrices
  • Incremental computations
  • Numerical algorithms
  • QR updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. QR FACTORIZATION FOR LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of QR Factorization is solving Least-Squares Problems. In a least‑squares problem, we seek the vector x that minimises the residual norm ||A x − b||². By substituting A = Q R and using the orthogonality of Q, we can transform the problem into solving the upper triangular system R x = Qᵀ b. This is numerically stable because it avoids forming the potentially ill‑conditioned matrix Aᵀ A. Moreover, the QR approach works even when A is rank‑deficient (with some modifications). It is the standard method for linear regression and many other data‑fitting tasks. The efficiency and stability of QR‑based least squares have made it a cornerstone of computational statistics and machine learning.

Suppose we have:

  A x ≈ b

If:

  A = Q R

then:

  Q R x ≈ b

Because Q is orthogonal, we can multiply by Qᵀ:

  Qᵀ Q R x = Qᵀ b

Since:

  Qᵀ Q = I

we obtain:

  R x = Qᵀ b

Because R is upper triangular, we can solve this system efficiently using back substitution.

────────────────────────────────────────────────────────────────────────────────

Example of Least Squares Using QR

Suppose we want to approximate data points using a linear model:

  y = a + bx

The problem can be written as:

  A [a] ≈ y
    [b]

For data points (x₁, y₁), ..., (xₙ, yₙ):

  A = [1  x₁]
      [1  x₂]
      [⋮  ⋮]
      [1  xₙ]

Instead of solving the normal equations directly, we can calculate:

  A = Q R

Then solve:

  R x = Qᵀ y

This gives the coefficients a and b for the best-fitting line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY QR IS BETTER FOR LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The normal equations Aᵀ A x = Aᵀ b are the classical approach to least squares. However, forming Aᵀ A squares the condition number of A, making the problem much more sensitive to rounding errors. In contrast, QR factorization works directly with A and avoids this squaring. By solving R x = Qᵀ b, we retain the numerical conditioning of the original matrix, leading to more reliable results, especially when A is ill‑conditioned. This stability advantage is the primary reason why QR is preferred over the normal equations in modern numerical software. The QR approach also provides additional information, such as the rank of A and the orthogonal basis for the column space, which can be useful in diagnostics and model selection.

The normal equations are:

  Aᵀ A x = Aᵀ b

Although this method works, calculating Aᵀ A can make numerical errors worse when A is poorly conditioned.

QR Factorization avoids explicitly forming Aᵀ A.

Instead, we use:

  R x = Qᵀ b

This is often numerically more stable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QR ALGORITHM FOR EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The QR Algorithm is one of the most important numerical methods for computing all eigenvalues of a matrix. It iteratively applies QR factorization to the matrix and then multiplies the factors in reverse order to produce a new matrix that is similar to the original (hence preserving eigenvalues). Under mild conditions, the sequence of matrices converges to an upper triangular (or quasi‑triangular) form, from which the eigenvalues can be read directly from the diagonal entries. This algorithm is the standard tool for dense eigenvalue problems and is implemented in libraries like LAPACK. Its efficiency and robustness stem from the use of QR factorization, which maintains orthogonality throughout the iterations, preventing the accumulation of errors. The QR algorithm is a testament to the power of QR factorization in numerical linear algebra.

QR Factorization is also used in one of the most important algorithms for finding eigenvalues: the QR Algorithm.

Starting with a matrix:

  A₀ = A

we factor it:

  Aₖ = Qₖ Rₖ

Then reverse the order:

  Aₖ₊₁ = Rₖ Qₖ

The process is repeated:

  A₀ → A₁ → A₂ → A₃ → ...

Under suitable conditions, the matrices approach a form from which the eigenvalues can be read.

This is one reason QR Factorization is fundamental to numerical Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. QR FACTORIZATION AND MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In machine learning, QR factorization finds use in linear regression, especially when the design matrix is large or ill‑conditioned. It provides a stable way to compute the least‑squares solution without forming the normal equations, which is important when features are nearly collinear. QR is also used in online learning and recursive least squares, where updates to the solution can be computed efficiently using Givens rotations or Householder updates. Moreover, the orthogonal basis Q can be used for dimensionality reduction and for constructing feature spaces in kernel methods. The numerical stability and flexibility of QR make it a valuable tool in the machine learning practitioner's toolkit, particularly when working with large‑scale data and robust optimisation.

QR Factorization can also be used in Machine Learning and Data Science.

It can help with:
  • Least-squares regression
  • Numerical optimization
  • Solving linear systems
  • Orthogonalization
  • Dimensionality-related computations
  • Stable numerical calculations

For example, when fitting a regression model, QR Factorization can provide a stable way to calculate model parameters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QR FACTORIZATION AND COMPUTER GRAPHICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer graphics, orthogonal matrices are essential for representing rotations and reflections because they preserve lengths and angles. The QR factorization produces an orthogonal matrix Q, which can be interpreted as a rotation or reflection that aligns the basis vectors with the original columns. This decomposition is useful in geometric algorithms, such as shape matching, pose estimation, and camera calibration, where we need to extract the rotational component of a transformation. Additionally, QR can be used to orthogonalise vectors in physics simulations and to solve systems of equations that arise in rendering and animation. The geometric insight provided by QR separating a transformation into a rotation and an upper‑triangular scaling is valuable for understanding and manipulating 3D data.

Orthogonal matrices are important in computer graphics because they preserve lengths and angles.

Since QR Factorization produces an orthogonal matrix Q, it is connected to geometric transformations.

Orthogonal transformations can represent operations such as:
  • Rotation
  • Reflection
  • Coordinate changes

This makes QR-related methods useful in computational geometry and graphics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FULL QR VS. REDUCED QR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two common variants of QR factorization: the full QR and the reduced (or economy‑size) QR. For an m×n matrix (with m ≥ n), the full QR factorization computes Q as an m×m orthogonal matrix and R as an m×n upper triangular matrix, with the bottom m−n rows of R being zero. This form is sometimes needed for theoretical purposes but uses extra storage and computation. In contrast, the reduced QR factorization computes Q as an m×n matrix with orthonormal columns and R as an n×n upper triangular matrix. The reduced form is sufficient for solving least‑squares problems and for most applications, as it contains all the necessary information about the column space. It saves both memory and time, making it the preferred choice in practice.

There are two commonly discussed forms of QR Factorization.

────────────────────────────────────────────────────────────────────────────────

Full QR Factorization

For an m×n matrix, a full factorization can have:

  Q ∈ ℝ^(m×m)    and    R ∈ ℝ^(m×n)

────────────────────────────────────────────────────────────────────────────────

Reduced QR Factorization

For many applications, only the first n orthonormal columns are needed.

Then:

  Q ∈ ℝ^(m×n)    and    R ∈ ℝ^(n×n)

The reduced form saves memory and computation when m > n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QR FACTORIZATION OF A SQUARE MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a square matrix A ∈ ℝ^(n×n), QR factorization yields Q and R both of size n×n. In this case, Q is a full orthogonal matrix, and its inverse is simply its transpose. The decomposition can be used to solve linear systems A x = b by first solving R x = Qᵀ b, which is efficient because R is upper triangular. Moreover, the determinant of A is the product of the diagonal entries of R (up to a sign), and the eigenvalues can be computed via the QR algorithm. For square matrices, QR factorization provides a stable alternative to LU decomposition, especially when A is not well‑conditioned. It is also used in computing the matrix exponential and other matrix functions.

If A ∈ ℝ^(n×n), then QR Factorization gives:

  A = Q R

where:

  Q ∈ ℝ^(n×n)    and    R ∈ ℝ^(n×n)

The matrix Q is orthogonal:

  Qᵀ Q = I

The matrix R is upper triangular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QR FACTORIZATION OF A RECTANGULAR MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR factorization is not limited to square matrices; it works equally well for rectangular matrices. The most common case is m > n, which corresponds to an overdetermined system more equations than unknowns as encountered in least‑squares regression. In the reduced form, Q is m×n with orthonormal columns, and R is n×n upper triangular. This is all that is needed to solve the least‑squares problem. The full form would add an additional m−n columns to Q (which are not needed) and a zero block in R. The ability to factor rectangular matrices makes QR a versatile tool for data analysis, where datasets are typically tall and skinny.

QR Factorization also works for rectangular matrices.

Example: A ∈ ℝ^(m×n) where m > n.

This situation is common in least-squares problems because there may be more observations than unknown variables.

The reduced QR factorization is:

  A = Q R

with:

  Q ∈ ℝ^(m×n)    and    R ∈ ℝ^(n×n)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT PROPERTIES OF QR FACTORIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR factorization comes with several useful properties that make it attractive for computational work. The columns of Q are orthonormal, so Qᵀ Q = I; for square Q, this implies Q⁻¹ = Qᵀ, which is cheap to apply. Q preserves the Euclidean norm of any vector, so ||Q x|| = ||x||, a property called isometry. This norm preservation is the basis for the stability of QR‑based algorithms. Additionally, the upper triangular structure of R makes it easy to solve systems, compute determinants (as the product of the diagonal entries), and check for singularity. The decomposition also reveals the rank of A: the number of non‑zero diagonal entries of R (assuming no pivoting) equals the rank. These properties make QR a fundamental tool in both theory and practice.

The main properties to remember are:

  1. Factorization:       A = Q R
  2. Orthogonality:       Qᵀ Q = I
  3. Inverse of Q:        Q⁻¹ = Qᵀ (for square Q)
  4. R is Upper Triangular: rᵢⱼ = 0 for i > j
  5. Q Preserves Length:  ||Q x|| = ||x||
  6. Q Preserves Inner Products: (Qx)ᵀ(Qy) = xᵀ y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QR FACTORIZATION VS. LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR and LU are both matrix factorizations, but they serve different purposes and have different properties. LU factors A into a lower triangular L and an upper triangular U, typically using Gaussian elimination with pivoting. It is efficient for solving linear systems and computing determinants, but it can be unstable for ill‑conditioned matrices. QR, on the other hand, factors A into an orthogonal Q and an upper triangular R. The orthogonal factor provides numerical stability, making QR preferable for least‑squares and eigenvalue problems. However, QR is generally more computationally expensive than LU for solving square systems. The choice between them depends on the problem: LU is faster and memory‑efficient, while QR offers stability and orthogonality. In practice, LU is used for general linear systems, and QR is chosen when accuracy and stability are paramount.

QR Factorization and LU Decomposition are both matrix factorization techniques, but they have different structures.

Feature              QR Factorization              LU Decomposition
------------------   ---------------------------   ---------------------------
Form                 A = Q R                       A = L U
First matrix         Orthogonal (Q)                Lower triangular (L)
Second matrix        Upper triangular (R)          Upper triangular (U)
Main concept         Orthogonality                 Elimination
Least Squares        Excellent                     Less direct
Numerical stability  Generally very good           Good with pivoting
Eigenvalue algos     Very important                Less central

QR is especially valuable when orthogonality and numerical stability are important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QR FACTORIZATION VS. SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR and SVD are both widely used factorizations, but they provide different levels of information. SVD gives a complete spectral decomposition A = U Σ Vᵀ, where the singular values reveal the rank, the condition number, and the best low‑rank approximations. It is more expensive to compute than QR but offers deeper insight into the matrix's structure. QR is less expensive and is the method of choice for solving least‑squares problems and for orthogonalizing bases. In practice, QR is often used when only the solution is needed, while SVD is used when the full structure, including the null space and rank, is required. Both are essential tools in numerical linear algebra, and many algorithms combine them for robust results.

QR Factorization and Singular Value Decomposition are both important matrix factorizations.

SVD has the form:

  A = U Σ Vᵀ

QR has the form:

  A = Q R

SVD provides more detailed information about the structure of a matrix, including singular values and rank.

QR is generally less expensive and is very useful for solving least-squares problems and numerical computations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMPUTATIONAL COMPLEXITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR factorization is computationally more expensive than LU but often worth the extra cost for its stability. For an m×n matrix with m ≥ n, the cost of Householder QR is approximately 2 n² (m − n/3) floating‑point operations. For square matrices, this is about 4/3 n³ operations, which is about twice the cost of LU (2/3 n³). However, the improved numerical stability often justifies the extra work, especially when the matrix is ill‑conditioned. In modern computers, the cost of QR is acceptable for matrices up to several thousand in size, and many libraries implement it in a highly optimized manner, using cache‑efficient block algorithms. Understanding these complexities helps in choosing the right algorithm for a given problem size and accuracy requirement.

For a dense m×n matrix, computing QR Factorization generally requires more computational work than a basic LU factorization.

For a square n×n matrix, the standard Householder QR process requires approximately:

  O(n³)

operations.

Although this may seem expensive, QR's numerical stability makes it extremely valuable for many scientific and engineering applications.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT QR FACTORIZATION METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several methods exist for computing QR factorization, each with its own trade‑offs. The Gram–Schmidt process is conceptually simple but can be unstable. The Modified Gram–Schmidt improves stability by updating vectors in place. Householder reflections are the standard for dense matrices, offering excellent stability and efficiency. Givens rotations are more selective and are ideal for sparse matrices or when we need to update the factorization incrementally. Choosing the right method depends on the matrix size, sparsity, and the specific application. In practice, high‑quality libraries often use Householder reflections for general matrices, while specialised routines may use Givens for particular tasks. Familiarity with all these approaches is valuable for understanding the versatility of QR factorization.

When studying QR Factorization, it is useful to know the main methods:

  • Gram-Schmidt: Uses projections to construct orthogonal vectors
  • Modified Gram-Schmidt: A numerically improved version
  • Householder Transformations: Uses reflections to eliminate entries below the diagonal
  • Givens Rotations: Uses rotations to eliminate individual entries

These methods all produce the same basic goal:

  A = Q R

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a company that has collected thousands of data points on product sales, along with features such as advertising spend, price, customer traffic, season, and promotions. They want to build a predictive model that relates these features to sales. This is a linear regression problem, which can be formulated as A x ≈ b, where A is the design matrix (one row per observation, columns for each feature), x is the vector of coefficients, and b is the vector of observed sales. Because there are many more observations than features, the system is overdetermined. Solving the normal equations directly may be unstable if the features are correlated. QR factorization provides a stable way to compute the coefficients x by solving R x = Qᵀ b. The resulting model can then be used to predict future sales, helping the company make informed decisions about marketing and pricing.

Suppose a company collects thousands of data points about product sales.

The company wants to build a mathematical model that predicts sales based on:
  • Advertising
  • Price
  • Customer traffic
  • Season
  • Promotions

The data can be represented as a matrix:

  A x ≈ b

Because there are many observations, the system may be overdetermined.

QR Factorization can be used to calculate the least-squares solution efficiently and with good numerical stability.

The resulting model can then be used to predict future sales.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QR FACTORIZATION IN SCIENTIFIC COMPUTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In scientific computing, QR factorization is a workhorse for many tasks. It is used in data fitting, where we need to find the best parameters for a model given noisy measurements. It is employed in numerical modelling, where large systems of equations arise from discretising partial differential equations. It is also central to the QR algorithm for computing eigenvalues, which is used in stability analysis and vibration studies. The factorization's orthogonality ensures that the algorithms are robust and produce reliable results even when the matrices are ill‑conditioned. Many scientific software packages, such as MATLAB, NumPy, and SciPy, provide built‑in QR routines, making it accessible to researchers and engineers. The widespread adoption of QR in scientific computing underscores its importance as a fundamental numerical tool.

Scientists often need to solve large systems generated from experiments or simulations.

QR Factorization can help with:
  • Data fitting
  • Least squares
  • Numerical modeling
  • Eigenvalue calculations
  • Orthogonalization
  • Stability-sensitive computations

Therefore, QR Factorization is an important bridge between theoretical Linear Algebra and practical numerical computation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The major concepts associated with QR Factorization are:

  • QR Decomposition
  • A = Q R
  • Orthogonal Matrix
  • Upper Triangular Matrix
  • Qᵀ Q = I
  • Gram-Schmidt
  • Modified Gram-Schmidt
  • Householder Transformations
  • Givens Rotations
  • Least Squares
  • QR Algorithm
  • Numerical Stability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, QR Factorization is a matrix factorization technique that represents a matrix as:

  A = Q R

where Q is an orthogonal matrix and R is an upper triangular matrix.

The orthogonal matrix satisfies:

  Qᵀ Q = I

QR Factorization is especially important because it provides a numerically stable way to work with matrices.

It is widely used for:
  • Least-Squares problems
  • Linear systems
  • Orthogonalization
  • Eigenvalue computation
  • Numerical Linear Algebra
  • Data analysis
  • Machine Learning
  • Scientific computing

Key Formulas:

  • QR Decomposition:      A = Q R
  • Orthogonality:         Qᵀ Q = I
  • Least Squares:         R x = Qᵀ b
  • Gram-Schmidt:          u₁ = v₁, u₂ = v₂ - proj_u₁(v₂)
  • Householder:           reflection to eliminate entries
  • Givens Rotation:       rotation to eliminate entries

Key Methods:

  • Gram-Schmidt Process
  • Modified Gram-Schmidt
  • Householder Transformations
  • Givens Rotations

The key idea to remember:

  QR Factorization breaks a matrix into an orthogonal component (Q) and an upper triangular component (R), making many Linear Algebra computations easier, more organized, and often more numerically stable.
  `,
  examples: [
    "QR: A = Q R with Q orthogonal, R upper triangular",
    "Example: A = [[1,1],[1,0]] → QR factorization",
    "Q = [[1/√2, 1/√2],[1/√2, -1/√2]]",
    "R = [[√2, 1/√2],[0, 1/√2]]",
    "Verify: Qᵀ Q = I",
    "Gram-Schmidt: u₁ = v₁, u₂ = v₂ - proj_u₁(v₂)",
    "Modified Gram-Schmidt: numerically improved version",
    "Householder: reflection matrix to introduce zeros",
    "Givens: rotation matrix to eliminate entries",
    "Least squares: R x = Qᵀ b",
    "QR Algorithm: Aₖ = Qₖ Rₖ, Aₖ₊₁ = Rₖ Qₖ for eigenvalues",
    "Full QR vs Reduced QR",
    "Square matrix: Q,R ∈ ℝ^(n×n)",
    "Rectangular matrix: Q ∈ ℝ^(m×n), R ∈ ℝ^(n×n)",
    "QR preserves lengths: ||Q x|| = ||x||",
    "Compute the QR decomposition of a 2x2 matrix",
    "Solve a least-squares problem using QR.",
  ],
};

export default topic;