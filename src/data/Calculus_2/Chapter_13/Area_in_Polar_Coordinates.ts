// filename: AreaInPolarCoordinates.ts

const topic = {
  id: "area-in-polar-coordinates",
  title: "Area in Polar Coordinates",
  summary:
    "A comprehensive guide to finding area enclosed by polar curves. Covers the basic formula, derivation from sectors, area between curves, and step-by-step problem-solving strategies.",
  details: `
Area in Polar Coordinates is a method used to find the area enclosed by curves that are described using polar equations.

In Cartesian coordinates, we often find area using:

  A = ∫ₐᵇ f(x) dx

But for polar curves, the shape is described using:

  r = f(θ)

where:

  r is the distance from the pole (origin),
  θ is the angle.

Because polar curves are based on rotation around the origin, the formula for area is different.

The main formula is:

  A = (1/2) ∫ₐᵇ r² dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE MAIN FORMULA

Suppose a polar curve is:

  r = f(θ)

The area swept out by the curve as the angle moves from:

  θ = a

to:

  θ = b

is:

  A = (1/2) ∫ₐᵇ [f(θ)]² dθ

In simpler form:

  A = (1/2) ∫ₐᵇ r² dθ

The important parts are:

  r² represents the squared distance from the origin,
  dθ represents a very small change in angle,
  1/2 comes from the area formula of a sector.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHERE DOES THE FORMULA COME FROM?

The formula comes from the area of a sector of a circle.

For a circle with radius r and central angle θ measured in radians:

  A = (1/2) r² θ

Now imagine dividing a polar region into many tiny sectors.

For a very small angle:

  dθ

the small area is approximately:

  dA = (1/2) r² dθ

Adding all the tiny sectors together gives:

  A = (1/2) ∫ₐᵇ r² dθ

So the polar area formula is basically the result of adding infinitely many tiny circular sectors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. IMPORTANT: ANGLES MUST BE IN RADIANS

The formula:

  A = (1/2) ∫ₐᵇ r² dθ

assumes that θ is measured in radians.

For example:

  90° = π/2
  180° = π
  360° = 2π

When solving Calculus problems involving polar area, use radians.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC EXAMPLE: AREA OF A CIRCLE

Suppose:

  r = 3

This represents a circle with radius 3.

To find the entire area, let:

  0 ≤ θ ≤ 2π

Use:

  A = (1/2) ∫₀²ᵖ r² dθ

Substitute:

  A = (1/2) ∫₀²ᵖ 9 dθ

Integrate:

  A = (9/2)[θ]₀²ᵖ
  A = (9/2)(2π)

Therefore:

  A = 9π

This agrees with the ordinary circle formula:

  A = πr² = π(3)² = 9π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GENERAL FORMULA FOR A POLAR CURVE

If:

  r = f(θ)

and the region is traced once from:

  θ = a

to:

  θ = b

then:

  A = (1/2) ∫ₐᵇ [f(θ)]² dθ

The phrase traced once is extremely important.

If you integrate over an interval where the curve is traced multiple times, you may count the same area more than once.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: AREA INSIDE A POLAR CURVE

Find the area enclosed by:

  r = 2 · cos θ

Step 1: Understand the Graph

The equation:

  r = 2 · cos θ

represents a circle.

To trace the circle once, we can use:

  -π/2 ≤ θ ≤ π/2

Step 2: Apply the Formula

  A = (1/2) ∫₋ᵨ/₂ᵨ/₂ (2 · cos θ)² dθ

Simplify:

  A = (1/2) ∫₋ᵨ/₂ᵨ/₂ 4 · cos² θ dθ
  A = 2 ∫₋ᵨ/₂ᵨ/₂ cos² θ dθ

Use the identity:

  cos² θ = (1 + cos(2θ))/2

Therefore:

  A = 2 ∫₋ᵨ/₂ᵨ/₂ (1 + cos(2θ))/2 dθ

The 2 cancels:

  A = ∫₋ᵨ/₂ᵨ/₂ (1 + cos 2θ) dθ

Integrate:

  A = [θ + (1/2) sin 2θ]₋ᵨ/₂ᵨ/₂

Since the sine terms are zero:

  A = π/2 - (-π/2) = π

This makes sense because:

  r = 2 · cos θ

represents a circle with radius 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA OF ONE PETAL OF A ROSE CURVE

Consider:

  r = 2 · sin(2θ)

This is a rose curve.

Since:

  n = 2

and n is even, the graph has:

  2n = 4

petals.

To find the area of one petal, we first find where the petal begins and ends.

Set:

  r = 0
  2 · sin(2θ) = 0
  sin(2θ) = 0

Therefore:

  2θ = 0, π

So:

  θ = 0, π/2

Thus, one petal is traced from:

  0 ≤ θ ≤ π/2

Apply the Area Formula

  A = (1/2) ∫₀ᵨ/₂ (2 · sin 2θ)² dθ

Simplify:

  A = (1/2) ∫₀ᵨ/₂ 4 · sin²(2θ) dθ
  A = 2 ∫₀ᵨ/₂ sin²(2θ) dθ

Use:

  sin² u = (1 - cos 2u)/2

Therefore:

  sin²(2θ) = (1 - cos 4θ)/2

So:

  A = 2 ∫₀ᵨ/₂ (1 - cos 4θ)/2 dθ
  A = ∫₀ᵨ/₂ (1 - cos 4θ) dθ

Integrate:

  A = [θ - (1/4) sin 4θ]₀ᵨ/₂

The sine terms are zero:

  A = π/2

Thus, the area of one petal is:

  π/2

Since there are four petals:

  A_total = 4(π/2) = 2π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT NOTE ABOUT ROSE CURVES

When finding the area of a rose curve, be careful not to integrate over an interval that traces the same petal more than once.

For example:

  r = a · sin(nθ)

may produce:

  n petals if n is odd,
  2n petals if n is even.

A good strategy is:

  Find where r = 0.
  Identify the interval for one petal.
  Find the area of one petal.
  Multiply by the number of petals if symmetry applies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. AREA BETWEEN TWO POLAR CURVES

Sometimes we want the area between:

  r₁ = f(θ)

and:

  r₂ = g(θ)

The formula is:

  A = (1/2) ∫ₐᵇ (r_outer² - r_inner²) dθ

where:

  r_outer is the curve farther from the pole,
  r_inner is the curve closer to the pole.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: AREA BETWEEN TWO POLAR CURVES

Suppose:

  r₁ = 2

and:

  r₂ = 1

Find the area between them.

The curves are two circles centered at the pole.

Use:

  A = (1/2) ∫₀²ᵖ (2² - 1²) dθ
  A = (1/2) ∫₀²ᵖ (4 - 1) dθ
  A = (1/2) ∫₀²ᵖ 3 dθ
  A = (3/2)(2π) = 3π

This agrees with:

  π(2)² - π(1)² = 4π - π = 3π

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING THE CORRECT LIMITS OF INTEGRATION

This is one of the most important skills in polar area problems.

You need to determine:

  a ≤ θ ≤ b

These limits depend on the region you want.

Common ways to find the limits:

Method 1: Find where r = 0

Solve:

  f(θ) = 0

This is useful for:

  rose petals,
  cardioids,
  loops.

Method 2: Find Intersections

Set two curves equal:

  f(θ) = g(θ)

This is useful for finding the boundaries of a region between curves.

Method 3: Use Symmetry

Sometimes you can find one part of the area and multiply.

For example:

  A_total = 4 · A_one_quadrant

if the graph has four-way symmetry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: AREA INSIDE A CARDIOID

Consider:

  r = 1 + cos θ

Find the area inside the cardioid.

The entire cardioid is traced as:

  0 ≤ θ ≤ 2π

Use:

  A = (1/2) ∫₀²ᵖ (1 + cos θ)² dθ

Expand:

  (1 + cos θ)² = 1 + 2 cos θ + cos² θ

Use:

  cos² θ = (1 + cos 2θ)/2

Therefore:

  A = (1/2) ∫₀²ᵖ (1 + 2 cos θ + (1 + cos 2θ)/2) dθ

Simplify:

  A = (1/2) ∫₀²ᵖ (3/2 + 2 cos θ + (1/2) cos 2θ) dθ

Integrate:

  A = (1/2) [(3/2)θ + 2 sin θ + (1/4) sin 2θ]₀²ᵖ

The sine terms become zero:

  A = (1/2)(3/2)(2π) = 3π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY WE SQUARE r

Students often ask:

Why is the formula r² instead of just r?

The reason comes from geometry.

The area of a circular sector is:

  A = (1/2) r² θ

Area depends on the square of the radius, just like the regular area of a circle:

  A = πr²

Therefore, polar area naturally involves:

  r²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES

Mistake 1: Forgetting the 1/2

Incorrect:

  A = ∫ r² dθ

Correct:

  A = (1/2) ∫ r² dθ

Mistake 2: Forgetting to Square the Entire Equation

If:

  r = 1 + cos θ

then:

  r² = (1 + cos θ)²

You must square the entire expression.

Incorrect:

  r² = 1 + cos² θ

Correct:

  (1 + cos θ)² = 1 + 2 cos θ + cos² θ

Mistake 3: Using the Wrong Interval

Always make sure the interval traces the desired region exactly once.

If the curve is traced twice, the area may be counted twice.

Mistake 4: Forgetting Which Curve Is Outer

For area between curves:

  A = (1/2) ∫ (r_outer² - r_inner²) dθ

The outer curve must be squared first.

Mistake 5: Using Degrees Instead of Radians

The integration formula requires:

  Radians

Always convert degrees before integrating.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK SUMMARY OF IMPORTANT FORMULAS

Area Enclosed by One Polar Curve:

  A = (1/2) ∫ₐᵇ r² dθ

If r = f(θ):

  A = (1/2) ∫ₐᵇ [f(θ)]² dθ

Area Between Two Polar Curves:

  A = (1/2) ∫ₐᵇ (r_outer² - r_inner²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEP-BY-STEP PROBLEM-SOLVING STRATEGY

When solving an area problem in polar coordinates:

Step 1: Understand the Graph

Identify the type:

  circle,
  rose,
  cardioid,
  limacon,
  spiral.

Step 2: Determine the Region

Ask:

  Are you finding the whole area?
  One petal?
  An inner loop?
  The area between two curves?

Step 3: Find the Limits

Determine:

  a ≤ θ ≤ b

Use:

  r = 0,
  intersections,
  symmetry.

Step 4: Choose the Formula

For one curve:

  A = (1/2) ∫ r² dθ

For two curves:

  A = (1/2) ∫ (r_outer² - r_inner²) dθ

Step 5: Simplify and Integrate

Square the polar equation carefully and use trigonometric identities when necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER

  A = (1/2) ∫ₐᵇ r² dθ
  A = (1/2) ∫ₐᵇ [f(θ)]² dθ
  A = (1/2) ∫ₐᵇ (r_outer² - r_inner²) dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY

The fundamental formula for area in polar coordinates is:

  A = (1/2) ∫ₐᵇ r² dθ

The idea comes from adding infinitely many tiny circular sectors.

The general process is:

  Understand the graph → determine the region → find the correct angle limits → square the radius → integrate.

For two curves:

  A = (1/2) ∫ₐᵇ (r_outer² - r_inner²) dθ

This topic is especially important because it combines polar coordinates, graphing, trigonometry, intersections, and integration into one powerful Calculus application.

Easy way to remember: Polar area is like adding up sectors of circles. The 1/2 comes from the sector area formula. Always use radians, always square r, and find the correct angle limits.
  `,
  examples: [
    "r = 3 → area = 9π",
    "r = 2 cos θ → area = π (circle of radius 1)",
    "r = 2 sin(2θ) → one petal area = π/2, total area = 2π",
    "r₁ = 2, r₂ = 1 → area between = 3π",
    "r = 1 + cos θ → area = 3π/2",
    "A = (1/2) ∫ₐᵇ r² dθ",
    "A = (1/2) ∫ₐᵇ (r_outer² - r_inner²) dθ",
  ],
};

export default topic;