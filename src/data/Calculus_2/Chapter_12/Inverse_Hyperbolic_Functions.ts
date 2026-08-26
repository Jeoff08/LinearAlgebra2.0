// filename: InverseHyperbolicFunctions.ts

const topic = {
  id: "inverse-hyperbolic-functions",
  title: "Inverse Hyperbolic Functions",
  summary:
    "A comprehensive guide to inverse hyperbolic functions including asinh, acosh, atanh, acoth, asech, and acsch. Covers definitions, logarithmic forms, domain and range restrictions, and applications.",
  details: `
Inverse hyperbolic functions are functions that reverse the effect of hyperbolic functions.

For example, if:

  y = sinh x

then the inverse relationship allows us to solve for x:

  x = sinh⁻¹ y

The notation sinh⁻¹ x does not mean:

  1 / sinh x

Instead:

  sinh⁻¹ x

means the inverse hyperbolic sine function.

To avoid confusion, inverse hyperbolic functions are also written using:

  arsinh x, arcosh x, artanh x

or:

  asinh x, acosh x, atanh x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA OF AN INVERSE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inverse function reverses the original function.

Suppose:

  y = f(x)

Then its inverse is:

  x = f⁻¹(y)

The inverse function "undoes" the original function.

For hyperbolic functions:

  sinh⁻¹(sinh x) = x

provided the appropriate domain is used.

Similarly:

  cosh⁻¹(cosh x)

returns the appropriate principal value of x.

Important Warning About Notation

There are two very different meanings:

Reciprocal:

  1/sinh x = csch x

Inverse Function:

  sinh⁻¹ x = asinh x

Therefore:

  sinh⁻¹ x ≠ csch x

This is a very common source of confusion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INVERSE HYPERBOLIC SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic sine is written as:

  y = sinh⁻¹ x

or:

  y = asinh x

This means:

  x = sinh y

Recall:

  sinh y = (eʸ - e⁻ʸ)/2

Therefore:

  x = (eʸ - e⁻ʸ)/2

Solving for y gives:

  sinh⁻¹ x = ln(x + √(x² + 1))

This formula is one of the most important inverse hyperbolic formulas.

Domain and Range

For:

  y = sinh⁻¹ x

Domain:

  (-∞, ∞)

Range:

  (-∞, ∞)

Unlike some inverse functions, sinh⁻¹ x accepts every real number.

Example

Evaluate:

  sinh⁻¹(0)

Using:

  sinh⁻¹ x = ln(x + √(x² + 1))

Substitute x = 0:

  sinh⁻¹(0) = ln(0 + √(0² + 1))
  = ln(1)

Therefore:

  sinh⁻¹(0) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INVERSE HYPERBOLIC COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic cosine is:

  y = cosh⁻¹ x

or:

  y = acosh x

It reverses the hyperbolic cosine function.

The logarithmic form is:

  cosh⁻¹ x = ln(x + √(x² - 1))

Domain and Range

For real values:

Domain:

  [1, ∞)

Why?

Because:

  cosh x ≥ 1

for all real x.

Range:

The principal range is:

  [0, ∞)

We restrict the range because cosh x is not one-to-one over all real numbers.

For example:

  cosh(2) = cosh(-2)

Therefore, to have a proper inverse, we use:

  x ≥ 0

for the principal branch.

Example

Evaluate:

  cosh⁻¹(1)

Using the formula:

  cosh⁻¹(1) = ln(1 + √(1² - 1))
  = ln(1)

Therefore:

  cosh⁻¹(1) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INVERSE HYPERBOLIC TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic tangent is:

  y = tanh⁻¹ x

or:

  y = atanh x

The logarithmic formula is:

  tanh⁻¹ x = (1/2) ln((1 + x)/(1 - x))

Domain and Range

For real values:

Domain:

  (-1, 1)

Why?

Because:

  -1 < tanh x < 1

Range:

  (-∞, ∞)

Example

Evaluate:

  tanh⁻¹(0)

Using:

  tanh⁻¹(0) = (1/2) ln((1 + 0)/(1 - 0))
  = (1/2) ln(1)

Therefore:

  tanh⁻¹(0) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INVERSE HYPERBOLIC COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic cotangent is:

  y = coth⁻¹ x

or:

  y = acoth x

A logarithmic form is:

  coth⁻¹ x = (1/2) ln|(x + 1)/(x - 1)|

Domain

For real values:

  (-∞, -1) ∪ (1, ∞)

This is because:

  coth x > 1

or:

  coth x < -1

for real x.

Range:

  (-∞, 0) ∪ (0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INVERSE HYPERBOLIC SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic secant is:

  y = sech⁻¹ x

or:

  y = asech x

The logarithmic form is:

  sech⁻¹ x = ln((1 + √(1 - x²))/x)

Another equivalent form is:

  sech⁻¹ x = cosh⁻¹(1/x)

Domain and Range

For real values:

Domain:

  (0, 1]

Range:

  [0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INVERSE HYPERBOLIC COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse hyperbolic cosecant is:

  y = csch⁻¹ x

or:

  y = acsch x

One useful formula is:

  csch⁻¹ x = ln(1/x + √(1/x² + 1))

It can also be expressed as:

  csch⁻¹ x = sinh⁻¹(1/x)

Domain and Range

Domain:

  (-∞, 0) ∪ (0, ∞)

The function cannot accept:

  x = 0

because csch x can never equal zero.

Range:

  (-∞, 0) ∪ (0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPLETE TABLE OF INVERSE HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Inverse         Logarithmic Form
  ──────────────────────────────────────────────────────────────────────────
  sinh x          sinh⁻¹ x        ln(x + √(x² + 1))
  cosh x          cosh⁻¹ x        ln(x + √(x² - 1))
  tanh x          tanh⁻¹ x        (1/2) ln((1 + x)/(1 - x))
  coth x          coth⁻¹ x        (1/2) ln|(x + 1)/(x - 1)|
  sech x          sech⁻¹ x        ln((1 + √(1 - x²))/x)
  csch x          csch⁻¹ x        sinh⁻¹(1/x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY DOMAIN RESTRICTIONS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every hyperbolic function has an inverse over all real numbers.

For a function to have an inverse, it must be one-to-one.

Example: Hyperbolic Cosine

Consider:

  cosh(2) = cosh(-2)

Two different inputs produce the same output.

Therefore, cosh x is not one-to-one over all real numbers.

To create an inverse, we restrict the domain:

  x ≥ 0

Then the restricted function becomes one-to-one.

The same principle applies to:

  sech x

because:

  sech(-x) = sech(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RELATIONSHIP BETWEEN A FUNCTION AND ITS INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  y = f(x)

then:

  x = f⁻¹(y)

The graphs of a function and its inverse are reflections of each other across:

  y = x

For example:

  y = sinh x

and:

  y = sinh⁻¹ x

are reflections across the line:

  y = x

This is a useful way to understand inverse functions visually.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMPOSITION OF HYPERBOLIC AND INVERSE HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse function reverses the original function.

Example 1

  sinh⁻¹(sinh x) = x

for every real x.

Example 2

  tanh⁻¹(tanh x) = x

for every real x.

Example 3

  cosh⁻¹(cosh x) = |x|

if x is any real number.

Why?

Because the inverse hyperbolic cosine returns the principal nonnegative value.

If x ≥ 0:

  cosh⁻¹(cosh x) = x

If x < 0:

  cosh⁻¹(cosh x) = -x

Therefore:

  cosh⁻¹(cosh x) = |x|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1: Evaluate sinh⁻¹(3)

Use:

  sinh⁻¹ x = ln(x + √(x² + 1))

Substitute x = 3:

  sinh⁻¹(3) = ln(3 + √10)

Therefore:

  sinh⁻¹(3) = ln(3 + √10)

Example 2: Evaluate cosh⁻¹(2)

Use:

  cosh⁻¹ x = ln(x + √(x² - 1))

Substitute:

  cosh⁻¹(2) = ln(2 + √3)

Therefore:

  cosh⁻¹(2) = ln(2 + √3)

Example 3: Evaluate tanh⁻¹(1/2)

Use:

  tanh⁻¹ x = (1/2) ln((1 + x)/(1 - x))

Substitute:

  tanh⁻¹(1/2) = (1/2) ln((1 + 1/2)/(1 - 1/2))

Simplify:

  = (1/2) ln(3)

Therefore:

  tanh⁻¹(1/2) = (1/2) ln 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATIONS OF INVERSE HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse hyperbolic functions appear in many areas of mathematics and science.

1. Integration

Some integrals naturally produce inverse hyperbolic functions.

For example:

  ∫ 1/√(x² + 1) dx = sinh⁻¹ x + C

Also:

  ∫ 1/√(x² - 1) dx = cosh⁻¹ |x| + C

on appropriate domains.

2. Differential Equations

Solutions involving exponential and hyperbolic functions can sometimes be rewritten using inverse hyperbolic functions.

3. Physics and Engineering

Inverse hyperbolic functions appear in:

  special relativity
  electrical engineering
  mechanics
  fluid dynamics
  geometry

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing Inverse and Reciprocal

Incorrect:

  sinh⁻¹ x = 1/sinh x

Correct:

  sinh⁻¹ x = inverse hyperbolic sine

while:

  1/sinh x = csch x

Mistake 2: Forgetting Domain Restrictions

For example:

  cosh⁻¹ x

is only defined for real values when:

  x ≥ 1

Mistake 3: Assuming All Compositions Give Exactly x

For example:

  cosh⁻¹(cosh x)

is not always equal to x.

Instead:

  cosh⁻¹(cosh x) = |x|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  sinh⁻¹ x = ln(x + √(x² + 1))
  cosh⁻¹ x = ln(x + √(x² - 1)), x ≥ 1
  tanh⁻¹ x = (1/2) ln((1 + x)/(1 - x)), |x| < 1

  sinh⁻¹(sinh x) = x
  cosh⁻¹(cosh x) = |x|
  tanh⁻¹(tanh x) = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse hyperbolic functions undo hyperbolic functions. They are especially important because they allow us to solve equations involving hyperbolic functions and convert hyperbolic expressions into logarithmic forms.

The three most important inverse hyperbolic functions are:

  sinh⁻¹ x = ln(x + √(x² + 1)), Domain: (-∞, ∞)
  cosh⁻¹ x = ln(x + √(x² - 1)), Domain: [1, ∞)
  tanh⁻¹ x = (1/2) ln((1 + x)/(1 - x)), Domain: (-1, 1)

The most important thing to remember is:

  Inverse ≠ Reciprocal

For example:

  sinh⁻¹ x

means the inverse hyperbolic sine, while:

  csch x

means the reciprocal of hyperbolic sine.

Understanding the formulas, domains, ranges, and relationships between hyperbolic and inverse hyperbolic functions makes them much easier to use in Calculus.

Easy way to remember: Inverse hyperbolic functions are defined using logarithms. sinh⁻¹ uses x + √(x² + 1), cosh⁻¹ uses x + √(x² - 1), and tanh⁻¹ uses (1/2) ln((1 + x)/(1 - x)).
  `,
  examples: [
    "sinh⁻¹(0) = 0",
    "cosh⁻¹(1) = 0",
    "tanh⁻¹(0) = 0",
    "sinh⁻¹(3) = ln(3 + √10)",
    "cosh⁻¹(2) = ln(2 + √3)",
    "tanh⁻¹(1/2) = (1/2) ln 3",
    "sinh⁻¹ x = ln(x + √(x² + 1))",
    "cosh⁻¹ x = ln(x + √(x² - 1)), x ≥ 1",
    "tanh⁻¹ x = (1/2) ln((1 + x)/(1 - x)), |x| < 1",
    "cosh⁻¹(cosh x) = |x|",
  ],
};

export default topic;