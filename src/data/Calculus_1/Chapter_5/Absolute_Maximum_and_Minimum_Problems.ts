// filename: absolute-maximum-and-minimum-problems.ts

const topic = {
  id: "absolute-maximum-and-minimum-problems",
  title: "Absolute Maximum and Minimum Problems",
  summary:
    "Optimization problems where we determine the largest (absolute maximum) or smallest (absolute minimum) value a function attains over a specified domain or closed interval.",
  details: `
Absolute maximum and minimum problems are optimization problems where we want to determine the largest or smallest value that a function actually attains over a specified domain or interval.

These are also called absolute extrema:
  • Absolute maximum: the greatest output value of the function.
  • Absolute minimum: the smallest output value of the function.

This topic builds directly on critical points, endpoints, the Extreme Value Theorem, and derivative tests.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) has an absolute maximum at x = c on a domain D if:
  f(c) ≥ f(x)

for every x ∈ D.

In simple terms:
  The absolute maximum is the highest point reached by the function on the 
  specified domain.

Example:
  Consider f(x) = x² on [-2, 3].

  Some important values are:
    f(-2) = 4
    f(0) = 0
    f(3) = 9

  The largest value is 9, so the function has an absolute maximum of 9 at x = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ABSOLUTE MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) has an absolute minimum at x = c on a domain D if:
  f(c) ≤ f(x)

for every x ∈ D.

In simple terms:
  The absolute minimum is the lowest point reached by the function on the 
  specified domain.

For the same function, f(x) = x² on [-2, 3], we have f(0) = 0.

Since x² ≥ 0 for every real x, 0 is the absolute minimum.

Therefore:
  Absolute minimum: 0 at x = 0
  Absolute maximum: 9 at x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ABSOLUTE EXTREMA VS. RELATIVE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Absolute maximum:
  The function's highest value over the entire domain or specified interval.

Relative maximum:
  A point that is higher than the points immediately surrounding it, but it 
  might not be the highest point overall.

For example, imagine a graph with two peaks.

The smaller peak could be a relative maximum, while the taller peak is the absolute maximum.

The same idea applies to minimums.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY ENDPOINTS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important ideas in absolute maximum/minimum problems is:

  Always check the endpoints when working on a closed interval.

Suppose f(x) = x³ - 3x on [-2, 2].

First find the derivative:
  f'(x) = 3x² - 3

Set it equal to zero:
  3x² - 3 = 0
  3(x² - 1) = 0
  x² = 1

so:
  x = ±1

These are critical points.

But we cannot stop there.

The endpoints are:
  x = -2, x = 2

We therefore evaluate:

  f(-2) = (-2)³ - 3(-2) = -8 + 6 = -2
  f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2
  f(1) = 1 - 3 = -2
  f(2) = 8 - 6 = 2

Now compare:

  x       f(x)
  ───────────────
  -2      -2
  -1       2
   1      -2
   2       2

Therefore:
  Absolute maximum = 2 at x = -1, 2
and:
  Absolute minimum = -2 at x = -2, 1

Notice that both an interior critical point and an endpoint can produce an absolute extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem (EVT) gives an important guarantee.

If f is:
  • continuous, and
  • defined on a closed and bounded interval [a, b],

then f must have both:
  • an absolute maximum, and
  • an absolute minimum.

In mathematical form:
  f continuous on [a, b] ⇒ f has an absolute max and min on [a, b]

Example:
  Consider f(x) = x² + 2x + 1 on [-3, 2].

  This function is a polynomial, so it is continuous everywhere.

  The interval [-3, 2] is closed and bounded.

  Therefore, by the Extreme Value Theorem, we know in advance that an 
  absolute maximum and minimum exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE CLOSED-INTERVAL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For many calculus problems, you can use a systematic procedure.

Step 1: Identify the interval
  For example: [a, b]

Step 2: Find the derivative
  Calculate f'(x).

Step 3: Find critical numbers
  Solve f'(x) = 0 and identify points where f'(x) does not exist.

Step 4: Keep only critical numbers inside the interval
  If the interval is [-2, 4], a critical number such as x = 5 is not relevant.

Step 5: Evaluate the function at all candidates
  Evaluate f(a), f(b), and f(c) for every critical number c in the interval.

Step 6: Compare the values
  The largest value is the absolute maximum.
  The smallest value is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum and minimum of:
  f(x) = x³ - 6x² + 9x + 2

on:
  [0, 4]

Step 1: Find the derivative
  f'(x) = 3x² - 12x + 9

Factor:
  f'(x) = 3(x² - 4x + 3)
  f'(x) = 3(x - 1)(x - 3)

Step 2: Find critical numbers
  Set f'(x) = 0.

  Therefore:
    3(x - 1)(x - 3) = 0

  So:
    x = 1 and x = 3

  Both are inside [0, 4].

Step 3: Check the endpoints
  The endpoints are:
    x = 0 and x = 4

Therefore, our candidates are:
  x = 0, 1, 3, 4

Step 4: Evaluate the function

At x = 0:
  f(0) = 2

At x = 1:
  f(1) = 1 - 6 + 9 + 2 = 6

At x = 3:
  f(3) = 27 - 54 + 27 + 2 = 2

At x = 4:
  f(4) = 64 - 96 + 36 + 2 = 6

Create a comparison table:

  Candidate    Function value
  ───────────────────────────
  0            2
  1            6
  3            2
  4            6

The largest value is 6.
The smallest value is 2.

Therefore:
  Absolute maximum = 6 occurring at x = 1 and x = 4
and:
  Absolute minimum = 2 occurring at x = 0 and x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT IF THERE ARE MULTIPLE ABSOLUTE EXTREMA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have the same absolute maximum value at multiple points.

For example:
  f(x) = x² on [-2, 2]

We have:
  f(-2) = 4 and f(2) = 4

Thus the absolute maximum is:
  4 at two different points: x = -2, 2

Similarly, an absolute minimum can occur at multiple points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHAT IF THERE IS NO ABSOLUTE MAXIMUM OR MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every function has absolute extrema.

For example:
  f(x) = x on (0, 1)

The function gets arbitrarily close to 1, but 1 is not included in the domain.

Likewise, it gets arbitrarily close to 0, but 0 is also not included.

Therefore:
  No absolute maximum
and:
  No absolute minimum

This is why the condition that the interval be closed is important for the Extreme Value Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ABSOLUTE EXTREMA AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common misconception is:
  "The absolute maximum and minimum must occur where f'(x) = 0."

That is not always true.

An absolute extremum can occur at:

1. A critical point: f'(c) = 0 or f'(c) does not exist.
2. An endpoint: x = a or x = b.

Therefore, for a closed interval:
  Absolute extrema candidates = critical points + endpoints

This is one of the most important rules to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ABSOLUTE MAXIMUM/MINIMUM VS. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These methods have different purposes.

Absolute extrema method:
  Used to determine the highest and lowest values over an entire interval.
  You evaluate f(critical points) and f(endpoints).

First Derivative Test:
  Used primarily to determine whether a critical point is a:
    • relative maximum,
    • relative minimum,
    • or neither.

For example:
  f'(x) > 0 means the function is increasing.
  f'(x) < 0 means the function is decreasing.

If the derivative changes + → -, then there is a relative maximum.
If it changes - → +, then there is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A VERY IMPORTANT SHORTCUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a continuous function on a closed interval [a, b], use this checklist:

  Find f'(x)
    ↓
  Find critical points
    ↓
  Keep those inside [a, b]
    ↓
  Evaluate critical points
    ↓
  Evaluate endpoints a, b
    ↓
  Compare all values
    ↓
  Largest = Absolute Maximum
  Smallest = Absolute Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ABSOLUTE MAXIMUM AND MINIMUM AS OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These problems are extremely important because they represent real-world optimization.

For example:
  • Business: Find the production level that gives the greatest profit.
  • Engineering: Find the dimensions that minimize material usage.
  • Physics: Find the maximum height of an object.
  • Manufacturing: Find the production quantity that minimizes cost.
  • Geometry: Find the largest area possible with a fixed amount of material.

So absolute maximum/minimum problems are not simply about finding the highest and lowest points on a graph—they form the mathematical foundation of optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Checking only f'(x) = 0
  Wrong: f'(x) = 0 and stopping.
  You must also check endpoints when the domain is a closed interval.

Mistake 2: Forgetting points where the derivative doesn't exist
  A critical number can occur when f'(x) = 0 or f'(x) does not exist.
  For example, f(x) = |x| has a critical point at x = 0 because the derivative does not exist there.

Mistake 3: Checking critical points outside the interval
  If the interval is [0, 5], and you find x = 7, you don't evaluate it because 7 ∉ [0, 5].

Mistake 4: Confusing relative and absolute extrema
  A relative maximum does not necessarily represent the highest value of the entire function.
  Always compare all candidates when looking for absolute extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum and minimum of:
  f(x) = x² - 4x + 3

on:
  [0, 5]

Derivative:
  f'(x) = 2x - 4

Set equal to zero:
  2x - 4 = 0
  x = 2

Candidates:
  x = 0, 2, 5

Evaluate:
  f(0) = 3
  f(2) = 4 - 8 + 3 = -1
  f(5) = 25 - 20 + 3 = 8

Therefore:
  Absolute minimum = -1 at x = 2
and:
  Absolute maximum = 8 at x = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY IDEA TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  "Find the absolute maximum and minimum of f(x) on [a, b]"

think:
  Critical Points + Endpoints

Then:
  Evaluate → Compare → Largest/Smallest

The entire method can be summarized as:

  Absolute Max/Min = Evaluate f(x) at all critical points and endpoints

  Largest output → Absolute Maximum
  Smallest output → Absolute Minimum
  `,
  examples: [
    "f(x) = x² on [-2,3] → max 9 at x=3, min 0 at x=0",
    "f(x) = x³ - 3x on [-2,2] → max 2 at x=-1,2; min -2 at x=-2,1",
    "f(x) = x³ - 6x² + 9x + 2 on [0,4] → max 6 at x=1,4; min 2 at x=0,3",
    "f(x) = x² on [-2,2] → max 4 at x=-2,2; min 0 at x=0",
    "f(x) = x on (0,1) → no absolute max or min (open interval)",
    "Absolute extrema candidates = critical points + endpoints",
    "f(x) = x² - 4x + 3 on [0,5] → max 8 at x=5, min -1 at x=2",
  ],
};

export default topic;