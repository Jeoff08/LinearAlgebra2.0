// filename: length-of-arc-of-a-plane-curve.ts

const topic = {
  id: "length-of-arc-of-a-plane-curve",
  title: "Length of Arc of a Plane Curve",
  summary:
    "The actual distance measured along a curve between two points, calculated using integration of the differential arc length ds = √(1 + (dy/dx)²) dx.",
  details: `
The arc length of a plane curve is the actual distance measured along the curve between two points.

For a straight line, we can use the familiar distance formula:
  d = √((Δx)² + (Δy)²)

But for a curved path, the curve does not have one constant direction, so we cannot simply use:
  distance = horizontal change + vertical change

Instead, calculus allows us to approximate the curve using many tiny straight-line segments.

As the segments become infinitely small, their total length approaches the exact length of the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA BEHIND ARC LENGTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a curve:
  y = f(x)

from:
  x = a to x = b

We divide the curve into many tiny pieces.

Each tiny piece can be approximated by a straight line:

y
↑
│                 •
│             •
│          •
│       •
│    •
│ •
└──────────────────────────→ x
  a                b

For one tiny segment:
  Δs

is approximately:
  √((Δx)² + (Δy)²)

Using the Pythagorean theorem:
  Δs = √((Δx)² + (Δy)²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVING THE ARC LENGTH FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  Δs = √((Δx)² + (Δy)²)

Factor out Δx²:
  Δs = √((Δx)²[1 + (Δy/Δx)²])

Therefore:
  Δs = √(1 + (Δy/Δx)²) · Δx

As the pieces become infinitely small:
  Δy/Δx → dy/dx
and:
  Δx → dx

Therefore:
  ds = √(1 + (dy/dx)²) dx

Integrating from a to b:
  L = ∫ₐᵇ √(1 + (dy/dx)²) dx

This is the standard arc length formula when y is expressed as a function of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ARC LENGTH FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  y = f(x)

on the interval:
  a ≤ x ≤ b

then:
  L = ∫ₐᵇ √(1 + [f'(x)]²) dx

This is one of the most important formulas to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THE DERIVATIVE APPEAR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative:
  f'(x) = dy/dx

represents the slope of the curve.

The slope tells us how quickly y changes as x changes.

If the curve is nearly horizontal:
  dy/dx ≈ 0
then:
  ds ≈ dx

If the curve is very steep:
  dy/dx is large
so the actual distance along the curve is much greater than the horizontal distance.

Therefore, the derivative is necessary because it tells us how much vertical movement occurs in addition to horizontal movement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: ARC LENGTH OF A STRAIGHT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  y = x

from:
  x = 0 to x = 3

Step 1: Find the derivative
  dy/dx = 1

Step 2: Use the arc length formula
  L = ∫₀³ √(1 + (1)²) dx
  L = ∫₀³ √2 dx

Since √2 is constant:
  L = 3√2

Therefore:
  L = 3√2

This agrees with the ordinary distance formula:
  √(3² + 3²) = √18 = 3√2

This demonstrates that the arc length formula also works for straight lines.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2: ARC LENGTH OF A PARABOLA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the length of:
  y = x²/2

from:
  x = 0 to x = 2

Step 1: Differentiate
  y = x²/2

Therefore:
  dy/dx = x

Step 2: Substitute into the formula
  L = ∫₀² √(1 + x²) dx

So we need to evaluate:
  L = ∫₀² √(1 + x²) dx

This integral requires a special technique, often trigonometric substitution or a standard integral formula.

The antiderivative is:
  ∫ √(1 + x²) dx = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C

Therefore:
  L = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))]₀²

This gives the exact arc length.

The important part is recognizing that the arc length problem becomes an integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHEN x IS A FUNCTION OF y
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the curve is easier to express as:
  x = g(y)

instead of:
  y = f(x)

In that case, we use:
  L = ∫꜀ᵈ √(1 + (dx/dy)²) dy

This is the second important arc length formula.

Example:
  Suppose x = y² from y = 0 to y = 2.

  Differentiate with respect to y:
    dx/dy = 2y

  Then:
    L = ∫₀² √(1 + (2y)²) dy

  Therefore:
    L = ∫₀² √(1 + 4y²) dy

Again, calculus converts the curved-distance problem into an integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. PARAMETRIC FORM OF ARC LENGTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some curves cannot conveniently be written as:
  y = f(x)

or:
  x = g(y)

Instead, they may be described parametrically:
  x = x(t)
  y = y(t)

For example:
  x = cos t
  y = sin t

describes a circle.

For a parametric curve, the arc length formula is:
  L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVING THE PARAMETRIC FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a tiny change in t:
  dx = (dx/dt) dt
and:
  dy = (dy/dt) dt

The small arc length is:
  ds = √(dx² + dy²)

Substitute:
  ds = √((dx/dt)²(dt)² + (dy/dt)²(dt)²)

Factor out dt²:
  ds = √((dx/dt)² + (dy/dt)²) dt

Therefore:
  L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ARC LENGTH OF A CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a circle with radius r:
  x = r cos t
  y = r sin t

Differentiate:
  dx/dt = -r sin t
and:
  dy/dt = r cos t

Substitute into the parametric arc length formula:
  L = ∫ √(r² sin² t + r² cos² t) dt

Factor:
  L = ∫ r √(sin² t + cos² t) dt

Since:
  sin² t + cos² t = 1

we get:
  L = ∫ r dt

For a complete circle:
  0 ≤ t ≤ 2π

Thus:
  L = ∫₀²π r dt
  L = 2πr

Therefore:
  L = 2πr

This shows that the calculus formula produces the familiar circumference formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ARC LENGTH IN POLAR COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another way to describe curves is using polar coordinates:
  r = f(θ)

The arc length formula becomes:
  L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

This is useful for curves such as:
  • Spirals
  • Cardioids
  • Rose curves
  • Other polar graphs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPARING THE ARC LENGTH FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Cartesian: y = f(x)
    L = ∫ₐᵇ √(1 + (dy/dx)²) dx

  Cartesian: x = g(y)
    L = ∫꜀ᵈ √(1 + (dx/dy)²) dy

  Parametric
    L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt

  Polar
    L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT INTERPRETATION OF ds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol:
  ds

represents a tiny piece of arc length.

For a curve y = f(x):
  ds = √(1 + (dy/dx)²) dx

This is extremely useful because many calculus applications use ds.

For example, if you want to calculate something along a curve, you may encounter:
  ∫_C ds

which simply means the total length of the curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ARC LENGTH AND DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to distinguish between:

Straight-Line Distance:
  The shortest distance between two points.

Arc Length:
  The distance traveled along the curve.

For example:

A •──────────────• B
    straight
    distance

A •
   ╲
    ╲
     ╲
      • B
      curved path

The curved path is generally longer than the straight-line distance.

Therefore:
  Arc Length ≥ Straight-Line Distance

with equality only when the curve is a straight line between the two points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY ARC LENGTH CAN BE DIFFICULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula itself is straightforward:
  L = ∫ₐᵇ √(1 + [f'(x)]²) dx

The difficult part is often evaluating the resulting integral.

For example:
  ∫ √(1 + x²) dx

does not have an elementary antiderivative obtained using the basic power rule.

Some arc length problems may require:
  • Trigonometric substitution
  • Algebraic manipulation
  • Hyperbolic functions
  • Numerical integration

So an important skill is recognizing whether the integral can be simplified.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEP-BY-STEP STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an arc length problem, use this procedure:

Step 1: Identify the equation
  Determine whether the curve is given as:
    • y = f(x)
    • x = g(y)
    • Parametrically

Step 2: Determine the interval
  Find:
    • a ≤ x ≤ b
    • c ≤ y ≤ d
    • or the appropriate parameter interval

Step 3: Differentiate
  If y = f(x), find dy/dx.

Step 4: Substitute into the arc length formula
  L = ∫ₐᵇ √(1 + (dy/dx)²) dx

Step 5: Simplify the integrand
  Look carefully for:
    • Perfect squares
    • Factoring
    • Trigonometric identities
    • Standard integral forms

Step 6: Evaluate the integral
  Find the exact value if possible.
  If an elementary antiderivative does not exist, a numerical approximation may be necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Square Root
  Incorrect:
    L = ∫ₐᵇ (1 + (dy/dx)²) dx
  Correct:
    L = ∫ₐᵇ √(1 + (dy/dx)²) dx

Mistake 2: Forgetting to Square the Derivative
  The formula requires:
    (dy/dx)²
  not simply:
    dy/dx

Mistake 3: Using the Wrong Limits
  The limits must correspond to the variable of integration.
  If integrating with respect to x: x = a to x = b
  If integrating with respect to y: y = c to y = d

Mistake 4: Confusing Arc Length with Area
  Arc length measures a one-dimensional distance:
    L = ∫ ds
  Area measures a two-dimensional region:
    A = ∫ dA
  They are completely different quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. APPLICATIONS OF ARC LENGTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Arc length has many applications.

Engineering:
  Used to determine:
    • Length of curved pipes
    • Cable length
    • Roads and tracks
    • Structural components

Physics:
  Used when objects move along curved paths.

Computer Graphics:
  Used for:
    • Curved paths
    • Animation trajectories
    • Bezier curves
    • Motion along paths

Manufacturing:
  Used to calculate the amount of material needed to form curved objects.

Geometry:
  Used to determine the circumference and lengths of curved boundaries.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT FORMULAS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  For y = f(x):
    L = ∫ₐᵇ √(1 + [f'(x)]²) dx

  For x = g(y):
    L = ∫꜀ᵈ √(1 + [g'(y)]²) dy

  For parametric equations:
    L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt

  For polar equations:
    L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental idea behind arc length is:

  Break a curved path into infinitely many tiny straight-line pieces, 
  calculate the length of each piece, and add them using integration.

The tiny distance is:
  ds = √(dx² + dy²)

For y = f(x):
  ds = √(1 + (dy/dx)²) dx

Therefore:
  L = ∫ₐᵇ √(1 + (dy/dx)²) dx

So the overall concept is:

  Curve → Tiny line segments → Differential length ds → Integral → Total Arc Length

This makes Arc Length an important application of integration, connecting the Pythagorean theorem, derivatives, differential notation, and definite integrals.
  `,
  examples: [
    "Straight line y = x from 0 to 3 → L = ∫₀³ √2 dx = 3√2",
    "Parabola y = x²/2 from 0 to 2 → L = ∫₀² √(1+x²) dx",
    "Parametric circle: x = r cos t, y = r sin t → L = 2πr",
    "Arc length formula: L = ∫ₐᵇ √(1 + (dy/dx)²) dx",
    "x = g(y): L = ∫꜀ᵈ √(1 + (dx/dy)²) dy",
    "Parametric: L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt",
    "Polar: L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ",
  ],
};

export default topic;