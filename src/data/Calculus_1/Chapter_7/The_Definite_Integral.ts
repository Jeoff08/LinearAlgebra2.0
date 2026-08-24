// filename: the-definite-integral.ts

const topic = {
  id: "the-definite-integral",
  title: "The Definite Integral",
  summary:
    "A fundamental concept in calculus used to find the accumulated quantity over an interval, representing signed area under a curve, defined as the limit of Riemann sums.",
  details: `
A definite integral is a fundamental concept in Calculus used to find the accumulated quantity over an interval. One of its most common applications is finding the signed area under a curve.

The general form is:
  ∫ₐᵇ f(x) dx

It represents the accumulation of the function f(x) from x = a to x = b.

The symbols a and b are called the limits of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE PARTS OF A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ₐᵇ f(x) dx

Each part has a meaning:

  Part            Meaning
  ──────────────┼─────────────────────────────────────────────────
  ∫               Integral symbol; represents accumulation
  a               Lower limit or starting value
  b               Upper limit or ending value
  f(x)            Integrand or function being integrated
  dx              Indicates that the variable is x
  ∫ₐᵇ f(x) dx     Accumulated value from a to b

The notation:
  ∫ₐᵇ

means:
  Add infinitely many extremely small quantities from x = a to x = b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before Calculus, finding the exact area under a curved graph was difficult.

For example, suppose we have:
  y = f(x)

between:
  x = a and x = b

Calculus solves this problem by dividing the region into many tiny rectangles.

Each rectangle has approximately:
  Width: Δx
  Height: f(xᵢ)

Therefore, the area of one rectangle is:
  f(xᵢ) Δx

Adding all the small rectangles gives a Riemann Sum:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

As the number of rectangles becomes larger:
  n → ∞

their widths become smaller:
  Δx → 0

The approximation approaches the exact accumulated value:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

This is the fundamental definition of the definite integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. VISUAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫₀³ x² dx

This represents the signed area under y = x² from x = 0 to x = 3.

The graph can be imagined as a curved region. Instead of measuring the entire curved region at once, Calculus adds together infinitely many tiny pieces of area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FROM RIEMANN SUMS TO DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship between Riemann sums and definite integrals is extremely important:

  Riemann Sum → Limit → Definite Integral

A Riemann sum with a finite number of rectangles gives an approximation:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

But as n → ∞, we obtain:
  ∫ₐᵇ f(x) dx

Therefore:
  Definite Integral = Exact accumulation obtained from infinitely many tiny pieces

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DEFINITE INTEGRAL AS SIGNED AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One important thing to understand is that a definite integral gives signed area, not always ordinary geometric area.

Above the x-axis:
  If f(x) > 0, then ∫ₐᵇ f(x) dx > 0.
  The contribution is positive.

Below the x-axis:
  If f(x) < 0, then ∫ₐᵇ f(x) dx < 0.
  The contribution is negative.

Example:
  Suppose f(x) = -x from x = 0 to x = 2.

  Then:
    ∫₀² -x dx = [-x²/2]₀² = -2

  The definite integral is -2.

  The negative sign means that the region lies below the x-axis.

  However, the actual geometric area is:
    2 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EVALUATING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most common method for evaluating a definite integral uses the Fundamental Theorem of Calculus.

If:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This means:
  • Find the antiderivative.
  • Substitute the upper limit.
  • Substitute the lower limit.
  • Subtract.

This is often written as:
  [F(x)]ₐᵇ

which means:
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1: SIMPLE DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀³ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

Therefore:
  ∫₀³ x² dx = [x³/3]₀³

Step 2: Substitute the upper limit
  3³/3 = 9

Step 3: Substitute the lower limit
  0³/3 = 0

Step 4: Subtract
  9 - 0 = 9

Therefore:
  ∫₀³ x² dx = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2: POLYNOMIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁³ (2x + 1) dx

Step 1: Find the antiderivative
  ∫ (2x + 1) dx = x² + x

Step 2: Apply the limits
  [x² + x]₁³

This means:
  (3² + 3) - (1² + 1)
  = (9 + 3) - (1 + 1)
  = 12 - 2
  = 10

Therefore:
  ∫₁³ (2x + 1) dx = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3: CONSTANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₂⁵ 4 dx

The antiderivative of 4 is:
  4x

Therefore:
  [4x]₂⁵ = 4(5) - 4(2)
  = 20 - 8
  = 12

This also makes sense geometrically.

The graph y = 4 creates a rectangle with:
  Height = 4
  Width = 5 - 2 = 3

Therefore:
  A = (4)(3) = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus connects:
  Differentiation and Integration

There are two major ideas.

Part 1: Accumulation Function
  Suppose F(x) = ∫ₐˣ f(t) dt.
  Then F'(x) = f(x).
  This means that differentiation can undo the accumulation process.

Part 2: Evaluation of Definite Integrals
  If F'(x) = f(x), then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
  This is the formula most commonly used to calculate definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DEFINITE INTEGRAL VS. INDEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important not to confuse these two concepts.

  Definite Integral             Indefinite Integral
  ──────────────────────────────────────────────────────────────────────
  ∫ₐᵇ f(x) dx                    ∫ f(x) dx
  Has limits                     No limits
  Produces a number              Produces a function
  Represents accumulation        Represents a family of antiderivatives
  Usually no +C                  Includes +C

Example of an Indefinite Integral:
  ∫ x² dx = x³/3 + C

Example of a Definite Integral:
  ∫₀³ x² dx = 9

Notice that the definite integral produces a specific numerical result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT PROPERTIES OF DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Same Upper and Lower Limit:
  ∫ₐᵃ f(x) dx = 0
  There is no interval, so there is no accumulation.

2. Reversing the Limits:
  ∫ᵇₐ f(x) dx = -∫ₐᵇ f(x) dx
  Reversing the direction changes the sign.

3. Splitting an Integral:
  If a < c < b, then:
    ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫꜀ᵇ f(x) dx
  This allows us to divide a large interval into smaller intervals.

4. Constant Multiple Rule:
  ∫ₐᵇ c f(x) dx = c ∫ₐᵇ f(x) dx

5. Sum Rule:
  ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

6. Difference Rule:
  ∫ₐᵇ [f(x) - g(x)] dx = ∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DEFINITE INTEGRAL AND AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When f(x) ≥ 0 on the interval [a, b], the definite integral gives the actual area:
  A = ∫ₐᵇ f(x) dx

However, when the function crosses the x-axis, the definite integral may subtract areas below the axis.

For total geometric area:
  A = ∫ₐᵇ f(x) dx

or split the integral at the points where f(x) = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: FUNCTION CROSSING THE X-AXIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = x - 1

on:
  [0, 2]

The graph crosses the x-axis when:
  x - 1 = 0
  x = 1

The definite integral is:
  ∫₀² (x - 1) dx

Because the negative area from 0 to 1 and positive area from 1 to 2 are equal, the result is:
  0

But the actual geometric area is not zero.

To find the total area:
  A = ∫₀¹ (x - 1) dx + ∫₁² (x - 1) dx

The total area is:
  1 square unit

This is a very important distinction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. GENERAL STEPS FOR EVALUATING A DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Identify the Integrand
  Example: ∫₁⁴ (3x² + 2x) dx
  The integrand is: 3x² + 2x

Step 2: Find the Antiderivative
  ∫ (3x² + 2x) dx = x³ + x²

Step 3: Apply the Limits
  [x³ + x²]₁⁴

Step 4: Substitute the Upper Limit
  4³ + 4² = 64 + 16 = 80

Step 5: Substitute the Lower Limit
  1³ + 1² = 1 + 1 = 2

Step 6: Subtract
  80 - 2 = 78

Therefore:
  ∫₁⁴ (3x² + 2x) dx = 78

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Lower Limit
  Remember: F(b) - F(a)
  You must substitute both limits.

Mistake 2: Using F(a) - F(b)
  The correct order is:
    Upper Limit - Lower Limit
  or:
    F(b) - F(a)

Mistake 3: Adding +C
  For a definite integral ∫ₐᵇ f(x) dx, you normally do not include +C
  because the constants cancel when subtracting:
    [F(x) + C]ₐᵇ = (F(b) + C) - (F(a) + C) = F(b) - F(a)

Mistake 4: Confusing Signed Area with Total Area
  A definite integral can be negative or zero.
  But physical geometric area cannot be negative.
  Always check whether the graph crosses the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general form is:
  ∫ₐᵇ f(x) dx

It represents the accumulation of f(x) from a to b.

The definite integral is defined using Riemann sums:
  ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

The most common method for evaluating it is the Fundamental Theorem of Calculus:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

where:
  F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definite Integral = Accumulation of infinitely many tiny quantities

It is one of the most important concepts in Calculus because it connects areas, Riemann sums, antiderivatives, and real-world accumulation problems such as distance, velocity, economics, probability, and many other applications.
  `,
  examples: [
    "∫₀³ x² dx = [x³/3]₀³ = 9",
    "∫₁³ (2x + 1) dx = [x² + x]₁³ = 10",
    "∫₂⁵ 4 dx = [4x]₂⁵ = 12",
    "∫₀² -x dx = [-x²/2]₀² = -2 (signed area)",
    "∫₀² (x - 1) dx = 0 (signed), total geometric area = 1",
    "∫ₐᵇ f(x) dx = F(b) - F(a) (FTC)",
    "Definite integral definition: lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx",
  ],
};

export default topic;