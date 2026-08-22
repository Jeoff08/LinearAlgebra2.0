const topic = {
  id: "vertical-asymptotes",
  title: "Vertical Asymptotes",
  summary:
    "Definition of vertical asymptotes, finding vertical asymptotes of rational functions, one-sided behavior, holes vs. asymptotes, and graphical interpretation.",
  details: `
A vertical asymptote is a vertical line that a function approaches as x gets closer and closer to a particular value.

It is written as: x = a

where a is the value that the input approaches.

Vertical asymptotes are closely related to infinite limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/x

When x gets close to 0, the function becomes extremely large or extremely negative.

From the right: lim(x→0⁺) 1/x = +∞

From the left: lim(x→0⁻) 1/x = −∞

Thus: x = 0 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical line: x = a is a vertical asymptote of f(x) if at least one of the following is true:

  lim(x→a⁻) f(x) = ±∞

or:

  lim(x→a⁺) f(x) = ±∞

In simpler terms: If the function's values become infinitely large or infinitely negative as x approaches a, then x = a is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING VERTICAL ASYMPTOTES OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function: f(x) = P(x)/Q(x)

vertical asymptotes usually occur where: Q(x) = 0

after simplifying the function.

Example: f(x) = 1/(x - 3)

Set the denominator equal to zero: x - 3 = 0

Therefore: x = 3 is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WITH A LINEAR DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 5/(x + 2)

Set the denominator equal to zero: x + 2 = 0 → x = -2

Therefore: x = -2 is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ONE-SIDED BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand what happens around a vertical asymptote, we often evaluate the function from both sides.

Consider: f(x) = 1/(x - 2)

From the left (x → 2⁻):
  x - 2 → 0⁻, so 1/(x - 2) → −∞
  Therefore: lim(x→2⁻) 1/(x - 2) = −∞

From the right (x → 2⁺):
  x - 2 → 0⁺, so 1/(x - 2) → +∞
  Therefore: lim(x→2⁺) 1/(x - 2) = +∞

Thus: x = 2 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EVEN POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/(x - 3)²

Because the denominator is squared, it is positive on both sides of x = 3.

Therefore:
  lim(x→3⁻) 1/(x - 3)² = +∞
  lim(x→3⁺) 1/(x - 3)² = +∞

So: x = 3 is a vertical asymptote.

The function approaches +∞ from both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ODD POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider: f(x) = 1/(x - 3)³

Because the power is odd, the sign changes across x = 3.

From the left: lim(x→3⁻) 1/(x - 3)³ = −∞

From the right: lim(x→3⁺) 1/(x - 3)³ = +∞

Therefore: x = 3 is still a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SIGN ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4/(x - 5)

The numerator is positive.

When x < 5: x - 5 < 0, so f(x) < 0
  Therefore: lim(x→5⁻) 4/(x - 5) = −∞

When x > 5: x - 5 > 0, so f(x) > 0
  Therefore: lim(x→5⁺) 4/(x - 5) = +∞

Thus: x = 5 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MULTIPLE VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have more than one vertical asymptote.

Consider: f(x) = 1/((x - 1)(x + 2))

Set the denominator equal to zero: (x - 1)(x + 2) = 0

Therefore: x = 1 or x = -2

So the function has two vertical asymptotes: x = 1 and x = -2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT: SIMPLIFY FIRST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every zero in the denominator produces a vertical asymptote.

Consider: f(x) = (x² - 4)/(x - 2)

Factor the numerator: x² - 4 = (x - 2)(x + 2)

Therefore: f(x) = (x - 2)(x + 2)/(x - 2)

Cancel: f(x) = x + 2

But remember: x ≠ 2

The original function is undefined at x = 2, but it does not have a vertical asymptote there.

Instead, it has a hole at x = 2.

The corresponding y-value would be: y = 2 + 2 = 4

So there is a removable discontinuity at (2, 4).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VERTICAL ASYMPTOTE VS. HOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Vertical asymptote
───────────────────

The function becomes infinitely large: lim(x→a) f(x) = ±∞

Example: f(x) = 1/(x - 2) → Vertical asymptote: x = 2

Hole
─────

The function approaches a finite value but is undefined at that point.

Example: f(x) = (x² - 4)/(x - 2) → Simplifies to x + 2, hole at (2, 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. VERTICAL ASYMPTOTES AND HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two are different.

Vertical asymptote
───────────────────

Written as: x = a

It describes what happens when: x → a

Example: x = 2

Horizontal asymptote
─────────────────────

Written as: y = L

It describes what happens when: x → ±∞

Example: y = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH BOTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (2x + 1)/(x - 3)

Vertical asymptote:
  Set the denominator equal to zero: x - 3 = 0
  Therefore: x = 3

Horizontal asymptote:
  Both numerator and denominator have degree 1.
  Leading coefficients: 2/1 = 2
  Therefore: y = 2

So the function has:
  • x = 3 as its vertical asymptote
  • y = 2 as its horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote looks like an invisible vertical wall that the graph approaches.

          |       /
          |      /
          |     /
          |    /
----------|----------------
          |  /
          | /
          |
         x = a

As x gets closer to a, the graph moves upward or downward without bound.

The line x = a is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. STEPS FOR FINDING VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Factor the function
  Factor both numerator and denominator when possible.

Step 2: Simplify
  Cancel common factors.

Step 3: Set the remaining denominator equal to zero.
  Q(x) = 0

Step 4: Solve for x.
  These values are candidates for vertical asymptotes.

Step 5: Check the limits.
  Verify that f(x) → +∞ or f(x) → −∞ from at least one side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the vertical asymptotes of: f(x) = (x + 1)/((x - 2)(x + 3))

Step 1: Set the denominator equal to zero
  (x - 2)(x + 3) = 0

Step 2: Solve
  x = 2 and x = -3

There are no common factors with the numerator.

Therefore: x = 2 and x = -3 are vertical asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Writing y = a
  Vertical asymptotes must be written as: x = a, not y = a.

Mistake 2: Assuming every denominator zero is an asymptote
  You must simplify first. A canceled factor produces a hole, not a vertical asymptote.

Mistake 3: Forgetting one-sided limits
  Sometimes lim(x→a⁻) f(x) and lim(x→a⁺) f(x) have different signs.
  This is completely normal for vertical asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. QUICK EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  f(x) = 1/(x - 4)
  Vertical asymptote: x = 4

Example 2:
  f(x) = 3/(x + 7)
  Vertical asymptote: x = -7

Example 3:
  f(x) = 1/(x - 2)²
  Vertical asymptote: x = 2

Example 4:
  f(x) = (x + 1)/((x - 1)(x + 5))
  Vertical asymptotes: x = 1, x = -5

Example 5:
  f(x) = (x² - 9)/(x - 3)
  Factor: (x - 3)(x + 3)/(x - 3)
  Simplify: x + 3
  Therefore, there is no vertical asymptote at x = 3. There is a hole at (3, 6).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Vertical Asymptotes, you should understand:

  • Definition of vertical asymptotes
  • Infinite limits
  • Rational functions
  • Finding vertical asymptotes
  • One-sided behavior
  • Even vs. odd powers
  • Sign analysis
  • Multiple vertical asymptotes
  • Simplifying first
  • Vertical asymptote vs. hole
  • Vertical vs. horizontal asymptotes
  • Graphical interpretation
  • Step-by-step process

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Vertical Asymptotes, remember:

  • A vertical asymptote is a vertical line the function approaches as x → a.
  • For rational functions, vertical asymptotes occur where the denominator is zero (after simplifying).
  • The function becomes infinitely large or infinitely negative near a vertical asymptote.
  • A canceled factor produces a hole, not a vertical asymptote.
  • Vertical asymptotes are written as x = a.

The key idea to remember is:

  A vertical asymptote is a vertical line x = a that a function approaches while its values become infinitely large or infinitely negative. The most important connection is: lim(x→a⁻) f(x) = ±∞ or lim(x→a⁺) f(x) = ±∞ → x = a is a vertical asymptote. For rational functions, factor and simplify first, then set the remaining denominator equal to zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vertical Asymptotes are essential concepts for understanding the behavior of functions near points where they are undefined.

Key concepts covered:

  ✓ Basic Idea
  ✓ Definition
  ✓ Finding Vertical Asymptotes
  ✓ One-Sided Behavior
  ✓ Even Powers
  ✓ Odd Powers
  ✓ Sign Analysis
  ✓ Multiple Vertical Asymptotes
  ✓ Simplify First
  ✓ Vertical Asymptote vs. Hole
  ✓ Vertical vs. Horizontal Asymptotes
  ✓ Graphical Interpretation
  ✓ Step-by-Step Process
  ✓ Common Mistakes
  `,
  examples: [
    "Find vertical asymptote of f(x) = 1/x → x = 0",
    "Find vertical asymptote of f(x) = 1/(x - 3) → x = 3",
    "Find vertical asymptote of f(x) = 5/(x + 2) → x = -2",
    "Find vertical asymptote of f(x) = 1/(x - 2)² → x = 2",
    "Find vertical asymptote of f(x) = 1/(x - 3)³ → x = 3",
    "Find vertical asymptote of f(x) = 4/(x - 5) → x = 5",
    "Find vertical asymptotes of f(x) = 1/((x-1)(x+2)) → x = 1, x = -2",
    "Find vertical asymptotes of f(x) = (x+1)/((x-2)(x+3)) → x = 2, x = -3",
    "Identify hole: f(x) = (x²-4)/(x-2) → hole at (2,4)",
    "Identify vertical asymptote: x = 2",
    "Identify horizontal asymptote: y = 2",
    "Distinguish: vertical vs. horizontal asymptotes",
    "Determine if denominator zero creates hole or asymptote",
    "Find vertical asymptote of f(x) = 1/(x - 4) → x = 4",
    "Find vertical asymptote of f(x) = 3/(x + 7) → x = -7",
  ],
};

export default topic;