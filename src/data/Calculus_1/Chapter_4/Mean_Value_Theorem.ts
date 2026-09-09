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

The Mean Value Theorem (MVT) establishes a fundamental relationship between the average rate of change of a function over an interval and its instantaneous rate of change at some interior point. Intuitively, if you travel from point A to point B, your average speed over the entire trip must equal your instantaneous speed at least once during the journey. This is the essence of the theorem: there exists a point where the tangent slope (instantaneous rate) matches the secant slope (average rate). This connection is powerful because it allows us to use information about the function's average behavior to infer something about its local behavior. The theorem is a cornerstone of calculus and underpins many other results, including the Fundamental Theorem of Calculus and Taylor's Theorem.

Suppose we have a function f(x) on the interval [a, b].

The average rate of change from a to b is:
  (f(b) - f(a))/(b - a)

The Mean Value Theorem tells us that there is at least one point c ∈ (a, b) where the derivative equals this average rate of change:
  f'(c) = (f(b) - f(a))/(b - a)

This is the central formula you should remember.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT DOES IT MEAN GEOMETRICALLY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Geometrically, the Mean Value Theorem says that if you draw a secant line connecting the endpoints of the curve on the interval [a, b], then somewhere between a and b, the tangent line to the curve will be parallel to that secant line. The secant line represents the average slope of the function over the interval, while the tangent line represents the instantaneous slope at a specific point. The theorem guarantees that these two slopes coincide at least once. This means there is a point where the curve's direction matches the overall trend of the interval. This geometric interpretation is invaluable for visualizing the theorem and understanding why it must be true for continuous and differentiable functions. It also provides a way to check if the theorem applies: if the curve has no breaks or sharp corners, the secant and tangent must align somewhere.

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

For the Mean Value Theorem to apply, the function must satisfy two essential conditions. First, the function must be continuous on the closed interval [a, b]. This means there are no holes, jumps, or vertical asymptotes within that interval; the graph is unbroken. Second, the function must be differentiable on the open interval (a, b). This means the derivative exists at every point inside the interval; there are no sharp corners, cusps, or vertical tangents. The continuity condition ensures that the function has no gaps, and the differentiability condition ensures it is smooth enough to have a tangent at every interior point. Both conditions are necessary; if either fails, the conclusion may not hold. The use of [a, b] for continuity and (a, b) for differentiability reflects the endpoint behavior: at the endpoints, we only need continuity because the derivative is not defined there.

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

The Mean Value Theorem is expressed by a simple formula: f'(c) = (f(b) - f(a))/(b - a), where c is some point strictly between a and b. This formula states that the instantaneous rate of change at c equals the average rate of change over [a, b]. It is the central equation of the theorem. In practice, this formula allows us to find the value of c (or at least guarantee its existence) by setting the derivative equal to the average slope and solving for c. The formula is elegant and encapsulates the entire theorem. It also shows why the theorem is so useful: it provides a precise relationship between local and global behavior. Remember that c must lie strictly inside the interval, not at the endpoints. This formula is the key to solving MVT problems.

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

Let's work through a classic MVT problem step by step. We want to find the value of c guaranteed by the theorem for f(x) = x² on the interval [1, 3]. First, we verify the conditions: f(x) = x² is a polynomial, so it is both continuous and differentiable everywhere. Thus, MVT applies. Next, we compute the average rate of change, which is (f(3) - f(1))/(3 - 1) = (9 - 1)/2 = 4. Then we find the derivative f'(x) = 2x. Setting f'(c) = 4 gives 2c = 4, so c = 2. Since 2 is between 1 and 3, it is valid. This example illustrates the complete process: verify conditions, compute average slope, find derivative, set them equal, and solve for c. The answer c = 2 is the point where the instantaneous slope equals the average slope.

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

The average rate of change is the slope of the secant line connecting the endpoints. It represents the overall trend of the function over the interval. For f(x) = x² on [1, 3], we compute f(3) = 9 and f(1) = 1. Then the average slope is (9 - 1)/(3 - 1) = 8/2 = 4. This number is the average rate at which the function changes from x = 1 to x = 3. It is the value that the instantaneous rate must equal at some point c. This step is straightforward: just apply the slope formula between the endpoints. It's crucial to compute this correctly because it sets the target value for the derivative.

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

The derivative f'(x) gives the instantaneous rate of change at any point x. For f(x) = x², f'(x) = 2x. The MVT says that there exists a c where f'(c) equals the average slope we computed, which is 4. So we set 2c = 4 and solve for c, getting c = 2. This is the specific point where the tangent slope matches the secant slope. The derivative provides the link between the average and instantaneous rates. This step demonstrates the power of derivatives: they allow us to find the exact location where the instantaneous rate equals the average rate. Without derivatives, we would have no way to locate this point.

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

The value c = 2 is the point where the instantaneous slope of the curve equals the average slope over the entire interval. At x = 2, the derivative is f'(2) = 2(2) = 4, which matches the average slope of 4. This means that the tangent line at x = 2 is parallel to the secant line connecting (1, 1) and (3, 9). This is the geometric meaning of the theorem. For a quadratic function like x², the point c is always the midpoint of the interval, but for other functions it may not be. Understanding what c represents helps in interpreting the result. It is not just a number; it is the location where the function's instantaneous behavior reflects its overall trend.

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

The Mean Value Theorem becomes highly intuitive when interpreted in terms of motion. Suppose you drive from one city to another, covering a distance of 120 km in 2 hours. Your average speed is 60 km/h. The theorem guarantees that at some instant during the trip, your speedometer must have read exactly 60 km/h. This does not mean you drove at 60 km/h the whole time; you may have gone faster or slower, but at least one moment your instantaneous speed equaled your average speed. This is a direct application of the MVT to the position function. This interpretation is often used to explain the theorem to non-mathematicians because it is concrete and relatable. It also shows why the theorem is true: if your average speed is 60, and you never exactly hit 60, you would have to be either always above or always below, which is impossible without a discontinuity.

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

The distinction between average and instantaneous rate of change is fundamental in calculus. The average rate of change measures the overall change over an interval, while the instantaneous rate measures the change at a single point. The MVT bridges these two concepts by stating that there exists a point where they are equal. This is not obvious: one might think that average and instantaneous rates are completely unrelated. The theorem shows they are connected in a precise way. This connection is what makes the MVT so powerful. It allows us to infer properties of the derivative from properties of the function values. For example, if the average rate is positive, there must be a point where the instantaneous rate is positive. This kind of reasoning is used in many proofs and applications.

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

Let's work through a second example to reinforce the method. For f(x) = x³ on [1, 2], we verify that the function is continuous and differentiable (it is a polynomial). The average slope is (f(2) - f(1))/(2 - 1) = (8 - 1)/1 = 7. The derivative is f'(x) = 3x². Setting f'(c) = 7 gives 3c² = 7, so c = √(7/3) ≈ 1.528. Since this lies between 1 and 2, the theorem applies. This example shows that c may be an irrational number, and it is not necessarily the midpoint. It also demonstrates that solving for c may involve taking square roots or other algebraic manipulations. The process is the same regardless of the function: verify conditions, compute average slope, set derivative equal, solve for c.

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

Rolle's Theorem and the Mean Value Theorem are closely related. In fact, Rolle's Theorem is a special case of the MVT. Rolle's Theorem requires that the function values at the endpoints be equal (f(a) = f(b)). Under this condition, the average slope is zero, so the MVT guarantees a point c where f'(c) = 0. Thus, Rolle's Theorem is exactly the MVT when the secant line is horizontal. The MVT generalizes Rolle's Theorem by allowing the endpoints to have different values. Both theorems share the same continuity and differentiability conditions. Understanding this relationship helps in remembering both theorems. If you know the MVT, you can derive Rolle's Theorem by simply setting f(a) = f(b). Conversely, the MVT can be proven using Rolle's Theorem applied to a carefully constructed auxiliary function.

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

The Mean Value Theorem guarantees that c is strictly between a and b, not at the endpoints. This is because the average slope uses the endpoints, and the derivative at the endpoints is not required to exist. The theorem only requires differentiability on the open interval (a, b), so c cannot be a or b. If the theorem allowed c to be an endpoint, it would be trivial or meaningless. The existence of c in the interior is what makes the theorem powerful: it ensures that there is a point where the local behavior matches the global average. When solving MVT problems, you must always verify that your solution for c lies within (a, b). If it does not, you may have made an algebraic error, or the function may not satisfy the conditions.

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

It is important to recognize when the Mean Value Theorem does not apply. For f(x) = 1/x on [-1, 1], the function is not continuous on the interval because it is undefined at x = 0. The first condition fails, so the theorem cannot be used. Even if you could compute a derivative at some points, the theorem's conclusion is not guaranteed. This example illustrates why the conditions are not just formalities; they are essential for the theorem to hold. When checking a problem, always verify both conditions before applying the MVT. If either fails, you must use other methods to analyze the function's behavior.

Consider f(x) = 1/x on [-1, 1].

The function is not continuous on the interval because it is undefined at x = 0.

Therefore, the first condition fails.

So:
  MVT does not apply.

Even if you can calculate some derivative, you cannot use the Mean Value Theorem because its required conditions are not satisfied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANOTHER EXAMPLE: ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another case where MVT fails is with the absolute value function. Consider f(x) = |x| on [-1, 1]. The function is continuous everywhere, so it satisfies the first condition. However, it is not differentiable at x = 0 because of the sharp corner. Since the second condition fails, the MVT does not apply. This example is important because it shows that continuity alone is not enough; differentiability is also required. The sharp corner at x = 0 means there is no tangent line there, so the theorem cannot guarantee a point where the tangent slope equals the secant slope. This is a common example used to illustrate the necessity of the differentiability condition.

Consider f(x) = |x| on [-1, 1].

The function is continuous on [-1, 1].

However, it is not differentiable at x = 0 because of the sharp corner.

Therefore:
  MVT does not apply.

This is similar to the Rolle's Theorem example.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MVT AND SECANT LINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The slope (f(b) - f(a))/(b - a) is the slope of the secant line through the endpoints of the function on the interval. The MVT says that there is a point c where the tangent line to the curve is parallel to this secant line. This is a geometric statement: the secant and tangent lines have the same slope. This interpretation is often easier to remember than the algebraic formula. It also provides a visual check: if you draw a curve and a secant line, you can see that there must be a point where the tangent is parallel to the secant. This is true for any smooth curve. The secant line represents the average direction, and the tangent line at c matches that direction. This geometric insight is at the heart of the MVT.

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

When solving MVT problems, follow a systematic procedure. First, check continuity on [a, b]. Second, check differentiability on (a, b). If both hold, the theorem applies. Third, compute the average rate of change. Fourth, find the derivative f'(x). Fifth, set f'(c) equal to the average rate and solve for c. Sixth, verify that c lies in (a, b). Finally, state your conclusion. This procedure works for all functions that satisfy the conditions. It is important to be careful with algebra and to check your answer. Many students forget to verify the conditions or to check that c is in the interval. Always include these steps in your solution. The MVT is a powerful theorem, but it must be applied correctly.

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

Let's work through a complete example to see all the steps in action. For f(x) = x² + 2x on [0, 4], we first verify the conditions: the function is a polynomial, so it is continuous and differentiable everywhere. The average slope is (f(4) - f(0))/(4 - 0) = (24 - 0)/4 = 6. The derivative is f'(x) = 2x + 2. Setting f'(c) = 6 gives 2c + 2 = 6, so c = 2. Since 0 < 2 < 4, the answer is valid. This example shows how the process works for a quadratic function with a linear term. The final interpretation is that at x = 2, the instantaneous rate equals the average rate over [0, 4]. This is the kind of problem you might encounter on an exam.

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

The Mean Value Theorem is not just a theoretical curiosity; it has many practical applications. In motion, it guarantees that at some instant, the instantaneous velocity equals the average velocity. In economics, it relates average and marginal changes in revenue, cost, or profit. In physics, it connects average and instantaneous rates of change in displacement, velocity, and acceleration. In engineering, it is used to analyze changing quantities and rates. In numerical analysis, the MVT provides error bounds for approximations, such as in Taylor's Theorem. It is also used in proofs of other theorems, including the Fundamental Theorem of Calculus. Understanding the MVT opens the door to many advanced topics and provides a deeper understanding of how functions behave.

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

In summary, the Mean Value Theorem states that for a continuous function on a closed interval that is differentiable on the open interval, there exists a point c where the derivative equals the average rate of change. The formula is f'(c) = (f(b) - f(a))/(b - a). The conditions are continuity on [a, b] and differentiability on (a, b). The point c must satisfy a < c < b. The theorem connects local and global behavior, ensuring that the instantaneous rate matches the average rate somewhere. This theorem is fundamental to calculus and has many applications. Memorize the formula and the conditions, and practice applying them to various functions. With practice, the MVT becomes an intuitive and powerful tool.

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

This table summarizes the differences between Rolle's Theorem and the Mean Value Theorem. Both require continuity and differentiability, but Rolle's Theorem has the additional condition f(a) = f(b). The conclusion of Rolle's Theorem is f'(c) = 0, while the MVT's conclusion is more general: f'(c) = (f(b) - f(a))/(b - a). Geometrically, Rolle's Theorem says there is a horizontal tangent (slope 0), while the MVT says the tangent is parallel to the secant line. If you understand the MVT, you can easily derive Rolle's Theorem by setting f(a) = f(b). This comparison helps in remembering both theorems and their applications.

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