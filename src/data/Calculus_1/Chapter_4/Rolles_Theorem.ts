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

When given a problem asking you to verify Rolle's Theorem, use this order:

Step 1 — Continuity
  Ask: Is f(x) continuous on [a, b]?
  If yes: Continuous on [a, b]

Step 2 — Differentiability
  Ask: Is f(x) differentiable on (a, b)?
  If yes: Differentiable on (a, b)

Step 3 — Equal endpoints
  Calculate f(a) and f(b).
  Check whether f(a) = f(b).

Step 4 — Find c
  If all three conditions are satisfied:
    f'(x) = 0
  Solve for x.
  Any solution satisfying a < c < b is a valid Rolle's Theorem value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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