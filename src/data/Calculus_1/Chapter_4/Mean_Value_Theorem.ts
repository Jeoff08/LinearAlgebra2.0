// filename: mean-value-theorem.ts

const topic = {
  id: "mean-value-theorem",
  title: "Mean Value Theorem (MVT)",
  summary:
    "A fundamental theorem in calculus stating that if a function is continuous on [a,b] and differentiable on (a,b), then there exists at least one c in (a,b) such that f'(c) = (f(b) - f(a))/(b - a).",
  details: `
The Mean Value Theorem is one of the most important theorems in differential calculus because it connects the average rate of change of a function over an interval with its instantaneous rate of change at some point inside that interval.

In simple terms:

  If a function is continuous and smooth enough, then at some point between 
  two endpoints, the instantaneous slope of the function is exactly equal to 
  its average slope over the entire interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have a function f(x) on the interval [a, b].

The average rate of change from a to b is:
  (f(b) - f(a))/(b - a)

The Mean Value Theorem tells us that there is at least one point c ∈ (a, b) where the derivative equals this average rate of change:
  f'(c) = (f(b) - f(a))/(b - a)

This is the central formula you should remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES IT MEAN GEOMETRICALLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two important lines involved.

Secant line:
  A secant line connects the two endpoints:
    (a, f(a)) and (b, f(b))
  Its slope is (f(b) - f(a))/(b - a).
  This represents the average slope.

Tangent line:
  A tangent line touches the curve at a point c.
  Its slope is f'(c).

The Mean Value Theorem says that somewhere between a and b, the tangent line has exactly the same slope as the secant line.

Therefore:
  Tangent slope = Secant slope
or:
  f'(c) = (f(b) - f(a))/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE TWO CONDITIONS OF THE MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the Mean Value Theorem to apply, two conditions must be satisfied.

Condition 1: Continuous on [a, b]
  The function must be continuous on the closed interval:
    f is continuous on [a, b]

  There cannot be holes, jumps, breaks, or vertical asymptotes.

Condition 2: Differentiable on (a, b)
  The function must be differentiable on the open interval:
    f is differentiable on (a, b)

  There cannot be sharp corners or cusps inside the interval.

Notice:
  [a, b] is used for continuity, while (a, b) is used for differentiability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MEAN VALUE THEOREM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The formula is:
  f'(c) = (f(b) - f(a))/(b - a)

where:
  a < c < b

You can think of it as:
  Instantaneous rate = Average rate

at some point c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: BASIC MVT PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x² on the interval [1, 3].

Determine the value of c guaranteed by the Mean Value Theorem.

Step 1: Check continuity
  Since f(x) = x² is a polynomial, it is continuous everywhere.
  Therefore, it is continuous on [1, 3].
  ✅ Condition satisfied.

Step 2: Check differentiability
  A polynomial is differentiable everywhere.
  Therefore, f(x) is differentiable on (1, 3).
  ✅ Condition satisfied.

So the Mean Value Theorem applies.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. STEP 3: FIND THE AVERAGE RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Calculate:
  (f(3) - f(1))/(3 - 1)

First:
  f(3) = 3² = 9
  f(1) = 1² = 1

Therefore:
  (9 - 1)/(3 - 1) = 8/2 = 4

So the average slope is 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. STEP 4: FIND THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiate:
  f'(x) = 2x

The Mean Value Theorem tells us:
  f'(c) = 4

Therefore:
  2c = 4

So:
  c = 2

Since 1 < 2 < 3, the value is valid.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHAT DOES c = 2 MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At x = 2, the instantaneous slope of the curve is exactly the same as the average slope from x = 1 to x = 3.

The average slope was:
  4

And:
  f'(2) = 2(2) = 4

Therefore:
  Average slope = 4
and:
  Instantaneous slope at x = 2 = 4

That's exactly what the Mean Value Theorem guarantees.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. UNDERSTANDING IT WITH MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem becomes especially intuitive when we think about speed.

Suppose you drive from one location to another.

You travel 120 km in 2 hours.

Your average speed is:
  120/2 = 60 km/h

The Mean Value Theorem tells us that, assuming your position function is continuous and differentiable, there must be at least one instant during the trip when your instantaneous speed was exactly:
  60 km/h

This does not mean you drove at 60 km/h the entire time.

It means that at some particular instant:
  instantaneous speed = average speed

That's the real-world interpretation of the MVT.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. AVERAGE VS. INSTANTANEOUS RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Average rate of change:
  Measures what happened over an entire interval:
    (f(b) - f(a))/(b - a)

Instantaneous rate of change:
  Measures what is happening at one specific point:
    f'(c)

The Mean Value Theorem says that these two values are equal at least once somewhere inside the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x³ on [1, 2].

Find the value of c.

Step 1: Conditions
  Since x³ is a polynomial, it is:
    • continuous on [1, 2]
    • differentiable on (1, 2)

So MVT applies.

Step 2: Average slope
  (f(2) - f(1))/(2 - 1) = (8 - 1)/1 = 7

Therefore:
  f'(c) = 7

Step 3: Derivative
  f'(x) = 3x²

Therefore:
  3c² = 7

So:
  c² = 7/3

Since c must be inside (1, 2):
  c = √(7/3)

Approximately:
  c ≈ 1.528

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ROLLE'S THEOREM VS. MEAN VALUE THEOREM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two topics are closely related.

Rolle's Theorem:
  Rolle's Theorem requires f(a) = f(b).
  It concludes: f'(c) = 0

Mean Value Theorem:
  MVT does not require f(a) = f(b).
  Instead: f'(c) = (f(b) - f(a))/(b - a)

The relationship:
  Rolle's Theorem is actually a special case of the Mean Value Theorem.

  If f(a) = f(b), then f(b) - f(a) = 0.

  So MVT becomes:
    f'(c) = 0/(b - a) = 0

  Therefore:
    f'(c) = 0

  That's Rolle's Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY IS THE POINT c INSIDE THE INTERVAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The MVT specifically guarantees:
  c ∈ (a, b)

That means:
  a < c < b

The point cannot be one of the endpoints.

For example, if the interval is [2, 6], then c must satisfy:
  2 < c < 6

So values such as c = 2 or c = 6 are not acceptable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WHERE MVT DOES NOT APPLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = 1/x on [-1, 1].

The function is not continuous on the interval because it is undefined at x = 0.

Therefore, the first condition fails.

So:
  MVT does not apply.

Even if you can calculate some derivative, you cannot use the Mean Value Theorem because its required conditions are not satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANOTHER EXAMPLE: ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = |x| on [-1, 1].

The function is continuous on [-1, 1].

However, it is not differentiable at x = 0 because of the sharp corner.

Therefore:
  MVT does not apply.

This is similar to the Rolle's Theorem example.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MVT AND SECANT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope:
  (f(b) - f(a))/(b - a)

is the slope of the line connecting the two points:
  (a, f(a)) and (b, f(b))

This line is called a secant line.

The MVT tells us that there is a point c where the tangent line to the curve is parallel to the secant line.

So:
  Secant slope = Tangent slope at c

or:
  (f(b) - f(a))/(b - a) = f'(c)

This geometric interpretation is one of the most useful ways to remember the theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. HOW TO SOLVE MVT PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see a problem saying:
  "Verify that the Mean Value Theorem applies and find all values of c."

Use this procedure.

Step 1 — Check continuity
  Determine whether f is continuous on [a, b].

Step 2 — Check differentiability
  Determine whether f is differentiable on (a, b).

Step 3 — Calculate the average rate
  Use: (f(b) - f(a))/(b - a)

Step 4 — Find the derivative
  Calculate f'(x).

Step 5 — Set them equal
  Write: f'(c) = (f(b) - f(a))/(b - a)

Step 6 — Solve for c
  Find all possible values satisfying a < c < b.

Step 7 — State the conclusion
  Explain that the value c is the point where the instantaneous rate of change equals the average rate of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. A COMPLETE WORKED EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the value of c guaranteed by the MVT for:
  f(x) = x² + 2x on [0, 4]

Continuity:
  f(x) is a polynomial, so it is continuous on [0, 4].

Differentiability:
  It is differentiable on (0, 4).

Therefore, MVT applies.

Average rate of change:
  First:
    f(4) = 4² + 2(4) = 16 + 8 = 24
  And:
    f(0) = 0

  Therefore:
    (f(4) - f(0))/(4 - 0) = 24/4 = 6

  So:
    f'(c) = 6

Derivative:
  f'(x) = 2x + 2

Therefore:
  2c + 2 = 6
  2c = 4
  c = 2

Since 0 < 2 < 4, the answer is valid.

Final interpretation:
  At x = 2, the instantaneous rate of change is equal to the average rate of change over the entire interval [0, 4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT APPLICATIONS OF THE MVT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mean Value Theorem is not just a theoretical theorem. It has many applications.

Motion:
  If an object travels a certain distance over a certain amount of time, MVT can guarantee an instant when its instantaneous velocity equals its average velocity.

Economics:
  It can relate average changes in revenue, cost, profit, production, to instantaneous changes.

Physics:
  It helps connect average and instantaneous velocity, acceleration, displacement, and rates of change.

Engineering:
  It can be used to analyze changing quantities and rates.

Numerical analysis:
  The theorem helps establish important bounds on errors and approximations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. THE MOST IMPORTANT THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Formula:
  f'(c) = (f(b) - f(a))/(b - a)

Conditions:
  Continuous on [a, b]
  Differentiable on (a, b)

Location:
  a < c < b

Meaning:
  Instantaneous rate of change = Average rate of change at some point c.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ROLLE'S THEOREM VS. MVT — QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature                   Rolle's Theorem            Mean Value Theorem
  ─────────────────────────────────────────────────────────────────────────────────────────
  Continuous on [a, b]      ✅                         ✅
  Differentiable on (a, b)  ✅                         ✅
  Endpoint condition        f(a) = f(b)                No equality required
  Conclusion                f'(c) = 0                  f'(c) = (f(b)-f(a))/(b-a)
  Geometric idea            Horizontal tangent         Tangent parallel to secant

Easy memory trick:
  Rolle's Theorem: Same endpoints → somewhere the slope is zero.
  Mean Value Theorem: Average slope → somewhere the instantaneous slope is the same.

So if you remember only one central idea for MVT, remember:

  Average slope over an interval = Instantaneous slope at some point inside
  `,
  examples: [
    "f(x) = x² on [1,3] → average slope = 4, f'(x) = 2x, c = 2",
    "f(x) = x³ on [1,2] → average slope = 7, f'(x) = 3x², c = √(7/3)",
    "f(x) = x² + 2x on [0,4] → average slope = 6, f'(x) = 2x+2, c = 2",
    "f(x) = 1/x on [-1,1] → not continuous at 0 → MVT does not apply",
    "f(x) = |x| on [-1,1] → not differentiable at 0 → MVT does not apply",
    "MVT: f'(c) = (f(b) - f(a))/(b - a)",
    "MVT is a generalization of Rolle's Theorem",
  ],
};

export default topic;