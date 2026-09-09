// filename: the-derivative-of-a-function.ts

const topic = {
  id: "the-derivative-of-a-function",
  title: "The Derivative of a Function",
  summary:
    "A measure of the instantaneous rate of change of a function, giving the slope of the tangent line at any point, defined as f'(x) = lim(h→0) (f(x+h) - f(x))/h.",
  details: `
The derivative of a function is one of the most important concepts in Calculus. It tells us how a function is changing at a particular point. In simple terms, the derivative measures the instantaneous rate of change of a function. Geometrically, the derivative gives us the slope of the tangent line to the graph of a function at a particular point. For a function y = f(x), its derivative is written as f'(x), which can also be expressed as dy/dx or y'. Understanding the derivative is essential because it provides a way to analyse dynamic systems, from the motion of objects to the growth of populations. It is the foundation upon which the entire edifice of differential calculus is built, and it appears in virtually every application of mathematics to the real world.

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

Suppose we have f(x) = x². The graph is a curve, so its slope is not necessarily the same everywhere. At different values of x, the curve has different slopes. The derivative gives us a function that tells us the slope at every point. For f(x) = x², the derivative is f'(x) = 2x. This means that at x = 1, the slope is 2; at x = 2, the slope is 4; at x = 3, the slope is 6; and at x = -1, the slope is -2. So the derivative gives us information about the behaviour of the original function whether it is increasing, decreasing, or flat at any given point. This local information is crucial for understanding the shape of the graph and for predicting the function's behaviour. The derivative essentially transforms a static equation into a dynamic description of change.

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

The derivative is closely connected to the tangent line. For y = f(x), the derivative at x = a is the slope of the tangent line at the point (a, f(a)). The slope of the tangent line is f'(a). This is one of the most important interpretations of the derivative because it bridges algebra and geometry. A tangent line touches the curve at exactly one point and has the same instantaneous slope as the curve at that point. By finding the derivative, we can determine the equation of the tangent line, which is useful for approximating the function near that point. The tangent line provides a linear approximation to the curve, which is the basis for many numerical methods in calculus. The geometric interpretation also helps in visualising the behaviour of functions and understanding the meaning of the derivative in a concrete way.

The derivative is closely connected to the tangent line.

For y = f(x), the derivative at x = a is the slope of the tangent line at (a, f(a)).

The slope of the tangent line is:
  f'(a)

This is one of the most important interpretations of the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE FROM THE LIMIT DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal definition of the derivative is based on a limit. The derivative of f(x) at x = a is f'(a) = lim(h→0) (f(a + h) - f(a))/h. This is called the difference quotient. It may look complicated at first, but the idea behind it is simple. We begin with the slope between two points: (f(a + h) - f(a))/h. Then we make the two points closer and closer together. As h → 0, the secant line approaches the tangent line. The resulting slope is f'(a). This definition is the rigorous foundation of differential calculus. It ensures that the derivative is not just an intuitive concept but a mathematically precise one. The limit definition also allows us to prove the various differentiation rules, such as the Power Rule and the Chain Rule, by starting from first principles. Understanding this definition is essential for a deep grasp of calculus.

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

For a straight line, we can calculate the slope using two points: m = (y₂ - y₁)/(x₂ - x₁). But a derivative asks: what is the slope at exactly one point? We cannot simply use the same point twice because that would give 0/0, which is undefined. Instead, we use a second point that gets extremely close to the first point. The limit allows us to determine what the slope approaches as the distance between the points approaches zero. This is the fundamental insight of calculus: by taking a limit, we can define a quantity that cannot be obtained by ordinary algebra. The limit process transforms the average rate of change into an instantaneous rate of change. This idea of approaching a value without ever necessarily reaching it is what makes calculus so powerful and is the key to understanding derivatives, integrals, and many other concepts in the subject.

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

Let's use the limit definition to find the derivative of f(x) = x². We start with the formula f'(x) = lim(h→0) (f(x + h) - f(x))/h. First, we compute f(x + h) = (x + h)² = x² + 2xh + h². Substituting into the difference quotient gives (x² + 2xh + h² - x²)/h = (2xh + h²)/h. Factoring h gives h(2x + h)/h, and cancelling h leaves 2x + h. Taking the limit as h → 0 gives 2x. Thus, f'(x) = 2x. This result matches the Power Rule, which we will learn later. This example illustrates how the limit definition works in practice. It also shows why the derivative of x² is 2x: as the interval shrinks to zero, the average slope approaches the instantaneous slope, which is exactly 2x.

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

There is a difference between finding f'(x) and finding f'(a). f'(x) gives the derivative function, which tells us the slope at every point. For example, f(x) = x² gives f'(x) = 2x, so the slope at any x is 2x. f'(a) gives the derivative at one specific point. For example, at x = 3, f'(3) = 2(3) = 6, so the tangent slope at x = 3 is 6. This distinction is important because in many applications, we are interested in the rate of change at a particular moment such as the velocity of a car at a specific time rather than the general rate of change. The derivative function provides a complete description of how the slope varies, while the derivative at a point gives a single numerical value that can be interpreted in context. Both are useful, and the ability to switch between them is a key skill in calculus.

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

The derivative is not only about slopes. It also represents an instantaneous rate of change. Suppose s(t) represents the position of an object. Then s'(t) = v(t), where v(t) is the instantaneous velocity. For example, if s(t) = t², then s'(t) = 2t, so v(t) = 2t. At t = 5, the velocity is v(5) = 10, so the object is moving at 10 units per second. This interpretation is fundamental in physics and engineering because it allows us to calculate velocities, accelerations, and other rates of change from position functions. The derivative captures the idea of "how fast" something is changing at an instant, which is a concept that cannot be captured by average rates alone. This is why calculus is essential for understanding the dynamics of moving objects and changing systems.

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

The sign of the derivative tells us about the direction in which the function is changing. If f'(x) > 0, the function is generally increasing at that point; if f'(x) < 0, it is generally decreasing; if f'(x) = 0, the tangent line is horizontal, which can indicate a local maximum, local minimum, or horizontal point of inflection, depending on the behaviour of the function around that point. This information is crucial for curve sketching and for solving optimisation problems. By analysing the sign of the derivative, we can determine where a function rises and falls, where it has peaks and valleys, and where it changes concavity. The derivative thus provides a complete picture of the function's behaviour, complementing the function's value with information about its rate of change.

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

Consider f(x) = x². Its derivative is f'(x) = 2x. When x > 0, 2x > 0, so the function is increasing. When x < 0, 2x < 0, so the function is decreasing. At x = 0, f'(0) = 0, so the graph has a horizontal tangent. In fact, f(0) = 0 is the minimum point of the parabola. This example illustrates how the derivative tells us about the shape of the function. The sign of the derivative gives the direction of motion along the curve, while the magnitude of the derivative gives the steepness. By analysing the derivative, we can understand the function's behaviour without plotting many points. This is one of the main reasons the derivative is so useful in calculus: it provides a quantitative description of a function's behaviour that is both precise and easy to interpret.

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

There are several ways to write a derivative, and it is important to be familiar with all of them. If y = f(x), then the derivative can be written as f'(x), y', dy/dx, or d/dx [f(x)]. The prime notation (f') is compact and widely used in textbooks. The Leibniz notation (dy/dx) emphasises the ratio of changes and is particularly useful in applications and in the Chain Rule. The operator notation (d/dx) is helpful when differentiating expressions. All these notations represent the derivative of the function and are interchangeable. Being comfortable with all of them is essential for reading and writing calculus. Each notation has its advantages, and the choice of which to use often depends on the context and personal preference.

If y = f(x), then the derivative can be written as:
  • f'(x)
  • y'
  • dy/dx
  • d/dx [f(x)]

These all represent the derivative of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. BASIC DERIVATIVE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we understand the definition of the derivative, we can use derivative rules to calculate derivatives much faster. The Constant Rule states that if f(x) = c, then f'(x) = 0. For example, f(x) = 7 has derivative f'(x) = 0. This makes sense because a constant does not change, so its rate of change is zero. The Constant Rule is the simplest derivative rule and is a direct consequence of the limit definition. It is the starting point for building more complex derivative formulas. Understanding why the derivative of a constant is zero because there is no change in the function helps reinforce the interpretation of the derivative as a rate of change.

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

One of the most important derivative rules is the Power Rule. It states that if f(x) = xⁿ, then f'(x) = n xⁿ⁻¹. For example, if f(x) = x⁵, then f'(x) = 5x⁴. The Power Rule is derived from the limit definition and is one of the most frequently used rules in calculus. It works for any real exponent n, including negative and fractional exponents. For instance, the derivative of x^(1/2) is (1/2)x^(-1/2), which matches the derivative of √x. The Power Rule is the foundation for differentiating polynomial functions, which are sums of power terms. Mastering the Power Rule is essential for success in calculus, as it appears in almost every differentiation problem.

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

If f(x) = c xⁿ, then f'(x) = c n xⁿ⁻¹. This rule combines the Constant Rule and the Power Rule. For example, if f(x) = 7x⁴, then f'(x) = 7(4x³) = 28x³. The Constant Multiple Rule allows us to factor out constants before differentiating, which simplifies the process. It is particularly useful when dealing with polynomials that have coefficients. This rule also shows that differentiation is a linear operation: constants can be pulled out of the derivative. Understanding this rule helps in breaking down complex functions into simpler parts that can be differentiated separately.

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

The derivative of a sum is the sum of the derivatives: [f(x) + g(x)]' = f'(x) + g'(x). Similarly, [f(x) - g(x)]' = f'(x) - g'(x). This rule allows us to differentiate polynomials term by term. For example, if f(x) = x⁴ + 3x² - 5x + 7, then f'(x) = 4x³ + 6x - 5. The constant 7 disappears because its derivative is zero. The Sum and Difference Rule is a direct consequence of the limit definition and the linearity of the derivative. It makes differentiating sums of functions straightforward: we simply differentiate each term separately and then add or subtract the results. This rule is used extensively in calculus and is one of the first differentiation rules students learn.

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

When two functions are multiplied, we use the Product Rule: (fg)' = f'g + fg'. For example, let f(x) = x²(x + 3). Let u = x² and v = x + 3. Then u' = 2x and v' = 1. Using the Product Rule, f'(x) = u'v + uv' = 2x(x + 3) + x²(1) = 2x² + 6x + x² = 3x² + 6x. The Product Rule is essential for differentiating products of functions that cannot be simplified by expanding. It is derived from the limit definition and is one of the fundamental rules of differentiation. The Product Rule is often memorised as "derivative of the first times the second plus the first times the derivative of the second." It is used frequently in calculus, especially when dealing with polynomial products and trigonometric expressions.

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

When one function is divided by another, we use the Quotient Rule: (f/g)' = (f'g - fg')/g². For example, consider f(x) = x²/(x + 1). Let u = x² and v = x + 1. Then u' = 2x and v' = 1. Using the Quotient Rule, f'(x) = (2x(x + 1) - x²(1))/(x + 1)² = (2x² + 2x - x²)/(x + 1)² = (x² + 2x)/(x + 1)². The Quotient Rule is useful for differentiating rational functions. It can be remembered as "low d high minus high d low, over low squared." It is derived from the Product Rule and the Chain Rule and is an essential tool in calculus. The Quotient Rule is often used in conjunction with the Chain Rule for more complex rational functions.

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

When a function is inside another function, we use the Chain Rule. The formula is d/dx [f(g(x))] = f'(g(x)) · g'(x). For example, consider f(x) = (3x + 1)⁴. The outer function is u⁴, and the inner function is u = 3x + 1. Differentiating the outer function gives 4u³. Then multiply by the derivative of the inner function, which is 3. Therefore, f'(x) = 4(3x + 1)³(3) = 12(3x + 1)³. The Chain Rule is one of the most important rules in calculus because many functions are compositions of simpler functions. It is used to differentiate everything from polynomial powers to trigonometric, exponential, and logarithmic functions. The Chain Rule is also the foundation for implicit differentiation and related rates. Mastering the Chain Rule is essential for success in calculus.

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

We can take the derivative more than once. Suppose f(x) = x³. The first derivative is f'(x) = 3x². The second derivative is f''(x) = 6x. The third derivative is f'''(x) = 6. The fourth derivative is f⁽⁴⁾(x) = 0. Higher derivatives are useful in studying acceleration, concavity, motion, optimisation, and differential equations. For example, in motion, the first derivative of position is velocity, the second is acceleration, and the third is jerk. Higher derivatives also appear in Taylor series, which are used to approximate functions. Understanding higher‑order derivatives is essential for advanced calculus and its applications. The process of finding higher derivatives is simply repeated application of the derivative rules.

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

If s(t) is position, then s'(t) = v(t) is velocity. Taking another derivative, s''(t) = a(t) gives acceleration. Therefore, position → velocity → acceleration. This is one of the most important applications of derivatives. It allows us to analyse the motion of objects, from simple free‑fall to complex vibrations. In physics, acceleration is the rate of change of velocity, just as velocity is the rate of change of position. By knowing the position function, we can compute velocity and acceleration by differentiation. Conversely, by knowing acceleration, we can find velocity and position by integration. This connection between differentiation and motion is fundamental to classical mechanics and is a major reason why calculus was developed. It shows how the derivative provides a complete kinematic description of an object's motion.

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

A function does not necessarily have a derivative at every point. A derivative generally requires the graph to have a well‑defined tangent direction. A function may fail to be differentiable at sharp corners, cusps, discontinuities, or certain vertical tangents. For example, consider f(x) = |x|. At x = 0, the graph has a sharp corner. The left‑hand derivative is -1, while the right‑hand derivative is 1. Since -1 ≠ 1, the derivative does not exist at x = 0. Therefore, |x| is not differentiable at x = 0. However, it is continuous at x = 0. This demonstrates an important relationship: differentiability implies continuity, but continuity does not imply differentiability. Understanding when a derivative exists is important for applying calculus correctly. It also highlights the distinction between smooth functions and those with corners or breaks.

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

The derivative gives us the slope needed to construct a tangent line. If f(x) is the original function, then f'(a) is the slope at x = a. The tangent line is y - f(a) = f'(a)(x - a). So the relationship is derivative → tangent slope → tangent line. The tangent line is the best linear approximation to the function near that point. It is used in linearisation, which is a technique for approximating functions that are difficult to compute directly. The tangent line also helps in understanding the local behaviour of the function: whether it is increasing, decreasing, or flat. Constructing tangent lines is a fundamental skill in calculus and is essential for optimisation and curve sketching.

If f(x) is the original function, then f'(a) is the slope at x = a.

The tangent line is:
  y - f(a) = f'(a)(x - a)

So the relationship is:
  Derivative → Tangent slope → Tangent line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x³ - 3x² + 2. Find the derivative and determine the slope at x = 2. First, differentiate to get f'(x) = 3x² - 6x = 3x(x - 2). Evaluating at x = 2 gives f'(2) = 3(2)(2 - 2) = 0. Therefore, f'(2) = 0, so the tangent line at x = 2 is horizontal. Next, find the point: f(2) = 8 - 12 + 2 = -2, so the point is (2, -2). Since the slope is zero, the tangent line is y = -2. This example shows how to find the derivative, evaluate it at a point, and construct the tangent line. It illustrates the connection between the derivative and the tangent line, and it demonstrates the use of the derivative to determine where a function has a horizontal tangent. Such points are often candidates for local extrema.

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

The derivative allows us to answer questions such as: how fast is something changing? Is a function increasing or decreasing? Where is a function increasing most rapidly? Where is a function decreasing? Where does a function have a horizontal tangent? Where are possible maximum and minimum points? What is the instantaneous velocity? What is the acceleration? How can we approximate a complicated function? The derivative is therefore a fundamental tool throughout Calculus. It is used in physics, engineering, economics, biology, and many other fields to analyse rates of change and to solve optimisation problems. The derivative is the bridge between static mathematical functions and dynamic real‑world processes. Without the derivative, many of the advances in science and technology that we take for granted would not be possible. Mastering the derivative is essential for success in calculus and its applications.

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

The derivative of a function measures its instantaneous rate of change. For y = f(x), the derivative is written as f'(x). The formal definition is f'(x) = lim(h→0) (f(x + h) - f(x))/h. Geometrically, the derivative represents the slope of the tangent line. In applications, it represents the instantaneous rate of change. For motion, v(t) = s'(t) and a(t) = s''(t). The most important idea to remember is that the derivative tells us how a function is changing at an exact point. It gives the slope of the tangent line and, in real‑world applications, represents an instantaneous rate of change. This concept forms the foundation for the next major Calculus topics: derivative rules, higher‑order derivatives, implicit differentiation, related rates, linear approximation, and applications of derivatives. Mastering the derivative is the key to unlocking the power of calculus.

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