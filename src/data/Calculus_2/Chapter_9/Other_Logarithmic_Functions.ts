// filename: OtherLogarithmicFunctions.ts

const topic = {
  id: "other-logarithmic-functions",
  title: "Other Logarithmic Functions",
  summary:
    "Logarithmic functions with bases other than e, written as f(x) = logₐ(x), with their properties, derivatives, integrals, and applications in computer science and other fields.",
  details: `
After learning about the Natural Logarithmic Function:

  ln x = logₑ x

we can study other logarithmic functions that use bases other than e.

The general logarithmic function is:

  f(x) = logₐ x

where:

  a > 0, a ≠ 1

The value a is called the base of the logarithm.

Examples include:

  log₂ x, log₃ x, log₅ x, log₁₀ x

These are all logarithmic functions, but their graphs and rates of change differ depending on the base.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES A LOGARITHM MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithm answers the question:

  "What exponent must the base be raised to in order to produce a given number?"

For example:

  log₂ 8 = 3

because:

  2³ = 8

Another example:

  log₁₀ 100 = 2

because:

  10² = 100

Similarly:

  log₃ 81 = 4

because:

  3⁴ = 81

Therefore:

  logₐ b = c

means:

  aᶜ = b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL FORM OF A LOGARITHMIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general form is:

  f(x) = logₐ x

The base must satisfy:

  a > 0, a ≠ 1

Why can't the base be 1?

If:

  1ˣ = 1

for every value of x, then it cannot produce different outputs. Therefore, a logarithm with base 1 is not useful as an inverse function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. COMMON LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several important types of logarithmic functions.

Natural Logarithm
  ln x = logₑ x

where:

  e ≈ 2.71828

This is the most important logarithmic function in Calculus.

Common Logarithm
  log x = log₁₀ x

When no base is written in many mathematics contexts, log x often means base 10.

Examples:

  log 10 = 1

because:

  10¹ = 10

and:

  log 100 = 2

because:

  10² = 100

Binary Logarithm
  log₂ x

This logarithm uses base 2.

It is especially important in Computer Science.

For example:

  log₂ 8 = 3

because:

  2³ = 8

Binary logarithms are used in:

  • Algorithms
  • Binary search
  • Computer memory
  • Data structures
  • Computational complexity

For example, an algorithm with complexity:

  O(log n)

grows logarithmically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. PROPERTIES OF LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  f(x) = logₐ x

the following properties are important.

Domain

The domain is:

  x > 0

You cannot take the logarithm of zero or a negative number in the real number system.

Range

The range is:

  (-∞, ∞)

The output of a logarithmic function can be any real number.

X-Intercept

Every logarithmic function of the form:

  logₐ x

passes through:

  (1, 0)

because:

  logₐ 1 = 0

since:

  a⁰ = 1

Y-Intercept

There is no y-intercept because:

  x = 0

is not part of the domain.

Vertical Asymptote

Every basic logarithmic function has a vertical asymptote:

  x = 0

The graph approaches the y-axis but never touches it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. LOGARITHMIC FUNCTIONS WITH BASE GREATER THAN 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  a > 1

then:

  y = logₐ x

is an increasing function.

Examples:

  log₂ x
  log₃ x
  log₁₀ x

Both functions:

  • Exist only for x > 0
  • Pass through (1, 0)
  • Have a vertical asymptote at x = 0
  • Increase as x increases
  • Are concave downward

However, different bases cause the functions to grow at different rates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LOGARITHMIC FUNCTIONS WITH BASES BETWEEN 0 AND 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithmic function can also have a base between 0 and 1.

For example:

  y = log_{1/2} x

or:

  y = log_{1/3} x

In this case:

  0 < a < 1

The logarithmic function becomes a decreasing function.

As x increases:

  y decreases.

This is different from logarithmic functions with bases greater than 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY DOES THE BASE CHANGE THE GRAPH?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember that logarithmic functions are inverse functions of exponential functions.

For example:

  y = 2ˣ

has the inverse:

  y = log₂ x

Similarly:

  y = 10ˣ

has the inverse:

  y = log₁₀ x

Therefore:

  aˣ ↔ logₐ x

The logarithmic graph is a reflection of the corresponding exponential graph across:

  y = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DERIVATIVE OF OTHER LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the natural logarithm:

  d/dx (ln x) = 1/x

But for a logarithm with another base:

  d/dx (logₐ x) = 1/(x ln a)

where:

  a > 0, a ≠ 1

Example

Find:

  d/dx (log₂ x)

Using:

  d/dx (logₐ x) = 1/(x ln a)

we get:

  d/dx (log₂ x) = 1/(x ln 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHAIN RULE WITH LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the logarithm contains another function, we use the Chain Rule.

The formula is:

  d/dx (logₐ (u)) = u'/(u ln a)

Example

Find:

  d/dx (log₃ (x² + 1))

Let:

  u = x² + 1

Then:

  u' = 2x

Apply the formula:

  d/dx (logₐ (u)) = u'/(u ln a)

Therefore:

  2x/((x² + 1) ln 3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CHANGE OF BASE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important formulas involving other logarithmic functions is the Change of Base Formula.

  logₐ x = (ln x)/(ln a)

You can also use:

  logₐ x = (log_b x)/(log_b a)

where b is another valid logarithmic base.

Example

Evaluate:

  log₂ 7

Most calculators do not always have a log₂ button, so we use the Change of Base Formula:

  log₂ 7 = (ln 7)/(ln 2)

Using approximate values:

  ln 7 ≈ 1.9459
  ln 2 ≈ 0.6931

Therefore:

  log₂ 7 ≈ 2.807

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRATION OF OTHER LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the Change of Base Formula:

  logₐ x = (ln x)/(ln a)

we can integrate logarithmic functions.

  ∫ logₐ x dx

becomes:

  (1/ln a) ∫ ln x dx

Using:

  ∫ ln x dx = x ln x - x + C

we get:

  ∫ logₐ x dx = (x ln x - x)/(ln a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ log₂ x dx

Use:

  log₂ x = (ln x)/(ln 2)

Therefore:

  ∫ log₂ x dx = (1/ln 2) ∫ ln x dx

Using:

  ∫ ln x dx = x ln x - x

we obtain:

  (x ln x - x)/(ln 2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SOLVING EQUATIONS USING LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  log₂ x = 5

Convert it into exponential form:

  x = 2⁵

Therefore:

  x = 32

Another Example

Suppose:

  log₃ (x + 1) = 2

Convert to exponential form:

  x + 1 = 3²
  x + 1 = 9

Therefore:

  x = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. APPLICATIONS OF OTHER LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logarithmic functions appear in many areas.

Computer Science

Binary logarithms are important in:

  log₂ n

Examples include:

  • Binary search
  • Binary trees
  • Algorithm analysis
  • Divide-and-conquer algorithms

Science

Logarithmic scales are used for measurements involving very large or very small values.

Engineering

Logarithms are used in signal processing and other mathematical models.

Finance

Logarithms can help analyze growth rates and exponential changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMPARISON OF COMMON LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function        Base      Behavior
  ──────────────────────────────────────
  ln x            e ≈ 2.718  Increasing
  log₂ x          2          Increasing
  log₃ x          3          Increasing
  log₁₀ x         10         Increasing
  log_{1/2} x     1/2        Decreasing
  log_{1/3} x     1/3        Decreasing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  General Form:
    f(x) = logₐ x

  Conditions:
    a > 0, a ≠ 1

  Derivative:
    d/dx (logₐ x) = 1/(x ln a)

  Chain Rule:
    d/dx (logₐ (u)) = u'/(u ln a)

  Change of Base Formula:
    logₐ x = (ln x)/(ln a)

  Integral:
    ∫ logₐ x dx = (x ln x - x)/(ln a) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Other Logarithmic Functions are logarithmic functions with bases other than e:

  f(x) = logₐ x

If:

  a > 1

the graph is increasing.

If:

  0 < a < 1

the graph is decreasing.

All basic logarithmic functions have:

  • Domain: x > 0
  • Range: all real numbers
  • X-intercept: (1, 0)
  • No y-intercept
  • Vertical asymptote: x = 0

The most important relationship is:

  aˣ ↔ logₐ x

They are inverse functions.

Easy way to remember: An exponential function asks what number you get after raising a base to a power, while a logarithmic function asks what power was needed to get that number.
  `,
  examples: [
    "log₂ 8 = 3 because 2³ = 8",
    "log₁₀ 100 = 2 because 10² = 100",
    "d/dx (log₂ x) = 1/(x ln 2)",
    "d/dx (log₃ (x² + 1)) = 2x/((x² + 1) ln 3)",
    "log₂ 7 = ln 7 / ln 2 ≈ 2.807",
    "∫ log₂ x dx = (x ln x - x)/(ln 2) + C",
    "log₂ x = 5 → x = 32",
  ],
};

export default topic;