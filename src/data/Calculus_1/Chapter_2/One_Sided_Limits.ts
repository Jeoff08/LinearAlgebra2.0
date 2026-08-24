// filename: one-sided-limits.ts

const topic = {
  id: "one-sided-limits",
  title: "One-Sided Limits",
  summary:
    "Limits that examine what happens to a function as x approaches a particular value from only one direction, either from the left or from the right.",
  details: `
A one-sided limit is a limit where we examine what happens to a function as x approaches a particular value from only one direction.

Normally, when we write:
  lim(x→a) f(x)

we are looking at what happens as x approaches a from both the left and the right.

However, sometimes a function behaves differently depending on which side we approach from. In these situations, we use one-sided limits.

There are two types of one-sided limits:
  • Left-hand limit
  • Right-hand limit

Understanding one-sided limits is very important because they help us determine whether an ordinary two-sided limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A ONE-SIDED LIMIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A one-sided limit examines the behavior of a function from only one side of a particular value.

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

The left-hand limit examines what happens as x approaches a value from numbers that are smaller than that value.

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

    x     |  f(x) = x + 2
    ───────┼─────────────────
    2.9   |  4.9
    2.99  |  4.99
    2.999 |  4.999

  As x gets closer to 3, the output gets closer to 5.

  Therefore:
    lim(x→3⁻) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The right-hand limit examines what happens as x approaches a value from numbers greater than that value.

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

    x     |  f(x) = x + 2
    ───────┼─────────────────
    3.1   |  5.1
    3.01  |  5.01
    3.001 |  5.001

  As x gets closer to 3, the output gets closer to 5.

  Therefore:
    lim(x→3⁺) (x + 2) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RELATIONSHIP BETWEEN ONE-SIDED AND TWO-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a normal two-sided limit to exist, the left-hand and right-hand limits must be equal.

Mathematically:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

If both sides approach the same value L, then:
  lim(x→a) f(x) = L

However, if the left-hand and right-hand limits are different, the two-sided limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WHERE THE TWO-SIDED LIMIT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

One-sided limits are especially important when working with piecewise functions.

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

When looking at a graph, one-sided limits are determined by following the graph from a particular direction.

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

Consider a function with a hole at x = 2.

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

Sometimes a function increases or decreases without bound when approaching a value from one side.

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

One-sided limits help us understand functions that behave differently on different parts of their graphs.

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

One-sided limits are also important when studying continuity.

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

A one-sided limit examines what happens to a function as x approaches a particular value from only one direction.

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