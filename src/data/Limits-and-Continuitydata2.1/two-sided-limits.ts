const topic = {
  id: "two-sided-limits",
  title: "Two-Sided Limits",
  summary:
    "Definition of two-sided limits, relationship with one-sided limits, evaluating limits, continuity, and common mistakes.",
  details: `
A two-sided limit describes the value that a function approaches as x gets closer and closer to a particular number from both the left and the right.

The notation is:

  lim(x→a) f(x) = L

This means that as x approaches a from either direction, f(x) approaches L.

Two-sided limits are an important part of Calculus 1 because they are used to study continuity, derivatives, discontinuities, and asymptotic behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = x²

We want to find: lim(x→2) x²

As x approaches 2 from the left: lim(x→2⁻) x² = 4

As x approaches 2 from the right: lim(x→2⁺) x² = 4

Therefore: lim(x→2) x² = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TWO-SIDED LIMIT AND ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A two-sided limit is directly related to the left-hand and right-hand limits.

The two-sided limit exists when:

  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

If both equal L, then: lim(x→a) f(x) = L

In simple terms: Left = Right → Two-sided limit exists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE WHERE THE LIMIT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x + 3

Find: lim(x→2) f(x)

From the left: lim(x→2⁻) (x + 3) = 5

From the right: lim(x→2⁺) (x + 3) = 5

Since 5 = 5, the two-sided limit is: lim(x→2) (x + 3) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WHERE THE LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = { x + 1, if x < 2; x + 4, if x > 2 }

Find: lim(x→2) f(x)

From the left: lim(x→2⁻) (x + 1) = 3

From the right: lim(x→2⁺) (x + 4) = 6

Since 3 ≠ 6, we conclude: lim(x→2) f(x) does not exist.

This is an example of a jump discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating a two-sided limit from a graph, you should look at what happens to the graph as you approach x = a:

  • From the left: x → a⁻
  • From the right: x → a⁺

If both sides approach the same y-value: The two-sided limit exists

If they approach different y-values: The two-sided limit does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. OPEN CIRCLE DOES NOT AUTOMATICALLY MEAN DNE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a graph has an open circle at (3, 5) and the graph approaches 5 from both sides.

Then: lim(x→3) f(x) = 5

even if f(3) is undefined.

This demonstrates an important distinction:

  Limit ≠ Function Value

The limit describes what the function approaches, not necessarily what the function equals at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FUNCTION VALUE CAN BE DIFFERENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: lim(x→3) f(x) = 5 but f(3) = 8

Then both statements can be true.

The graph approaches 5 as x approaches 3, but the actual point at x = 3 is located at 8.

Therefore: lim(x→3) f(x) = 5 while f(3) = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EVALUATING TWO-SIDED LIMITS NUMERICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can use a table to investigate a two-sided limit.

Suppose: f(x) = x² + 1 and lim(x→2)

Use values from both sides:

  x from Left   f(x)     x from Right   f(x)
  ────────────────────────────────────────────
  1.9           4.61     2.1            5.41
  1.99          4.9601   2.01           5.0401
  1.999         4.996001 2.001          5.004001
  1.9999        4.9996   2.0001         5.0004

From both sides, the values approach: 5

Therefore: lim(x→2) (x² + 1) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EVALUATING TWO-SIDED LIMITS ALGEBRAICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first method is usually direct substitution.

Consider: lim(x→3) (x² + 2x)

Substitute: 3² + 2(3) = 9 + 6 = 15

Therefore: lim(x→3) (x² + 2x) = 15

If substitution produces 0/0, you need to simplify the expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH FACTORING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→2) (x² - 4)/(x - 2)

Direct substitution: (4 - 4)/(2 - 2) = 0/0

Factor: x² - 4 = (x - 2)(x + 2)

Therefore: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2)

Cancel: x + 2

Now substitute: 2 + 2 = 4

Thus: lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TWO-SIDED LIMITS AND CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two-sided limits are essential when determining whether a function is continuous.

A function f(x) is continuous at x = a when:

  lim(x→a) f(x) = f(a)

This requires the two-sided limit to exist.

More completely:

  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. TWO-SIDED LIMITS AND JUMP DISCONTINUITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = { 2, if x < 1; 5, if x > 1 }

From the left: lim(x→1⁻) f(x) = 2

From the right: lim(x→1⁺) f(x) = 5

Because 2 ≠ 5, the two-sided limit does not exist:

  lim(x→1) f(x) DNE

This creates a jump in the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INFINITE TWO-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also approach infinity as x approaches a number.

Example: f(x) = 1/x²

As x approaches 0 from either side: 1/x² → +∞

Therefore: lim(x→0) 1/x² = +∞

The graph has a vertical asymptote at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TWO-SIDED LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two-sided limits are normally discussed around a finite value a, but we can also study behavior toward positive and negative infinity separately.

Example: f(x) = 1/x²

As x → ∞, f(x) → 0

As x → -∞, f(x) → 0

Therefore: lim(x→±∞) 1/x² = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important rule for two-sided limits is:

  lim(x→a) f(x) = L

if and only if:

  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L

So always remember: Left side = Right side is the requirement for a two-sided limit to exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to find: lim(x→a) f(x)

use this process:

Step 1 — Identify a
  Find the value x is approaching.

Step 2 — Check the left
  Determine: lim(x→a⁻) f(x)

Step 3 — Check the right
  Determine: lim(x→a⁺) f(x)

Step 4 — Compare
  If L⁻ = L⁺, then lim(x→a) f(x) = L
  If L⁻ ≠ L⁺, then lim(x→a) f(x) DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Looking only at f(a)
  The limit is about what happens near a, not necessarily at a.

❌ Mistake 2: Checking only one side
  A two-sided limit requires both lim(x→a⁻) and lim(x→a⁺).

❌ Mistake 3: Assuming an open circle means DNE
  An open circle can still have a perfectly valid limit.

❌ Mistake 4: Assuming 0/0 = 0
  The form 0/0 is indeterminate and requires further analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Two-Sided Limits, you should understand:

  • Definition of a two-sided limit
  • Limit notation
  • Left-hand limits
  • Right-hand limits
  • Relationship between one-sided and two-sided limits
  • Conditions for a limit to exist
  • Limits that do not exist
  • Direct substitution
  • Algebraic evaluation
  • Numerical evaluation
  • Graphical evaluation
  • 0/0 indeterminate forms
  • Factoring
  • Rationalization
  • Piecewise functions
  • Jump discontinuities
  • Removable discontinuities
  • Infinite limits
  • Vertical asymptotes
  • Limits at infinity
  • Continuity
  • Limits and derivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Two-Sided Limits, remember:

  • A two-sided limit requires both left and right sides.
  • Left = Right → Limit exists.
  • Left ≠ Right → Limit does not exist (DNE).
  • The limit is not necessarily equal to the function value.
  • Open circles do not automatically mean DNE.
  • 0/0 means more work is needed.

The key idea to remember is:

  A two-sided limit describes the value a function approaches as x gets closer to a particular number from both the left and the right. The two-sided limit exists only when the left-hand and right-hand limits are equal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two-Sided Limits are fundamental concepts in Calculus that serve as the foundation for continuity and differentiability.

Key concepts covered:

  ✓ Definition of Two-Sided Limits
  ✓ Relationship with One-Sided Limits
  ✓ Limits That Exist
  ✓ Limits That Do Not Exist
  ✓ Graphical Interpretation
  ✓ Open Circles and Limits
  ✓ Function Value vs. Limit
  ✓ Numerical Evaluation
  ✓ Algebraic Evaluation
  ✓ Factoring
  ✓ Continuity
  ✓ Jump Discontinuities
  ✓ Infinite Limits
  ✓ Limits at Infinity
  ✓ Important Theorem
  ✓ Problem-Solving Strategy
  ✓ Common Mistakes
  `,
  examples: [
    "Evaluate: lim(x→2) x² → 4",
    "Evaluate: lim(x→2) (x + 3) → 5",
    "Determine: lim(x→2) f(x) for piecewise function {x+1 if x<2, x+4 if x>2} → DNE",
    "Evaluate: lim(x→3) (x² + 2x) → 15",
    "Evaluate: lim(x→2) (x² - 4)/(x - 2) → 4",
    "Determine: lim(x→1) f(x) for f(x) = {2 if x<1, 5 if x>1} → DNE",
    "Evaluate: lim(x→0) 1/x² → ∞",
    "Evaluate: lim(x→∞) 1/x² → 0",
    "Use theorem: lim(x→a) f(x) exists iff left = right",
    "Continuity condition: lim(x→a) f(x) = f(a)",
    "Identify jump discontinuity from different left and right limits",
    "Identify removable discontinuity from open circle",
    "Distinguish: lim(x→3) f(x) = 5 while f(3) = 8",
    "Use factoring to evaluate 0/0 form",
  ],
};

export default topic;