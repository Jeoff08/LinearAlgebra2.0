// filename: center-of-mass-of-a-solid-of-revolution.ts

const topic = {
  id: "center-of-mass-of-a-solid-of-revolution",
  title: "Center of Mass of a Solid of Revolution",
  summary:
    "The point where the entire mass of a three-dimensional solid of revolution can be considered to be concentrated, calculated using integration of disk or washer volumes.",
  details: `
The center of mass of a solid is the point where the entire mass of the object can be considered to be concentrated when analyzing its balance and motion.

For a three-dimensional object, the center of mass can have three coordinates:
  (x̄, ȳ, z̄)

For many solids of revolution, symmetry makes one or more coordinates immediately known.

For example, if a region is rotated around the x-axis, the resulting solid is symmetric around the x-axis. Therefore:
  ȳ = 0
and:
  z̄ = 0

So we only need to determine:
  x̄

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A SOLID OF REVOLUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A solid of revolution is a three-dimensional solid created by rotating a plane region around an axis.

For example, rotating a region under y = f(x) around the x-axis creates a solid.

Conceptually:

Plane Region                    Solid of Revolution

      y                              ______
      ↑                           /        \
      │   ╭────╮                /            \
      │  ╱     │               |              |
      │ ╱      │      →        |              |
      │╱       │                \            /
      └───────────────→ x             \________/

A common example is a sphere, which can be created by rotating a semicircle around its diameter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS CALCULUS NEEDED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a simple solid, such as a uniform cylinder, the center of mass is obvious because of symmetry.

But suppose the solid is created by rotating a complicated curve:
  y = f(x)

The solid may have different amounts of mass at different positions along its length.

We can divide the solid into many thin slices.

Each slice has:
  • a small volume,
  • a certain mass,
  • a particular location.

Calculus allows us to add the contributions of all those slices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DENSITY OF THE SOLID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the solid has a density ρ(x).

If the density is constant, we simply write:
  ρ = constant

Density describes how much mass exists per unit volume.

Therefore:
  ρ = mass / volume

and:
  dm = ρ dV

where:
  dm = small amount of mass
  ρ = density
  dV = small volume

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. TOTAL MASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The total mass of the solid is:
  m = ∫ ρ dV

For a constant density:
  m = ρ ∫ dV

Since:
  ∫ dV = V

we obtain:
  m = ρV

So:
  For a uniform solid, mass equals density multiplied by volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CENTER OF MASS ALONG THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the solid is symmetric around the x-axis.

Then:
  ȳ = 0
and:
  z̄ = 0

We only need:
  x̄

The center of mass is calculated using:
  x̄ = M / m

where M is the moment about the yz-plane.

For a small mass dm located at x:
  dM = x dm

Therefore:
  M = ∫ x dm

Since:
  dm = ρ dV

we have:
  M = ∫ x ρ dV

Thus:
  x̄ = (∫ x ρ dV) / (∫ ρ dV)

For constant density, ρ cancels:
  x̄ = (∫ x dV) / (∫ dV)

or:
  x̄ = (∫ x dV) / V

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. USING THE DISK METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a region under y = f(x) is rotated around the x-axis.

At position x, a thin slice produces a disk.

The radius is:
  r = f(x)

The area of the disk is:
  A(x) = π[f(x)]²

A thin disk has thickness:
  dx

Therefore its volume is:
  dV = π[f(x)]² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. TOTAL VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The total volume is:
  V = ∫ₐᵇ dV

Therefore:
  V = π ∫ₐᵇ [f(x)]² dx

This is the standard disk-method volume formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MOMENT OF THE SOLID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The small disk is located at x.

Its moment is:
  dM = x dV

Substitute:
  dV = π[f(x)]² dx

Therefore:
  dM = x π[f(x)]² dx

The total moment is:
  M = π ∫ₐᵇ x[f(x)]² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CENTER OF MASS FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a uniform solid:
  x̄ = M / V

Therefore:
  x̄ = (π ∫ₐᵇ x[f(x)]² dx) / (π ∫ₐᵇ [f(x)]² dx)

The π's cancel:
  x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx)

This is one of the most useful formulas for the center of mass of a solid of revolution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 1: CENTER OF MASS OF A CONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a cone with:
  • Height h
  • Base radius R
  • Uniform density

The cone is symmetric around its central axis.

Therefore, the center of mass must lie somewhere along that axis.

The known result is:
  x̄ = h/4

measured from the base.

Equivalently, it is:
  3h/4

from the vertex.

This makes physical sense: the cone contains more volume near its wider base, so the center of mass is closer to the base.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 2: SOLID GENERATED BY y = x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the region y = x from x = 0 to x = 2 rotated around the x-axis.

The resulting solid is a cone.

Assume the density is uniform.

Step 1: Find the radius
  At each x, r = x.

  Therefore:
    dV = πx² dx

Step 2: Find the volume
  V = π ∫₀² x² dx
  V = π [x³/3]₀²
  V = 8π/3

Step 3: Find the moment
  M = π ∫₀² x(x²) dx
  M = π ∫₀² x³ dx
  M = π [x⁴/4]₀²
  M = 4π

Step 4: Find the center of mass
  x̄ = M / V
  x̄ = (4π) / (8π/3)
  x̄ = 3/2

So the center of mass is:
  x = 1.5

from the vertex at x = 0.

This agrees with the cone formula because:
  3h/4 = 3(2)/4 = 3/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CENTER OF MASS WHEN ROTATING AROUND THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea works if the region is rotated around the y-axis.

Suppose x = f(y) and the region is rotated around the y-axis.

A thin disk has radius:
  r = f(y)

and:
  dV = π[f(y)]² dy

The center of mass is then found using:
  ȳ = (∫꜀ᵈ y[f(y)]² dy) / (∫꜀ᵈ [f(y)]² dy)

assuming uniform density and symmetry about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SHELL METHOD PERSPECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can also think about a solid of revolution using cylindrical shells.

If a vertical strip at x is rotated around the y-axis, it forms a cylindrical shell.

Its:
  • Radius = x
  • Height = f(x)
  • Thickness = dx

The volume is:
  dV = 2πx f(x) dx

Therefore:
  V = 2π ∫ₐᵇ x f(x) dx

For center-of-mass problems, however, disk/washer slices are often more straightforward when the solid is naturally described perpendicular to the axis of rotation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY SYMMETRY IS SO IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry can eliminate unnecessary calculations.

Suppose a solid is created by rotating a region around the x-axis.

The resulting solid is symmetric around the x-axis.

Therefore:
  ȳ = 0
and:
  z̄ = 0

We only need to calculate:
  x̄

Similarly, a solid symmetric around the y-axis has:
  x̄ = 0
and:
  z̄ = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. GENERAL FORMULA USING VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a uniform solid:
  x̄ = (1/V) ∫ₐᵇ x dV

This formula is worth remembering.

It says:
  The center of mass is the weighted average of the positions of all the 
  tiny pieces of volume.

If the density is not constant:
  x̄ = (∫ₐᵇ x ρ(x) dV) / (∫ₐᵇ ρ(x) dV)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEP-BY-STEP PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a center-of-mass problem involving a solid of revolution:

Step 1: Identify the axis of rotation
  Determine whether the region is rotated around the x-axis or y-axis.

Step 2: Use symmetry
  Determine which coordinates are automatically zero.
    For rotation around the x-axis: ȳ = z̄ = 0
    For rotation around the y-axis: x̄ = z̄ = 0

Step 3: Choose a small slice
  For rotation around the x-axis, a vertical slice usually produces a disk or washer.

Step 4: Determine the differential volume
  For a disk: dV = πR² dx
  For a washer: dV = π(R² - r²) dx

Step 5: Find the total volume
  V = ∫ dV

Step 6: Find the moment
  M = ∫ x dV

Step 7: Divide
  x̄ = M / V (for a uniform solid)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WASHER METHOD FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the solid is generated by rotating a region between two curves:
  y = R(x)
and:
  y = r(x)

around the x-axis, then:
  dV = π[R(x)² - r(x)²] dx

Therefore:
  V = π ∫ₐᵇ [R(x)² - r(x)²] dx

The moment is:
  M = π ∫ₐᵇ x[R(x)² - r(x)²] dx

Thus:
  x̄ = (∫ₐᵇ x[R(x)² - r(x)²] dx) / (∫ₐᵇ [R(x)² - r(x)²] dx)

Notice again that π cancels.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. PHYSICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine the solid as being composed of countless tiny disks: dV₁, dV₂, dV₃, ...

Each disk has a location: x₁, x₂, x₃, ...

and each contributes to the total mass.

The center of mass is essentially the weighted average:
  x̄ = (x₁m₁ + x₂m₂ + x₃m₃ + ...) / (m₁ + m₂ + m₃ + ...)

As the slices become infinitely thin, this becomes:
  x̄ = (∫ x dm) / (∫ dm)

For constant density:
  dm = ρ dV

so:
  x̄ = (∫ x dV) / (∫ dV)

This is the fundamental idea behind the entire topic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT FORMULAS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Mass of a Uniform Solid:
    m = ρV

  Center of Mass:
    x̄ = (∫ x dm) / m

  Uniform Solid:
    x̄ = (∫ x dV) / V

  Disk Volume:
    dV = πR² dx

  Washer Volume:
    dV = π(R² - r²) dx

  Volume of a Solid:
    V = π ∫ₐᵇ R(x)² dx

  Volume Using Washers:
    V = π ∫ₐᵇ [R(x)² - r(x)²] dx

  Moment:
    M = ∫ x dV

  Center of Mass for a Solid Rotated Around the x-Axis:
    x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx)

  For washers:
    x̄ = (∫ₐᵇ x[R(x)² - r(x)²] dx) / (∫ₐᵇ [R(x)² - r(x)²] dx)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. CENTER OF MASS: ROD VS. PLANE REGION VS. SOLID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It helps to see how these topics build on each other.

1. Rod (One-dimensional):
  dm = ρ(x) dx
  Center of mass: x̄ = (∫ x dm) / m

2. Plane Region (Two-dimensional):
  dm = ρ(x, y) dA
  Center of mass: x̄ = M_y/m, ȳ = M_x/m

3. Solid (Three-dimensional):
  dm = ρ(x, y, z) dV
  Center of mass: x̄ = (∫ x dm) / m
  and similarly for ȳ and z̄.

The underlying principle is always the same:
  Center of Mass = Moment / Total Mass

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important concept is:

  The center of mass of a solid of revolution is the balance point of the 
  entire three-dimensional solid, determined by how its mass is distributed 
  along its length.

For a uniform solid:
  x̄ = (∫ x dV) / V

If the solid is generated by rotating y = f(x) around the x-axis:
  x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx)

The overall process is:
  Find dV → Find total volume → Find moment → Divide → Center of Mass

So this topic combines several major calculus ideas you've already covered: 
integration, disk/washer methods, volume of revolution, moments, symmetry, 
and weighted averages.
  `,
  examples: [
    "Cone: center of mass at h/4 from base, 3h/4 from vertex",
    "Solid generated by y=x from 0 to 2 around x-axis → V=8π/3, M=4π, x̄=3/2",
    "Disk method: dV = πR² dx",
    "Washer method: dV = π(R² - r²) dx",
    "Uniform solid: x̄ = (∫ x dV) / V",
    "Solid rotated around x-axis: x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx)",
    "Symmetry: rotation around x-axis → ȳ = z̄ = 0",
  ],
};

export default topic;