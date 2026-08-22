const topic = {
  id: "newtons-method",
  title: "Newton's Method",
  summary:
    "Definition of Newton's Method, formula, geometric interpretation, convergence, and applications.",
  details: `
Newton's Method, also called the Newton-Raphson Method, is a numerical technique used to find approximate solutions to equations.

It is especially useful when an equation is difficult or impossible to solve algebraically.

The main idea is: Start with an initial guess, use the tangent line to get a better guess, and repeat the process until the answer is sufficiently accurate.

The most important formula is: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT PROBLEM DOES NEWTON'S METHOD SOLVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method is primarily used to find the roots of an equation: f(x) = 0.

A root is a value of x that makes the function equal to zero.

Example: x² - 4 = 0

The exact solutions are: x = 2 and x = -2.

But consider: x³ + x - 1 = 0

This doesn't have a simple algebraic solution.

Newton's Method can provide a very accurate numerical approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE NEWTON'S METHOD FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central formula is: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

where:
  • xₙ = current approximation
  • xₙ₊₁ = next, improved approximation
  • f(xₙ) = function value at the current approximation
  • f'(xₙ) = derivative at the current approximation

You repeatedly apply the formula: x₁ → x₂ → x₃ → x₄ → ...

until the values stop changing significantly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHERE DOES THE FORMULA COME FROM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method is based on the tangent line.

Suppose we have: y = f(x) and our current approximation is: xₙ

The tangent line at xₙ is: y - f(xₙ) = f'(xₙ)(x - xₙ)

We want to find where this tangent line crosses the x-axis.

At the x-axis: y = 0

Therefore: 0 - f(xₙ) = f'(xₙ)(x - xₙ)

So: -f(xₙ) = f'(xₙ)(x - xₙ)

Divide by f'(xₙ): -f(xₙ)/f'(xₙ) = x - xₙ

Therefore: x = xₙ - f(xₙ)/f'(xₙ)

This becomes the next approximation: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

So Newton's Method is essentially repeated tangent-line approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC NEWTON'S METHOD PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To solve f(x) = 0 using Newton's Method:

Step 1: Write the function: f(x)

Step 2: Find the derivative: f'(x)

Step 3: Choose an initial guess: x₀

Step 4: Apply the formula: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

Step 5: Repeat: Continue calculating x₁, x₂, x₃, ... until the approximation is accurate enough.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: FINDING √2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can use Newton's Method to approximate: √2

Instead of directly calculating the square root, rewrite the problem as: x² = 2

Move everything to one side: x² - 2 = 0

Therefore: f(x) = x² - 2

Step 1: Find the derivative: f'(x) = 2x

Step 2: Write Newton's Formula: xₙ₊₁ = xₙ - (xₙ² - 2)/(2xₙ)

Step 3: Choose an initial guess: x₀ = 1

Step 4: First iteration: x₁ = 1 - (1² - 2)/(2(1)) = 1 - (-1)/2 = 1.5

So: x₁ = 1.5

Step 5: Second iteration: x₂ = 1.5 - (1.5² - 2)/(2(1.5))

Since 1.5² = 2.25, we get: x₂ = 1.5 - 0.25/3 = 1.5 - 0.083333 ≈ 1.416667

Step 6: Third iteration: x₃ ≈ 1.414216

Step 7: Fourth iteration: x₄ ≈ 1.414214

The actual value is approximately: √2 ≈ 1.41421356

So Newton's Method quickly gives: √2 ≈ 1.414214

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. NEWTON'S METHOD TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the previous example:

Iteration: x₀
Approximation: 1

Iteration: x₁
Approximation: 1.5

Iteration: x₂
Approximation: 1.416667

Iteration: x₃
Approximation: 1.414216

Iteration: x₄
Approximation: 1.414214

Notice how quickly the approximation approaches the root.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve approximately: x³ - x - 1 = 0

Let: f(x) = x³ - x - 1

Differentiate: f'(x) = 3x² - 1

Newton's formula becomes: xₙ₊₁ = xₙ - (xₙ³ - xₙ - 1)/(3xₙ² - 1)

Choose: x₀ = 1

First iteration: x₁ = 1 - (1³ - 1 - 1)/(3(1)² - 1) = 1 - (-1)/2 = 1.5

Second iteration: x₂ ≈ 1.347826

Third iteration: x₃ ≈ 1.325200

Fourth iteration: x₄ ≈ 1.324718

The solution is approximately: x ≈ 1.324718

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method can be understood visually.

Start at an initial point: (x₀, f(x₀))

Draw the tangent line.

Where the tangent line crosses the x-axis gives the next approximation: x₁

Then:
  • Move to x₁
  • Draw another tangent
  • Find its x-intercept
  • Get x₂
  • Repeat

So: x₀ → x₁ → x₂ → x₃ → ...

Each tangent line attempts to get closer to the actual root.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY DOES NEWTON'S METHOD WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method works because a differentiable function can be approximated locally by its tangent line.

Near a point xₙ: f(x) ≈ f(xₙ) + f'(xₙ)(x - xₙ)

We want: f(x) = 0

So: 0 ≈ f(xₙ) + f'(xₙ)(x - xₙ)

Solving for x gives: x ≈ xₙ - f(xₙ)/f'(xₙ)

That becomes: xₙ₊₁

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INITIAL GUESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The starting value is called the initial guess: x₀

The initial guess can greatly affect how well Newton's Method works.

A good initial guess is usually:
  • close to the desired root
  • located in a region where the function behaves smoothly
  • not at a point where f'(x) = 0

Example: If we want to solve x² - 10 = 0, choosing x₀ = 3 is reasonable because √10 ≈ 3.16.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN NEWTON'S METHOD CAN FAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method is powerful, but it does not always converge.

Problem 1: Derivative equals zero
  If f'(xₙ) = 0, then f(xₙ)/f'(xₙ) is undefined. So Newton's Method cannot continue.

Problem 2: Poor initial guess
  A bad starting point may cause the iterations to move away from the desired root.

Problem 3: Oscillation
  The approximations may jump back and forth rather than approaching a root.

Problem 4: Divergence
  The sequence x₀, x₁, x₂, ... may grow without approaching a solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. NEWTON'S METHOD VS. BISECTION METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method: Uses derivatives
Bisection Method: Does not require derivatives

Newton's Method: Uses tangent lines
Bisection Method: Uses interval halving

Newton's Method: Usually very fast
Bisection Method: Usually slower

Newton's Method: Requires a good initial guess
Bisection Method: Requires an interval containing a root

Newton's Method: Can fail to converge
Bisection Method: More reliable when conditions are met

Newton's Method is often preferred when a derivative is easy to calculate and a good starting point is available.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STOPPING CRITERIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

How do we know when to stop?

One approach is to compare consecutive approximations: |xₙ₊₁ - xₙ|

If this becomes very small, the answer has likely stabilized.

Example: If x₄ = 1.414214 and x₅ = 1.414214, then |x₅ - x₄| is extremely small.

Another criterion is to check the function value: |f(xₙ)| < ε where ε is a small tolerance.

Example: ε = 0.000001.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. NEWTON'S METHOD AND CALCULATOR USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method is especially useful when solving equations that don't have simple exact solutions.

Example: eˣ = 3x

can be rewritten as: f(x) = eˣ - 3x

Then: f'(x) = eˣ - 3

Newton's formula becomes: xₙ₊₁ = xₙ - (eˣₙ - 3xₙ)/(eˣₙ - 3)

You can repeat this calculation using a calculator or implement it in a program.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FINDING ROOTS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always convert the equation to: f(x) = 0 before applying Newton's Method.

Example: x² = 5 → x² - 5 = 0 → f(x) = x² - 5

Another example: ln(x) = 2 → f(x) = ln(x) - 2

Then: f'(x) = 1/x

Newton's formula is: xₙ₊₁ = xₙ - (ln(xₙ) - 2)/(1/xₙ)

Therefore: xₙ₊₁ = xₙ - xₙ(ln(xₙ) - 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. NEWTON'S METHOD ALGORITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The algorithm is: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

Repeatedly: x₀ → x₁ → x₂ → x₃ → ... until the desired accuracy is reached.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY NEWTON'S METHOD CAN BE VERY FAST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When Newton's Method converges properly and the root is sufficiently well-behaved, it often has quadratic convergence.

This means the number of correct digits can increase very rapidly.

Example: 1.5 → 1.416667 → 1.414216 → 1.414214

A relatively small number of iterations can produce a highly accurate answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to set the equation equal to zero
  Newton's Method solves: f(x) = 0
  So rewrite the equation first.

Mistake 2: Incorrect derivative
  Make sure f'(x) is calculated correctly.

Mistake 3: Using the wrong xₙ
  Each iteration must use the previous approximation: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

Mistake 4: Rounding too early
  Keep several decimal places during intermediate calculations. Round only near the end.

Mistake 5: Choosing a poor initial guess
  A poor x₀ can cause the method to converge to the wrong root or fail entirely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT FORMULA SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Newton's Method
Formula: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

Concept: Function
Formula: f(x) = 0

Concept: Derivative
Formula: f'(x)

Concept: Initial Guess
Formula: x₀

Concept: Convergence Check
Formula: |xₙ₊₁ - xₙ| ≈ 0

Concept: Function Value Check
Formula: |f(xₙ)| < ε

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method connects several calculus concepts you've already studied:

  Derivative → Tangent Line → Linear Approximation → Newton's Method

The derivative gives the slope of the tangent line: f'(x)

The tangent line gives an approximation to the function.

Newton's Method uses the x-intercept of that tangent line as the next approximation to the root.

Therefore: Newton's Method = Repeated Tangent-Line Approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Newton's Method, remember:

  • If you're trying to solve f(x) = 0, start with a guess x₀, then repeatedly use: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

  • In simple terms: Guess → Tangent Line → Better Guess → Repeat

  • Newton's Method is one of the most important numerical applications of derivatives, tangent lines, and linear approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Newton's Method is a powerful numerical technique for finding roots of equations using derivatives and tangent lines.

Key concepts covered:

  ✓ What Problem Does Newton's Method Solve?
  ✓ The Formula
  ✓ Where the Formula Comes From
  ✓ Basic Procedure
  ✓ Finding √2
  ✓ Geometric Interpretation
  ✓ Why It Works
  ✓ Initial Guess
  ✓ When It Can Fail
  ✓ Newton's Method vs. Bisection Method
  ✓ Stopping Criteria
  ✓ Calculator Use
  ✓ Algorithm
  ✓ Convergence Speed
  ✓ Common Mistakes
  `,
  examples: [
    "√2 using f(x) = x² - 2 → x₀=1 → x₁=1.5 → x₂=1.416667 → x₃=1.414216 → x₄=1.414214",
    "x³ - x - 1 = 0 → x₀=1 → x₁=1.5 → x₂≈1.347826 → x₃≈1.325200 → x₄≈1.324718",
    "x² = 5 → f(x) = x² - 5",
    "ln(x) = 2 → f(x) = ln(x) - 2",
    "eˣ = 3x → f(x) = eˣ - 3x",
    "Newton's Formula: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)",
    "Tangent line: y - f(xₙ) = f'(xₙ)(x - xₙ)",
    "Stop when |xₙ₊₁ - xₙ| is very small",
    "Stop when |f(xₙ)| < ε",
    "Newton's Method requires a good initial guess",
    "Derivative cannot be zero: f'(xₙ) ≠ 0",
    "Newton's Method has quadratic convergence",
    "Guess → Tangent Line → Better Guess → Repeat",
    "Derivative → Tangent Line → Linear Approximation → Newton's Method",
  ],
};

export default topic;