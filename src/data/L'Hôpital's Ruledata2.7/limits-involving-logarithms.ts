// filename: limits-involving-logarithms.ts

const topic = {
  id: "limits-involving-logarithms",
  title: "Limits Involving Logarithms",
  summary:
    "Evaluating limits containing logarithmic functions (ln x, log_a x) especially as x→0⁺, x→∞, or in indeterminate forms such as 0/0, ∞/∞, 0·∞, and 1^∞.",
  details: `
Limits involving logarithmic functions are limits that contain expressions such as:
  ln x, log_a x

They are especially important when x → 0⁺, x → ∞, or when logarithms appear in indeterminate forms such as:
  0/0, ∞/∞, 0·∞, 1^∞.

The most important logarithm in calculus is the natural logarithm:
  ln x

because:
  d/dx (ln x) = 1/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A LOGARITHMIC FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithmic function is the inverse of an exponential function.

For example:
  y = ln x
means:
  e^y = x

Therefore:
  ln(e^x) = x
and:
  e^(ln x) = x
for x > 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DOMAIN OF ln x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The natural logarithm is defined only when:
  x > 0

Therefore:
  ln x is defined only for x > 0

This is especially important when evaluating:
  lim(x→0) ln x

We approach 0 from the right:
  x → 0⁺

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LIMIT OF ln x AS x → ∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) ln x

As x becomes increasingly large, ln x also increases without bound.

Therefore:
  lim(x→∞) ln x = ∞

However, logarithms grow very slowly compared with polynomial and exponential functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LIMIT OF ln x AS x → 0⁺
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0⁺) ln x

As x gets closer and closer to 0 from the positive side:
  ln x → -∞

Therefore:
  lim(x→0⁺) ln x = -∞

For example:
  ln(0.1) ≈ -2.303
  ln(0.01) ≈ -4.605
  ln(0.001) ≈ -6.908

The values become increasingly negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. IMPORTANT LOGARITHMIC LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two fundamental limits are:
  lim(x→∞) ln x = ∞
and:
  lim(x→0⁺) ln x = -∞

These are important to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: SIMPLE LOGARITHMIC LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) (3 + ln x)

Since ln x → ∞, adding the constant 3 does not change the behavior.

Therefore:
  ∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: ln(1/x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln(1/x)

Use the logarithm property:
  ln(1/x) = -ln x

Since ln x → ∞, we get:
  -ln x → -∞

Therefore:
  lim(x→∞) ln(1/x) = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LOGARITHMS GROW SLOWER THAN POWERS OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important concepts is:
  ln x grows slower than x^p

for every p > 0.

For example:
  ln x << x
and:
  ln x << x²

Therefore:
  lim(x→∞) ln x/x = 0
and:
  lim(x→∞) ln x/x² = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: ln x / x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln x/x

Direct substitution gives:
  ∞/∞

This is an indeterminate form.

Apply L'Hôpital's Rule.

Differentiate the numerator:
  d/dx (ln x) = 1/x
and the denominator:
  d/dx (x) = 1

Therefore:
  lim(x→∞) (1/x)/1

which becomes:
  lim(x→∞) 1/x

Thus:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: ln x / x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln x/x²

Again:
  ∞/∞

Apply L'Hôpital:
  lim(x→∞) (1/x)/(2x)

Simplify:
  lim(x→∞) 1/(2x²)

Therefore:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. LOGARITHMS VS. EXPONENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The growth hierarchy is:
  ln x << x^p << e^x

In words:
  Logarithmic growth < Polynomial growth < Exponential growth

For example:
  ln x

grows slower than:
  x,

which grows slower than:
  x²,

which grows slower than:
  e^x.

This gives us:
  lim(x→∞) ln x/e^x = 0
and:
  lim(x→∞) e^x/ln x = ∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: ln x / e^x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→∞) ln x/e^x

We have:
  ∞/∞

Apply L'Hôpital:
  lim(x→∞) (1/x)/e^x

Rewrite:
  lim(x→∞) 1/(x e^x)

As x → ∞:
  x e^x → ∞

Therefore:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. A VERY IMPORTANT LIMIT NEAR x = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0⁺) x ln x

Here:
  x → 0
while:
  ln x → -∞

Therefore, we have:
  0 · (-∞)

which is an indeterminate form.

We cannot simply say the answer is 0.

Rewrite it as a quotient:
  x ln x = ln x/(1/x)

Now we have:
  -∞/∞

Apply L'Hôpital:
  lim(x→0⁺) (1/x)/(-1/x²)

Simplify:
  lim(x→0⁺) (-x)

Therefore:
  0

So:
  lim(x→0⁺) x ln x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: ln(1 + x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important limit is:
  lim(x→0) ln(1 + x)/x

Substitute:
  ln(1 + 0)/0 = 0/0

Apply L'Hôpital:
  lim(x→0) (1/(1 + x))/1

Therefore:
  1/(1 + 0) = 1

So:
  lim(x→0) ln(1 + x)/x = 1

This is an extremely useful standard limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: ln(1 + x²) / x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) ln(1 + x²)/x²

Substitute:
  ln(1)/0 = 0/0

Apply L'Hôpital:
  d/dx [ln(1 + x²)] = 2x/(1 + x²)
and:
  d/dx (x²) = 2x

Therefore:
  lim(x→0) [2x/(1 + x²)]/(2x)

Cancel 2x:
  lim(x→0) 1/(1 + x²)

Therefore:
  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. LOGARITHM LAWS HELP WITH LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several logarithm properties are extremely useful.

Product Rule:
  ln(ab) = ln a + ln b

Quotient Rule:
  ln(a/b) = ln a - ln b

Power Rule:
  ln(a^r) = r ln a

These can transform complicated limits into simpler expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE USING THE POWER RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→∞) ln(x³)/x

Use:
  ln(x³) = 3 ln x

Therefore:
  lim(x→∞) 3 ln x/x

Since:
  lim(x→∞) ln x/x = 0

we get:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LOGARITHM WITH A DIFFERENT BASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithm can have any valid base:
  log_a x

Use the change-of-base formula:
  log_a x = ln x / ln a

Since ln a is a constant, logarithms with different bases have essentially the same growth behavior.

For example:
  lim(x→∞) log₂ x / x = 0

Because:
  log₂ x = ln x / ln 2

we have:
  log₂ x / x = (1/ln 2) · ln x / x

Therefore:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMMON LOGARITHMIC LIMIT PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are useful to remember:

  lim(x→∞) ln x = ∞
  lim(x→0⁺) ln x = -∞
  lim(x→∞) ln x / x^p = 0 (p > 0)
  lim(x→∞) ln x / e^x = 0
  lim(x→0) ln(1 + x) / x = 1
  lim(x→0⁺) x ln x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the right-hand limit
  For ln x near zero, you must have x > 0.
  Therefore: x → 0⁺
  rather than simply treating x → 0 from both sides.

Mistake 2: Assuming ln x grows quickly
  It doesn't.
  Although ln x → ∞, it grows extremely slowly compared with powers of x.
  For example:
    lim(x→∞) ln x / x = 0

Mistake 3: Treating 0 · (-∞) as zero
  The expression 0 · (-∞) is indeterminate.
  For example:
    lim(x→0⁺) x ln x
  requires further work and happens to equal 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Limit                                Result
  ────────────────────────────────────────────────────
  lim(x→∞) ln x                        ∞
  lim(x→0⁺) ln x                       -∞
  lim(x→∞) ln x / x                    0
  lim(x→∞) ln x / x^n                  0
  lim(x→∞) ln x / e^x                  0
  lim(x→0) ln(1 + x) / x               1
  lim(x→0⁺) x ln x                     0
  lim(x→∞) e^x / ln x                  ∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. KEY TAKEAWAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important ideas for logarithmic limits are:

  lim(x→∞) ln x = ∞
but:
  lim(x→0⁺) ln x = -∞

and logarithms grow more slowly than both polynomials and exponentials:
  ln x << x^p << e^x

Also remember the important standard limit:
  lim(x→0) ln(1 + x) / x = 1

When logarithmic limits produce forms such as:
  0/0, ∞/∞, 0·∞,

you can often simplify the expression or transform it and then use L'Hôpital's Rule.
  `,
  examples: [
    "lim(x→∞) ln x = ∞",
    "lim(x→0⁺) ln x = -∞",
    "lim(x→∞) ln x / x → L'Hôpital → 0",
    "lim(x→∞) ln x / x² → L'Hôpital → 0",
    "lim(x→∞) ln x / e^x → L'Hôpital → 0",
    "lim(x→0⁺) x ln x → rewrite as ln x/(1/x) → 0",
    "lim(x→0) ln(1 + x) / x → L'Hôpital → 1",
  ],
};

export default topic;