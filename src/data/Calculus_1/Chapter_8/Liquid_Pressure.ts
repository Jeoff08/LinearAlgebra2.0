// filename: liquid-pressure.ts

const topic = {
  id: "liquid-pressure",
  title: "Liquid Pressure",
  summary:
    "The force exerted by a liquid on a surface due to the weight of the liquid above it, calculated using P = ρgh for pressure and F = ∫ P dA for total force on submerged surfaces.",
  details: `
Liquid pressure is the force exerted by a liquid on a surface due to the weight of the liquid above it.

A liquid such as water has mass, and gravity pulls that mass downward. Because of this, the deeper you go into a liquid, the more liquid is above you, and therefore the greater the pressure.

For example:
  • At the surface of a swimming pool, the water pressure is relatively low.
  • At the bottom of the pool, the pressure is greater.
  • A deep-sea diver experiences much greater pressure than a swimmer near the surface.

The basic principle is:
  The deeper an object is submerged in a liquid, the greater the liquid 
  pressure acting on it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRESSURE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

Consider water in a container.

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

In many situations, a submerged surface extends vertically through different depths.

For example, consider a vertical wall submerged in water:

Water Surface
────────────────────
│                │
│                │ ← Less pressure
│                │
│                │
│                │ ← More pressure
│                │
└────────────────┘
      Bottom

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

For a vertical surface submerged in a liquid:
  F = ∫ₐᵇ P(y) w(y) dy

Since P(y) = ρgy, we get:
  F = ρg ∫ₐᵇ y w(y) dy

This is the main formula used in calculus problems involving liquid pressure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: FORCE ON A VERTICAL RECTANGULAR WALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

These two concepts are related but different.

  Concept   |  Meaning                          |  Formula      |  Unit
  ───────────┼───────────────────────────────────┼───────────────┼─────────────────
  Pressure  |  Force per unit area              |  P = ρgh     |  Pascal (Pa)
  Force     |  Total push on a surface          |  F = PA       |  Newton (N)

Simple way to remember:
  • Pressure = how strongly the liquid pushes at a specific location.
  • Force = the total amount of push on an entire surface.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON SHAPES IN LIQUID PRESSURE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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