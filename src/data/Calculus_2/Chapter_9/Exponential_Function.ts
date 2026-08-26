// filename: exponential-function.ts

const topic = {
  id: "exponential-function",
  title: "Exponential Function",
  summary:
    "A function where the variable appears in the exponent, written as f(x) = a^x, with the natural exponential function e^x being the most important in calculus.",
  details: `
An Exponential Function is a function where the variable appears in the exponent.

The general form is:
  f(x) = aˣ

where:
  a is the base
  x is the exponent
  a > 0
  a ≠ 1

Examples include:
  f(x) = 2ˣ
  f(x) = 3ˣ
  f(x) = (1/2)ˣ

and the most important exponential function in Calculus:
  f(x) = eˣ

where:
  e ≈ 2.71828

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT MAKES A FUNCTION EXPONENTIAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key characteristic of an exponential function is that the variable is in the exponent.

Exponential Function:
  y = 2ˣ
  Here, x is the exponent.

Not an Exponential Function:
  y = x²
  Here, x is the base and 2 is the exponent. This is a power function, not an exponential function.

Easy Way to Remember:
  Variable in the exponent → Exponential Function
  Variable in the base → Usually a Power Function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. GENERAL FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general exponential function is:
  f(x) = aˣ

The behavior depends on the value of the base a.

There are two main cases.

Case 1: Exponential Growth
  If a > 1, then the function increases as x increases.
  Examples: 2ˣ, 3ˣ, 10ˣ, eˣ
  These represent exponential growth.

Case 2: Exponential Decay
  If 0 < a < 1, then the function decreases as x increases.
  Examples: (1/2)ˣ and (1/3)ˣ
  These represent exponential decay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BASIC PROPERTIES OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = aˣ where a > 0, a ≠ 1.

The following properties are important.

Domain:
  The domain is (-∞, ∞).
  You can substitute any real number for x.
  For example: 2⁻³, 2⁰, 2^1.5 are all valid.

Range:
  The range is (0, ∞).
  An exponential function is always positive.
  For aˣ > 0 for every real value of x.
  Therefore, the graph never touches or crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. IMPORTANT POINTS ON THE GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider y = 2ˣ.

When x = 0, we get:
  2⁰ = 1

Therefore, every exponential function of the form aˣ passes through:
  (0, 1)

because:
  a⁰ = 1

This is one of the most important characteristics of exponential graphs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPH OF AN EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider y = 2ˣ.

The graph has the following behavior:
  • It passes through (0, 1).
  • It increases as x increases.
  • It approaches the x-axis as x moves toward negative infinity.
  • It never touches the x-axis.
  • It grows faster and faster as x increases.

The horizontal asymptote is:
  y = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An exponential function represents growth when a > 1.

For example:
  f(x) = 2ˣ

As x increases:
  2¹ = 2
  2² = 4
  2³ = 8
  2⁴ = 16

Notice what happens: the values are repeatedly multiplied by 2.

The growth becomes faster as x increases.

This is different from a linear function.

Linear Growth:
  y = 2x
  The output increases by the same amount.

Exponential Growth:
  y = 2ˣ
  The output increases by repeated multiplication.

This is why exponential growth eventually becomes extremely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential decay occurs when 0 < a < 1.

For example:
  y = (1/2)ˣ

As x increases:
  (1/2)¹ = 1/2
  (1/2)² = 1/4
  (1/2)³ = 1/8

The values become smaller and smaller.

The graph decreases but remains positive.

It approaches y = 0 without touching it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE NUMBER e
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important base in Calculus is:
  e ≈ 2.71828

The exponential function:
  f(x) = eˣ

is called the Natural Exponential Function.

It is special because its derivative is itself:
  d/dx (eˣ) = eˣ

This is one of the most important formulas in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DERIVATIVE OF AN EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a general exponential function:
  f(x) = aˣ

the derivative is:
  d/dx (aˣ) = aˣ ln a

For example:
  f(x) = 2ˣ

Then:
  f'(x) = 2ˣ ln 2

Special Case: eˣ
  When f(x) = eˣ, we have ln e = 1.

  Therefore:
    d/dx (eˣ) = eˣ ln e
    becomes:
    d/dx (eˣ) = eˣ

  The function and its derivative are exactly the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. CHAIN RULE WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the exponent contains a function of x, we use the Chain Rule.

The formula is:
  d/dx (eᵘ) = eᵘ · du/dx

where u = u(x).

Example:
  Find d/dx (e^(3x)).

  Let u = 3x.

  Then u' = 3.

  Apply the Chain Rule:
    d/dx (e^(3x)) = e^(3x) · 3

  Therefore: 3e^(3x)

Another Example:
  Find d/dx (e^(x²)).

  Let u = x².

  Then u' = 2x.

  Therefore:
    d/dx (e^(x²)) = 2x e^(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRATION OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exponential function eˣ is also special when integrating.
  ∫ eˣ dx = eˣ + C

The antiderivative of eˣ is itself.

Example:
  Evaluate: ∫ 5eˣ dx

  Take the constant outside:
    5∫ eˣ dx

  Therefore:
    5eˣ + C

General Exponential Integral:
  For aˣ, the formula is:
    ∫ aˣ dx = aˣ / ln a + C

  where a > 0, a ≠ 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SOLVING EXPONENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  2ˣ = 8

Since:
  8 = 2³

we get:
  x = 3

But sometimes the answer is not obvious.

For example:
  2ˣ = 7

Take the natural logarithm of both sides:
  ln(2ˣ) = ln 7

Using the logarithmic power rule:
  x ln 2 = ln 7

Therefore:
  x = (ln 7)/(ln 2)

This shows why logarithmic functions are important when solving exponential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RELATIONSHIP BETWEEN EXPONENTIAL AND LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The exponential function:
  y = eˣ

and the natural logarithmic function:
  y = ln x

are inverse functions.

They undo each other:
  ln(eˣ) = x
and:
  e^(ln x) = x

Graphically, their graphs are reflections across:
  y = x

This is an important connection between exponential and logarithmic functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXPONENTIAL GROWTH IN REAL LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions are used to model situations where quantities grow repeatedly by a percentage or multiplication factor.

Examples include:

Population Growth:
  A population may increase by a certain percentage over time.

Compound Interest:
  Money earns interest, and the interest itself begins earning more interest.

Bacterial Growth:
  Bacteria can reproduce rapidly under suitable conditions.

Technology:
  Some technological processes can grow exponentially.

A common exponential growth model is:
  P(t) = P₀ e^(kt)

where:
  P₀ = initial amount
  P(t) = amount after time t
  k = growth constant
  t = time

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXPONENTIAL DECAY IN REAL LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential decay occurs when a quantity decreases by a constant percentage over time.

Examples include:
  • Radioactive decay
  • Cooling processes
  • Medicine leaving the body
  • Depreciation models
  • Certain population decreases

A common decay model is:
  P(t) = P₀ e^(-kt)

where k > 0.

The negative exponent causes the quantity to decrease over time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT CHARACTERISTICS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property                   Exponential Function
  ───────────────────────────────────────────────────────────
  General Form               f(x) = aˣ
  Base                       a > 0, a ≠ 1
  Domain                     (-∞, ∞)
  Range                      (0, ∞)
  Y-intercept                (0, 1)
  X-intercept                None
  Horizontal Asymptote       y = 0
  Growth                     a > 1
  Decay                      0 < a < 1
  Special Function           eˣ
  Derivative of eˣ           eˣ
  Integral of eˣ             eˣ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  General Exponential Function:
    f(x) = aˣ

  Derivative:
    d/dx (aˣ) = aˣ ln a

  Special Derivative:
    d/dx (eˣ) = eˣ

  Chain Rule:
    d/dx (eᵘ) = eᵘ · u'

  Integral:
    ∫ eˣ dx = eˣ + C

  General Integral:
    ∫ aˣ dx = aˣ / ln a + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An Exponential Function is a function where the variable is in the exponent:
  f(x) = aˣ

If a > 1, the function shows exponential growth.
If 0 < a < 1, the function shows exponential decay.

The most important exponential function in Calculus is:
  eˣ

because its derivative and antiderivative are both:
  eˣ

The most important idea to remember is:

  Exponential functions change through repeated multiplication, which allows 
  them to model very rapid growth or decay.
  `,
  examples: [
    "f(x) = 2ˣ → exponential growth",
    "f(x) = (1/2)ˣ → exponential decay",
    "d/dx (eˣ) = eˣ",
    "d/dx (e^(3x)) = 3e^(3x)",
    "∫ eˣ dx = eˣ + C",
    "∫ 5eˣ dx = 5eˣ + C",
    "ln(eˣ) = x, e^(ln x) = x",
  ],
};

export default topic;