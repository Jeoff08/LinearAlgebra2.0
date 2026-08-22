// filename: integrals-of-exponential-functions.ts

const topic = {
  id: "integrals-of-exponential-functions",
  title: "Integrals of Exponential Functions",
  summary:
    "Integration rules for exponential functions including e^x, a^x, and e^(kx), with special attention to dividing by the coefficient when the exponent contains a constant multiple of x.",
  details: `
The integrals of exponential functions are important because exponential functions appear frequently in growth, decay, finance, population models, physics, and differential equations.

The key idea is that integration is the reverse of differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INTEGRAL OF eˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important exponential integration rule is:
  ∫ eˣ dx = eˣ + C

Why?
Because:
  d/dx (eˣ) = eˣ

Since the derivative of eˣ is itself, its antiderivative is also eˣ.

Example:
  ∫ eˣ dx

Immediately:
  eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY e IS SPECIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The number e is approximately:
  e ≈ 2.71828

The function f(x) = eˣ has the unique property:
  d/dx (eˣ) = eˣ

Therefore:
  ∫ eˣ dx = eˣ + C

This makes eˣ one of the easiest functions to integrate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTEGRAL OF aeˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a constant is multiplied by eˣ, use the Constant Multiple Rule.
  ∫ aeˣ dx = aeˣ + C

where a is a constant.

Example:
  ∫ 5eˣ dx

Move 5 outside:
  5∫ eˣ dx

Therefore:
  5eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE WITH A NEGATIVE CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ -7eˣ dx

Using the Constant Multiple Rule:
  -7∫ eˣ dx

Therefore:
  -7eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INTEGRAL OF aˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every exponential function has base e.

For a general exponential function:
  f(x) = aˣ

the derivative is:
  d/dx (aˣ) = aˣ ln a

Therefore, to reverse the derivative, we divide by ln a:
  ∫ aˣ dx = aˣ / ln a + C

where:
  a > 0, a ≠ 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: ∫ 2ˣ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 2ˣ dx

Use:
  ∫ aˣ dx = aˣ / ln a + C

Here:
  a = 2

Therefore:
  ∫ 2ˣ dx = 2ˣ / ln 2 + C

Check:
  Differentiate:
    d/dx (2ˣ / ln 2) = (2ˣ ln 2) / ln 2 = 2ˣ

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: ∫ 10ˣ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the formula:
  ∫ 10ˣ dx = 10ˣ / ln 10 + C

Therefore:
  10ˣ / ln 10 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE GENERAL EXPONENTIAL e^(kx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another extremely important form is:
  ∫ e^(kx) dx = (1/k) e^(kx) + C

where:
  k ≠ 0

Why?
  Differentiate:
    d/dx [(1/k) e^(kx)]

  Using the Chain Rule:
    = (1/k)(k e^(kx))

  The k's cancel:
    = e^(kx)

Therefore:
  ∫ e^(kx) dx = e^(kx)/k + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: ∫ e^(3x) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ e^(3x) dx

Here:
  k = 3

Therefore:
  e^(3x)/3 + C

Check:
  d/dx (e^(3x)/3) = (1/3)(3e^(3x)) = e^(3x)

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: ∫ e^(-2x) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here:
  k = -2

Using:
  ∫ e^(kx) dx = e^(kx)/k + C

we get:
  -1/2 e^(-2x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: ∫ 4e^(5x) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We have both a constant coefficient and an exponential containing 5x:
  ∫ 4e^(5x) dx

Take 4 outside:
  4∫ e^(5x) dx

Integrate:
  4(e^(5x)/5) + C

Therefore:
  4/5 e^(5x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL FORM ae^(kx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful formula is:
  ∫ a e^(kx) dx = (a/k) e^(kx) + C

where a and k are constants and k ≠ 0.

Example:
  ∫ 6e^(2x) dx

Here:
  a = 6, k = 2

Therefore:
  (6/2)e^(2x) + C
  3e^(2x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXPONENTIAL FUNCTIONS WITH A LINEAR EXPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ e^(3x + 2) dx

The exponent is:
  3x + 2

Its derivative is:
  3

Therefore, divide by 3:
  ∫ e^(3x + 2) dx = (1/3) e^(3x + 2) + C

Check:
  d/dx [(1/3)e^(3x + 2)] = (1/3)(3)e^(3x + 2) = e^(3x + 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: ∫ 5e^(4x - 1) dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  ∫ 5e^(4x - 1) dx

The coefficient outside is 5, and the derivative of the exponent 4x - 1 is 4.

Therefore:
  (5/4) e^(4x - 1) + C

Check:
  d/dx [(5/4)e^(4x - 1)] = (5/4)(4)e^(4x - 1) = 5e^(4x - 1)

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions with negative exponents frequently represent decay.

For example:
  ∫ e^(-3x) dx

Using:
  ∫ e^(kx) dx = e^(kx)/k + C

where:
  k = -3

we get:
  -1/3 e^(-3x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. INTEGRATING A SUM OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Rule still applies.

Consider:
  ∫ (eˣ + e^(2x)) dx

Integrate each term:
  ∫ eˣ dx + ∫ e^(2x) dx

Therefore:
  eˣ + (1/2)e^(2x) + C

So:
  eˣ + 1/2 e^(2x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. INTEGRATING A DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ (e^(3x) - 2eˣ) dx

Separate:
  ∫ e^(3x) dx - 2∫ eˣ dx

Integrate:
  (1/3)e^(3x) - 2eˣ + C

Therefore:
  1/3 e^(3x) - 2eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT EXPONENTIAL INTEGRATION FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These formulas are worth memorizing:

  Base e:
    ∫ eˣ dx = eˣ + C

  Constant multiple:
    ∫ a eˣ dx = a eˣ + C

  Exponent kx:
    ∫ e^(kx) dx = e^(kx)/k + C

  General coefficient:
    ∫ a e^(kx) dx = (a/k) e^(kx) + C

  General base:
    ∫ aˣ dx = aˣ / ln a + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. WHY DO WE DIVIDE BY k?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important ideas to understand.

Suppose:
  ∫ e^(5x) dx

You might think the answer is:
  e^(5x)

But differentiate:
  d/dx (e^(5x)) = 5e^(5x)

We got an extra 5.

So we need to cancel it:
  (1/5) e^(5x)

Now differentiate:
  d/dx [(1/5) e^(5x)] = (1/5)(5e^(5x)) = e^(5x)

Therefore:
  ∫ e^(5x) dx = (1/5) e^(5x) + C

Memory trick:
  When the exponent contains kx, divide by k.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting to divide by the coefficient
  Incorrect:
    ∫ e^(4x) dx = e^(4x) + C
  Differentiate:
    4e^(4x)
  That's not the original function.
  Correct:
    ∫ e^(4x) dx = (1/4) e^(4x) + C

❌ Mistake 2: Forgetting ln a
  For:
    ∫ 3ˣ dx
  don't write:
    3ˣ + C
  Correct:
    3ˣ / ln 3 + C

❌ Mistake 3: Forgetting +C
  For an indefinite integral:
    ∫ eˣ dx
  the answer is:
    eˣ + C
  not just eˣ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (3e^(2x) + 4e^(-x) - 5eˣ) dx

Separate:
  3∫ e^(2x) dx + 4∫ e^(-x) dx - 5∫ eˣ dx

Integrate each:
  3(e^(2x)/2) + 4(e^(-x)/(-1)) - 5eˣ + C

Simplify:
  (3/2)e^(2x) - 4e^(-x) - 5eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. CHECKING THE ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take:
  F(x) = (3/2)e^(2x) - 4e^(-x) - 5eˣ + C

Differentiate:
  F'(x) = (3/2)(2e^(2x)) - 4(-e^(-x)) - 5eˣ
  = 3e^(2x) + 4e^(-x) - 5eˣ

This matches the original integrand.

Therefore:
  ∫ (3e^(2x) + 4e^(-x) - 5eˣ) dx = (3/2)e^(2x) - 4e^(-x) - 5eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important exponential integration rules are:

  ∫ eˣ dx = eˣ + C
  ∫ e^(kx) dx = (1/k) e^(kx) + C
  ∫ a e^(kx) dx = (a/k) e^(kx) + C

and for a general base:
  ∫ aˣ dx = aˣ / ln a + C

Easy way to remember:

If you have:
  ∫ e^(kx) dx

look inside the exponent.

If the exponent is simply x:
  eˣ + C

If the exponent is kx:
  e^(kx)/k + C

If the base is a instead of e:
  aˣ / ln a + C

The key skill is recognizing what is inside the exponent and accounting for its derivative.
  `,
  examples: [
    "∫ eˣ dx = eˣ + C",
    "∫ 5eˣ dx = 5eˣ + C",
    "∫ e^(3x) dx = e^(3x)/3 + C",
    "∫ e^(-2x) dx = -1/2 e^(-2x) + C",
    "∫ 4e^(5x) dx = 4/5 e^(5x) + C",
    "∫ 2ˣ dx = 2ˣ / ln 2 + C",
    "∫ (3e^(2x) + 4e^(-x) - 5eˣ) dx = 3/2 e^(2x) - 4e^(-x) - 5eˣ + C",
  ],
};

export default topic;