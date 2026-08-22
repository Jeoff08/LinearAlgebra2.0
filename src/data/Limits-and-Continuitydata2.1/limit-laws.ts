const topic = {
  id: "limit-laws",
  title: "Limit Laws",
  summary:
    "Constant, identity, constant multiple, sum, difference, product, quotient, power, and root laws for evaluating limits.",
  details: `
Limit Laws are rules that help us evaluate limits of functions by breaking complicated expressions into simpler parts.

Instead of evaluating an entire expression at once, we can use the limits of its individual components.

For example, if lim(x→a) f(x) = L and lim(x→a) g(x) = M, then we can use different limit laws to find the limit of expressions involving f(x) and g(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. LIMIT OF A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If c is a constant, then: lim(x→a) c = c

The value of a constant does not change.

Example: lim(x→3) 7 = 7

Since 7 is constant: 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. IDENTITY LIMIT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit of x as x approaches a is simply a:

  lim(x→a) x = a

Example: lim(x→5) x = 5

Therefore: 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONSTANT MULTIPLE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L, then: lim(x→a) [c·f(x)] = c·L

where c is a constant.

Example: Suppose lim(x→2) f(x) = 4

Find: lim(x→2) 3f(x)

Using the constant multiple law: 3(4) = 12

Therefore: 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. SUM LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then:

  lim(x→a) [f(x) + g(x)] = L + M

Example: Suppose lim(x→2) f(x) = 3 and lim(x→2) g(x) = 5

Then: lim(x→2) [f(x) + g(x)] = 3 + 5 = 8

Therefore: 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENCE LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The difference law states: lim(x→a) [f(x) - g(x)] = L - M

Example: If lim(x→3) f(x) = 10 and lim(x→3) g(x) = 4

then: lim(x→3) [f(x) - g(x)] = 10 - 4 = 6

Therefore: 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. PRODUCT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then:

  lim(x→a) [f(x)·g(x)] = L·M

Example: Suppose lim(x→2) f(x) = 3 and lim(x→2) g(x) = 4

Then: lim(x→2) [f(x)·g(x)] = 3(4) = 12

Therefore: 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. QUOTIENT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L and lim(x→a) g(x) = M, where M ≠ 0, then:

  lim(x→a) [f(x)/g(x)] = L/M

Example: Suppose lim(x→1) f(x) = 6 and lim(x→1) g(x) = 2

Then: lim(x→1) [f(x)/g(x)] = 6/2 = 3

Therefore: 3

Important: The denominator's limit must not be zero: M ≠ 0

If the denominator approaches zero, more analysis is required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POWER LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L, then for a positive integer n:

  lim(x→a) [f(x)]ⁿ = Lⁿ

Example: Suppose lim(x→2) f(x) = 3

Find: lim(x→2) [f(x)]⁴

Apply the power law: 3⁴ = 81

Therefore: 81

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROOT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L, then:

  lim(x→a) ⁿ√(f(x)) = ⁿ√L

provided the root is defined appropriately.

Example: Suppose lim(x→4) f(x) = 16

Then: lim(x→4) √(f(x)) = √16 = 4

Therefore: 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. POLYNOMIAL LIMIT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Polynomial functions are continuous, so their limits can be found simply by substitution.

Consider: f(x) = 3x² + 2x - 5

Find: lim(x→2) (3x² + 2x - 5)

Substitute: 3(2)² + 2(2) - 5 = 12 + 4 - 5 = 11

Therefore: 11

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATIONAL FUNCTION LIMIT LAW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For rational functions: f(x) = P(x)/Q(x), we can substitute directly if Q(a) ≠ 0

Example: lim(x→2) (x + 3)/(x + 1)

Substitute x = 2: (2 + 3)/(2 + 1) = 5/3

Therefore: 5/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limit laws often allow us to use direct substitution.

Example: lim(x→3) (x² + 4x + 1)

Substitute: 3² + 4(3) + 1 = 9 + 12 + 1 = 22

Therefore: 22

This works because polynomial functions are continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMBINING MULTIPLE LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes several laws are needed at once.

Consider: lim(x→2) (3x² + 4x - 1)

Break the expression apart:

  3·lim(x→2) x² + 4·lim(x→2) x - lim(x→2) 1

Using the laws:
  3(2²) + 4(2) - 1 = 12 + 8 - 1 = 19

Therefore: 19

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH A PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→3) (x + 2)(x - 1)

Using the product law:

  [lim(x→3) (x + 2)] · [lim(x→3) (x - 1)]

Evaluate each: (3 + 2)(3 - 1) = 5(2) = 10

Therefore: 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH A QUOTIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→4) (x² + 1)/(x + 2)

Using direct substitution: (16 + 1)/(4 + 2) = 17/6

Therefore: 17/6

The denominator is not zero, so the quotient law applies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH A POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→2) (x + 1)³

First: lim(x→2) (x + 1) = 3

Then apply the power law: 3³ = 27

Therefore: 27

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXAMPLE WITH A SQUARE ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→4) √(x + 5)

Substitute: √(4 + 5) = √9 = 3

Therefore: 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHEN LIMIT LAWS CANNOT BE USED DIRECTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important situations occurs when direct substitution produces 0/0.

This is called an indeterminate form.

Example: lim(x→2) (x² - 4)/(x - 2)

Direct substitution gives: (4 - 4)/(2 - 2) = 0/0

We cannot simply say the answer is 0.

Instead, factor the numerator: x² - 4 = (x - 2)(x + 2)

Then: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2)

Cancel: x + 2

Now evaluate: lim(x→2) (x + 2) = 4

Therefore: 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT LIMIT LAWS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then:

  • Constant: lim(x→a) c = c
  • Identity: lim(x→a) x = a
  • Constant Multiple: lim(x→a) c·f(x) = c·L
  • Sum: lim(x→a) [f(x) + g(x)] = L + M
  • Difference: lim(x→a) [f(x) - g(x)] = L - M
  • Product: lim(x→a) [f(x)·g(x)] = L·M
  • Quotient: lim(x→a) [f(x)/g(x)] = L/M (where M ≠ 0)
  • Power: lim(x→a) [f(x)]ⁿ = Lⁿ
  • Root: lim(x→a) ⁿ√(f(x)) = ⁿ√L

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. A USEFUL PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a limit, use this order:

Step 1: Try direct substitution.

Step 2: If you get an ordinary number, you're usually done.

Step 3: If you get 0/0, then you need another technique such as:
  • Factoring
  • Canceling common factors
  • Rationalizing
  • Finding a common denominator
  • Other algebraic techniques

Step 4: If you get division by zero with a nonzero numerator, investigate for an infinite limit or vertical asymptote.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Limit Laws, remember:

  • Limit laws allow us to break expressions into simpler parts.
  • Direct substitution works for polynomial and rational functions (when defined).
  • The quotient law requires the denominator's limit to be non-zero.
  • 0/0 is indeterminate and requires additional work.

The key idea to remember is:

  Limit Laws provide the basic rules for combining limits. They allow you to break complicated expressions into simpler pieces and evaluate each part separately. The most important warning is: 0/0 is indeterminate. It does not automatically mean the limit is 0. When direct substitution produces 0/0, additional algebraic work is required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limit Laws are essential tools for evaluating limits and serve as the foundation for more advanced calculus concepts.

Key concepts covered:

  ✓ Limit of a Constant
  ✓ Identity Limit Law
  ✓ Constant Multiple Law
  ✓ Sum Law
  ✓ Difference Law
  ✓ Product Law
  ✓ Quotient Law
  ✓ Power Law
  ✓ Root Law
  ✓ Polynomial Limit Law
  ✓ Rational Function Limit Law
  ✓ Direct Substitution
  ✓ Combining Multiple Laws
  ✓ Indeterminate Forms (0/0)
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "Evaluate: lim(x→3) 7 → 7",
    "Evaluate: lim(x→5) x → 5",
    "Evaluate: lim(x→2) 3f(x) given lim f(x)=4 → 12",
    "Evaluate: lim(x→2) [f(x)+g(x)] given lim f=3, lim g=5 → 8",
    "Evaluate: lim(x→3) [f(x)-g(x)] given lim f=10, lim g=4 → 6",
    "Evaluate: lim(x→2) [f(x)·g(x)] given lim f=3, lim g=4 → 12",
    "Evaluate: lim(x→1) [f(x)/g(x)] given lim f=6, lim g=2 → 3",
    "Evaluate: lim(x→2) [f(x)]⁴ given lim f=3 → 81",
    "Evaluate: lim(x→4) √(f(x)) given lim f=16 → 4",
    "Evaluate: lim(x→2) (3x²+2x-5) → 11",
    "Evaluate: lim(x→2) (x+3)/(x+1) → 5/3",
    "Evaluate: lim(x→3) (x²+4x+1) → 22",
    "Evaluate: lim(x→2) (3x²+4x-1) → 19",
    "Evaluate: lim(x→3) (x+2)(x-1) → 10",
    "Evaluate: lim(x→4) (x²+1)/(x+2) → 17/6",
    "Evaluate: lim(x→2) (x+1)³ → 27",
    "Evaluate: lim(x→4) √(x+5) → 3",
    "Evaluate: lim(x→2) (x²-4)/(x-2) → 4 (factor first)",
    "Identify: 0/0 is indeterminate and requires more work",
    "Use quotient law: denominator limit must not be zero",
  ],
};

export default topic;