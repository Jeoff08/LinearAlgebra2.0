// filename: lhopitals-rule.ts

const topic = {
  id: "lhopitals-rule",
  title: "L'Hôpital's Rule",
  summary:
    "A powerful technique in calculus for evaluating limits that result in indeterminate forms (0/0 or ∞/∞) by taking derivatives of the numerator and denominator separately.",
  details: `
L'Hôpital's Rule is a powerful technique in calculus used to evaluate certain indeterminate limits, especially limits that produce:
  0/0
or:
  ∞/∞

It allows us to differentiate the numerator and denominator separately and then evaluate the resulting limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  lim(x→a) f(x)/g(x)

and direct substitution gives either:
  0/0
or:
  ∞/∞

Then, under the conditions of the theorem:
  lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)

The key rule is:
  Differentiate the numerator and denominator separately.

It is not the quotient rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHEN CAN YOU USE L'HÔPITAL'S RULE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You generally need to check that direct substitution produces one of the two forms:

Form 1: 0/0
  For example:
    lim(x→0) sin(x)/x
  Substitute x = 0:
    sin(0)/0 = 0/0
  This is indeterminate, so L'Hôpital's Rule can be considered.

Form 2: ∞/∞
  For example:
    lim(x→∞) x/eˣ
  As x → ∞:
    x → ∞
  and:
    eˣ → ∞
  Therefore:
    ∞/∞
  L'Hôpital's Rule can be applied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x)/g(x)

has the form 0/0 or ∞/∞, then:
  lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)

provided the required conditions are satisfied.

Notice that we differentiate:
  f(x) → f'(x)
and:
  g(x) → g'(x)

separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: 0/0 FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) sin(x)/x

Step 1: Substitute
  sin(0)/0 = 0/0

This is an indeterminate form.

Step 2: Differentiate numerator and denominator
  Numerator:
    d/dx (sin(x)) = cos(x)
  Denominator:
    d/dx (x) = 1

Therefore:
  lim(x→0) cos(x)/1

Step 3: Substitute again
  cos(0)/1 = 1

Therefore:
  lim(x→0) sin(x)/x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: POLYNOMIAL 0/0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→2) (x² - 4)/(x - 2)

Step 1: Substitute
  (2² - 4)/(2 - 2) = 0/0

Apply L'Hôpital's Rule.

Step 2: Differentiate
  d/dx (x² - 4) = 2x
and:
  d/dx (x - 2) = 1

So:
  lim(x→2) 2x/1

Step 3: Substitute
  2(2) = 4

Therefore:
  4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: ∞/∞ FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) x²/eˣ

Step 1: Determine the form
  As x → ∞, we have:
    x² → ∞
  and:
    eˣ → ∞
  Therefore:
    ∞/∞

Step 2: Apply L'Hôpital's Rule
  Differentiate:
    d/dx (x²) = 2x
  and:
    d/dx (eˣ) = eˣ

Therefore:
  lim(x→∞) 2x/eˣ

This is still ∞/∞, so we can apply L'Hôpital's Rule again.

Step 3: Apply again
  d/dx (2x) = 2
  and:
    d/dx (eˣ) = eˣ

Therefore:
  lim(x→∞) 2/eˣ

Since eˣ → ∞, we get:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. YOU CAN APPLY IT MORE THAN ONCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important things to understand is that you can repeatedly apply L'Hôpital's Rule if the resulting expression is still 0/0 or ∞/∞.

For example:
  lim(x→∞) x³/eˣ

First application:
  x³/eˣ → 3x²/eˣ

Still ∞/∞.

Second application:
  3x²/eˣ → 6x/eˣ

Still ∞/∞.

Third application:
  6x/eˣ → 6/eˣ

Now:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln(x)/x

Direct substitution gives:
  ∞/∞

Apply L'Hôpital:
  lim(x→∞) (1/x)/1

Simplify:
  lim(x→∞) 1/x

Therefore:
  0

This demonstrates that x grows faster than ln(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (1 - cos(x))/x²

Step 1: Substitute
  (1 - cos(0))/0² = 0/0

Apply L'Hôpital.

Step 2:
  d/dx (1 - cos(x)) = sin(x)
and:
  d/dx (x²) = 2x

So:
  lim(x→0) sin(x)/(2x)

Still 0/0.

Apply L'Hôpital again.

Step 3:
  d/dx (sin(x)) = cos(x)
and:
  d/dx (2x) = 2

Therefore:
  lim(x→0) cos(x)/2

Substitute:
  cos(0)/2 = 1/2

Therefore:
  1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. L'HÔPITAL'S RULE IS NOT THE QUOTIENT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very common mistake.

Suppose:
  f(x)/g(x)

L'Hôpital's Rule:
  f(x)/g(x) → f'(x)/g'(x)

You differentiate the numerator and denominator separately.

Quotient Rule:
  (f/g)' = (f'g - fg')/g²

These are completely different concepts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT ABOUT OTHER INDETERMINATE FORMS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'Hôpital's Rule directly applies to:
  0/0
and:
  ∞/∞

But you may encounter:
  0·∞
  ∞−∞
  0^0
  1^∞
  ∞^0

These are also indeterminate forms, but you usually need to rewrite them first.

For example:
  0·∞
can often be rewritten as a quotient:
  0·∞ = 0/(1/∞)

which can potentially become 0/0.

Then L'Hôpital's Rule may be used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT WARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not automatically use L'Hôpital's Rule just because you see a fraction.

For example:
  lim(x→∞) (x + 1)/(x² + 1)

This gives ∞/∞, so L'Hôpital can be used.

But:
  lim(x→∞) x/x²

can simply be simplified:
  x/x² = 1/x

Therefore:
  0

You don't always need L'Hôpital.

Algebraic simplification should often be your first choice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A GOOD PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating a limit, follow this process:

Step 1: Substitute
  Try x = a or examine the behavior as x → ∞.

Step 2: Identify the form
  Ask whether you get 0/0 or ∞/∞.

Step 3: Simplify if possible
  Try factoring, canceling, rationalizing, or using identities.

Step 4: Apply L'Hôpital if appropriate
  Differentiate the numerator and denominator separately.

Step 5: Check the resulting limit
  If you still have 0/0 or ∞/∞, you may apply L'Hôpital again.

Step 6: Stop when the limit becomes determinate
  For example: 2/5, 0, 1, ∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation          What to Do
  ──────────────────────────────────────────────────────────
  0/0                L'Hôpital may apply
  ∞/∞                L'Hôpital may apply
  0·∞                Rewrite as a quotient first
  ∞−∞                Algebraically combine/rewrite
  0^0                Usually take logarithms
  1^∞                Usually take logarithms
  ∞^0                Usually take logarithms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CONDITIONS FOR L'HÔPITAL'S RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'Hôpital's Rule can only be applied when certain conditions are met:

1. The limit must be of the form 0/0 or ∞/∞.
2. The functions f and g must be differentiable near a (except possibly at a).
3. The derivative of the denominator g'(x) must not be zero near a.
4. The limit of f'(x)/g'(x) must exist.

If these conditions are not met, L'Hôpital's Rule cannot be applied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN L'HÔPITAL'S RULE FAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes L'Hôpital's Rule may not help or may lead to a more complicated expression.

Example:
  lim(x→∞) (x + sin(x))/x

Step 1: Direct substitution
  ∞/∞ → Indeterminate

Step 2: Apply L'Hôpital's Rule
  lim(x→∞) (x + sin(x))/x = lim(x→∞) (1 + cos(x))/1

Step 3: Evaluate
  lim(x→∞) (1 + cos(x)) does not exist

However, the original limit does exist:
  lim(x→∞) (x + sin(x))/x = lim(x→∞) (1 + sin(x)/x) = 1

So L'Hôpital's Rule led to a limit that doesn't exist, even though the original limit does exist.

This shows that L'Hôpital's Rule is not always the best approach.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SUMMARY OF THE PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating a limit:

1. Substitute directly.
2. If you get a value, you're done.
3. If you get 0/0 or ∞/∞, check if L'Hôpital's Rule applies.
4. Differentiate numerator and denominator separately.
5. Evaluate the new limit.
6. If still indeterminate, repeat the process.
7. For other forms (0·∞, ∞−∞, 0^0, 1^∞, ∞^0), first transform to 0/0 or ∞/∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. PROBLEM-SOLVING FLOWCHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Evaluate lim(x→a) f(x)/g(x)
    ↓
  Substitute x = a
    ↓
  Do you get a value?
    If yes: Done
    If no: ↓
  Is it 0/0 or ∞/∞?
    If yes: Apply L'Hôpital's Rule
    If no: ↓
  Is it 0·∞, ∞−∞, 0^0, 1^∞, or ∞^0?
    If yes: Transform to 0/0 or ∞/∞
    If no: Use other limit techniques
    ↓
  Evaluate the new limit
    ↓
  Repeat if necessary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L'Hôpital's Rule provides a systematic way to evaluate many difficult limits.

The central idea is:

  When a limit is indeterminate (especially 0/0 or ∞/∞), the behavior of 
  the ratio f(x)/g(x) is related to the behavior of the ratio of their 
  derivatives f'(x)/g'(x).

The process is:

  Indeterminate Limit → Differentiate Numerator and Denominator → 
  Evaluate New Limit → Repeat if Needed

Key takeaway:

  L'Hôpital's Rule turns difficult limit problems into derivative problems, 
  which are often easier to evaluate. However, it should not be applied 
  blindly—always check the conditions and consider whether algebraic 
  simplification might be easier.

Easy way to remember:

  Substitute → Identify indeterminate form → Differentiate numerator 
  and denominator separately → Evaluate again

And remember: differentiate the numerator and denominator separately—not the entire quotient using the quotient rule.
  `,
  examples: [
    "0/0: lim(x→0) sin(x)/x → L'Hôpital → 1",
    "0/0: lim(x→2) (x² - 4)/(x - 2) → L'Hôpital → 4",
    "∞/∞: lim(x→∞) x²/eˣ → L'Hôpital twice → 0",
    "∞/∞: lim(x→∞) ln(x)/x → L'Hôpital → 0",
    "0/0: lim(x→0) (1 - cos(x))/x² → L'Hôpital twice → 1/2",
    "∞/∞: lim(x→∞) x³/eˣ → L'Hôpital three times → 0",
    "∞/∞: lim(x→∞) (x + sin(x))/x → L'Hôpital fails, use algebra → 1",
  ],
};

export default topic;