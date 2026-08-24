// filename: relative-maximum-and-minimum.ts

const topic = {
  id: "relative-maximum-and-minimum",
  title: "Relative Maximum and Minimum",
  summary:
    "Local peaks (relative maxima) and valleys (relative minima) where a function reaches a high or low value compared with nearby points, determined by the sign change of the first derivative.",
  details: `
Relative maximum and relative minimum are also called local maximum and local minimum. They describe points where a function reaches a high or low value compared with nearby points.

This topic connects directly with the previous topics you studied:

  Increasing/Decreasing
    ↓
  Critical Points
    ↓
  First Derivative Test
    ↓
  Second Derivative Test
    ↓
  Relative Maximum/Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A RELATIVE MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function has a relative maximum at x = c if the function's value at c is greater than the values of the function at points near c.

In simple terms:
  A relative maximum is a nearby high point or a local peak.

Mathematically, f(c) is a relative maximum if:
  f(c) ≥ f(x)

for all x sufficiently close to c.

The important phrase is:
  nearby points

It does not necessarily mean the highest point on the entire graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A RELATIVE MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function has a relative minimum at x = c if the function's value at c is less than the values of the function at points near c.

In simple terms:
  A relative minimum is a nearby low point or a local valley.

Mathematically:
  f(c) ≤ f(x)

for all x sufficiently close to c.

Again, we are comparing the point with nearby points, not necessarily the entire function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RELATIVE VS. ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Relative Maximum:
  The point is higher than nearby points.

Absolute Maximum:
  The point is the highest value over the entire domain or specified interval.

Similarly:

Relative Minimum:
  The point is lower than nearby points.

Absolute Minimum:
  The point is the lowest value over the entire domain or specified interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VISUAL IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a mountain range:

             /\                /\
            /  \              /  \
           /    \            /    \
__________/      \__________/      \____

There are two peaks.

Both can be relative maxima because each is higher than the points immediately around it.

But one peak may be taller than the other.

The tallest one could be the absolute maximum.

So:
  Relative = local comparison
while:
  Absolute = global comparison

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RELATIVE MAXIMUM AND INCREASING/DECREASING BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important connections.

Suppose a function is:
  Increasing → Decreasing

The graph goes upward and then downward.

Therefore, it reaches a peak.

So:
  Increasing → Decreasing = Relative Maximum

In terms of the first derivative:
  f'(x): + → -

indicates a relative maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RELATIVE MINIMUM AND INCREASING/DECREASING BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the function is:
  Decreasing → Increasing

The graph goes downward and then upward.

Therefore, it reaches a valley.

So:
  Decreasing → Increasing = Relative Minimum

In terms of the derivative:
  f'(x): - → +

indicates a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE MOST IMPORTANT SIGN CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Memorize these:

Relative Maximum:
  + → -
  Graph: UP → DOWN

Relative Minimum:
  - → +
  Graph: DOWN → UP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RELATIVE EXTREMA AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Relative maximum and minimum points often occur at critical numbers.

A critical number occurs when:
  f'(c) = 0
or when:
  f'(c) does not exist

while f(c) exists.

However, there is an important warning:

  Every relative extremum may occur at a critical point, but not every 
  critical point is a relative extremum.

For example:
  f(x) = x³

We have:
  f'(x) = 3x²

At x = 0, the derivative is zero.

So x = 0 is a critical number.

But the function continues increasing on both sides.

Therefore, there is no relative maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 1: RELATIVE MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x² + 2

We want to find its relative maximum and minimum.

Step 1: Find the derivative
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Step 2: Find Critical Numbers
  Set:
    f'(x) = 0

  Therefore:
    3x(x - 2) = 0

  So:
    x = 0 or x = 2

  The critical numbers are:
    0, 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DETERMINE THE SIGN OF THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical numbers divide the number line:
  (-∞, 0), (0, 2), (2, ∞)

We test each interval.

For x = -1:
  f'(-1) = 3(-1)(-3) = 9 > 0
  So the function is increasing.

For x = 1:
  f'(1) = 3(1)(-1) = -3 < 0
  So the function is decreasing.

For x = 3:
  f'(3) = 3(3)(1) = 9 > 0
  So the function is increasing.

Therefore:
  Increasing → Decreasing → Increasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CLASSIFY THE CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 0:
  the derivative changes: + → -
  Therefore: x = 0 is a relative maximum.

At x = 2:
  the derivative changes: - → +
  Therefore: x = 2 is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FIND THE COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For x = 0:
  f(0) = 0³ - 3(0)² + 2 = 2

Therefore, the relative maximum is:
  (0, 2)

For x = 2:
  f(2) = 2³ - 3(2)² + 2
  = 8 - 12 + 2
  = -2

Therefore, the relative minimum is:
  (2, -2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 2: A FUNCTION WITH TWO RELATIVE MINIMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x⁴ - 4x²

Differentiate:
  f'(x) = 4x³ - 8x

Factor:
  f'(x) = 4x(x² - 2)

Therefore:
  f'(x) = 4x(x - √2)(x + √2)

Critical numbers:
  -√2, 0, √2

The derivative signs are:
  - + - +

Therefore:
  At x = -√2: - → + so it is a relative minimum.
  At x = 0: + → - so it is a relative maximum.
  At x = √2: - → + so it is a relative minimum.

Thus:
  Two relative minima and one relative maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING THEIR COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For x = 0:
  f(0) = 0
  So the relative maximum is: (0, 0)

For x = ±√2:
  We know x² = 2 and x⁴ = 4.

  Therefore:
    f(x) = 4 - 4(2) = -4

  So the relative minima are:
    (-√2, -4) and (√2, -4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RELATIVE MAXIMUM DOES NOT MEAN ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function with two peaks: small peak and large peak.

Both peaks can be relative maxima.

But only the highest one can be the absolute maximum.

For example:
  f(a) = 5 and f(b) = 10

If both are local peaks, then both are relative maxima.

But 10 > 5, so f(b) is the larger one and may be the absolute maximum, depending on the rest of the domain.

Therefore:
  Relative maximum ≠ necessarily absolute maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RELATIVE MINIMUM DOES NOT MEAN ABSOLUTE MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same applies to minima.

Suppose:
  f(a) = -2 and f(b) = -10

Both might be relative minima.

But -10 < -2, so f(b) is lower and could be the absolute minimum, depending on the domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: RELATIVE VS. ABSOLUTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x

on the interval:
  [-2, 2]

First derivative:
  f'(x) = 3x² - 3

Set equal to zero:
  3x² - 3 = 0
  x² = 1

Thus:
  x = -1, 1

These are critical numbers.

The derivative signs are:
  + → - → +

Therefore:
  x = -1 is a relative maximum, and x = 1 is a relative minimum.

Now calculate the values:

f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2
So: (-1, 2) is the relative maximum.

f(1) = 1 - 3 = -2
So: (1, -2) is the relative minimum.

But because the interval is closed, we must also examine the endpoints.

f(-2) = (-2)³ - 3(-2) = -8 + 6 = -2
f(2) = 8 - 6 = 2

So on [-2, 2]:
  Absolute maximum = 2
  Absolute minimum = -2

Interestingly, the relative maximum at x = -1 has the same value as the endpoint x = 2, while the relative minimum at x = 1 has the same value as the endpoint x = -2.

This demonstrates why absolute extrema require checking endpoints, while relative extrema focus on local behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. RELATIVE EXTREMA AT ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In standard introductory calculus, relative extrema are usually discussed using interior points because a relative extremum requires a neighborhood around the point.

Endpoints are especially important when finding absolute extrema on a closed interval.

For example:
  [a, b]

To find absolute extrema, examine:
  Critical points + endpoints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. RELATIVE EXTREMA AND THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is one of the best tools for finding relative extrema.

The procedure is:

  f(x)
    ↓
  f'(x)
    ↓
  Find critical numbers
    ↓
  Create intervals
    ↓
  Determine signs of f'(x)
    ↓
  Look for sign changes
    ↓
  Classify relative extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. RELATIVE EXTREMA AND THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test provides another method.

Suppose:
  f'(c) = 0

Then calculate:
  f''(c)

If f''(c) > 0, then Relative Minimum.
If f''(c) < 0, then Relative Maximum.
If f''(c) = 0, the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE USING THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 6x² + 9x + 1

First derivative:
  f'(x) = 3x² - 12x + 9

Factor:
  f'(x) = 3(x - 1)(x - 3)

Critical numbers:
  x = 1, 3

Second derivative:
  f''(x) = 6x - 12

At x = 1:
  f''(1) = 6 - 12 = -6

Since f''(1) < 0, we have:
  x = 1 is a relative maximum.

At x = 3:
  f''(3) = 18 - 12 = 6

Since f''(3) > 0, we have:
  x = 3 is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A CRITICAL POINT IS NOT ALWAYS A RELATIVE EXTREMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts.

Consider:
  f(x) = x³

We find:
  f'(x) = 3x²

Thus:
  f'(0) = 0

So x = 0 is a critical number.

But f'(x) > 0 on both sides of 0.

Therefore, the function is increasing before and after the critical point.

There is no + → - and no - → +.

So:
  x = 0 is not a relative maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. RELATIVE MAXIMUM/MINIMUM FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you are given only a graph, you can identify relative extrema visually.

Relative maximum:
  Look for a nearby peak: ∩

Relative minimum:
  Look for a nearby valley: ∪

A more complex graph can contain several relative maxima and minima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT DIFFERENCE IN TERMINOLOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You may encounter these terms:

  Term                 |  Meaning
  ──────────────────────┼─────────────────────────────────
  Relative maximum     |  Local maximum
  Relative minimum     |  Local minimum
  Relative extremum    |  Either a relative max or min
  Absolute maximum     |  Greatest value on entire domain/interval
  Absolute minimum     |  Smallest value on entire domain/interval

Therefore:
  Relative = Local

This is a very useful equivalence to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Assuming every critical point is an extremum
  Not true. f'(c) = 0 only makes c a candidate.

Mistake 2: Confusing relative with absolute
  Relative means nearby.
  Absolute means entire domain/interval.

Mistake 3: Forgetting to find the y-value
  If the problem asks for the relative maximum point, don't just give x = c.
  You should calculate f(c).
  Then give (c, f(c)).

Mistake 4: Thinking f''(c) = 0 means no extremum
  No. It means the Second Derivative Test is inconclusive.
  You can use the First Derivative Test instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A RELIABLE METHOD FOR PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked:
  Find the relative maximum and minimum of f(x).

Use this workflow:

Step 1: Find f'(x).

Step 2: Solve f'(x) = 0.

Step 3: Identify any points where f'(x) does not exist but f(x) exists.

Step 4: Use the First Derivative Test or Second Derivative Test.

Step 5: Classify the critical numbers.

Step 6: Calculate the corresponding y-values.

Step 7: Report the coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Behavior                       Derivative Sign    Result
  ──────────────────────────────────────────────────────────────────
  Increasing → Decreasing        + → -              Relative Maximum
  Decreasing → Increasing        - → +              Relative Minimum
  Increasing → Increasing        + → +              Neither
  Decreasing → Decreasing        - → -              Neither

Using the Second Derivative Test:

  Condition                Result
  ─────────────────────────────────────────
  f''(c) > 0               Relative Minimum
  f''(c) < 0               Relative Maximum
  f''(c) = 0               Inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A relative maximum is a point where the function is higher than nearby values:
  UP → DOWN
or:
  + → -

A relative minimum is a point where the function is lower than nearby values:
  DOWN → UP
or:
  - → +

The most important distinction is:
  Relative = nearby comparison
  Absolute = entire domain/interval comparison

And the overall relationship between your recent topics is:

  f'(x) > 0 → Increasing
  f'(x) < 0 → Decreasing

which leads to:
  + → - → Relative Maximum
and:
  - → + → Relative Minimum

So, in one sentence:

  Relative extrema are local peaks and valleys, and we can find them by 
  studying how the derivative changes from positive to negative or from 
  negative to positive.
  `,
  examples: [
    "f(x) = x³ - 3x² + 2 → relative max at (0,2), relative min at (2,-2)",
    "f(x) = x⁴ - 4x² → relative max at (0,0), relative mins at (-√2,-4), (√2,-4)",
    "f(x) = x³ → x=0 is a critical point but not a relative extremum (neither)",
    "f(x) = x³ - 6x² + 9x + 1 → relative max at (1,5), relative min at (3,1)",
    "f(x) = x³ - 3x on [-2,2] → relative max at (-1,2), relative min at (1,-2)",
    "+ → - = Relative Maximum, - → + = Relative Minimum",
    "Relative = local, Absolute = global",
  ],
};

export default topic;