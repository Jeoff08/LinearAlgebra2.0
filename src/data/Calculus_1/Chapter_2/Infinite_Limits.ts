// filename: infinite-limits.ts

const topic = {
  id: "infinite-limits",
  title: "Infinite Limits",
  summary:
    "When a function increases or decreases without bound as the input approaches a particular value, represented by ∞ or -∞, often associated with vertical asymptotes.",
  details: `
An infinite limit occurs when the value of a function increases or decreases without bound as the input approaches a particular number. In other words, as x gets closer and closer to a certain value, the function does not approach an ordinary finite number such as 2, -5, or 1/3. Instead, the function grows extremely large in the positive or negative direction. We use the symbols ∞ and -∞ to describe this behavior. For example, lim(x→0⁺) 1/x = ∞ means that as x approaches 0 from the positive side, the value of 1/x increases without bound. Understanding infinite limits is essential for analysing vertical asymptotes, discontinuities, and the overall behaviour of rational and other functions.


For example:
  lim(x→0⁺) 1/x = ∞

This means that as x approaches 0 from the positive side, the value of 1/x increases without bound.

"image": "src/assets/99.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES INFINITY MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol ∞ does not represent an ordinary real number. Instead, it describes a quantity that grows without limit. For example, the sequence 10, 100, 1000, 10000, ... continues increasing without ever reaching a largest value. There is no largest real number, so when we write f(x) → ∞, we mean that the function becomes larger and larger without any upper limit. Similarly, f(x) → -∞ means that the function becomes more and more negative without any lower limit. Infinity is a concept, not a number; it describes the unbounded growth of a function's values as the input approaches a certain point. This distinction is crucial because many students mistakenly treat ∞ as a number, which can lead to incorrect algebraic manipulations. In calculus, infinity is used as a convenient shorthand to describe behaviour that is not finite, and it often signals the presence of a vertical asymptote.

For example:
  10, 100, 1000, 10000, ...

These numbers continue increasing.

There is no largest real number.

Therefore, when we write f(x) → ∞, we mean:
  The function becomes larger and larger without any upper limit.

Similarly, f(x) → -∞ means:
  The function becomes more and more negative without any lower limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC EXAMPLE OF AN INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let us examine the function f(x) = 1/x as x approaches zero from the right. As x takes values like 0.1, 0.01, 0.001, and 0.0001, the reciprocals become 10, 100, 1000, and 10000, respectively. These values grow without bound; there is no finite number that they approach. Thus, the function increases without limit, and we say that the limit is positive infinity. This example illustrates the core idea of an infinite limit: the function's output becomes arbitrarily large as the input gets closer to a particular value. It also shows that the behaviour depends on the direction of approach, which is why we often use one-sided limits when dealing with infinite limits.

  x       1/x
  ─────────────
  0.1     10
  0.01    100
  0.001   1000
  0.0001  10000

As x → 0⁺, the values become larger and larger.

Therefore:
  lim(x→0⁺) 1/x = ∞

The function increases without bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. APPROACHING FROM THE LEFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider the same function f(x) = 1/x, but this time approach zero from the left, using negative values like -0.1, -0.01, -0.001, and -0.0001. The reciprocals become -10, -100, -1000, and -10000, respectively. These values become increasingly negative without bound. Thus, the function decreases without limit, and we write the limit as -∞. This example demonstrates that the direction of approach is critical: approaching from the right gives +∞, while approaching from the left gives -∞. This asymmetry often indicates that the two‑sided limit does not exist, even though the one‑sided limits are infinite. Understanding this is essential for correctly interpreting the behaviour of rational functions near points where the denominator is zero.

  x        1/x
  ─────────────────
  -0.1     -10
  -0.01    -100
  -0.001   -1000
  -0.0001  -10000

As x → 0⁻, the values become more and more negative.

Therefore:
  lim(x→0⁻) 1/x = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. TWO-SIDED INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = 1/x, we found that the left‑hand limit is -∞ and the right‑hand limit is +∞. Because these two one‑sided limits are not equal (in fact, they are opposite infinities), the two‑sided limit as x approaches 0 does not exist. In many textbooks, this is stated as lim(x→0) 1/x does not exist. It is important to distinguish between a limit that does not exist because of an infinite oscillation (like sin(1/x)) and one that does not exist because the function grows without bound in different directions. Even though the two‑sided limit does not exist, we can still describe the behaviour using one‑sided infinite limits. This is a common situation for rational functions that have a vertical asymptote where the sign of the denominator changes across the asymptote.

For f(x) = 1/x, we found:
  lim(x→0⁻) 1/x = -∞
and:
  lim(x→0⁺) 1/x = ∞

The two sides behave differently.

Therefore:
  lim(x→0) 1/x does not exist

This is because the left-hand and right-hand behaviors are not the same.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE WHERE BOTH SIDES GO TO POSITIVE INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider f(x) = 1/x². As x approaches zero from either side, the denominator x² is always positive because squaring any non‑zero number gives a positive result. Therefore, the reciprocal is always positive, and it grows without bound as x gets closer to zero. For instance, at x = -0.1 and x = 0.1, the function value is 100. At x = -0.01 and x = 0.01, it is 10000. Both sides approach +∞. In this case, the two‑sided limit exists and is ∞. This is a simpler case than 1/x because the squared denominator eliminates the sign difference. Such functions have a vertical asymptote at x = 0 where the graph rises to +∞ on both sides. Recognising when the denominator is always positive helps determine the sign of the infinite limit.

From the left:
  x = -0.1 → 1/(-0.1)² = 100

From the right:
  x = 0.1 → 1/(0.1)² = 100

Both sides become extremely large and positive.

Therefore:
  lim(x→0) 1/x² = ∞

This happens because x² is always positive for values of x near zero, except at zero itself.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE WHERE BOTH SIDES GO TO NEGATIVE INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = -1/x². Here the numerator is negative, while the denominator is always positive near zero. Hence, the entire fraction is negative for all non‑zero x. As x approaches zero, the magnitude of the fraction grows without bound, but because of the negative sign, it goes to -∞ from both sides. This is the mirror image of the previous example: the graph has a vertical asymptote at x = 0, but it falls to -∞ on both sides. This illustrates that the sign of the infinite limit is determined by the signs of the numerator and denominator. By carefully analysing the signs, we can predict whether the function tends to +∞ or -∞ without computing many values.

As x → 0⁻, the denominator becomes a very small positive number, so the result becomes very negative.

As x → 0⁺, the same thing happens.

Therefore:
  lim(x→0) -1/x² = -∞

The function decreases without bound from both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INFINITE LIMITS AND VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits are closely connected to vertical asymptotes. A vertical asymptote is a vertical line x = a that the graph approaches but never touches or crosses (in the sense that the function becomes unbounded). If either the left‑hand or right‑hand limit (or both) is infinite at x = a, then the line x = a is a vertical asymptote. For example, for f(x) = 1/(x - 2), as x approaches 2 from the right, the denominator is positive and very small, so the function goes to +∞; from the left, it goes to -∞. Therefore, x = 2 is a vertical asymptote. Vertical asymptotes indicate a discontinuity where the function is not defined, and they are important for sketching graphs and understanding the domain of rational functions. Recognising when a denominator factor causes an infinite limit helps us locate asymptotes quickly.

If:
  lim(x→a⁻) f(x) = ∞
or:
  lim(x→a⁺) f(x) = ∞

then x = a is usually a vertical asymptote.

Example:
  Consider f(x) = 1/(x - 2).

The denominator becomes zero when x = 2.

Let's approach 2 from the right:
  x = 2.1 → f(2.1) = 1/0.1 = 10
  x = 2.01 → f(2.01) = 1/0.01 = 100

Therefore:
  lim(x→2⁺) 1/(x - 2) = ∞

Now approach from the left:
  x = 1.9 → f(1.9) = 1/(-0.1) = -10
  x = 1.99 → f(1.99) = 1/(-0.01) = -100

Therefore:
  lim(x→2⁻) 1/(x - 2) = -∞

The graph has a vertical asymptote at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO DETERMINE THE SIGN OF AN INFINITE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving infinite limits involving fractions, it is essential to examine the signs of the numerator and denominator as x approaches the target value. For a fraction of the form P(x)/Q(x), if Q(x) → 0 and P(x) → a non‑zero constant, the sign of the limit is determined by the sign of P(x) divided by the sign of Q(x) as x approaches from the given side. For example, for 1/(x - 3) as x → 3⁺, the denominator is positive (small positive), so the fraction is positive and large, giving +∞. As x → 3⁻, the denominator is negative (small negative), so the fraction is negative and large, giving -∞. If the numerator is negative, the signs reverse. This sign analysis is a quick and reliable method for determining the direction of the infinite limit, especially when combined with knowledge of the behavior of linear factors near their roots.

For example:
  1/(x - 3)

As x → 3⁺, the denominator is a very small positive number.
  positive / small positive = very large positive

So:
  lim(x→3⁺) 1/(x - 3) = ∞

As x → 3⁻, the denominator is a very small negative number.
  positive / small negative = very large negative

So:
  lim(x→3⁻) 1/(x - 3) = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INFINITE LIMITS OF RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits commonly occur in rational functions, which are ratios of polynomials. The typical situation is when the denominator approaches zero while the numerator does not. The points where the denominator is zero are candidates for vertical asymptotes, provided the numerator is not also zero at that point (which would create a removable discontinuity instead). For example, f(x) = (x + 1)/(x - 4) has a vertical asymptote at x = 4 because the denominator is zero there and the numerator is 5, which is non‑zero. As x approaches 4, the fraction grows without bound. Rational functions can have multiple vertical asymptotes, one for each distinct real root of the denominator that does not cancel with the numerator. Understanding where these asymptotes occur is crucial for graphing rational functions and for evaluating their limits, as the function's behavior near these points is dominated by the denominator's approach to zero.

A rational function has the form:
  f(x) = P(x)/Q(x)

Infinite behavior often occurs when Q(x) = 0 and the numerator does not also cancel the factor causing the denominator to become zero.

Example:
  f(x) = (x + 1)/(x - 4)

The denominator becomes zero when x = 4.

At values close to 4, the denominator becomes extremely small.

Therefore, the function may become extremely large in either the positive or negative direction.

The vertical asymptote is x = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH A SQUARED DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = 3/(x - 2)². Here the denominator is the square of (x - 2), which is always non‑negative and equals zero only at x = 2. As x approaches 2, the denominator becomes a very small positive number (since a square is never negative), so the fraction becomes very large positive, regardless of the direction of approach. Therefore, the two‑sided limit is +∞. This is a common pattern: any positive constant divided by a squared linear factor will tend to +∞. If the numerator were negative, it would tend to -∞. Squared denominators often produce two‑sided infinite limits with the same sign because the denominator does not change sign near the asymptote. This makes them easier to handle than linear denominators, which change sign and produce different signs on each side.

As x → 2, the denominator approaches 0, but (x - 2)² is always positive.

Therefore, the fraction becomes extremely large and positive from both sides.

Thus:
  lim(x→2) 3/(x - 2)² = ∞

The vertical asymptote is x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH A NEGATIVE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider f(x) = -3/(x - 2)². The denominator is still positive near x = 2, but the numerator is negative. Therefore, the fraction is always negative, and its magnitude grows without bound as x approaches 2. Thus, the function tends to -∞ from both sides. This is the counterpart to the previous example and shows that the sign of the numerator determines the sign of the infinite limit when the denominator is always positive. In general, when dealing with even powers in the denominator, the sign of the limit is simply the sign of the numerator (or the constant factor). This rule simplifies the analysis of many rational functions and is a useful shortcut.

The denominator is always positive near x = 2.

The numerator is negative.

Therefore, the function becomes extremely negative from both sides.

Thus:
  lim(x→2) -3/(x - 2)² = -∞

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. IMPORTANT DIFFERENCE: INFINITE LIMIT VS. LIMIT AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two topics may sound similar, but they are distinct and should not be confused. An infinite limit examines what happens to the function's values as the input approaches a specific finite number, and the values themselves become unbounded (∞ or -∞). For example, lim(x→0) 1/x² = ∞ is an infinite limit because x approaches 0 (a finite number) and the function grows without bound. On the other hand, a limit at infinity examines what happens to the function's values as the input itself becomes arbitrarily large (positive or negative). For example, lim(x→∞) 1/x = 0 is a limit at infinity because x grows without bound and the function approaches a finite number (0). The notation is similar but the meaning is completely different. Mixing them up can lead to errors in problem solving. In calculus, both concepts are important but serve different purposes: infinite limits help locate vertical asymptotes, while limits at infinity help locate horizontal asymptotes.

Infinite Limit:
  An infinite limit examines what happens near a specific number.
  Example:
    lim(x→0) 1/x² = ∞
  Here, x is approaching 0.

Limit at Infinity:
  A limit at infinity examines what happens when x itself becomes extremely large.
  Example:
    lim(x→∞) 1/x = 0
  Here, x is growing without bound.

Therefore:
  Infinite limits and limits at infinity are different concepts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INFINITE LIMITS AND ONE-SIDED LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits often require one-sided limits because the behavior can be different on each side of the point in question. For instance, f(x) = 1/(x - 1) has a vertical asymptote at x = 1. Approaching from the left gives -∞, while approaching from the right gives +∞. Since the two one-sided limits are not equal (and are infinite in opposite directions), the two-sided limit does not exist. However, we can still state the one-sided limits. This is a common occurrence for rational functions with linear factors in the denominator. In some cases, both one-sided limits may be the same sign, as with 1/x², allowing the two-sided limit to be ∞ or -∞. When writing solutions, it is often necessary to specify the direction of approach using the superscript + or -. This precision is vital for correctly interpreting the behavior of the function and for graphing.

For example:
  f(x) = 1/(x - 1)

Approaching from the left:
  lim(x→1⁻) 1/(x - 1) = -∞

Approaching from the right:
  lim(x→1⁺) 1/(x - 1) = ∞

Since the two sides are different, the ordinary limit does not exist:
  lim(x→1) 1/(x - 1) does not exist

However, we can still identify a vertical asymptote at x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHY INFINITE LIMITS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Infinite limits are fundamental for understanding situations where a function becomes unbounded near a specific point. They are essential for identifying vertical asymptotes, which are critical features in the graph of a function. They also help us analyze discontinuities especially infinite discontinuities and understand the behavior of rational functions. In calculus, infinite limits appear when studying improper integrals, where the integrand becomes infinite within the interval of integration. They also play a role in the definition of the derivative and in understanding the slope of tangent lines when the function grows without bound. Moreover, they are a stepping stone to more advanced topics like asymptotic analysis and limits at infinity. Mastering infinite limits provides a deeper intuition for how functions behave, which is essential for success in calculus and its applications.

Infinite limits help us understand situations where a function becomes extremely large near a particular point.

They are important for:
  • Identifying vertical asymptotes
  • Understanding rational functions
  • Analyzing discontinuities
  • Studying graph behavior
  • Understanding rates of growth
  • Preparing for advanced Calculus topics

Infinite limits also help us understand why some functions are not continuous.

For example, a function with a vertical asymptote cannot be continuous at the asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. STEPS FOR SOLVING INFINITE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an infinite limit, you can follow these systematic steps to ensure accuracy. First, identify the point that x is approaching; this is usually where the denominator might be zero. Second, check the denominator to see if it approaches zero; if it does, the limit may be infinite. Third, evaluate the left‑hand and right‑hand limits separately to see if they agree in sign and magnitude. Fourth, analyze the signs of the numerator and denominator as x approaches the point from each side; this determines whether the limit is +∞ or -∞. Finally, if the function grows without bound, identify the vertical asymptote. This process is especially useful for rational functions but can be adapted to other functions with similar unbounded behavior. By following these steps, you can confidently determine infinite limits and understand the function's behavior near critical points.

Step 1: Identify the Point
  Determine the value that x is approaching.
  Example: x → 2

Step 2: Check the Denominator
  Determine whether the denominator approaches zero.
  For example: 1/(x - 2)
  At x = 2, the denominator becomes zero.

Step 3: Check Each Side
  Evaluate lim(x→2⁻) and lim(x→2⁺) separately.

Step 4: Analyze the Signs
  Determine whether the numerator and denominator are:
    • Positive
    • Negative
  This helps determine whether the function approaches ∞ or -∞.

Step 5: Identify the Vertical Asymptote
  If the function increases or decreases without bound near x = a, then x = a is a vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"image": "src/assets/81.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An infinite limit occurs when a function increases or decreases without bound as x approaches a particular value. The notation lim(x→a) f(x) = ∞ means that f(x) becomes larger and larger without bound, while lim(x→a) f(x) = -∞ means that f(x) becomes more and more negative without bound. Infinite limits are closely related to vertical asymptotes, which are vertical lines that the graph approaches but does not cross. They are distinct from limits at infinity, which describe the function's behavior as x itself grows large. Understanding infinite limits is essential for analyzing rational functions, discontinuities, and graph behavior, and they are a fundamental concept in calculus. The most important idea to remember is that an infinite limit does not mean the function reaches infinity; it means the function grows or decreases without bound as the input approaches a particular value.

The most important idea to remember is:

  An infinite limit does not mean the function reaches infinity. It means 
  the function grows or decreases without bound as the input approaches 
  a particular value.

Infinite limits are essential for understanding rational functions, asymptotes, discontinuities, graph behavior, and more advanced topics in Calculus.
  `,
  examples: [
    "lim(x→0⁺) 1/x = ∞",
    "lim(x→0⁻) 1/x = -∞",
    "lim(x→0) 1/x² = ∞",
    "lim(x→0) -1/x² = -∞",
    "lim(x→2⁺) 1/(x-2) = ∞",
    "lim(x→2⁻) 1/(x-2) = -∞",
    "lim(x→2) 3/(x-2)² = ∞",
  ],
};

export default topic;