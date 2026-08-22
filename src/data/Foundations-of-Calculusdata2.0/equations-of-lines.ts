const topic = {
  id: "equations-of-lines",
  title: "Equations of Lines",
  summary:
    "Slope, slope-intercept form, point-slope form, standard form, horizontal and vertical lines, parallel and perpendicular lines.",
  details: `
An equation of a line is a mathematical expression used to describe the relationship between the points on a straight line. Lines are one of the most important concepts in coordinate geometry and Calculus because they help us understand slope, direction, rate of change, graphs, and linear functions.

In simple terms: An equation of a line tells us how the x-coordinate and y-coordinate are related.

A line is commonly written as:

  y = mx + b

where:
  m = slope of the line
  b = y-intercept
  x = independent variable
  y = dependent variable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SLOPE OF A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope describes the steepness and direction of a line.

For two points:

  (x₁, y₁) and (x₂, y₂)

the slope is:

  m = (y₂ - y₁) / (x₂ - x₁)

The slope can be positive, negative, zero, or undefined.

Positive Slope
───────────────

A line has a positive slope when it rises from left to right.

Example: y = 2x + 1 has m = 2

As x increases, y also increases.

Negative Slope
───────────────

A line has a negative slope when it falls from left to right.

Example: y = -3x + 4 has m = -3

As x increases, y decreases.

Zero Slope
───────────

A horizontal line has a slope of zero.

Example: y = 5 has m = 0

The value of y remains constant regardless of the value of x.

Undefined Slope
────────────────

A vertical line has an undefined slope because its x-coordinate remains constant.

Example: x = 4

The line is vertical and its slope is undefined.

This happens because the denominator in the slope formula becomes zero:

  m = (y₂ - y₁) / (x₂ - x₁)

when x₂ - x₁ = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SLOPE-INTERCEPT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most common form of a line equation is the slope-intercept form:

  y = mx + b

where m represents the slope and b represents the y-intercept.

Example: y = 3x + 2 has m = 3 and b = 2

Therefore, the line has a slope of 3 and crosses the y-axis at (0, 2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE: IDENTIFYING SLOPE AND INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: y = -2x + 5

Comparing it with y = mx + b, we can identify:

  m = -2 and b = 5

Therefore, the line has a negative slope and crosses the y-axis at (0, 5).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POINT-SLOPE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important form is the point-slope form:

  y - y₁ = m(x - x₁)

This form is useful when we know:
  • the slope m
  • one point (x₁, y₁) on the line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: POINT-SLOPE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a line has a slope of m = 2 and passes through (3, 4).

Using: y - y₁ = m(x - x₁), we get:

  y - 4 = 2(x - 3)

Expand:

  y - 4 = 2x - 6

Therefore:

  y = 2x - 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EQUATION OF A LINE GIVEN TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If two points are given, we can first calculate the slope and then use the point-slope formula.

Suppose: P(1, 2) and Q(5, 10)

First, calculate the slope:

  m = (10 - 2) / (5 - 1)
  m = 8 / 4
  m = 2

Using the point (1, 2):

  y - 2 = 2(x - 1)

Simplify:

  y - 2 = 2x - 2

Therefore:

  y = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STANDARD FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A line can also be written in standard form:

  Ax + By = C

where A, B, and C are constants.

Example: 2x + 3y = 12

To convert it into slope-intercept form:

  3y = -2x + 12
  y = -⅔x + 4

Therefore: m = -⅔ and b = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HORIZONTAL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal line has the form:

  y = c

where c is a constant.

Example: y = 7

Every point on this line has a y-coordinate equal to 7.

Some points include: (0, 7), (2, 7), (5, 7)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. VERTICAL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical line has the form:

  x = c

where c is a constant.

Example: x = 3

Every point on this line has an x-coordinate equal to 3.

Some points include: (3, 0), (3, 2), (3, 5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. PARALLEL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two lines are parallel when they have the same slope but different y-intercepts.

Example: y = 2x + 1 and y = 2x - 5

Both have m = 2. Therefore, they are parallel.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PERPENDICULAR LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two non-vertical lines are perpendicular when their slopes are negative reciprocals of each other.

If one line has m₁ = 2, then a perpendicular line has m₂ = -½.

Their slopes satisfy: m₁ · m₂ = -1

Example: 2(-½) = -1

Therefore, the two lines are perpendicular.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FINDING THE X-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The x-intercept is the point where a line crosses the x-axis.

At the x-axis: y = 0

Example: y = 2x + 6

Set y = 0:

  0 = 2x + 6
  2x = -6
  x = -3

The x-intercept is: (-3, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING THE Y-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The y-intercept is the point where a line crosses the y-axis.

At the y-axis: x = 0

For y = 2x + 6, set x = 0:

  y = 2(0) + 6
  y = 6

The y-intercept is: (0, 6)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. LINES AND RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope of a line represents its rate of change.

Example: y = 4x + 2 has m = 4

This means that for every increase of 1 unit in x, the value of y increases by 4 units.

This idea becomes extremely important in Calculus because the derivative measures the instantaneous rate of change of a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EQUATIONS OF LINES IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Equations of lines provide an important foundation for understanding derivatives and tangent lines.

A tangent line describes the behavior of a curve at a particular point.

The general point-slope equation:

  y - y₁ = m(x - x₁)

can be used to find the equation of a tangent line when the slope and a point are known.

In Calculus, the derivative f'(x) can provide the slope of a tangent line to a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Equations of Lines, make sure you understand:

  • Slope
  • Slope-Intercept Form
  • Point-Slope Form
  • Standard Form
  • Horizontal Lines
  • Vertical Lines
  • Parallel Lines
  • Perpendicular Lines
  • x-Intercept
  • y-Intercept

The key formulas are:

  m = (y₂ - y₁) / (x₂ - x₁)
  y = mx + b
  y - y₁ = m(x - x₁)
  Ax + By = C

The key idea to remember is:

  An equation of a line describes the relationship between x and y, while the slope tells us the line's direction and rate of change. Understanding equations of lines provides an important foundation for functions, graphs, derivatives, tangent lines, and other major topics in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Equations of Lines are fundamental concepts in coordinate geometry that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ Slope of a Line
  ✓ Positive, Negative, Zero, and Undefined Slopes
  ✓ Slope-Intercept Form (y = mx + b)
  ✓ Point-Slope Form (y - y₁ = m(x - x₁))
  ✓ Standard Form (Ax + By = C)
  ✓ Horizontal Lines (y = c)
  ✓ Vertical Lines (x = c)
  ✓ Parallel Lines (same slope)
  ✓ Perpendicular Lines (negative reciprocal slopes)
  ✓ x-Intercept and y-Intercept
  ✓ Lines and Rate of Change
  ✓ Equations of Lines in Calculus
  `,
  examples: [
    "Find the slope of a line through (1,2) and (5,10) → m = 2",
    "Identify slope and y-intercept: y = -2x + 5 → m = -2, b = 5",
    "Write equation in slope-intercept form: slope 2, through (3,4) → y = 2x - 2",
    "Write equation through (1,2) and (5,10) → y = 2x",
    "Convert 2x + 3y = 12 to slope-intercept form → y = -⅔x + 4",
    "Identify horizontal line: y = 7 → m = 0",
    "Identify vertical line: x = 3 → undefined slope",
    "Determine if lines are parallel: y = 2x + 1 and y = 2x - 5 → parallel",
    "Determine if lines are perpendicular: m₁ = 2 and m₂ = -½ → perpendicular",
    "Find x-intercept of y = 2x + 6 → (-3, 0)",
    "Find y-intercept of y = 2x + 6 → (0, 6)",
  ],
};

export default topic;