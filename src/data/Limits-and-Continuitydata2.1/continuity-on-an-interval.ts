const topic = {
  id: "continuity-on-an-interval",
  title: "Continuity on an Interval",
  summary:
    "Continuity on open, closed, and half-open intervals, checking endpoints, and identifying discontinuities.",
  details: `
Continuity on an interval means that a function is continuous at every point within a given interval. In simple terms, the graph has no breaks, holes, or jumps throughout that interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONTINUITY ON AN OPEN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) is continuous on an open interval (a, b) if it is continuous at every point c such that:

  a < c < b

The endpoints a and b are not included.

Example: f(x) = x² is continuous on (-∞, ∞) because a polynomial function is continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. CONTINUITY ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous on a closed interval [a, b] if:
  • It is continuous at every point inside the interval.
  • It is right-continuous at a.
  • It is left-continuous at b.

This means:

  lim(x→a⁺) f(x) = f(a)

and

  lim(x→b⁻) f(x) = f(b)

Example: Consider f(x) = x² on [1, 3]

Since x² is continuous everywhere, it is also continuous on [1, 3].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONTINUITY ON A HALF-OPEN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are also intervals where only one endpoint is included.

Example: [a, b)
  At a, we use the right-hand limit: lim(x→a⁺) f(x) = f(a)
  At every point between a and b, ordinary continuity is required.

Similarly, for (a, b]:
  we check the left-hand limit at b: lim(x→b⁻) f(x) = f(b)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WITH A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/(x - 2)

Is it continuous on [0, 4]?

The denominator becomes zero when: x - 2 = 0 → x = 2

Since x = 2 is inside the interval [0, 4], the function is not continuous on [0, 4].

However, it is continuous on [0, 2) and (2, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WITH A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = { x + 1, if x < 2; 5, if x ≥ 2 }

Determine whether it is continuous on [0, 4].

At x = 2:

Left-hand limit: lim(x→2⁻) f(x) = 2 + 1 = 3

Right-hand limit: lim(x→2⁺) f(x) = 5

Since 3 ≠ 5, there is a jump discontinuity at x = 2.

Therefore: The function is not continuous on [0, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO CHECK CONTINUITY ON AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these steps:

Step 1: Identify the interval
  For example: [a, b]

Step 2: Find possible discontinuities
  Look for: Division by zero, Holes, Jumps, Vertical asymptotes, Undefined logarithms, Undefined square roots

Step 3: Check the interior
  For every a < x < b, the function must satisfy: lim(x→x₀) f(x) = f(x₀)

Step 4: Check the endpoints
  For a closed interval [a, b]:
    At a: lim(x→a⁺) f(x) = f(a)
    At b: lim(x→b⁻) f(x) = f(b)

Step 5: State the conclusion
  If there are no discontinuities within the interval: The function is continuous on the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMMON FUNCTIONS AND THEIR INTERVALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: x² + 3x - 1
Continuous On: All real numbers

Function: 1/(x - 4)
Continuous On: x ≠ 4

Function: √x
Continuous On: [0, ∞)

Function: ln(x)
Continuous On: (0, ∞)

Function: eˣ
Continuous On: All real numbers

Function: sin(x)
Continuous On: All real numbers

Function: cos(x)
Continuous On: All real numbers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Continuity on an Interval, remember:

  • Open interval: check the inside only.
  • Closed interval: check the inside + one-sided endpoints.
  • Half-open interval: check the inside + the included endpoint.
  • Look for division by zero, holes, jumps, and vertical asymptotes.

The key idea to remember is:

  Continuity on an interval means there are no discontinuities anywhere in that interval. For a closed interval [a, b], remember: lim(x→a⁺) f(x) = f(a) and lim(x→b⁻) f(x) = f(b), and the function must be continuous at every point between a and b. Easy way to remember: Open interval → check the inside. Closed interval → check the inside + one-sided endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity on an Interval is a fundamental concept that extends the idea of continuity to entire ranges of values.

Key concepts covered:

  ✓ Continuity on an Open Interval
  ✓ Continuity on a Closed Interval
  ✓ Continuity on a Half-Open Interval
  ✓ Rational Functions and Intervals
  ✓ Piecewise Functions and Intervals
  ✓ Steps for Checking Continuity
  ✓ Common Functions and Their Intervals
  `,
  examples: [
    "Check continuity of f(x) = x² on (-∞, ∞) → continuous",
    "Check continuity of f(x) = x² on [1, 3] → continuous",
    "Check continuity of f(x) = 1/(x - 2) on [0, 4] → not continuous (x=2)",
    "Check continuity of f(x) = 1/(x - 2) on [0, 2) → continuous",
    "Check continuity of f(x) = 1/(x - 2) on (2, 4] → continuous",
    "Check continuity of f(x) = {x+1 if x<2, 5 if x≥2} on [0,4] → not continuous",
    "Determine if f(x) = 1/(x - 4) is continuous on [0,5] → no (x=4)",
    "Determine if f(x) = √x is continuous on [0, ∞) → yes",
    "Determine if f(x) = ln(x) is continuous on (0, ∞) → yes",
    "Determine if f(x) = eˣ is continuous on all real numbers → yes",
    "Open interval: check the inside only",
    "Closed interval: check inside + one-sided endpoints",
    "Half-open interval: check inside + included endpoint",
    "Look for division by zero when checking continuity",
    "Look for holes and jumps when checking continuity",
  ],
};

export default topic;