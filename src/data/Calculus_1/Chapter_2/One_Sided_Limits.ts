// filename: one-sided-limits.ts

const topic = {
  id: "one-sided-limits",
  title: "One-Sided Limits",
  summary:
    "Limits that examine what happens to a function as x approaches a particular value from only one direction, either from the left or from the right.",
  details: `
A one-sided limit is a limit where we examine what happens to a function as x approaches a particular value from only one direction. Normally, when we write lim(x→a) f(x), we are looking at what happens as x approaches a from both the left and the right. However, sometimes a function behaves differently depending on which side we approach from. In these situations, we use one-sided limits. There are two types: left-hand limits and right-hand limits. Understanding one-sided limits is very important because they help us determine whether an ordinary two-sided limit exists. They are essential for analysing piecewise functions, jump discontinuities, vertical asymptotes, and continuity, making them a fundamental concept in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A ONE-SIDED LIMIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A one-sided limit examines the behavior of a function from only one side of a particular value. Imagine standing at a point on a number line; you can approach that point from the left (using values smaller than the point) or from the right (using values greater than the point). One-sided limits capture what happens as we get arbitrarily close to the point from one direction only. This is useful when the function's rule changes at the point, when the function is not defined on one side, or when the behavior differs on each side. For example, the function f(x) = 1/x has different infinite behaviors on the left and right of zero. Understanding one-sided limits is a prerequisite for continuity and differentiability, as these concepts require that the left and right behaviors match.

Imagine standing at a point on a number line.

You can approach that point:
  • From the left
  • From the right

For example, if we want to approach x = 3, we can use values smaller than 3:
  2.9, 2.99, 2.999

This means we are approaching 3 from the left.

Or we can use values greater than 3:
  3.1, 3.01, 3.001

This means we are approaching 3 from the right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The left-hand limit examines what happens as x approaches a value from numbers that are smaller than that value. The notation is lim(x→a⁻) f(x), which is read as "the limit of f(x) as x approaches a from the left." The superscript minus sign indicates that we consider only values of x that are less than a. This is not subtraction; it is a directional indicator. For a simple function like f(x) = x + 2, the left‑hand limit as x approaches 3 is 5, because as x gets closer to 3 from below, the function values get arbitrarily close to 5. Left‑hand limits are crucial when the function is defined by different rules on different intervals, or when the function has a domain restriction that prevents approaching from the right. They allow us to understand the function's behavior on one side of a point independently.

The notation is:
  lim(x→a⁻) f(x)

This is read as:
  "The limit of f(x) as x approaches a from the left."

The symbol a⁻ does not mean subtraction.

It means that x is approaching a using values less than a.

Example:
  Suppose f(x) = x + 2.

  Find: lim(x→3⁻) (x + 2)

  As x approaches 3 from the left:

    x       f(x) = x + 2
    ────────────────────────
    2.9     4.9
    2.99    4.99
    2.999   4.999

  As x gets closer to 3, the output gets closer to 5.

  Therefore:
    lim(x→3⁻) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The right-hand limit examines what happens as x approaches a value from numbers greater than that value. The notation is lim(x→a⁺) f(x), read as "the limit of f(x) as x approaches a from the right." The superscript plus sign indicates that we only consider x values greater than a. Similar to the left‑hand limit, this is a directional notation. For the same function f(x) = x + 2, the right‑hand limit as x approaches 3 is also 5, because from the right the function values also tend to 5. Right‑hand limits are indispensable when the function is only defined for x > a (e.g., square root functions at their domain boundary) or when the rule changes at a. Together, left‑hand and right‑hand limits form the basis for determining whether a two‑sided limit exists, which is a prerequisite for continuity.

The notation is:
  lim(x→a⁺) f(x)

This is read as:
  "The limit of f(x) as x approaches a from the right."

The symbol a⁺ does not mean addition.

It means that x approaches a using values greater than a.

Example:
  Suppose f(x) = x + 2.

  Find: lim(x→3⁺) (x + 2)

  As x approaches 3 from the right:

    x       f(x) = x + 2
    ────────────────────────
    3.1     5.1
    3.01    5.01
    3.001   5.001

  As x gets closer to 3, the output gets closer to 5.

  Therefore:
    lim(x→3⁺) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RELATIONSHIP BETWEEN ONE-SIDED AND TWO-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a normal two-sided limit to exist, the left-hand and right-hand limits must be equal. Mathematically, if lim(x→a⁻) f(x) = lim(x→a⁺) f(x), then the two‑sided limit exists and equals that common value. Conversely, if the one‑sided limits are unequal (or if either does not exist), then the two‑sided limit does not exist. This relationship is fundamental because it allows us to determine whether a function has a well‑defined limit at a point. Many functions, especially piecewise ones, require this check. The equality of one‑sided limits is also a necessary condition for continuity at a point (along with the function being defined and equaling that limit). Thus, mastering one‑sided limits is the first step towards understanding continuity and more advanced calculus concepts.

Mathematically:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

If both sides approach the same value L, then:
  lim(x→a) f(x) = L

However, if the left-hand and right-hand limits are different, the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WHERE THE TWO-SIDED LIMIT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x². This is a polynomial, so it is continuous everywhere. As a result, the left‑hand and right‑hand limits at any point are equal. For instance, at x = 2, both one‑sided limits are 4. Since they agree, the two‑sided limit exists and equals 4. This illustrates a general rule: for functions that are continuous at a point, the one‑sided limits automatically match. However, it is still instructive to compute them separately to reinforce the concept. This example also shows that when a function is well‑behaved (no jumps, holes, or asymptotes), the one‑sided limits are straightforward and equal, making the two‑sided limit easy to determine.

Consider:
  f(x) = x²

Find:
  lim(x→2⁻) x²
and:
  lim(x→2⁺) x²

From the left:
  lim(x→2⁻) x² = 4

From the right:
  lim(x→2⁺) x² = 4

Since both sides are equal:
  4 = 4

the two-sided limit exists.

Therefore:
  lim(x→2) x² = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WHERE THE TWO-SIDED LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider a piecewise function defined as f(x) = 2 for x < 1 and f(x) = 5 for x > 1 (we leave the value at x = 1 undefined for now). As x approaches 1 from the left, the function takes the value 2, so the left‑hand limit is 2. As x approaches 1 from the right, the function takes the value 5, so the right‑hand limit is 5. Since 2 ≠ 5, the two‑sided limit does not exist. This is a classic example of a jump discontinuity. Even if we defined f(1) to be some value, the limits would still be different, so the two‑sided limit would still not exist. This shows that one‑sided limits are essential for detecting discontinuities that arise from different behaviors on either side of a point.

Consider the piecewise function:
  f(x) = { 2, x < 1; 5, x > 1 }

Find:
  lim(x→1⁻) f(x)

When approaching from the left, we use the rule:
  f(x) = 2

Therefore:
  lim(x→1⁻) f(x) = 2

Now find:
  lim(x→1⁺) f(x)

When approaching from the right, we use:
  f(x) = 5

Therefore:
  lim(x→1⁺) f(x) = 5

Since:
  2 ≠ 5

the two-sided limit does not exist.

Therefore:
  lim(x→1) f(x) does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. ONE-SIDED LIMITS AND PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One-sided limits are especially important when working with piecewise functions, which are defined by different expressions on different intervals. At the boundary between two pieces, the function may have a jump, a hole, or a smooth connection. To determine the behavior near such a boundary, we must evaluate the left‑hand limit (using the rule for x less than the boundary) and the right‑hand limit (using the rule for x greater than the boundary). For example, with f(x) = { x + 1, if x < 2; x², if x ≥ 2 }, at x = 2 the left‑hand limit is 3 (from x + 1) and the right‑hand limit is 4 (from x²). They differ, so the two‑sided limit does not exist. This technique is used repeatedly in calculus when dealing with piecewise definitions, especially in continuity and differentiability problems.

Consider:
  f(x) = { x + 1, x < 2; x², x ≥ 2 }

Find the limits at x = 2.

Left-Hand Limit:
  For x < 2, we use f(x) = x + 1.

  Therefore:
    lim(x→2⁻) f(x) = lim(x→2⁻) (x + 1)

  Substitute:
    2 + 1 = 3

  Therefore:
    lim(x→2⁻) f(x) = 3

Right-Hand Limit:
  For x ≥ 2, we use f(x) = x².

  Therefore:
    lim(x→2⁺) f(x) = lim(x→2⁺) x²

  Substitute:
    2² = 4

  Therefore:
    lim(x→2⁺) f(x) = 4

Since:
  3 ≠ 4

the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ONE-SIDED LIMITS FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When looking at a graph, one-sided limits are determined by following the graph from a particular direction toward the target x‑value. For the left‑hand limit, start on the left side of the graph and trace it as x increases toward the point. Observe the y‑values that the graph approaches. For the right‑hand limit, start on the right side and trace the graph as x decreases toward the point. The important thing is to focus on where the graph is heading, not necessarily the actual point on the graph (which may be undefined or have a different value). This graphical interpretation is intuitive and helps visualise why one‑sided limits can differ: if the graph approaches different heights from each side, there is a jump; if it approaches the same height, the limit exists. Practicing this skill builds a strong geometric intuition for limits.

Left-Hand Limit:
  Start on the left side of the graph and move toward the target value.
  Ask: What y-value is the graph approaching?

Right-Hand Limit:
  Start on the right side of the graph and move toward the target value.
  Ask: What y-value is the graph approaching?

The important thing is to focus on where the graph is heading, not necessarily the actual point on the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ONE-SIDED LIMITS AND HOLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a function that has a hole at x = 2, meaning that the function is undefined at exactly that point, but the graph approaches the same y‑value from both sides. In such a case, both one‑sided limits exist and are equal to that y‑value, so the two‑sided limit exists even though the function is not defined at the point. For example, if the graph approaches y = 4 from both sides as x → 2, then lim(x→2⁻) f(x) = 4 and lim(x→2⁺) f(x) = 4, so lim(x→2) f(x) = 4. This shows that limits are about what happens near a point, not at the point itself. This is a crucial distinction: the existence of a limit does not require the function to be defined at that point. Holes are removable discontinuities, and one‑sided limits confirm that the discontinuity can be "filled" by defining the function appropriately.

Suppose the graph approaches y = 4 from both sides.

Then:
  lim(x→2⁻) f(x) = 4
and:
  lim(x→2⁺) f(x) = 4

Therefore:
  lim(x→2) f(x) = 4

Even if f(2) is undefined, the limit can still exist.

This is because limits focus on what happens near a point rather than exactly at the point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INFINITE ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a function increases or decreases without bound when approaching a value from one side. For example, f(x) = 1/x has a vertical asymptote at x = 0. As x approaches 0 from the left (negative side), 1/x becomes very large negative, so lim(x→0⁻) 1/x = -∞. As x approaches 0 from the right (positive side), 1/x becomes very large positive, so lim(x→0⁺) 1/x = ∞. Since the two one‑sided limits are not equal (and both are infinite), the two‑sided limit does not exist. Infinite one‑sided limits are common in rational functions where the denominator approaches zero. They signal the presence of a vertical asymptote and are important for understanding the function's behavior near points of discontinuity. These limits also appear in improper integrals and in analysing the growth of functions.

Consider:
  f(x) = 1/x

Find:
  lim(x→0⁻) 1/x

As x approaches 0 from the negative side:
  x = -0.1 → 1/x = -10
  x = -0.01 → 1/x = -100
  x = -0.001 → 1/x = -1000

The function decreases without bound.

Therefore:
  lim(x→0⁻) 1/x = -∞

Now approach from the right:
  x = 0.1 → 1/x = 10
  x = 0.01 → 1/x = 100
  x = 0.001 → 1/x = 1000

The function increases without bound.

Therefore:
  lim(x→0⁺) 1/x = ∞

Since the two sides behave differently:
  -∞ ≠ ∞

the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. IMPORTANT SYMBOLS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is essential to remember the correct notation for one‑sided limits. The left‑hand limit is written as lim(x→a⁻) f(x), where the superscript minus sign indicates that x approaches a from the left (i.e., x < a). The right‑hand limit is written as lim(x→a⁺) f(x), where the superscript plus sign indicates that x approaches a from the right (i.e., x > a). The two‑sided limit, which requires both one‑sided limits to be equal, is written as lim(x→a) f(x). These symbols are standard in calculus and must be used correctly to convey the intended direction of approach. Misinterpreting or omitting the superscript can lead to incorrect conclusions, especially when dealing with piecewise functions or functions with asymptotes. Practicing these notations reinforces the concept of directional limits and prepares you for more advanced topics like continuity and differentiability.

  Left-Hand Limit:
    lim(x→a⁻) f(x)
    Approach a from values x < a

  Right-Hand Limit:
    lim(x→a⁺) f(x)
    Approach a from values x > a

  Two-Sided Limit:
    lim(x→a) f(x)
    Approach a from both directions.

  For the limit to exist:
    Left-Hand Limit = Right-Hand Limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY ONE-SIDED LIMITS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One‑sided limits help us understand functions that behave differently on different parts of their graphs. They are particularly useful for studying piecewise functions, jump discontinuities, vertical asymptotes, and domain endpoints. For instance, some functions may only be defined on one side of a point; for example, f(x) = √x is only defined for x ≥ 0, so at x = 0 we can only approach from the right. Thus, we write lim(x→0⁺) √x = 0, and the left‑hand limit does not exist in the real numbers. One‑sided limits also play a crucial role in determining continuity: a function is continuous at a point only if both one‑sided limits exist, are equal, and equal the function value. Without one‑sided limits, we could not precisely describe or analyze such situations. Therefore, mastering one‑sided limits is a fundamental step toward understanding the behavior of functions in calculus.

They are particularly useful for studying:
  • Piecewise functions
  • Jump discontinuities
  • Vertical asymptotes
  • Domain endpoints
  • Functions with restrictions

For example, some functions may only exist on one side of a point.

The function f(x) = √x is only defined for x ≥ 0.

Therefore, at x = 0, we can only approach from the right.

We can write:
  lim(x→0⁺) √x = 0

A left-hand limit does not exist in the real number system because the function is not defined for negative values of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION TO CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One‑sided limits are also important when studying continuity. For a function to be continuous at a point, the left‑hand and right‑hand limits must agree, and both must equal the actual value of the function at that point. In other words, lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a). If these values are not equal, the function is discontinuous at that point. Thus, checking one‑sided limits is a required step in the definition of continuity. This connection is why one‑sided limits are an important step before studying continuity in depth. They provide the necessary tool to determine whether a function has a removable discontinuity, a jump discontinuity, or is continuous. Without one‑sided limits, the formal definition of continuity would be incomplete.

For a function to be continuous at a point, the left-hand and right-hand limits must agree.

The following must be true:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)

If these values are not equal, the function is discontinuous at that point.

This is why one-sided limits are an important step before studying continuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Type                Notation            Meaning
  ────────────────────────────────────────────────────────────────────────
  Left-Hand Limit     lim(x→a⁻) f(x)     x approaches a from the left
  Right-Hand Limit    lim(x→a⁺) f(x)     x approaches a from the right
  Two-Sided Limit     lim(x→a) f(x)      x approaches a from both sides

  Limit exists if:  |  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A one‑sided limit examines what happens to a function as x approaches a particular value from only one direction. The two types are the left‑hand limit, denoted lim(x→a⁻) f(x), and the right‑hand limit, denoted lim(x→a⁺) f(x). For a two‑sided limit to exist, the left‑hand and right‑hand limits must be equal. This concept is essential for understanding piecewise functions, discontinuities, asymptotes, and continuity. One‑sided limits are also used when a function is only defined on one side of a point, such as at the endpoint of a domain. The most important idea to remember is that a two‑sided limit exists only when the function approaches the same value from both the left and the right. Mastering one‑sided limits is a cornerstone of calculus, paving the way for the study of continuity, derivatives, and integrals.

The two types are:

Left-Hand Limit:
  lim(x→a⁻) f(x)
  Approaches a from values smaller than a.

Right-Hand Limit:
  lim(x→a⁺) f(x)
  Approaches a from values greater than a.

For a two-sided limit to exist:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

The most important idea to remember is:

  A two-sided limit exists only when the function approaches the same 
  value from both the left and the right.

One-sided limits are essential for understanding piecewise functions, discontinuities, asymptotes, continuity, and many other topics in Calculus.
  `,
  examples: [
    "lim(x→3⁻) (x + 2) = 5",
    "lim(x→3⁺) (x + 2) = 5",
    "lim(x→2⁻) x² = 4, lim(x→2⁺) x² = 4 → limit exists",
    "Piecewise: f(x) = {2, x<1; 5, x>1} → lim(x→1⁻) = 2, lim(x→1⁺) = 5 → DNE",
    "lim(x→0⁻) 1/x = -∞",
    "lim(x→0⁺) 1/x = ∞",
    "lim(x→0⁺) √x = 0 (function only defined on right side)",
  ],
};

export default topic;