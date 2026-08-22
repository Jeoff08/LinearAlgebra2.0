// filename: distance-optimization.ts

const topic = {
  id: "distance-optimization",
  title: "Distance Optimization",
  summary:
    "Using calculus to find the shortest or longest possible distance under a given condition, including finding the closest point on a curve, line, or between geometric objects.",
  details: `
Distance Optimization is a type of calculus optimization problem where we use derivatives to find the shortest or longest possible distance under a given condition.

It is especially useful for finding:

  • the shortest distance between a point and a curve
  • the closest point on a line or curve
  • the shortest path between locations
  • the minimum distance between geometric objects
  • the point where two paths or objects are closest

The central idea is:

Use calculus to find where the distance is minimized or maximized.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS DISTANCE OPTIMIZATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have a point:
  P = (a, b)

and a curve:
  y = f(x)

You may be asked:

  Find the point on the curve that is closest to P.

This is a distance minimization problem.

The distance formula is:
  d = √((x - a)² + (y - b)²)

Since y = f(x), we can write:
  d(x) = √((x - a)² + (f(x) - b)²)

Then calculus can be used to find the minimum distance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE DISTANCE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For two points:
  (x₁, y₁) and (x₂, y₂)

the distance is:
  d = √((x₂ - x₁)² + (y₂ - y₁)²)

This comes from the Pythagorean theorem.

The horizontal difference is:
  Δx = x₂ - x₁

The vertical difference is:
  Δy = y₂ - y₁

Therefore:
  d² = (Δx)² + (Δy)²
and:
  d = √(d²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY WE USUALLY OPTIMIZE d²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important tricks in distance optimization.

Suppose:
  d = √((x - a)² + (y - b)²)

Differentiating the square root can make the problem unnecessarily complicated.

Instead, optimize:
  d²

because the square-root function is increasing.

For positive distances:
  d₁ < d₂
if and only if:
  d₁² < d₂²

Therefore:
  Minimizing d is equivalent to minimizing d²

This usually makes the calculus much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GENERAL DISTANCE OPTIMIZATION PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this process:

  Identify Point → Identify Curve → Write Distance → Use d² → 
  Differentiate → Find Critical Number → Test → Find Distance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: CLOSEST POINT ON THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  P = (3, 4)

and we want to find the point on the x-axis closest to P.

A point on the x-axis can be written as:
  Q = (x, 0)

Step 1: Write the distance
Using the distance formula:
  d = √((x - 3)² + (0 - 4)²)
Therefore:
  d = √((x - 3)² + 16)

Instead of minimizing d, minimize:
  D(x) = d²
Thus:
  D(x) = (x - 3)² + 16

Step 2: Differentiate
  D'(x) = 2(x - 3)

Set equal to zero:
  2(x - 3) = 0
Therefore:
  x = 3

Step 3: Find the point
The closest point is:
  (3, 0)

Step 4: Find the minimum distance
The distance from (3, 4) to (3, 0) is:
  4

So:
  Minimum distance = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: DISTANCE FROM A POINT TO A PARABOLA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to find the point on:
  y = x²

that is closest to:
  P = (0, 3)

A point on the parabola is:
  Q = (x, x²)

Step 1: Write the squared distance
Using:
  d² = (x₂ - x₁)² + (y₂ - y₁)²
we get:
  D(x) = (x - 0)² + (x² - 3)²
Therefore:
  D(x) = x² + (x² - 3)²

Step 2: Expand
  D(x) = x² + x⁴ - 6x² + 9
Therefore:
  D(x) = x⁴ - 5x² + 9

Step 3: Differentiate
  D'(x) = 4x³ - 10x

Factor:
  D'(x) = 2x(2x² - 5)

Set equal to zero:
  2x(2x² - 5) = 0

Thus:
  x = 0
or:
  2x² - 5 = 0
so:
  x² = 5/2
and:
  x = ±√(5/2)

These are the critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DETERMINE WHICH POINT IS CLOSEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We need to compare the values of:
  D(x) = x⁴ - 5x² + 9

At x = 0:
  D(0) = 9

At x = ±√(5/2):
Since x² = 5/2 and x⁴ = 25/4, we get:
  D = 25/4 - 5(5/2) + 9
  D = 25/4 - 25/2 + 9
  D = 25/4 - 50/4 + 36/4
  D = 11/4

Therefore:
  d = √(11/4)
  d = √11/2

The closest points are:
  (√(5/2), 5/2)
and:
  (-√(5/2), 5/2)

The minimum distance is:
  √11/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY ARE THERE TWO CLOSEST POINTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The parabola:
  y = x²

is symmetric about the y-axis.

The point:
  (0, 3)

is also on that axis.

Therefore, the closest points occur symmetrically:
  x = +√(5/2)
and:
  x = -√(5/2)

This is a useful reminder that an optimization problem can have more than one optimal point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DISTANCE BETWEEN A POINT AND A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you want the shortest distance between:
  P = (x₀, y₀)

and a line:
  Ax + By + C = 0

There is a direct formula:
  d = |Ax₀ + By₀ + C| / √(A² + B²)

This formula gives the minimum distance directly.

For example, find the distance from:
  P = (2, 3)

to:
  3x + 4y - 10 = 0

Substitute:
  d = |3(2) + 4(3) - 10| / √(3² + 4²)
  d = |6 + 12 - 10| / 5
  d = 8/5

Therefore:
  d = 8/5
or:
  d = 1.6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DISTANCE BETWEEN TWO CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance optimization can also involve two curves.

Suppose we have:
  y = f(x)
and:
  y = g(x)

The vertical distance between them at the same x-value is:
  D(x) = |f(x) - g(x)|

If the problem specifically asks for vertical distance, we can optimize this expression.

However, if it asks for the actual shortest Euclidean distance, we need to consider both horizontal and vertical differences.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SHORTEST PATH PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance optimization can also involve finding the shortest route.

For example:
  • A person is on one side of a river and wants to reach a point on the 
    opposite side using the shortest possible path.
  • Find the point on a road where a person should meet a traveler to 
    minimize total travel distance.

These problems often require:
  • Drawing a diagram
  • Defining a variable
  • Writing the total distance
  • Creating a one-variable function
  • Differentiating
  • Finding the minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: SHORTEST ROUTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a person is at:
  A = (0, 3)

and wants to reach a point on the x-axis.

Let the destination be:
  B = (x, 0)

The distance is:
  d(x) = √(x² + 9)

Minimize the squared distance:
  D(x) = x² + 9

Differentiate:
  D'(x) = 2x

Set:
  2x = 0
Thus:
  x = 0

The closest point is:
  (0, 0)
and the minimum distance is:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DISTANCE OPTIMIZATION AND REFLECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some shortest-path problems can be solved using reflection.

Suppose a path must touch a line before reaching a destination.

Instead of directly optimizing:
  d₁ + d₂

we can sometimes reflect one point across the line.

The shortest broken path becomes a straight-line distance between the original point and the reflected point.

This follows the principle:

  Shortest path involving a reflection occurs when the angles are equal.

This connects calculus optimization with geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DISTANCE OPTIMIZATION AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  D(x) = d²(x)

Then:
  D'(x) = 0
gives candidate points where the distance can be minimized.

The derivative tells us how the squared distance changes.

If D'(x) < 0:
  distance is decreasing.

If D'(x) > 0:
  distance is increasing.

Therefore, if D'(x) changes from negative to positive:
  Minimum distance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  D'(c) = 0

then examine:
  D''(c)

If D''(c) > 0:
  Local minimum

If D''(c) < 0:
  Local maximum

For most shortest-distance problems, we're primarily interested in a minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DOMAIN RESTRICTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain must always be considered.

For example, if x represents a distance, then:
  x ≥ 0

If x represents a location along a finite segment, there may be a restriction such as:
  0 ≤ x ≤ 10

A critical point outside the allowed region cannot be the solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY MINIMIZE SQUARED DISTANCE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This deserves special emphasis.

Suppose:
  d = √((x - a)² + (f(x) - b)²)

The square root can make the derivative complicated.

Instead define:
  D(x) = d²
so:
  D(x) = (x - a)² + (f(x) - b)²

Now there is no square root.

Because √x is an increasing function for x ≥ 0:
  argmin d = argmin d²

So the x-value that minimizes the distance also minimizes the squared distance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON DISTANCE OPTIMIZATION PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Point to Line:
    Find the closest point on a line.

  Point to Curve:
    Find the closest point on:
      • a parabola
      • a circle
      • a polynomial curve
      • an exponential curve

  Curve to Curve:
    Find the shortest distance between two curves.

  Shortest Path:
    Find the route with minimum total distance.

  Reflection Problems:
    Find the point on a line that minimizes a broken path.

  Geometric Distance:
    Find the minimum distance between:
      • points
      • lines
      • curves
      • surfaces
      • geometric objects

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Minimizing the wrong expression
  If d = √D, you can minimize D = d² instead.

Mistake 2: Forgetting to substitute the curve
  If y = f(x), don't leave both x and y as independent variables.

Mistake 3: Forgetting the square
  The squared distance is:
    d² = (Δx)² + (Δy)²
  not:
    Δx + Δy

Mistake 4: Ignoring the domain
  A mathematical critical number might not be physically possible.

Mistake 5: Finding a critical number without checking it
  A critical number is only a candidate.
  Use:
    • First Derivative Test
    • Second Derivative Test
    • Endpoint comparison

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                    Formula
  ────────────────────────────────────────────────────────────────
  Distance                   d = √((Δx)² + (Δy)²)
  Squared Distance           D = (Δx)² + (Δy)²
  Point-to-Line Distance     d = |Ax₀ + By₀ + C| / √(A² + B²)
  Minimum Candidate          D'(x) = 0
  Minimum Test               D''(x) > 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. PROBLEM-SOLVING TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Distance Optimization:

  1. Draw the situation
  2. Define the variable
  3. Write the distance formula
  4. Use squared distance if convenient
  5. Create D(x)
  6. Differentiate
  7. Set D'(x) = 0
  8. Find critical numbers
  9. Check the domain
  10. Determine the minimum/maximum
  11. Calculate the actual distance
  12. State the point or path

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance Optimization is essentially about finding:

  "Where is the distance smallest or largest?"

The most important trick is:

  Minimize d² instead of d

The overall process is:

  Geometry → Distance Formula → Squared Distance → D'(x) = 0 → 
  Critical Point → Minimum Distance

Easy way to remember:

  Draw it → write the distance → square it → differentiate → 
  find the critical point → check it → calculate the distance.

The key idea is that the closest point is usually found where the rate of change of the squared distance is zero, which turns a geometric shortest-distance question into a standard calculus optimization problem.
  `,
  examples: [
    "Closest point on x-axis from (3,4) → (3,0), distance = 4",
    "Closest point on y = x² from (0,3) → (±√(5/2), 5/2), distance = √11/2",
    "Distance from point (2,3) to line 3x + 4y - 10 = 0 → distance = 8/5",
    "Shortest path from (0,3) to x-axis → closest point (0,0), distance = 3",
    "Distance between two curves using vertical distance",
    "Reflection principle for shortest path problems",
  ],
};

export default topic;