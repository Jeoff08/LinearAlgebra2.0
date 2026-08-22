const topic = {
  id: "acceleration",
  title: "Acceleration",
  summary:
    "Definition of acceleration, average vs instantaneous acceleration, speeding up and slowing down, and motion under gravity.",
  details: `
Acceleration is the rate at which an object's velocity changes with respect to time. It is the next major concept after position and velocity in Calculus 1.

The basic relationship is: a(t) = v'(t)

Since velocity is the derivative of position, v(t) = s'(t), acceleration is the second derivative of position: a(t) = s''(t)

So the complete relationship is: s(t) → v(t) → a(t)

where:
  • s(t) = position
  • v(t) = velocity
  • a(t) = acceleration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS ACCELERATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration tells us how quickly velocity is changing.

Example: Suppose a car's velocity changes from 10 m/s to 20 m/s in 5 seconds.

Its average acceleration is: a_avg = Δv/Δt = (20 - 10)/5 = 2 m/s²

This means the velocity increases by approximately 2 m/s every second.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. AVERAGE ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average acceleration over the interval [t₁, t₂] is: a_avg = [v(t₂) - v(t₁)]/(t₂ - t₁)

In words: Average acceleration = (change in velocity)/(change in time)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INSTANTANEOUS ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Just as velocity can be instantaneous, acceleration can also be instantaneous.

The instantaneous acceleration is: a(t) = v'(t)

Since: v(t) = s'(t), we get: a(t) = s''(t)

Therefore, acceleration is the second derivative of position.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MOTION CHAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important relationships to remember:

  s(t) → 1st derivative → v(t) → 1st derivative → a(t)

Mathematically:
  v(t) = s'(t)
  a(t) = v'(t) = s''(t)

So:
  • First derivative of position → velocity
  • Second derivative of position → acceleration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: FINDING ACCELERATION FROM POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t³ - 6t² + 9t + 4

Step 1: Find velocity
  v(t) = 3t² - 12t + 9

Step 2: Find acceleration
  a(t) = 6t - 12

Therefore: a(t) = 6t - 12

We could also find it directly by taking the second derivative: s''(t) = 6t - 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING ACCELERATION AT A SPECIFIC TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using: a(t) = 6t - 12

find the acceleration at t = 3.

Substitute: a(3) = 6(3) - 12 = 18 - 12 = 6

So the acceleration at t = 3 is: 6 units/time².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHAT DOES POSITIVE ACCELERATION MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a(t) > 0, velocity is increasing.

Example: a(t) = 5 means velocity increases by 5 units per unit of time.

However, an important point is: Positive acceleration does not necessarily mean the object is speeding up.

We also need to know the sign of velocity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT DOES NEGATIVE ACCELERATION MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a(t) < 0, velocity is decreasing.

Example: a(t) = -9.8 m/s² means that velocity decreases by 9.8 m/s every second.

This is the acceleration caused by gravity near Earth's surface when upward is chosen as the positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ACCELERATION DOES NOT ALWAYS MEAN SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most common mistakes in Calculus 1.

Many students think: a < 0 → slowing down.

But that is not always true.

Acceleration tells us how velocity changes.

To determine whether the object is speeding up or slowing down, we must compare velocity and acceleration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SPEEDING UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An object is speeding up when velocity and acceleration have the same sign.

Case 1: v > 0, a > 0
  The object is moving positively and becoming faster.

Case 2: v < 0, a < 0
  The object is moving negatively and becoming faster in that direction.

Therefore: v·a > 0 → speeding up

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An object is slowing down when velocity and acceleration have opposite signs.

Case 1: v > 0, a < 0
Case 2: v < 0, a > 0

Therefore: v·a < 0 → slowing down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SPEEDING UP AND SLOWING DOWN TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity: +, Acceleration: + → Speeding up
Velocity: +, Acceleration: - → Slowing down
Velocity: -, Acceleration: + → Slowing down
Velocity: -, Acceleration: - → Speeding up

Easy rule: Same signs = Speeding Up, Different signs = Slowing Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: DETERMINE WHETHER AN OBJECT IS SPEEDING UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: v(t) = 2t - 8 and a(t) = 2

At t = 2: v(2) = 2(2) - 8 = -4 and a(2) = 2

Therefore: v < 0, a > 0

The signs are different.

Thus: The object is slowing down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: v(t) = 2t - 8 and a(t) = 2

At t = 6: v(6) = 12 - 8 = 4 and a(6) = 2

Therefore: v > 0, a > 0

The signs are the same.

So: The object is speeding up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ACCELERATION AND POSITION GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration also has a geometric interpretation.

Since a(t) = s''(t), acceleration describes how the slope of the position graph changes.

If a(t) > 0, the position graph is generally concave up.

If a(t) < 0, the position graph is generally concave down.

Therefore:
  • a > 0 → position graph is concave up
  • a < 0 → position graph is concave down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ACCELERATION AND VELOCITY GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The velocity graph provides another useful interpretation.

Since a(t) = v'(t), acceleration is the slope of the velocity-time graph.

Therefore:
  • Velocity graph increasing → a(t) > 0
  • Velocity graph decreasing → a(t) < 0
  • Velocity graph horizontal → a(t) = 0

So: Acceleration = slope of the velocity graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHEN IS ACCELERATION ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is zero when: a(t) = 0

Example: a(t) = 6t - 12

Set equal to zero: 6t - 12 = 0 → 6t = 12 → t = 2

At t = 2, the velocity is not necessarily zero. Instead, the velocity is momentarily not changing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ACCELERATION AND CONSTANT VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If an object has constant velocity, then: v(t) = C where C is a constant.

Differentiate: a(t) = 0

Therefore: Constant velocity → zero acceleration.

Example: v(t) = 20 m/s → a(t) = 0

The object continues moving at the same velocity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CONSTANT ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If acceleration is constant: a(t) = a

then velocity changes at a constant rate.

The velocity equation becomes: v(t) = v₀ + at

where:
  • v₀ = initial velocity
  • a = constant acceleration
  • t = elapsed time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. POSITION UNDER CONSTANT ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For constant acceleration: s(t) = s₀ + v₀t + ½at²

where:
  • s₀ = initial position
  • v₀ = initial velocity
  • a = acceleration
  • t = time

This is one of the most important formulas in motion problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE: CONSTANT ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose an object starts at: s₀ = 5 m with: v₀ = 10 m/s and: a = 2 m/s²

Its position function is: s(t) = 5 + 10t + ½(2)t²

Therefore: s(t) = 5 + 10t + t²

Its velocity is: v(t) = 10 + 2t

and its acceleration is: a(t) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. ACCELERATION DUE TO GRAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common application is vertical motion.

Near Earth's surface: g ≈ 9.8 m/s²

If upward is positive: a = -9.8 m/s²

Therefore:
  v(t) = v₀ - 9.8t
  s(t) = s₀ + v₀t - 4.9t²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. EXAMPLE: BALL THROWN UPWARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a ball is thrown upward with: v₀ = 20 m/s from a height of: s₀ = 2 m

Its position is: s(t) = 2 + 20t - 4.9t²

Velocity: v(t) = 20 - 9.8t

Acceleration: a(t) = -9.8

Notice that the acceleration remains constant throughout the motion.

Even when the ball reaches its highest point and v = 0, its acceleration is still: -9.8 m/s².

This is a very important concept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. AT MAXIMUM HEIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At maximum height: v(t) = 0

But: a(t) ≠ 0

For a ball thrown upward: v = 0 while a = -9.8

So: Zero velocity does not mean zero acceleration.

The ball is momentarily stopped, but gravity is still accelerating it downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. ACCELERATION AND UNITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If position is measured in meters and time in seconds: s(t) = m

Velocity is: v(t) = m/s

Acceleration is: m/s²

Why? Because a(t) = dv/dt, and velocity has units m/s, so: (m/s)/s = m/s²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. ACCELERATION AND NEWTON'S SECOND LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is also connected to force in physics.

Newton's Second Law states: F_net = ma

where:
  • F_net = net force
  • m = mass
  • a = acceleration

Solving for acceleration: a = F_net/m

So a larger net force generally produces a larger acceleration for the same mass.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. ACCELERATION AND CHANGES IN DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration can also help explain changes in motion.

Suppose v(t) changes from positive to negative. The object changes direction.

If v(t) = 0 at the transition, we examine the signs around that time to determine whether an actual direction change occurs.

Example: v(t) = t - 4

At t = 4, velocity is zero.

Before t = 4: v < 0
After t = 4: v > 0

Therefore, the object changes direction at t = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. A COMPLETE WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the position of an object is: s(t) = t³ - 6t² + 9t

Find:
  1. Velocity
  2. Acceleration
  3. When the object is at rest
  4. When it is speeding up
  5. When it is slowing down

Step 1: Find velocity
  v(t) = s'(t) = 3t² - 12t + 9
  Factor: v(t) = 3(t - 1)(t - 3)

Step 2: Find acceleration
  a(t) = v'(t) = 6t - 12

Step 3: Find when the object is at rest
  Set v(t) = 0: 3(t - 1)(t - 3) = 0
  Thus: t = 1, t = 3

Step 4: Analyze the signs
  The important values are: t = 1, t = 2, t = 3
  because acceleration is zero at: 6t - 12 = 0 → t = 2

  So we examine: (0,1), (1,2), (2,3), (3,∞)

  Interval: 0 < t < 1
  v(t): +
  a(t): -
  Result: Slowing down

  Interval: 1 < t < 2
  v(t): -
  a(t): -
  Result: Speeding up

  Interval: 2 < t < 3
  v(t): -
  a(t): +
  Result: Slowing down

  Interval: t > 3
  v(t): +
  a(t): +
  Result: Speeding up

  Therefore: Speeding up on (1,2) and (3,∞), and Slowing down on (0,1) and (2,3).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. AVERAGE VS. INSTANTANEOUS ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Just like velocity, acceleration can be average or instantaneous.

Average acceleration: a_avg = [v(b) - v(a)]/(b - a)

Instantaneous acceleration: a(t) = v'(t) or a(t) = s''(t)

The difference is:
  • Average acceleration: change in velocity over an interval
  • Instantaneous acceleration: rate of change of velocity at one instant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Acceleration
Formula: a(t) = v'(t)

Concept: Acceleration from position
Formula: a(t) = s''(t)

Concept: Average acceleration
Formula: [v(b)-v(a)]/(b-a)

Concept: Constant acceleration velocity
Formula: v = v₀ + at

Concept: Constant acceleration position
Formula: s = s₀ + v₀t + ½at²

Concept: Newton's Second Law
Formula: F_net = ma

Concept: Speeding up
Formula: v and a have same sign

Concept: Slowing down
Formula: v and a have opposite signs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Acceleration, remember:

  • Acceleration measures how velocity changes.
  • The most important formula is: a(t) = v'(t) = s''(t)
  • Think of the three quantities as a chain:
    Position → 1st derivative → Velocity → 1st derivative → Acceleration

Remember these four ideas:
  • a > 0 → velocity is increasing.
  • a < 0 → velocity is decreasing.
  • Same signs of v and a → speeding up.
  • Opposite signs of v and a → slowing down.

And one especially important point:
  An object can have v = 0 while a ≠ 0.

Example: At the highest point of a ball's flight, v = 0 but a = -9.8 m/s² because gravity continues to act on the ball.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is a fundamental concept in calculus that connects position, velocity, and motion analysis.

Key concepts covered:

  ✓ What Is Acceleration?
  ✓ Average Acceleration
  ✓ Instantaneous Acceleration
  ✓ The Motion Chain
  ✓ Finding Acceleration from Position
  ✓ Finding Acceleration at a Specific Time
  ✓ Positive Acceleration
  ✓ Negative Acceleration
  ✓ Speeding Up vs. Slowing Down
  ✓ Acceleration and Position Graphs
  ✓ Acceleration and Velocity Graphs
  ✓ When Acceleration Is Zero
  ✓ Constant Velocity
  ✓ Constant Acceleration
  ✓ Motion Under Gravity
  ✓ Maximum Height
  ✓ Newton's Second Law
  ✓ Changes in Direction
  ✓ Complete Worked Example
  `,
  examples: [
    "s(t) = t³ - 6t² + 9t + 4 → v(t) = 3t² - 12t + 9 → a(t) = 6t - 12",
    "a(3) = 6 for s(t) = t³ - 6t² + 9t + 4",
    "v(t) = 2t - 8, a(t) = 2 → at t=2: v<0, a>0 → slowing down",
    "v(t) = 2t - 8, a(t) = 2 → at t=6: v>0, a>0 → speeding up",
    "a(t) = 6t - 12 → a(t) = 0 at t = 2",
    "Constant velocity: v(t) = 20 → a(t) = 0",
    "Constant acceleration: s(t) = s₀ + v₀t + ½at²",
    "s₀ = 5, v₀ = 10, a = 2 → s(t) = 5 + 10t + t²",
    "Ball thrown upward: s(t) = 2 + 20t - 4.9t² → a(t) = -9.8",
    "At maximum height: v = 0, a = -9.8 (not zero)",
    "Speeding up: v and a same sign",
    "Slowing down: v and a opposite signs",
    "a > 0 → velocity increasing",
    "a < 0 → velocity decreasing",
    "s(t) → v(t) → a(t)",
    "F_net = ma",
  ],
};

export default topic;