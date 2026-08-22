// filename: right-riemann-sum.ts

const topic = {
  id: "right-riemann-sum",
  title: "Right Riemann Sum",
  summary:
    "A method for approximating the area under a curve by dividing the interval into rectangles and using the right endpoint of each subinterval to determine the height of each rectangle.",
  details: `
A Right Riemann Sum is a method for approximating the area under a curve by dividing an interval into several rectangles and using the right endpoint of each subinterval to determine the height of each rectangle.

It is the counterpart of the Left Riemann Sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to approximate the area under:
  y = f(x)

from x = a to x = b.

We divide the interval [a, b] into n equal subintervals.

For a Right Riemann Sum, we use the right endpoint of every subinterval as the height of the rectangle.

So:
  Rectangle Area = right-endpoint height × width

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WIDTH OF EACH RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the interval is [a, b] and we divide it into n equal parts, then:
  Δx = (b - a)/n

where:
  a = lower limit
  b = upper limit
  n = number of rectangles
  Δx = width of each rectangle

Example:
  For [0, 4] with 4 rectangles:
    Δx = (4 - 0)/4 = 1

Therefore:
  Δx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHICH POINTS DOES THE RIGHT SUM USE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the interval is [0, 4] and we divide it into 4 equal pieces:
  [0, 1], [1, 2], [2, 3], [3, 4]

The right endpoints are:
  1, 2, 3, 4

Notice that we don't use 0.

The right Riemann Sum uses:
  x₁, x₂, ..., xₙ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RIGHT RIEMANN SUM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general formula is:
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

where:
  Δx = (b - a)/n
and:
  xᵢ = a + iΔx

Therefore:
  Rₙ = Σᵢ₌₁ⁿ f(a + iΔx) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP-BY-STEP EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the Right Riemann Sum approximation of:
  f(x) = x²

on:
  [0, 4]

using 4 rectangles.

Step 1: Identify the interval
  a = 0
  b = 4
  n = 4

Step 2: Find Δx
  Δx = (4 - 0)/4
  Δx = 1

Step 3: Find the right endpoints
  The subintervals are:
    [0, 1], [1, 2], [2, 3], [3, 4]

Therefore, the right endpoints are:
  1, 2, 3, 4

Step 4: Evaluate the function
  Since f(x) = x², we have:
    f(1) = 1
    f(2) = 4
    f(3) = 9
    f(4) = 16

Step 5: Add the rectangle areas
  The Right Riemann Sum is:
    R₄ = [f(1) + f(2) + f(3) + f(4)](1)
    R₄ = (1 + 4 + 9 + 16)(1)
    R₄ = 30

So our approximation is:
  30 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY IS IT CALLED "RIGHT"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a subinterval:
  [xᵢ₋₁, xᵢ]

For a Right Riemann Sum, the height is:
  f(xᵢ)

because xᵢ is the right endpoint.

Therefore:
  Right endpoint → rectangle height

That's the defining characteristic of the Right Riemann Sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VISUALIZING THE IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function such as f(x) = x², the right endpoint of each interval determines the rectangle height.

The important thing to notice is that the rectangle height is determined from the right side of each subinterval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RIGHT SUM VS. LEFT SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's compare both methods using:
  f(x) = x²

on:
  [0, 4]

with 4 rectangles.

Left Riemann Sum:
  Left endpoints: 0, 1, 2, 3
  Therefore:
    L₄ = 0² + 1² + 2² + 3²
    L₄ = 14

Right Riemann Sum:
  Right endpoints: 1, 2, 3, 4
  Therefore:
    R₄ = 1² + 2² + 3² + 4²
    R₄ = 30

So:
  L₄ = 14
while:
  R₄ = 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY IS THE RIGHT SUM LARGER HERE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The function f(x) = x² is increasing on [0, 4].

Because the function is increasing, the right endpoint is higher than most of the curve inside each subinterval.

Therefore, the rectangles extend above the curve.

So:
  Right Riemann Sum = Overestimate

For an increasing function:
  Lₙ < ∫ₐᵇ f(x) dx < Rₙ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RIGHT SUM FOR A DECREASING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now suppose the function is decreasing.

For example:
  f(x) = 10 - x

on some interval.

Because the function is decreasing, the right endpoint has a smaller function value.

The rectangles will generally lie below the curve.

Therefore:
  Right Riemann Sum = Underestimate

So remember:
  Function    |  Right Riemann Sum
  ────────────┼────────────────────
  Increasing  |  Overestimate
  Decreasing  |  Underestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RIGHT RIEMANN SUM AS A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Right Riemann Sum is:
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

where:
  Δx = (b - a)/n
and:
  xᵢ = a + iΔx

Therefore:
  Rₙ = Σᵢ₌₁ⁿ f(a + i(b - a)/n) · (b - a)/n

As the number of rectangles approaches infinity (n → ∞), the approximation approaches the exact definite integral:
  lim(n→∞) Rₙ = ∫ₐᵇ f(x) dx

Thus:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(a + i(b - a)/n) · (b - a)/n

This is one of the fundamental definitions of the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:
  ∫₀² x² dx

using a Right Riemann Sum with 4 rectangles.

Step 1: Find the width
  Δx = (2 - 0)/4
  Δx = 1/2

Step 2: Find the right endpoints
  Starting from 0, increase by 1/2:
    1/2, 1, 3/2, 2

Step 3: Evaluate f(x) = x²
  f(1/2) = 1/4
  f(1) = 1
  f(3/2) = 9/4
  f(2) = 4

Step 4: Calculate the sum
  R₄ = (1/4 + 1 + 9/4 + 4) · 1/2

Combine:
  R₄ = (15/2) · 1/2
  R₄ = 15/4

or:
  R₄ = 3.75

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMPARE WITH THE EXACT AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exact area is:
  ∫₀² x² dx

Using the power rule:
  = [x³/3]₀²
  = 8/3 ≈ 2.667

The Right Riemann Sum gave:
  3.75

Therefore:
  3.75 > 2.667

So the Right Riemann Sum is an overestimate.

That's exactly what we expected because:
  f(x) = x² is increasing on [0, 2].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INCREASING THE NUMBER OF RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The approximation becomes better as we increase n.

For example:
  R₄ uses 4 rectangles.

Then we could use:
  R₁₀, R₅₀, or R₁₀₀

As n → ∞, the rectangle width:
  Δx = (b - a)/n

approaches zero.

The rectangles become extremely thin.

Eventually:
  Rₙ → ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a Right Riemann Sum problem, follow these steps:

Step 1 — Identify a, b, and n
  [a, b] and the number of rectangles n.

Step 2 — Calculate the width
  Δx = (b - a)/n

Step 3 — Find the right endpoints
  xᵢ = a + iΔx
  for i = 1, 2, ..., n.

Step 4 — Evaluate the function
  Find:
    f(x₁), f(x₂), ..., f(xₙ)

Step 5 — Multiply by Δx
  f(xᵢ) Δx

Step 6 — Add everything
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the left endpoints
  Don't use:
    x₀, x₁, ..., xₙ₋₁
  That's for the Left Riemann Sum.
  For the Right Riemann Sum, use:
    x₁, x₂, ..., xₙ

Mistake 2: Forgetting the width
  The sum of the heights isn't the area.
  You need:
    Rₙ = (sum of heights)(Δx)

Mistake 3: Using the wrong formula for Δx
  Correct:
    Δx = (b - a)/n

Mistake 4: Assuming the Right Sum is always an overestimate
  Not necessarily.
  It depends on the behavior of the function.
    Increasing → generally overestimate
    Decreasing → generally underestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Width:
    Δx = (b - a)/n

  Right endpoint:
    xᵢ = a + iΔx

  Right Riemann Sum:
    Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

  Expanded form:
    Rₙ = [f(x₁) + f(x₂) + ... + f(xₙ)] Δx

  Limit:
    lim(n→∞) Rₙ = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LEFT VS. RIGHT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature                 Left Riemann Sum     |  Right Riemann Sum
  ───────────────────────────────────────────────────────────────────────
  Endpoint used           Left                    Right
  Starting point          x₀                      x₁
  Ending point            xₙ₋₁                     xₙ
  Formula                 Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx        Σᵢ₌₁ⁿ f(xᵢ) Δx
  Increasing function     Underestimate           Overestimate
  Decreasing function     Overestimate            Underestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Right Riemann Sum follows this process:

  Divide the interval
    ↓
  Choose the right endpoint
    ↓
  Use f(xᵢ) as the height
    ↓
  Multiply by Δx
    ↓
  Add all rectangle areas
    ↓
  Increase n
    ↓
  Approach the exact definite integral

The key formula to remember:
  Rₙ = Σᵢ₌₁ⁿ f(a + iΔx) Δx

where:
  Δx = (b - a)/n

In simple terms:
  A Right Riemann Sum estimates the area under a curve by using the right endpoint 
  of every subinterval as the height of its rectangle.
  `,
  examples: [
    "Right Riemann sum for f(x) = x² on [0,4] with n=4 → R₄ = 30",
    "Right Riemann sum for f(x) = x² on [0,2] with n=4 → R₄ = 15/4 = 3.75",
    "Increasing function → Right sum is an overestimate",
    "Decreasing function → Right sum is an underestimate",
    "Right Riemann sum formula: Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx",
    "Δx = (b - a)/n",
    "lim(n→∞) Rₙ = ∫ₐᵇ f(x) dx",
  ],
};

export default topic;