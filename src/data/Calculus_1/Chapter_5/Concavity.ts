// filename: concavity.ts

const topic = {
  id: "concavity",
  title: "Concavity",
  summary:
    "The way a function's graph bends upward (concave up) or downward (concave down), determined by the sign of the second derivative: f''(x) > 0 means concave up, f''(x) < 0 means concave down.",
  details: `
Concavity describes the way a function's graph bends or curves as x increases.

While the first derivative tells us whether a function is increasing or decreasing, the second derivative helps us determine whether the graph bends upward or downward.

This is an important topic because concavity helps us understand the shape of a graph, locate inflection points, and apply the Second Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS CONCAVITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine looking at a graph from left to right.

A function can bend in two basic ways:

Concave Up:
  The graph bends upward.
  It often looks like a cup.
  More accurately, a concave-up graph has slopes that are increasing as we move from left to right.

For example:
  f(x) = x² has a graph shaped like a cup.
  The slopes go from negative to zero to positive.

Concave Down:
  The graph bends downward.
  It often looks like an upside-down cup.
  A common example is f(x) = -x².
  The slopes become smaller as we move from left to right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SECOND DERIVATIVE DETERMINES CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important rule is:

Concave Up:
  If f''(x) > 0 on an interval, then f is concave up on that interval.

Concave Down:
  If f''(x) < 0 on an interval, then f is concave down on that interval.

So:
  f''(x) > 0 ⇒ Concave Up
  f''(x) < 0 ⇒ Concave Down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES THE SECOND DERIVATIVE TELL US THIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember:
  f'(x) represents the slope of the function.

The second derivative, f''(x), tells us how that slope is changing.

If f''(x) > 0:
  The slope is increasing.
  For example, the slopes might change like: -5, -3, -1, 1, 3, 5.
  The slope is getting larger.
  Therefore, the graph bends upward.
  f''(x) > 0 ⇒ concave up

If f''(x) < 0:
  The slope is decreasing.
  For example: 5, 3, 1, -1, -3, -5.
  The slope is getting smaller.
  Therefore, the graph bends downward.
  f''(x) < 0 ⇒ concave down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: f(x) = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x²

First derivative:
  f'(x) = 2x

Second derivative:
  f''(x) = 2

Since 2 > 0, we have:
  f''(x) > 0 for every x.

Therefore:
  f(x) = x² is concave up on (-∞, ∞)

This makes sense because the graph is shaped like a cup.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: f(x) = -x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -x²

First derivative:
  f'(x) = -2x

Second derivative:
  f''(x) = -2

Since -2 < 0, the function is:
  concave down on (-∞, ∞)

The graph bends downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONCAVITY CAN CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not necessarily have the same concavity everywhere.

Consider:
  f(x) = x³

First derivative:
  f'(x) = 3x²

Second derivative:
  f''(x) = 6x

Now examine the sign of f''(x).

For x < 0, we have:
  6x < 0
  Therefore, the function is concave down.

For x > 0, we have:
  6x > 0
  Therefore, the function is concave up.

So:
  Concave down on (-∞, 0)
and:
  Concave up on (0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INFLECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the concavity of a function changes, we have an inflection point.

For f(x) = x³, we found:
  f''(x) = 6x

Set the second derivative equal to zero:
  6x = 0

Therefore:
  x = 0

At x = 0:
  f(0) = 0

So the point is:
  (0, 0)

Because the function changes from concave down to concave up, (0, 0) is an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT: f''(x) = 0 DOES NOT AUTOMATICALLY MEAN INFLECTION POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important concept.

If f''(c) = 0, that only means c is a possible inflection point.

The concavity must actually change.

Example:
  Consider f(x) = x⁴.

  First derivative:
    f'(x) = 4x³

  Second derivative:
    f''(x) = 12x²

  Set:
    12x² = 0

  We get:
    x = 0

  But 12x² > 0 on both sides of x = 0.

  Therefore, the function is concave up on both sides.

  There is no change in concavity.

  Thus:
    x = 0 is not an inflection point

  even though f''(0) = 0.

Remember:
  f''(c) = 0 is a candidate, not automatically an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. HOW TO FIND INTERVALS OF CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common calculus problem is:
  Determine where the function is concave up and concave down.

Use this procedure.

Step 1: Find the second derivative
  Calculate f''(x).

Step 2: Solve
  Find values where f''(x) = 0 or where f''(x) does not exist.
  These values divide the domain into intervals.

Step 3: Make a sign chart
  Determine whether f''(x) is positive or negative on each interval.

Step 4: State the intervals
  If f''(x) > 0, the function is concave up.
  If f''(x) < 0, the function is concave down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Determine the intervals where:
  f(x) = x³ - 6x² + 9x + 2

is concave up and concave down.

Step 1: Find the first derivative
  f'(x) = 3x² - 12x + 9

Step 2: Find the second derivative
  f''(x) = 6x - 12

Step 3: Find possible inflection points
  Set:
    f''(x) = 0

  Therefore:
    6x - 12 = 0
    6x = 12
    x = 2

  This divides the number line into:
    (-∞, 2) and (2, ∞)

Step 4: Test each interval

Choose x = 0:
  f''(0) = 6(0) - 12 = -12

Since -12 < 0, the function is concave down on:
  (-∞, 2)

Now choose x = 3:
  f''(3) = 18 - 12 = 6

Since 6 > 0, the function is concave up on:
  (2, ∞)

Therefore:
  Concave Down: (-∞, 2)
  Concave Up: (2, ∞)

Since the concavity changes at x = 2, there is an inflection point there.

Find its y-coordinate:
  f(2) = 8 - 24 + 18 + 2 = 4

Therefore:
  Inflection Point = (2, 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONCAVITY AND THE SHAPE OF THE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concavity gives us information that increasing/decreasing behavior cannot provide by itself.

Suppose f'(x) > 0.

That tells us:
  The function is increasing

But it doesn't tell us whether the graph bends upward or downward.

We need f''(x).

For example:
  f'(x) > 0, f''(x) > 0
  means the function is increasing and concave up.

While:
  f'(x) > 0, f''(x) < 0
  means increasing and concave down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FOUR IMPORTANT COMBINATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are four common situations.

  f'(x)   f''(x)        Behavior
  ───────────────────────────────────────────────
  +        +         Increasing, concave up
  +        -         Increasing, concave down
  -        +         Decreasing, concave up
  -        -         Decreasing, concave down

Understanding these four combinations is extremely useful when sketching graphs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONCAVITY AND RELATIVE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concavity is also related to maximum and minimum points.

Suppose f'(c) = 0.

If f''(c) > 0, then the graph is concave up at c, which suggests a relative minimum.

If f''(c) < 0, then the graph is concave down at c, which suggests a relative maximum.

This leads to the Second Derivative Test.

Second Derivative Test:
  If f'(c) = 0 and f''(c) > 0, then Relative Minimum.
  If f'(c) = 0 and f''(c) < 0, then Relative Maximum.
  If f''(c) = 0, the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE OF THE SECOND DERIVATIVE CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x² - 4x + 3

First derivative:
  f'(x) = 2x - 4

Set equal to zero:
  2x - 4 = 0
  x = 2

Second derivative:
  f''(x) = 2

Since f''(2) = 2 > 0, the graph is concave up at x = 2.

Therefore:
  x = 2 is a relative minimum

and:
  f(2) = 4 - 8 + 3 = -1

Thus the relative minimum point is:
  (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONCAVITY VS. INCREASING/DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't confuse these concepts.

Increasing/Decreasing:
  Uses f'(x)
  and tells us whether the function is going upward or downward.

Concavity:
  Uses f''(x)
  and tells us how the graph is bending: upward or downward.

So:
  First derivative → direction
  Second derivative → curvature

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. CONCAVITY USING SLOPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another way to understand concavity is by watching the slopes.

Concave Up:
  The slopes increase: -4, -2, 0, 2, 4.
  The graph becomes steeper in the positive direction.
  Thus: f''(x) > 0.

Concave Down:
  The slopes decrease: 4, 2, 0, -2, -4.
  Thus: f''(x) < 0.

This is often the easiest intuitive way to remember concavity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. A REAL-WORLD INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(t) represents the position of a car.

Then:
  f'(t) represents its velocity.
  f''(t) represents its acceleration.

If f''(t) > 0, velocity is increasing.
If f''(t) < 0, velocity is decreasing.

This gives another interpretation of concavity:

  Concavity tells us how the rate of change itself is changing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using f'(x) to determine concavity
  Incorrect.
  Use f''(x).

Mistake 2: Thinking f''(x) = 0 automatically means an inflection point
  Incorrect.
  You must verify that the concavity changes.

Mistake 3: Forgetting where f''(x) does not exist
  These points can also be candidates for inflection points.

Mistake 4: Not testing intervals
  Finding f''(x) = 0 is not enough.
  You must determine the sign of f'' on both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concave Up:
  f''(x) > 0
  The graph bends upward.
  The slopes are increasing.

Concave Down:
  f''(x) < 0
  The graph bends downward.
  The slopes are decreasing.

Possible Inflection Point:
  f''(x) = 0 or f''(x) does not exist.
  But the concavity must change for it to actually be an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE MAIN PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked:
  "Determine the intervals where f(x) is concave up/down and find the inflection points."

Remember:

  1. Find f''(x)
  2. Solve f''(x) = 0
  3. Find where f'' does not exist
  4. Divide the domain into intervals
  5. Test the sign of f''
  6. f'' > 0 ⇒ Concave Up
  7. f'' < 0 ⇒ Concave Down
  8. Check for a change in concavity
  9. If it changes, identify the inflection point

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. MOST IMPORTANT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  f''(x) > 0 ⇒ Concave Up
  f''(x) < 0 ⇒ Concave Down
  Concavity changes ⇒ Inflection Point

And the key relationship to remember is:

  f(x) → function
  f'(x) → increasing/decreasing
  f''(x) → concavity
  `,
  examples: [
    "f(x) = x² → f''(x) = 2 > 0 → concave up everywhere",
    "f(x) = -x² → f''(x) = -2 < 0 → concave down everywhere",
    "f(x) = x³ → f''(x) = 6x → concave down on (-∞,0), concave up on (0,∞), inflection at (0,0)",
    "f(x) = x⁴ → f''(x) = 12x² → f''(0) = 0 but no inflection (no concavity change)",
    "f(x) = x³ - 6x² + 9x + 2 → f''(x) = 6x - 12 → concave down (-∞,2), concave up (2,∞), inflection at (2,4)",
    "f''(x) > 0 → concave up (cup), f''(x) < 0 → concave down (cap)",
    "f''(x) = 0 is a candidate for inflection, but concavity must actually change",
  ],
};

export default topic;