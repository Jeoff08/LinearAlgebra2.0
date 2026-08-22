const topic = {
  id: "infinite-limits",
  title: "Infinite Limits",
  summary:
    "Definition of infinite limits, positive and negative infinite limits, one-sided infinite limits, vertical asymptotes, and determining signs.",
  details: `
Infinite limits describe what happens to a function as the output values become extremely large or extremely negative when the input approaches a particular value.

In other words, instead of the function approaching a specific number, the function increases without bound toward +∞ or decreases without bound toward −∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have: f(x) = 1/x²

As x gets closer and closer to 0:
  • x = 1 → f(x) = 1
  • x = 0.1 → f(x) = 100
  • x = 0.01 → f(x) = 10,000

The values of f(x) become larger and larger.

Therefore: lim(x→0) 1/x² = +∞

This means that f(x) grows without bound as x approaches 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POSITIVE INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We write: lim(x→a) f(x) = +∞

when f(x) becomes arbitrarily large as x approaches a.

Example: lim(x→0) 1/x² = +∞

The function does not actually reach infinity. Infinity is not a real number here. It describes the function's behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. NEGATIVE INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We write: lim(x→a) f(x) = −∞

when f(x) becomes arbitrarily negative as x approaches a.

Example: lim(x→0) -1/x² = −∞

As x approaches 0:
  • -1/(0.1)² = -100
  • -1/(0.01)² = -10,000

The values continue decreasing without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ONE-SIDED INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits can behave differently from the left and right sides.

Consider: f(x) = 1/x

As x → 0⁺:
  • 1/0.1 = 10
  • 1/0.01 = 100

Therefore: lim(x→0⁺) 1/x = +∞

As x → 0⁻:
  • 1/(-0.1) = -10
  • 1/(-0.01) = -100

Therefore: lim(x→0⁻) 1/x = −∞

Since the two sides behave differently, the two-sided infinite limit does not have one common direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INFINITE LIMITS AND VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits are closely related to vertical asymptotes.

If lim(x→a) f(x) = +∞ or lim(x→a) f(x) = −∞, then x = a is a vertical asymptote of the function.

Example: f(x) = 1/(x - 2)

The denominator becomes zero when: x - 2 = 0 → x = 2

Therefore, x = 2 is a possible vertical asymptote.

Indeed:
  lim(x→2⁺) 1/(x - 2) = +∞
  lim(x→2⁻) 1/(x - 2) = −∞

Thus: x = 2 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO DETERMINE THE SIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions, you can determine whether the function approaches +∞ or −∞ by examining the signs of the numerator and denominator.

Consider: f(x) = 3/(x - 4)

Near x = 4:

From the right:
  If x → 4⁺, then x - 4 > 0, so 3/(x - 4) > 0
  Therefore: lim(x→4⁺) 3/(x - 4) = +∞

From the left:
  If x → 4⁻, then x - 4 < 0, so 3/(x - 4) < 0
  Therefore: lim(x→4⁻) 3/(x - 4) = −∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EVEN POWERS VS. ODD POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power of the factor approaching zero can affect the result.

Even power
────────────

Consider: 1/(x - 2)²

Because a squared quantity is positive: (x - 2)² > 0 on both sides of x = 2.

Therefore:
  lim(x→2⁻) 1/(x - 2)² = +∞
  lim(x→2⁺) 1/(x - 2)² = +∞

Odd power
───────────

Consider: 1/(x - 2)³

The sign changes depending on which side of 2 we approach.

Thus:
  lim(x→2⁻) 1/(x - 2)³ = −∞
  lim(x→2⁺) 1/(x - 2)³ = +∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: POLYNOMIAL OVER POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x + 1)/(x - 3)

At x = 3, the denominator is zero.

The numerator is: 3 + 1 = 4, which is positive.

From the left (x → 3⁻):
  x - 3 < 0, so (x + 1)/(x - 3) → −∞

Therefore: lim(x→3⁻) (x + 1)/(x - 3) = −∞

From the right (x → 3⁺):
  x - 3 > 0, so (x + 1)/(x - 3) → +∞

Therefore: lim(x→3⁺) (x + 1)/(x - 3) = +∞

Hence x = 3 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INFINITE LIMIT VS. LIMIT AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two concepts are different.

Infinite limit
───────────────

The input approaches a finite number, while the output becomes infinitely large:

  lim(x→2) 1/(x - 2)² = +∞

Here: x → 2 (finite)

Limit at infinity
──────────────────

The input becomes infinitely large, while we examine what happens to the output:

  lim(x→∞) 1/x = 0

Here: x → ∞

So remember:
  • Infinite Limit: x approaches a number, but f(x) approaches +∞ or −∞.
  • Limit at Infinity: x approaches +∞ or −∞, and we examine the behavior of f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On a graph, an infinite limit usually appears when the curve gets closer and closer to a vertical line while moving upward or downward without bound.

Example: f(x) = 1/x has a vertical asymptote at x = 0.

The graph rises toward +∞ on one side and falls toward −∞ on the other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function involving a denominator approaching zero:

  • Positive divided by positive zero (0⁺) → +∞
  • Positive divided by negative zero (0⁻) → −∞
  • Negative divided by positive zero (0⁺) → −∞
  • Negative divided by negative zero (0⁻) → +∞

The key is to determine the sign of the numerator and denominator on the side you're approaching from.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEPS FOR SOLVING INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an infinite-limit problem:

Step 1: Identify the value being approached.
  x → a

Step 2: Substitute a into the denominator.
  If the denominator becomes 0, an infinite limit may occur.

Step 3: Check the numerator.
  Determine whether it is positive or negative near a.

Step 4: Check the denominator from the left and/or right.
  Determine whether it approaches 0⁺ or 0⁻.

Step 5: Determine the sign of infinity.
  The result will usually be +∞ or −∞.

Step 6: Identify the vertical asymptote if appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→1⁺) 5/(x - 1)

Since x → 1⁺, we have: x - 1 → 0⁺

Therefore: 5/0⁺ = +∞

So: lim(x→1⁺) 5/(x - 1) = +∞

And the vertical asymptote is: x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH ONE-SIDED ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→2) -3/(x - 2)²

Since (x - 2)² > 0 on both sides of x = 2:

  lim(x→2⁻) -3/(x - 2)² = −∞
  lim(x→2⁺) -3/(x - 2)² = −∞

Therefore: lim(x→2) -3/(x - 2)² = −∞

The vertical asymptote is x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Infinite Limits, you should understand:

  • Definition of infinite limits
  • Positive infinite limits
  • Negative infinite limits
  • One-sided infinite limits
  • Vertical asymptotes
  • Determining signs
  • Even powers vs. odd powers
  • Rational functions
  • Infinite limit vs. limit at infinity
  • Graphical interpretation
  • Step-by-step problem solving
  • When infinite limits do not exist as a single direction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Infinite Limits, remember:

  • Infinite limits describe functions that grow without bound.
  • +∞ means the function grows positively without bound.
  • −∞ means the function grows negatively without bound.
  • One-sided analysis is often needed.
  • Vertical asymptotes occur at infinite limits.
  • Even powers produce the same sign on both sides.
  • Odd powers produce opposite signs on opposite sides.

The key idea to remember is:

  Infinite limits describe functions that grow without bound near a particular x-value. They are commonly associated with vertical asymptotes, and one-sided analysis is often necessary to determine whether the function approaches +∞ or −∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite Limits are essential concepts for understanding vertical asymptotes and the behavior of functions near points where they are undefined.

Key concepts covered:

  ✓ Basic Idea
  ✓ Positive Infinite Limits
  ✓ Negative Infinite Limits
  ✓ One-Sided Infinite Limits
  ✓ Vertical Asymptotes
  ✓ Determining the Sign
  ✓ Even Powers vs. Odd Powers
  ✓ Polynomial Over Polynomial
  ✓ Infinite Limit vs. Limit at Infinity
  ✓ Graphical Interpretation
  ✓ Important Rules
  ✓ Step-by-Step Problem Solving
  `,
  examples: [
    "Evaluate: lim(x→0) 1/x² → +∞",
    "Evaluate: lim(x→0) -1/x² → −∞",
    "Evaluate: lim(x→0⁺) 1/x → +∞",
    "Evaluate: lim(x→0⁻) 1/x → −∞",
    "Evaluate: lim(x→4⁺) 3/(x - 4) → +∞",
    "Evaluate: lim(x→4⁻) 3/(x - 4) → −∞",
    "Evaluate: lim(x→2) 1/(x - 2)² → +∞ (both sides)",
    "Evaluate: lim(x→2⁺) 1/(x - 2)³ → +∞",
    "Evaluate: lim(x→2⁻) 1/(x - 2)³ → −∞",
    "Evaluate: lim(x→3⁺) (x + 1)/(x - 3) → +∞",
    "Evaluate: lim(x→3⁻) (x + 1)/(x - 3) → −∞",
    "Evaluate: lim(x→1⁺) 5/(x - 1) → +∞",
    "Evaluate: lim(x→2) -3/(x - 2)² → −∞",
    "Identify vertical asymptote: x = 2",
    "Distinguish: infinite limit vs. limit at infinity",
  ],
};

export default topic;