const topic = {
  id: "finding-dy-dx",
  title: "Finding dy/dx — Expanded Explanation",
  summary:
    "Definition of dy/dx, average vs instantaneous rate of change, geometric meaning, and differentiation techniques.",
  details: `
Finding dy/dx is one of the central skills in differential calculus. Almost everything you do after learning basic derivatives builds on this idea.

At its simplest: dy/dx = how fast y changes with respect to x.

It can also represent the slope of a curve at a particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT EXACTLY IS dy/dx?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have: y = f(x)

Imagine changing x by a very small amount.

As x changes, y also changes.

The derivative measures the relationship between those changes:

  dy/dx = instantaneous rate of change of y with respect to x

The symbols can be interpreted as:
  • dy = a tiny change in y
  • dx = a tiny change in x

So informally: dy/dx represents the ratio of the change in y to the change in x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. AVERAGE RATE OF CHANGE VS. INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before understanding the derivative, it's useful to understand the difference between average and instantaneous change.

Suppose: y = f(x)

Between two points: x₁ and x₂, the average rate of change is:

  Δy/Δx = [f(x₂) - f(x₁)]/(x₂ - x₁)

This gives the slope of a secant line.

But what if we want the slope at exactly one point?

We let the interval become extremely small.

That leads to: dy/dx = lim(h→0) [f(x+h) - f(x)]/h

This is the formal definition of the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC MEANING: THE SLOPE OF A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a straight line: y = mx + b, the slope is constant: m

But curves don't have one constant slope.

Example: y = x²

The slope changes as we move along the curve.

At x = 1, the slope is: 2
At x = 2, the slope is: 4
At x = 3, the slope is: 6

because: dy/dx = 2x

So dy/dx gives us the slope at every point on the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: y = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's examine: y = x²

Using the Power Rule: d/dx(x²) = 2x

Therefore: dy/dx = 2x

Now let's evaluate the slope at different points.

  • At x = 1: dy/dx = 2(1) = 2
  • At x = 2: dy/dx = 2(2) = 4
  • At x = 5: dy/dx = 2(5) = 10

So the curve becomes steeper as x increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POSITIVE, NEGATIVE, AND ZERO DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sign of dy/dx tells us about the direction of the graph.

Positive derivative:
  If dy/dx > 0, the function is increasing.
  Example: y = x² for x > 0, 2x > 0, so the graph is increasing.

Negative derivative:
  If dy/dx < 0, the function is decreasing.
  For y = -x², dy/dx = -2x. For positive x, -2x < 0, so the function is decreasing.

Zero derivative:
  If dy/dx = 0, the tangent line is horizontal.
  For y = x², set 2x = 0, so x = 0. At (0, 0), the graph has a horizontal tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE AS A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important idea is that the derivative itself is a new function.

Suppose: f(x) = x³

Then: f'(x) = 3x²

The original function is: f(x) = x³
The derivative function is: f'(x) = 3x²

This new function tells us the slope at every x.

So if x = 2, then: f'(2) = 3(2)² = 12

Therefore, the slope of y = x³ at x = 2 is: 12.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIFFERENT WAYS TO WRITE dy/dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative can be represented using several notations.

  • Leibniz notation: dy/dx
  • Prime notation: y'
  • Function notation: f'(x)
  • Differential operator notation: d/dx[f(x)]

These all describe the derivative.

For example: y = x³

can have the derivative written as:
  • dy/dx = 3x²
  • y' = 3x²
  • f'(x) = 3x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FINDING dy/dx STEP BY STEP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: y = 5x⁴ - 3x² + 7x - 10

We want: dy/dx

Step 1: Differentiate 5x⁴ → 5(4)x³ = 20x³

Step 2: Differentiate -3x² → -3(2)x = -6x

Step 3: Differentiate 7x → 7

Step 4: Differentiate -10 → 0

Therefore: dy/dx = 20x³ - 6x + 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY DOES THE POWER RULE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule states: d/dx(xⁿ) = n·xⁿ⁻¹

Example: y = x⁴

Bring the exponent down: 4x³

Then reduce the exponent by one: dy/dx = 4x³

The pattern is: xⁿ → n·xⁿ⁻¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FINDING dy/dx WITH MULTIPLE TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: y = 3x⁵ + 4x³ - 8x² + 6x - 1

Differentiate term by term:

  dy/dx = 15x⁴ + 12x² - 16x + 6

Therefore: dy/dx = 15x⁴ + 12x² - 16x + 6

The key rule is: Differentiate each term separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PRODUCT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes y contains two functions multiplied together.

Example: y = x²·sin(x)

You cannot simply differentiate each factor separately and multiply the derivatives.

You need the Product Rule: (u·v)' = u'·v + u·v'

Let: u = x² and v = sin(x)

Then: u' = 2x and v' = cos(x)

Therefore: dy/dx = 2x·sin(x) + x²·cos(x)

So: dy/dx = 2x·sin(x) + x²·cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUOTIENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = u/v, then: dy/dx = (u'·v - u·v')/v²

Example: y = (x² + 1)/(x + 1)

Let: u = x² + 1 and v = x + 1

Then: u' = 2x and v' = 1

Therefore: dy/dx = [(2x)(x+1) - (x²+1)(1)]/(x+1)²

Simplifying: dy/dx = (x² + 2x - 1)/(x+1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is necessary when one function is inside another.

Example: y = (x² + 3)⁴

Think of: u = x² + 3, so y = u⁴

Differentiate the outside: 4u³

Then multiply by the derivative of the inside: 2x

Therefore: dy/dx = 8x(x² + 3)³

A useful pattern is: Derivative of outside × Derivative of inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPLICIT EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Finding dy/dx becomes more interesting when y isn't isolated.

Suppose: x² + y² = 25

We cannot simply apply the Power Rule to y² and write 2y.

Because y depends on x: y = y(x)

Therefore: d/dx(y²) = 2y·dy/dx

Differentiate: 2x + 2y·dy/dx = 0

Solve: dy/dx = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY FINDING dy/dx IS CONNECTED TO TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative gives us the tangent slope.

The tangent-line equation is: y - y₁ = m(x - x₁)

where: m = dy/dx

Suppose: y = x²

At x = 2, the point is: (2, 4)

The derivative is: dy/dx = 2x

At x = 2: m = 4

Therefore: y - 4 = 4(x - 2)

So the tangent line is: y = 4x - 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FINDING CRITICAL POINTS USING dy/dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical point often occurs when: dy/dx = 0 or when the derivative is undefined.

Consider: y = x³ - 3x² + 2

Differentiate: dy/dx = 3x² - 6x

Factor: 3x(x - 2) = 0

Therefore: x = 0 or x = 2

These are critical x-values.

We can then use the second derivative to help determine whether these points are local maxima or minima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. RELATIONSHIP BETWEEN dy/dx AND d²y/dx²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once you have dy/dx, you can differentiate again: d²y/dx²

The first derivative tells us about slope.

The second derivative tells us about how the slope changes.

So: y → dy/dx → d²y/dx²

means: Function → Slope → Change in Slope.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A REAL-WORLD INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose s(t) is the position of a car.

Then: ds/dt is velocity.

Example: s(t) = 5t²

Then: ds/dt = 10t

At t = 3, the velocity is: 10(3) = 30

So: 30 units/time

This shows that derivatives aren't just about graphs—they describe real rates of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. FINDING dy/dx FROM A TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you're not given an equation. Instead, you may be given data.

Example:

  x | 1   2   3
  y | 2   5   10

You can estimate the derivative using: Δy/Δx

Between x = 1 and x = 2: (5-2)/(2-1) = 3

So the average rate of change is: 3

A derivative at a specific point requires a limiting process or an appropriate approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. FINDING dy/dx GRAPHICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you're given a graph, dy/dx represents the slope of the tangent line.

  • If the curve is going upward: dy/dx > 0
  • If the curve is going downward: dy/dx < 0
  • If the tangent is horizontal: dy/dx = 0
  • If the tangent is vertical, dy/dx is generally undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FINDING dy/dx FROM A PARAMETRIC EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: x = t² + 1 and y = t³

Differentiate both with respect to t:

  dx/dt = 2t and dy/dt = 3t²

Then: dy/dx = (dy/dt)/(dx/dt)

So: dy/dx = 3t²/(2t) = (3t)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A COMPLETE PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you see: Find dy/dx

use this process:

Step 1 — Identify what you're given
  Is it: y = f(x) or F(x, y) = 0 or x = f(t), y = g(t)?

Step 2 — Simplify
  Look for opportunities to simplify before differentiating.

Step 3 — Identify the required rules
  You may need: Power Rule, Product Rule, Quotient Rule, Chain Rule, or Implicit Differentiation.

Step 4 — Differentiate carefully
  Don't skip terms.

Step 5 — Simplify
  Combine like terms and factor where useful.

Step 6 — If asked for the slope at a point
  Substitute the given coordinates.

Step 7 — If asked for a tangent line
  Use: y - y₁ = m(x - x₁)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT EXAMPLES TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type: Polynomial: y = x⁴
Derivative: dy/dx = 4x³

Type: Product: y = x²·sin(x)
Derivative: dy/dx = 2x·sin(x) + x²·cos(x)

Type: Chain Rule: y = (x²+1)³
Derivative: dy/dx = 6x(x²+1)²

Type: Exponential: y = e^(2x)
Derivative: dy/dx = 2e^(2x)

Type: Logarithmic: y = ln(x²+1)
Derivative: dy/dx = 2x/(x²+1)

Type: Implicit: x² + y² = 25
Derivative: dy/dx = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. THE DEEPEST IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important thing isn't memorizing dozens of formulas.

It is understanding that: dy/dx answers the question: "At this exact point, how much does y change when x changes?"

  • For a graph, it means: slope of the tangent line.
  • For motion, it can mean: velocity.
  • For economics, it can represent: marginal change.
  • For population models, it can represent: instantaneous growth rate.
  • For temperature, it could represent: rate of temperature change.

So dy/dx is fundamentally a rate-of-change tool.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Finding dy/dx, remember:

  • dy/dx = instantaneous rate of change of y with respect to x.
  • You can find it using different techniques depending on the equation.
  • For polynomials: Use the Power Rule.
  • For products: Use the Product Rule.
  • For quotients: Use the Quotient Rule.
  • For composite functions: Use the Chain Rule.
  • For equations with x and y mixed: Use Implicit Differentiation.

Once you have dy/dx, you can use it to study slope, tangent lines, normal lines, increasing/decreasing functions, critical points, optimization, related rates, concavity, and curve behavior.

The central concept is:

  dy/dx = instantaneous rate of change of y with respect to x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Finding dy/dx is the central skill of differential calculus.

Key concepts covered:

  ✓ What Exactly Is dy/dx?
  ✓ Average vs. Instantaneous Rate of Change
  ✓ Geometric Meaning: Slope of a Curve
  ✓ Example: y = x²
  ✓ Positive, Negative, and Zero Derivatives
  ✓ Derivative as a Function
  ✓ Different Ways to Write dy/dx
  ✓ Step-by-Step Differentiation
  ✓ Power Rule
  ✓ Product Rule
  ✓ Quotient Rule
  ✓ Chain Rule
  ✓ Implicit Equations
  ✓ Tangent Lines
  ✓ Critical Points
  ✓ Second Derivative
  ✓ Real-World Interpretation
  ✓ From a Table
  ✓ Graphically
  ✓ Parametric Equations
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "y = x² → dy/dx = 2x",
    "y = x³ → dy/dx = 3x²",
    "y = 5x⁴ - 3x² + 7x - 10 → dy/dx = 20x³ - 6x + 7",
    "y = x²·sin(x) → dy/dx = 2x·sin(x) + x²·cos(x)",
    "y = (x²+3)⁴ → dy/dx = 8x(x²+3)³",
    "y = e^(2x) → dy/dx = 2e^(2x)",
    "y = ln(x²+1) → dy/dx = 2x/(x²+1)",
    "x² + y² = 25 → dy/dx = -x/y",
    "Slope at x=2 for y=x² → m = 4",
    "Tangent line at (2,4) for y=x² → y = 4x - 4",
    "Critical points: y = x³ - 3x² + 2 → x = 0, x = 2",
    "dy/dx > 0 → increasing",
    "dy/dx < 0 → decreasing",
    "dy/dx = 0 → horizontal tangent",
    "Velocity: s(t) = 5t² → ds/dt = 10t, at t=3 → 30",
    "Parametric: x=t²+1, y=t³ → dy/dx = 3t/2",
  ],
};

export default topic;