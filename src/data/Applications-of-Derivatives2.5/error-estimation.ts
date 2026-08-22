const topic = {
  id: "error-estimation",
  title: "Error Estimation",
  summary:
    "Absolute error, relative error, percentage error, error propagation, and using differentials to estimate errors.",
  details: `
Error Estimation is a calculus technique used to determine how much an approximation may differ from the actual value.

It is closely connected to:
  • Derivatives
  • Differentials
  • Linear Approximation
  • Measurement Error
  • Relative Error
  • Percentage Error

The main idea is: Small input error → estimated output error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS ERROR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever we use an approximation instead of an exact value, there can be a difference between the two.

The absolute error is: Absolute Error = |Actual Value - Approximate Value|

Example: Suppose the actual value is 10.00 and our approximation is 9.98.

Then: |10.00 - 9.98| = 0.02

Therefore: Absolute Error = 0.02

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE ESTIMATE ERROR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In real-world situations, measurements are rarely perfect.

Examples:
  • A ruler may measure a length as 10.2 cm instead of the exact length.
  • A scale may measure weight with a small error.
  • A measuring device may round a value.
  • A calculator approximation may differ slightly from the exact value.

Calculus helps us determine how a small measurement error can affect the final result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ERROR AND DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important relationship is: dy = f'(x)dx

where:
  • dx = small error/change in the input
  • dy = estimated error/change in the output

For small changes: |Δy| ≈ |dy|

Therefore: |Δy| ≈ |f'(x)|·|dx|

This is one of the most useful formulas for error estimation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: ERROR IN AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a circle has radius: r = 10 cm

but the radius measurement could be off by: dr = 0.1 cm.

Estimate the possible error in the area.

The area is: A = πr²

Differentiate: dA = 2πrdr

Substitute: dA = 2π(10)(0.1) = 2π

Therefore: |dA| ≈ 2π cm² or approximately 6.28 cm².

So a 0.1-cm uncertainty in radius produces approximately a 6.28 cm² uncertainty in area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ABSOLUTE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The absolute error measures the size of the error, without considering the size of the original quantity.

Formula: E_absolute = |Actual - Approximate|

Using differentials, we can estimate it with: E_absolute ≈ |dy|

or: E_absolute ≈ |f'(x)|·|dx|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RELATIVE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute error doesn't always tell the whole story.

Consider two measurements:

Measurement A: Actual value = 1000, Error = 1
Measurement B: Actual value = 10, Error = 1

Both have an absolute error of 1, but the second measurement is much less accurate relative to its size.

This is why we use relative error.

Relative Error = Absolute Error / |Actual Value|

Using differentials: Relative Error ≈ |dy/y|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PERCENTAGE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To convert relative error into a percentage:

Percentage Error = Relative Error × 100%

Therefore: Percentage Error ≈ |dy/y| × 100%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: PERCENTAGE ERROR IN CIRCLE AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: A = πr²

Differentiate: dA = 2πrdr

Divide by A: dA/A = 2πrdr/(πr²)

Simplify: dA/A = 2·dr/r

Suppose the radius has a relative error of 1%: dr/r = 0.01

Then: dA/A = 2(0.01) = 0.02

Convert to percentage: 0.02(100%) = 2%

Therefore: Percentage Error in Area ≈ 2%

This is an important result: A 1% error in radius produces approximately a 2% error in the area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: ERROR IN VOLUME OF A SPHERE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a sphere is: V = 4/3πr³

Differentiate: dV = 4πr²dr

Divide by V: dV/V = 4πr²dr/(4/3πr³)

Simplify: dV/V = 3·dr/r

Therefore, approximately: Relative Error in Volume = 3(Relative Error in Radius)

So if the radius has a 2% error: dV/V ≈ 3(2%) = 6%

The volume could have approximately a 6% error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ERROR PROPAGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Error propagation describes how an error in one quantity affects another quantity.

Suppose: y = f(x)

If x has a small error dx, then: dy = f'(x)dx

So: Input Error → Derivative → Output Error

The derivative tells us how sensitive the output is to changes in the input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: SQUARE ROOT ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = √x and x = 25 has an error of: dx = 0.2

We want to estimate the error in y.

Differentiate: dy = 1/(2√x)dx

At x = 25: dy = 1/(2(5))(0.2) = 0.1/10 = 0.02

Therefore, the estimated error in √x is approximately 0.02.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ERROR ESTIMATION AND LINEAR APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are closely connected.

Linear approximation: f(x) ≈ f(a) + f'(a)(x - a)

Differential: dy = f'(a)dx

Error estimation: |Δy| ≈ |dy|

Therefore: Linear Approximation → Differentials → Error Estimation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MAXIMUM POSSIBLE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a problem asks for the maximum possible error.

If a measurement has an uncertainty of: ±dx, we usually estimate the maximum output error using: |dy| ≈ |f'(x)|·|dx|

Example: y = x² and x = 10 ± 0.1

Then: dy = 2xdx

Using x = 10 and dx = 0.1, we get: |dy| ≈ 2(10)(0.1) = 2

So the maximum estimated error in y is approximately 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: RECTANGLE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rectangle has: L = 20 cm and W = 10 cm.

Suppose the measurements have possible errors: dL = 0.1 cm and dW = 0.05 cm.

The area is: A = LW

Differentiate: dA = WdL + LdW

Substitute: dA = (10)(0.1) + (20)(0.05) = 1 + 1 = 2 cm²

So the estimated maximum error in the area is: 2 cm².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RELATIVE ERROR FOR A RECTANGLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For: A = LW, we have: dA = WdL + LdW

Divide by A = LW: dA/A = WdL/(LW) + LdW/(LW)

Therefore: dA/A = dL/L + dW/W

This tells us that the relative error in the area is approximately the sum of the relative errors in length and width.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GENERAL POWER RULE FOR ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = xⁿ

Then: dy = nxⁿ⁻¹dx

Divide by y = xⁿ: dy/y = n·dx/x

Therefore: dy/y ≈ n·dx/x

This is extremely useful.

Examples:
  • y = x² → dy/y ≈ 2·dx/x
  • y = x³ → dy/y ≈ 3·dx/x
  • y = √x = x¹/² → dy/y ≈ ½·dx/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ERROR IN A PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = uv

The differential is: dy = vdu + udv

Divide by y = uv: dy/y ≈ du/u + dv/v

So the relative errors approximately add.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ERROR IN A QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = u/v

Then: dy = (vdu - udv)/v²

For error estimation, the relative-error relationship is approximately: dy/y ≈ du/u - dv/v

When estimating maximum possible error, we usually use absolute values: |dy/y| ≈ |du/u| + |dv/v|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ERROR ESTIMATION WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an error-estimation problem, use this process:

Step 1: Identify the function: y = f(x)

Step 2: Identify the measurement error: dx

Step 3: Differentiate: dy = f'(x)dx

Step 4: Substitute the known values: Calculate dy

Step 5: Take the absolute value: For maximum/absolute error: |dy|

Step 6: Calculate relative or percentage error if requested
  Relative Error ≈ |dy/y|
  Percentage Error ≈ |dy/y| × 100%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the differential
  Wrong: dy = f'(x)
  Correct: dy = f'(x)dx

Mistake 2: Confusing absolute and relative error
  Absolute error: |dy|
  Relative error: |dy/y|
  Percentage error: |dy/y| × 100%

Mistake 3: Forgetting units
  If y represents area, then dy has area units. Example: cm², not just "cm."

Mistake 4: Using a large error with differential approximation
  Differentials are most accurate when dx is small.
  If the change is large, the differential approximation may become inaccurate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Absolute Error
Formula: E_absolute = |Actual - Approximate|

Concept: Differential Estimate
Formula: |E| ≈ |dy|

Concept: Differential
Formula: dy = f'(x)dx

Concept: Relative Error
Formula: E_relative ≈ |dy/y|

Concept: Percentage Error
Formula: E_% ≈ |dy/y| × 100%

Concept: General Error Propagation
Formula: |dy| ≈ |f'(x)|·|dx|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Error estimation connects several calculus concepts:

  Derivative → Differential → Linear Approximation → Error Estimation

The derivative tells us how sensitive a function is to changes: dy/dx = f'(x)

The differential estimates the resulting change: dy = f'(x)dx

And therefore: Error in output ≈ |Derivative| × Error in input

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Error Estimation, remember:

  • If the input x has a small error dx, and y = f(x), then the estimated error in y is: dy = f'(x)dx
  • For the size of the error: |dy| ≈ |f'(x)|·|dx|
  • For relative error: |dy/y|
  • For percentage error: |dy/y| × 100%

In short: Error Estimation uses derivatives and differentials to predict how much a small measurement or approximation error in one quantity will affect another quantity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Error Estimation is a practical application of derivatives and differentials for analyzing measurement uncertainty.

Key concepts covered:

  ✓ What Is Error?
  ✓ Why We Estimate Error
  ✓ Error and Differentials
  ✓ Error in Area
  ✓ Absolute Error
  ✓ Relative Error
  ✓ Percentage Error
  ✓ Error in Volume of a Sphere
  ✓ Error Propagation
  ✓ Square Root Error
  ✓ Linear Approximation Connection
  ✓ Maximum Possible Error
  ✓ Rectangle Error
  ✓ General Power Rule
  ✓ Error in a Product
  ✓ Error in a Quotient
  ✓ Workflow
  ✓ Common Mistakes
  `,
  examples: [
    "Circle: A = πr², r=10, dr=0.1 → dA = 2π cm² ≈ 6.28 cm²",
    "Sphere: V = 4/3πr³ → dV/V = 3·dr/r",
    "Radius 1% error → Area 2% error",
    "Radius 2% error → Volume 6% error",
    "y = √x, x=25, dx=0.2 → dy = 0.02",
    "Rectangle: A = LW, L=20, W=10, dL=0.1, dW=0.05 → dA = 2 cm²",
    "Absolute error: |Actual - Approximate|",
    "Relative error: |dy/y|",
    "Percentage error: |dy/y| × 100%",
    "dy = f'(x)dx",
    "Power rule: dy/y = n·dx/x",
    "Product: dy/y = du/u + dv/v",
    "Quotient: |dy/y| ≈ |du/u| + |dv/v|",
    "Error in output ≈ |Derivative| × Error in input",
    "Derivative → Differential → Linear Approximation → Error Estimation",
  ],
};

export default topic;