// filename: TangentFunction.ts

const topic = {
  id: "tangent-function",
  title: "Tangent Function",
  summary:
    "A fundamental trigonometric function defined as the ratio of sine to cosine. It has unique properties including a period of π, vertical asymptotes, and an unbounded range, making it essential in calculus, geometry, and physics.",
  details: `
The tangent function is one of the six basic trigonometric functions. It is closely related to the sine and cosine functions and is commonly used in calculus, geometry, physics, engineering, and many other fields.

The tangent function is written as:

  y = tan x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function can be defined using sine and cosine:

  tan x = sin x / cos x

This means that tangent is the ratio of sine to cosine.

Because of this definition, tangent is undefined whenever cos x = 0.

For example:

  cos(π/2) = 0

Therefore:

  tan(π/2) = sin(π/2) / cos(π/2) = 1/0

Since division by zero is undefined:

  tan(π/2) is undefined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TANGENT IN A RIGHT TRIANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle, tangent is defined as:

  tan θ = opposite side / adjacent side

A useful memory trick is SOH-CAH-TOA:

  SOH: sin θ = Opposite / Hypotenuse
  CAH: cos θ = Adjacent / Hypotenuse
  TOA: tan θ = Opposite / Adjacent

For example, if:

  Opposite = 3
  Adjacent = 4

Then:

  tan θ = 3/4

The tangent tells us how steep the angle is relative to the horizontal direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TANGENT ON THE UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function can also be understood using the unit circle.

We know:

  sin x = vertical coordinate

and:

  cos x = horizontal coordinate

Therefore:

  tan x = sin x / cos x

This relationship explains why tangent becomes extremely large when cosine gets close to zero.

For example, if:

  cos x = 0.01

and sine is close to 1, then:

  tan x ≈ 1/0.01 = 100

As cosine approaches zero, the tangent value grows toward positive or negative infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function is undefined whenever:

  cos x = 0

This happens at:

  x = π/2 + nπ

where n is any integer.

Therefore, the domain of tangent is:

  x ≠ π/2 + nπ

Examples of values where tangent is undefined:

  π/2, 3π/2, 5π/2, ...

and also negative values such as:

  -π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Unlike sine and cosine, tangent does not have a limited range.

The range is:

  -∞ < tan x < ∞

or:

  (-∞, ∞)

Tangent can have any real number as its output.

For example:

  tan x = -10
  tan x = 0
  tan x = 5

are all possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PERIOD OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function repeats every:

  π

radians, or:

  180°

This means:

  tan(x + π) = tan x

Compare this with sine and cosine:

  Function    Period
  ──────────────────
  sin x       2π
  cos x       2π
  tan x       π

The tangent function repeats faster than sine and cosine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GRAPH OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic tangent graph is:

  y = tan x

The graph has several important characteristics.

It passes through the origin

  tan(0) = 0

Therefore, the graph passes through:

  (0, 0)

It has vertical asymptotes

Vertical asymptotes occur where tangent is undefined:

  x = π/2 + nπ

For example:

  x = π/2

and:

  x = -π/2

The graph approaches these lines but never touches them.

It repeats every π

The shape of the graph repeats again and again every:

  π

units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT VALUES OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Angle                    Tangent
  ──────────────────────────────────
  0                        0
  π/6 (30°)                √3/3
  π/4 (45°)                1
  π/3 (60°)                √3
  π/2 (90°)                Undefined

One of the most important values is:

  tan(π/4) = 1

because:

  sin(π/4) = √2/2

and:

  cos(π/4) = √2/2

Therefore:

  tan(π/4) = (√2/2)/(√2/2) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TANGENT AND SLOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One interesting interpretation of tangent is that it can represent a slope.

In mathematics:

  slope = vertical change / horizontal change

Similarly:

  tan θ = opposite / adjacent

Therefore, tangent can describe how steep a line is.

For example:

  tan 45° = 1

This means that for every 1 unit moved horizontally, the line rises approximately 1 unit vertically.

If:

  tan θ = 2

the line rises 2 units for every 1 unit horizontally.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DERIVATIVE OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of tangent is:

  d/dx (tan x) = sec² x

This can be derived from:

  tan x = sin x / cos x

Using the quotient rule:

  d/dx (sin x / cos x) = (cos x · cos x - sin x · (-sin x)) / cos² x

Simplify:

  = (cos² x + sin² x) / cos² x

Using:

  sin² x + cos² x = 1

we get:

  1 / cos² x

Since:

  sec x = 1 / cos x

then:

  1 / cos² x = sec² x

Therefore:

  d/dx (tan x) = sec² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVE USING THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If there is an expression inside tangent, use the Chain Rule.

Example

  y = tan(3x)

The derivative of tan u is:

  sec² u

The derivative of 3x is:

  3

Therefore:

  y' = 3 sec²(3x)

Another Example

  y = tan(x²)

Using the Chain Rule:

  y' = sec²(x²) · (2x)

Therefore:

  y' = 2x sec²(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF THE TANGENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of tangent is:

  ∫ tan x dx

Since:

  tan x = sin x / cos x

we can write:

  ∫ (sin x / cos x) dx

Let:

  u = cos x

Then:

  du = -sin x dx

Therefore:

  ∫ (sin x / cos x) dx = -∫ (1/u) du

Integrating:

  = -ln|u| + C

Substitute back:

  ∫ tan x dx = -ln|cos x| + C

This can also be written as:

  ∫ tan x dx = ln|sec x| + C

Both answers are equivalent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. REAL-LIFE APPLICATIONS OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function is useful for:

📐 Measuring Heights

Tangent can help determine the height of a building or tree:

  tan θ = height / distance

🏗️ Engineering

Engineers use tangent when analyzing slopes, angles, roads, ramps, and structures.

🌊 Physics

Tangent can help describe directions, angles, and components of motion.

🎮 Computer Graphics

Angles and slopes in games and simulations often use trigonometric functions, including tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          Tangent Function
  ──────────────────────────────────────────
  Function          tan x
  Definition        sin x / cos x
  Domain            x ≠ π/2 + nπ
  Range             All real numbers (-∞, ∞)
  Period            π
  X-intercepts      x = nπ
  Vertical Asymptotes  x = π/2 + nπ
  Derivative        sec² x
  Integral          -ln|cos x| + C = ln|sec x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definition:
    tan x = sin x / cos x

  Derivative:
    d/dx (tan x) = sec² x

  Chain Rule:
    d/dx (tan(u)) = sec²(u) · u'

  Integral:
    ∫ tan x dx = -ln|cos x| + C = ln|sec x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function is defined as:

  tan x = sin x / cos x

Important Properties:

  • Domain: x ≠ π/2 + nπ
  • Range: All real numbers
  • Period: π
  • Derivative: sec² x
  • Integral: -ln|cos x| + C

Key Idea

The tangent function measures the relationship between vertical change and horizontal change. This is why it is strongly connected to angles, slopes, and rates of change. In calculus, tangent becomes even more important because its derivative and integral connect it to other trigonometric functions.

Easy way to remember: Tangent = sine divided by cosine, and it has asymptotes wherever cosine equals zero.
  `,
  examples: [
    "tan 0 = 0",
    "tan(π/4) = 1",
    "tan(π/3) = √3",
    "tan(π/2) is undefined",
    "d/dx (tan x) = sec² x",
    "d/dx (tan(3x)) = 3 sec²(3x)",
    "d/dx (tan(x²)) = 2x sec²(x²)",
    "∫ tan x dx = -ln|cos x| + C",
    "tan(θ) = opposite/adjacent in a right triangle",
  ],
};

export default topic;