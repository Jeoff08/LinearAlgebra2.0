// filename: center-of-mass-of-a-rod.ts

const topic = {
  id: "center-of-mass-of-a-rod",
  title: "Center of Mass of a Rod",
  summary:
    "The point where the mass of a rod can be considered to be concentrated for balance and motion, calculated using integration for nonuniform rods with variable density.",
  details: `
The center of mass is the point where the mass of an object can be considered to be concentrated for purposes of analyzing balance and motion.

For a simple example, imagine balancing a ruler on your finger. There is a particular point where the ruler can balance without tipping. That point is related to its center of mass.

For a rod, the center of mass depends on how the mass is distributed along its length.

If more mass is concentrated on one side of the rod, the center of mass moves toward that heavier side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNIFORM ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A uniform rod has the same density and mass distribution throughout its entire length.

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

A nonuniform rod does not have the same mass distribution everywhere.

For example:
  • One end may be thicker.
  • One section may be made of heavier material.
  • The density may change along the rod.

In this situation, the center of mass may not be at the midpoint.

This is where calculus becomes important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LINEAR DENSITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rod, we use something called linear density.

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

To find the total mass, add all the tiny pieces together.

Therefore:
  m = ∫ₐᵇ ρ(x) dx

This formula gives the total mass of a nonuniform rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MOMENT OF THE ROD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To locate the center of mass, we also need to consider how far each small piece of mass is from the origin.

The moment of a small piece is:
  dM = x dm

Since dm = ρ(x) dx, we get:
  dM = x ρ(x) dx

The total moment is:
  M = ∫ₐᵇ x ρ(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FORMULA FOR THE CENTER OF MASS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The center of mass of a rod is:
  x̄ = Total Moment / Total Mass

Using integrals:
  x̄ = (∫ₐᵇ x ρ(x) dx) / (∫ₐᵇ ρ(x) dx)

This is the main formula for the center of mass of a rod.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. UNDERSTANDING THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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