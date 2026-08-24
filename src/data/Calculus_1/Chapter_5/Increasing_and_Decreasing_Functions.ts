// filename: increasing-and-decreasing-functions.ts

const topic = {
  id: "increasing-and-decreasing-functions",
  title: "Increasing and Decreasing Functions",
  summary:
    "Determining where a function rises (increasing) or falls (decreasing) using the first derivative: f'(x) > 0 means increasing, f'(x) < 0 means decreasing.",
  details: `
Increasing and decreasing functions describe how the value of a function changes as x moves from left to right.

This topic is extremely important because it allows us to determine where a graph rises, where it falls, and where it stays constant. In calculus, we use the first derivative to determine these intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "INCREASING" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is increasing on an interval if its y-values increase as x-values increase.

In simple terms:
  As you move from left to right, the graph goes up.

For example:
  f(x) = x² is increasing when x > 0.

As x increases: 1 → 2 → 3 → 4
the function values are: 1 → 4 → 9 → 16

The values are getting larger.

Therefore, the function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FORMAL DEFINITION OF AN INCREASING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f is increasing on an interval if:
  x₁ < x₂ implies f(x₁) < f(x₂)

In other words:
  x₁ < x₂ ⇒ f(x₁) < f(x₂)

The larger x becomes, the larger f(x) becomes.

Example:
  Suppose f(x) = 2x + 1.

  Take x₁ = 1, x₂ = 3.

  Since 1 < 3, we calculate:
    f(1) = 3
    f(3) = 7

  Since 3 < 7, the function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHAT DOES "DECREASING" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is decreasing on an interval if its y-values decrease as x increases.

In simple terms:
  As you move from left to right, the graph goes down.

For example:
  f(x) = -x is decreasing everywhere.

As x increases: 1 → 2 → 3 → 4,
the function values become: -1 → -2 → -3 → -4.

The values are getting smaller.

Therefore:
  f(x) = -x is decreasing

on its entire domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FORMAL DEFINITION OF A DECREASING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f is decreasing on an interval if:
  x₁ < x₂ implies f(x₁) > f(x₂)

Therefore:
  x₁ < x₂ ⇒ f(x₁) > f(x₂)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INCREASING VS. DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to remember the difference is to imagine walking along the graph from left to right.

  Increasing: Left → Right: Graph goes UP
  Decreasing: Left → Right: Graph goes DOWN

This is the fundamental idea.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW DOES THE DERIVATIVE TELL US?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where calculus becomes useful.

The derivative f'(x) represents the slope of the tangent line to the graph.

The sign of the derivative tells us whether the function is increasing or decreasing.

  If f'(x) > 0, the function is increasing.
  If f'(x) < 0, the function is decreasing.
  If f'(x) = 0, the tangent is horizontal.

This may indicate a critical point, such as a local maximum or local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE MAIN DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important rules to memorize:

  f'(x) > 0 ⇒ f is increasing
  f'(x) < 0 ⇒ f is decreasing
  f'(x) = 0 ⇒ possible critical point

Notice the word possible.

If f'(c) = 0, that does not automatically mean there is a maximum or minimum.

We need to examine what happens to the derivative around c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 1: FIND INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x² - 4x + 3

Find where the function is increasing and decreasing.

Step 1: Find the derivative
  Differentiate:
    f'(x) = 2x - 4

Step 2: Find the critical number
  Set:
    f'(x) = 0

  Therefore:
    2x - 4 = 0

  So:
    2x = 4
    x = 2

This divides the number line into two intervals:
  (-∞, 2) and (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TEST THE FIRST INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take a value less than 2, such as x = 0.

Evaluate:
  f'(0) = 2(0) - 4 = -4

Since f'(0) < 0, the function is decreasing on:
  (-∞, 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TEST THE SECOND INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take x = 3.

Then:
  f'(3) = 2(3) - 4 = 2

Since f'(3) > 0, the function is increasing on:
  (2, ∞)

Therefore:
  Decreasing on (-∞, 2)
and:
  Increasing on (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT HAPPENS AT x = 2?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 2, we have:
  f'(2) = 0

Before x = 2:
  f'(x) < 0 so the function is decreasing.

After x = 2:
  f'(x) > 0 so the function is increasing.

Therefore, the function changes:
  Decreasing → Increasing

This indicates a local minimum.

Calculate its value:
  f(2) = 2² - 4(2) + 3
  = 4 - 8 + 3
  = -1

So the local minimum is:
  (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY DOES A NEGATIVE DERIVATIVE MEAN DECREASING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that the derivative represents slope.

If f'(x) < 0, the tangent line has a negative slope.

A negative slope means that as x increases, y decreases.

For example:
  Δy/Δx < 0

If Δx is positive, then Δy must be negative.

Therefore:
  Negative derivative ⇒ graph moves downward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY DOES A POSITIVE DERIVATIVE MEAN INCREASING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f'(x) > 0, the tangent line has a positive slope.

Therefore, as x increases, y increases.

So:
  Positive derivative ⇒ graph moves upward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE FIRST DERIVATIVE SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful method is the first derivative sign chart.

For f(x) = x² - 4x + 3, we found:
  f'(x) = 2x - 4

Critical number: x = 2

The sign chart looks conceptually like this:

  Interval        |  f'(x)  |  f(x)
  ─────────────────┼─────────┼─────────────────
  (-∞, 2)         |  -      |  decreasing
  2               |  0      |
  (2, ∞)          |  +      |  increasing

The important pattern is:
  - 0 +

which means:
  Decreasing → Increasing

and therefore a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INCREASING AND DECREASING AROUND A LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -x² + 4x + 1

Differentiate:
  f'(x) = -2x + 4

Set equal to zero:
  -2x + 4 = 0

Thus:
  x = 2

Now examine the signs.

For x < 2, the derivative is positive:
  f'(x) > 0

So the function is increasing.

For x > 2, the derivative is negative:
  f'(x) < 0

So the function is decreasing.

Therefore:
  Increasing → Decreasing

at x = 2.

That indicates a local maximum.

Calculate:
  f(2) = -(2)² + 4(2) + 1
  = -4 + 8 + 1
  = 5

So the local maximum is:
  (2, 5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. THE TWO IMPORTANT SIGN CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Memorize these two patterns:

Local maximum:
  + → 0 → -
or simply:
  + → -
The function goes: Increasing → Decreasing.

Local minimum:
  - → 0 → +
or:
  - → +
The function goes: Decreasing → Increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHAT IF THE DERIVATIVE DOESN'T CHANGE SIGN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important situation.

Suppose f'(c) = 0 but the derivative is positive on both sides:
  + → 0 → +

Then the function is increasing before and after c.

So c is not necessarily a maximum or minimum.

Likewise:
  - → 0 → -

does not produce a local extremum.

Therefore, simply solving f'(x) = 0 is not enough.

You must check the sign of the derivative around the critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: f(x) = x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³

Derivative:
  f'(x) = 3x²

Set equal to zero:
  3x² = 0

Thus:
  x = 0

However:
  f'(x) > 0

both before and after x = 0, except exactly at zero.

So the sign pattern is:
  + → 0 → +

The function is increasing on both sides.

Therefore, x = 0 is not a local maximum or minimum.

This is an excellent example of why a critical number does not automatically mean an extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPLETE PROCEDURE FOR FINDING INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When given a function, use this procedure.

Step 1: Find the domain
  Determine where the function exists.

  For example: f(x) = 1/x has domain x ≠ 0.
  So x = 0 divides the domain.

Step 2: Find the derivative
  Calculate f'(x).

Step 3: Find critical numbers
  Solve f'(x) = 0 and identify where f'(x) does not exist, as long as the function itself is defined there.

Step 4: Divide the number line
  Use the critical numbers and domain restrictions to create intervals.

Step 5: Test the sign of f'(x)
  For every interval, choose a test value.
  Determine whether f'(x) > 0 or f'(x) < 0.

Step 6: State the intervals
  If f'(x) > 0, write Increasing.
  If f'(x) < 0, write Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = (x - 1)/(x + 1)

Find the increasing and decreasing intervals.

Step 1: Domain
  The denominator cannot equal zero:
    x + 1 ≠ 0
  Therefore:
    x ≠ -1

Step 2: Differentiate
  Using the quotient rule:
    f'(x) = [(x+1)(1) - (x-1)(1)]/(x+1)²
    = (x+1 - x + 1)/(x+1)²
    = 2/(x+1)²

Step 3: Determine the sign
  Since 2 > 0 and (x+1)² > 0 whenever x ≠ -1,
  we have:
    f'(x) > 0

  Therefore, the function is increasing on:
    (-∞, -1) and (-1, ∞)

Notice that x = -1 is not in the domain, so we cannot combine these intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. INCREASING AND DECREASING ON A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When looking at a graph, you don't necessarily need the derivative immediately.

Move from left to right.

If the graph goes ↗ upward → increasing
If the graph goes ↘ downward → decreasing

A typical graph might behave like:
  Increasing → Maximum → Decreasing → Minimum → Increasing

The derivative allows us to identify these behaviors algebraically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. CONNECTION TO CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing/decreasing analysis is closely connected to critical points.

A critical number occurs when:
  f'(x) = 0
or:
  f'(x) does not exist while f(x) is defined.

Critical numbers divide the domain into intervals.

Then we use the derivative to determine whether the function is increasing or decreasing on each interval.

So the general process is:
  f(x) → f'(x) → Critical Numbers → Sign Chart → Increasing/Decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CONNECTION TO MAXIMUM AND MINIMUM VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This topic directly connects to the previous topic you studied: absolute extrema.

Suppose f'(x) > 0 before a critical point and f'(x) < 0 after it.

Then:
  Increasing → Decreasing

which indicates a local maximum.

Conversely:
  f'(x) < 0 before the critical point and f'(x) > 0 after it.

Then:
  Decreasing → Increasing

which indicates a local minimum.

So increasing/decreasing analysis helps us locate and classify extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT TERMINOLOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Increasing:
    f'(x) > 0
    The graph rises from left to right.

  Decreasing:
    f'(x) < 0
    The graph falls from left to right.

  Critical number:
    A value c where f'(c) = 0 or f'(c) does not exist while f(c) exists.

  Local maximum:
    Usually occurs when + → -

  Local minimum:
    Usually occurs when - → +

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. QUICK EXAMPLE TO PRACTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x² - 9x + 5

Find the intervals where the function is increasing and decreasing.

Derivative:
  f'(x) = 3x² - 6x - 9

Factor:
  f'(x) = 3(x² - 2x - 3)
  f'(x) = 3(x - 3)(x + 1)

Set equal to zero:
  3(x - 3)(x + 1) = 0

Therefore:
  x = -1, x = 3

These divide the number line into:
  (-∞, -1), (-1, 3), (3, ∞)

Test the derivative:

  Interval          Sign of f'(x)    Behavior
  ──────────────────────────────────────────────────
  (-∞, -1)          +                Increasing
  (-1, 3)           -                Decreasing
  (3, ∞)            +                Increasing

Therefore:
  Increasing on (-∞, -1) ∪ (3, ∞)
and:
  Decreasing on (-1, 3)

The sign changes also tell us:
  At x = -1: + → - so there is a local maximum.
  At x = 3: - → + so there is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea is very simple:

  f'(x) > 0 ⇒ Increasing
  f'(x) < 0 ⇒ Decreasing
and:
  f'(x) = 0 ⇒ Possible critical point

The complete process is:
  Find f'(x) → Find critical numbers → Divide the number line → Test f'(x) → Identify increasing/decreasing intervals

The most important sign patterns:
  + → - = Local Maximum
  - → + = Local Minimum

And the easiest memory trick:
  Positive derivative = graph goes UP.
  Negative derivative = graph goes DOWN.

This topic is a major foundation for the next calculus concepts: First Derivative Test, Local Extrema, Concavity, and Curve Sketching.
  `,
  examples: [
    "f(x) = x² - 4x + 3 → f'(x) = 2x - 4, decreasing on (-∞,2), increasing on (2,∞)",
    "f(x) = -x² + 4x + 1 → f'(x) = -2x + 4, increasing on (-∞,2), decreasing on (2,∞)",
    "f(x) = x³ → f'(x) = 3x², increasing everywhere (no extrema at x=0)",
    "f(x) = (x-1)/(x+1) → f'(x) = 2/(x+1)², increasing on (-∞,-1) and (-1,∞)",
    "f(x) = x³ - 3x² - 9x + 5 → increasing on (-∞,-1)∪(3,∞), decreasing on (-1,3)",
    "f'(x) > 0 → increasing, f'(x) < 0 → decreasing",
    "+ → - = local max, - → + = local min",
  ],
};

export default topic;