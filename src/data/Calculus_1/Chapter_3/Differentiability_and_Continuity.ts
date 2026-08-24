// filename: differentiability-and-continuity.ts

const topic = {
  id: "differentiability-and-continuity",
  title: "Differentiability and Continuity",
  summary:
    "Two closely related concepts where differentiability implies continuity, but continuity does not imply differentiability, with examples like |x| being continuous but not differentiable at 0.",
  details: `
Differentiability and continuity are two closely related concepts in Calculus. Both describe how a function behaves at a particular point.

Continuity asks:
  Does the function have a break, hole, or jump at the point?

Differentiability asks:
  Does the function have a well-defined derivative, or slope, at the point?

The most important relationship to remember is:
  Differentiability ⇒ Continuity

However:
  Continuity ≠ Differentiability

In other words, every differentiable function is continuous, but not every continuous function is differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS CONTINUITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function f(x) is continuous at x = a if:
  lim(x→a) f(x) = f(a)

This requires three conditions:
  • f(a) exists.
  • lim(x→a) f(x) exists.
  • The limit equals the function value.

Therefore:
  lim(x→a) f(x) = f(a)

is the main condition for continuity.

Example of Continuity:
  Consider f(x) = x².

  At x = 2, we have:
    f(2) = 4
  and:
    lim(x→2) x² = 4

  Therefore:
    lim(x→2) f(x) = f(2)

  so the function is continuous at x = 2.

  In fact, x² is continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS DIFFERENTIABILITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is differentiable at x = a if its derivative exists at that point.

The derivative is defined as:
  f'(a) = lim(h→0) (f(a + h) - f(a))/h

provided this limit exists.

Geometrically, this means the function has a well-defined tangent slope at that point.

So:
  Differentiability means a derivative exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE RELATIONSHIP BETWEEN THEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important theorem is:
  If f is differentiable at a, then f is continuous at a.

This means differentiability is a stronger condition than continuity.

Think of the relationship as:
  Differentiable ⟶ Continuous

But the reverse does not always work:
  Continuous ≠ Differentiable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DOES DIFFERENTIABILITY IMPLY CONTINUITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f is differentiable at x = a.

Then:
  f'(a) = lim(x→a) (f(x) - f(a))/(x - a)

exists.

We can rewrite:
  f(x) - f(a) = [(f(x) - f(a))/(x - a)](x - a)

Now take the limit as x → a.

The first factor approaches f'(a), while (x - a) → 0.

Therefore:
  f(x) - f(a) → f'(a)(0)
  f(x) - f(a) → 0

so:
  f(x) → f(a)

Therefore:
  lim(x→a) f(x) = f(a)

which means f is continuous at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. A FUNCTION CAN BE CONTINUOUS BUT NOT DIFFERENTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important ideas in the topic.

Consider:
  f(x) = |x|

The graph looks like a V-shape.

At x = 0, there is no hole or break.

Therefore, the function is continuous at x = 0.

However, the graph has a sharp corner at the origin.

Because of that corner, there is no single tangent slope.

Therefore:
  f(x) = |x| is continuous at x = 0
but:
  f(x) = |x| is not differentiable at x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY IS |x| NOT DIFFERENTIABLE AT 0?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The absolute value function can be written as:
  |x| = { -x, x < 0; x, x ≥ 0 }

For the left side:
  f(x) = -x
  so the left-hand derivative is:
    f'_-(0) = -1

For the right side:
  f(x) = x
  so the right-hand derivative is:
    f'_+(0) = 1

For a derivative to exist, the two must be equal:
  f'_-(0) = f'_+(0)

But:
  -1 ≠ 1

Therefore:
  f'(0) does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONTINUITY IS NECESSARY FOR DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because:
  Differentiability ⇒ Continuity

a function cannot be differentiable at a point where it is discontinuous.

For example:
  f(x) = 1/x

is discontinuous at x = 0 because it is undefined there.

Therefore, it cannot have a derivative at x = 0.

So:
  Discontinuous ⇒ Not differentiable

at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. TYPES OF PROBLEMS THAT CAUSE NON-DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function may be continuous but fail to be differentiable because of certain features.

The most common are:

1. Sharp corners:
  Example: f(x) = |x|

2. Cusps:
  A cusp is a sharp point where the slopes from the two sides behave differently.

3. Vertical Tangents:
  A function may have a vertical tangent where the derivative becomes infinite or undefined.

4. Discontinuities:
  A function with a hole, jump, or asymptote cannot be differentiable at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CORNER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = |x - 2|

The graph has a corner at x = 2.

The function is continuous there because:
  lim(x→2) |x - 2| = 0
and:
  f(2) = 0

Therefore:
  Continuous at x = 2

However, the left-hand slope is -1, while the right-hand slope is 1.

Therefore:
  Not differentiable at x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE OF A FUNCTION THAT IS BOTH CONTINUOUS AND DIFFERENTIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³

This is a polynomial.

Polynomial functions are continuous and differentiable everywhere.

The derivative is:
  f'(x) = 3x²

At x = 2, the derivative is:
  f'(2) = 12

Therefore, the function is:
  Continuous and differentiable at x = 2

In fact, it is continuous and differentiable for every real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIABILITY AND THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiability is closely connected to tangent lines.

If a function is differentiable at x = a, then it has a well-defined tangent slope:
  f'(a)

The tangent line is:
  y - f(a) = f'(a)(x - a)

For a function such as f(x) = x², the graph is smooth, so a tangent line can be drawn at every point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SMOOTHNESS AND DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we say a graph is smooth, we generally mean that it does not have sharp corners, jumps, or other irregularities that prevent a derivative from existing.

For example:
  f(x) = x²

has a smooth curve.

At every point, we can determine a tangent slope.

Therefore:
  x² is differentiable everywhere

On the other hand:
  f(x) = |x|

has a sharp corner at x = 0.

Therefore, it is not differentiable there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. ONE-SIDED DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For piecewise functions, we may need to compare the left-hand and right-hand derivatives.

The left-hand derivative is:
  f'_-(a) = lim(h→0⁻) (f(a + h) - f(a))/h

The right-hand derivative is:
  f'_+(a) = lim(h→0⁺) (f(a + h) - f(a))/h

For the derivative to exist:
  f'_-(a) = f'_+(a)

If they are different, the function is not differentiable at a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE OF A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = { x², x < 1; 2x - 1, x ≥ 1 }

Let's investigate differentiability at x = 1.

Step 1: Check Continuity
  From the left:
    lim(x→1⁻) x² = 1
  From the right:
    lim(x→1⁺) (2x - 1) = 1
  And:
    f(1) = 2(1) - 1 = 1

  Therefore:
    The function is continuous at x = 1

Step 2: Check the Derivative
  For the first piece:
    f(x) = x², so f'(x) = 2x
    Therefore: f'_-(1) = 2

  For the second piece:
    f(x) = 2x - 1, so f'(x) = 2
    Therefore: f'_+(1) = 2

  Since:
    f'_-(1) = f'_+(1)

  the derivative exists.

  Therefore:
    The function is both continuous and differentiable at x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Continuity                                     Differentiability
  ─────────────────────────────────────────────────────────────────────────────────
  Concerns whether the function has breaks   Concerns whether the derivative exists
  Uses limits                                Uses derivatives
  Requires lim(x→a) f(x) = f(a)              Requires f'(a) to exist
  A continuous function may have a corner    A differentiable function cannot have a corner
  Weaker condition                           Stronger condition

The key relationship is:
  Differentiability ⇒ Continuity
but:
  Continuity ≠ Differentiability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A USEFUL WAY TO REMEMBER IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the concepts as levels:
  Differentiable ⇒ Continuous

But not:
  Continuous ⇒ Differentiable

A function can be continuous and still have a sharp corner.

Example:
  f(x) = |x|

At x = 0:
  • Function exists ✅
  • Limit exists ✅
  • Limit equals function value ✅
  • Continuous ✅
  • Derivative exists ❌
  • Differentiable ❌

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. HOW TO DETERMINE DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When asked whether a function is differentiable at x = a, use this process:

Step 1: Check Continuity
  First determine whether:
    lim(x→a) f(x) = f(a)
  If the function is not continuous, it cannot be differentiable.

Step 2: Look for a Corner or Cusp
  Check the graph for:
    • Sharp corners
    • Cusps
    • Vertical tangents
    • Other irregular behavior

Step 3: Compare One-Sided Derivatives
  Calculate:
    f'_-(a)
  and:
    f'_+(a)

  If:
    f'_-(a) = f'_+(a)
  then the derivative exists.

  If:
    f'_-(a) ≠ f'_+(a)
  then the function is not differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity and differentiability fit into Calculus in a logical sequence:

  Function → Limit → Continuity → Derivative

First, we study how a function behaves as x approaches a point.

Then we use limits to determine continuity.

Then, using limits, we define the derivative.

Therefore, the derivative depends fundamentally on the concept of limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                       Condition
  ───────────────────────────────────────────────────────────────────────────
  Continuous at a           lim(x→a) f(x) = f(a)
  Differentiable at a       f'(a) exists
  Left-hand derivative      f'_-(a) = lim(h→0⁻) (f(a+h) - f(a))/h
  Right-hand derivative     f'_+(a) = lim(h→0⁺) (f(a+h) - f(a))/h
  Differentiable            f'_-(a) = f'_+(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity means that a function has no break, hole, or jump at a particular point:
  lim(x→a) f(x) = f(a)

Differentiability means that the derivative exists at that point:
  f'(a) = lim(h→0) (f(a + h) - f(a))/h

The most important theorem is:
  If a function is differentiable at a, then it is continuous at a.

But the reverse is not necessarily true:
  A continuous function may not be differentiable.

The classic example is:
  f(x) = |x|

It is continuous at x = 0, but it is not differentiable there because of the sharp corner.

The key idea to remember:

  Continuity means the function has no break. Differentiability means the 
  function has a well-defined instantaneous slope. A differentiable function 
  must be continuous, but a continuous function does not necessarily have a 
  derivative.
  `,
  examples: [
    "f(x) = x² is continuous and differentiable everywhere",
    "f(x) = |x| is continuous at 0 but not differentiable at 0",
    "f(x) = |x - 2| is continuous but not differentiable at 2",
    "f(x) = x³ is continuous and differentiable everywhere",
    "f(x) = 1/x is discontinuous and not differentiable at 0",
    "Piecewise: f(x) = {x², x<1; 2x-1, x≥1} is continuous and differentiable at 1",
    "Differentiability ⇒ Continuity, but Continuity ≠ Differentiability",
  ],
};

export default topic;