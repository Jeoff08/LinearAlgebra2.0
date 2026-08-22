const topic = {
  id: "tangent-lines",
  title: "Tangent Lines",
  summary:
    "Definition of tangent lines, slope of tangent lines, equation of tangent lines, horizontal and vertical tangents, and applications.",
  details: `
A tangent line is a straight line that represents the instantaneous direction or slope of a curve at a specific point.

In Calculus, tangent lines are directly connected to derivatives because the derivative gives us the slope of the tangent line.

The key idea is: Derivative = Slope of the Tangent Line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A TANGENT LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function: y = f(x) and we choose a point: (a, f(a))

The tangent line is the line that has the same slope as the curve at that point.

That slope is given by: f'(a)

Therefore: Slope of tangent line = f'(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. TANGENT LINE VS. SECANT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand tangent lines, it helps to compare them with secant lines.

Secant Line:
  A secant line passes through two points on a curve.
  Its slope is: m_secant = [f(b) - f(a)]/(b - a)
  This represents the average rate of change.

Tangent Line:
  A tangent line represents the slope of the curve at one specific point.
  Its slope is: m_tangent = f'(a)
  This represents the instantaneous rate of change.

The relationship is: Secant Line → Tangent Line (as points get closer)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC MEANING OF A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a curve such as: f(x) = x²

At different points, the curve has different slopes.

At one point, it might be relatively flat.

At another point, it might be very steep.

The tangent line shows the exact direction of the curve at that particular point.

So when you see a tangent line, think: "What direction is the curve moving at this exact point?" The derivative provides the answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE SLOPE OF A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the tangent line touches the curve at: (a, f(a))

then its slope is: m = f'(a)

Example: f(x) = x²

Then: f'(x) = 2x

At x = 3, the slope is: f'(3) = 2(3) = 6

Therefore: m = 6

The tangent line at x = 3 has a slope of 6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EQUATION OF A TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we know:
  • The point on the curve
  • The slope at that point

we can find the tangent line using the point-slope formula:

  y - y₁ = m(x - x₁)

For a function f(x), the tangent line at x = a is:

  y - f(a) = f'(a)(x - a)

This is the most important formula for finding tangent lines.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: TANGENT LINE TO f(x) = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the tangent line to: f(x) = x² at x = 2

Step 1: Find the point
  f(2) = 2² = 4, so the point is (2, 4)

Step 2: Find the derivative
  f'(x) = 2x

Step 3: Find the slope
  f'(2) = 2(2) = 4, so m = 4

Step 4: Use the tangent-line formula
  y - 4 = 4(x - 2)
  y - 4 = 4x - 8
  y = 4x - 4

So the tangent line is: y = 4x - 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. TANGENT LINE USING THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a simple procedure you can follow every time.

Step 1: Find the derivative: f'(x)

Step 2: Evaluate the derivative at the given x-value: f'(a)
  This gives the slope.

Step 3: Find the corresponding y-value: f(a)
  So the point is: (a, f(a))

Step 4: Use: y - f(a) = f'(a)(x - a)

Quick Formula: Tangent Line: y - f(a) = f'(a)(x - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. TANGENT LINE EXAMPLE: f(x) = x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the tangent line to: f(x) = x³ at x = 2

Find the point: f(2) = 2³ = 8, so point is (2, 8)

Find the derivative: f'(x) = 3x²

Find the slope: f'(2) = 3(2)² = 12, so m = 12

Find the equation: y - 8 = 12(x - 2)
  y - 8 = 12x - 24
  y = 12x - 16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. HORIZONTAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line is horizontal when its slope is zero.

Therefore: f'(a) = 0 means the tangent line is horizontal.

Example: f(x) = x² has f'(x) = 2x

At x = 0, we get f'(0) = 0

So the tangent line at (0, 0) is horizontal.

Its equation is: y = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POSITIVE-SLOPE TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f'(a) > 0, then the tangent line slopes upward from left to right.

Example: f'(a) = 5 means m = 5. The curve is increasing at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NEGATIVE-SLOPE TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f'(a) < 0, then the tangent line slopes downward from left to right.

Example: f'(a) = -2 means m = -2. The curve is decreasing at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEEPNESS OF THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The absolute value of the derivative tells us how steep the tangent line is.

Example: f'(a) = 2 has slope 2.
While: f'(a) = 10 has slope 10.

The second tangent line is steeper because |10| > |2|.

Likewise: f'(a) = -10 is steeper downward than f'(a) = -2 because |-10| > |-2|.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TANGENT LINES AND LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent line comes directly from the limit definition of the derivative.

The slope of a secant line is: [f(a+h) - f(a)]/h

As h approaches zero: h → 0, the secant line approaches the tangent line.

Therefore: f'(a) = lim(h→0) [f(a+h) - f(a)]/h

This value is the slope of the tangent line.

So: Limit → Derivative → Tangent Slope

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TANGENT LINE AND INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent line also represents the instantaneous rate of change.

If f'(a) = 4, then at x = a:
  • The tangent slope is 4.
  • The instantaneous rate of change is 4.
  • The function is increasing.
  • The graph is rising at that point.

Therefore: Tangent slope = Derivative = Instantaneous rate of change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. TANGENT LINE AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent lines can also be used to understand motion.

Suppose s(t) represents the position of an object.

Then s'(t) represents its velocity.

The derivative gives the slope of the tangent line to the position-time graph.

Therefore: Slope of position graph = Velocity

A steeper tangent means a greater speed in the corresponding direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN A TANGENT LINE DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every point on every graph has a tangent line.

A tangent line may fail to exist at:

Sharp corners:
  Example: f(x) = |x| at x = 0
  The left and right slopes are different.

Cusps:
  The graph forms a sharp pointed turn.

Vertical tangents:
  The tangent line is vertical, giving an undefined slope.

Discontinuities:
  If the function is not continuous at a point, it cannot have an ordinary derivative there.

Thus: No derivative → No ordinary tangent slope

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. TANGENT LINE VS. NORMAL LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The normal line is perpendicular to the tangent line.

If the tangent slope is: m, then the normal slope is: -1/m, provided m ≠ 0.

Example: If m = 4, then m_normal = -1/4.

This can be useful in more advanced Calculus and geometry problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LINEAR APPROXIMATION CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A tangent line can also be used to approximate a function near a particular point.

If f(x) is complicated, its tangent line near x = a can provide a simpler approximation:

  L(x) = f(a) + f'(a)(x - a)

This is called the linearization of f(x) at x = a.

The idea is that a curve can look almost like a straight line when viewed very close to a point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Tangent Lines, remember:

  • Tangent Line: A line representing the direction of a curve at a specific point.
  • Tangent Line = Instantaneous direction of a curve
  • Tangent Slope: m = f'(a)
  • Tangent Line Equation: y - f(a) = f'(a)(x - a)
  • Derivative: f'(a) = lim(h→0) [f(a+h) - f(a)]/h
  • Positive slope: f'(a) > 0 → increasing
  • Negative slope: f'(a) < 0 → decreasing
  • Zero slope: f'(a) = 0 → horizontal tangent

Easy way to remember: When asked to find the tangent line, remember these four steps:

  1. f'(x) → 2. f'(a) → 3. (a, f(a)) → 4. y - f(a) = f'(a)(x - a)

In simple words: Find the derivative → get the slope → find the point → write the line.

And the most important relationship is: Derivative = Tangent Slope = Instantaneous Rate of Change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent Lines are fundamental concepts that connect derivatives to geometry and real-world applications.

Key concepts covered:

  ✓ What Is a Tangent Line?
  ✓ Tangent Line vs. Secant Line
  ✓ Geometric Meaning
  ✓ Slope of a Tangent Line
  ✓ Equation of a Tangent Line
  ✓ Tangent Line to f(x) = x²
  ✓ Step-by-Step Procedure
  ✓ Tangent Line to f(x) = x³
  ✓ Horizontal Tangent Lines
  ✓ Positive-Slope Tangent Lines
  ✓ Negative-Slope Tangent Lines
  ✓ Steepness
  ✓ Limits and Tangent Lines
  ✓ Instantaneous Rate of Change
  ✓ Motion and Tangent Lines
  ✓ When Tangent Lines Don't Exist
  ✓ Normal Line
  ✓ Linear Approximation
  `,
  examples: [
    "Find tangent line of f(x) = x² at x = 2 → y = 4x - 4",
    "Find tangent line of f(x) = x³ at x = 2 → y = 12x - 16",
    "Horizontal tangent: f'(a) = 0 → slope = 0",
    "Positive slope: f'(a) > 0 → increasing",
    "Negative slope: f'(a) < 0 → decreasing",
    "Steepness: |f'(a)| tells how steep",
    "Tangent line formula: y - f(a) = f'(a)(x - a)",
    "Secant slope: [f(b)-f(a)]/(b-a)",
    "Tangent slope: lim(h→0) [f(a+h)-f(a)]/h",
    "Derivative = Tangent Slope = Instantaneous Rate of Change",
    "No tangent at sharp corners (e.g., |x| at x=0)",
    "No tangent at vertical tangents",
    "Normal line: perpendicular to tangent line, slope = -1/m",
    "Linearization: L(x) = f(a) + f'(a)(x - a)",
    "Step 1: f'(x), Step 2: f'(a), Step 3: (a,f(a)), Step 4: tangent equation",
  ],
};

export default topic;