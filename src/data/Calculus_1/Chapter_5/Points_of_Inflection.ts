// filename: points-of-inflection.ts

const topic = {
  id: "points-of-inflection",
  title: "Points of Inflection",
  summary:
    "A point on the graph where the function's concavity changes from concave up to concave down or vice versa, determined by the sign change of the second derivative.",
  details: `
A point of inflection is a point on the graph of a function where the function's concavity changes.

In other words, the graph changes its bending behavior:
  Concave Up → Concave Down
or:
  Concave Down → Concave Up

This topic is closely connected to the second derivative and concavity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A POINT OF INFLECTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a graph is initially concave down and then changes to concave up.

The location where this change occurs is called a point of inflection.

Mathematically, if the function changes concavity at x = c, then the point:
  (c, f(c))

is a point of inflection.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MOST IMPORTANT DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A point (c, f(c)) is an inflection point if the concavity of f changes at x = c.

The key phrase is:
  The concavity must change.

Simply finding f''(c) = 0 does not automatically make c an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HOW THE SECOND DERIVATIVE HELPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative tells us the concavity.

If f''(x) > 0, then:
  Concave Up

If f''(x) < 0, then:
  Concave Down

Therefore, to find an inflection point, we look for locations where the sign of f''(x) changes.

For example:
  f''(x) < 0 before x = c, and f''(x) > 0 after x = c.

Then:
  x = c is an inflection number

and the corresponding point is:
  (c, f(c))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING POINTS OF INFLECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common procedure is:

Step 1: Find the second derivative
  Calculate f''(x).

Step 2: Find possible candidates
  Solve f''(x) = 0 and find values where f''(x) does not exist.

Step 3: Divide the domain
  These candidate values divide the domain into intervals.

Step 4: Test the concavity
  Determine whether f''(x) > 0 or f''(x) < 0 on each interval.

Step 5: Check for a change
  If the concavity changes, then the candidate is an actual inflection point.

Step 6: Find the y-coordinate
  Calculate f(c).
  The inflection point is (c, f(c)).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: f(x) = x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³

Step 1: First derivative
  f'(x) = 3x²

Step 2: Second derivative
  f''(x) = 6x

Step 3: Set the second derivative equal to zero
  6x = 0

Therefore:
  x = 0

This gives us a possible inflection point.

But we still need to check the concavity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TEST THE LEFT SIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose:
  x = -1

Then:
  f''(-1) = 6(-1) = -6

Since -6 < 0, the function is:
  Concave Down

on the interval:
  (-∞, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. TEST THE RIGHT SIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose:
  x = 1

Then:
  f''(1) = 6

Since 6 > 0, the function is:
  Concave Up

on:
  (0, ∞)

Therefore, the concavity changes:
  Down → Up

So x = 0 is an actual inflection number.

Now find the y-coordinate:
  f(0) = 0³ = 0

Therefore:
  (0, 0) is the point of inflection.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SIGN CHART FOR THE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can summarize the previous example using a sign chart:

  Interval        Test x    f''(x)    Concavity
  ────────────────────────────────────────────────────
  (-∞, 0)        -1        -6         Concave Down
  x = 0           0         0         Candidate
  (0, ∞)          1         6         Concave Up

Because the sign changes:
  - → +

there is an inflection point at:
  (0, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT: f''(c) = 0 IS NOT ENOUGH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most common mistakes in calculus.

Consider:
  f(x) = x⁴

First derivative:
  f'(x) = 4x³

Second derivative:
  f''(x) = 12x²

Set:
  12x² = 0

We get:
  x = 0

At first glance, you might say:
  "Therefore, x = 0 is an inflection point."

But that is incorrect.

Check the second derivative on both sides.

For x = -1:
  f''(-1) = 12

For x = 1:
  f''(1) = 12

Both are positive.

Therefore:
  Concave Up on both sides

There is no change in concavity.

Therefore:
  x = 0 is NOT an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE CRITICAL DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember:
  f''(c) = 0

means:
  Possible inflection point

It does not mean:
  Definitely an inflection point

You must check:
  Does the concavity change?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INFLECTION POINTS CAN OCCUR WHERE f'' DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inflection point does not necessarily require f''(c) = 0.

Sometimes the second derivative does not exist at the point.

Consider:
  f(x) = x^(1/3)

The first derivative is:
  f'(x) = (1/3)x^(-2/3)

The second derivative is:
  f''(x) = -(2/9)x^(-5/3)

At x = 0, the second derivative does not exist.

But examine the concavity.

For x < 0, the second derivative is positive:
  f''(x) > 0

Therefore, the function is concave up.

For x > 0:
  f''(x) < 0

Therefore, the function is concave down.

Thus:
  Concave Up → Concave Down

at x = 0.

Since f(0) = 0, the point:
  (0, 0)

is an inflection point.

This demonstrates an important fact:
  An inflection point can occur where f''(c) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INFLECTION POINTS AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inflection point and a critical point are not the same thing.

Critical Point:
  A critical number occurs where f'(c) = 0 or f'(c) does not exist.

Inflection Point:
  An inflection point occurs where concavity changes.

A point can be:
  • a critical point but not an inflection point,
  • an inflection point but not a critical point,
  • both,
  • or neither.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE OF BOTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x³, we have:
  f'(x) = 3x²

At x = 0, f'(0) = 0.

Therefore, x = 0 is a critical number.

Also:
  f''(x) = 6x

The concavity changes at x = 0.

Therefore:
  (0, 0) is both:
    • a critical point, and
    • an inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INFLECTION POINTS DO NOT HAVE TO BE MAXIMA OR MINIMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important idea:
  An inflection point does not necessarily represent a maximum or minimum.

For f(x) = x³, the point (0, 0) is an inflection point.

But the function continues increasing through that point:
  f'(x) = 3x² ≥ 0

There is no relative maximum or minimum at x = 0.

The graph simply changes its curvature.

So:
  Inflection point ≠ necessarily maximum/minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find all points of inflection of:
  f(x) = x⁴ - 4x³

Step 1: Find f'(x)
  f'(x) = 4x³ - 12x²

Step 2: Find f''(x)
  f''(x) = 12x² - 24x

Factor:
  f''(x) = 12x(x - 2)

Step 3: Set f''(x) = 0
  12x(x - 2) = 0

Therefore:
  x = 0 or x = 2

These are possible inflection numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. TEST THE INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The candidates divide the domain into:
  (-∞, 0), (0, 2), (2, ∞)

Interval 1: x < 0
  Choose x = -1.
  f''(-1) = 12(-1)(-3) = 36

  Therefore: Concave Up

Interval 2: 0 < x < 2
  Choose x = 1.
  f''(1) = 12(1)(-1) = -12

  Therefore: Concave Down

Interval 3: x > 2
  Choose x = 3.
  f''(3) = 12(3)(1) = 36

  Therefore: Concave Up

The sign pattern is:
  + → - → +

Therefore, the concavity changes at both x = 0 and x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FIND THE ACTUAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 0:
  f(0) = 0

Therefore:
  (0, 0) is an inflection point.

At x = 2:
  f(2) = 2⁴ - 4(2³)
  = 16 - 32
  = -16

Therefore:
  (2, -16) is another inflection point.

Final answer:
  Points of inflection: (0, 0) and (2, -16)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. HOW TO RECOGNIZE AN INFLECTION POINT ON A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can often identify an inflection point visually.

Look for a location where the graph changes from:
  Concave Up → Concave Down
or:
  Concave Down → Concave Up

For example:
  ∪ → ∩ or ∩ → ∪

The important thing isn't necessarily whether the graph has a sharp corner or horizontal tangent.

The important thing is:
  The curvature changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CONCAVITY SIGN PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very useful way to remember the process.

Pattern 1:
  + → -
  means: Concave Up → Concave Down
  Therefore, an inflection point exists.

Pattern 2:
  - → +
  means: Concave Down → Concave Up
  Therefore, an inflection point exists.

Pattern 3:
  + → +
  No change. No inflection point.

Pattern 4:
  - → -
  No change. No inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Automatically declaring f''(x) = 0 an inflection point
  Wrong.
  You need to verify a concavity change.

Mistake 2: Forgetting where f''(x) doesn't exist
  These locations can also be candidates.

Mistake 3: Giving only the x-value
  If the problem asks for the point of inflection, give (x, y), not just x.

Mistake 4: Confusing an inflection point with a relative extremum
  An inflection point concerns concavity, while a relative maximum/minimum concerns increasing/decreasing behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                   What you examine    What it tells you
  ──────────────────────────────────────────────────────────────────────────────
  f'(x) > 0                 First derivative    Increasing
  f'(x) < 0                 First derivative    Decreasing
  f''(x) > 0                Second derivative   Concave Up
  f''(x) < 0                Second derivative   Concave Down
  f''(c) = 0                Second derivative   Possible inflection
  Concavity changes         Second derivative   Actual inflection point

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAM STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  "Find the points of inflection."

Think:

  1. Find f''(x)
  2. Solve f''(x) = 0
  3. Find where f''(x) doesn't exist
  4. Test both sides
  5. Check for a sign/concavity change
  6. Calculate f(c)
  7. Write the point (c, f(c))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY IDEAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important rule is:
  Point of Inflection = Point where concavity changes

Possible locations are:
  f''(x) = 0
or:
  f''(x) does not exist

But:
  f''(c) = 0 alone is NOT enough

You must verify:
  Concavity changes on opposite sides of c

And finally:
  Inflection point = (c, f(c))

So the simplest way to remember the entire topic is:

  f''(x) → concavity → change in concavity → point of inflection
  `,
  examples: [
    "f(x) = x³ → f''(x) = 6x, concavity changes at x=0 → inflection point (0,0)",
    "f(x) = x⁴ → f''(x) = 12x², f''(0)=0 but no concavity change → no inflection point",
    "f(x) = x^(1/3) → f''(x) DNE at 0, concavity changes → inflection point (0,0)",
    "f(x) = x⁴ - 4x³ → f''(x) = 12x(x-2), concavity changes at 0 and 2 → inflection points (0,0), (2,-16)",
    "f''(x) > 0 → concave up, f''(x) < 0 → concave down",
    "+ → - or - → + means concavity changes → inflection point",
    "f''(x) = 0 is a candidate, but the concavity must actually change",
  ],
};

export default topic;