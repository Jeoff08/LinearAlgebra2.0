const topic = {
  id: "chain-rule",
  title: "Chain Rule",
  summary:
    "Definition of the chain rule, composite functions, examples, and common mistakes.",
  details: `
The Chain Rule is used when you have a function inside another function.

This is called a composite function.

For example: f(x) = (x² + 3)⁵

Here, x² + 3 is inside the power 5. Because one function is inside another, we use the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = f(g(x)), then: y' = f'(g(x)) · g'(x)

A simple way to remember it is: Differentiate the outside, keep the inside, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE "OUTSIDE × INSIDE" METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² + 1)⁴

Identify:
  • Outside function: u⁴
  • Inside function: u = x² + 1

Now differentiate both.

Outside: 4u³
Inside: 2x

Multiply them: 4u³(2x)

Replace u with x² + 1: 8x(x² + 1)³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[(x² + 3)⁵]

Step 1: Differentiate the outside
  The outside is u⁵, derivative: 5u⁴
  Keep the inside: 5(x² + 3)⁴

Step 2: Differentiate the inside
  d/dx(x² + 3) = 2x

Step 3: Multiply
  5(x² + 3)⁴(2x)

Therefore: f'(x) = 10x(x² + 3)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[(3x + 2)⁷]

Outside: u⁷, derivative: 7u⁶
Inside: u = 3x + 2, derivative: u' = 3

Apply the Chain Rule: f'(x) = 7(3x + 2)⁶(3)

Therefore: f'(x) = 21(3x + 2)⁶

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[sin(x²)]

The outside function is: sin(u), derivative: cos(u)
The inside function is: u = x², derivative: u' = 2x

Multiply: cos(x²)(2x)

Therefore: f'(x) = 2x·cos(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[e^(x³)]

The outside function is: eᵘ, derivative: eᵘ
The inside is: u = x³, derivative: u' = 3x²

Apply the Chain Rule: e^(x³)(3x²)

Therefore: f'(x) = 3x²·e^(x³)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 5: SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx[√(x² + 1)]

Rewrite the square root: (x² + 1)¹/²

Apply the Power Rule to the outside: 1/2(x² + 1)⁻¹/²

Then multiply by the derivative of the inside: 2x

So: f'(x) = 1/2(x² + 1)⁻¹/²(2x)

Simplify: f'(x) = x/√(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO RECOGNIZE THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Look for an expression that looks like: f(g(x))

Common examples include:
  • (x² + 1)⁵
  • sin(3x)
  • cos(x²)
  • e^(x³)
  • ln(x² + 4)
  • √(5x + 1)

They all have something inside something else.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON MISTAKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = (3x + 1)⁴

A common mistake is: 4(3x + 1)³ ❌

This is incomplete.

You also need the derivative of the inside: d/dx(3x + 1) = 3

Therefore: 4(3x + 1)³(3) = 12(3x + 1)³ ✓

Remember: Don't forget the derivative of the inside function!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CHAIN RULE VS. POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x⁵

This only has a simple power, so: d/dx(x⁵) = 5x⁴

But consider: (x² + 1)⁵

Now there is an inside function, x² + 1, so we need the Chain Rule:

  5(x² + 1)⁴(2x) = 10x(x² + 1)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EASY WAY TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think: Outside → Inside → Multiply

For: (2x + 5)³

Outside: 3(2x + 5)²
Inside derivative: 2
Multiply: 3(2x + 5)²(2)
Answer: 6(2x + 5)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Chain Rule, remember:

  • The Chain Rule is used for composite functions (function inside a function).
  • The formula is: d/dx[f(g(x))] = f'(g(x)) · g'(x)
  • Differentiate the outside, keep the inside, multiply by the derivative of the inside.
  • Don't forget the derivative of the inside function.

The key formula is:

  d/dx[f(g(x))] = f'(g(x)) · g'(x)

The Golden Rule: Differentiate the outside, leave the inside unchanged, then multiply by the derivative of the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is one of the most important differentiation rules, used extensively in Calculus.

Key concepts covered:

  ✓ Formula
  ✓ The "Outside × Inside" Method
  ✓ Examples with Polynomials
  ✓ Examples with Trigonometric Functions
  ✓ Examples with Exponential Functions
  ✓ Examples with Square Roots
  ✓ How to Recognize the Chain Rule
  ✓ Common Mistakes
  ✓ Chain Rule vs. Power Rule
  ✓ Easy Way to Remember
  `,
  examples: [
    "d/dx[(x²+3)⁵] = 10x(x²+3)⁴",
    "d/dx[(3x+2)⁷] = 21(3x+2)⁶",
    "d/dx[sin(x²)] = 2x·cos(x²)",
    "d/dx[e^(x³)] = 3x²·e^(x³)",
    "d/dx[√(x²+1)] = x/√(x²+1)",
    "d/dx[(2x+5)³] = 6(2x+5)²",
    "Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)",
    "Outside: differentiate outside, keep inside",
    "Inside: multiply by derivative of inside",
    "Don't forget the derivative of the inside function",
    "Wrong: 4(3x+1)³ ❌",
    "Correct: 12(3x+1)³ ✓",
    "Power Rule: d/dx(x⁵) = 5x⁴",
    "Chain Rule: d/dx[(x²+1)⁵] = 10x(x²+1)⁴",
  ],
};

export default topic;