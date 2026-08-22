// filename: fundamental-theorem-of-calculus-part1.ts

const topic = {
  id: "fundamental-theorem-of-calculus-part1",
  title: "Fundamental Theorem of Calculus — Part 1",
  summary:
    "A fundamental theorem establishing that differentiation and integration are inverse processes, stating that the derivative of an accumulation function equals the original function.",
  details: `
The Fundamental Theorem of Calculus Part 1 (FTC Part 1) is one of the most important ideas in calculus because it establishes a deep connection between differentiation and integration.

In simple terms:

  If you accumulate the values of a function using an integral, then differentiate 
  that accumulation function, you get the original function back.

This is why differentiation and integration are often described as inverse processes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we define a new function:
  F(x) = ∫ₐˣ f(t) dt

Here:
  f(t) is the original function
  a is a fixed starting point
  x is the variable upper limit
  F(x) represents the accumulated area from a to x

The Fundamental Theorem of Calculus Part 1 tells us:
  F'(x) = f(x)

provided f is continuous.

This is the central formula of FTC Part 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS THIS IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before the Fundamental Theorem of Calculus, differentiation and integration may seem like two separate topics:

Differentiation:
  f(x) → f'(x)
  describes rates of change.

Integration:
  f(x) → ∫ f(x) dx
  describes accumulation or area.

FTC Part 1 tells us that these operations are closely connected:

  Integration ↔ Differentiation

More specifically:
  d/dx [∫ₐˣ f(t) dt] = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FUNDAMENTAL THEOREM OF CALCULUS PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f is continuous on an interval containing a and x, and:
  F(x) = ∫ₐˣ f(t) dt

then:
  F'(x) = f(x)

This means that F is an antiderivative of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. UNDERSTANDING THE ACCUMULATION FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  F(x) = ∫₀ˣ f(t) dt

As x changes, the amount of accumulated area changes.

For example:
  F(1) = ∫₀¹ f(t) dt
  F(2) = ∫₀² f(t) dt
  F(3) = ∫₀³ f(t) dt

So F(x) keeps track of the accumulated area from 0 to x.

The derivative F'(x) tells us how quickly this accumulated area is changing.

FTC Part 1 says:
  F'(x) = f(x)

The rate at which area accumulates is exactly the height of the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. VISUAL INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine a function f(x) and the accumulated area:
  F(x) = ∫ₐˣ f(t) dt

When x moves slightly to the right, the accumulated area changes by approximately:
  height × width

That is:
  ΔF ≈ f(x) Δx

Divide by Δx:
  ΔF/Δx ≈ f(x)

As Δx → 0, we get:
  F'(x) = f(x)

This is the fundamental idea behind FTC Part 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫₀ˣ t² dt

Find F'(x).

According to FTC Part 1:
  F'(x) = x²

That's it!

We don't even need to evaluate the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY DOES THE VARIABLE CHANGE FROM x TO t?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You might wonder why we write:
  F(x) = ∫ₐˣ f(t) dt

instead of:
  F(x) = ∫ₐˣ f(x) dx

The variable t is called a dummy variable of integration.

For example:
  ∫₀ˣ t² dt
and:
  ∫₀ˣ u² du

represent the same type of accumulation.

We use t to distinguish the variable being integrated from the upper limit x.

So:
  t = integration variable
while:
  x = upper-limit variable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the derivative:
  F(x) = ∫₂ˣ (3t² + 4t - 1) dt

By FTC Part 1:
  F'(x) = 3x² + 4x - 1

Simply replace the integration variable t with x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find F'(x) if:
  F(x) = ∫₁ˣ sin(t) dt

Using FTC Part 1:
  F'(x) = sin(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫₀ˣ eᵗ dt

Then:
  F'(x) = eˣ

Again, we don't need to calculate the integral first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHAT IF THE LOWER LIMIT ISN'T ZERO?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It doesn't matter.

For:
  F(x) = ∫₅ˣ f(t) dt

FTC Part 1 still gives:
  F'(x) = f(x)

The fixed lower limit can be any constant.

For example:
  F(x) = ∫₋₃ˣ cos(t) dt

gives:
  F'(x) = cos(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. WHAT IF THERE IS A CONSTANT MULTIPLIER?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = 7∫₂ˣ f(t) dt

The constant remains:
  F'(x) = 7f(x)

Therefore:
  d/dx [7∫₂ˣ f(t) dt] = 7f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHAT IF THE UPPER LIMIT IS SOMETHING OTHER THAN x?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is where FTC Part 1 combines with the Chain Rule.

Suppose:
  F(x) = ∫ₐ^(g(x)) f(t) dt

Then:
  F'(x) = f(g(x)) · g'(x)

This is extremely important.

The process is:
  • Evaluate the integrand at the upper limit.
  • Multiply by the derivative of the upper limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE WITH A FUNCTION AS THE UPPER LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫₀^(x²) t³ dt

The upper limit is:
  g(x) = x²

First evaluate the integrand at x²:
  (x²)³ = x⁶

Then multiply by:
  g'(x) = 2x

Therefore:
  F'(x) = x⁶(2x)
  F'(x) = 2x⁷

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find:
  d/dx [∫₁^(3x) √t dt]

The upper limit is:
  g(x) = 3x

The integrand is:
  f(t) = √t

Evaluate at 3x:
  f(3x) = √(3x)

Differentiate the upper limit:
  g'(x) = 3

Therefore:
  F'(x) = 3√(3x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH A MORE COMPLICATED UPPER LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find:
  d/dx [∫₂^(x³+1) cos(t) dt]

Here:
  g(x) = x³ + 1

Therefore:
  g'(x) = 3x²

Evaluate the integrand at g(x):
  cos(x³ + 1)

Multiply:
  F'(x) = 3x² cos(x³ + 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHAT IF THE VARIABLE IS IN THE LOWER LIMIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫ₓᵃ f(t) dt

We can use the reverse-limit property:
  ∫ₓᵃ f(t) dt = -∫ₐˣ f(t) dt

Therefore:
  F'(x) = -f(x)

So:
  d/dx [∫ₓᵃ f(t) dt] = -f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find:
  d/dx [∫ₓ⁵ t² dt]

Since x is the lower limit:
  F'(x) = -x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. VARIABLE IN BOTH LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫_(g(x))^(h(x)) f(t) dt

Then:
  F'(x) = f(h(x))·h'(x) - f(g(x))·g'(x)

This is a more general form of FTC Part 1 combined with the Chain Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find:
  d/dx [∫ₓ^(x²) t³ dt]

Upper limit:
  h(x) = x², so h'(x) = 2x

Lower limit:
  g(x) = x, so g'(x) = 1

Therefore:
  F'(x) = (x²)³(2x) - x³(1)

Simplify:
  = 2x⁷ - x³

Thus:
  F'(x) = 2x⁷ - x³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FTC PART 1 AND ANTIDERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FTC Part 1 explains why antiderivatives and definite integrals are connected.

Suppose:
  F(x) = ∫ₐˣ f(t) dt

Then:
  F'(x) = f(x)

Therefore, F(x) is an antiderivative of f(x).

This means:
  ∫ₐˣ f(t) dt

actually constructs an antiderivative of f.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. CONNECTION TO THE AREA FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  A(x) = ∫ₐˣ f(t) dt

Then:
  A'(x) = f(x)

This means:
  The derivative of the accumulated area is the original function.

If the graph has a large positive height, the accumulated area increases rapidly.
If the graph is near zero, the accumulated area changes slowly.
If the graph is below the x-axis, the accumulated area decreases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. WHY CONTINUITY MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FTC Part 1 usually assumes that:
  f is continuous on [a, b]

This ensures that the function behaves sufficiently well for the accumulation function to be differentiable in the expected way.

So a common theorem statement is:

  If f is continuous on an interval containing a, then the function
    F(x) = ∫ₐˣ f(t) dt
  is differentiable, and
    F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. FTC PART 1 VS. FTC PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two are closely related but serve different purposes.

FTC Part 1:
  Tells us how to differentiate an integral:
    d/dx [∫ₐˣ f(t) dt] = f(x)
  It connects: Integration → Differentiation

FTC Part 2:
  Tells us how to evaluate a definite integral using an antiderivative:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
  where F'(x) = f(x).
  It connects: Differentiation → Integration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. SIMPLE WAY TO REMEMBER THE DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Part 1:
  Derivative of an integral
    d/dx ∫ₐˣ f(t) dt = f(x)
  Think: Derivative cancels the accumulation.

Part 2:
  Integral using an antiderivative
    ∫ₐᵇ f(x) dx = F(b) - F(a)
  Think: Find an antiderivative, then evaluate the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting to replace t with x
  If F(x) = ∫₀ˣ t⁴ dt, the answer is:
    F'(x) = x⁴
  not t⁴.

Mistake 2: Forgetting the Chain Rule
  For F(x) = ∫₀^(x²) t⁴ dt, the answer is not simply x⁸.
  You must multiply by 2x.
  Therefore:
    F'(x) = 2x⁹
  because:
    (x²)⁴(2x) = 2x⁹

Mistake 3: Forgetting the negative sign for a variable lower limit
  For F(x) = ∫ₓ⁵ t² dt, the answer is:
    -x²
  not x².

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. QUICK RECOGNITION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form 1:
  ∫ₐˣ f(t) dt
  Answer: f(x)

Form 2:
  ∫ₐ^(g(x)) f(t) dt
  Answer: f(g(x))·g'(x)

Form 3:
  ∫_(g(x))ᵃ f(t) dt
  Answer: -f(g(x))·g'(x)

Form 4:
  ∫_(g(x))^(h(x)) f(t) dt
  Answer: f(h(x))·h'(x) - f(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                                 |  Derivative
  ───────────────────────────────────────────────────────────────────────────────────────
  d/dx ∫ₐˣ f(t) dt                             f(x)
  d/dx ∫ₐ^(g(x)) f(t) dt                       f(g(x))·g'(x)
  d/dx ∫_(g(x))ᵃ f(t) dt                       -f(g(x))·g'(x)
  d/dx ∫_(g(x))^(h(x)) f(t) dt                 f(h(x))·h'(x) - f(g(x))·g'(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus Part 1 reveals one of the most important relationships in mathematics:

  Accumulation → Rate of Accumulation

If:
  F(x) = ∫ₐˣ f(t) dt

then:
  F'(x) = f(x)

So the integral builds an accumulation function, and differentiation tells us how quickly that accumulation is changing.

The most important formula to memorize:
  d/dx [∫ₐˣ f(t) dt] = f(x)

And when the upper limit is a function:
  d/dx [∫ₐ^(g(x)) f(t) dt] = f(g(x))·g'(x)

In simple terms:
  FTC Part 1 says that differentiation and accumulation through integration are 
  inverse processes. The derivative of an accumulated area function gives back 
  the original function.
  `,
  examples: [
    "d/dx ∫₀ˣ t² dt = x²",
    "d/dx ∫₂ˣ (3t² + 4t - 1) dt = 3x² + 4x - 1",
    "d/dx ∫₁ˣ sin(t) dt = sin(x)",
    "d/dx ∫₀ˣ eᵗ dt = eˣ",
    "d/dx ∫₀^(x²) t³ dt = 2x⁷",
    "d/dx ∫₂^(x³+1) cos(t) dt = 3x² cos(x³+1)",
    "d/dx ∫ₓ^(x²) t³ dt = 2x⁷ - x³",
  ],
};

export default topic;