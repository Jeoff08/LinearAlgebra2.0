const topic = {
  id: "derivatives-of-logarithmic-functions",
  title: "Derivatives of Logarithmic Functions",
  summary:
    "Derivative of ln(x), derivative of log_a(x), logarithmic chain rule, and logarithmic differentiation.",
  details: `
A logarithmic function is the inverse of an exponential function.

Common examples are: ln(x), log(x), log_a(x)

The most important logarithmic function in calculus is the natural logarithm: ln(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DERIVATIVE OF ln(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important formula to remember is: d/dx[ln(x)] = 1/x

Example: f(x) = ln(x) → f'(x) = 1/x

This is valid for: x > 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[ln(x)]

Directly apply the rule: 1/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE OF log_a(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a logarithm with base a: f(x) = log_a(x)

the derivative is: d/dx[log_a(x)] = 1/(x·ln(a))

where: a > 0, a ≠ 1

Example: f(x) = log₂(x) → f'(x) = 1/(x·ln(2))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES ln(x) HAVE DERIVATIVE 1/x?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that: y = ln(x) means: e^y = x

Differentiate both sides: e^y · dy/dx = 1

Since e^y = x, we get: x · dy/dx = 1

Therefore: dy/dx = 1/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. LOGARITHMIC CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful formulas is: d/dx[ln(g(x))] = g'(x)/g(x)

In simple terms: Derivative of the inside divided by the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[ln(x² + 1)]

The inside is: g(x) = x² + 1

Its derivative is: g'(x) = 2x

Apply the logarithmic Chain Rule:

  f'(x) = 2x/(x² + 1)

Therefore: f'(x) = 2x/(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[ln(3x + 5)]

Inside: g(x) = 3x + 5

Derivative: g'(x) = 3

Therefore: f'(x) = 3/(3x + 5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[ln(x³)]

Using the Chain Rule:

  g(x) = x³, g'(x) = 3x²

Therefore: f'(x) = 3x²/x³

Simplify: f'(x) = 3/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF ln|x|
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important extension is: d/dx[ln|x|] = 1/x

This works for: x ≠ 0

Example: f(x) = ln|x| → f'(x) = 1/x

This is useful because ln(x) itself requires x > 0, while ln|x| can be defined for both positive and negative x, except x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONSTANT MULTIPLE RULE WITH LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 5·ln(x)

Keep the constant: f'(x) = 5·(1/x)

Therefore: f'(x) = 5/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[7·ln(x² + 1)]

First use the Constant Multiple Rule:

  7·d/dx[ln(x² + 1)]

Then use the Chain Rule:

  7·(2x/(x² + 1))

Therefore: f'(x) = 14x/(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LOGARITHMS WITH PRODUCTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = ln(x² + 3x)

The entire expression inside the logarithm is treated as one function.

Let: g(x) = x² + 3x

Then: g'(x) = 2x + 3

Therefore: f'(x) = (2x + 3)/(x² + 3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LOGARITHMS WITH FRACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = ln((x + 1)/(x - 1))

You can use the Chain Rule directly, but logarithm properties can sometimes make the problem easier.

Using: ln(a/b) = ln(a) - ln(b)

we can write: f(x) = ln(x + 1) - ln(x - 1)

Differentiate: f'(x) = 1/(x + 1) - 1/(x - 1)

Combine: f'(x) = [(x - 1) - (x + 1)]/[(x + 1)(x - 1)]

Simplify: f'(x) = -2/(x² - 1)

Therefore: f'(x) = -2/(x² - 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. LOGARITHMIC DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logarithmic differentiation is a technique used when a function is difficult to differentiate directly.

It is especially useful for functions such as: y = xˣ

Take the natural logarithm of both sides:

  ln(y) = ln(xˣ)

Using: ln(aᵇ) = b·ln(a)

we get: ln(y) = x·ln(x)

Differentiate both sides:

  (1/y)·dy/dx = ln(x) + x·(1/x)

Therefore: (1/y)·dy/dx = ln(x) + 1

Multiply by y: dy/dx = y·(ln(x) + 1)

Since y = xˣ, we get: dy/dx = xˣ·(ln(x) + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON LOGARITHMIC DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: ln(x)
Derivative: 1/x

Function: ln(5x)
Derivative: 1/x

Function: ln(x² + 1)
Derivative: 2x/(x² + 1)

Function: ln(3x + 2)
Derivative: 3/(3x + 2)

Function: 5·ln(x)
Derivative: 5/x

Function: log₂(x)
Derivative: 1/(x·ln(2))

Function: log₁₀(x)
Derivative: 1/(x·ln(10))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Chain Rule
  For ln(x² + 1), don't write: 1/(x² + 1)
  You must multiply by the derivative of the inside: 2x
  Correct: 2x/(x² + 1)

Mistake 2: Confusing ln(x) and eˣ
  Remember: d/dx[ln(x)] = 1/x
  while: d/dx(eˣ) = eˣ
  They are inverse functions, but their derivatives are different.

Mistake 3: Forgetting ln(a)
  For log_a(x), the derivative is: 1/(x·ln(a))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Natural Logarithm: d/dx[ln(x)] = 1/x
  • Natural Logarithm with a Function: d/dx[ln(g(x))] = g'(x)/g(x)
  • Logarithm with Base a: d/dx[log_a(x)] = 1/(x·ln(a))
  • Logarithm of an Absolute Value: d/dx[ln|x|] = 1/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Logarithmic Functions, remember:

  • For ln(x), the derivative is 1/x.
  • For ln(g(x)), the derivative is g'(x)/g(x).
  • For log_a(x), the derivative is 1/(x·ln(a)).
  • The derivative of ln|x| is 1/x (for x ≠ 0).

The key idea is: For ln(something), take the derivative of the inside and divide by the original inside.

Example: ln(x² + 4) → 2x/(x² + 4)

The most important formula is: d/dx[ln(g(x))] = g'(x)/g(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Logarithmic Functions are essential in Calculus and have many applications.

Key concepts covered:

  ✓ Derivative of ln(x)
  ✓ Derivative of log_a(x)
  ✓ Why ln(x) Has Derivative 1/x
  ✓ Logarithmic Chain Rule
  ✓ Examples
  ✓ Derivative of ln|x|
  ✓ Constant Multiple Rule
  ✓ Logarithms with Products
  ✓ Logarithms with Fractions
  ✓ Logarithmic Differentiation
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx[ln(x)] = 1/x",
    "d/dx[ln(x²+1)] = 2x/(x²+1)",
    "d/dx[ln(3x+5)] = 3/(3x+5)",
    "d/dx[ln(x³)] = 3/x",
    "d/dx[ln|x|] = 1/x",
    "d/dx[5·ln(x)] = 5/x",
    "d/dx[7·ln(x²+1)] = 14x/(x²+1)",
    "d/dx[ln(x²+3x)] = (2x+3)/(x²+3x)",
    "d/dx[log₂(x)] = 1/(x·ln(2))",
    "d/dx[log₁₀(x)] = 1/(x·ln(10))",
    "Logarithmic differentiation: y = xˣ → dy/dx = xˣ(ln(x)+1)",
    "ln(a/b) = ln(a) - ln(b) (logarithm property)",
    "d/dx[ln(g(x))] = g'(x)/g(x)",
    "Don't forget Chain Rule for ln",
    "d/dx(eˣ) = eˣ, d/dx(ln(x)) = 1/x",
  ],
};

export default topic;