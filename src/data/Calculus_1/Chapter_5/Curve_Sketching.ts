// filename: curve-sketching.ts

const topic = {
  id: "curve-sketching",
  title: "Curve Sketching",
  summary:
    "The process of analyzing a function mathematically using domain, intercepts, symmetry, asymptotes, critical points, increasing/decreasing behavior, concavity, and inflection points to produce an accurate sketch of its graph.",
  details: `
Curve sketching is the process of analyzing a function mathematically and using that information to produce an accurate sketch of its graph.

Instead of simply plotting random points, calculus gives us a systematic way to understand the overall behavior and shape of a function.

Curve sketching combines many topics you have already studied:
  • Domain
  • Intercepts
  • Symmetry
  • Limits
  • Asymptotes
  • Continuity
  • Increasing and decreasing functions
  • Critical points
  • Relative maximum and minimum
  • Concavity
  • Points of inflection
  • First derivative
  • Second derivative

The goal is to answer:
  "What does the graph look like, and why?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY CURVE SKETCHING IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Curve sketching is a fundamental application of calculus because it transforms abstract functions into visual representations that reveal their behavior. While plotting points is possible, it does not provide the deeper insights that calculus offers such as where the function is increasing or decreasing, where it reaches peaks and valleys, and how it bends. By using the first and second derivatives, we can determine the precise shape of the graph without having to evaluate the function at hundreds of points. This analytical approach is not only more efficient but also more accurate and insightful. Curve sketching is essential in many fields, including physics, engineering, economics, and biology, where understanding the behavior of a function is key to modeling real-world phenomena. It also reinforces the connections between algebraic expressions and their geometric representations.

Suppose you are given:
  f(x) = x³ - 3x² - 9x + 5

You could plug in many x-values and plot the resulting points.

But that approach doesn't necessarily tell you:
  • where the function increases,
  • where it decreases,
  • where it has a maximum,
  • where it has a minimum,
  • where it bends upward,
  • where it bends downward,
  • where its concavity changes.

Calculus allows us to determine all of these analytically.

Therefore, curve sketching is essentially the process of combining derivative information to understand the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN PARTS OF CURVE SKETCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A complete curve sketch involves a systematic analysis that covers all aspects of the function's behavior. The process begins with the domain, which tells us where the function exists. Intercepts give us specific points where the graph crosses the axes. Symmetry can simplify the sketching process by revealing patterns. Limits and asymptotes describe the function's behavior near boundaries and at infinity. The first derivative provides information about increasing/decreasing intervals and critical points, which are the locations of potential extrema. The second derivative reveals concavity and inflection points. Together, these pieces of information form a complete picture of the graph. Not every function requires every step, but the framework is comprehensive and can be applied to any function that is sufficiently well-behaved. This structured approach ensures that no important features are missed.

A complete curve sketch usually involves the following:

  1. Domain
  2. Intercepts
  3. Symmetry
  4. Limits
  5. Asymptotes
  6. Critical points
  7. Increasing/decreasing intervals
  8. Relative extrema
  9. Concavity
  10. Inflection points
  11. End behavior
  12. Sketch the graph

Not every function requires every step, but this is a powerful general framework.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. STEP 1: FIND THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain is the set of all x-values for which the function is defined. It is the first and most fundamental step because the graph cannot exist where the function is undefined. For polynomials, the domain is all real numbers. For rational functions, we must exclude values that make the denominator zero. For root functions, we must ensure the radicand is non-negative for even roots. For logarithmic functions, the argument must be positive. Determining the domain also helps identify potential vertical asymptotes, which occur at values excluded from the domain where the function becomes unbounded. Always state the domain in interval notation. This step is essential because it sets the boundaries within which we will analyze the function.

The domain tells us which x-values are allowed.

Before doing anything else, determine where the function exists.

For example:
  f(x) = 1/(x - 2)

The denominator cannot equal zero.

Therefore:
  x - 2 ≠ 0
  x ≠ 2

The domain is:
  (-∞, 2) ∪ (2, ∞)

This is important because x = 2 will eventually become a candidate for a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. STEP 2: FIND THE INTERCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Intercepts are points where the graph crosses the coordinate axes. They provide anchor points for the sketch. The y-intercept is found by setting x = 0 and evaluating the function, giving the point (0, f(0)). The x-intercepts, also called roots or zeros, are found by setting f(x) = 0 and solving for x. These points indicate where the graph touches or crosses the x-axis. Finding intercepts can be straightforward for simple functions but may require numerical methods for more complex polynomials. Intercepts are valuable because they give specific points that the graph must pass through, which helps in drawing the curve accurately. They also provide information about the function's behavior relative to the axes.

Intercepts help us determine where the graph crosses the coordinate axes.

y-intercept:
  Set x = 0.
  Then calculate f(0).
  The point is: (0, f(0))

x-intercepts:
  Set f(x) = 0.
  Solve for x.
  If x = a, then the corresponding x-intercept is: (a, 0)

Intercepts give us important points to place on the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP 3: CHECK SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry is a property that can significantly simplify the process of curve sketching. If a function is even, its graph is symmetric about the y-axis, meaning we only need to sketch one half and reflect it. If a function is odd, its graph is symmetric about the origin, which also reduces the work. Even functions satisfy f(-x) = f(x), while odd functions satisfy f(-x) = -f(x). Recognizing symmetry early can save time and effort, especially for complex functions. Many functions, however, are neither even nor odd, and in those cases we must analyze the entire domain. Checking symmetry is a quick step that can yield significant benefits in curve sketching.

Symmetry can make curve sketching much easier.

There are three important possibilities.

Even Function:
  If f(-x) = f(x), then the function is even.
  Its graph is symmetric about the y-axis.
  Example: f(x) = x²
  Because f(-x) = (-x)² = x² = f(x), the function is even.

Odd Function:
  If f(-x) = -f(x), then the function is odd.
  Its graph is symmetric about the origin.
  Example: f(x) = x³
  Because f(-x) = (-x)³ = -x³ = -f(x), it is odd.

Neither:
  If neither condition is satisfied, the function has neither even nor odd symmetry.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP 4: ANALYZE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits help us understand the behavior of the function as x approaches certain values, including infinity. Evaluating limits at infinity (x → ∞ and x → -∞) reveals the end behavior and helps identify horizontal asymptotes. Evaluating limits as x approaches points of discontinuity (such as where the denominator is zero) can reveal vertical asymptotes or holes. Limits are also used to confirm the behavior of the function near critical points and inflection points. Understanding limits is essential for a complete curve sketch because they describe the function's behavior at the boundaries of the domain and at points where the function is not defined. Without limits, the sketch would be incomplete.

Limits help us understand what happens to the function near certain points and as x becomes very large or very negative.

For example:
  lim(x→∞) f(x)

tells us what happens on the far right side of the graph.

And:
  lim(x→-∞) f(x)

tells us what happens on the far left.

Limits are especially useful for identifying asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 5: FIND VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote is a vertical line x = a that the graph approaches as x gets closer to a from one or both sides. Vertical asymptotes occur at values where the function is undefined and the limit is infinite. For rational functions, they typically occur at zeros of the denominator that do not cancel with the numerator. On the graph, the function will tend to +∞ or -∞ near the asymptote, and the curve will become arbitrarily close to the vertical line without crossing it. Vertical asymptotes are important because they create separate branches of the graph and dramatically affect its shape. Identifying them is essential for understanding the function's behavior near points of discontinuity.

A vertical asymptote occurs when the function becomes unbounded near some x = a.

For example:
  f(x) = 1/(x - 2)

As x → 2, the function becomes extremely large in magnitude.

Therefore:
  x = 2 is a vertical asymptote.

On a curve sketch, the graph approaches this vertical line but does not cross it in the ordinary sense.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 6: FIND HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal asymptote is a horizontal line y = L that the graph approaches as x → ∞ or x → -∞. It describes the end behavior of the function. For rational functions, horizontal asymptotes are determined by the degrees of the numerator and denominator. If the degree of the numerator is less than the degree of the denominator, the horizontal asymptote is y = 0. If the degrees are equal, the asymptote is the ratio of the leading coefficients. If the numerator degree is greater, there is no horizontal asymptote. Horizontal asymptotes provide a global view of the function's behavior and help in sketching the graph at the far ends. They are distinct from vertical asymptotes, which describe local behavior near specific x-values.

A horizontal asymptote describes the behavior of the function as x → ∞ or x → -∞.

If:
  lim(x→∞) f(x) = L

then:
  y = L is a horizontal asymptote.

For example:
  f(x) = 1/x

We have:
  lim(x→∞) 1/x = 0

Therefore:
  y = 0 is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 7: FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now derivatives become especially important. A critical number is a point in the domain where the derivative is zero or undefined. These points are the candidates for relative extrema (maxima and minima). To find them, we compute the first derivative f'(x) and solve f'(x) = 0, and also identify any points where f'(x) does not exist but the function is defined. Critical numbers divide the domain into intervals where the function is either increasing or decreasing. They are essential for analyzing the function's monotonicity. Not every critical number corresponds to an extremum; some may be inflection points or flat regions. However, finding all critical numbers is the first step in identifying the function's peaks and valleys.

Now derivatives become especially important.

Find f'(x).

Critical numbers occur where:
  f'(x) = 0
or where:
  f'(x) does not exist

provided the point is in the domain of f.

These locations are important because the function may have a relative maximum, relative minimum, or other special behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. STEP 8: DETERMINE INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the first derivative, we determine where the function is increasing or decreasing. If f'(x) > 0 on an interval, the function is increasing there. If f'(x) < 0, the function is decreasing. The critical numbers divide the domain into intervals, and we test the sign of f'(x) in each interval by choosing a test point. This step provides the monotonicity information, which is crucial for understanding the overall shape of the graph. It also helps in locating relative extrema: a change from increasing to decreasing indicates a local maximum, while a change from decreasing to increasing indicates a local minimum. This analysis is the foundation of the First Derivative Test.

Use the first derivative.

If f'(x) > 0, then Increasing.
If f'(x) < 0, then Decreasing.

The critical numbers divide the domain into intervals.

You then test the sign of f'(x) on each interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's illustrate the increasing/decreasing analysis with a simple example. Suppose f'(x) = 3(x - 1)(x + 2). The critical numbers are x = -2 and x = 1. These values divide the real line into three intervals: (-∞, -2), (-2, 1), and (1, ∞). Testing a point in each interval, say x = -3, x = 0, and x = 2, we find that f' is positive on the first interval, negative on the second, and positive on the third. Therefore, the function is increasing on (-∞, -2) and (1, ∞), and decreasing on (-2, 1). This information tells us that there is a local maximum at x = -2 (where the function changes from increasing to decreasing) and a local minimum at x = 1 (where it changes from decreasing to increasing). This example demonstrates how the first derivative provides a complete picture of the function's direction.

Suppose:
  f'(x) = 3(x - 1)(x + 2)

Critical numbers are:
  x = -2, x = 1

These divide the number line into:
  (-∞, -2), (-2, 1), (1, ∞)

Testing the signs gives:

  Interval          Sign of f'(x)    Behavior
  ───────────────────────────────────────────────────
  (-∞, -2)          +                Increasing
  (-2, 1)           -                Decreasing
  (1, ∞)            +                Increasing

Therefore:
  Increasing on (-∞, -2) and (1, ∞)
while:
  Decreasing on (-2, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEP 9: FIND RELATIVE MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Relative extrema are the high and low points of the function within a local neighborhood. They are identified using the First Derivative Test: if the derivative changes from positive to negative at a critical number, the function has a relative maximum. If it changes from negative to positive, the function has a relative minimum. If there is no sign change, the critical point is neither a max nor a min (it may be a plateau or an inflection point). The First Derivative Test is intuitive and reliable. It also helps distinguish between relative and absolute extrema, which is important in optimization problems. In curve sketching, relative extrema are key points that define the peaks and valleys of the graph.

Once you know the increasing/decreasing behavior, you can identify relative extrema.

Increasing → Decreasing:
  If + → -, then Relative Maximum.

Decreasing → Increasing:
  If - → +, then Relative Minimum.

For the previous example:
  + → - at x = -2, so x = -2 is a relative maximum.
and:
  - → + at x = 1, so x = 1 is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STEP 10: FIND THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative f''(x) provides information about the curvature or concavity of the function. It is obtained by differentiating the first derivative. The sign of f'' tells us whether the graph bends upward or downward. If f''(x) > 0, the graph is concave up (cup-shaped). If f''(x) < 0, the graph is concave down (cap-shaped). The second derivative also helps in classifying critical points via the Second Derivative Test: if f'(c) = 0 and f''(c) > 0, c is a local minimum; if f'(c) = 0 and f''(c) < 0, c is a local maximum. This test is often more efficient than the First Derivative Test when the second derivative is easy to compute.

Now determine the concavity.

Calculate f''(x).

Remember:
  f''(x) > 0 ⇒ Concave Up
and:
  f''(x) < 0 ⇒ Concave Down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. STEP 11: FIND POSSIBLE INFLECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inflection points are points where the concavity changes. To find them, we solve f''(x) = 0 and identify where f''(x) does not exist, but the function is defined. These are candidate inflection points. We then test the sign of f'' on either side of each candidate. If the sign changes, the point is an inflection point. If the sign does not change, it is not an inflection point (as in the case of f(x) = x⁴, where f''(0) = 0 but concavity does not change). Inflection points are important because they mark where the graph changes its curvature, which can significantly affect the overall shape. They often correspond to changes in the rate of growth or decay of a function.

Solve:
  f''(x) = 0

and identify where f''(x) does not exist.

Then check whether the concavity actually changes.

If it changes from:
  Concave Down → Concave Up
or:
  Concave Up → Concave Down

then the point is an Inflection Point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A COMPLETE CURVE-SKETCHING EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now let's apply all the steps to a specific function: f(x) = x³ - 3x² - 9x + 5. This cubic polynomial is a good example because it has both maxima and minima, as well as an inflection point. We'll go through each step in detail. First, the domain is all real numbers since it's a polynomial. The y-intercept is (0, 5). The x-intercepts require solving a cubic equation, which may not have simple rational roots, so we might use numerical methods or state them approximately. The first derivative is f'(x) = 3x² - 6x - 9, which factors to 3(x - 3)(x + 1). Critical numbers are x = -1 and x = 3. The second derivative is f''(x) = 6x - 6, which gives a possible inflection point at x = 1. We'll analyze the signs of the derivatives to determine increasing/decreasing intervals, concavity, and extrema.

Let's analyze:
  f(x) = x³ - 3x² - 9x + 5

step by step.

Step 1: Domain
  Because this is a polynomial, it is defined for every real number.
  Therefore: Domain = (-∞, ∞)

Step 2: y-intercept
  Set x = 0.
  Then: f(0) = 5
  Therefore: (0, 5) is the y-intercept.

Step 3: x-intercepts
  Set: x³ - 3x² - 9x + 5 = 0
  This polynomial does not factor conveniently using simple integer roots, so numerical methods can be used to approximate its zeros.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEP 4: FIRST DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first derivative gives the slope of the tangent line at any point. For f(x) = x³ - 3x² - 9x + 5, we differentiate to get f'(x) = 3x² - 6x - 9. Factoring, we get f'(x) = 3(x - 3)(x + 1). Setting this equal to zero gives the critical numbers x = -1 and x = 3. These are the points where the slope is zero, meaning the tangent line is horizontal. These are the only possible locations for relative extrema. The first derivative also tells us the sign of the slope on each interval, which we will use to determine where the function is increasing or decreasing.

Differentiate:
  f'(x) = 3x² - 6x - 9

Factor:
  f'(x) = 3(x² - 2x - 3)
  f'(x) = 3(x - 3)(x + 1)

Set:
  f'(x) = 0

Therefore:
  x = -1 and x = 3

These are critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. STEP 5: INCREASING AND DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the critical numbers, we divide the domain into three intervals: (-∞, -1), (-1, 3), and (3, ∞). We test the sign of f'(x) in each interval by choosing a test point. For x = -2, f'(-2) = 3(-5)(-1) = 15 > 0, so the function is increasing on (-∞, -1). For x = 0, f'(0) = 3(-3)(1) = -9 < 0, so the function is decreasing on (-1, 3). For x = 4, f'(4) = 3(1)(5) = 15 > 0, so the function is increasing on (3, ∞). Therefore, the function increases from -∞ to -1, decreases from -1 to 3, and then increases again from 3 to ∞. This pattern indicates a local maximum at x = -1 and a local minimum at x = 3.

The critical numbers divide the number line into:
  (-∞, -1), (-1, 3), (3, ∞)

Test x = -2:
  f'(-2) = 3(-5)(-1) > 0
  So the function is increasing.

Test x = 0:
  f'(0) = 3(-3)(1) < 0
  So the function is decreasing.

Test x = 4:
  f'(4) = 3(1)(5) > 0
  So the function is increasing.

Therefore:
  Increasing on (-∞, -1)
  Decreasing on (-1, 3)
  Increasing on (3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. STEP 6: RELATIVE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From the increasing/decreasing analysis, we see that at x = -1, the function changes from increasing to decreasing. This means the function reaches a local maximum at x = -1. Evaluating f(-1) gives 10, so the point (-1, 10) is a local maximum. At x = 3, the function changes from decreasing to increasing, indicating a local minimum. Evaluating f(3) gives -22, so the point (3, -22) is a local minimum. These extrema are key features of the graph: the maximum is a peak, and the minimum is a valley. They help define the overall shape of the cubic function, which typically has one peak and one valley.

At x = -1, the function changes: + → -
Therefore, there is a Relative Maximum at x = -1.

Calculate:
  f(-1) = (-1)³ - 3(-1)² - 9(-1) + 5
  = -1 - 3 + 9 + 5
  = 10

Therefore:
  (-1, 10) is a relative maximum.

At x = 3, the function changes: - → +
Therefore, there is a Relative Minimum at x = 3.

Calculate:
  f(3) = 27 - 27 - 27 + 5
  = -22

Therefore:
  (3, -22) is a relative minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. STEP 7: SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we find the second derivative to analyze concavity. Differentiating f'(x) = 3x² - 6x - 9 gives f''(x) = 6x - 6. Setting f''(x) = 0 gives x = 1. This is a candidate for an inflection point. The second derivative also helps confirm the nature of the critical points: at x = -1, f''(-1) = -12 < 0, confirming a local maximum. At x = 3, f''(3) = 12 > 0, confirming a local minimum. This is the Second Derivative Test in action. The second derivative is negative on the left of x = 1 and positive on the right, indicating a change in concavity.

Differentiate:
  f'(x) = 3x² - 6x - 9

We get:
  f''(x) = 6x - 6

Set:
  f''(x) = 0
  6x - 6 = 0

Therefore:
  x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. STEP 8: CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative tells us the concavity of the function. For x < 1, f''(x) < 0, so the function is concave down. For x > 1, f''(x) > 0, so the function is concave up. At x = 1, the concavity changes from down to up. Therefore, x = 1 is an inflection point. Evaluating f(1) gives -6, so the inflection point is (1, -6). This means the graph bends downward before x = 1 and upward after x = 1. Inflection points are significant because they indicate a change in the curvature of the graph, which can affect the overall shape. In this cubic function, the inflection point is exactly between the maximum and minimum, which is typical for cubic polynomials.

For x < 1, choose x = 0:
  f''(0) = -6

Therefore:
  Concave Down on (-∞, 1)

For x > 1, choose x = 2:
  f''(2) = 6

Therefore:
  Concave Up on (1, ∞)

The concavity changes at x = 1.

Therefore, there is an inflection point.

Calculate:
  f(1) = 1 - 3 - 9 + 5 = -6

Thus:
  (1, -6) is the inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. CURVE INFORMATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now we have all the information needed to sketch the graph. The summary table below organizes the key features: domain, intercepts, critical numbers, relative extrema, increasing/decreasing intervals, concavity, and inflection point. This table provides a concise overview of the function's behavior. With this information, we can plot the important points and sketch the curve smoothly, ensuring that the graph passes through the intercepts, peaks at the maximum, valleys at the minimum, and changes concavity at the inflection point. The sketch will accurately reflect the function's behavior across its entire domain.

We can now organize everything.

  Feature                Result
  ─────────────────────────────────────────────────────────
  Domain                 (-∞, ∞)
  y-intercept            (0, 5)
  Critical numbers       x = -1, 3
  Relative maximum       (-1, 10)
  Relative minimum       (3, -22)
  Increasing             (-∞, -1) ∪ (3, ∞)
  Decreasing             (-1, 3)
  Concave down           (-∞, 1)
  Concave up             (1, ∞)
  Inflection point       (1, -6)

This information gives us enough structure to sketch the curve accurately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. HOW THE PIECES FIT TOGETHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graph of f(x) = x³ - 3x² - 9x + 5 can now be described in words. As x approaches -∞, the function also approaches -∞ because the leading term is x³. It increases, reaching a local maximum at (-1, 10), then decreases, passing through an inflection point at (1, -6), continuing to decrease until it reaches a local minimum at (3, -22), and then increases toward +∞ as x approaches ∞. This sequence of events increase, max, decrease, inflection, decrease, min, increase is characteristic of cubic functions with three real roots. The inflection point is the center of symmetry of the function's curvature. Understanding this narrative helps in visualizing the graph without plotting many points.

The graph begins on the far left.

The function is:
  Increasing and Concave Down

It reaches a relative maximum at:
  (-1, 10)

Then it starts decreasing.

At (1, -6), the graph changes concavity.

It continues decreasing until:
  (3, -22)

where it reaches a relative minimum.

After that, the function begins increasing again.

So the overall behavior is:
  Increase → Maximum → Decrease → Inflection → Minimum → Increase

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE FIRST DERIVATIVE AND SECOND DERIVATIVE WORK TOGETHER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first and second derivatives provide complementary information that together give a complete picture of the graph. The first derivative tells us where the function is increasing or decreasing, which is about the direction of the graph. The second derivative tells us about the curvature whether the graph bends upward or downward. Together, they describe the four possible combinations of direction and curvature: increasing concave up, increasing concave down, decreasing concave up, and decreasing concave down. In curve sketching, we use both derivatives to determine the shape of the graph between critical points and inflection points. This synergy is one of the most powerful aspects of calculus.

This is one of the most important concepts in curve sketching.

First derivative f'(x) tells us:
  Which direction is the graph moving?
  f' > 0: increasing
  f' < 0: decreasing

Second derivative f''(x) tells us:
  How is the graph bending?
  f'' > 0: concave up
  f'' < 0: concave down

Together they provide a detailed description of the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. CURVE SKETCHING TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A curve sketching table combines the information from the first and second derivatives into a compact format. For each interval, we record the sign of f' (and thus the behavior: increasing or decreasing), the sign of f'' (and thus the concavity: up or down), and the overall shape. This table is a powerful tool for visualizing the graph. For example, in the interval (-∞, -1), f' > 0 and f'' < 0, so the function is increasing and concave down. This means the graph rises but bends downward. In the interval (-1, 1), f' < 0 and f'' < 0, so the function is decreasing and concave down. This pattern continues across all intervals. The table essentially tells us how to draw the curve.

A very useful technique is to create a curve analysis table.

For example:

  Interval          f'(x)    Behavior       f''(x)    Concavity
  ────────────────────────────────────────────────────────────────────
  (-∞, -1)          +        Increasing     -         Concave Down
  (-1, 1)           -        Decreasing     -         Concave Down
  (1, 3)            -        Decreasing     +         Concave Up
  (3, ∞)            +        Increasing     +         Concave Up

This table essentially tells you how to draw the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

End behavior describes what happens to the function as x approaches positive or negative infinity. For polynomial functions, this is determined by the leading term (the term with the highest degree). For f(x) = x³ - 3x² - 9x + 5, the leading term is x³. As x → ∞, x³ → ∞, so the function goes to +∞. As x → -∞, x³ → -∞, so the function goes to -∞. This means the graph goes downward on the far left and upward on the far right. End behavior is important because it tells us the ultimate direction of the graph at its extremes. It also helps in determining whether the function has horizontal asymptotes (for rational functions) or grows without bound (for polynomials). Always check end behavior when sketching a curve.

For polynomial functions, you should also consider what happens when:
  x → ∞ and x → -∞

For f(x) = x³ - 3x² - 9x + 5, the highest-degree term is x³.

Therefore:
  x → ∞ ⇒ f(x) → ∞
and:
  x → -∞ ⇒ f(x) → -∞

So the graph goes:
  downward on the far left,
  upward on the far right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A GENERAL CURVE-SKETCHING ALGORITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following algorithm provides a systematic approach to curve sketching. It covers all the key steps and ensures that no important information is overlooked. Start with the domain, then find intercepts and check symmetry. Then analyze limits and asymptotes. Next, find the first derivative, critical numbers, and determine increasing/decreasing intervals and relative extrema. Then find the second derivative, determine concavity, and identify inflection points. Finally, plot all important points and draw the curve. This algorithm is applicable to a wide range of functions, from polynomials to rational functions to trigonometric functions. It is a powerful tool for understanding and visualizing functions.

When you are given a function and asked to sketch its curve, use this order:

  1. Domain
  2. Intercepts
  3. Symmetry
  4. Limits
  5. Asymptotes
  6. First derivative
  7. Critical numbers
  8. Increasing/decreasing
  9. Relative extrema
  10. Second derivative
  11. Concavity
  12. Inflection points
  13. Plot important points
  14. Draw the curve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. WHAT CURVE SKETCHING IS REALLY DOING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Curve sketching is more than just drawing a picture; it is a comprehensive analysis that reveals the behavior of a function. Each step domain, intercepts, asymptotes, derivatives contributes a piece of information that, when combined, gives a complete and accurate representation of the graph. The process is both analytical and creative: it uses calculus to determine the key features and then translates those features into a visual form. Curve sketching reinforces the connections between algebra, calculus, and geometry. It also develops problem-solving skills that are transferable to many other areas. By understanding the full picture, we can interpret functions more deeply and apply them more effectively.

Curve sketching isn't just about drawing.

You're essentially constructing a mathematical description of the graph.

Every calculation contributes information about the final shape.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. COMMON MISTAKES IN CURVE SKETCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several common pitfalls in curve sketching. One is relying solely on plotting points without using derivatives, which misses important features like extrema and inflection points. Another is forgetting to check for asymptotes, which can dramatically change the shape of the graph. Some students find critical points but fail to test them, leading to incorrect classification of extrema. Others assume that f''(x) = 0 automatically means an inflection point, without verifying the sign change. Forgetting the domain can also lead to errors, such as drawing the graph where the function is undefined. To avoid these mistakes, always follow the systematic algorithm and verify each step. This careful approach ensures a correct and accurate sketch.

Mistake 1: Only plotting points
  A few points don't tell you the complete behavior of a function.
  Use derivatives and limits.

Mistake 2: Forgetting asymptotes
  For rational functions, asymptotes can completely change the shape of the graph.

Mistake 3: Finding critical points but not testing them
  Finding f'(x) = 0 doesn't automatically tell you whether a point is a maximum or minimum.
  Use the First Derivative Test or Second Derivative Test.

Mistake 4: Assuming f''(x) = 0 is automatically an inflection point
  You must verify that concavity changes.

Mistake 5: Ignoring the domain
  The graph cannot exist where the function is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The major calculus concepts come together in curve sketching to form a unified framework. The function itself is the starting point. The first derivative gives increasing/decreasing behavior and critical points. The sign of the first derivative identifies relative extrema. The second derivative gives concavity and inflection points. By combining all this information, we can produce a complete sketch of the graph. This progression from function to derivative to shape is one of the most important logical sequences in calculus. Curve sketching demonstrates the power of derivatives to reveal the hidden structure of functions. It is a culminating activity that synthesizes many of the topics you have learned.

The major calculus concepts you've been studying fit together like this:

  f(x) → Function
    ↓
  f'(x) → Increasing/Decreasing
    ↓
  f'(x) = 0 → Critical Numbers
    ↓
  f'(x) sign → Relative Max/Min
    ↓
  f''(x) → Concavity
    ↓
  f''(x) = 0 → Possible Inflection
    ↓
  Concavity Change → Inflection Point
    ↓
  All Information → Curve Sketch

This is why curve sketching is one of the most important applications of derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Curve sketching is a comprehensive method for analyzing and drawing the graph of a function. It uses domain, intercepts, symmetry, limits, asymptotes, the first and second derivatives, critical points, increasing/decreasing intervals, relative extrema, concavity, and inflection points to produce an accurate sketch. The key relationships are: f'(x) > 0 means increasing, f'(x) < 0 means decreasing, f''(x) > 0 means concave up, and f''(x) < 0 means concave down. By systematically applying these steps, you can sketch any function that is differentiable on its domain. Curve sketching is not just an exercise in drawing; it is a demonstration of how calculus provides a complete understanding of a function's behavior.

When you need to sketch a curve, remember:

  1. Domain
  2. Intercepts
  3. Symmetry
  4. Limits and Asymptotes
  5. First Derivative
  6. Critical Points
  7. Increasing/Decreasing
  8. Relative Max/Min
  9. Second Derivative
  10. Concavity
  11. Inflection Points
  12. Sketch the Graph

The three most important relationships are:

  f'(x) > 0 ⇒ Increasing
  f'(x) < 0 ⇒ Decreasing
  f''(x) > 0 ⇒ Concave Up
  f''(x) < 0 ⇒ Concave Down

So, in one sentence:

  Curve sketching uses the domain, limits, derivatives, extrema, concavity, 
  and inflection points to determine the complete shape and behavior of a 
  function's graph.
  `,
  examples: [
    "f(x) = x³ - 3x² - 9x + 5 → domain: all real, y-int: (0,5), critical: x=-1,3, max: (-1,10), min: (3,-22), inflection: (1,-6)",
    "f(x) = 1/(x-2) → domain: x≠2, vertical asymptote: x=2, horizontal asymptote: y=0",
    "f(x) = x² → even function, symmetric about y-axis",
    "f(x) = x³ → odd function, symmetric about origin",
    "Curve sketching combines domain, intercepts, symmetry, limits, asymptotes, derivatives, extrema, concavity, and inflection points",
    "f'(x) > 0 → increasing, f'(x) < 0 → decreasing",
    "f''(x) > 0 → concave up, f''(x) < 0 → concave down",
  ],
};

export default topic;