const topic = {
  id: "derivatives-of-exponential-functions",
  title: "Derivatives of Exponential Functions",
  summary:
    "Derivative of eˣ, derivative of aˣ, chain rule with exponential functions, and common examples.",
  details: `
An exponential function is a function where the variable appears in the exponent.

Examples: 2ˣ, 5ˣ, eˣ, 10ˣ

Exponential functions are especially important because their derivatives have a very useful pattern.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DERIVATIVE OF eˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important exponential function is: f(x) = eˣ

Its derivative is: d/dx(eˣ) = eˣ

This means that eˣ is its own derivative.

Example: f(x) = eˣ → f'(x) = eˣ and f''(x) = eˣ

The function remains unchanged after differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE OF aˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an exponential function with a base a: f(x) = aˣ

the derivative is: d/dx(aˣ) = aˣ · ln(a)

where: a > 0, a ≠ 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(2ˣ)

Using: d/dx(aˣ) = aˣ · ln(a)

we get: 2ˣ · ln(2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(5ˣ)

5ˣ · ln(5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(10ˣ)

10ˣ · ln(10)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY IS eˣ SPECIAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall: d/dx(aˣ) = aˣ · ln(a)

If a = e, then: ln(e) = 1

Therefore: eˣ · ln(e) becomes eˣ(1)

So: d/dx(eˣ) = eˣ

That's why e is the natural base for calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONSTANT MULTIPLE WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 4eˣ

Using the Constant Multiple Rule: f'(x) = 4·d/dx(eˣ)

Therefore: f'(x) = 4eˣ

Another example: f(x) = 7(2ˣ)

Then: f'(x) = 7(2ˣ · ln(2))

Therefore: f'(x) = 7·2ˣ·ln(2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXPONENTIAL FUNCTIONS WITH A LINEAR EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = e^(3x)

Here, we need the Chain Rule because 3x is inside the exponent.

Let: u = 3x, then: u' = 3

The derivative of eᵘ is: eᵘ

Multiply by the derivative of the inside: e^(3x) · (3)

Therefore: f'(x) = 3e^(3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(e^(5x))

Using the Chain Rule: d/dx(e^(5x)) = e^(5x) · (5)

Therefore: 5e^(5x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(2^(3x))

For aᵘ, the derivative is: aᵘ · ln(a) · u'

Here: u = 3x and u' = 3

Therefore: d/dx(2^(3x)) = 3 · 2^(3x) · ln(2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. GENERAL EXPONENTIAL CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = e^(g(x)), then: f'(x) = e^(g(x)) · g'(x)

For a general base: f(x) = a^(g(x))

then: f'(x) = a^(g(x)) · ln(a) · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 6: MORE COMPLICATED EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(e^(x² + 1))

The inside function is: g(x) = x² + 1

Its derivative: g'(x) = 2x

Apply the Chain Rule: f'(x) = e^(x² + 1) · (2x)

Therefore: f'(x) = 2x·e^(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 7
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: d/dx(3^(x²))

Use: d/dx(a^(g(x))) = a^(g(x)) · ln(a) · g'(x)

Here: g(x) = x², so g'(x) = 2x

Therefore: f'(x) = 2x · 3^(x²) · ln(3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON EXPONENTIAL DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: eˣ
Derivative: eˣ

Function: e^(2x)
Derivative: 2e^(2x)

Function: e^(5x)
Derivative: 5e^(5x)

Function: 2ˣ
Derivative: 2ˣ · ln(2)

Function: 3ˣ
Derivative: 3ˣ · ln(3)

Function: 5ˣ
Derivative: 5ˣ · ln(5)

Function: 10ˣ
Derivative: 10ˣ · ln(10)

Function: e^(x²)
Derivative: 2x·e^(x²)

Function: 2^(x²)
Derivative: 2x·2^(x²)·ln(2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting ln(a)
  For 2ˣ, the derivative is not 2ˣ.
  Correct: 2ˣ · ln(2)
  Only eˣ has the particularly simple derivative: eˣ.

Mistake 2: Forgetting the Chain Rule
  For e^(x²), don't write: e^(x²)
  You must multiply by the derivative of x²: 2x
  Therefore: 2x·e^(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXPONENTIAL VS. POWER FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It's important not to confuse these two:

Power Function: x⁵
  The variable is the base.
  Derivative: 5x⁴

Exponential Function: 5ˣ
  The variable is the exponent.
  Derivative: 5ˣ · ln(5)

So remember: xⁿ → nxⁿ⁻¹, but aˣ → aˣ · ln(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Natural Exponential: d/dx(eˣ) = eˣ
  • General Exponential: d/dx(aˣ) = aˣ · ln(a)
  • Exponential with a Function: d/dx(e^(g(x))) = e^(g(x)) · g'(x)
  • General Base with a Function: d/dx(a^(g(x))) = a^(g(x)) · ln(a) · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Exponential Functions, remember:

  • For eˣ, the derivative stays eˣ.
  • For aˣ, multiply by ln(a).
  • If the exponent contains a function, multiply by the derivative of that function using the Chain Rule.
  • Don't confuse exponential functions with power functions.

The key formulas are:
  • d/dx(eˣ) = eˣ
  • d/dx(aˣ) = aˣ · ln(a)
  • d/dx(e^(g(x))) = e^(g(x)) · g'(x)
  • d/dx(a^(g(x))) = a^(g(x)) · ln(a) · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Exponential Functions are essential in Calculus and have many applications.

Key concepts covered:

  ✓ Derivative of eˣ
  ✓ Derivative of aˣ
  ✓ Why eˣ Is Special
  ✓ Constant Multiple with Exponential Functions
  ✓ Exponential Functions with Linear Exponent
  ✓ General Exponential Chain Rule
  ✓ Examples
  ✓ Common Mistakes
  ✓ Exponential vs. Power Functions
  `,
  examples: [
    "d/dx(eˣ) = eˣ",
    "d/dx(2ˣ) = 2ˣ·ln(2)",
    "d/dx(5ˣ) = 5ˣ·ln(5)",
    "d/dx(10ˣ) = 10ˣ·ln(10)",
    "d/dx(4eˣ) = 4eˣ",
    "d/dx(7·2ˣ) = 7·2ˣ·ln(2)",
    "d/dx(e^(3x)) = 3e^(3x)",
    "d/dx(e^(5x)) = 5e^(5x)",
    "d/dx(2^(3x)) = 3·2^(3x)·ln(2)",
    "d/dx(e^(x²+1)) = 2x·e^(x²+1)",
    "d/dx(3^(x²)) = 2x·3^(x²)·ln(3)",
    "Natural Exponential: d/dx(eˣ) = eˣ",
    "General Exponential: d/dx(aˣ) = aˣ·ln(a)",
    "Power Function: d/dx(x⁵) = 5x⁴",
    "Exponential Function: d/dx(5ˣ) = 5ˣ·ln(5)",
    "Chain Rule: d/dx(e^(g(x))) = e^(g(x))·g'(x)",
  ],
};

export default topic;