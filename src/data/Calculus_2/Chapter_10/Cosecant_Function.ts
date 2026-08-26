// filename: CosecantFunction.ts

const topic = {
  id: "cosecant-function",
  title: "Cosecant Function",
  summary:
    "A fundamental trigonometric function defined as the reciprocal of sine. It has unique properties including a period of 2π, vertical asymptotes, and a range outside the interval [-1, 1]. Essential in calculus for derivatives and integrals.",
  details: `
The cosecant function is one of the six basic trigonometric functions. It is closely related to the sine function because cosecant is the reciprocal of sine.

The cosecant function is written as:

  y = csc x

It is important in trigonometry and calculus, especially in derivatives, integrals, identities, and graphing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosecant function is defined as the reciprocal of sine:

  csc x = 1 / sin x

This means that if you know the value of sine, you can find cosecant by taking its reciprocal.

Example

If:

  sin x = 1/2

then:

  csc x = 1 / (1/2) = 2

If:

  sin x = -1/2

then:

  csc x = -2

Important Reciprocal Relationship

  csc x · sin x = 1

whenever both functions are defined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COSECANT IN A RIGHT TRIANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle:

  sin θ = Opposite / Hypotenuse

Since cosecant is the reciprocal of sine:

  csc θ = Hypotenuse / Opposite

Compare them:

  Function    Ratio
  ──────────────────────────
  sin θ       Opposite / Hypotenuse
  csc θ       Hypotenuse / Opposite

Example

Suppose:

  Opposite side = 3
  Hypotenuse = 5

Then:

  sin θ = 3/5

Therefore:

  csc θ = 5/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. COSECANT ON THE UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On the unit circle:

  sin x

represents the vertical coordinate.

Since:

  csc x = 1 / sin x

cosecant is the reciprocal of that vertical coordinate.

This explains its behavior:

  When sin x = 1, then csc x = 1.
  When sin x = -1, then csc x = -1.
  When sin x approaches 0, cosecant becomes very large.

For example:

  sin x = 0.1

then:

  csc x = 10

If:

  sin x = 0.01

then:

  csc x = 100

As sine approaches zero:

  csc x → ±∞

This is why the cosecant graph has vertical asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:

  csc x = 1 / sin x

cosecant is undefined whenever:

  sin x = 0

Sine equals zero at:

  x = nπ

where n is any integer.

Therefore, the domain of cosecant is:

  x ≠ nπ

Examples where cosecant is undefined include:

  0, π, 2π, 3π

and:

  -π, -2π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function has the range:

  -1 ≤ sin x ≤ 1

Since cosecant is the reciprocal of sine, its values cannot be between -1 and 1.

Therefore:

  csc x ≤ -1 or csc x ≥ 1

In interval notation:

  (-∞, -1] ∪ [1, ∞)

Possible Values

  csc x = 1
  csc x = 2
  csc x = -4

Impossible Values

  csc x = 1/2

because that would require:

  sin x = 2

which is impossible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PERIOD OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cosecant has the same period as sine:

  2π

This means:

  csc(x + 2π) = csc x

The graph repeats every:

  2π

radians, or:

  360°

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GRAPH OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic function is:

  y = csc x

The cosecant graph is closely related to the sine graph.

Vertical Asymptotes

Cosecant is undefined when:

  sin x = 0

Therefore, vertical asymptotes occur at:

  x = nπ

These include:

  x = 0, π, 2π, -π

Important Points

When:

  sin x = 1

we get:

  csc x = 1

When:

  sin x = -1

we get:

  csc x = -1

Thus, the closest points of the cosecant graph to the x-axis occur at:

  y = 1

and:

  y = -1

Shape of the Graph

The cosecant graph consists of separate curved branches.

  Upper branches have: y ≥ 1
  Lower branches have: y ≤ -1

There are no values between:

  -1 < y < 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT VALUES OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Angle        Sine         Cosecant
  ──────────────────────────────────
  0            0            Undefined
  π/6          1/2          2
  π/4          √2/2         √2
  π/3          √3/2         2√3/3
  π/2          1            1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important derivative rules is:

  d/dx (csc x) = -csc x · cot x

The negative sign is important.

Derivation of the Formula

Start with:

  csc x = 1 / sin x

Rewrite:

  csc x = (sin x)⁻¹

Differentiate using the Chain Rule:

  d/dx (sin x)⁻¹

Apply the power rule:

  = -1(sin x)⁻² · (cos x)

Therefore:

  = -cos x / sin² x

Now separate the expression:

  -(1 / sin x) · (cos x / sin x)

This becomes:

  -csc x · cot x

Therefore:

  d/dx (csc x) = -csc x · cot x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COSECANT AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When there is an expression inside cosecant, use the Chain Rule.

Example 1

  y = csc(3x)

The derivative of the outside function is:

  -csc(3x) · cot(3x)

The derivative of the inside function is:

  3

Therefore:

  y' = -3 csc(3x) cot(3x)

Example 2

  y = csc(x²)

Differentiate the outside:

  -csc(x²) · cot(x²)

Differentiate the inside:

  2x

Therefore:

  y' = -2x csc(x²) cot(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRAL OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ csc x dx

The answer is:

  ∫ csc x dx = ln|csc x - cot x| + C

Another equivalent form is:

  ∫ csc x dx = -ln|csc x + cot x| + C

Both forms are correct.

Why Is the Integral of Cosecant Special?

The integral:

  ∫ csc x dx

is not immediately obvious. We use a technique similar to the integral of secant.

Multiply by:

  (csc x - cot x) / (csc x - cot x)

Then:

  ∫ csc x · ((csc x - cot x) / (csc x - cot x)) dx

The numerator becomes:

  csc² x - csc x · cot x

Notice that:

  d/dx (csc x - cot x)

is:

  -csc x · cot x + csc² x

which is exactly:

  csc² x - csc x · cot x

Therefore, let:

  u = csc x - cot x

Then:

  du = (csc² x - csc x · cot x) dx

The integral becomes:

  ∫ (1/u) du

which gives:

  ln|u| + C

Substitute back:

  ∫ csc x dx = ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF csc² x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important integral is:

  ∫ csc² x dx

Since:

  d/dx (cot x) = -csc² x

we have:

  ∫ csc² x dx = -cot x + C

Example

Evaluate:

  ∫ 4 csc² x dx

The constant remains:

  -4 cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT IDENTITY INVOLVING COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important identities is:

  1 + cot² x = csc² x

This identity is very useful in calculus.

For example:

  csc² x - 1 = cot² x

and:

  csc² x - cot² x = 1

These forms are frequently used when simplifying derivatives and integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. RELATIONSHIP BETWEEN COSECANT AND SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cosecant and sine are reciprocal functions:

  csc x = 1 / sin x

Compare them:

  Property          Sine                 Cosecant
  ──────────────────────────────────────────────────────────
  Definition        sin x                1 / sin x
  Domain            All real numbers     x ≠ nπ
  Range             [-1, 1]              (-∞, -1] ∪ [1, ∞)
  Period            2π                   2π
  Derivative        cos x                -csc x · cot x
  Integral          -cos x + C           ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. APPLICATIONS OF THE COSECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosecant function is used in several areas:

📐 Geometry

It helps describe relationships involving angles and triangle sides.

📊 Calculus

Cosecant appears in derivatives, integrals, identities, and trigonometric substitutions.

⚙️ Physics

It can appear in formulas involving waves, angles, and physical systems.

💻 Engineering and Computer Science

Cosecant and other trigonometric functions may be used in coordinate systems, simulations, signal processing, and mathematical models.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          Cosecant Function
  ──────────────────────────────────────────
  Function          csc x
  Definition        1 / sin x
  Reciprocal of     Sine
  Domain            x ≠ nπ
  Range             (-∞, -1] ∪ [1, ∞)
  Period            2π
  Vertical Asymptotes  x = nπ
  Derivative        -csc x · cot x
  Integral          ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definition:
    csc x = 1 / sin x

  Derivative:
    d/dx (csc x) = -csc x · cot x

  Chain Rule:
    d/dx (csc(u)) = -csc(u) · cot(u) · u'

  Integral:
    ∫ csc x dx = ln|csc x - cot x| + C

  Integral of csc² x:
    ∫ csc² x dx = -cot x + C

  Identity:
    1 + cot² x = csc² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosecant function is the reciprocal of sine:

  csc x = 1 / sin x

Important Properties:

  • Domain: x ≠ nπ
  • Range: (-∞, -1] ∪ [1, ∞)
  • Period: 2π
  • Derivative: -csc x · cot x
  • Integral: ln|csc x - cot x| + C

Key Idea

The cosecant function is simply the reciprocal of sine, but this relationship gives it a very different graph and behavior.

While sine is always between:

  -1 ≤ sin x ≤ 1

cosecant exists outside that interval:

  csc x ≤ -1 or csc x ≥ 1

The three most important formulas to remember are:

  csc x = 1 / sin x
  d/dx (csc x) = -csc x · cot x
  ∫ csc x dx = ln|csc x - cot x| + C

Easy way to remember: Cosecant is the reciprocal of sine, and it has asymptotes wherever sine equals zero.
  `,
  examples: [
    "csc 0 is undefined",
    "csc(π/6) = 2",
    "csc(π/4) = √2",
    "csc(π/2) = 1",
    "d/dx (csc x) = -csc x · cot x",
    "d/dx (csc(3x)) = -3 csc(3x) cot(3x)",
    "d/dx (csc(x²)) = -2x csc(x²) cot(x²)",
    "∫ csc x dx = ln|csc x - cot x| + C",
    "∫ csc² x dx = -cot x + C",
    "1 + cot² x = csc² x",
    "csc x · sin x = 1",
  ],
};

export default topic;