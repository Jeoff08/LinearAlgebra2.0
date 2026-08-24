// filename: maximum-and-minimum-values-of-a-function.ts

const topic = {
  id: "maximum-and-minimum-values-of-a-function",
  title: "Maximum and Minimum Values of a Function",
  summary:
    "The largest (maximum) and smallest (minimum) outputs of a function over a domain, including absolute extrema on closed intervals and local extrema using critical points.",
  details: `
The maximum and minimum values of a function describe how large or how small the output of a function can become over a particular domain or interval.

These ideas are extremely important in calculus because they help us answer questions such as:
  • What is the highest point of a graph?
  • What is the lowest point?
  • Where does a function reach its greatest value?
  • Where does a function reach its smallest value?
  • How can we optimize profit, area, distance, cost, or volume?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. MAXIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MINIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

This distinction is very important.

Suppose f(x) = x² - 4x + 5 has a minimum at (2, 1).

  • The minimum point is: (2, 1)
  • The x-value where the minimum occurs is: x = 2
  • The minimum value is: 1

So don't confuse the three.

  Term        |  Meaning
  ─────────────┼─────────────────────────────────
  x = 2       |  Where the minimum occurs
  (2, 1)      |  Minimum point
  1           |  Minimum value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

You can think about maximum and minimum values like this:

  Function → Derivative → Critical Points → Extrema

For absolute extrema on a closed interval:
  Critical Points + Endpoints → Compare Function Values

This is one of the most important workflows in Calculus 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                Definition
  ───────────────────────────────────────────────────────────────────────────
  Absolute maximum       f(c) ≥ f(x) for all x
  Absolute minimum       f(c) ≤ f(x) for all x
  Local maximum          f(c) ≥ f(x) for x near c
  Local minimum          f(c) ≤ f(x) for x near c
  Critical number        f'(c) = 0 or f'(c) does not exist
  Local max (1st test)   f': + → -
  Local min (1st test)   f': - → +
  Second derivative      f''(c) > 0 → min, f''(c) < 0 → max

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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