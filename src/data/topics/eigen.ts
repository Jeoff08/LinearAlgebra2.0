const topic = {
  id: "eigen",
  title: "Eigenvalues & Eigenvectors",
  summary:
    "Characteristic polynomial, finding eigenvalues and eigenspaces, algebraic and geometric multiplicity.",
  details: `
Eigenvalues and Eigenvectors are important concepts in Linear Algebra that help us understand how a matrix transforms vectors. They are especially useful because they identify directions that remain unchanged when a linear transformation is applied. Instead of changing direction like most vectors do, an eigenvector is only stretched, compressed, or reversed, while the eigenvalue tells us how much that change occurs. This property is fundamental because it reveals the intrinsic behavior of the transformation: the eigenvectors are the "natural" directions of the matrix, and the eigenvalues are the corresponding scaling factors. In applications, eigenvalues and eigenvectors are used to analyze stability, to reduce dimensionality in data, to solve differential equations, and to understand the long-term behavior of dynamical systems. They are among the most important concepts in all of linear algebra.

The relationship between a matrix, an eigenvector, and an eigenvalue is expressed by the equation:

  A v = λ v

where:
  • A is a square matrix
  • v is a nonzero eigenvector
  • λ is the corresponding eigenvalue

In simple terms, when matrix A acts on an eigenvector v, the result is the same vector direction multiplied by a number λ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concept of eigenvalues and eigenvectors is best introduced through a simple diagonal matrix, where the standard basis vectors are already eigenvectors. A diagonal matrix acts independently on each coordinate axis, scaling each one by a different factor. The equation A v = λ v means that the vector v is only scaled, not rotated or sheared, when the transformation is applied. For a general matrix, most vectors will change direction, but there will be certain special vectors that only get scaled. These special vectors are the eigenvectors. The eigenvalues tell us the scaling factor for each eigenvector. This property makes eigenvalues and eigenvectors the natural "coordinate system" for the matrix, revealing its structure. Understanding this basic idea is the first step toward grasping more advanced concepts like diagonalization and the spectral theorem.

Consider the matrix:

  A = [2  0]
      [0  3]

Take the vector:

  v₁ = [1]
       [0]

Multiplying the matrix by the vector gives:

  A v₁ = [2  0] [1] = [2]
         [0  3] [0]   [0]

This can also be written as:

  2[1] = [2]
    [0]   [0]

Therefore, λ = 2 is an eigenvalue, and v₁ = [1, 0]ᵀ is its corresponding eigenvector.

Now consider:

  v₂ = [0]
       [1]

Then:

  A v₂ = [2  0] [0] = [0] = 3[0]
         [0  3] [1]   [3]   [1]

Therefore, λ = 3 is another eigenvalue, with v₂ = [0, 1]ᵀ as its eigenvector.

This example shows the main idea: the matrix changes the length of these vectors but does not change their direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW TO FIND EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the eigenvalues of a matrix, we use the characteristic equation. The characteristic equation is derived from the fact that if A v = λ v, then (A - λI)v = 0. For a nonzero eigenvector v to exist, the matrix A - λI must be singular, which means its determinant must be zero. This gives us the characteristic polynomial det(A - λI) = 0, whose roots are the eigenvalues. The characteristic polynomial is an essential tool because it reduces the problem of finding eigenvalues to solving a polynomial equation. The degree of the polynomial equals the size of the matrix, so an n×n matrix has n eigenvalues, counting multiplicities (though some may be complex). This polynomial method works for any square matrix and is the foundation for many numerical algorithms that compute eigenvalues.

To find the eigenvalues of a matrix, we use the characteristic equation:

  det(A - λI) = 0

where I is the identity matrix.

Consider the matrix:

  A = [4  1]
      [2  3]

First, construct A - λI.

The identity matrix is:

  I = [1  0]
      [0  1]

Therefore:

  A - λI = [4-λ   1  ]
           [ 2   3-λ]

Now calculate the determinant:

  det(A - λI) = (4-λ)(3-λ) - (1)(2)

Expanding gives:

  12 - 4λ - 3λ + λ² - 2 = 0

Therefore:

  λ² - 7λ + 10 = 0

Factor the equation:

  (λ - 5)(λ - 2) = 0

Therefore, the eigenvalues are:

  λ₁ = 5    and    λ₂ = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HOW TO FIND EIGENVECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once the eigenvalues are known, the corresponding eigenvectors are found by solving the homogeneous system (A - λI)v = 0. This system will have infinitely many solutions (since the determinant is zero), and any nonzero solution is an eigenvector. The set of all solutions for a given eigenvalue forms a subspace called the eigenspace. For each eigenvalue, we choose a basis for its eigenspace, which provides a set of linearly independent eigenvectors. The dimension of the eigenspace is the geometric multiplicity of the eigenvalue. When solving (A - λI)v = 0, we typically set free variables and express the solution in parametric form. This process is essentially finding the null space of A - λI. The eigenvectors we find are not unique; any scalar multiple of an eigenvector is also an eigenvector, and the choice of basis can vary.

After finding the eigenvalues, we find the corresponding eigenvectors by solving:

  (A - λI)v = 0

────────────────────────────────────────────────────────────────────────────────

Eigenvector for λ = 5

We have:

  A - 5I = [4-5    1  ] = [-1   1]
           [ 2   3-5]    [ 2  -2]

Let:

  v = [x]
      [y]

Then:

  [-1   1] [x] = [0]
  [ 2  -2] [y]   [0]

From the first equation:

  -x + y = 0

Therefore:

  y = x

Choosing x = 1, we get y = 1.

Thus, an eigenvector corresponding to λ = 5 is:

  v₁ = [1]
       [1]

────────────────────────────────────────────────────────────────────────────────

Eigenvector for λ = 2

Now:

  A - 2I = [4-2   1  ] = [2   1]
           [ 2   3-2]   [2   1]

Solving:

  2x + y = 0

gives:

  y = -2x

Choosing x = 1, we get y = -2.

Therefore:

  v₂ = [ 1]
       [-2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUMMARY OF EIGENVALUES AND EIGENVECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

So the matrix:

  A = [4  1]
      [2  3]

has:

  λ₁ = 5    with    v₁ = [1]
                         [1]

and

  λ₂ = 2    with    v₂ = [ 1]
                         [-2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvectors have an important geometric meaning. Imagine a matrix as a machine that transforms vectors. When most vectors enter the machine, their direction and length may both change. However, eigenvectors behave differently. Their direction remains on the same line, although they may become longer, shorter, or point in the opposite direction. The eigenvalue tells us what happens to the vector's magnitude: if λ > 1, the vector is stretched; if 0 < λ < 1, it is compressed; if λ = 1, it remains unchanged; if λ = 0, it is mapped to zero; and if λ < 0, it reverses direction while being scaled by |λ|. This geometric interpretation is invaluable for understanding transformations: the eigenvectors define the axes along which the transformation acts most simply, and the eigenvalues quantify the action. In physics, this corresponds to modes of vibration or principal stresses; in data science, it corresponds to principal components that capture the most variance.

Eigenvectors have an important geometric meaning.

Imagine a matrix as a machine that transforms vectors. When most vectors enter the machine, their direction and length may both change.

However, eigenvectors behave differently. Their direction remains on the same line, although they may become longer, shorter, or point in the opposite direction.

The eigenvalue tells us what happens to the vector's magnitude:

  • If λ > 1, the vector is stretched.
  • If 0 < λ < 1, the vector is compressed.
  • If λ = 1, the vector remains unchanged.
  • If λ = 0, the vector is transformed into the zero vector.
  • If λ < 0, the vector reverses direction while being scaled by |λ|.

For example:

  A v = 3 v

means that the eigenvector is stretched by a factor of 3.

On the other hand:

  A v = -2 v

means that the vector is reversed and its length is multiplied by 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EIGENVALUES, EIGENVECTORS, AND DIAGONALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalues and eigenvectors are directly connected to diagonalization. If a matrix has enough linearly independent eigenvectors, those eigenvectors can be placed into a matrix P, while the eigenvalues can be placed along the diagonal of a matrix D. The relationship A = P D P⁻¹ expresses the fact that the transformation is a simple scaling in the eigenvector basis. This is one of the most powerful applications of eigenvalues and eigenvectors: they allow us to simplify the matrix to its essence. Diagonalization is possible precisely when the eigenvectors form a basis. In such cases, the matrix is said to be diagonalizable. The diagonal form D reveals the scaling factors, while P provides the change-of-basis information. Many problems in linear algebra, from computing powers to solving differential equations, become trivial once the matrix is diagonalized.

Eigenvalues and eigenvectors are directly connected to diagonalization.

If a matrix has enough linearly independent eigenvectors, those eigenvectors can be placed into a matrix P, while the eigenvalues can be placed along the diagonal of a matrix D.

The relationship is:

  A = P D P⁻¹

For example, using:

  A = [4  1]
      [2  3]

we found the eigenvalues λ₁ = 5, λ₂ = 2 and eigenvectors v₁ = [1, 1]ᵀ, v₂ = [1, -2]ᵀ.

Therefore:

  P = [1   1 ]
      [1  -2 ]

and:

  D = [5  0]
      [0  2]

Thus:

  A = P D P⁻¹

This is why understanding eigenvalues and eigenvectors is essential before studying diagonalization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ALGEBRAIC MULTIPLICITY AND GEOMETRIC MULTIPLICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When an eigenvalue appears more than once in the characteristic equation, we need to distinguish between algebraic multiplicity and geometric multiplicity. The algebraic multiplicity is the number of times an eigenvalue appears as a root of the characteristic polynomial. The geometric multiplicity is the number of linearly independent eigenvectors associated with that eigenvalue, which is the dimension of the eigenspace. For diagonalizability, the geometric multiplicity must equal the algebraic multiplicity for every eigenvalue. If the geometric multiplicity is less than the algebraic multiplicity, the matrix is defective and cannot be diagonalized. This distinction is crucial in many applications: defective matrices represent transformations that cannot be fully decoupled into independent scaling directions, and they require more complex analysis, such as the Jordan canonical form.

When an eigenvalue appears more than once in the characteristic equation, we need to distinguish between algebraic multiplicity and geometric multiplicity.

The algebraic multiplicity is the number of times an eigenvalue appears as a root of the characteristic polynomial.

For example:

  (λ - 3)² = 0

means that λ = 3 has algebraic multiplicity 2.

The geometric multiplicity is the number of linearly independent eigenvectors associated with that eigenvalue.

This distinction is important when determining whether a matrix is diagonalizable.

A matrix is diagonalizable when there are enough linearly independent eigenvectors to form a basis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPLEX EIGENVALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalues do not always have to be real numbers. Some matrices have complex eigenvalues. For example, a rotation matrix has no real eigenvectors because no nonzero real vector remains on the same line after rotation. However, the characteristic polynomial always has complex roots by the fundamental theorem of algebra, so every square matrix has eigenvalues in the complex numbers. Complex eigenvalues often occur in conjugate pairs for real matrices, and they correspond to rotation and scaling in the real plane. They are essential in many applications, such as analyzing oscillations in mechanical systems and stability in control theory. Complex eigenvalues and eigenvectors extend the power of linear algebra to a broader range of problems and are a key reason why complex vector spaces are studied.

Eigenvalues do not always have to be real numbers. Some matrices have complex eigenvalues.

For example, consider the rotation matrix:

  A = [0  -1]
      [1   0]

This matrix represents a 90° rotation. It has no real eigenvectors because there is no nonzero real vector that remains on the same line after a 90° rotation.

However, its eigenvalues are:

  λ = i   and   λ = -i

This demonstrates the connection between eigenvalues and complex vector spaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. APPLICATIONS OF EIGENVALUES AND EIGENVECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eigenvalues and eigenvectors have many important applications.

  1. Machine Learning & Data Science
     • Principal Component Analysis (PCA)
     • Identifying important directions in a dataset
     • Determining how much information is associated with those directions

  2. Computer Graphics
     • Analyzing transformations
     • Scaling and geometric behavior

  3. Physics
     • Studying physical systems
     • Energy states
     • Quantum mechanics

  4. Engineering
     • Stability analysis
     • Vibrations
     • Structures
     • Dynamic systems

  5. Network Analysis
     • Understanding the structure and behavior of networks

  6. Differential Equations
     • Solving systems of linear differential equations

  7. Computer Science
     • Algorithms involving graphs
     • Dimensionality reduction
     • Image processing
     • Search systems
     • Data analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SIMPLE REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine analyzing the movement of a mechanical system. The system can be represented using a matrix A. When we find its eigenvectors, each eigenvector can represent a special direction or mode of behavior of the system. The corresponding eigenvalue tells us how strongly that mode behaves. For example, if an eigenvalue is large, the corresponding mode may grow or become more significant. If an eigenvalue has a magnitude smaller than 1, repeated applications of the transformation may cause that mode to decrease. This makes eigenvalues useful for studying stability and long-term behavior. In practice, the eigenvalues of a system matrix determine whether the system is stable (all eigenvalues in the left half-plane) or unstable. This is a fundamental tool in control theory and engineering.

Imagine analyzing the movement of a mechanical system. The system can be represented using a matrix A. When we find its eigenvectors, each eigenvector can represent a special direction or mode of behavior of the system.

The corresponding eigenvalue tells us how strongly that mode behaves.

For example, if an eigenvalue is large, the corresponding mode may grow or become more significant. If an eigenvalue has a magnitude smaller than 1, repeated applications of the transformation may cause that mode to decrease.

This makes eigenvalues useful for studying stability and long-term behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, eigenvalues and eigenvectors describe special directions and scaling behaviors of a matrix transformation.

The fundamental equation is:

  A v = λ v

To find them:

  1. Find the characteristic equation: det(A - λI) = 0
  2. Solve for the eigenvalues λ
  3. For each eigenvalue, solve: (A - λI)v = 0
  4. Find the corresponding eigenvectors

The key idea is:

  Eigenvector = direction that stays the same
  Eigenvalue = amount of scaling in that direction

Eigenvalues and eigenvectors are fundamental because they connect several major Linear Algebra topics, including determinants, diagonalization, change of basis, complex vector spaces, linear transformations, and applications in science and technology.
  `,
  examples: [
    "Find eigenvalues of A = [[2,0],[0,3]] → λ₁ = 2, λ₂ = 3",
    "Find eigenvectors for A = [[2,0],[0,3]] → v₁ = [1,0]ᵀ, v₂ = [0,1]ᵀ",
    "Characteristic equation: det(A - λI) = 0",
    "Find eigenvalues of [[4,1],[2,3]] → λ₁ = 5, λ₂ = 2",
    "Find eigenvectors for λ₁ = 5: v₁ = [1,1]ᵀ",
    "Find eigenvectors for λ₂ = 2: v₂ = [1,-2]ᵀ",
    "Algebraic multiplicity vs Geometric multiplicity",
    "Complex eigenvalues: rotation matrix A = [[0,-1],[1,0]] → λ = ±i",
    "PCA uses eigenvectors and eigenvalues for dimensionality reduction",
    "Diagonalization uses eigenvalues and eigenvectors: A = PDP⁻¹",
    "Compute eigenvectors for each eigenvalue.",
  ],
};

export default topic;