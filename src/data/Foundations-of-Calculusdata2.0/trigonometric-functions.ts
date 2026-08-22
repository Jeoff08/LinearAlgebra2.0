const topic = {
  id: "trigonometric-functions",
  title: "Trigonometric Functions",
  summary:
    "Sine, cosine, tangent, cosecant, secant, cotangent, unit circle, trigonometric identities, graphs, and applications.",
  details: `
Trigonometric functions are functions that describe relationships between angles and sides of triangles. They are also used to model periodic or repeating behavior, such as waves, sound, motion, tides, and circular motion.

The six fundamental trigonometric functions are:

  sin(x), cos(x), tan(x), csc(x), sec(x), cot(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function is written as: f(x) = sin(x)

For a right triangle:

  sin(θ) = opposite/hypotenuse

Important properties:
  • Domain: (-∞, ∞)
  • Range: [-1, 1]
  • Period: 2π
  • Maximum value: 1
  • Minimum value: -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function is: f(x) = cos(x)

For a right triangle:

  cos(θ) = adjacent/hypotenuse

Important properties:
  • Domain: (-∞, ∞)
  • Range: [-1, 1]
  • Period: 2π
  • Maximum value: 1
  • Minimum value: -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function is: tan(x) = sin(x)/cos(x)

For a right triangle:

  tan(θ) = opposite/adjacent

Important properties:
  • Domain: all real numbers except x = π/2 + kπ (where k is an integer)
  • Range: (-∞, ∞)
  • Period: π
  • Vertical asymptotes occur where cos(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE THREE RECIPROCAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The remaining three functions are reciprocals of sine, cosine, and tangent.

Cosecant: csc(x) = 1/sin(x)

Secant: sec(x) = 1/cos(x)

Cotangent: cot(x) = 1/tan(x) = cos(x)/sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SOH-CAH-TOA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For right-triangle problems, one of the most important things to remember is:

  SOH-CAH-TOA

  • SOH: sin(θ) = Opposite/Hypotenuse
  • CAH: cos(θ) = Adjacent/Hypotenuse
  • TOA: tan(θ) = Opposite/Adjacent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The unit circle is extremely important when studying trigonometric functions.

It is a circle with: x² + y² = 1

For an angle θ, the point on the unit circle is: (cos(θ), sin(θ))

This means:
  • x = cos(θ)
  • y = sin(θ)

Understanding the unit circle helps you determine exact trigonometric values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT EXACT VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sine Values:
  • sin(0) = 0
  • sin(π/6) = 1/2
  • sin(π/4) = √2/2
  • sin(π/3) = √3/2
  • sin(π/2) = 1

Cosine Values:
  • cos(0) = 1
  • cos(π/6) = √3/2
  • cos(π/4) = √2/2
  • cos(π/3) = 1/2
  • cos(π/2) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RADIANS AND DEGREES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Angles can be measured in degrees or radians.

One complete rotation is: 360° = 2π radians

Therefore:
  • 180° = π
  • 90° = π/2
  • 60° = π/3
  • 45° = π/4
  • 30° = π/6

Radians are particularly important in Calculus because derivatives and integrals of trigonometric functions are normally expressed using radians.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PERIODIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A trigonometric function is periodic, meaning its pattern repeats.

  • For sine and cosine: T = 2π
  • For tangent: T = π

Example: sin(x + 2π) = sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. AMPLITUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function such as: f(x) = A·sin(Bx)

the amplitude is: |A|

Example: f(x) = 3sin(x) has amplitude 3

Its values range from: -3 ≤ f(x) ≤ 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. GENERAL SINE AND COSINE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common form is:

  f(x) = A·sin(Bx - C) + D

or:

  f(x) = A·cos(Bx - C) + D

where:
  • A = amplitude
  • B = affects the period
  • C = phase/horizontal shift
  • D = vertical shift

The period is: T = 2π/|B|

Example: f(x) = 2sin(3x) + 1 has:
  • Amplitude: 2
  • Period: 2π/3
  • Vertical shift: 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. TRIGONOMETRIC IDENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric identities are equations that are true for all values where both sides are defined.

Pythagorean Identity:
  sin²(x) + cos²(x) = 1

Other important identities:
  • 1 + tan²(x) = sec²(x)
  • 1 + cot²(x) = csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EVEN AND ODD PROPERTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Sine is an odd function: sin(-x) = -sin(x)
  • Cosine is an even function: cos(-x) = cos(x)
  • Tangent is an odd function: tan(-x) = -tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse trigonometric functions allow us to find an angle when we know a trigonometric ratio.

They are:
  • sin⁻¹(x) (arcsin)
  • cos⁻¹(x) (arccos)
  • tan⁻¹(x) (arctan)

Example: sin(θ) = 1/2

Then: θ = sin⁻¹(1/2)

giving: θ = 30° or θ = π/6 (for the principal value)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SOLVING TRIGONOMETRIC EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example: sin(x) = 0

The solutions include: x = 0, π, 2π, ...

More generally: x = nπ, where n is an integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DOUBLE ANGLE FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • sin(2x) = 2sin(x)cos(x)
  • cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)
  • tan(2x) = 2tan(x)/(1 - tan²(x))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. TRIGONOMETRIC FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric functions are essential in Calculus.

Derivatives:
  • d/dx[sin(x)] = cos(x)
  • d/dx[cos(x)] = -sin(x)
  • d/dx[tan(x)] = sec²(x)
  • d/dx[csc(x)] = -csc(x)cot(x)
  • d/dx[sec(x)] = sec(x)tan(x)
  • d/dx[cot(x)] = -csc²(x)

Integrals:
  • ∫sin(x) dx = -cos(x) + C
  • ∫cos(x) dx = sin(x) + C
  • ∫sec²(x) dx = tan(x) + C
  • ∫csc²(x) dx = -cot(x) + C
  • ∫sec(x)tan(x) dx = sec(x) + C
  • ∫csc(x)cot(x) dx = -csc(x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. APPLICATIONS OF TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric functions are used in:

  • Physics
  • Engineering
  • Architecture
  • Navigation
  • Astronomy
  • Waves and vibrations
  • Sound
  • Electrical circuits
  • Circular motion
  • Projectile motion
  • Ocean tides
  • Mechanical systems
  • Computer graphics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Trigonometric Functions, remember:

  • SOH-CAH-TOA for right triangle trigonometry
  • The six fundamental functions: sin, cos, tan, csc, sec, cot
  • The unit circle and exact values
  • Radians are used in Calculus
  • Period and amplitude of trigonometric functions
  • Trigonometric identities
  • Even and odd properties
  • Inverse trigonometric functions
  • Solving trigonometric equations

The key idea to remember is:

  Trigonometric functions describe relationships involving angles, triangles, circles, and periodic patterns. The six fundamental functions—sine, cosine, tangent, cosecant, secant, and cotangent—form an important foundation for Calculus, especially when studying derivatives, integrals, limits, and applications involving periodic behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric Functions are fundamental mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Sine Function
  ✓ Cosine Function
  ✓ Tangent Function
  ✓ Cosecant Function
  ✓ Secant Function
  ✓ Cotangent Function
  ✓ SOH-CAH-TOA
  ✓ Unit Circle
  ✓ Exact Values
  ✓ Radians and Degrees
  ✓ Periodic Functions
  ✓ Amplitude
  ✓ General Sine and Cosine Functions
  ✓ Trigonometric Identities
  ✓ Even and Odd Properties
  ✓ Inverse Trigonometric Functions
  ✓ Double Angle Formulas
  ✓ Solving Trigonometric Equations
  ✓ Applications
  ✓ Trigonometric Functions in Calculus
  `,
  examples: [
    "Evaluate: sin(π/6) = 1/2",
    "Evaluate: cos(π/3) = 1/2",
    "Evaluate: tan(π/4) = 1",
    "Find domain of f(x) = sin(x) → (-∞, ∞)",
    "Find range of f(x) = sin(x) → [-1, 1]",
    "Find period of f(x) = sin(x) → 2π",
    "Find period of f(x) = tan(x) → π",
    "Find amplitude of f(x) = 3sin(x) → 3",
    "Find period of f(x) = sin(2x) → π",
    "Use Pythagorean identity: sin²(x) + cos²(x) = 1",
    "Use double angle: sin(2x) = 2sin(x)cos(x)",
    "Find derivative of sin(x) → cos(x)",
    "Find derivative of cos(x) → -sin(x)",
    "Find integral of ∫sin(x) dx → -cos(x) + C",
    "Solve: sin(x) = 0 → x = nπ",
    "Use SOH-CAH-TOA: sin(θ) = opposite/hypotenuse",
    "Convert 90° to radians → π/2",
    "Even property: cos(-x) = cos(x)",
    "Odd property: sin(-x) = -sin(x)",
    "Inverse: sin⁻¹(1/2) = π/6",
  ],
};

export default topic;