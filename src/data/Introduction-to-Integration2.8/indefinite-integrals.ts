// filename: indefinite-integrals.ts

const topic = {
  id: "indefinite-integrals",
  title: "Indefinite Integrals",
  summary:
    "The general family of antiderivatives of a function, representing the reverse process of differentiation, with the notation ∫ f(x) dx = F(x) + C, where F'(x) = f(x).",
  details: `
An indefinite integral represents the general family of antiderivatives of a function.

In simple terms:

  An indefinite integral asks: "What function has this as its derivative?"

The notation is:
  ∫ f(x) dx

and its general answer is:
  F(x) + C

where:
  F'(x) = f(x)

and C is an arbitrary constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INDEFINITE INTEGRAL VS. ANTIDERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two concepts are closely related.

If:
  F'(x) = f(x),

then F(x) is an antiderivative of f(x).

The indefinite integral collects all possible antiderivatives:
  ∫ f(x) dx = F(x) + C

For example:
  d/dx (x³) = 3x².

Therefore:
  ∫ 3x² dx = x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES THE dx MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In:
  ∫ f(x) dx,

the dx tells us that we are integrating with respect to x.

For example:
  ∫ x² dx

means:

  Find an antiderivative of x² with respect to x.

The variable matters.

For example:
  ∫ x² dx

is different from:
  ∫ x² dy

because the variable of integration is different.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE ADD C?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ 2x dx.

One antiderivative is:
  x².

But:
  x² + 1

also has derivative:
  2x.

So does:
  x² - 7.

And:
  x² + 100.

Therefore, all of these can be represented by:
  x² + C

where C is any constant.

Thus:
  ∫ 2x dx = x² + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE CONSTANT OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The C is called the constant of integration.

It is necessary because differentiation eliminates constants:
  d/dx (5) = 0.

Therefore, when reversing differentiation, we don't know what constant was originally present.

For example:
  d/dx (x² + 5) = 2x
and:
  d/dx (x² - 20) = 2x.

The original constant cannot be recovered from the derivative alone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE POWER RULE FOR INDEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important basic integration rule is:
  ∫ x^n dx = x^(n+1)/(n+1) + C

where:
  n ≠ -1.

Remember:
  Add 1 to the exponent, then divide by the new exponent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ x³ dx.

Add 1 to the exponent:
  3 + 1 = 4.

Divide by 4:
  ∫ x³ dx = x⁴/4 + C

Check:
  d/dx (x⁴/4 + C) = x³.

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: x⁸
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ x⁸ dx

Add 1:
  8 + 1 = 9.

Therefore:
  ∫ x⁸ dx = x⁹/9 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 6x⁴ dx.

Pull out the constant:
  6∫ x⁴ dx.

Apply the power rule:
  6(x⁵/5) + C.

Therefore:
  (6/5)x⁵ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a constant k:
  ∫ k f(x) dx = k ∫ f(x) dx

Example:
  ∫ 9x² dx

becomes:
  9∫ x² dx.

Therefore:
  3x³ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SUM AND DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can integrate each term separately:
  ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx
and:
  ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx

Example:
  Evaluate: ∫ (4x³ - 6x² + 2x - 5) dx.

Integrate each term:
  ∫ 4x³ dx = x⁴
  ∫ -6x² dx = -2x³
  ∫ 2x dx = x²
  ∫ -5 dx = -5x.

Therefore:
  x⁴ - 2x³ + x² - 5x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE SPECIAL CASE 1/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power rule does not work when:
  n = -1.

Because:
  x^(n+1)/(n+1) = x⁰/0,

which is undefined.

Instead:
  ∫ 1/x dx = ln|x| + C

This is one of the most important special integration formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXPONENTIAL INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because:
  d/dx (e^x) = e^x,

we have:
  ∫ e^x dx = e^x + C

Example:
  ∫ 7e^x dx

gives:
  7e^x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXPONENTIAL WITH A BASE OTHER THAN e
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:
  a^x,

the derivative is:
  d/dx (a^x) = a^x ln a.

Therefore:
  ∫ a^x dx = a^x / ln a + C

For example:
  ∫ 2^x dx = 2^x / ln 2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TRIGONOMETRIC INDEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some fundamental formulas are:

  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ sec² x dx = tan x + C
  ∫ csc² x dx = -cot x + C
  ∫ sec x tan x dx = sec x + C
  ∫ csc x cot x dx = -csc x + C

These come directly from the corresponding derivative formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (3 cos x - 2 sin x) dx.

Integrate separately:
  ∫ 3 cos x dx = 3 sin x
and:
  ∫ -2 sin x dx = 2 cos x.

Therefore:
  3 sin x + 2 cos x + C

Check by differentiation:
  3 cos x - 2 sin x.

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. BASIC INDEFINITE INTEGRAL TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function f(x)                Indefinite Integral ∫ f(x) dx
  ─────────────────────────────────────────────────────────────────
  x^n (n ≠ -1)                 x^(n+1)/(n+1) + C
  1/x                          ln|x| + C
  e^x                          e^x + C
  a^x                          a^x / ln a + C
  1                            x + C
  k (constant)                 kx + C
  sin x                        -cos x + C
  cos x                        sin x + C
  sec² x                       tan x + C
  csc² x                       -cot x + C
  sec x tan x                  sec x + C
  csc x cot x                  -csc x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INDEFINITE INTEGRAL VS. DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Indefinite integral:
  ∫ f(x) dx

has no limits of integration.

Its answer is a function plus C:
  F(x) + C.

Definite integral:
  ∫ₐᵇ f(x) dx

has an upper and lower bound.

Its answer is generally a number:
  F(b) - F(a).

For example:
  Indefinite: ∫ 2x dx = x² + C.
  Definite: ∫₁³ 2x dx.

Using F(x) = x²:
  F(3) - F(1) = 9 - 1 = 8.

Therefore:
  8.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHY DOESN'T A DEFINITE INTEGRAL NEED C?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ₐᵇ f(x) dx.

Using an antiderivative:
  [F(x) + C]ₐᵇ

gives:
  [F(b) + C] - [F(a) + C].

The constants cancel:
  F(b) - F(a) + C - C.

Therefore:
  F(b) - F(a).

That's why definite integrals don't require a +C in the final answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. FINDING AN UNKNOWN FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f'(x) = 4x³ - 2x.

To find f(x), integrate:
  f(x) = ∫ (4x³ - 2x) dx.

Therefore:
  f(x) = x⁴ - x² + C.

So:
  f(x) = x⁴ - x² + C

If an initial condition is provided, we can determine C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH AN INITIAL CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f'(x) = 6x

and:
  f(1) = 4.

First integrate:
  f(x) = 3x² + C.

Use:
  f(1) = 4.

Therefore:
  3(1)² + C = 4
  3 + C = 4

So:
  C = 1.

Therefore:
  f(x) = 3x² + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. INDEFINITE INTEGRALS AND MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Indefinite integrals are useful for finding position and velocity.

If acceleration is a(t), then velocity is:
  v(t) = ∫ a(t) dt

If velocity is v(t), then position is:
  s(t) = ∫ v(t) dt

Therefore:
  a(t) → v(t) → s(t)

Every integration introduces a constant that can be determined using initial conditions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: ACCELERATION TO POSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  a(t) = 6t.

Integrate to find velocity:
  v(t) = ∫ 6t dt
  v(t) = 3t² + C₁.

Integrate again to find position:
  s(t) = ∫ (3t² + C₁) dt.

Therefore:
  s(t) = t³ + C₁t + C₂.

So:
  s(t) = t³ + C₁t + C₂

Two integrations produce two constants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. HOW TO SOLVE AN INDEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A good procedure is:

Step 1: Identify the function
  Determine what you're integrating.

Step 2: Simplify
  Rewrite negative exponents, fractions, or separate terms when useful.

Step 3: Apply the appropriate rule
  For powers: x^n → x^(n+1)/(n+1).
  For 1/x: 1/x → ln|x|.
  For exponentials: e^x → e^x.
  For trigonometric functions, use the appropriate basic formula.

Step 4: Add C
  For an indefinite integral: +C

Step 5: Differentiate to check
  Your derivative should reproduce the original integrand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting C
  Incorrect:
    ∫ x² dx = x³/3.
  Correct:
    ∫ x² dx = x³/3 + C

Mistake 2: Incorrect power rule
  Incorrect:
    ∫ x⁴ dx = x⁴/4.
  Correct:
    ∫ x⁴ dx = x⁵/5 + C
  Remember: increase the exponent first.

Mistake 3: Applying the power rule to 1/x
  Incorrect:
    ∫ x⁻¹ dx = x⁰/0.
  Correct:
    ∫ 1/x dx = ln|x| + C

Mistake 4: Confusing indefinite and definite integrals
  ∫ f(x) dx is indefinite and requires C.
  But:
    ∫ₐᵇ f(x) dx is definite and normally produces a number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE FUNDAMENTAL CONNECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Indefinite integration and differentiation are inverse operations:

  d/dx [∫ f(x) dx] = f(x)
and:
  ∫ F'(x) dx = F(x) + C

For example:
  ∫ 12x² dx = 4x³ + C.

Check:
  d/dx (4x³ + C) = 12x².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Power:
    ∫ x^n dx = x^(n+1)/(n+1) + C

  Reciprocal:
    ∫ 1/x dx = ln|x| + C

  Exponential:
    ∫ e^x dx = e^x + C

  Sine:
    ∫ sin x dx = -cos x + C

  Cosine:
    ∫ cos x dx = sin x + C

  Secant squared:
    ∫ sec² x dx = tan x + C

  Cosecant squared:
    ∫ csc² x dx = -cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. KEY TAKEAWAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An indefinite integral represents the complete family of antiderivatives:

  ∫ f(x) dx = F(x) + C

where:
  F'(x) = f(x).

The most important rule is:

  ∫ x^n dx = x^(n+1)/(n+1) + C, n ≠ -1

while the special case:

  ∫ 1/x dx = ln|x| + C

must be memorized separately.

Think of indefinite integration as "reverse differentiation," with +C accounting for all possible antiderivatives.
  `,
  examples: [
    "∫ x³ dx = x⁴/4 + C",
    "∫ 6x⁴ dx = (6/5)x⁵ + C",
    "∫ (4x³ - 6x² + 2x - 5) dx = x⁴ - 2x³ + x² - 5x + C",
    "∫ 1/x dx = ln|x| + C",
    "∫ e^x dx = e^x + C",
    "∫ (3 cos x - 2 sin x) dx = 3 sin x + 2 cos x + C",
    "∫ sec² x dx = tan x + C",
  ],
};

export default topic;