// filename: SecantFunction.ts

const topic = {
  id: "secant-function",
  title: "Secant Function",
  summary:
    "A fundamental trigonometric function defined as the reciprocal of cosine. It has unique properties including a period of 2π, vertical asymptotes, and a range outside the interval [-1, 1]. Essential in calculus for derivatives and integrals.",
  details: `
The secant function is one of the six basic trigonometric functions. It is closely related to the cosine function because secant is the reciprocal of cosine.

The secant function is written as:

  y = sec x

Secant is important in trigonometry and calculus, particularly in derivatives, integrals, identities, and graphing trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The secant function is defined as the reciprocal of cosine:

  sec x = 1 / cos x

This means that whenever we know the value of cosine, we can find secant by taking its reciprocal.

Example

If:

  cos x = 1/2

then:

  sec x = 1 / (1/2) = 2

Similarly, if:

  cos x = -1/2

then:

  sec x = -2

Important Relationship

  sec x · cos x = 1

whenever both functions are defined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SECANT IN A RIGHT TRIANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle:

  cos θ = Adjacent / Hypotenuse

Since secant is the reciprocal of cosine:

  sec θ = Hypotenuse / Adjacent

Compare them:

  Function    Ratio
  ──────────────────────────
  cos θ       Adjacent / Hypotenuse
  sec θ       Hypotenuse / Adjacent

Example

Suppose a right triangle has:

  Adjacent side = 4
  Hypotenuse = 5

Then:

  cos θ = 4/5

Therefore:

  sec θ = 5/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SECANT ON THE UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On the unit circle:

  cos x

represents the horizontal coordinate.

Since:

  sec x = 1 / cos x

the value of secant depends on the reciprocal of the horizontal coordinate.

This explains an important behavior:

  When cos x is close to 1, secant is close to 1.
  When cos x is close to -1, secant is close to -1.
  When cos x approaches 0, secant becomes extremely large.

For example:

  cos x = 0.1

Then:

  sec x = 10

But if:

  cos x = 0.01

Then:

  sec x = 100

As cosine approaches zero:

  sec x → ±∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DOMAIN OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:

  sec x = 1 / cos x

secant is undefined whenever:

  cos x = 0

Cosine is zero at:

  x = π/2 + nπ

where n is any integer.

Therefore:

  x ≠ π/2 + nπ

Examples where secant is undefined:

  π/2, 3π/2, 5π/2, ...

and:

  -π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RANGE OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because:

  -1 ≤ cos x ≤ 1

taking the reciprocal gives the range of secant:

  sec x ≤ -1 or sec x ≥ 1

In interval notation:

  (-∞, -1] ∪ [1, ∞)

Secant can never have values between:

  -1 < y < 1

For example, these are possible:

  sec x = 1
  sec x = 2
  sec x = -3

But these are impossible:

  sec x = 1/2

because cosine cannot have a reciprocal of 1/2 while staying within its range of [-1, 1].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PERIOD OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The secant function has the same period as cosine:

  2π

This means:

  sec(x + 2π) = sec x

The graph repeats every:

  2π

radians, or:

  360°

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GRAPH OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic function is:

  y = sec x

The secant graph is closely related to the cosine graph.

Important Characteristics

Vertical Asymptotes

Since secant is undefined when cosine is zero:

  x = π/2 + nπ

These values create vertical asymptotes.

Minimum and Maximum Points

When:

  cos x = 1

we get:

  sec x = 1

When:

  cos x = -1

we get:

  sec x = -1

These points form the closest parts of the secant graph to the x-axis.

Shape

The secant graph consists of separate curved branches because it cannot exist where cosine equals zero.

The upper branches satisfy:

  y ≥ 1

The lower branches satisfy:

  y ≤ -1

There is no part of the secant graph between:

  -1 < y < 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT VALUES OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Angle        Cosine       Secant
  ──────────────────────────────────
  0            1            1
  π/6          √3/2         2√3/3
  π/4          √2/2         √2
  π/3          1/2          2
  π/2          0            Undefined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important calculus rules is:

  d/dx (sec x) = sec x · tan x

This formula should be memorized.

Why?

Start with:

  sec x = 1 / cos x

We can also write:

  sec x = (cos x)⁻¹

Using the Chain Rule:

  d/dx (cos x)⁻¹

Apply the power rule:

  = -1(cos x)⁻² · (-sin x)

The negative signs cancel:

  = sin x / cos² x

Now separate the expression:

  (sin x / cos x) · (1 / cos x)

This becomes:

  tan x · sec x

Therefore:

  d/dx (sec x) = sec x · tan x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SECANT FUNCTION WITH THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If secant contains another function inside, use the Chain Rule.

Example 1

  y = sec(3x)

The derivative of secant is:

  sec(3x) · tan(3x)

Multiply by the derivative of 3x:

  3

Therefore:

  y' = 3 sec(3x) tan(3x)

Example 2

  y = sec(x²)

Differentiate the outside:

  sec(x²) · tan(x²)

Differentiate the inside:

  2x

Therefore:

  y' = 2x sec(x²) tan(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRAL INVOLVING SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of secant is one of the more interesting trigonometric integrals:

  ∫ sec x dx

The answer is:

  ∫ sec x dx = ln|sec x + tan x| + C

Unlike many other basic trigonometric integrals, this answer is not immediately obvious.

Why Is the Integral of Secant Different?

Consider:

  ∫ sec x dx

We multiply by:

  (sec x + tan x) / (sec x + tan x)

This does not change the value because we are multiplying by 1:

  ∫ sec x · ((sec x + tan x) / (sec x + tan x)) dx

Multiply the numerator:

  ∫ (sec² x + sec x tan x) / (sec x + tan x) dx

Now notice:

  d/dx (sec x + tan x) = sec x tan x + sec² x

This is exactly the numerator.

Let:

  u = sec x + tan x

Then:

  du = (sec x tan x + sec² x) dx

Therefore:

  ∫ (1/u) du

which gives:

  ln|u| + C

Substitute back:

  ∫ sec x dx = ln|sec x + tan x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF sec² x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another very important integral is:

  ∫ sec² x dx

Since:

  d/dx (tan x) = sec² x

we have:

  ∫ sec² x dx = tan x + C

Example

  ∫ 5 sec² x dx

The constant stays:

  5 tan x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT TRIGONOMETRIC IDENTITY INVOLVING SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important identity is:

  1 + tan² x = sec² x

This identity is frequently used in calculus.

For example, if an integral contains:

  1 + tan² x

you can replace it with:

  sec² x

Similarly:

  sec² x - 1 = tan² x

This is especially useful in differentiation and integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. RELATIONSHIP BETWEEN SECANT AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Secant and cosine are reciprocal functions:

  sec x = 1 / cos x

Compare them:

  Property          Cosine                 Secant
  ──────────────────────────────────────────────────────────
  Definition        cos x                  1 / cos x
  Domain            All real numbers       cos x ≠ 0
  Range             [-1, 1]                (-∞, -1] ∪ [1, ∞)
  Period            2π                     2π
  Derivative        -sin x                 sec x · tan x
  Integral          sin x + C              ln|sec x + tan x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. APPLICATIONS OF THE SECANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The secant function appears in:

📐 Geometry

It can be used in relationships involving angles and distances.

📊 Calculus

Secant is important in differentiation, integration, and trigonometric identities.

⚙️ Physics and Engineering

Secant functions can appear in wave analysis, coordinate transformations, and physical models.

💻 Computer Graphics

Trigonometric functions, including reciprocal functions like secant, are used in 3D transformations, projections, rotations, and graphics calculations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          Secant Function
  ──────────────────────────────────────────
  Function          sec x
  Definition        1 / cos x
  Reciprocal of     Cosine
  Domain            x ≠ π/2 + nπ
  Range             (-∞, -1] ∪ [1, ∞)
  Period            2π
  Vertical Asymptotes  x = π/2 + nπ
  Derivative        sec x · tan x
  Integral          ln|sec x + tan x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Definition:
    sec x = 1 / cos x

  Derivative:
    d/dx (sec x) = sec x · tan x

  Chain Rule:
    d/dx (sec(u)) = sec(u) · tan(u) · u'

  Integral:
    ∫ sec x dx = ln|sec x + tan x| + C

  Integral of sec² x:
    ∫ sec² x dx = tan x + C

  Identity:
    1 + tan² x = sec² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The secant function is the reciprocal of cosine:

  sec x = 1 / cos x

Important Properties:

  • Domain: x ≠ π/2 + nπ
  • Range: (-∞, -1] ∪ [1, ∞)
  • Period: 2π
  • Derivative: sec x · tan x
  • Integral: ln|sec x + tan x| + C

Key Idea

The secant function is simply the reciprocal of cosine, but this reciprocal relationship gives secant very different behavior. While cosine stays between -1 and 1, secant exists only outside that range:

  y ≤ -1 or y ≥ 1

The most important formulas to remember are:

  sec x = 1 / cos x
  d/dx (sec x) = sec x · tan x
  ∫ sec x dx = ln|sec x + tan x| + C

Easy way to remember: Secant is the reciprocal of cosine, and it has asymptotes wherever cosine equals zero.
  `,
  examples: [
    "sec 0 = 1",
    "sec(π/3) = 2",
    "sec(π/4) = √2",
    "sec(π/2) is undefined",
    "d/dx (sec x) = sec x · tan x",
    "d/dx (sec(3x)) = 3 sec(3x) tan(3x)",
    "d/dx (sec(x²)) = 2x sec(x²) tan(x²)",
    "∫ sec x dx = ln|sec x + tan x| + C",
    "∫ sec² x dx = tan x + C",
    "1 + tan² x = sec² x",
    "sec x · cos x = 1",
  ],
};

export default topic;