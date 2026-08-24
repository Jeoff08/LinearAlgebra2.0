// filename: instantaneous-velocity-in-rectilinear-motion.ts

const topic = {
  id: "instantaneous-velocity-in-rectilinear-motion",
  title: "Instantaneous Velocity in Rectilinear Motion",
  summary:
    "The velocity of an object at an exact moment in time while moving along a straight line, given by the derivative of position with respect to time: v(t) = s'(t).",
  details: `
Instantaneous velocity in rectilinear motion is an important application of the derivative in Calculus. It describes how fast an object is moving and in what direction at an exact moment in time.

To understand this topic, imagine a car moving along a straight road. At any moment, the car may speed up, slow down, stop, or move in the opposite direction. Calculus allows us to determine the object's exact velocity at a specific instant.

The key idea is:

  Instantaneous velocity is the derivative of position with respect to time.

Mathematically:
  v(t) = s'(t)

where:
  s(t) = position of the object
  t = time
  v(t) = instantaneous velocity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS RECTILINEAR MOTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rectilinear motion means motion along a straight line.

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

The position function tells us where an object is located at a particular time.

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

Before learning instantaneous velocity, we need to understand average velocity.

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

Instantaneous velocity is obtained by making the time interval smaller and smaller.

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

Velocity includes both speed and direction.

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

It is important to understand the difference.

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

In rectilinear motion, three functions are closely connected.

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

Instantaneous velocity is directly connected to the tangent line.

If position is represented by s(t), then the instantaneous velocity at time t = a is the slope of the tangent line to the position graph at that time.

Therefore:
  v(a) = s'(a)

The tangent line tells us the instantaneous rate at which position is changing.

A steep tangent line means a large velocity.

A horizontal tangent line means v(t) = 0, which means the object is momentarily at rest.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

Instantaneous velocity is useful because real-world objects rarely move at a perfectly constant speed.

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

  Concept                           Formula
  ───────────────────────────────────────────────────────────────────────────
  Position                  s(t)
  Average Velocity          v_avg = (s(t₂) - s(t₁))/(t₂ - t₁)
  Instantaneous Velocity    v(t) = s'(t) = lim(h→0) (s(t+h) - s(t))/h
  Speed                     |v(t)|
  Acceleration              a(t) = v'(t) = s''(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instantaneous velocity describes the velocity of an object at an exact moment in time while moving along a straight line.

The most important formula is:
  v(t) = s'(t)

Using the limit definition:
  v(t) = lim(h→0) (s(t + h) - s(t))/h

The important relationship is:
  Position → Velocity → Acceleration

or mathematically:
  s(t) → s'(t) → s''(t)

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