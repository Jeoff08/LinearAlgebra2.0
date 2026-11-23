// filename: maximum-and-minimum-values-of-a-function.ts

const topic = {
  id: "maximum-and-minimum-values-of-a-function",
  title: "Maximum and Minimum Values of a Function",
  summary:
    "The largest (maximum) and smallest (minimum) outputs of a function over a domain, including absolute extrema on closed intervals and local extrema using critical points.",
  details: `
The maximum and minimum values of a function describe how large or how small the output of a function can become over a particular domain or interval.

"image": "src/assets_2.3/222.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. MAXIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The maximum value of a function is the largest output it produces over its entire domain or a specified interval. It represents the highest point on the graph within that region. A function may have a maximum at an interior point where the slope is zero, or at an endpoint of a closed interval. The maximum is a global property: it is compared against every other value in the domain. In applications, finding the maximum often means optimizing something like maximizing profit, area, or efficiency. It is essential to distinguish the maximum value (a number) from the point where it occurs (an x-value) and the coordinates of that point. Calculus provides tools like derivatives to locate maxima by identifying where the function stops increasing and starts decreasing.

Suppose f is a function defined on a domain D.

The function has a maximum value at x = c if:
  f(c) ≥ f(x)

for every x in the domain.

In other words, f(c) is the largest output produced by the function.

We call c the point where the maximum occurs, while f(c) is the maximum value.

Example:
  Consider f(x) = -x² + 4 on the interval [-2, 2].

  The graph is a downward-opening parabola.

  The highest point occurs at x = 0.

  Therefore:
    f(0) = -(0)² + 4 = 4

  So:
    Maximum value = 4
  and:
    Maximum occurs at x = 0

Notice the distinction:
  • Maximum value: 4
  • Location: x = 0
  • Point on graph: (0, 4)

"image": "src/assets_2.3/223.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MINIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The minimum value is the smallest output a function produces over its domain or interval. It corresponds to the lowest point on the graph. Like the maximum, the minimum can occur at an interior critical point or at an endpoint. The minimum is a global comparison: no other value in the domain is smaller. In optimization, minimizing cost, time, or material usage is often the goal. Understanding how to find minima is equally important as finding maxima. The derivative can help locate minima by showing where the function changes from decreasing to increasing. The minimum value is a number, and we must also note where it occurs. Many real-world problems require us to find both the maximum and the minimum of a function.

A function has a minimum value at x = c if:
  f(c) ≤ f(x)

for every x in the domain.

In simple terms, f(c) is the smallest output of the function.

Example:
  Consider f(x) = x² - 4x + 5.

  Complete the square:
    f(x) = (x - 2)² + 1

  Since (x - 2)² ≥ 0, the smallest possible value occurs when (x - 2)² = 0.

  Therefore, x = 2.

  Then f(2) = 1.

  Thus:
    Minimum value = 1
  and it occurs at x = 2.

  The minimum point is (2, 1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MAXIMUM/MINIMUM VALUE VS. MAXIMUM/MINIMUM POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is crucial to distinguish between the extremum value (a number) and the point on the graph where it occurs. The phrase "maximum value" refers to the output f(c), while "maximum point" refers to the ordered pair (c, f(c)). Similarly, "where the maximum occurs" indicates the input c. Confusing these can lead to incorrect answers, especially in application problems where the context tells you what is being optimized. For example, if you are maximizing area, you need to report both the dimensions (the location) and the maximum area (the value). In calculus problems, you are often asked to find both. Always state clearly: the maximum value is ..., and it occurs at x = .... This distinction is one of the most common sources of errors in optimization.

This distinction is very important.

Suppose f(x) = x² - 4x + 5 has a minimum at (2, 1).

  • The minimum point is: (2, 1)
  • The x-value where the minimum occurs is: x = 2
  • The minimum value is: 1

"image": "src/assets_2.3/224.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An absolute maximum is the greatest value a function attains over its entire domain or a specified interval. The word "absolute" emphasizes that we are comparing against all other values, not just nearby ones. The Extreme Value Theorem guarantees that a continuous function on a closed interval always has an absolute maximum. This concept is central to optimization: if you want the best possible outcome, you are looking for the absolute maximum. It can occur at a critical point where the derivative is zero, at a point where the derivative does not exist, or at an endpoint. In many problems, the absolute maximum is the final answer you need, so you must carefully check all candidates. Missing an endpoint can lead to an incorrect solution.

An absolute maximum is the greatest value of the function over its entire domain or specified interval.

If f(c) ≥ f(x) for every x in the domain, then f(c) is the absolute maximum.

The word absolute means we are comparing the value against everything in the domain being considered.

Example:
  Consider f(x) = -x² + 6x on [0, 6].

  Rewrite:
    f(x) = -(x - 3)² + 9

  The highest point occurs at x = 3.

  Therefore:
    f(3) = 9

  So:
    Absolute maximum = 9 at x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ABSOLUTE MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An absolute minimum is the smallest value a function produces over its entire domain or interval. Like the absolute maximum, it is a global property. The Extreme Value Theorem ensures that a continuous function on a closed interval also has an absolute minimum. Finding the absolute minimum is often the goal in problems involving cost, time, or resource minimization. It can occur at interior critical points, where the derivative is zero or undefined, or at endpoints. To find it, you must evaluate the function at all candidates. The absolute minimum is the lowest of these values. In real-world contexts, it represents the best (or least) possible outcome, such as the minimum cost to produce a certain quantity.

An absolute minimum is the smallest value of a function over its entire domain or specified interval.

If f(c) ≤ f(x) for every x in the domain, then f(c) is the absolute minimum.

For example:
  f(x) = x² - 4x + 5

  We already found:
    f(2) = 1

  Since (x - 2)² ≥ 0, the function can never go below 1.

  Therefore:
    Absolute minimum = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A local maximum is a value that is greater than or equal to all nearby values, but not necessarily the greatest on the entire domain. Think of it as a peak in a small neighborhood. A function can have several local maxima; they are the "hills" on the graph. The local maximum is determined by the behavior of the derivative: the function changes from increasing to decreasing at that point. Local maxima are important for understanding the shape of the graph, but they are not the final answer when we need the absolute maximum. However, in many cases, the absolute maximum is also a local maximum, especially if it occurs at an interior point. The first and second derivative tests help us identify local maxima.

A local maximum is a value that is greater than nearby function values, but it does not necessarily have to be the greatest value on the entire domain.

Think of it as a nearby peak.

For example, a graph might look like:
  peak ∩ ∩ peak

The function may have multiple local maximum points.

One peak could be higher than the other.

The highest one would be the absolute maximum, while both could be local maxima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A local minimum is a value that is less than or equal to all nearby values, but it may not be the smallest on the entire domain. It is like a valley in the graph. A function can have multiple local minima, each corresponding to a dip in the curve. Local minima occur where the derivative changes from negative to positive (the function goes from decreasing to increasing). They are useful for analyzing the local behavior of a function, but they are not always the absolute minimum. In optimization problems, we often need to find the global minimum, but identifying local minima helps in sketching the graph and understanding the overall shape. Both local and absolute extrema are essential concepts in calculus.

A local minimum occurs when the function is smaller than nearby function values.

Think of it as a valley.

A graph can have multiple local minima.

For example:
  ∩ valley ∩ valley

Each valley can be a local minimum.

But only the lowest one is the absolute minimum, if it exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ABSOLUTE VS. LOCAL EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key difference between absolute and local extrema is the scope of comparison. Absolute extrema consider the entire domain or interval, while local extrema only consider nearby points. A function can have many local extrema but only one absolute maximum and one absolute minimum (though they may occur at multiple points). The absolute maximum is always a local maximum if it occurs in the interior, but not necessarily if it occurs at an endpoint. Similarly, an absolute minimum at an endpoint is not a local minimum because the function is not defined on both sides. Understanding this distinction is crucial for solving optimization problems: you must find the absolute extrema, not just the local ones. The Extreme Value Theorem guarantees absolute extrema on closed intervals, but on open intervals they may not exist.

The word extremum refers to either a maximum or minimum.

Absolute maximum:
  Largest value over the entire domain.

Absolute minimum:
  Smallest value over the entire domain.

Local maximum:
  Largest compared with nearby values.

Local minimum:
  Smallest compared with nearby values.

A useful way to remember:
  Local = nearby.
  Absolute = everywhere in the domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE OF LOCAL AND ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To illustrate the difference, imagine a function with several peaks and valleys over its domain. Suppose the function has two local maxima with values 10 and 15, and two local minima with values 2 and -3. The absolute maximum is the largest of all, which is 15. The absolute minimum is the smallest, which is -3. The other extrema remain local: 10 is a local maximum but not absolute, and 2 is a local minimum but not absolute. This example shows that a function can have multiple local extrema, but only one absolute maximum and one absolute minimum (if they exist). When solving problems, you must identify which extrema are absolute by comparing all candidate values. This is especially important in optimization, where the absolute extrema are the ones that matter.

Consider a function with several peaks and valleys.

Suppose its values include:
  Local maximum: 10
  Local maximum: 15
  Local minimum: 2
  Local minimum: -3

If these are the relevant extrema over the domain, then:
  Absolute maximum = 15
and:
  Absolute minimum = -3

The values 10 and 2 can still be local extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical points are the primary candidates for local extrema. A critical point occurs where the derivative is zero or undefined, provided the point is in the domain. At these points, the function may have a horizontal tangent (derivative zero) or a sharp corner (derivative undefined). The reason critical points are important is that for a differentiable function, local extrema can only occur at critical points. However, not every critical point is an extremum; some are inflection points where the function changes concavity but not direction. To determine whether a critical point is a local maximum, local minimum, or neither, we use the first or second derivative tests. Thus, finding critical points is the first step in locating extrema, but further analysis is needed to classify them.

Maximum and minimum problems are closely connected to critical points.

A critical point occurs at x = c when:
  f'(c) = 0
or when:
  f'(c) does not exist

provided c is in the domain of f.

Why are these points important?
  Because a differentiable function can change from increasing to decreasing 
  at a local maximum, or from decreasing to increasing at a local minimum.

For example:
  Maximum: increasing → decreasing
  Minimum: decreasing → increasing

At the turning point, we often have:
  f'(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE USING THE FIRST DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the critical point method to a cubic function. For f(x) = x³ - 3x² + 2, the derivative is f'(x) = 3x² - 6x. Setting it to zero gives x = 0 and x = 2. Evaluating the original function at these points yields f(0) = 2 and f(2) = -2. To determine whether these are maxima or minima, we can examine the sign of the derivative around each point. For x < 0, f'(x) > 0; between 0 and 2, f'(x) < 0; for x > 2, f'(x) > 0. Thus, at x = 0, the function changes from increasing to decreasing → local maximum. At x = 2, it changes from decreasing to increasing → local minimum. So we have a local maximum of 2 at x = 0 and a local minimum of -2 at x = 2. This example demonstrates how the derivative sign test works.

Consider f(x) = x³ - 3x² + 2.

Find the critical points.

First differentiate:
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Set the derivative equal to zero:
  3x(x - 2) = 0

Therefore:
  x = 0 or x = 2

These are the critical numbers.

Now evaluate the original function.

At x = 0:
  f(0) = 2

At x = 2:
  f(2) = 8 - 12 + 2 = -2

So the critical points are:
  (0, 2) and (2, -2)

Using the behavior of the derivative, x = 0 is a local maximum and x = 2 is a local minimum.

Thus:
  Local maximum = 2 at x = 0
and:
  Local minimum = -2 at x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem (EVT) is a foundational result in calculus. It states that if a function is continuous on a closed and bounded interval, then it must attain both an absolute maximum and an absolute minimum on that interval. This theorem guarantees the existence of extrema, but it does not tell us how to find them. The conditions continuity and closed interval are essential. If either is missing, the theorem may fail. For example, a continuous function on an open interval may not have extrema because the endpoints are excluded. The EVT is the theoretical justification for the closed interval method: since we know the extrema exist, we can find them by checking critical points and endpoints. This theorem is one of the most important reasons why continuity is emphasized in calculus.

One of the most important theorems concerning maximum and minimum values is the Extreme Value Theorem (EVT).

It states:

  If f is continuous on a closed and bounded interval [a, b], then f must 
  have an absolute maximum and an absolute minimum on that interval.

In mathematical form:
  f continuous on [a, b] ⇒ f has absolute max and min on [a, b]

The requirements are important:
  • f must be continuous.
  • The interval must be closed.
  • The interval must be bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY CLOSED INTERVALS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The closed interval condition in the EVT is not arbitrary; it is necessary for guaranteeing extrema. Consider f(x) = x on the open interval (0, 1). This function is continuous and bounded, but it has no absolute maximum or minimum because it never reaches 0 or 1; it only approaches them. If we change to the closed interval [0, 1], then the extrema exist: the minimum is 0 and the maximum is 1. This example shows that including the endpoints can make the difference between having and not having absolute extrema. Many real-world optimization problems naturally involve closed intervals (e.g., production levels between 0 and a maximum), so the EVT applies. When an interval is open, you must be careful: the function may approach a value but not attain it, so no absolute extremum exists.

Consider f(x) = x on (0, 1).

The function is continuous.

However, it has no absolute maximum and no absolute minimum.

Why?
  The function gets arbitrarily close to 1, but never reaches 1.
  Likewise, it gets arbitrarily close to 0, but never reaches 0.

Therefore:
  No absolute maximum
and:
  No absolute minimum

But if we change the interval to [0, 1], then:
  Absolute minimum = 0
and:
  Absolute maximum = 1

This illustrates why the endpoints matter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING ABSOLUTE MAXIMUM AND MINIMUM ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The closed interval method is a systematic procedure for finding absolute extrema. It is based on the fact that extrema can only occur at critical points or endpoints. The steps are: differentiate the function to find f'(x); solve f'(x) = 0 and identify where f'(x) does not exist to get critical numbers; discard any critical numbers outside the interval; evaluate the function at the remaining critical numbers and at both endpoints; compare all these values. The largest is the absolute maximum, the smallest is the absolute minimum. This method is reliable and works for any continuous function on a closed interval. It is the standard approach in calculus for optimization problems. The key is to never forget the endpoints; they are just as likely to be extrema as interior points.

This is one of the most important procedures in differential calculus.

Suppose you are asked to find the absolute maximum and minimum of f(x) on [a, b].

Use the following process.

Step 1: Find the derivative
  Calculate f'(x).

Step 2: Find critical numbers
  Solve f'(x) = 0 and find points where f'(x) does not exist.

Step 3: Keep only critical numbers inside the interval
  Only use critical numbers satisfying a ≤ x ≤ b.

Step 4: Evaluate the function at critical numbers
  Calculate f(c₁), f(c₂), ...

Step 5: Evaluate the endpoints
  Calculate f(a) and f(b).

Step 6: Compare all values
  The largest value is the Absolute maximum.
  The smallest value is the Absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the closed interval method to a cubic function. For f(x) = x³ - 3x² + 2 on [-1, 3], we first compute f'(x) = 3x² - 6x = 3x(x-2). Critical numbers are x = 0 and x = 2, both within the interval. We evaluate f at these and at the endpoints: f(-1) = -2, f(0) = 2, f(2) = -2, f(3) = 2. Comparing, the largest value is 2 (at x=0 and x=3), and the smallest is -2 (at x=-1 and x=2). So the absolute maximum is 2, occurring at two points, and the absolute minimum is -2, also occurring at two points. This example shows that extrema can be achieved at multiple points. It also demonstrates that endpoints can tie with interior points for the extremum value.

Find the absolute maximum and minimum of:
  f(x) = x³ - 3x² + 2

on:
  [-1, 3]

Step 1: Differentiate
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Step 2: Find critical numbers
  Set: 3x(x - 2) = 0

  Therefore:
    x = 0, x = 2

  Both are inside [-1, 3].

Step 3: Evaluate the endpoints
  At x = -1:
    f(-1) = (-1)³ - 3(-1)² + 2
    = -1 - 3 + 2 = -2

  At x = 3:
    f(3) = 27 - 27 + 2 = 2

Step 4: Evaluate the critical points
  At x = 0:
    f(0) = 2

  At x = 2:
    f(2) = 8 - 12 + 2 = -2

Create a comparison:

  x       f(x)
  ───────────────
  -1      -2
   0       2
   2      -2
   3       2

The largest value is 2, and the smallest value is -2.

Therefore:
  Absolute maximum = 2
  occurring at x = 0 and x = 3

and:
  Absolute minimum = -2
  occurring at x = -1 and x = 2

Notice that an absolute maximum or minimum can occur at more than one point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. ENDPOINTS CAN BE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common mistake in optimization is to focus only on critical points and ignore the endpoints. However, endpoints are always candidates for absolute extrema on a closed interval. For example, consider f(x) = x² on [-3, 1]. The derivative is 2x, giving a critical point at x = 0. Evaluating f(-3) = 9, f(0) = 0, f(1) = 1 shows that the absolute maximum is 9 at x = -3, which is an endpoint. If you had only considered the critical point, you would have missed the maximum. This example highlights why the closed interval method explicitly includes endpoints. In many real-world problems, the optimal solution occurs at a boundary, so checking endpoints is not just a formality it is essential.

This is a very common source of mistakes.

When finding absolute extrema on a closed interval, always check the endpoints.

For example:
  f(x) = x² on [-3, 1]

The derivative is:
  f'(x) = 2x

The critical number is:
  x = 0

Evaluate:
  f(-3) = 9
  f(0) = 0
  f(1) = 1

Therefore:
  Absolute maximum = 9 at x = -3
and:
  Absolute minimum = 0 at x = 0

The maximum occurs at an endpoint, not at a critical point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first derivative test is a method to classify critical points as local maxima or minima. It relies on the sign change of the derivative. If f'(x) changes from positive to negative as x passes through c, then f has a local maximum at c. If it changes from negative to positive, then f has a local minimum at c. If there is no sign change, the critical point is neither a max nor a min (it may be an inflection point). This test is straightforward and applies to all critical points where the derivative exists (or where it is undefined but the function is continuous). It is often used in conjunction with the closed interval method to identify which critical points are local extrema, and then combined with endpoints to find absolute extrema.

The first derivative can tell us whether a critical point is a local maximum or minimum.

Local maximum:
  If f'(x) > 0 before c, and f'(x) < 0 after c, then:
    Local maximum at x = c
  because the function changes: increasing → decreasing

Local minimum:
  If f'(x) < 0 before c, and f'(x) > 0 after c, then:
    Local minimum at x = c
  because the function changes: decreasing → increasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative test provides another way to classify critical points. If f'(c) = 0, compute f''(c). If f''(c) > 0, the graph is concave up, indicating a local minimum. If f''(c) < 0, the graph is concave down, indicating a local maximum. If f''(c) = 0, the test is inconclusive; you would need to use the first derivative test or higher-order derivatives. This test is often easier when the second derivative is simple to compute. However, it only works when f''(c) exists and is nonzero. It is a useful alternative to the first derivative test, especially for polynomials. Both tests are important tools for analyzing the shape of a function.

Another method is the Second Derivative Test.

Suppose f'(c) = 0.

Calculate f''(c).

If f''(c) > 0:
  then the graph is concave upward and Local minimum occurs at x = c.

If f''(c) < 0:
  then the graph is concave downward and Local maximum occurs at x = c.

If f''(c) = 0:
  the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. MAXIMUM AND MINIMUM IN REAL-WORLD PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maximum and minimum values are not just abstract mathematical concepts; they are used to solve practical optimization problems. In business, you might want to maximize profit or minimize cost. In manufacturing, you might minimize material usage for a given volume. In physics, you might maximize the height of a projectile. In geometry, you might maximize the area of a rectangle with a fixed perimeter. These problems all follow the same pattern: define a function that represents the quantity to be optimized, find its domain (often a closed interval), and then find the absolute maximum or minimum using the closed interval method. The derivative is the tool that locates the critical points, and the comparison of values gives the optimal solution. Understanding how to apply these concepts to real-world scenarios is one of the most valuable skills in calculus.

Maximum and minimum values are not only about graphs.

They are used for optimization.

For example:
  • Business: Find the maximum profit
  • Manufacturing: Find the minimum production cost
  • Geometry: Find the maximum area
  • Engineering: Find the minimum material required
  • Physics: Find maximum height

These are called optimization problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT RELATIONSHIP WITH INCREASING AND DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maximum and minimum values are intimately connected to the increasing/decreasing behavior of a function. A local maximum occurs where the function changes from increasing to decreasing. A local minimum occurs where it changes from decreasing to increasing. The derivative indicates whether a function is increasing (f'(x) > 0) or decreasing (f'(x) < 0). Therefore, by analyzing the sign of the derivative, we can locate where these changes occur, which are precisely the critical points. This relationship is the basis for the first derivative test. It also explains why extrema are so important: they mark the transition between rising and falling. Understanding this connection helps in sketching graphs and in understanding the overall behavior of functions.

Maximum and minimum values are closely related to the behavior of a function.

At a local maximum:
  Increasing → Decreasing

At a local minimum:
  Decreasing → Increasing

This is why the derivative is so useful.

The derivative tells us whether the function is:
  • f'(x) > 0 → increasing
  • f'(x) < 0 → decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The entire process of finding maximum and minimum values can be summarized as: start with a function, differentiate to find critical points, then evaluate those points and the endpoints (if on a closed interval) to find the absolute extrema. This workflow is the core of optimization in calculus. It is systematic and reliable, provided the function is continuous on the interval. The derivative test helps classify critical points as local maxima or minima, but for absolute extrema, we must compare all candidates. This process is used repeatedly in calculus and its applications. Mastering it is essential for solving real-world problems that involve maximizing or minimizing quantities.

You can think about maximum and minimum values like this:

  Function → Derivative → Critical Points → Extrema

For absolute extrema on a closed interval:
  Critical Points + Endpoints → Compare Function Values

This is one of the most important workflows in Calculus 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key definitions and tests related to extrema. It is a handy reference for solving problems. Remember that absolute extrema are global, while local extrema are regional. Critical points are the only possible locations for local extrema, but they must be tested. The first derivative test uses sign changes of f', while the second derivative test uses the concavity at the critical point. Endpoints are always candidates for absolute extrema on closed intervals.

"image": "src/assets_2.3/225.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central message of this topic is that maximum and minimum values are essential for understanding the behavior of functions and for solving optimization problems. The absolute maximum is the largest output over the domain, and the absolute minimum is the smallest. They are guaranteed by the Extreme Value Theorem for continuous functions on closed intervals. To find them, we use the closed interval method: differentiate, find critical points, evaluate endpoints, and compare. Local extrema are found similarly but only compare nearby values. The derivative plays a key role in locating and classifying these extrema. Whether you are maximizing profit, minimizing cost, or simply sketching a graph, the ability to find maximum and minimum values is a fundamental skill in calculus.

Key Formulas and Ideas to Remember:

  Absolute maximum:
    f(c) ≥ f(x) for all x

  Absolute minimum:
    f(c) ≤ f(x) for all x

  Critical number:
    f'(c) = 0 or f'(c) does not exist, provided c is in the domain.

  Local maximum:
    + → − for the sign of f'

  Local minimum:
    − → + for the sign of f'

  Extreme Value Theorem:
    If f is continuous on [a, b], then f has an absolute maximum and 
    absolute minimum on that interval.

  Absolute extrema procedure:
    Find f'(x) → Find critical numbers → Check endpoints → Evaluate → Compare

The most important distinction is that a local maximum/minimum only compares nearby values, while an absolute maximum/minimum compares all values in the specified domain or interval.
  `,
  examples: [
    "f(x) = -x² + 4 on [-2,2] → maximum value 4 at x = 0",
    "f(x) = x² - 4x + 5 → minimum value 1 at x = 2",
    "f(x) = -x² + 6x on [0,6] → absolute maximum 9 at x = 3",
    "f(x) = x³ - 3x² + 2 on [-1,3] → max 2 at x=0,3; min -2 at x=-1,2",
    "f(x) = x² on [-3,1] → max 9 at x=-3, min 0 at x=0",
    "Critical point: f'(c) = 0 or undefined",
    "Second derivative test: f''(c) > 0 → min, f''(c) < 0 → max",
  ],
};

export default topic;