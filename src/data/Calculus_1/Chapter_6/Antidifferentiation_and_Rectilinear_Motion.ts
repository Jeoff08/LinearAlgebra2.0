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

If velocity never changes sign on an interval, distance can be found using:
  Distance = |s(b) - s(a)|

However, if velocity changes direction, we need to divide the interval at the points where:
  v(t) = 0

Then calculate the distance traveled during each section and add the absolute values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: DIRECTION CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

If acceleration is given as a function of time, we can integrate it to obtain velocity:
  v(t) = v(t₀) + ∫ₜ₀ᵗ a(u) du

Then position can be obtained using:
  s(t) = s(t₀) + ∫ₜ₀ᵗ v(u) du

These formulas are especially useful when dealing with measured or graphical data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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