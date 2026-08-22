// filename: integration-as-reverse-differentiation.ts

const topic = {
  id: "integration-as-reverse-differentiation",
  title: "Integration as Reverse Differentiation",
  summary:
    "The fundamental concept that integration is the reverse process of differentiation, where finding an antiderivative means finding a function whose derivative is the given function.",
  details: `
Integration is the process of finding a function whose derivative is known.

This is why integration is often called reverse differentiation.

For example, we know:
  d/dx (x³) = 3x²

So, if we are given:
  3x²

and asked to find the original function, we reverse the process:
  ∫ 3x² dx = x³ + C

Therefore,
  ∫ 3x² dx = x³ + C

The symbol ∫ means integrate, while dx indicates that we are integrating with respect to x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIFFERENTIATION VS. INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of differentiation and integration as opposite processes.

Differentiation:
  Start with a function:
    f(x) = x⁴
  Differentiate:
    f'(x) = 4x³

Integration:
  Start with the derivative:
    4x³
  Integrate:
    ∫ 4x³ dx = x⁴ + C

So:
  Differentiation ↔ Integration

Integration essentially asks:

  "What function would produce this expression when differentiated?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE ANTIDERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An antiderivative of f(x) is a function F(x) whose derivative is f(x).

In mathematical notation:
  F'(x) = f(x)

Then:
  F(x) = ∫ f(x) dx

Example:
  Find an antiderivative of:
    f(x) = 6x

We need a function whose derivative is 6x.

Since:
  d/dx (3x²) = 6x

the antiderivative is:
  3x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE ADD C?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating, we add a constant of integration, written as C.

Consider:
  d/dx (x²) = 2x

But also:
  d/dx (x² + 5) = 2x
and:
  d/dx (x² - 10) = 2x
and:
  d/dx (x² + 100) = 2x

The derivative of any constant is zero:
  d/dx (C) = 0

Therefore, all of these functions have the same derivative.

That's why:
  ∫ 2x dx = x² + C

The C represents any possible constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE BASIC REVERSE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important integration rules is the Power Rule for Integration.

If:
  ∫ x^n dx

then:
  ∫ x^n dx = x^(n+1)/(n+1) + C

provided:
  n ≠ -1

Notice what happens:

During differentiation:
  x^n → nx^(n-1)

During integration:
  x^n → x^(n+1)/(n+1)

So integration reverses the power rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: INTEGRATING A POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ x⁴ dx

Increase the exponent by 1:
  4 + 1 = 5

Then divide by the new exponent:
  x⁵/5

Therefore:
  ∫ x⁴ dx = x⁵/5 + C

Check:
  Differentiate:
    d/dx (x⁵/5 + C) = (5x⁴)/5 = x⁴

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 6x² dx

Keep the coefficient 6:
  6∫ x² dx

Apply the power rule:
  6(x³/3)

Simplify:
  2x³ + C

Check:
  d/dx (2x³ + C) = 6x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRATING CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant can also be integrated.

For example:
  ∫ 7 dx

Since:
  d/dx (7x) = 7

we get:
  ∫ 7 dx = 7x + C

Another example:
  ∫ 15 dx

gives:
  15x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRATING SUMS AND DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration can be performed term-by-term.

The rule is:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx

Example:
  Evaluate: ∫ (x³ + 4x² - 5x + 7) dx

Integrate each term:
  ∫ x³ dx + ∫ 4x² dx - ∫ 5x dx + ∫ 7 dx

Now:
  = x⁴/4 + 4x³/3 - 5x²/2 + 7x + C

Therefore:
  ∫ (x³ + 4x² - 5x + 7) dx = x⁴/4 + 4x³/3 - 5x²/2 + 7x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRATION AS "UNDOING" DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful way to understand integration is to think of it as undoing an operation.

For example:

Differentiation:
  x⁵ becomes 5x⁴

Integration:
  5x⁴ becomes x⁵ + C

So:
  d/dx [F(x)] = f(x) ⇒ ∫ f(x) dx = F(x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON REVERSE DERIVATIVE PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is useful to memorize common derivative-integral pairs.

  Derivative            Antiderivative
  ──────────────────────────────────────────────────
  1                     x + C
  x                     x²/2 + C
  x²                    x³/3 + C
  x³                    x⁴/4 + C
  x⁴                    x⁵/5 + C
  x^n                   x^(n+1)/(n+1) + C
  e^x                   e^x + C
  1/x                   ln|x| + C
  cos x                 sin x + C
  sin x                 -cos x + C

These pairs are extremely important for Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRATION AND THE FUNDAMENTAL IDEA OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration and differentiation are connected by the Fundamental Theorem of Calculus.

If:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This connects area and antiderivatives.

For example:
  ∫₁³ 2x dx

An antiderivative of 2x is:
  F(x) = x²

Therefore:
  F(3) - F(1)
  = 3² - 1²
  = 9 - 1
  = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INDEFINITE VS. DEFINITE INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Indefinite integral:
  An indefinite integral gives a family of antiderivatives:
    ∫ 2x dx = x² + C
  The +C is necessary.

Definite integral:
  A definite integral has limits:
    ∫₁³ 2x dx
  and produces a number:
    8
  There is no +C in the final answer because the constants cancel when evaluating the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A SIMPLE STEP-BY-STEP METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an integral such as:
  ∫ (3x⁴ + 2x² - 7) dx

follow these steps:

Step 1: Separate the terms
  ∫ 3x⁴ dx + ∫ 2x² dx - ∫ 7 dx

Step 2: Apply the power rule
  3(x⁵/5) + 2(x³/3) - 7x

Step 3: Simplify
  (3/5)x⁵ + (2/3)x³ - 7x + C

Step 4: Differentiate to check
  d/dx [(3/5)x⁵ + (2/3)x³ - 7x + C]
  = 3x⁴ + 2x² - 7

Therefore, the answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key idea is:

  Integration asks: "What was differentiated to get this?"

For example:
  ∫ 12x³ dx

Ask:
  What function has derivative 12x³?

Since:
  d/dx (3x⁴) = 12x³

we know:
  ∫ 12x³ dx = 3x⁴ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Integration is the reverse process of differentiation.
  • An antiderivative F(x) satisfies: F'(x) = f(x).
  • The basic power rule is: ∫ x^n dx = x^(n+1)/(n+1) + C.
  • Always add +C for an indefinite integral.
  • Constants differentiate to zero: d/dx (C) = 0.
  • Integration can be done term-by-term.
  • Definite integrals use: F(b) - F(a).
  • Always differentiate your answer if you want to verify it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ (4x³ - 6x + 8) dx
  = 4x⁴/4 - 6x²/2 + 8x + C
  = x⁴ - 3x² + 8x + C

Differentiate:
  4x³ - 6x + 8

which confirms the answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to add C
  Incorrect:
    ∫ x² dx = x³/3
  Correct:
    ∫ x² dx = x³/3 + C

Mistake 2: Confusing the power rule direction
  Incorrect:
    ∫ x⁴ dx = 4x³
  Correct:
    ∫ x⁴ dx = x⁵/5 + C
  (Differentiation and integration are opposite operations.)

Mistake 3: Forgetting the absolute value for 1/x
  Correct:
    ∫ 1/x dx = ln|x| + C

Mistake 4: Not checking by differentiating
  Always differentiate your answer to verify it's correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration as reverse differentiation is the foundation of integral calculus.

The complete relationship is:

  If F'(x) = f(x), then ∫ f(x) dx = F(x) + C

Think of it as a cycle:

  Function → Differentiate → Derivative → Integrate → Original Function + C

This relationship is why integration is one of the two fundamental operations of calculus, along with differentiation.

Easy way to remember:

  Integration asks: "If this is the derivative, what was the original function?"

And the answer is always a family of functions (represented by +C) because the derivative of any constant is zero.
  `,
  examples: [
    "∫ x⁴ dx = x⁵/5 + C",
    "∫ 6x² dx = 2x³ + C",
    "∫ (x³ + 4x² - 5x + 7) dx = x⁴/4 + 4x³/3 - 5x²/2 + 7x + C",
    "∫ 7 dx = 7x + C",
    "∫ e^x dx = e^x + C",
    "∫ cos x dx = sin x + C",
    "∫ (4x³ - 6x + 8) dx = x⁴ - 3x² + 8x + C",
  ],
};

export default topic;