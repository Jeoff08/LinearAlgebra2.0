// filename: vertical-asymptotes.ts

const topic = {
  id: "vertical-asymptotes",
  title: "Vertical Asymptotes",
  summary:
    "A vertical line x = a that a function approaches as x gets closer to a particular value, with the function becoming unbounded (±∞) near that value.",
  details: `

 "image": "src/assets_2.3/232.png" 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote is a vertical line x = a that the graph of a function approaches as the input x gets arbitrarily close to a specific value a. At a vertical asymptote, the function's output grows without bound in the positive or negative direction, meaning the limit is either +∞ or -∞. This behavior occurs when the function is undefined at x = a, typically due to division by zero, and the function's values become infinitely large in magnitude as x approaches a from one or both sides. Vertical asymptotes are a sign of infinite discontinuity; they represent a barrier that the graph cannot cross because the function is not defined at that x-value. Understanding vertical asymptotes is crucial for analyzing the behavior of rational functions, trigonometric functions like tangent and secant, and other functions with denominators that can vanish. They provide essential information about the domain and the overall shape of the graph.

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

The simplest example of a vertical asymptote is the reciprocal function f(x) = 1/x. As x approaches 0 from the right (positive side), the denominator becomes a tiny positive number, making the fraction extremely large positive, so the function tends to +∞. As x approaches 0 from the left (negative side), the denominator becomes a tiny negative number, making the fraction extremely large negative, so the function tends to -∞. In both cases, the function grows without bound as x gets closer to 0, and the graph approaches the vertical line x = 0. This line is the vertical asymptote. The function is undefined at x = 0 because division by zero is not allowed. This example illustrates the core idea: a vertical asymptote occurs where the function's values become infinite as x approaches a finite value. The graph has two separate branches on either side of the asymptote.

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

The term "vertical" in vertical asymptote refers to the fact that the asymptote is a vertical line, which has the equation x = a. This line is drawn straight up and down on the coordinate plane, and the graph of the function approaches this line as x gets closer to a. The function itself does not cross the line because it is undefined at x = a; instead, the graph is separated into two branches that run parallel to the asymptote on either side. The vertical direction of the asymptote contrasts with horizontal asymptotes, which are horizontal lines (y = L) that the graph approaches as x goes to infinity. The vertical asymptote represents a boundary in the domain where the function's behavior changes dramatically. Understanding why it is called vertical helps in distinguishing it from other types of asymptotes and in visualizing the graph.

The equation x = 0 represents a vertical line.

The function f(x) = 1/x gets closer and closer to this line, but its values become extremely large in magnitude near x = 0.

The graph has two branches:
  • On the right side of x = 0, the function rises toward +∞.
  • On the left side of x = 0, the function falls toward -∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. VERTICAL ASYMPTOTES AND LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The relationship between vertical asymptotes and limits is direct: if the limit of f(x) as x approaches a is infinite (either +∞ or -∞), then x = a is a vertical asymptote. However, it is important to examine both one-sided limits because the function may approach different infinities from the left and right. For example, for f(x) = 1/x, the left-hand limit is -∞ and the right-hand limit is +∞. Despite this difference, both indicate that x = 0 is a vertical asymptote. In some cases, both one-sided limits may be the same infinity, such as with f(x) = 1/(x - 2)², where both sides approach +∞. The key is that the function becomes unbounded near a. The limit definition provides a rigorous way to identify vertical asymptotes and is the foundation for understanding their behavior. Always check both sides when analyzing vertical asymptotes.

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

Vertical and horizontal asymptotes describe fundamentally different types of behavior. A vertical asymptote is a vertical line x = a where the function becomes unbounded as x approaches a specific value. This is a local phenomenon: it tells us what happens near a particular point in the domain. A horizontal asymptote, on the other hand, is a horizontal line y = L that the function approaches as x goes to +∞ or -∞. This is a global phenomenon: it describes the end behavior of the function. For example, f(x) = 1/x has a vertical asymptote at x = 0 and a horizontal asymptote at y = 0. These two asymptotes coexist in the same function but describe different aspects of its graph. Understanding the difference is crucial for curve sketching and for analyzing the behavior of functions. A function can have both types of asymptotes, one type, or neither.

This distinction is extremely important.

Vertical asymptote:
  x = a
  We examine x → a.
  The function becomes extremely large or extremely negative.
  Example: f(x) = 1/(x - 2)
  Vertical asymptote: x = 2

"image": "src/assets_2.3/233.png"

Horizontal asymptote:
  y = L
  We examine x → ±∞.
  The function approaches a finite y-value.
  Example: f(x) = (2x + 1)/(x + 3)
  Horizontal asymptote: y = 2

"image": "src/assets_2.3/234.png"

Easy memory trick:
  Vertical: x = a → Think specific x-value.
  Horizontal: y = L → Think end behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING VERTICAL ASYMPTOTES OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions, which are ratios of polynomials, vertical asymptotes are typically found by setting the denominator equal to zero. However, it is not enough to simply find where the denominator is zero; we must also check whether the factor cancels with the numerator. If a factor in the denominator cancels with a factor in the numerator, the discontinuity is removable (a hole) rather than an asymptote. If the factor remains in the denominator after cancellation, it produces a vertical asymptote. This is because the denominator approaching zero while the numerator does not causes the function to grow without bound. The process of factoring and canceling is essential for correctly identifying vertical asymptotes. This method works for all rational functions and is a standard technique in calculus.

A very common function is:
  f(x) = P(x)/Q(x)

For rational functions, vertical asymptotes are usually associated with values that make the denominator equal to zero.

So the first step is:
  Q(x) = 0

Then check whether the resulting factor actually produces a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's start with the simplest rational function with a vertical asymptote. For f(x) = 1/(x - 3), the denominator is x - 3. Setting it equal to zero gives x = 3. There are no common factors to cancel, so x = 3 is a vertical asymptote. This function is undefined at x = 3, and as x approaches 3 from either side, the function's values become infinitely large in magnitude. This example illustrates the basic procedure: set the denominator to zero and solve for x. It is a straightforward calculation that applies to many rational functions. The vertical asymptote is always a vertical line at the value that makes the denominator zero, provided no cancellation occurs.

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

Consider f(x) = (2x + 1)/(x + 4). The denominator is x + 4, and setting it to zero gives x = -4. There is no cancellation because the numerator 2x + 1 does not share the factor x + 4. Therefore, x = -4 is a vertical asymptote. This example shows that the numerator does not affect the location of the vertical asymptote; it only affects the behavior on either side of the asymptote (whether the function goes to +∞ or -∞). The vertical asymptote is determined solely by the denominator's zeros after cancellation. This is a key insight for rational functions: the vertical asymptotes occur where the denominator is zero and the numerator is not zero.

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

A rational function can have more than one vertical asymptote if the denominator has multiple distinct factors that do not cancel with the numerator. For example, f(x) = 1/[(x - 2)(x + 3)] has a denominator with two factors: (x - 2) and (x + 3). Setting each factor to zero gives x = 2 and x = -3. Since neither factor cancels, both are vertical asymptotes. This function has two vertical asymptotes, dividing the domain into three intervals. Each asymptote represents a vertical barrier that the graph cannot cross. Functions with multiple vertical asymptotes are common, especially when the denominator is a polynomial with several distinct roots. The graph will have separate branches in each interval between the asymptotes.

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

The cancellation rule is one of the most important concepts when identifying vertical asymptotes. If a factor appears in both the numerator and the denominator, it cancels, and the resulting discontinuity is a hole (removable discontinuity) rather than a vertical asymptote. For example, consider f(x) = (x² - 4)/(x - 2). Factoring the numerator gives (x - 2)(x + 2), which cancels with the denominator (x - 2), leaving f(x) = x + 2, with x ≠ 2. The function has a hole at x = 2 because the original function is undefined there, but the limit exists (it equals 4). There is no vertical asymptote because the function does not grow without bound near x = 2. This distinction is critical: a canceled factor means the discontinuity is removable, not infinite.

This is where students often make mistakes.

"image": "src/assets_2.3/235.png"

This distinction is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HOLE VS. VERTICAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The difference between a hole and a vertical asymptote is determined by whether the discontinuity is removable or infinite. A hole occurs when a factor cancels, meaning the limit exists at that point (though the function is not defined there). A vertical asymptote occurs when a factor remains in the denominator after cancellation, meaning the limit is infinite. For example, f(x) = 1/(x - 2) has no cancellation, so x = 2 is a vertical asymptote. In contrast, g(x) = ((x - 2)(x + 3))/(x - 2) cancels to g(x) = x + 3, with a hole at x = 2. The hole is a single missing point on an otherwise continuous graph, while the vertical asymptote is a break where the graph goes to infinity. Recognizing this difference is essential for correctly graphing functions and understanding their behavior.

"image": "src/assets_2.3/236.png"

Important rule:
  If a denominator factor cancels completely with a numerator factor, the 
  corresponding x-value creates a hole rather than a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH BOTH A HOLE AND A VERTICAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A single rational function can have both holes and vertical asymptotes. Consider f(x) = [(x - 2)(x - 3)]/[(x - 2)(x + 1)]. After canceling the common factor (x - 2), the function simplifies to f(x) = (x - 3)/(x + 1), with x ≠ 2 and x ≠ -1. The factor x - 2 canceled, so x = 2 is a hole. The factor x + 1 did not cancel, so x = -1 is a vertical asymptote. This example demonstrates that a function can have multiple types of discontinuities. The hole at x = 2 is a removable discontinuity where the function is undefined but the limit exists. The vertical asymptote at x = -1 is an infinite discontinuity where the function grows without bound. Understanding both is necessary for a complete analysis of the function's graph.

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

To find vertical asymptotes of a rational function, follow a systematic procedure. First, factor both the numerator and the denominator completely. Then cancel any common factors. The canceled factors indicate holes. The remaining denominator factors indicate vertical asymptotes. Set each remaining denominator factor equal to zero and solve for x. The solutions are the vertical asymptotes. This procedure is reliable and works for all rational functions. It also helps in identifying holes, which are often overlooked. By following these steps, you can accurately determine the vertical asymptotes and holes of any rational function. This is a fundamental skill in calculus and precalculus.

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

Let's apply the step-by-step procedure to a specific rational function. Consider f(x) = (x² - 9)/(x² - x - 6). Factoring gives numerator (x - 3)(x + 3) and denominator (x - 3)(x + 2). The common factor (x - 3) cancels, so x = 3 is a hole. The remaining denominator factor is (x + 2), so setting x + 2 = 0 gives x = -2, which is the vertical asymptote. This example shows how to handle a function with both a hole and a vertical asymptote. It also demonstrates the importance of factoring completely before canceling. Missing a factor could lead to incorrect identification of asymptotes or holes.

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

One-sided limits are essential for understanding the behavior of a function near a vertical asymptote. As x approaches the asymptote from the left (x → a⁻) and from the right (x → a⁺), the function may tend to +∞ or -∞. For f(x) = 1/(x - 2), as x approaches 2 from the left, x - 2 is negative, so the function tends to -∞. As x approaches from the right, x - 2 is positive, so the function tends to +∞. These one-sided limits reveal whether the graph goes up or down on each side of the asymptote. This information is crucial for sketching the graph accurately. In some cases, both sides may go to the same infinity, as with f(x) = 1/(x - 2)², where both sides go to +∞. Always evaluate one-sided limits to fully understand the behavior near a vertical asymptote.

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

Sign analysis is a technique used to determine whether the function goes to +∞ or -∞ on each side of a vertical asymptote. It involves examining the signs of the numerator and denominator for x-values just to the left and right of the asymptote. For f(x) = 1/(x - 3), when x < 3, x - 3 is negative, so the function is negative, and as x → 3⁻, f(x) → -∞. When x > 3, x - 3 is positive, so the function is positive, and as x → 3⁺, f(x) → ∞. This sign analysis helps in sketching the graph and understanding the function's behavior near the asymptote. It is a simple but powerful tool. For more complex rational functions, you may need to consider the signs of both the numerator and the denominator.

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

When the denominator factor is squared, the behavior near the asymptote changes. For f(x) = 1/(x - 2)², the denominator is zero at x = 2, so x = 2 is a vertical asymptote. However, because (x - 2)² is always positive for x ≠ 2, the function is always positive on both sides of the asymptote. As x → 2⁻ and x → 2⁺, the function tends to +∞. Both sides go upward. This is different from the case with an odd power, where the signs differ. The squared denominator makes the function symmetric about the asymptote in terms of sign. This example illustrates how the multiplicity of the denominator factor affects the behavior around the vertical asymptote. In general, even powers lead to the same sign on both sides, while odd powers lead to opposite signs.

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

The multiplicity of the denominator factor (whether the power is odd or even) affects the behavior of the function near the vertical asymptote. For a factor with odd multiplicity, such as (x - a), the sign changes across the asymptote: one side goes to +∞ and the other to -∞. For a factor with even multiplicity, such as (x - a)², the sign remains the same on both sides: both sides go to +∞ or both to -∞ (depending on the numerator's sign). This is because an odd power preserves the sign of (x - a), while an even power always yields a positive value. This principle applies to any rational function. Understanding this helps in predicting the graph's behavior near vertical asymptotes without computing limits. The numerator's sign can also affect the final direction, but the multiplicity of the denominator is the primary factor.

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

Vertical asymptotes are not limited to rational functions; they also appear in trigonometric functions that are defined as ratios. For example, f(x) = tan x = sin x / cos x has vertical asymptotes wherever cos x = 0, because division by zero occurs at those points. This happens at x = π/2 + kπ for any integer k. At these points, the function is undefined, and the graph has vertical asymptotes. Similarly, sec x = 1/cos x has vertical asymptotes at the same values. Cosecant (1/sin x) has vertical asymptotes where sin x = 0, at x = kπ. These trigonometric asymptotes are periodic, repeating at regular intervals. Understanding them is important for graphing trigonometric functions and for solving equations involving these functions. The concept is the same as with rational functions: vertical asymptotes occur where the denominator is zero and does not cancel.

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

The secant function, f(x) = sec x = 1/cos x, also has vertical asymptotes. Since sec x is the reciprocal of cos x, it is undefined whenever cos x = 0. Therefore, its vertical asymptotes occur at the same x-values as tan x: x = π/2 + kπ. At these points, the function grows without bound, and the graph has vertical asymptotes. This is a direct consequence of the fact that division by zero is undefined. Like tan x, sec x has periodic vertical asymptotes. Recognizing these asymptotes is essential for graphing secant functions and for understanding their behavior. The same reasoning applies to cosecant (csc x = 1/sin x), which has vertical asymptotes at x = kπ where sin x = 0.

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

Vertical asymptotes are closely related to the domain of a function. In many cases, the vertical asymptotes correspond to values excluded from the domain. For example, for f(x) = 1/(x - 5), the domain is all real numbers except x = 5, and x = 5 is the vertical asymptote. However, not every excluded domain value is a vertical asymptote. If a factor cancels, the excluded value is a hole, not an asymptote. For instance, f(x) = (x² - 4)/(x - 2) has a domain excluding x = 2, but x = 2 is a hole, not a vertical asymptote. The key distinction is whether the function becomes unbounded near the excluded value. If it does, it's a vertical asymptote; if it approaches a finite limit, it's a hole. Understanding this relationship helps in determining the domain and the nature of discontinuities.

Vertical asymptotes are often related to values excluded from the domain.

"image": "src/assets_2.3/237.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. VERTICAL ASYMPTOTE VS. HOLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The table below summarizes the key differences between vertical asymptotes and holes. Both occur at values where the function is undefined, but the behavior is different. A vertical asymptote is an infinite discontinuity where the function grows without bound, while a hole is a removable discontinuity where the function has a missing point but the limit exists. The distinction is determined by whether the denominator factor cancels with the numerator. If it cancels, it's a hole; if it remains, it's a vertical asymptote. This difference is essential for graphing and for understanding the function's behavior. The table provides a quick reference for identifying and distinguishing between these two types of discontinuities.

This distinction is one of the most important things to understand.

"image": "src/assets_2.3/238.png"

Quick test:
  After factoring:
    If the factor remains in the denominator → vertical asymptote.
    If the factor cancels → hole.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. CAN A VERTICAL ASYMPTOTE BE CROSSED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A vertical asymptote cannot be crossed by the graph of the function because the function is undefined at that x-value. The asymptote is a vertical line that the graph approaches but never intersects. This is in contrast to horizontal asymptotes, which a graph can cross for finite x-values. The vertical asymptote represents a break in the domain where the function's values become infinite. The graph has separate branches on either side of the asymptote, and they never meet. Therefore, the function cannot have a point on the vertical asymptote. This is a fundamental property of vertical asymptotes. Understanding this helps in sketching graphs and in analyzing the behavior of functions near their discontinuities.

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

Let's work through a more complex rational function. Consider f(x) = (x² + 2x - 8)/(x² - 5x + 6). Factoring the numerator gives (x + 4)(x - 2), and factoring the denominator gives (x - 2)(x - 3). The common factor (x - 2) cancels, so x = 2 is a hole. The remaining denominator factor is (x - 3), so setting x - 3 = 0 gives x = 3, which is the vertical asymptote. This example shows how to handle a function with both a hole and a vertical asymptote. It also demonstrates the importance of factoring completely before canceling. The hole at x = 2 is a removable discontinuity, while the vertical asymptote at x = 3 is an infinite discontinuity. This is a typical problem in calculus and precalculus.

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

Limit notation is used to describe the behavior of a function near a vertical asymptote. For example, lim(x→2⁻) f(x) = -∞ means that as x approaches 2 from the left, the function goes to negative infinity. lim(x→2⁺) f(x) = ∞ means that as x approaches 2 from the right, the function goes to positive infinity. If either one-sided limit is infinite, the line x = 2 is a vertical asymptote. This notation is precise and concise. It is used in calculus to describe the behavior of functions at points of discontinuity. Understanding this notation is essential for communicating results and for solving problems involving vertical asymptotes.

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

For quick identification of vertical asymptotes of rational functions, use this checklist. Factor the numerator and denominator completely. Cancel any common factors. The canceled factors indicate holes. The remaining denominator factors indicate vertical asymptotes. Set each remaining denominator factor to zero and solve for x. The solutions are the vertical asymptotes. This procedure is efficient and reliable. It can be applied to any rational function. With practice, you can find vertical asymptotes quickly and accurately. This skill is essential for curve sketching and for solving calculus problems involving rational functions.

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

Let's work through a complete example from start to finish. Find the vertical asymptotes of f(x) = (x² - 1)/(x² + x - 6). First, factor the numerator: x² - 1 = (x - 1)(x + 1). Factor the denominator: x² + x - 6 = (x + 3)(x - 2). There are no common factors, so nothing cancels. Set each denominator factor to zero: x + 3 = 0 gives x = -3, and x - 2 = 0 gives x = 2. Therefore, the vertical asymptotes are x = -3 and x = 2. This example shows a function with two vertical asymptotes and no holes. It illustrates the full process of factoring, checking for cancellation, and solving for the asymptotes. This is a common type of problem in calculus.

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

This table summarizes the differences between horizontal and vertical asymptotes. Vertical asymptotes are vertical lines x = a where the function becomes unbounded as x approaches a. Horizontal asymptotes are horizontal lines y = L where the function approaches L as x goes to ±∞. Vertical asymptotes describe local behavior near a specific x-value, while horizontal asymptotes describe global end behavior. Both are important for understanding the graph of a function, but they represent different aspects. The table provides a quick reference for distinguishing between them. Understanding both types of asymptotes is essential for curve sketching and for analyzing functions.

"image": "src/assets_2.3/239.png"        

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE MOST IMPORTANT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These rules summarize the key concepts for identifying vertical asymptotes. Rule 1: If the limit as x approaches a is infinite, then x = a is a vertical asymptote. Rule 2: For rational functions, find the zeros of the denominator after canceling common factors. Rule 3: A canceled denominator factor produces a hole, not a vertical asymptote. Rule 4: A vertical asymptote is written as x = a, not y = a. Rule 5: Check left and right behavior when necessary. These rules are essential for solving problems correctly. Memorize them and apply them consistently. They will help you avoid common mistakes and accurately identify vertical asymptotes.

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

Here are some practice examples to reinforce the concepts. For f(x) = 1/(x - 4), the vertical asymptote is x = 4. For f(x) = 2/(x + 5), the vertical asymptote is x = -5. For f(x) = 1/[(x - 3)(x + 2)], there are two vertical asymptotes: x = 3 and x = -2. For f(x) = (x - 2)/[(x - 2)(x + 4)], canceling gives f(x) = 1/(x + 4), so x = 2 is a hole and x = -4 is the vertical asymptote. These examples cover the basic cases: single asymptote, multiple asymptotes, and the distinction between holes and asymptotes. Practice with these to build confidence in identifying vertical asymptotes.

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

A vertical asymptote tells us what happens to a function when x gets extremely close to a particular value. The basic form is x = a, and the defining behavior is that the function becomes unbounded (approaches ±∞) as x approaches a. For rational functions, the general strategy is to factor, cancel, set the remaining denominator to zero, and identify the vertical asymptotes. The most important distinction to remember is that an uncanceled denominator factor produces a vertical asymptote, while a canceled denominator factor produces a hole. Vertical asymptotes describe behavior near a specific x-value, while horizontal asymptotes describe end behavior as x goes to infinity. Understanding vertical asymptotes is essential for curve sketching, analyzing limits, and solving problems in calculus.

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