// filename: HyperbolicFunctions.ts

const topic = {
  id: "hyperbolic-functions",
  title: "Hyperbolic Functions",
  summary:
    "A comprehensive guide to hyperbolic functions including sinh, cosh, tanh, coth, sech, and csch. Covers definitions, identities, derivatives, integrals, and applications in calculus and physics.",
  details: `
Hyperbolic functions are a family of mathematical functions that are closely related to exponential functions. They are called hyperbolic because they have relationships with a hyperbola, similar to how ordinary trigonometric functions such as sine and cosine are related to a circle.

The most important hyperbolic functions are:

  sinh x, cosh x, tanh x, coth x, sech x, csch x

They are pronounced:

  sinh x — hyperbolic sine
  cosh x — hyperbolic cosine
  tanh x — hyperbolic tangent
  coth x — hyperbolic cotangent
  sech x — hyperbolic secant
  csch x — hyperbolic cosecant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HYPERBOLIC SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic sine function is defined as:

  sinh x = (eˣ - e⁻ˣ)/2

Example

Find sinh(1):

  sinh(1) = (e¹ - e⁻¹)/2

Using approximate values:

  e ≈ 2.718, e⁻¹ ≈ 0.368

Therefore:

  sinh(1) ≈ (2.718 - 0.368)/2
  sinh(1) ≈ 1.175

Important Property

Hyperbolic sine is an odd function:

  sinh(-x) = -sinh(x)

This means its graph is symmetric about the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HYPERBOLIC COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosine function is defined as:

  cosh x = (eˣ + e⁻ˣ)/2

Notice the difference between sinh x and cosh x:

  sinh x = (eˣ - e⁻ˣ)/2

while:

  cosh x = (eˣ + e⁻ˣ)/2

Example

Find cosh(0):

  cosh(0) = (e⁰ + e⁰)/2

Since:

  e⁰ = 1

we get:

  cosh(0) = (1 + 1)/2 = 1

Important Property

Hyperbolic cosine is an even function:

  cosh(-x) = cosh(x)

Therefore, its graph is symmetric about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HYPERBOLIC TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic tangent is defined as:

  tanh x = sinh x / cosh x

Substituting the definitions:

  tanh x = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)

Example

Find tanh(0):

  tanh(0) = sinh(0)/cosh(0)

Since:

  sinh(0) = 0

and:

  cosh(0) = 1

Then:

  tanh(0) = 0

Important Behavior

As x becomes very large:

  tanh x → 1

As x becomes very negative:

  tanh x → -1

Therefore, the graph has horizontal asymptotes:

  y = 1

and:

  y = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HYPERBOLIC COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cotangent is the reciprocal of hyperbolic tangent:

  coth x = 1/tanh x

It can also be written as:

  coth x = cosh x / sinh x

Using exponential functions:

  coth x = (eˣ + e⁻ˣ)/(eˣ - e⁻ˣ)

Since sinh(0) = 0, the function is undefined at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. HYPERBOLIC SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic secant is the reciprocal of hyperbolic cosine:

  sech x = 1/cosh x

Using exponentials:

  sech x = 2/(eˣ + e⁻ˣ)

Since:

  cosh(0) = 1

then:

  sech(0) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HYPERBOLIC COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosecant is the reciprocal of hyperbolic sine:

  csch x = 1/sinh x

Using the exponential definition:

  csch x = 2/(eˣ - e⁻ˣ)

Since:

  sinh(0) = 0

the function is undefined at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT IDENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic functions have identities similar to trigonometric functions, but there are important differences.

Fundamental Hyperbolic Identity

The most important identity is:

  cosh² x - sinh² x = 1

Compare this with the trigonometric identity:

  sin² x + cos² x = 1

Notice the difference:

  Trigonometric:  sin² x + cos² x = 1
  Hyperbolic:     cosh² x - sinh² x = 1

Example

If:

  cosh x = 5

find sinh x.

Using:

  cosh² x - sinh² x = 1

Substitute:

  5² - sinh² x = 1
  25 - sinh² x = 1
  sinh² x = 24

Therefore:

  sinh x = ±√24

The appropriate sign depends on the value of x.

Other Important Identities

Tangent Identity

  1 - tanh² x = sech² x

Cotangent Identity

  coth² x - 1 = csch² x

These identities are useful when simplifying expressions and solving calculus problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVES OF HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic functions are important in calculus because their derivatives are relatively simple.

Hyperbolic Sine

  d/dx (sinh x) = cosh x

Hyperbolic Cosine

  d/dx (cosh x) = sinh x

Notice:

  d/dx (sinh x) = cosh x

and:

  d/dx (cosh x) = sinh x

This is different from ordinary trigonometric functions, where:

  d/dx (sin x) = cos x

but:

  d/dx (cos x) = -sin x

There is no negative sign in the derivative of cosh x.

Hyperbolic Tangent

  d/dx (tanh x) = sech² x

Hyperbolic Cotangent

  d/dx (coth x) = -csch² x

Hyperbolic Secant

  d/dx (sech x) = -sech x · tanh x

Hyperbolic Cosecant

  d/dx (csch x) = -csch x · coth x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: DIFFERENTIATING HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  y = 3 sinh x + 4 cosh x

Differentiate each term:

  d/dx (3 sinh x) = 3 cosh x
  d/dx (4 cosh x) = 4 sinh x

Therefore:

  y' = 3 cosh x + 4 sinh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRALS OF HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because differentiation and integration are inverse processes:

  ∫ sinh x dx = cosh x + C

and:

  ∫ cosh x dx = sinh x + C

Other important integrals include:

  ∫ sech² x dx = tanh x + C
  ∫ csch² x dx = -coth x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ (5 cosh x - 2 sinh x) dx

Integrate each term:

  ∫ 5 cosh x dx = 5 sinh x
  ∫ -2 sinh x dx = -2 cosh x

Therefore:

  5 sinh x - 2 cosh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CONNECTION TO THE HYPERBOLA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The name hyperbolic functions comes from the identity:

  cosh² x - sinh² x = 1

This resembles the equation of a hyperbola:

  x² - y² = 1

Compare this with ordinary trigonometric functions:

  cos² θ + sin² θ = 1

which corresponds to the unit circle:

  x² + y² = 1

So:

  Sine and cosine → connected to the circle
  Hyperbolic sine and cosine → connected to the hyperbola

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATIONS OF HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic functions appear in many real-world applications.

1. Hanging Cables

The shape of a hanging cable, such as a power line or suspension bridge cable, is called a catenary:

  y = a cosh(x/a)

This makes cosh x important in engineering and physics.

2. Physics

Hyperbolic functions are used in:

  Relativity
  Wave equations
  Heat transfer
  Fluid mechanics
  Electrical engineering

3. Differential Equations

Solutions to certain differential equations naturally involve:

  sinh x

and:

  cosh x

For example:

  y'' = y

has solutions involving:

  y = C₁ cosh x + C₂ sinh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Definition
  ──────────────────────────────────────────────
  sinh x          (eˣ - e⁻ˣ)/2
  cosh x          (eˣ + e⁻ˣ)/2
  tanh x          sinh x / cosh x
  coth x          cosh x / sinh x
  sech x          1 / cosh x
  csch x          1 / sinh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK DERIVATIVE AND INTEGRAL REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Derivative                    Integral
  ──────────────────────────────────────────────────────────────
  sinh x          cosh x                        cosh x + C
  cosh x          sinh x                        sinh x + C
  tanh x          sech² x                       ln(cosh x) + C
  coth x          -csch² x                      ln|sinh x| + C
  sech x          -sech x · tanh x              arctan(sinh x) + C
  csch x          -csch x · coth x              -coth x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definitions:
    sinh x = (eˣ - e⁻ˣ)/2
    cosh x = (eˣ + e⁻ˣ)/2

  Fundamental Identity:
    cosh² x - sinh² x = 1

  Derivatives:
    d/dx (sinh x) = cosh x
    d/dx (cosh x) = sinh x
    d/dx (tanh x) = sech² x

  Integrals:
    ∫ sinh x dx = cosh x + C
    ∫ cosh x dx = sinh x + C
    ∫ sech² x dx = tanh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic functions may look similar to trigonometric functions, but instead of being based primarily on the geometry of a circle, they are closely connected to exponential functions and hyperbolas.

The most important hyperbolic functions are:

  sinh x = (eˣ - e⁻ˣ)/2
  cosh x = (eˣ + e⁻ˣ)/2
  tanh x = sinh x / cosh x

The most important identity is:

  cosh² x - sinh² x = 1

The most important derivatives are:

  d/dx (sinh x) = cosh x
  d/dx (cosh x) = sinh x

In Calculus, hyperbolic functions are useful for solving derivatives, integrals, differential equations, and modeling physical shapes such as hanging cables (catenaries).

Easy way to remember: Hyperbolic functions are like trigonometric functions but based on the hyperbola instead of the circle. They are defined using exponentials. The key identity has a minus sign instead of a plus sign.
  `,
  examples: [
    "sinh 0 = 0",
    "cosh 0 = 1",
    "tanh 0 = 0",
    "cosh² x - sinh² x = 1",
    "d/dx (sinh x) = cosh x",
    "d/dx (cosh x) = sinh x",
    "d/dx (tanh x) = sech² x",
    "∫ sinh x dx = cosh x + C",
    "∫ cosh x dx = sinh x + C",
    "sinh(1) ≈ 1.175",
    "y = a cosh(x/a) is a catenary (hanging cable)",
  ],
};

export default topic;