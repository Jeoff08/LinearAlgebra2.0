const topic = {
  id: "change-of-basis",
  title: "Change of Basis",
  summary:
    "Coordinate vectors, transition matrices, similar matrices and coordinate transformations.",
  details: `
Change of Basis is a concept in Linear Algebra that involves representing the same vector using a different set of basis vectors. A basis provides a coordinate system for describing vectors in a vector space. Changing the basis does not change the actual vector; instead, it changes the way we describe or represent that vector. This is analogous to describing a location on Earth using different coordinate systems (e.g., latitude/longitude vs. UTM coordinates) – the physical location remains the same, but its numerical representation changes. In mathematics, choosing an appropriate basis can simplify computations, reveal structural properties, and lead to deeper insights about linear transformations and their representations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A BASIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A basis of a vector space is a set of vectors that are linearly independent and span the entire space. Linear independence means that no vector in the set can be written as a linear combination of the others, ensuring that the representation of any vector in terms of the basis is unique. Spanning means that every vector in the space can be expressed as a linear combination of the basis vectors. The number of vectors in a basis is the dimension of the space. For example, in ℝ², any two linearly independent vectors form a basis. The standard basis consists of the unit vectors along the coordinate axes. When we choose a basis, we assign coordinates to each vector: the coefficients of the linear combination that produce the vector. These coordinates depend on the chosen basis; the same vector will have different coordinates in different bases.

Example - Standard Basis of ℝ²:

  E = { [1], [0] }
        [0]   [1]

Using this standard basis, the vector:

  v = [3]
      [2]

can be written as:

  3[1] + 2[0] = [3]
   [0]    [1]   [2]

Therefore, the coordinates of v relative to the standard basis are:

  [v]ₑ = [3]
         [2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CREATING ANOTHER BASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We are not forced to use the standard basis; we can select any set of linearly independent vectors that span the space. For instance, in ℝ², the vectors [1,1]ᵀ and [1,-1]ᵀ are linearly independent and thus form a basis. This basis is often convenient because its vectors are orthogonal, which can simplify certain calculations. To represent a given vector in a new basis, we need to find the coefficients that express the vector as a linear combination of the basis vectors. This involves solving a system of linear equations, which can be done using the inverse of the basis matrix. The process of finding these coefficients is essentially a change of coordinates. It highlights that the same geometric vector can have many different numerical representations, each corresponding to a different coordinate system.

Example - Alternative Basis B for ℝ²:

  B = { [1], [ 1] }
        [1]   [-1]

These two vectors form a basis for ℝ² because they are linearly independent.

Now suppose we want to represent:

  v = [3]
      [1]

using basis B. We want to find numbers c₁ and c₂ such that:

  v = c₁[1] + c₂[ 1]
         [1]    [-1]

Expanding gives:

  [3] = [c₁ + c₂]
  [1]   [c₁ - c₂]

Therefore, we need to solve:

  c₁ + c₂ = 3
  c₁ - c₂ = 1

Adding the two equations gives:

  2c₁ = 4
  c₁ = 2

Substituting c₁ = 2 into the first equation:

  2 + c₂ = 3
  c₂ = 1

Therefore, the vector can be represented in basis B as:

  [v]ᴮ = [2]
         [1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental concept is that changing the basis does not change the underlying vector; it only changes its coordinate representation. The vector exists independently of any basis, just as a point in space exists independently of the coordinate system used to label it. When we change the basis, we are simply re‑expressing the same vector in a new language of coordinates. This is not merely an academic exercise: different bases can make certain problems much easier to solve. For example, a matrix that is complicated in the standard basis may become diagonal in a basis of eigenvectors. Similarly, physical problems often benefit from choosing a coordinate system aligned with the symmetry of the system. Understanding that the vector itself is invariant, while its coordinates are basis‑dependent, is key to mastering linear algebra and its applications.

Notice that the actual vector has not changed:

  v = [3]  ← Same vector
      [1]

Only its coordinate representation has changed.

  
        SAME VECTOR, DIFFERENT COORDINATES                      
  

A useful analogy: A physical location on Earth does not change when we describe it using latitude and longitude instead of another coordinate system. The location is the same, but its numerical representation is different. Similarly, a vector remains the same even when we change the basis used to describe it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CHANGE-OF-BASIS MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A change‑of‑basis matrix (also called a transition matrix) is a matrix that converts coordinate vectors from one basis to another. Suppose we have two bases B and C for the same vector space. The change‑of‑basis matrix from B to C, denoted P_(C←B), has columns equal to the coordinates of the basis vectors of B expressed in the basis C. Then, for any vector v, we have [v]ᶜ = P_(C←B) · [v]ᴮ. This matrix is invertible, and its inverse P_(B←C) converts from C to B. The change‑of‑basis matrix is a powerful tool: it allows us to translate any linear algebra problem from one coordinate system to another. Moreover, if we have a matrix representing a linear transformation in one basis, we can compute its representation in another basis using the formula A_C = P_(C←B) · A_B · P_(B←C). This is the basis for similarity transformations, which are central to diagonalization and many theoretical results.

A change-of-basis matrix is used to convert the coordinates of a vector from one basis to another.

Suppose we have two bases B and C. A change-of-basis matrix allows us to transform:

  [v]ᴮ → [v]ᶜ

The general relationship can be written as:

  [v]ᶜ = P_(C←B) · [v]ᴮ

Here, P_(C←B) is the matrix that converts coordinates from basis B to basis C.

Example: Using basis B:

  B = { [1], [ 1] }
        [1]   [-1]

We can construct the basis matrix:

  P_B = [1   1]
        [1  -1]

The columns of this matrix are the basis vectors.

If [v]ᴮ = [2], then multiplying by P_B gives the standard coordinates:
          [1]

  P_B · [v]ᴮ = [1   1] [2] = [2 + 1] = [3]
                [1  -1] [1]   [2 - 1]   [1]

So the coordinates [2] in basis B represent the same vector as [3] in the standard basis.
                  [1]                              [1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY IS CHANGE OF BASIS IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Change of basis is not just a theoretical curiosity; it is a practical tool that simplifies many problems. When a linear transformation is represented as a matrix in the standard basis, that matrix may be dense and difficult to analyze. However, if we choose a basis consisting of eigenvectors of the transformation, the matrix becomes diagonal, and its powers, exponentials, and inverses become trivial to compute. This is the essence of diagonalization. More generally, choosing an appropriate basis can reveal the structure of a linear transformation, such as its invariant subspaces, its rank, or its singular values. In numerical linear algebra, change of basis is used in algorithms like QR decomposition and the singular value decomposition (SVD) to improve stability and efficiency. In applied fields, it allows us to work in coordinates that are natural for the problem, such as using Fourier bases for signal processing or spherical harmonics for physics. Thus, change of basis is a fundamental skill that enables both theoretical insight and practical computation.

Change of Basis is important because some problems become much easier when they are expressed using a suitable basis. A complicated matrix or transformation may become simpler when represented using a different coordinate system.

Applications include:

  1. Diagonalization
  2. Computer Graphics
  3. Physics
  4. Engineering
  5. Robotics
  6. Data Science
  7. Computer Science

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIAGONALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Diagonalization is a prime example of the power of change of basis. Given a square matrix A, if it has n linearly independent eigenvectors, those eigenvectors form a basis for the space. In that eigenvector basis, the matrix representation becomes a diagonal matrix D, whose diagonal entries are the eigenvalues. The change‑of‑basis matrix P has the eigenvectors as columns, and we have A = P D P⁻¹. This decomposition is extremely useful: powers of A become Aᵏ = P Dᵏ P⁻¹, and functions like exp(A) can be computed efficiently. Moreover, diagonalization reveals the intrinsic scaling behaviour of the transformation along each eigenvector. In many applications, such as solving systems of differential equations or analysing the stability of dynamical systems, diagonalization transforms a complicated coupling problem into a set of independent scalar problems.

If a matrix has enough linearly independent eigenvectors, we can use those eigenvectors as a new basis. In that basis, the matrix can become diagonal:

  A = P D P⁻¹

The diagonal matrix D is often much easier to work with than the original matrix A.

Example: If D = [2  0]
                 [0  3]

calculating powers of D is simple:

  Dⁿ = [2ⁿ   0 ]
       [0   3ⁿ]

This is one reason Change of Basis is closely connected to eigenvalues, eigenvectors, and diagonalization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CHANGE OF BASIS IN ROBOTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Robotics is a field where multiple coordinate systems are used simultaneously. A robot arm has joints that move relative to one another; the position of the end‑effector is often computed using a chain of transformations from the base coordinate system through each joint. Each joint has its own local coordinate system, and the transformations between these systems are change‑of‑basis operations. By representing the position of a point in different coordinate frames, we can compute how the arm moves and where the tool is in global space. Similarly, in mobile robotics, a robot's sensors (cameras, LIDAR) provide data in their own coordinate frames, which must be transformed to a common world frame. Change of basis matrices (often called transformation matrices) are the fundamental tool for these conversions, enabling the robot to build a consistent map of its environment and plan its actions.

Different coordinate systems can make calculations easier depending on the problem.

Example: A robotics system may use:
  • One coordinate system for the robot's base
  • Another for the position of a robotic arm

Transformations between these coordinate systems allow the system to understand how objects are positioned relative to one another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CHANGE OF BASIS IN DATA SCIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In data science, change of basis is central to dimensionality reduction techniques like Principal Component Analysis (PCA). PCA finds a new orthonormal basis (the principal components) ordered by the amount of variance they capture from the data. The original data, represented in the standard basis (e.g., pixel coordinates or raw features), is projected onto this new basis. The first few principal components capture most of the variance, so we can discard the rest, reducing dimensionality while preserving essential information. This new basis often reveals hidden structure in the data and improves the performance of machine learning algorithms. Similarly, in signal processing, the Fourier transform is a change of basis from the time domain to the frequency domain, which simplifies the analysis of signals. Thus, change of basis is a powerful tool for feature extraction, compression, and interpretation of high‑dimensional data.

Principal Component Analysis (PCA) is essentially a change of basis technique:

  • The original data is represented in the standard basis
  • PCA finds a new basis (principal components) that better captures the variance in the data
  • This new basis often requires fewer dimensions to represent the same information

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHANGE OF BASIS IN COMPUTER GRAPHICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Computer graphics heavily rely on change of basis to render 3D scenes. Objects are typically modelled in their own local coordinate systems (object space). To place them in a scene, they are transformed into world space using a model matrix. Then, a view matrix transforms them into camera space (the camera's coordinate system). Finally, a projection matrix projects them onto screen coordinates. Each of these steps is a change of basis, represented by a 4×4 transformation matrix. The ability to switch between these coordinate systems allows for efficient manipulation, viewing, and shading of objects. For example, lighting calculations are often performed in camera space or world space, depending on the algorithm. Understanding change of basis is essential for any graphics programmer, as it underpins the entire rendering pipeline.

Different coordinate systems are used in 3D graphics:

  • World coordinates (global scene)
  • Camera coordinates (view from camera)
  • Object coordinates (local to an object)
  • Screen coordinates (pixel positions)

Change of basis matrices transform between these different coordinate systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important thing to remember is:

  
    CHANGING THE BASIS DOES NOT CHANGE THE VECTOR ITSELF.       
    It only changes the coordinates used to describe that vector.
  

Example:

  v = [3] in the standard basis can be represented as [v]ᴮ = [2] in another basis.
      [1]                                                  [1]

Both representations describe the same vector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Change of Basis is the process of converting the coordinates of a vector from one basis to another while keeping the actual vector unchanged. It allows mathematicians, engineers, programmers, and scientists to choose coordinate systems that make calculations simpler and more meaningful.

Key concepts covered:

  ✓ What is a Basis?
  ✓ Coordinate Representations
  ✓ Change-of-Basis Matrix (Transition Matrix)
  ✓ Converting Between Bases
  ✓ Diagonalization
  ✓ Applications in Robotics, Graphics, Data Science

Change of Basis is especially important for understanding:

  • Coordinate Transformations
  • Change-of-Basis Matrices
  • Eigenvectors
  • Diagonalization
  • Linear Transformations
  • Applications involving different coordinate systems
  `,
  examples: [
    "Standard basis: E = {[1,0]ᵀ, [0,1]ᵀ} for ℝ²",
    "Alternative basis: B = {[1,1]ᵀ, [1,-1]ᵀ}",
    "Change coordinates from basis B to the standard basis: [v]ᴮ = [2,1]ᵀ → [3,1]ᵀ",
    "Compute the transition matrix P from one basis to another.",
    "Diagonalization: A = PDP⁻¹ using eigenvectors as basis",
    "PCA as a change of basis technique",
    "Robotics: Transform between base and arm coordinate systems",
    "Computer Graphics: World, camera, and screen coordinate systems",
  ],
};

export default topic;