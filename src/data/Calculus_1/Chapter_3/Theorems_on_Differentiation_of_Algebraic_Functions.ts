// filename: theorems-on-differentiation-of-algebraic-functions.ts

const topic = {
  id: "theorems-on-differentiation-of-algebraic-functions",
  title: "Theorems on Differentiation of Algebraic Functions",
  summary:
    "Rules that make it easier to find derivatives of algebraic functions, including the constant rule, power rule, sum rule, difference rule, product rule, quotient rule, and general power rule.",
  details: `
The theorems on differentiation of algebraic functions are rules that make it easier to find the derivatives of functions involving constants, powers, sums, differences, products, and quotients.

Instead of using the limit definition of the derivative every time:
  f'(x) = lim(h→0) (f(x+h) - f(x))/h

we can use a collection of differentiation theorems.

These rules allow us to differentiate algebraic functions quickly, accurately, and systematically.

The most important rules are:
  • Constant Rule
  • Power Rule
  • Constant Multiple Rule
  • Sum Rule
  • Difference Rule
  • Product Rule
  • Quotient Rule
  • General Power Rule

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant, then:
  d/dx (c) = 0

A constant does not change as x changes, so its rate of change is zero.

Example:
  f(x) = 8

Therefore:
  f'(x) = 0

Another example:
  f(x) = -15

Then:
  f'(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule is one of the most important differentiation rules.

If f(x) = xⁿ, then:
  f'(x) = nxⁿ⁻¹

In words:
  Multiply the exponent by the coefficient, then subtract 1 from the exponent.

Example:
  f(x) = x⁵

Multiply the exponent:
  5x⁴

Therefore:
  f'(x) = 5x⁴

Another Example:
  f(x) = x⁷

Using the Power Rule:
  f'(x) = 7x⁶

Therefore:
  f'(x) = 7x⁶

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function is multiplied by a constant, the constant remains in front while we differentiate the function.

The rule is:
  d/dx [c f(x)] = c f'(x)

where c is a constant.

Example:
  f(x) = 6x⁴

Differentiate:
  f'(x) = 6(4x³)

Therefore:
  f'(x) = 24x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If two functions are added together, differentiate each function separately.

The rule is:
  [f(x) + g(x)]' = f'(x) + g'(x)

Example:
  f(x) = x³ + x²

Differentiate each term:
  f'(x) = 3x² + 2x

Therefore:
  f'(x) = 3x² + 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea applies when functions are subtracted.

The rule is:
  [f(x) - g(x)]' = f'(x) - g'(x)

Example:
  f(x) = x⁵ - 3x²

Differentiate:
  f'(x) = 5x⁴ - 6x

Therefore:
  f'(x) = 5x⁴ - 6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMBINING THE BASIC RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most polynomial differentiation problems require us to use several rules at once.

Consider:
  f(x) = 4x⁵ - 7x³ + 2x² - 8x + 10

Differentiate each term.

For 4x⁵:
  → 20x⁴

For -7x³:
  → -21x²

For 2x²:
  → 4x

For -8x:
  → -8

For 10:
  → 0

Therefore:
  f'(x) = 20x⁴ - 21x² + 4x - 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PRODUCT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When two functions are multiplied together, we use the Product Rule.

If f(x) = u(x)v(x), then:
  f'(x) = u'(x)v(x) + u(x)v'(x)

A common way to remember it is:
  First derivative times second, plus first times second derivative.

Example:
  Consider f(x) = x²(x + 3).

  Let u = x² and v = x + 3.

  Then:
    u' = 2x
  and:
    v' = 1

  Apply the Product Rule:
    f'(x) = u'v + uv'
    = 2x(x + 3) + x²(1)

  Expand:
    = 2x² + 6x + x²

  Therefore:
    f'(x) = 3x² + 6x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUOTIENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When one function is divided by another, use the Quotient Rule.

If f(x) = u(x)/v(x), then:
  f'(x) = (u'v - uv')/v²

A useful memory phrase is:
  Low d-high minus high d-low, over low squared.

Here:
  High = numerator
  Low = denominator

Example:
  Consider f(x) = x²/(x + 1).

  Let u = x² and v = x + 1.

  Then:
    u' = 2x
  and:
    v' = 1

  Apply the Quotient Rule:
    f'(x) = ((2x)(x + 1) - x²(1))/(x + 1)²

  Expand:
    = (2x² + 2x - x²)/(x + 1)²

  Simplify:
    f'(x) = (x² + 2x)/(x + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Rule also works with negative and fractional exponents.

The rule remains:
  d/dx (xⁿ) = nxⁿ⁻¹

where n can be:
  • Positive
  • Negative
  • Fractional
  • Integer
  • Rational

Example with a Negative Exponent:
  Consider f(x) = x⁻³.

  Apply the Power Rule:
    f'(x) = -3x⁻⁴

  Therefore:
    f'(x) = -3x⁻⁴

  or:
    f'(x) = -3/x⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FRACTIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) = x^(1/2).

Using the Power Rule:
  f'(x) = (1/2)x^(-1/2)

Therefore:
  f'(x) = 1/(2√x)

Remember that x^(1/2) = √x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVE OF A ROOT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before differentiating radical expressions, it is often helpful to rewrite them using fractional exponents.

For example:
  f(x) = √(x⁵)

Rewrite:
  f(x) = x^(5/2)

Apply the Power Rule:
  f'(x) = (5/2)x^(3/2)

Therefore:
  f'(x) = (5/2)x^(3/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DERIVATIVE OF A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function is a function involving a ratio of polynomials.

For example:
  f(x) = (x² + 1)/(x - 3)

We can use the Quotient Rule.

Let u = x² + 1 and v = x - 3.

Then:
  u' = 2x
and:
  v' = 1

Apply the rule:
  f'(x) = ((2x)(x - 3) - (x² + 1)(1))/(x - 3)²

Expand:
  = (2x² - 6x - x² - 1)/(x - 3)²

Therefore:
  f'(x) = (x² - 6x - 1)/(x - 3)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL POWER RULE FOR COMPOSITE ALGEBRAIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For functions of the form f(x) = [g(x)]ⁿ, we use the Chain Rule together with the Power Rule:
  d/dx [g(x)]ⁿ = n[g(x)]ⁿ⁻¹ · g'(x)

This is sometimes called the generalized Power Rule.

Example:
  f(x) = (2x + 3)⁵

  First differentiate the outside:
    5(2x + 3)⁴

  Then multiply by the derivative of the inside:
    2

  Therefore:
    f'(x) = 10(2x + 3)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DERIVATIVE OF A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A polynomial has the form:
  f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

The derivative is found by applying the Power Rule to each term:
  f'(x) = naₙxⁿ⁻¹ + (n-1)aₙ₋₁xⁿ⁻² + ... + a₁

Example:
  Consider f(x) = 3x⁴ - 5x³ + 7x² - 2x + 9.

  Differentiate term by term:
    3x⁴ → 12x³
    -5x³ → -15x²
    7x² → 14x
    -2x → -2
    9 → 0

  Therefore:
    f'(x) = 12x³ - 15x² + 14x - 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT ALGEBRAIC DIFFERENTIATION THEOREMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here is a useful summary:

  Constant Rule:
    d/dx (c) = 0

  Power Rule:
    d/dx (xⁿ) = nxⁿ⁻¹

  Constant Multiple Rule:
    d/dx [c f(x)] = c f'(x)

  Sum Rule:
    d/dx [f(x) + g(x)] = f'(x) + g'(x)

  Difference Rule:
    d/dx [f(x) - g(x)] = f'(x) - g'(x)

  Product Rule:
    d/dx [fg] = f'g + fg'

  Quotient Rule:
    d/dx (f/g) = (f'g - fg')/g²

  General Power Rule:
    d/dx [g(x)]ⁿ = n[g(x)]ⁿ⁻¹ · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative of:
  f(x) = 3x⁵ - 4x³ + 7x² - 6x + 10

Step 1: Differentiate each term
  3x⁵ → 15x⁴
  -4x³ → -12x²
  7x² → 14x
  -6x → -6
  10 → 0

Therefore:
  f'(x) = 15x⁴ - 12x² + 14x - 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY THESE THEOREMS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differentiation theorems are important because calculating derivatives directly from the limit definition can become very difficult for complicated functions.

For example, finding the derivative of:
  f(x) = 3x⁵ - 4x³ + 7x² - 6x + 10

using the limit definition would require substantial algebra.

Using the differentiation rules, we can obtain the answer almost immediately:
  f'(x) = 15x⁴ - 12x² + 14x - 6

These rules make Calculus much more practical.

They are used extensively in:
  • Finding tangent lines
  • Finding instantaneous velocity
  • Finding acceleration
  • Finding critical points
  • Optimization
  • Curve analysis
  • Related rates
  • Graphing functions
  • Linear approximation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. HOW TO APPROACH DIFFERENTIATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an algebraic function, follow these steps:

Step 1: Simplify the function if possible
  For example: x³/x = x² for x ≠ 0.

Step 2: Identify the structure
  Ask:
    • Is it a power?
    • Is it a sum?
    • Is it a difference?
    • Is there a constant?
    • Is it a product?
    • Is it a quotient?
    • Is there a function raised to a power?

Step 3: Choose the appropriate rule
  For example:
    x⁵ → Power Rule
    3x⁴ + 2x → Sum Rule
    x²(x+1) → Product Rule
    (x²+1)/(x-2) → Quotient Rule
    (3x+1)⁴ → General Power Rule + Chain Rule

Step 4: Simplify the result
  Always simplify your final derivative when possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Rule                  Formula
  ──────────────────────────────────────────────────────────────────────────
  Constant              d/dx (c) = 0
  Power                 d/dx (xⁿ) = nxⁿ⁻¹
  Constant Multiple     d/dx [c f(x)] = c f'(x)
  Sum                   d/dx [f(x) + g(x)] = f'(x) + g'(x)
  Difference            d/dx [f(x) - g(x)] = f'(x) - g'(x)
  Product               d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
  Quotient              d/dx [f(x)/g(x)] = (f'(x)g(x) - f(x)g'(x))/[g(x)]²
  General Power         d/dx [g(x)]ⁿ = n[g(x)]ⁿ⁻¹ · g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorems on differentiation of algebraic functions provide the fundamental rules used to calculate derivatives efficiently.

The most important rules are:
  • d/dx (c) = 0
  • d/dx (xⁿ) = nxⁿ⁻¹
  • d/dx [c f(x)] = c f'(x)
  • d/dx [f + g] = f' + g'
  • d/dx [f - g] = f' - g'
  • d/dx [fg] = f'g + fg'
  • d/dx (f/g) = (f'g - fg')/g²
  • d/dx [g(x)]ⁿ = n[g(x)]ⁿ⁻¹ · g'(x)

Key idea:

  Differentiation theorems allow us to find the instantaneous rate of change 
  and tangent slope of algebraic functions without repeatedly using the limit 
  definition of the derivative.

Once these rules are mastered, you can move on to more advanced differentiation topics such as the Chain Rule, implicit differentiation, higher-order derivatives, related rates, and applications of derivatives.
  `,
  examples: [
    "Constant: d/dx (8) = 0",
    "Power: d/dx (x⁵) = 5x⁴",
    "Constant Multiple: d/dx (6x⁴) = 24x³",
    "Sum: d/dx (x³ + x²) = 3x² + 2x",
    "Difference: d/dx (x⁵ - 3x²) = 5x⁴ - 6x",
    "Product: d/dx [x²(x+3)] = 3x² + 6x",
    "Quotient: d/dx [x²/(x+1)] = (x²+2x)/(x+1)²",
  ],
};

export default topic;