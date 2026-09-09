// filename: antidifferentiation.ts

const topic = {
  id: "antidifferentiation",
  title: "Antidifferentiation",
  summary:
    "The process of finding the antiderivative of a function, also called indefinite integration, represented by ∫ f(x) dx = F(x) + C, where F'(x) = f(x).",
  details: `
Antidifferentiation is the process of finding the antiderivative of a function. It is also commonly called integration when we are finding an indefinite integral.

If differentiation moves from a function to its derivative:
  F(x) → F'(x)

then antidifferentiation works in the opposite direction:
  F'(x) → F(x) + C

The fundamental idea is:
  ∫ f(x) dx = F(x) + C

where:
  F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES ANTIDIFFERENTIATION MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation is the reverse process of differentiation. While differentiation gives the instantaneous rate of change of a function, antidifferentiation asks the inverse question: given a rate of change, what function produces it? This is analogous to asking, "If I know the velocity of an object, what is its position?" The answer is not unique because any constant offset does not affect the derivative. Therefore, the result of antidifferentiation is a family of functions, each differing by a constant. The notation ∫ f(x) dx represents the set of all antiderivatives of f(x). Understanding this concept is the first step toward integral calculus and is essential for solving problems in physics, economics, and engineering where we need to recover a quantity from its rate of change.

Suppose we are given:
  f(x) = 6x

The question is:
  What function has a derivative equal to 6x?

We know that:
  d/dx (3x²) = 6x

Therefore:
  3x² is an antiderivative of 6x.

But it is not the only one.

For example:
  d/dx (3x² + 5) = 6x
and:
  d/dx (3x² - 20) = 6x

Therefore, all antiderivatives can be represented by:
  3x² + C

Thus:
  ∫ 6x dx = 3x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ANTIDIFFERENTIATION IS REVERSE DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to understand antidifferentiation is to view it as the inverse operation of differentiation, much like subtraction is the inverse of addition. If differentiation takes a function and produces its derivative, then antidifferentiation takes that derivative and recovers the original function (up to a constant). This inverse relationship is captured by the Fundamental Theorem of Calculus, which connects the two major branches of calculus. In practice, whenever you have a derivative formula, you can reverse it to get an antiderivative. For example, knowing that the derivative of x⁴ is 4x³ immediately tells us that the antiderivative of 4x³ is x⁴ + C. This symmetry makes learning integration easier because you can leverage your existing knowledge of derivatives.

This is the easiest way to understand the concept.

Differentiation:
  x⁴ becomes 4x³

Antidifferentiation:
  4x³ becomes x⁴ + C

Therefore:
  d/dx (x⁴) = 4x³
and:
  ∫ 4x³ dx = x⁴ + C

The processes essentially undo each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS +C INCLUDED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant of integration, +C, is included because the derivative of any constant is zero. When we differentiate a function, any constant term disappears, so when we reverse the process, we cannot know what constant was originally present. For example, the functions x³, x³ + 10, and x³ - 5 all have the same derivative: 3x². Therefore, the antiderivative of 3x² is not a single function but a family of functions x³ + C. This constant represents all possible vertical shifts of the antiderivative graph, which do not affect the slope at any point. Including +C is essential in indefinite integration to correctly represent the entire set of antiderivatives.

This is one of the most important concepts in antidifferentiation.

Suppose F(x) = x³.

Then:
  F'(x) = 3x²

Now consider G(x) = x³ + 10.

Its derivative is also:
  G'(x) = 3x²

The constant 10 disappears because:
  d/dx (10) = 0

In fact:
  d/dx (C) = 0

for any constant C.

Therefore, when reversing differentiation, we cannot determine which constant was originally present.

That is why we write:
  +C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE CONSTANT OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol C in the antiderivative expression is called the constant of integration. It is a placeholder for any real number, and its purpose is to represent the infinite family of functions that share the same derivative. For example, ∫ 4x³ dx = x⁴ + C gives us x⁴, x⁴ + 1, x⁴ - 3, and so on all of which differentiate to 4x³. This family is sometimes called the general antiderivative. When additional information, such as a specific point on the curve, is provided, we can determine the exact value of C and obtain a particular antiderivative. The constant of integration is a fundamental concept in indefinite integration and distinguishes it from definite integration, which yields a numerical value.

The C in F(x) + C is called the constant of integration.

For example:
  ∫ 4x³ dx = x⁴ + C

This represents infinitely many functions:
  x⁴, x⁴ + 1, x⁴ + 5, x⁴ - 100,

and so on.

All have the same derivative:
  4x³

Thus, C represents the entire family of possible antiderivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE BASIC ANTIDIFFERENTIATION FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule for integration is the most fundamental formula for antidifferentiation. It states that the integral of x^n with respect to x is x^(n+1)/(n+1) + C, provided n is not equal to -1. This rule is a direct reversal of the differentiation power rule. The procedure is simple: increase the exponent by 1, divide by the new exponent, and add the constant of integration. This rule applies to all real numbers n except -1, because that would involve division by zero. It is the first integration technique students learn and is used extensively in integrating polynomial functions and other power functions. Mastering this rule is essential for success in calculus.

The most important rule is the Power Rule for Integration:
  ∫ xⁿ dx = x^(n+1)/(n+1) + C

where:
  n ≠ -1

The procedure:
  When integrating a power of x:
    • Add 1 to the exponent.
    • Divide by the new exponent.
    • Add C.

Example:
  Evaluate: ∫ x⁵ dx.

  Add 1 to the exponent: 5 + 1 = 6.

  Divide by 6: x⁶/6.

  Add C:
    ∫ x⁵ dx = x⁶/6 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES THE POWER RULE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule for integration can be verified by differentiating the result. Suppose we claim that the antiderivative of xⁿ is x^(n+1)/(n+1). Differentiating this expression gives (n+1)xⁿ/(n+1) = xⁿ, which is the original integrand. This confirms that the formula is correct for any n ≠ -1. The constant of integration C is added because its derivative is zero and does not affect the verification. This method of checking an antiderivative by differentiation is a reliable way to ensure correctness. Understanding the derivation of the power rule helps in recognizing why it works and reinforces the inverse relationship between differentiation and integration.

We can verify it using differentiation.

Suppose:
  F(x) = x^(n+1)/(n+1)

Differentiate:
  F'(x) = (1/(n+1))(n+1)xⁿ

The n+1 terms cancel:
  F'(x) = xⁿ

Therefore:
  ∫ xⁿ dx = x^(n+1)/(n+1) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple rule allows us to factor constants out of an integral. If a function is multiplied by a constant, we can pull that constant outside the integral sign and integrate the remaining function. This simplification often makes integration easier. For example, to integrate 7x⁴, we write 7∫ x⁴ dx, then apply the power rule to get 7(x⁵/5) = (7/5)x⁵ + C. This rule follows from the linearity of the derivative and is a basic property of integrals. It is used frequently when dealing with polynomial terms and other functions with constant coefficients. Remember that the constant C is still added at the end.

Constants can be taken outside an integral:
  ∫ c f(x) dx = c ∫ f(x) dx

Example:
  Evaluate: ∫ 7x⁴ dx.

  Take out 7:
    7∫ x⁴ dx

  Apply the Power Rule:
    7(x⁵/5) + C

  Therefore:
    ∫ 7x⁴ dx = (7/5)x⁵ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sum rule states that the integral of a sum of functions is the sum of their integrals. This rule allows us to integrate each term of a polynomial or sum separately, which greatly simplifies the process. For example, to integrate x³ + 4x² + 5x, we integrate each term individually: x⁴/4 + 4x³/3 + 5x²/2, and then add the constant C. This is a direct consequence of the linearity of the derivative, which distributes over addition. The sum rule is one of the basic properties of indefinite integrals and is used extensively in integration of algebraic expressions. It also applies to differences, as we will see next.

The integral of a sum can be separated:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Example:
  Evaluate: ∫ (x³ + 4x² + 5x) dx.

  Integrate each term:
    ∫ x³ dx + ∫ 4x² dx + ∫ 5x dx

  Therefore:
    x⁴/4 + 4x³/3 + 5x²/2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The difference rule is similar to the sum rule: the integral of a difference of two functions is the difference of their integrals. This follows from the linearity of integration and allows us to handle subtraction in integrands. For example, to integrate 5x⁴ - 3x², we integrate 5x⁴ to get x⁵ and integrate 3x² to get x³, then subtract: x⁵ - x³ + C. This rule is useful when integrating polynomials with both positive and negative terms. Combined with the sum rule, it enables the integration of any polynomial term by term. These linearity properties are fundamental to the operation of indefinite integration.

Similarly:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Example:
  ∫ (5x⁴ - 3x²) dx.

  Integrate each term:
    5(x⁵/5) - 3(x³/3) + C

  Thus:
    ∫ (5x⁴ - 3x²) dx = x⁵ - x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ANTIDIFFERENTIATING CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of a constant k is simply kx + C. This is because the derivative of kx is k, so the process reverses naturally. This rule is a special case of the power rule with n = 0, since ∫ x⁰ dx = x¹/1 = x, and multiplying by the constant gives kx. For example, ∫ 12 dx = 12x + C. This simple rule is used whenever constant terms appear in an integrand, such as in polynomials. It is important to remember that constants are not ignored; they become multiplied by x after integration. This is one of the first antidifferentiation rules students learn and is foundational for more complex integration.

If f(x) = k, then:
  ∫ k dx = kx + C

Example:
  ∫ 12 dx.

  Therefore:
    12x + C

  Check:
    d/dx (12x + C) = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE SPECIAL CASE OF 1/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule for integration fails when n = -1, because the formula would require division by zero. Instead, the antiderivative of 1/x is the natural logarithm of the absolute value of x, plus C. This is a fundamental result in calculus that arises from the derivative of ln|x| being 1/x. The absolute value is included to extend the domain to negative values of x, making the formula valid for all x ≠ 0. This special case is extremely important and appears frequently in integration, especially when dealing with rational functions. Memorizing this formula is essential, as it is one of the most common antiderivatives encountered in calculus.

The Power Rule does not work for 1/x = x⁻¹.

Normally:
  ∫ xⁿ dx = x^(n+1)/(n+1) + C

If n = -1, we would divide by zero.

Therefore, we use the special logarithmic formula:
  ∫ 1/x dx = ln|x| + C

Verification:
  d/dx (ln|x|) = 1/x

So the formula is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ANTIDIFFERENTIATION OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions have the remarkable property that their derivative is proportional to the function itself. For eˣ, the derivative is exactly eˣ, so the antiderivative is also eˣ + C. This makes eˣ very easy to integrate. For other exponential functions with base a, the derivative is aˣ ln a, so the antiderivative is aˣ / ln a + C. These formulas are essential for integrating exponential expressions, which arise in growth and decay models, compound interest, and many other applications. Understanding these basic exponential antiderivatives saves time and effort when solving problems involving exponential functions.

Since:
  d/dx (eˣ) = eˣ

the antiderivative is also eˣ:
  ∫ eˣ dx = eˣ + C

Example:
  ∫ 4eˣ dx.

  Therefore:
    4eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ANTIDIFFERENTIATION OF TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivatives of sine and cosine are based on their derivatives. Since the derivative of sin x is cos x, the antiderivative of cos x is sin x + C. Similarly, since the derivative of cos x is -sin x, the antiderivative of sin x is -cos x + C. These formulas are fundamental and are used extensively in integration of trigonometric functions. Additionally, the antiderivative of sec² x is tan x + C, and the antiderivative of csc² x is -cot x + C, which come from the derivatives of tan x and cot x. Memorizing these basic trigonometric antiderivatives is essential for solving a wide range of integration problems.

Some of the most important formulas are:

Sine:
  ∫ sin x dx = -cos x + C
  because:
    d/dx (-cos x) = sin x

Cosine:
  ∫ cos x dx = sin x + C
  because:
    d/dx (sin x) = cos x

Secant squared:
  ∫ sec² x dx = tan x + C
  because:
    d/dx (tan x) = sec² x

Cosecant squared:
  ∫ csc² x dx = -cot x + C
  because:
    d/dx (-cot x) = csc² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. BASIC ANTIDIFFERENTIATION TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the most common antiderivatives that you will encounter in elementary calculus. It includes the power rule, the special case for 1/x, exponential functions, and the basic trigonometric functions. These formulas are the building blocks for more complex integration. By memorizing this table, you will be able to quickly identify the antiderivative of many standard functions. Over time, these will become second nature. The table is a handy reference for both learning and problem-solving.

  Function       Antiderivative
  ──────────────────────────────────────────────
  xⁿ             x^(n+1)/(n+1) + C, n ≠ -1
  1/x            ln|x| + C
  eˣ             eˣ + C
  sin x          -cos x + C
  cos x          sin x + C
  sec² x         tan x + C
  csc² x         -cot x + C
  sec x tan x    sec x + C
  csc x cot x    -csc x + C

These formulas form the foundation of elementary integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANTIDIFFERENTIATION WITH INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Often, we are given an initial condition that allows us to determine the specific value of the constant of integration. This is known as an initial value problem. For example, if we know that f'(x) = 6x + 4 and f(1) = 8, we first find the general antiderivative f(x) = 3x² + 4x + C. Then we substitute x = 1 and f(1) = 8 to solve for C: 8 = 3 + 4 + C, so C = 1. Thus, the particular solution is f(x) = 3x² + 4x + 1. This technique is essential in applications where we need a unique function, such as finding the position of an object given its velocity and initial position.

Sometimes we are asked to find a specific function, rather than the entire family.

For example:
  f'(x) = 6x + 4
and:
  f(1) = 8

First antidifferentiate:
  f(x) = ∫ (6x + 4) dx

Therefore:
  f(x) = 3x² + 4x + C

Now use the initial condition:
  f(1) = 8

Substitute:
  8 = 3(1)² + 4(1) + C
  8 = 3 + 4 + C
  8 = 7 + C

Thus:
  C = 1

Therefore:
  f(x) = 3x² + 4x + 1

The initial condition allows us to determine the otherwise unknown constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ANTIDIFFERENTIATION AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation is fundamental in physics, particularly in kinematics, the study of motion. The relationships between position, velocity, and acceleration are all based on derivatives and antiderivatives. Velocity is the derivative of position, and acceleration is the derivative of velocity. Therefore, if we know acceleration, we can integrate to find velocity, and then integrate again to find position. These antiderivatives require initial conditions, such as initial velocity and initial position, to determine the constants of integration. This application demonstrates the practical power of antidifferentiation in modeling real-world phenomena. The same principles apply to other rates of change in fields like economics and biology.

Antidifferentiation has an important application in physics.

We know:
  velocity = ds/dt

Therefore, if velocity is known, we can find position through antidifferentiation:
  s(t) = ∫ v(t) dt

Similarly:
  acceleration = dv/dt

So velocity can be obtained by antidifferentiating acceleration:
  v(t) = ∫ a(t) dt

Therefore:
  a(t) → v(t) → s(t)

through antidifferentiation.

Example:
  Suppose a(t) = 6t.

  Antidifferentiate:
    v(t) = ∫ 6t dt

  Thus:
    v(t) = 3t² + C₁

  Now antidifferentiate again:
    s(t) = ∫ (3t² + C₁) dt

  Therefore:
    s(t) = t³ + C₁t + C₂

This shows how repeated antidifferentiation can recover position from acceleration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ANTIDIFFERENTIATION AND SLOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation can also be understood geometrically in terms of slopes. If we know the slope of a curve at every point, we can reconstruct the curve itself. The derivative gives the slope, and antidifferentiation reverses this process. For example, if F'(x) = 2x, then the slope of the curve F(x) at any point is 2x. Antidifferentiation gives F(x) = x² + C, which represents all parabolas with slope 2x at each point. The constant C shifts the curve vertically but does not change the slopes. Thus, antidifferentiation is essentially reconstructing a function from its slope function, which is a powerful concept in understanding the relationship between a function and its derivative.

Antidifferentiation can also be understood geometrically.

Suppose we know that:
  F'(x) = 2x

This tells us the slope of F(x) at every x.

Antidifferentiation reconstructs a function whose slopes follow that rule:
  F(x) = x² + C

Different values of C produce vertically shifted curves, but their slopes remain identical.

Thus, antidifferentiation can be thought of as:
  Reconstructing a function when its rate of change is known.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ANTIDIFFERENTIATION VS. INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In introductory calculus, the terms antidifferentiation and indefinite integration are often used interchangeably. Both refer to the process of finding a function whose derivative is given. The difference is mainly notational: antidifferentiation is the process, while indefinite integration uses the integral symbol ∫ to denote the family of antiderivatives. For example, the process of finding an antiderivative of f(x) is called antidifferentiation, and we write it as ∫ f(x) dx = F(x) + C. In practice, most textbooks use "integration" to refer to both definite and indefinite integrals, but "antidifferentiation" specifically emphasizes the reverse of differentiation. Understanding this connection helps in transitioning from differential calculus to integral calculus.

In introductory calculus, these terms are closely related.

Antidifferentiation:
  Finding a function F(x) such that F'(x) = f(x)

Indefinite integration:
  Writing ∫ f(x) dx = F(x) + C

So:
  Antidifferentiation = finding antiderivatives
and:
  Indefinite integration = notation for the family of antiderivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HOW TO SOLVE BASIC ANTIDIFFERENTIATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solving basic antidifferentiation problems involves a straightforward procedure. First, separate the integrand into individual terms, especially if it is a polynomial. Then, apply the power rule or other basic antiderivative formulas to each term. Simplify the resulting expression and add the constant of integration. Finally, it is always a good practice to differentiate your answer to verify that it matches the original function. This verification step is a hallmark of calculus: differentiation and integration are inverses, so checking one with the other confirms correctness. This method works for all elementary functions and is the foundation for solving more complex integration problems.

For a basic polynomial, use this procedure:

Step 1: Separate the terms
  For example: ∫ (4x³ + 6x² - 2x + 8) dx

Step 2: Integrate each term
  4x⁴/4 + 6x³/3 - 2x²/2 + 8x

Step 3: Simplify
  x⁴ + 2x³ - x² + 8x

Step 4: Add C
  x⁴ + 2x³ - x² + 8x + C

Step 5: Differentiate to verify
  4x³ + 6x² - 2x + 8

This matches the original function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several frequent errors in antidifferentiation. The most common is forgetting to add the constant of integration C for indefinite integrals. Another is failing to increase the exponent by 1 when applying the power rule. Some students also forget to divide by the new exponent. The special case of 1/x is often mishandled because the power rule does not apply; instead, the natural logarithm is used. Finally, not checking the answer by differentiation can lead to undetected mistakes. Being aware of these common pitfalls will help you avoid them and improve your integration skills.

Mistake 1: Forgetting C
  Incorrect:
    ∫ x³ dx = x⁴/4
  Correct:
    ∫ x³ dx = x⁴/4 + C

Mistake 2: Forgetting to increase the exponent
  Incorrect:
    ∫ x⁴ dx = x⁴/4 + C
  Correct:
    ∫ x⁴ dx = x⁵/5 + C

Mistake 3: Forgetting to divide by the new exponent
  For ∫ x⁵ dx, the answer is not x⁶ + C.
  It is x⁶/6 + C.

Mistake 4: Misusing the Power Rule for 1/x
  Don't use x⁰/0.
  Instead:
    ∫ 1/x dx = ln|x| + C

Mistake 5: Not Checking the Answer
  If you obtain F(x), differentiate it.
  If F'(x) = f(x), then the antidifferentiation is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ANTIDIFFERENTIATION AS THE OPPOSITE OF DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse relationship between differentiation and antidifferentiation is the cornerstone of integral calculus. Differentiation takes a function and produces its derivative, while antidifferentiation takes a derivative and returns the original function (up to a constant). This symmetry is not just a theoretical curiosity; it is the basis of the Fundamental Theorem of Calculus, which connects differentiation and integration. In practice, this means that any derivative formula can be reversed to obtain an antiderivative formula. For example, knowing that the derivative of x⁵ is 5x⁴ immediately tells us that the antiderivative of 5x⁴ is x⁵ + C. This relationship makes learning integration more accessible because you can leverage your knowledge of derivatives.

The relationship can be summarized as:
  F(x) → F'(x) through differentiation

while:
  F'(x) → F(x) + C through antidifferentiation.

For example:
  x⁵ → 5x⁴ through differentiation.

Going backward:
  5x⁴ → x⁵ + C through antidifferentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE MOST IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a first course in calculus, these are the essential antiderivative formulas you should memorize. The power rule covers polynomial integration, the logarithmic rule handles 1/x, and the exponential and trigonometric formulas are frequently used in applications. Knowing these formulas by heart will speed up your problem-solving and reduce errors. They serve as the foundation for more advanced integration techniques, such as substitution and integration by parts. Make sure you can recall them quickly and accurately.

For Calculus 1, you should become comfortable with these:

  ∫ xⁿ dx = x^(n+1)/(n+1) + C
  ∫ 1/x dx = ln|x| + C
  ∫ eˣ dx = eˣ + C
  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ sec² x dx = tan x + C
  ∫ csc² x dx = -cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The core concept of antidifferentiation is that it reverses differentiation. If F'(x) = f(x), then the general antiderivative of f(x) is F(x) + C. In integral notation, this is written as ∫ f(x) dx = F(x) + C. The power rule is the most fundamental tool: ∫ xⁿ dx = x^(n+1)/(n+1) + C for n ≠ -1. The special case of 1/x gives ln|x| + C. Antidifferentiation is essential for solving problems involving motion, growth, and many other applications where a rate of change is known and the original quantity is sought. The key question to ask when faced with any antidifferentiation problem is: "What function would produce this expression if I differentiated it?" With practice, this thought process becomes natural and intuitive.

The most important concept is:
  Antidifferentiation is reverse differentiation.

If F'(x) = f(x), then F(x) + C is the general antiderivative of f(x).

In integral notation:
  ∫ f(x) dx = F(x) + C

For example:
  ∫ 12x² dx = 4x³ + C

because:
  d/dx (4x³ + C) = 12x²

So the key question whenever you see an antidifferentiation problem is:

  "What function would produce this expression if I differentiated it?"

Once you learn to think that way, basic integration becomes much easier.
  `,
  examples: [
    "∫ 6x dx = 3x² + C",
    "∫ x⁵ dx = x⁶/6 + C",
    "∫ 7x⁴ dx = (7/5)x⁵ + C",
    "∫ (x³ + 4x² + 5x) dx = x⁴/4 + 4x³/3 + 5x²/2 + C",
    "∫ 1/x dx = ln|x| + C",
    "∫ eˣ dx = eˣ + C",
    "∫ sin x dx = -cos x + C",
  ],
};

export default topic;