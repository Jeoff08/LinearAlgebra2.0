const topic = {
  id: "normal-lines",
  title: "Normal Lines",
  summary:
    "Definition of normal lines, relationship with tangent lines, perpendicular slopes, formulas, and special cases.",
  details: `
A normal line is a line that is perpendicular to the tangent line of a curve at a particular point.

If the tangent line describes the direction of the curve, the normal line describes the direction that is 90° to the tangent.

The key relationship is: Normal Line ⊥ Tangent Line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A NORMAL LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function: y = f(x) and a point: (a, f(a))

At that point, there are two important lines:

Tangent line:
  Touches the curve and has slope: m_t = f'(a)

Normal line:
  Is perpendicular to the tangent line.
  Its slope is: m_n = -1/f'(a), provided that f'(a) ≠ 0

Therefore: m_t · m_n = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES PERPENDICULAR MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two non-vertical lines are perpendicular when the product of their slopes is: -1

Example: If the tangent slope is: m_t = 2

then the normal slope is: m_n = -1/2

Check: 2(-1/2) = -1

Therefore, the lines are perpendicular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TANGENT VS. NORMAL LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────┬─────────────────────────────────────┐
│ Tangent Line                │ Normal Line                        │
├─────────────────────────────┼─────────────────────────────────────┤
│ Follows the direction of    │ Perpendicular to the curve's       │
│ the curve                   │ tangent                            │
├─────────────────────────────┼─────────────────────────────────────┤
│ Slope is f'(a)              │ Slope is -1/f'(a)                  │
├─────────────────────────────┼─────────────────────────────────────┤
│ Describes instantaneous     │ Describes perpendicular direction  │
│ direction                   │                                    │
├─────────────────────────────┼─────────────────────────────────────┤
│ Touches the curve           │ Passes through the same point      │
└─────────────────────────────┴─────────────────────────────────────┘

The relationship is: m_tangent · m_normal = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FORMULA FOR THE NORMAL LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the curve is: y = f(x) and the point is: (a, f(a))

then:
  • Tangent slope: m_t = f'(a)
  • Normal slope: m_n = -1/f'(a)

Then use the point-slope equation: y - y₁ = m(x - x₁)

Therefore, the normal line is:

  y - f(a) = -1/f'(a) · (x - a)

This is the main formula to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: NORMAL LINE TO f(x) = x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the normal line to: f(x) = x² at x = 2

Step 1: Find the point
  f(2) = 2² = 4, so the point is (2, 4)

Step 2: Find the derivative
  f'(x) = 2x

Step 3: Find the tangent slope
  f'(2) = 2(2) = 4, so m_t = 4

Step 4: Find the normal slope
  Take the negative reciprocal: m_n = -1/4

Step 5: Use the point-slope formula
  y - 4 = -1/4(x - 2)

This is the equation of the normal line.

We can also expand it:
  y - 4 = -1/4x + 1/2
  y = -1/4x + 9/2

Therefore: y = -1/4x + 9/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DO WE USE THE NEGATIVE RECIPROCAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the tangent slope is: m_t = 5

The normal line must be perpendicular to it.

Therefore: m_t · m_n = -1

Substitute: 5m_n = -1

Divide by 5: m_n = -1/5

So: m_n = -1/m_t

This is why we use the negative reciprocal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: TANGENT SLOPE IS NEGATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: m_t = -3

Then: m_n = -1/(-3) = 1/3

Check: (-3)(1/3) = -1

So the lines are perpendicular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FINDING THE NORMAL LINE STEP-BY-STEP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a normal-line problem, use this procedure:

Step 1: Find the derivative: f'(x)

Step 2: Evaluate at the given point: f'(a)
  This gives the tangent slope.

Step 3: Find the negative reciprocal: m_n = -1/f'(a)

Step 4: Find the point: (a, f(a))

Step 5: Use point-slope form: y - f(a) = m_n(x - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: f(x) = x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the normal line to: f(x) = x³ at x = 1

Find the point: f(1) = 1, so (1, 1)

Find the derivative: f'(x) = 3x²

Find tangent slope: f'(1) = 3, so m_t = 3

Find normal slope: m_n = -1/3

Equation: y - 1 = -1/3(x - 1)

Therefore: y - 1 = -1/3(x - 1) or y = -1/3x + 4/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HORIZONTAL TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important special case.

Suppose: f'(a) = 0

Then the tangent line is horizontal.

A horizontal line has slope: 0

The normal line must therefore be vertical.

A vertical line has an undefined slope.

Example: f(x) = x²

At x = 0, we have f'(0) = 0

So the tangent line is: y = 0

The normal line is: x = 0

Notice that we cannot use -1/f'(a) because that would require -1/0, which is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VERTICAL TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The opposite situation can also occur.

If the tangent line is vertical, its slope is undefined.

In this case, the normal line is horizontal.

So:
  • Horizontal tangent → Normal is vertical
  • Vertical tangent → Normal is horizontal

These are important special cases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent line tells us the direction the curve is moving at a point.

The normal line points in a direction that is exactly 90° from the tangent.

Therefore: Tangent direction ⊥ Normal direction

You can visualize it as two lines crossing at a right angle: 90°

The tangent and normal lines always intersect at the point on the curve where they are being constructed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. NORMAL LINES AND THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is still the main tool.

First: f'(a) = m_t

Then: m_n = -1/f'(a)

Therefore: Derivative → Tangent Slope → Normal Slope

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. NORMAL LINE AND GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Normal lines are useful in many areas of mathematics and science.

They are used in:
  • Geometry
  • Calculus
  • Physics
  • Optics
  • Computer graphics
  • Surface modeling
  • Engineering
  • 3D graphics

In computer graphics, for example, surface normals are used to determine how light interacts with an object.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. TANGENT AND NORMAL EXAMPLE TOGETHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² at x = 1

Point: f(1) = 1, so (1, 1)

Derivative: f'(x) = 2x

Tangent slope: f'(1) = 2, so m_t = 2

Tangent line: y - 1 = 2(x - 1) → y = 2x - 1

Normal slope: m_n = -1/2

Normal line: y - 1 = -1/2(x - 1) → y = -1/2x + 3/2

The two slopes satisfy: 2(-1/2) = -1

Therefore, the tangent and normal lines are perpendicular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the same slope
  If m_t = 4, don't use m_n = 4.
  The normal slope is: -1/4.

Mistake 2: Forgetting the negative sign
  If m_t = -2, then m_n = 1/2, not -1/2.
  Remember: Normal slope = negative reciprocal.

Mistake 3: Forgetting the point
  Knowing the normal slope isn't enough.
  You also need the point: (a, f(a)) to construct the line.

Mistake 4: Dividing by zero
  If f'(a) = 0, the normal slope is undefined.
  Instead, recognize that the normal line is vertical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Normal Lines, remember:

  • Tangent slope: m_t = f'(a)
  • Normal slope: m_n = -1/f'(a)
  • Tangent line: y - f(a) = f'(a)(x - a)
  • Normal line: y - f(a) = -1/f'(a)(x - a)
  • Perpendicular slopes: m_t · m_n = -1

Easy way to remember: When finding a normal line, think:

  Derivative → Tangent Slope → Negative Reciprocal → Normal Line

The most important phrase is: The normal line is perpendicular to the tangent line, so its slope is the negative reciprocal of the tangent slope.

Therefore:
  Tangent: m = f'(a)
  Normal: m = -1/f'(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Normal Lines are important geometric concepts that complement tangent lines and have applications in many fields.

Key concepts covered:

  ✓ What Is a Normal Line?
  ✓ Perpendicular Slopes
  ✓ Tangent vs. Normal Line
  ✓ Formula for the Normal Line
  ✓ Normal Line to f(x) = x²
  ✓ Negative Reciprocal
  ✓ Step-by-Step Procedure
  ✓ Normal Line to f(x) = x³
  ✓ Horizontal Tangent (Normal is Vertical)
  ✓ Vertical Tangent (Normal is Horizontal)
  ✓ Geometric Interpretation
  ✓ Applications of Normal Lines
  ✓ Tangent and Normal Together
  ✓ Common Mistakes
  `,
  examples: [
    "Find normal line of f(x) = x² at x = 2 → y = -1/4x + 9/2",
    "Find normal line of f(x) = x³ at x = 1 → y = -1/3x + 4/3",
    "Tangent slope: m_t = f'(a)",
    "Normal slope: m_n = -1/f'(a)",
    "Tangent slope 2 → normal slope -1/2",
    "Tangent slope -3 → normal slope 1/3",
    "Perpendicular slopes: m_t · m_n = -1",
    "Horizontal tangent (m_t = 0) → normal is vertical",
    "Vertical tangent → normal is horizontal",
    "Point-slope form: y - f(a) = m(x - a)",
    "Tangent line: y - f(a) = f'(a)(x - a)",
    "Normal line: y - f(a) = -1/f'(a)(x - a)",
    "For f(x) = x² at x=1: tangent y=2x-1, normal y=-1/2x+3/2",
    "Check: 2(-1/2) = -1, so perpendicular",
    "Derivative → Tangent Slope → Normal Slope",
  ],
};

export default topic;