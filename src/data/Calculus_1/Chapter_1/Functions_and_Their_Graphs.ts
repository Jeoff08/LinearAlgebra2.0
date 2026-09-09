// filename: functions-and-their-graphs.ts

const topic = {
  id: "functions-and-their-graphs",
  title: "Functions and Their Graphs",
  summary:
    "A function is a relationship where every input has exactly one output, represented using equations, tables, ordered pairs, or graphs, with domain, range, and the Vertical Line Test.",
  details: `
A function is one of the most important concepts in mathematics and is especially important in Algebra and Calculus. A function describes a relationship between two quantities, usually represented by x and y. It shows how one quantity depends on another. In simple terms, a function takes an input, performs a rule or operation, and produces exactly one output. For example, f(x) = 2x + 3 means that if we input x = 2, the output is f(2) = 2(2) + 3 = 7. The input is 2, and the output is 7. Functions are useful because they allow us to describe how quantities change. Their graphs allow us to visualise that change, making abstract relationships easier to understand. This foundational concept appears in nearly every branch of mathematics and is essential for modelling real‑world phenomena.

For example:
  f(x) = 2x + 3

If we input x = 2, then:
  f(2) = 2(2) + 3 = 7

The input is 2, and the output is 7.

Functions are useful because they allow us to describe how quantities change. Their graphs allow us to visualize that change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a special type of relationship in which every input has exactly one output. We can think of a function like a machine: you feed in an input, it applies a rule, and out comes a single output. For example, the function f(x) = x + 5 takes any input x, adds 5, and returns the result. If we input 1, we get 6; input 2 gives 7; input 3 gives 8. Each input produces a unique output. The most important rule is that one input cannot have two different outputs if that happens, the relationship is not a function. For instance, if x = 2 gave both y = 3 and y = 5, that would violate the definition. Functions are the building blocks of mathematical modelling because they capture predictable dependencies between variables.

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

Functions are commonly written using function notation, which gives a clear and concise way to denote the output for a given input. Instead of writing y = x² + 3, we write f(x) = x² + 3. The symbol f(x) is read as "f of x" and does not mean f multiplied by x; rather, it represents the value of the function f at the input x. This notation is especially useful when working with multiple functions, as it distinguishes between them (e.g., f(x) vs. g(x)). It also makes evaluation straightforward: to find f(4) for f(x) = 3x + 2, we substitute 4 for x and get f(4) = 3(4) + 2 = 14. Function notation is used throughout algebra, calculus, and applied mathematics because it clarifies the relationship between the independent variable (input) and the dependent variable (output).

For example:
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

Every function has a domain and a range, which describe the set of possible inputs and outputs, respectively. The domain is the set of all values that can be substituted for the independent variable (usually x) such that the function is defined. For example, for f(x) = x + 3, we can use any real number, so the domain is all real numbers, written as (-∞, ∞). The range is the set of all possible outputs (the values of f(x)) that the function can produce. For the same linear function, the range is also all real numbers. However, some functions have restrictions: for f(x) = √x, the input must be non‑negative because the square root of a negative number is not real, so the domain is [0, ∞); the range is also [0, ∞) because square roots are never negative. Understanding domain and range is crucial because it tells us which values are valid and what outputs we can expect.

For example:
  f(x) = x + 3
  Any real number can be substituted for x.
  Therefore, the domain is:
    (-∞, ∞)

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

A function can also be represented as a set of ordered pairs (x, y), where x is the input and y is the output. This representation is useful when working with discrete data or when the function is given as a list of points. For example, the set {(1, 3), (2, 5), (3, 7)} represents a function because each input (1, 2, 3) appears exactly once and has a unique output (3, 5, 7). On the other hand, the set {(1, 3), (1, 5), (2, 7)} is not a function because the input 1 is paired with two different outputs (3 and 5). This criterion that each first element appears only once is equivalent to saying that no two ordered pairs have the same first coordinate. When you see a set of ordered pairs, you can quickly check whether it defines a function by looking for duplicate inputs.

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

A graph is a visual representation of a function that helps us see its behaviour at a glance. For example, the linear function f(x) = x + 1 can be graphed by plotting points from a table of values: (−2, −1), (−1, 0), (0, 1), (1, 2), (2, 3). When connected, these points form a straight line. The graph allows us to observe trends: whether the function is increasing or decreasing, where it crosses the axes, and any symmetry it might have. Graphs are especially powerful because they turn abstract equations into a picture that we can interpret intuitively. In higher mathematics, graphs are essential for understanding limits, continuity, and derivatives. They also help us solve equations and inequalities by visualising where two functions intersect or where one lies above the other.

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

The Vertical Line Test is a visual tool to determine whether a given graph represents a function. The rule is simple: if any vertical line intersects the graph at more than one point, then the graph is not a function. This is because a vertical line at a given x‑value would correspond to multiple y‑values, meaning that one input has more than one output which violates the definition of a function. For example, the graph of y = x² is a function because every vertical line touches it at exactly one point. In contrast, a circle defined by x² + y² = 25 is not a function because a vertical line at x = 0 intersects the circle at (0, 5) and (0, −5). The Vertical Line Test is a quick and reliable way to check the function status of any graph, and it is especially useful when you are given a graph without its equation.

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

There are many different types of functions, each with its own characteristic equation and graph. Linear functions, such as f(x) = 2x + 1, have a constant slope and graph as straight lines. Quadratic functions, like f(x) = x², contain an x² term and produce U‑shaped parabolas. Cubic functions (e.g., f(x) = x³) have an S‑shaped curve that changes concavity. The absolute value function f(x) = |x| forms a V‑shape, while the square root function f(x) = √x starts at the origin and gradually rises. Rational functions, such as f(x) = 1/x, have a variable in the denominator and produce two separate branches with a vertical asymptote. Exponential functions, like f(x) = 2ˣ, grow rapidly and are used to model growth and decay. Recognising these basic types helps you predict the general shape of a graph and understand its key features even before plotting.

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

When studying the graph of a function, several key features provide insight into its behaviour. Intercepts are points where the graph crosses the axes: the x‑intercept occurs where y = 0, and the y‑intercept where x = 0. These are often the first points we plot. The function may be increasing (rising left to right) or decreasing (falling left to right) over certain intervals. A maximum is the highest point in a region, while a minimum is the lowest. For example, f(x) = x² has a minimum at (0, 0). Symmetry is another important feature: even functions (like x²) are symmetric about the y‑axis, while odd functions (like x³) have rotational symmetry about the origin. Understanding these features allows us to sketch graphs quickly and interpret the meaning of the function in context, such as determining optimal values or analyzing trends.

Intercepts:
  An x-intercept occurs where y = 0.
  A y-intercept occurs where x = 0.
  These points show where the graph crosses the coordinate axes.

Increasing and Decreasing:
  A function is increasing when the graph rises as we move from left to right.
  A function is decreasing when the graph falls as we move from left to right.

For example:
  f(x) = x² is decreasing on the left side of its vertex and increasing on the right side.

"image": "src/assets/38.png",

Maximum and Minimum:
  A maximum is the highest point of a function within a specific interval.
  A minimum is the lowest point of a function within a specific interval.

For example:
  f(x) = x² has a minimum at (0, 0) because no other point on the graph has a smaller y-value.

"image": "src/assets/39.png",

Symmetry:
  Some functions have symmetrical graphs.

For example:
  f(x) = x² is symmetrical about the y-axis.
  This means that the left and right sides of the graph are mirror images.

"image": "src/assets/40.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TRANSFORMATIONS OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can be transformed by making changes to its equation, which shifts, stretches, or reflects its graph without altering the underlying shape. Starting from a parent function like f(x) = x², we can apply various transformations. Adding a constant outside the function, as in f(x) = x² + 3, shifts the graph vertically upward by 3 units. Adding inside the argument, like f(x) = (x − 2)², shifts it horizontally to the right by 2 units. A negative sign in front, f(x) = −x², reflects the graph across the x‑axis. Multiplying by a factor greater than 1, such as f(x) = 2x², causes a vertical stretch, making the graph narrower. These transformations allow us to build a wide variety of functions from a few basic ones and to predict how changes in the equation affect the graph, which is essential for curve sketching and modelling.

Consider the parent function:
  f(x) = x²

Vertical Shift:
  f(x) = x² + 3
  The graph moves 3 units upward.

"image": "src/assets/41.png",

Horizontal Shift:
  f(x) = (x - 2)²
  The graph moves 2 units to the right.

"image": "src/assets/42.png",

Reflection:
  f(x) = -x²
  The graph is reflected across the x-axis.

"image": "src/assets/43.png",

Vertical Stretch:
  f(x) = 2x²
  The graph becomes narrower because the y-values are multiplied by 2.

"image": "src/assets/44.png",

These transformations allow us to predict how a graph will change without plotting every single point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions are the foundation of Calculus. Calculus studies how functions behave and how they change, providing tools to analyze motion, growth, and accumulation. For example, given f(x) = x², we can investigate its limits what value does the function approach as x approaches a certain number? Continuity examines whether the graph has breaks, holes, or jumps. Derivatives measure the instantaneous rate of change, telling us how fast the function is increasing or decreasing at any point. Integrals compute the accumulated area under the curve, which can represent total distance, total mass, or other accumulated quantities. Calculus also helps us find maximum and minimum values, which are critical in optimization problems. Without functions, most concepts in Calculus would not be possible because the entire subject is built upon analysing the relationships and changes represented by functions.

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

Functions are used to describe many real-life relationships where one quantity depends on another. For instance, the distance traveled by a car depends on the time spent driving, so we might write d = f(t). The population of a city grows over time, so P = f(t). Temperature varies with the time of day, so T = f(t). The total cost of purchasing items depends on the number of items bought, so C = f(x). In each case, the function captures the dependence and allows us to make predictions: given a time, we can compute distance; given a quantity, we can find cost. Functions also appear in physics (force as a function of acceleration), biology (population growth), economics (demand as a function of price), and many other fields. This universality makes functions one of the most powerful and widely applicable concepts in all of mathematics.

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

"image": "src/assets/45.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a mathematical relationship where every input has exactly one output. Functions can be represented using equations, tables, ordered pairs, or graphs, each offering a different perspective on the same relationship. The domain represents the possible inputs, while the range represents the possible outputs, and the Vertical Line Test helps determine whether a graph represents a function. The most important idea to remember is that a function takes an input and assigns exactly one output to it. Graphs allow us to visualise how functions behave and how their outputs change as the inputs change. Understanding functions and their graphs is essential for studying Algebra and is one of the most important foundations of Calculus. Whether you are solving equations, modelling growth, or analysing motion, functions are the language that describes the patterns of change in our world.

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