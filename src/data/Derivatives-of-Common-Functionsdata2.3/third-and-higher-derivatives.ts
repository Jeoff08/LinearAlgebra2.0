const topic = {
  id: "third-and-higher-derivatives",
  title: "Third and Higher Derivatives — Detailed Explanation",
  summary:
    "Third, fourth, and higher derivatives, notation, patterns for polynomials, trigonometric functions, and applications.",
  details: `
The third and higher derivatives are simply what we get when we continue differentiating a function after finding its first and second derivatives.

The easiest way to understand them is to think of differentiation as repeatedly asking: "How is this quantity changing?"

For example:
  • f(x) is the original quantity.
  • f'(x) tells us how f(x) changes.
  • f''(x) tells us how f'(x) changes.
  • f'''(x) tells us how f''(x) changes.
  • And we can continue indefinitely: f⁽⁴⁾(x), f⁽⁵⁾(x), f⁽⁶⁾(x), ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: y = f(x)

  • The first derivative is: f'(x)
  • The second derivative is: f''(x)
  • The third derivative is: f'''(x)
  • The fourth derivative is: f⁽⁴⁾(x)
  • The fifth derivative is: f⁽⁵⁾(x)
  • The general n-th derivative is: f⁽ⁿ⁾(x)

The important thing is that each derivative is obtained by differentiating the previous derivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THINK OF IT AS A CHAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can visualize differentiation like this:

  f(x) → f'(x) → f''(x) → f'''(x) → f⁽⁴⁾(x) → ...

Each arrow means: Differentiate

Example: f(x) = x⁵

  x⁵ → 5x⁴ → 20x³ → 60x² → 120x → 120 → 0

Therefore: f⁽⁶⁾(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FIRST, SECOND, AND THIRD DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's use: f(x) = x⁴

First derivative: f'(x) = 4x³
  This tells us about the slope of the function.

Second derivative: f''(x) = 12x²
  This tells us about how the slope changes.

Third derivative: f'''(x) = 24x
  This tells us how the second derivative changes.

So: f'''(x) = d/dx[f''(x)]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT DOES THE THIRD DERIVATIVE ACTUALLY MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where students often get confused.

We know:
  • f'(x) = rate of change of f(x)
  • f''(x) = rate of change of f'(x)
  • f'''(x) = rate of change of f''(x)

So: f'''(x) = rate of change of the second derivative

You can think of it as a rate of a rate of a rate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PHYSICAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The clearest example comes from motion.

Suppose s(t) represents the position of an object.

  • Position: s(t) — tells us where the object is.
  • Velocity: s'(t) = v(t) — tells us how quickly the position changes.
  • Acceleration: s''(t) = a(t) — tells us how quickly the velocity changes.
  • Jerk: s'''(t) = j(t) — tells us how quickly the acceleration changes.

Therefore: s → s' → s'' → s''' means Position → Velocity → Acceleration → Jerk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: POSITION → VELOCITY → ACCELERATION → JERK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t⁴ - 4t³ + 6t²

Step 1: Position
  s(t) = t⁴ - 4t³ + 6t²

Step 2: Velocity
  s'(t) = 4t³ - 12t² + 12t
  Therefore: v(t) = 4t³ - 12t² + 12t

Step 3: Acceleration
  s''(t) = 12t² - 24t + 12
  Therefore: a(t) = 12t² - 24t + 12

Step 4: Jerk
  s'''(t) = 24t - 24
  Therefore: j(t) = 24t - 24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHAT HAPPENS WHEN WE DIFFERENTIATE A POLYNOMIAL REPEATEDLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most useful patterns.

Suppose: f(x) = x⁶

We repeatedly apply the Power Rule.

  f'(x) = 6x⁵
  f''(x) = 30x⁴
  f'''(x) = 120x³
  f⁽⁴⁾(x) = 360x²
  f⁽⁵⁾(x) = 720x
  f⁽⁶⁾(x) = 720
  f⁽⁷⁾(x) = 0

Notice what happens to the exponent: 6 → 5 → 4 → 3 → 2 → 1 → 0

Once we differentiate the constant 720: d/dx(720) = 0

So: f⁽⁷⁾(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IMPORTANT POLYNOMIAL RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a polynomial has degree n, then its (n+1)-th derivative = 0.

For example, a fourth-degree polynomial: f(x) = ax⁴ + bx³ + cx² + dx + e

will eventually become: f⁽⁴⁾(x) = 24a

and then: f⁽⁵⁾(x) = 0

This is a very important property of polynomials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. GENERAL FORMULA FOR xⁿ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: f(x) = xⁿ

  • First derivative: f'(x) = n·xⁿ⁻¹
  • Second derivative: f''(x) = n(n-1)·xⁿ⁻²
  • Third derivative: f'''(x) = n(n-1)(n-2)·xⁿ⁻³
  • Fourth derivative: f⁽⁴⁾(x) = n(n-1)(n-2)(n-3)·xⁿ⁻⁴

The k-th derivative is:

  f⁽ᵏ⁾(x) = n(n-1)(n-2)...(n-k+1)·xⁿ⁻ᵏ

Using factorial notation: f⁽ᵏ⁾(x) = n!/(n-k)! · xⁿ⁻ᵏ

when k ≤ n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHY DOES THE FACTORIAL APPEAR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's use: f(x) = x⁵

The third derivative is: f'''(x) = 5(4)(3)·x²

The coefficient is: 5(4)(3) = 60

Using factorials: 5!/(5-3)! = 5!/2! = 120/2 = 60

Therefore: f'''(x) = 60x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. HIGHER DERIVATIVES OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric functions have a very interesting pattern.

Start with: f(x) = sin(x)

  f'(x) = cos(x)
  f''(x) = -sin(x)
  f'''(x) = -cos(x)
  f⁽⁴⁾(x) = sin(x)

Now the original function has returned.

So: sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x)

The pattern repeats every four derivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. HIGHER DERIVATIVES OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with: f(x) = cos(x)

  f'(x) = -sin(x)
  f''(x) = -cos(x)
  f'''(x) = sin(x)
  f⁽⁴⁾(x) = cos(x)

Again: The cycle repeats every 4 derivatives.

This means you can determine a high-order derivative without differentiating hundreds of times.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE: FIND THE 100TH DERIVATIVE OF sin(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because the pattern repeats every four derivatives:

  sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x)

We calculate: 100 ÷ 4 = 25

There is no remainder.

Therefore, the 100th derivative returns to: sin(x)

So: d¹⁰⁰/dx¹⁰⁰[sin(x)] = sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. HIGHER DERIVATIVES OF eˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider: f(x) = eˣ

  f'(x) = eˣ
  f''(x) = eˣ
  f'''(x) = eˣ
  f⁽⁴⁾(x) = eˣ

No matter how many times we differentiate: f⁽ⁿ⁾(x) = eˣ

This makes eˣ especially important in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. HIGHER DERIVATIVES OF aˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = aˣ

  • First derivative: f'(x) = aˣ·ln(a)
  • Second derivative: f''(x) = aˣ·(ln(a))²
  • Third derivative: f'''(x) = aˣ·(ln(a))³

Therefore: f⁽ⁿ⁾(x) = aˣ·(ln(a))ⁿ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. HIGHER DERIVATIVES OF ln(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = ln(x)

  • First derivative: f'(x) = 1/x
  • Second derivative: f''(x) = -1/x²
  • Third derivative: f'''(x) = 2/x³
  • Fourth derivative: f⁽⁴⁾(x) = -6/x⁴
  • Fifth derivative: f⁽⁵⁾(x) = 24/x⁵

Notice the pattern in the numerator: 1, 1, 2, 6, 24, ...

These are factorials.

The general formula is: dⁿ/dxⁿ[ln(x)] = (-1)ⁿ⁻¹ · (n-1)!/xⁿ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THIRD DERIVATIVE AND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative tells us about concavity:
  • f''(x) > 0 → concave up
  • f''(x) < 0 → concave down

The third derivative tells us how the concavity itself is changing.

Since f'''(x) = d/dx[f''(x)], it tells us how quickly the second derivative is increasing or decreasing.

For example, if f'''(x) > 0, then f''(x) is increasing.
If f'''(x) < 0, then f''(x) is decreasing.

This becomes especially useful in more advanced curve analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THIRD DERIVATIVE AND INFLECTION POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall that an inflection point occurs when the graph changes concavity.

Since concavity depends on f''(x), we often look for points where f''(x) = 0 or where f''(x) is undefined.

The third derivative can sometimes help us investigate these candidates.

For example, if f''(c) = 0 and f'''(c) ≠ 0, then f'' crosses through zero near c, which is strong evidence that the concavity changes there.

However, the safest method is still to check the sign of f'' on both sides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. HIGHER DERIVATIVES IN TAYLOR SERIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Third and higher derivatives become extremely important in Taylor and Maclaurin series.

A Taylor expansion is:

  f(x) = f(a) + f'(a)(x-a) + f''(a)/2! · (x-a)² + f'''(a)/3! · (x-a)³ + ...

The general form is:

  f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ

Notice that we need: f'(a), f''(a), f'''(a), f⁽⁴⁾(a), ...

This is why higher derivatives are extremely important when moving into Calculus 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE: MACLAURIN SERIES OF eˣ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For f(x) = eˣ, we know: f'(x) = eˣ, f''(x) = eˣ, f'''(x) = eˣ, and so on.

At x = 0: f(0) = 1 and f⁽ⁿ⁾(0) = 1

Therefore: eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...

Higher derivatives are what allow us to construct this infinite polynomial approximation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. HIGHER DERIVATIVES AND DIFFERENTIAL EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Higher derivatives also appear frequently in differential equations.

For example: y'' + y = 0 contains a second derivative.

Another equation might contain: y''' + 2y'' + y' = 0 which contains a third derivative.

In general: y⁽ⁿ⁾ represents the n-th derivative.

This becomes a major topic in differential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Thinking f''(x) means squaring
  f''(x) does not mean [f'(x)]².
  It means: differentiate twice.

❌ Mistake 2: Forgetting to differentiate the previous derivative
  If f'(x) = 6x², then f''(x) = 12x, and not another application of the original function.
  Always work sequentially: f → f' → f'' → f'''

❌ Mistake 3: Confusing the order
  Remember: f'''(x) is the third derivative, while f⁽⁴⁾(x) is the fourth derivative.
  The number in parentheses tells you the order.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. A COMPLETE WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the first five derivatives of: f(x) = 2x⁶ - 3x⁴ + 5x² - 7

  • Original function: f(x) = 2x⁶ - 3x⁴ + 5x² - 7
  • First derivative: f'(x) = 12x⁵ - 12x³ + 10x
  • Second derivative: f''(x) = 60x⁴ - 36x² + 10
  • Third derivative: f'''(x) = 240x³ - 72x
  • Fourth derivative: f⁽⁴⁾(x) = 720x² - 72
  • Fifth derivative: f⁽⁵⁾(x) = 1440x
  • Sixth derivative: f⁽⁶⁾(x) = 1440
  • Seventh derivative: f⁽⁷⁾(x) = 0

Therefore:
  f'''(x) = 240x³ - 72x
  f⁽⁴⁾(x) = 720x² - 72
  f⁽⁵⁾(x) = 1440x
  f⁽⁶⁾(x) = 1440
  f⁽⁷⁾(x) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMPLETE CONCEPT MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Order: 0
Notation: f(x)
What It Represents: Original function

Order: 1
Notation: f'(x)
What It Represents: Rate of change / slope

Order: 2
Notation: f''(x)
What It Represents: Change in slope / concavity

Order: 3
Notation: f'''(x)
What It Represents: Change in the second derivative / jerk

Order: 4
Notation: f⁽⁴⁾(x)
What It Represents: Change in the third derivative

Order: n
Notation: f⁽ⁿ⁾(x)
What It Represents: n-th rate of change

For motion: s → v → a → j → ...

where:
  s(t) = position
  v(t) = s'(t) = velocity
  a(t) = s''(t) = acceleration
  j(t) = s'''(t) = jerk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Third and Higher Derivatives, remember:

  1. Third derivative: f'''(x) = d/dx[f''(x)]
     It measures how the second derivative changes.

  2. Higher derivative: f⁽ⁿ⁾(x) = d/dx[f⁽ⁿ⁻¹⁾(x)]

  3. Polynomial behavior:
     For an n-degree polynomial: f⁽ⁿ⁺¹⁾(x) = 0

  4. Motion: s'''(t) = jerk

  5. Sine and cosine:
     Their derivatives repeat every four derivatives.
     sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x)

  6. Exponential: dⁿ/dxⁿ(eˣ) = eˣ

  7. Taylor series:
     Higher derivatives appear in: f⁽ⁿ⁾(a)/n! · (x-a)ⁿ

The Big Idea:
  The easiest way to understand third and higher derivatives is to stop thinking of them as just formulas to memorize. Think of them as a hierarchy:

  Function → Rate of Change → Change in Rate → Change in Change → ...

  For motion: Position → Velocity → Acceleration → Jerk → Higher Rates

  For graph analysis: f(x) → f'(x) → f''(x) → f'''(x)

  So the third derivative is not a completely new type of operation. It is simply the derivative of the second derivative, and higher derivatives continue this exact same process.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Third and Higher Derivatives extend the concept of differentiation to multiple levels of rates of change.

Key concepts covered:

  ✓ The Basic Idea
  ✓ Think of It as a Chain
  ✓ First, Second, and Third Derivatives
  ✓ Physical Interpretation (Jerk)
  ✓ Position → Velocity → Acceleration → Jerk
  ✓ Polynomial Patterns
  ✓ General Formula for xⁿ
  ✓ Higher Derivatives of Sine
  ✓ Higher Derivatives of Cosine
  ✓ Finding the 100th Derivative
  ✓ Higher Derivatives of eˣ
  ✓ Higher Derivatives of aˣ
  ✓ Higher Derivatives of ln(x)
  ✓ Third Derivative and Concavity
  ✓ Taylor Series
  ✓ Differential Equations
  ✓ Common Mistakes
  ✓ Complete Worked Example
  `,
  examples: [
    "f(x) = x⁵ → f'(x)=5x⁴, f''(x)=20x³, f'''(x)=60x², f⁽⁴⁾(x)=120x, f⁽⁵⁾(x)=120, f⁽⁶⁾(x)=0",
    "f(x) = x⁴ → f'(x)=4x³, f''(x)=12x², f'''(x)=24x, f⁽⁴⁾(x)=24",
    "s(t) = t⁴ - 4t³ + 6t² → v(t)=4t³-12t²+12t, a(t)=12t²-24t+12, j(t)=24t-24",
    "sin(x) → cos(x) → -sin(x) → -cos(x) → sin(x) (cycle repeats every 4)",
    "cos(x) → -sin(x) → -cos(x) → sin(x) → cos(x) (cycle repeats every 4)",
    "d¹⁰⁰/dx¹⁰⁰[sin(x)] = sin(x) (100 ÷ 4 = 25, no remainder)",
    "f(x) = eˣ → f⁽ⁿ⁾(x) = eˣ for all n",
    "f(x) = aˣ → f⁽ⁿ⁾(x) = aˣ·(ln(a))ⁿ",
    "f(x) = ln(x) → f⁽ⁿ⁾(x) = (-1)ⁿ⁻¹·(n-1)!/xⁿ",
    "Polynomial rule: degree n → (n+1)-th derivative = 0",
    "f⁽ᵏ⁾(x) = n!/(n-k)! · xⁿ⁻ᵏ for f(x)=xⁿ",
    "f'''(x) = d/dx[f''(x)]",
    "Third derivative tells how concavity is changing",
    "Taylor series: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ",
    "s'''(t) = jerk (rate of change of acceleration)",
  ],
};

export default topic;