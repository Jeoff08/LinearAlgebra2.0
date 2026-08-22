// filename: volume-optimization.ts

const topic = {
  id: "volume-optimization",
  title: "Volume Optimization",
  summary:
    "Using calculus to find the largest or smallest possible volume of a three-dimensional object while satisfying a given constraint, combining geometry, algebra, and derivatives.",
  details: `
Volume Optimization is a type of calculus optimization problem where we find the largest or smallest possible volume of a three-dimensional object while satisfying a given constraint.

It combines:

  Geometry — to write the volume formula
  Algebra — to use the constraints
  Calculus — to find the maximum or minimum volume

The central idea is:

Find the dimensions that produce the best possible volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS VOLUME OPTIMIZATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Volume optimization usually asks you to determine dimensions that:

  • maximize the volume of a container
  • minimize the material needed for a fixed volume
  • maximize the capacity of a box
  • find the most efficient cylinder
  • optimize the dimensions of a container

For example:

A rectangular sheet is used to make an open box. What size corner cuts produce the maximum volume?

The goal is:

  Maximize V

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. OBJECTIVE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The objective function is the volume formula you want to optimize.

For a rectangular box:

  V = lwh

For a cylinder:

  V = πr²h

For a cone:

  V = (1/3)πr²h

For a sphere:

  V = (4/3)πr³

The objective function becomes a function such as:

  V(x)

after using the constraints to eliminate extra variables.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. COMMON VOLUME FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangular Box: V = lwh
  Cube: V = s³
  Cylinder: V = πr²h
  Cone: V = (1/3)πr²h
  Sphere: V = (4/3)πr³
  Prism: V = Bh (where B is the area of the base)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For volume optimization, use this process:

  Understand Problem → Define Variables → Write Volume → Write Constraint → 
  Reduce to One Variable → Differentiate → Find Critical Number → Test → Interpret

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: OPEN-TOP BOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common volume optimization problems is an open-top box.

Problem:
A 20 cm × 20 cm square sheet is used to make an open box.

Squares of side length x are cut from each corner.

Find the value of x that gives the maximum volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP 1: UNDERSTAND THE GEOMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We start with:

  20 cm × 20 cm

After cutting squares from the corners:

  Length: 20 - 2x
  Width: 20 - 2x
  Height: x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 2: WRITE THE VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a rectangular box is:

  V = lwh

Therefore:

  V(x) = x(20 - 2x)(20 - 2x)

or:

  V(x) = x(20 - 2x)²

This is our objective function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 3: EXPAND THE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First:

  (20 - 2x)²

Using (a - b)² = a² - 2ab + b², we get:

  (20 - 2x)² = 400 - 80x + 4x²

Therefore:

  V(x) = x(400 - 80x + 4x²)

So:

  V(x) = 400x - 80x² + 4x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 4: DIFFERENTIATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  V'(x) = 400 - 160x + 12x²

Set the derivative equal to zero:

  400 - 160x + 12x² = 0

Rearrange:

  12x² - 160x + 400 = 0

Divide by 4:

  3x² - 40x + 100 = 0

Factor:

  (3x - 10)(x - 10) = 0

Therefore:

  x = 10/3

or:

  x = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. STEP 5: CHECK THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The box dimensions must be positive:

  20 - 2x > 0

Therefore:

  x < 10

Also:

  x > 0

So:

  0 < x < 10

Therefore:

  x = 10 is not a valid interior solution.

The valid critical number is:

  x = 10/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP 6: FIND THE MAXIMUM VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Substitute:

  x = 10/3

into:

  V = x(20 - 2x)²

We get:

  V = (10/3)(20 - 20/3)²

Simplify:

  V = (10/3)(40/3)²

Therefore:

  V = (10/3) · (1600/9)

  V = 16000/27 cm³

Approximately:

  V ≈ 592.59 cm³

So the optimal corner cut is:

  x = 10/3 cm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIMENSIONS OF THE MAXIMUM-VOLUME BOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The height is:

  h = x = 10/3

The length is:

  20 - 2x = 20 - 20/3 = 40/3

The width is also:

  40/3

Therefore:

  40/3 cm × 40/3 cm × 10/3 cm

produces the maximum volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. VOLUME OPTIMIZATION WITH A CYLINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another very important problem involves a cylinder.

Suppose we want to create a cylindrical container with a fixed volume while using the minimum possible surface area.

The volume is:

  V = πr²h

Suppose the required volume is V₀.

Then:

  πr²h = V₀

Solve for h:

  h = V₀/(πr²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SURFACE AREA CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a closed cylinder:

  S = 2πr² + 2πrh

Substitute:

  h = V₀/(πr²)

Then:

  S(r) = 2πr² + 2πr(V₀/(πr²))

Simplify:

  S(r) = 2πr² + 2V₀/r

Now differentiate:

  S'(r) = 4πr - 2V₀/r²

Set:

  S'(r) = 0

Then:

  4πr - 2V₀/r² = 0

Multiply by r²:

  4πr³ - 2V₀ = 0

Therefore:

  2πr³ = V₀

This gives the optimal radius.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT RESULT FOR A CLOSED CYLINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From:

  2πr³ = V

and:

  V = πr²h

we obtain:

  πr²h = 2πr³

Divide by πr²:

  h = 2r

Therefore:

  A closed cylinder that uses the minimum surface area for a fixed volume has 
  a height equal to its diameter.

That is:

  h = 2r

This is an important optimization result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. VOLUME OPTIMIZATION WITH A CONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The volume of a cone is:

  V = (1/3)πr²h

If a constraint connects r and h, we can substitute that relationship into the volume equation.

For example, if:

  h = f(r)

then:

  V(r) = (1/3)πr²f(r)

Differentiate:

  V'(r)

and solve:

  V'(r) = 0

The resulting critical value gives a candidate for the maximum or minimum volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. VOLUME OPTIMIZATION UNDER A SURFACE CONSTRAINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the problem gives a fixed amount of material.

For example:

A cylindrical container has a fixed amount of material available. Find the dimensions that maximize its volume.

The surface area becomes the constraint:

  S = 2πr² + 2πrh

If S is fixed:

  2πr² + 2πrh = S₀

Solve for h:

  h = (S₀ - 2πr²)/(2πr)

Then substitute into:

  V = πr²h

to create:

  V(r)

Then differentiate and find the critical point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. MAXIMUM VS. MINIMUM VOLUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maximum Volume:
  Look for words such as:
    • largest volume
    • greatest capacity
    • maximum capacity
    • biggest container
    • greatest possible volume

  You will generally optimize V.

Minimum Material for a Given Volume:
  The objective may instead be S, where S is surface area.
  The volume becomes the constraint: V = V₀

This distinction is important. You aren't always directly maximizing or minimizing V.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. VOLUME OPTIMIZATION AND THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we obtain a critical number x = c.

We can calculate:

  V''(c)

If:

  V''(c) < 0

then:

  Local maximum

If:

  V''(c) > 0

then:

  Local minimum

However, always consider the domain and endpoints as well.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Physical dimensions must make sense.

For example, for the open-box problem:

  V = x(20 - 2x)²

we require:

  x > 0

and:

  20 - 2x > 0

Therefore:

  0 < x < 10

This prevents us from accepting impossible dimensions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON VOLUME OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rectangular Boxes: V = lwh
    Questions may ask for:
      • maximum volume
      • minimum surface area
      • optimal dimensions

  Open Boxes:
    Often involve: V = x(L - 2x)(W - 2x)

  Cylinders: V = πr²h
    Common goals:
      • maximum volume
      • minimum surface area
      • minimum material

  Cones: V = (1/3)πr²h

  Spheres: V = (4/3)πr³

  Composite Solids:
    You may need to combine several shapes:
      V = V₁ + V₂
    For example: Cylinder + hemisphere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the wrong volume formula
  Make sure you know which solid you're dealing with.
  For example:
    V_cylinder = πr²h
    but:
    V_cone = (1/3)πr²h

Mistake 2: Confusing the objective and constraint
  For example:
    Maximize volume with a fixed surface area.
  Then:
    V = objective
  while:
    S = constraint

Mistake 3: Not reducing to one variable
  Try to obtain V(x) before differentiating.

Mistake 4: Ignoring the domain
  A negative radius or negative height is not physically meaningful.

Mistake 5: Accepting every critical number
  A critical number might be outside the valid domain or might not produce a maximum/minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK COMPARISON: AREA VS. VOLUME OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Area Optimization            Volume Optimization
  ────────────────────────────────────────────────────────
  2-dimensional                3-dimensional
  Optimizes area               Optimizes volume
  A = lw                       V = lwh
  A = πr²                      V = πr²h
  Rectangles                   Boxes
  Circles                      Cylinders
  Triangles                    Cones
  Inscribed shapes             Containers

Both follow essentially the same calculus strategy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. PROBLEM-SOLVING TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For volume optimization:

  1. Identify the solid
  2. Draw a diagram
  3. Define variables
  4. Write the volume formula
  5. Identify the constraint
  6. Solve the constraint for one variable
  7. Create V(x)
  8. Differentiate
  9. Solve V'(x) = 0
  10. Check the domain
  11. Determine maximum/minimum
  12. State the optimal dimensions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Volume Optimization is about finding the most efficient three-dimensional design under a given restriction.

The central pattern is:

  Geometry → Volume Formula → Constraint → V(x) → V'(x) → Critical Number → Optimal Volume

Easy way to remember:

  "What solid am I dealing with? → What is its volume? → What limits its dimensions? → 
   Reduce to one variable → Differentiate → Find the best dimensions."

The most important skill is being able to translate a 3D geometric situation into a one-variable volume function. Once you have V(x), the optimization process is essentially the same as the other applications of derivatives.
  `,
  examples: [
    "Open-top box from 20×20 sheet → x = 10/3 cm, volume = 16000/27 cm³",
    "Cylinder with fixed volume → minimum surface area when h = 2r",
    "Cylinder with fixed surface area → maximize volume when h = 2r",
    "Rectangular box with fixed surface area → optimal dimensions for max volume",
    "Cone with fixed slant height → find max volume",
    "Composite solid (cylinder + hemisphere) → optimize total volume",
  ],
};

export default topic;