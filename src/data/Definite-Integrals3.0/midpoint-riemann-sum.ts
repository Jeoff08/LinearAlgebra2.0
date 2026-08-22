// filename: midpoint-riemann-sum.ts

const topic = {
  id: "midpoint-riemann-sum",
  title: "Midpoint Riemann Sum",
  summary:
    "A method for approximating the area under a curve by dividing the interval into rectangles and using the midpoint of each subinterval to determine the height of each rectangle, often more accurate than left or right sums.",
  details: `
A Midpoint Riemann Sum is a method for approximating the area under a curve by dividing an interval into several rectangles and using the midpoint of each subinterval to determine the height of each rectangle.

It is often more accurate than the Left or Right Riemann Sum when the function is reasonably smooth.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to approximate the area under:
  y = f(x)

from x = a to x = b.

We divide the interval [a, b] into n equal subintervals.

Instead of using the left or right endpoint, we use the middle point of each subinterval.

So:
  Rectangle Area = f(midpoint) Δx

The important difference is that the rectangle's height comes from the center of each interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WIDTH OF EACH RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As with other Riemann sums, if the interval is [a, b] and there are n rectangles:
  Δx = (b - a)/n

where:
  a = lower endpoint
  b = upper endpoint
  n = number of rectangles
  Δx = width of each rectangle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING THE MIDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a subinterval is:
  [xᵢ₋₁, xᵢ]

The midpoint is:
  mᵢ = (xᵢ₋₁ + xᵢ)/2

For example, if the interval is [2, 4], then its midpoint is:
  m = (2 + 4)/2
  m = 3

So the function's height is evaluated at:
  f(3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MIDPOINT RIEMANN SUM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general formula is:
  Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx

where:
  mᵢ = (xᵢ₋₁ + xᵢ)/2

and:
  Δx = (b - a)/n

For equally spaced intervals, the midpoint can also be written as:
  mᵢ = a + (i - 1/2)Δx

Therefore:
  Mₙ = Σᵢ₌₁ⁿ f[a + (i - 1/2)Δx] Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP-BY-STEP EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the Midpoint Riemann Sum approximation of:
  f(x) = x²

on:
  [0, 4]

using 4 rectangles.

Step 1: Identify the values
  a = 0
  b = 4
  n = 4

Step 2: Find Δx
  Δx = (4 - 0)/4
  Δx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FIND THE SUBINTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The four subintervals are:
  [0, 1]
  [1, 2]
  [2, 3]
  [3, 4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FIND THE MIDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the first interval [0, 1], the midpoint is:
  1/2

For the second [1, 2], the midpoint is:
  3/2

For the third [2, 3], the midpoint is:
  5/2

For the fourth [3, 4], the midpoint is:
  7/2

Therefore, the midpoints are:
  1/2, 3/2, 5/2, 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EVALUATE THE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our function is f(x) = x².

Therefore:
  f(1/2) = 1/4
  f(3/2) = 9/4
  f(5/2) = 25/4
  f(7/2) = 49/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CALCULATE THE MIDPOINT SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula is:
  M₄ = [f(1/2) + f(3/2) + f(5/2) + f(7/2)] Δx

Since Δx = 1, we get:
  M₄ = 1/4 + 9/4 + 25/4 + 49/4

Combine:
  M₄ = (1 + 9 + 25 + 49)/4
  M₄ = 84/4
  M₄ = 21

So the estimated area is:
  21 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPARE WITH THE EXACT AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exact area is:
  ∫₀⁴ x² dx

Using the power rule:
  = [x³/3]₀⁴
  = 64/3 ≈ 21.333

The midpoint approximation was:
  21

So:
  21 < 21.333

The midpoint approximation is very close to the exact value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY DOES THE MIDPOINT METHOD WORK WELL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Left Riemann Sum uses:
  left endpoint

The Right Riemann Sum uses:
  right endpoint

The Midpoint Riemann Sum uses:
  middle of the interval

This gives the rectangle a height that is often closer to the curve's average height across the interval.

That is why the midpoint method can produce a much better approximation with the same number of rectangles.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LEFT VS. RIGHT VS. MIDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) = x² on [0, 4] with 4 rectangles.

We found:
  Left:   L₄ = 14
  Midpoint: M₄ = 21
  Right:  R₄ = 30

The exact area is:
  64/3 ≈ 21.333

So:
  14 < 21 < 21.333 < 30

The midpoint approximation is much closer to the exact answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MIDPOINT FORMULA USING a, b, AND n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since Δx = (b - a)/n, the midpoint of the i-th interval is:
  mᵢ = a + (i - 1/2)Δx

Substituting Δx:
  mᵢ = a + (i - 1/2)(b - a)/n

Therefore, the Midpoint Riemann Sum is:
  Mₙ = Σᵢ₌₁ⁿ f(a + (i - 1/2)(b - a)/n) · (b - a)/n

This is the formula you will often use in more advanced problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMPLETE EXAMPLE WITH 8 RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:
  ∫₀⁴ x² dx

using a Midpoint Riemann Sum with 8 rectangles.

Step 1: Find the width
  Δx = (4 - 0)/8
  Δx = 1/2

Step 2: Find the midpoints
  The midpoints are:
    1/4, 3/4, 5/4, 7/4, 9/4, 11/4, 13/4, 15/4

Step 3: Apply the formula
  M₈ = Σᵢ₌₁⁸ f(mᵢ) · 1/2

Since f(x) = x²:
  M₈ = (1/2)[(1/4)² + (3/4)² + (5/4)² + (7/4)² + (9/4)² + (11/4)² + (13/4)² + (15/4)²]

The result is:
  M₈ = 21.25

Compare:
  Exact area ≈ 21.333

So 21.25 is even closer than the 4-rectangle approximation of 21.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INCREASING THE NUMBER OF RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Just like Left and Right Riemann Sums, the midpoint approximation becomes more accurate as n increases.

For example:
  M₄ = 21
  M₈ = 21.25

and with even more rectangles, the approximation gets closer to:
  21.333...

In the limit:
  lim(n→∞) Mₙ = ∫ₐᵇ f(x) dx

Thus the exact definite integral can be viewed as the limit of midpoint approximations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MIDPOINT RIEMANN SUM AS A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Starting with:
  Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx

where:
  mᵢ = a + (i - 1/2)Δx

and:
  Δx = (b - a)/n

we obtain:
  lim(n→∞) Σᵢ₌₁ⁿ f(a + (i - 1/2)(b - a)/n) · (b - a)/n = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. OVERESTIMATE OR UNDERESTIMATE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Unlike the Left and Right Riemann Sums, you cannot determine the midpoint error simply by knowing whether the function is increasing or decreasing.

Instead, concavity is important.

Concave Up:
  For a concave-up function, the midpoint rectangles tend to lie below the curve.
  Therefore:
    Midpoint Sum = Underestimate

For example:
  f(x) = x² is concave up, so the midpoint estimate:
    21
  is slightly less than:
    21.333...

Concave Down:
  For a concave-down function, the midpoint rectangles tend to lie above the curve.
  Therefore:
    Midpoint Sum = Overestimate

So:
  Concavity         Midpoint Sum
  ─────────────────────────────────────
  Concave Up        Underestimate
  Concave Down      Overestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using an endpoint
  Don't use xᵢ₋₁ or xᵢ directly.
  The midpoint is:
    mᵢ = (xᵢ₋₁ + xᵢ)/2

Mistake 2: Forgetting Δx
  You need:
    Mₙ = Σ f(mᵢ) Δx
  not just:
    Σ f(mᵢ)

Mistake 3: Finding the wrong midpoint
  For [2, 6], the midpoint is:
    (2 + 6)/2 = 4
  not 3.

Mistake 4: Confusing midpoint with average function value
  The midpoint method evaluates the function at the midpoint:
    f((xᵢ₋₁ + xᵢ)/2)
  It does not calculate the average of the function values at the two endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Midpoint Riemann Sum problem:

Step 1: Identify a, b, n

Step 2: Calculate Δx
  Δx = (b - a)/n

Step 3: Find the midpoint of each interval
  mᵢ = a + (i - 1/2)Δx

Step 4: Evaluate f(mᵢ)

Step 5: Multiply each value by Δx

Step 6: Add
  Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Width:
    Δx = (b - a)/n

  Midpoint of a subinterval:
    mᵢ = (xᵢ₋₁ + xᵢ)/2

  Alternative midpoint formula:
    mᵢ = a + (i - 1/2)Δx

  Midpoint Riemann Sum:
    Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx

  Expanded form:
    Mₙ = [f(m₁) + f(m₂) + ... + f(mₙ)] Δx

  Limit:
    lim(n→∞) Mₙ = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three basic Riemann sums can be remembered this way:
  Left → Beginning
  Midpoint → Middle
  Right → End

For the Midpoint Riemann Sum:
  Divide → Find the middle → Evaluate f → Multiply by Δx → Add

The most important formula is:
  Mₙ = Σᵢ₌₁ⁿ f(a + (i - 1/2)(b - a)/n) · (b - a)/n

In simple terms:
  A Midpoint Riemann Sum estimates the area under a curve by using the middle 
  of each subinterval as the height of its rectangle. As the number of rectangles 
  increases, the approximation approaches the exact definite integral.
  `,
  examples: [
    "Midpoint Riemann sum for f(x) = x² on [0,4] with n=4 → M₄ = 21",
    "Midpoint Riemann sum for f(x) = x² on [0,4] with n=8 → M₈ = 21.25",
    "Concave up function → Midpoint sum is an underestimate",
    "Concave down function → Midpoint sum is an overestimate",
    "Midpoint Riemann sum formula: Mₙ = Σᵢ₌₁ⁿ f(mᵢ) Δx",
    "mᵢ = (xᵢ₋₁ + xᵢ)/2",
    "lim(n→∞) Mₙ = ∫ₐᵇ f(x) dx",
  ],
};

export default topic;