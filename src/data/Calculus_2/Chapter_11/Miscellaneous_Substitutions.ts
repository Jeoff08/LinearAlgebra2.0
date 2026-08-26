// filename: MiscellaneousSubstitutions.ts

const topic = {
  id: "miscellaneous-substitutions",
  title: "Miscellaneous Substitutions",
  summary:
    "A comprehensive guide to non-standard substitution techniques for integrals that don't fit neatly into basic categories. Covers radical substitutions, reciprocal substitutions, symmetry substitutions, and the tangent half-angle substitution.",
  details: `
Miscellaneous Substitutions is a topic in Calculus 2 integration techniques that deals with substitutions that do not fit neatly into the standard categories such as basic u-substitution, integration by parts, trigonometric substitution, or partial fractions.

The main idea is still the same:

  Transform a difficult integral into an easier integral.

Sometimes an integral looks complicated because of its particular algebraic structure. A carefully chosen substitution can reveal a much simpler form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A MISCELLANEOUS SUBSTITUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In basic u-substitution, we usually choose something obvious such as:

  u = x² + 1.

But there are integrals where the appropriate substitution is less obvious.

For example:

  ∫ 1/(x + √x) dx.

There is no immediately obvious substitution such as u = x + √x.

Instead, we can recognize that:

  √x

appears repeatedly and choose:

  u = √x.

Then:

  x = u²

and:

  dx = 2u du.

The complicated-looking integral becomes an ordinary rational integral.

This is the essence of miscellaneous substitutions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE NEED THESE SUBSTITUTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some integrals cannot be solved conveniently by applying a single familiar formula.

For example:

  ∫ 1/(x + √x) dx

contains both:

  x

and:

  √x.

If we choose:

  u = √x,

then:

  x = u².

Now both expressions are written in terms of u.

This is a very important principle:

  Choose a substitution that makes all the different forms in the integral compatible with one variable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE GENERAL SUBSTITUTION STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

  ∫ f(x) dx.

We choose:

  u = g(x).

Then calculate:

  du = g'(x) dx.

Next, rewrite every part of the integral in terms of u.

The goal is:

  ∫ f(x) dx → ∫ F(u) du

After integrating, substitute back:

  u = g(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1: SUBSTITUTION FOR A RADICAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/(x + √x) dx.

Notice that both x and √x appear.

Choose:

  u = √x.

Then:

  x = u².

Differentiate:

  dx = 2u du.

The denominator becomes:

  x + √x = u² + u.

Therefore:

  ∫ 2u/(u² + u) du.

Factor:

  u² + u = u(u + 1).

Thus:

  ∫ 2u/[u(u + 1)] du.

Cancel u:

  2 ∫ 1/(u + 1) du.

Therefore:

  2 ln|u + 1| + C.

Substitute back:

  2 ln|√x + 1| + C

This is a classic miscellaneous substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SUBSTITUTION FOR POWERS OF x^(1/n)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same idea works for expressions containing fractional powers.

Suppose:

  x^(1/3)

appears repeatedly.

Choose:

  u = x^(1/3).

Then:

  x = u³.

Therefore:

  dx = 3u² du.

This changes fractional powers into ordinary integer powers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2: CUBE-ROOT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ x^(1/3)/(1 + x^(2/3)) dx.

Choose:

  u = x^(1/3).

Then:

  x = u³.

Therefore:

  dx = 3u² du.

Also:

  x^(1/3) = u

and:

  x^(2/3) = u².

Substitute:

  ∫ u/(1 + u²) · (3u²) du.

Thus:

  3 ∫ u³/(1 + u²) du.

Now use:

  u³ = u(u² + 1 - 1).

Therefore:

  u³/(1 + u²) = u - u/(1 + u²).

So:

  3 ∫ (u - u/(1 + u²)) du.

Integrate:

  3(u²/2 - (1/2) ln(1 + u²)) + C.

Therefore:

  (3/2)u² - (3/2) ln(1 + u²) + C.

Substitute back:

  (3/2)x^(2/3) - (3/2) ln(1 + x^(2/3)) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SUBSTITUTING A REPEATED EXPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the best substitution is not a single term like x², but an entire expression that appears repeatedly.

Consider:

  ∫ x(x² + 1)⁵ dx.

We notice:

  x² + 1

appears as a repeated expression.

Let:

  u = x² + 1.

Then:

  du = 2x dx.

Thus:

  x dx = (1/2) du.

The integral becomes:

  (1/2) ∫ u⁵ du.

Therefore:

  (1/2) · (u⁶/6) + C = u⁶/12 + C.

Substitute back:

  (x² + 1)⁶/12 + C

This is technically a u-substitution, but recognizing repeated expressions is an important part of miscellaneous substitution strategies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SUBSTITUTION FOR x + 1/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some integrals contain the expression:

  x + 1/x.

It may be useful to set:

  u = x + 1/x.

Then:

  du = (1 - 1/x²) dx.

This can simplify an integral when the differential:

  (1 - 1/x²) dx

also appears.

For example:

  ∫ (1 - 1/x²)(x + 1/x)⁵ dx.

Set:

  u = x + 1/x.

Then:

  du = (1 - 1/x²) dx.

The integral becomes:

  ∫ u⁵ du.

Therefore:

  u⁶/6 + C

and:

  (1/6)(x + 1/x)⁶ + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. RECIPROCAL SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes expressions contain both x and 1/x.

A substitution such as:

  u = 1/x

can simplify the expression.

Since:

  u = x⁻¹,

we have:

  du = -x⁻² dx.

Therefore:

  du = -1/x² dx

This can be useful when the integral contains:

  1/x² dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: RECIPROCAL SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ (1/x²) e^(1/x) dx.

Choose:

  u = 1/x.

Then:

  du = -1/x² dx.

Therefore:

  ∫ (1/x²) e^(1/x) dx = -∫ e^u du.

Thus:

  -e^u + C

Substitute back:

  -e^(1/x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SUBSTITUTION FOR ax + b
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a simple linear substitution is useful.

Suppose:

  ∫ √(3x + 2) dx.

Let:

  u = 3x + 2.

Then:

  du = 3 dx

so:

  dx = (1/3) du.

Therefore:

  ∫ √(3x + 2) dx = (1/3) ∫ u^(1/2) du.

Integrate:

  (1/3) · (2/3) u^(3/2) + C.

Thus:

  (2/9)(3x + 2)^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SUBSTITUTION FOR COMPLICATED RADICALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A radical can often be simplified by substituting the expression inside it.

For example:

  ∫ x/√(x² + 4) dx.

The expression:

  x² + 4

is inside the square root.

Let:

  u = x² + 4.

Then:

  du = 2x dx.

Thus:

  x dx = (1/2) du.

The integral becomes:

  (1/2) ∫ u^(-1/2) du.

Therefore:

  (1/2) · 2u^(1/2) + C.

So:

  √(x² + 4) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. SUBSTITUTION FOR A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common pattern is:

  √(a + bx).

For example:

  ∫ 1/√(2x + 5) dx.

Let:

  u = 2x + 5.

Then:

  du = 2 dx.

Thus:

  dx = (1/2) du.

The integral becomes:

  (1/2) ∫ u^(-1/2) du.

Therefore:

  (1/2) · 2u^(1/2) + C.

Thus:

  √(2x + 5) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SUBSTITUTION FOR RATIONALIZING RADICALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes a substitution is chosen specifically to remove radicals.

For example, if:

  √x

appears, use:

  u = √x.

Then:

  x = u².

If:

  ∛x

appears, use:

  u = ∛x.

so that:

  x = u³.

More generally, if the integral contains:

  x^(1/n),

choose:

  u = x^(1/n).

Then:

  x = uⁿ.

This converts fractional exponents into integer powers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EULER-TYPE SUBSTITUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some more difficult radical integrals can be simplified using special substitutions known as Euler substitutions.

These are especially useful for integrals involving expressions such as:

  √(ax² + bx + c).

The purpose is to transform the radical into a rational expression.

For example, an integral involving:

  √(x² + a²)

may be transformed using a suitable substitution into a form that can be handled algebraically.

These substitutions are more advanced and are usually introduced after the standard substitution techniques.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. TRIGONOMETRIC SUBSTITUTION VS. MISCELLANEOUS SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is important to distinguish these ideas.

For:

  √(a² - x²),

a standard trigonometric substitution is:

  x = a sin θ.

For:

  √(x² + a²),

one might use:

  x = a tan θ.

But a miscellaneous substitution may instead be chosen because of a particular algebraic structure.

The key difference is:

  Trigonometric substitution follows standard radical patterns, while miscellaneous substitution is more flexible and depends on the specific structure of the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SUBSTITUTION BASED ON SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes an integral contains an expression that becomes simpler if we transform the variable.

For example, if both:

  x

and:

  a - x

appear, a substitution such as:

  u = a - x

can be useful.

Then:

  du = -dx.

This can transform the integral into a more symmetric or familiar form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE OF A SIMPLE SYMMETRY SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ √(5 - x) dx.

Let:

  u = 5 - x.

Then:

  du = -dx.

Thus:

  dx = -du.

The integral becomes:

  -∫ u^(1/2) du.

Therefore:

  -(2/3)u^(3/2) + C.

Substitute back:

  -(2/3)(5 - x)^(3/2) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE MAIN GOAL OF ANY MISCELLANEOUS SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Regardless of the particular substitution, the goal is always to reduce complexity.

For example:

  ∫ 1/(x + √x) dx

looks complicated.

Using:

  u = √x,

it becomes:

  2 ∫ 1/(u + 1) du

which is easy.

Another example:

  ∫ (1/x²) e^(1/x) dx

looks difficult.

Using:

  u = 1/x,

it becomes:

  -∫ e^u du

which is straightforward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. HOW TO CHOOSE THE SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you're stuck on an integral, ask yourself these questions:

Question 1

Is there a complicated expression appearing repeatedly?

Try:

  u = that expression.

Question 2

Is there a radical?

Try substituting the radical:

  u = √x

or:

  u = ∛x.

Question 3

Do I see 1/x repeatedly?

Try:

  u = 1/x.

Question 4

Do I see x + 1/x?

Consider:

  u = x + 1/x.

Question 5

Is there a linear expression?

For:

  ax + b,

try:

  u = ax + b.

Question 6

Does the numerator resemble the derivative of something?

Try:

  u = that something.

Question 7

Does the integral involve a general rational expression in sin x and cos x?

Consider:

  u = tan(x/2).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Substituting only part of the expression

If:

  u = √x,

you must replace:

  x = u²

and:

  dx = 2u du.

Everything should ultimately be expressed in u.

Mistake 2: Forgetting to transform dx

For example:

  u = 1/x

requires:

  du = -1/x² dx.

You cannot change u without also changing the differential.

Mistake 3: Choosing a substitution that doesn't simplify anything

A good substitution should reduce complexity.

If substituting u = x² + 1 causes the integral to contain even more complicated expressions in x, it probably isn't the right choice.

Mistake 4: Not substituting back

After obtaining an answer in u, return to the original variable x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. A GENERAL WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For miscellaneous substitution problems, use:

  Inspect → Identify repeated structure → Choose u → Find du → Rewrite everything → Integrate → Substitute back

For example:

  ∫ 1/(x + √x) dx

becomes:

  u = √x

then:

  x = u², dx = 2u du

then:

  2 ∫ 1/(u + 1) du

and finally:

  2 ln|√x + 1| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Pattern                    Possible Substitution
  ──────────────────────────────────────────────────
  ax + b                     u = ax + b
  √x                         u = √x
  ∛x                         u = x^(1/3)
  x² + a                     u = x² + a
  1/x                        u = 1/x
  x + 1/x                    u = x + 1/x
  a - x                      u = a - x
  f(x) with f'(x) dx         u = f(x)
  Rational expression in sin x, cos x    u = tan(x/2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  For u = √x:
    x = u², dx = 2u du

  For u = x^(1/n):
    x = uⁿ, dx = n uⁿ⁻¹ du

  For u = 1/x:
    du = -1/x² dx

  For u = x + 1/x:
    du = (1 - 1/x²) dx

  For u = ax + b:
    du = a dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Miscellaneous Substitutions refers to substitution techniques used for integrals where the appropriate change of variable is not one of the standard, immediately recognizable patterns.

The most important examples include:

  • Radical substitution: u = √x or u = x^(1/n)
  • Reciprocal substitution: u = 1/x
  • Linear substitution: u = ax + b
  • Repeated-expression substitution: u = g(x) when g(x) appears repeatedly
  • Symmetry substitution: u = a - x when the expression contains a - x
  • Tangent half-angle substitution: u = tan(x/2) for general rational expressions involving sine and cosine

The central idea is:

  A good substitution changes the form of the integral into something simpler.

So when an integral seems difficult, don't immediately search for a new integration formula. Look at its structure first. Ask what expression, if replaced by u, would eliminate radicals, repeated complicated terms, reciprocals, or trigonometric combinations. That recognition skill is the heart of miscellaneous substitutions.

Easy way to remember: When standard techniques fail, look for repeated patterns, radicals, reciprocals, or symmetry. Choose a substitution that makes all the different pieces of the integral use the same variable.
  `,
  examples: [
    "∫ 1/(x + √x) dx = 2 ln|√x + 1| + C",
    "∫ x^(1/3)/(1 + x^(2/3)) dx = (3/2)x^(2/3) - (3/2) ln(1 + x^(2/3)) + C",
    "∫ x(x² + 1)⁵ dx = (x² + 1)⁶/12 + C",
    "∫ (1 - 1/x²)(x + 1/x)⁵ dx = (1/6)(x + 1/x)⁶ + C",
    "∫ (1/x²) e^(1/x) dx = -e^(1/x) + C",
    "∫ √(3x + 2) dx = (2/9)(3x + 2)^(3/2) + C",
    "∫ x/√(x² + 4) dx = √(x² + 4) + C",
    "∫ 1/√(2x + 5) dx = √(2x + 5) + C",
    "∫ √(5 - x) dx = -(2/3)(5 - x)^(3/2) + C",
  ],
};

export default topic;