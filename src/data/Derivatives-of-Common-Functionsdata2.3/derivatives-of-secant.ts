const topic = {
  id: "derivatives-of-secant",
  title: "Derivatives of Secant",
  summary:
    "Derivative of sec(x), chain rule with secant, product and quotient rule applications, and general formulas.",
  details: `
The secant function is written as: y = sec(x)

Its derivative is one of the important trigonometric differentiation rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DERIVATIVE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

d/dx[sec(x)] = sec(x)·tan(x)

In words: The derivative of secant is secant times tangent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sec(x)]

Using the rule: sec(x)·tan(x)

Therefore, y' = sec(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f(x) = 5·sec(x)

Keep the constant and differentiate sec(x):

  f'(x) = 5·sec(x)·tan(x)

Therefore: f'(x) = 5·sec(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SECANT WITH A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f(x) = sec(3x)

Because there is an expression inside the secant, use the Chain Rule.

Outer function: sec(u), derivative: sec(u)·tan(u)

Inner function: u = 3x, derivative: u' = 3

Therefore: f'(x) = sec(3x)·tan(3x)·(3)

So: f'(x) = 3·sec(3x)·tan(3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MORE COMPLICATED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f(x) = sec(x²)

Using the Chain Rule:

  f'(x) = sec(x²)·tan(x²)·d/dx(x²)

Since d/dx(x²) = 2x, we get:

  f'(x) = 2x·sec(x²)·tan(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SECANT IN A PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f(x) = x²·sec(x)

Since two functions are multiplied, use the Product Rule: (u·v)' = u'·v + u·v'

Let:
  u = x², v = sec(x)
  u' = 2x, v' = sec(x)·tan(x)

Therefore: f'(x) = 2x·sec(x) + x²·sec(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SECANT IN A QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = sec(x)/x

Use the Quotient Rule: (u/v)' = (u'·v - u·v')/v²

Let:
  u = sec(x), v = x
  u' = sec(x)·tan(x), v' = 1

Therefore: f'(x) = [x·sec(x)·tan(x) - sec(x)]/x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SECANT WITH A FUNCTION INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the general form: f(x) = sec(g(x))

the Chain Rule gives: f'(x) = sec(g(x))·tan(g(x))·g'(x)

Example: f(x) = sec(5x³ + 2)

Let: g(x) = 5x³ + 2, g'(x) = 15x²

Therefore: f'(x) = 15x²·sec(5x³ + 2)·tan(5x³ + 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY IS THE DERIVATIVE sec(x)·tan(x)?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that: sec(x) = 1/cos(x)

Rewrite it: sec(x) = (cos(x))⁻¹

Using the Chain Rule:

  d/dx[(cos(x))⁻¹] = -1·(cos(x))⁻²·(-sin(x))

This becomes: sin(x)/cos²(x)

Rewrite it using trigonometric identities:

  sin(x)/cos²(x) = (1/cos(x))·(sin(x)/cos(x))

Since: 1/cos(x) = sec(x) and sin(x)/cos(x) = tan(x)

we get: sec(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT SECANT DERIVATIVE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: sec(x)
Derivative: sec(x)·tan(x)

Function: a·sec(x)
Derivative: a·sec(x)·tan(x)

Function: sec(a·x)
Derivative: a·sec(a·x)·tan(a·x)

Function: sec(xⁿ)
Derivative: n·xⁿ⁻¹·sec(xⁿ)·tan(xⁿ)

Function: sec(g(x))
Derivative: sec(g(x))·tan(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the tan(x) factor
  Incorrect: d/dx[sec(x)] = sec(x)
  Correct: d/dx[sec(x)] = sec(x)·tan(x)

Mistake 2: Forgetting the Chain Rule
  For sec(g(x)), don't forget to multiply by g'(x).

Mistake 3: Confusing with derivative of csc(x)
  d/dx[sec(x)] = sec(x)·tan(x)
  d/dx[csc(x)] = -csc(x)·cot(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Secant, remember:

  • The derivative of sec(x) is sec(x)·tan(x).
  • When there's a function inside secant, use the Chain Rule.
  • Secant is undefined when cos(x) = 0.
  • The derivative involves both secant and tangent.

The key idea is: Secant → Secant × Tangent.

The most important formula is: d/dx[sec(x)] = sec(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Secant are essential trigonometric derivatives in Calculus.

Key concepts covered:

  ✓ Derivative Rule
  ✓ Basic Example
  ✓ Constant Multiple
  ✓ Secant with a Polynomial
  ✓ More Complicated Example
  ✓ Secant in a Product
  ✓ Secant in a Quotient
  ✓ Secant with a Function Inside
  ✓ Why the Derivative Is sec(x)·tan(x)
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx[sec(x)] = sec(x)·tan(x)",
    "d/dx[5·sec(x)] = 5·sec(x)·tan(x)",
    "d/dx[sec(3x)] = 3·sec(3x)·tan(3x)",
    "d/dx[sec(x²)] = 2x·sec(x²)·tan(x²)",
    "d/dx[x²·sec(x)] = 2x·sec(x) + x²·sec(x)·tan(x)",
    "d/dx[sec(x)/x] = [x·sec(x)·tan(x) - sec(x)]/x²",
    "d/dx[sec(5x³+2)] = 15x²·sec(5x³+2)·tan(5x³+2)",
    "d/dx[sec(g(x))] = sec(g(x))·tan(g(x))·g'(x)",
    "sec(x) = 1/cos(x)",
    "Derivative of sec: sec·tan",
    "Derivative of csc: -csc·cot",
    "Don't forget the Chain Rule",
    "Don't forget tan(x) factor",
  ],
};

export default topic;