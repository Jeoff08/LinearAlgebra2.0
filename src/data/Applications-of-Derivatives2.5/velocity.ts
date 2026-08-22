const topic = {
  id: "velocity",
  title: "Velocity",
  summary:
    "Definition of velocity, average vs instantaneous velocity, speed, acceleration, and motion analysis.",
  details: `
Velocity is one of the fundamental concepts in calculus and is closely connected to the derivative of a position function. It tells us not only how fast an object is moving, but also the direction in which it is moving.

The central relationship is: v(t) = s'(t)

where:
  • s(t) = position
  • v(t) = velocity
  • t = time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS VELOCITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity describes the rate at which an object's position changes with respect to time.

In calculus: v(t) = ds/dt

This means that velocity measures how quickly the position changes as time passes.

Example: s(t) = t² + 3t + 5

then: v(t) = s'(t)

Differentiate: v(t) = 2t + 3

So 2t + 3 tells us the object's instantaneous velocity at any time t.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. VELOCITY IS A VECTOR QUANTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity is different from speed because velocity includes direction.

For one-dimensional motion, we normally represent direction using positive and negative signs.

Positive velocity: v(t) > 0 means the object is moving in the positive direction.

Negative velocity: v(t) < 0 means the object is moving in the negative direction.

Zero velocity: v(t) = 0 means the object is momentarily at rest.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VELOCITY AS THE DERIVATIVE OF POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t³ - 4t² + 5t

To find velocity, differentiate: v(t) = s'(t)

Therefore: v(t) = 3t² - 8t + 5

So: v(t) = 3t² - 8t + 5 is the velocity function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. AVERAGE VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before understanding instantaneous velocity, it is useful to understand average velocity.

The average velocity from t = a to t = b is: v_avg = [s(b) - s(a)]/(b - a)

This is the change in position divided by the change in time.

In other words: Average velocity = (change in position)/(change in time)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE OF AVERAGE VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t² + 2t

Find the average velocity from t = 1 to t = 4.

First calculate: s(1) = 1² + 2(1) = 3

and: s(4) = 4² + 2(4) = 24

Therefore: v_avg = (24 - 3)/(4 - 1) = 21/3 = 7

The object's average velocity is 7 units per unit of time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INSTANTANEOUS VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Average velocity tells us how an object moves over an interval.

But sometimes we want to know the velocity at one specific instant.

This is called instantaneous velocity.

The instantaneous velocity is: v(t) = s'(t)

More formally: v(t) = lim(h→0) [s(t+h) - s(t)]/h

This is exactly the definition of the derivative.

Therefore: Instantaneous velocity = derivative of position.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity has a geometric interpretation.

If we graph the position function: y = s(t)

then the velocity at a particular time is the slope of the tangent line to the position graph.

Therefore: Velocity = slope of the position-time graph.

If the graph is increasing: v(t) > 0
If the graph is decreasing: v(t) < 0
If the graph has a horizontal tangent: v(t) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. VELOCITY AND DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: v(t) = t - 5

To determine the direction, examine when velocity is positive or negative.

Set: t - 5 = 0 → t = 5

For t < 5: v(t) < 0 → The object moves in the negative direction.

For t > 5: v(t) > 0 → The object moves in the positive direction.

Thus: t < 5: negative direction, t > 5: positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHEN IS AN OBJECT AT REST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An object is at rest when its velocity is zero.

Therefore, solve: v(t) = 0

Example: s(t) = t³ - 6t² + 9t

Velocity: v(t) = 3t² - 12t + 9

Factor: v(t) = 3(t - 1)(t - 3)

Set equal to zero: 3(t - 1)(t - 3) = 0

Therefore: t = 1, t = 3

The object is momentarily at rest at those times.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VELOCITY AND SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity and speed are related but different.

Velocity: v(t) = s'(t)

Speed: speed = |v(t)|

Suppose: v(t) = -15 m/s

Then:
  • Velocity = -15 m/s
  • Speed = 15 m/s

The negative sign tells us the direction.

So: Speed removes the directional sign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VELOCITY VS. SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity: Includes direction
Speed: Does not include direction

Velocity: Can be positive or negative
Speed: Always nonnegative

Velocity: v(t) = s'(t)
Speed: |v(t)|

Velocity: Vector quantity
Speed: Scalar quantity

Example: v = -20 means moving at 20 units per time in the negative direction.

But |v| = 20 means moving at a speed of 20 units per time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. VELOCITY AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is the rate of change of velocity.

Therefore: a(t) = v'(t)

Since: v(t) = s'(t), we also have: a(t) = s''(t)

So: s(t) → v(t) → a(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = 2t³ - 9t² + 12t

Position: s(t) = 2t³ - 9t² + 12t

Velocity: Differentiate → v(t) = 6t² - 18t + 12

Factor: v(t) = 6(t - 1)(t - 2)

Acceleration: Differentiate again → a(t) = 12t - 18

Now we have:
  s(t) = 2t³ - 9t² + 12t
  v(t) = 6(t - 1)(t - 2)
  a(t) = 12t - 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING DIRECTION USING VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: v(t) = 6(t - 1)(t - 2)

the critical values are: t = 1, t = 2

These divide the time interval into: (0, 1), (1, 2), (2, ∞)

0 < t < 1: Choose t = 0.5 → v(0.5) < 0 → moving in the negative direction.

1 < t < 2: Choose t = 1.5 → v(1.5) = 6(0.5)(-0.5) = -1.5 → still negative.

t > 2: Choose t = 3 → v(3) = 6(2)(1) = 12 → moving in the positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. VELOCITY AND SPEEDING UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity can also help us determine whether an object is speeding up or slowing down.

We compare: v(t) and a(t)

Same signs: The object is speeding up.
  • v > 0, a > 0
  • v < 0, a < 0

Opposite signs: The object is slowing down.
  • v > 0, a < 0
  • v < 0, a > 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: SPEEDING UP OR SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: v(t) = 2t - 6 and a(t) = 2

At t = 2: v(2) = 4 - 6 = -2 while a(2) = 2

So: v < 0, a > 0 → signs are opposite → The object is slowing down.

At t = 5: v(5) = 10 - 6 = 4 and a(5) = 2

Both are positive → signs are same → The object is speeding up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. VELOCITY OF AN OBJECT UNDER GRAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For vertical motion, acceleration due to gravity is approximately: a = -9.8 m/s²

If the initial velocity is v₀, then: v(t) = v₀ - 9.8t

Example: A ball is thrown upward with an initial velocity of 20 m/s.

Its velocity function is: v(t) = 20 - 9.8t

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FINDING MAXIMUM HEIGHT USING VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At maximum height, the object momentarily stops moving upward.

Therefore: v(t) = 0

For: v(t) = 20 - 9.8t

we solve: 20 - 9.8t = 0 → 9.8t = 20 → t = 20/9.8 ≈ 2.04 seconds

Thus, the ball reaches its maximum height approximately 2.04 seconds after being thrown.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. VELOCITY AND DISPLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity is directly connected to displacement.

If we know velocity: v(t)

then displacement over the interval [a, b] is: s(b) - s(a) = ∫ₐᵇ v(t) dt

This is an important connection between derivatives and integrals.

Derivative: s'(t) = v(t)

Integral: ∫v(t) dt = s(t) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. AVERAGE VELOCITY VS. INSTANTANEOUS VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Average Velocity: Over an interval
Instantaneous Velocity: At one instant

Average Velocity: [s(b)-s(a)]/(b-a)
Instantaneous Velocity: s'(t)

Average Velocity: Secant slope
Instantaneous Velocity: Tangent slope

Average Velocity: Uses two points
Instantaneous Velocity: Uses one point

Geometrically: Average velocity = slope of secant line, while Instantaneous velocity = slope of tangent line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. UNITS OF VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If position is measured in meters and time in seconds: s(t) = meters

then v(t) = ds/dt has units: meters per second (m/s)

Other examples include: km/h, ft/s, miles/hour, cm/s

The units always represent: distance/time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t³ - 6t² + 9t + 2

Find the velocity at t = 2.

Step 1: Differentiate position
  v(t) = 3t² - 12t + 9

Step 2: Substitute t = 2
  v(2) = 3(2)² - 12(2) + 9 = 12 - 24 + 9 = -3

Therefore, the object's velocity at t = 2 is: -3 units/time

The negative sign indicates that the object is moving in the negative direction.

Its speed is: |-3| = 3, so speed = 3 units/time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Position
Formula: s(t)

Concept: Average velocity
Formula: [s(b)-s(a)]/(b-a)

Concept: Instantaneous velocity
Formula: v(t) = s'(t)

Concept: Velocity definition
Formula: lim(h→0) [s(t+h)-s(t)]/h

Concept: Speed
Formula: |v(t)|

Concept: Acceleration
Formula: a(t) = v'(t) = s''(t)

Concept: Displacement
Formula: s(b) - s(a)

Concept: Displacement from velocity
Formula: ∫ₐᵇ v(t) dt

Concept: At rest
Formula: v(t) = 0

Concept: Positive direction
Formula: v(t) > 0

Concept: Negative direction
Formula: v(t) < 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Velocity, remember:

  • Velocity is the instantaneous rate of change of position.
  • The most important formula is: v(t) = s'(t)
  • From velocity, you can determine:
    • Direction: v > 0 or v < 0
    • Rest: v = 0
    • Speed: |v|
    • Acceleration: v'(t)
    • Displacement: ∫v(t) dt

The complete motion relationship is:

  Position → differentiate → Velocity → differentiate → Acceleration

or: s(t) → v(t) = s'(t) → a(t) = v'(t) = s''(t)

In short: position tells you where the object is, velocity tells you how its position is changing, and acceleration tells you how its velocity is changing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity is a fundamental concept in calculus that connects position, speed, and acceleration.

Key concepts covered:

  ✓ What Is Velocity?
  ✓ Velocity as a Vector Quantity
  ✓ Velocity as the Derivative of Position
  ✓ Average Velocity
  ✓ Instantaneous Velocity
  ✓ Geometric Interpretation
  ✓ Velocity and Direction
  ✓ When Is an Object at Rest?
  ✓ Velocity and Speed
  ✓ Velocity vs. Speed
  ✓ Velocity and Acceleration
  ✓ Speeding Up and Slowing Down
  ✓ Motion Under Gravity
  ✓ Maximum Height
  ✓ Velocity and Displacement
  ✓ Average vs. Instantaneous Velocity
  ✓ Units of Velocity
  `,
  examples: [
    "s(t) = t² + 3t + 5 → v(t) = 2t + 3",
    "s(t) = t³ - 4t² + 5t → v(t) = 3t² - 8t + 5",
    "s(t) = t² + 2t → average velocity from 1 to 4 = 7",
    "v(t) = t - 5 → negative direction for t < 5, positive for t > 5",
    "s(t) = t³ - 6t² + 9t → at rest at t = 1, 3",
    "v(t) = -15 m/s → speed = 15 m/s",
    "v(t) = 2t - 6, a(t) = 2 → at t=2: slowing down, at t=5: speeding up",
    "v(t) = 20 - 9.8t → maximum height at t ≈ 2.04 seconds",
    "s(t) = t³ - 6t² + 9t + 2 → v(2) = -3 units/time, speed = 3",
    "v(t) = s'(t)",
    "Speed = |v(t)|",
    "a(t) = v'(t) = s''(t)",
    "Average velocity: [s(b)-s(a)]/(b-a)",
    "Displacement: ∫ₐᵇ v(t) dt",
    "s(t) → v(t) → a(t)",
  ],
};

export default topic;