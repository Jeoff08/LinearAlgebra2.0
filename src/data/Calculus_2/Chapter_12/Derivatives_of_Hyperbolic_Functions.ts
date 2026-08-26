// filename: DerivativesOfHyperbolicFunctions.ts

const topic = {
  id: "derivatives-of-hyperbolic-functions",
  title: "Derivatives of Hyperbolic Functions",
  summary:
    "A comprehensive guide to differentiating all six hyperbolic functions: sinh, cosh, tanh, coth, sech, and csch. Covers derivations, chain rule applications, and comparison with trigonometric derivatives.",
  details: `
Hyperbolic functions are functions related to exponential functions and the geometry of a hyperbola. In calculus, we can differentiate them just like other functions.

The six basic hyperbolic functions are:

  sinh x, cosh x, tanh x, coth x, sech x, csch x

Their derivatives are important in differentiation, integration, differential equations, physics, engineering, and other areas of mathematics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DERIVATIVE OF HYPERBOLIC SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic sine function is defined as:

  sinh x = (eˣ - e⁻ˣ)/2

To differentiate it, use the derivative rules for exponential functions:

  d/dx (eˣ) = eˣ

and:

  d/dx (e⁻ˣ) = -e⁻ˣ

Therefore:

  d/dx (sinh x) = d/dx [(eˣ - e⁻ˣ)/2]
  = (1/2)(eˣ + e⁻ˣ)

But:

  cosh x = (eˣ + e⁻ˣ)/2

Therefore:

  d/dx (sinh x) = cosh x

Example

Differentiate:

  y = 5 sinh x

Using the constant multiple rule:

  y' = 5 cosh x

Therefore:

  y' = 5 cosh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE OF HYPERBOLIC COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosine function is:

  cosh x = (eˣ + e⁻ˣ)/2

Differentiate:

  d/dx (cosh x) = (1/2) d/dx (eˣ + e⁻ˣ)
  = (1/2)(eˣ - e⁻ˣ)

But:

  sinh x = (eˣ - e⁻ˣ)/2

Therefore:

  d/dx (cosh x) = sinh x

Example

Differentiate:

  y = 4 cosh x

Then:

  y' = 4 sinh x

Important Comparison with Trigonometric Functions

Notice the derivatives:

  d/dx (sin x) = cos x
  d/dx (cos x) = -sin x

For hyperbolic functions:

  d/dx (sinh x) = cosh x
  d/dx (cosh x) = sinh x

The important difference is that:

  d/dx (cosh x) has no negative sign

This is one of the easiest ways to distinguish hyperbolic derivatives from ordinary trigonometric derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE OF HYPERBOLIC TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic tangent is:

  tanh x = sinh x / cosh x

Using the quotient rule:

  d/dx (u/v) = (v u' - u v')/v²

Let:

  u = sinh x

and:

  v = cosh x

Then:

  u' = cosh x

and:

  v' = sinh x

Applying the quotient rule:

  d/dx (tanh x) = (cosh x · cosh x - sinh x · sinh x) / cosh² x
  = (cosh² x - sinh² x) / cosh² x

Using the fundamental identity:

  cosh² x - sinh² x = 1

we get:

  d/dx (tanh x) = 1 / cosh² x

Since:

  sech x = 1 / cosh x

then:

  d/dx (tanh x) = sech² x

Example

Differentiate:

  y = 3 tanh x

Therefore:

  y' = 3 sech² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DERIVATIVE OF HYPERBOLIC COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cotangent is:

  coth x = cosh x / sinh x

Using the quotient rule:

  d/dx (coth x) = (sinh x · sinh x - cosh x · cosh x) / sinh² x
  = (sinh² x - cosh² x) / sinh² x

Using:

  cosh² x - sinh² x = 1

we can write:

  sinh² x - cosh² x = -1

Therefore:

  d/dx (coth x) = -1 / sinh² x

Since:

  csch x = 1 / sinh x

we obtain:

  d/dx (coth x) = -csch² x

Example

Differentiate:

  y = 7 coth x

Therefore:

  y' = -7 csch² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DERIVATIVE OF HYPERBOLIC SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic secant is:

  sech x = 1 / cosh x

We can write it as:

  sech x = (cosh x)⁻¹

Using the chain rule:

  d/dx (u⁻¹) = -u⁻² · du/dx

Let:

  u = cosh x

Then:

  du/dx = sinh x

Therefore:

  d/dx (sech x) = -(cosh x)⁻² · sinh x
  = -sinh x / cosh² x

Rewrite this as:

  -(1 / cosh x) · (sinh x / cosh x)

Recognizing:

  sech x = 1 / cosh x

and:

  tanh x = sinh x / cosh x

we get:

  d/dx (sech x) = -sech x · tanh x

Example

Differentiate:

  y = 2 sech x

Therefore:

  y' = -2 sech x · tanh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE OF HYPERBOLIC COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hyperbolic cosecant is:

  csch x = 1 / sinh x

Write it as:

  csch x = (sinh x)⁻¹

Using the chain rule:

  d/dx (u⁻¹) = -u⁻² · du/dx

Let:

  u = sinh x

Then:

  du/dx = cosh x

Therefore:

  d/dx (csch x) = -cosh x / sinh² x

Rewrite:

  -(1 / sinh x) · (cosh x / sinh x)

Recognizing:

  csch x = 1 / sinh x

and:

  coth x = cosh x / sinh x

we get:

  d/dx (csch x) = -csch x · coth x

Example

Differentiate:

  y = 6 csch x

Therefore:

  y' = -6 csch x · coth x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPLETE TABLE OF DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Derivative
  ──────────────────────────────────────────────
  sinh x          cosh x
  cosh x          sinh x
  tanh x          sech² x
  coth x          -csch² x
  sech x          -sech x · tanh x
  csch x          -csch x · coth x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. USING THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Just like ordinary functions, hyperbolic functions often have expressions inside them.

Suppose:

  y = sinh(u)

where u is a function of x.

Using the chain rule:

  dy/dx = cosh(u) · du/dx

Example

Differentiate:

  y = sinh(3x)

Let:

  u = 3x

Then:

  du/dx = 3

Therefore:

  y' = 3 cosh(3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MORE CHAIN RULE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1: Hyperbolic Cosine

  y = cosh(x²)

Let:

  u = x²

Then:

  u' = 2x

Therefore:

  y' = 2x sinh(x²)

Example 2: Hyperbolic Tangent

  y = tanh(5x)

Let:

  u = 5x

Then:

  u' = 5

Therefore:

  y' = 5 sech²(5x)

Example 3: Hyperbolic Secant

  y = sech(x³)

Let:

  u = x³

Then:

  u' = 3x²

The derivative of sech u is:

  -sech u · tanh u

Therefore:

  y' = -3x² sech(x³) · tanh(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SECOND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hyperbolic functions have interesting second derivatives.

Hyperbolic Sine

First derivative:

  d/dx (sinh x) = cosh x

Differentiate again:

  d²/dx² (sinh x) = sinh x

Therefore:

  d²/dx² (sinh x) = sinh x

Hyperbolic Cosine

First derivative:

  d/dx (cosh x) = sinh x

Differentiate again:

  d²/dx² (cosh x) = cosh x

Therefore:

  d²/dx² (cosh x) = cosh x

This means both sinh x and cosh x have the special property:

  y'' = y

This is why they frequently appear as solutions to differential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: DIFFERENTIATING A COMBINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  y = 4 sinh(2x) + 3 cosh(x²) - 5 tanh x

Differentiate each term.

First Term

  d/dx [4 sinh(2x)]

Using the chain rule:

  = 4 cosh(2x) · (2)
  = 8 cosh(2x)

Second Term

  d/dx [3 cosh(x²)]
  = 3 sinh(x²) · (2x)
  = 6x sinh(x²)

Third Term

  d/dx [-5 tanh x]
  = -5 sech² x

Therefore:

  y' = 8 cosh(2x) + 6x sinh(x²) - 5 sech² x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPARISON WITH TRIGONOMETRIC DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Trigonometric     Derivative       Hyperbolic        Derivative
  ──────────────────────────────────────────────────────────────────────────
  sin x             cos x            sinh x            cosh x
  cos x             -sin x           cosh x            sinh x
  tan x             sec² x           tanh x            sech² x
  cot x             -csc² x          coth x            -csch² x
  sec x             sec x · tan x    sech x            -sech x · tanh x
  csc x             -csc x · cot x   csch x            -csch x · coth x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Adding a Negative Sign to cosh x

Incorrect:

  d/dx (cosh x) = -sinh x

Correct:

  d/dx (cosh x) = sinh x

2. Forgetting the Chain Rule

Incorrect:

  d/dx [sinh(4x)] = cosh(4x)

Correct:

  d/dx [sinh(4x)] = 4 cosh(4x)

The derivative of the inside function, 4x, must be included.

3. Confusing sech with sec

Remember:

  sech x

is a hyperbolic function, while:

  sec x

is an ordinary trigonometric function.

Their derivatives are different:

  d/dx (sec x) = sec x · tan x

but:

  d/dx (sech x) = -sech x · tanh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  d/dx (sinh x) = cosh x
  d/dx (cosh x) = sinh x
  d/dx (tanh x) = sech² x
  d/dx (coth x) = -csch² x
  d/dx (sech x) = -sech x · tanh x
  d/dx (csch x) = -csch x · coth x

Chain Rule Versions:

  d/dx [sinh(u)] = cosh(u) · u'
  d/dx [cosh(u)] = sinh(u) · u'
  d/dx [tanh(u)] = sech²(u) · u'
  d/dx [coth(u)] = -csch²(u) · u'
  d/dx [sech(u)] = -sech(u) · tanh(u) · u'
  d/dx [csch(u)] = -csch(u) · coth(u) · u'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of hyperbolic functions are closely connected to one another, much like ordinary trigonometric functions. The key difference is that hyperbolic functions are built from exponential functions, which explains why their derivative patterns are slightly different.

The most important derivative formulas are:

  d/dx (sinh x) = cosh x
  d/dx (cosh x) = sinh x
  d/dx (tanh x) = sech² x

Key observation: Unlike trigonometric functions, there is no negative sign when differentiating cosh x.

Once you memorize the six basic derivative formulas and understand how to apply the chain rule, you can differentiate even complicated hyperbolic expressions.

Easy way to remember: sinh → cosh, cosh → sinh (no negative sign), tanh → sech², and reciprocals have a negative sign.
  `,
  examples: [
    "d/dx (sinh x) = cosh x",
    "d/dx (cosh x) = sinh x",
    "d/dx (tanh x) = sech² x",
    "d/dx (coth x) = -csch² x",
    "d/dx (sech x) = -sech x · tanh x",
    "d/dx (csch x) = -csch x · coth x",
    "d/dx (sinh(3x)) = 3 cosh(3x)",
    "d/dx (cosh(x²)) = 2x sinh(x²)",
    "d/dx (tanh(5x)) = 5 sech²(5x)",
    "d/dx (sech(x³)) = -3x² sech(x³) tanh(x³)",
    "y = 4 sinh(2x) + 3 cosh(x²) - 5 tanh x → y' = 8 cosh(2x) + 6x sinh(x²) - 5 sech² x",
  ],
};

export default topic;