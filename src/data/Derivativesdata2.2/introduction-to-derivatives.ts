const topic = {
  id: "introduction-to-derivatives",
  title: "Introduction to Derivatives",
  summary:
    "Definition of derivatives, instantaneous rate of change, slope of tangent lines, limit definition, and basic derivative rules.",
  details: `
A derivative is one of the most important concepts in Calculus. It describes how a function changes as its input changes.

In simple terms, the derivative tells us the instantaneous rate of change of a function.

For a graph, the derivative represents the slope of the tangent line at a particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A DERIVATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function: y = f(x)

The derivative tells us how much y changes when x changes by a very small amount.

We write the derivative as: f'(x)

Other common notations are: dy/dx or y'

All of these represent the derivative of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE AS A RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine that a car is traveling along a road.

Suppose its position is represented by: s(t) where t is time.

The derivative: s'(t) tells us the car's instantaneous velocity.

Example: s(t) = t²

Then: s'(t) = 2t

At t = 3: s'(3) = 2(3) = 6

So the instantaneous velocity at t = 3 is: 6

This demonstrates an important application of derivatives:

  Derivative = instantaneous rate of change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE AS THE SLOPE OF A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a straight line, the slope is constant:

  m = (y₂ - y₁)/(x₂ - x₁)

But a curved graph does not have one constant slope.

The slope changes depending on where you are on the graph.

The derivative gives us the slope of the curve at a specific point.

Example: f(x) = x²

The graph is curved, so its slope changes as x changes.

The derivative is: f'(x) = 2x

At x = 1: f'(1) = 2

At x = 3: f'(3) = 6

Therefore, the curve is steeper at x = 3 than at x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line is a line that touches a curve at a particular point and has the same instantaneous slope as the curve at that point.

The derivative gives the slope of this tangent line.

If f'(a) = m, then m is the slope of the tangent line at x = a.

The equation of the tangent line can then be written as:

  y - f(a) = f'(a)(x - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DERIVATIVE FROM THE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is formally defined using a limit.

The derivative of f(x) at x = a is:

  f'(a) = lim(h→0) [f(a+h) - f(a)]/h

This is called the definition of the derivative.

The expression: [f(a+h) - f(a)]/h represents the slope between two points on the graph.

As h gets closer to zero, the two points get closer together.

The secant line eventually approaches the tangent line.

Therefore: Derivative = limit of the average rate of change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. AVERAGE RATE OF CHANGE VS. INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two ideas are closely related.

Average Rate of Change
───────────────────────

The average rate of change between two points is:

  [f(b) - f(a)]/(b - a)

It measures the overall change between two points.

Instantaneous Rate of Change
─────────────────────────────

The instantaneous rate of change measures the change at one specific point.

It is found using the derivative: f'(a)

Example: f(x) = x²

Find the average rate of change from x = 1 to x = 3:

  [f(3) - f(1)]/(3 - 1) = (9 - 1)/2 = 4

So the average rate of change is: 4

But the instantaneous rate of change at x = 3 is:

  f'(3) = 2(3) = 6

Therefore: Average rate ≠ instantaneous rate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FINDING A DERIVATIVE USING THE DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's find the derivative of f(x) = x² using the limit definition.

Start with: f'(x) = lim(h→0) [f(x+h) - f(x)]/h

Since f(x) = x², we have: f(x+h) = (x+h)²

Therefore: f'(x) = lim(h→0) [(x+h)² - x²]/h

Expand: = lim(h→0) [x² + 2xh + h² - x²]/h

Simplify: = lim(h→0) [2xh + h²]/h

Factor h: = lim(h→0) (2x + h)

Now take the limit: f'(x) = 2x

Therefore: f'(x) = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE AND GRAPH BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative can tell us a lot about the shape of a graph.

If f'(x) > 0 → the function is generally increasing.

If f'(x) < 0 → the function is generally decreasing.

If f'(x) = 0 → the tangent line is horizontal.

These points can potentially be local maximum or minimum points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE OF INCREASING AND DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

Its derivative is: f'(x) = 2x

When x > 0, we have 2x > 0, so the function is increasing.

When x < 0, we have 2x < 0, so the function is decreasing.

At x = 0, f'(0) = 0. This corresponds to the bottom of the parabola.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DERIVATIVE AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives are heavily used in physics and other sciences.

If position is: s(t), then:

  Velocity: v(t) = s'(t)

  Acceleration: a(t) = v'(t) = s''(t)

So: Position → Velocity → Acceleration

Example: s(t) = t³

Then: v(t) = 3t² and a(t) = 6t

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some basic derivative rules are extremely important.

Constant: f(x) = C → f'(x) = 0

Power Rule: f(x) = xⁿ → f'(x) = nxⁿ⁻¹

Example: f(x) = x⁵ → f'(x) = 5x⁴

Constant Multiple Rule: (c·f(x))' = c·f'(x)

Example: f(x) = 7x³ → f'(x) = 21x²

Sum Rule: (f(x) + g(x))' = f'(x) + g'(x)

Example: f(x) = x³ + x² → f'(x) = 3x² + 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT BASIC DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some derivatives that you should memorize include:

  • d/dx(xⁿ) = nxⁿ⁻¹
  • d/dx(eˣ) = eˣ
  • d/dx(ln(x)) = 1/x
  • d/dx(sin(x)) = cos(x)
  • d/dx(cos(x)) = -sin(x)
  • d/dx(tan(x)) = sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is differentiable at a point if its derivative exists at that point.

In many common situations: Differentiability ⇒ Continuity

If a function is differentiable at x = a, it must also be continuous at x = a.

However: Continuity ≠ ⇒ Differentiability

A function can be continuous but not differentiable.

Example: f(x) = |x|

This function is continuous at x = 0, but it has a sharp corner there.

Therefore, the derivative does not exist at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY DERIVATIVES ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives have many applications beyond simply finding slopes.

They are used to determine:
  • Velocity
  • Acceleration
  • Growth and decay
  • Increasing and decreasing behavior
  • Maximum and minimum values
  • Optimization
  • Related rates
  • Tangent lines
  • Rates of change
  • Motion
  • Economic changes
  • Scientific models

For example, businesses can use derivatives to determine how changing the price of a product affects revenue or profit.

Engineers can use derivatives to study how systems change over time.

Scientists can use derivatives to model rates of change in physical and natural processes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Introduction to Derivatives, remember:

  • Derivative = instantaneous rate of change
  • Derivative = slope of the tangent line
  • Derivative = limit of the difference quotient

The formal definition is:

  f'(x) = lim(h→0) [f(x+h) - f(x)]/h

And the most important basic rule is the Power Rule:

  d/dx(xⁿ) = nxⁿ⁻¹

Easy way to think about derivatives:
  • Function: Where am I?
  • Derivative: How fast am I changing?
  • Second derivative: How is my rate of change itself changing?

So the basic progression is:

  Function → Derivative → Rate of Change → Behavior of the Graph

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Introduction to Derivatives is the foundation of differential calculus and one of the most important concepts in mathematics.

Key concepts covered:

  ✓ What Is a Derivative?
  ✓ Derivative as a Rate of Change
  ✓ Derivative as the Slope of a Curve
  ✓ Tangent Line
  ✓ Derivative from the Limit
  ✓ Average vs. Instantaneous Rate of Change
  ✓ Finding Derivatives Using the Definition
  ✓ Derivative and Graph Behavior
  ✓ Derivative and Motion
  ✓ Common Derivatives
  ✓ Important Basic Derivatives
  ✓ Differentiability
  ✓ Applications of Derivatives
  `,
  examples: [
    "Find derivative of f(x) = x² → f'(x) = 2x",
    "Find velocity: s(t) = t² → v(t) = 2t, at t=3 → 6",
    "Find slope of curve: f(x) = x² at x=1 → 2, at x=3 → 6",
    "Find tangent line: f(a) = a², f'(a) = 2a → y - a² = 2a(x - a)",
    "Use limit definition: f'(x) = lim(h→0) [f(x+h)-f(x)]/h",
    "Find average rate of change: f(x) = x² from 1 to 3 → 4",
    "Find instantaneous rate of change: f(x) = x² at x=3 → 6",
    "Power Rule: d/dx(x⁵) = 5x⁴",
    "Constant Multiple Rule: d/dx(7x³) = 21x²",
    "Sum Rule: d/dx(x³ + x²) = 3x² + 2x",
    "Derivative of eˣ: d/dx(eˣ) = eˣ",
    "Derivative of ln(x): d/dx(ln(x)) = 1/x",
    "Derivative of sin(x): d/dx(sin(x)) = cos(x)",
    "Derivative of cos(x): d/dx(cos(x)) = -sin(x)",
    "Differentiability ⇒ Continuity (but not always the reverse)",
    "f(x) = |x| is continuous but not differentiable at x=0",
  ],
};

export default topic;