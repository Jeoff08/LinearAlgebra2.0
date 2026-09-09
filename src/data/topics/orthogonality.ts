const topic = {
  id: "orthogonality",
  title: "Orthogonality",
  summary:
    "Orthogonal and orthonormal sets, complements, orthogonal matrices, and Gram–Schmidt process.",
  details: `
Orthogonality is an important concept in Linear Algebra that describes when two vectors are perpendicular or at right angles to each other.

In ordinary geometry, two lines are perpendicular when they meet at a 90° angle. In Linear Algebra, we extend this idea to vectors and vector spaces using the inner product, commonly called the dot product.

Two vectors are orthogonal when their inner product is equal to zero:

  u · v = 0

Therefore, the main idea of orthogonality is:

  Two vectors are orthogonal when they are perpendicular to each other, which means their inner product is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLE OF ORTHOGONAL VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The simplest way to understand orthogonality is through the standard basis vectors in ℝ², which are clearly perpendicular. Two vectors are orthogonal if their dot product is zero, meaning they are at right angles. This concept generalizes the geometric notion of perpendicularity to any dimension and is fundamental for many applications. When vectors are orthogonal, they carry independent information and do not interfere with each other, which simplifies many computations in linear algebra, signal processing, and data analysis. Orthogonality is the basis for orthogonal projections, decompositions, and the construction of orthonormal bases that make coordinate representations particularly simple.

Consider the vectors:

  u = [1]    v = [0]
      [0]        [1]

Their dot product is:

  u · v = (1)(0) + (0)(1) = 0

Therefore:

  u · v = 0

Since their dot product is zero:

  u ⟂ v

Thus, the vectors are orthogonal.

Geometrically, one vector points horizontally and the other vertically, forming a 90° angle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DOT PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The dot product is the primary algebraic tool for determining orthogonality. It takes two vectors and produces a scalar that combines their magnitudes and the cosine of the angle between them. For vectors in ℝⁿ, the dot product is the sum of the products of corresponding components. If the dot product is zero, the vectors are orthogonal, meaning they are perpendicular. This condition is independent of the lengths of the vectors  only their directions matter. The dot product is linear in each argument, symmetric, and positive definite, which makes it an inner product. In addition to testing orthogonality, the dot product is used to define lengths (norms), angles, and projections, making it one of the most important operations in linear algebra and its applications.

For two vectors:

  u = [u₁]    v = [v₁]
      [u₂]        [v₂]
      [⋮ ]        [⋮ ]
      [uₙ]        [vₙ]

their dot product is:

  u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ

If u · v = 0, then:

  u ⟂ v

────────────────────────────────────────────────────────────────────────────────

Example Using the Dot Product

Consider:

  u = [2]    v = [ 3]
      [3]        [-2]

Calculate the dot product:

  u · v = (2)(3) + (3)(-2) = 6 - 6 = 0

Therefore:

  u · v = 0

Thus:

  u ⟂ v

The two vectors are orthogonal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ORTHOGONALITY AND ANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The dot product is intimately related to the angle between two vectors through the formula u · v = ||u|| ||v|| cos(θ). This formula generalizes the familiar geometric definition of the dot product from physics and provides a way to compute angles in any dimension. When the angle θ is 90°, cos(90°) = 0, so the dot product becomes zero, which is exactly the condition for orthogonality. Thus, orthogonality is a special case of the angle relationship. This connection allows us to interpret orthogonality geometrically: two vectors are orthogonal if and only if they are perpendicular. This geometric insight extends to higher dimensions and is crucial for visualizing abstract vector spaces. The angle formula also enables us to define the concept of angle between arbitrary vectors in inner product spaces.

The formula is:

  u · v = ||u|| ||v|| cos(θ)

where:
  • ||u|| is the length of u
  • ||v|| is the length of v
  • θ is the angle between the vectors

If the vectors are orthogonal:

  θ = 90°

Since cos(90°) = 0, we obtain:

  u · v = 0

This explains mathematically why the dot product of orthogonal vectors is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ORTHOGONAL SET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An orthogonal set is a collection of vectors in which every pair of distinct vectors is orthogonal. Such sets are valuable because they are automatically linearly independent (provided none of the vectors is zero), which means they can form a basis for the subspace they span. Orthogonal sets simplify many computations: the coordinates of a vector in an orthogonal basis can be found by simple projections without solving a linear system. This property is exploited in the Gram-Schmidt process, which constructs orthogonal bases from arbitrary linearly independent sets. Orthogonal sets also arise in signal processing, where orthogonal signals can be transmitted simultaneously without interference. Understanding orthogonal sets is a stepping stone to orthonormal sets, where the vectors are also normalized to unit length.

A collection of vectors is called an orthogonal set if every pair of distinct vectors in the set is orthogonal.

Example:

  v₁ = [1]    v₂ = [0]    v₃ = [0]
       [0]         [1]         [0]
       [0]         [0]         [1]

We have:

  v₁ · v₂ = 0
  v₁ · v₃ = 0
  v₂ · v₃ = 0

Therefore:

  {v₁, v₂, v₃} is an orthogonal set.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ORTHOGONAL BASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An orthogonal basis is a basis of a vector space (or subspace) whose vectors are mutually orthogonal. Such a basis is particularly convenient because the representation of any vector in that basis is straightforward: the coefficients are obtained by projecting the vector onto each basis direction using dot products, rather than solving a system of equations. This simplifies many linear algebra computations, including coordinate transformations and least-squares approximations. Orthogonal bases are also the starting point for constructing orthonormal bases by normalizing each vector. In applications, orthogonal bases are used in Fourier series, where sine and cosine functions form an orthogonal basis for function spaces, and in principal component analysis, where the principal components are an orthogonal basis for the data.

A basis is called an orthogonal basis if all of its basis vectors are mutually orthogonal.

Example:

  e₁ = [1]    e₂ = [0]
       [0]         [1]

form an orthogonal basis for ℝ².

This basis is particularly useful because vectors can be represented using simple projections onto the basis vectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ORTHONORMAL VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthonormal vectors take the concept of orthogonality one step further by also requiring that each vector has unit length. A set of orthonormal vectors is both orthogonal and normalized, which means their dot products satisfy uᵢ · uⱼ = 0 for i ≠ j and ||uᵢ|| = 1 for each i. Orthonormal bases are the most convenient type of basis because the coordinates of a vector are simply the dot products with the basis vectors. This makes many operations, such as computing projections, distances, and angles, extremely simple. Orthonormal bases are used in numerical linear algebra for stability, in quantum mechanics to represent states, and in signal processing to decompose signals into orthogonal components. The Gram-Schmidt process can be used to convert any linearly independent set into an orthonormal set.

Two vectors are orthonormal if they are:
  1. Orthogonal to each other
  2. Each has length 1

For a vector u:

  ||u|| = 1

Therefore, an orthonormal set satisfies:

  uᵢ · uⱼ = 0    when i ≠ j
  ||uᵢ|| = 1

The standard basis vectors:

  [1]    [0]    [0]
  [0],   [1],   [0]
  [0]    [0]    [1]

are an example of an orthonormal basis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ORTHOGONAL PROJECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthogonal projection is the process of decomposing a vector into components that are parallel and perpendicular to a given direction or subspace. The projection of u onto v gives the component of u that lies in the direction of v. The formula proj_v(u) = (u · v / v · v) · v computes this projection. The remaining component, u − proj_v(u), is orthogonal to v. Orthogonal projections are fundamental in many areas: they are used in least-squares regression to find the closest point in a subspace, in computer graphics to compute shadows and reflections, and in signal processing to decompose signals. The projection is the best approximation of u by a scalar multiple of v in the sense of minimizing the Euclidean distance. This concept generalizes to projecting onto higher-dimensional subspaces.

The projection of u onto v is:

  proj_v(u) = (u · v / v · v) · v

This gives the component of u that points in the direction of v.

────────────────────────────────────────────────────────────────────────────────

Example of Orthogonal Projection

Consider:

  u = [3]    v = [1]
      [4]        [0]

First calculate the dot product:

  u · v = (3)(1) + (4)(0) = 3

Next:

  v · v = (1)(1) + (0)(0) = 1

Therefore:

  proj_v(u) = (3/1) · [1] = [3]
                      [0]   [0]

Thus:

  proj_v(u) = [3]
              [0]

The remaining component:

  [0]
  [4]

is perpendicular to v.

Therefore:

  u = projection component + orthogonal component

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ORTHOGONAL DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthogonal decomposition expresses any vector as the sum of two orthogonal components: one that lies in a given subspace and one that is perpendicular to it. This is a fundamental result in linear algebra and inner product spaces, known as the orthogonal decomposition theorem. It allows us to separate the part of a vector that is "explained" by a subspace from the residual that is not. This decomposition is unique and is the basis for least-squares approximation, where the residual is orthogonal to the subspace of the model. In geometry, it corresponds to breaking a vector into its components along and perpendicular to a line or plane. Orthogonal decomposition is also used in signal processing to separate signals from noise and in optimization to find the closest point in a convex set.

A vector can often be separated into two perpendicular components.

  u = u_∥ + u_⊥

where:
  • u_∥ is parallel to a given vector or subspace
  • u_⊥ is perpendicular to it

This is called orthogonal decomposition.

It is extremely useful in geometry, Linear Algebra, numerical computation, and least-squares problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ORTHOGONAL COMPLEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The orthogonal complement of a subspace W is the set of all vectors that are orthogonal to every vector in W. It is denoted by W⊥. This concept is crucial in the fundamental theorem of linear algebra, which states that the null space and the row space are orthogonal complements, as are the left null space and the column space. The orthogonal complement provides a way to decompose the entire vector space into two orthogonal subspaces: W and W⊥. This decomposition is used in least-squares to separate the part of the data that fits the model from the residual. The dimension of W⊥ is the dimension of the ambient space minus the dimension of W. Orthogonal complements also play a role in solving systems of equations and in defining projections.

The orthogonal complement of a subspace W consists of all vectors that are orthogonal to every vector in W.

It is written as:

  W⊥

Example: Suppose:

  W = span{ [1] }
            [0]

The vectors orthogonal to W are vectors of the form:

  [0]
  [y]

Therefore:

  W⊥ = span{ [0] }
              [1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ORTHOGONAL MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An orthogonal matrix is a square matrix whose columns (and rows) form an orthonormal set. This property is equivalent to Qᵀ Q = I, which means the inverse of Q is its transpose. Orthogonal matrices are the linear algebra analogue of rotations and reflections: they preserve the length of vectors and the angles between them. This makes them extremely important in numerical linear algebra because they do not amplify errors during computations. They are used in QR decomposition, eigenvalue algorithms, and in solving least-squares problems. In computer graphics, orthogonal matrices are used to represent rotations and reflections of objects. The determinant of an orthogonal matrix is either +1 (rotation) or −1 (reflection), indicating whether orientation is preserved.

A square matrix Q is called an orthogonal matrix if:

  Qᵀ Q = I

This also means:

  Q⁻¹ = Qᵀ

Example:

  Q = [0  1]
      [1  0]

Its transpose is:

  Qᵀ = [0  1]
       [1  0]

Multiplying:

  Qᵀ Q = [1  0]
         [0  1]

Therefore:

  Q is orthogonal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PROPERTIES OF ORTHOGONAL MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthogonal matrices have several key properties that make them highly useful. First, they preserve the Euclidean norm: ||Q x|| = ||x|| for any vector x. This means that the transformation does not stretch or shrink vectors it only rotates or reflects them. Second, they preserve inner products: (Q x) · (Q y) = x · y, so angles are also preserved. This is why orthogonal transformations are often called isometries. Third, the product of two orthogonal matrices is orthogonal, and the inverse of an orthogonal matrix is its transpose, which is easy to compute. These properties make orthogonal matrices ideal for numerical computations, where stability and accuracy are paramount. They also underlie the QR decomposition and the singular value decomposition, both of which are central to modern computational linear algebra.

They preserve vector lengths:

  ||Q x|| = ||x||

They also preserve angles:

  (Q x) · (Q y) = x · y

Therefore, multiplying a vector by an orthogonal matrix can rotate or reflect it without changing its length.

This is why orthogonal matrices are extremely important in geometry and numerical Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ORTHOGONALITY AND QR DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QR decomposition is a factorization of a matrix A into the product of an orthogonal matrix Q and an upper triangular matrix R. The columns of Q form an orthonormal basis for the column space of A, and R contains the coefficients needed to express the columns of A in that basis. This decomposition is a direct application of the Gram-Schmidt process and is one of the most important tools in numerical linear algebra. It is used to solve least-squares problems stably, to compute eigenvalues, and to perform matrix inversions. The orthogonality of Q ensures that the decomposition is numerically stable, as orthogonal transformations do not amplify errors. QR decomposition is the method of choice for many linear algebra libraries (e.g., LAPACK) because of its reliability and efficiency.

A matrix A can be factored as:

  A = Q R

where Q has orthonormal columns and R is upper triangular.

Example:

  A = [1  1]
      [1  0]

The columns of A can be transformed into orthonormal vectors to construct Q.

The matrix R then contains the coefficients needed to reconstruct A.

QR Decomposition is important for:
  • Least Squares
  • Numerical Linear Algebra
  • Eigenvalue algorithms
  • Orthogonalization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GRAM-SCHMIDT PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Gram-Schmidt process is a systematic algorithm for converting a linearly independent set of vectors into an orthogonal or orthonormal set that spans the same subspace. The idea is to take each vector in the original set and subtract its projections onto the previously orthogonalized vectors, removing all components that are already represented. This leaves only the new direction that is orthogonal to the span of the previous vectors. After processing all vectors, the resulting set is orthogonal. Optionally, each vector can be normalized to unit length, yielding an orthonormal basis. The Gram-Schmidt process is the foundation of QR decomposition and is widely used in numerical analysis, though for large problems a modified version is used to improve numerical stability. It demonstrates the power of orthogonal projections in constructing simple bases.

Suppose we have v₁, v₂.

First, set:

  u₁ = v₁

Then remove from v₂ its component in the direction of u₁:

  u₂ = v₂ - proj_u₁(v₂)

Now:

  u₁ · u₂ = 0

To make the vectors unit length, normalize them:

  eᵢ = uᵢ / ||uᵢ||

The resulting vectors form an orthonormal set.

────────────────────────────────────────────────────────────────────────────────

Example of Gram-Schmidt

Consider:

  v₁ = [1]    v₂ = [1]
       [1]         [0]

First:

  u₁ = v₁

Calculate the projection:

  proj_u₁(v₂) = (v₂ · u₁ / u₁ · u₁) · u₁

We have:

  v₂ · u₁ = (1)(1) + (0)(1) = 1
  u₁ · u₁ = 1² + 1² = 2

Therefore:

  proj_u₁(v₂) = (1/2) · [1] = [1/2]
                        [1]   [1/2]

Then:

  u₂ = [1] - [1/2] = [1/2]
       [0]   [1/2]   [-1/2]

Thus:

  u₂ = [1/2]
       [-1/2]

Now:

  u₁ · u₂ = 0

so the vectors are orthogonal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ORTHOGONALITY AND LEAST SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The connection between orthogonality and least squares is fundamental. When solving an overdetermined system A x = b, the least‑squares solution x̂ minimizes the squared error ||b − A x||². Geometrically, the vector A x̂ is the orthogonal projection of b onto the column space of A. Consequently, the residual error e = b − A x̂ is orthogonal to the column space, meaning it is perpendicular to every column of A. This orthogonality condition leads directly to the normal equations: Aᵀ A x̂ = Aᵀ b. Thus, the normal equations are a direct algebraic expression of the fact that the residual must be orthogonal to the column space. This geometric interpretation not only justifies the method but also provides a clear way to visualise and derive it. Orthogonality is therefore the core principle underlying least‑squares approximation, one of the most widely used techniques in data analysis and engineering.

Suppose a system:

  A x = b

does not have an exact solution.

Instead, we find an approximation:

  A x̂

that is as close as possible to b.

The error vector is:

  e = b - A x̂

At the least-squares solution, the error is orthogonal to the column space of A:

  e ⟂ Col(A)

This gives the fundamental condition:

  Aᵀ(b - A x̂) = 0

Rearranging gives the normal equations:

  Aᵀ A x̂ = Aᵀ b

Therefore, orthogonality provides the mathematical foundation for least-squares approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ORTHOGONALITY IN GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthogonality is a natural extension of the geometric notion of perpendicularity to higher dimensions. In two and three dimensions, we can visualise orthogonal vectors as those meeting at right angles. In higher dimensions, the concept remains the same but is no longer directly visualisable; nevertheless, the algebraic condition of a zero dot product continues to hold. This abstraction allows us to apply geometric reasoning to spaces of arbitrary dimension, which is essential in many fields such as data science, where data often lies in high-dimensional spaces. Orthogonality in geometry also includes the idea of orthogonal lines, planes, and hyperplanes, which are used in projections, reflections, and rotations. This geometric viewpoint underpins many applications, including computer graphics, where orthogonal transformations are used to manipulate objects without distortion.

Two-dimensional vectors can be perpendicular:

  [1] ⟂ [0]
  [0]    [1]

Three-dimensional vectors can also be perpendicular:

  [1] ⟂ [0]
  [0]    [1]
  [0]    [0]

The concept extends to higher-dimensional vector spaces even though we cannot visualize them directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ORTHOGONALITY IN COMPUTER SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer science, orthogonality appears in numerous contexts. In computer graphics, orthogonal matrices are used to represent rotations and reflections, enabling efficient manipulation of 3D objects without distorting their shapes. In machine learning, orthogonal basis functions are used in feature engineering and in algorithms like principal component analysis (PCA), where the principal components form an orthonormal basis that captures the directions of maximum variance. In signal processing, orthogonal signals can be transmitted simultaneously without interference, which is the basis for frequency-division multiplexing. In numerical algorithms, orthogonal transformations are preferred for their stability properties, as they preserve norms and do not amplify errors. The concept of orthogonality also appears in database theory, coding theory, and optimisation, making it a versatile tool across the discipline.

Computer Graphics
  • Rotation, reflection, coordinate transformations
  • 3D graphics and computer vision
  • Orthogonal transformations help represent and manipulate image and spatial data

Machine Learning
  • Orthogonal vectors and matrices appear in dimensionality reduction
  • Optimization and numerical algorithms

Signal Processing
  • Orthogonal signals can be separated because their inner product is zero

Data Science
  • Orthogonal bases are useful for representing data efficiently

Numerical Linear Algebra
  • Orthogonal transformations preserve numerical accuracy and vector lengths

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ORTHOGONAL SIGNALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concept of orthogonality extends beyond finite-dimensional vectors to functions and signals. Two functions f(x) and g(x) are said to be orthogonal over an interval [a,b] if their inner product, defined as the integral of their product, is zero. This is analogous to the dot product of vectors, with the integral playing the role of summation. Orthogonal functions are fundamental in signal processing, communications, and applied mathematics. For example, sine and cosine functions of different frequencies are orthogonal, which allows the Fourier series to decompose any periodic signal into a sum of independent frequency components. Orthogonal signals can be multiplexed and separated without interference, making them essential in modern communication systems. This generalization demonstrates the power of the inner product framework and its applicability to infinite-dimensional spaces.

Functions and signals can also be orthogonal.

Two functions f(x) and g(x) can be considered orthogonal over an interval if:

  ∫ₐᵇ f(x)g(x) dx = 0

This is similar to the vector condition:

  u · v = 0

Therefore, the concept of orthogonality extends beyond finite-dimensional vectors.

It is important in:
  • Fourier analysis
  • Signal processing
  • Differential equations
  • Communications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ORTHONORMAL BASIS AND COORDINATE REPRESENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An orthonormal basis provides the simplest possible coordinate representation of vectors. If {e₁, e₂, ..., eₙ} is an orthonormal basis, then any vector x can be expressed as x = (x · e₁)e₁ + (x · e₂)e₂ + ... + (x · eₙ)eₙ. The coefficients are simply the dot products of x with each basis vector. This is a direct consequence of the orthonormality conditions: the dot products of different basis vectors are zero, and each basis vector has unit length. This representation is computationally efficient and numerically stable, as it avoids solving linear systems. It is used in signal processing to represent signals in terms of orthonormal basis functions (e.g., wavelets), in data science for principal component analysis, and in quantum mechanics for state expansions. The simplicity of orthonormal bases makes them the preferred choice whenever possible.

If {e₁, e₂, ..., eₙ} is an orthonormal basis, then a vector x can be represented as:

  x = (x · e₁)e₁ + (x · e₂)e₂ + ... + (x · eₙ)eₙ

This is extremely useful because the coefficients are obtained simply through dot products.

For an arbitrary basis, finding these coefficients can be more complicated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHY ORTHOGONALITY IS USEFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Orthogonality simplifies mathematical calculations in many ways. When vectors are orthogonal, their contributions to a sum are independent, allowing them to be treated separately. This property is exploited in orthogonal projections, which give the best approximation in a subspace, and in orthogonal decompositions, which separate a vector into independent components. Orthonormal bases provide the simplest coordinates, making computations easy and accurate. Orthogonal matrices preserve lengths and angles, which is crucial for numerical stability. In signal processing, orthogonal signals can be transmitted without interference, enabling efficient communication. In machine learning, orthogonal features carry independent information, reducing redundancy. Overall, orthogonality is a powerful tool that reduces complexity, improves numerical stability, and provides deep geometric insight across many fields.

  • If vectors are orthogonal, their contributions can be separated cleanly.
  • An orthonormal basis provides particularly simple coordinates.
  • Orthogonal matrices preserve lengths and angles.
  • Orthogonal projections provide the closest point in a subspace.
  • Orthogonal decomposition separates a vector into independent perpendicular components.

Therefore:

  Orthogonality simplifies geometry, computation, and approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT ORTHOGONALITY CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To master orthogonality, one must be familiar with a core set of concepts that recur throughout linear algebra and its applications. These include the dot product as the primary tool for testing orthogonality, the definitions of orthogonal and orthonormal sets and bases, the ability to compute orthogonal projections and decompositions, and the understanding of orthogonal complements and orthogonal matrices. Additionally, the Gram-Schmidt process and QR decomposition are essential algorithms that build orthonormal bases and factor matrices using orthogonality. Least squares relies on the orthogonality of residuals to the column space. These concepts form the foundation for advanced topics in inner product spaces, numerical methods, and applications such as signal processing, computer graphics, and machine learning. A solid grasp of orthogonality is indispensable for any student or practitioner of linear algebra.

When studying Orthogonality, it is important to understand:

  • Dot Product
  • Orthogonal Vectors
  • Orthogonal Sets
  • Orthogonal Basis
  • Orthonormal Basis
  • Orthogonal Projection
  • Orthogonal Decomposition
  • Orthogonal Complement
  • Orthogonal Matrices
  • Gram-Schmidt Process
  • QR Decomposition
  • Least Squares

These topics form the foundation for more advanced work involving inner product spaces and numerical Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, Orthogonality describes the relationship between vectors, matrices, or other mathematical objects that are perpendicular or independent in a particular inner-product sense.

For vectors, the fundamental condition is:

  u · v = 0

An orthonormal set additionally satisfies:

  ||uᵢ|| = 1

Orthogonality is used to construct:
  • Orthogonal bases
  • Orthonormal bases
  • Orthogonal projections
  • Orthogonal complements
  • Orthogonal matrices

It is also fundamental to:
  • Gram-Schmidt Process
  • QR Decomposition
  • Least Squares
  • Numerical Linear Algebra
  • Computer Graphics
  • Signal Processing
  • Machine Learning
  • Data Analysis

Key Formulas:

  • Dot product:           u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ
  • Orthogonal:            u · v = 0
  • Norm:                  ||u|| = √(u · u)
  • Projection:            proj_v(u) = (u · v / v · v) · v
  • Orthogonal complement: W⊥ = {v | v · w = 0 for all w ∈ W}
  • Orthogonal matrix:     Qᵀ Q = I
  • Gram-Schmidt:          u₁ = v₁, u₂ = v₂ - proj_u₁(v₂)
  • QR Decomposition:      A = Q R

The key idea to remember:

  Orthogonality is the Linear Algebra concept of perpendicularity, where two vectors are orthogonal when their inner product is zero. It provides a powerful way to separate, simplify, and represent mathematical information.
  `,
  examples: [
    "Orthogonal vectors: [1,0]ᵀ · [0,1]ᵀ = 0",
    "Dot product: [2,3]ᵀ · [3,-2]ᵀ = 6 - 6 = 0",
    "Orthogonal set: {[1,0,0]ᵀ, [0,1,0]ᵀ, [0,0,1]ᵀ}",
    "Orthonormal basis: e₁ = [1,0]ᵀ, e₂ = [0,1]ᵀ",
    "Projection: proj_v(u) = (u·v / v·v) · v",
    "Example: proj_[1,0]ᵀ([3,4]ᵀ) = [3,0]ᵀ",
    "Orthogonal complement: W⊥ = {v | v · w = 0 for all w ∈ W}",
    "Orthogonal matrix: Qᵀ Q = I",
    "Gram-Schmidt: u₁ = v₁, u₂ = v₂ - proj_u₁(v₂)",
    "QR Decomposition: A = Q R",
    "Least squares: error e = b - A x̂ is orthogonal to Col(A)",
    "Normal equations: Aᵀ A x̂ = Aᵀ b",
    "Orthogonal signals: ∫ f(x)g(x) dx = 0",
    "Apply Gram–Schmidt to two vectors",
    "Verify whether a set is orthonormal.",
  ],
};

export default topic;