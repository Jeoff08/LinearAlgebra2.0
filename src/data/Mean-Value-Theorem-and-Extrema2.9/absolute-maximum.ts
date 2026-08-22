const topic = {
  id: "absolute-maximum",
  title: "Absolute Maximum",
  summary:
    "Definition of absolute maximum, closed interval method, extreme value theorem, and comparison with local maximum.",
  details: `
An absolute maximum is the largest value of a function over its entire domain.

In simple terms, it is the highest point on the entire graph within the interval or domain being considered.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) is defined on a domain D.

A function has an absolute maximum at x = c if f(c) ≥ f(x) for every x in the domain.

The point (c, f(c)) is called the absolute maximum point, while f(c) is the absolute maximum value.

Example: Consider f(x) = -x² + 4

The graph is a downward-opening parabola.

Its highest point occurs at: x = 0 and f(0) = 4

Therefore: f(0) = 4 is the absolute maximum value, and (0, 4) is the absolute maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ABSOLUTE MAXIMUM VS. LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Local Maximum: A local maximum is the highest point nearby.

Absolute Maximum: An absolute maximum is the highest point anywhere in the entire domain.

The smaller peak is a local maximum, while the highest peak is the absolute maximum.

So: Local = nearby, Absolute = entire domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ABSOLUTE MAXIMUM ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications is finding the absolute maximum on a closed interval: [a, b]

Example: f(x) = x² - 4x + 5 on [0, 5]

We cannot simply look at the critical numbers.

We must check:
  • Critical numbers inside the interval
  • Left endpoint
  • Right endpoint

This is called the Closed Interval Method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CLOSED INTERVAL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To find the absolute maximum and minimum of f(x) on [a, b], follow these steps:

Step 1: Find f'(x)
  Calculate the derivative.

Step 2: Find critical numbers
  Solve f'(x) = 0 and find points where f'(x) does not exist.

Step 3: Keep only critical numbers inside [a, b]
  Ignore critical numbers outside the interval.

Step 4: Evaluate the function at all candidates
  Calculate f(a), f(b), and f(c) for every critical number c.

Step 5: Compare the values
  The largest value is the absolute maximum.
  The smallest value is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum of f(x) = x² - 4x + 5 on [0, 5]

Step 1: Find the derivative: f'(x) = 2x - 4

Step 2: Find critical numbers: Set 2x - 4 = 0 → x = 2

So our critical number is: x = 2. It is inside the interval [0, 5].

Step 3: Check the endpoints
  Left endpoint: x = 0
  Right endpoint: x = 5

Our candidates are: x = 0, 2, 5

Step 4: Evaluate f(x)

At x = 0: f(0) = 0² - 4(0) + 5 = 5

At x = 2: f(2) = 2² - 4(2) + 5 = 4 - 8 + 5 = 1

At x = 5: f(5) = 5² - 4(5) + 5 = 25 - 20 + 5 = 10

Step 5: Compare
  x = 0 → f(x) = 5
  x = 2 → f(x) = 1
  x = 5 → f(x) = 10

The largest value is: 10

Therefore: Absolute Maximum = 10 and it occurs at x = 5.

The absolute maximum point is: (5, 10)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DO WE CHECK THE ENDPOINTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important things to remember.

A common mistake is to find a critical number and assume it gives the absolute maximum.

That's not always true.

Consider: f(x) = x² on [-1, 3]

The derivative is: f'(x) = 2x

The critical number is: x = 0

But: f(0) = 0

Now check the endpoints: f(-1) = 1, f(3) = 9

The largest value is: 9

So the absolute maximum is: (3, 9) even though x = 3 is not a critical number.

This is why endpoints must always be checked on a closed interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ABSOLUTE MAXIMUM CAN OCCUR AT AN ENDPOINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An absolute maximum does not have to occur where f'(x) = 0.

It can occur at an endpoint.

Example: f(x) = x on [0, 5]

The function continuously increases: 0 → 5

Therefore: f(5) = 5 is the absolute maximum.

So: (5, 5) is the absolute maximum point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ABSOLUTE MAXIMUM VS. CRITICAL NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number is simply a candidate for an absolute maximum.

It does not automatically mean there is an absolute maximum there.

Example: f(x) = x³

Then: f'(x) = 3x² → f'(0) = 0 → x = 0 is a critical number.

However, x = 0 is not a maximum. The function continues increasing through x = 0.

So: Critical Number ≠ automatically maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ABSOLUTE MAXIMUM VS. LOCAL MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: Highest nearby?
Local Maximum: Yes
Absolute Maximum: Yes

Feature: Highest in entire domain?
Local Maximum: Not necessarily
Absolute Maximum: Yes

Feature: Can occur at endpoint?
Local Maximum: Usually not in interior definition
Absolute Maximum: Yes

Feature: Requires f'(x) = 0?
Local Maximum: Not always
Absolute Maximum: No

Feature: Can have multiple?
Local Maximum: Yes
Absolute Maximum: Can have multiple points with same maximum value

Feature: Main idea
Local Maximum: Nearby peak
Absolute Maximum: Highest overall

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MULTIPLE ABSOLUTE MAXIMUM POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have more than one point where the same highest value occurs.

Example: f(x) = cos(x) on [0, 2π]

We have: f(0) = 1 and f(2π) = 1

Both are the highest value.

Therefore, the absolute maximum value is: 1 and it occurs at two points: x = 0 and x = 2π.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DOES EVERY FUNCTION HAVE AN ABSOLUTE MAXIMUM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No.

Example: f(x) = x on (-∞, ∞)

There is no highest value because the function keeps increasing.

No matter how large f(x) becomes, we can always choose a larger x.

Therefore: No absolute maximum exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem (EVT) is closely related to absolute maximum and minimum.

It says: If f is continuous on a closed interval [a, b], then f must have both an absolute maximum and an absolute minimum on that interval.

In mathematical form: f continuous on [a, b] ⇒ f has an absolute max and min.

Example: f(x) = x² is continuous on [0, 5]

Therefore, we are guaranteed that it has both an absolute maximum and absolute minimum on that interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. VISUAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the graph as a landscape.

Local maximum: A small hill.

Absolute maximum: The highest mountain in the entire region.

The absolute maximum is the highest point overall.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum of f(x) = -x² + 6x + 2 on [0, 5]

Derivative: f'(x) = -2x + 6

Set equal to zero: -2x + 6 = 0 → x = 3

Candidates: x = 0, 3, 5

Evaluate:
  f(0) = 2
  f(3) = -(3)² + 6(3) + 2 = -9 + 18 + 2 = 11
  f(5) = -(5)² + 6(5) + 2 = -25 + 30 + 2 = 7

Compare: 2, 11, 7

The largest value is: 11

Therefore: Absolute Maximum = 11 at x = 3, and the point is (3, 11).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE MOST IMPORTANT FORMULA/PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a continuous function on a closed interval [a, b]:

Use: Critical Numbers + Endpoints

Then evaluate: f(a), f(c₁), f(c₂), ..., f(b)

Finally:
  • Largest value = Absolute Maximum
  • Smallest value = Absolute Minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Absolute Maximum, remember:

  • Absolute Maximum = Highest point overall.
  • For a closed interval: Find critical numbers, check the endpoints, evaluate every candidate, choose the largest value.
  • Local Maximum = highest nearby, while Absolute Maximum = highest everywhere in the domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute Maximum is a fundamental concept for finding the highest value of a function over its entire domain.

Key concepts covered:

  ✓ Definition of Absolute Maximum
  ✓ Absolute vs. Local Maximum
  ✓ Closed Interval Method
  ✓ Endpoints
  ✓ Critical Numbers
  ✓ Extreme Value Theorem
  ✓ Multiple Absolute Maximum Points
  ✓ Functions Without Absolute Maxima
  ✓ Visual Interpretation
  ✓ Problem-Solving Process
  `,
  examples: [
    "f(x) = -x² + 4 → absolute maximum at (0, 4)",
    "f(x) = x² - 4x + 5 on [0,5] → absolute maximum at (5, 10)",
    "f(x) = x² on [-1,3] → absolute maximum at (3, 9)",
    "f(x) = x on [0,5] → absolute maximum at (5, 5)",
    "f(x) = cos(x) on [0,2π] → absolute maximum value 1 at x = 0, 2π",
    "f(x) = -x² + 6x + 2 on [0,5] → absolute maximum at (3, 11)",
    "Closed Interval Method: f'(x) → critical numbers → endpoints → compare",
    "Extreme Value Theorem: continuous on closed interval → has absolute max and min",
    "Local max: nearby peak; Absolute max: highest overall",
    "Critical number ≠ automatically maximum",
    "f(x) = x³ → x = 0 is critical but not maximum",
    "f(x) = x on (-∞,∞) → no absolute maximum",
    "Absolute maximum can occur at endpoint",
    "Check endpoints on closed interval",
  ],
};

export default topic;