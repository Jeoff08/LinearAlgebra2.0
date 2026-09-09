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

The Second Derivative Test is based on the relationship between the second derivative and concavity. The first derivative f'(x) gives the slope of the tangent line at any point, which tells us whether the function is increasing or decreasing. The second derivative f''(x) tells us how that slope is changing it measures the curvature or concavity of the graph. At a critical point where f'(c) = 0, the slope is zero, meaning the tangent is horizontal. By evaluating the second derivative at that point, we can determine whether the graph is concave up or concave down. If f''(c) > 0, the graph is concave up (cup-shaped), so the critical point is a local minimum. If f''(c) < 0, the graph is concave down (cap-shaped), so it is a local maximum. If f''(c) = 0, the concavity is not determined by the second derivative, so the test is inconclusive. This test provides a quick and efficient way to classify critical points without constructing a full sign chart.

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

The Second Derivative Test is summarized by a simple set of rules. If f'(c) = 0 and f''(c) > 0, then the function has a local minimum at c. If f'(c) = 0 and f''(c) < 0, then it has a local maximum. If f''(c) = 0, the test is inconclusive, meaning we cannot determine the nature of the critical point using this test alone. This formula is easy to remember and apply, making the Second Derivative Test a favorite among students and instructors alike. However, it is important to remember that it only applies when f'(c) = 0. You cannot use the second derivative test on points that are not critical points. The formula also highlights the role of concavity: a positive second derivative (concave up) corresponds to a minimum, while a negative second derivative (concave down) corresponds to a maximum.

If f'(c) = 0, then:

  f''(c) > 0 ⇒ Local Minimum
  f''(c) < 0 ⇒ Local Maximum
  f''(c) = 0 ⇒ Test Inconclusive

This is the main rule you should memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES f''(c) > 0 MEAN A MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When f''(c) > 0, the function is concave upward at c. A concave‑up graph is shaped like a bowl ∪, and at the bottom of the bowl, the slope is zero exactly the condition for a critical point. Since the bowl opens upward, any small movement away from c results in a higher function value, so f(c) is lower than all nearby values. This means f(c) is a local minimum. This geometric interpretation makes the rule intuitive: positive concavity means the graph bends upward, so the critical point is at the bottom of a valley. This is why we say f''(c) > 0 implies a local minimum. The shape of the graph confirms the algebraic condition.

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

Similarly, when f''(c) < 0, the function is concave downward at c. A concave‑down graph is shaped like an upside‑down bowl ∩, and at the top of this cap, the slope is zero. Since the cap opens downward, any small movement away from c results in a lower function value, so f(c) is higher than all nearby values. This means f(c) is a local maximum. The geometric interpretation is clear: negative concavity means the graph bends downward, so the critical point is at the top of a hill. This is why f''(c) < 0 implies a local maximum. The shape of the graph provides an intuitive check for the algebraic rule.

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

The first and second derivatives provide complementary information about a function. The first derivative f'(x) tells us the direction of the graph: positive means increasing, negative means decreasing. The second derivative f''(x) tells us about the curvature: positive means concave up, negative means concave down. At a critical point (f'(c) = 0), the first derivative is zero, meaning the graph is momentarily flat. The second derivative then determines whether that flat point is a minimum (concave up, f'' > 0), a maximum (concave down, f'' < 0), or inconclusive (f'' = 0). This relationship is summarized in the table below. Understanding the connection between the first and second derivatives is essential for applying the Second Derivative Test correctly and for understanding the geometry of the graph.

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

Applying the Second Derivative Test involves a straightforward procedure. First, find the first derivative f'(x) and solve f'(x) = 0 to find all critical numbers. Also consider points where f'(x) does not exist but f(x) is defined (though the test may not apply at such points if the second derivative also does not exist). Next, find the second derivative f''(x). Then, evaluate f''(x) at each critical number c. If f''(c) > 0, the critical point is a local minimum; if f''(c) < 0, it is a local maximum; if f''(c) = 0, the test is inconclusive. This procedure is efficient and can classify multiple critical points quickly. However, remember that if f''(c) = 0, you must use the First Derivative Test to determine the nature of the critical point.

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

Let's apply the Second Derivative Test to a simple quadratic function. Consider f(x) = x² - 4x + 3. The first derivative is f'(x) = 2x - 4. Setting this to zero gives x = 2, which is the critical number. The second derivative is f''(x) = 2, which is positive. Evaluating at x = 2 gives f''(2) = 2 > 0, so the test indicates a local minimum. The actual minimum point is (2, f(2)) = (2, -1). This example shows how quickly the test works: we found the critical point, evaluated the second derivative, and classified it immediately. The positive second derivative confirms that the graph is concave up, so the critical point is a minimum. This is the simplest case of the Second Derivative Test.

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

Now let's apply the test to a function that opens downward. For f(x) = -x² + 4x + 1, the first derivative is f'(x) = -2x + 4. Setting this to zero gives x = 2. The second derivative is f''(x) = -2, which is negative. Evaluating at x = 2 gives f''(2) = -2 < 0, so the test indicates a local maximum. The maximum point is (2, 5). This is the mirror image of the previous example: a negative second derivative means concave down, so the critical point is a maximum. The Second Derivative Test works equally well for both maxima and minima, provided f''(c) ≠ 0. This example reinforces the rule: negative second derivative → maximum.

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

The Second Derivative Test is not always conclusive. Consider f(x) = x⁴. The first derivative is f'(x) = 4x³, and setting this to zero gives x = 0. The second derivative is f''(x) = 12x², and evaluating at x = 0 gives f''(0) = 0. According to the test, this is inconclusive. However, by examining the function itself, we know that x⁴ ≥ 0 for all x, with equality only at x = 0. Therefore, f(0) = 0 is actually a local minimum. The Second Derivative Test could not determine this because the second derivative is zero at the critical point. This example is crucial because it shows that "inconclusive" does not mean "no extremum." It simply means we need to use another method, such as the First Derivative Test, to classify the point.

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

Similarly, consider f(x) = -x⁴. The first derivative is f'(x) = -4x³, and the critical number is x = 0. The second derivative is f''(x) = -12x², and f''(0) = 0, so the test is again inconclusive. However, f(x) = -x⁴ ≤ 0 for all x, with equality only at x = 0. Therefore, f(0) = 0 is a local maximum. This example shows that when f''(c) = 0, the critical point could be a maximum, a minimum, or neither. The Second Derivative Test cannot distinguish between these possibilities, so we must turn to the First Derivative Test. These examples emphasize the importance of having multiple tools in your calculus toolkit. When one test fails, another may provide the answer.

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

The Second Derivative Test relies on the concavity at the critical point. If f''(c) > 0, the graph is concave up, which guarantees a minimum. If f''(c) < 0, the graph is concave down, which guarantees a maximum. But when f''(c) = 0, the concavity is not determined by the second derivative. The graph could be concave up, concave down, or have an inflection point. For example, for f(x) = x⁴, the graph is concave up on both sides, so the critical point is a minimum. For f(x) = -x⁴, the graph is concave down on both sides, so it's a maximum. For f(x) = x³, the graph changes concavity at x = 0, so there is neither a maximum nor a minimum (it's an inflection point). In all three cases, f''(0) = 0, yet the behavior is different. Therefore, when f''(c) = 0, the test is inconclusive because the concavity does not provide enough information to classify the critical point. The safest approach is to use the First Derivative Test, which analyzes the sign of f' on both sides.

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

The function f(x) = x³ is the classic example of a critical point that is neither a maximum nor a minimum. Its derivative is f'(x) = 3x², so the critical number is x = 0. The second derivative is f''(x) = 6x, and f''(0) = 0, so the Second Derivative Test is inconclusive. Using the First Derivative Test, we check the sign of f' on both sides: for x < 0, f'(x) > 0; for x > 0, f'(x) > 0. The sign pattern is + → +, meaning the function is increasing on both sides. There is no sign change, so there is no local maximum or minimum at x = 0. This point is an inflection point, where the concavity changes but the function continues to increase. This example reinforces the message: f''(c) = 0 does not guarantee an extremum; it only indicates that the Second Derivative Test cannot decide.

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

Both the First and Second Derivative Tests are used to classify critical points, but they approach the problem differently. The First Derivative Test examines the sign of f'(x) on both sides of the critical point. It asks whether the function changes from increasing to decreasing (maximum) or decreasing to increasing (minimum). This test is reliable and works even when the second derivative is zero or undefined. The Second Derivative Test examines the concavity at the critical point by evaluating f''(c). It is often faster and requires less work because you only need one value, not a whole sign chart. However, it only works when f''(c) ≠ 0. If f''(c) = 0, the test is inconclusive, and you must use the First Derivative Test. In practice, the Second Derivative Test is convenient when it applies, but the First Derivative Test is more robust.

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

This table summarizes the differences between the First and Second Derivative Tests. The First Derivative Test uses f'(x) and checks the sign on both sides of c; it works even if f''(c) = 0 or undefined. The Second Derivative Test uses f''(x) and checks the value at c; it is faster but fails when f''(c) = 0. Both tests can classify critical points as maxima or minima, but the First Derivative Test is more universally applicable. In practice, you should be comfortable with both methods and choose the one that is more convenient for the given function.

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

The Second Derivative Test is often faster because it requires only one evaluation of the second derivative at the critical point, rather than constructing a full sign chart. For example, if f'(x) = 2x - 8, the critical number is x = 4. The second derivative is f''(x) = 2, which is constant and positive. Evaluating at c = 4 gives f''(4) = 2 > 0, so immediately we know it's a local minimum. There is no need to test points on either side of 4. This efficiency is especially valuable when there are multiple critical points; you can classify each one quickly with a single calculation. However, this speed comes at the cost of not working when f''(c) = 0. In such cases, you must fall back to the First Derivative Test, which is more work but always reliable.

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

Let's apply the Second Derivative Test to a function with two critical points. Consider f(x) = x³ - 3x² - 9x + 5. The first derivative is f'(x) = 3x² - 6x - 9 = 3(x - 3)(x + 1), so the critical numbers are x = -1 and x = 3. The second derivative is f''(x) = 6x - 6. Evaluating at x = -1 gives f''(-1) = -12 < 0, so x = -1 is a local maximum. Evaluating at x = 3 gives f''(3) = 12 > 0, so x = 3 is a local minimum. This is a quick and efficient way to classify both critical points. The Second Derivative Test works well when the second derivative is easy to compute and nonzero at all critical points. It saves time compared to constructing a sign chart for the first derivative.

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

After classifying the critical points using the Second Derivative Test, you may need to find the actual coordinates of the extrema. To do this, evaluate the original function at each critical number. For f(x) = x³ - 3x² - 9x + 5, at x = -1, f(-1) = 10, so the local maximum is at (-1, 10). At x = 3, f(3) = -22, so the local minimum is at (3, -22). These coordinates are the points on the graph where the extrema occur. It is important to provide both the x and y values when reporting relative extrema, as the problem often asks for the points. The Second Derivative Test gives the classification, and the function evaluation gives the location.

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

The Second Derivative Test can only be used directly when f'(c) = 0. You must first find a critical point before you can apply the test. You cannot simply calculate f''(x) and look for positive or negative values to claim a maximum or minimum. The correct order is: find f'(x), find critical numbers, then evaluate f''(c). If you skip the critical point step, you may incorrectly classify a point that is not an extremum. This warning is important because it reminds us that the Second Derivative Test is not a standalone test; it is a test applied to critical points. Always verify that f'(c) = 0 before using the test. If f'(c) ≠ 0, the point is not a candidate for a local extremum, and the test does not apply.

The Second Derivative Test can only be used directly when:
  f'(c) = 0

You first need a critical point.

You cannot simply calculate f''(x) and look for positive or negative values to claim a maximum or minimum.

The correct order is:
  f'(c) = 0 → calculate f''(c) → classify

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CONCAVITY CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test is a direct application of the concept of concavity. Recall that f''(x) > 0 means the graph is concave up (like a cup), and f''(x) < 0 means concave down (like a cap). At a critical point where the slope is zero, the graph is horizontal. If the graph is concave up, the horizontal point is at the bottom of a valley, which is a minimum. If concave down, it is at the top of a hill, which is a maximum. This connection makes the test intuitive: the shape of the graph determines the type of extremum. Understanding concavity is essential for applying the Second Derivative Test correctly and for interpreting its results. It also links this test to the broader topic of curve sketching.

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

There are several common mistakes when using the Second Derivative Test. One is thinking that f''(c) = 0 means the critical point is neither a maximum nor a minimum. This is incorrect: the test is inconclusive, meaning we cannot determine the nature of the point using this test. The point could still be a maximum, minimum, or neither. Another mistake is forgetting to find the critical points first and applying the test to non-critical points. Some students also reverse the signs: remember that f''(c) > 0 means minimum, and f''(c) < 0 means maximum. To avoid these errors, always follow the systematic procedure: find f'(x), find critical numbers, find f''(x), evaluate at c, and then classify. If f''(c) = 0, switch to the First Derivative Test. Being aware of these common pitfalls will help you avoid them.

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

Think of the First and Second Derivative Tests as two different ways of looking at the same situation. The First Derivative Test asks: "Is the function going up or down before and after the critical point?" A change from + to - indicates a maximum; a change from - to + indicates a minimum. The Second Derivative Test asks: "What is the concavity at the critical point?" A negative second derivative indicates a maximum; a positive second derivative indicates a minimum. Both tests yield the same classification when they are applicable. The First Derivative Test is more general because it works even when the second derivative is zero or undefined. The Second Derivative Test is faster when it works. Knowing both methods gives you flexibility and allows you to choose the most efficient approach for each problem.

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

For a typical problem that asks you to find and classify critical points, you have two main methods. The First Derivative Test involves finding f'(x), solving f'(x) = 0, creating a sign chart, and then classifying based on sign changes. The Second Derivative Test involves finding f'(x), solving f'(x) = 0, finding f''(x), and then evaluating f'' at each critical number. Both methods are valid, and you should be comfortable with both. If the second derivative is easy to compute and nonzero at all critical points, the Second Derivative Test is usually faster. If f''(c) = 0 or difficult to compute, the First Derivative Test is more reliable. The choice depends on the specific function and the context of the problem.

For a typical problem:
  Find and classify the critical points of f(x).

You can use:

Method 1   First Derivative Test:
  f(x) → f'(x) → f'(x) = 0 → Critical numbers → Sign chart → Maximum/minimum

Method 2   Second Derivative Test:
  f(x) → f'(x) → f'(x) = 0 → Critical numbers → f''(x) → Evaluate f''(c) → Maximum/minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. WHEN SHOULD YOU USE EACH TEST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test is often more convenient when f''(x) is easy to calculate, there are only a few critical points, and f''(c) ≠ 0. In such cases, it provides a quick and efficient classification. The First Derivative Test is especially useful when f''(c) = 0, when f'' is difficult to compute, or when you want a more direct analysis of the increasing/decreasing behavior. The First Derivative Test is also the only option when the function is not twice differentiable at the critical point. In practice, you should know both methods and be able to choose the one that is most appropriate for the problem at hand. Having both tools in your arsenal makes you a more versatile problem solver.

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

This quick reference summarizes the Second Derivative Test. The conditions are simple: if f'(c) = 0 and f''(c) > 0, it's a local minimum; if f'(c) = 0 and f''(c) < 0, it's a local maximum; if f'(c) = 0 and f''(c) = 0, the test is inconclusive. This table is a handy reminder for solving problems. Keep it in mind when you are classifying critical points. The key is to remember that f''(c) > 0 means minimum, f''(c) < 0 means maximum, and f''(c) = 0 means inconclusive. This simple rule is the heart of the Second Derivative Test.

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

The concepts you've covered are now connecting together. You started with the derivative, then learned about increasing/decreasing functions, critical points, the First Derivative Test, and now the Second Derivative Test. This progression shows how each topic builds on the previous one. The Second Derivative Test is a direct application of concavity, which you have also studied. It provides a faster way to classify critical points than the First Derivative Test, but it is not always conclusive. Together, these topics form the foundation for understanding local extrema, which is essential for curve sketching and optimization. The next major idea is concavity and inflection points, because the Second Derivative Test is built directly on the behavior of f''(x). Understanding this flow helps you see the big picture of calculus.

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

The Second Derivative Test is a quick and efficient way to classify critical points. The rules are: if f'(c) = 0 and f''(c) > 0, then f(c) is a local minimum; if f'(c) = 0 and f''(c) < 0, then f(c) is a local maximum; if f''(c) = 0, the test is inconclusive. The test is based on the concept of concavity: f''(c) > 0 means concave up (cup) → minimum; f''(c) < 0 means concave down (cap) → maximum. The Second Derivative Test is often faster than the First Derivative Test, but it does not work when f''(c) = 0. In such cases, you must use the First Derivative Test. The final memory rule is: first derivative = direction, second derivative = curvature. Positive second derivative = bowl = minimum. Negative second derivative = cap = maximum. This simple framework will help you remember and apply the Second Derivative Test effectively.

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