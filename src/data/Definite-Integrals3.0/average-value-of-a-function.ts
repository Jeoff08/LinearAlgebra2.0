// filename: average-value-of-a-function.ts

const topic = {
  id: "average-value-of-a-function",
  title: "Average Value of a Function",
  summary:
    "The value that a function would have if its total accumulation were spread evenly across an interval, calculated as (1/(b-a)) ∫ₐᵇ f(x) dx.",
  details: `
The Average Value of a Function tells us the value that a function would have if its total accumulation were spread evenly across an interval.

For a continuous function f(x) on the interval [a, b], the average value is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

This is the continuous version of the ordinary arithmetic mean.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For ordinary numbers, the average is:
  Average = Sum of values / Number of values

For a continuous function, there are infinitely many values between a and b, so we use a definite integral.

The formula becomes:
  Average Value = Total Accumulation / Length of Interval

or:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE DIVIDE BY b - a?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral:
  ∫ₐᵇ f(x) dx

gives the total accumulation.

The interval has length:
  b - a

So dividing:
  (1/(b - a)) ∫ₐᵇ f(x) dx

gives the average height of the function over the interval.

Geometrically, imagine replacing the entire region under the curve with a rectangle having the same area and width b - a.

The height of that rectangle is the average value:
  f_avg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VISUAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function f(x) on [a, b]:
  Area under curve = f_avg · (b - a)

Therefore:
  f_avg = Area / Width

The average value is essentially the average height of the curve over the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the average value of:
  f(x) = x²

on:
  [0, 4]

Step 1: Write the formula
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Substitute:
  a = 0, b = 4

So:
  f_avg = (1/(4 - 0)) ∫₀⁴ x² dx

Step 2: Evaluate the integral
  ∫ x² dx = x³/3

Therefore:
  ∫₀⁴ x² dx = [x³/3]₀⁴ = 64/3

Step 3: Divide by the interval length
  f_avg = (1/4)(64/3) = 64/12 = 16/3

So:
  f_avg = 16/3

or approximately:
  5.333

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHAT DOES 16/3 MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The function f(x) = x² ranges from 0 to 16 on [0, 4].

Its average value is:
  16/3 ≈ 5.333

This means that if we replaced the curve with a rectangle of the same width and the same total area, the rectangle would have height:
  5.333

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AVERAGE VALUE VS. AVERAGE OF ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common mistake is to think:
  f_avg = (f(a) + f(b))/2

This is not generally true.

For f(x) = x² on [0, 4]:
  (f(0) + f(4))/2 = (0 + 16)/2 = 8

But the actual average value is:
  16/3 ≈ 5.333

Therefore:
  (f(a) + f(b))/2 ≠ f_avg

in general.

The average value of a function depends on its entire behavior across the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONNECTION TO RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average value formula comes directly from the idea of averaging many function values.

For n equally spaced points:
  Average ≈ (f(x₁) + f(x₂) + ... + f(xₙ))/n

As the number of points becomes extremely large:
  n → ∞

this becomes:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

So the average value is closely connected to Riemann sums and definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AVERAGE VALUE AND THE RECTANGLE INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A = ∫ₐᵇ f(x) dx

The area is A.

The width is b - a.

A rectangle with the same area has:
  A = (b - a)h

Solving for h:
  h = A/(b - a)

Since:
  A = ∫ₐᵇ f(x) dx

we obtain:
  h = (1/(b - a)) ∫ₐᵇ f(x) dx

Therefore:
  h = f_avg

The average value is the height of an equal-area rectangle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH A LINEAR FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the average value of:
  f(x) = 2x + 1

on:
  [1, 5]

Step 1:
  Use f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

So:
  f_avg = (1/(5 - 1)) ∫₁⁵ (2x + 1) dx

Step 2:
  Integrate:
    ∫ (2x + 1) dx = x² + x

Therefore:
  f_avg = (1/4)[x² + x]₁⁵

Evaluate:
  (25 + 5) - (1 + 1)
  = 30 - 2
  = 28

Then:
  f_avg = 28/4 = 7

Therefore:
  f_avg = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. AVERAGE VALUE OF A CONSTANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) = 5 on [0, 10].

Then:
  f_avg = (1/10) ∫₀¹⁰ 5 dx

Since:
  ∫₀¹⁰ 5 dx = 50

we get:
  f_avg = 50/10 = 5

This makes sense because a constant function is always equal to 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AVERAGE VALUE CAN BE FOUND FROM AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you already know:
  ∫ₐᵇ f(x) dx = 60

and:
  a = 2, b = 8

Then:
  f_avg = 60/(8 - 2) = 60/6 = 10

You don't need to find the antiderivative if the integral's value is already known.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. AVERAGE VALUE CAN BE NEGATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average value of a function can be negative.

For example:
  f(x) = -x

on:
  [0, 4]

Then:
  f_avg = (1/4) ∫₀⁴ (-x) dx

Calculate:
  ∫₀⁴ -x dx = [-x²/2]₀⁴ = -8

Therefore:
  f_avg = -8/4 = -2

This happens because the function is below the x-axis throughout the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. AVERAGE VALUE CAN BE ZERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have an average value of zero even if the function isn't zero everywhere.

Consider f(x) = x on [-2, 2].

Because f(x) = x is odd:
  ∫₋₂² x dx = 0

Therefore:
  f_avg = (1/(2 - (-2)))(0) = 0

The positive and negative contributions cancel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MEAN VALUE THEOREM FOR INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a very important theorem connected to the average value.

If f(x) is continuous on [a, b], then there exists at least one number c ∈ [a, b] such that:
  f(c) = f_avg

Since:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

we can write:
  f(c) = (1/(b - a)) ∫ₐᵇ f(x) dx

Equivalently:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE OF THE MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x² on [0, 4], we found:
  f_avg = 16/3

The theorem tells us that there must be some c such that:
  c² = 16/3

Therefore:
  c = 4/√3

Approximately:
  c ≈ 2.309

So at x ≈ 2.309, the function has exactly its average value:
  f(c) = 16/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. AVERAGE VALUE OF A FUNCTION VS. AVERAGE RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't confuse average value with average rate of change.

Average Value:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx
  This tells us the average height/value of a function.

Average Rate of Change:
  (f(b) - f(a))/(b - a)
  This tells us how quickly the function changes between two endpoints.

They are completely different concepts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PHYSICAL APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Average value has many real-world applications.

Velocity:
  If v(t) is velocity, then the average velocity over [a, b] is:
    v_avg = (1/(b - a)) ∫ₐᵇ v(t) dt

Temperature:
  If T(t) is temperature over a period:
    T_avg = (1/(b - a)) ∫ₐᵇ T(t) dt
  This can represent the average temperature during the interval.

Population:
  If P(t) represents population:
    P_avg = (1/(b - a)) ∫ₐᵇ P(t) dt
  This gives the average population over the specified time period.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. AVERAGE VALUE AND UNITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average value has the same units as the original function.

For example:
  If f(t) = temperature in °C, then f_avg is also measured in °C.
  If f(t) represents velocity in m/s, then the average value is also m/s.

This makes sense because we're averaging values of the same quantity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The main formula to memorize is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

You can also write:
  f_avg = Total Accumulation / Interval Length

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. PROBLEM-SOLVING PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to find the average value:

Step 1 — Identify the function
  f(x)

Step 2 — Identify the interval
  [a, b]

Step 3 — Write the formula
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Step 4 — Evaluate the definite integral
  Find an antiderivative F(x): F'(x) = f(x).
  Then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

Step 5 — Divide by b - a
  f_avg = (F(b) - F(a))/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to divide by b - a
  Incorrect:
    f_avg = ∫ₐᵇ f(x) dx
  Correct:
    f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Mistake 2: Using the average of the endpoints
  Don't automatically use (f(a) + f(b))/2.
  That is generally not the average value of the function.

Mistake 3: Confusing it with average rate of change
  Average value:
    (1/(b - a)) ∫ₐᵇ f(x) dx
  Average rate of change:
    (f(b) - f(a))/(b - a)

Mistake 4: Forgetting the interval length
  Remember that b - a is the width of the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT RELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average value connects several calculus concepts:

  Definite Integral
    ↓
  Total Accumulation
    ↓
  ÷ (b - a)
    ↓
  Average Value

And because:
  ∫ₐᵇ f(x) dx

is the area/net accumulation:
  f_avg = Net Area / Width

when interpreting the integral geometrically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                    Formula                              Meaning
  ─────────────────────────────────────────────────────────────────────────────────────────────
  Definite Integral          ∫ₐᵇ f(x) dx                          Net accumulation
  Average Value              (1/(b-a)) ∫ₐᵇ f(x) dx                Average height/value
  Average Rate of Change     (f(b) - f(a))/(b - a)                Change per unit x
  Total Area                 ∫ₐᵇ |f(x)| dx                        Unsigned geometric area

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to remember the concept is:

  Average Value = Total Accumulation / Interval Length

or:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

Think of it this way:

  The definite integral tells you the total amount accumulated. Dividing that 
  total by the width of the interval gives the function's average value.

For example:
  ∫₀⁴ x² dx = 64/3

is the total accumulation, and:
  4 - 0 = 4

is the interval length.

Therefore:
  f_avg = (64/3)/4 = 16/3

So the average value of x² on [0, 4] is:
  16/3 ≈ 5.333

The single most important formula is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx
  `,
  examples: [
    "Average value of f(x) = x² on [0,4] → (1/4)∫₀⁴ x² dx = 16/3",
    "Average value of f(x) = 2x + 1 on [1,5] → (1/4)∫₁⁵ (2x + 1) dx = 7",
    "Average value of constant f(x) = 5 on [0,10] → 5",
    "Average value of f(x) = -x on [0,4] → -2",
    "Average value of f(x) = x on [-2,2] → 0",
    "Mean Value Theorem: f(c) = f_avg for some c in [a,b]",
    "f_avg = Total Accumulation / Interval Length",
  ],
};

export default topic;