// filename: theorems-on-continuity.ts

const topic = {
  id: "theorems-on-continuity",
  title: "Theorems on Continuity",
  summary:
    "Rules explaining how continuity is preserved when functions are combined through addition, subtraction, multiplication, division, powers, roots, and composition.",
  details: `
After learning what it means for a function to be continuous at a number, the next important topic is the Theorems on Continuity.

These theorems explain how continuity behaves when functions are combined through mathematical operations such as:
  • Addition
  • Subtraction
  • Multiplication
  • Division
  • Powers
  • Roots
  • Composition

They make it easier to determine whether complicated functions are continuous without checking the three conditions of continuity every single time.

Recall that a function f is continuous at x = a if:
  lim(x→a) f(x) = f(a)

The theorems on continuity allow us to use already known continuous functions to build more complicated continuous functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant function is continuous everywhere.

If f(x) = c, where c is a constant, then:
  f(x) is continuous for all real numbers

Example:
  f(x) = 7

No matter what value x approaches:
  f(x) = 7

Therefore:
  lim(x→a) 7 = 7 = f(a)

So:
  f(x) = 7 is continuous everywhere

Explanation:
  A constant function never changes its value. Since there are no jumps, holes, or breaks, it is continuous at every real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IDENTITY FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The identity function:
  f(x) = x

is continuous for all real numbers.

This means:
  lim(x→a) x = a = f(a)

Example:
  At x = 5, we have:
    f(5) = 5
  and:
    lim(x→5) x = 5

Since the limit equals the function value, the function is continuous.

Therefore:
  f(x) = x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SUM THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) and g(x) are both continuous at x = a, then:
  f(x) + g(x)

is also continuous at x = a.

Example:
  Let f(x) = x² and g(x) = 3x.

  Both functions are continuous everywhere.

  Therefore:
    f(x) + g(x) = x² + 3x

  is also continuous everywhere.

Explanation:
  If two functions have no breaks at a particular point, adding them together will also produce a function with no break at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENCE THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then:
  f(x) - g(x)

is also continuous at x = a.

Example:
  Let f(x) = x² and g(x) = 2x.

  Then:
    f(x) - g(x) = x² - 2x

  Since both functions are continuous everywhere:
    x² - 2x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONSTANT MULTIPLE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous at x = a, and c is a constant, then:
  c f(x)

is also continuous at x = a.

Example:
  Suppose f(x) = x².

  Since x² is continuous everywhere, multiplying it by 5 gives:
    5f(x) = 5x²

  Therefore:
    5x² is continuous everywhere

Explanation:
  Multiplying a continuous function by a constant changes the height or scale of the graph, but it does not create holes or breaks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PRODUCT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then:
  f(x)g(x)

is also continuous at x = a.

Example:
  Let f(x) = x and g(x) = x + 2.

  Both functions are continuous everywhere.

  Their product is:
    f(x)g(x) = x(x + 2) = x² + 2x

  Therefore:
    x² + 2x is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. QUOTIENT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at x = a, then:
  f(x)/g(x)

is continuous at x = a, provided:
  g(a) ≠ 0

Example:
  Consider f(x) = x + 1 and g(x) = x - 2.

  The quotient is:
    h(x) = (x + 1)/(x - 2)

  Both numerator and denominator are continuous everywhere.

  However, the denominator becomes zero when x = 2.

  Therefore:
    h(x) is continuous for x ≠ 2

  The function is not continuous at x = 2 because division by zero is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POWER THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous at x = a, then:
  [f(x)]ⁿ

is continuous at x = a, where n is a positive integer.

Example:
  Suppose f(x) = x + 1.

  Then:
    [f(x)]³ = (x + 1)³

  Since x + 1 is continuous everywhere, its cube is also continuous everywhere.

  Therefore:
    (x + 1)³ is continuous everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROOT THEOREM FOR CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) is continuous, then:
  ⁿ√(f(x))

is continuous wherever the expression is defined.

For an even root, √(f(x)), we must have:
  f(x) ≥ 0

Example:
  Consider f(x) = √(x + 4).

  The expression inside the square root must satisfy:
    x + 4 ≥ 0

  Therefore:
    x ≥ -4

  The function is continuous on:
    [-4, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POLYNOMIAL FUNCTIONS ARE CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important theorems is:
  Every polynomial function is continuous for all real numbers.

A polynomial has the general form:
  P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

Example:
  P(x) = 3x⁴ - 2x³ + 5x - 7

This function is continuous for every real number.

Therefore:
  P(x) is continuous on (-∞, ∞)

Explanation:
  Polynomials are built using constants, powers of x, addition, subtraction, and multiplication. Since these operations preserve continuity, every polynomial is continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTIONS ARE CONTINUOUS ON THEIR DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function has the form:
  R(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials.

A rational function is continuous everywhere it is defined.

Therefore:
  R(x) is continuous wherever Q(x) ≠ 0

Example:
  f(x) = (x² + 1)/(x - 3)

The denominator cannot equal zero:
  x - 3 ≠ 0

Therefore:
  x ≠ 3

The function is continuous on:
  (-∞, 3) ∪ (3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPOSITION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Composition Theorem states:

If f is continuous at x = a and g is continuous at f(a), then the composite function:
  g(f(x))

is continuous at x = a.

Example:
  Consider f(x) = x² and g(x) = √x.

  The composite function is:
    g(f(x)) = √(x²)

  which is:
    |x|

  Since the resulting function is defined and continuous for all real numbers:
    √(x²) = |x| is continuous everywhere

Explanation:
  If the first function behaves continuously and its output goes into another function that is also continuous, the entire process remains continuous.

Think of it like a chain:
  x → f(x) → g(f(x))

If there are no breaks in the process, the composite function is continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONTINUITY OF COMMON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many common functions are continuous throughout their domains.

Polynomial Functions:
  Continuous for all real numbers
  Example: x³ - 2x + 1

Rational Functions:
  Continuous where the denominator is not zero
  Example: (x + 1)/(x - 2)

Root Functions:
  Continuous where they are defined
  Example: √x is continuous for x ≥ 0

Exponential Functions:
  Continuous for all real numbers
  Example: 2ˣ

Logarithmic Functions:
  Continuous for x > 0
  Example: ln(x)

Sine and Cosine Functions:
  Continuous for all real numbers
  Examples: sin(x), cos(x)

Tangent Function:
  Continuous where it is defined
  Since tan(x) = sin(x)/cos(x), it is undefined when cos(x) = 0.
  Therefore, it is discontinuous at x = π/2 + nπ, where n is an integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE INTERMEDIATE VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important theorems involving continuity is the Intermediate Value Theorem (IVT).

The theorem states:

  If a function f is continuous on the interval [a, b], and N is any number 
  between f(a) and f(b), then there is at least one number c in [a, b] such 
  that:
    f(c) = N

Explanation:
  A continuous function cannot jump over values.

  If the graph moves continuously from one value to another, it must pass 
  through every value between them.

Example:
  Suppose f(x) = x² on the interval [1, 3].

  We have:
    f(1) = 1
  and:
    f(3) = 9

  The number 4 is between 1 and 9.

  Because f(x) = x² is continuous, there must be some value of x between 1 
  and 3 where f(x) = 4.

  Indeed:
    f(2) = 4

  Therefore:
    c = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY THEOREMS ON CONTINUITY ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorems on continuity allow us to determine continuity quickly.

Instead of checking:
  • Does f(a) exist?
  • Does the limit exist?
  • Does the limit equal f(a)?

for every complicated function, we can use the theorems.

For example:
  f(x) = √(x² + 4)/(x² + 1)

We know:
  • x² is continuous
  • x² + 4 is continuous
  • √(x² + 4) is continuous because x² + 4 > 0
  • x² + 1 > 0, so the denominator is never zero
  • A quotient of continuous functions is continuous where the denominator is not zero

Therefore:
  f(x) = √(x² + 4)/(x² + 1) is continuous for all real x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK GUIDE TO THEOREMS ON CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f and g are continuous at x = a.

  Operation            Result
  ───────────────────────────────────────────────────────────────
  f(x) + g(x)          Continuous
  f(x) - g(x)          Continuous
  c f(x)               Continuous
  f(x)g(x)             Continuous
  f(x)/g(x)            Continuous if g(a) ≠ 0
  [f(x)]ⁿ              Continuous
  ⁿ√(f(x))             Continuous where defined
  g(f(x))              Continuous if both functions are appropriately continuous

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Theorems on Continuity explain how continuity is preserved when functions are combined.

If functions are continuous, then their:
  • Sum is continuous
  • Difference is continuous
  • Constant multiple is continuous
  • Product is continuous
  • Quotient is continuous where the denominator is not zero
  • Powers are continuous
  • Roots are continuous where defined
  • Compositions are continuous under the appropriate conditions

Some important results are:
  • Every polynomial is continuous for all real numbers
  • Every rational function is continuous on its domain
  • Continuous functions cannot skip intermediate values

The most important idea to remember is:

  Continuity is preserved when continuous functions are combined using 
  ordinary mathematical operations, as long as the resulting expression 
  remains defined.

These theorems make continuity easier to analyze and prepare us for important Calculus concepts such as the Intermediate Value Theorem, derivatives, and integrals.
  `,
  examples: [
    "Constant f(x) = 7 is continuous everywhere",
    "Identity f(x) = x is continuous everywhere",
    "Sum: f(x) = x² + 3x is continuous (sum of continuous functions)",
    "Product: f(x) = x(x+2) = x² + 2x is continuous",
    "Quotient: f(x) = (x+1)/(x-2) is continuous for x ≠ 2",
    "Power: (x+1)³ is continuous",
    "Root: √(x+4) is continuous on [-4, ∞)",
  ],
};

export default topic;