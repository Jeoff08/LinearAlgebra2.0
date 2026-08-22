const topic = {
  id: "factoring-and-canceling",
  title: "Factoring and Canceling",
  summary:
    "Factoring techniques, canceling common factors, difference of squares, sum and difference of cubes, and evaluating limits with removable discontinuities.",
  details: `
Factoring and canceling is an important algebraic technique used to evaluate limits, especially when direct substitution produces the indeterminate form 0/0.

The main idea is to factor the expression, identify common factors, cancel them, and then evaluate the resulting simpler expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED FACTORING AND CANCELING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→2) (x² - 4)/(x - 2)

Try direct substitution: (4 - 4)/(2 - 2) = 0/0

This does not mean the answer is 0.

Instead, we need to simplify the expression.

Factor the numerator: x² - 4 = (x - 2)(x + 2)

Therefore: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2)

Cancel the common factor: x + 2

Now evaluate: 2 + 2 = 4

Therefore: lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter: lim(x→a) P(x)/Q(x)

and direct substitution gives 0/0, use these steps:

Step 1: Substitute
  Check whether you get 0/0.

Step 2: Factor
  Factor the numerator and denominator.

Step 3: Cancel
  Cancel common factors.

Step 4: Substitute Again
  Evaluate the simplified expression at x = a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIFFERENCE OF SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful factoring patterns is: a² - b² = (a - b)(a + b)

Example: Evaluate lim(x→3) (x² - 9)/(x - 3)

Factor: x² - 9 = (x - 3)(x + 3)

So: (x² - 9)/(x - 3) = (x - 3)(x + 3)/(x - 3)

Cancel: x + 3

Substitute: 3 + 3 = 6

Therefore: 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER DIFFERENCE OF SQUARES EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→5) (x² - 25)/(x - 5)

Factor: x² - 25 = (x - 5)(x + 5)

Therefore: (x² - 25)/(x - 5) = (x - 5)(x + 5)/(x - 5)

Cancel: x + 5

Substitute: 5 + 5 = 10

Thus: 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FACTORING TRINOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the numerator is a quadratic trinomial.

Consider: lim(x→2) (x² + x - 6)/(x - 2)

First, factor the numerator: x² + x - 6

We need two numbers whose product is -6 and whose sum is 1: 3, -2

Therefore: x² + x - 6 = (x + 3)(x - 2)

Now: (x² + x - 6)/(x - 2) = (x + 3)(x - 2)/(x - 2)

Cancel: x + 3

Substitute: 2 + 3 = 5

Therefore: 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WITH A DIFFERENT QUADRATIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→3) (x² - 5x + 6)/(x - 3)

Factor: x² - 5x + 6 = (x - 2)(x - 3)

Therefore: (x² - 5x + 6)/(x - 3) = (x - 2)(x - 3)/(x - 3)

Cancel: x - 2

Substitute: 3 - 2 = 1

Therefore: 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FACTORING OUT A COMMON FACTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you don't need a complicated factoring formula.

Consider: lim(x→0) (x² + 3x)/x

Factor x from the numerator: x² + 3x = x(x + 3)

Therefore: (x² + 3x)/x = x(x + 3)/x

Cancel: x + 3

Now substitute: 0 + 3 = 3

Thus: 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A HIGHER POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→1) (x³ - x)/(x - 1)

Factor the numerator: x³ - x = x(x² - 1)

Use difference of squares: x(x - 1)(x + 1)

Therefore: (x³ - x)/(x - 1) = x(x - 1)(x + 1)/(x - 1)

Cancel: x(x + 1)

Substitute: 1(1 + 1) = 2

Therefore: 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FACTORING CUBES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another useful set of formulas involves cubes.

Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)

Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)

These formulas can be useful when evaluating limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: DIFFERENCE OF CUBES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→2) (x³ - 8)/(x - 2)

Recognize: 8 = 2³

So: x³ - 8 = x³ - 2³

Using the difference of cubes formula:
  x³ - 2³ = (x - 2)(x² + 2x + 4)

Therefore: (x³ - 8)/(x - 2) = (x - 2)(x² + 2x + 4)/(x - 2)

Cancel: x² + 2x + 4

Substitute: 2² + 2(2) + 4 = 4 + 4 + 4 = 12

Therefore: 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: SUM OF CUBES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→−2) (x³ + 8)/(x + 2)

Recognize: 8 = 2³

So: x³ + 8 = x³ + 2³

Using the sum of cubes formula:
  x³ + 2³ = (x + 2)(x² - 2x + 4)

Therefore: (x³ + 8)/(x + 2) = (x + 2)(x² - 2x + 4)/(x + 2)

Cancel: x² - 2x + 4

Substitute: (−2)² - 2(−2) + 4 = 4 + 4 + 4 = 12

Therefore: 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY IS CANCELING ALLOWED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important concept.

Consider: (x - 2)(x + 3)/(x - 2)

We can cancel x - 2, giving: x + 3

But technically, the original expression is undefined at x = 2 because x - 2 = 0.

The cancellation does not mean the original function suddenly becomes defined at x = 2.

Instead, it means that for values near 2, but not equal to 2:
  (x - 2)(x + 3)/(x - 2) = x + 3

This is exactly why factoring and canceling is useful for limits.

A limit cares about what happens near the point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. HOLE CREATED BY CANCELLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² - 4)/(x - 2)

After factoring: f(x) = (x - 2)(x + 2)/(x - 2)

Cancel: f(x) = x + 2

But: x ≠ 2

So the graph behaves like y = x + 2, but has a hole at x = 2.

The corresponding point is: (2, 4)

This is called a removable discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FACTORING AND CANCELING VS. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution:
  Works when substitution produces a defined value.
  Example: lim(x→2) (x + 5) = 7 (simply substitute)

Factoring and canceling:
  Needed when substitution produces 0/0.
  Example: lim(x→2) (x² - 4)/(x - 2)
  Direct substitution: 0/0
  Factor: (x - 2)(x + 2)/(x - 2)
  Cancel: x + 2
  Then substitute: 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON FACTORING FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These formulas are especially useful for limits.

  • Difference of squares: a² - b² = (a - b)(a + b)
  • Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)
  • Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)
  • Common factor: ab + ac = a(b + c)
  • Basic trinomial: x² + (a + b)x + ab = (x + a)(x + b)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE COMBINING SEVERAL TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→1) (x³ - x² - x + 1)/(x - 1)

First, group terms: (x³ - x²) - (x - 1)

Factor each group: x²(x - 1) - (x - 1)

Factor out (x - 1): (x - 1)(x² - 1)

Therefore: (x³ - x² - x + 1)/(x - 1) = (x - 1)(x² - 1)/(x - 1)

Cancel: x² - 1

Now substitute: 1² - 1 = 0

Therefore: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. A STEP-BY-STEP STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a limit such as: lim(x→a) P(x)/Q(x)

use this strategy:

Step 1: Try direct substitution
  Calculate: P(a)/Q(a)

Step 2: Check the result
  If you get a normal number, you're done.
  If you get 0/0, continue.

Step 3: Factor
  Factor the numerator and denominator.

Step 4: Identify common factors
  Look for factors such as (x - a).

Step 5: Cancel
  Cancel the common factor.

Step 6: Substitute again
  Evaluate the simplified expression at x = a.

Step 7: Verify
  Make sure the resulting answer makes sense.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Treating 0/0 as zero
  Incorrect: 0/0 = 0
  Instead: 0/0 is indeterminate.

Mistake 2: Canceling terms instead of factors
  You cannot simply cancel individual terms.
  Example: (x + 2)/(x + 3) — You cannot cancel the x's.
  Cancellation works with common factors, not individual terms.

  Correct example: (x - 2)(x + 3)/(x - 2) — Here x - 2 is a factor, so it can be canceled.

Mistake 3: Forgetting to factor completely
  For x² - 9, don't stop at x² - 9.
  Recognize: x² - 9 = (x - 3)(x + 3)

Mistake 4: Substituting too early
  If you immediately substitute and get 0/0, don't stop.
  Factor first, cancel, and then substitute again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. PRACTICE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  lim(x→4) (x² - 16)/(x - 4)
  Factor: (x - 4)(x + 4)
  Cancel: x + 4
  Substitute: 4 + 4 = 8
  → 8

Example 2:
  lim(x→3) (x² - 6x + 9)/(x - 3)
  Factor: (x - 3)²
  Cancel one: x - 3
  Substitute: 3 - 3 = 0
  → 0

Example 3:
  lim(x→0) (x² + 5x)/x
  Factor: x(x + 5)
  Cancel: x + 5
  Substitute: 0 + 5 = 5
  → 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Factoring and Canceling, remember:

  • Factoring and canceling is used when direct substitution gives 0/0.
  • The process: Substitute → 0/0 → Factor → Cancel → Substitute Again.
  • Common factoring patterns: difference of squares, sum/difference of cubes.
  • Canceling is allowed because we are interested in values near the point.
  • A canceled factor creates a hole (removable discontinuity).

The key idea to remember is:

  Factoring and canceling is used primarily when direct substitution produces the indeterminate form 0/0. The general process is: Substitute → 0/0 → Factor → Cancel → Substitute Again. The most important factoring patterns to know are: a² - b² = (a - b)(a + b), a³ - b³ = (a - b)(a² + ab + b²), and a³ + b³ = (a + b)(a² - ab + b²). These techniques are fundamental for solving many Calculus limit problems, particularly limits involving removable discontinuities and holes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Factoring and Canceling is an essential algebraic technique for evaluating limits with indeterminate forms.

Key concepts covered:

  ✓ Why We Need Factoring and Canceling
  ✓ The Basic Process
  ✓ Difference of Squares
  ✓ Factoring Trinomials
  ✓ Common Factor
  ✓ Higher Powers
  ✓ Difference of Cubes
  ✓ Sum of Cubes
  ✓ Why Canceling Is Allowed
  ✓ Holes/Removable Discontinuities
  ✓ Common Factoring Formulas
  ✓ Step-by-Step Strategy
  ✓ Common Mistakes
  `,
  examples: [
    "Evaluate: lim(x→2) (x² - 4)/(x - 2) → 4",
    "Evaluate: lim(x→3) (x² - 9)/(x - 3) → 6",
    "Evaluate: lim(x→5) (x² - 25)/(x - 5) → 10",
    "Evaluate: lim(x→2) (x² + x - 6)/(x - 2) → 5",
    "Evaluate: lim(x→3) (x² - 5x + 6)/(x - 3) → 1",
    "Evaluate: lim(x→0) (x² + 3x)/x → 3",
    "Evaluate: lim(x→1) (x³ - x)/(x - 1) → 2",
    "Evaluate: lim(x→2) (x³ - 8)/(x - 2) → 12",
    "Evaluate: lim(x→−2) (x³ + 8)/(x + 2) → 12",
    "Evaluate: lim(x→1) (x³ - x² - x + 1)/(x - 1) → 0",
    "Evaluate: lim(x→4) (x² - 16)/(x - 4) → 8",
    "Evaluate: lim(x→3) (x² - 6x + 9)/(x - 3) → 0",
    "Evaluate: lim(x→0) (x² + 5x)/x → 5",
    "Identify: 0/0 is indeterminate",
    "Identify: hole at (2,4) from cancellation",
    "Use difference of squares: a² - b² = (a - b)(a + b)",
    "Use difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)",
    "Use sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)",
  ],
};

export default topic;