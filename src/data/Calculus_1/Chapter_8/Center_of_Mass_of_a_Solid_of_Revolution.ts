// filename: center-of-mass-of-a-solid-of-revolution.ts

const topic = {
  id: "center-of-mass-of-a-solid-of-revolution",
  title: "Center of Mass of a Solid of Revolution",
  summary:
    "The point where the entire mass of a three-dimensional solid of revolution can be considered to be concentrated, calculated using integration of disk or washer volumes.",
  details: `
The center of mass of a solid is the point where the entire mass of the object can be considered to be concentrated when analysing its balance and motion. For a three-dimensional object, the center of mass can have three coordinates: (x̄, ȳ, z̄). For many solids of revolution, symmetry makes one or more coordinates immediately known. For example, if a region is rotated around the x-axis, the resulting solid is symmetric around the x-axis. Therefore, ȳ = 0 and z̄ = 0, so we only need to determine x̄. This simplification is one of the key advantages of working with solids of revolution: the symmetry of the object reduces a three-dimensional problem to a one-dimensional one. The center of mass is a fundamental concept in physics and engineering because it allows us to treat a complex three-dimensional object as a single point mass for analysing translational motion, stability, and equilibrium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A SOLID OF REVOLUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A solid of revolution is a three-dimensional solid created by rotating a plane region around an axis. For example, rotating a region under the curve y = f(x) around the x-axis creates a solid. Imagine taking a flat shape, like a semicircle, and spinning it around a line the resulting three-dimensional object is a solid of revolution. Common examples include spheres (rotating a semicircle around its diameter), cones (rotating a right triangle around one of its legs), and cylinders (rotating a rectangle around one of its sides). These shapes appear frequently in real-world applications, from manufacturing (turning a piece of wood on a lathe) to engineering (designing pipes, tanks, and structural components). Understanding how to analyse solids of revolution using calculus is essential for solving problems in geometry, physics, and engineering. The ability to compute the volume, mass, and center of mass of such solids is a key application of integration.

A solid of revolution is a three-dimensional solid created by rotating a plane region around an axis.

For example, rotating a region under y = f(x) around the x-axis creates a solid.

A common example is a sphere, which can be created by rotating a semicircle around its diameter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS CALCULUS NEEDED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a simple solid, such as a uniform cylinder, the center of mass is obvious because of symmetry. However, suppose the solid is created by rotating a complicated curve y = f(x). The solid may have different amounts of mass at different positions along its length because the cross-sectional area varies. We can divide the solid into many thin slices, each with a small volume, a certain mass, and a particular location. Calculus allows us to add the contributions of all those slices by integrating over the length of the solid. This is the same principle we used for finding the center of mass of a rod, but extended to three dimensions. The power of calculus lies in its ability to handle continuously varying quantities by breaking them into infinitesimal elements and summing them using integration. Without calculus, we would have to approximate the center of mass by using a finite number of slices, which would be less accurate and more cumbersome. Integration gives us the exact value.

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

Suppose the solid has a density ρ(x), which may be constant or may vary with position. Density describes how much mass exists per unit volume, and it is a fundamental property of materials. For a uniform solid, the density is constant throughout the object, which simplifies calculations because the density cancels out in the ratio for the center of mass. For nonuniform solids, the density function must be included in the integrals. The relationship between mass, density, and volume is given by dm = ρ dV, where dm is a small amount of mass, ρ is the density, and dV is a small volume. This relationship is the foundation for computing the total mass and the moment of a solid. Understanding how to use density in integration is essential for solving problems involving materials with varying properties, such as composite objects or objects with temperature-dependent density.

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

The total mass of the solid is obtained by integrating the density over the entire volume: m = ∫ ρ dV. For a constant density, this simplifies to m = ρ ∫ dV = ρV, where V is the total volume. This means that for a uniform solid, the mass equals the density multiplied by the volume. This is a familiar result from basic physics: mass = density × volume. In the context of a solid of revolution, we can compute the total volume using the disk or washer method, and then multiply by the constant density to find the mass. For nonuniform solids, the density function must be included in the integral, and the total mass is found by integrating ρ dV over the entire volume. This approach is general and works for any density distribution, as long as the density function is known or can be modelled mathematically.

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

Suppose the solid is symmetric around the x-axis, which is the case when a region is rotated around the x-axis. Then the center of mass lies on the x-axis, so ȳ = 0 and z̄ = 0. We only need to find x̄, the x-coordinate of the center of mass. The center of mass is calculated using x̄ = M/m, where M is the moment about the yz-plane. For a small mass dm located at position x, the moment is dM = x dm. Therefore, the total moment is M = ∫ x dm. Since dm = ρ dV, we have M = ∫ x ρ dV. Thus, x̄ = (∫ x ρ dV) / (∫ ρ dV). For constant density, ρ cancels, giving x̄ = (∫ x dV) / (∫ dV) = (∫ x dV) / V. This formula is the direct extension of the one-dimensional center of mass formula to three dimensions, and it is the basis for all calculations of the center of mass of a solid of revolution.

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

Suppose a region under y = f(x) is rotated around the x-axis. At position x, a thin slice produces a disk. The radius of the disk is r = f(x), and the area of the disk is A(x) = π[f(x)]². A thin disk has thickness dx, so its volume is dV = π[f(x)]² dx. This is the standard disk method for finding volumes of solids of revolution. The disk method is particularly useful when the solid is formed by rotating a region around an axis that is a boundary of the region. Each disk is perpendicular to the axis of rotation, and its radius is the distance from the axis to the curve. By integrating the volumes of all the disks, we obtain the total volume of the solid. The disk method is one of the first techniques students learn for computing volumes of revolution, and it is the foundation for finding the center of mass of such solids.

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

The total volume of the solid is obtained by integrating the differential volume over the interval from a to b: V = ∫ₐᵇ dV. Substituting dV = π[f(x)]² dx gives V = π ∫ₐᵇ [f(x)]² dx. This is the standard disk-method volume formula. It is one of the most important results in calculus for finding volumes of solids of revolution. The formula is derived by summing the volumes of infinitely many thin disks, each with radius f(x) and thickness dx. The factor of π comes from the area of each disk, and the integral sums these areas over the length of the solid. This formula is applicable whenever the solid is generated by rotating a region around the x-axis and the region is described by a single function y = f(x). For more complex regions, such as those between two curves, the washer method is used.

The total volume is:
  V = ∫ₐᵇ dV

Therefore:
  V = π ∫ₐᵇ [f(x)]² dx

This is the standard disk-method volume formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MOMENT OF THE SOLID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The small disk is located at position x. Its moment about the yz-plane is dM = x dV. Substituting dV = π[f(x)]² dx gives dM = x π[f(x)]² dx. The total moment is the integral of this quantity over the interval: M = π ∫ₐᵇ x[f(x)]² dx. The moment is a measure of the distribution of volume along the x-axis. A larger moment indicates that more volume is concentrated farther from the origin, which shifts the center of mass toward the right. The moment is analogous to the first moment of area in two dimensions, extended to three dimensions by including the x-coordinate. By computing the moment and the total volume, we can find the center of mass. This is a key step in the analysis of solids of revolution, as it allows us to determine the balance point of the object.

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

For a uniform solid, the center of mass is x̄ = M / V. Substituting the expressions for M and V gives x̄ = (π ∫ₐᵇ x[f(x)]² dx) / (π ∫ₐᵇ [f(x)]² dx). The π's cancel, leaving x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx). This is one of the most useful formulas for the center of mass of a solid of revolution generated by rotating y = f(x) around the x-axis. It shows that the center of mass depends only on the shape of the generating curve, not on the density (for a uniform solid). The formula is a weighted average of the x-positions, where the weight of each position is the cross-sectional area [f(x)]². This formula is relatively simple to apply and is a direct consequence of the disk method. It is a powerful tool for analysing the balance and stability of solids of revolution.

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

Consider a cone with height h and base radius R, with uniform density. The cone is symmetric around its central axis, so the center of mass must lie somewhere along that axis. The known result is that the center of mass is at x̄ = h/4 measured from the base, or equivalently 3h/4 from the vertex. This makes physical sense: the cone contains more volume near its wider base, so the center of mass is closer to the base than to the vertex. The cone's volume distribution is such that most of the mass is near the base, pulling the balance point in that direction. This result can be derived using the disk method with f(x) = (R/h)x from x = 0 to x = h, which gives x̄ = 3h/4 from the vertex. This example illustrates the general principle that the center of mass of a solid of revolution is determined by the distribution of volume along the axis of rotation.

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

Consider the region y = x from x = 0 to x = 2 rotated around the x-axis. The resulting solid is a cone. Assume the density is uniform. At each x, the radius is r = x, so dV = πx² dx. The total volume is V = π ∫₀² x² dx = π [x³/3]₀² = 8π/3. The moment is M = π ∫₀² x(x²) dx = π ∫₀² x³ dx = π [x⁴/4]₀² = 4π. The center of mass is x̄ = M/V = (4π)/(8π/3) = 3/2. So the center of mass is at x = 1.5 from the vertex at x = 0. This agrees with the cone formula because 3h/4 = 3(2)/4 = 3/2. This example demonstrates how to apply the disk method to find the center of mass of a cone-like solid. It also shows that the formula for the center of mass of a cone derived using calculus matches the known result, confirming the accuracy of the integration method.

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

The same idea works if the region is rotated around the y-axis. Suppose x = f(y) and the region is rotated around the y-axis. A thin disk has radius r = f(y) and dV = π[f(y)]² dy. The center of mass is then found using ȳ = (∫꜀ᵈ y[f(y)]² dy) / (∫꜀ᵈ [f(y)]² dy), assuming uniform density and symmetry about the y-axis. This is the direct analogue of the formula for rotation around the x-axis. The only difference is that the independent variable is now y instead of x, and the disk method is applied with respect to the y-axis. This formula is useful for solids formed by rotating regions that are more naturally described as functions of y, such as regions bounded by curves that are easier to express in terms of y. The same principles of symmetry and integration apply, and the resulting formula has the same structure.

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

We can also think about a solid of revolution using cylindrical shells. If a vertical strip at x is rotated around the y-axis, it forms a cylindrical shell. Its radius is x, its height is f(x), and its thickness is dx. The volume of the shell is dV = 2πx f(x) dx. Therefore, the total volume is V = 2π ∫ₐᵇ x f(x) dx. For center-of-mass problems, however, disk/washer slices are often more straightforward when the solid is naturally described perpendicular to the axis of rotation. The shell method is useful for finding volumes, but for center of mass calculations, the disk method is usually simpler because the slices are perpendicular to the axis of rotation, making the location of each slice easier to determine. However, in some cases, the shell method can be adapted to find the center of mass, especially when the axis of rotation is vertical and the region is described in terms of x.

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

Symmetry can eliminate unnecessary calculations. Suppose a solid is created by rotating a region around the x-axis. The resulting solid is symmetric around the x-axis, so ȳ = 0 and z̄ = 0. We only need to calculate x̄. Similarly, a solid symmetric around the y-axis has x̄ = 0 and z̄ = 0. If a solid is symmetric around the origin, the center of mass is at the origin: x̄ = ȳ = z̄ = 0. Recognising and using symmetry is one of the most powerful techniques in physics and engineering because it dramatically simplifies problems. In many cases, symmetry alone determines one or more coordinates of the center of mass, reducing the problem to a single integral. This is why solids of revolution are so tractable: the circular symmetry ensures that the center of mass lies on the axis of rotation. Taking advantage of symmetry saves time and reduces the potential for errors in calculations.

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

For a uniform solid, the center of mass is given by x̄ = (1/V) ∫ₐᵇ x dV. This formula is worth remembering because it is the direct extension of the one-dimensional formula for the center of mass. It says that the center of mass is the weighted average of the positions of all the tiny pieces of volume. Each infinitesimal volume element dV at position x contributes x dV to the moment, and the total moment is divided by the total volume to give the average position. If the density is not constant, the formula becomes x̄ = (∫ₐᵇ x ρ(x) dV) / (∫ₐᵇ ρ(x) dV). This general formula applies to any solid, not just solids of revolution, as long as the integrals can be set up appropriately. The key idea is that the center of mass is the first moment of mass divided by the total mass, which is a fundamental principle in mechanics.

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

When solving a center-of-mass problem involving a solid of revolution, follow these steps systematically. First, identify the axis of rotation determine whether the region is rotated around the x-axis or y-axis. Second, use symmetry to determine which coordinates are automatically zero: for rotation around the x-axis, ȳ = z̄ = 0; for rotation around the y-axis, x̄ = z̄ = 0. Third, choose a small slice for rotation around the x-axis, a vertical slice usually produces a disk or washer. Fourth, determine the differential volume: for a disk, dV = πR² dx; for a washer, dV = π(R² - r²) dx. Fifth, find the total volume by integrating dV over the interval. Sixth, find the moment by integrating x dV (or y dV for rotation around the y-axis). Finally, divide the moment by the total volume to find the center of mass: x̄ = M/V. This strategy works for all solids of revolution, whether generated by a single curve or by a region between two curves.

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

If the solid is generated by rotating a region between two curves y = R(x) and y = r(x) around the x-axis, then the solid has a hole, and we must use the washer method. The differential volume is dV = π[R(x)² - r(x)²] dx, where R(x) is the outer radius and r(x) is the inner radius. The total volume is V = π ∫ₐᵇ [R(x)² - r(x)²] dx. The moment is M = π ∫ₐᵇ x[R(x)² - r(x)²] dx. Thus, the center of mass is x̄ = (∫ₐᵇ x[R(x)² - r(x)²] dx) / (∫ₐᵇ [R(x)² - r(x)²] dx). Notice again that π cancels. The washer method is a natural extension of the disk method and is used whenever the solid has a central hole, such as a hollow cylinder or a donut‑shaped solid. The formula for the center of mass with washers has the same structure as the disk formula, with the outer and inner radii replacing the single radius.

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

Imagine the solid as being composed of countless tiny disks: dV₁, dV₂, dV₃, ... Each disk has a location x₁, x₂, x₃, ... and each contributes to the total mass. The center of mass is essentially the weighted average of the positions of all the disks, where the weight of each disk is its mass. For constant density, the mass is proportional to the volume, so the center of mass is the weighted average of the positions weighted by volume. Mathematically, x̄ = (x₁V₁ + x₂V₂ + x₃V₃ + ...) / (V₁ + V₂ + V₃ + ...). As the slices become infinitely thin, this sum becomes an integral: x̄ = (∫ x dV) / (∫ dV). This is the fundamental idea behind the entire topic: the center of mass is the average position of all the mass in the object. This interpretation makes the concept intuitive and connects it to the familiar idea of a weighted average. Understanding this physical interpretation helps in applying the formulas correctly and in checking the reasonableness of results.

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

It helps to see how these topics build on each other. For a one-dimensional rod, dm = ρ(x) dx and the center of mass is x̄ = (∫ x dm) / m. For a two-dimensional plane region, dm = ρ(x, y) dA and the center of mass is x̄ = M_y/m and ȳ = M_x/m. For a three-dimensional solid, dm = ρ(x, y, z) dV and the center of mass is x̄ = (∫ x dm) / m, and similarly for ȳ and z̄. The underlying principle is always the same: Center of Mass = Moment / Total Mass. This unifying principle shows that the concept of the center of mass is consistent across all dimensions, and the only difference is the dimensionality of the integral. As we move from one dimension to three, the integrals become more complex, but the fundamental idea remains unchanged. This is one of the beauties of calculus: it provides a unified framework for solving problems in any number of dimensions.

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

The most important concept is that the center of mass of a solid of revolution is the balance point of the entire three-dimensional solid, determined by how its mass is distributed along its length. For a uniform solid, x̄ = (∫ x dV) / V. If the solid is generated by rotating y = f(x) around the x-axis, x̄ = (∫ₐᵇ x[f(x)]² dx) / (∫ₐᵇ [f(x)]² dx). The overall process is: find dV, find total volume, find the moment, divide, and find the center of mass. So this topic combines several major calculus ideas you've already covered: integration, disk/washer methods, volume of revolution, moments, symmetry, and weighted averages. Mastering this topic is essential for understanding how calculus is applied to real‑world problems in physics and engineering, where we often need to know the balance point of three-dimensional objects.

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