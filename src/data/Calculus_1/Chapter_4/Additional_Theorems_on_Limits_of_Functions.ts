// filename: additional-theorems-on-limits-of-functions.ts

const topic = {
  id: "additional-theorems-on-limits-of-functions",
  title: "Additional Theorems on Limits of Functions",
  summary:
    "Rules that make it easier to evaluate limits by combining known limits of individual functions, including sum, difference, product, quotient, power, root, and composition laws.",
  details: `
The Additional Theorems on Limits of Functions are rules that make it easier to evaluate limits without having to rely only on the formal definition of a limit.

These theorems are especially useful when working with sums, differences, products, quotients, powers, roots, and combinations of functions.

The main idea is:

  If we already know the limits of two functions, we can often determine the 
  limit of a more complicated expression by combining those known limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED LIMIT THEOREMS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal epsilon-delta definition of a limit, while rigorous, is cumbersome for everyday calculations. Limit theorems provide algebraic shortcuts that allow us to compute limits of complex expressions by breaking them into simpler pieces whose limits are already known. For instance, instead of analyzing the behavior of a polynomial near a point by scrutinizing the definition, we can use the fact that the limit of a sum is the sum of the limits, and the limit of a constant multiple is the constant multiple of the limit. These rules are not just convenient; they are mathematically justified and form the foundation for continuity, differentiation, and integration. By mastering them, you transform limit evaluation from a tedious exercise into a straightforward, almost mechanical process.

Suppose we want to find:
  lim(x→2) (3x² + 5x - 1)

We could study values of the function near x = 2, but that would be unnecessary.

Instead, we can use the basic limit laws:
  lim(x→2) x = 2
and therefore:
  lim(x→2) x² = 4

Then we can combine the limits:
  3(4) + 5(2) - 1
  = 12 + 10 - 1
  = 21

Therefore:
  lim(x→2) (3x² + 5x - 1) = 21

The theorems allow us to break complicated limits into simpler pieces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND LIMIT THEOREMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At the core of limit theorems is the idea that limits "respect" the algebraic operations of addition, subtraction, multiplication, and division provided the limits exist and, in the case of division, the denominator limit is nonzero. This means we can take limits term by term, factor by factor, and piece by piece. The theorems are derived from the epsilon-delta definition, but they free us from the need to return to that definition every time. Once we know the limits of the individual components, we can combine them confidently. This approach is especially powerful for polynomials and rational functions, where direct substitution becomes valid precisely because these laws apply. Understanding this foundational idea enables you to tackle a wide variety of limits without hesitation.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then, under the appropriate conditions, we can determine limits involving:
  • f(x) + g(x)
  • f(x) - g(x)
  • f(x)g(x)
  • f(x)/g(x)
  • [f(x)]ⁿ

Instead of solving the entire expression at once, we can work with its individual parts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THEOREM 1: CONSTANT MULTIPLE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Law states that the limit of a constant times a function is the constant times the limit of the function. This is intuitive: scaling a function vertically by a factor c scales its rate of approach to the limit by the same factor. It allows us to "pull out" constants from a limit, simplifying the expression. For example, instead of computing the limit of 5x directly, we can compute the limit of x and then multiply by 5. This law works for any real constant c, including negative and fractional values. It is frequently used in combination with other laws, especially when differentiating polynomial functions, where coefficients appear. It is a simple but indispensable tool in the limit-evaluation toolkit.

If:
  lim(x→a) f(x) = L

and c is a constant, then:
  lim(x→a) [c f(x)] = cL

In other words, the constant can be moved outside the limit.

Example:
  Evaluate: lim(x→3) 5x

  We know:
    lim(x→3) x = 3

  Therefore:
    lim(x→3) 5x = 5 · lim(x→3) x
    = 5(3)
    = 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THEOREM 2: SUM LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Law tells us that the limit of a sum of two functions is the sum of their individual limits, provided both limits exist. This rule reflects the linearity of the limit operator. It allows us to split a complicated expression into manageable parts, evaluate each part's limit separately, and then add the results. For instance, to find the limit of x² + x as x approaches 2, we compute the limit of x² (which is 4) and the limit of x (which is 2), then add them to get 6. This law is essential for differentiating polynomials and for evaluating limits of sums of functions that are individually known. It also extends to finite sums of any number of terms, making it a workhorse in limit calculations.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x) + g(x)] = L + M

Example:
  Evaluate: lim(x→2) (x² + x)

  Break it into two limits:
    lim(x→2) x² + lim(x→2) x

  Since:
    lim(x→2) x² = 4
  and:
    lim(x→2) x = 2

  we get:
    4 + 2 = 6

  Therefore:
    lim(x→2) (x² + x) = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THEOREM 3: DIFFERENCE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Difference Law is the natural counterpart to the Sum Law: the limit of a difference of two functions is the difference of their limits. This follows directly from the Sum Law by adding the negative of the second function (using the Constant Multiple Law with c = -1). It allows us to handle subtraction in limits just as easily as addition. For example, to evaluate the limit of x² - 2x as x approaches 3, we compute the limit of x² (9) minus the limit of 2x (6), giving 3. This law is routinely used when differentiating polynomials, where terms with negative signs appear. Like the Sum Law, it can be extended to any finite number of terms with alternating signs, simplifying the evaluation of polynomial and rational limits.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x) - g(x)] = L - M

Example:
  Evaluate: lim(x→3) (x² - 2x)

  Apply the difference law:
    lim(x→3) x² - lim(x→3) 2x

  Calculate:
    3² - 2(3)
    = 9 - 6
    = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THEOREM 4: PRODUCT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Product Law states that the limit of a product of two functions is the product of their limits, provided both limits exist. This is a powerful rule because it allows us to multiply limits together, even though the functions themselves are multiplied. For instance, to find the limit of x²(x+3) as x approaches 2, we can take the limit of x² (4) times the limit of (x+3) (5) to get 20. This law is essential for differentiating products using the Product Rule and for evaluating limits of products of algebraic expressions. It also extends to products of more than two functions. However, it does require that all individual limits are finite; infinite limits require more careful handling. The Product Law is one of the most frequently used limit laws due to the prevalence of products in calculus.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x)g(x)] = LM

Example:
  Evaluate: lim(x→2) (x²)(x + 3)

  We can separate the functions:
    (lim(x→2) x²)(lim(x→2) (x + 3))

  Calculate:
    (4)(5) = 20

  Therefore:
    lim(x→2) x²(x + 3) = 20

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THEOREM 5: QUOTIENT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Quotient Law states that the limit of a quotient of two functions is the quotient of their limits, provided the limit of the denominator is not zero. This rule is analogous to the Product Law but comes with a crucial condition. If the denominator approaches zero, the quotient may not have a finite limit, and the law cannot be applied directly. For rational functions, this law allows us to substitute the limit values, leading to the direct substitution method when the denominator is nonzero. For example, the limit of (x+4)/(x+1) as x→2 is (2+4)/(2+1) = 2. This law is indispensable for evaluating limits of rational functions, and it also underlies the Quotient Rule for differentiation. Understanding when the condition fails is equally important, as it signals the need for algebraic simplification or other techniques.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

where M ≠ 0, then:
  lim(x→a) f(x)/g(x) = L/M

The condition M ≠ 0 is extremely important.

Example:
  Evaluate: lim(x→2) (x + 4)/(x + 1)

  Apply the quotient law:
    lim(x→2) (x + 4) / lim(x→2) (x + 1)

  Therefore:
    6/3 = 2

  So:
    lim(x→2) (x + 4)/(x + 1) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY MUST THE DENOMINATOR LIMIT NOT BE ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The condition that the denominator's limit must be nonzero is not a mere technicality; it is essential for the quotient law to be valid. If the denominator approaches zero, the quotient may diverge to infinity or behave in a more complicated way that does not have a finite limit. For example, consider lim(x→0) 1/x: the numerator limit is 1, but the denominator limit is 0, so the quotient law does not apply. In fact, the one-sided limits are -∞ and ∞, so no finite two-sided limit exists. Even when both numerator and denominator approach zero, we get an indeterminate form 0/0, which requires further analysis. Thus, when the denominator limit is zero, we cannot simply divide; we must investigate the behavior more closely, often by factoring, rationalizing, or using special limit identities. This condition is a safeguard that prevents incorrect conclusions.

Suppose:
  lim(x→a) g(x) = 0

Then the quotient law cannot simply be applied.

For example:
  lim(x→0) 1/x

We know:
  lim(x→0) 1 = 1
and:
  lim(x→0) x = 0

It would be incorrect to say: 1/0 = 0.

Division by zero is undefined.

In fact:
  lim(x→0) 1/x

does not have a finite two-sided limit; its one-sided behavior is:
  lim(x→0⁻) 1/x = -∞
and:
  lim(x→0⁺) 1/x = ∞

This is why the quotient theorem specifically requires:
  M ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THEOREM 6: POWER LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Law says that the limit of a function raised to a positive integer power is the limit of the function raised to that power. This rule is a direct consequence of repeatedly applying the Product Law. It allows us to evaluate limits of polynomials and other power expressions by first finding the limit of the base and then exponentiating. For example, to find lim(x→2) (x+1)³, we first compute lim(x→2) (x+1) = 3, then cube it to get 27. This law is valid for any positive integer n, and it extends to negative and fractional exponents when the function is defined appropriately (with care for even roots and negative bases). It is a key step in differentiating power functions using the Power Rule and is frequently used in conjunction with the other laws.

If:
  lim(x→a) f(x) = L

then for a positive integer n:
  lim(x→a) [f(x)]ⁿ = Lⁿ

Example:
  Evaluate: lim(x→2) (x + 1)³

  First:
    lim(x→2) (x + 1) = 3

  Therefore:
    lim(x→2) (x + 1)³ = 3³ = 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THEOREM 7: ROOT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Root Law allows us to take the nth root of a limit, provided the root is defined in the relevant neighborhood. This is an extension of the Power Law to fractional exponents. For example, lim(x→4) √(x+5) can be evaluated by first finding lim(x→4) (x+5) = 9, then taking the square root to get 3. This law is valid when the limit L is nonnegative for even roots (to ensure real values) and for any real L when the root is odd. It is particularly useful when dealing with radical expressions. However, one must be careful: if the function inside the root is negative for values near a and the root is even, the limit may not exist. The Root Law is often used in combination with the other laws to simplify expressions before evaluating limits.

If:
  lim(x→a) f(x) = L

then, when the root is defined:
  lim(x→a) ⁿ√(f(x)) = ⁿ√L

Example:
  Evaluate: lim(x→4) √(x + 5)

  First:
    lim(x→4) (x + 5) = 9

  Therefore:
    √9 = 3

  Thus:
    lim(x→4) √(x + 5) = 3

For an even root, the expression must be defined in the relevant neighborhood.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMBINING SEVERAL THEOREMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The real power of limit laws emerges when we use multiple theorems together in a single problem. A complex algebraic expression can often be broken down into a combination of sums, differences, products, quotients, and powers, each of which can be handled separately. For instance, the limit of a polynomial is found by applying the Sum and Constant Multiple Laws to each term and then using the Power Law for each power of x. This stepwise approach makes even lengthy limits manageable. It also illustrates why polynomials are continuous everywhere: their limits can be computed simply by substituting the value of a. By mastering the combination of these laws, you can evaluate limits of rational functions, radical expressions, and compositions with confidence. The key is to recognize the structure of the expression and apply the appropriate laws in sequence.

The real power of these laws comes from using several of them together.

Consider:
  lim(x→2) (3x² + 4x - 5)

Break the expression apart:
  3x² + 4x - 5

Using the sum, difference, and constant multiple laws:
  3·lim(x→2) x² + 4·lim(x→2) x - 5

Now evaluate:
  3(4) + 4(2) - 5
  = 12 + 8 - 5
  = 15

Therefore:
  lim(x→2) (3x² + 4x - 5) = 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE CONSTANT FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Function Theorem states that the limit of a constant function (a function that always returns the same value c) is simply that constant c, regardless of the point a. This is the simplest limit law and follows directly from the definition: as x approaches a, the function values remain c, so they must approach c. This theorem is often used implicitly when we have constant terms in an expression. For example, in a polynomial, the constant term's limit is itself. It also serves as the building block for the Constant Multiple Law, since a constant multiple is just a constant times a function. While trivial on its own, it is a necessary part of the limit laws toolkit and ensures that constants behave predictably under limits.

If c is a constant, then:
  lim(x→a) c = c

The value doesn't change because the function is always equal to the same number.

Example:
  lim(x→100) 7 = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE IDENTITY FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Identity Function Theorem tells us that the limit of the function f(x) = x as x approaches a is simply a. This is the simplest non-constant limit and is foundational because it enables us to compute limits of powers of x by repeated multiplication. For instance, the limit of x² is obtained by multiplying the limit of x by itself: a·a = a². This theorem is used in conjunction with the Power Law to evaluate polynomial limits. It also establishes that the identity function is continuous everywhere, which is a key building block for proving the continuity of more complex functions. Understanding this theorem is essential because it is the starting point for almost all limit calculations involving algebraic functions.

The identity function is:
  f(x) = x

Its limit is:
  lim(x→a) x = a

Example:
  lim(x→5) x = 5

This simple rule is the foundation of many other limit calculations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. POLYNOMIAL LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Polynomial Limit Theorem states that for any polynomial function, the limit as x approaches a can be found by simply substituting a into the polynomial. This is a direct consequence of the Sum, Constant Multiple, and Power Laws. Polynomials are sums of monomials c·xⁿ, and each monomial's limit is c·aⁿ. Therefore, the polynomial's limit is P(a). This theorem makes evaluating limits of polynomials trivial and explains why polynomials are continuous everywhere. It also justifies the technique of direct substitution for polynomial expressions. For example, the limit of x³ - 4x² + 5x + 7 as x→2 is simply 2³ - 4(4) + 5(2) + 7 = 9. This is one of the most practical results in elementary calculus.

A polynomial has the form:
  P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

For a polynomial, we can evaluate the limit simply by substituting x = a:
  lim(x→a) P(x) = P(a)

Example:
  Evaluate: lim(x→2) (x³ - 4x² + 5x + 7)

  Substitute 2:
    2³ - 4(2²) + 5(2) + 7
    = 8 - 16 + 10 + 7
    = 9

  Therefore:
    lim(x→2) (x³ - 4x² + 5x + 7) = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RATIONAL FUNCTION LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function, which is the quotient of two polynomials, we can evaluate the limit by direct substitution provided the denominator does not vanish at the point a. This follows from the Quotient Law and the Polynomial Limit Theorem. If the denominator is nonzero at a, then the limit is simply P(a)/Q(a). This is a very practical rule that covers a large class of functions. However, if the denominator is zero, we cannot apply the theorem directly; we may get an indeterminate form such as 0/0, which requires additional algebraic manipulation. The rational function limit theorem is a special case of the more general continuity of rational functions at points where they are defined. It is frequently used in calculus to evaluate limits without resorting to the epsilon-delta definition.

For a rational function:
  f(x) = P(x)/Q(x)

if Q(a) ≠ 0, then:
  lim(x→a) P(x)/Q(x) = P(a)/Q(a)

In other words, if direct substitution does not produce division by zero, you can simply substitute.

Example:
  lim(x→3) (x² + 1)/(x + 2)

  Substitute:
    (3² + 1)/(3 + 2) = 10/5 = 2

  Therefore: 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution is the practice of plugging the value a directly into the function to evaluate the limit. It is justified by the limit laws for all functions that are continuous at a. For polynomials and rational functions (where the denominator is nonzero), direct substitution always works. For other functions like square roots, exponentials, and trigonometric functions, it also works if the function is defined and continuous at a. Direct substitution is often the first step in evaluating a limit; if it yields a finite number, that is the limit. Only when it produces an indeterminate form like 0/0 or ∞/∞ do we need to employ additional techniques. This approach saves time and effort, and it is the most natural way to evaluate limits when the function is well-behaved at the point of interest.

The limit laws explain why direct substitution works for many functions.

For example:
  lim(x→5) (2x² + 3x - 1)

  Substitute:
    2(5)² + 3(5) - 1
    = 50 + 15 - 1
    = 64

  Therefore: 64

This works because polynomials are continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE IMPORTANT 0/0 SITUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When direct substitution yields the indeterminate form 0/0, we cannot conclude that the limit is zero or does not exist. This form indicates that both the numerator and denominator vanish at a, and further analysis is needed. The limit may exist and be a finite number, or it may not exist. To resolve a 0/0 situation, we typically simplify the expression algebraically. Common methods include factoring and canceling common factors, rationalizing the numerator or denominator, or using a common denominator to combine fractions. The goal is to eliminate the factor that causes the zero in both numerator and denominator, so that the new expression can be evaluated by direct substitution. This technique is essential for evaluating many limits encountered in calculus, particularly those that arise in the definition of the derivative.

Sometimes direct substitution produces:
  0/0

This does not mean the answer is zero.

Instead, 0/0 is an indeterminate form.

You need additional algebraic manipulation.

Example:
  lim(x→2) (x² - 4)/(x - 2)

  Direct substitution gives:
    (2² - 4)/(2 - 2) = 0/0

  We cannot stop there.

  Factor the numerator:
    x² - 4 = (x - 2)(x + 2)

  Therefore:
    ((x - 2)(x + 2))/(x - 2)

  Cancel:
    x + 2

  Now evaluate:
    lim(x→2) (x + 2) = 4

  Therefore:
    lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THEOREM FOR ABSOLUTE VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Absolute Value Theorem states that the limit of the absolute value of a function is the absolute value of the limit, provided the limit exists. This follows from the continuity of the absolute value function. It is useful when we need to evaluate limits involving absolute values, such as |f(x)|. For example, to find the limit of |x - 5| as x approaches 3, we first compute the limit of the inside (x - 5), which is -2, and then take the absolute value to get 2. This theorem also helps in proving that certain functions are continuous. However, one must be cautious: while the limit of |f(x)| is |L|, the converse is not always true; the existence of the limit of |f(x)| does not guarantee the existence of the limit of f(x) (e.g., f(x) = ±1 with a jump). Nonetheless, for algebraic functions, this theorem is straightforward and useful.

If:
  lim(x→a) f(x) = L

then:
  lim(x→a) |f(x)| = |L|

Example:
  Evaluate: lim(x→3) |x - 5|

  First:
    lim(x→3) (x - 5) = -2

  Therefore:
    |-2| = 2

  Thus:
    lim(x→3) |x - 5| = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPOSITION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Composition Theorem for limits allows us to evaluate the limit of a composite function f(g(x)) by taking the limit of the inner function g(x) first, and then applying the outer function f, provided f is continuous at the resulting limit. This is a powerful tool for handling nested functions, such as (x²+1)³ or √(x+5). For example, to find the limit of (x²+1)³ as x approaches 2, we let g(x) = x²+1, which tends to 5, and then f(u) = u³, which is continuous at 5, giving 125. This theorem is essential for evaluating limits of functions that are built from basic building blocks via composition. It also underlies the chain rule for differentiation, making it a fundamental concept in calculus.

Another important idea is the composition of functions.

Suppose:
  lim(x→a) g(x) = L
and f is continuous at L.

Then:
  lim(x→a) f(g(x)) = f(L)

This is sometimes called the composition theorem for limits.

Example:
  Evaluate: lim(x→2) (x² + 1)³

  Let g(x) = x² + 1.

  As x → 2:
    g(x) → 5

  Now the outside function is:
    f(u) = u³

  Therefore:
    f(5) = 5³ = 125

  So:
    lim(x→2) (x² + 1)³ = 125

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example demonstrates the use of the Root Law and the Sum Law together. We want to find the limit of √(x²+7) as x approaches 3. First, we compute the limit of the expression inside the square root: lim(x→3) (x²+7) = 3²+7 = 16. Since the square root function is continuous at 16, we can then take the square root of 16 to get 4. This shows how combining the laws simplifies the evaluation: we separate the inside and outside, evaluate each, and then combine. This approach works for any composition where the outer function is continuous. It is a efficient method for radicals and other composite functions.

Evaluate:
  lim(x→3) √(x² + 7)

First find the inside limit:
  lim(x→3) (x² + 7) = 9 + 7 = 16

Then take the square root:
  √16 = 4

Therefore:
  lim(x→3) √(x² + 7) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A MORE COMPLICATED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example combines the Sum, Difference, Constant Multiple, and Quotient Laws in a single problem. We evaluate the limit of a rational expression where the denominator does not vanish at the point of interest. Since the denominator limit is nonzero, the Quotient Law applies directly. We compute the numerator limit and denominator limit separately, then divide. This illustrates the step-by-step decomposition: first find the limit of the numerator (21), then the denominator (6), and finally the quotient (21/6 = 7/2). This method is systematic and avoids errors. It also reinforces the idea that when the denominator is nonzero, we can simply substitute the values into the numerator and denominator.

Evaluate:
  lim(x→2) (3x² + 5x - 1)/(x + 4)

Because the denominator is not zero at x = 2:
  x + 4 = 6 ≠ 0

we can use the quotient law.

Numerator:
  3(2)² + 5(2) - 1
  = 12 + 10 - 1
  = 21

Denominator:
  2 + 4 = 6

Therefore:
  lim(x→2) (3x² + 5x - 1)/(x + 4) = 21/6 = 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE USING SEVERAL LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example demonstrates the use of Product and Quotient Laws together. We evaluate the limit of a rational function where the denominator is a product of two functions. We break the denominator into its factors, find each factor's limit, multiply them, and then divide the numerator limit by that product. This shows how the laws can be applied hierarchically: first to the product in the denominator, then to the quotient. The result is 6/25. This example reinforces the idea that complex expressions can be decomposed into a series of simple steps, each governed by a limit law. It also highlights the importance of checking that all individual limits exist and that the denominator limit is nonzero.

Evaluate:
  lim(x→1) (x + 5)/[(2x + 3)(x² + 4)]

Use the product and quotient laws:
  lim(x→1) (x + 5) / [lim(x→1) (2x + 3) · lim(x→1) (x² + 4)]

Evaluate each part:
  2(1) + 3 = 5
  1² + 4 = 5
  1 + 5 = 6

Therefore:
  6/[(5)(5)] = 6/25

So:
  lim(x→1) (x + 5)/[(2x + 3)(x² + 4)] = 6/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. A VERY IMPORTANT CONCEPT: LIMIT LAWS DON'T ALWAYS SOLVE EVERYTHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

While the limit laws are powerful, they have conditions that must be met. The most common restriction is that the limits of the individual components must exist and be finite, and for quotients, the denominator limit must be nonzero. When these conditions are not satisfied, the laws cannot be applied directly. For example, if the denominator limit is zero, we may have an indeterminate form like 0/0 or ∞/∞, which requires additional techniques. Similarly, if one of the functions oscillates wildly, its limit may not exist. In such cases, we must resort to other methods: factoring, rationalizing, using known special limits (like sin(x)/x), or later in calculus, L'Hôpital's Rule. Recognizing when the laws fail is just as important as knowing when they apply. This awareness prevents errors and guides you toward the appropriate next step.

The limit laws are powerful, but they have conditions.

For example:
  lim(x→a) f(x)/g(x) = L/M

requires M ≠ 0.

If M = 0, you need another technique.

Common techniques include:
  • factoring
  • canceling
  • rationalizing
  • finding a common denominator
  • using special limit identities
  • L'Hôpital's Rule later in calculus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON INDETERMINATE FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating limits, you may encounter expressions whose form does not immediately reveal the answer. The most common indeterminate forms are 0/0 and ∞/∞, but there are others like ∞ - ∞, 0·∞, 1^∞, etc. These forms signal that the limit cannot be determined from the form alone; it depends on the specific functions involved. For example, both lim(x→0) x/x and lim(x→0) x²/x yield 0/0 upon substitution, but the first limit is 1 and the second is 0. This illustrates why indeterminate forms require further analysis. In calculus, we often resolve these by algebraic simplification, using known limits, or applying L'Hôpital's Rule. Recognizing indeterminate forms is a crucial skill because it tells you when to stop and think about alternative methods.

When evaluating limits, you may encounter expressions such as:
  0/0
or:
  ∞/∞

These are indeterminate forms.

They don't tell you the answer automatically.

For example:
  0/0 could lead to many different answers depending on the functions involved.

Consider:
  lim(x→0) x/x = 1

Although direct substitution gives 0/0, the actual limit is 1.

Another example:
  lim(x→0) x²/x = lim(x→0) x = 0

Again, direct substitution initially produces 0/0, but the actual answer is 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE LIMIT LAWS   COMPLETE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This section provides a concise summary of all the limit laws discussed. It serves as a reference for solving problems. The laws are organized by operation: constant, identity, constant multiple, sum, difference, product, quotient, power, root, absolute value, and composition. Each law is stated in its general form with the necessary conditions (e.g., M ≠ 0 for quotient). Having this summary at hand helps you quickly identify which law to apply. It also emphasizes the structure of the limit laws: they are algebraic rules that allow you to manipulate limits much like you manipulate algebraic expressions. This summary is a valuable tool for both learning and problem-solving.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then:

  Constant:
    lim(x→a) c = c

  Identity:
    lim(x→a) x = a

  Constant Multiple:
    lim(x→a) c f(x) = cL

  Sum:
    lim(x→a) [f(x) + g(x)] = L + M

  Difference:
    lim(x→a) [f(x) - g(x)] = L - M

  Product:
    lim(x→a) [f(x)g(x)] = LM

  Quotient:
    If M ≠ 0:
      lim(x→a) f(x)/g(x) = L/M

  Power:
    lim(x→a) [f(x)]ⁿ = Lⁿ

  Root:
    When defined:
      lim(x→a) ⁿ√(f(x)) = ⁿ√L

  Absolute Value:
    lim(x→a) |f(x)| = |L|

  Composition:
    If f is continuous at L:
      lim(x→a) f(g(x)) = f(L)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A GOOD PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When faced with a limit problem, follow a systematic approach to avoid getting lost. Start with the simplest method: direct substitution. If it yields a finite number, you're done. If it yields an indeterminate form, don't panic; look for algebraic simplifications. Factor the numerator and denominator to cancel common factors. Rationalize if square roots are involved. If the function is a sum of fractions, try getting a common denominator. After simplification, attempt direct substitution again. This iterative process usually resolves most elementary limits. If you still get an indeterminate form, you may need more advanced techniques (like L'Hôpital's Rule) that you'll learn later. The key is to always try direct substitution first; it saves time when it works, and it alerts you to the need for further work when it doesn't.

When you encounter a limit, don't immediately start doing complicated algebra.

Use this process:

Step 1: Try direct substitution
  Put x = a into the expression.

Step 2: Check the result
  If you get a normal finite number, you're usually done.
  For example: 2/5, 0, -7, 13 are ordinary results.

Step 3: Look for indeterminate forms
  If you get 0/0 or another indeterminate form, don't stop.

Step 4: Simplify
  Try:
    • factoring
    • rationalizing

Step 5: Apply the limit laws again
  After simplification, evaluate the new expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. WORKED PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a classic example that illustrates the need for factoring. We want to find lim(x→3) (x² - 9)/(x - 3). Direct substitution gives 0/0, an indeterminate form. We factor the numerator as (x-3)(x+3), cancel the common factor (x-3) with the denominator, leaving x+3. Then we take the limit by direct substitution, getting 6. This example is a prototype for many limit problems; it shows how factoring can remove the zero in both numerator and denominator. It also emphasizes that cancellation is only valid when x ≠ 3, but since we are taking the limit as x approaches 3 (not equal to 3), it is perfectly legitimate. This technique is fundamental and reappears in derivatives and beyond.

Evaluate:
  lim(x→3) (x² - 9)/(x - 3)

Step 1: Direct substitution
  (3² - 9)/(3 - 3) = 0/0

This is indeterminate.

Step 2: Factor
  x² - 9 = (x - 3)(x + 3)

Therefore:
  ((x - 3)(x + 3))/(x - 3)

Step 3: Cancel
  x + 3

Step 4: Evaluate
  3 + 3 = 6

Therefore:
  lim(x→3) (x² - 9)/(x - 3) = 6

This example demonstrates why the limit laws are often combined with algebraic techniques.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. WHY THESE THEOREMS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit theorems are not just academic; they are the foundation upon which the entire structure of calculus is built. Continuity, derivatives, and integrals all rely on limits. The definition of continuity uses limits; the derivative is defined as a limit of a difference quotient; and the definite integral is defined as a limit of Riemann sums. Without the ability to compute limits efficiently, these core concepts would be inaccessible. The limit laws allow us to verify continuity of polynomials and rational functions, to differentiate algebraic functions using the Power Rule, and to evaluate integrals by breaking them into sums. Moreover, they provide the intuition that functions behave "nicely" under algebraic operations. Mastering the limit laws is therefore not just about passing a test; it is about understanding the language of change that calculus speaks.

The Additional Theorems on Limits of Functions are important because they form the foundation for later calculus topics.

They help you understand:

Continuity:
  A function is continuous at a when:
    lim(x→a) f(x) = f(a)

Derivatives:
  The derivative is defined using a limit:
    f'(x) = lim(h→0) (f(x + h) - f(x))/h

Integrals:
  Limits are also involved in the definition of definite integrals through Riemann sums.

Asymptotes:
  Limits help determine:
    • horizontal asymptotes
    • vertical asymptotes
    • end behavior

So understanding these theorems makes later calculus significantly easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the limit laws as a toolbox that lets you break down a complicated limit into a series of simple, known limits. Instead of tackling an entire expression at once, you can separate it into parts, evaluate each part's limit, and then combine the results using the appropriate law. This decomposition approach is not only efficient but also reduces errors. For instance, a limit like (2x+1)(x²+3)/(x+4) can be split into the product of (2x+1) and (x²+3) divided by (x+4), each evaluated separately. This modular approach mirrors how we often solve problems in other areas of mathematics and science: break a complex system into simpler components, analyze each, and then synthesize the results. The limit laws formalize this strategy for limits, making it both rigorous and practical.

Think of the limit laws as a toolbox.

If you have:
  lim(x→a) [(2x + 1)(x² + 3)/(x + 4)]

you don't have to treat the entire expression as one giant problem.

You can break it down:
  [lim(x→a) (2x + 1) · lim(x→a) (x² + 3)] / lim(x→a) (x + 4)

Then evaluate each simple piece.

This is the central purpose of the limit theorems:

  Complicated limit → Several simple limits

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In conclusion, the Additional Theorems on Limits of Functions provide a comprehensive set of algebraic rules for evaluating limits. They enable us to combine known limits of individual functions to find limits of sums, differences, products, quotients, powers, roots, and compositions. The most important practical rule is to try direct substitution first; if it yields a finite number, you have the answer. If it gives an indeterminate form like 0/0, you must simplify the expression using algebraic techniques and then re-evaluate. These theorems are the bedrock of calculus, underpinning continuity, differentiation, and integration. By mastering them, you equip yourself with the essential tools to progress confidently into more advanced topics.

The Additional Theorems on Limits of Functions give us algebraic rules for combining limits.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then we can generally use:
  • lim(f + g) = L + M
  • lim(f - g) = L - M
  • lim(fg) = LM
  • lim(f/g) = L/M (M ≠ 0)
  • lim[f(x)]ⁿ = Lⁿ
  • lim ⁿ√(f(x)) = ⁿ√L (when defined)

The most important practical rule is:

  Try direct substitution first. If it gives a normal number, you're usually 
  finished. If it gives an indeterminate form such as 0/0, you need to 
  simplify the expression before applying the limit laws again.

These theorems are the foundation for understanding continuity, derivatives, asymptotes, and eventually integration.
  `,
  examples: [
    "lim(x→2) (3x² + 5x - 1) = 15",
    "lim(x→2) (x² + x) = 6",
    "lim(x→3) (x² - 2x) = 3",
    "lim(x→2) x²(x+3) = 20",
    "lim(x→2) (x+4)/(x+1) = 2",
    "lim(x→2) (x+1)³ = 27",
    "lim(x→3) (x² - 9)/(x - 3) = 6",
  ],
};

export default topic;