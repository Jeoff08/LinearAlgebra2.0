// filename: the-tangent-line.ts

const topic = {
  id: "the-tangent-line",
  title: "The Tangent Line",
  summary:
    "A straight line that represents the direction or slope of a curve at a particular point, with slope given by the derivative f'(a), and equation y - f(a) = f'(a)(x - a).",
  details: `
The tangent line is one of the most important concepts in Calculus. A tangent line is a straight line that represents the direction or slope of a curve at a particular point.

Before Calculus, you may have learned how to find the slope of a straight line using two points. However, finding the slope of a curve at exactly one point is more challenging because a curve constantly changes direction.

Calculus solves this problem using the concept of a limit.

The tangent line is closely connected to:
  • Limits
  • Secant lines
  • Derivatives
  • Instantaneous rate of change
  • Linear approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A TANGENT LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line is a straight line that touches a curve at a specific point and has the same instantaneous direction as the curve at that point.

Suppose a curve is represented by:
  y = f(x)

and we want the tangent line at:
  x = a

The point on the curve is:
  (a, f(a))

The slope of the tangent line is:
  f'(a)

Therefore, the equation of the tangent line is:
  y - f(a) = f'(a)(x - a)

This is the point-slope form of the tangent line equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TANGENT LINE VS. SECANT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand a tangent line, we first need to understand a secant line.

A secant line passes through two points on a curve.

Suppose we have:
  P(a, f(a))
and:
  Q(a + h, f(a + h))

The slope of the secant line is:
  m_secant = (f(a + h) - f(a))/h

This gives us the average rate of change between two points.

From Secant Line to Tangent Line:
  Now imagine moving point Q closer and closer to point P.

  As h → 0, the secant line approaches the tangent line.

  Therefore, the slope of the tangent line is:
    m_tangent = lim(h→0) (f(a + h) - f(a))/h

  This formula is the foundation of the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DEFINITION OF THE TANGENT LINE SLOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope of the tangent line to y = f(x) at x = a is:
  f'(a) = lim(h→0) (f(a + h) - f(a))/h

provided the limit exists.

This value represents the instantaneous rate of change of the function at that exact point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: FINDING THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x²

Find the tangent line at x = 2.

Step 1: Find the Point
  Substitute x = 2 into the function:
    f(2) = 2² = 4

  Therefore, the point is:
    (2, 4)

Step 2: Find the Slope Using the Limit Definition
  The derivative definition is:
    f'(a) = lim(h→0) (f(a + h) - f(a))/h

  For f(x) = x² and a = 2, we have:
    f(2 + h) = (2 + h)²

  Expand:
    (2 + h)² = 4 + 4h + h²

  Now:
    f(2) = 4

  Substitute into the formula:
    f'(2) = lim(h→0) ((4 + 4h + h²) - 4)/h

  Simplify:
    = lim(h→0) (4h + h²)/h

  Factor:
    = lim(h→0) h(4 + h)/h

  Cancel h:
    = lim(h→0) (4 + h)

  Substitute:
    4

  Therefore, the slope of the tangent line is:
    m = 4

Step 3: Use the Point-Slope Formula
  The point-slope formula is:
    y - y₁ = m(x - x₁)

  We know:
    m = 4
  and:
    (x₁, y₁) = (2, 4)

  Substitute:
    y - 4 = 4(x - 2)

  Simplify:
    y - 4 = 4x - 8
    y = 4x - 4

  Therefore, the equation of the tangent line is:
    y = 4x - 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING THE TANGENT LINE GRAPHICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the curve y = x².

At x = 2, the point on the curve is (2, 4).

The tangent line:
  y = 4x - 4

touches the curve at that point and has the same instantaneous direction as the curve.

The tangent line provides a straight-line approximation of the curve near x = 2.

Near the point of tangency, the curve and the tangent line are very close to each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE TANGENT LINE CAN CROSS THE CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common misunderstanding is that a tangent line can only touch a curve at one point and never cross it.

This is not always true.

A tangent line can cross the curve.

For example, consider f(x) = x³.

At x = 0, the derivative is:
  f'(x) = 3x²

Therefore:
  f'(0) = 0

The tangent line is:
  y = 0

The graph of y = x³ crosses the x-axis at (0, 0).

The tangent line still represents the instantaneous direction of the curve at that point.

Therefore:
  A tangent line is defined by the local direction of a curve, not simply 
  by whether it crosses the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. HORIZONTAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line is horizontal when its slope is zero.

Therefore:
  f'(a) = 0

The equation of a horizontal tangent line is:
  y = f(a)

Example:
  Consider f(x) = x².

  The derivative is:
    f'(x) = 2x

  At x = 0, we have:
    f'(0) = 0

  Therefore, the tangent line is horizontal.

  The point is:
    (0, 0)

  Thus:
    y = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VERTICAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical tangent line occurs when the slope becomes undefined or approaches infinity.

Example:
  Consider f(x) = ∛x.

  Its derivative is:
    f'(x) = 1/(3x^(2/3))

  At x = 0, the derivative is undefined.

  The graph has a vertical tangent line at x = 0.

  This means the curve is moving almost vertically at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TANGENT LINES AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a function represents the slope of its tangent line.

If:
  y = f(x)

then:
  f'(x)

represents the slope of the tangent line at any value of x.

For example:
  f(x) = x²

The derivative is:
  f'(x) = 2x

This means:
  At x = 1, slope = 2
  At x = 2, slope = 4
  At x = 3, slope = 6

The derivative gives us a formula for the slope at every point on the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL FORMULA FOR A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the tangent line of y = f(x) at x = a, use the following steps.

Step 1: Find the Point
  (a, f(a))

Step 2: Find the Derivative
  f'(x)

Step 3: Find the Slope
  Substitute a: m = f'(a)

Step 4: Use the Point-Slope Formula
  y - f(a) = f'(a)(x - a)

Step 5: Simplify
  Write the equation in your desired form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the tangent line to f(x) = x³ - 2x + 1 at x = 1.

Step 1: Find the Point
  f(1) = 1³ - 2(1) + 1
  = 1 - 2 + 1
  = 0

  The point is:
    (1, 0)

Step 2: Find the Derivative
  f(x) = x³ - 2x + 1

  Differentiate:
    f'(x) = 3x² - 2

Step 3: Find the Slope
  f'(1) = 3(1)² - 2
  = 3 - 2
  = 1

Step 4: Use Point-Slope Form
  y - y₁ = m(x - x₁)

  Substitute:
    y - 0 = 1(x - 1)

  Therefore:
    y = x - 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. TANGENT LINE AND INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope of a tangent line represents the instantaneous rate of change.

For example, suppose s(t) represents the position of a car.

The derivative s'(t) represents the velocity of the car at an exact moment.

Similarly:
  • Position → Velocity
  • Distance → Speed
  • Population → Growth rate
  • Revenue → Rate of revenue change

The tangent line allows us to analyze how something changes at an exact moment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TANGENT LINE AS A LINEAR APPROXIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Near the point of tangency, the tangent line can approximate the function.

The tangent line approximation is:
  L(x) = f(a) + f'(a)(x - a)

This is called the linearization of the function.

For values of x close to a:
  f(x) ≈ L(x)

Example:
  For f(x) = x² at a = 2, we found:
    f(2) = 4
  and:
    f'(2) = 4

  Therefore:
    L(x) = 4 + 4(x - 2)

  Simplify:
    L(x) = 4x - 4

  This can be used to approximate values near x = 2.

  For example:
    f(2.1) = 2.1² = 4.41

  Using the tangent line:
    L(2.1) = 4(2.1) - 4
    = 8.4 - 4
    = 4.4

  The approximation is very close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TANGENT LINE VS. NORMAL LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A normal line is a line perpendicular to the tangent line.

If the tangent slope is m, then the normal slope is -1/m, provided m ≠ 0.

Example:
  If the tangent slope is m = 4, then the normal slope is:
    m_normal = -1/4

The tangent and normal lines form a right angle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY THE TANGENT LINE IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent line is one of the foundations of differential Calculus.

It helps us:
  • Find instantaneous rates of change
  • Understand the derivative
  • Approximate functions
  • Analyze motion
  • Find maximum and minimum points
  • Study curves
  • Solve real-world problems involving changing quantities

The concept of the tangent line leads directly to the definition of the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                Formula
  ───────────────────────────────────────────────────────────────────────────
  Tangent Slope          f'(a) = lim(h→0) (f(a+h) - f(a))/h
  Tangent Line           y - f(a) = f'(a)(x - a)
  Horizontal Tangent     f'(a) = 0 → y = f(a)
  Vertical Tangent       f'(a) is undefined
  Linear Approximation   L(x) = f(a) + f'(a)(x - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line is a straight line that represents the instantaneous direction of a curve at a particular point.

The slope of the tangent line is given by the derivative:
  f'(a) = lim(h→0) (f(a + h) - f(a))/h

The equation of the tangent line at (a, f(a)) is:
  y - f(a) = f'(a)(x - a)

The most important idea to remember is:

  The tangent line tells us the instantaneous direction and rate of change 
  of a curve at a specific point.

The tangent line is fundamental to Calculus because it leads directly to the study of derivatives, instantaneous rates of change, optimization, and linear approximation.
  `,
  examples: [
    "f(x) = x² at x = 2 → point (2,4), slope 4, tangent y = 4x - 4",
    "f(x) = x³ - 2x + 1 at x = 1 → point (1,0), slope 1, tangent y = x - 1",
    "Horizontal tangent: f'(a) = 0 → y = f(a)",
    "Vertical tangent: f'(a) is undefined",
    "Secant slope: m = (f(a+h) - f(a))/h",
    "Tangent slope: m = lim(h→0) (f(a+h) - f(a))/h",
    "Linear approximation: L(x) = f(a) + f'(a)(x - a)",
  ],
};

export default topic;