// filename: relative-maximum-and-minimum.ts

const topic = {
  id: "relative-maximum-and-minimum",
  title: "Relative Maximum and Minimum",
  summary:
    "Local peaks (relative maxima) and valleys (relative minima) where a function reaches a high or low value compared with nearby points, determined by the sign change of the first derivative.",
  details: `
Relative maximum and relative minimum are also called local maximum and local minimum. They describe points where a function reaches a high or low value compared with nearby points.

This topic connects directly with the previous topics you studied:

  Increasing/Decreasing
    ↓
  Critical Points
    ↓
  First Derivative Test
    ↓
  Second Derivative Test
    ↓
  Relative Maximum/Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A RELATIVE MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A relative maximum is a point where the function reaches a value that is greater than all nearby values. Think of it as a local peak or a hilltop on the graph. The key word is "relative" or "local" the comparison is only with points that are close to the point in question, not necessarily with the entire domain. This is the fundamental distinction between relative and absolute extrema. A function can have multiple relative maxima, each one a peak in its own neighborhood. The derivative at a relative maximum (if it exists) is zero, and the function changes from increasing to decreasing. For example, the function f(x) = -x² + 4 has a relative maximum at x = 0 because f(0) = 4 is greater than any value nearby. Understanding relative maxima is essential for curve sketching and for identifying the shape of a function's graph.

A function has a relative maximum at x = c if the function's value at c is greater than the values of the function at points near c.

In simple terms:
  A relative maximum is a nearby high point or a local peak.

Mathematically, f(c) is a relative maximum if:
  f(c) ≥ f(x)

for all x sufficiently close to c.

The important phrase is:
  nearby points

It does not necessarily mean the highest point on the entire graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A RELATIVE MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A relative minimum is a point where the function reaches a value that is lower than all nearby values. It is a local valley or a depression in the graph. As with relative maxima, the comparison is only with points in the immediate neighborhood. A function can have several relative minima, each one a dip in the graph. At a relative minimum, the derivative (if it exists) is zero, and the function changes from decreasing to increasing. For example, f(x) = x² has a relative minimum at x = 0 because f(0) = 0 is smaller than all nearby values. Recognizing relative minima is crucial for understanding the overall shape of a function and for locating the lowest points in local regions. Together, relative maxima and minima are called relative extrema, and they provide valuable information about the function's behavior.

A function has a relative minimum at x = c if the function's value at c is less than the values of the function at points near c.

In simple terms:
  A relative minimum is a nearby low point or a local valley.

Mathematically:
  f(c) ≤ f(x)

for all x sufficiently close to c.

Again, we are comparing the point with nearby points, not necessarily the entire function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RELATIVE VS. ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The distinction between relative and absolute extrema is one of the most important concepts in calculus. A relative extremum is a local peak or valley, compared only with nearby points. An absolute extremum is a global peak or valley, compared with every point in the entire domain or interval. For example, a function with two hills has two relative maxima, but only the taller hill is the absolute maximum. Similarly, a function with two valleys has two relative minima, but only the deeper valley is the absolute minimum. The methods for finding relative extrema (First and Second Derivative Tests) are different from the methods for finding absolute extrema (which also require checking endpoints). Understanding this distinction is essential for solving optimization problems and for correctly interpreting the results of derivative tests.

This distinction is extremely important.

Relative Maximum:
  The point is higher than nearby points.

Absolute Maximum:
  The point is the highest value over the entire domain or specified interval.

Similarly:

Relative Minimum:
  The point is lower than nearby points.

Absolute Minimum:
  The point is the lowest value over the entire domain or specified interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VISUAL IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A graph of a function can have multiple peaks and valleys, like a mountain range. Each peak is a relative maximum because it is higher than the points immediately around it. Each valley is a relative minimum because it is lower than the points immediately around it. However, only the tallest peak is the absolute maximum, and only the deepest valley is the absolute minimum. This visual analogy helps in understanding the difference between local and global extrema. In a typical calculus problem, you might be asked to find all relative extrema, which means identifying every local peak and valley. The graph provides a visual check for your algebraic results. The relationship between relative and absolute extrema is a key concept in optimization and curve sketching.

Imagine a mountain range:

             /\                /\
            /  \              /  \
           /    \            /    \
__________/      \__________/      \____

There are two peaks.

Both can be relative maxima because each is higher than the points immediately around it.

But one peak may be taller than the other.

The tallest one could be the absolute maximum.

So:
  Relative = local comparison
while:
  Absolute = global comparison

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RELATIVE MAXIMUM AND INCREASING/DECREASING BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The connection between relative maxima and increasing/decreasing behavior is straightforward. A relative maximum occurs exactly where the function stops increasing and starts decreasing. This means the derivative changes from positive to negative. Visually, the graph rises to a peak and then falls. This sign change of the derivative is the hallmark of a relative maximum. It is the basis for the First Derivative Test, which is one of the primary methods for finding relative extrema. Understanding this connection helps in visualizing the graph and in applying the derivative test correctly. If the derivative does not change sign, there is no relative extremum. This relationship is fundamental and will be used repeatedly in curve sketching and optimization.

This is one of the most important connections.

Suppose a function is:
  Increasing → Decreasing

The graph goes upward and then downward.

Therefore, it reaches a peak.

So:
  Increasing → Decreasing = Relative Maximum

In terms of the first derivative:
  f'(x): + → -

indicates a relative maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RELATIVE MINIMUM AND INCREASING/DECREASING BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A relative minimum occurs exactly where the function stops decreasing and starts increasing. This means the derivative changes from negative to positive. Visually, the graph falls to a valley and then rises. This sign change of the derivative is the signature of a relative minimum. It is also part of the First Derivative Test. Just as with relative maxima, the sign change is the key. If the derivative changes from - to +, the function has a local minimum. If there is no sign change, there is no relative extremum. This connection is essential for analyzing functions and for solving optimization problems. It also highlights the symmetry between maxima and minima in calculus.

Suppose the function is:
  Decreasing → Increasing

The graph goes downward and then upward.

Therefore, it reaches a valley.

So:
  Decreasing → Increasing = Relative Minimum

In terms of the derivative:
  f'(x): - → +

indicates a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE MOST IMPORTANT SIGN CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two sign change patterns are the core of the First Derivative Test. They are easy to remember and apply. A change from positive to negative means the graph went up and then down, which is a maximum. A change from negative to positive means the graph went down and then up, which is a minimum. If there is no change, the function continues in the same direction, so there is no extremum. Memorizing these patterns is essential for quickly classifying critical points. They are the foundation of many calculus problems, from curve sketching to optimization. Whenever you find a critical number, always check which pattern applies.

Memorize these:

Relative Maximum:
  + → -
  Graph: UP → DOWN

Relative Minimum:
  - → +
  Graph: DOWN → UP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RELATIVE EXTREMA AND CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Relative extrema are closely related to critical points, but they are not the same. A critical point is a point where the derivative is zero or undefined, and it is a candidate for a relative extremum. However, not every critical point is an extremum. For example, f(x) = x³ has a critical point at x = 0, but the derivative is positive on both sides, so there is no extremum. This is why we must use the First or Second Derivative Test to classify critical points. The relationship is: every relative extremum is a critical point (for differentiable functions), but not every critical point is a relative extremum. This is a fundamental concept in calculus and is often tested in exams. Understanding this distinction helps in avoiding the common mistake of assuming that f'(c) = 0 automatically means a maximum or minimum.

Relative maximum and minimum points often occur at critical numbers.

A critical number occurs when:
  f'(c) = 0
or when:
  f'(c) does not exist

while f(c) exists.

However, there is an important warning:

  Every relative extremum may occur at a critical point, but not every 
  critical point is a relative extremum.

For example:
  f(x) = x³

We have:
  f'(x) = 3x²

At x = 0, the derivative is zero.

So x = 0 is a critical number.

But the function continues increasing on both sides.

Therefore, there is no relative maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 1: RELATIVE MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a classic example to see how to find relative extrema. Consider f(x) = x³ - 3x² + 2. We first find the derivative f'(x) = 3x² - 6x = 3x(x - 2). Setting this to zero gives critical numbers x = 0 and x = 2. We then test the sign of the derivative on the intervals determined by these points. For x < 0, the derivative is positive; for 0 < x < 2, it is negative; for x > 2, it is positive. Thus, at x = 0, the derivative changes from + to -, indicating a relative maximum. At x = 2, the derivative changes from - to +, indicating a relative minimum. Finally, we compute the y-coordinates: f(0) = 2 and f(2) = -2. Therefore, the relative maximum is at (0, 2) and the relative minimum is at (2, -2). This example illustrates the complete process.

Consider:
  f(x) = x³ - 3x² + 2

We want to find its relative maximum and minimum.

Step 1: Find the derivative
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Step 2: Find Critical Numbers
  Set:
    f'(x) = 0

  Therefore:
    3x(x - 2) = 0

  So:
    x = 0 or x = 2

  The critical numbers are:
    0, 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DETERMINE THE SIGN OF THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical numbers divide the number line into intervals. We test the sign of the derivative in each interval. For x = -1 (on (-∞, 0)), f'(-1) = 3(-1)(-3) = 9 > 0, so the function is increasing. For x = 1 (on (0, 2)), f'(1) = 3(1)(-1) = -3 < 0, so the function is decreasing. For x = 3 (on (2, ∞)), f'(3) = 3(3)(1) = 9 > 0, so the function is increasing. The sign pattern is + → - → +. This tells us that the function increases, then decreases, then increases again. The changes in sign are the key to identifying the extrema. This systematic testing is the core of the First Derivative Test.

The critical numbers divide the number line:
  (-∞, 0), (0, 2), (2, ∞)

We test each interval.

For x = -1:
  f'(-1) = 3(-1)(-3) = 9 > 0
  So the function is increasing.

For x = 1:
  f'(1) = 3(1)(-1) = -3 < 0
  So the function is decreasing.

For x = 3:
  f'(3) = 3(3)(1) = 9 > 0
  So the function is increasing.

Therefore:
  Increasing → Decreasing → Increasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CLASSIFY THE CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we classify each critical point based on the sign change. At x = 0, the derivative changes from positive to negative (+ → -). According to the First Derivative Test, this indicates a relative maximum. At x = 2, the derivative changes from negative to positive (- → +), which indicates a relative minimum. This classification is straightforward and relies on the sign pattern we determined. It is important to note that if there were no sign change, the critical point would be neither a maximum nor a minimum. This example shows how the First Derivative Test works in practice and why it is a reliable method.

At x = 0:
  the derivative changes: + → -
  Therefore: x = 0 is a relative maximum.

At x = 2:
  the derivative changes: - → +
  Therefore: x = 2 is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FIND THE COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we know the x-values where the extrema occur, we compute the corresponding y-values to get the actual points on the graph. For x = 0, f(0) = 2, so the relative maximum is at (0, 2). For x = 2, f(2) = -2, so the relative minimum is at (2, -2). These points are the local peak and valley of the function. It is important to provide both the x and y coordinates when stating the relative extrema. This completes the analysis and gives the final answer. The coordinates are essential for curve sketching and for understanding the function's behavior.

For x = 0:
  f(0) = 0³ - 3(0)² + 2 = 2

Therefore, the relative maximum is:
  (0, 2)

For x = 2:
  f(2) = 2³ - 3(2)² + 2
  = 8 - 12 + 2
  = -2

Therefore, the relative minimum is:
  (2, -2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE 2: A FUNCTION WITH TWO RELATIVE MINIMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some functions have more than one relative extremum. Consider f(x) = x⁴ - 4x². The derivative is f'(x) = 4x³ - 8x = 4x(x² - 2) = 4x(x - √2)(x + √2). The critical numbers are x = -√2, 0, and √2. Testing the sign of the derivative on the intervals gives the pattern - + - +. Therefore, at x = -√2, the derivative changes from - to +, indicating a relative minimum. At x = 0, it changes from + to -, indicating a relative maximum. At x = √2, it changes from - to +, indicating another relative minimum. Thus, the function has two relative minima and one relative maximum. This example shows that a function can have multiple relative extrema, and the First Derivative Test can identify all of them.

Consider:
  f(x) = x⁴ - 4x²

Differentiate:
  f'(x) = 4x³ - 8x

Factor:
  f'(x) = 4x(x² - 2)

Therefore:
  f'(x) = 4x(x - √2)(x + √2)

Critical numbers:
  -√2, 0, √2

The derivative signs are:
  - + - +

Therefore:
  At x = -√2: - → + so it is a relative minimum.
  At x = 0: + → - so it is a relative maximum.
  At x = √2: - → + so it is a relative minimum.

Thus:
  Two relative minima and one relative maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FINDING THEIR COORDINATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we compute the y-coordinates for each critical point. For x = 0, f(0) = 0, so the relative maximum is at (0, 0). For x = ±√2, we have x² = 2 and x⁴ = 4, so f(x) = 4 - 4(2) = -4. Thus, the relative minima are at (-√2, -4) and (√2, -4). This gives a complete picture of the function's local behavior. The function has a central peak and two symmetric valleys. This example illustrates the importance of finding all critical points and testing each one to determine its nature.

For x = 0:
  f(0) = 0
  So the relative maximum is: (0, 0)

For x = ±√2:
  We know x² = 2 and x⁴ = 4.

  Therefore:
    f(x) = 4 - 4(2) = -4

  So the relative minima are:
    (-√2, -4) and (√2, -4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RELATIVE MAXIMUM DOES NOT MEAN ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common misconception is that a relative maximum is also the absolute maximum. This is not true. A relative maximum is only a local peak; there may be other, higher peaks elsewhere in the domain. For example, a function with two peaks has two relative maxima, but only the taller one is the absolute maximum. The absolute maximum is the highest point over the entire domain or specified interval. To find the absolute maximum, you must also consider the endpoints (if any) and compare all candidate values. The distinction between relative and absolute extrema is crucial in optimization problems, where you need the global best, not just a local one. Always remember: relative is local; absolute is global.

Consider a function with two peaks: small peak and large peak.

Both peaks can be relative maxima.

But only the highest one can be the absolute maximum.

For example:
  f(a) = 5 and f(b) = 10

If both are local peaks, then both are relative maxima.

But 10 > 5, so f(b) is the larger one and may be the absolute maximum, depending on the rest of the domain.

Therefore:
  Relative maximum ≠ necessarily absolute maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RELATIVE MINIMUM DOES NOT MEAN ABSOLUTE MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, a relative minimum is only a local valley; there may be deeper valleys elsewhere. For example, a function with two valleys has two relative minima, but only the deeper one is the absolute minimum. To find the absolute minimum, you must compare all relative minima and endpoints. The distinction is important because optimization problems often require the global minimum, not just a local one. The methods for finding relative minima (First and Second Derivative Tests) are different from the methods for finding absolute minima (which also require checking boundaries). Understanding this difference is essential for solving problems correctly.

The same applies to minima.

Suppose:
  f(a) = -2 and f(b) = -10

Both might be relative minima.

But -10 < -2, so f(b) is lower and could be the absolute minimum, depending on the domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: RELATIVE VS. ABSOLUTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's examine a function on a closed interval to see the difference between relative and absolute extrema. Consider f(x) = x³ - 3x on [-2, 2]. The derivative is f'(x) = 3x² - 3 = 3(x² - 1). Critical numbers are x = -1 and x = 1. Testing the sign of the derivative gives + → - → +, so x = -1 is a relative maximum and x = 1 is a relative minimum. The function values are f(-1) = 2 and f(1) = -2. Now we also check the endpoints: f(-2) = -2 and f(2) = 2. Comparing all values, the absolute maximum is 2 (at x = -1 and x = 2) and the absolute minimum is -2 (at x = 1 and x = -2). This example shows that a relative extremum can share the same value as an endpoint, and that absolute extrema require checking endpoints. It also illustrates why the closed interval method is essential for finding global extrema.

Consider:
  f(x) = x³ - 3x

on the interval:
  [-2, 2]

First derivative:
  f'(x) = 3x² - 3

Set equal to zero:
  3x² - 3 = 0
  x² = 1

Thus:
  x = -1, 1

These are critical numbers.

The derivative signs are:
  + → - → +

Therefore:
  x = -1 is a relative maximum, and x = 1 is a relative minimum.

Now calculate the values:

f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2
So: (-1, 2) is the relative maximum.

f(1) = 1 - 3 = -2
So: (1, -2) is the relative minimum.

But because the interval is closed, we must also examine the endpoints.

f(-2) = (-2)³ - 3(-2) = -8 + 6 = -2
f(2) = 8 - 6 = 2

So on [-2, 2]:
  Absolute maximum = 2
  Absolute minimum = -2

Interestingly, the relative maximum at x = -1 has the same value as the endpoint x = 2, while the relative minimum at x = 1 has the same value as the endpoint x = -2.

This demonstrates why absolute extrema require checking endpoints, while relative extrema focus on local behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. RELATIVE EXTREMA AT ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In standard introductory calculus, relative extrema are usually discussed using interior points because a relative extremum requires a neighborhood around the point. This means that relative extrema are typically defined for points that have points on both sides. Endpoints, by definition, do not have a full neighborhood, so they are not considered relative extrema. However, endpoints are extremely important when finding absolute extrema on a closed interval. To find absolute extrema, you must examine both critical points (interior) and endpoints. This is why the closed interval method includes endpoints. Understanding this distinction is important for correctly applying the definitions and for solving optimization problems.

In standard introductory calculus, relative extrema are usually discussed using interior points because a relative extremum requires a neighborhood around the point.

Endpoints are especially important when finding absolute extrema on a closed interval.

For example:
  [a, b]

To find absolute extrema, examine:
  Critical points + endpoints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. RELATIVE EXTREMA AND THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is one of the best tools for finding relative extrema. It uses the sign change of the derivative to classify critical points. The procedure is systematic: find the derivative, find critical numbers, divide the domain into intervals, test the sign of the derivative in each interval, and look for sign changes. A change from + to - indicates a relative maximum; a change from - to + indicates a relative minimum; no change means neither. This test is reliable and works for any differentiable function. It is often the preferred method when the second derivative is difficult to compute or when the critical point is a cusp. Mastering the First Derivative Test is essential for success in calculus.

The First Derivative Test is one of the best tools for finding relative extrema.

The procedure is:

  f(x)
    ↓
  f'(x)
    ↓
  Find critical numbers
    ↓
  Create intervals
    ↓
  Determine signs of f'(x)
    ↓
  Look for sign changes
    ↓
  Classify relative extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. RELATIVE EXTREMA AND THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test provides an alternative method for classifying critical points. It uses the concavity at the critical point. If f'(c) = 0 and f''(c) > 0, the function is concave up, indicating a relative minimum. If f'(c) = 0 and f''(c) < 0, the function is concave down, indicating a relative maximum. If f''(c) = 0, the test is inconclusive. This test is often quicker than the First Derivative Test when the second derivative is easy to compute. However, it only works when the second derivative exists and is nonzero at the critical point. In cases where the test is inconclusive, you must use the First Derivative Test. Understanding both tests gives you flexibility in solving problems.

The Second Derivative Test provides another method.

Suppose:
  f'(c) = 0

Then calculate:
  f''(c)

If f''(c) > 0, then Relative Minimum.
If f''(c) < 0, then Relative Maximum.
If f''(c) = 0, the test is inconclusive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE USING THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the Second Derivative Test to a function. Consider f(x) = x³ - 6x² + 9x + 1. The first derivative is f'(x) = 3x² - 12x + 9 = 3(x - 1)(x - 3). Critical numbers are x = 1 and x = 3. The second derivative is f''(x) = 6x - 12. At x = 1, f''(1) = -6 < 0, so the function is concave down, indicating a relative maximum. At x = 3, f''(3) = 6 > 0, so the function is concave up, indicating a relative minimum. This is a quick and efficient way to classify the critical points. The y-coordinates are f(1) = 5 and f(3) = 1, giving relative max at (1, 5) and relative min at (3, 1). This example demonstrates the use of the Second Derivative Test.

Consider:
  f(x) = x³ - 6x² + 9x + 1

First derivative:
  f'(x) = 3x² - 12x + 9

Factor:
  f'(x) = 3(x - 1)(x - 3)

Critical numbers:
  x = 1, 3

Second derivative:
  f''(x) = 6x - 12

At x = 1:
  f''(1) = 6 - 12 = -6

Since f''(1) < 0, we have:
  x = 1 is a relative maximum.

At x = 3:
  f''(3) = 18 - 12 = 6

Since f''(3) > 0, we have:
  x = 3 is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A CRITICAL POINT IS NOT ALWAYS A RELATIVE EXTREMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts in calculus: a critical point is a candidate for an extremum, but it is not guaranteed to be one. For example, f(x) = x³ has a critical point at x = 0, but the derivative is positive on both sides, so there is no extremum. This happens because the function continues increasing through the critical point. The only way to determine whether a critical point is an extremum is to use the First or Second Derivative Test. This concept is often tested in exams and is a common source of confusion. Remember: f'(c) = 0 is a necessary condition for a relative extremum (if the derivative exists), but it is not sufficient.

This is one of the most important concepts.

Consider:
  f(x) = x³

We find:
  f'(x) = 3x²

Thus:
  f'(0) = 0

So x = 0 is a critical number.

But f'(x) > 0 on both sides of 0.

Therefore, the function is increasing before and after the critical point.

There is no + → - and no - → +.

So:
  x = 0 is not a relative maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. RELATIVE MAXIMUM/MINIMUM FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you are given only a graph, you can identify relative extrema visually. A relative maximum is a point where the graph changes from increasing to decreasing, forming a peak. A relative minimum is a point where the graph changes from decreasing to increasing, forming a valley. These points are easy to spot on a graph: they are the tops of hills and the bottoms of valleys. A graph can have several relative extrema, each one corresponding to a local change in direction. This visual method is useful for checking your algebraic results and for quickly understanding the shape of a function. However, for precise values, you need calculus. The visual and algebraic methods complement each other.

If you are given only a graph, you can identify relative extrema visually.

Relative maximum:
  Look for a nearby peak: ∩

Relative minimum:
  Look for a nearby valley: ∪

A more complex graph can contain several relative maxima and minima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT DIFFERENCE IN TERMINOLOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The terms "relative" and "local" are used interchangeably in calculus. Both refer to extrema that are only compared with nearby points. This is in contrast to "absolute" or "global" extrema, which are compared with all points in the domain. It is important to recognize these synonyms to avoid confusion when reading different textbooks or problem statements. The table below summarizes the terminology. Remember: relative = local, absolute = global. This equivalence is a key concept in understanding extrema.

You may encounter these terms:

  Term                 |  Meaning
  ──────────────────────┼─────────────────────────────────
  Relative maximum     |  Local maximum
  Relative minimum     |  Local minimum
  Relative extremum    |  Either a relative max or min
  Absolute maximum     |  Greatest value on entire domain/interval
  Absolute minimum     |  Smallest value on entire domain/interval

Therefore:
  Relative = Local

This is a very useful equivalence to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common mistakes when dealing with relative extrema. One is assuming that every critical point is an extremum, which is false. Another is confusing relative extrema with absolute extrema, which have different definitions and methods. Students sometimes forget to compute the y-coordinate of the extremum, giving only the x-value. Also, when using the Second Derivative Test, it is a mistake to think that f''(c) = 0 means there is no extremum; it only means the test is inconclusive. To avoid these mistakes, always use the First or Second Derivative Test properly, and always state the complete point (x, y). Being aware of these common errors will help you avoid them.

Mistake 1: Assuming every critical point is an extremum
  Not true. f'(c) = 0 only makes c a candidate.

Mistake 2: Confusing relative with absolute
  Relative means nearby.
  Absolute means entire domain/interval.

Mistake 3: Forgetting to find the y-value
  If the problem asks for the relative maximum point, don't just give x = c.
  You should calculate f(c).
  Then give (c, f(c)).

Mistake 4: Thinking f''(c) = 0 means no extremum
  No. It means the Second Derivative Test is inconclusive.
  You can use the First Derivative Test instead.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A RELIABLE METHOD FOR PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to find the relative extrema of a function, follow this reliable workflow. First, find the derivative. Then find all critical numbers by solving f'(x) = 0 and identifying points where f'(x) does not exist (but f(x) does). Next, use the First Derivative Test by testing the sign of f' on each interval. Look for sign changes: + → - for a maximum, - → + for a minimum. If desired, you can also use the Second Derivative Test for classification. Finally, compute the y-coordinates and report the points. This workflow is systematic and works for all differentiable functions. By following it carefully, you can find all relative extrema correctly.

When asked:
  Find the relative maximum and minimum of f(x).

Use this workflow:

Step 1: Find f'(x).

Step 2: Solve f'(x) = 0.

Step 3: Identify any points where f'(x) does not exist but f(x) exists.

Step 4: Use the First Derivative Test or Second Derivative Test.

Step 5: Classify the critical numbers.

Step 6: Calculate the corresponding y-values.

Step 7: Report the coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key relationships for relative extrema. The behavior of the function (increasing or decreasing) corresponds to the sign of the derivative. A change from increasing to decreasing (positive to negative) gives a relative maximum. A change from decreasing to increasing (negative to positive) gives a relative minimum. If there is no change, there is no extremum. The Second Derivative Test provides an alternative classification based on concavity. This table is a quick reference for solving problems and for understanding the connections between the derivative and the shape of the graph.

  Behavior                       Derivative Sign    Result
  ──────────────────────────────────────────────────────────────────
  Increasing → Decreasing        + → -              Relative Maximum
  Decreasing → Increasing        - → +              Relative Minimum
  Increasing → Increasing        + → +              Neither
  Decreasing → Decreasing        - → -              Neither

Using the Second Derivative Test:

  Condition                Result
  ─────────────────────────────────────────
  f''(c) > 0               Relative Minimum
  f''(c) < 0               Relative Maximum
  f''(c) = 0               Inconclusive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A relative maximum is a point where the function is higher than nearby values, characterized by a change from increasing to decreasing (+ → -). A relative minimum is a point where the function is lower than nearby values, characterized by a change from decreasing to increasing (- → +). The most important distinction is that relative (local) extrema are compared only with nearby points, while absolute (global) extrema are compared with the entire domain. The First Derivative Test is the primary method for finding relative extrema, and the Second Derivative Test provides an alternative. The overall relationship between your recent topics is: f'(x) > 0 → increasing, f'(x) < 0 → decreasing, which leads to + → - for a relative maximum and - → + for a relative minimum. Relative extrema are local peaks and valleys, and we can find them by studying how the derivative changes sign.

A relative maximum is a point where the function is higher than nearby values:
  UP → DOWN
or:
  + → -

A relative minimum is a point where the function is lower than nearby values:
  DOWN → UP
or:
  - → +

The most important distinction is:
  Relative = nearby comparison
  Absolute = entire domain/interval comparison

And the overall relationship between your recent topics is:

  f'(x) > 0 → Increasing
  f'(x) < 0 → Decreasing

which leads to:
  + → - → Relative Maximum
and:
  - → + → Relative Minimum

So, in one sentence:

  Relative extrema are local peaks and valleys, and we can find them by 
  studying how the derivative changes from positive to negative or from 
  negative to positive.
  `,
  examples: [
    "f(x) = x³ - 3x² + 2 → relative max at (0,2), relative min at (2,-2)",
    "f(x) = x⁴ - 4x² → relative max at (0,0), relative mins at (-√2,-4), (√2,-4)",
    "f(x) = x³ → x=0 is a critical point but not a relative extremum (neither)",
    "f(x) = x³ - 6x² + 9x + 1 → relative max at (1,5), relative min at (3,1)",
    "f(x) = x³ - 3x on [-2,2] → relative max at (-1,2), relative min at (1,-2)",
    "+ → - = Relative Maximum, - → + = Relative Minimum",
    "Relative = local, Absolute = global",
  ],
};

export default topic;