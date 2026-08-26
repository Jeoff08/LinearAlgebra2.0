// filename: BoundedSequences.ts

const topic = {
  id: "bounded-sequences",
  title: "Bounded Sequences",
  summary:
    "A comprehensive guide to bounded sequences in calculus. Covers definitions of bounded above, bounded below, and bounded sequences, the relationship between boundedness and convergence, and the Monotone Convergence Theorem.",
  details: `
A bounded sequence is a sequence whose terms never go beyond certain limits.

In simple terms, the values of the sequence are trapped inside a fixed range.

For example:

  1/2, 2/3, 3/4, 4/5, ...

always stays between 0 and 1. Therefore, it is a bounded sequence.

Bounded sequences are very important in Calculus 2 because of their relationship with monotonic sequences, convergence, limits, and infinite series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "BOUNDED" MEAN?

Suppose we have a sequence:

  {aₙ}.

If there is some real number M such that:

  aₙ ≤ M

for every n, then the sequence is called bounded above.

Similarly, if there is some real number m such that:

  aₙ ≥ m

for every n, then the sequence is called bounded below.

If both conditions are satisfied, the sequence is bounded.

Therefore:

  m ≤ aₙ ≤ M

for every n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BOUNDED ABOVE

A sequence is bounded above if there is a number that the sequence never exceeds.

For example:

  aₙ = 1 - 1/n.

The sequence is:

  0, 1/2, 2/3, 3/4, 4/5, ...

Every term is less than 1:

  aₙ < 1.

Therefore, 1 is an upper bound.

We can write:

  aₙ ≤ 1.

So the sequence is bounded above.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. BOUNDED BELOW

A sequence is bounded below if there is a number that the sequence never goes below.

Consider:

  aₙ = 1/n.

The sequence is:

  1, 1/2, 1/3, 1/4, ...

Every term is greater than 0:

  aₙ > 0.

Therefore, 0 is a lower bound.

We can write:

  aₙ ≥ 0.

Thus, the sequence is bounded below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BOUNDED SEQUENCE

A sequence is bounded if it has both an upper bound and a lower bound.

In mathematical notation:

  m ≤ aₙ ≤ M

for every positive integer n.

For example:

  aₙ = 1/n.

We know:

  0 < 1/n ≤ 1.

Therefore:

  0 ≤ aₙ ≤ 1.

So the sequence is bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: A SIMPLE BOUNDED SEQUENCE

Consider:

  aₙ = (-1)ⁿ.

Its terms are:

  -1, 1, -1, 1, -1, 1, ...

Every term satisfies:

  -1 ≤ aₙ ≤ 1.

Therefore:

  The sequence is bounded.

However, notice something very important:

  (-1)ⁿ

does not converge.

It keeps oscillating between -1 and 1.

This gives us an important lesson:

  Bounded does not necessarily mean convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. BOUNDED DOES NOT MEAN MONOTONIC

A bounded sequence does not necessarily have to increase or decrease consistently.

Consider:

  aₙ = (-1)ⁿ.

It is bounded because:

  -1 ≤ aₙ ≤ 1.

But it is not monotonic:

  -1, 1, -1, 1, -1, 1, ...

It repeatedly changes direction.

Therefore:

  Bounded ⇏ Monotonic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. BOUNDED DOES NOT MEAN CONVERGENT

This is one of the most important ideas.

Consider:

  aₙ = (-1)ⁿ.

It is bounded:

  -1 ≤ (-1)ⁿ ≤ 1.

But:

  lim_{n→∞} (-1)ⁿ

does not exist.

Therefore:

  A bounded sequence can still diverge.

The reason is that boundedness only tells us that the sequence stays inside a particular range. It does not tell us that the sequence approaches a single number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. BOUNDED AND MONOTONIC

Now we reach one of the most important theorems in Calculus 2.

Monotone Convergence Theorem

If a sequence is both:

  monotonic, and
  bounded,

then it must converge.

Symbolically:

  Monotonic + Bounded → Convergent

There are two important versions.

Increasing case:

If {aₙ} is increasing and bounded above, then it converges.

  aₙ₊₁ ≥ aₙ and aₙ ≤ M → aₙ converges

Decreasing case:

If {aₙ} is decreasing and bounded below, then it converges.

  aₙ₊₁ ≤ aₙ and aₙ ≥ m → aₙ converges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: INCREASING AND BOUNDED

Consider:

  aₙ = 1 - 1/n.

The sequence is:

  0, 1/2, 2/3, 3/4, 4/5, ...

It is increasing:

  0 < 1/2 < 2/3 < 3/4 < ...

It is also bounded above:

  aₙ < 1.

Therefore, by the Monotone Convergence Theorem:

  The sequence converges.

Its limit is:

  lim_{n→∞} (1 - 1/n) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: DECREASING AND BOUNDED

Consider:

  aₙ = 1 + 1/n.

The sequence is:

  2, 3/2, 4/3, 5/4, 6/5, ...

It is decreasing:

  2 > 3/2 > 4/3 > 5/4 > ...

It is bounded below by 1:

  aₙ > 1.

Therefore, it converges.

In fact:

  lim_{n→∞} (1 + 1/n) = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FINDING BOUNDS

Suppose:

  aₙ = n/(n + 1).

We want to find an upper and lower bound.

Since:

  n > 0,

we have:

  n/(n + 1) > 0.

Thus, 0 is a lower bound.

Also:

  n < n + 1.

Dividing by n + 1 > 0:

  n/(n + 1) < 1.

Therefore:

  0 < aₙ < 1.

So:

  0 < aₙ < 1.

The sequence is bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. UPPER BOUND VS. MAXIMUM

These terms are related but not identical.

Suppose:

  aₙ = 1 - 1/n.

We have:

  aₙ < 1.

Therefore, 1 is an upper bound.

But the sequence never actually reaches 1.

So 1 is not a maximum term of the sequence.

This distinction is important.

An upper bound is simply a number that is greater than or equal to every term.

It does not necessarily have to be one of the terms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. LEAST UPPER BOUND

Among all possible upper bounds, there may be a smallest one.

This is called the least upper bound, or supremum.

For example:

  aₙ = 1 - 1/n.

All terms satisfy:

  aₙ < 1.

There are many upper bounds:

  2, 3, 10, 100.

But the smallest upper bound is:

  1.

Therefore:

  sup{aₙ} = 1.

For a bounded increasing sequence, the limit is closely related to its least upper bound.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GREATEST LOWER BOUND

Similarly, a bounded sequence can have a greatest lower bound, called the infimum.

For example:

  aₙ = 1 + 1/n.

Every term is greater than 1:

  aₙ > 1.

Therefore, 1 is a lower bound.

It is also the greatest lower bound:

  inf{aₙ} = 1.

And:

  lim_{n→∞} aₙ = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A USEFUL VISUALIZATION

Think of a bounded sequence as being trapped between two horizontal barriers:

  m ≤ aₙ ≤ M.

For example:

  0 ≤ aₙ ≤ 1.

The sequence cannot go below 0 and cannot go above 1.

However, it can still jump around inside the interval.

For example:

  1, 0, 3/4, 1/4, 1/2, ...

can remain bounded without converging.

So boundedness means:

  The sequence stays inside a fixed region.

Convergence means:

  The sequence eventually settles toward one specific value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. BOUNDED SEQUENCE THAT CONVERGES

Consider:

  aₙ = 1/n.

We have:

  0 < aₙ ≤ 1.

Therefore, it is bounded.

It is also decreasing:

  1 > 1/2 > 1/3 > 1/4 > ...

Thus, it is monotonic.

By the Monotone Convergence Theorem:

  It converges.

And:

  lim_{n→∞} 1/n = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. BOUNDED SEQUENCE THAT DIVERGES

Consider:

  aₙ = (-1)ⁿ.

We have:

  -1 ≤ aₙ ≤ 1.

So it is bounded.

But:

  -1, 1, -1, 1, -1, 1, ...

does not approach a single value.

Therefore:

  It diverges.

This is a classic example that demonstrates:

  Bounded ⇏ Convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. UNBOUNDED SEQUENCE

A sequence is unbounded if there is no finite upper and/or lower limit that contains all of its terms.

Consider:

  aₙ = n.

The terms are:

  1, 2, 3, 4, 5, ...

For any proposed upper bound M, we can choose n > M.

Therefore, no finite number can serve as an upper bound.

Hence:

  The sequence is unbounded above.

And:

  lim_{n→∞} n = ∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ANOTHER UNBOUNDED EXAMPLE

Consider:

  aₙ = -n.

The sequence is:

  -1, -2, -3, -4, -5, ...

It becomes increasingly negative.

Therefore, it is unbounded below:

  No finite lower bound exists.

And:

  lim_{n→∞} (-n) = -∞.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH A SQUARE

Consider:

  aₙ = n²/(n² + 1).

Since:

  n² < n² + 1,

we have:

  0 < n²/(n² + 1) < 1.

Therefore:

  0 < aₙ < 1.

The sequence is bounded.

In fact, we can rewrite:

  aₙ = 1 - 1/(n² + 1).

Therefore:

  lim_{n→∞} aₙ = 1 - 0 = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE: BOUNDED USING ABSOLUTE VALUE

Sometimes we can prove boundedness using absolute values.

Consider:

  aₙ = sin n / n.

We know:

  -1 ≤ sin n ≤ 1.

Therefore:

  -1/n ≤ sin n / n ≤ 1/n.

Since:

  -1/n ≥ -1

and:

  1/n ≤ 1,

the sequence is bounded.

More importantly, because both bounds approach 0, the Squeeze Theorem gives:

  lim_{n→∞} sin n / n = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. BOUNDEDNESS AND THE SQUEEZE THEOREM

Bounded sequences are closely related to the Squeeze Theorem.

Suppose:

  aₙ ≤ bₙ ≤ cₙ.

If:

  lim_{n→∞} aₙ = L

and:

  lim_{n→∞} cₙ = L,

then:

  lim_{n→∞} bₙ = L.

This is especially useful when a sequence contains trigonometric expressions.

For example:

  -1/n ≤ sin n / n ≤ 1/n.

Both outer sequences approach 0, so the middle sequence must also approach 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. IMPORTANT THEOREM: EVERY CONVERGENT SEQUENCE IS BOUNDED

There is another fundamental theorem:

  Every convergent sequence is bounded.

For example:

  aₙ = 1/n

converges to 0 and is bounded.

But the converse is not true.

A bounded sequence does not necessarily converge.

Again:

  aₙ = (-1)ⁿ

is bounded but divergent.

Therefore:

  Convergent → Bounded

but:

  Bounded ⇏ Convergent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. RELATIONSHIP BETWEEN BOUNDED AND MONOTONIC SEQUENCES

This is one of the most important relationships in Calculus 2.

Situation 1:

Bounded only:

  Bounded

Not necessarily convergent.

Example:

  (-1)ⁿ.

Situation 2:

Monotonic only:

  Monotonic

Not necessarily convergent.

Example:

  aₙ = n.

Situation 3:

Bounded + Monotonic:

  Bounded + Monotonic

Then:

  Convergent.

This is the Monotone Convergence Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. QUICK CLASSIFICATION TABLE

  Sequence      Bounded?    Monotonic?    Convergent?
  ──────────────────────────────────────────────────────
  1/n           Yes         Yes           Yes
  n             No          Yes           No
  (-1)ⁿ         Yes         No            No
  1 - 1/n       Yes         Yes           Yes
  -n            No          Yes           No
  Constant 5    Yes         Yes           Yes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. KEY FORMULAS TO REMEMBER

  Bounded above:   aₙ ≤ M
  Bounded below:   aₙ ≥ m
  Bounded:         m ≤ aₙ ≤ M

  Every convergent sequence is bounded:
    Convergent → Bounded

  Bounded does not imply convergence:
    Bounded ⇏ Convergent

  Monotone Convergence Theorem:
    Bounded + Monotonic → Convergent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. SIMPLE SUMMARY

Think of boundedness as putting a sequence inside a "box."

For example:

  0 ≤ aₙ ≤ 10.

No matter how large n becomes, the terms must stay between 0 and 10.

But being trapped inside the box does not mean the sequence settles down.

For example:

  1, -1, 1, -1, 1, -1, ...

is trapped between -1 and 1, but it never settles on one number.

However, if the sequence is both bounded and monotonic, it cannot keep moving forever without approaching a limit.

Thus, the key relationship is:

  Bounded + Monotonic → Convergent

while:

  Bounded alone ⇏ Convergent.

This distinction is fundamental before moving to the next major Calculus 2 topic: Infinite Series.

Easy way to remember: A bounded sequence is trapped within a finite range. But being trapped doesn't guarantee it settles down—it might oscillate. If it's also monotonic, then it must converge.
  `,
  examples: [
    "aₙ = 1/n → bounded (0 < aₙ ≤ 1), monotonic decreasing, converges to 0",
    "aₙ = n → unbounded above, monotonic increasing, diverges to ∞",
    "aₙ = (-1)ⁿ → bounded (-1 ≤ aₙ ≤ 1), not monotonic, diverges by oscillation",
    "aₙ = 1 - 1/n → bounded (0 ≤ aₙ < 1), monotonic increasing, converges to 1",
    "aₙ = 1 + 1/n → bounded (1 < aₙ ≤ 2), monotonic decreasing, converges to 1",
    "aₙ = n²/(n² + 1) → bounded (0 < aₙ < 1), converges to 1",
    "aₙ = sin n / n → bounded, converges to 0 (Squeeze Theorem)",
    "Convergent → Bounded, but Bounded ⇏ Convergent",
    "Bounded + Monotonic → Convergent (Monotone Convergence Theorem)",
  ],
};

export default topic;