const topic = {
  id: "types-of-discontinuities",
  title: "Types of Discontinuities",
  summary:
    "Removable, jump, and infinite discontinuities, how to identify them, and comparing their characteristics.",
  details: `
In Calculus, a discontinuity occurs when a function fails to be continuous at a particular point. If a function is continuous, its graph behaves smoothly without a break, hole, or jump. When this behavior is interrupted, we say that the function has a discontinuity.

The three major types of discontinuities are removable discontinuity, jump discontinuity, and infinite discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. REMOVABLE DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A removable discontinuity occurs when a function has a hole at a particular point, but the function approaches a single, finite value as x approaches that point.

The important idea is that the discontinuity can potentially be removed or fixed by assigning the correct value to the function at that point.

Example:

Consider: f(x) = (x² - 4)/(x - 2)

At first, if we substitute x = 2:

  f(2) = (4 - 4)/(2 - 2) = 0/0

The function is therefore undefined at x = 2.

However, we can factor the numerator:

  x² - 4 = (x - 2)(x + 2)

Therefore: f(x) = (x - 2)(x + 2)/(x - 2)

Canceling the common factor gives: f(x) = x + 2, x ≠ 2

Now evaluate the limit:

  lim(x→2) f(x) = lim(x→2) (x + 2) = 4

So even though f(2) is undefined, the function approaches 4 from both sides.

Graphically, this creates a hole at (2, 4).

Why is it called "removable"?

Because we can define: f(2) = 4 and the function would become continuous at x = 2.

General condition:

A removable discontinuity occurs when:

  lim(x→a) f(x) = L

exists as a finite number, but:

  f(a) ≠ L

or f(a) is undefined.

Remember: Removable discontinuity = a hole that can be filled.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. JUMP DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A jump discontinuity occurs when the function approaches different values from the left and right of a particular point.

Instead of smoothly approaching the same value, the graph suddenly jumps from one value to another.

For a two-sided limit to exist, the left-hand and right-hand limits must be equal.

For a jump discontinuity:

  lim(x→a⁻) f(x) ≠ lim(x→a⁺) f(x)

where lim(x→a⁻) means approaching a from the left and lim(x→a⁺) means approaching a from the right.

Example:

Consider: f(x) = { x + 1, if x < 2; x + 3, if x ≥ 2 }

Let's examine what happens at x = 2.

From the left: lim(x→2⁻) f(x) = 2 + 1 = 3

From the right: lim(x→2⁺) f(x) = 2 + 3 = 5

Therefore: lim(x→2⁻) f(x) = 3 while lim(x→2⁺) f(x) = 5

Since 3 ≠ 5, the two-sided limit lim(x→2) f(x) does not exist.

This creates a jump in the graph.

Can a jump discontinuity be fixed by changing one point?

No. Changing f(2) to either 3 or 5 would not fix the problem because the function approaches different values from each side.

Real-world example:

Jump discontinuities can represent situations where something changes suddenly.

For example, suppose a parking fee is:
  • ₱50 for parking less than 2 hours
  • ₱100 for parking 2 hours or more

The price suddenly changes when the time reaches 2 hours. This is similar to the behavior of a jump discontinuity.

Remember: Jump discontinuity = the left and right sides approach different values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INFINITE DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An infinite discontinuity occurs when the function's values increase or decrease without bound as x approaches a particular number.

Instead of approaching a finite number, the function approaches +∞ or −∞.

This type of discontinuity is usually associated with a vertical asymptote.

Example:

Consider: f(x) = 1/(x - 3)

The denominator becomes zero when: x - 3 = 0 → x = 3

So x = 3 is not in the domain.

Now examine the behavior near x = 3.

From the left: lim(x→3⁻) 1/(x - 3) = −∞

From the right: lim(x→3⁺) 1/(x - 3) = +∞

The function becomes extremely large in magnitude as x gets closer to 3.

Therefore: x = 3 is a vertical asymptote and an infinite discontinuity.

Why is it called "infinite"?

Because the function does not approach an ordinary finite number. Instead, its values become arbitrarily large or negative.

For example, from the right side:
  • x = 3.1 gives f(3.1) = 10
  • x = 3.01 gives f(3.01) = 100
  • x = 3.001 gives f(3.001) = 1000

As x gets closer to 3 from the right, the function grows without bound.

Remember: Infinite discontinuity = the function shoots toward +∞ or −∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMPARING THE THREE TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type: Removable
What Happens?: A hole exists
Limit Behavior: Finite limit exists
Graph: Hole

Type: Jump
What Happens?: Graph suddenly changes value
Limit Behavior: Left ≠ Right
Graph: Jump

Type: Infinite
What Happens?: Function becomes unbounded
Limit Behavior: Approaches +∞ or −∞
Graph: Vertical asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. HOW TO DETERMINE THE TYPE OF DISCONTINUITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a function and suspect that it is discontinuous at x = a, follow this process.

Step 1: Find f(a)
  Determine whether the function is actually defined at a.
  If it isn't defined, that is a possible discontinuity, but you still need to determine what type.

Step 2: Find the left-hand limit
  Calculate: lim(x→a⁻) f(x)
  This tells you what the function approaches as x comes toward a from the left.

Step 3: Find the right-hand limit
  Calculate: lim(x→a⁺) f(x)
  This tells you what the function approaches as x comes toward a from the right.

Step 4: Compare the results

Case 1: Left and right limits are equal
  If lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L, then the overall limit exists: lim(x→a) f(x) = L.
  Now compare L with f(a).
  If f(a) = L → continuous.
  If f(a) ≠ L or f(a) doesn't exist → Removable discontinuity.

Case 2: Left and right limits are different
  If lim(x→a⁻) f(x) ≠ lim(x→a⁺) f(x) → Jump discontinuity.

Case 3: The function approaches infinity
  If lim(x→a⁻) f(x) = ±∞ or lim(x→a⁺) f(x) = ±∞ → Infinite discontinuity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SIMPLE DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can think about it like this:

Does the graph have a break at x = a?

↓

Does the function approach the same finite value from both sides?
  Yes → Check f(a)
    f(a) matches → Continuous
    f(a) missing/wrong → Removable
  No → Are the two sides approaching different finite values?
    Yes → Jump discontinuity
    No → Does it approach +∞ or −∞?
      Yes → Infinite discontinuity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Removable:
  Finite limit exists, but the function has a hole.
  Think: "The hole can be filled."

Jump:
  Left-hand limit ≠ Right-hand limit.
  Think: "The graph jumps."

Infinite:
  Function approaches ±∞.
  Think: "The graph shoots toward a vertical asymptote."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EASY MEMORY TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

R → J → I

  • Removable → Results in a hole
  • Jump → Jumps between two values
  • Infinite → Increases/decreases without bound

  Hole = Removable
  Jump = Jump
  Asymptote = Infinite

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Types of Discontinuities, remember:

  • Removable: hole that can be filled (finite limit exists).
  • Jump: left and right limits are different.
  • Infinite: function approaches ±∞ (vertical asymptote).
  • To identify the type, compare left-hand and right-hand limits.
  • A removable discontinuity can be fixed by redefining the function at that point.

The key idea to remember is:

  In Calculus, a discontinuity occurs when a function fails to be continuous at a particular point. The three major types are: Removable (a hole that can be filled), Jump (left and right limits are different), and Infinite (function approaches ±∞, associated with a vertical asymptote). To identify the type, compare the left-hand and right-hand limits at the point in question.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Discontinuities is an essential concept for understanding the behavior of functions and their graphs.

Key concepts covered:

  ✓ Removable Discontinuity
  ✓ Jump Discontinuity
  ✓ Infinite Discontinuity
  ✓ Comparing the Three Types
  ✓ How to Determine the Type
  ✓ Simple Decision Guide
  ✓ Easy Memory Trick
  `,
  examples: [
    "Identify: f(x) = (x² - 4)/(x - 2) → removable discontinuity at x = 2",
    "Identify: f(x) = {x+1 if x<2, x+3 if x≥2} → jump discontinuity at x = 2",
    "Identify: f(x) = 1/(x - 3) → infinite discontinuity at x = 3",
    "Check if removable: lim(x→1) f(x) exists but f(1) undefined → removable",
    "Check if jump: lim(x→2⁻) f(x) = 3, lim(x→2⁺) f(x) = 5 → jump",
    "Check if infinite: lim(x→0⁺) 1/x = ∞ → infinite",
    "Fix removable: define f(2) = 4 to make continuous",
    "Cannot fix jump by changing one point",
    "Infinite discontinuity has vertical asymptote",
    "Hole = Removable discontinuity",
    "Jump = Jump discontinuity",
    "Asymptote = Infinite discontinuity",
    "Removable: finite limit exists",
    "Jump: left ≠ right",
    "Infinite: approaches ±∞",
  ],
};

export default topic;