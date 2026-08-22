const topic = {
  id: "derivatives-of-cosine",
  title: "Derivatives of Cosine",
  summary:
    "Derivative of cos(x), chain rule with cosine, constant multiple rule, and higher-order derivatives.",
  details: `
The derivative of the cosine function is another fundamental rule in Calculus 1.

The most important formula to remember is: d/dx[cos(x)] = -sin(x)

In other words: The derivative of cosine is negative sine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DERIVATIVE OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = cos(x), then: f'(x) = -sin(x)

So: d/dx[cos(x)] = -sin(x)

The negative sign is very important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SINE VS. COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two basic derivatives are:

  d/dx[sin(x)] = cos(x)
  d/dx[cos(x)] = -sin(x)

A useful way to remember the difference:

  Sine → Cosine
  Cosine → Negative Sine

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cos(x)]

Directly apply the rule: -sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE WITH COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = 4·cos(x), keep the constant 4:

  f'(x) = 4·d/dx[cos(x)]

Since d/dx[cos(x)] = -sin(x), we get: f'(x) = -4·sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[-7·cos(x)]

Keep -7: -7·d/dx[cos(x)] = -7·(-sin(x))

Therefore: 7·sin(x)

Notice that the two negative signs cancel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COSINE WITH A FUNCTION INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the cosine contains another function, use the Chain Rule.

The general formula is: d/dx[cos(g(x))] = -sin(g(x))·g'(x)

In simple terms: Differentiate cosine into negative sine, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cos(2x)]

Step 1: Differentiate the outside
  cos(u) → -sin(u), so: -sin(2x)

Step 2: Differentiate the inside
  d/dx(2x) = 2

Step 3: Multiply
  -sin(2x)·(2)

Therefore: -2·sin(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cos(x²)]

The inside is: g(x) = x²

Its derivative is: g'(x) = 2x

Apply the Chain Rule: f'(x) = -sin(x²)·(2x)

Therefore: -2x·sin(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cos(3x + 1)]

Inside: g(x) = 3x + 1

Derivative: g'(x) = 3

Therefore: f'(x) = -sin(3x + 1)·(3)

So: -3·sin(3x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COSINE WITH A COEFFICIENT AND INNER FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 5·cos(4x)

First keep the coefficient:

  5·d/dx[cos(4x)]

Apply the Chain Rule:

  5·[-sin(4x)·(4)]

Therefore: f'(x) = -20·sin(4x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 6: MORE COMPLICATED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[cos(x³ + 2x)]

The inside function is: g(x) = x³ + 2x

Differentiate: g'(x) = 3x² + 2

Apply the Chain Rule:

  f'(x) = -sin(x³ + 2x)·(3x² + 2)

Therefore: f'(x) = -(3x² + 2)·sin(x³ + 2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HIGHER-ORDER DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivatives of sine and cosine follow a repeating cycle.

Start with: f(x) = cos(x)

  • First derivative: f'(x) = -sin(x)
  • Second derivative: f''(x) = -cos(x)
  • Third derivative: f'''(x) = sin(x)
  • Fourth derivative: f⁽⁴⁾(x) = cos(x)

Then the cycle repeats:

  cos(x) → -sin(x) → -cos(x) → sin(x) → cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON COSINE DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: cos(x)
Derivative: -sin(x)

Function: 2·cos(x)
Derivative: -2·sin(x)

Function: 5·cos(x)
Derivative: -5·sin(x)

Function: cos(2x)
Derivative: -2·sin(2x)

Function: cos(3x)
Derivative: -3·sin(3x)

Function: cos(x²)
Derivative: -2x·sin(x²)

Function: cos(5x + 1)
Derivative: -5·sin(5x + 1)

Function: cos(x³)
Derivative: -3x²·sin(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the negative sign
  Incorrect: d/dx[cos(x)] = sin(x)
  Correct: d/dx[cos(x)] = -sin(x)

Mistake 2: Forgetting the Chain Rule
  For cos(x²), don't write: -sin(x²)
  You must multiply by: d/dx(x²) = 2x
  Correct: -2x·sin(x²)

Mistake 3: Losing track of two negative signs
  For -3·cos(x), we have: -3·(-sin(x)) = 3·sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Basic Cosine: d/dx[cos(x)] = -sin(x)
  • Cosine with an Inside Function: d/dx[cos(g(x))] = -sin(g(x))·g'(x)
  • Constant Multiple: d/dx[c·cos(g(x))] = -c·sin(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Cosine, remember:

  • The derivative of cos(x) is -sin(x).
  • The negative sign is essential and must not be forgotten.
  • When there's a function inside cosine, use the Chain Rule.
  • The derivative pattern of cosine repeats every four derivatives.

The key idea is: Cosine becomes negative sine when differentiated. If there is a function inside the cosine, multiply by the derivative of that inside function.

The most important formula is: d/dx[cos(g(x))] = -sin(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Cosine are fundamental trigonometric derivatives in Calculus.

Key concepts covered:

  ✓ Basic Derivative of Cosine
  ✓ Sine vs. Cosine
  ✓ Constant Multiple with Cosine
  ✓ Cosine with a Function Inside (Chain Rule)
  ✓ Examples
  ✓ Cosine with Coefficient and Inner Function
  ✓ Higher-Order Derivatives
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx[cos(x)] = -sin(x)",
    "d/dx[4·cos(x)] = -4·sin(x)",
    "d/dx[-7·cos(x)] = 7·sin(x)",
    "d/dx[cos(2x)] = -2·sin(2x)",
    "d/dx[cos(x²)] = -2x·sin(x²)",
    "d/dx[cos(3x+1)] = -3·sin(3x+1)",
    "d/dx[5·cos(4x)] = -20·sin(4x)",
    "d/dx[cos(x³+2x)] = -(3x²+2)·sin(x³+2x)",
    "cos(x) → -sin(x) → -cos(x) → sin(x) → cos(x)",
    "d/dx[cos(g(x))] = -sin(g(x))·g'(x)",
    "Don't forget the negative sign",
    "Don't forget Chain Rule for cos",
    "Derivative of cosine is -sin(x), not sin(x)",
  ],
};

export default topic;