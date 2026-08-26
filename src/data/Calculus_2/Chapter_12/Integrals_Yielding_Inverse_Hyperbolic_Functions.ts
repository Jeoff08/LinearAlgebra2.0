// filename: IntegralsYieldingInverseHyperbolicFunctions.ts

const topic = {
  id: "integrals-yielding-inverse-hyperbolic-functions",
  title: "Integrals Yielding Inverse Hyperbolic Functions",
  summary:
    "A comprehensive guide to integrals whose antiderivatives are inverse hyperbolic functions. Covers the three main forms (sinh⁻¹, cosh⁻¹, tanh⁻¹), square root integrals, and pattern recognition.",
  details: `
Some integrals cannot be expressed simply using ordinary algebraic functions, exponentials, logarithms, or basic trigonometric functions. Instead, their antiderivatives naturally involve inverse hyperbolic functions.

This topic is closely related to inverse trigonometric integrals. The main difference is that expressions involving:

  x² + a²

or:

  x² - a²

often lead to inverse hyperbolic functions.

The most common inverse hyperbolic functions that appear as antiderivatives are:

  sinh⁻¹ x, cosh⁻¹ x, tanh⁻¹ x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA

An integral yields an inverse hyperbolic function when the integrand matches the derivative of an inverse hyperbolic function.

For example, we know:

  d/dx (sinh⁻¹ x) = 1/√(x² + 1)

Therefore:

  ∫ 1/√(x² + 1) dx = sinh⁻¹ x + C

The process is similar to recognizing:

  d/dx (ln x) = 1/x

When you see a particular derivative pattern, you can immediately recognize its antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INTEGRAL YIELDING INVERSE HYPERBOLIC SINE

The fundamental formula is:

  ∫ dx/√(x² + a²) = sinh⁻¹(x/a) + C

for a > 0.

An equivalent logarithmic form is:

  ∫ dx/√(x² + a²) = ln|x + √(x² + a²)| + C

Strictly speaking, when using the scaled inverse-hyperbolic form, the exact relationship is:

  ∫ dx/√(x² + a²) = sinh⁻¹(x/a) + C

because any difference involving ln a is absorbed into C.

Why Does This Work?

Recall:

  d/dx (sinh⁻¹ x) = 1/√(x² + 1)

Now replace x with:

  x/a

Using the chain rule:

  d/dx [sinh⁻¹(x/a)]

becomes:

  (1/a) / √((x/a)² + 1)

Simplifying:

  1/√(x² + a²)

Therefore, the formula is correct.

Example 1

Evaluate:

  ∫ dx/√(x² + 9)

Recognize:

  9 = 3²

So:

  a = 3

Using:

  ∫ dx/√(x² + a²) = sinh⁻¹(x/a) + C

we get:

  sinh⁻¹(x/3) + C

The logarithmic equivalent is:

  ln|x + √(x² + 9)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTEGRAL YIELDING INVERSE HYPERBOLIC COSINE

Another important pattern is:

  ∫ dx/√(x² - a²)

For appropriate domains, this can yield an inverse hyperbolic cosine.

A standard form is:

  ∫ dx/√(x² - a²) = cosh⁻¹(|x|/a) + C

where:

  |x| > a, a > 0

For the simpler domain:

  x > a

we can write:

  ∫ dx/√(x² - a²) = cosh⁻¹(x/a) + C

Why the Domain Matters

The expression:

  √(x² - a²)

must be real.

Therefore:

  x² - a² ≥ 0

which means:

  |x| ≥ a

Also, cosh⁻¹ x has a real domain:

  x ≥ 1

This is why:

  x/a ≥ 1

when using:

  cosh⁻¹(x/a)

Thus, the simplest formula assumes:

  x > a

Example 2

Evaluate:

  ∫ dx/√(x² - 16)

Since:

  16 = 4²

we have:

  a = 4

Therefore:

  ∫ dx/√(x² - 16) = cosh⁻¹(x/4) + C

assuming:

  x > 4

An equivalent logarithmic form is:

  ln|x + √(x² - 16)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTEGRAL YIELDING INVERSE HYPERBOLIC TANGENT

The derivative of inverse hyperbolic tangent is:

  d/dx (tanh⁻¹ x) = 1/(1 - x²)

Therefore:

  ∫ dx/(1 - x²) = tanh⁻¹ x + C

for:

  |x| < 1

This is one of the most important inverse hyperbolic integral formulas.

General Form

Consider:

  ∫ dx/(a² - x²)

The formula is:

  ∫ dx/(a² - x²) = (1/a) tanh⁻¹(x/a) + C

for:

  |x| < a

Why Does This Work?

Let:

  u = x/a

Then:

  du = (1/a) dx

The derivative of:

  tanh⁻¹ u

is:

  1/(1 - u²)

Therefore:

  d/dx [(1/a) tanh⁻¹(x/a)] = 1/(a² - x²)

Example 3

Evaluate:

  ∫ dx/(25 - x²)

Recognize:

  25 = 5²

Therefore:

  a = 5

Use:

  ∫ dx/(a² - x²) = (1/a) tanh⁻¹(x/a) + C

Thus:

  (1/5) tanh⁻¹(x/5) + C

for:

  |x| < 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INTEGRAL YIELDING INVERSE HYPERBOLIC COTANGENT

The derivative of inverse hyperbolic cotangent is:

  d/dx (coth⁻¹ x) = 1/(1 - x²)

However, the domain is different from tanh⁻¹ x.

For:

  |x| > 1

we can use inverse hyperbolic cotangent.

Consider:

  ∫ dx/(x² - a²)

A useful form is:

  ∫ dx/(x² - a²) = -(1/a) tanh⁻¹(x/a) + C

when interpreted in appropriate complex/domain contexts.

For real-variable calculus, it is often better to write:

  ∫ dx/(x² - a²) = (1/a) coth⁻¹(x/a) + C

for:

  |x| > a

Be careful with signs. A more directly useful standard result is:

  ∫ dx/(x² - a²) = (1/(2a)) ln|(x - a)/(x + a)| + C

This is often the safest form to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INTEGRAL WITH A LINEAR EXPRESSION INSIDE THE SQUARE ROOT

Many problems do not appear exactly in standard form.

For example:

  ∫ dx/√(4x² + 9)

We first factor:

  4x² + 9 = (2x)² + 3²

Let:

  u = 2x

Then:

  du = 2 dx
  dx = (1/2) du

The integral becomes:

  (1/2) ∫ du/√(u² + 9)

Using the inverse hyperbolic sine formula:

  = (1/2) sinh⁻¹(u/3) + C

Substitute back:

  (1/2) sinh⁻¹(2x/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRAL OF THE FORM √(x² + a²)

Not every square-root expression directly produces an inverse hyperbolic function.

Consider:

  ∫ √(x² + a²) dx

The answer contains both an algebraic term and an inverse hyperbolic term:

  ∫ √(x² + a²) dx = (x/2)√(x² + a²) + (a²/2) sinh⁻¹(x/a) + C

This is an important formula.

Example

Evaluate:

  ∫ √(x² + 4) dx

Here:

  a = 2

Using the formula:

  = (x/2)√(x² + 4) + (4/2) sinh⁻¹(x/2) + C

Therefore:

  (x/2)√(x² + 4) + 2 sinh⁻¹(x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRAL OF THE FORM √(x² - a²)

Another important form is:

  ∫ √(x² - a²) dx

The result contains an algebraic term and a logarithmic or inverse hyperbolic expression:

  ∫ √(x² - a²) dx = (x/2)√(x² - a²) - (a²/2) cosh⁻¹(x/a) + C

assuming:

  x > a > 0

Example

Evaluate:

  ∫ √(x² - 9) dx

Here:

  a = 3

Using the formula:

  = (x/2)√(x² - 9) - (9/2) cosh⁻¹(x/3) + C

Therefore:

  (x/2)√(x² - 9) - (9/2) cosh⁻¹(x/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. USING HYPERBOLIC SUBSTITUTION

Sometimes inverse hyperbolic functions appear naturally when using hyperbolic substitution.

For √(x² + a²)

Use:

  x = a sinh u

Why?

Because:

  cosh² u - sinh² u = 1

Therefore:

  1 + sinh² u = cosh² u

If:

  x = a sinh u

then:

  x² + a² = a² sinh² u + a²
  = a²(1 + sinh² u)
  = a² cosh² u

Therefore:

  √(x² + a²) = a cosh u

This makes the square root much easier to simplify.

Example

Evaluate:

  ∫ dx/√(x² + 4)

Let:

  x = 2 sinh u

Then:

  dx = 2 cosh u du

Also:

  √(x² + 4) = √(4 sinh² u + 4)
  = 2 cosh u

Therefore:

  ∫ (2 cosh u du)/(2 cosh u)
  = ∫ du
  = u + C

Since:

  x = 2 sinh u

we have:

  u = sinh⁻¹(x/2)

Therefore:

  ∫ dx/√(x² + 4) = sinh⁻¹(x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPARISON WITH INVERSE TRIGONOMETRIC INTEGRALS

Inverse trigonometric and inverse hyperbolic integrals can look very similar.

Inverse Trigonometric:

  ∫ dx/√(a² - x²) = sin⁻¹(x/a) + C

Inverse Hyperbolic:

  ∫ dx/√(x² + a²) = sinh⁻¹(x/a) + C

The sign inside the square root helps you recognize which formula to use.

  Expression              Usually Yields
  ──────────────────────────────────────
  √(a² - x²)              sin⁻¹
  √(x² + a²)              sinh⁻¹
  √(x² - a²)              cosh⁻¹ or logarithm

This comparison is very useful during integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT RECOGNITION PATTERNS

When solving integrals, look for these patterns:

Pattern 1

  ∫ dx/√(x² + a²)

Use:

  sinh⁻¹(x/a) + C

Pattern 2

  ∫ dx/√(x² - a²)

Use:

  cosh⁻¹(x/a) + C

for x > a.

Pattern 3

  ∫ dx/(a² - x²)

Use:

  (1/a) tanh⁻¹(x/a) + C

for:

  |x| < a

Pattern 4

  ∫ √(x² + a²) dx

Use:

  (x/2)√(x² + a²) + (a²/2) sinh⁻¹(x/a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A COMPLETE EXAMPLE

Evaluate:

  ∫ 3 dx/√(9x² + 4)

Step 1: Simplify the Square Root

  9x² + 4 = (3x)² + 2²

Let:

  u = 3x

Then:

  du = 3 dx

Therefore:

  3 dx = du

The integral becomes:

  ∫ du/√(u² + 4)

Step 2: Recognize the Formula

This matches:

  ∫ du/√(u² + a²)

where:

  a = 2

Therefore:

  = sinh⁻¹(u/2) + C

Step 3: Substitute Back

Since:

  u = 3x

the final answer is:

  sinh⁻¹(3x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES

1. Confusing Inverse Hyperbolic and Reciprocal Functions

Remember:

  sinh⁻¹ x

means inverse hyperbolic sine.

It does not mean:

  1/sinh x

The reciprocal is:

  csch x

2. Using the Wrong Sign Pattern

Compare:

  √(a² - x²)

with:

  √(x² + a²)

The first usually gives an inverse trigonometric function:

  sin⁻¹

The second often gives an inverse hyperbolic function:

  sinh⁻¹

3. Forgetting the Constant

For indefinite integrals:

  +C

must always be included.

4. Ignoring Domain Restrictions

For example:

  cosh⁻¹(x/a)

requires:

  x/a ≥ 1

for real-valued results.

Therefore, usually:

  x ≥ a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK SUMMARY TABLE

  Integral Pattern                          Antiderivative
  ──────────────────────────────────────────────────────────────────────────
  ∫ dx/√(x² + a²)                           sinh⁻¹(x/a) + C
  ∫ dx/√(x² - a²)                           cosh⁻¹(x/a) + C, x > a
  ∫ dx/(a² - x²)                            (1/a) tanh⁻¹(x/a) + C
  ∫ √(x² + a²) dx                           (x/2)√(x² + a²) + (a²/2) sinh⁻¹(x/a) + C
  ∫ √(x² - a²) dx                           (x/2)√(x² - a²) - (a²/2) cosh⁻¹(x/a) + C, x > a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER

  ∫ dx/√(x² + a²) = sinh⁻¹(x/a) + C
  ∫ dx/√(x² - a²) = cosh⁻¹(x/a) + C, x > a
  ∫ dx/(a² - x²) = (1/a) tanh⁻¹(x/a) + C, |x| < a
  ∫ √(x² + a²) dx = (x/2)√(x² + a²) + (a²/2) sinh⁻¹(x/a) + C
  ∫ √(x² - a²) dx = (x/2)√(x² - a²) - (a²/2) cosh⁻¹(x/a) + C, x > a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY

The key to solving integrals yielding inverse hyperbolic functions is recognizing the structure of the expression.

When you see:

  x² + a²

think:

  sinh⁻¹

When you see:

  x² - a²

think:

  cosh⁻¹

When you see:

  a² - x²

in a denominator, think:

  tanh⁻¹

The most important skill is pattern recognition. Once you recognize the form of the integrand, you can choose the correct inverse hyperbolic formula and solve the integral much more quickly.

Easy way to remember: x² + a² under a square root → sinh⁻¹, x² - a² under a square root → cosh⁻¹, a² - x² in a denominator → tanh⁻¹.
  `,
  examples: [
    "∫ dx/√(x² + 9) = sinh⁻¹(x/3) + C",
    "∫ dx/√(x² - 16) = cosh⁻¹(x/4) + C, x > 4",
    "∫ dx/(25 - x²) = (1/5) tanh⁻¹(x/5) + C, |x| < 5",
    "∫ dx/√(4x² + 9) = (1/2) sinh⁻¹(2x/3) + C",
    "∫ √(x² + 4) dx = (x/2)√(x² + 4) + 2 sinh⁻¹(x/2) + C",
    "∫ √(x² - 9) dx = (x/2)√(x² - 9) - (9/2) cosh⁻¹(x/3) + C, x > 3",
    "∫ 3 dx/√(9x² + 4) = sinh⁻¹(3x/2) + C",
  ],
};

export default topic;