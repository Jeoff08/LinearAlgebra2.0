const topic = {
  id: "direct-substitution",
  title: "Direct Substitution",
  summary:
    "Definition of direct substitution, when it works, polynomial and rational functions, indeterminate forms, and problem-solving strategy.",
  details: `
Direct substitution is one of the simplest methods for evaluating a limit. It means replacing x directly with the value that x is approaching.

If the resulting expression is defined, the answer is simply the value obtained after substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate: lim(x→2) (x + 3)

Since x is approaching 2, substitute: x = 2

Therefore: 2 + 3 = 5

So: lim(x→2) (x + 3) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHEN DIRECT SUBSTITUTION WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution works particularly well when the function is continuous at the value being approached.

Common examples include:
  • Polynomial functions
  • Exponential functions
  • Trigonometric functions at points where they are defined
  • Rational functions when the denominator is not zero
  • Radical functions when the expression is defined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIRECT SUBSTITUTION WITH POLYNOMIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→3) (x² + 2x + 1)

Substitute: x = 3
  3² + 2(3) + 1 = 9 + 6 + 1 = 16

Therefore: 16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER POLYNOMIAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→−2) (2x³ - x² + 4)

Substitute: x = −2
  2(−2)³ - (−2)² + 4 = 2(−8) - 4 + 4 = −16

Therefore: −16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIRECT SUBSTITUTION WITH RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→2) (x + 4)/(x + 1)

Substitute: x = 2
  (2 + 4)/(2 + 1) = 6/3 = 2

Therefore: 2

Direct substitution works because the denominator is not zero: 2 + 1 = 3 ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RATIONAL FUNCTIONS WITH ZERO DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution can sometimes produce: 0/0

This is an indeterminate form.

Example: lim(x→2) (x² - 4)/(x - 2)

Substitute x = 2: (4 - 4)/(2 - 2) = 0/0

We cannot stop here. 0/0 does not mean the answer is 0.

We need another method.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE REQUIRING FACTORING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→2) (x² - 4)/(x - 2)

Factor the numerator: x² - 4 = (x - 2)(x + 2)

Therefore: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2)

Cancel: x + 2

Now substitute: 2 + 2 = 4

Therefore: 4

So direct substitution initially failed, but after simplifying the expression, direct substitution could be used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DIRECT SUBSTITUTION WITH SQUARE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→4) √(x + 5)

Substitute: √(4 + 5) = √9 = 3

Therefore: 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIRECT SUBSTITUTION WITH CUBE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→8) ³√(x + 19)

Substitute: ³√(8 + 19) = ³√27 = 3

Therefore: 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIRECT SUBSTITUTION WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution can also be used with trigonometric functions when the function is defined.

Consider: lim(x→0) sin(x)

Substitute: sin(0) = 0

Therefore: 0

Another Example
─────────────────

Consider: lim(x→π) cos(x)

Substitute: cos(π) = −1

Therefore: −1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIRECT SUBSTITUTION WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→2) eˣ

Substitute: e²

Therefore: e²

Approximately: e² ≈ 7.389

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIRECT SUBSTITUTION WITH LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→3) ln(x + 1)

Substitute: ln(3 + 1) = ln(4)

Therefore: ln(4)

Approximately: ln(4) ≈ 1.386

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DIRECT SUBSTITUTION AND CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct substitution works because of continuity.

If a function is continuous at x = a, then: lim(x→a) f(x) = f(a)

This means the limit can be found simply by evaluating the function at a.

Example: f(x) = x² + 3x

Since this is a polynomial, it is continuous everywhere.

Therefore: lim(x→2) f(x) = f(2) = 2² + 3(2) = 4 + 6 = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHEN DIRECT SUBSTITUTION GIVES A FINITE NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If substitution gives a normal finite value, you're usually finished.

Example: lim(x→5) (2x + 7)

Substitute: 2(5) + 7 = 17

Therefore: 17

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHEN DIRECT SUBSTITUTION GIVES 0/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If substitution produces 0/0, you cannot conclude the limit.

You need another method.

Possible methods include:
  • Factoring: x² - 9 = (x - 3)(x + 3)
  • Rationalization: Useful for expressions involving square roots.
  • Common denominator: Useful when multiple fractions are involved.
  • Other algebraic techniques: Depending on the problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN DIRECT SUBSTITUTION GIVES nonzero/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose substitution gives: 5/0

This is not an ordinary finite limit.

Example: lim(x→3) 5/(x - 3)

Substitution gives: 5/0

This indicates that we need to investigate the one-sided limits.

From the left: lim(x→3⁻) 5/(x - 3) = −∞

From the right: lim(x→3⁺) 5/(x - 3) = +∞

Therefore: x = 3 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DIRECT SUBSTITUTION DECISION PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating: lim(x→a) f(x)

use this process:

Step 1: Substitute x = a

Step 2: Look at the result.

If you get a normal number:
  Done

If you get 0/0:
  Simplify or use another limit technique.

If you get nonzero/0:
  Investigate for an infinite limit or vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  lim(x→4) (x² + 1)
  Substitute: 4² + 1 = 17 → 17

Example 2:
  lim(x→2) (x + 5)/(x + 3)
  Substitute: (2 + 5)/(2 + 3) = 7/5 → 7/5

Example 3:
  lim(x→0) cos(x)
  Substitute: cos(0) = 1 → 1

Example 4:
  lim(x→1) (x² - 1)/(x - 1)
  Substitution: (1 - 1)/(1 - 1) = 0/0 → Direct substitution alone does not work.
  Factor: x² - 1 = (x - 1)(x + 1)
  Cancel: x + 1
  Then: 1 + 1 = 2 → 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Thinking 0/0 = 0
  This is incorrect. 0/0 is indeterminate.

Mistake 2: Substituting without checking the denominator
  For f(x)/g(x), make sure g(a) ≠ 0 before concluding that direct substitution works.

Mistake 3: Forgetting domain restrictions
  For example, √(x - 2) is only defined for x ≥ 2.
  So the input must be within the appropriate domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Result After Substitution    What to Do
─────────────────────────────────────────────────────────────────
Normal finite number         Limit found
0/0                          Simplify/use another technique
nonzero/0                    Investigate infinite limit
Undefined square root/log    Check domain
Defined trigonometric value  Evaluate normally

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Direct Substitution, remember:

  • Direct substitution is the first method to try for limits.
  • It works well for continuous functions.
  • 0/0 is indeterminate and requires more work.
  • nonzero/0 suggests an infinite limit or vertical asymptote.

The key idea to remember is:

  Direct substitution is the first method you should try when evaluating a limit. Simply replace x with the value it approaches. However, if direct substitution produces 0/0, the problem is not finished. You must simplify or use another technique before determining the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct Substitution is the simplest and most fundamental method for evaluating limits.

Key concepts covered:

  ✓ Basic Idea
  ✓ When Direct Substitution Works
  ✓ Polynomial Functions
  ✓ Rational Functions
  ✓ Zero Denominator
  ✓ Factoring
  ✓ Square Roots
  ✓ Cube Roots
  ✓ Trigonometric Functions
  ✓ Exponential Functions
  ✓ Logarithmic Functions
  ✓ Continuity
  ✓ Indeterminate Form (0/0)
  ✓ nonzero/0 Form
  ✓ Decision Process
  ✓ Common Mistakes
  `,
  examples: [
    "Evaluate: lim(x→2) (x + 3) → 5",
    "Evaluate: lim(x→3) (x² + 2x + 1) → 16",
    "Evaluate: lim(x→−2) (2x³ - x² + 4) → −16",
    "Evaluate: lim(x→2) (x + 4)/(x + 1) → 2",
    "Evaluate: lim(x→2) (x² - 4)/(x - 2) → factor first → 4",
    "Evaluate: lim(x→4) √(x + 5) → 3",
    "Evaluate: lim(x→8) ³√(x + 19) → 3",
    "Evaluate: lim(x→0) sin(x) → 0",
    "Evaluate: lim(x→π) cos(x) → −1",
    "Evaluate: lim(x→2) eˣ → e²",
    "Evaluate: lim(x→3) ln(x + 1) → ln(4)",
    "Evaluate: lim(x→5) (2x + 7) → 17",
    "Evaluate: lim(x→1) (x² - 1)/(x - 1) → factor first → 2",
    "Identify: 0/0 is indeterminate and requires more work",
    "Identify: nonzero/0 suggests infinite limit or vertical asymptote",
    "Use continuity: lim(x→a) f(x) = f(a) for continuous functions",
  ],
};

export default topic;