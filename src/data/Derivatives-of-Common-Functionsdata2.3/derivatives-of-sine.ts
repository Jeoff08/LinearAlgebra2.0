const topic = {
  id: "derivatives-of-sine",
  title: "Derivatives of Sine",
  summary:
    "Derivative of sin(x), chain rule with sine, constant multiple rule, and higher-order derivatives.",
  details: `
The derivative of the sine function is one of the fundamental derivatives in Calculus 1.

The most important rule to remember is: d/dx[sin(x)] = cos(x)

In other words: The derivative of sine is cosine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC DERIVATIVE OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = sin(x), then: f'(x) = cos(x)

Example: d/dx[sin(x)] = cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS THE DERIVATIVE OF SINE COSINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sine and cosine functions describe the coordinates of a point moving around a unit circle.

As x changes, the slope of the sine curve at every point corresponds to the value of the cosine function.

So: sin(x) → cos(x) and cos(x) → -sin(x)

This creates a repeating cycle when we continue differentiating.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(x)]

Directly apply the rule: cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE WITH SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 5·sin(x)

Using the Constant Multiple Rule: f'(x) = 5·d/dx[sin(x)]

Therefore: f'(x) = 5·cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[-3·sin(x)]

Keep the constant: -3·d/dx[sin(x)] = -3·cos(x)

Therefore: -3·cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SINE WITH A FUNCTION INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the sine contains another function, use the Chain Rule.

The general formula is: d/dx[sin(g(x))] = cos(g(x))·g'(x)

In simple terms: Derivative of sine is cosine, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(2x)]

Step 1: Differentiate the outside
  sin(u) → cos(u), so: cos(2x)

Step 2: Differentiate the inside
  d/dx(2x) = 2

Step 3: Multiply
  2·cos(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(x²)]

The inside is: g(x) = x²

Its derivative is: g'(x) = 2x

Apply the Chain Rule: f'(x) = cos(x²)·(2x)

Therefore: f'(x) = 2x·cos(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(3x + 1)]

Inside: g(x) = 3x + 1

Derivative: g'(x) = 3

Therefore: f'(x) = cos(3x + 1)·(3)

f'(x) = 3·cos(3x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SINE WITH A COEFFICIENT AND INNER FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 4·sin(5x)

First keep the outside constant:

  4·d/dx[sin(5x)]

Apply the Chain Rule:

  4·[cos(5x)·(5)]

Therefore: f'(x) = 20·cos(5x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 6: MORE COMPLICATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(x³ + 2x)]

Let: g(x) = x³ + 2x

Then: g'(x) = 3x² + 2

Apply the Chain Rule:

  f'(x) = cos(x³ + 2x)·(3x² + 2)

Therefore: f'(x) = (3x² + 2)·cos(x³ + 2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DERIVATIVES OF SINE AT SPECIFIC ANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some sine and cosine values are commonly used in calculus.

For example: d/dx[sin(x)] = cos(x)

At x = 0, we know: cos(0) = 1, therefore: f'(0) = 1

At x = π/2, we know: cos(π/2) = 0, therefore: f'(π/2) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. HIGHER-ORDER DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One interesting property of sine is that its derivatives repeat.

Start with: f(x) = sin(x)

  • First derivative: f'(x) = cos(x)
  • Second derivative: f''(x) = -sin(x)
  • Third derivative: f'''(x) = -cos(x)
  • Fourth derivative: f⁽⁴⁾(x) = sin(x)

Then the cycle repeats:

  sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x)

This repeating pattern is very important in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON SINE DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: sin(x)
Derivative: cos(x)

Function: 2·sin(x)
Derivative: 2·cos(x)

Function: 5·sin(x)
Derivative: 5·cos(x)

Function: sin(2x)
Derivative: 2·cos(2x)

Function: sin(3x)
Derivative: 3·cos(3x)

Function: sin(x²)
Derivative: 2x·cos(x²)

Function: sin(5x + 1)
Derivative: 5·cos(5x + 1)

Function: sin(x³)
Derivative: 3x²·cos(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Thinking the derivative is -cos(x)
  The derivative of sine is: cos(x)
  The negative sign appears when differentiating cosine: d/dx[cos(x)] = -sin(x)

Mistake 2: Forgetting the Chain Rule
  For sin(x²), don't write: cos(x²)
  You must multiply by: d/dx(x²) = 2x
  Correct: 2x·cos(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Basic Sine: d/dx[sin(x)] = cos(x)
  • Sine with an Inside Function: d/dx[sin(g(x))] = cos(g(x))·g'(x)
  • Constant Multiple: d/dx[c·sin(g(x))] = c·cos(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Sine, remember:

  • The derivative of sin(x) is cos(x).
  • When there's a function inside sine, use the Chain Rule.
  • The derivative pattern of sine repeats every four derivatives.
  • Don't forget to multiply by the derivative of the inside function.

The key idea is: Sine becomes cosine when differentiated. If there is a function inside the sine, multiply by the derivative of that inside function.

The most important formula is: d/dx[sin(g(x))] = cos(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Sine are fundamental trigonometric derivatives in Calculus.

Key concepts covered:

  ✓ Basic Derivative of Sine
  ✓ Why the Derivative of Sine Is Cosine
  ✓ Constant Multiple with Sine
  ✓ Sine with a Function Inside (Chain Rule)
  ✓ Examples
  ✓ Sine with Coefficient and Inner Function
  ✓ Derivatives at Specific Angles
  ✓ Higher-Order Derivatives
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx[sin(x)] = cos(x)",
    "d/dx[5·sin(x)] = 5·cos(x)",
    "d/dx[-3·sin(x)] = -3·cos(x)",
    "d/dx[sin(2x)] = 2·cos(2x)",
    "d/dx[sin(x²)] = 2x·cos(x²)",
    "d/dx[sin(3x+1)] = 3·cos(3x+1)",
    "d/dx[4·sin(5x)] = 20·cos(5x)",
    "d/dx[sin(x³+2x)] = (3x²+2)·cos(x³+2x)",
    "f'(0) = 1 for f(x) = sin(x)",
    "f'(π/2) = 0 for f(x) = sin(x)",
    "sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x)",
    "d/dx[sin(g(x))] = cos(g(x))·g'(x)",
    "Don't forget Chain Rule for sin",
    "Derivative of sine is cos(x), not -cos(x)",
  ],
};

export default topic;