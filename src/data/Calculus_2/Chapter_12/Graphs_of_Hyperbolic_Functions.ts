// filename: GraphsOfHyperbolicFunctions.ts

const topic = {
  id: "graphs-of-hyperbolic-functions",
  title: "Graphs of Hyperbolic Functions",
  summary:
    "A comprehensive guide to the graphs of all six hyperbolic functions: sinh, cosh, tanh, coth, sech, and csch. Covers shape, symmetry, intercepts, asymptotes, domain, and range for each function.",
  details: `
The graphs of hyperbolic functions show how hyperbolic sine, cosine, tangent, and their reciprocal functions behave as x changes. Unlike ordinary trigonometric functions, hyperbolic functions are generally not periodic—their patterns do not repeat over a fixed interval.

The six main hyperbolic functions are:

  sinh x, cosh x, tanh x, coth x, sech x, csch x

Understanding their graphs helps us visualize important concepts such as:

  symmetry
  intercepts
  increasing and decreasing behavior
  maximum and minimum values
  asymptotes
  domain and range

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GRAPH OF HYPERBOLIC SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic sine function is:

  y = sinh x = (eˣ - e⁻ˣ)/2

Basic Shape

The graph of y = sinh x looks somewhat similar to a cubic function such as:

  y = x³

It passes through the origin:

  (0, 0)

The function increases continuously from left to right.

Important Points

  x     sinh x
  ──────────────────
  -2    approximately -3.627
  -1    approximately -1.175
  0     0
  1     approximately 1.175
  2     approximately 3.627

Graph Properties

Domain

  (-∞, ∞)

The function accepts every real number.

Range

  (-∞, ∞)

The output can also be any real number.

Symmetry

  sinh(-x) = -sinh(x)

Therefore, sinh x is an odd function.

Its graph is symmetric about the:

  origin

Behavior

As:

  x → ∞

then:

  sinh x → ∞

As:

  x → -∞

then:

  sinh x → -∞

Main Idea

The graph continuously rises and becomes steeper as x moves away from zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GRAPH OF HYPERBOLIC COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosine function is:

  y = cosh x = (eˣ + e⁻ˣ)/2

Basic Shape

The graph looks like a smooth U-shaped curve.

However, it is not exactly a parabola.

The lowest point occurs at:

  (0, 1)

The graph is commonly called a catenary curve in certain physical applications, such as describing an ideal hanging cable.

Important Points

  x     cosh x
  ──────────────────
  -2    approximately 3.762
  -1    approximately 1.543
  0     1
  1     approximately 1.543
  2     approximately 3.762

Graph Properties

Domain

  (-∞, ∞)

Range

  [1, ∞)

The smallest possible value is:

  1

Symmetry

  cosh(-x) = cosh(x)

Therefore, cosh x is an even function.

Its graph is symmetric about the:

  y-axis

Minimum Point

  (0, 1)

Behavior

As:

  x → ∞

then:

  cosh x → ∞

Also, as:

  x → -∞

then:

  cosh x → ∞

This is why the graph rises upward on both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GRAPH OF HYPERBOLIC TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic tangent function is:

  y = tanh x = sinh x / cosh x

or:

  tanh x = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)

Basic Shape

The graph has an S-shape.

It passes through:

  (0, 0)

Unlike sinh x, the values of tanh x do not increase without limit.

Instead, they approach:

  y = 1

and:

  y = -1

Important Points

  x     tanh x
  ──────────────────
  -2    approximately -0.964
  -1    approximately -0.762
  0     0
  1     approximately 0.762
  2     approximately 0.964

Horizontal Asymptotes

As:

  x → ∞

  tanh x → 1

Therefore:

  y = 1

is a horizontal asymptote.

As:

  x → -∞

  tanh x → -1

Therefore:

  y = -1

is another horizontal asymptote.

The graph gets closer and closer to these lines but never reaches them.

Domain

  (-∞, ∞)

Range

  (-1, 1)

Symmetry

  tanh(-x) = -tanh(x)

Therefore, it is an odd function and is symmetric about the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GRAPH OF HYPERBOLIC COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cotangent is:

  y = coth x = cosh x / sinh x

Since:

  sinh(0) = 0

the function is undefined at:

  x = 0

Graph Shape

The graph has two separate branches:

  one on the positive side of the y-axis
  one on the negative side of the y-axis

Vertical Asymptote

Because the denominator becomes zero at x = 0:

  x = 0

is a vertical asymptote.

Horizontal Asymptotes

As:

  x → ∞

  coth x → 1

As:

  x → -∞

  coth x → -1

Therefore, the horizontal asymptotes are:

  y = 1

and:

  y = -1

Domain

  (-∞, 0) ∪ (0, ∞)

Range

  (-∞, -1) ∪ (1, ∞)

The graph never has values between -1 and 1.

Symmetry

  coth(-x) = -coth(x)

Therefore, coth x is an odd function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPH OF HYPERBOLIC SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic secant is:

  y = sech x = 1/cosh x

Because:

  cosh x ≥ 1

we know that:

  0 < sech x ≤ 1

Important Point

At:

  x = 0

we have:

  cosh(0) = 1

Therefore:

  sech(0) = 1

So the graph has its maximum value at:

  (0, 1)

Important Behavior

As:

  x → ∞

  sech x → 0

As:

  x → -∞

  sech x → 0

Therefore:

  y = 0

is a horizontal asymptote.

Domain

  (-∞, ∞)

Range

  (0, 1]

Symmetry

  sech(-x) = sech(x)

Therefore, the graph is symmetric about the:

  y-axis

The graph looks like a smooth hill centered at (0, 1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GRAPH OF HYPERBOLIC COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosecant is:

  y = csch x = 1/sinh x

Since:

  sinh(0) = 0

the function is undefined at:

  x = 0

Graph Shape

The graph has two separate branches.

Vertical Asymptote

  x = 0

Horizontal Asymptote

As:

  x → ∞

  csch x → 0

As:

  x → -∞

  csch x → 0

Therefore:

  y = 0

is a horizontal asymptote.

Domain

  (-∞, 0) ∪ (0, ∞)

Range

  (-∞, 0) ∪ (0, ∞)

The function can never equal zero.

Symmetry

  csch(-x) = -csch(x)

Therefore, csch x is an odd function and is symmetric about the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPARING THE SIX GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Shape                    Symmetry      Important Feature
  ──────────────────────────────────────────────────────────────────────────
  sinh x          Increasing S-shaped      Origin        Passes through (0, 0)
  cosh x          U-shaped curve           y-axis        Minimum at (0, 1)
  tanh x          Bounded S-shaped         Origin        Asymptotes y = ±1
  coth x          Two branches             Origin        Vertical asymptote x = 0
  sech x          Bell-like hill           y-axis        Maximum at (0, 1)
  csch x          Two branches             Origin        Vertical asymptote x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RELATIONSHIP BETWEEN THE GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Understanding how the functions are related makes their graphs easier to remember.

sinh x and cosh x

These are the two fundamental hyperbolic functions.

  sinh x passes through (0, 0).
  cosh x has a minimum at (0, 1).

Their important identity is:

  cosh² x - sinh² x = 1

tanh x

Since:

  tanh x = sinh x / cosh x

its graph becomes bounded between:

  -1 < tanh x < 1

Reciprocal Relationships

The remaining functions are reciprocals:

  sech x = 1/cosh x
  csch x = 1/sinh x
  coth x = 1/tanh x

This explains why their graphs often have asymptotes or separate branches.

For example, if the original function approaches zero, its reciprocal can become extremely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. HOW TO SKETCH A HYPERBOLIC FUNCTION GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When sketching one of these graphs, follow these steps:

Step 1: Identify the Function

Determine whether it is:

  sinh, cosh, tanh, coth, sech, or csch

Step 2: Check the Value at x = 0

This helps find important intercepts.

For example:

  sinh(0) = 0
  cosh(0) = 1
  tanh(0) = 0

Step 3: Check Symmetry

Ask whether the function is:

  Even → symmetric about the y-axis
  Odd → symmetric about the origin

Step 4: Find Asymptotes

Important examples:

  tanh x:    y = ±1
  coth x:    x = 0, y = ±1
  sech x:    y = 0
  csch x:    x = 0, y = 0

Step 5: Determine End Behavior

Ask:

  What happens as x → ∞?

and:

  What happens as x → -∞?

This tells you how the graph behaves on the far left and far right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. KEY THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic Sine

  sinh x
  passes through (0, 0)
  odd function
  increases continuously
  range is all real numbers

Hyperbolic Cosine

  cosh x
  minimum at (0, 1)
  even function
  U-shaped
  never goes below 1

Hyperbolic Tangent

  tanh x
  passes through (0, 0)
  S-shaped
  horizontal asymptotes at y = 1 and y = -1
  range is between -1 and 1

Hyperbolic Cotangent

  coth x
  undefined at x = 0
  vertical asymptote at x = 0
  horizontal asymptotes at y = ±1

Hyperbolic Secant

  sech x
  maximum at (0, 1)
  even function
  approaches 0 on both sides

Hyperbolic Cosecant

  csch x
  undefined at x = 0
  vertical asymptote at x = 0
  approaches 0 as x moves far left or right

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Domain              Range               Symmetry
  ──────────────────────────────────────────────────────────────────────────
  sinh x          (-∞, ∞)             (-∞, ∞)             Odd (origin)
  cosh x          (-∞, ∞)             [1, ∞)              Even (y-axis)
  tanh x          (-∞, ∞)             (-1, 1)             Odd (origin)
  coth x          (-∞,0)∪(0,∞)        (-∞,-1)∪(1,∞)      Odd (origin)
  sech x          (-∞, ∞)             (0, 1]              Even (y-axis)
  csch x          (-∞,0)∪(0,∞)        (-∞,0)∪(0,∞)      Odd (origin)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graphs of hyperbolic functions are important because they visually demonstrate how exponential growth and decay combine to produce different mathematical behaviors. Some functions grow without limits, such as sinh x and cosh x; some are bounded, such as tanh x and sech x; and others have asymptotes and separate branches, such as coth x and csch x.

Understanding the shape, symmetry, intercepts, domain, range, and asymptotes of each graph makes hyperbolic functions much easier to recognize and use in Calculus.

Easy way to remember: sinh is S-shaped through the origin, cosh is U-shaped with minimum at (0, 1), tanh is S-shaped but bounded between -1 and 1. The reciprocal functions (sech, csch, coth) have vertical asymptotes where the original functions are zero.
  `,
  examples: [
    "sinh x passes through (0, 0), odd function, range all real numbers",
    "cosh x has minimum at (0, 1), even function, range [1, ∞)",
    "tanh x has horizontal asymptotes y = 1 and y = -1, range (-1, 1)",
    "coth x has vertical asymptote at x = 0, horizontal asymptotes y = ±1",
    "sech x has maximum at (0, 1), horizontal asymptote y = 0",
    "csch x has vertical asymptote at x = 0, horizontal asymptote y = 0",
    "sinh(0) = 0, cosh(0) = 1, tanh(0) = 0",
    "cosh² x - sinh² x = 1",
  ],
};

export default topic;