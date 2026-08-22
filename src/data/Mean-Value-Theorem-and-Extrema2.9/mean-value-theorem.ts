const topic = {
  id: "mean-value-theorem",
  title: "Mean Value Theorem (MVT)",
  summary:
    "Definition of the Mean Value Theorem, conditions, applications, and relationship to Rolle's Theorem.",
  details: `
The Mean Value Theorem (MVT) is one of the most important theorems in Differential Calculus.

It connects the average rate of change of a function over an interval with the instantaneous rate of change at some point inside that interval.

In simple terms: If a function is continuous and differentiable under the required conditions, there is at least one point where the instantaneous rate of change equals the average rate of change.

The central formula is: f'(c) = [f(b) - f(a)]/(b - a) where c ∈ (a, b).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a car travels from one location to another.

If the car travels 100 km in 2 hours, then its average speed is: 100/2 = 50 km/h

The Mean Value Theorem tells us that, assuming the motion is continuous and differentiable, there must have been at least one instant when the car's instantaneous speed was exactly: 50 km/h.

That's the basic idea behind the theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FORMAL STATEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) satisfies:

Condition 1 — Continuous on [a, b]: f is continuous on [a, b]

Condition 2 — Differentiable on (a, b): f is differentiable on (a, b)

then there exists at least one number c ∈ (a, b) such that:

  f'(c) = [f(b) - f(a)]/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHAT IS THE AVERAGE RATE OF CHANGE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average rate of change from x = a to x = b is: [f(b) - f(a)]/(b - a)

This is the slope of the secant line connecting (a, f(a)) and (b, f(b)).

The secant line describes the function's overall change between the two endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT IS THE INSTANTANEOUS RATE OF CHANGE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The instantaneous rate of change is represented by the derivative: f'(x)

At a particular point x = c: f'(c) is the slope of the tangent line at that point.

Therefore, the MVT says: Average rate of change = Instantaneous rate of change at least at one point c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE CENTRAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important equation is: f'(c) = [f(b) - f(a)]/(b - a)

You can think of it as: Instantaneous slope = Average slope where c ∈ (a, b).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONDITIONS OF THE MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two main conditions.

Condition 1: The function must be continuous on the closed interval: [a, b]

Condition 2: The function must be differentiable on the open interval: (a, b)

If both conditions are satisfied, the MVT guarantees at least one c where: f'(c) = [f(b) - f(a)]/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the value of c guaranteed by the Mean Value Theorem for f(x) = x² on [1, 3].

Step 1: Check continuity
  Since f(x) = x² is a polynomial, it is continuous everywhere. Therefore: Continuous on [1, 3].

Step 2: Check differentiability
  Polynomials are differentiable everywhere. Therefore: Differentiable on (1, 3).

So the MVT applies.

Step 3: Calculate the average rate of change
  a = 1, b = 3
  f(1) = 1² = 1, f(3) = 3² = 9
  [f(3) - f(1)]/(3 - 1) = (9 - 1)/2 = 8/2 = 4
  So: Average rate of change = 4

Step 4: Find the derivative: f'(x) = 2x

Step 5: Set the derivative equal to the average rate
  f'(c) = 4 → 2c = 4 → c = 2

Since 1 < 2 < 3, the value is valid. Therefore: c = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT DOES THIS MEAN GRAPHICALLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x² between x = 1 and x = 3, the secant line has slope 4.

At x = 2, the tangent line also has slope 4.

So: Secant slope = Tangent slope.

This is exactly what the Mean Value Theorem guarantees.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The MVT says: Somewhere between a and b, the tangent line is parallel to the secant line connecting the endpoints.

The secant slope is: [f(b) - f(a)]/(b - a)

The tangent slope is: f'(c)

Therefore: f'(c) = [f(b) - f(a)]/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MVT AND ROLLE'S THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rolle's Theorem and the Mean Value Theorem are closely connected.

Rolle's Theorem: If f(a) = f(b), then f'(c) = 0.

Mean Value Theorem: In general, f'(c) = [f(b) - f(a)]/(b - a).

Rolle's Theorem is actually a special case of the MVT.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW DOES ROLLE'S THEOREM COME FROM MVT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with the MVT: f'(c) = [f(b) - f(a)]/(b - a)

Suppose f(a) = f(b). Then f(b) - f(a) = 0.

Therefore: f'(c) = 0/(b - a) = 0.

That's exactly Rolle's Theorem.

Therefore: Rolle's Theorem is a special case of MVT.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the value of c for f(x) = x³ on [1, 4].

Step 1: Average rate of change
  f(4) = 64, f(1) = 1
  [64 - 1]/(4 - 1) = 63/3 = 21
  So: Average rate = 21

Step 2: Find the derivative: f'(x) = 3x²

Set: f'(c) = 21 → 3c² = 21 → c² = 7 → c = ±√7

But c must be inside (1, 4). Since √7 ≈ 2.646 and -√7 < 1, the valid value is: c = √7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MVT AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem has an important interpretation in physics.

Suppose s(t) is a position function.

The average velocity over [t₁, t₂] is: [s(t₂) - s(t₁)]/(t₂ - t₁)

The instantaneous velocity is: v(t) = s'(t)

The MVT tells us that there is some time c between t₁ and t₂ where:
  s'(c) = [s(t₂) - s(t₁)]/(t₂ - t₁)

So: Instantaneous velocity = Average velocity at least once during the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. REAL-LIFE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you drive 120 km in 2 hours.

Your average speed is: 120/2 = 60 km/h

If your motion is continuous and differentiable, the MVT guarantees that at some instant your instantaneous speed was 60 km/h.

This doesn't mean you traveled at 60 km/h the entire time. It means that at least once, your instantaneous speed matched your average speed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MVT DOES NOT SAY THE FUNCTION IS CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a common misunderstanding.

Suppose f(x) = x² on [1, 3]. The average rate is 4.

MVT tells us: f'(2) = 4.

It does not mean f'(x) = 4 for every x. Only at at least one point c does the instantaneous rate equal the average rate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MVT DOES NOT NECESSARILY GIVE ONE c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There can be multiple values of c.

The theorem says: at least one c, not exactly one c.

For some functions, multiple tangent lines can have the same slope as the secant line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHEN MVT DOES NOT APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The MVT cannot be used if either condition fails.

Example 1: Not continuous
  f(x) = 1/x on [-1, 1] is undefined at x = 0. Therefore, it is not continuous on the interval. So: MVT does not apply.

Example 2: Not differentiable
  f(x) = |x| on [-1, 1] is continuous, but it is not differentiable at x = 0. Therefore: MVT does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. MVT VS. ROLLE'S THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Continuous on [a,b]
Rolle's Theorem vs. MVT: Both: ✅

Feature: Differentiable on (a,b)
Rolle's Theorem vs. MVT: Both: ✅

Feature: Endpoint condition
Rolle's Theorem vs. MVT: Rolle's: f(a)=f(b), MVT: No equal-value requirement

Feature: Conclusion
Rolle's Theorem vs. MVT: Rolle's: f'(c)=0, MVT: f'(c)=[f(b)-f(a)]/(b-a)

Feature: Main idea
Rolle's Theorem vs. MVT: Rolle's: Horizontal tangent, MVT: Tangent parallel to secant

Feature: Relationship
Rolle's Theorem vs. MVT: Rolle's: Special case, MVT: General theorem

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. MVT VS. AVERAGE RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is important.

Average rate of change: [f(b) - f(a)]/(b - a) — This describes the overall change between two points.

Instantaneous rate of change: f'(c) — This describes the rate at a specific point.

The MVT connects them: f'(c) = [f(b) - f(a)]/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. STEP-BY-STEP MVT PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an MVT problem, use this process:

Step 1 — Check continuity
  Verify: f is continuous on [a, b]

Step 2 — Check differentiability
  Verify: f is differentiable on (a, b)

Step 3 — Calculate average rate of change
  [f(b) - f(a)]/(b - a)

Step 4 — Find the derivative
  f'(x)

Step 5 — Set them equal
  f'(c) = [f(b) - f(a)]/(b - a)

Step 6 — Solve for c
  Find the value or values of c.

Step 7 — Verify
  Make sure: a < c < b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAM-STYLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Verify the Mean Value Theorem and find c for f(x) = x² + 2x on [1, 4].

Solution:

Since f(x) is a polynomial, it is continuous on [1, 4] and differentiable on (1, 4).

Therefore, the MVT applies.

Calculate: f(1) = 1² + 2(1) = 3 and f(4) = 4² + 2(4) = 24

Average rate: (24 - 3)/(4 - 1) = 21/3 = 7

Now differentiate: f'(x) = 2x + 2

Set: 2c + 2 = 7 → 2c = 5 → c = 5/2 = 2.5

Check: 1 < 2.5 < 4

Therefore: c = 5/2 is the value guaranteed by the Mean Value Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. GEOMETRIC MEANING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The MVT can be summarized visually as:

  Secant line: a → b
  Tangent at c is parallel to the secant line.

The slope between the endpoints is: [f(b) - f(a)]/(b - a)

and the slope at c is: f'(c)

The theorem guarantees: These slopes are equal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Mean Value Theorem, remember:

  • The Mean Value Theorem says: The average rate of change over an interval must equal the instantaneous rate of change at some point inside the interval.
  • The formula to memorize is: f'(c) = [f(b) - f(a)]/(b - a) with c ∈ (a, b).
  • Two conditions: Continuous on [a, b] and Differentiable on (a, b).
  • Main interpretation: Average slope = Tangent slope at some c.
  • Rolle's Theorem is a special case of the MVT because when f(a) = f(b), the MVT becomes f'(c) = 0.

Memory trick: "Overall slope = slope somewhere inside."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem is a fundamental result in Differential Calculus that connects average and instantaneous rates of change.

Key concepts covered:

  ✓ The Main Idea
  ✓ Formal Statement
  ✓ Average Rate of Change
  ✓ Instantaneous Rate of Change
  ✓ Central Formula
  ✓ Conditions
  ✓ Examples
  ✓ Geometric Interpretation
  ✓ MVT and Rolle's Theorem
  ✓ Motion Interpretation
  ✓ Real-Life Applications
  ✓ When MVT Does Not Apply
  ✓ Step-by-Step Procedure
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = x² on [1,3] → c = 2",
    "f(x) = x³ on [1,4] → c = √7",
    "f(x) = x² + 2x on [1,4] → c = 5/2",
    "MVT: f'(c) = [f(b)-f(a)]/(b-a)",
    "Average rate of change: [f(b)-f(a)]/(b-a)",
    "Instantaneous rate of change: f'(c)",
    "Continuous on [a,b] and Differentiable on (a,b)",
    "MVT guarantees at least one c",
    "Rolle's Theorem is a special case of MVT",
    "If f(a)=f(b), then f'(c)=0 (Rolle's Theorem)",
    "Tangent line is parallel to secant line",
    "Average slope = Tangent slope at some c",
    "MVT applies to polynomials on closed intervals",
    "Motion: instantaneous velocity = average velocity at some time",
    "Overall slope = slope somewhere inside",
  ],
};

export default topic;