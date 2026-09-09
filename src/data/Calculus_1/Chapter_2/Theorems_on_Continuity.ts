// filename: theorems-on-continuity.ts

const topic = {
  id: "theorems-on-continuity",
  title: "Theorems on Continuity",
  summary:
    "Rules explaining how continuity is preserved when functions are combined through addition, subtraction, multiplication, division, powers, roots, and composition.",
  details: `
After learning what it means for a function to be continuous at a number, the next important topic is the Theorems on Continuity. These theorems explain how continuity behaves when functions are combined through mathematical operations such as addition, subtraction, multiplication, division, powers, roots, and composition. They make it easier to determine whether complicated functions are continuous without checking the three conditions of continuity every single time. Recall that a function f is continuous at x = a if lim(x→a) f(x) = f(a). The theorems on continuity allow us to use already known continuous functions to build more complicated continuous functions. Understanding these theorems is essential because they provide a systematic way to analyse the continuity of complex expressions, which is crucial for applying the Intermediate Value Theorem, the Extreme Value Theorem, and for understanding differentiability and integrability.

Recall that a function f is continuous at x = a if:
  lim(x→a) f(x) = f(a)

The theorems on continuity allow us to use already known continuous functions to build more complicated continuous functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant function is one of the simplest types of functions, and it is continuous everywhere. If f(x) = c, where c is a fixed real number, then no matter what value x approaches, the output remains c. This means that the limit of a constant function as x approaches any number a is simply c, which equals f(a). Since the function value and the limit agree for every real number, a constant function has no breaks, holes, or jumps anywhere on its domain. This theorem is the starting point for building more complex continuous functions because constants are the building blocks of polynomials and many other expressions. For example, f(x) = 7 is continuous for all real numbers because its graph is a horizontal line that never changes. This theorem also justifies why adding a constant to a continuous function does not affect its continuity.

A constant function is continuous everywhere.

If f(x) = c, where c is a constant, then:
  f(x) is continuous for all real numbers

Example:
  f(x) = 7

No matter what value x approaches:
  f(x) = 7

Therefore:
  lim(x→a) 7 = 7 = f(a)

So:
  f(x) = 7 is continuous everywhere

Explanation:
  A constant function never changes its value. Since there are no jumps, holes, or breaks, it is continuous at every real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IDENTITY FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The identity function f(x) = x is also continuous everywhere. This function simply returns the input as the output, so its graph is a straight line through the origin with slope 1. As x approaches any number a, the function value approaches a, and f(a) = a. Since the limit equals the function value, the identity function has no breaks or jumps. This theorem is important because the identity function is the building block for all polynomial functions. For instance, powers of x, such as x² and x³, are derived from the identity function. Knowing that the identity function is continuous helps us prove that all polynomial functions are continuous. This theorem also underlies the continuity of linear functions, since any linear function can be seen as a combination of the identity function and constants.

The identity function:
  f(x) = x

is continuous for all real numbers.

This means:
  lim(x→a) x = a = f(a)

Example:
  At x = 5, we have:
    f(5) = 5
  and:
    lim(x→5) x = 5

Since the limit equals the function value, the function is continuous.

Therefore:
  f(x) = x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SUM THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) and g(x) are both continuous at x = a, then their sum f(x) + g(x) is also continuous at x = a. This theorem follows from the limit law for sums: the limit of a sum is the sum of the limits. Since each function approaches its respective value, the sum approaches the sum of those values. This means that adding two continuous functions produces another continuous function, provided both are continuous at the point. This theorem is used extensively in constructing polynomials, which are sums of monomials. For example, if f(x) = x² and g(x) = 3x, both are continuous everywhere, so their sum f(x) + g(x) = x² + 3x is also continuous everywhere. This theorem also applies to sums of more than two functions by repeated application. It is a powerful tool for building continuous functions from simpler parts.

If f(x) and g(x) are both continuous at x = a, then:
  f(x) + g(x)

is also continuous at x = a.

Example:
  Let f(x) = x² and g(x) = 3x.

  Both functions are continuous everywhere.

  Therefore:
    f(x) + g(x) = x² + 3x

  is also continuous everywhere.

Explanation:
  If two functions have no breaks at a particular point, adding them together will also produce a function with no break at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENCE THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then their difference f(x) - g(x) is also continuous at x = a. This theorem is analogous to the sum theorem and follows from the limit law for differences. Subtracting a continuous function from another continuous function preserves continuity, because the limit of the difference equals the difference of the limits. This is useful for constructing functions like f(x) = x² - 2x, where both x² and 2x are continuous, so their difference is continuous everywhere. The difference theorem, together with the sum theorem, justifies the continuity of polynomials, since polynomials are sums of terms with positive and negative coefficients. Understanding this theorem helps in analysing functions that involve subtraction, such as when finding the difference between two quantities in a model.

If f and g are continuous at x = a, then:
  f(x) - g(x)

is also continuous at x = a.

Example:
  Let f(x) = x² and g(x) = 2x.

  Then:
    f(x) - g(x) = x² - 2x

  Since both functions are continuous everywhere:
    x² - 2x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTANT MULTIPLE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous at x = a, and c is any constant, then c f(x) is also continuous at x = a. This theorem follows from the limit law for constant multiples: the limit of a constant times a function is the constant times the limit of the function. Multiplying a continuous function by a constant scales the output values but does not introduce any breaks, holes, or jumps. For example, if f(x) = x² is continuous everywhere, then 5f(x) = 5x² is also continuous everywhere. This theorem is particularly useful when dealing with coefficients in polynomial functions or when scaling models in applications. It also explains why vertical stretches and compressions do not affect the continuity of a function. Together with the sum theorem, it allows us to form any linear combination of continuous functions.

If f(x) is continuous at x = a, and c is a constant, then:
  c f(x)

is also continuous at x = a.

Example:
  Suppose f(x) = x².

  Since x² is continuous everywhere, multiplying it by 5 gives:
    5f(x) = 5x²

  Therefore:
    5x² is continuous everywhere

Explanation:
  Multiplying a continuous function by a constant changes the height or scale of the graph, but it does not create holes or breaks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PRODUCT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then their product f(x)g(x) is also continuous at x = a. This theorem follows from the limit law for products: the limit of a product is the product of the limits. Multiplying two continuous functions produces another continuous function because the product of two numbers that are close to their respective limits is close to the product of those limits. For example, if f(x) = x and g(x) = x + 2, both are continuous everywhere, so their product x(x + 2) = x² + 2x is continuous everywhere. This theorem is essential for understanding why polynomial functions are continuous: polynomials are built from products of x and constants. It also applies to more complex products, such as the product of a polynomial and a trigonometric function, provided both are continuous. This theorem is a cornerstone for building continuous functions from simpler components.

If f and g are continuous at x = a, then:
  f(x)g(x)

is also continuous at x = a.

Example:
  Let f(x) = x and g(x) = x + 2.

  Both functions are continuous everywhere.

  Their product is:
    f(x)g(x) = x(x + 2) = x² + 2x

  Therefore:
    x² + 2x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. QUOTIENT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then the quotient f(x)/g(x) is continuous at x = a, provided that g(a) ≠ 0. This theorem follows from the limit law for quotients: the limit of a quotient is the quotient of the limits, provided the denominator limit is not zero. The condition g(a) ≠ 0 is crucial because division by zero is undefined. For example, consider f(x) = x + 1 and g(x) = x - 2. The quotient h(x) = (x + 1)/(x - 2) is continuous everywhere except at x = 2, where the denominator is zero. At x = 2, the function is not defined, so it is not continuous there. This theorem is fundamental for rational functions, which are quotients of polynomials, and it explains why rational functions are continuous on their domains everywhere the denominator is non‑zero. Understanding this theorem helps in identifying discontinuities in rational functions and other expressions involving division.

If f and g are continuous at x = a, then:
  f(x)/g(x)

is continuous at x = a, provided:
  g(a) ≠ 0

Example:
  Consider f(x) = x + 1 and g(x) = x - 2.

  The quotient is:
    h(x) = (x + 1)/(x - 2)

  Both numerator and denominator are continuous everywhere.

  However, the denominator becomes zero when x = 2.

  Therefore:
    h(x) is continuous for x ≠ 2

  The function is not continuous at x = 2 because division by zero is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POWER THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous at x = a, then [f(x)]ⁿ is continuous at x = a, where n is a positive integer. This theorem follows from repeated application of the product theorem: raising a continuous function to a positive integer power is equivalent to multiplying the function by itself n times. Since each multiplication preserves continuity, the power is also continuous. For example, if f(x) = x + 1, then (x + 1)³ is continuous everywhere because x + 1 is continuous and we multiply it by itself three times. This theorem explains why polynomial functions are continuous: any power of x is continuous, and sums and products of these powers are continuous. It also applies to more general functions, such as (sin(x))², which is continuous because sin(x) is continuous. The power theorem is a key building block for constructing continuous functions.

If f(x) is continuous at x = a, then:
  [f(x)]ⁿ

is continuous at x = a, where n is a positive integer.

Example:
  Suppose f(x) = x + 1.

  Then:
    [f(x)]³ = (x + 1)³

  Since x + 1 is continuous everywhere, its cube is also continuous everywhere.

  Therefore:
    (x + 1)³ is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROOT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous, then the nth root of f(x), denoted ⁿ√(f(x)), is continuous wherever the expression is defined. For even roots, such as square roots, we require f(x) ≥ 0 because the square root of a negative number is not real. For odd roots, the function is continuous for all real numbers. This theorem follows from the continuity of the root function itself. For example, f(x) = √(x + 4) is continuous on the interval [-4, ∞) because x + 4 ≥ 0 for x ≥ -4. At x = -4, the domain endpoint, the function is continuous from the right. This theorem is important for analysing functions that involve roots, such as in physics and engineering where square roots appear in formulas for speed, distance, and energy. Understanding where roots are defined helps in determining the domain and continuity of more complex expressions.

If f(x) is continuous, then:
  ⁿ√(f(x))

is continuous wherever the expression is defined.

For an even root, √(f(x)), we must have:
  f(x) ≥ 0

Example:
  Consider f(x) = √(x + 4).

  The expression inside the square root must satisfy:
    x + 4 ≥ 0

  Therefore:
    x ≥ -4

  The function is continuous on:
    [-4, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POLYNOMIAL FUNCTIONS ARE CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important theorems is that every polynomial function is continuous for all real numbers. A polynomial has the general form P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. This result follows from the earlier theorems: the identity function x is continuous, and by the power theorem, xⁿ is continuous for any positive integer n. Then, by the constant multiple theorem, aₙxⁿ is continuous, and by repeated application of the sum theorem, the sum of all these terms is continuous. Therefore, any polynomial is continuous everywhere. For example, P(x) = 3x⁴ - 2x³ + 5x - 7 is continuous for all real numbers. This theorem is extremely useful because polynomials appear in so many areas of mathematics and its applications. Knowing that polynomials are continuous allows us to apply the Intermediate Value Theorem and other important results to them without additional verification.

A polynomial has the general form:
  P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

Example:
  P(x) = 3x⁴ - 2x³ + 5x - 7

This function is continuous for every real number.

Therefore:
  P(x) is continuous on (-∞, ∞)

Explanation:
  Polynomials are built using constants, powers of x, addition, subtraction, and multiplication. Since these operations preserve continuity, every polynomial is continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTIONS ARE CONTINUOUS ON THEIR DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function has the form R(x) = P(x)/Q(x), where P(x) and Q(x) are polynomials. A rational function is continuous everywhere it is defined. In other words, it is continuous for all x such that Q(x) ≠ 0. This follows from the quotient theorem: polynomials are continuous, and the quotient of two continuous functions is continuous where the denominator is not zero. For example, f(x) = (x² + 1)/(x - 3) is continuous for all x except x = 3. At x = 3, the function is undefined (division by zero), so it cannot be continuous there. Rational functions often have vertical asymptotes at the points where the denominator is zero, which correspond to discontinuities. Understanding this theorem helps in identifying the domain of rational functions and in analysing their behaviour near asymptotes.

A rational function has the form:
  R(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials.

A rational function is continuous everywhere it is defined.

Therefore:
  R(x) is continuous wherever Q(x) ≠ 0

Example:
  f(x) = (x² + 1)/(x - 3)

The denominator cannot equal zero:
  x - 3 ≠ 0

Therefore:
  x ≠ 3

The function is continuous on:
  (-∞, 3) ∪ (3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPOSITION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Composition Theorem states that if f is continuous at x = a and g is continuous at f(a), then the composite function g(f(x)) is continuous at x = a. This means that we can chain continuous functions together, and the resulting composition will be continuous, provided the intermediate values are within the domain of the outer function. For example, consider f(x) = x² and g(x) = √x. The composite function g(f(x)) = √(x²) = |x| is continuous everywhere because x² is continuous for all real numbers, and √x is continuous for x ≥ 0. Since x² ≥ 0, the composition is defined and continuous everywhere. This theorem is extremely useful in calculus because it allows us to analyse the continuity of complex expressions by breaking them down into simpler continuous pieces. It also plays a key role in the Chain Rule for differentiation.

If f is continuous at x = a and g is continuous at f(a), then the composite function:
  g(f(x))

is continuous at x = a.

Example:
  Consider f(x) = x² and g(x) = √x.

  The composite function is:
    g(f(x)) = √(x²)

  which is:
    |x|

  Since the resulting function is defined and continuous for all real numbers:
    √(x²) = |x| is continuous everywhere

Explanation:
  If the first function behaves continuously and its output goes into another function that is also continuous, the entire process remains continuous.

Think of it like a chain:
  x → f(x) → g(f(x))

If there are no breaks in the process, the composite function is continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONTINUITY OF COMMON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many common functions are continuous throughout their domains. Polynomial functions are continuous for all real numbers, as discussed. Rational functions are continuous where their denominators are non‑zero. Root functions are continuous where they are defined for example, √x is continuous for x ≥ 0. Exponential functions like 2ˣ are continuous for all real numbers, and logarithmic functions like ln(x) are continuous for x > 0. The sine and cosine functions are continuous for all real numbers, while tangent is continuous except where cos(x) = 0. Knowing these facts is crucial because it allows us to quickly determine the continuity of combinations of these functions using the theorems. For instance, a function like f(x) = eˣ + sin(x) is continuous everywhere because both eˣ and sin(x) are continuous everywhere, and their sum is continuous.

Polynomial Functions:
  Continuous for all real numbers
  Example: x³ - 2x + 1

Rational Functions:
  Continuous where the denominator is not zero
  Example: (x + 1)/(x - 2)

Root Functions:
  Continuous where they are defined
  Example: √x is continuous for x ≥ 0

Exponential Functions:
  Continuous for all real numbers
  Example: 2ˣ

Logarithmic Functions:
  Continuous for x > 0
  Example: ln(x)

Sine and Cosine Functions:
  Continuous for all real numbers
  Examples: sin(x), cos(x)

Tangent Function:
  Continuous where it is defined
  Since tan(x) = sin(x)/cos(x), it is undefined when cos(x) = 0.
  Therefore, it is discontinuous at x = π/2 + nπ, where n is an integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE INTERMEDIATE VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important theorems involving continuity is the Intermediate Value Theorem (IVT). The theorem states that if a function f is continuous on the interval [a, b], and N is any number between f(a) and f(b), then there is at least one number c in [a, b] such that f(c) = N. In other words, a continuous function cannot jump over values. If the graph moves continuously from one value to another, it must pass through every value between them. For example, consider f(x) = x² on the interval [1, 3]. We have f(1) = 1 and f(3) = 9. The number 4 is between 1 and 9. Because f(x) = x² is continuous, there must be some x between 1 and 3 where f(x) = 4. Indeed, f(2) = 4, so c = 2. The Intermediate Value Theorem is used to prove the existence of roots of equations and is fundamental in numerical methods like the bisection method.

The theorem states:

  If a function f is continuous on the interval [a, b], and N is any number 
  between f(a) and f(b), then there is at least one number c in [a, b] such 
  that:
    f(c) = N

Explanation:
  A continuous function cannot jump over values.

  If the graph moves continuously from one value to another, it must pass 
  through every value between them.

Example:
  Suppose f(x) = x² on the interval [1, 3].

  We have:
    f(1) = 1
  and:
    f(3) = 9

  The number 4 is between 1 and 9.

  Because f(x) = x² is continuous, there must be some value of x between 1 
  and 3 where f(x) = 4.

  Indeed:
    f(2) = 4

  Therefore:
    c = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY THEOREMS ON CONTINUITY ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorems on continuity allow us to determine continuity quickly and efficiently. Instead of checking the three conditions for continuity (function defined, limit exists, limit equals function value) for every complicated function, we can use these theorems to build up from simpler continuous functions. This is especially valuable when working with complex expressions that combine polynomials, roots, exponentials, and trigonometric functions. By recognising that each component is continuous and that operations preserve continuity, we can confidently state that the entire function is continuous on its domain. This saves time and reduces the risk of error. Moreover, these theorems are essential for applying the Intermediate Value Theorem, the Extreme Value Theorem, and other important results in calculus. They also provide a solid foundation for understanding differentiability and integrability, since differentiability implies continuity, and integration is defined for continuous functions.

For example:
  f(x) = √(x² + 4)/(x² + 1)

We know:
  • x² is continuous
  • x² + 4 is continuous
  • √(x² + 4) is continuous because x² + 4 > 0
  • x² + 1 > 0, so the denominator is never zero
  • A quotient of continuous functions is continuous where the denominator is not zero

Therefore:
  f(x) = √(x² + 4)/(x² + 1) is continuous for all real x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK GUIDE TO THEOREMS ON CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f and g are continuous at x = a.

  Operation            Result
  ───────────────────────────────────────────────────────────────
  f(x) + g(x)          Continuous
  f(x) - g(x)          Continuous
  c f(x)               Continuous
  f(x)g(x)             Continuous
  f(x)/g(x)            Continuous if g(a) ≠ 0
  [f(x)]ⁿ              Continuous
  ⁿ√(f(x))             Continuous where defined
  g(f(x))              Continuous if both functions are appropriately continuous

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Theorems on Continuity explain how continuity is preserved when functions are combined. If functions are continuous, then their sum, difference, constant multiple, product, quotient (where the denominator is non‑zero), powers, roots (where defined), and compositions are all continuous. Some important results are that every polynomial is continuous for all real numbers, every rational function is continuous on its domain, and continuous functions cannot skip intermediate values (the Intermediate Value Theorem). The most important idea to remember is that continuity is preserved when continuous functions are combined using ordinary mathematical operations, as long as the resulting expression remains defined. These theorems make continuity easier to analyze and prepare us for important Calculus concepts such as the Intermediate Value Theorem, derivatives, and integrals. They provide a systematic framework for understanding the behaviour of continuous functions.

The most important idea to remember is:

  Continuity is preserved when continuous functions are combined using 
  ordinary mathematical operations, as long as the resulting expression 
  remains defined.

These theorems make continuity easier to analyze and prepare us for important Calculus concepts such as the Intermediate Value Theorem, derivatives, and integrals.
  `,
  examples: [
    "Constant f(x) = 7 is continuous everywhere",
    "Identity f(x) = x is continuous everywhere",
    "Sum: f(x) = x² + 3x is continuous (sum of continuous functions)",
    "Product: f(x) = x(x+2) = x² + 2x is continuous",
    "Quotient: f(x) = (x+1)/(x-2) is continuous for x ≠ 2",
    "Power: (x+1)³ is continuous",
    "Root: √(x+4) is continuous on [-4, ∞)",
  ],
};

export default topic;