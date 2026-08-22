const topic = {
  id: "domain-and-range",
  title: "Domain and Range",
  summary:
    "Definition of domain and range, finding domain and range from equations, graphs, and tables, domain restrictions, and interval notation.",
  details: `
Domain and range are important concepts in understanding functions. They describe the possible inputs and outputs of a function. In Calculus, domain and range are used when studying graphs, limits, continuity, derivatives, and other mathematical relationships.

In simple terms: The domain tells us what values can be entered into a function, while the range tells us what values can come out of the function.

For a function: f(x) = y

the x-values represent the inputs, while the y-values represent the outputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain of a function is the set of all possible input values for which the function is defined.

In most functions, the input is represented by x.

Therefore, the domain describes all allowable values of x.

Example: f(x) = x + 3 can accept any real number as an input.

Therefore, its domain is: (-∞, ∞) or x ∈ ℝ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The range of a function is the set of all possible output values produced by the function.

The output is usually represented by y or f(x).

Example: f(x) = x + 3 can produce any real number as an output.

Therefore, its range is: (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DOMAIN AND RANGE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

The function can accept any real number. Therefore, the domain is: (-∞, ∞)

However, the square of a real number can never be negative. Therefore: f(x) ≥ 0

The range is: [0, ∞)

Example:
  f(-3) = 9
  f(0) = 0
  f(3) = 9

The smallest possible output is 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING THE DOMAIN FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain of a graph is determined by looking at the graph from left to right.

In other words, we ask: What x-values does the graph contain?

Example: If a graph begins at x = -2 and ends at x = 5, with both endpoints included, then the domain is: [-2, 5]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FINDING THE RANGE FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The range is determined by looking at the graph from bottom to top.

We ask: What y-values does the graph contain?

Example: If the smallest y-value is y = 1 and the largest is y = 7, with both endpoints included, then the range is: [1, 7]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some functions cannot accept certain values.

A common restriction occurs when a function has a variable in the denominator.

Consider: f(x) = 1/(x - 2)

The denominator cannot equal zero.

Therefore: x - 2 ≠ 0 which gives: x ≠ 2

Therefore, the domain is: (-∞, 2) ∪ (2, ∞)

The value x = 2 is excluded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SQUARE ROOT RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another common restriction occurs with square roots.

Consider: f(x) = √(x - 4)

For the function to produce real numbers, the expression inside the square root must be greater than or equal to zero:

  x - 4 ≥ 0

Therefore: x ≥ 4

The domain is: [4, ∞)

Since the smallest possible value of √(x - 4) is 0, the range is: [0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DOMAIN AND RANGE OF A LINEAR FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 2x + 1

A linear function like this can accept any real number.

Therefore: Domain = (-∞, ∞)

Because the line continues infinitely upward and downward, it can also produce every real number.

Therefore: Range = (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DOMAIN AND RANGE OF A QUADRATIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² + 2

The domain is: (-∞, ∞) because any real number can be substituted for x.

However: x² ≥ 0

Therefore: x² + 2 ≥ 2

The range is: [2, ∞)

The smallest output is 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DOMAIN AND RANGE OF A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x + 1)/(x - 3)

The denominator cannot equal zero: x - 3 ≠ 0

Therefore: x ≠ 3

The domain is: (-∞, 3) ∪ (3, ∞)

The function also cannot produce y = 1. Therefore, its range is: (-∞, 1) ∪ (1, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DOMAIN AND RANGE USING INTERVAL NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Interval notation provides a convenient way to represent domains and ranges.

Example: -2 ≤ x < 5 can be written as: [-2, 5)

Similarly: y > 3 can be written as: (3, ∞)

Remember that infinity always uses a parenthesis because infinity is not an actual real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DOMAIN AND RANGE FROM A TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also be represented using a table.

Consider:

  x   |  1   2   3   4
  f(x)|  3   5   7   9

The domain is the set of input values: {1, 2, 3, 4}

The range is the set of output values: {3, 5, 7, 9}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DOMAIN AND RANGE IN REAL-WORLD SITUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain and range are also useful for describing real-world situations.

Suppose the number of hours a student studies is represented by x.

If the student can study from 0 to 8 hours: 0 ≤ x ≤ 8

The domain is: [0, 8]

If the corresponding test score ranges from 50 to 100: 50 ≤ y ≤ 100

The range is: [50, 100]

This shows how domain and range can describe realistic limitations on inputs and outputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DOMAIN AND RANGE IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain and range are essential in Calculus because they help determine where a function exists and what values it can produce.

Before finding a limit, derivative, or integral, it is often important to understand the function's domain.

Example: f(x) = 1/(x - 2) is not defined at x = 2.

Therefore, we must consider the domain when studying the behavior of the function near x = 2.

Similarly, understanding the range helps us analyze the possible values produced by a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Domain and Range, make sure you understand:

  • Domain = Possible Inputs
  • Range = Possible Outputs

For a function: x → f(x)

x represents the input, while f(x) represents the output.

Common domain restrictions include:
  • Denominators cannot equal zero
  • Expressions inside even roots must be ≥ 0

The key idea to remember is:

  The domain tells us which values we are allowed to put into a function, while the range tells us which values the function can produce. Understanding domain and range is essential for analyzing functions and provides an important foundation for limits, continuity, derivatives, and integrals in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain and Range are fundamental concepts in understanding functions that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ What Is Domain?
  ✓ What Is Range?
  ✓ Finding Domain from a Graph
  ✓ Finding Range from a Graph
  ✓ Domain Restrictions
  ✓ Square Root Restrictions
  ✓ Domain and Range of Linear Functions
  ✓ Domain and Range of Quadratic Functions
  ✓ Domain and Range of Rational Functions
  ✓ Interval Notation
  ✓ Domain and Range from a Table
  ✓ Real-World Applications
  ✓ Domain and Range in Calculus
  `,
  examples: [
    "Find the domain of f(x) = x + 3 → (-∞, ∞)",
    "Find the range of f(x) = x + 3 → (-∞, ∞)",
    "Find the domain of f(x) = x² → (-∞, ∞)",
    "Find the range of f(x) = x² → [0, ∞)",
    "Find the domain of f(x) = 1/(x - 2) → (-∞, 2) ∪ (2, ∞)",
    "Find the domain of f(x) = √(x - 4) → [4, ∞)",
    "Find the range of f(x) = √(x - 4) → [0, ∞)",
    "Find the domain and range of f(x) = 2x + 1 → (-∞, ∞), (-∞, ∞)",
    "Find the domain and range of f(x) = x² + 2 → (-∞, ∞), [2, ∞)",
    "Find the domain and range of f(x) = (x + 1)/(x - 3) → (-∞, 3) ∪ (3, ∞), (-∞, 1) ∪ (1, ∞)",
    "Find the domain from a graph that spans x = -2 to x = 5 → [-2, 5]",
    "Find the range from a graph that spans y = 1 to y = 7 → [1, 7]",
  ],
};

export default topic;