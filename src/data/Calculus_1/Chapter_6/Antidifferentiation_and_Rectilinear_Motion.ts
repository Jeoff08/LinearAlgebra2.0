// filename: antidifferentiation-and-rectilinear-motion.ts

const topic = {
  id: "antidifferentiation-and-rectilinear-motion",
  title: "Antidifferentiation and Rectilinear Motion",
  summary:
    "Using antidifferentiation to determine velocity and position from acceleration, with the chain: acceleration → velocity → position through integration.",
  details: `
Antidifferentiation and rectilinear motion is an important application of derivatives and integrals in calculus. It explains how we can use antidifferentiation to determine velocity and position when acceleration is known.

The main idea is:
  Acceleration → Velocity → Position

using antidifferentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS RECTILINEAR MOTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rectilinear motion refers to the movement of an object along a straight line. This is the simplest form of motion because it involves only one spatial dimension, making it ideal for introducing the calculus concepts of position, velocity, and acceleration. In rectilinear motion, we can describe the object's location using a single coordinate, which simplifies the mathematics significantly. Examples of rectilinear motion include a car driving on a straight highway, a ball thrown straight up and falling back down, an elevator moving vertically between floors, or a train on a straight track. In all these cases, the object's motion is confined to a line, and its position can be fully described by a single function of time, typically denoted s(t) or x(t). Understanding rectilinear motion provides a foundation for analyzing more complex motion in multiple dimensions, as the principles of calculus applied to one-dimensional motion extend naturally to higher dimensions. This topic is also a classic application of the relationship between a function and its derivatives and integrals.

Rectilinear motion is the motion of an object along a straight line.

Examples include:
  • A car moving along a straight road
  • An elevator moving vertically
  • A ball falling straight downward
  • A train traveling along a straight track
  • An object moving back and forth along a line

Because the object moves along only one dimension, we can describe its motion using a single variable, usually s or x.

For example:
  s(t)

can represent the position of an object at time t.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The position function s(t) gives the location of the object relative to a reference point (the origin) at any time t. It is the fundamental quantity from which velocity and acceleration are derived. The position function can be positive, negative, or zero, depending on the object's location relative to the chosen origin. For example, in vertical motion, we might choose upward as positive, so a negative position would indicate the object is below the reference point. The position function is the starting point for kinematic analysis: by differentiating it, we obtain velocity and acceleration. Conversely, if we know acceleration, we integrate to find velocity, and then integrate again to find position. The position function is often given in meters, feet, or other units of length, with time measured in seconds. Understanding position is essential for describing where an object is and how its location changes over time.

The position function tells us where an object is located at a particular time.

We usually write:
  s = s(t)

where:
  s = position
  t = time

For example:
  s(t) = t² + 3

means that the object's position changes according to that equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DISPLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Displacement is the net change in position of an object over a time interval. It is a vector quantity, meaning it has both magnitude and direction, but in rectilinear motion, direction is indicated by sign. Displacement is calculated as the final position minus the initial position: Δs = s(t₂) - s(t₁). Unlike distance, which measures the total path length traveled, displacement only considers the starting and ending points. For example, if an object moves 10 meters forward and then 6 meters backward, its displacement is 4 meters (forward), while its total distance is 16 meters. Displacement can be positive, negative, or zero, depending on the net change in position. It is an important concept because it tells us the overall change in location, regardless of the path taken. In physics and engineering, displacement is often denoted by Δs or s₂ - s₁.

Displacement measures the change in position.

If an object moves from position s(t₁) to s(t₂), then its displacement is:
  Δs = s(t₂) - s(t₁)

Example:
  Suppose s(2) = 10 and s(5) = 25.

  Then:
    Δs = 25 - 10 = 15

  The object has moved 15 units in the positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity is the rate of change of position with respect to time. It tells us how fast the object's position is changing and in which direction. The velocity function v(t) is the derivative of the position function: v(t) = s'(t) = ds/dt. Velocity can be positive (moving in the positive direction), negative (moving in the negative direction), or zero (momentarily at rest). The magnitude of velocity is called speed, which is always non-negative. Velocity is a vector quantity, but in one-dimensional motion, its sign indicates direction. For example, if s(t) = t³ + 2t, then v(t) = 3t² + 2, which is always positive, meaning the object moves in the positive direction at all times. Understanding velocity is essential for analyzing motion because it tells us both the speed and direction of an object at any instant.

Velocity measures how quickly position changes with respect to time.

The velocity function is the derivative of the position function:
  v(t) = s'(t) = ds/dt

Therefore:
  Position → Velocity

For example, if s(t) = t³ + 2t, then:
  v(t) = 3t² + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is the rate of change of velocity with respect to time. It tells us how the object's velocity is changing whether it is speeding up, slowing down, or changing direction. The acceleration function a(t) is the derivative of the velocity function: a(t) = v'(t) = dv/dt. Since velocity is the derivative of position, acceleration is the second derivative of position: a(t) = s''(t). Acceleration can be positive (velocity increasing), negative (velocity decreasing), or zero (constant velocity). In the presence of gravity, acceleration is constant and directed downward, with magnitude approximately 9.8 m/s² on Earth. Understanding acceleration is crucial for analyzing motion because it describes the forces acting on the object and how they affect its velocity. For example, if a(t) = 6t, the acceleration is increasing with time, meaning the velocity changes more rapidly as time progresses.

Acceleration measures how quickly velocity changes.

Acceleration is the derivative of velocity:
  a(t) = v'(t) = dv/dt

Since v(t) = s'(t), we can also write:
  a(t) = s''(t)

Therefore:
  Position → Velocity → Acceleration

through differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ANTIDIFFERENTIATION REVERSES THE PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental insight of this topic is that antidifferentiation allows us to reverse the process of differentiation. If we know acceleration as a function of time, we can integrate it to find velocity, and then integrate velocity to find position. This is the inverse of the differentiation chain: position → velocity → acceleration. The process of integration introduces constants of integration, which are determined by initial conditions such as initial velocity and initial position. This ability to work backward from acceleration to position is incredibly powerful in physics and engineering, where we often know the forces (and hence acceleration) acting on an object and want to predict its future motion. The chain of antidifferentiation is summarized as: acceleration → velocity → position. This is one of the most important applications of integral calculus.

We can reverse the process using antidifferentiation:
  Acceleration → Velocity → Position

If we know acceleration a(t), we can find velocity by integrating:
  v(t) = ∫ a(t) dt

Then we can find position by integrating velocity:
  s(t) = ∫ v(t) dt

This is one of the most important applications of antidifferentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE RELATIONSHIP BETWEEN POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three quantities position, velocity, and acceleration are connected through differentiation and integration. Velocity is the derivative of position, and acceleration is the derivative of velocity. This means that acceleration is the second derivative of position. Conversely, velocity is the integral of acceleration, and position is the integral of velocity. This chain of relationships is the foundation of kinematic analysis. In calculus notation, we have v(t) = ds/dt and a(t) = dv/dt, so a(t) = d²s/dt². Going in reverse, v(t) = ∫ a(t) dt and s(t) = ∫ v(t) dt. Understanding this relationship is essential for solving motion problems, as it allows us to move between any of the three quantities using differentiation or integration. This is a prime example of how calculus is used to model and analyze real-world phenomena.

The three quantities are connected as follows:
  v(t) = ds/dt
and:
  a(t) = dv/dt

Therefore:
  a(t) = d²s/dt²

Going backward:
  v(t) = ∫ a(t) dt
and:
  s(t) = ∫ v(t) dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY DO WE GET CONSTANTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we antidifferentiate acceleration to obtain velocity, we introduce a constant of integration. This constant represents the initial velocity of the object, which is not determined by the acceleration function alone. Similarly, when we integrate velocity to obtain position, we introduce another constant representing the initial position. These constants are essential because they specify the particular motion among the infinite family of possible motions that share the same acceleration. Without these constants, we would only have the general form of the motion, not the specific trajectory. Initial conditions such as v(0) = v₀ and s(0) = s₀ are provided to determine these constants. For example, if we know the acceleration and the initial velocity and position, we can uniquely determine the position function. This is why motion problems always include initial conditions.

When we antidifferentiate acceleration to obtain velocity, we get a constant:
  v(t) = ∫ a(t) dt + C

That constant represents the initial velocity or information needed to determine the specific motion.

Similarly, when we integrate velocity to obtain position:
  s(t) = ∫ v(t) dt + C

That new constant is related to the initial position.

Therefore, motion problems frequently provide conditions such as:
  v(0) = v₀
and:
  s(0) = s₀

These allow us to determine the constants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. BASIC PROCEDURE FOR RECTILINEAR MOTION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solving rectilinear motion problems using antidifferentiation follows a consistent procedure. Start with the given acceleration function a(t). Integrate it once to obtain the general velocity function v(t), which includes a constant of integration. Use the given initial velocity to solve for that constant. Then integrate the velocity function to obtain the general position function s(t), which includes another constant. Use the given initial position to solve for that constant. The result is the specific position and velocity functions for the object. With these functions, you can answer a variety of questions: find the position or velocity at any time, determine when the object stops, find displacement, calculate distance traveled, or find maximum height. This procedure is systematic and works for any rectilinear motion problem where acceleration is given as a function of time.

When acceleration is given, use this process:

Step 1: Start with acceleration
  a(t)

Step 2: Antidifferentiate to find velocity
  v(t) = ∫ a(t) dt

Step 3: Use the initial velocity
  If v(t₀) = v₀, substitute it to determine the constant.

Step 4: Antidifferentiate velocity
  s(t) = ∫ v(t) dt

Step 5: Use the initial position
  If s(t₀) = s₀, use it to determine the second constant.

Step 6: Answer the question
  You may be asked to determine:
    • position
    • velocity
    • acceleration
    • displacement
    • distance traveled
    • when the object stops
    • when the object changes direction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 1: FINDING VELOCITY FROM ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's start with a simple example where we only need to find velocity from acceleration. Suppose an object has acceleration a(t) = 6t. To find the velocity, we integrate acceleration with respect to time: v(t) = ∫ 6t dt = 3t² + C. If we are given the initial velocity v(0) = 4, we substitute t = 0 and v(0) = 4 into the equation to find C: 4 = 3(0)² + C, so C = 4. Therefore, the velocity function is v(t) = 3t² + 4. This example shows how the constant of integration is determined by the initial condition. Without the initial velocity, we would only have the general form v(t) = 3t² + C, which represents an infinite family of possible velocity functions. The initial condition selects the one that matches the physical situation.

Suppose an object has acceleration:
  a(t) = 6t

Find its velocity if:
  v(0) = 4

We know:
  a(t) = dv/dt

Therefore:
  dv = 6t dt

Antidifferentiate:
  v(t) = ∫ 6t dt

Thus:
  v(t) = 3t² + C

Use:
  v(0) = 4

Therefore:
  4 = 3(0)² + C

So:
  C = 4

Therefore:
  v(t) = 3t² + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 2: FINDING POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now let's extend the previous example to find the position function. We already found v(t) = 3t² + 4. To find position, we integrate velocity: s(t) = ∫ (3t² + 4) dt = t³ + 4t + C. If we are given the initial position s(0) = 10, we substitute t = 0 and s(0) = 10: 10 = 0 + 0 + C, so C = 10. Therefore, the position function is s(t) = t³ + 4t + 10. This completes the chain: from acceleration a(t) = 6t, to velocity v(t) = 3t² + 4, to position s(t) = t³ + 4t + 10. The two constants of integration are determined by the initial velocity and initial position. This example illustrates the full process of going from acceleration to position using antidifferentiation.

Now suppose we also know:
  s(0) = 10

We already found:
  v(t) = 3t² + 4

Since:
  v(t) = ds/dt

we integrate:
  s(t) = ∫ (3t² + 4) dt

Therefore:
  s(t) = t³ + 4t + C

Use the initial position:
  s(0) = 10

Then:
  10 = 0 + 0 + C

Therefore:
  C = 10

The position function is:
  s(t) = t³ + 4t + 10

So we have:
  a(t) = 6t
  v(t) = 3t² + 4
  s(t) = t³ + 4t + 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. VERIFY THE SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is always good practice to verify the solution by differentiating. Starting with the position function s(t) = t³ + 4t + 10, we differentiate to get velocity: s'(t) = 3t² + 4, which matches the velocity function we found. Differentiating again gives s''(t) = 6t, which matches the original acceleration. This verification confirms that our antidifferentiation was correct and that the constants were determined properly. This check is a valuable habit because it catches any errors in the integration process. It also reinforces the inverse relationship between differentiation and integration, which is the foundation of calculus.

We can differentiate the position:
  s(t) = t³ + 4t + 10

First derivative:
  s'(t) = 3t² + 4

Thus:
  v(t) = 3t² + 4

Differentiate again:
  s''(t) = 6t

Thus:
  a(t) = 6t

Everything agrees with the original information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 3: OBJECT THROWN UPWARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A classic application of rectilinear motion is an object thrown vertically upward. In the absence of air resistance, the only force acting on the object is gravity, which produces a constant downward acceleration. If we choose upward as the positive direction, the acceleration is a(t) = -9.8 m/s² (approximately). Suppose a ball is thrown upward with an initial velocity of 20 m/s from an initial height of 5 meters. We want to find its position function. Integrating acceleration gives velocity: v(t) = -9.8t + C. Using v(0) = 20, we get C = 20, so v(t) = 20 - 9.8t. Integrating velocity gives position: s(t) = 20t - 4.9t² + C. Using s(0) = 5, we get C = 5, so s(t) = 5 + 20t - 4.9t². This is the familiar quadratic equation for vertical motion under gravity. This example demonstrates the power of antidifferentiation to model real-world physics.

Consider a ball thrown vertically upward.

Ignoring air resistance, the acceleration caused by gravity is approximately:
  a(t) = -9.8

The negative sign indicates that acceleration is downward if upward is chosen as the positive direction.

Suppose the ball is thrown with initial velocity:
  v(0) = 20 m/s

from an initial height:
  s(0) = 5 m

We want to find its position.

Step 1: Find velocity
  Since a(t) = -9.8, integrate:
    v(t) = ∫ -9.8 dt

  Therefore:
    v(t) = -9.8t + C

  Use:
    v(0) = 20

  Thus:
    20 = C

  So:
    v(t) = 20 - 9.8t

Step 2: Find position
  Integrate velocity:
    s(t) = ∫ (20 - 9.8t) dt

  Therefore:
    s(t) = 20t - 4.9t² + C

  Use:
    s(0) = 5

  Thus:
    C = 5

  Therefore:
    s(t) = 5 + 20t - 4.9t²

This equation describes the ball's height at any time t.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHEN DOES THE OBJECT REACH ITS MAXIMUM HEIGHT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At the maximum height, the object momentarily stops moving upward before beginning to fall back down. At this instant, the velocity is zero: v(t) = 0. Using the velocity function v(t) = 20 - 9.8t, we set 20 - 9.8t = 0 and solve for t: t = 20/9.8 ≈ 2.04 seconds. This is the time at which the ball reaches its highest point. This information is useful for determining the maximum height, the time of flight, and the behavior of the object. The condition v(t) = 0 is a key concept in projectile motion and is used to find turning points in any rectilinear motion where the object changes direction.

At the maximum height, the object momentarily stops moving upward.

Therefore:
  v(t) = 0

We have:
  v(t) = 20 - 9.8t

Set it equal to zero:
  20 - 9.8t = 0

Thus:
  9.8t = 20
  t = 20/9.8

Approximately:
  t ≈ 2.04 seconds

So the ball reaches its maximum height after approximately 2.04 seconds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FINDING THE MAXIMUM HEIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the maximum height, we substitute the time of maximum height into the position function. Using s(t) = 5 + 20t - 4.9t² and t ≈ 2.04, we calculate s(2.04) ≈ 5 + 20(2.04) - 4.9(2.04)² ≈ 25.41 meters. This is the highest point the ball reaches above the ground. The maximum height is an important quantity in projectile motion problems, as it represents the peak of the trajectory. It also illustrates how the position function can be used to answer specific questions about the motion once the function is known. The maximum height occurs when the velocity is zero, which is a fundamental relationship in kinematics.

Use:
  s(t) = 5 + 20t - 4.9t²

Substitute:
  t ≈ 2.04

The resulting height is approximately:
  25.41 m

Therefore, the ball reaches a maximum height of approximately 25.41 meters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. VELOCITY AND DIRECTION OF MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity not only tells us how fast an object is moving but also in which direction. In rectilinear motion, the sign of velocity indicates the direction: positive velocity means the object is moving in the positive direction, negative velocity means it is moving in the negative direction, and zero velocity means it is instantaneously at rest. For the ball thrown upward, v(t) = 20 - 9.8t. Before t ≈ 2.04, v(t) is positive, so the ball moves upward. After t ≈ 2.04, v(t) is negative, so the ball moves downward. This sign change indicates that the object changes direction at the maximum height. Understanding the sign of velocity is essential for analyzing motion and for calculating displacement and distance traveled.

Velocity tells us the direction of motion.

If v(t) > 0, the object moves in the positive direction.
If v(t) < 0, the object moves in the negative direction.
If v(t) = 0, the object is momentarily at rest.

For the ball:
  v(t) = 20 - 9.8t

Before t ≈ 2.04:
  v(t) > 0, so the ball moves upward.

After t ≈ 2.04:
  v(t) < 0, so the ball moves downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DISTANCE VS. DISPLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is crucial to distinguish between distance and displacement. Displacement is the net change in position, calculated as s(b) - s(a). It is a vector quantity that considers direction. Distance, on the other hand, is the total length of the path traveled, regardless of direction. It is a scalar quantity and is always non-negative. For example, if an object moves 10 meters forward and then 6 meters backward, its displacement is 4 meters, while its total distance is 16 meters. The difference arises because displacement accounts for the net change, while distance accounts for the total movement. In physics and calculus problems, you may be asked to find either displacement or distance, and it is important to know which one is being requested. To find distance when velocity changes sign, you must break the motion into intervals and sum the absolute values of displacement in each interval.

This distinction is very important.

Displacement:
  Displacement is s(t₂) - s(t₁).
  It considers direction.

Distance:
  Distance measures the total amount of ground traveled, regardless of direction.

For example, suppose an object moves:
  10 m forward
and then:
  6 m backward

Its displacement is:
  10 - 6 = 4 m

But its total distance is:
  10 + 6 = 16 m

Therefore:
  Distance ≠ Displacement

in general.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FINDING DISTANCE FROM VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If velocity does not change sign on an interval, the distance traveled is simply the absolute value of the displacement: |s(b) - s(a)|. However, if velocity changes sign, the object reverses direction, and the total distance is the sum of the absolute values of displacement over each interval where velocity has a constant sign. To find these intervals, we solve v(t) = 0 to find the times when the direction changes. Then we compute the displacement on each subinterval and take the absolute value, summing them to get the total distance. This method is essential for correctly calculating distance traveled when the motion involves reversals. It is a common application of the relationship between position, velocity, and displacement.

If velocity never changes sign on an interval, distance can be found using:
  Distance = |s(b) - s(a)|

However, if velocity changes direction, we need to divide the interval at the points where:
  v(t) = 0

Then calculate the distance traveled during each section and add the absolute values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: DIRECTION CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider an object with velocity v(t) = t² - 4. To find when the object changes direction, we set v(t) = 0 and solve: t² - 4 = 0, so t = ±2. If we are considering time t ≥ 0, the relevant time is t = 2. To determine the direction of motion, we check the sign of velocity on each interval. For 0 < t < 2, v(t) < 0, so the object moves in the negative direction. For t > 2, v(t) > 0, so the object moves in the positive direction. Therefore, the object changes direction at t = 2. This is an important step in analyzing motion because it allows us to break the motion into segments where velocity has a constant sign, which is necessary for calculating total distance traveled.

Suppose:
  v(t) = t² - 4

Find when the object changes direction.

Set velocity equal to zero:
  t² - 4 = 0

Factor:
  (t - 2)(t + 2) = 0

Therefore:
  t = ±2

If we are considering t ≥ 0, the relevant time is:
  t = 2

Check the sign:
  For 0 < t < 2:
    t² - 4 < 0
  So the object moves in the negative direction.

  For t > 2:
    t² - 4 > 0
  So it moves in the positive direction.

Therefore, the object changes direction at:
  t = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. ACCELERATION DOES NOT ALWAYS MEAN THE OBJECT IS SPEEDING UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common misconception is that positive acceleration means the object is speeding up. This is not always true. The object speeds up when velocity and acceleration have the same sign. If both are positive, the object moves in the positive direction and accelerates, so it speeds up. If both are negative, the object moves in the negative direction and accelerates in the negative direction, so its speed (magnitude of velocity) also increases. Conversely, if velocity and acceleration have opposite signs, the object slows down. For example, a ball thrown upward has a positive velocity but negative acceleration (gravity), so it slows down as it rises. Understanding this relationship is important for correctly interpreting the motion. Speed is the absolute value of velocity, and its rate of change depends on the relative signs of velocity and acceleration.

This is an important concept.

Many students think:
  Positive acceleration means the object is speeding up.

That is not always true.

Speed increases when velocity and acceleration have the same sign.

Same signs:
  v > 0, a > 0 → The object speeds up.
  v < 0, a < 0 → The object also speeds up.

Opposite signs:
  v > 0, a < 0 → The object slows down.
  v < 0, a > 0 → The object also slows down.

So:
  Same signs ⇒ speeding up
  Opposite signs ⇒ slowing down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. RECTILINEAR MOTION AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationships between position, velocity, and acceleration can be seen graphically. The position graph s(t) shows the location of the object over time. The slope of the position graph at any point is the velocity at that time. The velocity graph v(t) shows the rate of change of position. The slope of the velocity graph is the acceleration. The acceleration graph a(t) shows the rate of change of velocity. Understanding these graphical relationships is essential for interpreting motion graphs and for visualizing the motion of an object. For example, a positive slope on the position graph means the object is moving in the positive direction, while a negative slope means it is moving in the negative direction. A zero slope means the object is momentarily at rest. Similarly, a positive slope on the velocity graph means the object is accelerating in the positive direction. These graphical interpretations are a powerful tool for analyzing motion.

The three main graphs are connected.

Position graph:
  s(t)
  Its slope gives velocity: s'(t) = v(t)

Velocity graph:
  v(t)
  Its slope gives acceleration: v'(t) = a(t)

Acceleration graph:
  a(t)
  tells us how velocity changes.

Therefore:
  slope of position = velocity
and:
  slope of velocity = acceleration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. ANTIDIFFERENTIATION FROM AN ACCELERATION GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If acceleration is given as a function of time, we can integrate it to find velocity. The general formula is v(t) = v(t₀) + ∫ₜ₀ᵗ a(u) du. This means the velocity at time t is the initial velocity plus the accumulated change in velocity due to acceleration. Similarly, position is given by s(t) = s(t₀) + ∫ₜ₀ᵗ v(u) du. These formulas are particularly useful when dealing with measured or graphical data, where integration can be approximated using numerical methods. They also highlight the cumulative nature of integration: velocity is the accumulation of acceleration over time, and position is the accumulation of velocity over time. This is a fundamental concept in integral calculus and its applications.

If acceleration is given as a function of time, we can integrate it to obtain velocity:
  v(t) = v(t₀) + ∫ₜ₀ᵗ a(u) du

Then position can be obtained using:
  s(t) = s(t₀) + ∫ₜ₀ᵗ v(u) du

These formulas are especially useful when dealing with measured or graphical data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial conditions are essential for determining the constants of integration in motion problems. The initial velocity v(t₀) = v₀ tells us the velocity at the starting time, which is used to find the constant after integrating acceleration. The initial position s(t₀) = s₀ tells us the position at the starting time, which is used to find the constant after integrating velocity. These initial conditions are often given in the problem statement or are known from the physical situation. Without them, we would have an infinite number of possible solutions. For example, if we know the acceleration and initial velocity, we can find the velocity function; if we also know the initial position, we can find the position function. Initial conditions are a crucial part of solving differential equations and modeling real-world systems.

Two pieces of information are especially common.

Initial velocity:
  v(t₀) = v₀
  This determines the constant after integrating acceleration.

Initial position:
  s(t₀) = s₀
  This determines the constant after integrating velocity.

For example:
  a(t) → v(t) + C₁
then:
  v(t) → s(t) + C₂

So there are generally two constants when starting with acceleration and finding position.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a complete example from start to finish. An object moves along a straight line with acceleration a(t) = 4t - 6. Its initial velocity is v(0) = 8, and its initial position is s(0) = 3. We need to find v(t) and s(t). First, integrate acceleration: v(t) = ∫ (4t - 6) dt = 2t² - 6t + C₁. Using v(0) = 8, we get C₁ = 8, so v(t) = 2t² - 6t + 8. Next, integrate velocity: s(t) = ∫ (2t² - 6t + 8) dt = (2/3)t³ - 3t² + 8t + C₂. Using s(0) = 3, we get C₂ = 3, so s(t) = (2/3)t³ - 3t² + 8t + 3. To verify, differentiate s(t): s'(t) = 2t² - 6t + 8, which matches v(t). Differentiate again: s''(t) = 4t - 6, which matches a(t). This confirms the solution. This example demonstrates the full procedure and the verification step.

An object moves along a straight line with acceleration:
  a(t) = 4t - 6

Its initial velocity is:
  v(0) = 8

and its initial position is:
  s(0) = 3

Find v(t) and s(t).

Step 1: Integrate acceleration
  v(t) = ∫ (4t - 6) dt

Therefore:
  v(t) = 2t² - 6t + C₁

Use:
  v(0) = 8

Thus:
  8 = C₁

Therefore:
  v(t) = 2t² - 6t + 8

Step 2: Integrate velocity
  s(t) = ∫ (2t² - 6t + 8) dt

Therefore:
  s(t) = (2/3)t³ - 3t² + 8t + C₂

Use:
  s(0) = 3

Therefore:
  C₂ = 3

So:
  s(t) = (2/3)t³ - 3t² + 8t + 3

Step 3: Verify
  Differentiate:
    s'(t) = 2t² - 6t + 8
  This is v(t).

  Differentiate again:
    s''(t) = 4t - 6
  This is a(t).

Everything is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key quantities in rectilinear motion and their relationships. Position is the location of the object. Displacement is the change in position. Velocity is the rate of change of position, and acceleration is the rate of change of velocity. Velocity can be obtained from acceleration by integration, and position can be obtained from velocity by integration. Speed is the magnitude of velocity. This table provides a quick reference for the definitions and formulas used in motion problems. It is a useful study aid and reminder of the connections between the quantities.

  Quantity          Meaning                           Formula
  ────────────────────────────────────────────────────────────────────
  Position          Location of object                s(t)
  Displacement      Change in position                s(b) - s(a)
  Velocity          Rate of change of position        v = s'
  Acceleration      Rate of change of velocity        a = v' = s''
  Velocity from     Antidifferentiate acceleration    v = ∫ a dt + C
  Position from     Antidifferentiate velocity        s = ∫ v dt + C
  Speed             Magnitude of velocity             |v(t)|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. THE COMPLETE RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The entire topic can be summarized by the two chains of operations. Differentiation moves from position to velocity to acceleration: s(t) → v(t) → a(t). Antidifferentiation moves in the reverse direction: a(t) → v(t) → s(t). Both directions are essential for solving motion problems. Differentiation is used when we have position and want to find velocity or acceleration, while integration is used when we have acceleration and want to find velocity or position. This duality is a central theme in calculus and is beautifully illustrated by the study of rectilinear motion. Understanding this relationship allows you to solve a wide range of problems involving motion, from simple free-fall to more complex variable acceleration scenarios.

The entire topic can be remembered using this diagram:

  s(t) → v(t) → a(t)

and in reverse:

  a(t) → v(t) → s(t)

Or:

  Position → Velocity → Acceleration
  Acceleration → Velocity → Position

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. KEY IDEAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important formulas for rectilinear motion are the definitions of velocity and acceleration as derivatives, and their corresponding antiderivatives. Velocity is the derivative of position: v(t) = ds/dt. Acceleration is the derivative of velocity: a(t) = dv/dt = d²s/dt². Going in reverse, velocity is the integral of acceleration: v(t) = ∫ a(t) dt + C₁. Position is the integral of velocity: s(t) = ∫ v(t) dt + C₂. For rectilinear motion, remember that position tells where the object is, velocity tells how fast and in which direction, and acceleration tells how velocity is changing. Antidifferentiation lets us work backward from acceleration to velocity and from velocity to position. The most useful chain to memorize is Acceleration → Velocity → Position when antidifferentiating, and Position → Velocity → Acceleration when differentiating. This is the essence of the topic.

The most important formulas are:

  v(t) = ds/dt
  a(t) = dv/dt = d²s/dt²

and, using antidifferentiation:

  v(t) = ∫ a(t) dt + C₁
  s(t) = ∫ v(t) dt + C₂

For rectilinear motion, remember:
  • Position tells where the object is.
  • Velocity tells how fast and in which direction the position is changing.
  • Acceleration tells how velocity is changing.

Antidifferentiation lets us work backward from acceleration to velocity and from velocity to position.

The most useful chain to memorize is:

  Acceleration → Velocity → Position

when antidifferentiating, and

  Position → Velocity → Acceleration

when differentiating.
  `,
  examples: [
    "a(t) = 6t, v(0) = 4 → v(t) = 3t² + 4",
    "v(t) = 3t² + 4, s(0) = 10 → s(t) = t³ + 4t + 10",
    "a(t) = -9.8, v(0) = 20, s(0) = 5 → s(t) = 5 + 20t - 4.9t²",
    "v(t) = 20 - 9.8t → max height at t = 20/9.8 ≈ 2.04s",
    "v(t) = t² - 4 → changes direction at t = 2",
    "a(t) = 4t - 6, v(0) = 8, s(0) = 3 → v(t) = 2t² - 6t + 8, s(t) = (2/3)t³ - 3t² + 8t + 3",
    "Speed = |v(t)|, displacement = s(b) - s(a)",
  ],
};

export default topic;