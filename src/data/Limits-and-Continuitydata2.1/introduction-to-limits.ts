const topic = {
  id: "introduction-to-limits",
  title: "Introduction to Limits",
  summary:
    "Definition of limits, limit notation, one-sided limits, limit laws, indeterminate forms, limits at infinity, and applications.",
  details: `
A limit describes the value that a function approaches as the input x gets closer and closer to a particular number.

Limits are one of the most important foundations of Calculus 1 because they are used to define continuity, derivatives, and integrals.

The basic notation is:

  lim(x→a) f(x) = L

This means: As x approaches a, the function f(x) approaches L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE IDEA OF A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x + 2

We want to find: lim(x→3) (x + 2)

As x gets closer to 3, f(x) gets closer to: 3 + 2 = 5

Therefore: lim(x→3) (x + 2) = 5

The important idea is that we're interested in what happens near x = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LIMIT DOES NOT NECESSARILY MEAN THE FUNCTION'S VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very important concept.

Consider: f(x) = (x² - 1)/(x - 1)

Factor the numerator: f(x) = (x - 1)(x + 1)/(x - 1)

For x ≠ 1: f(x) = x + 1

Now consider: lim(x→1) (x² - 1)/(x - 1)

Although the original function is undefined at x = 1, the function approaches: 1 + 1 = 2

Therefore: lim(x→1) (x² - 1)/(x - 1) = 2

So a limit can exist even when the function itself is undefined at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A left-hand limit looks at what happens as x approaches a value from the left.

It is written: lim(x→a⁻) f(x)

The symbol a⁻ means that x approaches a from values less than a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A right-hand limit looks at what happens as x approaches a from the right.

It is written: lim(x→a⁺) f(x)

The symbol a⁺ means that x approaches a from values greater than a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. TWO-SIDED LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The regular limit: lim(x→a) f(x) is called a two-sided limit.

It exists only if the left-hand and right-hand limits are equal:

  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

If they are different, the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE OF A LIMIT THAT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a jump function:

  f(x) = { 1, if x < 2; 3, if x > 2 }

As x approaches 2 from the left: lim(x→2⁻) f(x) = 1

From the right: lim(x→2⁺) f(x) = 3

Since 1 ≠ 3, we conclude: lim(x→2) f(x) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EVALUATING LIMITS BY DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For many simple functions, you can find the limit by simply substituting the value.

Example: lim(x→4) (x² + 3)

Substitute x = 4: 4² + 3 = 16 + 3 = 19

Therefore: 19

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE 0/0 INDETERMINATE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes direct substitution produces: 0/0

This does not mean that the limit is zero.

Instead, it means that additional algebraic work is needed.

Example: lim(x→2) (x² - 4)/(x - 2)

Substitute x = 2: (4 - 4)/(2 - 2) = 0/0

Factor: x² - 4 = (x - 2)(x + 2)

Therefore: (x² - 4)/(x - 2) = x + 2

Now evaluate: 2 + 2 = 4

Thus: lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several important rules for calculating limits.

Sum Rule:
  lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)

Difference Rule:
  lim(x→a) [f(x) - g(x)] = lim(x→a) f(x) - lim(x→a) g(x)

Product Rule:
  lim(x→a) [f(x)·g(x)] = [lim(x→a) f(x)]·[lim(x→a) g(x)]

Quotient Rule:
  lim(x→a) [f(x)/g(x)] = [lim(x→a) f(x)]/[lim(x→a) g(x)]
  provided that lim(x→a) g(x) ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits can also describe what happens when x becomes extremely large or extremely negative.

Example: lim(x→∞) 1/x = 0

As x gets larger and larger, 1/x gets closer and closer to zero.

Similarly: lim(x→-∞) 1/x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a function grows without bound as x approaches a certain value.

Example: f(x) = 1/x²

As x approaches 0: 1/x² → ∞

So: lim(x→0) 1/x² = ∞

This is associated with a vertical asymptote at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LIMITS AND CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits are directly connected to continuity.

A function f(x) is continuous at x = a when: lim(x→a) f(x) = f(a)

In other words:
  1. f(a) exists.
  2. lim(x→a) f(x) exists.
  3. The limit equals the function value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LIMITS AND DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits are also the foundation of the derivative.

The derivative is defined as:

  f'(x) = lim(h→0) [f(x + h) - f(x)]/h

This means that limits allow us to calculate the instantaneous rate of change or the slope of a curve at a particular point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT STANDARD LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some fundamental limits you'll encounter are:

  lim(x→0) sin(x)/x = 1

and:

  lim(x→0) (1 - cos(x))/x = 0

Another important exponential limit is:

  lim(x→0) (eˣ - 1)/x = 1

These become especially important when studying derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT LIMIT TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As you progress through Calculus, you will learn several methods for evaluating limits:

  • Direct substitution
  • Factoring
  • Canceling common factors
  • Rationalization
  • Finding a common denominator
  • Using limit laws
  • One-sided limits
  • Limits at infinity
  • Infinite limits
  • Squeeze Theorem
  • Trigonometric limits
  • Limits involving exponential functions
  • Limits involving logarithmic functions
  • L'Hôpital's Rule

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SQUEEZE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Squeeze Theorem states that if:

  g(x) ≤ f(x) ≤ h(x)

and:

  lim(x→a) g(x) = lim(x→a) h(x) = L

then:

  lim(x→a) f(x) = L

This is especially useful for evaluating limits that are difficult to compute directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Introduction to Limits, remember:

  • A limit describes what happens as x approaches a value, not necessarily at that value.
  • One-sided limits approach from the left (⁻) or right (⁺).
  • A two-sided limit exists only when the left and right limits are equal.
  • Direct substitution works for many functions.
  • 0/0 means more work is needed.
  • Limits at infinity describe behavior as x becomes very large.

The key idea to remember is:

  A limit describes the value that a function approaches as the input gets closer to a particular value. Limits are the foundation of Calculus because they are used to define continuity, derivatives, instantaneous rates of change, and eventually many concepts involving integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Introduction to Limits is the foundational concept that serves as the gateway to Calculus.

Key concepts covered:

  ✓ Definition of a Limit
  ✓ Limit Notation
  ✓ Left-Hand Limits
  ✓ Right-Hand Limits
  ✓ Two-Sided Limits
  ✓ Direct Substitution
  ✓ Indeterminate Forms (0/0)
  ✓ Limit Laws
  ✓ Limits at Infinity
  ✓ Infinite Limits
  ✓ Limits and Continuity
  ✓ Limits and Derivatives
  ✓ Standard Limits
  ✓ Squeeze Theorem
  `,
  examples: [
    "Evaluate: lim(x→3) (x + 2) = 5",
    "Evaluate: lim(x→1) (x² - 1)/(x - 1) = 2",
    "Evaluate: lim(x→4) (x² + 3) = 19",
    "Evaluate: lim(x→2) (x² - 4)/(x - 2) = 4",
    "Evaluate: lim(x→∞) 1/x = 0",
    "Evaluate: lim(x→0) 1/x² = ∞",
    "Find left-hand limit: lim(x→2⁻) f(x) = 1",
    "Find right-hand limit: lim(x→2⁺) f(x) = 3",
    "Determine if limit exists: lim(x→2) f(x) with left≠right → does not exist",
    "Use limit laws: lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)",
    "Use standard limit: lim(x→0) sin(x)/x = 1",
    "Use standard limit: lim(x→0) (eˣ - 1)/x = 1",
    "Continuity condition: lim(x→a) f(x) = f(a)",
    "Derivative definition: f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
    "Use Squeeze Theorem when g(x) ≤ f(x) ≤ h(x)",
    "Evaluate: lim(x→0) (1 - cos(x))/x = 0",
  ],
};

export default topic;