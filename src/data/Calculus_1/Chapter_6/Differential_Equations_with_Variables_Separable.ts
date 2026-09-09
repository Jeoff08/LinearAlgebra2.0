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

A differential equation is an equation that relates an unknown function to its derivatives. It is a fundamental tool in mathematics, science, and engineering because it describes how quantities change over time or space. For example, the equation dy/dx = 3x² tells us that the rate of change of y with respect to x is equal to 3x². Solving a differential equation means finding the unknown function that satisfies this relationship. In many cases, the solution involves antidifferentiation, as we can integrate both sides to recover the original function. Differential equations are used to model population growth, motion, heat transfer, chemical reactions, and countless other real-world phenomena. Understanding the structure of a differential equation is the first step toward solving it.

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

The term "separable" refers to the ability to rearrange a differential equation so that all terms containing the dependent variable (y) are on one side and all terms containing the independent variable (x) are on the other. This is possible when the equation can be written in the form dy/dx = g(x)h(y), where g depends only on x and h depends only on y. The key step is to separate the variables by dividing both sides by h(y) and multiplying by dx, yielding (1/h(y)) dy = g(x) dx. Once separated, each side can be integrated independently. This technique works because the differential equation is structured so that the x and y dependencies can be isolated, allowing us to use the fundamental theorem of calculus to find the solution.

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

The general form of a first-order separable differential equation is dy/dx = g(x)h(y), where g is a function of x only and h is a function of y only. This product structure is what allows separation. Many common differential equations, such as those describing exponential growth, radioactive decay, and simple population models, fit this form. To solve, we rewrite the equation as (1/h(y)) dy = g(x) dx, which separates the variables. Then we integrate both sides with respect to their respective variables. The integration yields an implicit or explicit relation between x and y, which is the general solution. This method is one of the first techniques taught for solving differential equations because it is straightforward and widely applicable.

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

Solving a separable differential equation involves a clear sequence of steps. First, identify the variables and rewrite the equation in the form dy/dx = g(x)h(y). Then, separate the variables by moving all y terms (including dy) to one side and all x terms (including dx) to the other side. Next, integrate both sides of the resulting equation. This integration introduces an arbitrary constant of integration. After integrating, solve for y explicitly if possible; otherwise, leave the solution in implicit form. If an initial condition is provided, substitute it to determine the constant. Finally, verify the solution by differentiating it and checking that it satisfies the original differential equation. This step‑by‑step approach ensures accuracy and completeness.

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

Let's work through a simple example to illustrate the method. Consider the equation dy/dx = xy. This is separable because the right-hand side is the product of x and y. We divide both sides by y to get (1/y) dy/dx = x, then multiply by dx to obtain (1/y) dy = x dx. Now the variables are separated. Integrating both sides gives ln|y| = x²/2 + C. Exponentiating yields y = Ce^(x²/2). This is the general solution. We can verify by differentiating: dy/dx = Cx e^(x²/2) = x(Ce^(x²/2)) = xy, confirming the solution. This example illustrates the entire process in a clear and concise manner.

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

Verification is a critical step in solving differential equations. After obtaining a solution, we must differentiate it and substitute into the original equation to ensure it satisfies the relationship. For the solution y = Ce^(x²/2), differentiating gives dy/dx = Cx e^(x²/2). Since y = Ce^(x²/2), we have dy/dx = xy, which matches the original equation. This confirms that our solution is correct. Verification also helps catch errors in integration or algebra. It is a good habit to always check your answer, especially when first learning the method. This reinforces the connection between differentiation and integration and builds confidence in your solution.

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

Often, we are given an initial condition that specifies the value of y at a particular x. This allows us to determine the constant of integration and obtain a unique solution. For example, consider dy/dx = 2xy with y(0) = 3. Separating variables gives (1/y) dy = 2x dx. Integrating yields ln|y| = x² + C, so y = Ce^(x²). Using y(0) = 3 gives 3 = C, so y = 3e^(x²). This is the particular solution that satisfies the initial condition. Initial value problems are common in applications because they describe the state of a system at a starting time, allowing us to predict future behavior. The ability to incorporate initial conditions is a key reason why separable equations are so useful.

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

After separating variables, we obtain an equation of the form f(y) dy = g(x) dx. Each side is a differential expression involving only one variable. Integrating both sides is valid because the differential equation expresses the equality of two differential forms. By integrating, we find the antiderivatives, which gives us a relation between y and x. This is essentially the reverse of differentiation: if the original equation states that the derivative of y with respect to x equals a product, then integrating both sides recovers the functions whose differentials are equal. This is a direct application of the Fundamental Theorem of Calculus. Integration is the natural way to solve for the unknown function when the variables are separated.

After separating variables, we obtain something like:
  f(y) dy = g(x) dx

The differential equation tells us how y changes with respect to x.

Integration allows us to recover the functions:
  ∫ f(y) dy = ∫ g(x) dx

This is why antidifferentiation is directly connected to solving separable differential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3: POLYNOMIAL FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the equation involves powers of y and x, requiring the use of the power rule for integration. Consider dy/dx = x²y³. Separating gives y⁻³ dy = x² dx. Integrating yields -y⁻²/2 = x³/3 + C. This is an implicit solution because y is not isolated. Implicit solutions are acceptable when explicit solving is difficult or impossible. They still describe the relationship between y and x. In many applications, an implicit solution is sufficient for analysis, especially if we only need to evaluate the function numerically or graphically. The power rule is a fundamental tool for integrating polynomial terms in separable equations.

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

A solution to a differential equation can be expressed either explicitly or implicitly. An explicit solution is one where y is isolated on one side, such as y = f(x). This is often the most convenient form for evaluating and graphing. An implicit solution is one where y and x are intertwined in an equation, like F(x, y) = C, and y cannot be easily solved for. Many separable equations yield implicit solutions, especially when integration involves logarithms, inverse trigonometric functions, or other transcendental functions. Both forms are valid and represent the same relationship. The choice between them depends on the context; sometimes implicit solutions are more natural or easier to work with. Understanding both forms is important for interpreting the results of solving differential equations.

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

The logistic equation, dy/dx = y(1 - y), is a classic example of a separable differential equation that models population growth with a carrying capacity. It is separable because the right side is a product of a function of y. Separating gives dy/[y(1 - y)] = dx. The integral on the left requires partial fractions: 1/[y(1 - y)] = 1/y + 1/(1 - y). Integrating yields ln|y| - ln|1 - y| = x + C, which simplifies to ln|y/(1 - y)| = x + C. Exponentiating gives y/(1 - y) = Ce^x, and solving for y yields y = Ce^x/(1 + Ce^x). This solution describes sigmoidal growth, which is common in biology and ecology. This example demonstrates how separation of variables can involve more advanced integration techniques like partial fractions.

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

When solving a separable differential equation by dividing by a function of y, we may inadvertently lose solutions where that function is zero. These are called equilibrium or constant solutions. For example, in dy/dx = y(1 - y), dividing by y(1 - y) assumes it is nonzero. However, y = 0 and y = 1 are also solutions because if y is constant, dy/dx = 0, and the equation holds. These constant solutions correspond to equilibrium states of the system. It is important to check for such solutions separately, especially when the initial condition falls on one of them. Failing to include equilibrium solutions can lead to an incomplete general solution. Always identify any values of y that make the coefficient of dy zero and consider them as additional solutions.

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

One of the most important applications of separable differential equations is modeling exponential growth and decay. The equation dP/dt = kP describes a quantity P that changes at a rate proportional to its current value. Separating variables gives (1/P) dP = k dt. Integrating yields ln|P| = kt + C, so P = Ce^(kt). If k > 0, this represents exponential growth; if k < 0, exponential decay. This model is used for population growth, radioactive decay, compound interest, and many other processes. The constant C is determined by the initial quantity, P(0) = C. This simple yet powerful model is a cornerstone of differential equations and is often the first example students encounter. Its solution relies entirely on separation of variables.

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

To see how the growth model is applied, suppose a population satisfies dP/dt = 0.02P and the initial population is 500. The general solution is P = Ce^(0.02t). Using the initial condition, P(0) = 500, we find C = 500. Thus, P(t) = 500e^(0.02t). This equation predicts that the population will grow exponentially at a rate of 2% per unit time. Such models are used in ecology, economics, and demography to forecast future populations. They also form the basis for more complex models that incorporate carrying capacity or other factors. This example illustrates how separation of variables can be applied to real‑world problems with just a few steps.

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

Sometimes the equation does not have the product form but can still be separated after rearranging. For example, dy/dx = (x² + 1)/(y + 1) is separable because we can multiply both sides by (y + 1) to get (y + 1) dy = (x² + 1) dx. Then we integrate both sides: y²/2 + y = x³/3 + x + C. This is an implicit solution. Such equations often arise from physics and engineering problems where the variables are not obviously separated. The key is to recognize that the derivative can be expressed as a ratio of functions of x and y, allowing separation. With practice, identifying separable forms becomes easier.

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

When an initial condition is provided, we can find the particular solution by substituting the values into the general solution. For the equation y²/2 + y = x³/3 + x + C, if y(0) = 1, then plugging x = 0 and y = 1 gives 1/2 + 1 = C, so C = 3/2. The particular solution is y²/2 + y = x³/3 + x + 3/2. This shows how the constant of integration is determined. Initial conditions are essential in applications because they define the specific state of the system at the starting time. Without them, we have a family of solutions; with them, we get a unique solution that matches the observed data.

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

The general separation method applies to any first-order differential equation that can be written in the form dy/dx = g(x)h(y). The steps are always the same: separate the variables, integrate both sides, add the constant, solve for y if possible, apply any initial condition, and verify the solution. This method is foundational because it introduces the concept of solving differential equations by reducing them to integration problems. It also connects directly to the topic of antidifferentiation, as integration is the primary operation. Mastering separation of variables prepares you for more advanced techniques, such as integrating factors and substitution methods. It is an essential tool in the calculus toolkit.

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

Separation of variables works because the differential equation is structured so that the x and y dependencies can be isolated. The key insight is that the derivative dy/dx is a ratio of differentials, and by rearranging the equation, we can express the relationship between the differentials as an equality of two separated forms. Once separated, each side depends on only one variable, so we can integrate independently. This is possible because the original equation is a product of functions of x and y. The method is rooted in the chain rule and the fundamental theorem of calculus. It is a testament to the power of calculus that such a wide variety of problems can be solved by this simple technique. Understanding why it works deepens your appreciation of the subject.

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

When solving separable equations, several common mistakes can occur. One is not fully separating the variables, leaving y terms on the x side. Another is forgetting the differentials dx and dy after separation, which are essential for integration. Forgetting the constant of integration is a frequent error. Some students also try to combine constants incorrectly, but any arbitrary constant can be renamed. Perhaps the most subtle mistake is dividing by a function of y without checking if that function could be zero, leading to lost equilibrium solutions. Always consider constant solutions separately. Finally, not verifying the solution by differentiation can let errors go undetected. Being aware of these pitfalls helps avoid them and leads to more accurate solutions.

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

This topic directly builds on the concept of antidifferentiation. In fact, separation of variables is essentially a two-step application of antidifferentiation. First, we rearrange the differential equation so that each variable appears with its differential on the appropriate side. Then we integrate both sides separately, which is exactly the process of finding antiderivatives. For example, the simple equation dy/dx = 2x becomes dy = 2x dx, and then y = x² + C. In this case, the equation is already separated, and integration is straightforward. The power of the method lies in its ability to handle more complex equations where the variables are initially mixed. Thus, mastering antidifferentiation is a prerequisite for solving separable differential equations, and this topic serves as a natural bridge between integration and differential equations.

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

Here is a concise summary of the entire method. For a differential equation of the form dy/dx = g(x)h(y), separate to get dy/h(y) = g(x) dx. Then integrate both sides. Add the constant of integration. Solve for y if possible. Use any initial condition to find the constant. Finally, verify by differentiation. This sequence of steps is the core of solving separable equations. Keeping this reference handy can help you work through problems efficiently and accurately. With practice, the process becomes almost automatic.

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

Let's put it all together with a complete example that includes an initial condition. Solve dy/dx = 3xy with y(0) = 2. Separate: (1/y) dy = 3x dx. Integrate: ln|y| = (3/2)x² + C. Exponentiate: y = Ce^((3/2)x²). Apply the initial condition: y(0) = 2 gives C = 2, so y = 2e^((3/2)x²). Verify by differentiating: y' = 2e^((3/2)x²)(3x) = 3x(2e^((3/2)x²)) = 3xy. This matches the original equation. This example covers all the steps and shows how separation of variables leads to a clean solution. It also demonstrates the importance of verification. With practice, you will be able to solve such problems confidently.

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

The key idea of this topic is that a differential equation is separable when we can move all y terms to one side and all x terms to the other. The standard form is dy/dx = g(x)h(y), which leads to (1/h(y)) dy = g(x) dx. Then we integrate both sides. This process converts the differential equation into an algebraic equation involving integrals, which can then be solved for y (or left implicit). Separation of variables is a fundamental technique because it applies to a wide range of problems in science and engineering, from exponential growth to logistic growth and beyond. It is the first method students learn for solving differential equations, and it forms the basis for more advanced techniques. Mastering this method is an essential step in understanding calculus and its applications.

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