const topic = {
  id: "evaluating-limits-algebraically",
  title: "Evaluating Limits Algebraically",
  summary:
    "Direct substitution, factoring, rationalization, combining fractions, limit laws, and limits at infinity.",
  details: `
Evaluating limits algebraically means finding the exact value of a limit by using algebraic techniques rather than relying only on a table or graph.

The basic notation is:

  lim(x→a) f(x) = L

This means that as x approaches a, the function approaches L.

Algebraic methods are especially useful when direct substitution produces an indeterminate form, such as 0/0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first method you should always try is direct substitution.

Consider: lim(x→2) (x² + 3x - 1)

Substitute x = 2:

  (2)² + 3(2) - 1
  = 4 + 6 - 1
  = 9

Therefore: lim(x→2) (x² + 3x - 1) = 9

If direct substitution gives a normal number, you're usually finished.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE 0/0 INDETERMINATE FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes substitution produces: 0/0

This is called an indeterminate form.

It does not mean the answer is zero.

Instead, it tells us that we need another algebraic method.

Example: lim(x→2) (x² - 4)/(x - 2)

Substitute x = 2:

  (4 - 4)/(2 - 2) = 0/0

We need to simplify the expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FACTORING AND CANCELING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Factor the numerator:

  x² - 4 = (x - 2)(x + 2)

Therefore:

  (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2)

Cancel the common factor:

  = x + 2

Now evaluate: 2 + 2 = 4

Therefore: lim(x→2) (x² - 4)/(x - 2) = 4

Important: We are not saying that the original function is defined at x = 2. Instead, we are simplifying the expression for values near 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RATIONALIZING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another common algebraic technique is rationalization.

Consider: lim(x→0) (√(x+1) - 1)/x

Direct substitution gives: (1 - 1)/0 = 0/0

Multiply by the conjugate:

  (√(x+1) - 1)/x · (√(x+1) + 1)/(√(x+1) + 1)

Using (a - b)(a + b) = a² - b²:

  (x+1 - 1)/(x(√(x+1) + 1)) = x/(x(√(x+1) + 1))

Cancel x:

  = 1/(√(x+1) + 1)

Now substitute x = 0:

  1/(√1 + 1) = 1/2

Therefore: lim(x→0) (√(x+1) - 1)/x = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. COMBINING FRACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you need to combine fractions before evaluating the limit.

Example: lim(x→0) (1/x - 1/(x+1))

Find a common denominator:

  (x+1 - x)/(x(x+1)) = 1/(x(x+1))

Now the behavior can be analyzed more easily.

This technique is useful when multiple rational expressions are involved.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. USING LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Algebraic evaluation also uses the fundamental limit laws.

Sum Rule:
  lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)

Difference Rule:
  lim(x→a) [f(x) - g(x)] = lim(x→a) f(x) - lim(x→a) g(x)

Product Rule:
  lim(x→a) [f(x)·g(x)] = [lim(x→a) f(x)]·[lim(x→a) g(x)]

Quotient Rule:
  lim(x→a) [f(x)/g(x)] = [lim(x→a) f(x)]/[lim(x→a) g(x)]
  provided the denominator's limit is not zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. POLYNOMIAL LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polynomial functions are particularly easy to evaluate.

For: f(x) = 3x³ - 2x² + x - 5

consider: lim(x→2) f(x)

Direct substitution gives:

  3(2)³ - 2(2)² + 2 - 5
  = 24 - 8 + 2 - 5
  = 13

So: lim(x→2) (3x³ - 2x² + x - 5) = 13

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONAL FUNCTION LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions: f(x) = P(x)/Q(x)

you can usually substitute directly as long as Q(a) ≠ 0.

Example: lim(x→1) (x² + 3)/(x + 2)

Substitute: (1 + 3)/(1 + 2) = 4/3

Therefore: 4/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHEN THE DENOMINATOR BECOMES ZERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→3) (x² - 9)/(x - 3)

Substitution gives: 0/0

Factor:

  x² - 9 = (x - 3)(x + 3)

Then:

  (x² - 9)/(x - 3) = x + 3

Substitute: 3 + 3 = 6

Therefore: lim(x→3) (x² - 9)/(x - 3) = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TRIGONOMETRIC LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some limits require special trigonometric identities.

One of the most important is:

  lim(x→0) sin(x)/x = 1

Another important one is:

  lim(x→0) (1 - cos(x))/x = 0

These are especially important when studying derivatives of trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Algebraic methods can also be used to evaluate limits as x → ∞.

Example: lim(x→∞) (3x² + 1)/(x² + 5)

Divide the numerator and denominator by x²:

  (3 + 1/x²)/(1 + 5/x²)

As x → ∞: 1/x² → 0 and 5/x² → 0

Therefore: 3/1 = 3

Thus: lim(x→∞) (3x² + 1)/(x² + 5) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT ALGEBRAIC TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating a limit algebraically, choose the technique based on the expression.

Situation: Normal value after substitution
Technique: Direct substitution

Situation: 0/0 with polynomials
Technique: Factoring

Situation: Square roots produce 0/0
Technique: Rationalization

Situation: Multiple fractions
Technique: Common denominator

Situation: Polynomial expression
Technique: Direct substitution

Situation: Rational function
Technique: Substitute or simplify

Situation: Trigonometric expression
Technique: Trigonometric identities

Situation: x → ∞
Technique: Compare highest powers

Situation: Complicated indeterminate forms
Technique: Further algebraic manipulation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GENERAL PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving: lim(x→a) f(x)

follow this process:

Step 1: Try direct substitution
  Calculate: f(a)

Step 2: Check the result
  If you get a normal number: You're done
  If you get 0/0: then continue

Step 3: Simplify
  Try: Factoring, Canceling, Rationalizing, Combining fractions, Using identities

Step 4: Substitute again
  After simplifying, evaluate the limit again.

Step 5: Verify the result
  If needed, check the answer using a table or graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: COMPLETE ALGEBRAIC SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→1) (x³ - 1)/(x - 1)

Step 1: Substitute
  (1 - 1)/(1 - 1) = 0/0 → Indeterminate

Step 2: Factor
  Use the difference of cubes: x³ - 1 = (x - 1)(x² + x + 1)

  Therefore: (x³ - 1)/(x - 1) = (x - 1)(x² + x + 1)/(x - 1)

  Cancel: x² + x + 1

Step 3: Substitute
  1² + 1 + 1 = 3

Therefore: lim(x→1) (x³ - 1)/(x - 1) = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Evaluating Limits Algebraically, you should understand:

  • Direct substitution
  • Limit laws
  • Polynomial limits
  • Rational function limits
  • Indeterminate forms
  • The 0/0 form
  • Factoring
  • Canceling common factors
  • Difference of squares
  • Difference of cubes
  • Sum of cubes
  • Rationalization
  • Conjugates
  • Combining fractions
  • Simplifying complex expressions
  • Trigonometric identities
  • Fundamental trigonometric limits
  • Limits at infinity
  • Comparing highest powers
  • Horizontal asymptotes
  • Infinite limits
  • Continuity
  • Algebraic verification of limits
  • Connection between limits and derivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Evaluating Limits Algebraically, remember:

  • Always try direct substitution first.
  • 0/0 means more work is needed.
  • Factoring and canceling is a common technique.
  • Rationalization helps with square roots.
  • Combining fractions helps with complex rational expressions.
  • Limit laws allow you to break limits apart.
  • At infinity, compare the highest powers.

The key idea to remember is:

  Evaluating limits algebraically means using mathematical rules and algebraic manipulation to determine the exact value a function approaches. The most important strategy is to try direct substitution first; if it produces an indeterminate form such as 0/0, simplify the expression using factoring, rationalization, identities, or other algebraic techniques before evaluating the limit again.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluating Limits Algebraically is an essential skill for finding exact limit values and serves as a foundation for more advanced calculus concepts.

Key concepts covered:

  ✓ Direct Substitution
  ✓ The 0/0 Indeterminate Form
  ✓ Factoring and Canceling
  ✓ Rationalization
  ✓ Combining Fractions
  ✓ Limit Laws
  ✓ Polynomial Limits
  ✓ Rational Function Limits
  ✓ Trigonometric Limits
  ✓ Limits at Infinity
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "Evaluate: lim(x→2) (x² + 3x - 1) → 9",
    "Evaluate: lim(x→2) (x² - 4)/(x - 2) → 4",
    "Evaluate: lim(x→0) (√(x+1) - 1)/x → 1/2",
    "Evaluate: lim(x→1) (x² + 3)/(x + 2) → 4/3",
    "Evaluate: lim(x→3) (x² - 9)/(x - 3) → 6",
    "Evaluate: lim(x→∞) (3x² + 1)/(x² + 5) → 3",
    "Evaluate: lim(x→1) (x³ - 1)/(x - 1) → 3",
    "Use limit law: lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)",
    "Use trigonometric limit: lim(x→0) sin(x)/x = 1",
    "Use trigonometric limit: lim(x→0) (1 - cos(x))/x = 0",
    "Factor difference of squares: x² - 4 = (x - 2)(x + 2)",
    "Factor difference of cubes: x³ - 1 = (x - 1)(x² + x + 1)",
    "Rationalize: multiply by conjugate to simplify",
    "Combine fractions: find common denominator",
    "Compare highest powers for limits at infinity",
  ],
};

export default topic;