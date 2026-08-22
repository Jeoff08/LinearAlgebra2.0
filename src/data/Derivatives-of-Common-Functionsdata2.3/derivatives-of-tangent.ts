const topic = {
  id: "derivatives-of-tangent",
  title: "Derivatives of Tangent",
  summary:
    "Derivative of tan(x), chain rule with tangent, constant multiple rule, and higher-order derivatives.",
  details: `
The derivative of the tangent function is another fundamental trigonometric derivative in Calculus 1.

The most important formula to remember is: d/dx[tan(x)] = sec²(x)

In other words: The derivative of tangent is secant squared.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DERIVATIVE OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = tan(x), then: f'(x) = sec²(x)

Therefore: d/dx[tan(x)] = sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS THE DERIVATIVE sec²(x)?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the identity: tan(x) = sin(x)/cos(x)

We can use the Quotient Rule:

  d/dx[sin(x)/cos(x)] = [cos(x)·cos(x) - sin(x)·(-sin(x))]/cos²(x)

Simplify: = [cos²(x) + sin²(x)]/cos²(x)

Since: sin²(x) + cos²(x) = 1

we get: 1/cos²(x)

And because: sec(x) = 1/cos(x)

we have: 1/cos²(x) = sec²(x)

Therefore: d/dx[tan(x)] = sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[tan(x)]

Directly apply the rule: sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE WITH TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 5·tan(x)

Using the Constant Multiple Rule: f'(x) = 5·d/dx[tan(x)]

Therefore: f'(x) = 5·sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[-3·tan(x)]

Keep the constant: -3·d/dx[tan(x)] = -3·sec²(x)

Therefore: -3·sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TANGENT WITH A FUNCTION INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When tangent contains another function, use the Chain Rule.

The general formula is: d/dx[tan(g(x))] = sec²(g(x))·g'(x)

In simple terms: Derivative of tangent is secant squared, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[tan(2x)]

Step 1: Differentiate the outside
  tan(u) → sec²(u), so: sec²(2x)

Step 2: Differentiate the inside
  d/dx(2x) = 2

Step 3: Multiply
  sec²(2x)·(2)

Therefore: 2·sec²(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[tan(x²)]

The inside function is: g(x) = x²

Its derivative is: g'(x) = 2x

Apply the Chain Rule: f'(x) = sec²(x²)·(2x)

Therefore: 2x·sec²(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[tan(3x + 1)]

Inside: g(x) = 3x + 1

Derivative: g'(x) = 3

Therefore: f'(x) = sec²(3x + 1)·(3)

So: 3·sec²(3x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TANGENT WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4·tan(5x)

Keep the 4: f'(x) = 4·d/dx[tan(5x)]

Apply the Chain Rule: 4·[sec²(5x)·(5)]

Therefore: f'(x) = 20·sec²(5x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 6: MORE COMPLICATED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[tan(x³ + 2x)]

The inside is: g(x) = x³ + 2x

Differentiate: g'(x) = 3x² + 2

Apply the Chain Rule:

  f'(x) = sec²(x³ + 2x)·(3x² + 2)

Therefore: f'(x) = (3x² + 2)·sec²(x³ + 2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON TANGENT DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: tan(x)
Derivative: sec²(x)

Function: 2·tan(x)
Derivative: 2·sec²(x)

Function: 5·tan(x)
Derivative: 5·sec²(x)

Function: tan(2x)
Derivative: 2·sec²(2x)

Function: tan(3x)
Derivative: 3·sec²(3x)

Function: tan(x²)
Derivative: 2x·sec²(x²)

Function: tan(5x + 1)
Derivative: 5·sec²(5x + 1)

Function: tan(x³)
Derivative: 3x²·sec²(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT DOMAIN RESTRICTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tangent is not defined whenever: cos(x) = 0

This happens at: x = π/2 + kπ, where k ∈ ℤ

Therefore, the derivative: sec²(x) is also undefined at those points.

Example: tan(π/2) is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. HIGHER-ORDER DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with: f(x) = tan(x)

First derivative: f'(x) = sec²(x)

To find the second derivative, use the Chain Rule:

  f''(x) = 2·sec(x)·(sec(x)·tan(x))

Therefore: f''(x) = 2·sec²(x)·tan(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT TRIGONOMETRIC DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should memorize these three:

  • Sine: d/dx[sin(x)] = cos(x)
  • Cosine: d/dx[cos(x)] = -sin(x)
  • Tangent: d/dx[tan(x)] = sec²(x)

A useful pattern is:
  sin(x) → cos(x)
  cos(x) → -sin(x)
  tan(x) → sec²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK RULE TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For tan(g(x)), use: d/dx[tan(g(x))] = sec²(g(x))·g'(x)

Example: tan(x² + 1)

Inside derivative: 2x

Therefore: d/dx[tan(x² + 1)] = 2x·sec²(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Tangent, remember:

  • The derivative of tan(x) is sec²(x).
  • When there's a function inside tangent, use the Chain Rule.
  • Tangent and secant are undefined when cos(x) = 0.
  • The derivative of tangent is always positive (sec²(x) > 0).

The key idea is: Tangent becomes secant squared when differentiated. If there is a function inside tangent, multiply by the derivative of that inside function.

The most important formula is: d/dx[tan(g(x))] = sec²(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Tangent are fundamental trigonometric derivatives in Calculus.

Key concepts covered:

  ✓ Basic Derivative of Tangent
  ✓ Why the Derivative Is sec²(x)
  ✓ Constant Multiple with Tangent
  ✓ Tangent with a Function Inside (Chain Rule)
  ✓ Examples
  ✓ Tangent with Coefficient and Inner Function
  ✓ Common Tangent Derivatives
  ✓ Domain Restrictions
  ✓ Higher-Order Derivatives
  ✓ Important Trigonometric Derivatives
  `,
  examples: [
    "d/dx[tan(x)] = sec²(x)",
    "d/dx[5·tan(x)] = 5·sec²(x)",
    "d/dx[-3·tan(x)] = -3·sec²(x)",
    "d/dx[tan(2x)] = 2·sec²(2x)",
    "d/dx[tan(x²)] = 2x·sec²(x²)",
    "d/dx[tan(3x+1)] = 3·sec²(3x+1)",
    "d/dx[4·tan(5x)] = 20·sec²(5x)",
    "d/dx[tan(x³+2x)] = (3x²+2)·sec²(x³+2x)",
    "d/dx[tan(x²+1)] = 2x·sec²(x²+1)",
    "Derivative of tan: sec²(x)",
    "Derivative of sin: cos(x)",
    "Derivative of cos: -sin(x)",
    "tan(π/2) is undefined",
    "sec²(x) > 0 for all defined x",
    "d/dx[tan(g(x))] = sec²(g(x))·g'(x)",
  ],
};

export default topic;