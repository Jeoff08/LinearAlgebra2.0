// filename: riemann-sums.ts

const topic = {
  id: "riemann-sums",
  title: "Riemann Sums",
  summary:
    "A method for approximating the area under a curve by dividing the region into many small rectangles and adding their areas together, forming the foundation for the definite integral.",
  details: `
A Riemann sum is a method for approximating the area under a curve by dividing the region into many small rectangles and adding their areas together.

It is one of the most important ideas leading to the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to find the area under:
  y = f(x)

from x = a to x = b.

If the curve is not a simple geometric shape, we can divide the interval into smaller pieces.

For example:
  [a, b]

can be divided into n equal subintervals.

Each subinterval produces a rectangle.

The total approximate area becomes:
  A ≈ Σᵢ₌₁ⁿ f(xᵢ*) Δx

This is called a Riemann sum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE RIEMANN SUM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general form is:
  Σᵢ₌₁ⁿ f(xᵢ*) Δx

where:
  n = number of rectangles
  Δx = width of each rectangle
  xᵢ* = selected point inside the i-th interval
  f(xᵢ*) = height of the rectangle

The area of each rectangle is:
  Area = width × height

so:
  Areaᵢ = f(xᵢ*) Δx

Adding all rectangles:
  Aₙ = Σᵢ₌₁ⁿ f(xᵢ*) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING Δx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the interval is [a, b] and it is divided into n equal parts, then:
  Δx = (b - a)/n

This is one of the most important formulas to remember.

Example:
  Suppose a = 0, b = 4, n = 8

Then:
  Δx = (4 - 0)/8
  Δx = 1/2

Each rectangle has width 1/2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LEFT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a left Riemann sum, we use the left endpoint of every subinterval.

If xᵢ = a + iΔx, then the left endpoints are:
  x₀, x₁, x₂, ..., xₙ₋₁

The formula is:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

Example:
  Consider f(x) = x² on [0, 4] using 4 rectangles.

First:
  Δx = (4 - 0)/4 = 1

The left endpoints are:
  0, 1, 2, 3

Therefore:
  L₄ = [f(0) + f(1) + f(2) + f(3)](1)
  Calculate:
    = 0² + 1² + 2² + 3²
    = 0 + 1 + 4 + 9
    L₄ = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RIGHT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a right Riemann sum, we use the right endpoint of each subinterval.

The formula is:
  Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

Using the same example:
  f(x) = x² on [0, 4], with 4 rectangles:

  Δx = 1

The right endpoints are:
  1, 2, 3, 4

Therefore:
  R₄ = [f(1) + f(2) + f(3) + f(4)](1)
    = 1² + 2² + 3² + 4²
    = 1 + 4 + 9 + 16
    R₄ = 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MIDPOINT RIEMANN SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of using the left or right endpoint, we can use the middle of each subinterval.

This is called a Midpoint Riemann Sum.

The formula is:
  Mₙ = Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2) Δx

For equal intervals, the midpoint of each rectangle is:
  xᵢ* = a + (i - 1/2)Δx

Therefore:
  Mₙ = Σᵢ₌₁ⁿ f(a + (i - 1/2)Δx) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE OF A MIDPOINT SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Again consider:
  f(x) = x² on [0, 4] with 4 rectangles.

We have:
  Δx = 1

The midpoints are:
  0.5, 1.5, 2.5, 3.5

Therefore:
  M₄ = [f(0.5) + f(1.5) + f(2.5) + f(3.5)](1)
    = (0.5)² + (1.5)² + (2.5)² + (3.5)²
    = 0.25 + 2.25 + 6.25 + 12.25
    M₄ = 21

The actual area is:
  ∫₀⁴ x² dx = 64/3 ≈ 21.333

So the midpoint approximation 21 is quite close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VISUAL MEANING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three approaches can be thought of as:

Left Sum:
  Use the left side of each interval for the rectangle's height.

Right Sum:
  Use the right side.

Midpoint Sum:
  Use the middle.

As we increase the number of rectangles, the rectangles become thinner and usually fit the curve more closely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INCREASING THE NUMBER OF RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we calculate the area using n = 4 rectangles.

The approximation may not be very accurate.

But if we increase it to n = 100, we get much thinner rectangles.

If we use n = 1000, the approximation becomes even better.

This leads to the fundamental idea:
  lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

And this limit is the definite integral:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

This is the connection between Riemann sums and integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RIEMANN SUM → DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important relationships in calculus:

  Riemann Sum → Limit → Definite Integral

More precisely:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

The Riemann sum is an approximation.

The definite integral represents the exact limiting value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SIGMA NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Riemann sums are commonly written using summation notation:
  Σᵢ₌₁ⁿ f(xᵢ*) Δx

The symbol Σ means "add."

For example:
  Σᵢ₌₁⁴ i

means:
  1 + 2 + 3 + 4

so:
  10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RIEMANN SUM USING a, b, AND n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For equal subdivisions:
  Δx = (b - a)/n

The right endpoint is:
  xᵢ = a + iΔx

Therefore, a right Riemann sum can be written as:
  Rₙ = Σᵢ₌₁ⁿ f(a + i(b - a)/n) · (b - a)/n

A left Riemann sum is:
  Lₙ = Σᵢ₌₀ⁿ⁻¹ f(a + i(b - a)/n) · (b - a)/n

And the midpoint sum is:
  Mₙ = Σᵢ₌₁ⁿ f(a + (i - 1/2)(b - a)/n) · (b - a)/n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. OVERESTIMATE VS. UNDERESTIMATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Riemann sums can sometimes tell us whether our answer is an overestimate or underestimate.

Increasing Function:
  If f(x) is increasing:
    Left Sum = Underestimate
    Right Sum = Overestimate

For example:
  f(x) = x² is increasing on x ≥ 0.

Therefore, on [0, 4]:
  Lₙ < actual area < Rₙ

Decreasing Function:
  If f(x) is decreasing:
    Left Sum = Overestimate
    Right Sum = Underestimate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY MIDPOINT SUMS ARE USEFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The midpoint method often provides a better approximation than simply using the left or right endpoint.

Instead of asking:
  What is the height at the beginning?
or:
  What is the height at the end?

we ask:
  What is the height approximately in the middle?

This often gives rectangles that more closely represent the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: COMPLETE RIEMANN SUM PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate:
  ∫₀² x² dx

using a right Riemann sum with 4 rectangles.

Step 1: Find Δx
  Δx = (2 - 0)/4
  Δx = 1/2

Step 2: Find the right endpoints
  xᵢ = 0 + i(1/2)

Therefore:
  1/2, 1, 3/2, 2

Step 3: Evaluate the function
  Since f(x) = x², we have:
    f(1/2) = 1/4
    f(1) = 1
    f(3/2) = 9/4
    f(2) = 4

Step 4: Add the rectangle areas
  R₄ = [1/4 + 1 + 9/4 + 4] · 1/2
  R₄ = (15/2) · 1/2
  R₄ = 15/4

or:
  R₄ = 3.75

The exact value is:
  ∫₀² x² dx = 8/3 ≈ 2.667

So the right Riemann sum is an overestimate, which makes sense because x² is increasing on [0, 2].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RIEMANN SUMS AND AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship can be summarized as:
  Divide → Approximate → Increase n → Take the limit

Mathematically:
  Σᵢ₌₁ⁿ f(xᵢ*) Δx

is the approximation.

Then:
  lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

becomes:
  ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Width of each rectangle:
    Δx = (b - a)/n

  Left Riemann Sum:
    Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx

  Right Riemann Sum:
    Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx

  Midpoint Riemann Sum:
    Mₙ = Σᵢ₌₁ⁿ f(a + (i - 1/2)Δx) Δx

  Definite Integral as a Limit:
    ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can think of Riemann sums as the bridge between geometry and calculus.

  Rectangles → Riemann Sum → Limit → Definite Integral → Exact Area

The most important idea is:

  A Riemann sum approximates the area under a curve by adding the areas 
  of many small rectangles. As the number of rectangles approaches infinity, 
  the Riemann sum approaches the exact value of the definite integral.

So whenever you see:
  lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

you should immediately recognize it as the mathematical definition of:
  ∫ₐᵇ f(x) dx
  `,
  examples: [
    "Left Riemann sum for f(x) = x² on [0,4] with n=4 → L₄ = 14",
    "Right Riemann sum for f(x) = x² on [0,4] with n=4 → R₄ = 30",
    "Midpoint Riemann sum for f(x) = x² on [0,4] with n=4 → M₄ = 21",
    "Right Riemann sum for ∫₀² x² dx with n=4 → R₄ = 15/4 = 3.75",
    "Riemann sum formula: Σᵢ₌₁ⁿ f(xᵢ*) Δx",
    "Δx = (b - a)/n",
    "Definite integral as limit: ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx",
  ],
};

export default topic;