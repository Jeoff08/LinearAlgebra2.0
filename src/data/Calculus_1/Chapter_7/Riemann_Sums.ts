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

The fundamental concept behind Riemann sums is to approximate the area of a curved region by using simple shapes rectangles whose areas are easy to compute. By dividing the interval [a, b] into smaller subintervals and constructing rectangles that approximate the curve's height at chosen points, we obtain an approximation of the total area. As we increase the number of rectangles, the approximation becomes more accurate because the rectangles better conform to the curve's shape. This approach is essential because many curves are not simple geometric shapes like rectangles or triangles, so we need a systematic way to compute their areas. The Riemann sum is precisely that: a sum of rectangle areas that approximates the area under a curve. This idea is the foundation upon which the definite integral is built, and it is one of the most important concepts in calculus because it bridges discrete sums with continuous accumulation.

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

The Riemann sum formula is a concise way to express the total approximate area under a curve. It consists of the sum over n rectangles of the product of the rectangle's height and its width. The height is given by the function value at a chosen point in each subinterval, called the sample point. The width is the length of each subinterval, denoted Δx. The notation Σ indicates that we are adding together n terms. This formula is versatile because it allows us to choose any sample point within each interval, leading to left, right, or midpoint sums. The Riemann sum is not a single value but a family of approximations that depend on how we partition the interval and which points we choose. However, for a continuous function, as the number of rectangles increases and their widths shrink, all these approximations converge to the same limit the definite integral. The formula encapsulates the entire process of approximating area and is the starting point for the formal definition of the integral.

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

When we divide the interval [a, b] into n equal subintervals, the width of each subinterval is computed by taking the total length of the interval and dividing it by the number of subintervals. This gives Δx = (b - a)/n. This uniform width simplifies the computation of Riemann sums because all rectangles have the same width. The choice of n determines the fineness of the partition: larger n means smaller Δx and a better approximation. The formula for Δx is crucial because it appears in every Riemann sum and in the definition of the definite integral as a limit. Understanding Δx helps in visualizing how the rectangles become thinner as n increases, leading to a more accurate approximation. In practice, we often start with a given n and compute Δx, then use it to find the sample points and evaluate the sum. This step is the foundation for setting up any Riemann sum problem.

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

A left Riemann sum uses the left endpoint of each subinterval to determine the height of the rectangle. This means that for the i-th interval, we take the value of the function at the leftmost point. For a function that is increasing on the interval, the left sum will underestimate the true area because the rectangle heights are slightly below the curve. Conversely, for a decreasing function, the left sum may overestimate the area. The left sum is one of the simplest Riemann sums to compute, as the sample points are straightforward. It is often used in introductory calculus to illustrate the concept of approximating area, and it serves as a building block for understanding the more general Riemann sum. The formula Lₙ = Σᵢ₌₀ⁿ⁻¹ f(xᵢ) Δx is easy to apply once the endpoints are identified, and it provides a clear visual interpretation: the rectangles sit under the curve (for increasing functions) and leave gaps.

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

A right Riemann sum uses the right endpoint of each subinterval to determine the height of the rectangle. This is the mirror image of the left sum. For an increasing function, the right sum will overestimate the area because the rectangle heights extend above the curve. For a decreasing function, the right sum will underestimate the area. The right sum is often used in conjunction with the left sum to bound the true area between two approximations. As n increases, both the left and right sums converge to the same value, which is the definite integral. The formula Rₙ = Σᵢ₌₁ⁿ f(xᵢ) Δx is similar to the left sum but uses the right endpoints. This type of sum is commonly used in numerical integration methods, such as the right endpoint rule, and it provides another perspective on how to approximate areas using rectangles.

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

The midpoint Riemann sum is often more accurate than the left or right sums because it uses the height of the function at the midpoint of each subinterval. This choice tends to balance the overestimates and underestimates that occur at the endpoints, reducing the overall error. The midpoint sum is particularly effective for smooth functions, as it often provides a very close approximation even with a moderate number of rectangles. The formula Mₙ = Σᵢ₌₁ⁿ f((xᵢ₋₁ + xᵢ)/2) Δx uses the average of the endpoints to find the sample point. This method is widely used in numerical integration techniques, such as the midpoint rule, and it highlights the importance of choosing sample points wisely to improve approximation accuracy. The midpoint sum is a natural extension of the Riemann sum concept and demonstrates how different choices of sample points affect the approximation.

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

Let's compute a midpoint sum for the same function f(x) = x² on [0, 4] with 4 rectangles. The width is Δx = 1, and the midpoints are 0.5, 1.5, 2.5, and 3.5. Evaluating the function at these points gives 0.25, 2.25, 6.25, and 12.25. Summing these and multiplying by Δx gives M₄ = 21. The exact area is 64/3 ≈ 21.333, so the midpoint sum is quite accurate with only 4 rectangles. This demonstrates that the midpoint method often provides a better approximation than the left or right sums, which gave 14 and 30 respectively. The midpoint sum balances the errors on both sides of the interval, leading to a more representative average height. This example illustrates why the midpoint rule is preferred in many numerical integration scenarios, especially when the function is smooth and relatively well-behaved.

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

The three types of Riemann sums left, right, and midpoint can be visualized on a graph. In the left sum, each rectangle's height is determined by the function value at the left side of the interval, so the rectangles extend horizontally to the right from that point. In the right sum, the height is determined by the right side, and the rectangles extend to the left. In the midpoint sum, the height is taken at the center, and the rectangle is centered on the subinterval. Visually, the rectangles in the midpoint sum often straddle the curve more evenly, leading to better approximation. As the number of rectangles increases, the width of each rectangle decreases, and the rectangles more closely follow the curve, regardless of the method. The visual comparison of these sums helps to understand why increasing n improves accuracy and why the midpoint sum is often the most accurate for a given n. This geometric interpretation is crucial for building intuition about Riemann sums and definite integrals.

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

The key insight behind Riemann sums is that as the number of rectangles n increases, the approximation becomes more accurate. With few rectangles, the approximation may be coarse, but as n grows, the rectangles become thinner and better conform to the curve's shape. In the limit as n approaches infinity, the Riemann sum becomes the exact area under the curve, which is the definite integral. This is a profound result: by taking a limit of sums of rectangle areas, we can compute the exact area of regions bounded by curves that are not simple geometric shapes. This process is the foundation of integral calculus and is one of the most important ideas in mathematics. The connection between Riemann sums and the definite integral is expressed by the equation ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx. This relationship is at the heart of the Fundamental Theorem of Calculus and is the reason why integration is so powerful for computing areas, volumes, and other accumulated quantities.

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

The transition from Riemann sums to the definite integral is one of the most important steps in calculus. A Riemann sum is an approximation of the area under a curve using a finite number of rectangles. The definite integral is the exact area, defined as the limit of Riemann sums as the number of rectangles approaches infinity. This definition is the formal foundation of integration. It tells us that the definite integral is not just a symbolic expression but a well-defined number that can be approximated by Riemann sums. In practice, we use the Fundamental Theorem of Calculus to evaluate definite integrals exactly, but the underlying definition remains the limit of Riemann sums. This connection is essential for understanding why integration works and for applying it to real-world problems where the exact antiderivative may not be available. The Riemann sum definition also provides a way to numerically approximate integrals when analytical methods are difficult.

This is one of the most important relationships in calculus:

  Riemann Sum → Limit → Definite Integral

More precisely:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ*) Δx

The Riemann sum is an approximation.

The definite integral represents the exact limiting value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SIGMA NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sigma notation is a compact way to represent sums of many terms. The Greek letter Σ (sigma) indicates that we are adding a sequence of terms. The expression below the Σ gives the starting index, and the expression above gives the ending index. For example, Σᵢ₌₁⁴ i means the sum of i from 1 to 4: 1 + 2 + 3 + 4 = 10. In Riemann sums, the index i runs from 1 to n, and the term is f(xᵢ*) Δx. Sigma notation is essential for expressing Riemann sums concisely and for working with the definition of the definite integral. It allows us to write long sums in a compact form, which is especially useful when dealing with many terms or when taking limits. Understanding sigma notation is crucial for reading and writing calculus problems involving sums, series, and integrals. It is a fundamental part of the language of calculus.

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

We can write Riemann sums explicitly in terms of a, b, and n. For a right sum, the sample points are xᵢ = a + iΔx, where Δx = (b - a)/n. The sum becomes Rₙ = Σᵢ₌₁ⁿ f(a + i(b - a)/n) · (b - a)/n. Similarly, a left sum uses xᵢ = a + (i-1)Δx, giving Lₙ = Σᵢ₌₀ⁿ⁻¹ f(a + i(b - a)/n) · (b - a)/n. The midpoint sum uses xᵢ* = a + (i - 1/2)Δx. These explicit forms are useful when we want to compute Riemann sums numerically or when we need to prove properties of integrals. They also show how the choice of sample points affects the sum. In calculus courses, these forms are often used to demonstrate the limit definition of the definite integral and to connect the geometric intuition with algebraic expressions.

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

Riemann sums can provide information about whether an approximation is an overestimate or an underestimate of the true area. This depends on the behavior of the function and the choice of sample points. For an increasing function, the left sum uses lower heights and is an underestimate, while the right sum uses higher heights and is an overestimate. For a decreasing function, the reverse is true: the left sum overestimates and the right sum underestimates. The midpoint sum typically lies between the two and is often closer to the true value. Understanding these relationships helps in interpreting results and in choosing the appropriate method for approximation. In numerical analysis, knowing whether a method overestimates or underestimates can be useful for error estimation and for refining approximations. This concept is also important in the context of the definite integral as the limit of Riemann sums, where the overestimates and underestimates converge to the same value.

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

The midpoint method is often preferred because it provides a better approximation for a given number of rectangles compared to the left or right sums. This is because the midpoint of each subinterval tends to average the errors on both sides, resulting in a more balanced estimate. For many functions, especially those that are smooth, the midpoint sum converges to the true integral faster than the left or right sums. This property makes it a valuable tool in numerical integration, where we often want to achieve a desired accuracy with as few calculations as possible. The midpoint rule is a standard technique in numerical analysis and is the basis for more advanced methods like the trapezoidal rule and Simpson's rule. Its simplicity and accuracy make it an excellent choice for introductory calculus problems and for practical applications where a quick estimate is needed.

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

Let's work through a complete example of a right Riemann sum. We want to approximate the area under f(x) = x² from 0 to 2 using 4 rectangles. First, compute Δx = (2 - 0)/4 = 0.5. The right endpoints are 0.5, 1.0, 1.5, and 2.0. Evaluating f at these points gives 0.25, 1, 2.25, and 4. Summing these gives 7.5, and multiplying by Δx = 0.5 gives 3.75. The exact value is ∫₀² x² dx = 8/3 ≈ 2.667, so the right sum is an overestimate because x² is increasing. This example illustrates the step-by-step process: find Δx, determine the sample points, evaluate the function, sum the heights, and multiply by Δx. It also demonstrates the relationship between the sum and the actual area and shows how the choice of sample points affects the result.

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

The relationship between Riemann sums and the area under a curve is direct: a Riemann sum is an approximation of that area. By partitioning the interval into subintervals and constructing rectangles, we estimate the area by summing the areas of these rectangles. As the number of subintervals increases, the approximation improves, and in the limit, we obtain the exact area, which is the definite integral. This process is the foundation of integral calculus and is essential for understanding how integration works. The area under a curve is not just a geometric concept; it represents accumulated quantities in many physical, economic, and scientific contexts. Riemann sums provide a rigorous way to define and compute these quantities, making them one of the most important tools in applied mathematics.

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

This section summarizes the key formulas for Riemann sums and the definite integral. The width of each rectangle is Δx = (b - a)/n. The left, right, and midpoint sums have distinct formulas based on the choice of sample points. The limit of these sums as n → ∞ defines the definite integral. These formulas are the foundation for all of integral calculus and should be memorized and understood. They appear in many contexts, from numerical integration to the proof of the Fundamental Theorem of Calculus. Having a firm grasp of these formulas is essential for success in calculus and its applications.

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

Riemann sums are the bridge between the discrete world of sums and the continuous world of calculus. They allow us to approximate the area under a curve using simple geometric shapes, and then, by taking a limit, define the exact area as a definite integral. This progression from rectangles to sums to limits is the core idea behind integral calculus. The Riemann sum concept is not only important for theoretical understanding but also for practical applications, such as numerical integration, where we often need to compute integrals that do not have elementary antiderivatives. The big picture is that Riemann sums provide a rigorous definition of the integral and a way to approximate it, forming the foundation for the Fundamental Theorem of Calculus and all its applications. Understanding this progression is essential for mastering calculus and for applying it to real-world problems.

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