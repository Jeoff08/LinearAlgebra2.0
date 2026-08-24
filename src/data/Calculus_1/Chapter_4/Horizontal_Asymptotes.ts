// filename: horizontal-asymptotes.ts

const topic = {
  id: "horizontal-asymptotes",
  title: "Horizontal Asymptotes",
  summary:
    "A horizontal line y = L that a graph approaches as x approaches positive or negative infinity, determined by limits at infinity.",
  details: `
A horizontal asymptote is a horizontal line that a graph approaches as x becomes extremely large in the positive or negative direction.

In other words, a horizontal asymptote describes the end behavior of a function.

If:
  lim(x→∞) f(x) = L
or:
  lim(x→-∞) f(x) = L

then the line:
  y = L

is a horizontal asymptote of the graph of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A HORIZONTAL ASYMPTOTE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal asymptote is a horizontal line that the graph of a function approaches as x moves far to the right or far to the left.

Imagine walking along the graph toward the right side.

If the graph appears to get closer and closer to a horizontal line, that line is a horizontal asymptote.

For example, consider:
  f(x) = 1/x

As x → ∞, the values become:
  1/10 = 0.1
  1/100 = 0.01
  1/1000 = 0.001

The values are approaching 0.

Therefore:
  lim(x→∞) 1/x = 0

So:
  y = 0

is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HORIZONTAL ASYMPTOTES VS. VERTICAL ASYMPTOTES

Horizontal asymptotes and vertical asymptotes are different.

Horizontal asymptote:
  A horizontal line y = L.
  The graph approaches this line as x → ∞ or x → -∞.
  Example: y = 0 for f(x) = 1/x.

Vertical asymptote:
  A vertical line x = a.
  The graph approaches this line as x approaches a from one or both sides.
  Example: x = 0 for f(x) = 1/x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING HORIZONTAL ASYMPTOTES FOR RATIONAL FUNCTIONS

For a rational function:
  f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials, compare the degrees.

There are three cases.

Case 1: Degree of numerator < degree of denominator
  The horizontal asymptote is:
    y = 0

Example:
  f(x) = (x + 2)/(x² + 1)

  Degree of numerator: 1
  Degree of denominator: 2

  Since 1 < 2:
    lim(x→∞) (x + 2)/(x² + 1) = 0

  Horizontal asymptote: y = 0

Case 2: Degree of numerator = degree of denominator
  The horizontal asymptote is:
    y = leading coefficient of numerator / leading coefficient of denominator

Example:
  f(x) = (3x² + 2x + 1)/(2x² - 5)

  Degree of numerator: 2
  Degree of denominator: 2

  Leading coefficients: 3 and 2

  Horizontal asymptote: y = 3/2

Case 3: Degree of numerator > degree of denominator
  There is no horizontal asymptote.
  The function grows without bound or has an oblique asymptote.

Example:
  f(x) = (x³ + 1)/(x² + 2)

  Degree of numerator: 3
  Degree of denominator: 2

  Since 3 > 2, there is no horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING HORIZONTAL ASYMPTOTES USING LIMITS

To find a horizontal asymptote, evaluate:
  lim(x→∞) f(x)
and:
  lim(x→-∞) f(x)

If either limit is a finite number L, then:
  y = L

is a horizontal asymptote.

Example:
  f(x) = (2x + 3)/(x - 1)

Find:
  lim(x→∞) (2x + 3)/(x - 1)

Divide by x:
  = (2 + 3/x)/(1 - 1/x)

As x → ∞:
  3/x → 0 and 1/x → 0

Therefore:
  lim(x→∞) (2 + 0)/(1 - 0) = 2

Similarly:
  lim(x→-∞) (2x + 3)/(x - 1) = 2

So the horizontal asymptote is:
  y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. A FUNCTION CAN HAVE TWO DIFFERENT HORIZONTAL ASYMPTOTES

Some functions approach different values on the left and right sides.

Example:
  f(x) = eˣ

As x → ∞:
  eˣ → ∞

So no horizontal asymptote on the right.

As x → -∞:
  eˣ → 0

So:
  y = 0

is a horizontal asymptote on the left.

Example:
  f(x) = arctan(x)

As x → ∞:
  arctan(x) → π/2

As x → -∞:
  arctan(x) → -π/2

So there are two horizontal asymptotes:
  y = π/2 and y = -π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FUNCTIONS WITH NO HORIZONTAL ASYMPTOTE

Not every function has a horizontal asymptote.

If the function grows without bound as x → ∞ or x → -∞, there is no horizontal asymptote.

Examples:

f(x) = x²
  As x → ∞, x² → ∞.
  As x → -∞, x² → ∞.
  No horizontal asymptote.

f(x) = eˣ
  As x → ∞, eˣ → ∞.
  No horizontal asymptote on the right.

f(x) = x³ + 2x
  As x → ∞, the function → ∞.
  No horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. HORIZONTAL ASYMPTOTES AND GRAPHS

A horizontal asymptote does not mean the graph can never cross the line.

In fact, a graph can cross a horizontal asymptote.

For example:
  f(x) = (x² + 1)/(x² - 1)

As x → ∞:
  f(x) → 1

So y = 1 is a horizontal asymptote.

However, the graph may cross y = 1 for some finite values of x.

The asymptote only describes the behavior as x → ±∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLES

Example 1:
  f(x) = (5x² - 3x + 2)/(2x² + 4x - 1)

  Both numerator and denominator have degree 2.

  Leading coefficients: 5 and 2.

  Horizontal asymptote:
    y = 5/2

Example 2:
  f(x) = (2x + 5)/(3x² + 1)

  Numerator degree: 1
  Denominator degree: 2

  Since 1 < 2:
    Horizontal asymptote: y = 0

Example 3:
  f(x) = (x⁴ + 2x²)/(x² + 1)

  Numerator degree: 4
  Denominator degree: 2

  Since 4 > 2:
    No horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. QUICK REFERENCE TABLE

  Situation                                        Horizontal Asymptote
  ─────────────────────────────────────────────────────────────────────────────────────────
  deg(num) < deg(den)                             y = 0
  deg(num) = deg(den)                             y = leading coefficient ratio
  deg(num) > deg(den)                             No horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE BIG IDEA

A horizontal asymptote describes where a function "settles down" as x becomes extremely large or extremely negative.

It is found by evaluating:
  lim(x→∞) f(x)
and:
  lim(x→-∞) f(x)

For rational functions, compare the degrees of the numerator and denominator.

The most important thing to remember is:

  A horizontal asymptote tells you the end behavior of a function, not 
  its behavior near a specific point.
  `,
  examples: [
    "f(x) = 1/x → horizontal asymptote y = 0",
    "f(x) = (3x² + 2x + 1)/(2x² - 5) → horizontal asymptote y = 3/2",
    "f(x) = (x + 2)/(x² + 1) → horizontal asymptote y = 0",
    "f(x) = (2x + 3)/(x - 1) → horizontal asymptote y = 2",
    "f(x) = eˣ → horizontal asymptote y = 0 on the left",
    "f(x) = arctan(x) → horizontal asymptotes y = π/2 and y = -π/2",
    "f(x) = x² → no horizontal asymptote",
  ],
};

export default topic;