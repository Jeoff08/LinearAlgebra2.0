const topic = {
  id: "bounded-functions",
  title: "Bounded Functions",
  summary:
    "Definition of bounded above, bounded below, and bounded functions, graphical interpretation, bounded vs unbounded, and applications in calculus.",
  details: `
A bounded function is a function whose output values stay within a certain fixed range. In other words, the function does not grow infinitely large or infinitely small within the domain being considered.

Bounded functions are important in Calculus because they help us understand the behavior and limits of functions, especially when studying graphs, intervals, sequences, and integrals.

In simple terms: A function is bounded if its outputs cannot go beyond a certain upper or lower limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BOUNDED ABOVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is bounded above if there is a number M such that:

  f(x) ≤ M

for every x in the function's domain.

The number M is called an upper bound.

Example: f(x) = x² is not bounded above over all real numbers because x² can become arbitrarily large.

  • 10² = 100
  • 100² = 10,000
  • 1000² = 1,000,000

There is no fixed number that x² cannot exceed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BOUNDED BELOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is bounded below if there is a number m such that:

  f(x) ≥ m

for every x in its domain.

The number m is called a lower bound.

Consider: f(x) = x²

Since x² ≥ 0 for every real x, the function is bounded below by 0.

However, it is not bounded above.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BOUNDED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is bounded if it is bounded both above and below.

This means there are numbers m and M such that:

  m ≤ f(x) ≤ M

for every x in the domain.

In simple terms: Lower Bound ≤ Function ≤ Upper Bound

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE OF A BOUNDED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = sin(x)

The sine function always produces values between -1 and 1.

Therefore: -1 ≤ sin(x) ≤ 1 for every real number x.

Thus: sin(x) is bounded.

Its lower bound is -1 and its upper bound is 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A bounded function can be visualized as a graph that stays between two horizontal lines.

Example: Because -1 ≤ sin(x) ≤ 1, the graph of y = sin(x) always remains between y = -1 and y = 1.

The graph can continue infinitely in the horizontal direction, but its vertical values remain restricted.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: A FUNCTION BOUNDED ON AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not necessarily have to be bounded over all real numbers to be bounded on a particular interval.

Consider: f(x) = x²

Over all real numbers, it is not bounded above.

But suppose we restrict the domain to: 0 ≤ x ≤ 3

Then: 0 ≤ x² ≤ 9

Therefore: 0 ≤ f(x) ≤ 9 on the interval [0, 3].

So f(x) = x² is bounded on this interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 3x + 2 on the interval [1, 4]

At x = 1: f(1) = 3(1) + 2 = 5

At x = 4: f(4) = 3(4) + 2 = 14

Because the function is increasing: 5 ≤ f(x) ≤ 14 on the interval [1, 4]

Therefore, the function is bounded on this interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. BOUNDED VS. UNBOUNDED FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is useful to distinguish between bounded and unbounded functions.

Bounded
─────────

A bounded function stays within fixed limits.

Example: f(x) = sin(x) because -1 ≤ sin(x) ≤ 1

Unbounded
───────────

An unbounded function can grow beyond every fixed upper or lower limit.

Example: f(x) = x²

As x becomes larger: x² → ∞

Therefore, it is unbounded above over the real numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ABSOLUTE VALUE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

Over all real numbers: |x| ≥ 0

Therefore, it is bounded below by 0.

However, it can become arbitrarily large:
  • |100| = 100
  • |1000| = 1000

Therefore: |x| is not bounded above and consequently it is not bounded over all real numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RATIONAL FUNCTION EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/x

This function is not bounded above or below over its entire domain.

As x approaches 0 from the positive side: 1/x → +∞

As x approaches 0 from the negative side: 1/x → -∞

Therefore: 1/x is unbounded on its domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. BOUNDED FUNCTIONS AND MAXIMUM/MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A bounded function may have a maximum or minimum, but being bounded does not always guarantee that the function actually reaches those values.

Example: f(x) = x on the interval (0, 1)

The function is bounded: 0 < f(x) < 1

However, it never actually reaches 0 or 1 because the endpoints are not included.

Therefore, 0 and 1 are bounds, but the function has no absolute minimum or maximum on this open interval.

This distinction is important in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. BOUNDED FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bounded functions are useful when studying limits and integrals.

For example, if a function remains between two fixed values: m ≤ f(x) ≤ M, we know that its outputs cannot become arbitrarily large or small.

The idea of boundedness is also related to important Calculus concepts such as the Extreme Value Theorem, which states that a continuous function on a closed and bounded interval reaches both an absolute maximum and an absolute minimum.

Example: If f(x) is continuous on [a, b], then there are points where the function reaches its largest and smallest values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the temperature of a room is modeled by: T(t) = 25 + 3sin(t)

Since: -1 ≤ sin(t) ≤ 1

We have: -3 ≤ 3sin(t) ≤ 3

Adding 25: 22 ≤ 25 + 3sin(t) ≤ 28

Therefore: 22 ≤ T(t) ≤ 28

The temperature remains between 22°C and 28°C, so the function is bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Bounded Functions, remember:

  • Bounded Above: f(x) ≤ M
  • Bounded Below: f(x) ≥ m
  • Bounded: m ≤ f(x) ≤ M

A function is bounded when its output remains between a fixed lower bound and upper bound.

Example: -1 ≤ sin(x) ≤ 1 means that sin(x) is bounded.

The key idea to remember is:

  A bounded function has outputs that remain within fixed limits. A function can be bounded above, bounded below, or bounded in both directions. Understanding bounded functions is important in Calculus because it helps us analyze the behavior of functions and provides a foundation for concepts such as limits, continuity, maximum and minimum values, and the Extreme Value Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bounded Functions are important concepts in Mathematical analysis that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Bounded Above
  ✓ Bounded Below
  ✓ Bounded Functions
  ✓ Graphical Interpretation
  ✓ Bounded on an Interval
  ✓ Bounded vs Unbounded
  ✓ Absolute Value Example
  ✓ Rational Function Example
  ✓ Maximum and Minimum
  ✓ Bounded Functions in Calculus
  ✓ Extreme Value Theorem
  ✓ Real-World Applications
  `,
  examples: [
    "Identify sin(x) as bounded: -1 ≤ sin(x) ≤ 1",
    "Identify f(x) = x² as bounded below by 0: x² ≥ 0",
    "Identify f(x) = x² as not bounded above over all real numbers",
    "Show f(x) = x² is bounded on [0, 3]: 0 ≤ x² ≤ 9",
    "Show f(x) = 3x + 2 is bounded on [1, 4]: 5 ≤ f(x) ≤ 14",
    "Identify f(x) = 1/x as unbounded on its domain",
    "Identify f(x) = |x| as bounded below by 0 but not bounded above",
    "Show f(x) = x is bounded on (0,1) but has no max or min",
    "Use Extreme Value Theorem for continuous function on [a,b]",
    "Real-world: T(t) = 25 + 3sin(t) is bounded between 22°C and 28°C",
    "Show f(x) = cos(x) is bounded: -1 ≤ cos(x) ≤ 1",
    "Show f(x) = e^(-x) is bounded above by 1 and below by 0 for x ≥ 0",
  ],
};

export default topic;