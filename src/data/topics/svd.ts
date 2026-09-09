const topic = {
  id: "svd",
  title: "Singular Value Decomposition (SVD)",
  summary:
    "SVD concepts, singular values/vectors, low-rank approximations and PCA connections.",
  details: `
Singular Value Decomposition (SVD) is one of the most powerful and widely used matrix factorization techniques in Linear Algebra. It allows a matrix to be broken down into three simpler matrices that reveal its fundamental structure. Unlike eigenvalue decomposition, which is limited to square matrices, SVD works for any matrix rectangular or square, singular or full rank. This generality makes SVD indispensable in data science, machine learning, signal processing, and numerical linear algebra. The decomposition factors A into U Σ Vᵀ, where U and V are orthogonal matrices containing the left and right singular vectors, and Σ is a diagonal matrix containing the singular values. These components encode the directions of maximum variance, the scaling factors along those directions, and the relationships between input and output spaces. Understanding SVD is essential for anyone working with high‑dimensional data, as it provides the mathematical foundation for dimensionality reduction, compression, and many other modern techniques.

The basic formula is:

  A = U Σ Vᵀ

where:
  • A is the original matrix
  • U is an orthogonal matrix containing the left singular vectors
  • Σ is a diagonal matrix containing the singular values
  • Vᵀ is the transpose of an orthogonal matrix V, whose columns contain the right singular vectors

The main idea is:

  SVD breaks a complicated matrix into three simpler parts that describe the directions, scaling, and transformations contained within the matrix.

SVD is extremely important in:
  • Data Science
  • Machine Learning
  • Image Compression
  • Recommendation Systems
  • Principal Component Analysis
  • Signal Processing
  • Statistics
  • Numerical Linear Algebra

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC SVD FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The SVD formula A = U Σ Vᵀ is the core of the decomposition. Each of the three matrices plays a distinct role. The matrix U contains the left singular vectors, which are orthonormal and form a basis for the column space of A. The matrix V contains the right singular vectors, which are orthonormal and form a basis for the row space of A. The diagonal matrix Σ contains the singular values, which are non‑negative and ordered from largest to smallest. These singular values quantify the "importance" of each corresponding pair of singular vectors: the larger the singular value, the more significant that direction is in the transformation. The decomposition essentially expresses the action of A as a rotation/reflection (via Vᵀ), followed by a scaling (via Σ), followed by another rotation/reflection (via U). This three‑step interpretation is what makes SVD so intuitive and powerful across many applications.

For a matrix A ∈ ℝ^(m×n), its SVD is:

  A = U Σ Vᵀ

The three matrices have different purposes.

U: Left Singular Vectors
  • Contains orthonormal vectors that describe directions in the output space

Σ: Singular Values
  • Contains nonnegative values called singular values
  • These values describe how strongly the matrix stretches different directions

Vᵀ: Right Singular Vectors
  • Describes the directions in the input space

Therefore:

  A = U · Σ · Vᵀ
       ↑     ↑     ↑
   directions  scaling  input transformation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GEOMETRIC MEANING OF SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD can be understood geometrically as a sequence of three linear transformations applied in succession. When a vector x is multiplied by A, the first step is multiplication by Vᵀ, which rotates or reflects the vector in the input space. The second step is multiplication by Σ, which scales the vector along each coordinate axis by the corresponding singular value. The third step is multiplication by U, which rotates or reflects the scaled vector into the output space. This decomposition shows that any linear transformation can be viewed as a composition of a rotation/reflection, a scaling, and another rotation/reflection. This is a profound result: it means that the "shape" of a transformation is determined entirely by the singular values, while the orthogonal matrices merely orient the transformation. This geometric interpretation is the key to understanding why SVD is so widely used in data analysis and image processing.

When a vector is multiplied by A:

  A x

SVD tells us that this transformation can be viewed as three steps:

  x → Vᵀ x → Σ Vᵀ x → U Σ Vᵀ x

In simple terms:

  Step 1: Vᵀ   → Rotates or reflects the input
  Step 2: Σ    → Stretches or compresses the coordinates
  Step 3: U    → Rotates or reflects the result into the final orientation

Therefore:

  SVD = Rotation/Reflection + Scaling + Rotation/Reflection

This geometric interpretation is one of the most important ideas behind SVD.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SINGULAR VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The diagonal entries of Σ are the singular values, typically denoted σ₁, σ₂, ..., σᵣ, where r is the rank of A. They are non‑negative real numbers ordered so that σ₁ ≥ σ₂ ≥ ... ≥ σᵣ ≥ 0. The largest singular value σ₁ gives the maximum stretching factor of the transformation: for any unit vector x, ||A x|| ≤ σ₁, with equality when x is the first right singular vector. The smallest nonzero singular value σᵣ gives the minimum stretching factor for vectors orthogonal to the null space. The singular values provide a complete description of how the matrix scales different directions. In data analysis, the singular values indicate the amount of variance explained by each principal component. In image compression, the singular values determine which features are most important. The rate at which the singular values decay tells us how well the matrix can be approximated by a low‑rank matrix.

The diagonal entries of Σ are called the singular values.

They are usually written as:

  σ₁, σ₂, ..., σᵣ

and are ordered as:

  σ₁ ≥ σ₂ ≥ ... ≥ σᵣ ≥ 0

Example:

  Σ = [5  0  0]
      [0  3  0]
      [0  0  1]

The singular values are:

  5, 3, 1

The largest singular value tells us the maximum amount by which the matrix can stretch a unit vector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HOW ARE SINGULAR VALUES FOUND?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The singular values of A are derived from the eigenvalues of the symmetric positive semidefinite matrix Aᵀ A. Specifically, if λᵢ are the eigenvalues of Aᵀ A, then the singular values are σᵢ = √λᵢ. This relationship is fundamental because it connects SVD to the more familiar concept of eigenvalues. The eigenvectors of Aᵀ A are the right singular vectors of A (the columns of V). Similarly, the nonzero eigenvalues of A Aᵀ are the same as those of Aᵀ A, and their eigenvectors are the left singular vectors (the columns of U). This relationship provides a practical way to compute SVD for small matrices, though for large matrices specialised algorithms are used. Understanding this connection helps in appreciating how SVD generalises the eigenvalue decomposition to non‑square matrices.

The singular values of A are related to the eigenvalues of Aᵀ A.

If λᵢ are the eigenvalues of Aᵀ A, then the singular values are:

  σᵢ = √λᵢ

Therefore, the process is:

  A → Aᵀ A → Eigenvalues → √Eigenvalues → Singular Values

────────────────────────────────────────────────────────────────────────────────

Example of Finding Singular Values

Consider:

  A = [3  0]
      [0  2]

First calculate Aᵀ A. Since A is diagonal:

  Aᵀ = A

Therefore:

  Aᵀ A = [3  0] [3  0] = [9  0]
          [0  2] [0  2]   [0  4]

The eigenvalues are:

  λ₁ = 9,    λ₂ = 4

Take their square roots:

  σ₁ = √9 = 3
  σ₂ = √4 = 2

Therefore:

  σ₁ = 3,    σ₂ = 2

So:

  Σ = [3  0]
      [0  2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTRUCTING AN SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Constructing the SVD of a matrix involves computing the singular values, the right singular vectors (columns of V), and the left singular vectors (columns of U). For a diagonal matrix with non‑negative entries, the SVD is trivial: U and V are identity matrices (or permutation matrices) and Σ is the matrix itself. This simple case illustrates the core idea: the singular values are the stretching factors, and the singular vectors are the coordinate axes. For a general matrix, the construction is more involved but follows the same principles. The columns of V are the eigenvectors of Aᵀ A, the columns of U are the eigenvectors of A Aᵀ, and the singular values are the square roots of the eigenvalues. This construction reveals the deep connection between SVD and the geometry of the matrix as a linear transformation.

Consider the matrix:

  A = [3  0]
      [0  2]

Since the matrix is already diagonal and its columns are orthogonal, its SVD is particularly simple.

We can choose:

  U = [1  0]    Σ = [3  0]    V = [1  0]
      [0  1]        [0  2]        [0  1]

Therefore:

  A = U Σ Vᵀ

Since U = I and V = I, we simply have:

  A = Σ

This is a simple example of SVD.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ORTHOGONAL MATRICES IN SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Both U and V in the SVD are orthogonal matrices. This means their columns are orthonormal: they are mutually perpendicular and each has unit length. For U, this implies Uᵀ U = I, and if U is square, it also implies U Uᵀ = I. Similarly, Vᵀ V = I. The orthogonality of U and V is what makes SVD so powerful: it ensures that the transformation is decomposed into operations that preserve lengths and angles (the orthogonal matrices) and a simple scaling (Σ). The inverse of an orthogonal matrix is its transpose, which is cheap to compute. This property is essential for the numerical stability of SVD‑based algorithms and for the geometric interpretation of the decomposition.

Both U and V are orthogonal matrices.

Therefore:

  Uᵀ U = I    and    Vᵀ V = I

For square orthogonal matrices:

  U⁻¹ = Uᵀ    and    V⁻¹ = Vᵀ

This is why the transpose Vᵀ appears in the SVD formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SVD AND RANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD provides the most reliable way to determine the rank of a matrix. The rank of A is exactly the number of nonzero singular values. This is because the singular values measure the strength of the transformation in each direction; a zero singular value means the transformation collapses that direction to zero. In the presence of numerical errors, small singular values may be nonzero due to rounding, but they can be treated as zero for practical rank determination. This makes SVD the method of choice for rank estimation in numerical linear algebra. The rank reveals the dimension of the column space and the row space, which is essential for understanding the solvability of systems and the structure of data.

SVD provides a very convenient way to determine the rank of a matrix.

The rank of A is equal to the number of nonzero singular values.

Example:

  Σ = [8  0  0]
      [0  4  0]
      [0  0  0]

There are two nonzero singular values: 8 and 4.

Therefore:

  rank(A) = 2

This is especially useful for large matrices.

────────────────────────────────────────────────────────────────────────────────

Example: Rank Using SVD

Suppose:

  Σ = [10  0   0   0]
      [0   5   0   0]
      [0   0   2   0]
      [0   0   0   0]

The singular values are: 10, 5, 2, 0.

There are three nonzero singular values.

Therefore:

  rank(A) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SVD AND LOW-RANK APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Low‑rank approximation is one of the most important applications of SVD. The idea is to keep only the largest k singular values and the corresponding singular vectors, setting the rest to zero. This yields a rank‑k approximation Aₖ = Uₖ Σₖ Vₖᵀ. By the Eckart‑Young theorem, this approximation is optimal in the Frobenius norm and the spectral norm among all rank‑k matrices. This means that Aₖ is the best possible rank‑k approximation of A. Low‑rank approximation is used in data compression, image processing, and machine learning to reduce storage and computation while preserving essential information. The singular values indicate how much information is retained; the larger the kept singular values, the more accurate the approximation. This principle is the basis for many modern algorithms.

One of the most important applications of SVD is low-rank approximation.

Suppose:

  A = U Σ Vᵀ

We can keep only the largest singular values.

Example:

  Σ = [10  0  0]
      [0   5  0]
      [0   0  1]

Instead of using all three singular values, we can keep only 10 and 5.

The resulting approximation is:

  A ≈ A₂

where A₂ has rank 2.

This provides a smaller representation of the original matrix while preserving much of its important information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SVD AND IMAGE COMPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Image compression is a classic application of SVD. A grayscale image is naturally represented as a matrix of pixel intensities. This matrix can be large, but many images have low‑rank structure because the pixels are correlated. SVD decomposes the image matrix and retains only the largest singular values, which correspond to the most significant features such as edges and large‑scale patterns. The smaller singular values often correspond to noise or fine details that can be discarded without much visual loss. The compressed image is reconstructed from the truncated SVD, requiring far fewer numbers to store. This technique is the basis for many modern image compression algorithms, especially in JPEG and other transform‑based methods. The trade‑off between compression ratio and image quality is controlled by the number of singular values retained.

One of the most famous applications of SVD is image compression.

A grayscale image can be represented as a matrix:

  A = [pixel values]

A large image may contain thousands or millions of pixel values.

SVD decomposes the image matrix:

  A = U Σ Vᵀ

The largest singular values usually represent the most significant visual information.

If we keep only the largest singular values:

  A ≈ Uₖ Σₖ Vₖᵀ

we can create a compressed version of the image.

The image may look very similar while requiring fewer values to represent it.

────────────────────────────────────────────────────────────────────────────────

Example of Image Compression

Suppose an image matrix has singular values:

  100, 50, 20, 10, 5, 2, 1

The first few singular values contain much of the important information.

Instead of keeping all seven, we might keep only:

  100, 50, 20

Then we construct:

  A₃ = U₃ Σ₃ V₃ᵀ

The result is a rank-3 approximation of the original image.

The image is compressed while maintaining much of its overall structure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SVD AND DATA COMPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Beyond images, SVD is used for general data compression. Many datasets, such as sensor readings, financial time series, or gene expression profiles, exhibit redundancy and can be represented with fewer dimensions. SVD identifies the dominant patterns in the data, allowing us to store only the most significant components. The compressed representation is often sufficient for tasks like clustering, classification, or visualisation, while dramatically reducing storage and computational costs. In fact, SVD is the foundation of many dimensionality reduction techniques used in data science. The ability to compress data without losing essential information is one of the reasons SVD is so widely adopted in modern analytics.

SVD is useful for compression because many datasets contain redundant information.

Suppose a matrix has dimensions 1000×1000 but its important information can be represented using a rank-20 approximation.

Instead of storing all 1,000,000 entries directly, we can store the smaller matrices involved in the rank-20 representation.

This can significantly reduce storage requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SVD AND PRINCIPAL COMPONENT ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD is intimately connected to Principal Component Analysis (PCA), one of the most important techniques in data science. For a centered data matrix X (with each column having zero mean), the SVD X = U Σ Vᵀ yields the principal components directly. The columns of V are the principal component directions (the eigenvectors of the covariance matrix), and the singular values squared, divided by the number of observations, give the variances explained by each component. This relationship allows PCA to be computed efficiently using SVD, avoiding the explicit formation of the covariance matrix. The singular values indicate the importance of each principal component: larger singular values correspond to directions of greater variance. PCA is used for dimensionality reduction, noise removal, and visualisation, and its connection to SVD makes it a powerful and computationally stable tool.

SVD is closely connected to Principal Component Analysis (PCA).

Suppose the centered data matrix is X.

We can compute:

  X = U Σ Vᵀ

The columns of V identify important directions in the feature space.

The singular values indicate how much variation is associated with those directions.

Therefore, SVD can be used to efficiently compute PCA.

The largest singular values correspond to the most important principal components.

────────────────────────────────────────────────────────────────────────────────

Example of PCA Connection

Suppose the singular values of a dataset are:

  10, 5, 1, 0.2

The first singular value is much larger than the others.

This suggests that the first principal direction contains a large amount of the data's variation.

We might reduce the data to the first two principal components:

  Original data → 2-dimensional representation

This is useful for:
  • Visualization
  • Noise reduction
  • Feature reduction
  • Data compression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SVD AND LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD provides a powerful approach to solving least‑squares problems, especially when the matrix is rank‑deficient. The minimum‑norm solution to A x ≈ b is given by x = A⁺ b, where A⁺ is the pseudoinverse computed from the SVD. This solution minimises both the residual norm and the norm of x, making it the most stable solution among all minimisers. The pseudoinverse is obtained by inverting the nonzero singular values and leaving the zero singular values as zero, which effectively ignores the null space directions. This approach is robust and works even when the normal equations are singular. SVD‑based least squares is therefore the method of choice for ill‑posed and ill‑conditioned problems, providing reliable answers in a wide range of applications.

SVD can also be used to solve Least-Squares problems.

Suppose:

  A x ≈ b

If:

  A = U Σ Vᵀ

then the solution can be expressed using the pseudoinverse:

  A⁺ = V Σ⁺ Uᵀ

The least-squares solution can then be written as:

  x = A⁺ b

SVD is especially useful when the matrix is singular or nearly singular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MOORE-PENROSE PSEUDOINVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Moore‑Penrose pseudoinverse is a generalisation of the matrix inverse to all matrices, including rectangular and singular ones. It is unique and satisfies four algebraic properties that generalise the ordinary inverse. Using SVD, the pseudoinverse is computed as A⁺ = V Σ⁺ Uᵀ, where Σ⁺ is obtained by taking the reciprocal of each nonzero singular value and transposing the result. This construction ensures that the pseudoinverse works for any matrix and provides the minimum‑norm least‑squares solution. The pseudoinverse is a fundamental concept in numerical linear algebra and is used in regression, control theory, and signal processing. Its connection to SVD makes it computationally accessible and numerically stable.

The Moore-Penrose pseudoinverse extends the concept of a matrix inverse to matrices that may not have ordinary inverses.

Using SVD:

  A = U Σ Vᵀ

the pseudoinverse is:

  A⁺ = V Σ⁺ Uᵀ

To obtain Σ⁺:
  • Take the reciprocal of every nonzero singular value
  • Keep zero singular values as zero
  • Transpose the resulting diagonal structure

Example:

  Σ = [5  0]
      [0  2]

Then:

  Σ⁺ = [1/5   0]
       [0   1/2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SVD AND NUMERICAL STABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD is celebrated for its numerical stability. Unlike other factorisations (like LU or Cholesky), SVD does not assume full rank and can handle singular or nearly singular matrices gracefully. The singular values reveal the condition number of the matrix, and the decomposition can be truncated to ignore directions with very small singular values, effectively regularising the problem. This makes SVD the method of choice for ill‑conditioned systems, where small perturbations in the input can cause large changes in the output. By providing a clear picture of the matrix's sensitivity, SVD enables robust computations and informed decisions about how to treat unstable directions. Its stability properties are one of the main reasons SVD is so widely used in scientific computing.

SVD is considered a powerful numerical tool because it can handle matrices that are:
  • Singular
  • Nearly singular
  • Rank-deficient
  • Ill-conditioned

Example: Suppose a matrix has singular values:

  10, 5, 0.00001

The very small singular value indicates that the matrix has a direction in which it produces very little output.

This can indicate numerical sensitivity.

SVD makes this structure visible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONDITION NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The condition number of a matrix is a measure of its sensitivity to perturbations. For full‑rank matrices, it is defined as the ratio of the largest singular value to the smallest singular value: κ(A) = σ₁ / σᵣ. A condition number close to 1 indicates a well‑conditioned matrix, while a large condition number indicates ill‑conditioning. The condition number appears in error bounds for solving linear systems: if κ(A) is large, even small errors in b can lead to large errors in x. SVD makes the condition number easy to compute and interpret, and it also provides a way to improve conditioning by truncating small singular values. Understanding the condition number is essential for assessing the reliability of numerical solutions.

For a full-rank matrix, the condition number can be expressed using singular values:

  κ(A) = σ_max / σ_min

Example: Suppose σ_max = 100 and σ_min = 2.

Then:

  κ(A) = 100 / 2 = 50

A large condition number generally indicates that a problem may be sensitive to small changes in the input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SVD AND THE GEOMETRY OF A MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The SVD provides a complete geometric description of a linear transformation. Consider the unit sphere in the input space (all vectors with norm 1). When transformed by A, this sphere becomes an ellipsoid in the output space. The principal axes of this ellipsoid are given by the left singular vectors (columns of U), and their lengths are the singular values. The largest singular value gives the length of the longest axis, and the smallest nonzero singular value gives the length of the shortest axis. This geometric interpretation is not just a curiosity; it underpins many applications, such as determining the stability of a system, the fidelity of a data compression, and the sensitivity of a matrix. The singular values are the fundamental "shape parameters" of the transformation.

SVD gives us a powerful geometric interpretation.

Suppose we take the unit circle:

  ||x|| = 1

When the matrix A transforms this circle:

  A x

the result is generally an ellipse.

The singular values determine the lengths of the ellipse's principal axes.

  • The largest singular value gives the length of the longest axis.
  • The smallest nonzero singular value gives the shortest nonzero axis.

Therefore:

  Singular values describe how strongly a matrix stretches different directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SVD AND EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SVD and eigenvalue decomposition are related but distinct. For a symmetric positive definite matrix, the SVD is essentially the same as the eigenvalue decomposition (with U = V). However, for general matrices, the eigenvalue decomposition may not exist or may involve complex numbers, while the SVD always exists with real non‑negative singular values. The singular values are the square roots of the eigenvalues of Aᵀ A (or A Aᵀ). This relationship allows us to compute SVD from eigenvalues, but in practice SVD is usually computed directly using specialised algorithms. Understanding the connection helps in appreciating that SVD is a more general and robust factorisation than the eigenvalue decomposition, applicable to a wider class of problems.

SVD is related to eigenvalue decomposition, but they are not the same thing.

For a symmetric matrix A:

  A = Q Λ Qᵀ

is its eigendecomposition.

For a general matrix:

  A = U Σ Vᵀ

is its SVD.

The singular values are related to the eigenvalues of Aᵀ A:

  σᵢ = √(λᵢ(Aᵀ A))

This makes SVD applicable to matrices that may not be square or symmetric.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SVD VS. EIGENVALUE DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The table below highlights the key differences between SVD and eigenvalue decomposition. SVD works for any matrix, rectangular or square, and always yields real non‑negative singular values. Eigenvalue decomposition works only for square matrices and may yield complex eigenvalues. SVD provides two orthogonal bases (left and right singular vectors), while eigenvalue decomposition provides a single basis (eigenvectors). For rank determination and data compression, SVD is clearly superior. For analysing symmetric matrices, eigenvalue decomposition is often sufficient and more efficient. Choosing between them depends on the problem: if the matrix is general or rectangular, SVD is the right tool; if the matrix is square and symmetric, eigenvalue decomposition may be simpler.

Feature                   SVD                        Eigenvalue Decomposition
----------------------   --------------------------  --------------------------
Form                      A = U Σ Vᵀ                A = P D P⁻¹
Works for rectangular     Yes                        No, generally
Singular values           Nonnegative                Eigenvalues may be negative/complex
Uses two orthogonal bases Yes                        Not always
Rank determination        Excellent                  Less direct
Image compression         Excellent                  Less common
PCA                       Common                     Also related
Numerical applications    Very important             Important

SVD is generally more broadly applicable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPACT SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The compact SVD is a reduced version of the full SVD that removes the zero singular values and the corresponding singular vectors. If the rank of A is r, the compact SVD is A = Uᵣ Σᵣ Vᵣᵀ, where Uᵣ is m×r, Σᵣ is r×r, and Vᵣ is n×r. This form is more efficient for storage and computation, as it only retains the nonzero singular values and their associated vectors. The compact SVD is used in practice whenever the full SVD is not needed, such as in low‑rank approximation and in many machine learning algorithms. It also reduces memory usage and speeds up subsequent operations.

If the rank of A is r, we can write a smaller decomposition:

  A = Uᵣ Σᵣ Vᵣᵀ

Here:
  • Uᵣ ∈ ℝ^(m×r)
  • Σᵣ ∈ ℝ^(r×r)
  • Vᵣ ∈ ℝ^(n×r)

This is called the compact SVD.

It removes unnecessary zero singular values and is useful for low-rank computations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. TRUNCATED SVD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The truncated SVD keeps only the largest k singular values and the corresponding singular vectors, where k is chosen to be much smaller than the rank of A. This yields the best rank‑k approximation of A in the least‑squares sense. The truncated SVD is used in image compression, document clustering, and many other applications where a low‑dimensional representation is desired. The choice of k is often based on the singular values: we keep the singular values that are large enough to capture the essential information, discarding the rest as noise or negligible details. The truncated SVD is one of the most important tools in modern data analysis.

A truncated SVD keeps only the largest k singular values:

  Aₖ = Uₖ Σₖ Vₖᵀ

The rank of Aₖ is:

  rank(Aₖ) = k

This is widely used for dimensionality reduction and compression.

────────────────────────────────────────────────────────────────────────────────

Example of Truncated SVD

Suppose:

  A = U [20  0  0] Vᵀ
        [0  10  0]
        [0   0  1]

If we keep only the two largest singular values: 20, 10.

Then:

  Σ₂ = [20  0]
       [0  10]

The approximation becomes:

  A ≈ U₂ Σ₂ V₂ᵀ

This is a rank-2 approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SVD AND RECOMMENDATION SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recommendation systems are a classic application of SVD. The user‑item rating matrix is usually sparse and large, with many missing entries. SVD can factor this matrix into user and item latent factors, revealing underlying preferences and characteristics. The truncated SVD, retaining only the largest singular values, captures the most important patterns in the data while ignoring noise. The predicted ratings are then computed from the truncated factors. This approach, known as matrix factorisation, has been used successfully in systems like Netflix and Amazon. It is also the basis for many collaborative filtering algorithms, where the latent factors represent hidden features such as genre preferences or user personalities.

SVD is also used in recommendation systems.

Suppose we have a user-item matrix:

  A = [ratings]

Rows may represent users and columns may represent products, movies, or songs.

The matrix may be extremely large and contain many missing values.

Low-rank factorization can identify hidden patterns such as:
  • User preferences
  • Product characteristics
  • Movie genres
  • Purchasing behavior

The system can then use these latent factors to predict what a user might like.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. SVD IN NATURAL LANGUAGE PROCESSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In natural language processing, SVD is used in Latent Semantic Analysis (LSA) to uncover hidden relationships between words and documents. A document‑term matrix is constructed, where rows correspond to documents and columns to terms, with entries indicating term frequencies or weighted counts. SVD is applied to this matrix, and the truncated decomposition captures the latent topics in the corpus. This reduces the dimensionality of the data and improves the performance of information retrieval and text classification. The singular vectors reveal the most significant patterns of word co‑occurrence, enabling the system to understand synonyms and semantic relationships that are not explicitly present in the raw text.

SVD can also be applied to text matrices.

For example, a document-term matrix can be constructed:

  A = [term frequencies]

SVD can reduce the dimensions of this matrix while preserving important relationships.

This idea is used in Latent Semantic Analysis (LSA).

It can help identify hidden relationships between words and documents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SVD IN SIGNAL PROCESSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In signal processing, SVD is used for noise reduction, feature extraction, and signal compression. A signal can be represented as a matrix or a collection of measurements, and SVD decomposes it into components ordered by their energy (singular values). The largest singular values correspond to the main signal, while the smaller ones often correspond to noise. By truncating the small singular values, we can denoise the signal and obtain a cleaner representation. SVD is also used in subspace methods for parameter estimation and in array signal processing for direction‑of‑arrival estimation. Its ability to separate signal from noise makes it an essential tool in communications, radar, and audio processing.

Signals can often be represented as matrices or collections of measurements.

SVD can help with:
  • Noise reduction
  • Feature extraction
  • Signal compression
  • Pattern recognition

Small singular values may represent weak or noisy components.

Removing those components can produce a cleaner approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. SVD IN COMPUTER VISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer vision, SVD is used for image compression, feature extraction, and face recognition. Images are matrices, and SVD provides a way to reduce their dimensionality while preserving essential visual information. In face recognition, the eigenfaces method uses the SVD of a set of face images to compute a low‑dimensional subspace that captures the main variations in faces. New faces are projected onto this subspace and classified based on their coordinates. SVD is also used in motion analysis, 3D reconstruction, and object tracking, where it helps separate the underlying structure from noise. Its versatility and robustness make it a staple of computer vision algorithms.

SVD is useful in Computer Vision for:
  • Image compression
  • Feature extraction
  • Noise reduction
  • Face recognition
  • Dimensionality reduction

For example, an image can be converted into a matrix and decomposed using SVD.

The dominant singular vectors can capture major visual patterns.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT SVD CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Singular Value Decomposition, make sure you understand:

  • A = U Σ Vᵀ
  • Singular Values
  • Left Singular Vectors
  • Right Singular Vectors
  • Orthogonal Matrices
  • Rank
  • Low-Rank Approximation
  • Truncated SVD
  • Compact SVD
  • Pseudoinverse
  • Least Squares
  • PCA
  • Condition Number
  • Image Compression

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Singular Value Decomposition (SVD) is a powerful matrix factorization that decomposes a matrix into three matrices:

  A = U Σ Vᵀ

The matrices have the following roles:

  U = left singular vectors
  Σ = singular values
  V = right singular vectors

The singular values are obtained from the eigenvalues of Aᵀ A:

  σᵢ = √(λᵢ(Aᵀ A))

SVD can be used to determine rank because:

  rank(A) = number of nonzero singular values

It is also used for:
  • Low-rank approximation
  • Image compression
  • PCA
  • Least Squares
  • Pseudoinverse
  • Data compression
  • Machine Learning
  • Recommendation systems
  • Natural Language Processing
  • Signal processing
  • Computer Vision

Key Properties:

  • Uᵀ U = I, Vᵀ V = I
  • σ₁ ≥ σ₂ ≥ ... ≥ σᵣ ≥ 0
  • rank(A) = number of nonzero singular values
  • A⁺ = V Σ⁺ Uᵀ (pseudoinverse)
  • κ(A) = σ_max / σ_min (condition number)
  • ||A||₂ = σ₁ (largest singular value)

The key idea to remember:

  SVD breaks a matrix into U Σ Vᵀ, separating the transformation into orthogonal directions and scaling factors. Because of this, SVD provides a powerful way to understand, simplify, compress, and solve problems involving matrices and high-dimensional data.
  `,
  examples: [
    "SVD: A = U Σ Vᵀ",
    "Example: A = [[3,0],[0,2]] → U = I, Σ = [[3,0],[0,2]], V = I",
    "Singular values: σ₁ ≥ σ₂ ≥ ... ≥ σᵣ ≥ 0",
    "Singular values from eigenvalues: σᵢ = √(λᵢ(AᵀA))",
    "Rank: number of nonzero singular values",
    "Low-rank approximation: A ≈ Uₖ Σₖ Vₖᵀ",
    "Image compression: keep largest singular values",
    "PCA: use SVD on centered data matrix",
    "Pseudoinverse: A⁺ = V Σ⁺ Uᵀ",
    "Condition number: κ(A) = σ_max / σ_min",
    "Orthogonal matrices: Uᵀ U = I, Vᵀ V = I",
    "Compact SVD: A = Uᵣ Σᵣ Vᵣᵀ",
    "Truncated SVD: keep k largest singular values",
    "Recommendation systems: user-item matrix factorization",
    "LSA: document-term matrix with SVD",
    "Compute a low-rank approximation of a matrix",
    "Use SVD for a simple image compression example.",
  ],
};

export default topic;