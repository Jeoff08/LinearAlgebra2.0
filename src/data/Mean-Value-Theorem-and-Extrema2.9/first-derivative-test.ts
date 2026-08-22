const topic = {
  id: "first-derivative-test",
  title: "First Derivative Test",
  summary:
    "Definition of the First Derivative Test, sign changes, local maxima and minima, and critical numbers.",
  details: `
The First Derivative Test is a method in Calculus used to determine whether a critical number corresponds to a:
  • Local maximum
  • Local minimum
  • Neither

It works by examining the sign of the first derivative f'(x) before and after a critical number.

The most important patterns are: - → + = Local Minimum, + → - = Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative tells us whether a function is increasing or decreasing.

If f'(x) > 0, the function is increasing.

If f'(x) < 0, the function is decreasing.

Therefore, by looking at how f'(x) changes sign around a critical number, we can determine whether the graph has a maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE THREE IMPORTANT PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose x = c is a critical number.

There are four important possibilities.

Pattern 1: Negative to Positive (- → +)
  The function changes: decreasing → increasing
  Therefore: Local Minimum
  Think of a valley.

Pattern 2: Positive to Negative (+ → -)
  The function changes: increasing → decreasing
  Therefore: Local Maximum
  Think of a hill.

Pattern 3: Positive to Positive (+ → +)
  The function continues increasing.
  Therefore: Neither maximum nor minimum.

Pattern 4: Negative to Negative (- → -)
  The function continues decreasing.
  Therefore: Neither maximum nor minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FIRST DERIVATIVE TEST SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sign of f'(x): - → +
Result: Local Minimum

Sign of f'(x): + → -
Result: Local Maximum

Sign of f'(x): + → +
Result: Neither

Sign of f'(x): - → -
Result: Neither

The two most important ones are: - → + = Minimum, + → - = Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THIS WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: f'(x) > 0 means the function is increasing.

And: f'(x) < 0 means the function is decreasing.

Suppose we have: - → +

That means: decreasing → increasing

The graph must go down and then back up. That's a valley.

Therefore, it has a: Local Minimum.

Similarly: + → - means: increasing → decreasing which creates a hill.

Therefore: Local Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FINDING CRITICAL NUMBERS FIRST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before using the First Derivative Test, we need to find the critical numbers.

A critical number c occurs when: f'(c) = 0 or f'(c) does not exist, provided c is in the domain of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1 — FINDING A LOCAL MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 4x + 3

Step 1: Find the derivative: f'(x) = 2x - 4

Step 2: Find the critical number: Set f'(x) = 0 → 2x - 4 = 0 → x = 2

So: x = 2 is our critical number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CREATE A SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical number x = 2 divides the number line into: (-∞, 2) and (2, ∞)

We need to determine the sign of f'(x) in each interval.

Choose x = 1 for the left side: f'(1) = 2(1) - 4 = -2 → f'(x) < 0 on the left.

Choose x = 3 for the right side: f'(3) = 2(3) - 4 = 2 → f'(x) > 0 on the right.

Our sign chart is:
  x < 2: - (decreasing)
  x = 2: |
  x > 2: + (increasing)

Therefore: - → + → x = 2 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FIND THE LOCAL MINIMUM POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We know: x = 2

Now calculate: f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1

Therefore, the local minimum point is: (2, -1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 2 — FINDING A LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = -x² + 6x + 2

Step 1: Derivative: f'(x) = -2x + 6

Step 2: Critical number: Set -2x + 6 = 0 → -2x = -6 → x = 3

So: x = 3 is the critical number.

Step 3: Test values
  Choose x = 2: f'(2) = -4 + 6 = 2 (Positive)
  Choose x = 4: f'(4) = -8 + 6 = -2 (Negative)

So: x < 3: + (increasing), x = 3: |, x > 3: - (decreasing)

The sign changes: + → - → x = 3 is a local maximum.

Step 4: Find the point: f(3) = -(3)² + 6(3) + 2 = -9 + 18 + 2 = 11

Therefore: (3, 11) is the local maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 3 — NEITHER MAXIMUM NOR MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³

Derivative: f'(x) = 3x²

Set: 3x² = 0 → x = 0

So x = 0 is a critical number.

Now test values.
  For x = -1: f'(-1) = 3 (Positive)
  For x = 1: f'(1) = 3 (Positive)

Therefore: + → +

The function is increasing on both sides.

So: x = 0 is neither a local maximum nor local minimum.

This is an important example because f'(c) = 0 does not automatically mean maximum or minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 4 — NEGATIVE TO NEGATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function whose derivative has this sign pattern:
  x < c: - (decreasing)
  x = c: |
  x > c: - (decreasing)

The function is decreasing before c and continues decreasing after c.

Therefore: - → - = Neither. There is no turning point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FIRST DERIVATIVE TEST PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a First Derivative Test problem, use these steps.

Step 1: Find f'(x)
  Differentiate the function.

Step 2: Find critical numbers
  Solve f'(x) = 0 and identify where f'(x) does not exist.

Step 3: Place critical numbers on a number line
  They divide the domain into intervals.

Step 4: Choose test points
  Choose one x-value from each interval.

Step 5: Determine the sign of f'(x)
  For each test point, determine whether f'(x) > 0 or f'(x) < 0.

Step 6: Look for sign changes
  Use: - → + = Local Minimum, + → - = Local Maximum.

Step 7: Find the coordinates
  Once you know the x-coordinate c, calculate f(c) to obtain (c, f(c)).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MULTIPLE CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have multiple critical numbers.

Example: f(x) = x³ - 3x

Step 1: Derivative: f'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1)

Set equal to zero: 3(x - 1)(x + 1) = 0 → x = -1, x = 1

There are two critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. BUILD THE SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical numbers divide the number line into three intervals:
  (-∞, -1), (-1, 1), (1, ∞)

Test x = -2: f'(-2) = 3(4) - 3 = 9 > 0
Test x = 0: f'(0) = -3 < 0
Test x = 2: f'(2) = 12 - 3 = 9 > 0

So: x < -1: +, -1 < x < 1: -, x > 1: +

At x = -1: + → - → x = -1 is a local maximum.

At x = 1: - → + → x = 1 is a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FIND THE ACTUAL POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x³ - 3x

At x = -1: f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2 → local maximum at (-1, 2)

At x = 1: f(1) = 1³ - 3(1) = 1 - 3 = -2 → local minimum at (1, -2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FIRST DERIVATIVE TEST AND INCREASING/DECREASING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test depends directly on the relationship:
  f'(x) > 0 → f is increasing
  f'(x) < 0 → f is decreasing

Therefore:
  Local Maximum: Increasing → Decreasing
  Local Minimum: Decreasing → Increasing

This is the heart of the First Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FIRST DERIVATIVE TEST VS. SECOND DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First Derivative Test: Uses f'(x)
Second Derivative Test: Uses f''(x)

First Derivative Test: Checks sign before and after c
Second Derivative Test: Evaluates f''(c)

First Derivative Test: - → + = minimum
Second Derivative Test: f''(c) > 0 = minimum

First Derivative Test: + → - = maximum
Second Derivative Test: f''(c) < 0 = maximum

First Derivative Test: Works when f''(c) = 0
Second Derivative Test: Inconclusive when f''(c) = 0

First Derivative Test: More detailed
Second Derivative Test: Often faster

The First Derivative Test is particularly useful when the second derivative doesn't give a clear answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WHERE SECOND DERIVATIVE TEST FAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x⁴

First derivative: f'(x) = 4x³

Critical number: x = 0

Second derivative: f''(x) = 12x²

At x = 0: f''(0) = 0

So the Second Derivative Test is inconclusive.

But the First Derivative Test works.

For x < 0: f'(x) < 0
For x > 0: f'(x) > 0

Therefore: - → + and x = 0 is a local minimum.

So the First Derivative Test can be more informative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CRITICAL NUMBER DOES NOT GUARANTEE AN EXTREMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts.

Suppose f'(c) = 0. That only means c is a critical number.

It could be: Local Maximum, Local Minimum, or Neither.

You need to examine the sign of f'(x) around c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. VISUAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Local Maximum:
  f'(x): + | -
        ↑ c ↓
  Graph: /\

Local Minimum:
  f'(x): - | +
        ↓ c ↑
  Graph: \/

Neither:
  f'(x): + | +  or  f'(x): - | -
        ↑ c ↑        ↓ c ↓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Thinking f'(c) = 0 means maximum
  Not necessarily. f'(c) = 0 only means c is a possible critical point.

❌ Mistake 2: Forgetting points where f'(x) doesn't exist
  Critical numbers can occur when f'(x) = 0 or f'(x) does not exist.

❌ Mistake 3: Checking only one side
  You need to know what happens before and after the critical number. The sign change is what determines the result.

❌ Mistake 4: Confusing the sign of f'(x) with the sign of f(x)
  The First Derivative Test uses f'(x), not f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAM-STYLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find all local extrema of: f(x) = x³ - 6x² + 9x + 1

Step 1: Derivative: f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3)

Step 2: Critical numbers: 3(x - 1)(x - 3) = 0 → x = 1, x = 3

Step 3: Sign chart
  Test x = 0: f'(0) = 9 > 0
  Test x = 2: f'(2) = 12 - 24 + 9 = -3 < 0
  Test x = 4: f'(4) = 48 - 48 + 9 = 9 > 0

Therefore: x < 1: +, 1 < x < 3: -, x > 3: +

At x = 1: + → - → x = 1 is a local maximum.

At x = 3: - → + → x = 3 is a local minimum.

Step 4: Find the points
  For x = 1: f(1) = 1 - 6 + 9 + 1 = 5 → (1, 5) is the local maximum.
  For x = 3: f(3) = 27 - 54 + 27 + 1 = 1 → (3, 1) is the local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the First Derivative Test, remember:

  • The First Derivative Test uses the sign of f'(x) around a critical number.
  • The most important rules: - → + ⇒ Local Minimum (decreasing → increasing) and + → - ⇒ Local Maximum (increasing → decreasing).
  • If the sign doesn't change (+ → + or - → -), then: Neither.
  • The complete process: f(x) → f'(x) → Critical Numbers → Sign Chart → Sign Changes → Local Extrema.

Memory trick: "Down then Up = Minimum; Up then Down = Maximum."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The First Derivative Test is a fundamental method for identifying local extrema using sign changes of the derivative.

Key concepts covered:

  ✓ The Main Idea
  ✓ Sign Patterns (- → +, + → -)
  ✓ Local Minimum
  ✓ Local Maximum
  ✓ Neither
  ✓ Critical Numbers
  ✓ Sign Charts
  ✓ Finding Coordinates
  ✓ Multiple Critical Numbers
  ✓ First vs. Second Derivative Test
  ✓ Common Mistakes
  ✓ Exam-Style Example
  `,
  examples: [
    "f(x) = x² - 4x + 3 → x=2 is local minimum at (2,-1)",
    "f(x) = -x² + 6x + 2 → x=3 is local maximum at (3,11)",
    "f(x) = x³ → x=0 is critical but neither max nor min (+ → +)",
    "f(x) = x³ - 3x → x=-1 is local max (-1,2), x=1 is local min (1,-2)",
    "f(x) = x⁴ → x=0 is local minimum (- → +)",
    "First Derivative Test: - → + = minimum",
    "First Derivative Test: + → - = maximum",
    "First Derivative Test: + → + = neither",
    "First Derivative Test: - → - = neither",
    "Critical number: f'(c) = 0 or DNE",
    "Sign chart shows sign of f'(x) around critical numbers",
    "f'(x) > 0 → increasing, f'(x) < 0 → decreasing",
    "Down then Up = Minimum; Up then Down = Maximum",
    "Second Derivative Test fails when f''(c)=0",
    "f'(c)=0 does not automatically mean max or min",
  ],
};

export default topic;