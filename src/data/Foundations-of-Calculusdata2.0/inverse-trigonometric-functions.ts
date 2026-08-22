const topic = {
  id: "inverse-trigonometric-functions",
  title: "Inverse Trigonometric Functions",
  summary:
    "Arcsine, arccosine, arctangent, domain and range, principal values, graphs, and applications.",
  details: `
Inverse trigonometric functions are used to find an angle when the value of a trigonometric ratio is known.

They are the inverse functions of sine, cosine, and tangent.

The three main inverse trigonometric functions are:

  sin⁻¹(x), cos⁻¹(x), tan⁻¹(x)

They are also called:
  • sin⁻¹(x) → arcsine
  • cos⁻¹(x) → arccosine
  • tan⁻¹(x) → arctangent

Important: sin⁻¹(x) means the inverse sine function, not 1/sin(x). The reciprocal of sine is csc(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INVERSE SINE — ARCSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse sine function is: f(x) = sin⁻¹(x)

It answers the question: What angle has a sine equal to x?

Example: sin(θ) = 1/2

Apply inverse sine: θ = sin⁻¹(1/2)

Therefore: θ = π/6 or θ = 30°

Domain and Range
─────────────────

For y = sin⁻¹(x):
  • Domain: [-1, 1]
  • Range: [-π/2, π/2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INVERSE COSINE — ARCCOSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cosine function is: f(x) = cos⁻¹(x)

It answers: What angle has a cosine equal to x?

Example: cos(θ) = 1/2

Apply inverse cosine: θ = cos⁻¹(1/2)

Therefore: θ = π/3 or θ = 60°

Domain and Range
─────────────────

For y = cos⁻¹(x):
  • Domain: [-1, 1]
  • Range: [0, π]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INVERSE TANGENT — ARCTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse tangent function is: f(x) = tan⁻¹(x)

It answers: What angle has a tangent equal to x?

Example: tan(θ) = 1

Apply inverse tangent: θ = tan⁻¹(1)

Therefore: θ = π/4 or θ = 45°

Domain and Range
─────────────────

For y = tan⁻¹(x):
  • Domain: (-∞, ∞)
  • Range: (-π/2, π/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GRAPHS OF INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Arcsine: y = sin⁻¹(x)
  • Domain: [-1, 1]
  • Range: [-π/2, π/2]
  • Increasing function

Arccosine: y = cos⁻¹(x)
  • Domain: [-1, 1]
  • Range: [0, π]
  • Decreasing function

Arctangent: y = tan⁻¹(x)
  • Domain: (-∞, ∞)
  • Range: (-π/2, π/2)
  • Increasing function
  • Horizontal asymptotes at y = ±π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INVERSE FUNCTIONS AND RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A trigonometric function normally repeats its values, so it is not one-to-one over its entire domain.

To create an inverse function, we restrict the original function to a specific interval.

Sine
─────

sin(x) is restricted to: [-π/2, π/2]

Then its inverse is: arcsin(x)

Cosine
───────

cos(x) is restricted to: [0, π]

Then its inverse is: arccos(x)

Tangent
────────

tan(x) is restricted to: (-π/2, π/2)

Then its inverse is: arctan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IMPORTANT INVERSE RELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For appropriate values of x:

  • sin(arcsin(x)) = x
  • cos(arccos(x)) = x
  • tan(arctan(x)) = x

However, the reverse relationships require attention to the restricted ranges.

For example: arcsin(sin(x)) = x is only guaranteed when x is in [-π/2, π/2].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SOLVING FOR ANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: sin(θ) = 0.7

Use inverse sine: θ = sin⁻¹(0.7)

Approximately: θ ≈ 0.775 radians or θ ≈ 44.43°

The inverse function gives the principal angle. When solving a trigonometric equation over a larger interval, you must consider other angles that have the same trigonometric value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INVERSE TRIGONOMETRIC FUNCTIONS IN RIGHT TRIANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a right triangle has:
  • Opposite side = 6
  • Adjacent side = 8

Using tangent: tan(θ) = 6/8 = 3/4

Now use inverse tangent: θ = tan⁻¹(3/4)

Therefore: θ ≈ 36.87°

This is one of the most common applications of inverse trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. RECIPROCAL FUNCTIONS VS INVERSE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The reciprocal functions are:
  • csc(x) = 1/sin(x)
  • sec(x) = 1/cos(x)
  • cot(x) = 1/tan(x)

The inverse trigonometric functions are:
  • arcsin(x), arccos(x), arctan(x)

You should not confuse sin⁻¹(x) with csc(x) because they mean completely different things.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXACT VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Common exact values:

  • sin⁻¹(0) = 0
  • sin⁻¹(1/2) = π/6
  • sin⁻¹(√2/2) = π/4
  • sin⁻¹(√3/2) = π/3
  • sin⁻¹(1) = π/2

  • cos⁻¹(1) = 0
  • cos⁻¹(√3/2) = π/6
  • cos⁻¹(√2/2) = π/4
  • cos⁻¹(1/2) = π/3
  • cos⁻¹(0) = π/2

  • tan⁻¹(0) = 0
  • tan⁻¹(1/√3) = π/6
  • tan⁻¹(1) = π/4
  • tan⁻¹(√3) = π/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INVERSE TRIGONOMETRIC FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions are important in Calculus.

Derivatives:
  • d/dx[sin⁻¹(x)] = 1/√(1 - x²)
  • d/dx[cos⁻¹(x)] = -1/√(1 - x²)
  • d/dx[tan⁻¹(x)] = 1/(1 + x²)

Integrals:
  • ∫1/√(1 - x²) dx = sin⁻¹(x) + C
  • ∫-1/√(1 - x²) dx = cos⁻¹(x) + C
  • ∫1/(1 + x²) dx = tan⁻¹(x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. APPLICATIONS OF INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions are commonly used in:

  • Finding unknown angles
  • Triangle calculations
  • Navigation
  • Surveying
  • Engineering
  • Physics
  • Computer graphics
  • Robotics
  • Astronomy
  • Calculating directions and slopes
  • Calculus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Inverse Trigonometric Functions, remember:

  • arcsin(x) asks: what angle has sine = x?
  • arccos(x) asks: what angle has cosine = x?
  • arctan(x) asks: what angle has tangent = x?
  • Domain of arcsin and arccos: [-1, 1]
  • Domain of arctan: (-∞, ∞)
  • Range of arcsin: [-π/2, π/2]
  • Range of arccos: [0, π]
  • Range of arctan: (-π/2, π/2)

The key idea to remember is:

  Inverse trigonometric functions are used to find an angle when a trigonometric ratio is known. The three most important are arcsin(x), arccos(x), and arctan(x), and they are especially important in Calculus because their derivatives and integrals are frequently used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse Trigonometric Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Inverse Sine (arcsin)
  ✓ Inverse Cosine (arccos)
  ✓ Inverse Tangent (arctan)
  ✓ Domain and Range
  ✓ Graphs
  ✓ Restricted Domains
  ✓ Inverse Relationships
  ✓ Solving for Angles
  ✓ Right-Triangle Applications
  ✓ Reciprocal vs Inverse Functions
  ✓ Exact Values
  ✓ Inverse Trigonometric Functions in Calculus
  ✓ Applications
  `,
  examples: [
    "Evaluate: sin⁻¹(1/2) = π/6",
    "Evaluate: cos⁻¹(1/2) = π/3",
    "Evaluate: tan⁻¹(1) = π/4",
    "Find domain of sin⁻¹(x) → [-1, 1]",
    "Find range of sin⁻¹(x) → [-π/2, π/2]",
    "Find domain of cos⁻¹(x) → [-1, 1]",
    "Find range of cos⁻¹(x) → [0, π]",
    "Find domain of tan⁻¹(x) → (-∞, ∞)",
    "Find range of tan⁻¹(x) → (-π/2, π/2)",
    "Find angle: sin(θ) = 0.7 → θ = sin⁻¹(0.7)",
    "Find angle: tan(θ) = 3/4 → θ = tan⁻¹(3/4) ≈ 36.87°",
    "Use inverse relationship: sin(arcsin(x)) = x",
    "Distinguish: sin⁻¹(x) vs csc(x)",
    "Find derivative of sin⁻¹(x) → 1/√(1 - x²)",
    "Find derivative of tan⁻¹(x) → 1/(1 + x²)",
    "Find integral of ∫1/√(1 - x²) dx → sin⁻¹(x) + C",
    "Find integral of ∫1/(1 + x²) dx → tan⁻¹(x) + C",
    "Evaluate: sin⁻¹(0) = 0",
    "Evaluate: cos⁻¹(0) = π/2",
    "Evaluate: tan⁻¹(√3) = π/3",
  ],
};

export default topic;