// filename: implicit-differentiation.ts

const topic = {
  id: "implicit-differentiation",
  title: "Implicit Differentiation",
  summary:
    "A technique for finding the derivative of a function when y is not explicitly isolated, by differentiating both sides with respect to x and applying the Chain Rule to terms containing y.",
  details: `
Implicit differentiation is a technique used to find the derivative of a function when y is not explicitly isolated on one side of the equation.

In many Calculus problems, we have equations like:
  y = x² + 3

Here, y is already written in terms of x. This is called an explicit function.

But sometimes we encounter equations such as:
  x² + y² = 25

Here, y is not isolated. Instead, x and y appear together.

We can still find dy/dx by using implicit differentiation.

The most important idea is:

  Differentiate both sides with respect to x, remembering that y is a function of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXPLICIT VS. IMPLICIT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explicit Function:
  A function is explicit when y is isolated:
    y = f(x)

  For example:
    y = x² + 4x - 1

  It is easy to differentiate:
    dy/dx = 2x + 4

Implicit Function:
  An implicit equation has x and y mixed together:
    x² + y² = 25

  Here, y is not isolated.

  Instead of solving for y = ±√(25 - x²), we can differentiate the original equation directly.

  This is called implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  x² + y² = 25

Differentiate both sides with respect to x:
  d/dx (x² + y²) = d/dx (25)

For x²:
  d/dx (x²) = 2x

For y², we must remember that y depends on x.

Using the Chain Rule:
  d/dx (y²) = 2y(dy/dx)

Therefore:
  2x + 2y(dy/dx) = 0

Solve for dy/dx:
  2y(dy/dx) = -2x
  dy/dx = -x/y

That is the derivative of the circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES y² BECOME 2y(dy/dx)?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important parts of implicit differentiation.

When we see y², we should remember that y is actually a function of x:
  y = y(x)

So we can think of it as:
  [y(x)]²

Using the Chain Rule:
  d/dx [y(x)]² = 2y(x) · y'(x)

Therefore:
  d/dx (y²) = 2y(dy/dx)

This is why the derivative of a term containing y usually contains dy/dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC STEPS FOR IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an implicit differentiation problem, follow these steps:

Step 1: Differentiate both sides with respect to x
  Take the derivative of every term.

Step 2: Remember that y depends on x
  Whenever you differentiate something containing y, apply the Chain Rule.

Step 3: Collect all terms containing dy/dx
  Put them on one side.

Step 4: Factor out dy/dx
  This makes it easier to isolate.

Step 5: Solve for dy/dx
  Your final answer should normally be written as:
    dy/dx = ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  x² + y² = 16

This represents a circle centered at the origin with radius 4.

Differentiate both sides:
  2x + 2y(dy/dx) = 0

Move 2x:
  2y(dy/dx) = -2x

Divide by 2y:
  dy/dx = -x/y

This gives the slope of the tangent line at any point on the circle where y ≠ 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: PRODUCT INVOLVING x AND y
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  xy = 10

Differentiate both sides:
  d/dx (xy) = d/dx (10)

Because xy is a product, use the Product Rule:
  x(dy/dx) + y = 0

Now solve for dy/dx:
  x(dy/dx) = -y
  dy/dx = -y/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH y³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  x² + y³ = 12

Differentiate:
  2x + 3y²(dy/dx) = 0

Move 2x:
  3y²(dy/dx) = -2x

Divide:
  dy/dx = -2x/(3y²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH xy²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  x² + xy² = 10

Differentiate each term.

For x²:
  2x

For xy², we need the Product Rule:
  d/dx (xy²) = x · d/dx (y²) + y² · d/dx (x)

Since:
  d/dx (y²) = 2y(dy/dx)

we get:
  xy² derivative: 2xy(dy/dx) + y²

Therefore:
  2x + 2xy(dy/dx) + y² = 0

Collect the derivative term:
  2xy(dy/dx) = -2x - y²

Therefore:
  dy/dx = (-2x - y²)/(2xy)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH A MORE COMPLICATED EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  x³ + y³ = 6xy

Differentiate both sides.

Left side:
  3x² + 3y²(dy/dx)

Right side:
  6(x(dy/dx) + y)

Therefore:
  3x² + 3y²(dy/dx) = 6x(dy/dx) + 6y

Move the derivative terms to one side:
  3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²

Factor:
  (3y² - 6x)(dy/dx) = 6y - 3x²

Therefore:
  dy/dx = (6y - 3x²)/(3y² - 6x)

We can simplify by dividing by 3:
  dy/dx = (2y - x²)/(y² - 2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPLICIT DIFFERENTIATION AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is heavily dependent on the Chain Rule.

For example:
  y⁴ can be viewed as [y(x)]⁴

Therefore:
  d/dx (y⁴) = 4y³(dy/dx)

Similarly:
  d/dx (yⁿ) = nyⁿ⁻¹(dy/dx)

This is one of the most useful formulas in implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVES OF COMMON y-EXPRESSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When differentiating implicitly, remember these patterns:

  d/dx (y) = dy/dx
  d/dx (y²) = 2y(dy/dx)
  d/dx (y³) = 3y²(dy/dx)
  d/dx (y⁵) = 5y⁴(dy/dx)

In general:
  d/dx (yⁿ) = nyⁿ⁻¹(dy/dx)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPLICIT DIFFERENTIATION WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can also involve functions such as:
  sin y, cos y, tan y

For example:
  x + sin y = 4

Differentiate:
  1 + cos y(dy/dx) = 0

Therefore:
  cos y(dy/dx) = -1
  dy/dx = -1/cos y

or:
  dy/dx = -sec y

The Chain Rule is again responsible for the dy/dx factor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING THE SLOPE AT A SPECIFIC POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is especially useful for finding the slope of a curve at a specific point.

Consider:
  x² + y² = 25

We already found:
  dy/dx = -x/y

Suppose the point is (3, 4).

Substitute:
  dy/dx = -3/4

Therefore:
  m = -3/4

The tangent slope at (3, 4) is -3/4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we know the derivative, we can find the tangent line.

For the circle x² + y² = 25 at (3, 4), we found:
  m = -3/4

Use the point-slope equation:
  y - y₁ = m(x - x₁)

Substitute:
  y - 4 = -3/4(x - 3)

This is the tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY USE IMPLICIT DIFFERENTIATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You might wonder:
  Why not just solve for y first?

Sometimes you can.

For x² + y² = 25, we could solve:
  y = ±√(25 - x²)

But this creates two functions:
  y = √(25 - x²)
and:
  y = -√(25 - x²)

Implicit differentiation allows us to differentiate the original equation directly without separating the equation into multiple functions.

This becomes especially useful when solving for y would be extremely complicated or impossible using elementary algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN IS IMPLICIT DIFFERENTIATION USEFUL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is especially useful for:
  • Circles
  • Ellipses
  • Hyperbolas
  • Curves defined by equations involving both x and y
  • Complicated algebraic equations
  • Related rates
  • Finding tangent lines
  • Finding normal lines
  • Higher-order derivatives

For example:
  x² + y² = 25
  x³ + y³ = 6xy
  x² + xy + y² = 7

All can be differentiated implicitly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting dy/dx
  Incorrect:
    d/dx (y²) = 2y
  Correct:
    d/dx (y²) = 2y(dy/dx)

Mistake 2: Forgetting the Product Rule
  For xy, the derivative is not just 1.

  Instead:
    d/dx (xy) = x(dy/dx) + y

Mistake 3: Not Collecting the Derivative Terms
  After differentiation, you will often have several terms containing dy/dx.
  Collect them together before solving.

Mistake 4: Stopping Too Early
  Suppose you get:
    2y(dy/dx) = -2x
  This is not yet the final derivative.
  You need to divide by 2y:
    dy/dx = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. HIGHER-ORDER IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can differentiate implicitly more than once.

For example, suppose:
  x² + y² = 25

First derivative:
  dy/dx = -x/y

We can differentiate again to find d²y/dx².

This requires using the Quotient Rule or Product Rule and again remembering that y is a function of x.

Higher-order implicit differentiation is useful when studying:
  • Concavity
  • Inflection points
  • Curvature
  • Higher-order behavior of curves

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find dy/dx for:
  x² + 3xy + y² = 12

Step 1: Differentiate everything
  2x + 3·d/dx(xy) + 2y(dy/dx) = 0

Apply the Product Rule:
  d/dx(xy) = x(dy/dx) + y

Therefore:
  2x + 3(x(dy/dx) + y) + 2y(dy/dx) = 0

Expand:
  2x + 3x(dy/dx) + 3y + 2y(dy/dx) = 0

Step 2: Collect the derivative terms
  3x(dy/dx) + 2y(dy/dx) = -2x - 3y

Factor:
  (3x + 2y)(dy/dx) = -2x - 3y

Step 3: Solve
  dy/dx = (-2x - 3y)/(3x + 2y)

That is the derivative of the implicitly defined curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE GENERAL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For almost every implicit differentiation problem, remember:

  Differentiate → Apply Chain/Product Rules → Collect dy/dx → Solve

For example:
  x² + y² = 25

becomes:
  2x + 2y(dy/dx) = 0

then:
  2y(dy/dx) = -2x

and finally:
  dy/dx = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Expression          Derivative with respect to x
  ────────────────────────────────────────────────────────────────────
  y                   dy/dx
  y²                  2y(dy/dx)
  y³                  3y²(dy/dx)
  yⁿ                  nyⁿ⁻¹(dy/dx)
  xy                  x(dy/dx) + y
  x²y                 x²(dy/dx) + 2xy
  sin y               cos y(dy/dx)
  cos y               -sin y(dy/dx)
  eʸ                  eʸ(dy/dx)
  ln y                (1/y)(dy/dx)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is a method for finding the derivative of an equation where x and y are mixed together and y is not explicitly isolated.

The key idea is:

  Treat y as a function of x, so whenever you differentiate a term 
  involving y, use the Chain Rule and include dy/dx.

The most important formula to remember is:
  d/dx (yⁿ) = nyⁿ⁻¹(dy/dx)

For example:
  x² + y² = 25

Differentiate:
  2x + 2y(dy/dx) = 0

Solve:
  dy/dx = -x/y

The key concepts are:
  • Differentiate both sides
  • Use the Chain Rule for y
  • Use the Product Rule when x and y are multiplied
  • Collect all dy/dx terms
  • Solve for dy/dx

Implicit differentiation is particularly important for circles, ellipses, other implicitly defined curves, tangent lines, related rates, and higher-order derivatives.
  `,
  examples: [
    "x² + y² = 25 → dy/dx = -x/y",
    "xy = 10 → dy/dx = -y/x",
    "x² + y³ = 12 → dy/dx = -2x/(3y²)",
    "x² + xy² = 10 → dy/dx = (-2x - y²)/(2xy)",
    "x³ + y³ = 6xy → dy/dx = (2y - x²)/(y² - 2x)",
    "x + sin y = 4 → dy/dx = -sec y",
    "x² + 3xy + y² = 12 → dy/dx = (-2x - 3y)/(3x + 2y)",
  ],
};

export default topic;