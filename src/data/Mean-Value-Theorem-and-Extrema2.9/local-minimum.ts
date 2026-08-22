const topic = {
  id: "local-minimum",
  title: "Local Minimum",
  summary:
    "Definition of local minimum, first and second derivative tests, critical numbers, and applications.",
  details: `
A local minimum is a point on a function where the function has a smaller value than all nearby points.

In simple terms, the graph goes down, reaches a low point, and then goes up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function f(x).

A point x = c is a local minimum if f(c) ≤ f(x) for all x sufficiently close to c.

The point on the graph is (c, f(c)) and is called a local minimum point.

Example: Consider f(x) = x²

The graph is a parabola.

At x = 0, the function reaches its lowest nearby value: f(0) = 0

Therefore, (0, 0) is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LOCAL MINIMUM VS. ABSOLUTE MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two ideas are related but not the same.

Local minimum: A local minimum is the lowest point within a neighborhood.

Absolute minimum: An absolute minimum is the lowest point over the entire domain.

A function can have multiple local minima, but it may have only one absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LOCAL MINIMUM AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative tells us whether a function is increasing or decreasing.

For a typical local minimum: decreasing → increasing

That means: f'(x) < 0 before the minimum, and f'(x) > 0 after the minimum.

Therefore: f'(x): - → + is the important derivative pattern for a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find possible local minima, we first find the critical numbers.

A number c is a critical number if: f'(c) = 0 or f'(c) does not exist, provided that c is in the domain of f.

Example: Find the critical numbers of f(x) = x² - 4x + 3

First differentiate: f'(x) = 2x - 4

Set the derivative equal to zero: 2x - 4 = 0 → x = 2

So the critical number is x = 2.

Now determine whether it is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is one of the easiest ways to identify local minima.

For a critical number c:

Local minimum: If f'(x) < 0 before c, and f'(x) > 0 after c, then x = c is a local minimum.

In other words: - → + = Local Minimum

Local maximum: For comparison: + → - = Local Maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE USING THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x² - 4x + 3

Step 1: Find the derivative: f'(x) = 2x - 4

Step 2: Find the critical number: 2x - 4 = 0 → x = 2

Step 3: Test values around x = 2

Choose a value less than 2, such as x = 1: f'(1) = 2(1) - 4 = -2 → decreasing.

Now choose x = 3: f'(3) = 2(3) - 4 = 2 → increasing.

Therefore: - → + which means x = 2 is a local minimum.

Step 4: Find the y-coordinate: f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1

Therefore: (2, -1) is the local minimum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is another useful method called the Second Derivative Test.

Suppose f'(c) = 0

Then calculate f''(c)

If f''(c) > 0, then f has a local minimum at x = c.

If f''(c) < 0, then f has a local maximum.

If f''(c) = 0, the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE USING THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 4x + 3

First derivative: f'(x) = 2x - 4

Set equal to zero: 2x - 4 = 0 → x = 2

Now find the second derivative: f''(x) = 2

Evaluate at x = 2: f''(2) = 2

Since 2 > 0, we conclude: x = 2 is a local minimum.

And as we found earlier: f(2) = -1

Therefore: (2, -1) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY DOES f''(x) > 0 MEAN A MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative describes concavity.

If f''(x) > 0, the graph is concave up.

It looks roughly like a valley.

A concave-up graph naturally forms a valley.

Therefore: f''(c) > 0 ⇒ local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LOCAL MINIMUM DOES NOT ALWAYS REQUIRE f'(c) = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important detail: A local minimum can occur where the derivative does not exist.

Example: f(x) = |x|

At x = 0, the graph has a sharp corner.

The derivative does not exist at x = 0, but x = 0 is still a local minimum.

Therefore, when finding possible local extrema, check both: f'(x) = 0 and f'(x) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LOCAL MINIMUM CAN OCCUR AT A CORNER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

For x < 0, f'(x) = -1

For x > 0, f'(x) = 1

So the derivative changes: - → +

Even though f'(0) does not exist, the First Derivative Test tells us: x = 0 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A FUNCTION CAN HAVE MULTIPLE LOCAL MINIMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function doesn't have to have just one local minimum.

For example, a wavy function can have multiple valleys.

Each valley can represent a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LOCAL MINIMUM AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship can be summarized as: Critical Number → Possible Local Minimum.

But not every critical number is a local minimum.

If f'(x): + → -, then it is a local maximum.

If f'(x): - → +, then it is a local minimum.

If f'(x): + → + or - → -, then there is no local extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Situation: f'(x): - → +
Result: Local Minimum

Situation: f'(x): + → -
Result: Local Maximum

Situation: f'(x): + → +
Result: Neither

Situation: f'(x): - → -
Result: Neither

Situation: f'(c) = 0, f''(c) > 0
Result: Local Minimum

Situation: f'(c) = 0, f''(c) < 0
Result: Local Maximum

Situation: f''(c) = 0
Result: Test inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. GENERAL PROCEDURE FOR FINDING A LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given a function f(x):

Step 1 — Find the derivative: f'(x)

Step 2 — Find critical numbers:
  Solve f'(x) = 0 and find where f'(x) does not exist.

Step 3 — Determine what happens around each critical number:
  Use either:
    • First Derivative Test: - → + ⇒ Local Minimum
    • Second Derivative Test: f''(c) > 0 ⇒ Local Minimum

Step 4 — Find the function value: Calculate f(c)

Step 5 — State the point: The local minimum point is (c, f(c))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Local Minimum, remember:

  • The most important pattern is: Decreasing → Increasing.
  • Using derivatives: - → +
  • That is the signature of a local minimum.
  • With the second derivative: f''(c) > 0 ⇒ Local Minimum.

Think of a local minimum as a valley in the graph: the function comes down, reaches the bottom, and then goes back up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Local Minimum is a fundamental concept for analyzing the behavior of functions and solving optimization problems.

Key concepts covered:

  ✓ Definition of Local Minimum
  ✓ Local vs. Absolute Minimum
  ✓ Derivatives and Local Minima
  ✓ First Derivative Test
  ✓ Second Derivative Test
  ✓ Critical Numbers
  ✓ Sign Changes (- → +)
  ✓ Concavity (f''(c) > 0)
  ✓ Points Where Derivative Does Not Exist
  ✓ Multiple Local Minima
  ✓ General Procedure
  `,
  examples: [
    "f(x) = x² → local minimum at (0, 0)",
    "f(x) = x² - 4x + 3 → local minimum at (2, -1)",
    "f(x) = |x| → local minimum at x = 0 (derivative DNE)",
    "First Derivative Test: - → + means local minimum",
    "Second Derivative Test: f'(c) = 0, f''(c) > 0 → local minimum",
    "Local minimum: lower than nearby values",
    "Absolute minimum: lowest overall",
    "Critical number ≠ automatically minimum",
    "f(x) = x³ → x = 0 is critical but not min/max",
    "Multiple local minima possible",
    "Decreasing → Increasing is the signature of a local minimum",
    "Valley = local minimum",
    "f''(x) > 0 → concave up → valley → local minimum",
  ],
};

export default topic;