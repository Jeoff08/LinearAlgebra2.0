// filename: increasing-and-decreasing-functions.ts

const topic = {
  id: "increasing-and-decreasing-functions",
  title: "Increasing and Decreasing Functions",
  summary:
    "Determining where a function rises (increasing) or falls (decreasing) using the first derivative: f'(x) > 0 means increasing, f'(x) < 0 means decreasing.",
  details: `
Increasing and decreasing functions describe how the value of a function changes as x moves from left to right.

This topic is extremely important because it allows us to determine where a graph rises, where it falls, and where it stays constant. In calculus, we use the first derivative to determine these intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "INCREASING" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is increasing on an interval if, as we move from left to right along the x-axis, the corresponding y-values consistently get larger. In other words, for any two points x₁ and x₂ on the interval with x₁ < x₂, we have f(x₁) < f(x₂). The graph rises as x increases. This is a fundamental concept in calculus because it describes the direction of the function's movement. For example, the function f(x) = x² is increasing when x > 0 because as x goes from 1 to 2 to 3, the values go from 1 to 4 to 9. Recognizing where a function is increasing is essential for finding local maxima, solving optimization problems, and understanding the overall behavior of the function. The derivative provides a precise algebraic way to determine these intervals.

A function is increasing on an interval if its y-values increase as x-values increase.

In simple terms:
  As you move from left to right, the graph goes up.

For example:
  f(x) = x² is increasing when x > 0.

As x increases: 1 → 2 → 3 → 4
the function values are: 1 → 4 → 9 → 16

The values are getting larger.

Therefore, the function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FORMAL DEFINITION OF AN INCREASING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal definition of an increasing function uses the order property of real numbers. It states that for any two inputs x₁ and x₂ in the interval, if x₁ is less than x₂, then the output f(x₁) must be less than f(x₂). This definition is precise and works for any function, whether it is linear, polynomial, exponential, or any other type. It captures the intuitive idea that larger inputs produce larger outputs. This definition is used in proofs and in establishing the connection between the derivative and monotonicity. For example, for f(x) = 2x + 1, if x₁ < x₂, then 2x₁ + 1 < 2x₂ + 1, so the function is increasing. This formal definition is the basis for the derivative test, which provides a more efficient way to determine increasing intervals.

A function f is increasing on an interval if:
  x₁ < x₂ implies f(x₁) < f(x₂)

In other words:
  x₁ < x₂ ⇒ f(x₁) < f(x₂)

The larger x becomes, the larger f(x) becomes.

Example:
  Suppose f(x) = 2x + 1.

  Take x₁ = 1, x₂ = 3.

  Since 1 < 3, we calculate:
    f(1) = 3
    f(3) = 7

  Since 3 < 7, the function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHAT DOES "DECREASING" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is decreasing on an interval if its y-values become smaller as x increases. As you move from left to right along the graph, the curve goes downward. Formally, for any x₁ < x₂ in the interval, we have f(x₁) > f(x₂). This means that larger inputs produce smaller outputs. For example, f(x) = -x is decreasing everywhere because as x increases, the values become more negative. Understanding where a function is decreasing is just as important as knowing where it increases because it helps in identifying local minima and in analyzing the overall shape of the graph. The derivative test for decreasing functions is the mirror image of the increasing case: if the derivative is negative, the function is decreasing. This concept is widely used in optimization and curve sketching.

A function is decreasing on an interval if its y-values decrease as x increases.

In simple terms:
  As you move from left to right, the graph goes down.

For example:
  f(x) = -x is decreasing everywhere.

As x increases: 1 → 2 → 3 → 4,
the function values become: -1 → -2 → -3 → -4.

The values are getting smaller.

Therefore:
  f(x) = -x is decreasing

on its entire domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FORMAL DEFINITION OF A DECREASING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal definition of a decreasing function is the reverse of the increasing case. For any two inputs x₁ < x₂ in the interval, the outputs must satisfy f(x₁) > f(x₂). This means that as the input increases, the output decreases. This definition is precise and applies to all types of functions. It is used in proofs and to establish the monotonicity of functions. For example, for f(x) = -2x + 3, if x₁ < x₂, then -2x₁ + 3 > -2x₂ + 3, so the function is decreasing. This formal definition is the foundation for the derivative test, which tells us that a negative derivative indicates a decreasing function. Understanding this definition helps in analyzing the behavior of functions and in solving problems involving rates of change.

A function f is decreasing on an interval if:
  x₁ < x₂ implies f(x₁) > f(x₂)

Therefore:
  x₁ < x₂ ⇒ f(x₁) > f(x₂)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INCREASING VS. DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to distinguish between increasing and decreasing is to imagine walking along the graph from left to right. If you are walking uphill (the graph goes up), the function is increasing. If you are walking downhill (the graph goes down), the function is decreasing. This intuitive visualization is helpful for quickly identifying the behavior of a function from its graph. In calculus, we use the derivative to determine these behaviors algebraically, but the geometric interpretation remains a useful check. A function can be increasing on some intervals and decreasing on others, which is why we often describe the intervals separately. For example, a parabola like f(x) = x² decreases on (-∞, 0) and increases on (0, ∞). This distinction is crucial for understanding the overall shape of the function.

The easiest way to remember the difference is to imagine walking along the graph from left to right.

  Increasing: Left → Right: Graph goes UP
  Decreasing: Left → Right: Graph goes DOWN

This is the fundamental idea.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW DOES THE DERIVATIVE TELL US?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where calculus becomes useful. The derivative f'(x) represents the slope of the tangent line to the graph at any point x. The slope tells us the direction of the graph at that instant: positive slope means the graph is rising, negative slope means it is falling, and zero slope means it is momentarily horizontal. Therefore, the sign of the derivative directly indicates whether the function is increasing or decreasing. If f'(x) > 0, the function is increasing; if f'(x) < 0, it is decreasing; if f'(x) = 0, the tangent is horizontal, which may indicate a local maximum, minimum, or a plateau. This is the fundamental connection between derivatives and monotonicity. It allows us to determine increasing and decreasing intervals analytically without having to compute function values at many points.

This is where calculus becomes useful.

The derivative f'(x) represents the slope of the tangent line to the graph.

The sign of the derivative tells us whether the function is increasing or decreasing.

  If f'(x) > 0, the function is increasing.
  If f'(x) < 0, the function is decreasing.
  If f'(x) = 0, the tangent is horizontal.

This may indicate a critical point, such as a local maximum or local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE MAIN DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important rules to memorize in calculus. The sign of the first derivative completely determines the monotonicity of the function on an interval. If the derivative is positive throughout an interval, the function is increasing; if negative, it is decreasing; if zero at a point, that point is a candidate for a local extremum. This rule is the foundation for many other topics, including the First Derivative Test and optimization. However, it is important to note that f'(x) = 0 does not automatically mean there is a maximum or minimum; the derivative must change sign around the point for an extremum to occur. This distinction is crucial and will be explored in more detail in later topics. The main derivative test is the gateway to understanding the behavior of functions.

This is one of the most important rules to memorize:

  f'(x) > 0 ⇒ f is increasing
  f'(x) < 0 ⇒ f is decreasing
  f'(x) = 0 ⇒ possible critical point

Notice the word possible.

If f'(c) = 0, that does not automatically mean there is a maximum or minimum.

We need to examine what happens to the derivative around c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 1: FIND INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the derivative test to a concrete function. We'll find the intervals where f(x) = x² - 4x + 3 is increasing and decreasing. First, we compute the derivative f'(x) = 2x - 4. Then we find the critical number by setting the derivative to zero: 2x - 4 = 0 gives x = 2. This point divides the domain into two intervals. We test the sign of the derivative on each interval. For x < 2, the derivative is negative, so the function is decreasing. For x > 2, the derivative is positive, so the function is increasing. At x = 2, the derivative is zero, indicating a local minimum (since the function changes from decreasing to increasing). This example illustrates the complete process: derivative, critical number, sign analysis, and conclusion. It is a template for solving similar problems.

Consider:
  f(x) = x² - 4x + 3

Find where the function is increasing and decreasing.

Step 1: Find the derivative
  Differentiate:
    f'(x) = 2x - 4

Step 2: Find the critical number
  Set:
    f'(x) = 0

  Therefore:
    2x - 4 = 0

  So:
    2x = 4
    x = 2

This divides the number line into two intervals:
  (-∞, 2) and (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. TEST THE FIRST INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To determine the sign of the derivative on the interval (-∞, 2), we choose a convenient test point. Any value less than 2 will work; x = 0 is simple. Evaluating f'(0) = -4, which is negative. Therefore, the derivative is negative on the entire interval (-∞, 2), meaning the function is decreasing there. This step is crucial because it tells us the direction of the graph on that part of the domain. The sign of the derivative is constant on each interval between critical numbers (provided the derivative is continuous), so one test point is sufficient for each interval. This method is efficient and reliable.

Take a value less than 2, such as x = 0.

Evaluate:
  f'(0) = 2(0) - 4 = -4

Since f'(0) < 0, the function is decreasing on:
  (-∞, 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TEST THE SECOND INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On the interval (2, ∞), we choose a test point greater than 2, such as x = 3. Evaluating f'(3) = 2(3) - 4 = 2, which is positive. Therefore, the derivative is positive on (2, ∞), meaning the function is increasing there. Thus, the function decreases on (-∞, 2) and increases on (2, ∞). At x = 2, the function has a local minimum because it changes from decreasing to increasing. This result is consistent with the shape of a parabola opening upward. The vertex at x = 2 is the minimum point. This example demonstrates the power of the derivative test: it gives a complete description of the function's direction using just a few calculations.

Take x = 3.

Then:
  f'(3) = 2(3) - 4 = 2

Since f'(3) > 0, the function is increasing on:
  (2, ∞)

Therefore:
  Decreasing on (-∞, 2)
and:
  Increasing on (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT HAPPENS AT x = 2?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 2, the derivative is zero, indicating a horizontal tangent. The function changes from decreasing on the left to increasing on the right. This sign change (from negative to positive) is the hallmark of a local minimum. The actual value of the function at x = 2 is f(2) = -1, so the minimum point is (2, -1). This example shows how the sign of the derivative around a critical point determines the nature of the extremum. A change from negative to positive indicates a minimum; a change from positive to negative indicates a maximum; no sign change means neither. This is the foundation of the First Derivative Test, which will be covered in more detail later.

At x = 2, we have:
  f'(2) = 0

Before x = 2:
  f'(x) < 0 so the function is decreasing.

After x = 2:
  f'(x) > 0 so the function is increasing.

Therefore, the function changes:
  Decreasing → Increasing

This indicates a local minimum.

Calculate its value:
  f(2) = 2² - 4(2) + 3
  = 4 - 8 + 3
  = -1

So the local minimum is:
  (2, -1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY DOES A NEGATIVE DERIVATIVE MEAN DECREASING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is the slope of the tangent line. A negative slope means that as x increases, the tangent line goes downward. For a smooth function, the tangent line approximates the function locally, so a negative slope indicates that the function itself is decreasing. In terms of Δy/Δx, if Δx is positive (moving right), then Δy must be negative (moving down). This is a direct consequence of the definition of the derivative as a limit of difference quotients. Understanding this helps in visualizing the behavior of the function and in connecting the algebraic sign of the derivative to the geometric shape of the graph. This intuitive understanding is essential for mastering calculus.

Remember that the derivative represents slope.

If f'(x) < 0, the tangent line has a negative slope.

A negative slope means that as x increases, y decreases.

For example:
  Δy/Δx < 0

If Δx is positive, then Δy must be negative.

Therefore:
  Negative derivative ⇒ graph moves downward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY DOES A POSITIVE DERIVATIVE MEAN INCREASING?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, a positive derivative means a positive slope. A positive slope means that as x increases, the tangent line goes upward, and the function itself is increasing. In terms of Δy/Δx, a positive derivative implies that for a positive Δx, Δy is also positive. This is the mirror image of the decreasing case. The derivative test is symmetric: positive for increasing, negative for decreasing. This symmetry makes the rule easy to remember. The key is to always think in terms of the sign of the derivative. If the derivative is positive, the graph is rising; if negative, it is falling. This simple rule is the backbone of many calculus applications.

If f'(x) > 0, the tangent line has a positive slope.

Therefore, as x increases, y increases.

So:
  Positive derivative ⇒ graph moves upward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE FIRST DERIVATIVE SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A sign chart is a visual tool that organizes the information about the derivative's sign on different intervals. It shows the critical numbers, the sign of the derivative on each interval, and the corresponding behavior of the function. For f(x) = x² - 4x + 3, the sign chart would show a negative sign on (-∞, 2), zero at x = 2, and a positive sign on (2, ∞). This immediately tells us that the function decreases, reaches a minimum, and then increases. Sign charts are extremely useful for solving problems because they present all the information in a compact and clear format. They are used extensively in the First Derivative Test, curve sketching, and optimization. Learning to construct and interpret sign charts is a valuable skill.

A very useful method is the first derivative sign chart.

For f(x) = x² - 4x + 3, we found:
  f'(x) = 2x - 4

Critical number: x = 2

The sign chart looks conceptually like this:

  Interval        |  f'(x)  |  f(x)
  ─────────────────┼─────────┼─────────────────
  (-∞, 2)         |  -      |  decreasing
  2               |  0      |
  (2, ∞)          |  +      |  increasing

The important pattern is:
  - 0 +

which means:
  Decreasing → Increasing

and therefore a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INCREASING AND DECREASING AROUND A LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now let's consider a function that has a local maximum. For f(x) = -x² + 4x + 1, the derivative is f'(x) = -2x + 4. The critical number is x = 2. For x < 2, the derivative is positive, so the function is increasing. For x > 2, the derivative is negative, so the function is decreasing. This sign change (from positive to negative) indicates a local maximum at x = 2. The maximum value is f(2) = 5. This example is the mirror image of the previous one and shows that the derivative test works for both maxima and minima. The sign pattern + → - is the signature of a local maximum. This is the basis for the First Derivative Test.

Consider:
  f(x) = -x² + 4x + 1

Differentiate:
  f'(x) = -2x + 4

Set equal to zero:
  -2x + 4 = 0

Thus:
  x = 2

Now examine the signs.

For x < 2, the derivative is positive:
  f'(x) > 0

So the function is increasing.

For x > 2, the derivative is negative:
  f'(x) < 0

So the function is decreasing.

Therefore:
  Increasing → Decreasing

at x = 2.

That indicates a local maximum.

Calculate:
  f(2) = -(2)² + 4(2) + 1
  = -4 + 8 + 1
  = 5

So the local maximum is:
  (2, 5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. THE TWO IMPORTANT SIGN CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are exactly two sign change patterns that indicate local extrema. A change from positive to negative ( + → - ) indicates a local maximum: the function rises to a peak and then falls. A change from negative to positive ( - → + ) indicates a local minimum: the function falls to a valley and then rises. These two patterns are the basis of the First Derivative Test. Memorizing them is essential for success in calculus. When you see a critical number, always check which pattern occurs. If there is no sign change ( + → + or - → - ), the critical point is not an extremum. This distinction is crucial and often tested.

Memorize these two patterns:

Local maximum:
  + → 0 → -
or simply:
  + → -
The function goes: Increasing → Decreasing.

Local minimum:
  - → 0 → +
or:
  - → +
The function goes: Decreasing → Increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHAT IF THE DERIVATIVE DOESN'T CHANGE SIGN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to recognize that not every critical number corresponds to a local extremum. If the derivative is positive on both sides of a critical point, the function is increasing before and after, so there is no peak or valley. Similarly, if the derivative is negative on both sides, the function is decreasing throughout. In both cases, the critical point is not an extremum. For example, f(x) = x³ has a critical point at x = 0, but the derivative is positive on both sides, so there is no extremum. This is a common source of mistakes: students often assume that f'(x) = 0 automatically means a maximum or minimum. The First Derivative Test is the proper way to classify critical points, and it requires checking the sign of the derivative on both sides.

This is an important situation.

Suppose f'(c) = 0 but the derivative is positive on both sides:
  + → 0 → +

Then the function is increasing before and after c.

So c is not necessarily a maximum or minimum.

Likewise:
  - → 0 → -

does not produce a local extremum.

Therefore, simply solving f'(x) = 0 is not enough.

You must check the sign of the derivative around the critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: f(x) = x³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The function f(x) = x³ is a classic example of a critical point that is not an extremum. Its derivative is f'(x) = 3x², which is zero at x = 0. However, for x < 0, the derivative is positive (since x² > 0), and for x > 0, the derivative is also positive. The sign pattern is + → +, so there is no change. The function is increasing on both sides of 0. Thus, x = 0 is not a local maximum or minimum; it is an inflection point where the concavity changes. This example reinforces the necessity of the sign test. It shows that a zero derivative is necessary but not sufficient for an extremum. This is a lesson that is often tested in exams.

Consider:
  f(x) = x³

Derivative:
  f'(x) = 3x²

Set equal to zero:
  3x² = 0

Thus:
  x = 0

However:
  f'(x) > 0

both before and after x = 0, except exactly at zero.

So the sign pattern is:
  + → 0 → +

The function is increasing on both sides.

Therefore, x = 0 is not a local maximum or minimum.

This is an excellent example of why a critical number does not automatically mean an extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPLETE PROCEDURE FOR FINDING INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here is a complete step‑by‑step procedure for finding increasing and decreasing intervals of any function. First, find the domain to identify any restrictions. Then compute the derivative. Next, find all critical numbers by solving f'(x) = 0 and also identifying points where f'(x) does not exist but the function is defined. These critical numbers divide the domain into intervals. Then, for each interval, choose a test point and evaluate the sign of the derivative. Finally, state the intervals where the function is increasing (f' > 0) and decreasing (f' < 0). This procedure works for all differentiable functions and is the standard method in calculus. Following it carefully ensures accurate results.

When given a function, use this procedure.

Step 1: Find the domain
  Determine where the function exists.

  For example: f(x) = 1/x has domain x ≠ 0.
  So x = 0 divides the domain.

Step 2: Find the derivative
  Calculate f'(x).

Step 3: Find critical numbers
  Solve f'(x) = 0 and identify where f'(x) does not exist, as long as the function itself is defined there.

Step 4: Divide the number line
  Use the critical numbers and domain restrictions to create intervals.

Step 5: Test the sign of f'(x)
  For every interval, choose a test value.
  Determine whether f'(x) > 0 or f'(x) < 0.

Step 6: State the intervals
  If f'(x) > 0, write Increasing.
  If f'(x) < 0, write Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the procedure to a rational function to see how domain restrictions affect the intervals. For f(x) = (x - 1)/(x + 1), the domain excludes x = -1. The derivative, using the quotient rule, is f'(x) = 2/(x + 1)². Since the numerator is positive and the denominator is a square (positive for all x ≠ -1), the derivative is positive on both intervals of the domain. Therefore, the function is increasing on (-∞, -1) and on (-1, ∞). We cannot combine these intervals because the function is not defined at x = -1. This example shows that domain restrictions are important and that intervals must be stated separately. The derivative test works regardless of the type of function, but we must always consider the domain.

Consider:
  f(x) = (x - 1)/(x + 1)

Find the increasing and decreasing intervals.

Step 1: Domain
  The denominator cannot equal zero:
    x + 1 ≠ 0
  Therefore:
    x ≠ -1

Step 2: Differentiate
  Using the quotient rule:
    f'(x) = [(x+1)(1) - (x-1)(1)]/(x+1)²
    = (x+1 - x + 1)/(x+1)²
    = 2/(x+1)²

Step 3: Determine the sign
  Since 2 > 0 and (x+1)² > 0 whenever x ≠ -1,
  we have:
    f'(x) > 0

  Therefore, the function is increasing on:
    (-∞, -1) and (-1, ∞)

Notice that x = -1 is not in the domain, so we cannot combine these intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. INCREASING AND DECREASING ON A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When examining a graph visually, increasing and decreasing are easy to spot. As you move from left to right, if the graph goes upward, it is increasing; if it goes downward, it is decreasing. A typical graph of a function with one maximum and one minimum might show the following sequence: increasing, then reaching a maximum, then decreasing, then reaching a minimum, then increasing again. The derivative test allows us to find these intervals algebraically, which is especially useful when the function is complicated and the graph is not available. By combining the visual intuition with the algebraic method, we can develop a deep understanding of how functions behave. This is the essence of curve sketching.

When looking at a graph, you don't necessarily need the derivative immediately.

Move from left to right.

If the graph goes ↗ upward → increasing
If the graph goes ↘ downward → decreasing

A typical graph might behave like:
  Increasing → Maximum → Decreasing → Minimum → Increasing

The derivative allows us to identify these behaviors algebraically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. CONNECTION TO CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing/decreasing analysis is intimately connected to critical points. A critical number is where the derivative is zero or undefined, and these are precisely the points where the function might change from increasing to decreasing (or vice versa). The critical numbers divide the domain into intervals, and within each interval, the sign of the derivative is constant. Therefore, by finding the critical numbers and testing the derivative on each interval, we can determine the increasing/decreasing behavior of the function. This connection is the foundation of the First Derivative Test and is essential for finding local extrema. The process is: function → derivative → critical numbers → intervals → sign test → increasing/decreasing.

Increasing/decreasing analysis is closely connected to critical points.

A critical number occurs when:
  f'(x) = 0
or:
  f'(x) does not exist while f(x) is defined.

Critical numbers divide the domain into intervals.

Then we use the derivative to determine whether the function is increasing or decreasing on each interval.

So the general process is:
  f(x) → f'(x) → Critical Numbers → Sign Chart → Increasing/Decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CONNECTION TO MAXIMUM AND MINIMUM VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This topic directly connects to the previous topic you studied: absolute extrema. The increasing/decreasing behavior tells us where the function is rising and falling, which is essential for locating local maxima and minima. A local maximum occurs where the function changes from increasing to decreasing ( + → - ). A local minimum occurs where it changes from decreasing to increasing ( - → + ). Thus, by analyzing the sign of the derivative, we can not only find the intervals of increase and decrease but also identify the extrema. This is the bridge between monotonicity and optimization. In the next topic, the First Derivative Test will formalize this connection and provide a systematic way to classify critical points.

This topic directly connects to the previous topic you studied: absolute extrema.

Suppose f'(x) > 0 before a critical point and f'(x) < 0 after it.

Then:
  Increasing → Decreasing

which indicates a local maximum.

Conversely:
  f'(x) < 0 before the critical point and f'(x) > 0 after it.

Then:
  Decreasing → Increasing

which indicates a local minimum.

So increasing/decreasing analysis helps us locate and classify extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT TERMINOLOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the key terms and their meanings. It is a quick reference for the concepts covered in this topic. Increasing means the graph rises (f' > 0). Decreasing means the graph falls (f' < 0). A critical number is a point where the derivative is zero or undefined. A local maximum occurs when the function changes from increasing to decreasing. A local minimum occurs when it changes from decreasing to increasing. Understanding these terms is essential for communicating about functions and for solving problems. They are the building blocks of more advanced topics like curve sketching and optimization.

  Increasing:
    f'(x) > 0
    The graph rises from left to right.

  Decreasing:
    f'(x) < 0
    The graph falls from left to right.

  Critical number:
    A value c where f'(c) = 0 or f'(c) does not exist while f(c) exists.

  Local maximum:
    Usually occurs when + → -

  Local minimum:
    Usually occurs when - → +

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. QUICK EXAMPLE TO PRACTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's practice with a cubic function that has both a local maximum and a local minimum. For f(x) = x³ - 3x² - 9x + 5, the derivative is f'(x) = 3x² - 6x - 9, which factors as 3(x - 3)(x + 1). The critical numbers are x = -1 and x = 3. Testing intervals, we find that the derivative is positive on (-∞, -1), negative on (-1, 3), and positive on (3, ∞). Therefore, the function is increasing on (-∞, -1) and (3, ∞), and decreasing on (-1, 3). At x = -1, the sign changes from + to -, indicating a local maximum. At x = 3, the sign changes from - to +, indicating a local minimum. This example demonstrates how the derivative test can analyze a function with multiple turning points.

Consider:
  f(x) = x³ - 3x² - 9x + 5

Find the intervals where the function is increasing and decreasing.

Derivative:
  f'(x) = 3x² - 6x - 9

Factor:
  f'(x) = 3(x² - 2x - 3)
  f'(x) = 3(x - 3)(x + 1)

Set equal to zero:
  3(x - 3)(x + 1) = 0

Therefore:
  x = -1, x = 3

These divide the number line into:
  (-∞, -1), (-1, 3), (3, ∞)

Test the derivative:

  Interval          Sign of f'(x)    Behavior
  ──────────────────────────────────────────────────
  (-∞, -1)          +                Increasing
  (-1, 3)           -                Decreasing
  (3, ∞)            +                Increasing

Therefore:
  Increasing on (-∞, -1) ∪ (3, ∞)
and:
  Decreasing on (-1, 3)

The sign changes also tell us:
  At x = -1: + → - so there is a local maximum.
  At x = 3: - → + so there is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea of increasing and decreasing functions is simple but powerful: the sign of the first derivative tells us whether the function is rising or falling. If f'(x) > 0, the function is increasing; if f'(x) < 0, it is decreasing; if f'(x) = 0, it is a possible critical point. The complete process is to find the derivative, find the critical numbers, divide the domain into intervals, test the sign of the derivative in each interval, and then state the increasing and decreasing intervals. The most important sign patterns to remember are + → - for a local maximum and - → + for a local minimum. This topic is a major foundation for the next calculus concepts: the First Derivative Test, local extrema, concavity, and curve sketching. Mastering it is essential for success in calculus.

The central idea is very simple:

  f'(x) > 0 ⇒ Increasing
  f'(x) < 0 ⇒ Decreasing
and:
  f'(x) = 0 ⇒ Possible critical point

The complete process is:
  Find f'(x) → Find critical numbers → Divide the number line → Test f'(x) → Identify increasing/decreasing intervals

The most important sign patterns:
  + → - = Local Maximum
  - → + = Local Minimum

And the easiest memory trick:
  Positive derivative = graph goes UP.
  Negative derivative = graph goes DOWN.

This topic is a major foundation for the next calculus concepts: First Derivative Test, Local Extrema, Concavity, and Curve Sketching.
  `,
  examples: [
    "f(x) = x² - 4x + 3 → f'(x) = 2x - 4, decreasing on (-∞,2), increasing on (2,∞)",
    "f(x) = -x² + 4x + 1 → f'(x) = -2x + 4, increasing on (-∞,2), decreasing on (2,∞)",
    "f(x) = x³ → f'(x) = 3x², increasing everywhere (no extrema at x=0)",
    "f(x) = (x-1)/(x+1) → f'(x) = 2/(x+1)², increasing on (-∞,-1) and (-1,∞)",
    "f(x) = x³ - 3x² - 9x + 5 → increasing on (-∞,-1)∪(3,∞), decreasing on (-1,3)",
    "f'(x) > 0 → increasing, f'(x) < 0 → decreasing",
    "+ → - = local max, - → + = local min",
  ],
};

export default topic;