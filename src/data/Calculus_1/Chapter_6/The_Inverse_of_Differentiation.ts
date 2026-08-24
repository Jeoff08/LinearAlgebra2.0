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