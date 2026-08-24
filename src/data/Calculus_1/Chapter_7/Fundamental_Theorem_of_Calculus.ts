// filename: fundamental-theorem-of-calculus.ts

const topic = {
  id: "fundamental-theorem-of-calculus",
  title: "Fundamental Theorem of Calculus",
  summary:
    "One of the most important ideas in calculus, establishing the powerful relationship between differentiation and integration as inverse processes, with two major parts.",
  details: `
The Fundamental Theorem of Calculus (FTC) is one of the most important ideas in all of Calculus. It establishes the powerful relationship between:
  Differentiation
and:
  Integration

These two operations may seem different:
  • Differentiation studies rates of change and slopes.
  • Integration studies accumulation, total change, and area.

However, the Fundamental Theorem of Calculus shows that they are actually inverse processes.

The main idea is:
  Differentiation and Integration undo each other

The theorem has two major parts:
  • Fundamental Theorem of Calculus Part 1
  • Fundamental Theorem of Calculus Part 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY IS IT CALLED "FUNDAMENTAL"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before Calculus, mathematicians had separate methods for:
  • Finding slopes and rates of change
  • Finding areas and accumulated quantities

The Fundamental Theorem of Calculus connects these two ideas.

It shows:
  Area Accumulation ↔ Rate of Change

This connection allows us to calculate complicated areas using antiderivatives instead of adding infinitely many rectangles manually.

For example, instead of evaluating:
  lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) Δx

we can often simply find an antiderivative and evaluate it at the endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FUNDAMENTAL THEOREM OF CALCULUS PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Statement:
  Suppose F(x) = ∫ₐˣ f(t) dt.

  If f is continuous, then:
    F'(x) = f(x)

This is one of the most beautiful results in Calculus.

It says that if you create a function by accumulating area under another function, then differentiating the accumulated area gives you back the original function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. UNDERSTANDING PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  F(x) = ∫ₐˣ f(t) dt

This means that F(x) represents the accumulated area from a to x.

Notice that the upper limit is a variable.

As x changes, the accumulated area changes.

The theorem says:
  d/dx (∫ₐˣ f(t) dt) = f(x)

Therefore:
  Derivative of Accumulated Area = Original Function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE 1: PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫₀ˣ t² dt

According to the Fundamental Theorem of Calculus:
  F'(x) = x²

We do not need to evaluate the integral first.

Therefore:
  d/dx (∫₀ˣ t² dt) = x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY DO WE USE t INSIDE THE INTEGRAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  F(x) = ∫₀ˣ t² dt

We use t because x is already being used as the upper limit.

The variable t is called a dummy variable.

It can be replaced with another letter:
  ∫₀ˣ u² du
or:
  ∫₀ˣ z² dz

All of these represent the same accumulated value:
  ∫₀ˣ t² dt = ∫₀ˣ u² du

The variable inside the integral is temporary. The final answer depends on the limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 2: PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  G(x) = ∫₂ˣ (3t² + 4) dt

Using FTC Part 1:
  G'(x) = 3x² + 4

Again, the derivative cancels the integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. VISUAL MEANING OF PART 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine that:
  F(x) = ∫ₐˣ f(t) dt

represents the total accumulated area from a to x.

As x moves slightly to the right, a small additional area is added.

The rate at which the area changes is approximately the height of the curve:
  f(x)

Therefore:
  F'(x) = f(x)

This is the deep connection between accumulation and instantaneous rate of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. FUNDAMENTAL THEOREM OF CALCULUS PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Statement:
  Suppose F'(x) = f(x).

  Then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

This allows us to evaluate definite integrals using antiderivatives.

This is commonly called the Evaluation Theorem.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. UNDERSTANDING PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we want to calculate:
  ∫ₐᵇ f(x) dx

Without the Fundamental Theorem of Calculus, we might need to use Riemann sums:
  Σᵢ₌₁ⁿ f(xᵢ) Δx

and then take the limit:
  n → ∞

But FTC Part 2 gives us a shortcut.

Step 1: Find an antiderivative
  Find F(x) such that F'(x) = f(x).

Step 2: Evaluate the upper limit
  F(b)

Step 3: Evaluate the lower limit
  F(a)

Step 4: Subtract
  F(b) - F(a)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE 3: USING FTC PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₁⁴ x² dx

Step 1: Find the antiderivative
  ∫ x² dx = x³/3

Therefore:
  F(x) = x³/3

Step 2: Apply the theorem
  ∫₁⁴ x² dx = [x³/3]₁⁴

Step 3: Substitute the upper limit
  4³/3 = 64/3

Step 4: Substitute the lower limit
  1³/3 = 1/3

Step 5: Subtract
  64/3 - 1/3 = 63/3 = 21

Therefore:
  ∫₁⁴ x² dx = 21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE BRACKET NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A definite integral is often written using brackets:
  [F(x)]ₐᵇ

This means:
  F(b) - F(a)

For example:
  [x³/3]₁⁴

means:
  4³/3 - 1³/3

Always remember:
  Upper Limit - Lower Limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE 4: POLYNOMIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫₀³ (2x + 3) dx

Step 1: Find the antiderivative
  ∫ (2x + 3) dx = x² + 3x

Step 2: Apply the limits
  [x² + 3x]₀³

Step 3: Substitute
  (3² + 3(3)) - (0² + 3(0))
  = (9 + 9) - 0
  = 18

Therefore:
  ∫₀³ (2x + 3) dx = 18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONNECTION BETWEEN PART 1 AND PART 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The two parts of the Fundamental Theorem of Calculus are closely connected.

Part 1:
  Start with integration:
    F(x) = ∫ₐˣ f(t) dt

  Differentiate:
    F'(x) = f(x)

  Integration followed by differentiation returns the original function.

Part 2:
  Start with a function f(x).

  Find an antiderivative F(x).

  Then:
    ∫ₐᵇ f(x) dx = F(b) - F(a)

  Differentiation and integration work together to calculate accumulated quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. A SIMPLE ANALOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of differentiation and integration as opposite operations.

Similar to:
  Addition ↔ Subtraction
or:
  Multiplication ↔ Division

we have:
  Differentiation ↔ Integration

For example:
  d/dx (x³) = 3x²

Therefore:
  ∫ 3x² dx = x³ + C

Differentiation and integration reverse each other.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. FTC PART 1 WITH A MORE COMPLICATED UPPER LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  F(x) = ∫₀^(x²) t³ dt

The upper limit is not simply x. It is x².

We use the Fundamental Theorem of Calculus together with the Chain Rule.

First:
  d/dx (∫₀^(x²) t³ dt)

Using FTC Part 1:
  = (x²)³

Then multiply by the derivative of the upper limit:
  d/dx (x²) = 2x

Therefore:
  F'(x) = 2x(x²)³

Simplify:
  F'(x) = 2x⁷

This is an important extension of FTC Part 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. EXAMPLE WITH BOTH LIMITS CHANGING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  H(x) = ∫ₓ^(x²) t² dt

Both limits depend on x.

The derivative is:
  H'(x) = (x²)²(2x) - x²(1)

Simplify:
  H'(x) = 2x⁵ - x²

The general rule is:
  d/dx ∫_(u(x))^(v(x)) f(t) dt = f(v(x))v'(x) - f(u(x))u'(x)

This is sometimes called the Leibniz Rule for variable limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FTC AND AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One major application of the Fundamental Theorem of Calculus is finding area.

If f(x) ≥ 0 on [a, b], then:
  A = ∫ₐᵇ f(x) dx

Using FTC Part 2:
  A = F(b) - F(a)

This means that instead of manually adding infinitely many tiny rectangles, we can calculate the exact area using an antiderivative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE: AREA UNDER A CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the area under:
  y = x²

from:
  x = 0 to x = 2

Set up the integral:
  A = ∫₀² x² dx

Find the antiderivative:
  F(x) = x³/3

Apply FTC:
  A = [x³/3]₀² = 8/3 - 0

Therefore:
  A = 8/3 square units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPORTANT CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus works under appropriate conditions.

For the standard version:
  f(x) should be continuous on the interval [a, b].

Continuity means that the graph has no breaks, holes, or jumps within the interval.

For most introductory Calculus problems, functions such as:
  x², x³, sin x, cos x, eˣ

are continuous on their normal domains.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the Lower Limit
  Remember: F(b) - F(a)
  Do not stop after calculating F(b).
  You must subtract F(a).

Mistake 2: Reversing the Order
  The correct order is: Upper - Lower
  Not: Lower - Upper

Mistake 3: Adding +C to a Definite Integral
  For an indefinite integral:
    ∫ f(x) dx = F(x) + C
  But for a definite integral:
    ∫ₐᵇ f(x) dx
  we do not normally include +C, because it cancels:
    [F(x) + C]ₐᵇ = (F(b) + C) - (F(a) + C) = F(b) - F(a)

Mistake 4: Forgetting the Chain Rule
  For:
    d/dx [∫₀^(x²) f(t) dt]
  the answer is not simply f(x²).
  You must multiply by d/dx (x²).
  Therefore: f(x²)(2x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Part                 Formula                                                         Main Idea
  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  FTC Part 1        d/dx ∫ₐˣ f(t) dt = f(x)                                        Derivative of accumulation
  FTC Part 2        ∫ₐᵇ f(x) dx = F(b) - F(a)                                      Evaluate integral using antiderivative
  Variable upper    d/dx ∫ₐ^(g(x)) f(t) dt = f(g(x))g'(x)                          FTC + Chain Rule
  Both limits       d/dx ∫_(u(x))^(v(x)) f(t) dt = f(v)v' - f(u)u'                 Rate of change with moving boundaries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. QUICK SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Fundamental Theorem of Calculus connects the two major branches of Calculus:
  Derivatives ↔ Integrals

Part 1:
  d/dx (∫ₐˣ f(t) dt) = f(x)

  It tells us that differentiating an accumulated integral returns the original function.

Part 2:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

  where F'(x) = f(x).

  It allows us to calculate definite integrals quickly using antiderivatives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Integration accumulates quantities, while differentiation measures their rate of change.

The Fundamental Theorem of Calculus proves that these two processes are deeply connected and, in many situations, act as inverse operations. This theorem is the foundation for evaluating definite integrals and is one of the central ideas that makes Calculus so powerful.
  `,
  examples: [
    "FTC Part 1: d/dx ∫₀ˣ t² dt = x²",
    "FTC Part 1: d/dx ∫₂ˣ (3t²+4) dt = 3x²+4",
    "FTC Part 2: ∫₁⁴ x² dx = [x³/3]₁⁴ = 21",
    "FTC Part 2: ∫₀³ (2x+3) dx = [x²+3x]₀³ = 18",
    "Variable upper limit: d/dx ∫₀^(x²) t³ dt = 2x⁷",
    "Both limits: d/dx ∫ₓ^(x²) t² dt = 2x⁵ - x²",
    "Area under y=x² from 0 to 2: A = ∫₀² x² dx = 8/3",
  ],
};

export default topic;