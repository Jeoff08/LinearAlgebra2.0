// filename: DerivativesOfSineAndCosine.ts

const topic = {
  id: "derivatives-of-sine-and-cosine",
  title: "Derivatives of Sine and Cosine",
  summary:
    "The fundamental derivative rules for sine and cosine functions, including the Chain Rule, Product Rule, and higher-order derivatives. These are essential for understanding rates of change in periodic and oscillatory systems.",
  details: `
The derivatives of the sine and cosine functions are two of the most important derivative rules in calculus. They describe how these trigonometric functions change as the angle or input changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC DERIVATIVE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When x is measured in radians:

  d/dx (sin x) = cos x

and

  d/dx (cos x) = -sin x

These two formulas should be memorized because they are fundamental rules used throughout differential calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  f(x) = sin x

Its derivative is:

  f'(x) = cos x

This means that the rate of change of the sine function at any value of x is determined by the cosine of that value.

Example

  f(x) = sin x

Differentiate:

  f'(x) = cos x

If we want the slope when:

  x = 0

then:

  f'(0) = cos(0) = 1

Therefore, the graph of y = sin x has a slope of 1 at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  f(x) = cos x

Its derivative is:

  f'(x) = -sin x

The negative sign is very important.

Example

  f(x) = cos x

Differentiate:

  f'(x) = -sin x

At:

  x = 0

we get:

  f'(0) = -sin(0) = 0

Therefore, the cosine graph has a horizontal tangent at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. UNDERSTANDING WHY SINE BECOMES COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine and cosine functions are closely connected. On the unit circle:

  x² + y² = 1

As the angle changes:

  sin x represents the vertical coordinate.
  cos x represents the horizontal coordinate.
  The rate at which sine changes is described by cosine.
  The rate at which cosine changes is described by negative sine.

This creates a continuous relationship between the two functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE PATTERN OF REPEATED DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One interesting property is that sine and cosine repeat after four derivatives.

Starting with Sine

  f(x) = sin x

  First derivative:    f'(x) = cos x
  Second derivative:   f''(x) = -sin x
  Third derivative:    f'''(x) = -cos x
  Fourth derivative:   f⁽⁴⁾(x) = sin x

Then the pattern repeats:

  sin x → cos x → -sin x → -cos x → sin x

Starting with Cosine

  cos x → -sin x → -cos x → sin x → cos x

This repeating pattern is useful when finding higher-order derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVES WITH CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a constant multiplies sine or cosine, keep the constant and differentiate the trigonometric function.

Example 1

  f(x) = 5 sin x

Therefore:

  f'(x) = 5 cos x

Example 2

  f(x) = 3 cos x

Therefore:

  f'(x) = -3 sin x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DERIVATIVES WITH POWERS OF X
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes sine and cosine are combined with other functions.

Example

  f(x) = x² sin x

Because two functions are multiplied, we use the Product Rule:

  d/dx [uv] = u'v + uv'

Let:

  u = x²

and:

  v = sin x

Then:

  u' = 2x

and:

  v' = cos x

Therefore:

  f'(x) = 2x sin x + x² cos x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVES USING THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When sine or cosine contains another expression inside, we use the Chain Rule.

Example 1: Sine

  f(x) = sin(3x)

The outside function is:

  sin u

whose derivative is:

  cos u

The inside function is:

  u = 3x

whose derivative is:

  u' = 3

Therefore:

  f'(x) = 3 cos(3x)

Example 2: Cosine

  f(x) = cos(4x)

The derivative of cosine is:

  -sin(4x)

Then multiply by the derivative of 4x:

  4

Therefore:

  f'(x) = -4 sin(4x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function inside sine:

  d/dx [sin(u)] = cos(u) · du/dx

For a function inside cosine:

  d/dx [cos(u)] = -sin(u) · du/dx

These are the general derivative rules using the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MORE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1

  y = sin(x²)

Using the Chain Rule:

  y' = cos(x²) · (2x)

Therefore:

  y' = 2x cos(x²)

Example 2

  y = cos(x³)

Differentiate the outside:

  -sin(x³)

Differentiate the inside:

  3x²

Therefore:

  y' = -3x² sin(x³)

Example 3

  y = 7 sin(2x + 1)

Differentiate:

  y' = 7 cos(2x + 1) · (2)

Therefore:

  y' = 14 cos(2x + 1)

Example 4

  y = 5 cos(3x²)

Using the Chain Rule:

  y' = 5[-sin(3x²)] · (6x)

Therefore:

  y' = -30x sin(3x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Derivative
  ──────────────────────────
  sin x           cos x
  cos x           -sin x
  sin(u)          cos(u) · u'
  cos(u)          -sin(u) · u'

Easy Memory Trick

  Sine becomes Cosine:      sin x → cos x
  Cosine becomes Negative Sine:  cos x → -sin x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Derivative of Sine:
    d/dx (sin x) = cos x

  Derivative of Cosine:
    d/dx (cos x) = -sin x

  Chain Rule for Sine:
    d/dx [sin(u)] = cos(u) · u'

  Chain Rule for Cosine:
    d/dx [cos(u)] = -sin(u) · u'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of sine and cosine are fundamental rules in Calculus:

  d/dx (sin x) = cos x

and:

  d/dx (cos x) = -sin x

When the argument is a function, use the Chain Rule:

  d/dx [sin(u)] = cos(u) · u'
  d/dx [cos(u)] = -sin(u) · u'

Key Concept

The derivatives of sine and cosine show that these functions are continuously connected. Sine changes according to cosine, while cosine changes according to negative sine. This relationship is one reason trigonometric functions are extremely important in physics, engineering, waves, sound, motion, and calculus.

Easy way to remember: The derivative of sine is cosine, and the derivative of cosine is negative sine.
  `,
  examples: [
    "d/dx (sin x) = cos x",
    "d/dx (cos x) = -sin x",
    "d/dx (sin(3x)) = 3 cos(3x)",
    "d/dx (cos(4x)) = -4 sin(4x)",
    "d/dx (x² sin x) = 2x sin x + x² cos x",
    "d/dx (sin(x²)) = 2x cos(x²)",
    "d/dx (cos(x³)) = -3x² sin(x³)",
    "d/dx (7 sin(2x + 1)) = 14 cos(2x + 1)",
    "d/dx (5 cos(3x²)) = -30x sin(3x²)",
  ],
};

export default topic;