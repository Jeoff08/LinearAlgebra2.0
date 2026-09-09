const topic = {
  id: "vectors",
  title: "Vectors",
  summary:
    "Vectors, operations, dot and cross products, geometric interpretation, vector spaces and examples.",
  details: `
A vector is a mathematical object that represents a quantity with both magnitude and direction. Unlike a scalar, which only has a magnitude, a vector tells us not only how much of something there is but also which direction it points. This dual nature makes vectors indispensable in describing physical phenomena like forces, velocities, and displacements, as well as in abstract mathematical settings. In Linear Algebra, vectors serve as the fundamental building blocks for more complex structures such as matrices, linear transformations, and vector spaces. They allow us to model multidimensional data, perform geometric computations, and solve systems of equations. Vectors are typically denoted by bold letters or arrows, and their components specify the amount of change along each coordinate axis. Understanding vectors is essential because they underpin nearly every concept in Linear Algebra and its applications across science and engineering.

In simple terms:

  A vector represents a quantity that has both size and direction.

Vectors are one of the most fundamental concepts in Linear Algebra because they are used to represent points, directions, forces, velocities, transformations, data, and many other mathematical and real-world quantities.

A vector is commonly represented using bold letters such as v or an arrow: →v.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SCALAR VS. VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before understanding vectors, it is important to distinguish them from scalars. A scalar is a single numerical value that conveys only magnitude how much of something there is without any reference to direction. In contrast, a vector encodes both magnitude and direction, making it a richer and more informative quantity. This distinction is crucial because many physical and mathematical quantities are inherently directional. For instance, speed is a scalar (e.g., 50 km/h), while velocity is a vector (e.g., 50 km/h east). The difference can dramatically affect calculations: adding scalars is simple arithmetic, but adding vectors requires considering their directions. This distinction also extends to higher dimensions, where vectors can point in any direction in space. Recognizing whether a quantity is scalar or vector determines how it should be manipulated in equations, and it is the first step in applying vector methods to real-world problems.

A scalar has only magnitude.

Examples include:
  • Temperature
  • Mass
  • Time
  • Distance
  • Speed

Example: 50 kg is a scalar because it only tells us the amount of mass.

A vector has both magnitude and direction.

Example: 50 km/h east is a vector because it tells us both the speed and the direction.

Therefore:

  Scalar = Magnitude
  Vector = Magnitude + Direction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. REPRESENTING A VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vectors can be represented in several ways, but the most common in Linear Algebra is using ordered lists of numbers, called components or coordinates. These components correspond to the vector's projections onto the axes of a coordinate system. For example, in two-dimensional space, a vector is written as a column of two numbers, where the first is the horizontal displacement and the second is the vertical displacement. This notation is compact and directly supports algebraic operations. Additionally, vectors can be expressed as a linear combination of basis vectors, such as using the standard unit vectors i and j. The choice of representation depends on the context: component form is best for computation, while geometric arrows are intuitive for visualization. Understanding both forms is essential because they are used interchangeably in vector algebra, physics, and computer graphics, and they both convey the same fundamental information about magnitude and direction.

A vector in two dimensions can be written as:

  v = [v₁]
      [v₂]

Example:

  v = [3]
      [4]

This vector means that we move:
  • 3 units in the x-direction
  • 4 units in the y-direction

It can also be written as:

  v = 3i + 4j

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VECTORS IN THREE DIMENSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Extending vectors to three dimensions adds a third component, representing movement along the z‑axis. This is necessary for modelling real-world objects in 3D space, such as the position of an aircraft, the direction of a force, or the orientation of a camera. Three‑dimensional vectors are written as ordered triples, and all the operations defined for 2D vectors addition, subtraction, scalar multiplication, dot product, and cross product generalise naturally. The additional dimension enriches geometry: three vectors can define volumes, and the cross product is unique to 3D, producing a vector perpendicular to the plane of the two inputs. Many engineering and physics problems are inherently three‑dimensional, and computer graphics rely heavily on 3D vectors to represent vertices, normals, and lighting directions. Mastering 3D vectors is therefore critical for moving from planar problems to real-world spatial analysis.

A vector in three-dimensional space can be written as:

  v = [v₁]
      [v₂]
      [v₃]

Example:

  v = [2]
      [3]
      [5]

This vector has components:
  v₁ = 2,  v₂ = 3,  v₃ = 5

The three components represent movement along the x-, y-, and z-axes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMPONENTS OF A VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The individual numbers in a vector's ordered list are its components, and each component specifies the magnitude of the vector in the direction of the corresponding coordinate axis. These components can be positive, negative, or zero. A negative component indicates motion in the opposite direction of that axis. Components are fundamental because they enable all vector operations to be performed through simple arithmetic on these numbers. In applications, components often represent measurable quantities: in physics, the components of a force vector represent the force's effect along each axis; in data science, components may represent features of a data point. Being able to extract and interpret components is essential for understanding the vector's meaning and for performing operations like scaling, addition, and projection. Moreover, components allow vectors to be stored and manipulated efficiently in computer programs, making them a practical as well as theoretical concept.

For:

  v = [4]
      [-2]
      [7]

the components are 4, -2, 7.

The negative value indicates movement in the negative direction of that coordinate axis.

Example: -2 means movement in the negative y-direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRIC REPRESENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, a vector is represented as an arrow drawn from a point (the tail) to another point (the head). The arrow's length corresponds to the vector's magnitude, and its orientation in space corresponds to its direction. One of the key properties of this representation is that the vector is independent of its starting position; moving the arrow parallel to itself does not change the vector, as long as its length and direction remain unchanged. This freedom allows us to place vectors at the origin for convenience, or at any other point for physical or graphical purposes. Geometric visualization helps us intuitively grasp operations like addition (placing arrows head-to-tail) and scalar multiplication (stretching or shrinking the arrow). It also makes concepts like orthogonality and projection easy to understand. This graphical interpretation is especially valuable in physics and engineering, where forces and velocities are often drawn as arrows on diagrams.

Vectors can be represented graphically as arrows.

  • Length of the arrow represents the magnitude.
  • Direction of the arrow represents the vector's direction.
  • Starting point can vary without changing the vector, as long as its length and direction remain the same.

Example: v = [3, 4]ᵀ can be represented by an arrow moving 3 units horizontally and 4 units vertically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MAGNITUDE OF A VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The magnitude (or length) of a vector quantifies its size irrespective of direction, and it is computed using the Euclidean distance formula. For a vector with components, the magnitude is the square root of the sum of the squares of its components, which is a direct extension of the Pythagorean theorem. The magnitude is always a non-negative scalar; it is zero only for the zero vector. In physics, magnitude corresponds to the strength of a force, the speed of an object, or the intensity of a field. In machine learning, it can represent the norm of a feature vector, which is used in regularization and distance calculations. The magnitude is denoted by double bars ||v||, and it plays a central role in normalizing vectors (creating unit vectors), measuring distances between points, and in inequalities like the triangle inequality. Understanding magnitude is essential for any operation that involves scaling or comparing vectors.

The magnitude or length of a vector is written as ||v||.

For a two-dimensional vector:

  v = [x]
      [y]

the magnitude is:

  ||v|| = √(x² + y²)

For a three-dimensional vector:

  v = [x]
      [y]
      [z]

the magnitude is:

  ||v|| = √(x² + y² + z²)

────────────────────────────────────────────────────────────────────────────────

Example: Magnitude

Consider:

  v = [3]
      [4]

Its magnitude is:

  ||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5

Thus:

  ||v|| = 5

This is the familiar 3-4-5 right triangle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VECTOR ADDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Adding two vectors is performed component-wise, resulting in a new vector whose components are the sums of the corresponding components. Geometrically, this corresponds to placing the tail of the second vector at the head of the first, and the resultant vector is the arrow from the tail of the first to the head of the second. This operation is commutative and associative, reflecting the physical idea that combining displacements is independent of order. Vector addition is foundational in many contexts: in physics, it combines forces or velocities; in computer graphics, it moves objects or accumulates changes; in data science, it can combine feature vectors. The ability to add vectors allows us to build complex entities from simpler ones, and it is essential for defining linear combinations and spans. It is also the basis for solving systems of equations, where the solution vector is expressed as a sum of particular and homogeneous solutions.

Vectors can be added by adding their corresponding components.

Suppose:

  u = [2]    v = [4]
      [3]        [1]

Then:

  u + v = [2 + 4] = [6]
          [3 + 1]   [4]

Therefore:

  u + v = [6]
          [4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VECTOR SUBTRACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subtracting one vector from another is likewise done component-wise, yielding a vector that represents the difference between the two. Geometrically, the subtraction u - v gives the vector from the head of v to the head of u when both are placed tail-to-tail. This is equivalent to adding the negative of v (which has the same magnitude but opposite direction). Subtraction is essential for finding displacement vectors between two points, for measuring changes, and for error analysis in optimization and statistics. For instance, in machine learning, the gradient descent update subtracts a scaled gradient vector from the weights. In physics, the relative velocity of one object with respect to another is the vector subtraction of their velocities. Understanding vector subtraction is also crucial for defining linear dependence, as one vector can be expressed as a linear combination of others if a certain subtraction yields zero.

Vectors can also be subtracted component by component.

Suppose:

  u = [5]    v = [2]
      [7]        [3]

Then:

  u - v = [5 - 2] = [3]
          [7 - 3]   [4]

Therefore:

  u - v = [3]
          [4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SCALAR MULTIPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiplying a vector by a scalar scales the vector's magnitude by the absolute value of the scalar, and if the scalar is negative, it also reverses the vector's direction. This operation is distributive and associative, and it is fundamental for changing the scale of a vector without altering its direction (except for the sign). Scalar multiplication is used to adjust the strength of a force, to normalise a vector (by dividing by its magnitude), and to compute linear combinations. In machine learning, weights are scalars that multiply feature vectors. In geometry, it stretches or compresses shapes. The zero vector is obtained when the scalar is zero. Scalar multiplication together with vector addition forms the two basic operations that define a vector space, making it a cornerstone of linear algebra. Without scalar multiplication, we could not scale transformations or adjust the importance of different components.

A vector can be multiplied by a scalar.

Suppose:

  v = [2]
      [3]

Multiplying it by 4 gives:

  4v = 4[2] = [8]
        [3]   [12]

Scalar multiplication changes the magnitude of the vector.

If the scalar is negative, it also reverses the direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ZERO VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The zero vector is the unique vector whose components are all zero. It serves as the additive identity in a vector space: adding it to any vector leaves that vector unchanged. Geometrically, it is a point (an arrow of zero length) with no direction. The zero vector is essential for defining vector spaces, linear independence, and the null space of a matrix. In solving systems of equations, the zero vector is the trivial solution to homogeneous systems; its presence indicates that the system has at least that solution. In applications, a zero vector might represent no displacement, zero force, or a null feature vector. Understanding the zero vector is crucial for recognising when a set of vectors is linearly dependent (if a nontrivial combination sums to zero) and for many theoretical results, such as the existence of a unique solution to A x = 0 only when the null space is trivial.

The zero vector is a vector whose components are all zero.

In two dimensions:

  0 = [0]
      [0]

In three dimensions:

  0 = [0]
      [0]
      [0]

The zero vector has magnitude:

  ||0|| = 0

It does not have a specific direction because its length is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. UNIT VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A unit vector has a magnitude of exactly 1, and it is used to indicate direction without conveying any scale. To obtain a unit vector in the direction of a given nonzero vector, we divide the vector by its magnitude a process called normalisation. Unit vectors are essential in many areas: they define the axes in coordinate systems (the standard basis vectors are unit vectors), they are used to describe directions in physics (e.g., the direction of a force), and they simplify computations involving angles and projections. In computer graphics, unit vectors represent surface normals and lighting directions. In machine learning, normalising feature vectors to unit length can improve the performance of distance-based algorithms. The ability to create a unit vector from any nonzero vector is a fundamental operation that isolates direction from magnitude, making it possible to work with direction independently.

A unit vector is a vector whose magnitude is exactly 1.

Therefore:

  ||u|| = 1

To convert a nonzero vector into a unit vector, divide it by its magnitude:

  u = v / ||v||

────────────────────────────────────────────────────────────────────────────────

Example: Unit Vector

Consider:

  v = [3]
      [4]

We already know that ||v|| = 5.

Therefore, the unit vector in the same direction is:

  u = (1/5)[3] = [3/5]
           [4]   [4/5]

Its magnitude is 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STANDARD BASIS VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard basis vectors are the simplest unit vectors, each pointing along one coordinate axis. In ℝ², they are i = [1,0]ᵀ and j = [0,1]ᵀ; in ℝ³, they are i, j, and k. These vectors form a basis for the space, meaning that any vector can be uniquely expressed as a linear combination of them. This representation is invaluable because it decomposes a vector into independent components that correspond to coordinate axes. The standard basis is orthonormal: the vectors are orthogonal and of unit length, which simplifies dot products and projections. In many applications, we work in coordinate systems aligned with these basis vectors, making the standard basis the natural starting point. However, other bases can be used when they better suit the problem, such as in principal component analysis. Understanding the standard basis is the first step toward grasping the broader concept of a basis in a vector space.

The standard basis vectors in ℝ² are:

  i = [1]    j = [0]
      [0]        [1]

Any two-dimensional vector can be written using them.

Example:

  v = [3] = 3[1] + 4[0] = 3i + 4j
      [4]    [0]    [1]

In ℝ³, the standard basis vectors are:

  i = [1]    j = [0]    k = [0]
      [0]        [1]        [0]
      [0]        [0]        [1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DOT PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The dot product (also called the inner product) is an algebraic operation that takes two vectors of the same dimension and produces a scalar. It is computed by multiplying corresponding components and summing the products. The dot product is fundamental because it provides a way to measure the alignment between two vectors: it is positive when they point in similar directions, negative when they point in opposite directions, and zero when they are orthogonal. This property makes the dot product essential for computing angles, projections, and for testing orthogonality. In physics, work is the dot product of force and displacement. In machine learning, the dot product appears in linear classifiers, similarity measures (like cosine similarity), and in the definition of matrix multiplication. The dot product is bilinear, symmetric, and positive-definite, and it gives rise to the norm and the notion of distance in Euclidean spaces.

The dot product, also called the inner product, multiplies two vectors and produces a scalar.

For:

  u = [u₁]    v = [v₁]
      [u₂]        [v₂]

the dot product is:

  u · v = u₁v₁ + u₂v₂

For three-dimensional vectors:

  u · v = u₁v₁ + u₂v₂ + u₃v₃

────────────────────────────────────────────────────────────────────────────────

Example: Dot Product

Let:

  u = [2]    v = [4]
      [3]        [5]

Then:

  u · v = (2)(4) + (3)(5) = 8 + 15 = 23

Therefore:

  u · v = 23

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DOT PRODUCT AND ANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The dot product is intimately related to the geometric angle between two vectors. The formula u · v = ||u|| ||v|| cos(θ) shows that the dot product determines the cosine of the angle, and conversely, the angle can be recovered from the dot product and magnitudes. This relationship provides a powerful geometric interpretation: the dot product measures how much of one vector lies in the direction of the other. When the vectors are in the same direction, the angle is 0° and the dot product is maximal; when they are perpendicular, the dot product is zero; and when they are opposite, the angle is 180° and the dot product is negative. This is used in many applications: in computer graphics to compute lighting (based on surface normals and light direction), in statistics to compute correlation, and in machine learning to compute cosine similarity for comparing text documents. Mastering this relation is key to transitioning between algebraic and geometric viewpoints.

The dot product can be used to find the angle between two vectors.

The formula is:

  u · v = ||u|| ||v|| cos(θ)

Therefore:

  cos(θ) = (u · v) / (||u|| ||v||)

So:

  θ = cos⁻¹((u · v) / (||u|| ||v||))

This allows us to determine how closely two vectors point in the same direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ORTHOGONAL VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two vectors are orthogonal if they are perpendicular, which in Euclidean space means the angle between them is 90°. Algebraically, orthogonality is equivalent to their dot product being zero. This property is crucial because orthogonal vectors are independent and form the basis for many important concepts, such as orthogonal projections, Gram–Schmidt process, and orthogonal matrices. In data analysis, orthogonal features are uncorrelated and provide independent information. In geometry, orthogonal vectors define coordinate axes. The zero vector is orthogonal to every vector. Orthogonality is the foundation of orthogonal decompositions, where a vector can be uniquely split into components parallel and perpendicular to a given direction. It is also used in solving least‑squares problems, where the residual is orthogonal to the column space. Recognizing orthogonality allows us to simplify problems by decoupling variables.

Two vectors are orthogonal if they are perpendicular.

Two vectors are orthogonal when their dot product is zero:

  u · v = 0

Example:

  u = [1]    v = [0]
      [0]        [1]

Their dot product is:

  (1)(0) + (0)(1) = 0

Therefore:

  u ⟂ v

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. CROSS PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cross product is a binary operation on two vectors in three‑dimensional space that yields a third vector perpendicular to both inputs. Its magnitude equals the area of the parallelogram spanned by the two vectors, and its direction is given by the right‑hand rule. The cross product is not commutative; swapping the order changes the sign. It is essential in physics for torque, angular momentum, and magnetic force. In geometry, it is used to find normal vectors to surfaces. In computer graphics, it calculates surface normals for lighting. The cross product is also related to the determinant of a matrix formed by the two vectors and the standard basis. Unlike the dot product, which yields a scalar, the cross product produces a vector, making it useful for constructing orthogonal coordinate systems. Understanding the cross product is vital for any application involving three‑dimensional space.

The cross product is mainly used with three-dimensional vectors.

For:

  u = [u₁]    v = [v₁]
      [u₂]        [v₂]
      [u₃]        [v₃]

their cross product is:

  u × v = [u₂v₃ - u₃v₂]
          [u₃v₁ - u₁v₃]
          [u₁v₂ - u₂v₁]

and produces another vector that is perpendicular to both u and v.

────────────────────────────────────────────────────────────────────────────────

Example: Cross Product

Let:

  u = [1]    v = [0]
      [0]        [1]
      [0]        [0]

Then:

  u × v = [0·0 - 0·1] = [0]
          [0·0 - 1·0]   [0]
          [1·1 - 0·0]   [1]

Therefore:

  u × v = k

The resulting vector is perpendicular to both original vectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PROJECTION OF A VECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The projection of one vector onto another measures how much of the first vector lies in the direction of the second. The resulting vector is parallel to the second vector and its length is the scalar component of the first vector along the second. The formula uses the dot product: proj_v(u) = (u·v / v·v) v. Projections are used extensively in geometry (to find the closest point on a line), in physics (to decompose forces into components), in statistics (to compute regression coefficients), and in machine learning (to project data onto principal components). The residual of a projection (u - proj_v(u)) is orthogonal to v, which leads to the orthogonal decomposition theorem. Projections are the foundation of least‑squares methods and the Gram–Schmidt process. Understanding projection is key to understanding how to approximate one vector by another and how to reduce dimensionality.

A vector can be projected onto another vector.

The projection of u onto v is:

  proj_v(u) = (u · v / v · v) · v

This tells us how much of u points in the direction of v.

Projection is important in:
  • Geometry
  • Physics
  • Computer Graphics
  • Machine Learning
  • Least Squares

────────────────────────────────────────────────────────────────────────────────

Example of Projection

Let:

  u = [3]    v = [1]
      [4]        [0]

First calculate:

  u · v = (3)(1) + (4)(0) = 3

Then:

  v · v = 1² + 0² = 1

Therefore:

  proj_v(u) = (3/1)[1] = [3]
                   [0]   [0]

Thus:

  proj_v(u) = [3]
              [0]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LINEAR COMBINATION OF VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear combination is an expression constructed from a set of vectors by multiplying each vector by a scalar and then adding the results. This operation is the most fundamental building block in linear algebra: it allows us to create new vectors from existing ones. The set of all possible linear combinations of a given set of vectors is called their span. Linear combinations are used to represent any vector in a vector space as a combination of basis vectors. They are central to solving systems of equations, as the solution can be written as a particular vector plus a linear combination of null‑space basis vectors. In geometry, linear combinations generate lines, planes, and higher‑dimensional subspaces. In data science, they are used in feature engineering and in constructing new features. The ability to form linear combinations is what makes vector spaces linear, and it is the operation that enables transformations, decompositions, and many other techniques.

A linear combination is an expression formed by multiplying vectors by scalars and adding the results.

Example:

  2u + 3v

Suppose:

  u = [1]    v = [3]
      [2]        [1]

Then:

  2u = [2]    3v = [9]
       [4]         [3]

Therefore:

  2u + 3v = [2 + 9] = [11]
            [4 + 3]   [7]

So:

  2u + 3v = [11]
            [7]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SPAN OF VECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The span of a set of vectors is the collection of all vectors that can be expressed as a linear combination of the given vectors. The span is itself a vector subspace of the ambient space. The concept of span is crucial because it tells us which vectors are reachable from the set. For example, the span of two non‑parallel vectors in ℝ² is the entire plane; the span of a single nonzero vector is a line through the origin. Understanding span helps determine whether a set of vectors is a basis (if they span the space and are independent). In applications, the span of the columns of a matrix is its column space, which determines the solvability of A x = b. Span is also used in control theory (reachability) and in data analysis (principal components span the subspace of maximum variance). Grasping span is essential for understanding the dimensions and structure of linear subspaces.

The span of a set of vectors is the collection of all possible linear combinations of those vectors.

Example:

  u = [1]    v = [0]
      [0]        [1]

Any vector [x, y]ᵀ can be written as:

  x u + y v

Therefore:

  span{u, v} = ℝ²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. LINEAR INDEPENDENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others. Equivalently, the only scalars that make the linear combination equal to the zero vector are all zero. Linear independence is a measure of redundancy: independent vectors provide unique directions. In a vector space of dimension n, a set of n independent vectors forms a basis. In data analysis, independent features avoid multicollinearity. In systems of equations, the columns of A are independent if the homogeneous system A x = 0 has only the trivial solution, ensuring a unique solution for any consistent b. Testing for independence is often done by computing the rank or determinant (for square matrices). Understanding independence is key to solving systems, performing decompositions, and interpreting the degrees of freedom in a model.

Vectors are linearly independent if none of them can be written as a linear combination of the others.

Example:

  [1]    and    [0]
  [0]           [1]

are linearly independent.

However:

  [1]    and    [2]
  [2]           [4]

are linearly dependent because:

  [2] = 2[1]
  [4]   [2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. VECTORS AND LINEAR ALGEBRA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vectors are not just isolated objects; they are the foundation upon which the entire edifice of Linear Algebra is built. Matrices are collections of vectors, and they act on vectors through multiplication. Linear transformations are functions that map vectors to vectors in a linear way. Systems of linear equations are expressed as A x = b, where x and b are vectors. The columns of a matrix are vectors that span its column space, and the rows span its row space. The null space and range are vector spaces defined by vectors. Eigenvalues and eigenvectors are scalar‑vector pairs that characterise linear transformations. Thus, every major topic in Linear Algebra revolves around vectors and their operations. A solid intuition for vectors how they combine, how they can be scaled, and how they relate to one another makes learning these advanced topics much more accessible. In essence, Linear Algebra is the study of vector spaces and linear mappings between them.

Vectors are the foundation of many important Linear Algebra concepts.

  • Matrices can operate on vectors: A x
  • Linear transformations map vectors to other vectors: T(x)
  • Systems of equations can be written as: A x = b
  • The columns of a matrix are vectors
  • The rows of a matrix can also be viewed as vectors

Therefore, understanding vectors is essential for understanding almost every major topic in Linear Algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. VECTORS AND MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A matrix can be seen as a rectangular array of numbers, but more fundamentally, it is a collection of column vectors (or row vectors). This viewpoint is powerful because it allows us to interpret matrix operations, like multiplication, as combinations of vector operations. For instance, multiplying a matrix A by a vector x produces a vector that is a linear combination of the columns of A, with coefficients given by the components of x. This column perspective makes the column space and the range of a linear transformation tangible. Similarly, the rows of a matrix provide vectors that define hyperplanes. Understanding matrices as groups of vectors helps in visualizing operations like row reduction, where we manipulate these vectors to achieve a simpler form. In data science, a dataset is often stored as a matrix where each row is a data point (a vector) and each column is a feature. This interpretation makes matrices a natural container for vector‑based data.

A matrix can be viewed as a collection of column vectors.

Example:

  A = [1  3]
      [2  4]

Its columns are:

  v₁ = [1]    v₂ = [3]
       [2]         [4]

Therefore:

  A = [|   |]
      [v₁  v₂]
      [|   |]

This gives a direct connection between matrices and vectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. VECTORS AND LINEAR TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear transformations are functions that take vectors as inputs and produce vectors as outputs, while preserving addition and scalar multiplication. They can be represented by matrices once a basis is chosen. The action of a transformation on a vector is given by multiplying the vector by the matrix. This geometric interpretation is central: a linear transformation can rotate, scale, shear, or project vectors, and the matrix‑vector product tells us the image of each input vector. Understanding this connection helps in visualizing abstract concepts like eigenvalues (vectors that are only scaled) and the range (all possible outputs). In computer graphics, transformations like rotation and scaling are represented by matrices. In machine learning, transformations are used in layers of neural networks. The vector perspective makes these operations intuitive, as we can think of how each input vector moves through the transformation.

A matrix can transform a vector.

Example:

  A = [2  0]    x = [1]
      [0  3]        [2]

Then:

  A x = [2  0] [1] = [2]
        [0  3] [2]   [6]

The transformation stretches the vector differently along the two coordinate directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. VECTORS IN PHYSICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vectors are indispensable in physics because many fundamental quantities are inherently directional. Force, velocity, acceleration, displacement, momentum, torque, and electric and magnetic fields are all vectors. Their vector nature means that when combining them, one must account for direction. For example, the net force on an object is the vector sum of all individual forces, and the resulting motion is determined by Newton's second law, which is a vector equation. In fluid dynamics, velocity fields are vector fields. In electromagnetism, the Lorentz force involves both electric and magnetic fields, both vectors. The ability to compute with vectors allows physicists to model complex systems, from planetary orbits to quantum mechanics. A strong grasp of vector operations addition, subtraction, dot product, cross product is therefore a prerequisite for any physics student, and many of the concepts in Linear Algebra were developed precisely to address physics problems.

Vectors are extremely important in Physics.

Example: Force is a vector.

Suppose a force is:

  F = [10] N
      [5]

This means the force has components:
  • 10 N in one direction
  • 5 N in another direction

Other physical quantities represented by vectors include:
  • Velocity
  • Acceleration
  • Displacement
  • Momentum
  • Electric fields
  • Magnetic fields

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. VECTORS IN COMPUTER GRAPHICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer graphics, vectors are the fundamental data structure for representing 3D objects, their positions, orientations, and motions. Points in space are stored as position vectors; directions of movement, lights, and cameras are direction vectors; and surface normals are used for shading and lighting calculations. Transformations like translation, rotation, and scaling are achieved through matrix multiplication applied to these vectors. For instance, to move an object, we add a translation vector to each vertex. The dot product is used to compute lighting intensity based on the angle between the surface normal and the light direction. The cross product generates normals from two edge vectors. Without vectors, modern 3D graphics would be impossible. Understanding vector operations is therefore essential for anyone working in game development, animation, virtual reality, or any field that involves computer‑generated imagery.

Vectors are heavily used in Computer Graphics.

They can represent:
  • Position
  • Direction
  • Movement
  • Surface normals
  • Camera orientation
  • Lighting
  • Object transformations

Example: A character's movement might be represented by:

  [5]
  [0]
  [2]

This could represent movement in the x, y, and z directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. VECTORS IN MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Machine learning relies heavily on vectors to represent data. Each data point is typically a vector of features (e.g., pixel values in an image, word frequencies in a document, or sensor readings). A collection of data points forms a matrix where each row is a data vector. Operations on these vectors such as dot products (for similarity), norms (for regularisation), and linear combinations form the basis of many algorithms. For example, in linear regression, the prediction is a linear combination of feature vectors. In support vector machines, the decision boundary is defined by support vectors. In neural networks, activations are computed as matrix‑vector products. Dimensionality reduction techniques like PCA project data onto principal component vectors. Thus, vectors are the language in which data and models are expressed. A solid understanding of vector operations enables data scientists to implement, debug, and innovate in machine learning.

In Machine Learning, data is frequently represented using vectors.

Example: A student is represented by:

  [85]
  [90]
  [78]

These values could represent scores in three different subjects.

A larger dataset can then be represented as a matrix whose rows or columns contain vectors.

Machine Learning algorithms use vector operations for:
  • Feature representation
  • Similarity calculations
  • Classification
  • Regression
  • Neural networks
  • Optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. VECTORS AND NEURAL NETWORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Neural networks are composed of layers, each of which performs a linear transformation followed by a nonlinear activation. The core computation of a layer is z = W x + b, where x is the input vector, W is a weight matrix, b is a bias vector, and z is the output vector (before activation). This equation is a prime example of combining vectors and matrices: the matrix W transforms the input vector, and the bias vector is added. The output vector z is then passed through an activation function, which applies element‑wise (still vector). Thus, the flow of information through a neural network is a sequence of vector operations. Training involves adjusting the weights (scalars) and biases to make the output vectors match target vectors. The vector perspective helps in understanding the capacity, behaviour, and regularisation of these models, and it is the foundation of deep learning.

Neural networks perform many operations involving vectors and matrices.

Example:

  z = W x + b

Here:
  • x is an input vector
  • W is a weight matrix
  • b is a bias vector
  • z is the resulting vector

This equation is fundamental to how many neural network layers operate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. VECTORS AND DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concept of distance between two points is directly expressed using vectors. Given two points P and Q, the displacement vector from P to Q is q − p, and the distance is the magnitude of this vector. This formula is the Euclidean distance, which is the most common metric in many applications. In machine learning, distance measures (like Euclidean, Manhattan, or Mahalanobis) are central to clustering, classification (k‑nearest neighbours), and anomaly detection. In geometry, distance is used to find the shortest path, to compute the radius of a sphere, or to assess similarity. The ability to compute vector distances is also essential for solving optimisation problems, where we might want to minimise the distance between a point and a subspace (projection). Understanding how distance arises from vector operations is key to interpreting many algorithms and physical laws.

The distance between two points can be calculated using vectors.

Suppose:

  P = (1, 2)    and    Q = (4, 6)

The displacement vector from P to Q is:

  Q - P = [4 - 1] = [3]
          [6 - 2]   [4]

The distance is the magnitude:

  ||Q - P|| = √(3² + 4²) = √25 = 5

Thus:

  Distance = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. IMPORTANT VECTOR CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To be proficient with vectors, one must master a core set of concepts that recur throughout linear algebra and its applications. These include magnitude and direction, which define the vector itself; vector addition and subtraction, which combine vectors; scalar multiplication, which scales them; unit vectors for direction; the zero vector as identity; the dot product for measuring alignment and orthogonality; the cross product for constructing perpendicular vectors in 3D; projection for decomposing vectors; linear combinations and span for generating subspaces; and linear independence for ensuring non‑redundancy. Together, these concepts form the toolkit for understanding and manipulating vectors. They are used in solving systems, analysing data, designing algorithms, and interpreting physical phenomena. A deep familiarity with these ideas is not merely academic it is the basis for practical competency in science and engineering.

When studying Vectors, make sure you understand:

  • Magnitude
  • Direction
  • Vector Components
  • Vector Addition
  • Vector Subtraction
  • Scalar Multiplication
  • Unit Vectors
  • Zero Vector
  • Dot Product
  • Cross Product
  • Orthogonality
  • Projection
  • Linear Combination
  • Span
  • Linear Independence
  • Basis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, a vector is a mathematical object that represents a quantity with both magnitude and direction.

A vector in ℝⁿ can be represented as:

  v = [v₁]
      [v₂]
      [⋮]
      [vₙ]

Its magnitude is determined by:

  ||v|| = √(v₁² + v₂² + ... + vₙ²)

Vectors can be:
  • Added
  • Subtracted
  • Multiplied by scalars
  • Normalized
  • Projected
  • Combined linearly

The dot product is:

  u · v = Σᵢ uᵢvᵢ

and can be used to determine angles and orthogonality.

Key Formulas:

  • Magnitude:       ||v|| = √(v · v)
  • Unit vector:     u = v / ||v||
  • Dot product:     u · v = Σ uᵢvᵢ
  • Orthogonal:      u · v = 0
  • Cross product:   u × v (3D only)
  • Projection:      proj_v(u) = (u · v / v · v) · v
  • Linear combo:    c₁v₁ + c₂v₂ + ... + cₖvₖ

Vectors form the foundation of Linear Algebra and are essential for understanding matrices, linear transformations, systems of equations, vector spaces, eigenvectors, projections, optimization, Machine Learning, Computer Graphics, and Physics.

The key idea to remember:

  A vector represents magnitude and direction, and in Linear Algebra it serves as one of the fundamental building blocks for representing data, solving equations, describing transformations, and understanding multidimensional spaces.
  `,
  examples: [
    "Vector: v = [3,4]ᵀ with magnitude 5",
    "Scalar vs Vector: 50 kg (scalar) vs 50 km/h east (vector)",
    "Vector addition: [2,3]ᵀ + [4,1]ᵀ = [6,4]ᵀ",
    "Vector subtraction: [5,7]ᵀ - [2,3]ᵀ = [3,4]ᵀ",
    "Scalar multiplication: 4[2,3]ᵀ = [8,12]ᵀ",
    "Zero vector: 0 = [0,0]ᵀ",
    "Unit vector: u = v/||v|| = [3/5,4/5]ᵀ",
    "Standard basis: i = [1,0]ᵀ, j = [0,1]ᵀ",
    "Dot product: [2,3]ᵀ · [4,5]ᵀ = 23",
    "Orthogonal: [1,0]ᵀ · [0,1]ᵀ = 0",
    "Cross product: [1,0,0]ᵀ × [0,1,0]ᵀ = [0,0,1]ᵀ",
    "Projection: proj_v(u) = (u·v/v·v)v",
    "Linear combination: 2u + 3v",
    "Span: span{[1,0]ᵀ, [0,1]ᵀ} = ℝ²",
    "Linear independence: [1,0]ᵀ and [0,1]ᵀ are independent",
    "Distance: between (1,2) and (4,6) = 5",
    "Compute v+w for v=[1,2], w=[-3,4]",
    "Find the projection of u onto v.",
  ],
};

export default topic;