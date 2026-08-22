const topic = {
  id: "derivative-as-a-limit",
  title: "Derivative as a Limit",
  summary:
    "Formal definition of the derivative, difference quotient, secant and tangent lines, and evaluating derivatives using the limit definition.",
  details: `
The derivative as a limit is the formal definition of a derivative. It explains how we find the instantaneous rate of change of a function at a specific point.

The main idea is to take the average rate of change between two points and move those points closer and closer together until they become essentially one point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function: y = f(x)

and we want to determine the slope of the curve at: x = a

For a straight line, finding the slope is easy:

  m = (y₂ - y₁)/(x₂ - x₁)

But for a curve, the slope changes from point to point.

So we initially choose two points:

  P(a, f(a)) and Q(a+h, f(a+h))

The slope between these two points is called the secant slope.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE DIFFERENCE QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the two points: (a, f(a)) and (a+h, f(a+h))

the slope of the secant line is:

  m = [f(a+h) - f(a)]/[(a+h) - a]

Simplify the denominator: (a+h) - a = h

Therefore: m = [f(a+h) - f(a)]/h

This expression is called the difference quotient.

It represents the average rate of change between two nearby points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FROM SECANT TO TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The problem is that we want the slope at one point, not between two different points.

So we make h smaller and smaller: h → 0

As h approaches zero, the second point (a+h, f(a+h)) gets closer to (a, f(a)).

The secant line gets closer and closer to the tangent line.

Therefore, the derivative is defined as the limit of the difference quotient:

  f'(a) = lim(h→0) [f(a+h) - f(a)]/h

This is the derivative as a limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY CAN'T WE SIMPLY SUBSTITUTE h = 0?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important question.

If we directly substitute h = 0 into: [f(a+h) - f(a)]/h

we get: [f(a) - f(a)]/0 = 0/0

This is an indeterminate form.

We don't actually substitute h = 0 into the difference quotient.

Instead, we ask: What value does the expression approach as h gets closer and closer to zero?

That's why we use a limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: DERIVATIVE OF f(x) = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's find the derivative using the limit definition.

Given: f(x) = x²

The definition is: f'(x) = lim(h→0) [f(x+h) - f(x)]/h

Step 1: Find f(x+h)
  Replace x with x+h: f(x+h) = (x+h)²

Therefore: f'(x) = lim(h→0) [(x+h)² - x²]/h

Step 2: Expand
  (x+h)² = x² + 2xh + h²

So: f'(x) = lim(h→0) [x² + 2xh + h² - x²]/h

Cancel x²: f'(x) = lim(h→0) [2xh + h²]/h

Step 3: Factor
  Factor h from the numerator: f'(x) = lim(h→0) [h(2x + h)]/h

Cancel h: f'(x) = lim(h→0) (2x + h)

Step 4: Evaluate the Limit
  Now we can let h → 0

Therefore: f'(x) = 2x + 0 = 2x

So: f'(x) = 2x

This is exactly the derivative we would get using the Power Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE AT A SPECIFIC POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit definition can also be used to find the derivative at a particular point.

Suppose: f(x) = x² and we want the derivative at x = 3

We use: f'(3) = lim(h→0) [f(3+h) - f(3)]/h

Calculate: f(3+h) = (3+h)² and f(3) = 9

Therefore: f'(3) = lim(h→0) [(3+h)² - 9]/h

Expand: = lim(h→0) [9 + 6h + h² - 9]/h

Simplify: = lim(h→0) [6h + h²]/h

Cancel: = lim(h→0) (6 + h)

Therefore: f'(3) = 6

So the slope of the tangent line at x = 3 is: 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SECANT SLOPE VS. TANGENT SLOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Secant Line:
  A secant line passes through two points on a curve.
  Its slope is: [f(a+h) - f(a)]/h
  It represents the average rate of change.

Tangent Line:
  A tangent line represents the slope of the curve at one point.
  Its slope is: f'(a) = lim(h→0) [f(a+h) - f(a)]/h
  It represents the instantaneous rate of change.

Therefore: Secant slope → Tangent slope (as h → 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think about a curved road.

Take two points on the road: P and Q

A straight line connecting them represents a secant line.

Now move Q closer and closer to P.

As Q → P, the secant line approaches the tangent line at P.

The derivative tells us the slope of that final tangent line.

So: Derivative = limit of secant slopes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PHYSICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative as a limit is also extremely useful for understanding motion.

Suppose s(t) represents the position of an object.

The average velocity over a time interval is: [s(t+h) - s(t)]/h

This tells us how far the object moved divided by how much time passed.

To find the instantaneous velocity, make the time interval smaller and smaller: h → 0

Therefore: v(t) = lim(h→0) [s(t+h) - s(t)]/h

This is exactly the derivative: v(t) = s'(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ALTERNATIVE DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is another common form of the derivative definition:

  f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)

This is equivalent to:

  f'(a) = lim(h→0) [f(a+h) - f(a)]/h

The two formulas simply use different variables.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN DOES THE DERIVATIVE EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A derivative exists at x = a if the limit:

  lim(h→0) [f(a+h) - f(a)]/h

exists as a finite number.

If the limit does not exist, then: f'(a) does not exist.

This can happen at:
  • Sharp corners
  • Cusps
  • Vertical tangents
  • Certain discontinuities

Example: f(x) = |x|

At x = 0, the graph has a sharp corner.

The slope from the left is: -1

while the slope from the right is: 1

Since -1 ≠ 1, the derivative at x = 0 does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CONNECTION TO CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important relationship between derivatives and continuity:

  Differentiability ⇒ Continuity

If a function has a derivative at a point, it must be continuous there.

However: Continuity ≠ ⇒ Differentiability

Example: f(x) = |x| is continuous at x = 0, but it is not differentiable there because of its sharp corner.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The concept develops in this sequence:

  Two Points → Secant Line → Difference Quotient → Limit → Tangent Line → Derivative

In other words:
  1. Choose two points.
  2. Find the slope between them.
  3. Move the points closer together.
  4. Take the limit.
  5. The secant slope approaches the tangent slope.
  6. That tangent slope is the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivative as a Limit, remember:

  • The difference quotient: [f(a+h) - f(a)]/h represents the average rate of change.
  • The derivative is the limit of the difference quotient as h → 0.
  • The secant line connects two points; the tangent line touches at one point.
  • The derivative exists when the limit is finite.
  • Differentiability implies continuity, but not vice versa.

The key formula is:

  f'(a) = lim(h→0) [f(a+h) - f(a)]/h

And the alternative form is:

  f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)

Easy way to remember: The derivative is the limit of the average rate of change as the change in x approaches zero. Or even simpler: Secant → Tangent = Derivative (as points get closer).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivative as a Limit is the formal foundation of differential calculus and the basis for all derivative rules.

Key concepts covered:

  ✓ The Basic Idea
  ✓ The Difference Quotient
  ✓ From Secant to Tangent
  ✓ Why We Can't Substitute h = 0
  ✓ Derivative of f(x) = x²
  ✓ Derivative at a Specific Point
  ✓ Secant vs. Tangent Slope
  ✓ Geometric Interpretation
  ✓ Physical Interpretation
  ✓ Alternative Definition
  ✓ When the Derivative Exists
  ✓ Connection to Continuity
  ✓ The Big Picture
  `,
  examples: [
    "Find derivative of f(x) = x² using limit definition → f'(x) = 2x",
    "Find derivative at x=3: f'(3) = lim(h→0) [(3+h)²-9]/h → 6",
    "Difference quotient: [f(a+h) - f(a)]/h represents average rate of change",
    "Secant line connects two points; tangent line touches at one point",
    "Derivative exists when limit is finite",
    "f(x) = |x| is not differentiable at x=0 (sharp corner)",
    "Differentiability ⇒ Continuity (but not always the reverse)",
    "Alternative definition: f'(a) = lim(x→a) [f(x)-f(a)]/(x-a)",
    "Physical interpretation: velocity = derivative of position",
    "Geometric interpretation: derivative = slope of tangent line",
    "Two Points → Secant → Difference Quotient → Limit → Tangent → Derivative",
    "Cannot substitute h=0 directly because it gives 0/0",
    "Secant slope approaches tangent slope as h → 0",
  ],
};

export default topic;