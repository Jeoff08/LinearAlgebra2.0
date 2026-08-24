// filename: additional-theorems-on-limits-of-functions.ts

const topic = {
  id: "additional-theorems-on-limits-of-functions",
  title: "Additional Theorems on Limits of Functions",
  summary:
    "Rules that make it easier to evaluate limits by combining known limits of individual functions, including sum, difference, product, quotient, power, root, and composition laws.",
  details: `
The Additional Theorems on Limits of Functions are rules that make it easier to evaluate limits without having to rely only on the formal definition of a limit.

These theorems are especially useful when working with sums, differences, products, quotients, powers, roots, and combinations of functions.

The main idea is:

  If we already know the limits of two functions, we can often determine the 
  limit of a more complicated expression by combining those known limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE NEED LIMIT THEOREMS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to find:
  lim(x→2) (3x² + 5x - 1)

We could study values of the function near x = 2, but that would be unnecessary.

Instead, we can use the basic limit laws:
  lim(x→2) x = 2
and therefore:
  lim(x→2) x² = 4

Then we can combine the limits:
  3(4) + 5(2) - 1
  = 12 + 10 - 1
  = 21

Therefore:
  lim(x→2) (3x² + 5x - 1) = 21

The theorems allow us to break complicated limits into simpler pieces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC IDEA BEHIND LIMIT THEOREMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then, under the appropriate conditions, we can determine limits involving:
  • f(x) + g(x)
  • f(x) - g(x)
  • f(x)g(x)
  • f(x)/g(x)
  • [f(x)]ⁿ

Instead of solving the entire expression at once, we can work with its individual parts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THEOREM 1: CONSTANT MULTIPLE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L

and c is a constant, then:
  lim(x→a) [c f(x)] = cL

In other words, the constant can be moved outside the limit.

Example:
  Evaluate: lim(x→3) 5x

  We know:
    lim(x→3) x = 3

  Therefore:
    lim(x→3) 5x = 5 · lim(x→3) x
    = 5(3)
    = 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THEOREM 2: SUM LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x) + g(x)] = L + M

Example:
  Evaluate: lim(x→2) (x² + x)

  Break it into two limits:
    lim(x→2) x² + lim(x→2) x

  Since:
    lim(x→2) x² = 4
  and:
    lim(x→2) x = 2

  we get:
    4 + 2 = 6

  Therefore:
    lim(x→2) (x² + x) = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THEOREM 3: DIFFERENCE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x) - g(x)] = L - M

Example:
  Evaluate: lim(x→3) (x² - 2x)

  Apply the difference law:
    lim(x→3) x² - lim(x→3) 2x

  Calculate:
    3² - 2(3)
    = 9 - 6
    = 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THEOREM 4: PRODUCT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then:
  lim(x→a) [f(x)g(x)] = LM

Example:
  Evaluate: lim(x→2) (x²)(x + 3)

  We can separate the functions:
    (lim(x→2) x²)(lim(x→2) (x + 3))

  Calculate:
    (4)(5) = 20

  Therefore:
    lim(x→2) x²(x + 3) = 20

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THEOREM 5: QUOTIENT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

where M ≠ 0, then:
  lim(x→a) f(x)/g(x) = L/M

The condition M ≠ 0 is extremely important.

Example:
  Evaluate: lim(x→2) (x + 4)/(x + 1)

  Apply the quotient law:
    lim(x→2) (x + 4) / lim(x→2) (x + 1)

  Therefore:
    6/3 = 2

  So:
    lim(x→2) (x + 4)/(x + 1) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY MUST THE DENOMINATOR LIMIT NOT BE ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→a) g(x) = 0

Then the quotient law cannot simply be applied.

For example:
  lim(x→0) 1/x

We know:
  lim(x→0) 1 = 1
and:
  lim(x→0) x = 0

It would be incorrect to say: 1/0 = 0.

Division by zero is undefined.

In fact:
  lim(x→0) 1/x

does not have a finite two-sided limit; its one-sided behavior is:
  lim(x→0⁻) 1/x = -∞
and:
  lim(x→0⁺) 1/x = ∞

This is why the quotient theorem specifically requires:
  M ≠ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THEOREM 6: POWER LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L

then for a positive integer n:
  lim(x→a) [f(x)]ⁿ = Lⁿ

Example:
  Evaluate: lim(x→2) (x + 1)³

  First:
    lim(x→2) (x + 1) = 3

  Therefore:
    lim(x→2) (x + 1)³ = 3³ = 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THEOREM 7: ROOT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L

then, when the root is defined:
  lim(x→a) ⁿ√(f(x)) = ⁿ√L

Example:
  Evaluate: lim(x→4) √(x + 5)

  First:
    lim(x→4) (x + 5) = 9

  Therefore:
    √9 = 3

  Thus:
    lim(x→4) √(x + 5) = 3

For an even root, the expression must be defined in the relevant neighborhood.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. COMBINING SEVERAL THEOREMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The real power of these laws comes from using several of them together.

Consider:
  lim(x→2) (3x² + 4x - 5)

Break the expression apart:
  3x² + 4x - 5

Using the sum, difference, and constant multiple laws:
  3·lim(x→2) x² + 4·lim(x→2) x - 5

Now evaluate:
  3(4) + 4(2) - 5
  = 12 + 8 - 5
  = 15

Therefore:
  lim(x→2) (3x² + 4x - 5) = 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. THE CONSTANT FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant, then:
  lim(x→a) c = c

The value doesn't change because the function is always equal to the same number.

Example:
  lim(x→100) 7 = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE IDENTITY FUNCTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The identity function is:
  f(x) = x

Its limit is:
  lim(x→a) x = a

Example:
  lim(x→5) x = 5

This simple rule is the foundation of many other limit calculations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. POLYNOMIAL LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A polynomial has the form:
  P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

For a polynomial, we can evaluate the limit simply by substituting x = a:
  lim(x→a) P(x) = P(a)

Example:
  Evaluate: lim(x→2) (x³ - 4x² + 5x + 7)

  Substitute 2:
    2³ - 4(2²) + 5(2) + 7
    = 8 - 16 + 10 + 7
    = 9

  Therefore:
    lim(x→2) (x³ - 4x² + 5x + 7) = 9

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. RATIONAL FUNCTION LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function:
  f(x) = P(x)/Q(x)

if Q(a) ≠ 0, then:
  lim(x→a) P(x)/Q(x) = P(a)/Q(a)

In other words, if direct substitution does not produce division by zero, you can simply substitute.

Example:
  lim(x→3) (x² + 1)/(x + 2)

  Substitute:
    (3² + 1)/(3 + 2) = 10/5 = 2

  Therefore: 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit laws explain why direct substitution works for many functions.

For example:
  lim(x→5) (2x² + 3x - 1)

  Substitute:
    2(5)² + 3(5) - 1
    = 50 + 15 - 1
    = 64

  Therefore: 64

This works because polynomials are continuous everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE IMPORTANT 0/0 SITUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes direct substitution produces:
  0/0

This does not mean the answer is zero.

Instead, 0/0 is an indeterminate form.

You need additional algebraic manipulation.

Example:
  lim(x→2) (x² - 4)/(x - 2)

  Direct substitution gives:
    (2² - 4)/(2 - 2) = 0/0

  We cannot stop there.

  Factor the numerator:
    x² - 4 = (x - 2)(x + 2)

  Therefore:
    ((x - 2)(x + 2))/(x - 2)

  Cancel:
    x + 2

  Now evaluate:
    lim(x→2) (x + 2) = 4

  Therefore:
    lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THEOREM FOR ABSOLUTE VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  lim(x→a) f(x) = L

then:
  lim(x→a) |f(x)| = |L|

Example:
  Evaluate: lim(x→3) |x - 5|

  First:
    lim(x→3) (x - 5) = -2

  Therefore:
    |-2| = 2

  Thus:
    lim(x→3) |x - 5| = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPOSITION OF FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important idea is the composition of functions.

Suppose:
  lim(x→a) g(x) = L
and f is continuous at L.

Then:
  lim(x→a) f(g(x)) = f(L)

This is sometimes called the composition theorem for limits.

Example:
  Evaluate: lim(x→2) (x² + 1)³

  Let g(x) = x² + 1.

  As x → 2:
    g(x) → 5

  Now the outside function is:
    f(u) = u³

  Therefore:
    f(5) = 5³ = 125

  So:
    lim(x→2) (x² + 1)³ = 125

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→3) √(x² + 7)

First find the inside limit:
  lim(x→3) (x² + 7) = 9 + 7 = 16

Then take the square root:
  √16 = 4

Therefore:
  lim(x→3) √(x² + 7) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A MORE COMPLICATED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→2) (3x² + 5x - 1)/(x + 4)

Because the denominator is not zero at x = 2:
  x + 4 = 6 ≠ 0

we can use the quotient law.

Numerator:
  3(2)² + 5(2) - 1
  = 12 + 10 - 1
  = 21

Denominator:
  2 + 4 = 6

Therefore:
  lim(x→2) (3x² + 5x - 1)/(x + 4) = 21/6 = 7/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE USING SEVERAL LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→1) (x + 5)/[(2x + 3)(x² + 4)]

Use the product and quotient laws:
  lim(x→1) (x + 5) / [lim(x→1) (2x + 3) · lim(x→1) (x² + 4)]

Evaluate each part:
  2(1) + 3 = 5
  1² + 4 = 5
  1 + 5 = 6

Therefore:
  6/[(5)(5)] = 6/25

So:
  lim(x→1) (x + 5)/[(2x + 3)(x² + 4)] = 6/25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. A VERY IMPORTANT CONCEPT: LIMIT LAWS DON'T ALWAYS SOLVE EVERYTHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit laws are powerful, but they have conditions.

For example:
  lim(x→a) f(x)/g(x) = L/M

requires M ≠ 0.

If M = 0, you need another technique.

Common techniques include:
  • factoring
  • canceling
  • rationalizing
  • finding a common denominator
  • using special limit identities
  • L'Hôpital's Rule later in calculus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON INDETERMINATE FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When evaluating limits, you may encounter expressions such as:
  0/0
or:
  ∞/∞

These are indeterminate forms.

They don't tell you the answer automatically.

For example:
  0/0 could lead to many different answers depending on the functions involved.

Consider:
  lim(x→0) x/x = 1

Although direct substitution gives 0/0, the actual limit is 1.

Another example:
  lim(x→0) x²/x = lim(x→0) x = 0

Again, direct substitution initially produces 0/0, but the actual answer is 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. THE LIMIT LAWS — COMPLETE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then:

  Constant:
    lim(x→a) c = c

  Identity:
    lim(x→a) x = a

  Constant Multiple:
    lim(x→a) c f(x) = cL

  Sum:
    lim(x→a) [f(x) + g(x)] = L + M

  Difference:
    lim(x→a) [f(x) - g(x)] = L - M

  Product:
    lim(x→a) [f(x)g(x)] = LM

  Quotient:
    If M ≠ 0:
      lim(x→a) f(x)/g(x) = L/M

  Power:
    lim(x→a) [f(x)]ⁿ = Lⁿ

  Root:
    When defined:
      lim(x→a) ⁿ√(f(x)) = ⁿ√L

  Absolute Value:
    lim(x→a) |f(x)| = |L|

  Composition:
    If f is continuous at L:
      lim(x→a) f(g(x)) = f(L)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A GOOD PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a limit, don't immediately start doing complicated algebra.

Use this process:

Step 1: Try direct substitution
  Put x = a into the expression.

Step 2: Check the result
  If you get a normal finite number, you're usually done.
  For example: 2/5, 0, -7, 13 are ordinary results.

Step 3: Look for indeterminate forms
  If you get 0/0 or another indeterminate form, don't stop.

Step 4: Simplify
  Try:
    • factoring
    • rationalizing

Step 5: Apply the limit laws again
  After simplification, evaluate the new expression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. WORKED PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→3) (x² - 9)/(x - 3)

Step 1: Direct substitution
  (3² - 9)/(3 - 3) = 0/0

This is indeterminate.

Step 2: Factor
  x² - 9 = (x - 3)(x + 3)

Therefore:
  ((x - 3)(x + 3))/(x - 3)

Step 3: Cancel
  x + 3

Step 4: Evaluate
  3 + 3 = 6

Therefore:
  lim(x→3) (x² - 9)/(x - 3) = 6

This example demonstrates why the limit laws are often combined with algebraic techniques.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. WHY THESE THEOREMS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Additional Theorems on Limits of Functions are important because they form the foundation for later calculus topics.

They help you understand:

Continuity:
  A function is continuous at a when:
    lim(x→a) f(x) = f(a)

Derivatives:
  The derivative is defined using a limit:
    f'(x) = lim(h→0) (f(x + h) - f(x))/h

Integrals:
  Limits are also involved in the definition of definite integrals through Riemann sums.

Asymptotes:
  Limits help determine:
    • horizontal asymptotes
    • vertical asymptotes
    • end behavior

So understanding these theorems makes later calculus significantly easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of the limit laws as a toolbox.

If you have:
  lim(x→a) [(2x + 1)(x² + 3)/(x + 4)]

you don't have to treat the entire expression as one giant problem.

You can break it down:
  [lim(x→a) (2x + 1) · lim(x→a) (x² + 3)] / lim(x→a) (x + 4)

Then evaluate each simple piece.

This is the central purpose of the limit theorems:

  Complicated limit → Several simple limits

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Additional Theorems on Limits of Functions give us algebraic rules for combining limits.

If:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

then we can generally use:
  • lim(f + g) = L + M
  • lim(f - g) = L - M
  • lim(fg) = LM
  • lim(f/g) = L/M (M ≠ 0)
  • lim[f(x)]ⁿ = Lⁿ
  • lim ⁿ√(f(x)) = ⁿ√L (when defined)

The most important practical rule is:

  Try direct substitution first. If it gives a normal number, you're usually 
  finished. If it gives an indeterminate form such as 0/0, you need to 
  simplify the expression before applying the limit laws again.

These theorems are the foundation for understanding continuity, derivatives, asymptotes, and eventually integration.
  `,
  examples: [
    "lim(x→2) (3x² + 5x - 1) = 15",
    "lim(x→2) (x² + x) = 6",
    "lim(x→3) (x² - 2x) = 3",
    "lim(x→2) x²(x+3) = 20",
    "lim(x→2) (x+4)/(x+1) = 2",
    "lim(x→2) (x+1)³ = 27",
    "lim(x→3) (x² - 9)/(x - 3) = 6",
  ],
};

export default topic;