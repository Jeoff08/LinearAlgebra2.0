const topic = {
  id: "derivatives-of-cotangent",
  title: "Derivatives of Cotangent",
  summary:
    "Derivative of cot(x), chain rule with cotangent, constant multiple rule, and higher-order derivatives.",
  details: `
The derivative of the cotangent function is another important trigonometric derivative in Calculus 1.

The most important formula to remember is: d/dx[cot(x)] = -csc²(x)

In other words: The derivative of cotangent is negative cosecant squared.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DERIVATIVE OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = cot(x), then: f'(x) = -csc²(x)

Therefore: d/dx[cot(x)] = -csc²(x)

The negative sign is essential.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS THE DERIVATIVE -csc²(x)?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall that: cot(x) = cos(x)/sin(x)

Using the Quotient Rule:

  d/dx[cos(x)/sin(x)] = [-sin(x)·sin(x) - cos(x)·cos(x)]/sin²(x)

Simplify: = [-sin²(x) - cos²(x)]/sin²(x)

Using: sin²(x) + cos²(x) = 1

we get: -1/sin²(x)

Since: csc(x) = 1/sin(x)

then: 1/sin²(x) = csc²(x)

Therefore: d/dx[cot(x)] = -csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cot(x)]

Directly apply the rule: -csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE WITH COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 4·cot(x)

Keep the constant: f'(x) = 4·d/dx[cot(x)]

Since d/dx[cot(x)] = -csc²(x), we get: f'(x) = -4·csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[-3·cot(x)]

Keep -3: -3·(-csc²(x))

The two negative signs cancel: 3·csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COTANGENT WITH A FUNCTION INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When cotangent contains another function, use the Chain Rule.

The general formula is: d/dx[cot(g(x))] = -csc²(g(x))·g'(x)

In simple terms: Differentiate cotangent into negative cosecant squared, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cot(2x)]

Step 1: Differentiate the outside
  cot(u) → -csc²(u), so: -csc²(2x)

Step 2: Differentiate the inside
  d/dx(2x) = 2

Step 3: Multiply
  -csc²(2x)·(2)

Therefore: -2·csc²(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cot(x²)]

The inside function is: g(x) = x²

Its derivative is: g'(x) = 2x

Apply the Chain Rule: f'(x) = -csc²(x²)·(2x)

Therefore: -2x·csc²(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cot(3x + 1)]

Inside: g(x) = 3x + 1

Derivative: g'(x) = 3

Therefore: f'(x) = -csc²(3x + 1)·(3)

So: -3·csc²(3x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COTANGENT WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 5·cot(4x)

Keep the 5: f'(x) = 5·d/dx[cot(4x)]

Apply the Chain Rule: 5·[-csc²(4x)·(4)]

Therefore: f'(x) = -20·csc²(4x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 6: MORE COMPLICATED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cot(x³ + 2x)]

The inside function is: g(x) = x³ + 2x

Differentiate: g'(x) = 3x² + 2

Apply the Chain Rule:

  f'(x) = -csc²(x³ + 2x)·(3x² + 2)

Therefore: f'(x) = -(3x² + 2)·csc²(x³ + 2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON COTANGENT DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: cot(x)
Derivative: -csc²(x)

Function: 2·cot(x)
Derivative: -2·csc²(x)

Function: 5·cot(x)
Derivative: -5·csc²(x)

Function: cot(2x)
Derivative: -2·csc²(2x)

Function: cot(3x)
Derivative: -3·csc²(3x)

Function: cot(x²)
Derivative: -2x·csc²(x²)

Function: cot(5x + 1)
Derivative: -5·csc²(5x + 1)

Function: cot(x³)
Derivative: -3x²·csc²(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT DOMAIN RESTRICTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cotangent is defined as: cot(x) = cos(x)/sin(x)

Therefore, it is undefined when: sin(x) = 0

This occurs at: x = kπ, where k ∈ ℤ

So both cot(x) and -csc²(x) are undefined at: x = 0, ±π, ±2π, ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. HIGHER-ORDER DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with: f(x) = cot(x)

First derivative: f'(x) = -csc²(x)

Differentiate again: f''(x) = -2·csc(x)·(-csc(x)·cot(x))

Therefore: f''(x) = 2·csc²(x)·cot(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT TRIGONOMETRIC DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At this point, you should know these four:

  • Sine: d/dx[sin(x)] = cos(x)
  • Cosine: d/dx[cos(x)] = -sin(x)
  • Tangent: d/dx[tan(x)] = sec²(x)
  • Cotangent: d/dx[cot(x)] = -csc²(x)

A useful pattern is:
  sin(x) → cos(x)
  cos(x) → -sin(x)
  tan(x) → sec²(x)
  cot(x) → -csc²(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK RULE TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For cot(g(x)), use: d/dx[cot(g(x))] = -csc²(g(x))·g'(x)

Example: cot(x² + 1)

Inside derivative: 2x

Therefore: d/dx[cot(x² + 1)] = -2x·csc²(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Cotangent, remember:

  • The derivative of cot(x) is -csc²(x).
  • The negative sign is essential and must not be forgotten.
  • When there's a function inside cotangent, use the Chain Rule.
  • Cotangent is undefined when sin(x) = 0.

The key idea is: Cotangent becomes negative cosecant squared when differentiated. If there is a function inside cotangent, multiply by the derivative of that inside function.

The most important formula is: d/dx[cot(g(x))] = -csc²(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Cotangent are fundamental trigonometric derivatives in Calculus.

Key concepts covered:

  ✓ Basic Derivative of Cotangent
  ✓ Why the Derivative Is -csc²(x)
  ✓ Constant Multiple with Cotangent
  ✓ Cotangent with a Function Inside (Chain Rule)
  ✓ Examples
  ✓ Cotangent with Coefficient and Inner Function
  ✓ Common Cotangent Derivatives
  ✓ Domain Restrictions
  ✓ Higher-Order Derivatives
  ✓ Important Trigonometric Derivatives
  `,
  examples: [
    "d/dx[cot(x)] = -csc²(x)",
    "d/dx[4·cot(x)] = -4·csc²(x)",
    "d/dx[-3·cot(x)] = 3·csc²(x)",
    "d/dx[cot(2x)] = -2·csc²(2x)",
    "d/dx[cot(x²)] = -2x·csc²(x²)",
    "d/dx[cot(3x+1)] = -3·csc²(3x+1)",
    "d/dx[5·cot(4x)] = -20·csc²(4x)",
    "d/dx[cot(x³+2x)] = -(3x²+2)·csc²(x³+2x)",
    "d/dx[cot(x²+1)] = -2x·csc²(x²+1)",
    "Derivative of cot: -csc²(x)",
    "Derivative of sin: cos(x)",
    "Derivative of cos: -sin(x)",
    "Derivative of tan: sec²(x)",
    "cot(x) is undefined when sin(x) = 0",
    "d/dx[cot(g(x))] = -csc²(g(x))·g'(x)",
  ],
};

export default topic;