const topic = {
  id: "intermediate-value-theorem",
  title: "Intermediate Value Theorem (IVT)",
  summary:
    "Statement of the IVT, conditions, proving roots exist, sign changes, and applications.",
  details: `
The Intermediate Value Theorem (IVT) is an important theorem in Calculus that describes what happens to a continuous function between two points.

The main idea is: If a function is continuous between two points, it must pass through every value between the function values at those points.

In simple terms, a continuous graph cannot skip a value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. STATEMENT OF THE INTERMEDIATE VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) is continuous on the closed interval: [a, b]

If N is any number between f(a) and f(b), then there is at least one number c in the interval (a, b) such that:

  f(c) = N

Mathematically:

  f is continuous on [a, b] and N lies between f(a) and f(b)

then:

  ∃ c ∈ (a, b) such that f(c) = N

The symbol ∃ means "there exists."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine walking along a continuous road.

If you start at an elevation of 100 meters and finish at 500 meters, you must pass through:
  • 200 meters
  • 300 meters
  • 400 meters

You cannot go from 100 meters directly to 500 meters without passing through the values in between, assuming the path is continuous.

This is exactly what the Intermediate Value Theorem tells us about functions.

Graphically: If f(a) = 2 and f(b) = 8, then the function must take every value between 2 and 8 somewhere between a and b.

For example:
  • f(c) = 3
  • f(c) = 5
  • f(c) = 7

for some values of c between a and b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CONDITIONS OF THE IVT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two important requirements.

Condition 1: The function must be continuous
  The function must be continuous on [a, b].
  That means there cannot be a hole, jump, or vertical asymptote within the interval.

Condition 2: The target value must be between f(a) and f(b)
  Suppose f(a) = 2 and f(b) = 10.
  Then any value N satisfying 2 < N < 10 is guaranteed to occur somewhere between a and b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE OF THE IVT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² on the interval [1, 3]

First, check continuity. Since x² is a polynomial, it is continuous everywhere.

Therefore, it is continuous on [1, 3].

Now calculate the endpoint values:
  f(1) = 1² = 1
  f(3) = 3² = 9

Therefore, f(x) takes every value between 1 and 9 somewhere between x = 1 and x = 3.

For example, does the function take the value 5?

Set: N = 5

The IVT tells us that there must be some c ∈ (1, 3) such that f(c) = 5.

Indeed: c² = 5, so c = √5 ≈ 2.236, which is inside the interval (1, 3).

Therefore: There exists c ∈ (1, 3) such that f(c) = 5.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. USING IVT TO PROVE A ROOT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important applications of the Intermediate Value Theorem is proving that an equation has at least one solution.

Suppose we want to show that: x³ + x - 1 = 0 has a solution between 0 and 1.

Define: f(x) = x³ + x - 1

Step 1: Check continuity
  f(x) is a polynomial, so it is continuous everywhere.
  Therefore, it is continuous on [0, 1].

Step 2: Evaluate the endpoints
  At x = 0: f(0) = 0³ + 0 - 1 = -1
  At x = 1: f(1) = 1³ + 1 - 1 = 1

So: f(0) = -1 and f(1) = 1

The function changes from negative to positive.

Step 3: Apply IVT
  Since 0 lies between -1 and 1, the Intermediate Value Theorem guarantees that there is some c ∈ (0, 1) such that f(c) = 0.

Therefore: x³ + x - 1 = 0 has at least one solution in (0, 1).

Notice that we did not need to find the exact solution. The IVT allowed us to prove that a solution exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. IVT AND SIGN CHANGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A particularly useful version of the theorem is:

If f is continuous on [a, b] and f(a) < 0 while f(b) > 0, then there must be some c ∈ (a, b) where f(c) = 0.

Similarly, if f(a) > 0 and f(b) < 0, there must also be a point where f(c) = 0.

This means a sign change guarantees at least one root when the function is continuous.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: PROVING A ROOT EXISTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: f(x) = x² - 3 on [1, 2]

Check continuity: f(x) is a polynomial, so it is continuous.

Evaluate the endpoints:
  f(1) = 1² - 3 = -2
  f(2) = 2² - 3 = 1

Therefore: f(1) < 0 and f(2) > 0

There is a sign change.

By the Intermediate Value Theorem, there must be some c ∈ (1, 2) such that f(c) = 0.

Therefore: x² - 3 = 0 has a solution in (1, 2).

In fact: c = √3 ≈ 1.732, but the IVT's purpose here is to prove existence, not necessarily to calculate the exact root.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. IVT DOES NOT TELL YOU THE EXACT VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important point.

The IVT tells us: A value exists, but it does not necessarily tell us where exactly that value occurs.

For example, if f(1) = -5 and f(4) = 8 and f is continuous, we know that there is some c ∈ (1, 4) such that f(c) = 0.

But IVT alone does not tell us the exact value of c.

Other methods, such as numerical approximation or the Bisection Method, can be used to find it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHY CONTINUITY IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The IVT only works when the function is continuous on the entire interval.

Consider a function with a jump.

A function could have f(a) = 2 and f(b) = 8 but jump directly from 2 to 8 without ever taking the value 5.

That would violate the IVT because the function is not continuous.

Therefore: Continuity is essential for the IVT.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IVT VS. EXTREME VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two theorems are sometimes confused.

Intermediate Value Theorem:
  Focuses on values between two function values.
  A continuous function must take every intermediate value.

Extreme Value Theorem:
  Focuses on maximum and minimum values.
  A continuous function on a closed interval must have an absolute maximum and an absolute minimum.

So:
  IVT → Intermediate values
  EVT → Extreme values

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. STEP-BY-STEP PROCEDURE FOR IVT PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an IVT problem, follow these steps:

Step 1: Define the function
  Write the equation as: f(x) = ...

Step 2: Identify the interval
  Usually: [a, b]

Step 3: Verify continuity
  Explain why f is continuous on [a, b].
  For example: Since f(x) is a polynomial, it is continuous for all real numbers.

Step 4: Evaluate the endpoints
  Find f(a) and f(b).

Step 5: Identify the target value
  Determine whether the desired value N lies between f(a) and f(b).

Step 6: Apply IVT
  Conclude: ∃ c ∈ (a, b) such that f(c) = N.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting continuity
  You cannot automatically use IVT just because the endpoint values are different.
  You must first establish that f(x) is continuous on the interval.

❌ Mistake 2: Thinking IVT finds the exact root
  IVT proves existence, not necessarily the exact location.

❌ Mistake 3: Using values outside the range
  If f(a) = 2 and f(b) = 7, IVT guarantees values between 2 and 7.
  It does not guarantee that f(c) = 10 for some c ∈ (a, b).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying the Intermediate Value Theorem, remember:

  • A continuous function cannot skip an intermediate value.
  • The function must be continuous on the interval.
  • The target value must be between the endpoint values.
  • IVT proves existence, not the exact location.
  • A sign change guarantees a root exists.

The key idea to remember is:

  The Intermediate Value Theorem can be summarized as: Continuous function + values at endpoints ⇒ all intermediate values occur. The most common application is proving that a root exists: f(a) < 0 < f(b) ⇒ at least one c ∈ (a, b) where f(c) = 0. Think of a continuous graph as a road. If you travel from an elevation of 100 m to 500 m, you must pass through every value in between. That's the essence of the Intermediate Value Theorem: A continuous function cannot skip an intermediate value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Intermediate Value Theorem is a fundamental theorem in Calculus that guarantees the existence of solutions and intermediate values for continuous functions.

Key concepts covered:

  ✓ Statement of the IVT
  ✓ The Main Idea
  ✓ Conditions of the IVT
  ✓ Example of the IVT
  ✓ Proving a Root Exists
  ✓ IVT and Sign Changes
  ✓ IVT Does Not Tell Exact Value
  ✓ Why Continuity Is Important
  ✓ IVT vs. Extreme Value Theorem
  ✓ Step-by-Step Procedure
  ✓ Common Mistakes
  `,
  examples: [
    "Use IVT: f(x) = x² on [1,3] takes every value between 1 and 9",
    "Use IVT: Show x³ + x - 1 = 0 has a solution in (0,1)",
    "Use IVT: f(0) = -1, f(1) = 1, so root exists in (0,1)",
    "Use IVT: f(x) = x² - 3 on [1,2] has a root in (1,2)",
    "Use IVT: f(1) = -2, f(2) = 1, so root exists",
    "IVT guarantees existence but not exact location",
    "Continuity is essential for IVT",
    "Sign change guarantees root for continuous function",
    "IVT vs EVT: IVT for intermediate values, EVT for max/min",
    "Step 1: Define function, Step 2: Identify interval, Step 3: Verify continuity",
    "Step 4: Evaluate endpoints, Step 5: Identify target, Step 6: Apply IVT",
    "Mistake: Forgetting to check continuity",
    "Mistake: Thinking IVT finds exact root",
    "Mistake: Using values outside the range",
    "Think of continuous graph as a road that cannot skip values",
  ],
};

export default topic;