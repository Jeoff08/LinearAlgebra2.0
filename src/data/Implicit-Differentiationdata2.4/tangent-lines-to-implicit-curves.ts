const topic = {
  id: "tangent-lines-to-implicit-curves",
  title: "Tangent Lines to Implicit Curves",
  summary:
    "Finding tangent lines to implicitly defined curves using implicit differentiation, slope evaluation, and point-slope form.",
  details: `
A tangent line to an implicit curve is a straight line that touches the curve at a particular point and has the same slope as the curve at that point.

This topic combines three important ideas: Implicit Differentiation + Slope + Point-Slope Form.

The main goal is to find the equation of the Tangent Line to a curve given implicitly by an equation such as F(x, y) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A TANGENT LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an ordinary function: y = f(x), the derivative dy/dx gives the slope of the tangent line.

If the slope at a point (x₁, y₁) is m, the tangent line is: y - y₁ = m(x - x₁)

Since m = dy/dx, we can write: y - y₁ = dy/dx|_(x₁,y₁) · (x - x₁)

For an implicit curve, the same idea applies—but we first have to use implicit differentiation to find dy/dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE GENERAL PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked: "Find the tangent line to an implicit curve at a given point," follow these steps:

Step 1: Write the implicit equation.

Step 2: Differentiate both sides with respect to x.

Step 3: Solve for dy/dx.

Step 4: Substitute the given point (x₁, y₁) into the derivative. This gives the slope m.

Step 5: Use point-slope form: y - y₁ = m(x - x₁)

Step 6: Simplify if necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BASIC EXAMPLE: CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x² + y² = 25

Find the tangent line at: (3, 4)

Step 1: Differentiate both sides: 2x + 2y·dy/dx = 0

Solve for dy/dx: 2y·dy/dx = -2x → dy/dx = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FIND THE SLOPE AT THE GIVEN POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The point is: (3, 4)

So: x = 3 and y = 4

Substitute: dy/dx = -3/4

Therefore: m = -3/4

This is the slope of the tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. USE POINT-SLOPE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The point-slope equation is: y - y₁ = m(x - x₁)

We know: (x₁, y₁) = (3, 4) and m = -3/4

Therefore: y - 4 = -3/4(x - 3)

This is already a correct answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONVERT TO SLOPE-INTERCEPT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Starting with: y - 4 = -3/4(x - 3)

Distribute: y - 4 = -3/4x + 9/4

Add 4: y = -3/4x + 9/4 + 4

Since 4 = 16/4, we get: y = -3/4x + 25/4

Therefore: y = -3/4x + 25/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VISUAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For x² + y² = 25, the curve is a circle centered at the origin.

At (3, 4), the tangent line has slope: -3/4

So the line slopes downward as x increases.

The important relationship is: slope of tangent = dy/dx at the particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY DO WE NEED IMPLICIT DIFFERENTIATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have: x² + y² = 25

The equation doesn't directly give us y = f(x).

We could solve: y = ±√(25 - x²), but this creates two separate functions.

Implicit differentiation allows us to work directly with: x² + y² = 25

and find: dy/dx = -x/y without solving for y.

This becomes even more useful for equations that are difficult to solve explicitly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the tangent line to: x² + xy + y² = 7 at: (1, 2)

First, let's verify that the point lies on the curve:

  1² + (1)(2) + 2² = 1 + 2 + 4 = 7

So (1, 2) is indeed on the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIATE THE EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with: x² + xy + y² = 7

Differentiate: 2x + d/dx(xy) + 2y·dy/dx = 0

For xy, use the Product Rule: d/dx(xy) = x·dy/dx + y

Therefore: 2x + x·dy/dx + y + 2y·dy/dx = 0

Group the derivative terms: x·dy/dx + 2y·dy/dx = -2x - y

Factor: (x + 2y)·dy/dx = -2x - y

Thus: dy/dx = -(2x + y)/(x + 2y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FIND THE SLOPE AT (1, 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Substitute: x = 1 and y = 2

Then: m = -(2(1) + 2)/(1 + 2(2)) = -(2 + 2)/(1 + 4) = -4/5

Therefore: m = -4/5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WRITE THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use: y - y₁ = m(x - x₁)

Substitute: y - 2 = -4/5(x - 1)

Therefore: y - 2 = -4/5(x - 1)

This is the tangent line.

Expanding: y - 2 = -4/5x + 4/5 → y = -4/5x + 14/5

So: y = -4/5x + 14/5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TANGENT LINE FORMULA FOR IMPLICIT CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For F(x, y) = 0, the derivative is: dy/dx = -Fₓ/Fᵧ

where: Fₓ = ∂F/∂x and Fᵧ = ∂F/∂y

Therefore, at a point (x₁, y₁), the tangent slope is: m = -Fₓ(x₁,y₁)/Fᵧ(x₁,y₁)

Then use: y - y₁ = m(x - x₁)

This is a very useful formula for more advanced implicit-curve problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE USING THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x² + 4y² = 16

Find the tangent line at: (2, √3)

First define: F(x, y) = x² + 4y² - 16

Then: Fₓ = 2x and Fᵧ = 8y

Therefore: dy/dx = -2x/(8y) = -x/(4y)

At (2, √3): m = -2/(4√3) = -1/(2√3)

Rationalizing: m = -√3/6

Therefore: y - √3 = -√3/6(x - 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. HORIZONTAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal tangent has: dy/dx = 0

For an implicit curve: dy/dx = -Fₓ/Fᵧ, the derivative is zero when: Fₓ = 0, provided Fᵧ ≠ 0.

Example: x² + y² = 25

We have: dy/dx = -x/y

For a horizontal tangent: -x/y = 0 → x = 0

On the circle: y² = 25 → y = ±5

Thus the horizontal tangent points are: (0, 5) and (0, -5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. VERTICAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical tangent occurs when dy/dx is undefined.

For dy/dx = -Fₓ/Fᵧ, this generally occurs when: Fᵧ = 0, provided Fₓ ≠ 0.

For our circle: dy/dx = -x/y

The derivative is undefined when: y = 0

The circle equation gives: x² = 25 → x = ±5

The vertical tangent points are: (5, 0) and (-5, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. TANGENT LINE VS. NORMAL LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent line has slope: m_t = dy/dx

The normal line is perpendicular to the tangent.

Therefore: m_n = -1/m_t, provided m_t ≠ 0.

Example: If m_t = -3/4, then m_n = 4/3

So the tangent and normal slopes satisfy: m_t · m_n = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. TANGENT LINE USING THE CIRCLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For: x² + y² = 25 at: (3, 4)

We found: m_t = -3/4

Therefore the normal slope is: m_n = 4/3

The tangent line is: y - 4 = -3/4(x - 3)

The normal line is: y - 4 = 4/3(x - 3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting to differentiate y
  Incorrect: d/dx(y²) = 2y
  Correct: 2y·dy/dx

❌ Mistake 2: Forgetting the Product Rule
  For xy, incorrect: y
  Correct: x·dy/dx + y

❌ Mistake 3: Using the wrong point
  If the problem gives (2, 3), then use x₁ = 2, y₁ = 3 in y - y₁ = m(x - x₁)

❌ Mistake 4: Finding the derivative but not the tangent line
  If the problem says "Find the equation of the tangent line," then dy/dx is only an intermediate step. You still need: y - y₁ = m(x - x₁)

❌ Mistake 5: Not checking whether the point is on the curve
  If you're given F(x, y) = 0 and point (a, b), always check: F(a, b) = 0
  If it isn't zero, that point isn't on the curve, so it cannot be the requested tangent point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMPLETE STEP-BY-STEP TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an implicit equation: F(x, y) = 0 at: (x₁, y₁)

use this template:

① Differentiate: d/dx[F(x, y)] = 0

② Solve for the first derivative: dy/dx = expression

③ Evaluate at the point: m = dy/dx|_(x₁,y₁)

④ Use point-slope form: y - y₁ = m(x - x₁)

⑤ Simplify

That's your tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. WHY TANGENT LINES MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent lines are important because they provide a linear approximation of a curve near a particular point.

A complicated curve may be difficult to work with directly, but near a point, we can approximate it with: L(x) = y₁ + m(x - x₁)

where: m = dy/dx

This idea leads directly into: Linear approximation, Differentials, Related rates, Optimization, Newton's Method, Curve analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: First derivative
Formula: dy/dx

Concept: Tangent slope
Formula: m = dy/dx

Concept: Point-slope form
Formula: y - y₁ = m(x - x₁)

Concept: Tangent line
Formula: y - y₁ = dy/dx|_(x₁,y₁) · (x - x₁)

Concept: Normal slope
Formula: m_n = -1/m_t

Concept: Horizontal tangent
Formula: dy/dx = 0

Concept: Vertical tangent
Formula: dy/dx is undefined

Concept: Implicit derivative
Formula: dy/dx = -Fₓ/Fᵧ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Tangent Lines to Implicit Curves, remember:

  • For an implicit curve, dy/dx gives the slope of the curve at a point.
  • Once you know that slope and the coordinates of the point, finding the tangent line becomes a standard point-slope problem.
  • Always check that the point lies on the curve.
  • Horizontal tangent: dy/dx = 0
  • Vertical tangent: dy/dx is undefined

Final Example to Remember:

Given: x² + y² = 25 at: (3, 4)

Differentiate: 2x + 2y·y' = 0

Solve: y' = -x/y

Evaluate at (3, 4): m = -3/4

Use point-slope form: y - 4 = -3/4(x - 3)

Therefore, the tangent line is: y - 4 = -3/4(x - 3)

or: y = -3/4x + 25/4

The entire process can be remembered as:

  Implicit Curve → Differentiate → dy/dx → Evaluate at Point → Slope → Point-Slope Form → Tangent Line

The most important idea: for an implicit curve, dy/dx gives the slope of the curve at a point. Once you know that slope and the coordinates of the point, finding the tangent line becomes a standard point-slope problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent Lines to Implicit Curves combine implicit differentiation with geometric line equations.

Key concepts covered:

  ✓ What Is a Tangent Line?
  ✓ The General Process
  ✓ Basic Example: Circle
  ✓ Find the Slope at a Point
  ✓ Point-Slope Form
  ✓ Slope-Intercept Form
  ✓ Why We Need Implicit Differentiation
  ✓ Another Example
  ✓ Tangent Line Formula
  ✓ Horizontal Tangent Lines
  ✓ Vertical Tangent Lines
  ✓ Tangent vs. Normal Line
  ✓ Common Mistakes
  ✓ Complete Step-by-Step Template
  ✓ Why Tangent Lines Matter
  `,
  examples: [
    "x² + y² = 25 at (3,4) → dy/dx = -x/y → m = -3/4 → y - 4 = -3/4(x - 3)",
    "x² + xy + y² = 7 at (1,2) → dy/dx = -(2x+y)/(x+2y) → m = -4/5 → y - 2 = -4/5(x - 1)",
    "x² + 4y² = 16 at (2,√3) → dy/dx = -x/(4y) → m = -√3/6 → y - √3 = -√3/6(x - 2)",
    "Horizontal tangent: dy/dx = 0 → x = 0 for circle → (0,5), (0,-5)",
    "Vertical tangent: dy/dx undefined → y = 0 for circle → (5,0), (-5,0)",
    "Normal slope: m_n = -1/m_t",
    "Tangent line: y - y₁ = m(x - x₁)",
    "Point-slope form: y - y₁ = m(x - x₁)",
    "Implicit derivative: dy/dx = -Fₓ/Fᵧ",
    "Always check point lies on curve first",
    "Don't forget Product Rule for xy",
    "Don't forget dy/dx when differentiating y terms",
    "m = dy/dx at the point",
    "Circle at (3,4): tangent slope = -3/4",
    "Implicit curve → differentiate → evaluate → point-slope → tangent line",
  ],
};

export default topic;