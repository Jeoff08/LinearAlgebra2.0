// filename: operations-on-functions.ts

const topic = {
  id: "operations-on-functions",
  title: "Operations on Functions",
  summary:
    "Combining two or more functions using addition, subtraction, multiplication, division, and composition, with applications in algebra and calculus.",
  details: `
Operations on functions involve combining two or more functions using basic mathematical operations. Just as we can add, subtract, multiply, and divide ordinary numbers, we can also perform these operations on functions. Suppose we have two functions f(x) and g(x). We can perform addition, subtraction, multiplication, and division, as well as composition, which means using the output of one function as the input of another. Understanding operations on functions is important because it helps us analyze more complex mathematical relationships and prepares us for topics in Algebra and Calculus, where we often combine functions to model real‑world situations or derive new functions.

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

The sum of two functions is found by adding their outputs for the same input value. This operation creates a new function that combines the effects of both original functions. For example, if f(x) represents the cost of producing x items and g(x) represents the shipping cost for x items, then (f + g)(x) gives the total cost. Algebraically, we simply add the expressions for f(x) and g(x) and combine like terms. The domain of the resulting function is the intersection of the domains of f and g, since both must be defined. This operation is straightforward but powerful, as it allows us to model combined effects in physics, economics, and engineering.

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

The difference of two functions is obtained by subtracting the output of one function from the other. This is useful when we want to find the difference between two quantities, such as profit (revenue minus cost). The notation (f - g)(x) = f(x) - g(x). One critical point is to use parentheses when substituting to avoid sign errors, especially when g(x) contains multiple terms. For example, if f(x) = 2x + 3 and g(x) = x² - 1, then (f - g)(x) = (2x + 3) - (x² - 1) = -x² + 2x + 4. The domain of the difference is again the intersection of the domains, and we must be careful with signs when simplifying.

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

The product of two functions is formed by multiplying their outputs. This operation is useful for combining rates, such as when the total distance is the product of speed and time expressed as functions. The notation is (fg)(x) = f(x) · g(x). Multiplying two polynomial functions often requires distribution, and the resulting expression may have a higher degree. For example, with f(x) = 2x + 3 and g(x) = x² - 1, we get (fg)(x) = (2x + 3)(x² - 1) = 2x³ + 3x² - 2x - 3 after expanding and combining like terms. The domain is the intersection of the domains of f and g, as both must be defined. Multiplication of functions is fundamental in calculus, especially in the Product Rule for derivatives.

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

The quotient of two functions is defined by dividing the output of the first by the output of the second, provided the denominator is not zero. This operation is useful for finding ratios, such as average cost per item. The notation is (f/g)(x) = f(x) / g(x). The most important consideration is the domain: we must exclude any x for which g(x) = 0, as division by zero is undefined. For example, with f(x) = 2x + 3 and g(x) = x² - 1, the quotient is (2x + 3)/(x² - 1), and we require x ≠ ±1. The domain of the quotient is the intersection of the domains of f and g, with the additional restriction that g(x) ≠ 0. This operation is central to the Quotient Rule in calculus.

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

If we have two functions f(x) and g(x), then the basic operations are defined pointwise: for each x in the intersection of their domains, we perform the corresponding arithmetic on the outputs. These operations are straightforward and mirror the arithmetic of numbers, but they produce new functions that inherit the properties of the originals. The domains of the sum, difference, and product are simply the intersection of the domains of f and g, while the domain of the quotient additionally requires g(x) ≠ 0. These operations are the building blocks for more complex function combinations and are used extensively in algebra, calculus, and applied mathematics.

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

When evaluating combined functions at a specific input, there are two equivalent approaches: you can first combine the functions symbolically and then substitute the value, or you can evaluate each function separately and then perform the operation. Both methods yield the same result because the operations are performed pointwise. The first method is often more efficient when you need the combined function for many values, while the second is useful when the functions are given numerically. For example, with f(x) = x + 2 and g(x) = 3x, we can find (f + g)(2) by either computing (f + g)(x) = 4x + 2 and then substituting 2 to get 10, or by computing f(2) = 4 and g(2) = 6, then adding to get 10. Flexibility in these methods is a valuable skill.

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

When we combine functions, the domain of the resulting function is determined by the domains of the original functions. For addition, subtraction, and multiplication, the new function is defined for all x that belong to both the domain of f and the domain of g that is, the intersection of the two domains. However, for division, we must also exclude any x where the denominator g(x) equals zero. For instance, if f(x) = √x has domain x ≥ 0 and g(x) = 1/x has domain x ≠ 0, then (f + g)(x) is defined for x > 0 (intersection, excluding 0). But (f/g)(x) would require x > 0 as well, and also g(x) ≠ 0, which is already satisfied since g(0) is undefined. Paying attention to domains is essential to avoid undefined expressions and to correctly interpret the combined function.

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

Another important operation is function composition, which is fundamentally different from the arithmetic operations. Composition means applying one function to the result of another: the output of the inner function becomes the input of the outer function. The notation (f ∘ g)(x) = f(g(x)) is read as "f composed with g of x." Here, g is applied first, then f is applied to that result. Composition is a way of chaining functions together, and it is ubiquitous in mathematics, from transformations of graphs to the Chain Rule in calculus. Understanding composition is crucial because it allows us to build complex functions from simpler ones and to analyze how changes in the input affect the final output through a sequence of steps.

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

To illustrate composition, consider f(x) = 2x + 1 and g(x) = x². To find (f ∘ g)(x), we start with the inner function g(x) = x², and then we substitute that expression into f: f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1. The result is a new function that squares the input first, then doubles and adds 1. This is not the same as (g ∘ f)(x), which would double and add 1 first, then square. Composition allows us to create new functions that represent multi‑step processes, such as converting units or applying a series of transformations. It is a powerful tool for modelling complex relationships.

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

Function composition is not commutative; that is, the order in which you compose functions generally changes the result. In other words, (f ∘ g)(x) is usually different from (g ∘ f)(x). This is because the inner function determines the input to the outer function, and different orderings apply the rules in a different sequence. For example, with f(x) = 2x + 1 and g(x) = x², we have (f ∘ g)(x) = 2x² + 1, while (g ∘ f)(x) = (2x + 1)² = 4x² + 4x + 1. These are clearly not the same function, except for special cases. This non‑commutativity is a key property of composition, and it is essential to be aware of it when solving equations or transforming functions. Always pay attention to which function is applied first.

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

A useful way to think about composition is to imagine two machines linked together: the output of the first machine becomes the input of the second. For (f ∘ g)(x), the input x first goes into machine g, which produces an intermediate output. That intermediate value then goes into machine f, which produces the final output. For instance, let g(x) = x + 3 and f(x) = 2x. Then (f ∘ g)(x) = f(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6. The order is crucial: g is applied first, then f. This machine analogy helps visualise the flow of data and is especially helpful when dealing with multiple compositions or when reversing the process (inverse functions). It also underscores why composition is not commutative: swapping the machines changes the entire process.

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

It is important to distinguish between the arithmetic operations (addition, subtraction, multiplication, division) and composition. Arithmetic operations combine the outputs of two functions for the same input by performing the indicated operation on those outputs. In contrast, composition applies one function to the output of another; it is not an operation on the outputs simultaneously, but a sequential application. For example, with f(x) = x + 2 and g(x) = 3x, we have (f + g)(x) = 4x + 2, (fg)(x) = 3x² + 6x, and (f ∘ g)(x) = 3x + 2. These are all different functions. Recognizing this difference is crucial because each operation has its own properties, rules, and applications. In calculus, for instance, the derivative rules for sums, products, quotients, and compositions are all distinct.

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

Operations on functions are extremely important in Calculus because they lead directly to the fundamental rules of differentiation. When we add, subtract, multiply, or divide functions, we can differentiate the resulting combination using rules that rely on the derivatives of the original functions. For example, the Sum Rule states that the derivative of a sum is the sum of the derivatives. The Product Rule and Quotient Rule give formulas for the derivatives of products and quotients, while the Chain Rule handles compositions. Without a solid understanding of how to combine functions, applying these rules correctly becomes difficult. Moreover, many functions in calculus are defined as combinations of simpler functions, so mastering these operations is essential for success in calculus and beyond.

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

"image": "src/assets/46.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Operations on functions allow us to combine functions in different ways to create new functions that model more complex relationships. The basic operations addition, subtraction, multiplication, and division are performed pointwise on the outputs of the functions, and their domains are the intersection of the original domains (with additional restrictions for division). Composition, on the other hand, uses the output of one function as the input of another, creating a sequential relationship. The most important idea to remember is that basic operations combine outputs simultaneously, while composition chains functions together. These concepts are essential foundations for Algebra and Calculus because they lead directly to important differentiation rules: the Sum Rule, Product Rule, Quotient Rule, and Chain Rule. Mastering operations on functions equips you with the tools to analyse and manipulate a wide variety of mathematical models.

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