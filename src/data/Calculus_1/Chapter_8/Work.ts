// filename: work.ts

const topic = {
  id: "work",
  title: "Work",
  summary:
    "A measure of how much energy is transferred when a force causes an object to move, calculated as W = ∫ F(x) dx for variable forces, with applications to springs, lifting, and pumping.",
  details: `
In calculus and physics, work is a measure of how much energy is transferred when a force causes an object to move. For example, pushing a box across the floor involves doing work, as does lifting a backpack from the floor against gravity. However, if you push against a wall and it does not move, mathematically no work is done because there is no displacement. The basic idea is that work happens when a force produces displacement. This concept is fundamental in physics because it quantifies the energy transfer between systems. In calculus, we focus on situations where the force varies with position, making integration the natural tool for calculating the total work done. Understanding work is essential for analysing mechanical systems, designing machines, and solving problems in engineering and physics. The concept bridges the gap between force and energy, providing a quantitative measure of effort and energy transfer.

The basic idea is:
  Work happens when a force produces displacement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC FORMULA FOR WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a constant force acts in the same direction as the object's movement, the work done is simply the product of the force and the displacement. This is the simplest case and the foundation for understanding more complex situations. The formula W = Fd is intuitive: the more force you apply or the farther you move the object, the more work you do. The standard unit of work is the joule (J), which is equivalent to one newton-meter (N·m). This unit reflects the definition of work as force times distance. In everyday terms, one joule is approximately the work required to lift a small apple one metre vertically. While this constant-force formula is useful for many simple situations, real-world problems often involve forces that change, which is where calculus becomes essential. Understanding the basic formula is the first step toward analysing variable-force scenarios.

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

To see the constant-force formula in action, suppose you push a box with a force of 20 newtons for a distance of 5 metres. Applying W = Fd gives W = 20(5) = 100 J. This means you have transferred 100 joules of energy to the box through your pushing force. This simple calculation is used frequently in physics and engineering when forces are constant, such as pushing an object across a frictionless surface or lifting an object at constant speed. The calculation is straightforward because the force does not change during the motion. However, in many real-world situations, the force varies with position for example, when stretching a spring, the force increases as the spring is stretched further. In such cases, the constant-force formula is no longer sufficient, and we must turn to calculus to find the total work done. This example serves as a foundation before moving to variable forces.

Suppose you push a box with a force of 20 newtons for 5 meters.

  W = Fd

Substitute:
  W = 20(5)
  W = 100 J

Therefore, 100 joules of work are done.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WORK WHEN FORCE IS NOT CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In calculus, we are especially interested in situations where the force is not constant. Many physical processes involve forces that change with position: stretching a spring requires increasing force as it stretches further; pulling a rope over a pulley involves varying tension; pumping water from a tank requires lifting different layers to different heights; and moving an object through a resisting medium involves changing resistance. In all these cases, the force F depends on the position x, so we cannot simply use W = Fd. Instead, we must break the motion into infinitesimal steps, calculate the work done in each small step, and sum them using integration. This is a perfect application of the fundamental theorem of calculus, where the integral of a varying force over a displacement gives the total work. Understanding this distinction is crucial for correctly analysing work in real-world scenarios where forces are rarely constant.

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

If the force is represented by F(x) and an object moves from x = a to x = b, then the total work done is given by the definite integral of the force with respect to displacement. This is the fundamental calculus formula for work: W = ∫ₐᵇ F(x) dx. This formula generalises the constant-force case: if F is constant, the integral reduces to F(b - a) = Fd, matching the simple formula. The integral accounts for the fact that the force may vary continuously along the path, and it sums the contributions of infinitely many infinitesimal displacements. This formula is used extensively in physics and engineering to calculate work for variable forces, such as in spring systems, gravitational fields, and electromagnetic forces. It is a direct application of integration to a physical problem and demonstrates the power of calculus in analysing real-world phenomena.

If the force is represented by F(x) and an object moves from x = a to x = b, then the work done is:
  W = ∫ₐᵇ F(x) dx

This is the main calculus formula for work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE AN INTEGRAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral is used because it allows us to sum infinitely many infinitesimal contributions of work over a continuous displacement. Imagine moving an object from x = a to x = b. We can divide the distance into many tiny pieces, each of length Δx. For each tiny distance, the force is approximately constant, so the small amount of work is ΔW ≈ F(x) Δx. Adding all the tiny amounts gives W ≈ Σ F(xᵢ) Δx. As the pieces become infinitely small, this summation becomes an integral: W = ∫ₐᵇ F(x) dx. This is the same limiting process used to define the definite integral. The integral is the accumulation of work done over the entire path, where each infinitesimal segment contributes a tiny amount of work. This approach is valid for any continuous force function and is the foundation for analysing work in variable-force situations.

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

Suppose the force acting on an object is given by F(x) = 3x² + 2, where x is the position in metres. To find the work required to move the object from x = 0 to x = 4, we use the integral formula W = ∫₀⁴ F(x) dx. Substituting the force function gives W = ∫₀⁴ (3x² + 2) dx. Integrating term by term gives x³ + 2x, and evaluating from 0 to 4 yields (64 + 8) - 0 = 72 J. This example illustrates how the integral sums the varying force over the displacement. The force increases as x increases, so more work is done in the later part of the motion than in the earlier part. This is typical of variable-force problems: the integral naturally accounts for the changing force, providing an exact total work value. Such calculations are essential in mechanics, where forces often depend on position.

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

Force and displacement are vector quantities, meaning they have both magnitude and direction. The more complete physics formula for work is W = Fd cos θ, where θ is the angle between the force and the direction of movement. If the force and movement are in the same direction (θ = 0°), cos(0°) = 1, so W = Fd, the maximum work for a given force and distance. If the force is perpendicular to the movement (θ = 90°), cos(90°) = 0, so W = 0; this means no work is done by that force in the direction of motion. For example, when carrying a bag horizontally, the supporting force is upward while the movement is horizontal, so the supporting force does no work. Understanding the angle between force and displacement is crucial for correctly calculating work, especially in problems involving inclined planes, circular motion, or forces at an angle. The dot product of force and displacement vectors gives the scalar work.

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

Work can be positive, negative, or zero depending on the direction of the force relative to the displacement. Positive work occurs when the force helps the object's motion for example, when you push a shopping cart forward, the force and displacement are in the same direction, so work is positive. Negative work occurs when the force opposes the object's motion for example, friction slowing down a sliding box does negative work because the force of friction acts opposite to the displacement. Zero work occurs when there is no movement or when the force is perpendicular to the displacement. The sign of work is important because it indicates whether energy is being transferred to the object (positive work) or taken away from it (negative work). In physics, the work-energy theorem states that the net work done on an object equals its change in kinetic energy, so the sign of work directly relates to changes in the object's speed.

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

Work problems in calculus often involve springs, lifting, and pumping. For springs, Hooke's Law states that the force required to stretch or compress a spring is proportional to its displacement: F(x) = kx, where k is the spring constant. The work to stretch a spring from x = a to x = b is W = ∫ₐᵇ kx dx. For lifting objects, the work is the integral of the weight function over the lifting distance; if the weight is constant, W = Fd. Pumping liquids is another classic application: different layers of liquid must be lifted different distances, so we slice the liquid into thin horizontal layers, calculate the work to lift each layer, and integrate. These applications illustrate the power of integration in solving real-world engineering problems. Understanding these common scenarios is essential for mastering work problems in calculus.

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

When solving work problems involving calculus, follow these steps systematically. First, understand the physical situation: identify what object is moving, what force is acting, and how far it moves. Second, define a variable usually x to represent the position or displacement. Third, express the force as a function of position, F(x). This is often given by a physical law, such as Hooke's Law for springs, or derived from the geometry of the problem. Fourth, determine the limits of integration: the starting and ending positions. Fifth, set up the integral W = ∫ₐᵇ F(x) dx. Sixth, integrate and evaluate to find the total work. Following these steps ensures a clear and correct solution. Practicing with a variety of problems builds the skill of translating a physical situation into a mathematical integral. This process is the essence of applying calculus to physics and engineering.

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

The most important concept is that work measures the energy transferred when a force moves an object through a distance. In basic situations, W = Fd. But when the force changes during the movement, calculus allows us to calculate the total work by adding infinitely many tiny amounts of work: W = ∫ₐᵇ F(x) dx. This makes work an important application of integration, especially for problems involving springs, lifting objects, pumping liquids, and variable forces. Understanding work is essential for analysing mechanical systems, designing machines, and solving problems in engineering and physics. The integral formula is the natural extension of the basic formula to variable forces, and it demonstrates the power of calculus in quantifying energy transfer in real-world scenarios.

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