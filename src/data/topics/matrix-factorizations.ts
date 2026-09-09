const topic = {
  id: "matrix-factorizations",
  title: "Matrix Factorizations",
  summary:
    "Overview of common factorizations: LU, QR, Cholesky, SVD and eigen decompositions.",
  details: `
Matrix Factorization is the process of breaking a matrix into the product of two or more simpler matrices. Instead of working directly with a large or complicated matrix, we factor it into simpler components that are easier to understand, calculate, and use. This approach is one of the most important techniques in computational Linear Algebra because many difficult matrix problems become easier after the matrix has been factorized. For example, instead of solving a system directly using A x = b, we can factor A into simpler matrices and solve several easier systems. Matrix factorizations also reveal hidden structure, such as eigenvalues, singular values, and orthonormal bases, which are essential for data analysis, machine learning, and scientific computing. By choosing the right factorization, we can significantly improve both the efficiency and numerical stability of our algorithms.

The general idea is:

  A = A₁ A₂ ... Aₖ

where A is the original matrix and A₁, A₂, ..., Aₖ are simpler matrices.

Matrix factorization is one of the most important techniques in computational Linear Algebra because many difficult matrix problems become easier after the matrix has been factorized.

For example, instead of solving a system directly using:

  A x = b

we can factor A into simpler matrices and solve several easier systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE FACTOR MATRICES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix factorization is useful because complicated matrices can be difficult to work with directly. By decomposing a matrix into a product of simpler factors, we can break a single challenging problem into a sequence of easier subproblems. For example, if we factor A = L U, solving A x = b reduces to two triangular solves, which are much faster and less error-prone. Factorizations also reveal intrinsic properties of the matrix, such as rank, null space, eigenvalues, and singular values, which are essential for understanding its behaviour. In addition, many factorizations have built‑in numerical stability, making them ideal for practical computation. Whether we are solving systems, computing inverses, or analysing data, matrix factorization is the key to efficient and reliable algorithms.

For example, suppose:

  A x = b

If we factor A as:

  A = L U

then:

  L U x = b

Instead of solving one complicated system, we can solve:

  L y = b

and then:

  U x = y

This is much easier because L and U are triangular matrices.

Therefore, matrix factorization allows us to simplify calculations, improve efficiency, and reveal important properties of matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LU DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LU Decomposition is one of the most fundamental matrix factorizations. It factors a square matrix A into a lower triangular matrix L and an upper triangular matrix U such that A = L U. This factorization is essentially a record of the Gaussian elimination process: the elimination multipliers are stored in L (with ones on the diagonal), while the eliminated matrix becomes U. LU decomposition is particularly efficient when solving multiple systems with the same coefficient matrix but different right‑hand sides, as the factorization is computed once and then reused. It is also used to compute determinants (as the product of the diagonal entries of U) and to form the basis of many other algorithms. However, care must be taken with pivoting to ensure numerical stability when the matrix has small pivots.

In LU Decomposition, a matrix A is factored into:

  A = L U

where:
  • L is a lower triangular matrix
  • U is an upper triangular matrix

Example:

  A = [2   1   1]
      [4  -6   0]
      [-2  7   2]

It can be decomposed as:

  L = [1    0   0]    U = [2   1   1]
      [2    1   0]        [0  -8  -2]
      [-1  -1   1]        [0   0   1]

Thus:

  A = L U

LU Decomposition is closely related to Gaussian Elimination because the elimination multipliers used during elimination are stored in L, while the resulting upper triangular matrix becomes U.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. QR DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR Decomposition factors an m×n matrix A into the product of an orthogonal matrix Q (with orthonormal columns) and an upper triangular matrix R: A = Q R. This factorization is particularly valuable for solving least‑squares problems because the orthogonality of Q allows us to transform the problem into a simpler triangular system without altering the norm. QR decomposition is also used in eigenvalue algorithms and as a stable alternative to the normal equations. The Gram‑Schmidt process can be used to compute QR, but in practice, more stable methods like Householder reflections or Givens rotations are employed. QR decomposition works for any matrix, and when the matrix is rank‑deficient, it provides insight into the column space and the null space. Its stability and generality make it a cornerstone of numerical linear algebra.

In QR Decomposition:

  A = Q R

where:
  • Q is an orthogonal matrix
  • R is an upper triangular matrix

An orthogonal matrix satisfies:

  Qᵀ Q = I

The columns of Q are therefore orthonormal.

Example:

  A = [1  1]
      [1  0]

QR Decomposition transforms the columns of A into an orthonormal set represented by Q, while R contains the coefficients needed to reconstruct A.

QR Decomposition is especially important for solving least-squares problems.

For example, if we want to approximate a system:

  A x ≈ b

QR Decomposition provides a numerically useful way of finding the best approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CHOLESKY DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cholesky Decomposition is a specialized factorization for symmetric positive‑definite matrices, which are common in statistics, optimization, and finite element methods. It factors A as A = L Lᵀ, where L is a lower triangular matrix. This decomposition is about twice as efficient as LU decomposition and is numerically stable without pivoting. The existence of the Cholesky factor is equivalent to the positive definiteness of A, making it a useful check for this property. Cholesky is often used in linear regression, Kalman filters, and Monte Carlo simulations because it provides a fast way to solve systems and generate correlated random variables. Its square‑root form also helps in maintaining numerical stability in iterative algorithms.

Cholesky Decomposition is a specialized factorization used for certain symmetric positive-definite matrices.

The decomposition has the form:

  A = L Lᵀ

where L is a lower triangular matrix.

Example:

  A = [4  2]
      [2  5]

We can write:

  L = [2  0]
      [1  2]

Then:

  Lᵀ = [2  1]
       [0  2]

Multiplying:

  L Lᵀ = [2  0] [2  1] = [4  2]
          [1  2] [0  2]   [2  5]

Thus:

  A = L Lᵀ

Cholesky Decomposition is computationally efficient and is widely used in numerical methods.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EIGENVALUE DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalue Decomposition (also called spectral decomposition) expresses a square matrix A as A = P D P⁻¹, where the columns of P are eigenvectors and D is a diagonal matrix containing the corresponding eigenvalues. This factorization reveals the invariant directions of the linear transformation represented by A, with each eigenvector being scaled by its eigenvalue. It is central to many applications, including solving differential equations, analysing stability, and performing principal component analysis. However, it requires that A be diagonalizable (i.e., have a full set of linearly independent eigenvectors). For non‑diagonalizable matrices, the Jordan canonical form or the Schur decomposition provides similar insight. Eigenvalue decomposition is also the basis for many numerical algorithms that compute eigenvalues and eigenvectors, which are fundamental in physics, engineering, and data science.

If a square matrix A has enough linearly independent eigenvectors, it can be written as:

  A = P D P⁻¹

where:
  • P contains the eigenvectors of A
  • D is a diagonal matrix containing the eigenvalues
  • P⁻¹ is the inverse of P

Example:

  A = [2  0]
      [0  3]

The eigenvalues are 2 and 3.

Since the matrix is already diagonal:

  P = I    and    D = [2  0]
                      [0  3]

Therefore:

  A = P D P⁻¹

Eigenvalue decomposition is important for understanding the behavior of linear transformations and is used in areas such as differential equations, physics, statistics, and machine learning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SINGULAR VALUE DECOMPOSITION (SVD)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Singular Value Decomposition (SVD) is arguably the most powerful matrix factorization because it applies to any matrix, rectangular or square. It factors A as A = U Σ Vᵀ, where U and V are orthogonal matrices and Σ is a diagonal matrix containing the singular values (non‑negative real numbers). The singular values reveal the intrinsic structure of A: the rank is the number of non‑zero singular values, and the rows/columns of U and V give the left and right singular vectors, which form orthonormal bases for the column and row spaces. SVD is used in data compression, principal component analysis, pseudo‑inverse computation, least‑squares, and many other applications. It is also numerically stable, making it the method of choice for ill‑conditioned problems. Its ability to provide a low‑rank approximation is the basis for many modern algorithms in machine learning and signal processing.

One of the most powerful matrix factorizations is Singular Value Decomposition, commonly called SVD.

SVD expresses a matrix as:

  A = U Σ Vᵀ

where:
  • U is an orthogonal matrix
  • Σ is a diagonal-like matrix containing the singular values
  • Vᵀ is the transpose of an orthogonal matrix

Unlike eigenvalue decomposition, SVD can be applied to any matrix, including rectangular matrices.

Example: A 3×2 matrix can still have an SVD:

  A = U Σ Vᵀ

This makes SVD extremely useful in practical applications.

────────────────────────────────────────────────────────────────────────────────

Understanding SVD Conceptually

SVD can be understood as breaking a transformation into three simpler operations.

  1. Vᵀ rotates or reflects the input space
  2. Σ scales the resulting vector along specific directions
  3. U rotates or reflects the result into the output space

Conceptually:

  Input → Vᵀ → Σ → U → Output

This makes SVD particularly powerful for understanding how a matrix transforms space.

────────────────────────────────────────────────────────────────────────────────

Example of SVD

Suppose:

  A = [3  0]
      [0  2]

This matrix already has an especially simple SVD.

We can choose:

  U = [1  0]    Σ = [3  0]    Vᵀ = [1  0]
      [0  1]        [0  2]          [0  1]

Therefore:

  A = U Σ Vᵀ

The singular values are 3 and 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SCHUR DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Schur Decomposition is a factorization that applies to square matrices, especially useful in numerical linear algebra. It states that any complex square matrix A can be written as A = Q T Q*, where Q is unitary and T is upper triangular. The diagonal entries of T are the eigenvalues of A. For real matrices, a real Schur form exists with a quasi‑triangular T. This decomposition is important because it provides a numerically stable way to compute eigenvalues without explicitly forming the characteristic polynomial. It is also the foundation for many eigenvalue algorithms, such as the QR algorithm. The Schur form reveals the eigenvalues while maintaining the structure of the original matrix through the unitary transformation, making it ideal for iterative methods and stability analysis.

Schur Decomposition is another important matrix factorization.

For a complex square matrix A, Schur Decomposition expresses the matrix as:

  A = Q T Q*

where:
  • Q is a unitary matrix
  • T is an upper triangular matrix
  • Q* is the conjugate transpose of Q

For real matrices, a corresponding real Schur form can also be used.

Schur Decomposition is particularly useful in numerical Linear Algebra because it provides a stable way of analyzing eigenvalues.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POLAR DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polar Decomposition is a factorization that separates a matrix into a product of an orthogonal (or unitary) matrix and a positive semi‑definite symmetric matrix. For a square matrix A, it can be written as A = Q S, where Q is orthogonal and S is symmetric positive semi‑definite. This decomposition is conceptually analogous to the polar form of a complex number, where magnitude and phase are separated. In matrix terms, Q represents a rotation/reflection, while S represents a scaling (stretching) along orthogonal axes. This factorization is useful in continuum mechanics, where the deformation gradient is decomposed into a stretch and a rotation, and in computer graphics for separating transformations into rotation and scaling components. It also provides a way to compute the matrix square root and is related to the singular value decomposition.

Polar Decomposition expresses a matrix as a product involving an orthogonal or unitary matrix and a positive semidefinite matrix.

For a suitable square matrix:

  A = Q S

where:
  • Q is orthogonal or unitary
  • S is symmetric positive semidefinite

Conceptually, it separates a transformation into a rotation/reflection component and a stretching component.

This makes Polar Decomposition useful when studying the geometric behavior of matrix transformations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LDLᵀ DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LDLᵀ Decomposition is a variant of LU decomposition for symmetric matrices. It factors a symmetric matrix A as A = L D Lᵀ, where L is lower triangular with ones on the diagonal, and D is a diagonal matrix. This form avoids the square roots required by Cholesky decomposition and can be more efficient for certain applications. It is often used in numerical linear algebra for solving symmetric systems, particularly when the matrix is not positive definite (in which case D may contain negative entries). The LDLᵀ factorization also provides a way to check for positive definiteness by examining the signs of the diagonal entries of D. It is closely related to the Cholesky decomposition and is a key component in many sparse linear solvers.

For certain symmetric matrices, we can use LDLᵀ Decomposition:

  A = L D Lᵀ

where:
  • L is lower triangular
  • D is diagonal
  • Lᵀ is the transpose of L

This is closely related to Cholesky Decomposition.

Example:

  A = [4  2]
      [2  5]

can be represented using:

  L = [1    0]    D = [4  0]
      [1/2  1]        [0  4]

Thus:

  A = L D Lᵀ

LDLᵀ Decomposition is useful because it can avoid square roots that appear in Cholesky Decomposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPARING THE MAJOR MATRIX FACTORIZATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each matrix factorization has its own strengths and is suited to different problems. LU is the workhorse for solving general linear systems, particularly when multiple right‑hand sides are involved. QR excels in least‑squares and orthogonalization problems. Cholesky is the most efficient for symmetric positive‑definite matrices. Eigenvalue decomposition and Schur decomposition reveal the spectral properties of a matrix, while SVD is the most general and provides a deep understanding of the matrix's structure. Polar and LDLᵀ decompositions are more specialized but are essential in their respective domains. Choosing the right factorization can dramatically affect the speed, accuracy, and stability of an algorithm. The table below summarises the main factorizations and their typical uses.

Factorization      Form              Main Purpose
-----------------  ----------------  ------------------------------------------
LU                 A = L U            Solving systems efficiently
QR                 A = Q R            Least squares and orthogonalization
Cholesky           A = L Lᵀ           Symmetric positive-definite matrices
Eigenvalue         A = P D P⁻¹       Eigenvalues and eigenvectors
SVD                A = U Σ Vᵀ        Data analysis, compression, least squares
Schur              A = Q T Q*        Numerical eigenvalue analysis
Polar              A = Q S            Separating rotation and stretching
LDLᵀ               A = L D Lᵀ        Symmetric matrix factorization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. MATRIX FACTORIZATION AND LINEAR SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix factorization is the key to solving linear systems efficiently. For a system A x = b, factoring A allows us to replace a single difficult problem with a sequence of easy ones. With LU, we solve two triangular systems; with Cholesky, we solve two triangular systems using the lower and upper factors; with QR, we can solve via orthogonal transformation; and with SVD, we can handle even singular or rectangular systems via the pseudo‑inverse. Each factorization exploits the properties of A to reduce the computational cost and improve numerical stability. In practice, the choice of factorization depends on the matrix's structure, the number of right‑hand sides, and the desired accuracy. For large sparse matrices, specialized factorizations are used to exploit sparsity and reduce memory usage, making linear system solving feasible for problems with millions of unknowns.

Suppose we have:

  A x = b

Different factorizations can provide different ways to solve the system.

With LU:

  A = L U

We solve:

  L y = b    and then    U x = y

With QR:

  A = Q R

For a least-squares problem:

  A x ≈ b

we can use the orthogonality of Q to obtain a simpler system involving R.

With Cholesky:

  A = L Lᵀ

we can solve:

  L y = b    and then    Lᵀ x = y

Thus, different factorizations are chosen depending on the properties of the matrix and the problem being solved.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. MATRIX FACTORIZATION AND LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Least‑squares problems, where we seek the best approximation A x ≈ b in the sense of minimizing the squared error, are naturally solved using matrix factorizations. The QR decomposition is the standard method because it is numerically stable and works without forming Aᵀ A, which can be ill‑conditioned. By applying QR to A, we transform the problem into R x ≈ Qᵀ b, which is easy to solve by back substitution. SVD is even more powerful: it handles rank‑deficient cases gracefully, providing the minimum‑norm solution and revealing the rank. The pseudo‑inverse computed via SVD gives a unique solution even when the system is underdetermined or inconsistent. These factorizations are essential in regression, signal processing, and any application that involves fitting models to data.

Matrix factorization is particularly important in least squares.

Suppose a system does not have an exact solution:

  A x = b

Instead, we want the vector x that gives the best approximation:

  A x ≈ b

QR Decomposition and SVD are two important approaches.

For example, QR gives:

  A = Q R

Because Q has orthonormal columns, we can use:

  Qᵀ Q = I

to simplify the problem.

SVD can also solve least-squares problems and provides additional information about the rank and numerical stability of the matrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MATRIX FACTORIZATION AND DATA COMPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD is the cornerstone of modern data compression. By representing a matrix (e.g., an image) as A = U Σ Vᵀ and keeping only the largest k singular values, we obtain a low‑rank approximation A ≈ Uₖ Σₖ Vₖᵀ. This approximation captures the most significant features while discarding noise and minor details. The Eckart‑Young theorem guarantees that this is the best rank‑k approximation in the Frobenius norm. This principle is used in image compression (like JPEG), video compression, and even in reducing the storage of large datasets. The compression ratio depends on how quickly the singular values decay; many real‑world matrices have rapidly decaying singular values, making them highly compressible. SVD‑based compression is also the basis for denoising and feature extraction, as it separates the signal from the noise.

SVD is especially important in data compression.

Suppose a large image is represented by a matrix A.

Its SVD is:

  A = U Σ Vᵀ

The singular values in Σ can be arranged from largest to smallest.

The largest singular values usually contain the most important information about the original matrix.

Instead of keeping every singular value, we can keep only the largest k:

  A ≈ Uₖ Σₖ Vₖᵀ

This produces a lower-rank approximation of the original matrix.

Therefore, a large image can sometimes be represented using significantly fewer values while maintaining much of its visual information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MATRIX FACTORIZATION IN MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Machine learning heavily relies on matrix factorizations for both efficiency and insight. SVD and PCA are used for dimensionality reduction, transforming high‑dimensional data into a lower‑dimensional representation that preserves variance. This speeds up algorithms, reduces overfitting, and improves interpretability. Matrix factorisations also appear in linear regression (via the normal equations, solved with Cholesky or QR), in kernel methods (where Gram matrices are factorised), and in neural network training (where weight matrices are factorised for compression). Moreover, factorisations like the non‑negative matrix factorization (NMF) are used for topic modelling and feature extraction. The ability to decompose large data matrices into simpler, interpretable factors is a core technique in modern data science, enabling applications from image recognition to natural language processing.

Matrix factorization is widely used in machine learning and data science.

For example, SVD can be used for dimensionality reduction.

A large dataset can contain hundreds or thousands of features.

SVD can identify important directions in the data and represent the dataset using fewer dimensions.

This can make data:
  • Easier to visualize
  • Faster to process
  • Less computationally expensive
  • Easier to analyze

SVD is also closely related to Principal Component Analysis (PCA).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MATRIX FACTORIZATION IN RECOMMENDATION SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recommendation systems often use matrix factorization to predict user preferences. The user‑item rating matrix is typically huge and sparse, with many missing entries. By factorising it into two lower‑dimensional matrices (e.g., U and V) such that R ≈ U Vᵀ, we capture latent factors that represent user preferences and item characteristics. The factors are learned from the known ratings, and then used to predict the missing ones. This approach, known as collaborative filtering, is at the heart of systems like Netflix and Amazon. SVD is a natural tool for this, but specialised algorithms like alternating least squares (ALS) are often used to handle the large scale. The factorisation not only provides predictions but also reveals patterns in the data, such as genre preferences or user clusters, making it a powerful and interpretable method.

Matrix factorization is also commonly used in recommendation systems.

Imagine a matrix where rows represent users and columns represent movies:

  R = [5  4  ?  1]
      [4  ?  5  2]
      [?  5  4  4]
      [1  2  ?  5]

A question mark represents a movie that a user has not rated.

Matrix factorization can approximate this large rating matrix using smaller matrices:

  R ≈ U Vᵀ

where U represents hidden characteristics of users and V represents hidden characteristics of movies.

The system can then use these hidden factors to predict missing ratings and recommend movies to users.

This idea is widely associated with collaborative filtering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MATRIX FACTORIZATION IN COMPUTER GRAPHICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer graphics, matrix factorizations help decompose complex transformations into simpler, more intuitive components. For example, a general 3D transformation matrix can be factored into rotation, scaling, and translation parts using polar decomposition or QR decomposition. This decomposition allows animators and engineers to understand and manipulate transformations more easily, as each component affects a specific geometric property. It also enables interpolation between transformations and ensures that the final transformation is well‑behaved. In addition, factorisations like SVD are used in shape analysis and mesh processing, where they reveal the principal axes of deformation. Understanding how a transformation decomposes is essential for realistic rendering, physical simulation, and character animation, making matrix factorisations a key tool in the graphics pipeline.

Matrix factorizations are also useful in computer graphics.

Transformation matrices can be analyzed or decomposed into components representing:
  • Rotation
  • Scaling
  • Reflection
  • Shearing

This helps computer systems understand and manipulate transformations applied to objects.

For example, a complex transformation may be represented as several simpler transformations:

  A = A₁ A₂ A₃

Instead of viewing the transformation as one complicated operation, we can understand it as a sequence of simpler operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. MATRIX FACTORIZATION IN SCIENTIFIC COMPUTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scientific computing deals with large‑scale simulations of physical phenomena, often requiring the solution of systems with millions of unknowns. Matrix factorizations are central to these computations. For example, finite element methods produce sparse matrices that are factored using LU or Cholesky for direct solvers, or used in iterative methods where preconditioners are built from incomplete factorizations. The efficiency of a simulation often hinges on the factorization algorithm and the exploitation of sparsity. In computational fluid dynamics, weather forecasting, and structural mechanics, factorizations allow engineers and scientists to simulate complex systems with acceptable accuracy and time. Moreover, the choice between direct and iterative methods depends on the size and condition of the matrix, and factorizations provide the foundation for both approaches.

Large scientific problems often produce systems such as:

  A x = b

Examples include:
  • Physical simulations
  • Structural analysis
  • Fluid dynamics
  • Heat transfer
  • Electrical systems
  • Engineering models

Factoring A can make these systems much more efficient to solve.

For large matrices, specialized numerical algorithms can perform factorizations efficiently and repeatedly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. CHOOSING THE APPROPRIATE FACTORIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selecting the right matrix factorization is critical for solving a problem efficiently and accurately. The choice depends on the properties of the matrix (size, symmetry, positive definiteness, sparsity, conditioning) and the nature of the task (solving a system, computing eigenvalues, minimising error, compressing data). For general nonsymmetric systems, LU with pivoting is robust. For symmetric positive‑definite matrices, Cholesky is twice as fast and more stable. For least‑squares, QR is preferred over the normal equations. When dealing with ill‑conditioned matrices or when rank information is needed, SVD is the best choice, albeit more expensive. In large‑scale sparse problems, iterative methods with preconditioners are often necessary. Understanding the trade‑offs between these factorizations is essential for practitioners in all fields of computational science and engineering.

Different matrix problems require different factorizations.

  • If the goal is to solve a general system of equations → LU Decomposition

  • If the matrix is symmetric positive-definite → Cholesky Decomposition

  • If the problem involves least squares → QR Decomposition

  • If the matrix is being analyzed for eigenvalues → Eigenvalue or Schur Decomposition

  • If the matrix is rectangular, rank-deficient, or requires a robust decomposition → SVD

Therefore, there is no single matrix factorization that is best for every problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT RELATIONSHIP BETWEEN FACTORIZATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The various matrix factorizations are not isolated; they are interconnected and often derived from one another. For example, LU decomposition is the foundation for Gaussian elimination and can be used to compute the determinant. QR decomposition is an orthogonalisation method that can be applied to any matrix, and it is intimately related to the Gram‑Schmidt process. Cholesky is a special case of LU for symmetric positive‑definite matrices. Eigenvalue decomposition and SVD are linked, as the singular values are the square roots of the eigenvalues of AᵀA (or AAᵀ). The Schur decomposition generalises the eigenvalue decomposition to non‑diagonalisable matrices. Polar decomposition is derived from SVD by taking Q = U Vᵀ and S = V Σ Vᵀ. Understanding these relationships helps in appreciating the unity of linear algebra and in choosing the most appropriate factorization for a given task, as many algorithms can be expressed in terms of multiple factorisations.

Many matrix factorizations are connected.

  A = L U          → connected to Gaussian Elimination

  A = Q R          → connected to Gram-Schmidt orthogonalization

  A = L Lᵀ        → related to LU, takes advantage of symmetry

  A = P D P⁻¹     → based on eigenvalues and eigenvectors

  A = U Σ Vᵀ      → more general, applies to rectangular matrices

Understanding these relationships helps show that matrix factorization is not a collection of unrelated techniques; rather, these methods are different ways of breaking matrices into useful mathematical components.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Matrix Factorization is the process of expressing a complicated matrix as a product of simpler matrices.

The general idea is:

  A = A₁ A₂ ... Aₖ

The most important matrix factorizations include:

  1. LU Decomposition:      A = L U
     • Useful for solving systems of equations

  2. QR Decomposition:      A = Q R
     • Useful for least squares and orthogonalization

  3. Cholesky Decomposition: A = L Lᵀ
     • Useful for symmetric positive-definite matrices

  4. Eigenvalue Decomposition: A = P D P⁻¹
     • Useful for studying eigenvalues and eigenvectors

  5. SVD: A = U Σ Vᵀ
     • Useful for data analysis, compression, dimensionality reduction

  6. Schur Decomposition:   A = Q T Q*
     • Useful for numerical eigenvalue analysis

  7. Polar Decomposition:   A = Q S
     • Separates rotation and stretching

  8. LDLᵀ Decomposition:    A = L D Lᵀ
     • Useful for certain symmetric matrices

Key Applications:

  • Solving linear systems efficiently
  • Least squares approximation
  • Data compression and dimensionality reduction
  • Recommendation systems
  • Computer graphics transformations
  • Machine learning and data science
  • Scientific computing and simulations

The key idea to remember:

  Matrix Factorization breaks a complicated matrix into simpler matrices so that mathematical problems such as solving systems, finding approximations, analyzing data, and understanding transformations become easier and more efficient.

Matrix factorization is therefore an important bridge between basic Matrix Algebra and advanced topics such as LU Decomposition, QR Decomposition, Eigenvalues, SVD, Least Squares, Numerical Linear Algebra, Machine Learning, Data Science, and Scientific Computing.
  `,
  examples: [
    "LU: A = [[2,1,1],[4,-6,0],[-2,7,2]] = L U",
    "QR: A = Q R with Q orthogonal, R upper triangular",
    "Cholesky: A = L Lᵀ for symmetric positive-definite A",
    "Eigenvalue: A = P D P⁻¹ with D diagonal",
    "SVD: A = U Σ Vᵀ for any matrix",
    "Schur: A = Q T Q* with T upper triangular",
    "Polar: A = Q S with Q orthogonal, S symmetric",
    "LDLᵀ: A = L D Lᵀ for symmetric matrices",
    "Choose between Cholesky and LU for a symmetric positive definite matrix",
    "Compare the results of QR and SVD on a simple matrix.",
  ],
};

export default topic;