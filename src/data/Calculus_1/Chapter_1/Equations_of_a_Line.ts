// filename: equations-of-a-line.ts

const topic = {
  id: "equations-of-a-line",
  title: "Equations of a Line",
  summary:
    "Mathematical equations that describe the position and direction of a straight line on the coordinate plane, including slope-intercept form, point-slope form, standard form, and their applications.",
  details: `
An equation of a line is a mathematical equation that describes the position and direction of a straight line on the coordinate plane. Equations of lines are important because they help us represent relationships between two variables, usually x and y. For example, y = 2x + 3 is a linear equation; every point (x, y) that satisfies it lies on that specific line. These equations are fundamental in Algebra and Calculus because they allow us to analyse slope, rate of change, intercepts, and linear functions. They also serve as the building blocks for more advanced topics such as tangent lines, derivatives, and the study of motion. Before tackling curves and non‑linear functions, it is essential to master the representation of straight lines, as they provide the simplest model of a relationship between two quantities.

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

A straight line is a collection of points that extends infinitely in both directions. In the coordinate plane, a line is defined by its position where it crosses the axes and its direction, which is determined by its slope. The position tells us the location of the line, while the direction tells us whether it rises, falls, or stays flat. An equation of a line captures both of these characteristics in a compact mathematical form. For example, in y = 2x + 1, the number 2 indicates how steep the line is (the slope), and the number 1 indicates where the line crosses the y‑axis. Understanding a line in terms of these two fundamental properties makes it easy to graph and interpret linear relationships. This geometric perspective is crucial because every linear equation can be visualised as a straight line, and every straight line can be expressed as a linear equation.

A line has two important characteristics:
  • Position   where the line is located on the coordinate plane.
  • Direction   whether the line rises, falls, is horizontal, or is vertical.

An equation of a line tells us both of these characteristics.

For example:
  y = 2x + 1

The number 2 tells us how the line changes or rises, while the number 1 tells us where the line crosses the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SLOPE OF A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope is a measure of the steepness of a line and describes how the y‑value changes relative to a change in x. In mathematics, the slope is denoted by the letter m and can be computed from any two distinct points on the line using the formula m = (y₂ - y₁)/(x₂ - x₁). This is often expressed as "rise over run," where the rise is the vertical change and the run is the horizontal change. A positive slope indicates that the line rises as x increases, a negative slope means it falls, a zero slope corresponds to a horizontal line, and an undefined slope corresponds to a vertical line. The slope is a constant rate of change for a straight line, meaning that for any two points on the line, the ratio of vertical to horizontal change is always the same. This property makes the slope a fundamental concept in algebra and calculus, as it directly relates to the idea of derivative for curves.

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

The sign and magnitude of the slope determine the direction and steepness of a line. A positive slope means that as x increases, y also increases, so the line rises from left to right. A negative slope indicates that y decreases as x increases, so the line falls from left to right. A slope of zero produces a horizontal line, where y remains constant regardless of x; such a line has no vertical change. Finally, a vertical line has an undefined slope because the horizontal change (run) is zero, and division by zero is not allowed. Recognizing these four types is essential because they describe all possible orientations of a straight line in the plane. Each type has its own equation form: horizontal lines are written as y = c, vertical lines as x = c, and oblique lines are expressed in slope‑intercept or other forms. Understanding these distinctions helps in graphing and solving problems involving lines.

The slope of a line determines its direction.

"image": "src/assets/25.png"


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

The slope‑intercept form is one of the most widely used forms of a linear equation because it directly reveals both the slope and the y‑intercept of the line. It is written as y = mx + b, where m is the slope and b is the y‑coordinate of the point where the line crosses the y‑axis (i.e., the y‑intercept). Since the y‑axis is defined by x = 0, the y‑intercept is simply the value of y when x is zero. This form is especially convenient for graphing because you can immediately plot the intercept (0, b) and then use the slope to find another point by moving horizontally and vertically according to the rise and run. For example, in y = 3x + 2, the slope is 3 and the y‑intercept is 2, so the line passes through (0, 2) and rises 3 units for every 1 unit of horizontal movement. The slope‑intercept form is also the most common way to express a linear function in algebra and calculus.

One of the most common forms of a linear equation is the slope-intercept form:
  y = mx + b

where:
  m = slope
  b = y-intercept

The y-intercept is the point where the line crosses the y-axis.

"image": "src/assets/26.png",

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

The point‑slope form is another essential equation of a line, particularly useful when we know the slope and a single point on the line. It is expressed as y - y₁ = m(x - x₁), where m is the slope and (x₁, y₁) is a known point. This form is derived directly from the definition of slope and is ideal for constructing the equation of a line when the y‑intercept is not immediately obvious. It is also the quickest way to write the equation of a line given a point and the slope, and it can easily be converted to slope‑intercept form by solving for y. For instance, if the slope is 2 and the line passes through (3, 4), we plug these values into the formula to get y - 4 = 2(x - 3), which simplifies to y = 2x - 2. This form is particularly handy in calculus when finding tangent lines to curves, as we often know the slope (derivative) at a specific point.

Another important equation of a line is the point-slope form:
  y - y₁ = m(x - x₁)

This form is useful when we know:
  • The slope m
  • A point (x₁, y₁) on the line

Example:
  Suppose the slope is m = 2 and the line passes through (3, 4).

"image": "src/assets/27.png",

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

The standard form of a linear equation is Ax + By = C, where A, B, and C are constants, and A and B are typically integers (often with A non‑negative). This form is useful for quickly finding both intercepts and for handling equations that involve fractions or decimals by multiplying through to clear them. It is also the preferred form for certain algebraic manipulations, such as solving systems of linear equations. Although it does not directly give the slope or intercept, we can easily convert it to slope‑intercept form by solving for y. For example, 2x + 3y = 6 can be rewritten as y = -2/3 x + 2, revealing a slope of -2/3 and a y‑intercept of 2. The standard form is also used in linear programming and other applications where constraints are expressed as linear inequalities. Being comfortable with converting between forms is a valuable skill.

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

Often we are given two points on a line and need to find its equation. The process involves two steps: first, compute the slope using the formula m = (y₂ - y₁)/(x₂ - x₁); second, use either point and the point‑slope form to write the equation. This method works for any two distinct points, as long as the line is not vertical (which would give an undefined slope). After obtaining the point‑slope form, we can simplify it to slope‑intercept form if desired. For example, given (1, 2) and (4, 8), the slope is (8 - 2)/(4 - 1) = 2. Using (1, 2), we get y - 2 = 2(x - 1), which simplifies to y = 2x. This technique is fundamental because it allows us to determine the linear relationship between two variables from a pair of data points, which is common in experimental data analysis and graphing.

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

Horizontal and vertical lines are special cases of linear equations. A horizontal line has the equation y = c, where c is a constant; all points on it share the same y‑coordinate. Its slope is zero because there is no vertical change, regardless of the horizontal movement. For example, y = 5 is a horizontal line passing through (0, 5) and has a slope of 0. On the other hand, a vertical line has the equation x = c, where c is a constant; all points share the same x‑coordinate. Its slope is undefined because the horizontal change is zero, making the rise/run ratio impossible to compute. Vertical lines are not functions (they fail the vertical line test), but they are still valid linear equations. Recognising these special cases is important because they represent situations where the relationship between x and y is not a function, and they often occur in geometry and physics, such as in boundary conditions.

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

"image": "src/assets/28.png",

Vertical Lines:
  A vertical line has the equation:
    x = c
  where c is a constant.

  Example:
    x = 4
  Every point on this line has an x-coordinate of 4.
  Examples include:
    (4, -2), (4, 0), (4, 5)

"image": "src/assets/29.png",

  The slope is undefined because the horizontal change is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PARALLEL LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two lines are parallel if they never intersect, no matter how far they are extended. This happens when they have exactly the same slope but different y‑intercepts (or, in the case of vertical lines, the same undefined slope). For example, the lines y = 2x + 1 and y = 2x - 5 are parallel because both have a slope of 2, yet they cross the y‑axis at different points. Parallel lines maintain a constant distance between them and are often encountered in geometry, physics, and engineering for instance, railroad tracks or the edges of a rectangle. It is important to note that parallel lines are distinct; coincident lines (same slope and same intercept) are not considered parallel because they are actually the same line. The concept of parallel lines is crucial when solving systems of linear equations: if the lines are parallel, the system has no solution (inconsistent).

Two lines are parallel if they never intersect.

Parallel lines have the same slope.

"image": "src/assets/30.png",

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

Two lines are perpendicular if they intersect at a right angle (90 degrees). For non‑vertical and non‑horizontal lines, this condition is equivalent to their slopes being negative reciprocals of each other. That is, if one line has slope m₁, the other must have slope m₂ = -1/m₁. The product of their slopes is -1. For example, a line with slope 2 is perpendicular to a line with slope -1/2, because 2 * (-1/2) = -1. Horizontal and vertical lines are also perpendicular: a horizontal line (slope 0) and a vertical line (undefined slope) intersect at a right angle. Perpendicular lines are common in geometry and coordinate systems, such as the axes of the coordinate plane itself. They are also used in construction, design, and navigation to define orthogonal directions. Understanding perpendicularity helps in solving problems involving right triangles, rotations, and transformations.

Two lines are perpendicular if they intersect at a right angle.

The slopes of perpendicular lines are negative reciprocals.

For example, suppose m₁ = 2.

"image": "src/assets/31.png",

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

Intercepts are the points where a line crosses the axes. The x‑intercept is where the line meets the x‑axis, which occurs when y = 0. To find it, we set y = 0 in the equation and solve for x. The y‑intercept is where the line meets the y‑axis, which occurs when x = 0; we find it by setting x = 0 and solving for y. These two intercepts are especially useful for graphing because they provide two distinct points that can be plotted and connected to draw the line. For example, in the equation y = 2x - 6, setting y = 0 gives x = 3, so the x‑intercept is (3, 0); setting x = 0 gives y = -6, so the y‑intercept is (0, -6). In slope‑intercept form, the y‑intercept is already given by b, but the x‑intercept must be computed. Intercepts are also important in real‑world applications, such as break‑even analysis in economics, where the x‑intercept might represent the quantity at which profit is zero.

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

"image": "src/assets/33.png",

Finding the y-Intercept:
  The y-intercept occurs where x = 0.

  Using:
    y = 2x - 6

  Substitute x = 0:
    y = 2(0) - 6
    y = -6

  Therefore, the y-intercept is:
    (0, -6)

"image": "src/assets/34.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HOW TO GRAPH AN EQUATION OF A LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphing a linear equation is a straightforward process when we use the slope and intercept. The most efficient method is to use the slope‑intercept form y = mx + b. Start by plotting the y‑intercept (0, b). Then, using the slope m, which is the ratio of rise to run, move horizontally and vertically to find a second point. For example, if m = 2 = 2/1, from the intercept move 1 unit right and 2 units up to get the next point. Connect these two points with a straight line, and extend it in both directions with arrows. This method works for all non‑vertical lines. For vertical lines (x = c), plot any point with x = c and draw a vertical line through it. For horizontal lines (y = c), draw a horizontal line through y = c. Practicing this technique builds a strong geometric intuition for linear relationships and is essential for visualizing solutions to equations and inequalities.

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

"image": "src/assets/35.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION TO CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Equations of lines are extremely important in Calculus because they provide the simplest example of a constant rate of change. The slope of a line is the average rate of change over any interval, and it remains constant. In contrast, curves have varying slopes, which leads to the concept of instantaneous rate of change the derivative. A tangent line to a curve at a given point is a straight line that touches the curve at that point and has the same slope as the curve at that instant. Thus, understanding how to find the equation of a line from a point and a slope is directly applicable to finding tangent lines in calculus. Moreover, the process of linearisation (approximating a curve by a tangent line) is a fundamental technique in calculus. Without a solid grasp of linear equations, these advanced topics would be much harder to comprehend. Therefore, mastering the equation of a line is an essential stepping stone to calculus.

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

"image": "src/assets/36.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An equation of a line describes the position and direction of a straight line on the coordinate plane. The most important forms are slope‑intercept (y = mx + b), point‑slope (y - y₁ = m(x - x₁)), and standard (Ax + By = C). Each form has its own advantages, but they all represent the same underlying geometric object. The key idea is that the slope tells us the direction and steepness, while the intercepts tell us where the line is located. Linear equations are the building blocks for more advanced mathematics, including systems of equations, inequalities, and calculus. Mastering them provides the foundation for understanding rates of change, tangent lines, and derivatives. Ultimately, the big idea is that a linear equation captures a constant relationship between two variables, and that relationship can be visualised and manipulated in numerous ways.

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