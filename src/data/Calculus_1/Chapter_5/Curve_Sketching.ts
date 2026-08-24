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

Use the first derivative.

If f'(x) > 0, then Increasing.
If f'(x) < 0, then Decreasing.

The critical numbers divide the domain into intervals.

You then test the sign of f'(x) on each interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

Now determine the concavity.

Calculate f''(x).

Remember:
  f''(x) > 0 ⇒ Concave Up
and:
  f''(x) < 0 ⇒ Concave Down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. STEP 11: FIND POSSIBLE INFLECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

Curve sketching isn't just about drawing.

You're essentially constructing a mathematical description of the graph.

Every calculation contributes information about the final shape.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. COMMON MISTAKES IN CURVE SKETCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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