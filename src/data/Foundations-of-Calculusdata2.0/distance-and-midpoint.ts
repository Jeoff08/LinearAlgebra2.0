const topic = {
  id: "distance-and-midpoint",
  title: "Distance and Midpoint",
  summary:
    "Distance formula, midpoint formula, horizontal and vertical distance, and extensions to three dimensions.",
  details: `
Distance and midpoint are important concepts in coordinate geometry and Calculus. They help us determine how far apart two points are and where the exact center between two points is located.

In simple terms: Distance tells us the length between two points, while the midpoint tells us the point located exactly halfway between them.

These concepts are useful when working with coordinate planes, graphs, functions, geometry, vectors, and other mathematical applications.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DISTANCE BETWEEN TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The distance between two points is the length of the line segment connecting them.

Suppose we have two points:

  P(x₁, y₁) and Q(x₂, y₂)

The distance formula is:

  d = √((x₂ - x₁)² + (y₂ - y₁)²)

This formula comes from the Pythagorean Theorem.

The horizontal difference between the points is:

  x₂ - x₁

while the vertical difference is:

  y₂ - y₁

These differences form the two legs of a right triangle, while the distance between the points is the hypotenuse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE: DISTANCE BETWEEN TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the points:

  P(2, 3) and Q(6, 6)

Using the distance formula:

  d = √((6 - 2)² + (6 - 3)²)

Simplify:

  d = √(4² + 3²)
  d = √(16 + 9)
  d = √25

Therefore:

  d = 5

The distance between the two points is 5 units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HORIZONTAL AND VERTICAL DISTANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When two points have the same y-coordinate, the distance is horizontal.

Example: P(2, 4) and Q(8, 4)

The distance is:

  d = |8 - 2|

Therefore:

  d = 6

Similarly, when two points have the same x-coordinate, the distance is vertical.

Example: P(5, 2) and Q(5, 9)

The distance is:

  d = |9 - 2|

Therefore:

  d = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MIDPOINT OF TWO POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The midpoint is the point exactly halfway between two given points.

Suppose we have:

  P(x₁, y₁) and Q(x₂, y₂)

The midpoint formula is:

  M((x₁ + x₂)/2, (y₁ + y₂)/2)

The midpoint is found by averaging the two x-coordinates and the two y-coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: FINDING THE MIDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  P(2, 4) and Q(8, 10)

The midpoint is:

  M = ((2 + 8)/2, (4 + 10)/2)

Simplify:

  M = (10/2, 14/2)

Therefore:

  M = (5, 7)

The point (5, 7) is exactly halfway between P and Q.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DISTANCE AND MIDPOINT TOGETHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance and midpoint can be used together to analyze a line segment.

Consider:

  P(1, 2) and Q(7, 10)

The distance is:

  d = √((7 - 1)² + (10 - 2)²)
  d = √(6² + 8²)
  d = √(36 + 64)
  d = √100
  d = 10

The midpoint is:

  M = ((1 + 7)/2, (2 + 10)/2)
  M = (8/2, 12/2)
  M = (4, 6)

Therefore:

  M = (4, 6) and d = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DISTANCE IN THREE DIMENSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The distance formula can also be extended to three-dimensional space.

Suppose we have:

  P(x₁, y₁, z₁) and Q(x₂, y₂, z₂)

The distance formula is:

  d = √((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)

Example: Consider P(1, 2, 3) and Q(4, 6, 3)

Then:

  d = √((4 - 1)² + (6 - 2)² + (3 - 3)²)
  d = √(3² + 4² + 0²)
  d = √(9 + 16)
  d = √25

Therefore:

  d = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. MIDPOINT IN THREE DIMENSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The midpoint formula can also be extended to three dimensions.

For:

  P(x₁, y₁, z₁) and Q(x₂, y₂, z₂)

the midpoint is:

  M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)

Example: P(2, 4, 6) and Q(8, 10, 12)

Then:

  M = ((2 + 8)/2, (4 + 10)/2, (6 + 12)/2)
  M = (10/2, 14/2, 18/2)

Therefore:

  M = (5, 7, 9)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DISTANCE AND MIDPOINT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance and midpoint are useful foundations for Calculus because they help students understand coordinate geometry, graphs, functions, vectors, slopes, and geometric relationships.

For example, when studying a function, we may need to determine the distance between two points on its graph or identify the midpoint of a line segment.

They also provide important geometric ideas that appear later when studying limits, derivatives, motion, curves, and three-dimensional geometry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Distance and Midpoint, remember:

  • d = √((x₂ - x₁)² + (y₂ - y₁)²) is used to find the distance between two points.
  • The midpoint is found by averaging the corresponding coordinates.
  • For two-dimensional points: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
  • For three-dimensional points: M = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)

The key idea to remember is:

  Distance measures how far two points are from each other, while the midpoint identifies the exact center between two points. These concepts provide an important foundation for understanding coordinate geometry and later Calculus topics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Distance and Midpoint are fundamental concepts in coordinate geometry that serve as important building blocks for Calculus.

Key concepts covered:

  ✓ Distance Between Two Points
  ✓ Distance Formula
  ✓ Horizontal and Vertical Distance
  ✓ Midpoint of Two Points
  ✓ Midpoint Formula
  ✓ Distance and Midpoint Together
  ✓ Distance in Three Dimensions
  ✓ Midpoint in Three Dimensions
  ✓ Applications in Calculus
  `,
  examples: [
    "Find the distance between P(2,3) and Q(6,6) → d = 5",
    "Find the distance between P(2,4) and Q(8,4) → d = 6 (horizontal)",
    "Find the distance between P(5,2) and Q(5,9) → d = 7 (vertical)",
    "Find the midpoint of P(2,4) and Q(8,10) → M(5,7)",
    "Find the distance and midpoint of P(1,2) and Q(7,10) → d = 10, M(4,6)",
    "Find the distance between P(1,2,3) and Q(4,6,3) → d = 5",
    "Find the midpoint of P(2,4,6) and Q(8,10,12) → M(5,7,9)",
    "Find the distance between two points with the same y-coordinate",
    "Find the midpoint of two points in three-dimensional space",
  ],
};

export default topic;