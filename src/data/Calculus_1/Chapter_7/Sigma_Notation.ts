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

Sigma notation is a concise way to represent the sum of many terms, especially when the pattern is regular and the number of terms is large. The notation consists of several key components. The symbol ∑ (Greek capital sigma) stands for "sum" and indicates that we are adding a sequence of terms. The expression below the sigma specifies the starting value of the index (often i, but any letter can be used). The expression above the sigma gives the ending value. The term to the right of the sigma is the expression that is evaluated at each integer value of the index and then added together. For example, in ∑ᵢ₌₁ⁿ f(i), the index i starts at 1 and increases by 1 each time until it reaches n. At each step, we compute f(i) and add it to the running total. The index is a dummy variable; it does not appear in the final result of the sum. Understanding each part of the notation is essential for correctly reading and writing sums. This notation is used extensively in calculus, statistics, computer science, and many other fields.

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

The symbol ∑ is the Greek capital letter sigma, which stands for "sum" in mathematics. It indicates that we are to add together all the terms that follow according to the specified pattern. When you see ∑, you should think of repeated addition. For example, ∑ᵢ₌₁⁴ i is read as "the sum of i from i equals 1 to 4." It instructs us to substitute i = 1, 2, 3, and 4 into the expression i, and then add the results: 1 + 2 + 3 + 4 = 10. The sigma symbol is a powerful shorthand that saves time and space, especially when dealing with many terms. In calculus, sigma notation is used to write Riemann sums, which approximate areas under curves. Without sigma notation, these sums would be cumbersome to write and manipulate. Learning to interpret and use the sigma symbol is a foundational skill for understanding integration and series.

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

The index of summation is the variable that takes on integer values from the lower limit to the upper limit. In the expression ∑ᵢ₌₁⁵ i, the index is i. It starts at 1 and ends at 5. The index is a placeholder; it can be any letter, such as j, k, or n. The choice of letter does not affect the value of the sum. For example, ∑ₖ₌₁⁴ k means the same as ∑ᵢ₌₁⁴ i. The index is often called a "dummy variable" because it does not appear in the final result only the sum's value matters. This is analogous to the variable of integration in a definite integral, which is also a dummy variable. Understanding the role of the index is crucial for correctly evaluating sums and for changing variables in more advanced applications. When you see a sigma expression, always identify the index, its starting and ending values, and the expression that depends on it.

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

Expanding a sigma expression means writing out the individual terms that the sum represents. To expand ∑ᵢ₌₁ⁿ f(i), we replace the index i with each integer from the lower limit to the upper limit, and then write the terms separated by plus signs. For example, ∑ᵢ₌₁⁴ i becomes 1 + 2 + 3 + 4. This expansion is useful for checking your work or for evaluating sums that do not have a closed-form formula. It also helps to visualize the pattern of the terms. In calculus, we often work with sums that have a variable number of terms (like ∑ᵢ₌₁ⁿ), where n is not a specific number. In such cases, we cannot expand completely, but we can use known summation formulas to evaluate the sum. Expanding a sigma expression is a straightforward process that builds familiarity with the notation and reinforces the concept of summation.

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

Let's evaluate a sum of squares. Consider ∑ᵢ₌₁⁴ i². The expression to be summed is i². We substitute i = 1, 2, 3, 4 and add the squares: 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30. This example shows that the expression can be any function of the index, not just the index itself. Sums of powers are common in calculus, especially when deriving formulas for Riemann sums. Understanding how to evaluate such sums is essential for computing limits of sums and for proving properties of the definite integral. The formula for the sum of squares, ∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6, is a powerful shortcut, but it is also helpful to be able to compute small sums directly.

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

Sometimes the expression being summed is more complex than a simple power. For example, ∑ᵢ₌₁³ (2i + 1) requires us to compute the value of 2i + 1 for i = 1, 2, 3 and add the results. Substituting gives 2(1)+1 = 3, 2(2)+1 = 5, and 2(3)+1 = 7. The sum is 3 + 5 + 7 = 15. This illustrates that the expression can be a linear combination of terms involving the index. In calculus, such sums often appear in the context of Riemann sums, where the expression may involve f(xᵢ) Δx. Being able to expand and evaluate such sums is a key skill. It also shows that sigma notation is flexible and can represent a wide variety of sums, from simple arithmetic sequences to more complex patterns.

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

The lower limit of summation does not have to be 1. It can be any integer. For instance, ∑ᵢ₌₃⁶ i sums the integers from 3 to 6 inclusive: 3 + 4 + 5 + 6 = 18. This flexibility is important because in many applications, we may need to sum terms starting at a value other than 1, such as when we are working with a specific range of indices. In calculus, Riemann sums often use a lower limit of i = 1 or i = 0, but other starting points can arise in different contexts. Understanding that the lower limit can vary is essential for correctly interpreting and evaluating sums. When computing sums, always pay attention to both the lower and upper limits, as they define the range of the index.

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

If the expression being summed is a constant that does not depend on the index, the sum is simply the constant multiplied by the number of terms. For example, ∑ᵢ₌₁⁵ 3 = 3 + 3 + 3 + 3 + 3 = 15. In general, ∑ᵢ₌₁ⁿ c = cn. This property is extremely useful for simplifying sums, especially when combined with other summation rules. It also demonstrates that sigma notation is consistent with ordinary multiplication: summing a constant n times is the same as multiplying the constant by n. This rule is often applied in conjunction with the constant multiple rule and the sum rule to simplify complex sums. It is a fundamental property of summation that appears frequently in calculus and statistics.

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

Sigma notation follows several important rules that allow us to manipulate sums algebraically. The constant multiple rule states that a constant factor can be pulled out of the sum: ∑ᵢ₌₁ⁿ c f(i) = c ∑ᵢ₌₁ⁿ f(i). This is because multiplying each term by a constant and then adding is the same as adding the terms first and then multiplying. The sum rule allows us to split a sum of two functions into the sum of their individual sums: ∑ᵢ₌₁ⁿ [f(i) + g(i)] = ∑ᵢ₌₁ⁿ f(i) + ∑ᵢ₌₁ⁿ g(i). Similarly, the difference rule allows us to split a difference. These properties are derived from the basic properties of addition and multiplication. They are essential for simplifying sums and for deriving formulas for Riemann sums. Understanding these properties is crucial for working with sums in calculus, especially when evaluating limits of sums to compute definite integrals.

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

There are several well-known formulas for sums of powers of integers that are frequently used in calculus. These formulas allow us to evaluate sums of the form ∑ᵢ₌₁ⁿ i, ∑ᵢ₌₁ⁿ i², and ∑ᵢ₌₁ⁿ i³ without having to expand and add each term individually. The formula for the sum of the first n natural numbers is n(n+1)/2. The formula for the sum of squares is n(n+1)(2n+1)/6. The formula for the sum of cubes is [n(n+1)/2]². These formulas are derived using mathematical induction and are essential for evaluating Riemann sums and for proving the Fundamental Theorem of Calculus. Memorizing these formulas saves time and reduces the risk of arithmetic errors. They are often used in problems involving area approximation and in the derivation of integral formulas. Understanding how to apply these formulas is a key skill in integral calculus.

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

Sigma notation is a cornerstone of calculus because it provides the language for defining the definite integral. The definite integral is defined as the limit of Riemann sums, which are expressed using sigma notation. A Riemann sum approximates the area under a curve by dividing the interval into n subintervals, computing the function value at a chosen point in each subinterval, multiplying by the width, and summing the results. This sum is written as ∑ᵢ₌₁ⁿ f(xᵢ) Δx. As n approaches infinity, this sum approaches the exact area, which is the definite integral ∫ₐᵇ f(x) dx. Thus, sigma notation is essential for understanding the definition of the integral and for computing numerical approximations. Without sigma notation, writing out Riemann sums would be impractical for large n. Mastering sigma notation is a prerequisite for studying integration and its applications. It also appears in other areas of mathematics, such as series and sequences, making it a versatile and important tool.

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

To see sigma notation in action, consider approximating the area under the curve y = x² from x = 0 to x = 2. We can divide the interval into n equal subintervals, each of width Δx = 2/n. The right endpoint of the i-th subinterval is xᵢ = iΔx. The area of the i-th rectangle is f(xᵢ) Δx = (iΔx)² Δx = i² Δx³. The total area approximation is ∑ᵢ₌₁ⁿ i² Δx³. Using the formula for the sum of squares, we can simplify this expression to Δx³ ∑ᵢ₌₁ⁿ i² = (2/n)³ [n(n+1)(2n+1)/6]. Taking the limit as n → ∞ gives the exact area 8/3. This example illustrates how sigma notation, combined with summation formulas, is used to compute areas. It shows the power of the notation and its connection to the definite integral. Understanding this process is key to grasping the definition of integration.

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

There are several common errors when working with sigma notation. One is forgetting the starting value. For example, ∑ᵢ₌₃⁵ i means 3 + 4 + 5, not 1 + 2 + 3 + 4 + 5. Another mistake is failing to substitute into the entire expression. For ∑ᵢ₌₁³ (i² + 2), you must compute (1²+2) + (2²+2) + (3²+2), not 1² + 2² + 3² + 2. Some students mistakenly think sigma is multiplication, but it is addition. The product of a sequence is denoted by ∏, not ∑. Also, when using formulas like ∑ᵢ₌₁ⁿ i = n(n+1)/2, be careful to apply the correct formula for the power. Using the wrong formula can lead to incorrect results. Being aware of these mistakes will help you use sigma notation accurately and confidently.

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

This table summarizes the key components of sigma notation. The sigma symbol indicates addition. The index is the variable that changes. The lower limit is the starting value of the index, and the upper limit is the ending value. The expression following the sigma is the term to be summed. The general form ∑ᵢ₌ₐᵇ f(i) means evaluate f(i) for each integer i from a to b, and add the results. Understanding these components is essential for reading and writing sigma notation correctly. This summary serves as a quick reference for students learning the notation.

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

Sigma notation is a compact and powerful way to represent repeated addition. It is used extensively in calculus, especially in the definition of the definite integral as a limit of Riemann sums. Understanding sigma notation allows you to write long sums concisely, manipulate sums algebraically, and evaluate sums using known formulas. It is a foundational skill for studying integration, series, and many other topics in mathematics. The key is to recognize that sigma notation is just a shorthand for adding a sequence of terms according to a pattern. With practice, it becomes a natural and intuitive tool.

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