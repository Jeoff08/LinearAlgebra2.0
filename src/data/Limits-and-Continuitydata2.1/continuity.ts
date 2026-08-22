const topic = {
  id: "continuity",
  title: "Continuity",
  summary:
    "Definition of continuity at a point, continuity on an interval, types of discontinuities, continuity of common functions, and piecewise functions.",
  details: `
Continuity is a fundamental concept in Calculus that describes whether a function has a smooth, unbroken behavior at a particular point. In simple terms, a function is continuous if you can draw its graph without lifting your pencil from the paper around that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONTINUITY AT A POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) is continuous at x = a if all three conditions are satisfied:

  lim(x→a) f(x) = f(a)

This means:
  • f(a) exists
  • lim(x→a) f(x) exists
  • The limit equals the function value

So: lim(x→a) f(x) = f(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXAMPLE: CONTINUITY AT A POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² at x = 2

First: f(2) = 2² = 4

Then: lim(x→2) x² = 4

Since: lim(x→2) f(x) = f(2)

the function is continuous at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONTINUITY ON AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous on an interval if it is continuous at every point in that interval.

Example: f(x) = x² is continuous for all real numbers: (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is discontinuous when there is some kind of break, hole, jump, or infinite behavior in its graph.

Common types include:

Removable Discontinuity
───────────────────────

This occurs when there is a hole in the graph.

Example: f(x) = (x² - 4)/(x - 2)

Factor: f(x) = (x - 2)(x + 2)/(x - 2)

Cancel: f(x) = x + 2, x ≠ 2

There is a hole at x = 2.

Jump Discontinuity
───────────────────

A jump occurs when the left-hand and right-hand limits are different:

  lim(x→a⁻) f(x) ≠ lim(x→a⁺) f(x)

The graph essentially jumps from one value to another.

Infinite Discontinuity
───────────────────────

This happens when the function approaches infinity near a point.

Example: f(x) = 1/x

At x = 0:
  lim(x→0⁺) 1/x = ∞
  lim(x→0⁻) 1/x = -∞

Therefore, x = 0 is a point of discontinuity and is associated with a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CONTINUITY OF COMMON FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many common functions are continuous wherever they are defined.

Function: Polynomial
Continuous Where?: Everywhere

Function: Rational
Continuous Where?: Wherever denominator ≠ 0

Function: Exponential
Continuous Where?: Everywhere

Function: Logarithmic
Continuous Where?: Where its argument > 0

Function: Sine
Continuous Where?: Everywhere

Function: Cosine
Continuous Where?: Everywhere

Function: Tangent
Continuous Where?: Where cos(x) ≠ 0

Function: Square root
Continuous Where?: Where x ≥ 0

Example: f(x) = (x + 1)/(x - 3)

This is continuous everywhere except: x = 3

because the denominator becomes zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONTINUITY OF PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For piecewise functions, you need to check whether the pieces connect properly.

Suppose: f(x) = { x + 1, if x < 2; 5, if x = 2; x + 1, if x > 2 }

At x = 2:

Left-hand limit: lim(x→2⁻) f(x) = 3

Right-hand limit: lim(x→2⁺) f(x) = 3

So: lim(x→2) f(x) = 3

But: f(2) = 5

Since 3 ≠ 5, the function is not continuous at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONTINUITY AND LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity is strongly connected to limits.

The key relationship is: Continuity at a ⟺ lim(x→a) f(x) = f(a)

So when checking continuity, you are essentially asking: Does the function's value at the point agree with what the function approaches?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT CONTINUITY THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f and g are continuous at a, then:

Sum: f + g is continuous.

Difference: f - g is continuous.

Product: f·g is continuous.

Quotient: f/g is continuous as long as g(a) ≠ 0.

Composition: If f and g are continuous, then f(g(x)) is also continuous wherever it is defined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: QUICK CONTINUITY CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Determine whether: f(x) = x³ + 2x - 5 is continuous at x = 1.

Because f(x) is a polynomial, it is continuous everywhere.

Therefore: Continuous at x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: CHECKING CONTINUITY AT A POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = (x² - 1)/(x - 1) for x ≠ 1, and f(1) = 2

Check continuity at x = 1.

First: f(1) = 2

Now find the limit: lim(x→1) (x² - 1)/(x - 1)

Factor: (x - 1)(x + 1)/(x - 1) = x + 1

Evaluate: 1 + 1 = 2

So: lim(x→1) f(x) = 2

Since lim(x→1) f(x) = f(1) = 2, the function is continuous at x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTERMEDIATE VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Intermediate Value Theorem (IVT) states:

If f is continuous on [a, b] and k is any value between f(a) and f(b), then there exists at least one c in [a, b] such that f(c) = k.

This theorem is used to show that a function takes on a particular value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Continuity, remember:

  • A function is continuous if you can draw it without lifting your pencil.
  • The three conditions: f(a) exists, lim(x→a) f(x) exists, and they are equal.
  • Polynomials, exponentials, sine, and cosine are continuous everywhere.
  • Rational functions are continuous except where the denominator is zero.
  • Removable discontinuities are holes; jump discontinuities are breaks; infinite discontinuities have vertical asymptotes.
  • The Intermediate Value Theorem is a powerful application of continuity.

The key idea to remember is:

  Think of continuity as: No break + No hole + No jump. And remember the most important test: lim(x→a) f(x) = f(a). If all three requirements are satisfied, the function is continuous at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity is a fundamental concept in Calculus that serves as the foundation for limits, derivatives, and integrals.

Key concepts covered:

  ✓ Continuity at a Point
  ✓ Continuity on an Interval
  ✓ Removable Discontinuity
  ✓ Jump Discontinuity
  ✓ Infinite Discontinuity
  ✓ Continuity of Common Functions
  ✓ Piecewise Functions
  ✓ Continuity and Limits
  ✓ Sum, Difference, Product, Quotient
  ✓ Composition of Continuous Functions
  ✓ Intermediate Value Theorem
  `,
  examples: [
    "Check continuity of f(x) = x² at x = 2 → continuous",
    "Check continuity of f(x) = (x² - 4)/(x - 2) → hole at x = 2",
    "Check continuity of f(x) = 1/x → discontinuity at x = 0",
    "Check continuity of f(x) = {x+1 if x<2, 5 if x=2, x+1 if x>2} → discontinuity at x = 2",
    "Check continuity of f(x) = x³ + 2x - 5 at x = 1 → continuous",
    "Check continuity of f(x) = (x² - 1)/(x - 1), f(1) = 2 → continuous",
    "Identify type: hole → removable discontinuity",
    "Identify type: different left and right limits → jump discontinuity",
    "Identify type: function approaches infinity → infinite discontinuity",
    "Polynomial function continuous everywhere",
    "Rational function continuous where denominator ≠ 0",
    "Exponential function continuous everywhere",
    "Logarithmic function continuous where argument > 0",
    "Square root function continuous where x ≥ 0",
    "Use Intermediate Value Theorem: f continuous on [a,b] takes all values between f(a) and f(b)",
    "Composition of continuous functions is continuous",
  ],
};

export default topic;