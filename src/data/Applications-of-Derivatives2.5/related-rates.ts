const topic = {
  id: "related-rates",
  title: "Related Rates",
  summary:
    "Definition of related rates, chain rule applications, geometric relationships, and problem-solving strategies.",
  details: `
Related Rates is an application of derivatives used to determine how quickly one quantity is changing when another related quantity is changing.

The key idea is that several variables are connected by an equation, and those variables may all change with respect to time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE RELATED RATES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose two quantities x and y are related by an equation: y = x²

If x changes over time, then y must also change.

We can differentiate both sides with respect to time t:

  dy/dt = 2x·dx/dt

Now we have a relationship between dx/dt and dy/dt.

This is the basic idea behind related rates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related-rates problems usually give you:
  • a geometric or physical relationship
  • one or more known rates
  • some measurements at a particular instant
  • and ask you to find an unknown rate

Example: The radius of a circle is increasing at 2 cm/s. How fast is its area increasing when the radius is 5 cm?

Here: dr/dt = 2 and we want: dA/dt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST IMPORTANT PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving related-rates problems: Differentiate with respect to time.

If you have A = πr², do not simply differentiate with respect to r and stop.

Instead, because r changes with time: dA/dt = 2πr·dr/dt

The extra term dr/dt comes from the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMMON RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some common quantities include:

  • Circle: A = πr², C = 2πr
  • Sphere: V = 4/3πr³, S = 4πr²
  • Cylinder: V = πr²h
  • Rectangle: A = lw
  • Triangle: A = ½bh
  • Right triangle: x² + y² = z²

These equations allow us to connect different rates of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GENERAL STEPS FOR SOLVING RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A reliable procedure is:

Step 1: Identify the quantities
  Determine what variables are changing.
  Example: r = radius, A = area

Step 2: Identify the known and unknown rates
  Example: dr/dt = 2 and dA/dt = ?

Step 3: Find an equation relating the variables
  For a circle: A = πr²

Step 4: Differentiate with respect to time
  dA/dt = 2πr·dr/dt

Step 5: Substitute the known values
  Insert the given values after differentiating.

Step 6: Solve for the unknown rate

Step 7: Include units
  Always include the appropriate units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: EXPANDING CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the radius of a circle is increasing at dr/dt = 3 cm/s.

How fast is the area increasing when r = 4 cm?

Step 1: Write the formula
  A = πr²

Step 2: Differentiate with respect to time
  dA/dt = 2πr·dr/dt

Step 3: Substitute
  dA/dt = 2π(4)(3) = 24π cm²/s

So the area is increasing at 24π cm²/s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY THE CHAIN RULE IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: A = πr²

Since r is changing with time, A is really a function of r, while r is a function of t.

So: A = A(r(t))

Using the Chain Rule: dA/dt = dA/dr · dr/dt

Since dA/dr = 2πr, we get: dA/dt = 2πr·dr/dt

This is why related rates are closely connected to the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: EXPANDING SPHERE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a spherical balloon is being inflated.

Its radius increases at dr/dt = 2 cm/s.

Find how quickly its volume is increasing when r = 3 cm.

Step 1: Volume formula
  V = 4/3πr³

Step 2: Differentiate with respect to time
  dV/dt = 4πr²·dr/dt

Step 3: Substitute
  dV/dt = 4π(3)²(2) = 4π(9)(2) = 72π cm³/s

The volume is increasing at 72π cm³/s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. RELATED RATES AND RIGHT TRIANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another very common type involves a right triangle.

Suppose a ladder is leaning against a wall.

Let:
  • x = distance of ladder's bottom from wall
  • y = height of ladder on wall

and let the ladder have constant length L.

Using the Pythagorean theorem: x² + y² = L²

Differentiate with respect to time: 2x·dx/dt + 2y·dy/dt = 0

Divide by 2: x·dx/dt + y·dy/dt = 0

This equation relates the rate at which the bottom moves to the rate at which the top moves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: SLIDING LADDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A 10-meter ladder leans against a wall.

The bottom is moving away from the wall at dx/dt = 2 m/s.

How fast is the top moving downward when the bottom is 6 meters from the wall?

Step 1: Pythagorean theorem
  x² + y² = 10²

At x = 6, we find y: 6² + y² = 100 → 36 + y² = 100 → y² = 64 → y = 8

Step 2: Differentiate
  2x·dx/dt + 2y·dy/dt = 0

Simplify: x·dx/dt + y·dy/dt = 0

Step 3: Substitute
  6(2) + 8·dy/dt = 0
  12 + 8·dy/dt = 0
  8·dy/dt = -12
  dy/dt = -3/2 = -1.5 m/s

So: dy/dt = -1.5 m/s

The negative sign means the top is moving downward.

Thus, the top is moving downward at 1.5 m/s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DISTANCE BETWEEN TWO MOVING OBJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related rates can also involve two objects moving in different directions.

Suppose one object moves horizontally and another vertically.

Their distance z can be represented using: x² + y² = z²

Differentiate: 2x·dx/dt + 2y·dy/dt = 2z·dz/dt

Therefore: x·dx/dt + y·dy/dt = z·dz/dt

This can be used to find how quickly the distance between the objects changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RELATED RATES AND VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a cylindrical tank.

The volume is: V = πr²h

If the radius is constant, then: dV/dt = πr²·dh/dt

If both r and h change, then: dV/dt = 2πrh·dr/dt + πr²·dh/dt

This is an example where multiple variables are changing simultaneously.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INCREASING VS. DECREASING RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sign of a rate tells us the direction of change.

If dr/dt > 0, the radius is increasing.

If dr/dt < 0, the radius is decreasing.

Likewise: dV/dt > 0 means volume is increasing, while dV/dt < 0 means volume is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You will frequently see: dx/dt which means: rate of change of x with respect to time.

Similarly: dy/dt means: rate of change of y with respect to time.

Other examples:
  • dA/dt = rate of change of area
  • dV/dt = rate of change of volume
  • dP/dt = rate of change of population
  • dT/dt = rate of change of temperature

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A VERY IMPORTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not substitute numerical values too early.

Suppose: A = πr²

First differentiate: dA/dt = 2πr·dr/dt

Then substitute the values.

Why? Because if you substitute r = 5 before differentiating, you may accidentally treat r as a constant even though it is changing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RELATED RATES VS. ORDINARY DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a useful distinction.

Ordinary derivative:
  You might have: y = x² and calculate: dy/dx = 2x
  This tells you how y changes with respect to x.

Related rates:
  If both x and y change with time: y = x²
  then: dy/dt = 2x·dx/dt
  This tells you how y changes with respect to time based on how x changes with time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting dt
  Wrong: dA/dr = 2πr when the problem asks for how area changes with time.
  Correct: dA/dt = 2πr·dr/dt

Mistake 2: Substituting too early
  Differentiate first, then substitute.

Mistake 3: Ignoring negative signs
  A negative rate often indicates that a quantity is decreasing.

Mistake 4: Forgetting units
  For example: dV/dt should have units such as cm³/s.

Mistake 5: Using the wrong geometric equation
  Identify the correct relationship before differentiating.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. GENERAL RELATED RATES FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There isn't one single formula for every related-rates problem.

Instead, the general strategy is:

  Relationship → Differentiate with respect to t → Substitute → Solve

Example: A = πr² becomes dA/dt = 2πr·dr/dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step: 1
What to do: Identify the changing quantities

Step: 2
What to do: Identify the known and unknown rates

Step: 3
What to do: Find an equation relating the variables

Step: 4
What to do: Differentiate both sides with respect to t

Step: 5
What to do: Substitute the known values

Step: 6
What to do: Solve for the unknown rate

Step: 7
What to do: Include units and interpret the sign

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Related Rates, remember:

  • Related Rates = Using derivatives to connect changing quantities.
  • The core process is: Equation → d/dt → Substitute → Solve.
  • Related Rates is essentially an application of the Chain Rule to real-world situations where multiple quantities are changing simultaneously.
  • Always differentiate with respect to time.
  • Never substitute numerical values before differentiating.
  • Pay attention to signs and units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related Rates is a powerful application of derivatives that connects changing quantities in real-world situations.

Key concepts covered:

  ✓ What Are Related Rates?
  ✓ The Main Idea
  ✓ The Chain Rule Connection
  ✓ Common Geometric Relationships
  ✓ Step-by-Step Strategy
  ✓ Expanding Circle
  ✓ Expanding Sphere
  ✓ Sliding Ladder
  ✓ Distance Between Moving Objects
  ✓ Cylindrical Tank
  ✓ Increasing vs. Decreasing Rates
  ✓ Important Notation
  ✓ Common Mistakes
  `,
  examples: [
    "Circle: A = πr² → dA/dt = 2πr·dr/dt",
    "Circle with dr/dt=3, r=4 → dA/dt = 24π cm²/s",
    "Sphere: V = 4/3πr³ → dV/dt = 4πr²·dr/dt",
    "Sphere with dr/dt=2, r=3 → dV/dt = 72π cm³/s",
    "Ladder: x² + y² = L² → x·dx/dt + y·dy/dt = 0",
    "Ladder with L=10, dx/dt=2, x=6 → dy/dt = -1.5 m/s",
    "Distance: x² + y² = z² → x·dx/dt + y·dy/dt = z·dz/dt",
    "Cylinder: V = πr²h → dV/dt = 2πrh·dr/dt + πr²·dh/dt",
    "Differentiate with respect to time (d/dt)",
    "Don't substitute values before differentiating",
    "Negative rate means decreasing",
    "Equation → d/dt → Substitute → Solve",
    "Chain Rule: A = A(r(t)) → dA/dt = dA/dr·dr/dt",
  ],
};

export default topic;