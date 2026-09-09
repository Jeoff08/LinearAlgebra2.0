// filename: the-definite-integral.ts

const topic = {
  id: "the-definite-integral",
  title: "The Definite Integral",
  summary:
    "A fundamental concept in calculus used to find the accumulated quantity over an interval, representing signed area under a curve, defined as the limit of Riemann sums.",
  details: `
A definite integral is a fundamental concept in Calculus used to find the accumulated quantity over an interval. One of its most common applications is finding the signed area under a curve.

The general form is:
  ∫ₐᵇ f(x) dx

It represents the accumulation of the function f(x) from x = a to x = b.

The symbols a and b are called the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE PARTS OF A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral is denoted by the integral sign ∫ with lower and upper limits. The integrand f(x) is the function being accumulated, and dx indicates that the variable of integration is x. The lower limit a is the starting point of the interval, and the upper limit b is the ending point. The definite integral represents the net accumulation of f(x) over the interval [a, b]. This accumulation can be thought of as the sum of infinitely many infinitesimal products f(x) dx, where dx is an infinitesimal change in x. The notation ∫ₐᵇ f(x) dx is read as "the integral from a to b of f of x, dx." Understanding each part of this notation is crucial for correctly interpreting and evaluating definite integrals. The definite integral is a powerful tool that generalizes the concept of summation to continuous functions, allowing us to compute total quantities such as area, volume, work, and accumulated change in many scientific and engineering contexts.

Consider:
  ∫ₐᵇ f(x) dx

Each part has a meaning:

  Part            Meaning
  ──────────────┼─────────────────────────────────────────────────
  ∫               Integral symbol; represents accumulation
  a               Lower limit or starting value
  b               Upper limit or ending value
  f(x)            Integrand or function being integrated
  dx              Indicates that the variable is x
  ∫ₐᵇ f(x) dx     Accumulated value from a to b

The notation:
  ∫ₐᵇ

means:
  Add infinitely many extremely small quantities from x = a to x = b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before the invention of calculus, finding the area under a curved graph was a challenging problem because the boundary is not straight. The key insight of integral calculus is to approximate the curved region with many thin rectangles, sum their areas, and then take a limit as the rectangles become infinitely thin. This process is the basis for the definite integral. For a function f(x) that is continuous on [a, b], we divide the interval into n subintervals of equal width Δx = (b - a)/n. In each subinterval, we choose a sample point xᵢ* and form a rectangle with height f(xᵢ*) and width Δx. The sum of these rectangle areas is a Riemann sum. As n increases, the rectangles become thinner, and the Riemann sum approaches the exact area under the curve. The limit of the Riemann sum as n → ∞ is the definite integral. This definition not only provides a rigorous foundation for integration but also connects the geometric concept of area to the algebraic operation of integration. It is one of the most important ideas in mathematics, as it allows us to compute accumulated quantities for a wide range of continuous functions.

Before Calculus, finding the exact area under a curved graph was difficult.

For example, suppose we have:
  y = f(x)

between:
  x = a and x = b

Calculus solves this problem by dividing the region into many tiny rectangles.

Each rectangle has approximately:
  Width: Δx
  Height: f(xᵢ)

Therefore, the area of one rectangle is:
  f(xᵢ) Δx

Adding all the small rectangles gives a Riemann Sum:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

As the number of rectangles becomes larger:
  n → ∞

their widths become smaller:
  Δx → 0

The approximation approaches the exact accumulated value:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This is the fundamental definition of the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VISUAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the definite integral ∫₀³ x² dx. This integral represents the net signed area under the curve y = x² from x = 0 to x = 3. Geometrically, this is the area of the region bounded by the parabola, the x-axis, and the vertical lines x = 0 and x = 3. Since x² is non-negative on this interval, the integral gives the total geometric area. The value of this integral is 9, which means the area under the curve is 9 square units. This example illustrates how a definite integral can be interpreted as the area under a curve when the function is positive. It also shows how the integral notation compactly represents the accumulation of f(x) over the interval. Visualizing the region helps in understanding why the integral gives the area and why the process of adding infinitely many rectangles is necessary. This visual interpretation is a powerful tool for building intuition about definite integrals.

Consider:
  ∫₀³ x² dx

This represents the signed area under y = x² from x = 0 to x = 3.

The graph can be imagined as a curved region. Instead of measuring the entire curved region at once, Calculus adds together infinitely many tiny pieces of area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FROM RIEMANN SUMS TO DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship between Riemann sums and definite integrals is the cornerstone of integral calculus. A Riemann sum is a finite approximation of the area under a curve, computed by summing the areas of rectangles. As the number of rectangles increases, the approximation improves. The definite integral is defined as the limit of these Riemann sums as the number of rectangles approaches infinity. This definition is rigorous and does not depend on the choice of sample points, as long as the function is continuous. The transition from sums to integrals is a major conceptual leap: it replaces discrete summation with continuous accumulation. This connection is essential for understanding the Fundamental Theorem of Calculus, which provides a practical way to evaluate definite integrals using antiderivatives. Without the limit definition, we would not have a precise mathematical basis for integration. The Riemann sum definition also forms the basis for numerical integration methods, which are used when an antiderivative cannot be found.

The relationship between Riemann sums and definite integrals is extremely important:

  Riemann Sum → Limit → Definite Integral

A Riemann sum with a finite number of rectangles gives an approximation:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

But as n → ∞, we obtain:
  ∫ₐᵇ f(x) dx

Therefore:
  Definite Integral = Exact accumulation obtained from infinitely many tiny pieces

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DEFINITE INTEGRAL AS SIGNED AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A crucial concept to understand is that the definite integral represents signed area. This means that regions above the x-axis contribute positive area, while regions below the x-axis contribute negative area. The definite integral sums these signed contributions, which can result in a positive, negative, or zero value. This is different from ordinary geometric area, which is always non-negative. For example, the integral of a negative function over an interval will be negative, even though the geometric area is positive. To find total geometric area, we must take the absolute value of the function or split the integral at points where the function crosses the x-axis. The concept of signed area is essential in many applications, such as computing net displacement from velocity, where positive and negative velocities represent motion in opposite directions. Understanding signed area is key to correctly interpreting the results of definite integrals in context.

One important thing to understand is that a definite integral gives signed area, not always ordinary geometric area.

Above the x-axis:
  If f(x) > 0, then ∫ₐᵇ f(x) dx > 0.
  The contribution is positive.

Below the x-axis:
  If f(x) < 0, then ∫ₐᵇ f(x) dx < 0.
  The contribution is negative.

Example:
  Suppose f(x) = -x from x = 0 to x = 2.

  Then:
    ∫₀² -x dx = [-x²/2]₀² = -2

  The definite integral is -2.

  The negative sign means that the region lies below the x-axis.

  However, the actual geometric area is:
    2 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EVALUATING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most common and efficient method for evaluating a definite integral is to use the Fundamental Theorem of Calculus (Part 2). This theorem states that if F is an antiderivative of f on [a, b], then the definite integral of f from a to b is F(b) - F(a). In practice, this means we find an antiderivative of the integrand, evaluate it at the upper limit, evaluate it at the lower limit, and subtract. This process is much simpler than computing Riemann sums. The antiderivative is often written with brackets and the limits of integration. It is important to remember that the constant of integration cancels out when evaluating a definite integral, so we do not include it. This method is the standard way to compute definite integrals in calculus and is used in virtually every application of integration. It requires a good understanding of antiderivatives and integration techniques, but it makes evaluation straightforward.

The most common method for evaluating a definite integral uses the Fundamental Theorem of Calculus.

If:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This means:
  • Find the antiderivative.
  • Substitute the upper limit.
  • Substitute the lower limit.
  • Subtract.

This is often written as:
  [F(x)]ₐᵇ

which means:
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1: SIMPLE DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's evaluate a simple definite integral using the Fundamental Theorem of Calculus. We want to compute ∫₀³ x² dx. The antiderivative of x² is x³/3. Evaluating at the upper limit gives 3³/3 = 9. Evaluating at the lower limit gives 0³/3 = 0. Subtracting gives 9 - 0 = 9. Therefore, the integral equals 9, which represents the area under the curve y = x² from 0 to 3. This example is straightforward and illustrates the basic process: find the antiderivative, evaluate at the limits, and subtract. It is a good starting point for understanding how definite integrals work. As functions become more complex, the process remains the same, but finding the antiderivative may require more advanced techniques. This example also confirms that the definite integral of a non-negative function over an interval gives the geometric area.

Evaluate:
  ∫₀³ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

Therefore:
  ∫₀³ x² dx = [x³/3]₀³

Step 2: Substitute the upper limit
  3³/3 = 9

Step 3: Substitute the lower limit
  0³/3 = 0

Step 4: Subtract
  9 - 0 = 9

Therefore:
  ∫₀³ x² dx = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2: POLYNOMIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now let's evaluate a definite integral of a linear polynomial. We want to compute ∫₁³ (2x + 1) dx. The antiderivative of 2x + 1 is x² + x. Evaluating at the upper limit 3 gives 3² + 3 = 12. Evaluating at the lower limit 1 gives 1² + 1 = 2. Subtracting gives 12 - 2 = 10. Therefore, the integral equals 10. This example shows that the process works for any polynomial, and the result is a number that can be interpreted as the signed area under the line y = 2x + 1 from x = 1 to x = 3. Since the function is positive on this interval, the integral also gives the geometric area. This example reinforces the procedure and demonstrates that definite integrals can be computed for any function for which we can find an antiderivative. It also shows how integration accumulates the values of the function over the interval.

Evaluate:
  ∫₁³ (2x + 1) dx

Step 1: Find the antiderivative
  ∫ (2x + 1) dx = x² + x

Step 2: Apply the limits
  [x² + x]₁³

This means:
  (3² + 3) - (1² + 1)
  = (9 + 3) - (1 + 1)
  = 12 - 2
  = 10

Therefore:
  ∫₁³ (2x + 1) dx = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3: CONSTANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluating the definite integral of a constant function is particularly simple. For ∫₂⁵ 4 dx, the antiderivative of 4 is 4x. Evaluating at 5 gives 20, and at 2 gives 8. Subtracting gives 12. This result also makes geometric sense: the graph y = 4 is a horizontal line, and the region under it from x = 2 to x = 5 is a rectangle with height 4 and width 3, so its area is 12. This example illustrates that the definite integral of a constant function is simply the constant times the length of the interval. This property is consistent with the interpretation of the integral as accumulation: a constant function accumulates at a constant rate, so the total accumulation is the rate times the elapsed interval. This is a useful check for evaluating integrals and for understanding the relationship between integration and geometry.

Evaluate:
  ∫₂⁵ 4 dx

The antiderivative of 4 is:
  4x

Therefore:
  [4x]₂⁵ = 4(5) - 4(2)
  = 20 - 8
  = 12

This also makes sense geometrically.

The graph y = 4 creates a rectangle with:
  Height = 4
  Width = 5 - 2 = 3

Therefore:
  A = (4)(3) = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus (FTC) is the central theorem that connects differentiation and integration. It has two parts. Part 1 states that if f is continuous on [a, b] and F(x) = ∫ₐˣ f(t) dt, then F is differentiable and F'(x) = f(x). This means that integration (accumulation) and differentiation are inverse operations: the derivative of an integral with a variable upper limit returns the original function. Part 2 states that if f is continuous on [a, b] and F is any antiderivative of f, then ∫ₐᵇ f(x) dx = F(b) - F(a). This is the evaluation theorem that we use to compute definite integrals. Together, these two parts form the basis of calculus. They show that the two main operations of calculus differentiation and integration are inverse processes. The FTC is what makes integration practical: it allows us to evaluate integrals without having to compute Riemann sums. It is also the foundation for many applications, such as finding areas, volumes, work, and solving differential equations.

The Fundamental Theorem of Calculus connects:
  Differentiation and Integration

There are two major ideas.

Part 1: Accumulation Function
  Suppose F(x) = ∫ₐˣ f(t) dt.
  Then F'(x) = f(x).
  This means that differentiation can undo the accumulation process.

Part 2: Evaluation of Definite Integrals
  If F'(x) = f(x), then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
  This is the formula most commonly used to calculate definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DEFINITE INTEGRAL VS. INDEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is essential to distinguish between definite and indefinite integrals. An indefinite integral, denoted ∫ f(x) dx, represents a family of antiderivatives of f(x) and includes an arbitrary constant +C. It is a function of x. A definite integral, denoted ∫ₐᵇ f(x) dx, represents a numerical value, the net accumulation of f over the interval [a, b]. The definite integral does not include +C because the constant cancels out when evaluating F(b) - F(a). While the indefinite integral is used to find antiderivatives, the definite integral is used to compute accumulated quantities. The Fundamental Theorem of Calculus connects the two: the definite integral of f from a to b is the difference of an antiderivative evaluated at the endpoints. Understanding this distinction is crucial for correctly solving problems and for understanding the role of integration in calculus. In practice, we often find an antiderivative (indefinite integral) to evaluate a definite integral.

It is important not to confuse these two concepts.

  Definite Integral             Indefinite Integral
  ──────────────────────────────────────────────────────────────────────
  ∫ₐᵇ f(x) dx                    ∫ f(x) dx
  Has limits                     No limits
  Produces a number              Produces a function
  Represents accumulation        Represents a family of antiderivatives
  Usually no +C                  Includes +C

Example of an Indefinite Integral:
  ∫ x² dx = x³/3 + C

Example of a Definite Integral:
  ∫₀³ x² dx = 9

Notice that the definite integral produces a specific numerical result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT PROPERTIES OF DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definite integrals obey several useful properties that simplify their evaluation and manipulation. The zero-width property states that the integral over an interval of zero length is zero. Reversing the limits changes the sign of the integral. The additive property allows us to split the integral at any point c between a and b. The constant multiple rule and sum/difference rules allow us to factor constants and break sums into separate integrals. These properties are essential for simplifying complex integrals and for solving problems involving piecewise functions or multiple intervals. They also reflect the linearity of the integral operator and are used extensively in calculus. Understanding these properties helps in both theoretical and applied contexts, making the definite integral a versatile tool.

1. Same Upper and Lower Limit:
  ∫ₐᵃ f(x) dx = 0
  There is no interval, so there is no accumulation.

2. Reversing the Limits:
  ∫ᵇₐ f(x) dx = -∫ₐᵇ f(x) dx
  Reversing the direction changes the sign.

3. Splitting an Integral:
  If a < c < b, then:
    ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  This allows us to divide a large interval into smaller intervals.

4. Constant Multiple Rule:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

5. Sum Rule:
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

6. Difference Rule:
  ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DEFINITE INTEGRAL AND AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common applications of the definite integral is finding the area under a curve. When the function f(x) is non-negative on [a, b], the definite integral ∫ₐᵇ f(x) dx gives the exact geometric area of the region bounded by the curve, the x-axis, and the vertical lines x = a and x = b. This is because the integral accumulates the positive heights of the function over the interval. However, if the function dips below the x-axis, the integral gives the signed area, where regions below the axis contribute negatively. To find the total geometric area of a region that crosses the x-axis, we must split the integral at the points where f(x) = 0 and take the absolute value of each part, or compute the integral of the absolute value of the function. This distinction is important when interpreting the result of a definite integral in geometric terms. In many practical problems, we use the definite integral to compute areas, volumes, and other accumulated quantities, so understanding the relationship between the integral and area is essential.

When f(x) ≥ 0 on the interval [a, b], the definite integral gives the actual area:
  A = ∫ₐᵇ f(x) dx

However, when the function crosses the x-axis, the definite integral may subtract areas below the axis.

For total geometric area:
  A = ∫ₐᵇ |f(x)| dx

or split the integral at the points where f(x) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: FUNCTION CROSSING THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x - 1 on the interval [0, 2]. This linear function crosses the x-axis at x = 1. The definite integral from 0 to 2 is ∫₀² (x - 1) dx. The antiderivative is x²/2 - x. Evaluating from 0 to 2 gives (2²/2 - 2) - (0²/2 - 0) = (2 - 2) - 0 = 0. The signed area is zero because the negative area from 0 to 1 cancels the positive area from 1 to 2. However, the total geometric area is not zero. To find the geometric area, we split the integral at x = 1: the area from 0 to 1 is ∫₀¹ (1 - x) dx (taking the absolute value), and the area from 1 to 2 is ∫₁² (x - 1) dx. Both are 1/2, so the total area is 1. This example clearly illustrates the difference between signed area and geometric area. It is a common source of confusion, so always check whether the function crosses the x-axis and adjust the integral accordingly.

Suppose:
  f(x) = x - 1

on:
  [0, 2]

The graph crosses the x-axis when:
  x - 1 = 0
  x = 1

The definite integral is:
  ∫₀² (x - 1) dx

Because the negative area from 0 to 1 and positive area from 1 to 2 are equal, the result is:
  0

But the actual geometric area is not zero.

To find the total area:
  A = ∫₀¹ (1 - x) dx + ∫₁² (x - 1) dx
  = 1/2 + 1/2 = 1

The total area is:
  1 square unit

This is a very important distinction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. GENERAL STEPS FOR EVALUATING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To evaluate a definite integral, follow a systematic process. First, identify the integrand and the limits of integration. Then, find the antiderivative of the integrand. Next, evaluate the antiderivative at the upper limit and at the lower limit. Finally, subtract the value at the lower limit from the value at the upper limit. This procedure is based on the Fundamental Theorem of Calculus and works for any integrand for which an antiderivative can be found. It is important to be careful with signs and to use the correct order of subtraction. The result is a numerical value representing the accumulated quantity. This process is used in almost all calculus problems involving definite integrals. With practice, it becomes second nature.

Step 1: Identify the Integrand
  Example: ∫₁⁴ (3x² + 2x) dx
  The integrand is: 3x² + 2x

Step 2: Find the Antiderivative
  ∫ (3x² + 2x) dx = x³ + x²

Step 3: Apply the Limits
  [x³ + x²]₁⁴

Step 4: Substitute the Upper Limit
  4³ + 4² = 64 + 16 = 80

Step 5: Substitute the Lower Limit
  1³ + 1² = 1 + 1 = 2

Step 6: Subtract
  80 - 2 = 78

Therefore:
  ∫₁⁴ (3x² + 2x) dx = 78

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common errors when working with definite integrals. One is forgetting to evaluate at the lower limit; the correct evaluation is F(b) - F(a), not just F(b). Another is reversing the order of subtraction, which changes the sign of the result. Students sometimes include the constant of integration +C in the evaluation of a definite integral, but it cancels out, so it is not needed. A more conceptual mistake is confusing signed area with total geometric area, especially when the function crosses the x-axis. To avoid these errors, always double-check the limits, use the correct order, and consider whether the function is positive or negative on the interval. Practicing with a variety of examples helps build confidence and reduces the likelihood of mistakes. Remember that the definite integral is a powerful tool, but it must be used correctly.

Mistake 1: Forgetting the Lower Limit
  Remember: F(b) - F(a)
  You must substitute both limits.

Mistake 2: Using F(a) - F(b)
  The correct order is:
    Upper Limit - Lower Limit
  or:
    F(b) - F(a)

Mistake 3: Adding +C
  For a definite integral ∫ₐᵇ f(x) dx, you normally do not include +C
  because the constants cancel when subtracting:
    [F(x) + C]ₐᵇ = (F(b) + C) - (F(a) + C) = F(b) - F(a)

Mistake 4: Confusing Signed Area with Total Area
  A definite integral can be negative or zero.
  But physical geometric area cannot be negative.
  Always check whether the graph crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general form of the definite integral is ∫ₐᵇ f(x) dx. It represents the net accumulation of f(x) from a to b. It is defined as the limit of Riemann sums: ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx. The most common method for evaluating it is the Fundamental Theorem of Calculus: ∫ₐᵇ f(x) dx = F(b) - F(a), where F is any antiderivative of f. The definite integral gives signed area; to get total geometric area, take the absolute value or split at crossings. The definite integral is a central concept in calculus with applications in area, volume, work, and many other accumulated quantities.

The general form is:
  ∫ₐᵇ f(x) dx

It represents the accumulation of f(x) from a to b.

The definite integral is defined using Riemann sums:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

The most common method for evaluating it is the Fundamental Theorem of Calculus:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

where:
  F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definite integral is the accumulation of infinitely many tiny quantities over an interval. It is one of the most important concepts in Calculus because it connects areas, Riemann sums, antiderivatives, and real-world accumulation problems such as distance, velocity, economics, probability, and many other applications. The definite integral allows us to compute total quantities from rates of change, making it an indispensable tool in science and engineering. By understanding the definite integral, you gain the ability to analyze and solve problems involving continuous change, which is the essence of calculus.

Definite Integral = Accumulation of infinitely many tiny quantities

It is one of the most important concepts in Calculus because it connects areas, Riemann sums, antiderivatives, and real-world accumulation problems such as distance, velocity, economics, probability, and many other applications.
  `,
  examples: [
    "∫₀³ x² dx = [x³/3]₀³ = 9",
    "∫₁³ (2x + 1) dx = [x² + x]₁³ = 10",
    "∫₂⁵ 4 dx = [4x]₂⁵ = 12",
    "∫₀² -x dx = [-x²/2]₀² = -2 (signed area)",
    "∫₀² (x - 1) dx = 0 (signed), total geometric area = 1",
    "∫ₐᵇ f(x) dx = F(b) - F(a) (FTC)",
    "Definite integral definition: lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx",
  ],
};

export default topic;