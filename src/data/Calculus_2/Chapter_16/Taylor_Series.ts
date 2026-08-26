// filename: TaylorSeries.ts

const topic = {
  id: "taylor-series",
  title: "Taylor Series",
  summary:
    "A comprehensive guide to Taylor series in calculus. Covers the definition, formula, derivation, Maclaurin series, common series expansions, Taylor polynomials, remainders, and applications.",
  details: `
Taylor Series is one of the most important topics in Calculus 2 and in power-series methods. The main idea is that we can represent a sufficiently smooth function using an infinite polynomial.

Instead of working directly with a complicated function such as:

  eˣ, ln x, sin x, cos x,

we can approximate or represent it using powers of x - a:

  1, (x - a), (x - a)², (x - a)³, ...

The coefficients are determined from the function's derivatives at a particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA OF A TAYLOR SERIES

Suppose we have a function:

  f(x).

We want to construct a polynomial that behaves like f(x) near a particular point:

  x = a.

A Taylor series has the form:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

where:

  f(x) = original function
  a = center of the Taylor series
  f⁽ⁿ⁾(a) = n-th derivative evaluated at a
  n! = factorial
  x - a = distance from the center

Expanded:

  f(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ...

This is the most important formula in this topic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE USE TAYLOR SERIES?

Taylor series allow us to turn complicated functions into polynomial-like expressions.

For example:

  eˣ

is not a polynomial.

But near x = 0, it can be represented by:

  1 + x + x²/2! + x³/3! + ....

This is useful because polynomials are generally easier to:

  evaluate,
  differentiate,
  integrate,
  approximate,
  graph,
  and use in numerical calculations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHERE DOES THE FORMULA COME FROM?

This is important because the Taylor formula is not simply something to memorize.

Suppose we want a polynomial:

  P(x) = c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ....

We want P(x) to behave exactly like f(x) at x = a.

First condition:

We require:

  P(a) = f(a).

Because all terms containing x - a become zero:

  c₀ = f(a).

Therefore:

  c₀ = f(a).

Second condition:

We also want:

  P'(a) = f'(a).

Differentiate:

  P'(x) = c₁ + 2c₂(x - a) + 3c₃(x - a)² + ....

At x = a:

  P'(a) = c₁.

Therefore:

  c₁ = f'(a).

Third condition:

Differentiate again:

  P''(x) = 2c₂ + 6c₃(x - a) + ....

At x = a:

  P''(a) = 2c₂.

Therefore:

  c₂ = f''(a)/2!.

Fourth condition:

Similarly:

  c₃ = f'''(a)/3!.

This pattern continues forever:

  cₙ = f⁽ⁿ⁾(a)/n!

which produces the Taylor series formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE TAYLOR SERIES FORMULA

The complete formula is:

  f(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ...

or using sigma notation:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

provided the Taylor series actually converges to f(x) in the region being considered.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. UNDERSTANDING EACH PART

Look at:

  f⁽ⁿ⁾(a)/n! · (x - a)ⁿ.

There are three major components.

Derivative:

  f⁽ⁿ⁾(a)

tells us information about the function's behavior at a.

Factorial:

  n!

scales the coefficient.

Power:

  (x - a)ⁿ

determines how far we are from the center.

So the Taylor series is essentially:

  Derivative information × Power of distance from center

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TAYLOR POLYNOMIAL VS. TAYLOR SERIES

These two concepts are related but different.

A Taylor polynomial uses only a finite number of terms.

For example:

  P₃(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³.

A Taylor series continues indefinitely:

  f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ....

Therefore:

  Taylor polynomial = finite
  Taylor series = infinite

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. MACLAURIN SERIES

A Maclaurin series is simply a Taylor series centered at:

  a = 0.

Substituting a = 0 into the Taylor formula gives:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

Expanded:

  f(x) = f(0) + f'(0)x + f''(0)/2! · x² + f'''(0)/3! · x³ + ....

So:

  Every Maclaurin series is a Taylor series, but a Taylor series does not have to be centered at zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: TAYLOR SERIES OF eˣ

Let's derive the Taylor series of:

  f(x) = eˣ

centered at:

  a = 0.

First derivative:

  f'(x) = eˣ.

Second derivative:

  f''(x) = eˣ.

Third derivative:

  f'''(x) = eˣ.

Every derivative is:

  eˣ.

At x = 0:

  f(0) = 1
  f'(0) = 1
  f''(0) = 1

and so on.

Therefore:

  eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ....

Thus:

  eˣ = Σₙ₌₀^∞ xⁿ/n!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: TAYLOR SERIES OF sin x

Let:

  f(x) = sin x.

Its derivatives cycle:

  f(x) = sin x
  f'(x) = cos x
  f''(x) = -sin x
  f'''(x) = -cos x
  f⁽⁴⁾(x) = sin x.

At x = 0:

  sin 0 = 0
  cos 0 = 1.

Therefore:

  f(0) = 0
  f'(0) = 1
  f''(0) = 0
  f'''(0) = -1.

So the Taylor series becomes:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ....

Notice that only odd powers appear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: TAYLOR SERIES OF cos x

Let:

  f(x) = cos x.

Its derivatives are:

  cos x, -sin x, -cos x, sin x, cos x, ...

At x = 0:

  cos 0 = 1
  -sin 0 = 0.

Therefore:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ....

Only even powers appear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: TAYLOR SERIES OF ln(1 + x)

This one is especially important.

Start with:

  f(x) = ln(1 + x).

Its derivatives are:

  f'(x) = 1/(1 + x),
  f''(x) = -1/(1 + x)²,
  f'''(x) = 2/(1 + x)³.

At x = 0:

  f(0) = 0
  f'(0) = 1
  f''(0) = -1
  f'''(0) = 2.

Substituting these into the Taylor formula gives:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ....

or:

  ln(1 + x) = Σₙ₌₁^∞ (-1)ⁿ⁺¹ · xⁿ/n

within its interval of convergence, with endpoints checked separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: TAYLOR SERIES CENTERED AT a ≠ 0

Taylor series don't have to be centered at zero.

Consider:

  f(x) = ln x

centered at:

  a = 1.

We have:

  f(1) = 0
  f'(x) = 1/x

so:

  f'(1) = 1.

Next:

  f''(x) = -1/x²

and:

  f''(1) = -1.

Next:

  f'''(x) = 2/x³

so:

  f'''(1) = 2.

Therefore:

  ln x = (x - 1) - (x - 1)²/2 + (x - 1)³/3 - (x - 1)⁴/4 + ....

Thus:

  ln x = Σₙ₌₁^∞ (-1)ⁿ⁺¹ · (x - 1)ⁿ/n

around x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TAYLOR SERIES AS AN APPROXIMATION

One of the biggest uses of Taylor series is approximation.

Suppose we want to approximate:

  e^0.1.

Instead of using a calculator, we can use:

  eˣ = 1 + x + x²/2! + x³/3! + ....

Using the first four terms:

  e^0.1 ≈ 1 + 0.1 + 0.1²/2 + 0.1³/6.

Calculate:

  = 1 + 0.1 + 0.005 + 0.0001667.

Thus:

  e^0.1 ≈ 1.1051667

which is very close to the actual value.

The more terms we use, generally the better the approximation becomes when we are within a suitable convergence region.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TAYLOR POLYNOMIAL NOTATION

The Taylor polynomial of degree n centered at a is:

  Pₙ(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

For example, the third-degree Taylor polynomial is:

  P₃(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³

The fourth-degree polynomial is:

  P₄(x) = P₃(x) + f⁽⁴⁾(a)/4! · (x - a)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. TAYLOR SERIES AND DERIVATIVES

A very important feature of Taylor series is that the coefficients are directly connected to derivatives.

For:

  f(x) = c₀ + c₁(x - a) + c₂(x - a)² + c₃(x - a)³ + ...,

we have:

  c₀ = f(a),
  c₁ = f'(a),
  c₂ = f''(a)/2!,
  c₃ = f'''(a)/3!,

and generally:

  cₙ = f⁽ⁿ⁾(a)/n!

This is why the derivatives are so important when constructing a Taylor series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. TAYLOR SERIES REMAINDER

A Taylor polynomial is an approximation, so naturally we want to know:

  How much error did we make?

The difference between the actual function and the Taylor polynomial is called the remainder.

  Rₙ(x) = f(x) - Pₙ(x)

One important form is the Lagrange remainder:

  Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

where c is some number between a and x.

This formula is extremely useful for estimating the error of a Taylor approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. COMMON MACLAURIN SERIES TO MEMORIZE

Exponential:

  eˣ = 1 + x + x²/2! + x³/3! + ...

Sine:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ...

Cosine:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ...

Geometric:

  1/(1 - x) = 1 + x + x² + x³ + ... (|x| < 1)

Natural Logarithm:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ... (-1 < x ≤ 1)

Arctangent:

  arctan x = x - x³/3 + x⁵/5 - x⁷/7 + ... (|x| ≤ 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. KEY FORMULAS TO REMEMBER

  Taylor Series:
    f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

  Expanded Taylor Series:
    f(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + ...

  Maclaurin Series:
    f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ

  Taylor Polynomial:
    Pₙ(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

  Lagrange Remainder:
    Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SIMPLE SUMMARY

The Taylor Series of a function is an infinite polynomial constructed from the function's derivatives at a chosen center a:

  f(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ...

The key idea is:

  The value of the function and all of its derivatives at one point determine the coefficients of the Taylor series.

For Calculus 2, the most important skills are to derive Taylor series, recognize common Maclaurin series, construct Taylor polynomials, determine intervals of convergence, approximate functions, and estimate the error using the remainder.

Easy way to remember: Taylor series represent a function as an infinite polynomial using derivatives at a point. Maclaurin is a Taylor series centered at 0. The remainder tells us the error of the approximation.
  `,
  examples: [
    "eˣ = 1 + x + x²/2! + x³/3! + ... (Maclaurin)",
    "sin x = x - x³/3! + x⁵/5! - ... (Maclaurin)",
    "cos x = 1 - x²/2! + x⁴/4! - ... (Maclaurin)",
    "1/(1 - x) = 1 + x + x² + x³ + ... (|x| < 1)",
    "ln(1 + x) = x - x²/2 + x³/3 - ... (-1 < x ≤ 1)",
    "arctan x = x - x³/3 + x⁵/5 - ... (|x| ≤ 1)",
    "ln x = (x - 1) - (x - 1)²/2 + (x - 1)³/3 - ... (Taylor around 1)",
    "Pₙ(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ",
    "Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹",
    "Maclaurin = Taylor with a = 0",
  ],
};

export default topic;