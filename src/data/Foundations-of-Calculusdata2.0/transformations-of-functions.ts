const topic = {
  id: "transformations-of-functions",
  title: "Transformations of Functions",
  summary:
    "Vertical and horizontal translations, vertical stretch and compression, reflections, combining transformations, and applications in calculus.",
  details: `
Transformations of functions are changes made to the graph of a function that move, stretch, compress, or reflect its original shape. Instead of creating an entirely new graph from the beginning, we can use a known parent function and transform it.

In simple terms: Function transformations allow us to change the position, size, or direction of a graph while keeping its basic shape.

The general transformation form is:

  g(x) = af(b(x - h)) + k

where the values of a, b, h, and k determine how the original function changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PARENT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A parent function is the simplest form of a family of functions.

Example: f(x) = x² is the parent function for quadratic functions.

Other common parent functions include:
  • f(x) = x
  • f(x) = |x|
  • f(x) = √x
  • f(x) = x³

Understanding the parent function makes it easier to understand its transformations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. VERTICAL TRANSLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can be moved up or down by adding or subtracting a constant outside the function.

Moving Up
───────────

Consider: f(x) = x²

If we create: g(x) = x² + 3, the graph moves 3 units upward.

The general rule is: g(x) = f(x) + k

If k > 0, the graph moves upward.

Moving Down
────────────

Consider: g(x) = x² - 4

The graph of x² moves 4 units downward.

So: g(x) = f(x) - 4 represents a downward translation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HORIZONTAL TRANSLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can also be moved left or right by changing the input.

Consider: f(x) = x²

If: g(x) = (x - 2)², the graph moves 2 units to the right.

If: g(x) = (x + 2)², the graph moves 2 units to the left.

The important rule is:
  • f(x - h) → h units right
  • f(x + h) → h units left

The signs can seem backwards, so it is important to remember that horizontal transformations happen inside the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VERTICAL STRETCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiplying a function by a number changes its vertical size.

Consider: f(x) = x²

Now: g(x) = 2x²

The graph is stretched vertically by a factor of 2.

The values of y become twice as large.

Example: f(2) = 4 while g(2) = 2(2²) = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VERTICAL COMPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the function is multiplied by a number between 0 and 1, the graph becomes vertically compressed.

Example: g(x) = ½x²

The graph is compressed vertically by a factor of ½.

The graph becomes wider compared with f(x) = x².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. REFLECTION ACROSS THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiplying a function by -1 reflects the graph across the x-axis.

Example: f(x) = x²

If: g(x) = -x², the parabola is reflected across the x-axis.

The original graph opens upward: y = x²

The transformed graph opens downward: y = -x²

Therefore: -f(x) → reflection across the x-axis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. REFLECTION ACROSS THE Y-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Replacing x with -x reflects a graph across the y-axis.

The transformation is: f(-x)

Example: f(x) = x³

Then: g(x) = (-x)³ = -x³

This produces the reflection of the original graph across the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMBINING TRANSFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiple transformations can be applied to a function at the same time.

Consider: g(x) = 2(x - 3)² + 4

Starting from f(x) = x², we can identify the transformations.

Step 1: x - 3
  (x - 3)² moves the graph: 3 units right

Step 2: Multiply by 2
  2(x - 3)² causes a: vertical stretch by a factor of 2

Step 3: Add 4
  2(x - 3)² + 4 moves the graph: 4 units upward

Therefore, the transformed function is:
  g(x) = 2(x - 3)² + 4

with:
  • Right 3 units
  • Vertical stretch by 2
  • Up 4 units

The vertex changes from (0, 0) to (3, 4).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL TRANSFORMATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful form to remember is:

  g(x) = af(b(x - h)) + k

Each part has a particular effect.

  Part        Transformation
  ─────────────────────────────────────────────────────────────
  a           Vertical stretch/compression
  a < 0       Reflection across x-axis
  b           Horizontal stretch/compression
  b < 0       Reflection across y-axis
  h           Horizontal translation
  k           Vertical translation

Example: g(x) = 3f(x - 2) + 5 means:
  • 2 units right
  • Vertical stretch by 3
  • 5 units up

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TRANSFORMATION OF AN ABSOLUTE VALUE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the parent function: f(x) = |x|

Now transform it into: g(x) = |x - 2| + 3

The transformation is:
  • x - 2 which moves the graph: 2 units right
  • +3 moves it: 3 units up

The vertex changes from (0, 0) to (2, 3).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TRANSFORMATION OF A SQUARE ROOT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the parent function: f(x) = √x

Now: g(x) = √(x - 4) + 2

The x - 4 moves the graph: 4 units right

And +2 moves it: 2 units up

The starting point changes from (0, 0) to (4, 2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. TRANSFORMATION OF A CUBIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

Now: g(x) = -(x + 1)³ - 2

Let's identify the transformations:
  • x + 1 moves the graph: 1 unit left
  • Negative sign -(x + 1)³ reflects it across the: x-axis
  • -2 moves it: 2 units down

Therefore, the graph is transformed by:
  • 1 unit left
  • Reflection across the x-axis
  • 2 units down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TRANSFORMATIONS AND GRAPHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transformations are useful because you do not always need to calculate many individual points.

Example: If you already know the graph of f(x) = x², you can quickly graph g(x) = (x - 5)² + 2 by moving the original parabola:
  • 5 units right
  • 2 units up

The shape of the parabola remains the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TRANSFORMATIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transformations are important in Calculus because they help us quickly understand how functions behave.

They can change:
  • The location of a graph
  • The maximum and minimum values
  • The domain
  • The range
  • The intercepts
  • The rate of change
  • The shape and orientation of a function

Example: If we know the graph of f(x) = x², we can understand g(x) = -(x - 3)² + 5 without starting from scratch.

The graph is:
  • Reflected across the x-axis
  • Shifted 3 units right
  • Shifted 5 units up

Its vertex is (3, 5) and it opens downward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK TRANSFORMATION RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important rules are:

Vertical Translation
  • f(x) + k → k units up
  • f(x) - k → k units down

Horizontal Translation
  • f(x - h) → h units right
  • f(x + h) → h units left

Vertical Stretch/Compression
  • af(x)
  • If |a| > 1, vertical stretch
  • If 0 < |a| < 1, vertical compression

Reflection
  • -f(x) → x-axis reflection
  • f(-x) → y-axis reflection

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Transformations of Functions, remember:

  • Translation moves a graph.
  • Stretch/Compression changes its size.
  • Reflection changes its orientation.

The general form: g(x) = af(b(x - h)) + k allows us to combine several transformations into one function.

The key idea to remember is:

  Transformations of functions allow us to modify an existing graph by shifting, stretching, compressing, or reflecting it. Instead of graphing every function from the beginning, we can start with a parent function and apply transformations to understand the new graph. These transformations are important in Calculus because they help us quickly analyze the domain, range, intercepts, maximum and minimum values, and overall behavior of functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transformations of Functions are fundamental tools in Mathematics that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Parent Functions
  ✓ Vertical Translation (Up/Down)
  ✓ Horizontal Translation (Left/Right)
  ✓ Vertical Stretch
  ✓ Vertical Compression
  ✓ Reflection Across the x-Axis
  ✓ Reflection Across the y-Axis
  ✓ Combining Transformations
  ✓ General Transformation Form
  ✓ Transformations of Specific Functions
  ✓ Transformations and Graphing
  ✓ Transformations in Calculus
  `,
  examples: [
    "Transform f(x) = x² to g(x) = x² + 3 → 3 units up",
    "Transform f(x) = x² to g(x) = x² - 4 → 4 units down",
    "Transform f(x) = x² to g(x) = (x - 2)² → 2 units right",
    "Transform f(x) = x² to g(x) = (x + 2)² → 2 units left",
    "Transform f(x) = x² to g(x) = 2x² → vertical stretch by 2",
    "Transform f(x) = x² to g(x) = ½x² → vertical compression by ½",
    "Transform f(x) = x² to g(x) = -x² → reflection across x-axis",
    "Transform f(x) = x³ to g(x) = (-x)³ → reflection across y-axis",
    "Combine transformations: g(x) = 2(x - 3)² + 4 → right 3, stretch 2, up 4",
    "Transform |x| to g(x) = |x - 2| + 3 → right 2, up 3",
    "Transform √x to g(x) = √(x - 4) + 2 → right 4, up 2",
    "Transform x³ to g(x) = -(x + 1)³ - 2 → left 1, reflect x-axis, down 2",
    "Identify transformations: g(x) = 3f(x - 2) + 5 → right 2, stretch 3, up 5",
  ],
};

export default topic;