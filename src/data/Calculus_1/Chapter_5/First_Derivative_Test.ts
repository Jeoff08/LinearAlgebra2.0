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