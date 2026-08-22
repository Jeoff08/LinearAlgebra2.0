// filename: indeterminate-forms.ts

const topic = {
  id: "indeterminate-forms",
  title: "Indeterminate Forms",
  summary:
    "Expressions in calculus that occur when evaluating a limit produces a value that cannot be determined from its appearance alone, including 0/0, ∞/∞, 0·∞, ∞−∞, 0^0, 1^∞, and ∞^0.",
  details: `
Indeterminate Forms occur in calculus when evaluating a limit produces an expression whose value cannot be determined from its appearance alone.

They are especially important when working with limits involving:
  • fractions
  • radicals
  • exponentials
  • logarithms
  • trigonometric functions
  • functions approaching 0, ∞, or other extreme values

The most common indeterminate form is:
  0/0

But there are several others.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "INDETERMINATE" MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate:
  lim(x→a) f(x)

After substituting x = a, we might get:
  0/0

It is tempting to say:
  0/0 = 0

but that is incorrect.

The expression:
  0/0

does not tell us what the limit is.

The actual limit could be:
  0, 1, 5, ∞, -∞

or even fail to exist.

Therefore:
  0/0 is indeterminate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SEVEN COMMON INDETERMINATE FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are seven standard indeterminate forms:

  1. 0/0
  2. ∞/∞
  3. 0 · ∞
  4. ∞ − ∞
  5. 0^0
  6. 1^∞
  7. ∞^0

These forms do not represent actual answers.

They indicate that more work is required to determine the limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INDETERMINATE FORM 0/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is probably the most common form in Calculus 1.

Consider:
  lim(x→2) (x² - 4)/(x - 2)

Direct substitution gives:
  (2² - 4)/(2 - 2) = 0/0

This is indeterminate.

We need to simplify the expression.

Factor the numerator:
  x² - 4 = (x - 2)(x + 2)

Therefore:
  (x² - 4)/(x - 2) = ((x - 2)(x + 2))/(x - 2)

Cancel:
  = x + 2

Now evaluate:
  lim(x→2) (x + 2) = 4

Therefore:
  lim(x→2) (x² - 4)/(x - 2) = 4

Notice:
  0/0 ≠ 4

Instead, 0/0 told us that simplification was necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY 0/0 IS INDETERMINATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0) x/x

For x ≠ 0:
  x/x = 1

so:
  lim(x→0) x/x = 1

Now consider:
  lim(x→0) x²/x

For x ≠ 0:
  x²/x = x

so:
  lim(x→0) x²/x = 0

Both expressions produce 0/0 when directly substituted, but their limits are different.

Therefore:
  0/0 does not determine the limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INDETERMINATE FORM ∞/∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) x²/(x² + x)

As x → ∞:
  x² → ∞
and:
  x² + x → ∞

Therefore, the form is:
  ∞/∞

This does not mean the answer is 1 automatically.

Divide the numerator and denominator by x²:
  x²/(x² + x) = 1/(1 + 1/x)

As x → ∞, we know:
  1/x → 0

Therefore:
  lim(x→∞) x²/(x² + x) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INDETERMINATE FORM 0 · ∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0⁺) x ln(x)

As x → 0⁺, we have:
  x → 0
while:
  ln(x) → -∞

So the expression has the form:
  0 · (-∞)

which is an indeterminate form.

To handle it, rewrite the product as a quotient:
  x ln(x) = ln(x)/(1/x)

Now:
  ln(x) → -∞
and:
  1/x → ∞

giving:
  -∞/∞

Now methods such as L'Hôpital's Rule can be used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INDETERMINATE FORM ∞ − ∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) (√(x² + x) - x)

As x → ∞, both terms approach infinity:
  √(x² + x) → ∞
and:
  x → ∞

So we get:
  ∞ − ∞

This is indeterminate.

Rationalize the expression:
  √(x² + x) - x

Multiply by the conjugate:
  (√(x² + x) - x) · (√(x² + x) + x)/(√(x² + x) + x)

The numerator becomes:
  (x² + x) - x² = x

so:
  x/(√(x² + x) + x)

Divide by x:
  1/(√(1 + 1/x) + 1)

As x → ∞, we get:
  1/(1 + 1) = 1/2

So:
  lim(x→∞) (√(x² + x) - x) = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INDETERMINATE FORM 0^0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0⁺) x^x

As x → 0⁺, the base approaches 0 and the exponent approaches 0.

Therefore:
  x^x → 0^0

This is indeterminate.

To solve this type, logarithms are usually useful.

Let:
  y = x^x

Take natural logarithms:
  ln(y) = x ln(x)

We can rewrite:
  x ln(x) = ln(x)/(1/x)

Then evaluate the resulting limit.

The final result is:
  lim(x→0⁺) x^x = 1

Notice again: 0^0 did not mean the answer was 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INDETERMINATE FORM 1^∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) (1 + 1/x)^x

As x → ∞, the base approaches 1 and the exponent approaches ∞.

So we have:
  1^∞

This is indeterminate.

In fact, the limit is the famous number e.

Thus:
  lim(x→∞) (1 + 1/x)^x = e

This is one of the most important examples of 1^∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INDETERMINATE FORM ∞^0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider an expression such as:
  f(x)^(g(x))

where:
  f(x) → ∞
and:
  g(x) → 0

Then the form is:
  ∞^0

This is indeterminate.

The standard technique is to take logarithms.

Let:
  y = f(x)^(g(x))

Then:
  ln(y) = g(x) ln(f(x))

This transforms the exponent problem into a product or quotient problem that can be evaluated using standard limit techniques.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SUMMARY OF THE SEVEN FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Indeterminate Form    Example
  ─────────────────────────────────────────────────────────
  0/0                   (x² - 1)/(x - 1) as x → 1
  ∞/∞                   x²/(x² + x) as x → ∞
  0 · ∞                 x ln(x) as x → 0⁺
  ∞ − ∞                 √(x² + x) - x
  0^0                   x^x as x → 0⁺
  1^∞                   (1 + 1/x)^x
  ∞^0                   x^(1/ln(x)) in an appropriate limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INDETERMINATE VS. UNDEFINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important distinction.

Undefined:
  An expression may simply be undefined at a particular point.
  For example:
    1/0 is undefined.
  It does not mean that the limit is necessarily impossible.

Indeterminate:
  An expression such as 0/0 is called indeterminate because the form alone does not tell us the limit.

Therefore:
  Undefined ≠ Indeterminate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON WAYS TO RESOLVE INDETERMINATE FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different forms call for different techniques.

0/0:
  Try:
    • factoring
    • canceling
    • rationalizing
    • combining fractions
    • trigonometric identities
    • substitution
    • L'Hôpital's Rule

∞/∞:
  Try:
    • dividing by the highest power
    • simplifying
    • L'Hôpital's Rule

0 · ∞:
  Rewrite as:
    • 0/(1/∞) or (1/0)/∞
  to obtain a quotient.

∞ − ∞:
  Try:
    • combining terms
    • common denominators
    • rationalization
    • algebraic manipulation

0^0, 1^∞, ∞^0:
  Use logarithms.
  Let:
    y = f(x)^(g(x))
  Then:
    ln(y) = g(x) ln(f(x))
  Evaluate the new limit, then exponentiate:
    y = e^(lim ln(y))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most powerful tools for indeterminate forms is L'Hôpital's Rule.

If:
  lim(x→a) f(x)/g(x)

produces:
  0/0
or:
  ∞/∞

then, under the appropriate conditions:
  lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)

provided the latter limit exists or is infinite in the relevant sense.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE USING L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) sin(x)/x

Direct substitution:
  sin(0)/0 = 0/0

Indeterminate.

Differentiate numerator and denominator:
  d/dx (sin(x)) = cos(x)
  d/dx (x) = 1

Therefore:
  lim(x→0) sin(x)/x = lim(x→0) cos(x)/1 = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT: DON'T APPLY L'HÔPITAL AUTOMATICALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'Hôpital's Rule is specifically designed for:
  0/0
and:
  ∞/∞

It should not be applied directly to:
  • 0 · ∞
  • ∞ − ∞
  • 0^0
  • 1^∞
  • ∞^0

First transform those expressions into an appropriate quotient or another form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE: 0 · ∞ TO A QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→0⁺) x ln(x)

We have:
  0 · (-∞)

Rewrite:
  x ln(x) = ln(x)/(1/x)

Now the form becomes:
  -∞/∞

which is suitable for L'Hôpital's Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: 1^∞ USING LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  L = lim(x→∞) (1 + 1/x)^x

Let:
  y = (1 + 1/x)^x

Take logarithms:
  ln(y) = x ln(1 + 1/x)

Rewrite:
  ln(y) = ln(1 + 1/x)/(1/x)

Now let:
  u = 1/x

As x → ∞, we have:
  u → 0

Therefore:
  ln(y) = lim(u→0) ln(1 + u)/u

This limit equals 1.

Thus:
  ln(y) = 1

Exponentiate:
  y = e

Therefore:
  L = e

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A USEFUL STRATEGY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Form         First Strategy
  ───────────────────────────────────────────────────────────
  0/0          Algebraic simplification / L'Hôpital
  ∞/∞          Divide by dominant term / L'Hôpital
  0 · ∞        Rewrite as quotient
  ∞ − ∞        Combine/rationalize
  0^0          Take logarithms
  1^∞          Take logarithms
  ∞^0          Take logarithms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE MOST IMPORTANT IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an indeterminate form, do not stop.

For example:
  0/0 doesn't mean 0.
  It means: More analysis is required.

Likewise:
  ∞/∞ doesn't automatically equal 1.
  And:
  1^∞ doesn't automatically equal 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK PROBLEM-SOLVING FLOWCHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Substitute
    ↓
  Do you get a normal value?
    If yes: Done
    If no: ↓
  Do you get an indeterminate form?
    0/0, ∞/∞, 0·∞, ∞−∞, 0^0, 1^∞, ∞^0
    ↓
  Transform the expression
    Use:
      • factoring
      • cancellation
      • rationalization
      • common denominators
      • trigonometric identities
      • dominant terms
      • L'Hôpital's Rule
      • logarithms
    ↓
  Evaluate the new limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The seven indeterminate forms are:
  0/0, ∞/∞, 0·∞, ∞−∞, 0^0, 1^∞, ∞^0

They are called indeterminate because their appearance alone does not determine the value of the limit.

The main strategies are:

  0/0, ∞/∞     →  factor, simplify, rationalize, or L'Hôpital
  0·∞           →  rewrite as a quotient
  ∞−∞           →  combine or rationalize
  0^0, 1^∞, ∞^0 →  logarithms

Key takeaway:

  An indeterminate form is not the answer to a limit—it is a signal that 
  you need another technique to determine the answer.

This topic is especially important because it connects the Limits section of Calculus 1 to L'Hôpital's Rule, exponential/logarithmic limits, and more advanced limit techniques.
  `,
  examples: [
    "0/0: lim(x→2) (x² - 4)/(x - 2) → factor to get 4",
    "∞/∞: lim(x→∞) x²/(x² + x) → divide by x² to get 1",
    "0·∞: lim(x→0⁺) x ln(x) → rewrite as ln(x)/(1/x) → 0",
    "∞−∞: lim(x→∞) (√(x² + x) - x) → rationalize → 1/2",
    "0^0: lim(x→0⁺) x^x → use logarithms → 1",
    "1^∞: lim(x→∞) (1 + 1/x)^x → use logarithms → e",
    "∞^0: lim(x→∞) x^(1/x) → use logarithms → 1",
  ],
};

export default topic;