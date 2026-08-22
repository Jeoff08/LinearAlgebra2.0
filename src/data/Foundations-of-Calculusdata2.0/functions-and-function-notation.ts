const topic = {
  id: "functions-and-function-notation",
  title: "Functions and Function Notation",
  summary:
    "Definition of functions, domain and range, function notation, evaluation, composition, inverse functions, and types of functions.",
  details: `
A function is a mathematical relationship that connects each input to exactly one output. Functions are one of the most important concepts in Calculus because they are used to describe relationships between quantities, model real-world situations, represent graphs, and analyze change.

In simple terms: A function takes an input, performs a rule or operation, and produces an output.

This can be represented as:

  Input → Function → Output

Example: Consider f(x) = 2x + 3

If the input is x = 4, then:

  f(4) = 2(4) + 3
  f(4) = 8 + 3
  f(4) = 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a relationship between two sets of values where each input has exactly one output.

The input is commonly called the:

  Domain

while the possible outputs are called the:

  Range

Example: f(x) = x²

If x = 2, then f(2) = 2² = 4

The input 2 produces exactly one output, 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FUNCTION NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation is a convenient way to represent a function.

The most common notation is:

  f(x)

which is read as "f of x."

Example: f(x) = 3x + 2

means that the function named f takes x as its input and produces 3x + 2 as its output.

The symbol x represents the input variable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EVALUATING A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To evaluate a function, substitute the given value for x.

Consider: f(x) = 2x + 5

Find f(3):

  f(3) = 2(3) + 5
  f(3) = 6 + 5
  f(3) = 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: g(x) = x² - 4x + 1

Find g(2):

  g(2) = (2)² - 4(2) + 1
  g(2) = 4 - 8 + 1
  g(2) = -3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DOMAIN OF A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain is the set of all possible input values for which a function is defined.

Example: f(x) = x + 5 can accept any real number.

Therefore, its domain is:

  (-∞, ∞) or x ∈ ℝ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RESTRICTIONS ON THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some functions cannot accept every real number.

Consider: f(x) = 1/(x - 2)

The denominator cannot equal zero.

Therefore: x - 2 ≠ 0 which means x ≠ 2

The domain is:

  (-∞, 2) ∪ (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SQUARE ROOT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = √(x - 3)

For a real-valued function, the expression inside the square root must be greater than or equal to zero:

  x - 3 ≥ 0

Therefore: x ≥ 3

The domain is:

  [3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RANGE OF A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The range is the set of possible output values produced by a function.

Consider: f(x) = x²

Since the square of a real number can never be negative:

  x² ≥ 0

Therefore, the range is:

  [0, ∞)

Example: f(-2) = 4 and f(2) = 4

Different inputs can produce the same output.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INDEPENDENT AND DEPENDENT VARIABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a function: y = f(x)

x is usually called the independent variable, while y is the dependent variable.

This is because the value of y depends on the value of x.

Example: y = 2x + 1

If x = 3, then y = 2(3) + 1 = 7

Therefore, the value of y depends on x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FUNCTIONS AS TABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also be represented using a table.

Consider: f(x) = 2x + 1

Some input and output values are:

  x   |  0   1   2   3
  f(x)|  1   3   5   7

Each input has exactly one corresponding output.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FUNCTIONS AS GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions can also be represented graphically on a coordinate plane.

Example: f(x) = x² produces a curved graph called a parabola.

The horizontal axis represents the input x, while the vertical axis represents the output f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE VERTICAL LINE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The vertical line test can be used to determine whether a graph represents a function.

If a vertical line crosses a graph more than once, the graph does not represent a function.

If every vertical line crosses the graph at most once, the graph represents a function.

This works because every input must have exactly one output.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TYPES OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are many different types of functions used in Mathematics and Calculus.

Linear Function
────────────────

  f(x) = mx + b

Example: f(x) = 2x + 3

Quadratic Function
───────────────────

  f(x) = ax² + bx + c

Example: f(x) = x² + 2x + 1

Polynomial Function
────────────────────

  f(x) = aₙxⁿ + ... + a₁x + a₀

Example: f(x) = x³ - 2x² + x - 5

Rational Function
──────────────────

A function involving a ratio of polynomials:

  f(x) = p(x)/q(x)

Example: f(x) = (x + 1)/(x - 2)

Exponential Function
─────────────────────

  f(x) = aˣ

Example: f(x) = 2ˣ

Logarithmic Function
────────────────────

  f(x) = logₐ(x)

Example: f(x) = log₂(x)

Trigonometric Functions
────────────────────────

Common examples include: sin(x), cos(x), tan(x)

These functions are especially important in Calculus when studying periodic behavior, waves, and rates of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FUNCTION COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions can be combined to create a new function. This is called function composition.

The notation is:

  (f∘g)(x) = f(g(x))

This means that g(x) is evaluated first, and its result is then used as the input of f.

Example: f(x) = 2x + 1 and g(x) = x²

Then:

  (f∘g)(x) = f(g(x))

Substitute g(x) = x²:

  f(x²) = 2x² + 1

Therefore:

  (f∘g)(x) = 2x² + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INVERSE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inverse function reverses the operation performed by the original function.

If f(x) = 2x + 3, we can find its inverse.

Start with: y = 2x + 3

Swap x and y:

  x = 2y + 3

Solve for y:

  x - 3 = 2y
  y = (x - 3)/2

Therefore:

  f⁻¹(x) = (x - 3)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions are the foundation of Calculus.

Calculus studies how functions behave and change.

For example:
  • The limit examines what happens to a function as x approaches a particular value.
  • The derivative measures the rate at which a function changes: f'(x)
  • The integral can be used to determine accumulated quantities such as area under a curve.

Therefore:

  Functions → Limits → Derivatives → Integrals

Understanding functions and function notation makes these later Calculus concepts much easier to understand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Functions and Function Notation, make sure you understand:

  • Function
  • Domain
  • Range
  • Function Notation
  • Independent Variable
  • Dependent Variable
  • Function Evaluation
  • Graphs
  • Function Composition
  • Inverse Functions

The key notation to remember is:

  f(x)

which represents the output of function f for an input x.

The key idea to remember is:

  A function is a rule that assigns exactly one output to every valid input. Function notation provides a clear way to represent, evaluate, graph, and analyze these relationships, making functions one of the fundamental building blocks of Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions and Function Notation are fundamental concepts in Mathematics that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ What Is a Function?
  ✓ Domain and Range
  ✓ Function Notation
  ✓ Evaluating Functions
  ✓ Domain Restrictions
  ✓ Square Root Functions
  ✓ Independent and Dependent Variables
  ✓ Functions as Tables
  ✓ Functions as Graphs
  ✓ The Vertical Line Test
  ✓ Types of Functions
  ✓ Function Composition
  ✓ Inverse Functions
  ✓ Functions in Calculus
  `,
  examples: [
    "Evaluate f(3) for f(x) = 2x + 5 → f(3) = 11",
    "Evaluate g(2) for g(x) = x² - 4x + 1 → g(2) = -3",
    "Find the domain of f(x) = 1/(x - 2) → (-∞, 2) ∪ (2, ∞)",
    "Find the domain of f(x) = √(x - 3) → [3, ∞)",
    "Find the range of f(x) = x² → [0, ∞)",
    "Find (f∘g)(x) for f(x) = 2x + 1 and g(x) = x² → 2x² + 1",
    "Find the inverse of f(x) = 2x + 3 → f⁻¹(x) = (x - 3)/2",
    "Use the vertical line test to identify a function",
    "Evaluate f(0) for a quadratic function",
    "Create a table of values for f(x) = 2x + 1",
  ],
};

export default topic;