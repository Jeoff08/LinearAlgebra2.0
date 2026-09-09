// filename: differential-formulas.ts

const topic = {
  id: "differential-formulas",
  title: "Differential Formulas",
  summary:
    "Rules used to find the differential dy of a function, derived from derivative rules with the relationship dy = f'(x) dx, including power, product, quotient, and chain rules.",
  details: `
Differential formulas are rules used to find the differential dy of a function. They are closely connected to the derivative because the basic relationship is:
  dy = f'(x) dx

If y = f(x), then:
  dy = f'(x) dx

In other words, once you know the derivative of a function, you can obtain its differential simply by multiplying the derivative by dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIFFERENTIAL OF A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a constant is always zero. This makes intuitive sense: a constant function does not change as x changes, so its rate of change is zero, and consequently its differential is zero. This is the simplest differential formula and follows directly from the derivative rule d/dx (C) = 0. For example, if y = 15, then dy = 0. This rule is important because it tells us that constant terms do not contribute to the differential of a function. In applications, this means that fixed values such as initial conditions or baseline measurements do not affect how a quantity changes with respect to x. Understanding this rule is fundamental for working with differentials in calculus.

If y = C where C is a constant, then:
  dy/dx = 0

Therefore:
  dy = 0

Example:
  y = 15

Then:
  dy = 0

A constant does not change when x changes, so its differential is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIFFERENTIAL OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of the identity function y = x is simply dy = dx. This is a fundamental result because it establishes that the differential of the independent variable x is just dx itself. This relationship is the basis for all differential formulas, as it allows us to express the differential of any function as a multiple of dx. In practice, this means that when we differentiate a function, we can think of the process as finding the relationship between dy and dx. The simplicity of this rule makes it a cornerstone of differential calculus. It also reinforces the idea that dx represents a small change in x, and dy represents the corresponding small change in y.

If y = x, then:
  dy/dx = 1

Therefore:
  dy = dx

This is one of the most fundamental differential formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIFFERENTIAL OF A POWER FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a power function is given by the power rule: d(xⁿ) = nxⁿ⁻¹ dx. This is one of the most frequently used differential formulas and is derived directly from the derivative of xⁿ. The rule states that to find the differential, we bring down the exponent as a coefficient, reduce the exponent by one, and multiply by dx. For example, if y = x⁵, then dy = 5x⁴ dx. This formula applies to all real exponents, including negative and fractional values, making it extremely versatile. It is the foundation for differentiating polynomials and many other algebraic functions. Mastering this rule is essential for success in calculus.

For y = xⁿ, the Power Rule gives:
  dy/dx = nxⁿ⁻¹

Therefore:
  dy = nxⁿ⁻¹ dx

Example:
  Find the differential of y = x⁵.

  Differentiate:
    dy/dx = 5x⁴

  Thus:
    dy = 5x⁴ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENTIAL OF A CONSTANT MULTIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a function is multiplied by a constant, the differential is simply the constant times the differential of the function. This follows from the constant multiple rule for derivatives: d/dx [c f(x)] = c f'(x). For example, if y = 7x³, then dy = 21x² dx. This rule allows us to "pull out" constants when computing differentials, which often simplifies the calculation. It is important to remember that the constant stays outside the differential operation. This property is used frequently in integration as well, where constants can be factored out of integrals. Understanding this rule helps in recognizing patterns and simplifying expressions.

If y = c f(x), where c is a constant, then:
  dy/dx = c f'(x)

Therefore:
  dy = c f'(x) dx

Example:
  y = 7x³

  Differentiate:
    dy/dx = 21x²

  Thus:
    dy = 21x² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SUM RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a sum of functions is the sum of their differentials. This rule is a direct consequence of the sum rule for derivatives. If y = u + v, then dy = du + dv. This means that we can differentiate each term separately and add the results. For example, if y = x³ + x², then dy = 3x² dx + 2x dx = (3x² + 2x) dx. This rule is essential for differentiating polynomials and any function that can be expressed as a sum of simpler terms. It is one of the linearity properties of differentials and is used extensively in both differentiation and integration. It also extends to sums of any number of terms.

If y = f(x) + g(x), then:
  dy = df(x) + dg(x)

More simply:
  d(u + v) = du + dv

This means that the differential of a sum is the sum of the differentials.

Example:
  Suppose y = x³ + x².

  Then:
    dy = d(x³) + d(x²)

  Using the Power Rule:
    dy = 3x² dx + 2x dx

  Therefore:
    dy = (3x² + 2x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIFFERENCE RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a difference of functions is the difference of their differentials. This is the natural counterpart to the sum rule. If y = u - v, then dy = du - dv. For example, if y = x⁴ - x², then dy = 4x³ dx - 2x dx = (4x³ - 2x) dx. This rule is equally important and is used whenever a function involves subtraction. Together with the sum rule, it allows us to differentiate any linear combination of functions. These linearity properties are fundamental to the operation of differentiation and are used in almost every calculus problem. They also highlight the linear nature of the differential operator.

For y = u - v, the differential is:
  d(u - v) = du - dv

Example:
  y = x⁴ - x²

  Therefore:
    dy = 4x³ dx - 2x dx

  So:
    dy = (4x³ - 2x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PRODUCT RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a product of two functions is given by d(uv) = u dv + v du. This is the differential version of the product rule for derivatives. It tells us that when two functions are multiplied, the differential is the first function times the differential of the second, plus the second function times the differential of the first. For example, if y = x² sin x, then with u = x² and v = sin x, we get du = 2x dx and dv = cos x dx, so dy = x²(cos x dx) + sin x(2x dx) = (x² cos x + 2x sin x) dx. This rule is essential for differentiating products and is used in many applications, including physics and engineering. It is important to remember the order of terms and to apply the rule correctly.

Suppose y = uv.

The differential of a product is:
  d(uv) = u dv + v du

This comes from the Product Rule for derivatives.

Example:
  Let y = x² sin x.

  Set u = x² and v = sin x.

  Then:
    du = 2x dx
  and:
    dv = cos x dx

  Using the product differential formula:
    dy = u dv + v du

  Therefore:
    dy = x²(cos x dx) + sin x(2x dx)

  Thus:
    dy = (x² cos x + 2x sin x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUOTIENT RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of a quotient of two functions is given by d(u/v) = (v du - u dv)/v², provided v ≠ 0. This is the differential version of the quotient rule. It is used when a function is expressed as a ratio of two other functions. For example, if y = x²/(x + 1), then with u = x² and v = x + 1, we have du = 2x dx and dv = dx, so dy = ((x + 1)(2x dx) - x²(dx))/(x + 1)² = (x² + 2x)/(x + 1)² dx. This rule is essential for differentiating rational functions and is frequently used in calculus. The quotient rule is often more complex than the product rule, so it's important to be careful with signs and to remember that the denominator is squared.

For y = u/v, the differential formula is:
  d(u/v) = (v du - u dv)/v²

provided v ≠ 0.

Example:
  Let y = x²/(x + 1).

  Set u = x², v = x + 1.

  Then:
    du = 2x dx
  and:
    dv = dx

  Therefore:
    dy = ((x + 1)(2x dx) - x²(dx))/(x + 1)²

  Simplifying:
    dy = (2x(x + 1) - x²)/(x + 1)² dx
    dy = (x² + 2x)/(x + 1)² dx

  Thus:
    dy = (x² + 2x)/(x + 1)² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHAIN RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The chain rule for differentials is one of the most powerful and useful properties of differential notation. If y = f(u) and u = g(x), then dy = (dy/du) du. This allows us to compute the differential of composite functions by breaking them into simpler parts. For example, if y = (x² + 3)⁴, we can let u = x² + 3, so y = u⁴. Then dy = 4u³ du, and since du = 2x dx, we get dy = 4(x² + 3)³ (2x dx) = 8x(x² + 3)³ dx. The chain rule for differentials is essentially the same as the chain rule for derivatives, but expressed in differential form. It is particularly useful for substitutions in integration and for solving differential equations. Mastering this rule is essential for advanced calculus.

One of the most useful properties of differential notation is its relationship with the Chain Rule.

Suppose y = f(u) and u = g(x).

Then:
  dy = (dy/du) du

Since:
  du = (du/dx) dx

we get:
  dy = (dy/du)(du/dx) dx

This is essentially the Chain Rule written using differentials.

Example:
  Let y = (x² + 3)⁴.

  Let u = x² + 3.

  Then y = u⁴.

  Therefore:
    dy = 4u³ du

  Now:
    du = 2x dx

  Substitute:
    dy = 4u³(2x dx)

  Since u = x² + 3, we obtain:
    dy = 8x(x² + 3)³ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIAL OF A ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Roots can be differentiated by converting them to fractional exponents and then applying the power rule. For example, √x = x^(1/2), so its differential is (1/2)x^(-1/2) dx = 1/(2√x) dx. Similarly, for √(x³) = x^(3/2), the differential is (3/2)x^(1/2) dx = (3/2)√x dx. This technique is straightforward and works for any root function. It is important to remember that the power rule applies to all real exponents, including fractions. Converting roots to fractional exponents often simplifies the differentiation process and makes it easier to apply the chain rule when the root contains a more complex expression.

Roots can be converted into fractional exponents.

For example:
  y = √x

can be written as:
  y = x^(1/2)

Using the Power Rule:
  dy = (1/2)x^(-1/2) dx

Therefore:
  dy = 1/(2√x) dx

Example:
  Find the differential of y = √(x³).

  Rewrite:
    y = x^(3/2)

  Then:
    dy = (3/2)x^(1/2) dx

  Therefore:
    dy = (3/2)√x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIAL OF A RECIPROCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of 1/x can be found by rewriting it as x⁻¹ and applying the power rule. This gives dy = -x⁻² dx = -1/x² dx. This formula is a special case of the power rule with n = -1. It is frequently used when differentiating rational functions. The negative sign is important and should not be forgotten. This differential appears in many applications, including physics and economics, where reciprocal relationships are common. Understanding this simple formula helps in recognizing patterns and simplifying more complex expressions.

If y = 1/x, rewrite it as y = x⁻¹.

Then:
  dy = -x⁻² dx

Therefore:
  dy = -1/x² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIFFERENTIAL OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of eˣ is simply eˣ dx, because the derivative of eˣ is eˣ itself. This is one of the simplest and most important differential formulas, reflecting the special property of the exponential function. For a constant multiple, such as 3eˣ, the differential is 3eˣ dx. For composite exponential functions like e^(x²), we use the chain rule: let u = x², so dy = e^(x²) d(x²) = 2x e^(x²) dx. These formulas are essential for modeling growth and decay processes, as well as for many other applications in science and engineering. The exponential function's unique property makes it a central object in calculus.

For y = eˣ, the derivative is:
  dy/dx = eˣ

Therefore:
  dy = eˣ dx

Example:
  y = 3eˣ

  Then:
    dy = 3eˣ dx

Exponential with a Function:
  If y = eᵘ, then:
    dy = eᵘ du

Example:
  y = e^(x²)

  Then:
    dy = e^(x²) d(x²)

  Since:
    d(x²) = 2x dx

  we get:
    dy = 2x e^(x²) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DIFFERENTIAL OF THE NATURAL LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of ln x is dx/x. This follows from the derivative of ln x, which is 1/x. This formula is essential for integrating rational functions and for solving differential equations. For composite logarithmic functions like ln(x² + 1), we use the chain rule: let u = x² + 1, so dy = du/u = 2x/(x² + 1) dx. This formula is particularly important in calculus because the natural logarithm appears frequently in integration, especially when dealing with 1/x and related functions. Understanding this differential is key to mastering logarithmic differentiation and integration.

For y = ln x, we know:
  dy/dx = 1/x

Therefore:
  dy = dx/x

Natural Logarithm of a Function:
  For y = ln u, we have:
    dy = du/u

Example:
  y = ln(x² + 1)

  Let u = x² + 1.

  Then:
    du = 2x dx

  Therefore:
    dy = du/u

  Thus:
    dy = 2x/(x² + 1) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DIFFERENTIAL OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of sin x is cos x dx. This is a fundamental trigonometric differential that is used extensively in calculus. The derivative of sin x is cos x, so multiplying by dx gives the differential. This formula is essential for differentiating functions that involve sine, and it appears in many applications, including physics (simple harmonic motion) and engineering (signal processing). For composite functions like sin(x²), we use the chain rule: let u = x², so dy = cos u du = cos(x²) · 2x dx = 2x cos(x²) dx. Understanding this formula is crucial for working with trigonometric functions in calculus.

For y = sin x, the derivative is:
  dy/dx = cos x

Therefore:
  dy = cos x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DIFFERENTIAL OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of cos x is -sin x dx, because the derivative of cos x is -sin x. This formula is the counterpart to the sine differential and is equally important. The negative sign is crucial and must be remembered. For composite functions like cos(x²), we use the chain rule: dy = -sin(x²) · 2x dx = -2x sin(x²) dx. These trigonometric differentials are used extensively in calculus, particularly in integration and in solving differential equations. Mastering them is essential for success in calculus and its applications.

For y = cos x, the derivative is:
  dy/dx = -sin x

Therefore:
  dy = -sin x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DIFFERENTIAL OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of tan x is sec² x dx, since the derivative of tan x is sec² x. This formula is derived from the quotient rule or from the derivative of sin x / cos x. It is used in many calculus problems involving trigonometric functions, especially in integration where sec² x appears. For composite functions, the chain rule applies: d(tan u) = sec² u du. This formula is essential for differentiating tangent and for recognizing patterns in integrals.

For y = tan x, the derivative is:
  dy/dx = sec² x

Therefore:
  dy = sec² x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DIFFERENTIAL OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of cot x is -csc² x dx, because the derivative of cot x is -csc² x. This formula is the counterpart to the tangent differential and is used in similar contexts. The negative sign and the cosecant squared term are important to remember. For composite functions, d(cot u) = -csc² u du. This formula is useful in integration and in solving trigonometric equations.

For y = cot x, the derivative is:
  dy/dx = -csc² x

Therefore:
  dy = -csc² x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DIFFERENTIAL OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of sec x is sec x tan x dx, since the derivative of sec x is sec x tan x. This formula is less common but appears in certain integrals and differential equations. For composite functions, d(sec u) = sec u tan u du. This formula is derived from the derivative of 1/cos x and is useful in calculus problems involving trigonometric identities. It is important to remember the product of sec and tan in the differential.

For y = sec x, the derivative is:
  dy/dx = sec x tan x

Therefore:
  dy = sec x tan x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DIFFERENTIAL OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The differential of csc x is -csc x cot x dx, because the derivative of csc x is -csc x cot x. This formula is the counterpart to the secant differential and includes a negative sign. For composite functions, d(csc u) = -csc u cot u du. This formula is used in integration and in solving differential equations involving trigonometric functions. Remembering the negative sign is crucial for correct application.

For y = csc x, the derivative is:
  dy/dx = -csc x cot x

Therefore:
  dy = -csc x cot x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. DIFFERENTIAL OF INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse trigonometric functions have important differential formulas that are used in calculus. The derivative of arcsin x is 1/√(1 - x²), so its differential is dx/√(1 - x²). The derivative of arccos x is -1/√(1 - x²), so its differential is -dx/√(1 - x²). The derivative of arctan x is 1/(1 + x²), so its differential is dx/(1 + x²). These formulas are essential for integrating functions that involve inverse trigonometric expressions. They are often used in calculus problems involving trigonometric substitutions and in applications where inverse trigonometric functions naturally arise.

Several important inverse trigonometric differential formulas are:

Arcsine:
  y = sin⁻¹ x
  gives:
    dy = dx/√(1 - x²)

Arccosine:
  y = cos⁻¹ x
  gives:
    dy = -dx/√(1 - x²)

Arctangent:
  y = tan⁻¹ x
  gives:
    dy = dx/(1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A GENERAL DIFFERENTIAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful way to remember differential formulas is to think of the differential operator d as acting on a function in the same way that differentiation does, except that the result is multiplied by dx. That is, d[f(x)] = f'(x) dx. This compact formula unifies all the specific rules we have discussed. For example, d(x³) = 3x² dx, d(sin x) = cos x dx, d(eˣ) = eˣ dx, and d(ln x) = dx/x. This general formula is the key to understanding differentials and their relationship to derivatives. It also makes it easy to derive new differential formulas from known derivative rules.

A very useful way to remember differential formulas is:
  d[f(x)] = f'(x) dx

This means that the differential operator d acts on a function in the same way that differentiation does, except that the result is multiplied by dx.

For example:
  d(x³) = 3x² dx
  d(sin x) = cos x dx
  d(eˣ) = eˣ dx
  d(ln x) = dx/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT DIFFERENTIAL FORMULAS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the most important differential formulas. It includes the power rule, product rule, quotient rule, and the differentials of exponential, logarithmic, and trigonometric functions. This table serves as a quick reference for solving problems. Memorizing these formulas will significantly speed up your work in calculus. The table is organized by function type, making it easy to find the formula you need.

  Function          Differential
  ──────────────────────────────────────────────────────
  y = C             dy = 0
  y = x             dy = dx
  y = xⁿ            dy = nxⁿ⁻¹ dx
  y = c u           dy = c du
  y = u + v         dy = du + dv
  y = u - v         dy = du - dv
  y = u v           dy = u dv + v du
  y = u/v           dy = (v du - u dv)/v²
  y = eˣ            dy = eˣ dx
  y = ln x          dy = dx/x
  y = sin x         dy = cos x dx
  y = cos x         dy = -sin x dx
  y = tan x         dy = sec² x dx
  y = cot x         dy = -csc² x dx
  y = sec x         dy = sec x tan x dx
  y = csc x         dy = -csc x cot x dx
  y = sin⁻¹ x       dy = dx/√(1 - x²)
  y = cos⁻¹ x       dy = -dx/√(1 - x²)
  y = tan⁻¹ x       dy = dx/(1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE MOST IMPORTANT RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For most Calculus 1 problems, these are the formulas you should know first. The basic rule dy = f'(x) dx is the foundation. The power rule, sum and difference rules, product rule, quotient rule, and chain rule are the building blocks. Mastering these rules will allow you to compute the differential of almost any elementary function. These formulas are used in virtually every calculus problem involving differentiation, and they are essential for understanding integration. Make sure you can recall them quickly and accurately.

For most Calculus 1 problems, these are the formulas you should know first:

  Basic rule:
    dy = f'(x) dx

  Power rule:
    d(xⁿ) = nxⁿ⁻¹ dx

  Sum rule:
    d(u + v) = du + dv

  Difference rule:
    d(u - v) = du - dv

  Product rule:
    d(uv) = u dv + v du

  Quotient rule:
    d(u/v) = (v du - u dv)/v²

  Chain rule:
    dy = (dy/du) du

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. DIFFERENTIAL VS. DERIVATIVE   THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is useful to organize the ideas this way:

  dy/dx = f'(x)

tells you the instantaneous rate of change.

Then multiply by a small change dx:

  dy = (dy/dx) dx

to obtain the corresponding differential change.

And for a sufficiently small change:
  dy ≈ Δy

which allows us to use differentials for approximations and error estimation.

In simple terms:

  A derivative tells you how fast something is changing, while a differential 
  uses that rate of change to estimate how much the quantity changes.

That distinction is the key idea behind the entire topic of Differential Formulas.
  `,
  examples: [
    "d(x⁵) = 5x⁴ dx",
    "d(7x³) = 21x² dx",
    "d(x³ + x²) = (3x² + 2x) dx",
    "d(x⁴ - x²) = (4x³ - 2x) dx",
    "d(x² sin x) = (x² cos x + 2x sin x) dx",
    "d(x²/(x+1)) = (x²+2x)/(x+1)² dx",
    "d((x²+3)⁴) = 8x(x²+3)³ dx",
  ],
};

export default topic;