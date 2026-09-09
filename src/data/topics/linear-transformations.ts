const topic = {
  id: "linear-transformations",
  title: "Linear Transformations",
  summary:
    "Definition, properties, kernels, ranges, and matrix representations of linear maps.",
  details: `
A Linear Transformation is a function between vector spaces that preserves the two fundamental operations of Linear Algebra: vector addition and scalar multiplication. In simple terms, a linear transformation takes a vector as an input and produces another vector as an output while maintaining the basic structure of the vector space. This preservation of structure is what makes linear transformations so powerful: they allow us to model a wide variety of phenomena, from geometric operations like rotation and scaling to abstract mappings between function spaces. The linearity conditions ensure that the transformation respects the linear combinations of vectors, which means that the image of any linear combination is the linear combination of the images. This property is the cornerstone of nearly every application of linear algebra, including computer graphics, machine learning, and engineering. Understanding linear transformations is essential for grasping how matrices encode linear maps and how to analyse their properties.

A linear transformation is commonly written as:

  T: V → W

where V is the domain and W is the codomain.

The transformation takes a vector v from V and maps it to another vector T(v) in W.

The two conditions that must be satisfied are:

  1. T(u + v) = T(u) + T(v)  (preserves addition)
  2. T(c v) = c T(v)         (preserves scalar multiplication)

for all vectors u, v and scalars c.

These properties mean that a linear transformation preserves the structure of vector operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SIMPLE EXAMPLE OF A LINEAR TRANSFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A simple linear transformation is the scaling operation that multiplies every component of a vector by a constant factor. This transformation is linear because it satisfies both the addition and scalar multiplication properties, which can be verified directly. Such transformations are fundamental in computer graphics where they are used to resize objects, and in physics where they represent uniform scaling of coordinates. The example T(x,y) = (2x, 2y) doubles both coordinates, effectively enlarging any shape by a factor of two without changing its orientation or shape. This operation is a special case of a diagonal matrix transformation and illustrates how linear transformations can be expressed as matrix multiplication. By examining such simple examples, we build intuition for more complex transformations like rotations, shears, and projections.

Consider the transformation:

  T(x, y) = (2x, 2y)

This transformation simply doubles every component of a vector.

Example:

  v = [2]
      [3]

Applying T:

  T(v) = [4]
         [6]

Therefore:

  T([2]) = [4]
    [3]    [6]

This is a linear transformation because it preserves vector addition and scalar multiplication.

────────────────────────────────────────────────────────────────────────────────

Checking the Addition Property

Suppose:

  u = [1]    v = [3]
      [2]        [4]

First:

  u + v = [4]
          [6]

Applying T:

  T(u + v) = [8]
             [12]

Now calculate them separately:

  T(u) = [2]    T(v) = [6]
         [4]          [8]

Therefore:

  T(u) + T(v) = [8]
                [12]

Thus:

  T(u + v) = T(u) + T(v)

The addition property is satisfied.

────────────────────────────────────────────────────────────────────────────────

Checking the Scalar Multiplication Property

Let:

  c = 3    and    v = [2]
                      [1]

First:

  c v = [6]
        [3]

Applying the transformation:

  T(c v) = [12]
           [6]

Now calculate:

  T(v) = [4]
         [2]

Then:

  c T(v) = [12]
           [6]

Therefore:

  T(c v) = c T(v)

The scalar multiplication property is also satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MATRIX REPRESENTATION OF A LINEAR TRANSFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important facts about Linear Transformations is that many transformations can be represented using matrices. This connection is the bridge between abstract linear algebra and practical computation. Given a linear transformation T: ℝⁿ → ℝᵐ, there exists a unique m×n matrix A such that T(x) = A x. The columns of A are the images of the standard basis vectors. This representation allows us to perform transformations by simple matrix multiplication, which is efficient and amenable to numerical analysis. Conversely, any matrix defines a linear transformation. Thus, the study of linear transformations is essentially the study of matrices. This matrix viewpoint is central to nearly all applications, as it enables us to use algorithms like Gaussian elimination, eigenvalue decomposition, and singular value decomposition to analyse and manipulate transformations.

If T: ℝⁿ → ℝᵐ, then there is an m×n matrix A such that:

  T(x) = A x

This allows us to study transformations using matrix operations.

Example:

  T(x, y) = (2x + y, 3x + 4y)

This can be written as:

  [2x + y]  =  [2  1] [x]
  [3x + 4y]    [3  4] [y]

Therefore, the matrix representing T is:

  A = [2  1]
      [3  4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear transformations have a rich geometric interpretation: they can stretch, rotate, reflect, shear, or project vectors in space. Each transformation is defined by its effect on the coordinate axes, which is captured by the matrix. For instance, a scaling matrix expands or contracts along the axes, while a rotation matrix turns vectors around the origin by a fixed angle. Reflections flip vectors across a line, and shears slide one coordinate relative to another. These geometric operations are fundamental in computer graphics, where they are used to manipulate objects in 2D and 3D scenes. Understanding the geometry behind linear transformations helps us visualise abstract concepts like eigenvalues and eigenvectors, which indicate the directions in which a transformation acts purely by scaling. This visual intuition is invaluable for fields ranging from physics to animation.

Linear transformations can change the size, direction, and orientation of vectors and geometric objects.

Common linear transformations include:

  • Scaling
  • Rotation
  • Reflection
  • Shearing
  • Projection

────────────────────────────────────────────────────────────────────────────────

Scaling Transformation

A scaling transformation changes the size of a vector or geometric object.

A general two-dimensional scaling matrix is:

  A = [a  0]
      [0  b]

Example:

  A = [2  0]
      [0  3]

Then:

  T(x, y) = (2x, 3y)

The x-direction is scaled by 2, and the y-direction is scaled by 3.

────────────────────────────────────────────────────────────────────────────────

Rotation Transformation

A rotation transformation changes the direction of vectors while preserving their lengths.

The standard two-dimensional rotation matrix for an angle θ is:

  A = [cos(θ)  -sin(θ)]
      [sin(θ)   cos(θ)]

Example - 90° Counterclockwise Rotation:

  A = [0  -1]
      [1   0]

Consider:

  v = [1]
      [0]

Then:

  A v = [0]
        [1]

Therefore, the vector originally pointing to the right is rotated upward.

────────────────────────────────────────────────────────────────────────────────

Reflection Transformation

A reflection transformation flips a vector or geometric object across a line.

Example - Reflection across the x-axis:

  A = [1   0]
      [0  -1]

For:

  v = [2]
      [3]

We obtain:

  A v = [ 2]
        [-3]

The x-coordinate remains the same while the y-coordinate changes sign.

────────────────────────────────────────────────────────────────────────────────

Shearing Transformation

A shearing transformation shifts one coordinate depending on another coordinate.

Example - Horizontal Shear:

  A = [1  k]
      [0  1]

For k = 2 and:

  v = [1]
      [2]

We obtain:

  A v = [5]
        [2]

The vertical coordinate remains unchanged while the horizontal coordinate shifts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ZERO VECTOR PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every linear transformation must map the zero vector to the zero vector. This necessary condition follows directly from the linearity properties: T(0) = T(0 · v) = 0 · T(v) = 0. This simple test is often the first check to determine whether a function could be linear. For example, an affine function like T(x) = 2x + 3 fails this test because T(0) = 3 ≠ 0, so it cannot be linear. However, not every function that maps zero to zero is linear; additional checks for addition and scalar multiplication are required. The zero‑vector property is also important for understanding the kernel: the zero vector is always in the kernel, but if there are other vectors as well, the transformation is not one‑to‑one. This property underlines the fact that linear transformations are homogeneous and additive, a trait that makes them so tractable.

Every linear transformation must map the zero vector to the zero vector.

That means:

  T(0) = 0

Why?

Because:

  T(0) = T(0 · v) = 0 · T(v) = 0

This is an important way to quickly determine whether a function could be a linear transformation.

Example:

  T(x) = 2x + 3

is not a linear transformation because:

  T(0) = 3 ≠ 0

Therefore:

  T(x) = 2x + 3 is not linear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. KERNEL OR NULL SPACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The kernel (or null space) of a linear transformation is the set of all vectors that are mapped to the zero vector. It reveals the "redundancy" of the transformation: vectors in the kernel are collapsed to nothing. The kernel is a subspace of the domain, and its dimension is the nullity of the transformation. For a matrix transformation T(x) = A x, the kernel is the solution set of A x = 0, which is fundamental in understanding the solvability of linear systems. If the kernel contains only the zero vector, the transformation is injective (one‑to‑one). Otherwise, multiple inputs produce the same output, and the transformation loses information. The kernel is also crucial in the Rank‑Nullity Theorem, which relates the dimensions of the kernel and the image to the dimension of the domain.

The kernel of a linear transformation is the set of all vectors that are mapped to the zero vector.

It is written as:

  ker(T) = {v ∈ V | T(v) = 0}

Example:

  T(x, y) = x + y

To find the kernel, set:

  T(x, y) = 0

Therefore:

  x + y = 0

So:

  y = -x

The kernel consists of vectors of the form:

  [ x]
  [-x]

Thus:

  ker(T) = span{ [1] }
                 [-1]

The kernel tells us which input vectors are completely collapsed to zero by the transformation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RANGE OR IMAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The range (or image) of a linear transformation is the set of all possible output vectors that can be obtained by applying the transformation to some vector in the domain. It is a subspace of the codomain and its dimension is the rank of the transformation. For a matrix transformation T(x) = A x, the range is exactly the column space of A. The range tells us which outputs are achievable; if the range is the entire codomain, the transformation is surjective (onto). In applications, the range represents the set of all possible states or results that can be produced by a system. Understanding the range is essential for solving equations: the system A x = b has a solution if and only if b lies in the range of A. This concept is central to least‑squares problems, where we seek the closest point in the range to a given b.

The range or image of a linear transformation is the set of all possible output vectors.

It is written as:

  Range(T) = {T(v) | v ∈ V}

For a matrix transformation:

  T(x) = A x

the range is the column space of A.

Therefore:

  Range(T) = Col(A)

The range tells us which output vectors can actually be produced by the transformation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ONE-TO-ONE LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear transformation is one‑to‑one (injective) if distinct input vectors always produce distinct output vectors. This property ensures that no information is lost: the transformation preserves the identity of each vector. For linear transformations, injectivity is equivalent to the kernel being trivial (containing only the zero vector). If the kernel contains a nonzero vector, then that vector and the zero vector both map to zero, so the transformation is not one‑to‑one. In terms of matrices, a square matrix A is injective iff it is invertible (det(A) ≠ 0). For non‑square matrices, injectivity means the number of columns is at most the number of rows and the columns are linearly independent. One‑to‑one transformations are essential in applications like coding theory, where unique decoding is required, and in solving systems where we want a unique solution.

A linear transformation is one-to-one if different input vectors always produce different output vectors.

Mathematically:

  T(u) = T(v)  implies  u = v

For a linear transformation, this is equivalent to having a trivial kernel:

  ker(T) = {0}

Therefore, if the only vector mapped to zero is the zero vector itself, the transformation is one-to-one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ONTO LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear transformation is onto (surjective) if every vector in the codomain is the image of at least one input vector. This means the range covers the entire target space. For a matrix transformation, onto means the columns of A span the codomain, i.e., the rank equals the number of rows. If the transformation is onto, then for any b in the codomain, the equation T(x) = b has at least one solution. Onto transformations are used in control systems where we need to reach any desired state, and in signal processing where we want to reconstruct signals from their transformed versions. When a linear transformation is both one‑to‑one and onto, it is a bijection and is invertible, which is the most desirable situation because it allows unique inversion.

A linear transformation is onto if every vector in the codomain can be produced by the transformation.

In other words:

  Range(T) = W

where W is the codomain.

For a matrix:

  A: ℝⁿ → ℝᵐ

the transformation is onto if the columns of A span ℝᵐ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INVERTIBLE LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear transformation is invertible if there exists another linear transformation that reverses its action. This inverse transformation, denoted T⁻¹, satisfies T⁻¹(T(v)) = v for all v in the domain. For matrix transformations, invertibility is equivalent to the matrix being square and having a non‑zero determinant, which guarantees that A⁻¹ exists. Invertible transformations are bijections: they are both one‑to‑one and onto. They preserve the dimension of the space and are often used to change coordinates (change of basis) or to solve systems of equations. The existence of an inverse is crucial in many practical problems, such as cryptography (where we need to decode messages) and in computer graphics (where we need to undo transformations). Not all transformations are invertible; those that are not are said to be singular.

A linear transformation is invertible if there exists another transformation T⁻¹ that reverses it.

This means:

  T⁻¹(T(v)) = v

For matrix transformations:

  T(x) = A x

the transformation is invertible when A has an inverse:

  A⁻¹ A = A A⁻¹ = I

For a square matrix, this occurs when:

  det(A) ≠ 0

Thus, matrix inverses and linear transformations are closely connected.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPOSITION OF LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two or more linear transformations can be combined through composition, where the output of one transformation becomes the input of the next. Composition of linear transformations is itself linear, and its matrix representation is the product of the individual matrices. However, composition is not commutative: the order in which transformations are applied matters, which is why matrix multiplication is not commutative. Composition is associative, allowing us to group transformations in any way. In practice, composition is used to combine multiple operations, such as rotating then scaling an object in computer graphics, or applying a series of filters in signal processing. Understanding composition is essential for analysing complex systems that involve multiple sequential transformations.

Two or more linear transformations can be combined through composition.

Suppose:

  T(x) = A x    and    S(x) = B x

The composition S ∘ T means we apply T first and then S.

Therefore:

  (S ∘ T)(x) = S(T(x)) = S(A x) = B(A x)

So:

  (S ∘ T)(x) = (B A) x

This demonstrates why the order of matrix multiplication matters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LINEAR TRANSFORMATIONS AND BASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear transformation is completely determined by its action on a basis of the domain. This is a powerful principle: instead of defining the transformation for every possible vector, we only need to specify its values on the basis vectors. The matrix of the transformation is constructed by placing the images of the basis vectors as columns (in the standard basis). This property is what makes matrices so useful: they encode the transformation's effect on the entire space in a compact form. Moreover, if we change the basis, the matrix representation changes via a similarity transformation, but the underlying linear map remains the same. This basis‑independence is the foundation for diagonalisation and for understanding eigenvalues and eigenvectors.

A linear transformation is completely determined by what it does to the vectors in a basis.

Example - Standard basis for ℝ²:

  e₁ = [1]    e₂ = [0]
       [0]         [1]

Suppose:

  T(e₁) = [2]    T(e₂) = [1]
          [3]           [4]

Then the matrix representing T is constructed by placing these transformed basis vectors as columns:

  A = [2  1]
      [3  4]

Therefore:

  T(x) = A x

This is a very important principle:

  To understand a linear transformation, it is enough to know how it transforms the basis vectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RANK-NULLITY THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear transformations are also connected to the Rank-Nullity Theorem. This theorem states that for a linear transformation T: V → W, the dimension of the domain V equals the sum of the dimension of the kernel and the dimension of the range. In matrix terms, nullity(A) + rank(A) = n, where n is the number of columns of A. This theorem is a fundamental conservation law: the "lost" dimensions (nullity) plus the "retained" dimensions (rank) account for the original dimension. It is used to determine the solvability of systems, to analyse the structure of linear maps, and to check for invertibility. The theorem also has practical implications in data science, where it helps in understanding the effective dimensionality of data after a transformation.

Linear transformations are also connected to the Rank-Nullity Theorem.

For a linear transformation:

  T: V → W

the theorem states:

  dim(ker T) + dim(Range T) = dim(V)

For a matrix A, this becomes:

  nullity(A) + rank(A) = n

where n is the number of columns of A.

This theorem tells us how the dimensions of the kernel and range are related.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATIONS OF LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Transformations are used throughout mathematics, science, and technology.

  1. Computer Graphics
     • Rotation, scaling, reflection, projection, and movement of objects

  2. Game Development
     • Transforming position and orientation of characters, cameras, and objects

  3. Robotics
     • Describing position and orientation of robotic arms and components

  4. Computer Vision
     • Manipulating images
     • Converting between coordinate systems

  5. Engineering
     • Modeling physical systems
     • Coordinate changes

  6. Machine Learning
     • Representing changes in feature spaces
     • Manipulating vectors and matrices

  7. Data Science
     • Changing data representations
     • Dimensionality reduction

  8. Physics
     • Describing changes in coordinate systems
     • Physical states

  9. Economics
     • Modeling relationships between variables
     • Input-output analysis

  10. Control Systems
     • System analysis
     • State-space representations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a Linear Transformation is a function between vector spaces that preserves vector addition and scalar multiplication.

The two defining properties are:

  T(u + v) = T(u) + T(v)
  T(c v) = c T(v)

A linear transformation can often be represented using a matrix:

  T(x) = A x

Important concepts associated with linear transformations:

  • Kernel — vectors mapped to zero
  • Range/Image — all possible outputs
  • Rank — dimension of the range
  • Nullity — dimension of the kernel
  • One-to-one — different inputs produce different outputs
  • Onto — every vector in the codomain can be reached
  • Invertible — the transformation can be reversed
  • Composition — multiple transformations can be combined

Key Matrices for Transformations:

  • Scaling:    A = [a  0]
                    [0  b]

  • Rotation:   A = [cos(θ)  -sin(θ)]
                    [sin(θ)   cos(θ)]

  • Reflection: A = [1   0]
                    [0  -1]

  • Shear:      A = [1  k]
                    [0  1]

The key idea to remember:

  A Linear Transformation is a rule that transforms vectors while preserving the fundamental structure of addition and scalar multiplication. Matrices provide a powerful way to represent and study these transformations.

Understanding Linear Transformations provides a foundation for studying matrix representations, kernel and range, rank-nullity, change of basis, eigenvalues and eigenvectors, diagonalization, projections, and many real-world applications of Linear Algebra.
  `,
  examples: [
    "Linear transformation: T(x,y) = (2x,2y) doubles both components",
    "Matrix representation: T(x) = Ax",
    "Scaling: A = [[2,0],[0,3]] scales x by 2 and y by 3",
    "Rotation: A = [[cos(θ),-sin(θ)],[sin(θ),cos(θ)]]",
    "Reflection: A = [[1,0],[0,-1]] reflects across x-axis",
    "Shear: A = [[1,k],[0,1]] horizontal shear",
    "Kernel: ker(T) = {v | T(v) = 0}",
    "Range: Range(T) = Col(A)",
    "One-to-one iff ker(T) = {0}",
    "Onto iff Range(T) = W",
    "Invertible iff det(A) ≠ 0",
    "Composition: (S∘T)(x) = B A x",
    "Rank-Nullity: dim(ker T) + dim(Range T) = dim(V)",
    "Represent a rotation in R^2 with a matrix",
    "Find the kernel of a projection transformation.",
  ],
};

export default topic;