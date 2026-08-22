const topic = {
  id: "inverse-functions",
  title: "Inverse Functions",
  summary:
    "Definition of inverse functions, finding inverses, one-to-one functions, horizontal line test, restricted domains, graphs, and applications in calculus.",
  details: `
An inverse function is a function that reverses the operation of another function. In simple terms, if a function takes an input and produces an output, the inverse function takes that output and returns the original input.

For example, if a function changes x into y, its inverse changes y back into x.

The inverse of a function f is written as:

  f⁻¹(x)

It is read as "f inverse of x."

The important relationship is:

  f⁻¹(f(x)) = x

and:

  f(f⁻¹(x)) = x

This means that applying a function and then its inverse returns the original value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXAMPLE OF AN INVERSE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 2x + 3

Suppose the input is x = 4.

First, apply f:

  f(4) = 2(4) + 3 = 11

The function changed: 4 → 11

The inverse function should change: 11 → 4

Let's find the inverse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FINDING THE INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with: y = 2x + 3

Step 1: Replace f(x) with y
  y = 2x + 3

Step 2: Switch x and y
  x = 2y + 3

Step 3: Solve for y
  Subtract 3: x - 3 = 2y
  Divide by 2: y = (x - 3)/2

Therefore: f⁻¹(x) = (x - 3)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CHECKING THE INVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can verify the answer using composition.

The original function is: f(x) = 2x + 3

The inverse is: f⁻¹(x) = (x - 3)/2

Now calculate: f⁻¹(f(x))

Substitute: f⁻¹(2x + 3) = ((2x + 3) - 3)/2

Simplify: = (2x)/2 = x

Therefore: f⁻¹(f(x)) = x

The inverse is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT MAKES A FUNCTION INVERTIBLE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every function has an inverse that is also a function.

A function must generally be one-to-one to have an inverse function.

A function is one-to-one if different inputs produce different outputs.

Example: f(x) = 2x + 1 is one-to-one because every input produces a unique output.

However: f(x) = x² is not one-to-one over all real numbers because:

  f(2) = 4 and f(-2) = 4

Two different inputs produce the same output.

Therefore, f(x) = x² does not have an inverse function over all real numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE HORIZONTAL LINE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The horizontal line test can be used to determine whether a function is one-to-one.

If a horizontal line crosses the graph more than once, the function is not one-to-one.

If every horizontal line crosses the graph at most once, the function is one-to-one.

Example: f(x) = x³ passes the horizontal line test, so it has an inverse function.

But f(x) = x² fails the horizontal line test over all real numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RESTRICTING THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Although f(x) = x² does not have an inverse function over all real numbers, we can restrict its domain.

Suppose: f(x) = x², x ≥ 0

Now every output has only one possible input.

We can find the inverse:

  y = x²
  Switch x and y: x = y²
  Take the square root: y = √x

Therefore: f⁻¹(x) = √x when the original function is restricted to x ≥ 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INVERSE FUNCTION VS. RECIPROCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An important point is that:

  f⁻¹(x) ≠ 1/f(x)

in general.

The notation f⁻¹(x) means inverse function, not reciprocal.

Example: If f(x) = 2x, then f⁻¹(x) = x/2.

But the reciprocal of f(x) is: 1/f(x) = 1/(2x)

These are completely different.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GRAPHS OF INVERSE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graph of a function and its inverse have an important relationship.

Their graphs are reflections of each other across the line:

  y = x

Example: If f(x) = 2x + 3, then f⁻¹(x) = (x - 3)/2

The two graphs are mirror images across y = x.

This happens because the coordinates of points are reversed.

If (2, 7) is on f, then (7, 2) is on f⁻¹.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH A QUADRATIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x², x ≥ 0

We know that: f⁻¹(x) = √x

Let's test a value.

For x = 9, the original function gives: f(9) = 9² = 81

The inverse gives: f⁻¹(81) = √81 = 9

Therefore: f⁻¹(f(9)) = 9

The inverse returns us to the original input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INVERSE FUNCTIONS AND COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse functions are closely connected to composition of functions.

If f and f⁻¹ are inverse functions, then:

  f⁻¹ ∘ f = I

and:

  f ∘ f⁻¹ = I

where I(x) = x is the identity function.

Example: f(x) = 3x - 2 and f⁻¹(x) = (x + 2)/3

Then: f⁻¹(f(x)) = x

This demonstrates that the two functions undo each other's operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. REAL-WORLD EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse functions can represent reversing a process.

Suppose the cost of an item after a fixed conversion is: C(x) = 2x + 10

If the original value is x = 20:

  C(20) = 2(20) + 10 = 50

The inverse function can recover the original value:

  C⁻¹(50) = (50 - 10)/2 = 20

Therefore: C⁻¹(50) = 20

The inverse reverses the original calculation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INVERSE FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse functions are important in Calculus because they are used when studying inverse trigonometric functions, logarithmic functions, exponential functions, and derivatives of inverse functions.

Common inverse trigonometric functions include:

  sin⁻¹(x), cos⁻¹(x), tan⁻¹(x)

These are commonly called:

  arcsin(x), arccos(x), arctan(x)

Example: arcsin(1) = π/2

This means that: sin(π/2) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Inverse Functions, remember:

  • Inverse Notation: f⁻¹(x)
  • Composition Property: f⁻¹(f(x)) = x
  • Composition Property: f(f⁻¹(x)) = x

One-to-One Functions:
  A function generally needs to be one-to-one to have an inverse function.

Horizontal Line Test:
  Passes horizontal line test → one-to-one

Graph Relationship:
  The graphs of f and f⁻¹ are reflections across y = x

Important Warning:
  f⁻¹(x) ≠ 1/f(x)

The key idea to remember is:

  An inverse function reverses the operation of the original function. To find an inverse, we typically replace f(x) with y, switch x and y, and solve for y. A function generally needs to be one-to-one to have an inverse function, and the graphs of a function and its inverse are reflections across the line y = x. In Calculus, inverse functions are especially important when studying inverse trigonometric functions, logarithms, exponentials, and derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse Functions are fundamental concepts in Mathematics that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Definition of Inverse Functions
  ✓ Finding the Inverse
  ✓ Checking the Inverse
  ✓ One-to-One Functions
  ✓ Horizontal Line Test
  ✓ Restricting the Domain
  ✓ Inverse Function vs Reciprocal
  ✓ Graphs of Inverse Functions
  ✓ Composition and Inverse Functions
  ✓ Real-World Applications
  ✓ Inverse Functions in Calculus
  ✓ Inverse Trigonometric Functions
  `,
  examples: [
    "Find inverse of f(x) = 2x + 3 → f⁻¹(x) = (x - 3)/2",
    "Check inverse: f⁻¹(f(4)) = 4",
    "Determine if f(x) = x² is one-to-one over all real numbers → no",
    "Restrict domain of f(x) = x² to x ≥ 0 → inverse is √x",
    "Test inverse of f(x) = x² with f⁻¹(f(9)) = 9",
    "Use horizontal line test on f(x) = x³ → passes, so invertible",
    "Use horizontal line test on f(x) = x² → fails over all real numbers",
    "Distinguish f⁻¹(x) from 1/f(x): for f(x)=2x, f⁻¹(x)=x/2, 1/f(x)=1/(2x)",
    "Graph relationship: f and f⁻¹ are reflections across y = x",
    "Real-world: C(x)=2x+10, find C⁻¹(50) = 20",
    "Evaluate arcsin(1) → π/2",
    "Verify inverse using composition: f(f⁻¹(x)) = x",
  ],
};

export default topic;