// filename: other-exponential-functions.ts

const topic = {
  id: "other-exponential-functions",
  title: "Other Exponential Functions",
  summary:
    "Variations of the basic exponential function f(x) = aˣ, including functions with coefficients, different bases, modified exponents, and transformations such as Ce^(kx).",
  details: `
After learning the basic exponential function:
  f(x) = aˣ

and the natural exponential function:
  f(x) = eˣ,

we can study other exponential functions. These are variations of the basic exponential form created by changing the base, exponent, coefficient, or position of the graph.

In general, exponential functions can appear in forms such as:
  f(x) = C aˣ
or:
  f(x) = C e^(kx)

where C, a, and k are constants.

These functions are important because they allow us to model many different types of growth and decay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXPONENTIAL FUNCTIONS WITH DIFFERENT BASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general exponential function is:
  f(x) = aˣ

where:
  a > 0, a ≠ 1

Different values of a produce different graphs.

Examples:
  y = 2ˣ
  y = 3ˣ
  y = 5ˣ
  y = 10ˣ

All of these are exponential growth functions because:
  a > 1

They all pass through:
  (0, 1)

because:
  a⁰ = 1

However, they grow at different rates.

For example:
  10ˣ grows much faster than 2ˣ as x becomes larger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COMPARING DIFFERENT EXPONENTIAL GROWTH FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  y = 2ˣ
and:
  y = 3ˣ

Both are exponential growth functions, but 3ˣ grows faster because its base is larger.

Both graphs:
  • Pass through (0, 1)
  • Have domain (-∞, ∞)
  • Have range (0, ∞)
  • Have horizontal asymptote y = 0

But the graph with the larger base increases more rapidly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXPONENTIAL DECAY FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not all exponential functions grow.

If the base satisfies:
  0 < a < 1

the function represents exponential decay.

Examples:
  y = (1/2)ˣ
  y = (1/3)ˣ
  y = (0.8)ˣ

As x increases, the output becomes smaller.

For example:
  (1/2)¹ = 1/2
  (1/2)² = 1/4
  (1/2)³ = 1/8

The values get closer and closer to zero.

However:
  y ≠ 0

The graph approaches the x-axis but never touches it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FUNCTIONS WITH A COEFFICIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An exponential function can have a constant in front:
  f(x) = C aˣ

The constant C affects the vertical position or vertical scaling of the graph.

Example:
  y = 3(2ˣ)

At x = 0, we get:
  y = 3(2⁰)

Since:
  2⁰ = 1

then:
  y = 3

Therefore, the graph passes through:
  (0, 3)

Compare this with:
  y = 2ˣ

which passes through:
  (0, 1)

The coefficient changes the y-intercept.

Example:
  Consider y = 5eˣ.

  When x = 0, we get:
    y = 5e⁰

  Since e⁰ = 1, then:
    y = 5

  So the graph passes through:
    (0, 5)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. NEGATIVE COEFFICIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  y = -2ˣ

This can be interpreted as:
  y = -(2ˣ)

The negative sign reflects the graph across the x-axis.

The original function:
  y = 2ˣ

is above the x-axis.

After multiplying by -1:
  y = -2ˣ

the graph is reflected below the x-axis.

The range changes from:
  (0, ∞)

to:
  (-∞, 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXPONENTIAL FUNCTIONS WITH A MODIFIED EXPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exponent does not always have to be simply x.

Consider:
  f(x) = a^(kx)

where k is a constant.

Example:
  y = 2^(3x)

The exponent contains 3x.

This changes how quickly the function grows.

Compare:
  y = 2ˣ
and:
  y = 2^(3x)

The second function grows faster.

This is because:
  2^(3x) = (2³)ˣ = 8ˣ

Therefore:
  2^(3x) grows like an exponential function with base 8.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXPONENTIAL FUNCTIONS WITH e
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most common advanced exponential form in Calculus is:
  f(x) = C e^(kx)

where:
  C is the initial amount
  e is approximately 2.71828
  k controls the growth or decay rate
  x is the independent variable

When k > 0:
  The function represents exponential growth:
    C e^(kx)

  Example:
    y = 5e^(2x)

  As x increases, the function increases rapidly.

When k < 0:
  The function represents exponential decay:
    C e^(-kx)

  Example:
    y = 5e^(-2x)

  As x increases, the function decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE OF Ce^(kx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One important formula is:
  d/dx (C e^(kx)) = Ck e^(kx)

Example:
  Find d/dx (4e^(3x)).

  The derivative of e^(3x) is 3e^(3x).

  Therefore:
    d/dx (4e^(3x)) = 12e^(3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF OTHER BASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = aˣ, the derivative is:
  d/dx (aˣ) = aˣ ln a

Example:
  Find d/dx (3ˣ).

  Using the formula:
    d/dx (aˣ) = aˣ ln a

  we get:
    d/dx (3ˣ) = 3ˣ ln 3

Chain Rule Example:
  Find d/dx (2^(x²)).

  Let u = x².

  Then u' = 2x.

  Using:
    d/dx (aᵘ) = aᵘ ln(a) · u'

  we get:
    d/dx (2^(x²)) = 2^(x²) ln 2 · (2x)

  or:
    2x ln 2 · 2^(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRATION OF OTHER EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the natural exponential function:
  ∫ eˣ dx = eˣ + C

But for other bases:
  ∫ aˣ dx = aˣ / ln a + C

where a > 0, a ≠ 1.

Example:
  Evaluate: ∫ 2ˣ dx

  Using the formula:
    ∫ aˣ dx = aˣ / ln a + C

  we get:
    ∫ 2ˣ dx = 2ˣ / ln 2 + C

Another Example:
  Evaluate: ∫ 3ˣ dx

  Therefore:
    ∫ 3ˣ dx = 3ˣ / ln 3 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TRANSFORMATIONS OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A more general exponential function is:
  f(x) = C a^(k(x - h)) + d

Each constant changes the graph.

  Parameter    Effect
  ────────────┼─────────────────────────────────────────────────
  C            Vertical stretch or reflection
  a            Determines growth or decay
  k            Changes the rate of growth or decay
  h            Horizontal shift
  d            Vertical shift

Example:
  Consider y = 2^(x-3) + 4.

  The x - 3 causes the graph to shift:
    3 units to the right

  The +4 causes the graph to shift:
    4 units upward

  The original horizontal asymptote y = 0 becomes:
    y = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SOLVING OTHER EXPONENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  3ˣ = 10

Since 10 is not an obvious power of 3, we use logarithms.

Take the natural logarithm:
  ln(3ˣ) = ln 10

Using the power rule:
  x ln 3 = ln 10

Therefore:
  x = (ln 10)/(ln 3)

This formula can be generalized:
  aˣ = b

Take the logarithm of both sides:
  ln(aˣ) = ln b

Therefore:
  x ln a = ln b

Finally:
  x = (ln b)/(ln a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. APPLICATIONS OF OTHER EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Other exponential functions are useful for modeling different real-world situations.

  Population Growth:
    P(t) = P₀ e^(kt)

  Radioactive Decay:
    A(t) = A₀ e^(-kt)

  Compound Interest:
    A = P(1 + r/n)^(nt)

  Continuous Compound Interest:
    A = P e^(rt)

  Bacterial Growth:
    A population may double repeatedly:
      P(t) = P₀ · 2ᵗ

These situations involve repeated multiplication, which is the main characteristic of exponential behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function          Behavior
  ──────────────────────────────────────────────────
  2ˣ                Exponential growth
  3ˣ                Faster exponential growth
  10ˣ               Very rapid growth
  (1/2)ˣ            Exponential decay
  eˣ                Natural exponential growth
  e^(-x)            Natural exponential decay
  5e^(2x)           Growth with initial value 5
  5e^(-2x)          Decay with initial value 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  General Exponential Function:
    f(x) = aˣ

  With Coefficient:
    f(x) = C aˣ

  Natural Exponential Form:
    f(x) = C e^(kx)

  Derivative:
    d/dx (aˣ) = aˣ ln a

  Chain Rule:
    d/dx (aᵘ) = aᵘ ln(a) · u'

  Integral:
    ∫ aˣ dx = aˣ / ln a + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Other Exponential Functions are variations of the basic exponential function:
  f(x) = aˣ

They may have:
  • Different bases
  • Growth or decay
  • Coefficients
  • Negative coefficients
  • Modified exponents
  • Horizontal shifts
  • Vertical shifts

The most general form can be written as:
  f(x) = C a^(k(x - h)) + d

Understanding these variations helps you analyze different exponential graphs and solve real-world problems involving rapid growth and decay.

Easy way to remember:
  Changing the base changes the type of growth or decay, while changing the 
  constants around the exponential expression transforms its graph or changes 
  its rate.
  `,
  examples: [
    "y = 2ˣ, y = 3ˣ, y = 10ˣ → exponential growth with different rates",
    "y = (1/2)ˣ, y = (1/3)ˣ → exponential decay",
    "y = 3(2ˣ) → passes through (0, 3)",
    "y = -2ˣ → reflected below x-axis, range (-∞, 0)",
    "y = 2^(3x) = 8ˣ → faster growth",
    "d/dx (4e^(3x)) = 12e^(3x)",
    "∫ 2ˣ dx = 2ˣ / ln 2 + C",
  ],
};

export default topic;