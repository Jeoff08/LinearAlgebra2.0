const topic = {
  id: "determinants",
  title: "Determinants",
  summary:
    "How to compute determinants, properties, and applications to volume and invertibility.",
  details: `
Determinants are numerical values that can be calculated from square matrices. A determinant provides important information about a matrix, such as whether the matrix has an inverse, whether a system of linear equations has a unique solution, and how a matrix transformation affects area or volume. Determinants are therefore one of the fundamental concepts in Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DETERMINANT OF A 2×2 MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The determinant of a 2×2 matrix is the simplest non‑trivial determinant and serves as the building block for larger matrices. For a matrix [[a, b], [c, d]], the determinant is defined as ad − bc. This single number captures the essence of the linear transformation: it tells us whether the transformation is invertible (non‑zero determinant) and how it scales areas. Geometrically, if you take the two column vectors of the matrix, the absolute value of the determinant equals the area of the parallelogram they span; the sign indicates orientation (positive if the vectors are counter‑clockwise, negative if clockwise). This formula is easy to remember and is the basis for cofactor expansions used in higher dimensions. Mastering the 2×2 determinant is essential because it appears repeatedly in eigenvalue problems, Cramer's rule, and in the computation of cross products in 2D.

For a 2×2 matrix:

  A = [a  b]
      [c  d]

The determinant is:

  det(A) = ad - bc

Example:

  A = [3  2]
      [1  4]

  det(A) = (3)(4) - (2)(1) = 12 - 2 = 10

  det(A) = 10

The determinant is not another matrix. It is a single number, also called a scalar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DETERMINANT OF A 3×3 MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For 3×3 matrices, the determinant is computed using cofactor expansion, which breaks the problem into smaller 2×2 determinants. The expansion can be done along any row or column; choosing a row with many zeros simplifies the calculation. The determinant of a 3×3 matrix has a geometric meaning: its absolute value equals the volume of the parallelepiped spanned by its three column vectors. The sign indicates whether the three vectors form a right‑handed or left‑handed coordinate system. This determinant is fundamental in 3D geometry, computer graphics (for calculating volumes and normals), and physics (for computing scalar triple products). Learning the 3×3 determinant also prepares you for larger matrices, as the same cofactor expansion principle applies recursively. It is also the first step toward understanding the characteristic polynomial used to find eigenvalues.

For a 3×3 matrix:

  A = [a  b  c]
      [d  e  f]
      [g  h  i]

The determinant can be calculated using cofactor expansion along the first row:

  det(A) = a·det[e  f] - b·det[d  f] + c·det[d  e]
                   [h  i]        [g  i]        [g  h]

The signs follow the pattern:  +  -  +  across the first row.

Example:

  A = [1  2  3]
      [0  4  5]
      [1  0  6]

Expanding along the first row:

  det(A) = 1·det[4  5] - 2·det[0  5] + 3·det[0  4]
                 [0  6]        [1  6]        [1  0]

Calculate each 2×2 determinant:

  det[4  5] = (4)(6) - (5)(0) = 24
     [0  6]

  det[0  5] = (0)(6) - (5)(1) = -5
     [1  6]

  det[0  4] = (0)(0) - (4)(1) = -4
     [1  0]

Therefore:

  det(A) = 1(24) - 2(-5) + 3(-4)
         = 24 + 10 - 12
         = 22

  det(A) = 22

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DETERMINANT & INVERTIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most immediate use of the determinant is as a criterion for invertibility. A square matrix is invertible (non‑singular) if and only if its determinant is non‑zero. This is because the determinant measures the scaling factor of the linear transformation; if it is zero, the transformation collapses at least one dimension, so it cannot be reversed uniquely. Conversely, a non‑zero determinant means the transformation is one‑to‑one and onto, so an inverse exists. This connection is central to solving systems of equations, as a system A x = b has a unique solution exactly when det(A) ≠ 0. The determinant also appears in the formula for the inverse: A⁻¹ = (1/det(A)) · adj(A), where adj(A) is the adjugate matrix. Thus, the determinant not only tells us whether an inverse exists but also appears in its construction.

One of the most important uses of a determinant is determining whether a matrix has an inverse.

  det(A) ≠ 0  →  A is invertible (non-singular)
  det(A) = 0  →  A is NOT invertible (singular)

Example - Invertible Matrix:

  A = [2  3]
      [1  2]

  det(A) = (2)(2) - (3)(1) = 4 - 3 = 1

Since det(A) ≠ 0, the matrix is invertible.

Example - Singular Matrix (Not Invertible):

  B = [1  2]
      [2  4]

  det(B) = (1)(4) - (2)(2) = 4 - 4 = 0

Since det(B) = 0, the matrix does NOT have an inverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DETERMINANT & SYSTEMS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The determinant provides a direct way to analyse the solution set of a linear system A x = b. If det(A) ≠ 0, the system has exactly one solution, which can be found via Cramer's rule or by matrix inversion. If det(A) = 0, the system either has no solution or infinitely many solutions, depending on whether b lies in the column space of A. This classification is crucial in engineering and physics, where we often need to know if a system is uniquely solvable. Cramer's rule expresses each variable as a ratio of determinants, offering a closed‑form solution for small systems. However, for large systems, Gaussian elimination is more efficient. Nevertheless, the determinant remains a powerful theoretical tool for proving existence and uniqueness theorems. It also appears in the characteristic equation for eigenvalues, which are used to analyse stability and oscillations.

Determinants can help determine whether a system of linear equations has a unique solution.

Consider the system:

  2x + y = 5
  x + 3y = 6

The coefficient matrix is:

  A = [2  1]
      [1  3]

  det(A) = (2)(3) - (1)(1) = 6 - 1 = 5

Since det(A) ≠ 0, the system has a unique solution.

This connection between determinants and systems of equations is also used in Cramer's Rule, which uses determinants to solve systems of linear equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRIC MEANING OF A DETERMINANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The determinant has a vivid geometric interpretation: it measures the scaling factor of area (in 2D) or volume (in 3D) induced by the linear transformation represented by the matrix. For example, if a 2×2 matrix has determinant 3, any shape's area is multiplied by 3 under the transformation. The sign of the determinant indicates whether the orientation is preserved (positive) or reversed (negative). This interpretation is fundamental in computer graphics, where scaling, rotation, and reflection are represented by matrices whose determinants tell us how objects are distorted. It also appears in calculus when changing variables in multiple integrals; the determinant of the Jacobian matrix is the factor that adjusts the infinitesimal area or volume element. Understanding this geometric meaning helps bridge the gap between abstract matrix algebra and spatial intuition.

The determinant has an important geometric interpretation:

  • For a 2×2 matrix: |det(A)| = factor by which area changes
  • For a 3×3 matrix: |det(A)| = factor by which volume changes
  • Sign of det(A): Positive = preserves orientation, Negative = reverses orientation

Example - Area Scaling:

  A = [2  0]
      [0  3]

  det(A) = (2)(3) - (0)(0) = 6

This means the transformation multiplies areas by a factor of 6.

If a shape originally has an area of 5, after applying this transformation its area becomes:

  5 × 6 = 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IMPORTANT PROPERTIES OF DETERMINANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Determinants obey a set of algebraic rules that make them predictable and powerful. These properties are essential for simplifying computations and for proving theoretical results. For instance, the determinant of a product equals the product of determinants, which reflects the composition of linear transformations. The determinant of an inverse is the reciprocal of the original determinant, provided it is non‑zero. The determinant is invariant under transposition, which means we can work with rows or columns interchangeably. Swapping two rows changes the sign, while multiplying a row by a scalar multiplies the determinant by that scalar. Adding a multiple of one row to another leaves the determinant unchanged, which is the basis for row reduction. These properties are not mere curiosities; they underpin algorithms like Gaussian elimination and are used to derive the characteristic polynomial and to compute areas and volumes efficiently.

Below is a summary table of the key properties of determinants, followed by detailed explanations with examples for each property.

PROPERTY                                  EXAMPLE
---------                                 -------
det(I) = 1                                det([1 0; 0 1]) = 1
det(AB) = det(A) · det(B)                 det(AB) = det(A) × det(B)
det(A⁻¹) = 1/det(A)                       det(A) = 2 → det(A⁻¹) = 1/2
det(Aᵀ) = det(A)                          det(Aᵀ) = det(A)
Swapping 2 rows changes sign              det = 5 → swap → det = -5
Row/column of zeros → det = 0             det([1 2; 0 0]) = 0
Equal rows/columns → det = 0              det([1 2; 1 2]) = 0
Linearly dependent rows → det = 0         det([1 2; 2 4]) = 0

────────────────────────────────────────────────────────────────────────────────

PROPERTY 1: det(I) = 1
────────────────────────────────────────────────────────────────────────────────

The determinant of the identity matrix is always 1.

Explanation: The identity matrix represents the "do nothing" transformation that leaves all vectors unchanged. Since it doesn't change any areas or volumes, the scaling factor is exactly 1.

Example:

  I = [1  0]  →  det(I) = (1)(1) - (0)(0) = 1
      [0  1]

────────────────────────────────────────────────────────────────────────────────

PROPERTY 2: det(AB) = det(A) · det(B)
────────────────────────────────────────────────────────────────────────────────

The determinant of a product of two matrices equals the product of their individual determinants.

Explanation: When applying two transformations sequentially (first B, then A), the total scaling of area/volume is the product of the individual scalings. This is analogous to multiplying scaling factors.

Example:

  If det(A) = 3 and det(B) = 4, then det(AB) = 3 × 4 = 12

────────────────────────────────────────────────────────────────────────────────

PROPERTY 3: det(A⁻¹) = 1 / det(A)
────────────────────────────────────────────────────────────────────────────────

The determinant of the inverse of a matrix is the reciprocal of the determinant of the original matrix.

Explanation: Since A · A⁻¹ = I, we have det(A) · det(A⁻¹) = det(I) = 1. Therefore, det(A⁻¹) = 1/det(A). This only works when det(A) ≠ 0 (i.e., A is invertible).

Example:

  If det(A) = 5, then det(A⁻¹) = 1/5

────────────────────────────────────────────────────────────────────────────────

PROPERTY 4: det(Aᵀ) = det(A)
────────────────────────────────────────────────────────────────────────────────

The determinant of a matrix and its transpose are equal.

Explanation: Transposing a matrix (swapping rows with columns) does not change the determinant. This is because the determinant can be computed using either rows or columns, and transposition simply exchanges them.

Example:

  A = [2  3]  →  det(A) = (2)(4) - (3)(1) = 8 - 3 = 5
      [1  4]

  Aᵀ = [2  1]  →  det(Aᵀ) = (2)(4) - (1)(3) = 8 - 3 = 5
       [3  4]

────────────────────────────────────────────────────────────────────────────────

PROPERTY 5: Swapping two rows changes the sign of the determinant
────────────────────────────────────────────────────────────────────────────────

If two rows of a matrix are exchanged, the determinant changes sign (multiplies by -1).

Explanation: Swapping rows reverses the orientation of the transformation. A positive determinant becomes negative, and a negative determinant becomes positive. The absolute value (magnitude) stays the same.

Example:

  A = [1  2]  →  det(A) = (1)(4) - (2)(3) = 4 - 6 = -2
      [3  4]

  Swap rows → [3  4]  →  det = (3)(2) - (4)(1) = 6 - 4 = 2
              [1  2]

  Notice: det changes from -2 to +2 (sign flipped, magnitude same)

────────────────────────────────────────────────────────────────────────────────

PROPERTY 6: A row or column of zeros → det = 0
────────────────────────────────────────────────────────────────────────────────

If a matrix contains an entire row or column of zeros, its determinant is 0.

Explanation: A transformation that maps some vector to zero (or collapses a dimension) cannot be invertible. Since area/volume becomes zero in the collapsed dimension, the determinant is zero.

Example:

  A = [1  2]  →  det(A) = (1)(0) - (2)(0) = 0
      [0  0]

────────────────────────────────────────────────────────────────────────────────

PROPERTY 7: Equal rows (or columns) → det = 0
────────────────────────────────────────────────────────────────────────────────

If two rows or two columns of a matrix are identical, the determinant is 0.

Explanation: If two rows are equal, they are linearly dependent, meaning the matrix does not have full rank. This implies the transformation collapses area/volume, so the determinant is zero.

Example:

  A = [1  2]  →  det(A) = (1)(2) - (2)(1) = 2 - 2 = 0
      [1  2]

────────────────────────────────────────────────────────────────────────────────

PROPERTY 8: Linearly dependent rows (or columns) → det = 0
────────────────────────────────────────────────────────────────────────────────

If the rows (or columns) of a matrix are linearly dependent, the determinant is 0.

Explanation: Linear dependence means at least one row can be expressed as a combination of others. This implies the matrix does not have full rank and the transformation reduces dimension, making the determinant zero.

Example:

  A = [1  2]  →  Row 2 = 2 × Row 1, so rows are dependent
      [2  4]

  det(A) = (1)(4) - (2)(2) = 4 - 4 = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DETERMINANTS & LINEAR DEPENDENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The determinant is a direct indicator of linear dependence among the columns (or rows) of a square matrix. If the determinant is zero, the columns are linearly dependent, meaning at least one column can be expressed as a linear combination of the others. This condition is equivalent to the matrix having a non‑trivial null space. Conversely, a non‑zero determinant guarantees that the columns are independent and thus form a basis for the space. This connection is crucial in many areas: in data science, it helps detect multicollinearity among features; in differential equations, it determines whether a set of solutions is linearly independent (via the Wronskian). The determinant also underpins the concept of rank: for an n×n matrix, rank n ⇔ det ≠ 0. Thus, the determinant serves as a quick test for full rank and for the existence of a unique solution to A x = b.

Determinants can tell us whether the columns or rows of a square matrix are linearly independent.

  det(A) ≠ 0  →  Columns are linearly independent
  det(A) = 0  →  Columns are linearly dependent

Example:

  A = [1  2]
      [2  4]

The second column is twice the first:

  2[1] = [2]
    [2]   [4]

Therefore, the columns are linearly dependent, and det(A) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. APPLICATIONS OF DETERMINANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Determinants are not just theoretical constructs; they have widespread practical applications. In linear algebra, they are used in Cramer's rule for solving small systems, in the adjugate method for computing inverses, and in the characteristic equation for finding eigenvalues. In geometry, they compute areas, volumes, and cross products. In calculus, the Jacobian determinant is essential for change of variables in multiple integrals. In engineering, determinants are used to check the stability of control systems (via the Routh–Hurwitz criterion) and to analyse electrical networks. In computer graphics, they are used to detect whether a transformation is orientation‑preserving. Moreover, determinants appear in the definition of the Wronskian for solving differential equations and in statistical tests for covariance matrices. Their versatility makes them an indispensable tool across mathematics, science, and engineering.

Determinants are used in many areas:

  1. Solving Systems of Equations (Cramer's Rule)
  2. Finding Matrix Inverses (using adjugate method)
  3. Studying Linear Transformations
  4. Calculating Areas and Volumes
  5. Analyzing Geometric Transformations
  6. Understanding Eigenvalues

Eigenvalues are found by solving the characteristic equation:

  det(A - λI) = 0

This makes determinants an important part of studying eigenvalues and eigenvectors.

Additional applications:

  • Computer Graphics (scaling, rotation, reflection)
  • Engineering (system analysis, transformations)
  • Physics (coordinate transformations)
  • Differential Equations
  • Calculus (change of variables in multiple integrals)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A determinant is a scalar value associated with a square matrix that provides important information about the matrix.

Key Formulas:

  • 2×2:  det[a b] = ad - bc
              [c d]

  • Invertibility:  det(A) ≠ 0  ↔  A is invertible

  • Linear Independence:  det(A) ≠ 0  ↔  Columns are linearly independent

  • Geometric: |det(A)| = scaling factor for area (2D) or volume (3D)

  det(A) ≠ 0  →  A is invertible
  det(A) = 0  →  A is singular (not invertible)

Determinants are not simply calculations used to obtain a number. They provide valuable information about the structure, behavior, and geometric effect of a matrix, making them an essential topic in Linear Algebra.
  `,
  examples: [
    "Compute det([[1,2],[3,4]]) = (1)(4) - (2)(3) = 4 - 6 = -2",
    "Compute det([[3,2],[1,4]]) = (3)(4) - (2)(1) = 12 - 2 = 10",
    "Compute det([[1,2,3],[0,4,5],[1,0,6]]) = 22",
    "Invertible check: det([[2,3],[1,2]]) = 1 ≠ 0 → invertible",
    "Singular check: det([[1,2],[2,4]]) = 0 → not invertible",
    "Area scaling: det([[2,0],[0,3]]) = 6 → area multiplied by 6",
    "det(I) = 1: det([[1,0],[0,1]]) = 1",
    "det(AB) = det(A)·det(B): Product property",
    "det(A⁻¹) = 1/det(A): Inverse determinant property",
    "det(Aᵀ) = det(A): Transpose property",
    "Swapping rows: det changes sign",
    "Row of zeros: det = 0",
    "Equal rows: det = 0",
    "Linearly dependent rows: det = 0",
    "Cramer's Rule: Solve system using determinants",
    "Characteristic equation: det(A - λI) = 0 for eigenvalues",
    "Use the determinant to check if a matrix is invertible.",
  ],
};

export default topic;