// filename: continuity-of-a-function-at-a-number.ts

const topic = {
  id: "continuity-of-a-function-at-a-number",
  title: "Continuity of a Function at a Number",
  summary:
    "A function is continuous at a number if its graph has no break, hole, or jump at that point, requiring f(a) exists, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a).",
  details: `
A function is continuous at a number if its graph has no break, hole, or jump at that particular point. Informally, a continuous function can be drawn around that point without lifting your pencil. Continuity is closely related to limits. For a function to be continuous at a number, the function must have a value there, the limit must exist, and the limit must equal the actual value of the function. The most important condition is lim(x→a) f(x) = f(a). This means that as x approaches a, the value of the function must approach the same value as the actual function value at a. Understanding continuity is essential because it underpins many fundamental theorems in calculus, including the Intermediate Value Theorem, the Extreme Value Theorem, and the differentiability of functions.

The most important condition is:
  lim(x→a) f(x) = f(a)

This means:
  As x approaches a, the value of the function must approach the same value 
  as the actual function value at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF CONTINUITY AT A NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f is continuous at x = a if all three of the following conditions are satisfied. First, the function must be defined at a, meaning f(a) exists and is a real number. Second, the limit of f(x) as x approaches a must exist; this requires that the left-hand and right-hand limits are equal. Third, the value of the limit must equal the actual value of the function at a. If any of these three conditions fails, the function is discontinuous at x = a. This definition provides a precise mathematical way to describe the intuitive idea of a graph having no breaks or jumps. It is the foundation for many calculus concepts, as continuity ensures that small changes in the input produce small changes in the output, which is essential for differentiability and integrability.

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

To see how the three conditions work, consider a polynomial function. Polynomials are known to be continuous everywhere, but we can verify this at a specific point using the definition. Let f(x) = x² + 3x + 1. We want to check continuity at x = 2. First, f(2) = 4 + 6 + 1 = 11, so the function is defined at 2. Second, the limit as x approaches 2 is found by direct substitution: lim(x→2) (x² + 3x + 1) = 11. Third, the limit equals the function value: 11 = 11. Since all three conditions hold, the function is continuous at x = 2. This example illustrates the general rule that all polynomial functions are continuous for all real numbers, and the definition confirms this at any chosen point.

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

Another way to check continuity is by using left-hand and right-hand limits. For a function to be continuous at x = a, the limit from the left must equal the limit from the right, and both must equal the function value at a. This is written as lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a). This approach is especially useful for piecewise functions, where the function is defined by different rules on different intervals. At the boundary between intervals, we must check that the two sides meet smoothly that is, that the limits from both directions agree and equal the actual value of the function at that boundary. If they agree, the function is continuous; if they differ, there is a jump discontinuity. Checking one-sided limits is also helpful when dealing with functions that have domain restrictions, such as square roots or rational functions.

For a function to be continuous at x = a:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

This is especially useful for piecewise functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE USING A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Piecewise functions are defined by different expressions over different intervals, so continuity at a boundary point must be checked carefully. Consider f(x) = { x + 1, if x < 2; x² - 1, if x ≥ 2 }. To check continuity at x = 2, we first find the left-hand limit using the rule for x < 2: lim(x→2⁻) (x + 1) = 3. Then we find the right-hand limit using the rule for x ≥ 2: lim(x→2⁺) (x² - 1) = 3. Since the left and right limits are equal, the two-sided limit exists and is 3. Next, we evaluate the function at x = 2: since 2 belongs to the second rule, f(2) = 2² - 1 = 3. Because the limit (3) equals the function value (3), the function is continuous at x = 2. This example shows how piecewise functions can be continuous if the pieces connect smoothly at the boundary.

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

Graphically, a function is continuous at a point if there is no interruption in the graph at that point. This means the graph has no holes, jumps, breaks, or vertical asymptotes at that location. As you trace the graph with your pencil, you do not need to lift the pencil to pass through the point. For example, the graph of f(x) = x² is continuous everywhere because it is a smooth, unbroken curve. In contrast, a function with a hole, such as f(x) = (x² - 4)/(x - 2), has a removable discontinuity at x = 2 because the graph is missing that point. A jump discontinuity, like a step function, shows an abrupt change in value, and a vertical asymptote, like f(x) = 1/(x - 2), shows the graph shooting off to infinity. Understanding these graphical interpretations helps us quickly identify continuity or discontinuity by inspecting a graph.

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

If a function is not continuous at a particular point, it is called discontinuous at that point. A discontinuity occurs when at least one of the three conditions for continuity fails. Discontinuities can be classified into different types based on how the function behaves near the point in question. Understanding the type of discontinuity is useful because it tells us whether the discontinuity can be "repaired" (removable) or whether it is inherent to the function's structure (non-removable). Discontinuities often arise from division by zero, piecewise definitions with mismatched values, or vertical asymptotes. In calculus, discontinuities must be handled carefully, especially when evaluating limits, derivatives, or integrals, as they can affect the validity of certain theorems.

A discontinuity occurs when at least one of the three conditions for continuity fails.

There are several common types of discontinuities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. REMOVABLE DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A removable discontinuity typically appears as a hole in the graph. It occurs when the limit exists at a point, but the function is either undefined or has a different value at that point. Consider f(x) = (x² - 4)/(x - 2). Factoring gives (x - 2)(x + 2)/(x - 2). For x ≠ 2, this simplifies to x + 2, and the limit as x approaches 2 is 4. However, the original function is undefined at x = 2 because the denominator is zero. Thus, the limit exists (4), but f(2) does not exist. This is a removable discontinuity because we could redefine f(2) = 4 to make the function continuous. Removable discontinuities are called "removable" because they can be eliminated by defining or redefining the function value at that point, effectively filling the hole.

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

A jump discontinuity occurs when the left-hand and right-hand limits exist but are not equal. This creates a sudden "jump" in the graph from one value to another. For example, consider the piecewise function f(x) = { 1, if x < 0; 3, if x ≥ 0 }. At x = 0, the left-hand limit is 1, and the right-hand limit is 3. Since 1 ≠ 3, the two-sided limit does not exist, and the function is discontinuous at x = 0. Jump discontinuities are common in piecewise functions where the pieces do not meet at the boundary. They are non-removable because no single value can make both one-sided limits equal simultaneously. In real-world applications, jump discontinuities can represent sudden changes, such as a tax rate change or a shipping cost threshold.

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

An infinite discontinuity occurs when a function approaches positive or negative infinity near a particular value, typically due to a vertical asymptote. Consider f(x) = 1/(x - 2). As x approaches 2 from the left, the denominator is negative and very small, so the function approaches -∞. As x approaches 2 from the right, the denominator is positive and very small, so the function approaches +∞. Since the function grows without bound, the limit does not exist as a finite number, and the function is discontinuous at x = 2. The graph has a vertical asymptote at x = 2, where it shoots off to infinity. Infinite discontinuities are non-removable and often occur in rational functions where the denominator is zero. They indicate a fundamental break in the function's behavior and require careful handling in calculus, especially when evaluating improper integrals or limits.

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

Some types of functions are naturally continuous throughout most or all of their domains. Polynomial functions, such as f(x) = x² + 3x + 1, are continuous for all real numbers. Rational functions, like f(x) = (x + 1)/(x - 2), are continuous everywhere in their domain, but they are discontinuous at values that make the denominator zero. Square root functions, such as f(x) = √x, are continuous on their domain [0, ∞). Exponential functions, like f(x) = 2ˣ, are continuous for all real numbers. Trigonometric functions such as sin(x) and cos(x) are continuous for all real numbers, but tan(x) is discontinuous at x = π/2 + nπ (where n is an integer) because it has vertical asymptotes there. Knowing which functions are continuous helps us apply limit properties and calculus theorems with confidence.

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

At an endpoint of a domain, we may only be able to approach the point from one side. For example, consider f(x) = √x, whose domain is x ≥ 0. At x = 0, there are no real values to the left of 0, so we cannot take a left-hand limit. Instead, we only consider the right-hand limit: lim(x→0⁺) √x = 0. Since f(0) = 0, the function is continuous at x = 0 relative to its domain. This is called one-sided continuity at an endpoint. It is important because functions defined on closed intervals often have endpoints that are only one-sidedly continuous. In calculus, this distinction is important when applying the Extreme Value Theorem or when defining the definite integral over a closed interval.

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

Continuity is important because many major theorems in Calculus require functions to be continuous. Continuous functions are easier to analyze because their behavior does not suddenly break or jump. For example, the Intermediate Value Theorem states that if a continuous function on an interval takes two values, it must take every value between them. The Extreme Value Theorem guarantees that a continuous function on a closed interval attains a maximum and a minimum. Moreover, differentiability implies continuity: if a function is differentiable at a point, it must be continuous there. However, the converse is not true as in the case of f(x) = |x|, which is continuous at 0 but not differentiable there. Continuity is also essential for integration, as definite integrals are defined for continuous functions. Thus, understanding continuity is foundational for almost all calculus topics.

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

To determine whether a function is continuous at x = a, follow these steps systematically. First, find f(a) to ensure the function is defined at that point. Second, compute the left-hand limit as x approaches a from values less than a. Third, compute the right-hand limit as x approaches a from values greater than a. Fourth, compare the left and right limits; if they are equal, the two-sided limit exists. Finally, compare the two-sided limit with f(a). If they are equal, the function is continuous at x = a. If any step fails, the function is discontinuous. This procedure works for all types of functions, including polynomial, rational, piecewise, and trigonometric functions. Practicing these steps builds a solid understanding of continuity and prepares you for more advanced calculus topics.

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

A function f(x) is continuous at x = a if the following three conditions are satisfied: f(a) exists, the limit as x approaches a exists, and the limit equals the function value. Using one-sided limits, this can be expressed as lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a). Continuity means that the graph has no breaks, holes, jumps, or infinite interruptions at that point. There are three main types of discontinuities: removable (hole), jump (gap), and infinite (vertical asymptote). Continuity is a fundamental concept in Calculus because it connects directly to limits, derivatives, integrals, and the behavior of functions. It allows us to apply important theorems and guarantees that functions behave predictably within their domain. The most important idea to remember is that a function is continuous at a point when its graph flows smoothly through that point without interruption.

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