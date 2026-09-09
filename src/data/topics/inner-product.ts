const topic = {
  id: "inner-product",
  title: "Inner Product Spaces",
  summary:
    "Inner products, norms, Cauchy–Schwarz, triangle inequality and orthogonality in abstract spaces.",
  details: `
Inner Product Spaces are vector spaces equipped with a special operation called an inner product. The inner product allows us to measure relationships between vectors, such as their length, angle, and orthogonality. In ordinary Euclidean space, the familiar dot product is an example of an inner product. The concept of an inner product generalizes the geometric notions we are accustomed to in two and three dimensions to arbitrary vector spaces, including spaces of functions, polynomials, and infinite-dimensional sequences. This generalization is what makes inner product spaces so powerful: they enable us to apply geometric intuition and reasoning to problems far beyond traditional geometry. Inner products form the foundation for many areas of mathematics and its applications, including Fourier analysis, quantum mechanics, signal processing, and machine learning. By equipping a vector space with an inner product, we can define lengths, angles, distances, and orthogonality, which are essential for optimization, approximation, and data analysis.

Inner Product Spaces are important because they extend the familiar ideas of geometry into more general vector spaces. They allow us to talk about concepts such as distance, angles, perpendicularity, projections, orthogonality, and orthonormal bases even when we are working with abstract vectors.

The inner product is commonly written as ⟨u,v⟩ and produces a scalar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE STANDARD DOT PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The simplest example of an inner product is the dot product in ℝⁿ, which is the standard inner product on Euclidean space. It is defined as the sum of the products of corresponding components of two vectors. The dot product is the most familiar inner product because it directly generalizes the geometric notion of projection from two and three dimensions. It allows us to compute lengths (via the norm), angles (via the cosine formula), and to test orthogonality. In applications like machine learning, the dot product measures similarity between feature vectors; in physics, it computes work done by a force. The dot product is linear in each argument, symmetric, and positive definite, which makes it a simple but powerful tool. Understanding the dot product in ℝⁿ is the first step toward understanding inner products in more abstract spaces, as it illustrates all the essential properties without the added complexity of general vector spaces.

For two vectors:

  u = [u₁]    v = [v₁]
      [u₂]        [v₂]
      [⋮ ]        [⋮ ]
      [uₙ]        [vₙ]

their inner product is:

  ⟨u,v⟩ = u₁v₁ + u₂v₂ + ... + uₙvₙ

Example:

  u = [2]    v = [4]
      [3]        [1]

Their inner product is:

  ⟨u,v⟩ = (2)(4) + (3)(1) = 8 + 3 = 11

Therefore:

  ⟨u,v⟩ = 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. PROPERTIES OF AN INNER PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inner product must satisfy several important properties. For real vector spaces, these include linearity, symmetry, and positive definiteness. These axioms ensure that the inner product behaves like the familiar dot product in Euclidean space, capturing the essential geometric structure. Linearity means that the inner product distributes over addition and scales with scalar multiplication, which allows us to compute inner products by breaking vectors into components. Symmetry means that the inner product is commutative, which is natural for measuring the relationship between two vectors. Positive definiteness ensures that the inner product of a vector with itself is always non-negative, and is zero only for the zero vector, which is essential for defining lengths and distances. These properties are not arbitrary; they are precisely what is needed to make geometry work in any vector space.

────────────────────────────────────────────────────────────────────────────────

Linearity

The inner product behaves linearly with respect to vector addition and scalar multiplication.

  ⟨u + v, w⟩ = ⟨u,w⟩ + ⟨v,w⟩

  ⟨cu, v⟩ = c⟨u,v⟩

This means that we can distribute the inner product over vector operations.

────────────────────────────────────────────────────────────────────────────────

Symmetry

For real vector spaces:

  ⟨u,v⟩ = ⟨v,u⟩

Example:

  ⟨u,v⟩ = (1)(3) + (2)(4) = 3 + 8 = 11

Reversing the vectors gives the same result:

  ⟨v,u⟩ = (3)(1) + (4)(2) = 3 + 8 = 11

────────────────────────────────────────────────────────────────────────────────

Positive Definiteness

For every vector v:

  ⟨v,v⟩ ≥ 0

and:

  ⟨v,v⟩ = 0  only when  v = 0

This property allows us to use the inner product to define the length of a vector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. NORM OR LENGTH OF A VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The norm of a vector represents its length. The norm is defined using the inner product: ||v|| = √⟨v,v⟩. This definition is a direct generalization of the Euclidean norm in ℝⁿ. The norm satisfies several important properties: it is always non-negative, it scales with scalar multiplication (||cv|| = |c| ||v||), and it satisfies the triangle inequality. The norm allows us to quantify the size of a vector, which is essential for measuring distances, errors, and magnitudes. In data science, the norm is used to regularize models and to measure the magnitude of feature vectors. In physics, the norm corresponds to the magnitude of a force or velocity. The ability to define a norm from an inner product is one of the key reasons why inner product spaces are so useful: they come with a built-in notion of length that is compatible with the vector space structure.

The norm of a vector represents its length.

The norm is defined using the inner product:

  ||v|| = √⟨v,v⟩

Example:

  v = [3]
      [4]

We calculate:

  ⟨v,v⟩ = 3² + 4² = 9 + 16 = 25

Therefore:

  ||v|| = √25 = 5

Thus:

  ||v|| = 5

This is the familiar Pythagorean theorem expressed using Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DISTANCE BETWEEN VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inner product can also be used to calculate the distance between two vectors. The distance between u and v is defined as the norm of their difference: d(u,v) = ||u - v||. This definition extends the usual Euclidean distance to any inner product space. Distance is a metric that measures how far apart two vectors are; it is symmetric, non-negative, and satisfies the triangle inequality. In machine learning, distance metrics are used in clustering and classification algorithms like k-nearest neighbors. In signal processing, distances measure the similarity between signals. In optimization, distances are used to measure the error between a prediction and an actual value. The ability to define distance from an inner product makes inner product spaces a natural setting for approximation and error analysis.

The distance between u and v is:

  d(u,v) = ||u - v||

Example:

  u = [5]    v = [2]
      [4]        [1]

First calculate:

  u - v = [3]
          [3]

Then:

  ||u - v|| = √(3² + 3²) = √18 = 3√2

Therefore:

  d(u,v) = 3√2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ORTHOGONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of inner products is determining whether two vectors are orthogonal, meaning perpendicular. Two vectors are orthogonal if their inner product is zero: u ⟂ v ⟺ ⟨u,v⟩ = 0. Orthogonality is a fundamental geometric concept that extends beyond Euclidean geometry to any inner product space. Orthogonal vectors are independent and do not share any component in each other's direction. In data analysis, orthogonal features are uncorrelated and provide independent information. In signal processing, orthogonal signals can be transmitted without interference. In linear algebra, orthogonal sets are automatically linearly independent (unless they contain the zero vector), which makes them ideal for constructing bases. The concept of orthogonality underpins the Gram-Schmidt process, QR decomposition, and many other algorithms.

Two vectors are orthogonal if their inner product is zero:

  u ⟂ v  ⟺  ⟨u,v⟩ = 0

Example:

  u = [1]    v = [ 2]
      [2]        [-1]

Calculate their inner product:

  ⟨u,v⟩ = (1)(2) + (2)(-1) = 2 - 2 = 0

Therefore:

  u ⟂ v

This means that the vectors are perpendicular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ANGLE BETWEEN VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inner product can also be used to find the angle between two nonzero vectors. The formula cos(θ) = ⟨u,v⟩ / (||u|| ||v||) relates the inner product to the cosine of the angle. This is a direct generalization of the formula from Euclidean geometry: the dot product of two vectors equals the product of their lengths times the cosine of the angle between them. This formula allows us to define angles in any inner product space, which is crucial for understanding the geometric relationship between abstract vectors. For example, if the inner product is zero, the angle is 90° (orthogonal); if the inner product equals the product of the norms, the angle is 0° (same direction); if the inner product is negative, the angle is obtuse. This concept is used in machine learning to compute the cosine similarity between document vectors, which measures the similarity of texts.

The formula is:

  cos(θ) = ⟨u,v⟩ / (||u|| ||v||)

Therefore:

  θ = cos⁻¹( ⟨u,v⟩ / (||u|| ||v||) )

Example:

  u = [1]    v = [1]
      [0]        [1]

Their inner product is:

  ⟨u,v⟩ = 1(1) + 0(1) = 1

Their norms are:

  ||u|| = 1    and    ||v|| = √2

Therefore:

  cos(θ) = 1 / (1 · √2) = 1/√2

Thus:

  θ = 45°

So the angle between the vectors is 45°.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ORTHOGONAL SETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A set of vectors is called an orthogonal set if every pair of different vectors is orthogonal. Orthogonal sets are very useful because their vectors are automatically linearly independent as long as none of the vectors is the zero vector. This property makes orthogonal sets ideal for constructing bases. In an orthogonal basis, the coordinates of a vector can be computed easily using inner products, without solving a linear system. This is the basis for Fourier series and many other expansions. Orthogonal sets also appear in data compression and signal processing, where they allow efficient representation of signals. The importance of orthogonal sets lies in their simplicity and the computational advantages they provide.

A set of vectors is called an orthogonal set if every pair of different vectors is orthogonal.

Example:

  v₁ = [1]    v₂ = [0]
       [0]         [1]

Their inner product is:

  ⟨v₁,v₂⟩ = 0

Therefore, they form an orthogonal set.

Orthogonal sets are very useful because their vectors are automatically linearly independent as long as none of the vectors is the zero vector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ORTHONORMAL SETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An orthonormal set is a set of vectors that is both orthogonal (every pair is perpendicular) and normalized (every vector has length 1). Orthonormal sets are the "gold standard" for bases because they are the simplest to work with. In an orthonormal basis, the coordinates of a vector are simply the inner products with the basis vectors. This makes computations extremely efficient and numerically stable. The standard basis in ℝⁿ is orthonormal, but there are many others. Orthonormal bases are used extensively in numerical linear algebra (e.g., QR decomposition), in signal processing (e.g., wavelets), and in quantum mechanics (where they represent complete sets of states). The Gram-Schmidt process is a systematic way to construct an orthonormal set from any linearly independent set of vectors.

An orthonormal set is a set of vectors that is both:

  • Orthogonal (every pair is perpendicular)
  • Normalized (every vector has length 1)

Example:

  e₁ = [1]    e₂ = [0]
       [0]         [1]

They are orthogonal because:

  ⟨e₁,e₂⟩ = 0

They also have length 1:

  ||e₁|| = 1    and    ||e₂|| = 1

Therefore, they form an orthonormal basis for ℝ².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PROJECTION OF ONE VECTOR ONTO ANOTHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inner products are also used to find the projection of one vector onto another. The projection of u onto v is proj_v(u) = (⟨u,v⟩ / ⟨v,v⟩) · v. This gives the component of u that lies in the direction of v. The projection is a fundamental operation in geometry, physics, and data analysis. In linear regression, the predicted values are the projection of the observed values onto the column space of the design matrix. In signal processing, projection is used to decompose signals into components. In computer graphics, it is used to compute shadows and reflections. The projection is also the basis for the Gram-Schmidt process and for solving least-squares problems. Understanding projection is essential for grasping the geometric interpretation of linear algebra and for many practical algorithms.

The projection of u onto v is:

  proj_v(u) = (⟨u,v⟩ / ⟨v,v⟩) · v

Example:

  u = [3]    v = [1]
      [2]        [0]

First:

  ⟨u,v⟩ = 3(1) + 2(0) = 3

Also:

  ⟨v,v⟩ = 1² + 0² = 1

Therefore:

  proj_v(u) = (3/1) · [1] = [3]
                       [0]   [0]

Thus:

  proj_v(u) = [3]
              [0]

The projection represents the component of u that lies in the direction of v.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INNER PRODUCT SPACES AND COMPLEX VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inner products are not limited to real vector spaces. They can also be defined on complex vector spaces. For complex vectors, the inner product uses the complex conjugate to ensure positive definiteness. The standard complex inner product is ⟨u,v⟩ = ūᵀ v, where ū is the complex conjugate of u. This definition ensures that ⟨v,v⟩ is real and non-negative, which is essential for defining a norm. Complex inner product spaces are fundamental in quantum mechanics, where states are represented as complex vectors and the inner product gives probability amplitudes. They are also used in signal processing for analyzing complex signals and in electrical engineering for power calculations. The properties of complex inner products are similar to the real case, but with conjugate symmetry instead of symmetry. Understanding complex inner products is essential for advanced applications in physics and engineering.

For complex vectors u, v ∈ ℂⁿ, the standard complex inner product is:

  ⟨u,v⟩ = ūᵀ v

where ū is the complex conjugate of u.

Example:

  u = [1 + i]
      [2    ]

Its conjugate is:

  ū = [1 - i]
      [2    ]

The inner product of u with itself is:

  ⟨u,u⟩ = (1-i)(1+i) + (2)(2)

Since:

  (1-i)(1+i) = 2

We get:

  ⟨u,u⟩ = 2 + 4 = 6

Therefore:

  ||u|| = √6

This is one reason Inner Product Spaces are important when working with complex vector spaces and quantum mechanics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CAUCHY-SCHWARZ INEQUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important theorem involving inner products is the Cauchy-Schwarz Inequality: |⟨u,v⟩| ≤ ||u|| · ||v||. This inequality states that the absolute value of the inner product cannot be larger than the product of the lengths of the two vectors. It is one of the most important inequalities in mathematics because it has far-reaching consequences. It implies that the cosine of the angle between two vectors is always between -1 and 1, which is geometrically intuitive. It is used to prove the triangle inequality, to establish the equivalence of norms, and to derive many other results. In probability theory, it is used to prove the covariance inequality; in functional analysis, it is used to prove the continuity of linear functionals. The Cauchy-Schwarz inequality is a cornerstone of linear algebra and its applications.

An important theorem involving inner products is the Cauchy-Schwarz Inequality:

  |⟨u,v⟩| ≤ ||u|| · ||v||

This inequality states that the absolute value of the inner product cannot be larger than the product of the lengths of the two vectors.

Example:

  If ||u|| = 3 and ||v|| = 4, then:

  |⟨u,v⟩| ≤ 12

This theorem is important in many areas of mathematics and is also used in proving other important results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. TRIANGLE INEQUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Triangle Inequality is another important result derived from inner products: ||u + v|| ≤ ||u|| + ||v||. This inequality states that the length of the sum of two vectors is less than or equal to the sum of their lengths. It is a geometric statement that the shortest path between two points is a straight line, and any detour is longer. The triangle inequality is fundamental in metric spaces and is used to prove convergence, to bound errors, and to establish many inequalities. It is also used in numerical analysis to analyze the stability of algorithms. The triangle inequality is a direct consequence of the Cauchy-Schwarz inequality, and it highlights the geometric structure of inner product spaces. It is one of the defining properties of a norm.

The Triangle Inequality is another important result derived from inner products:

  ||u + v|| ≤ ||u|| + ||v||

This inequality states that the length of the sum of two vectors is less than or equal to the sum of their lengths.

Example:

  If ||u|| = 3 and ||v|| = 4, then:

  ||u + v|| ≤ 7

This makes intuitive sense: going from one point to another directly is never longer than taking a detour.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ORTHOGONAL DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inner product allows a vector to be separated into components that are parallel and perpendicular to another vector or subspace. This is expressed as u = proj_v(u) + u⊥, where proj_v(u) is the component parallel to v, and u⊥ is perpendicular to v. This decomposition is unique and orthogonal, meaning that the parallel and perpendicular components are orthogonal to each other. Orthogonal decomposition is the foundation of least-squares approximation, where we find the closest vector in a subspace to a given vector. It is also used in the Gram-Schmidt process to construct orthogonal bases. In physics, it is used to decompose forces into components. In data analysis, it is used in principal component analysis to separate signal from noise. The ability to decompose vectors orthogonally is one of the most powerful features of inner product spaces.

An inner product allows a vector to be separated into components that are parallel and perpendicular to another vector or subspace.

  u = proj_v(u) + u⊥

Here, proj_v(u) is the component parallel to v, while u⊥ is perpendicular to v.

This idea is extremely useful in least-squares approximation, where we find the closest possible vector to a target vector within a particular subspace.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GRAM-SCHMIDT PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inner Product Spaces also provide the foundation for the Gram-Schmidt Process. The Gram-Schmidt Process takes a set of linearly independent vectors and converts them into an orthogonal or orthonormal set. The process works by successively projecting each vector onto the span of the previous ones and subtracting the projection, thereby removing any component that is already represented. The resulting orthogonal set has the same span as the original set, and after normalization, it becomes an orthonormal basis. The Gram-Schmidt process is essential in numerical linear algebra, where it is used to compute QR decompositions. It is also used in least-squares problems and in constructing orthonormal bases for function spaces (e.g., Legendre polynomials). Understanding the Gram-Schmidt process is key to many applications of inner product spaces.

Inner Product Spaces also provide the foundation for the Gram-Schmidt Process.

The Gram-Schmidt Process takes a set of linearly independent vectors and converts them into an orthogonal or orthonormal set.

Example: Suppose we have two linearly independent vectors v₁ and v₂.

  u₁ = v₁

Then remove the component of v₂ in the direction of u₁:

  u₂ = v₂ - proj_u₁(v₂)

The resulting vectors u₁ and u₂ are orthogonal.

If we then normalize them, we obtain an orthonormal basis.

This is important in QR decomposition, numerical linear algebra, least-squares problems, computer graphics, and scientific computing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. APPLICATIONS OF INNER PRODUCT SPACES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inner Product Spaces have many practical applications.

  1. Geometry
     • Calculating angles, lengths, distances, and perpendicularity

  2. Computer Graphics
     • Lighting, surface angles, projections, and geometric relationships

  3. Machine Learning
     • Measuring similarity between vectors
     • Fundamental to many algorithms

  4. Data Science
     • Vector representations, projections, dimensionality reduction, and optimization

  5. Signal Processing
     • Measuring similarity between signals

  6. Quantum Mechanics & Quantum Computing
     • Complex inner product spaces
     • Representing quantum states
     • Calculating probabilities and relationships between states

  7. Engineering
     • Signal analysis, optimization, and mathematical modeling

  8. Statistics
     • Covariance and correlation analysis
     • Regression and prediction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, an Inner Product Space is a vector space equipped with an inner product that allows us to measure relationships between vectors.

The inner product provides the foundation for:

  • Length:      ||v|| = √⟨v,v⟩
  • Distance:    d(u,v) = ||u - v||
  • Angle:       cos(θ) = ⟨u,v⟩ / (||u|| ||v||)
  • Orthogonality: ⟨u,v⟩ = 0
  • Projection:  proj_v(u) = (⟨u,v⟩ / ⟨v,v⟩) · v
  • Orthonormal Bases

For real vectors, the standard inner product is the dot product:

  ⟨u,v⟩ = uᵀ v

and the norm is:

  ||v|| = √⟨v,v⟩

Two vectors are orthogonal when:

  ⟨u,v⟩ = 0

Key Inequalities:

  • Cauchy-Schwarz: |⟨u,v⟩| ≤ ||u|| · ||v||
  • Triangle: ||u + v|| ≤ ||u|| + ||v||

The key idea to remember:

  An Inner Product Space extends the geometry of ordinary vectors to more general vector spaces, allowing us to measure length, angle, distance, and perpendicularity using algebra.

Understanding Inner Product Spaces provides the foundation for more advanced topics such as orthogonal projections, orthonormal bases, Gram-Schmidt, least-squares approximation, QR decomposition, Fourier analysis, and complex vector spaces.
  `,
  examples: [
    "Dot product: ⟨[2,3]ᵀ,[4,1]ᵀ⟩ = 11",
    "Norm: ||[3,4]ᵀ|| = 5",
    "Distance: d([5,4]ᵀ,[2,1]ᵀ) = 3√2",
    "Orthogonality: ⟨[1,2]ᵀ,[2,-1]ᵀ⟩ = 0 → perpendicular",
    "Angle: θ between [1,0]ᵀ and [1,1]ᵀ is 45°",
    "Cauchy-Schwarz: |⟨u,v⟩| ≤ ||u|| ||v||",
    "Triangle: ||u + v|| ≤ ||u|| + ||v||",
    "Projection: proj_v(u) = (⟨u,v⟩/⟨v,v⟩) · v",
    "Complex inner product: ⟨u,v⟩ = ūᵀ v",
    "Gram-Schmidt: Convert vectors to orthonormal basis",
    "Verify Cauchy–Schwarz for vectors",
    "Compute the norm induced by an inner product.",
  ],
};

export default topic;