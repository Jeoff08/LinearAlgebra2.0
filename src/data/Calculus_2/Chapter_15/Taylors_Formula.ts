// filename: TaylorsFormula.ts

const topic = {
  id: "taylors-formula",
  title: "Taylor's Formula",
  summary:
    "A comprehensive guide to Taylor's Formula for approximating functions using polynomials. Covers Taylor polynomials, Taylor series, Maclaurin series, Lagrange remainder, and applications.",
  details: `
Taylor's Formula is one of the most important ideas in calculus for approximating complicated functions using polynomials.

The main idea is:

  A sufficiently smooth function can be approximated near a particular point by a polynomial whose coefficients are determined by the function's derivatives at that point.

This is extremely useful because polynomials are much easier to evaluate, differentiate, integrate, and analyze than many complicated functions.

For example, functions such as:

  eˣ, sin x, cos x, ln x

can be represented or approximated near a chosen point using Taylor polynomials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA OF TAYLOR'S FORMULA

Suppose we have a function:

  f(x)

and we want to approximate it near:

  x = a.

We construct a polynomial:

  Pₙ(x)

that behaves like f(x) near x = a.

The Taylor polynomial of degree n centered at a is:

  Pₙ(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ... + f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

or, more compactly:

  Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

where:

  f⁽ᵏ⁾(a)

means the k-th derivative evaluated at x = a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DOES TAYLOR'S FORMULA WORK?

Taylor's Formula works because we construct the polynomial so that it matches the function's:

  value,
  first derivative,
  second derivative,
  third derivative,
  and so on

at the point x = a.

For example, if we want a polynomial approximation around a, we require:

  Pₙ(a) = f(a)
  Pₙ'(a) = f'(a)
  Pₙ''(a) = f''(a)

and so forth.

The more derivatives we match, the more closely the polynomial generally approximates the function near a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNDERSTANDING THE TERMS

Consider:

  P₃(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³.

Each term has a specific purpose.

Constant term:

  f(a)

gives the function's value at a.

Linear term:

  f'(a)(x - a)

incorporates the slope at a.

Quadratic term:

  f''(a)/2! · (x - a)²

incorporates the curvature.

Cubic term:

  f'''(a)/3! · (x - a)³

provides an additional correction to make the approximation more accurate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE FACTORIAL IN TAYLOR'S FORMULA

You will notice the factorials:

  2!, 3!, 4!, ...

Recall:

  2! = 2(1) = 2
  3! = 3(2)(1) = 6
  4! = 4(3)(2)(1) = 24.

In general:

  n! = n(n - 1)(n - 2)...2(1)

and:

  0! = 1.

The factorial is essential because it naturally appears when differentiating powers such as:

  (x - a)ⁿ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TAYLOR POLYNOMIAL OF DEGREE 1

For n = 1:

  P₁(x) = f(a) + f'(a)(x - a).

This is exactly the equation of the tangent line.

Therefore:

  The first-degree Taylor polynomial is the tangent-line approximation.

For example, for:

  f(x) = √x

around:

  a = 4,

we have:

  f(4) = 2

and:

  f'(x) = 1/(2√x).

Thus:

  f'(4) = 1/4.

Therefore:

  P₁(x) = 2 + (1/4)(x - 4).

So near x = 4:

  √x ≈ 2 + (1/4)(x - 4).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TAYLOR POLYNOMIAL OF DEGREE 2

A second-degree Taylor polynomial is:

  P₂(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)²

This includes information about the function's curvature.

For example, suppose:

  f(x) = eˣ

and a = 0.

We have:

  f(0) = 1,
  f'(x) = eˣ,

so:

  f'(0) = 1.

Also:

  f''(x) = eˣ

and therefore:

  f''(0) = 1.

Thus:

  P₂(x) = 1 + x + x²/2.

Therefore:

  eˣ ≈ 1 + x + x²/2

near x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. TAYLOR POLYNOMIAL OF DEGREE 3

For n = 3:

  P₃(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³.

Using eˣ again:

  f(x) = eˣ.

Every derivative of eˣ is eˣ.

Therefore, at a = 0:

  f(0) = 1,
  f'(0) = 1,
  f''(0) = 1,
  f'''(0) = 1.

Hence:

  P₃(x) = 1 + x + x²/2 + x³/6.

This is more accurate near x = 0 than the degree-2 approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. TAYLOR POLYNOMIAL OF DEGREE n

The general formula is:

  Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

or expanded:

  Pₙ(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + ... + f⁽ⁿ⁾(a)/n! · (x - a)ⁿ.

The number n determines the degree of the polynomial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TAYLOR'S FORMULA WITH REMAINDER

The Taylor polynomial gives an approximation, but we also need to understand the error.

Taylor's Formula can be written as:

  f(x) = Pₙ(x) + Rₙ(x)

where:

  Rₙ(x)

is called the remainder or error term.

Thus:

  Function = Taylor polynomial + Error

This is extremely important when we want to know how accurate an approximation is.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LAGRANGE FORM OF THE REMAINDER

One of the most common forms of the remainder is the Lagrange remainder:

  Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

for some number c between a and x.

Therefore:

  f(x) = Pₙ(x) + f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

This gives us a way to estimate the error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: APPROXIMATING e^0.1

Suppose we want to approximate:

  e^0.1.

Using the Taylor polynomial centered at 0:

  eˣ = 1 + x + x²/2! + x³/3! + ...

Using the degree-3 polynomial:

  P₃(x) = 1 + x + x²/2 + x³/6.

Substitute x = 0.1:

  P₃(0.1) = 1 + 0.1 + 0.1²/2 + 0.1³/6.

Calculate:

  = 1 + 0.1 + 0.005 + 0.0001667.

Therefore:

  e^0.1 ≈ 1.1051667.

The actual value is approximately:

  1.1051702,

so the approximation is extremely close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY DOES INCREASING THE DEGREE IMPROVE THE APPROXIMATION?

Suppose we have:

  P₁(x), P₂(x), P₃(x), P₄(x),

and so on.

As we add more terms, the polynomial generally captures more of the function's local behavior.

For example:

  P₁(x) = 1 + x
  P₂(x) = 1 + x + x²/2
  P₃(x) = 1 + x + x²/2 + x³/6
  P₄(x) = 1 + x + x²/2 + x³/6 + x⁴/24.

Near x = 0, these increasingly approximate eˣ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TAYLOR SERIES

If we allow the degree n to continue indefinitely, we obtain the Taylor series:

  f(x) = Σ_{n=0}∞ f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

when the series converges to the function.

Expanded:

  f(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + f'''(a)/3! · (x - a)³ + ...

A Taylor polynomial uses finitely many terms.

A Taylor series uses infinitely many terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MACLAURIN SERIES

A special case of Taylor's Formula occurs when:

  a = 0.

This is called a Maclaurin series.

The formula becomes:

  f(x) = f(0) + f'(0)x + f''(0)/2! · x² + f'''(0)/3! · x³ + ...

or:

  f(x) = Σ_{n=0}∞ f⁽ⁿ⁾(0)/n! · xⁿ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT MACLAURIN SERIES TO MEMORIZE

Several functions have especially important Taylor/Maclaurin series.

Exponential Function:

  eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...

Sine Function:

  sin x = x - x³/3! + x⁵/5! - x⁷/7! + ...

Cosine Function:

  cos x = 1 - x²/2! + x⁴/4! - x⁶/6! + ...

Geometric-Type Series:

For appropriate values of x:

  1/(1 - x) = 1 + x + x² + x³ + ...

Natural Logarithm:

For |x| < 1:

  ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ...

These series are extremely useful in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. TAYLOR POLYNOMIAL FOR sin x

Let's derive the Taylor polynomial of sin x around 0.

Let:

  f(x) = sin x.

The derivatives cycle:

  f(x) = sin x
  f'(x) = cos x
  f''(x) = -sin x
  f'''(x) = -cos x
  f⁽⁴⁾(x) = sin x.

At x = 0:

  f(0) = 0
  f'(0) = 1
  f''(0) = 0
  f'''(0) = -1.

Therefore:

  P₃(x) = 0 + x + 0/2! · x² - 1/3! · x³.

Thus:

  P₃(x) = x - x³/6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. TAYLOR POLYNOMIAL FOR cos x

Let:

  f(x) = cos x.

The derivatives are:

  cos x,
  -sin x,
  -cos x,
  sin x.

At 0:

  f(0) = 1,
  f'(0) = 0,
  f''(0) = -1,
  f'''(0) = 0.

Thus:

  P₃(x) = 1 - x²/2.

Therefore:

  cos x ≈ 1 - x²/2

near x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. TAYLOR'S FORMULA AND LOCAL APPROXIMATION

Taylor's Formula is particularly useful when x is close to the center a.

For example, if the polynomial is centered at:

  a = 0,

then the approximation is generally most useful for values of x near 0.

If the polynomial is centered at:

  a = 5,

then the approximation is generally best near x = 5.

This is why the center of the Taylor polynomial matters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. TAYLOR APPROXIMATION AROUND A POINT OTHER THAN ZERO

Consider:

  f(x) = ln x

centered at:

  a = 1.

We have:

  f(1) = 0.

First derivative:

  f'(x) = 1/x,

so:

  f'(1) = 1.

Second derivative:

  f''(x) = -1/x²,

so:

  f''(1) = -1.

Third derivative:

  f'''(x) = 2/x³,

so:

  f'''(1) = 2.

Therefore:

  P₃(x) = 0 + (x - 1) - (x - 1)²/2 + 2/6 · (x - 1)³.

Thus:

  P₃(x) = (x - 1) - (x - 1)²/2 + (x - 1)³/3.

This approximates ln x near x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. TAYLOR'S FORMULA AND NUMERICAL APPROXIMATION

One of the biggest applications is calculating values that may be difficult to evaluate directly.

For example:

  √(4.1)

can be approximated using a Taylor polynomial centered at 4.

Similarly, Taylor approximations can be used to estimate:

  e^0.05,
  sin(0.1),
  cos(0.2),
  ln(1.02),

and many other quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. TAYLOR'S FORMULA AND DERIVATIVES

Taylor's Formula also gives us an interesting interpretation of derivatives.

The coefficients of the Taylor polynomial contain information about the function:

  f(a) tells us its value,
  f'(a) tells us its slope,
  f''(a) tells us about curvature,
  f'''(a) describes higher-order behavior.

Thus, Taylor's Formula essentially uses the derivatives of a function to reconstruct its local behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. TAYLOR'S FORMULA AND LIMITS

Taylor expansions can also make difficult limits much easier.

For example:

  lim_{x→0} (eˣ - 1 - x)/x².

Using:

  eˣ = 1 + x + x²/2 + x³/6 + ...,

we obtain:

  eˣ - 1 - x = x²/2 + x³/6 + ....

Therefore:

  (eˣ - 1 - x)/x² = 1/2 + x/6 + ....

As x → 0:

  1/2.

Taylor expansions can therefore reveal the dominant terms of a function near a point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. ERROR AND ACCURACY

Suppose:

  f(x) = Pₙ(x) + Rₙ(x).

Then the approximation error is:

  f(x) - Pₙ(x) = Rₙ(x).

Using the Lagrange remainder:

  Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

for some c between a and x.

If we can find a number M such that:

  |f⁽ⁿ⁺¹⁾(c)| ≤ M,

then:

  |Rₙ(x)| ≤ M/(n + 1)! · |x - a|ⁿ⁺¹.

This gives an error bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. WHY FACTORIALS MAKE TAYLOR APPROXIMATIONS POWERFUL

Notice the denominator:

  (n + 1)!.

Factorials grow very rapidly:

  5! = 120,
  10! = 3,628,800,
  15! = 1,307,674,368,000.

Therefore, Taylor-series terms can become extremely small as n increases, especially when x - a is small.

This is one reason Taylor polynomials can provide highly accurate approximations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. TAYLOR POLYNOMIAL VS. TAYLOR SERIES

These two terms are closely related but should not be confused.

Taylor Polynomial:

Finite number of terms:

  Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

Example:

  P₃(x) = 1 + x + x²/2 + x³/6.

Taylor Series:

Infinitely many terms:

  Σ_{k=0}∞ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

For eˣ:

  eˣ = 1 + x + x²/2! + x³/3! + ....

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A STEP-BY-STEP METHOD FOR FINDING A TAYLOR POLYNOMIAL

When asked to find the Taylor polynomial of degree n centered at a:

Step 1: Identify the function

  f(x)

Step 2: Find derivatives

Calculate:

  f'(x), f''(x), ..., f⁽ⁿ⁾(x).

Step 3: Evaluate each derivative at a

Find:

  f(a), f'(a), f''(a), ..., f⁽ⁿ⁾(a).

Step 4: Substitute into the formula

  Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ.

Step 5: Simplify

Write the final polynomial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. EXAMPLE: DEGREE-4 TAYLOR POLYNOMIAL FOR eˣ

Find the degree-4 Taylor polynomial centered at 0.

Since every derivative of eˣ is eˣ:

  f(0) = f'(0) = f''(0) = f'''(0) = f⁽⁴⁾(0) = 1.

Therefore:

  P₄(x) = 1 + x + x²/2! + x³/3! + x⁴/4!.

Thus:

  P₄(x) = 1 + x + x²/2 + x³/6 + x⁴/24.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. KEY FORMULAS TO REMEMBER

  Taylor Polynomial:
    Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

  Taylor's Formula with Remainder:
    f(x) = Pₙ(x) + Rₙ(x)

  Lagrange Remainder:
    Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

  Maclaurin Series (a = 0):
    f(x) = Σ_{n=0}∞ f⁽ⁿ⁾(0)/n! · xⁿ

  Important Series:
    eˣ = 1 + x + x²/2! + x³/3! + ...
    sin x = x - x³/3! + x⁵/5! - ...
    cos x = 1 - x²/2! + x⁴/4! - ...
    1/(1 - x) = 1 + x + x² + x³ + ...
    ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. MAIN APPLICATIONS OF TAYLOR'S FORMULA

Taylor's Formula is used for:

1. Numerical approximation

Estimating values of complicated functions.

2. Evaluating difficult limits

Especially limits involving 0/0.

3. Error estimation

Determining how accurate an approximation is.

4. Solving differential equations

Taylor expansions can provide approximate solutions.

5. Physics and engineering

Many complicated physical models are approximated using polynomials.

6. Computer calculations

Computers can approximate functions such as:

  eˣ, sin x, cos x, ln x

using polynomial calculations.

7. Understanding local behavior

Taylor's Formula describes how a function behaves near a particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. SIMPLE SUMMARY

The most important formula to remember is:

  Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ

or:

  Pₙ(x) = f(a) + f'(a)(x - a) + f''(a)/2! · (x - a)² + ... + f⁽ⁿ⁾(a)/n! · (x - a)ⁿ

Taylor's Formula with the remainder is:

  f(x) = Pₙ(x) + Rₙ(x)

with the Lagrange remainder:

  Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹

for some c between a and x.

And when a = 0, the Taylor series becomes the Maclaurin series:

  f(x) = f(0) + f'(0)x + f''(0)/2! · x² + f'''(0)/3! · x³ + ...

The central idea:

  Complicated function → Polynomial approximation

The closer x is to the center a, and the more appropriate Taylor terms we include, the more accurately the polynomial can represent the original function.

Easy way to remember: Taylor polynomials match the function and its derivatives at a point. The more terms you include, the better the approximation near that point.
  `,
  examples: [
    "eˣ ≈ 1 + x + x²/2 + x³/6 (degree 3 around 0)",
    "sin x ≈ x - x³/6 (degree 3 around 0)",
    "cos x ≈ 1 - x²/2 (degree 3 around 0)",
    "ln x ≈ (x - 1) - (x - 1)²/2 + (x - 1)³/3 (around 1)",
    "e^0.1 ≈ 1.1051667 (actual ≈ 1.1051702)",
    "Pₙ(x) = Σ_{k=0}ⁿ f⁽ᵏ⁾(a)/k! · (x - a)ᵏ",
    "Rₙ(x) = f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x - a)ⁿ⁺¹",
    "Maclaurin series: a = 0",
  ],
};

export default topic;