const topic = {
  id: "concavity",
  title: "Concavity",
  summary:
    "Definition of concavity, concave up and concave down, the second derivative test, and inflection points.",
  details: `
Concavity describes the way a graph bends or curves as you move from left to right.

While the first derivative tells us whether a function is increasing or decreasing, the second derivative tells us how the graph is bending.

The two main types are:
  • f''(x) > 0 → Concave Up
  • f''(x) < 0 → Concave Down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS CONCAVITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine driving along a curved road.

The road might bend upward like a smile. This is concave up.

Or it might bend downward like a frown. This is concave down.

So, in Calculus: Concavity tells us how the graph is bending, not simply whether it is going up or down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CONCAVE UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is concave up on an interval if: f''(x) > 0 throughout that interval.

The graph bends upward.

More commonly, you can visualize it as a cup.

The slopes become larger as x increases.

For example, the slopes might change like: -5, -3, -1, 1, 3, 5

The slope is increasing. Therefore: Concave Up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONCAVE DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is concave down on an interval if: f''(x) < 0 throughout that interval.

The graph bends downward.

Or visualize it as an upside-down cup.

The slopes become smaller as x increases.

For example: 5, 3, 1, -1, -3, -5

The slope is decreasing. Therefore: Concave Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE SECOND DERIVATIVE DETERMINES CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the most important rule.

If f''(x) > 0, then: Concave Up.

If f''(x) < 0, then: Concave Down.

This is why the second derivative is so important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES THE SECOND DERIVATIVE TELL US CONCAVITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: f'(x) represents the slope.

Then: f''(x) represents the rate at which the slope is changing.

So: f''(x) > 0 → The slope is increasing → Concave Up.

And: f''(x) < 0 → The slope is decreasing → Concave Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1 — CONCAVE UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

Step 1: First derivative: f'(x) = 2x

Step 2: Second derivative: f''(x) = 2

Since 2 > 0, the function is concave up everywhere.

Therefore: Concave Up on (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VISUALIZING x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graph bends upward. It is concave up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2 — CONCAVE DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = -x²

First derivative: f'(x) = -2x

Second derivative: f''(x) = -2

Since -2 < 0, the function is concave down.

Therefore: Concave Down on (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3 — CHANGES CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

Step 1: First derivative: f'(x) = 3x²

Step 2: Second derivative: f''(x) = 6x

Now determine where f''(x) > 0 and f''(x) < 0.

For x < 0: 6x < 0 → Concave Down

For x > 0: 6x > 0 → Concave Up

So: Concave Down on (-∞, 0) and Concave Up on (0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INFLECTION POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the concavity changes from Concave Down → Concave Up or Concave Up → Concave Down, the graph may have an inflection point.

For f(x) = x³, the concavity changes at x = 0.

Therefore: x = 0 is an inflection point candidate.

Find its y-coordinate: f(0) = 0³ = 0.

Therefore: (0, 0) is the inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT IS AN INFLECTION POINT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inflection point is a point where the function's concavity changes.

For example: Concave Down → Concave Up or Concave Up → Concave Down.

The important word is: CHANGES.

Simply having f''(c) = 0 does not automatically mean there is an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT: f''(c) = 0 IS NOT ENOUGH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴

First derivative: f'(x) = 4x³

Second derivative: f''(x) = 12x²

Set: f''(x) = 0 → 12x² = 0 → x = 0

But check the sign of f''(x).

For x < 0: 12x² > 0

For x > 0: 12x² > 0

So: + → +

The concavity does not change.

Therefore: x = 0 is NOT an inflection point.

This is very important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. HOW TO FIND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this procedure:

Step 1: Find f'(x) — Differentiate the function.

Step 2: Find f''(x) — Differentiate again.

Step 3: Solve f''(x) = 0. Also check where f''(x) does not exist.

These values divide the number line into intervals.

Step 4: Test the sign of f''(x).
  If f''(x) > 0 → Concave Up
  If f''(x) < 0 → Concave Down

Step 5: Look for a sign change. If the sign changes, there is an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE 4 — COMPLETE CONCAVITY ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 6x² + 9x + 2

Step 1: First derivative: f'(x) = 3x² - 12x + 9

Step 2: Second derivative: f''(x) = 6x - 12

Step 3: Find possible inflection points: Set 6x - 12 = 0 → 6x = 12 → x = 2

So x = 2 is a possible inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DETERMINE THE CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical value x = 2 divides the number line into: (-∞, 2) and (2, ∞)

For x = 0: f''(0) = 6(0) - 12 = -12 (Negative) → Concave Down on (-∞, 2)

For x = 3: f''(3) = 18 - 12 = 6 (Positive) → Concave Up on (2, ∞)

So the concavity changes: - → +

Therefore: x = 2 is an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FIND THE INFLECTION POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We need: f(2)

f(2) = 2³ - 6(2)² + 9(2) + 2 = 8 - 24 + 18 + 2 = 4

Therefore: (2, 4) is the inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CONCAVITY AND LOCAL EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concavity is closely related to the Second Derivative Test.

At a critical number c:
  • Concave Up: f''(c) > 0 usually gives Local Minimum
  • Concave Down: f''(c) < 0 usually gives Local Maximum

Therefore: Concave Up → Minimum, Concave Down → Maximum when evaluating a critical point using the Second Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. BUT CONCAVITY AND EXTREMA ARE NOT THE SAME THING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Be careful.

A function can be concave up without having a local minimum in the interval.

For example: f(x) = eˣ has f''(x) = eˣ > 0 everywhere, so it is concave up everywhere. But it doesn't have a local minimum at some interior point.

So: Concavity ≠ Extrema. They are related, but they describe different properties.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. INCREASING + CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can be both increasing and concave up.

Example: f(x) = x² on (0, ∞)

f'(x) = 2x > 0 → increasing

f''(x) = 2 > 0 → concave up

Therefore: Increasing and Concave Up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. INCREASING + CONCAVE DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = ln(x) for x > 0

f'(x) = 1/x > 0 → increasing

f''(x) = -1/x² < 0 → concave down

Therefore: Increasing and Concave Down.

This is an important concept: increasing does not automatically mean concave up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. DECREASING + CONCAVE UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/x on (0, ∞)

f'(x) = -1/x² < 0 → decreasing

f''(x) = 2/x³ > 0 → concave up

Therefore: Decreasing and Concave Up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. DECREASING + CONCAVE DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also be both decreasing and concave down.

Example: f(x) = -eˣ

f'(x) = -eˣ < 0 → decreasing

f''(x) = -eˣ < 0 → concave down

Therefore: Decreasing and Concave Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. FOUR POSSIBLE BEHAVIORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function behavior: Increasing, Concave Up
f'(x): +
f''(x): +

Function behavior: Increasing, Concave Down
f'(x): +
f''(x): -

Function behavior: Decreasing, Concave Up
f'(x): -
f''(x): +

Function behavior: Decreasing, Concave Down
f'(x): -
f''(x): -

This is extremely useful when analyzing graphs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. EXAMPLE OF A CONCAVITY SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f''(x) = 6x - 12

We found: x = 2

The sign chart is:
  x < 2: - (Concave Down)
  x = 2: |
  x > 2: + (Concave Up)

Therefore: (-∞, 2): Concave Down, (2, ∞): Concave Up

Since the sign changes: - → +, there is an inflection point at x = 2, assuming the function is defined there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. CONCAVITY FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you aren't given the equation. You may simply be given a graph.

You can determine concavity visually.

Concave Up: The slopes become more positive as you move right. Slope: -4 → -2 → 0 → 2 → 4. Therefore: Concave Up.

Concave Down: The slopes become more negative as you move right. Slope: 4 → 2 → 0 → -2 → -4. Therefore: Concave Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. CONCAVITY VS. INCREASING/DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Increasing/Decreasing asks: Is the graph going up or down? Use: f'(x)

Concavity asks: How is the graph bending? Use: f''(x)

So: f'(x) → Increasing/Decreasing, f''(x) → Concavity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Thinking f(x) > 0 means concave up
  Wrong. Concavity depends on f''(x), not f(x).

❌ Mistake 2: Thinking f'(x) > 0 means concave up
  Also wrong. f'(x) > 0 means Increasing, while f''(x) > 0 means Concave Up.

❌ Mistake 3: Assuming f''(c) = 0 means inflection point
  Not necessarily. You must verify that the concavity changes.

❌ Mistake 4: Forgetting the domain
  If f''(x) doesn't exist at a point where the original function also isn't defined, that point cannot be an inflection point of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Increasing
What it tells you: Graph goes up

Concept: Decreasing
What it tells you: Graph goes down

Concept: Concave Up
What it tells you: Graph bends upward

Concept: Concave Down
What it tells you: Graph bends downward

Concept: Inflection Point
What it tells you: Concavity changes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Concavity, remember:

  • Concavity describes how a function bends.
  • The second derivative is the main tool: f''(x) > 0 → Concave Up, f''(x) < 0 → Concave Down.
  • To find concavity: f(x) → f'(x) → f''(x) → f''(x) = 0 → Sign Chart → Concavity.
  • For an inflection point, remember: Inflection Point = Actual Change in Concavity.
  • So: Concave Down → Concave Up or Concave Up → Concave Down.

Memory trick:
  • First derivative = direction 📈📉
  • Second derivative = bending ↗️↘️
  • Positive f'' = Cup = Concave Up 🥣
  • Negative f'' = Cap = Concave Down 🧢
  • Concavity changes = Inflection Point 🔄

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concavity is a fundamental concept for understanding the shape and behavior of functions.

Key concepts covered:

  ✓ What Is Concavity?
  ✓ Concave Up
  ✓ Concave Down
  ✓ The Second Derivative
  ✓ Examples
  ✓ Inflection Points
  ✓ f''(c) = 0 Is Not Enough
  ✓ Finding Concavity
  ✓ Complete Concavity Analysis
  ✓ Concavity and Local Extrema
  ✓ Four Possible Behaviors
  ✓ Concavity Sign Charts
  ✓ Concavity from Graphs
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = x² → f''(x) = 2 > 0 → concave up everywhere",
    "f(x) = -x² → f''(x) = -2 < 0 → concave down everywhere",
    "f(x) = x³ → f''(x) = 6x → concave down on (-∞,0), concave up on (0,∞), inflection at (0,0)",
    "f(x) = x⁴ → f''(x) = 12x² → f''(0)=0 but concavity doesn't change → no inflection at x=0",
    "f(x) = x³ - 6x² + 9x + 2 → inflection at (2,4)",
    "f(x) = eˣ → f''(x) = eˣ > 0 → concave up everywhere, no local min",
    "f(x) = ln(x) → increasing and concave down for x > 0",
    "f(x) = 1/x on (0,∞) → decreasing and concave up",
    "f(x) = -eˣ → decreasing and concave down",
    "Concave Up: f''(x) > 0",
    "Concave Down: f''(x) < 0",
    "Inflection point: concavity changes",
    "f''(c) = 0 does not automatically mean inflection",
    "First derivative = direction, Second derivative = bending",
    "Positive f'' = Cup, Negative f'' = Cap",
  ],
};

export default topic;