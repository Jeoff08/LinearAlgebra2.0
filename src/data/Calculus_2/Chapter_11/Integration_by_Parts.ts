// filename: IntegrationByParts.ts

const topic = {
  id: "integration-by-parts",
  title: "Integration by Parts",
  summary:
    "A comprehensive guide to the integration by parts technique, derived from the Product Rule. Covers the formula, LIATE rule, examples with exponential, trigonometric, and logarithmic functions, and repeated integration by parts.",
  details: `
Integration by Parts is one of the most important techniques in Calculus 2. It is used when an integral contains a product of two functions and ordinary substitution does not work effectively.

The technique comes from the Product Rule of Differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the Product Rule:

  d/dx [u(x)v(x)] = u(x)v'(x) + v(x)u'(x).

In differential notation:

  d(uv) = u dv + v du.

Rearranging:

  u dv = d(uv) - v du.

Integrating both sides gives:

  ∫ u dv = uv - ∫ v du.

Therefore, the formula for integration by parts is:

  ∫ u dv = uv - ∫ v du

This is the fundamental formula you need to remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY INTEGRATION BY PARTS WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The main purpose of integration by parts is to transform a difficult integral into an easier integral.

Suppose you have:

  ∫ f(x)g(x) dx.

Instead of trying to integrate the product directly, we choose:

  u = f(x)

and:

  dv = g(x) dx.

Then we find:

  du = f'(x) dx

and:

  v = ∫ g(x) dx.

Finally, we use:

  ∫ u dv = uv - ∫ v du.

The goal is to make:

  ∫ v du

simpler than the original integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FOUR THINGS YOU NEED TO FIND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you use integration by parts, identify these four quantities:

  u
  dv
  du
  v

A useful setup is:

  Quantity    What you do
  ────────────────────────────────────
  u           Choose a function
  dv          Choose the remaining part
  du          Differentiate u
  v           Integrate dv

Then apply:

  ∫ u dv = uv - ∫ v du.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1: ∫ x eˣ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ x eˣ dx.

This is a product:

  x · eˣ.

Integration by parts is appropriate.

Step 1: Choose u

Let:

  u = x.

Differentiate:

  du = dx.

Step 2: Choose dv

Let:

  dv = eˣ dx.

Integrate:

  v = eˣ.

Step 3: Apply the formula

  ∫ u dv = uv - ∫ v du.

Therefore:

  ∫ x eˣ dx = x eˣ - ∫ eˣ dx.

Integrate:

  = x eˣ - eˣ + C.

Factor:

  ∫ x eˣ dx = eˣ(x - 1) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DID WE CHOOSE u = x?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important question.

We chose:

  u = x

because differentiating x makes it simpler:

  x → 1 → 0.

Meanwhile,

  eˣ

is easy to integrate because:

  ∫ eˣ dx = eˣ.

So integration by parts converts:

  ∫ x eˣ dx

into:

  x eˣ - ∫ eˣ dx.

The new integral is easier.

That is the fundamental strategy:

  Choose u so that differentiating it makes the remaining integral easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LIATE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choosing u is sometimes difficult.

A useful guideline is LIATE.

  Letter    Function
  ──────────────────────────
  L         Logarithmic
  I         Inverse trigonometric
  A         Algebraic
  T         Trigonometric
  E         Exponential

Generally, choose the function appearing earlier in LIATE as u.

For example:

  ∫ x cos x dx.

Here:

  x is algebraic
  cos x is trigonometric

Since algebraic comes before trigonometric:

  u = x.

Then:

  dv = cos x dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 2: ∫ x cos x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:

  u = x

and:

  dv = cos x dx.

Then:

  du = dx

and:

  v = sin x.

Using integration by parts:

  ∫ x cos x dx = x sin x - ∫ sin x dx.

Since:

  ∫ sin x dx = -cos x,

we get:

  x sin x - (-cos x) + C.

Therefore:

  x sin x + cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 3: ∫ ln x dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This example is especially important because it doesn't initially look like a product.

We can rewrite:

  ln x

as:

  ln x · 1.

Therefore:

  ∫ ln x dx = ∫ (ln x)(1) dx.

Choose:

  u = ln x

because logarithmic functions have high priority in LIATE.

Then:

  du = (1/x) dx.

Choose:

  dv = dx.

Therefore:

  v = x.

Apply the formula:

  ∫ ln x dx = x ln x - ∫ x(1/x) dx.

Simplify:

  = x ln x - ∫ 1 dx.

Therefore:

  x ln x - x + C

This is a classic example of integration by parts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 4: ∫ x² eˣ dx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider:

  ∫ x² eˣ dx.

Choose:

  u = x²

and:

  dv = eˣ dx.

Then:

  du = 2x dx

and:

  v = eˣ.

Apply integration by parts:

  ∫ x² eˣ dx = x² eˣ - ∫ 2x eˣ dx.

But the remaining integral:

  ∫ 2x eˣ dx

still requires integration by parts.

First find:

  ∫ x eˣ dx = eˣ(x - 1).

Therefore:

  ∫ 2x eˣ dx = 2eˣ(x - 1).

So:

  ∫ x² eˣ dx = x² eˣ - 2eˣ(x - 1) + C.

Simplifying:

  eˣ(x² - 2x + 2) + C

This demonstrates that integration by parts can be applied repeatedly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. REPEATED INTEGRATION BY PARTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When a polynomial is multiplied by an exponential or trigonometric function, integration by parts may need to be repeated.

For example:

  ∫ x³ eˣ dx.

The algebraic factor decreases:

  x³ → 3x² → 6x → 6 → 0.

Each application of integration by parts reduces the power of x.

This is why integration by parts works particularly well for:

  xⁿ eˣ

and:

  xⁿ sin x,

or:

  xⁿ cos x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRATION BY PARTS FOR DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration by parts can also be used for definite integrals.

The formula becomes:

  ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du

where:

  [uv]ₐᵇ = u(b)v(b) - u(a)v(a).

Example

Evaluate:

  ∫₀¹ x eˣ dx.

We already know:

  u = x, dv = eˣ dx,

so:

  du = dx, v = eˣ.

Therefore:

  ∫₀¹ x eˣ dx = [x eˣ]₀¹ - ∫₀¹ eˣ dx.

Evaluate the first part:

  [x eˣ]₀¹ = e.

And:

  ∫₀¹ eˣ dx = e - 1.

Thus:

  e - (e - 1) = 1.

Therefore:

  ∫₀¹ x eˣ dx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRATION BY PARTS AND THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important relationship between integration techniques:

  Substitution is essentially the reverse of the Chain Rule.

  Integration by Parts is essentially the reverse of the Product Rule.

So you can think of them this way:

  Chain Rule → u-Substitution

and:

  Product Rule → Integration by Parts

This relationship helps explain where the formulas come from.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHEN SHOULD YOU USE INTEGRATION BY PARTS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration by parts is especially useful for integrals containing:

  Algebraic × Exponential     ∫ x eˣ dx
  Algebraic × Trigonometric   ∫ x sin x dx
  Algebraic × Trigonometric   ∫ x cos x dx
  Logarithmic                 ∫ ln x dx
  Inverse Trigonometric       ∫ arctan x dx
  Polynomial × Exponential    ∫ x³ eˣ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the minus sign

The formula is:

  ∫ u dv = uv - ∫ v du

not:

  uv + ∫ v du.

Mistake 2: Choosing a bad u

The purpose is to make the new integral simpler.

If your choice produces an even more complicated integral, reconsider your choice.

Mistake 3: Forgetting dx

For example:

  dv = eˣ dx

not simply:

  dv = eˣ.

Mistake 4: Forgetting C

For an indefinite integral, always include:

  +C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an integral, ask:

Question 1: Is it a product?

For example:

  x eˣ

If yes, consider integration by parts.

Question 2: Which part should be u?

Use LIATE as a guideline.

Question 3: Can dv be integrated easily?

If yes, proceed.

Question 4: Does the resulting integral become simpler?

If yes, your choice was probably appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integration by Parts Formula:
    ∫ u dv = uv - ∫ v du

  LIATE Rule (priority for choosing u):
    L - Logarithmic
    I - Inverse trigonometric
    A - Algebraic
    T - Trigonometric
    E - Exponential

  Definite Integral Version:
    ∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration by Parts is based on the Product Rule and uses:

  ∫ u dv = uv - ∫ v du

The procedure is:

  Choose u → Choose dv → Find du → Find v → Apply the formula

The most important skill is choosing u correctly.

A useful guideline is:

  LIATE

where:

  L = Logarithmic
  I = Inverse Trigonometric
  A = Algebraic
  T = Trigonometric
  E = Exponential

The overall purpose is simple:

  Use integration by parts to replace a difficult integral with a simpler one.

Once you recognize products such as x eˣ, x sin x, x cos x, and logarithmic functions, integration by parts becomes one of the most powerful tools in Calculus 2.

Easy way to remember: Integration by parts is the product rule in reverse. Choose u to be the function that simplifies when differentiated, and dv to be the part that is easy to integrate.
  `,
  examples: [
    "∫ x eˣ dx = eˣ(x - 1) + C",
    "∫ x cos x dx = x sin x + cos x + C",
    "∫ ln x dx = x ln x - x + C",
    "∫ x² eˣ dx = eˣ(x² - 2x + 2) + C",
    "∫₀¹ x eˣ dx = 1",
    "∫ x sin x dx = -x cos x + sin x + C",
    "∫ arctan x dx = x arctan x - (1/2) ln(1 + x²) + C",
  ],
};

export default topic;