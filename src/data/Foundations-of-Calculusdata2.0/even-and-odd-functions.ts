const topic = {
  id: "even-and-odd-functions",
  title: "Even and Odd Functions",
  summary:
    "Definition of even and odd functions, symmetry about the y-axis and origin, algebraic determination, and applications in calculus.",
  details: `
Even and odd functions are special types of functions that can be identified by their symmetry. Symmetry describes how the graph of a function behaves when reflected across an axis or rotated around the origin.

Understanding even and odd functions is important in Calculus because symmetry can make it easier to analyze graphs, limits, derivatives, integrals, and mathematical relationships.

In simple terms:
  • An even function is symmetric about the y-axis.
  • An odd function is symmetric about the origin.
  • A function that is neither is called neither even nor odd.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EVEN FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is called even if it satisfies:

  f(-x) = f(x)

This means that replacing x with -x produces the same output.

The graph of an even function is symmetric about the y-axis.

This means that the left side of the graph is a mirror image of the right side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE OF AN EVEN FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

To determine whether it is even, replace x with -x:

  f(-x) = (-x)²

Because (-x)² = x², we get:

  f(-x) = x²

Therefore: f(-x) = f(x)

So: f(x) = x² is an even function.

Its graph is symmetric about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ANOTHER EXAMPLE OF AN EVEN FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴ + 2x² + 1

Replace x with -x:

  f(-x) = (-x)⁴ + 2(-x)² + 1

Since (-x)⁴ = x⁴ and (-x)² = x², we get:

  f(-x) = x⁴ + 2x² + 1

Therefore: f(-x) = f(x), so the function is even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ODD FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is called odd if it satisfies:

  f(-x) = -f(x)

This means that replacing x with -x produces the negative of the original output.

The graph of an odd function has symmetry about the origin.

This means the graph looks the same after a 180° rotation around the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE OF AN ODD FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

Replace x with -x:

  f(-x) = (-x)³

Therefore: f(-x) = -x³

Since f(x) = x³, we have: f(-x) = -f(x)

Therefore: f(x) = x³ is an odd function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ANOTHER EXAMPLE OF AN ODD FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 2x³ - 5x

Replace x with -x:

  f(-x) = 2(-x)³ - 5(-x)

Simplify:

  f(-x) = -2x³ + 5x

Factor out -1:

  f(-x) = -(2x³ - 5x)

Therefore: f(-x) = -f(x), so the function is odd.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. NEITHER EVEN NOR ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every function is even or odd.

A function is neither when it satisfies neither condition:
  • f(-x) ≠ f(x)
  • f(-x) ≠ -f(x)

Example: f(x) = x² + x

Replace x with -x:

  f(-x) = (-x)² + (-x)
  f(-x) = x² - x

This is not equal to x² + x, and it is also not equal to -(x² + x).

Therefore: f(x) = x² + x is neither even nor odd.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO DETERMINE IF A FUNCTION IS EVEN OR ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a simple process you can follow.

Step 1: Start with the function
  Example: f(x) = x⁴ - 3x²

Step 2: Replace x with -x
  f(-x) = (-x)⁴ - 3(-x)²

Step 3: Simplify
  f(-x) = x⁴ - 3x²

Step 4: Compare
  Since f(-x) = f(x), the function is Even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EVEN AND ODD FUNCTIONS COMPARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────┬─────────────────────────┬────────────────────┐
│ Type        │ Algebraic Condition     │ Graph Symmetry     │
├─────────────┼─────────────────────────┼────────────────────┤
│ Even        │ f(-x) = f(x)            │ y-axis             │
├─────────────┼─────────────────────────┼────────────────────┤
│ Odd         │ f(-x) = -f(x)           │ Origin             │
├─────────────┼─────────────────────────┼────────────────────┤
│ Neither     │ Neither condition       │ No required        │
│             │ is satisfied            │ symmetry           │
└─────────────┴─────────────────────────┴────────────────────┘

A useful way to remember this is:
  Even → y-axis
  Odd → Origin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even Functions
─────────────────
  • f(x) = x²
  • f(x) = x⁴
  • f(x) = |x|
  • f(x) = cos(x)

These functions have symmetry about the y-axis.

Odd Functions
────────────────
  • f(x) = x
  • f(x) = x³
  • f(x) = x⁵
  • f(x) = sin(x)

These functions have symmetry about the origin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EVEN AND ODD FUNCTIONS USING TABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

We can create a table:

  x   |  -2  -1   0   1   2
  f(x)|   4   1   0   1   4

Notice that:
  • f(-2) = f(2) = 4
  • f(-1) = f(1) = 1

This demonstrates the symmetry of an even function.

Now consider: f(x) = x³

  x   |  -2  -1   0   1   2
  f(x)|  -8  -1   0   1   8

Notice that:
  • f(-2) = -f(2)
  • f(-1) = -f(1)

This demonstrates the symmetry of an odd function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EVEN AND ODD FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even and odd functions are especially useful in Calculus because their symmetry can simplify calculations.

For example, when evaluating definite integrals over symmetric intervals, symmetry can sometimes reduce the amount of work required.

For an even function:

  ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

For an odd function:

  ∫₋ₐᵃ f(x) dx = 0

These properties are useful when studying definite integrals and areas under curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: ODD FUNCTION AND INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

This is an odd function.

Suppose we want to evaluate:

  ∫₋₂² x³ dx

Because x³ is odd and the interval is symmetric around zero:

  ∫₋₂² x³ dx = 0

This is an example of how recognizing symmetry can make a Calculus problem much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Even and Odd Functions, remember:

  • f(-x) = f(x) → Even
  • f(-x) = -f(x) → Odd

An even function has symmetry about the y-axis.

An odd function has symmetry about the origin.

If neither condition is satisfied, the function is neither even nor odd.

The key idea to remember is:

  Even and odd functions are identified by how their outputs behave when x is replaced by -x. Even functions have y-axis symmetry, while odd functions have origin symmetry. Recognizing these patterns is useful for understanding graphs and simplifying Calculus problems, especially when working with definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even and Odd Functions are important symmetry concepts in Mathematics that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Even Functions
  ✓ Odd Functions
  ✓ Neither Even Nor Odd
  ✓ y-axis Symmetry
  ✓ Origin Symmetry
  ✓ Algebraic Determination
  ✓ Common Examples
  ✓ Tables of Values
  ✓ Even and Odd Functions in Calculus
  ✓ Definite Integrals of Even and Odd Functions
  `,
  examples: [
    "Determine if f(x) = x² is even: f(-x) = (-x)² = x² = f(x) → even",
    "Determine if f(x) = x⁴ + 2x² + 1 is even: f(-x) = x⁴ + 2x² + 1 → even",
    "Determine if f(x) = x³ is odd: f(-x) = (-x)³ = -x³ = -f(x) → odd",
    "Determine if f(x) = 2x³ - 5x is odd: f(-x) = -2x³ + 5x = -(2x³ - 5x) → odd",
    "Determine if f(x) = x² + x is neither: f(-x) = x² - x → neither even nor odd",
    "Use the process to determine if f(x) = x⁴ - 3x² is even → even",
    "Identify even functions: x², x⁴, |x|, cos(x)",
    "Identify odd functions: x, x³, x⁵, sin(x)",
    "Evaluate ∫₋₂² x³ dx using odd function property → 0",
    "Evaluate ∫₋₂² x² dx using even function property → 2∫₀² x² dx",
    "Create a table for f(x) = x² showing f(-2) = f(2) = 4",
    "Create a table for f(x) = x³ showing f(-2) = -f(2) = -8",
  ],
};

export default topic;