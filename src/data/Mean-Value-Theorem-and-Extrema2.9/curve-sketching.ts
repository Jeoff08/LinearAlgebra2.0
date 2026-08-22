const topic = {
  id: "curve-sketching",
  title: "Curve Sketching",
  summary:
    "Using calculus to sketch graphs, including domain, intercepts, symmetry, asymptotes, first and second derivatives, and key points.",
  details: `
Curve Sketching is the process of using Calculus to understand the important features of a function and then create an accurate sketch of its graph.

Instead of plotting hundreds of points, we use information from:
  • the domain
  • intercepts
  • symmetry
  • limits
  • asymptotes
  • first derivative
  • increasing/decreasing intervals
  • critical numbers
  • local maximum/minimum
  • second derivative
  • concavity
  • inflection points
  • end behavior

The goal is to understand the shape of the entire graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY CURVE SKETCHING IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you're given: f(x) = x³ - 3x² - 9x + 5

You could calculate many points and plot them.

But Calculus gives us a much better approach.

We can determine:
  • Where the graph goes
  • Where it increases/decreases
  • Where it bends
  • Where it has maxima/minima
  • Where it changes concavity

Then we can construct a reliable graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Curve sketching combines many Calculus topics you've already studied:

  Domain → Intercepts → Limits/Asymptotes → f'(x) → Increasing/Decreasing → Local Extrema → f''(x) → Concavity → Inflection Points → Sketch

So Curve Sketching is essentially the application of many derivative concepts together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE STANDARD CURVE-SKETCHING PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked to sketch a function, use this checklist:

  1. Domain
  2. Intercepts
  3. Symmetry
  4. Limits and Asymptotes
  5. First Derivative
  6. Critical Numbers
  7. Increasing/Decreasing
  8. Local Maximum/Minimum
  9. Second Derivative
  10. Concavity
  11. Inflection Points
  12. End Behavior
  13. Sketch the Curve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. STEP 1 — FIND THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The domain tells you which x-values are allowed.

Example: f(x) = 1/(x - 2) cannot have x = 2.

Therefore: Domain: (-∞, 2) ∪ (2, ∞)

This is important because the graph cannot cross through a point where the function is undefined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. STEP 2 — FIND THE INTERCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Intercepts help establish where the graph crosses the axes.

y-intercept: Set x = 0, then calculate y = f(0).

x-intercepts: Set f(x) = 0, then solve for x. These give (x, 0) points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP 3 — CHECK FOR SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Symmetry can make graphing much easier.

Even Function: If f(-x) = f(x), then the function is even. Its graph is symmetric about the y-axis. Example: f(x) = x².

Odd Function: If f(-x) = -f(x), then the function is odd. Its graph is symmetric about the origin. Example: f(x) = x³.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 4 — FIND LIMITS AND ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits tell us what happens to the function near certain points or as x becomes very large.

Example: f(x) = 1/x

As x → 0⁺, f(x) → +∞. As x → 0⁻, f(x) → -∞. Therefore: x = 0 is a vertical asymptote.

Also: lim(x→±∞) 1/x = 0. Therefore: y = 0 is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. STEP 5 — FIND THE FIRST DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first derivative tells us about the direction of the graph.

Calculate: f'(x)

Then determine where f'(x) > 0 and f'(x) < 0.

Remember: f'(x) > 0 → Increasing, f'(x) < 0 → Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. STEP 6 — FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical numbers occur where: f'(x) = 0 or where f'(x) does not exist, provided f(x) itself exists there.

These points are important because local maximum/minimum points can occur there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. STEP 7 — DETERMINE INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a sign chart for f'(x).

Example: + | - | +

Therefore: (-∞, -2) is increasing, (-2, 3) is decreasing, and (3, ∞) is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP 8 — FIND LOCAL MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Look for changes in the sign of f'(x).

Increasing → Decreasing (+ → -) means: Local Maximum.

Decreasing → Increasing (- → +) means: Local Minimum.

This is the First Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. STEP 9 — FIND THE SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now calculate: f''(x)

The second derivative tells us the graph's concavity.

f''(x) > 0 → Concave Up, f''(x) < 0 → Concave Down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. STEP 10 — DETERMINE CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find where f''(x) = 0 and where f''(x) does not exist.

Then create another sign chart.

Example: - | + means (-∞, 2): Concave Down and (2, ∞): Concave Up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. STEP 11 — FIND INFLECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inflection point occurs when the concavity changes.

For example: - → + or + → -.

Remember: f''(x) = 0 alone is not enough. You must verify that the sign of f'' changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. STEP 12 — DETERMINE END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

End behavior tells us what happens when: x → ∞ and x → -∞.

Example: f(x) = x³

As x → ∞, f(x) → ∞. And as x → -∞, f(x) → -∞.

Therefore the graph behaves like a cubic at the ends.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's sketch: f(x) = x³ - 3x² - 9x + 5

This is a great example because it uses almost everything we've discussed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. STEP 1 — DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a polynomial. Polynomials are defined for every real number.

Therefore: (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. STEP 2 — Y-INTERCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set: x = 0 → f(0) = 5

Therefore: (0, 5) is the y-intercept.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. STEP 3 — FIRST DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

f'(x) = 3x² - 6x - 9 = 3(x - 3)(x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. STEP 4 — CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set: 3(x - 3)(x + 1) = 0 → x = 3 or x = -1

So: x = -1, 3 are the critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. STEP 5 — INCREASING/DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The intervals are: (-∞, -1), (-1, 3), (3, ∞)

The derivative signs are: + | - | +

Therefore: Increasing on (-∞, -1), Decreasing on (-1, 3), Increasing on (3, ∞).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. STEP 6 — LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = -1, the derivative changes: + → -

Therefore: x = -1 is a local maximum.

Find its y-coordinate:
  f(-1) = (-1)³ - 3(-1)² - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10

Therefore: (-1, 10) is the local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. STEP 7 — LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 3, the derivative changes: - → +

Therefore: x = 3 is a local minimum.

Find: f(3) = 3³ - 3(3)² - 9(3) + 5 = 27 - 27 - 27 + 5 = -22

Therefore: (3, -22) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. STEP 8 — SECOND DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate again: f''(x) = 6x - 6

Set: 6x - 6 = 0 → x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. STEP 9 — CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For x < 1: f''(x) < 0 → Concave Down.

For x > 1: f''(x) > 0 → Concave Up.

Therefore: Concave Down on (-∞, 1), Concave Up on (1, ∞).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. STEP 10 — INFLECTION POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since the concavity changes at x = 1, there is an inflection point.

Calculate: f(1) = 1 - 3 - 9 + 5 = -6

Therefore: (1, -6) is the inflection point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. STEP 11 — END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because the leading term is x³, the graph behaves like x³.

Therefore: x → ∞ ⇒ f(x) → ∞ and x → -∞ ⇒ f(x) → -∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. COMPLETE ANALYSIS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Domain
Result: (-∞, ∞)

Feature: y-intercept
Result: (0, 5)

Feature: Critical numbers
Result: x = -1, 3

Feature: Increasing
Result: (-∞, -1) ∪ (3, ∞)

Feature: Decreasing
Result: (-1, 3)

Feature: Local maximum
Result: (-1, 10)

Feature: Local minimum
Result: (3, -22)

Feature: Concave down
Result: (-∞, 1)

Feature: Concave up
Result: (1, ∞)

Feature: Inflection point
Result: (1, -6)

Feature: End behavior
Result: Down left, up right

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. VISUALIZING THE COMPLETE CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The important points are:
  • (-1, 10) — local maximum
  • (1, -6) — inflection point
  • (3, -22) — local minimum

The general shape: The graph rises, reaches a local maximum, falls, changes concavity, reaches a local minimum, and then rises again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. CURVE SKETCHING IS A COMBINATION OF TOPICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is why Curve Sketching is usually taught after derivatives, extrema, and concavity.

You can think of it as: Curve Sketching = Limits + f' + f'' + Extrema + Concavity

More specifically:
  • f'(x) → Direction
  • f''(x) → Bending
  • f'(x) sign changes → Extrema
  • f''(x) sign changes → Inflection Points

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. CURVE-SKETCHING CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 A. Domain — Where is f(x) defined?

🔹 B. Intercepts — x-intercepts and y-intercept

🔹 C. Symmetry — Check f(-x) = f(x) or f(-x) = -f(x)

🔹 D. Limits — Check x → ∞, x → -∞, and points where the function is undefined.

🔹 E. Asymptotes — Check for vertical, horizontal, slant/oblique asymptotes.

🔹 F. First Derivative — Find f'(x)

🔹 G. Critical Numbers — Find f'(x) = 0 and where f' doesn't exist.

🔹 H. Increasing/Decreasing — Use the sign of f'(x)

🔹 I. Local Extrema — Look for + → - or - → +

🔹 J. Second Derivative — Find f''(x)

🔹 K. Concavity — Use f''(x) > 0 or f''(x) < 0

🔹 L. Inflection Points — Look for a change in concavity.

🔹 M. Sketch — Put everything together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Question: Where is the function defined?
Tool: Domain

Question: Where does it cross the axes?
Tool: Intercepts

Question: Is there symmetry?
Tool: f(-x)

Question: What happens near a point?
Tool: Limits

Question: What happens at infinity?
Tool: End behavior

Question: Where are the asymptotes?
Tool: Limits

Question: Is the graph going up/down?
Tool: f'(x)

Question: Where are possible extrema?
Tool: f'(x) = 0 / DNE

Question: Maximum or minimum?
Tool: First Derivative Test

Question: How does the graph bend?
Tool: f''(x)

Question: Where is it concave up/down?
Tool: Sign of f''(x)

Question: Where does concavity change?
Tool: Inflection Point

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

33. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Curve Sketching, remember:

  • f'(x) > 0 → Increasing
  • f'(x) < 0 → Decreasing
  • f''(x) > 0 → Concave Up
  • f''(x) < 0 → Concave Down

The ultimate memory pattern for curve sketching:

  Where can I go? → Domain
  Where do I cross? → Intercepts
  Where am I going? → f'(x)
  Where do I turn? → Extrema
  How am I bending? → f''(x)
  Where does the bending change? → Inflection Points
  What happens at the ends? → End Behavior
  Finally: Put everything together → Curve Sketch

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Curve Sketching is the culmination of many Calculus topics, combining derivatives, extrema, concavity, and limits to create accurate graphs.

Key concepts covered:

  ✓ Why Curve Sketching Is Important
  ✓ The Big Picture
  ✓ Standard Procedure
  ✓ Domain
  ✓ Intercepts
  ✓ Symmetry
  ✓ Limits and Asymptotes
  ✓ First Derivative
  ✓ Critical Numbers
  ✓ Increasing/Decreasing
  ✓ Local Extrema
  ✓ Second Derivative
  ✓ Concavity
  ✓ Inflection Points
  ✓ End Behavior
  ✓ Complete Example
  ✓ Checklist
  `,
  examples: [
    "f(x) = x³ - 3x² - 9x + 5 → local max (-1,10), inflection (1,-6), local min (3,-22)",
    "Domain: (-∞, ∞) for polynomials",
    "y-intercept: set x=0, find f(0)",
    "x-intercepts: set f(x)=0, solve for x",
    "Even function: f(-x) = f(x) → symmetric about y-axis",
    "Odd function: f(-x) = -f(x) → symmetric about origin",
    "Vertical asymptote: denominator = 0",
    "Horizontal asymptote: limits at infinity",
    "f'(x) > 0 → increasing",
    "f'(x) < 0 → decreasing",
    "+ → - → local maximum",
    "- → + → local minimum",
    "f''(x) > 0 → concave up",
    "f''(x) < 0 → concave down",
    "Inflection point: concavity changes",
    "End behavior: leading term determines behavior",
    "Curve Sketching = Limits + f' + f'' + Extrema + Concavity",
  ],
};

export default topic;