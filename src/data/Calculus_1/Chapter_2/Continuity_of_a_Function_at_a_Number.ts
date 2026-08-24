// filename: continuity-of-a-function-at-a-number.ts

const topic = {
  id: "continuity-of-a-function-at-a-number",
  title: "Continuity of a Function at a Number",
  summary:
    "A function is continuous at a number if its graph has no break, hole, or jump at that point, requiring f(a) exists, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a).",
  details: `
A function is continuous at a number if its graph has no break, hole, or jump at that particular point. Informally, a continuous function can be drawn around that point without lifting your pencil.

Continuity is closely related to limits. For a function to be continuous at a number, the function must have a value there, the limit must exist, and the limit must equal the actual value of the function.

The most important condition is:
  lim(x→a) f(x) = f(a)

This means:
  As x approaches a, the value of the function must approach the same value 
  as the actual function value at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF CONTINUITY AT A NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f is continuous at x = a if all three of the following conditions are satisfied:

Condition 1: The Function Exists at a
  f(a) is defined
  This means we must be able to substitute a into the function and get a valid value.

Condition 2: The Limit Exists
  lim(x→a) f(x) exists
  For this to happen, the left-hand and right-hand limits must be equal:
    lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

Condition 3: The Limit Equals the Function Value
  lim(x→a) f(x) = f(a)
  The value the function approaches must be the same as the actual value of the function.

The Three Conditions of Continuity:
  1. f(a) exists
  2. lim(x→a) f(x) exists
  3. lim(x→a) f(x) = f(a)

If all three conditions are true, the function is continuous at x = a.

If even one condition fails, the function is discontinuous at x = a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE OF A CONTINUOUS FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x² + 3x + 1

Determine whether the function is continuous at x = 2.

Step 1: Find f(2)
  f(2) = 2² + 3(2) + 1
  = 4 + 6 + 1
  f(2) = 11

So, the function exists at x = 2.

Step 2: Find the Limit
  lim(x→2) (x² + 3x + 1)

Since this is a polynomial, we can use direct substitution:
  = 2² + 3(2) + 1
  = 11

Therefore:
  lim(x→2) f(x) = 11

Step 3: Compare the Limit and Function Value
  We have:
    lim(x→2) f(x) = 11
  and:
    f(2) = 11

Since:
  lim(x→2) f(x) = f(2)

the function is continuous at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONTINUITY USING ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another way to check continuity is by using left-hand and right-hand limits.

For a function to be continuous at x = a:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

This is especially useful for piecewise functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE USING A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = { x + 1, x < 2; x² - 1, x ≥ 2 }

Determine whether the function is continuous at x = 2.

Step 1: Find the Left-Hand Limit
  For x < 2, we use f(x) = x + 1.

  Therefore:
    lim(x→2⁻) f(x) = lim(x→2⁻) (x + 1)
    = 2 + 1
    = 3

Step 2: Find the Right-Hand Limit
  For x ≥ 2, we use f(x) = x² - 1.

  Therefore:
    lim(x→2⁺) f(x) = lim(x→2⁺) (x² - 1)
    = 2² - 1
    = 4 - 1
    = 3

Step 3: Find the Function Value
  Since x = 2 belongs to the second rule:
    f(2) = 2² - 1 = 3

  Therefore:
    f(2) = 3

Step 4: Compare All Values
  We found:
    lim(x→2⁻) f(x) = 3
    lim(x→2⁺) f(x) = 3
    f(2) = 3

  Therefore:
    lim(x→2⁻) f(x) = lim(x→2⁺) f(x) = f(2)

The function is:
  Continuous at x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPHICAL MEANING OF CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous at a point if there is no interruption in the graph at that point.

A continuous graph has no:
  • Hole
  • Jump
  • Break
  • Vertical asymptote

Near the point being studied, the graph flows smoothly through the point.

For example, the graph of f(x) = x² is continuous everywhere.

You can move along the graph without encountering any gaps or jumps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function is not continuous at a particular point, it is called discontinuous at that point.

A discontinuity occurs when at least one of the three conditions for continuity fails.

There are several common types of discontinuities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. REMOVABLE DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A removable discontinuity usually appears as a hole in the graph.

Consider:
  f(x) = (x² - 4)/(x - 2)

Factor the numerator:
  x² - 4 = (x - 2)(x + 2)

Therefore:
  f(x) = ((x - 2)(x + 2))/(x - 2)

For x ≠ 2, we can simplify:
  f(x) = x + 2

Now find the limit:
  lim(x→2) f(x) = lim(x→2) (x + 2) = 4

However, the original function is undefined at x = 2 because the denominator becomes zero.

Therefore:
  f(2) does not exist

The limit exists, but the function value does not.

Thus, the function is discontinuous at x = 2.

This is called a removable discontinuity because we could make the function continuous by defining:
  f(2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. JUMP DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A jump discontinuity occurs when the left-hand and right-hand limits are different.

Consider:
  f(x) = { 1, x < 0; 3, x ≥ 0 }

At x = 0, the left-hand limit is:
  lim(x→0⁻) f(x) = 1

The right-hand limit is:
  lim(x→0⁺) f(x) = 3

Since:
  1 ≠ 3

the two-sided limit does not exist.

Therefore:
  The function is discontinuous at x = 0

The graph appears to "jump" from one value to another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INFINITE DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An infinite discontinuity occurs when a function approaches positive or negative infinity near a particular value.

Consider:
  f(x) = 1/(x - 2)

At x = 2, the denominator becomes zero.

Approaching from the left:
  lim(x→2⁻) 1/(x - 2) = -∞

Approaching from the right:
  lim(x→2⁺) 1/(x - 2) = ∞

The graph has a vertical asymptote at x = 2.

Therefore, the function is discontinuous at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONTINUOUS FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some types of functions are naturally continuous throughout most or all of their domains.

Polynomial Functions:
  Examples:
    f(x) = x² + 3x + 1
    f(x) = x³ - 4x + 7
  Polynomial functions are continuous for all real numbers.

Rational Functions:
  Example:
    f(x) = (x + 1)/(x - 2)
  Rational functions are continuous everywhere in their domain.
  However, they are not continuous where the denominator equals zero.

Square Root Functions:
  Example:
    f(x) = √x
  The function is continuous within its domain: x ≥ 0

Exponential Functions:
  Example:
    f(x) = 2ˣ
  Exponential functions are continuous for all real numbers.

Trigonometric Functions:
  Functions such as sin(x) and cos(x) are continuous for all real numbers.
  However, some trigonometric functions have restrictions.
  For example, tan(x) is discontinuous when x = π/2 + nπ, where n is an integer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CONTINUITY AT THE ENDPOINT OF A DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At an endpoint, we may only be able to approach from one side.

For example:
  f(x) = √x

The domain is:
  x ≥ 0

At x = 0, there are no values in the real-number domain to the left.

Therefore, we use the right-hand limit:
  lim(x→0⁺) √x = 0

Since:
  f(0) = 0

the function is continuous at the endpoint x = 0 relative to its domain.

This means that at endpoints, one-sided continuity is used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY CONTINUITY IS IMPORTANT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity is important because many major theorems in Calculus require functions to be continuous.

Continuous functions are easier to analyze because their behavior does not suddenly break or jump.

Continuity is important in:
  • Finding limits
  • Differentiation
  • Integration
  • Optimization
  • Graph analysis
  • Mathematical modeling

For example, if a function is differentiable at a point, then it must be continuous at that point.

However:
  Continuous does not always mean differentiable.

For example:
  f(x) = |x|

is continuous at x = 0, but it is not differentiable there because the graph has a sharp corner.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STEPS FOR CHECKING CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To determine whether a function is continuous at x = a, follow these steps:

Step 1: Find f(a)
  Check whether the function is defined.

Step 2: Find the Left-Hand Limit
  lim(x→a⁻) f(x)

Step 3: Find the Right-Hand Limit
  lim(x→a⁺) f(x)

Step 4: Compare the Limits
  Check whether:
    lim(x→a⁻) f(x) = lim(x→a⁺) f(x)
  If they are equal, the two-sided limit exists.

Step 5: Compare with the Function Value
  Check whether:
    lim(x→a) f(x) = f(a)
  If yes, the function is continuous at x = a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Condition                    Requirement
  ─────────────────────────────────────────────────────────────────────────────
  f(a) exists                  Function is defined at a
  lim(x→a) f(x) exists         Left and right limits are equal
  lim(x→a) f(x) = f(a)         Limit equals the function value

  Type of Discontinuity        Cause
  ─────────────────────────────────────────────────────────────────────────────
  Removable                    Limit exists but f(a) undefined or different
  Jump                         Left and right limits differ
  Infinite                     Function approaches ±∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) is continuous at x = a if the following three conditions are satisfied:

  1. f(a) exists
  2. lim(x→a) f(x) exists
  3. lim(x→a) f(x) = f(a)

Or, using one-sided limits:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

The most important idea to remember is:

  A function is continuous at a point when there is no break, hole, jump, 
  or interruption in its behavior at that point.

Continuity is one of the fundamental concepts of Calculus because it connects directly to limits, derivatives, integrals, and the behavior of functions.
  `,
  examples: [
    "f(x) = x² + 3x + 1 is continuous at x = 2 (limit = f(2) = 11)",
    "Piecewise: f(x) = {x+1, x<2; x²-1, x≥2} is continuous at x = 2",
    "Removable discontinuity: f(x) = (x²-4)/(x-2) has a hole at x = 2",
    "Jump discontinuity: f(x) = {1, x<0; 3, x≥0} jumps at x = 0",
    "Infinite discontinuity: f(x) = 1/(x-2) has vertical asymptote at x = 2",
    "f(x) = √x is continuous on its domain [0, ∞)",
    "f(x) = |x| is continuous but not differentiable at x = 0",
  ],
};

export default topic;