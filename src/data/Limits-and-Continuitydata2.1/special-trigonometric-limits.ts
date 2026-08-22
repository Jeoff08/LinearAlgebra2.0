const topic = {
  id: "special-trigonometric-limits",
  title: "Special Trigonometric Limits",
  summary:
    "The fundamental trigonometric limits, sin(x)/x, tan(x)/x, (1-cos(x))/x, (1-cos(x))/x², and their variations with constants.",
  details: `
Special trigonometric limits are important limits involving trigonometric functions such as sin(x), cos(x), and tan(x).

These limits are especially important in Calculus 1 because they are used to evaluate more complicated trigonometric limits and to derive the derivatives of trigonometric functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MOST IMPORTANT TRIGONOMETRIC LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most fundamental trigonometric limit is:

  lim(x→0) sin(x)/x = 1

This is one of the most important limits you need to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT EQUAL TO 1?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the Squeeze Theorem, we can establish that:

  cos(x) ≤ sin(x)/x ≤ 1

for x near 0.

As x → 0: cos(x) → 1 and 1 → 1

Therefore: lim(x→0) sin(x)/x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE SECOND IMPORTANT LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important result is:

  lim(x→0) tan(x)/x = 1

Since: tan(x) = sin(x)/cos(x)

we can write: tan(x)/x = sin(x)/x · 1/cos(x)

Therefore: lim(x→0) tan(x)/x = [lim(x→0) sin(x)/x] · [lim(x→0) 1/cos(x)]

Using sin(x)/x → 1 and cos(x) → 1, we get: 1 · 1 = 1

Thus: lim(x→0) tan(x)/x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER IMPORTANT LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) (1 - cos(x))/x = 0

We can evaluate this using the identity: 1 - cos(x) = 2sin²(x/2)

Therefore: (1 - cos(x))/x = 2sin²(x/2)/x

This approaches 0, so: lim(x→0) (1 - cos(x))/x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. A MORE USEFUL COSINE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another very common form is:

  lim(x→0) (1 - cos(x))/x² = 1/2

This is an important special trigonometric limit.

Derivation: Start with (1 - cos(x))/x²

Use the identity: 1 - cos(x) = 2sin²(x/2)

Therefore: (1 - cos(x))/x² = 2sin²(x/2)/x²

Rewrite: = 1/2 · [sin(x/2)/(x/2)]²

As x → 0, x/2 → 0 and sin(x/2)/(x/2) → 1

Therefore: 1/2 · (1)² = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SPECIAL LIMITS YOU SHOULD MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Calculus 1, these are extremely important:

  • lim(x→0) sin(x)/x = 1
  • lim(x→0) tan(x)/x = 1
  • lim(x→0) (1 - cos(x))/x = 0
  • lim(x→0) (1 - cos(x))/x² = 1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. LIMITS WITH A CONSTANT MULTIPLIER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) sin(3x)/x

We want the denominator to contain 3x.

Rewrite: sin(3x)/x = 3 · sin(3x)/(3x)

Therefore: 3 · lim(x→0) sin(3x)/(3x)

Since lim(u→0) sin(u)/u = 1, we get: 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GENERAL FORMULA FOR SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful formula is:

  lim(x→0) sin(kx)/x = k

where k is a constant.

Example: lim(x→0) sin(7x)/x = 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. SINE OVER A MULTIPLE OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) sin(4x)/(2x)

Rewrite: sin(4x)/(2x) = 2 · sin(4x)/(4x)

Therefore: 2(1) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. SINE WITH A MORE COMPLICATED DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(5x)/(3x)

Rewrite: sin(5x)/(3x) = 5/3 · sin(5x)/(5x)

Therefore: 5/3 · (1) = 5/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH x² IN DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(2x)/x²

We can rewrite: sin(2x)/x² = [sin(2x)/(2x)] · (2/x)

The first factor approaches 1, but 2/x does not approach a finite number.

Therefore, this limit does not have a finite two-sided limit. DNE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH x² IN THE NUMERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) x²·sin(x)

Since |sin(x)| ≤ 1, we have |x²·sin(x)| ≤ x² and x² → 0

Therefore: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. TANGENT LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) tan(5x)/x

Rewrite: tan(5x)/x = 5 · tan(5x)/(5x)

Using lim(u→0) tan(u)/u = 1, we get: 5(1) = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GENERAL TANGENT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For any constant k: lim(x→0) tan(kx)/x = k

Example: lim(x→0) tan(8x)/x = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH A CONSTANT IN THE DENOMINATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) tan(6x)/(3x)

Rewrite: tan(6x)/(3x) = 2 · tan(6x)/(6x)

Therefore: 2(1) = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. COSINE LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) (1 - cos(x))/x² = 1/2

Now let's use it with a coefficient.

Evaluate: lim(x→0) (1 - cos(3x))/x²

Using: lim(u→0) (1 - cos(u))/u² = 1/2

Rewrite: (1 - cos(3x))/x² = 9 · (1 - cos(3x))/(3x)²

Therefore: 9 · (1/2) = 9/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. GENERAL COSINE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a constant k: lim(x→0) (1 - cos(kx))/x² = k²/2

Example: lim(x→0) (1 - cos(4x))/x² = 16/2 = 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WITH 2x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) (1 - cos(2x))/x²

Using k²/2 with k = 2: 4/2 = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. LIMITS INVOLVING PRODUCTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: lim(x→0) x · sin(4x)/x

Since sin(4x)/x = 4 · sin(4x)/(4x), we get: x · 4 · (1)

As x → 0: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT IDENTITIES FOR TRIGONOMETRIC LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Knowing these identities can make special limits much easier.

  • Pythagorean Identity: sin²(x) + cos²(x) = 1
  • Tangent Identity: tan(x) = sin(x)/cos(x)
  • Difference of Cosines: 1 - cos(x) = 2sin²(x/2)
  • Double-Angle Identity: sin(2x) = 2sin(x)cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE USING AN IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin²(x)/x²

Rewrite: sin²(x)/x² = (sin(x)/x)²

Using lim(x→0) sin(x)/x = 1, we get: 1² = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE WITH TANGENT SQUARED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) tan²(x)/x²

Rewrite: (tan(x)/x)²

Since tan(x)/x → 1, we get: 1² = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. EXAMPLE COMBINING SINE AND TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) sin(x)/tan(x)

Since tan(x) = sin(x)/cos(x), we have: sin(x)/tan(x) = sin(x)/(sin(x)/cos(x)) = cos(x)

Therefore: lim(x→0) cos(x) = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. EXAMPLE WITH COSINE AND SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate: lim(x→0) (1 - cos(x))/sin(x)

Use: 1 - cos(x) = 2sin²(x/2) and sin(x) = 2sin(x/2)cos(x/2)

Therefore: (1 - cos(x))/sin(x) = tan(x/2)

As x → 0: tan(x/2) → 0

Therefore: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT SPECIAL LIMITS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limit: lim(x→0) sin(x)/x
Result: 1

Limit: lim(x→0) tan(x)/x
Result: 1

Limit: lim(x→0) (1 - cos(x))/x
Result: 0

Limit: lim(x→0) (1 - cos(x))/x²
Result: 1/2

Limit: lim(x→0) sin(kx)/x
Result: k

Limit: lim(x→0) tan(kx)/x
Result: k

Limit: lim(x→0) (1 - cos(kx))/x²
Result: k²/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. A USEFUL PATTERN TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you see: sin(kx)/(mx)

try to rewrite it as: k/m · sin(kx)/(kx)

Therefore: lim(x→0) sin(kx)/(mx) = k/m

Example: lim(x→0) sin(6x)/(4x) = 6/4 = 3/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. ANOTHER USEFUL PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you see: (1 - cos(kx))/(mx²)

rewrite it as: (k²/m) · (1 - cos(kx))/(kx)²

Therefore: lim(x→0) (1 - cos(kx))/(mx²) = k²/(2m)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting that angles must be in radians
  The standard limit: lim(x→0) sin(x)/x = 1 assumes x is measured in radians.
  This is extremely important in Calculus.

Mistake 2: Using the special limit without matching the denominator
  For sin(3x)/x, you cannot immediately say 1.
  Instead: sin(3x)/x = 3 · sin(3x)/(3x), so the answer is 3.

Mistake 3: Forgetting to square the coefficient
  For lim(x→0) (1 - cos(4x))/x², the answer is not 4/2.
  The coefficient must be squared: 4²/2 = 8.

Mistake 4: Confusing the cosine limits
  Remember: lim(x→0) (1 - cos(x))/x = 0, but lim(x→0) (1 - cos(x))/x² = 1/2.
  The denominator makes a major difference.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you encounter a trigonometric limit:

Step 1: Try direct substitution.
Step 2: Look for a special form.
  Look for: sin(x)/x, tan(x)/x, or (1 - cos(x))/x².
Step 3: Adjust the expression.
  Introduce constants so that the numerator and denominator match.
Step 4: Use the special limit.
  For example: sin(5x)/(5x) → 1.
Step 5: Simplify the remaining constants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Special Trigonometric Limits, remember:

  • The most important limits: sin(x)/x = 1, tan(x)/x = 1, (1 - cos(x))/x = 0, (1 - cos(x))/x² = 1/2.
  • For constants: sin(kx)/x = k, tan(kx)/x = k, (1 - cos(kx))/x² = k²/2.
  • Angles must be in radians.
  • Always adjust the expression to match the special form.

The key idea to remember is:

  The most important special trigonometric limits to remember are: lim(x→0) sin(x)/x = 1, lim(x→0) tan(x)/x = 1, lim(x→0) (1 - cos(x))/x = 0, and lim(x→0) (1 - cos(x))/x² = 1/2. For constants k: lim(x→0) sin(kx)/x = k, lim(x→0) tan(kx)/x = k, and lim(x→0) (1 - cos(kx))/x² = k²/2. And remember the most important rule: Special trigonometric limits use radians, not degrees. These limits form the foundation for derivatives of trigonometric functions, so mastering them is very important before moving deeper into differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Special Trigonometric Limits are essential tools for evaluating trigonometric limits and deriving derivatives of trigonometric functions.

Key concepts covered:

  ✓ The Most Important Trigonometric Limit
  ✓ Why It Equals 1
  ✓ The Second Important Limit
  ✓ Another Important Limit
  ✓ A More Useful Cosine Limit
  ✓ Limits with a Constant Multiplier
  ✓ General Formula for Sine
  ✓ Sine Over a Multiple of x
  ✓ Tangent Limits
  ✓ General Tangent Formula
  ✓ Cosine Limits
  ✓ General Cosine Formula
  ✓ Important Identities
  ✓ Useful Patterns
  ✓ Common Mistakes
  ✓ Problem-Solving Strategy
  `,
  examples: [
    "Evaluate: lim(x→0) sin(x)/x → 1",
    "Evaluate: lim(x→0) tan(x)/x → 1",
    "Evaluate: lim(x→0) (1 - cos(x))/x → 0",
    "Evaluate: lim(x→0) (1 - cos(x))/x² → 1/2",
    "Evaluate: lim(x→0) sin(3x)/x → 3",
    "Evaluate: lim(x→0) sin(7x)/x → 7",
    "Evaluate: lim(x→0) sin(4x)/(2x) → 2",
    "Evaluate: lim(x→0) sin(5x)/(3x) → 5/3",
    "Evaluate: lim(x→0) tan(5x)/x → 5",
    "Evaluate: lim(x→0) tan(8x)/x → 8",
    "Evaluate: lim(x→0) tan(6x)/(3x) → 2",
    "Evaluate: lim(x→0) (1 - cos(3x))/x² → 9/2",
    "Evaluate: lim(x→0) (1 - cos(4x))/x² → 8",
    "Evaluate: lim(x→0) (1 - cos(2x))/x² → 2",
    "Evaluate: lim(x→0) sin²(x)/x² → 1",
    "Evaluate: lim(x→0) tan²(x)/x² → 1",
    "Evaluate: lim(x→0) sin(x)/tan(x) → 1",
    "Evaluate: lim(x→0) (1 - cos(x))/sin(x) → 0",
    "Use pattern: sin(kx)/(mx) → k/m",
    "Use pattern: (1 - cos(kx))/(mx²) → k²/(2m)",
    "Remember: angles must be in radians",
  ],
};

export default topic;