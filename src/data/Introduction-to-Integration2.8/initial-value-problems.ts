// filename: initial-value-problems.ts

const topic = {
  id: "initial-value-problems",
  title: "Initial Value Problems (IVPs)",
  summary:
    "Problems that combine a differential equation with an initial condition to determine a specific function, using integration to find the general solution and the initial condition to find the constant C.",
  details: `
An Initial Value Problem (IVP) is a problem where you are given:

  • A differential equation, and
  • An initial condition that tells you the value of the function at a particular point.

The goal is usually to find the specific function that satisfies both.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INITIAL VALUE PROBLEM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  dy/dx = f(x)

This is a differential equation.

If we also know:
  y(x₀) = y₀

then we have an Initial Value Problem.

It can be written as:
  {
    dy/dx = f(x)
    y(x₀) = y₀
  }

The second equation is called the initial condition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT CALLED AN "INITIAL" VALUE PROBLEM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word initial means that we know the value of the function at some starting point.

For example:
  y(0) = 5

means:
  When x = 0, the value of y is 5.

Another example:
  y(2) = 10

means:
  When x = 2, the value of y is 10.

The initial condition allows us to determine the unknown constant C that appears after integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE NEED AN INITIAL CONDITION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  dy/dx = 2x

Integrate:
  y = x² + C

There are infinitely many possible functions because C can be any constant.

For example:
  y = x² + 1
  y = x² + 5
  y = x² - 10

all have derivative:
  2x

So the differential equation alone doesn't give us one unique function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ADDING AN INITIAL CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the problem gives:
  dy/dx = 2x

and:
  y(1) = 5

Now we have:
  y = x² + C

Use the initial condition:
  y(1) = 5

Substitute:
  5 = (1)² + C
  5 = 1 + C

Therefore:
  C = 4

So the specific solution is:
  y = x² + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE GENERAL PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For basic IVPs involving direct integration, use this process:

Step 1: Start with the differential equation
  dy/dx = f(x)

Step 2: Integrate
  y = ∫ f(x) dx

Step 3: Add C
  y = F(x) + C

Step 4: Use the initial condition
  If:
    y(x₀) = y₀
  substitute:
    x = x₀, y = y₀

Step 5: Solve for C

Step 6: Write the particular solution

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 3x²

given:
  y(0) = 4

Step 1: Integrate
  y = ∫ 3x² dx

Using the Power Rule:
  y = x³ + C

Step 2: Apply the initial condition
  We know:
    y(0) = 4

Therefore:
  4 = (0)³ + C
  C = 4

Final Answer:
  y = x³ + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 4x - 3

given:
  y(2) = 7

Integrate:
  y = ∫ (4x - 3) dx
  y = 2x² - 3x + C

Apply:
  y(2) = 7
  7 = 2(2)² - 3(2) + C
  7 = 8 - 6 + C
  7 = 2 + C

Therefore:
  C = 5

Final solution:
  y = 2x² - 3x + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 6x² + 2x - 1

given:
  y(1) = 10

Integrate:
  y = 2x³ + x² - x + C

Apply the initial condition:
  10 = 2(1)³ + (1)² - (1) + C
  10 = 2 + 1 - 1 + C
  10 = 2 + C

Therefore:
  C = 8

Final answer:
  y = 2x³ + x² - x + 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INITIAL CONDITIONS CAN BE AT ANY x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The initial condition doesn't have to be:
  y(0) = y₀

It can be any point.

For example:
  y(3) = 12

means:
  x = 3, y = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH y(3) = 12
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = 2x

given:
  y(3) = 12

Integrate:
  y = x² + C

Apply:
  12 = 3² + C
  12 = 9 + C

Therefore:
  C = 3

Final answer:
  y = x² + 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INITIAL VALUE PROBLEMS AND ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IVPs are closely connected to antiderivatives.

Suppose:
  f'(x) = 6x

Then:
  f(x) = 3x² + C

If we are given:
  f(2) = 10

we can determine C:
  10 = 3(2)² + C
  10 = 12 + C
  C = -2

Therefore:
  f(x) = 3x² - 2

So an IVP essentially asks:

  Which antiderivative satisfies the given initial condition?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential equation:
  dy/dx = f(x)

describes the slope of the solution curve.

There are generally many curves with the same derivative:
  y = F(x) + C

The initial condition chooses one specific curve.

For example:
  y = x² + C

represents a family of parabolas.

If:
  y(1) = 5

only one of those parabolas passes through (1, 5).

That is the particular solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL SOLUTION VS. PARTICULAR SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is important.

General solution:
  Contains an arbitrary constant:
    y = x² + C

Particular solution:
  The initial condition has been used:
    y = x² + 4

The particular solution is the specific member of the family that satisfies the initial condition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IVPs INVOLVING VELOCITY AND POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial Value Problems are extremely common in motion problems.

Suppose acceleration is:
  a(t) = 6t

and initial velocity is:
  v(0) = 2

Since:
  a(t) = v'(t)

we integrate:
  v(t) = ∫ 6t dt
  v(t) = 3t² + C

Apply:
  v(0) = 2
  2 = C

Therefore:
  v(t) = 3t² + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FINDING POSITION FROM VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  v(t) = 3t² + 2

and:
  s(0) = 5

Since:
  v(t) = s'(t)

integrate:
  s(t) = ∫ (3t² + 2) dt
  s(t) = t³ + 2t + C

Apply:
  s(0) = 5
  5 = C

Therefore:
  s(t) = t³ + 2t + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IVP WITH A TRIGONOMETRIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = cos x

given:
  y(0) = 3

Integrate:
  y = sin x + C

Apply:
  3 = sin 0 + C

Since:
  sin 0 = 0

we get:
  C = 3

Therefore:
  y = sin x + 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IVP WITH AN EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve:
  dy/dx = eˣ

given:
  y(0) = 7

Integrate:
  y = eˣ + C

Apply:
  7 = e⁰ + C

Since:
  e⁰ = 1

we have:
  7 = 1 + C
  C = 6

Therefore:
  y = eˣ + 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IVP WITH A LOGARITHMIC INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  dy/dx = 1/x

given:
  y(1) = 4

Integrate:
  y = ln|x| + C

Apply:
  4 = ln|1| + C

Since:
  ln 1 = 0

we get:
  C = 4

Therefore:
  y = ln|x| + 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DEFINITE INTEGRAL CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is another way to represent the solution of an IVP.

Suppose:
  y' = f(x)

and:
  y(x₀) = y₀

Then:
  y(x) = y₀ + ∫ₓ₀ˣ f(t) dt

This is a very important formula.

It says:
  Current value = initial value + accumulated change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE USING THE DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  y' = 2x

and:
  y(1) = 5

We can write:
  y(x) = 5 + ∫₁ˣ 2t dt

Evaluate:
  y(x) = 5 + [t²]₁ˣ
  = 5 + (x² - 1)

Therefore:
  y = x² + 4

This matches the answer we obtained using C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. WHY THIS CONNECTION MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula:
  y(x) = y₀ + ∫ₓ₀ˣ f(t) dt

connects:
  • Derivatives
  • Antiderivatives
  • Definite integrals
  • Initial conditions

This is one of the fundamental ideas behind the Fundamental Theorem of Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. HIGHER-ORDER INITIAL VALUE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An IVP can also involve second derivatives.

For example:
  y'' = 6x

with:
  y(0) = 2

and:
  y'(0) = 3

Now we have two initial conditions because the differential equation is second-order.

Step 1: Integrate once
  y' = ∫ 6x dx
  y' = 3x² + C₁

Use:
  y'(0) = 3

Therefore:
  3 = C₁

So:
  y' = 3x² + 3

Step 2: Integrate again
  y = ∫ (3x² + 3) dx
  y = x³ + 3x + C₂

Use:
  y(0) = 2

Therefore:
  2 = C₂

Final answer:
  y = x³ + 3x + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. NUMBER OF INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a basic rule:

First-order equation:
  Usually requires one initial condition.
    y' = f(x)
  Example:
    y(0) = 5

Second-order equation:
  Usually requires two initial conditions.
    y'' = f(x)
  Example:
    y(0) = 5, y'(0) = 2

Third-order equation:
  Usually requires three initial conditions.

And so on.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting C
  Given:
    y' = 4x
  Incorrect:
    y = 2x²
  Correct:
    y = 2x² + C
  You need C before applying the initial condition.

❌ Mistake 2: Substituting the initial condition incorrectly
  If:
    y(3) = 10
  you must substitute:
    x = 3, y = 10
  not x = 10.

❌ Mistake 3: Forgetting to solve for C
  Finding:
    y = x² + C
  is only the general solution.
  You still need to use the initial condition.

❌ Mistake 4: Losing signs during integration
  For:
    y' = sin x
  the integral is:
    y = -cos x + C
  not:
    y = cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMPLETE WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solve the IVP:
  dy/dx = 4x³ - 6x + 2

with:
  y(1) = 5

Step 1: Integrate
  y = ∫ (4x³ - 6x + 2) dx
  y = x⁴ - 3x² + 2x + C

Step 2: Apply the initial condition
  y(1) = 5

Therefore:
  5 = (1)⁴ - 3(1)² + 2(1) + C
  5 = 1 - 3 + 2 + C
  5 = C

Step 3: Write the particular solution
  y = x⁴ - 3x² + 2x + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. HOW TO SOLVE BASIC IVPs QUICKLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  y' = f(x), y(x₀) = y₀

think:
  Integrate → Substitute → Solve for C

For example:
  y' = 6x², y(2) = 10

Integrate:
  y = 2x³ + C

Substitute:
  10 = 2(2)³ + C
  10 = 16 + C

Solve:
  C = -6

Therefore:
  y = 2x³ - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An Initial Value Problem combines a differential equation with a known value of the function.

General form:
  {
    y' = f(x)
    y(x₀) = y₀
  }

Basic solution method:
  1. Integrate
  2. Add C
  3. Apply the initial condition
  4. Solve for C
  5. Write the particular solution

The deeper idea is:
  Solution = Initial Value + Accumulated Change

or, using a definite integral:
  y(x) = y₀ + ∫ₓ₀ˣ f(t) dt

So an Initial Value Problem is essentially asking:

  "Given the rate of change and where the function starts, what is the function?"
  `,
  examples: [
    "dy/dx = 3x², y(0) = 4 → y = x³ + 4",
    "dy/dx = 4x - 3, y(2) = 7 → y = 2x² - 3x + 5",
    "dy/dx = 6x² + 2x - 1, y(1) = 10 → y = 2x³ + x² - x + 8",
    "dy/dx = 2x, y(3) = 12 → y = x² + 3",
    "dy/dx = cos x, y(0) = 3 → y = sin x + 3",
    "dy/dx = eˣ, y(0) = 7 → y = eˣ + 6",
    "dy/dx = 1/x, y(1) = 4 → y = ln|x| + 4",
  ],
};

export default topic;