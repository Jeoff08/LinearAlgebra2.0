// filename: related-rates.ts

const topic = {
  id: "related-rates",
  title: "Related Rates",
  summary:
    "An application of derivatives used to determine how quickly one quantity is changing when another related quantity is changing, using the Chain Rule to differentiate with respect to time.",
  details: `
Related rates is an application of derivatives used to determine how quickly one quantity is changing when another related quantity is changing.

The main idea is:

  If two or more quantities are connected by an equation, and one quantity 
  changes with time, we can use derivatives to determine how the other 
  quantities are changing.

For example, imagine a balloon being inflated.

As the radius of the balloon increases, its volume also increases.

If we know dr/dt (the rate at which the radius changes), we can determine dV/dt (the rate at which the volume changes).

This is called a related rates problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE RELATED RATES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose two quantities are related by:
  y = x²

If x and y both change with time t, then:
  y = y(t)
and:
  x = x(t)

We can differentiate y = x² with respect to t:
  dy/dt = 2x(dx/dt)

This equation connects the rates dy/dt and dx/dt.

That is the basic idea behind related rates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE TIME?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most related rates problems involve quantities changing with respect to time.

Therefore, instead of dy/dx, we usually work with dy/dt, where t represents time.

Examples include:
  • dr/dt — rate at which radius changes
  • dV/dt — rate at which volume changes
  • dh/dt — rate at which height changes
  • dA/dt — rate at which area changes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the area of a circle is:
  A = πr²

If the radius changes with time, then the area also changes with time.

Differentiate both sides with respect to t:
  dA/dt = 2πr(dr/dt)

This is a related rates equation.

It tells us that the rate at which area changes depends on:
  • the current radius r
  • the rate at which the radius changes dr/dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GENERAL STEPS FOR RELATED RATES PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A reliable method is:

Step 1: Identify the quantities that are changing
  Determine what variables are involved.

Step 2: Identify the known rate
  Look for information such as:
    dx/dt = 5 or dr/dt = 2

Step 3: Identify the unknown rate
  Usually the problem asks for something such as:
    dV/dt or dh/dt

Step 4: Find an equation relating the quantities
  For example, for a circle:
    A = πr²

Step 5: Differentiate with respect to time
  dA/dt = 2πr(dr/dt)

Step 6: Substitute the known values
  Put the values into the differentiated equation.

Step 7: Solve for the unknown rate
  This gives the requested rate of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: AREA OF A GROWING CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the radius of a circle is increasing at:
  dr/dt = 3 cm/s

Find how fast the area is increasing when r = 5 cm.

Step 1: Write the formula
  A = πr²

Step 2: Differentiate with respect to time
  dA/dt = 2πr(dr/dt)

Step 3: Substitute
  We know:
    r = 5
  and:
    dr/dt = 3

  Therefore:
    dA/dt = 2π(5)(3)
    = 30π

Therefore:
  dA/dt = 30π cm²/s

So the area is increasing at approximately:
  94.25 cm²/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DO WE DIFFERENTIATE BEFORE SUBSTITUTING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important rule.

Suppose:
  A = πr²

and at some particular moment:
  r = 5

You should not substitute r = 5 before differentiating.

First differentiate:
  dA/dt = 2πr(dr/dt)

Then substitute:
  r = 5
and:
  dr/dt = 3

The reason is that r is changing with time.

The relationship between the rates must be established first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: VOLUME OF A SPHERE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a sphere is:
  V = (4/3)πr³

Suppose the radius increases at:
  dr/dt = 2 cm/s

Find dV/dt when r = 4 cm.

Differentiate:
  dV/dt = 4πr²(dr/dt)

Substitute:
  dV/dt = 4π(4)²(2)
  = 4π(16)(2)
  = 128π

Therefore:
  dV/dt = 128π cm³/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: EXPANDING CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a circular ripple is spreading across water.

Its radius is increasing at 5 m/s.

Find how fast its area is increasing when the radius is 10 m.

Area:
  A = πr²

Differentiate:
  dA/dt = 2πr(dr/dt)

Substitute:
  dA/dt = 2π(10)(5)

Therefore:
  dA/dt = 100π m²/s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: LADDER PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A classic related rates problem involves a ladder leaning against a wall.

Suppose a 10-ft ladder rests against a vertical wall.

Let:
  x = distance from the wall
  y = height of the ladder on the wall

Because the ladder length is constant:
  x² + y² = 10²
  x² + y² = 100

Suppose the bottom of the ladder is moving away from the wall at:
  dx/dt = 2 ft/s

Find how fast the top is moving downward when x = 6.

Step 1: Differentiate
  2x(dx/dt) + 2y(dy/dt) = 0

Step 2: Find y
  We know:
    x = 6

  So:
    6² + y² = 100
    36 + y² = 100
    y² = 64
    y = 8

Step 3: Substitute
  2(6)(2) + 2(8)(dy/dt) = 0
  24 + 16(dy/dt) = 0

Therefore:
  16(dy/dt) = -24
  dy/dt = -3/2

So:
  dy/dt = -1.5 ft/s

The negative sign means the top of the ladder is moving downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: CONICAL TANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose water is being poured into a cone-shaped tank.

The volume of a cone is:
  V = (1/3)πr²h

Suppose the radius and height satisfy:
  r = h/2

Substitute:
  V = (1/3)π(h/2)²h
  V = (π/12)h³

Suppose water is entering at:
  dV/dt = 4 m³/min

Find how quickly the water level is rising when h = 6 m.

Differentiate:
  dV/dt = (π/4)h²(dh/dt)

Substitute:
  4 = (π/4)(6)²(dh/dt)
  4 = 9π(dh/dt)

Therefore:
  dh/dt = 4/(9π) m/min

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: MOVING SHADOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a person is 6 ft tall and walks away from a lamp post that is 18 ft tall.

Let:
  x = distance from the person to the lamp
  y = length of the person's shadow

Suppose the person walks away at:
  dx/dt = 4 ft/s

We can use similar triangles.

The relationship becomes:
  18/(x + y) = 6/y

Cross multiply:
  18y = 6(x + y)

Expand:
  18y = 6x + 6y
  12y = 6x

Therefore:
  y = x/2

Differentiate:
  dy/dt = (1/2)(dx/dt)

Substitute:
  dy/dt = (1/2)(4)
  dy/dt = 2 ft/s

The person's shadow is growing at 2 ft/s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RELATED RATES AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is one of the most important ideas behind related rates.

Suppose:
  A = πr²

and r changes with time.

Because r = r(t), we have:
  A = A(r(t))

Applying the Chain Rule:
  dA/dt = (dA/dr)(dr/dt)

Since:
  dA/dr = 2πr

we get:
  dA/dt = 2πr(dr/dt)

So related rates are essentially an application of the Chain Rule to quantities that change over time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. POSITIVE AND NEGATIVE RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sign of a rate tells us the direction of change.

If dr/dt > 0, then r is increasing.
If dr/dt < 0, then r is decreasing.

For example:
  dh/dt = -3 m/s

means the height is decreasing at 3 m/s.

The negative sign indicates the direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. UNITS IN RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Units are extremely important.

For example:
  dr/dt = 5 cm/s

means:
  The radius increases by 5 centimeters every second.

If:
  dA/dt = 30 cm²/s

it means:
  The area is increasing at 30 square centimeters per second.

If:
  dV/dt = 50 m³/s

it means:
  The volume is increasing at 50 cubic meters per second.

Always include the correct units in your final answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON RELATED RATES FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Circle:
    A = πr²
    dA/dt = 2πr(dr/dt)

  Sphere:
    V = (4/3)πr³
    dV/dt = 4πr²(dr/dt)

  Cylinder:
    V = πr²h

  Cone:
    V = (1/3)πr²h

  Rectangle:
    A = lw
    dA/dt = l(dw/dt) + w(dl/dt)

  Pythagorean relationship:
    x² + y² = z²
  This is commonly used for ladder, airplane, and moving-object problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A GENERAL RELATED RATES TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A good way to solve these problems is:

1. Define the variables
  Example: r = radius, A = area, t = time

2. Write the relationship
  For a circle: A = πr²

3. Differentiate with respect to time
  dA/dt = 2πr(dr/dt)

4. Substitute known information
  Suppose r = 5 and dr/dt = 3.
  Then: dA/dt = 2π(5)(3)

5. Solve
  dA/dt = 30π

6. Interpret
  The area is increasing at 30π square units per unit time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Substituting too early
  Suppose A = πr².
  Do not immediately substitute a numerical value for r.
  First differentiate: dA/dt = 2πr(dr/dt)
  Then substitute the values.

Mistake 2: Forgetting the Chain Rule
  Incorrect:
    d/dt (r²) = 2r
  Correct:
    d/dt (r²) = 2r(dr/dt)
  because r changes with time.

Mistake 3: Ignoring negative signs
  If dh/dt = -2, the height is decreasing, not increasing.

Mistake 4: Using the wrong value
  Sometimes a problem gives the rate at which one variable changes but asks for another.
  For example, dr/dt may be given, but the problem asks for dA/dt.
  You need to establish the relationship between r and A first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. RELATED RATES VS. ORDINARY DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important distinction.

Ordinary differentiation:
  Usually asks for dy/dx.
  For example:
    y = x³ gives y' = 3x²

Related rates:
  Usually asks for dy/dt because quantities are changing with time.
  For example:
    A = πr² gives dA/dt = 2πr(dr/dt)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related rates problems combine several Calculus ideas:

  Real-World Situation
    ↓
  Mathematical Relationship
    ↓
  Differentiate with Respect to Time
    ↓
  Substitute Known Values
    ↓
  Solve for Unknown Rate

For example:
  Balloon expands
    ↓
  V = (4/3)πr³
    ↓
  dV/dt = 4πr²(dr/dt)
    ↓
  Substitute r and dr/dt
    ↓
  Find dV/dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Shape            Formula                      Related Rates Equation
  ─────────────────────────────────────────────────────────────────────────────────
  Circle           A = πr²                     dA/dt = 2πr(dr/dt)
  Sphere           V = (4/3)πr³                dV/dt = 4πr²(dr/dt)
  Cylinder         V = πr²h                    dV/dt = πr²(dh/dt) + 2πrh(dr/dt)
  Cone             V = (1/3)πr²h               dV/dt = (1/3)πr²(dh/dt) + (2/3)πrh(dr/dt)
  Rectangle        A = lw                      dA/dt = l(dw/dt) + w(dl/dt)
  Pythagorean      x² + y² = z²                2x(dx/dt) + 2y(dy/dt) = 2z(dz/dt)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related Rates is the application of derivatives to situations where two or more changing quantities are connected by an equation.

The most important idea is:

  Find an equation relating the changing quantities, differentiate that 
  equation with respect to time, substitute the known information, and solve 
  for the unknown rate.

The general form is:
  dy/dt = (dy/dx)(dx/dt)

which is an application of the Chain Rule.

For example, if:
  A = πr²

then:
  dA/dt = 2πr(dr/dt)

This tells us how the area changes when the radius changes.

Key concepts to remember:
  • Related quantities are connected by an equation.
  • Rates of change are usually taken with respect to time.
  • Use the Chain Rule when differentiating with respect to time.
  • Differentiate first, then substitute numerical values.
  • Pay attention to positive and negative signs.
  • Always include the correct units.

Related rates are widely used in geometry, physics, engineering, economics, biology, and real-world modeling.

In short:
  Related Rates uses derivatives to determine how fast one changing quantity 
  changes when another related quantity is changing.
  `,
  examples: [
    "Circle area: r increasing at 3 cm/s, r=5 → dA/dt = 30π cm²/s",
    "Sphere volume: r increasing at 2 cm/s, r=4 → dV/dt = 128π cm³/s",
    "Ladder problem: x=6, dx/dt=2, ladder length=10 → dy/dt = -1.5 ft/s",
    "Conical tank: dV/dt=4 m³/min, h=6, r=h/2 → dh/dt = 4/(9π) m/min",
    "Moving shadow: 6ft person, 18ft lamp, dx/dt=4 ft/s → dy/dt = 2 ft/s",
    "d/dt (r²) = 2r(dr/dt) (Chain Rule)",
    "Always differentiate first, then substitute values",
  ],
};

export default topic;