// filename: left-riemann-sum.ts

const topic = {
  id: "left-riemann-sum",
  title: "Left Riemann Sum",
  summary:
    "A method for approximating the area under a curve by dividing the interval into rectangles and using the left endpoint of each subinterval to determine the height of each rectangle.",
  details: `
A Left Riemann Sum is a method for approximating the area under a curve by dividing the interval into several rectangles and using the left endpoint of each subinterval to determine the height of each rectangle.

It is one of the three basic Riemann-sum methods:
  • Left Riemann Sum
  • Right Riemann Sum
  • Midpoint Riemann Sum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to approximate the area under:
  y = f(x)

from x = a to x = b.

We divide the interval [a, b] into n equal subintervals.

For a left Riemann sum, the height of each rectangle is determined by the value of the function at the left side of the rectangle.

So the basic idea is:
  Rectangle Area = height at left endpoint × width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WIDTH OF EACH RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the interval is [a, b] and we divide it into n equal pieces, then:
  Δx = (b - a)/n

This gives the width of every rectangle.

Example:
  Suppose [0, 4] is divided into 4 rectangles.
  Then:
    Δx = (4 - 0)/4
    Δx = 1

The subintervals are:
  [0, 1], [1, 2], [2, 3], [3, 4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHICH POINTS DOES THE LEFT SUM USE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the interval [0, 4], the left endpoints are:
  0, 1, 2, 3

Notice that we do not use 4.

Why?
  Because 4 is the right endpoint of the final rectangle.

For a left Riemann sum, we always use:
  x₀, x₁, x₂, ..., xₙ₋₁

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LEFT RIEMANN SUM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general formula is:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

where:
  Δx = (b - a)/n
and:
  xᵢ = a + iΔx

Therefore, the complete formula can also be written as:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(a + iΔx) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP-BY-STEP EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the left Riemann sum approximation of:
  f(x) = x²

on:
  [0, 4]

using 4 rectangles.

Step 1: Identify a, b, and n
  a = 0
  b = 4
  n = 4

Step 2: Find Δx
  Δx = (4 - 0)/4
  Δx = 1

Step 3: Find the left endpoints
  The subintervals are:
    [0, 1], [1, 2], [2, 3], [3, 4]

Therefore, the left endpoints are:
  0, 1, 2, 3

Step 4: Evaluate f(x)
  Our function is:
    f(x) = x²

Therefore:
  f(0) = 0
  f(1) = 1
  f(2) = 4
  f(3) = 9

Step 5: Calculate the rectangle areas
  Each rectangle has width Δx = 1.

Therefore:
  L₄ = [f(0) + f(1) + f(2) + f(3)](1)
  L₄ = (0 + 1 + 4 + 9)(1)
  L₄ = 14

So the left Riemann sum estimates the area as:
  14 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY IS IT CALLED "LEFT"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider one subinterval:
  [xᵢ₋₁, xᵢ]

The rectangle's height is determined by:
  f(xᵢ₋₁)

which is the value at the left endpoint.

Therefore:
  Left endpoint → rectangle height

This is the defining characteristic of a Left Riemann Sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LEFT SUM VS. RIGHT SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x²

on:
  [0, 4]

using 4 rectangles.

Left endpoints:
  0, 1, 2, 3
giving:
  L₄ = 14

Right endpoints:
  1, 2, 3, 4
giving:
  R₄ = 30

The exact area is:
  ∫₀⁴ x² dx = 64/3 ≈ 21.33

So:
  14 < 21.33 < 30

This makes sense because x² is increasing on [0, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. UNDERESTIMATE FOR INCREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important rule.

If f(x) is increasing, the left endpoint produces a rectangle that is generally below the curve.

Therefore:
  Lₙ < ∫ₐᵇ f(x) dx

So:
  Increasing function
    Left Sum = Underestimate
    Right Sum = Overestimate

For example:
  f(x) = x² is increasing on [0, 4].

Therefore:
  L₄ = 14

is an underestimate of:
  64/3 ≈ 21.33

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. OVERESTIMATE FOR DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The opposite happens when the function is decreasing.

Suppose f(x) is decreasing.

The left endpoint is higher than most of the curve within that rectangle.

Therefore:
  Left Sum = Overestimate
and:
  Right Sum = Underestimate

So remember:
  Function    |  Left Sum
  ────────────┼────────────────
  Increasing  |  Underestimate
  Decreasing  |  Overestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INCREASING THE NUMBER OF RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we use only 4 rectangles.

The rectangles may be relatively wide:
  Δx = (b - a)/4

If we use 10:
  Δx = (b - a)/10

If we use 100:
  Δx = (b - a)/100

The rectangles become thinner and the approximation generally improves.

As n → ∞, we obtain the exact area:
  lim(n→∞) Lₙ = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LEFT RIEMANN SUM AS A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Starting with:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

and using:
  Δx = (b - a)/n

with:
  xᵢ = a + i(b - a)/n

we get:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(a + i(b - a)/n) · (b - a)/n

Then:
  lim(n→∞) Σᵢ₌₀ⁿ⁻¹ f(a + i(b - a)/n) · (b - a)/n = ∫ₐᵇ f(x) dx

This shows how the Left Riemann Sum leads directly to the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH 8 RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:
  ∫₀⁴ x² dx

using a Left Riemann Sum with 8 rectangles.

Step 1: Find the width
  Δx = (4 - 0)/8
  Δx = 1/2

Step 2: Find the left endpoints
  0, 1/2, 1, 3/2, 2, 5/2, 3, 7/2

Step 3: Apply the formula
  L₈ = [f(0) + f(1/2) + f(1) + f(3/2) + f(2) + f(5/2) + f(3) + f(7/2)] · 1/2

Since f(x) = x²:
  L₈ = [0 + 1/4 + 1 + 9/4 + 4 + 25/4 + 9 + 49/4] · 1/2

The result is:
  L₈ = 17.5

Compare this with the exact area:
  64/3 ≈ 21.33

The approximation improved from 14 to 17.5.

As we increase n, the approximation gets closer to the exact value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Left Riemann Sum problem, follow these steps:

Step 1 — Identify the interval
  [a, b]

Step 2 — Identify the number of rectangles
  n

Step 3 — Calculate the width
  Δx = (b - a)/n

Step 4 — Find the left endpoints
  xᵢ = a + iΔx
  for:
    i = 0, 1, ..., n - 1

Step 5 — Evaluate the function
  Calculate:
    f(x₀), f(x₁), ..., f(xₙ₋₁)

Step 6 — Multiply by the width
  f(xᵢ) Δx

Step 7 — Add everything
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the right endpoints
  For a Left Riemann Sum, don't use:
    x₁, x₂, ..., xₙ
  Instead use:
    x₀, x₁, ..., xₙ₋₁

Mistake 2: Forgetting Δx
  You must multiply the sum of the heights by the rectangle width:
    Lₙ = (sum of heights) Δx

Mistake 3: Using the wrong width
  Remember:
    Δx = (b - a)/n
  not:
    (b + a)/n

Mistake 4: Assuming the Left Sum is always an underestimate
  That's only guaranteed when the function is increasing over the interval.
  If the function is decreasing, the Left Sum is generally an overestimate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangle width:
    Δx = (b - a)/n

  Left endpoint:
    xᵢ = a + iΔx

  Left Riemann Sum:
    Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

  Expanded form:
    Lₙ = [f(x₀) + f(x₁) + ... + f(xₙ₋₁)] Δx

  Limit:
    lim(n→∞) Lₙ = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Left Riemann Sum follows this process:

  Divide the interval
    ↓
  Use the left endpoint
    ↓
  Create rectangles
    ↓
  Add their areas
    ↓
  Increase n
    ↓
  Approach the definite integral

The key formula to remember is:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(a + iΔx) Δx, Δx = (b - a)/n

In simple terms:
  A Left Riemann Sum estimates the area under a curve by using the left endpoint 
  of each subinterval as the height of its rectangle.
  `,
  examples: [
    "Left Riemann sum for f(x) = x² on [0,4] with n=4 → L₄ = 14",
    "Left Riemann sum for f(x) = x² on [0,4] with n=8 → L₈ = 17.5",
    "Increasing function → Left sum is an underestimate",
    "Decreasing function → Left sum is an overestimate",
    "Left Riemann sum formula: Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx",
    "Δx = (b - a)/n",
    "lim(n→∞) Lₙ = ∫ₐᵇ f(x) dx",
  ],
};

export default topic;