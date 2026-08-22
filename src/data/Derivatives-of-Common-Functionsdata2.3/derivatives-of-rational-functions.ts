const topic = {
  id: "derivatives-of-rational-functions",
  title: "Derivatives of Rational Functions",
  summary:
    "Differentiating rational functions using the quotient rule, simplifying first, and rewriting with negative exponents.",
  details: `
A rational function is a function that can be written as the ratio of two polynomial functions:

  f(x) = P(x)/Q(x)

where Q(x) ≠ 0.

Examples include:
  • f(x) = (x + 1)/(x - 2)
  • f(x) = (x² - 4)/(x² + 3)
  • f(x) = (x + 5)/(2x³ - x)

To find derivatives of rational functions, the Quotient Rule is one of the most important methods.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. QUOTIENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = u(x)/v(x), then: f'(x) = [u'·v - u·v']/v²

A common way to remember this is: "Low d-high minus high d-low, over low squared."

Where:
  • High = numerator
  • Low = denominator
  • d-high = derivative of numerator
  • d-low = derivative of denominator

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE 1: BASIC RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f'(x) for f(x) = (x² + 1)/(x + 2)

Step 1: Identify u and v
  Numerator: u = x² + 1
  Denominator: v = x + 2

Step 2: Find their derivatives
  u' = 2x
  v' = 1

Step 3: Apply the Quotient Rule
  f'(x) = [(2x)(x + 2) - (x² + 1)(1)]/(x + 2)²

Expand: f'(x) = [2x² + 4x - x² - 1]/(x + 2)²

Simplify: f'(x) = (x² + 4x - 1)/(x + 2)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[x³/(x² + 1)]

Let:
  u = x³
  v = x² + 1

Then:
  u' = 3x²
  v' = 2x

Apply the Quotient Rule:
  f'(x) = [(3x²)(x² + 1) - (x³)(2x)]/(x² + 1)²

Expand: = [3x⁴ + 3x² - 2x⁴]/(x² + 1)²

Simplify: f'(x) = (x⁴ + 3x²)/(x² + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 3: LINEAR OVER LINEAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (2x + 1)/(x - 3)

Let:
  u = 2x + 1
  v = x - 3

Derivatives:
  u' = 2
  v' = 1

Apply the Quotient Rule:
  f'(x) = [(2)(x - 3) - (2x + 1)(1)]/(x - 3)²

Simplify the numerator:
  2x - 6 - 2x - 1 = -7

Therefore: f'(x) = -7/(x - 3)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ANOTHER METHOD: REWRITE USING NEGATIVE EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you can rewrite a rational function before differentiating.

Example: f(x) = 1/x³

Rewrite: f(x) = x⁻³

Now use the Power Rule: f'(x) = -3x⁻⁴

Therefore: f'(x) = -3/x⁴

This can be easier than using the Quotient Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 4: SIMPLIFY FIRST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴/x²

Simplify: f(x) = x²

Now differentiate: f'(x) = 2x

Therefore: f'(x) = 2x

This is much easier than applying the Quotient Rule unnecessarily.

💡 Tip: Always check whether the rational function can be simplified before using the Quotient Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One important feature of rational functions is that the denominator cannot equal zero.

For: f(x) = (x + 1)/(x - 2)

the denominator is: x - 2

Set it equal to zero: x - 2 = 0 → x = 2

Therefore, the domain excludes: x = 2

The derivative also cannot be evaluated at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A POLYNOMIAL NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (3x⁴ - 2x² + 1)/(x² + 4)

Let:
  u = 3x⁴ - 2x² + 1
  v = x² + 4

Differentiate:
  u' = 12x³ - 4x
  v' = 2x

Apply the Quotient Rule:
  f'(x) = [(12x³ - 4x)(x² + 4) - (3x⁴ - 2x² + 1)(2x)]/(x² + 4)²

You can leave the answer in this form unless expansion and simplification are required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the denominator is squared
  Incorrect: (u'v - uv')/v
  Correct: (u'v - uv')/v²

Mistake 2: Using the wrong sign
  The numerator contains: u'v - uv' (minus), not u'v + uv' (plus).

  Remember:
    • Product Rule → plus: (uv)' = u'v + uv'
    • Quotient Rule → minus: (u/v)' = (u'v - uv')/v²

Mistake 3: Differentiating numerator and denominator separately
  This is not generally true: (u/v)' ≠ u'/v'

  Example: d/dx(x²/(x+1)) is not 2x/1.

  You need the Quotient Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. QUICK WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see: P(x)/Q(x)

follow these steps:
  1. Check if it can be simplified.
  2. Identify: u = P(x), v = Q(x)
  3. Differentiate: u', v'
  4. Apply: f'(x) = (u'v - uv')/v²
  5. Simplify if necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Rational Functions, remember:

  • A rational function is a quotient of polynomials.
  • The Quotient Rule is usually the easiest way to differentiate rational functions.
  • Always check for simplification first.
  • The denominator cannot be zero.
  • Remember the minus sign in the Quotient Rule.

The most important formula is:

  d/dx[u(x)/v(x)] = [u'(x)·v(x) - u(x)·v'(x)]/[v(x)]²

Shortcut to remember: Low d-high − high d-low, over low².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Rational Functions are an important application of the Quotient Rule in Calculus.

Key concepts covered:

  ✓ Quotient Rule
  ✓ Basic Rational Function Examples
  ✓ Linear over Linear
  ✓ Rewriting with Negative Exponents
  ✓ Simplifying First
  ✓ Domain Restrictions
  ✓ Polynomial Numerator Examples
  ✓ Common Mistakes
  ✓ Quick Workflow
  `,
  examples: [
    "f(x) = (x² + 1)/(x + 2) → f'(x) = (x² + 4x - 1)/(x + 2)²",
    "f(x) = x³/(x² + 1) → f'(x) = (x⁴ + 3x²)/(x² + 1)²",
    "f(x) = (2x + 1)/(x - 3) → f'(x) = -7/(x - 3)²",
    "f(x) = 1/x³ → rewrite as x⁻³ → f'(x) = -3/x⁴",
    "f(x) = x⁴/x² → simplify to x² → f'(x) = 2x",
    "f(x) = (3x⁴ - 2x² + 1)/(x² + 4) → use Quotient Rule",
    "Quotient Rule: (u/v)' = (u'v - uv')/v²",
    "Low d-high minus high d-low, over low squared",
    "Product Rule: (uv)' = u'v + uv' (plus)",
    "Quotient Rule: (u/v)' = (u'v - uv')/v² (minus)",
    "Denominator cannot be zero",
    "Always check for simplification first",
  ],
};

export default topic;