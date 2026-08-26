// filename: GraphsOfSineAndCosine.ts

const topic = {
  id: "graphs-of-sine-and-cosine",
  title: "Graphs of Sine and Cosine",
  summary:
    "A comprehensive guide to the sinusoidal graphs of sine and cosine functions, including their key features, transformations, symmetry, and relationships. Essential for understanding periodic behavior in Calculus.",
  details: `
The graphs of sine and cosine are two of the most important graphs in trigonometry and Calculus. Both produce smooth, repeating wave patterns called sinusoidal graphs.

The basic functions are:

  y = sin x

and:

  y = cos x

Although their graphs look very similar, they start at different positions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC GRAPH OF THE SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine function is:

  y = sin x

The graph begins at:

  (0, 0)

It rises to a maximum, returns to zero, falls to a minimum, and returns to zero.

One complete cycle is:

  x       sin x
  ─────────────
  0       0
  π/2     1
  π       0
  3π/2    -1
  2π      0

So the basic movement is:

  0 → 1 → 0 → -1 → 0

The pattern then repeats forever.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC GRAPH OF THE COSINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cosine function is:

  y = cos x

Unlike sine, cosine begins at its maximum value:

  (0, 1)

One complete cycle is:

  x       cos x
  ─────────────
  0       1
  π/2     0
  π       -1
  3π/2    0
  2π      1

The movement is:

  1 → 0 → -1 → 0 → 1

Then the pattern repeats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. COMPARING THE TWO GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to understand sine and cosine is to look at them together.

  y = sin x

and:

  y = cos x

Both have the same:

  Wave shape
  Domain
  Range
  Amplitude
  Period

The main difference is their starting position and horizontal shift.

  Property          y = sin x            y = cos x
  ──────────────────────────────────────────────────
  Starting point    (0, 0)               (0, 1)
  Maximum           1                    1
  Minimum           -1                   -1
  Amplitude         1                    1
  Period            2π                   2π
  Domain            All real numbers     All real numbers
  Range             [-1, 1]              [-1, 1]
  Symmetry          Origin               y-axis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MOST IMPORTANT GRAPH POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following table compares sine and cosine at the most important angles:

  x       sin x     cos x
  ─────────────────────────
  0       0         1
  π/2     1         0
  π       0         -1
  3π/2    -1        0
  2π      0         1

This table is extremely useful when sketching the graphs manually.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VISUAL RELATIONSHIP BETWEEN SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graphs have exactly the same wave shape, but one is shifted horizontally.

The important identity is:

  cos x = sin(x + π/2)

This means cosine can be considered a sine wave shifted:

  π/2 units to the left

Alternatively:

  sin x = cos(x - π/2)

This means sine can be considered a cosine wave shifted:

  π/2 units to the right

So sine and cosine are essentially the same type of wave at different positions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Both sine and cosine accept every real number.

For sine:

  Domain = (-∞, ∞)

For cosine:

  Domain = (-∞, ∞)

You can substitute any real value for x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Both functions have outputs between:

  -1

and:

  1

Therefore:

  -1 ≤ sin x ≤ 1

and:

  -1 ≤ cos x ≤ 1

The range for both functions is:

  [-1, 1]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AMPLITUDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The amplitude is the maximum distance from the middle line.

For:

  y = sin x

and:

  y = cos x

the midline is:

  y = 0

The maximum is:

  1

The minimum is:

  -1

Therefore:

  Amplitude = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PERIOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The period tells us how long it takes for the graph to repeat one complete cycle.

For both sine and cosine:

  Period = 2π

This means:

  sin(x + 2π) = sin x

and:

  cos(x + 2π) = cos x

The graphs repeat every:

  2π

units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HOW TO SKETCH THE SINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To draw:

  y = sin x

follow these five important points:

Step 1

Start at:

  (0, 0)

Step 2

Move to:

  (π/2, 1)

This is the maximum.

Step 3

Move to:

  (π, 0)

Step 4

Move to:

  (3π/2, -1)

This is the minimum.

Step 5

Return to:

  (2π, 0)

Then repeat the wave.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW TO SKETCH THE COSINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To draw:

  y = cos x

follow these five important points:

Step 1

Start at:

  (0, 1)

Step 2

Move down to:

  (π/2, 0)

Step 3

Continue to:

  (π, -1)

This is the minimum.

Step 4

Move back to:

  (3π/2, 0)

Step 5

Return to:

  (2π, 1)

Then repeat the wave.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL FORM OF THE SINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A transformed sine graph is written as:

  y = A sin(B(x - C)) + D

Each letter changes the graph.

  Parameter    Effect
  ──────────────────────────────────────
  A            Changes amplitude
  B            Changes period
  C            Horizontal shift
  D            Vertical shift

Amplitude

The amplitude is:

  |A|

Example:

  y = 3 sin x

Amplitude:

  3

The graph now moves between:

  -3 and 3

Period

The period is:

  2π/|B|

Example:

  y = sin(2x)

The period is:

  2π/2

Therefore:

  π

The graph completes its cycle faster.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL FORM OF THE COSINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A transformed cosine graph is:

  y = A cos(B(x - C)) + D

The same transformation rules apply.

  Parameter    Effect
  ──────────────────────────────────────
  A            Amplitude
  B            Period
  C            Horizontal shift
  D            Vertical shift

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. VERTICAL SHIFT AND MIDLINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = sin x + 2

The entire graph moves upward by:

  2

The new midline becomes:

  y = 2

The maximum becomes:

  2 + 1 = 3

The minimum becomes:

  2 - 1 = 1

Therefore, the graph moves between:

  1 and 3

The same idea applies to cosine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. REFLECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = -sin x

The negative sign reflects the sine graph across the x-axis.

Instead of:

  0 → 1 → 0 → -1

it becomes:

  0 → -1 → 0 → 1

Similarly:

  y = -cos x

reflects the cosine graph across the x-axis.

Instead of starting at:

  (0, 1)

it starts at:

  (0, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE OF A TRANSFORMED SINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = 2 sin(3x) + 1

Let's analyze it.

  Amplitude:      2
  Period:         2π/3
  Vertical Shift: 1 unit upward
  Midline:        y = 1
  Maximum:        1 + 2 = 3
  Minimum:        1 - 2 = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE OF A TRANSFORMED COSINE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  y = 3 cos(2(x - π/4)) - 1

  Amplitude:          3
  Period:             2π/2 = π
  Horizontal Shift:   π/4 to the right
  Vertical Shift:     1 unit downward
  Midline:            y = -1
  Maximum:            -1 + 3 = 2
  Minimum:            -1 - 3 = -4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine and cosine graphs have different types of symmetry.

Sine Function

  sin(-x) = -sin x

Therefore, sine is an odd function.

It has symmetry about:

  the origin

Cosine Function

  cos(-x) = cos x

Therefore, cosine is an even function.

It has symmetry about:

  the y-axis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DERIVATIVES AND THE GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of sine and cosine connect the two functions:

  d/dx (sin x) = cos x

and:

  d/dx (cos x) = -sin x

This means:

  The slope of the sine graph is determined by cosine.
  The slope of the cosine graph is determined by negative sine.

For example, at:

  x = 0

we have:

  sin 0 = 0

but:

  cos 0 = 1

Therefore, the sine graph begins at zero and has a positive slope of 1.

Meanwhile:

  cos 0 = 1

and:

  -sin 0 = 0

So the cosine graph begins at its maximum with a horizontal tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. INTEGRALS OF SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative formulas are:

  ∫ sin x dx = -cos x + C

and:

  ∫ cos x dx = sin x + C

These formulas are closely related to their derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMPARISON SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property          Sine                   Cosine
  ──────────────────────────────────────────────────
  Function          sin x                  cos x
  Starts at x=0     0                      1
  Maximum           1                      1
  Minimum           -1                     -1
  Amplitude         1                      1
  Period            2π                     2π
  Midline           y = 0                  y = 0
  Symmetry          Origin                 y-axis
  Derivative        cos x                  -sin x
  Integral          -cos x + C             sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Basic Sine:
    y = sin x

  Basic Cosine:
    y = cos x

  General Sine:
    y = A sin(B(x - C)) + D

  General Cosine:
    y = A cos(B(x - C)) + D

  Amplitude:
    |A|

  Period:
    2π/|B|

  Relationship:
    cos x = sin(x + π/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graphs of sine and cosine are smooth repeating waves called sinusoidal curves.

Both have:

  Amplitude = 1

and:

  Period = 2π

The major difference is where they start:

  Sine starts in the middle:   (0, 0)
  Cosine starts at the top:    (0, 1)

The easiest way to remember them is:

  Sine starts at zero and rises, while cosine starts at one and falls.

Understanding their graphs is important because sine and cosine appear throughout Calculus, especially in derivatives, integrals, periodic motion, waves, and real-world applications.
  `,
  examples: [
    "sin 0 = 0, sin(π/2) = 1, sin π = 0, sin(3π/2) = -1, sin 2π = 0",
    "cos 0 = 1, cos(π/2) = 0, cos π = -1, cos(3π/2) = 0, cos 2π = 1",
    "cos x = sin(x + π/2) → cosine is sine shifted left by π/2",
    "sin x = cos(x - π/2) → sine is cosine shifted right by π/2",
    "y = 2 sin(3x) + 1 → amplitude = 2, period = 2π/3, midline = y = 1",
    "y = 3 cos(2(x - π/4)) - 1 → amplitude = 3, period = π, shift = π/4 right, midline = y = -1",
    "sin(-x) = -sin x → sine is odd, symmetric about the origin",
    "cos(-x) = cos x → cosine is even, symmetric about the y-axis",
  ],
};

export default topic;