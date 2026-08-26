// filename: MonotonicSequences.ts

const topic = {
  id: "monotonic-sequences",
  title: "Monotonic Sequences",
  summary:
    "A comprehensive guide to monotonic sequences in calculus. Covers definitions of increasing, decreasing, nondecreasing, and nonincreasing sequences, the Monotone Convergence Theorem, and methods for determining monotonicity.",
  details: `
A monotonic sequence is a sequence whose terms consistently move in one direction as n increases.

In other words, the sequence either:

  keeps increasing,
  keeps decreasing,
  stays the same, or
  increases/decreases without reversing direction.

Monotonic sequences are especially important in Calculus 2 because they are closely connected to boundedness, convergence, and the Monotone Convergence Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA

Consider the sequence:

  1, 2, 3, 4, 5, 6, ...

Every term is greater than the term before it:

  2 > 1, 3 > 2, 4 > 3.

Therefore, the sequence is increasing.

Now consider:

  10, 8, 6, 4, 2, ...

Every term is smaller than the previous term:

  8 < 10, 6 < 8, 4 < 6.

Therefore, the sequence is decreasing.

The important idea is that the sequence does not change direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INCREASING SEQUENCE

A sequence {aₙ} is called increasing if:

  aₙ₊₁ > aₙ

for every n.

This means that every new term is greater than the previous term.

Example:

  2, 4, 6, 8, 10, ...

Here:

  a₁ = 2
  a₂ = 4
  a₃ = 6

and:

  aₙ₊₁ > aₙ.

Therefore, the sequence is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. NONDECREASING SEQUENCE

Sometimes consecutive terms can be equal.

A sequence is nondecreasing if:

  aₙ₊₁ ≥ aₙ.

The symbol ≥ means "greater than or equal to."

For example:

  1, 2, 2, 3, 4, 4, 5, ...

is nondecreasing because the terms never decrease.

Notice that:

  2 = 2

and:

  4 = 4.

Equality is allowed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DECREASING SEQUENCE

A sequence is decreasing if:

  aₙ₊₁ < aₙ.

Every term is smaller than the previous term.

Example:

  20, 15, 10, 5, 0, -5, ...

We have:

  15 < 20
  10 < 15
  5 < 10.

Therefore, the sequence is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. NONINCREASING SEQUENCE

A sequence is nonincreasing if:

  aₙ₊₁ ≤ aₙ.

This means the terms can decrease or remain equal, but they cannot increase.

For example:

  10, 8, 8, 6, 4, 4, 2, ...

is nonincreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STRICT VS. NON-STRICT MONOTONICITY

This distinction is important.

  Strictly increasing:    aₙ₊₁ > aₙ
  Nondecreasing:          aₙ₊₁ ≥ aₙ
  Strictly decreasing:    aₙ₊₁ < aₙ
  Nonincreasing:          aₙ₊₁ ≤ aₙ

The word strictly means equality is not allowed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHAT DOES "MONOTONIC" MEAN?

In many calculus textbooks, the word monotonic is used to describe a sequence that is either:

  aₙ₊₁ ≥ aₙ

for all n, or:

  aₙ₊₁ ≤ aₙ

for all n.

Thus, a monotonic sequence consistently moves in one direction.

A sequence such as:

  1, 2, 3, 2, 4, 5, ...

is not monotonic because it increases and then decreases:

  3 → 2.

It changes direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. HOW TO DETERMINE WHETHER A SEQUENCE IS INCREASING OR DECREASING

One of the easiest methods is to compare consecutive terms.

Given:

  aₙ,

calculate:

  aₙ₊₁ - aₙ.

Then examine the sign.

If:
  aₙ₊₁ - aₙ > 0,

the sequence is increasing.

If:
  aₙ₊₁ - aₙ < 0,

the sequence is decreasing.

If:
  aₙ₊₁ - aₙ = 0,

the terms are constant.

This is one of the most useful tests for monotonic sequences.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: USING aₙ₊₁ - aₙ

Determine whether:

  aₙ = 3n + 2

is increasing or decreasing.

First find aₙ₊₁:

  aₙ₊₁ = 3(n + 1) + 2.

Simplify:

  aₙ₊₁ = 3n + 5.

Now calculate:

  aₙ₊₁ - aₙ = (3n + 5) - (3n + 2).

Therefore:

  aₙ₊₁ - aₙ = 3.

Since:

  3 > 0,

we conclude:

  The sequence is strictly increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: DECREASING SEQUENCE

Consider:

  aₙ = 1/n.

Calculate:

  aₙ₊₁ = 1/(n + 1).

Then:

  aₙ₊₁ - aₙ = 1/(n + 1) - 1/n.

Using a common denominator:

  = (n - (n + 1))/(n(n + 1)).

Therefore:

  = -1/(n(n + 1)).

Since n > 0:

  -1/(n(n + 1)) < 0.

Therefore:

  1/n is strictly decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. USING THE RATIO TEST FOR POSITIVE SEQUENCES

For sequences whose terms are positive, we can sometimes compare:

  aₙ₊₁ / aₙ.

If:

  aₙ₊₁ / aₙ > 1,

then the sequence is increasing.

If:

  aₙ₊₁ / aₙ < 1,

then the sequence is decreasing.

For example:

  aₙ = 2ⁿ.

Then:

  aₙ₊₁ / aₙ = 2ⁿ⁺¹ / 2ⁿ = 2.

Since:

  2 > 1,

the sequence is increasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH A FRACTION

Consider:

  aₙ = n/(n + 1).

Let's determine whether it is increasing or decreasing.

Calculate:

  aₙ₊₁ = (n + 1)/(n + 2).

Now compare:

  aₙ₊₁ - aₙ = (n + 1)/(n + 2) - n/(n + 1).

Use a common denominator:

  = ((n + 1)² - n(n + 2))/((n + 1)(n + 2)).

Expand:

  = (n² + 2n + 1 - (n² + 2n))/((n + 1)(n + 2)).

Thus:

  = 1/((n + 1)(n + 2)).

Since this is positive:

  aₙ₊₁ - aₙ > 0.

Therefore:

  n/(n + 1) is strictly increasing.

Interestingly, it increases toward 1:

  1/2, 2/3, 3/4, 4/5, ...

and:

  lim_{n→∞} n/(n + 1) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. MONOTONIC DOES NOT AUTOMATICALLY MEAN CONVERGENT

This is a very important point.

A monotonic sequence does not necessarily converge.

Consider:

  aₙ = n.

The sequence is increasing:

  1, 2, 3, 4, 5, ...

But it does not approach a finite number.

Instead:

  lim_{n→∞} n = ∞.

Therefore:

  Monotonic alone does not guarantee convergence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. BOUNDEDNESS IS THE MISSING CONDITION

The key theorem is:

Monotone Convergence Theorem

  Every bounded monotonic sequence converges.

This can be written as:

  Monotonic + Bounded → Convergent

For example:

  aₙ = 1 - 1/n.

The terms are:

  0, 1/2, 2/3, 3/4, 4/5, ...

The sequence is increasing.

It is also bounded above by 1:

  aₙ < 1.

Therefore, it must converge.

In fact:

  lim_{n→∞} (1 - 1/n) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INCREASING AND BOUNDED ABOVE

Suppose a sequence satisfies:

  aₙ₊₁ ≥ aₙ

and there exists some number M such that:

  aₙ ≤ M.

Then the sequence is:

  increasing,
  bounded above,
  convergent.

For example:

  aₙ = 2 - 1/n.

The terms are:

  1, 3/2, 5/3, 7/4, ...

They keep increasing but never reach 2.

Thus:

  aₙ < 2.

The sequence is bounded above by 2.

Therefore:

  lim_{n→∞} aₙ = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DECREASING AND BOUNDED BELOW

Similarly, if:

  aₙ₊₁ ≤ aₙ

and:

  aₙ ≥ m

for some number m, then the sequence converges.

For example:

  aₙ = 1 + 1/n.

The sequence is:

  2, 3/2, 4/3, 5/4, ...

It is decreasing:

  2 > 3/2 > 4/3 > 5/4 > ...

but it is bounded below by 1:

  aₙ > 1.

Therefore:

  lim_{n→∞} aₙ = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. GRAPHICAL INTERPRETATION

A sequence can be represented by plotting the points:

  (n, aₙ).

For example, for:

  aₙ = 1/n,

we plot:

  (1, 1), (2, 1/2), (3, 1/3), (4, 1/4), ...

The points move downward as n increases.

For an increasing sequence, the plotted points move upward.

The important difference from an ordinary function is that a sequence is defined only at integer values:

  n = 1, 2, 3, 4, ...

rather than every real number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: IS THIS SEQUENCE MONOTONIC?

Consider:

  aₙ = (-1)ⁿ.

The sequence is:

  -1, 1, -1, 1, -1, 1, ...

Compare consecutive terms:

  -1 → 1

which is increasing, but then:

  1 → -1

which is decreasing.

Therefore, the sequence changes direction repeatedly.

So:

  The sequence is not monotonic.

It also does not converge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE: CONSTANT SEQUENCE

Consider:

  aₙ = 5.

The sequence is:

  5, 5, 5, 5, 5, ...

We have:

  aₙ₊₁ = aₙ.

Therefore, it is both:

  nondecreasing

and:

  nonincreasing.

It is also convergent:

  lim_{n→∞} aₙ = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. USING CALCULUS TO DETERMINE MONOTONICITY

Sometimes a sequence has a complicated formula, and comparing aₙ₊₁ and aₙ can be difficult.

We can define a related function:

  f(x) = aₓ

and examine its derivative.

If:

  f'(x) > 0

over the relevant interval, then f(x) is increasing, which can help establish that:

  aₙ

is increasing.

If:

  f'(x) < 0,

then the sequence is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE USING A DERIVATIVE

Consider:

  aₙ = n/(n² + 1).

Define:

  f(x) = x/(x² + 1).

Differentiate using the quotient rule:

  f'(x) = ((x² + 1) - x(2x))/(x² + 1)².

Simplify:

  f'(x) = (1 - x²)/(x² + 1)².

For x > 1:

  1 - x² < 0.

Therefore:

  f'(x) < 0.

Thus, for n > 1, the sequence is decreasing.

So:

  aₙ = n/(n² + 1) is decreasing for n ≥ 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EVENTUALLY MONOTONIC

A sequence does not necessarily have to be monotonic from the very first term.

It may become monotonic after some point.

This is called eventual monotonicity.

For example, consider:

  aₙ = n/(n² + 1).

The first terms are:

  1/2, 2/5, 3/10, 4/17, ...

After the appropriate starting point, the terms consistently decrease.

This is often enough for convergence tests involving sequences and series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. WHY MONOTONIC SEQUENCES MATTER IN CALCULUS 2

Monotonic sequences are important because they help us determine whether a sequence converges.

The central theorem is:

  Increasing + Bounded Above → Convergent

and:

  Decreasing + Bounded Below → Convergent

This becomes especially useful when studying:

  limits of sequences,
  infinite series,
  recursive sequences,
  convergence tests,
  power series,
  numerical approximation,
  iterative algorithms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. QUICK COMPARISON TABLE

  Type                     Condition
  ──────────────────────────────────────
  Strictly increasing      aₙ₊₁ > aₙ
  Nondecreasing            aₙ₊₁ ≥ aₙ
  Strictly decreasing      aₙ₊₁ < aₙ
  Nonincreasing            aₙ₊₁ ≤ aₙ
  Constant                 aₙ₊₁ = aₙ
  Monotonic                Consistently increasing or decreasing
  Bounded above            aₙ ≤ M
  Bounded below            aₙ ≥ m

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. KEY FORMULAS TO REMEMBER

  Increasing:       aₙ₊₁ > aₙ
  Nondecreasing:    aₙ₊₁ ≥ aₙ
  Decreasing:       aₙ₊₁ < aₙ
  Nonincreasing:    aₙ₊₁ ≤ aₙ

  Monotone Convergence Theorem:
    Bounded + Monotonic → Convergent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. IMPORTANT EXAMPLES TO REMEMBER

Example 1:

  aₙ = n

Increasing, but unbounded.

Therefore:

  Diverges

Example 2:

  aₙ = 1/n

Decreasing and bounded below by 0.

Therefore:

  Converges to 0

Example 3:

  aₙ = 1 - 1/n

Increasing and bounded above by 1.

Therefore:

  Converges to 1

Example 4:

  aₙ = (-1)ⁿ

Not monotonic and not convergent.

Therefore:

  Diverges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. THE BIG PICTURE

When you encounter a sequence in Calculus 2, a useful thought process is:

  Step 1: Determine whether it is increasing or decreasing
    ↓
  Step 2: Determine whether it is bounded
    ↓
  Step 3: Apply the Monotone Convergence Theorem if appropriate
    ↓
  Step 4: Find its limit

The most important relationship to memorize is:

  Bounded Monotonic Sequence → Convergent Sequence

but monotonic by itself is not enough.

For example:

  1, 2, 3, 4, 5, ...

is monotonic but diverges, while:

  1, 1/2, 1/3, 1/4, ...

is monotonic and bounded, so it converges.

That distinction is one of the fundamental ideas you should understand before moving into infinite series and convergence tests.

Easy way to remember: A monotonic sequence moves consistently in one direction. If it's also bounded, it must converge (Monotone Convergence Theorem). But monotonic alone doesn't guarantee convergence.
  `,
  examples: [
    "aₙ = 3n + 2 → strictly increasing (aₙ₊₁ - aₙ = 3 > 0)",
    "aₙ = 1/n → strictly decreasing (aₙ₊₁ - aₙ < 0)",
    "aₙ = n/(n + 1) → strictly increasing, converges to 1",
    "aₙ = n → increasing but unbounded, diverges to ∞",
    "aₙ = 1 - 1/n → increasing, bounded above by 1, converges to 1",
    "aₙ = 1 + 1/n → decreasing, bounded below by 1, converges to 1",
    "aₙ = (-1)ⁿ → not monotonic, diverges by oscillation",
    "aₙ = 5 → constant, both nondecreasing and nonincreasing, converges to 5",
    "Monotone Convergence Theorem: Bounded + Monotonic → Convergent",
  ],
};

export default topic;