// filename: related-rates.ts

const topic = {
  id: "related-rates",
  title: "Related Rates",
  summary:
    "An application of derivatives used to determine how quickly one quantity is changing when another related quantity is changing, using the Chain Rule to differentiate with respect to time.",
  details: `
Related rates is an application of derivatives used to determine how quickly one quantity is changing when another related quantity is changing. The main idea is that if two or more quantities are connected by an equation, and one quantity changes with time, we can use derivatives to determine how the other quantities are changing. For example, imagine a balloon being inflated. As the radius of the balloon increases, its volume also increases. If we know dr/dt (the rate at which the radius changes), we can determine dV/dt (the rate at which the volume changes). This is called a related rates problem. Related rates problems appear in many real‑world contexts, from physics and engineering to economics and biology, whenever quantities are interdependent and change over time. Understanding how to solve these problems is a key application of the Chain Rule and implicit differentiation.

The main idea is:

  If two or more quantities are connected by an equation, and one quantity 
  changes with time, we can use derivatives to determine how the other 
  quantities are changing.

For example, imagine a balloon being inflated.

As the radius of the balloon increases, its volume also increases.

If we know dr/dt (the rate at which the radius changes), we can determine dV/dt (the rate at which the volume changes).

This is called a related rates problem.

"image": "src/assets/121.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE RELATED RATES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose two quantities are related by an equation such as y = x². If both x and y change with time t, then they are functions of time: y = y(t) and x = x(t). We can differentiate the equation y = x² with respect to t using the Chain Rule, obtaining dy/dt = 2x(dx/dt). This new equation connects the two rates of change, dy/dt and dx/dt. This is the fundamental idea behind related rates: given one rate of change, we can find another, provided we know the relationship between the variables and the current values of the quantities. Related rates problems are essentially applications of implicit differentiation, where the independent variable is time. This technique is powerful because it allows us to analyse dynamic systems where quantities are linked and changing simultaneously.

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

Most related rates problems involve quantities changing with respect to time. Time is the independent variable because it is the universal parameter that governs change in the physical world. Therefore, instead of working with derivatives like dy/dx, we usually work with derivatives with respect to time, such as dy/dt, where t represents time. This is because we are typically interested in how fast something is changing that is, the rate of change over time. For example, we might want to know how quickly the area of a circle is increasing (dA/dt) when we know how fast its radius is growing (dr/dt). Other common notations include dr/dt for the rate of change of radius, dV/dt for volume, dh/dt for height, and dA/dt for area. Using time as the independent variable standardises the approach and makes the connection to real‑world processes clear.

Therefore, instead of dy/dx, we usually work with dy/dt, where t represents time.

Examples include:
  • dr/dt   rate at which radius changes
  • dV/dt   rate at which volume changes
  • dh/dt   rate at which height changes
  • dA/dt   rate at which area changes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the area of a circle is given by A = πr². If the radius changes with time, then the area also changes with time because they are related by this equation. Differentiating both sides with respect to t gives dA/dt = 2πr(dr/dt). This is a related rates equation. It tells us that the rate at which the area changes depends on two factors: the current radius r and the rate at which the radius changes dr/dt. If we know r and dr/dt at a particular moment, we can compute dA/dt. This simple example illustrates the core principle of related rates: the derivative of a quantity with respect to time depends on the derivative of the related quantity and the current values of the variables. By establishing the relationship first and then differentiating, we can link the rates of change of different quantities.

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

A reliable method for solving related rates problems involves the following steps. First, identify the quantities that are changing and assign variables to them. Second, identify the known rate(s) from the problem statement, such as dx/dt = 5 or dr/dt = 2. Third, identify the unknown rate that you are asked to find. Fourth, find an equation that relates the quantities involved this could be a geometric formula like A = πr² or a relationship from similar triangles. Fifth, differentiate the equation with respect to time t, applying the Chain Rule to any term involving a changing variable. Sixth, substitute the known values into the differentiated equation. Finally, solve for the unknown rate and interpret the result with correct units. This systematic approach works for almost all related rates problems, from simple geometric shapes to more complex physical situations. Practicing this method helps build confidence and accuracy.

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

Suppose the radius of a circle is increasing at a constant rate of dr/dt = 3 cm/s. We want to find how fast the area is increasing when the radius is r = 5 cm. We start with the formula for the area of a circle: A = πr². Differentiating both sides with respect to t gives dA/dt = 2πr(dr/dt). At the moment of interest, r = 5 and dr/dt = 3. Substituting these values gives dA/dt = 2π(5)(3) = 30π cm²/s. This is approximately 94.25 cm²/s. This example shows how a known rate of change of one quantity (radius) can be used to find the rate of change of another (area) through their mathematical relationship. The result tells us that when the radius is 5 cm, the area is increasing at about 94.25 square centimeters per second.

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

This is a very important rule in related rates problems. Suppose we have A = πr² and at some particular moment r = 5. You should not substitute r = 5 before differentiating. First differentiate to get dA/dt = 2πr(dr/dt), then substitute the values r = 5 and dr/dt = 3. The reason is that r is changing with time; substituting before differentiating would treat r as a constant, which is incorrect because the relationship between the rates must be established first. Differentiating first captures the dynamic relationship between the variables, ensuring that the Chain Rule is applied correctly. Substituting too early is a common mistake that leads to incorrect results. Always remember: differentiate the equation first, then plug in the known values. This preserves the dependence of all quantities on time and gives the correct rate equation.

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

The volume of a sphere is given by V = (4/3)πr³. If the radius is increasing at a rate of dr/dt = 2 cm/s, we can find the rate at which the volume is increasing when r = 4 cm. Differentiating both sides with respect to t gives dV/dt = 4πr²(dr/dt). Substituting r = 4 and dr/dt = 2 gives dV/dt = 4π(16)(2) = 128π cm³/s. This means that when the radius is 4 cm, the volume is increasing at 128π cubic centimeters per second. This example extends the circle area problem to three dimensions, showing that the same technique works for solid shapes. The derivative of the volume with respect to time depends on the square of the radius, so small changes in radius can lead to large changes in volume, especially as r grows.

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

Suppose a circular ripple is spreading across the surface of a pond. Its radius is increasing at 5 m/s. We need to find how fast the area of the circle is increasing when the radius is 10 m. Using A = πr² and differentiating gives dA/dt = 2πr(dr/dt). Substituting r = 10 and dr/dt = 5 gives dA/dt = 2π(10)(5) = 100π m²/s. This means that at the moment when the radius is 10 m, the area of the ripple is increasing at 100π square meters per second. This type of problem is common in physics and environmental science, where waves or ripples expand outward. It illustrates that the rate of change of area is proportional to both the radius and the rate of change of the radius, so the area grows faster as the circle gets larger.

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

A classic related rates problem involves a ladder leaning against a vertical wall. Suppose a 10‑ft ladder rests against a wall. Let x be the distance from the wall to the bottom of the ladder, and y be the height of the ladder on the wall. Because the ladder length is constant, we have x² + y² = 100. Suppose the bottom of the ladder is moving away from the wall at dx/dt = 2 ft/s. We need to find how fast the top is moving downward when x = 6. Differentiating x² + y² = 100 gives 2x(dx/dt) + 2y(dy/dt) = 0. At x = 6, y = 8 (since 6² + y² = 100). Substituting gives 2(6)(2) + 2(8)(dy/dt) = 0, so 24 + 16(dy/dt) = 0, and dy/dt = -3/2 ft/s. The negative sign indicates the top is moving downward. This problem is a classic example of how related rates apply to right‑triangle geometry and is often used to illustrate the technique in calculus classes.

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

Suppose water is being poured into a cone‑shaped tank. The volume of a cone is V = (1/3)πr²h. If the radius and height are related by r = h/2, we can express the volume solely in terms of h: V = (1/3)π(h/2)²h = (π/12)h³. Suppose water is entering at a rate of dV/dt = 4 m³/min. We want to find how quickly the water level is rising when h = 6 m. Differentiating V = (π/12)h³ with respect to t gives dV/dt = (π/4)h²(dh/dt). Substituting dV/dt = 4 and h = 6 gives 4 = (π/4)(36)(dh/dt) = 9π(dh/dt), so dh/dt = 4/(9π) m/min. This is a typical problem involving volume and geometric similarity, often appearing in fluid dynamics and engineering. The key is to express all variables in terms of one variable before differentiating.

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

Suppose a person who is 6 ft tall walks away from a lamp post that is 18 ft tall. Let x be the distance from the person to the lamp post, and y be the length of the person's shadow. We can use similar triangles to relate the quantities: the height of the lamp post over the total distance from the lamp to the tip of the shadow equals the height of the person over the shadow length. This gives 18/(x + y) = 6/y. Cross‑multiplying gives 18y = 6(x + y), which simplifies to 12y = 6x, or y = x/2. If the person walks away at dx/dt = 4 ft/s, then differentiating y = x/2 gives dy/dt = (1/2)(dx/dt) = 2 ft/s. Thus, the shadow is growing at 2 ft/s. This problem illustrates how geometric relationships can be used to set up related rates problems involving similar triangles, which are common in optics and everyday situations.

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

The Chain Rule is one of the most important ideas behind related rates. Suppose A = πr² and r changes with time. Because r is a function of time, r = r(t), the area A is also a function of time: A = A(r(t)). Applying the Chain Rule gives dA/dt = (dA/dr)(dr/dt). Since dA/dr = 2πr, we get dA/dt = 2πr(dr/dt). This is exactly the related rates equation we derived earlier. This shows that related rates problems are essentially applications of the Chain Rule to functions of time. Every time we differentiate a variable that depends on time, we multiply by the derivative of that variable with respect to time. This is why the Chain Rule is the engine that drives related rates, and understanding it is essential for solving these problems correctly.

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

The sign of a rate tells us the direction of change. If dr/dt > 0, then r is increasing over time; if dr/dt < 0, then r is decreasing. This sign convention is crucial for interpreting the results of related rates problems. For example, if dh/dt = -3 m/s, the height is decreasing at 3 meters per second. In the ladder problem, dy/dt was negative, indicating the top of the ladder was moving downward. Conversely, dx/dt was positive, indicating the bottom was moving away from the wall. Always pay attention to the sign of your answer, as it conveys important information about the direction of change. Positive rates indicate growth or movement in the positive direction, while negative rates indicate decay or movement in the negative direction. Units should also be checked to ensure they are consistent.

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

Units are extremely important in related rates problems. Every rate has units that reflect the quantities being measured and the time variable. For example, dr/dt = 5 cm/s means the radius increases by 5 centimeters every second. dA/dt = 30 cm²/s means the area is increasing at 30 square centimeters per second. dV/dt = 50 m³/s means the volume is increasing at 50 cubic meters per second. When solving a problem, ensure that the units are consistent throughout. If lengths are in meters and time in seconds, then rates are in meters per second, areas in square meters per second, and volumes in cubic meters per second. Including the correct units in your final answer is essential for clarity and correctness. Never omit units in a related rates solution.

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

Here are some common formulas used in related rates problems, along with their differentiated forms. For a circle, A = πr² becomes dA/dt = 2πr(dr/dt). For a sphere, V = (4/3)πr³ becomes dV/dt = 4πr²(dr/dt). For a cylinder, V = πr²h becomes dV/dt = πr²(dh/dt) + 2πrh(dr/dt). For a cone, V = (1/3)πr²h becomes dV/dt = (1/3)πr²(dh/dt) + (2/3)πrh(dr/dt). For a rectangle, A = lw becomes dA/dt = l(dw/dt) + w(dl/dt). For a Pythagorean relationship, x² + y² = z² becomes 2x(dx/dt) + 2y(dy/dt) = 2z(dz/dt). These formulas cover many standard geometric shapes and relationships. Memorising them, or knowing how to derive them quickly, will speed up solving related rates problems.

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

A good way to solve related rates problems is to follow a consistent template. Start by defining the variables: for example, r = radius, A = area, t = time. Next, write the relationship between the variables, such as A = πr². Then, differentiate with respect to time: dA/dt = 2πr(dr/dt). After that, substitute the known information: suppose r = 5 and dr/dt = 3, then dA/dt = 2π(5)(3). Finally, solve the equation to find the unknown rate: dA/dt = 30π. Interpret the result: the area is increasing at 30π square units per unit time. This template works for almost any related rates problem, from simple geometric shapes to more complex physical situations. By following this structure, you can avoid common mistakes and solve problems efficiently.

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

Several common mistakes occur when solving related rates problems. The most frequent is substituting numerical values for variables before differentiating. For example, with A = πr², do not substitute r = 5 before differentiating; differentiate first to get dA/dt = 2πr(dr/dt), then substitute. Another common error is forgetting the Chain Rule: treating d/dt (r²) as 2r instead of 2r(dr/dt) because r changes with time. Also, ignoring negative signs can lead to incorrect interpretations if dh/dt = -2, the height is decreasing, not increasing. Finally, using the wrong value or formula can derail the solution; always verify that the relationship between variables is correct. Being aware of these pitfalls and practicing careful differentiation and substitution will help you avoid them.

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

There is an important distinction between ordinary differentiation and related rates. Ordinary differentiation typically asks for the derivative of one variable with respect to another, such as dy/dx. For example, given y = x³, we find y' = 3x². Related rates, on the other hand, usually ask for the rate of change of a variable with respect to time, such as dy/dt, because quantities are changing over time. For example, given A = πr², we find dA/dt = 2πr(dr/dt). The key difference is that in ordinary differentiation, the independent variable is often x, while in related rates, the independent variable is time t. This means that in related rates, we must apply the Chain Rule to all variables that are functions of time. Understanding this distinction is essential for choosing the correct approach in a given problem.

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

Related rates problems combine several Calculus ideas into a unified approach. The process starts with a real‑world situation, such as a balloon being inflated or a ladder sliding down a wall. This is translated into a mathematical relationship between the quantities involved. The relationship is then differentiated with respect to time, applying the Chain Rule to each variable. Known values from the problem are substituted into the differentiated equation, and the unknown rate is solved for. Finally, the result is interpreted in the context of the original situation, often with units. This sequence from real‑world problem to mathematical model to solution is a classic example of how calculus is used to analyse dynamic systems. Understanding this big picture helps in approaching related rates problems with confidence and clarity.

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

"image": "src/assets/122.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Related Rates is the application of derivatives to situations where two or more changing quantities are connected by an equation. The most important idea is to find an equation relating the changing quantities, differentiate that equation with respect to time, substitute the known information, and solve for the unknown rate. The general form is dy/dt = (dy/dx)(dx/dt), which is an application of the Chain Rule. For example, if A = πr², then dA/dt = 2πr(dr/dt), which tells us how the area changes when the radius changes. Key concepts to remember are that related quantities are connected by an equation, rates of change are usually taken with respect to time, the Chain Rule must be applied, differentiation must be done before substituting numerical values, and attention must be paid to positive and negative signs and units. Related rates are widely used in geometry, physics, engineering, economics, biology, and real‑world modeling. In short, related rates uses derivatives to determine how fast one changing quantity changes when another related quantity is changing.

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