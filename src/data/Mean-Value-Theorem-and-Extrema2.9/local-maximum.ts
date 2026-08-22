const topic = {
  id: "local-maximum",
  title: "Local Maximum",
  summary:
    "Definition of local maximum, first and second derivative tests, critical numbers, and applications.",
  details: `
A local maximum is a point where a function reaches a value that is greater than or equal to the nearby values around it.

In simple terms: A local maximum is a "high point" of a function within a small neighborhood.

It does not necessarily mean the function has its highest value everywhere. It only needs to be higher than the values nearby.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION OF A LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = f(x)

A function has a local maximum at x = c if: f(c) ≥ f(x) for all x sufficiently close to c.

The corresponding point: (c, f(c)) is called a local maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SIMPLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = -x² + 4

The graph is an upside-down parabola.

Its highest point occurs at: x = 0

At this point: f(0) = 4

Values near x = 0 are smaller: f(-1) = 3 and f(1) = 3

Therefore: (0, 4) is a local maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS IT CALLED "LOCAL"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word local means that we only care about what happens near the point.

Imagine a function with several hills: small hill → valley → large hill → valley

Each hill can be a local maximum.

Even if one hill is much higher than another, both can still be local maxima.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LOCAL MAXIMUM VS. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Local Maximum: The function is highest near a particular point. Highest nearby.

Absolute Maximum: The function is highest over the entire domain or interval. Highest everywhere.

A local maximum can be lower than another point somewhere else.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: LOCAL VS. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a function with two peaks:
  • First peak: y = 5
  • Second peak: y = 10

The first peak can still be a local maximum because it is higher than the values immediately surrounding it.

The second peak may be the absolute maximum because: 10 > 5 and it is the highest value on the entire domain.

Therefore: Absolute Maximum can be a Local Maximum, but not every Local Maximum is an Absolute Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LOCAL MAXIMUM AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A local maximum often occurs at a critical number.

If f has a local maximum at an interior point x = c, and f is differentiable there, then: f'(c) = 0

This is known as Fermat's Theorem.

The tangent line is horizontal at the local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY IS THE DERIVATIVE ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a smooth hill.

As the function approaches the top: Increasing → then at the top: Horizontal → then: Decreasing

So the slope changes from positive to negative: + → -

At the exact top, the slope is usually: 0

Therefore: f'(c) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is one of the most important methods for identifying a local maximum.

If f'(x) > 0 before c, the function is increasing.

If f'(x) < 0 after c, the function is decreasing.

Therefore: + → - indicates a Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE USING THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 3x

Step 1: Find the derivative: f'(x) = 3x² - 3 = 3(x - 1)(x + 1)

Step 2: Find critical numbers: Set f'(x) = 0 → x = 1 or x = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CREATE SIGN INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical numbers divide the number line: (-∞, -1), (-1, 1), (1, ∞)

Interval: x < -1
Sign of f'(x): +
Function: Increasing

Interval: -1 < x < 1
Sign of f'(x): -
Function: Decreasing

Interval: x > 1
Sign of f'(x): +
Function: Increasing

At x = -1, the derivative changes: + → -

Therefore: x = -1 is a local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING THE LOCAL MAXIMUM VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We found: x = -1

Now evaluate: f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2

Therefore, the local maximum point is: (-1, 2) and the local maximum value is: 2.

Be careful with the terminology:
  • Local maximum number/value: 2
  • Location: x = -1
  • Local maximum point: (-1, 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LOCAL MAXIMUM DOES NOT REQUIRE f'(c) = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A local maximum can occur even when the derivative does not exist.

Consider: f(x) = -|x|

The graph has a sharp point at: x = 0

The function reaches its highest nearby value there: f(0) = 0

However: f'(0) does not exist because the graph has a corner.

Therefore: x = 0 is a local maximum even though f'(0) does not exist.

This is why we check both: f'(c) = 0 and f'(c) DNE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LOCAL MAXIMUM AND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship is: Local Maximum ⇒ Critical Number for an interior point where the function is differentiable or has a derivative that fails to exist.

But the reverse is not always true: Critical Number ≠ ⇒ Local Maximum

Example: f(x) = x³

We have: f'(x) = 3x² → f'(0) = 0 → x = 0 is a critical number.

But the function keeps increasing: Increasing → Increasing

Therefore, there is no local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Second Derivative Test provides another way to determine whether a critical number represents a local maximum.

Suppose: f'(c) = 0

Then calculate: f''(c)

If f''(c) < 0, then f(c) is a local maximum because the graph is concave down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY DOES f''(c) < 0 MEAN MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative describes concavity.

If f''(x) > 0, the graph is concave up (∪), which resembles a valley.

If f''(x) < 0, the graph is concave down (∩), which resembles a hill.

Therefore: f''(c) < 0 ⇒ Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE USING THE SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = -x² + 6x + 2

First derivative: f'(x) = -2x + 6

Set equal to zero: -2x + 6 = 0 → x = 3

So x = 3 is a critical number.

Second derivative: f''(x) = -2

Therefore: f''(3) = -2 < 0

So: x = 3 is a local maximum.

Find its value: f(3) = -(3)² + 6(3) + 2 = -9 + 18 + 2 = 11

Therefore: (3, 11) is the local maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FIRST DERIVATIVE TEST VS. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First Derivative Test: Uses f'(x)
Second Derivative Test: Uses f''(x)

First Derivative Test: Looks at sign changes
Second Derivative Test: Looks at concavity

First Derivative Test: + → - = maximum
Second Derivative Test: f''(c) < 0 = maximum

First Derivative Test: Works even when f'' doesn't exist
Second Derivative Test: Requires f'(c) = 0

First Derivative Test: More generally applicable
Second Derivative Test: Often faster

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHAT IF THE SECOND DERIVATIVE IS ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f'(c) = 0 and f''(c) = 0

The Second Derivative Test is inconclusive.

It does not mean there is no maximum. It simply means: The test cannot determine the result.

Example: f(x) = -x⁴

We have: f'(x) = -4x³ → at x = 0, f'(0) = 0

The second derivative is: f''(x) = -12x² → f''(0) = 0

The Second Derivative Test fails.

However, x = 0 is clearly a local maximum because -x⁴ ≤ 0 for every x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. LOCAL MAXIMUM AND INCREASING/DECREASING BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A local maximum occurs when the function changes from: Increasing → Decreasing

Symbolically: f'(x) > 0 → f'(x) < 0 or + → -

This is probably the most useful visual way to recognize a local maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. LOCAL MAXIMUM VS. LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two are opposites.

Local Maximum: + → - (Increasing → Decreasing)

Local Minimum: - → + (Decreasing → Increasing)

A simple way to remember: Maximum = hill, Minimum = valley.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. LOCAL MAXIMUM VS. ABSOLUTE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function has several local peaks.

Example: Peak A = 5, Peak B = 12, Peak C = 8

All three may be local maxima.

But only 12 is the absolute maximum if it is the highest value on the entire domain.

Thus: Local maximum = highest nearby, while Absolute maximum = highest overall.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. OPTIMIZATION APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Local maxima are extremely important in optimization.

Examples:
  • Maximum Area — Find dimensions that produce the largest area.
  • Maximum Profit — Find production level that produces the highest profit.
  • Maximum Volume — Find dimensions that produce the largest volume.
  • Maximum Height — Find when an object reaches its highest point.

In these problems, we often: Build f(x) → f'(x) → Critical Numbers → Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. EXAMPLE: MAXIMUM HEIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose an object's height is: h(t) = -5t² + 20t + 2

Find when the object reaches its maximum height.

Differentiate: h'(t) = -10t + 20

Set equal to zero: -10t + 20 = 0 → t = 2

Check the second derivative: h''(t) = -10

Since h''(2) < 0, the object reaches a local maximum at t = 2.

Find the height: h(2) = -5(2)² + 20(2) + 2 = -20 + 40 + 2 = 22

Therefore: Maximum height = 22 at t = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Assuming f'(c) = 0 automatically means maximum
  Not necessarily. For f(x) = x³, f'(0) = 0, but there is no local maximum.

Mistake 2: Forgetting points where f'(x) does not exist
  A local maximum can occur at a corner or cusp.

Mistake 3: Confusing the x-value with the maximum value
  If x = 3 and f(3) = 11:
    • Location: x = 3
    • Maximum value: 11
    • Point: (3, 11)

Mistake 4: Confusing local and absolute maximum
  A local maximum only considers nearby values.
  An absolute maximum considers the entire domain or specified interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Local Maximum Definition
Formula/Condition: f(c) ≥ f(x) for x close to c

Concept: Necessary Condition
Formula/Condition: f'(c) = 0 (if differentiable)

Concept: First Derivative Test
Formula/Condition: + → - ⇒ Local Maximum

Concept: Second Derivative Test
Formula/Condition: f'(c) = 0, f''(c) < 0 ⇒ Max

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Critical Number
Meaning: f'(c) = 0 or DNE

Concept: Local Maximum
Meaning: Function is higher than nearby values

Concept: Local Minimum
Meaning: Function is lower than nearby values

Concept: Absolute Maximum
Meaning: Highest value on entire domain/interval

Concept: First Derivative Test
Meaning: + → - means maximum

Concept: Second Derivative Test
Meaning: f''(c) < 0 means maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Local Maximum, remember:

  • A local maximum is a point where the function changes from increasing to decreasing.
  • Using derivatives: + → -
  • If the function is differentiable at the maximum: f'(c) = 0
  • Using the Second Derivative Test: f'(c) = 0, f''(c) < 0 ⇒ Local Maximum

The most important distinction is:
  • Critical Number = Candidate
  • Local Maximum = Confirmed Nearby High Point

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Local Maximum is a fundamental concept for analyzing the behavior of functions and solving optimization problems.

Key concepts covered:

  ✓ Definition of Local Maximum
  ✓ Local vs. Absolute Maximum
  ✓ Derivatives and Local Maxima
  ✓ First Derivative Test
  ✓ Second Derivative Test
  ✓ Critical Numbers
  ✓ Sign Changes (+ → -)
  ✓ Concavity (f''(c) < 0)
  ✓ Points Where Derivative Does Not Exist
  ✓ Optimization Applications
  ✓ Common Mistakes
  `,
  examples: [
    "f(x) = -x² + 4 → local maximum at (0, 4)",
    "f(x) = x³ - 3x → local maximum at x = -1, value = 2",
    "f(x) = -|x| → local maximum at x = 0 (derivative DNE)",
    "f(x) = -x² + 6x + 2 → local maximum at (3, 11)",
    "f(x) = -x⁴ → local maximum at x = 0 (f''(0) = 0, still max)",
    "First Derivative Test: + → - means local maximum",
    "Second Derivative Test: f'(c) = 0, f''(c) < 0 → local maximum",
    "Local maximum: higher than nearby values",
    "Absolute maximum: highest overall",
    "Critical number ≠ automatically maximum",
    "f(x) = x³ → x = 0 is critical but not max/min",
    "Optimization: Build f(x) → f'(x) → Critical Numbers → Local Maximum",
    "Maximum height: h(t) = -5t² + 20t + 2 → max at t = 2, height = 22",
    "Local max = hill, local min = valley",
  ],
};

export default topic;