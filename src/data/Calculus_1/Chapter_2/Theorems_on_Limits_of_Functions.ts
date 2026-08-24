// filename: theorems-on-limits-of-functions.ts

const topic = {
  id: "theorems-on-limits-of-functions",
  title: "Theorems on Limits of Functions",
  summary:
    "Mathematical rules and laws for evaluating limits, including the constant, identity, sum, difference, product, quotient, power, root, and sandwich theorems.",
  details: `
After learning what a limit is, the next important topic is the theorems and laws of limits. These theorems provide rules that allow us to evaluate limits more easily without always creating tables or analyzing graphs.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

The theorems on limits tell us how to find the limit when functions are:
  • Added
  • Subtracted
  • Multiplied
  • Divided
  • Raised to powers
  • Combined with constants

These rules are extremely important because they make solving limits faster and form the foundation for many topics in Calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Limit Theorem states that the limit of a constant is the constant itself.
  lim(x→a) c = c

where c is any constant.

Example:
  lim(x→3) 5

The value is always 5, regardless of what x does.

Therefore:
  lim(x→3) 5 = 5

Explanation:
  A constant function does not change.
  For example: f(x) = 7
  No matter what value x approaches, f(x) = 7.

Therefore:
  lim(x→a) 7 = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IDENTITY LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Identity Limit Theorem states:
  lim(x→a) x = a

This simply means that as x approaches a, its value approaches a.

Example:
  lim(x→5) x

Since x is approaching 5:
  lim(x→5) x = 5

This theorem may seem simple, but it is one of the foundations of other limit laws.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Constant Multiple Theorem states:
  lim(x→a) [c f(x)] = c · lim(x→a) f(x)

where c is a constant.

Example:
  Find: lim(x→2) 5x²

We can separate the constant:
  = 5 · lim(x→2) x²

Since:
  lim(x→2) x² = 4

we get:
  5(4) = 20

Therefore:
  lim(x→2) 5x² = 20

Explanation:
  Constants can be taken outside the limit because multiplying by a constant 
  does not change the limiting behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sum Theorem states:
  lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)

provided both limits exist.

Example:
  Find: lim(x→2) (x² + 3x)

Separate the limits:
  = lim(x→2) x² + lim(x→2) 3x

Evaluate:
  = 4 + 6

Therefore:
  10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Difference Theorem states:
  lim(x→a) [f(x) - g(x)] = lim(x→a) f(x) - lim(x→a) g(x)

provided both limits exist.

Example:
  Find: lim(x→3) (x² - 2x)

Separate the limits:
  = lim(x→3) x² - lim(x→3) 2x

Evaluate:
  = 9 - 6

Therefore:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PRODUCT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Product Theorem states:
  lim(x→a) [f(x)g(x)] = (lim(x→a) f(x)) · (lim(x→a) g(x))

provided both limits exist.

Example:
  Find: lim(x→2) (x)(x + 3)

Separate the limits:
  = (lim(x→2) x) · (lim(x→2) (x + 3))

Evaluate:
  = (2)(5)

Therefore:
  10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. QUOTIENT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Quotient Theorem states:
  lim(x→a) f(x)/g(x) = lim(x→a) f(x) / lim(x→a) g(x)

provided:
  lim(x→a) g(x) ≠ 0

Example:
  Find: lim(x→2) (x² + 1)/(x + 3)

Substitute:
  (2² + 1)/(2 + 3) = 5/5 = 1

Therefore:
  1

Important Reminder:
  The denominator must not approach zero.
  If it does, the Quotient Theorem cannot be directly applied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POWER THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Power Theorem states:
  lim(x→a) [f(x)]ⁿ = [lim(x→a) f(x)]ⁿ

where n is a positive integer.

Example:
  Find: lim(x→2) (x + 1)³

Apply the Power Theorem:
  = [lim(x→2) (x + 1)]³

Substitute:
  = (2 + 1)³
  = 3³
  = 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROOT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Root Theorem states:
  lim(x→a) ⁿ√(f(x)) = ⁿ√(lim(x→a) f(x))

provided the root is defined.

Example:
  Find: lim(x→4) √(x + 5)

Substitute:
  = √(4 + 5)
  = √9
  = 3

Explanation:
  If the function inside the root approaches a value where the root is defined, 
  we can evaluate the limit directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POLYNOMIAL LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Polynomial Limit Theorem states that the limit of a polynomial can be found by direct substitution.

For a polynomial:
  P(x) = aₙxⁿ + ... + a₁x + a₀

then:
  lim(x→a) P(x) = P(a)

Example:
  Find: lim(x→2) (3x³ - 2x + 5)

Substitute:
  = 3(2)³ - 2(2) + 5
  = 3(8) - 4 + 5
  = 24 - 4 + 5
  = 25

This is why direct substitution works for polynomial functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTION LIMIT THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a rational function:
  f(x) = P(x)/Q(x)

the limit can usually be found by direct substitution if:
  Q(a) ≠ 0

Therefore:
  lim(x→a) P(x)/Q(x) = P(a)/Q(a)

as long as Q(a) ≠ 0.

Example:
  Find: lim(x→2) (x² + 1)/(x + 4)

Substitute:
  = (2² + 1)/(2 + 4)
  = 5/6

Therefore:
  5/6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIRECT SUBSTITUTION THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Direct Substitution Theorem states that if a function is continuous at x = a, then:
  lim(x→a) f(x) = f(a)

This is one of the most useful ideas in limits.

If substituting a into the function gives a normal real number, then the limit is often simply that value.

Example:
  Find: lim(x→3) (x² + 2x - 1)

Substitute:
  = 3² + 2(3) - 1
  = 9 + 6 - 1
  = 14

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. THE SANDWICH THEOREM (SQUEEZE THEOREM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Sandwich Theorem, also called the Squeeze Theorem, is used when a function is trapped between two other functions.

Suppose:
  g(x) ≤ f(x) ≤ h(x)

and:
  lim(x→a) g(x) = L
and:
  lim(x→a) h(x) = L

Then:
  lim(x→a) f(x) = L

Explanation:
  Imagine f(x) being squeezed between two functions.
  If both outside functions approach the same value, then the middle function 
  has no choice but to approach that same value.

Example:
  Consider -x² ≤ x² sin(1/x) ≤ x²

  As x → 0, we know:
    lim(x→0) -x² = 0
  and:
    lim(x→0) x² = 0

  Therefore, by the Sandwich Theorem:
    lim(x→0) x² sin(1/x) = 0

  Even though sin(1/x) oscillates, multiplying it by x² squeezes the entire 
  expression toward zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT SUMMARY OF LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then:

  Constant:          lim(x→a) c = c
  Identity:          lim(x→a) x = a
  Constant Multiple: lim(x→a) c f(x) = cL
  Sum:               lim(x→a) [f(x) + g(x)] = L + M
  Difference:        lim(x→a) [f(x) - g(x)] = L - M
  Product:           lim(x→a) [f(x)g(x)] = LM
  Quotient:          lim(x→a) f(x)/g(x) = L/M, provided M ≠ 0
  Power:             lim(x→a) [f(x)]ⁿ = Lⁿ
  Root:              lim(x→a) ⁿ√(f(x)) = ⁿ√L, provided the root is defined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. WHY LIMIT THEOREMS ARE IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Without limit theorems, we would need to calculate many values manually every time we wanted to find a limit.

The theorems allow us to:
  • Simplify complicated expressions
  • Evaluate polynomial limits quickly
  • Work with rational functions
  • Analyze functions systematically
  • Solve Calculus problems more efficiently

They also prepare us for more advanced topics such as:
  • Continuity
  • Derivatives
  • L'Hôpital's Rule
  • Integrals
  • Infinite series

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Theorem                Formula
  ───────────────────────────────────────────────────────────────────────────
  Constant               lim(x→a) c = c
  Identity               lim(x→a) x = a
  Constant Multiple      lim(x→a) c f(x) = c · lim(x→a) f(x)
  Sum                    lim(x→a) [f(x) + g(x)] = lim f(x) + lim g(x)
  Difference             lim(x→a) [f(x) - g(x)] = lim f(x) - lim g(x)
  Product                lim(x→a) [f(x)g(x)] = lim f(x) · lim g(x)
  Quotient               lim(x→a) f(x)/g(x) = lim f(x) / lim g(x), if lim g(x) ≠ 0
  Power                  lim(x→a) [f(x)]ⁿ = [lim f(x)]ⁿ
  Root                   lim(x→a) ⁿ√(f(x)) = ⁿ√(lim f(x))
  Sandwich (Squeeze)     If g ≤ f ≤ h and lim g = lim h = L, then lim f = L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Theorems on Limits of Functions provide mathematical rules for evaluating limits.

The most important laws are:
  • Constant Limit Theorem
  • Identity Limit Theorem
  • Constant Multiple Theorem
  • Sum Theorem
  • Difference Theorem
  • Product Theorem
  • Quotient Theorem
  • Power Theorem
  • Root Theorem
  • Polynomial Limit Theorem
  • Rational Function Limit Theorem
  • Direct Substitution Theorem
  • Sandwich or Squeeze Theorem

The most important idea to remember is:

  Limit theorems allow us to break complicated limits into simpler limits.

These theorems are essential in Calculus because they make limit problems easier to solve and provide the foundation for studying continuity, derivatives, and integrals.
  `,
  examples: [
    "lim(x→3) 5 = 5 (Constant Theorem)",
    "lim(x→5) x = 5 (Identity Theorem)",
    "lim(x→2) 5x² = 5·4 = 20 (Constant Multiple)",
    "lim(x→2) (x² + 3x) = 4 + 6 = 10 (Sum Theorem)",
    "lim(x→3) (x² - 2x) = 9 - 6 = 3 (Difference Theorem)",
    "lim(x→2) (x)(x+3) = (2)(5) = 10 (Product Theorem)",
    "lim(x→2) (x²+1)/(x+3) = 5/5 = 1 (Quotient Theorem)",
  ],
};

export default topic;