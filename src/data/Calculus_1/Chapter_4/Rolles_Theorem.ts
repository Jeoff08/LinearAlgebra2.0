// filename: rolles-theorem.ts

const topic = {
  id: "rolles-theorem",
  title: "Rolle's Theorem",
  summary:
    "An important theorem in differential calculus stating that if a function is continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then there exists at least one c in (a,b) such that f'(c) = 0.",
  details: `
Rolle's Theorem is an important theorem in differential calculus that tells us when a function must have at least one point where its derivative is zero.

In simple terms:

  If a function starts and ends at the same height, and the function is smooth 
  and continuous between those points, then somewhere in between, the graph 
  must have a horizontal tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. STATEMENT OF ROLLE'S THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem is one of the fundamental results in differential calculus. It establishes a precise condition under which a differentiable function must have a horizontal tangent (a point where the derivative is zero). The theorem requires three conditions to hold simultaneously: continuity on the closed interval, differentiability on the open interval, and equal endpoint values. If a function satisfies all three, then somewhere between the endpoints there is a point where the slope of the tangent line is zero. This means the graph has a local maximum, a local minimum, or a point of inflection with a horizontal tangent. The theorem is not just an abstract result; it has practical applications in optimization, curve sketching, and as a stepping stone to the Mean Value Theorem. Understanding Rolle's Theorem is essential for grasping the relationship between a function's values and its derivative.

Suppose f(x) satisfies three conditions on the interval [a, b].

Condition 1: Continuous on [a, b]
  The function must be continuous on the entire closed interval:
    f is continuous on [a, b]

  This means there are no breaks, holes, jumps, or vertical asymptotes within the interval.

Condition 2: Differentiable on (a, b)
  The function must be differentiable throughout the open interval:
    f is differentiable on (a, b)

  This generally means the graph has no sharp corners, cusps, or other points where the derivative does not exist.

  Notice the difference:
    [a, b] is used for continuity, while (a, b) is used for differentiability.

Condition 3: Equal endpoint values
  The function must have the same value at both endpoints:
    f(a) = f(b)

If all three conditions are satisfied, then there is at least one number c between a and b such that:
  f'(c) = 0

So the complete theorem is:
  f(a) = f(b) ⇒ ∃ c ∈ (a, b) such that f'(c) = 0

provided the continuity and differentiability conditions are satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES ROLLE'S THEOREM MEAN GRAPHICALLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphically, Rolle's Theorem has a very intuitive interpretation. Imagine walking along a smooth curve that starts at a certain height and ends at the same height. Since you begin and end at the same elevation, if the path is continuous and smooth (no jumps or sharp corners), you must at some point have a horizontal moment a point where the tangent line is perfectly flat. This horizontal tangent corresponds to a derivative of zero. The theorem guarantees that such a point exists, though it does not tell us exactly where. The curve may go up and then down, or down and then up, but in either case, to return to the starting height, it must reverse direction at least once, and at that reversal the slope is zero. This geometric understanding makes the theorem more accessible and helps in visualizing why it must be true. The horizontal tangent can occur at a peak, a valley, or even a point where the curve momentarily levels out.

Imagine walking along a smooth road.

You start at a certain elevation and eventually arrive at exactly the same elevation.

If the road is continuous and smooth, then at some point you must have reached a location where the road is temporarily flat.

That flat location corresponds to:
  f'(c) = 0

A horizontal tangent means the slope is zero.

Therefore:
  Horizontal tangent ⇒ f'(c) = 0

for the point we're identifying.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY MUST THERE BE A HORIZONTAL TANGENT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The intuition behind Rolle's Theorem can be made rigorous by considering the function's behavior. If f(a) = f(b), there are two possibilities: either the function is constant on the entire interval, in which case its derivative is zero everywhere, so the conclusion holds trivially. Or the function is not constant, meaning it must rise above or fall below the common endpoint value at some point. If it rises above, then it must eventually come back down to reach the same height at b, so there is a local maximum where the derivative is zero. If it falls below, then it must come back up, so there is a local minimum where the derivative is zero. In either case, by the Extreme Value Theorem and the differentiability condition, there is a point where the tangent is horizontal. This argument shows why the three conditions are sufficient. The theorem does not require the function to be monotonic; it only requires that it returns to the same value.

Suppose f(a) = f(b).

There are two possibilities.

Case 1: The function is constant
  If the function stays at the same height throughout the interval, then:
    f'(x) = 0
  everywhere.
  So Rolle's Theorem is obviously satisfied.

Case 2: The function rises or falls
  If the function moves away from its starting height and eventually returns to the same height, it must change direction somewhere.

  At the turning point, the tangent is horizontal.

  Therefore:
    f'(c) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1: BASIC ROLLE'S THEOREM PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a classic example to see how Rolle's Theorem is applied. Consider f(x) = x² - 4x + 3 on the interval [1, 3]. First, we check the conditions: f is a polynomial, so it is continuous and differentiable everywhere. Next, we evaluate f(1) = 0 and f(3) = 0, so the endpoint values are equal. Since all three conditions are satisfied, Rolle's Theorem applies. We then find the derivative f'(x) = 2x - 4 and set it equal to zero: 2x - 4 = 0, so x = 2. Thus, c = 2 is the point where the tangent is horizontal. This example illustrates the complete process: verify conditions, compute derivative, solve for c. It also shows that the value of c is strictly between the endpoints, as required.

Consider f(x) = x² - 4x + 3 on the interval [1, 3].

Determine whether Rolle's Theorem applies and find the value of c.

Step 1: Check continuity
  Since f(x) is a polynomial, it is continuous everywhere.
  Therefore, it is continuous on [1, 3].
  ✅ Condition 1 is satisfied.

Step 2: Check differentiability
  Polynomial functions are also differentiable everywhere.
  Therefore, f(x) is differentiable on (1, 3).
  ✅ Condition 2 is satisfied.

Step 3: Check the endpoint values
  Calculate:
    f(1) = 1² - 4(1) + 3 = 1 - 4 + 3 = 0

  Now calculate:
    f(3) = 3² - 4(3) + 3 = 9 - 12 + 3 = 0

  Therefore:
    f(1) = f(3)
  ✅ Condition 3 is satisfied.

So Rolle's Theorem applies.

Step 4: Find f'(x)
  Differentiate:
    f'(x) = 2x - 4

  Set the derivative equal to zero:
    2x - 4 = 0

  Therefore:
    2x = 4
    x = 2

  Thus:
    c = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHAT DOES c = 2 MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In the previous example, c = 2 is the point where the graph has a horizontal tangent. To confirm, we can compute f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1. So the horizontal tangent occurs at the point (2, -1). The function starts at height 0 at x = 1, falls to -1 at x = 2, and then rises back to 0 at x = 3. At x = 2, the derivative is zero, meaning the tangent line is horizontal. This is the point where the function changes direction from decreasing to increasing, which is a local minimum. This example demonstrates that the horizontal tangent guaranteed by Rolle's Theorem corresponds to a local extremum. Understanding this connection helps in visualizing the theorem and in solving optimization problems.

It means that at x = 2, the graph has a horizontal tangent.

Let's verify:
  f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1

So the horizontal tangent occurs at:
  (2, -1)

The function starts at height 0, falls to -1, and then returns to height 0.

The point x = 2 is where the graph is momentarily flat.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply Rolle's Theorem to another quadratic function. For f(x) = x² - 6x + 8 on the interval [2, 4], the function is a polynomial, so it is continuous and differentiable. Evaluating f(2) = 4 - 12 + 8 = 0 and f(4) = 16 - 24 + 8 = 0, we see that the endpoints are equal. Therefore, Rolle's Theorem applies. The derivative is f'(x) = 2x - 6, and setting it to zero gives x = 3. Thus, c = 3 is the point where the tangent is horizontal. This example reinforces the pattern: for a quadratic function that opens upward and has equal endpoint values, the horizontal tangent occurs at the vertex, which is the midpoint of the interval. This is a special case, but it illustrates the general principle.

Consider f(x) = x² - 6x + 8 on [2, 4].

Step 1: Continuity
  Polynomial → continuous everywhere.
  ✅

Step 2: Differentiability
  Polynomial → differentiable everywhere.
  ✅

Step 3: Endpoint values
  f(2) = 2² - 6(2) + 8 = 4 - 12 + 8 = 0

  And:
    f(4) = 4² - 6(4) + 8 = 16 - 24 + 8 = 0

  Thus:
    f(2) = f(4)
  ✅

Rolle's Theorem applies.

Step 4: Find c
  Differentiate:
    f'(x) = 2x - 6

  Set equal to zero:
    2x - 6 = 0

  Therefore:
    x = 3

  So c = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ROLLE'S THEOREM VS. MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem and the Mean Value Theorem (MVT) are closely related. In fact, Rolle's Theorem is a special case of the MVT. The MVT states that if f is continuous on [a, b] and differentiable on (a, b), then there exists a c in (a, b) such that f'(c) = (f(b) - f(a))/(b - a). If we add the condition f(a) = f(b), the right-hand side becomes zero, and the MVT reduces exactly to Rolle's Theorem. Thus, Rolle's Theorem is the MVT when the secant line is horizontal. This relationship is important because it shows that Rolle's Theorem is not an isolated result but part of a larger framework. The MVT is a generalization, and understanding Rolle's Theorem makes it easier to grasp the MVT. Many proofs of the MVT use Rolle's Theorem applied to a carefully constructed auxiliary function. This connection is fundamental in calculus.

Rolle's Theorem is actually a special case of the Mean Value Theorem (MVT).

The Mean Value Theorem says:
  f'(c) = (f(b) - f(a))/(b - a)

for some c ∈ (a, b).

Now suppose Rolle's condition is satisfied:
  f(a) = f(b)

Then:
  f(b) - f(a) = 0

Therefore:
  f'(c) = 0/(b - a) = 0

So:
  f'(c) = 0

That's exactly Rolle's Theorem.

Think of it this way:

  Mean Value Theorem: instantaneous slope = average slope
  Rolle's Theorem: If the endpoints have the same height,
    average slope = 0, so instantaneous slope = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. A VERY IMPORTANT POINT: ROLLE'S THEOREM GUARANTEES EXISTENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol ∃ in the theorem means "there exists." Rolle's Theorem guarantees the existence of at least one point c where the derivative is zero. It does not tell us how many such points there are, nor does it specify their exact location. The number of points can vary: there may be exactly one, or there may be several. For example, a sine function on an appropriate interval can have multiple points where the derivative is zero. The theorem only assures us that at least one exists. This is a common source of confusion: students sometimes think the theorem gives a unique c, but it does not. The existence guarantee is powerful because it allows us to make statements about the function's behavior without knowing the exact value of c. In many applications, knowing that such a point exists is enough.

Rolle's Theorem says:
  ∃ c ∈ (a, b) such that f'(c) = 0

The symbol ∃ means "there exists."

Therefore, Rolle's Theorem guarantees that at least one such point exists.

There could be:
  • exactly one,
  • two,
  • three,
  • or many values of c.

The theorem only guarantees at least one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH MORE THAN ONE c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the sine function f(x) = sin x on the interval [0, 2π]. The endpoints are f(0) = 0 and f(2π) = 0, so they are equal. The function is continuous and differentiable everywhere, so all three conditions of Rolle's Theorem are satisfied. The derivative is f'(x) = cos x, and setting it equal to zero gives cos x = 0, which yields x = π/2 and x = 3π/2 within the interval. Thus, there are two values of c: π/2 and 3π/2. This example demonstrates that Rolle's Theorem can guarantee multiple points where the derivative is zero. The theorem does not specify how many; it only guarantees at least one. This is important because in some functions, there may be several horizontal tangents. The sine function is a classic example of this behavior.

Consider a function that starts and ends at the same height but oscillates between them.

It might have several horizontal tangent points.

For example, consider f(x) = sin x on [0, 2π].

Check the endpoints:
  f(0) = 0
  f(2π) = 0

Thus:
  f(0) = f(2π)

The function is continuous and differentiable.

Now:
  f'(x) = cos x

Set equal to zero:
  cos x = 0

Within (0, 2π), we get:
  c = π/2 and c = 3π/2

Therefore, there are two values of c.

This demonstrates that Rolle's Theorem guarantees at least one, not exactly one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHEN ROLLE'S THEOREM DOES NOT APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is essential to recognize when Rolle's Theorem cannot be applied. A common mistake is to only check f(a) = f(b) and ignore the continuity and differentiability conditions. For example, consider f(x) = 1/x on [-1, 1]. This function is not continuous on the interval because it is undefined at x = 0. Even if the endpoint values happened to be equal (they are not in this case), the theorem would still not apply because the continuity condition fails. Rolle's Theorem requires all three conditions to hold simultaneously. If even one condition fails, the conclusion may not be valid. In practice, you should always verify the conditions in order: continuity, differentiability, and then endpoint equality. This systematic approach prevents errors and ensures correct application of the theorem.

This is extremely important.

You cannot simply check whether f(a) = f(b).

You must verify all three conditions.

Example: Discontinuous Function
  Consider f(x) = 1/x on [-1, 1].

  The endpoints are:
    f(-1) = -1
    f(1) = 1

  Here the endpoint values aren't equal anyway.

  But more importantly, the function isn't continuous on [-1, 1] because it is undefined at x = 0.

  Therefore, Rolle's Theorem cannot apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WHERE ENDPOINT VALUES ARE EQUAL BUT ROLLE'S THEOREM STILL FAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The absolute value function is a classic example of a function that satisfies the continuity and endpoint conditions but fails the differentiability condition. Consider f(x) = |x| on [-1, 1]. The endpoints are f(-1) = 1 and f(1) = 1, so they are equal, and the function is continuous. However, f is not differentiable at x = 0 because of the sharp corner. Therefore, Rolle's Theorem does not apply. Interestingly, there is no point where f'(x) = 0: for x < 0, f'(x) = -1, and for x > 0, f'(x) = 1. At x = 0, the derivative does not exist. This example clearly illustrates why the differentiability condition is necessary. If the function has a sharp corner, the theorem's conclusion may fail. Always check differentiability before applying Rolle's Theorem.

Consider f(x) = |x| on [-1, 1].

The endpoint values are:
  f(-1) = 1
  f(1) = 1

So:
  f(-1) = f(1)

The function is continuous.

However, f(x) = |x| is not differentiable at x = 0 because it has a sharp corner.

Therefore, Rolle's Theorem does not apply.

Interestingly, there is no point where f'(x) = 0.

For x < 0:
  f'(x) = -1

For x > 0:
  f'(x) = 1

At x = 0, the derivative doesn't exist.

This example shows why all three conditions are necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ROLLE'S THEOREM PROBLEM-SOLVING TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving problems involving Rolle's Theorem, follow a standard template to ensure you don't miss any steps. Start by checking continuity on the closed interval. Then check differentiability on the open interval. Then evaluate the function at the endpoints to see if they are equal. If all three conditions are satisfied, the theorem applies, and you can find c by setting f'(x) = 0 and solving for x. Make sure that any solutions you find are strictly inside the interval. This template is reliable and works for a wide range of functions. It also helps in writing clear, organized solutions that demonstrate your understanding of the theorem. Remember to explicitly state that Rolle's Theorem applies and to give the value(s) of c.

When given a problem asking you to verify Rolle's Theorem, use this order:

Step 1   Continuity
  Ask: Is f(x) continuous on [a, b]?
  If yes: Continuous on [a, b]

Step 2   Differentiability
  Ask: Is f(x) differentiable on (a, b)?
  If yes: Differentiable on (a, b)

Step 3   Equal endpoints
  Calculate f(a) and f(b).
  Check whether f(a) = f(b).

Step 4   Find c
  If all three conditions are satisfied:
    f'(x) = 0
  Solve for x.
  Any solution satisfying a < c < b is a valid Rolle's Theorem value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common mistakes that students make when applying Rolle's Theorem. One is only checking f(a) = f(b) and ignoring the continuity and differentiability conditions. This can lead to incorrect conclusions. Another mistake is including the endpoints when finding c; Rolle's Theorem requires c to be strictly between a and b, so c cannot equal a or b. A third mistake is finding the derivative before verifying the conditions. While this is not logically incorrect, it is better to check the conditions first to ensure the theorem applies. A fourth mistake is thinking that f'(c) = 0 automatically means Rolle's Theorem applies. The theorem is about guaranteeing such a point based on the conditions, not about finding a point where the derivative is zero. Being aware of these common errors will help you avoid them and apply the theorem correctly.

❌ Mistake 1: Only checking f(a) = f(b)
  Equal endpoint values alone are not sufficient.
  You must also check continuity and differentiability.

❌ Mistake 2: Checking endpoints for c
  Rolle's Theorem requires c ∈ (a, b).
  Therefore, c ≠ a and c ≠ b.

❌ Mistake 3: Finding f'(x) before checking the conditions
  You can differentiate the function, but logically the theorem requires you to establish its conditions first.
  A good solution explicitly verifies all three conditions.

❌ Mistake 4: Thinking f'(c) = 0 automatically means Rolle's Theorem applies
  A function can have f'(c) = 0 without satisfying Rolle's conditions.
  Rolle's Theorem is about guaranteeing such a point based on the three conditions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem is a bridge between the values of a function and the values of its derivative. It tells us that if a function starts and ends at the same height and is smooth between those points, then there is at least one point where the slope is zero. This is a powerful statement because it connects global behavior (the endpoints) to local behavior (the derivative at a point). The theorem is used in many areas of calculus, including curve sketching, optimization, and as a stepping stone to the Mean Value Theorem. It also helps in proving other important results, such as the Fundamental Theorem of Calculus. Understanding Rolle's Theorem gives you insight into how functions behave and why derivatives are useful. It is a cornerstone of differential calculus.

Rolle's Theorem connects the values of a function with its derivative.

You start with:
  f(a) = f(b)

The endpoints are at the same height.

If the function is continuous and differentiable, then:
  ∃ c ∈ (a, b) : f'(c) = 0

In visual terms:
  Same starting and ending height ⇒ somewhere in between, slope is zero

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key requirements and conclusion of Rolle's Theorem. The three conditions must all be satisfied: continuity on the closed interval, differentiability on the open interval, and equal endpoint values. The conclusion is that there exists at least one point c in the open interval where the derivative is zero. This is a concise way to remember the theorem. The geometric interpretation is that a smooth curve that starts and ends at the same height must have a horizontal tangent somewhere in between. This summary is useful for quick reference when solving problems.

  Requirement                     |  Meaning
  ─────────────────────────────────┼─────────────────────────────────────────
  f continuous on [a, b]         |  No breaks, holes, or jumps
  f differentiable on (a, b)     |  No corners/cusps in the interior
  f(a) = f(b)                    |  Same starting and ending height
  f'(c) = 0                      |  Horizontal tangent exists somewhere inside

The formula to memorize:
  f(a) = f(b) ⇒ ∃ c ∈ (a, b) such that f'(c) = 0

Memory trick:
  Same height at both ends + smooth path = somewhere in between, the graph is flat.

Rolle's Theorem is also a key stepping stone to the Mean Value Theorem, which you'll encounter immediately after this topic.
  `,
  examples: [
    "f(x) = x² - 4x + 3 on [1,3] → f(1)=f(3)=0, f'(x)=2x-4, c=2",
    "f(x) = x² - 6x + 8 on [2,4] → f(2)=f(4)=0, f'(x)=2x-6, c=3",
    "f(x) = sin x on [0,2π] → f(0)=f(2π)=0, f'(x)=cos x, c=π/2, 3π/2",
    "f(x) = |x| on [-1,1] → f(-1)=f(1)=1 but not differentiable at 0 → fails",
    "f(x) = 1/x on [-1,1] → discontinuous at 0 → fails",
    "Rolle's Theorem requires: continuous, differentiable, f(a)=f(b)",
    "∃ c ∈ (a,b) such that f'(c) = 0",
  ],
};

export default topic;