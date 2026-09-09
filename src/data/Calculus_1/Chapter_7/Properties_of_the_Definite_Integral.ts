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

If the upper and lower limits of integration are the same, the definite integral is always zero. This property follows directly from the definition of the definite integral as the net signed area under a curve. When the interval has zero width (from a to a), there is no region over which to accumulate area, regardless of the function's values. No matter how complicated the function is, the integral over a single point is zero. This property is often used in conjunction with other properties, such as splitting intervals or evaluating integrals with variable limits. It is a simple but important rule that serves as a foundation for more complex manipulations.

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

Reversing the limits of integration changes the sign of the definite integral. This property reflects the orientation of the interval: integration from a to b accumulates area in one direction, while integrating from b to a accumulates in the opposite direction. The Fundamental Theorem of Calculus confirms this property, as evaluating F(b) - F(a) and F(a) - F(b) are negatives of each other. This property is useful when an integral is given with limits in a non-standard order, or when simplifying expressions involving definite integrals with reversed limits. It also plays a role in the additive property of intervals, as we can combine integrals over adjacent intervals.

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

The additive property states that the integral over a whole interval can be split into the sum of integrals over subintervals. If a < c < b, then the integral from a to b equals the integral from a to c plus the integral from c to b. This property reflects the fact that accumulation over the entire interval is the sum of accumulations over its parts. It is extremely useful for breaking down complicated integrals into simpler pieces, especially when the integrand changes behavior at some point (such as a piecewise function) or when the function crosses the x-axis and we need to compute geometric area. It also forms the basis for many numerical integration techniques and is a key step in deriving the Fundamental Theorem of Calculus.

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

A constant factor can be pulled out of a definite integral. If c is a constant, then ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx. This property follows from the linearity of integration and is a direct consequence of the Riemann sum definition: multiplying each rectangle's height by a constant multiplies the sum by that constant. This rule is frequently used to simplify integrals, especially when the constant is large or when it helps to isolate the variable part of the integrand. It is one of the basic operations in integration and is used in almost every definite integral evaluation.

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

The integral of a sum of functions is the sum of their integrals. This property is another expression of the linearity of integration. It allows us to integrate complex expressions term by term, which is particularly useful when dealing with polynomials or sums of known functions. For example, integrating x² + 3x from 0 to 2 is the same as integrating x² and 3x separately and adding the results. This rule, combined with the constant multiple rule, enables the integration of any linear combination of functions. It is a fundamental property that greatly simplifies the evaluation of definite integrals.

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

The integral of a difference of functions is the difference of their integrals. This property follows directly from the sum rule and the constant multiple rule (with c = -1). It allows us to handle subtraction in integrands by integrating each function separately and subtracting the results. For example, ∫₀² (x² - x) dx = ∫₀² x² dx - ∫₀² x dx. This rule is used extensively in problems where the integrand is a polynomial or a combination of functions, and it simplifies the process of integration by breaking down complex expressions into simpler components.

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

The constant multiple rule, sum rule, and difference rule can be combined into a single general property called linearity. This property states that the integral of a linear combination of functions is the corresponding linear combination of their integrals. In other words, integration is a linear operator. This means we can break down integrals of expressions like c f(x) + d g(x) into c times the integral of f plus d times the integral of g. This is one of the most powerful and frequently used properties of definite integrals. It allows us to integrate any function that can be expressed as a sum of simpler functions with constant coefficients. It is essential for solving problems in calculus and its applications.

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

The integral of a constant function c over [a, b] is simply c times the length of the interval. This follows from the definition of the definite integral as the area under the curve y = c, which is a rectangle with height c and width b - a. This is a special case of the constant multiple rule with f(x) = 1. It is a fundamental formula that is used frequently in integration, especially when constants appear in integrands. For example, ∫₂⁶ 4 dx = 4(6 - 2) = 16. This property is also useful for checking the reasonableness of integral evaluations and for solving problems involving constant rates of change.

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

If f(x) ≥ g(x) for all x in [a, b], then the integral of f is greater than or equal to the integral of g. This property is intuitive: if one function is always above another, the accumulated area under the higher function must be at least as large. This property is often used to prove inequalities involving integrals and to establish bounds on integrals. It is a direct consequence of the definition of the integral as a limit of sums: if each rectangle height for f is at least as large as the corresponding height for g, then the sum for f is at least as large. This property is a key tool in analysis and is used in many applications.

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

If f(x) ≥ 0 for all x in [a, b], then ∫ₐᵇ f(x) dx ≥ 0. This is a special case of the comparison property with g(x) = 0. It confirms that the signed area under a non-negative curve is non-negative. This property is essential for understanding that definite integrals can represent physical quantities such as area, volume, and total accumulation, which are inherently non-negative. It also plays a role in probability and statistics, where integrals of non-negative functions represent probabilities.

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

If f(x) ≤ 0 for all x in [a, b], then ∫ₐᵇ f(x) dx ≤ 0. This is the counterpart to the positive function property. It states that the integral of a non-positive function is non-positive. This makes sense because the signed area under a curve that lies entirely below the x-axis is negative. This property is important for understanding signed area and for interpreting definite integrals in physical contexts where quantities can be negative, such as displacement or net change.

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

If m ≤ f(x) ≤ M for all x in [a, b], then m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a). This property gives upper and lower bounds for the definite integral. It states that the integral lies between the areas of two rectangles: one with height equal to the minimum value m and one with height equal to the maximum value M. This is a useful tool for estimating integrals without computing them exactly, especially when the exact antiderivative is difficult to find. It is also used in proofs of the Mean Value Theorem for Integrals.

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

The absolute value of a definite integral is less than or equal to the integral of the absolute value of the function. This is a direct consequence of the triangle inequality and the fact that the integral sums signed areas. It is an important inequality in analysis and is used in many proofs and applications. For example, it allows us to bound the size of an integral by integrating the absolute value of the function. This property is particularly useful when dealing with functions that can be negative, as it provides a way to control the magnitude of the integral.

One important inequality is:
  |∫ₐᵇ f(x) dx| ≤ ∫ₐᵇ |f(x)| dx

Meaning:
  The absolute value of the total signed accumulation cannot be greater than the total accumulation of the absolute values.

This happens because positive and negative areas can cancel each other.

Example:
  Suppose part of the graph is above the x-axis and another part is below it.

  The definite integral might be:
    2 + (-2) = 0

  However, the total geometric area is:
    2 + 2 = 4

Therefore:
  Signed area ≠ Total geometric area

in many situations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SYMMETRY: EVEN FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even functions are symmetric about the y-axis, satisfying f(-x) = f(x). For such functions, the integral over a symmetric interval [-a, a] is twice the integral from 0 to a. This property follows from the symmetry of the graph and the fact that the area on the left side equals the area on the right side. This is a powerful simplification because it reduces the interval of integration by half and avoids evaluating the integral on the negative side. It is frequently used to evaluate integrals of even functions, such as x², cos x, and |x|. Recognizing even symmetry can save a significant amount of work.

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

Odd functions are symmetric about the origin, satisfying f(-x) = -f(x). For such functions, the integral over a symmetric interval [-a, a] is always zero. This is because the positive area on the right side of the y-axis is exactly canceled by the negative area on the left side. This property is a powerful tool for evaluating integrals of odd functions, such as x³, sin x, and tan x, over symmetric intervals. Recognizing odd symmetry can instantly reduce the integral to zero, saving time and effort. This is one of the most useful symmetry properties in calculus.

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

This table summarizes all the key properties of the definite integral. It is a valuable reference for solving problems and for understanding the behavior of integrals. The properties are organized by category: basic properties (equal limits, reverse limits), algebraic properties (constant multiple, sum, difference, linearity), interval properties (additive over intervals), bounding properties (comparison, positive function, negative function, bounding), and symmetry properties (even and odd functions). Memorizing and understanding these properties is essential for success in calculus.

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

The properties of definite integrals are essential tools for simplifying, evaluating, and understanding integrals. The linearity properties allow us to break down complex integrands into simpler parts and to factor out constants. The additive property over intervals lets us split integrals at convenient points. The comparison and bounding properties provide estimates and bounds. Symmetry properties reduce the work for even and odd functions. Together, these properties form a toolkit that makes integration manageable and powerful. They are used in countless applications, from computing areas and volumes to solving differential equations and analyzing physical systems. Mastering these properties is a key step in becoming proficient in calculus.

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