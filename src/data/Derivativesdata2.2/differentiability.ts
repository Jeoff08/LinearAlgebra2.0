const topic = {
  id: "differentiability",
  title: "Differentiability",
  summary:
    "Definition of differentiability, relationship with continuity, geometric meaning, common situations where differentiability fails, and one-sided derivatives.",
  details: `
Differentiability describes whether a function has a well-defined derivative at a particular point or throughout an interval.

In simple terms: A function is differentiable at a point if its derivative exists at that point.

The derivative tells us the instantaneous rate of change or the slope of the tangent line.

Therefore: Differentiable ⟺ Derivative Exists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES DIFFERENTIABLE MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = f(x)

A function is differentiable at x = a if the following limit exists as a finite number:

  f'(a) = lim(h→0) [f(a+h) - f(a)]/h

If this limit exists, then: f is differentiable at a.

If the limit does not exist, then: f is not differentiable at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIFFERENTIABILITY AND THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiability is directly connected to derivatives.

Example: f(x) = x²

Its derivative is: f'(x) = 2x

The derivative exists for every real number x.

Therefore: x² is differentiable everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GEOMETRIC MEANING OF DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, a function is differentiable at a point if it has a well-defined tangent line at that point.

Example: A smooth curve like f(x) = x² has a clear tangent line at every point.

Therefore, it is differentiable everywhere.

Think: Differentiable → Derivative exists → Tangent line exists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENTIABILITY VS. CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important relationships in Calculus.

If a function is differentiable at a point, then it must be continuous there:

  Differentiability ⇒ Continuity

However, the reverse is not always true:

  Continuity ≠ ⇒ Differentiability

A function can be continuous but not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: f(x) = |x|
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

The graph looks like a V-shaped curve.

It is continuous at x = 0 because: lim(x→0) |x| = 0 = f(0)

However, it is not differentiable at x = 0.

Why? Because the slope from the left is: -1

while the slope from the right is: 1

Since -1 ≠ 1, there is no single tangent slope.

Therefore: f(x) = |x| is continuous but not differentiable at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES |x| FAIL TO BE DIFFERENTIABLE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's examine its derivative from both sides.

For x < 0: |x| = -x, so f'(x) = -1

For x > 0: |x| = x, so f'(x) = 1

At x = 0:
  • Left-hand derivative: f'_-(0) = -1
  • Right-hand derivative: f'_+(0) = 1

For a derivative to exist: f'_-(0) = f'_+(0)

But: -1 ≠ 1

Therefore: f'(0) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THREE CONDITIONS FOR DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function to be differentiable at x = a, it must have a well-defined derivative.

In practice, check these important conditions:

1. The function must be defined: f(a) must exist.

2. The function must be continuous: There cannot be a discontinuity at a.

3. The left and right derivatives must agree: f'_-(a) = f'_+(a)

If all these conditions are satisfied, the function is differentiable at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. COMMON SITUATIONS WHERE DIFFERENTIABILITY FAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function may fail to be differentiable at:

① Discontinuities
  Example: Jump discontinuity.
  A function cannot be differentiable where it isn't continuous.

② Corners
  Example: f(x) = |x|
  The graph has a sharp corner.
  Corner → Derivative may not exist.

③ Cusps
  A cusp is a sharp pointed turn in a curve.
  The slopes from the two sides do not produce a common finite derivative.

④ Vertical Tangents
  A vertical tangent has an undefined/infinite slope.
  Therefore, the ordinary derivative does not exist as a finite number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DIFFERENTIABILITY ON AN INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can be differentiable not just at one point, but over an entire interval.

Example: f(x) = x³

has derivative: f'(x) = 3x²

which exists for every real number.

Therefore: f(x) = x³ is differentiable on (-∞, ∞)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIABILITY ON A CLOSED INTERVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function is defined on: [a, b]

To say that it is differentiable on the entire closed interval, we usually mean:
  • Differentiable on the interior (a, b)
  • Has the appropriate one-sided derivative at the endpoints

So: f differentiable on [a, b] means the function behaves smoothly throughout the interval, with one-sided behavior considered at the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE OF A DIFFERENTIABLE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ + 2x² - 5x + 1

This is a polynomial.

Its derivative is: f'(x) = 3x² + 4x - 5

This derivative exists for every real number.

Therefore: f(x) is differentiable everywhere.

Polynomial functions are generally very smooth and do not have corners, jumps, or vertical tangent problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE OF A NON-DIFFERENTIABLE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

At x = 0:
  • The function is continuous.
  • There is a sharp corner.
  • The left derivative is -1.
  • The right derivative is 1.

Therefore: f'(0) does not exist.

So the function is not differentiable at 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DIFFERENTIABILITY AND ONE-SIDED DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At a point a, we can examine the derivative from each side.

Left-hand derivative:
  f'_-(a) = lim(h→0⁻) [f(a+h) - f(a)]/h

Right-hand derivative:
  f'_+(a) = lim(h→0⁺) [f(a+h) - f(a)]/h

The derivative exists if: f'_-(a) = f'_+(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = { x², if x < 1; x + 1, if x ≥ 1 }

Let's examine differentiability at x = 1.

Step 1: Check continuity
  From the left: lim(x→1⁻) x² = 1
  From the right: lim(x→1⁺) (x + 1) = 2

Since 1 ≠ 2, the function is not continuous at x = 1.

Therefore: It cannot be differentiable at x = 1.

This illustrates an important shortcut: If a function is discontinuous at a point, it is automatically not differentiable there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important facts to remember is:

  If f is differentiable at a, then f is continuous at a.

Symbolically: f differentiable ⇒ f continuous

But: f continuous ≠ ⇒ f differentiable

The absolute value function demonstrates this perfectly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY DIFFERENTIABILITY MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiability is important because many Calculus concepts depend on the existence of derivatives.

It allows us to:
  • Find tangent lines
  • Determine rates of change
  • Analyze increasing/decreasing behavior
  • Find maximum and minimum points
  • Solve optimization problems
  • Study motion
  • Calculate velocity and acceleration
  • Approximate functions
  • Analyze curves

If a function is not differentiable at a point, many of these derivative-based techniques cannot be directly applied there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DIFFERENTIABILITY AND SMOOTHNESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A differentiable function is often described as being smooth at a point.

Example: f(x) = x² has no sharp corners or breaks.

Its graph smoothly changes direction.

By contrast: f(x) = |x| has a sharp corner at x = 0.

So a useful geometric intuition is: Smooth curve ≈ Differentiable

But remember that "smooth" is an intuition; the formal definition comes from the derivative limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DIFFERENTIABILITY AND THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a direct connection between these concepts:

If the function is differentiable:
  f'(a) exists
  Therefore: A unique tangent slope exists

If the derivative does not exist:
  f'(a) DNE
  Then there is no ordinary finite tangent slope at that point.

Therefore: Differentiability → Derivative → Tangent Line

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A USEFUL COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────┬─────────────────────────────────────┐
│ Concept                     │ Meaning                            │
├─────────────────────────────┼─────────────────────────────────────┤
│ Continuity                  │ The graph has no break at the      │
│                             │ point                              │
├─────────────────────────────┼─────────────────────────────────────┤
│ Differentiability           │ The graph has a well-defined       │
│                             │ derivative                         │
├─────────────────────────────┼─────────────────────────────────────┤
│ Derivative                  │ Instantaneous rate of change       │
├─────────────────────────────┼─────────────────────────────────────┤
│ Tangent line                │ Line with the instantaneous slope  │
├─────────────────────────────┼─────────────────────────────────────┤
│ Corner                      │ Can prevent differentiability      │
├─────────────────────────────┼─────────────────────────────────────┤
│ Discontinuity               │ Always prevents differentiability  │
└─────────────────────────────┴─────────────────────────────────────┘

The most important relationship is:

  Differentiability ⇒ Continuity

but:

  Continuity ≠ ⇒ Differentiability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. QUICK TEST FOR DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked: "Is this function differentiable at x = a?"

Use this process:

Step 1: Is f(a) defined?
  If no: Not differentiable

Step 2: Is the function continuous at a?
  If no: Not differentiable

Step 3: Check the left and right derivatives
  Calculate: f'_-(a) and f'_+(a)
  If f'_-(a) = f'_+(a): Differentiable
  If f'_-(a) ≠ f'_+(a): Not differentiable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Differentiability, remember:

  • Definition: f'(a) = lim(h→0) [f(a+h) - f(a)]/h exists as a finite value.
  • One-sided derivatives: f'_-(a) = f'_+(a) must hold for differentiability.
  • Fundamental relationship: Differentiability ⇒ Continuity (but not vice versa).
  • Differentiability fails at: discontinuities, corners, cusps, vertical tangents.

Easy way to remember:

  • Continuity = No Break
  • Differentiability = Clear Tangent Slope

And the hierarchy to remember is:

  Differentiable ⇒ Continuous

but not the other way around.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiability is a fundamental concept that determines whether a function has a well-defined derivative and tangent line.

Key concepts covered:

  ✓ What Does Differentiable Mean?
  ✓ Differentiability and the Derivative
  ✓ Geometric Meaning
  ✓ Differentiability vs. Continuity
  ✓ f(x) = |x| Example
  ✓ Why |x| Fails
  ✓ Three Conditions for Differentiability
  ✓ Common Situations Where Differentiability Fails
  ✓ Differentiability on an Interval
  ✓ Differentiability on a Closed Interval
  ✓ Examples of Differentiable Functions
  ✓ Examples of Non-Differentiable Functions
  ✓ One-Sided Derivatives
  ✓ Piecewise Functions
  ✓ Important Theorem
  ✓ Why Differentiability Matters
  ✓ Differentiability and Smoothness
  ✓ Quick Test
  `,
  examples: [
    "Check differentiability of f(x) = x² at x = 2 → differentiable",
    "Check differentiability of f(x) = |x| at x = 0 → not differentiable",
    "Check differentiability of f(x) = x³ at x = 1 → differentiable",
    "Differentiability ⇒ Continuity",
    "Continuity ≠ ⇒ Differentiability",
    "f(x) = |x| is continuous but not differentiable at x = 0",
    "Left derivative: f'_-(0) = -1, Right derivative: f'_+(0) = 1 → not differentiable",
    "Discontinuity always prevents differentiability",
    "Corner prevents differentiability",
    "Cusp prevents differentiability",
    "Vertical tangent prevents differentiability",
    "Polynomials are differentiable everywhere",
    "Piecewise function: check continuity first, then derivatives",
    "Differentiability → Derivative exists → Tangent line exists",
    "Smooth curve ≈ Differentiable",
    "Three conditions: defined, continuous, left = right derivatives",
  ],
};

export default topic;