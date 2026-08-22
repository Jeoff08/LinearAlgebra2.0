const topic = {
  id: "squeeze-theorem",
  title: "Squeeze Theorem",
  summary:
    "Definition of the Squeeze Theorem, bounded functions, trigonometric inequalities, the famous sin(x)/x limit, and oscillating functions.",
  details: `
The Squeeze Theorem is a method for finding a limit when a function is difficult to evaluate directly, but we can place it between two simpler functions whose limits are known and equal.

The main idea is: If a function is squeezed between two functions that approach the same value, then the squeezed function must approach that same value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have three functions: g(x) ≤ f(x) ≤ h(x)

If lim(x→a) g(x) = L and lim(x→a) h(x) = L, then lim(x→a) f(x) = L.

This is called the Squeeze Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The theorem can be written as:

  g(x) ≤ f(x) ≤ h(x)

and:

  lim(x→a) g(x) = lim(x→a) h(x) = L

Therefore: lim(x→a) f(x) = L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS IT CALLED THE SQUEEZE THEOREM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The function f(x) is trapped between g(x) and h(x).

As x approaches a, both outside functions approach the same value.

Therefore, f(x) has nowhere else to go—it is squeezed toward that value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SIMPLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: -1 ≤ sin(x) ≤ 1

This is always true.

Now multiply everything by x²:

  -x² ≤ x²·sin(x) ≤ x²

We want to find: lim(x→0) x²·sin(x)

Now examine the two outside functions:

  lim(x→0) (-x²) = 0 and lim(x→0) x² = 0

Since -x² ≤ x²·sin(x) ≤ x² and both outside limits are 0, the Squeeze Theorem gives:

  lim(x→0) x²·sin(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. IMPORTANT TRIGONOMETRIC INEQUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful inequalities for the Squeeze Theorem is:

  -1 ≤ sin(x) ≤ 1

and:

  -1 ≤ cos(x) ≤ 1

These inequalities are extremely useful because sine and cosine are always bounded between -1 and 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WITH x·sin(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x·sin(x)

Since: -1 ≤ sin(x) ≤ 1

Using absolute values: |sin(x)| ≤ 1

Therefore: |x·sin(x)| ≤ |x|

Since: lim(x→0) |x| = 0

we have: 0 ≤ |x·sin(x)| ≤ |x|

By the Squeeze Theorem: |x·sin(x)| → 0

Therefore: lim(x→0) x·sin(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH x²·cos(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x²·cos(x)

Since: -1 ≤ cos(x) ≤ 1

multiply by x², which is always nonnegative:

  -x² ≤ x²·cos(x) ≤ x²

Now: lim(x→0) (-x²) = 0 and lim(x→0) x² = 0

Therefore: lim(x→0) x²·cos(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH x³·sin(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x³·sin(x)

Because: |sin(x)| ≤ 1

we have: |x³·sin(x)| ≤ |x|³

As x → 0, |x|³ → 0

Therefore: lim(x→0) x³·sin(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE FAMOUS SQUEEZE THEOREM LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications is:

  lim(x→0) sin(x)/x = 1

This result is fundamental in Calculus 1.

It can be proven using the Squeeze Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GEOMETRIC SQUEEZE FOR sin(x)/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For 0 < x < π/2, we can establish: sin(x) < x < tan(x)

Divide by x: sin(x)/x < 1 < tan(x)/x

Since tan(x) = sin(x)/cos(x), we get: sin(x)/x < 1 < sin(x)/(x·cos(x))

Multiplying appropriately gives: cos(x) < sin(x)/x < 1

As x → 0, cos(x) → 1 and 1 → 1

Therefore, by the Squeeze Theorem: lim(x→0) sin(x)/x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY THIS LIMIT IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit: lim(x→0) sin(x)/x = 1

is used extensively when finding derivatives of trigonometric functions.

For example, it is one of the key steps in proving:

  d/dx[sin(x)] = cos(x)

and:

  d/dx[cos(x)] = -sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE USING THE FAMOUS LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(3x)/x

We know: lim(u→0) sin(u)/u = 1

Rewrite: sin(3x)/x = 3 · sin(3x)/(3x)

Therefore: 3 · lim(x→0) sin(3x)/(3x)

Since sin(3x)/(3x) → 1, we get: 3(1) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH 5x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(5x)/x

Rewrite: sin(5x)/x = 5 · sin(5x)/(5x)

Therefore: 5(1) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH A NEGATIVE COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(-2x)/x

Since: sin(-2x) = -sin(2x)

we have: sin(-2x)/x = -2 · sin(2x)/(2x)

Therefore: -2(1) = -2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SQUEEZE THEOREM WITH ABSOLUTE VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute values are very useful when the expression changes sign.

Suppose: |f(x)| ≤ g(x) and lim(x→a) g(x) = 0

Then: lim(x→a) f(x) = 0

This is sometimes called the absolute value form of the Squeeze Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH OSCILLATING FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x²·sin(1/x)

Direct substitution isn't possible because 1/x is undefined at x = 0.

However, sine is bounded: -1 ≤ sin(1/x) ≤ 1

Therefore: |x²·sin(1/x)| ≤ x²

As x → 0, x² → 0

Therefore: lim(x→0) x²·sin(1/x) = 0

This is a very important example because sin(1/x) oscillates infinitely rapidly near 0, but the x² factor forces the entire expression toward 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x·cos(1/x)

Since: |cos(1/x)| ≤ 1

we get: |x·cos(1/x)| ≤ |x|

As x → 0, |x| → 0

Therefore: lim(x→0) x·cos(1/x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SQUEEZE THEOREM AND OSCILLATING FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most powerful applications.

Consider: sin(1/x)

As x → 0, the function oscillates between -1 and 1.

It does not have a limit by itself.

But consider: x·sin(1/x)

The x forces the function toward 0:

  -|x| ≤ x·sin(1/x) ≤ |x|

Both outside functions approach 0.

Therefore: lim(x→0) x·sin(1/x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHEN SHOULD YOU USE THE SQUEEZE THEOREM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Squeeze Theorem is especially useful when:
  • Direct substitution is difficult or impossible.
  • The function contains sin(x) or cos(x).
  • The function contains an oscillating term such as sin(1/x).
  • The function is bounded by simpler functions.
  • You can show that both bounds approach the same value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. STEPS FOR USING THE SQUEEZE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Identify the difficult function.
  Example: x²·sin(1/x)

Step 2: Find bounds.
  Use: -1 ≤ sin(1/x) ≤ 1

Step 3: Multiply carefully.
  Obtain: -x² ≤ x²·sin(1/x) ≤ x²

Step 4: Evaluate the outside limits.
  lim(x→0) (-x²) = 0 and lim(x→0) x² = 0

Step 5: Apply the theorem.
  Since both bounds approach 0: lim(x→0) x²·sin(1/x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the inequality direction
  When multiplying an inequality by a negative quantity, the inequality signs reverse.
  Using absolute values can often make the reasoning easier.

Mistake 2: Assuming bounded means the limit exists
  The fact that -1 ≤ f(x) ≤ 1 does not mean f(x) has a limit.
  Example: sin(1/x) is bounded but does not have a limit as x → 0.
  You need the upper and lower bounds to approach the same value.

Mistake 3: Bounds must have the same limit
  Suppose g(x) ≤ f(x) ≤ h(x) but lim g(x) = 0 and lim h(x) = 1.
  You cannot conclude the limit of f(x). The two bounds must approach the same number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  lim(x→0) x⁴·cos(x)
  Since |cos(x)| ≤ 1, then |x⁴·cos(x)| ≤ x⁴
  Since x⁴ → 0, the answer is: 0

Example 2:
  lim(x→0) x³·sin(1/x)
  Since |sin(1/x)| ≤ 1, then |x³·sin(1/x)| ≤ |x|³
  Therefore: 0

Example 3:
  lim(x→0) sin(4x)/x
  Rewrite: 4 · sin(4x)/(4x)
  Using lim(u→0) sin(u)/u = 1, we get: 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Squeeze Theorem, remember:

  • The Squeeze Theorem says: g(x) ≤ f(x) ≤ h(x) and if both outside limits equal L, then the middle limit equals L.
  • Bounded functions like sin(x) and cos(x) are often used.
  • The famous limit: lim(x→0) sin(x)/x = 1.
  • Oscillating functions like sin(1/x) can be squeezed to 0 when multiplied by a term that goes to 0.

The key idea to remember is:

  The Squeeze Theorem says: g(x) ≤ f(x) ≤ h(x) and if lim(x→a) g(x) = lim(x→a) h(x) = L, then lim(x→a) f(x) = L. The most important applications in Calculus 1 involve bounded trigonometric functions: -1 ≤ sin(x) ≤ 1 and -1 ≤ cos(x) ≤ 1, and the famous result: lim(x→0) sin(x)/x = 1. A good way to remember it is: Trap the difficult function between two easier functions. If both sides are forced toward the same value, the middle function must go there too.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Squeeze Theorem is an essential tool for evaluating limits that are difficult to compute directly.

Key concepts covered:

  ✓ Basic Idea
  ✓ The Main Formula
  ✓ Bounded Functions
  ✓ x·sin(x) Example
  ✓ x²·cos(x) Example
  ✓ x³·sin(x) Example
  ✓ The Famous sin(x)/x Limit
  ✓ Geometric Squeeze
  ✓ Using the Famous Limit
  ✓ Absolute Value Form
  ✓ Oscillating Functions
  ✓ When to Use the Squeeze Theorem
  ✓ Step-by-Step Process
  ✓ Common Mistakes
  `,
  examples: [
    "Evaluate: lim(x→0) x²·sin(x) → 0",
    "Evaluate: lim(x→0) x·sin(x) → 0",
    "Evaluate: lim(x→0) x²·cos(x) → 0",
    "Evaluate: lim(x→0) x³·sin(x) → 0",
    "Evaluate: lim(x→0) sin(x)/x → 1",
    "Evaluate: lim(x→0) sin(3x)/x → 3",
    "Evaluate: lim(x→0) sin(5x)/x → 5",
    "Evaluate: lim(x→0) sin(-2x)/x → -2",
    "Evaluate: lim(x→0) x²·sin(1/x) → 0",
    "Evaluate: lim(x→0) x·cos(1/x) → 0",
    "Evaluate: lim(x→0) x·sin(1/x) → 0",
    "Evaluate: lim(x→0) x⁴·cos(x) → 0",
    "Evaluate: lim(x→0) x³·sin(1/x) → 0",
    "Evaluate: lim(x→0) sin(4x)/x → 4",
    "Use: -1 ≤ sin(x) ≤ 1 for bounds",
    "Use: -1 ≤ cos(x) ≤ 1 for bounds",
    "Use: |sin(1/x)| ≤ 1 for oscillating functions",
    "Use absolute value form: |f(x)| ≤ g(x) and g(x) → 0",
  ],
};

export default topic;