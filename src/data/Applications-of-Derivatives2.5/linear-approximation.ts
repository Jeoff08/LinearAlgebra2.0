const topic = {
  id: "linear-approximation",
  title: "Linear Approximation",
  summary:
    "Definition of linear approximation, tangent line approximation, differentials, and error estimation.",
  details: `
Linear Approximation is a calculus technique used to estimate the value of a function near a point where the exact calculation may be difficult.

The main idea is simple: Near a point, a smooth curve behaves approximately like a straight line. That straight line is the function's tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS LINEAR APPROXIMATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function f(x) and we want to estimate f(x) near some convenient point x = a.

Instead of calculating the exact value of f(x), we can use the tangent line at x = a.

The linear approximation is: L(x) = f(a) + f'(a)(x - a)

This is one of the most important formulas for linear approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DOES IT WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A differentiable function is approximately linear when we look at it very close to a particular point.

At a particular point, the tangent line can closely approximate the curve.

The closer x is to a, the better the approximation generally becomes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE LINEAR APPROXIMATION FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula is: L(x) = f(a) + f'(a)(x - a)

where:
  • f(a) = exact function value at the known point
  • f'(a) = derivative at that point
  • x - a = how far x is from a
  • L(x) = approximate value of f(x)

Therefore: f(x) ≈ L(x) when x is close to a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONNECTION TO THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the tangent-line equation: y - y₁ = m(x - x₁)

For a function y = f(x):
  x₁ = a
  y₁ = f(a)
  m = f'(a)

Therefore: y - f(a) = f'(a)(x - a)

Solving for y: y = f(a) + f'(a)(x - a)

This is exactly the linear approximation formula.

So: Linear Approximation = Tangent Line Approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: APPROXIMATE √4.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to estimate: √4.1

Calculating this exactly may require a calculator, but calculus can give us a good approximation.

Choose: f(x) = √x

We choose a = 4 because: √4 = 2 is easy to calculate.

Step 1: Find f(a)
  f(4) = √4 = 2

Step 2: Find the derivative
  f(x) = x¹/² → f'(x) = ½x⁻¹/² = 1/(2√x)

At x = 4: f'(4) = 1/(2√4) = 1/4

Step 3: Build the linear approximation
  L(x) = f(a) + f'(a)(x - a)
  L(x) = 2 + ¼(x - 4)

Step 4: Substitute 4.1
  L(4.1) = 2 + ¼(4.1 - 4) = 2 + ¼(0.1) = 2 + 0.025 = 2.025

Therefore: √4.1 ≈ 2.025

The actual value is approximately 2.0249, so the approximation is very close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY CHOOSE A NEARBY CONVENIENT NUMBER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When using linear approximation, choose a so that:
  • a is close to the desired x.
  • f(a) is easy to calculate.
  • f'(a) is easy to calculate.

Example: To approximate √9.2, choose a = 9 because √9 = 3.

This makes the calculation much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approximate: √25.3

Let: f(x) = √x

Choose: a = 25

Then: f(25) = 5

The derivative is: f'(x) = 1/(2√x)

Therefore: f'(25) = 1/10

Now: L(x) = 5 + (1/10)(x - 25)

Evaluate at x = 25.3: L(25.3) = 5 + (1/10)(0.3) = 5 + 0.03 = 5.03

Therefore: √25.3 ≈ 5.03

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LINEAR APPROXIMATION FOR CUBE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to approximate: ³√8.2

Let: f(x) = ³√x = x¹/³

Choose: a = 8 because ³√8 = 2

Find the derivative: f'(x) = ⅓x⁻²/³

At x = 8: f'(8) = ⅓(8⁻²/³)

Since 8²/³ = 4, we get: f'(8) = 1/12

Therefore: L(x) = 2 + (1/12)(x - 8)

For x = 8.2: L(8.2) = 2 + (1/12)(0.2) = 2 + 0.0167 ≈ 2.0167

Thus: ³√8.2 ≈ 2.0167

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LINEAR APPROXIMATION FOR TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear approximation can also estimate trigonometric values.

Suppose we want to approximate: sin(0.1)

Choose: a = 0 because sin(0) = 0 and cos(0) = 1

Let: f(x) = sin(x)

Then: f'(x) = cos(x)

Therefore: f'(0) = 1

The linear approximation is: L(x) = 0 + 1(x - 0) = x

Therefore: sin(0.1) ≈ 0.1

This works because 0.1 is close to 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LINEAR APPROXIMATION OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: cos(0.05)

Let: f(x) = cos(x)

Choose: a = 0

Then: f(0) = 1

The derivative is: f'(x) = -sin(x)

Therefore: f'(0) = 0

The linear approximation is: L(x) = 1 + 0(x - 0) = 1

Thus: cos(0.05) ≈ 1

The approximation isn't as accurate as the sine example because the tangent line to cosine at 0 is horizontal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIAL FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear approximation is closely related to differentials.

Starting with: L(x) = f(a) + f'(a)(x - a)

we can define: Δx = x - a

Then: Δy ≈ f'(a)Δx

Using differential notation: dy = f'(x)dx

This allows us to estimate small changes in y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ERROR IN LINEAR APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear approximation is an estimate, so it may contain some error.

The approximation error is: Error = Actual Value - Approximate Value

Example: If Actual = 2.0249 and Approximate = 2.025,

then Error = 2.0249 - 2.025 = -0.0001

The absolute error is: 0.0001

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RELATIVE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we are interested in the error relative to the actual value.

The relative error is: |Actual - Approximate|/|Actual|

The percentage error is: |Actual - Approximate|/|Actual| × 100%

This is useful when evaluating how accurate an approximation is.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHEN IS LINEAR APPROXIMATION ACCURATE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear approximation works best when:
  • x is very close to a
  • and the function is smooth near a.

Example: √4.01 can be approximated very well using a = 4.

But trying to approximate √100 using a = 4 would be a terrible choice because 100 is nowhere near 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LINEAR APPROXIMATION AND TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a direct geometric interpretation.

The curve: y = f(x) is nonlinear.

But near x = a, the curve can be approximated by its tangent line: y = L(x)

So: f(x) ≈ L(x)

The tangent line gives a simple linear model of the function near the chosen point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a linear approximation problem:

Step 1: Identify the function
  Write: f(x)

Step 2: Choose a convenient a
  Choose a value close to the desired x.

Step 3: Calculate f(a)
  f(a) should be easy to evaluate.

Step 4: Find the derivative
  f'(x)

Step 5: Calculate f'(a)

Step 6: Construct L(x)
  L(x) = f(a) + f'(a)(x - a)

Step 7: Substitute the desired value
  f(x) ≈ L(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Choosing a poor a
  Always choose a convenient value close to x.

Mistake 2: Forgetting f'(a)
  The formula is: L(x) = f(a) + f'(a)(x - a)

Mistake 3: Using f'(x) instead of f'(a)
  You need the derivative evaluated at the chosen point.

Mistake 4: Choosing a point too far away
  Linear approximation is designed for nearby values.

Mistake 5: Forgetting that it is an approximation
  Write ≈ rather than an equals sign when giving the estimated value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LINEAR APPROXIMATION VS. EXACT VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = √x and we want: √4.1

Exact calculation: √4.1 ≈ 2.024845...

Linear approximation: L(4.1) = 2.025

So: √4.1 ≈ 2.025

The purpose isn't necessarily to get the exact answer. Instead, we use information we already know to obtain a quick and reasonable estimate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT FORMULA SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Linear Approximation
Formula: L(x) = f(a) + f'(a)(x - a)

Concept: Approximation
Formula: f(x) ≈ f(a) + f'(a)(x - a)

Concept: Differential
Formula: dy = f'(x)dx

Concept: Change Approximation
Formula: Δy ≈ f'(a)Δx

Concept: Tangent Line
Formula: y - f(a) = f'(a)(x - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Linear Approximation, remember:

  • Curved Function ≈ Tangent Line near a convenient point a.
  • The most important formula is: L(x) = f(a) + f'(a)(x - a)
  • Choose a close to x, with easy f(a) and f'(a) values.
  • The approximation is more accurate when x is closer to a.

So when you see a problem asking you to approximate a difficult value, think:

  Choose a → f(a) → f'(a) → L(x) → Approximate

Linear Approximation is therefore an important application of the derivative and tangent lines, and it also provides the foundation for understanding differentials, error estimation, and Taylor approximations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Approximation is a powerful technique for estimating function values using tangent lines.

Key concepts covered:

  ✓ What Is Linear Approximation?
  ✓ Why It Works
  ✓ The Formula
  ✓ Connection to Tangent Lines
  ✓ Approximating Square Roots
  ✓ Approximating Cube Roots
  ✓ Approximating Trigonometric Functions
  ✓ Differential Form
  ✓ Error Estimation
  ✓ Relative Error
  ✓ When Approximations Are Accurate
  ✓ General Procedure
  ✓ Common Mistakes
  `,
  examples: [
    "√4.1 ≈ 2.025 (using a=4)",
    "√25.3 ≈ 5.03 (using a=25)",
    "³√8.2 ≈ 2.0167 (using a=8)",
    "sin(0.1) ≈ 0.1 (using a=0)",
    "cos(0.05) ≈ 1 (using a=0)",
    "L(x) = f(a) + f'(a)(x - a)",
    "f(x) ≈ f(a) + f'(a)(x - a)",
    "dy = f'(x)dx",
    "Δy ≈ f'(a)Δx",
    "Error = Actual - Approximate",
    "Relative error = |Actual - Approximate|/|Actual|",
    "Choose a close to x with easy values",
    "Tangent line: y - f(a) = f'(a)(x - a)",
    "Approximation is better when x is closer to a",
    "Choose a → f(a) → f'(a) → L(x) → Approximate",
  ],
};

export default topic;