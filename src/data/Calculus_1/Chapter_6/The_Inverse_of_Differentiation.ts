// filename: the-inverse-of-differentiation.ts

const topic = {
  id: "the-inverse-of-differentiation",
  title: "The Inverse of Differentiation",
  summary:
    "The process of going backward from a derivative to the original function, called antidifferentiation, producing antiderivatives represented by indefinite integrals ∫ f(x) dx = F(x) + C.",
  details: `
The inverse of differentiation is the process of going backward from a derivative to the original function.

If differentiation tells us:
  f(x) → f'(x)

then the inverse process tries to recover f(x) from f'(x).

This inverse process is called antidifferentiation, and the result is called an antiderivative.

The main notation is:
  ∫ f(x) dx

This is called an indefinite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIFFERENTIATION VS. ITS INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiation and its inverse are two sides of the same coin in calculus. Differentiation takes a function and produces its derivative, representing the instantaneous rate of change. The inverse operation, antidifferentiation, starts with the derivative and asks: "What function, when differentiated, gives this result?" This is not a one-to-one process because any constant added to a function disappears when differentiated. Consequently, the inverse operation yields a family of functions differing by an arbitrary constant. This relationship is fundamental to integral calculus and is the basis for solving differential equations, recovering position from velocity, and many other applications. Understanding this inverse relationship is essential for appreciating the unity of calculus.

Suppose we have:
  f(x) = x³

Differentiate:
  f'(x) = 3x²

So differentiation gives:
  x³ → 3x²

The inverse of differentiation goes in the opposite direction:
  3x² → x³ + C

Therefore:
  ∫ 3x² dx = x³ + C

Why do we include C?
  Because many different functions have the same derivative.

For example:
  d/dx (x³) = 3x²
and:
  d/dx (x³ + 5) = 3x²
and:
  d/dx (x³ - 100) = 3x²

The constant disappears when differentiated.

Therefore, we must include an arbitrary constant: C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS AN ANTIDERIVATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An antiderivative is a function that reverses the process of differentiation. Given a function f(x), an antiderivative is any function F(x) such that F'(x) = f(x). This concept is central to integral calculus because it allows us to recover a function from its rate of change. For example, if we know the velocity of an object, we can find its position by finding an antiderivative of the velocity function. However, antiderivatives are not unique; adding any constant to F(x) yields another antiderivative because the derivative of a constant is zero. This non‑uniqueness is why we include the constant of integration, C. Mastering the idea of antiderivatives is the first step toward understanding indefinite integrals and the Fundamental Theorem of Calculus.

A function F(x) is called an antiderivative of f(x) if:
  F'(x) = f(x)

For example, consider f(x) = 6x.

We want to find a function whose derivative is 6x.

Since:
  d/dx (3x²) = 6x

an antiderivative is:
  F(x) = 3x²

But it could also be:
  3x² + 7
or:
  3x² - 20

because:
  d/dx (C) = 0

Therefore, the complete answer is:
  F(x) = 3x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE INTEGRAL NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral notation is a concise way to represent the process of finding antiderivatives. The symbol ∫, introduced by Leibniz, stands for "sum" and is used to denote the indefinite integral. The expression ∫ f(x) dx means "find all functions whose derivative is f(x)." The function f(x) is called the integrand, and dx indicates that the integration is performed with respect to the variable x. The result includes the constant of integration C because differentiation loses constant information. This notation is not just a shorthand; it is the foundation of the calculus of integrals and leads directly to the Fundamental Theorem of Calculus, which connects differentiation and integration. Understanding this notation is essential for working with integrals in both theoretical and applied contexts.

The inverse of differentiation is represented using the integral symbol:
  ∫

For example:
  ∫ 6x dx

means:
  Find a function whose derivative is 6x.

Therefore:
  ∫ 6x dx = 3x² + C

The parts of the notation are:
  ∫ f(x) dx

where:
  ∫ = integral symbol
  f(x) = function being integrated
  dx = variable of integration
  C = arbitrary constant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE FUNDAMENTAL RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship between differentiation and antidifferentiation is one of the most important in calculus. If F is an antiderivative of f, then differentiating F gives back f, and integrating f gives F (up to a constant). This inverse relationship is expressed by the two fundamental equations: F'(x) = f(x) and ∫ f(x) dx = F(x) + C. This duality is the basis for the Fundamental Theorem of Calculus, which connects the two main branches of calculus: differential and integral. It also provides a powerful method for evaluating definite integrals: find an antiderivative, evaluate it at the limits, and subtract. This relationship is not just theoretical; it is the practical tool used in countless applications, from physics to economics.

Differentiation and antidifferentiation essentially undo each other.

If:
  F'(x) = f(x)

then:
  ∫ f(x) dx = F(x) + C

Conversely:
  d/dx [∫ f(x) dx] = f(x)

For example:
  ∫ 4x³ dx = x⁴ + C

Check it by differentiation:
  d/dx (x⁴ + C) = 4x³

Therefore, the result is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE POWER RULE FOR ANTIDIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule for antidifferentiation is the reverse of the power rule for differentiation. It states that the antiderivative of xⁿ is x^(n+1)/(n+1) + C, provided n ≠ -1. This rule is a direct consequence of the derivative of x^(n+1) being (n+1)xⁿ. It is one of the most frequently used integration rules because polynomials and many other functions can be expressed as sums of powers of x. The procedure is simple: increase the exponent by one, divide by the new exponent, and add the constant of integration. Mastery of this rule is essential for integrating polynomial functions and for building a foundation for more advanced integration techniques.

One of the most important formulas is the Power Rule for Integration.

For xⁿ, we have:
  ∫ xⁿ dx = x^(n+1)/(n+1) + C

provided n ≠ -1.

Notice what happens:
  Differentiation: xⁿ → nxⁿ⁻¹
  Antidifferentiation: xⁿ → x^(n+1)/(n+1)

In antidifferentiation, we:
  • Add 1 to the exponent
  • Divide by the new exponent
  • Add C

Example:
  Evaluate ∫ x⁴ dx.

  Add 1 to the exponent: 4 + 1 = 5.

  Divide by 5:
    ∫ x⁴ dx = x⁵/5 + C

  Check:
    d/dx (x⁵/5 + C) = x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WITH A NEGATIVE EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule works for negative exponents as well, as long as n ≠ -1. This allows us to integrate reciprocal powers, which are common in calculus problems. For example, the antiderivative of x⁻² is -x⁻¹ + C, which simplifies to -1/x + C. This shows that the power rule is versatile and applies to rational functions. Being able to integrate negative powers is essential for solving problems involving rates of change that decay or grow with power‑law behavior. The power rule's extension to negative exponents demonstrates its generality and utility in a wide range of applications.

Evaluate ∫ x⁻² dx.

Add 1 to the exponent:
  -2 + 1 = -1

Divide by -1:
  ∫ x⁻² dx = -x⁻¹ + C

Therefore:
  ∫ x⁻² dx = -1/x + C

Check:
  d/dx (-1/x) = 1/x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE SPECIAL CASE n = -1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule fails when n = -1 because the formula would require division by zero. Instead, the antiderivative of 1/x is the natural logarithm of the absolute value of x, plus C. This is one of the most important special cases in calculus, as it frequently arises in integration of rational functions and in solving differential equations. The natural logarithm's appearance here is not arbitrary; it arises because the derivative of ln|x| is 1/x. This result underscores the deep connection between exponential and logarithmic functions and is essential for integrating functions of the form 1/x. Remembering this special case is crucial for success in calculus.

The Power Rule does not work when n = -1.

Why?
  Because the formula would require division by n + 1 = 0.

Instead, we use the logarithm formula:
  ∫ 1/x dx = ln|x| + C

This is a very important special case.

Check:
  d/dx (ln|x|) = 1/x

Therefore:
  ∫ x⁻¹ dx = ln|x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple rule states that a constant factor can be moved outside the integral sign. This property follows from the linearity of differentiation and integration. It simplifies integration by allowing us to focus on the variable part of the function first, then multiply the result by the constant. For example, integrating 5x³ is the same as 5 times the integral of x³. This rule is used extensively when integrating polynomials and other functions with constant coefficients. It also highlights the linear nature of the integration operator, which is a fundamental property of calculus.

If k is a constant, then:
  ∫ k f(x) dx = k ∫ f(x) dx

Example:
  ∫ 5x³ dx

Take the constant 5 outside:
  5∫ x³ dx

Integrate:
  5(x⁴/4) + C

Therefore:
  ∫ 5x³ dx = (5/4)x⁴ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sum rule allows us to integrate a sum of functions by integrating each term separately. This is a direct consequence of the linearity of the integral and is extremely useful when dealing with polynomials, which are sums of power functions. For example, the integral of x³ + x² + 2x is the sum of the integrals of each term. This rule greatly simplifies integration because we can break down complex functions into simpler components. It is one of the basic properties of indefinite integrals and is used in almost every integration problem.

The integral of a sum can be separated:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Example:
  Evaluate ∫ (x³ + x² + 2x) dx.

  Separate:
    ∫ x³ dx + ∫ x² dx + ∫ 2x dx

  Integrate each:
    x⁴/4 + x³/3 + x² + C

  Therefore:
    ∫ (x³ + x² + 2x) dx = x⁴/4 + x³/3 + x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The difference rule is the natural counterpart to the sum rule. It states that the integral of a difference of two functions is the difference of their integrals. This follows from the linearity of integration and allows us to handle subtraction in integrands. For example, ∫ (6x² - 4x) dx = ∫ 6x² dx - ∫ 4x dx. This rule is essential for integrating polynomials with both positive and negative terms. Combined with the sum rule, it enables the integration of any linear combination of functions.

Similarly:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Example:
  ∫ (6x² - 4x) dx

Integrate term by term:
  6(x³/3) - 4(x²/2) + C

Therefore:
  ∫ (6x² - 4x) dx = 2x³ - 2x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several antiderivative formulas that are used so frequently that they should be memorized. These include the power rule, the reciprocal rule (natural logarithm), the exponential rule, and the basic trigonometric rules for sine, cosine, secant squared, and cosecant squared. Knowing these formulas by heart saves time and reduces errors when solving integration problems. They are the building blocks for more complex integration techniques and are essential for success in calculus. The table below lists the most common ones, which will appear repeatedly in both theoretical and applied contexts.

There are several formulas that should be memorized.

  Power:
    ∫ xⁿ dx = x^(n+1)/(n+1) + C

  Reciprocal:
    ∫ 1/x dx = ln|x| + C

  Exponential:
    ∫ eˣ dx = eˣ + C

  Sine:
    ∫ sin x dx = -cos x + C

  Cosine:
    ∫ cos x dx = sin x + C

  Secant squared:
    ∫ sec² x dx = tan x + C

  Cosecant squared:
    ∫ csc² x dx = -cot x + C

  Secant tangent:
    ∫ sec x tan x dx = sec x + C

  Cosecant cotangent:
    ∫ csc x cot x dx = -csc x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY +C IS NECESSARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant of integration, +C, is not an optional extra; it is an essential part of the antiderivative. Because the derivative of any constant is zero, adding a constant to an antiderivative does not change its derivative. Therefore, if F(x) is an antiderivative of f(x), then F(x) + C is also an antiderivative for any real number C. This family of functions represents all possible antiderivatives. Omitting the constant would give only one particular solution, which is incomplete. The +C is a reminder that antidifferentiation is not a single operation but a process that yields a family of functions. This concept is fundamental to indefinite integration and must always be included unless a specific initial condition determines the value of C.

This is one of the most important ideas in antidifferentiation.

Suppose f(x) = 2x.

One antiderivative is x².

But x² + 10 also has derivative 2x.

So does x² - 50.

In fact, x² + C represents all possible antiderivatives.

Thus:
  ∫ 2x dx = x² + C

The +C represents the entire family of functions that differ only by a constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GEOMETRIC MEANING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, the constant of integration corresponds to vertical translations of the graph of the antiderivative. For a given derivative f(x), any antiderivative F(x) + C represents a curve whose slope at each point is f(x). Different values of C produce different curves, all with the same slopes at corresponding x‑values. This means the family of antiderivatives is a family of curves that are vertical shifts of one another. This geometric interpretation helps to visualize why the constant is necessary and why antiderivatives are not unique. It also provides intuition for understanding the relationship between a function and its integral.

Antiderivatives can be viewed as a family of curves.

Suppose F(x) = x² + C.

Different values of C produce different curves:
  y = x²,
  y = x² + 2,
  y = x² - 3,

etc.

All these curves have the same derivative:
  F'(x) = 2x

Therefore, they all have the same slope at corresponding x-values.

The constant C simply shifts the graph vertically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ANTIDERIVATIVES AND INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When an initial condition is given, we can find the specific antiderivative that satisfies it. An initial condition specifies the value of the antiderivative at a particular point, which allows us to solve for the constant C. This process is known as solving an initial value problem. It is widely used in physics and engineering to determine the motion of objects from known accelerations and initial positions or velocities. The ability to use initial conditions to determine the constant is what makes antidifferentiation a practical tool for modeling real‑world phenomena. Without initial conditions, we only have a family of solutions; with them, we get a unique solution that matches the given data.

Sometimes we are given an additional condition that allows us to determine C.

For example:
  f'(x) = 6x
and:
  f(2) = 10

First integrate:
  f(x) = 3x² + C

Now use the condition f(2) = 10.

Substitute:
  10 = 3(2)² + C
  10 = 12 + C

Therefore:
  C = -2

So:
  f(x) = 3x² - 2

This is called finding a particular solution from an initial condition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANTIDIFFERENTIATION AS REVERSE DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thinking of antidifferentiation as the reverse of differentiation is the most intuitive way to understand it. If we know the derivative, we ask: "What function could have produced this derivative?" This reverse process is exactly what we do when we integrate. For example, knowing that the derivative of x⁵ is 5x⁴ tells us immediately that the antiderivative of 5x⁴ is x⁵ + C. This perspective leverages our knowledge of derivatives to build integration skills. It also reinforces the idea that differentiation and integration are inverse operations, a theme that runs throughout calculus.

A useful way to think about the process is:

Differentiation:
  x⁵ becomes 5x⁴

Antidifferentiation:
  5x⁴ becomes x⁵ + C

Another example:
  sin x → cos x

Therefore:
  cos x → sin x + C

And:
  eˣ → eˣ

Therefore:
  eˣ → eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. CHECKING AN ANTIDERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A simple and reliable way to verify an antiderivative is to differentiate it. If the derivative equals the original integrand, then the antiderivative is correct. This check is based on the inverse relationship between differentiation and integration. It is a good practice to always verify your answers, especially when you are learning. This habit not only catches errors but also reinforces your understanding of the connection between the two operations. The verification step is quick and can save you from costly mistakes in exams and assignments.

The easiest way to check an integration answer is to differentiate it.

Suppose you obtained:
  F(x) = x⁴/4 + 3x² + C

Differentiate:
  F'(x) = x³ + 6x

Therefore:
  ∫ (x³ + 6x) dx = x⁴/4 + 3x² + C

If differentiating your answer produces the original integrand, your answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT DIFFERENCE BETWEEN AN INDEFINITE AND DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Indefinite integrals represent families of antiderivatives and include the constant of integration. Definite integrals, on the other hand, represent the net accumulation of a function over an interval and yield a numerical value. The definite integral is evaluated by finding an antiderivative, substituting the upper and lower limits, and subtracting. The constant of integration cancels out in this process, so it is not included in the final answer. Understanding this distinction is essential for applying the Fundamental Theorem of Calculus correctly. Indefinite integrals are the building blocks for definite integrals, and both are central to calculus.

The indefinite integral:
  ∫ f(x) dx

gives a family of antiderivatives:
  F(x) + C

A definite integral:
  ∫ₐᵇ f(x) dx

produces a numerical value and does not normally include +C.

For example:
  ∫ 2x dx = x² + C

But:
  ∫₁³ 2x dx

is evaluated as:
  [x²]₁³ = 3² - 1² = 8

The C disappears when evaluating a definite integral because C - C = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FUNDAMENTAL IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental idea is that differentiation and antidifferentiation are inverse operations. This duality is captured by the two equations: d/dx [F(x)] = f(x) and ∫ f(x) dx = F(x) + C. This inverse relationship is the cornerstone of integral calculus and is the basis for the Fundamental Theorem of Calculus, which connects differentiation and integration in a profound way. It allows us to solve differential equations, compute areas, and analyze accumulated change. Understanding this fundamental idea is essential for progressing in calculus and for applying it to real‑world problems.

The inverse relationship can be summarized as:
  d/dx [F(x)] = f(x)
and:
  ∫ f(x) dx = F(x) + C

So:
  Differentiation ↔ Antidifferentiation

They are opposite processes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table provides a side‑by‑side comparison of differentiation and its inverse for several common functions. It shows how the derivative of a function leads to its antiderivative. This reference is useful for quickly recalling the relationship between a function and its integral. The pattern is consistent: differentiation reduces the power by one and multiplies by the exponent, while antidifferentiation increases the power by one and divides by the new exponent. For exponential and trigonometric functions, the pattern follows directly from their derivatives. Memorizing this table will help you recognize antiderivatives quickly.

  Differentiation                   Inverse / Antidifferentiation
  ──────────────────────────────────────────────────────────────────────────────
  xⁿ → nxⁿ⁻¹                        xⁿ → x^(n+1)/(n+1) + C
  eˣ → eˣ                           eˣ → eˣ + C
  sin x → cos x                     cos x → sin x + C
  cos x → -sin x                    sin x → -cos x + C
  1/x → -1/x²                       1/x → ln|x| + C
  sec² x → 2sec²x tan x             sec² x → tan x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a first course in calculus, these are the essential antiderivative formulas that you should memorize. They cover the power rule, the reciprocal rule, the exponential rule, and the basic trigonometric rules for sine, cosine, secant squared, and cosecant squared. These formulas are the foundation for all integration work and will be used repeatedly in solving problems. Having them readily available will save you time and help you avoid errors. Make sure you can recall them quickly and accurately.

For Calculus 1, these are especially important:

  ∫ xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1
  ∫ 1/x dx = ln|x| + C
  ∫ eˣ dx = eˣ + C
  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ sec² x dx = tan x + C
  ∫ csc² x dx = -cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse of differentiation is called antidifferentiation. If F'(x) = f(x), then ∫ f(x) dx = F(x) + C. The most important thing to remember is that differentiation takes a function and finds its rate of change, while antidifferentiation starts with the rate of change and reconstructs the original function, up to an arbitrary constant C. This topic is the foundation for the next major Calculus 1 topics: indefinite integrals, basic integration formulas, substitution, definite integrals, the Fundamental Theorem of Calculus, and applications of integration. Mastering this inverse relationship is essential for success in calculus and its applications.

The inverse of differentiation is called antidifferentiation.

If:
  F'(x) = f(x)

then:
  ∫ f(x) dx = F(x) + C

The most important thing to remember is:

  Differentiation takes a function and finds its rate of change. Antidifferentiation 
  starts with the rate of change and reconstructs the original function, up to 
  an arbitrary constant C.

This topic is the foundation for the next major Calculus 1 topics: indefinite integrals, basic integration formulas, substitution, definite integrals, the Fundamental Theorem of Calculus, and applications of integration.
  `,
  examples: [
    "∫ 3x² dx = x³ + C",
    "∫ x⁴ dx = x⁵/5 + C",
    "∫ x⁻² dx = -1/x + C",
    "∫ 1/x dx = ln|x| + C",
    "∫ 5x³ dx = (5/4)x⁴ + C",
    "∫ (x³ + x² + 2x) dx = x⁴/4 + x³/3 + x² + C",
    "f'(x) = 6x, f(2) = 10 → f(x) = 3x² - 2",
  ],
};

export default topic;