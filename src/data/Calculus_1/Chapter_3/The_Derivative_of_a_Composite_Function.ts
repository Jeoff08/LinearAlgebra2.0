// filename: the-derivative-of-a-composite-function.ts

const topic = {
  id: "the-derivative-of-a-composite-function",
  title: "The Derivative of a Composite Function",
  summary:
    "The derivative of a composite function is found using the Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x), differentiating the outside function and multiplying by the derivative of the inside function.",
  details: `
The derivative of a composite function is found using the Chain Rule. A composite function occurs when one function is inside another function. For example, in f(x) = (3x + 2)⁵, the expression 3x + 2 is inside the fifth power. In f(x) = √(x² + 1), x² + 1 is inside the square‑root function. The Chain Rule allows us to differentiate these functions by working from the outside function to the inside function. The main formula is d/dx [f(g(x))] = f'(g(x)) · g'(x). In simple words, we differentiate the outside function, keep the inside function unchanged, then multiply by the derivative of the inside function. This rule is one of the most powerful and frequently used techniques in calculus because many functions are naturally composed of simpler functions nested within each other. Without the Chain Rule, differentiating such functions would be extremely difficult or impossible. Mastering this rule is essential for success in calculus and its applications.

The main formula is:
  d/dx [f(g(x))] = f'(g(x)) · g'(x)

In simple words:
  Differentiate the outside function, keep the inside function unchanged, 
  then multiply by the derivative of the inside function.

"image": "src/assets/160.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A COMPOSITE FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A composite function is a function formed by combining two or more functions where the output of one function becomes the input of another. If f(x) and g(x) are functions, their composition is written as (f ∘ g)(x) = f(g(x)). This notation means that we first apply g to x, then apply f to the result. For example, if f(x) = x² and g(x) = x + 3, then f(g(x)) = (x + 3)². This is a composite function because the function g (which adds 3) is applied first, and then the function f (which squares) is applied to the result. Composite functions are everywhere in mathematics and science, from simple polynomial compositions to complex models in physics and engineering. Recognising when a function is composite is the first step in applying the Chain Rule to find its derivative. The composition of functions is also a key concept in understanding transformations, inverse functions, and more advanced topics like function iteration.

If f(x) and g(x) are functions, their composition is written as:
  (f ∘ g)(x) = f(g(x))

This means:
  First apply g(x), then apply f(x) to the result.

Example:
  Suppose f(x) = x² and g(x) = x + 3.

  Then f(g(x)) means we substitute g(x) into f:
    f(g(x)) = (x + 3)²

  Therefore:
    f(g(x)) = (x + 3)²

  This is a composite function.

"image": "src/assets/161.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE NEED THE CHAIN RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider y = (3x + 1)⁵. At first glance, it might seem that the basic Power Rule would give 5(3x + 1)⁴. However, that would be incomplete because it ignores the fact that the expression inside the parentheses, 3x + 1, is itself changing with x. The Power Rule applies to functions of the form uⁿ, but here u is not just x; it is a function of x. Therefore, we must account for the rate at which u changes with respect to x. The derivative of the inside function is d/dx (3x + 1) = 3. This extra factor of 3 must be multiplied by the derivative of the outer function. So the correct derivative is y' = 15(3x + 1)⁴. This extra factor is exactly what the Chain Rule provides. Without the Chain Rule, we would miss the dependence of the inner function on x, leading to an incorrect derivative. This example illustrates why the Chain Rule is essential: it ensures that we capture all the changes that occur when differentiating nested functions.

Consider:
  y = (3x + 1)⁵

We cannot simply use the basic Power Rule and write:
  5(3x + 1)⁴

That is incomplete.

Why?
  Because the expression inside the power (3x + 1) is also changing with x.

We therefore need to account for its derivative:
  d/dx (3x + 1) = 3

So the correct derivative is:
  y' = 15(3x + 1)⁴

The extra 3 comes from the derivative of the inside function.

"image": "src/assets/162.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is the formal rule for differentiating composite functions. It states that if y = f(g(x)), then the derivative is y' = f'(g(x)) · g'(x). Another common notation is dy/dx = (dy/du) · (du/dx), where u = g(x). This second form is particularly intuitive because it shows that the derivative of the composition is the product of the derivative of the outer function with respect to the inner function and the derivative of the inner function with respect to x. This notation also makes the Chain Rule easier to remember: the rates of change multiply together. The Chain Rule can be applied repeatedly when there are multiple layers of composition. It is the foundation for differentiating many types of functions, including trigonometric, exponential, logarithmic, and power functions that are composed with other functions. Understanding the Chain Rule is essential for advanced calculus, including implicit differentiation and related rates.

If y = f(g(x)), then:
  y' = f'(g(x)) · g'(x)

Another common notation is:
  dy/dx = (dy/du) · (du/dx)

where u = g(x).

This second form makes the Chain Rule easier to understand because it shows that the rates of change are multiplied together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE "OUTSIDE × INSIDE" METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A simple and effective way to remember the Chain Rule is the "outside × inside" method. This approach breaks the differentiation process into two clear steps. First, differentiate the outside function as if the inside were a single variable, keeping the inside unchanged. Then, multiply by the derivative of the inside function. For example, consider y = (2x + 5)⁴. The outside function is u⁴, whose derivative is 4u³. The inside function is u = 2x + 5, whose derivative is u' = 2. Multiplying these together gives y' = 4(2x + 5)³(2) = 8(2x + 5)³. This method is straightforward and works for any composite function, regardless of complexity. It also helps in visualising the function as a layered structure, where each layer contributes a derivative factor. This "outside × inside" rule is the key to applying the Chain Rule efficiently and correctly.

A simple way to remember the Chain Rule is:
  Derivative = Derivative of Outside × Derivative of Inside

For example:
  y = (2x + 5)⁴

  Outside: u⁴
  Derivative: 4u³

  Inside: u = 2x + 5
  Derivative: u' = 2

  Multiply:
    y' = 4(2x + 5)³(2)

  Therefore:
    y' = 8(2x + 5)³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP-BY-STEP METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When differentiating a composite function, a systematic step‑by‑step approach helps avoid mistakes. First, identify the inside function the part that is being substituted into the outer function. For y = (3x² + 1)⁵, the inside is u = 3x² + 1, and the outside is u⁵. Next, differentiate the outside function with respect to u, treating u as the variable: dy/du = 5u⁴. Then, differentiate the inside function with respect to x: du/dx = 6x. Finally, multiply these two derivatives together: dy/dx = 5u⁴(6x). Substitute u back to get the derivative in terms of x: dy/dx = 30x(3x² + 1)⁴. This method works for any composition, whether it has one layer or multiple layers. Practicing this step‑by‑step process builds confidence and accuracy in applying the Chain Rule. It also makes it easier to handle more complicated functions where multiple rules (like the Product or Quotient Rule) are combined with the Chain Rule.

Step 1: Identify the inside function
  For y = (3x² + 1)⁵, the inside is:
    u = 3x² + 1

Step 2: Identify the outside function
  The outside function is:
    u⁵

Step 3: Differentiate the outside
  dy/du = 5u⁴

Step 4: Differentiate the inside
  du/dx = 6x

Step 5: Multiply
  dy/dx = 5u⁴(6x)

  Substitute u = 3x² + 1.

  Therefore:
    dy/dx = 30x(3x² + 1)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: POLYNOMIAL INSIDE A POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let us differentiate f(x) = (x² + 4x + 1)³. This is a polynomial inside a power. The inside function is u = x² + 4x + 1, and the outside function is u³. Differentiating the outside gives 3u², and differentiating the inside gives 2x + 4. Multiplying these gives f'(x) = 3(x² + 4x + 1)²(2x + 4). This is the derivative. In many cases, leaving the answer in factored form is acceptable and often preferred because it is more compact and reveals the structure of the derivative. Expanding would produce a polynomial of higher degree, which is usually unnecessary. This example illustrates the power of the Chain Rule: it allows us to differentiate complex nested expressions without expanding them first. The ability to keep expressions factored is a major advantage of the Chain Rule.

Consider:
  f(x) = (x² + 4x + 1)³

Let u = x² + 4x + 1.

Then:
  f(x) = u³

Differentiate the outside:
  df/du = 3u²

Differentiate the inside:
  du/dx = 2x + 4

Multiply:
  df/dx = 3u²(2x + 4)

Substitute u:
  f'(x) = 3(x² + 4x + 1)²(2x + 4)

You can leave the answer in this form or expand it if necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule also works with square roots and other radicals. Consider f(x) = √(x² + 3). To differentiate, we first rewrite the square root as a power: f(x) = (x² + 3)^(1/2). The outside function is u^(1/2), whose derivative is (1/2)u^(-1/2). The inside is u = x² + 3, whose derivative is 2x. Multiplying gives f'(x) = (1/2)(x² + 3)^(-1/2)(2x) = x/√(x² + 3). This result shows that the derivative of a square root of a function is the derivative of the inside divided by twice the square root of the inside. This pattern is useful for differentiating any radical expression. The Chain Rule allows us to handle roots, powers, and other functions uniformly by converting them to exponent notation and then applying the rule. This is why rewriting radicals as exponents is a common first step in differentiation.

The Chain Rule also works with square roots.

Consider:
  f(x) = √(x² + 3)

Rewrite the square root as a power:
  f(x) = (x² + 3)^(1/2)

Outside function: u^(1/2)
  Derivative: (1/2)u^(-1/2)

Inside function: u = x² + 3
  Derivative: u' = 2x

Multiply:
  f'(x) = (1/2)(x² + 3)^(-1/2)(2x)

Simplify:
  f'(x) = x/√(x² + 3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: NEGATIVE EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule works for negative exponents as well. Consider f(x) = (2x - 1)⁻³. This is a composite function where the inside is 2x - 1 and the outside is u⁻³. The derivative of the outside is -3u⁻⁴, and the derivative of the inside is 2. Multiplying gives f'(x) = -3(2x - 1)⁻⁴(2) = -6(2x - 1)⁻⁴. This can be rewritten as -6/(2x - 1)⁴. This example demonstrates that the Chain Rule handles negative and fractional exponents with equal ease. It also shows that negative exponents often lead to rational expressions in the final answer. The ability to differentiate functions with negative powers is essential for working with rational functions and for applying the Quotient Rule indirectly. The Chain Rule provides a unified method for all power functions, regardless of the sign of the exponent.

Consider:
  f(x) = (2x - 1)⁻³

Apply the Chain Rule.

Outside derivative:
  -3(2x - 1)⁻⁴

Inside derivative:
  2

Multiply:
  f'(x) = -3(2x - 1)⁻⁴(2)

Therefore:
  f'(x) = -6(2x - 1)⁻⁴

or:
  f'(x) = -6/(2x - 1)⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: MULTIPLE LAYERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some composite functions have more than one layer of composition. For example, f(x) = [(x² + 1)³ + 4]⁵ has several layers: x² + 1 is inside (x² + 1)³, which is inside (x² + 1)³ + 4, which is inside the fifth power. To differentiate, we apply the Chain Rule repeatedly from the outermost layer to the innermost. Starting with the outside, we get 5[(x² + 1)³ + 4]⁴. Then we multiply by the derivative of the next layer, 3(x² + 1)². Then we multiply by the derivative of the next layer, 2x. Multiplying all these factors gives f'(x) = 30x(x² + 1)²[(x² + 1)³ + 4]⁴. Each layer contributes a derivative factor, and the product of all these factors gives the derivative of the entire composition. This process is sometimes called the "Chain Rule multiple times" or "the Chain Rule for nested functions." It is a powerful technique for differentiating complex expressions that arise in many calculus applications.

Consider:
  f(x) = [(x² + 1)³ + 4]⁵

This has several layers:
  • x² + 1
  • (x² + 1)³
  • (x² + 1)³ + 4
  • The fifth power

We apply the Chain Rule repeatedly.

Start with the outside:
  5[(x² + 1)³ + 4]⁴

Multiply by the derivative of the next layer:
  3(x² + 1)²

Then multiply by the derivative of x² + 1:
  2x

Therefore:
  f'(x) = 30x(x² + 1)²[(x² + 1)³ + 4]⁴

The important idea is that every layer contributes a derivative factor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPOSITE FUNCTIONS AND DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is especially important because many functions encountered in Calculus are composite. Functions like (2x + 1)⁷, √(x² + 4), 1/(x² + 1)³, (5x³ - 2x)⁴, sin(x²), and e^(3x) all contain an inner function that must be differentiated along with the outer function. In fact, any function that can be written as one function applied to another is composite and requires the Chain Rule. This includes all polynomial powers, trigonometric functions of expressions, exponential functions with exponents that are themselves functions, and logarithmic functions of expressions. Without the Chain Rule, differentiating these functions would be extremely cumbersome. The Chain Rule provides a systematic and efficient way to handle them. Mastering the Chain Rule is therefore essential for success in calculus, as it is used repeatedly in almost every subsequent topic.

Examples include:
  • (2x + 1)⁷
  • √(x² + 4)
  • 1/(x² + 1)³
  • (5x³ - 2x)⁴
  • sin(x²)
  • e^(3x)

All of these contain an inner function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CHAIN RULE WITH A PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a function requires more than one differentiation rule. For example, f(x) = x²(3x + 1)⁴ is a product of x² and (3x + 1)⁴. To differentiate it, we must use both the Product Rule and the Chain Rule. We start by identifying u = x² and v = (3x + 1)⁴. The derivative of u is u' = 2x. For v, we apply the Chain Rule: the outside is v⁴ and the inside is 3x + 1, so v' = 4(3x + 1)³(3) = 12(3x + 1)³. Then we apply the Product Rule: f' = u'v + uv'. Substituting gives f' = 2x(3x + 1)⁴ + x²(12(3x + 1)³). This can be factored as f' = 2x(3x + 1)³[(3x + 1) + 6x] = 2x(3x + 1)³(9x + 1). This example shows how the Chain Rule combines with other differentiation rules to handle complex functions.

For example:
  f(x) = x²(3x + 1)⁴

This involves:
  • Product Rule
  • Chain Rule

Let u = x² and v = (3x + 1)⁴.

Then:
  u' = 2x

For v, use the Chain Rule:
  v' = 4(3x + 1)³(3)
  v' = 12(3x + 1)³

Now use the Product Rule:
  f' = u'v + uv'

Therefore:
  f' = 2x(3x + 1)⁴ + x²[12(3x + 1)³]

So:
  f'(x) = 2x(3x + 1)⁴ + 12x²(3x + 1)³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CHAIN RULE WITH A QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule can also be used with quotients, often by rewriting them as products with negative exponents. Consider f(x) = 1/(x² + 1)². This can be rewritten as f(x) = (x² + 1)⁻², which is a composite function. The outside is u⁻², whose derivative is -2u⁻³, and the inside is u = x² + 1, whose derivative is 2x. Multiplying gives f'(x) = -2(x² + 1)⁻³(2x) = -4x/(x² + 1)³. This approach is often simpler than using the Quotient Rule, especially when the numerator is a constant. The Quotient Rule can still be used, but rewriting as a power often makes the differentiation quicker and less error‑prone. This technique is particularly useful for rational functions where the numerator is a constant or can be easily factored out. It also shows that the Chain Rule is a versatile tool that can be used in combination with other methods.

Consider:
  f(x) = 1/(x² + 1)²

Rewrite:
  f(x) = (x² + 1)⁻²

Now apply the Chain Rule.

Outside:
  u⁻²
  Derivative: -2u⁻³

Inside:
  u = x² + 1
  Derivative: 2x

Multiply:
  f'(x) = -2(x² + 1)⁻³(2x)

Therefore:
  f'(x) = -4x(x² + 1)⁻³

or:
  f'(x) = -4x/(x² + 1)³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CHAIN RULE AND IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is also essential when differentiating equations involving y implicitly. In implicit differentiation, we treat y as a function of x and apply the Chain Rule to any term containing y. For example, in the equation y² + x² = 25, differentiating both sides with respect to x gives 2y(dy/dx) + 2x = 0. The term 2y(dy/dx) comes from applying the Chain Rule to y²: d/dx (y²) = 2y(dy/dx). This is because y is a function of x, so we must multiply by the derivative of y with respect to x. Without the Chain Rule, we would incorrectly treat y as a constant. Implicit differentiation is used to find derivatives of curves that are not functions, such as circles and ellipses, and it is a key application of the Chain Rule. It also connects directly to related rates problems.

For example:
  y² + x² = 25

Differentiate both sides:
  2y(dy/dx) + 2x = 0

Therefore:
  2y(dy/dx) = -2x
  dy/dx = -x/y

Why does y² become 2y(dy/dx)?

Because y itself depends on x. The Chain Rule accounts for this dependence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CHAIN RULE AND RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule is also extremely important in related rates problems, where we need to find the rate of change of one quantity with respect to time, given the rate of change of another related quantity. For example, suppose A = πr², where A is the area of a circle and r is its radius. If the radius changes with time, then both A and r are functions of t. Differentiating with respect to t gives dA/dt = 2πr(dr/dt). The factor dr/dt appears because r changes with time. This is an application of the Chain Rule to the composition A = A(r(t)). Related rates problems are classic applications of the Chain Rule in physics, engineering, and geometry. They demonstrate how the Chain Rule allows us to link the rates of change of different quantities that are related by an equation. Understanding this connection is essential for solving real‑world problems involving dynamic systems.

Suppose:
  A = πr²

where A is the area of a circle and r is its radius.

If the radius changes with time, then both A and r are functions of t.

Differentiate with respect to t:
  dA/dt = 2πr(dr/dt)

The factor dr/dt appears because r changes with time.

This is an application of the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CHAIN RULE AND INSTANTANEOUS RATES OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule can also be interpreted as a relationship between rates of change. Suppose y = f(u) and u = g(x). Then dy/dx = (dy/du) · (du/dx). This means that the rate at which y changes with respect to x is the product of the rate at which y changes with respect to u and the rate at which u changes with respect to x. This interpretation is extremely useful in physics, economics, engineering, and related‑rates problems. For example, if y is the cost of producing u units, and u is the number of units produced per hour, then dy/dx gives the rate of change of cost with respect to time. The Chain Rule allows us to link these different rates of change together. This interpretation also reinforces the idea that the derivative is a rate of change, and that rates can be composed and multiplied. It provides a powerful way to analyse systems where multiple variables are changing.

Suppose:
  y = f(u)
and:
  u = g(x)

Then:
  dy/dx = (dy/du) · (du/dx)

This means:
  The rate at which y changes with respect to x is the rate at which y 
  changes with respect to u, multiplied by the rate at which u changes 
  with respect to x.

This interpretation becomes extremely useful in physics, economics, engineering, and related-rates problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common mistake when applying the Chain Rule is forgetting to differentiate the inside function. Many students correctly differentiate the outside function but then stop, omitting the derivative of the inside function. For example, for f(x) = (4x + 1)⁶, an incorrect answer would be f'(x) = 6(4x + 1)⁵, without the extra factor of 4. The correct derivative is f'(x) = 6(4x + 1)⁵(4) = 24(4x + 1)⁵. This mistake is often due to applying the Power Rule mechanically without recognising that the base is not x but a function of x. To avoid this error, always identify the inside function and explicitly compute its derivative. Remembering the rule "outside derivative × inside derivative" can help prevent this common oversight. Practicing with a variety of functions will also help solidify the correct application.

Consider:
  f(x) = (4x + 1)⁶

Incorrect:
  f'(x) = 6(4x + 1)⁵

The inside function is 4x + 1, and its derivative is 4.

Therefore, we must multiply by 4:
  f'(x) = 6(4x + 1)⁵(4)

Thus:
  f'(x) = 24(4x + 1)⁵

Remember:
  Outside derivative × Inside derivative

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ANOTHER COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative of f(x) = (5x² - 3x + 2)⁴. This is a polynomial inside a power. We identify the inside as u = 5x² - 3x + 2 and the outside as u⁴. The derivative of the outside is 4u³, and the derivative of the inside is 10x - 3. Multiplying gives f'(x) = 4(5x² - 3x + 2)³(10x - 3). This is the derivative. This example shows how the Chain Rule handles quadratic and higher‑degree polynomials inside powers. The derivative is a product of the outer derivative and the inner derivative, which often leaves the expression in factored form. This factored form is useful for further analysis, such as finding critical points or evaluating the derivative at specific values.

Find the derivative of:
  f(x) = (5x² - 3x + 2)⁴

Step 1: Identify the inside
  u = 5x² - 3x + 2

Step 2: Differentiate the outside
  d/du (u⁴) = 4u³

Step 3: Differentiate the inside
  du/dx = 10x - 3

Step 4: Multiply
  f'(x) = 4u³(10x - 3)

Substitute u:
  f'(x) = 4(5x² - 3x + 2)³(10x - 3)

That is the derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. GENERAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a composite function f(x) = F(g(x)), the derivative is f'(x) = F'(g(x)) · g'(x). This is the general formula for the Chain Rule. Using u‑substitution notation, if u = g(x), then df/dx = (df/du) · (du/dx). This formula is the foundation for differentiating all composite functions. It applies to any composition, whether it involves powers, trigonometric functions, exponentials, logarithms, or other functions. The Chain Rule can be applied repeatedly when there are multiple layers of composition. Understanding this general formula is essential because it unifies many different differentiation scenarios into one rule. It also shows that the derivative of a composition is the product of derivatives, which is a key insight in calculus.

For a composite function:
  f(x) = F(g(x))

the derivative is:
  f'(x) = F'(g(x)) · g'(x)

Using u-substitution notation:
  u = g(x)

then:
  df/dx = (df/du) · (du/dx)

This is the fundamental formula for the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HOW TO RECOGNIZE A COMPOSITE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ask yourself: Is there a function inside another function? If the answer is yes, then the function is composite and the Chain Rule is needed. For example, in (3x + 2)⁵, the inside is 3x + 2 and the outside is u⁵. In √(x² + 1), the inside is x² + 1 and the outside is √u. In 1/(2x - 3)⁴, rewriting as (2x - 3)⁻⁴ reveals an inside of 2x - 3 and an outside of u⁻⁴. Recognising these patterns is the key to applying the Chain Rule correctly. If a function can be expressed as one function of another function, it is composite. The Chain Rule applies to any such composition, whether it is obvious or more subtle. Practicing identification of composite functions is the first step to mastering the Chain Rule.

Ask yourself:
  Is there a function inside another function?

For example:
  (3x + 2)⁵
  Yes.
  Inside: 3x + 2
  Outside: u⁵

Another example:
  √(x² + 1)
  Yes.
  Inside: x² + 1
  Outside: √u

Another:
  1/(2x - 3)⁴
  Rewrite: (2x - 3)⁻⁴
  Inside: 2x - 3
  Outside: u⁻⁴

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a composite function, use the "OUTSIDE → INSIDE" strategy. Identify the inside function, differentiate the outside function while keeping the inside unchanged, then multiply by the derivative of the inside function. Finally, simplify if needed. For example, for y = (7x² + 1)³, the outside derivative is 3(7x² + 1)², the inside derivative is 14x, and multiplying gives y' = 42x(7x² + 1)². This strategy works for all composite functions, including those with multiple layers. The key is to work from the outside in, differentiating each layer and multiplying by the derivative of the next layer. This systematic approach reduces errors and builds confidence in applying the Chain Rule. With practice, this process becomes second nature.

When you see a composite function, use:

  OUTSIDE → INSIDE

  1. Identify the inside.
  2. Differentiate the outside.
  3. Keep the inside unchanged.
  4. Multiply by the derivative of the inside.
  5. Simplify.

For example:
  y = (7x² + 1)³

  Outside derivative: 3(7x² + 1)²
  Inside derivative: 14x
  Multiply:
    y' = 42x(7x² + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"image": "src/assets/163.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a composite function is found using the Chain Rule. The fundamental formula is d/dx [f(g(x))] = f'(g(x)) · g'(x), or equivalently dy/dx = (dy/du) · (du/dx). The easiest way to remember it is to differentiate the outside function, keep the inside function unchanged, then multiply by the derivative of the inside function. For example, for y = (3x² + 1)⁵, the outside derivative is 5(3x² + 1)⁴, the inside derivative is 6x, so y' = 30x(3x² + 1)⁴. The Chain Rule is essential because it allows us to differentiate complicated nested functions that appear throughout mathematics and its applications. It is also a foundation for implicit differentiation, related rates, higher‑order derivatives, and many advanced Calculus topics. Mastering the Chain Rule is one of the most important skills in calculus, and it is used repeatedly in almost every subsequent topic.

The easiest way to remember it is:

  Differentiate the outside function, keep the inside function, then 
  multiply by the derivative of the inside function.

For example:
  y = (3x² + 1)⁵

  Outside derivative: 5(3x² + 1)⁴
  Inside derivative: 6x

  Therefore:
    y' = 30x(3x² + 1)⁴

The Chain Rule is essential because it allows us to differentiate complicated nested functions. It is also a foundation for implicit differentiation, related rates, higher-order derivatives, and many advanced Calculus applications.
  `,
  examples: [
    "f(x) = (3x + 2)⁵ → f'(x) = 15(3x + 2)⁴",
    "f(x) = (x² + 4x + 1)³ → f'(x) = 3(x² + 4x + 1)²(2x + 4)",
    "f(x) = √(x² + 3) → f'(x) = x/√(x² + 3)",
    "f(x) = (2x - 1)⁻³ → f'(x) = -6/(2x - 1)⁴",
    "f(x) = [(x² + 1)³ + 4]⁵ → f'(x) = 30x(x² + 1)²[(x² + 1)³ + 4]⁴",
    "f(x) = x²(3x + 1)⁴ → f'(x) = 2x(3x+1)⁴ + 12x²(3x+1)³",
    "f(x) = (7x² + 1)³ → f'(x) = 42x(7x² + 1)²",
  ],
};

export default topic;