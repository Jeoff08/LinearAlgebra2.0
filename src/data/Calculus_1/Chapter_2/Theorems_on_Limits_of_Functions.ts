// filename: theorems-on-limits-of-functions.ts

const topic = {
  id: "theorems-on-limits-of-functions",
  title: "Theorems on Limits of Functions",
  summary:
    "Mathematical rules and laws for evaluating limits, including the constant, identity, sum, difference, product, quotient, power, root, and sandwich theorems.",
  details: `
After learning what a limit is, the next important topic is the theorems and laws of limits. These theorems provide rules that allow us to evaluate limits more easily without always creating tables or analyzing graphs. Suppose we have two functions f(x) and g(x) with known limits as x approaches a. The theorems on limits tell us how to find the limit when functions are added, subtracted, multiplied, divided, raised to powers, or combined with constants. These rules are extremely important because they make solving limits faster and form the foundation for many topics in Calculus. By breaking down complicated expressions into simpler parts, we can evaluate limits systematically and reliably, which is essential for studying continuity, derivatives, and integrals.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

The theorems on limits tell us how to find the limit when functions are:
  • Added
  • Subtracted
  • Multiplied
  • Divided
  • Raised to powers
  • Combined with constants

These rules are extremely important because they make solving limits faster and form the foundation for many topics in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Limit Theorem is one of the simplest yet most fundamental limit laws. It states that the limit of a constant function as x approaches any number is simply that constant itself. This makes sense because a constant never changes no matter what value x takes, the output remains the same. For example, the function f(x) = 5 always outputs 5, whether x is 0, 10, or 100. Therefore, as x approaches any value, the function approaches 5. This theorem is the building block for more complex limit laws because it allows us to treat constants independently when evaluating limits. It also justifies why we can pull constants out of limits, as seen in the Constant Multiple Theorem.

The Constant Limit Theorem states that the limit of a constant is the constant itself.
  lim(x→a) c = c

where c is any constant.

Example:
  lim(x→3) 5

The value is always 5, regardless of what x does.

Therefore:
  lim(x→3) 5 = 5

Explanation:
  A constant function does not change.
  For example: f(x) = 7
  No matter what value x approaches, f(x) = 7.

Therefore:
  lim(x→a) 7 = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IDENTITY LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Identity Limit Theorem states that the limit of the identity function f(x) = x as x approaches a is simply a. This is intuitive: as x gets closer and closer to a, the value of x itself gets closer to a. This theorem may seem trivial, but it is a cornerstone of all limit laws because it provides the basic behavior of the variable itself. Every polynomial is built from constants and powers of x, and the identity theorem is the first step in proving that polynomials are continuous. For example, lim(x→5) x = 5, because as x approaches 5, its value approaches 5. This theorem is also used in combination with other laws to evaluate more complex limits involving sums and products of functions.

The Identity Limit Theorem states:
  lim(x→a) x = a

This simply means that as x approaches a, its value approaches a.

Example:
  lim(x→5) x

Since x is approaching 5:
  lim(x→5) x = 5

This theorem may seem simple, but it is one of the foundations of other limit laws.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Theorem allows us to factor out a constant from a limit. It states that the limit of a constant times a function equals the constant times the limit of the function. This is valid because multiplying by a constant scales the function's output uniformly, and the limiting behavior is scaled by the same factor. For example, if we know lim(x→2) x² = 4, then lim(x→2) 5x² = 5 · 4 = 20. This theorem is extremely useful because it lets us separate constants from more complex expressions, simplifying the evaluation process. It also underpins the linearity of limits, which is essential for analyzing sums and differences of functions.

The Constant Multiple Theorem states:
  lim(x→a) [c f(x)] = c · lim(x→a) f(x)

where c is a constant.

Example:
  Find: lim(x→2) 5x²

We can separate the constant:
  = 5 · lim(x→2) x²

Since:
  lim(x→2) x² = 4

we get:
  5(4) = 20

Therefore:
  lim(x→2) 5x² = 20

Explanation:
  Constants can be taken outside the limit because multiplying by a constant 
  does not change the limiting behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Theorem states that the limit of a sum of two functions is the sum of their individual limits, provided both limits exist. This theorem follows from the definition of limits and allows us to evaluate the limit of a sum by breaking it into simpler parts. For example, if we want lim(x→2) (x² + 3x), we can compute lim(x→2) x² = 4 and lim(x→2) 3x = 6, then add them to get 10. This theorem extends to sums of any finite number of functions by repeated application. It is essential for evaluating polynomial limits, as polynomials are sums of power terms. The Sum Theorem, together with the Constant Multiple and Identity Theorems, forms the basis for evaluating many limits quickly and accurately.

The Sum Theorem states:
  lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)

provided both limits exist.

Example:
  Find: lim(x→2) (x² + 3x)

Separate the limits:
  = lim(x→2) x² + lim(x→2) 3x

Evaluate:
  = 4 + 6

Therefore:
  10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Difference Theorem is the analog of the Sum Theorem for subtraction. It states that the limit of the difference of two functions is the difference of their limits, provided both limits exist. This is useful when a function involves subtraction, such as in polynomial expressions with negative coefficients. For example, lim(x→3) (x² - 2x) = lim(x→3) x² - lim(x→3) 2x = 9 - 6 = 3. The Difference Theorem follows directly from the Sum Theorem by treating subtraction as adding a negative constant multiple. Like the Sum Theorem, it allows us to break down complex expressions into simpler known limits, making evaluation straightforward. It is also a key component in proving the continuity of differences of continuous functions.

The Difference Theorem states:
  lim(x→a) [f(x) - g(x)] = lim(x→a) f(x) - lim(x→a) g(x)

provided both limits exist.

Example:
  Find: lim(x→3) (x² - 2x)

Separate the limits:
  = lim(x→3) x² - lim(x→3) 2x

Evaluate:
  = 9 - 6

Therefore:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PRODUCT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Product Theorem states that the limit of a product of two functions is the product of their individual limits, provided both limits exist. This theorem is crucial for evaluating limits of products, such as x(x + 3) at x = 2. We can compute lim(x→2) x = 2 and lim(x→2) (x + 3) = 5, then multiply to get 10. The Product Theorem extends to products of more than two functions by repeated application. It is essential for polynomial functions, which are products of powers of x, and for rational functions, where the numerator and denominator are products of polynomials. This theorem, together with the Sum and Constant Multiple Theorems, allows us to evaluate limits of any polynomial and many other functions simply by substitution.

The Product Theorem states:
  lim(x→a) [f(x)g(x)] = (lim(x→a) f(x)) · (lim(x→a) g(x))

provided both limits exist.

Example:
  Find: lim(x→2) (x)(x + 3)

Separate the limits:
  = (lim(x→2) x) · (lim(x→2) (x + 3))

Evaluate:
  = (2)(5)

Therefore:
  10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. QUOTIENT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Quotient Theorem states that the limit of a quotient of two functions is the quotient of their limits, provided the limit of the denominator is not zero. This theorem is essential for evaluating rational functions, which are quotients of polynomials. For example, lim(x→2) (x² + 1)/(x + 3) = (2² + 1)/(2 + 3) = 5/5 = 1. The condition that the denominator limit is non‑zero is critical; if the denominator approaches zero, direct substitution may lead to an undefined expression, and we must use other techniques such as factoring or rationalising. The Quotient Theorem, together with the Product and Sum Theorems, allows us to evaluate limits of rational functions at all points where they are defined. It also underpins the continuity of rational functions on their domains.

The Quotient Theorem states:
  lim(x→a) f(x)/g(x) = lim(x→a) f(x) / lim(x→a) g(x)

provided:
  lim(x→a) g(x) ≠ 0

Example:
  Find: lim(x→2) (x² + 1)/(x + 3)

Substitute:
  (2² + 1)/(2 + 3) = 5/5 = 1

Therefore:
  1

Important Reminder:
  The denominator must not approach zero.
  If it does, the Quotient Theorem cannot be directly applied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POWER THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Theorem extends the Product Theorem to positive integer powers. It states that the limit of a function raised to a positive integer power n is the nth power of the limit of the function. This follows from repeated application of the Product Theorem. For example, lim(x→2) (x + 1)³ = [lim(x→2) (x + 1)]³ = (3)³ = 27. This theorem is essential for evaluating polynomial and power functions, as it allows us to take limits inside powers. It also forms the basis for the limit of more general functions that involve powers, such as (f(x))ⁿ. The Power Theorem is a key building block for proving that polynomials are continuous, since any power of x is continuous.

The Power Theorem states:
  lim(x→a) [f(x)]ⁿ = [lim(x→a) f(x)]ⁿ

where n is a positive integer.

Example:
  Find: lim(x→2) (x + 1)³

Apply the Power Theorem:
  = [lim(x→2) (x + 1)]³

Substitute:
  = (2 + 1)³
  = 3³
  = 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROOT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Root Theorem states that the limit of the nth root of a function is the nth root of the limit of the function, provided the root is defined. This theorem is useful for evaluating limits involving square roots, cube roots, and other radicals. For example, lim(x→4) √(x + 5) = √(lim(x→4) (x + 5)) = √9 = 3. The condition that the root is defined is important: for even roots, the value inside the root must be non‑negative. This theorem follows from the continuity of the root function. It allows us to evaluate limits of composite functions that involve radicals, and it is often used in combination with other limit laws to simplify expressions before taking the limit. The Root Theorem is also crucial for analyzing functions with fractional powers.

The Root Theorem states:
  lim(x→a) ⁿ√(f(x)) = ⁿ√(lim(x→a) f(x))

provided the root is defined.

Example:
  Find: lim(x→4) √(x + 5)

Substitute:
  = √(4 + 5)
  = √9
  = 3

Explanation:
  If the function inside the root approaches a value where the root is defined, 
  we can evaluate the limit directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POLYNOMIAL LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Polynomial Limit Theorem states that the limit of a polynomial function can be found simply by substituting the value a into the polynomial. This is a direct consequence of the Sum, Product, Constant Multiple, and Identity Theorems. Since polynomials are built from constants and powers of x using addition and multiplication, and since each of these operations preserves limits, the overall limit is obtained by direct evaluation. For example, lim(x→2) (3x³ - 2x + 5) = 3(8) - 4 + 5 = 25. This theorem is extremely useful because polynomials appear frequently in calculus and other areas. It also justifies the direct substitution method for polynomial functions, making them the simplest functions to evaluate limits for.

For a polynomial:
  P(x) = aₙxⁿ + ... + a₁x + a₀

then:
  lim(x→a) P(x) = P(a)

Example:
  Find: lim(x→2) (3x³ - 2x + 5)

Substitute:
  = 3(2)³ - 2(2) + 5
  = 3(8) - 4 + 5
  = 24 - 4 + 5
  = 25

This is why direct substitution works for polynomial functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTION LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function, which is a quotient of two polynomials, the limit can usually be found by direct substitution, provided the denominator does not approach zero. That is, lim(x→a) P(x)/Q(x) = P(a)/Q(a) if Q(a) ≠ 0. This follows directly from the Quotient Theorem applied to polynomials. For example, lim(x→2) (x² + 1)/(x + 4) = (4 + 1)/(2 + 4) = 5/6. If Q(a) = 0, direct substitution gives an indeterminate form such as 0/0, and we must use factoring or other techniques to simplify. This theorem is essential for analysing rational functions, as it tells us where the function is continuous and where it may have vertical asymptotes. It is a cornerstone of calculus and appears in many applications.

For a rational function:
  f(x) = P(x)/Q(x)

the limit can usually be found by direct substitution if:
  Q(a) ≠ 0

Therefore:
  lim(x→a) P(x)/Q(x) = P(a)/Q(a)

as long as Q(a) ≠ 0.

Example:
  Find: lim(x→2) (x² + 1)/(x + 4)

Substitute:
  = (2² + 1)/(2 + 4)
  = 5/6

Therefore:
  5/6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIRECT SUBSTITUTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Direct Substitution Theorem states that if a function is continuous at x = a, then the limit as x approaches a is simply the value of the function at a. This is one of the most useful ideas in limits because it allows us to evaluate limits by plugging in the value directly, without any extra work. Many functions, such as polynomials, rational functions (where defined), trigonometric functions, exponential functions, and logarithmic functions, are continuous on their domains. Therefore, for these functions, we can simply substitute the input value to find the limit. For example, lim(x→3) (x² + 2x - 1) = 9 + 6 - 1 = 14. However, direct substitution does not work when the function is not defined at the point or when it leads to an indeterminate form. In those cases, we must use other techniques.

The Direct Substitution Theorem states that if a function is continuous at x = a, then:
  lim(x→a) f(x) = f(a)

This is one of the most useful ideas in limits.

If substituting a into the function gives a normal real number, then the limit is often simply that value.

Example:
  Find: lim(x→3) (x² + 2x - 1)

Substitute:
  = 3² + 2(3) - 1
  = 9 + 6 - 1
  = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE SANDWICH THEOREM (SQUEEZE THEOREM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sandwich Theorem, also called the Squeeze Theorem, is a powerful tool for evaluating limits that are difficult to compute directly. It states that if a function f(x) is trapped between two other functions g(x) and h(x) for all x near a (except possibly at a), and if both g(x) and h(x) approach the same limit L as x approaches a, then f(x) must also approach L. This theorem is often used when the function involves oscillatory behaviour, such as sin(1/x), which does not have a limit by itself, but when multiplied by a function that tends to zero, the product is squeezed to zero. For example, we know -x² ≤ x² sin(1/x) ≤ x², and both -x² and x² approach 0 as x→0, so by the Squeeze Theorem, the middle expression also approaches 0. This theorem is essential for proving some of the fundamental limits in calculus, such as lim(x→0) (sin x)/x = 1.

Suppose:
  g(x) ≤ f(x) ≤ h(x)

and:
  lim(x→a) g(x) = L
and:
  lim(x→a) h(x) = L

Then:
  lim(x→a) f(x) = L

Explanation:
  Imagine f(x) being squeezed between two functions.
  If both outside functions approach the same value, then the middle function 
  has no choice but to approach that same value.

Example:
  Consider -x² ≤ x² sin(1/x) ≤ x²

  As x → 0, we know:
    lim(x→0) -x² = 0
  and:
    lim(x→0) x² = 0

  Therefore, by the Sandwich Theorem:
    lim(x→0) x² sin(1/x) = 0

  Even though sin(1/x) oscillates, multiplying it by x² squeezes the entire 
  expression toward zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT SUMMARY OF LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here is a concise summary of the limit laws. These rules form the backbone of limit evaluation and are used repeatedly in calculus. They are valid when the individual limits exist. The constant and identity laws are the simplest, while the product and quotient laws allow us to handle more complex expressions. The power and root laws extend the product law to powers and roots. The Sandwich Theorem provides a way to handle situations where direct evaluation is not possible. Memorising these laws and understanding when to apply them is crucial for success in calculus.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then:

  Constant:          lim(x→a) c = c
  Identity:          lim(x→a) x = a
  Constant Multiple: lim(x→a) c f(x) = cL
  Sum:               lim(x→a) [f(x) + g(x)] = L + M
  Difference:        lim(x→a) [f(x) - g(x)] = L - M
  Product:           lim(x→a) [f(x)g(x)] = LM
  Quotient:          lim(x→a) f(x)/g(x) = L/M, provided M ≠ 0
  Power:             lim(x→a) [f(x)]ⁿ = Lⁿ
  Root:              lim(x→a) ⁿ√(f(x)) = ⁿ√L, provided the root is defined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY LIMIT THEOREMS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Without limit theorems, we would need to calculate many values manually every time we wanted to find a limit, often requiring tedious tables or graphical approximations. The theorems allow us to simplify complicated expressions, evaluate polynomial limits quickly, work with rational functions systematically, and analyze functions with confidence. They also prepare us for more advanced topics such as continuity, derivatives, L'Hôpital's Rule, integrals, and infinite series. By breaking down limits into simpler components, these theorems make calculus more efficient and less error‑prone. Moreover, they provide a solid theoretical foundation that justifies many of the operations we perform in calculus. Understanding and applying these laws is essential for any student of calculus.

The theorems allow us to:
  • Simplify complicated expressions
  • Evaluate polynomial limits quickly
  • Work with rational functions
  • Analyze functions systematically
  • Solve Calculus problems more efficiently

They also prepare us for more advanced topics such as:
  • Continuity
  • Derivatives
  • L'Hôpital's Rule
  • Integrals
  • Infinite series

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Theorem                Formula
  ───────────────────────────────────────────────────────────────────────────
  Constant               lim(x→a) c = c
  Identity               lim(x→a) x = a
  Constant Multiple      lim(x→a) c f(x) = c · lim(x→a) f(x)
  Sum                    lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)
  Difference             lim(x→a) [f(x) - g(x)] = lim f(x) - lim g(x)
  Product                lim(x→a) [f(x)g(x)] = lim f(x) · lim g(x)
  Quotient               lim(x→a) f(x)/g(x) = lim f(x) / lim g(x), if lim g(x) ≠ 0
  Power                  lim(x→a) [f(x)]ⁿ = [lim f(x)]ⁿ
  Root                   lim(x→a) ⁿ√(f(x)) = ⁿ√(lim f(x))
  Sandwich (Squeeze)     If g ≤ f ≤ h and lim g = lim h = L, then lim f = L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Theorems on Limits of Functions provide mathematical rules for evaluating limits efficiently and reliably. The most important laws include the Constant Limit Theorem, Identity Limit Theorem, Constant Multiple Theorem, Sum Theorem, Difference Theorem, Product Theorem, Quotient Theorem, Power Theorem, Root Theorem, Polynomial Limit Theorem, Rational Function Limit Theorem, Direct Substitution Theorem, and the Sandwich (Squeeze) Theorem. These laws allow us to break complicated limits into simpler limits, evaluate them by substitution when possible, and handle tricky cases using the Squeeze Theorem. The most important idea to remember is that limit theorems allow us to break complicated limits into simpler limits. They are essential in Calculus because they make limit problems easier to solve and provide the foundation for studying continuity, derivatives, and integrals. Mastering these laws is a crucial step toward fluency in calculus.

The most important idea to remember is:

  Limit theorems allow us to break complicated limits into simpler limits.

These theorems are essential in Calculus because they make limit problems easier to solve and provide the foundation for studying continuity, derivatives, and integrals.
  `,
  examples: [
    "lim(x→3) 5 = 5 (Constant Theorem)",
    "lim(x→5) x = 5 (Identity Theorem)",
    "lim(x→2) 5x² = 5·4 = 20 (Constant Multiple)",
    "lim(x→2) (x² + 3x) = 4 + 6 = 10 (Sum Theorem)",
    "lim(x→3) (x² - 2x) = 9 - 6 = 3 (Difference Theorem)",
    "lim(x→2) (x)(x+3) = (2)(5) = 10 (Product Theorem)",
    "lim(x→2) (x²+1)/(x+3) = 5/5 = 1 (Quotient Theorem)",
  ],
};

export default topic;