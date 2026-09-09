// filename: center-of-mass-of-a-rod.ts

const topic = {
  id: "center-of-mass-of-a-rod",
  title: "Center of Mass of a Rod",
  summary:
    "The point where the mass of a rod can be considered to be concentrated for balance and motion, calculated using integration for nonuniform rods with variable density.",
  details: `
The center of mass is the point where the mass of an object can be considered to be concentrated for purposes of analysing balance and motion. For a simple example, imagine balancing a ruler on your finger. There is a particular point where the ruler can balance without tipping. That point is related to its center of mass. For a rod, the center of mass depends on how the mass is distributed along its length. If more mass is concentrated on one side of the rod, the center of mass moves toward that heavier side. This concept is fundamental in physics and engineering because it allows us to simplify the analysis of objects by treating them as point masses located at their centers of mass. Understanding how to compute the center of mass using calculus is essential for analysing the stability and motion of rigid bodies, from simple rods to complex structures.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNIFORM ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A uniform rod has the same density and mass distribution throughout its entire length. This means that every small segment of the rod of equal length contains the same amount of mass. For such a rod, the center of mass is exactly halfway between the endpoints because the mass is symmetrically distributed. There is no reason for the balance point to favour one end over the other. For example, a uniform rod extending from x = 0 to x = 10 has its center of mass at x = 5, which is the midpoint. This symmetry makes uniform rods the simplest case to analyse. In many introductory physics problems, rods are assumed to be uniform unless stated otherwise, and the center of mass is simply taken as the midpoint. This assumption simplifies calculations and allows students to focus on other aspects of the problem before tackling the more complex case of nonuniform density.

For example, suppose a uniform rod extends from x = a to x = b.

Its center of mass is exactly halfway between the endpoints:
  x̄ = (a + b)/2

Example:
  A uniform rod extends from x = 0 to x = 10.

  Then:
    x̄ = (0 + 10)/2
    x̄ = 5

  The center of mass is located at x = 5, exactly in the middle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. NONUNIFORM ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A nonuniform rod does not have the same mass distribution everywhere. This means that the density varies along the length of the rod. For example, one end may be thicker, one section may be made of heavier material, or the density may change continuously according to some function of position. In such cases, the center of mass may not be at the midpoint. It will shift toward the region where the rod is denser or has more mass. This is where calculus becomes essential because we need to account for the varying density at each point along the rod. By using integration, we can sum the contributions of infinitely many tiny segments, each with its own density, to determine the exact location of the center of mass. This ability to handle varying density is what makes calculus so powerful in physics and engineering applications.

For example:
  • One end may be thicker.
  • One section may be made of heavier material.
  • The density may change along the rod.

In this situation, the center of mass may not be at the midpoint.

This is where calculus becomes important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LINEAR DENSITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rod, we use something called linear density, which describes how much mass is contained in each unit of length. It is represented by ρ(x) or sometimes δ(x), and it is defined as mass per unit length. The units of linear density might be kilograms per meter (kg/m) or grams per centimeter (g/cm). For a uniform rod, ρ(x) is constant, meaning every meter of the rod has the same mass. For a nonuniform rod, ρ(x) is a function of position, indicating that the mass per unit length varies along the rod. For example, ρ(x) = 2 means the rod has 2 kilograms of mass per meter everywhere. If ρ(x) = x + 1, then the density increases as x increases, meaning the right end of the rod is denser than the left end. Understanding linear density is crucial because it is the key quantity that determines both the total mass and the center of mass of the rod.

Linear density describes how much mass is contained in each unit of length.

It is represented by:
  ρ(x)

or sometimes:
  δ(x)

where:
  ρ(x) = mass/length

The units might be: kg/m

For example:
  ρ(x) = 2

means the rod has 2 kilograms of mass per meter everywhere.

If:
  ρ(x) = x + 1

then the density changes depending on the position x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SMALL PIECE OF THE ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the rod extends from x = a to x = b. Take a very small piece of the rod with length dx. The mass of this tiny piece is approximately dm = ρ(x) dx, where dm is the tiny amount of mass, ρ(x) is the linear density at that position, and dx is the tiny length. This small piece contributes to the total mass of the rod. The idea is to break the rod into infinitely many such infinitesimal pieces, each with its own mass. By summing the masses of all these pieces using integration, we can find the total mass of the rod. This approach is analogous to how we use integration to find areas under curves: we sum infinitely many small rectangles. The concept of dividing a continuous object into infinitesimal elements is a fundamental technique in calculus and is used extensively in physics and engineering to analyse continuous systems.

Suppose the rod extends from x = a to x = b.

Take a very small piece of the rod with length dx.

The mass of this tiny piece is approximately:
  dm = ρ(x) dx

where:
  dm = tiny amount of mass
  ρ(x) = linear density
  dx = tiny length of the rod

This small piece contributes to the total mass of the rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TOTAL MASS OF THE ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the total mass of the rod, we add all the tiny pieces together by integrating the density function over the length of the rod. The total mass is m = ∫ₐᵇ ρ(x) dx. This integral sums the mass of each infinitesimal segment from one end of the rod to the other. For a uniform rod with constant density ρ, the total mass is simply ρ times the length of the rod. For a nonuniform rod, the integral accounts for the varying density. This formula is the foundation for all calculations involving the mass of continuous objects. It is a direct application of the concept of integration as a summation of infinitesimal contributions. Understanding this formula is essential for solving problems involving the mass of rods, wires, and other one‑dimensional objects.

Therefore:
  m = ∫ₐᵇ ρ(x) dx

This formula gives the total mass of a nonuniform rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MOMENT OF THE ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To locate the center of mass, we also need to consider how far each small piece of mass is from the origin. The moment of a small piece is dM = x dm, which is the product of its position x and its mass dm. Since dm = ρ(x) dx, we get dM = x ρ(x) dx. The total moment is the integral of this quantity over the entire rod: M = ∫ₐᵇ x ρ(x) dx. The moment is a measure of the distribution of mass relative to the origin. A larger moment means that mass is concentrated farther from the origin, which affects the balance point. The concept of moment is fundamental in mechanics and is used to calculate torque, angular momentum, and the center of mass. In the context of a rod, the moment tells us how the mass is distributed along the length.

The moment of a small piece is:
  dM = x dm

Since dm = ρ(x) dx, we get:
  dM = x ρ(x) dx

The total moment is:
  M = ∫ₐᵇ x ρ(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FORMULA FOR THE CENTER OF MASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The center of mass of a rod is the ratio of the total moment to the total mass. This is a weighted average of the positions of all the infinitesimal mass elements, where the weight of each element is its mass. Mathematically, x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx). This formula tells us that the center of mass is the point where the rod would balance if supported there. It is a weighted average because positions with more mass contribute more to the average. This formula is the main result for the center of mass of a rod and is the basis for solving all such problems. It applies to both uniform and nonuniform rods, as long as the density function is known. The integration process effectively sums the contributions of all the infinitesimal mass elements to find the balance point.

The center of mass of a rod is:
  x̄ = Total Moment / Total Mass

Using integrals:
  x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx)

This is the main formula for the center of mass of a rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. UNDERSTANDING THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The numerator, ∫ₐᵇ x ρ(x) dx, measures how the mass is distributed relative to position. It is the sum of each small mass times its distance from the origin, which is the moment. The denominator, ∫ₐᵇ ρ(x) dx, gives the total mass of the rod. Therefore, the center of mass is the weighted position divided by the total mass. This is similar to finding a weighted average, where each position x is weighted by the mass at that position. The difference is that calculus is used because the rod contains infinitely many tiny pieces of mass, each with its own position and density. This formula is a direct application of the concept of integration as a summation of infinitesimal contributions. It shows how calculus allows us to find the balance point of a continuous object by summing the contributions of all its parts.

The numerator:
  ∫ₐᵇ x ρ(x) dx

measures how the mass is distributed relative to position.

The denominator:
  ∫ₐᵇ ρ(x) dx

gives the total mass.

Therefore:
  Center of Mass = Weighted Position / Total Mass

This is similar to finding a weighted average.

The difference is that calculus is used because the rod contains infinitely many tiny pieces of mass.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 1: UNIFORM ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rod extends from x = 0 to x = 6 and has constant density ρ(x) = 4. To find the center of mass, we first find the total mass by integrating the density over the length: m = ∫₀⁶ 4 dx = [4x]₀⁶ = 24. Next, we find the moment by integrating x times the density: M = ∫₀⁶ x(4) dx = 4∫₀⁶ x dx = 4[x²/2]₀⁶ = 4(18) = 72. Finally, we divide the moment by the total mass to get the center of mass: x̄ = M/m = 72/24 = 3. This result confirms that for a uniform rod, the center of mass is exactly at the midpoint of the rod, which in this case is x = 3. This example illustrates the general procedure and shows that the formula works as expected for the simplest case.

Suppose a rod extends from x = 0 to x = 6 and has constant density:
  ρ(x) = 4

Step 1: Find the total mass
  m = ∫₀⁶ 4 dx
  m = [4x]₀⁶
  m = 24

Step 2: Find the moment
  M = ∫₀⁶ x(4) dx
  M = 4∫₀⁶ x dx
  M = 4[x²/2]₀⁶
  M = 4(18)
  M = 72

Step 3: Find the center of mass
  x̄ = M/m
  x̄ = 72/24
  x̄ = 3

The center of mass is at the midpoint, as expected for a uniform rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2: NONUNIFORM ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a rod extends from x = 0 to x = 4 and has density ρ(x) = x + 1. This means the rod becomes denser as x increases, so we expect the center of mass to be closer to the right side. First, find the total mass: m = ∫₀⁴ (x + 1) dx = [x²/2 + x]₀⁴ = 16/2 + 4 = 8 + 4 = 12. Next, find the moment: M = ∫₀⁴ x(x + 1) dx = ∫₀⁴ (x² + x) dx = [x³/3 + x²/2]₀⁴ = 64/3 + 8 = 64/3 + 24/3 = 88/3. Finally, divide the moment by the total mass: x̄ = (88/3)/12 = 88/36 = 22/9 ≈ 2.44. Since the rod extends from 0 to 4, the midpoint would be 2. The center of mass is 2.44, which is farther to the right because the right side of the rod is denser. This example demonstrates how the center of mass shifts toward the region of higher density.

Suppose a rod extends from x = 0 to x = 4 and has density:
  ρ(x) = x + 1

This means the rod becomes denser as x increases.

We expect the center of mass to be closer to the right side.

Step 1: Find the total mass
  m = ∫₀⁴ (x + 1) dx

  Integrate:
    m = [x²/2 + x]₀⁴
    m = 16/2 + 4
    m = 8 + 4
    m = 12

Step 2: Find the moment
  M = ∫₀⁴ x(x + 1) dx

  Expand:
    M = ∫₀⁴ (x² + x) dx

  Integrate:
    M = [x³/3 + x²/2]₀⁴
    M = 64/3 + 8
    M = 64/3 + 24/3
    M = 88/3

Step 3: Find the center of mass
  x̄ = M/m
  x̄ = (88/3)/12
  x̄ = 88/36
  x̄ = 22/9

or approximately:
  x̄ ≈ 2.44

Since the rod extends from 0 to 4, the midpoint would be 2.

The center of mass is 2.44, which is farther to the right because the right side of the rod is denser.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY IS THE CENTER OF MASS A WEIGHTED AVERAGE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have two masses: a small mass at x = 1 and a large mass at x = 8. The larger mass has a greater influence on the balance point because it contributes more to the total moment. If you place a pivot at some point, the system will balance when the total moment on one side equals the total moment on the other. The center of mass is the point where the system would balance if supported there. The same idea applies to a rod. Each tiny piece dm has a position x and contributes x dm to the moment. Therefore, heavier parts of the rod have a greater effect on the center of mass. The center of mass is essentially the average position of all the mass, weighted by how much mass is at each position. This is why it is called a weighted average: positions with more mass contribute more to the final average.

Suppose you have two masses:
  • A small mass at x = 1
  • A large mass at x = 8

The larger mass has a greater influence on the balance point.

The same idea applies to a rod.

Each tiny piece dm has a position x and contributes x dm to the moment.

Therefore, heavier parts of the rod have a greater effect on the center of mass.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several important cases to consider when finding the center of mass of a rod. If the density is constant, ρ(x) = c, the constant cancels in the ratio, and the center of mass is simply the midpoint of the rod: x̄ = (a + b)/2. This is the case for a uniform rod. If the density increases as x increases, more mass is located on the right side, so the center of mass shifts to the right: x̄ > (a + b)/2. Conversely, if the density is greater near the left side, more mass is concentrated there, so the center of mass shifts to the left: x̄ < (a + b)/2. These cases illustrate the general principle that the center of mass moves toward the region where the rod is denser. Understanding these patterns helps in predicting the location of the center of mass without performing detailed calculations.

1. Constant Density:
  If ρ(x) = c where c is constant, then:
    x̄ = (∫ₐᵇ x c dx) / (∫ₐᵇ c dx)

  The constant c cancels, giving:
    x̄ = (a + b)/2

  So a uniform rod's center of mass is always at its midpoint.

2. Density Increases to the Right:
  If ρ(x) increases as x increases, more mass is located on the right side.
  Therefore, the center of mass moves toward the right.
    x̄ > (a + b)/2

3. Density Increases to the Left:
  If the density is greater near the left side, more mass is concentrated there.
  Therefore, the center of mass moves toward the left.
    x̄ < (a + b)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STEP-BY-STEP METHOD FOR SOLVING PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving problems involving the center of mass of a rod, follow these steps systematically. First, identify the interval over which the rod is defined, usually a ≤ x ≤ b. Second, identify the density function ρ(x), which may be given as a constant, a linear function, or a more complicated expression. Third, find the total mass by integrating the density function over the interval: m = ∫ₐᵇ ρ(x) dx. Fourth, find the moment by integrating x times the density function: M = ∫ₐᵇ x ρ(x) dx. Finally, divide the moment by the total mass to find the center of mass: x̄ = M/m. This procedure works for any rod, whether uniform or nonuniform, as long as the density function is known. Practicing this method builds confidence and ensures accurate results.

Step 1: Identify the interval
  Determine where the rod is located: a ≤ x ≤ b

Step 2: Identify the density function
  Write: ρ(x)

Step 3: Find the total mass
  Use: m = ∫ₐᵇ ρ(x) dx

Step 4: Find the moment
  Use: M = ∫ₐᵇ x ρ(x) dx

Step 5: Find the center of mass
  Divide the moment by the total mass:
    x̄ = M/m

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. PHYSICAL MEANING OF THE CENTER OF MASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The center of mass represents the rod's balance point. If you support the rod exactly at x = x̄, the rod will balance because the moments on both sides are equal. For a uniform rod, the center of mass is exactly in the middle. For a rod that is heavier on the right, the center of mass shifts toward the right. This shift reflects the fact that the right side has more mass, so it pulls the balance point in that direction. The center of mass is a crucial concept in mechanics because it allows us to treat the entire rod as a single point mass located at the center of mass for purposes of analysing translational motion. The rod's rotation around its center of mass is also easier to analyse because the center of mass is the point about which the rod naturally rotates when no external torque is applied.

The center of mass represents the rod's balance point.

If you support the rod exactly at x = x̄, the rod will balance.

For a uniform rod:
  0─────────────●─────────────10
                  ↑
             Center of Mass

The center is exactly in the middle.

For a rod that is heavier on the right:
  0───────────●───────────●─────────10
              Midpoint  Center of Mass
                         →
                   Heavier Side

The center of mass shifts toward the heavier side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Small Mass Element:
    dm = ρ(x) dx

  Total Mass:
    m = ∫ₐᵇ ρ(x) dx

  Moment About the Origin:
    M = ∫ₐᵇ x ρ(x) dx

  Center of Mass:
    x̄ = M/m
  or directly:
    x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important concept is that the center of mass of a rod is the balance point determined by how its mass is distributed along its length. For a uniform rod, the center of mass is simply the midpoint: x̄ = (a + b)/2. For a nonuniform rod, we must use integration to account for the variable density: x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx). Calculus allows us to treat the rod as being made of infinitely many tiny pieces of mass, calculate the contribution of each piece, and determine the exact point where the entire rod balances. This concept is fundamental in physics and engineering and is a beautiful application of integration to a real‑world problem. Understanding the center of mass is essential for analysing the stability, motion, and equilibrium of objects.

The most important concept is:

  The center of mass of a rod is the balance point determined by how its 
  mass is distributed along its length.

For a uniform rod:
  x̄ = (a + b)/2

For a nonuniform rod:
  x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx)

Calculus allows us to treat the rod as being made of infinitely many tiny 
pieces of mass, calculate the contribution of each piece, and determine the 
exact point where the entire rod balances.
  `,
  examples: [
    "Uniform rod from 0 to 10 → x̄ = (0+10)/2 = 5",
    "Uniform rod from 0 to 6 with ρ=4 → m=24, M=72, x̄=3",
    "Nonuniform rod from 0 to 4 with ρ=x+1 → m=12, M=88/3, x̄=22/9≈2.44",
    "dm = ρ(x) dx",
    "m = ∫ₐᵇ ρ(x) dx",
    "M = ∫ₐᵇ x ρ(x) dx",
    "x̄ = M/m = (∫ₐᵇ x ρ(x) dx)/(∫ₐᵇ ρ(x) dx)",
  ],
};

export default topic;