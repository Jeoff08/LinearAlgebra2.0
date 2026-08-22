const topic = {
  id: "limits-at-infinity",
  title: "Limits at Infinity",
  summary:
    "Definition of limits at infinity, horizontal asymptotes, rational functions, degree comparison, and behavior of polynomial and exponential functions.",
  details: `
Limits at infinity describe the behavior of a function as x becomes extremely large or extremely negative.

Instead of asking what happens when x approaches a particular number, we ask: x → +∞ or x → −∞.

The goal is to determine what value the function approaches as x gets farther and farther away from zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = 1/x

As x becomes larger:
  • x = 10 → f(x) = 0.1
  • x = 100 → f(x) = 0.01
  • x = 1000 → f(x) = 0.001

The values get closer and closer to 0.

Therefore: lim(x→∞) 1/x = 0

This means that as x increases without bound, f(x) approaches 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LIMIT AS x → +∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The notation: lim(x→∞) f(x) = L

means that f(x) approaches L as x becomes increasingly large.

Example: lim(x→∞) 5/x = 0

because the denominator becomes extremely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LIMIT AS x → −∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can also examine what happens when x becomes increasingly negative.

Example: f(x) = 1/x

As x → −∞:
  • 1/(-100) = -0.01
  • 1/(-1000) = -0.001

The values still approach 0.

Therefore: lim(x→−∞) 1/x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at infinity are closely related to horizontal asymptotes.

If lim(x→∞) f(x) = L, then y = L is a horizontal asymptote of the function on the right side.

Similarly, if lim(x→−∞) f(x) = L, then y = L is a horizontal asymptote on the left side.

Example: f(x) = (2x + 1)/(x + 3)

As x → ∞, the function approaches 2.

Therefore: lim(x→∞) (2x + 1)/(x + 3) = 2

and y = 2 is the horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of limits at infinity is evaluating rational functions.

A rational function has the form: f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials.

The easiest method is to compare the degrees of the numerator and denominator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. NUMERATOR DEGREE LESS THAN DENOMINATOR DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If deg(P) < deg(Q), then: lim(x→±∞) P(x)/Q(x) = 0

Example: lim(x→∞) (3x + 2)/(x² + 5)

The numerator has degree 1. The denominator has degree 2.

Since 1 < 2, the limit is: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SAME DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the numerator and denominator have the same degree, divide the leading coefficients.

Example: lim(x→∞) (4x² + 7)/(2x² + 3x + 1)

Both have degree 2.

Take the leading coefficients: 4/2 = 2

Therefore: lim(x→∞) (4x² + 7)/(2x² + 3x + 1) = 2

The horizontal asymptote is: y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. NUMERATOR DEGREE GREATER THAN DENOMINATOR DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If deg(P) > deg(Q), the function generally does not approach a finite number.

Example: lim(x→∞) (x² + 1)/(x + 2)

The numerator has degree 2. The denominator has degree 1.

Therefore, the numerator grows faster.

In this case: lim(x→∞) (x² + 1)/(x + 2) = +∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. A USEFUL SHORTCUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions:

Degree Comparison: Numerator < Denominator
Limit: 0

Degree Comparison: Numerator = Denominator
Limit: Ratio of leading coefficients

Degree Comparison: Numerator > Denominator
Limit: Usually +∞, −∞, or no finite limit

This is one of the most useful rules for limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIVIDING BY THE HIGHEST POWER OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another method is to divide every term by the highest power of x.

Consider: lim(x→∞) (3x² + 4x + 5)/(x² + 2x + 1)

Divide everything by x²:

  (3 + 4/x + 5/x²)/(1 + 2/x + 1/x²)

As x → ∞, we know: 1/x → 0 and 1/x² → 0

Therefore: (3 + 0 + 0)/(1 + 0 + 0) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT LIMITS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These basic limits are extremely useful:

  • lim(x→∞) 1/x = 0
  • lim(x→−∞) 1/x = 0

More generally: lim(x→±∞) 1/xⁿ = 0 for n > 0

Also: lim(x→∞) xⁿ = ∞ for positive n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at infinity also apply to exponential functions.

For f(x) = eˣ:
  • lim(x→∞) eˣ = ∞
  • lim(x→−∞) eˣ = 0

This is because e⁻ˣ = 1/eˣ and the denominator becomes extremely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH eˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→∞) e⁻ˣ

Rewrite: e⁻ˣ = 1/eˣ

As x → ∞, eˣ → ∞

Therefore: lim(x→∞) e⁻ˣ = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. POLYNOMIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For polynomial functions, the highest-degree term determines the behavior at infinity.

Example: f(x) = 3x⁴ - 2x² + 7

As x → ∞, the dominant term is: 3x⁴

Therefore: lim(x→∞) (3x⁴ - 2x² + 7) = +∞

Similarly: lim(x→−∞) (3x⁴ - 2x² + 7) = +∞

because x⁴ is an even power.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ODD VS. EVEN POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The highest power is especially important.

Even power
───────────

For x⁴:
  lim(x→∞) x⁴ = +∞
  lim(x→−∞) x⁴ = +∞

Odd power
──────────

For x³:
  lim(x→∞) x³ = +∞
  lim(x→−∞) x³ = −∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH ODD POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→−∞) (2x³ - 5x + 1)

The dominant term is: 2x³

Since x → −∞: x³ → −∞

Therefore: 2x³ → −∞

So: lim(x→−∞) (2x³ - 5x + 1) = −∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. LIMITS AT INFINITY VS. INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are easy to confuse.

Infinite Limit
───────────────

The input approaches a specific number:

  lim(x→2) 1/(x - 2)² = +∞

Here: x → 2, but f(x) → +∞

Limit at Infinity
──────────────────

The input approaches infinity:

  lim(x→∞) 1/x = 0

Here: x → ∞, but f(x) → 0

Easy way to remember:
  • Infinite Limit: x approaches a number, while f(x) becomes infinitely large.
  • Limit at Infinity: x becomes infinitely large, while we determine what f(x) approaches.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. STEPS FOR SOLVING LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving: lim(x→∞) f(x)

follow these steps:

Step 1: Identify the dominant term.

Step 2: For rational functions, compare the degrees of the numerator and denominator.

Step 3: If necessary, divide by the highest power of x.

Step 4: Use the fact that 1/xⁿ → 0 as x → ±∞.

Step 5: Determine the final limit.

Step 6: If the result is a finite number L, identify the horizontal asymptote: y = L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  lim(x→∞) 7/x = 0

Example 2:
  lim(x→∞) (3x + 1)/(x + 5)
  Same degree: 3/1 = 3

Example 3:
  lim(x→∞) (x + 2)/(x² + 1)
  Numerator degree < denominator degree: 0

Example 4:
  lim(x→∞) (5x³ - 2x + 1)
  Dominant term: 5x³ → +∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Limits at Infinity, you should understand:

  • Definition of limits at infinity
  • Limit as x → +∞
  • Limit as x → −∞
  • Horizontal asymptotes
  • Rational functions
  • Degree comparison
  • Dividing by the highest power
  • Polynomial functions
  • Exponential functions
  • Odd vs. even powers
  • Infinite limits vs. limits at infinity
  • Step-by-step problem solving

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Limits at Infinity, remember:

  • Limits at infinity study behavior as x becomes very large or very negative.
  • Horizontal asymptotes are determined by limits at infinity.
  • For rational functions, compare degrees of numerator and denominator.
  • Divide by the highest power of x to simplify.
  • Polynomial behavior is determined by the highest-degree term.
  • Exponential functions have different behavior at positive and negative infinity.

The key idea to remember is:

  Limits at infinity study the behavior of a function as x approaches +∞ or −∞. They are especially important for determining horizontal asymptotes and understanding the long-term behavior of polynomial, rational, exponential, and other functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at Infinity are essential concepts for understanding the long-term behavior of functions and determining horizontal asymptotes.

Key concepts covered:

  ✓ Basic Idea
  ✓ Limit as x → +∞
  ✓ Limit as x → −∞
  ✓ Horizontal Asymptotes
  ✓ Rational Functions
  ✓ Degree Comparison
  ✓ Dividing by the Highest Power
  ✓ Important Limits to Remember
  ✓ Exponential Functions
  ✓ Polynomial Functions
  ✓ Odd vs. Even Powers
  ✓ Infinite Limits vs. Limits at Infinity
  ✓ Step-by-Step Problem Solving
  `,
  examples: [
    "Evaluate: lim(x→∞) 1/x → 0",
    "Evaluate: lim(x→−∞) 1/x → 0",
    "Evaluate: lim(x→∞) 5/x → 0",
    "Evaluate: lim(x→∞) (2x + 1)/(x + 3) → 2",
    "Evaluate: lim(x→∞) (3x + 2)/(x² + 5) → 0",
    "Evaluate: lim(x→∞) (4x² + 7)/(2x² + 3x + 1) → 2",
    "Evaluate: lim(x→∞) (x² + 1)/(x + 2) → +∞",
    "Evaluate: lim(x→∞) (3x² + 4x + 5)/(x² + 2x + 1) → 3",
    "Evaluate: lim(x→∞) e⁻ˣ → 0",
    "Evaluate: lim(x→∞) eˣ → ∞",
    "Evaluate: lim(x→−∞) eˣ → 0",
    "Evaluate: lim(x→∞) (3x⁴ - 2x² + 7) → +∞",
    "Evaluate: lim(x→−∞) (3x⁴ - 2x² + 7) → +∞",
    "Evaluate: lim(x→−∞) (2x³ - 5x + 1) → −∞",
    "Identify horizontal asymptote: y = 2",
    "Distinguish: infinite limit vs. limit at infinity",
  ],
};

export default topic;