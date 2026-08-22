const topic = {
  id: "horizontal-asymptotes",
  title: "Horizontal Asymptotes",
  summary:
    "Definition of horizontal asymptotes, rational functions, degree comparison, limits at infinity, and distinguishing from vertical asymptotes.",
  details: `
A horizontal asymptote is a horizontal line that a function approaches as x becomes very large or very negative.

It is written as: y = L

where L is the value that the function approaches.

Horizontal asymptotes are closely connected to limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 1/x

As x becomes larger and larger:
  • 1/10 = 0.1
  • 1/100 = 0.01
  • 1/1000 = 0.001

The function gets closer and closer to 0.

Therefore: lim(x→∞) 1/x = 0

and: y = 0 is the horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A line: y = L is a horizontal asymptote of f(x) if:

  lim(x→∞) f(x) = L

or:

  lim(x→−∞) f(x) = L

This means the graph gets closer and closer to the horizontal line as x moves toward infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HORIZONTAL ASYMPTOTES CAN BE DIFFERENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have different horizontal asymptotes on the left and right sides.

Example: Consider a function where:
  lim(x→∞) f(x) = 2
  lim(x→−∞) f(x) = −2

Then the function has:
  • y = 2 as its right-side horizontal asymptote
  • y = −2 as its left-side horizontal asymptote

So a function can have up to two horizontal asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Horizontal asymptotes are especially common with rational functions:

  f(x) = P(x)/Q(x)

The easiest way to find the horizontal asymptote is to compare the degrees of the numerator and denominator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. NUMERATOR DEGREE LESS THAN DENOMINATOR DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If deg(P) < deg(Q), then: y = 0 is the horizontal asymptote.

Example: f(x) = (2x + 3)/(x² + 4)

The numerator has degree 1. The denominator has degree 2.

Since 1 < 2, the horizontal asymptote is: y = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SAME DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the numerator and denominator have the same degree, divide the leading coefficients.

Example: f(x) = (3x² + 7)/(2x² + 5x + 1)

Both have degree 2.

The leading coefficients are: 3 and 2

Therefore: y = 3/2 is the horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. NUMERATOR DEGREE GREATER THAN DENOMINATOR DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If deg(P) > deg(Q), then there is generally no horizontal asymptote.

Example: f(x) = (x² + 1)/(x + 2)

The numerator has degree 2, while the denominator has degree 1.

Since 2 > 1, there is no horizontal asymptote.

However, the function may have another type of asymptote, such as a slant asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE THREE MAIN RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function: f(x) = P(x)/Q(x)

remember:

Degree Relationship: Numerator < Denominator
Horizontal Asymptote: y = 0

Degree Relationship: Numerator = Denominator
Horizontal Asymptote: Ratio of leading coefficients

Degree Relationship: Numerator > Denominator
Horizontal Asymptote: No horizontal asymptote

This is one of the most important shortcuts to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING HORIZONTAL ASYMPTOTES USING LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can always use limits directly.

Consider: f(x) = (4x + 1)/(2x + 3)

Find: lim(x→∞) (4x + 1)/(2x + 3)

Divide the numerator and denominator by x:

  (4 + 1/x)/(2 + 3/x)

As x → ∞, we know: 1/x → 0

Therefore: (4 + 0)/(2 + 0) = 2

Thus: lim(x→∞) (4x + 1)/(2x + 3) = 2

and the horizontal asymptote is: y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GRAPHICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The curve gets closer and closer to y = L as x moves toward infinity.

The graph does not necessarily have to touch or cross the horizontal asymptote.

In fact, a function can cross its horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CAN A GRAPH CROSS A HORIZONTAL ASYMPTOTE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

Example: f(x) = x/(x² + 1)

Its horizontal asymptote is: y = 0

because: lim(x→±∞) x/(x² + 1) = 0

The function can approach or even cross its horizontal asymptote.

So don't think of an asymptote as a line that the graph can never touch.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HORIZONTAL VS. VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two are very important to distinguish.

Horizontal asymptote:
  Describes what happens as x → ∞ or x → −∞.
  Example: y = 2

Vertical asymptote:
  Describes what happens as x approaches a particular finite value.
  Example: x = 3

Example: f(x) = 1/(x - 3)

has:
  • x = 3 as a vertical asymptote
  • y = 0 as a horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: BOTH VERTICAL AND HORIZONTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (2x + 1)/(x - 4)

Vertical asymptote:
  Set the denominator equal to zero: x - 4 = 0
  Therefore: x = 4

Horizontal asymptote:
  The numerator and denominator have the same degree.
  Leading coefficients: 2/1 = 2
  Therefore: y = 2

So the function has:
  • x = 4 as its vertical asymptote
  • y = 2 as its horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. HORIZONTAL ASYMPTOTES OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Horizontal asymptotes are not limited to rational functions.

Consider: f(x) = e⁻ˣ

As x → ∞, e⁻ˣ → 0

Therefore: y = 0 is the horizontal asymptote.

Another Example
────────────────

Consider: f(x) = 2 + e⁻ˣ

As x → ∞, e⁻ˣ → 0

Therefore: 2 + 0 = 2

So: y = 2 is the horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. HORIZONTAL ASYMPTOTES OF TRANSFORMED FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = 1/x has horizontal asymptote: y = 0

Now add 5: g(x) = 1/x + 5

As x → ∞, 1/x + 5 → 5

Therefore: y = 5 is the horizontal asymptote.

A vertical shift changes the horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. STEPS FOR FINDING A HORIZONTAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Method 1: Degree Comparison
────────────────────────────

For rational functions:

Step 1: Find the degree of the numerator.
Step 2: Find the degree of the denominator.
Step 3: Compare the degrees.
Step 4: Apply the appropriate rule.

Method 2: Use Limits
─────────────────────

Calculate: lim(x→∞) f(x) and/or lim(x→−∞) f(x)

If the result is L, then: y = L is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PRACTICE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  f(x) = (5x + 2)/(x² + 1)
  Degree numerator: 1, Degree denominator: 2
  Therefore: y = 0

Example 2:
  f(x) = (7x³ + 2)/(4x³ - x + 1)
  Same degree: 3 = 3
  Leading coefficients: 7/4
  Therefore: y = 7/4

Example 3:
  f(x) = (2x⁴ + 1)/(x² + 3)
  Numerator degree: 4, Denominator degree: 2
  Since 4 > 2, there is: No horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing x and y
  Horizontal asymptotes are written as: y = L
  Vertical asymptotes are written as: x = a

Mistake 2: Thinking the graph can never cross the asymptote
  A function can cross a horizontal asymptote.

Mistake 3: Looking only at the constant terms
  For rational functions, focus on the highest-degree terms and their coefficients.

  Example: (5x² + 1)/(2x² + 100)
  The horizontal asymptote is: y = 5/2
  not y = 100 or y = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Horizontal Asymptotes, you should understand:

  • Definition of horizontal asymptotes
  • Limits at infinity
  • Rational functions
  • Degree comparison
  • Numerator degree vs. denominator degree
  • Leading coefficients
  • Horizontal asymptotes of exponential functions
  • Horizontal vs. vertical asymptotes
  • Graphical interpretation
  • Functions that cross asymptotes
  • Transformed functions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Horizontal Asymptotes, remember:

  • A horizontal asymptote is a horizontal line the function approaches as x → ±∞.
  • For rational functions, compare degrees of numerator and denominator.
  • The graph can cross a horizontal asymptote.
  • Horizontal asymptotes are different from vertical asymptotes.

The key idea to remember is:

  A horizontal asymptote describes the long-term behavior of a function as x → ∞ or x → −∞. For rational functions, compare the degrees of the numerator and denominator to determine the horizontal asymptote. The most important connection is: lim(x→∞) f(x) = L → y = L is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Horizontal Asymptotes are essential concepts for understanding the long-term behavior of functions.

Key concepts covered:

  ✓ Basic Idea
  ✓ Definition
  ✓ Different Horizontal Asymptotes
  ✓ Rational Functions
  ✓ Degree Comparison
  ✓ Three Main Rules
  ✓ Finding Using Limits
  ✓ Graphical Interpretation
  ✓ Crossing Horizontal Asymptotes
  ✓ Horizontal vs. Vertical Asymptotes
  ✓ Exponential Functions
  ✓ Transformed Functions
  ✓ Step-by-Step Process
  ✓ Common Mistakes
  `,
  examples: [
    "Find horizontal asymptote of f(x) = 1/x → y = 0",
    "Find horizontal asymptote of f(x) = (2x+3)/(x²+4) → y = 0",
    "Find horizontal asymptote of f(x) = (3x²+7)/(2x²+5x+1) → y = 3/2",
    "Find horizontal asymptote of f(x) = (x²+1)/(x+2) → No horizontal asymptote",
    "Find horizontal asymptote of f(x) = (4x+1)/(2x+3) → y = 2",
    "Find horizontal asymptote of f(x) = e⁻ˣ → y = 0",
    "Find horizontal asymptote of f(x) = 2 + e⁻ˣ → y = 2",
    "Find horizontal asymptote of f(x) = 1/x + 5 → y = 5",
    "Find horizontal asymptote of f(x) = (5x+2)/(x²+1) → y = 0",
    "Find horizontal asymptote of f(x) = (7x³+2)/(4x³-x+1) → y = 7/4",
    "Find horizontal asymptote of f(x) = (2x⁴+1)/(x²+3) → No horizontal asymptote",
    "Identify vertical asymptote: x = 3",
    "Identify horizontal asymptote: y = 2",
    "Distinguish: horizontal vs. vertical asymptotes",
    "Determine if graph can cross asymptote: yes",
  ],
};

export default topic;