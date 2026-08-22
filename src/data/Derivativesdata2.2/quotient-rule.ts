const topic = {
  id: "quotient-rule",
  title: "Quotient Rule",
  summary:
    "Definition of the quotient rule, formula, examples, and common mistakes.",
  details: `
The Quotient Rule is used when a function is written as one function divided by another function.

For example: f(x) = (x² + 1)/(x - 3)

When the numerator and denominator are both functions of x, the Quotient Rule is usually the easiest way to differentiate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = u(x)/v(x), then: f'(x) = [u'(x)·v(x) - u(x)·v'(x)]/[v(x)]²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EASY WAY TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Low d-high minus high d-low, over low squared."

Where:
  • High = numerator
  • Low = denominator
  • d-high = derivative of numerator
  • d-low = derivative of denominator

So: [low(d-high) - high(d-low)]/low²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[x²/(x + 1)]

Step 1: Identify the numerator and denominator
  Numerator: u = x²
  Denominator: v = x + 1

Step 2: Find their derivatives
  u' = 2x
  v' = 1

Step 3: Apply the Quotient Rule
  f' = [u'·v - u·v']/v²

Substitute: f' = [(2x)(x + 1) - (x²)(1)]/(x + 1)²

Step 4: Simplify
  Expand the numerator: 2x² + 2x - x² = x² + 2x

Therefore: f'(x) = (x² + 2x)/(x + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[x³/(x² + 1)]

Let:
  u = x³
  v = x² + 1

Derivatives:
  u' = 3x²
  v' = 2x

Apply the Quotient Rule:
  f' = [(3x²)(x² + 1) - (x³)(2x)]/(x² + 1)²

Expand: f' = [3x⁴ + 3x² - 2x⁴]/(x² + 1)²

Simplify: f'(x) = (x⁴ + 3x²)/(x² + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(x)/x]

Let:
  u = sin(x)
  v = x

Then:
  u' = cos(x)
  v' = 1

Apply the Quotient Rule:
  f' = [(cos(x))(x) - (sin(x))(1)]/x²

Therefore: f'(x) = [x·cos(x) - sin(x)]/x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. VERY IMPORTANT: THE MINUS SIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Quotient Rule contains a subtraction: u'·v - u·v'

Don't accidentally write: u'·v + u·v'

That would be incorrect.

Compare:
  • Product Rule: (u·v)' = u'·v + u·v'
  • Quotient Rule: (u/v)' = (u'·v - u·v')/v²

Notice the difference: Product → PLUS, Quotient → MINUS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHEN SHOULD YOU USE THE QUOTIENT RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use it when you have: (function)/(function)

Examples:
  • x²/(x + 1)
  • sin(x)/x
  • eˣ/(x² + 1)
  • (x² - 4)/(x³ + 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUICK TRICK TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think: "Low d-high minus high d-low, all over low squared."

For u/v, you get: (u'·v - u·v')/v²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THREE THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Differentiate the numerator.
2. Differentiate the denominator.
3. Put them into: [low(d-high) - high(d-low)]/low²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Quotient Rule, remember:

  • The Quotient Rule is used when one function is divided by another.
  • The formula is: (u/v)' = (u'·v - u·v')/v²
  • Remember the minus sign in the numerator.
  • The denominator is squared.

The key formula is:

  (u/v)' = (u'·v - u·v')/v²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Quotient Rule is an essential differentiation rule used when one function is divided by another.

Key concepts covered:

  ✓ Formula
  ✓ Easy Way to Remember
  ✓ Examples with Polynomials
  ✓ Examples with Trigonometric Functions
  ✓ The Minus Sign
  ✓ When to Use the Quotient Rule
  ✓ Quick Trick
  ✓ Three Things to Remember
  `,
  examples: [
    "d/dx[x²/(x+1)] = (x² + 2x)/(x+1)²",
    "d/dx[x³/(x²+1)] = (x⁴ + 3x²)/(x²+1)²",
    "d/dx[sin(x)/x] = [x·cos(x) - sin(x)]/x²",
    "Quotient Rule: (u/v)' = (u'·v - u·v')/v²",
    "Low d-high minus high d-low, over low squared",
    "Product Rule: (u·v)' = u'·v + u·v'",
    "Quotient Rule: (u/v)' = (u'·v - u·v')/v²",
    "Use when one function is divided by another",
    "Differentiate numerator, differentiate denominator, apply formula",
  ],
};

export default topic;