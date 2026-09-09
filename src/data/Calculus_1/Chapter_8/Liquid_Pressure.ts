// filename: liquid-pressure.ts

const topic = {
  id: "liquid-pressure",
  title: "Liquid Pressure",
  summary:
    "The force exerted by a liquid on a surface due to the weight of the liquid above it, calculated using P = ρgh for pressure and F = ∫ P dA for total force on submerged surfaces.",
  details: `
Liquid pressure is the force exerted by a liquid on a surface due to the weight of the liquid above it. A liquid such as water has mass, and gravity pulls that mass downward. Because of this, the deeper you go into a liquid, the more liquid is above you, and therefore the greater the pressure. For example, at the surface of a swimming pool, the water pressure is relatively low; at the bottom of the pool, the pressure is greater; and a deep-sea diver experiences much greater pressure than a swimmer near the surface. The basic principle is that the deeper an object is submerged in a liquid, the greater the liquid pressure acting on it. Understanding liquid pressure is essential in engineering, hydraulics, and many real-world applications, from designing dams to calculating forces on underwater structures.

The basic principle is:
  The deeper an object is submerged in a liquid, the greater the liquid 
  pressure acting on it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRESSURE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The pressure at a certain depth in a liquid is given by the formula P = ρgh, where P is the pressure, ρ (rho) is the density of the liquid, g is the acceleration due to gravity, and h is the depth below the surface. This formula is derived from the fact that pressure is the force per unit area exerted by the weight of the liquid column above a point. The standard unit of pressure is the Pascal (Pa), which is equivalent to one Newton per square metre (N/m²). This formula shows that pressure is directly proportional to the depth: as you go deeper, the pressure increases linearly. It also depends on the density of the liquid denser liquids like mercury exert more pressure at the same depth than lighter liquids like water. Understanding this relationship is fundamental for solving problems involving submerged surfaces and fluid statics.

The pressure at a certain depth in a liquid is given by:
  P = ρgh

where:
  P = pressure
  ρ (rho) = density of the liquid
  g = acceleration due to gravity
  h = depth below the surface

The standard unit of pressure is:
  Pascals (Pa)
where:
  1 Pa = 1 N/m²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. UNDERSTANDING THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider water in a container. As you go deeper, the depth h increases, and since P = ρgh, the pressure also increases. This means that pressure is directly proportional to depth: greater depth leads to greater pressure. Similarly, if the liquid is denser (higher ρ) or if gravity is stronger (higher g), the pressure at a given depth will be greater. This relationship is intuitive: the more liquid there is above a point, the more weight it exerts, and the higher the pressure. This understanding is crucial for many practical applications, such as calculating the pressure at the bottom of a dam, the force on a submarine hull, or the design of underwater pipelines. The formula also implies that pressure is the same at all points at the same depth in a connected liquid, which is a key principle in fluid statics.

As you go deeper:
  h ↑

Therefore:
  P = ρgh ↑

This means pressure increases as depth increases.

Important relationships:
  • Greater depth → greater pressure
  • Greater density → greater pressure
  • Stronger gravity → greater pressure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1: PRESSURE UNDERWATER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To see the pressure formula in action, consider a person who is 5 meters below the surface of water. Using the values for water density (ρ = 1000 kg/m³) and gravitational acceleration (g = 9.8 m/s²), we can calculate the pressure exerted by the water above them. The pressure is P = ρgh = (1000)(9.8)(5) = 49,000 Pa. This is the pressure caused solely by the water; atmospheric pressure is additional. This example illustrates how quickly pressure increases with depth: at just 5 metres, the pressure is nearly 50,000 Pascals, which is about half of atmospheric pressure. This calculation is essential for scuba diving, submarine design, and many other applications where pressure at depth must be known. It also highlights the linear relationship between depth and pressure in a fluid of constant density.

Suppose a person is 5 meters below the surface of water.

Using:
  ρ = 1000 kg/m³
and:
  g = 9.8 m/s²

The pressure is:
  P = ρgh
  P = (1000)(9.8)(5)
  P = 49,000 Pa

This is the pressure caused by the water above the person.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FORCE CAUSED BY LIQUID PRESSURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pressure is defined as force per unit area: P = F/A. Therefore, the force exerted by a liquid on a surface can be calculated as F = PA. Combining this with the pressure formula P = ρgh gives F = ρghA, provided the entire surface is at approximately the same depth. This formula is straightforward when the surface is horizontal and at a constant depth, such as the bottom of a swimming pool. However, when the surface is vertical or inclined, the depth varies across the surface, so the pressure is not uniform. In such cases, we cannot simply multiply a single pressure value by the total area; instead, we must account for the variation in depth by integrating over the surface. This is where calculus becomes essential for calculating the total force on submerged surfaces.

Pressure is force per unit area:
  P = F/A

Therefore, force can be calculated as:
  F = PA

Combining this with P = ρgh gives:
  F = ρghA

where:
  F = force exerted by the liquid
  A = area of the surface

This formula works when the entire surface is at approximately the same depth.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY CALCULUS IS NEEDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In many situations, a submerged surface extends vertically through different depths, so the pressure is not the same everywhere. For example, consider a vertical wall submerged in water: the pressure near the top is low because there is little water above it, while the pressure near the bottom is high because there is a large column of water above it. Because the pressure changes continuously with depth, we cannot simply multiply one pressure value by the entire area. Instead, we divide the surface into many tiny horizontal strips, each at a nearly constant depth. On each strip, the pressure is essentially uniform, so we can compute the small force on that strip and then sum all these small forces using integration. This approach gives the exact total force on the surface. Calculus is therefore essential for solving liquid pressure problems involving vertical or inclined surfaces, where pressure varies with depth.

In many situations, a submerged surface extends vertically through different depths.

For example, consider a vertical wall submerged in water:

Water Surface

"image": "src/assets/15.png",

The pressure is not the same everywhere.

Near the top:
  P_top = ρgh_top

Near the bottom:
  P_bottom = ρgh_bottom

Since pressure changes with depth, we cannot simply multiply one pressure value by the entire area.

Instead, we divide the surface into many tiny horizontal strips and use integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIFFERENTIAL FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To calculate the total force on a submerged vertical surface, we start by considering a thin horizontal strip of the surface at a depth y below the liquid surface. Let the strip have thickness dy and width w(y), which may vary with depth. The area of this thin strip is dA = w(y) dy. The pressure at depth y is P(y) = ρgy. The small force acting on this strip is dF = P(y) dA = ρgy w(y) dy. This expression represents the force on an infinitesimal strip, and by integrating it over the entire depth of the surface, we can find the total force. This integration process effectively adds up the contributions of all the strips, giving the total force exerted by the liquid on the surface. This method is general and works for any shape of surface, as long as the width function w(y) is known.

Consider a thin horizontal strip of the surface.

Let:
  y = depth of the strip below the liquid surface
  dy = thickness of the strip
  w(y) = width of the strip

The area of the thin strip is:
  dA = w(y) dy

The pressure at depth y is:
  P(y) = ρgy

Therefore, the small force acting on the strip is:
  dF = P(y) dA

Substitute:
  dF = (ρgy)(w(y) dy)

Thus:
  dF = ρgy w(y) dy

To find the total force, integrate:
  F = ∫ₐᵇ ρgy w(y) dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GENERAL FORMULA FOR LIQUID FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a vertical surface submerged in a liquid, the total force is given by the integral of the pressure times the area over the depth. Using P(y) = ρgy, we obtain F = ρg ∫ₐᵇ y w(y) dy. This is the main formula used in calculus problems involving liquid pressure. It shows that the total force depends on the density of the liquid, the acceleration due to gravity, and the integral of the product of depth and width over the submerged surface. This integral is essentially the first moment of area about the liquid surface, which reflects how the distribution of area with depth affects the total force. The formula is versatile and can be applied to any vertical surface, regardless of its shape, as long as the width function w(y) is known. It is the foundation for solving many practical engineering problems involving fluid forces.

For a vertical surface submerged in a liquid:
  F = ∫ₐᵇ P(y) w(y) dy

Since P(y) = ρgy, we get:
  F = ρg ∫ₐᵇ y w(y) dy

This is the main formula used in calculus problems involving liquid pressure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: FORCE ON A VERTICAL RECTANGULAR WALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rectangular wall of width 4 metres and height 3 metres is submerged vertically with its top at the water surface. We want to find the total force exerted by the water on the wall. Using the general formula, we set y as the depth below the surface, so the wall extends from y = 0 to y = 3. The pressure at depth y is P(y) = ρgy = 9800y (using ρ = 1000 kg/m³ and g = 9.8 m/s²). The width is constant: w(y) = 4. The differential force is dF = P(y) w(y) dy = 9800y · 4 dy = 39200y dy. Integrating from 0 to 3 gives F = 39200 ∫₀³ y dy = 39200 [y²/2]₀³ = 39200 (9/2) = 176,400 N. This is the total force exerted by the water on the wall. This example demonstrates the application of the integral formula to a simple rectangular surface. It also shows that the total force is not simply the pressure at the midpoint times the area, but rather the integral accounts for the variation of pressure with depth.

Suppose a rectangular wall:
  Width = 4 meters
  Height = 3 meters
  Top of the wall is at the water surface

We want to find the force exerted by water.

For water:
  ρ = 1000 kg/m³
and:
  g = 9.8 m/s²

Step 1: Define the variable
  Let y = depth below the water surface.

  The wall extends from:
    0 ≤ y ≤ 3

Step 2: Find the pressure
  P(y) = ρgy

  Substitute:
    P(y) = (1000)(9.8)y
    P(y) = 9800y

Step 3: Find the area of a thin strip
  The width is constant: w = 4
  The thickness is: dy

  Therefore:
    dA = 4dy

Step 4: Find the differential force
  dF = P(y) dA
  dF = (9800y)(4dy)
  dF = 39200y dy

Step 5: Integrate
  F = ∫₀³ 39200y dy
  F = 39200[y²/2]₀³
  F = 39200(9/2)
  F = 176,400 N

Therefore, the water exerts a total force of:
  176,400 Newtons

on the wall.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LIQUID PRESSURE VS. LIQUID FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to distinguish between liquid pressure and liquid force, as they are related but different concepts. Pressure is the force per unit area acting at a specific point, measured in Pascals (Pa). It depends only on depth, density, and gravity, not on the shape or size of the surface. Force, on the other hand, is the total push exerted by the liquid on an entire surface, measured in Newtons (N). It depends on both the pressure distribution and the area of the surface. For a uniform pressure (e.g., on a horizontal surface at constant depth), the force is simply P × A. However, when pressure varies with depth, we must integrate to find the total force. A simple way to remember the difference is that pressure tells you how strongly the liquid pushes at a specific location, while force tells you the total amount of push on an entire surface. This distinction is crucial in engineering, where both quantities are used to design structures that can withstand fluid forces.

These two concepts are related but different.

"image": "src/assets/16.png",

Simple way to remember:
  • Pressure = how strongly the liquid pushes at a specific location.
  • Force = the total amount of push on an entire surface.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON SHAPES IN LIQUID PRESSURE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Calculus problems involving liquid pressure often feature surfaces of various shapes, including rectangles, triangles, circles, trapezoids, and other irregular shapes. The general process for solving such problems remains the same regardless of the shape. We divide the surface into thin horizontal strips, each at a depth y with thickness dy and width w(y). The area of the strip is dA = w(y) dy, the pressure is P(y) = ρgy, and the differential force is dF = P(y) w(y) dy. By integrating this expression over the entire submerged surface, we obtain the total force. The key challenge is to express the width w(y) correctly as a function of depth for the given shape. For simple shapes like rectangles, the width is constant; for triangles or trapezoids, it varies linearly; for circles, it follows a square-root relationship. With a clear diagram and careful geometry, any shape can be handled using this integration technique.

Calculus problems may involve surfaces shaped like:
  • Rectangles
  • Triangles
  • Circles
  • Trapezoids
  • Other irregular shapes

The general process remains the same.

1. Divide the surface into thin strips: dA = w(y) dy
2. Find the depth of each strip: h = y
3. Find the pressure: P = ρgh
4. Find the differential force: dF = P dA
5. Integrate: F = ∫ dF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: TRIANGULAR SURFACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a triangular plate is submerged vertically in water, and the width of the plate changes linearly with depth. For example, if the plate is a right triangle with its apex at the water surface and its base at the bottom, the width at depth y might be proportional to y, such as w(y) = 2y. The pressure at depth y is P(y) = ρgy. The differential force on a strip at depth y is dF = P(y) w(y) dy = (ρgy)(2y) dy = 2ρgy² dy. Integrating this from the top to the bottom of the triangle gives the total force. This example illustrates why calculus is especially useful for surfaces with changing widths: the integral naturally accounts for the variation in area and pressure. The same approach works for any shape where the width is a known function of depth. This method is widely used in engineering for designing gates, tanks, and other submerged structures.

Suppose a triangular plate is submerged vertically in water.

The width of the plate may change as the depth changes.

For example:
  w(y) = 2y

The pressure is:
  P(y) = ρgy

The differential force becomes:
  dF = P(y) w(y) dy

Substitute:
  dF = (ρgy)(2y) dy
  dF = 2ρgy² dy

Then:
  F = ∫ 2ρgy² dy

The integral adds the force acting on every small horizontal strip.

This is why calculus is especially useful for surfaces with changing widths.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEP-BY-STEP STRATEGY FOR SOLVING PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a liquid pressure problem using calculus, follow this systematic strategy. First, draw the situation, identifying the liquid surface, the submerged object or plate, the depth, and the dimensions. Second, choose a variable, usually y, to represent the depth below the liquid surface. Third, find the pressure at depth y: P(y) = ρg h(y), where h(y) is the depth measured from the surface. Fourth, find the area of a small horizontal strip: dA = w(y) dy, where w(y) is the width of the strip at depth y. Fifth, find the differential force: dF = P(y) dA. Sixth, set up the integral F = ∫ₐᵇ P(y) w(y) dy, with appropriate limits corresponding to the submerged depth. Seventh, evaluate the integral to find the total force, which will be in Newtons. Following these steps ensures that you correctly account for the variation of pressure with depth and the geometry of the surface.

When solving a liquid pressure problem, follow these steps:

Step 1: Draw the situation
  Identify:
    • The liquid surface
    • The submerged object or plate
    • The depth
    • The dimensions

Step 2: Choose a variable
  Usually: y = depth

Step 3: Find the pressure
  Use: P(y) = ρg h(y)
  Be careful: the depth h must be measured from the surface of the liquid.

Step 4: Find the area of a small strip
  Usually: dA = w(y) dy
  where w(y) represents the width of the strip.

Step 5: Find the differential force
  dF = P(y) dA

Step 6: Set up the integral
  F = ∫ₐᵇ P(y) w(y) dy

Step 7: Evaluate the integral
  The result will usually be measured in Newtons (N).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several fundamental concepts are essential for understanding liquid pressure. First, pressure increases with depth: P = ρgh, so more depth means more liquid above the object, resulting in greater pressure. Second, pressure depends on the density of the liquid: a denser liquid produces greater pressure at the same depth. For example, at the same depth, mercury exerts much more pressure than water. Third, pressure acts in all directions: liquids exert pressure not only downward but also sideways and against the walls of containers and structures. This is why dams and underwater structures must be designed to withstand large sideways forces. Fourth, the bottom of a submerged surface experiences greater pressure than the top, which is why dams are usually thicker at the base than at the top. These concepts are critical for solving practical problems and for understanding the physical behaviour of fluids.

1. Pressure increases with depth:
   P = ρgh
   More depth means more liquid above the object.

2. Pressure depends on density:
   A denser liquid produces greater pressure at the same depth.
   For example, at the same depth:
     • Oil generally produces less pressure than water.
     • Water produces less pressure than a denser liquid.

3. Pressure acts in all directions:
   Liquids exert pressure not only downward but also:
     • Sideways
     • Against walls
     • Against the bottom of containers
   This is why dams and underwater structures must be designed to withstand large sideways forces.

4. The bottom experiences greater pressure:
   Because pressure increases with depth, structures such as dams are usually made thicker near the bottom.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Liquid Pressure:
    P = ρgh

  Pressure Definition:
    P = F/A

  Force from Pressure:
    F = PA

  Differential Area:
    dA = w(y) dy

  Differential Force:
    dF = P(y) dA

  Total Liquid Force:
    F = ∫ₐᵇ P(y) w(y) dy
  or:
    F = ρg ∫ₐᵇ h(y) w(y) dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important idea is that liquid pressure increases as depth increases because deeper points have more liquid above them. For a single point, P = ρgh. For the total force acting on a submerged surface, we divide the surface into tiny strips and add all the small forces using integration: F = ∫ P dA. This makes liquid pressure an important application of integration, especially in problems involving dams, tanks, swimming pools, underwater walls, and submerged plates. Understanding the relationship between pressure, depth, density, and force is essential for designing safe and effective structures that interact with liquids. The integration method allows us to account for varying pressure across a surface, providing exact values for the forces that must be resisted by supports and materials.

The most important idea is:

  Liquid pressure increases as depth increases because deeper points have 
  more liquid above them.

For a single point:
  P = ρgh

For the total force acting on a submerged surface, we divide the surface into 
tiny strips and add all the small forces using integration:
  F = ∫ P dA

This makes Liquid Pressure an important application of integration, especially 
in problems involving dams, tanks, swimming pools, underwater walls, and 
submerged plates.
  `,
  examples: [
    "Pressure at 5m depth in water: P = (1000)(9.8)(5) = 49,000 Pa",
    "Force on rectangular wall: width=4m, height=3m, top at surface → F = 176,400 N",
    "Pressure formula: P = ρgh",
    "Force from pressure: F = PA",
    "Differential force: dF = ρgy w(y) dy",
    "Total liquid force: F = ∫ₐᵇ ρgy w(y) dy",
    "Pressure increases with depth, density, and gravity",
  ],
};

export default topic;