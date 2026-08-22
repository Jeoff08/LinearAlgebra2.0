const topic = {
  id: "evaluating-limits-numerically",
  title: "Evaluating Limits Numerically",
  summary:
    "Numerical evaluation of limits, creating tables of values, left-hand and right-hand limits, and determining when limits exist.",
  details: `
Evaluating limits numerically means determining what value a function approaches by looking at the function's values as x gets closer and closer to a particular number.

Instead of immediately using algebraic techniques, we create a table of values around the point.

The basic notation is:

  lim(x→a) f(x) = L

This means that as x gets closer to a, f(x) gets closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = x² + 1

We want to evaluate: lim(x→2) (x² + 1)

Choose values of x close to 2:

  x       f(x) = x² + 1
  ─────────────────────────
  1.9     4.61
  1.99    4.9601
  1.999   4.996001
  2       5
  2.001   5.004001
  2.01    5.0401
  2.1     5.41

From both sides, the function approaches: 5

Therefore: lim(x→2) (x² + 1) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. APPROACHING FROM THE LEFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating numerically, we need to look at values less than the target number.

For: lim(x→2)

we might use: 1.9, 1.99, 1.999, 1.9999

These values approach 2 from the left.

This gives the left-hand limit: lim(x→2⁻) f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. APPROACHING FROM THE RIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We also need values greater than the target number:

  2.1, 2.01, 2.001, 2.0001

These approach 2 from the right.

This gives the right-hand limit: lim(x→2⁺) f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMPARING BOTH SIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A two-sided limit exists when:

  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

Example: lim(x→2) f(x)

If the table shows:
  lim(x→2⁻) f(x) ≈ 5
and:
  lim(x→2⁺) f(x) ≈ 5

then: lim(x→2) f(x) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH AN UNDEFINED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² - 4)/(x - 2)

Find: lim(x→2) f(x)

At x = 2: f(2) = (4 - 4)/(2 - 2) = 0/0

So the function is undefined at x = 2.

However, we can investigate the limit numerically.

  x       f(x)
  ─────────────────────────
  1.9     3.9
  1.99    3.99
  1.999   3.999
  2.001   4.001
  2.01    4.01
  2.1     4.1

The values approach: 4

Therefore: lim(x→2) (x² - 4)/(x - 2) = 4

Notice that the function is undefined at x = 2, but its limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. NUMERICAL LIMITS FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Numerical evaluation can also be used together with a graph.

Example: f(x) = (x² - 1)/(x - 1)

The function simplifies to: f(x) = x + 1, x ≠ 1

As x approaches 1, the values approach 2.

Thus: lim(x→1) f(x) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CHOOSING GOOD X-VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating numerically, choose values increasingly close to the target.

Example: For lim(x→3)

Useful values might be:

  From the left:  2.9, 2.99, 2.999, 2.9999
  From the right: 3.1, 3.01, 3.001, 3.0001

The closer the x-values get to 3, the more accurately we can observe the behavior of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. A USEFUL TABLE FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common format for numerical limit problems is:

  x → a⁻    f(x)    x → a⁺    f(x)
  ────────────────────────────────────
  a - 0.1   value   a + 0.1   value
  a - 0.01  value   a + 0.01  value
  a - 0.001 value   a + 0.001 value
  a - 0.0001 value  a + 0.0001 value

Then compare the values from both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH A TRIGONOMETRIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) sin(x)/x

Using radians, we can create a numerical table:

  x       sin(x)/x
  ─────────────────────────
  -0.1    ≈ 0.9983
  -0.01   ≈ 0.99998
  -0.001  ≈ 0.9999998
  0.001   ≈ 0.9999998
  0.01    ≈ 0.99998
  0.1     ≈ 0.9983

The values approach: 1

Therefore: lim(x→0) sin(x)/x = 1

This is one of the most important limits in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHEN THE LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the numerical values approach different numbers from each side:

  lim(x→a⁻) f(x) = 2

but:

  lim(x→a⁺) f(x) = 5

Since 2 ≠ 5, the two-sided limit does not exist:

  lim(x→a) f(x) DNE

DNE means Does Not Exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NUMERICAL EVALUATION AND CALCULATORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A calculator can be useful for evaluating f(x) at values very close to a.

Example: To investigate lim(x→3) (x² - 9)/(x - 3)

you could evaluate:
  f(2.9), f(2.99), f(2.999)
and:
  f(3.1), f(3.01), f(3.001)

The values reveal what the function approaches.

However, numerical evaluation gives evidence about the limit. In formal calculus work, algebraic methods or limit theorems may be needed to prove the exact value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating limits numerically:

  • Identify the value that x is approaching.
  • Choose values slightly less than the target.
  • Choose values slightly greater than the target.
  • Calculate f(x) for each value.
  • Observe the pattern.
  • Compare the left-hand and right-hand behavior.
  • If both sides approach the same value, that is the limit.
  • If they approach different values, the limit does not exist.
  • The function does not necessarily need to be defined at the target point.
  • Use sufficiently precise decimal values when necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  f(x) = { 2x + 1, if x < 2; x², if x ≥ 2 }

Find: lim(x→2) f(x)

From the left (x < 2):
  x = 1.9: f(1.9) = 2(1.9) + 1 = 4.8
  x = 1.99: f(1.99) = 2(1.99) + 1 = 4.98
  x = 1.999: f(1.999) = 2(1.999) + 1 = 4.998
  → approaches 5

From the right (x ≥ 2):
  x = 2.001: f(2.001) = (2.001)² = 4.004001
  x = 2.01: f(2.01) = (2.01)² = 4.0401
  x = 2.1: f(2.1) = (2.1)² = 4.41
  → approaches 4

Since 5 ≠ 4, the limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Evaluating Limits Numerically, you should understand:

  • Numerical definition of a limit
  • Limit tables
  • Approaching from the left
  • Approaching from the right
  • Two-sided limits
  • Estimating limits from tables
  • Limits from graphs
  • Function values near a point
  • Undefined function values
  • 0/0 situations
  • Limits involving rational functions
  • Limits involving trigonometric functions
  • Limits at infinity
  • Infinite limits
  • Using calculators to estimate limits
  • Recognizing when a limit does not exist
  • Comparing numerical and algebraic methods

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Evaluating Limits Numerically, remember:

  • A limit describes what a function approaches, not necessarily what it equals.
  • Tables can provide strong evidence for the value of a limit.
  • Both left and right sides must be examined.
  • The function can be undefined at the point and still have a limit.
  • Numerical methods are often used to estimate limits before applying algebra.

The key idea to remember is:

  Evaluating limits numerically means examining the values of a function as x gets closer and closer to a particular number from both sides. By creating a table of values, we can estimate the number that the function approaches and determine whether the limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluating Limits Numerically is an essential skill for understanding the behavior of functions and serves as a foundation for more advanced limit techniques.

Key concepts covered:

  ✓ The Basic Idea
  ✓ Approaching From the Left
  ✓ Approaching From the Right
  ✓ Comparing Both Sides
  ✓ Limits With Undefined Functions
  ✓ Choosing Good x-Values
  ✓ Table Format
  ✓ Trigonometric Limits
  ✓ When Limits Do Not Exist
  ✓ Calculators and Numerical Evaluation
  ✓ Piecewise Functions
  `,
  examples: [
    "Evaluate numerically: lim(x→2) (x² + 1) → 5",
    "Evaluate numerically: lim(x→2) (x² - 4)/(x - 2) → 4",
    "Evaluate numerically: lim(x→1) (x² - 1)/(x - 1) → 2",
    "Evaluate numerically: lim(x→0) sin(x)/x → 1",
    "Find left-hand limit: lim(x→2⁻) f(x) for f(x) = {2x+1 if x<2, x² if x≥2} → 5",
    "Find right-hand limit: lim(x→2⁺) f(x) for f(x) = {2x+1 if x<2, x² if x≥2} → 4",
    "Determine if limit exists: lim(x→2) f(x) for piecewise function → does not exist",
    "Create table for lim(x→3) (x² - 9)/(x - 3) using values 2.9, 2.99, 3.01, 3.1",
    "Use numerical values to estimate lim(x→0) (1 - cos(x))/x → 0",
    "Identify when a limit does not exist: left limit ≠ right limit",
    "Evaluate: lim(x→0) (eˣ - 1)/x numerically → 1",
    "Use table format: a - 0.1, a - 0.01, a + 0.01, a + 0.1",
  ],
};

export default topic;