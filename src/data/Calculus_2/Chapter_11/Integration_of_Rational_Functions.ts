// filename: IntegrationOfRationalFunctions.ts

const topic = {
  id: "integration-of-rational-functions",
  title: "Integration of Rational Functions",
  summary:
    "A comprehensive guide to integrating rational functions (ratios of polynomials). Covers polynomial division, u-substitution, partial fractions, completing the square, and the arctangent form.",
  details: `
Integration of Rational Functions is an important topic in Calculus 2. It focuses on finding antiderivatives of functions that are ratios of polynomials.

A rational function has the form:

  f(x) = P(x) / Q(x)

where P(x) and Q(x) are polynomials and:

  Q(x) ≠ 0.

For example:

  (x + 1)/(x² + 4), (3x² - 2x + 1)/(x³ - x), and 1/((x - 2)(x + 3))

are all rational functions.

The main challenge is that there is no single integration rule for every rational function. Instead, we simplify the rational function first and then use techniques such as polynomial division, substitution, completing the square, and partial fractions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A RATIONAL FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function is a quotient of two polynomial functions:

  P(x) / Q(x).

For example:

  f(x) = (x² + 3x + 1)/(x - 2).

The numerator is:

  P(x) = x² + 3x + 1

and the denominator is:

  Q(x) = x - 2.

The denominator cannot equal zero, so:

  x ≠ 2.

Therefore, the function has a domain restriction at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY ARE RATIONAL FUNCTIONS IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rational functions appear frequently in mathematics, physics, engineering, economics, and other applications.

For example:

  1/x

appears in logarithmic integration:

  ∫ 1/x dx = ln|x| + C.

Another important example is:

  1/(x² + a²),

whose integral is:

  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C.

More complicated rational functions can often be transformed into these familiar forms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FIRST STEP: DETERMINE WHETHER THE FRACTION IS PROPER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before integrating:

  P(x)/Q(x),

compare the degrees of P(x) and Q(x).

Proper rational function

If:

  deg P < deg Q,

the function is proper.

Example:

  (x + 1)/(x² + 3).

The numerator has degree 1, while the denominator has degree 2.

Therefore:

  1 < 2.

It is proper.

Improper rational function

If:

  deg P ≥ deg Q,

the function is improper.

For example:

  (x² + 1)/(x - 1).

The numerator has degree 2, while the denominator has degree 1.

Therefore:

  2 > 1.

It is improper.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. POLYNOMIAL DIVISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a rational function is improper, perform polynomial long division before integrating.

Consider:

  ∫ (x² + 1)/(x - 1) dx.

Divide:

  (x² + 1) ÷ (x - 1).

The result is:

  (x² + 1)/(x - 1) = x + 1 + 2/(x - 1).

Therefore:

  ∫ (x² + 1)/(x - 1) dx = ∫ (x + 1 + 2/(x - 1)) dx.

Integrate term by term:

  = x²/2 + x + 2 ln|x - 1| + C.

Thus:

  ∫ (x² + 1)/(x - 1) dx = x²/2 + x + 2 ln|x - 1| + C

So the first major rule is:

  Improper rational function → Polynomial Division

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. PROPER RATIONAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the rational function is proper, we usually try to factor the denominator.

For example:

  1/(x² - x - 6).

Factor:

  x² - x - 6 = (x - 3)(x + 2).

Therefore:

  1/(x² - x - 6) = 1/((x - 3)(x + 2)).

Now partial fractions can be used.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PARTIAL FRACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Partial fractions is one of the most important methods for integrating rational functions.

Suppose:

  P(x)/((x - a)(x - b)).

We write:

  P(x)/((x - a)(x - b)) = A/(x - a) + B/(x - b).

This transforms the original complicated fraction into simpler fractions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: DISTINCT LINEAR FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x² - x - 6) dx.

Factor:

  x² - x - 6 = (x - 3)(x + 2).

Therefore:

  1/((x - 3)(x + 2)) = A/(x - 3) + B/(x + 2).

Multiply through:

  1 = A(x + 2) + B(x - 3).

Set:

  x = 3.

Then:

  1 = 5A

so:

  A = 1/5.

Set:

  x = -2.

Then:

  1 = -5B

so:

  B = -1/5.

Therefore:

  1/((x - 3)(x + 2)) = 1/(5(x - 3)) - 1/(5(x + 2)).

Integrate:

  ∫ 1/(x² - x - 6) dx = (1/5) ln|x - 3| - (1/5) ln|x + 2| + C.

Thus:

  (1/5) ln|(x - 3)/(x + 2)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONAL FUNCTIONS WITH REPEATED FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the denominator contains:

  (x - a)².

Then the partial fraction decomposition must contain:

  A/(x - a) + B/(x - a)².

For example:

  1/(x(x - 1)²)

requires:

  A/x + B/(x - 1) + C/(x - 1)².

The important rule is:

  Every power of a repeated factor must appear in the decomposition.

For:

  (x - a)³,

you need:

  A/(x - a) + B/(x - a)² + C/(x - a)³.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. RATIONAL FUNCTIONS WITH QUADRATIC FACTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every denominator can be factored into real linear factors.

Consider:

  x² + 1.

This cannot be factored over the real numbers.

When an irreducible quadratic appears, we use a linear numerator:

  (Ax + B)/(x² + bx + c).

For example:

  (3x + 5)/((x - 1)(x² + 4))

would be decomposed as:

  A/(x - 1) + (Bx + C)/(x² + 4).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RATIONAL FUNCTIONS AND THE ARCTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An especially important rational function is:

  1/(x² + a²).

We know:

  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C

because:

  d/dx [arctan(x/a)] = a/(x² + a²).

After multiplying by 1/a, we obtain the required integrand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE: QUADRATIC DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x² + 9) dx.

Since:

  9 = 3²,

use:

  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C.

Therefore:

  (1/3) arctan(x/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHAT IF THE QUADRATIC IS NOT IN STANDARD FORM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ 1/(x² + 4x + 8) dx.

This is not immediately in the form:

  x² + a².

We can use completing the square.

Start with:

  x² + 4x + 8.

Complete the square:

  x² + 4x + 4 + 4.

Thus:

  (x + 2)² + 4.

So:

  ∫ 1/((x + 2)² + 4) dx.

Let:

  u = x + 2.

Then:

  du = dx.

Therefore:

  ∫ 1/(u² + 4) du.

Since:

  4 = 2²,

we obtain:

  (1/2) arctan((x + 2)/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE DERIVATIVE OF THE DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important pattern occurs when the numerator resembles the derivative of the denominator.

Consider:

  ∫ (2x + 3)/(x² + 3x + 7) dx.

The denominator is:

  x² + 3x + 7.

Its derivative is:

  2x + 3.

That is exactly the numerator.

Therefore, use:

  u = x² + 3x + 7.

Then:

  du = (2x + 3) dx.

The integral becomes:

  ∫ 1/u du.

Therefore:

  ln|x² + 3x + 7| + C

This is a form of u-substitution, and it is often the fastest way to integrate a rational function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A USEFUL RECOGNITION PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you see:

  Q'(x)/Q(x)

think:

  ln|Q(x)| + C.

For example:

  ∫ 6x²/(2x³ + 5) dx.

The denominator is:

  Q(x) = 2x³ + 5.

Its derivative is:

  Q'(x) = 6x².

Therefore:

  ln|2x³ + 5| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ x/(x² + 1) dx.

Let:

  u = x² + 1.

Then:

  du = 2x dx.

Therefore:

  x dx = (1/2) du.

Substitute:

  (1/2) ∫ 1/u du.

Therefore:

  (1/2) ln(x² + 1) + C

Since x² + 1 > 0, absolute values are not necessary here.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHEN PARTIAL FRACTIONS IS NECESSARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ (x + 1)/((x - 1)(x + 2)) dx.

The denominator's derivative is:

  (x - 1)(x + 2)

which expands to:

  x² + x - 2.

Its derivative is:

  2x + 1.

But our numerator is:

  x + 1.

They don't match.

Therefore, simple substitution is not enough.

This is a situation where partial fractions is appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. RATIONAL FUNCTIONS WITH REPEATED QUADRATICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider a denominator such as:

  (x² + 1)².

The partial fraction form is:

  (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)².

Each repeated power must be included.

For:

  (x² + 1)³,

we need:

  (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)² + (Ex + F)/(x² + 1)³.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A GENERAL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter:

  ∫ P(x)/Q(x) dx,

use the following reasoning.

Step 1: Compare degrees

Determine whether:

  deg P < deg Q.

If not, perform polynomial division.

Step 2: Factor the denominator

Look for:

  (x - a), (x - a)ⁿ, or irreducible quadratics.

Step 3: Look for an easy u-substitution

Check whether the numerator is related to the derivative of the denominator.

Step 4: Use partial fractions when necessary

Decompose the rational function into simpler fractions.

Step 5: Integrate

Use standard formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT STANDARD INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several formulas occur repeatedly when integrating rational functions.

Logarithmic form

  ∫ 1/(x - a) dx = ln|x - a| + C

Basic reciprocal

  ∫ 1/x dx = ln|x| + C

Arctangent form

  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C

Derivative-over-function form

  ∫ f'(x)/f(x) dx = ln|f(x)| + C

These formulas form the foundation of rational-function integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting polynomial division

If:

  deg P ≥ deg Q,

you should divide first.

Mistake 2: Not factoring the denominator

For:

  x² - 9,

factor:

  (x - 3)(x + 3).

This may reveal that partial fractions can be used.

Mistake 3: Incorrect partial fraction form

For:

  (x - 1)²,

you need:

  A/(x - 1) + B/(x - 1)².

Mistake 4: Forgetting the linear numerator

For an irreducible quadratic:

  x² + 1,

use:

  (Ax + B)/(x² + 1).

Mistake 5: Forgetting absolute values

For example:

  ∫ 1/(x - 3) dx = ln|x - 3| + C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. RATIONAL FUNCTIONS AND OTHER INTEGRATION TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration of rational functions connects several Calculus 2 techniques.

Basic u-Substitution

Useful when:

  f'(x)/f(x)

appears.

Polynomial Division

Used when the rational function is improper.

Partial Fractions

Used when a proper rational function has a factorable denominator.

Completing the Square

Useful for quadratic denominators.

Trigonometric Substitution

Sometimes useful when the rational function is combined with radicals.

Therefore, rational-function integration is not one isolated method. It is a collection of techniques used according to the structure of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

  ∫ P(x)/Q(x) dx

ask:

1. Is the numerator's degree greater than or equal to the denominator's?

  → Polynomial division

2. Does the numerator resemble the derivative of the denominator?

  → u-substitution

3. Can the denominator be factored?

  → Partial fractions

4. Is there an irreducible quadratic?

  → Complete the square or use the arctangent form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ 1/x dx = ln|x| + C
  ∫ 1/(x - a) dx = ln|x - a| + C
  ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C
  ∫ f'(x)/f(x) dx = ln|f(x)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Integration of Rational Functions is the process of finding antiderivatives of expressions of the form:

  P(x)/Q(x).

The most important strategy is:

  Check degrees → Divide if necessary → Factor → Look for substitution → Use partial fractions → Integrate

The major patterns to remember are:

  f'(x)/f(x) → ln|f(x)| + C
  1/(x - a) → ln|x - a| + C
  1/(x² + a²) → (1/a) arctan(x/a) + C

The most important lesson is that rational-function integration is largely about recognizing the structure of the denominator and choosing the appropriate technique. Once you can identify whether you need division, substitution, completing the square, or partial fractions, the actual integration becomes much more manageable.

Easy way to remember: First check if the fraction is proper. If not, divide. Then factor the denominator. If the numerator is the derivative of the denominator, use substitution. Otherwise, use partial fractions or complete the square.
  `,
  examples: [
    "∫ 1/x dx = ln|x| + C",
    "∫ 1/(x² + 9) dx = (1/3) arctan(x/3) + C",
    "∫ (x² + 1)/(x - 1) dx = x²/2 + x + 2 ln|x - 1| + C (improper)",
    "∫ 1/(x² - x - 6) dx = (1/5) ln|(x - 3)/(x + 2)| + C (partial fractions)",
    "∫ (2x + 3)/(x² + 3x + 7) dx = ln|x² + 3x + 7| + C (derivative of denominator)",
    "∫ 1/(x² + 4x + 8) dx = (1/2) arctan((x + 2)/2) + C (complete the square)",
    "∫ x/(x² + 1) dx = (1/2) ln(x² + 1) + C (u-substitution)",
  ],
};

export default topic;