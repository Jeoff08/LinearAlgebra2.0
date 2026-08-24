// filename: equations-of-a-line.ts

const topic = {
  id: "equations-of-a-line",
  title: "Equations of a Line",
  summary:
    "Mathematical equations that describe the position and direction of a straight line on the coordinate plane, including slope-intercept form, point-slope form, standard form, and their applications.",
  details: `
An equation of a line is a mathematical equation that describes the position and direction of a straight line on the coordinate plane. Equations of lines are important because they help us represent relationships between two variables, usually x and y.

For example:
  y = 2x + 3

This equation represents a straight line. Every point (x, y) that satisfies the equation lies somewhere on that line.

Equations of lines are fundamental in Algebra and Calculus because they help us understand concepts such as:
  • Slope
  • Rate of change
  • Intercepts
  • Linear functions
  • Tangent lines
  • Derivatives
  • Motion and relationships between variables

Before studying more advanced Calculus concepts, it is important to understand how a line is represented mathematically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A STRAIGHT LINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A straight line is a collection of points that extends infinitely in both directions.

A line has two important characteristics:
  • Position — where the line is located on the coordinate plane.
  • Direction — whether the line rises, falls, is horizontal, or is vertical.

An equation of a line tells us both of these characteristics.

For example:
  y = 2x + 1

The number 2 tells us how the line changes or rises, while the number 1 tells us where the line crosses the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SLOPE OF A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope tells us how steep a line is and describes how the value of y changes when x changes.

The slope is represented by:
  m

The formula for slope between two points is:
  m = (y₂ - y₁)/(x₂ - x₁)

This is often described as:
  Slope = Rise / Run

The rise represents the vertical change, while the run represents the horizontal change.

Example: Finding the Slope
  Suppose we have the points:
    (2, 3) and (6, 11)

  Using the slope formula:
    m = (11 - 3)/(6 - 2)
    m = 8/4
    m = 2

  This means that for every 1 unit the line moves to the right, it moves 2 units upward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. TYPES OF SLOPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope of a line determines its direction.

Positive Slope:
  A line has a positive slope when it rises from left to right.
  Example:
    y = 2x + 1
  As x increases, y also increases.

Negative Slope:
  A line has a negative slope when it falls from left to right.
  Example:
    y = -2x + 1
  As x increases, y decreases.

Zero Slope:
  A horizontal line has a slope of zero.
  Example:
    y = 4
  No matter what value x has, the y-value remains 4.

Undefined Slope:
  A vertical line has an undefined slope.
  Example:
    x = 3
  The reason is that the horizontal change is zero, and division by zero is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SLOPE-INTERCEPT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common forms of a linear equation is the slope-intercept form:
  y = mx + b

where:
  m = slope
  b = y-intercept

The y-intercept is the point where the line crosses the y-axis.

Since every point on the y-axis has x = 0, we can find the y-intercept by substituting x = 0.

Example:
  Consider y = 3x + 2.

  The slope is:
    m = 3

  The y-intercept is:
    b = 2

  Therefore, the line crosses the y-axis at:
    (0, 2)

  The slope 3 can also be written as 3/1.
  This means:
    • Move 1 unit to the right.
    • Move 3 units upward.

  This helps us plot the line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POINT-SLOPE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important equation of a line is the point-slope form:
  y - y₁ = m(x - x₁)

This form is useful when we know:
  • The slope m
  • A point (x₁, y₁) on the line

Example:
  Suppose the slope is m = 2 and the line passes through (3, 4).

  Using the point-slope form:
    y - y₁ = m(x - x₁)

  Substitute the values:
    y - 4 = 2(x - 3)

  This is the equation of the line in point-slope form.

  We can simplify it:
    y - 4 = 2x - 6
    y = 2x - 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STANDARD FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another common form is called the standard form:
  Ax + By = C

where:
  A, B, and C are constants.
  A and B are usually integers.

Example:
  2x + 3y = 6

We can convert this into slope-intercept form.

First:
  3y = -2x + 6

Divide everything by 3:
  y = -2/3 x + 2

Now we can identify:
  m = -2/3
and:
  b = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FINDING AN EQUATION USING TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we are given two points instead of the slope.

For example:
  (1, 2) and (4, 8)

Step 1: Find the Slope
  m = (8 - 2)/(4 - 1)
  m = 6/3
  m = 2

Step 2: Use One of the Points
  Using (1, 2) and the point-slope form:
    y - y₁ = m(x - x₁)

  Substitute:
    y - 2 = 2(x - 1)

Step 3: Simplify
  y - 2 = 2x - 2
  y = 2x

Therefore, the equation of the line passing through (1, 2) and (4, 8) is:
  y = 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HORIZONTAL AND VERTICAL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Horizontal Lines:
  A horizontal line has the equation:
    y = c
  where c is a constant.

  Example:
    y = 5
  Every point on this line has a y-coordinate of 5.
  Examples of points include:
    (-2, 5), (0, 5), (3, 5)

  The slope is:
    m = 0
  because there is no vertical change.

Vertical Lines:
  A vertical line has the equation:
    x = c
  where c is a constant.

  Example:
    x = 4
  Every point on this line has an x-coordinate of 4.
  Examples include:
    (4, -2), (4, 0), (4, 5)

  The slope is undefined because the horizontal change is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PARALLEL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two lines are parallel if they never intersect.

Parallel lines have the same slope.

For example:
  y = 2x + 1
and:
  y = 2x - 5

Both lines have:
  m = 2

Therefore, they are parallel.

The y-intercepts are different, which means the lines are located at different positions, but their direction is exactly the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. PERPENDICULAR LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two lines are perpendicular if they intersect at a right angle.

The slopes of perpendicular lines are negative reciprocals.

For example, suppose m₁ = 2.

The negative reciprocal is:
  m₂ = -1/2

Therefore, a line with slope 2 is perpendicular to a line with slope -1/2.

Another example:
  If m₁ = 3/4, then m₂ = -4/3.

The product of the slopes of perpendicular non-vertical and non-horizontal lines is:
  m₁ · m₂ = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. X-INTERCEPT AND Y-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Finding the x-Intercept:
  The x-intercept occurs where y = 0.

  Consider:
    y = 2x - 6

  Set y = 0:
    0 = 2x - 6
    2x = 6
    x = 3

  Therefore, the x-intercept is:
    (3, 0)

Finding the y-Intercept:
  The y-intercept occurs where x = 0.

  Using:
    y = 2x - 6

  Substitute x = 0:
    y = 2(0) - 6
    y = -6

  Therefore, the y-intercept is:
    (0, -6)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HOW TO GRAPH AN EQUATION OF A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  y = 2x + 1

Step 1: Identify the y-Intercept
  b = 1
  Plot the point:
    (0, 1)

Step 2: Identify the Slope
  m = 2 = 2/1
  This means:
    Rise = 2
    Run = 1

  From (0, 1):
    • Move 1 unit right.
    • Move 2 units up.

  This gives another point:
    (1, 3)

Step 3: Draw the Line
  Connect the points and extend the line in both directions.

Every point on the line satisfies:
  y = 2x + 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION TO CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Equations of lines are extremely important in Calculus.

One of the main ideas in Calculus is the rate of change.

The slope of a line represents a constant rate of change.

For example:
  y = 3x + 2

The slope is 3.

This means that for every increase of 1 in x, the value of y increases by 3.

In Calculus, curves do not always have a constant slope. Instead, the slope can change from point to point.

This leads to the concept of a tangent line.

A tangent line touches a curve at a particular point and represents the instantaneous slope of the curve at that location.

This idea eventually leads to the definition of the derivative.

Therefore, understanding straight lines and their slopes is one of the most important foundations for studying Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Form                Equation                  Key Features
  ──────────────────────────────────────────────────────────────────────────────
  Slope-Intercept     y = mx + b                m = slope, b = y-intercept
  Point-Slope         y - y₁ = m(x - x₁)        m = slope, (x₁, y₁) is a point
  Standard            Ax + By = C               A, B, C are constants
  Horizontal          y = c                     slope = 0
  Vertical            x = c                     undefined slope

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An equation of a line describes the position and direction of a straight line on the coordinate plane.

The most important forms are:

Slope-Intercept Form:
  y = mx + b
  where m is the slope and b is the y-intercept.

Point-Slope Form:
  y - y₁ = m(x - x₁)
  This is useful when we know a point and the slope.

Standard Form:
  Ax + By = C
  This is another common way to represent a line.

The key idea to remember is:

  The slope tells us the direction of a line, while the equation tells us 
  the exact location of the line.

Understanding equations of lines is essential for Algebra and provides a strong foundation for studying graphs, functions, rates of change, tangent lines, and derivatives in Calculus.
  `,
  examples: [
    "Slope from (2,3) to (6,11): m = (11-3)/(6-2) = 2",
    "Slope-intercept: y = 3x + 2 → m = 3, b = 2",
    "Point-slope: through (3,4) with m = 2 → y - 4 = 2(x - 3)",
    "Standard form: 2x + 3y = 6 → y = -2/3 x + 2",
    "Horizontal: y = 5 → slope = 0",
    "Vertical: x = 4 → undefined slope",
    "Parallel lines: y = 2x + 1 and y = 2x - 5 (same slope)",
  ],
};

export default topic;