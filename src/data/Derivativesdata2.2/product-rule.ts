const topic = {
  id: "product-rule",
  title: "Product Rule",
  summary:
    "Definition of the product rule, formula, examples, and common mistakes.",
  details: `
The Product Rule is used when a function is made up of two functions multiplied together.

For example: f(x) = x²(x + 3)

You cannot simply differentiate each factor separately and multiply the derivatives. Instead, you must use the Product Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = u(x)·v(x), then: f'(x) = u'(x)·v(x) + u(x)·v'(x)

A common way to remember it is: First derivative × second + first × second derivative

  (f·g)' = f'·g + f·g'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW TO USE THE PRODUCT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = x²(x + 3)

Identify the two functions:
  u = x²
  v = x + 3

Find their derivatives:
  u' = 2x
  v' = 1

Now apply: f' = u'·v + u·v'

Substitute: f' = (2x)(x + 3) + (x²)(1)

Expand: f' = 2x² + 6x + x²

Combine like terms: f' = 3x² + 6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[x²·sin(x)]

Let:
  u = x²
  v = sin(x)

Then:
  u' = 2x
  v' = cos(x)

Apply the Product Rule:
  f' = u'·v + u·v'
  f' = (2x)(sin(x)) + (x²)(cos(x))

Therefore: f' = 2x·sin(x) + x²·cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[(3x + 1)(x²)]

Let:
  u = 3x + 1
  v = x²

Their derivatives are:
  u' = 3
  v' = 2x

Apply the Product Rule:
  f' = (3)(x²) + (3x + 1)(2x)

Expand: f' = 3x² + 6x² + 2x

Therefore: f' = 9x² + 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[x³·eˣ]

Let:
  u = x³
  v = eˣ

Then:
  u' = 3x²
  v' = eˣ

Apply the Product Rule:
  f' = (3x²)(eˣ) + (x³)(eˣ)

Factor out eˣ:
  f' = eˣ(3x² + x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMMON MISTAKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common mistake is doing this:

  (u·v)' = u'·v' ❌

This is incorrect.

The correct formula is:

  (u·v)' = u'·v + u·v' ✓

You need two terms, not just the product of the two derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHEN SHOULD YOU USE THE PRODUCT RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the Product Rule when you have something like: (function)·(function)

Examples:
  • x²(x + 1)
  • x·sin(x)
  • (x² + 1)·eˣ
  • cos(x)·ln(x)

Each contains two functions multiplied together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUICK TRICK TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: "Derivative of the first × the second + the first × derivative of the second."

Or simply: First'·Second + First·Second'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Product Rule, remember:

  • The Product Rule is used when two functions are multiplied.
  • The formula is: (u·v)' = u'·v + u·v'
  • Do NOT multiply the derivatives together.
  • It can be extended to products of more than two functions.

The key formula is:

  (u·v)' = u'·v + u·v'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Product Rule is an essential differentiation rule used when two functions are multiplied together.

Key concepts covered:

  ✓ Formula
  ✓ How to Use the Product Rule
  ✓ Examples with Polynomials
  ✓ Examples with Trigonometric Functions
  ✓ Examples with Exponential Functions
  ✓ Common Mistakes
  ✓ When to Use the Product Rule
  ✓ Quick Trick
  `,
  examples: [
    "d/dx[x²(x+3)] = 3x² + 6x",
    "d/dx[x²·sin(x)] = 2x·sin(x) + x²·cos(x)",
    "d/dx[(3x+1)(x²)] = 9x² + 2x",
    "d/dx[x³·eˣ] = eˣ(3x² + x³)",
    "Product Rule: (u·v)' = u'·v + u·v'",
    "Wrong: (u·v)' = u'·v' ❌",
    "Correct: (u·v)' = u'·v + u·v' ✓",
    "Use when two functions are multiplied together",
    "First'·Second + First·Second'",
  ],
};

export default topic;