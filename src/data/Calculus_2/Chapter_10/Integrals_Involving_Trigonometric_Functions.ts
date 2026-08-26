// filename: IntegralsInvolvingTrigonometricFunctions.ts

const topic = {
  id: "integrals-involving-trigonometric-functions",
  title: "Integrals Involving Trigonometric Functions",
  summary:
    "A comprehensive guide to integrating trigonometric functions including sine, cosine, tangent, cotangent, secant, and cosecant. Covers basic formulas, powers of trig functions, and strategies for various integral types.",
  details: `
Integrals involving trigonometric functions are integrals that contain functions such as:

  sin x, cos x, tan x, cot x, sec x, csc x

Learning how to integrate these functions is important because trigonometric functions appear frequently in Calculus 1 and Calculus 2, especially in applications involving waves, motion, physics, engineering, and geometry.

The main goal is to find an antiderivative.

If:

  F'(x) = f(x)

then:

  ∫ f(x) dx = F(x) + C

where C is the constant of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC TRIGONOMETRIC INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first step is to memorize the basic integration formulas.

Integral of Sine

Since:

  d/dx (cos x) = -sin x

we have:

  ∫ sin x dx = -cos x + C

Example

  ∫ 5 sin x dx

Take out the constant:

  = 5 ∫ sin x dx

Therefore:

  -5 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INTEGRAL OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:

  d/dx (sin x) = cos x

we have:

  ∫ cos x dx = sin x + C

Example

  ∫ 4 cos x dx

Therefore:

  4 sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTEGRAL OF SECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  d/dx (tan x) = sec² x

Therefore:

  ∫ sec² x dx = tan x + C

Example

  ∫ 7 sec² x dx

The answer is:

  7 tan x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTEGRAL OF COSECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  d/dx (cot x) = -csc² x

Therefore:

  ∫ csc² x dx = -cot x + C

Example

  ∫ 3 csc² x dx

Therefore:

  -3 cot x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INTEGRAL OF SECANT TIMES TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  d/dx (sec x) = sec x · tan x

Therefore:

  ∫ sec x · tan x dx = sec x + C

Example

  ∫ 2 sec x · tan x dx

Therefore:

  2 sec x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INTEGRAL OF COSECANT TIMES COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  d/dx (csc x) = -csc x · cot x

Therefore:

  ∫ csc x · cot x dx = -csc x + C

Example

  ∫ 6 csc x · cot x dx

Therefore:

  -6 csc x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRAL OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The tangent function can be rewritten as:

  tan x = sin x / cos x

Therefore:

  ∫ tan x dx = ∫ (sin x / cos x) dx

Let:

  u = cos x

Then:

  du = -sin x dx

So:

  ∫ (sin x / cos x) dx = -∫ (1/u) du

Therefore:

  ∫ tan x dx = -ln|cos x| + C

This can also be written as:

  ∫ tan x dx = ln|sec x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRAL OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cotangent can be written as:

  cot x = cos x / sin x

Therefore:

  ∫ cot x dx = ∫ (cos x / sin x) dx

Let:

  u = sin x

Then:

  du = cos x dx

Thus:

  ∫ (1/u) du

Therefore:

  ∫ cot x dx = ln|sin x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRAL OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of secant is more complicated:

  ∫ sec x dx

The result is:

  ∫ sec x dx = ln|sec x + tan x| + C

This formula is important to memorize.

Why?

We multiply by a special form of 1:

  (sec x + tan x) / (sec x + tan x)

Then:

  ∫ sec x dx = ∫ (sec² x + sec x · tan x) / (sec x + tan x) dx

Let:

  u = sec x + tan x

Then:

  du = (sec x · tan x + sec² x) dx

Therefore:

  ∫ (1/u) du = ln|u| + C

Thus:

  ∫ sec x dx = ln|sec x + tan x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRAL OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly:

  ∫ csc x dx

The result is:

  ∫ csc x dx = ln|csc x - cot x| + C

An equivalent form is:

  -ln|csc x + cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMPLETE BASIC TRIGONOMETRIC INTEGRAL TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integral                    Result
  ──────────────────────────────────────────────────
  ∫ sin x dx                  -cos x + C
  ∫ cos x dx                  sin x + C
  ∫ sec² x dx                 tan x + C
  ∫ csc² x dx                 -cot x + C
  ∫ sec x · tan x dx          sec x + C
  ∫ csc x · cot x dx          -csc x + C
  ∫ tan x dx                  -ln|cos x| + C = ln|sec x| + C
  ∫ cot x dx                  ln|sin x| + C
  ∫ sec x dx                  ln|sec x + tan x| + C
  ∫ csc x dx                  ln|csc x - cot x| + C

These are the most important basic formulas to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRALS INVOLVING POWERS OF SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the integral contains powers:

  ∫ sinᵐ x cosⁿ x dx

For example:

  ∫ sin³ x cos² x dx

The method you use depends on whether the powers are odd or even.

Case 1: Odd Power of Sine

Suppose:

  ∫ sin³ x cos² x dx

Because the sine power is odd, separate one sine:

  sin³ x = sin² x · sin x

Using:

  sin² x = 1 - cos² x

we get:

  ∫ (1 - cos² x) · sin x · cos² x dx

Let:

  u = cos x

Then:

  du = -sin x dx

The integral becomes a polynomial integral in u.

General Rule

If the power of sine is odd, save one:

  sin x

and convert the remaining sine powers using:

  sin² x = 1 - cos² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ODD POWER OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ sin² x cos³ x dx

Because cosine has an odd power, separate one cosine:

  cos³ x = cos² x · cos x

Use:

  cos² x = 1 - sin² x

Then:

  ∫ sin² x (1 - sin² x) · cos x dx

Let:

  u = sin x

Then:

  du = cos x dx

The integral becomes easier.

General Rule

If the power of cosine is odd, save one:

  cos x

and convert the remaining cosine powers using:

  cos² x = 1 - sin² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EVEN POWERS OF SINE AND COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose both powers are even:

  ∫ sin² x cos² x dx

In this situation, use the power-reduction identities:

  sin² x = (1 - cos 2x)/2

and:

  cos² x = (1 + cos 2x)/2

For example:

  ∫ sin² x dx

Use:

  sin² x = (1 - cos 2x)/2

Therefore:

  ∫ (1 - cos 2x)/2 dx

Separate:

  (1/2)∫ 1 dx - (1/2)∫ cos 2x dx

Therefore:

  ∫ sin² x dx = x/2 - sin 2x/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INTEGRALS INVOLVING POWERS OF TANGENT AND SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another common type is:

  ∫ tanᵐ x secⁿ x dx

The strategy depends on the powers.

Case 1: Even Power of Secant

If secant has an even power, save:

  sec² x

because:

  d/dx (tan x) = sec² x

Use the identity:

  sec² x = 1 + tan² x

Then substitute:

  u = tan x

Example

  ∫ tan² x sec⁴ x dx

Separate:

  sec⁴ x = sec² x · sec² x

So:

  ∫ tan² x · sec² x · sec² x dx

Convert one:

  sec² x = 1 + tan² x

Therefore:

  ∫ tan² x (1 + tan² x) sec² x dx

Let:

  u = tan x

Then:

  du = sec² x dx

Now integrate the polynomial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ODD POWER OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If tangent has an odd power, it is often useful to save:

  sec x · tan x

because:

  d/dx (sec x) = sec x · tan x

Use:

  tan² x = sec² x - 1

Then substitute:

  u = sec x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INTEGRALS INVOLVING COTANGENT AND COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, for:

  ∫ cotᵐ x cscⁿ x dx

we use the identities:

  csc² x = 1 + cot² x

and:

  cot² x = csc² x - 1

Important derivative relationships are:

  d/dx (cot x) = -csc² x

and:

  d/dx (csc x) = -csc x · cot x

These help us choose an appropriate substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. USING SUBSTITUTION WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the trigonometric function contains another expression.

Example

  ∫ cos(3x) dx

Let:

  u = 3x

Then:

  du = 3 dx

Therefore:

  dx = (1/3) du

The integral becomes:

  (1/3) ∫ cos u du

Thus:

  (1/3) sin(3x) + C

Another Example

  ∫ sec²(5x) dx

Let:

  u = 5x

Then:

  du = 5 dx

Therefore:

  dx = (1/5) du

So:

  (1/5) ∫ sec² u du

Therefore:

  (1/5) tan(5x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DEFINITE INTEGRALS WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral has limits:

  ∫ₐᵇ f(x) dx

It gives the accumulated signed area or net accumulation between two points.

For example:

  ∫₀ᵐᶜ sin x dx

First find the antiderivative:

  ∫ sin x dx = -cos x

Now evaluate:

  [-cos x]₀ᵐᶜ

Substitute the upper limit:

  -cos π = 1

Substitute the lower limit:

  -cos 0 = -1

Therefore:

  1 - (-1) = 2

So:

  ∫₀ᵐᶜ sin x dx = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON TRIGONOMETRIC IDENTITIES USED IN INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should memorize these identities.

Pythagorean Identities

  sin² x + cos² x = 1
  1 + tan² x = sec² x
  1 + cot² x = csc² x

Power-Reduction Identities

  sin² x = (1 - cos 2x)/2
  cos² x = (1 + cos 2x)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. HOW TO DECIDE WHICH METHOD TO USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a trigonometric integral, ask:

Step 1: Is it a basic integral?

For example:

  ∫ cos x dx

Use the basic formula.

Step 2: Does it contain an inner function?

For example:

  ∫ sin(4x) dx

Use substitution or the reverse Chain Rule.

Step 3: Does it contain powers of sine and cosine?

Check whether the powers are:

  Odd
  Even

Then choose the appropriate identity.

Step 4: Does it contain powers of tangent and secant?

Look for:

  sec² x

or:

  sec x · tan x

because these match important derivatives.

Step 5: Does it contain cotangent and cosecant?

Look for:

  csc² x

or:

  csc x · cot x

because these also match important derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK STRATEGY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integral Type                    Best Strategy
  ──────────────────────────────────────────────────────────────
  Basic sin x, cos x               Use basic formulas
  sec² x                           Substitute tan x
  csc² x                           Substitute cot x
  sec x · tan x                    Substitute sec x
  csc x · cot x                    Substitute csc x
  Odd power of sin x               Save sin x, convert remaining
  Odd power of cos x               Save cos x, convert remaining
  Both sine/cosine powers even     Use half-angle identities
  Even power of secant             Save sec² x
  Odd power of tangent             Use tan² x = sec² x - 1
  Inner expression present         Use substitution

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ sec² x dx = tan x + C
  ∫ csc² x dx = -cot x + C
  ∫ sec x · tan x dx = sec x + C
  ∫ csc x · cot x dx = -csc x + C
  ∫ tan x dx = -ln|cos x| + C = ln|sec x| + C
  ∫ cot x dx = ln|sin x| + C
  ∫ sec x dx = ln|sec x + tan x| + C
  ∫ csc x dx = ln|csc x - cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integrals involving trigonometric functions become much easier when you recognize familiar patterns.

The most important basic formulas are:

  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ sec² x dx = tan x + C
  ∫ csc² x dx = -cot x + C
  ∫ sec x · tan x dx = sec x + C
  ∫ csc x · cot x dx = -csc x + C

The key to solving more complicated trigonometric integrals is to:

  • Recognize the trigonometric functions.
  • Use identities to rewrite the expression.
  • Look for a derivative pattern.
  • Use substitution when necessary.
  • Apply the correct integration formula.

Once you memorize the basic derivatives and identities, trigonometric integration becomes much easier because many difficult-looking problems can be transformed into familiar polynomial or substitution problems.
  `,
  examples: [
    "∫ sin x dx = -cos x + C",
    "∫ cos x dx = sin x + C",
    "∫ sec² x dx = tan x + C",
    "∫ csc² x dx = -cot x + C",
    "∫ sec x · tan x dx = sec x + C",
    "∫ csc x · cot x dx = -csc x + C",
    "∫ tan x dx = -ln|cos x| + C = ln|sec x| + C",
    "∫ cot x dx = ln|sin x| + C",
    "∫ sec x dx = ln|sec x + tan x| + C",
    "∫ csc x dx = ln|csc x - cot x| + C",
    "∫ sin³ x cos² x dx = -cos³ x/3 + cos⁵ x/5 + C",
    "∫₀ᵐᶜ sin x dx = 2",
  ],
};

export default topic;