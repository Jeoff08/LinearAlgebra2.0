const topic = {
  id: "constant-multiple-rule",
  title: "Constant Multiple Rule",
  summary:
    "Definition of the constant multiple rule, formula, examples, and combining with the power rule.",
  details: `
The Constant Multiple Rule tells us how to differentiate a function that is multiplied by a constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant and f(x) is a function, then:

  d/dx[c·f(x)] = c·f'(x)

In simple words: Keep the constant, then differentiate the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 5x³

Here:
  • 5 is the constant
  • x³ is the function

Keep the 5, then differentiate x³:

  d/dx(5x³) = 5·d/dx(x³)

Using the Power Rule: = 5(3x²)

Therefore: 15x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  Find: d/dx(4x²)
  Keep 4: 4·d/dx(x²)
  Apply the Power Rule: 4(2x) = 8x

Example 2:
  Find: d/dx(7x⁵)
  Keep 7: 7·d/dx(x⁵)
  = 7(5x⁴) = 35x⁴

Example 3:
  Find: d/dx(-3x⁴)
  Keep -3: -3·d/dx(x⁴)
  = -3(4x³) = -12x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE WITH OTHER FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rule is not limited to powers of x.

Example: f(x) = 6sin(x)

Keep 6: f'(x) = 6·d/dx(sin(x))

Since: d/dx(sin(x)) = cos(x)

we get: f'(x) = 6cos(x)

Another example: f(x) = 4eˣ

  f'(x) = 4eˣ

because: d/dx(eˣ) = eˣ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. COMBINING IT WITH THE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Rule and Power Rule are often used together.

Example: f(x) = 9x⁶

Step 1: Keep the constant
  9·d/dx(x⁶)

Step 2: Apply the Power Rule
  9(6x⁵)

Step 3: Simplify
  54x⁵

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GENERAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = c·xⁿ where c is a constant:

  d/dx(c·xⁿ)

Keep c: c·d/dx(xⁿ)

Apply the Power Rule: c·n·xⁿ⁻¹

So: d/dx(c·xⁿ) = c·n·xⁿ⁻¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DON'T CONFUSE IT WITH THE CONSTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Constant Rule:
  If the constant is by itself: d/dx(5) = 0

Constant Multiple Rule:
  If the constant multiplies a function: d/dx(5x³) = 15x²

So the important difference is:
  • Constant alone → 0
  • Constant × function → keep the constant

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUICK TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: "Keep the constant, differentiate the rest."

For: 8x⁴

Keep 8: 8(4x³)

Answer: 32x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Constant Multiple Rule, remember:

  • Keep the constant, differentiate the function.
  • The rule works with any differentiable function.
  • It is often combined with the Power Rule.
  • Don't confuse it with the Constant Rule.

The key formula is:

  d/dx[c·f(x)] = c·f'(x)

where c is a constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Rule is an essential differentiation rule used frequently in Calculus.

Key concepts covered:

  ✓ Formula
  ✓ How It Works
  ✓ Examples
  ✓ Constant Multiple with Other Functions
  ✓ Combining with the Power Rule
  ✓ General Formula
  ✓ Constant Rule vs. Constant Multiple Rule
  ✓ Quick Trick
  `,
  examples: [
    "d/dx(4x²) = 8x",
    "d/dx(7x⁵) = 35x⁴",
    "d/dx(-3x⁴) = -12x³",
    "d/dx(9x⁶) = 54x⁵",
    "d/dx(6sin(x)) = 6cos(x)",
    "d/dx(4eˣ) = 4eˣ",
    "d/dx(c·xⁿ) = c·n·xⁿ⁻¹",
    "Keep constant, differentiate the rest",
    "d/dx(8x⁴) = 32x³",
    "Constant Rule: d/dx(5) = 0",
    "Constant Multiple Rule: d/dx(5x³) = 15x²",
    "Formula: d/dx[c·f(x)] = c·f'(x)",
  ],
};

export default topic;