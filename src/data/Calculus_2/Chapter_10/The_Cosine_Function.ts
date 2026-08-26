// filename: TheCosineFunction.ts

const topic = {
  id: "the-cosine-function",
  title: "The Cosine Function",
  summary:
    "A fundamental trigonometric function that produces a smooth, repeating wave. It is closely related to the sine function and is essential in Calculus for modeling periodic motion, waves, vibrations, and circular motion.",
  details: `
The cosine function is one of the fundamental trigonometric functions in mathematics and Calculus. Like the sine function, it produces a smooth, repeating wave and is used to describe periodic motion, waves, vibrations, and circular motion.

The basic cosine function is:

  f(x) = cos x

The cosine function is closely related to the sine function. In fact, their graphs have the same shape but are shifted relative to each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE COSINE FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle, cosine is defined as:

  cos θ = Adjacent Side / Hypotenuse

where:

  θ is the angle.
  The adjacent side is beside the angle.
  The hypotenuse is the longest side.

A simple way to remember this is:

  CAH

which means:

  Cosine = Adjacent ÷ Hypotenuse

However, in Calculus, cosine is usually studied using the unit circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COSINE ON THE UNIT CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A unit circle has:

  Center at (0, 0)
  Radius of 1

A point moving around the unit circle can be represented by:

  (cos θ, sin θ)

This means:

  cos θ is the horizontal position or x-coordinate.
  sin θ is the vertical position or y-coordinate.
  x² + y² = 1

As a point moves around the circle, its horizontal position changes continuously:

  1 → 0 → -1 → 0 → 1

This repeating horizontal motion produces the cosine wave.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GRAPH OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic cosine function is:

  y = cos x

Unlike the sine function, cosine starts at its maximum value.

At:

  x = 0

we have:

  cos 0 = 1

Therefore, the graph starts at:

  (0, 1)

Then it moves downward, reaches zero, reaches its minimum, and then returns to its maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. IMPORTANT POINTS OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

During one complete cycle, the important points are:

  x       cos x
  ─────────────
  0       1
  π/2     0
  π       -1
  3π/2    0
  2π      1

Therefore, the graph moves through:

  (0, 1) → (π/2, 0) → (π, -1) → (3π/2, 0) → (2π, 1)

Then the entire pattern repeats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DOMAIN AND RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = cos x

Domain

The cosine function is defined for every real number:

  (-∞, ∞)

You can calculate:

  cos 0, cos π, cos(-2), cos 100

and many other values.

Range

The output of cosine is always between:

  -1

and:

  1

Therefore:

  [-1, 1]

This means:

  -1 ≤ cos x ≤ 1

Cosine can never be greater than 1 or less than -1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AMPLITUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The amplitude tells us the maximum distance of the wave from its middle line.

For:

  y = cos x

the maximum is:

  1

and the minimum is:

  -1

The midline is:

  y = 0

Therefore, the amplitude is:

  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PERIOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The period tells us how long it takes for one complete cycle of the graph to repeat.

For:

  y = cos x

the period is:

  2π

This means:

  cos(x + 2π) = cos x

The same pattern repeats every:

  2π

units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MAXIMUM AND MINIMUM VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The maximum value of cosine is:

  1

This occurs when:

  x = 2πn

where n is any integer.

For example:

  x = 0, 2π, 4π, -2π

The minimum value is:

  -1

This occurs when:

  x = π + 2πn

where n is any integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ZEROS OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function equals zero when:

  cos x = 0

This happens at:

  π/2, 3π/2, 5π/2, ...

and so on.

The general formula is:

  x = π/2 + nπ

where:

  n ∈ Z

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SYMMETRY OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function is an even function.

This means:

  cos(-x) = cos x

For example:

  cos(-π/3) = cos(π/3) = 1/2

Graphically, cosine has symmetry about the:

  y-axis

This is different from sine, which has symmetry about the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RELATIONSHIP BETWEEN SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sine and cosine are closely related.

One important identity is:

  cos x = sin(x + π/2)

This means the cosine graph can be viewed as a sine graph shifted horizontally.

Another useful relationship is:

  sin x = cos(x - π/2)

Therefore, sine and cosine have:

  The same amplitude
  The same period
  The same range
  The same wave shape

The main difference is where they start.

  Sine starts at:   (0, 0)
  Cosine starts at: (0, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DERIVATIVE OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important derivative formulas in Calculus is:

  d/dx (cos x) = -sin x

Notice the negative sign.

This means that the rate of change of cosine is the negative of the sine function.

Example

Differentiate:

  y = cos x

Then:

  y' = -sin x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CHAIN RULE WITH THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the angle contains another function, we use the Chain Rule.

The formula is:

  d/dx [cos(u)] = -sin(u) · du/dx

Example 1

Find:

  d/dx [cos(3x)]

Let:

  u = 3x

Then:

  u' = 3

Therefore:

  d/dx [cos(3x)] = -3 sin(3x)

Example 2

Find:

  d/dx [cos(x²)]

Let:

  u = x²

Then:

  u' = 2x

Therefore:

  d/dx [cos(x²)] = -2x sin(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INTEGRATION OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of cosine is:

  ∫ cos x dx = sin x + C

Why?

Because:

  d/dx (sin x) = cos x

Therefore:

  ∫ cos x dx = sin x + C

Example

Evaluate:

  ∫ 4 cos x dx

Take the constant outside:

  4 ∫ cos x dx

Therefore:

  4 sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE GENERAL COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A transformed cosine function has the form:

  y = A cos(B(x - C)) + D

Each constant changes the graph.

  Symbol    Meaning
  ──────────────────────────────────────
  A         Amplitude and vertical reflection
  B         Controls the period
  C         Horizontal shift
  D         Vertical shift

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. AMPLITUDE OF A TRANSFORMED COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = A cos(Bx)

the amplitude is:

  |A|

Example

  y = 3 cos x

The amplitude is:

  3

The range becomes:

  [-3, 3]

Negative Amplitude

Consider:

  y = -2 cos x

The amplitude is:

  2

The negative sign reflects the cosine graph across the x-axis.

Instead of starting at 1, the graph starts at:

  -2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PERIOD OF A TRANSFORMED COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = cos(Bx)

the period is:

  2π/|B|

Example

Consider:

  y = cos(2x)

The period is:

  2π/2

Therefore:

  π

The graph completes one cycle faster.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. HORIZONTAL SHIFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = cos(x - C)

If:

  C > 0

the graph shifts to the:

  right

by C units.

Example

  y = cos(x - π/2)

The graph shifts:

  π/2

units to the right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. VERTICAL SHIFT AND MIDLINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = cos x + 2

The entire graph moves upward by:

  2

The new midline is:

  y = 2

The maximum becomes:

  1 + 2 = 3

The minimum becomes:

  -1 + 2 = 1

Therefore:

  Maximum: 3
  Minimum: 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMPLETE TRANSFORMATION EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = 2 cos(3(x - π/4)) + 1

Let's analyze it.

  Amplitude:          |2| = 2
  Period:             2π/3
  Horizontal Shift:   π/4 to the right
  Vertical Shift:     1 unit upward
  Midline:            y = 1
  Maximum:            1 + 2 = 3
  Minimum:            1 - 2 = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. APPLICATIONS OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function is used to model repeating or periodic phenomena.

Circular Motion

The horizontal position of an object moving around a circle can be modeled by cosine.

Waves

Cosine functions can represent wave-like motion.

Sound and Vibrations

Repeating vibrations can often be approximated using sine or cosine functions.

Alternating Current

Electrical signals can follow sinusoidal patterns.

Physics

Cosine appears in many equations involving motion, forces, waves, and oscillations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          y = cos x
  ──────────────────────────────────────
  Domain            (-∞, ∞)
  Range             [-1, 1]
  Amplitude         1
  Period            2π
  Midline           y = 0
  Maximum           1
  Minimum           -1
  Starting Point    (0, 1)
  Zeros             x = π/2 + nπ
  Symmetry          Even / y-axis symmetry
  Derivative        -sin x
  Integral          sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Basic Function:
    y = cos x

  Derivative:
    d/dx (cos x) = -sin x

  Chain Rule:
    d/dx [cos(u)] = -sin(u) · u'

  Integral:
    ∫ cos x dx = sin x + C

  General Form:
    y = A cos(B(x - C)) + D

  Amplitude:
    |A|

  Period:
    2π/|B|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function is a smooth, repeating wave defined by:

  y = cos x

Its values always stay between:

  -1 and 1

It repeats every:

  2π

units and starts at its maximum value:

  (0, 1)

In Calculus, the most important formulas are:

  d/dx (cos x) = -sin x

and:

  ∫ cos x dx = sin x + C

Easy way to remember: Cosine is a repeating wave that starts at the top, while sine starts in the middle at zero.
  `,
  examples: [
    "cos 0 = 1, cos(π/2) = 0, cos π = -1, cos(3π/2) = 0, cos 2π = 1",
    "d/dx (cos x) = -sin x",
    "d/dx (cos(3x)) = -3 sin(3x)",
    "d/dx (cos(x²)) = -2x sin(x²)",
    "∫ cos x dx = sin x + C",
    "∫ 4 cos x dx = 4 sin x + C",
    "y = 2 cos(3(x - π/4)) + 1 → amplitude = 2, period = 2π/3, shift = π/4 right, midline = y = 1",
  ],
};

export default topic;