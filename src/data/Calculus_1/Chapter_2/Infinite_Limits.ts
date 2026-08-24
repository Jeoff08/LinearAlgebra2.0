// filename: infinite-limits.ts

const topic = {
  id: "infinite-limits",
  title: "Infinite Limits",
  summary:
    "When a function increases or decreases without bound as the input approaches a particular value, represented by ∞ or -∞, often associated with vertical asymptotes.",
  details: `
An infinite limit occurs when the value of a function increases or decreases without bound as the input approaches a particular number.

In other words, as x gets closer and closer to a certain value, the function does not approach an ordinary finite number such as:
  2, -5, 1/3

Instead, the function grows extremely large in the positive or negative direction.

We use the symbols ∞ and -∞ to describe this behavior.

For example:
  lim(x→0⁺) 1/x = ∞

This means that as x approaches 0 from the positive side, the value of 1/x increases without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES INFINITY MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol ∞ does not represent an ordinary real number.

Instead, it describes a quantity that grows without limit.

For example:
  10, 100, 1000, 10000, ...

These numbers continue increasing.

There is no largest real number.

Therefore, when we write f(x) → ∞, we mean:
  The function becomes larger and larger without any upper limit.

Similarly, f(x) → -∞ means:
  The function becomes more and more negative without any lower limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC EXAMPLE OF AN INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 1/x

Let's examine what happens as x approaches zero from the right.

  x       1/x
  ─────────────
  0.1     10
  0.01    100
  0.001   1000
  0.0001  10000

As x → 0⁺, the values become larger and larger.

Therefore:
  lim(x→0⁺) 1/x = ∞

The function increases without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. APPROACHING FROM THE LEFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider the same function f(x) = 1/x, but approach zero from the left.

  x        1/x
  ─────────────────
  -0.1     -10
  -0.01    -100
  -0.001   -1000
  -0.0001  -10000

As x → 0⁻, the values become more and more negative.

Therefore:
  lim(x→0⁻) 1/x = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. TWO-SIDED INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = 1/x, we found:
  lim(x→0⁻) 1/x = -∞
and:
  lim(x→0⁺) 1/x = ∞

The two sides behave differently.

Therefore:
  lim(x→0) 1/x does not exist

This is because the left-hand and right-hand behaviors are not the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WHERE BOTH SIDES GO TO POSITIVE INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 1/x²

Let's examine the function as x approaches zero.

From the left:
  x = -0.1 → 1/(-0.1)² = 100

From the right:
  x = 0.1 → 1/(0.1)² = 100

Both sides become extremely large and positive.

Therefore:
  lim(x→0) 1/x² = ∞

This happens because x² is always positive for values of x near zero, except at zero itself.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WHERE BOTH SIDES GO TO NEGATIVE INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -1/x²

As x → 0⁻, the denominator becomes a very small positive number, so the result becomes very negative.

As x → 0⁺, the same thing happens.

Therefore:
  lim(x→0) -1/x² = -∞

The function decreases without bound from both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INFINITE LIMITS AND VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits are closely connected to vertical asymptotes.

A vertical asymptote is a vertical line that the graph approaches but does not cross in the usual behavior near that point.

If:
  lim(x→a⁻) f(x) = ∞
or:
  lim(x→a⁺) f(x) = ∞

then x = a is usually a vertical asymptote.

Example:
  Consider f(x) = 1/(x - 2).

The denominator becomes zero when x = 2.

Let's approach 2 from the right:
  x = 2.1 → f(2.1) = 1/0.1 = 10
  x = 2.01 → f(2.01) = 1/0.01 = 100

Therefore:
  lim(x→2⁺) 1/(x - 2) = ∞

Now approach from the left:
  x = 1.9 → f(1.9) = 1/(-0.1) = -10
  x = 1.99 → f(1.99) = 1/(-0.01) = -100

Therefore:
  lim(x→2⁻) 1/(x - 2) = -∞

The graph has a vertical asymptote at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO DETERMINE THE SIGN OF AN INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving infinite limits involving fractions, it is important to examine the signs of the numerator and denominator.

For example:
  1/(x - 3)

As x → 3⁺, the denominator is a very small positive number.
  positive / small positive = very large positive

So:
  lim(x→3⁺) 1/(x - 3) = ∞

As x → 3⁻, the denominator is a very small negative number.
  positive / small negative = very large negative

So:
  lim(x→3⁻) 1/(x - 3) = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INFINITE LIMITS OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits commonly occur in rational functions.

A rational function has the form:
  f(x) = P(x)/Q(x)

Infinite behavior often occurs when Q(x) = 0 and the numerator does not also cancel the factor causing the denominator to become zero.

Example:
  f(x) = (x + 1)/(x - 4)

The denominator becomes zero when x = 4.

At values close to 4, the denominator becomes extremely small.

Therefore, the function may become extremely large in either the positive or negative direction.

The vertical asymptote is x = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH A SQUARED DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 3/(x - 2)²

As x → 2, the denominator approaches 0, but (x - 2)² is always positive.

Therefore, the fraction becomes extremely large and positive from both sides.

Thus:
  lim(x→2) 3/(x - 2)² = ∞

The vertical asymptote is x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH A NEGATIVE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -3/(x - 2)²

The denominator is always positive near x = 2.

The numerator is negative.

Therefore, the function becomes extremely negative from both sides.

Thus:
  lim(x→2) -3/(x - 2)² = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT DIFFERENCE: INFINITE LIMIT VS. LIMIT AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two topics may sound similar, but they are different.

Infinite Limit:
  An infinite limit examines what happens near a specific number.
  Example:
    lim(x→0) 1/x² = ∞
  Here, x is approaching 0.

Limit at Infinity:
  A limit at infinity examines what happens when x itself becomes extremely large.
  Example:
    lim(x→∞) 1/x = 0
  Here, x is growing without bound.

Therefore:
  Infinite limits and limits at infinity are different concepts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INFINITE LIMITS AND ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits often require one-sided limits because the behavior can be different on each side.

For example:
  f(x) = 1/(x - 1)

Approaching from the left:
  lim(x→1⁻) 1/(x - 1) = -∞

Approaching from the right:
  lim(x→1⁺) 1/(x - 1) = ∞

Since the two sides are different, the ordinary limit does not exist:
  lim(x→1) 1/(x - 1) does not exist

However, we can still identify a vertical asymptote at x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY INFINITE LIMITS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits help us understand situations where a function becomes extremely large near a particular point.

They are important for:
  • Identifying vertical asymptotes
  • Understanding rational functions
  • Analyzing discontinuities
  • Studying graph behavior
  • Understanding rates of growth
  • Preparing for advanced Calculus topics

Infinite limits also help us understand why some functions are not continuous.

For example, a function with a vertical asymptote cannot be continuous at the asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. STEPS FOR SOLVING INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an infinite limit, you can follow these steps:

Step 1: Identify the Point
  Determine the value that x is approaching.
  Example: x → 2

Step 2: Check the Denominator
  Determine whether the denominator approaches zero.
  For example: 1/(x - 2)
  At x = 2, the denominator becomes zero.

Step 3: Check Each Side
  Evaluate lim(x→2⁻) and lim(x→2⁺) separately.

Step 4: Analyze the Signs
  Determine whether the numerator and denominator are:
    • Positive
    • Negative
  This helps determine whether the function approaches ∞ or -∞.

Step 5: Identify the Vertical Asymptote
  If the function increases or decreases without bound near x = a, then x = a is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function                      Limit
  ───────────────────────────────────────────────────────────────────
  lim(x→0⁺) 1/x                  ∞
  lim(x→0⁻) 1/x                  -∞
  lim(x→0) 1/x²                  ∞
  lim(x→0) -1/x²                 -∞
  lim(x→2⁺) 1/(x - 2)            ∞
  lim(x→2⁻) 1/(x - 2)            -∞
  lim(x→2) 1/(x - 2)²            ∞
  lim(x→2) -1/(x - 2)²           -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An infinite limit occurs when a function increases or decreases without bound as x approaches a particular value.

The notation:
  lim(x→a) f(x) = ∞

means that f(x) becomes larger and larger without bound.

The notation:
  lim(x→a) f(x) = -∞

means that f(x) becomes more and more negative without bound.

Infinite limits are closely related to vertical asymptotes.

The most important idea to remember is:

  An infinite limit does not mean the function reaches infinity. It means 
  the function grows or decreases without bound as the input approaches 
  a particular value.

Infinite limits are essential for understanding rational functions, asymptotes, discontinuities, graph behavior, and more advanced topics in Calculus.
  `,
  examples: [
    "lim(x→0⁺) 1/x = ∞",
    "lim(x→0⁻) 1/x = -∞",
    "lim(x→0) 1/x² = ∞",
    "lim(x→0) -1/x² = -∞",
    "lim(x→2⁺) 1/(x-2) = ∞",
    "lim(x→2⁻) 1/(x-2) = -∞",
    "lim(x→2) 3/(x-2)² = ∞",
  ],
};

export default topic;