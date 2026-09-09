// filename: fundamental-theorem-of-calculus.ts

const topic = {
  id: "fundamental-theorem-of-calculus",
  title: "Fundamental Theorem of Calculus",
  summary:
    "One of the most important ideas in calculus, establishing the powerful relationship between differentiation and integration as inverse processes, with two major parts.",
  details: `
The Fundamental Theorem of Calculus (FTC) is one of the most important ideas in all of Calculus. It establishes the powerful relationship between:
  Differentiation
and:
  Integration

These two operations may seem different:
  • Differentiation studies rates of change and slopes.
  • Integration studies accumulation, total change, and area.

However, the Fundamental Theorem of Calculus shows that they are actually inverse processes.

The main idea is:
  Differentiation and Integration undo each other

The theorem has two major parts:
  • Fundamental Theorem of Calculus Part 1
  • Fundamental Theorem of Calculus Part 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY IS IT CALLED "FUNDAMENTAL"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus is called "fundamental" because it bridges the two major branches of calculus: differential calculus (concerned with rates of change and slopes) and integral calculus (concerned with accumulation and area). Before this theorem was discovered, mathematicians treated these as separate disciplines. The FTC reveals that differentiation and integration are inverse operations they undo each other. This connection is not just a theoretical curiosity; it has profound practical implications. It allows us to compute areas and accumulated quantities using antiderivatives, which is far simpler than using the limit definition of the definite integral. The theorem also provides the theoretical foundation for solving differential equations and for understanding the relationship between position, velocity, and acceleration in physics. Without the FTC, calculus would be a collection of disconnected techniques rather than a unified framework. Its discovery by Newton and Leibniz was a turning point in mathematics, enabling the development of modern science and engineering. The FTC is the cornerstone of integral calculus and is essential for anyone studying mathematics, physics, or engineering.

Before Calculus, mathematicians had separate methods for:
  • Finding slopes and rates of change
  • Finding areas and accumulated quantities

The Fundamental Theorem of Calculus connects these two ideas.

It shows:
  Area Accumulation ↔ Rate of Change

This connection allows us to calculate complicated areas using antiderivatives instead of adding infinitely many rectangles manually.

For example, instead of evaluating:
  lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

we can often simply find an antiderivative and evaluate it at the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FUNDAMENTAL THEOREM OF CALCULUS PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Part 1 of the Fundamental Theorem of Calculus establishes that differentiation and integration are inverse operations in a very specific way. It states that if we define a function F(x) as the definite integral of f(t) from a fixed point a to a variable upper limit x, then the derivative of F is exactly f(x). In other words, the process of accumulating area (integration) and then differentiating that accumulated area returns the original function. This is a profound result because it shows that integration and differentiation are not just related but are exact inverses under these conditions. The theorem requires that f be continuous on the interval, ensuring that the integral is well-behaved. Part 1 is often used to prove Part 2 and is also used in its own right to differentiate functions defined by integrals. This is particularly useful when the integrand is complex or when the upper limit is a function of x. Understanding Part 1 is essential for grasping the deeper meaning of the FTC and for applying it in more advanced contexts.

The Statement:
  Suppose F(x) = ∫ₐˣ f(t) dt.

  If f is continuous, then:
    F'(x) = f(x)

This is one of the most beautiful results in Calculus.

It says that if you create a function by accumulating area under another function, then differentiating the accumulated area gives you back the original function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNDERSTANDING PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand Part 1, consider the function F(x) = ∫ₐˣ f(t) dt. This function represents the net signed area under the curve f(t) from a to x. As x varies, the accumulated area changes. The derivative F'(x) measures the rate at which this accumulated area changes as x increases. Intuitively, when x moves a small distance Δx to the right, the area increases by approximately f(x)Δx (the height of the curve at x times the width). Therefore, the rate of change of the area is f(x), so F'(x) = f(x). This intuitive reasoning is made rigorous by the definition of the derivative and the properties of the integral. Part 1 tells us that the accumulation function F(x) is an antiderivative of f(x). This means that integration (accumulation) and differentiation are inverse operations: if you integrate f and then differentiate the result, you get f back. This is a direct analogue to how multiplication and division are inverses.

Consider:
  F(x) = ∫ₐˣ f(t) dt

This means that F(x) represents the accumulated area from a to x.

Notice that the upper limit is a variable.

As x changes, the accumulated area changes.

The theorem says:
  d/dx (∫ₐˣ f(t) dt) = f(x)

Therefore:
  Derivative of Accumulated Area = Original Function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1: PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply Part 1 to a concrete example. Suppose F(x) = ∫₀ˣ t² dt. According to the theorem, the derivative of F with respect to x is simply the integrand evaluated at x, which is x². We do not need to compute the integral explicitly. This is a powerful shortcut: instead of finding the antiderivative t³/3 and then differentiating, we can directly apply the FTC. This demonstrates the inverse relationship: the derivative of the integral of f is f. This example also illustrates why the variable inside the integral is a dummy variable it does not affect the final result. The FTC Part 1 is often used in problems where the upper limit of integration is a variable, and it provides a quick way to find derivatives of functions defined by integrals.

Suppose:
  F(x) = ∫₀ˣ t² dt

According to the Fundamental Theorem of Calculus:
  F'(x) = x²

We do not need to evaluate the integral first.

Therefore:
  d/dx (∫₀ˣ t² dt) = x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE t INSIDE THE INTEGRAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When writing an integral with a variable upper limit, we use a different letter (such as t, u, or z) for the integration variable to avoid confusion with the upper limit x. The variable inside the integral is called a "dummy variable" because it is a placeholder that does not appear in the final answer. The value of the integral depends only on the limits of integration (a and x) and the function f, not on the particular letter used inside. For example, ∫₀ˣ t² dt, ∫₀ˣ u² du, and ∫₀ˣ z² dz all represent the same function of x. This is analogous to how the variable in a sum Σᵢ f(i) is a dummy index. Using a dummy variable is a matter of convention that prevents confusion and makes the notation clearer. It is important to understand this concept because it appears frequently in calculus, especially when dealing with functions defined by integrals and when applying the chain rule in conjunction with the FTC.

Consider:
  F(x) = ∫₀ˣ t² dt

We use t because x is already being used as the upper limit.

The variable t is called a dummy variable.

It can be replaced with another letter:
  ∫₀ˣ u² du
or:
  ∫₀ˣ z² dz

All of these represent the same accumulated value:
  ∫₀ˣ t² dt = ∫₀ˣ u² du

The variable inside the integral is temporary. The final answer depends on the limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2: PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another example of Part 1: Suppose G(x) = ∫₂ˣ (3t² + 4) dt. The derivative is simply the integrand evaluated at x, which is 3x² + 4. Again, we do not need to compute the integral first. This shows that the FTC Part 1 works for any continuous integrand, not just polynomials. The lower limit of integration (2 in this case) does not affect the derivative; only the upper limit matters because it is the variable. This is because the derivative of a constant (the lower limit) is zero. This property makes the theorem very versatile and easy to apply. It is a common exam question to test understanding of Part 1 by asking for the derivative of a function defined by an integral.

Suppose:
  G(x) = ∫₂ˣ (3t² + 4) dt

Using FTC Part 1:
  G'(x) = 3x² + 4

Again, the derivative cancels the integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VISUAL MEANING OF PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The visual interpretation of Part 1 is that the derivative of the area under a curve is the height of the curve itself. Imagine the region under f(t) from a to x. As x increases by a small amount Δx, the area increases by approximately f(x)Δx, which is the area of a thin vertical rectangle at the right edge. The rate of change of the area is therefore f(x). This is exactly what Part 1 states: F'(x) = f(x). This geometric insight makes the theorem intuitive: the faster the curve rises, the faster the accumulated area grows. Conversely, if the curve is flat (f(x) = 0), the area does not change. This connection between the shape of a curve and the accumulation of area under it is a cornerstone of calculus and is essential for understanding the relationship between a function and its integral. It also explains why integration is used to find areas: integration accumulates the height of the curve over an interval.

Imagine that:
  F(x) = ∫ₐˣ f(t) dt

represents the total accumulated area from a to x.

As x moves slightly to the right, a small additional area is added.

The rate at which the area changes is approximately the height of the curve:
  f(x)

Therefore:
  F'(x) = f(x)

This is the deep connection between accumulation and instantaneous rate of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FUNDAMENTAL THEOREM OF CALCULUS PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Part 2 of the Fundamental Theorem of Calculus is the Evaluation Theorem. It states that if F is any antiderivative of f on [a, b], then the definite integral of f from a to b is equal to F(b) - F(a). This is the practical tool that allows us to evaluate definite integrals without using Riemann sums. Instead of approximating the area under a curve with many rectangles and taking a limit, we find an antiderivative of the integrand and evaluate it at the endpoints. This is a tremendous simplification and is the reason why integration is so powerful. Part 2 is derived from Part 1: since the accumulation function A(x) = ∫ₐˣ f(t) dt is an antiderivative of f, any other antiderivative F differs from A by a constant. Evaluating F(b) - F(a) gives A(b) - A(a) = ∫ₐᵇ f(t) dt. This connection between the two parts is what makes the FTC so elegant and useful.

The Statement:
  Suppose F'(x) = f(x).

  Then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

This allows us to evaluate definite integrals using antiderivatives.

This is commonly called the Evaluation Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. UNDERSTANDING PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Part 2 provides a practical method for evaluating definite integrals. Without it, we would have to compute the limit of Riemann sums for every integral, which is often difficult or impossible. With Part 2, we simply find an antiderivative of the integrand, evaluate it at the upper and lower limits, and subtract. The key steps are: (1) find an antiderivative F of f (i.e., a function whose derivative is f); (2) compute F(b); (3) compute F(a); (4) subtract F(a) from F(b). The constant of integration C cancels out because it is present in both F(b) and F(a). This is why we do not include +C when evaluating definite integrals. Part 2 is used extensively in physics, engineering, and economics to compute quantities such as displacement, work, area, and total accumulated value. It is one of the most frequently used results in applied mathematics.

Suppose we want to calculate:
  ∫ₐᵇ f(x) dx

Without the Fundamental Theorem of Calculus, we might need to use Riemann sums:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

and then take the limit:
  n → ∞

But FTC Part 2 gives us a shortcut.

Step 1: Find an antiderivative
  Find F(x) such that F'(x) = f(x).

Step 2: Evaluate the upper limit
  F(b)

Step 3: Evaluate the lower limit
  F(a)

Step 4: Subtract
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 3: USING FTC PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply Part 2 to evaluate ∫₁⁴ x² dx. The antiderivative of x² is x³/3. Evaluating at the upper limit gives 4³/3 = 64/3. Evaluating at the lower limit gives 1³/3 = 1/3. Subtracting gives 64/3 - 1/3 = 63/3 = 21. This is much faster and simpler than computing the Riemann sum. The result, 21, is the exact area under the curve y = x² from x = 1 to x = 4. This example demonstrates the power of the FTC: a complex area problem is reduced to a simple arithmetic calculation. The FTC is the reason why integration is so widely used in science and engineering: it provides a direct and efficient way to compute accumulated quantities.

Evaluate:
  ∫₁⁴ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

Therefore:
  F(x) = x³/3

Step 2: Apply the theorem
  ∫₁⁴ x² dx = [x³/3]₁⁴

Step 3: Substitute the upper limit
  4³/3 = 64/3

Step 4: Substitute the lower limit
  1³/3 = 1/3

Step 5: Subtract
  64/3 - 1/3 = 63/3 = 21

Therefore:
  ∫₁⁴ x² dx = 21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE BRACKET NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bracket notation is a convenient shorthand for evaluating definite integrals. When we write [F(x)]ₐᵇ, it means F(b) - F(a). This notation is used to simplify the expression and make the evaluation process clear. It also emphasizes that we are evaluating the antiderivative at the two limits. The order is important: upper limit first, then lower limit. This is a standard notation in calculus and is used in textbooks and exams. Being comfortable with bracket notation is essential for efficiently solving definite integral problems. It also helps in avoiding errors when applying the FTC.

A definite integral is often written using brackets:
  [F(x)]ₐᵇ

This means:
  F(b) - F(a)

For example:
  [x³/3]₁⁴

means:
  4³/3 - 1³/3

Always remember:
  Upper Limit - Lower Limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 4: POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's evaluate the definite integral of a linear function using the FTC. For ∫₀³ (2x + 3) dx, the antiderivative is x² + 3x. Evaluating at 3 gives 9 + 9 = 18; evaluating at 0 gives 0. The difference is 18. This example shows that the FTC works for any polynomial, and the process is the same: find the antiderivative, evaluate at the limits, and subtract. This is a straightforward application of Part 2 and is typical of the problems encountered in introductory calculus courses. The result, 18, represents the net signed area under the line y = 2x + 3 from x = 0 to x = 3.

Evaluate:
  ∫₀³ (2x + 3) dx

Step 1: Find the antiderivative
  ∫ (2x + 3) dx = x² + 3x

Step 2: Apply the limits
  [x² + 3x]₀³

Step 3: Substitute
  (3² + 3(3)) - (0² + 3(0))
  = (9 + 9) - 0
  = 18

Therefore:
  ∫₀³ (2x + 3) dx = 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION BETWEEN PART 1 AND PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Part 1 and Part 2 of the FTC are two sides of the same coin. Part 1 tells us that integration (accumulation) followed by differentiation gives back the original function. Part 2 tells us that differentiation (finding an antiderivative) followed by integration (evaluating the definite integral) gives the net change. Together, they establish that differentiation and integration are inverse operations. This duality is the essence of the FTC and is what makes it so powerful. In practice, Part 1 is used to differentiate functions defined by integrals, while Part 2 is used to evaluate definite integrals. Both parts are essential for solving problems in calculus and its applications. Understanding the connection between them helps in seeing the unity of the subject and in appreciating why the FTC is considered one of the most important theorems in mathematics.

The two parts of the Fundamental Theorem of Calculus are closely connected.

Part 1:
  Start with integration:
    F(x) = ∫ₐˣ f(t) dt

  Differentiate:
    F'(x) = f(x)

  Integration followed by differentiation returns the original function.

Part 2:
  Start with a function f(x).

  Find an antiderivative F(x).

  Then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

  Differentiation and integration work together to calculate accumulated quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A SIMPLE ANALOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful way to think about the FTC is to compare differentiation and integration to other inverse operations. Just as addition and subtraction are inverse operations (they undo each other), and multiplication and division are inverse operations, differentiation and integration are inverse operations. If you differentiate a function and then integrate the result, you get back the original function (up to a constant). Conversely, if you integrate a function and then differentiate the result, you get back the original function. This analogy helps in understanding why the FTC is so important: it establishes that the two major branches of calculus are fundamentally connected. It also provides a way to check your work: if you integrate a function and differentiate the result, you should get the original function, and vice versa.

Think of differentiation and integration as opposite operations.

Similar to:
  Addition ↔ Subtraction
or:
  Multiplication ↔ Division

we have:
  Differentiation ↔ Integration

For example:
  d/dx (x³) = 3x²

Therefore:
  ∫ 3x² dx = x³ + C

Differentiation and integration reverse each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FTC PART 1 WITH A MORE COMPLICATED UPPER LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the upper limit of integration is not simply x but a function of x, such as x², we must use the chain rule in conjunction with FTC Part 1. The general formula is: d/dx [∫ₐ^(g(x)) f(t) dt] = f(g(x)) · g'(x). This is a direct application of the chain rule because the integrand is evaluated at the inner function g(x), and then multiplied by the derivative of the inner function. This extension is essential for differentiating functions defined by integrals with variable upper limits that are not just x. It is a common type of problem in calculus and is often tested in exams. The key is to recognize that the upper limit is a function of x and to apply the chain rule correctly. Neglecting the chain rule is a frequent error, so it is important to practice this type of problem.

Suppose:
  F(x) = ∫₀^(x²) t³ dt

The upper limit is not simply x. It is x².

We use the Fundamental Theorem of Calculus together with the Chain Rule.

First:
  d/dx (∫₀^(x²) t³ dt)

Using FTC Part 1:
  = (x²)³

Then multiply by the derivative of the upper limit:
  d/dx (x²) = 2x

Therefore:
  F'(x) = 2x(x²)³

Simplify:
  F'(x) = 2x⁷

This is an important extension of FTC Part 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH BOTH LIMITS CHANGING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In some problems, both the upper and lower limits of integration are functions of x. To find the derivative in such cases, we use the Leibniz rule for variable limits: d/dx [∫_(u(x))^(v(x)) f(t) dt] = f(v(x)) · v'(x) - f(u(x)) · u'(x). This formula is a direct consequence of the FTC and the chain rule. It states that the derivative of the integral is the integrand evaluated at the upper limit times the derivative of the upper limit, minus the integrand evaluated at the lower limit times the derivative of the lower limit. This is a powerful tool for differentiating functions defined by integrals with moving boundaries. It is used in advanced calculus and in applications such as physics and engineering. Understanding this formula is important for solving problems involving variable limits.

Suppose:
  H(x) = ∫ₓ^(x²) t² dt

Both limits depend on x.

The derivative is:
  H'(x) = (x²)²(2x) - x²(1)

Simplify:
  H'(x) = 2x⁵ - x²

The general rule is:
  d/dx ∫_(u(x))^(v(x)) f(t) dt = f(v(x))v'(x) - f(u(x))u'(x)

This is sometimes called the Leibniz Rule for variable limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FTC AND AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of the FTC is finding the area under a curve. The definite integral ∫ₐᵇ f(x) dx gives the net signed area between the curve y = f(x) and the x-axis from x = a to x = b. If f(x) ≥ 0 on [a, b], this integral gives the total geometric area of the region. The FTC allows us to compute this area by finding an antiderivative and evaluating it at the endpoints. This is a dramatic simplification compared to using Riemann sums. The ability to compute areas accurately and efficiently is why integration is so widely used in geometry, physics, and engineering. The FTC not only computes areas but also provides a conceptual bridge between the geometric notion of area and the algebraic operation of integration.

One major application of the Fundamental Theorem of Calculus is finding area.

If f(x) ≥ 0 on [a, b], then:
  A = ∫ₐᵇ f(x) dx

Using FTC Part 2:
  A = F(b) - F(a)

This means that instead of manually adding infinitely many tiny rectangles, we can calculate the exact area using an antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's use the FTC to find the area under the curve y = x² from x = 0 to x = 2. The area is given by ∫₀² x² dx. The antiderivative is x³/3. Evaluating at the limits gives 2³/3 - 0³/3 = 8/3. Therefore, the area is 8/3 square units. This is a classic example that demonstrates the power of the FTC: a curved region that would be difficult to measure geometrically is computed with a simple antiderivative. This example is often used to introduce the concept of the definite integral and to show how calculus extends the idea of area beyond simple geometric shapes. The result, 8/3, is exact and can be verified by numerical approximation using Riemann sums.

Find the area under:
  y = x²

from:
  x = 0 to x = 2

Set up the integral:
  A = ∫₀² x² dx

Find the antiderivative:
  F(x) = x³/3

Apply FTC:
  A = [x³/3]₀² = 8/3 - 0

Therefore:
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus is valid under certain conditions. For Part 1, the function f must be continuous on the interval [a, b]. This ensures that the integral exists and that the accumulation function is differentiable. For Part 2, f must also be continuous on [a, b], and F must be an antiderivative of f on that interval. Continuity is a sufficient condition for the FTC to hold; however, the theorem can be extended to functions that are integrable (such as those with a finite number of discontinuities) under certain conditions. In most introductory calculus courses, the functions we encounter polynomials, trigonometric functions, exponentials, and logarithms are continuous on their domains, so the FTC applies without issue. Understanding the conditions is important for knowing when the theorem can be applied and for avoiding potential pitfalls when dealing with functions that are not continuous.

The Fundamental Theorem of Calculus works under appropriate conditions.

For the standard version:
  f(x) should be continuous on the interval [a, b].

Continuity means that the graph has no breaks, holes, or jumps within the interval.

For most introductory Calculus problems, functions such as:
  x², x³, sin x, cos x, eˣ

are continuous on their normal domains.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common errors students make when applying the FTC. One is forgetting to subtract the lower limit: the correct evaluation is F(b) - F(a), not just F(b). Another is reversing the order of subtraction: F(b) - F(a) is correct, not F(a) - F(b). Students sometimes include the constant of integration +C in the evaluation of a definite integral, but it cancels out, so it is not needed. When differentiating an integral with a variable upper limit that is a function of x, students often forget the chain rule and omit the derivative of the upper limit. Finally, confusing Part 1 and Part 2 is a common issue: Part 1 is about differentiating an integral, while Part 2 is about evaluating an integral using an antiderivative. Being aware of these mistakes will help you avoid them and apply the FTC correctly.

Mistake 1: Forgetting the Lower Limit
  Remember: F(b) - F(a)
  Do not stop after calculating F(b).
  You must subtract F(a).

Mistake 2: Reversing the Order
  The correct order is: Upper - Lower
  Not: Lower - Upper

Mistake 3: Adding +C to a Definite Integral
  For an indefinite integral:
    ∫ f(x) dx = F(x) + C
  But for a definite integral:
    ∫ₐᵇ f(x) dx
  we do not normally include +C, because it cancels:
    [F(x) + C]ₐᵇ = (F(b) + C) - (F(a) + C) = F(b) - F(a)

Mistake 4: Forgetting the Chain Rule
  For:
    d/dx [∫₀^(x²) f(t) dt]
  the answer is not simply f(x²).
  You must multiply by d/dx (x²).
  Therefore: f(x²)(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key forms of the FTC. Part 1 states that the derivative of an integral with a variable upper limit is the integrand evaluated at that limit. Part 2 states that a definite integral can be evaluated using an antiderivative. The table also includes the extensions for variable upper limits (chain rule) and for both limits varying (Leibniz rule). This table serves as a quick reference for solving problems and for understanding the different applications of the FTC. It is a useful study aid for students learning calculus.

  Part                 Formula                                                         Main Idea
  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  FTC Part 1        d/dx ∫ₐˣ f(t) dt = f(x)                                        Derivative of accumulation
  FTC Part 2        ∫ₐᵇ f(x) dx = F(b) - F(a)                                      Evaluate integral using antiderivative
  Variable upper    d/dx ∫ₐ^(g(x)) f(t) dt = f(g(x))g'(x)                          FTC + Chain Rule
  Both limits       d/dx ∫_(u(x))^(v(x)) f(t) dt = f(v)v' - f(u)u'                 Rate of change with moving boundaries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus connects the two major branches of Calculus:
  Derivatives ↔ Integrals

Part 1:
  d/dx (∫ₐˣ f(t) dt) = f(x)

  It tells us that differentiating an accumulated integral returns the original function.

Part 2:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

  where F'(x) = f(x).

  It allows us to calculate definite integrals quickly using antiderivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus is the central theorem of calculus because it reveals the deep connection between differentiation and integration. Integration accumulates quantities, while differentiation measures their rate of change. The FTC proves that these two processes are inverse operations: differentiation undoes integration, and integration undoes differentiation. This connection is not just a theoretical curiosity; it is the basis for evaluating definite integrals and for solving a wide range of problems in science and engineering. The theorem allows us to compute areas, volumes, work, and other accumulated quantities using antiderivatives, which is far simpler than using the limit definition. Understanding the FTC is essential for anyone studying calculus, as it is the foundation for much of the subject.

Integration accumulates quantities, while differentiation measures their rate of change.

The Fundamental Theorem of Calculus proves that these two processes are deeply connected and, in many situations, act as inverse operations. This theorem is the foundation for evaluating definite integrals and is one of the central ideas that makes Calculus so powerful.
  `,
  examples: [
    "FTC Part 1: d/dx ∫₀ˣ t² dt = x²",
    "FTC Part 1: d/dx ∫₂ˣ (3t²+4) dt = 3x²+4",
    "FTC Part 2: ∫₁⁴ x² dx = [x³/3]₁⁴ = 21",
    "FTC Part 2: ∫₀³ (2x+3) dx = [x²+3x]₀³ = 18",
    "Variable upper limit: d/dx ∫₀^(x²) t³ dt = 2x⁷",
    "Both limits: d/dx ∫ₓ^(x²) t² dt = 2x⁵ - x²",
    "Area under y=x² from 0 to 2: A = ∫₀² x² dx = 8/3",
  ],
};

export default topic;