// filename: PartialFractions.ts

const topic = {
  id: "partial-fractions",
  title: "Partial Fractions",
  summary:
    "A comprehensive guide to the partial fractions technique for integrating rational functions. Covers distinct linear factors, repeated linear factors, irreducible quadratic factors, repeated irreducible quadratic factors, and the complete integration process.",
  details: `
Partial Fractions is an important technique in Calculus 2 used to integrate rational functions—fractions where both the numerator and denominator are polynomials.

A rational function has the form:

  P(x) / Q(x)

where P(x) and Q(x) are polynomials and:

  Q(x) ≠ 0.

The main idea is to break one complicated rational expression into several simpler fractions that are easier to integrate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  1/((x - 1)(x + 2)).

This fraction is not immediately in a convenient form for integration.

Partial fractions allows us to rewrite it as:

  1/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2).

Instead of integrating one complicated fraction, we can integrate two simple fractions:

  ∫ A/(x - 1) dx + ∫ B/(x + 2) dx.

Since:

  ∫ 1/(x - a) dx = ln|x - a| + C,

the resulting integrals are straightforward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHEN DO WE USE PARTIAL FRACTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Partial fractions is mainly used when you encounter an integral of the form:

  ∫ P(x)/Q(x) dx

where P(x) and Q(x) are polynomials.

For example:

  ∫ (3x + 5)/((x - 1)(x + 2)) dx

or:

  ∫ (x² + 1)/(x(x + 1)(x - 2)) dx.

The denominator is usually factored first, because the factors determine how we decompose the fraction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FIRST CHECK: IS THE FRACTION PROPER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before using partial fractions, compare the degrees of the numerator and denominator.

A rational function is proper if:

  deg P(x) < deg Q(x).

For example:

  (x + 1)/(x² + 3x + 2)

is proper because:

  1 < 2.

But:

  (x³ + 2)/(x² + 1)

is improper because:

  3 > 2.

If the fraction is improper, perform polynomial long division first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POLYNOMIAL LONG DIVISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ (x² + 1)/(x - 1) dx.

The numerator has degree 2, while the denominator has degree 1.

Therefore, the fraction is improper.

Divide:

  (x² + 1)/(x - 1) = x + 1 + 2/(x - 1).

Therefore:

  ∫ (x² + 1)/(x - 1) dx = ∫ (x + 1 + 2/(x - 1)) dx.

Now integrate:

  x²/2 + x + 2 ln|x - 1| + C.

So:

  ∫ (x² + 1)/(x - 1) dx = x²/2 + x + 2 ln|x - 1| + C

The important point is:

  If the rational function is improper, divide first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. FACTORING THE DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a proper rational function, the next step is to factor the denominator completely.

For example:

  x² + x - 6

factors as:

  (x + 3)(x - 2).

Therefore:

  1/(x² + x - 6) = 1/((x + 3)(x - 2)).

Now we can set up the partial fraction decomposition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CASE 1: DISTINCT LINEAR FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the simplest type.

Suppose:

  P(x)/((x - a)(x - b)).

The partial fraction form is:

  A/(x - a) + B/(x - b)

where A and B are constants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/((x - 1)(x + 2)) dx.

Step 1: Set up the decomposition

Write:

  1/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2).

Step 2: Multiply by the denominator

Multiply both sides by:

  (x - 1)(x + 2).

Then:

  1 = A(x + 2) + B(x - 1).

Step 3: Find A

Let:

  x = 1.

Then:

  1 = A(3).

Therefore:

  A = 1/3.

Step 4: Find B

Let:

  x = -2.

Then:

  1 = B(-3).

Therefore:

  B = -1/3.

Thus:

  1/((x - 1)(x + 2)) = 1/(3(x - 1)) - 1/(3(x + 2)).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. INTEGRATE THE PARTIAL FRACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now:

  ∫ 1/((x - 1)(x + 2)) dx

becomes:

  (1/3) ∫ 1/(x - 1) dx - (1/3) ∫ 1/(x + 2) dx.

Using:

  ∫ 1/(x - a) dx = ln|x - a| + C,

we obtain:

  (1/3) ln|x - 1| - (1/3) ln|x + 2| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CASE 2: REPEATED LINEAR FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the denominator contains:

  (x - a)².

You must include both powers:

  A/(x - a) + B/(x - a)²

For example:

  1/(x(x - 1)²).

The correct decomposition is:

  1/(x(x - 1)²) = A/x + B/(x - 1) + C/(x - 1)².

You cannot skip the repeated-power terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x(x - 1)²) dx.

Set:

  1/(x(x - 1)²) = A/x + B/(x - 1) + C/(x - 1)².

Multiply by:

  x(x - 1)².

Then:

  1 = A(x - 1)² + Bx(x - 1) + Cx.

Set:

  x = 0.

Then:

  1 = A.

So:

  A = 1.

Set:

  x = 1.

Then:

  1 = C.

So:

  C = 1.

To find B, substitute a convenient value such as x = 2:

  1 = 1(1)² + B(2)(1) + 1(2).

Therefore:

  1 = 1 + 2B + 2.

  2B = -2.

Thus:

  B = -1.

So:

  1/(x(x - 1)²) = 1/x - 1/(x - 1) + 1/(x - 1)².

Integrate:

  ∫ 1/x dx - ∫ 1/(x - 1) dx + ∫ 1/(x - 1)² dx.

Therefore:

  ln|x| - ln|x - 1| - 1/(x - 1) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. CASE 3: IRREDUCIBLE QUADRATIC FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the denominator contains a quadratic that cannot be factored using real numbers.

For example:

  x² + 1.

Because:

  x² + 1 = 0

has no real solutions, it cannot be factored into real linear factors.

For an irreducible quadratic:

  ax² + bx + c,

the numerator over that factor must be linear:

  (Ax + B)/(ax² + bx + c),

not simply:

  A/(ax² + bx + c).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ (x + 3)/((x - 1)(x² + 1)) dx.

The denominator contains:

  x - 1

and:

  x² + 1.

Therefore, write:

  (x + 3)/((x - 1)(x² + 1)) = A/(x - 1) + (Bx + C)/(x² + 1).

Notice that the numerator over x² + 1 is:

  Bx + C.

This is an important rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY IS THE NUMERATOR LINEAR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the denominator factor is:

  x² + 1.

Its degree is 2.

The numerator placed above it must have degree less than 2.

Therefore, the general numerator is:

  Bx + C.

For a cubic factor, the numerator would have degree at most 2:

  Ax² + Bx + C.

In general:

  The numerator of each partial fraction must have degree less than the degree of its denominator factor.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. CASE 4: REPEATED IRREDUCIBLE QUADRATICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have:

  (x² + 1)².

You need:

  (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)².

For:

  (x² + 1)³,

you need:

  (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)² + (Ex + F)/(x² + 1)³.

Every power must be represented.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FOUR MAJOR TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should recognize these four common situations.

Type 1: Distinct linear factors

  P(x)/((x - a)(x - b))

becomes:

  A/(x - a) + B/(x - b).

Type 2: Repeated linear factors

  P(x)/(x - a)ⁿ

requires:

  A₁/(x - a) + A₂/(x - a)² + ... + Aₙ/(x - a)ⁿ.

Type 3: Irreducible quadratic

For:

  x² + bx + c,

use:

  (Ax + B)/(x² + bx + c).

Type 4: Repeated irreducible quadratic

For:

  (x² + bx + c)ⁿ,

use:

  (A₁x + B₁)/(x² + bx + c) + (A₂x + B₂)/(x² + bx + c)² + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FINDING THE CONSTANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once you set up the decomposition, you need to determine constants such as:

  A, B, C, D.

There are several methods.

Method 1: Substitution

Choose values of x that eliminate terms.

This is often the fastest method for distinct linear factors.

Method 2: Comparing coefficients

Expand both sides and compare the coefficients of:

  x², x, 1.

Method 3: Use convenient values

Choose values such as:

  x = 0, x = 1, x = -1,

when they simplify the equation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. PARTIAL FRACTIONS AND LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very important result is:

  ∫ 1/(x - a) dx = ln|x - a| + C.

Therefore, when partial fractions produces terms like:

  A/(x - a),

the answer will contain:

  A ln|x - a|.

For example:

  ∫ 3/(x - 5) dx = 3 ln|x - 5| + C.

This is why logarithms frequently appear in partial-fraction problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. PARTIAL FRACTIONS AND ARCTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When an irreducible quadratic such as:

  x² + a²

appears, we often encounter:

  ∫ 1/(x² + a²) dx.

The standard result is:

  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C.

For example:

  ∫ 1/(x² + 4) dx

gives:

  (1/2) arctan(x/2) + C.

Thus, partial fractions can lead to both logarithmic and inverse trigonometric terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. A MORE COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ (2x + 3)/((x - 1)(x + 2)) dx.

Set:

  (2x + 3)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2).

Multiply through:

  2x + 3 = A(x + 2) + B(x - 1).

Set:

  x = 1.

Then:

  5 = 3A

so:

  A = 5/3.

Set:

  x = -2.

Then:

  -1 = -3B

so:

  B = 1/3.

Therefore:

  (2x + 3)/((x - 1)(x + 2)) = 5/(3(x - 1)) + 1/(3(x + 2)).

Integrate:

  ∫ [5/(3(x - 1)) + 1/(3(x + 2))] dx.

Thus:

  (5/3) ln|x - 1| + (1/3) ln|x + 2| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Not factoring completely

For example, if:

  x² - 4

appears, factor it:

  (x - 2)(x + 2).

Mistake 2: Forgetting repeated powers

For:

  (x - 1)³,

you need:

  A/(x - 1) + B/(x - 1)² + C/(x - 1)³.

Mistake 3: Using a constant numerator for a quadratic

For:

  x² + 1,

use:

  (Ax + B)/(x² + 1),

not:

  A/(x² + 1).

Mistake 4: Forgetting absolute values

The correct formula is:

  ∫ 1/x dx = ln|x| + C.

Therefore:

  ∫ 1/(x - a) dx = ln|x - a| + C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMPLETE STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter:

  ∫ P(x)/Q(x) dx,

follow this process:

Step 1

Check the degrees.

If:

  deg P ≥ deg Q,

perform polynomial division.

Step 2

Factor the denominator completely.

Step 3

Identify the factors:

  • distinct linear
  • repeated linear
  • irreducible quadratic
  • repeated irreducible quadratic

Step 4

Write the correct partial-fraction decomposition.

Step 5

Multiply through by the common denominator.

Step 6

Find the unknown constants.

Step 7

Rewrite the original integral as separate simpler integrals.

Step 8

Integrate each term.

Step 9

Combine the answer if appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK RECOGNITION TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Denominator Factor        Partial Fraction Form
  ──────────────────────────────────────────────────────────────
  x - a                     A/(x - a)
  (x - a)²                  A/(x - a) + B/(x - a)²
  (x - a)³                  A/(x - a) + B/(x - a)² + C/(x - a)³
  x² + bx + c               (Ax + B)/(x² + bx + c)
  (x² + bx + c)²            (Ax + B)/(x² + bx + c) + (Cx + D)/(x² + bx + c)²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Partial fractions is essentially a decomposition technique.

You start with:

  One complicated rational function

and transform it into:

  Several simpler rational functions

For example:

  1/((x - 1)(x + 2))

becomes:

  (1/3)/(x - 1) - (1/3)/(x + 2).

Then integration becomes easy:

  ln|x - 1|, ln|x + 2|.

So the process can be summarized as:

  Factor → Decompose → Find Constants → Integrate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ 1/(x - a) dx = ln|x - a| + C
  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C

  Distinct Linear:
    P(x)/((x - a)(x - b)) = A/(x - a) + B/(x - b)

  Repeated Linear:
    P(x)/(x - a)ⁿ = A₁/(x - a) + A₂/(x - a)² + ... + Aₙ/(x - a)ⁿ

  Irreducible Quadratic:
    (Ax + B)/(x² + bx + c)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Partial Fractions is a technique for integrating rational functions by breaking a complicated fraction into simpler fractions.

The most important rules are:

  Distinct linear factors:
    P(x)/((x - a)(x - b)) = A/(x - a) + B/(x - b)

  Repeated linear factors:
    A₁/(x - a) + A₂/(x - a)² + ... + Aₙ/(x - a)ⁿ

  Irreducible quadratic:
    (Ax + B)/(ax² + bx + c)

  Repeated irreducible quadratic:
    (A₁x + B₁)/q(x) + (A₂x + B₂)/q(x)² + ...

And remember the most important preliminary step:

  If the rational function is improper, divide first.

Once the fraction is properly decomposed, the resulting integrals are usually standard logarithmic, algebraic, or inverse-trigonometric integrals.

Easy way to remember: Factor the denominator, then assign constants over each factor. Linear factors get constants, quadratics get linear numerators. Repeated factors need terms for every power.
  `,
  examples: [
    "∫ 1/((x - 1)(x + 2)) dx = (1/3) ln|x - 1| - (1/3) ln|x + 2| + C",
    "∫ 1/(x(x - 1)²) dx = ln|x| - ln|x - 1| - 1/(x - 1) + C",
    "∫ (2x + 3)/((x - 1)(x + 2)) dx = (5/3) ln|x - 1| + (1/3) ln|x + 2| + C",
    "∫ (x² + 1)/(x - 1) dx = x²/2 + x + 2 ln|x - 1| + C (improper fraction)",
    "1/((x - 1)(x + 2)) = (1/3)/(x - 1) - (1/3)/(x + 2)",
    "1/(x(x - 1)²) = 1/x - 1/(x - 1) + 1/(x - 1)²",
  ],
};

export default topic;