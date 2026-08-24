// filename: operations-on-functions.ts

const topic = {
  id: "operations-on-functions",
  title: "Operations on Functions",
  summary:
    "Combining two or more functions using addition, subtraction, multiplication, division, and composition, with applications in algebra and calculus.",
  details: `
Operations on functions involve combining two or more functions using basic mathematical operations. Just as we can add, subtract, multiply, and divide ordinary numbers, we can also perform these operations on functions.

Suppose we have two functions:
  f(x)
and:
  g(x)

We can perform the following operations:
  • Addition
  • Subtraction
  • Multiplication
  • Division

We can also combine functions using composition, which means using the output of one function as the input of another function.

Understanding operations on functions is important because it helps us analyze more complex mathematical relationships and prepares us for topics in Algebra and Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ADDITION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sum of two functions is found by adding their outputs.

The notation is:
  (f + g)(x)

This means:
  (f + g)(x) = f(x) + g(x)

Example:
  Suppose f(x) = 2x + 3 and g(x) = x² - 1.

  To find (f + g)(x), we add the two functions:
    (f + g)(x) = (2x + 3) + (x² - 1)

  Combine like terms:
    (f + g)(x) = x² + 2x + 2

The new function represents the sum of the outputs of f and g.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SUBTRACTION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The difference of two functions is found by subtracting the output of one function from another.

The notation is:
  (f - g)(x)

This means:
  (f - g)(x) = f(x) - g(x)

Using:
  f(x) = 2x + 3
and:
  g(x) = x² - 1

we get:
  (f - g)(x) = (2x + 3) - (x² - 1)

Distribute the negative sign:
  (f - g)(x) = 2x + 3 - x² + 1

Combine like terms:
  (f - g)(x) = -x² + 2x + 4

Important Reminder:
  When subtracting functions, always use parentheses.
  For example:
    f(x) - g(x)
  should be written as:
    (f(x)) - (g(x))
  This prevents mistakes when distributing the negative sign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MULTIPLICATION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The product of two functions is found by multiplying their outputs.

The notation is:
  (fg)(x)

This means:
  (fg)(x) = f(x) · g(x)

Using:
  f(x) = 2x + 3
and:
  g(x) = x² - 1

we get:
  (fg)(x) = (2x + 3)(x² - 1)

Distribute:
  = 2x(x²) + 2x(-1) + 3(x²) + 3(-1)

Simplify:
  = 2x³ - 2x + 3x² - 3

Arrange in descending powers:
  (fg)(x) = 2x³ + 3x² - 2x - 3

The product function represents the multiplication of the outputs of the two original functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIVISION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The quotient of two functions is found by dividing one function by another.

The notation is:
  (f/g)(x)

This means:
  (f/g)(x) = f(x) / g(x)

Using:
  f(x) = 2x + 3
and:
  g(x) = x² - 1

we get:
  (f/g)(x) = (2x + 3) / (x² - 1)

However, there is an important restriction.

The denominator cannot equal zero:
  x² - 1 ≠ 0

Factor:
  (x - 1)(x + 1) ≠ 0

Therefore:
  x ≠ 1, -1

These values must be excluded from the domain of the quotient.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SUMMARY OF BASIC OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If we have two functions f(x) and g(x), then the basic operations are:

Addition:
  (f + g)(x) = f(x) + g(x)

Subtraction:
  (f - g)(x) = f(x) - g(x)

Multiplication:
  (fg)(x) = f(x) · g(x)

Division:
  (f/g)(x) = f(x) / g(x)

with the restriction:
  g(x) ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EVALUATING OPERATIONS ON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = x + 2
and:
  g(x) = 3x

Find (f + g)(2).

Method 1: Find the Combined Function First
  (f + g)(x) = f(x) + g(x)
  = (x + 2) + 3x
  = 4x + 2

Now substitute x = 2:
  (f + g)(2) = 4(2) + 2
  (f + g)(2) = 10

Method 2: Evaluate Each Function First
  f(2) = 2 + 2 = 4
  g(2) = 3(2) = 6

Then:
  (f + g)(2) = f(2) + g(2)
  = 4 + 6
  = 10

Both methods produce the same answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DOMAINS OF OPERATIONS ON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When performing operations on functions, the domain of the new function depends on the domains of the original functions.

For addition, subtraction, and multiplication:
  The domain usually consists of all values that are allowed in both functions.

For division:
  The denominator function must not equal zero.

For example:
  f(x) = √x and g(x) = 1/x

For f(x):
  x ≥ 0

For g(x):
  x ≠ 0

If we combine these functions, we must consider both restrictions.

Therefore, the common domain is:
  x > 0

Understanding domains is important because an operation may create restrictions that were not immediately obvious.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPOSITION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important operation is called function composition.

Composition means using the output of one function as the input of another function.

The notation is:
  (f ∘ g)(x)

This is read as:
  "f composed with g of x"

It means:
  (f ∘ g)(x) = f(g(x))

The function inside is performed first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE OF FUNCTION COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = 2x + 1
and:
  g(x) = x²

Find (f ∘ g)(x).

Start with:
  (f ∘ g)(x) = f(g(x))

Since g(x) = x², we substitute x² into f:
  f(g(x)) = f(x²)

The function f is:
  f(x) = 2x + 1

Replace x with x²:
  f(x²) = 2(x²) + 1

Therefore:
  (f ∘ g)(x) = 2x² + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ORDER MATTERS IN COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function composition is generally not commutative.

This means:
  f(g(x)) ≠ g(f(x))

in most cases.

Using:
  f(x) = 2x + 1
and:
  g(x) = x²

We already found:
  (f ∘ g)(x) = 2x² + 1

Now let's find (g ∘ f)(x).

This means:
  g(f(x))

Since f(x) = 2x + 1, substitute it into g:
  g(2x + 1)

Since g(x) = x², we get:
  (2x + 1)²

Expand:
  4x² + 4x + 1

Therefore:
  (g ∘ f)(x) = 4x² + 4x + 1

Comparing the results:
  (f ∘ g)(x) = 2x² + 1
while:
  (g ∘ f)(x) = 4x² + 4x + 1

They are different.

Therefore:
  f ∘ g ≠ g ∘ f

This is one of the most important things to remember about function composition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMPOSITION AS A FUNCTION MACHINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function composition can be understood as two function machines connected together.

Suppose:
  g(x) = x + 3
and:
  f(x) = 2x

For (f ∘ g)(x), the process is:
  x → g(x) → f(g(x))

First:
  g(x) = x + 3

Then use that output as the input of f:
  f(x + 3) = 2(x + 3)

Therefore:
  (f ∘ g)(x) = 2x + 6

The order is:
  • Perform g first.
  • Perform f second.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIFFERENCE BETWEEN BASIC OPERATIONS AND COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to understand the difference between ordinary operations and composition.

Suppose:
  f(x) = x + 2
and:
  g(x) = 3x

Addition:
  (f + g)(x) = f(x) + g(x)
  = (x + 2) + 3x
  = 4x + 2

Multiplication:
  (fg)(x) = f(x) · g(x)
  = (x + 2)(3x)

Composition:
  (f ∘ g)(x) = f(g(x))
  Since g(x) = 3x, we substitute 3x into f:
  f(3x) = 3x + 2

These operations are completely different.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. OPERATIONS ON FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Operations on functions are extremely important in Calculus.

Functions are constantly:
  • Added
  • Subtracted
  • Multiplied
  • Divided
  • Composed

These operations directly connect to important differentiation rules.

Sum Rule:
  If h(x) = f(x) + g(x), then:
    h'(x) = f'(x) + g'(x)

Product Rule:
  If h(x) = f(x) · g(x), then:
    h'(x) = f'(x)g(x) + f(x)g'(x)

Quotient Rule:
  If h(x) = f(x)/g(x), then:
    h'(x) = [f'(x)g(x) - f(x)g'(x)] / [g(x)]²

Chain Rule:
  Function composition leads to the Chain Rule.
  If h(x) = f(g(x)), then:
    h'(x) = f'(g(x)) · g'(x)

This is why understanding operations and composition of functions is essential before studying derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Operation            Notation            Meaning
  ─────────────────────────────────────────────────────────────────────
  Addition             (f + g)(x)          f(x) + g(x)
  Subtraction          (f - g)(x)          f(x) - g(x)
  Multiplication       (fg)(x)             f(x) · g(x)
  Division             (f/g)(x)            f(x) / g(x), g(x) ≠ 0
  Composition          (f ∘ g)(x)          f(g(x))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Operations on functions allow us to combine functions in different ways.

The basic operations are:
  (f + g)(x) = f(x) + g(x)
  (f - g)(x) = f(x) - g(x)
  (fg)(x) = f(x) · g(x)
  (f/g)(x) = f(x) / g(x)

where g(x) ≠ 0.

Function composition is:
  (f ∘ g)(x) = f(g(x))

The most important idea to remember is:

  Basic operations combine the outputs of functions, while composition 
  uses the output of one function as the input of another function.

These concepts are essential foundations for Algebra and Calculus because they lead directly to important concepts such as the Sum Rule, Product Rule, Quotient Rule, and Chain Rule.
  `,
  examples: [
    "(f + g)(x) = (2x + 3) + (x² - 1) = x² + 2x + 2",
    "(f - g)(x) = (2x + 3) - (x² - 1) = -x² + 2x + 4",
    "(fg)(x) = (2x + 3)(x² - 1) = 2x³ + 3x² - 2x - 3",
    "(f/g)(x) = (2x + 3)/(x² - 1), x ≠ ±1",
    "(f ∘ g)(x) = f(g(x)) = 2x² + 1 when f(x) = 2x + 1, g(x) = x²",
    "(g ∘ f)(x) = g(f(x)) = 4x² + 4x + 1",
    "Composition is not commutative: f ∘ g ≠ g ∘ f",
  ],
};

export default topic;