// filename: DerivativesOfInverseTrigonometricFunctions.ts

const topic = {
  id: "derivatives-of-inverse-trigonometric-functions",
  title: "Derivatives of Inverse Trigonometric Functions",
  summary:
    "A comprehensive guide to differentiating inverse trigonometric functions including arcsin, arccos, arctan, arccot, arcsec, and arccsc. Covers derivations, Chain Rule applications, and common mistakes.",
  details: `
Inverse trigonometric functions are functions that allow us to find an angle from a known trigonometric ratio. In calculus, we need to know how to differentiate these functions.

The most common inverse trigonometric functions are:

  arcsin x, arccos x, arctan x

Other inverse trigonometric functions include:

  arccot x, arcsec x, arccsc x

This topic is important because inverse trigonometric functions appear frequently in:

  Differentiation
  Integration
  Trigonometric substitution
  Physics
  Engineering
  Computer graphics
  Geometry

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INVERSE TRIGONOMETRIC FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A normal trigonometric function takes an angle and produces a number.

For example:

  sin(π/6) = 1/2

Inverse sine reverses the process:

  arcsin(1/2) = π/6

So:

  y = arcsin x

means:

  sin y = x

The same idea applies to the other inverse functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE THREE MOST IMPORTANT DERIVATIVE FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three formulas you should memorize first are:

  d/dx (arcsin x) = 1 / √(1 - x²)
  d/dx (arccos x) = -1 / √(1 - x²)
  d/dx (arctan x) = 1 / (1 + x²)

Notice:

  Arcsine has a positive derivative.
  Arccosine has a negative derivative.
  Arctangent has 1 + x² in the denominator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE OF INVERSE SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:

  y = arcsin x

This means:

  sin y = x

We differentiate both sides implicitly:

  d/dx (sin y) = d/dx (x)

Using the Chain Rule:

  cos y · dy/dx = 1

Therefore:

  dy/dx = 1 / cos y

We need to rewrite cos y in terms of x.

Since:

  sin y = x

use the identity:

  sin² y + cos² y = 1

Therefore:

  x² + cos² y = 1

So:

  cos² y = 1 - x²

Thus:

  cos y = √(1 - x²)

Therefore:

  d/dx (arcsin x) = 1 / √(1 - x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY IS THE SQUARE ROOT POSITIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For inverse sine:

  -π/2 ≤ y ≤ π/2

Within this range, cosine is nonnegative:

  cos y ≥ 0

Therefore:

  cos y = √(1 - x²)

This is why the derivative formula becomes:

  1 / √(1 - x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: DERIVATIVE OF ARCSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  y = arcsin(3x)

Use the Chain Rule.

The derivative of:

  arcsin(u)

is:

  1 / √(1 - u²)

Multiply by:

  u'

Here:

  u = 3x

so:

  u' = 3

Therefore:

  y' = 3 / √(1 - 9x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE OF INVERSE COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:

  y = arccos x

This means:

  cos y = x

Differentiate implicitly:

  -sin y · dy/dx = 1

Therefore:

  dy/dx = -1 / sin y

Using:

  sin² y + cos² y = 1

Since:

  cos y = x

we get:

  sin² y + x² = 1

Thus:

  sin y = √(1 - x²)

Therefore:

  d/dx (arccos x) = -1 / √(1 - x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: DERIVATIVE OF ARCCOSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  y = arccos(2x)

Let:

  u = 2x

Then:

  u' = 2

Using the Chain Rule:

  y' = -u' / √(1 - u²)

Therefore:

  y' = -2 / √(1 - 4x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE OF INVERSE TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:

  y = arctan x

This means:

  tan y = x

Differentiate implicitly:

  sec² y · dy/dx = 1

Therefore:

  dy/dx = 1 / sec² y

Using the identity:

  sec² y = 1 + tan² y

Since:

  tan y = x

we get:

  sec² y = 1 + x²

Therefore:

  d/dx (arctan x) = 1 / (1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: DERIVATIVE OF ARCTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:

  y = arctan(5x²)

Let:

  u = 5x²

Then:

  u' = 10x

Using the formula:

  d/dx [arctan(u)] = u' / (1 + u²)

Therefore:

  y' = 10x / (1 + 25x⁴)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DERIVATIVE OF INVERSE COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is commonly written as:

  d/dx (arccot x) = -1 / (1 + x²)

Important Note

The definition and range of arccot can vary depending on the textbook or calculator.

However, in many calculus textbooks:

  d/dx (arccot x) = -1 / (1 + x²)

Example

Differentiate:

  y = arccot(4x)

Using the Chain Rule:

  y' = -4 / (1 + (4x)²)

Therefore:

  y' = -4 / (1 + 16x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVE OF INVERSE SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of inverse secant is:

  d/dx (arcsec x) = 1 / (|x| √(x² - 1))

The domain requires:

  |x| > 1

The absolute value:

  |x|

is important because x can be positive or negative.

Example

Differentiate:

  y = arcsec(3x)

Let:

  u = 3x

Then:

  u' = 3

Using the Chain Rule:

  y' = u' / (|u| √(u² - 1))

Therefore:

  y' = 3 / (|3x| √(9x² - 1))

Since:

  |3x| = 3|x|

this can also be simplified to:

  y' = 1 / (|x| √(9x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DERIVATIVE OF INVERSE COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is:

  d/dx (arccsc x) = -1 / (|x| √(x² - 1))

The domain is:

  |x| > 1

Notice that it is almost the same as inverse secant, except for the negative sign.

Example

Differentiate:

  y = arccsc(2x)

Let:

  u = 2x

Then:

  u' = 2

Therefore:

  y' = -2 / (|2x| √(4x² - 1))

Since:

  |2x| = 2|x|

we get:

  y' = -1 / (|x| √(4x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMPLETE DERIVATIVE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function          Derivative
  ──────────────────────────────────────────────
  arcsin x          1 / √(1 - x²)
  arccos x          -1 / √(1 - x²)
  arctan x          1 / (1 + x²)
  arccot x          -1 / (1 + x²)
  arcsec x          1 / (|x| √(x² - 1))
  arccsc x          -1 / (|x| √(x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE CHAIN RULE WITH INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most calculus problems involve an expression inside the inverse trigonometric function.

For example:

  y = arcsin(u)

The derivative is:

  y' = u' / √(1 - u²)

Similarly:

Inverse Cosine

  d/dx [arccos(u)] = -u' / √(1 - u²)

Inverse Tangent

  d/dx [arctan(u)] = u' / (1 + u²)

Inverse Cotangent

  d/dx [arccot(u)] = -u' / (1 + u²)

Inverse Secant

  d/dx [arcsec(u)] = u' / (|u| √(u² - 1))

Inverse Cosecant

  d/dx [arccsc(u)] = -u' / (|u| √(u² - 1))

The key idea is:

  Differentiate the inside function and multiply by the inverse trigonometric derivative formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1

Differentiate:

  y = arcsin(x²)

Let:

  u = x²

Then:

  u' = 2x

Therefore:

  y' = 2x / √(1 - x⁴)

Example 2

Differentiate:

  y = arctan(√x)

Let:

  u = √x

Then:

  u' = 1 / (2√x)

Therefore:

  y' = 1 / (2√x(1 + x))

Example 3

Differentiate:

  y = x · arctan x

This requires the Product Rule:

  (uv)' = u'v + uv'

Let:

  u = x

and:

  v = arctan x

Then:

  u' = 1

and:

  v' = 1 / (1 + x²)

Therefore:

  y' = arctan x + x / (1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DERIVING THE FORMULA USING IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric derivatives are often derived using implicit differentiation.

The general process is:

Step 1: Write the inverse function

For example:

  y = arcsin x

Step 2: Convert to the original trigonometric equation

  sin y = x

Step 3: Differentiate both sides

  cos y · dy/dx = 1

Step 4: Solve for dy/dx

  dy/dx = 1 / cos y

Step 5: Use a trigonometric identity to rewrite the answer in terms of x

  cos y = √(1 - x²)

Therefore:

  dy/dx = 1 / √(1 - x²)

This same general method can be used to derive other inverse trigonometric derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain restrictions matter when differentiating inverse trigonometric functions.

Inverse Sine and Inverse Cosine

The expressions:

  √(1 - x²)

must be positive in the denominator.

Therefore:

  -1 < x < 1

for the standard derivative formulas.

Inverse Secant and Inverse Cosecant

The expression:

  √(x² - 1)

requires:

  x² - 1 > 0

Therefore:

  |x| > 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Chain Rule

For:

  arcsin(3x)

Wrong:

  1 / √(1 - 9x²)

Correct:

  3 / √(1 - 9x²)

The derivative of 3x must be included.

Mistake 2: Forgetting the Negative Sign for Arccos

Wrong:

  d/dx (arccos x) = 1 / √(1 - x²)

Correct:

  d/dx (arccos x) = -1 / √(1 - x²)

Mistake 3: Forgetting the Absolute Value in Arcsec

Wrong:

  1 / (x √(x² - 1))

The standard general formula is:

  1 / (|x| √(x² - 1))

Mistake 4: Confusing arcsin x with csc x

Remember:

  arcsin x

means inverse sine.

While:

  csc x = 1 / sin x

means reciprocal sine.

They are completely different functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK RECOGNITION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

  u' / √(1 - u²)

think:

  arcsin(u)

When you see:

  -u' / √(1 - u²)

think:

  arccos(u)

When you see:

  u' / (1 + u²)

think:

  arctan(u)

These patterns are also extremely useful when performing integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  d/dx (arcsin x) = 1 / √(1 - x²)
  d/dx (arccos x) = -1 / √(1 - x²)
  d/dx (arctan x) = 1 / (1 + x²)
  d/dx (arccot x) = -1 / (1 + x²)
  d/dx (arcsec x) = 1 / (|x| √(x² - 1))
  d/dx (arccsc x) = -1 / (|x| √(x² - 1))

Chain Rule Versions:

  d/dx [arcsin(u)] = u' / √(1 - u²)
  d/dx [arccos(u)] = -u' / √(1 - u²)
  d/dx [arctan(u)] = u' / (1 + u²)
  d/dx [arccot(u)] = -u' / (1 + u²)
  d/dx [arcsec(u)] = u' / (|u| √(u² - 1))
  d/dx [arccsc(u)] = -u' / (|u| √(u² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of inverse trigonometric functions are essential formulas in calculus.

The Three Most Important

  d/dx (arcsin x) = 1 / √(1 - x²)
  d/dx (arccos x) = -1 / √(1 - x²)
  d/dx (arctan x) = 1 / (1 + x²)

The Complete Set

  d/dx (arcsin x) = 1 / √(1 - x²)
  d/dx (arccos x) = -1 / √(1 - x²)
  d/dx (arctan x) = 1 / (1 + x²)
  d/dx (arccot x) = -1 / (1 + x²)
  d/dx (arcsec x) = 1 / (|x| √(x² - 1))
  d/dx (arccsc x) = -1 / (|x| √(x² - 1))

Key Idea to Remember

When differentiating an inverse trigonometric function:

  • Identify the inverse trig function.
  • Identify the inside function u.
  • Apply the correct derivative formula.
  • Multiply by u' using the Chain Rule.

Once you recognize these patterns, derivatives involving inverse trigonometric functions become much easier to solve.

Easy way to remember: Arcsin and arctan have positive derivatives, arccos and arccot have negative derivatives, and arcsec/arccsc have absolute values and square roots of x² - 1.
  `,
  examples: [
    "d/dx (arcsin x) = 1/√(1 - x²)",
    "d/dx (arccos x) = -1/√(1 - x²)",
    "d/dx (arctan x) = 1/(1 + x²)",
    "d/dx (arcsin(3x)) = 3/√(1 - 9x²)",
    "d/dx (arccos(2x)) = -2/√(1 - 4x²)",
    "d/dx (arctan(5x²)) = 10x/(1 + 25x⁴)",
    "d/dx (arccot(4x)) = -4/(1 + 16x²)",
    "d/dx (arcsec(3x)) = 3/(|3x|√(9x² - 1))",
    "d/dx (arccsc(2x)) = -2/(|2x|√(4x² - 1))",
    "d/dx (x · arctan x) = arctan x + x/(1 + x²)",
  ],
};

export default topic;