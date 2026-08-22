const topic = {
  id: "absolute-minimum",
  title: "Absolute Minimum",
  summary:
    "Definition of absolute minimum, closed interval method, extreme value theorem, and comparison with local minimum.",
  details: `
An absolute minimum is the smallest value of a function over its entire domain or over a specified interval.

In simple terms, it is the lowest point on the entire graph within the domain being considered.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) is defined on a domain D.

A function has an absolute minimum at x = c if f(c) ≤ f(x) for every x in the domain.

The point (c, f(c)) is called the absolute minimum point, while f(c) is the absolute minimum value.

Example: Consider f(x) = x²

The graph is a U-shaped parabola.

Its lowest point is: (0, 0)

Therefore: f(0) = 0 is the absolute minimum value, and (0, 0) is the absolute minimum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ABSOLUTE MINIMUM VS. LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are very similar, but there is an important difference.

Local Minimum: A local minimum is the lowest point nearby.

Absolute Minimum: An absolute minimum is the lowest point over the entire domain.

There can be several local minima, but only the lowest one is the absolute minimum.

Therefore: Local Minimum = lowest nearby, Absolute Minimum = lowest overall.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING AN ABSOLUTE MINIMUM ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to find the absolute minimum of f(x) on the closed interval: [a, b]

We use the Closed Interval Method.

The process is:
  • Find f'(x)
  • Find all critical numbers
  • Keep the critical numbers inside [a, b]
  • Evaluate the function at every critical number
  • Evaluate the function at both endpoints
  • Compare all values
  • The smallest value is the absolute minimum

In short: Critical Numbers + Endpoints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute minimum of f(x) = x² - 4x + 5 on [0, 5]

Step 1: Find the derivative: f'(x) = 2x - 4

Step 2: Find the critical number: Set f'(x) = 0 → 2x - 4 = 0 → x = 2

So x = 2 is the critical number.

Step 3: Identify all candidates
  We have the endpoints: x = 0 and x = 5
  plus the critical number: x = 2

Therefore: x = 0, 2, 5 must be checked.

Step 4: Evaluate the function

At x = 0: f(0) = 0² - 4(0) + 5 = 5

At x = 2: f(2) = 2² - 4(2) + 5 = 4 - 8 + 5 = 1

At x = 5: f(5) = 5² - 4(5) + 5 = 25 - 20 + 5 = 10

Step 5: Compare the values
  x = 0 → f(x) = 5
  x = 2 → f(x) = 1
  x = 5 → f(x) = 10

The smallest value is: 1

Therefore: Absolute Minimum = 1 and it occurs at x = 2.

The absolute minimum point is: (2, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE CHECK THE ENDPOINTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is extremely important.

An absolute minimum does not necessarily occur at a critical number.

Example: f(x) = x on [0, 5]

The derivative is: f'(x) = 1

There are no critical numbers because f'(x) ≠ 0

But the function is increasing throughout the interval.

Therefore, the lowest point occurs at the left endpoint: x = 0

Since f(0) = 0, we have: Absolute Minimum = 0 at (0, 0)

This shows why endpoints must be checked.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ABSOLUTE MINIMUM CAN OCCUR AT AN ENDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² on [2, 5]

The critical number of x² is: x = 0

But 0 is not inside the interval [2, 5].

So we only check: x = 2 and x = 5

Evaluate: f(2) = 4, f(5) = 25

The smallest value is: 4

Therefore: (2, 4) is the absolute minimum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ABSOLUTE MINIMUM AND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number is a candidate for an absolute minimum.

It does not automatically mean that it is an absolute minimum.

Example: f(x) = -x²

The derivative is: f'(x) = -2x

Set it equal to zero: -2x = 0 → x = 0

So x = 0 is a critical number.

But f(0) = 0 and the graph opens downward. So x = 0 is actually a maximum, not a minimum.

Thus: Critical Number ≠ Automatically Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. USING THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test can help determine whether a critical number is a local minimum.

If the derivative changes from: - → +

then the function changes from: decreasing → increasing

Therefore: - → + = Local Minimum

Example: f(x) = x²

f'(x) = 2x

Before x = 0: f'(x) < 0

After x = 0: f'(x) > 0

Therefore: - → + and x = 0 is a local minimum.

Since x = 0 is also the lowest point over the entire domain: x = 0 is also an absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test can also identify a minimum.

If f'(c) = 0 and f''(c) > 0, then x = c is a local minimum.

Example: Consider f(x) = x² - 4x + 5

We already found: f'(x) = 2x - 4 and x = 2 is a critical number.

Now calculate the second derivative: f''(x) = 2

Therefore: f''(2) = 2 > 0

So x = 2 is a local minimum.

Because it is also the smallest value among the candidates on [0, 5], it is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY DOES f''(x) > 0 INDICATE A MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When f''(x) > 0, the graph is concave upward.

It looks like a valley.

Therefore: f''(c) > 0 ⇒ minimum.

On the other hand: f''(c) < 0 means the graph is concave downward, which indicates a maximum.

So: f''(c) < 0 ⇒ maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. A FUNCTION CAN HAVE MULTIPLE LOCAL MINIMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have several local minima.

Both valleys can be local minima.

But if one valley is lower than the other, then the lowest one is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ABSOLUTE MINIMUM DOES NOT ALWAYS EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not necessarily have an absolute minimum.

Example: f(x) = eˣ on (-∞, ∞)

The function gets closer and closer to zero as x becomes very negative: eˣ → 0

But it never actually reaches zero.

Therefore: No absolute minimum exists because there is no x such that eˣ = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem (EVT) provides an important guarantee.

If f is continuous and defined on a closed interval [a, b], then f must have both an absolute maximum and an absolute minimum.

Mathematically: f continuous on [a, b] ⇒ f has an absolute minimum and maximum.

Example: f(x) = x² + 1 is continuous on [0, 5]

Therefore, it is guaranteed to have an absolute minimum and maximum on that interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute minimum of: f(x) = -x² + 6x + 2 on [0, 5]

Derivative: f'(x) = -2x + 6

Set equal to zero: -2x + 6 = 0 → x = 3

Candidates: x = 0, 3, 5

Evaluate:
  f(0) = 2
  f(3) = 11
  f(5) = 7

Compare: 2, 11, 7

The smallest value is: 2

Therefore: Absolute Minimum = 2 at x = 0.

The absolute minimum point is: (0, 2)

Notice that the absolute minimum occurred at an endpoint, not at the critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ABSOLUTE MINIMUM VS. LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Lowest nearby?
Local Minimum: Yes
Absolute Minimum: Yes

Feature: Lowest over entire domain?
Local Minimum: Not necessarily
Absolute Minimum: Yes

Feature: Can occur at an endpoint?
Local Minimum: Not under the usual interior definition
Absolute Minimum: Yes

Feature: Requires f'(x) = 0?
Local Minimum: Not always
Absolute Minimum: No

Feature: Can occur at a corner?
Local Minimum: Yes
Absolute Minimum: Yes

Feature: Main idea
Local Minimum: Nearby valley
Absolute Minimum: Lowest valley overall

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First Derivative Test: - → + = Local Minimum

Second Derivative Test: f''(c) > 0 = Local Minimum

Absolute Minimum on a Closed Interval: Critical Numbers + Endpoints

Then: Smallest function value = Absolute Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked: Find the absolute minimum of f(x) on [a, b]

Use this procedure:

Step 1: Differentiate: f'(x)

Step 2: Find critical numbers: Solve f'(x) = 0 and find where f'(x) is undefined.

Step 3: Check the interval: Only keep critical numbers satisfying a ≤ c ≤ b

Step 4: Make a candidate list: Include a, c₁, c₂, ..., b

Step 5: Evaluate: Calculate f(a), f(c₁), f(c₂), ..., f(b)

Step 6: Compare: The smallest value is the Absolute Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Absolute Minimum, remember:

  • Think of an absolute minimum as the lowest point on the entire graph.
  • For a closed interval: Find critical numbers, check BOTH endpoints, evaluate all candidates, then choose the smallest value.
  • Local Minimum = lowest nearby, Absolute Minimum = lowest everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute Minimum is a fundamental concept for finding the lowest value of a function over its entire domain.

Key concepts covered:

  ✓ Definition of Absolute Minimum
  ✓ Absolute vs. Local Minimum
  ✓ Closed Interval Method
  ✓ Endpoints
  ✓ Critical Numbers
  ✓ First Derivative Test
  ✓ Second Derivative Test
  ✓ Extreme Value Theorem
  ✓ Multiple Local Minima
  ✓ Functions Without Absolute Minima
  ✓ Visual Interpretation
  ✓ Problem-Solving Process
  `,
  examples: [
    "f(x) = x² → absolute minimum at (0, 0)",
    "f(x) = x² - 4x + 5 on [0,5] → absolute minimum at (2, 1)",
    "f(x) = x on [0,5] → absolute minimum at (0, 0)",
    "f(x) = x² on [2,5] → absolute minimum at (2, 4)",
    "f(x) = -x² → x=0 is critical but maximum, not minimum",
    "f(x) = -x² + 6x + 2 on [0,5] → absolute minimum at (0, 2)",
    "First Derivative Test: - → + means local minimum",
    "Second Derivative Test: f''(c) > 0 means local minimum",
    "Extreme Value Theorem: continuous on closed interval → has absolute min and max",
    "Local min: nearby valley; Absolute min: lowest overall",
    "f(x) = eˣ on (-∞,∞) → no absolute minimum",
    "Critical number ≠ automatically minimum",
    "Absolute minimum can occur at endpoint",
    "Check endpoints on closed interval",
  ],
};

export default topic;