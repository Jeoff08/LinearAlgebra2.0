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