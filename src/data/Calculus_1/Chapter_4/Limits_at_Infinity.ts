// filename: limits-at-infinity.ts

const topic = {
  id: "limits-at-infinity",
  title: "Limits at Infinity",
  summary:
    "Describes what happens to a function when x becomes extremely large in the positive or negative direction, used to identify horizontal asymptotes and end behavior of functions.",
  details: `
Limits at Infinity describe what happens to a function when x becomes extremely large in the positive or negative direction. In other words, instead of asking what happens when x approaches a particular number such as 2, we ask what happens when:
  x → ∞
or:
  x → -∞.

This topic is especially important because it allows us to understand the end behavior of a function and identify horizontal asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES x → ∞ MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we write x → ∞, we do not mean that x actually reaches infinity.

Infinity is not an ordinary number.

Instead, x → ∞ means that x becomes larger and larger without bound:
  10, 100, 1,000, 10,000, 100,000, ...

Similarly, x → -∞ means that x becomes more and more negative:
  -10, -100, -1,000, -10,000, ...

So, for example:
  lim(x→∞) f(x) = L

means that as x becomes increasingly large, f(x) gets closer and closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We say:
  lim(x→∞) f(x) = L

if the values of f(x) approach L as x becomes arbitrarily large.

Likewise:
  lim(x→-∞) f(x) = L

means that f(x) approaches L as x becomes increasingly negative.

Example:
  Consider f(x) = 2 + 1/x.

  Let's examine what happens as x gets larger:

    x       f(x)
    ───────────────
    10      2.1
    100     2.01
    1,000   2.001
    10,000  2.0001

  The values are getting closer and closer to 2.

  Therefore:
    lim(x→∞) (2 + 1/x) = 2

  The same happens on the negative side:
    lim(x→-∞) (2 + 1/x) = 2

This is the basic idea behind limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LIMITS AT INFINITY VS. INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two ideas are easy to confuse.

Limit at infinity:
  lim(x→∞) f(x) = L
  Here, x is going toward infinity.
  Example:
    lim(x→∞) 1/x = 0.

Infinite limit:
  lim(x→a) f(x) = ∞
  Here, f(x) is going toward infinity while x approaches a particular number.
  Example:
    lim(x→0⁺) 1/x = ∞.

So remember:
  x → ∞ → we're studying the function's behavior far to the right.
  f(x) → ∞ → the function itself becomes infinitely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of limits at infinity is finding horizontal asymptotes.

If:
  lim(x→∞) f(x) = L

then:
  y = L

is a horizontal asymptote.

Similarly, if:
  lim(x→-∞) f(x) = L

then y = L is a horizontal asymptote on the left side of the graph.

Example:
  f(x) = (3x + 1)/(x + 2)

Find:
  lim(x→∞) (3x + 1)/(x + 2)

Divide every term by x:
  (3x + 1)/(x + 2) = (3 + 1/x)/(1 + 2/x)

As x → ∞, 1/x → 0 and 2/x → 0.

Therefore:
  lim(x→∞) (3 + 1/x)/(1 + 2/x) = (3 + 0)/(1 + 0) = 3

Thus:
  lim(x→∞) (3x + 1)/(x + 2) = 3

and the horizontal asymptote is:
  y = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE MOST IMPORTANT RULE FOR RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have:
  f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials.

The easiest method is to compare the highest powers of x in the numerator and denominator.

There are three major cases.

Case 1: Same Degree
  If the numerator and denominator have the same degree, divide the leading coefficients.

Example:
  lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5)

  The highest power in both is x².

  Look only at the leading terms:
    (4x²)/(2x²)

  Therefore:
    lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5) = 2

  because 4/2 = 2.

  Horizontal asymptote: y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CASE 2: NUMERATOR DEGREE IS SMALLER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the denominator has a higher degree than the numerator.

Example:
  lim(x→∞) (5x + 2)/(x² + 3)

The numerator has degree 1.
The denominator has degree 2.

Because the denominator grows much faster:
  lim(x→∞) (5x + 2)/(x² + 3) = 0

Therefore, the horizontal asymptote is:
  y = 0

Why?
  For very large x:
    5x + 2 ≈ 5x
  while:
    x² + 3 ≈ x²

  So approximately:
    (5x)/(x²) = 5/x

  And 5/x → 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CASE 3: NUMERATOR DEGREE IS LARGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the numerator has a higher degree than the denominator.

Example:
  lim(x→∞) (x³ + 2)/(x² + 1)

The numerator has degree 3.
The denominator has degree 2.

The numerator grows faster.

Therefore:
  lim(x→∞) (x³ + 2)/(x² + 1) = ∞

The function does not approach a finite horizontal asymptote.

For this particular example, polynomial division also tells us that:
  (x³ + 2)/(x² + 1) = x + (2 - x)/(x² + 1)

As x → ∞, (2 - x)/(x² + 1) → 0, so the function behaves approximately like y = x.

Thus it has an oblique/slant asymptote:
  y = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE SHORTCUT TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:
  lim(x→±∞) P(x)/Q(x)

compare the degrees:

  Degree Relationship                            Limit Behavior
  ───────────────────────────────────────────────────────────────────────────────────────
  Numerator degree < denominator degree           0
  Numerator degree = denominator degree           Ratio of leading coefficients
  Numerator degree > denominator degree           Usually ±∞ or polynomial/oblique behavior

This degree comparison is one of the fastest ways to evaluate rational-function limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: SAME DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) (7x³ - 4x + 1)/(2x³ + 5x² - 9)

Both have degree 3.

Take the leading coefficients:
  7/2

Therefore:
  lim(x→∞) (7x³ - 4x + 1)/(2x³ + 5x² - 9) = 7/2

Horizontal asymptote:
  y = 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: LOWER DEGREE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) (3x² + 5)/(x⁴ + 2x + 1)

Numerator degree: 2
Denominator degree: 4

Since 2 < 4, the denominator grows much faster.

Therefore:
  lim(x→∞) (3x² + 5)/(x⁴ + 2x + 1) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: HIGHER DEGREE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) (2x⁴ + 3x)/(x² + 1)

Numerator degree: 4
Denominator degree: 2

The numerator grows much faster.

Therefore:
  lim(x→∞) (2x⁴ + 3x)/(x² + 1) = ∞

because the dominant behavior is approximately:
  (2x⁴)/(x²) = 2x²

And 2x² → ∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY THE HIGHEST-POWER TERMS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the key concept behind many limits at infinity.

Consider:
  f(x) = (8x⁴ + 3x² - 7x + 10)/(2x⁴ - 5x³ + 9)

When x becomes enormous, the x⁴ terms dominate.

So we can think of the function as approximately:
  (8x⁴)/(2x⁴)

Cancel x⁴:
  8/2 = 4

Therefore:
  lim(x→∞) f(x) = 4

The smaller-degree terms become relatively insignificant compared with x⁴.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LIMITS AS x → -∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You must be careful when x approaches negative infinity.

For example:
  lim(x→-∞) x³

Because x is negative:
  (-10)³ = -1000
  (-100)³ = -1,000,000

Therefore:
  lim(x→-∞) x³ = -∞

But for an even power:
  lim(x→-∞) x² = ∞

because:
  (-10)² = 100
  (-100)² = 10,000

So:
  lim(x→-∞) x² = ∞
while:
  lim(x→-∞) x³ = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EVEN VS. ODD POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is extremely useful when dealing with x → -∞.

Even powers:
  x², x⁴, x⁶, ...
  give x^even → +∞ as x → ±∞.

Odd powers:
  x, x³, x⁵, ...
  behave differently:
    x^odd → +∞ as x → +∞
  but:
    x^odd → -∞ as x → -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH x → -∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→-∞) (3x² + 1)/(5x² - 7)

Both numerator and denominator have degree 2.

Take the leading coefficients:
  3/5

Therefore:
  lim(x→-∞) (3x² + 1)/(5x² - 7) = 3/5

Notice that the result is the same for x → +∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at infinity also occur with exponential functions.

For example:
  lim(x→∞) 1/eˣ

Since eˣ → ∞, we get:
  1/eˣ → 0

Therefore:
  lim(x→∞) e⁻ˣ = 0

Similarly:
  lim(x→-∞) eˣ = 0

This is because exponential functions can become extremely small or extremely large depending on the direction of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT STANDARD LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should memorize these common results:

  Reciprocal:
    lim(x→∞) 1/x = 0
    lim(x→-∞) 1/x = 0

  Reciprocal square:
    lim(x→±∞) 1/x² = 0

  Reciprocal power:
    For n > 0, lim(x→∞) 1/xⁿ = 0

  Exponential decay:
    lim(x→∞) e⁻ˣ = 0

  Exponential growth:
    lim(x→∞) eˣ = ∞

These basic limits are useful building blocks for more complicated problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A VERY IMPORTANT CONCEPT: END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at infinity tell us about the end behavior of a function.

For example:
  f(x) = (2x + 1)/(x + 3)

We found:
  lim(x→∞) f(x) = 2

This tells us that the right side of the graph approaches y = 2.

If:
  lim(x→-∞) f(x) = 2

then the left side also approaches y = 2.

So the graph gets closer and closer to y = 2 on both ends.

A horizontal asymptote does not necessarily mean the graph can never cross that line. A function can cross a horizontal asymptote and still approach it as x → ±∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A USEFUL STRATEGY FOR SOLVING LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter:
  lim(x→∞) f(x)
or:
  lim(x→-∞) f(x)

use this process:

Step 1: Identify the type of function
  Ask: Polynomial? Rational function? Exponential? Radical? Trigonometric? Combination?

Step 2: Look for dominant terms
  For polynomials and rational functions, identify the highest power of x.

Step 3: Compare growth rates
  For rational functions: deg(numerator) vs deg(denominator).

Step 4: Simplify
  Divide by the highest power of x, if necessary.

Step 5: Evaluate
  Use basic limits such as 1/x → 0.

Step 6: Interpret the result
  If the answer is a finite number L, then y = L is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) (6x² - 4x + 7)/(3x² + 8x - 2)

Step 1: Identify the highest power
  The highest power is x².

Step 2: Divide everything by x²
  (6 - 4/x + 7/x²)/(3 + 8/x - 2/x²)

Step 3: Apply the limits
  As x → ∞, we know 1/x → 0 and 1/x² → 0.

  Therefore:
    (6 - 0 + 0)/(3 + 0 - 0) = 6/3 = 2

Therefore:
  lim(x→∞) (6x² - 4x + 7)/(3x² + 8x - 2) = 2

and the horizontal asymptote is:
  y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. GRAPH INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the graph like this:

x → +∞ means you are walking far to the right on the graph.

x → -∞ means you are walking far to the left.

Then ask:
  What y-value is the graph approaching?

For example:
  lim(x→∞) f(x) = 4

means that far to the right, the graph gets closer and closer to y = 4.

This is why limits at infinity are strongly connected to graphing and horizontal asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE MAIN THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition:
  lim(x→∞) f(x) = L
  means f(x) approaches L as x becomes arbitrarily large.

Negative infinity:
  lim(x→-∞) f(x) = L
  means f(x) approaches L as x becomes arbitrarily negative.

Horizontal asymptote:
  If lim(x→±∞) f(x) = L, then y = L is a horizontal asymptote.

Rational-function shortcut:

  Situation                                    Result
  ─────────────────────────────────────────────────────────────────────────────────────
  Top degree < bottom degree                    0
  Top degree = bottom degree                    Leading coefficient ratio
  Top degree > bottom degree                    Usually ±∞ or oblique/polynomial end behavior

Most important intuition:
  Limits at infinity tell you what a function does at the far ends of its graph.
  They don't tell you what happens near a particular x-value; they tell you 
  what happens when x becomes extremely large or extremely negative.
  `,
  examples: [
    "lim(x→∞) (2 + 1/x) = 2",
    "lim(x→∞) (3x + 1)/(x + 2) = 3",
    "lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5) = 2",
    "lim(x→∞) (5x + 2)/(x² + 3) = 0",
    "lim(x→∞) (x³ + 2)/(x² + 1) = ∞",
    "lim(x→-∞) x³ = -∞, lim(x→-∞) x² = ∞",
    "lim(x→∞) e⁻ˣ = 0",
  ],
};

export default topic;