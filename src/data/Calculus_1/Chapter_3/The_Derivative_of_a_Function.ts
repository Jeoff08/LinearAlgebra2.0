// filename: the-derivative-of-a-function.ts

const topic = {
  id: "the-derivative-of-a-function",
  title: "The Derivative of a Function",
  summary:
    "A measure of the instantaneous rate of change of a function, giving the slope of the tangent line at any point, defined as f'(x) = lim(h→0) (f(x+h) - f(x))/h.",
  details: `
The derivative of a function is one of the most important concepts in Calculus. It tells us how a function is changing at a particular point.

In simple terms:
  The derivative measures the instantaneous rate of change of a function.

Geometrically, the derivative gives us the slope of the tangent line to the graph of a function at a particular point.

For a function:
  y = f(x)

its derivative is written as:
  f'(x)

It can also be written as:
  dy/dx

or:
  y'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES A DERIVATIVE MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  f(x) = x²

The graph is a curve, so its slope is not necessarily the same everywhere.

At different values of x, the curve has different slopes.

The derivative gives us a function that tells us the slope at every point.

For f(x) = x², the derivative is:
  f'(x) = 2x

This means:
  At x = 1, slope = 2
  At x = 2, slope = 4
  At x = 3, slope = 6
  At x = -1, slope = -2

So the derivative gives us information about the behavior of the original function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE AS THE SLOPE OF A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is closely connected to the tangent line.

For y = f(x), the derivative at x = a is the slope of the tangent line at (a, f(a)).

The slope of the tangent line is:
  f'(a)

This is one of the most important interpretations of the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE FROM THE LIMIT DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal definition of the derivative is based on a limit.

The derivative of f(x) at x = a is:
  f'(a) = lim(h→0) (f(a + h) - f(a))/h

This is called the difference quotient.

It may look complicated at first, but the idea behind it is simple.

We begin with the slope between two points:
  (f(a + h) - f(a))/h

Then we make the two points closer and closer together.

As h → 0, the secant line approaches the tangent line.

The resulting slope is:
  f'(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DO WE USE A LIMIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a straight line, we can calculate the slope using two points:
  m = (y₂ - y₁)/(x₂ - x₁)

But a derivative asks:
  What is the slope at exactly one point?

We cannot simply use the same point twice because that would give:
  0/0

which is undefined.

Instead, we use a second point that gets extremely close to the first point.

The limit allows us to determine what the slope approaches as the distance between the points approaches zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: FIND THE DERIVATIVE OF f(x) = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's use the limit definition.

Given:
  f(x) = x²

The derivative is:
  f'(x) = lim(h→0) (f(x + h) - f(x))/h

Step 1: Find f(x + h)
  f(x + h) = (x + h)²

Expand:
  (x + h)² = x² + 2xh + h²

Therefore:
  f(x + h) = x² + 2xh + h²

Step 2: Substitute into the Difference Quotient
  f'(x) = lim(h→0) (x² + 2xh + h² - x²)/h

Simplify:
  = lim(h→0) (2xh + h²)/h

Factor h:
  = lim(h→0) h(2x + h)/h

Cancel h:
  = lim(h→0) (2x + h)

Now let h → 0:

Therefore:
  f'(x) = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE AT A SPECIFIC POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a difference between finding f'(x) and finding f'(a).

f'(x):
  This gives the derivative function.
  For example:
    f(x) = x² gives f'(x) = 2x
  This tells us the slope at every point.

f'(a):
  This gives the derivative at one specific point.
  For example, at x = 3:
    f'(3) = 2(3) = 6
  So the tangent slope at x = 3 is 6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DERIVATIVE AS INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is not only about slopes.

It also represents an instantaneous rate of change.

Suppose s(t) represents the position of an object.

Then:
  s'(t) = v(t)

where v(t) is the instantaneous velocity.

For example:
  s(t) = t²

Then:
  s'(t) = 2t

Therefore:
  v(t) = 2t

At t = 5, the velocity is:
  v(5) = 10

So the object is moving at:
  10 units per second

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE AS THE SLOPE OF A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sign of the derivative tells us about the direction in which the function is changing.

If f'(x) > 0:
  the function is generally increasing.

If f'(x) < 0:
  the function is generally decreasing.

If f'(x) = 0:
  the tangent line is horizontal.
  This can indicate a local maximum, local minimum, or horizontal point of inflection, depending on the behavior of the function around that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE OF INCREASING AND DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x²

Its derivative is:
  f'(x) = 2x

When x > 0:
  2x > 0
  Therefore, the function is increasing.

When x < 0:
  2x < 0
  Therefore, the function is decreasing.

At x = 0:
  f'(0) = 0
  The graph has a horizontal tangent.

In fact:
  f(0) = 0

is the minimum point of the parabola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON DERIVATIVE NOTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several ways to write a derivative.

If y = f(x), then the derivative can be written as:
  • f'(x)
  • y'
  • dy/dx
  • d/dx [f(x)]

These all represent the derivative of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. BASIC DERIVATIVE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we understand the definition of the derivative, we can use derivative rules to calculate derivatives much faster.

Constant Rule:
  If f(x) = c, then f'(x) = 0.
  Example:
    f(x) = 7
    Therefore:
      f'(x) = 0
  A constant does not change, so its rate of change is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important derivative rules is the Power Rule.

If f(x) = xⁿ, then:
  f'(x) = nxⁿ⁻¹

Example:
  f(x) = x⁵

Apply the power rule:
  f'(x) = 5x⁴

Therefore:
  f'(x) = 5x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = c xⁿ, then:
  f'(x) = c n xⁿ⁻¹

Example:
  f(x) = 7x⁴

Differentiate:
  f'(x) = 7(4x³)
  f'(x) = 28x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SUM AND DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a sum is the sum of the derivatives.
  [f(x) + g(x)]' = f'(x) + g'(x)

Similarly:
  [f(x) - g(x)]' = f'(x) - g'(x)

Example:
  f(x) = x⁴ + 3x² - 5x + 7

Differentiate each term:
  f'(x) = 4x³ + 6x - 5

The constant disappears because:
  d/dx (7) = 0

Therefore:
  f'(x) = 4x³ + 6x - 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. PRODUCT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When two functions are multiplied, we use the Product Rule:
  (fg)' = f'g + fg'

Example:
  Let f(x) = x²(x + 3)

  Let u = x² and v = x + 3

  Then:
    u' = 2x
  and:
    v' = 1

  Using the product rule:
    f'(x) = u'v + uv'
    = 2x(x + 3) + x²(1)

  Simplify:
    = 2x² + 6x + x²
    f'(x) = 3x² + 6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUOTIENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When one function is divided by another, we use the Quotient Rule:
  (f/g)' = (f'g - fg')/g²

Example:
  Consider f(x) = x²/(x + 1)

  Let u = x² and v = x + 1

  Then:
    u' = 2x
  and:
    v' = 1

  Therefore:
    f'(x) = (2x(x + 1) - x²(1))/(x + 1)²

  Simplify:
    = (2x² + 2x - x²)/(x + 1)²
    f'(x) = (x² + 2x)/(x + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a function is inside another function, we use the Chain Rule.

The formula is:
  d/dx [f(g(x))] = f'(g(x)) · g'(x)

Example:
  Consider f(x) = (3x + 1)⁴

  The outer function is u⁴.
  The inner function is u = 3x + 1.

  Differentiate the outer function:
    4u³

  Then multiply by the derivative of the inner function:
    3

  Therefore:
    f'(x) = 4(3x + 1)³(3)
    f'(x) = 12(3x + 1)³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. HIGHER-ORDER DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can take the derivative more than once.

Suppose:
  f(x) = x³

First derivative:
  f'(x) = 3x²

Second derivative:
  f''(x) = 6x

Third derivative:
  f'''(x) = 6

Fourth derivative:
  f⁽⁴⁾(x) = 0

Higher derivatives are useful in studying:
  • Acceleration
  • Concavity
  • Motion
  • Optimization
  • Differential equations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DERIVATIVE AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If s(t) is position, then:
  s'(t) = v(t)

is velocity.

Taking another derivative:
  s''(t) = a(t)

gives acceleration.

Therefore:
  Position → Velocity → Acceleration

This is one of the most important applications of derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. WHEN DOES A DERIVATIVE EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not necessarily have a derivative at every point.

A derivative generally requires the graph to have a well-defined tangent direction.

A function may fail to be differentiable at:
  • Sharp corners
  • Cusps
  • Discontinuities
  • Certain vertical tangents

Example:
  Consider f(x) = |x|.

  At x = 0, the graph has a sharp corner.

  The left-hand derivative is -1, while the right-hand derivative is 1.

  Since -1 ≠ 1, the derivative does not exist at x = 0.

  Therefore:
    |x| is not differentiable at x = 0

  However, it is continuous at x = 0.

  This demonstrates an important relationship:
    Differentiability ⇒ Continuity
  but:
    Continuity ≠ Differentiability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. DERIVATIVE AND TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative gives us the slope needed to construct a tangent line.

If f(x) is the original function, then f'(a) is the slope at x = a.

The tangent line is:
  y - f(a) = f'(a)(x - a)

So the relationship is:
  Derivative → Tangent slope → Tangent line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x² + 2

Find the derivative and determine the slope at x = 2.

Step 1: Differentiate
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Step 2: Evaluate at x = 2
  f'(2) = 3(2)(2 - 2) = 0

Therefore:
  f'(2) = 0

The tangent line at x = 2 is horizontal.

Step 3: Find the Point
  f(2) = 2³ - 3(2)² + 2
  = 8 - 12 + 2
  = -2

The point is:
  (2, -2)

Since the slope is zero, the tangent line is:
  y = -2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. WHY THE DERIVATIVE IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative allows us to answer questions such as:
  • How fast is something changing?
  • Is a function increasing or decreasing?
  • Where is a function increasing most rapidly?
  • Where is a function decreasing?
  • Where does a function have a horizontal tangent?
  • Where are possible maximum and minimum points?
  • What is the instantaneous velocity?
  • What is the acceleration?
  • How can we approximate a complicated function?

The derivative is therefore a fundamental tool throughout Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rule                  Formula
  ──────────────────────────────────────────────────────────────────────────
  Constant Rule         d/dx [c] = 0
  Power Rule            d/dx [xⁿ] = nxⁿ⁻¹
  Constant Multiple     d/dx [c f(x)] = c f'(x)
  Sum Rule              d/dx [f(x) + g(x)] = f'(x) + g'(x)
  Difference Rule       d/dx [f(x) - g(x)] = f'(x) - g'(x)
  Product Rule          d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
  Quotient Rule         d/dx [f(x)/g(x)] = (f'(x)g(x) - f(x)g'(x))/[g(x)]²
  Chain Rule            d/dx [f(g(x))] = f'(g(x)) · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a function measures its instantaneous rate of change.

For y = f(x), the derivative is written as:
  f'(x)

The formal definition is:
  f'(x) = lim(h→0) (f(x + h) - f(x))/h

Geometrically, the derivative represents:
  Slope of the tangent line

In applications, it represents:
  Instantaneous rate of change

For motion:
  v(t) = s'(t)
and:
  a(t) = s''(t)

The most important idea to remember is:

  The derivative tells us how a function is changing at an exact point. 
  It gives the slope of the tangent line and, in real-world applications, 
  represents an instantaneous rate of change.

This concept forms the foundation for the next major Calculus topics: derivative rules, higher-order derivatives, implicit differentiation, related rates, linear approximation, and applications of derivatives.
  `,
  examples: [
    "f(x) = x² → f'(x) = 2x (using limit definition)",
    "f(x) = x⁵ → f'(x) = 5x⁴ (Power Rule)",
    "f(x) = 7x⁴ → f'(x) = 28x³ (Constant Multiple Rule)",
    "f(x) = x⁴ + 3x² - 5x + 7 → f'(x) = 4x³ + 6x - 5",
    "f(x) = x²(x+3) → f'(x) = 3x² + 6x (Product Rule)",
    "f(x) = x²/(x+1) → f'(x) = (x²+2x)/(x+1)² (Quotient Rule)",
    "f(x) = (3x+1)⁴ → f'(x) = 12(3x+1)³ (Chain Rule)",
  ],
};

export default topic;