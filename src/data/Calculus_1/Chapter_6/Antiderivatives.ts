// filename: antiderivatives.ts

const topic = {
  id: "antiderivatives",
  title: "Antiderivatives",
  summary:
    "A function whose derivative is a given function, representing the reverse process of differentiation, also known as the indefinite integral, including the power rule, trigonometric antiderivatives, and applications.",
  details: `
An antiderivative is a function whose derivative is a given function.

In simple terms:

  Differentiation takes you from a function to its derivative. Antidifferentiation works backward.

If:
  F'(x) = f(x),

then F(x) is called an antiderivative of f(x).

We write:
  ∫ f(x) dx = F(x) + C

where C is an arbitrary constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN ANTIDERIVATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An antiderivative is the result of reversing the process of differentiation. While differentiation gives the rate of change of a function, antiderivation seeks the original function whose rate of change is known. This is a fundamental operation in calculus, analogous to division being the inverse of multiplication. For any function f(x), an antiderivative F(x) satisfies F'(x) = f(x). The process of finding antiderivatives is called integration, specifically indefinite integration, because it produces a family of functions differing by a constant. This concept is essential for solving problems in physics, engineering, and economics where we need to recover a quantity from its rate of change, such as position from velocity or total cost from marginal cost.

Suppose:
  f(x) = 2x.

We know:
  d/dx (x²) = 2x.

Therefore:
  x²

is an antiderivative of 2x.

We can write:
  ∫ 2x dx = x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE ADD C?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant of integration, denoted C, is crucial because the derivative of any constant is zero. Therefore, if F(x) is an antiderivative of f(x), then F(x) + C is also an antiderivative for any constant C. This means that antiderivatives are not unique; there is an entire family of functions that share the same derivative. The constant C accounts for all possible vertical shifts of the antiderivative graph, which do not affect the slope at any point. When solving an indefinite integral, we must always include +C to represent this family. However, if additional conditions are given such as a specific value of the antiderivative at a point we can determine the exact value of C, yielding a particular antiderivative. This is why C is often called the "constant of integration."

This is one of the most important ideas in integration.

Consider:
  F(x) = x².

Its derivative is:
  F'(x) = 2x.

But consider:
  x² + 5.

Its derivative is also:
  2x.

Likewise:
  x² - 10

has derivative:
  2x.

In fact:
  x² + C

has derivative:
  2x

for any constant C.

Therefore:
  ∫ 2x dx = x² + C

The +C represents the entire family of antiderivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ANTIDERIVATIVE VS. DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation and differentiation are inverse operations, much like addition and subtraction or multiplication and division. If you differentiate a function and then take the antiderivative, you get back the original function (up to a constant). Conversely, if you take the antiderivative and then differentiate, you recover the original function. This inverse relationship is the foundation of the Fundamental Theorem of Calculus, which connects differentiation and integration. In practice, we often use known derivative formulas to find antiderivatives. For example, knowing that the derivative of x³ is 3x² tells us that the antiderivative of 3x² is x³ + C. This symmetry is what makes integration a natural extension of differentiation, and it is why we can build tables of antiderivatives from derivative rules.

These operations are essentially opposites.

Differentiation:
  x³ → 3x²
because:
  d/dx (x³) = 3x².

Antidifferentiation:
  3x² → x³ + C
because:
  ∫ 3x² dx = x³ + C.

So:
  Derivative ↔ Antiderivative

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INDEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The notation ∫ f(x) dx denotes the indefinite integral of f(x), which is another name for the general antiderivative. The symbol ∫ is called the integral sign, f(x) is the integrand, and dx indicates that the integration is with respect to the variable x. The process of finding the indefinite integral is called integration. Unlike definite integrals, which yield a numerical value, indefinite integrals yield a family of functions. The presence of dx is important because it tells us the variable of integration. When we write ∫ x² dx, we are asking for a function whose derivative is x². The answer is x³/3 + C. This notation is standard in calculus and is used extensively in solving differential equations and applied problems.

An antiderivative is commonly represented using an indefinite integral:
  ∫ f(x) dx

For example:
  ∫ x² dx.

The answer is:
  x³/3 + C

because:
  d/dx (x³/3 + C) = x².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE POWER RULE FOR ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule is the most frequently used rule for finding antiderivatives of power functions. It states that to integrate x^n, where n ≠ -1, we add 1 to the exponent and then divide by the new exponent. This is the reverse of the differentiation power rule, which reduces the exponent by 1 and multiplies by the original exponent. The power rule works for all real exponents except -1, because that would lead to division by zero. For n = -1, we use the special natural logarithm rule. The power rule is straightforward: increase the exponent, divide by the new exponent, and add C. This rule applies to polynomials and many algebraic functions, making it one of the first integration techniques learned. It is essential for building a foundation in integral calculus.

One of the most important integration rules is:
  ∫ x^n dx = x^(n+1)/(n+1) + C

provided:
  n ≠ -1

The procedure:
  • Add 1 to the exponent.
  • Divide by the new exponent.
  • Add C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: x⁴
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To illustrate the power rule, consider integrating x⁴. We increase the exponent from 4 to 5, then divide by 5, giving x⁵/5. Adding the constant C gives the general antiderivative. This result can be verified by differentiating x⁵/5, which yields x⁴, confirming the correctness of the integration. This simple example demonstrates the direct application of the rule and the importance of checking the answer by differentiation. This process of verifying integrals is a good habit to develop.

Evaluate:
  ∫ x⁴ dx.

Add 1 to the exponent:
  4 + 1 = 5.

Divide by 5:
  x⁵/5.

Therefore:
  ∫ x⁴ dx = x⁵/5 + C

Check:
  d/dx (x⁵/5) = x⁴.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: x⁷
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, integrating x⁷ follows the same rule: add 1 to get 8, divide by 8, and add C. The antiderivative is x⁸/8 + C. Differentiating this result gives x⁷, so the answer is correct. These examples show that the power rule is consistent and easy to apply for any exponent other than -1. Practice with various powers helps solidify the concept.

  ∫ x⁷ dx

Add 1:
  7 + 1 = 8.

Therefore:
  ∫ x⁷ dx = x⁸/8 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating a function multiplied by a constant, we can factor the constant out of the integral. For example, ∫ 5x³ dx = 5∫ x³ dx. Then applying the power rule to x³ gives x⁴/4, and multiplying by 5 yields (5/4)x⁴ + C. This property, called the constant multiple rule, simplifies integration by allowing us to focus on the variable part first. It is important to remember that the constant C is added at the end, not multiplied by the constant.

Evaluate:
  ∫ 5x³ dx.

Keep the constant 5:
  5∫ x³ dx.

Apply the power rule:
  5(x⁴/4) + C.

Therefore:
  (5/4)x⁴ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple rule states that the integral of a constant times a function is the constant times the integral of the function. This is a direct consequence of the linearity of integration. It allows us to pull constants outside the integral, which often simplifies the integration process. For example, ∫ 7x⁵ dx = 7∫ x⁵ dx = (7/6)x⁶ + C. This rule also applies to sums and differences, as we will see next. It is one of the basic properties of indefinite integrals and is used extensively in calculus.

A constant can be pulled outside an integral:
  ∫ c f(x) dx = c ∫ f(x) dx

For example:
  ∫ 7x⁵ dx = 7∫ x⁵ dx.

Therefore:
  ∫ 7x⁵ dx = (7/6)x⁶ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SUM AND DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sum and difference rules allow us to integrate a sum or difference of functions by integrating each term separately. This is another linearity property: ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx. This makes integrating polynomials straightforward because we can integrate each term individually. For example, ∫ (3x² + 4x - 5) dx = ∫ 3x² dx + ∫ 4x dx - ∫ 5 dx = x³ + 2x² - 5x + C. This rule is essential for handling expressions with multiple terms and is used frequently in integration.

You can integrate terms separately:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx
and:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Example:
  Evaluate: ∫ (3x² + 4x - 5) dx.

Integrate each term:
  ∫ 3x² dx = x³
  ∫ 4x dx = 2x²
  ∫ -5 dx = -5x.

Therefore:
  x³ + 2x² - 5x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ANTIDERIVATIVE OF A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of a constant k is kx + C. This follows directly from the derivative of kx being k. For example, ∫ 8 dx = 8x + C. This simple rule is often used in integration of polynomials, where constant terms appear. It is also a special case of the power rule with n = 0, since ∫ x⁰ dx = x¹/1 = x. So the rule is consistent.

Remember:
  ∫ k dx = kx + C

where k is a constant.

For example:
  ∫ 8 dx

gives:
  8x + C

because:
  d/dx (8x) = 8.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE SPECIAL CASE 1/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule fails when n = -1, because the formula would involve division by zero. Instead, the antiderivative of 1/x is ln|x| + C. This is a fundamental result that arises from the derivative of the natural logarithm: d/dx (ln|x|) = 1/x for x ≠ 0. The absolute value is included to extend the domain to negative values of x, ensuring the antiderivative is valid for all nonzero x. This is a key antiderivative that appears frequently in calculus, especially in integration of rational functions. Memorizing this special case is essential.

The power rule has an important exception.

If:
  n = -1,

then:
  x^n = x⁻¹ = 1/x.

We cannot use:
  x^(n+1)/(n+1)

because:
  n + 1 = 0.

Instead:
  ∫ 1/x dx = ln|x| + C

This is a fundamental antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY ABSOLUTE VALUE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The use of absolute value in ln|x| ensures that the antiderivative is defined for both positive and negative x. For x > 0, ln|x| = ln x, whose derivative is 1/x. For x < 0, ln|x| = ln(-x), and by the chain rule, its derivative is (1/(-x))(-1) = 1/x as well. Thus, the formula ∫ 1/x dx = ln|x| + C works for all x ≠ 0. Without the absolute value, the antiderivative would only be valid for positive x. Including the absolute value makes the result more general and is standard in calculus textbooks. It is a small but important detail.

The expression:
  ln|x|

allows the antiderivative to work for both:
  x > 0
and:
  x < 0.

Indeed:
  d/dx (ln|x|) = 1/x

for:
  x ≠ 0.

Therefore:
  ∫ 1/x dx = ln|x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXPONENTIAL ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exponential function e^x is unique in that its derivative is itself. Therefore, its antiderivative is also e^x + C. This property makes e^x particularly simple to integrate. For other exponential functions with base a, such as a^x, the derivative is a^x ln a, so the antiderivative is a^x / ln a + C. These formulas are essential for integrating exponential functions, which arise frequently in growth and decay problems, compound interest, and many other applications. Remembering these basic antiderivatives saves time and effort.

Since:
  d/dx (e^x) = e^x,

the antiderivative is:
  ∫ e^x dx = e^x + C

Example:
  ∫ 5e^x dx

Therefore:
  5e^x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXPONENTIAL WITH A CONSTANT BASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For exponential functions with a constant base a > 0, a ≠ 1, the general formula is ∫ a^x dx = a^x / ln a + C. This follows from the derivative of a^x, which is a^x ln a. Dividing by ln a gives the antiderivative. This is useful for integrating functions like 2^x, 3^x, etc. It also shows the connection between exponential functions and logarithms, as the natural logarithm appears in the denominator. This formula is a standard result in calculus.

For:
  a^x

where:
  a > 0, a ≠ 1,

the derivative is:
  d/dx (a^x) = a^x ln a.

Therefore:
  ∫ a^x dx = a^x / ln a + C

Example:
  ∫ 2^x dx

gives:
  2^x / ln 2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ANTIDERIVATIVES OF SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of sine and cosine give us their antiderivatives. Since d/dx (sin x) = cos x, the antiderivative of cos x is sin x + C. Similarly, since d/dx (cos x) = -sin x, the antiderivative of sin x is -cos x + C. The negative sign in the sine antiderivative is important to remember. These results are fundamental and appear in many integration problems, especially in physics and engineering where oscillatory functions are common. Being able to recall these quickly is essential.

Remember:
  d/dx (sin x) = cos x

Therefore:
  ∫ cos x dx = sin x + C

Also:
  d/dx (cos x) = -sin x

Therefore:
  ∫ sin x dx = -cos x + C

The negative sign is very important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ANTIDERIVATIVE OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of tan x can be derived by using the identity tan x = sin x / cos x and applying a substitution or by recognizing the derivative of ln|cos x|. Specifically, d/dx (ln|cos x|) = -tan x, so ∫ tan x dx = -ln|cos x| + C. Another equivalent form is ln|sec x| + C, since sec x = 1/cos x. This antiderivative appears in integrals involving trigonometric functions and is useful in various applications. It is one of the standard results to memorize.

Since:
  tan x = sin x / cos x

we have:
  ∫ tan x dx = -ln|cos x| + C

An equivalent form is:
  ∫ tan x dx = ln|sec x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ANTIDERIVATIVE OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, the antiderivative of cot x is ln|sin x| + C, since d/dx (ln|sin x|) = cot x. This follows from the identity cot x = cos x / sin x. The absolute value ensures the logarithm is defined for all x where sin x ≠ 0. This result is the counterpart to the tangent antiderivative and is used in similar contexts. Knowing these standard trigonometric antiderivatives is important for solving integrals involving trigonometric functions.

Similarly:
  ∫ cot x dx = ln|sin x| + C

because:
  cot x = cos x / sin x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ANTIDERIVATIVE OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of sec x is ln|sec x + tan x| + C. This result is less intuitive but can be derived using a clever substitution or by multiplying numerator and denominator by (sec x + tan x). This antiderivative appears in problems involving the integral of secant, which often arises in trigonometric integrals. It is a standard formula worth memorizing because it is not immediately obvious from the derivative of common functions. The result is also valid for all x where sec x and tan x are defined.

A famous result is:
  ∫ sec x dx = ln|sec x + tan x| + C

This is one of the antiderivatives that is useful to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. ANTIDERIVATIVE OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The antiderivative of csc x is -ln|csc x + cot x| + C, or equivalently ln|csc x - cot x| + C. This is the counterpart to the secant antiderivative. It is also derived by a similar method. These formulas are less common but appear in integration of trigonometric functions. It is helpful to know both forms. As with other trigonometric antiderivatives, the absolute value ensures the logarithm is defined on the appropriate domain.

Similarly:
  ∫ csc x dx = -ln|csc x + cot x| + C

An equivalent form is:
  ∫ csc x dx = ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. BASIC ANTIDERIVATIVE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the most common antiderivatives. It is a useful reference for solving integrals. By familiarizing yourself with these formulas, you can quickly identify the antiderivative of basic functions. The table includes power functions, exponential functions, logarithmic functions, and trigonometric functions. Over time, these will become second nature. Having a solid grasp of these basic antiderivatives is essential for success in calculus.

  Function f(x)                Antiderivative ∫ f(x) dx
  ─────────────────────────────────────────────────────────────────
  x^n (n ≠ -1)                 x^(n+1)/(n+1) + C
  1/x                          ln|x| + C
  e^x                          e^x + C
  a^x                          a^x / ln a + C
  sin x                        -cos x + C
  cos x                        sin x + C
  tan x                        -ln|cos x| + C
  cot x                        ln|sin x| + C
  sec x                        ln|sec x + tan x| + C
  csc x                        -ln|csc x + cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: POLYNOMIAL ANTIDERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the antiderivative of a polynomial, we integrate each term separately. For example, ∫ (6x⁵ - 4x³ + 7x - 2) dx = ∫ 6x⁵ dx - ∫ 4x³ dx + ∫ 7x dx - ∫ 2 dx. Applying the power rule to each term gives x⁶ - x⁴ + (7/2)x² - 2x + C. This demonstrates the sum and difference rules in action. Polynomials are among the easiest functions to integrate because the power rule applies directly to each term. This is a skill that is developed with practice.

Find:
  ∫ (6x⁵ - 4x³ + 7x - 2) dx.

Integrate each term:
  ∫ 6x⁵ dx = x⁶
  ∫ -4x³ dx = -x⁴
  ∫ 7x dx = (7/2)x²
  ∫ -2 dx = -2x.

Therefore:
  x⁶ - x⁴ + (7/2)x² - 2x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CHECKING AN ANTIDERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most reliable ways to verify an antiderivative is to differentiate the result. If the derivative equals the original integrand, the antiderivative is correct. This is a fundamental check that should be used whenever possible. For example, if we claim ∫ (4x³ + 2x) dx = x⁴ + x² + C, differentiating gives 4x³ + 2x, which matches, confirming the solution. This check also reinforces the inverse relationship between differentiation and integration. It is a good habit to always differentiate your answer, especially when you are learning.

One of the best ways to check your answer is to differentiate it.

Suppose:
  ∫ (4x³ + 2x) dx

and we obtain:
  x⁴ + x² + C.

Differentiate:
  d/dx (x⁴ + x² + C) = 4x³ + 2x.

This matches the original function.

Therefore the answer is correct.

  ∫ (4x³ + 2x) dx = x⁴ + x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. ANTIDERIVATIVES AND INITIAL CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we are given an initial condition, such as f(2) = 10, which allows us to determine the specific constant C. The general antiderivative gives a family of functions; the initial condition selects the one that passes through the given point. This process is called solving an initial value problem. For example, if f'(x) = 6x and f(2) = 10, the general antiderivative is f(x) = 3x² + C. Substituting x = 2 and f(2) = 10 gives 12 + C = 10, so C = -2. Thus, the particular solution is f(x) = 3x² - 2. This technique is widely used in physics and engineering to find position from velocity, for instance.

Sometimes we are given an additional condition that allows us to find C.

Suppose:
  f'(x) = 6x

and:
  f(2) = 10.

First find the general antiderivative:
  f(x) = 3x² + C.

Use:
  f(2) = 10.

Therefore:
  3(2)² + C = 10
  12 + C = 10

Thus:
  C = -2.

So:
  f(x) = 3x² - 2

The initial condition determines the specific antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. ANTIDERIVATIVES AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antiderivatives are central to the study of motion. Given acceleration a(t), we can integrate to find velocity v(t), and then integrate velocity to find position s(t). This is because velocity is the derivative of position, and acceleration is the derivative of velocity. Thus, antidifferentiation reverses these derivatives. In physics, this is used to predict the future position of an object given its acceleration and initial conditions. This application illustrates the power of calculus in modeling real-world phenomena. The same principle applies to other rates of change, such as population growth or economic trends.

Antiderivatives are extremely important in physics.

If v(t) is velocity, then position can be found by integrating velocity:
  s(t) = ∫ v(t) dt

Similarly, if a(t) is acceleration, then velocity is:
  v(t) = ∫ a(t) dt

So:
  Acceleration → Velocity → Position

through antidifferentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. EXAMPLE: FINDING POSITION FROM VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the velocity of an object is given by v(t) = 6t². To find its position function s(t), we integrate velocity: s(t) = ∫ 6t² dt = 2t³ + C. If we know that at time t = 0, the position is s(0) = 5, we can find C: 5 = 2(0)³ + C, so C = 5. Thus, s(t) = 2t³ + 5. This example shows how initial conditions determine the specific antiderivative, giving a unique position function. This is a standard application in kinematics.

Suppose:
  v(t) = 6t².

To find position:
  s(t) = ∫ 6t² dt.

Using the power rule:
  s(t) = 2t³ + C.

Therefore:
  s(t) = 2t³ + C

If we know:
  s(0) = 5,

then:
  5 = 2(0)³ + C

Thus:
  C = 5.

Therefore:
  s(t) = 2t³ + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common errors when finding antiderivatives. One is forgetting to add the constant of integration C for indefinite integrals. This is a crucial step because the derivative of any constant is zero, so the antiderivative is not unique. Another mistake is using the power rule incorrectly for 1/x, which leads to division by zero. Instead, the antiderivative is ln|x| + C. Students often forget the negative sign when integrating sin x, giving cos x instead of -cos x. Also, when applying the power rule, it's important to add 1 to the exponent before dividing. Being aware of these mistakes will help you avoid them.

Mistake 1: Forgetting +C
  For an indefinite integral:
    ∫ f(x) dx = F(x) + C
  Always include C, unless a definite integral or initial condition determines it.

Mistake 2: Using the power rule on 1/x
  Don't do:
    ∫ x⁻¹ dx = x⁰/0
  This is undefined.
  Instead:
    ∫ 1/x dx = ln|x| + C

Mistake 3: Forgetting the negative sign
  Remember:
    ∫ sin x dx = -cos x + C
  because:
    d/dx (-cos x) = sin x.

Mistake 4: Forgetting to increase the exponent
  For:
    ∫ x⁵ dx
  don't write:
    x⁵/5.
  Instead:
    5 + 1 = 6
  so:
    x⁶/6 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. THE BIG CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The connection between differentiation and antidifferentiation is fundamental: they are inverse operations. If we differentiate a function and then integrate the result, we get back the original function (up to a constant). Conversely, if we integrate and then differentiate, we recover the original function. This is the essence of the Fundamental Theorem of Calculus, which links the two main branches of calculus: differential and integral calculus. Understanding this connection is key to mastering calculus. It also makes it easy to check antiderivatives: just differentiate.

Antidifferentiation is the reverse process of differentiation:

  d/dx [F(x)] = f(x)

means:
  ∫ f(x) dx = F(x) + C

For example:
  d/dx (x⁴) = 4x³

therefore:
  ∫ 4x³ dx = x⁴ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This quick reference lists the most important antiderivative formulas. These are the ones you will use most frequently. Keep them handy as you practice. Over time, they will become automatic.

The most important formulas are:

  ∫ x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)
  ∫ 1/x dx = ln|x| + C
  ∫ e^x dx = e^x + C
  ∫ a^x dx = a^x / ln a + C
  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ tan x dx = -ln|cos x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea of antiderivatives is that they reverse differentiation. If F'(x) = f(x), then ∫ f(x) dx = F(x) + C. The most important basic technique is the reverse power rule: ∫ x^n dx = x^(n+1)/(n+1) + C for n ≠ -1. Always remember the special case for 1/x: ∫ 1/x dx = ln|x| + C. The easiest way to verify an antiderivative is to differentiate your answer and check that you get the original function. This concept is the foundation of integral calculus and prepares you for definite integrals and the Fundamental Theorem of Calculus.

An antiderivative reverses differentiation.

If:
  F'(x) = f(x),

then:
  ∫ f(x) dx = F(x) + C

The most important basic technique is the reverse power rule:

  ∫ x^n dx = x^(n+1)/(n+1) + C

for n ≠ -1.

And always remember the special case:

  ∫ 1/x dx = ln|x| + C

Finally, the easiest way to verify an antiderivative is simply to differentiate your answer and check whether you get the original function back.
  `,
  examples: [
    "∫ x⁴ dx = x⁵/5 + C",
    "∫ 5x³ dx = (5/4)x⁴ + C",
    "∫ (3x² + 4x - 5) dx = x³ + 2x² - 5x + C",
    "∫ 1/x dx = ln|x| + C",
    "∫ e^x dx = e^x + C",
    "∫ sin x dx = -cos x + C",
    "∫ cos x dx = sin x + C",
  ],
};

export default topic;