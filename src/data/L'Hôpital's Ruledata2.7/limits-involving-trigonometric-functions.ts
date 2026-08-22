// filename: limits-involving-trigonometric-functions.ts

const topic = {
  id: "limits-involving-trigonometric-functions",
  title: "Limits Involving Trigonometric Functions",
  summary:
    "Evaluating limits containing sin x, cos x, tan x, cot x, sec x, and csc x, including the fundamental limits sin(x)/x → 1 and (1-cos(x))/x² → 1/2 as x → 0.",
  details: `
Limits involving trigonometric functions study what happens to expressions containing:
  sin x, cos x, tan x, cot x, sec x, csc x

as x approaches a particular value or becomes infinitely large.

These limits are extremely important in calculus because they form the foundation for derivatives of trigonometric functions, L'Hôpital's Rule, and many applications involving periodic motion and waves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE SIX BASIC TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The main trigonometric functions are:
  sin x
  cos x
  tan x = sin x / cos x
  cot x = cos x / sin x
  sec x = 1 / cos x
  csc x = 1 / sin x

When evaluating trigonometric limits, it is often helpful to rewrite the functions using:
  tan x = sin x / cos x
and:
  sec x = 1 / cos x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many trigonometric limits can be evaluated simply by substituting the approaching value.

For example:
  lim(x→0) cos x
Substitute:
  cos 0 = 1
Therefore:
  1

Another example:
  lim(x→π/2) sin x
Substitute:
  sin(π/2) = 1
Therefore:
  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST IMPORTANT TRIGONOMETRIC LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important limits in all of calculus is:
  lim(x→0) sin x / x = 1

This limit is fundamental to the derivative of the sine function.

It is important to remember that x must be measured in radians.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY RADIANS MATTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The standard limit:
  lim(x→0) sin x / x = 1

is true when x is measured in radians.

If angles are measured in degrees, the result is different.

Therefore, in calculus:
  Use radians for trigonometric limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: sin(3x)/x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) sin(3x)/x

We want to create the standard form:
  sin u / u

Rewrite:
  sin(3x)/x = 3 · sin(3x)/(3x)

Therefore:
  3 · lim(x→0) sin(3x)/(3x)

Using:
  lim(u→0) sin u / u = 1

we get:
  3(1)

Thus:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. GENERAL SINE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful formula is:
  lim(x→0) sin(ax) / (bx) = a/b

provided a and b are constants and b ≠ 0.

Example:
  Evaluate: lim(x→0) sin(5x)/(2x)

Rewrite:
  (5/2) · sin(5x)/(5x)

Therefore:
  (5/2)(1)

So:
  5/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANT COSINE LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another fundamental limit is:
  lim(x→0) (1 - cos x) / x² = 1/2

This is extremely useful.

It can be derived using the identity:
  1 - cos x = 2 sin²(x/2)

Therefore:
  (1 - cos x) / x² = 2 sin²(x/2) / x²

Rewrite:
  = (1/2) · (sin(x/2)/(x/2))²

As x → 0:
  sin(x/2)/(x/2) → 1

Therefore:
  1/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: (1 - cos(2x))/x²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (1 - cos(2x))/x²

Use:
  1 - cos(2x) = 2 sin²(x)

Therefore:
  (1 - cos(2x))/x² = 2 sin²(x)/x²

Rewrite:
  2(sin x / x)²

Taking the limit:
  2(1)²

Thus:
  2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT TANGENT LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0) tan x / x

Since:
  tan x = sin x / cos x

we have:
  tan x / x = sin x / (x cos x)

Rewrite:
  = (sin x / x) · (1 / cos x)

Take the limit:
  (1) · (1/1)

Therefore:
  lim(x→0) tan x / x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. GENERAL TANGENT LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful general formula is:
  lim(x→0) tan(ax) / (bx) = a/b

Example:
  Evaluate: lim(x→0) tan(4x)/(3x)

Rewrite:
  (4/3) · tan(4x)/(4x)

Since:
  lim(x→0) tan(4x)/(4x) = 1

we get:
  4/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SINE AND TANGENT ARE SIMILAR NEAR ZERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As x → 0:
  sin x ≈ x
and:
  tan x ≈ x

Therefore:
  lim(x→0) sin x / x = 1
and:
  lim(x→0) tan x / x = 1

This is why many trigonometric limits can be simplified by transforming them into these standard forms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SQUEEZE THEOREM AND sin x / x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The limit:
  lim(x→0) sin x / x = 1

can be established using the Squeeze Theorem.

For 0 < x < π/2:
  sin x < x < tan x

Dividing appropriately gives:
  cos x < sin x / x < 1

As x → 0:
  cos x → 1

Thus:
  1 ≤ sin x / x ≤ 1

in the limiting sense, giving:
  lim(x→0) sin x / x = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (cos x - 1)/x

Direct substitution gives:
  (1 - 1)/0 = 0/0

We could use L'Hôpital's Rule:
  d/dx (cos x - 1) = -sin x
and:
  d/dx (x) = 1

Therefore:
  lim(x→0) -sin x

Since:
  sin 0 = 0

the answer is:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) (sec x - 1)/x

Rewrite:
  sec x - 1 = 1/cos x - 1

Combine:
  = (1 - cos x)/cos x

Therefore:
  (sec x - 1)/x = (1 - cos x)/(x cos x)

As x → 0, we know:
  1 - cos x ~ x²/2

Therefore the expression behaves like:
  (x²/2)/(x) = x/2

Thus:
  0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE WITH COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  lim(x→0) x csc x

Since:
  csc x = 1/sin x

we have:
  x csc x = x / sin x

Therefore:
  lim(x→0) x / sin x = 1 / lim(x→0) sin x / x

Thus:
  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. LIMITS NEAR OTHER POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not all trigonometric limits involve x → 0.

For example:
  lim(x→π) sin x

Direct substitution:
  sin π = 0

Therefore:
  0

Another:
  lim(x→π) cos x = cos π = -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. LIMITS NEAR VERTICAL ASYMPTOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some trigonometric functions become unbounded near certain values.

For example:
  tan x = sin x / cos x

At x = π/2, we have:
  cos(π/2) = 0

Therefore, tan x has a vertical asymptote there.

For example:
  lim(x→π/2⁻) tan x = ∞
while:
  lim(x→π/2⁺) tan x = -∞

Since the one-sided limits disagree:
  lim(x→π/2) tan x does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. LIMITS AT INFINITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric functions are periodic.

For example:
  sin x

continues oscillating between:
  -1 ≤ sin x ≤ 1

Therefore:
  lim(x→∞) sin x

does not exist.

It never settles on one value.

Similarly:
  lim(x→∞) cos x does not exist

because cosine continually oscillates between -1 and 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. BUT WHAT ABOUT sin x / x?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Although:
  sin x

does not have a limit as x → ∞, consider:
  lim(x→∞) sin x / x

Because:
  -1 ≤ sin x ≤ 1

we have:
  -1/x ≤ sin x / x ≤ 1/x

As x → ∞, both outer functions approach 0.

Therefore, by the Squeeze Theorem:
  lim(x→∞) sin x / x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPORTANT TRIGONOMETRIC LIMITS TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are some of the most useful:

  lim(x→0) sin x / x = 1
  lim(x→0) tan x / x = 1
  lim(x→0) (1 - cos x) / x² = 1/2
  lim(x→0) sin(ax) / x = a
  lim(x→0) tan(ax) / x = a
  lim(x→0) sin(ax) / sin(bx) = a/b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE: SINE OVER SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) sin(3x) / sin(5x)

Rewrite:
  sin(3x)/sin(5x) = [sin(3x)/(3x)] · [5x/sin(5x)] · [3/5]

Taking the limit:
  (1)(1)(3/5)

Therefore:
  3/5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: TANGENT OVER SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  lim(x→0) tan x / sin x

Using:
  tan x = sin x / cos x

we get:
  tan x / sin x = 1 / cos x

Therefore:
  lim(x→0) 1 / cos x = 1/1

Thus:
  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting radians
  The standard limits:
    sin x / x → 1
  and:
    tan x / x → 1
  require radians.

Mistake 2: Assuming sin x → 0 as x → ∞
  This is false.
  sin x continues oscillating between -1 and 1.
  Therefore:
    lim(x→∞) sin x does not exist

Mistake 3: Treating 0/0 as zero
  For example:
    lim(x→0) sin x / x
  produces 0/0.
  That does not mean the answer is 0.
  The actual answer is 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Limit                                Result
  ────────────────────────────────────────────────────
  lim(x→0) sin x / x                   1
  lim(x→0) tan x / x                   1
  lim(x→0) (1 - cos x) / x²            1/2
  lim(x→0) sin(ax) / x                 a
  lim(x→0) tan(ax) / x                 a
  lim(x→0) sin(ax) / sin(bx)           a/b
  lim(x→∞) sin x                       DNE
  lim(x→∞) cos x                       DNE
  lim(x→∞) sin x / x                   0
  lim(x→0) x csc x                     1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. KEY TAKEAWAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important trigonometric limits to remember are:

  lim(x→0) sin x / x = 1
  lim(x→0) tan x / x = 1
and:
  lim(x→0) (1 - cos x) / x² = 1/2

These three forms can solve a large number of trigonometric limit problems.

Also remember:
  Trigonometric limits in calculus use radians.

And while sin x and cos x themselves have no limit as x → ∞, expressions such as:
  sin x / x

can still have a limit because the denominator grows without bound.
  `,
  examples: [
    "lim(x→0) sin x / x = 1",
    "lim(x→0) sin(3x)/x → rewrite as 3·sin(3x)/(3x) → 3",
    "lim(x→0) (1 - cos x)/x² = 1/2",
    "lim(x→0) (1 - cos(2x))/x² → use identity → 2",
    "lim(x→0) tan x / x = 1",
    "lim(x→0) sin(3x)/sin(5x) → rewrite → 3/5",
    "lim(x→∞) sin x / x → Squeeze Theorem → 0",
  ],
};

export default topic;