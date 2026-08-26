// filename: TangentLinesOfPolarCurves.ts

const topic = {
  id: "tangent-lines-of-polar-curves",
  title: "Tangent Lines of Polar Curves",
  summary:
    "A comprehensive guide to finding tangent lines to polar curves. Covers the slope formula, derivation, horizontal and vertical tangents, and step-by-step examples.",
  details: `
Tangent Lines of Polar Curves is a topic that explains how to find the slope and equation of a tangent line to a curve described in polar coordinates.

In Cartesian coordinates, a curve is usually written as:

  y = f(x)

and the slope of the tangent line is:

  dy/dx

In polar coordinates, however, a curve is written as:

  r = f(θ)

Since both the horizontal and vertical positions depend on θ, we must first convert the polar relationship into parametric form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA

A polar curve is given by:

  r = f(θ)

We know the conversion formulas:

  x = r · cos θ
  y = r · sin θ

Since r depends on θ, both x and y also depend on θ.

Therefore:

  x = f(θ) · cos θ

and:

  y = f(θ) · sin θ

This means a polar curve can be treated similarly to a parametric curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FORMULA FOR THE SLOPE OF A POLAR CURVE

For a parametric curve:

  x = x(θ)

and:

  y = y(θ)

the slope is:

  dy/dx = (dy/dθ) / (dx/dθ)

Therefore, for polar curves:

  dy/dx = (dy/dθ) / (dx/dθ)

This is the main idea behind finding tangent lines in polar coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVING THE FORMULA

Start with:

  x = r · cos θ

and:

  y = r · sin θ

Remember that:

  r = f(θ)

so r changes as θ changes.

We differentiate both equations with respect to θ.

Differentiating x = r · cos θ

Using the product rule:

  dx/dθ = (dr/dθ) · cos θ - r · sin θ

Therefore:

  dx/dθ = r' · cos θ - r · sin θ

where:

  r' = dr/dθ

Differentiating y = r · sin θ

Again using the product rule:

  dy/dθ = (dr/dθ) · sin θ + r · cos θ

Therefore:

  dy/dθ = r' · sin θ + r · cos θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MAIN FORMULA

Now substitute into:

  dy/dx = (dy/dθ) / (dx/dθ)

We get:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

where:

  r' = dr/dθ

This is the most important formula for finding the slope of a tangent line to a polar curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP-BY-STEP PROCEDURE

Given a polar curve:

  r = f(θ)

follow these steps.

Step 1: Find r

Use the given equation:

  r = f(θ)

Step 2: Find r'

Differentiate with respect to θ:

  r' = dr/dθ

Step 3: Find dx/dθ

Use:

  dx/dθ = r' · cos θ - r · sin θ

Step 4: Find dy/dθ

Use:

  dy/dθ = r' · sin θ + r · cos θ

Step 5: Find the Slope

Use:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

Step 6: Find the Point

Convert the polar point to Cartesian coordinates:

  x = r · cos θ
  y = r · sin θ

Step 7: Use the Point-Slope Formula

Once you know the slope m and point (x₁, y₁):

  y - y₁ = m(x - x₁)

This gives the equation of the tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: FINDING THE SLOPE

Given:

  r = 2 · cos θ

Find the slope when:

  θ = π/4

Step 1: Find r

  r = 2 · cos θ

At:

  θ = π/4
  r = 2 · cos(π/4)
  r = 2(√2/2) = √2

Step 2: Find r'

  r = 2 · cos θ

Differentiate:

  r' = -2 · sin θ

At:

  θ = π/4
  r' = -2(√2/2) = -√2

Step 3: Calculate dy/dθ

  dy/dθ = r' · sin θ + r · cos θ

Substitute:

  dy/dθ = (-√2)(√2/2) + (√2)(√2/2)
  = -1 + 1 = 0

Step 4: Calculate dx/dθ

  dx/dθ = r' · cos θ - r · sin θ

Substitute:

  dx/dθ = (-√2)(√2/2) - (√2)(√2/2)
  = -1 - 1 = -2

Step 5: Find the Slope

  dy/dx = 0/(-2) = 0

A slope of zero means the tangent line is horizontal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FINDING THE POINT

We know:

  r = √2

and:

  θ = π/4

Convert to Cartesian coordinates.

Find x

  x = r · cos θ
  x = √2(√2/2) = 1

Find y

  y = r · sin θ
  y = √2(√2/2) = 1

Therefore, the point is:

  (1, 1)

Since the slope is:

  m = 0

the tangent line is:

  y = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HORIZONTAL TANGENT LINES

A tangent line is horizontal when:

  dy/dx = 0

Since:

  dy/dx = (dy/dθ) / (dx/dθ)

a horizontal tangent occurs when:

  dy/dθ = 0

provided:

  dx/dθ ≠ 0

Using the polar formulas:

  r' · sin θ + r · cos θ = 0

and:

  r' · cos θ - r · sin θ ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. VERTICAL TANGENT LINES

A tangent line is vertical when the slope is undefined.

This happens when:

  dx/dθ = 0

provided:

  dy/dθ ≠ 0

Therefore:

  r' · cos θ - r · sin θ = 0

and:

  r' · sin θ + r · cos θ ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: HORIZONTAL AND VERTICAL TANGENTS

Given:

  r = 2 · sin θ

First find:

  r' = 2 · cos θ

Find Horizontal Tangents

Use:

  r' · sin θ + r · cos θ = 0

Substitute:

  (2 · cos θ) · sin θ + (2 · sin θ) · cos θ = 0

Combine:

  4 · sin θ · cos θ = 0

Using:

  sin(2θ) = 2 · sin θ · cos θ

we get:

  2 · sin(2θ) = 0

Therefore:

  sin(2θ) = 0

So:

  2θ = nπ
  θ = nπ/2

We then check which values actually give horizontal tangents.

Find Vertical Tangents

Use:

  r' · cos θ - r · sin θ = 0

Substitute:

  (2 · cos θ) · cos θ - (2 · sin θ) · sin θ = 0
  2 · cos² θ - 2 · sin² θ = 0

Divide by 2:

  cos² θ - sin² θ = 0

Using:

  cos(2θ) = cos² θ - sin² θ

we get:

  cos(2θ) = 0

Therefore:

  2θ = π/2 + nπ
  θ = π/4 + nπ/2

These are candidate angles for vertical tangents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT HAPPENS AT THE POLE?

The pole occurs when:

  r = 0

Finding tangent lines at the pole can be more complicated.

Suppose:

  r = f(θ)

and:

  r = 0

at some angle θ = θ₀.

The tangent direction is often related to the angle θ₀, but you must examine how the curve approaches the pole.

A common approach is:

  Solve r = 0.
  Find the angle(s) where the curve reaches the pole.
  Examine the behavior of the curve near those angles.

Use:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

if it produces a meaningful limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: TANGENT LINE TO A ROSE CURVE

Consider:

  r = 2 · sin(2θ)

Find the slope formula.

First:

  r' = 4 · cos(2θ)

Substitute into:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

We get:

  dy/dx = (4 · cos(2θ) · sin θ + 2 · sin(2θ) · cos θ) / (4 · cos(2θ) · cos θ - 2 · sin(2θ) · sin θ)

This formula gives the slope at any point on the rose curve, provided the denominator is not zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY THE PRODUCT RULE IS NECESSARY

Students sometimes make this mistake:

  x = r · cos θ

and incorrectly differentiate as:

  dx/dθ = r' · cos θ

This is incomplete because both:

  r

and:

  cos θ

depend on θ.

Therefore, we must use the product rule:

  dx/dθ = r' · cos θ - r · sin θ

Similarly:

  dy/dθ = r' · sin θ + r · cos θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK FORMULA SUMMARY

Given:

  r = f(θ)

first find:

  r' = dr/dθ

Then:

  dx/dθ = r' · cos θ - r · sin θ
  dy/dθ = r' · sin θ + r · cos θ

Therefore:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

Horizontal Tangent:

  r' · sin θ + r · cos θ = 0

provided:

  r' · cos θ - r · sin θ ≠ 0

Vertical Tangent:

  r' · cos θ - r · sin θ = 0

provided:

  r' · sin θ + r · cos θ ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER

  dx/dθ = r' · cos θ - r · sin θ
  dy/dθ = r' · sin θ + r · cos θ
  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

  Horizontal:   r' · sin θ + r · cos θ = 0
  Vertical:     r' · cos θ - r · sin θ = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY

For a polar curve:

  r = f(θ)

we convert the coordinates conceptually into:

  x = r · cos θ

and:

  y = r · sin θ

Then we differentiate both with respect to θ:

  dx/dθ = r' · cos θ - r · sin θ
  dy/dθ = r' · sin θ + r · cos θ

Finally:

  dy/dx = (r' · sin θ + r · cos θ) / (r' · cos θ - r · sin θ)

The main idea is:

  A polar curve changes both its distance and direction at the same time.

That is why finding tangent lines requires us to examine how both x and y change as the angle θ changes.

This topic is especially important for studying slopes, horizontal tangents, vertical tangents, motion along polar curves, and the geometry of complex polar graphs.

Easy way to remember: Treat the polar curve as a parametric curve with x = r·cosθ and y = r·sinθ. Differentiate both with respect to θ using the product rule, then divide dy/dθ by dx/dθ.
  `,
  examples: [
    "r = 2 cos θ at θ = π/4 → slope = 0 (horizontal tangent at (1, 1))",
    "r = 2 sin θ → horizontal tangents when sin(2θ) = 0",
    "r = 2 sin θ → vertical tangents when cos(2θ) = 0",
    "r = 2 sin(2θ) → slope formula: (4 cos(2θ) sin θ + 2 sin(2θ) cos θ) / (4 cos(2θ) cos θ - 2 sin(2θ) sin θ)",
    "dx/dθ = r' cos θ - r sin θ",
    "dy/dθ = r' sin θ + r cos θ",
    "dy/dx = (r' sin θ + r cos θ) / (r' cos θ - r sin θ)",
  ],
};

export default topic;