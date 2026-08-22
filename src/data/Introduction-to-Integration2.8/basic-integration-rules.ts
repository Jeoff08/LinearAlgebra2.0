// filename: basic-integration-rules.ts

const topic = {
  id: "basic-integration-rules",
  title: "Basic Integration Rules",
  summary:
    "The fundamental formulas used to find antiderivatives, including the power rule, constant multiple rule, sum and difference rules, exponential rules, and trigonometric integration rules.",
  details: `
Basic Integration Rules are the fundamental formulas used to find antiderivatives. Since integration is the reverse of differentiation, many integration rules can be understood by reversing the familiar derivative rules.

The goal is to transform an expression such as:
  ∫ f(x) dx

into a function whose derivative is f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant, then:
  ∫ c dx = cx + C

Example:
  ∫ 5 dx

Since the derivative of 5x is 5:
  ∫ 5 dx = 5x + C

Another example:
  ∫ -8 dx = -8x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POWER RULE FOR INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important rules is:
  ∫ x^n dx = x^(n+1)/(n+1) + C

where:
  n ≠ -1

How to use it:
  • Add 1 to the exponent.
  • Divide by the new exponent.
  • Add C.

Example:
  ∫ x⁵ dx

Increase the exponent:
  5 + 1 = 6

Divide by 6:
  ∫ x⁵ dx = x⁶/6 + C

Check:
  d/dx (x⁶/6) = x⁵

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant can be moved outside the integral:
  ∫ c f(x) dx = c ∫ f(x) dx

Example:
  ∫ 7x³ dx

Move 7 outside:
  7∫ x³ dx

Apply the power rule:
  7(x⁴/4)

Therefore:
  ∫ 7x³ dx = 7x⁴/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of a sum is the sum of the integrals:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Example:
  ∫ (x³ + x²) dx

Integrate each term:
  ∫ x³ dx + ∫ x² dx
  = x⁴/4 + x³/3 + C

Therefore:
  ∫ (x³ + x²) dx = x⁴/4 + x³/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea works for subtraction:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Example:
  ∫ (x⁴ - 3x²) dx

Integrate each term:
  x⁵/5 - 3(x³/3) + C

Simplify:
  x⁵/5 - x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMBINING THE CONSTANT AND POWER RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most basic polynomial integrals require both rules.

Consider:
  ∫ 4x⁵ dx

Using the constant multiple rule:
  4∫ x⁵ dx

Using the power rule:
  4(x⁶/6) + C

Simplify:
  2x⁶/3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRAL OF 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:
  1 = x⁰

we can use the power rule:
  ∫ 1 dx = x^(0+1)/(0+1) + C

Therefore:
  ∫ 1 dx = x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRAL OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the power rule:
  ∫ x dx

Since x = x¹:
  x^(1+1)/(1+1) + C
  ∫ x dx = x²/2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRAL OF A RECIPROCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important exception to the power rule.

Consider:
  ∫ x⁻¹ dx

The normal power rule would require dividing by:
  n + 1 = -1 + 1 = 0

Division by zero is impossible.

So x⁻¹ has its own rule:
  ∫ 1/x dx = ln|x| + C

Why the absolute value?
Because:
  d/dx (ln|x|) = 1/x

for x ≠ 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRAL OF AN EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important rule is:
  ∫ e^x dx = e^x + C

This works because:
  d/dx (e^x) = e^x

The function e^x is special because its derivative is itself.

Example:
  ∫ 3e^x dx
  = 3e^x + C

Therefore:
  3e^x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRATING a^x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a general exponential function:
  ∫ a^x dx = a^x / ln a + C

where:
  a > 0, a ≠ 1

Example:
  ∫ 2^x dx

Therefore:
  ∫ 2^x dx = 2^x / ln 2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of cosine is:
  d/dx (cos x) = -sin x

Therefore:
  ∫ sin x dx = -cos x + C

Example:
  ∫ 5 sin x dx
  = -5 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INTEGRAL OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:
  d/dx (sin x) = cos x

we have:
  ∫ cos x dx = sin x + C

Example:
  ∫ 7 cos x dx
  7 sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INTEGRAL OF SECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We know:
  d/dx (tan x) = sec² x

Therefore:
  ∫ sec² x dx = tan x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INTEGRAL OF COSECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:
  d/dx (cot x) = -csc² x

we get:
  ∫ csc² x dx = -cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. INTEGRAL OF SECANT TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because:
  d/dx (sec x) = sec x tan x

we have:
  ∫ sec x tan x dx = sec x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INTEGRAL OF COSECANT COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:
  d/dx (csc x) = -csc x cot x

we get:
  ∫ csc x cot x dx = -csc x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. BASIC INTEGRATION RULES TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function f(x)                Integral ∫ f(x) dx
  ─────────────────────────────────────────────────────────────────
  c                            cx + C
  x^n (n ≠ -1)                 x^(n+1)/(n+1) + C
  1/x                          ln|x| + C
  e^x                          e^x + C
  a^x                          a^x / ln a + C
  sin x                        -cos x + C
  cos x                        sin x + C
  sec² x                       tan x + C
  csc² x                       -cot x + C
  sec x tan x                  sec x + C
  csc x cot x                  -csc x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: POLYNOMIAL INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (6x⁴ - 8x² + 3x - 10) dx

Integrate each term:
  ∫ 6x⁴ dx - ∫ 8x² dx + ∫ 3x dx - ∫ 10 dx

Apply the rules:
  6(x⁵/5) - 8(x³/3) + 3(x²/2) - 10x + C

Therefore:
  6x⁵/5 - 8x³/3 + 3x²/2 - 10x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: MIXED FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (3x² + 4 cos x - 2e^x) dx

Integrate term-by-term:
  ∫ 3x² dx + ∫ 4 cos x dx - ∫ 2e^x dx

Therefore:
  x³ + 4 sin x - 2e^x + C

So:
  x³ + 4 sin x - 2e^x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. HOW TO CHECK AN INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the best ways to check your answer is to differentiate it.

Suppose:
  ∫ (4x³ - 6x) dx

We obtain:
  x⁴ - 3x² + C

Differentiate:
  d/dx (x⁴ - 3x² + C)
  = 4x³ - 6x

This matches the original integrand, so the answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Forgetting +C
  For an indefinite integral:
    ∫ x² dx
  the answer is not just:
    x³/3
  It should be:
    x³/3 + C

❌ Increasing the exponent but not dividing
  Incorrect:
    ∫ x³ dx = x⁴ + C
  Correct:
    ∫ x³ dx = x⁴/4 + C

❌ Applying the power rule to 1/x
  Incorrect:
    ∫ x⁻¹ dx = x⁰/0
  The power rule does not work when n = -1.
  Correct:
    ∫ 1/x dx = ln|x| + C

❌ Forgetting the negative sign with sine
  Since:
    d/dx (-cos x) = sin x
  we have:
    ∫ sin x dx = -cos x + C
  not +cos x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic integration rules can be remembered as reverse derivative rules:

  Differentiation ↔ Integration reverses it

For example:
  x⁴ → 4x³
so:
  4x³ → x⁴ + C

The most important rules to master first are:

  ∫ x^n dx = x^(n+1)/(n+1) + C
  ∫ c dx = cx + C
  ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
  ∫ e^x dx = e^x + C
  ∫ 1/x dx = ln|x| + C
  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C

Once these rules become familiar, you'll be ready for u-substitution, integration by parts, trigonometric integrals, partial fractions, and definite integrals.
  `,
  examples: [
    "∫ 5 dx = 5x + C",
    "∫ x⁵ dx = x⁶/6 + C",
    "∫ 7x³ dx = 7x⁴/4 + C",
    "∫ (x³ + x²) dx = x⁴/4 + x³/3 + C",
    "∫ (x⁴ - 3x²) dx = x⁵/5 - x³ + C",
    "∫ 4x⁵ dx = 2x⁶/3 + C",
    "∫ (6x⁴ - 8x² + 3x - 10) dx = 6x⁵/5 - 8x³/3 + 3x²/2 - 10x + C",
  ],
};

export default topic;