// filename: instantaneous-velocity-in-rectilinear-motion.ts

const topic = {
  id: "instantaneous-velocity-in-rectilinear-motion",
  title: "Instantaneous Velocity in Rectilinear Motion",
  summary:
    "The velocity of an object at an exact moment in time while moving along a straight line, given by the derivative of position with respect to time: v(t) = s'(t).",
  details: `
Instantaneous velocity in rectilinear motion is an important application of the derivative in Calculus. It describes how fast an object is moving and in what direction at an exact moment in time. To understand this topic, imagine a car moving along a straight road. At any moment, the car may speed up, slow down, stop, or move in the opposite direction. Calculus allows us to determine the object's exact velocity at a specific instant. The key idea is that instantaneous velocity is the derivative of position with respect to time, written mathematically as v(t) = s'(t), where s(t) is the position function and t is time. This concept is fundamental because it connects the abstract idea of a derivative to the physical world of motion, providing the foundation for analysing speed, acceleration, and the behaviour of moving objects in physics, engineering, and everyday life.

The key idea is:

  Instantaneous velocity is the derivative of position with respect to time.

Mathematically:
  v(t) = s'(t)

where:
  s(t) = position of the object
  t = time
  v(t) = instantaneous velocity

"image": "src/assets/119.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS RECTILINEAR MOTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rectilinear motion means motion along a straight line. The term comes from the Latin roots "recti" meaning straight and "linear" meaning line. This type of motion is the simplest form of motion to analyse mathematically because it involves only one spatial dimension. Examples include a car moving along a straight road, an elevator going up or down, a ball thrown vertically, a train on a straight track, or a person walking in a straight line. In calculus, we represent the position of an object using a function of time, s(t), which gives the object's location at any time t. By studying rectilinear motion, we develop the tools to understand more complex motion in two or three dimensions, making it a fundamental starting point in physics and engineering. The simplicity of one‑dimensional motion allows us to focus on the core ideas of position, velocity, and acceleration without the added complexity of direction changes in multiple axes.

The word rectilinear comes from:
  Recti = straight
  Linear = line

Therefore, rectilinear motion simply means:
  The movement of an object along a straight path.

Examples include:
  • A car moving along a straight road
  • An elevator moving up or down
  • A ball moving vertically
  • A train moving along a straight track
  • A person walking in a straight direction

In Calculus, we usually represent the position of an object using a function:
  s(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POSITION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The position function, denoted s(t), tells us where an object is located at any particular time t. It is the fundamental quantity from which velocity and acceleration are derived. For example, if s(t) = t² + 3t, then at t = 2, the position is s(2) = 2² + 3(2) = 4 + 6 = 10. The units of position depend on the context they could be meters, kilometers, feet, or miles. The position function completely describes the motion of the object over time, and it is the starting point for all motion analysis. By understanding how position changes with time, we can determine how fast the object is moving (velocity) and how that speed itself is changing (acceleration). In real‑world applications, position functions can be obtained from measurements, experiments, or physical laws, and they serve as the basis for predicting future motion and analysing past behaviour.

For example:
  s(t) = t² + 3t

The value of s(t) represents the position of the object at time t.

If t = 2, then:
  s(2) = 2² + 3(2)
  = 4 + 6
  = 10

Therefore, at t = 2, the object is located at position 10.

The units could be:
  • Meters
  • Kilometers
  • Feet
  • Miles

depending on the problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. AVERAGE VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before learning instantaneous velocity, we need to understand average velocity. Average velocity measures the change in position over a time interval, giving us an overall sense of how fast the object moved during that period. The formula is v_avg = Δs/Δt = (s(t₂) - s(t₁))/(t₂ - t₁). This is a simple ratio: the total displacement divided by the total time elapsed. Average velocity does not tell us about variations in speed during the interval; it only gives the net rate of change. For example, if a car travels 8 units in 2 seconds, its average velocity is 4 units per second. However, the car may have been speeding up, slowing down, or even stopping during that time. Average velocity is useful for understanding overall motion but is insufficient for describing motion at a specific instant. This limitation leads naturally to the concept of instantaneous velocity, which captures the exact speed at a given moment.

Average velocity measures the change in position over a time interval.

The formula is:
  v_avg = Δs/Δt

or:
  v_avg = (s(t₂) - s(t₁))/(t₂ - t₁)

This tells us how fast the object moved on average during a period of time.

Example:
  Suppose s(t) = t².

  Find the average velocity from t = 1 to t = 3.

  First, find the positions:
    s(1) = 1² = 1
    s(3) = 3² = 9

  Now apply the formula:
    v_avg = (9 - 1)/(3 - 1)
    = 8/2
    = 4

  The average velocity is:
    4 units per second

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT IS INSTANTANEOUS VELOCITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity is the velocity of an object at one exact moment in time. Unlike average velocity, which considers a whole interval, instantaneous velocity zooms in on a single instant. For example, we might ask: "What is the velocity of a car exactly at 5 seconds?" or "What is the velocity of a falling object exactly at 2 seconds?" To find instantaneous velocity, we take the limit of the average velocity as the time interval shrinks to zero. This is precisely the definition of the derivative: v(t) = lim(h→0) (s(t + h) - s(t))/h. Thus, instantaneous velocity is the derivative of the position function with respect to time: v(t) = s'(t). This gives us the speed and direction of motion at any instant, allowing us to describe motion with great precision. Instantaneous velocity is what a speedometer in a car attempts to display the speed at that exact moment.

Instantaneous velocity is the velocity of an object at one exact moment.

For example:
  • What is the velocity of a car exactly at 5 seconds?
  • What is the velocity of a falling object exactly at 2 seconds?
  • What is the velocity of an elevator at a particular moment?

Average velocity gives information over an interval.

Instantaneous velocity gives information at a specific instant.

The formula is:
  v(t) = lim(h→0) (s(t + h) - s(t))/h

This is exactly the definition of the derivative.

Therefore:
  v(t) = s'(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FROM AVERAGE VELOCITY TO INSTANTANEOUS VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity is obtained by making the time interval smaller and smaller. Suppose we want the velocity at t = a. The average velocity from a to a + h is (s(a + h) - s(a))/h. As h approaches zero, the interval shrinks, and the average velocity over that tiny interval becomes closer and closer to the instantaneous velocity at a. In the limit, as h → 0, this quotient gives the exact instantaneous velocity. This limiting process is the same as the definition of the derivative, which is why calculus is the natural language for describing instantaneous rates of change. This transition from average to instantaneous is a key conceptual leap in calculus, moving from discrete approximations to exact values, and it is the foundation for all of differential calculus. Understanding this process is essential for applying derivatives to real‑world problems involving motion and change.

Suppose we want the velocity at t = a.

The average velocity from a to a + h is:
  (s(a + h) - s(a))/h

As h → 0, the second time gets closer and closer to the first time.

Therefore:
  v(a) = lim(h→0) (s(a + h) - s(a))/h

This gives the instantaneous velocity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE USING THE LIMIT DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To see the limit definition in action, suppose s(t) = t² and we want the instantaneous velocity at t = 3. We use the formula v(a) = lim(h→0) (s(a + h) - s(a))/h. Substituting a = 3, we compute s(3 + h) = (3 + h)² = 9 + 6h + h² and s(3) = 9. The difference is 6h + h², and dividing by h gives 6 + h. Taking the limit as h → 0 gives 6. Thus, the instantaneous velocity at t = 3 is 6 units per second. This example illustrates the core idea: we start with the average velocity over a small interval and then let that interval shrink to zero. The result is the exact velocity at the instant. While this method works, it is often easier to use differentiation rules once they are established, but the limit definition is the foundation upon which all derivative rules are built.

Suppose s(t) = t².

Find the instantaneous velocity at t = 3.

We use:
  v(a) = lim(h→0) (s(a + h) - s(a))/h

Substitute a = 3:
  v(3) = lim(h→0) (s(3 + h) - s(3))/h

Find:
  s(3 + h) = (3 + h)²

Expand:
  = 9 + 6h + h²

Also:
  s(3) = 9

Substitute:
  v(3) = lim(h→0) ((9 + 6h + h²) - 9)/h

Simplify:
  = lim(h→0) (6h + h²)/h

Factor:
  = lim(h→0) h(6 + h)/h

Cancel h:
  = lim(h→0) (6 + h)

Substitute:
  6

Therefore, the instantaneous velocity at t = 3 is:
  6 units per second

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. USING THE DERIVATIVE TO FIND VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usually, we do not need to use the limit definition every time. Once we know how to differentiate, we can simply find v(t) = s'(t) using standard differentiation rules. For example, if s(t) = 3t³ - 2t² + 5t, then differentiating term by term gives v(t) = 9t² - 4t + 5. To find the instantaneous velocity at a particular time, we substitute that value into the velocity function. For instance, at t = 2, v(2) = 9(4) - 8 + 5 = 33. This method is much faster than using the limit definition and is the standard approach in calculus problems. The derivative rules Power Rule, Sum Rule, Constant Multiple Rule make it easy to find velocity functions for a wide variety of position functions, including polynomials, trigonometric, exponential, and logarithmic functions. This efficiency is one of the main reasons calculus is so powerful for analysing motion.

Usually, we do not need to use the limit definition every time.

Once we know how to differentiate, we can simply find:
  v(t) = s'(t)

Example:
  Suppose s(t) = 3t³ - 2t² + 5t.

  Find the velocity function.

  Differentiate:
    v(t) = 9t² - 4t + 5

  Therefore:
    v(t) = 9t² - 4t + 5

  To find the instantaneous velocity at a particular time, substitute that value.

  For example, at t = 2:
    v(2) = 9(2)² - 4(2) + 5
    = 36 - 8 + 5
    = 33

  Therefore:
    v(2) = 33 units per second

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POSITIVE AND NEGATIVE VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity includes both speed and direction. The sign of velocity tells us the direction of motion along the coordinate axis. If v(t) > 0, the object is moving in the positive direction (typically to the right or upward). If v(t) < 0, the object is moving in the negative direction (to the left or downward). If v(t) = 0, the object is momentarily at rest it has stopped at that instant, though it may start moving again immediately. This sign information is crucial for understanding the full motion of an object, not just how fast it is going but also where it is heading. In many problems, determining the sign of velocity helps us analyse when an object changes direction, which is important for optimisation and for understanding the path of projectiles and other moving bodies.

The sign of velocity tells us the direction of motion.

Positive Velocity:
  If v(t) > 0, the object is moving in the positive direction.

Negative Velocity:
  If v(t) < 0, the object is moving in the negative direction.

Zero Velocity:
  If v(t) = 0, the object is momentarily at rest.

  However, being at rest does not necessarily mean the object will remain stopped.

  It may change direction after that moment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: DIRECTION OF MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let us analyse the motion of an object with position function s(t) = t³ - 6t² + 9t. The velocity is v(t) = 3t² - 12t + 9 = 3(t - 1)(t - 3). Setting v(t) = 0 gives t = 1 and t = 3, the times when the object is at rest. By examining the sign of v(t) on the intervals separated by these times, we can determine the direction of motion. For t < 1, v(t) is positive, so the object moves forward. Between 1 and 3, v(t) is negative, so it moves backward. For t > 3, v(t) is positive again, so it moves forward once more. This analysis shows that the object changes direction at t = 1 and t = 3. Understanding the sign of velocity is essential for describing the complete motion of an object, including when and where it reverses direction. This kind of analysis is widely used in physics and engineering to understand trajectories and paths.

Suppose s(t) = t³ - 6t² + 9t.

Find the velocity.

Differentiate:
  v(t) = 3t² - 12t + 9

Factor:
  v(t) = 3(t² - 4t + 3)
  v(t) = 3(t - 1)(t - 3)

The object has zero velocity when:
  t = 1 or t = 3

These are times when the object is momentarily at rest.

To determine the direction, examine the sign of v(t).

  Time Interval    Sign of v(t)    Motion
  ───────────────────────────────────────────────────────
  t < 1             Positive        Positive direction
  1 < t < 3         Negative        Negative direction
  t > 3             Positive        Positive direction

Therefore, the object:
  • Moves forward
  • Stops at t = 1
  • Moves backward
  • Stops at t = 3
  • Moves forward again

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VELOCITY VS. SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to understand the difference between velocity and speed. Velocity is a vector quantity, meaning it has both magnitude and direction. Speed, on the other hand, is a scalar quantity that measures only the magnitude of motion, regardless of direction. Mathematically, speed is the absolute value of velocity: speed = |v(t)|. For example, if v(t) = -15 m/s, the object is moving in the negative direction at 15 meters per second, but its speed is 15 m/s. Speed is always non‑negative, while velocity can be positive, negative, or zero. In everyday language, people often use the word "speed" when they actually mean velocity, but in physics and calculus, the distinction is crucial. Speed tells us how fast an object is going, while velocity tells us both how fast and in which direction. Understanding this difference is essential for correctly interpreting motion problems and for applying the correct formulas.

Velocity:
  Velocity includes direction.
  It can be:
    +10 m/s
  or:
    -10 m/s

Speed:
  Speed only measures how fast the object is moving.
  Speed is always nonnegative.

The formula is:
  Speed = |v(t)|

Example:
  If v(t) = -15 m/s, then the object is moving in the negative direction.

  Its speed is:
    |-15| = 15

  Therefore:
    Speed = 15 m/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RELATIONSHIP BETWEEN POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In rectilinear motion, three functions are closely connected through differentiation. The position function s(t) describes where the object is at any time. The velocity function v(t) = s'(t) describes how fast and in what direction the position is changing. The acceleration function a(t) = v'(t) = s''(t) describes how the velocity itself is changing over time. This hierarchy is fundamental: position changes produce velocity, and changes in velocity produce acceleration. Conversely, we can go backwards by integration: acceleration integrates to velocity, and velocity integrates to position. This relationship is the foundation of kinematics in physics and is used to analyse everything from falling objects to planetary motion. Understanding how these three quantities are connected through derivatives and integrals is essential for solving motion problems and for applying calculus to real‑world situations.

Position:
  s(t) tells us where the object is.

Velocity:
  v(t) = s'(t) tells us how fast and in what direction the position is changing.

Acceleration:
  a(t) = v'(t) = s''(t) tells us how the velocity is changing.

The relationship can be shown as:
  s(t) → v(t) → a(t)

Differentiate s(t) to get v(t).

Differentiate v(t) to get a(t).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose s(t) = 2t³ - 3t² + 4t. This is a polynomial position function. Differentiating once gives the velocity function: v(t) = 6t² - 6t + 4. Differentiating again gives the acceleration function: a(t) = 12t - 6. Thus, at any time t, we can compute the position, velocity, and acceleration. For example, at t = 1, s(1) = 2 - 3 + 4 = 3, v(1) = 6 - 6 + 4 = 4, and a(1) = 12 - 6 = 6. This means the object is at position 3, moving forward with velocity 4 units per second, and accelerating at 6 units per second². This complete description of motion is possible because of the derivative relationships between these functions. This example illustrates how calculus provides a full kinematic picture of an object's motion.

Suppose s(t) = 2t³ - 3t² + 4t.

Step 1: Find Velocity
  v(t) = 6t² - 6t + 4

Step 2: Find Acceleration
  a(t) = 12t - 6

Therefore:
  s(t) = 2t³ - 3t² + 4t
  v(t) = 6t² - 6t + 4
  a(t) = 12t - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INSTANTANEOUS VELOCITY AND THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity is directly connected to the tangent line to the position‑time graph. If position is represented by s(t), then the instantaneous velocity at time t = a is the slope of the tangent line to the position graph at that time. Therefore, v(a) = s'(a). This geometric interpretation is powerful: it connects the abstract concept of a derivative to the visual concept of a slope. A steep tangent line indicates a large velocity (fast motion), while a horizontal tangent line (slope zero) indicates that the object is momentarily at rest. The tangent line gives the instantaneous rate of change of position, which is exactly what we mean by instantaneous velocity. Understanding this connection helps in visualising motion and in interpreting graphs of position versus time. It also reinforces the idea that the derivative is a slope, and that slope is a rate of change.

If position is represented by s(t), then the instantaneous velocity at time t = a is the slope of the tangent line to the position graph at that time.

Therefore:
  v(a) = s'(a)

The tangent line tells us the instantaneous rate at which position is changing.

A steep tangent line means a large velocity.

A horizontal tangent line means v(t) = 0, which means the object is momentarily at rest.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a car's position is given by s(t) = 5t² + 2t, where s is measured in meters and t is measured in seconds. This is a quadratic position function, indicating constant acceleration. To find the instantaneous velocity at t = 4, we first find the velocity function by differentiating: v(t) = 10t + 2. Then we substitute t = 4: v(4) = 10(4) + 2 = 42 m/s. This means that exactly at 4 seconds, the car is moving at 42 meters per second in the positive direction. This is a typical problem in kinematics, where the position function is given and we need to find the velocity at a specific time. Such calculations are essential in physics and engineering for designing vehicles, predicting motion, and ensuring safety. The ability to compute instantaneous velocity from a position function is one of the most practical applications of derivatives.

Suppose a car's position is given by:
  s(t) = 5t² + 2t

where s is measured in meters and t is measured in seconds.

Find the instantaneous velocity at t = 4.

Step 1: Find the Velocity Function
  v(t) = 10t + 2

Step 2: Substitute t = 4
  v(4) = 10(4) + 2
  = 40 + 2
  = 42

Therefore, the instantaneous velocity is:
  42 m/s

This means that exactly at 4 seconds, the car is moving at 42 meters per second in the positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY INSTANTANEOUS VELOCITY IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity is useful because real‑world objects rarely move at a perfectly constant speed. Knowing the velocity at an exact moment allows us to describe motion with precision, which is essential in fields like physics, engineering, transportation, robotics, astronomy, and sports science. For example, a car's speedometer attempts to show the instantaneous speed of the car at that moment, giving the driver immediate feedback. In physics, instantaneous velocity is used to analyse collisions, projectiles, and orbital motion. In engineering, it helps in designing control systems for robots and vehicles. In sports science, it helps analyse the performance of athletes. The concept of instantaneous velocity also serves as a foundation for acceleration, which is the rate of change of velocity, and for more advanced topics like motion in multiple dimensions and dynamics.

It helps us understand motion at an exact moment.

It is used in:
  • Physics
  • Engineering
  • Transportation
  • Robotics
  • Astronomy
  • Sports science
  • Computer simulations

For example, a car's speedometer attempts to show the instantaneous speed of the car at that moment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEPS FOR SOLVING INSTANTANEOUS VELOCITY PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving problems involving instantaneous velocity, follow these steps systematically. First, identify the position function s(t) from the problem statement. Next, differentiate the position function with respect to time to obtain the velocity function v(t) = s'(t). Then, if a specific time is given, substitute that value into the velocity function to find the instantaneous velocity at that instant. Finally, interpret the result: a positive value means motion in the positive direction, a negative value means motion in the negative direction, and zero means the object is momentarily at rest. This procedure works for any position function that is differentiable, including polynomials, trigonometric functions, exponentials, and logarithms. By following these steps, you can efficiently solve a wide range of motion problems in calculus and physics.

Step 1: Identify the Position Function
  Usually: s(t)

Step 2: Differentiate
  Find: v(t) = s'(t)

Step 3: Substitute the Given Time
  If asked for velocity at t = a, calculate v(a).

Step 4: Interpret the Answer
  Positive → moving in the positive direction
  Negative → moving in the negative direction
  Zero → momentarily at rest

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"image": "src/assets/120.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity describes the velocity of an object at an exact moment in time while moving along a straight line. The most important formula is v(t) = s'(t), which means velocity is the derivative of position with respect to time. Using the limit definition, v(t) = lim(h→0) (s(t + h) - s(t))/h. The important relationship is that position leads to velocity, and velocity leads to acceleration: s(t) → s'(t) → s''(t). Velocity includes direction, so its sign indicates the direction of motion: positive for forward, negative for backward, zero for momentarily at rest. Speed is the absolute value of velocity, giving only the magnitude of motion. The most important idea to remember is that instantaneous velocity is the rate at which an object's position changes at one exact moment in time. This concept is one of the major applications of derivatives and forms the foundation for studying motion, acceleration, optimisation, and real‑world rates of change. Mastering it is essential for success in calculus and its applications in science and engineering.

The most important idea to remember is:

  Instantaneous velocity is the rate at which an object's position changes 
  at one exact moment in time.

This concept is one of the major applications of derivatives and forms the foundation for studying motion, acceleration, optimization, and real-world rates of change.
  `,
  examples: [
    "s(t) = t² → average velocity from 1 to 3: v_avg = 4",
    "s(t) = t² → instantaneous velocity at t = 3: v(3) = 6",
    "s(t) = 3t³ - 2t² + 5t → v(t) = 9t² - 4t + 5",
    "s(t) = t³ - 6t² + 9t → v(t) = 3(t-1)(t-3)",
    "Velocity sign: positive → forward, negative → backward, zero → at rest",
    "Speed = |v(t)|",
    "s(t) → v(t) → a(t)",
  ],
};

export default topic;