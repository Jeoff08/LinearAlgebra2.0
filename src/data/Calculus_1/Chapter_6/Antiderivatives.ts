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

  ∫ x⁷ dx

Add 1:
  7 + 1 = 8.

Therefore:
  ∫ x⁷ dx = x⁸/8 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

A constant can be pulled outside an integral:
  ∫ c f(x) dx = c ∫ f(x) dx

For example:
  ∫ 7x⁵ dx = 7∫ x⁵ dx.

Therefore:
  ∫ 7x⁵ dx = (7/6)x⁶ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SUM AND DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

Since:
  tan x = sin x / cos x

we have:
  ∫ tan x dx = -ln|cos x| + C

An equivalent form is:
  ∫ tan x dx = ln|sec x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ANTIDERIVATIVE OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly:
  ∫ cot x dx = ln|sin x| + C

because:
  cot x = cos x / sin x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ANTIDERIVATIVE OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A famous result is:
  ∫ sec x dx = ln|sec x + tan x| + C

This is one of the antiderivatives that is useful to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. ANTIDERIVATIVE OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly:
  ∫ csc x dx = -ln|csc x + cot x| + C

An equivalent form is:
  ∫ csc x dx = ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. BASIC ANTIDERIVATIVE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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