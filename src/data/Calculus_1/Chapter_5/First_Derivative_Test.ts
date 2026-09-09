// filename: first-derivative-test.ts

const topic = {
  id: "first-derivative-test",
  title: "First Derivative Test",
  summary:
    "A method to determine whether a critical point is a local maximum, local minimum, or neither by examining the sign change of the first derivative around the critical point.",
  details: `
The First Derivative Test is a method used to determine whether a critical point is a local maximum, a local minimum, or neither.

It is based on something you just learned:

  The sign of the first derivative tells us whether a function is increasing or decreasing.

So the First Derivative Test takes the idea of increasing/decreasing functions and uses it to classify critical points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central insight of the First Derivative Test is that the behavior of a function around a critical point is determined by whether the derivative changes sign. A critical point is where the derivative is zero or undefined. By examining the sign of f'(x) just to the left and just to the right of that point, we can determine if the function is increasing then decreasing (which indicates a local maximum) or decreasing then increasing (a local minimum). If the sign does not change, the function continues in the same direction, so the critical point is neither a maximum nor a minimum. This test is intuitive: a peak occurs when the function stops rising and starts falling, and a valley occurs when it stops falling and starts rising. The First Derivative Test translates this geometric intuition into a precise algebraic procedure.

Suppose x = c is a critical number.

We examine the sign of f'(x) on the intervals immediately before and after c.

There are three important possibilities.

Case 1: Increasing → Decreasing
  If f'(x) > 0 before c, and f'(x) < 0 after c, then:
    Increasing → Decreasing

  Therefore, f(c) is a local maximum.

Case 2: Decreasing → Increasing
  If f'(x) < 0 before c, and f'(x) > 0 after c, then:
    Decreasing → Increasing

  Therefore, f(c) is a local minimum.

Case 3: No Sign Change
  If f'(x) has the same sign on both sides of c, then there is no local maximum or minimum at c.

  For example:
    + → + or - → -

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formal rule can be succinctly expressed in a table. The sign change of the derivative on either side of the critical point directly tells us the nature of that point. If the derivative goes from positive to negative, the function has a local maximum; if from negative to positive, a local minimum; if there is no change, the critical point is not an extremum. This table is extremely useful to memorize because it provides a quick reference for any critical point encountered. It also emphasizes that the derivative's sign is what matters, not just its value at the point. The test works for both cases where the derivative is zero and where it is undefined, as long as the function is continuous at that point.

The formal rule can be summarized as:

  Sign Change of f'(x)   |  Conclusion
  ────────────────────────┼─────────────────
  + → -                  |  Local Maximum
  - → +                  |  Local Minimum
  + → +                  |  Neither
  - → -                  |  Neither

This table is extremely useful to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES + → - MEAN MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Understanding why a change from positive to negative indicates a local maximum is straightforward when you think about the function's movement. If the derivative is positive before c, the function is increasing as x approaches c. If the derivative becomes negative after c, the function starts decreasing as x moves away from c. Thus, the function rises to a peak at c and then falls. This peak is exactly what we call a local maximum. The derivative being zero at c (or undefined) represents the instantaneous horizontal tangent at the peak. So the pattern + → 0 → - (or + → undefined → -) is the signature of a local maximum. This geometric interpretation helps in remembering the rule and in visualizing the graph.

Suppose the derivative changes like this:
  + → 0 → -

Before c:
  f'(x) > 0
  So the function is increasing.

After c:
  f'(x) < 0
  So the function is decreasing.

Therefore, the function climbs up to c, reaches a peak, and then falls.

Visually:
  UP → PEAK → DOWN

Therefore:
  Local Maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES - → + MEAN MINIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly, a change from negative to positive indicates a local minimum. Before c, the derivative is negative, so the function is decreasing. After c, the derivative is positive, so the function is increasing. This means the function falls to a low point at c and then rises. That low point is a local minimum. The derivative being zero at c (or undefined) corresponds to the bottom of the valley. The pattern - → 0 → + (or - → undefined → +) is the signature of a local minimum. This understanding is crucial because it reinforces that the First Derivative Test is not about the value of the derivative itself, but about how the function's direction changes. A minimum occurs when the function stops going down and starts going up.

Now suppose:
  - → 0 → +

Before c:
  f'(x) < 0
  The function is decreasing.

After c:
  f'(x) > 0
  The function is increasing.

Therefore, the function falls down to c, reaches a low point, and then rises.

Visually:
  DOWN → VALLEY → UP

Therefore:
  Local Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FORMAL STATEMENT OF THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's state the test formally. Suppose c is a critical number of f (meaning f'(c) = 0 or f'(c) does not exist, but f is defined at c). Then we examine the sign of f'(x) on intervals immediately to the left and right of c. If f'(x) > 0 for x < c and f'(x) < 0 for x > c, then f has a local maximum at c. If f'(x) < 0 for x < c and f'(x) > 0 for x > c, then f has a local minimum at c. If the sign of f' is the same on both sides, then f has neither a local maximum nor a local minimum at c (the point may be an inflection point or a plateau). This formal statement is the foundation of the test and should be memorized.

Suppose c is a critical number of f.

Local Maximum:
  If f'(x) > 0 to the left of c, and f'(x) < 0 to the right of c, then:
    f(c) is a local maximum.

Local Minimum:
  If f'(x) < 0 to the left of c, and f'(x) > 0 to the right of c, then:
    f(c) is a local minimum.

Neither:
  If the derivative does not change sign around c, then:
    f(c) is neither a local maximum nor minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO USE THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applying the First Derivative Test involves a systematic procedure. First, compute the derivative f'(x). Then find all critical numbers by solving f'(x) = 0 and also identifying points where f'(x) does not exist but f(x) does. These critical numbers divide the domain into intervals. For each interval, choose a test point and evaluate the sign of f'(x). This gives the increasing/decreasing behavior. Then, look at each critical number and see if the sign of f' changes from positive to negative (local maximum), negative to positive (local minimum), or not at all (neither). This procedure is reliable and works for any differentiable function. It is often more straightforward than the Second Derivative Test when the second derivative is complicated or when the critical point is a cusp.

Use this procedure:

Step 1: Find the derivative
  Calculate f'(x).

Step 2: Find critical numbers
  Solve f'(x) = 0 and identify points where f'(x) does not exist while f(x) exists.

Step 3: Place critical numbers on a number line
  These numbers divide the domain into intervals.

Step 4: Determine the sign of f'(x)
  Choose a test value from each interval.

Step 5: Look for sign changes
  Determine whether the derivative changes:
    + → - or - → +

Step 6: Classify the critical point
  + → - ⇒ Local Maximum
  - → + ⇒ Local Minimum
  No sign change ⇒ Neither

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1: FINDING A LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the test to a concrete function to see how it works. We'll use f(x) = x³ - 3x² + 2. This cubic polynomial has two critical points, and we will determine whether each is a max, min, or neither. By following the steps, we will see the sign changes that lead to the classification. This example illustrates the full process: computing the derivative, finding critical numbers, testing intervals, and interpreting sign changes. After classifying, we also find the actual coordinates of the extrema. This is a typical problem in calculus courses and demonstrates the power of the First Derivative Test.

Consider:
  f(x) = x³ - 3x² + 2

Find the local extrema using the First Derivative Test.

Step 1: Find f'(x)
  Differentiate:
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
    x = 0, 2

These divide the number line into:
  (-∞, 0), (0, 2), (2, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DETERMINE THE SIGN OF f'(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we test each interval by picking a convenient test point. For x < 0, choose -1: f'(-1) = 3(-1)(-3) = 9 > 0, so the function is increasing on (-∞, 0). For 0 < x < 2, choose 1: f'(1) = 3(1)(-1) = -3 < 0, so the function is decreasing on (0, 2). For x > 2, choose 3: f'(3) = 3(3)(1) = 9 > 0, so the function is increasing on (2, ∞). This sign information is crucial for the next step, where we identify sign changes at the critical points.

Interval 1: x < 0
  Choose x = -1.
  Then:
    f'(-1) = 3(-1)(-3) = 9
  Therefore:
    f'(x) > 0
  So the function is increasing.

Interval 2: 0 < x < 2
  Choose x = 1.
  Then:
    f'(1) = 3(1)(-1) = -3
  Therefore:
    f'(x) < 0
  So the function is decreasing.

Interval 3: x > 2
  Choose x = 3.
  Then:
    f'(3) = 3(3)(1) = 9
  Therefore:
    f'(x) > 0
  So the function is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. BUILD THE SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A sign chart organizes the derivative's sign on each interval. We place the critical numbers and record the sign of f' in each interval. At x = 0, the sign changes from + to -, so the function goes from increasing to decreasing. According to the First Derivative Test, this indicates a local maximum. At x = 2, the sign changes from - to +, so the function goes from decreasing to increasing, indicating a local minimum. This sign chart is a compact way to see all the information at once and is a standard tool in solving these problems.

  Interval        |  Sign of f'(x)  |  Behavior
  ─────────────────┼─────────────────┼─────────────────
  (-∞, 0)         |  +              |  Increasing
  x = 0           |  0              |  Critical
  (0, 2)          |  -              |  Decreasing
  x = 2           |  0              |  Critical
  (2, ∞)          |  +              |  Increasing

Now look at the changes.

At x = 0:
  + → -

Therefore:
  x = 0 is a local maximum.

At x = 2:
  - → +

Therefore:
  x = 2 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FIND THE ACTUAL MAXIMUM AND MINIMUM POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we know the x-values where the extrema occur, we compute the corresponding y-values to get the coordinates of the points. For x = 0, f(0) = 2, so the local maximum is at (0, 2). For x = 2, f(2) = -2, so the local minimum is at (2, -2). These points are the actual peaks and valleys of the graph. It is important to provide both the x and y values, as the problem often asks for the points. This step completes the analysis and gives the final answer.

We know the locations:
  x = 0 and x = 2

Now find their y-values.

At x = 0:
  f(0) = 0³ - 3(0)² + 2 = 2

Therefore:
  (0, 2) is the local maximum point.

At x = 2:
  f(2) = 2³ - 3(2)² + 2
  = 8 - 12 + 2
  = -2

Therefore:
  (2, -2) is the local minimum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 2: A CRITICAL POINT THAT IS NEITHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every critical point is an extremum. Consider f(x) = x³. Its derivative is f'(x) = 3x², which is zero at x = 0. However, the derivative is positive on both sides of 0 (since x² is positive for all x ≠ 0). Thus, the sign of f' does not change; it is + → +. According to the First Derivative Test, there is no local maximum or minimum at x = 0. This is an inflection point, where the concavity changes but the function continues to increase. This example is crucial because it demonstrates that f'(c) = 0 is a necessary but not sufficient condition for an extremum. You must always check the sign change.

Consider:
  f(x) = x³

Find the critical point and classify it.

Step 1: Derivative
  f'(x) = 3x²

Step 2: Critical number
  3x² = 0

Therefore:
  x = 0

Step 3: Test the signs

Take x = -1:
  f'(-1) = 3 > 0

Take x = 1:
  f'(1) = 3 > 0

So the sign pattern is:
  + → +

There is no sign change.

Therefore:
  x = 0 is neither a local maximum nor a local minimum.

This is a very important example.

Just because f'(0) = 0 doesn't mean x = 0 is automatically an extremum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 3: ANOTHER "NEITHER" CASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are also cases where the derivative is negative on both sides of a critical point. This would give a sign pattern of - → -. In such a case, the function is decreasing before and after, so it passes through the critical point without a peak or valley. This could occur at a point of inflection or a horizontal tangent that does not turn the direction. The First Derivative Test correctly identifies that no extremum exists. Understanding this reinforces that the test is about sign changes, not just the existence of a critical point. It also highlights the importance of analyzing the derivative's behavior on intervals, not just at isolated points.

Consider a function whose derivative behaves like:
  - → 0 → -

Before the critical point, the function is decreasing.

After the critical point, it is still decreasing.

So the graph continues moving downward.

There is no peak and no valley.

Therefore:
  Neither maximum nor minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CRITICAL NUMBER VS. LOCAL EXTREMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is essential to distinguish between a critical number and a local extremum. A critical number is simply an x-value where the derivative is zero or undefined. It is a candidate for a local extremum, but it does not guarantee one. The First Derivative Test is the tool that determines whether that candidate is actually a maximum, minimum, or neither. This distinction is often tested in exams and is a common source of confusion. Remember: finding f'(c) = 0 is just the first step; you must then analyze the sign of f' around c to draw a conclusion. Always state both the critical number and its classification.

These terms should not be confused.

A critical number is a candidate.

A local maximum/minimum is a conclusion after analyzing the behavior around the candidate.

For example:
  f'(c) = 0

means:
  c is a critical number

but it does not necessarily mean:
  c is an extremum

We need to examine the derivative's sign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. FIRST DERIVATIVE TEST VS. SIMPLY FINDING f'(x) = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common mistake is to find the critical numbers and then immediately declare them as maxima or minima without checking the sign change. For example, if you solve f'(x) = 0 and get x = 4, you cannot simply say "there is a maximum at x = 4." You must determine the sign of f' on both sides. If it is positive on the left and negative on the right, then it's a maximum; if negative then positive, it's a minimum; if the same sign, it's neither. The First Derivative Test is the proper method to classify critical points. This is one of the most important lessons in this topic: the derivative's value at a point is not enough; its behavior around the point matters.

Suppose you solve:
  f'(x) = 0

and obtain:
  x = 4

You cannot immediately say:
  "There is a maximum at x = 4."

You must determine the signs around x = 4.

If + → - then it is a maximum.
If - → + then it is a minimum.
If + → + or - → -, then it is neither.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RELATIONSHIP WITH INCREASING AND DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is a direct application of the increasing/decreasing concept. You already know that f'(x) > 0 means the function is increasing, and f'(x) < 0 means decreasing. The test simply asks what happens to that behavior at a critical point. If the function switches from increasing to decreasing, it's a maximum; if it switches from decreasing to increasing, it's a minimum; if it continues in the same direction, it's neither. This connection makes the test intuitive and easy to remember. It also shows how calculus concepts build on each other: first derivatives lead to monotonicity, which then leads to classification of extrema.

This topic follows directly from the previous topic.

You learned:
  f'(x) > 0 ⇒ increasing
and:
  f'(x) < 0 ⇒ decreasing

The First Derivative Test simply asks:
  What happens to increasing/decreasing behavior around the critical point?

So:
  Increasing → Decreasing ⇒ Maximum
and:
  Decreasing → Increasing ⇒ Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. RELATIONSHIP WITH ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

While the First Derivative Test identifies local extrema, it does not directly find absolute extrema. To find absolute extrema on a closed interval, you must also check the endpoints and compare all values. A local maximum may not be the absolute maximum if there is a higher value at an endpoint or at another point. However, the First Derivative Test is a crucial first step because it identifies all interior candidates for absolute extrema. Once you have the local extrema, you combine them with endpoints to find the absolute extrema. This distinction is important in optimization problems where you need the global best, not just a local peak.

The First Derivative Test is particularly useful for identifying local extrema.

However, remember the distinction between local and absolute extrema.

Local maximum:
  A point that is higher than nearby points.

Absolute maximum:
  The highest point over the entire domain or specified interval.

For example, a function can have several local maxima but only one absolute maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE OF LOCAL VS. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function that has two peaks: a small one and a tall one. Both peaks are local maxima because they are higher than their immediate surroundings. However, only the taller peak is the absolute maximum if it is the highest point in the entire domain. The First Derivative Test will identify both as local maxima. To determine which is the absolute maximum, you must evaluate the function at all critical points and endpoints. This example illustrates the difference between local and absolute extrema and why both concepts are needed. In optimization, you often need the absolute maximum, so you must go beyond the First Derivative Test.

Imagine a function with two peaks:
  small peak and large peak.

Both peaks can be local maxima.

But only the taller peak is the absolute maximum if it is the highest point in the entire domain.

The First Derivative Test tells us where local maxima and minima occur.

To determine absolute extrema on a closed interval, we also need to compare:
  • critical points
  • endpoints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHAT HAPPENS WHEN f'(x) DOES NOT EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test also applies to critical points where the derivative does not exist, as long as the function is defined at that point. For example, f(x) = |x| has a sharp corner at x = 0; the derivative does not exist there. However, the function decreases on (-∞, 0) and increases on (0, ∞), so the derivative is negative on the left and positive on the right. This sign change (- → +) indicates a local minimum at x = 0. Thus, the test works even when the derivative is undefined. This is important because many functions have cusps or corners, and you must still be able to classify those points. Always check the signs of f' on each side, whether the derivative exists at the point or not.

A critical number can occur when f'(x) does not exist, provided the function itself is defined there.

For example:
  f(x) = |x|

At x = 0, the derivative does not exist because of the sharp corner.

But f(x) = |x| decreases before 0 and increases after 0.

So the sign behavior is:
  - → +

Therefore:
  x = 0 is a local minimum.

This shows that the First Derivative Test can also be useful for critical points where the derivative does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A COMPLETE FIRST DERIVATIVE TEST EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a more complex example to see the full power of the test. We'll analyze f(x) = x⁴ - 4x², which has three critical points. By finding the derivative, factoring, and testing intervals, we will determine the sign changes at each critical point. This function has two minima and one maximum, demonstrating that a function can have multiple local extrema. The process is the same as before: derivative, critical numbers, sign analysis, and classification. This example also shows how the First Derivative Test can handle functions with higher-degree polynomials and multiple turning points.

Consider:
  f(x) = x⁴ - 4x²

Find all local extrema.

Step 1: Derivative
  f'(x) = 4x³ - 8x

Factor:
  f'(x) = 4x(x² - 2)

So:
  f'(x) = 4x(x - √2)(x + √2)

Step 2: Critical Numbers
  Set:
    4x(x - √2)(x + √2) = 0

Therefore:
  x = -√2, 0, √2

Step 3: Divide the number line

The intervals are:
  (-∞, -√2), (-√2, 0), (0, √2), (√2, ∞)

Step 4: Determine signs

For x < -√2, take x = -2:
  f'(-2) = 4(-2)(4 - 2) = -16 < 0

For -√2 < x < 0, take x = -1:
  f'(-1) = 4(-1)(1 - 2) = 4 > 0

For 0 < x < √2, take x = 1:
  f'(1) = 4(1)(1 - 2) = -4 < 0

For x > √2, take x = 2:
  f'(2) = 4(2)(4 - 2) = 16 > 0

So the actual sign pattern is:
  - + - +

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. CLASSIFYING THE CRITICAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we classify each critical point based on the sign changes. At x = -√2, the sign changes from - to +, so it is a local minimum. At x = 0, the sign changes from + to -, so it is a local maximum. At x = √2, the sign changes from - to +, so it is a local minimum. So the function has two local minima and one local maximum. This is a typical result for a quartic function with symmetry. The test works consistently and gives clear results. This example reinforces that the First Derivative Test is a reliable method for classifying critical points, regardless of the complexity of the function.

At x = -√2:
  - → +
  Therefore: Local Minimum

At x = 0:
  + → -
  Therefore: Local Maximum

At x = √2:
  - → +
  Therefore: Local Minimum

So the function has:
  • two local minima
  • one local maximum

This is a great example of why a function can have multiple local extrema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FINDING THE y-VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After classification, we often need the actual points. For x = 0, f(0) = 0, so the local maximum is at (0, 0). For x = ±√2, we compute f(√2) = (√2)⁴ - 4(√2)² = 4 - 8 = -4. Thus, the local minima are at (-√2, -4) and (√2, -4). This gives the complete set of local extrema. It is important to include these coordinates when solving problems, as they are often the final answer. The First Derivative Test not only classifies the nature of the critical points but also leads to their exact location.

For x = 0:
  f(0) = 0
  So the local maximum is: (0, 0)

For x = ±√2:
  x² = 2 and x⁴ = 4
  Therefore:
    f(x) = 4 - 4(2) = 4 - 8 = -4

Thus, the local minima are:
  (-√2, -4) and (√2, -4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. FIRST DERIVATIVE TEST CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To ensure you don't miss any steps, follow this checklist. It is a concise summary of the entire procedure. Start with finding the derivative, then find all critical numbers. Divide the domain into intervals using those numbers. Choose test points in each interval and determine the sign of f'. Then, at each critical number, note the sign change (or lack thereof). Finally, classify each point accordingly. This checklist is a reliable guide for any First Derivative Test problem. It helps prevent common mistakes such as forgetting to test intervals or misinterpreting sign changes.

When solving a problem, follow this checklist:

  1. Find f'(x).
  2. Find critical numbers.
  3. Put critical numbers on a number line.
  4. Choose test values in each interval.
  5. Determine the sign of f'(x).
  6. Look for sign changes.
  7. Classify the critical points.
  8. Evaluate f(c) if the actual coordinate is needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For quick reference, memorize this table. It summarizes the three possible outcomes of the First Derivative Test. The two most important cases are + → - for a local maximum and - → + for a local minimum. If there is no sign change, the point is neither. This table is useful for exams and homework because it allows you to quickly classify critical points once you have determined the sign pattern.

  Derivative before c     Derivative after c     Result
  ──────────────────────────────────────────────────────────────
  +                       -                      Local Maximum
  -                       +                      Local Minimum
  +                       +                      Neither
  -                       -                      Neither

Memorize these two:
  + → - = MAX
  - → + = MIN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. CONNECTION TO THE TOPICS YOU'VE STUDIED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is a natural progression from the previous topics. You learned how to find the derivative, then how to determine increasing/decreasing intervals. The test takes that knowledge and applies it to classify critical points. It also leads to the concept of local extrema, which is a prerequisite for optimization and the Second Derivative Test. This progression shows how calculus builds on itself: each new concept uses and extends the previous ones. Understanding this flow helps you appreciate the structure of calculus and makes it easier to remember the methods.

You can now see how these calculus topics build on each other:

  Derivative
    ↓
  Increasing/Decreasing Functions
    ↓
  Critical Numbers
    ↓
  First Derivative Test
    ↓
  Local Maximum/Minimum
    ↓
  Absolute Extrema

So the First Derivative Test is essentially the tool that turns derivative information into conclusions about maxima and minima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, the First Derivative Test is a method to classify critical points as local maxima, local minima, or neither by examining the sign change of the derivative around the point. The key rules are: + → - gives a local maximum, - → + gives a local minimum, and no sign change gives neither. The test is easy to apply once you understand the increasing/decreasing behavior of the function. It is a fundamental tool in calculus and is used extensively in curve sketching and optimization. The most important takeaway is that a critical point is not automatically an extremum; you must always check the sign of the derivative on both sides.

The First Derivative Test determines whether a critical point is a local maximum, local minimum, or neither by examining the sign of f'(x) immediately before and after the critical point.

The key rules are:
  f'(x): + → - ⇒ Local Maximum
  f'(x): - → + ⇒ Local Minimum
and:
  No sign change ⇒ Neither

Easy way to remember:
  MAX: the graph goes UP then DOWN. ↑ → ↓
  MIN: the graph goes DOWN then UP. ↓ → ↑

The most important thing is not simply finding f'(x) = 0. The real purpose of the First Derivative Test is to determine how the derivative changes sign around the critical point.
  `,
  examples: [
    "f(x) = x³ - 3x² + 2 → f'(x) = 3x(x-2), x=0 (max), x=2 (min)",
    "f(x) = x³ → f'(x) = 3x², x=0 → + → + (neither)",
    "f(x) = x⁴ - 4x² → f'(x) = 4x(x-√2)(x+√2), -√2 (min), 0 (max), √2 (min)",
    "f(x) = |x| → f'(x) DNE at 0, - → + (min)",
    "+ → - = Local Maximum",
    "- → + = Local Minimum",
    "No sign change = Neither (not an extremum)",
  ],
};

export default topic;