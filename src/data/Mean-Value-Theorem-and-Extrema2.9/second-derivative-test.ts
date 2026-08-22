const topic = {
  id: "second-derivative-test",
  title: "Second Derivative Test",
  summary:
    "Definition of the Second Derivative Test, concavity, local maxima and minima, and inconclusive cases.",
  details: `
The Second Derivative Test is a method in Calculus used to determine whether a critical point is a local maximum, local minimum, or whether the test is inconclusive.

It uses the second derivative: f''(x).

The main idea is: Once you find a critical number where f'(c) = 0, use f''(c) to determine the concavity of the graph at that point.

The three rules to remember are:
  • f''(c) > 0 → Local Minimum
  • f''(c) < 0 → Local Maximum
  • f''(c) = 0 → Test is Inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS THE SECOND DERIVATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first derivative is: f'(x) and tells us about the slope of the function.

The second derivative is: f''(x) and tells us how the slope is changing.

In other words: f''(x) = rate of change of the slope.

The second derivative is also closely related to concavity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two main types of concavity.

Concave Up: If f''(x) > 0, the graph is concave up. It looks approximately like a cup.

A concave-up graph has a shape similar to a cup. This is the typical shape of a Local Minimum.

Concave Down: If f''(x) < 0, the graph is concave down. It looks approximately like an upside-down cup.

A concave-down graph has a shape similar to an upside-down cup. This is the typical shape of a Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE THREE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test is based on three rules.

Suppose c is a critical number such that: f'(c) = 0

Rule 1 — f''(c) > 0: If f''(c) > 0, then the graph is concave up. Therefore: Local Minimum.

Rule 2 — f''(c) < 0: If f''(c) < 0, then the graph is concave down. Therefore: Local Maximum.

Rule 3 — f''(c) = 0: If f''(c) = 0, the Second Derivative Test is Inconclusive. This means you cannot determine whether the point is a maximum or minimum using this test. You may need the First Derivative Test instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE FORMULA TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f'(c) = 0, then:
  • f''(c) > 0 → Local Minimum
  • f''(c) < 0 → Local Maximum
  • f''(c) = 0 → Inconclusive

This is probably the most important formula for this topic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES f''(c) > 0 MEAN MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f''(c) > 0. This means the graph is concave up near c.

A concave-up graph looks like a cup. The graph decreases toward c, reaches a low point, and then increases.

Therefore: Local Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES f''(c) < 0 MEAN MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f''(c) < 0. The graph is concave down.

It looks like an upside-down cup. The graph increases toward c, reaches a high point, and then decreases.

Therefore: Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1 — LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 4x + 3

Find the local extrema using the Second Derivative Test.

Step 1: Find the First Derivative: f'(x) = 2x - 4

Step 2: Find the Critical Number: Set f'(x) = 0 → 2x - 4 = 0 → x = 2

Therefore: c = 2

Step 3: Find the Second Derivative: f''(x) = 2

Step 4: Evaluate f''(2): f''(2) = 2

Since 2 > 0, we have f''(2) > 0. Therefore: x = 2 is a local minimum.

Step 5: Find the Minimum Point: f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1

Therefore: (2, -1) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2 — LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = -x² + 6x + 2

Step 1: First Derivative: f'(x) = -2x + 6

Step 2: Critical Number: Set -2x + 6 = 0 → x = 3

Therefore: c = 3

Step 3: Second Derivative: f''(x) = -2

Therefore: f''(3) = -2

Since -2 < 0, we have f''(3) < 0. Therefore: x = 3 is a local maximum.

Step 4: Find the Maximum Point: f(3) = -(3)² + 6(3) + 2 = -9 + 18 + 2 = 11

Therefore: (3, 11) is the local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3 — SECOND DERIVATIVE TEST IS INCONCLUSIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴

Step 1: First Derivative: f'(x) = 4x³

Set equal to zero: 4x³ = 0 → x = 0

So: c = 0

Step 2: Second Derivative: f''(x) = 12x²

Evaluate: f''(0) = 12(0)² = 0

Therefore: f''(0) = 0

The Second Derivative Test is: Inconclusive

But does that mean x = 0 isn't an extremum? No!

It means this particular test cannot determine it. We can use the First Derivative Test.

For x < 0: f'(x) < 0
For x > 0: f'(x) > 0

Therefore: - → +, so x = 0 is a local minimum.

This is a very important example.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INCONCLUSIVE DOES NOT MEAN "NO EXTREMA"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the biggest mistakes students make.

If f''(c) = 0, do not conclude: "There is no maximum or minimum."

Instead conclude: The Second Derivative Test is inconclusive.

Then use another method, usually the First Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE OF A POINT THAT IS NEITHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

First derivative: f'(x) = 3x²

Critical number: x = 0

Second derivative: f''(x) = 6x

Therefore: f''(0) = 0

Again, the Second Derivative Test is inconclusive.

Use the First Derivative Test.

For x < 0: f'(x) = 3x² > 0
For x > 0: f'(x) = 3x² > 0

Therefore: + → +

The function is increasing on both sides.

Thus: x = 0 is neither a local maximum nor minimum.

Notice how f(x) = x⁴ and f(x) = x³ both have f''(0) = 0, but their behaviors are different. That's why f''(c) = 0 is called inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY THE SECOND DERIVATIVE TEST IS USEFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test requires you to create a sign chart and test intervals.

The Second Derivative Test can sometimes be much faster.

Example: f(x) = x² - 8x + 10

First derivative: f'(x) = 2x - 8

Critical number: x = 4

Second derivative: f''(x) = 2

Since f''(4) > 0, we immediately know: Local Minimum.

No sign chart is needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SECOND DERIVATIVE TEST PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to use the Second Derivative Test, follow these steps.

Step 1: Find f'(x)
  Differentiate the original function. f(x) → f'(x)

Step 2: Find critical numbers
  Solve f'(x) = 0. Also check where f'(x) does not exist.

Step 3: Find f''(x)
  Differentiate again: f'(x) → f''(x)

Step 4: Evaluate f''(c)
  Substitute each critical number: f''(c)

Step 5: Apply the test
  • If f''(c) > 0 → Local Minimum
  • If f''(c) < 0 → Local Maximum
  • If f''(c) = 0 → Inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH TWO CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 3x

First derivative: f'(x) = 3x² - 3 = 3(x - 1)(x + 1)

Critical numbers: x = -1, x = 1

Second derivative: f''(x) = 6x

Evaluate at x = -1: f''(-1) = -6

Since -6 < 0, x = -1 is a local maximum.

Evaluate at x = 1: f''(1) = 6

Since 6 > 0, x = 1 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FIND THE COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x³ - 3x

At x = -1: f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2 → (-1, 2) is the local maximum.

At x = 1: f(1) = 1³ - 3(1) = 1 - 3 = -2 → (1, -2) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SECOND DERIVATIVE AND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test works because:
  • f''(x) > 0 → Concave Up
  • f''(x) < 0 → Concave Down

At a critical point:
  • Concave Up → Local Minimum
  • Concave Down → Local Maximum

So you can remember: Positive second derivative → Cup → Minimum, and Negative second derivative → Cap → Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FIRST DERIVATIVE TEST VS. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Uses
First Derivative Test: f'(x)
Second Derivative Test: f''(x)

Feature: Main idea
First Derivative Test: Sign change
Second Derivative Test: Concavity

Feature: - → +
First Derivative Test: Minimum
Second Derivative Test: —

Feature: + → -
First Derivative Test: Maximum
Second Derivative Test: —

Feature: f''(c) > 0
First Derivative Test: —
Second Derivative Test: Minimum

Feature: f''(c) < 0
First Derivative Test: —
Second Derivative Test: Maximum

Feature: f''(c) = 0
First Derivative Test: Can still work
Second Derivative Test: Inconclusive

Feature: Usually
First Derivative Test: More detailed
Second Derivative Test: Faster

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test looks at: How the function changes.

The Second Derivative Test looks at: How the slope changes.

Specifically: f'(x) = slope, while f''(x) = change in slope.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Applying the test without finding a critical number
  The Second Derivative Test is normally applied at a point c where f'(c) = 0.

❌ Mistake 2: Confusing f'(c) and f''(c)
  First find f'(c) = 0, then use f''(c) to classify the critical point.

❌ Mistake 3: Saying f''(c) = 0 means no extrema
  Wrong. It means: Inconclusive. Use another test.

❌ Mistake 4: Forgetting to calculate f(c)
  If the question asks for the local maximum/minimum point, you need both coordinates: (c, f(c))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAM-STYLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the local extrema of f(x) = x³ - 6x² + 9x + 4 using the Second Derivative Test.

Step 1: First derivative: f'(x) = 3x² - 12x + 9 = 3(x - 1)(x - 3)

Critical numbers: x = 1, x = 3

Step 2: Second derivative: f''(x) = 6x - 12

Step 3: Evaluate at x = 1: f''(1) = 6(1) - 12 = -6

Since f''(1) < 0, x = 1 is a local maximum.

Find its y-value: f(1) = 1 - 6 + 9 + 4 = 8

Therefore: (1, 8) is the local maximum.

Step 4: Evaluate at x = 3: f''(3) = 18 - 12 = 6

Since f''(3) > 0, x = 3 is a local minimum.

Find its y-value: f(3) = 27 - 54 + 27 + 4 = 4

Therefore: (3, 4) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Second Derivative Test, remember:

  • The Second Derivative Test helps classify critical points using f''(c).
  • First, find a critical number: f'(c) = 0.
  • Then evaluate the second derivative.
  • The three rules: f''(c) > 0 → Local Minimum (concave up), f''(c) < 0 → Local Maximum (concave down), f''(c) = 0 → Inconclusive.
  • In the inconclusive case, use the First Derivative Test or another method.

The complete process: f(x) → f'(x) → f'(c) = 0 → f''(c) → Classify.

Memory trick:
  • Positive f'' = Cup = Minimum
  • Negative f'' = Cap = Maximum
  • Zero f'' = Inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test is a powerful method for classifying critical points using concavity.

Key concepts covered:

  ✓ What Is the Second Derivative?
  ✓ Concavity
  ✓ The Three Rules
  ✓ Local Minimum (f'' > 0)
  ✓ Local Maximum (f'' < 0)
  ✓ Inconclusive (f'' = 0)
  ✓ Examples
  ✓ Procedure
  ✓ First vs. Second Derivative Test
  ✓ Common Mistakes
  ✓ Exam-Style Example
  `,
  examples: [
    "f(x) = x² - 4x + 3 → f''(2) = 2 > 0 → local minimum at (2, -1)",
    "f(x) = -x² + 6x + 2 → f''(3) = -2 < 0 → local maximum at (3, 11)",
    "f(x) = x⁴ → f''(0) = 0 → inconclusive, but First Derivative Test shows minimum",
    "f(x) = x³ → f''(0) = 0 → inconclusive, First Derivative Test shows neither",
    "f(x) = x³ - 3x → f''(-1) = -6 < 0 → local max at (-1,2), f''(1)=6>0 → local min at (1,-2)",
    "f(x) = x³ - 6x² + 9x + 4 → f''(1) = -6 < 0 → local max at (1,8), f''(3)=6>0 → local min at (3,4)",
    "Second Derivative Test: f''(c) > 0 → minimum",
    "Second Derivative Test: f''(c) < 0 → maximum",
    "Second Derivative Test: f''(c) = 0 → inconclusive",
    "Positive f'' = Cup = Minimum",
    "Negative f'' = Cap = Maximum",
    "Zero f'' = Inconclusive",
    "f'(c) = 0 first, then use f''(c)",
    "Inconclusive means use First Derivative Test",
    "f(x) → f'(x) → f'(c)=0 → f''(c) → Classify",
  ],
};

export default topic;