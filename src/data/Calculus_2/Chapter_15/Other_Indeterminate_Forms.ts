// filename: OtherIndeterminateForms.ts

const topic = {
  id: "other-indeterminate-forms",
  title: "Other Indeterminate Forms",
  summary:
    "A comprehensive guide to all seven indeterminate forms: 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, and ∞⁰. Covers identification, strategies, and examples for each form.",
  details: `
In limits, the form 0/0 is only one of several indeterminate forms. Other forms can appear when we directly substitute the limiting value into an expression.

The main indeterminate forms are:

  0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰

They are called indeterminate because the form alone does not tell us what the limit will be.

For example, expressions that produce 1^∞ can have limits equal to 1, e, 0, ∞, or other values depending on the functions involved.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN INDETERMINATE FORM?

Suppose we have:

  lim_{x→a} f(x).

If direct substitution gives a form whose value cannot immediately determine the limit, we have an indeterminate form.

For example:

  lim_{x→0} sin x / x

gives:

  sin 0 / 0 = 0/0.

We cannot simply say the answer is 0.

Instead, we investigate the behavior of the expression near x = 0.

The same principle applies to the other indeterminate forms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SEVEN COMMON INDETERMINATE FORMS

The most commonly studied indeterminate forms are:

  Indeterminate Form    Typical Approach
  ──────────────────────────────────────────────────────────────
  0/0                   Factor, simplify, rationalize, L'Hôpital
  ∞/∞                   Divide by dominant term, L'Hôpital
  0·∞                   Rewrite as a quotient
  ∞−∞                   Combine fractions, rationalize, simplify
  0⁰                    Take logarithms
  1^∞                   Take logarithms
  ∞⁰                    Take logarithms

Let's examine each one.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INDETERMINATE FORM ∞/∞

The form:

  ∞/∞

occurs when both the numerator and denominator become infinitely large.

This does not mean the answer is 1.

The relative growth rates of the numerator and denominator determine the actual limit.

Example

Evaluate:

  lim_{x→∞} x²/x.

As x→∞:

  x² → ∞

and:

  x → ∞.

Therefore, the initial form is:

  ∞/∞.

Simplify:

  x²/x = x.

Thus:

  lim_{x→∞} x = ∞.

Therefore:

  lim_{x→∞} x²/x = ∞.

So:

  ∞/∞ ≠ 1.

It is indeterminate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: RATIONAL FUNCTIONS

Consider:

  lim_{x→∞} (3x² + 2x - 1)/(x² + 5).

As x→∞:

  3x² + 2x - 1 → ∞

and:

  x² + 5 → ∞.

Thus:

  ∞/∞.

Divide every term by x²:

  (3 + 2/x - 1/x²)/(1 + 5/x²).

As x→∞:

  2/x → 0,
  1/x² → 0,

and:

  5/x² → 0.

Therefore:

  (3 + 0 - 0)/(1 + 0) = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INDETERMINATE FORM 0·∞

Another important form is:

  0·∞.

This occurs when one factor approaches 0 while another approaches infinity.

You cannot simply conclude that:

  0·∞ = 0.

In a limit, the factor approaching infinity may grow much faster than the other factor approaches zero.

Example

Consider:

  lim_{x→0⁺} x · ln x.

As x→0⁺:

  x → 0

while:

  ln x → -∞.

Therefore, we have:

  0 · (-∞).

This is an indeterminate form.

Rewrite the product as a quotient:

  x · ln x = ln x / (1/x).

Now:

  ln x → -∞

and:

  1/x → ∞.

Thus we have:

  -∞/∞.

This can be handled using L'Hôpital's Rule.

Differentiate:

  d/dx (ln x) = 1/x

and:

  d/dx (1/x) = -1/x².

Therefore:

  lim_{x→0⁺} (1/x)/(-1/x²).

Simplify:

  = -x.

Thus:

  lim_{x→0⁺} -x = 0.

Therefore:

  lim_{x→0⁺} x · ln x = 0.

Notice that the original form was 0 · (-∞), but the answer is 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. HOW TO HANDLE 0·∞

When you encounter:

  0·∞,

try converting the product into a quotient.

For example:

  f(x) · g(x)

can be rewritten as:

  f(x) / (1/g(x))

or:

  g(x) / (1/f(x)).

The goal is to obtain either:

  0/0

or:

  ∞/∞,

where techniques such as L'Hôpital's Rule may be applicable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INDETERMINATE FORM ∞−∞

Another common form is:

  ∞−∞.

It may look like the result should be 0, but that is not necessarily true.

The two quantities may approach infinity at different rates.

Example

Consider:

  lim_{x→∞} (√(x² + x) - x).

As x→∞:

  √(x² + x) → ∞

and:

  x → ∞.

Therefore:

  ∞−∞.

We need to simplify.

Multiply by the conjugate:

  (√(x² + x) - x) · (√(x² + x) + x)/(√(x² + x) + x).

We get:

  ((x² + x) - x²)/(√(x² + x) + x).

Simplify the numerator:

  x/(√(x² + x) + x).

Factor x² inside the square root:

  x/(x√(1 + 1/x) + x).

Factor x from the denominator:

  x/(x(√(1 + 1/x) + 1)).

Cancel x:

  1/(√(1 + 1/x) + 1).

Now take the limit:

  1/(√(1 + 0) + 1) = 1/2.

Therefore:

  lim_{x→∞} (√(x² + x) - x) = 1/2

even though the original form was:

  ∞−∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO HANDLE ∞−∞

When you see:

  ∞−∞,

try:

Method 1: Combine terms

Turn the expression into a single fraction.

Method 2: Rationalize

Useful when square roots are present.

Method 3: Factor

Factor out the dominant term.

Method 4: Find a common denominator

This often reveals cancellation.

The goal is to transform the expression into a more manageable form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INDETERMINATE FORM 0⁰

Now we move from quotients and products to powers.

The form:

  0⁰

is indeterminate in the context of limits.

This can be surprising because in some areas of mathematics 0⁰ is assigned a particular value for convenience. But when evaluating limits, a form approaching 0⁰ requires further analysis.

Example

Consider:

  lim_{x→0⁺} xˣ.

As x→0⁺:

  x → 0

and:

  x → 0.

Therefore:

  xˣ → 0⁰.

We cannot simply say the answer is 0.

Instead, use logarithms.

Let:

  y = xˣ.

Take the natural logarithm:

  ln y = x · ln x.

We already know that:

  lim_{x→0⁺} x · ln x = 0.

Therefore:

  lim_{x→0⁺} ln y = 0.

Exponentiate:

  e⁰ = 1.

Thus:

  lim_{x→0⁺} xˣ = 1.

This is an excellent example showing why 0⁰ is indeterminate in limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INDETERMINATE FORM 1^∞

The form:

  1^∞

is another very important indeterminate form.

It occurs when:

  base → 1

and:

  exponent → ∞.

You cannot automatically say:

  1^∞ = 1

when dealing with a limit.

Classic Example

Consider:

  lim_{x→∞} (1 + 1/x)ˣ.

As x→∞:

  1 + 1/x → 1

and:

  x → ∞.

Thus the form is:

  1^∞.

This limit is actually:

  e.

So:

  1^∞

cannot simply be treated as 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DERIVING THE 1^∞ EXAMPLE

Let:

  y = (1 + 1/x)ˣ.

Take the natural logarithm:

  ln y = x · ln(1 + 1/x).

Rewrite:

  ln y = ln(1 + 1/x) / (1/x).

As x→∞:

  ln(1 + 1/x) → 0

and:

  1/x → 0.

Therefore, we now have:

  0/0.

Using L'Hôpital's Rule:

  lim_{x→∞} ln(1 + 1/x) / (1/x) = 1.

Therefore:

  lim_{x→∞} ln y = 1.

Exponentiating:

  lim_{x→∞} y = e¹.

Hence:

  lim_{x→∞} (1 + 1/x)ˣ = e.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INDETERMINATE FORM ∞⁰

The final major form is:

  ∞⁰.

Here the base approaches infinity while the exponent approaches zero.

Again, it is not enough to say the answer is 1.

Example

Consider:

  lim_{x→∞} x^(1/x).

As x→∞:

  x → ∞

and:

  1/x → 0.

Therefore, the form is:

  ∞⁰.

Let:

  y = x^(1/x).

Take the natural logarithm:

  ln y = (ln x)/x.

As x→∞:

  ln x → ∞

and:

  x → ∞.

So we have:

  ∞/∞.

Apply L'Hôpital's Rule:

  lim_{x→∞} (ln x)/x = lim_{x→∞} (1/x)/1.

Therefore:

  lim_{x→∞} 1/x = 0.

Thus:

  lim_{x→∞} ln y = 0.

Exponentiate:

  e⁰ = 1.

Therefore:

  lim_{x→∞} x^(1/x) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE LOGARITHM METHOD FOR INDETERMINATE POWERS

For expressions of the form:

  f(x)^(g(x)),

where the direct substitution produces:

  0⁰, 1^∞, ∞⁰,

a very useful method is:

Step 1

Set:

  y = f(x)^(g(x)).

Step 2

Take the natural logarithm:

  ln y = g(x) · ln(f(x)).

Step 3

Evaluate:

  lim_{x→a} ln y.

Step 4

Call the resulting limit L:

  lim_{x→a} ln y = L.

Step 5

Exponentiate:

  lim_{x→a} y = e^L.

This method transforms a difficult power problem into a product or quotient problem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SUMMARY OF THE SEVEN FORMS

A. 0/0

Example:

  lim_{x→1} (x² - 1)/(x - 1).

Possible techniques:

  Factoring
  Rationalization
  Trigonometric identities
  L'Hôpital's Rule

B. ∞/∞

Example:

  lim_{x→∞} (3x² + 2x)/(x² + 1).

Possible techniques:

  Divide by dominant power
  Factor
  L'Hôpital's Rule

C. 0·∞

Example:

  lim_{x→0⁺} x · ln x.

Rewrite as a quotient.

D. ∞−∞

Example:

  lim_{x→∞} (√(x² + x) - x).

Possible techniques:

  Rationalization
  Common denominator
  Factoring

E. 0⁰

Example:

  lim_{x→0⁺} xˣ = 1.

Use logarithms.

F. 1^∞

Example:

  lim_{x→∞} (1 + 1/x)ˣ = e.

Use logarithms.

G. ∞⁰

Example:

  lim_{x→∞} x^(1/x) = 1.

Use logarithms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A USEFUL DECISION PROCESS

When evaluating a limit, you can follow this sequence:

  Direct Substitution

↓

Does it produce an ordinary number?

  Yes: You're usually done.

  No: Check the resulting form.

↓

If you obtain:

  0/0

→ Factor, rationalize, use identities, or L'Hôpital.

If you obtain:

  ∞/∞

→ Simplify dominant terms or use L'Hôpital.

If you obtain:

  0·∞

→ Rewrite as a quotient.

If you obtain:

  ∞−∞

→ Combine, factor, or rationalize.

If you obtain:

  0⁰, 1^∞, ∞⁰

→ Take logarithms first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. INDETERMINATE VS. DETERMINATE INFINITE FORMS

This distinction is extremely important.

Not every expression involving 0 and ∞ is indeterminate.

For example:

  5/0⁺ = +∞.

This is not one of the standard indeterminate forms.

Likewise:

  5/∞ = 0.

This can be determined directly.

But:

  0/0

and:

  ∞/∞

are indeterminate.

Similarly:

  0·∞

and:

  ∞−∞

require further investigation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER

  lim_{x→0} sin x / x = 1
  lim_{x→∞} (1 + 1/x)ˣ = e
  lim_{x→0⁺} xˣ = 1
  lim_{x→∞} x^(1/x) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY

The key idea behind all indeterminate forms is that the apparent form does not reveal the final behavior of the limit.

For example:

  0/0

could lead to:

  0, 1, 2, ∞, -∞,

or the limit may not exist.

Likewise:

  1^∞

does not automatically equal 1.

The functions involved and their rates of growth or decay determine the actual answer.

The seven forms to memorize are:

  0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰

Remember: an indeterminate form is not an answer. It is a signal that you need another technique to determine the actual limit.

Easy way to remember: The seven indeterminate forms are 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, and ∞⁰. For the first four, rewrite algebraically. For the last three, use logarithms.
  `,
  examples: [
    "lim_{x→∞} x²/x = ∞ (∞/∞, but grows faster)",
    "lim_{x→∞} (3x² + 2x - 1)/(x² + 5) = 3 (∞/∞, divide by dominant term)",
    "lim_{x→0⁺} x ln x = 0 (0·∞, rewrite as quotient, L'Hôpital)",
    "lim_{x→∞} (√(x² + x) - x) = 1/2 (∞−∞, rationalize)",
    "lim_{x→0⁺} xˣ = 1 (0⁰, use logarithms)",
    "lim_{x→∞} (1 + 1/x)ˣ = e (1^∞, use logarithms)",
    "lim_{x→∞} x^(1/x) = 1 (∞⁰, use logarithms)",
    "5/0⁺ = +∞ (not indeterminate, directly determined)",
    "5/∞ = 0 (not indeterminate, directly determined)",
  ],
};

export default topic;