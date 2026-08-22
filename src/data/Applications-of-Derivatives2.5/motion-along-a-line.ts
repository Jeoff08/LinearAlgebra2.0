const topic = {
  id: "motion-along-a-line",
  title: "Motion Along a Line",
  summary:
    "Position, velocity, acceleration, speed, displacement, total distance, and applications in physics.",
  details: `
Motion Along a Line is one of the most important applications of derivatives in Calculus 1. It connects calculus with physics by using functions and derivatives to describe the position, velocity, and acceleration of a moving object.

The main idea is: Position → Velocity → Acceleration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS MOTION ALONG A LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Motion along a line describes an object moving back and forth along a straight path.

Examples include:
  • A car moving along a straight road
  • A ball moving vertically upward and downward
  • An elevator moving along a shaft
  • A train moving along a straight track
  • An object sliding along a horizontal surface
  • A particle moving along the x-axis

In calculus, we usually describe the object's location using a position function: s(t)

where:
  • s = position
  • t = time

The position function tells us where the object is at a particular time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POSITION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the position of an object is: s(t) = t² + 3t + 2

The value of s(t) tells us the object's position at time t.

Example: at t = 2:
  s(2) = 2² + 3(2) + 2 = 4 + 6 + 2 = 12

Therefore, at t = 2, the object is at position 12.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. POSITION VS. DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to distinguish between position and distance.

Position:
  Position tells us where the object is relative to a reference point.
  Example: s(t) = 5 means the object is 5 units from the origin in the positive direction.

Distance:
  Distance describes how far the object is from the reference point.
  If s(t) = -5, then the position is -5, but the distance from the origin is: |s(t)| = 5

So: Distance from origin = |s(t)|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The velocity of an object is the derivative of its position.

If s = s(t), then: v(t) = s'(t)

Velocity tells us how quickly the position is changing and in which direction.

Example: s(t) = t² + 3t + 2

Differentiate: v(t) = 2t + 3

Therefore: v(t) = 2t + 3 is the velocity function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VELOCITY AS A RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity is the instantaneous rate of change of position: v(t) = ds/dt

If v(t) = 10, then the object is moving at a rate of 10 units per unit of time in the positive direction.

If v(t) = -10, then it is moving at 10 units per unit of time in the negative direction.

The sign of velocity tells us direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POSITIVE AND NEGATIVE VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is extremely important.

If v(t) > 0, the object is moving in the positive direction.

If v(t) < 0, the object is moving in the negative direction.

If v(t) = 0, the object is momentarily at rest.

Therefore:
  • v > 0 → moving right/up
  • v < 0 → moving left/down
  • v = 0 → instantaneously stopped

The exact words "right/left" or "up/down" depend on how the positive direction is defined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration describes how velocity changes.

Since v(t) = s'(t), acceleration is: a(t) = v'(t)

Therefore: a(t) = s''(t)

So: s(t) → s'(t) = v(t) → s''(t) = a(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: FINDING POSITION, VELOCITY, AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t³ - 6t² + 9t

Step 1: Position
  s(t) = t³ - 6t² + 9t

Step 2: Velocity
  v(t) = 3t² - 12t + 9

Step 3: Acceleration
  a(t) = 6t - 12

So we have:
  s(t) = t³ - 6t² + 9t
  v(t) = 3t² - 12t + 9
  a(t) = 6t - 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING WHEN AN OBJECT IS AT REST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An object is at rest when its velocity is zero.

Therefore, solve: v(t) = 0

Using: v(t) = 3t² - 12t + 9

Set equal to zero: 3t² - 12t + 9 = 0

Divide by 3: t² - 4t + 3 = 0

Factor: (t - 1)(t - 3) = 0

Therefore: t = 1, t = 3

The object is at rest at: t = 1 and t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHEN IS THE OBJECT MOVING FORWARD OR BACKWARD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We use the sign of velocity.

We have: v(t) = 3(t - 1)(t - 3)

Critical times: t = 1, t = 3

These divide the time axis into intervals: (0, 1), (1, 3), (3, ∞)

Interval 0 < t < 1:
  Choose t = 0.5: v(0.5) < 0 → moving in the negative direction.

Interval 1 < t < 3:
  Choose t = 2: v(2) = 3(4) - 24 + 9 = -3 → moving in the negative direction.

Interval t > 3:
  Choose t = 4: v(4) = 48 - 48 + 9 = 9 → moving in the positive direction.

So: v(t) < 0 for 0 < t < 3, and v(t) > 0 for t > 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity and speed are not the same thing.

Velocity includes direction, while speed does not.

Speed is the absolute value of velocity: Speed = |v(t)|

Example: If v(t) = -20, then speed = |-20| = 20.

So the object is moving at 20 units per time in the negative direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. VELOCITY VS. SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quantity: Position
Formula: s(t)

Quantity: Velocity
Formula: v(t) = s'(t)

Quantity: Speed
Formula: |v(t)|

Quantity: Acceleration
Formula: a(t) = v'(t) = s''(t)

Remember: v(t) = s'(t), but speed = |s'(t)|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ACCELERATION AND DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration tells us how velocity changes.

Consider: v(t) = 10t - 4

Then: a(t) = 10

The positive acceleration means velocity is increasing.

However, positive acceleration does not automatically mean the object is moving forward.

We need to look at both velocity and acceleration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SPEEDING UP AND SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts in motion problems.

An object is speeding up when velocity and acceleration have the same sign.

An object is slowing down when velocity and acceleration have opposite signs.

Speeding up:
  • v > 0, a > 0
  • v < 0, a < 0

Slowing down:
  • v > 0, a < 0
  • v < 0, a > 0

Easy memory trick: Same signs = speeding up. Different signs = slowing down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: SPEEDING UP OR SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: v(t) = t - 4 and a(t) = 1

At t = 2: v(2) = 2 - 4 = -2 and a(2) = 1

Velocity is negative while acceleration is positive.

The signs are different.

Therefore: The object is slowing down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FINDING MAXIMUM AND MINIMUM POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Motion problems can also involve maximum and minimum positions.

Suppose: s(t) = -t² + 6t + 2

To find the maximum position, find where: v(t) = 0

First: v(t) = s'(t) = -2t + 6

Set equal to zero: -2t + 6 = 0 → t = 3

Now evaluate the position: s(3) = -(3)² + 6(3) + 2 = -9 + 18 + 2 = 11

Therefore: s_max = 11

The object reaches its maximum position at: t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. TOTAL DISTANCE TRAVELED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total distance is different from displacement.

Displacement is: s(b) - s(a)

But total distance requires us to account for changes in direction.

Example: s(t) = t² - 4t for 0 ≤ t ≤ 5

Velocity: v(t) = 2t - 4

Set velocity equal to zero: 2t - 4 = 0 → t = 2

So the object changes direction at t = 2.

Find positions:
  s(0) = 0
  s(2) = 4 - 8 = -4
  s(5) = 25 - 20 = 5

Distance from t = 0 to t = 2: |-4 - 0| = 4

Distance from t = 2 to t = 5: |5 - (-4)| = 9

Therefore: Total distance = 4 + 9 = 13

But displacement is: s(5) - s(0) = 5

Thus: Distance = 13 while Displacement = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DISPLACEMENT VS. TOTAL DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Displacement: s(b) - s(a) — Measures the net change in position.

Total distance: Measures the entire path traveled.

Therefore: Total distance ≥ |displacement|

They are equal only when the object does not change direction during the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. MOTION UNDER GRAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common applications of motion along a line is vertical motion.

Ignoring air resistance, an object's acceleration due to gravity is approximately:

  a(t) = -9.8 m/s² (if upward is positive)

Therefore:
  v(t) = v₀ - 9.8t
  s(t) = s₀ + v₀t - 4.9t²

where:
  • s₀ = initial position
  • v₀ = initial velocity
  • t = time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: OBJECT THROWN UPWARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a ball is thrown upward from a height of 2 meters with an initial velocity of 20 m/s.

The position function is: s(t) = 2 + 20t - 4.9t²

Velocity: v(t) = 20 - 9.8t

Acceleration: a(t) = -9.8

When does the ball reach maximum height?

At maximum height: v(t) = 0

Therefore: 20 - 9.8t = 0 → t = 20/9.8 ≈ 2.04

So the ball reaches its maximum height after approximately 2.04 seconds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE MOTION CHAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful concept to memorize is:

  s(t) → differentiate → v(t) → differentiate → a(t)

Going backward requires integration:
  a(t) → integrate → v(t) → integrate → s(t)

So: v(t) = s'(t) and a(t) = v'(t) = s''(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON QUESTIONS IN MOTION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a motion-along-a-line problem, you may be asked:

Position:
  "Where is the object?" — Use s(t)

Velocity:
  "How fast and in what direction is it moving?" — Use v(t) = s'(t)

Speed:
  "How fast is it moving?" — Use |v(t)|

Acceleration:
  "How quickly is velocity changing?" — Use a(t) = v'(t) = s''(t)

At rest:
  Set v(t) = 0

Moving right/forward:
  Find where v(t) > 0

Moving left/backward:
  Find where v(t) < 0

Speeding up:
  Check whether v(t) and a(t) have the same sign.

Slowing down:
  Check whether v(t) and a(t) have opposite signs.

Total distance:
  Find direction changes and add the distances traveled on each interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Motion Along a Line, remember:

  • Velocity is the derivative of position.
  • Acceleration is the derivative of velocity.
  • Speed is the absolute value of velocity.
  • v > 0: moving in the positive direction.
  • v < 0: moving in the negative direction.
  • v = 0: object is momentarily at rest.
  • Same signs of v and a: speeding up.
  • Opposite signs of v and a: slowing down.
  • Displacement = final position - initial position.
  • Total distance requires accounting for changes in direction.

The most important rules to remember:
  • s(t) → v(t) → a(t)
  • v(t) = s'(t)
  • a(t) = v'(t) = s''(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Motion Along a Line is one of the most important real-world applications of derivatives in Calculus.

Key concepts covered:

  ✓ What Is Motion Along a Line?
  ✓ Position Function
  ✓ Position vs. Distance
  ✓ Velocity
  ✓ Velocity as a Rate of Change
  ✓ Positive and Negative Velocity
  ✓ Acceleration
  ✓ Position, Velocity, Acceleration Example
  ✓ Finding When an Object Is at Rest
  ✓ Moving Forward or Backward
  ✓ Speed
  ✓ Velocity vs. Speed
  ✓ Acceleration and Direction
  ✓ Speeding Up and Slowing Down
  ✓ Maximum and Minimum Position
  ✓ Total Distance Traveled
  ✓ Displacement vs. Total Distance
  ✓ Motion Under Gravity
  ✓ Motion Chain
  ✓ Common Questions
  `,
  examples: [
    "s(t) = t² + 3t + 2 → v(t) = 2t + 3, a(t) = 2",
    "s(t) = t³ - 6t² + 9t → v(t) = 3t² - 12t + 9, a(t) = 6t - 12",
    "At rest: v(t) = 0 for s(t) = t³ - 6t² + 9t → t = 1, 3",
    "Moving forward/backward: v(t) > 0 for t > 3, v(t) < 0 for 0 < t < 3",
    "Speed: |v(t)| = |3t² - 12t + 9|",
    "Speeding up: v and a same sign",
    "Slowing down: v and a opposite signs",
    "s(t) = -t² + 6t + 2 → maximum position at t = 3, s_max = 11",
    "Total distance: s(t) = t² - 4t on [0,5] → total distance = 13",
    "Displacement: s(5) - s(0) = 5",
    "Motion under gravity: s(t) = s₀ + v₀t - 4.9t²",
    "Object thrown upward: s(t) = 2 + 20t - 4.9t² → max height at t ≈ 2.04",
    "v(t) = s'(t)",
    "a(t) = v'(t) = s''(t)",
    "s(t) → v(t) → a(t)",
  ],
};

export default topic;