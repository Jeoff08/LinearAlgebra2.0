// filename: IntegrationOfRationalFunctionsOfSineAndCosine.ts

const topic = {
  id: "integration-of-rational-functions-of-sine-and-cosine",
  title: "Integration of Rational Functions of Sine and Cosine",
  summary:
    "A comprehensive guide to integrating rational expressions involving sine and cosine. Covers direct substitution, Pythagorean identities, power-reduction formulas, and the tangent half-angle (Weierstrass) substitution.",
  details: `
Integration of Rational Functions of Sine and Cosine is a Calculus 2 technique used for integrals involving expressions such as:

  ∫ R(sin x, cos x) dx,

where R is a rational expression involving powers or products of sin x and cos x.

Typical examples include:

  ∫ 1/(1 + sin x) dx, ∫ sin x / cos x dx, ∫ 1/(sin x + cos x) dx,

and more complicated expressions such as:

  ∫ sin² x / (1 + cos x) dx.

The main goal is to transform the trigonometric expression into a form that can be integrated using ordinary algebraic techniques, often substitution or partial fractions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A RATIONAL FUNCTION OF SINE AND COSINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function of sine and cosine is an expression that can be written using:

  sin x, cos x

and their powers, products, and quotients.

For example:

  (sin x + cos x)/(1 + sin x),

is a rational function of sine and cosine.

Another example is:

  sin² x / cos³ x.

The challenge is deciding which trigonometric identity or substitution will simplify the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MOST IMPORTANT IDENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several identities are particularly useful.

Pythagorean Identity

  sin² x + cos² x = 1

Therefore:

  sin² x = 1 - cos² x

and:

  cos² x = 1 - sin² x.

Tangent and Secant

Dividing the Pythagorean identity by cos² x:

  1 + tan² x = sec² x.

Thus:

  1 + tan² x = sec² x.

Cotangent and Cosecant

Dividing by sin² x:

  1 + cot² x = csc² x.

Therefore:

  1 + cot² x = csc² x.

These identities allow us to convert complicated combinations of sine and cosine into simpler expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE SIMPLEST CASES: DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before using complicated identities, always check whether ordinary substitution works.

For example:

  ∫ sin x / cos x dx.

Let:

  u = cos x.

Then:

  du = -sin x dx.

Therefore:

  sin x dx = -du.

The integral becomes:

  -∫ 1/u du.

Thus:

  -ln|u| + C

and:

  -ln|cos x| + C.

Since:

  -ln|cos x| = ln|sec x|,

we can also write:

  ln|sec x| + C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER EXAMPLE: ∫ tan x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  tan x = sin x / cos x.

Therefore:

  ∫ tan x dx = ∫ sin x / cos x dx.

Let:

  u = cos x.

Then:

  du = -sin x dx.

So:

  -∫ 1/u du = -ln|u| + C.

Therefore:

  ∫ tan x dx = ln|sec x| + C.

This is a basic example of integrating a rational expression involving sine and cosine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHEN POWERS OF SINE AND COSINE APPEAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ sinᵐ x cosⁿ x dx.

The strategy depends heavily on whether m and n are even or odd.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHEN THE POWER OF SINE IS ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ sin³ x cos² x dx.

Since the sine power is odd, separate one sine:

  sin³ x = sin² x · sin x.

Then:

  sin² x = 1 - cos² x.

Therefore:

  ∫ (1 - cos² x) cos² x · sin x dx.

Let:

  u = cos x.

Then:

  du = -sin x dx.

Thus:

  -∫ (1 - u²) u² du.

Expand:

  -∫ (u² - u⁴) du.

Integrate:

  -u³/3 + u⁵/5 + C.

Substitute back:

  -cos³ x/3 + cos⁵ x/5 + C

Important pattern

If the sine power is odd, save one sin x and convert the remaining sine powers using:

  sin² x = 1 - cos² x.

Then use:

  u = cos x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHEN THE POWER OF COSINE IS ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ sin² x cos³ x dx.

Save one cosine:

  cos³ x = cos² x · cos x.

Use:

  cos² x = 1 - sin² x.

Therefore:

  ∫ sin² x (1 - sin² x) · cos x dx.

Let:

  u = sin x.

Then:

  du = cos x dx.

The integral becomes:

  ∫ u² (1 - u²) du.

Expand:

  ∫ (u² - u⁴) du.

Thus:

  u³/3 - u⁵/5 + C.

Substitute back:

  sin³ x/3 - sin⁵ x/5 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHEN BOTH POWERS ARE EVEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ sin² x cos² x dx.

Neither sine nor cosine has an odd power, so the previous strategy does not work directly.

Instead, use the power-reduction identities:

  sin² x = (1 - cos 2x)/2

and:

  cos² x = (1 + cos 2x)/2.

Therefore:

  sin² x cos² x = ((1 - cos 2x)(1 + cos 2x))/4.

Using:

  (1 - a)(1 + a) = 1 - a²,

we get:

  (1 - cos² 2x)/4.

Since:

  1 - cos² 2x = sin² 2x,

we have:

  (1/4) sin² 2x.

Using:

  sin²(2x) = (1 - cos 4x)/2,

we obtain:

  (1/8)(1 - cos 4x).

Therefore:

  ∫ sin² x cos² x dx = (1/8) ∫ (1 - cos 4x) dx.

Thus:

  x/8 - sin 4x/32 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TANGENT AND SECANT FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes it is easier to rewrite sine and cosine in terms of:

  tan x

and:

  sec x.

For example:

  sin x / cos² x.

Rewrite:

  (sin x / cos x) · (1 / cos x).

Therefore:

  tan x · sec x.

So:

  ∫ sin x / cos² x dx = ∫ tan x · sec x dx.

Since:

  d/dx (sec x) = sec x · tan x,

we immediately get:

  sec x + C.

This illustrates an important principle:

  Rewrite the integrand into a form whose derivative you recognize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RATIONAL EXPRESSIONS SUCH AS 1/(1 + sin x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ 1/(1 + sin x) dx.

At first glance, this does not have an obvious substitution.

A useful technique is to multiply the numerator and denominator by the conjugate:

  1 - sin x.

Thus:

  1/(1 + sin x) · (1 - sin x)/(1 - sin x).

We obtain:

  (1 - sin x)/(1 - sin² x).

Using:

  1 - sin² x = cos² x,

we get:

  (1 - sin x)/cos² x.

Separate:

  1/cos² x - sin x/cos² x.

Therefore:

  sec² x - sec x · tan x.

Now integrate:

  ∫ sec² x dx - ∫ sec x · tan x dx.

Thus:

  tan x - sec x + C

This is a useful technique for rational trigonometric expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONALIZATION USING THE CONJUGATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The previous example demonstrates a broader strategy.

If you have:

  1/(a + sin x),

you might multiply by:

  a - sin x.

Similarly, for:

  1/(a + cos x),

you can try:

  a - cos x.

The purpose is to produce a denominator involving:

  1 - sin² x

or:

  1 - cos² x,

which can then be replaced by:

  cos² x

or:

  sin² x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE UNIVERSAL TANGENT HALF-ANGLE SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a general rational function of sine and cosine, one of the most powerful methods is the tangent half-angle substitution:

  t = tan(x/2)

This transforms both sine and cosine into rational functions of t.

The formulas are:

  sin x = 2t/(1 + t²)
  cos x = (1 - t²)/(1 + t²)

and:

  dx = 2/(1 + t²) dt

This is sometimes called the Weierstrass substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY IS THE HALF-ANGLE SUBSTITUTION POWERFUL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

  R(sin x, cos x).

Substituting:

  t = tan(x/2)

gives:

  sin x = 2t/(1 + t²)

and:

  cos x = (1 - t²)/(1 + t²).

Both are rational expressions in t.

Also:

  dx = 2/(1 + t²) dt.

Therefore, the entire trigonometric integral becomes a rational-function integral in t.

That means we can use:

  algebraic simplification,
  polynomial division,
  partial fractions,
  logarithms,
  arctangent formulas.

This is why the substitution is so powerful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE USING HALF-ANGLE SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ 1/(1 + cos x) dx.

Let:

  t = tan(x/2).

Then:

  cos x = (1 - t²)/(1 + t²)

and:

  dx = 2/(1 + t²) dt.

Substitute:

  ∫ [1/(1 + (1 - t²)/(1 + t²))] · [2/(1 + t²)] dt.

Simplify the denominator:

  1 + (1 - t²)/(1 + t²) = (1 + t² + 1 - t²)/(1 + t²) = 2/(1 + t²).

So the integral becomes:

  ∫ [1/(2/(1 + t²))] · [2/(1 + t²)] dt.

Everything cancels:

  ∫ dt = t + C.

Since:

  t = tan(x/2),

the result is:

  tan(x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHEN SHOULD YOU USE HALF-ANGLE SUBSTITUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The substitution:

  t = tan(x/2)

is especially useful when:

  • both sin x and cos x appear;
  • ordinary substitution does not work;
  • the expression is genuinely rational in sin x and cos x;
  • trigonometric identities do not simplify the integral enough.

It is a general-purpose method for rational trigonometric integrals.

However, it can sometimes produce much more algebra than necessary, so try simpler methods first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A PRACTICAL DECISION PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter:

  ∫ R(sin x, cos x) dx,

try these methods in order.

Step 1: Look for direct substitution

Does the integral contain:

  sin x dx

with powers of cosine?

Try:

  u = cos x.

Does it contain:

  cos x dx

with powers of sine?

Try:

  u = sin x.

Step 2: Look for Pythagorean identities

Use:

  sin² x + cos² x = 1.

Convert one function into the other when useful.

Step 3: Look for tangent and secant

Use:

  tan x = sin x / cos x

and:

  sec x = 1 / cos x.

This can reveal recognizable derivatives such as:

  d/dx (tan x) = sec² x

and:

  d/dx (sec x) = sec x · tan x.

Step 4: Use power-reduction identities

For even powers:

  sin² x = (1 - cos 2x)/2

and:

  cos² x = (1 + cos 2x)/2.

Step 5: Try the half-angle substitution

If the expression remains a complicated rational function of both sine and cosine:

  t = tan(x/2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT DERIVATIVES TO RECOGNIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These derivatives occur frequently:

  d/dx (sin x) = cos x
  d/dx (cos x) = -sin x
  d/dx (tan x) = sec² x
  d/dx (cot x) = -csc² x
  d/dx (sec x) = sec x · tan x
  d/dx (csc x) = -csc x · cot x

Recognizing these patterns can often eliminate the need for complicated substitutions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the half-angle substitution too quickly

Not every trigonometric rational integral requires:

  t = tan(x/2).

Always look for a simpler substitution first.

Mistake 2: Forgetting the differential

If:

  t = tan(x/2),

then:

  dx = 2/(1 + t²) dt

must also be substituted.

Mistake 3: Using the wrong identity

Remember:

  1 - sin² x = cos² x

while:

  1 - cos² x = sin² x.

Mistake 4: Expanding unnecessarily

Sometimes an expression can be simplified immediately using an identity. Avoid creating unnecessary algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                              Useful Method
  ──────────────────────────────────────────────────────────────────────────
  sin x with powers of cos x             u = cos x
  cos x with powers of sin x             u = sin x
  Odd power of sine                      Save one sin x
  Odd power of cosine                    Save one cos x
  Both powers even                       Power-reduction identities
  tan x · sec x                          Recognize derivative of sec x
  tan² x                                 Use 1 + tan² x = sec² x
  sec² x                                 Use u = tan x
  General rational expression in sin x, cos x    t = tan(x/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Pythagorean Identity:
    sin² x + cos² x = 1

  Tangent Identity:
    1 + tan² x = sec² x

  Cotangent Identity:
    1 + cot² x = csc² x

  Power-Reduction Identities:
    sin² x = (1 - cos 2x)/2
    cos² x = (1 + cos 2x)/2

  Half-Angle Substitution (t = tan(x/2)):
    sin x = 2t/(1 + t²)
    cos x = (1 - t²)/(1 + t²)
    dx = 2/(1 + t²) dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several levels of difficulty.

Easy

  ∫ sin x · cos x dx

Use substitution.

Moderate

  ∫ sin³ x · cos² x dx

Use odd-power strategy and the Pythagorean identity.

More difficult

  ∫ sin² x · cos² x dx

Use power-reduction identities.

General rational form

  ∫ R(sin x, cos x) dx

Use:

  t = tan(x/2).

The goal is always to transform the integral into something familiar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration of Rational Functions of Sine and Cosine involves finding antiderivatives of expressions built from rational combinations of:

  sin x

and:

  cos x.

The most important tools are:

  • Pythagorean identity: sin² x + cos² x = 1
  • Tangent identity: 1 + tan² x = sec² x
  • Cotangent identity: 1 + cot² x = csc² x
  • Power-reduction identities: sin² x = (1 - cos 2x)/2, cos² x = (1 + cos 2x)/2
  • Tangent half-angle substitution: t = tan(x/2)

with:

  sin x = 2t/(1 + t²), cos x = (1 - t²)/(1 + t²), dx = 2/(1 + t²) dt

The central idea is:

  Simplify the trigonometric expression → Choose a suitable substitution → Convert to an easier integral → Integrate

The most important skill is recognizing the structure before choosing a technique. For simple expressions, use ordinary substitution or identities; for even powers, use power-reduction formulas; and for a genuinely general rational expression in sin x and cos x, the tangent half-angle substitution provides a systematic route to an ordinary rational-function integral.

Easy way to remember: First try u = sin x or u = cos x. If that fails, look at the powers—odd means save one and use Pythagorean identity, even means use power-reduction. For general rational expressions, use t = tan(x/2).
  `,
  examples: [
    "∫ sin x / cos x dx = -ln|cos x| + C = ln|sec x| + C",
    "∫ tan x dx = ln|sec x| + C",
    "∫ sin³ x cos² x dx = -cos³ x/3 + cos⁵ x/5 + C",
    "∫ sin² x cos³ x dx = sin³ x/3 - sin⁵ x/5 + C",
    "∫ sin² x cos² x dx = x/8 - sin 4x/32 + C",
    "∫ sin x / cos² x dx = sec x + C",
    "∫ 1/(1 + sin x) dx = tan x - sec x + C",
    "∫ 1/(1 + cos x) dx = tan(x/2) + C",
  ],
};

export default topic;