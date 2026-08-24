// filename: sigma-notation.ts

const topic = {
  id: "sigma-notation",
  title: "Sigma Notation (Summation Notation)",
  summary:
    "A compact mathematical way of writing the sum of a sequence of numbers or expressions using the Greek capital letter Σ, with applications in Riemann sums and definite integrals.",
  details: `
Sigma notation, also called summation notation, is a compact mathematical way of writing the sum of a sequence of numbers or expressions.

It uses the Greek capital letter:
  Σ
or:
  ∑

Instead of writing a long addition such as:
  1 + 2 + 3 + 4 + 5

we can write:
  ∑ᵢ₌₁⁵ i

Both mean exactly the same thing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PARTS OF SIGMA NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A typical sigma expression looks like:
  ∑ᵢ₌₁ⁿ f(i)

Let's understand each part:

  • Summation symbol: ∑
  • Starting value: i = 1
  • Ending value: n
  • Expression being added: f(i)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE SIGMA SYMBOL ∑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The symbol ∑ means "add together."

For example:
  ∑ᵢ₌₁⁴ i

means:
  Start with i = 1, substitute the values up to i = 4, and add all the results.

So:
  1 + 2 + 3 + 4 = 10

Therefore:
  ∑ᵢ₌₁⁴ i = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNDERSTANDING THE INDEX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The letter below the sigma is called the index of summation.

For example:
  ∑ᵢ₌₁⁵ i

The letter i is the index.

It starts at:
  i = 1

and continues until:
  i = 5

The letter does not have to be i. We can also use:
  j, k, n, r

For example:
  ∑ₖ₌₁⁴ k

means the same as:
  ∑ᵢ₌₁⁴ i

The letter is simply a counter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. HOW TO EXPAND SIGMA NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∑ᵢ₌₁⁴ i

Step 1: Start with i = 1
  1

Step 2: Continue increasing i
  1 + 2 + 3 + 4

Step 3: Add
  1 + 2 + 3 + 4 = 10

Therefore:
  ∑ᵢ₌₁⁴ i = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: SUMMING SQUARES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∑ᵢ₌₁⁴ i²

Substitute the values 1, 2, 3, 4:
  1² + 2² + 3² + 4²

Calculate:
  1 + 4 + 9 + 16 = 30

Therefore:
  ∑ᵢ₌₁⁴ i² = 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2: SUMMING AN EXPRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∑ᵢ₌₁³ (2i + 1)

Substitute each value.

When i = 1:
  2(1) + 1 = 3

When i = 2:
  2(2) + 1 = 5

When i = 3:
  2(3) + 1 = 7

Now add:
  3 + 5 + 7 = 15

Therefore:
  ∑ᵢ₌₁³ (2i + 1) = 15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE 3: STARTING AT A DIFFERENT NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The summation does not always start at 1.

Consider:
  ∑ᵢ₌₃⁶ i

This means:
  3 + 4 + 5 + 6

Adding:
  3 + 4 + 5 + 6 = 18

Therefore:
  ∑ᵢ₌₃⁶ i = 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 4: USING A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∑ᵢ₌₁⁵ 3

The value 3 does not depend on i.

So we simply add 3 five times:
  3 + 3 + 3 + 3 + 3 = 15

Therefore:
  ∑ᵢ₌₁⁵ 3 = 15

A useful shortcut is:
  ∑ᵢ₌₁ⁿ c = cn

where c is a constant.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT SIGMA PROPERTIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sigma notation follows several important rules.

1. Constant Multiple Rule:
  ∑ᵢ₌₁ⁿ c f(i) = c ∑ᵢ₌₁ⁿ f(i)

Example:
  ∑ᵢ₌₁⁴ 3i

We can take the 3 outside:
  3∑ᵢ₌₁⁴ i

Since:
  1 + 2 + 3 + 4 = 10

Then:
  3(10) = 30

Therefore:
  ∑ᵢ₌₁⁴ 3i = 30

2. Sum Rule:
  ∑ᵢ₌₁ⁿ [f(i) + g(i)] = ∑ᵢ₌₁ⁿ f(i) + ∑ᵢ₌₁ⁿ g(i)

Example:
  ∑ᵢ₌₁³ (i + 2)

We can separate it:
  ∑ᵢ₌₁³ i + ∑ᵢ₌₁³ 2

Calculate:
  (1 + 2 + 3) + (2 + 2 + 2) = 6 + 6 = 12

Therefore:
  12

3. Difference Rule:
  ∑ᵢ₌₁ⁿ [f(i) - g(i)] = ∑ᵢ₌₁ⁿ f(i) - ∑ᵢ₌₁ⁿ g(i)

Example:
  ∑ᵢ₌₁³ (i - 1)

Expand:
  (1 - 1) + (2 - 1) + (3 - 1) = 0 + 1 + 2 = 3

Therefore:
  3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPORTANT SUMMATION FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These formulas are especially useful in Calculus.

Sum of the First n Natural Numbers:
  ∑ᵢ₌₁ⁿ i = n(n+1)/2

Example:
  ∑ᵢ₌₁¹⁰ i

Using the formula:
  10(10+1)/2 = 110/2 = 55

Sum of Squares:
  ∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6

Example:
  ∑ᵢ₌₁³ i² = 3(4)(7)/6 = 84/6 = 14

Check:
  1² + 2² + 3² = 1 + 4 + 9 = 14

Sum of Cubes:
  ∑ᵢ₌₁ⁿ i³ = [n(n+1)/2]²

Example:
  ∑ᵢ₌₁³ i³ = [3(4)/2]² = 6² = 36

Check:
  1³ + 2³ + 3³ = 1 + 8 + 27 = 36

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY SIGMA NOTATION IS IMPORTANT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sigma notation becomes extremely important when studying integration.

Before the definite integral was developed, mathematicians approximated areas by dividing a region into many small rectangles and adding their areas.

For example:
  Total Area ≈ ∑ᵢ₌₁ⁿ f(xᵢ) Δx

This is called a Riemann Sum.

As the number of rectangles becomes extremely large, the approximation becomes exact:
  ∫ₐᵇ f(x) dx = lim(n→∞) ∑ᵢ₌₁ⁿ f(xᵢ) Δx

This shows the connection:
  Sigma Notation → Riemann Sums → Definite Integrals

So, understanding sigma notation is essential for learning integration and Calculus 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE RELATED TO AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to approximate the area under:
  f(x) = x²

Sigma notation can represent the sum of many small rectangle areas:
  ∑ᵢ₌₁ⁿ f(xᵢ) Δx

Each term represents:
  Height × Width

or:
  f(xᵢ) Δx

Adding all the small rectangles gives an approximation of the total area.

The more rectangles we use (n → ∞), the more accurate the approximation becomes.

Eventually, this leads to:
  ∫ₐᵇ x² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Starting Value
  ∑ᵢ₌₃⁵ i

does not mean:
  1 + 2 + 3 + 4 + 5

It means:
  3 + 4 + 5

Mistake 2: Forgetting to Substitute Into the Entire Expression
  For ∑ᵢ₌₁³ (i² + 2), you must substitute into the entire expression:
    (1² + 2) + (2² + 2) + (3² + 2)

Not:
  1² + 2² + 3² + 2

Mistake 3: Thinking Sigma Is Multiplication
  The symbol ∑ means addition, not multiplication.

  For multiplication of many terms, mathematics uses ∏.

  For example:
    ∏ᵢ₌₁⁴ i = 1(2)(3)(4) = 24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Part            Meaning
  ───────────────────────────────────────────────────────────────
  ∑               Add the terms together
  i               Index or counting variable
  Lower limit     Where the summation starts
  Upper limit     Where the summation ends
  f(i)            Expression being evaluated and added

General Form:
  ∑ᵢ₌ₐᵇ f(i)

This means:
  • Start at i = a
  • Substitute i into f(i)
  • Increase i by 1 each time
  • Stop when i = b
  • Add all the resulting terms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sigma notation is simply a short and powerful way to write repeated addition.

It is especially important in Calculus because it forms the foundation for Riemann sums, area approximation, and definite integrals.
  `,
  examples: [
    "∑ᵢ₌₁⁴ i = 1 + 2 + 3 + 4 = 10",
    "∑ᵢ₌₁⁴ i² = 1² + 2² + 3² + 4² = 30",
    "∑ᵢ₌₁³ (2i + 1) = 3 + 5 + 7 = 15",
    "∑ᵢ₌₃⁶ i = 3 + 4 + 5 + 6 = 18",
    "∑ᵢ₌₁⁵ 3 = 3 + 3 + 3 + 3 + 3 = 15",
    "∑ᵢ₌₁ⁿ i = n(n+1)/2",
    "∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6",
  ],
};

export default topic;