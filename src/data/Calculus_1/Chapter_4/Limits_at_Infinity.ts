// filename: limits-at-infinity.ts

const topic = {
  id: "limits-at-infinity",
  title: "Limits at Infinity",
  summary:
    "Describes what happens to a function when x becomes extremely large in the positive or negative direction, used to identify horizontal asymptotes and end behavior of functions.",
  details: `
Limits at Infinity describe what happens to a function when x becomes extremely large in the positive or negative direction. In other words, instead of asking what happens when x approaches a particular number such as 2, we ask what happens when:
  x → ∞
or:
  x → -∞.

This topic is especially important because it allows us to understand the end behavior of a function and identify horizontal asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES x → ∞ MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When we write x → ∞, we are describing a process where x grows without any upper bound. It is important to understand that infinity is not a number that x can "reach"; rather, it is a concept representing unbounded growth. We are asking what happens to the function's values as we let x take on larger and larger positive values: 10, 100, 1000, and so on. Similarly, x → -∞ means x becomes more and more negative without bound. The notation lim(x→∞) f(x) = L means that as x grows arbitrarily large, the output f(x) gets arbitrarily close to L. This is a precise way to describe the long-term trend of a function. For example, in f(x) = 1/x, as x grows, the output shrinks toward zero, so the limit is 0. This concept is foundational for understanding horizontal asymptotes and end behavior.

When we write x → ∞, we do not mean that x actually reaches infinity.

Infinity is not an ordinary number.

Instead, x → ∞ means that x becomes larger and larger without bound:
  10, 100, 1,000, 10,000, 100,000, ...

Similarly, x → -∞ means that x becomes more and more negative:
  -10, -100, -1,000, -10,000, ...

So, for example:
  lim(x→∞) f(x) = L

means that as x becomes increasingly large, f(x) gets closer and closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC DEFINITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We say that the limit of f(x) as x approaches infinity is L if the values of f(x) can be made arbitrarily close to L by taking x sufficiently large. This is similar to the epsilon-delta definition of a limit but for unbounded inputs. The formal definition is: for every ε > 0, there exists a number M > 0 such that if x > M, then |f(x) - L| < ε. In practice, we often evaluate limits at infinity by observing the dominant terms in the function. For example, f(x) = 2 + 1/x approaches 2 as x grows because the 1/x term vanishes. Similarly, as x→ -∞, if the function approaches L, we say the limit is L. The notation lim(x→-∞) f(x) = L means the same but for negative unbounded inputs. Understanding this definition is essential for rigorously analyzing end behavior.

We say:
  lim(x→∞) f(x) = L

if the values of f(x) approach L as x becomes arbitrarily large.

Likewise:
  lim(x→-∞) f(x) = L

means that f(x) approaches L as x becomes increasingly negative.

Example:
  Consider f(x) = 2 + 1/x.

  Let's examine what happens as x gets larger:

    x       f(x)
    ───────────────
    10      2.1
    100     2.01
    1,000   2.001
    10,000  2.0001

  The values are getting closer and closer to 2.

  Therefore:
    lim(x→∞) (2 + 1/x) = 2

  The same happens on the negative side:
    lim(x→-∞) (2 + 1/x) = 2

This is the basic idea behind limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. LIMITS AT INFINITY VS. INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is easy to confuse limits at infinity with infinite limits, but they are fundamentally different concepts. A limit at infinity involves the input variable x tending to infinity or negative infinity, while an infinite limit involves the function's output tending to infinity as x approaches a finite value. For example, lim(x→∞) 1/x = 0 is a limit at infinity because x is going to infinity, and the result is a finite number 0. In contrast, lim(x→0⁺) 1/x = ∞ is an infinite limit because as x approaches 0 from the right, the function grows without bound. The notation itself tells you what is happening: in lim(x→∞), the arrow is under the limit, indicating the input goes to infinity; in lim(x→a) f(x) = ∞, the output goes to infinity. Recognizing this distinction is crucial for correctly interpreting and solving problems. Limits at infinity describe end behavior, while infinite limits describe vertical asymptotes or unbounded growth near a point.

These two ideas are easy to confuse.

Limit at infinity:
  lim(x→∞) f(x) = L
  Here, x is going toward infinity.
  Example:
    lim(x→∞) 1/x = 0.

Infinite limit:
  lim(x→a) f(x) = ∞
  Here, f(x) is going toward infinity while x approaches a particular number.
  Example:
    lim(x→0⁺) 1/x = ∞.

So remember:
  x → ∞ → we're studying the function's behavior far to the right.
  f(x) → ∞ → the function itself becomes infinitely large.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HORIZONTAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of limits at infinity is finding horizontal asymptotes. A horizontal asymptote is a horizontal line that the graph approaches as x goes to positive or negative infinity. If the limit of f(x) as x→∞ is L, then the line y = L is a horizontal asymptote on the right side of the graph. Similarly, if the limit as x→-∞ is L, then y = L is a horizontal asymptote on the left side. It is possible for a function to have two different horizontal asymptotes if the limits at ∞ and -∞ are different. For rational functions, we can often determine the horizontal asymptote by comparing the degrees of the numerator and denominator. However, the general method is always to evaluate the limits at infinity. Horizontal asymptotes provide a visual and analytical way to understand the long-term behavior of functions, which is essential for graphing and for applications involving growth and decay.

One of the most important applications of limits at infinity is finding horizontal asymptotes.

If:
  lim(x→∞) f(x) = L

then:
  y = L

is a horizontal asymptote.

Similarly, if:
  lim(x→-∞) f(x) = L

then y = L is a horizontal asymptote on the left side of the graph.

Example:
  f(x) = (3x + 1)/(x + 2)

Find:
  lim(x→∞) (3x + 1)/(x + 2)

Divide every term by x:
  (3x + 1)/(x + 2) = (3 + 1/x)/(1 + 2/x)

As x → ∞, 1/x → 0 and 2/x → 0.

Therefore:
  lim(x→∞) (3 + 1/x)/(1 + 2/x) = (3 + 0)/(1 + 0) = 3

Thus:
  lim(x→∞) (3x + 1)/(x + 2) = 3

and the horizontal asymptote is:
  y = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE MOST IMPORTANT RULE FOR RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions, which are ratios of polynomials, there is a simple rule for evaluating limits at infinity. The key is to compare the degrees of the numerator and denominator polynomials. The degree of a polynomial is the highest power of x with a nonzero coefficient. If the numerator and denominator have the same degree, the limit is the ratio of the leading coefficients. This is because as x grows large, the highest-degree terms dominate all others. If the denominator has a higher degree, the denominator grows faster, so the fraction tends to zero. If the numerator has a higher degree, the fraction grows without bound, so the limit is infinity (or negative infinity, depending on signs and the direction of x). This rule is a shortcut that saves time and is widely used in calculus. However, it is important to understand why it works: the lower-degree terms become negligible compared to the highest-degree terms as x→∞ or x→-∞.

Suppose you have:
  f(x) = P(x)/Q(x)

where P(x) and Q(x) are polynomials.

The easiest method is to compare the highest powers of x in the numerator and denominator.

There are three major cases.

Case 1: Same Degree
  If the numerator and denominator have the same degree, divide the leading coefficients.

Example:
  lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5)

  The highest power in both is x².

  Look only at the leading terms:
    (4x²)/(2x²)

  Therefore:
    lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5) = 2

  because 4/2 = 2.

  Horizontal asymptote: y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CASE 2: NUMERATOR DEGREE IS SMALLER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the denominator has a higher degree than the numerator, the function approaches zero as x→∞ or x→-∞. This is because the denominator grows much faster than the numerator, making the fraction smaller and smaller. For example, in f(x) = (5x + 2)/(x² + 3), the numerator is linear while the denominator is quadratic. As x grows, the denominator dominates, and the fraction tends to 0. This can be seen by dividing numerator and denominator by x², which gives (5/x + 2/x²)/(1 + 3/x²). The terms with x in the denominator vanish, leaving 0/1 = 0. This case always results in a horizontal asymptote at y = 0. This is a common result for rational functions where the denominator grows faster than the numerator, indicating that the function decays to zero as x moves away from the origin.

Suppose the denominator has a higher degree than the numerator.

Example:
  lim(x→∞) (5x + 2)/(x² + 3)

The numerator has degree 1.
The denominator has degree 2.

Because the denominator grows much faster:
  lim(x→∞) (5x + 2)/(x² + 3) = 0

Therefore, the horizontal asymptote is:
  y = 0

Why?
  For very large x:
    5x + 2 ≈ 5x
  while:
    x² + 3 ≈ x²

  So approximately:
    (5x)/(x²) = 5/x

  And 5/x → 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CASE 3: NUMERATOR DEGREE IS LARGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the numerator has a higher degree than the denominator, the function grows without bound as x→∞ or x→-∞. There is no finite horizontal asymptote in this case. Instead, the function's end behavior is either infinite or it has an oblique (slant) asymptote, which is a non-horizontal line. For example, f(x) = (x³ + 2)/(x² + 1) behaves like x as x grows large, because the leading term x³/x² = x. The function approaches the line y = x, which is a slant asymptote. In general, if the numerator degree is exactly one greater than the denominator degree, there is a slant asymptote. If the difference is greater than one, the function behaves like a polynomial of higher degree. In all cases, the limit at infinity is infinite (or negative infinity), meaning there is no horizontal asymptote. This case is important for understanding that not all functions level off at infinity.

Suppose the numerator has a higher degree than the denominator.

Example:
  lim(x→∞) (x³ + 2)/(x² + 1)

The numerator has degree 3.
The denominator has degree 2.

The numerator grows faster.

Therefore:
  lim(x→∞) (x³ + 2)/(x² + 1) = ∞

The function does not approach a finite horizontal asymptote.

For this particular example, polynomial division also tells us that:
  (x³ + 2)/(x² + 1) = x + (2 - x)/(x² + 1)

As x → ∞, (2 - x)/(x² + 1) → 0, so the function behaves approximately like y = x.

Thus it has an oblique/slant asymptote:
  y = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. THE SHORTCUT TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This table summarizes the rules for rational functions at infinity. It is a valuable quick reference. When the numerator degree is less than the denominator degree, the limit is 0. When they are equal, the limit is the ratio of leading coefficients. When the numerator degree is greater, the limit is infinite (or the function has an oblique asymptote). This table works for both x→∞ and x→-∞, though for odd degrees you must consider the sign. For example, if the numerator degree is greater and the leading coefficient is positive, the limit is +∞ as x→∞, but may be -∞ as x→-∞. This shortcut is one of the most frequently used tools in calculus for analyzing rational functions.

For:
  lim(x→±∞) P(x)/Q(x)

compare the degrees:

  Degree Relationship                            Limit Behavior
  ───────────────────────────────────────────────────────────────────────────────────────
  Numerator degree < denominator degree           0
  Numerator degree = denominator degree           Ratio of leading coefficients
  Numerator degree > denominator degree           Usually ±∞ or polynomial/oblique behavior

This degree comparison is one of the fastest ways to evaluate rational-function limits at infinity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: SAME DEGREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the rule to a specific example where the numerator and denominator have the same degree. For f(x) = (7x³ - 4x + 1)/(2x³ + 5x² - 9), both the numerator and denominator are cubic polynomials (degree 3). The leading coefficient of the numerator is 7, and the leading coefficient of the denominator is 2. According to the rule, the limit as x→∞ is the ratio 7/2. This is because the x³ terms dominate, and all lower-degree terms become negligible as x grows. The horizontal asymptote is therefore y = 7/2. This example illustrates how the degree comparison rule works in practice: we ignore all terms except the highest-power terms and then take their ratio. This method is much faster than dividing every term by x³ and taking limits term by term.

Evaluate:
  lim(x→∞) (7x³ - 4x + 1)/(2x³ + 5x² - 9)

Both have degree 3.

Take the leading coefficients:
  7/2

Therefore:
  lim(x→∞) (7x³ - 4x + 1)/(2x³ + 5x² - 9) = 7/2

Horizontal asymptote:
  y = 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: LOWER DEGREE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the numerator has a lower degree than the denominator, the limit at infinity is zero. For example, f(x) = (3x² + 5)/(x⁴ + 2x + 1) has a numerator of degree 2 and a denominator of degree 4. Since the denominator grows much faster, the fraction tends to 0. This is because the denominator's higher-power terms dominate, making the overall value shrink. This result holds for both x→∞ and x→-∞. It also means that the horizontal asymptote is y = 0. Functions like this are often used to model quantities that decay to zero over time or distance. Understanding this case is important for recognizing when a function will approach zero in the long run, which is common in physics, economics, and other fields.

Evaluate:
  lim(x→∞) (3x² + 5)/(x⁴ + 2x + 1)

Numerator degree: 2
Denominator degree: 4

Since 2 < 4, the denominator grows much faster.

Therefore:
  lim(x→∞) (3x² + 5)/(x⁴ + 2x + 1) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: HIGHER DEGREE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When the numerator has a higher degree than the denominator, the limit at infinity is infinite (or negative infinity), meaning there is no horizontal asymptote. For example, f(x) = (2x⁴ + 3x)/(x² + 1) has a numerator of degree 4 and a denominator of degree 2. As x grows, the numerator dominates, and the function behaves like 2x², which tends to infinity. The limit is therefore ∞. This indicates that the function grows without bound as x moves away from the origin. In such cases, the function may have an oblique asymptote if the degrees differ by exactly one, or it may simply grow like a polynomial if the difference is larger. This case is important for understanding functions that do not settle down to a constant value at infinity.

Evaluate:
  lim(x→∞) (2x⁴ + 3x)/(x² + 1)

Numerator degree: 4
Denominator degree: 2

The numerator grows much faster.

Therefore:
  lim(x→∞) (2x⁴ + 3x)/(x² + 1) = ∞

because the dominant behavior is approximately:
  (2x⁴)/(x²) = 2x²

And 2x² → ∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHY THE HIGHEST-POWER TERMS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The reason we focus on the highest-power terms is that as x becomes large, these terms dominate all others. For example, consider f(x) = (8x⁴ + 3x² - 7x + 10)/(2x⁴ - 5x³ + 9). The x⁴ terms are the dominant ones because they grow faster than x³, x², x, or constants. When x = 1000, x⁴ is 10^12, while x² is only 10^6, a million times smaller. Thus, the lower-degree terms contribute negligibly to the value of the function for large x. This is why we can effectively ignore them when evaluating limits at infinity. The function behaves like the ratio of the leading terms: (8x⁴)/(2x⁴) = 4. This insight is the foundation of the degree comparison rule for rational functions. It also applies more generally: when evaluating limits at infinity, always look for the dominant behavior.

This is the key concept behind many limits at infinity.

Consider:
  f(x) = (8x⁴ + 3x² - 7x + 10)/(2x⁴ - 5x³ + 9)

When x becomes enormous, the x⁴ terms dominate.

So we can think of the function as approximately:
  (8x⁴)/(2x⁴)

Cancel x⁴:
  8/2 = 4

Therefore:
  lim(x→∞) f(x) = 4

The smaller-degree terms become relatively insignificant compared with x⁴.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LIMITS AS x → -∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating limits as x→-∞, we must be careful with signs, especially for odd powers. For example, lim(x→-∞) x³ is -∞ because negative numbers raised to odd powers remain negative and grow in magnitude. In contrast, lim(x→-∞) x² is ∞ because even powers are always positive. This sign behavior is crucial for rational functions where the numerator and denominator have odd degrees. For instance, f(x) = (x³)/(x²) = x has limit -∞ as x→-∞, but +∞ as x→∞. If the degrees are equal, the sign of the ratio may depend on the leading coefficients and the direction. For rational functions with equal degree, the limit is the same for both +∞ and -∞ because the ratio of leading coefficients is constant. However, for higher-degree numerator, the sign can differ. Always consider the parity of the highest-degree terms when evaluating limits at negative infinity.

You must be careful when x approaches negative infinity.

For example:
  lim(x→-∞) x³

Because x is negative:
  (-10)³ = -1000
  (-100)³ = -1,000,000

Therefore:
  lim(x→-∞) x³ = -∞

But for an even power:
  lim(x→-∞) x² = ∞

because:
  (-10)² = 100
  (-100)² = 10,000

So:
  lim(x→-∞) x² = ∞
while:
  lim(x→-∞) x³ = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EVEN VS. ODD POWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The distinction between even and odd powers is essential when evaluating limits at negative infinity. Even powers like x², x⁴, x⁶ all tend to +∞ as x→±∞ because the square of a negative number is positive. Odd powers like x, x³, x⁵ tend to -∞ as x→-∞ and +∞ as x→+∞. This behavior affects the sign of limits of rational functions. For example, f(x) = (x³)/(x²) = x has limit -∞ as x→-∞. If the numerator and denominator have the same degree, the sign is determined by the ratio of leading coefficients, which is constant. But if the degrees differ, the sign can change depending on the direction. When you are evaluating a rational function at -∞, it is helpful to note the parity of the highest-degree term in the numerator (if it dominates). This will tell you whether the limit is +∞ or -∞. Keeping this in mind prevents sign errors.

This is extremely useful when dealing with x → -∞.

Even powers:
  x², x⁴, x⁶, ...
  give x^even → +∞ as x → ±∞.

Odd powers:
  x, x³, x⁵, ...
  behave differently:
    x^odd → +∞ as x → +∞
  but:
    x^odd → -∞ as x → -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH x → -∞
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's evaluate a rational function as x→-∞. Consider f(x) = (3x² + 1)/(5x² - 7). Both numerator and denominator have degree 2. Since the degrees are equal, the limit is the ratio of leading coefficients, which is 3/5. This result is the same as for x→∞ because the even powers make the sign irrelevant. The horizontal asymptote is y = 3/5 on both sides. This example shows that for even-degree dominant terms, the limit at -∞ equals the limit at +∞. In contrast, if the numerator had been x³ (odd degree), the limit would have different signs. Always check the degrees and parity to determine the correct result. This example reinforces the rule and the importance of considering the direction of x.

Evaluate:
  lim(x→-∞) (3x² + 1)/(5x² - 7)

Both numerator and denominator have degree 2.

Take the leading coefficients:
  3/5

Therefore:
  lim(x→-∞) (3x² + 1)/(5x² - 7) = 3/5

Notice that the result is the same for x → +∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Exponential functions exhibit dramatic behavior at infinity. For example, eˣ grows very rapidly as x→∞, so eˣ → ∞. Conversely, as x→-∞, eˣ → 0 because eˣ = 1/e^{-x}, and the denominator grows large. This is a classic example of a function with a horizontal asymptote on one side only: y = 0 is a horizontal asymptote as x→-∞, but there is no asymptote as x→∞. Similarly, e^{-x} = 1/eˣ tends to 0 as x→∞ and to ∞ as x→-∞. These results are fundamental and appear frequently in applications like exponential growth and decay models. Understanding the limits of exponential functions at infinity is essential for analyzing population growth, radioactive decay, compound interest, and many other real-world phenomena. They also illustrate that limits at infinity can be different on the two sides.

Limits at infinity also occur with exponential functions.

For example:
  lim(x→∞) 1/eˣ

Since eˣ → ∞, we get:
  1/eˣ → 0

Therefore:
  lim(x→∞) e⁻ˣ = 0

Similarly:
  lim(x→-∞) eˣ = 0

This is because exponential functions can become extremely small or extremely large depending on the direction of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. IMPORTANT STANDARD LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are several standard limits at infinity that you should memorize because they appear frequently in calculus. For reciprocal functions, lim(x→∞) 1/x = 0 and lim(x→-∞) 1/x = 0. For reciprocal powers, lim(x→±∞) 1/xⁿ = 0 for any n > 0. For exponential functions, lim(x→∞) e⁻ˣ = 0 and lim(x→-∞) eˣ = 0. For exponential growth, lim(x→∞) eˣ = ∞. These standard limits are the building blocks for more complex limits. For example, to evaluate lim(x→∞) (5 + 2/x + 3/x²), we use the fact that 1/x and 1/x² tend to zero. Knowing these results saves time and reduces errors. They are also essential for applying the degree comparison rule to rational functions, as they justify why lower-degree terms vanish. Memorizing these standard limits is highly recommended.

You should memorize these common results:

  Reciprocal:
    lim(x→∞) 1/x = 0
    lim(x→-∞) 1/x = 0

  Reciprocal square:
    lim(x→±∞) 1/x² = 0

  Reciprocal power:
    For n > 0, lim(x→∞) 1/xⁿ = 0

  Exponential decay:
    lim(x→∞) e⁻ˣ = 0

  Exponential growth:
    lim(x→∞) eˣ = ∞

These basic limits are useful building blocks for more complicated problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A VERY IMPORTANT CONCEPT: END BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits at infinity describe the end behavior of a function how the function behaves as x moves far to the right or far to the left. This is crucial for understanding the overall shape of the graph and for predicting long-term trends. For example, f(x) = (2x + 1)/(x + 3) has a horizontal asymptote y = 2, so its graph approaches this line as x→±∞. This tells us that the function's values stabilize around 2 for large |x|. End behavior is also important in applications: a population model might approach a carrying capacity, a chemical reaction might approach equilibrium, or a physical system might reach a steady state. In all these cases, the limit at infinity gives the eventual value. It is important to note that a function can cross its horizontal asymptote; the asymptote only describes the limiting behavior, not the entire graph. Understanding end behavior is a key part of curve sketching and mathematical modeling.

Limits at infinity tell us about the end behavior of a function.

For example:
  f(x) = (2x + 1)/(x + 3)

We found:
  lim(x→∞) f(x) = 2

This tells us that the right side of the graph approaches y = 2.

If:
  lim(x→-∞) f(x) = 2

then the left side also approaches y = 2.

So the graph gets closer and closer to y = 2 on both ends.

A horizontal asymptote does not necessarily mean the graph can never cross that line. A function can cross a horizontal asymptote and still approach it as x → ±∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A USEFUL STRATEGY FOR SOLVING LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving limits at infinity, follow a structured approach. First, identify the type of function: is it polynomial, rational, exponential, radical, trigonometric, or a combination? For polynomials and rational functions, look for the dominant terms the highest powers of x. For rational functions, compare the degrees of the numerator and denominator to quickly determine the limit. If the function is more complex, divide every term by the highest power of x in the denominator (or the highest overall power) and then use the standard limits. For exponential functions, consider the behavior of the exponent. This step-by-step method reduces the likelihood of errors and makes even complicated limits manageable. With practice, you will be able to evaluate many limits at infinity almost instantly. The key is to always simplify the expression to a form where the standard limits can be applied.

When you encounter:
  lim(x→∞) f(x)
or:
  lim(x→-∞) f(x)

use this process:

Step 1: Identify the type of function
  Ask: Polynomial? Rational function? Exponential? Radical? Trigonometric? Combination?

Step 2: Look for dominant terms
  For polynomials and rational functions, identify the highest power of x.

Step 3: Compare growth rates
  For rational functions: deg(numerator) vs deg(denominator).

Step 4: Simplify
  Divide by the highest power of x, if necessary.

Step 5: Evaluate
  Use basic limits such as 1/x → 0.

Step 6: Interpret the result
  If the answer is a finite number L, then y = L is a horizontal asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's work through a complete example using the step-by-step method. Evaluate lim(x→∞) (6x² - 4x + 7)/(3x² + 8x - 2). The highest power in both numerator and denominator is x². We divide every term by x², giving (6 - 4/x + 7/x²)/(3 + 8/x - 2/x²). As x→∞, 1/x and 1/x² tend to 0, so the expression simplifies to (6 - 0 + 0)/(3 + 0 - 0) = 2. Thus the limit is 2, and the horizontal asymptote is y = 2. This example shows how the degree comparison rule works in practice. It also illustrates the importance of simplifying by the highest power. This method is reliable and can be applied to any rational function.

Evaluate:
  lim(x→∞) (6x² - 4x + 7)/(3x² + 8x - 2)

Step 1: Identify the highest power
  The highest power is x².

Step 2: Divide everything by x²
  (6 - 4/x + 7/x²)/(3 + 8/x - 2/x²)

Step 3: Apply the limits
  As x → ∞, we know 1/x → 0 and 1/x² → 0.

  Therefore:
    (6 - 0 + 0)/(3 + 0 - 0) = 6/3 = 2

Therefore:
  lim(x→∞) (6x² - 4x + 7)/(3x² + 8x - 2) = 2

and the horizontal asymptote is:
  y = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. GRAPH INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphically, limits at infinity tell you what the graph does at its far ends. As you move to the right along the x-axis (x→∞), the y-values either approach a horizontal line (if the limit is finite) or grow without bound (if the limit is infinite). Similarly, as you move to the left (x→-∞), the y-values approach another horizontal line or grow without bound. This is why limits at infinity are essential for curve sketching: they provide the "outer boundaries" of the graph. For example, if lim(x→∞) f(x) = 4, the right side of the graph approaches the line y = 4. The graph may wiggle or cross this line, but eventually it settles near y = 4. This visual interpretation helps in understanding the overall shape of the function and in predicting its behavior for large inputs.

Think of the graph like this:

x → +∞ means you are walking far to the right on the graph.

x → -∞ means you are walking far to the left.

Then ask:
  What y-value is the graph approaching?

For example:
  lim(x→∞) f(x) = 4

means that far to the right, the graph gets closer and closer to y = 4.

This is why limits at infinity are strongly connected to graphing and horizontal asymptotes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE MAIN THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In summary, limits at infinity describe the behavior of a function as the input grows without bound in the positive or negative direction. The definition is: lim(x→∞) f(x) = L means f(x) approaches L as x becomes arbitrarily large. Similarly for x→-∞. These limits are used to identify horizontal asymptotes, which are lines that the graph approaches as x→±∞. For rational functions, a simple degree comparison gives the result: if the numerator degree is less, the limit is 0; if equal, it's the ratio of leading coefficients; if greater, the limit is infinite (or there is an oblique asymptote). For exponential functions, remember that eˣ grows without bound while e⁻ˣ decays to zero. Always pay attention to the direction of x (positive or negative) because it can affect the sign of the limit, especially for odd powers. Mastering limits at infinity is essential for analyzing end behavior and for many applications in calculus and beyond.

Definition:
  lim(x→∞) f(x) = L
  means f(x) approaches L as x becomes arbitrarily large.

Negative infinity:
  lim(x→-∞) f(x) = L
  means f(x) approaches L as x becomes arbitrarily negative.

Horizontal asymptote:
  If lim(x→±∞) f(x) = L, then y = L is a horizontal asymptote.

Rational-function shortcut:

  Situation                                    Result
  ─────────────────────────────────────────────────────────────────────────────────────
  Top degree < bottom degree                    0
  Top degree = bottom degree                    Leading coefficient ratio
  Top degree > bottom degree                    Usually ±∞ or oblique/polynomial end behavior

Most important intuition:
  Limits at infinity tell you what a function does at the far ends of its graph.
  They don't tell you what happens near a particular x-value; they tell you 
  what happens when x becomes extremely large or extremely negative.
  `,
  examples: [
    "lim(x→∞) (2 + 1/x) = 2",
    "lim(x→∞) (3x + 1)/(x + 2) = 3",
    "lim(x→∞) (4x² + 3x - 1)/(2x² + 7x + 5) = 2",
    "lim(x→∞) (5x + 2)/(x² + 3) = 0",
    "lim(x→∞) (x³ + 2)/(x² + 1) = ∞",
    "lim(x→-∞) x³ = -∞, lim(x→-∞) x² = ∞",
    "lim(x→∞) e⁻ˣ = 0",
  ],
};

export default topic;