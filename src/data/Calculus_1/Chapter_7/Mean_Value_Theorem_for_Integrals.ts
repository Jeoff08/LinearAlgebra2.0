// filename: mean-value-theorem-for-integrals.ts

const topic = {
  id: "mean-value-theorem-for-integrals",
  title: "Mean Value Theorem for Integrals",
  summary:
    "A theorem stating that if f is continuous on [a,b], there exists at least one c in (a,b) such that ∫ₐᵇ f(x) dx = f(c)(b-a), meaning the function reaches its average value at some point.",
  details: `
The Mean Value Theorem for Integrals states that if a function f(x) is continuous on the closed interval [a, b], then there is at least one number c in the interval such that:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

where:
  a < c < b

This theorem tells us that the total accumulation or area under a continuous function can be represented by a rectangle whose:
  • Width is b - a
  • Height is f(c)

In simple terms:
  Total Area = Average Height × Width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine the area under a curved graph.

The height of the curve changes continuously. Instead of calculating the area using a curved shape, the Mean Value Theorem for Integrals tells us that there is some height f(c) that can represent the average height of the function.

Then:
  Accumulation = Average Height × Length of Interval

The theorem is:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

The value f(c) is called the average value of the function over the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CONDITIONS OF THE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the Mean Value Theorem for Integrals to apply, the function must be:
  Continuous on [a, b]

Continuity is important because the function must not have:
  • Holes
  • Jumps
  • Breaks
  • Undefined points inside the interval

If the graph is continuous, the theorem guarantees that there is at least one point c where the function equals its average value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The main formula is:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

We can solve for f(c):
  f(c) = (1/(b - a)) ∫ₐᵇ f(x) dx

This is called the average value of a function.

Therefore:
  Average Value = Total Accumulation / Length of Interval

This is similar to the ordinary average:
  Average = Total / Number of Items

But in Calculus, we have infinitely many values, so instead of dividing by the number of items, we divide by the length of the interval: b - a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. A GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function y = f(x) on [a, b].

The area under the curve is:
  ∫ₐᵇ f(x) dx

Now imagine replacing the curved region with a rectangle having:
  Width: b - a
  Height: f(c)

The area of the rectangle is:
  f(c)(b - a)

According to the theorem:
  Area under the curve = Area of the average-height rectangle

Therefore, there is at least one point c where the height of the function equals the average height.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RELATIONSHIP TO AVERAGE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem for Integrals and the average value of a function are directly connected.

The average value of f(x) on [a, b] is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

The theorem guarantees that:
  f(c) = f_avg

for at least one value of c ∈ (a, b).

This means:
  At some point in the interval, the function reaches its exact average value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: FINDING THE AVERAGE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the average value of:
  f(x) = x²

on the interval:
  [0, 3]

Step 1: Use the formula
  f_avg = (1/(3 - 0)) ∫₀³ x² dx

Step 2: Evaluate the integral
  ∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9

Step 3: Divide by the interval length
  f_avg = 9/3 = 3

Therefore, the average value of x² from 0 to 3 is:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FINDING THE VALUE OF c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorem says:
  f(c) = f_avg

From the previous example:
  f(c) = 3

Since f(x) = x², we solve:
  c² = 3

Therefore:
  c = √3

Since the interval is [0, 3], we choose:
  c = √3

because 0 < √3 < 3.

Therefore, at x = √3, the function has the same value as its average value over the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VISUAL MEANING OF THE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x² on [0, 3], the total area is 9.

The interval width is 3.

The average height is 3.

So we can imagine a rectangle with:
  Width = 3
  Height = 3

Its area is:
  (3)(3) = 9

This is exactly equal to the area under the curve.

The point where x² = 3 is x = √3.

Therefore, the curve reaches its average height at x = √3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the average value of:
  f(x) = 2x + 1

on:
  [0, 4]

Step 1: Apply the formula
  f_avg = (1/(4 - 0)) ∫₀⁴ (2x + 1) dx

Step 2: Integrate
  ∫ (2x + 1) dx = x² + x

Therefore:
  [x² + x]₀⁴ = (16 + 4) - (0) = 20

Step 3: Divide by the interval length
  f_avg = 20/4 = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FINDING c
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

According to the theorem:
  f(c) = 5

Since f(x) = 2x + 1, we solve:
  2c + 1 = 5
  2c = 4
  c = 2

Notice that 0 < 2 < 4.

Therefore, c = 2 is the point where the function equals its average value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP-BY-STEP PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Mean Value Theorem for Integrals problem, follow these steps.

Step 1: Identify the Function
  Example: f(x) = x² + 1

Step 2: Identify the Interval
  Example: [a, b] = [0, 2]

Step 3: Find the Definite Integral
  ∫ₐᵇ f(x) dx
  For our example:
    ∫₀² (x² + 1) dx

Step 4: Divide by the Length of the Interval
  Use:
    f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Step 5: Set f(c) = f_avg
  Solve: f(c) = f_avg

Step 6: Solve for c
  Make sure: a < c < b
  The value of c must lie inside the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the value(s) of c guaranteed by the Mean Value Theorem for Integrals for:
  f(x) = x² + 1

on:
  [0, 2]

Step 1: Find the average value
  f_avg = (1/(2 - 0)) ∫₀² (x² + 1) dx
  = (1/2)[x³/3 + x]₀²

Substitute:
  = (1/2)(8/3 + 2)
  = (1/2)(14/3)
  f_avg = 7/3

Step 2: Set f(c) equal to the average value
  c² + 1 = 7/3

Subtract 1:
  c² = 4/3

Take the square root:
  c = ±2/√3

Since 0 < c < 2, we only use the positive value:
  c = 2/√3

or approximately:
  c ≈ 1.155

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY IS IT CALLED A "MEAN VALUE" THEOREM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word mean means Average.

The theorem finds the average value of a function over an interval.

For a set of ordinary numbers:
  2, 4, 6

the average is:
  (2 + 4 + 6)/3 = 4

For a continuous function, there are infinitely many values between a and b. We cannot simply add all of them and divide by how many values there are.

Instead, Calculus uses the definite integral:
  Average Value = (1/(b - a)) ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. REAL-LIFE INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorem has many practical applications.

Example: Average Temperature
  Suppose the temperature changes throughout the day.
  Let T(t) represent the temperature at time t.

  The average temperature over the interval [a, b] can be represented by:
    T_avg = (1/(b - a)) ∫ₐᵇ T(t) dt

  The theorem guarantees that at some time c, the actual temperature equals the average temperature:
    T(c) = T_avg

Example: Average Velocity
  Suppose velocity is represented by v(t).

  The average value of velocity over time can be calculated using:
    v_avg = (1/(b - a)) ∫ₐᵇ v(t) dt

  At some point in the interval, the instantaneous velocity equals this average value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT DIFFERENCE: MEAN VALUE THEOREM VS. MEAN VALUE THEOREM FOR INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are related but different theorems.

  Feature                Mean Value Theorem              Mean Value Theorem for Integrals
  ─────────────────────────────────────────────────────────────────────────────────────────────
  Uses                   Derivatives                     Integrals
  Requires               Differentiability               Continuity
  Compares               Slopes                          Function values
  Formula                f'(c) = (f(b)-f(a))/(b-a)       f(c) = (1/(b-a)) ∫ₐᵇ f(x) dx

The regular Mean Value Theorem says:
  At some point, the instantaneous slope equals the average slope.

The Mean Value Theorem for Integrals says:
  At some point, the function's value equals its average value.

This is an important distinction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to Divide by b - a
  The integral ∫ₐᵇ f(x) dx gives the total accumulation.
  To find the average value, you must divide by b - a.

  So:
    f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Mistake 2: Confusing c With the Average Value
  Suppose f_avg = 5.
  This does not automatically mean c = 5.
  You must solve: f(c) = 5.
  The solution is the value of c.

Mistake 3: Forgetting to Check the Interval
  The theorem requires: a < c < b.
  If you find several solutions, only use those that lie inside the required interval.

Mistake 4: Confusing It With the Regular Mean Value Theorem
  Regular MVT uses f'(c).
  The Mean Value Theorem for Integrals uses f(c).
  This is the easiest way to remember the difference.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem for Integrals states that if f(x) is continuous on [a, b], then there exists at least one c ∈ (a, b) such that:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

The average value of the function is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

The theorem guarantees:
  f(c) = f_avg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area under the Curve = Average Height × Width

So the Mean Value Theorem for Integrals tells us that for every continuous function, there is at least one point where the function reaches its average value over the interval.
  `,
  examples: [
    "f(x) = x² on [0,3] → f_avg = 3, c = √3",
    "f(x) = 2x + 1 on [0,4] → f_avg = 5, c = 2",
    "f(x) = x² + 1 on [0,2] → f_avg = 7/3, c = 2/√3",
    "Mean Value Theorem for Integrals: ∫ₐᵇ f(x) dx = f(c)(b - a)",
    "Average value: f_avg = (1/(b-a)) ∫ₐᵇ f(x) dx",
    "f(c) = f_avg for some c in (a,b)",
    "Area under curve = Average height × Width",
  ],
};

export default topic;