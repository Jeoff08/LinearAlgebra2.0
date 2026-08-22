const topic = {
  id: "rationalizing-expressions",
  title: "Rationalizing Expressions",
  summary:
    "Definition of rationalization, conjugates, difference of squares, rationalizing numerators and denominators, and evaluating limits with radicals.",
  details: `
Rationalizing expressions is an algebraic technique used to simplify expressions containing radicals, especially square roots.

In Calculus 1, rationalization is particularly useful when evaluating limits that produce the indeterminate form 0/0.

The main idea is to multiply an expression by its conjugate so that the radical can be eliminated or simplified.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES RATIONALIZING MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: 1/√x

A rationalized form removes the radical from the denominator:

  1/√x · √x/√x = √x/x

The denominator is now rational.

In limits, however, rationalization is often used to eliminate radicals in the numerator or denominator so that we can simplify the expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS RATIONALIZATION IMPORTANT IN LIMITS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) (√(x+1) - 1)/x

Try direct substitution: (√(0+1) - 1)/0 = (1 - 1)/0 = 0/0

This is an indeterminate form.

We can solve it using rationalization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE CONJUGATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The conjugate of a + b is: a - b

The conjugate of a - b is: a + b

Examples:
  • √x + 3 has conjugate: √x - 3
  • √x - 5 has conjugate: √x + 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES THE CONJUGATE WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key identity is the difference of squares:

  (a - b)(a + b) = a² - b²

Example: (√x - 1)(√x + 1)

Using the difference of squares: (√x)² - 1² = x - 1

The radical disappears.

This is the main reason rationalization is useful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIC RATIONALIZATION PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have: (√x - 1)/x

Multiply by the conjugate: (√x - 1)/x · (√x + 1)/(√x + 1)

Multiply the numerator: (√x - 1)(√x + 1)

Using the difference of squares: x - 1

Therefore: (x - 1)/(x(√x + 1))

The radical expression has been transformed into a simpler algebraic form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. RATIONALIZING A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's solve the earlier example:

lim(x→0) (√(x+1) - 1)/x

Step 1: Try direct substitution → 0/0

So we need another method.

Step 2: Multiply by the conjugate

The conjugate of √(x+1) - 1 is: √(x+1) + 1

Therefore: (√(x+1) - 1)/x · (√(x+1) + 1)/(√(x+1) + 1)

Step 3: Multiply the numerator

  (√(x+1) - 1)(√(x+1) + 1)

Using (a - b)(a + b) = a² - b²:

  (x+1) - 1 = x

Therefore: x/(x(√(x+1) + 1))

Step 4: Cancel x: 1/(√(x+1) + 1)

Step 5: Substitute x = 0: 1/(√1 + 1) = 1/2

Therefore: lim(x→0) (√(x+1) - 1)/x = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→4) (√x - 2)/(x - 4)

Step 1: Direct substitution: (2 - 2)/(4 - 4) = 0/0

So we rationalize.

Step 2: Multiply by the conjugate

The conjugate of √x - 2 is: √x + 2

Therefore: (√x - 2)/(x - 4) · (√x + 2)/(√x + 2)

Step 3: The numerator becomes: (√x - 2)(√x + 2) = x - 4

Therefore: (x - 4)/((x - 4)(√x + 2))

Step 4: Cancel: 1/(√x + 2)

Step 5: Substitute: 1/(√4 + 2) = 1/4

Therefore: 1/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONALIZING A DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rationalization can also be used to remove radicals from denominators.

Consider: 3/√5

Multiply by: √5/√5

Then: 3√5/5

The denominator no longer contains a radical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. RATIONALIZING A DENOMINATOR WITH A BINOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: 1/(√x + 2)

The conjugate is: √x - 2

Multiply: 1/(√x + 2) · (√x - 2)/(√x - 2)

The numerator becomes: √x - 2

The denominator becomes: (√x + 2)(√x - 2) = x - 4

Therefore: (√x - 2)/(x - 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RATIONALIZING THE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In Calculus, this is especially common.

For example: (√x - a)/(x - a²)

Multiply by: (√x + a)/(√x + a)

Then: (√x - a)(√x + a) = x - a²

So: (x - a²)/((x - a²)(√x + a))

Cancel: 1/(√x + a)

This pattern appears frequently in limit problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH A MORE COMPLICATED RADICAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→9) (√(x+7) - 4)/(x - 9)

Direct substitution: (4 - 4)/(9 - 9) = 0/0

Rationalize.

The conjugate is: √(x+7) + 4

Therefore: (√(x+7) - 4)/(x - 9) · (√(x+7) + 4)/(√(x+7) + 4)

The numerator becomes: (x+7) - 16 = x - 9

Therefore: (x - 9)/((x - 9)(√(x+7) + 4))

Cancel: 1/(√(x+7) + 4)

Substitute x = 9: 1/(√16 + 4) = 1/8

Therefore: 1/8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. RATIONALIZING WITH CUBE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rationalization is not limited to square roots.

For cube roots, we can use the identity:

  a³ - b³ = (a - b)(a² + ab + b²)

Example: ³√x - 2 can be paired with: (³√x)² + 2·³√x + 4

because: (³√x - 2)[(³√x)² + 2·³√x + 4] = x - 8

This can be useful in more advanced limit problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH CUBE ROOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→8) (³√x - 2)/(x - 8)

Direct substitution gives: (2 - 2)/(8 - 8) = 0/0

Use: a³ - b³ = (a - b)(a² + ab + b²)

Let a = ³√x and b = 2

Then: x - 8 = (³√x - 2)[(³√x)² + 2·³√x + 4]

Therefore: (³√x - 2)/(x - 8) = 1/[(³√x)² + 2·³√x + 4]

Now substitute: x = 8

  1/(4 + 4 + 4) = 1/12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. RATIONALIZATION VS. FACTORING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These techniques are closely related.

Factoring:
  Used when algebraic factors can be identified.
  Example: x² - 4 = (x - 2)(x + 2)

Rationalization:
  Used when radicals prevent direct simplification.
  Example: √x - 2 — multiply by the conjugate: √x + 2

Both techniques often lead to the same goal: Remove the indeterminate form and simplify the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHEN SHOULD YOU RATIONALIZE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rationalization is especially useful when:
  • The expression contains square roots.
  • Direct substitution gives 0/0.
  • A radical appears in the numerator.
  • A radical appears in the denominator.
  • Factoring alone cannot eliminate the indeterminate form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Using the wrong conjugate
  The conjugate of √x - 3 is √x + 3, not -√x + 3.

Mistake 2: Forgetting to multiply the entire expression
  You must multiply both numerator and denominator:
    (√x - 2)/x · (√x + 2)/(√x + 2)
  not just the numerator.

Mistake 3: Expanding unnecessarily
  Instead of expanding (√x - 2)(√x + 2),
  use (a - b)(a + b) = a² - b².
  So: (√x)² - 2² = x - 4

Mistake 4: Forgetting to cancel
  After rationalizing, look for a common factor.
  Example: (x - 4)(√x + 2)/(x - 4) → Cancel to get √x + 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. GENERAL RATIONALIZATION PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common Calculus 1 pattern is:

  lim(x→a) (√x - √a)/(x - a)

Direct substitution produces: 0/0

Multiply by the conjugate: (√x + √a)/(√x + √a)

Then: (√x - √a)(√x + √a) = x - a

So: (x - a)/((x - a)(√x + √a))

Cancel: 1/(√x + √a)

Now substitute: x = a, giving: 1/(2√a), provided a > 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a limit containing radicals:

Step 1: Try direct substitution.

Step 2: If you get 0/0, look for a radical expression.

Step 3: Identify its conjugate.
  For √x - a, use √x + a.

Step 4: Multiply by: conjugate/conjugate.

Step 5: Use (a - b)(a + b) = a² - b².

Step 6: Cancel common factors.

Step 7: Substitute again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK PRACTICE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  lim(x→0) (√(x+4) - 2)/x
  Rationalize: (√(x+4) - 2)/x · (√(x+4) + 2)/(√(x+4) + 2)
  Simplify: x/(x(√(x+4) + 2))
  Cancel: 1/(√(x+4) + 2)
  Substitute: 1/(2 + 2) = 1/4

Example 2:
  lim(x→16) (√x - 4)/(x - 16)
  Rationalize: (√x - 4)/(x - 16) · (√x + 4)/(√x + 4)
  Simplify: (x - 16)/((x - 16)(√x + 4))
  Cancel: 1/(√x + 4)
  Substitute: 1/(4 + 4) = 1/8

Example 3:
  lim(x→1) (√(2x+3) - √5)/(x - 1)
  Multiply by: (√(2x+3) + √5)/(√(2x+3) + √5)
  The numerator becomes: (2x+3) - 5 = 2x - 2 = 2(x - 1)
  Cancel (x - 1): 2/(√(2x+3) + √5)
  Substitute x = 1: 2/(√5 + √5) = 2/(2√5) = 1/√5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Rationalizing Expressions, remember:

  • Rationalization eliminates or simplifies radicals.
  • The conjugate is used: (a - b)(a + b) = a² - b².
  • Rationalization is especially useful for 0/0 limits with radicals.
  • The process: Direct Substitution → 0/0 → Multiply by Conjugate → Simplify → Cancel → Substitute Again.

The key idea to remember is:

  Rationalizing expressions is a technique for eliminating or simplifying radicals, especially when a limit produces 0/0. The most important idea is the conjugate: (a - b)(a + b) = a² - b². For example: (√x - a)/(x - a²) · (√x + a)/(√x + a) = 1/(√x + a). So the general process is: Direct Substitution → 0/0 → Multiply by Conjugate → Simplify → Cancel → Substitute Again. This technique is one of the most important tools for solving Calculus 1 limits involving radicals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rationalizing Expressions is an essential algebraic technique for evaluating limits involving radicals.

Key concepts covered:

  ✓ What Does Rationalizing Mean?
  ✓ Why Rationalization Is Important in Limits
  ✓ The Conjugate
  ✓ Difference of Squares
  ✓ Basic Rationalization Process
  ✓ Rationalizing a Limit
  ✓ Rationalizing a Denominator
  ✓ Rationalizing a Denominator with a Binomial
  ✓ Rationalizing the Numerator
  ✓ Cube Roots
  ✓ Rationalization vs. Factoring
  ✓ When to Rationalize
  ✓ Common Mistakes
  ✓ General Pattern
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "Evaluate: lim(x→0) (√(x+1) - 1)/x → 1/2",
    "Evaluate: lim(x→4) (√x - 2)/(x - 4) → 1/4",
    "Evaluate: lim(x→9) (√(x+7) - 4)/(x - 9) → 1/8",
    "Evaluate: lim(x→8) (³√x - 2)/(x - 8) → 1/12",
    "Evaluate: lim(x→0) (√(x+4) - 2)/x → 1/4",
    "Evaluate: lim(x→16) (√x - 4)/(x - 16) → 1/8",
    "Evaluate: lim(x→1) (√(2x+3) - √5)/(x - 1) → 1/√5",
    "Rationalize: 1/√x → √x/x",
    "Rationalize: 1/(√x + 2) → (√x - 2)/(x - 4)",
    "Identify conjugate of √x - 3 → √x + 3",
    "Use difference of squares: (√x - 1)(√x + 1) = x - 1",
    "Use difference of squares: (a - b)(a + b) = a² - b²",
    "General pattern: lim(x→a) (√x - √a)/(x - a) = 1/(2√a)",
    "Cancel after rationalizing: (x - a)/((x - a)(√x + √a)) = 1/(√x + √a)",
  ],
};

export default topic;