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

The Mean Value Theorem for Integrals is a fundamental result that connects the concept of the definite integral to the average value of a function. It tells us that for any continuous function on a closed interval, there exists at least one point in that interval where the function's value equals its average value over the entire interval. This theorem is the integral counterpart to the Mean Value Theorem for derivatives. While the derivative version guarantees a point where the instantaneous rate of change equals the average rate of change, the integral version guarantees a point where the function's height equals its average height. This theorem has important applications in physics, engineering, and statistics, where we often want to replace a varying quantity with a constant average value that preserves the total accumulation. For example, in fluid dynamics, the average velocity of a fluid over a cross-section can be used to simplify calculations. The theorem provides a rigorous justification for this practice.

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

The Mean Value Theorem for Integrals requires only one condition: the function f must be continuous on the closed interval [a, b]. Continuity ensures that the function has no breaks, jumps, holes, or vertical asymptotes within the interval. This condition is sufficient to guarantee that the integral exists and that the function attains its average value at some point. Unlike the Mean Value Theorem for derivatives, which requires differentiability, the integral version only requires continuity. This is because integration is more forgiving than differentiation; a function can be integrated even if it is not differentiable at some points. However, the theorem guarantees the existence of c only if f is continuous. If the function has discontinuities, the theorem may fail. For example, a step function on a closed interval may not attain its average value at any point. Understanding the conditions is important for knowing when the theorem can be applied. In most introductory calculus problems, the functions are continuous, so the theorem applies without issue.

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

The main formula of the Mean Value Theorem for Integrals is ∫ₐᵇ f(x) dx = f(c)(b - a). This formula states that the definite integral of f over [a, b] equals the product of the function value at some point c and the length of the interval. Rearranging the formula gives f(c) = (1/(b - a)) ∫ₐᵇ f(x) dx, which is the definition of the average value of a function over the interval. This average value is the constant height that would give the same area as the varying function. The theorem guarantees that this average value is actually attained by the function at some point c in the interval. This is analogous to the ordinary average of a finite set of numbers: the average is a number that lies between the minimum and maximum values. For continuous functions, the average value lies between the minimum and maximum of the function, and the Intermediate Value Theorem ensures that the function attains this average value at some point. The formula is simple but powerful, and it is widely used in physics and engineering to replace varying quantities with their averages.

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

Geometrically, the Mean Value Theorem for Integrals says that the area under a continuous curve on [a, b] is equal to the area of a rectangle with the same width (b - a) and height equal to the function value at some point c. This means that the curved region can be replaced by an equivalent rectangle without changing the total area. The height of the rectangle is the average height of the function over the interval. The point c is the location where the function achieves this average height. This interpretation is powerful because it allows us to think of the area under a curve in terms of an average height times the width, which is a more intuitive way to understand definite integrals. It also provides a visual way to understand why the average value is defined as the integral divided by the interval length. The theorem guarantees that the average height is not just a theoretical construct but is actually achieved by the function at some point. This geometric insight is often used to explain the theorem to students and to illustrate the connection between integration and averages.

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

The Mean Value Theorem for Integrals and the definition of the average value of a function are two sides of the same coin. The average value of f on [a, b] is defined as f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx. The theorem states that there exists a c in [a, b] such that f(c) = f_avg. This means that the average value is not just a theoretical number but is actually equal to the function's value at some point in the interval. This is a powerful result because it allows us to replace the entire function with a single representative value for purposes such as approximation or physical modeling. For example, in physics, the average velocity of an object over a time interval is the constant velocity that would give the same displacement. The theorem guarantees that this average velocity is actually achieved at some instant. This connection between the average value and the function's values is what makes the theorem so useful and is a key part of understanding the relationship between integration and averages.

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

Let's work through an example to see how the theorem is applied. We want to find the average value of f(x) = x² on the interval [0, 3]. Using the formula, we compute f_avg = (1/(3 - 0)) ∫₀³ x² dx. The integral of x² is x³/3, so evaluating from 0 to 3 gives 27/3 = 9. Dividing by the interval length 3 gives 3. Therefore, the average value of x² from 0 to 3 is 3. This means that the average height of the parabola y = x² over this interval is 3. This value represents the constant height that would give the same area as the curve. The result, 3, is between the minimum value of 0 and the maximum value of 9 on the interval, which is consistent with the idea that the average value lies between the extremes. This example illustrates the straightforward application of the average value formula.

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

The theorem not only gives the average value but also guarantees that there is a point c where the function equals this average value. For f(x) = x² on [0, 3], the average value is 3. Setting f(c) = 3 gives c² = 3, so c = √3 (since we are in the positive interval). This is the point where the function's height equals the average height. The value c = √3 is approximately 1.732, which lies between 0 and 3. This demonstrates that the theorem finds a specific point where the function attains its average. In many applications, finding c is not the primary goal; the average value itself is often more important. However, finding c helps to verify the theorem and to understand the relationship between the function and its average. The process of solving for c involves setting the function equal to the average value and solving for x, which is a straightforward algebraic step.

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

For f(x) = x² on [0, 3], the total area under the curve is 9. This area is the same as the area of a rectangle with width 3 and height 3. The height of the rectangle, 3, is the average value of the function. The point where the function actually equals this average height is x = √3. At this point, the function value is (√3)² = 3, which matches the rectangle height. This visual interpretation helps to understand why the theorem works: the average height is a value that the function attains, so the area under the curve can be represented by a rectangle of that height. This is a useful way to think about the definite integral: it is the product of the average value and the width of the interval. The theorem guarantees that the average value is not just an abstract number but is actually achieved by the function at some point.

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

Let's compute the average value of a linear function. For f(x) = 2x + 1 on [0, 4], we use the same formula: f_avg = (1/(4 - 0)) ∫₀⁴ (2x + 1) dx. The antiderivative is x² + x. Evaluating from 0 to 4 gives (16 + 4) - 0 = 20. Dividing by the interval length 4 gives 5. So the average value is 5. This means that the average height of the line y = 2x + 1 over this interval is 5. This is also the value of the function at x = 2, since f(2) = 5. This is because the function is linear, and the average value occurs at the midpoint of the interval. In general, for a linear function, the average value is the value at the midpoint. This example shows that for linear functions, the theorem is particularly simple, and the value of c is easy to find. It also illustrates that the average value of a linear function is simply the average of the endpoint values.

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

For the linear function f(x) = 2x + 1 with average value 5, we find c by solving f(c) = 5. This gives 2c + 1 = 5, so 2c = 4, and c = 2. This is the midpoint of the interval [0, 4]. This result is consistent with the fact that for a linear function, the average value equals the value at the midpoint. This example illustrates a general principle: for continuous functions, the average value lies between the minimum and maximum values, and the theorem guarantees that the function attains this value at some point. The value of c may not be unique; there could be more than one point where the function equals the average. In the case of a linear function, there is exactly one such point, but for more complex functions, there may be several. The theorem only guarantees the existence of at least one.

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

Solving problems involving the Mean Value Theorem for Integrals follows a clear procedure. First, identify the function and the interval. Then, compute the definite integral of the function over the interval. Next, divide the integral by the length of the interval to find the average value. Finally, set the function equal to the average value and solve for c, ensuring that the solution lies within the interval. This procedure is systematic and works for any continuous function. The steps are straightforward and build on the fundamental concepts of integration and average values. It is important to remember that the theorem guarantees the existence of c, but it may not be unique. In practice, we often find the average value without finding c, but the theorem assures us that c exists. This procedure is commonly used in calculus courses and in applications involving averages of continuous functions.

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

Let's work through a complete example. Find the value(s) of c guaranteed by the Mean Value Theorem for Integrals for f(x) = x² + 1 on [0, 2]. First, find the average value: f_avg = (1/(2 - 0)) ∫₀² (x² + 1) dx = (1/2)[x³/3 + x]₀² = (1/2)(8/3 + 2) = (1/2)(14/3) = 7/3. Then set f(c) = 7/3: c² + 1 = 7/3, so c² = 4/3, and c = ±2/√3. Since the interval is [0, 2], we choose the positive root: c = 2/√3 ≈ 1.155. This is the point where the function equals its average value over the interval. This example demonstrates the full process and shows that the value of c is not always an integer. It also illustrates the importance of checking that c lies in the interval.

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

The term "mean" in the name of the theorem refers to the average value. In statistics, the mean of a set of numbers is the sum divided by the count. For a continuous function, the "mean" or average value is defined using the integral. The theorem proves that this average value is actually attained by the function at some point. This is analogous to the arithmetic mean of a finite set: the mean is a value that lies between the minimum and maximum, and for a continuous function, the average value also lies between the minimum and maximum. The theorem is called the "Mean Value Theorem for Integrals" because it deals with the mean (average) value of a function and guarantees its attainment. This connection to the concept of the mean makes the theorem intuitive and useful in many practical applications where we need to replace a varying quantity with a constant average.

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

The Mean Value Theorem for Integrals has numerous real-life applications. In weather, it guarantees that the average temperature over a day is actually reached at some point during that day. In physics, it implies that the average velocity of a moving object over a time interval is actually achieved at some instant. In economics, it can be used to find the average price of a commodity over a period. In engineering, it is used in the design of structures and systems where average loads or pressures are important. The theorem provides a rigorous basis for replacing a variable quantity with its average value in calculations, simplifying analysis without losing accuracy in terms of total accumulation. This principle is applied in many fields, making the theorem an essential tool for understanding and modeling continuous phenomena.

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

It is important to distinguish between the Mean Value Theorem for derivatives and the Mean Value Theorem for integrals. Although they share a similar name, they are different theorems with different conditions and conclusions. The derivative version, often simply called the Mean Value Theorem, applies to differentiable functions and states that there exists a point where the instantaneous rate of change equals the average rate of change. The integral version applies to continuous functions and states that there exists a point where the function value equals the average value. The derivative version requires differentiability, while the integral version only requires continuity. The formulas are also different: the derivative version uses f'(c) and the average slope, while the integral version uses f(c) and the average value. Understanding this distinction is essential for correctly applying the appropriate theorem in problem-solving.

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

There are several common errors when applying the Mean Value Theorem for Integrals. One is forgetting to divide by b - a. The integral gives the total area, and to find the average value, we must divide by the length of the interval. Another mistake is confusing c with the average value: f_avg is a number, while c is the point where f(c) = f_avg. Students sometimes forget to check that the value of c lies within the interval; only solutions satisfying a < c < b are valid. Also, confusing this theorem with the regular Mean Value Theorem is a common error. Being aware of these pitfalls helps in applying the theorem correctly. It is always a good practice to verify that the solution for c lies in the interval and to state both the average value and the point where it is attained.

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

The Mean Value Theorem for Integrals is a fundamental result in integral calculus. It states that for any continuous function f on [a, b], there exists a point c in (a, b) such that the integral of f over [a, b] equals f(c) times the length of the interval. This means that the average value of the function is actually attained at some point c. The theorem provides a rigorous justification for using average values in applications and connects the concept of the definite integral to the average value of a function. It is an important tool in both pure and applied mathematics.

The Mean Value Theorem for Integrals states that if f(x) is continuous on [a, b], then there exists at least one c ∈ (a, b) such that:
  ∫ₐᵇ f(x) dx = f(c)(b - a)

The average value of the function is:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

The theorem guarantees:
  f(c) = f_avg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea of the Mean Value Theorem for Integrals is that every continuous function attains its average value at some point in the interval. This is a powerful and intuitive result. It says that the total area under a curve can be represented as a rectangle with the same width and height equal to the function's value at some point c. This theorem connects the geometric notion of area with the algebraic concept of the average and provides a bridge between definite integrals and function values. It is a key result in calculus and serves as a foundation for many applications in science and engineering, where replacing a variable quantity with its average is a common and useful simplification.

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