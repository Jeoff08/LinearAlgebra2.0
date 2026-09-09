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

The Constant Rule states that the derivative of any constant is zero. This makes intuitive sense because a constant function does not change as its input changes its graph is a horizontal line with slope zero. From the limit definition, the difference quotient for a constant c is (c - c)/h = 0, so the limit is 0 regardless of h. This rule is the simplest differentiation rule and serves as the foundation for differentiating polynomials, where constant terms vanish. For example, if you have a function like f(x) = 10, its rate of change is always zero, so its derivative is 0. Similarly, in physics, if a quantity is constant, its rate of change (e.g., acceleration of a stationary object) is zero.

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

The Power Rule is arguably the most frequently used differentiation rule. It tells us that to differentiate x raised to a constant exponent n, we bring the exponent down as a multiplier and then subtract 1 from the exponent. This rule can be derived from the limit definition using the binomial theorem for positive integers, but it holds for all real exponents (including negative and fractional ones). The Power Rule dramatically simplifies the process of differentiating monomials. For instance, instead of computing a limit for f(x) = x^5, we can immediately write the derivative as 5x^4. This rule is the workhorse of differential calculus and is used in virtually every subsequent differentiation problem.

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

When a function is multiplied by a constant, the derivative is simply the constant times the derivative of the function. This rule reflects the linearity of differentiation: scaling the function scales its rate of change by the same factor. For example, if a car's speed doubles, its acceleration (rate of change of speed) also doubles. This rule follows directly from the limit definition by factoring out the constant from the difference quotient. It is often combined with the Power Rule to differentiate terms like 6x^4, giving 24x^3. The Constant Multiple Rule is essential for handling coefficients in polynomials and other algebraic expressions, allowing us to focus on the variable part first and then multiply by the constant.

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

The Sum Rule tells us that the derivative of a sum of functions is the sum of their derivatives. This is another manifestation of the linearity of the derivative operator. It means we can differentiate each term of a polynomial or any sum separately and then add the results. This rule is extremely practical because it allows us to break down complicated functions into simpler pieces. For instance, to differentiate f(x) = x^3 + x^2, we differentiate x^3 to get 3x^2 and x^2 to get 2x, then add them: 3x^2 + 2x. The Sum Rule is valid for any finite number of terms, so we can apply it repeatedly to polynomials with many terms.

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

The Difference Rule is analogous to the Sum Rule, but for subtraction. It states that the derivative of a difference of two functions is the difference of their derivatives. This follows from the linearity of differentiation and is often used together with the Sum Rule to handle polynomial expressions that include negative terms. For example, to differentiate f(x) = x^5 - 3x^2, we differentiate x^5 to get 5x^4 and subtract the derivative of 3x^2, which is 6x, giving 5x^4 - 6x. This rule ensures that we can handle any polynomial by treating each term individually, regardless of whether they are added or subtracted.

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

Most polynomial differentiation problems require us to use several rules at once. Typically, we apply the Constant Multiple Rule, the Sum/Difference Rule, and the Power Rule in combination. For a polynomial with multiple terms, we differentiate each term individually, applying the appropriate rules, and then combine the results. This systematic approach works for any algebraic function that is a sum of monomials. The ability to combine these basic rules efficiently is a fundamental skill in calculus, enabling us to handle complex expressions with ease. As you practice, you will learn to recognize the structure of a function and apply the correct rules in sequence, often performing the differentiation mentally.

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

When two functions are multiplied together, their derivative is not simply the product of their individual derivatives. Instead, we use the Product Rule: the derivative of a product is the derivative of the first times the second, plus the first times the derivative of the second. This rule arises from the limit definition and is essential for differentiating products of functions that cannot be easily expanded. For example, to differentiate f(x) = x^2(x+3), we set u = x^2 and v = x+3, then apply the rule to get 2x(x+3) + x^2(1) = 3x^2 + 6x. The Product Rule is a cornerstone of calculus and is used extensively in physics, economics, and engineering where multiplicative relationships are common.

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

When one function is divided by another, we use the Quotient Rule. This rule states that the derivative of a quotient is (low times derivative of high minus high times derivative of low) divided by the square of the low. This formula is derived from the Product Rule and the Chain Rule, and it is particularly useful for rational functions. It's important to remember that the order matters: numerator derivative times denominator minus numerator times denominator derivative. A common mnemonic is "low d-high minus high d-low, over low squared." For example, to differentiate f(x) = x^2/(x+1), we get (2x(x+1) - x^2(1))/(x+1)^2 = (x^2+2x)/(x+1)^2. The Quotient Rule is indispensable when dealing with fractions in calculus.

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

The Power Rule is not restricted to positive integer exponents; it works for any real exponent, including negative integers, fractions, and irrational numbers. This extension is called the General Power Rule. For example, to differentiate f(x) = x^{-3}, we apply the same formula: bring down -3 and subtract 1 to get -3x^{-4}, which can be written as -3/x^4. Similarly, for fractional exponents like x^{1/2}, the rule gives (1/2)x^{-1/2}. This generalization makes the Power Rule extremely versatile, allowing us to differentiate root functions and reciprocal powers without special cases. It is one of the key reasons why the power rule is considered fundamental.

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

Fractional exponents represent roots, and the Power Rule applies directly to them. For instance, x^{1/2} is the square root of x. Differentiating it using the Power Rule gives (1/2)x^{-1/2}, which simplifies to 1/(2√x). This is a common derivative encountered in calculus. It is often helpful to rewrite radical expressions as fractional exponents before differentiating, as this makes the application of the Power Rule straightforward. For example, \sqrt{x^5} can be rewritten as x^{5/2}, and then differentiated to (5/2)x^{3/2}. Mastering fractional exponents expands the range of functions you can differentiate easily.

Suppose f(x) = x^(1/2).

Using the Power Rule:
  f'(x) = (1/2)x^(-1/2)

Therefore:
  f'(x) = 1/(2√x)

Remember that x^(1/2) = √x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVATIVE OF A ROOT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before differentiating radical expressions, it is often helpful to rewrite them using fractional exponents. This approach eliminates the complexity of the radical symbol and allows direct application of the Power Rule. For example, the derivative of \sqrt{x^5} is found by first writing it as x^{5/2}, then applying the rule to get (5/2)x^{3/2}. This technique is especially useful for roots with higher indices, such as cube roots or fourth roots. By converting to exponent form, we can use all the algebraic differentiation rules seamlessly. This is a standard method taught in calculus courses and becomes second nature with practice.

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

A rational function is a ratio of two polynomials. To differentiate such functions, we use the Quotient Rule. However, sometimes it's possible to simplify the rational expression first (e.g., by canceling common factors) to make differentiation easier. In general, the Quotient Rule is the standard method. For example, differentiating f(x) = (x^2 + 1)/(x - 3) involves setting u = x^2 + 1 and v = x - 3, then applying the rule to get ((2x)(x-3) - (x^2+1)(1))/(x-3)^2 = (x^2 - 6x - 1)/(x-3)^2. Rational functions appear frequently in calculus, so mastering this rule is essential for solving problems involving rates of change in many scientific contexts.

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

When we have a function raised to a power, such as (g(x))^n, we need to combine the Power Rule with the Chain Rule. The generalized Power Rule states that the derivative is n[g(x)]^{n-1} * g'(x). This is a direct application of the Chain Rule: differentiate the outer power function and multiply by the derivative of the inner function. For example, to differentiate (2x+3)^5, we treat 2x+3 as the inner function. The derivative is 5(2x+3)^4 * 2 = 10(2x+3)^4. This rule is crucial for handling composite algebraic functions and is a key stepping stone to more advanced differentiation techniques.

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

A polynomial is a sum of monomials, each of the form a_n x^n. To differentiate a polynomial, we apply the Power Rule and the Constant Multiple Rule to each term individually, then combine the results using the Sum and Difference Rules. This process is straightforward and mechanical. For example, for f(x) = 3x^4 - 5x^3 + 7x^2 - 2x + 9, we differentiate each term: 12x^3, -15x^2, 14x, -2, and 0, giving f'(x) = 12x^3 - 15x^2 + 14x - 2. Polynomials are among the simplest functions to differentiate, and this skill is foundational for curve sketching, optimization, and many other applications. The derivative of a polynomial is also a polynomial, one degree lower than the original.

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

The differentiation theorems we have covered Constant, Power, Constant Multiple, Sum, Difference, Product, Quotient, and Generalized Power form the essential toolkit for differentiating algebraic functions. They are all derived from the limit definition of the derivative, but they save us from performing tedious limit computations each time. Together, they provide a systematic and efficient way to find derivatives of any algebraic expression. Understanding each theorem's derivation and domain of applicability is crucial; for instance, the Product and Quotient Rules are necessary because differentiation does not distribute over multiplication or division. Mastering these rules is the first major milestone in calculus, and they are used repeatedly in all subsequent topics.

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

Let's apply all the basic rules in a single comprehensive example. We'll differentiate a polynomial that includes multiple terms with coefficients. The process is to apply the Constant Multiple, Power, and Sum/Difference rules term by term. No product or quotient is needed here, but the example demonstrates the typical approach for polynomial differentiation. This is a common type of problem in introductory calculus courses and serves as a practice for solidifying the rules. The derivative is obtained quickly and can be checked by verifying that the degree decreases by one and that coefficients are correctly transformed.

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

The differentiation theorems are important because calculating derivatives directly from the limit definition can become very difficult for complicated functions. For example, finding the derivative of f(x) = 3x^5 - 4x^3 + 7x^2 - 6x + 10 using the limit definition would require substantial algebra, including expanding powers and simplifying complex fractions. Using the differentiation rules, we can obtain the answer almost immediately: f'(x) = 15x^4 - 12x^2 + 14x - 6. These rules make Calculus much more practical. They are used extensively in finding tangent lines, instantaneous velocity, acceleration, critical points, optimization, curve analysis, related rates, graphing functions, and linear approximation. Without them, calculus would be cumbersome and inaccessible.

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

When you see an algebraic function, follow these steps: First, simplify the function if possible (e.g., combine like terms, reduce fractions). This can make differentiation easier and avoid mistakes. Next, identify the structure of the function: is it a power, a sum, a product, a quotient, or a composition? Based on that, choose the appropriate rule(s). For example, x^5 uses the Power Rule; 3x^4 + 2x uses the Sum Rule; x^2(x+1) uses the Product Rule; (x^2+1)/(x-2) uses the Quotient Rule; and (3x+1)^4 uses the General Power Rule (which includes the Chain Rule). Finally, simplify the resulting derivative. With practice, this process becomes automatic, allowing you to differentiate almost any algebraic function quickly and accurately.

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

This table summarizes all the key differentiation rules for algebraic functions. It serves as a handy reference for solving problems. Notice that the General Power Rule encompasses the Chain Rule; it is a special case when the exponent is a function of x. Keep this table accessible as you practice, and soon you will memorize these formulas.

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

The theorems on differentiation of algebraic functions provide the fundamental rules used to calculate derivatives efficiently. They transform the process of differentiation from a laborious limit computation into a straightforward algebraic manipulation. The most important rules are the Constant Rule, Power Rule, Constant Multiple Rule, Sum Rule, Difference Rule, Product Rule, Quotient Rule, and the General Power Rule (which combines the Power Rule with the Chain Rule). These rules are the building blocks for all of differential calculus. They allow us to find the instantaneous rate of change and tangent slope of algebraic functions without repeatedly using the limit definition. Once these rules are mastered, you can move on to more advanced differentiation topics such as the Chain Rule, implicit differentiation, higher-order derivatives, related rates, and applications of derivatives. The power of calculus lies in these elegant, concise rules that unlock the analysis of change.

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