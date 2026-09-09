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

For simple geometric shapes like rectangles, circles, or triangles with uniform density, the center of mass is simply the geometric centroid. You can find it by inspection or by using basic symmetry arguments. However, many regions in real-world applications are bounded by curves, such as parabolas, exponentials, or sine functions. These regions have non‑uniform shapes that prevent a simple visual determination of the balance point. Calculus provides a systematic way to compute the center of mass by dividing the region into infinitely many infinitesimal elements, each with its own mass, and then summing their contributions using integration. This method works for any continuous shape, whether the density is constant or varies across the region. Without calculus, we would be limited to only the simplest shapes, which would be insufficient for most engineering and physics problems. Thus, integration is essential for accurately locating the center of mass of arbitrary plane regions.

For a simple rectangle with uniform density, the center of mass is easy to determine.

For example:

"image": "src/assets/4.png",

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

The mass of a plane region is the total amount of matter contained within its boundaries. If the region has a density function ρ(x, y) that describes how mass is distributed per unit area, then the mass is found by integrating this density over the entire region. For a small rectangular element of area dA = dx dy, the mass is dm = ρ(x, y) dA. The total mass m is the double integral of ρ over the region. In many introductory calculus problems, the density is assumed to be constant (uniform), in which case the mass simplifies to ρ times the area of the region. Understanding how to compute mass is the first step toward finding the center of mass, because the center of mass is the weighted average of the position coordinates, where the weights are the mass elements. This concept extends naturally from the one‑dimensional case (rods) to two dimensions and is fundamental in physics and engineering.

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

When the density is constant throughout the region, the mass calculation simplifies considerably. If ρ(x, y) = ρ (a constant), then the mass m = ρ ∬_R dA = ρ A, where A is the area of the region. This means that for a uniform sheet, the mass is simply the density multiplied by the area. This simplification is common in textbook problems because it eliminates the need to integrate density, allowing us to focus on the geometry of the region. The center of mass of a uniform region is also called the centroid, and it depends only on the shape, not on the material's density. Many practical applications, such as finding the balance point of a thin metal plate, assume uniform density because the material is homogeneous. Understanding the uniform case provides a solid foundation for tackling more complex nonuniform density problems later.

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

Moments are mathematical quantities that measure how mass is distributed relative to an axis. The moment about the y‑axis, denoted M_y, is the sum of the products of each mass element and its horizontal distance from the y‑axis. Similarly, the moment about the x‑axis, M_x, is the sum of each mass element times its vertical distance from the x‑axis. These moments are used to compute the coordinates of the center of mass: x̄ = M_y / m and ȳ = M_x / m. Intuitively, the moments capture the "leverage" that each mass element exerts about the axes. If the region is symmetric about an axis, one of the moments will be zero, simplifying the calculation. In calculus, moments are computed using integrals, which effectively sum the contributions of infinitely many infinitesimal elements. Understanding moments is essential for finding the balance point of any distributed mass.

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

The center of mass is the weighted average of the position coordinates, where the weights are the mass elements. Mathematically, it is defined as the ratio of the moment about an axis to the total mass. For a general density function ρ(x, y), the x‑coordinate is given by the integral of xρ over the region divided by the integral of ρ over the region; similarly for the y‑coordinate. These formulas are the two‑dimensional analogs of the one‑dimensional center of mass formula for a rod. They are derived from the principle that the sum of the moments about any axis must be zero at the balance point. These formulas are universally applicable, regardless of the shape or density distribution, as long as the integrals exist. They form the foundation for solving center‑of‑mass problems in calculus and physics.

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

For a uniform region, the density ρ is constant and cancels out of the ratios. As a result, the center of mass depends only on the geometry of the region, not on the material's density. In this case, the mass m becomes ρA, and the moments become ρ times the integrals of x and y over the region. After canceling ρ, the formulas reduce to x̄ = (∬_R x dA) / A and ȳ = (∬_R y dA) / A. The integrals ∬_R x dA and ∬_R y dA are called the first moments of area. This simplification is why many textbook problems assume uniform density: it allows students to focus on the geometric aspects of integration without the added complexity of variable density. The resulting point is the centroid of the region, which is the geometric center of the shape.

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

When a region is described by two functions of x, it is natural to use vertical slices for integration. For each value of x, the vertical cross‑section of the region extends from the lower curve y = f(x) to the upper curve y = g(x). The width of this slice is dx, and its height is g(x) - f(x). The area element dA is then (g(x) - f(x)) dx. This approach is convenient because it reduces the double integral to a single integral over x. The vertical slice method is widely used in calculus because many functions are given explicitly in terms of x. It also makes it easy to compute the moments: the moment about the y‑axis is simply x times the area element, and the moment about the x‑axis requires averaging the vertical position of the slice, leading to the formula with half the difference of squares. This method is the standard technique for finding the centroid of regions bounded by functions of x.

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

The area of a plane region is the total measure of its two‑dimensional extent. When using vertical slices, the area is obtained by integrating the height of each slice (the difference between the top and bottom functions) over the x‑interval. This integral is the sum of the areas of all the vertical strips. It is exactly the same as the area between curves formula. Knowing the area is the first step in finding the centroid of a uniform region because the centroid coordinates are the moments divided by the area. In many problems, the area computation is done separately, and then the moments are computed in a similar manner. The area is always a positive number and is expressed in square units. It forms the denominator in the centroid formulas, so it must be computed accurately.

The area is:
  A = ∫ₐᵇ [g(x) - f(x)] dx

This is the first important integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MOMENT ABOUT THE y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The moment about the y‑axis measures the tendency of the region to rotate about the vertical axis. For a vertical slice located at x, each element of area has a moment arm equal to x. The total moment is the integral of x times the area element over the region. This integral is often easier to compute than the moment about the x‑axis because it does not require squaring the functions. The moment about the y‑axis is used to find the x‑coordinate of the centroid: x̄ = M_y / A. If the region is symmetric about the y‑axis, the moment about the y‑axis is zero, and x̄ = 0. This property can save a lot of work. Understanding the geometric meaning of the moment helps in interpreting the results and in setting up the integrals correctly.

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

The moment about the x‑axis measures the tendency of the region to rotate about the horizontal axis. For a vertical slice, the moment arm for each point is the y‑coordinate. Since the slice has height from y = f(x) to y = g(x), the average height of the slice is (f(x) + g(x))/2. The moment of the slice is the product of its area and the average height, which simplifies to (1/2)[g(x)² - f(x)²] dx. This is why the formula for M_x involves the difference of squares. This moment is used to find the y‑coordinate of the centroid: ȳ = M_x / A. If the region is symmetric about the x‑axis, the moment about the x‑axis is zero, and ȳ = 0. Understanding this formula is essential for correctly computing the vertical position of the center of mass.

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

These three formulas for area, moment about y, and moment about x are the workhorses of center‑of‑mass problems for regions bounded by functions of x. They should be memorized and understood. The area is the integral of the height. The moment about y is the integral of x times the height. The moment about x is half the integral of the difference of the squares of the top and bottom functions. Once these are computed, the centroid coordinates are simply the ratios of the moments to the area. These formulas are valid for any region that can be described by vertical slices, provided the top and bottom functions are known. They are the standard method used in calculus courses for finding centroids of plane regions.

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

Let's work through a complete example to see the formulas in action. We want the centroid of the region bounded by the line y = x and the parabola y = x² from x = 0 to x = 1. The region is simple, and the density is uniform. We first identify the top function as y = x and the bottom as y = x². The area is ∫₀¹ (x - x²) dx = 1/6. The moment about y is ∫₀¹ x(x - x²) dx = 1/12, giving x̄ = (1/12)/(1/6) = 1/2. The moment about x is (1/2)∫₀¹ (x² - x⁴) dx = 1/15, giving ȳ = (1/15)/(1/6) = 2/5. So the center of mass is at (1/2, 2/5). This result is intuitive: the region is slightly skewed toward the line y = x, so the centroid lies above the midpoint of the interval. This example illustrates the step‑by‑step procedure and shows how the integrals produce the balance point.

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

In some cases, the region is more naturally described by functions of y rather than x. This often happens when the region is bounded by curves that are simpler to express as x = f(y) and x = g(y). For such regions, we can use horizontal slices, which are thin horizontal rectangles of height dy. The width of each slice is the difference between the right and left functions, g(y) - f(y). The area element is then (g(y) - f(y)) dy, and the limits of integration are in terms of y. The moments are computed similarly: the moment about the y‑axis becomes ∫ y * [g(y) - f(y)] dy, and the moment about the x‑axis becomes (1/2)∫ [g(y)² - f(y)²] dy. This method is the y‑analog of the vertical slice method. Choosing between vertical and horizontal slices depends on which approach yields simpler integrals. Both methods are valid and should be understood.

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

Symmetry is a powerful tool that can greatly simplify the calculation of the center of mass. If a plane region is symmetric about the y‑axis and has uniform density, then the moment about the y‑axis is zero, and consequently x̄ = 0. This is because the mass on the left side exactly balances the mass on the right side. Similarly, if the region is symmetric about the x‑axis, the moment about the x‑axis is zero, and ȳ = 0. If the region is symmetric about both axes, the center of mass is at the origin. These symmetry properties can save you from performing integrals for the corresponding moments. Even when the region is not perfectly symmetric, partial symmetry can reduce the number of integrals needed. Recognizing and exploiting symmetry is a valuable skill in solving center‑of‑mass problems.

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

The terms "center of mass" and "centroid" are often used interchangeably in the context of uniform density, but they are technically different. The centroid is purely a geometric property of a region it is the average position of all the points in the region, assuming each point has equal weight. The center of mass is a physical property that depends on the distribution of mass. If the density is uniform, the two coincide because every unit of area has the same mass. However, if the density varies (e.g., the region is made of a material that is thicker in some places), the center of mass will shift toward the denser parts. The centroid remains unchanged. In many introductory calculus problems, the density is assumed constant, so the terms are used synonymously. Understanding the difference is important when dealing with nonuniform materials, such as variable‑density plates or composite objects.

For a uniform-density plane region, the center of mass is the same as the centroid.

So if density is constant:
  Center of Mass = Centroid

The centroid is essentially the geometric balance point of the region.

For a nonuniform region, however, the center of mass depends on the density distribution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT DIFFERENCE: ROD VS. PLANE REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is helpful to compare the center of mass of a rod (a one‑dimensional object) with that of a plane region (a two‑dimensional object). For a rod, the center of mass is a single coordinate x̄, and the mass is distributed along a line. The integrals are single integrals with respect to x, and the density is often a function of x. For a plane region, the center of mass has two coordinates, x̄ and ȳ, and the mass is distributed over an area. The integrals are double integrals (or single integrals if using slices). Both concepts are based on the same principle: the center of mass is the weighted average of positions, with weights equal to the mass elements. However, the dimensionality adds complexity to plane regions. Understanding both cases helps in building a unified view of center‑of‑mass calculations in calculus.

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

A structured approach to center‑of‑mass problems will help you avoid errors and work efficiently. Start by sketching the region to visualize its shape and boundaries. Then, determine the appropriate method: vertical slices if the region is bounded by functions of x, horizontal slices if bounded by functions of y. Find the intersection points if they are not given, as they define the limits. If the density is uniform, you only need to compute the area and the two moments. If the density is nonuniform, you must also integrate the density. After computing the moments, divide by the total mass (or area) to get the coordinates. Finally, check your answer for reasonableness: the center of mass should lie within the region and be consistent with any symmetry. This strategy is applicable to virtually all center‑of‑mass problems in calculus.

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

These formulas are the core of center‑of‑mass calculations. The mass is the integral of density over the region. The moments are the integrals of the coordinates times density. The center of mass is the ratio of the moments to the mass. For uniform regions, the density cancels, and the formulas simplify to area and first moments. Memorizing these formulas is essential for solving problems efficiently. However, it is equally important to understand what each quantity represents: mass is total amount, moments measure distribution, and center of mass is the average position. With this understanding, you can adapt the formulas to different coordinate systems and density functions.

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

The central idea is that the center of mass of a plane region is the point where the entire region would balance, taking into account the distribution of mass. For a uniform region, the center of mass is determined solely by the shape: x̄ = M_y / A and ȳ = M_x / A. For a nonuniform region, the density function must be included in the integrals. The process is: region → area/mass → moments → center of mass. This is one of the important applications of double integrals, single‑variable integration, moments, and symmetry in calculus.

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