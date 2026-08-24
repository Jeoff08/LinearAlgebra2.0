// filename: second-derivative-test.ts

const topic = {
  id: "second-derivative-test",
  title: "Second Derivative Test",
  summary:
    "A method to determine whether a critical point is a local maximum or minimum using the second derivative: f''(c) > 0 means local minimum, f''(c) < 0 means local maximum, and f''(c) = 0 is inconclusive.",
  details: `
The Second Derivative Test is a method used to determine whether a critical point is a local maximum, a local minimum, or sometimes inconclusive.

It is closely related to the First Derivative Test, but instead of examining whether f'(x) changes from positive to negative or negative to positive, we examine the second derivative:
  f''(x)

The second derivative tells us about the concavity of the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember:
  f'(x) = slope of the graph
while:
  f''(x) = how the slope is changing.

The Second Derivative Test uses this information at a critical point.

Suppose:
  f'(c) = 0

Then calculate:
  f''(c)

There are three possibilities.

  If f''(c) > 0, then f(c) is a local minimum.
  If f''(c) < 0, then f(c) is a local maximum.
  If f''(c) = 0, the test is inconclusive.

That last case is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SECOND DERIVATIVE TEST FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f'(c) = 0, then:

  f''(c) > 0 ⇒ Local Minimum
  f''(c) < 0 ⇒ Local Maximum
  f''(c) = 0 ⇒ Test Inconclusive

This is the main rule you should memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES f''(c) > 0 MEAN A MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When f''(x) > 0, the graph is concave upward.

A concave-up graph looks approximately like:
  ∪

Think of a bowl.

If the critical point is at the bottom of the bowl, it is a local minimum.

Therefore:
  f''(c) > 0 ⇒ Local Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES f''(c) < 0 MEAN A MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When f''(x) < 0, the graph is concave downward.

It looks approximately like:
  ∩

Think of an upside-down bowl.

If the critical point is at the top, it is a local maximum.

Therefore:
  f''(c) < 0 ⇒ Local Maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONNECTION BETWEEN FIRST AND SECOND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first derivative tells us:
  Is the function increasing or decreasing?

The second derivative tells us:
  How is the slope changing?

So:

  Derivative        |  What it tells us
  ───────────────────┼─────────────────────────────────
  f'(x)             |  Increasing/decreasing
  f''(x)            |  Concavity
  f'(c) = 0         |  Critical point
  f''(c) > 0        |  Local minimum
  f''(c) < 0        |  Local maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO APPLY THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow these steps.

Step 1: Find the first derivative
  Calculate f'(x).

Step 2: Find the critical numbers
  Solve f'(x) = 0.
  Also consider points where f'(x) does not exist, provided f(x) is defined there.

Step 3: Find the second derivative
  Calculate f''(x).

Step 4: Evaluate the second derivative at each critical number
  Calculate f''(c).

Step 5: Classify the critical point
  If f''(c) > 0, then Local Minimum.
  If f''(c) < 0, then Local Maximum.
  If f''(c) = 0, then Inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1: LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x² - 4x + 3

Find and classify the critical point.

Step 1: Find f'(x)
  f'(x) = 2x - 4

Set:
  f'(x) = 0

Therefore:
  2x - 4 = 0

So:
  x = 2

Thus:
  c = 2

Step 2: Find the Second Derivative
  Differentiate:
    f'(x) = 2x - 4

Therefore:
  f''(x) = 2

Evaluate at c = 2:
  f''(2) = 2

Since 2 > 0, the Second Derivative Test tells us:
  x = 2 is a local minimum.

Step 3: Find the Minimum Point
  Calculate:
    f(2) = 2² - 4(2) + 3
    = 4 - 8 + 3
    = -1

Therefore, the local minimum point is:
  (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2: LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -x² + 4x + 1

Step 1: First derivative
  f'(x) = -2x + 4

Set equal to zero:
  -2x + 4 = 0

Therefore:
  x = 2

Step 2: Second derivative
  f''(x) = -2

Therefore:
  f''(2) = -2

Since -2 < 0, we conclude:
  x = 2 is a local maximum.

Step 3: Find the point
  f(2) = -(2)² + 4(2) + 1
  = -4 + 8 + 1
  = 5

Therefore:
  (2, 5) is the local maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3: SECOND DERIVATIVE TEST IS INCONCLUSIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x⁴

Step 1: First derivative
  f'(x) = 4x³

Set equal to zero:
  4x³ = 0

Therefore:
  x = 0

So:
  c = 0

Step 2: Second derivative
  f''(x) = 12x²

Evaluate at 0:
  f''(0) = 12(0)² = 0

Therefore:
  f''(0) = 0

The Second Derivative Test says:
  Inconclusive

But this does not mean there is no extremum.

We need another method.

Looking at f(x) = x⁴, we know that:
  f(x) ≥ 0

for every x.

Therefore:
  f(0) = 0

is actually a local minimum.

So:
  x = 0 is a local minimum

even though the Second Derivative Test could not determine it.

This is why inconclusive does not mean "neither."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ANOTHER INCONCLUSIVE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = -x⁴

First derivative:
  f'(x) = -4x³

Critical number:
  x = 0

Second derivative:
  f''(x) = -12x²

Therefore:
  f''(0) = 0

Again, the test is inconclusive.

However, f(x) = -x⁴ ≤ 0.

So:
  f(0) = 0

is actually a local maximum.

Thus:
  Second derivative test inconclusive

doesn't tell us that the point isn't an extremum.

It simply tells us:
  This particular test cannot decide.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY IS THE TEST INCONCLUSIVE WHEN f''(c) = 0?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative measures concavity.

If f''(c) > 0, we have strong evidence of concave-up behavior.

If f''(c) < 0, we have strong evidence of concave-down behavior.

But if f''(c) = 0, the graph may have:
  • a minimum,
  • a maximum,
  • or neither.

Therefore, we need another method.

The safest alternative is the First Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WHERE f''(c) = 0 AND THERE IS NO EXTREMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³

First derivative:
  f'(x) = 3x²

Critical number:
  x = 0

Second derivative:
  f''(x) = 6x

Therefore:
  f''(0) = 0

The Second Derivative Test is inconclusive.

Now use the First Derivative Test.

For x < 0:
  f'(x) > 0

For x > 0:
  f'(x) > 0

So the sign pattern is:
  + → +

Therefore:
  x = 0 is neither a local maximum nor a local minimum.

Again, this demonstrates why f''(c) = 0 does not give a definite answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SECOND DERIVATIVE TEST VS. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Both tests can classify local extrema.

First Derivative Test:
  Look at f'(x) on both sides of c.
  It asks: Does the function change from increasing to decreasing, or decreasing to increasing?

Second Derivative Test:
  Look at f''(c).
  It asks: Is the graph concave upward or downward at the critical point?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature                   First Derivative Test      Second Derivative Test
  ─────────────────────────────────────────────────────────────────────────────────────
  Uses                      f'(x)                      f''(x)
  Checks                    Sign before and after c    Value at c
  + → - = max               f''(c) < 0 = max
  - → + = min               f''(c) > 0 = min
  Can handle f''(c) = 0     Yes                        Inconclusive if f''(c) = 0
  Usually                   More work                  Often faster

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY IS THE SECOND DERIVATIVE TEST FASTER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have:
  f'(x) = 2x - 8

You find:
  c = 4

Now calculate:
  f''(x) = 2

Therefore:
  f''(4) = 2 > 0

Immediately:
  Local minimum

You don't need to construct a complete sign chart.

That's one major advantage of the Second Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH MULTIPLE CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x² - 9x + 5

First derivative:
  f'(x) = 3x² - 6x - 9

Factor:
  f'(x) = 3(x - 3)(x + 1)

Critical numbers:
  x = -1, x = 3

Now find the second derivative:
  f''(x) = 6x - 6

At x = -1:
  f''(-1) = 6(-1) - 6 = -12

Since -12 < 0, we have:
  x = -1 is a local maximum.

At x = 3:
  f''(3) = 6(3) - 6 = 12

Since 12 > 0, we have:
  x = 3 is a local minimum.

So we can classify both critical points quickly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FINDING THE ACTUAL COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that the Second Derivative Test gives us the type of critical point, but you may also need the actual coordinates.

For f(x) = x³ - 3x² - 9x + 5:

At x = -1:
  f(-1) = (-1)³ - 3(-1)² - 9(-1) + 5
  = -1 - 3 + 9 + 5
  = 10

Therefore:
  (-1, 10) is the local maximum.

At x = 3:
  f(3) = 27 - 27 - 27 + 5
  = -22

Therefore:
  (3, -22) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT WARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test can only be used directly when:
  f'(c) = 0

You first need a critical point.

You cannot simply calculate f''(x) and look for positive or negative values to claim a maximum or minimum.

The correct order is:
  f'(c) = 0 → calculate f''(c) → classify

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CONCAVITY CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test comes directly from the concept of concavity.

Concave upward:
  If f''(x) > 0, the graph is concave upward: ∪
  At a critical point, this corresponds to a local minimum.

Concave downward:
  If f''(x) < 0, the graph is concave downward: ∩
  At a critical point, this corresponds to a local maximum.

Therefore:
  f''(c) > 0 ⇒ minimum
  f''(c) < 0 ⇒ maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Thinking f''(c) = 0 means neither
  Wrong.
  It means: The test is inconclusive.
  The point could still be a maximum, minimum, or neither.

Mistake 2: Forgetting to find critical points first
  You must first solve f'(x) = 0.
  Then evaluate f''(c).

Mistake 3: Reversing the signs
  Remember:
    f''(c) > 0 ⇒ Minimum
  and:
    f''(c) < 0 ⇒ Maximum

A useful memory trick:
  Positive = Bowl = Bottom = Minimum
  + → ∪ → MIN

  Negative = Cap = Top = Maximum
  - → ∩ → MAX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FIRST DERIVATIVE TEST VS. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of them as two different ways of looking at the same situation.

First Derivative Test asks:
  "Is the function going up or down before and after the critical point?"
  + → - = MAX
  - → + = MIN

Second Derivative Test asks:
  "What is the concavity at the critical point?"
  f''(c) < 0 = MAX
  f''(c) > 0 = MIN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMPLETE PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a typical problem:
  Find and classify the critical points of f(x).

You can use:

Method 1 — First Derivative Test:
  f(x) → f'(x) → f'(x) = 0 → Critical numbers → Sign chart → Maximum/minimum

Method 2 — Second Derivative Test:
  f(x) → f'(x) → f'(x) = 0 → Critical numbers → f''(x) → Evaluate f''(c) → Maximum/minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. WHEN SHOULD YOU USE EACH TEST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test is often convenient when:
  • f''(x) is easy to calculate,
  • there are only a few critical points,
  • and f''(c) ≠ 0.

The First Derivative Test is especially useful when:
  • f''(c) = 0,
  • you want to directly analyze increasing/decreasing behavior,
  • or you want a more definitive sign-based analysis.

In practice, you should know both methods.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Condition                   Result
  ────────────────────────────────────────────
  f'(c) = 0, f''(c) > 0       Local Minimum
  f'(c) = 0, f''(c) < 0       Local Maximum
  f'(c) = 0, f''(c) = 0       Inconclusive

And remember:
  f''(c) > 0 ⇒ MIN
  f''(c) < 0 ⇒ MAX
  f''(c) = 0 ⇒ INCONCLUSIVE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. CONNECTION TO YOUR PREVIOUS TOPICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concepts you've covered are now connecting together:

  Derivative
    ↓
  Increasing/Decreasing Functions
    ↓
  Critical Points
    ↓
  First Derivative Test
    ↓
  Second Derivative Test
    ↓
  Local Max/Min
    ↓
  Absolute Extrema

And the next major idea is concavity and inflection points, because the Second Derivative Test is built directly on the behavior of f''(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Final memory rule:
  First derivative = direction.
  Second derivative = curvature.

  f'(x) > 0 ⇒ UP
  f'(x) < 0 ⇒ DOWN
  f''(x) > 0 ⇒ BOWL ⇒ MIN
  f''(x) < 0 ⇒ CAP ⇒ MAX

  The Second Derivative Test is a fast way to classify critical points, but remember that if f''(c) = 0, the test is inconclusive and you should use the First Derivative Test instead.
  `,
  examples: [
    "f(x) = x² - 4x + 3 → f'(x) = 2x - 4, c = 2, f''(x) = 2 > 0 → local min at (2,-1)",
    "f(x) = -x² + 4x + 1 → f'(x) = -2x + 4, c = 2, f''(x) = -2 < 0 → local max at (2,5)",
    "f(x) = x⁴ → f'(x) = 4x³, c = 0, f''(0) = 0 → inconclusive (actually local min)",
    "f(x) = -x⁴ → f'(x) = -4x³, c = 0, f''(0) = 0 → inconclusive (actually local max)",
    "f(x) = x³ → f'(x) = 3x², c = 0, f''(0) = 0 → inconclusive (neither)",
    "f(x) = x³ - 3x² - 9x + 5 → f''(-1) = -12 → local max, f''(3) = 12 → local min",
    "f''(c) > 0 → MIN, f''(c) < 0 → MAX, f''(c) = 0 → INCONCLUSIVE",
  ],
};

export default topic;