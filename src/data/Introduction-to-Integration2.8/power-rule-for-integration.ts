// filename: power-rule-for-integration.ts

const topic = {
  id: "power-rule-for-integration",
  title: "Power Rule for Integration",
  summary:
    "One of the most important basic integration rules that allows us to find the antiderivative of a power of x by adding 1 to the exponent, dividing by the new exponent, and adding C (with the exception of n = -1).",
  details: `
The Power Rule for Integration is one of the most important basic integration rules in calculus. It allows us to find the antiderivative of a power of x.

It is essentially the reverse of the Power Rule for Differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE POWER RULE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic formula is:
  ∫ x^n dx = x^(n+1)/(n+1) + C

where:
  n ≠ -1

In simple words:

  Add 1 to the exponent, then divide by the new exponent, and add C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DOES THE RULE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the Power Rule for differentiation:
  d/dx (x^n) = nx^(n-1)

Integration reverses this process.

Suppose we want to integrate:
  x^n

We need to find a function whose derivative is x^n.

Try:
  x^(n+1)/(n+1)

Differentiate it:
  d/dx (x^(n+1)/(n+1))

Using the Power Rule:
  = (1/(n+1))(n+1)x^n

The n+1 cancels:
  = x^n

Therefore:
  ∫ x^n dx = x^(n+1)/(n+1) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE THREE-STEP METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you encounter:
  ∫ x^n dx

follow these three steps.

Step 1: Increase the exponent by 1
  n → n + 1

Step 2: Divide by the new exponent
  x^(n+1)/(n+1)

Step 3: Add C
  x^(n+1)/(n+1) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: ∫ x² dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  ∫ x² dx

Step 1: Add 1 to the exponent
  2 + 1 = 3

Step 2: Divide by 3
  x³/3

Step 3: Add C
  ∫ x² dx = x³/3 + C

Check:
  Differentiate:
    d/dx (x³/3 + C) = (3x²)/3 = x²

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: ∫ x⁵ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ x⁵ dx

Increase the exponent:
  5 + 1 = 6

Divide by 6:
  ∫ x⁵ dx = x⁶/6 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: ∫ x⁷ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ x⁷ dx

Add 1:
  7 + 1 = 8

Divide by 8:
  ∫ x⁷ dx = x⁸/8 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works when there is a constant coefficient.

Consider:
  ∫ 5x³ dx

Take the 5 outside:
  5∫ x³ dx

Apply the Power Rule:
  5(x⁴/4) + C

Therefore:
  ∫ 5x³ dx = 5x⁴/4 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ANOTHER COEFFICIENT EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 12x⁴ dx

Apply the rule:
  12(x⁵/5) + C

Therefore:
  12x⁵/5 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. POWER RULE WITH A NEGATIVE EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works for negative powers, as long as:
  n ≠ -1

Consider:
  ∫ x⁻² dx

Add 1 to the exponent:
  -2 + 1 = -1

Divide by -1:
  x⁻¹/(-1)

Therefore:
  ∫ x⁻² dx = -x⁻¹ + C

or:
  -1/x + C

Check:
  d/dx (-1/x)

Rewrite:
  -x⁻¹

Then:
  d/dx (-x⁻¹) = x⁻²

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POWER RULE WITH FRACTIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rule also works with fractional powers.

Consider:
  ∫ x^(1/2) dx

Add 1:
  1/2 + 1 = 3/2

Divide by 3/2:
  x^(3/2)/(3/2)

Dividing by 3/2 is multiplying by 2/3:
  ∫ x^(1/2) dx = (2/3)x^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH A CUBE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ ∛x dx

Rewrite the radical:
  ∛x = x^(1/3)

Therefore:
  ∫ x^(1/3) dx

Add 1:
  1/3 + 1 = 4/3

Divide by 4/3:
  x^(4/3)/(4/3) = (3/4)x^(4/3)

Therefore:
  ∫ ∛x dx = (3/4)x^(4/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ √x dx

Rewrite:
  √x = x^(1/2)

Then:
  ∫ x^(1/2) dx

Apply the Power Rule:
  (2/3)x^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE IMPORTANT EXCEPTION: n = -1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule says:
  ∫ x^n dx = x^(n+1)/(n+1) + C

But if:
  n = -1

then:
  n + 1 = 0

and we'd have:
  x⁰/0

which is undefined.

Therefore, the Power Rule does not work for x⁻¹.

Instead:
  ∫ x⁻¹ dx = ln|x| + C

or equivalently:
  ∫ 1/x dx = ln|x| + C

This is one of the most important exceptions to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY +C IS NECESSARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  ∫ x³ dx

The Power Rule gives:
  x⁴/4 + C

Why do we need C?

Because many functions have the same derivative.

For example:
  d/dx (x⁴/4) = x³
and:
  d/dx (x⁴/4 + 10) = x³
and:
  d/dx (x⁴/4 - 50) = x³

The derivative of a constant is zero:
  d/dx (C) = 0

So we include +C to represent every possible antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INTEGRATING A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule becomes especially useful when integrating polynomials.

Consider:
  ∫ (4x⁵ - 3x³ + 7x² - 8) dx

Integrate each term separately:
  4∫ x⁵ dx - 3∫ x³ dx + 7∫ x² dx - ∫ 8 dx

Apply the Power Rule:
  4(x⁶/6) - 3(x⁴/4) + 7(x³/3) - 8x + C

Simplify:
  2x⁶/3 - 3x⁴/4 + 7x³/3 - 8x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A FASTER WAY TO THINK ABOUT IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:
  ∫ x⁸ dx

you can mentally do:
  8 → 9
then:
  x⁹/9 + C

For:
  ∫ x¹⁰ dx

think:
  10 → 11
then:
  x¹¹/11 + C

For:
  ∫ x⁻³ dx

think:
  -3 → -2
then:
  -x⁻²/2 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. POWER RULE VS. DERIVATIVE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It's useful to compare them.

Differentiation:
  d/dx (x^n) = nx^(n-1)
  Multiply by the exponent, then subtract 1.

Integration:
  ∫ x^n dx = x^(n+1)/(n+1) + C
  Add 1 to the exponent, then divide by the new exponent.

Memory trick:
  Derivative: Power comes down → exponent decreases.
  Integral: Exponent increases → divide by the new power.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WORKED EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  ∫ x⁶ dx
  6 + 1 = 7
  x⁷/7 + C

Example 2:
  ∫ 9x² dx
  9(x³/3)
  3x³ + C

Example 3:
  ∫ -4x⁵ dx
  -4(x⁶/6)
  -2x⁶/3 + C

Example 4:
  ∫ x⁻⁴ dx
  -4 + 1 = -3
  x⁻³/(-3)
  -x⁻³/3 + C
  or -1/(3x³) + C

Example 5:
  ∫ x^(3/2) dx
  Add 1: 3/2 + 1 = 5/2
  Divide by 5/2: (2/5)x^(5/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. PRACTICE PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Try these using the Power Rule:

1. ∫ x⁴ dx
  Answer: x⁵/5 + C

2. ∫ 7x³ dx
  Answer: 7x⁴/4 + C

3. ∫ 10x⁶ dx
  Answer: 10x⁷/7 + C

4. ∫ x⁻³ dx
  Answer: -1/(2x²) + C

5. ∫ √x dx
  Answer: (2/3)x^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Forgetting to divide by the new exponent
  Incorrect:
    ∫ x³ dx = x⁴ + C
  Correct:
    ∫ x³ dx = x⁴/4 + C

❌ Forgetting +C
  Incorrect:
    ∫ x² dx = x³/3
  Correct:
    ∫ x² dx = x³/3 + C

❌ Applying the Power Rule to 1/x
  Incorrect:
    ∫ x⁻¹ dx = x⁰/0
  The Power Rule does NOT apply when n = -1.
  Correct:
    ∫ 1/x dx = ln|x| + C

❌ Confusing integration and differentiation
  Differentiation: multiply by exponent, subtract 1.
  Integration: add 1 to exponent, divide by new exponent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule for Integration is:
  ∫ x^n dx = x^(n+1)/(n+1) + C

Remember:
  ADD → DIVIDE → CONSTANT

1. Add 1 to the exponent
  x^n → x^(n+1)

2. Divide by the new exponent
  x^(n+1)/(n+1)

3. Add C
  x^(n+1)/(n+1) + C

The one major exception is:
  n = -1

because:
  ∫ 1/x dx = ln|x| + C

So the most important thing to memorize is:

  Power Rule: Add 1, Divide by the New Power, Add C
  `,
  examples: [
    "∫ x² dx = x³/3 + C",
    "∫ x⁵ dx = x⁶/6 + C",
    "∫ 5x³ dx = 5x⁴/4 + C",
    "∫ 12x⁴ dx = 12x⁵/5 + C",
    "∫ x⁻² dx = -1/x + C",
    "∫ √x dx = (2/3)x^(3/2) + C",
    "∫ (4x⁵ - 3x³ + 7x² - 8) dx = 2x⁶/3 - 3x⁴/4 + 7x³/3 - 8x + C",
  ],
};

export default topic;