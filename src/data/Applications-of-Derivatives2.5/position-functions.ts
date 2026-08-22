const topic = {
  id: "position-functions",
  title: "Position Functions",
  summary:
    "Definition of position functions, position vs distance, velocity, acceleration, displacement, and motion analysis.",
  details: `
A position function is one of the most important concepts in the Calculus 1 topic Motion Along a Line. It describes the location of a moving object at any given time.

The central idea is: s(t) = position of an object at time t.

From the position function, we can find velocity, speed, acceleration, displacement, distance traveled, direction of motion, and maximum or minimum position.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A POSITION FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A position function gives the location of an object relative to a chosen reference point.

It is usually written as: s(t)

where:
  • s = position
  • t = time

Example: s(t) = t² + 2t + 3

This means that the object's position depends on time.

If t = 0: s(0) = 0² + 2(0) + 3 = 3

So the initial position is: 3

If t = 2: s(2) = 2² + 2(2) + 3 = 4 + 4 + 3 = 11

Therefore, at t = 2, the object is at position 11.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POSITION ON A NUMBER LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Motion along a line is often represented using a number line.

We choose a point, usually 0, as the reference point or origin.

If s(t) > 0, the object is on the positive side.

If s(t) < 0, the object is on the negative side.

If s(t) = 0, the object is at the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. POSITION IS NOT THE SAME AS DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important distinction.

Suppose: s(t) = -8

The object's position is: -8

But its distance from the origin is: |-8| = 8

Therefore: Distance from origin = |s(t)|

Position contains directional information, while distance does not.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INITIAL POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The initial position is the position of the object at: t = 0

Therefore: Initial position = s(0)

Example: Given s(t) = 4t² - 3t + 7

Find the initial position.

Substitute: t = 0
  s(0) = 4(0)² - 3(0) + 7 = 7

So the object starts at position 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POSITION AT A PARTICULAR TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find where an object is at a specific time, simply substitute the time into the position function.

Suppose: s(t) = t³ - 4t + 2

Find the position at t = 3.

  s(3) = 3³ - 4(3) + 2 = 27 - 12 + 2 = 17

The object is at position 17 at t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POSITION AND VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of the position function gives velocity.

If s(t) is the position function, then: v(t) = s'(t)

Example: s(t) = t³ - 4t + 2

Differentiate: v(t) = 3t² - 4

Therefore: v(t) = 3t² - 4 is the velocity function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. POSITION AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Acceleration is the derivative of velocity.

Since v(t) = s'(t), we have: a(t) = v'(t)

Therefore: a(t) = s''(t)

For: s(t) = t³ - 4t + 2

we found: v(t) = 3t² - 4

Differentiate again: a(t) = 6t

Therefore: a(t) = 6t

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE POSITION-VELOCITY-ACCELERATION RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This relationship should be memorized:

  s(t) → differentiate → v(t) → differentiate → a(t)

In mathematical notation:
  v(t) = s'(t)
  a(t) = s''(t)

Going in the opposite direction involves integration:
  a(t) → integrate → v(t) → integrate → s(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DISPLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The displacement of an object over an interval is the change in position.

From time t = a to t = b: Displacement = s(b) - s(a)

Example: Suppose s(t) = t² + 2t

Find the displacement from t = 1 to t = 4.

First: s(1) = 1² + 2(1) = 3

Then: s(4) = 4² + 2(4) = 24

Therefore: Displacement = 24 - 3 = 21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POSITION FUNCTION VS. DISPLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A position function tells us where the object is.

Displacement tells us how much its position changed.

Example: s(0) = 5 and s(10) = 20

Then: Displacement = 20 - 5 = 15

The object moved 15 units in the positive direction overall.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING WHEN THE OBJECT IS AT THE ORIGIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The object is at the origin when: s(t) = 0

Example: s(t) = t² - 5t + 6

Set the position equal to zero: t² - 5t + 6 = 0

Factor: (t - 2)(t - 3) = 0

Therefore: t = 2, t = 3

The object passes through the origin at t = 2 and t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FINDING WHEN THE OBJECT IS AT A PARTICULAR POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t² + 2t

When is the object at position 15?

Set: s(t) = 15

Therefore: t² + 2t = 15 → t² + 2t - 15 = 0

Factor: (t + 5)(t - 3) = 0

Thus: t = -5, t = 3

If time is restricted to t ≥ 0, then: t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. POSITION AND DIRECTION OF MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The position function tells us where the object is, but velocity tells us its direction of motion.

Remember: v(t) = s'(t)

If v(t) > 0, the object is moving in the positive direction.

If v(t) < 0, the object is moving in the negative direction.

If v(t) = 0, the object is momentarily at rest.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: ANALYZING A POSITION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: s(t) = t³ - 6t² + 9t

Position: s(t) = t³ - 6t² + 9t

Velocity: Differentiate → v(t) = 3t² - 12t + 9

Factor: v(t) = 3(t - 1)(t - 3)

So: v(t) = 3(t - 1)(t - 3)

Acceleration: Differentiate again → a(t) = 6t - 12

Now we can analyze the object's motion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHEN IS THE OBJECT AT REST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set velocity equal to zero: 3(t - 1)(t - 3) = 0

Therefore: t = 1, t = 3

The object is at rest at these times.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN DOES THE OBJECT CHANGE DIRECTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An object changes direction when its velocity changes sign.

For: v(t) = 3(t - 1)(t - 3)

the critical times are: t = 1, t = 3

We check the sign of velocity around those times.

Before t = 1: Velocity is positive.

Between 1 and 3: Velocity is negative.

After t = 3: Velocity is positive.

Therefore, the object changes direction at both: t = 1 and t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. MAXIMUM AND MINIMUM POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A position function can also have maximum and minimum values.

To find possible maximum or minimum positions, we look for: s'(t) = 0

because s'(t) = v(t). A stationary position occurs when velocity is zero.

Example: s(t) = -t² + 8t + 3

Differentiate: v(t) = -2t + 8

Set equal to zero: -2t + 8 = 0 → t = 4

Evaluate the position: s(4) = -(4)² + 8(4) + 3 = -16 + 32 + 3 = 19

So the maximum position is: 19 at t = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. POSITION GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The position function can also be represented graphically.

A graph of s(t) has:
  • horizontal axis = time t
  • vertical axis = position s

The slope of the position graph represents velocity.

Therefore: slope of position graph = velocity

If the graph is increasing: v(t) > 0

If the graph is decreasing: v(t) < 0

If the graph has a horizontal tangent: v(t) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. POSITION GRAPH AND ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The curvature of the position graph tells us about acceleration.

Since a(t) = s''(t), we can use the concavity of the position graph.

Concave up: s''(t) > 0 → a(t) > 0

Concave down: s''(t) < 0 → a(t) < 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. POSITION AND UNITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Units are very important in motion problems.

Suppose s(t) is measured in meters and t is measured in seconds.

Then:
  • Position: meters (m)
  • Velocity: meters per second (m/s)
  • Acceleration: meters per second squared (m/s²)

This happens because differentiation with respect to time introduces another "per second."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. POSITION FUNCTION FOR VERTICAL MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an object moving vertically under gravity:

  s(t) = s₀ + v₀t - ½gt²

where:
  • s₀ = initial height
  • v₀ = initial velocity
  • g ≈ 9.8 m/s²

Therefore: s(t) = s₀ + v₀t - 4.9t² (when using meters and seconds)

Velocity: v(t) = v₀ - 9.8t

Acceleration: a(t) = -9.8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: POSITION FUNCTION OF A FALLING OBJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a ball is dropped from a height of 50 meters.

Its initial velocity is: v₀ = 0

Therefore: s(t) = 50 - 4.9t²

So: s(t) = 50 - 4.9t²

Velocity: v(t) = s'(t) = -9.8t

Acceleration: a(t) = -9.8

Therefore: a(t) = -9.8 m/s²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. FINDING WHEN THE OBJECT HITS THE GROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The ground corresponds to: s(t) = 0

Using: s(t) = 50 - 4.9t²

set: 50 - 4.9t² = 0 → 4.9t² = 50 → t² = 50/4.9

t ≈ 3.19

Therefore, the ball reaches the ground after approximately 3.19 seconds.

We ignore the negative solution because physical time in this context starts at t = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. POSITION FUNCTION AND TOTAL DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The position function can also be used to calculate total distance traveled.

However, we cannot always simply calculate: |s(b) - s(a)|

because the object may change direction.

We first find when: v(t) = 0

Then divide the time interval into sections and calculate the distance traveled in each section.

This is especially important for objects that move: forward and backward, upward and downward, left and right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. GENERAL PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When given a position function, follow this process:

Step 1: Identify the position function: s(t)

Step 2: Find velocity: v(t) = s'(t)

Step 3: Find acceleration: a(t) = s''(t)

Step 4: Find when the object is at rest: Solve v(t) = 0

Step 5: Determine direction: Analyze the sign of v(t)

Step 6: Determine speeding up/slowing down: Compare the signs of v(t) and a(t)

Step 7: Find displacement: Use s(b) - s(a)

Step 8: Find total distance: Account for every direction change and add the distances.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Position
Formula: s(t)

Concept: Velocity
Formula: v(t) = s'(t)

Concept: Acceleration
Formula: a(t) = s''(t)

Concept: Speed
Formula: |v(t)|

Concept: Initial position
Formula: s(0)

Concept: Displacement
Formula: s(b) - s(a)

Concept: At rest
Formula: v(t) = 0

Concept: Positive direction
Formula: v(t) > 0

Concept: Negative direction
Formula: v(t) < 0

Concept: Acceleration
Formula: a(t) = v'(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Position Functions, remember:

  • The position function is the starting point for analyzing motion along a line.
  • If s(t) is the position function, then everything else follows from it:
    s(t) → s'(t) = v(t) → s''(t) = a(t)
  • Position tells you where the object is.
  • Velocity tells you how the position is changing.
  • Acceleration tells you how the velocity is changing.

Once you understand the position function, you can solve a large class of Calculus 1 motion problems involving velocity, acceleration, direction, speed, displacement, distance, maximum height, minimum position, and falling or moving objects.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Position Functions are the foundation of motion analysis in Calculus.

Key concepts covered:

  ✓ What Is a Position Function?
  ✓ Position on a Number Line
  ✓ Position vs. Distance
  ✓ Initial Position
  ✓ Position at a Particular Time
  ✓ Position and Velocity
  ✓ Position and Acceleration
  ✓ Position-Velocity-Acceleration Relationship
  ✓ Displacement
  ✓ Position Function vs. Displacement
  ✓ Finding When the Object Is at the Origin
  ✓ Finding When the Object Is at a Particular Position
  ✓ Position and Direction of Motion
  ✓ Analyzing a Position Function
  ✓ At Rest
  ✓ Changing Direction
  ✓ Maximum and Minimum Position
  ✓ Position Graph
  ✓ Position Graph and Acceleration
  ✓ Position and Units
  ✓ Vertical Motion
  ✓ Falling Objects
  ✓ Total Distance
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "s(t) = t² + 2t + 3 → s(0) = 3, s(2) = 11",
    "s(t) = 4t² - 3t + 7 → s(0) = 7",
    "s(t) = t³ - 4t + 2 → s(3) = 17",
    "s(t) = t³ - 4t + 2 → v(t) = 3t² - 4, a(t) = 6t",
    "s(t) = t² + 2t → displacement from 1 to 4 = 21",
    "s(t) = t² - 5t + 6 → origin at t = 2, 3",
    "s(t) = t² + 2t → position 15 at t = 3",
    "s(t) = t³ - 6t² + 9t → v(t) = 3(t-1)(t-3), a(t) = 6t - 12",
    "At rest: v(t) = 0 → t = 1, 3",
    "Changes direction at t = 1, 3",
    "s(t) = -t² + 8t + 3 → maximum position at t = 4, s_max = 19",
    "s(t) = 50 - 4.9t² → hits ground at t ≈ 3.19",
    "v(t) = s'(t)",
    "a(t) = s''(t)",
    "Speed = |v(t)|",
    "s(t) → v(t) → a(t)",
  ],
};

export default topic;