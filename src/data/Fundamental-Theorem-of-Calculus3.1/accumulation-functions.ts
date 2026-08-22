// filename: accumulation-functions.ts

const topic = {
  id: "accumulation-functions",
  title: "Accumulation Functions",
  summary:
    "A function that keeps track of the total amount accumulated from a starting point up to a variable point, defined as A(x) = ∫ₐˣ f(t) dt, with derivative A'(x) = f(x).",
  details: `
An Accumulation Function is a function that keeps track of the total amount accumulated from a starting point up to a variable point.

It is one of the most important applications of the Definite Integral and connects directly to the Fundamental Theorem of Calculus Part 1.

The standard form is:
  A(x) = ∫ₐˣ f(t) dt

where:
  A(x) = accumulation function
  a = fixed starting point
  x = variable endpoint
  f(t) = rate of accumulation
  dt = variable of integration

The key result is:
  A'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN ACCUMULATION FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An accumulation function tells us how much of something has accumulated between a starting point and x.

For example, suppose:
  f(t) = rate at which water enters a tank.

Then:
  A(x) = ∫ₐˣ f(t) dt

represents the total amount of water that has entered the tank from time a to time x.

So:
  Rate → Accumulated Amount

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE BASIC FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important form is:
  A(x) = ∫ₐˣ f(t) dt

Think of this as:
  Start at a, accumulate the values of f(t), and stop at x.

Because x can change, A(x) is itself a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS IT CALLED "ACCUMULATION"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(t) = 5.

If:
  A(x) = ∫₀ˣ 5 dt

then:
  A(x) = 5x

As x increases, the accumulated amount increases.

For example:
  A(1) = 5
  A(2) = 10
  A(3) = 15
  A(4) = 20

So the function is accumulating 5 units for every unit of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  A(x) = ∫ₐˣ f(t) dt

then A(x) represents the signed area between the graph of f and the x-axis from a to x.

If the function is above the x-axis (f(t) > 0), then the accumulation increases.

If f(t) < 0, the accumulation decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE 1: BASIC ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let:
  A(x) = ∫₀ˣ t² dt

Find A(x).

Step 1: Find the antiderivative
  ∫ t² dt = t³/3

Step 2: Apply the limits
  A(x) = [t³/3]₀ˣ

Therefore:
  A(x) = x³/3 - 0

So:
  A(x) = x³/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FINDING THE DERIVATIVE OF AN ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₀ˣ t² dt

From the previous example:
  A(x) = x³/3

Differentiate:
  A'(x) = x²

But x² is the original function.

Therefore:
  A'(x) = f(x)

This is the Fundamental Theorem of Calculus Part 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE FUNDAMENTAL RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  A(x) = ∫ₐˣ f(t) dt

then:
  A'(x) = f(x)

This means:
  The derivative of an accumulation function is the function being accumulated.

This is one of the most important relationships in calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2: ACCUMULATION OF A LINEAR FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₁ˣ (2t + 3) dt

Find A(x).

An antiderivative is:
  t² + 3t

Therefore:
  A(x) = [t² + 3t]₁ˣ

At the upper limit:
  x² + 3x

At the lower limit:
  1² + 3(1) = 4

Therefore:
  A(x) = x² + 3x - 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FINDING SPECIFIC ACCUMULATED VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₁ˣ (2t + 3) dt

Find A(4).

Substitute x = 4:
  A(4) = ∫₁⁴ (2t + 3) dt

Using the previous result:
  A(4) = 4² + 3(4) - 4
  = 16 + 12 - 4
  = 24

So 24 is the amount accumulated from 1 to 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. ACCUMULATION FUNCTION AS A RUNNING TOTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An easy way to understand accumulation functions is to think of them as a running total.

Suppose f(t) is the amount earned per hour.

Then:
  A(x) = ∫ₐˣ f(t) dt

is the total amount earned from time a to time x.

As x changes, the total changes.

Therefore:
  A(x) = running total

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. RATE VS. ACCUMULATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is extremely important.

Suppose f(t) = rate.

Then:
  A(x) = ∫ₐˣ f(t) dt

is the accumulated quantity.

And:
  A'(x) = f(x)

returns the rate.

So:
  Rate → Accumulation

and:
  Accumulation → Rate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE: WATER FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose water enters a tank at a rate:
  R(t) = 3t² + 2

liters per minute.

The amount of water entering from t = 0 to t = x is:
  A(x) = ∫₀ˣ (3t² + 2) dt

Find A(x).

Antiderivative:
  t³ + 2t

Therefore:
  A(x) = [t³ + 2t]₀ˣ
  A(x) = x³ + 2x

So the amount of water accumulated after x minutes is:
  x³ + 2x liters

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FINDING THE RATE FROM THE ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₀ˣ (4t³ - 2t) dt

Instead of calculating A(x), we can immediately use FTC Part 1:
  A'(x) = 4x³ - 2x

So if A(x) represents the amount accumulated, A'(x) represents the instantaneous rate of accumulation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ACCUMULATION FUNCTION AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The graph of an accumulation function contains a lot of information about the original function.

Suppose:
  A(x) = ∫ₐˣ f(t) dt

Then:
  A'(x) = f(x)

Therefore:
  If f(x) > 0: A'(x) > 0, so A(x) is increasing
  If f(x) < 0: A'(x) < 0, so A(x) is decreasing
  If f(x) = 0: A'(x) = 0, so A(x) has a horizontal tangent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. CRITICAL POINTS OF AN ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because:
  A'(x) = f(x)

the critical points of A(x) occur where:
  f(x) = 0

or where f(x) is undefined.

This gives us a powerful connection:
  f(x) = 0 ⇔ A'(x) = 0

Therefore, the zeros of f can help identify maximum and minimum points of A.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₀ˣ f(t) dt

and the graph of f shows:
  f(x) > 0 before x = 2, and f(x) < 0 after x = 2.

Since:
  A'(x) = f(x)

we have:
  A'(x) > 0 before 2, and A'(x) < 0 after 2.

Therefore:
  A(x) has a local maximum at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. ACCUMULATION FUNCTION AND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can go one step further.

Since:
  A'(x) = f(x)

differentiate again:
  A''(x) = f'(x)

Therefore:
  A''(x) = f'(x)

This means the behavior of f determines the concavity of A.

If f is increasing:
  f'(x) > 0, so A''(x) > 0, therefore A is concave up

If f is decreasing:
  f'(x) < 0, so A''(x) < 0, therefore A is concave down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT RELATIONSHIP BETWEEN f AND A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  A(x) = ∫ₐˣ f(t) dt

then:
  A'(x) = f(x)
and:
  A''(x) = f'(x)

Therefore:

  Behavior of f(x)  |  Behavior of A(x)
  ───────────────────┼─────────────────────────
  f(x) > 0          |  A is increasing
  f(x) < 0          |  A is decreasing
  f(x) = 0          |  A has horizontal tangent
  f is increasing   |  A is concave up
  f is decreasing   |  A is concave down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. ACCUMULATION CAN DECREASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Accumulation" doesn't always mean the function increases.

If f(t) < 0, then:
  ∫ₐˣ f(t) dt

can decrease as x increases.

For example:
  A(x) = ∫₀ˣ (-2) dt

Then:
  A(x) = -2x

As x increases, A(x) becomes more negative.

So accumulation represents net accumulation, not necessarily a positive total.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH POSITIVE AND NEGATIVE RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(t) represents the rate at which money enters or leaves an account.

f(t) > 0: money is being added.
f(t) < 0: money is being removed.

Then:
  A(x) = ∫ₐˣ f(t) dt

represents the net change in the account.

If:
  ∫ₐˣ f(t) dt = 500

the account has increased by 500 units relative to its value at a.

If:
  ∫ₐˣ f(t) dt = -200

the account has decreased by 200 units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. ACCUMULATION FUNCTION DOES NOT ALWAYS REPRESENT TOTAL AMOUNT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important distinction.

Suppose f(t) = velocity.

Then:
  ∫ₐˣ f(t) dt

gives displacement, not total distance.

Why?
  Because velocity can be negative.

For total distance, we need:
  ∫ₐˣ |f(t)| dt

when appropriate.

So:
  Accumulation of signed rate = net change
while:
  Accumulation of absolute rate = total amount

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE: POSITION AND VELOCITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose velocity is:
  v(t) = 2t

The displacement from t = 0 to t = x is:
  A(x) = ∫₀ˣ 2t dt

Therefore:
  A(x) = x²

So:
  A(x) = x²

and:
  A'(x) = 2x = v(x)

This demonstrates:
  Velocity = Derivative of displacement
and:
  Displacement = Accumulated velocity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. ACCUMULATION FUNCTION WITH A DIFFERENT UPPER LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we have:
  A(x) = ∫ₐ^(g(x)) f(t) dt

Then we need the Chain Rule:
  A'(x) = f(g(x)) · g'(x)

Example:
  A(x) = ∫₀^(x²) sin(t) dt

Here:
  g(x) = x²

Therefore:
  A'(x) = sin(x²) · (2x)

So:
  A'(x) = 2x sin(x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. ACCUMULATION FUNCTION WITH BOTH LIMITS VARIABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  A(x) = ∫_(g(x))^(h(x)) f(t) dt

then:
  A'(x) = f(h(x))·h'(x) - f(g(x))·g'(x)

This combines FTC Part 1 with the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫ₓ^(x²) t² dt

Upper limit:
  h(x) = x², so h'(x) = 2x

Lower limit:
  g(x) = x, so g'(x) = 1

Therefore:
  A'(x) = (x²)²(2x) - x²(1)
  = 2x⁵ - x²

Thus:
  A'(x) = 2x⁵ - x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. INITIAL VALUE OF AN ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  A(x) = ∫ₐˣ f(t) dt

What happens when x = a?

We get:
  A(a) = ∫ₐᵃ f(t) dt

Any integral with identical limits is zero:
  A(a) = 0

This is an important property of accumulation functions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫₃ˣ (t² + 1) dt

Then:
  A(3) = 0

because:
  ∫₃³ (t² + 1) dt = 0

The accumulation starts at zero at the starting point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. ACCUMULATION FUNCTION VS. DEFINITE INTEGRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These look very similar but have an important difference.

Definite Integral:
  ∫ₐᵇ f(x) dx
Both limits are fixed.
The result is generally a number.

Accumulation Function:
  A(x) = ∫ₐˣ f(t) dt
The upper limit is variable.
The result is a function of x.

This distinction is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definite integral:
  ∫₀⁵ t² dt = 125/3
This is a number.

Accumulation function:
  A(x) = ∫₀ˣ t² dt
gives:
  A(x) = x³/3
This is a function.

So:
  Fixed upper limit → number
  Variable upper limit → function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Treating A(x) as a number
  If A(x) = ∫₀ˣ f(t) dt, then A(x) is a function, because x can change.

❌ Mistake 2: Forgetting the variable upper limit
  The difference between:
    ∫₀⁵ f(t) dt
  and:
    ∫₀ˣ f(t) dt
  is very important.
  The first is a number.
  The second is a function.

❌ Mistake 3: Forgetting the Chain Rule
  For A(x) = ∫₀^(x³) f(t) dt, the derivative is:
    A'(x) = f(x³)(3x²)
  not just f(x³).

❌ Mistake 4: Assuming accumulation always increases
  If f(x) < 0, then A(x) decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. QUICK PROBLEM-SOLVING GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:
  A(x) = ∫ₐˣ f(t) dt

you should immediately recognize:
  A'(x) = f(x)

If asked to find A(x):
  • Find the antiderivative.
  • Evaluate at x.
  • Evaluate at a.
  • Subtract.

If asked to find A'(x):
  A'(x) = f(x)

If asked about whether A is increasing:
  Look at f(x).
  If f(x) > 0, then A is increasing.
  If f(x) < 0, then A is decreasing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Basic accumulation function:
    A(x) = ∫ₐˣ f(t) dt

  Fundamental Theorem:
    A'(x) = f(x)

  Second derivative:
    A''(x) = f'(x)

  Variable upper limit:
    d/dx [∫ₐ^(g(x)) f(t) dt] = f(g(x))·g'(x)

  Variable lower and upper limits:
    d/dx [∫_(g(x))^(h(x)) f(t) dt] = f(h(x))·h'(x) - f(g(x))·g'(x)

  Initial value:
    A(a) = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

33. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                   Formula                        Meaning
  ──────────────────────────────────────────────────────────────────────────────────
  Accumulation Function     A(x) = ∫ₐˣ f(t) dt            Total/net amount accumulated
  First Derivative          A'(x) = f(x)                  Rate of accumulation
  Second Derivative         A''(x) = f'(x)                How the rate changes
  Starting Value            A(a) = 0                      No accumulation at start
  f > 0                     A' > 0                        A is increasing
  f < 0                     A' < 0                        A is decreasing
  f is increasing           A'' > 0                       A is concave up
  f is decreasing           A'' < 0                       A is concave down

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

34. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Accumulation functions bring together several topics you've already covered:

  Rate of Change
    ↓ ∫
  Accumulation Function
    ↓ d/dx
  Original Rate

For:
  A(x) = ∫ₐˣ f(t) dt

we have:
  A'(x) = f(x)
and:
  A''(x) = f'(x)

So the easiest way to remember the concept is:

  An accumulation function is a running total created by integrating a rate. 
  Its derivative gives the original rate back.

Most important formula:
  A(x) = ∫ₐˣ f(t) dt ⇔ A'(x) = f(x)

This is the core idea behind accumulation functions and the Fundamental Theorem of Calculus Part 1.
  `,
  examples: [
    "A(x) = ∫₀ˣ t² dt → A(x) = x³/3, A'(x) = x²",
    "A(x) = ∫₁ˣ (2t + 3) dt → A(x) = x² + 3x - 4",
    "A(4) for A(x) = ∫₁ˣ (2t + 3) dt → 24",
    "A(x) = ∫₀ˣ (3t² + 2) dt → A(x) = x³ + 2x",
    "A'(x) = ∫₀ˣ (4t³ - 2t) dt → A'(x) = 4x³ - 2x",
    "d/dx ∫₀^(x²) sin(t) dt = 2x sin(x²)",
    "d/dx ∫ₓ^(x²) t² dt = 2x⁵ - x²",
  ],
};

export default topic;