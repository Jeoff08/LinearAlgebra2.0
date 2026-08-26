// filename: IntegralsYieldingInverseTrigonometricFunctions.ts

const topic = {
  id: "integrals-yielding-inverse-trigonometric-functions",
  title: "Integrals Yielding Inverse Trigonometric Functions",
  summary:
    "A comprehensive guide to integrals whose antiderivatives are inverse trigonometric functions. Covers the three main forms (arcsin, arctan, arcsec), pattern recognition, u-substitution, and completing the square.",
  details: `
Integrals yielding inverse trigonometric functions are integrals whose antiderivatives naturally involve functions such as:

  arcsin x, arctan x, arcsec x

This topic is important because sometimes an integral cannot be expressed using ordinary algebraic functions, exponentials, logarithms, or basic trigonometric functions. Instead, the answer is an inverse trigonometric function.

The main idea is to recognize patterns based on the derivatives of inverse trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "YIELDING" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word yielding means producing or resulting in.

So:

  Integrals yielding inverse trigonometric functions

means:

  Integrals whose answers produce inverse trigonometric functions.

For example:

  ∫ 1/(1 + x²) dx

The answer is:

  arctan x + C

Therefore, this integral yields an inverse tangent function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA: REVERSE DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration is the reverse of differentiation.

For example, we know:

  d/dx (arctan x) = 1 / (1 + x²)

Therefore, reversing the process:

  ∫ 1/(1 + x²) dx = arctan x + C

Similarly, since:

  d/dx (arcsin x) = 1 / √(1 - x²)

we have:

  ∫ 1/√(1 - x²) dx = arcsin x + C

So the key to this topic is recognizing the derivative patterns.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE THREE MOST IMPORTANT INTEGRAL FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important formulas are:

Inverse Sine Form

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C

for a > 0.

Inverse Tangent Form

  ∫ 1/(a² + x²) dx = (1/a) · arctan(x/a) + C

for a > 0.

Inverse Secant Form

  ∫ 1/(|x| √(x² - a²)) dx = (1/a) · arcsec(|x|/a) + C

This form has some domain/sign subtleties, so in many introductory problems you may instead see a restricted form such as x > a > 0:

  ∫ 1/(x √(x² - a²)) dx = (1/a) · arcsec(x/a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY THE CONSTANT a MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

  ∫ 1/√(9 - x²) dx

Notice that:

  9 = 3²

So this matches:

  1/√(a² - x²)

where:

  a = 3

Therefore:

  ∫ 1/√(9 - x²) dx = arcsin(x/3) + C

The number inside the square root determines the denominator inside the inverse trigonometric function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE INVERSE SINE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general form is:

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C

Let's verify why.

Differentiate:

  arcsin(x/a)

Using the Chain Rule:

  1 / (√(1 - (x/a)²)) · (1/a)

Simplify:

  1 / (√((a² - x²)/a²)) · (1/a)

  = 1 / (√(a² - x²)/a) · (1/a)

For a > 0:

  = a / √(a² - x²) · (1/a)

Therefore:

  1 / √(a² - x²)

So the formula is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: INVERSE SINE PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/√(25 - x²) dx

Step 1: Identify a²

  25 = 5²

So:

  a = 5

Step 2: Apply the formula

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C

Therefore:

  arcsin(x/5) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE INVERSE TANGENT INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general formula is:

  ∫ 1/(a² + x²) dx = (1/a) · arctan(x/a) + C

This formula comes from:

  d/dx (arctan x) = 1 / (1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: INVERSE TANGENT PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x² + 4) dx

Rewrite:

  x² + 4 = x² + 2²

Therefore:

  a = 2

Use:

  ∫ 1/(a² + x²) dx = (1/a) · arctan(x/a) + C

Thus:

  (1/2) · arctan(x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRALS WITH A CONSTANT NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ 3/(x² + 9) dx

Factor the constant:

  3 ∫ 1/(x² + 3²) dx

Using the formula:

  3[(1/3) · arctan(x/3)] + C

Therefore:

  arctan(x/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE INVERSE SECANT INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard derivative of inverse secant is:

  d/dx (arcsec x) = 1 / (|x| √(x² - 1))

Therefore:

  ∫ 1/(|x| √(x² - 1)) dx = arcsec x + C

More generally:

  ∫ 1/(|x| √(x² - a²)) dx = (1/a) · arcsec(|x|/a) + C

Depending on the domain convention, textbooks may present equivalent restricted-domain forms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: INVERSE SECANT PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x √(x² - 16)) dx

Assume:

  x > 4

Then:

  a = 4

Using:

  ∫ 1/(x √(x² - a²)) dx = (1/a) · arcsec(x/a) + C

we get:

  (1/4) · arcsec(x/4) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRALS WITH AN INSIDE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Often the integral contains an expression instead of simply x.

For example:

  ∫ 2x/(1 + x⁴) dx

This may look different, but notice:

  u = x²

Then:

  du = 2x dx

The integral becomes:

  ∫ 1/(1 + u²) du

This matches:

  ∫ 1/(1 + u²) du = arctan u + C

Therefore:

  arctan(x²) + C

This is an important combination of u-substitution and inverse trigonometric integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL INVERSE TANGENT PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you see:

  u' / (a² + u²)

Then:

  ∫ u'/(a² + u²) dx = (1/a) · arctan(u/a) + C

Example

Evaluate:

  ∫ 6x/(9 + x⁴) dx

Let:

  u = x²

Then:

  du = 2x dx

Notice:

  6x dx = 3 du

Therefore:

  3 ∫ 1/(9 + u²) du

Since:

  9 = 3²

we get:

  3[(1/3) · arctan(u/3)] + C

Therefore:

  arctan(x²/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GENERAL INVERSE SINE PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you see:

  u' / √(a² - u²)

Then:

  ∫ u'/√(a² - u²) dx = arcsin(u/a) + C

Example

Evaluate:

  ∫ 2x/√(9 - x⁴) dx

Let:

  u = x²

Then:

  du = 2x dx

The integral becomes:

  ∫ 1/√(9 - u²) du

Since:

  9 = 3²

we get:

  arcsin(u/3) + C

Substitute back:

  arcsin(x²/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RECOGNIZING THE PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important skills is pattern recognition.

Pattern A

If you see:

  1/√(a² - x²)

think:

  arcsin

Pattern B

If you see:

  1/(a² + x²)

think:

  arctan

Pattern C

If you see:

  1/(x √(x² - a²))

think:

  arcsec

with the appropriate domain/sign conditions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMPARING THE THREE MAIN FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integral Pattern                    Result
  ──────────────────────────────────────────────────────────────
  1/√(a² - x²)                        arcsin(x/a) + C
  1/(a² + x²)                         (1/a) · arctan(x/a) + C
  1/(x √(x² - a²))                    (1/a) · arcsec(x/a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE IMPORTANCE OF COMPLETING THE SQUARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the denominator does not immediately look like an inverse trigonometric pattern.

Example:

  ∫ 1/(x² + 6x + 13) dx

The denominator is not directly:

  x² + a²

So we complete the square:

  x² + 6x + 13

Take the first two terms:

  x² + 6x

Complete the square:

  x² + 6x + 9 = (x + 3)²

Since we added 9, rewrite:

  x² + 6x + 13 = (x + 3)² + 4

Now the integral becomes:

  ∫ 1/((x + 3)² + 2²) dx

This matches the inverse tangent pattern.

Therefore:

  (1/2) · arctan((x + 3)/2) + C

Completing the square is often used to transform an integral into an inverse tangent form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(4x² + 1) dx

Rewrite:

  4x² + 1 = (2x)² + 1

Let:

  u = 2x

Then:

  du = 2 dx

Therefore:

  dx = (1/2) du

The integral becomes:

  (1/2) ∫ 1/(u² + 1) du

Thus:

  (1/2) arctan(2x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HOW TO VERIFY YOUR ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always differentiate your answer.

Suppose:

  F(x) = (1/2) arctan(x/2)

Differentiate:

  F'(x) = (1/2) · [1/(1 + (x/2)²)] · (1/2)

Simplify:

  = 1/(4 + x²)

Therefore:

  F'(x) = 1/(x² + 4)

This confirms the integral:

  ∫ 1/(x² + 4) dx = (1/2) arctan(x/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Constant 1/a

Wrong:

  ∫ 1/(x² + 9) dx = arctan(x/3) + C

Correct:

  (1/3) arctan(x/3) + C

Mistake 2: Using arcsin for a² + x²

Remember:

  a² - x² → arcsin

but:

  a² + x² → arctan

The sign is extremely important.

Mistake 3: Forgetting the Chain Rule

For:

  ∫ 2x/(1 + x⁴) dx

Do not immediately use:

  arctan x

because the denominator contains:

  x⁴ = (x²)²

Instead:

  u = x²

Then the integral becomes:

  1/(1 + u²)

The correct answer is:

  arctan(x²) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an integral, ask:

Does it look like:

  u' / √(a² - u²)

Then use:

  arcsin(u/a) + C

Does it look like:

  u' / (a² + u²)

Then use:

  (1/a) · arctan(u/a) + C

Does it look like:

  u' / (|u| √(u² - a²))

Then consider the inverse secant form, carefully checking domain/sign conditions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These inverse trigonometric integrals appear in:

Physics

They can arise in:

  Motion problems
  Wave equations
  Force calculations

Engineering

They appear in:

  Signal analysis
  Electrical systems
  Mechanical models

Probability and Statistics

The inverse tangent function can appear in certain probability distributions and geometric probability problems.

Geometry

Inverse trigonometric functions help describe angles produced by ratios and geometric relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C
  ∫ 1/(a² + x²) dx = (1/a) · arctan(x/a) + C
  ∫ 1/(x √(x² - a²)) dx = (1/a) · arcsec(x/a) + C (x > a > 0)

Chain Rule Versions:

  ∫ u'/√(a² - u²) dx = arcsin(u/a) + C
  ∫ u'/(a² + u²) dx = (1/a) · arctan(u/a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integrals yielding inverse trigonometric functions are solved by recognizing patterns from inverse trigonometric derivatives.

The most important formulas are:

  ∫ 1/√(a² - x²) dx = arcsin(x/a) + C
  ∫ 1/(a² + x²) dx = (1/a) · arctan(x/a) + C
  ∫ 1/(x √(x² - a²)) dx = (1/a) · arcsec(x/a) + C (x > a > 0)

The Most Important Recognition Rule

  a² - x² → arcsin
  a² + x² → arctan
  x² - a² → arcsec

Key Idea

When you encounter a difficult-looking rational or radical integral, do not immediately try complicated techniques. First check whether it matches the derivative pattern of an inverse trigonometric function.

Often, recognizing the pattern is the fastest solution.

Easy way to remember: If you see a² - x² under a square root, think arcsin. If you see a² + x² in a denominator, think arctan. If you see x² - a² under a square root with an x in the denominator, think arcsec.
  `,
  examples: [
    "∫ 1/√(25 - x²) dx = arcsin(x/5) + C",
    "∫ 1/(x² + 4) dx = (1/2) arctan(x/2) + C",
    "∫ 1/(x √(x² - 16)) dx = (1/4) arcsec(x/4) + C (x > 4)",
    "∫ 2x/(1 + x⁴) dx = arctan(x²) + C",
    "∫ 2x/√(9 - x⁴) dx = arcsin(x²/3) + C",
    "∫ 1/(x² + 6x + 13) dx = (1/2) arctan((x + 3)/2) + C",
    "∫ 1/(4x² + 1) dx = (1/2) arctan(2x) + C",
    "∫ 6x/(9 + x⁴) dx = arctan(x²/3) + C",
  ],
};

export default topic;