// filename: MaclaurinSeries.ts

const topic = {
  id: "maclaurin-series",
  title: "Maclaurin Series",
  summary:
    "A comprehensive guide to Maclaurin series (Taylor series centered at 0). Covers the definition, formula, common series expansions, derivation techniques, substitution, and applications.",
  details: `
The Maclaurin Series is a special type of Taylor Series where the center of expansion is:

  a = 0.

It is one of the most important topics in Calculus 2 because it lets us represent many functions as infinite polynomials involving powers of x.

For example:

  eˣ, sin x, cos x, ln(1 + x), arctan x

can all be represented by Maclaurin series on appropriate intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA

A Maclaurin series represents a function in the form:

  f(x) = c₀ + c₁x + c₂x² + c₃x³ + ....

The coefficients are determined using the derivatives of f(x) evaluated at:

  x = 0.

The general formula is:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

This is the formula you should remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT CALLED MACLAURIN?

A Maclaurin series is simply a Taylor series centered at zero.

The general Taylor series is:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ.

If we choose:

  a = 0,

then:

  x - a = x

and therefore:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

So:

  Maclaurin Series = Taylor Series centered at 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXPANDED MACLAURIN FORMULA

The sigma notation:

  Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

can be expanded as:

  f(x) = f(0) + f'(0)x + f''(0)/2! · x² + f'''(0)/3! · x³ + f⁽⁴⁾(0)/4! · x⁴ + ...

Notice that every derivative is evaluated at 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. UNDERSTANDING THE FORMULA

Consider one general term:

  f⁽ⁿ⁾(0)/n! · xⁿ.

It contains three important parts.

f⁽ⁿ⁾(0):

This is the n-th derivative evaluated at zero.

n!:

This is the factorial:

  n! = n(n - 1)(n - 2)...1.

For example:

  4! = 4(3)(2)(1) = 24.

xⁿ:

This gives the power of x.

Therefore:

  Coefficient of xⁿ = f⁽ⁿ⁾(0)/n!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. HOW TO FIND A MACLAURIN SERIES

When given a function, follow this procedure.

Step 1: Identify f(x)

For example:

  f(x) = eˣ.

Step 2: Find derivatives

Calculate:

  f'(x), f''(x), f'''(x), ...

Step 3: Evaluate each derivative at x = 0

Find:

  f(0), f'(0), f''(0), ...

Step 4: Substitute into the formula

Use:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ.

Step 5: Simplify

Look for patterns in the coefficients.

Step 6: Determine the interval of convergence

Find the radius and check the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: MACLAURIN SERIES OF eˣ

Let:

  f(x) = eˣ.

Differentiate:

  f'(x) = eˣ
  f''(x) = eˣ
  f'''(x) = eˣ

and so on.

Every derivative is:

  eˣ.

Evaluate at x = 0:

  f(0) = 1
  f'(0) = 1
  f''(0) = 1
  f'''(0) = 1.

Therefore:

  eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ....

Thus:

  eˣ = Σₙ₌₀^∞ xⁿ/n!

This series converges for every real x.

Therefore:

  R = ∞

and the interval of convergence is:

  (-∞, ∞).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: MACLAURIN SERIES OF sin x

Let:

  f(x) = sin x.

Find the derivatives:

  f(x) = sin x
  f'(x) = cos x
  f''(x) = -sin x
  f'''(x) = -cos x
  f⁽⁴⁾(x) = sin x.

The derivatives repeat every four derivatives.

Now evaluate at zero:

  f(0) = 0
  f'(0) = 1
  f''(0) = 0
  f'''(0) = -1
  f⁽⁴⁾(0) = 0.

Substitute into the Maclaurin formula:

  sin x = 0 + 1x + 0x² - x³/3! + 0x⁴ + x⁵/5! - ....

Therefore:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ....

or:

  sin x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ⁺¹/(2n + 1)!.

The important pattern is that only odd powers occur.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: MACLAURIN SERIES OF cos x

Let:

  f(x) = cos x.

Its derivatives are:

  cos x,
  -sin x,
  -cos x,
  sin x,
  cos x, ...

Evaluate at zero:

  1, 0, -1, 0, 1, ...

Therefore:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

or:

  cos x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ/(2n)!.

Notice that only even powers occur.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SINE VS. COSINE

There is a useful pattern:

Sine:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ....

Odd powers:

  x, x³, x⁵, x⁷, ...

Cosine:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

Even powers:

  1, x², x⁴, x⁶, ...

This pattern is very useful when solving problems quickly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: MACLAURIN SERIES OF ln(1 + x)

Let:

  f(x) = ln(1 + x).

First derivative:

  f'(x) = 1/(1 + x).

Second derivative:

  f''(x) = -1/(1 + x)².

Third derivative:

  f'''(x) = 2/(1 + x)³.

Fourth derivative:

  f⁽⁴⁾(x) = -6/(1 + x)⁴.

Evaluate at zero:

  f(0) = 0
  f'(0) = 1
  f''(0) = -1
  f'''(0) = 2
  f⁽⁴⁾(0) = -6.

Now divide by the appropriate factorial:

  f'''(0)/3! = 2/6 = 1/3.

Therefore:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + x⁵/5 - ....

The general form is:

  ln(1 + x) = Σₙ₌₁^∞ (-1)ⁿ⁺¹ · xⁿ/n

for:

  -1 < x ≤ 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: MACLAURIN SERIES OF 1/(1 - x)

This is one of the most important series because many other Maclaurin series can be derived from it.

We know the geometric series:

  1 + r + r² + r³ + ... = 1/(1 - r)

for:

  |r| < 1.

Set:

  r = x.

Then:

  1/(1 - x) = 1 + x + x² + x³ + x⁴ + ....

or:

  1/(1 - x) = Σₙ₌₀^∞ xⁿ

for:

  |x| < 1.

This is already a Maclaurin series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: MACLAURIN SERIES OF 1/(1 + x)

Starting from:

  1/(1 - x) = 1 + x + x² + x³ + ...,

replace x with -x:

  1/(1 + x) = 1 - x + x² - x³ + x⁴ - ....

Therefore:

  1/(1 + x) = Σₙ₌₀^∞ (-1)ⁿ xⁿ

for:

  |x| < 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: MACLAURIN SERIES OF arctan x

We know:

  1/(1 + x²) = 1 - x² + x⁴ - x⁶ + ....

Since:

  d/dx (arctan x) = 1/(1 + x²),

integrate term by term:

  arctan x = x - x³/3 + x⁵/5 - x⁷/7 + ... + C.

Since:

  arctan 0 = 0,

we get C = 0.

Thus:

  arctan x = x - x³/3 + x⁵/5 - x⁷/7 + ....

or:

  arctan x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ⁺¹/(2n + 1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MACLAURIN SERIES CAN BE USED FOR APPROXIMATION

Suppose we want to approximate:

  sin(0.1).

Instead of directly calculating it, use:

  sin x = x - x³/6 + x⁵/120 - ....

Substitute:

  x = 0.1.

Using the first three terms:

  sin(0.1) ≈ 0.1 - 0.1³/6 + 0.1⁵/120.

Calculate:

  0.1³ = 0.001

and:

  0.1⁵ = 0.00001.

Therefore:

  sin(0.1) ≈ 0.1 - 0.001/6 + 0.00001/120.

So:

  sin(0.1) ≈ 0.0998334

which is extremely close to the actual value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MACLAURIN POLYNOMIALS

If we stop after a finite number of terms, we have a Maclaurin polynomial.

For example, the Maclaurin polynomial of degree 3 for eˣ is:

  P₃(x) = 1 + x + x²/2 + x³/6.

The degree-5 polynomial is:

  P₅(x) = 1 + x + x²/2 + x³/6 + x⁴/24 + x⁵/120.

The complete Maclaurin series is:

  eˣ = 1 + x + x²/2! + x³/3! + ....

So:

  Maclaurin polynomial = finite approximation

while:

  Maclaurin series = infinite expansion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RADIUS OF CONVERGENCE

Every Maclaurin series has a region where it converges.

For example:

  1/(1 - x) = 1 + x + x² + x³ + ...

converges when:

  |x| < 1.

Therefore:

  R = 1.

The initial interval is:

  (-1, 1).

At x = 1:

  1 + 1 + 1 + 1 + ...

diverges.

At x = -1:

  1 - 1 + 1 - 1 + ...

also does not converge in the ordinary sense.

Therefore:

  (-1, 1)

is the interval of convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY MACLAURIN SERIES TO MEMORIZE

  eˣ = Σₙ₌₀^∞ xⁿ/n!                                     (R = ∞)
  sin x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ⁺¹/(2n+1)!                   (R = ∞)
  cos x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ/(2n)!                       (R = ∞)
  1/(1 - x) = Σₙ₌₀^∞ xⁿ                                  (R = 1)
  1/(1 + x) = Σₙ₌₀^∞ (-1)ⁿ xⁿ                            (R = 1)
  ln(1 + x) = Σₙ₌₁^∞ (-1)ⁿ⁺¹ · xⁿ/n                     (R = 1)
  arctan x = Σₙ₌₀^∞ (-1)ⁿ · x²ⁿ⁺¹/(2n+1)                 (R = 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. CONSTRUCTING NEW MACLAURIN SERIES

You don't always need to calculate derivatives from scratch.

You can manipulate known series.

For example:

  eˣ = 1 + x + x²/2! + x³/3! + ....

Replace x with 2x:

  e²ˣ = 1 + 2x + (2x)²/2! + (2x)³/3! + ....

Simplifying:

  e²ˣ = 1 + 2x + 2x² + 4/3 x³ + ....

This technique is called substitution into a known power series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. MACLAURIN SERIES AND FUNCTION APPROXIMATION

The basic concept is:

  f(x) ≈ Pₙ(x)

near:

  x = 0.

For example:

  sin x ≈ x

when x is close to zero.

Why?

Because the Maclaurin series begins:

  sin x = x - x³/6 + x⁵/120 - ....

When x is very small:

  x³, x⁵, x⁷

are much smaller than x.

So the first term provides a good approximation:

  sin x ≈ x.

This approximation is extremely important in calculus, physics, engineering, and numerical analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. KEY FORMULAS TO REMEMBER

  Maclaurin Series:
    f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

  Expanded Maclaurin:
    f(x) = f(0) + f'(0)x + f''(0)/2! · x² + f'''(0)/3! · x³ + ...

  Lagrange Remainder:
    Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · xⁿ⁺¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SIMPLE SUMMARY

The Maclaurin Series is essentially a Taylor Series centered at zero.

The central formula is:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

The process is:

  Function → Derivatives → Evaluate at 0 → Divide by factorial → Multiply by xⁿ → Maclaurin Series

The most important things to master are:

  Know the Maclaurin formula.
  Calculate derivatives correctly.
  Evaluate derivatives at x = 0.
  Recognize patterns.
  Know the common Maclaurin series.
  Use substitution, differentiation, and integration to create new series.
  Find the radius and interval of convergence.
  Use Maclaurin polynomials for approximations.
  Understand the remainder/error.

Once you understand these, Maclaurin Series becomes much easier because many problems reduce to recognizing and manipulating a few fundamental series.

Easy way to remember: Maclaurin series are Taylor series centered at 0. The coefficients are derivatives at 0 divided by factorials. Common series include eˣ, sin x, cos x, 1/(1-x), ln(1+x), and arctan x.
  `,
  examples: [
    "eˣ = 1 + x + x²/2! + x³/3! + ... (R = ∞)",
    "sin x = x - x³/3! + x⁵/5! - ... (R = ∞)",
    "cos x = 1 - x²/2! + x⁴/4! - ... (R = ∞)",
    "1/(1 - x) = 1 + x + x² + x³ + ... (R = 1)",
    "1/(1 + x) = 1 - x + x² - x³ + ... (R = 1)",
    "ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ... (R = 1)",
    "arctan x = x - x³/3 + x⁵/5 - x⁷/7 + ... (R = 1)",
    "e²ˣ = 1 + 2x + 2x² + 4/3 x³ + ... (substitution)",
    "sin(0.1) ≈ 0.1 - 0.1³/6 + 0.1⁵/120 ≈ 0.0998334",
    "Maclaurin = Taylor with a = 0",
  ],
};

export default topic;