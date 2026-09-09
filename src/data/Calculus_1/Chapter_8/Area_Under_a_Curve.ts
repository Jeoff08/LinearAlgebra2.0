// filename: area-under-a-curve.ts

const topic = {
  id: "area-under-a-curve",
  title: "Area Under a Curve",
  summary:
    "The amount of space between the graph of a function and the x-axis over a specific interval, calculated using the definite integral ∫ₐᵇ f(x) dx.",
  details: `
The area under a curve is one of the most fundamental applications of integration. It refers to the amount of space between the graph of a function and the coordinate axes over a specific interval.

For example, suppose we have the function:
  y = f(x)

and we want to find the area between the curve and the x-axis from:
  x = a to x = b

If the function is above the x-axis, the area is given by:
  A = ∫ₐᵇ f(x) dx

The symbol ∫ represents integration, which allows us to add together infinitely many tiny areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "AREA UNDER A CURVE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The "area under a curve" refers to the total amount of two-dimensional space enclosed between the graph of a function and the x-axis over a specified interval. This region is bounded on the top by the curve, on the bottom by the x-axis, and on the sides by the vertical lines x = a and x = b. When the function lies entirely above the x-axis, this area represents the geometric area of the region. The concept is fundamental in calculus because it extends the notion of area from simple geometric shapes to regions bounded by curves, which are common in real-world applications. For example, in physics, the area under a velocity-time graph gives the distance traveled; in economics, it can represent total revenue or consumer surplus. Understanding what this area represents is the first step toward applying integration to solve practical problems.

Imagine a curve drawn on a graph:
  y = f(x)

The region under the curve is bounded by:
  • The curve y = f(x)
  • The x-axis
  • A left boundary x = a
  • A right boundary x = b

For example:

"image": "src/assets/3 (2).jpg",

The shaded space between the curve and the x-axis is called the area under the curve.

If the curve stays above the x-axis, we can directly calculate the area using:
  A = ∫ₐᵇ f(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE INTEGRATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration is used to find the area under a curve because many curves are not simple geometric shapes like rectangles, triangles, or circles. For these simple shapes, we have straightforward formulas derived from basic geometry. However, for a curve like y = x² or y = sin x, the region underneath does not conform to any elementary shape. The genius of calculus is that it approximates such curved regions using a large number of thin rectangles. Each rectangle has a width of Δx and a height equal to the function value at a chosen point within the interval. By summing the areas of these rectangles, we obtain an approximation of the total area. As the number of rectangles increases (and their width shrinks to zero), this approximation becomes exact. The definite integral is precisely the limit of this summation process. This method allows us to compute exact areas for regions bounded by any continuous function, making integration an indispensable tool in mathematics and its applications.

For simple shapes, we can use geometry formulas.

For example:
  Rectangle: A = lw
  Triangle: A = (1/2)bh

However, curved regions do not always have simple formulas.

Consider the curve:
  y = x²

The region underneath it is not a rectangle, triangle, or circle.

So how can we find its exact area?

Calculus solves this problem by dividing the region into many extremely thin rectangles.

Each small rectangle has:
  Width: Δx
  Height: f(x)

Therefore, the approximate area of one rectangle is:
  Area = f(x) Δx

Adding all the rectangles gives:
  f(x₁)Δx + f(x₂)Δx + f(x₃)Δx + ...

As the rectangles become thinner and thinner, the approximation becomes more accurate.

Eventually:
  A = ∫ₐᵇ f(x) dx

This is the main idea behind finding the area under a curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE DEFINITE INTEGRAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral formula is the mathematical expression that allows us to compute the exact area under a curve. It is written as A = ∫ₐᵇ f(x) dx, where f(x) is the function defining the curve, a is the lower limit of integration (the starting point on the x-axis), and b is the upper limit (the ending point). The symbol dx indicates that the integration is performed with respect to the variable x. This notation encapsulates the entire limiting process of adding infinitely many infinitesimal rectangles. The integral sign ∫, introduced by Leibniz, represents the sum of these infinite pieces. The definite integral is a number that gives the net signed area between the curve and the x-axis over the interval. When the function is non-negative, this number is exactly the geometric area of the region. The formula is the cornerstone of integral calculus and is used in virtually every application of integration, from physics to economics.

The general formula is:
  A = ∫ₐᵇ f(x) dx

Where:
  A = Area
  f(x) = The function
  a = Left boundary
  b = Right boundary
  dx = Indicates that we are integrating with respect to x

The numbers a and b are called the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a concrete example to see how the definite integral computes the area under a curve. Consider the function f(x) = x². We want to find the area under this curve from x = 0 to x = 2. Using the definite integral formula, we set up A = ∫₀² x² dx. Next, we find the antiderivative of x², which is x³/3. The Fundamental Theorem of Calculus tells us that the definite integral is the antiderivative evaluated at the upper limit minus the antiderivative evaluated at the lower limit. Substituting x = 2 gives 2³/3 = 8/3, and substituting x = 0 gives 0. The area is therefore 8/3 - 0 = 8/3 square units. This result represents the exact area under the parabola y = x² from 0 to 2. This example demonstrates how straightforward it is to compute areas using integration, once the antiderivative is known. It also illustrates why the definite integral is such a powerful tool for solving area problems.

Suppose:
  f(x) = x²

Find the area under the curve from x = 0 to x = 2.

We use:
  A = ∫₀² x² dx

The antiderivative of x² is:
  x³/3

Therefore:
  A = [x³/3]₀²

Substitute the upper limit:
  A = 2³/3

Substitute the lower limit:
  A = 0³/3

Therefore:
  A = 8/3 - 0
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING THE LIMITS OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limits of integration, a and b, define the interval over which the area is calculated. The lower limit a is the starting point on the x-axis, and the upper limit b is the ending point. The definite integral only accumulates area between these two boundaries. Changing the limits changes the region under consideration and thus the value of the integral. For example, ∫₁⁴ f(x) dx computes the area from x = 1 to x = 4, which is a different region than ∫₀² f(x) dx. The limits can be any real numbers, provided the function is continuous on the interval. In many problems, the limits are determined by the points where the curve intersects the axes or other curves. Understanding the role of the limits is essential for correctly interpreting and evaluating definite integrals. The limits encapsulate the extent of the region, and the integral gives the total accumulation of the function over that span.

Consider:
  ∫ₐᵇ f(x) dx

The lower limit a tells us where the area begins.

The upper limit b tells us where the area ends.

For example:
  ∫₁⁴ f(x) dx

means that we are finding the area from x = 1 to x = 4.

The integral only calculates the area within that interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: AREA UNDER A STRAIGHT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's compute the area under a linear function. Consider f(x) = 2x, and we want the area from x = 0 to x = 3. The definite integral is ∫₀³ 2x dx. The antiderivative of 2x is x² (since the derivative of x² is 2x). Applying the limits gives [x²]₀³ = 3² - 0² = 9. Thus, the area is 9 square units. This result can also be verified geometrically: the region is a right triangle with base 3 and height 6 (since f(3) = 6), and its area is (1/2)(3)(6) = 9. This example shows that integration gives the same result as geometry for linear functions, confirming the validity of the method. It also illustrates that the area under a straight line can be computed both ways, which helps build confidence in the integration technique. The linear case is a stepping stone to more complex curves where geometry is not an option.

Suppose:
  f(x) = 2x

Find the area from x = 0 to x = 3.

Using integration:
  A = ∫₀³ 2x dx

Find the antiderivative:
  ∫ 2x dx = x²

Therefore:
  A = [x²]₀³

Substitute:
  A = 3² - 0²
  A = 9

Therefore:
  A = 9 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA UNDER A CURVE AND THE FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus (FTC) is the bridge that connects differentiation and integration, and it is the key to evaluating definite integrals. The theorem has two parts. The second part, also known as the Evaluation Theorem, states that if F is an antiderivative of f on [a, b], then ∫ₐᵇ f(x) dx = F(b) - F(a). This means that to compute the area under a curve, we simply need to find any antiderivative of the function, evaluate it at the upper and lower limits, and subtract. This is a dramatic simplification compared to computing Riemann sums. The FTC is what makes integration practical and is one of the most important results in all of mathematics. It allows us to compute areas, volumes, and other accumulated quantities efficiently. In the context of area under a curve, the FTC provides a straightforward algorithm: find the antiderivative, evaluate, and subtract. This process is the standard method for solving area problems in calculus.

The Fundamental Theorem of Calculus makes finding areas much easier.

Suppose:
  A = ∫ₐᵇ f(x) dx

If F'(x) = f(x), then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This means:
  Step 1: Find the antiderivative F(x).
  Step 2: Substitute the upper limit b.
  Step 3: Substitute the lower limit a.
  Step 4: Subtract: F(b) - F(a)

Example:
  Find: ∫₁³ x² dx

  Step 1: Find the Antiderivative
    ∫ x² dx = x³/3

  Step 2: Apply the Limits
    [x³/3]₁³

  Step 3: Substitute
    = 3³/3 - 1³/3
    = 27/3 - 1/3
    = 26/3

  Therefore:
    A = 26/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT HAPPENS WHEN THE CURVE IS BELOW THE X-AXIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the curve lies below the x-axis, the definite integral gives a negative value because the signed area is negative. This does not mean the geometric area is negative; it simply indicates that the region is below the axis. For example, ∫₀² -x dx = -2. The number -2 is the signed area, but the geometric area is 2 square units. To obtain the geometric area, we take the absolute value of the integral or compute the integral of the absolute value of the function. If the function is entirely below the x-axis, the geometric area is -∫ₐᵇ f(x) dx. This distinction is crucial because in many applications, such as computing total distance from velocity, we need the total positive area, not the signed area. Understanding this difference prevents errors and ensures that the area calculation is correct for the context of the problem. Always check the sign of the function on the interval before interpreting the integral as a geometric area.

This is a very important concept.

Suppose:
  f(x) = -x

from x = 0 to x = 2.

The graph is below the x-axis.

If we calculate:
  ∫₀² -x dx

we get:
  [-x²/2]₀² = -2

But area cannot be negative.

The negative result only tells us that the graph is below the x-axis.

Therefore, the actual geometric area is:
  2 square units

Important Difference:
  Definite Integral ≠ Always Geometric Area

A definite integral calculates signed area:
  • Area above the x-axis → Positive
  • Area below the x-axis → Negative

Geometric area is always positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHEN A CURVE CROSSES THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a function crosses the x-axis within the interval, the definite integral will sum positive and negative contributions, which may partially or completely cancel. To find the total geometric area, we must split the interval at each crossing point where f(x) = 0, and compute the absolute value of the integral over each subinterval. For example, for f(x) = x - 1 on [0, 3], the function crosses at x = 1. The area from 0 to 1 is below the axis, so its integral is negative, and the area from 1 to 3 is positive. The total geometric area is |∫₀¹ (x - 1) dx| + |∫₁³ (x - 1) dx|. This is equivalent to ∫₀³ |f(x)| dx. Splitting the integral ensures that all contributions are positive, giving the correct total area. This technique is essential whenever the graph crosses the axis, and it is a common application of the absolute value function in integration.

Suppose a function is above the x-axis in one interval and below it in another.

Example:
  f(x) = x - 1

from x = 0 to x = 3.

The function crosses the x-axis when:
  x - 1 = 0
  x = 1

We must split the area into two parts:
  A = A₁ + A₂

The first area is from 0 to 1.
The second area is from 1 to 3.

Mathematically:
  A = |∫₀¹ (x - 1) dx| + |∫₁³ (x - 1) dx|

This ensures that both areas are positive.

Another way to write total geometric area is:
  A = ∫ₐᵇ |f(x)| dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. AREA UNDER A CURVE USING SMALL RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The deeper idea behind integration is the process of approximating a curved region with many thin rectangles. This is the foundation of the Riemann sum. To approximate the area under y = f(x) from a to b, we divide the interval into n subintervals of equal width Δx = (b - a)/n. In each subinterval, we choose a sample point xᵢ* and form a rectangle of height f(xᵢ*) and width Δx. The sum of these rectangle areas, Σᵢ₌₁ⁿ f(xᵢ*) Δx, is a Riemann sum that approximates the area. As n increases, the rectangles become thinner and the approximation improves. In the limit as n → ∞, the sum approaches the exact area, which is the definite integral. This limiting process is the definition of the integral. It shows that integration is essentially a process of adding infinitely many infinitesimally small pieces. Understanding this geometric interpretation is crucial for grasping why the definite integral gives the area under a curve and for appreciating the beauty of calculus.

The deeper idea behind integration comes from approximating the area using rectangles.

Suppose the interval is [a, b].

Divide the interval into n small parts.

The width of each rectangle is approximately:
  Δx = (b - a)/n

The approximate area of one rectangle is:
  f(xᵢ) Δx

Adding all rectangles:
  A ≈ f(x₁)Δx + f(x₂)Δx + ... + f(xₙ)Δx

Using sigma notation:
  A ≈ Σᵢ₌₁ⁿ f(xᵢ) Δx

As the number of rectangles approaches infinity:
  A = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This limit is called the definite integral:
  ∫ₐᵇ f(x) dx

So integration is essentially a process of adding infinitely many extremely small areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT STEPS IN SOLVING AREA UNDER A CURVE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solving area under a curve problems involves a systematic process. First, identify the function and the interval over which the area is to be computed. Next, determine whether the function is above, below, or crosses the x-axis on that interval. This step is crucial because it determines whether you need to take absolute values or split the integral. Then, set up the definite integral with the correct limits. Find the antiderivative of the function. Apply the Fundamental Theorem of Calculus by evaluating the antiderivative at the upper and lower limits and subtracting. Finally, interpret the result: if the function was non-negative, the result is the geometric area; if it crossed the axis, ensure you have taken the absolute values or split the integral to get the total geometric area. Always express the final answer in square units. Following these steps carefully will help you avoid common mistakes and arrive at the correct answer.

Step 1: Identify the Function
  Example: f(x) = x² + 1

Step 2: Identify the Interval
  Example: a = 0, b = 3

Step 3: Check the Graph
  Determine whether the function is:
    • Above the x-axis
    • Below the x-axis
    • Crossing the x-axis

Step 4: Set Up the Integral
  A = ∫ₐᵇ f(x) dx

Step 5: Find the Antiderivative
  For example: ∫ x² dx = x³/3

Step 6: Apply the Limits
  Use: F(b) - F(a)

Step 7: Write the Answer
  Always include square units: square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common mistakes when calculating the area under a curve. One is forgetting to include the limits of integration, which results in an indefinite integral rather than a definite one. Another is ignoring the sign of the function: if the function is below the x-axis, the integral will be negative, but the geometric area is positive. A related mistake is failing to split the integral when the function crosses the x-axis, leading to a net signed area that does not represent the total geometric area. Students sometimes forget to include the units, especially square units, in the final answer. Additionally, algebraic errors in finding the antiderivative or evaluating the limits can lead to incorrect results. To avoid these errors, always check the sign of the function, carefully compute the antiderivative, and verify your answer by considering the geometry of the region. Practice and attention to detail will help you master area calculations.

1. Forgetting the Limits
  Incorrect: ∫ x² dx
  when the problem asks for an area from x = 0 to x = 2.
  Correct: ∫₀² x² dx

2. Forgetting That Area Cannot Be Negative
  If the graph is below the x-axis, the integral may be negative.
  For geometric area, use the absolute value or split the interval.

3. Forgetting to Check Where the Graph Crosses the Axis
  If a function crosses the x-axis, you usually need to split the problem into separate intervals.

4. Forgetting the Units
  Area should be written in units², not just units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area under a curve is computed using the definite integral. When the function is non-negative, the area is simply the integral. When the function is non-positive, the area is the negative of the integral. When the function changes sign, the total area is the integral of the absolute value. The Fundamental Theorem of Calculus provides the practical method for evaluating these integrals. These formulas are the core of integral calculus and are used in countless applications, from computing areas to solving differential equations. Memorizing these formulas is helpful, but understanding their derivation and the conditions under which they apply is more important. Each formula corresponds to a specific geometric situation, and choosing the correct one is essential for obtaining the right result.

  Area Above the x-Axis:
    A = ∫ₐᵇ f(x) dx
    provided f(x) ≥ 0.

  Area Below the x-Axis:
    A = -∫ₐᵇ f(x) dx
    when f(x) ≤ 0.

  Total Area When the Curve Crosses the Axis:
    A = ∫ₐᵇ |f(x)| dx

  Fundamental Theorem of Calculus:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
    where F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area under a curve is a fundamental application of integration. It represents the space between a function and the x-axis over an interval. The definite integral is the tool used to compute this area. The limits of integration define the interval, and the integrand is the function. A definite integral gives signed area, which can be positive, negative, or zero, depending on the position of the curve relative to the x-axis. To obtain geometric area, which is always non-negative, we use absolute values or split the integral at crossing points. The Fundamental Theorem of Calculus provides the means to evaluate definite integrals efficiently. Always remember to express the final answer in square units. Mastering these concepts is essential for applying calculus to real-world problems and for understanding more advanced topics in mathematics and science.

  • The area under a curve is the space between the curve and the x-axis.
  • We use definite integrals to calculate the exact area.
  • The basic formula is: A = ∫ₐᵇ f(x) dx
  • The limits a and b determine where the region begins and ends.
  • Integration works by adding infinitely many tiny pieces of area.
  • A definite integral represents signed area.
  • Geometric area is always positive.
  • If the curve crosses the x-axis, split the interval or use absolute value.
  • Always express the final answer in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area Under a Curve is the process of finding the amount of space between a function and the x-axis over a specific interval. Calculus accomplishes this by dividing the region into infinitely many tiny rectangles and adding their areas together through a definite integral:

  A = ∫ₐᵇ f(x) dx

The main thing to remember is that if the curve goes below the x-axis, the definite integral may become negative, but the actual geometric area is always positive.
  `,
  examples: [
    "Area under f(x) = x² from 0 to 2 → A = ∫₀² x² dx = 8/3",
    "Area under f(x) = 2x from 0 to 3 → A = ∫₀³ 2x dx = 9",
    "Area under f(x) = x² from 1 to 3 → A = ∫₁³ x² dx = 26/3",
    "Area below x-axis: f(x) = -x from 0 to 2 → integral = -2, geometric area = 2",
    "Crossing x-axis: f(x) = x - 1 from 0 to 3 → split at x = 1",
    "Total area: A = ∫ₐᵇ |f(x)| dx",
    "FTC: ∫ₐᵇ f(x) dx = F(b) - F(a)",
  ],
};

export default topic;