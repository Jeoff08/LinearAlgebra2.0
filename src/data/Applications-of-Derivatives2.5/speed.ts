const topic = {
  id: "speed",
  title: "Speed",
  summary:
    "Definition of speed, speed vs velocity, instantaneous speed, average speed, and speeding up vs slowing down.",
  details: `
Speed describes how fast an object is moving. It tells us the distance traveled per unit of time.

In calculus, speed is closely related to velocity, but they are not exactly the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average speed of an object is: Average Speed = (Distance Traveled)/(Time Elapsed)

Example: If a car travels 120 kilometers in 2 hours:

  Speed = 120/2 = 60 km/h

So the car's average speed is 60 km/h.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SPEED VS. VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important in calculus.

Speed:
  Speed tells us how fast something is moving.
  Speed = |Velocity|
  Speed is always nonnegative.

Velocity:
  Velocity tells us both: how fast an object is moving and the direction in which it is moving.
  Velocity can be positive, negative, or zero.

Example: v(t) = -20 m/s means the object is moving at 20 m/s in the negative direction.

Its speed is: |v(t)| = 20 m/s

Therefore: Speed = |v(t)|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SPEED IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose an object's position is described by s(t), where:
  • s(t) = position
  • t = time

The velocity function is the derivative of position: v(t) = s'(t)

The speed function is the absolute value of velocity: Speed = |s'(t)|

This is one of the most important formulas for motion along a line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: FINDING SPEED FROM POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t² + 3t, where s is measured in meters and t in seconds.

Step 1: Find velocity
  v(t) = s'(t) = 2t + 3

Step 2: Find speed
  Speed = |2t + 3|

At t = 2: v(2) = 2(2) + 3 = 7

Therefore: Speed = 7 m/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE ABSOLUTE VALUE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: v(t) = -8 m/s

The negative sign means the object is moving in the negative direction.

But speed only asks: How fast is the object moving?

Therefore: Speed = |-8| = 8 m/s

Velocity: 10 m/s
Direction: Positive
Speed: 10 m/s

Velocity: -10 m/s
Direction: Negative
Speed: 10 m/s

Velocity: 0 m/s
Direction: Stationary
Speed: 0 m/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INSTANTANEOUS SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula: Distance/Time gives average speed over an interval.

Calculus allows us to determine speed at an exact instant.

If s(t) is the position function, then v(t) = s'(t) and therefore:

  Instantaneous Speed = |s'(t)|

Example: s(t) = t³ - 4t

Then: v(t) = 3t² - 4

and the speed is: |3t² - 4|

At t = 2: v(2) = 3(2)² - 4 = 12 - 4 = 8

Thus: Speed = 8 units/time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SPEED AND DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Speed can help us understand whether an object is moving quickly or slowly, but velocity tells us direction.

Suppose: v(t) = t - 5

At t = 3: v(3) = 3 - 5 = -2

Therefore:
  • Velocity = -2
  • Direction = negative
  • Speed = 2

At t = 7: v(7) = 7 - 5 = 2

Therefore:
  • Velocity = 2
  • Direction = positive
  • Speed = 2

Notice that the object has the same speed but is moving in opposite directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHEN IS AN OBJECT SPEEDING UP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important application of derivatives.

An object is speeding up when its velocity and acceleration have the same sign.

Recall: v(t) = s'(t) and a(t) = v'(t) = s''(t)

Therefore:

Speeding up: v(t) and a(t) have the same sign.

This happens when:
  • v > 0 and a > 0
  • v < 0 and a < 0

Slowing down: v(t) and a(t) have opposite signs.

This happens when:
  • v > 0 and a < 0
  • v < 0 and a > 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: SPEEDING UP OR SLOWING DOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t³ - 6t² + 9t

Step 1: Find velocity
  v(t) = s'(t) = 3t² - 12t + 9
  Factor: v(t) = 3(t - 1)(t - 3)

Step 2: Find acceleration
  a(t) = v'(t) = 6t - 12
  a(t) = 6(t - 2)

Now we can examine the signs of v and a.

Time Interval: t < 1
Velocity: +
Acceleration: -
Result: Slowing down

Time Interval: 1 < t < 2
Velocity: -
Acceleration: -
Result: Speeding up

Time Interval: 2 < t < 3
Velocity: -
Acceleration: +
Result: Slowing down

Time Interval: t > 3
Velocity: +
Acceleration: +
Result: Speeding up

This is a very useful technique for motion problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SPEED AT A PARTICULAR TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common calculus problem might give: s(t) = 4t² - 3t + 2

and ask: "Find the speed of the object at t = 5."

Find velocity: v(t) = s'(t) = 8t - 3

Evaluate at t = 5: v(5) = 8(5) - 3 = 40 - 3 = 37

Therefore: Speed = 37 units/time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AVERAGE SPEED VS. INSTANTANEOUS SPEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are different concepts.

Average speed: (Total Distance)/(Total Time)
  It describes the object's overall motion during an interval.

Instantaneous speed: |s'(t)|
  It describes how fast the object is moving at one particular moment.

Example: A car might have an average speed of 50 km/h over a trip, while its instantaneous speed at one moment could be 70 km/h.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Position
Formula: s(t)

Concept: Velocity
Formula: v(t) = s'(t)

Concept: Acceleration
Formula: a(t) = v'(t) = s''(t)

Concept: Speed
Formula: Speed = |v(t)| = |s'(t)|

Concept: Average velocity
Formula: [s(b)-s(a)]/(b-a)

Concept: Average speed
Formula: (Total Distance)/(Total Time)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Speed, remember:

  • Speed is the absolute value of velocity.
  • Speed does not include direction; velocity does.
  • The most important relationship is: s(t) → s'(t) = v(t) → |v(t)| = speed.
  • To find speed from a position function: differentiate, then take the absolute value.

The key idea is:

  Position → differentiate → Velocity → absolute value → Speed

So if you're given a position function and asked for speed, the process is:

  s(t) → s'(t) = v(t) → |v(t)| = speed

This topic connects directly to Motion Along a Line, Position Functions, Velocity, and Acceleration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Speed is a fundamental concept in motion analysis that measures how fast an object moves without considering direction.

Key concepts covered:

  ✓ Basic Definition
  ✓ Speed vs. Velocity
  ✓ Speed in Calculus
  ✓ Finding Speed from Position
  ✓ Why We Use Absolute Value
  ✓ Instantaneous Speed
  ✓ Speed and Direction
  ✓ Speeding Up vs. Slowing Down
  ✓ Speed at a Particular Time
  ✓ Average Speed vs. Instantaneous Speed
  ✓ Important Formulas
  `,
  examples: [
    "s(t) = t² + 3t → v(t) = 2t + 3 → speed = |2t + 3|",
    "s(t) = t³ - 4t → v(t) = 3t² - 4 → speed = |3t² - 4|",
    "v(t) = -20 m/s → speed = 20 m/s",
    "v(t) = -8 m/s → speed = 8 m/s",
    "s(t) = 4t² - 3t + 2 → v(t) = 8t - 3 → speed at t=5 is 37 units/time",
    "s(t) = t³ - 6t² + 9t → v(t) = 3(t-1)(t-3) → a(t) = 6(t-2)",
    "Speeding up: v and a same sign",
    "Slowing down: v and a opposite signs",
    "Speed = |v(t)|",
    "Speed does not include direction; velocity does",
    "Position → differentiate → Velocity → absolute value → Speed",
    "Average speed = Total Distance/Total Time",
    "Instantaneous speed = |s'(t)|",
  ],
};

export default topic;