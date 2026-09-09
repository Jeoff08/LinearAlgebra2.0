// filename: horizontal-asymptotes.ts

const topic = {
  id: "horizontal-asymptotes",
  title: "Horizontal Asymptotes",
  summary:
    "A horizontal line y = L that a graph approaches as x approaches positive or negative infinity, determined by limits at infinity.",
  details: `
A horizontal asymptote is a horizontal line that a graph approaches as x becomes extremely large in the positive or negative direction.

In other words, a horizontal asymptote describes the end behavior of a function.

If:
  lim(x→∞) f(x) = L
or:
  lim(x→-∞) f(x) = L

then the line:
  y = L

is a horizontal asymptote of the graph of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A HORIZONTAL ASYMPTOTE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal asymptote is a horizontal line that the graph of a function approaches as x moves far to the right or far to the left. This line represents the limiting value that the function's output approaches but may never actually reach for finite x. Horizontal asymptotes capture the long-term behavior of a function, telling us whether the function levels off to a constant value, grows without bound, or oscillates as x becomes very large in magnitude. For rational functions, horizontal asymptotes are determined by the degrees of the numerator and denominator polynomials. However, other functions like exponential, logarithmic, and trigonometric functions also exhibit horizontal asymptotes. It's important to note that a function can have at most two horizontal asymptotes (one as x→∞ and one as x→-∞), and they may be different. Understanding horizontal asymptotes is crucial for sketching graphs, analyzing end behavior, and solving limit problems at infinity.

Imagine walking along the graph toward the right side.

If the graph appears to get closer and closer to a horizontal line, that line is a horizontal asymptote.

For example, consider:
  f(x) = 1/x

As x → ∞, the values become:
  1/10 = 0.1
  1/100 = 0.01
  1/1000 = 0.001

The values are approaching 0.

Therefore:
  lim(x→∞) 1/x = 0

So:
  y = 0

is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. HORIZONTAL ASYMPTOTES VS. VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is essential to distinguish between horizontal and vertical asymptotes, as they describe different aspects of a function's behavior. A horizontal asymptote is a horizontal line y = L that the graph approaches as x goes to positive or negative infinity. It describes end behavior and indicates that the function is settling to a finite value in the long run. In contrast, a vertical asymptote is a vertical line x = a where the function grows without bound (tends to ±∞) as x approaches a from one or both sides. Vertical asymptotes occur at points where the function is undefined, typically due to division by zero, and they describe local behavior near a singular point. For example, the function f(x) = 1/x has a horizontal asymptote y = 0 (as x→∞ or x→-∞) and a vertical asymptote x = 0 (as x→0). Recognizing both types of asymptotes is key to understanding the full picture of a function's graph.

Horizontal asymptote:
  A horizontal line y = L.
  The graph approaches this line as x → ∞ or x → -∞.
  Example: y = 0 for f(x) = 1/x.

Vertical asymptote:
  A vertical line x = a.
  The graph approaches this line as x approaches a from one or both sides.
  Example: x = 0 for f(x) = 1/x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FINDING HORIZONTAL ASYMPTOTES FOR RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions, which are ratios of polynomials, finding horizontal asymptotes is straightforward and depends solely on the degrees of the numerator and denominator polynomials. The degree of a polynomial is the highest power of x with a nonzero coefficient. There are three cases to consider. First, if the degree of the numerator is less than the degree of the denominator, the function approaches zero as x grows large, so the horizontal asymptote is y = 0. Second, if the degrees are equal, the horizontal asymptote is the ratio of the leading coefficients (the coefficients of the highest-degree terms). Third, if the numerator degree is greater, there is no horizontal asymptote; the function grows without bound (or has an oblique asymptote, which is a slant line). This rule provides a quick way to determine end behavior without computing limits, though limits can always be used for verification.

For a rational function:
  f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials, compare the degrees.

There are three cases.

Case 1: Degree of numerator < degree of denominator
  The horizontal asymptote is:
    y = 0

Example:
  f(x) = (x + 2)/(x² + 1)

  Degree of numerator: 1
  Degree of denominator: 2

  Since 1 < 2:
    lim(x→∞) (x + 2)/(x² + 1) = 0

  Horizontal asymptote: y = 0

Case 2: Degree of numerator = degree of denominator
  The horizontal asymptote is:
    y = leading coefficient of numerator / leading coefficient of denominator

Example:
  f(x) = (3x² + 2x + 1)/(2x² - 5)

  Degree of numerator: 2
  Degree of denominator: 2

  Leading coefficients: 3 and 2

  Horizontal asymptote: y = 3/2

Case 3: Degree of numerator > degree of denominator
  There is no horizontal asymptote.
  The function grows without bound or has an oblique asymptote.

Example:
  f(x) = (x³ + 1)/(x² + 2)

  Degree of numerator: 3
  Degree of denominator: 2

  Since 3 > 2, there is no horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FINDING HORIZONTAL ASYMPTOTES USING LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most general method for finding horizontal asymptotes is to evaluate the limits of the function as x approaches positive infinity and negative infinity. If either limit exists and equals a finite number L, then the line y = L is a horizontal asymptote. This approach works for any function, not just rational functions. To evaluate such limits, we often divide the numerator and denominator by the highest power of x in the denominator, or use known limits for exponential, logarithmic, and trigonometric functions. For example, for f(x) = (2x+3)/(x-1), dividing numerator and denominator by x gives (2 + 3/x)/(1 - 1/x), which tends to 2 as x→∞. It is important to check both sides separately, as some functions have different limits on the left and right. This limit method is the definition of a horizontal asymptote and is always reliable.

To find a horizontal asymptote, evaluate:
  lim(x→∞) f(x)
and:
  lim(x→-∞) f(x)

If either limit is a finite number L, then:
  y = L

is a horizontal asymptote.

Example:
  f(x) = (2x + 3)/(x - 1)

Find:
  lim(x→∞) (2x + 3)/(x - 1)

Divide by x:
  = (2 + 3/x)/(1 - 1/x)

As x → ∞:
  3/x → 0 and 1/x → 0

Therefore:
  lim(x→∞) (2 + 0)/(1 - 0) = 2

Similarly:
  lim(x→-∞) (2x + 3)/(x - 1) = 2

So the horizontal asymptote is:
  y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. A FUNCTION CAN HAVE TWO DIFFERENT HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is possible for a function to have two distinct horizontal asymptotes, one as x→∞ and another as x→-∞. This occurs when the function approaches different constant values from the two directions. Such behavior is common in functions that are not symmetric, like exponential functions and inverse trigonometric functions. For example, f(x) = eˣ approaches 0 as x→-∞ but grows without bound as x→∞, so it has only one horizontal asymptote (y = 0) on the left. However, f(x) = arctan(x) approaches π/2 as x→∞ and -π/2 as x→-∞, giving two horizontal asymptotes. Functions with two distinct horizontal asymptotes are often used to model processes that saturate at different upper and lower bounds. Recognizing the possibility of two asymptotes is important for correctly describing the full end behavior of a function.

Some functions approach different values on the left and right sides.

Example:
  f(x) = eˣ

As x → ∞:
  eˣ → ∞

So no horizontal asymptote on the right.

As x → -∞:
  eˣ → 0

So:
  y = 0

is a horizontal asymptote on the left.

Example:
  f(x) = arctan(x)

As x → ∞:
  arctan(x) → π/2

As x → -∞:
  arctan(x) → -π/2

So there are two horizontal asymptotes:
  y = π/2 and y = -π/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FUNCTIONS WITH NO HORIZONTAL ASYMPTOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every function has a horizontal asymptote. When a function grows without bound (tends to infinity or negative infinity) as x→∞ or x→-∞, it does not have a horizontal asymptote in that direction. For example, polynomial functions with degree greater than zero all grow without bound as x→±∞, so they have no horizontal asymptotes. Exponential functions like eˣ grow without bound on the right, so they lack a right-hand horizontal asymptote. Similarly, logarithmic functions grow without bound but do so slowly; they still have no finite limit at infinity. Functions that oscillate without settling down, such as sin(x), also lack horizontal asymptotes because their limits at infinity do not exist. Recognizing when a function has no horizontal asymptote is just as important as identifying one, as it indicates that the function's values continue to change without converging to a constant.

If the function grows without bound as x → ∞ or x → -∞, there is no horizontal asymptote.

Examples:

f(x) = x²
  As x → ∞, x² → ∞.
  As x → -∞, x² → ∞.
  No horizontal asymptote.

f(x) = eˣ
  As x → ∞, eˣ → ∞.
  No horizontal asymptote on the right.

f(x) = x³ + 2x
  As x → ∞, the function → ∞.
  No horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. HORIZONTAL ASYMPTOTES AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common misconception is that a graph cannot cross its horizontal asymptote. In reality, a horizontal asymptote describes behavior as x→±∞, and the graph may cross the asymptote line for finite values of x. For example, the function f(x) = (x²+1)/(x²-1) has a horizontal asymptote y = 1 because as x→∞, the function approaches 1. However, for x = 2, f(2) = (4+1)/(4-1) = 5/3 ≈ 1.67, which is above 1; for x = 3, f(3) = 10/8 = 1.25, still above; but it may cross y = 1 if the equation f(x) = 1 has a finite solution. Indeed, solving (x²+1)/(x²-1) = 1 gives x²+1 = x²-1 → 1 = -1, which has no solution, so it never crosses in that case. But other functions, like f(x) = (x+1)/(x) = 1 + 1/x, has y = 1 as horizontal asymptote, and for x negative, 1 + 1/x can be less than 1 and cross below. So the asymptote is a guide to end behavior, not a boundary that the graph cannot cross.

A horizontal asymptote does not mean the graph can never cross the line.

In fact, a graph can cross a horizontal asymptote.

For example:
  f(x) = (x² + 1)/(x² - 1)

As x → ∞:
  f(x) → 1

So y = 1 is a horizontal asymptote.

However, the graph may cross y = 1 for some finite values of x.

The asymptote only describes the behavior as x → ±∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the rules to several rational functions. For f(x) = (5x² - 3x + 2)/(2x² + 4x - 1), the numerator and denominator both have degree 2, so the horizontal asymptote is the ratio of leading coefficients: 5/2. For f(x) = (2x + 5)/(3x² + 1), the numerator degree is 1 and denominator degree is 2, so the horizontal asymptote is y = 0. For f(x) = (x⁴ + 2x²)/(x² + 1), the numerator degree 4 is greater than denominator degree 2, so there is no horizontal asymptote; the function grows like x² as x→∞. These examples illustrate the three cases and show how the degree comparison works in practice. It is also important to consider that for functions that are not rational, such as exponentials or arctangent, we must use limit evaluation directly.

Example 1:
  f(x) = (5x² - 3x + 2)/(2x² + 4x - 1)

  Both numerator and denominator have degree 2.

  Leading coefficients: 5 and 2.

  Horizontal asymptote:
    y = 5/2

Example 2:
  f(x) = (2x + 5)/(3x² + 1)

  Numerator degree: 1
  Denominator degree: 2

  Since 1 < 2:
    Horizontal asymptote: y = 0

Example 3:
  f(x) = (x⁴ + 2x²)/(x² + 1)

  Numerator degree: 4
  Denominator degree: 2

  Since 4 > 2:
    No horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the rules for horizontal asymptotes of rational functions. For non-rational functions, you must compute the limits directly. The table is a useful memory aid. When the numerator degree is less than the denominator, the asymptote is always y = 0. When they are equal, it's the ratio of leading coefficients. When the numerator degree is greater, there is no horizontal asymptote. Additionally, remember that a function can have two different horizontal asymptotes if the limits at ∞ and -∞ are different. This table provides a quick check for common problems.

  Situation                                        Horizontal Asymptote
  ─────────────────────────────────────────────────────────────────────────────────────────
  deg(num) < deg(den)                             y = 0
  deg(num) = deg(den)                             y = leading coefficient ratio
  deg(num) > deg(den)                             No horizontal asymptote

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A horizontal asymptote describes where a function "settles down" as x becomes extremely large or extremely negative. It is a horizontal line that the graph approaches but does not necessarily touch or cross in the limit. The asymptote is determined by evaluating limits at infinity. For rational functions, a simple degree comparison provides the answer, but for more general functions, direct limit evaluation is necessary. It is crucial to remember that a horizontal asymptote tells you the end behavior of a function, not its behavior near a specific point. This concept is widely used in curve sketching, analyzing growth rates, and understanding the long-term trends in mathematical models. By mastering horizontal asymptotes, you gain insight into how functions behave as inputs grow without bound, which is essential in calculus and its applications.

A horizontal asymptote describes where a function "settles down" as x becomes extremely large or extremely negative.

It is found by evaluating:
  lim(x→∞) f(x)
and:
  lim(x→-∞) f(x)

For rational functions, compare the degrees of the numerator and denominator.

The most important thing to remember is:

  A horizontal asymptote tells you the end behavior of a function, not 
  its behavior near a specific point.
  `,
  examples: [
    "f(x) = 1/x → horizontal asymptote y = 0",
    "f(x) = (3x² + 2x + 1)/(2x² - 5) → horizontal asymptote y = 3/2",
    "f(x) = (x + 2)/(x² + 1) → horizontal asymptote y = 0",
    "f(x) = (2x + 3)/(x - 1) → horizontal asymptote y = 2",
    "f(x) = eˣ → horizontal asymptote y = 0 on the left",
    "f(x) = arctan(x) → horizontal asymptotes y = π/2 and y = -π/2",
    "f(x) = x² → no horizontal asymptote",
  ],
};

export default topic;