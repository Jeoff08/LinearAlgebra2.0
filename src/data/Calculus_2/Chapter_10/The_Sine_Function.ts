// filename: TheSineFunction.ts

const topic = {
  id: "the-sine-function",
  title: "The Sine Function",
  summary:
    "A fundamental trigonometric function that describes periodic, wave-like behavior. It is essential in Calculus for modeling oscillations, waves, circular motion, and other repeating phenomena.",
  details: `
The sine function is one of the most important trigonometric functions in mathematics and Calculus. It describes quantities that move in a repeating, periodic, wave-like pattern.

The basic sine function is:

  f(x) = sin x

It is used to model many natural and physical phenomena, such as:

  • Waves
  • Sound
  • Vibrations
  • Circular motion
  • Alternating current
  • Pendulum-like motion
  • Seasonal patterns

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE SINE FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a right triangle, sine is defined as:

  sin θ = Opposite Side / Hypotenuse

where:

  θ is an angle.
  The opposite side is across from the angle.
  The hypotenuse is the longest side.

However, in Calculus, the sine function is usually understood using the unit circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE UNIT CIRCLE DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A unit circle is a circle with radius:

  1

and center:

  (0, 0)

For an angle θ, a point on the unit circle has coordinates:

  (cos θ, sin θ)

This means:

  The x-coordinate is cos θ.
  The y-coordinate is sin θ.

Therefore, the sine of an angle represents the vertical position of a point moving around the unit circle.

As the point travels around the circle, its vertical position repeatedly moves:

  0 → 1 → 0 → -1 → 0

This repeating vertical motion creates the familiar sine wave.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GRAPH OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic sine function is:

  y = sin x

The sine graph is a smooth, continuous wave.

Its pattern repeats forever.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. IMPORTANT POINTS OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important points occur during one complete cycle:

  x       sin x
  ─────────────
  0       0
  π/2     1
  π       0
  3π/2    -1
  2π      0

So the graph moves like this:

  (0, 0) → (π/2, 1) → (π, 0) → (3π/2, -1) → (2π, 0)

Then the pattern repeats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DOMAIN AND RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = sin x

Domain

The sine function accepts every real number:

  (-∞, ∞)

You can calculate:

  sin 0, sin 10, sin(-5)

and so on.

Range

The output is always between -1 and 1:

  [-1, 1]

Therefore:

  -1 ≤ sin x ≤ 1

The sine function can never produce a value greater than 1 or less than -1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AMPLITUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The amplitude measures the maximum distance of the wave from its middle line.

For:

  y = sin x

the maximum value is:

  1

and the minimum value is:

  -1

The middle line is:

  y = 0

Therefore, the amplitude is:

  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PERIOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The period is the horizontal distance required for the graph to complete one full cycle.

For:

  y = sin x

the period is:

  2π

This means:

  sin(x + 2π) = sin x

The pattern repeats every:

  2π

units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MAXIMUM AND MINIMUM VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The maximum value of:

  sin x

is:

  1

This occurs when:

  x = π/2 + 2πn

where n is any integer.

The minimum value is:

  -1

This occurs when:

  x = 3π/2 + 2πn

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ZEROS OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function equals zero when:

  sin x = 0

This happens at:

  x = 0, π, 2π, 3π, ...

and in the negative direction as well.

The general formula is:

  x = nπ

where:

  n ∈ Z

and Z represents all integers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SYMMETRY OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function is an odd function.

This means:

  sin(-x) = -sin x

For example:

  sin(-π/2) = -1

while:

  sin(π/2) = 1

Graphically, the sine function has symmetry about the:

  origin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE DERIVATIVE OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important derivative formulas in Calculus is:

  d/dx (sin x) = cos x

This means the instantaneous rate of change of the sine function is the cosine function.

Example

Differentiate:

  y = sin x

Then:

  y' = cos x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CHAIN RULE WITH THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the angle contains another function, use the Chain Rule.

The formula is:

  d/dx [sin(u)] = cos(u) · du/dx

Example 1

Find:

  d/dx [sin(3x)]

Let:

  u = 3x

Then:

  u' = 3

Therefore:

  d/dx [sin(3x)] = 3 cos(3x)

Example 2

Find:

  d/dx [sin(x²)]

Let:

  u = x²

Then:

  u' = 2x

Therefore:

  d/dx [sin(x²)] = 2x cos(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INTEGRATION OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of:

  sin x

is:

  ∫ sin x dx = -cos x + C

Why is there a negative sign?

Because:

  d/dx (cos x) = -sin x

Therefore:

  d/dx (-cos x) = sin x

Example

Evaluate:

  ∫ 3 sin x dx

Take the constant outside:

  3 ∫ sin x dx

Therefore:

  -3 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE GENERAL SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A transformed sine function has the form:

  y = A sin(B(x - C)) + D

Each constant changes the graph.

  Symbol    Meaning
  ──────────────────────────────────────
  A         Amplitude and vertical reflection
  B         Controls the period
  C         Horizontal shift
  D         Vertical shift

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. AMPLITUDE IN A TRANSFORMED SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = A sin(Bx)

the amplitude is:

  |A|

Example

  y = 3 sin x

The amplitude is:

  3

The range becomes:

  [-3, 3]

Negative Amplitude

Consider:

  y = -2 sin x

The amplitude is:

  2

The negative sign reflects the graph across the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. PERIOD OF A TRANSFORMED SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  y = sin(Bx)

the period is:

  2π/|B|

Example

Consider:

  y = sin(2x)

The period is:

  2π/2

Therefore:

  π

The wave completes one full cycle faster than the basic sine function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. HORIZONTAL SHIFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = sin(x - C)

If:

  C > 0

the graph shifts to the:

  right

by C units.

Example

  y = sin(x - π/2)

The graph shifts:

  π/2

units to the right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. VERTICAL SHIFT AND MIDLINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = sin x + 2

The entire graph moves upward by:

  2

units.

The new midline becomes:

  y = 2

The maximum value becomes:

  3

and the minimum becomes:

  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE OF A COMPLETE TRANSFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = 2 sin(3(x - π/4)) + 1

Let's analyze it.

  Amplitude:          |2| = 2
  Period:             2π/3
  Horizontal Shift:   π/4 to the right
  Vertical Shift:     1 unit upward
  Midline:            y = 1
  Maximum:            1 + 2 = 3
  Minimum:            1 - 2 = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. SINE FUNCTION IN REAL LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function models periodic or repeating behavior.

Sound Waves

Sound travels through repeating vibrations.

Ocean Waves

The height of waves can sometimes be approximated using sine functions.

Circular Motion

The vertical and horizontal positions of an object moving in a circle can be modeled using sine and cosine.

Alternating Current

Electrical signals often follow sinusoidal patterns.

Seasons

Certain seasonal changes can be approximately modeled using periodic functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT PROPERTIES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          y = sin x
  ──────────────────────────────────────
  Domain            (-∞, ∞)
  Range             [-1, 1]
  Amplitude         1
  Period            2π
  Midline           y = 0
  Maximum           1
  Minimum           -1
  Zeros             x = nπ
  Symmetry          Odd / Origin symmetry
  Derivative        cos x
  Integral          -cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Basic Function:
    y = sin x

  Derivative:
    d/dx (sin x) = cos x

  Chain Rule:
    d/dx [sin(u)] = cos(u) · u'

  Integral:
    ∫ sin x dx = -cos x + C

  General Form:
    y = A sin(B(x - C)) + D

  Amplitude:
    |A|

  Period:
    2π/|B|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function is a periodic, wave-like function defined as:

  y = sin x

It continuously repeats its pattern every:

  2π

units.

Its values always remain between:

  -1 and 1

In Calculus, one of its most important properties is:

  d/dx (sin x) = cos x

and:

  ∫ sin x dx = -cos x + C

Easy way to remember: The sine function represents a smooth repeating wave that naturally appears whenever something moves back and forth or follows a repeating cycle.
  `,
  examples: [
    "sin 0 = 0, sin(π/2) = 1, sin π = 0, sin(3π/2) = -1, sin 2π = 0",
    "d/dx (sin x) = cos x",
    "d/dx (sin(3x)) = 3 cos(3x)",
    "d/dx (sin(x²)) = 2x cos(x²)",
    "∫ sin x dx = -cos x + C",
    "∫ 3 sin x dx = -3 cos x + C",
    "y = 2 sin(3(x - π/4)) + 1 → amplitude = 2, period = 2π/3, shift = π/4 right, midline = y = 1",
  ],
};

export default topic;