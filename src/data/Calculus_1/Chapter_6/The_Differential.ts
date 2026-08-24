// filename: the-differential.ts

const topic = {
  id: "the-differential",
  title: "The Differential",
  summary:
    "A concept describing the small change in the value of a function when the independent variable changes by a small amount, defined by dy = f'(x) dx, used for approximation and error estimation.",
  details: `
The differential is a concept closely related to the derivative. It provides a way to describe the small change in the value of a function when the independent variable changes by a small amount.

If y = f(x), then the differential of x is written as dx and the differential of y is written as dy.

The fundamental relationship is:
  dy = f'(x) dx

or, equivalently:
  dy = (dy/dx) dx

This means that the differential dy can be calculated by multiplying the derivative of the function by a small change dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A DIFFERENTIAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose y = f(x).

If x changes slightly, we can represent that change by dx.

The corresponding differential change in y is dy.

Since dy/dx = f'(x), we obtain:
  dy = f'(x) dx

The differential therefore represents the linear approximation of the change in y.

Example:
  Let y = x².

  First find the derivative:
    dy/dx = 2x

  Therefore:
    dy = 2x dx

  If x = 3 and dx = 0.1, then:
    dy = 2(3)(0.1) = 0.6

  So the differential predicts that y will change by approximately 0.6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIFFERENCE BETWEEN dy AND Δy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

There are two ways to describe a change in y:

Actual change:
  The actual change is:
    Δy = f(x + Δx) - f(x)

Differential change:
  The differential is:
    dy = f'(x) dx

When dx is small, we generally have:
  dy ≈ Δy

However, they are not exactly the same thing.

Example:
  Let f(x) = x² and suppose x = 3, Δx = 0.1.

Actual change:
  First calculate the new x:
    x + Δx = 3.1

  Then:
    Δy = (3.1)² - 3²
    Δy = 9.61 - 9
    Δy = 0.61

Differential:
  We know:
    dy = 2x dx

  Taking x = 3, dx = 0.1, we get:
    dy = 2(3)(0.1) = 0.6

Therefore:
  Δy = 0.61
while:
  dy = 0.6

They are close because the change in x is small.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential is connected to the tangent line of a curve.

Suppose y = f(x).

At a point x, the derivative f'(x) represents the slope of the tangent line.

If we move a small horizontal distance dx, then the corresponding vertical change along the tangent line is dy.

Since:
  slope = vertical change / horizontal change

we have:
  f'(x) = dy/dx

Therefore:
  dy = f'(x) dx

So geometrically:
  • dx = small horizontal change
  • dy = corresponding vertical change along the tangent line
  • f'(x) = slope of the tangent line

This is why differentials are useful for approximating changes in functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENTIAL OF A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function y = f(x), the differential is:
  dy = f'(x) dx

Example 1:
  Find dy if y = x³ + 2x² - 5x + 7.

  Differentiate:
    dy/dx = 3x² + 4x - 5

  Therefore:
    dy = (3x² + 4x - 5) dx

Example 2:
  Find dy for y = √x.

  Rewrite:
    y = x^(1/2)

  Differentiate:
    dy/dx = (1/2)x^(-1/2)

  Therefore:
    dy = 1/(2√x) dx

Example 3:
  Find dy for y = 1/x².

  Rewrite:
    y = x⁻²

  Differentiate:
    dy/dx = -2x⁻³

  Thus:
    dy = -2/x³ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENTIALS AND APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of differentials is approximation.

Suppose we want to estimate f(x + Δx) without calculating the function directly.

Because dy ≈ Δy, we can write:
  f(x + Δx) ≈ f(x) + dy

Since:
  dy = f'(x) dx

we get:
  f(x + dx) ≈ f(x) + f'(x) dx

This is called linear approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE OF APPROXIMATION USING DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Estimate √4.1.

We know that √4 = 2.

Let y = √x.

Then:
  dy = 1/(2√x) dx

Take x = 4.

The change is:
  dx = 4.1 - 4 = 0.1

Now calculate dy:
  dy = 1/(2√4) (0.1)
  dy = 1/4 (0.1)
  dy = 0.025

Therefore:
  √4.1 ≈ 2 + 0.025

Thus:
  √4.1 ≈ 2.025

The actual value is approximately 2.024845..., so the differential gives a very good approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIFFERENTIALS AND ERROR ESTIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials are also useful for estimating errors in measurements.

Suppose the radius of a circle is measured with a small error.

The area is:
  A = πr²

Differentiate:
  dA = 2πr dr

Therefore, a small error dr in the radius produces an approximate error:
  dA ≈ 2πr dr

in the area.

Example:
  Suppose a circle has radius r = 10 cm and the measurement error is dr = 0.1 cm.

  The area is A = πr².

  The differential is:
    dA = 2πr dr

  Substitute:
    dA = 2π(10)(0.1)

  Therefore:
    dA = 2π cm²

  Since 2π ≈ 6.28, the approximate error in the area is:
    6.28 cm²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RELATIVE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentials can also estimate relative error.

The relative error is approximately:
  dy/y

For example, for A = πr², we have:
  dA = 2πr dr

Divide both sides by A = πr²:
  dA/A = (2πr dr)/(πr²)

Simplifying:
  dA/A = 2(dr/r)

Therefore, the relative error in the area is approximately twice the relative error in the radius.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PERCENTAGE ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To convert relative error to percentage error:
  Percentage Error ≈ (dy/y) × 100%

For the circle example:
  dA/A = 2(dr/r)

If r = 10 and dr = 0.1, then:
  dr/r = 0.1/10 = 0.01

Thus:
  dA/A = 2(0.01) = 0.02

Therefore:
  Percentage Error ≈ 2%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIAL OF THE INDEPENDENT VARIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The notation dx represents a small change in x.

For example, if x = 5 changes to approximately 5.02, then dx = 0.02.

It is important to understand that dx is not simply a mysterious symbol. In differential calculus, it represents an infinitesimal or very small change in the independent variable, and it provides the basis for the relationship:
  dy = f'(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIAL OF COMPOSITE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose y = f(u) where u = g(x).

Using the Chain Rule:
  dy/dx = (dy/du)(du/dx)

Multiplying by dx:
  dy = (dy/du) du

Since:
  du = (du/dx) dx

we obtain:
  dy = (dy/du) du

This is one reason differential notation is particularly useful when working with the Chain Rule.

Example:
  Let y = (x² + 1)⁵.

  Let u = x² + 1.

  Then y = u⁵.

  Differentiate:
    dy = 5u⁴ du

  Since du = 2x dx, we obtain:
    dy = 5u⁴ (2x dx)

  Substitute u = x² + 1:
    dy = 10x(x² + 1)⁴ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIFFERENTIAL VS. DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are closely related but different.

Derivative:
  dy/dx represents the instantaneous rate of change or slope.

Differential:
  dy represents the corresponding linearized change in y produced by a small change dx.

They are connected by:
  dy = (dy/dx) dx

Think of it this way:
  Derivative × small change = differential change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = f(x), the main differential formula is:
  dy = f'(x) dx

Some common examples are:

  Function       Differential
  ──────────────────────────────────────────────
  y = xⁿ         dy = nxⁿ⁻¹ dx
  y = √x         dy = 1/(2√x) dx
  y = 1/x        dy = -1/x² dx
  y = eˣ         dy = eˣ dx
  y = ln x       dy = 1/x dx
  y = sin x      dy = cos x dx
  y = cos x      dy = -sin x dx
  y = tan x      dy = sec² x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY THE DIFFERENTIAL IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential is important because it connects several major ideas in calculus:

  • Derivatives: dy = f'(x) dx
  • Linear approximation: f(x + dx) ≈ f(x) + dy
  • Error estimation: dy ≈ Δy
  • Relative and percentage errors: dy/y
  • Chain Rule: dy = (dy/du) du
  • Tangent-line approximation
  • Applications involving measurements and physical quantities

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important relationship is:
  dy = f'(x) dx

where:
  • dx = small change in x
  • f'(x) = rate of change of y with respect to x
  • dy = approximate corresponding change in y

And when dx is small:
  dy ≈ Δy

So, in simple terms:

  The differential tells us approximately how much the output y changes when 
  the input x changes by a small amount.

This topic is especially important because it leads directly into linear approximations, error estimation, related rates, and applications of derivatives.
  `,
  examples: [
    "y = x² → dy = 2x dx",
    "y = x³ + 2x² - 5x + 7 → dy = (3x² + 4x - 5) dx",
    "√4.1 ≈ 2.025 using differential approximation",
    "Circle area error: dA = 2πr dr",
    "Relative error: dA/A = 2(dr/r)",
    "Percentage error ≈ (dy/y) × 100%",
    "Composite: y = (x²+1)⁵ → dy = 10x(x²+1)⁴ dx",
  ],
};

export default topic;