// filename: properties-of-the-definite-integral.ts

const topic = {
  id: "properties-of-the-definite-integral",
  title: "Properties of the Definite Integral",
  summary:
    "Rules that make integrals easier to understand, simplify, and evaluate, including zero width, reversing limits, additivity, constant multiple, sum, difference, and symmetry properties.",
  details: `
The properties of the definite integral are important rules that make integrals easier to understand, simplify, and evaluate.

Recall the general form of a definite integral:
  ∫ₐᵇ f(x) dx

where:
  f(x) is the integrand
  a is the lower limit
  b is the upper limit
  dx indicates that the variable of integration is x

A definite integral represents the net accumulation or signed area of a function over an interval.

The properties below allow us to manipulate definite integrals without changing their mathematical meaning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INTEGRAL WITH EQUAL LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the upper and lower limits are the same:
  ∫ₐᵃ f(x) dx = 0

Why?
  There is no interval between a and a.
  The width of the interval is a - a = 0.
  Since there is no horizontal distance, there is no accumulated area.

Example:
  ∫₃³ (x² + 1) dx = 0

Therefore:
  0

No matter what the function is, if both limits are equal, the definite integral is always zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. REVERSING THE LIMITS OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If we reverse the limits, the sign changes:
  ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx

Equivalently:
  ∫ᵇₐ f(x) dx = -∫ₐᵇ f(x) dx

Why?
  A definite integral has a direction.
  Normally: a → b
  When we reverse the direction: b → a
  the accumulated value changes sign.

Example:
  Suppose ∫₁⁴ x dx = 15/2

Then:
  ∫₄¹ x dx = -15/2

Therefore:
  ∫₄¹ x dx = -15/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ADDITIVE PROPERTY OVER AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a < c < b.

Then:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

This means that we can divide an interval into smaller parts.

Visual Idea:
  The total accumulation from a to b can be divided into:
    a → c and c → b

Therefore:
  Whole Interval = First Part + Second Part

Example:
  ∫₀⁵ x² dx

can be split at x = 2:
  ∫₀⁵ x² dx = ∫₀² x² dx + ∫₂⁵ x² dx

The total accumulated value remains the same.

This property is especially useful when:
  • A function changes behavior
  • A graph crosses the x-axis
  • Different formulas are used on different intervals
  • The problem is piecewise

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CONSTANT MULTIPLE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant can be moved outside the integral:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

where c is a constant.

Example:
  ∫₀³ 5x² dx

Move 5 outside:
  5∫₀³ x² dx

Evaluate:
  5[x³/3]₀³ = 5(9) = 45

This works because integration represents repeated addition or accumulation. Multiplying every small piece by a constant is equivalent to multiplying the final total by that constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SUM RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of a sum equals the sum of the integrals:
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

Example:
  ∫₀² (x² + 3x) dx

Separate the terms:
  = ∫₀² x² dx + ∫₀² 3x dx

Evaluate:
  = [x³/3]₀² + [3x²/2]₀²
  = 8/3 + 6
  = 26/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIFFERENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of a difference equals the difference of the integrals:
  ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

Example:
  ∫₀² (x² - x) dx

Separate:
  = ∫₀² x² dx - ∫₀² x dx

Evaluate:
  = 8/3 - 2
  = 2/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LINEARITY PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The constant multiple rule, sum rule, and difference rule can be combined into one major property called linearity.

  ∫ₐᵇ [c f(x) + d g(x)] dx = c ∫ₐᵇ f(x) dx + d ∫ₐᵇ g(x) dx

where c and d are constants.

Example:
  Evaluate: ∫₀² (3x² + 4x - 5) dx

Separate the integral:
  = 3∫₀² x² dx + 4∫₀² x dx - 5∫₀² 1 dx

Now evaluate each part:
  3(8/3) + 4(2) - 5(2)
  = 8 + 8 - 10
  = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRAL OF A CONSTANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) = c, where c is a constant, then:
  ∫ₐᵇ c dx = c(b - a)

Why?
  The graph y = c forms a rectangle.
  The rectangle has:
    Height = c
    Width = b - a
  Therefore: Area = c(b - a)

Example:
  ∫₂⁶ 4 dx

Using the formula:
  4(6 - 2) = 4(4) = 16

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COMPARISON PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) ≥ g(x) for every value of x in [a, b].

Then:
  ∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx

Meaning:
  If one function is always above another function on the same interval, then its accumulated value is greater than or equal to the accumulated value of the lower function.

Example:
  Suppose x² + 2 ≥ x².

Then:
  ∫₀³ (x² + 2) dx ≥ ∫₀³ x² dx

The first function is always 2 units higher, so its integral must also be larger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POSITIVE FUNCTION PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≥ 0 on the interval [a, b], then:
  ∫ₐᵇ f(x) dx ≥ 0

This makes sense because a function above the x-axis contributes positive signed area.

Example:
  Since x² ≥ 0 for every real number:
    ∫₋₂² x² dx ≥ 0

In fact:
  ∫₋₂² x² dx = [x³/3]₋₂² = 16/3

which is positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. NEGATIVE FUNCTION PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f(x) ≤ 0 on [a, b], then:
  ∫ₐᵇ f(x) dx ≤ 0

A function below the x-axis contributes negative signed area.

Example:
  Suppose f(x) = -x².

Since -x² ≤ 0, we know:
  ∫₀³ -x² dx ≤ 0

Evaluate:
  -[x³/3]₀³ = -9

Therefore:
  -9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. BOUNDING PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose m ≤ f(x) ≤ M for all x in [a, b].

Then:
  m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)

This property gives us a lower and upper bound for an integral.

Meaning:
  If the function is always between two values m and M, then the integral must also fall between the areas of two rectangles.

Example:
  Suppose 2 ≤ f(x) ≤ 5 on [1, 4].

Then:
  2(4 - 1) ≤ ∫₁⁴ f(x) dx ≤ 5(4 - 1)

Therefore:
  6 ≤ ∫₁⁴ f(x) dx ≤ 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ABSOLUTE VALUE PROPERTY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One important inequality is:
  ∫ₐᵇ f(x) dx ≤ ∫ₐᵇ f(x) dx

Meaning:
  The absolute value of the total signed accumulation cannot be greater than the total accumulation of the absolute values.

This happens because positive and negative areas can cancel each other.

Example:
  Suppose part of the graph is above the x-axis and another part is below it.

  The definite integral might be:
    2 + (-2) = 0

  However, the total geometric area is:
    2 + -2 = 4

Therefore:
  Signed area ≠ Total geometric area

in many situations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SYMMETRY: EVEN FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is even if:
  f(-x) = f(x)

Its graph is symmetric about the y-axis.

For an even function:
  ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

Example:
  f(x) = x²

Since (-x)² = x², the function is even.

Therefore:
  ∫₋₃³ x² dx = 2∫₀³ x² dx

Calculate:
  2[x³/3]₀³ = 2(9) = 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. SYMMETRY: ODD FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is odd if:
  f(-x) = -f(x)

Its graph has rotational symmetry about the origin.

For an odd function:
  ∫₋ₐᵃ f(x) dx = 0

Example:
  f(x) = x³

Check:
  f(-x) = (-x)³ = -x³

Therefore, x³ is odd.

Thus:
  ∫₋₂² x³ dx = 0

The negative accumulation on the left side cancels the positive accumulation on the right side.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SUMMARY TABLE OF PROPERTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property                Formula
  ────────────────────────────────────────────────────────────────────────────────────
  Equal limits            ∫ₐᵃ f(x) dx = 0
  Reverse limits          ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx
  Add intervals           ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  Constant multiple       ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx
  Sum                     ∫ₐᵇ (f + g) dx = ∫ₐᵇ f dx + ∫ₐᵇ g dx
  Difference              ∫ₐᵇ (f - g) dx = ∫ₐᵇ f dx - ∫ₐᵇ g dx
  Constant                ∫ₐᵇ c dx = c(b - a)
  Comparison              f ≥ g ⇒ ∫ f ≥ ∫ g
  Positive function       f ≥ 0 ⇒ ∫ f ≥ 0
  Negative function       f ≤ 0 ⇒ ∫ f ≤ 0
  Even function           ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx
  Odd function            ∫₋ₐᵃ f(x) dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The properties of definite integrals allow us to simplify, break apart, compare, and evaluate accumulated quantities.

The most important group of rules is called linearity:
  ∫ₐᵇ [c f(x) + d g(x)] dx = c ∫ₐᵇ f(x) dx + d ∫ₐᵇ g(x) dx

Another important idea is the ability to split intervals:
  ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx

Finally, remember that definite integrals represent signed accumulation:
  • Above the x-axis → Positive
  • Below the x-axis → Negative
  • Equal positive and negative contributions → May cancel to zero

Understanding these properties makes solving definite integral problems much easier and prepares you for more advanced topics such as the Fundamental Theorem of Calculus, applications of integration, area between curves, volumes, and differential equations.
  `,
  examples: [
    "∫₃³ (x² + 1) dx = 0",
    "∫₄¹ x dx = -15/2 when ∫₁⁴ x dx = 15/2",
    "∫₀⁵ x² dx = ∫₀² x² dx + ∫₂⁵ x² dx",
    "∫₀³ 5x² dx = 5∫₀³ x² dx = 45",
    "∫₀² (x² + 3x) dx = 8/3 + 6 = 26/3",
    "∫₋₂² x² dx = 2∫₀² x² dx = 16/3 (even function)",
    "∫₋₂² x³ dx = 0 (odd function)",
  ],
};

export default topic;