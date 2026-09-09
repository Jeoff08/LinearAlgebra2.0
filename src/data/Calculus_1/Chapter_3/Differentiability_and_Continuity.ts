// filename: differentiability-and-continuity.ts

const topic = {
  id: "differentiability-and-continuity",
  title: "Differentiability and Continuity",
  summary:
    "Two closely related concepts where differentiability implies continuity, but continuity does not imply differentiability, with examples like |x| being continuous but not differentiable at 0.",
  details: `
Differentiability and continuity are two closely related concepts in Calculus. Both describe how a function behaves at a particular point. Continuity asks whether the function has a break, hole, or jump at the point, while differentiability asks whether the function has a well-defined derivative, or slope, at that point. The most important relationship to remember is that differentiability implies continuity; however, continuity does not imply differentiability. In other words, every differentiable function is continuous, but not every continuous function is differentiable. This distinction is fundamental because it tells us that a function can be smooth enough to have no breaks but still have a sharp corner where the slope is not defined. Understanding this relationship is essential for analysing the behaviour of functions and for applying calculus concepts like optimisation and curve sketching.

The most important relationship to remember is:
  Differentiability ⇒ Continuity

However:
  Continuity ≠ Differentiability

In other words, every differentiable function is continuous, but not every continuous function is differentiable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS CONTINUITY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continuity is a fundamental property of functions that describes whether their graphs can be drawn without lifting the pencil. A function f(x) is continuous at x = a if the limit of the function as x approaches a equals the actual value of the function at a. This single condition requires three things: the function must be defined at a, the limit must exist, and the limit must equal the function value. If any of these fails, the function is discontinuous at that point. Continuity is important because it ensures that small changes in the input produce small changes in the output, which is essential for many calculus theorems, including the Intermediate Value Theorem and the Extreme Value Theorem. Polynomials, exponential functions, and trigonometric functions like sine and cosine are continuous everywhere on their domains, while rational functions are continuous wherever their denominators are non‑zero. Understanding continuity is the first step toward understanding differentiability.

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

Differentiability is a stronger condition than continuity. A function is differentiable at x = a if its derivative exists at that point. The derivative is defined as the limit of the difference quotient as h approaches zero: f'(a) = lim(h→0) (f(a + h) - f(a))/h. Geometrically, this means that the function has a well‑defined tangent line at that point, with a finite slope. If the function has a sharp corner, a cusp, or a vertical tangent at a, then the derivative does not exist, even if the function is continuous there. Differentiability ensures that the function is locally linear that is, it behaves like a straight line when viewed very closely. This property is essential for many calculus applications, such as finding rates of change, optimisation, and approximating functions using linearisation. While continuity is necessary for differentiability, it is not sufficient, as the classic example of |x| at x = 0 demonstrates.

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

The relationship between differentiability and continuity is one of the most important theorems in calculus. It states that if a function is differentiable at a point, then it must be continuous at that point. This means that differentiability is a stronger condition than continuity it requires more of the function. However, the converse is not true: a function can be continuous at a point without being differentiable there. This is because continuity only requires that the function has no breaks, while differentiability requires that the function has a well‑defined slope. The classic example of |x| at x = 0 illustrates this perfectly: the function is continuous but has a sharp corner, so the derivative does not exist. This relationship is often summarised as "differentiability implies continuity, but continuity does not imply differentiability." Understanding this distinction is crucial for correctly analysing functions and for applying the theorems of calculus.

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

The proof that differentiability implies continuity is a beautiful application of limit laws. Suppose f is differentiable at x = a, so the derivative f'(a) exists as a finite number. We can rewrite the difference f(x) - f(a) as the product of the difference quotient and (x - a). As x approaches a, the difference quotient approaches f'(a), and (x - a) approaches zero. Therefore, the product approaches zero, meaning f(x) - f(a) → 0, so f(x) → f(a). This shows that the limit of f(x) as x approaches a is exactly f(a), which is the definition of continuity. This proof is elegant and demonstrates why differentiability is a stronger condition: the existence of the derivative forces the function to be well‑behaved enough to be continuous. This is a foundational result in calculus and is used in many subsequent theorems.

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

This is one of the most important ideas in the topic: a function can be continuous everywhere but fail to be differentiable at one or more points. The absolute value function f(x) = |x| is the classic example. Its graph is a V‑shape with a sharp corner at the origin. At x = 0, the function is continuous because the left‑hand and right‑hand limits both equal 0, and f(0) = 0. However, the derivative does not exist at x = 0 because the slope from the left is -1 and the slope from the right is +1; these are not equal, so there is no single tangent slope. This example is crucial because it shows that continuity alone does not guarantee a well‑defined derivative. Many other functions, such as |x - 2|, also have corners where they are continuous but not differentiable. Recognising these cases is important for understanding the limitations of calculus and for correctly applying differentiation rules.

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

The absolute value function is defined piecewise: |x| = -x for x < 0 and |x| = x for x ≥ 0. To determine differentiability at x = 0, we compute the left‑hand and right‑hand derivatives. The left‑hand derivative uses the definition of the derivative with h approaching 0 from the negative side. For x < 0, |x| = -x, so the left‑hand derivative is -1. The right‑hand derivative uses h approaching 0 from the positive side. For x > 0, |x| = x, so the right‑hand derivative is +1. Since these two values are not equal, the derivative does not exist at x = 0. This lack of equality corresponds to the sharp corner in the graph, where the slope changes abruptly from -1 to +1. This example illustrates that differentiability requires the function to be smooth enough that the left and right slopes agree.

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

Because differentiability implies continuity, it follows that if a function is not continuous at a point, it cannot be differentiable there. This is a necessary condition: continuity is required for differentiability, but it is not sufficient. For example, the function f(x) = 1/x is discontinuous at x = 0 because it is undefined there (the denominator is zero). Since it is not continuous at x = 0, it cannot have a derivative at x = 0. This makes intuitive sense: if there is a break or asymptote in the graph, there cannot be a well‑defined tangent slope at that point. This relationship is often used as a quick check: if a function is discontinuous at a point, we can immediately conclude that it is not differentiable there, saving us from having to compute the derivative.

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

A function may be continuous but fail to be differentiable because of certain features in its graph. The most common are sharp corners, cusps, vertical tangents, and discontinuities. A sharp corner occurs when the left‑hand and right‑hand derivatives exist but are different, as in |x|. A cusp is a sharper point where the slopes from the two sides approach opposite infinities, such as in f(x) = x^(2/3) at x = 0. A vertical tangent occurs when the derivative becomes infinite, as in f(x) = x^(1/3) at x = 0. Discontinuities, such as holes, jumps, or asymptotes, also prevent differentiability because the function is not continuous. Recognising these features is important for understanding the limitations of differentiation and for correctly applying the derivative rules. When analysing a function, always check for these potential issues before concluding that it is differentiable.

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

Consider f(x) = |x - 2|. This is a translation of the absolute value function, with the corner shifted to x = 2. The function is continuous at x = 2 because the left‑hand and right‑hand limits both equal 0, and f(2) = 0. However, the derivative does not exist at x = 2 because the left‑hand slope is -1 (since for x < 2, |x - 2| = -(x - 2) = 2 - x) and the right‑hand slope is +1 (since for x > 2, |x - 2| = x - 2). These slopes are not equal, so there is no single tangent slope at the corner. This example demonstrates that shifting the absolute value function does not remove the corner; it simply moves it to a different location. Any function of the form |x - c| will have a corner at x = c where it is continuous but not differentiable.

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

Consider f(x) = x³. This is a polynomial, and all polynomial functions are continuous and differentiable everywhere. The derivative is f'(x) = 3x², which exists for every real number. At x = 2, the derivative is f'(2) = 12, which is a finite number. The graph of x³ is smooth and has no corners, cusps, or vertical tangents. This example shows that many functions satisfy both continuity and differentiability. In fact, polynomials, exponential functions, and trigonometric functions are differentiable on their domains, making them ideal for calculus applications. Understanding what a differentiable function looks like helps in recognising when a function is smooth enough to apply the various differentiation rules and theorems.

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

Differentiability is closely connected to the concept of tangent lines. If a function is differentiable at x = a, then it has a well‑defined tangent slope given by f'(a). The equation of the tangent line is y - f(a) = f'(a)(x - a). This tangent line is the best linear approximation to the function near a. For a function like f(x) = x², the graph is smooth, so a tangent line can be drawn at every point, and the slope varies continuously. In contrast, for a function like |x| at x = 0, there is no unique tangent line because the left and right slopes disagree; any line through the origin with slope between -1 and 1 would "touch" the V‑shape, but none is a true tangent. Thus, differentiability guarantees a unique tangent line, which is essential for linearisation and many approximation techniques in calculus.

If a function is differentiable at x = a, then it has a well-defined tangent slope:
  f'(a)

The tangent line is:
  y - f(a) = f'(a)(x - a)

For a function such as f(x) = x², the graph is smooth, so a tangent line can be drawn at every point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SMOOTHNESS AND DIFFERENTIABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we say a graph is smooth, we generally mean that it does not have sharp corners, jumps, or other irregularities that prevent a derivative from existing. A smooth function is differentiable at every point in its domain, which means its graph has a well‑defined tangent line everywhere. For example, f(x) = x² is smooth because its graph is a continuous, rounded curve. At every point, we can determine a tangent slope, and the slope changes continuously. On the other hand, f(x) = |x| has a sharp corner at x = 0, so it is not smooth there. Smoothness is important because it allows us to apply the tools of calculus, such as optimisation and curve sketching, without encountering problematic points. Functions that are smooth are also easier to analyse because their behaviour is predictable and well‑behaved.

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

For piecewise functions, we may need to compare the left-hand and right-hand derivatives to determine differentiability at a boundary point. The left‑hand derivative is defined as the limit of the difference quotient as h approaches 0 from the negative side, while the right‑hand derivative uses h approaching 0 from the positive side. For the derivative to exist, these two one‑sided derivatives must be equal. This is analogous to the requirement that the left‑hand and right‑hand limits be equal for a two‑sided limit to exist. One‑sided derivatives are particularly useful for analysing piecewise functions, where the function rule changes at a point. If the one‑sided derivatives are equal, the function is differentiable at that point; if they differ, there is a corner or cusp, and the derivative does not exist. This technique is essential for correctly applying the derivative definition to piecewise functions.

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

Consider f(x) = { x², if x < 1; 2x - 1, if x ≥ 1 }. This is a piecewise function where the rule changes at x = 1. To determine differentiability at x = 1, we first check continuity. The left‑hand limit as x → 1⁻ is 1² = 1, and the right‑hand limit as x → 1⁺ is 2(1) - 1 = 1. Since f(1) = 1, the function is continuous at x = 1. Next, we compute the one‑sided derivatives. For x < 1, f(x) = x², so the derivative is 2x, and the left‑hand derivative at 1 is 2. For x > 1, f(x) = 2x - 1, so the derivative is 2, and the right‑hand derivative at 1 is also 2. Since the one‑sided derivatives are equal, the derivative exists at x = 1, and f'(1) = 2. Thus, the function is both continuous and differentiable at x = 1. This example shows that a piecewise function can be differentiable if the pieces meet smoothly.

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

Think of the concepts as levels of smoothness. Differentiability is a higher level than continuity. Every differentiable function is continuous, but not every continuous function is differentiable. A function can be continuous and still have a sharp corner, which prevents differentiability. The classic example is f(x) = |x| at x = 0. At this point, the function exists, the limit exists, and the limit equals the function value, so it is continuous. However, the derivative does not exist because the left and right slopes are different. This example is the standard illustration of the fact that continuity is necessary but not sufficient for differentiability. Remembering this hierarchy helps in analysing functions and in understanding the conditions required for applying calculus theorems.

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

When asked whether a function is differentiable at x = a, use this systematic process. First, check continuity: determine whether lim(x→a) f(x) = f(a). If the function is not continuous, it cannot be differentiable. Next, look for a corner or cusp in the graph, which would indicate that the left and right slopes differ. Finally, compute the left‑hand and right‑hand derivatives using the definition of the derivative as a limit. If f'_-(a) = f'_+(a), then the derivative exists and the function is differentiable. If they are different, the derivative does not exist. This process is especially useful for piecewise functions, where the rule changes at the point of interest. By following these steps, you can confidently determine differentiability.

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

Continuity and differentiability fit into Calculus in a logical sequence. First, we study how a function behaves as x approaches a point using limits. Then we use limits to determine continuity, which tells us whether the function has a break at that point. Finally, we use limits to define the derivative, which tells us whether the function has a well‑defined slope. Therefore, the derivative depends fundamentally on the concept of limits, and differentiability builds upon continuity. This progression from limits to continuity to differentiability is the foundation of calculus and explains why limits are so important. Understanding this sequence helps in grasping the structure of calculus and in recognising how each concept builds on the previous one.

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

Continuity means that a function has no break, hole, or jump at a particular point: lim(x→a) f(x) = f(a). Differentiability means that the derivative exists at that point: f'(a) = lim(h→0) (f(a + h) - f(a))/h. The most important theorem is that if a function is differentiable at a, then it is continuous at a. But the reverse is not necessarily true: a continuous function may not be differentiable. The classic example is f(x) = |x|, which is continuous at x = 0 but not differentiable there because of the sharp corner. The key idea to remember is that continuity means the function has no break, while differentiability means the function has a well‑defined instantaneous slope. A differentiable function must be continuous, but a continuous function does not necessarily have a derivative. This distinction is fundamental to understanding the behaviour of functions and the limits of calculus.

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