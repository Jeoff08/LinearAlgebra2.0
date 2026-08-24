// filename: continuity-on-an-interval.ts

const topic = {
  id: "continuity-on-an-interval",
  title: "Continuity on an Interval",
  summary:
    "A function is continuous on an interval if it is continuous at every point in that interval, with one-sided limits used at endpoints for closed intervals.",
  details: `
Continuity on an interval extends the idea of continuity at a single point to an entire interval of the domain. In simple terms, a function is continuous on an interval if its graph can be traced across that interval without lifting your pencil from the paper.

This concept is important because many calculus theorems—especially the Extreme Value Theorem and Intermediate Value Theorem—require a function to be continuous on an interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONTINUITY AT A POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before discussing continuity on an interval, recall that a function f(x) is continuous at x = a if all three conditions are satisfied:
  lim(x→a) f(x) = f(a)

This means:
  • f(a) exists.
  • lim(x→a) f(x) exists.
  • The limit equals the actual function value:
    lim(x→a) f(x) = f(a)

Example:
  Consider f(x) = x² + 3x - 2.

  At x = 2:
    f(2) = 2² + 3(2) - 2 = 4 + 6 - 2 = 8

  The limit is:
    lim(x→2) (x² + 3x - 2) = 8

  Therefore:
    lim(x→2) f(x) = f(2)

  so f is continuous at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES "CONTINUOUS ON AN INTERVAL" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous on an interval if it is continuous at every point in that interval.

For example, if f(x) = x² is defined on [-2, 3], then f is continuous on [-2, 3] because x² is continuous at every point between -2 and 3.

We can write:
  f is continuous on [-2, 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TYPES OF INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several types of intervals that appear in calculus.

Open interval (a, b):
  This contains every number between a and b, but does not include the endpoints.
  Example:
    (2, 5) means 2 < x < 5

Closed interval [a, b]:
  This includes both endpoints.
  Example:
    [2, 5] means 2 ≤ x ≤ 5

Half-open intervals:
  There are two possibilities:
    [a, b) and (a, b]
  For example:
    [2, 5) means 2 ≤ x < 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONTINUITY ON AN OPEN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For an open interval (a, b), the function must be continuous at every point c satisfying:
  a < c < b

Therefore:
  f is continuous on (a, b)

if:
  lim(x→c) f(x) = f(c)

for every c ∈ (a, b).

Example:
  Consider f(x) = x³ - 2x + 1.

  Polynomial functions are continuous everywhere.

  Therefore, f(x) = x³ - 2x + 1 is continuous on (-∞, ∞).

  It is also continuous on any smaller interval, such as (0, 5).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONTINUITY ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is slightly different.

Suppose we want f(x) to be continuous on [a, b].

Inside the interval, the function must be continuous normally:
  lim(x→c) f(x) = f(c)

for every a < c < b.

However, at the endpoints we only approach from inside the interval.

At the left endpoint a:
  lim(x→a⁺) f(x) = f(a)

At the right endpoint b:
  lim(x→b⁻) f(x) = f(b)

Therefore, f is continuous on [a, b] if:

  Interior points:
    lim(x→c) f(x) = f(c) for every c ∈ (a, b)

  Left endpoint:
    lim(x→a⁺) f(x) = f(a)

  Right endpoint:
    lim(x→b⁻) f(x) = f(b)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DO WE USE ONE-SIDED LIMITS AT THE ENDPOINTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x² on the interval [0, 3].

At x = 0, there are no points in the interval to the left of 0.

The interval only contains:
  0 ≤ x ≤ 3

So when checking continuity at x = 0, we approach from the right:
  lim(x→0⁺) f(x) = f(0)

Similarly, at x = 3, we approach from the left:
  lim(x→3⁻) f(x) = f(3)

This is why closed-interval continuity uses one-sided limits at endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: CHECKING CONTINUITY ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x² + 1 on [1, 4].

Step 1: Check the interior
  Since f(x) is a polynomial, it is continuous everywhere.
  Therefore, it is continuous for 1 < x < 4.

Step 2: Check the left endpoint
  f(1) = 1² + 1 = 2
  And:
    lim(x→1⁺) (x² + 1) = 2
  Thus:
    lim(x→1⁺) f(x) = f(1)

Step 3: Check the right endpoint
  f(4) = 4² + 1 = 17
  And:
    lim(x→4⁻) (x² + 1) = 17
  Therefore:
    lim(x→4⁻) f(x) = f(4)

Hence:
  f(x) = x² + 1 is continuous on [1, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE OF A FUNCTION THAT IS NOT CONTINUOUS ON AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = 1/(x - 2).

Suppose the interval is [0, 4].

The function is undefined at x = 2.

Since 2 is inside the interval, 2 ∈ [0, 4], the function cannot be continuous on the entire interval.

In fact:
  lim(x→2) 1/(x - 2)

does not exist as a finite limit.

The graph has a vertical asymptote at x = 2.

Therefore:
  f(x) = 1/(x - 2) is not continuous on [0, 4].

However, it is continuous on intervals that do not contain 2, such as [0, 1] or [3, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON FUNCTIONS THAT ARE CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Knowing which functions are automatically continuous makes problems much easier.

Polynomial functions:
  Examples:
    f(x) = x³ - 4x + 7
    f(x) = 5x⁴ - 2x² + 1
  Polynomial functions are continuous everywhere.

Rational functions:
  A rational function f(x) = p(x)/q(x) is continuous wherever q(x) ≠ 0.
  For example:
    f(x) = (x + 1)/(x - 3)
  This is continuous everywhere except x = 3.

Root functions:
  For example: f(x) = √x
  This is continuous on its domain: [0, ∞).

Exponential functions:
  For example: f(x) = 2ˣ
  Exponential functions are continuous for all real numbers.

Logarithmic functions:
  For example: f(x) = ln x
  This is continuous on (0, ∞).
  It is not defined for x ≤ 0.

Trigonometric functions:
  Functions such as sin x and cos x are continuous everywhere.
  But tan x is only continuous where it is defined.
  Since tan x = sin x / cos x, we must have cos x ≠ 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONTINUITY ON AN INTERVAL AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphically, continuity on an interval means that the graph has no breaks, holes, or jumps within that interval.

For example:
  f(x) = x²

has a smooth graph.

There are no:
  • holes
  • jumps
  • vertical asymptotes
  • undefined points

so it is continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENT TYPES OF DISCONTINUITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function may fail to be continuous because of different types of discontinuities.

Removable discontinuity:
  Example:
    f(x) = (x² - 1)/(x - 1)

  Factor:
    f(x) = ((x - 1)(x + 1))/(x - 1)

  so f(x) = x + 1, x ≠ 1.

  There is a hole at x = 1.

  Therefore, the function is not continuous at x = 1.

Jump discontinuity:
  A jump occurs when the left-hand and right-hand limits are different:
    lim(x→a⁻) f(x) ≠ lim(x→a⁺) f(x)

  Therefore, the two sides of the graph do not meet.

Infinite discontinuity:
  This happens when the function approaches infinity near a point.

  For example:
    f(x) = 1/(x - 2)

  At x = 2, there is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT THEOREM: CONTINUITY OF COMPOSITE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If g is continuous at a, and f is continuous at g(a), then the composite function:
  (f ∘ g)(x) = f(g(x))

is continuous at a.

In simpler terms:
  Continuous functions can be composed together and remain continuous, 
  provided the composition is defined.

Example:
  h(x) = √(x² + 1)

  The inside function g(x) = x² + 1 is continuous everywhere.

  The square-root function f(x) = √x is continuous for x ≥ 0.

  Since x² + 1 > 0 for every real x, the composition:
    h(x) = √(x² + 1)

  is continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION TO THE INTERMEDIATE VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity on an interval is especially important because of the Intermediate Value Theorem (IVT).

If f is continuous on [a, b], then f takes every value between f(a) and f(b).

For example, suppose f(1) = 2 and f(5) = 10.

If f is continuous on [1, 5], then f must take the value 7 somewhere between x = 1 and x = 5.

In other words, there exists some c ∈ [1, 5] such that:
  f(c) = 7

This is sometimes called the "no skipping values" property of continuous functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CONNECTION TO THE EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity on a closed interval is also required for the Extreme Value Theorem (EVT).

If f is continuous on [a, b], then f must have both:
  • an absolute maximum
  • an absolute minimum

somewhere on [a, b].

For example:
  f(x) = x² on [-2, 3].

The function is continuous on the closed interval, so it must have an absolute minimum and maximum.

The minimum occurs at x = 0, where f(0) = 0.

The maximum occurs at x = 3, where f(3) = 9.

Thus:
  Absolute minimum = 0
and:
  Absolute maximum = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONTINUITY ON DIFFERENT TYPES OF INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful summary is:

  Interval      Continuity Requirement
  ──────────────────────────────────────────────────────────────────────────
  (a, b)        Continuous at every interior point
  [a, b]        Continuous inside + right-continuous at a + left-continuous at b
  [a, b)        Right-continuous at a, continuous inside
  (a, b]        Continuous inside, left-continuous at b

For a closed interval:
  lim(x→a⁺) f(x) = f(a)
and:
  lim(x→b⁻) f(x) = f(b)

are particularly important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A SIMPLE WAY TO REMEMBER IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of an interval as a road.

If a function is continuous on the interval, the graph is like a road with no breaks.

For [a, b], you need to be able to travel:
  a → b

without encountering:
  • a hole
  • a jump
  • an undefined point
  • a vertical asymptote

The endpoints are special because you only need to approach them from inside the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. HOW TO SOLVE CONTINUITY-ON-AN-INTERVAL PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked:
  Determine whether f(x) is continuous on [a, b].

Use this procedure:

Step 1 — Check the domain
  Make sure the function is defined throughout the interval.

Step 2 — Check interior points
  For every a < x < b, verify continuity.

Step 3 — Check the left endpoint
  Calculate:
    lim(x→a⁺) f(x)
  and compare it with f(a).
  You need:
    lim(x→a⁺) f(x) = f(a)

Step 4 — Check the right endpoint
  Calculate:
    lim(x→b⁻) f(x)
  and compare it with f(b).
  You need:
    lim(x→b⁻) f(x) = f(b)

Step 5 — State the conclusion
  If all conditions hold:
    f is continuous on [a, b].
  If even one condition fails:
    f is not continuous on [a, b].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. KEY TAKEAWAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important ideas to remember are:

  Continuous on an interval = continuous at every point of that interval

For an open interval (a, b):
  check ordinary continuity at every interior point.

For a closed interval [a, b]:
  check:
    lim(x→a⁺) f(x) = f(a)
    lim(x→c) f(x) = f(c), a < c < b
  and:
    lim(x→b⁻) f(x) = f(b)

The concept is fundamental because the Intermediate Value Theorem and Extreme Value Theorem depend on continuity on an interval.
  `,
  examples: [
    "f(x) = x² + 3x - 2 is continuous at x = 2",
    "f(x) = x² + 1 is continuous on [1, 4]",
    "f(x) = 1/(x - 2) is not continuous on [0, 4] (vertical asymptote at x = 2)",
    "Polynomials are continuous everywhere",
    "Rational functions are continuous where denominator ≠ 0",
    "√x is continuous on [0, ∞)",
    "Composite functions: √(x² + 1) is continuous everywhere",
  ],
};

export default topic;