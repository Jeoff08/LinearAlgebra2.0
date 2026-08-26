// filename: TrigonometricSubstitution.ts

const topic = {
  id: "trigonometric-substitution",
  title: "Trigonometric Substitution",
  summary:
    "A comprehensive guide to the trigonometric substitution technique for integrals containing square roots of quadratic expressions. Covers the three main forms (a² - x², a² + x², x² - a²), the right-triangle method, and step-by-step examples.",
  details: `
Trigonometric substitution is an integration technique used mainly for integrals containing square roots of quadratic expressions, especially expressions of the forms:

  √(a² - x²), √(a² + x²), √(x² - a²).

The main idea is to replace the variable x with a trigonometric function so that a trigonometric identity simplifies the square root.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DO WE USE TRIGONOMETRIC SUBSTITUTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider an integral such as:

  ∫ 1/√(a² - x²) dx.

The expression:

  √(a² - x²)

makes direct integration difficult.

However, we know the Pythagorean identity:

  sin² θ + cos² θ = 1.

Rearranging:

  1 - sin² θ = cos² θ.

If we substitute:

  x = a sin θ,

then:

  a² - x² = a² - a² sin² θ
           = a²(1 - sin² θ)
           = a² cos² θ.

Therefore:

  √(a² - x²) = a cos θ.

A difficult algebraic square root has been transformed into a much simpler trigonometric expression.

That is the central idea of trigonometric substitution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE THREE MAIN FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are three patterns you should memorize.

  Expression        Substitution       Identity Used
  ──────────────────────────────────────────────────────────────
  √(a² - x²)        x = a sin θ        1 - sin² θ = cos² θ
  √(a² + x²)        x = a tan θ        1 + tan² θ = sec² θ
  √(x² - a²)        x = a sec θ        sec² θ - 1 = tan² θ

These three relationships are extremely important in Calculus 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CASE 1: √(a² - x²)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

  √(a² - x²),

use:

  x = a sin θ

Differentiate:

  dx = a cos θ dθ.

Now simplify the radical:

  √(a² - x²) = √(a² - a² sin² θ).

Factor:

  = √(a²(1 - sin² θ)).

Using:

  1 - sin² θ = cos² θ,

we obtain:

  = a cos θ.

Thus:

  √(a² - x²) = a cos θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ 1/√(9 - x²) dx.

Here:

  a² = 9

so:

  a = 3.

Because the form is:

  √(a² - x²),

use:

  x = 3 sin θ.

Then:

  dx = 3 cos θ dθ.

Simplify the radical:

  √(9 - x²) = √(9 - 9 sin² θ)
             = √(9(1 - sin² θ))
             = 3 cos θ.

Substitute everything:

  ∫ (3 cos θ)/(3 cos θ) dθ.

Cancel:

  ∫ dθ.

Therefore:

  θ + C.

But our answer needs to be in terms of x.

From:

  x = 3 sin θ,

we get:

  sin θ = x/3.

Therefore:

  θ = arcsin(x/3).

Final answer:

  arcsin(x/3) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CASE 2: √(a² + x²)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter:

  √(a² + x²),

use:

  x = a tan θ

Differentiate:

  dx = a sec² θ dθ.

Now simplify:

  √(a² + x²) = √(a² + a² tan² θ).

Factor:

  = √(a²(1 + tan² θ)).

Use:

  1 + tan² θ = sec² θ.

Therefore:

  √(a² + x²) = a sec θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ 1/√(4 + x²) dx.

Here:

  a² = 4

so:

  a = 2.

Use:

  x = 2 tan θ.

Then:

  dx = 2 sec² θ dθ.

Simplify:

  √(4 + x²) = √(4 + 4 tan² θ)
             = √(4(1 + tan² θ))
             = 2 sec θ.

Therefore:

  ∫ (2 sec² θ)/(2 sec θ) dθ

becomes:

  ∫ sec θ dθ.

Recall:

  ∫ sec θ dθ = ln|sec θ + tan θ| + C.

So:

  ln|sec θ + tan θ| + C

We still need to convert back to x.

Since:

  x = 2 tan θ,

we have:

  tan θ = x/2.

Using the triangle relationship:

  sec θ = √(x² + 4)/2.

Thus:

  sec θ + tan θ = (√(x² + 4) + x)/2.

The constant factor 1/2 can be absorbed into C, giving:

  ln|x + √(x² + 4)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CASE 3: √(x² - a²)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For:

  √(x² - a²),

use:

  x = a sec θ

Differentiate:

  dx = a sec θ tan θ dθ.

Simplify the radical:

  √(x² - a²) = √(a² sec² θ - a²).

Factor:

  = √(a²(sec² θ - 1)).

Use:

  sec² θ - 1 = tan² θ.

Therefore:

  √(x² - a²) = a tan θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ 1/√(x² - 9) dx.

We have:

  a = 3.

Since the expression is:

  √(x² - a²),

use:

  x = 3 sec θ.

Then:

  dx = 3 sec θ tan θ dθ.

The radical becomes:

  √(x² - 9) = √(9 sec² θ - 9)
             = √(9(sec² θ - 1))
             = 3 tan θ.

Therefore:

  ∫ (3 sec θ tan θ)/(3 tan θ) dθ.

Cancel:

  ∫ sec θ dθ.

Thus:

  ln|sec θ + tan θ| + C.

Since:

  x = 3 sec θ,

we have:

  sec θ = x/3

and:

  tan θ = √(x² - 9)/3.

Therefore:

  ln|x + √(x² - 9)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE RIGHT-TRIANGLE METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful skills in trigonometric substitution is converting back from θ to x.

Suppose:

  x = a sin θ.

Then:

  sin θ = x/a.

Since:

  sin θ = opposite / hypotenuse,

we can construct a right triangle:

  Opposite side: x
  Hypotenuse: a
  Adjacent side: √(a² - x²)

Therefore:

  cos θ = √(a² - x²)/a.

This allows us to convert expressions involving sin θ, cos θ, tan θ, and sec θ back into x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TRIANGLE RELATIONSHIPS FOR EACH SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For x = a sin θ

  sin θ = x/a

and:

  cos θ = √(a² - x²)/a.

Therefore:

  tan θ = x/√(a² - x²).

For x = a tan θ

  tan θ = x/a.

The hypotenuse is:

  √(a² + x²).

Therefore:

  sec θ = √(a² + x²)/a.

For x = a sec θ

  sec θ = x/a.

The opposite side is:

  √(x² - a²).

Therefore:

  tan θ = √(x² - a²)/a.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY THE THREE SUBSTITUTIONS WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The three substitutions correspond directly to the three fundamental Pythagorean identities.

First:

  1 - sin² θ = cos² θ

corresponds to:

  x = a sin θ

for:

  √(a² - x²).

Second:

  1 + tan² θ = sec² θ

corresponds to:

  x = a tan θ

for:

  √(a² + x²).

Third:

  sec² θ - 1 = tan² θ

corresponds to:

  x = a sec θ

for:

  √(x² - a²).

This connection is worth memorizing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A GENERAL PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving a trigonometric-substitution problem, follow these steps.

Step 1: Identify the radical

Look for:

  √(a² - x²), √(a² + x²), or √(x² - a²).

Step 2: Choose the substitution

Use:

  x = a sin θ

or:

  x = a tan θ

or:

  x = a sec θ.

Step 3: Find dx

Differentiate the substitution.

Step 4: Rewrite the radical

Use the appropriate Pythagorean identity.

Step 5: Substitute everything

Replace both x and dx.

Step 6: Simplify

The goal is to obtain a trigonometric integral.

Step 7: Integrate

Use your trigonometric integration formulas.

Step 8: Return to x

Use the original substitution or a right triangle.

Step 9: Add C

For an indefinite integral:

  +C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Choosing the wrong substitution

For:

  √(a² - x²),

do not use x = a tan θ.

The standard substitution is:

  x = a sin θ.

Mistake 2: Forgetting dx

If:

  x = a sin θ,

then:

  dx = a cos θ dθ.

You must replace dx as well.

Mistake 3: Not simplifying the radical

Don't stop at:

  √(a² - a² sin² θ).

Continue:

  = a √(1 - sin² θ) = a cos θ.

Mistake 4: Forgetting to return to x

Your final answer should normally be written in terms of the original variable x, not θ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. TRIGONOMETRIC SUBSTITUTION VS. u-SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two techniques are related but different.

u-Substitution

Usually looks for:

  f(g(x)) · g'(x).

Example:

  ∫ 2x cos(x²) dx.

Use:

  u = x².

Trigonometric Substitution

Usually handles radicals such as:

  √(a² - x²).

Example:

  ∫ 1/√(9 - x²) dx.

Use:

  x = 3 sin θ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK RECOGNITION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

  √(a² - x²)

think:

  x = a sin θ

When you see:

  √(a² + x²)

think:

  x = a tan θ

When you see:

  √(x² - a²)

think:

  x = a sec θ

A simple memory aid is:

  Radical              Substitution
  ──────────────────────────────────
  √(a² - x²)           x = a sin θ
  √(a² + x²)           x = a tan θ
  √(x² - a²)           x = a sec θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  √(a² - x²) → x = a sin θ, dx = a cos θ dθ, √(a² - x²) = a cos θ
  √(a² + x²) → x = a tan θ, dx = a sec² θ dθ, √(a² + x²) = a sec θ
  √(x² - a²) → x = a sec θ, dx = a sec θ tan θ dθ, √(x² - a²) = a tan θ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric substitution transforms difficult algebraic radicals into simpler trigonometric expressions.

The three essential patterns are:

  √(a² - x²) → x = a sin θ
  √(a² + x²) → x = a tan θ
  √(x² - a²) → x = a sec θ

The method works because of the Pythagorean identities:

  1 - sin² θ = cos² θ
  1 + tan² θ = sec² θ
  sec² θ - 1 = tan² θ

The overall process is:

  Recognize the radical → Choose substitution → Find dx → Simplify → Integrate → Convert back to x

The most important thing to master first is recognizing which of the three radical forms you have. Once that becomes automatic, the rest of trigonometric substitution becomes much easier.

Easy way to remember: √(a² - x²) uses sine, √(a² + x²) uses tangent, and √(x² - a²) uses secant.
  `,
  examples: [
    "∫ 1/√(9 - x²) dx = arcsin(x/3) + C",
    "∫ 1/√(4 + x²) dx = ln|x + √(x² + 4)| + C",
    "∫ 1/√(x² - 9) dx = ln|x + √(x² - 9)| + C",
    "∫ √(a² - x²) dx = (x/2)√(a² - x²) + (a²/2) arcsin(x/a) + C",
    "∫ √(a² + x²) dx = (x/2)√(a² + x²) + (a²/2) ln|x + √(a² + x²)| + C",
    "∫ √(x² - a²) dx = (x/2)√(x² - a²) - (a²/2) ln|x + √(x² - a²)| + C",
  ],
};

export default topic;