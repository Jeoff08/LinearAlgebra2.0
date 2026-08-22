const topic = {
  id: "related-applications-of-implicit-differentiation",
  title: "Related Applications of Implicit Differentiation",
  summary:
    "Slopes, tangent lines, related rates, horizontal and vertical tangents, concavity, and real-world applications.",
  details: `
Implicit differentiation is not only a technique for finding derivatives of equations like x² + y² = 25. It is also useful in many real-world and mathematical applications where two variables are related but one variable is not explicitly written as a function of the other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE APPLICATIONS OF IMPLICIT DIFFERENTIATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An application of implicit differentiation occurs when we have a relationship between variables x and y, but the equation is not conveniently written as y = f(x).

Instead, we may have something like x² + y² = 25.

Here, x and y are related. We can use implicit differentiation to determine:
  • the slope of a curve,
  • tangent lines,
  • rates of change,
  • velocity,
  • related rates,
  • optimization conditions,
  • curvature and concavity,
  • behavior of curves defined by equations.

The major idea is: When x and y are related by an equation, implicit differentiation allows us to determine how y changes as x changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FINDING THE SLOPE OF AN IMPLICIT CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common applications is finding the slope dy/dx at a particular point.

Consider the circle: x² + y² = 25

Differentiate both sides with respect to x: 2x + 2y·dy/dx = 0

Solve for dy/dx: 2y·dy/dx = -2x → dy/dx = -x/y

Suppose we want the slope at (3, 4):

Substitute: dy/dx = -3/4

Therefore, m = -3/4

Interpretation: At the point (3, 4), the circle has a slope of -3/4. This tells us that as x increases slightly, y decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can be used to find the equation of a tangent line to an implicitly defined curve.

Using x² + y² = 25, we already found dy/dx = -x/y.

At (3, 4): m = -3/4

Use the point-slope equation: y - y₁ = m(x - x₁)

Substitute: y - 4 = -3/4(x - 3)

Therefore, the tangent line is y - 4 = -3/4(x - 3).

or, after simplifying: 3x + 4y = 25

Why is this useful? Many curves cannot easily be solved for y. Implicit differentiation lets us find their tangent lines without explicitly solving for y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another major application is related rates.

Related-rate problems involve quantities that change with time.

Example: Suppose the radius r of a circular balloon is changing. Its area is A = πr².

Suppose dr/dt = 2 cm/s. We want to find how quickly the area is increasing when r = 5 cm.

Differentiate with respect to t: dA/dt = 2πr·dr/dt

Substitute: dA/dt = 2π(5)(2) = 20π cm²/s

So the area is increasing at 20π cm²/s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRY APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is especially useful in geometry.

Consider a circle: x² + y² = r²

Differentiate: 2x + 2y·dy/dx = 0

Thus: dy/dx = -x/y

This tells us the slope of the circle at any point where y ≠ 0.

This can be used to study: circles, ellipses, hyperbolas, curves formed by intersections, geometric constraints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ELLIPSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the ellipse: x²/a² + y²/b² = 1

Differentiate: 2x/a² + 2y/b²·dy/dx = 0

Solve for the derivative: 2y/b²·dy/dx = -2x/a²

Therefore: dy/dx = -b²x/(a²y)

This allows us to determine the slope at different points on the ellipse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can also appear in optimization problems.

Suppose two variables satisfy a constraint: x² + y² = 100

This describes points located on a circle of radius 10.

Suppose we want to determine how y changes when x changes while staying on the circle.

Implicit differentiation gives: 2x + 2y·dy/dx = 0

Therefore: dy/dx = -x/y

This relationship can help us analyze maximum and minimum values under constraints.

In more advanced calculus, this idea connects to constrained optimization and eventually to methods such as Lagrange multipliers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. PHYSICS: POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit equations can describe physical relationships.

Suppose the position of an object is constrained by x² + y² = 100, where x and y change with time.

Differentiate with respect to t: 2x·dx/dt + 2y·dy/dt = 0

Divide by 2: x·dx/dt + y·dy/dt = 0

Using velocity notation: x·vₓ + y·vᵧ = 0

This describes how the horizontal and vertical velocities must be related while the object remains on the circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SECOND DERIVATIVE AND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can also be used to find the second derivative: d²y/dx².

Example: x² + y² = 25

First derivative: dy/dx = -x/y

Differentiate again: d²y/dx² = -d/dx(x/y)

Using the quotient rule: d²y/dx² = -(y - x·dy/dx)/y²

Since dy/dx = -x/y, we get: d²y/dx² = -(y + x²/y)/y²

Simplifying: d²y/dx² = -(x² + y²)/y³

Because x² + y² = 25, we can also write: d²y/dx² = -25/y³

This helps us determine the concavity of the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FINDING HORIZONTAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal tangent occurs when dy/dx = 0.

Consider: x² + y² = 25

We know: dy/dx = -x/y

For the derivative to equal zero: -x/y = 0 → x = 0

Using the original equation: 0² + y² = 25 → y = ±5

So the horizontal tangent points are: (0, 5) and (0, -5).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING VERTICAL TANGENT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical tangent occurs when the slope becomes undefined.

For dy/dx = -x/y, the derivative is undefined when: y = 0

Substitute into the original equation: x² + 0² = 25 → x = ±5

Therefore, the vertical tangent points are: (5, 0) and (-5, 0).

This is another important application of implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can be used in economics when two quantities are connected through an equation.

For example, suppose supply and demand satisfy: D(P) + S(P) = 0, or a more complicated relationship involving price P and quantity Q.

Implicit differentiation can help determine: marginal changes, sensitivity to price, changes in demand, changes in supply, equilibrium behavior.

The derivative tells us how one economic quantity responds when another quantity changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ENGINEERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation appears frequently in engineering because many systems are represented by equations involving multiple variables.

Examples include: mechanical systems, electrical circuits, thermodynamics, fluid mechanics, structural systems, control systems.

For example, if pressure, volume, and temperature satisfy an equation F(P, V, T) = 0, we can differentiate the relationship to determine how one variable changes when another changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMPUTER GRAPHICS AND GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit equations are also important in computer graphics.

A curve might be represented as F(x, y) = 0 instead of explicitly writing y = f(x).

For example: x² + y² - 25 = 0 represents a circle.

Implicit differentiation provides the gradient/slope information needed to understand the curve's direction at a point.

This is useful in: computer graphics, CAD, simulations, collision detection, geometric modeling.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A GENERAL APPLICATION FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose an equation is given by F(x, y) = 0

Differentiate both sides with respect to x: d/dx[F(x, y)] = 0

Because y depends on x, derivatives involving y require the chain rule.

After solving for y', we obtain: dy/dx = -Fₓ/Fᵧ

where Fₓ = ∂F/∂x and Fᵧ = ∂F/∂y.

This formula is especially important in multivariable calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the slope of the curve x³ + y³ = 6xy at the point (3, 3).

Step 1: Differentiate both sides
  d/dx(x³ + y³) = d/dx(6xy)

We get: 3x² + 3y²·y' = 6(x·y') + 6y

Step 2: Collect the y' terms
  3y²·y' - 6x·y' = 6y - 3x²

Factor: y'(3y² - 6x) = 6y - 3x²

Step 3: Solve for y'
  y' = (6y - 3x²)/(3y² - 6x)

Simplify: y' = (2y - x²)/(y² - 2x)

Step 4: Substitute (3, 3)
  y' = (2(3) - 3²)/(3² - 2(3)) = (6 - 9)/(9 - 6) = -3/3

Therefore: y' = -1

So the slope of the curve at (3, 3) is: -1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHEN SHOULD YOU USE IMPLICIT DIFFERENTIATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use implicit differentiation when:

① y is not isolated
  Example: x² + y² = 25 instead of y = √(25 - x²).

② Solving for y would be difficult
  Example: x³ + y³ = xy. Trying to isolate y may be complicated. Implicit differentiation is much easier.

③ The equation contains both x and y
  Example: x² + xy + y² = 7. Differentiate directly rather than trying to solve for y.

④ You are dealing with related rates
  When several quantities depend on time: F(x, y) = 0, you can differentiate with respect to t.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT APPLICATIONS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Application: Slope
What implicit differentiation helps find: dy/dx

Application: Tangent lines
What implicit differentiation helps find: Equation of tangent

Application: Normal lines
What implicit differentiation helps find: Perpendicular slope

Application: Related rates
What implicit differentiation helps find: How quantities change with time

Application: Horizontal tangents
What implicit differentiation helps find: Points where y' = 0

Application: Vertical tangents
What implicit differentiation helps find: Points where y' is undefined

Application: Concavity
What implicit differentiation helps find: d²y/dx²

Application: Optimization
What implicit differentiation helps find: Rates and constrained extrema

Application: Physics
What implicit differentiation helps find: Velocity and acceleration relationships

Application: Geometry
What implicit differentiation helps find: Curves, circles, ellipses

Application: Engineering
What implicit differentiation helps find: Relationships among physical variables

Application: Economics
What implicit differentiation helps find: Sensitivity and marginal relationships

Application: Computer graphics
What implicit differentiation helps find: Curves and geometric surfaces

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Related Applications of Implicit Differentiation, remember:

  • Implicit differentiation is not just a differentiation technique—it is a way of analyzing relationships between variables.
  • If F(x, y) = 0, then implicit differentiation allows us to determine dy/dx, which tells us how y changes when x changes while the relationship F(x, y) = 0 remains satisfied.

A useful way to think about it is:

  Relationship → Differentiate → Rate of Change → Application

That is why implicit differentiation is important for tangent lines, related rates, optimization, physics, geometry, engineering, and more.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related Applications of Implicit Differentiation demonstrate the power and versatility of this technique across many fields.

Key concepts covered:

  ✓ Slopes of Implicit Curves
  ✓ Tangent Lines
  ✓ Related Rates
  ✓ Geometry Applications
  ✓ Ellipses
  ✓ Optimization
  ✓ Physics Applications
  ✓ Second Derivative and Concavity
  ✓ Horizontal Tangent Lines
  ✓ Vertical Tangent Lines
  ✓ Economics
  ✓ Engineering
  ✓ Computer Graphics
  ✓ Worked Example
  ✓ When to Use Implicit Differentiation
  `,
  examples: [
    "Circle: x² + y² = 25 → dy/dx = -x/y",
    "Slope at (3,4): dy/dx = -3/4",
    "Tangent line at (3,4): y - 4 = -3/4(x - 3) → 3x + 4y = 25",
    "Related rates: A = πr², dr/dt = 2, r = 5 → dA/dt = 20π cm²/s",
    "Ellipse: x²/a² + y²/b² = 1 → dy/dx = -b²x/(a²y)",
    "Physics: x·vₓ + y·vᵧ = 0 (velocity constraint on circle)",
    "Second derivative: x² + y² = 25 → d²y/dx² = -25/y³",
    "Horizontal tangent: dy/dx = 0 → x = 0 → (0, ±5)",
    "Vertical tangent: dy/dx undefined → y = 0 → (±5, 0)",
    "Worked example: x³ + y³ = 6xy at (3,3) → dy/dx = -1",
    "Implicit derivative formula: dy/dx = -Fₓ/Fᵧ",
    "Use implicit differentiation when y is not isolated",
    "Use implicit differentiation when solving for y is difficult",
    "Relationship → Differentiate → Rate of Change → Application",
  ],
};

export default topic;