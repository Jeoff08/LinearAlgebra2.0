const topic = {
  id: "quadratic-forms",
  title: "Quadratic Forms",
  summary:
    "Quadratic forms, matrix representation, definiteness, and Sylvester's criterion.",
  details: `
Quadratic Forms are mathematical expressions involving variables that are multiplied by themselves or by other variables. In Linear Algebra, quadratic forms provide a convenient way to represent these expressions using vectors and matrices.

A quadratic form can generally be written as:

  Q(x) = xᵀ A x

where:
  • x is a vector of variables
  • A is a square matrix
  • Q(x) is the resulting scalar

The main idea is:

  A quadratic form represents a quadratic expression using matrix multiplication.

Quadratic forms are important in Linear Algebra because they connect matrices, eigenvalues, definiteness, geometry, optimization, and conic surfaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC QUADRATIC FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form is a homogeneous polynomial of degree two in several variables. It consists of squared terms (like x², y²) and cross‑product terms (like xy, xz). In Linear Algebra, we represent such expressions compactly using a symmetric matrix A, so that Q(x) = xᵀ A x. This representation is not only concise but also reveals the algebraic structure and geometric properties of the quadratic expression. The matrix A encodes the coefficients of the quadratic form: the diagonal entries correspond to the coefficients of the squared terms, while the off‑diagonal entries are half of the coefficients of the cross‑product terms. This matrix formulation is the foundation for analysing quadratic forms using tools from Linear Algebra, such as eigenvalues, determinant, and orthogonal diagonalisation. It also connects quadratic forms to geometry, optimisation, and statistics, making it a versatile concept.

Consider the expression:

  Q(x, y) = x² + 2xy + y²

This is a quadratic form because it contains terms such as x², xy, and y².

We can represent it using a matrix.

Let:

  x = [x]
      [y]

Then we can write:

  Q(x) = xᵀ A x

For this example:

  A = [1  1]
      [1  1]

Therefore:

  Q(x, y) = [x  y] [1  1] [x]
                   [1  1] [y]

Multiplying the matrices gives:

  Q(x, y) = x² + 2xy + y²

Thus:

  x² + 2xy + y² = [x  y] [1  1] [x]
                          [1  1] [y]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL TWO-VARIABLE QUADRATIC FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most general quadratic form in two variables x and y is Q(x, y) = ax² + 2bxy + cy², where a, b, c are real constants. The factor of 2 in the cross‑product term is conventional and ensures that the corresponding symmetric matrix has the simple form [[a, b], [b, c]]. This matrix is symmetric because the cross‑term coefficient is equally distributed between the (1,2) and (2,1) entries. This representation is unique: given any symmetric 2×2 matrix, we can recover the quadratic form by expanding xᵀ A x. The matrix encodes all the essential information about the quadratic form, including its curvature and definiteness. Understanding this general form is the first step toward generalising to more variables and toward applying tests for positive definiteness, such as Sylvester's criterion and eigenvalue analysis.

A general quadratic form involving two variables can be written as:

  Q(x, y) = ax² + 2bxy + cy²

Its matrix representation is:

  A = [a  b]
      [b  c]

Therefore:

  Q(x, y) = [x  y] [a  b] [x]
                   [b  c] [y]

Notice that the matrix is symmetric:

  A = Aᵀ

Symmetric matrices are especially important when studying quadratic forms.

────────────────────────────────────────────────────────────────────────────────

Example

Consider:

  Q(x, y) = 3x² + 4xy + 2y²

We want to write this as:

  Q(x) = xᵀ A x

The general form is:

  ax² + 2bxy + cy²

Comparing terms:

  a = 3
  2b = 4 → b = 2
  c = 2

Therefore:

  A = [3  2]
      [2  2]

Thus:

  3x² + 4xy + 2y² = [x  y] [3  2] [x]
                            [2  2] [y]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. QUADRATIC FORMS IN THREE VARIABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Extending to three variables, a quadratic form includes squared terms x², y², z² and cross‑product terms xy, xz, yz. The associated symmetric matrix A is 3×3, with diagonal entries equal to the coefficients of the squared terms and off‑diagonal entries equal to half the coefficients of the corresponding cross‑product terms. This structure ensures that xᵀ A x reproduces the original polynomial exactly. The matrix representation is particularly useful because it allows us to apply eigenvalue decomposition: any symmetric matrix can be diagonalised by an orthogonal matrix, which transforms the quadratic form into a sum of squares. This simplifies the analysis of definiteness and reveals the geometric shape of the level sets (ellipsoids, hyperboloids, etc.). Quadratic forms in three variables are common in physics (moment of inertia) and machine learning (regularisation).

Quadratic forms can also involve three or more variables.

Example:

  Q(x, y, z) = 2x² + 3y² + 4z² + 2xy - 6xz + 8yz

This can be represented as:

  Q(x) = xᵀ A x

where:

  x = [x]
      [y]
      [z]

The corresponding symmetric matrix is:

  A = [2   1  -3]
      [1   3   4]
      [-3  4   4]

The off-diagonal entries are divided by 2 when constructing the matrix because each cross-product appears twice during matrix multiplication.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY IS THE MATRIX SYMMETRIC?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form can always be represented by a symmetric matrix. This is because any square matrix A can be decomposed into its symmetric part (A + Aᵀ)/2 and its skew‑symmetric part (A − Aᵀ)/2. When we compute xᵀ A x, the skew‑symmetric part contributes zero because xᵀ (A − Aᵀ) x = 0 for all x. Thus, only the symmetric part matters. This is a crucial observation: it guarantees that we can always assume the matrix in a quadratic form is symmetric, which simplifies analysis and avoids ambiguity. Symmetric matrices have real eigenvalues and orthogonal eigenvectors, making them diagonalisable by orthogonal matrices. This property is essential for classifying quadratic forms, as the eigenvalues directly determine definiteness. Therefore, in practice, we always take A to be symmetric when studying quadratic forms.

A quadratic form can always be represented using a symmetric matrix.

Suppose A is not symmetric.

We can divide it into its symmetric and skew-symmetric parts:

  A = (A + Aᵀ)/2 + (A - Aᵀ)/2

For a quadratic form:

  xᵀ(A - Aᵀ)x = 0

Therefore:

  xᵀ A x = xᵀ ((A + Aᵀ)/2) x

This means that only the symmetric part of A affects the quadratic form.

Therefore, we generally study quadratic forms using:

  A = Aᵀ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. QUADRATIC FORMS AND GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quadratic forms have a strong geometric interpretation. For two variables, the equation Q(x, y) = 1 defines a conic section in the plane. The symmetric matrix A determines the shape: if A is positive definite, the conic is an ellipse (or circle if the eigenvalues are equal); if A is indefinite, it is a hyperbola; if A is positive semidefinite, the conic degenerates into a pair of parallel lines or a point. This geometric perspective bridges Linear Algebra with analytic geometry. In higher dimensions, the level sets of a quadratic form are quadric surfaces (ellipsoids, hyperboloids, paraboloids), whose shapes are determined by the eigenvalues and eigenvectors of A. This connection is useful in optimisation, where positive definite quadratic forms correspond to convex functions with elliptical contours, and in statistics, where covariance matrices define ellipsoidal confidence regions. Understanding the geometry of quadratic forms helps in visualising high‑dimensional data and transformation effects.

Quadratic forms have a strong geometric interpretation.

For two variables:

  Q(x, y) = ax² + 2bxy + cy²

the equation:

  Q(x, y) = 1

can describe different geometric shapes.

Depending on the matrix and its properties, the resulting shape may be related to:
  • Ellipses
  • Hyperbolas
  • Degenerate conics

Examples:

  x² + y² = 1    represents a circle
  x² - y² = 1    represents a hyperbola

Thus, quadratic forms connect Linear Algebra with analytic geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POSITIVE DEFINITE QUADRATIC FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Positive definiteness is a key property of a quadratic form. A quadratic form is positive definite if Q(x) > 0 for every nonzero vector x. Geometrically, this means the surface Q(x) = 1 is an ellipsoid and the function has a strict minimum at the origin. Positive definite matrices are essential in optimisation because they guarantee that the corresponding quadratic function is strictly convex and has a unique global minimiser. They also appear in many applications, such as in covariance matrices (which are positive semidefinite) and in the Hessian of convex functions. Testing for positive definiteness can be done using eigenvalues (all positive), Sylvester's criterion (all leading principal minors positive), or by checking that the matrix is symmetric and the Cholesky decomposition exists. Positive definite quadratic forms provide a foundation for many algorithms in numerical linear algebra and machine learning.

One of the most important classifications is positive definiteness.

A quadratic form:

  Q(x) = xᵀ A x

is positive definite if:

  xᵀ A x > 0

for every nonzero vector x.

In other words, the quadratic form is always positive except at x = 0.

────────────────────────────────────────────────────────────────────────────────

Example of Positive Definite Quadratic Form

Consider:

  Q(x, y) = x² + y²

The matrix is:

  A = [1  0]
      [0  1]

For any nonzero vector:

  x = [x]
      [y]

we have:

  xᵀ A x = x² + y²

Since x² + y² > 0 whenever (x, y) ≠ (0, 0), the matrix is positive definite.

Therefore:

  A is positive definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. NEGATIVE DEFINITE QUADRATIC FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form is negative definite if Q(x) < 0 for every nonzero vector x. Geometrically, this means the surface Q(x) = 1 is empty or the function has a strict maximum at the origin. Negative definite matrices are less common in optimisation because they correspond to concave functions with a unique maximum. They can be tested by checking that all eigenvalues are negative, or equivalently, that the negative of the matrix is positive definite. In many applications, such as in stability analysis of dynamical systems, negative definite quadratic forms indicate that energy is dissipated. For a symmetric matrix A, negative definiteness is equivalent to -A being positive definite, so the same tests apply with signs reversed. Understanding both positive and negative definiteness is important for classifying stationary points in optimisation.

A quadratic form is negative definite if:

  xᵀ A x < 0

for every nonzero x.

Example:

  Q(x, y) = -x² - y²

Its matrix is:

  A = [-1   0]
      [0   -1]

For every nonzero vector:

  xᵀ A x < 0

Therefore:

  A is negative definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POSITIVE SEMIDEFINITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form is positive semidefinite if Q(x) ≥ 0 for all x, with equality allowed for some nonzero x. This means the matrix has non‑negative eigenvalues and may have a nontrivial null space. Geometrically, the level set Q(x) = 1 may be a cylinder or a degenerate ellipsoid, and the function is convex but not strictly convex. Positive semidefinite matrices are common in statistics (covariance matrices) and in optimisation with inequality constraints. They also appear in the second‑order conditions for convex functions where the Hessian may be positive semidefinite at a minimum. Testing for positive semidefiniteness can be done by checking that all eigenvalues are non‑negative, or by checking that all leading principal minors are non‑negative (for some definitions). These matrices are also used in quadratic programming and in the definition of inner products in semi‑definite programming.

A quadratic form is positive semidefinite if:

  xᵀ A x ≥ 0

for every x.

Unlike positive definite matrices, the quadratic form is allowed to equal zero for some nonzero vectors.

Example:

  Q(x, y) = x²

The matrix is:

  A = [1  0]
      [0  0]

We have:

  Q(x, y) = x² ≥ 0

However, when x = 0 and y ≠ 0, the quadratic form becomes zero.

Therefore, it is positive semidefinite rather than positive definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. NEGATIVE SEMIDEFINITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form is negative semidefinite if Q(x) ≤ 0 for all x. This is the counterpart of positive semidefinite, with all eigenvalues non‑positive. Such matrices appear in contexts like energy dissipation or when a function is concave but not strictly. In optimisation, a negative semidefinite Hessian at a stationary point indicates a local maximum (or a saddle if indefinite). Testing for negative semidefiniteness can be done by checking that all eigenvalues are non‑positive, or equivalently, that -A is positive semidefinite. These forms are less common in typical optimisation problems but are important in stability analysis and in some economic models.

A quadratic form is negative semidefinite if:

  xᵀ A x ≤ 0

for all x.

Example:

  Q(x, y) = -x²

It is always less than or equal to zero.

Therefore, the corresponding matrix is negative semidefinite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INDEFINITE QUADRATIC FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic form is indefinite if it takes both positive and negative values. This occurs when the symmetric matrix A has both positive and negative eigenvalues. Geometrically, the level set Q(x) = 1 is a hyperbola (in 2D) or a hyperboloid (in higher dimensions). Indefinite quadratic forms are associated with saddle points in optimisation, where the function increases in some directions and decreases in others. They are also common in physics, such as in the kinetic energy minus potential energy of a system. Indefinite matrices are not positive or negative definite or semidefinite; they are the most general case. Recognising an indefinite quadratic form is important because it indicates that the optimisation problem may have multiple local extrema or saddle points, requiring more sophisticated algorithms.

A quadratic form is indefinite if it can be both positive and negative.

Example:

  Q(x, y) = x² - y²

If x = 1, y = 0, then:

  Q(1, 0) = 1

But if x = 0, y = 1, then:

  Q(0, 1) = -1

Therefore, the quadratic form can have both positive and negative values.

Thus:

  Q(x, y) = x² - y² is indefinite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE FOUR MAIN TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quadratic forms are commonly classified into five categories based on the sign of Q(x) for nonzero vectors. The classification is essential in optimisation, where the definiteness of the Hessian determines the nature of critical points. Positive definite forms correspond to strict minima, negative definite to strict maxima, positive semidefinite to minima with flat directions, negative semidefinite to maxima with flat directions, and indefinite to saddle points. The classification can be determined by the eigenvalues of the associated symmetric matrix: all positive ⇒ positive definite; all non‑negative ⇒ positive semidefinite; all negative ⇒ negative definite; all non‑positive ⇒ negative semidefinite; mixed signs ⇒ indefinite. This eigenvalue criterion is powerful and directly connects Linear Algebra to optimisation and geometry.

Quadratic forms are commonly classified as:

Type                      Condition
----------------------   ------------------------------
Positive Definite         xᵀ A x > 0 for x ≠ 0
Positive Semidefinite     xᵀ A x ≥ 0
Negative Definite         xᵀ A x < 0 for x ≠ 0
Negative Semidefinite     xᵀ A x ≤ 0
Indefinite                Can be positive and negative

This classification is extremely important in optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUADRATIC FORMS AND EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalues provide the most elegant way to classify quadratic forms. For a symmetric matrix A, the eigenvalues λ₁, ..., λₙ determine the sign of the quadratic form. This is because A can be diagonalised by an orthogonal matrix Q such that Qᵀ A Q = D, where D is diagonal with the eigenvalues. Under the change of variables y = Qᵀ x, the quadratic form becomes a weighted sum of squares: Q(x) = λ₁ y₁² + ... + λₙ yₙ². From this form, it is clear that if all λᵢ > 0, the form is positive definite; if all λᵢ < 0, it is negative definite; if all λᵢ ≥ 0, it is positive semidefinite; if all λᵢ ≤ 0, it is negative semidefinite; and if there are both positive and negative λᵢ, it is indefinite. This diagonalisation also reveals the principal axes of the quadratic form, which are the eigenvectors. The eigenvalue test is straightforward and is the basis for many numerical algorithms.

For a symmetric matrix A, the eigenvalues can be used to determine the definiteness of a quadratic form.

  • If all eigenvalues are positive (λᵢ > 0), then A is positive definite.
  • If all eigenvalues are nonnegative (λᵢ ≥ 0), then A is positive semidefinite.
  • If all eigenvalues are negative (λᵢ < 0), then A is negative definite.
  • If the matrix has both positive and negative eigenvalues, it is indefinite.

Therefore:

  Eigenvalues provide a powerful way to classify quadratic forms.

────────────────────────────────────────────────────────────────────────────────

Example Using Eigenvalues

Consider:

  A = [2  0]
      [0  3]

The eigenvalues are:

  λ₁ = 2    and    λ₂ = 3

Both are positive: 2 > 0 and 3 > 0.

Therefore:

  A is positive definite.

The corresponding quadratic form is:

  Q(x, y) = 2x² + 3y²

It is always positive for any nonzero vector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DETERMINANT TEST FOR A 2×2 MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a 2×2 symmetric matrix, positive definiteness can be checked using simple conditions on the diagonal entry and the determinant. Specifically, for A = [[a, b], [b, c]], the matrix is positive definite if and only if a > 0 and det(A) = ac − b² > 0. This is a special case of Sylvester's criterion. The condition a > 0 ensures that the quadratic form is positive along the x‑axis, and det(A) > 0 ensures that it does not become negative in other directions. Similarly, negative definiteness requires a < 0 and det(A) > 0. For semidefinite cases, the conditions are with non‑strict inequalities. This 2×2 test is quick and often used in practice, especially when analysing the Hessian of a two‑variable function for local extrema.

For a symmetric matrix:

  A = [a  b]
      [b  c]

positive definiteness can be checked using the leading principal minors.

For a 2×2 matrix, the conditions are:

  a > 0    and    det(A) > 0

Example:

  A = [3  1]
      [1  2]

First:

  a = 3 > 0

Next:

  det(A) = (3)(2) - (1)(1) = 6 - 1 = 5

Since 5 > 0, the matrix is positive definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SYLVESTER'S CRITERION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sylvester's criterion is a general method for testing positive definiteness of a symmetric matrix of any size. It states that a symmetric matrix A is positive definite if and only if all its leading principal minors are positive. The k‑th leading principal minor is the determinant of the upper‑left k×k submatrix. This criterion is algebraic and does not require computing eigenvalues. It is particularly useful for small to medium‑sized matrices and in theoretical proofs. For negative definiteness, one can apply Sylvester's criterion to −A. For semidefinite cases, the minors must be non‑negative, but the converse is not always true without additional conditions (for semidefinite, all principal minors must be non‑negative). In practice, Sylvester's criterion is a standard tool for checking definiteness in optimisation and matrix theory.

For larger symmetric matrices, Sylvester's Criterion can be used to test positive definiteness.

A symmetric matrix A is positive definite if all its leading principal minors are positive.

For a 2×2 matrix:

  Δ₁ = a > 0    and    Δ₂ = det(A) > 0

For a 3×3 matrix, we check:

  Δ₁ > 0,    Δ₂ > 0,    Δ₃ > 0

This provides an algebraic way to determine whether a symmetric matrix is positive definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUADRATIC FORMS AND OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quadratic forms are fundamental in optimisation because they appear in the quadratic approximation of any smooth function near a point via its Taylor expansion. The Hessian matrix, which is the matrix of second partial derivatives, defines a quadratic form that determines the local curvature of the function. If the Hessian is positive definite at a critical point, the function has a local minimum; if negative definite, a local maximum; if indefinite, a saddle point. This is the basis of the second‑order condition in unconstrained optimisation. Furthermore, many optimisation problems are themselves quadratic, such as linear regression and quadratic programming, where the objective is a quadratic form. In such cases, the definiteness of the associated matrix determines whether the problem is convex and has a unique solution. Thus, understanding quadratic forms is essential for both theoretical and practical optimisation.

Quadratic forms are extremely important in Optimization.

A quadratic optimization problem can be written as:

  f(x) = ½ xᵀ A x - bᵀ x + c

Here, xᵀ A x is the quadratic part of the objective function.

The matrix A determines the curvature of the function.

If A is positive definite, the function is strictly convex and has a unique global minimum.

Therefore:

  A positive definite → unique minimum under standard unconstrained conditions.

────────────────────────────────────────────────────────────────────────────────

Example of Quadratic Optimization

Consider:

  f(x, y) = x² + y²

We can write this as:

  f(x) = xᵀ A x

where:

  A = [1  0]
      [0  1]

The matrix is positive definite.

Therefore, the function has a unique minimum at:

  (x, y) = (0, 0)

The minimum value is:

  0

This demonstrates how positive definite quadratic forms naturally appear in optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUADRATIC FORMS AND HESSIAN MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Hessian matrix, denoted ∇²f(x), contains the second partial derivatives of a scalar function f. For a quadratic function of the form f(x) = ½ xᵀ A x − bᵀ x + c with symmetric A, the Hessian is constant and equal to A. This observation is central to optimisation: the Hessian defines the quadratic form that characterises the local curvature of f. At a critical point where the gradient is zero, the quadratic form xᵀ A x determines whether the point is a local minimum (positive definite), local maximum (negative definite), or saddle (indefinite). Therefore, analysing the quadratic form associated with the Hessian is the standard way to classify stationary points. This connection is why quadratic forms are extensively studied in multivariable calculus and numerical optimisation.

Quadratic forms are also closely connected to the Hessian matrix.

For a function f(x), the Hessian contains its second derivatives.

For a quadratic function:

  f(x) = ½ xᵀ A x - bᵀ x + c

the Hessian is:

  ∇²f(x) = A

when A is symmetric.

Therefore, analyzing the quadratic form xᵀ A x is equivalent to analyzing the curvature of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMPLETING THE SQUARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Completing the square is a technique that rewrites a quadratic form as a sum of squares, often revealing its definiteness and making it easier to analyse. This algebraic transformation is useful for quadratic forms in two or more variables, although it becomes more complex in higher dimensions. In matrix terms, completing the square is equivalent to diagonalising the symmetric matrix A via an orthogonal change of variables, which transforms the quadratic form into a diagonal form Σ λᵢ yᵢ². This representation immediately shows the sign of the quadratic form and the directions of the principal axes. Completing the square is often used in statistics to derive the distribution of quadratic forms and in optimisation to simplify the objective function. It is a valuable skill for understanding the structure of quadratic forms.

Quadratic forms can sometimes be simplified through a change of variables or completing the square.

Example:

  Q(x, y) = x² + 2xy + y²

This can be rewritten as:

  Q(x, y) = (x + y)²

This immediately shows that:

  Q(x, y) ≥ 0

Therefore, the quadratic form is positive semidefinite.

This is another way to analyze the behavior of a quadratic form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DIAGONALIZATION OF QUADRATIC FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every symmetric matrix A can be diagonalised by an orthogonal matrix Q, meaning A = Q D Qᵀ, where D is a diagonal matrix of eigenvalues. Substituting this into the quadratic form gives Q(x) = xᵀ Q D Qᵀ x = (Qᵀ x)ᵀ D (Qᵀ x) = yᵀ D y, where y = Qᵀ x. This is a sum of squares: λ₁ y₁² + λ₂ y₂² + ... + λₙ yₙ². This diagonalisation is the essence of principal component analysis (PCA) in statistics and is used to identify the principal directions of a quadratic form. The eigenvalues are the squared lengths of the axes of the ellipsoid Q(x) = 1, and the eigenvectors give the orientations. This decomposition simplifies many problems, including testing for definiteness, finding extrema, and understanding the geometry of the form.

A symmetric matrix can be diagonalized using an orthogonal matrix.

If A is symmetric, then:

  A = Q D Qᵀ

where:
  • Q contains orthonormal eigenvectors
  • D is a diagonal matrix containing eigenvalues

Substituting into the quadratic form:

  xᵀ A x = xᵀ Q D Qᵀ x

Let:

  y = Qᵀ x

Then:

  xᵀ A x = yᵀ D y

Therefore:

  yᵀ D y = λ₁y₁² + λ₂y₂² + ... + λₙyₙ²

This makes the behavior of the quadratic form much easier to understand.

────────────────────────────────────────────────────────────────────────────────

Example of Diagonalization

Suppose:

  A = [2  0]
      [0  3]

It is already diagonal.

Therefore:

  Q(x, y) = [x  y] [2  0] [x]
                   [0  3] [y]

This gives:

  Q(x, y) = 2x² + 3y²

The eigenvalues are immediately visible:

  λ₁ = 2,    λ₂ = 3

Since both are positive, the quadratic form is positive definite.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUADRATIC FORMS AND CONIC SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In two dimensions, the general quadratic equation Ax² + Bxy + Cy² + Dx + Ey + F = 0 defines a conic section. The quadratic part, Ax² + Bxy + Cy², is a quadratic form whose matrix [[A, B/2], [B/2, C]] determines the type of conic. The eigenvalues and determinant of this matrix classify the conic: if both eigenvalues have the same sign (matrix definite), the conic is an ellipse (or circle); if the eigenvalues have opposite signs (indefinite), it is a hyperbola; if one eigenvalue is zero (semidefinite), it is a parabola or degenerate conic. This classification is a classic example of how Linear Algebra can simplify analytic geometry. The quadratic form provides a unified framework for studying all conic sections, and the matrix representation makes it easy to apply transformations (rotations, translations) to simplify the equation.

In two dimensions, a quadratic equation can have the general form:

  Ax² + Bxy + Cy² + Dx + Ey + F = 0

The quadratic portion:

  Ax² + Bxy + Cy²

can be represented as a quadratic form.

The matrix:

  [A    B/2]
  [B/2  C]

contains the information about the quadratic part.

Depending on its properties, the equation can describe shapes such as:
  • Ellipse
  • Hyperbola
  • Parabola
  • Circle

Thus, quadratic forms provide a bridge between Linear Algebra and geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUADRATIC FORMS IN MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In machine learning, quadratic forms appear in many contexts, particularly in regularisation, kernel methods, and optimisation. The standard L2 regularisation term is wᵀ w, a simple quadratic form that penalises large weights and improves generalisation. In support vector machines (SVMs), the dual problem involves a quadratic form Q(α) = ½ αᵀ K α − αᵀ 1, where K is the kernel matrix, which must be positive semidefinite. In Gaussian processes, the covariance matrix defines a quadratic form that measures the squared Mahalanobis distance. Quadratic forms also appear in the objective functions of many optimisation algorithms, where the Hessian must be positive definite for convexity. Understanding the definiteness of quadratic forms is thus essential for designing stable and efficient machine learning algorithms, as well as for interpreting the geometry of data representations.

Quadratic forms appear in many Machine Learning methods.

For example, optimization objectives can contain:

  xᵀ A x

They are used in:
  • Regularization
  • Least Squares
  • Covariance analysis
  • Optimization
  • Statistical modeling
  • Support vector methods
  • Gaussian models

A common example is L2 regularization, where the squared magnitude of a parameter vector is used:

  wᵀ w

This is a simple quadratic form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUADRATIC FORMS IN STATISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In statistics, quadratic forms are ubiquitous. The covariance matrix Σ of a random vector is symmetric and positive semidefinite, and the quadratic form (x − μ)ᵀ Σ⁻¹ (x − μ) defines the squared Mahalanobis distance, which measures how many standard deviations a point is from the mean, taking into account correlations. This quadratic form is used in multivariate normal distributions to define the probability density function. Additionally, the sum of squares of residuals in linear regression is a quadratic form in the data. The distribution of quadratic forms of normal random variables is studied via chi‑squared distributions. Quadratic forms also appear in ANOVA and in the analysis of variance. The ability to represent statistical quantities as quadratic forms allows the application of Linear Algebra tools, such as eigenvalue decomposition, to simplify and interpret statistical models.

Quadratic forms are also important in statistics.

For example, the squared distance between a data point x and a mean vector can be measured using a quadratic form.

The Mahalanobis distance is:

  √((x - μ)ᵀ Σ⁻¹ (x - μ))

The expression:

  (x - μ)ᵀ Σ⁻¹ (x - μ)

is a quadratic form.

It accounts for the relationships and scales between variables.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUADRATIC FORMS IN PHYSICS AND ENGINEERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In physics and engineering, quadratic forms arise naturally from energy expressions. The kinetic energy of a system is often a quadratic form in velocities, with the mass matrix as the symmetric matrix. The potential energy of a linear elastic system is a quadratic form in displacements, with the stiffness matrix being symmetric and positive definite. In electrical engineering, the power dissipated in a network is a quadratic form in currents. These quadratic forms are central to the analysis of stability, vibrations, and control systems. For example, Lyapunov stability analysis uses positive definite quadratic forms as Lyapunov functions to prove stability of dynamical systems. The definiteness of these matrices determines whether the system is stable, oscillatory, or unstable. Thus, quadratic forms provide a mathematical language for describing energy and stability in physical systems.

Quadratic forms are used to represent:
  • Energy
  • Distance
  • Stability
  • Physical systems
  • Mechanical models
  • Electrical systems

For example, energy functions often contain squared quantities, which naturally produce quadratic expressions.

In engineering, positive definite quadratic forms can also be used to analyze whether a system is stable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT QUADRATIC FORM CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Quadratic Forms, it is important to understand:

  • Q(x) = xᵀ A x
  • Symmetric Matrices
  • Positive Definite
  • Positive Semidefinite
  • Negative Definite
  • Negative Semidefinite
  • Indefinite
  • Eigenvalues
  • Sylvester's Criterion
  • Diagonalization
  • Hessian Matrices
  • Optimization
  • Conic Sections

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a Quadratic Form is an expression that can be represented in matrix form as:

  Q(x) = xᵀ A x

Quadratic forms are especially useful because they allow complicated quadratic expressions to be analyzed using Linear Algebra.

Their behavior can be studied through:
  • Symmetric matrices
  • Eigenvalues
  • Determinants
  • Principal minors
  • Diagonalization
  • Positive and negative definiteness

The main classifications are:

  • Positive Definite:     xᵀ A x > 0 for x ≠ 0
  • Positive Semidefinite: xᵀ A x ≥ 0
  • Negative Definite:     xᵀ A x < 0 for x ≠ 0
  • Negative Semidefinite: xᵀ A x ≤ 0
  • Indefinite:            Can be positive and negative

Key Tests:

  • Eigenvalues: All positive → positive definite
  • Sylvester's Criterion: All leading principal minors positive → positive definite
  • Determinant Test (2×2): a > 0 and det(A) > 0

Quadratic forms are particularly important in Optimization, where the matrix A determines the curvature of a quadratic function.

Key Relationships:

  • Optimization: f(x) = ½ xᵀ A x - bᵀ x + c
  • Hessian: ∇²f(x) = A
  • Diagonalization: A = Q D Qᵀ
  • Change of variables: y = Qᵀ x → xᵀ A x = λ₁y₁² + ... + λₙyₙ²

The key idea to remember:

  A quadratic form represents a quadratic expression using matrix multiplication, allowing Linear Algebra tools such as eigenvalues, diagonalization, and definiteness to be used to understand its geometry and behavior.
  `,
  examples: [
    "Quadratic form: Q(x) = xᵀ A x",
    "Example: Q(x,y) = x² + 2xy + y² → A = [[1,1],[1,1]]",
    "General 2-var: Q(x,y) = ax² + 2bxy + cy² → A = [[a,b],[b,c]]",
    "Example: 3x² + 4xy + 2y² → A = [[3,2],[2,2]]",
    "3 variables: 2x²+3y²+4z²+2xy-6xz+8yz → A = [[2,1,-3],[1,3,4],[-3,4,4]]",
    "Positive definite: x² + y² → A = [[1,0],[0,1]]",
    "Negative definite: -x² - y² → A = [[-1,0],[0,-1]]",
    "Positive semidefinite: x² → A = [[1,0],[0,0]]",
    "Negative semidefinite: -x² → A = [[-1,0],[0,0]]",
    "Indefinite: x² - y² → A = [[1,0],[0,-1]]",
    "Eigenvalues: all positive → positive definite",
    "Sylvester's criterion: leading principal minors > 0",
    "2×2 test: a > 0 and det(A) > 0 → positive definite",
    "Diagonalization: A = Q D Qᵀ",
    "Optimization: f(x) = ½xᵀAx - bᵀx + c",
    "Classify x^T A x for a given symmetric matrix A",
    "Apply Sylvester's criterion to determine definiteness.",
  ],
};

export default topic;