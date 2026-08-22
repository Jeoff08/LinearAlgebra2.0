const topic = {
  id: "extreme-value-theorem",
  title: "Extreme Value Theorem (EVT)",
  summary:
    "Definition of the Extreme Value Theorem, conditions for existence of absolute extrema, and applications.",
  details: `
The Extreme Value Theorem (EVT) is a fundamental theorem in Calculus that tells us when a function is guaranteed to have an absolute maximum and an absolute minimum.

In simple terms: If a function is continuous on a closed and bounded interval, then it must have both an absolute maximum and an absolute minimum somewhere on that interval.

The key conditions are: Continuous + Closed Interval = Absolute Max and Min.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE FORMAL STATEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem states: If f is continuous on the closed interval [a, b], then f must attain both an absolute maximum and an absolute minimum on that interval.

In mathematical notation: f is continuous on [a, b] ⇒ f has an absolute maximum and minimum.

There are two important conditions:
  • f(x) must be continuous.
  • The interval must be closed and bounded, such as [a, b].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES "CONTINUOUS" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous if its graph can be drawn without lifting your pencil.

Example: f(x) = x² is continuous.

Its graph is smooth with no breaks, holes, jumps, or gaps.

So f(x) = x² is continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHAT IS A CLOSED INTERVAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A closed interval includes both endpoints.

Example: [a, b] means a ≤ x ≤ b. The endpoints a and b are included.

Example: [2, 5] means 2 ≤ x ≤ 5. Both 2 and 5 are included.

Open Interval: An open interval is (a, b) which means a < x < b. The endpoints are not included.

Example: (2, 5) means 2 < x < 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THE INTERVAL NEED TO BE CLOSED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important part of the theorem.

Consider: f(x) = x on the interval (0, 1)

The function is continuous. However, it does not have an absolute maximum or minimum.

Why? The function approaches 0 but never reaches it because 0 is not included. Likewise, it approaches 1 but never reaches it.

Therefore: No absolute minimum and No absolute maximum.

Even though the function is continuous! This demonstrates why the interval must be closed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CLOSED VS. OPEN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Closed interval: f(x) = x, [0, 1]

The endpoints are included. Therefore: f(0) = 0 and f(1) = 1

So: Absolute Minimum = 0, Absolute Maximum = 1

Open interval: f(x) = x, (0, 1)

The endpoints are excluded. Therefore: No Absolute Minimum, No Absolute Maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHAT DOES "BOUNDED" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A closed interval such as [a, b] is bounded because it has a finite left and right endpoint.

Example: [0, 10] is bounded.

But [0, ∞) is not bounded. It continues forever in the positive direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE THREE IMPORTANT CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When using the Extreme Value Theorem, remember:

Condition 1: Function is continuous: f(x) is continuous.

Condition 2: Interval is closed: [a, b]

Condition 3: Interval is bounded: Both a and b must be finite.

Therefore: Continuous on a closed and bounded interval guarantees: Absolute Maximum + Absolute Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 1 — EVT APPLIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 4x + 3 on [0, 5]

Step 1: Is the function continuous? Yes. Polynomial functions are continuous everywhere.

Step 2: Is the interval closed? Yes: [0, 5] includes both endpoints.

Step 3: Is it bounded? Yes. The interval goes from 0 to 5.

Therefore, all conditions are satisfied.

So the Extreme Value Theorem guarantees that an absolute maximum exists and an absolute minimum exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING THE ACTUAL MAXIMUM AND MINIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The EVT tells us that the extrema exist, but it doesn't directly tell us where they are.

We still need to find them.

For f(x) = x² - 4x + 3 on [0, 5]:

First find the derivative: f'(x) = 2x - 4

Set equal to zero: 2x - 4 = 0 → x = 2

Our candidates are: x = 0, 2, 5

Evaluate:
  f(0) = 3
  f(2) = 4 - 8 + 3 = -1
  f(5) = 25 - 20 + 3 = 8

Therefore: Absolute Minimum = -1 at (2, -1) and Absolute Maximum = 8 at (5, 8).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EVT GUARANTEES EXISTENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important things to understand.

The Extreme Value Theorem says: The maximum and minimum must exist.

It does not tell you: where the maximum occurs, where the minimum occurs, or what their values are.

You still need calculus techniques to find them. For example, you may need to set f'(x) = 0 and check f(a), f(b), and the values at critical numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 2 — EVT DOES NOT APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² on (0, 5)

The function is continuous. However, the interval is (0, 5) which is open.

Therefore, the Extreme Value Theorem cannot guarantee an absolute maximum or minimum.

In fact: f(x) approaches 0 near x = 0, but x = 0 is not included. So there is no absolute minimum.

The function approaches 25 near x = 5, but x = 5 is not included. So there is no absolute maximum.

Thus: EVT does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 3 — FUNCTION IS NOT CONTINUOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = { x + 1, if x < 2; x + 3, if x ≥ 2 } on [0, 4]

The interval is closed and bounded. However, the function has a jump at x = 2.

Therefore, it is not continuous on the entire interval.

Since one of the EVT conditions fails: EVT does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A HOLE CAN ALSO BREAK THE CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² - 1)/(x - 1) on [0, 2]

For x ≠ 1, we can simplify: f(x) = x + 1

But at x = 1, the original function is undefined. There is a hole in the graph.

Therefore, f is not continuous on [0, 2]. So: EVT does not apply.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EVT AND ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorem is directly connected to absolute maximum and absolute minimum.

If f is continuous on [a, b], then there exist c, d ∈ [a, b] such that f(c) ≤ f(x) ≤ f(d) for every x ∈ [a, b].

Here: f(c) is the absolute minimum, and f(d) is the absolute maximum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. VISUAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a continuous graph trapped between two vertical lines.

Because the graph is continuous and the endpoints are included, the graph must have a highest and lowest point.

The highest point: Absolute Maximum.

The lowest point: Absolute Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EVT VS. LOCAL EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't confuse EVT with local extrema.

Local Minimum: Looks only at nearby points.

Local Maximum: Looks only at nearby points.

Absolute Minimum: Looks across the entire domain.

Absolute Maximum: Looks across the entire domain.

Extreme Value Theorem: Guarantees that absolute extrema exist under specific conditions: Continuous + Closed + Bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Situation: Continuous on [a, b]
EVT Applies?: ✅ Yes

Situation: Continuous on (a, b)
EVT Applies?: ❌ Not guaranteed

Situation: Continuous on [a, ∞)
EVT Applies?: ❌ Not guaranteed

Situation: Discontinuous on [a, b]
EVT Applies?: ❌ No

Situation: Continuous polynomial on [a, b]
EVT Applies?: ✅ Yes

Situation: Continuous trigonometric function on [a, b]
EVT Applies?: ✅ Yes

Situation: Function with a hole on [a, b]
EVT Applies?: ❌ No

Situation: Function with a jump on [a, b]
EVT Applies?: ❌ No

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Thinking continuity alone is enough
  Not necessarily. You need: Continuity + Closed/Bounded Interval.

Mistake 2: Thinking open intervals satisfy EVT
  They don't. Example: (0, 5) is not closed.

Mistake 3: Thinking EVT finds the extrema
  EVT only guarantees their existence. You still need to calculate their locations and values.

Mistake 4: Forgetting endpoints
  When finding absolute extrema on [a, b], always check a and b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. CONNECTION TO THE CLOSED INTERVAL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The EVT explains why the Closed Interval Method works.

Suppose f(x) is continuous on [a, b]. EVT tells us: An absolute maximum and minimum must exist.

Then calculus tells us where to look: Critical numbers + endpoints.

So the complete idea is: EVT guarantees existence, while the Closed Interval Method finds them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAM-STYLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Question: Determine whether the Extreme Value Theorem applies to f(x) = √(x + 2) on [-2, 7].

Step 1: Check continuity
  The square-root function is continuous wherever it is defined.
  Since x + 2 ≥ 0 for x ≥ -2, the function is continuous on [-2, 7].

Step 2: Check the interval
  [-2, 7] is closed. It is also bounded.

Therefore: EVT applies.

So the function must have an absolute maximum and an absolute minimum on the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EASY MEMORY TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: C-C-B — Continuous + Closed + Bounded

If all three are present: Absolute Maximum and Minimum are guaranteed.

You can also remember: "Continuous on a closed interval? Extremes are guaranteed."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Extreme Value Theorem, remember:

  • The Extreme Value Theorem states: If f is continuous on [a, b], then f has an absolute maximum and minimum.
  • The three key ideas are: Continuous, Closed interval, Bounded.
  • Continuous + Closed + Bounded ⇒ Absolute Max + Absolute Min.
  • When you actually need to find those extrema: Critical Numbers + Endpoints is the method to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem is a fundamental result that guarantees the existence of absolute extrema under specific conditions.

Key concepts covered:

  ✓ Formal Statement
  ✓ Continuity
  ✓ Closed Interval
  ✓ Bounded Interval
  ✓ Three Conditions
  ✓ Examples Where EVT Applies
  ✓ Examples Where EVT Does Not Apply
  ✓ EVT Guarantees Existence
  ✓ Finding Extrema
  ✓ Visual Interpretation
  ✓ EVT vs. Local Extrema
  ✓ Common Mistakes
  ✓ Connection to Closed Interval Method
  ✓ Easy Memory Trick
  `,
  examples: [
    "f(x) = x² - 4x + 3 on [0,5] → EVT applies → absolute max at (5,8), min at (2,-1)",
    "f(x) = x on (0,1) → continuous but open interval → EVT does not apply",
    "f(x) = x² on (0,5) → continuous but open interval → EVT does not apply",
    "f(x) = {x+1 if x<2, x+3 if x≥2} on [0,4] → jump discontinuity → EVT does not apply",
    "f(x) = (x²-1)/(x-1) on [0,2] → hole at x=1 → EVT does not apply",
    "f(x) = √(x+2) on [-2,7] → continuous, closed, bounded → EVT applies",
    "EVT: Continuous on [a,b] ⇒ absolute max and min exist",
    "EVT guarantees existence, not location",
    "Closed interval: [a,b] includes endpoints",
    "Open interval: (a,b) excludes endpoints",
    "C-C-B: Continuous + Closed + Bounded",
    "To find extrema: Critical numbers + Endpoints",
    "Continuity alone is not enough",
    "Open intervals do not satisfy EVT",
  ],
};

export default topic;