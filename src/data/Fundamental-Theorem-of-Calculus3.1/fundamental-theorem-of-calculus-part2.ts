// filename: fundamental-theorem-of-calculus-part2.ts

const topic = {
  id: "fundamental-theorem-of-calculus-part2",
  title: "Fundamental Theorem of Calculus — Part 2",
  summary:
    "A fundamental theorem that provides a practical way to evaluate definite integrals using antiderivatives, stating that ∫ₐᵇ f(x) dx = F(b) - F(a) where F'(x) = f(x).",
  details: `
The Fundamental Theorem of Calculus Part 2 (FTC Part 2) is one of the most important theorems in calculus because it gives us a practical way to evaluate definite integrals using antiderivatives.

In simple terms:

  To evaluate a definite integral, find an antiderivative, evaluate it at the 
  upper and lower limits, and subtract.

The main formula is:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

where:
  F'(x) = f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to evaluate:
  ∫ₐᵇ f(x) dx

If we can find a function F(x) whose derivative is f(x):
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This saves us from having to calculate the area directly using infinitely many rectangles.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT CALLED THE FUNDAMENTAL THEOREM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before this theorem, calculating areas under curves could be extremely difficult.

For simple shapes, we know formulas:
  A_rectangle = bh
  A_triangle = (1/2)bh
  A_circle = πr²

But what about a complicated curve such as y = x³ + 2x?

There isn't usually a simple geometric area formula.

FTC Part 2 gives us a powerful alternative:
  Area/Accumulation → Antiderivative → Evaluate endpoints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE FUNDAMENTAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If f is continuous on [a, b], and F is any antiderivative of f, meaning:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

This is sometimes called the Newton–Leibniz formula.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT DOES F(b) - F(a) MEAN?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The expression F(b) - F(a) means:
  • Find the antiderivative F(x).
  • Substitute the upper limit b.
  • Substitute the lower limit a.
  • Subtract.

A convenient notation is:
  [F(x)]ₐᵇ

which means:
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀² x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

So:
  F(x) = x³/3

Step 2: Evaluate the upper limit
  F(2) = 2³/3 = 8/3

Step 3: Evaluate the lower limit
  F(0) = 0³/3 = 0

Step 4: Subtract
  F(2) - F(0) = 8/3 - 0

Therefore:
  ∫₀² x² dx = 8/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE FOUR-STEP METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For almost every basic definite integral, use this process:

Step 1 — Find an antiderivative
  Find F(x) such that F'(x) = f(x).

Step 2 — Substitute the upper limit
  Calculate F(b).

Step 3 — Substitute the lower limit
  Calculate F(a).

Step 4 — Subtract
  F(b) - F(a)

That's FTC Part 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH A POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁³ (3x² + 4x - 5) dx

Step 1: Find the antiderivative
  ∫ (3x² + 4x - 5) dx
  = x³ + 2x² - 5x

So:
  F(x) = x³ + 2x² - 5x

Step 2: Evaluate at 3
  F(3) = 27 + 18 - 15 = 30

Step 3: Evaluate at 1
  F(1) = 1 + 2 - 5 = -2

Step 4: Subtract
  F(3) - F(1) = 30 - (-2) = 32

Therefore:
  ∫₁³ (3x² + 4x - 5) dx = 32

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY DON'T WE ADD +C?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important difference between indefinite and definite integrals.

For an indefinite integral:
  ∫ x² dx = x³/3 + C

But for a definite integral:
  ∫₀² x² dx

we can use:
  F(x) = x³/3

without +C.

Why?
  Suppose we included it:
    F(b) - F(a) = (F(b) + C) - (F(a) + C)

  The constants cancel:
    C - C = 0

Therefore:
  No +C is needed for definite integrals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INDEFINITE VS. DEFINITE INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Indefinite Integral:
  ∫ f(x) dx = F(x) + C
  Produces a family of antiderivatives.

Definite Integral:
  ∫ₐᵇ f(x) dx = F(b) - F(a)
  Produces a single numerical value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀^(π/2) cos x dx

An antiderivative of cos x is:
  sin x

Therefore:
  [sin x]₀^(π/2)

Evaluate:
  sin(π/2) - sin(0)
  = 1 - 0

Thus:
  ∫₀^(π/2) cos x dx = 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀^π sin x dx

An antiderivative is:
  -cos x

Therefore:
  [-cos x]₀^π

Evaluate:
  -cos(π) - [-cos(0)]

Since:
  cos(π) = -1
and:
  cos(0) = 1

we get:
  1 - (-1) = 2

Therefore:
  ∫₀^π sin x dx = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH AN EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀¹ eˣ dx

An antiderivative is:
  eˣ

Therefore:
  [eˣ]₀¹
  = e¹ - e⁰
  = e - 1

Thus:
  ∫₀¹ eˣ dx = e - 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁² 1/x dx

An antiderivative is:
  ln|x|

Therefore:
  [ln|x|]₁²

Since both values are positive:
  ln 2 - ln 1

Because:
  ln 1 = 0

we get:
  ln 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DEFINITE INTEGRALS CAN BE NEGATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral does not necessarily have to be positive.

Consider:
  ∫₀² (-x) dx

An antiderivative is:
  -x²/2

Therefore:
  [-x²/2]₀²
  = -2 - 0
  = -2

So:
  -2

The negative value occurs because the function lies below the x-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FTC PART 2 AND NET AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FTC Part 2 gives us a way to calculate the net area:
  Net Area = F(b) - F(a)

when:
  F'(x) = f(x)

Remember that areas below the x-axis contribute negatively.

If the problem asks for total geometric area, you may need to split the integral at the x-intercepts and make the negative regions positive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE: NET AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₋₁² x dx

Antiderivative:
  F(x) = x²/2

Therefore:
  [x²/2]₋₁²
  = 4/2 - 1/2
  = 2 - 1/2
  = 3/2

So the net area is:
  3/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FTC PART 2 AND THE AREA FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FTC Part 1 says:
  F'(x) = f(x)

when:
  F(x) = ∫ₐˣ f(t) dt

FTC Part 2 takes the relationship in the other direction.

If:
  F'(x) = f(x)

then:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

Together, the two parts establish that differentiation and integration are essentially inverse operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. WHY THE FORMULA WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F'(x) = f(x)

Consider:
  F(b) - F(a)

By the Fundamental Theorem of Calculus, this difference represents the accumulated change in F from a to b.

Since:
  F'(x) = f(x)

the accumulated change is:
  ∫ₐᵇ f(x) dx

Therefore:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE USING SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫₀¹ 2x(x² + 1)³ dx

This can be solved using substitution.

Let:
  u = x² + 1

Then:
  du = 2x dx

The integral becomes:
  ∫ u³ du

An antiderivative is:
  u⁴/4

Replace u:
  (x² + 1)⁴/4

Then evaluate:
  [(x² + 1)⁴/4]₀¹

At x = 1:
  (2)⁴/4 = 16/4 = 4

At x = 0:
  (1)⁴/4 = 1/4

Therefore:
  4 - 1/4 = 15/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. FTC PART 2 WITH SYMMETRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) is even.

Then:
  ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx

This can make FTC Part 2 calculations much faster.

For example:
  ∫₋₂² x² dx

Since x² is even:
  = 2∫₀² x² dx

Then:
  = 2[x³/3]₀²
  = 2(8/3)
  = 16/3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. FTC PART 2 AND THE AVERAGE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall the average value formula:
  f_avg = (1/(b - a)) ∫ₐᵇ f(x) dx

FTC Part 2 lets us rewrite the integral:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

Therefore:
  f_avg = (F(b) - F(a))/(b - a)

This connects the average value of a function directly to its antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Adding +C
  For ∫ₐᵇ f(x) dx, don't worry about +C.
  Use F(b) - F(a).

Mistake 2: Forgetting the lower limit
  Incorrect:
    F(b)
  Correct:
    F(b) - F(a)

Mistake 3: Getting the subtraction order wrong
  Always use:
    Upper value - Lower value
  That is:
    F(b) - F(a)

Mistake 4: Forgetting parentheses
  For example:
    F(b) - F(a)
  If F(a) = -5, then:
    F(b) - F(a) = F(b) - (-5)
  You must subtract the entire lower-limit value.

Mistake 5: Confusing net area with total area
  A definite integral gives signed/net area.
  If the graph crosses the x-axis and the question asks for total area, you may need to split the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. QUICK RECOGNITION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whenever you see:
  ∫ₐᵇ f(x) dx

ask:

1. Can I find an antiderivative?
  Find F'(x) = f(x).

2. Evaluate the upper limit
  F(b)

3. Evaluate the lower limit
  F(a)

4. Subtract
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Fundamental Theorem of Calculus Part 2:
    ∫ₐᵇ f(x) dx = F(b) - F(a)
    where F'(x) = f(x)

  Evaluation notation:
    [F(x)]ₐᵇ = F(b) - F(a)

  Average value using FTC Part 2:
    f_avg = (F(b) - F(a))/(b - a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. FTC PART 1 VS. PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Feature            FTC Part 1                         FTC Part 2
  ───────────────────────────────────────────────────────────────────────────────────────
  Main purpose       Differentiate an integral          Evaluate an integral
  Main formula       d/dx ∫ₐˣ f(t) dt = f(x)            ∫ₐᵇ f(x) dx = F(b) - F(a)
  Main idea          Accumulation → derivative          Antiderivative → accumulation
  Used for           Derivatives involving integrals    Definite integral calculations
  Key tool           FTC + Chain Rule                   Antiderivatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two parts of the Fundamental Theorem work together:

Part 1:
  d/dx [∫ₐˣ f(t) dt] = f(x)
  says:
    Differentiating an accumulated integral gives the original function.

Part 2:
  ∫ₐᵇ f(x) dx = F(b) - F(a)
  says:
    A definite integral can be evaluated using an antiderivative.

Together:
  Differentiation ↔ Integration

This is the central relationship of calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. SIMPLE MEMORY TRICK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember:
  FTC Part 1 = Derivative of an Integral
    D(∫) = function

  FTC Part 2 = Integral Using an Antiderivative
    ∫ = F(b) - F(a)

Or simply:
  Part 1: Differentiate the integral.
  Part 2: Evaluate the integral.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. FINAL EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁⁴ (2x + 3) dx

Find the antiderivative:
  F(x) = x² + 3x

Evaluate at 4:
  F(4) = 16 + 12 = 28

Evaluate at 1:
  F(1) = 1 + 3 = 4

Subtract:
  28 - 4 = 24

Therefore:
  ∫₁⁴ (2x + 3) dx = 24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. MOST IMPORTANT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you remember only one thing from FTC Part 2, remember:

  ∫ₐᵇ f(x) dx = F(b) - F(a) where F'(x) = f(x)

In simple terms:
  Find the antiderivative, plug in the upper limit, plug in the lower limit, and subtract.
  `,
  examples: [
    "∫₀² x² dx = [x³/3]₀² = 8/3",
    "∫₁³ (3x² + 4x - 5) dx = [x³ + 2x² - 5x]₁³ = 32",
    "∫₀^(π/2) cos x dx = [sin x]₀^(π/2) = 1",
    "∫₀^π sin x dx = [-cos x]₀^π = 2",
    "∫₀¹ eˣ dx = [eˣ]₀¹ = e - 1",
    "∫₁² 1/x dx = [ln|x|]₁² = ln 2",
    "∫₁⁴ (2x + 3) dx = [x² + 3x]₁⁴ = 24",
  ],
};

export default topic;