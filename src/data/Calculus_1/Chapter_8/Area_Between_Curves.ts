// filename: area-between-curves.ts

const topic = {
  id: "area-between-curves",
  title: "Area Between Curves",
  image: "/images/cbum.jpg",
  summary:
    "The amount of space enclosed between two or more graphs, calculated using the definite integral of the difference between the top and bottom functions (or right and left functions).",
  details: `
The area between curves is the amount of space enclosed between two or more graphs. This is an important application of the definite integral.

For example, suppose we have two functions:
  y = f(x)
and:
  y = g(x)

If one curve is above the other, the space between them forms a region. Calculus allows us to calculate the exact area of that region.

The most important formula is:
  A = ∫ₐᵇ [Top Function - Bottom Function] dx

This formula is used when we divide the region into vertical slices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES AREA BETWEEN CURVES MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine two curves on a coordinate plane. The region between them is the set of all points that lie above the lower curve and below the upper curve, bounded by their intersection points or by given vertical lines. This region can have various shapes depending on the functions involved, but it is always a two-dimensional area enclosed by the two curves. In many real-world problems, we need to find the area of such regions, such as the cross-sectional area of a beam, the area of a park between two paths, or the surplus area in economics. The definite integral provides a precise way to compute this area by summing infinitely many thin vertical strips. Each strip has height equal to the vertical distance between the curves at a given x, and its width is an infinitesimal dx. By integrating this height over the interval between the intersection points, we obtain the total area. This concept extends to regions bounded by more than two curves and to cases where the curves are expressed as functions of y. Understanding the geometric meaning of the area between curves is the first step toward applying the integral calculus formulas correctly.

Imagine two curves on a coordinate plane:

"image": "src/assets/1.png",

The enclosed region is located:
  • Below the top curve
  • Above the bottom curve
  • Between the intersection points or boundaries

The goal is to calculate the total amount of space inside that region.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC FORMULA: TOP MINUS BOTTOM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental formula for the area between two curves when integrating with respect to x is based on the idea of vertical slicing. At any x-value within the region, the vertical distance between the upper curve f(x) and the lower curve g(x) is given by f(x) - g(x). This distance represents the height of a thin rectangle of width dx. Summing these rectangles over the interval from a to b gives the total area. This formula is valid provided that f(x) ≥ g(x) for all x in [a, b]. The difference f(x) - g(x) is positive, ensuring that the integrand is non-negative. The limits of integration, a and b, are typically the x-coordinates of the points where the two curves intersect, or they may be given explicitly. This formula is the most commonly used method for finding the area between curves because it directly uses the functions as they are usually given. It is essential to correctly identify which function is the top and which is the bottom; otherwise, the integral will yield a negative value, which does not represent a physical area. Testing a sample x-value between the intersection points can help determine the correct order.

Suppose y = f(x) is above y = g(x) from x = a to x = b.

Then:
  A = ∫ₐᵇ [f(x) - g(x)] dx

Where:
  f(x) = Top function
  g(x) = Bottom function
  a = Left boundary
  b = Right boundary

The difference f(x) - g(x) represents the vertical distance between the two curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DO WE SUBTRACT THE FUNCTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The subtraction of the two functions in the integrand is justified by the geometric interpretation of the definite integral. The integral of the top function alone, ∫ₐᵇ f(x) dx, gives the area under the top curve from a to b. Similarly, the integral of the bottom function, ∫ₐᵇ g(x) dx, gives the area under the bottom curve. The area between the curves is the difference between these two areas: the area under the top curve minus the area under the bottom curve. This is equivalent to integrating the difference f(x) - g(x). In terms of thin rectangles, at each x, the height of the strip between the curves is exactly f(x) - g(x). Multiplying by the width dx gives the area of that strip. Summing all such strips over the interval yields the total area. This subtraction method works because the definite integral is a linear operator, allowing us to combine integrals of sums and differences. It is a powerful and intuitive way to compute the area of a region bounded by two curves, and it forms the basis for many applications in physics, engineering, and economics.

Suppose at a particular value of x:
  f(x) = 10
and:
  g(x) = 4

The vertical distance between them is:
  10 - 4 = 6

So, the height of a small rectangle between the curves is:
  Height = Top - Bottom

If the width of the rectangle is dx, then the small area is approximately:
  dA = [f(x) - g(x)] dx

Adding all the infinitely small rectangles gives:
  A = ∫ₐᵇ [f(x) - g(x)] dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING THE POINTS OF INTERSECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before we can set up the integral for the area between two curves, we must determine the interval over which the region is bounded. This interval is usually defined by the x-coordinates where the two curves intersect, or by given boundaries. To find the intersection points, we set the two functions equal to each other: f(x) = g(x). Solving this equation gives the x-values where the curves cross. These values become the limits of integration, provided that the region between them is closed and the curves do not cross again within the interval. In some cases, the curves may intersect at more than two points, resulting in multiple bounded regions. In such situations, we must identify all intersection points and split the problem into separate integrals for each subinterval. Finding the intersection points is a crucial step because it defines the domain over which the area is calculated. Without these points, we would not know where to start and end the integration. Sometimes the problem provides the limits directly, but in most typical problems, solving f(x) = g(x) is necessary. A graph can be very helpful in visualizing the region and confirming the correct limits.

Before finding the area, we usually need to determine where the curves intersect.

Suppose y = f(x) and y = g(x).

At an intersection point:
  f(x) = g(x)

Therefore, we solve:
  f(x) = g(x)

The solutions give the values of x that often become the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: AREA BETWEEN A LINE AND A PARABOLA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a complete example to see the process in action. We want to find the area between the line y = 2x and the parabola y = x². First, we find the intersection points by setting 2x = x², which gives x(x - 2) = 0, so x = 0 and x = 2. Next, we determine which function is on top. Testing a point between 0 and 2, say x = 1, we find that 2(1) = 2 is greater than 1² = 1, so y = 2x is the top function and y = x² is the bottom function. The area is then given by ∫₀² (2x - x²) dx. The antiderivative is x² - x³/3. Evaluating from 0 to 2 gives (4 - 8/3) - 0 = 4/3. Therefore, the area between the curves is 4/3 square units. This example demonstrates the entire process: finding intersections, determining the top and bottom functions, setting up the integral, integrating, and evaluating. It also illustrates that the result is a positive number representing the enclosed area. This classic problem is often used to introduce the concept of area between curves and reinforces the importance of correctly identifying which function is on top.

Find the area between:
  y = 2x
and:
  y = x²

Step 1: Find the Intersection Points
  Set the equations equal:
    2x = x²

  Move everything to one side:
    x² - 2x = 0

  Factor:
    x(x - 2) = 0

  Therefore:
    x = 0 or x = 2

  So, the curves intersect at x = 0 and x = 2.

Step 2: Determine Which Function Is on Top
  We compare y = 2x and y = x².

  Choose a value between 0 and 2, such as x = 1.

  For y = 2x:
    y = 2(1) = 2

  For y = x²:
    y = 1² = 1

  Therefore:
    2x > x²

  So:
    Top Function = 2x
  and:
    Bottom Function = x²

Step 3: Set Up the Integral
  Use: A = ∫ₐᵇ [Top - Bottom] dx

  Therefore:
    A = ∫₀² (2x - x²) dx

Step 4: Integrate
  Find the antiderivative:
    ∫ (2x - x²) dx = x² - x³/3

  Therefore:
    A = [x² - x³/3]₀²

Step 5: Apply the Limits
  Substitute x = 2:
    2² - 2³/3 = 4 - 8/3

  Substitute x = 0:
    0

  Therefore:
    A = 4 - 8/3

  Convert 4 into thirds:
    A = 12/3 - 8/3 = 4/3

  Therefore, the area between the curves is:
    4/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE MAIN RULE: TOP - BOTTOM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating with respect to x, the fundamental rule is to subtract the bottom function from the top function. This ensures that the integrand is positive, reflecting the positive vertical distance between the curves. The top function is the one with the larger y-values on the interval of interest, while the bottom function has the smaller y-values. To determine which is which, it is helpful to evaluate the functions at a sample x-value within the interval. If the curves intersect, the interval is between those intersection points. The formula A = ∫ₐᵇ [Top - Bottom] dx is the standard method and works for any region that can be described by vertical slices. It is essential to remember that the order matters: Top - Bottom, not Bottom - Top. If you accidentally reverse the order, the integral will give a negative value, which would not represent a geometric area. In such cases, you can take the absolute value, but it is better to correctly identify the top and bottom functions from the start. This rule is intuitive: the height of each vertical slice is the distance from the bottom curve to the top curve.

When integrating with respect to x:
  A = ∫ₐᵇ [Top - Bottom] dx

You should always ask:
  Which graph is higher?

The higher graph is the top function, and the lower graph is the bottom function.

Remember:
  Area = Top - Bottom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AREA USING HORIZONTAL RECTANGLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes, integrating with respect to x is not the most convenient approach, especially when the region is better described by horizontal slices. In such cases, we can use horizontal rectangles and integrate with respect to y. The formula becomes A = ∫꜀ᵈ [Right - Left] dy, where the right function is the curve with larger x-values and the left function has smaller x-values. This method is particularly useful when the curves are expressed as x = f(y) and x = g(y), or when the region is bounded by functions that are difficult to invert to express y as a function of x. Using horizontal slices can simplify the integration and reduce the number of integrals needed. The choice between vertical and horizontal slicing often depends on the shape of the region and the ease of expressing the boundaries. In many cases, either method can be used, but one may be significantly simpler. For example, if the region is bounded by two functions of y, using dy is natural. It is also useful when the curves intersect in a way that makes vertical slicing require multiple integrals but horizontal slicing allows a single integral. Understanding both methods gives you flexibility in solving area problems.

Sometimes vertical rectangles are not the easiest choice.

Instead, we can divide the region into horizontal rectangles.

In this case, we integrate with respect to y.

The formula becomes:
  A = ∫꜀ᵈ [Right Function - Left Function] dy

Important Rule:
  When using horizontal slices:
    Area = Right - Left

Where:
  Right function = right boundary
  Left function = left boundary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE USING dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's illustrate the use of horizontal slices with an example. Suppose the region is bounded by x = y² and x = 2y. These functions are given as x in terms of y, so it is natural to integrate with respect to y. First, find the intersection points by setting y² = 2y, which gives y(y - 2) = 0, so y = 0 and y = 2. Next, determine which curve is on the right. For y between 0 and 2, 2y is greater than y², so the right curve is x = 2y and the left curve is x = y². The area is then ∫₀² (2y - y²) dy. The antiderivative is y² - y³/3. Evaluating from 0 to 2 gives (4 - 8/3) - 0 = 4/3. So the area is 4/3 square units, the same as in the previous example but using horizontal slices. This example demonstrates that the same area can be found using either method, but choosing the method that matches the form of the functions simplifies the integration. It also shows that the formula Right - Left is analogous to Top - Bottom but applied to horizontal strips.

Suppose a region is bounded by:
  x = y²
and:
  x = 2y

To find the area, first find the intersections:
  y² = 2y

Move everything to one side:
  y² - 2y = 0

Factor:
  y(y - 2) = 0

Therefore:
  y = 0 and y = 2

Now determine which curve is on the right.

For 0 < y < 2:
  2y > y²

Therefore:
  Right curve: x = 2y
  Left curve: x = y²

The area is:
  A = ∫₀² (2y - y²) dy

Integrate:
  A = [y² - y³/3]₀²
  A = 4 - 8/3
  A = 4/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHAT IF THE CURVES SWITCH POSITIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In some cases, the relative positions of the two curves may change within the interval of interest. For example, f(x) may be above g(x) on one part of the interval and below on another part. This typically happens when the curves intersect multiple times. When this occurs, we cannot use a single integral with a constant integrand. Instead, we must split the region at each intersection point where the order changes. For each subinterval, we determine which function is on top and which is on the bottom, and set up a separate integral with the correct subtraction order. The total area is the sum of the absolute areas of these subregions. This is important because if we tried to integrate the difference over the entire interval without splitting, the positive and negative contributions could cancel, giving a net area that does not represent the total geometric area. Splitting ensures that each integral contributes a positive area. The process requires careful identification of all intersection points and a clear understanding of the region's geometry. A sketch is extremely helpful in this situation.

Sometimes one function is on top in one interval but becomes the bottom function in another interval.

For example, suppose f(x) and g(x) intersect at several points.

You cannot simply use one integral if the top and bottom functions change.

You must split the area.

For example:
  A = ∫ₐᶜ [f(x) - g(x)] dx + ∫꜀ᵇ [g(x) - f(x)] dx

The process is:
  • Find all intersection points.
  • Divide the region into intervals.
  • Determine which function is on top in each interval.
  • Set up a separate integral for each region.
  • Add all the areas.

This ensures that every area is positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VERTICAL VS. HORIZONTAL SLICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two primary methods for computing the area between curves, each corresponding to a different orientation of the infinitesimal slices. Vertical slicing uses rectangles of height given by the difference of the top and bottom functions, with width dx. The integral is taken with respect to x. Horizontal slicing uses rectangles of width given by the difference of the right and left functions, with height dy. The integral is taken with respect to y. The choice between the two methods depends on the form of the functions and the shape of the region. In many cases, either method works, but one may lead to a simpler integral. For instance, if the functions are given as y = f(x), vertical slicing is natural. If they are given as x = f(y), horizontal slicing is preferable. Sometimes, one method may require splitting the region into multiple integrals while the other allows a single integral. Being proficient in both methods gives you the flexibility to choose the most efficient approach for each problem. The key is to recognize which variable is easier to integrate and which boundaries are simpler to express.

There are two main ways to calculate the area between curves.

Method 1: Vertical Slices
  Use dx.
  Formula: A = ∫ₐᵇ (Top - Bottom) dx

  Each rectangle is vertical.
  The rectangle's:
    Width = dx
    Height = Top - Bottom

Method 2: Horizontal Slices
  Use dy.
  Formula: A = ∫꜀ᵈ (Right - Left) dy

  Each rectangle is horizontal.
  The rectangle's:
    Height = dy
    Width = Right - Left

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOW TO DECIDE WHETHER TO USE dx OR dy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choosing between vertical and horizontal integration is a strategic decision that can simplify the problem. Generally, use vertical slices (dx) when the region can be described easily by functions y = f(x) and the top and bottom boundaries are clear. This is the most common approach because many functions are given in terms of x. Use horizontal slices (dy) when the functions are given as x = f(y) or when the region is more naturally described from left to right. For example, if the region is bounded by two curves that are both functions of y, horizontal integration is straightforward. Another consideration is the number of integrals required: if vertical slicing would require splitting the region into multiple parts due to changing top/bottom functions, but horizontal slicing would not, then horizontal is preferable. In practice, sketching the region helps visualize the slices and determine which orientation leads to simpler boundaries and fewer integrals. The goal is to minimize the complexity of the integration process while ensuring the area is computed correctly. With experience, you will develop an intuition for which method to use.

Choose the method that makes the problem easier.

Use dx when:
  • Functions are already written as y = f(x)
  • The region can easily be described from top to bottom
  • You can use one integral

Formula:
  A = ∫ₐᵇ (Top - Bottom) dx

Use dy when:
  • Functions are easily written as x = f(y)
  • The region is easier to describe from left to right
  • Using dx would require multiple integrals

Formula:
  A = ∫꜀ᵈ (Right - Left) dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL PROCEDURE FOR AREA BETWEEN CURVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Solving area between curves problems can be approached systematically. Start by understanding the geometry of the region: sketch the curves, identify the enclosed area, and note any intersections. Next, find all intersection points by setting the equations equal. These points will usually define the limits of integration. Then, decide whether to use vertical or horizontal slices based on the form of the functions and the complexity of the region. For vertical slices, identify the top and bottom functions; for horizontal slices, identify the right and left functions. Set up the integral with the appropriate difference and limits. Integrate to find the antiderivative, apply the limits, and compute the result. If the region consists of multiple parts due to changing top/bottom functions, split the integral accordingly and sum the results. Finally, check that the answer is positive and in square units. Following this procedure ensures that you cover all the necessary steps and reduces the chance of errors. It also helps in organizing your work and presenting a clear solution.

Step 1: Draw or Analyze the Graph
  Identify:
    • The curves
    • The enclosed region
    • The intersection points
  A sketch, even a rough one, can prevent mistakes.

Step 2: Find the Intersection Points
  Set f(x) = g(x).
  Solve for x.
  These usually become your integration limits.

Step 3: Decide Whether to Use dx or dy
  Ask: Is the region easier to describe vertically? Or horizontally?

Step 4: Identify the Boundaries
  For dx: Top - Bottom
  For dy: Right - Left

Step 5: Set Up the Integral
  Example: A = ∫₀² (2x - x²) dx

Step 6: Integrate
  Find the antiderivative.

Step 7: Apply the Limits
  Calculate: F(b) - F(a)

Step 8: Add Multiple Areas If Necessary
  If the curves change positions:
    A = A₁ + A₂ + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common errors when finding the area between curves. One of the most frequent is subtracting in the wrong order, leading to a negative value for the area. Always ensure that the top function is subtracted by the bottom function, or the right by the left. Another mistake is failing to find all intersection points, which can result in using incorrect limits or missing part of the region. It is also common to assume that one function is always on top without verifying, especially when the curves cross. Always test a sample point. When the curves switch positions, forgetting to split the integral is another error; using a single integral over the entire interval will give the net signed area, not the total area. Additionally, students sometimes forget to include square units in the final answer. Being aware of these pitfalls and checking your work can prevent them. A good practice is to sketch the region and confirm the limits and orientation before integrating.

1. Subtracting in the Wrong Order
  Incorrect: Bottom - Top
  This usually gives a negative answer.
  Correct: Top - Bottom

2. Forgetting to Find Intersection Points
  The curves may only form a bounded region between certain values.
  Always solve f(x) = g(x) first.

3. Not Checking Which Function Is on Top
  Do not assume the first equation is the top function.
  Test a value between the intersection points.

4. Using Only One Integral When the Curves Switch
  If the curves change positions, split the interval into multiple integrals.

5. Forgetting Square Units
  Area must always be written in square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This section consolidates the key formulas for area between curves. The vertical slice formula is A = ∫ₐᵇ [Top - Bottom] dx, and the horizontal slice formula is A = ∫꜀ᵈ [Right - Left] dy. When the curves switch positions, the area is split into multiple integrals with appropriate subtractions. These formulas are derived from the basic principle of integrating the difference between the bounding curves. They are applicable to any region bounded by two or more curves, provided the boundaries are expressed as functions of the integration variable. Memorizing these formulas is useful, but understanding their derivation and when to apply each is more important. In practice, you will often adapt these formulas to fit the specific geometry of the region. The formulas also generalize to regions bounded by more than two curves by subtracting the lower from the upper for each subinterval.

  Area Between Curves Using Vertical Slices:
    A = ∫ₐᵇ [Top - Bottom] dx

  Area Between Curves Using Horizontal Slices:
    A = ∫꜀ᵈ [Right - Left] dy

  When Curves Switch Positions:
    A = ∫ₐᶜ (Top₁ - Bottom₁) dx + ∫꜀ᵇ (Top₂ - Bottom₂) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The area between curves is a fundamental application of the definite integral. To compute it correctly, you must first find the intersection points of the curves to determine the limits of integration. Then, decide whether vertical or horizontal slicing is more appropriate. For vertical slices, use the formula Top - Bottom; for horizontal, use Right - Left. Always verify which function is above or to the right by testing a point within the interval. If the functions change order, split the interval into multiple integrals. The final answer must be a positive number and should be expressed in square units. Mastering these concepts will allow you to solve a wide range of area problems in calculus and its applications, from geometry to physics and economics. Practice with various examples will build your confidence and skill.

  • The area between curves is found using definite integrals.
  • First, find where the curves intersect.
  • When integrating with dx: Top - Bottom
  • When integrating with dy: Right - Left
  • Always check which function is above or to the right.
  • Split the region if the curves switch positions.
  • The final answer must be positive.
  • Always use square units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Area Between Curves is the process of finding the enclosed space between two or more functions using definite integrals. The two most important formulas are A = ∫ₐᵇ (Top - Bottom) dx for vertical slices and A = ∫꜀ᵈ (Right - Left) dy for horizontal slices. The key steps are to find the intersection points, determine the correct boundaries, set up the integral, integrate, and add areas if necessary. The area must be positive and expressed in square units. Understanding this topic is essential for applications in many fields, including physics, engineering, and economics.

Area Between Curves is the process of finding the enclosed space between two or more functions using definite integrals.

The two most important formulas are:
  A = ∫ₐᵇ (Top - Bottom) dx
and:
  A = ∫꜀ᵈ (Right - Left) dy

The most important steps are:
  Find Intersections → Identify Boundaries → Set Up Integral → Integrate → Add Areas

In short: find the boundaries, subtract correctly, and integrate over the correct interval.
  `,
  examples: [
    "Area between y = 2x and y = x² → A = ∫₀² (2x - x²) dx = 4/3",
    "Area between x = 2y and x = y² → A = ∫₀² (2y - y²) dy = 4/3",
    "Vertical slices: A = ∫ₐᵇ [Top - Bottom] dx",
    "Horizontal slices: A = ∫꜀ᵈ [Right - Left] dy",
    "Find intersection points by setting f(x) = g(x)",
    "Split integral when curves switch positions",
    "Always check which function is on top",
  ],
};

export default topic;