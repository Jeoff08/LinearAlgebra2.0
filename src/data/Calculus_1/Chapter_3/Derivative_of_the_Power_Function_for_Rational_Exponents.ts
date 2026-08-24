// filename: derivative-of-power-function-rational-exponents.ts

const topic = {
  id: "derivative-of-power-function-rational-exponents",
  title: "Derivative of the Power Function for Rational Exponents",
  summary:
    "Extending the Power Rule to functions with fractional exponents: d/dx (x^r) = r x^(r-1) where r is a rational number, with applications to radical functions and the Chain Rule.",
  details: `
The derivative of the power function for rational exponents extends the ordinary Power Rule to functions whose exponents are fractions.

A rational exponent is a number that can be written as:
  m/n

where m and n are integers and n ≠ 0.

Examples include:
  x^(1/2), x^(2/3), x^(3/4), x^(5/2)

The important rule is:
  d/dx (x^r) = r x^(r-1)

where r is a rational number.

So the same Power Rule that works for:
  x², x⁵, x⁷

also works for:
  x^(1/2), x^(3/2), x^(4/3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. RATIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before differentiating rational powers, it is important to understand what they mean.

A rational exponent has the form m/n and can be interpreted using roots:
  x^(m/n) = ⁿ√(x^m)

For example:
  x^(1/2) = √x
  x^(1/3) = ∛x
  x^(2/3) = ∛(x²)
  x^(3/2) = √(x³)

This connection between exponents and radicals is very important when working with derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE POWER RULE FOR RATIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule states:
  d/dx (x^r) = r x^(r-1)

where r can be a rational number.

For example:
  f(x) = x^(1/2)

Then:
  f'(x) = (1/2)x^(-1/2)

Therefore:
  f'(x) = 1/(2√x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: x^(1/2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x^(1/2)

Apply the Power Rule:
  f'(x) = (1/2)x^(1/2 - 1)

Subtract the exponents:
  1/2 - 1 = -1/2

Therefore:
  f'(x) = (1/2)x^(-1/2)

Rewrite the negative exponent:
  f'(x) = 1/(2√x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: x^(3/2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:
  f(x) = x^(3/2)

Apply the Power Rule:
  f'(x) = (3/2)x^(3/2 - 1)

Simplify the exponent:
  3/2 - 1 = 1/2

Therefore:
  f'(x) = (3/2)x^(1/2)

or:
  f'(x) = (3/2)√x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: x^(2/3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x^(2/3)

Apply the Power Rule:
  f'(x) = (2/3)x^(2/3 - 1)

Simplify:
  2/3 - 1 = -1/3

Therefore:
  f'(x) = (2/3)x^(-1/3)

Rewrite:
  f'(x) = 2/(3∛x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: x^(5/3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:
  f(x) = x^(5/3)

Then:
  f'(x) = (5/3)x^(5/3 - 1)
  = (5/3)x^(2/3)

Therefore:
  f'(x) = (5/3)x^(2/3)

or:
  f'(x) = (5/3)∛(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: x^(7/4)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x^(7/4)

Using the Power Rule:
  f'(x) = (7/4)x^(7/4 - 1)
  = (7/4)x^(3/4)

Therefore:
  f'(x) = (7/4)x^(3/4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONAL EXPONENTS AND RADICAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many radical functions can be converted into rational exponents before differentiation.

For example:
  f(x) = √x

Rewrite:
  f(x) = x^(1/2)

Then:
  f'(x) = (1/2)x^(-1/2)

So:
  f'(x) = 1/(2√x)

This is usually easier than trying to differentiate the radical directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH A CUBE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = ∛(x²)

Rewrite using rational exponents:
  f(x) = x^(2/3)

Apply the Power Rule:
  f'(x) = (2/3)x^(-1/3)

Therefore:
  f'(x) = 2/(3∛x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH A FOURTH ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = ∜(x³)

Rewrite:
  f(x) = x^(3/4)

Apply the Power Rule:
  f'(x) = (3/4)x^(-1/4)

Therefore:
  f'(x) = 3/(4∜x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL EXPONENTS WITH COEFFICIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works when a constant is multiplied by the function.

Consider:
  f(x) = 5x^(3/2)

Use the Constant Multiple Rule:
  f'(x) = 5[(3/2)x^(1/2)]

Therefore:
  f'(x) = (15/2)x^(1/2)

or:
  f'(x) = (15/2)√x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH SEVERAL RATIONAL POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 4x^(5/2) - 3x^(3/2) + 7x^(1/2)

Differentiate each term.

For 4x^(5/2):
  4[(5/2)x^(3/2)] = 10x^(3/2)

For -3x^(3/2):
  -3[(3/2)x^(1/2)] = -(9/2)x^(1/2)

For 7x^(1/2):
  7[(1/2)x^(-1/2)] = (7/2)x^(-1/2)

Therefore:
  f'(x) = 10x^(3/2) - (9/2)x^(1/2) + (7/2)x^(-1/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH NEGATIVE RATIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works for negative rational exponents.

Consider:
  f(x) = x^(-3/2)

Apply:
  d/dx (x^r) = r x^(r-1)

Therefore:
  f'(x) = -(3/2)x^(-3/2 - 1)
  = -(3/2)x^(-5/2)

So:
  f'(x) = -(3/2)x^(-5/2)

or:
  f'(x) = -3/(2x^(5/2))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY THE EXPONENT CHANGES THE WAY IT DOES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule always follows the same pattern:
  x^r → r x^(r-1)

The important part is r - 1.

For example:
  x^(5/2) becomes (5/2)x^(3/2)
because:
  5/2 - 1 = 5/2 - 2/2 = 3/2

Likewise:
  x^(2/3) becomes (2/3)x^(-1/3)
because:
  2/3 - 1 = 2/3 - 3/3 = -1/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RATIONAL EXPONENTS AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rational Power Rule can also be combined with the Chain Rule.

For:
  f(x) = [g(x)]^r

we have:
  f'(x) = r[g(x)]^(r-1) · g'(x)

This is extremely important.

Example:
  Consider f(x) = (x² + 1)^(3/2).

  The outer function is u^(3/2).
  Differentiate: (3/2)u^(1/2)

  The inner function is u = x² + 1.
  Differentiate: u' = 2x

  Multiply:
    f'(x) = (3/2)(x² + 1)^(1/2)(2x)

  Therefore:
    f'(x) = 3x√(x² + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH A RADICAL INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = √(3x² + 2)

Rewrite:
  f(x) = (3x² + 2)^(1/2)

Apply the Chain Rule:
  f'(x) = (1/2)(3x² + 2)^(-1/2)(6x)

Simplify:
  f'(x) = 3x/√(3x² + 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH A CUBE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = ∛(2x² + 5)

Rewrite:
  f(x) = (2x² + 5)^(1/3)

Apply the Chain Rule:
  f'(x) = (1/3)(2x² + 5)^(-2/3)(4x)

Therefore:
  f'(x) = 4x/[3(2x² + 5)^(2/3)]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DOMAIN CONSIDERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rational exponents can introduce important domain restrictions.

For example:
  f(x) = √x = x^(1/2)

over the real numbers requires x ≥ 0.

Its derivative:
  f'(x) = 1/(2√x)

is defined only for x > 0.

Notice something important:
  f(x) is defined at x = 0, but f'(0) does not exist as a finite derivative.

The graph has a vertical tangent at the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ANOTHER IMPORTANT EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x^(2/3)

This function is defined for both positive and negative x, because:
  x^(2/3) = (∛x)²

Its derivative is:
  f'(x) = (2/3)x^(-1/3)

or:
  f'(x) = 2/(3∛x)

At x = 0, the derivative is undefined.

So the function is continuous at 0, but it is not differentiable there.

This is another example showing:
  Continuity does not always imply differentiability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to multiply by the exponent
  Incorrect:
    d/dx x^(3/2) = x^(1/2)
  Correct:
    d/dx x^(3/2) = (3/2)x^(1/2)

Mistake 2: Subtracting 1 incorrectly
  For x^(5/3), we need 5/3 - 1, not 5/3 - 1 = 4/5.

  The correct calculation is:
    5/3 - 3/3 = 2/3

  Therefore:
    d/dx x^(5/3) = (5/3)x^(2/3)

Mistake 3: Forgetting the Chain Rule
  For (2x + 1)^(3/2):
    Incorrect: (3/2)(2x + 1)^(1/2)
    You must also differentiate 2x + 1, which gives 2.

    Therefore:
      f'(x) = 3(2x + 1)^(1/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A QUICK PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a power function with a rational exponent:

Step 1: Identify the exponent
  For f(x) = x^(5/3), the exponent is 5/3.

Step 2: Multiply by the exponent
  (5/3)x^(...)

Step 3: Subtract 1 from the exponent
  5/3 - 1 = 2/3

Step 4: Write the final derivative
  f'(x) = (5/3)x^(2/3)

If there is something inside the power, use the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rational Power Rule:
    d/dx (x^(m/n)) = (m/n)x^(m/n - 1)
    where the expression is defined appropriately over the real numbers.

  Generalized Rational Power Rule:
    d/dx [g(x)]^(m/n) = (m/n)[g(x)]^(m/n - 1) · g'(x)

  The second formula combines the Power Rule and the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative of:
  f(x) = 3x^(7/3) - 4x^(5/2) + 6x^(1/2)

Differentiate each term.

First term:
  3x^(7/3) → 3(7/3)x^(4/3) = 7x^(4/3)

Second term:
  -4x^(5/2) → -4(5/2)x^(3/2) = -10x^(3/2)

Third term:
  6x^(1/2) → 6(1/2)x^(-1/2) = 3x^(-1/2)

Therefore:
  f'(x) = 7x^(4/3) - 10x^(3/2) + 3x^(-1/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function                  Derivative
  ────────────────────────────────────────────────────────────────────────
  x^(1/2)                 (1/2)x^(-1/2) = 1/(2√x)
  x^(1/3)                 (1/3)x^(-2/3) = 1/(3∛(x²))
  x^(2/3)                 (2/3)x^(-1/3) = 2/(3∛x)
  x^(3/2)                 (3/2)x^(1/2) = (3/2)√x
  x^(5/2)                 (5/2)x^(3/2)
  x^(5/3)                 (5/3)x^(2/3)
  x^(-1/2)                -(1/2)x^(-3/2)
  [g(x)]^(m/n)            (m/n)[g(x)]^(m/n-1) · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Derivative of the Power Function for Rational Exponents extends the Power Rule to fractional exponents.

The fundamental formula is:
  d/dx (x^r) = r x^(r-1)

where r can be a rational number.

For x^(m/n), the derivative is:
  d/dx (x^(m/n)) = (m/n)x^(m/n - 1)

For a composite function [g(x)]^(m/n), use:
  d/dx [g(x)]^(m/n) = (m/n)[g(x)]^(m/n - 1) · g'(x)

The main idea to remember:

  The Power Rule works for rational exponents just as it works for 
  whole-number exponents: multiply by the exponent, then subtract 1 from 
  the exponent. If the base contains another function, multiply by the 
  derivative of that inner function using the Chain Rule.

This topic is especially important for differentiating radical functions, fractional powers, algebraic functions, and composite functions.
  `,
  examples: [
    "d/dx x^(1/2) = 1/(2√x)",
    "d/dx x^(3/2) = (3/2)√x",
    "d/dx x^(2/3) = 2/(3∛x)",
    "d/dx x^(5/3) = (5/3)x^(2/3)",
    "d/dx x^(7/4) = (7/4)x^(3/4)",
    "d/dx (x²+1)^(3/2) = 3x√(x²+1)",
    "d/dx √(3x²+2) = 3x/√(3x²+2)",
  ],
};

export default topic;