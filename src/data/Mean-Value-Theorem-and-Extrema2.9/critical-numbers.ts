const topic = {
  id: "critical-numbers",
  title: "Critical Numbers",
  summary:
    "Definition of critical numbers, finding critical numbers, derivative equals zero, derivative does not exist, and applications.",
  details: `
Critical Numbers are special values in the domain of a function where the function's derivative is either zero or does not exist.

They are extremely important in calculus because they help us find where a function may have a:
  • Local maximum
  • Local minimum
  • Turning point
  • Potential absolute maximum or minimum

The main definition is: c is a critical number if f'(c) = 0 or f'(c) does not exist, provided that c is in the domain of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CRITICAL NUMBER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = f(x)

A number c is a critical number if:
  • f'(c) = 0
or:
  • f'(c) does not exist
and:
  • c ∈ Domain of f

This last condition is important.

If f(c) doesn't exist, then c is not a critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY ARE CRITICAL NUMBERS IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical numbers help us locate places where the function's behavior can change.

Example: Consider a function that rises and then falls: Increasing → Maximum → Decreasing

At the maximum, the tangent line is often horizontal: f'(c) = 0

Similarly: Decreasing → Minimum → Increasing → At the minimum: f'(c) = 0

Therefore, critical numbers give us important candidates for extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE TWO WAYS TO FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two possibilities.

Case 1: Derivative equals zero → f'(c) = 0

Case 2: Derivative does not exist → f'(c) DNE

But the function itself must exist at c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: DERIVATIVE EQUALS ZERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the critical numbers of: f(x) = x² - 4x + 3

Step 1: Find the derivative: f'(x) = 2x - 4

Step 2: Set the derivative equal to zero: 2x - 4 = 0 → x = 2

Step 3: Check the domain: Since this is a polynomial, its domain is all real numbers.

Therefore: x = 2 is a critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GEOMETRIC MEANING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x² - 4x + 3, the graph is a parabola opening upward.

At x = 2, the graph reaches its minimum.

The tangent line is horizontal: f'(2) = 0

So x = 2 is both a critical number and the location of a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CRITICAL NUMBER DOES NOT ALWAYS MEAN MAXIMUM OR MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is extremely important.

A critical number is only a candidate for an extremum.

Example: f(x) = x³

The derivative is: f'(x) = 3x²

Set it equal to zero: 3x² = 0 → x = 0

So x = 0 is a critical number.

However, x = 0 is not a local maximum or minimum. The function continues increasing through x = 0.

This is why we must analyze critical numbers further.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CRITICAL NUMBER VS. CRITICAL POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These terms are related but different.

Critical Number: The x-value → x = c

Critical Point: The corresponding point on the graph → (c, f(c))

Example: If f(x) = x² - 4x + 3 has critical number x = 2, then f(2) = -1.

So the critical point is: (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CRITICAL NUMBERS WHERE THE DERIVATIVE DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number can also occur when f'(c) does not exist.

This commonly happens when the graph has:
  • A sharp corner
  • A cusp
  • A vertical tangent

provided that the function itself is defined there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

The graph looks like a V.

For x > 0: f'(x) = 1

For x < 0: f'(x) = -1

At x = 0, the left-hand derivative is -1 while the right-hand derivative is 1.

Since they aren't equal, f'(0) does not exist.

But f(0) = 0 does exist.

Therefore: x = 0 is a critical number. It is also a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY MUST THE FUNCTION BE DEFINED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/x

The derivative is: f'(x) = -1/x²

The derivative does not exist at x = 0.

But the original function also does not exist at x = 0.

Therefore: x = 0 is NOT a critical number because 0 is not in the domain of f.

This is an important rule: A critical number must be in the domain of the original function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING CRITICAL NUMBERS: GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given f(x), follow these steps:

Step 1: Find the domain
  Determine where f(x) exists.

Step 2: Find the derivative
  Calculate: f'(x)

Step 3: Solve
  Find values where f'(x) = 0

Step 4: Find where the derivative does not exist
  Determine values where f'(x) is undefined.

Step 5: Check the original domain
  Discard any values that are not in the domain of f.

The remaining values are the critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the critical numbers of: f(x) = x³ - 6x² + 9x + 2

Step 1: Differentiate: f'(x) = 3x² - 12x + 9

Factor: f'(x) = 3(x² - 4x + 3) = 3(x - 1)(x - 3)

Step 2: Set equal to zero: 3(x - 1)(x - 3) = 0 → x = 1 or x = 3

Since the function is a polynomial, the derivative exists everywhere.

Thus: x = 1, 3 are the critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x³ - 6x² + 9x + 2, we found x = 1, x = 3.

Now calculate the corresponding y-values.

At x = 1: f(1) = 1 - 6 + 9 + 2 = 6 → (1, 6)

At x = 3: f(3) = 27 - 54 + 27 + 2 = 2 → (3, 2)

Therefore: (1, 6) and (3, 2) are the critical points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CRITICAL NUMBERS AND INCREASING/DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical numbers are particularly useful when determining where a function is increasing or decreasing.

Recall: f'(x) > 0 means the function is increasing. And f'(x) < 0 means the function is decreasing.

Critical numbers divide the number line into intervals.

Example: f'(x) = 3(x - 1)(x - 3)

Critical numbers: 1, 3

These divide the number line into: (-∞, 1), (1, 3), (3, ∞)

We can test the sign of f'(x) in each interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test helps determine whether a critical number represents a local maximum or minimum.

Local Maximum: If f'(x) changes from + → - then the function changes from increasing to decreasing → Local Maximum.

Local Minimum: If f'(x) changes from - → + then the function changes from decreasing to increasing → Local Minimum.

Neither: If the sign does not change (+ → + or - → -), then there is no local extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE OF THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 3x

Derivative: f'(x) = 3x² - 3 = 3(x - 1)(x + 1)

Critical numbers: x = -1, 1

Now examine the signs.

Interval: x < -1
Sign of f'(x): +
Behavior: Increasing

Interval: -1 < x < 1
Sign of f'(x): -
Behavior: Decreasing

Interval: x > 1
Sign of f'(x): +
Behavior: Increasing

At x = -1: + → - → x = -1 is a local maximum.

At x = 1: - → + → x = 1 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. CRITICAL NUMBERS AND ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical numbers are also important when finding absolute maximum and minimum values on a closed interval.

Suppose f(x) is continuous on [a, b].

To find absolute extrema:
  1. Find critical numbers inside (a, b).
  2. Evaluate f at the critical numbers.
  3. Evaluate f(a).
  4. Evaluate f(b).
  5. Compare all values.

This is called the Closed Interval Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: ABSOLUTE MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute extrema of f(x) = x² - 4x + 3 on [0, 5].

Step 1: Find critical numbers: f'(x) = 2x - 4 = 0 → x = 2

Step 2: Evaluate endpoints and critical number
  x = 0: f(0) = 3
  x = 2: f(2) = -1
  x = 5: f(5) = 25 - 20 + 3 = 8

Compare: 3, -1, 8

Therefore: Absolute Minimum = -1 at x = 2, and Absolute Maximum = 8 at x = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CRITICAL NUMBERS AND THE EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem says: If f is continuous on a closed interval [a, b], then f must have both an absolute maximum and an absolute minimum somewhere on that interval.

Those extrema can occur at:
  • Critical numbers
  • Endpoints

That's why critical numbers are so important in optimization problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. CRITICAL NUMBERS AND OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many calculus optimization problems follow this pattern:

  Problem → Function → f'(x) → Critical Numbers → Maximum/Minimum

Examples:
  • Maximum area
  • Minimum cost
  • Maximum profit
  • Minimum distance
  • Maximum volume
  • Minimum material usage

Critical numbers often identify the values where the desired quantity reaches an optimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. CRITICAL NUMBER VS. INFLECTION POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are sometimes confused.

A critical number occurs where: f'(x) = 0 or f'(x) does not exist.

An inflection point is where the function changes concavity.

Usually, inflection points involve: f''(x).

A point can sometimes be both.

Example: f(x) = x³

We have: f'(x) = 3x² → f'(0) = 0 → x = 0 is a critical number.

Also: f''(x) = 6x, which changes sign at 0 → x = 0 is also an inflection point.

But it is not a maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Only checking f'(x) = 0
  You must also check where f'(x) does not exist.

Mistake 2: Including values outside the domain
  If f(c) doesn't exist, c is not a critical number.

Mistake 3: Assuming every critical number is an extremum
  Not every critical number is a maximum or minimum. For f(x) = x³, x = 0 is critical but neither a maximum nor minimum.

Mistake 4: Confusing critical number with critical point
  Critical number: x = c
  Critical point: (c, f(c))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT FORMULA SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Critical Number Definition
Formula/Condition: f'(c) = 0 or f'(c) does not exist with c ∈ Domain of f

Concept: Local Maximum
Formula/Condition: f': + → -

Concept: Local Minimum
Formula/Condition: f': - → +

Concept: Increasing
Formula/Condition: f'(x) > 0

Concept: Decreasing
Formula/Condition: f'(x) < 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the critical numbers of: f(x) = x⁴ - 4x²

Derivative: f'(x) = 4x³ - 8x = 4x(x² - 2)

Set equal to zero: 4x(x² - 2) = 0

Therefore: x = 0 or x² = 2 → x = ±√2

So the critical numbers are: -√2, 0, √2

Because this is a polynomial, f'(x) exists everywhere, so there are no additional critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical numbers connect several major topics in differential calculus:

  Derivative → Critical Numbers → Increasing/Decreasing → Local Extrema → Optimization

The derivative tells us where the function's behavior may change.

Critical numbers identify those important x-values.

Then tests such as the First Derivative Test or Second Derivative Test help determine what actually happens there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Critical Numbers, remember:

  • A critical number is an x-value in the domain of f where: f'(x) = 0 or f'(x) does not exist.
  • But remember: Critical Number ≠ Automatically Maximum/Minimum.
  • It is a candidate for an extremum.

The usual workflow is:

  f(x) → f'(x) → f'(x) = 0 or DNE → Critical Numbers → First/Second Derivative Test → Maximum/Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical Numbers are fundamental for finding extrema and analyzing the behavior of functions.

Key concepts covered:

  ✓ What Is a Critical Number?
  ✓ Why Critical Numbers Are Important
  ✓ Derivative Equals Zero
  ✓ Derivative Does Not Exist
  ✓ Geometric Meaning
  ✓ Critical Number vs. Critical Point
  ✓ Absolute Value Example
  ✓ Domain Requirement
  ✓ Finding Critical Numbers Procedure
  ✓ Polynomial Examples
  ✓ First Derivative Test
  ✓ Local Maximum and Minimum
  ✓ Absolute Extrema
  ✓ Extreme Value Theorem
  ✓ Optimization
  ✓ Inflection Points
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = x² - 4x + 3 → f'(x) = 2x - 4 → x = 2 is a critical number",
    "f(x) = x³ → f'(x) = 3x² → x = 0 is a critical number (but not max/min)",
    "f(x) = |x| → f'(0) does not exist → x = 0 is a critical number",
    "f(x) = x³ - 6x² + 9x + 2 → critical numbers at x = 1, 3",
    "f(x) = x³ - 3x → x = -1 is local max, x = 1 is local min",
    "f(x) = x² - 4x + 3 on [0,5] → absolute min at x=2 (-1), max at x=5 (8)",
    "Critical number definition: f'(c) = 0 or DNE, with c in domain",
    "First Derivative Test: + → - is max, - → + is min",
    "f'(x) > 0 → increasing, f'(x) < 0 → decreasing",
    "Critical number vs critical point: x=c vs (c,f(c))",
    "f(x) = x⁴ - 4x² → critical numbers: -√2, 0, √2",
    "Derivative → Critical Numbers → Increasing/Decreasing → Local Extrema → Optimization",
  ],
};

export default topic;