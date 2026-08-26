// filename: CotangentFunction.ts

const topic = {
  id: "cotangent-function",
  title: "Cotangent Function",
  summary:
    "A fundamental trigonometric function defined as the reciprocal of tangent, or the ratio of cosine to sine. It has unique properties including a period of π, vertical asymptotes, and a decreasing behavior on its domain.",
  details: `
The cotangent function is one of the six basic trigonometric functions. It is closely related to the tangent function and is essentially its reciprocal.

The cotangent function is written as:

  y = cot x

It is important in trigonometry and calculus, especially when working with derivatives, integrals, identities, and trigonometric equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cotangent function is defined as the reciprocal of tangent:

  cot x = 1 / tan x

Since:

  tan x = sin x / cos x

we can rewrite cotangent as:

  cot x = cos x / sin x

This formula is extremely important because it helps us understand the properties, derivatives, and integrals of cotangent.

Easy Memory Trick

Think of tangent and cotangent as opposites in fraction form:

  tan x = sin x / cos x
  cot x = cos x / sin x

So:

  cot x = 1 / tan x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COTANGENT IN A RIGHT TRIANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle:

  cot θ = Adjacent / Opposite

Compare this with tangent:

  tan θ = Opposite / Adjacent

Therefore, cotangent simply reverses the ratio.

  Function    Ratio
  ──────────────────────────
  tan θ       Opposite / Adjacent
  cot θ       Adjacent / Opposite

Example

Suppose:

  Opposite side = 3
  Adjacent side = 4

Then:

  tan θ = 3/4

Therefore:

  cot θ = 4/3

Notice that they are reciprocals:

  (3/4) · (4/3) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. COTANGENT ON THE UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:

  cot x = cos x / sin x

we can understand cotangent using the unit circle.

On the unit circle:

  cos x represents the horizontal coordinate.
  sin x represents the vertical coordinate.

Therefore:

  cot x = horizontal coordinate / vertical coordinate

When the vertical coordinate, sin x, approaches zero, the cotangent value becomes very large.

For example, if:

  sin x = 0.01

and:

  cos x ≈ 1

then:

  cot x ≈ 1/0.01 = 100

This explains why cotangent has vertical asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cotangent is defined as:

  cot x = cos x / sin x

Therefore, cotangent is undefined when:

  sin x = 0

Sine equals zero at:

  x = nπ

where n is any integer.

Therefore, the domain is:

  x ≠ nπ

Examples where cotangent is undefined:

  0, π, 2π, -π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cotangent function can produce any real number.

Therefore:

  (-∞, ∞)

Unlike sine and cosine, cotangent is not restricted between -1 and 1.

Examples:

  cot x = -5
  cot x = 0
  cot x = 10

are all possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PERIOD OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cotangent function repeats every:

  π

radians, or:

  180°

This means:

  cot(x + π) = cot x

Compare the periods:

  Function    Period
  ──────────────────
  sin x       2π
  cos x       2π
  tan x       π
  cot x       π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GRAPH OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic function is:

  y = cot x

The cotangent graph has several important characteristics.

Vertical Asymptotes

Cotangent is undefined when:

  x = nπ

Therefore, vertical asymptotes occur at:

  x = 0, ±π, ±2π, ...

Zeros

Cotangent equals zero when:

  cos x = 0

Therefore:

  x = π/2 + nπ

Periodic Behavior

The cotangent graph repeats every:

  π

Decreasing Behavior

Unlike tangent, which increases from left to right, cotangent generally decreases from positive infinity to negative infinity between its vertical asymptotes.

For example, between:

  0 < x < π

cotangent starts near:

  +∞

decreases through:

  0

at:

  x = π/2

and continues toward:

  -∞

as x approaches π.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT VALUES OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Angle                    Cotangent
  ──────────────────────────────────
  0                        Undefined
  π/6                      √3
  π/4                      1
  π/3                      √3/3
  π/2                      0

Example

At:

  x = π/4

we know:

  sin(π/4) = √2/2

and:

  cos(π/4) = √2/2

Therefore:

  cot(π/4) = cos(π/4)/sin(π/4) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of cotangent is:

  d/dx (cot x) = -csc² x

This is an important derivative rule to memorize.

Derivation

Start with:

  cot x = cos x / sin x

Using the quotient rule:

  d/dx (cos x / sin x) = (-sin x · sin x - cos x · cos x) / sin² x

Simplify:

  = (-sin² x - cos² x) / sin² x

Using:

  sin² x + cos² x = 1

we get:

  = -1 / sin² x

Since:

  csc x = 1 / sin x

then:

  d/dx (cot x) = -csc² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COTANGENT AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If cotangent contains another expression, use the Chain Rule.

Example 1

  y = cot(3x)

Differentiate the outside:

  -csc²(3x)

Differentiate the inside:

  3

Therefore:

  y' = -3 csc²(3x)

Example 2

  y = cot(x²)

The outside derivative is:

  -csc²(x²)

The derivative of x² is:

  2x

Therefore:

  y' = -2x csc²(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRAL OF THE COTANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ cot x dx

Since:

  cot x = cos x / sin x

we can write:

  ∫ (cos x / sin x) dx

Let:

  u = sin x

Then:

  du = cos x dx

The integral becomes:

  ∫ (1/u) du

Integrate:

  ln|u| + C

Substitute back:

  ∫ cot x dx = ln|sin x| + C

Another equivalent form is:

  ∫ cot x dx = -ln|csc x| + C

However, be careful: the more direct equivalent relationship is

  ln|sin x| = -ln|csc x|

so the correct alternative form is:

  ∫ cot x dx = -ln|csc x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RELATIONSHIP BETWEEN TANGENT AND COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent and cotangent are reciprocal functions:

  tan x · cot x = 1

whenever both functions are defined.

Compare them:

  Property          Tangent                Cotangent
  ──────────────────────────────────────────────────────────
  Definition        sin x / cos x          cos x / sin x
  Reciprocal        cot x                  tan x
  Period            π                      π
  Range             All real numbers       All real numbers
  Undefined when    cos x = 0              sin x = 0
  Derivative        sec² x                 -csc² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY IS COTANGENT DECREASING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of cotangent is:

  d/dx (cot x) = -csc² x

Since:

  csc² x > 0

whenever cotangent is defined, then:

  -csc² x < 0

Therefore, the derivative is always negative.

This means:

  cot x is decreasing on every interval where it is defined

For example, between 0 and π, cotangent continuously decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. APPLICATIONS OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cotangent appears in:

📐 Geometry

It helps describe relationships between sides and angles.

📊 Calculus

It appears in derivatives, integrals, and trigonometric substitutions.

⚡ Physics

Cotangent can be used in problems involving angles, waves, and directional relationships.

💻 Engineering and Computer Science

Trigonometric functions are used in graphics, simulations, coordinate transformations, and signal processing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          Cotangent Function
  ──────────────────────────────────────────
  Function          cot x
  Definition        cos x / sin x
  Reciprocal of     tan x
  Domain            x ≠ nπ
  Range             All real numbers (-∞, ∞)
  Period            π
  X-intercepts      x = π/2 + nπ
  Vertical Asymptotes  x = nπ
  Behavior          Decreasing on each interval
  Derivative        -csc² x
  Integral          ln|sin x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definition:
    cot x = cos x / sin x = 1 / tan x

  Derivative:
    d/dx (cot x) = -csc² x

  Chain Rule:
    d/dx (cot(u)) = -csc²(u) · u'

  Integral:
    ∫ cot x dx = ln|sin x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cotangent function is defined as:

  cot x = cos x / sin x = 1 / tan x

Important Properties:

  • Domain: x ≠ nπ
  • Range: All real numbers
  • Period: π
  • Derivative: -csc² x
  • Integral: ln|sin x| + C

Key Idea

The cotangent function is essentially the inverse ratio of tangent. While tangent measures:

  vertical change / horizontal change

cotangent measures:

  horizontal change / vertical change

The most important formulas to remember are:

  cot x = cos x / sin x
  d/dx (cot x) = -csc² x
  ∫ cot x dx = ln|sin x| + C

Easy way to remember: Cotangent = cosine divided by sine, and it has asymptotes wherever sine equals zero.
  `,
  examples: [
    "cot 0 is undefined",
    "cot(π/4) = 1",
    "cot(π/6) = √3",
    "cot(π/2) = 0",
    "d/dx (cot x) = -csc² x",
    "d/dx (cot(3x)) = -3 csc²(3x)",
    "d/dx (cot(x²)) = -2x csc²(x²)",
    "∫ cot x dx = ln|sin x| + C",
    "tan x · cot x = 1",
    "cot(θ) = adjacent/opposite in a right triangle",
  ],
};

export default topic;