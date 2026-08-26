// filename: InverseTrigonometricFunctions.ts

const topic = {
  id: "inverse-trigonometric-functions",
  title: "Inverse Trigonometric Functions",
  summary:
    "A comprehensive guide to inverse trigonometric functions including arcsin, arccos, arctan, arccot, arcsec, and arccsc. Covers definitions, domains, ranges, derivatives, integrals, and applications.",
  details: `
Inverse trigonometric functions are functions that help us find an angle when we already know a trigonometric ratio.

For example, suppose:

  sin θ = 1/2

Instead of asking, "What is the sine of an angle?", we ask:

  "What angle has a sine of 1/2?"

The answer is found using an inverse trigonometric function:

  θ = sin⁻¹(1/2)

Therefore:

  θ = π/6

Inverse trigonometric functions are extremely important in trigonometry and calculus because they allow us to work backward from a ratio to an angle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "INVERSE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inverse operation reverses another operation.

For example:

Addition and Subtraction

  x + 5 = 10

To reverse adding 5, subtract 5:

  x = 10 - 5

Multiplication and Division

  3x = 12

To reverse multiplication by 3:

  x = 12/3

Similarly, inverse trigonometric functions reverse trigonometric functions.

  Trigonometric Function    Inverse Function
  ──────────────────────────────────────────
  sin x                     sin⁻¹ x
  cos x                     cos⁻¹ x
  tan x                     tan⁻¹ x
  cot x                     cot⁻¹ x
  sec x                     sec⁻¹ x
  csc x                     csc⁻¹ x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IMPORTANT WARNING: sin⁻¹ x Does NOT Mean 1/sin x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most common mistakes.

  sin⁻¹ x ≠ 1/sin x

The notation:

  sin⁻¹ x

means:

  arcsin x

which means the inverse sine function.

Meanwhile:

  1/sin x

means:

  csc x

So:

  sin⁻¹ x = arcsin x

but:

  (sin x)⁻¹ = csc x

In practice, the notation arcsin x is often clearer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE SIX INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The six inverse trigonometric functions are:

  y = arcsin x
  y = arccos x
  y = arctan x
  y = arccot x
  y = arcsec x
  y = arccsc x

The three most commonly used in introductory calculus are:

  arcsin x
  arccos x
  arctan x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DO WE NEED RESTRICTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can only have an inverse function if it is one-to-one.

However, sine, cosine, and tangent repeat their values.

For example:

  sin 30° = 1/2

but also:

  sin 150° = 1/2

and many other angles also have sine equal to 1/2.

So if we ask:

  arcsin(1/2)

we need one standard answer.

Therefore, we restrict the domain of the original trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INVERSE SINE: arcsin x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse sine function is:

  y = arcsin x

This means:

  sin y = x

The principal range for inverse sine is:

  -π/2 ≤ y ≤ π/2

The domain is:

  -1 ≤ x ≤ 1

Example

  arcsin(1/2)

We ask:

  What angle between -π/2 and π/2 has sine equal to 1/2?

The answer is:

  arcsin(1/2) = π/6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INVERSE COSINE: arccos x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cosine function is:

  y = arccos x

This means:

  cos y = x

The domain is:

  -1 ≤ x ≤ 1

The principal range is:

  0 ≤ y ≤ π

Example

  arccos(1/2)

We ask:

  What angle between 0 and π has cosine equal to 1/2?

The answer is:

  arccos(1/2) = π/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INVERSE TANGENT: arctan x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse tangent function is:

  y = arctan x

This means:

  tan y = x

The domain is:

  (-∞, ∞)

The principal range is:

  -π/2 < y < π/2

Example

  arctan(1)

We ask:

  What angle between -π/2 and π/2 has tangent equal to 1?

The answer is:

  arctan(1) = π/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SUMMARY OF THE THREE MAIN INVERSE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Domain            Range
  ──────────────────────────────────────────────────
  arcsin x        [-1, 1]           [-π/2, π/2]
  arccos x        [-1, 1]           [0, π]
  arctan x        All real numbers  (-π/2, π/2)

These ranges are extremely important because they determine the principal value of the inverse function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INVERSE COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cotangent function is written as:

  y = arccot x

It means:

  cot y = x

Unlike arcsine, arccosine, and arctangent, the exact principal range convention for arccot can vary between textbooks and calculators.

A common calculus convention is:

  0 < y < π

However, some books and software use a different convention. Always check the convention used by your textbook or calculator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INVERSE SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse secant function is:

  y = arcsec x

This means:

  sec y = x

Since secant has range:

  (-∞, -1] ∪ [1, ∞)

the domain of arcsec is:

  (-∞, -1] ∪ [1, ∞)

A common principal range is:

  [0, π] \ {π/2}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INVERSE COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cosecant function is:

  y = arccsc x

This means:

  csc y = x

The domain is:

  (-∞, -1] ∪ [1, ∞)

A common principal range is:

  [-π/2, π/2] \ {0}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT INVERSE RELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse functions reverse each other, but we must be careful with domains and ranges.

For example:

  sin(arcsin x) = x

for:

  -1 ≤ x ≤ 1

Similarly:

  cos(arccos x) = x

and:

  tan(arctan x) = x

These are direct inverse relationships.

But What About arcsin(sin x)?

This is not always equal to x.

For example:

  arcsin(sin(5π/6))

First:

  sin(5π/6) = 1/2

Then:

  arcsin(1/2) = π/6

Therefore:

  arcsin(sin(5π/6)) = π/6

not:

  5π/6

This happens because the answer of arcsin must lie within:

  -π/2 ≤ y ≤ π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EVALUATING COMMON INVERSE TRIGONOMETRIC VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some important values to memorize are:

  Expression                Result
  ──────────────────────────────────
  arcsin(0)                 0
  arcsin(1/2)               π/6
  arcsin(√2/2)              π/4
  arcsin(√3/2)              π/3
  arcsin(1)                 π/2
  arccos(1)                 0
  arccos(√3/2)              π/6
  arccos(√2/2)              π/4
  arccos(1/2)               π/3
  arccos(0)                 π/2
  arctan(0)                 0
  arctan(1/√3)              π/6
  arctan(1)                 π/4
  arctan(√3)                π/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DERIVATIVE OF INVERSE SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important calculus formulas is:

  d/dx (arcsin x) = 1 / √(1 - x²)

This is valid for:

  -1 < x < 1

Example

Differentiate:

  y = arcsin(3x)

Using the Chain Rule:

  y' = 1 / √(1 - (3x)²) · (3)

Therefore:

  y' = 3 / √(1 - 9x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DERIVATIVE OF INVERSE COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of inverse cosine is:

  d/dx (arccos x) = -1 / √(1 - x²)

Notice the negative sign.

Example

  y = arccos(2x)

Using the Chain Rule:

  y' = -1 / √(1 - (2x)²) · (2)

Therefore:

  y' = -2 / √(1 - 4x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DERIVATIVE OF INVERSE TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is:

  d/dx (arctan x) = 1 / (1 + x²)

Example

  y = arctan(5x)

Using the Chain Rule:

  y' = 1 / (1 + (5x)²) · (5)

Therefore:

  y' = 5 / (1 + 25x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DERIVATIVE OF INVERSE COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common calculus convention gives:

  d/dx (arccot x) = -1 / (1 + x²)

As mentioned earlier, conventions for arccot can vary, so always follow your textbook's definition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DERIVATIVE OF INVERSE SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of inverse secant is:

  d/dx (arcsec x) = 1 / (|x| √(x² - 1))

for:

  |x| > 1

The absolute value is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DERIVATIVE OF INVERSE COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of inverse cosecant is:

  d/dx (arccsc x) = -1 / (|x| √(x² - 1))

for:

  |x| > 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMPLETE DERIVATIVE TABLE
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

21. INTEGRALS THAT PRODUCE INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions also appear as answers to certain integrals.

Inverse Tangent Integral

  ∫ 1/(1 + x²) dx = arctan x + C

Example

  ∫ 5/(1 + 25x²) dx

Since this matches the derivative of:

  arctan(5x)

the answer is:

  arctan(5x) + C

Inverse Sine Integral

Another important formula is:

  ∫ 1/√(1 - x²) dx = arcsin x + C

More generally:

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C

for a > 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. USING A RIGHT TRIANGLE TO SIMPLIFY INVERSE TRIGONOMETRIC EXPRESSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  θ = arctan(x/3)

This means:

  tan θ = x/3

Using:

  tan θ = opposite / adjacent

we can draw a right triangle:

  Opposite = x
  Adjacent = 3

Using the Pythagorean theorem:

  Hypotenuse = √(x² + 9)

Therefore:

  sin θ = x / √(x² + 9)

and:

  cos θ = 3 / √(x² + 9)

This technique is useful in calculus, especially in trigonometric substitution and simplification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. REAL-LIFE APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions are used whenever we need to determine an angle from known measurements.

Navigation

If you know horizontal and vertical movement:

  θ = arctan(vertical / horizontal)

Engineering

Engineers use inverse trigonometric functions to calculate:

  Angles of ramps
  Roof angles
  Road slopes
  Machine directions

Computer Graphics and Games

In programming, the function:

  atan2(y, x)

is commonly used to determine the direction of an object.

For example, if one game object is at:

  (x₁, y₁)

and another is at:

  (x₂, y₂)

then the direction angle can be calculated using:

  θ = atan2(y₂ - y₁, x₂ - x₁)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES TO AVOID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing Inverse with Reciprocal

Wrong:

  sin⁻¹ x = 1/sin x

Correct:

  sin⁻¹ x = arcsin x

while:

  1/sin x = csc x

Mistake 2: Ignoring the Principal Range

For:

  arcsin(1/2)

there are many angles whose sine is 1/2, but inverse sine returns the principal angle:

  π/6

Mistake 3: Forgetting the Chain Rule

For:

  y = arctan(3x)

do not forget the derivative of 3x:

  y' = 3 / (1 + 9x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Inverse Definitions:
    y = arcsin x  ⇔  sin y = x
    y = arccos x  ⇔  cos y = x
    y = arctan x  ⇔  tan y = x

  Derivatives:
    d/dx (arcsin x) = 1/√(1 - x²)
    d/dx (arccos x) = -1/√(1 - x²)
    d/dx (arctan x) = 1/(1 + x²)

  Integrals:
    ∫ 1/√(1 - x²) dx = arcsin x + C
    ∫ 1/(1 + x²) dx = arctan x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions help us find an angle when we know a trigonometric value.

For example:

  sin θ = x ⇒ θ = arcsin x

The three most important inverse trigonometric functions are:

  arcsin x
  arccos x
  arctan x

The most important derivative formulas are:

  d/dx (arcsin x) = 1/√(1 - x²)
  d/dx (arccos x) = -1/√(1 - x²)
  d/dx (arctan x) = 1/(1 + x²)

Key Idea

Normal trigonometric functions take an angle and produce a ratio:

  θ → sin θ

Inverse trigonometric functions work in the opposite direction:

  Ratio → Angle

That is why inverse trigonometric functions are essential when solving problems involving angles, triangles, derivatives, integrals, navigation, engineering, and computer graphics.

Easy way to remember: Inverse trig functions answer the question "What angle gives this ratio?" and are denoted with arc- prefix or ⁻¹ exponent.
  `,
  examples: [
    "arcsin(1/2) = π/6",
    "arccos(1/2) = π/3",
    "arctan(1) = π/4",
    "arcsin(0) = 0, arcsin(1) = π/2",
    "d/dx (arcsin x) = 1/√(1 - x²)",
    "d/dx (arccos x) = -1/√(1 - x²)",
    "d/dx (arctan x) = 1/(1 + x²)",
    "d/dx (arcsin(3x)) = 3/√(1 - 9x²)",
    "d/dx (arctan(5x)) = 5/(1 + 25x²)",
    "∫ 1/√(1 - x²) dx = arcsin x + C",
    "∫ 1/(1 + x²) dx = arctan x + C",
    "sin⁻¹ x ≠ 1/sin x → sin⁻¹ x = arcsin x, 1/sin x = csc x",
  ],
};

export default topic;