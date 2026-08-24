// filename: vertical-asymptotes.ts

const topic = {
  id: "vertical-asymptotes",
  title: "Vertical Asymptotes",
  summary:
    "A vertical line x = a that a function approaches as x gets closer to a particular value, with the function becoming unbounded (±∞) near that value.",
  details: `
A vertical asymptote is a vertical line that a function approaches as x gets closer and closer to a particular value.

It is written in the form:
  x = a

where a is a specific x-value.

Unlike a horizontal asymptote, which describes what happens when x → ±∞, a vertical asymptote describes what happens when x approaches a particular number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→a) f(x) = ∞

Then:
  x = a

is a vertical asymptote.

It can also happen that:
  lim(x→a) f(x) = -∞

That also means:
  x = a

is a vertical asymptote.

In simple words:
  A vertical asymptote occurs when the function's values become extremely large 
  or extremely negative as x gets closer to a particular x-value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SIMPLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 1/x

Let's examine what happens when x approaches 0.

From the right:
  x → 0⁺ means x approaches zero using positive values:
    0.1, 0.01, 0.001, ...

  Then:
    1/0.1 = 10
    1/0.01 = 100
    1/0.001 = 1000

  Therefore:
    lim(x→0⁺) 1/x = ∞

From the left:
  x → 0⁻ means:
    -0.1, -0.01, -0.001, ...

  Then:
    1/(-0.1) = -10
    1/(-0.01) = -100
    1/(-0.001) = -1000

  Therefore:
    lim(x→0⁻) 1/x = -∞

So x = 0 is a vertical asymptote:
  x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS IT CALLED "VERTICAL"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The equation x = 0 represents a vertical line.

The function f(x) = 1/x gets closer and closer to this line, but its values become extremely large in magnitude near x = 0.

The graph has two branches:
  • On the right side of x = 0, the function rises toward +∞.
  • On the left side of x = 0, the function falls toward -∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VERTICAL ASYMPTOTES AND LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important relationship is:
  lim(x→a) f(x) = ±∞ ⇒ x = a is a vertical asymptote

However, you should often examine the left-hand and right-hand limits separately:
  lim(x→a⁻) f(x)
and:
  lim(x→a⁺) f(x)

They don't have to approach the same infinity.

For example:
  lim(x→0⁻) 1/x = -∞
while:
  lim(x→0⁺) 1/x = ∞

Even though they are different, x = 0 is still a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VERTICAL ASYMPTOTE VS. HORIZONTAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Vertical asymptote:
  x = a
  We examine x → a.
  The function becomes extremely large or extremely negative.
  Example: f(x) = 1/(x - 2)
  Vertical asymptote: x = 2

Horizontal asymptote:
  y = L
  We examine x → ±∞.
  The function approaches a finite y-value.
  Example: f(x) = (2x + 1)/(x + 3)
  Horizontal asymptote: y = 2

Easy memory trick:
  Vertical: x = a → Think specific x-value.
  Horizontal: y = L → Think end behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING VERTICAL ASYMPTOTES OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very common function is:
  f(x) = P(x)/Q(x)

For rational functions, vertical asymptotes are usually associated with values that make the denominator equal to zero.

So the first step is:
  Q(x) = 0

Then check whether the resulting factor actually produces a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the vertical asymptote of:
  f(x) = 1/(x - 3)

Step 1: Set the denominator equal to zero
  x - 3 = 0

Step 2: Solve
  x = 3

Therefore:
  x = 3

is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = (2x + 1)/(x + 4)

Set the denominator equal to zero:
  x + 4 = 0

Therefore:
  x = -4

So the vertical asymptote is:
  x = -4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MULTIPLE VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function can have more than one vertical asymptote.

Consider:
  f(x) = 1/[(x - 2)(x + 3)]

Set the denominator equal to zero:
  (x - 2)(x + 3) = 0

Therefore:
  x - 2 = 0 gives x = 2
and:
  x + 3 = 0 gives x = -3

Thus the function has two vertical asymptotes:
  x = 2
and:
  x = -3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE VERY IMPORTANT CANCELLATION RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where students often make mistakes.

Suppose:
  f(x) = (x² - 4)/(x - 2)

Factor the numerator:
  x² - 4 = (x - 2)(x + 2)

Therefore:
  f(x) = ((x - 2)(x + 2))/(x - 2)

Cancel:
  f(x) = x + 2

but remember that the original function is undefined at x = 2.

So x = 2 is not a vertical asymptote.

Instead, the graph has a hole at x = 2.

This distinction is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOLE VS. VERTICAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Compare these two functions.

Function A:
  f(x) = 1/(x - 2)

At x = 2, the denominator is zero and nothing cancels.

Therefore:
  x = 2 is a vertical asymptote.

Function B:
  g(x) = ((x - 2)(x + 3))/(x - 2)

Cancel:
  g(x) = x + 3, with x ≠ 2

Here the discontinuity is removable.

So x = 2 is a hole, not a vertical asymptote.

Important rule:
  If a denominator factor cancels completely with a numerator factor, the 
  corresponding x-value creates a hole rather than a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH BOTH A HOLE AND A VERTICAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = [(x - 2)(x - 3)]/[(x - 2)(x + 1)]

First factorization is already shown.

Cancel:
  f(x) = (x - 3)/(x + 1), x ≠ 2, 3

Now examine the excluded values.

x = 2:
  The factor x - 2 canceled.
  Therefore: x = 2 is a hole.

x = 3:
  The factor x - 3 did not cancel.
  Therefore: x = 3 is a vertical asymptote.

So one function can have both:
  • a hole at x = 2
  • a vertical asymptote at x = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING VERTICAL ASYMPTOTES STEP BY STEP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function:
  f(x) = P(x)/Q(x)

use this procedure.

Step 1: Factor the numerator
  Factor P(x).

Step 2: Factor the denominator
  Factor Q(x).

Step 3: Cancel common factors
  Any factors that cancel represent holes.

Step 4: Set the remaining denominator equal to zero
  Solve: Q_remaining(x) = 0.

Step 5: Identify vertical asymptotes
  The solutions are the vertical asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find all vertical asymptotes of:
  f(x) = (x² - 9)/(x² - x - 6)

Step 1: Factor the numerator
  x² - 9 = (x - 3)(x + 3)

Step 2: Factor the denominator
  x² - x - 6 = (x - 3)(x + 2)

Therefore:
  f(x) = [(x - 3)(x + 3)]/[(x - 3)(x + 2)]

Step 3: Cancel
  f(x) = (x + 3)/(x + 2)

The factor x - 3 canceled.

Therefore, x = 3 is a hole.

Step 4: Examine the remaining denominator
  x + 2 = 0

Thus:
  x = -2

Therefore, the vertical asymptote is:
  x = -2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes you need to determine what happens on each side of a vertical asymptote.

Consider:
  f(x) = 1/(x - 2)

From the left:
  As x → 2⁻, x - 2 is a tiny negative number.
  For example: x = 1.9 gives:
    1/(1.9 - 2) = 1/(-0.1) = -10

  Therefore:
    lim(x→2⁻) 1/(x - 2) = -∞

From the right:
  As x → 2⁺, x - 2 is a tiny positive number.
  For example: x = 2.1 gives:
    1/(2.1 - 2) = 1/0.1 = 10

  Therefore:
    lim(x→2⁺) 1/(x - 2) = ∞

Thus:
  x = 2 is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIGN ANALYSIS AROUND A VERTICAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Understanding signs is useful for determining whether the graph goes toward +∞ or -∞.

Consider:
  f(x) = 1/(x - 3)

If x < 3:
  Then x - 3 < 0.
  So f(x) < 0.
  As x → 3⁻, f(x) → -∞.

If x > 3:
  Then x - 3 > 0.
  So f(x) > 0.
  As x → 3⁺, f(x) → ∞.

This tells us which direction each side of the graph goes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH A SQUARED DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = 1/(x - 2)²

The denominator is zero at x = 2.

Therefore:
  x = 2 is a vertical asymptote.

But notice the behavior on both sides.

Because (x - 2)² > 0 on both sides of 2:
  lim(x→2⁻) 1/(x - 2)² = ∞
and:
  lim(x→2⁺) 1/(x - 2)² = ∞

So both sides rise toward +∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. ODD VS. EVEN MULTIPLICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The power of the factor can affect the behavior around the asymptote.

Consider:
  1/(x - 2)

The factor has power 1.

The signs are different on the two sides:
  -∞ and +∞.

Now consider:
  1/(x - 2)²

The factor has power 2.

Both sides approach:
  +∞

Generally:
  • Odd power → signs often differ across the asymptote.
  • Even power → signs often remain the same.

The numerator's sign can also affect the final direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. VERTICAL ASYMPTOTES OF TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vertical asymptotes aren't limited to rational functions.

Consider:
  f(x) = tan x

We know:
  tan x = sin x / cos x

The function is undefined whenever cos x = 0.

This occurs at:
  x = π/2 + kπ, k ∈ ℤ

Therefore, the vertical asymptotes are:
  x = π/2 + kπ

for any integer k.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = sec x

Since:
  sec x = 1/cos x

the function is undefined when cos x = 0.

Therefore, its vertical asymptotes occur at:
  x = π/2 + kπ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. VERTICAL ASYMPTOTES AND DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vertical asymptotes are often related to values excluded from the domain.

For example:
  f(x) = 1/(x - 5)

The denominator cannot be zero:
  x - 5 ≠ 0

Therefore:
  x ≠ 5

The domain is:
  (-∞, 5) ∪ (5, ∞)

And x = 5 is the vertical asymptote.

However, remember:
  Not every excluded domain value is a vertical asymptote.

A hole is also an excluded value.

For example:
  f(x) = (x² - 4)/(x - 2)

Here x = 2 is excluded, but it creates a hole rather than an asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. VERTICAL ASYMPTOTE VS. HOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is one of the most important things to understand.

  Feature                Vertical Asymptote          Hole
  ───────────────────────────────────────────────────────────────────────────
  Function undefined?    Yes                         Yes
  Denominator becomes 0  Yes                         Yes
  Factor cancels?        No                          Yes
  Function approaches    ±∞                          No
  Example                1/(x - 2)                   (x - 2)/(x - 2)
  Graph behavior         Goes infinitely up/down     Missing point

Quick test:
  After factoring:
    If the factor remains in the denominator → vertical asymptote.
    If the factor cancels → hole.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CAN A VERTICAL ASYMPTOTE BE CROSSED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function to have a vertical asymptote at x = a, the function must become unbounded near a.

The graph cannot have an ordinary finite point on the asymptote itself because the function is not defined there.

So unlike horizontal asymptotes, vertical asymptotes represent a much stronger restriction.

For example:
  f(x) = 1/(x - 2)

has a vertical asymptote at x = 2.

The function is not defined at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. A MORE COMPLICATED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the vertical asymptotes of:
  f(x) = (x² + 2x - 8)/(x² - 5x + 6)

Step 1: Factor the numerator
  x² + 2x - 8 = (x + 4)(x - 2)

Step 2: Factor the denominator
  x² - 5x + 6 = (x - 2)(x - 3)

Therefore:
  f(x) = [(x + 4)(x - 2)]/[(x - 2)(x - 3)]

Step 3: Cancel
  f(x) = (x + 4)/(x - 3)

The x - 2 factor canceled.

Therefore:
  x = 2 is a hole.

Step 4: Remaining denominator
  x - 3 = 0

So:
  x = 3 is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT LIMIT NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You may see vertical asymptotes written in several ways.

For example:
  lim(x→2⁻) f(x) = -∞

means the function goes toward negative infinity as x approaches 2 from the left.

  lim(x→2⁺) f(x) = ∞

means the function goes toward positive infinity as x approaches 2 from the right.

If either side goes to infinity in magnitude, then:
  x = 2

is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. HOW TO FIND VERTICAL ASYMPTOTES QUICKLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function:
  f(x) = P(x)/Q(x)

use this checklist:

Step 1: Factor the numerator.
Step 2: Factor the denominator.
Step 3: Cancel common factors.
Step 4: Take the remaining denominator.
Step 5: Set it equal to zero.
Step 6: Solve for x.
Step 7: Those values are your vertical asymptotes.
Step 8: Any canceled denominator factors correspond to holes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. WORKED EXAMPLE FROM START TO FINISH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the vertical asymptotes of:
  f(x) = (x² - 1)/(x² + x - 6)

Factor numerator:
  x² - 1 = (x - 1)(x + 1)

Factor denominator:
  x² + x - 6 = (x + 3)(x - 2)

Therefore:
  f(x) = [(x - 1)(x + 1)]/[(x + 3)(x - 2)]

Nothing cancels.

Set each denominator factor equal to zero:
  x + 3 = 0 → x = -3
  x - 2 = 0 → x = 2

Therefore, the vertical asymptotes are:
  x = -3
and:
  x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. HORIZONTAL VS. VERTICAL ASYMPTOTES — FINAL COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature                Vertical Asymptote          Horizontal Asymptote
  ───────────────────────────────────────────────────────────────────────────
  Form                   x = a                       y = L
  What happens?          f(x) → ±∞                   f(x) → L
  x approaches           A specific number           ±∞
  Usually found from     Denominator = 0 after       Limits at infinity /
                         cancellation                degree comparison
  Example                x = 2                       y = 3
  Describes              Behavior near a specific    End behavior
                         x-value                   

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE MOST IMPORTANT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember these:

Rule 1:
  If lim(x→a) f(x) = ±∞, then x = a is a vertical asymptote.

Rule 2:
  For rational functions, find zeros of the denominator after canceling common factors.

Rule 3:
  A canceled denominator factor produces a hole, not a vertical asymptote.

Rule 4:
  A vertical asymptote is written as x = a — not y = a.

Rule 5:
  Check left and right behavior when necessary:
    lim(x→a⁻) f(x) and lim(x→a⁺) f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. QUICK PRACTICE EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1:
  f(x) = 1/(x - 4)
  Vertical asymptote: x = 4

Example 2:
  f(x) = 2/(x + 5)
  Vertical asymptote: x = -5

Example 3:
  f(x) = 1/[(x - 3)(x + 2)]
  Vertical asymptotes: x = 3, x = -2

Example 4:
  f(x) = (x - 2)/[(x - 2)(x + 4)]
  Cancel: f(x) = 1/(x + 4)
  Therefore: x = 2 → hole, x = -4 → vertical asymptote
  So: x = -4 is the vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote tells us what happens to a function when x gets extremely close to a particular value.

The basic form is:
  x = a

and the defining behavior is:
  lim(x→a⁻) f(x) = ±∞ or lim(x→a⁺) f(x) = ±∞

For rational functions, the general strategy is:
  Factor → Cancel → Set remaining denominator = 0 → Vertical asymptotes

The most important distinction to remember is:
  • Uncanceled denominator factor → Vertical asymptote
  • Canceled denominator factor → Hole

And the easiest way to remember the difference from horizontal asymptotes is:
  • Vertical: x = a
  • Horizontal: y = L

Vertical asymptotes describe what happens near a specific x-value, while horizontal asymptotes describe what happens at the far ends of the graph.
  `,
  examples: [
    "f(x) = 1/x → vertical asymptote x = 0",
    "f(x) = 1/(x - 3) → vertical asymptote x = 3",
    "f(x) = (2x + 1)/(x + 4) → vertical asymptote x = -4",
    "f(x) = 1/[(x - 2)(x + 3)] → vertical asymptotes x = 2, x = -3",
    "f(x) = (x² - 4)/(x - 2) → hole at x = 2 (not a vertical asymptote)",
    "f(x) = tan x → vertical asymptotes at x = π/2 + kπ",
    "f(x) = (x² - 1)/(x² + x - 6) → vertical asymptotes x = -3, x = 2",
  ],
};

export default topic;