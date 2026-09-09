const topic = {
  id: "inverses",
  title: "Matrix Inverses",
  summary:
    "Definition, conditions for invertibility, methods (Gauss-Jordan, cofactors) and properties.",
  details: `
A Matrix Inverse is a matrix that reverses the effect of another matrix. It is similar to the reciprocal of a number. For example, the reciprocal of 5 is 1/5 because:

  5(1/5) = 1

In the same way, a matrix A has an inverse A⁻¹ if multiplying the two matrices produces the identity matrix:

  A A⁻¹ = A⁻¹ A = I

The inverse of a matrix is therefore written as A⁻¹.

Not every matrix has an inverse. A matrix must satisfy certain conditions before its inverse exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. IDENTITY MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before understanding matrix inverses, we need to understand the identity matrix. The identity matrix is the matrix equivalent of the number 1 in scalar arithmetic. Just as multiplying any number by 1 leaves it unchanged, multiplying any matrix by the identity matrix leaves it unchanged. The identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere. It acts as the multiplicative identity for matrix multiplication. The size of the identity matrix must match the dimensions of the matrix it is multiplied with. For example, a 2×2 identity matrix has ones on the diagonal and zeros off-diagonal. The identity matrix is denoted by I, and it satisfies A I = I A = A for any conformable matrix A. This property is what makes the identity matrix so useful in defining inverses: we say a matrix A has an inverse A⁻¹ if A A⁻¹ = A⁻¹ A = I.

The identity matrix is the matrix equivalent of the number 1.

For a 2×2 matrix, the identity matrix is:

  I = [1  0]
      [0  1]

For a 3×3 matrix:

  I = [1  0  0]
      [0  1  0]
      [0  0  1]

When a matrix is multiplied by the identity matrix, it remains unchanged:

  A I = I A = A

Therefore, the inverse is defined using the identity matrix:

  A A⁻¹ = I

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES A MATRIX INVERSE DO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The primary purpose of a matrix inverse is to "undo" the effect of a matrix transformation. In the context of solving systems of linear equations, the inverse provides a direct way to find the solution. Given a system A x = b, if we can multiply both sides by A⁻¹, we isolate x. This is analogous to solving 5x = 10 by multiplying both sides by 1/5. The inverse effectively "cancels" the matrix A, leaving the identity matrix times x, which simplifies to x. This algebraic simplicity is why inverses are so valuable theoretically. However, in practice, computing the inverse of large matrices is computationally expensive and can be numerically unstable, so alternative methods like Gaussian elimination or LU decomposition are often preferred. Nevertheless, the conceptual power of the inverse is immense: it shows that if a matrix is invertible, the linear transformation it represents is bijective and can be reversed uniquely.

Suppose we have:

  A x = b

If A has an inverse, we can multiply both sides by A⁻¹:

  A⁻¹ A x = A⁻¹ b

Since A⁻¹ A = I, we obtain:

  I x = A⁻¹ b

Therefore:

  x = A⁻¹ b

This makes matrix inverses extremely useful for solving systems of linear equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INVERSE OF A 2×2 MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a 2×2 matrix, there is a simple closed-form formula for its inverse, provided the determinant is nonzero. The formula is easy to remember: swap the diagonal entries, negate the off-diagonal entries, and divide by the determinant. This formula is a direct consequence of solving the equation A A⁻¹ = I for the four unknown entries of A⁻¹. It is one of the few cases where an explicit inverse formula is practical. The determinant ad - bc appears in the denominator, which explains why the inverse fails when the determinant is zero. This formula is often taught early in linear algebra courses and serves as a concrete illustration of the connection between determinants and invertibility. For larger matrices, no such simple formula exists; instead, we use algorithms like Gauss-Jordan elimination or adjugate methods.

For a matrix:

  A = [a  b]
      [c  d]

the inverse is:

  A⁻¹ = (1/(ad-bc)) · [d  -b]
                      [-c  a]

provided that ad - bc ≠ 0.

The value ad - bc is the determinant of the matrix.

Therefore, det(A) ≠ 0 is required for the inverse to exist.

────────────────────────────────────────────────────────────────────────────────

Example: Finding a 2×2 Inverse

Consider:

  A = [2  1]
      [3  2]

First, calculate the determinant:

  det(A) = (2)(2) - (1)(3) = 4 - 3 = 1

Since det(A) ≠ 0, the matrix has an inverse.

Using the inverse formula:

  A⁻¹ = (1/1) · [2  -1]
                 [-3  2]

Therefore:

  A⁻¹ = [2  -1]
        [-3  2]

We can verify this by multiplying:

  A A⁻¹ = [2  1] [2  -1] = [1  0]
          [3  2] [-3  2]   [0  1]

Therefore, A A⁻¹ = I.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHEN DOES AN INVERSE EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every square matrix has an inverse. The fundamental criterion for invertibility is that the determinant of the matrix must be nonzero. This is a necessary and sufficient condition for a square matrix. The determinant encapsulates information about the volume scaling of the linear transformation and whether the transformation is one-to-one. If the determinant is zero, the transformation collapses space in at least one direction, making it impossible to invert uniquely. Such matrices are called singular or non-invertible. On the other hand, if the determinant is nonzero, the transformation preserves dimension and is bijective, so an inverse exists. In practice, checking the determinant is the first test for invertibility. For matrices larger than 2×2, computing the determinant can be cumbersome, so we often use Gaussian elimination to check if the matrix can be reduced to an identity matrix (i.e., has full rank).

A square matrix has an inverse if and only if its determinant is nonzero.

  det(A) ≠ 0  ⟺  A⁻¹ exists

A matrix with an inverse is called invertible or nonsingular.

A matrix without an inverse is called singular.

Example:

  A = [1  2]
      [2  4]

Its determinant is:

  det(A) = (1)(4) - (2)(2) = 4 - 4 = 0

Since det(A) = 0, the matrix does not have an inverse.

Therefore:

  A is singular

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES A ZERO DETERMINANT PREVENT AN INVERSE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A determinant of zero indicates that the matrix has linearly dependent rows or columns. Geometrically, this means that the transformation associated with the matrix maps space into a lower-dimensional subspace. For example, a 2×2 matrix with determinant zero maps the entire plane onto a line or a single point. When this happens, multiple input vectors can produce the same output vector, so there is no unique way to reverse the transformation. In other words, the mapping is not one-to-one, and thus an inverse cannot exist. Algebraically, the system A x = b may have either no solution or infinitely many solutions when det(A) = 0, because the columns of A do not span the whole space. This loss of information is irreversible; you cannot recover the original input from the output. Hence, the determinant being zero is a definitive sign that the matrix is singular.

A determinant of zero means that the matrix transformation loses some information.

Example:

  A = [1  2]
      [2  4]

The second row is simply twice the first row:

  [2  4] = 2[1  2]

Therefore, the rows do not provide two independent directions.

The transformation effectively collapses the plane into a lower-dimensional space.

Because information has been lost, there is no unique operation that can reverse the transformation.

Therefore:

  det(A) = 0  →  A⁻¹ does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING AN INVERSE USING GAUSS-JORDAN ELIMINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gauss-Jordan elimination is a systematic algorithm for finding the inverse of any invertible matrix. The idea is to augment the matrix A with the identity matrix I, forming [A | I], and then perform elementary row operations to reduce the left side to the identity matrix. The right side then becomes the inverse A⁻¹. This method works for any size and is the standard approach in numerical linear algebra. It is based on the fact that row operations correspond to multiplying on the left by elementary matrices, and applying the same operations to both sides of [A | I] effectively multiplies A by a sequence of matrices that transform A into I, so the product of those matrices is A⁻¹. This method is more reliable than the adjugate formula for larger matrices because it is computationally stable and straightforward to implement. It also gives direct feedback if the matrix is singular: if at some point a row of zeros appears on the left, the matrix is not invertible.

Another important method for finding a matrix inverse is Gauss-Jordan elimination.

Suppose:

  A = [2  1]
      [3  2]

We create an augmented matrix by placing the identity matrix beside A:

  [2  1 | 1  0]
  [3  2 | 0  1]

The goal is to transform the left side into the identity matrix.

After performing elementary row operations, we obtain:

  [1  0 | 2  -1]
  [0  1 | -3  2]

The right side is therefore the inverse:

  A⁻¹ = [2  -1]
        [-3  2]

The general process is:

  [A | I]  →  [I | A⁻¹]

This method is especially useful for larger matrices because the 2×2 shortcut formula does not apply directly to 3×3, 4×4, and larger matrices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. USING THE INVERSE TO SOLVE A SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we have the inverse of a matrix, we can immediately solve any system of linear equations with that coefficient matrix. For a system A x = b, the solution is x = A⁻¹ b. This is particularly efficient when we need to solve many systems with the same A but different b vectors, because we can compute A⁻¹ once and then simply multiply it by each b. However, in practice, for a single system, Gaussian elimination is often faster and more stable than computing the inverse. Nonetheless, the inverse method provides a clean theoretical solution and is useful for small systems or when the inverse is already known. It also illustrates the direct connection between matrix algebra and equation solving. When using the inverse, we must ensure that A is indeed invertible; otherwise, the formula does not apply.

Consider the system:

  2x + y = 5
  3x + 2y = 8

We can write this as A x = b where:

  A = [2  1]    x = [x]    b = [5]
      [3  2]        [y]        [8]

We already know that:

  A⁻¹ = [2  -1]
        [-3  2]

Therefore:

  x = A⁻¹ b

Substitute:

  x = [2  -1] [5] = [2(5) - 1(8)] = [10 - 8] = [2]
      [-3  2] [8]   [-3(5) + 2(8)]   [-15 + 16]   [1]

Therefore:

  x = 2    and    y = 1

We can verify:

  2(2) + 1 = 5  ✓
  3(2) + 2(1) = 8  ✓

So the solution is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. PROPERTIES OF MATRIX INVERSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix inverses obey several algebraic rules that are analogous to those for reciprocals of numbers, but with some important differences due to non‑commutativity. For instance, the inverse of a product reverses the order: (AB)⁻¹ = B⁻¹ A⁻¹. This is because when we multiply AB by its inverse, we need to cancel B first and then A, which is achieved by applying A⁻¹ after B⁻¹. Similarly, the inverse of a transpose is the transpose of the inverse, and the inverse of a scalar multiple scales the inverse appropriately. These properties are useful for simplifying matrix expressions and for proving theorems. They also show that the set of invertible matrices forms a group under multiplication, which is a fundamental structure in mathematics. Understanding these properties allows us to manipulate equations involving inverses with confidence, provided we respect the order of multiplication.

Matrix inverses have several important properties.

Property 1: Inverse of an inverse

  (A⁻¹)⁻¹ = A

Taking the inverse twice returns the original matrix.

Property 2: Inverse of a product

If A and B are invertible, then:

  (AB)⁻¹ = B⁻¹ A⁻¹

Notice that the order is reversed.

Property 3: Inverse of a transpose

  (Aᵀ)⁻¹ = (A⁻¹)ᵀ

Property 4: Inverse of a scalar multiple

For a nonzero scalar c:

  (cA)⁻¹ = (1/c) · A⁻¹

These properties are useful when simplifying complicated matrix expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INVERSE AND LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In linear algebra, a matrix can be viewed as the representation of a linear transformation. When the matrix is invertible, the corresponding linear transformation is bijective—it is both one‑to‑one (injective) and onto (surjective). This means that for every output vector there is exactly one input vector that maps to it. The inverse matrix then represents the inverse transformation, which undoes the original mapping. This perspective is central to many applications: in computer graphics, an invertible transformation can be reversed to return an object to its original state; in robotics, inverse kinematics uses the inverse of a Jacobian matrix to compute joint angles from a desired end‑effector position. The existence of an inverse ensures that no information is lost and that the transformation can be perfectly reversed, which is a crucial property in many physical and computational systems.

A matrix can represent a linear transformation:

  T(x) = A x

If A is invertible, then there is another transformation:

  T⁻¹(x) = A⁻¹ x

that reverses the original transformation.

Therefore:

  A⁻¹ reverses the transformation performed by A

For example, if A transforms an object by stretching it and rotating it, A⁻¹ can reverse those operations.

This is why matrix inverses are extremely important in computer graphics, robotics, geometry, and transformations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INVERSE MATRIX AND LINEAR INDEPENDENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a deep connection between invertibility and linear independence. A square matrix is invertible if and only if its columns are linearly independent, which is also equivalent to its rows being linearly independent. This means that the vectors that form the columns of an invertible matrix span the entire space and do not have any redundancy. If the columns were dependent, the determinant would be zero and the matrix would be singular. This equivalence is powerful because it allows us to test invertibility by checking linear independence, which can often be done by row reduction. It also ties together the concepts of rank, null space, and invertibility: an invertible matrix has full rank (equal to its dimension) and a null space consisting only of the zero vector.

There is also a strong relationship between matrix inverses and linear independence.

For a square matrix A, the following statements are equivalent:

  • A is invertible
  • det(A) ≠ 0
  • The columns of A are linearly independent
  • The rows of A are linearly independent
  • rank(A) = n
  • A x = 0 has only the trivial solution

These are different ways of describing the same fundamental property of a square matrix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INVERSE AND THE NULL SPACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The null space (or kernel) of a matrix is the set of all vectors that are mapped to the zero vector. For an invertible matrix, the only vector that maps to zero is the zero vector itself. This is a direct consequence of the fact that the columns are linearly independent. If A x = 0, multiplying both sides by A⁻¹ gives x = 0. Therefore, the null space of an invertible matrix is trivial—it contains only the zero vector. This property is central to the uniqueness of solutions: if the null space is trivial, then the system A x = b has at most one solution. Conversely, if a matrix has a nontrivial null space, it is not invertible, and there are infinitely many solutions (or none) for some b. The null space therefore provides a direct test for invertibility.

An invertible matrix has a very important property concerning its null space.

If A x = 0, we can multiply both sides by A⁻¹:

  A⁻¹ A x = A⁻¹ 0

Therefore:

  I x = 0

So:

  x = 0

Thus, an invertible matrix has a trivial null space:

  Null(A) = {0}

This is another way of understanding why invertible matrices do not lose information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, an invertible matrix corresponds to a transformation that is a bijection on the space. For example, in two dimensions, such a transformation can stretch, rotate, shear, or reflect the plane, but it never collapses the plane onto a line or a point. The inverse transformation restores the original configuration. If you imagine a grid of points being transformed, an invertible matrix will map the grid to another grid with the same number of points (no points coalesce). A singular matrix, on the other hand, will map the grid into a lower-dimensional shape—for example, all points may be projected onto a single line. When this happens, multiple original points map to the same image point, so the transformation cannot be inverted uniquely. This visual interpretation reinforces the algebraic condition det(A) ≠ 0 and explains why invertible matrices are essential in applications where precise reversibility is required.

A matrix with an inverse represents a transformation that can be completely reversed.

For example, imagine a square or grid being transformed by a matrix.

If the transformation stretches, rotates, or shears the object without collapsing its dimension, an inverse transformation exists.

However, if the transformation squashes a two-dimensional object into a single line, information is lost.

That transformation cannot be reversed uniquely.

This is reflected mathematically by det(A) = 0.

Therefore:

  det(A) ≠ 0  →  transformation is reversible
  det(A) = 0  →  transformation is not reversible

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATIONS OF MATRIX INVERSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrix inverses are not just abstract mathematical objects; they have a wide range of practical applications across many fields. In solving systems of equations, the inverse provides a direct solution. In computer graphics, it is used to undo transformations such as rotations, translations, and scaling. In robotics, inverse matrices are used in coordinate transformations and in calculating inverse kinematics. Engineers use them to solve circuit problems, structural analysis, and control systems. In statistics and machine learning, inverses appear in regression (e.g., normal equations), covariance matrices, and optimization algorithms. In cryptography, invertible matrices are used for encoding and decoding messages. In physics, they appear in coordinate transformations and in the study of symmetries. The ability to compute and use inverses is therefore a fundamental skill for anyone working in quantitative fields.

Matrix inverses have many applications in mathematics, science, and technology.

  1. Systems of Equations
     • Solving A x = b using x = A⁻¹ b

  2. Computer Graphics
     • Reversing transformations (rotations, translations, scaling)

  3. Robotics
     • Converting between coordinate systems
     • Calculating robot movement

  4. Engineering
     • Solving mathematical models involving forces, circuits, structures, and systems

  5. Data Science & Statistics
     • Regression calculations
     • Covariance calculations
     • Optimization

  6. Machine Learning
     • Optimization algorithms
     • Linear regression
     • Transformations and numerical algorithms

  7. Cryptography
     • Encoding and decoding information
     • Invertible matrices allow original data to be recovered

  8. Physics
     • Reversing physical transformations
     • Coordinate transformations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a Matrix Inverse is a matrix that reverses another matrix.

For a matrix A, its inverse A⁻¹ satisfies:

  A A⁻¹ = A⁻¹ A = I

For a 2×2 matrix:

  A = [a  b]
      [c  d]

the inverse is:

  A⁻¹ = (1/(ad-bc)) · [d  -b]
                      [-c  a]

when ad - bc ≠ 0.

The most important condition is:

  det(A) ≠ 0  ⟺  A is invertible

An invertible matrix has:
  • Linearly independent columns
  • Full rank
  • A trivial null space

Key Properties:

  • (A⁻¹)⁻¹ = A
  • (AB)⁻¹ = B⁻¹ A⁻¹
  • (Aᵀ)⁻¹ = (A⁻¹)ᵀ
  • (cA)⁻¹ = (1/c) · A⁻¹

The key idea to remember:

  A matrix inverse reverses the effect of a matrix. If a matrix does not lose information, its transformation can be reversed, and its inverse exists.

Matrix inverses are therefore fundamental to systems of linear equations, determinants, linear transformations, Gaussian elimination, linear independence, rank, computer graphics, engineering, and many applications of Linear Algebra.
  `,
  examples: [
    "Identity matrix: I = [[1,0],[0,1]]",
    "2×2 inverse formula: A⁻¹ = (1/(ad-bc))·[[d,-b],[-c,a]]",
    "Find inverse of A = [[2,1],[3,2]] → A⁻¹ = [[2,-1],[-3,2]]",
    "Check: A A⁻¹ = I",
    "Singular matrix: A = [[1,2],[2,4]] → det = 0 → no inverse",
    "Solve system: 2x+y=5, 3x+2y=8 using inverse → x=2, y=1",
    "Property: (AB)⁻¹ = B⁻¹ A⁻¹",
    "Property: (A⁻¹)⁻¹ = A",
    "Property: (Aᵀ)⁻¹ = (A⁻¹)ᵀ",
    "Invertible ⟺ det(A) ≠ 0 ⟺ columns linearly independent",
    "Invertible matrix has trivial null space: Null(A) = {0}",
    "Compute the inverse of a 2x2 matrix [[a,b],[c,d]]",
    "Use the inverse to solve Ax=b when A is invertible.",
  ],
};

export default topic;