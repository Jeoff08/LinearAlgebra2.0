// filename: continuity-on-an-interval.ts

const topic = {
  id: "continuity-on-an-interval",
  title: "Continuity on an Interval",
  summary:
    "A function is continuous on an interval if it is continuous at every point in that interval, with one-sided limits used at endpoints for closed intervals.",
  details: `

"image": "src/assets_2.3/193.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONTINUITY AT A POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before discussing continuity on an interval, recall that a function f(x) is continuous at x = a if all three conditions are satisfied: f(a) exists, the limit as x approaches a exists, and these two values are equal. This means there is no hole, jump, or break at that point. The function value matches the limiting value, so the graph passes smoothly through (a, f(a)). Continuity at a point is the building block for continuity on larger sets. If a function fails any of these three conditions, it is discontinuous at that point. Understanding this definition is essential because it forms the basis for the interval continuity concept. For example, a polynomial like f(x) = x² + 3x - 2 satisfies all three conditions at every real number, making it continuous everywhere. The limit and the function value are always equal, which is why polynomials are so well-behaved.

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

A function is continuous on an interval if it is continuous at every point within that interval. This means that as you move along the interval, the graph has no interruptions, gaps, or jumps. The function must be defined at each point, and the limit at each interior point must equal the function value. For example, f(x) = x² is continuous on [-2, 3] because x² is continuous at every real number, and thus at every point between -2 and 3. Continuity on an interval is a stronger condition than continuity at a single point because it requires the property to hold across an entire range. This concept is critical for many theorems in calculus that require functions to be well-behaved on a whole interval. When we say a function is continuous on an interval, we are asserting that it has no breaks anywhere in that interval.

A function is continuous on an interval if it is continuous at every point in that interval.

For example, if f(x) = x² is defined on [-2, 3], then f is continuous on [-2, 3] because x² is continuous at every point between -2 and 3.

We can write:
  f is continuous on [-2, 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TYPES OF INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Intervals are subsets of the real numbers that contain all numbers between two endpoints. The type of interval whether it is open, closed, or half-open affects how we check continuity. An open interval (a, b) includes all numbers strictly between a and b but excludes the endpoints. A closed interval [a, b] includes the endpoints as well. Half-open intervals like [a, b) or (a, b] include one endpoint but not the other. These distinctions matter because at endpoints, we use one-sided limits since the function is only defined on one side. For example, on [2, 5], the function must be continuous at every point from 2 to 5, including the endpoints. The type of interval determines whether we need to check one-sided or two-sided limits. Understanding these interval types is essential for correctly applying continuity definitions and theorems.

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

For an open interval (a, b), the function must be continuous at every point c strictly between a and b. Since the endpoints are not included, we do not need to worry about continuity at a or b. The condition is simply that for every c in (a, b), the two-sided limit exists and equals f(c). This is the standard notion of continuity at each interior point. For example, the polynomial f(x) = x³ - 2x + 1 is continuous on (0, 5) because polynomials are continuous everywhere. Similarly, rational functions are continuous on open intervals that do not contain any points where the denominator is zero. Continuity on an open interval is often easier to check than on a closed interval because there are no endpoint conditions. However, if a function is continuous on an open interval, it may still fail to be continuous on a larger closed interval that includes problematic endpoints.

For an open interval (a, b), the function must be continuous at every point c satisfying:
  a < c < b

Therefore:

"image": "src/assets_2.3/194.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONTINUITY ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity on a closed interval [a, b] requires more care because the endpoints are included. Inside the interval, the function must be continuous in the usual sense: the two-sided limit must equal the function value at every interior point. At the left endpoint a, we only have points to the right within the interval, so we require right-continuity: the right-hand limit as x approaches a must equal f(a). Similarly, at the right endpoint b, we require left-continuity: the left-hand limit as x approaches b must equal f(b). This definition ensures that the graph has no breaks anywhere in the closed interval, including at the boundaries. For example, f(x) = x² on [1, 4] is continuous because it satisfies all these conditions. This distinction between open and closed intervals is crucial for theorems like the Extreme Value Theorem, which guarantees extrema only for continuous functions on closed intervals.

This is slightly different.

"image": "src/assets_2.3/195.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DO WE USE ONE-SIDED LIMITS AT THE ENDPOINTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One-sided limits are used at endpoints because the function is only defined on one side of the endpoint within the interval. For example, on the interval [0, 3], the function f(x) = x² is defined for x ≥ 0 and x ≤ 3. At x = 0, there are no points in the interval to the left of 0, so we cannot consider a two-sided limit. The only meaningful limit is from the right, as x approaches 0 from positive values. Similarly, at x = 3, we can only approach from the left. This is why the definition of continuity on a closed interval requires right-continuity at the left endpoint and left-continuity at the right endpoint. If we tried to use two-sided limits at endpoints, they would not exist because the function is not defined on both sides. Using one-sided limits is the correct mathematical way to handle this situation and ensures that continuity on a closed interval is well-defined.

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

Let's apply the definition to a specific function. Consider f(x) = x² + 1 on the closed interval [1, 4]. Since f is a polynomial, it is continuous at every interior point between 1 and 4. At the left endpoint x = 1, we compute f(1) = 2 and the right-hand limit: lim(x→1⁺) (x² + 1) = 2, which matches. At the right endpoint x = 4, f(4) = 17 and the left-hand limit: lim(x→4⁻) (x² + 1) = 17, which also matches. Since all conditions are satisfied, f is continuous on [1, 4]. This example illustrates the three-part check: interior points, left endpoint, and right endpoint. If we were dealing with a function that had a discontinuity at an endpoint, such as a rational function with a vertical asymptote, the check would fail and the function would not be continuous on the closed interval.

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

Not all functions are continuous on every interval. Consider f(x) = 1/(x - 2) on the interval [0, 4]. The function is undefined at x = 2, which is inside the interval. Since the function does not exist at x = 2, it cannot be continuous there. Moreover, the limit as x approaches 2 does not exist as a finite number; the function has a vertical asymptote. Therefore, f is not continuous on [0, 4]. However, it is continuous on intervals that do not contain 2, such as [0, 1] or [3, 4]. This example highlights that the domain of the function must include the entire interval for continuity to be possible. Any point where the function is undefined or has an infinite discontinuity will break continuity. When checking continuity, always identify any points where the function is not defined or has a vertical asymptote.

"image": "src/assets_2.3/196.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMMON FUNCTIONS THAT ARE CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Knowing which functions are automatically continuous saves time and effort. Polynomial functions, such as f(x) = x³ - 4x + 7, are continuous everywhere because they are sums of continuous monomials. Rational functions, which are ratios of polynomials, are continuous wherever the denominator is nonzero. For example, f(x) = (x+1)/(x-3) is continuous everywhere except at x = 3. Root functions like f(x) = √x are continuous on their domains, which for even roots is [0, ∞). Exponential functions like f(x) = 2ˣ are continuous for all real numbers. Logarithmic functions like f(x) = ln x are continuous on (0, ∞). Trigonometric functions such as sin x and cos x are continuous everywhere, while tan x is continuous where it is defined (cos x ≠ 0). Recognizing these common continuous functions helps in quickly determining continuity on intervals without performing detailed limit checks.

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

Graphically, continuity on an interval means that the graph can be drawn without lifting your pencil. There are no breaks, holes, jumps, or vertical asymptotes within the interval. For example, f(x) = x² has a smooth, unbroken graph on any interval. In contrast, a function with a hole, like f(x) = (x²-1)/(x-1), has a removable discontinuity at x = 1. A function with a jump, such as a step function, has a break where the graph suddenly shifts. A function with a vertical asymptote, like f(x) = 1/(x-2), has an infinite discontinuity. These visual cues are helpful for identifying discontinuities quickly. However, graphical intuition is not always sufficient; some discontinuities are subtle. For rigorous work, we rely on the algebraic definition of continuity. Nonetheless, the "no breaks" interpretation is a useful way to remember what continuity means.

Graphically, continuity on an interval means that the graph has no breaks, holes, or jumps within that interval.

"image": "src/assets_2.3/197.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENT TYPES OF DISCONTINUITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Discontinuities come in several forms. A removable discontinuity occurs when the function has a hole at a point, but the limit exists. For example, f(x) = (x²-1)/(x-1) = x+1 for x ≠ 1, with a hole at x = 1. The discontinuity can be "removed" by redefining f(1) = 2. A jump discontinuity occurs when the left-hand and right-hand limits exist but are not equal; the graph jumps from one value to another. This is common in piecewise-defined functions. An infinite discontinuity occurs when the function approaches infinity or negative infinity near a point, typically due to a vertical asymptote. For example, f(x) = 1/(x-2) has an infinite discontinuity at x = 2. Recognizing these types helps in understanding why a function fails to be continuous and what kind of behavior to expect. It also informs how to handle the function in calculus, especially when integrating or differentiating.

A function may fail to be continuous because of different types of discontinuities.

"image": "src/assets_2.3/198.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT THEOREM: CONTINUITY OF COMPOSITE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The composition of continuous functions is continuous. If g is continuous at a and f is continuous at g(a), then the composite function (f ∘ g)(x) = f(g(x)) is continuous at a. This theorem is extremely useful because it allows us to build complex continuous functions from simpler ones. For example, h(x) = √(x² + 1) is continuous everywhere because g(x) = x² + 1 is continuous everywhere, and f(x) = √x is continuous for x ≥ 0, and x² + 1 > 0 for all x. Similarly, e^{sin x} is continuous because e^x and sin x are continuous. This theorem extends to intervals as well: if g is continuous on an interval and f is continuous on the range of g, then the composition is continuous on that interval. It is a powerful tool for analyzing functions that are built from basic building blocks.

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

Continuity on an interval is essential for the Intermediate Value Theorem (IVT). The IVT states that if f is continuous on [a, b], then for any value N between f(a) and f(b), there exists at least one c in [a, b] such that f(c) = N. In other words, a continuous function cannot skip values; it must take every intermediate value. For example, if f(1) = 2 and f(5) = 10, and f is continuous on [1, 5], then f must take the value 7 somewhere between 1 and 5. This theorem has many practical applications, such as finding roots of equations. If f(a) and f(b) have opposite signs, the IVT guarantees a root between a and b. Without continuity, this guarantee fails. The IVT is a fundamental consequence of the definition of continuity and is one of the reasons why continuity is such an important concept in calculus.

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

Continuity on a closed interval is also required for the Extreme Value Theorem (EVT). The EVT states that if f is continuous on [a, b], then f must attain both an absolute maximum and an absolute minimum somewhere on that interval. This theorem is the foundation for optimization problems. For example, f(x) = x² on [-2, 3] is continuous, so it must have a minimum and maximum. The minimum occurs at x = 0 with value 0, and the maximum occurs at x = 3 with value 9. If the function were not continuous on the closed interval, these extrema might not exist. For instance, a function with a hole might approach a value but never reach it. The EVT is a key reason why we often restrict our attention to continuous functions on closed intervals when solving optimization problems. It guarantees that a solution exists, which is a crucial first step in finding it.

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

The requirements for continuity depend on the type of interval. On an open interval (a, b), we only need ordinary two-sided continuity at every interior point. On a closed interval [a, b], we need continuity inside plus right-continuity at a and left-continuity at b. On a half-open interval [a, b), we need right-continuity at a and continuity inside; there is no condition at b because b is not included. Similarly, for (a, b], we need continuity inside and left-continuity at b. This summary is useful for quickly determining what conditions to check. For instance, if you are asked whether a function is continuous on [0, ∞), you need to check right-continuity at 0 and continuity for all x > 0. Understanding these distinctions ensures that you apply the correct definition for each interval type. The table below summarizes these requirements for quick reference.

"image": "src/assets_2.3/200.png"

For a closed interval:
  lim(x→a⁺) f(x) = f(a)
and:
  lim(x→b⁻) f(x) = f(b)

are particularly important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A SIMPLE WAY TO REMEMBER IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of an interval as a road that you are traveling along. If a function is continuous on that interval, the graph is like a smooth road with no interruptions. For a closed interval [a, b], you start at a and travel to b without encountering any holes, jumps, or barriers. At the starting point a, you only need to be able to start moving forward (right-continuity). At the ending point b, you only need to be able to arrive from behind (left-continuity). For an open interval, the endpoints are not part of the road, so you only need smoothness everywhere in between. This analogy helps remember why one-sided limits are used at endpoints: you cannot approach from outside the interval because there is no road there. It also reinforces the idea that continuity is about unbrokenness within the interval. The "no lifting your pencil" test is a visual version of this road analogy.

"image": "src/assets_2.3/199.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. HOW TO SOLVE CONTINUITY-ON-AN-INTERVAL PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To determine whether a function is continuous on a given interval, follow a systematic procedure. First, check the domain: ensure the function is defined for every point in the interval. If there is any point where the function is undefined, it cannot be continuous there. Next, check the interior points: if the function is made of continuous pieces (like polynomials, exponentials, etc.), this is often automatic. Then, check the left endpoint (if included) using the right-hand limit. Similarly, check the right endpoint (if included) using the left-hand limit. If all conditions hold, the function is continuous on the interval. If any condition fails, it is not. This procedure works for all types of intervals. For open intervals, you only need to check the interior points. For closed intervals, you must also check both endpoints. This checklist ensures you don't miss any potential discontinuities.

When asked:
  Determine whether f(x) is continuous on [a, b].

Use this procedure:

Step 1   Check the domain
  Make sure the function is defined throughout the interval.

Step 2   Check interior points
  For every a < x < b, verify continuity.

Step 3   Check the left endpoint
  Calculate:
    lim(x→a⁺) f(x)
  and compare it with f(a).
  You need:
    lim(x→a⁺) f(x) = f(a)

Step 4   Check the right endpoint
  Calculate:
    lim(x→b⁻) f(x)
  and compare it with f(b).
  You need:
    lim(x→b⁻) f(x) = f(b)

Step 5   State the conclusion
  If all conditions hold:
    f is continuous on [a, b].
  If even one condition fails:
    f is not continuous on [a, b].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. KEY TAKEAWAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, continuity on an interval means the function is continuous at every point of that interval. For open intervals, standard two-sided continuity at each interior point is sufficient. For closed intervals, we also require one-sided continuity at the endpoints: right-continuity at the left endpoint and left-continuity at the right endpoint. This concept is fundamental because it underpins two major theorems: the Intermediate Value Theorem, which guarantees that continuous functions take all intermediate values, and the Extreme Value Theorem, which guarantees the existence of absolute extrema on closed intervals. Recognizing common continuous functions polynomials, rationals (where defined), roots, exponentials, logarithms, and trigonometric functions helps in quickly assessing continuity. The procedure for checking continuity is systematic: check the domain, check interior points, and check endpoints (if included). Mastering continuity on an interval is essential for success in calculus.

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