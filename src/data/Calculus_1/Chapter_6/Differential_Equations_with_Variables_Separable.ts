// filename: differential-equations-with-variables-separable.ts

const topic = {
  id: "differential-equations-with-variables-separable",
  title: "Differential Equations with Variables Separable",
  summary:
    "A technique for solving first-order differential equations by rearranging variables so all y-terms are on one side and all x-terms are on the other, then integrating both sides.",
  details: `
A separable differential equation is a differential equation in which we can rearrange the variables so that all expressions involving y are on one side and all expressions involving x are on the other side.

This is one of the most important techniques for solving first-order differential equations.

The basic idea is:
  dy/dx = g(x)h(y)

We rearrange it so that:
  (1/h(y)) dy = g(x) dx

and then integrate both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A DIFFERENTIAL EQUATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before discussing separation of variables, we need to understand what a differential equation is.

A differential equation is an equation involving an unknown function and one or more of its derivatives.

For example:
  dy/dx = 3x²

Here, y is the unknown function, and dy/dx is its derivative.

To solve it, we antidifferentiate:
  dy = 3x² dx

and therefore:
  y = x³ + C

So differential equations are closely connected to differentiation and antidifferentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES "SEPARABLE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word separable means that we can separate the variables.

Suppose we have:
  dy/dx = xy

There are two variables:
  • x
  • y

We want all y's on one side and all x's on the other.

Divide both sides by y:
  (1/y)(dy/dx) = x

Then multiply by dx:
  (1/y) dy = x dx

Now the variables are separated:
  (1/y) dy = x dx

We can integrate both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GENERAL FORM OF A SEPARABLE DIFFERENTIAL EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common form is:
  dy/dx = g(x)h(y)

We separate the variables:
  (1/h(y)) dy = g(x) dx

Then integrate:
  ∫ (1/h(y)) dy = ∫ g(x) dx

After integrating, we solve for y, if possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE BASIC STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a separable differential equation, follow these steps:

Step 1: Identify the variables
  Determine which terms involve x and which involve y.

Step 2: Separate the variables
  Move all y-terms and dy to one side.
  Move all x-terms and dx to the other side.

Step 3: Integrate both sides
  Apply integration rules.

Step 4: Add the constant
  Usually, after integrating: +C.
  You can use one arbitrary constant.

Step 5: Solve for y
  If possible, isolate y.

Step 6: Apply the initial condition
  If a condition such as y(0) = 2 is provided, use it to determine C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: BASIC SEPARABLE EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = xy

Step 1: Separate the variables
  Divide by y:
    (1/y)(dy/dx) = x

  Therefore:
    (1/y) dy = x dx

Step 2: Integrate
  ∫ (1/y) dy = ∫ x dx

  The left side is ln|y|.
  The right side is x²/2.

  Thus:
    ln|y| = x²/2 + C

Step 3: Solve for y
  Exponentiate both sides:
    |y| = e^(x²/2 + C)

  Using the constant property:
    e^(x²/2 + C) = e^C · e^(x²/2)

  Since e^C is just another positive constant, we can write:
    y = Ce^(x²/2)

  This is the general solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CHECKING THE SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We obtained:
  y = Ce^(x²/2)

Differentiate:
  dy/dx = Ce^(x²/2) · x

Since:
  Ce^(x²/2) = y

we get:
  dy/dx = xy

This matches the original equation.

Therefore, the solution is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 2: A SEPARABLE EQUATION WITH AN INITIAL CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 2xy

given:
  y(0) = 3

Separate:
  (1/y) dy = 2x dx

Integrate:
  ∫ (1/y) dy = ∫ 2x dx

Therefore:
  ln|y| = x² + C

Exponentiate:
  y = Ce^(x²)

Now use the initial condition:
  y(0) = 3

Substitute:
  3 = Ce^0

Since e^0 = 1, we obtain:
  C = 3

Therefore:
  y = 3e^(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY DO WE INTEGRATE BOTH SIDES?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After separating variables, we obtain something like:
  f(y) dy = g(x) dx

The differential equation tells us how y changes with respect to x.

Integration allows us to recover the functions:
  ∫ f(y) dy = ∫ g(x) dx

This is why antidifferentiation is directly connected to solving separable differential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3: POLYNOMIAL FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = x²y³

Step 1: Separate
  Divide by y³:
    y⁻³ dy = x² dx

Step 2: Integrate
  ∫ y⁻³ dy = ∫ x² dx

  Using the Power Rule:
    -y⁻²/2 = x³/3 + C

  Therefore:
    -1/(2y²) = x³/3 + C

This is already an implicit solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPLICIT VS. EXPLICIT SOLUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the solution cannot easily be isolated for y.

For example:
  ln|y| = x²/2 + C

is an implicit solution.

If we solve for y:
  y = Ce^(x²/2)

we have an explicit solution.

  Implicit form: F(x, y) = C
  Explicit form: y = f(x)

Both can represent solutions to a differential equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 4: LOGISTIC-TYPE EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  dy/dx = y(1 - y)

This is separable because the right side is a product of a function of y.

Separate:
  dy/[y(1 - y)] = dx

At this point, the left side requires partial fractions:
  1/[y(1 - y)] = 1/y + 1/(1 - y)

Therefore:
  ∫ (1/y + 1/(1 - y)) dy = ∫ dx

Integrating:
  ln|y| - ln|1 - y| = x + C

Using logarithm properties:
  ln|y/(1 - y)| = x + C

Exponentiating gives:
  y/(1 - y) = Ce^x

Solving for y:
  y = Ce^x(1 - y)
  y = Ce^x - Ce^x y
  y + Ce^x y = Ce^x
  y(1 + Ce^x) = Ce^x

Therefore:
  y = Ce^x/(1 + Ce^x)

This is a classic example of how separation of variables can lead to a more complicated integration step.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EQUILIBRIUM SOLUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important detail when separating variables.

Suppose:
  dy/dx = y(1 - y)

We divided by y(1 - y).

But this means we potentially excluded values where:
  y(1 - y) = 0

Solve:
  y = 0 or y = 1

These are constant solutions.

Indeed, if y = 0, then dy/dx = 0 and y(1 - y) = 0.

Likewise, if y = 1, then dy/dx = 0.

Therefore:
  y = 0 and y = 1

are equilibrium solutions.

This is an important consideration whenever dividing by an expression containing y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 5: GROWTH AND DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common application is exponential growth or decay.

Suppose:
  dP/dt = kP

Here:
  P = population or quantity
  t = time
  k = constant growth/decay rate

Separate:
  (1/P) dP = k dt

Integrate:
  ∫ (1/P) dP = ∫ k dt

Therefore:
  ln|P| = kt + C

Exponentiate:
  P = Ce^(kt)

This is the basic exponential growth and decay model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: POPULATION GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a population satisfies:
  dP/dt = 0.02P

and initially:
  P(0) = 500

The general solution is:
  P = Ce^(0.02t)

Apply the initial condition:
  500 = Ce^0

Therefore:
  C = 500

Thus:
  P(t) = 500e^(0.02t)

This tells us how the population changes over time according to the model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE 6: A MORE GENERAL SEPARABLE EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  dy/dx = (x² + 1)/(y + 1)

Separate:
  Multiply both sides by y + 1:
    (y + 1) dy = (x² + 1) dx

Integrate:
  ∫ (y + 1) dy = ∫ (x² + 1) dx

Therefore:
  y²/2 + y = x³/3 + x + C

Thus:
  y²/2 + y = x³/3 + x + C

This is a valid implicit solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. USING AN INITIAL CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the previous equation also gives:
  y(0) = 1

We have:
  y²/2 + y = x³/3 + x + C

Substitute:
  x = 0, y = 1

Then:
  1²/2 + 1 = 0 + 0 + C
  1/2 + 1 = C

Therefore:
  C = 3/2

The particular solution is:
  y²/2 + y = x³/3 + x + 3/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE GENERAL SEPARATION METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  dy/dx = g(x)h(y)

Separate:
  (1/h(y)) dy = g(x) dx

Integrate:
  ∫ (1/h(y)) dy = ∫ g(x) dx

Then:
  • Simplify the integrals.
  • Add the integration constant.
  • Solve for y, if possible.
  • Apply any initial condition.
  • Check the solution by differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHY SEPARATION OF VARIABLES WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  dy/dx = g(x)h(y)

We can think of the equation as saying:
  dy/h(y) = g(x) dx

Now each side involves only one variable:
  y-side = x-side

Integration then gives:
  ∫ dy/h(y) = ∫ g(x) dx

The method works because the differential equation has a structure that allows the x and y dependence to be separated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Not separating completely
  For dy/dx = xy, you should obtain dy/y = x dx.
  Don't leave y on the right-hand side.

Mistake 2: Forgetting dx and dy
  After separation, write: f(y) dy = g(x) dx.
  The differentials are important because they indicate the variables of integration.

Mistake 3: Forgetting the constant
  After integration, you need +C.
  For example: ln|y| = x²/2 + C

Mistake 4: Combining constants unnecessarily
  If you obtain C₁ - C₂, you can simply call the result another arbitrary constant: C.

Mistake 5: Dividing by a variable without checking
  If you divide by y, you should consider whether y = 0 could be a solution.
  For example: dy/dx = y
  Dividing by y gives dy/y = dx.
  But y = 0 is also a solution.
  The general nonzero solution is y = Ceˣ, and C = 0 actually includes the zero solution in this particular case.
  For more complicated equations, however, equilibrium solutions can be lost during division, so they should be checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. CONNECTION TO ANTIDIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This topic directly builds on what you just studied.

You learned:
  Antidifferentiation means reversing differentiation.

For example:
  dy/dx = 2x
  becomes:
    dy = 2x dx
  and then:
    y = ∫ 2x dx
  so:
    y = x² + C

Separation of variables uses the same idea, but first rearranges the differential equation so that it can be integrated.

Therefore:
  Separation of Variables → Antidifferentiation → Solution

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a differential equation:
  dy/dx = g(x)h(y)

use:

  Separate:
    dy/h(y) = g(x) dx

  Integrate:
    ∫ dy/h(y) = ∫ g(x) dx

  Add constant:
    +C

  Solve for y:
    If possible.

  Apply initial condition:
    For example: y(x₀) = y₀

  Verify:
    Differentiate the resulting function and substitute it back into the original differential equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 3xy

with:
  y(0) = 2

Step 1: Separate
  (1/y) dy = 3x dx

Step 2: Integrate
  ∫ (1/y) dy = ∫ 3x dx

Therefore:
  ln|y| = (3/2)x² + C

Step 3: Exponentiate
  y = Ce^((3/2)x²)

Step 4: Apply y(0) = 2
  2 = Ce^0

Therefore:
  C = 2

Final answer:
  y = 2e^((3/2)x²)

Step 5: Verify
  Differentiate:
    y' = 2e^((3/2)x²)(3x)

  Therefore:
    y' = 6x e^((3/2)x²)

  Since y = 2e^((3/2)x²), we have:
    y' = 3xy

This matches the original equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A separable differential equation is one where we can rearrange the equation so that the y-terms are on one side and the x-terms are on the other.

The standard form is:
  dy/dx = g(x)h(y)

which becomes:
  (1/h(y)) dy = g(x) dx

Then integrate:
  ∫ (1/h(y)) dy = ∫ g(x) dx

In simple terms:

  Separate the variables → integrate both sides → solve for y → 
  use the initial condition if given → verify the answer.

This topic is an important bridge between antidifferentiation and differential equations, and it prepares you for more advanced topics such as growth and decay, logistic equations, applications of differential equations, and first-order differential equations.
  `,
  examples: [
    "dy/dx = xy → y = Ce^(x²/2)",
    "dy/dx = 2xy, y(0) = 3 → y = 3e^(x²)",
    "dy/dx = x²y³ → -1/(2y²) = x³/3 + C",
    "dy/dx = y(1-y) → y = Ce^x/(1 + Ce^x)",
    "dP/dt = kP → P = Ce^(kt)",
    "dy/dx = (x²+1)/(y+1) → y²/2 + y = x³/3 + x + C",
    "dy/dx = 3xy, y(0) = 2 → y = 2e^((3/2)x²)",
  ],
};

export default topic;