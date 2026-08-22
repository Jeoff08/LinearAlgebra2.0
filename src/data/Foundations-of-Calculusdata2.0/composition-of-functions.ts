const topic = {
  id: "composition-of-functions",
  title: "Composition of Functions",
  summary:
    "Definition of function composition, notation, evaluation, order matters, domain, composition of three functions, and applications in calculus.",
  details: `
Composition of functions is a process of combining two or more functions so that the output of one function becomes the input of another function. It is an important concept in Algebra and Calculus because many mathematical processes involve applying one operation after another.

In simple terms: Function composition means putting one function inside another function.

If we have two functions f(x) and g(x), their composition is written as:

  (f∘g)(x)

and is read as "f composed with g."

The formula is:

  (f∘g)(x) = f(g(x))

This means that we apply g first and then apply f to the result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HOW FUNCTION COMPOSITION WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have: f(x) = 2x + 3 and g(x) = x²

To find (f∘g)(x), we use:

  (f∘g)(x) = f(g(x))

Since g(x) = x², we substitute x² into f(x):

  f(g(x)) = f(x²)

Because f(x) = 2x + 3, replace x with x²:

  f(x²) = 2x² + 3

Therefore: (f∘g)(x) = 2x² + 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EVALUATING A COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 2x + 1 and g(x) = x²

Find (f∘g)(3).

First, evaluate g(3):

  g(3) = 3² = 9

Then use the result as the input for f:

  f(9) = 2(9) + 1 = 19

Therefore: (f∘g)(3) = 19

The process is: 3 → g → 9 → f → 19

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE ORDER MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important things to remember is that:

  f∘g ≠ g∘f

in general.

This means that changing the order of the functions can produce a different answer.

Consider: f(x) = 2x + 1 and g(x) = x²

We already found: (f∘g)(x) = 2x² + 1

Now let's calculate (g∘f)(x):

  (g∘f)(x) = g(f(x))

Since f(x) = 2x + 1, substitute it into g(x) = x²:

  g(2x + 1) = (2x + 1)²

Therefore: (g∘f)(x) = (2x + 1)²

Expanding: (2x + 1)² = 4x² + 4x + 1

So: (g∘f)(x) = 4x² + 4x + 1

Notice that 2x² + 1 is different from 4x² + 4x + 1.

Therefore, the order of composition is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. STEP-BY-STEP METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a composition problem, follow these steps:

Step 1: Identify the functions
  Example: f(x) = 3x - 2 and g(x) = x + 4

Step 2: Identify the required composition
  Suppose we need (f∘g)(x). This means f(g(x)).

Step 3: Substitute g(x) into f(x)
  f(g(x)) = 3(x + 4) - 2

Step 4: Simplify
  = 3x + 12 - 2
  = 3x + 10

Therefore: (f∘g)(x) = 3x + 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² + 1 and g(x) = 2x

Find (f∘g)(x):

Start with: (f∘g)(x) = f(g(x))

Substitute: g(x) = 2x

Therefore: f(2x) = (2x)² + 1

Simplify: f(2x) = 4x² + 1

Thus: (f∘g)(x) = 4x² + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMPOSITION USING NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = x + 5 and g(x) = 3x

Find (f∘g)(2):

First: g(2) = 3(2) = 6

Then: f(6) = 6 + 5 = 11

Therefore: (f∘g)(2) = 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPOSITION AND DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain is especially important when working with compositions.

Suppose: f(x) = √x and g(x) = x - 3

The composition is: (f∘g)(x) = f(g(x))

Therefore: (f∘g)(x) = √(x - 3)

Because the expression inside the square root must be nonnegative:

  x - 3 ≥ 0

Therefore: x ≥ 3

The domain of the composition is: [3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPOSITION OF THREE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function composition can also involve more than two functions.

Suppose we have: f(x) = 2x, g(x) = x + 1, and h(x) = x²

We could have: (f∘g∘h)(x)

The functions are applied from right to left: h → g → f

First: h(x) = x²

Then: g(h(x)) = x² + 1

Finally: f(x² + 1) = 2(x² + 1)

Therefore: (f∘g∘h)(x) = 2x² + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function composition can describe processes that happen in multiple steps.

Suppose a store gives a 20% discount to an item and then applies a 10% tax.

Let g(x) = 0.80x represent the discounted price.

Then f(x) = 1.10x represents the price after tax.

The final price can be represented by: (f∘g)(x)

Therefore: f(g(x)) = 1.10(0.80x) = 0.88x

So the final price is 88% of the original price.

This shows how composition can model multiple processes occurring one after another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMPOSITION AND INVERSE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Composition is also closely connected to inverse functions.

If f and f⁻¹ are inverse functions, then:

  f(f⁻¹(x)) = x

and

  f⁻¹(f(x)) = x

The composition of a function and its inverse returns the original input.

Example: Consider f(x) = 2x + 3

Its inverse is: f⁻¹(x) = (x - 3)/2

Then: f(f⁻¹(x)) = x

This demonstrates how composition can be used to verify whether two functions are inverses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMPOSITION IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Composition of functions is extremely important in Calculus, especially when studying the Chain Rule.

The Chain Rule is used to find the derivative of a composite function.

If: y = f(g(x)), then:

  dy/dx = f'(g(x)) · g'(x)

Example: y = (x² + 1)³

This can be viewed as a composition:
  g(x) = x² + 1
  f(x) = x³

The derivative is:

  dy/dx = 3(x² + 1)² · (2x)

Therefore: dy/dx = 6x(x² + 1)²

This is one of the most important applications of function composition in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Composition of Functions, remember:

  (f∘g)(x) = f(g(x))

The function on the right is applied first.

  f∘g → g first, then f

Also remember: f∘g ≠ g∘f in general.

Function composition can also be used with more than two functions:

  (f∘g∘h)(x)

and it plays an important role in Calculus through the Chain Rule.

The key idea to remember is:

  Composition of functions combines two or more functions by using the output of one function as the input of another. The order of the functions matters, and the rightmost function is evaluated first. Understanding function composition is essential for studying inverse functions, composite functions, and the Chain Rule in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Composition of Functions is a fundamental concept in Mathematics that serves as an essential building block for Calculus.

Key concepts covered:

  ✓ How Function Composition Works
  ✓ Evaluating a Composition
  ✓ The Order Matters
  ✓ Step-by-Step Method
  ✓ Composition Using Numbers
  ✓ Composition and Domain
  ✓ Composition of Three Functions
  ✓ Real-World Applications
  ✓ Composition and Inverse Functions
  ✓ Composition in Calculus
  ✓ The Chain Rule
  `,
  examples: [
    "Find (f∘g)(x) for f(x) = 2x + 3 and g(x) = x² → 2x² + 3",
    "Find (f∘g)(3) for f(x) = 2x + 1 and g(x) = x² → 19",
    "Show f∘g ≠ g∘f for f(x) = 2x + 1 and g(x) = x² → 2x²+1 ≠ 4x²+4x+1",
    "Find (f∘g)(x) for f(x) = 3x - 2 and g(x) = x + 4 → 3x + 10",
    "Find (f∘g)(x) for f(x) = x² + 1 and g(x) = 2x → 4x² + 1",
    "Find (f∘g)(2) for f(x) = x + 5 and g(x) = 3x → 11",
    "Find domain of (f∘g)(x) for f(x) = √x and g(x) = x - 3 → [3, ∞)",
    "Find (f∘g∘h)(x) for f(x) = 2x, g(x) = x + 1, h(x) = x² → 2x² + 2",
    "Real-world: 20% discount then 10% tax → final price = 0.88x",
    "Verify inverse: f(f⁻¹(x)) = x for f(x) = 2x + 3",
    "Use Chain Rule: y = (x² + 1)³ → dy/dx = 6x(x² + 1)²",
    "Find (g∘f)(x) for f(x) = 2x + 1 and g(x) = x² → 4x² + 4x + 1",
  ],
};

export default topic;