const topic = {
  id: "one-sided-limits",
  title: "One-Sided Limits",
  summary:
    "Left-hand limits, right-hand limits, two-sided limits, piecewise functions, discontinuities, and infinite limits.",
  details: `
A one-sided limit examines what value a function approaches as x gets closer to a particular number from only one direction.

There are two types: Left-hand limit and Right-hand limit.

One-sided limits are important for understanding piecewise functions, discontinuities, jumps, asymptotes, and whether a two-sided limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A left-hand limit looks at what happens as x approaches a from values less than a.

It is written: lim(x→a⁻) f(x)

The symbol a⁻ means that x approaches a from the left.

Example: Suppose f(x) = x + 2 and we want lim(x→3⁻) f(x)

Choose values slightly smaller than 3: 2.9, 2.99, 2.999

The function values approach: 5

Therefore: lim(x→3⁻) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A right-hand limit looks at what happens as x approaches a from values greater than a.

It is written: lim(x→a⁺) f(x)

The symbol a⁺ means that x approaches a from the right.

For f(x) = x + 2, we can evaluate lim(x→3⁺) (x + 2)

Using values slightly greater than 3: 3.1, 3.01, 3.001

the function values approach: 5

Therefore: lim(x→3⁺) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LEFT VS. RIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to remember them is:

  lim(x→a⁻) means from the LEFT
  lim(x→a⁺) means from the RIGHT

Example: For lim(x→2):
  • From the left: 1.9, 1.99, 1.999
  • From the right: 2.1, 2.01, 2.001

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. TWO-SIDED LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A regular limit: lim(x→a) f(x)

exists only when the left-hand and right-hand limits are equal.

Therefore: lim(x→a) f(x) exists if lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

Example:
  lim(x→2⁻) f(x) = 4
  lim(x→2⁺) f(x) = 4

Therefore: lim(x→2) f(x) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHEN THE TWO-SIDED LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→2⁻) f(x) = 3
  lim(x→2⁺) f(x) = 5

Since 3 ≠ 5, the two-sided limit does not exist:

  lim(x→2) f(x) DNE

DNE means Does Not Exist.

This commonly happens with jump discontinuities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GRAPHICAL UNDERSTANDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function with different behavior on each side of x = 2:

  f(x) = { x + 1, if x < 2; x + 3, if x > 2 }

From the left: lim(x→2⁻) f(x) = 3

From the right: lim(x→2⁺) f(x) = 5

Because 3 ≠ 5, we have: lim(x→2) f(x) DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ONE-SIDED LIMITS AND PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One-sided limits are particularly useful for piecewise functions.

Consider: f(x) = { x², if x < 1; 2x + 1, if x ≥ 1 }

To investigate the behavior at x = 1, calculate each side separately.

Left-hand limit
────────────────

Use x² because x < 1:

  lim(x→1⁻) x² = 1

Right-hand limit
─────────────────

Use 2x + 1 because x ≥ 1:

  lim(x→1⁺) (2x + 1) = 3

Since 1 ≠ 3, the two-sided limit does not exist:

  lim(x→1) f(x) DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ONE-SIDED LIMITS AND CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function to be continuous at x = a, the left and right limits must agree with the function value.

We need: lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

If the left and right limits are different, the function has a jump discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INFINITE ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One-sided limits are also important when studying vertical asymptotes.

Consider: f(x) = 1/x

As x approaches 0 from the left:

  lim(x→0⁻) 1/x = -∞

As x approaches 0 from the right:

  lim(x→0⁺) 1/x = ∞

Since the two sides behave differently: lim(x→0) 1/x DNE

The graph has a vertical asymptote at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. NUMERICAL EVALUATION OF ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can also evaluate one-sided limits using tables.

For lim(x→2⁻) f(x):
  use values such as: 1.9, 1.99, 1.999, 1.9999

For lim(x→2⁺) f(x):
  use: 2.1, 2.01, 2.001, 2.0001

Then observe what the function values approach.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH A HOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² - 4)/(x - 2)

Simplifying: f(x) = x + 2, x ≠ 2

Therefore:
  lim(x→2⁻) f(x) = 4
  lim(x→2⁺) f(x) = 4

Since both sides approach the same value:

  lim(x→2) f(x) = 4

Even though f(2) is undefined, the two-sided limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A two-sided limit exists if and only if both one-sided limits exist and are equal:

  lim(x→a) f(x) = L ⟺ lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L

This is one of the most important facts about one-sided limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. QUICK PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see: lim(x→a⁻) f(x)
  Remember: Approach from the LEFT.

When you see: lim(x→a⁺) f(x)
  Remember: Approach from the RIGHT.

When you see: lim(x→a) f(x)
  Check both sides.

Quick rule:
  Left = Right → Two-sided limit exists
  Left ≠ Right → Two-sided limit DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For One-Sided Limits, you should understand:

  • Definition of one-sided limits
  • Left-hand limits
  • Right-hand limits
  • Two-sided limits
  • lim(x→a⁻)
  • lim(x→a⁺)
  • Evaluating one-sided limits numerically
  • Evaluating one-sided limits graphically
  • Evaluating one-sided limits algebraically
  • Piecewise functions
  • Jump discontinuities
  • Removable discontinuities
  • Infinite one-sided limits
  • Vertical asymptotes
  • One-sided limits and continuity
  • Comparing left and right limits
  • Determining when a limit does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying One-Sided Limits, remember:

  • The left-hand limit approaches from smaller x-values.
  • The right-hand limit approaches from larger x-values.
  • A two-sided limit exists only when both one-sided limits are equal.
  • One-sided limits are essential for piecewise functions.
  • Jump discontinuities occur when left and right limits differ.

The key idea to remember is:

  A one-sided limit examines the behavior of a function as x approaches a particular value from only one direction. The left-hand limit approaches from smaller x-values, while the right-hand limit approaches from larger x-values. A two-sided limit exists only when both one-sided limits approach the same value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One-Sided Limits are essential concepts for understanding the behavior of functions at specific points and serve as a foundation for continuity and differentiability.

Key concepts covered:

  ✓ Left-Hand Limits
  ✓ Right-Hand Limits
  ✓ Two-Sided Limits
  ✓ Left vs. Right
  ✓ Limits That Exist
  ✓ Limits That Do Not Exist
  ✓ Piecewise Functions
  ✓ Continuity
  ✓ Infinite One-Sided Limits
  ✓ Vertical Asymptotes
  ✓ Numerical Evaluation
  ✓ Graphical Understanding
  ✓ Important Theorem
  `,
  examples: [
    "Evaluate: lim(x→3⁻) (x + 2) → 5",
    "Evaluate: lim(x→3⁺) (x + 2) → 5",
    "Determine if limit exists: lim(x→2⁻) f(x)=3, lim(x→2⁺) f(x)=5 → DNE",
    "Evaluate piecewise: lim(x→1⁻) f(x) for {x² if x<1, 2x+1 if x≥1} → 1",
    "Evaluate piecewise: lim(x→1⁺) f(x) for {x² if x<1, 2x+1 if x≥1} → 3",
    "Evaluate: lim(x→0⁻) 1/x = -∞",
    "Evaluate: lim(x→0⁺) 1/x = ∞",
    "Evaluate: lim(x→2⁻) (x² - 4)/(x - 2) → 4",
    "Evaluate: lim(x→2⁺) (x² - 4)/(x - 2) → 4",
    "Determine: lim(x→2) (x² - 4)/(x - 2) → 4 (exists)",
    "Use theorem: lim(x→a) f(x) exists iff left = right",
    "Identify jump discontinuity from one-sided limits",
    "Identify vertical asymptote from infinite one-sided limits",
    "Continuity condition: left = right = f(a)",
  ],
};

export default topic;