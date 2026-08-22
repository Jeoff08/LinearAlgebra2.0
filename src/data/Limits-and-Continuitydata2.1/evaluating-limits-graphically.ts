const topic = {
  id: "evaluating-limits-graphically",
  title: "Evaluating Limits Graphically",
  summary:
    "Reading limits from graphs, left-hand and right-hand limits, open and filled circles, infinite limits, and limits at infinity.",
  details: `
Evaluating limits graphically means determining what value a function approaches by looking at its graph as x gets closer and closer to a particular number.

The basic notation is:

  lim(x→a) f(x) = L

This means that as x approaches a, the graph of f(x) approaches the y-value L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING A LIMIT FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function whose graph approaches the point (2, 5) as x approaches 2.

Then: lim(x→2) f(x) = 5

The important thing is that we are looking at where the graph is heading, not necessarily the actual value of f(2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE FUNCTION VALUE VS. THE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts.

A graph might have an open circle at (2, 5) but a filled point somewhere else, such as (2, 8).

In this situation:
  • f(2) = 8
  • lim(x→2) f(x) = 5

Why? Because the limit looks at what happens to the function as x approaches 2, not necessarily what happens exactly at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. READING A LIMIT FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When given a graph, follow these steps:

Step 1: Find the x-value
  Identify the value that x is approaching. For example: x → 3

Step 2: Approach From the Left
  Move along the graph toward x = 3 from values smaller than 3.
  Determine the y-value the graph approaches: lim(x→3⁻) f(x)

Step 3: Approach From the Right
  Now approach x = 3 from values greater than 3.
  Determine: lim(x→3⁺) f(x)

Step 4: Compare
  If lim(x→3⁻) f(x) = lim(x→3⁺) f(x), then the two-sided limit exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The left-hand limit describes what happens as x approaches a value from the left.

It is written: lim(x→a⁻) f(x)

Example: If the graph approaches 4 as x approaches 2 from the left:

  lim(x→2⁻) f(x) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The right-hand limit describes what happens as x approaches a value from the right.

It is written: lim(x→a⁺) f(x)

If the graph approaches 4 from the right:

  lim(x→2⁺) f(x) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. TWO-SIDED LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The normal limit: lim(x→a) f(x)

exists when the left-hand and right-hand limits are equal.

Therefore: lim(x→a) f(x) = L

when: lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: LIMIT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a graph where both sides approach y = 3 as x approaches 2.

Then:
  • lim(x→2⁻) f(x) = 3
  • lim(x→2⁺) f(x) = 3

Therefore: lim(x→2) f(x) = 3

Even if there is an open circle at (2, 3), the limit is still 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the graph approaches y = 2 from the left, but y = 5 from the right.

Then:
  • lim(x→3⁻) f(x) = 2
  • lim(x→3⁺) f(x) = 5

Since 2 ≠ 5, we conclude: lim(x→3) f(x) does not exist.

This is called a jump discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. OPEN CIRCLES AND LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An open circle on a graph usually indicates that the function does not include that point.

Example: If the graph approaches (1, 4) with an open circle, then:

  lim(x→1) f(x) = 4

even though f(1) might be undefined.

An open circle does not automatically mean that the limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FILLED POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A filled point represents the actual function value.

Suppose: f(2) = 7 but the graph approaches 5 from both sides.

Then:
  • f(2) = 7
  • lim(x→2) f(x) = 5

This demonstrates that function value ≠ limit can occur.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INFINITE LIMITS FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the graph increases without bound as x approaches a particular value.

Example: f(x) = 1/x²

As x approaches 0: f(x) → ∞

Therefore: lim(x→0) 1/x² = ∞

The graph has a vertical asymptote at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LIMITS AT INFINITY FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A graph can also show what happens as x becomes extremely large or extremely negative.

Example: f(x) = 1/x

As x → ∞, the graph approaches y = 0.

Therefore: lim(x→∞) 1/x = 0

Similarly: lim(x→-∞) 1/x = 0

The horizontal asymptote is y = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING A LIMIT FROM A GRAPH: QUICK METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a graph and are asked: lim(x→a) f(x)

use this process:

① Locate x = a
  Find the vertical line corresponding to a.

② Look from the left
  Determine where the graph is approaching.

③ Look from the right
  Determine where the graph is approaching.

④ Compare
  If both sides approach the same y-value: Limit exists
  If they approach different values: Limit DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON GRAPH SITUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graph Behavior: Both sides approach the same y-value
Limit: Exists

Graph Behavior: Left and right approach different values
Limit: DNE

Graph Behavior: Open circle but both sides approach same value
Limit: Exists

Graph Behavior: Function has a different filled-point value
Limit: Limit can still exist

Graph Behavior: Graph approaches +∞
Limit: Infinite limit

Graph Behavior: Graph approaches -∞
Limit: Infinite limit

Graph Behavior: Graph approaches a horizontal line as x → ∞
Limit: Limit at infinity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. LIMIT VS. CONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is continuous at x = a when:

  lim(x→a) f(x) = f(a)

Graphically, this generally means the graph has no break, hole, or jump at that point.

If the limit exists but the function value is missing, the function is not continuous there.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPORTANT TOPICS TO STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Evaluating Limits Graphically, you should understand:

  • Reading limits from graphs
  • Left-hand limits
  • Right-hand limits
  • Two-sided limits
  • Open circles
  • Filled points
  • Function value versus limit
  • Limits that exist
  • Limits that do not exist
  • Jump discontinuities
  • Holes/removable discontinuities
  • Infinite limits
  • Vertical asymptotes
  • Limits at infinity
  • Horizontal asymptotes
  • Continuity from graphs
  • Interpreting graphical behavior
  • Estimating limits visually

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Evaluating Limits Graphically, remember:

  • The limit looks at where the graph is heading, not the actual value.
  • Always check both the left and right sides.
  • Open circles do not prevent a limit from existing.
  • If the left and right limits are different, the limit does not exist.
  • Infinite limits show vertical asymptotes.
  • Limits at infinity show horizontal asymptotes.

The key idea to remember is:

  Evaluating limits graphically means looking at where the graph is heading as x approaches a particular value. Always examine the graph from both the left and the right. If both sides approach the same y-value, that value is the limit; if they approach different values, the limit does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluating Limits Graphically is an essential skill for visualizing the behavior of functions and understanding the concept of limits.

Key concepts covered:

  ✓ Understanding a Limit From a Graph
  ✓ Function Value vs. Limit
  ✓ Reading a Limit From a Graph
  ✓ Left-Hand Limits
  ✓ Right-Hand Limits
  ✓ Two-Sided Limits
  ✓ Limits That Exist
  ✓ Limits That Do Not Exist
  ✓ Open Circles and Limits
  ✓ Filled Points
  ✓ Infinite Limits
  ✓ Limits at Infinity
  ✓ Quick Method for Finding Limits
  ✓ Common Graph Situations
  ✓ Limit vs. Continuity
  `,
  examples: [
    "Find: lim(x→2) f(x) when graph approaches (2,5) → 5",
    "Distinguish: f(2)=8 but lim(x→2) f(x)=5 → function value ≠ limit",
    "Find left-hand limit: lim(x→2⁻) f(x) = 4",
    "Find right-hand limit: lim(x→2⁺) f(x) = 4",
    "Determine if limit exists: left=3, right=5 → DNE",
    "Find limit with open circle: lim(x→1) f(x)=4 even if f(1) undefined",
    "Find limit with filled point: f(2)=7 but lim(x→2) f(x)=5",
    "Find infinite limit: lim(x→0) 1/x² = ∞",
    "Find limit at infinity: lim(x→∞) 1/x = 0",
    "Identify vertical asymptote from graph: x=0",
    "Identify horizontal asymptote from graph: y=0",
    "Use quick method: locate a, look left, look right, compare",
    "Identify jump discontinuity from graph",
    "Identify removable discontinuity (hole) from graph",
    "Continuity condition: lim(x→a) f(x) = f(a)",
  ],
};

export default topic;