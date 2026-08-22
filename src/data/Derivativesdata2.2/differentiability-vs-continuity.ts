const topic = {
  id: "differentiability-vs-continuity",
  title: "Differentiability vs. Continuity",
  summary:
    "Comparison of differentiability and continuity, the relationship between them, examples, and common misconceptions.",
  details: `
Continuity and differentiability are closely related concepts in Calculus, but they are not the same thing.

The simplest way to remember the difference is: Continuity asks whether a function has a break. Differentiability asks whether a function has a well-defined slope.

The most important relationship is: Differentiability ⇒ Continuity, but Continuity ≠ ⇒ Differentiability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS CONTINUITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) is continuous at x = a if the following three conditions are satisfied:

Condition 1: The function is defined: f(a) exists.
Condition 2: The limit exists: lim(x→a) f(x) exists.
Condition 3: The limit equals the function value: lim(x→a) f(x) = f(a).

Therefore: f is continuous at a ⟺ lim(x→a) f(x) = f(a).

Simple interpretation: The graph has no break, hole, or jump at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS DIFFERENTIABILITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is differentiable at x = a if its derivative exists there.

The derivative is: f'(a) = lim(h→0) [f(a+h) - f(a)]/h

If this limit exists as a finite number, then: f is differentiable at a.

Simple interpretation: The graph has a well-defined tangent slope at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MAIN DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity: Concerns whether the graph has a break
Differentiability: Concerns whether the graph has a well-defined slope

Continuity: Uses limits of function values
Differentiability: Uses limits of difference quotients

Continuity: Requires the function to be connected at the point
Differentiability: Requires a unique finite derivative

Continuity: A function can be continuous but not differentiable
Differentiability: A differentiable function must be continuous

Continuity: Discontinuities prevent continuity
Differentiability: Corners, cusps, and vertical tangents can prevent differentiability

So: Continuity = No Break, Differentiability = Well-Defined Slope

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MOST IMPORTANT RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a function is differentiable at a point, then it is automatically continuous there.

  Differentiable ⇒ Continuous

But the reverse is not necessarily true:

  Continuous ≠ ⇒ Differentiable

This is one of the most important facts in introductory Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DOES DIFFERENTIABILITY IMPLY CONTINUITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f'(a) exists.

Then: f'(a) = lim(h→0) [f(a+h) - f(a)]/h

If this limit exists, then the function cannot have a sudden jump, hole, or break at a.

Therefore: f'(a) exists ⇒ f is continuous at a.

In other words: A function cannot have a well-defined instantaneous slope at a broken point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. BUT CONTINUITY DOES NOT GUARANTEE DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where students often get confused.

A function can be perfectly continuous but still fail to have a derivative.

The most famous example is: f(x) = |x|

At x = 0, the graph has a sharp corner.

The function is continuous because: lim(x→0) |x| = 0 = f(0)

But the derivative does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY |x| IS NOT DIFFERENTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = |x|, we can write: f(x) = { -x, if x < 0; x, if x ≥ 0 }

For the left side: f'(x) = -1

For the right side: f'(x) = 1

At x = 0: f'_-(0) = -1 while f'_+(0) = 1

Since -1 ≠ 1, the derivative does not exist.

Therefore: |x| is continuous at 0 but not differentiable at 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GRAPHICAL DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuous function:
  A continuous function has no break at the point.
  You can imagine drawing the graph without lifting your pencil.
  No break.

Differentiable function:
  A differentiable function must be smooth enough to have a single tangent line at the point.
  One clear tangent slope.

A sharp corner can be continuous but not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DISCONTINUITY AUTOMATICALLY MEANS NOT DIFFERENTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a function has a jump discontinuity.

Example: f(x) = { x, if x < 0; x + 2, if x ≥ 0 }

At x = 0, the left-hand limit is: 0 while the right-hand limit is: 2

Therefore: lim(x→0) f(x) does not exist.

So the function is not continuous.

Since differentiability requires continuity: Not continuous ⇒ Not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. COMMON CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several important situations to remember.

Case 1: Continuous and Differentiable
  Example: f(x) = x²
  Continuous ✓, Differentiable ✓

Case 2: Continuous but Not Differentiable
  Example: f(x) = |x| at x = 0
  Continuous ✓, Differentiable ✗

Case 3: Not Continuous and Not Differentiable
  A jump, hole, or infinite discontinuity gives:
  Continuous ✗, Differentiable ✗

Case 4: Differentiable but Not Continuous
  This is impossible.
  Differentiable but not continuous = impossible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TYPES OF POINTS WHERE DIFFERENTIABILITY FAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function may be continuous but not differentiable because of:

Sharp corners:
  Example: f(x) = |x|

Cusps:
  A sharp pointed turn in the graph.

Vertical tangents:
  The tangent becomes vertical, so its slope is not finite.

Discontinuities:
  If there is a hole, a jump, or an infinite discontinuity, the function cannot be differentiable there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. CONTINUITY AND DIFFERENTIABILITY USING LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The definitions use different limits.

Continuity: lim(x→a) f(x) = f(a)
  It asks: Does the function approach its actual value?

Differentiability: lim(h→0) [f(a+h) - f(a)]/h
  It asks: Does the function have a definite instantaneous rate of change?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity is about the behavior of the function itself.

Differentiability is about the behavior of the slope.

Think of a road:
  • Continuity: The road has no sudden gap.
  • Differentiability: The road is smooth enough that you can determine its direction at every point.

A road can be connected but have a sharp corner. That's like: Continuous but not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: POLYNOMIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x³ - 4x + 2

This is a polynomial.

Polynomials are continuous everywhere and differentiable everywhere.

Its derivative is: f'(x) = 3x² - 4

which exists for every real number.

Therefore: f is continuous and differentiable everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE: ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = |x|

At x = 0:

Continuity: lim(x→0) |x| = 0 and f(0) = 0 → Continuous

Differentiability: Left derivative = -1, Right derivative = 1 → Not differentiable

This is the most important example for understanding the difference.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A HIERARCHY TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of differentiability as a stronger condition than continuity.

  Differentiable → Continuous

But:

  Continuous ≠ → Differentiable

So differentiability gives us continuity "for free," but continuity does not give us differentiability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK TEST FOR A PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you're asked: "Is the function continuous and differentiable at x = a?"

Use this order:

Step 1 — Check continuity
  Determine whether: lim(x→a) f(x) = f(a)
  If this fails: Not continuous and therefore not differentiable.

Step 2 — Check differentiability
  If the function is continuous, check: f'_-(a) = f'_+(a)
  If they are equal: Differentiable.
  If they are different: Not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Situation: Smooth curve
Continuous?: ✓
Differentiable?: ✓

Situation: Polynomial
Continuous?: ✓
Differentiable?: ✓

Situation: Sharp corner
Continuous?: ✓
Differentiable?: ✗

Situation: Cusp
Continuous?: ✓
Differentiable?: ✗

Situation: Vertical tangent
Continuous?: ✓*
Differentiable?: ✗

Situation: Hole
Continuous?: ✗
Differentiable?: ✗

Situation: Jump
Continuous?: ✗
Differentiable?: ✗

Situation: Infinite discontinuity
Continuous?: ✗
Differentiable?: ✗

(*A vertical tangent can occur at a continuous point, but the ordinary derivative is not finite there.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Differentiability vs. Continuity, remember:

  • Continuity = Connected
  • Differentiability = Smooth
  • Differentiability ⇒ Continuity
  • Continuity ≠ ⇒ Differentiability
  • |x| is the classic example of continuous but not differentiable.

Easy way to remember:
  • Continuity = Connected — "Is there a break in the graph?"
    If no: Continuous.
  • Differentiability = Smooth — "Can I draw one clear tangent line at this point?"
    If yes: Differentiable.

And remember the golden rule:

  DIFFERENTIABLE ⇒ CONTINUOUS

but:

  CONTINUOUS ≠ ⇒ DIFFERENTIABLE

In one sentence: Continuity means the function has no break, while differentiability means the function has a well-defined instantaneous slope; every differentiable function is continuous, but a continuous function can have a corner or other feature that prevents differentiability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiability vs. Continuity is a fundamental comparison that helps understand the behavior of functions.

Key concepts covered:

  ✓ What Is Continuity?
  ✓ What Is Differentiability?
  ✓ The Main Difference
  ✓ Differentiability ⇒ Continuity
  ✓ Continuity ≠ ⇒ Differentiability
  ✓ Why Differentiability Implies Continuity
  ✓ f(x) = |x| Example
  ✓ Why |x| Is Not Differentiable
  ✓ Graphical Difference
  ✓ Discontinuity Means Not Differentiable
  ✓ Common Cases
  ✓ Types of Points Where Differentiability Fails
  ✓ Geometric Interpretation
  ✓ Polynomial Example
  ✓ Absolute Value Example
  ✓ Hierarchy to Remember
  ✓ Quick Test
  `,
  examples: [
    "Check continuity of f(x) = x² at x = 2 → continuous",
    "Check differentiability of f(x) = x² at x = 2 → differentiable",
    "Check continuity of f(x) = |x| at x = 0 → continuous",
    "Check differentiability of f(x) = |x| at x = 0 → not differentiable",
    "Differentiability ⇒ Continuity (always true)",
    "Continuity ≠ ⇒ Differentiability (not always true)",
    "Polynomials: continuous and differentiable everywhere",
    "|x| is continuous but not differentiable at x = 0",
    "Jump discontinuity: not continuous, not differentiable",
    "Hole: not continuous, not differentiable",
    "Sharp corner: continuous but not differentiable",
    "Cusp: continuous but not differentiable",
    "Vertical tangent: continuous but not differentiable",
    "Continuous = No Break",
    "Differentiable = Clear Tangent Slope",
    "Quick test: check continuity first, then differentiability",
  ],
};

export default topic;