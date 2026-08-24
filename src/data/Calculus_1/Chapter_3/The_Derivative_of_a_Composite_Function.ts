// filename: the-derivative-of-a-composite-function.ts

const topic = {
  id: "the-derivative-of-a-composite-function",
  title: "The Derivative of a Composite Function",
  summary:
    "The derivative of a composite function is found using the Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x), differentiating the outside function and multiplying by the derivative of the inside function.",
  details: `
The derivative of a composite function is found using the Chain Rule.

A composite function occurs when one function is inside another function.

For example:
  f(x) = (3x + 2)⁵

Here, 3x + 2 is inside the fifth power.

Another example is:
  f(x) = √(x² + 1)

Here, x² + 1 is inside the square-root function.

The Chain Rule allows us to differentiate these functions by working from the outside function to the inside function.

The main formula is:
  d/dx [f(g(x))] = f'(g(x)) · g'(x)

In simple words:
  Differentiate the outside function, keep the inside function unchanged, 
  then multiply by the derivative of the inside function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A COMPOSITE FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A composite function is a function formed by combining two or more functions.

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE NEED THE CHAIN RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Chain Rule states:

If y = f(g(x)), then:
  y' = f'(g(x)) · g'(x)

Another common notation is:
  dy/dx = (dy/du) · (du/dx)

where u = g(x).

This second form makes the Chain Rule easier to understand because it shows that the rates of change are multiplied together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE "OUTSIDE × INSIDE" METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

When differentiating a composite function:

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

Some composite functions have more than one layer.

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

The Chain Rule is especially important because many functions encountered in Calculus are composite.

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

Sometimes a function requires more than one differentiation rule.

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

The Chain Rule is also essential when differentiating equations involving y.

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

The Chain Rule is also extremely important in related rates.

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

The Chain Rule can also be interpreted as a relationship between rates of change.

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

A very common mistake is forgetting to differentiate the inside function.

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

  Function                  Derivative
  ──────────────────────────────────────────────────────────────────────────
  f(x) = (g(x))ⁿ            f'(x) = n(g(x))ⁿ⁻¹ · g'(x)
  f(x) = √(g(x))            f'(x) = g'(x)/(2√(g(x)))
  f(x) = 1/(g(x))ⁿ          f'(x) = -n g'(x)/(g(x))ⁿ⁺¹
  f(x) = sin(g(x))          f'(x) = cos(g(x)) · g'(x)
  f(x) = e^(g(x))           f'(x) = e^(g(x)) · g'(x)
  f(x) = ln(g(x))           f'(x) = g'(x)/g(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of a composite function is found using the Chain Rule.

The fundamental formula is:
  d/dx [f(g(x))] = f'(g(x)) · g'(x)

or:
  dy/dx = (dy/du) · (du/dx)

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