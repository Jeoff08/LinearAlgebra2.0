// filename: center-of-mass-of-a-plane-region.ts

const topic = {
  id: "center-of-mass-of-a-plane-region",
  title: "Center of Mass of a Plane Region",
  summary:
    "The point where a flat, two-dimensional object would balance, determined by calculating moments about the x and y axes using integration for both uniform and nonuniform density regions.",
  details: `
The center of mass of a plane region is the point where a flat, two-dimensional object would balance if its mass were distributed throughout the region.

Think of a thin, flat sheet made from a uniform material. If you place your finger at exactly the right point underneath it, the sheet can balance. That point is its center of mass.

For a plane region, the center of mass has two coordinates:
  (x̄, ȳ)

where:
  x̄ = horizontal coordinate of the center of mass
  ȳ = vertical coordinate of the center of mass

Unlike the center of mass of a rod, which has only one coordinate, a plane region requires two coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED CALCULUS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a simple rectangle with uniform density, the center of mass is easy to determine.

For example:

        y
        ↑
    ┌──────────┐
    │          │
    │    ●     │
    │          │
    └──────────┘
        → x

The center is simply at the geometric center.

But many regions are not simple rectangles.

For example, the region might be bounded by:
  y = x²
and:
  y = x + 2

The shape is curved, so we cannot simply look at it and determine its balance point.

Calculus allows us to divide the region into infinitely many tiny pieces of area and determine how the mass is distributed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MASS OF A PLANE REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a plane region has a density function:
  ρ(x, y)

The density tells us how much mass is contained in a unit of area.

For a small rectangular piece:
  dA = dx dy

the small amount of mass is:
  dm = ρ(x, y) dA

The total mass is therefore:
  m = ∬_R ρ(x, y) dA

where R represents the entire plane region.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNIFORM DENSITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the plane region has a constant density:
  ρ(x, y) = ρ

then:
  m = ∬_R ρ dA

Since ρ is constant:
  m = ρ ∬_R dA

But:
  ∬_R dA = A

where A is the area.

Therefore:
  m = ρA

This means:
  For a uniform plane region, mass equals density multiplied by area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MOMENTS OF A PLANE REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the center of mass, we need two moments:
  • Moment about the y-axis
  • Moment about the x-axis

These tell us how the mass is distributed horizontally and vertically.

Moment About the y-Axis:
  Consider a small piece of mass dm located at (x, y).
  Its distance from the y-axis is x.
  Therefore, its moment about the y-axis is:
    x dm

  Adding all the small moments gives:
    M_y = ∬_R x ρ(x, y) dA

  This moment helps determine the horizontal coordinate:
    x̄ = M_y / m

Moment About the x-Axis:
  The distance of the small mass from the x-axis is y.
  Therefore:
    dM_x = y dm

  Adding all the small moments:
    M_x = ∬_R y ρ(x, y) dA

  This gives the vertical coordinate:
    ȳ = M_x / m

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MAIN CENTER OF MASS FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The center of mass is (x̄, ȳ) where:
  x̄ = M_y / m
and:
  ȳ = M_x / m

For a general density function:
  x̄ = (∬_R x ρ(x, y) dA) / (∬_R ρ(x, y) dA)
and:
  ȳ = (∬_R y ρ(x, y) dA) / (∬_R ρ(x, y) dA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. UNIFORM PLANE REGION FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a uniform region, the density is constant and cancels out.

Therefore:
  x̄ = M_y / A
and:
  ȳ = M_x / A

where:
  A = area of the region

The moments become:
  M_y = ∬_R x dA
and:
  M_x = ∬_R y dA

Thus:
  x̄ = (∬_R x dA) / (∬_R dA)
and:
  ȳ = (∬_R y dA) / (∬_R dA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. USING VERTICAL SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many calculus problems are easier when the region is described using:
  f(x) ≤ y ≤ g(x)
for:
  a ≤ x ≤ b

For each value of x, we use a thin vertical rectangle.

Its:
  Width = dx
  Height = g(x) - f(x)

Therefore:
  dA = [g(x) - f(x)] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AREA OF A PLANE REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area is:
  A = ∫ₐᵇ [g(x) - f(x)] dx

This is the first important integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MOMENT ABOUT THE y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The vertical strip is located at x.

Its moment about the y-axis is:
  x dA

Therefore:
  M_y = ∫ₐᵇ x [g(x) - f(x)] dx

Then:
  x̄ = M_y / A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MOMENT ABOUT THE x-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This one requires slightly more thought.

The vertical strip extends from y = f(x) to y = g(x).

The moment about the x-axis depends on the average vertical position of the strip.

The formula becomes:
  M_x = (1/2) ∫ₐᵇ [g(x)² - f(x)²] dx

Then:
  ȳ = M_x / A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VERY IMPORTANT FORMULAS FOR VERTICAL SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the region lies between y = f(x) and y = g(x) from x = a to x = b, then:

  Area:
    A = ∫ₐᵇ [g(x) - f(x)] dx

  Moment about the y-axis:
    M_y = ∫ₐᵇ x [g(x) - f(x)] dx

  Moment about the x-axis:
    M_x = (1/2) ∫ₐᵇ [g(x)² - f(x)²] dx

  Center of Mass:
    x̄ = M_y / A
    ȳ = M_x / A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: CENTER OF MASS OF A REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the region bounded by:
  y = x
and:
  y = x²

between:
  x = 0 and x = 1

Assume the region has uniform density.

Step 1: Identify the Upper and Lower Functions
  For 0 ≤ x ≤ 1, we have:
    x ≥ x²

  Therefore:
    g(x) = x
  and:
    f(x) = x²

Step 2: Find the Area
  Use:
    A = ∫₀¹ (x - x²) dx

  Integrate:
    A = [x²/2 - x³/3]₀¹
    A = 1/2 - 1/3
    A = 1/6

Step 3: Find the Moment About the y-Axis
  Use:
    M_y = ∫₀¹ x(x - x²) dx

  Simplify:
    M_y = ∫₀¹ (x² - x³) dx

  Integrate:
    M_y = [x³/3 - x⁴/4]₀¹
    M_y = 1/3 - 1/4
    M_y = 1/12

Step 4: Find x̄
  x̄ = M_y / A
  x̄ = (1/12) / (1/6)
  x̄ = 1/2

Step 5: Find the Moment About the x-Axis
  Use:
    M_x = (1/2) ∫₀¹ [x² - x⁴] dx

  Integrate:
    M_x = (1/2)[x³/3 - x⁵/5]₀¹
    M_x = (1/2)(1/3 - 1/5)
    M_x = (1/2)(2/15)
    M_x = 1/15

Step 6: Find ȳ
  ȳ = M_x / A
  ȳ = (1/15) / (1/6)
  ȳ = 6/15
  ȳ = 2/5

So the center of mass is:
  (1/2, 2/5)

or approximately:
  (0.5, 0.4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. USING HORIZONTAL SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes it is easier to describe a region using y rather than x.

Suppose:
  x = f(y)
and:
  x = g(y)

for:
  c ≤ y ≤ d

Then we use horizontal strips.

The width is:
  g(y) - f(y)

and:
  dA = [g(y) - f(y)] dy

The area becomes:
  A = ∫꜀ᵈ [g(y) - f(y)] dy

The moments can similarly be constructed using the horizontal slices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SYMMETRY AND CENTER OF MASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry can make these problems much easier.

Symmetry about the y-axis:
  If the region is symmetric about the y-axis and has uniform density:
    x̄ = 0

Symmetry about the x-axis:
  If the region is symmetric about the x-axis:
    ȳ = 0

Symmetry about both axes:
  If the region is symmetric about both axes:
    (x̄, ȳ) = (0, 0)

This can save a lot of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CENTER OF MASS VS. CENTROID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a uniform-density plane region, the center of mass is the same as the centroid.

So if density is constant:
  Center of Mass = Centroid

The centroid is essentially the geometric balance point of the region.

For a nonuniform region, however, the center of mass depends on the density distribution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT DIFFERENCE: ROD VS. PLANE REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rod:
  A rod is one-dimensional.
  You use:
    dm = ρ(x) dx
  and:
    x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx)

Plane Region:
  A plane region is two-dimensional.
  You use:
    dm = ρ(x, y) dA
  and find both:
    x̄ and ȳ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a center-of-mass problem, follow this procedure:

Step 1: Sketch the region
  Identify the curves and boundaries.

Step 2: Determine the limits
  Find the appropriate x- or y-interval.

Step 3: Determine the density
  If the region is uniform: ρ = constant
  If it is nonuniform: ρ = ρ(x, y)

Step 4: Find the area or mass
  For uniform density:
    A = ∫ₐᵇ (top - bottom) dx
  For general density:
    m = ∬_R ρ(x, y) dA

Step 5: Find the moments
  For vertical slices:
    M_y = ∫ₐᵇ x(top - bottom) dx
  and:
    M_x = (1/2) ∫ₐᵇ [(top)² - (bottom)²] dx

Step 6: Find the center of mass
  x̄ = M_y / m
  ȳ = M_x / m

  For uniform density, m can be replaced by the area A.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT FORMULAS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  General Mass:
    m = ∬_R ρ(x, y) dA

  General Moment About y-Axis:
    M_y = ∬_R x ρ(x, y) dA

  General Moment About x-Axis:
    M_x = ∬_R y ρ(x, y) dA

  Center of Mass:
    x̄ = M_y / m
    ȳ = M_x / m

  Uniform Region:
    A = ∫ₐᵇ [g(x) - f(x)] dx
    M_y = ∫ₐᵇ x [g(x) - f(x)] dx
    M_x = (1/2) ∫ₐᵇ [g(x)² - f(x)²] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea is:

  The center of mass of a plane region is the point where the entire region 
  would balance, taking into account how its mass is distributed.

For a uniform region, the center of mass is determined entirely by the shape 
of the region:
  x̄ = M_y / A, ȳ = M_x / A

For a nonuniform region, density must also be considered:
  x̄ = (∬_R x ρ(x, y) dA) / (∬_R ρ(x, y) dA)
  ȳ = (∬_R y ρ(x, y) dA) / (∬_R ρ(x, y) dA)

So the progression is:
  Region → Area/Mass → Moments → Center of Mass

This is one of the important applications of double integrals, single-variable integration, moments, and symmetry in calculus.
  `,
  examples: [
    "Uniform region between y=x and y=x² from 0 to 1 → A=1/6, M_y=1/12, M_x=1/15, (x̄,ȳ)=(1/2,2/5)",
    "Symmetric about y-axis → x̄ = 0",
    "Symmetric about x-axis → ȳ = 0",
    "General mass: m = ∬_R ρ(x,y) dA",
    "Moment about y-axis: M_y = ∬_R x ρ(x,y) dA",
    "Moment about x-axis: M_x = ∬_R y ρ(x,y) dA",
    "Center of mass: x̄ = M_y/m, ȳ = M_x/m",
  ],
};

export default topic;