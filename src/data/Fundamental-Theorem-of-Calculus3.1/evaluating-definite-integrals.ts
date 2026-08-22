// filename: evaluating-definite-integrals.ts

const topic = {
  id: "evaluating-definite-integrals",
  title: "Evaluating Definite Integrals",
  summary:
    "Finding the numerical value of an integral over a specific interval using the Fundamental Theorem of Calculus Part 2, with techniques including substitution, symmetry, and splitting intervals.",
  details: `
Evaluating Definite Integrals means finding the numerical value of an integral over a specific interval.

A definite integral has the form:
  ∫ₐᵇ f(x) dx

where:
  f(x) = the integrand
  a = lower limit
  b = upper limit
  dx = variable of integration

The most important method for evaluating definite integrals is the Fundamental Theorem of Calculus Part 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If F(x) is an antiderivative of f(x), meaning:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

In evaluation notation:
  ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ

which means:
  F(b) - F(a)

Easy memory trick:
  Upper value minus lower value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To evaluate:
  ∫ₐᵇ f(x) dx

follow these steps:

Step 1: Find the antiderivative
  Find F(x) such that F'(x) = f(x).

Step 2: Substitute the upper limit
  Calculate F(b).

Step 3: Substitute the lower limit
  Calculate F(a).

Step 4: Subtract
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁³ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

Therefore:
  F(x) = x³/3

Step 2: Evaluate the upper limit
  F(3) = 3³/3 = 9

Step 3: Evaluate the lower limit
  F(1) = 1³/3 = 1/3

Step 4: Subtract
  9 - 1/3 = 27/3 - 1/3 = 26/3

Therefore:
  ∫₁³ x² dx = 26/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: LINEAR FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀⁴ (2x + 3) dx

Antiderivative:
  F(x) = x² + 3x

Now evaluate:
  [F(x)]₀⁴
  = (4² + 3(4)) - (0² + 3(0))
  = (16 + 12) - 0
  = 28

Therefore:
  ∫₀⁴ (2x + 3) dx = 28

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: TRIGONOMETRIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀^(π/2) cos x dx

The antiderivative of cos x is:
  sin x

Therefore:
  [sin x]₀^(π/2)
  = sin(π/2) - sin(0)
  = 1 - 0

Thus:
  ∫₀^(π/2) cos x dx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: SINE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀^π sin x dx

The antiderivative is:
  -cos x

Therefore:
  [-cos x]₀^π
  = -cos(π) - [-cos(0)]

Since:
  cos(π) = -1
and:
  cos(0) = 1

we get:
  1 - (-1) = 2

Therefore:
  ∫₀^π sin x dx = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁³ eˣ dx

The antiderivative is:
  eˣ

Therefore:
  [eˣ]₁³
  = e³ - e¹

Thus:
  ∫₁³ eˣ dx = e³ - e

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: NATURAL LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁ᵉ 1/x dx

The antiderivative is:
  ln|x|

Therefore:
  [ln|x|]₁ᵉ
  = ln(e) - ln(1)
  = 1 - 0

So:
  ∫₁ᵉ 1/x dx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DEFINITE INTEGRAL DOES NOT NEED +C
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an indefinite integral:
  ∫ x² dx = x³/3 + C

But for:
  ∫₀² x² dx

we don't need +C.

Why?
  Because:
    (F(b) + C) - (F(a) + C)
    = F(b) + C - F(a) - C
    = F(b) - F(a)

and:
  C - C = 0

Therefore:
  Do not include +C when evaluating a definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DEFINITE INTEGRAL CAN BE NEGATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral represents net accumulation, so it can be negative.

Consider:
  ∫₀² (-x) dx

The antiderivative is:
  -x²/2

Therefore:
  [-x²/2]₀²
  = -2 - 0
  = -2

So:
  -2

The negative sign occurs because the function is below the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NET AREA VS. TOTAL AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is very important.

A definite integral:
  ∫ₐᵇ f(x) dx

gives net area, not necessarily total geometric area.

Above the x-axis:
  positive contribution

Below the x-axis:
  negative contribution

So positive and negative regions can cancel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE OF CANCELLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫₋₁¹ x dx

The function y = x is below the x-axis from -1 to 0, and above it from 0 to 1.

The antiderivative is:
  x²/2

Therefore:
  [x²/2]₋₁¹
  = 1/2 - 1/2
  = 0

The net area is zero.

But the total geometric area is not zero.

The two triangular regions have positive areas that add together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TOTAL AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the question asks for total area, use:
  ∫ₐᵇ |f(x)| dx

or split the integral at the points where f(x) crosses the x-axis.

For example, if f(x) < 0 on [a, c] and f(x) > 0 on [c, b], then:
  Total Area = -∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. USING THE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common methods for evaluating definite integrals is the power rule:
  ∫ x^n dx = x^(n+1)/(n+1)

for n ≠ -1.

Example:
  Evaluate: ∫₁³ x⁴ dx

Antiderivative:
  x⁵/5

Therefore:
  [x⁵/5]₁³
  = 3⁵/5 - 1⁵/5
  = 243/5 - 1/5
  = 242/5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONSTANTS CAN BE PULLED OUTSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  ∫ₐᵇ c f(x) dx

then:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

Example:
  ∫₀² 5x² dx

Take 5 outside:
  5∫₀² x² dx

Then:
  5[x³/3]₀²
  = 5(8/3)
  = 40/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SPLITTING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral can be separated:
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

This is useful for complicated expressions.

Example:
  ∫₀² (x² + 3x) dx

Separate:
  ∫₀² x² dx + ∫₀² 3x dx

Then evaluate each separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. REVERSING THE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you reverse the limits:
  ∫ᵇₐ f(x) dx = -∫ₐᵇ f(x) dx

For example:
  ∫₂⁵ x dx = -∫₅₂ x dx

This is why the order of the limits matters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SAME LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the upper and lower limits are equal:
  ∫ₐᵃ f(x) dx = 0

because the interval has zero width.

For example:
  ∫₃³ (x² + 1) dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ADDITIVITY OF DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a < c < b, then:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

This is particularly useful when the function changes sign.

For example:
  ∫₋₂² f(x) dx = ∫₋₂⁰ f(x) dx + ∫₀² f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. USING SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry can make definite integrals much faster.

Even function:
  If f(-x) = f(x), then:
    ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

Example:
  ∫₋₂² x² dx

Since x² is even:
  = 2∫₀² x² dx
  = 2[x³/3]₀²
  = 16/3

Odd function:
  If f(-x) = -f(x), then:
    ∫₋ₐᵃ f(x) dx = 0

Example:
  ∫₋₃³ x⁵ dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SUBSTITUTION IN DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the integrand is complicated, so we use u-substitution.

Consider:
  ∫₀¹ 2x(x² + 1)³ dx

Let:
  u = x² + 1

Then:
  du = 2x dx

The integral becomes:
  ∫ u³ du

However, with definite integrals, we can also change the limits.

When x = 0:
  u = 0² + 1 = 1

When x = 1:
  u = 1² + 1 = 2

So:
  ∫₁² u³ du

Evaluate:
  [u⁴/4]₁²
  = 16/4 - 1/4
  = 4 - 1/4
  = 15/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. NUMERICAL EVALUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes an antiderivative is difficult or impossible to express using elementary functions.

For example:
  ∫₀¹ e^(-x²) dx

There is no elementary antiderivative for e^(-x²).

In such cases, numerical methods can be used, such as:
  • Left Riemann Sum
  • Right Riemann Sum
  • Midpoint Riemann Sum
  • Trapezoidal Rule
  • Simpson's Rule
  • Numerical calculators/software

This connects definite integrals to the numerical integration topics you've been studying.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. DEFINITE INTEGRALS AND RIEMANN SUMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral can also be defined as a limit of Riemann sums:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

where:
  Δx = (b - a)/n

So there are two major ways to think about a definite integral:

Geometric/numerical view:
  Sum of infinitely many tiny rectangles

FTC view:
  F(b) - F(a)

The Fundamental Theorem makes the second method much faster when an antiderivative is available.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. A COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₋₁² (3x² - 4x + 1) dx

Step 1: Find the antiderivative
  F(x) = x³ - 2x² + x

Step 2: Evaluate at 2
  F(2) = 8 - 8 + 2 = 2

Step 3: Evaluate at -1
  F(-1) = (-1)³ - 2(-1)² + (-1)
  = -1 - 2 - 1
  = -4

Step 4: Subtract
  F(2) - F(-1) = 2 - (-4) = 6

Therefore:
  ∫₋₁² (3x² - 4x + 1) dx = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting the limits
  Don't stop at F(x).
  You need F(b) - F(a).

❌ Mistake 2: Adding +C
  For definite integrals, +C is unnecessary.

❌ Mistake 3: Wrong subtraction order
  Always:
    upper - lower
  not lower minus upper.

❌ Mistake 4: Forgetting parentheses
  If F(a) = -4, then:
    F(b) - F(a) = F(b) - (-4)

❌ Mistake 5: Confusing net area with total area
  ∫ₐᵇ f(x) dx gives net accumulation.
  Total geometric area requires accounting for regions below the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK EVALUATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  ∫ₐᵇ f(x) dx

ask yourself:

① Can I find an antiderivative?
  f(x) → F(x)

② Evaluate the upper limit:
  F(b)

③ Evaluate the lower limit:
  F(a)

④ Subtract:
  F(b) - F(a)

⑤ Check the sign and units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. IMPORTANT FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Fundamental Theorem of Calculus Part 2:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
    where F'(x) = f(x)

  Evaluation notation:
    [F(x)]ₐᵇ = F(b) - F(a)

  Reverse limits:
    ∫ᵇₐ f(x) dx = -∫ₐᵇ f(x) dx

  Same limits:
    ∫ₐᵃ f(x) dx = 0

  Additivity:
    ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

  Even function:
    ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

  Odd function:
    ∫₋ₐᵃ f(x) dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definite integrals can initially be understood as:
  Accumulation / Net Area

Riemann sums approximate them:
  Rectangles → Better approximations → Exact integral

And the Fundamental Theorem of Calculus gives us a much faster way to calculate them:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

So instead of adding infinitely many tiny pieces manually, we can:
  Find antiderivative → Upper value - Lower value

Most important thing to remember:
  ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)

In simple terms:
  Find the antiderivative, plug in the upper limit, plug in the lower limit, and subtract.
  `,
  examples: [
    "∫₁³ x² dx = [x³/3]₁³ = 26/3",
    "∫₀⁴ (2x + 3) dx = [x² + 3x]₀⁴ = 28",
    "∫₀^(π/2) cos x dx = [sin x]₀^(π/2) = 1",
    "∫₀^π sin x dx = [-cos x]₀^π = 2",
    "∫₁³ eˣ dx = [eˣ]₁³ = e³ - e",
    "∫₁ᵉ 1/x dx = [ln|x|]₁ᵉ = 1",
    "∫₋₁² (3x² - 4x + 1) dx = [x³ - 2x² + x]₋₁² = 6",
  ],
};

export default topic;