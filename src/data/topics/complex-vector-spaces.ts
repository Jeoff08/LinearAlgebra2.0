const topic = {
  id: "complex-vector-spaces",
  title: "Complex Vector Spaces",
  summary:
    "Complex numbers and vectors, Hermitian and unitary matrices, and complex inner products.",
  details: `
Complex Vector Spaces are vector spaces in which the scalars used to multiply and combine vectors are complex numbers instead of only real numbers. They extend the idea of ordinary vector spaces and are especially important in advanced Linear Algebra, physics, engineering, signal processing, quantum computing, and electrical engineering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COMPLEX NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Complex numbers are an extension of the real numbers that include a new unit, i, defined by i² = -1. They are written as a + bi, where a is the real part and b is the imaginary part. Complex numbers are fundamental because they allow solutions to equations like x² + 1 = 0, which have no real solutions. They also provide a compact representation for oscillatory phenomena, such as alternating currents and waves, through Euler's formula e^{iθ} = cos θ + i sin θ. In linear algebra, complex numbers enable us to work with matrices and vectors in a richer algebraic structure, leading to the spectral theorem for Hermitian matrices and the complete characterisation of rotations and reflections in higher dimensions. Their use is indispensable in quantum mechanics, where states are represented as complex vectors, and in signal processing, where the Fourier transform maps real signals to complex frequency components.

A complex number has the form:

  z = a + bi

where a and b are real numbers and i is the imaginary unit, defined by:

  i² = -1

Example:

  z = 3 + 2i  ← a = 3 (real part), b = 2 (imaginary part)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COMPLEX VECTOR SPACE DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A complex vector space is a set of vectors where the scalars (numbers used to multiply vectors) are complex numbers. Just like real vector spaces, they satisfy the usual axioms of addition and scalar multiplication, but now the field of scalars is ℂ instead of ℝ. This means that vectors can have complex components, and linear combinations use complex coefficients. The notation ℂⁿ denotes the n-dimensional complex vector space, generalising ℝⁿ. Complex vector spaces are essential because many linear transformations, especially those arising from rotations or physical systems with oscillatory dynamics, have complex eigenvalues and eigenvectors. Working in complex vector spaces ensures that every polynomial equation (like the characteristic equation) has a full set of roots, guaranteeing the existence of eigenvalues in ℂ even when they are not real. This completeness is a major reason why complex vector spaces are preferred in advanced mathematics and applications.

A complex vector space is a set of vectors where:
  • The components can be complex numbers
  • Vectors can be multiplied by complex scalars

Example: A vector in ℂ² can be written as:

  v = [2 + i ]
      [3 - 2i]

Unlike a vector in ℝ², whose components are real numbers, this vector contains complex numbers.

  ℂ² = Set of all two-dimensional vectors with complex-number components
  ℂⁿ = Set of all n-dimensional vectors with complex-number components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VECTOR ADDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vector addition in complex vector spaces is performed component‑wise, exactly as in real vector spaces, but now each component is a complex number. The operation is commutative and associative, and the zero vector still serves as the additive identity. This addition is straightforward because complex numbers themselves are added by separately summing the real and imaginary parts. The ability to add complex vectors allows us to combine signals in electrical engineering, where voltages and currents are complex phasors, or to superimpose quantum states in superposition. Understanding vector addition in the complex setting is the same as in the real case; the only difference is the arithmetic involved. This consistency makes the transition from real to complex vector spaces relatively smooth, while the new features (like the complex inner product) bring additional power and insight.

Vectors in a complex vector space can be added component by component, just like vectors in a real vector space.

Example: Let

  u = [1 + 2i]    v = [2 - i ]
      [3 - i ]        [1 + 4i]

Adding them gives:

  u + v = [(1+2i) + (2-i)] = [3 + i ]
          [(3-i) + (1+4i)]   [4 + 3i]

The addition follows the same basic rule as ordinary vector addition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SCALAR MULTIPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scalar multiplication in complex vector spaces is a defining feature: the scalar can be any complex number. This operation scales both the real and imaginary parts of the vector components according to the rules of complex multiplication. It is distributive over vector addition and associative with respect to scalar multiplication. The ability to multiply by complex scalars allows us to rotate and scale vectors in the complex plane, which is analogous to multiplying by a phasor in AC circuit analysis. In quantum mechanics, multiplying a state vector by a complex phase factor does not change the physical state, reflecting the global phase invariance. This operation is also essential for constructing linear combinations with complex coefficients, which is necessary for eigenvalue problems where eigenvalues are often complex. Mastering scalar multiplication with complex numbers is crucial for working effectively in complex vector spaces.

The major difference is that the scalar can also be a complex number.

Example: Suppose

  v = [1 + i]
      [2 - i]

and we multiply it by c = 2 + i. Then:

  c·v = (2+i)[1 + i] = [(2+i)(1+i)]
              [2 - i]   [(2+i)(2-i)]

For the first component:

  (2+i)(1+i) = 2 + 2i + i + i²
             = 2 + 3i - 1
             = 1 + 3i

For the second component:

  (2+i)(2-i) = 4 - 2i + 2i - i²
             = 4 + 1
             = 5

Therefore:

  c·v = [1 + 3i]
        [5    ]

This demonstrates an important feature of complex vector spaces: complex numbers can be used as scalars.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIS OF A COMPLEX VECTOR SPACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A basis for a complex vector space is a set of linearly independent vectors that span the entire space, just as in real vector spaces. The coefficients in a linear combination are now complex numbers, but the definition of linear independence and span remains unchanged. The standard basis for ℂⁿ consists of the same unit vectors as in ℝⁿ, but with complex coefficients allowed. This basis is particularly convenient because it gives an immediate coordinate representation for any complex vector. Choosing a different basis is also possible and is often done to simplify a problem, such as when diagonalising a matrix. The existence of a basis is guaranteed by the same dimension theorem that applies to real vector spaces. Complex vector spaces of dimension n are isomorphic to ℂⁿ, so studying bases in ℂⁿ suffices for most purposes.

Just like real vector spaces, complex vector spaces have bases. A basis is a set of linearly independent vectors that can be used to represent every vector in the space.

For ℂ², the standard basis is:

  e₁ = [1]    e₂ = [0]
       [0]         [1]

A vector such as:

  v = [3 + 2i]
      [1 - i ]

can be expressed as:

  v = (3+2i)e₁ + (1-i)e₂

Therefore, the standard basis allows every vector in ℂ² to be represented using complex coefficients.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMPLEX INNER PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inner product in a complex vector space is defined with a conjugate on the first argument to ensure that the norm is always non‑negative and that the product is linear in one argument and conjugate‑linear in the other. This Hermitian inner product, often denoted ⟨u,v⟩ = u†v (where u† is the conjugate transpose of u), satisfies positivity, conjugate symmetry, and linearity in the second argument. It is essential for defining lengths, angles, and orthogonality in complex spaces. In quantum mechanics, the inner product gives the probability amplitude between two states. In signal processing, it measures the correlation between complex signals. The norm derived from the inner product is always real and non‑negative, which is crucial for distance and projection. Understanding this inner product is key to extending many real‑space concepts, like orthogonal projections and the Gram–Schmidt process, to complex spaces.

One important difference between real and complex vector spaces occurs when defining the inner product.

For real vectors, the dot product is:

  u·v = u₁v₁ + ... + uₙvₙ

For complex vectors, we use the complex conjugate of one vector:

  ⟨u,v⟩ = ūᵀ v

Complex Conjugate: Changes the sign of the imaginary part.

Example: If z = 3 + 2i, then its complex conjugate is:

  z̄ = 3 - 2i

Example - Inner Product of a Vector with Itself:

Let:

  v = [1 + i]
      [2    ]

Its conjugate is:

  v̄ = [1 - i]
       [2    ]

The inner product of v with itself is:

  ⟨v,v⟩ = (1-i)(1+i) + (2)(2)

Since:

  (1-i)(1+i) = 1 + i - i - i²
             = 1 + 1
             = 2

We get:

  ⟨v,v⟩ = 2 + 4 = 6

Thus, the squared length of the vector is 6, and its norm is:

  ||v|| = √6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPLEX MATRICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Matrices over the complex numbers are arrays whose entries are complex numbers. They act on complex vectors via the usual matrix‑vector multiplication, which now involves complex arithmetic. Complex matrices are used to represent linear transformations between complex vector spaces. Important classes include Hermitian matrices (A = A†), which have real eigenvalues and orthogonal eigenvectors, and unitary matrices (U†U = I), which preserve the complex inner product and thus length. Complex matrices appear in all the same contexts as real matrices, but with richer structure. In quantum computing, gates are unitary matrices; in control theory, the system matrix may be complex; in electrical engineering, impedance matrices are complex. Operations like addition, multiplication, transposition, and inversion all extend naturally, with the conjugate transpose taking the place of the ordinary transpose in many formulas.

A matrix whose entries are complex numbers can act on vectors in ℂⁿ.

Example:

  A = [1    i  ]
      [2  3 - i]

If:

  x = [1]
      [i]

Then multiplying Ax gives:

  Ax = [1    i  ] [1] = [1(1) + i(i)  ]
       [2  3 - i] [i]   [2(1) + (3-i)i]

First component:

  1(1) + i(i) = 1 + i² = 1 - 1 = 0

Second component:

  2(1) + (3-i)i = 2 + 3i - i²
                = 2 + 3i + 1
                = 3 + 3i

Therefore:

  Ax = [0      ]
       [3 + 3i]

This shows how complex matrices can transform complex vectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EIGENVALUES & EIGENVECTORS IN COMPLEX VECTOR SPACES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the primary advantages of complex vector spaces is that every square matrix has at least one complex eigenvalue (by the fundamental theorem of algebra). This means that even real matrices can have complex eigenvalues and eigenvectors, which are essential for understanding their behaviour, such as oscillations and rotations. The characteristic polynomial det(A - λI) = 0 always has roots in ℂ. In fact, many real matrices that are not diagonalisable over ℝ become diagonalisable over ℂ. This is why complex eigenvalues are central to the study of linear dynamical systems, stability analysis, and in many applications like the analysis of rotating machinery or population dynamics with cyclic behaviour. Eigenvectors in complex spaces may have complex components, and they often come in conjugate pairs for real matrices.

Complex vector spaces are especially important when studying eigenvalues and eigenvectors because some real matrices have eigenvalues that are complex numbers.

The eigenvalue equation is:

  A v = λ v

where λ may be real or complex.

Example - Rotation Matrix:

  A = [0  -1]
      [1   0]

This matrix represents a 90° rotation in the real plane. It does not have real eigenvalues, but it has complex eigenvalues:

  λ = i   and   λ = -i

This demonstrates why complex numbers become important when studying eigenvalues and eigenvectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. APPLICATIONS OF COMPLEX VECTOR SPACES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Complex vector spaces are indispensable in modern science and technology. In electrical engineering, AC circuits are analysed using complex impedances and phasors, turning differential equations into algebraic equations. In signal processing, the Fourier transform represents signals as complex exponentials, enabling filtering and compression. Quantum mechanics is built upon complex Hilbert spaces, with state vectors and operators being complex. Control systems use complex eigenvalues to assess stability and transient response. In telecommunications, complex numbers are used in modulation schemes like QAM. Image processing uses complex operations in the Fourier domain for enhancement and restoration. Even in pure mathematics, complex vector spaces provide the natural setting for the spectral theorem and for studying linear operators on inner product spaces. Their ability to capture both magnitude and phase makes them uniquely suited for problems involving wave phenomena and oscillations.

Complex Vector Spaces have many practical applications:

  1. Electrical Engineering
     • Alternating current (AC) circuits
     • Voltage, impedance, and phase analysis

  2. Signal Processing
     • Signals represented using complex numbers
     • Fourier Transform analysis
     • Frequency analysis

  3. Quantum Mechanics & Quantum Computing
     • Quantum states as complex vectors
     • Quantum operations as complex matrices

  4. Physics
     • Wave functions
     • Quantum field theory

  5. Control Systems
     • Stability analysis
     • System modeling

  6. Telecommunications
     • Signal transmission
     • Modulation techniques

  7. Image Processing
     • Fourier domain filtering
     • Image transformations

  8. Differential Equations
     • Solving with complex eigenvalues
     • System analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. REAL VS. COMPLEX VECTOR SPACES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The main distinction between real and complex vector spaces lies in the scalar field. Real vector spaces are limited to real scalars, which are ordered and have a natural notion of positivity. Complex vector spaces, on the other hand, do not have a total ordering, but they offer algebraic completeness: every polynomial has a root. This leads to richer eigenvalue spectra and more powerful diagonalisation theorems. The inner product also differs: in real spaces it is symmetric, while in complex spaces it is conjugate‑symmetric. Many properties of real vector spaces extend to complex spaces with modifications, such as the need for conjugate transposes instead of ordinary transposes. However, the fundamental structure of linear independence, span, basis, and dimension are the same. Understanding both types of vector spaces is essential, as many problems can be solved more elegantly by allowing complex numbers, and then the real solutions are obtained by taking real parts.

REAL VECTOR SPACE                     COMPLEX VECTOR SPACE
---------------------                  ---------------------
Scalars are real numbers              Scalars are complex numbers
Uses ℝ                                Uses ℂ
Example: ℝ²                           Example: ℂ²
Vectors have real components          Vectors may have complex components
Ordinary dot product                  Complex inner product uses conjugation

Example:

  [2] ∈ ℝ²    vs.    [2 + i ] ∈ ℂ²
  [3]                [3 - 2i]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Complex Vector Space = Vector Space + Complex Scalars

Key concepts covered:

  ✓ Complex Numbers (a + bi)
  ✓ Complex Vector Spaces (ℂⁿ)
  ✓ Vector Addition with Complex Components
  ✓ Scalar Multiplication with Complex Scalars
  ✓ Basis of Complex Vector Spaces
  ✓ Complex Inner Product (using conjugation)
  ✓ Complex Matrices
  ✓ Eigenvalues & Eigenvectors in Complex Spaces
  ✓ Real vs. Complex Vector Spaces

Complex Vector Spaces extend ordinary Linear Algebra and provide the mathematical foundation for many advanced applications, particularly in quantum computing, electrical engineering, signal processing, telecommunications, and physics.
  `,
  examples: [
    "Complex number: z = 3 + 2i with real part 3 and imaginary part 2",
    "Vector in ℂ²: v = [2+i, 3-2i]ᵀ",
    "Vector addition: [1+2i, 3-i]ᵀ + [2-i, 1+4i]ᵀ = [3+i, 4+3i]ᵀ",
    "Scalar multiplication: (2+i)·[1+i, 2-i]ᵀ = [1+3i, 5]ᵀ",
    "Complex inner product: ⟨v,v⟩ = 6, norm = √6",
    "Complex matrix multiplication: A = [[1,i],[2,3-i]] times x = [1,i]ᵀ",
    "Find eigenvalues of a unitary matrix",
    "Rotation matrix A = [[0,-1],[1,0]] has complex eigenvalues λ = ±i",
    "Compute the conjugate transpose of a complex matrix.",
  ],
};

export default topic;