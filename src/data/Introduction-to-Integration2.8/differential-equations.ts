// filename: differential-equations.ts

const topic = {
  id: "differential-equations",
  title: "Differential Equations",
  summary:
    "Equations that contain an unknown function and one or more of its derivatives, describing how a quantity changes, with solutions found through integration.",
  details: `
A Differential Equation is an equation that contains an unknown function and one or more of its derivatives.

In simple terms:

  A differential equation describes how something changes.

Instead of directly telling us what a function is, it often tells us about its rate of change, acceleration, growth, decay, or other behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A DIFFERENTIAL EQUATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  dy/dx = 3x²

This is a differential equation because it contains:
  dy/dx

which is the derivative of an unknown function y.

Our goal is to find y.

Integrate both sides:
  y = ∫ 3x² dx
  y = x³ + C

Therefore, y = x³ + C is a solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY ARE THEY CALLED "DIFFERENTIAL" EQUATIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word differential comes from derivatives and differentials.

For example:
  dy/dx

describes how y changes as x changes.

A differential equation might tell us:
  dy/dx = 2x

Instead of directly giving us y, it gives us the rate at which y changes.

We then use integration to recover y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIFFERENTIAL EQUATIONS VS. ORDINARY EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Compare:

Ordinary algebraic equation:
  y = 3x + 2
This directly tells us y.

Differential equation:
  dy/dx = 3
This tells us the slope of y, not y itself.

Integrating:
  y = 3x + C

So differential equations require us to determine a function from information about its derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: FINDING A SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given:
  dy/dx = 6x

Integrate:
  y = ∫ 6x dx
  y = 3x² + C

Therefore:
  y = 3x² + C

This is called the general solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GENERAL SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A general solution usually contains one or more arbitrary constants.

For example:
  y = x² + C

The C represents infinitely many possible solutions.

For different values of C, we get different curves:
  y = x²
  y = x² + 1
  y = x² - 5

All have:
  dy/dx = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PARTICULAR SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If we are given an initial condition, we can determine C.

Suppose:
  dy/dx = 2x

and:
  y(1) = 5

Integrate:
  y = x² + C

Apply:
  5 = 1 + C

Therefore:
  C = 4

So the particular solution is:
  y = x² + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIFFERENTIAL EQUATIONS AND INITIAL VALUE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An Initial Value Problem (IVP) consists of:
  • A differential equation
  • One or more initial conditions

For example:
  {
    dy/dx = 2x
    y(1) = 5
  }

The differential equation tells us the rate of change.

The initial condition tells us where the solution starts.

Together, they determine a specific solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ORDER OF A DIFFERENTIAL EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The order is the highest derivative appearing in the equation.

First-Order Differential Equation:
  Contains dy/dx.
  Example:
    dy/dx = x + y
  This is a first-order differential equation.

Second-Order Differential Equation:
  Contains d²y/dx².
  Example:
    d²y/dx² + y = 0
  This is a second-order differential equation.

Third-Order Differential Equation:
  Contains d³y/dx³.
  Example:
    y''' - 2y' = x
  This is a third-order differential equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ORDER EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  y' + 3y = x
  Highest derivative: y'
  Therefore: First order

Example 2:
  y'' + 4y' + 4y = 0
  Highest derivative: y''
  Therefore: Second order

Example 3:
  y''' - y'' + 2y' = 5
  Highest derivative: y'''
  Therefore: Third order

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LINEAR VS. NONLINEAR DIFFERENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differential equations can also be classified as linear or nonlinear.

Linear Differential Equation:
  A first-order linear equation generally has the form:
    y' + P(x)y = Q(x)
  Example:
    y' + 2y = x
  The dependent variable y and its derivatives appear only to the first power and aren't multiplied together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NONLINEAR DIFFERENTIAL EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A differential equation is nonlinear if it contains things such as:
  y², yy', sin(y), eʸ

For example:
  y' = y² + x

is nonlinear because of y².

Another example:
  y' = xy

is actually linear in y when written as:
  y' - xy = 0

so merely seeing xy does not automatically make an equation nonlinear. The form matters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIFFERENTIAL EQUATIONS FROM MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differential equations are extremely useful for describing motion.

Suppose s(t) is position.

Then:
  v(t) = s'(t)

is velocity.

And:
  a(t) = s''(t)

is acceleration.

Therefore:
  a(t) = d²s/dt²

A differential equation can describe the relationship between position, velocity, and acceleration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: CONSTANT ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  a(t) = 9.8

Since:
  a(t) = v'(t)

we have:
  v'(t) = 9.8

Integrate:
  v(t) = 9.8t + C₁

If:
  v(0) = 0

then:
  C₁ = 0

so:
  v(t) = 9.8t

Integrate again:
  s(t) = 4.9t² + C₂

If:
  s(0) = 10

then:
  C₂ = 10

Therefore:
  s(t) = 4.9t² + 10

This demonstrates how differential equations can describe physical motion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DIFFERENTIAL EQUATIONS AND EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important differential equation is:
  dy/dt = ky

This says:
  The rate of change of y is proportional to y itself.

This model appears in:
  • Population growth
  • Compound interest
  • Radioactive decay
  • Bacterial growth
  • Cooling/heating models
  • Certain chemical processes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SOLVING dy/dt = ky
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  dy/dt = ky

Separate variables:
  (1/y) dy = k dt

Integrate both sides:
  ∫ (1/y) dy = ∫ k dt

Therefore:
  ln|y| = kt + C

Exponentiate:
  |y| = e^(kt+C)

The constant can be absorbed into a new constant:
  y = Ce^(kt)

Thus:
  y = Ce^(kt)

is the general solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If k > 0, then:
  y = Ce^(kt)

represents exponential growth.

For example:
  y = 100e^(0.05t)

The quantity increases over time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If k < 0, then the function represents exponential decay.

For example:
  y = 100e^(-0.05t)

The quantity decreases over time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: POPULATION GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a population satisfies:
  dP/dt = 0.03P

and initially:
  P(0) = 1000

The general solution is:
  P = Ce^(0.03t)

Use:
  P(0) = 1000
  1000 = Ce^0
  C = 1000

Therefore:
  P(t) = 1000e^(0.03t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SEPARABLE DIFFERENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A differential equation is separable if we can rearrange it so that all y's are on one side and all x's are on the other.

For example:
  dy/dx = xy

Separate:
  (1/y) dy = x dx

Integrate:
  ∫ (1/y) dy = ∫ x dx
  ln|y| = x²/2 + C

Therefore:
  y = Ce^(x²/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. ANOTHER SEPARABLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 3xy

Separate:
  (1/y) dy = 3x dx

Integrate:
  ln|y| = (3/2)x² + C

Exponentiate:
  y = Ce^(3x²/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. DIFFERENTIAL EQUATIONS AND INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At the Calculus 1 level, many simple differential equations can be solved using antiderivatives.

For example:
  dy/dx = 4x³ - 2x

Integrate:
  y = x⁴ - x² + C

So:
  dy/dx = f(x) ⇒ y = ∫ f(x) dx

This is one of the most direct connections between differential equations and integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. VERIFYING A SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the differential equation is:
  y' = 2x

and someone proposes:
  y = x² + 5

Differentiate:
  y' = 2x

This matches the differential equation.

Therefore:
  y = x² + 5

is a solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. EXAMPLE OF VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Determine whether:
  y = 3eˣ + 2

is a solution of:
  y' = 3eˣ

Differentiate:
  y' = 3eˣ

This exactly matches the differential equation.

Therefore:
  Yes, it is a solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. DIFFERENTIAL EQUATION VS. SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It's important to distinguish between them.

Differential equation:
  y' = 2x

General solution:
  y = x² + C

Particular solution with y(1) = 5:
  y = x² + 4

So the process is:
  Differential Equation → General Solution → Particular Solution

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. INITIAL CONDITIONS AND CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The number of arbitrary constants is related to the order of the equation.

For a first-order equation:
  y' = f(x)

we usually get:
  y = F(x) + C

One initial condition determines C.

For a second-order equation:
  y'' = f(x)

we usually get:
  y = F(x) + C₁x + C₂

Two initial conditions are generally needed to determine C₁ and C₂.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. COMMON APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differential equations are used to model many real-world systems.

Physics:
  F = ma
  can lead to differential equations involving position and acceleration.

Population:
  dP/dt = kP

Finance:
  Continuous growth can be modeled by:
    dA/dt = rA

Radioactive Decay:
  dN/dt = -kN

Cooling:
  A simple Newton's Law of Cooling model is:
    dT/dt = -k(T - Tₛ)
  where Tₛ is the surrounding temperature.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Treating the derivative as the final answer
  Given:
    y' = 6x
  the answer isn't:
    y = 6x
  You need to integrate:
    y = 3x² + C

❌ Mistake 2: Forgetting C
  Indefinite integration requires:
    +C
  unless an initial condition has already determined the constant.

❌ Mistake 3: Using the wrong number of initial conditions
  A first-order equation generally needs one initial condition.
  A second-order equation generally needs two.

❌ Mistake 4: Confusing y' and y''
  y' = dy/dx is the first derivative.
  y'' = d²y/dx² is the second derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. BASIC CLASSIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Type              Example
  ─────────────────────────────────────────────────
  First-order       y' = x + y
  Second-order      y'' + y = 0
  Linear            y' + 2y = x
  Nonlinear         y' = y² + x
  Separable         y' = xy
  IVP               y' = 2x, y(0) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. A BASIC PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a differential equation, first ask:

Question 1: What is the highest derivative?
  This determines the order.

Question 2: Is there an initial condition?
  If yes, it may be an Initial Value Problem.

Question 3: Can I integrate directly?
  For example:
    y' = f(x)

Question 4: Can I separate variables?
  For example:
    y' = xy
  can become:
    (1/y) dy = x dx

Question 5: Can I verify my answer?
  Differentiate your solution and compare it with the original equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 4x³ + 2x

with:
  y(0) = 3

Step 1: Integrate
  y = ∫ (4x³ + 2x) dx
  y = x⁴ + x² + C

Step 2: Apply the initial condition
  3 = (0)⁴ + (0)² + C

Therefore:
  C = 3

Step 3: Final answer
  y = x⁴ + x² + 3

Step 4: Verify
  Differentiate:
    y' = 4x³ + 2x
  which matches the original differential equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Basic differential equation:
  y' = f(x)
Solution:
  y = ∫ f(x) dx

Initial Value Problem:
  y' = f(x), y(x₀) = y₀

Exponential growth/decay:
  dy/dx = ky
Solution:
  y = Ce^(kx)

Separable equation:
  If:
    dy/dx = g(x)h(y)
  then rearrange:
    (1/h(y)) dy = g(x) dx
  and integrate both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differential equations connect many of the ideas you've been studying:

  Derivative → Rate of Change → Differential Equation

Then:

  Differential Equation → Integration → General Solution

And if an initial condition is provided:

  General Solution + Initial Condition → Particular Solution

The most important idea to remember is:

  A differential equation describes how a quantity changes, and solving it 
  means finding the function whose derivatives satisfy that description.
  `,
  examples: [
    "dy/dx = 3x² → y = x³ + C",
    "dy/dx = 2x, y(1) = 5 → y = x² + 4",
    "dy/dt = ky → y = Ce^(kt)",
    "dy/dx = xy → y = Ce^(x²/2)",
    "dy/dx = 3xy → y = Ce^(3x²/2)",
    "dy/dx = 4x³ - 2x → y = x⁴ - x² + C",
    "dy/dx = 4x³ + 2x, y(0) = 3 → y = x⁴ + x² + 3",
  ],
};

export default topic;