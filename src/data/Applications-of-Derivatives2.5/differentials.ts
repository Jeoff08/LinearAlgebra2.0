const topic = {
  id: "differentials",
  title: "Differentials",
  summary:
    "Definition of differentials, relationship to derivatives, approximation of changes, error estimation, and applications.",
  details: `
Differentials are a way of using derivatives to describe small changes in quantities.

They are closely connected to linear approximation and are especially useful for estimating changes, errors, and measurement uncertainty.

The central idea is: dy = f'(x)dx

This means that a small change in x, represented by dx, produces an approximate change in y, represented by dy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A DIFFERENTIAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = f(x)

The differential of x is written: dx

The differential of y is: dy

Using the derivative: dy/dx = f'(x)

multiply both sides by dx: dy = f'(x)dx

This is the fundamental formula for differentials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DO dx AND dy MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of: dx as a small change in x.

Then: dy represents the corresponding approximate change in y.

Example: y = x², then dy/dx = 2x, therefore: dy = 2xdx

If x changes slightly, we can use this formula to estimate how much y changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: FINDING A DIFFERENTIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = x³

Find dy.

Step 1: Differentiate: dy/dx = 3x²

Step 2: Multiply by dx: dy = 3x²dx

That's the differential of y = x³.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WITH NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = x² and x changes from 5 to 5.02.

The change in x is: dx = 0.02

We have: dy = 2xdx

At x = 5: dy = 2(5)(0.02) = 0.2

Therefore: dy = 0.2

The differential estimates that y will increase by approximately 0.2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ACTUAL CHANGE VS. DIFFERENTIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Suppose: y = f(x)

The actual change in y is: Δy = f(x + Δx) - f(x)

The differential is: dy = f'(x)dx

For small changes: dy ≈ Δy

So: Δy = actual change, dy = estimated change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: ACTUAL CHANGE VS. DIFFERENTIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let: y = x² and suppose x = 3 changes to 3.1.

Then: Δx = 0.1

Actual change: Δy = (3.1)² - (3)² = 9.61 - 9 = 0.61

Differential: dy = 2xdx

At x = 3: dy = 2(3)(0.1) = 0.6

Therefore: Δy = 0.61 while dy = 0.6

They are close: dy ≈ Δy because the change in x was relatively small.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIFFERENTIALS AND LINEAR APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials are directly connected to linear approximation.

Recall: L(x) = f(a) + f'(a)(x - a)

Let: dx = x - a

Then: dy = f'(a)dx

Therefore: f(x) ≈ f(a) + dy

So: f(x) ≈ f(a) + f'(a)dx

This is exactly the idea behind linear approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DIFFERENTIAL AS A CHANGE ALONG A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, dy represents the vertical change predicted by the tangent line.

For a small horizontal change dx:
  • Δy is the actual vertical change along the curve.
  • dy is the vertical change predicted by the tangent line.

When dx is small: dy ≈ Δy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIFFERENTIAL NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You may see different forms of the same idea.

Starting with: y = f(x)

we have: dy/dx = f'(x)

and therefore: dy = f'(x)dx

Example: y = sin(x), then dy/dx = cos(x), therefore: dy = cos(x)dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIALS OF COMMON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Power Function:
  y = xⁿ → dy = nxⁿ⁻¹dx

Exponential:
  y = eˣ → dy = eˣdx

Natural Logarithm:
  y = ln(x) → dy = (1/x)dx

Sine:
  y = sin(x) → dy = cos(x)dx

Cosine:
  y = cos(x) → dy = -sin(x)dx

Tangent:
  y = tan(x) → dy = sec²(x)dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIALS AND MEASUREMENT ERRORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful applications of differentials is estimating measurement errors.

Suppose the radius of a circle is measured with a small error.

The area is: A = πr²

The differential is: dA = 2πrdr

Therefore, if we know the small error in r, we can estimate the resulting error in area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: ERROR IN CIRCLE AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a circular plate has radius: r = 10 cm

and the measurement has an error of: dr = 0.1 cm

How much error might this produce in the area?

Start with: A = πr²

Differentiate: dA = 2πrdr

Substitute: dA = 2π(10)(0.1) = 2π cm²

So the approximate error in area is: 2π cm² or approximately 6.28 cm².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RELATIVE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials can also help estimate relative error.

For: A = πr², we have: dA = 2πrdr

Divide both sides by A: dA/A = 2πrdr/(πr²)

Simplify: dA/A = 2·dr/r

This tells us that the relative error in area is approximately twice the relative error in radius.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. PERCENTAGE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If dA/A is the relative error, then: Percentage Error ≈ (dA/A) × 100%

Example: If dr/r = 1%, then dA/A ≈ 2(1%) so Area error ≈ 2%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DIFFERENTIALS AND VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a sphere: V = 4/3πr³

Differentiate: dV = 4πr²dr

Therefore: dV = 4πr²dr

A small change in radius produces an approximate change in volume.

For relative error: dV/V = 3·dr/r

Thus: dV/V ≈ 3·dr/r

A small percentage error in radius can produce approximately three times that percentage error in volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DIFFERENTIALS AND RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials are also closely connected to related rates.

Example: A = πr²

The differential is: dA = 2πrdr

If we divide by dt: dA/dt = 2πr·dr/dt

This is the related-rates equation.

So differentials provide another way to understand why: dA/dt = 2πr·dr/dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DIFFERENTIAL VS. DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These terms are related but different.

Derivative: dy/dx represents the rate of change of y with respect to x.

Differential: dy represents the corresponding small change in y.

The relationship is: dy = (dy/dx)dx

So you can think of: Differential = Derivative × Small Input Change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WITH A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = √x

Find dy.

Rewrite: y = x¹/²

Differentiate: dy/dx = ½x⁻¹/² = 1/(2√x)

Therefore: dy = 1/(2√x)dx

This can be used to estimate changes in square roots.

Example: Around x = 25, we have: dy = 1/(2√25)dx = 1/10 dx

If dx = 0.2, then: dy = (1/10)(0.2) = 0.02

So: √25.2 can be estimated as: 5 + 0.02 = 5.02

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are three closely connected ideas:

Derivative: dy/dx tells us the rate of change.

Differential: dy = f'(x)dx estimates the small change in y.

Linear Approximation: L(x) = f(a) + f'(a)(x - a) uses the differential to approximate a function value.

They are all connected through the tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting dx
  If y = x³, then dy = 3x²dx, not simply 3x².

Mistake 2: Confusing dy with Δy
  They are not exactly the same. dy ≈ Δy for small changes.

Mistake 3: Forgetting the derivative
  Always begin with: dy/dx = f'(x). Then: dy = f'(x)dx.

Mistake 4: Ignoring units
  If x = cm and y = cm², then dy has units of cm².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Definition
Formula: dy = f'(x)dx

Concept: Derivative relationship
Formula: dy/dx = f'(x)

Concept: Approximate change
Formula: Δy ≈ dy

Concept: Differential approximation
Formula: dy = f'(a)dx

Concept: Linear approximation
Formula: f(a+dx) ≈ f(a) + dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials connect several important calculus topics:

  Derivative → Differential → Linear Approximation → Error Estimation

Example: dy/dx = f'(x) gives the rate of change.

Then: dy = f'(x)dx gives the approximate change.

And: f(x) ≈ f(a) + dy allows us to estimate a nearby function value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Differentials, remember:

  • The most important formula is: dy = f'(x)dx
  • Think of it as: Small change in output ≈ Rate of change × Small change in input
  • dx → small change in x
  • dy → approximate change in y
  • dy/dx → rate of change
  • dy = f'(x)dx → connects the two

Differentials are particularly useful for linear approximation, estimating errors, measurement uncertainty, and understanding how small changes in one quantity affect another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials are a powerful tool for estimating changes and errors using derivatives.

Key concepts covered:

  ✓ What Is a Differential?
  ✓ What Do dx and dy Mean?
  ✓ Finding Differentials
  ✓ Actual Change vs. Differential
  ✓ Differentials and Linear Approximation
  ✓ Geometric Interpretation
  ✓ Differential Notation
  ✓ Common Function Differentials
  ✓ Measurement Errors
  ✓ Relative Error
  ✓ Percentage Error
  ✓ Volume Error
  ✓ Related Rates Connection
  ✓ Differential vs. Derivative
  ✓ Common Mistakes
  `,
  examples: [
    "y = x³ → dy = 3x²dx",
    "y = x², x=5, dx=0.02 → dy = 0.2",
    "y = x², x=3, dx=0.1 → Δy=0.61, dy=0.6",
    "Circle: A = πr² → dA = 2πrdr",
    "r=10, dr=0.1 → dA = 2π cm² ≈ 6.28 cm²",
    "Relative error: dA/A = 2·dr/r",
    "Sphere: V = 4/3πr³ → dV = 4πr²dr",
    "Sphere relative error: dV/V = 3·dr/r",
    "y = √x → dy = 1/(2√x)dx",
    "y = sin(x) → dy = cos(x)dx",
    "y = cos(x) → dy = -sin(x)dx",
    "y = eˣ → dy = eˣdx",
    "y = ln(x) → dy = (1/x)dx",
    "dy = f'(x)dx",
    "Δy ≈ dy for small changes",
    "Derivative → Differential → Linear Approximation → Error Estimation",
  ],
};

export default topic;