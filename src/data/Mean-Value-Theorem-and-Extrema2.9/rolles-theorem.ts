const topic = {
  id: "rolles-theorem",
  title: "Rolle's Theorem",
  summary:
    "Definition of Rolle's Theorem, conditions, applications, and relationship to the Mean Value Theorem.",
  details: `
Rolle's Theorem is a special theorem in Calculus that tells us that, under certain conditions, a function must have at least one point where its tangent line is horizontal.

In simple terms: If a function starts and ends at the same height, and the graph is continuous and differentiable in between, then somewhere in between it must have a horizontal tangent.

The main formula is: f(a) = f(b) ⇒ ∃ c ∈ (a, b) such that f'(c) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE THREE CONDITIONS OF ROLLE'S THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Rolle's Theorem to apply, three conditions must be satisfied.

Suppose f(x) is defined on [a, b].

Condition 1: Continuous on [a, b]
  The function must be continuous on the entire closed interval: f is continuous on [a, b].
  There can be no holes, jumps, or breaks.

Condition 2: Differentiable on (a, b)
  The function must be differentiable throughout the open interval: f is differentiable on (a, b).
  This means the derivative must exist at every interior point.

Condition 3: Equal endpoint values
  The function must have the same value at both endpoints: f(a) = f(b).
  This is the special condition that makes Rolle's Theorem work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE COMPLETE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem can be written as:

  f is continuous on [a, b]
  f is differentiable on (a, b)
  f(a) = f(b)

Then there is at least one number c such that: c ∈ (a, b) and f'(c) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHAT DOES f'(c) = 0 MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that the derivative represents the slope of the tangent line.

If f'(c) = 0, then the tangent line has slope zero.

A horizontal line has slope: m = 0

Therefore: f'(c) = 0 means the graph has a horizontal tangent at x = c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES ROLLE'S THEOREM MAKE SENSE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a continuous curve that starts at height 5 and ends at height 5.

Since the graph begins and ends at the same height, the curve must somehow turn around.

At the top of the curve, the tangent becomes horizontal.

Therefore: f'(c) = 0 for some point between a and b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 4x + 3 on [1, 3]

We want to determine whether Rolle's Theorem applies.

Step 1: Check continuity
  Since f(x) is a polynomial, it is continuous everywhere.
  Therefore: Continuous on [1, 3].

Step 2: Check differentiability
  Polynomials are also differentiable everywhere.
  Therefore: Differentiable on (1, 3).

Step 3: Check the endpoint values
  f(1) = 1² - 4(1) + 3 = 1 - 4 + 3 = 0
  f(3) = 3² - 4(3) + 3 = 9 - 12 + 3 = 0

Therefore: f(1) = f(3).

All three conditions are satisfied. So Rolle's Theorem applies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FIND THE VALUE OF c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now find the point where: f'(c) = 0

First calculate the derivative: f'(x) = 2x - 4

Set it equal to zero: 2c - 4 = 0 → 2c = 4 → c = 2

Since 1 < 2 < 3, we have c ∈ (1, 3).

Therefore, Rolle's Theorem is satisfied at c = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHAT DOES THIS MEAN GRAPHICALLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x² - 4x + 3 on [1, 3], the endpoints have the same height: f(1) = f(3) = 0.

The graph looks like a valley.

At x = 2, the graph has a horizontal tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ROLLE'S THEOREM IS RELATED TO LOCAL EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common situation is: f(a) = f(b) and the function moves upward and then downward, or downward and then upward.

At the turning point, we often have: f'(c) = 0.

However, remember that Rolle's Theorem doesn't necessarily say that c must be a maximum or minimum. It only guarantees: f'(c) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROLLE'S THEOREM DOES NOT SAY c IS UNIQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important detail: Rolle's Theorem says at least one c. It does not say there is exactly one.

A function can have multiple points where f'(c) = 0.

There may be several horizontal tangents. Rolle's Theorem only guarantees that at least one exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH MULTIPLE VALUES OF c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = sin(x) on [0, 2π]

Check endpoints: f(0) = sin(0) = 0 and f(2π) = sin(2π) = 0

Therefore: f(0) = f(2π)

The function is continuous and differentiable. So Rolle's Theorem applies.

Differentiate: f'(x) = cos(x)

Set equal to zero: cos(c) = 0

Within (0, 2π), we get: c = π/2 and c = 3π/2

So there are two values of c.

This demonstrates that Rolle's Theorem guarantees at least one, not necessarily exactly one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN ROLLE'S THEOREM DOES NOT APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All three conditions are necessary.

If even one condition fails, you cannot use Rolle's Theorem.

Example: Different Endpoint Values
  f(x) = x² on [0, 2] is continuous and differentiable.
  But f(0) = 0 while f(2) = 4.
  Therefore: f(0) ≠ f(2). So Rolle's Theorem does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: NOT CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function with a hole or jump.

If the function is not continuous on [a, b], then Rolle's Theorem cannot be used.

Example: f(x) = 1/x on [-1, 1]

The function is undefined at x = 0.

Therefore, it is not continuous on the interval.

So: Rolle's Theorem does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: NOT DIFFERENTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x| on [-1, 1]

Check the endpoint values: f(-1) = 1 and f(1) = 1 → f(-1) = f(1)

The function is continuous.

However, f(x) = |x| is not differentiable at x = 0 because it has a sharp corner.

Therefore: Rolle's Theorem does not apply.

Even though the endpoint values are equal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ROLLE'S THEOREM VS. MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem is actually a special case of the Mean Value Theorem (MVT).

Mean Value Theorem: The MVT says there exists c ∈ (a, b) such that:
  f'(c) = [f(b) - f(a)]/(b - a)

If f(a) = f(b), then f(b) - f(a) = 0.

So: f'(c) = 0/(b - a) = 0

That's exactly Rolle's Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of it like this: Rolle's Theorem is a special case of the Mean Value Theorem because f(a) = f(b) causes the average rate of change to become zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope of the secant line between the endpoints is: [f(b) - f(a)]/(b - a)

If f(a) = f(b), then [f(b) - f(a)]/(b - a) = 0

So the secant line is horizontal.

Rolle's Theorem says that somewhere between a and b, the tangent line has the same slope: f'(c) = 0

In other words: Horizontal secant → Horizontal tangent somewhere inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ROLLE'S THEOREM PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a problem asks: "Verify Rolle's Theorem and find c," use this exact process.

Step 1: Check continuity
  State: f is continuous on [a, b]

Step 2: Check differentiability
  State: f is differentiable on (a, b)

Step 3: Check endpoint values
  Calculate f(a) and f(b). Then verify: f(a) = f(b)

Step 4: Find the derivative
  Calculate: f'(x)

Step 5: Set the derivative equal to zero
  f'(c) = 0. Solve for c.

Step 6: Check that c is inside the interval
  Verify: a < c < b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FULL EXAM-STYLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Verify Rolle's Theorem for f(x) = x² - 6x + 8 on [2, 4] and find c.

Solution:

Continuity: f(x) is a polynomial, so it is continuous on [2, 4].

Differentiability: Since f(x) is a polynomial, it is differentiable on (2, 4).

Endpoint values: f(2) = 4 - 12 + 8 = 0 and f(4) = 16 - 24 + 8 = 0

Thus: f(2) = f(4).

Therefore, all conditions of Rolle's Theorem are satisfied.

Now differentiate: f'(x) = 2x - 6

Set: f'(c) = 0 → 2c - 6 = 0 → 2c = 6 → c = 3

Since 2 < 3 < 4, the required value is: c = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting the endpoint condition
  You must verify: f(a) = f(b)

❌ Mistake 2: Checking differentiability at the endpoints
  Rolle's Theorem requires: continuous on [a, b] but differentiable on (a, b).
  Differentiability is required only in the interior.

❌ Mistake 3: Finding f'(x) = 0 without checking conditions
  Finding f'(c) = 0 alone does not prove Rolle's Theorem applies.
  You must verify all three conditions first.

❌ Mistake 4: Assuming c is always a maximum or minimum
  Rolle's Theorem only guarantees: f'(c) = 0.
  It doesn't necessarily tell you that c is an absolute or local extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT VOCABULARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Term: Continuous
Meaning: No breaks, holes, or jumps

Term: Differentiable
Meaning: Derivative exists

Term: Closed interval
Meaning: [a, b], endpoints included

Term: Open interval
Meaning: (a, b), endpoints excluded

Term: Horizontal tangent
Meaning: Tangent slope is 0

Term: Secant line
Meaning: Line connecting two points

Term: Critical number
Meaning: f'(x) = 0 or f' undefined

Term: Rolle's c
Meaning: Interior point where f'(c) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Rolle's Theorem, remember:

  • Same Height at Both Ends ⇒ Horizontal Tangent Somewhere in Between.
  • But this only works when: Continuous on [a, b], Differentiable on (a, b), and f(a) = f(b).
  • Then: ∃ c ∈ (a, b) : f'(c) = 0.

The three conditions:
  • Continuous
  • Differentiable
  • Equal endpoint values

The conclusion: f'(c) = 0.

Memory trick: "Same endpoints → flat point somewhere between."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem is a fundamental result that guarantees the existence of a horizontal tangent under specific conditions.

Key concepts covered:

  ✓ The Three Conditions
  ✓ The Complete Theorem
  ✓ Geometric Interpretation
  ✓ Basic Examples
  ✓ Finding the Value of c
  ✓ Multiple Values of c
  ✓ When Rolle's Theorem Does Not Apply
  ✓ Rolle's Theorem vs. Mean Value Theorem
  ✓ Step-by-Step Procedure
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = x² - 4x + 3 on [1,3] → c = 2",
    "f(x) = sin(x) on [0,2π] → c = π/2, 3π/2",
    "f(x) = x² on [0,2] → f(0)≠f(2) → Rolle's Theorem does not apply",
    "f(x) = 1/x on [-1,1] → not continuous → Rolle's Theorem does not apply",
    "f(x) = |x| on [-1,1] → f(-1)=f(1) but not differentiable → does not apply",
    "f(x) = x² - 6x + 8 on [2,4] → c = 3",
    "Rolle's Theorem: f(a)=f(b) ⇒ ∃ c∈(a,b): f'(c)=0",
    "Continuous on [a,b], Differentiable on (a,b), f(a)=f(b)",
    "Rolle's Theorem is a special case of MVT",
    "Horizontal secant → Horizontal tangent somewhere inside",
    "At least one c (not necessarily unique)",
    "f'(c)=0 means horizontal tangent",
    "Same endpoints → flat point between",
  ],
};

export default topic;