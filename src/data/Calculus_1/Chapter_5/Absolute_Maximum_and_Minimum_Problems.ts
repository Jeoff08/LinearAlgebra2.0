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

An absolute maximum is the highest value that a function can achieve over a given domain or interval. It is the global maximum, meaning that no other point in the domain produces a larger output. In optimization, we often seek the absolute maximum when we want the best possible outcome, such as maximum profit, maximum area, or maximum efficiency. The absolute maximum can occur at an interior point where the derivative is zero or undefined, or it can occur at an endpoint of the interval. It is essential to consider all candidates, not just critical points, because the highest value might be at a boundary. The absolute maximum is a single value, but it can be attained at multiple x-values. Understanding how to find the absolute maximum is fundamental to solving real-world optimization problems.

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

An absolute minimum is the smallest value that a function attains over its domain or a specified interval. It represents the global minimum, the lowest output of the function. In many applications, we aim to minimize cost, material usage, time, or other quantities, making the absolute minimum the goal. Like the absolute maximum, the absolute minimum can occur at critical points (where the derivative is zero or undefined) or at endpoints. It is not enough to look only at critical points; endpoints must be evaluated as well. A function can have the same absolute minimum value at multiple points. The closed interval method guarantees that for a continuous function on a closed interval, both an absolute maximum and absolute minimum exist. Finding the absolute minimum is essential for optimizing resources and improving efficiency.

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

It is crucial to distinguish between absolute (global) extrema and relative (local) extrema. An absolute maximum is the largest value over the entire domain, while a relative maximum is only the largest in a small neighborhood. Similarly, an absolute minimum is the smallest value overall, while a relative minimum is only the smallest locally. A function can have several relative extrema but only one absolute maximum and one absolute minimum (though they may occur at multiple points). The absolute extremum is what matters in optimization, but relative extrema help in understanding the shape of the graph. The methods for finding them overlap: both use critical points, but absolute extrema also require checking endpoints. This distinction is fundamental because a relative maximum may not be the best outcome, and relying on it could lead to suboptimal decisions.

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

One of the most common mistakes in finding absolute extrema is to focus only on critical points and ignore the endpoints. However, on a closed interval, the endpoints are always candidates for absolute extrema. The function may reach its highest or lowest value at the boundary, even if the derivative is not zero there. For example, a monotonic increasing function will have its absolute maximum at the right endpoint and its absolute minimum at the left endpoint. Ignoring endpoints can lead to completely wrong answers. The Extreme Value Theorem guarantees that for a continuous function on a closed interval, the extrema exist, but they may be at the endpoints. Therefore, when solving absolute maximum/minimum problems, always evaluate the function at both endpoints. This is a non‑negotiable step in the closed‑interval method.

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

The Extreme Value Theorem (EVT) is a foundational result in calculus that guarantees the existence of absolute extrema under certain conditions. It states that if a function is continuous on a closed and bounded interval, then it must attain both an absolute maximum and an absolute minimum somewhere on that interval. This theorem is important because it assures us that the extrema exist before we even try to find them. Without this guarantee, we might waste time searching for extrema that do not exist. The EVT relies on two key conditions: continuity and the closed interval. If the function has a discontinuity, or if the interval is open or unbounded, the theorem may not apply, and extrema may not be achieved. The EVT is the theoretical underpinning of the closed‑interval method and justifies the procedure of checking critical points and endpoints.

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

The closed‑interval method is a systematic procedure for finding absolute extrema of a continuous function on a closed interval. It is the standard approach in calculus and is easy to apply. The method uses the fact that absolute extrema can only occur at critical points or at endpoints. By finding all critical points (where the derivative is zero or undefined) within the interval, evaluating the function at those points and at the endpoints, and then comparing the values, we can determine the absolute maximum and minimum. This method is reliable and works for any continuous function. It is important to ensure that the function is continuous on the interval; otherwise, the method may not be valid. The closed‑interval method is used in countless optimization problems, from maximizing profit to minimizing material usage.

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

To see the closed‑interval method in action, let's work through a complete example. We'll find the absolute extrema of a cubic polynomial on a closed interval. This example illustrates all the steps: differentiating, finding critical points, evaluating endpoints, and comparing values. It also shows that absolute extrema can occur at multiple points and that both interior critical points and endpoints can be the locations. By following the method carefully, we get a clear and correct answer. This is a typical problem in calculus courses and serves as a template for solving many other optimization problems. Practice with such examples builds confidence and mastery of the technique.

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

It is possible for a function to attain the same absolute maximum (or minimum) value at more than one point. This often happens when the function is symmetric or has a flat top or bottom. For example, f(x) = x² on [-2, 2] has an absolute maximum of 4 at both x = -2 and x = 2, and an absolute minimum of 0 at x = 0. When reporting the extrema, you should state the value and list all points where it occurs. This does not change the method; you still evaluate all candidates and then identify the largest and smallest values. The presence of multiple points with the same extremum value is not a problem; it is a natural part of the analysis. Always be precise about where the extrema occur, as that information may be important in optimization contexts.

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

Not every function has absolute extrema. The most common reason is that the interval is open or unbounded. For example, f(x) = x on (0, 1) is continuous, but because the endpoints are not included, the function never reaches 0 or 1; it only gets arbitrarily close. Therefore, it has no absolute maximum or minimum. Similarly, functions that grow without bound as x→±∞ have no finite absolute extrema. The Extreme Value Theorem requires a closed interval and continuity to guarantee extrema. When these conditions are not met, extrema may or may not exist. In some cases, they may exist at critical points but not at endpoints if the interval is open. Being aware of these situations is important for correctly interpreting results and for knowing when the closed‑interval method can be applied.

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

A common misconception is that absolute extrema must occur where the derivative is zero. While this is true for local extrema in differentiable functions, absolute extrema can also occur at endpoints. Therefore, the set of candidates for absolute extrema on a closed interval is the union of all critical points (where f'(x) = 0 or does not exist) and the endpoints. This is the key insight that drives the closed‑interval method. It is essential to remember that critical points are not the only possible locations; endpoints are equally important. This is why the method always includes endpoints. By systematically checking all candidates, we ensure we do not miss the true absolute extrema. This rule is one of the most important in calculus.

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

It is important to understand that the first derivative test and the absolute extrema method serve different purposes. The first derivative test is used to classify critical points as local maxima, local minima, or neither, based on the sign change of the derivative. In contrast, the absolute extrema method is used to find the global maximum and minimum over an interval, which requires comparing function values at all critical points and endpoints. The first derivative test can help identify which critical points are local maxima or minima, but it does not by itself tell you the absolute extrema. For absolute extrema, you must evaluate the function and compare. Both methods are useful in calculus, and they complement each other. Knowing when to use each is a sign of a solid understanding.

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

For quick reference, here is a concise step‑by‑step checklist for finding absolute extrema on a closed interval. This shortcut encapsulates the entire closed‑interval method. By following these steps in order, you can solve any such problem efficiently. It is a good idea to memorize this checklist and use it as a routine. The steps are: find the derivative, find critical points, keep those inside the interval, evaluate the function at those points and at the endpoints, and then compare. The largest value is the absolute maximum, and the smallest is the absolute minimum. This checklist is a valuable tool for exams and homework. It reduces the chance of missing a candidate and ensures a complete solution.

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

Absolute maximum and minimum problems are not just theoretical exercises; they are the mathematical backbone of optimization in the real world. Many practical problems can be modeled as finding the maximum or minimum of a function. For instance, a business wants to maximize profit, an engineer wants to minimize material usage, a physicist wants to find the maximum height of a projectile, and a manufacturer wants to minimize production costs. In each case, the solution involves setting up a function, finding its absolute extrema over a feasible domain, and interpreting the results. The closed‑interval method provides a rigorous way to find these optimal values. This connection between calculus and real‑world decision‑making is what makes absolute extrema so important. Mastering this topic enables you to solve a wide range of optimization problems.

These problems are extremely important because they represent real-world optimization.

For example:
  • Business: Find the production level that gives the greatest profit.
  • Engineering: Find the dimensions that minimize material usage.
  • Physics: Find the maximum height of an object.
  • Manufacturing: Find the production quantity that minimizes cost.
  • Geometry: Find the largest area possible with a fixed amount of material.

So absolute maximum/minimum problems are not simply about finding the highest and lowest points on a graph they form the mathematical foundation of optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even with a clear method, students often make common errors when solving absolute extrema problems. One of the most frequent mistakes is checking only the points where f'(x) = 0 and forgetting to evaluate the endpoints. Another error is overlooking points where the derivative does not exist, such as corners or cusps. Additionally, sometimes critical points outside the interval are mistakenly included in the comparison. Finally, confusing relative extrema with absolute extrema can lead to incorrect conclusions. To avoid these mistakes, always use the systematic checklist: find all critical points (both where f'=0 and where f' is undefined), filter them to those inside the interval, include the endpoints, evaluate all, and then compare. By following this process, you can avoid the pitfalls and arrive at the correct answer.

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

Here is a quick example to reinforce the method. Find the absolute extrema of f(x) = x² - 4x + 3 on [0, 5]. The derivative is f'(x) = 2x - 4, so the critical point is x = 2. Evaluating the function at the critical point and at the endpoints gives f(0) = 3, f(2) = -1, and f(5) = 8. The largest value is 8 at x = 5, and the smallest is -1 at x = 2. This example shows that the absolute maximum can occur at an endpoint, while the absolute minimum occurs at a critical point. It also demonstrates the importance of checking both. This is a concise illustration of the closed‑interval method.

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

The central idea of absolute maximum and minimum problems is that the extrema are found by evaluating the function at all critical points and endpoints, and then comparing the values. This is the essence of the closed‑interval method. It is a straightforward process that, when followed carefully, yields the correct answer every time. The key is to remember to include both critical points and endpoints, and to compare values rather than assuming that the maximum or minimum occurs where the derivative is zero. This method is the foundation of optimization in calculus. By mastering it, you gain the ability to solve a wide range of practical problems. Always start by identifying the interval and checking continuity, then apply the checklist, and interpret your results in the context of the problem.

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