// filename: IntegralsOfHyperbolicFunctions.ts

const topic = {
  id: "integrals-of-hyperbolic-functions",
  title: "Integrals of Hyperbolic Functions",
  summary:
    "A comprehensive guide to integrating all six hyperbolic functions: sinh, cosh, tanh, coth, sech, and csch. Covers basic integrals, substitution methods, and comparison with trigonometric integrals.",
  details: `
Integration is the reverse process of differentiation. Since we already know the derivatives of hyperbolic functions, we can use those derivative formulas to find their antiderivatives or integrals.

The six main hyperbolic functions are:

  sinh x, cosh x, tanh x, coth x, sech x, csch x

Understanding their integrals is useful in Calculus, differential equations, physics, and engineering.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC IDEA OF INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  d/dx [F(x)] = f(x)

then:

  ∫ f(x) dx = F(x) + C

where C is the constant of integration.

For example, since:

  d/dx (cosh x) = sinh x

we know that:

  ∫ sinh x dx = cosh x + C

Similarly, because:

  d/dx (sinh x) = cosh x

then:

  ∫ cosh x dx = sinh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INTEGRAL OF HYPERBOLIC SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative formula is:

  d/dx (cosh x) = sinh x

Therefore:

  ∫ sinh x dx = cosh x + C

Example

Evaluate:

  ∫ 5 sinh x dx

Take the constant outside:

  = 5 ∫ sinh x dx

Since:

  ∫ sinh x dx = cosh x

we get:

  5 cosh x + C

Verification

Differentiate:

  d/dx (5 cosh x + C) = 5 sinh x

The answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTEGRAL OF HYPERBOLIC COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:

  d/dx (sinh x) = cosh x

we have:

  ∫ cosh x dx = sinh x + C

Example

Evaluate:

  ∫ 7 cosh x dx = 7 sinh x + C

Therefore:

  7 sinh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTEGRAL OF HYPERBOLIC SECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From differentiation:

  d/dx (tanh x) = sech² x

Therefore:

  ∫ sech² x dx = tanh x + C

Example

Evaluate:

  ∫ 4 sech² x dx

Take the constant outside:

  4 ∫ sech² x dx

Therefore:

  4 tanh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INTEGRAL OF HYPERBOLIC COSECANT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We know:

  d/dx (coth x) = -csch² x

Therefore:

  ∫ csch² x dx = -coth x + C

Example

Evaluate:

  ∫ 6 csch² x dx

Then:

  -6 coth x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INTEGRAL OF sech x · tanh x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From the derivative formula:

  d/dx (sech x) = -sech x · tanh x

Therefore:

  ∫ sech x · tanh x dx = -sech x + C

Example

Evaluate:

  ∫ 3 sech x · tanh x dx

Therefore:

  -3 sech x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRAL OF csch x · coth x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From differentiation:

  d/dx (csch x) = -csch x · coth x

Therefore:

  ∫ csch x · coth x dx = -csch x + C

Example

Evaluate:

  ∫ 5 csch x · coth x dx

Then:

  -5 csch x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. SUMMARY OF THE MOST IMPORTANT BASIC INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integral                        Result
  ──────────────────────────────────────────────────────────
  ∫ sinh x dx                     cosh x + C
  ∫ cosh x dx                     sinh x + C
  ∫ sech² x dx                    tanh x + C
  ∫ csch² x dx                    -coth x + C
  ∫ sech x · tanh x dx            -sech x + C
  ∫ csch x · coth x dx            -csch x + C

These are the easiest hyperbolic integrals because they come directly from the derivative formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRALS OF tanh x AND coth x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These integrals require a little more work.

Integral of Hyperbolic Tangent

Recall:

  tanh x = sinh x / cosh x

We want to evaluate:

  ∫ tanh x dx

Substitute:

  u = cosh x

Then:

  du = sinh x dx

Therefore:

  ∫ sinh x / cosh x dx = ∫ 1/u du

We know:

  ∫ 1/u du = ln|u| + C

Substitute back:

  ∫ tanh x dx = ln|cosh x| + C

Since:

  cosh x > 0

for all real x, this is usually written as:

  ∫ tanh x dx = ln(cosh x) + C

Example

Evaluate:

  ∫ 3 tanh x dx

Take out the constant:

  3 ∫ tanh x dx

Therefore:

  3 ln(cosh x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. INTEGRAL OF HYPERBOLIC COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:

  coth x = cosh x / sinh x

We want:

  ∫ coth x dx

Let:

  u = sinh x

Then:

  du = cosh x dx

Therefore:

  ∫ cosh x / sinh x dx = ∫ 1/u du

Thus:

  ∫ coth x dx = ln|sinh x| + C

Example

Evaluate:

  ∫ 2 coth x dx

Then:

  2 ln|sinh x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRAL OF HYPERBOLIC SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the more important special integrals is:

  ∫ sech x dx

The result is:

  ∫ sech x dx = arctan(sinh x) + C

An equivalent form is:

  ∫ sech x dx = 2 arctan(eˣ) + C

These answers may differ by a constant but represent equivalent antiderivatives.

Another commonly used logarithmic form is:

  ∫ sech x dx = ln|sech x + tanh x| + C

Important Note

The logarithmic form is especially useful when working with hyperbolic identities, while:

  arctan(sinh x)

is often easier to verify by differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF HYPERBOLIC COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of csch x is:

  ∫ csch x dx = ln|coth x - csch x| + C

An equivalent form is:

  ∫ csch x dx = ln|tanh(x/2)| + C

Another equivalent form is:

  ∫ csch x dx = -ln|coth x + csch x| + C

These forms differ only by constants over appropriate intervals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY SOME HYPERBOLIC INTEGRALS ARE EASY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some integrals can be solved immediately because they directly reverse a derivative.

For example:

  d/dx (sinh x) = cosh x

Therefore:

  ∫ cosh x dx = sinh x + C

Similarly:

  d/dx (tanh x) = sech² x

Therefore:

  ∫ sech² x dx = tanh x + C

The key strategy is:

  Look at the integrand and ask: "Which hyperbolic function has this as its derivative?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. USING THE CHAIN RULE IN INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The chain rule has a reverse process called u-substitution.

Suppose:

  ∫ cosh(3x) dx

Let:

  u = 3x

Then:

  du = 3 dx

Therefore:

  dx = du/3

Substitute:

  ∫ cosh(3x) dx
  = (1/3) ∫ cosh u du
  = (1/3) sinh u + C

Substitute back:

  (1/3) sinh(3x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MORE EXAMPLES USING SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example 1

Evaluate:

  ∫ sech²(4x) dx

Let:

  u = 4x

Then:

  du = 4 dx
  dx = du/4

Therefore:

  ∫ sech²(4x) dx = (1/4) ∫ sech² u du
  = (1/4) tanh(4x) + C

Example 2

Evaluate:

  ∫ x cosh(x²) dx

Let:

  u = x²

Then:

  du = 2x dx

Therefore:

  x dx = du/2

Substitute:

  ∫ x cosh(x²) dx = (1/2) ∫ cosh u du
  = (1/2) sinh u + C

Substitute back:

  (1/2) sinh(x²) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. INTEGRATING COMBINATIONS OF HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ (3 sinh x + 5 cosh x) dx

Integrate term by term:

  3 ∫ sinh x dx + 5 ∫ cosh x dx
  = 3 cosh x + 5 sinh x + C

Therefore:

  ∫ (3 sinh x + 5 cosh x) dx = 3 cosh x + 5 sinh x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DEFINITE INTEGRALS OF HYPERBOLIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a definite integral, we first find the antiderivative and then apply the limits.

Example:

  ∫₀¹ sinh x dx

The antiderivative is:

  cosh x

Therefore:

  ∫₀¹ sinh x dx = [cosh x]₀¹
  = cosh(1) - cosh(0)

Since:

  cosh(0) = 1

we get:

  cosh(1) - 1

Numerically:

  ≈ 0.543

This definite integral represents the accumulated signed area under the curve y = sinh x from x = 0 to x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. COMPLETE INTEGRAL TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Integral                          Result
  ──────────────────────────────────────────────────────────────────────────
  ∫ sinh x dx                       cosh x + C
  ∫ cosh x dx                       sinh x + C
  ∫ tanh x dx                       ln(cosh x) + C
  ∫ coth x dx                       ln|sinh x| + C
  ∫ sech x dx                       arctan(sinh x) + C
  ∫ csch x dx                       ln|coth x - csch x| + C
  ∫ sech² x dx                      tanh x + C
  ∫ csch² x dx                      -coth x + C
  ∫ sech x · tanh x dx              -sech x + C
  ∫ csch x · coth x dx              -csch x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. COMPARISON WITH TRIGONOMETRIC INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Trigonometric Integral            Hyperbolic Integral
  ──────────────────────────────────────────────────────────────────────────
  ∫ sin x dx = -cos x + C           ∫ sinh x dx = cosh x + C
  ∫ cos x dx = sin x + C            ∫ cosh x dx = sinh x + C
  ∫ tan x dx = -ln|cos x| + C       ∫ tanh x dx = ln(cosh x) + C
  ∫ sec² x dx = tan x + C           ∫ sech² x dx = tanh x + C
  ∫ csc² x dx = -cot x + C          ∫ csch² x dx = -coth x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Forgetting the Constant of Integration

For indefinite integrals:

Incorrect:

  ∫ sinh x dx = cosh x

Correct:

  ∫ sinh x dx = cosh x + C

2. Confusing sinh and sin

Remember:

  sinh x

is a hyperbolic function, while:

  sin x

is an ordinary trigonometric function.

Their integrals are different:

  ∫ sin x dx = -cos x + C

but:

  ∫ sinh x dx = cosh x + C

3. Forgetting the Inside Derivative

For example:

  ∫ cosh(5x) dx

The answer is not:

  sinh(5x) + C

because:

  d/dx [sinh(5x)] = 5 cosh(5x)

The correct answer is:

  (1/5) sinh(5x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ sinh x dx = cosh x + C
  ∫ cosh x dx = sinh x + C
  ∫ tanh x dx = ln(cosh x) + C
  ∫ coth x dx = ln|sinh x| + C
  ∫ sech² x dx = tanh x + C
  ∫ csch² x dx = -coth x + C
  ∫ sech x · tanh x dx = -sech x + C
  ∫ csch x · coth x dx = -csch x + C
  ∫ sech x dx = arctan(sinh x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When integrating hyperbolic functions, remember these four major ideas:

1. Reverse the Derivative

  ∫ sinh x dx = cosh x + C
  ∫ cosh x dx = sinh x + C

2. Use Known Derivative Patterns

  ∫ sech² x dx = tanh x + C
  ∫ csch² x dx = -coth x + C

3. Use Substitution When Needed

Functions such as:

  tanh x = sinh x / cosh x

can be integrated using u-substitution.

4. Always Include +C

For indefinite integrals:

  Answer + C

is required.

Main Idea

Integrals of hyperbolic functions are closely connected to their derivatives. The easiest way to solve them is to recognize derivative patterns first. If the pattern is more complicated, techniques such as u-substitution, algebraic manipulation, and logarithmic identities can be used. Once you know the fundamental derivative and integral formulas, most hyperbolic integration problems become much easier to solve.

Easy way to remember: The integrals of sinh and cosh are just the other function (no negative sign). tanh integrates to ln(cosh x), and coth integrates to ln|sinh x|.
  `,
  examples: [
    "∫ sinh x dx = cosh x + C",
    "∫ cosh x dx = sinh x + C",
    "∫ sech² x dx = tanh x + C",
    "∫ csch² x dx = -coth x + C",
    "∫ sech x · tanh x dx = -sech x + C",
    "∫ csch x · coth x dx = -csch x + C",
    "∫ tanh x dx = ln(cosh x) + C",
    "∫ coth x dx = ln|sinh x| + C",
    "∫ sech x dx = arctan(sinh x) + C",
    "∫ cosh(3x) dx = (1/3) sinh(3x) + C",
    "∫ x cosh(x²) dx = (1/2) sinh(x²) + C",
    "∫₀¹ sinh x dx = cosh(1) - 1 ≈ 0.543",
  ],
};

export default topic;