const topic = {
  id: "power-rule",
  title: "Power Rule",
  summary:
    "Definition of the power rule, formula, examples with coefficients, negative exponents, fractional exponents, and special cases.",
  details: `
The Power Rule is one of the most important differentiation rules in Calculus 1. It allows us to quickly find the derivative of a function where the variable is raised to a power.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = xⁿ, then: d/dx(xⁿ) = nxⁿ⁻¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HOW TO USE THE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two simple steps:
  1. Bring the exponent down and multiply it by the coefficient.
  2. Subtract 1 from the exponent.

Example: f(x) = x⁵

Bring the 5 down: 5x⁵

Then subtract 1 from the exponent: 5x⁴

Therefore: d/dx(x⁵) = 5x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  Find: d/dx(x³)
  Apply the Power Rule: 3x³⁻¹ = 3x²

Example 2:
  Find: d/dx(x⁷)
  Bring down 7: 7x⁷⁻¹ = 7x⁶

Example 3:
  Find: d/dx(x¹⁰)
  10x¹⁰⁻¹ = 10x⁹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POWER RULE WITH COEFFICIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works when there is a coefficient.

For: f(x) = 4x⁵

Keep the 4, then apply the Power Rule to x⁵:

  f'(x) = 4(5x⁴) = 20x⁴

Another Example:
  f(x) = 7x³
  f'(x) = 7(3x²) = 21x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POWER RULE WITH NEGATIVE EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rule also works with negative powers.

Example: f(x) = x⁻³

Apply the rule: f'(x) = -3x⁻³⁻¹ = -3x⁻⁴

This can also be written as: -3/x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. POWER RULE WITH FRACTIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works with fractional powers.

Example: f(x) = x¹/²

Then: f'(x) = 1/2 · x¹/²⁻¹ = 1/2 · x⁻¹/²

Therefore: f'(x) = 1/(2√x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────┬─────────────────────────────────────┐
│ Function                    │ Derivative                         │
├─────────────────────────────┼─────────────────────────────────────┤
│ x²                          │ 2x                                 │
├─────────────────────────────┼─────────────────────────────────────┤
│ x³                          │ 3x²                                │
├─────────────────────────────┼─────────────────────────────────────┤
│ x⁴                          │ 4x³                                │
├─────────────────────────────┼─────────────────────────────────────┤
│ x⁵                          │ 5x⁴                                │
├─────────────────────────────┼─────────────────────────────────────┤
│ 3x²                         │ 6x                                 │
├─────────────────────────────┼─────────────────────────────────────┤
│ 8x⁴                         │ 32x³                               │
├─────────────────────────────┼─────────────────────────────────────┤
│ x⁻²                         │ -2x⁻³                              │
├─────────────────────────────┼─────────────────────────────────────┤
│ x¹/²                        │ 1/2 · x⁻¹/²                       │
└─────────────────────────────┴─────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SPECIAL CASE: x¹
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x

Since x = x¹, apply the Power Rule:

  d/dx(x) = 1·x¹⁻¹ = 1·x⁰

Since x⁰ = 1: d/dx(x) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SPECIAL CASE: x⁰
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1

Since 1 = x⁰, apply the Power Rule:

  d/dx(x⁰) = 0·x⁻¹ = 0

This is consistent with the Constant Rule: d/dx(1) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EASY PATTERN TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think: "Bring it down, subtract one."

For xⁿ, you get: nxⁿ⁻¹

Example: x⁸
  Bring down 8: 8x⁸
  Subtract 1: 8x⁷

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Power Rule, remember:

  • The Power Rule applies to any real exponent n.
  • Always subtract 1 from the exponent.
  • Coefficients are kept and multiplied by the exponent.
  • The Power Rule works for negative and fractional exponents as well.

The key idea to remember is:

  Multiply by the exponent, then decrease the exponent by 1.

  d/dx(xⁿ) = nxⁿ⁻¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule is the most frequently used differentiation rule in Calculus.

Key concepts covered:

  ✓ Formula
  ✓ How to Use the Power Rule
  ✓ Examples
  ✓ Power Rule with Coefficients
  ✓ Power Rule with Negative Exponents
  ✓ Power Rule with Fractional Exponents
  ✓ Special Case: x¹
  ✓ Special Case: x⁰
  ✓ Easy Pattern
  `,
  examples: [
    "d/dx(x³) = 3x²",
    "d/dx(x⁷) = 7x⁶",
    "d/dx(x¹⁰) = 10x⁹",
    "d/dx(4x⁵) = 20x⁴",
    "d/dx(7x³) = 21x²",
    "d/dx(x⁻³) = -3x⁻⁴ = -3/x⁴",
    "d/dx(x¹/²) = 1/(2√x)",
    "d/dx(x) = 1",
    "d/dx(1) = 0",
    "Power Rule: d/dx(xⁿ) = nxⁿ⁻¹",
    "Bring exponent down, subtract one",
    "x² → 2x",
    "x³ → 3x²",
    "x⁴ → 4x³",
    "x⁵ → 5x⁴",
    "3x² → 6x",
    "8x⁴ → 32x³",
    "x⁻² → -2x⁻³",
  ],
};

export default topic;