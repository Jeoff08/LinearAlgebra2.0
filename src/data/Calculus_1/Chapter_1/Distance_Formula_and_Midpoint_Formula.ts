// filename: distance-and-midpoint-formulas.ts

const topic = {
  id: "distance-and-midpoint-formulas",
  title: "Distance Formula and Midpoint Formula",
  summary:
    "Essential coordinate geometry formulas: the Distance Formula finds the straight-line distance between two points, and the Midpoint Formula finds the point exactly halfway between two points.",
  details: `
The Distance Formula and Midpoint Formula are important concepts in coordinate geometry. They are used when working with points on the coordinate plane.

The Distance Formula helps us find the exact distance between two points, while the Midpoint Formula helps us find the point that lies exactly halfway between two points.

For example, suppose we have two points:
  A(x₁, y₁)
and:
  B(x₂, y₂)

We can use these two formulas to answer two different questions:
  • Distance Formula: How far apart are the two points?
  • Midpoint Formula: What point is exactly in the middle of the two points?

These concepts are important not only in geometry but also in Algebra, Calculus, physics, engineering, computer graphics, and many other areas of mathematics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE DISTANCE BETWEEN TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What Is Distance?

Distance tells us how far apart two points are.

For example, imagine two locations on a map. If one location is at one coordinate and another location is at a different coordinate, we may want to know the straight-line distance between them.

On a coordinate plane, suppose we have:
  A(x₁, y₁)
and:
  B(x₂, y₂)

The Distance Formula allows us to calculate the straight-line distance between these two points.

The formula is based on the Pythagorean Theorem:
  d = √((x₂ - x₁)² + (y₂ - y₁)²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. UNDERSTANDING WHERE THE DISTANCE FORMULA COMES FROM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Distance Formula comes from the Pythagorean Theorem:
  a² + b² = c²

Imagine two points on a coordinate plane. If we draw a horizontal line and a vertical line between them, we can create a right triangle.

The horizontal distance between the points is:
  x₂ - x₁

The vertical distance between the points is:
  y₂ - y₁

These two distances become the legs of the right triangle.

The straight-line distance between the two points becomes the hypotenuse.

Using the Pythagorean Theorem:
  (horizontal distance)² + (vertical distance)² = (distance)²

Therefore:
  (x₂ - x₁)² + (y₂ - y₁)² = d²

Taking the square root of both sides gives us the Distance Formula.

This is why the formula works: it measures the horizontal and vertical changes between two points and combines them to find the actual straight-line distance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE OF THE DISTANCE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have the points:
  A(1, 2)
and:
  B(5, 5)

We want to find the distance between these two points.

Step 1: Identify the Coordinates
  For Point A:
    x₁ = 1, y₁ = 2
  For Point B:
    x₂ = 5, y₂ = 5

Step 2: Substitute the Values
  d = √((5 - 1)² + (5 - 2)²)

Step 3: Simplify
  d = √(4² + 3²)
  d = √(16 + 9)
  d = √25

Step 4: Find the Answer
  d = 5

Therefore, the distance between the points (1, 2) and (5, 5) is 5 units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. IMPORTANT THINGS TO REMEMBER ABOUT DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When using the Distance Formula, remember the following:

The Order of the Points Does Not Change the Final Distance:
  For example:
    (5 - 1)² and (1 - 5)²
  produce different intermediate values:
    4 and -4
  However, because the difference is squared:
    4² = (-4)² = 16
  the final distance remains the same.

Therefore, the distance from Point A to Point B is the same as the distance from Point B to Point A.

Distance Cannot Be Negative:
  Distance represents how far apart two points are. Therefore, the final answer is always:
    d ≥ 0
  Even if the coordinate differences are negative, squaring them makes the values positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE MIDPOINT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What Is a Midpoint?

A midpoint is the point that lies exactly halfway between two other points.

Imagine a straight line connecting Point A and Point B. The midpoint divides that line segment into two equal parts.

If:
  A(x₁, y₁)
and:
  B(x₂, y₂)

then the midpoint is found by calculating the average of the x-coordinates and the average of the y-coordinates.

  M((x₁ + x₂)/2, (y₁ + y₂)/2)

The formula works by finding the average position between the two points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. UNDERSTANDING THE MIDPOINT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The midpoint formula uses the idea of an average.

Suppose we only have two numbers:
  2 and 6

The number exactly halfway between them is:
  (2 + 6)/2 = 4

The same idea is applied to coordinates.

For the x-coordinate, we calculate:
  (x₁ + x₂)/2

For the y-coordinate, we calculate:
  (y₁ + y₂)/2

Then we combine the results to form the midpoint.

The midpoint is therefore the average location of the two original points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE OF THE MIDPOINT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  A(2, 4)
and:
  B(8, 10)

We want to find the point exactly halfway between them.

Step 1: Identify the Coordinates
  For Point A:
    x₁ = 2, y₁ = 4
  For Point B:
    x₂ = 8, y₂ = 10

Step 2: Find the Average of the x-Coordinates
  (2 + 8)/2 = 10/2 = 5

Step 3: Find the Average of the y-Coordinates
  (4 + 10)/2 = 14/2 = 7

Step 4: Write the Midpoint
  M(5, 7)

Therefore, the midpoint between (2, 4) and (8, 10) is:
  (5, 7)

This point is exactly halfway between the two original points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMPARING DISTANCE AND MIDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Although both formulas use two points, they answer different questions.

  Concept          |  Question Answered                    |  Result
  ──────────────────┼────────────────────────────────────────┼─────────────────
  Distance Formula  |  How far apart are the points?        |  A number
  Midpoint Formula  |  Where is the middle of the points?   |  A coordinate

For example, suppose:
  A(1, 2)
and:
  B(5, 5)

The Distance Formula might give:
  d = 5

This tells us the two points are 5 units apart.

The Midpoint Formula would give:
  M(3, 3.5)

This tells us the location that is exactly halfway between the two points.

Therefore, the two formulas are related but serve different purposes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SPECIAL CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Horizontal Line:
  Suppose the points are (2, 4) and (8, 4).
  The y-coordinates are the same, so the points form a horizontal line.
  The distance is simply the difference between the x-coordinates:
    8 - 2 = 6
  The midpoint is:
    ((2 + 8)/2, (4 + 4)/2) = (5, 4)

Vertical Line:
  Suppose the points are (3, 2) and (3, 8).
  The x-coordinates are the same, so the points form a vertical line.
  The distance is:
    8 - 2 = 6
  The midpoint is:
    ((3 + 3)/2, (2 + 8)/2) = (3, 5)

These examples show that the formulas work for horizontal, vertical, and diagonal line segments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CONNECTION TO CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Distance Formula and Midpoint Formula are useful foundations for Calculus.

In Calculus, we study how functions change. The distance between points can help us analyze changes in position and movement.

For example, if a graph contains two points:
  (x₁, y₁)
and:
  (x₂, y₂)

we can compare the horizontal and vertical changes between them.

These ideas are important when studying:
  • Slope
  • Average rate of change
  • Secant lines
  • Tangent lines
  • Derivatives
  • Curves and motion

The midpoint is also useful when analyzing intervals and finding central locations between two values.

For example, when working with an interval [a, b], the midpoint is:
  (a + b)/2

This idea appears in numerical methods and approximation techniques in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. REAL-LIFE APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Distance Formula and Midpoint Formula have many practical applications.

Maps and GPS:
  Distance formulas can help calculate how far two locations are from each other.

Computer Graphics:
  Points on a screen are represented using coordinates. Distance calculations help determine how far objects are from each other.

Video Games:
  Game developers use coordinate systems and distance calculations to determine movement, collisions, and object locations.

Engineering:
  Engineers use coordinate geometry to calculate positions and distances between objects.

Architecture:
  Architects use coordinates and measurements when designing structures and determining exact locations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Formula                           Equation
  ───────────────────────────────────────────────────────────────────────────
  Distance Formula          d = √((x₂ - x₁)² + (y₂ - y₁)²)
  Midpoint Formula          M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
  Horizontal Distance       d = |x₂ - x₁| (when y₁ = y₂)
  Vertical Distance         d = |y₂ - y₁| (when x₁ = x₂)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Distance Formula and Midpoint Formula are essential tools in coordinate geometry.

The Distance Formula is used to find the straight-line distance between two points:
  d = √((x₂ - x₁)² + (y₂ - y₁)²)

The Midpoint Formula is used to find the point exactly halfway between two points:
  M((x₁ + x₂)/2, (y₁ + y₂)/2)

The main difference is:
  The Distance Formula tells us how far apart two points are, while the 
  Midpoint Formula tells us where the exact middle point is located.

These concepts are important foundations for coordinate geometry and will continue to appear in more advanced topics such as functions, graphs, Calculus, physics, engineering, and computer science.
  `,
  examples: [
    "Distance between (1,2) and (5,5) → √((5-1)² + (5-2)²) = 5",
    "Midpoint between (2,4) and (8,10) → ((2+8)/2, (4+10)/2) = (5,7)",
    "Horizontal distance: (2,4) to (8,4) → |8-2| = 6",
    "Vertical distance: (3,2) to (3,8) → |8-2| = 6",
    "Distance formula is based on Pythagorean Theorem",
    "Midpoint is the average of the coordinates",
    "Distance cannot be negative; d ≥ 0",
  ],
};

export default topic;