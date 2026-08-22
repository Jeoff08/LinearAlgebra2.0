const topic = {
  id: "increasing-and-decreasing-functions",
  title: "Increasing and Decreasing Functions",
  summary:
    "Definition of increasing, decreasing, and constant functions, identifying from graphs and derivatives, and applications in calculus.",
  details: `
An increasing or decreasing function describes how the output of a function changes as the input x changes. These concepts are important in Mathematics and Calculus because they help us understand the behavior, direction, and rate of change of a function.

In simple terms:
  • An increasing function goes up as x increases.
  • A decreasing function goes down as x increases.
  • A constant function stays at the same value.

These ideas become especially important in Calculus when we use the derivative to determine whether a function is increasing or decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INCREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is increasing on an interval if its output becomes larger as the input becomes larger.

In simple terms: x increases → f(x) increases

Example: f(x) = 2x + 1

Consider some values:

  x   |   0   1   2   3
  f(x)|   1   3   5   7

As x increases, f(x) also increases.

Therefore: f(x) = 2x + 1 is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INCREASING FUNCTION ON A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On a graph, an increasing function generally moves upward from left to right.

Example: y = 3x + 2 has a positive slope m = 3.

Therefore, the graph rises as we move from left to right.

A positive slope is a common indication that a linear function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is decreasing on an interval if its output becomes smaller as the input becomes larger.

In simple terms: x increases → f(x) decreases

Example: f(x) = -2x + 5

Consider:

  x   |   0   1   2   3
  f(x)|   5   3   1  -1

As x increases, f(x) decreases.

Therefore: f(x) = -2x + 5 is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DECREASING FUNCTION ON A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On a graph, a decreasing function generally moves downward from left to right.

Example: y = -3x + 4 has a negative slope m = -3.

Therefore, the graph falls as we move from left to right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTANT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant function does not increase or decrease.

Its output remains the same regardless of the input.

Example: f(x) = 5

The values are:

  x   |  -2  -1   0   1   2
  f(x)|   5   5   5   5   5

The output always equals 5.

Therefore: f(x) = 5 is constant.

Its graph is a horizontal line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INCREASING AND DECREASING USING TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can compare two points to understand whether a function is increasing or decreasing.

Suppose x₁ < x₂.

If f(x₁) < f(x₂), then the function is increasing between those points.

Example: f(2) = 4 and f(5) = 10

Since 2 < 5 and 4 < 10, the function increases between x = 2 and x = 5.

If x₁ < x₂ but f(x₁) > f(x₂), then the function is decreasing.

Example: f(2) = 10 and f(5) = 4

Since 2 < 5 but 10 > 4, the function decreases between x = 2 and x = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not always have to be increasing or decreasing over its entire domain.

Some functions increase over one interval and decrease over another.

Consider: f(x) = x²

The graph is a parabola.

For x < 0, the function is decreasing.

For x > 0, the function is increasing.

Therefore:
  • Decreasing on (-∞, 0)
  • Increasing on (0, ∞)

At x = 0, the function reaches its minimum value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. USING THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In Calculus, the derivative provides a powerful way to determine whether a function is increasing or decreasing.

Suppose we have f(x). Its derivative is f'(x).

The general rules are:
  • f'(x) > 0 → Increasing
  • f'(x) < 0 → Decreasing
  • f'(x) = 0 → Possible critical point

A derivative equal to zero does not automatically mean that the function changes from increasing to decreasing or vice versa. We need to examine the behavior around the point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE USING THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

First, find the derivative:

  f'(x) = 2x

Now determine when the derivative is positive.

For x > 0, we have: 2x > 0

Therefore: f(x) is increasing on (0, ∞)

For x < 0, we have: 2x < 0

Therefore: f(x) is decreasing on (-∞, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 3x

Find the derivative:

  f'(x) = 3x² - 3

Factor:

  f'(x) = 3(x² - 1)

Using difference of squares:

  f'(x) = 3(x - 1)(x + 1)

The critical points occur when f'(x) = 0.

Therefore: x = -1 and x = 1

These points divide the number line into three intervals:

  (-∞, -1), (-1, 1), (1, ∞)

Testing the sign of the derivative gives:

  • Increasing on (-∞, -1)
  • Decreasing on (-1, 1)
  • Increasing on (1, ∞)

This is an important application of derivatives in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LOCAL MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing and decreasing behavior can help us identify local maximum and minimum points.

If a function changes from:
  • Increasing → Decreasing, the point is a possible local maximum.

If a function changes from:
  • Decreasing → Increasing, the point is a possible local minimum.

Example: Imagine a hill-shaped graph.

It rises as x increases (Increasing), reaches a highest point (Maximum), and then falls (Decreasing).

This is why increasing and decreasing intervals are useful when analyzing the shape of functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the temperature during the day is represented by a function T(t).

If the temperature rises from 8:00 AM to 12:00 PM, then T(t) is increasing during that interval.

If the temperature falls from 2:00 PM to 6:00 PM, then T(t) is decreasing during that interval.

This demonstrates how increasing and decreasing functions can describe real-world changes over time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INCREASING VS. DECREASING VS. CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────┬────────────────────────────────┬─────────────────┐
│ Behavior    │ What Happens as x Increases?   │ Derivative      │
├─────────────┼────────────────────────────────┼─────────────────┤
│ Increasing  │ f(x) increases                 │ f'(x) > 0       │
├─────────────┼────────────────────────────────┼─────────────────┤
│ Decreasing  │ f(x) decreases                 │ f'(x) < 0       │
├─────────────┼────────────────────────────────┼─────────────────┤
│ Constant    │ f(x) stays the same            │ f'(x) = 0       │
└─────────────┴────────────────────────────────┴─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Increasing and Decreasing Functions, remember:

  • Increasing → Graph rises left to right
  • Decreasing → Graph falls left to right
  • Constant → Graph stays horizontal

In Calculus:
  • f'(x) > 0 → Increasing
  • f'(x) < 0 → Decreasing
  • f'(x) = 0 → Possible critical point

The key idea to remember is:

  An increasing function produces larger outputs as the input increases, while a decreasing function produces smaller outputs as the input increases. By using the derivative, we can determine exactly where a function is increasing or decreasing. This concept is essential for finding local maximum and minimum points and for understanding the overall behavior of functions in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing and Decreasing Functions are fundamental concepts that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Increasing Functions
  ✓ Decreasing Functions
  ✓ Constant Functions
  ✓ Identifying from Graphs
  ✓ Using Two Points
  ✓ Increasing and Decreasing Intervals
  ✓ Using the Derivative
  ✓ Local Maximum and Minimum
  ✓ Real-World Applications
  `,
  examples: [
    "Identify f(x) = 2x + 1 as increasing: f(0)=1, f(1)=3, f(2)=5, f(3)=7",
    "Identify f(x) = -2x + 5 as decreasing: f(0)=5, f(1)=3, f(2)=1, f(3)=-1",
    "Identify f(x) = 5 as constant: f(-2)=5, f(0)=5, f(2)=5",
    "Compare points: f(2)=4 and f(5)=10 → increasing between x=2 and x=5",
    "Compare points: f(2)=10 and f(5)=4 → decreasing between x=2 and x=5",
    "Find intervals for f(x) = x² → decreasing on (-∞,0), increasing on (0,∞)",
    "Use derivative for f(x) = x²: f'(x)=2x → increasing on (0,∞), decreasing on (-∞,0)",
    "Use derivative for f(x) = x³ - 3x: f'(x)=3(x-1)(x+1) → increasing on (-∞,-1) and (1,∞), decreasing on (-1,1)",
    "Identify local maximum at x=-1 for f(x) = x³ - 3x: increasing then decreasing",
    "Identify local minimum at x=1 for f(x) = x³ - 3x: decreasing then increasing",
    "Real-world: Temperature rising from 8:00 AM to 12:00 PM → increasing",
    "Real-world: Temperature falling from 2:00 PM to 6:00 PM → decreasing",
  ],
};

export default topic;