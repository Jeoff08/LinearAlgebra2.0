const topic = {
  id: "increasing-and-decreasing-intervals",
  title: "Increasing and Decreasing Intervals",
  summary:
    "Definition of increasing and decreasing functions, using the first derivative to find intervals, and sign charts.",
  details: `
Increasing and Decreasing Intervals describe how a function behaves as x moves from left to right.

This topic is closely connected to the first derivative.

The key rules are:
  • f'(x) > 0 → f(x) is increasing
  • f'(x) < 0 → f(x) is decreasing

In simple terms: If the graph goes up from left to right, it is increasing. If the graph goes down from left to right, it is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INCREASING FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is increasing on an interval if the function values become larger as x increases.

In simpler language: As you move from left to right, the graph goes up.

Example: f(x) = x is increasing.

As x increases, f(x) ↑. Therefore: f(x) is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A DECREASING FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is decreasing on an interval if the function values become smaller as x increases.

In simpler language: As you move from left to right, the graph goes down.

Example: f(x) = -x is decreasing.

As x increases, f(x) ↓. Therefore: f(x) is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE DERIVATIVE DETERMINES INCREASING AND DECREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important rules in Differential Calculus.

If f'(x) > 0, then f is increasing.

If f'(x) < 0, then f is decreasing.

If f'(x) = 0, the function has a horizontal tangent at that point.

This can indicate a local maximum, local minimum, or neither.

So: f'(x) = 0 alone does not determine increasing/decreasing behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THE DERIVATIVE TELL US THIS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative represents the slope of the graph.

If f'(x) > 0, the slope is positive. A positive slope means the graph rises. Therefore: Increasing.

If f'(x) < 0, the slope is negative. A negative slope means the graph falls. Therefore: Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An increasing interval is an interval where: f'(x) > 0.

A decreasing interval is an interval where: f'(x) < 0.

So the goal is usually to find where the derivative is positive and negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO FIND INCREASING AND DECREASING INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this process: f(x) → f'(x) → Critical Numbers → Sign Chart → Intervals

Step 1: Find f'(x)

Step 2: Solve f'(x) = 0 and find where f'(x) does not exist. These are the critical numbers.

Step 3: Place the critical numbers on a number line.

Step 4: Test the sign of f'(x) in each interval.

Step 5: Positive derivative → Increasing, Negative derivative → Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1 — SIMPLE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x²

Step 1: Find the derivative: f'(x) = 2x

Step 2: Find critical numbers: Set 2x = 0 → x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CREATE THE INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The critical number 0 divides the number line into: (-∞, 0) and (0, ∞)

Test a value from each interval.

For x = -1: f'(-1) = 2(-1) = -2 (Negative). Therefore: Decreasing on (-∞, 0).

For x = 1: f'(1) = 2 (Positive). Therefore: Increasing on (0, ∞).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = x², the graph is a parabola.

From left to right: Decreasing → Minimum → Increasing

Therefore: Decreasing: (-∞, 0), Increasing: (0, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2 — MORE COMPLICATED FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 3x² - 9x + 5

Step 1: Find the derivative: f'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x - 3)(x + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set: 3(x - 3)(x + 1) = 0 → x = 3 or x = -1

So the critical numbers are: x = -1, x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CREATE THE INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These critical numbers divide the number line into: (-∞, -1), (-1, 3), (3, ∞)

Now determine the sign of f'(x).

Interval 1: x < -1
  Choose x = -2: f'(-2) = 3(-2 - 3)(-2 + 1) = 3(-5)(-1) = 15 (Positive)
  Therefore: Increasing on (-∞, -1)

Interval 2: -1 < x < 3
  Choose x = 0: f'(0) = 3(-3)(1) = -9 (Negative)
  Therefore: Decreasing on (-1, 3)

Interval 3: x > 3
  Choose x = 4: f'(4) = 3(1)(5) = 15 (Positive)
  Therefore: Increasing on (3, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINAL ANSWER FOR EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The function is:
  Increasing: (-∞, -1) ∪ (3, ∞)
  Decreasing: (-1, 3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SIGN CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f'(x) = 3(x - 3)(x + 1), we get:
  x < -1: +
  -1 < x < 3: -
  x > 3: +

Or: + | - | +

Therefore:
  (-∞, -1): Increasing
  (-1, 3): Decreasing
  (3, ∞): Increasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONNECTION TO LOCAL MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing and decreasing intervals also help us identify local extrema.

Remember:
  Increasing → Decreasing (+ → -) means: Local Maximum
  Decreasing → Increasing (- → +) means: Local Minimum

For our previous example:
  + → - at x = -1 → x = -1 is a local maximum
  - → + at x = 3 → x = 3 is a local minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can connect three topics together:

  • Increasing/Decreasing: Determined by f'(x)
  • Local Extrema: Determined by changes in f'(x)
  • Concavity: Determined by f''(x)

So:
  f'(x) > 0 → Increasing
  f'(x) < 0 → Decreasing
  + → - → Local Maximum
  - → + → Local Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE 3 — DERIVATIVE DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

The derivative is: f'(x) = { -1, if x < 0; 1, if x > 0 }

At x = 0, the derivative does not exist. So x = 0 is a critical number.

For x < 0: f'(x) = -1 < 0 → Decreasing on (-∞, 0)

For x > 0: f'(x) = 1 > 0 → Increasing on (0, ∞)

So the function has: - → + and therefore x = 0 is a local minimum.

This demonstrates why you must also check where f'(x) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. INCREASING VS. STRICTLY INCREASING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In most introductory Calculus problems, you'll commonly see intervals described as Increasing or Decreasing.

More precisely, if f'(x) > 0 throughout an interval, the function is strictly increasing there.

If f'(x) < 0 throughout an interval, it is strictly decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHY DO WE EXCLUDE CRITICAL NUMBERS FROM THE INTERVALS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the critical number is x = 2.

The intervals are usually written: (-∞, 2) and (2, ∞).

We don't normally write (-∞, 2] or [2, ∞) when describing intervals of increasing/decreasing behavior based on the derivative sign.

That's because we're describing where the derivative is positive or negative throughout an interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE 4 — RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x/(x² + 1)

Step 1: Find the derivative using the quotient rule:
  f'(x) = [(x² + 1)(1) - x(2x)]/(x² + 1)² = (x² + 1 - 2x²)/(x² + 1)² = (1 - x²)/(x² + 1)²

Factor: f'(x) = (1 - x)(1 + x)/(x² + 1)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FIND CRITICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Set numerator equal to zero: 1 - x² = 0 → x² = 1 → x = -1, x = 1

The denominator (x² + 1)² is always positive, so it never equals zero.

Therefore the critical numbers are: -1, 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. DETERMINE THE SIGNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The denominator is always positive. Therefore, the sign depends on: 1 - x²

For x < -1: 1 - x² < 0 → Decreasing

For -1 < x < 1: 1 - x² > 0 → Increasing

For x > 1: 1 - x² < 0 → Decreasing

Therefore: Decreasing on (-∞, -1) ∪ (1, ∞) and Increasing on (-1, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. A USEFUL SHORTCUT FOR POLYNOMIAL DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If your derivative is factored: f'(x) = A(x - a)(x - b)

the critical numbers are usually: x = a, x = b.

Then test one value in each interval.

Example: f'(x) = 3(x - 2)(x + 4)

Critical numbers: x = 2, x = -4.

Intervals: (-∞, -4), (-4, 2), (2, ∞)

Then determine the signs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Looking at f(x) instead of f'(x)
  Increasing/decreasing behavior is determined by f'(x), not simply by the values of f(x).

❌ Mistake 2: Finding only f'(x) = 0
  You must also check where f'(x) does not exist if those points are in the domain.

❌ Mistake 3: Forgetting the domain
  A function may not be defined everywhere.
  For example: f(x) = 1/x is undefined at x = 0. So you cannot include 0 in an interval of increasing/decreasing behavior.

❌ Mistake 4: Mixing up the signs
  Remember: + → Increasing, - → Decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. CONNECTION TO THE FIRST DERIVATIVE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These topics are directly connected.

Suppose the derivative sign chart is: + | -

Then the function changes: Increasing → Decreasing

Therefore: Local Maximum.

If the sign chart is: - | +

then: Decreasing → Increasing

Therefore: Local Minimum.

So increasing/decreasing intervals provide the information needed for the First Derivative Test.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivative: f'(x) > 0
Function Behavior: Increasing

Derivative: f'(x) < 0
Function Behavior: Decreasing

Derivative: f'(x) = 0
Function Behavior: Critical point candidate

Derivative: f'(x) DNE
Function Behavior: Critical point candidate if f is defined

Derivative: Sign changes: + → -
Function Behavior: Local Maximum

Derivative: Sign changes: - → +
Function Behavior: Local Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Increasing and Decreasing Intervals, remember:

  • To find the Increasing and Decreasing Intervals of a function:
    1. Find f'(x)
    2. Find critical numbers
    3. Create intervals
    4. Test the sign of f'(x)

  • Then: f'(x) > 0 → Increasing and f'(x) < 0 → Decreasing.

  • The overall process is: f(x) → f'(x) → Critical Numbers → Sign Chart → Increasing/Decreasing Intervals.

  • And those intervals can then help you identify extrema:
    • Increasing → Decreasing = Local Maximum
    • Decreasing → Increasing = Local Minimum

Memory trick: Positive derivative = going UP, Negative derivative = going DOWN.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing and Decreasing Intervals are fundamental for understanding function behavior and identifying extrema.

Key concepts covered:

  ✓ What Is an Increasing Function?
  ✓ What Is a Decreasing Function?
  ✓ The Derivative Determines Behavior
  ✓ Why the Derivative Works
  ✓ Finding Intervals
  ✓ Examples
  ✓ Sign Charts
  ✓ Connection to Local Extrema
  ✓ Domain Considerations
  ✓ Common Mistakes
  ✓ First Derivative Test Connection
  `,
  examples: [
    "f(x) = x² → decreasing on (-∞,0), increasing on (0,∞)",
    "f(x) = x³ - 3x² - 9x + 5 → increasing on (-∞,-1) and (3,∞), decreasing on (-1,3)",
    "f(x) = |x| → decreasing on (-∞,0), increasing on (0,∞)",
    "f(x) = x/(x²+1) → decreasing on (-∞,-1) and (1,∞), increasing on (-1,1)",
    "f'(x) = 3(x-2)(x+4) → critical numbers: -4, 2",
    "f'(x) > 0 → increasing",
    "f'(x) < 0 → decreasing",
    "Sign chart: + | - | + → increasing, decreasing, increasing",
    "+ → - means local maximum",
    "- → + means local minimum",
    "Critical number: f'(x) = 0 or DNE",
    "Domain matters: exclude undefined points",
    "Positive derivative = going up",
    "Negative derivative = going down",
    "f(x) → f'(x) → Critical Numbers → Sign Chart → Intervals",
  ],
};

export default topic;