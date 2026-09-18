// filename: derivative-of-power-function-rational-exponents.ts

const topic = {
  id: "derivative-of-power-function-rational-exponents",
  title: "Derivative of the Power Function for Rational Exponents",
  summary:
    "Extending the Power Rule to functions with fractional exponents: d/dx (x^r) = r x^(r-1) where r is a rational number, with applications to radical functions and the Chain Rule.",
  details: `
The derivative of the power function for rational exponents extends the ordinary Power Rule to functions whose exponents are fractions. A rational exponent is a number that can be written as m/n, where m and n are integers and n ≠ 0. Examples include x^(1/2), x^(2/3), and x^(5/2). The important rule is that the same Power Rule that works for integer exponents also works for rational exponents: d/dx (x^r) = r x^(r-1), where r is rational. This extension is crucial because many functions in calculus involve roots and fractional powers, such as square roots, cube roots, and more general algebraic expressions. By converting radicals into rational exponents, we can apply the familiar differentiation techniques and the Chain Rule to find derivatives efficiently. Understanding this topic is essential for handling a wide variety of functions that appear in physics, engineering, and economics, and it also deepens our comprehension of the Power Rule's generality.

The important rule is:
  d/dx (x^r) = r x^(r-1)

where r is a rational number.

So the same Power Rule that works for:
  x², x⁵, x⁷

also works for:
  x^(1/2), x^(3/2), x^(4/3)

"image":   "src/assets/111.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. RATIONAL EXPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before differentiating rational powers, it is important to understand what they mean. A rational exponent m/n can be interpreted using roots: x^(m/n) = ⁿ√(x^m). This connection between exponents and radicals is fundamental because it allows us to rewrite radical expressions as powers, making them amenable to the Power Rule. For example, √x becomes x^(1/2), ∛(x²) becomes x^(2/3), and √(x³) becomes x^(3/2). Recognizing these equivalences is the first step in differentiating functions that involve roots. Moreover, rational exponents enable us to apply the Chain Rule when the base is a more complicated expression, such as (2x+1)^(3/2). Mastering this conversion is essential for simplifying and differentiating a wide range of algebraic and trigonometric functions that appear in calculus.

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

The Power Rule for rational exponents is a direct extension of the rule for integer exponents. It states that for any rational number r, the derivative of x^r is r x^(r-1). This rule is derived from the definition of the derivative using limits, and it holds for all real numbers r, provided the expression is defined. For fractional exponents, we simply multiply by the exponent and then subtract 1 from the exponent, just as we do with integers. For example, for f(x) = x^(1/2), the derivative is (1/2)x^(-1/2). This formula is powerful because it unifies the differentiation of all power functions, whether the exponent is positive, negative, integer, or fraction. It eliminates the need for separate rules for square roots and other radicals, as they can all be treated as power functions.

The Power Rule states:
  d/dx (x^r) = r x^(r-1)

where r can be a rational number.

For example:
  f(x) = x^(1/2)

Then:
  f'(x) = (1/2)x^(-1/2)

Therefore:
  f'(x) = 1/(2√x)

"image": "src/assets/140.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: x^(1/2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example illustrates the basic application of the Power Rule to a square root. The function f(x) = √x is one of the most common radical functions. By rewriting it as x^(1/2), we can differentiate it directly. Following the rule, we bring the exponent 1/2 in front and reduce the exponent by 1, giving (1/2)x^(-1/2). The negative exponent indicates that the derivative is a reciprocal of a square root, which matches the known result from limit definitions. This simple case shows that the Power Rule works seamlessly for fractional powers, and it also highlights how the derivative of a square root involves a square root in the denominator.

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

"image": "src/assets/141.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: x^(3/2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here we differentiate a function with a rational exponent greater than 1. The function f(x) = x^(3/2) is equivalent to √(x³). Using the Power Rule, we multiply by 3/2 and reduce the exponent by 1 to get (3/2)x^(1/2). This result can be written as (3/2)√x, showing that the derivative of x^(3/2) is proportional to the square root of x. This example demonstrates that the derivative of a rational power can often be expressed in radical form, which is sometimes more intuitive. It also reinforces the pattern that the exponent decreases by 1, regardless of whether the exponent is an integer or a fraction.

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

"image": "src/assets/142.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: x^(2/3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example involves a fractional exponent less than 1, specifically x^(2/3), which is the cube root of x². Applying the Power Rule gives (2/3)x^(-1/3). The negative exponent indicates that the derivative involves a reciprocal of the cube root of x. This case is interesting because the original function is defined for all real numbers (since the cube root of x² is defined for negative x), but the derivative has a singularity at x = 0. This illustrates that rational exponents can lead to differentiability issues at points where the exponent is less than 1. It also shows that the Power Rule works uniformly, even when the resulting exponent is negative, provided the expression is defined.

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

"image": "src/assets/143.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: x^(5/3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example extends the pattern to a fractional exponent with numerator greater than denominator. The function f(x) = x^(5/3) represents the cube root of x⁵. Applying the Power Rule, we bring down 5/3 and subtract 1 (i.e., 5/3 - 1 = 2/3) to get (5/3)x^(2/3). This result can be written as (5/3)∛(x²). This shows that the derivative of a higher rational power is simply a constant times a lower rational power, following the same algebraic pattern as integer exponents. This example reinforces the universality of the Power Rule and prepares us for more complex composite functions where the Chain Rule is needed.

Let:
  f(x) = x^(5/3)

Then:
  f'(x) = (5/3)x^(5/3 - 1)
  = (5/3)x^(2/3)

Therefore:
  f'(x) = (5/3)x^(2/3)

or:
  f'(x) = (5/3)∛(x²)

"image": "src/assets/144.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: x^(7/4)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here we differentiate a function with a denominator of 4, i.e., a fourth root. The function f(x) = x^(7/4) is the fourth root of x⁷. Using the Power Rule, we multiply by 7/4 and reduce the exponent by 1 (7/4 - 1 = 3/4) to get (7/4)x^(3/4). This result shows that the derivative is proportional to the fourth root of x³. This example demonstrates that the Power Rule works for any rational exponent, regardless of the size of the numerator or denominator. It also reinforces that the new exponent is always the old exponent minus 1, which is a consistent pattern.

Consider:
  f(x) = x^(7/4)

Using the Power Rule:
  f'(x) = (7/4)x^(7/4 - 1)
  = (7/4)x^(3/4)

Therefore:
  f'(x) = (7/4)x^(3/4)

"image": "src/assets/145.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONAL EXPONENTS AND RADICAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many radical functions can be converted into rational exponents before differentiation, which often simplifies the process. For instance, √x becomes x^(1/2), and its derivative is readily obtained. This conversion is usually easier than trying to differentiate the radical directly using the definition of the derivative. Moreover, it allows us to apply the Chain Rule when the radical contains a non‑linear expression, such as √(x²+1). By rewriting radicals as powers, we can use the familiar Power Rule and avoid the more cumbersome quotient or product rules that might otherwise arise. This approach also helps in handling nested radicals and more complex algebraic functions. Therefore, converting radicals to rational exponents is a standard technique in calculus that simplifies differentiation and integration.

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

This example shows how to differentiate a cube root by first converting it to a rational exponent. The function f(x) = ∛(x²) is equivalent to x^(2/3). Applying the Power Rule gives (2/3)x^(-1/3), which can be rewritten as 2/(3∛x). This result is much easier to obtain than if we attempted to differentiate the radical form directly using the definition. It also illustrates that the derivative of a cube root of a power often involves a cube root in the denominator, which is a common pattern. This technique is especially useful when the expression inside the root is more complex, as we can then use the Chain Rule after converting.

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

Similarly, a fourth root can be handled by converting to a rational exponent. For f(x) = ∜(x³), we write it as x^(3/4). The Power Rule then gives (3/4)x^(-1/4), which is 3/(4∜x). This demonstrates the general approach for any root: express the root as a fractional exponent and differentiate using the Power Rule. This method is consistent and avoids the need for memorising separate derivative formulas for each type of root. It also shows that the derivative of a root of x^n is a constant times x^(n/m - 1). This pattern is useful for quickly computing derivatives of radical functions.

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

The Power Rule also works when a constant is multiplied by the function. Using the Constant Multiple Rule, we can factor out the constant and differentiate the power part. For example, f(x) = 5x^(3/2) has derivative 5 * (3/2)x^(1/2) = (15/2)x^(1/2). This is a straightforward extension of the basic rule. It is important to remember that the constant multiple theorem applies here, so we can separate the constant from the differentiation. This technique is used frequently in differentiating polynomial terms with fractional exponents, as well as in more complex expressions where the coefficient is a number.

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

When a function is a sum of terms with rational exponents, we differentiate each term separately using the Power Rule and then combine the results. This is analogous to differentiating polynomial functions. For instance, f(x) = 4x^(5/2) - 3x^(3/2) + 7x^(1/2) has derivatives: for the first term, 10x^(3/2); for the second, -(9/2)x^(1/2); for the third, (7/2)x^(-1/2). Summing these gives the final derivative. This process demonstrates that the Power Rule applies linearly, and we can treat each term independently. This technique is essential for differentiating algebraic functions with multiple fractional powers, which often appear in physics and engineering problems.

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

The Power Rule also works for negative rational exponents, which often arise from reciprocals of powers. For example, f(x) = x^(-3/2) differentiates to -(3/2)x^(-5/2). This is the same as -3/(2x^(5/2)). Negative exponents indicate that the function is a reciprocal of a power, and the differentiation follows the same pattern. This is common when dealing with functions like 1/√x or 1/x^(2/3). Understanding how to differentiate negative rational powers is crucial for handling rational functions and for applying the Quotient Rule indirectly. The Power Rule handles all cases uniformly, making it a versatile tool.

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

The Power Rule always follows the same pattern: we bring the exponent down as a multiplier and then reduce the exponent by 1. This is true for all real exponents, including fractions. The subtraction of 1 from the exponent is the key operation. For example, x^(5/2) becomes (5/2)x^(3/2) because 5/2 - 1 = 3/2. Similarly, x^(2/3) becomes (2/3)x^(-1/3) because 2/3 - 1 = -1/3. Understanding this arithmetic is essential for avoiding errors when dealing with fractional exponents. The pattern is consistent and can be applied mechanically once you are comfortable with fraction subtraction. This uniformity is one of the reasons the Power Rule is so powerful and widely used in calculus.

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

"image": "src/assets/146.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RATIONAL EXPONENTS AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The rational Power Rule can be combined with the Chain Rule to differentiate composite functions where the base is not simply x. For a function of the form [g(x)]^r, the derivative is r[g(x)]^(r-1) · g'(x). This is a direct application of the Chain Rule, treating the power as the outer function and g(x) as the inner function. This combination is extremely important because many functions involve expressions raised to fractional powers. For example, f(x) = (x²+1)^(3/2) differentiates to (3/2)(x²+1)^(1/2) · 2x, which simplifies to 3x√(x²+1). This technique is used extensively in calculus to differentiate complex algebraic, trigonometric, and exponential functions. Mastering this rule is essential for success in differentiation.

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

"image": "src/assets/147.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH A RADICAL INSIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example demonstrates the Chain Rule with a square root of a linear expression. Consider f(x) = √(3x² + 2). Rewriting it as (3x²+2)^(1/2), we differentiate the outer power to get (1/2)(3x²+2)^(-1/2) and then multiply by the derivative of the inner function, which is 6x. Simplifying gives 3x/√(3x²+2). This shows how rational exponents simplify the differentiation of radicals. The result is a rational function involving a square root in the denominator. This technique is commonly used in physics and engineering when dealing with formulas that involve square roots of expressions.

Consider:
  f(x) = √(3x² + 2)

Rewrite:
  f(x) = (3x² + 2)^(1/2)

Apply the Chain Rule:
  f'(x) = (1/2)(3x² + 2)^(-1/2)(6x)

Simplify:
  f'(x) = 3x/√(3x² + 2)

"image": "src/assets/148.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH A CUBE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here we differentiate a cube root of a quadratic expression. The function f(x) = ∛(2x²+5) becomes (2x²+5)^(1/3). The derivative of the outer power is (1/3)(2x²+5)^(-2/3), and the derivative of the inner is 4x. Multiplying gives 4x/[3(2x²+5)^(2/3)]. This is the standard form for the derivative of a cube root of a function. This example illustrates that the same Chain Rule procedure works for any root, not just square roots. It also shows that the derivative involves the original expression raised to a negative power, which can be left in that form or rewritten as a reciprocal.

Consider:
  f(x) = ∛(2x² + 5)

Rewrite:
  f(x) = (2x² + 5)^(1/3)

Apply the Chain Rule:
  f'(x) = (1/3)(2x² + 5)^(-2/3)(4x)

Therefore:
  f'(x) = 4x/[3(2x² + 5)^(2/3)]

"image": "src/assets/149.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DOMAIN CONSIDERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rational exponents can introduce important domain restrictions. For example, f(x) = √x = x^(1/2) is only defined for x ≥ 0 over the real numbers. Its derivative, 1/(2√x), is defined only for x > 0. At x = 0, the function is continuous (f(0)=0) but the derivative does not exist as a finite number because the tangent is vertical. This is a key point: differentiability requires the derivative to be finite, and at x = 0, the slope becomes infinite. Similarly, for f(x) = x^(2/3), the derivative is 2/(3∛x), which is undefined at x = 0 even though the function is continuous there. These examples highlight that continuity does not imply differentiability, especially for functions with fractional exponents less than 1. Understanding these domain issues is crucial for accurately applying the Power Rule and for interpreting the behavior of functions near such points.

For example:
  f(x) = √x = x^(1/2)

over the real numbers requires x ≥ 0.

Its derivative:
  f'(x) = 1/(2√x)

is defined only for x > 0.

Notice something important:
  f(x) is defined at x = 0, but f'(0) does not exist as a finite derivative.

The graph has a vertical tangent at the origin.

"image": "src/assets/150.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ANOTHER IMPORTANT EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x^(2/3). This function is defined for all real numbers because the cube root of x² is always defined (the square makes the radicand non‑negative). Its derivative is (2/3)x^(-1/3) = 2/(3∛x). At x = 0, the derivative is undefined because the denominator becomes zero. This means the function has a cusp or a vertical tangent at the origin. The function is continuous at 0, but it is not differentiable there. This is a classic example illustrating that a function can be continuous everywhere but fail to be differentiable at a point due to a sharp corner or vertical tangent. Such behaviour is common with rational exponents less than 1 when the numerator is even.

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

When differentiating rational powers, several common mistakes occur. One is forgetting to multiply by the exponent, e.g., treating d/dx x^(3/2) as x^(1/2) instead of (3/2)x^(1/2). Another is subtracting 1 incorrectly, e.g., for x^(5/3), some might incorrectly compute 5/3 - 1 = 4/5 instead of 2/3. Also, when applying the Chain Rule, forgetting to multiply by the derivative of the inner function is a frequent error; for (2x+1)^(3/2), the derivative is not simply (3/2)(2x+1)^(1/2) but also requires multiplying by 2. These mistakes can be avoided by following the rule systematically: bring the exponent down, subtract 1 from the exponent, and if the base is a function, multiply by its derivative. Practice and careful arithmetic are key to mastering this topic.

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

When you encounter a power function with a rational exponent, follow these steps to differentiate correctly. First, identify the exponent. Then, multiply by the exponent, subtract 1 from the exponent, and write the result. If the base contains an expression other than x, you must also multiply by the derivative of that expression (Chain Rule). This procedure works for any rational exponent, positive or negative, and for any base function. Practicing this routine will help you avoid common mistakes and differentiate efficiently. It also reinforces the linearity of differentiation, allowing you to break down complex expressions into simpler parts.

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

The two most important formulas for this topic are the rational Power Rule and its generalized version with the Chain Rule. The rational Power Rule states that for any rational number m/n, the derivative of x^(m/n) is (m/n)x^(m/n - 1). The generalized version states that for a composite function [g(x)]^(m/n), the derivative is (m/n)[g(x)]^(m/n - 1) · g'(x). These formulas cover all cases involving powers with rational exponents. They are essential for differentiating radical functions, functions with fractional powers, and algebraic expressions. Memorising these formulas and understanding their derivation will greatly simplify your work in calculus.

  Rational Power Rule:
    d/dx (x^(m/n)) = (m/n)x^(m/n - 1)
    where the expression is defined appropriately over the real numbers.

  Generalized Rational Power Rule:
    d/dx [g(x)]^(m/n) = (m/n)[g(x)]^(m/n - 1) · g'(x)

  The second formula combines the Power Rule and the Chain Rule.

"image": "src/assets/151.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This comprehensive example combines several rational power terms and demonstrates the application of the Power Rule to each term. We differentiate f(x) = 3x^(7/3) - 4x^(5/2) + 6x^(1/2) term by term. For the first term, the derivative is 7x^(4/3); for the second, -10x^(3/2); for the third, 3x^(-1/2). The final derivative is the sum of these. This example illustrates that the Power Rule applies linearly, and we can handle each term independently. Such sums frequently occur in algebraic differentiation and are straightforward once the basic rule is mastered. This complete example serves as a template for differentiating any polynomial with rational exponents.

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

"image": "src/assets/117.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Derivative of the Power Function for Rational Exponents extends the Power Rule to fractional exponents. The fundamental formula is d/dx (x^r) = r x^(r-1), where r can be any rational number. For x^(m/n), the derivative is (m/n)x^(m/n - 1). For a composite function [g(x)]^(m/n), we use the Chain Rule: d/dx [g(x)]^(m/n) = (m/n)[g(x)]^(m/n - 1) · g'(x). The main idea to remember is that the Power Rule works for rational exponents just as it works for whole‑number exponents: multiply by the exponent, then subtract 1 from the exponent. If the base contains another function, multiply by the derivative of that inner function using the Chain Rule. This topic is especially important for differentiating radical functions, fractional powers, algebraic functions, and composite functions. Mastering it is essential for success in calculus.

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