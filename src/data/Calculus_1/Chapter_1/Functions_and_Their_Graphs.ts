// filename: functions-and-their-graphs.ts

const topic = {
  id: "functions-and-their-graphs",
  title: "Functions and Their Graphs",
  summary:
    "A function is a relationship where every input has exactly one output, represented using equations, tables, ordered pairs, or graphs, with domain, range, and the Vertical Line Test.",
  details: `
A function is one of the most important concepts in mathematics and is especially important in Algebra and Calculus. A function describes a relationship between two quantities, usually represented by x and y. It shows how one quantity depends on another.

In simple terms, a function takes an input, performs a rule or operation, and produces exactly one output.

For example:
  f(x) = 2x + 3

If we input x = 2, then:
  f(2) = 2(2) + 3 = 7

The input is 2, and the output is 7.

Functions are useful because they allow us to describe how quantities change. Their graphs allow us to visualize that change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a special type of relationship in which every input has exactly one output.

We can think of a function like a machine:
  Input → Rule → Output

For example:
  f(x) = x + 5

If we use different values of x:
  f(1) = 1 + 5 = 6
  f(2) = 2 + 5 = 7
  f(3) = 3 + 5 = 8

The function takes each input and produces one specific output.

The most important rule is:
  One input cannot have two different outputs.

For example, the relationship:
  x = 2 → y = 3
and:
  x = 2 → y = 5

is not a function because the same input, 2, produces two different outputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FUNCTION NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions are commonly written using function notation.

Instead of writing:
  y = x² + 3

we can write:
  f(x) = x² + 3

The symbol f(x) is read as "f of x."

It does not mean f × x.

Instead, it represents the output of the function f when the input is x.

Example of Function Evaluation:
  Suppose f(x) = 3x + 2.

  Find f(4).

  Substitute 4 for x:
    f(4) = 3(4) + 2
    f(4) = 12 + 2
    f(4) = 14

  This means that when the input is 4, the output is 14.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DOMAIN AND RANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every function has a domain and a range.

Domain:
  The domain is the set of all possible input values.
  These are the values that can be substituted for x.

For example:
  f(x) = x + 3
  Any real number can be substituted for x.
  Therefore, the domain is:
    (-∞, ∞)

Range:
  The range is the set of all possible output values.
  These are the possible values of f(x).

For the function:
  f(x) = x + 3
  the output can also be any real number.
  Therefore:
    Range = (-∞, ∞)

Example with Restrictions:
  Consider f(x) = √x.

  The square root of a negative number is not a real number.
  Therefore:
    x ≥ 0

  The domain is:
    [0, ∞)

  The range is also:
    [0, ∞)
  because the square root cannot produce a negative real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FUNCTIONS AS ORDERED PAIRS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also be represented as a collection of ordered pairs.

For example:
  {(1, 3), (2, 5), (3, 7)}

The inputs are:
  1, 2, 3

The outputs are:
  3, 5, 7

Since each input has only one output, this relationship is a function.

However, consider:
  {(1, 3), (1, 5), (2, 7)}

This is not a function because the input 1 has two different outputs:
  3 and 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FUNCTIONS AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A graph is a visual representation of a function.

For example:
  f(x) = x + 1

We can create a table of values:

  x      f(x) = x + 1
  ────────────────────
  -2     -1
  -1      0
   0      1
   1      2
   2      3

The corresponding points are:
  (-2, -1), (-1, 0), (0, 1), (1, 2), (2, 3)

When these points are plotted, they form a straight line.

The graph allows us to see how the output changes as the input changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE VERTICAL LINE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One way to determine whether a graph represents a function is by using the Vertical Line Test.

The rule is simple:
  If a vertical line intersects the graph at more than one point, the graph is not a function.

For example:
  y = x²

This graph is a function because every vertical line intersects it at only one point.

However, a circle:
  x² + y² = 25

is not a function.

For some x-values, there are two y-values.

For example, when x = 0, we get:
  y = 5 and y = -5

A vertical line at x = 0 intersects the circle at two points.

Therefore, a complete circle fails the Vertical Line Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMMON TYPES OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are many different types of functions.

Linear Function:
  A linear function has the general form:
    f(x) = mx + b
  Its graph is a straight line.
  Example:
    f(x) = 2x + 1

Quadratic Function:
  A quadratic function contains x².
  Example:
    f(x) = x²
  Its graph is a U-shaped curve called a parabola.

Cubic Function:
  A cubic function contains x³.
  Example:
    f(x) = x³
  Its graph is a curved shape that changes direction around the origin.

Absolute Value Function:
  Example:
    f(x) = |x|
  Its graph forms a V-shape.

Square Root Function:
  Example:
    f(x) = √x
  The graph begins at the origin and extends to the right.

Rational Function:
  A rational function contains a variable in the denominator.
  Example:
    f(x) = 1/x
  The graph has two separate branches because the function is undefined when x = 0.

Exponential Function:
  Example:
    f(x) = 2ˣ
  The output changes rapidly as x increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT FEATURES OF A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the graph of a function, there are several important features to observe.

Intercepts:
  An x-intercept occurs where y = 0.
  A y-intercept occurs where x = 0.
  These points show where the graph crosses the coordinate axes.

Increasing and Decreasing:
  A function is increasing when the graph rises as we move from left to right.
  A function is decreasing when the graph falls as we move from left to right.

For example:
  f(x) = x² is decreasing on the left side of its vertex and increasing on the right side.

Maximum and Minimum:
  A maximum is the highest point of a function within a specific interval.
  A minimum is the lowest point of a function within a specific interval.

For example:
  f(x) = x² has a minimum at (0, 0) because no other point on the graph has a smaller y-value.

Symmetry:
  Some functions have symmetrical graphs.

For example:
  f(x) = x² is symmetrical about the y-axis.
  This means that the left and right sides of the graph are mirror images.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TRANSFORMATIONS OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can be transformed by changing its equation.

Consider the parent function:
  f(x) = x²

Vertical Shift:
  f(x) = x² + 3
  The graph moves 3 units upward.

Horizontal Shift:
  f(x) = (x - 2)²
  The graph moves 2 units to the right.

Reflection:
  f(x) = -x²
  The graph is reflected across the x-axis.

Vertical Stretch:
  f(x) = 2x²
  The graph becomes narrower because the y-values are multiplied by 2.

These transformations allow us to predict how a graph will change without plotting every single point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions are the foundation of Calculus.

Calculus studies how functions behave and how they change.

For example, given f(x) = x², we can study:

Limits:
  What value does the function approach as x approaches a certain value?

Continuity:
  Does the graph have breaks, holes, or jumps?

Derivatives:
  How fast is the function changing?

Integrals:
  What is the accumulated area or total change related to the function?

Maximum and Minimum Values:
  Where does the function reach its highest or lowest values?

Without functions, most concepts in Calculus would not be possible because Calculus is largely concerned with analyzing mathematical relationships and changes represented by functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. REAL-LIFE APPLICATIONS OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions are used to describe many real-life relationships.

Distance and Time:
  The distance traveled by an object may depend on time.
    d = f(t)

Population Growth:
  The population of a city can depend on time.
    P = f(t)

Temperature:
  Temperature may change depending on the time of day.
    T = f(t)

Cost:
  The total cost of products may depend on the number of items purchased.
    C = f(x)

These examples show that functions are useful because they describe how one quantity depends on another.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function Type         General Form            Graph Shape
  ──────────────────────────────────────────────────────────────────────────
  Linear                f(x) = mx + b           Straight line
  Quadratic             f(x) = x²               Parabola (U-shaped)
  Cubic                 f(x) = x³               S-shaped curve
  Absolute Value        f(x) = |x|              V-shaped
  Square Root           f(x) = √x               Starts at origin, increases
  Rational              f(x) = 1/x              Two separate branches
  Exponential           f(x) = aˣ               Rapidly increasing/decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a mathematical relationship where every input has exactly one output.

Functions can be represented using:
  • Equations
  • Tables
  • Ordered pairs
  • Graphs

The domain represents the possible inputs, while the range represents the possible outputs.

The Vertical Line Test helps determine whether a graph represents a function.

The most important idea to remember is:

  A function takes an input and assigns exactly one output to it.

Graphs allow us to visualize how functions behave and how their outputs change as the inputs change. Understanding functions and their graphs is essential for studying Algebra and is one of the most important foundations of Calculus.
  `,
  examples: [
    "f(x) = 2x + 3 → f(4) = 11",
    "f(x) = x² → domain (-∞, ∞), range [0, ∞)",
    "f(x) = √x → domain [0, ∞), range [0, ∞)",
    "Vertical Line Test: y = x² is a function; circle is not",
    "Linear: f(x) = 2x + 1",
    "Quadratic: f(x) = x²",
    "Transformations: f(x) = x² + 3 shifts up 3",
  ],
};

export default topic;