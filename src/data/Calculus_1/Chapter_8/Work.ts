// filename: work.ts

const topic = {
  id: "work",
  title: "Work",
  summary:
    "A measure of how much energy is transferred when a force causes an object to move, calculated as W = ∫ F(x) dx for variable forces, with applications to springs, lifting, and pumping.",
  details: `
In calculus and physics, work is a measure of how much energy is transferred when a force causes an object to move.

For example:
  • You push a box, and it moves forward → you do work.
  • You lift a backpack from the floor → you do work against gravity.
  • You push a wall, but it does not move → mathematically, no work is done because there is no displacement.

The basic idea is:
  Work happens when a force produces displacement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC FORMULA FOR WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a constant force acts in the same direction as the object's movement:
  W = Fd

Where:
  W = Work
  F = Force
  d = Displacement

The standard unit of work is the joule (J).
  1 Joule = 1 Newton · meter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE: CONSTANT FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you push a box with a force of 20 newtons for 5 meters.

  W = Fd

Substitute:
  W = 20(5)
  W = 100 J

Therefore, 100 joules of work are done.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WORK WHEN FORCE IS NOT CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In calculus, we are especially interested in situations where the force is not constant.

For example:
  • Stretching a spring
  • Pulling a rope
  • Pumping water
  • Lifting an object while its weight changes
  • Moving an object where resistance changes

If the force changes depending on the position x, we cannot simply use:
  W = Fd

because F is constantly changing.

Instead, we use an integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FORMULA FOR WORK WITH VARIABLE FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the force is represented by F(x) and an object moves from x = a to x = b, then the work done is:
  W = ∫ₐᵇ F(x) dx

This is the main calculus formula for work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE AN INTEGRAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine moving an object from x = a to x = b.

We can divide the distance into many tiny pieces: Δx.

For each tiny distance, the force is approximately constant. Therefore, the small amount of work is:
  ΔW ≈ F(x) Δx

Adding all the tiny amounts gives:
  W ≈ Σ F(xᵢ) Δx

As the pieces become infinitely small, the summation becomes an integral:
  W = ∫ₐᵇ F(x) dx

So, work is the accumulation of many tiny amounts of force multiplied by tiny distances.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: VARIABLE FORCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the force acting on an object is:
  F(x) = 3x² + 2

Find the work required to move the object from x = 0 to x = 4.

Step 1: Write the formula
  W = ∫₀⁴ F(x) dx

Substitute the force function:
  W = ∫₀⁴ (3x² + 2) dx

Step 2: Integrate
  ∫ (3x² + 2) dx = x³ + 2x

Therefore:
  W = [x³ + 2x]₀⁴

Step 3: Evaluate
  W = (4³ + 2(4)) - (0)
  W = 64 + 8
  W = 72 J

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WORK AND DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Force and displacement have direction.

The more complete physics formula is:
  W = Fd cos θ

where θ is the angle between the force and the direction of movement.

If force and movement are in the same direction:
  θ = 0°
  cos(0°) = 1
  Therefore: W = Fd

If the force is perpendicular to the movement:
  θ = 90°
  cos(90°) = 0
  Therefore: W = 0

For example, when carrying a bag horizontally, the force supporting the bag is upward while the movement is horizontal. The supporting force does no work in the direction of motion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POSITIVE AND NEGATIVE WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Work can be positive or negative.

Positive Work:
  Work is positive when the force helps the object's motion.
  Example: Pushing a shopping cart forward.
  W > 0

Negative Work:
  Work is negative when the force opposes the object's motion.
  Example: Friction slowing down a sliding box.
  W < 0

Zero Work:
  Work is zero when:
    • There is no movement, or
    • The force is perpendicular to the movement.
  W = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON APPLICATIONS OF WORK IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Work Done by a Spring:
  According to Hooke's Law, the force required to stretch or compress a spring is proportional to its displacement:
    F(x) = kx

  where:
    k = spring constant
    x = displacement

  The work required to stretch the spring from x = a to x = b is:
    W = ∫ₐᵇ kx dx

Example:
  Suppose k = 10.

  Find the work required to stretch the spring from 0 meters to 2 meters.

  W = ∫₀² 10x dx

  Integrate:
    W = 10[x²/2]₀²
    W = 5(4)
    W = 20 J

2. Work Done in Lifting Objects:
  Suppose an object has weight F(x), which may change depending on the situation.

  The work required to lift it through a distance is:
    W = ∫ₐᵇ F(x) dx

  If the weight is constant:
    W = Fd

  For example, lifting a 50 N object 3 meters:
    W = 50(3)
    W = 150 J

3. Work Done in Pumping Liquids:
  Calculus can calculate the work required to:
    • Pump water from a tank
    • Empty a swimming pool
    • Move oil from a container
    • Pump liquid to a certain height

  Different layers of liquid may need to travel different distances.

  We divide the liquid into thin slices.

  For each slice:
    Work = Force × Distance

  Then we add all the slices using integration:
    W = ∫ Force × Distance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL PROBLEM-SOLVING STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving work problems involving calculus:

Step 1: Understand the physical situation
  Ask:
    • What object is moving?
    • What force is acting?
    • How far does it move?

Step 2: Define a variable
  Usually x represents the position or displacement.

Step 3: Create the force function
  Express the force as F(x).

Step 4: Determine the limits
  Identify:
    a = starting position
    b = ending position

Step 5: Set up the integral
  W = ∫ₐᵇ F(x) dx

Step 6: Integrate and evaluate
  Solve the integral to find the total work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Constant Force:
    W = Fd

  Force at an Angle:
    W = Fd cos θ

  Variable Force:
    W = ∫ₐᵇ F(x) dx

  Spring Force:
    F(x) = kx

  Work for a Spring:
    W = ∫ₐᵇ kx dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important concept is:

  Work measures the energy transferred when a force moves an object through 
  a distance.

In basic situations:
  W = Fd

But when the force changes during the movement, calculus allows us to calculate the total work by adding infinitely many tiny amounts of work:
  W = ∫ₐᵇ F(x) dx

This makes Work an important application of integration, especially for problems involving springs, lifting objects, pumping liquids, and variable forces.
  `,
  examples: [
    "Constant force: F = 20N, d = 5m → W = 100 J",
    "Variable force: F(x) = 3x² + 2, from 0 to 4 → W = ∫₀⁴ (3x² + 2) dx = 72 J",
    "Spring force: k = 10, from 0 to 2 → W = ∫₀² 10x dx = 20 J",
    "Lifting: F = 50N, d = 3m → W = 150 J",
    "Work formula: W = ∫ₐᵇ F(x) dx",
    "Hooke's Law: F(x) = kx",
    "Work with angle: W = Fd cos θ",
  ],
};

export default topic;