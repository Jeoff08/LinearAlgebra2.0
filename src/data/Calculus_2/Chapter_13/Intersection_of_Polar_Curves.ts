// filename: IntersectionOfPolarCurves.ts

const topic = {
  id: "intersection-of-polar-curves",
  title: "Intersection of Polar Curves",
  summary:
    "A comprehensive guide to finding intersection points of polar curves. Covers the basic method, the importance of the pole, negative radius considerations, and applications in finding area between polar curves.",
  details: `
The intersection of polar curves refers to the point or points where two polar graphs meet or cross each other.

If two polar equations are:

  r = f(θ)

and

  r = g(θ)

an intersection occurs when both equations represent the same physical point on the plane.

This topic is important because intersection points are often used to find:

  the area between two polar curves,
  the boundaries of a region,
  overlapping regions,
  points where one polar curve crosses another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA

Suppose we have two curves:

  r₁ = f(θ)

and

  r₂ = g(θ)

The simplest way to find their intersection is to set:

  r₁ = r₂

Therefore:

  f(θ) = g(θ)

Then solve for θ.

After finding θ, substitute it into either equation to find r.

Example

Find the intersection of:

  r = 2 · cos θ

and:

  r = 2 · sin θ

Set them equal:

  2 · cos θ = 2 · sin θ

Divide by 2:

  cos θ = sin θ

Divide by cos θ:

  1 = tan θ

Therefore:

  θ = π/4

Now find r:

  r = 2 · cos(π/4)

Since:

  cos(π/4) = √2/2
  r = 2(√2/2) = √2

Therefore, one intersection point is:

  (√2, π/4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IMPORTANT WARNING: POLAR COORDINATES ARE NOT UNIQUE

This is the most important concept when finding intersections.

In Cartesian coordinates, a point usually has one representation:

  (x, y)

But in polar coordinates, the same point can have many representations.

For example:

  (3, 30°)

is the same point as:

  (3, 390°)

and:

  (3, -330°)

Also:

  (3, 30°)

can be represented using a negative radius:

  (-3, 210°)

because:

  (-r, θ) = (r, θ + π)

Therefore, simply setting:

  r₁ = r₂

may sometimes fail to find every intersection point.

You must also consider:

  intersections involving negative r,
  the pole,
  different angle representations of the same point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE POLE IS OFTEN AN INTERSECTION POINT

The pole is the origin:

  r = 0

If both curves pass through:

  r = 0

then the pole is an intersection point.

Example

Consider:

  r = sin θ

and:

  r = cos θ

First curve reaches the pole when:

  sin θ = 0

Therefore:

  θ = 0, π

Second curve reaches the pole when:

  cos θ = 0

Therefore:

  θ = π/2, 3π/2

Both curves pass through the same physical point:

  r = 0

which is the pole.

Even though they reach the pole at different angles, the pole is still the same location.

This is why the pole must always be checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. STANDARD METHOD FOR FINDING INTERSECTIONS

Given:

  r₁ = f(θ)

and:

  r₂ = g(θ)

follow these steps.

Step 1: Set the Equations Equal

  f(θ) = g(θ)

Solve for:

  θ

Step 2: Find the Radius

Substitute each valid angle into either equation.

Find:

  r

Step 3: Check the Pole

Solve:

  f(θ) = 0

and:

  g(θ) = 0

Determine whether both curves pass through:

  r = 0

Remember: even if the angles are different, they can still intersect at the pole.

Step 4: Check Negative Radius Representations

Because:

  (r, θ) = (-r, θ + π)

some intersections may occur when the equations have different values of r but still represent the same physical point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: TWO POLAR CIRCLES

Find the intersections of:

  r = 2 · cos θ

and:

  r = 2 · sin θ

Step 1: Set them equal

  2 · cos θ = 2 · sin θ
  cos θ = sin θ
  tan θ = 1

Therefore:

  θ = π/4

Step 2: Find r

  r = 2 · cos(π/4) = √2

So:

  (√2, π/4)

Step 3: Check the Pole

For:

  r = 2 · cos θ

the pole occurs when:

  cos θ = 0
  θ = π/2, 3π/2

For:

  r = 2 · sin θ

the pole occurs when:

  sin θ = 0
  θ = 0, π

Both curves pass through the pole.

Therefore, the complete set of intersections is:

  (√2, π/4) and the pole

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: INTERSECTION OF A CIRCLE AND A CARDIOID

Find the intersections of:

  r = 1

and:

  r = 1 + cos θ

Step 1: Set them equal

  1 = 1 + cos θ

Subtract 1:

  cos θ = 0

Therefore:

  θ = π/2, 3π/2

Step 2: Find r

Using:

  r = 1

we get:

  r = 1

Therefore, the intersections are:

  (1, π/2)

and:

  (1, 3π/2)

Step 3: Check the Pole

The circle:

  r = 1

never reaches:

  r = 0

Therefore, the pole is not an intersection.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTERSECTION WHEN NEGATIVE RADIUS IS INVOLVED

Consider:

  r = cos θ

and:

  r = -cos θ

If we simply set them equal:

  cos θ = -cos θ
  2 · cos θ = 0
  cos θ = 0

This gives:

  θ = π/2, 3π/2

At these angles:

  r = 0

So the pole is an intersection.

But the two equations actually represent the same circle.

Why?

The equation:

  r = -cos θ

can be rewritten by using:

  (-r, θ) = (r, θ + π)

and describes the same geometric circle as:

  r = cos θ

This shows an important lesson:

  Two polar equations can represent the same curve even if their equations look different.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTERSECTIONS AND GRAPHING

Sometimes algebra alone can be confusing.

It is helpful to first sketch the curves and ask:

  Where do the curves appear to cross?
  Does either curve pass through the pole?
  Does one curve have an inner loop?
  Are negative values of r involved?
  Are there intersections caused by symmetry?

The graph can help you predict the number of intersection points before solving.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: ROSE CURVE AND CIRCLE

Consider:

  r = 2 · cos(2θ)

and:

  r = 1

Set them equal:

  2 · cos(2θ) = 1

Divide by 2:

  cos(2θ) = 1/2

Therefore:

  2θ = π/3, 5π/3

Thus:

  θ = π/6, 5π/6

Because the polar graph repeats and has symmetry, we also consider solutions over:

  0 ≤ θ < 2π

The intersection points occur where the rose has radius 1.

This example demonstrates why you must carefully examine the full interval when solving polar intersections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTERSECTIONS USED FOR FINDING AREA

One major application of intersections is finding the area between two polar curves.

The polar area formula is:

  A = (1/2) ∫ₐᵇ r² dθ

If two curves form a region, we often need to find their intersection angles first.

Suppose:

  r₁ = f(θ)

and:

  r₂ = g(θ)

If the region lies between them, the area is:

  A = (1/2) ∫ₐᵇ [r_outer² - r_inner²] dθ

The values:

  a

and:

  b

are often determined by the intersection points.

Example Concept

Suppose:

  r₁ = 2 · cos θ

and:

  r₂ = 2 · sin θ

They intersect when:

  θ = π/4

That angle can divide the region into different sections.

For example:

  before π/4, one curve may be outside,
  after π/4, the other curve may be outside.

Therefore, intersections help determine where to split an integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON MISTAKES

Mistake 1: Only Setting the Equations Equal

Students often do:

  r₁ = r₂

and stop.

But remember to also check:

  r = 0

because the pole may be an intersection.

Mistake 2: Forgetting Negative r

Remember:

  (r, θ) = (-r, θ + π)

A negative radius represents a point on the opposite side of the pole.

Mistake 3: Ignoring the Interval

When solving trigonometric equations, make sure to find all solutions within the required interval.

For a full polar graph, the interval is often:

  0 ≤ θ < 2π

But some curves can be completely traced over a smaller interval.

Mistake 4: Assuming Every Algebraic Solution Is Unique

Different polar coordinates can represent the same physical point.

For example:

  (2, π/4)

and:

  (-2, 5π/4)

are the same point.

Always think about the actual location on the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL STRATEGY

When finding intersections between:

  r = f(θ)

and:

  r = g(θ)

use this strategy:

Step 1

Sketch or understand both graphs.

Step 2

Solve:

  f(θ) = g(θ)

Step 3

Find the corresponding:

  r

values.

Step 4

Check where each curve has:

  r = 0

to see whether the pole is a common point.

Step 5

Consider negative radius values.

Step 6

Check your answers against the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SUMMARY TABLE

  Concept                    Important Idea
  ──────────────────────────────────────────────────────────
  Basic intersection         r₁ = r₂
  Find radius                Substitute θ into an equation
  Check pole                 Determine where r = 0
  Negative radius            (r, θ) = (-r, θ + π)
  Area application           Intersections determine integration limits
  Graphing                   Helps identify missing intersections

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. KEY FORMULAS TO REMEMBER

  Basic intersection:    r₁ = r₂
  Negative radius:       (-r, θ) = (r, θ + π)
  Area between curves:   A = (1/2) ∫ₐᵇ [r_outer² - r_inner²] dθ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SIMPLE SUMMARY

The intersection of two polar curves occurs when they represent the same point on the plane.

The usual starting point is:

  f(θ) = g(θ)

However, polar coordinates require extra care because:

  (r, θ) = (-r, θ + π)

and because the pole:

  r = 0

is the same physical point regardless of the angle used.

Therefore, the best approach is:

  Set the equations equal → solve for angles → find r → check the pole → consider negative radii → verify using the graph.

Understanding intersections is especially important before studying areas enclosed by polar curves, areas between polar curves, and other advanced applications of polar equations.

Easy way to remember: Start with r₁ = r₂, but also check r = 0 (the pole) and remember that (-r, θ) is the same as (r, θ + π). Always verify with a graph.
  `,
  examples: [
    "r = 2 cos θ and r = 2 sin θ → intersect at (√2, π/4) and the pole",
    "r = 1 and r = 1 + cos θ → intersect at (1, π/2) and (1, 3π/2)",
    "r = cos θ and r = -cos θ → same circle, intersect everywhere",
    "r = 2 cos(2θ) and r = 1 → intersect when cos(2θ) = 1/2",
    "Always check the pole separately",
    "(-r, θ) = (r, θ + π)",
    "Use graphs to verify intersection points",
  ],
};

export default topic;