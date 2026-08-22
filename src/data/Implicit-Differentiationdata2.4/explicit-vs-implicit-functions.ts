const topic = {
  id: "explicit-vs-implicit-functions",
  title: "Explicit vs. Implicit Functions",
  summary:
    "Definition of explicit and implicit functions, differences, converting between forms, and connection to implicit differentiation.",
  details: `
Explicit and implicit functions describe two different ways of representing a relationship between variables.

This topic is especially important because it helps you understand implicit differentiation, which is commonly used when an equation does not have y isolated on one side.

The main idea is:
  • Explicit: y is isolated
  • Implicit: x and y are mixed together

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS AN EXPLICIT FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An explicit function is a function where the dependent variable, usually y, is clearly isolated in terms of x.

The general form is: y = f(x)

Example: y = 2x + 5

Here, y is directly written in terms of x.

Another example: y = x² + 3x - 4

We can immediately determine the value of y when we know x.

Example: if x = 2, then:
  y = (2)² + 3(2) - 4
  y = 4 + 6 - 4
  y = 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY IS IT CALLED "EXPLICIT"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word explicit means something is stated or shown clearly.

In y = x² + 3, the value of y is explicitly given by the expression x² + 3.

You don't need to solve anything first. You can simply substitute x.

So: y = f(x) is the standard form of an explicit function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLES OF EXPLICIT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Linear: y = 3x + 2
  • Quadratic: y = x² - 4x + 1
  • Cubic: y = x³ + 2x
  • Rational: y = (x + 1)/(x - 2)
  • Exponential: y = 2ˣ
  • Logarithmic: y = ln(x)
  • Trigonometric: y = sin(x)

All of these explicitly give y in terms of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHAT IS AN IMPLICIT FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An implicit function is represented by an equation where x and y appear together and y is not necessarily isolated.

A common form is: F(x, y) = 0

Example: x² + y² = 25

Here, x and y are mixed together.

We do not immediately have y = f(x). Instead, the equation describes a relationship between x and y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE OF AN IMPLICIT EQUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x² + y² = 25

This represents a circle centered at (0, 0) with radius 5.

The equation does not initially tell us y = something. Instead, it tells us that x and y must satisfy: x² + y² = 25.

Example: (3, 4) works because 3² + 4² = 25.

Similarly, (-3, 4) also works: (-3)² + 4² = 25.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXPLICIT VS. IMPLICIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explicit:
  • y is isolated
  • y = f(x)
  • Directly gives y
  • Usually easier to differentiate
  • Example: y = x² + 1

Implicit:
  • x and y are mixed
  • F(x, y) = 0
  • Gives a relationship between x and y
  • Often requires implicit differentiation
  • Example: x² + y² = 25

So: Explicit: y = expression involving x, while Implicit: equation involving both x and y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CAN AN IMPLICIT EQUATION BE CONVERTED TO AN EXPLICIT FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes, yes.

Consider: x² + y² = 25

Solve for y.

  y² = 25 - x²
  y = ±√(25 - x²)

Therefore: y = ±√(25 - x²)

This is an explicit representation.

However, notice something important:
  • y = +√(25 - x²) describes the upper half of the circle.
  • y = -√(25 - x²) describes the lower half.

So the original implicit equation represents both branches at once.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY IMPLICIT EQUATIONS ARE USEFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes solving for y explicitly is:
  • difficult,
  • messy,
  • impossible using elementary functions,
  • or produces multiple branches.

Example: x³ + y³ = 6xy

This equation is much more complicated to solve explicitly for y.

Instead of solving for y, we can differentiate the equation as it is. That's called: Implicit Differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's compare the process.

Suppose: y = x³ + 2x

Since y is already isolated, differentiate normally:

  dy/dx = 3x² + 2

Very straightforward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now consider: x² + y² = 25

We want: dy/dx

Differentiate both sides with respect to x:

  d/dx(x² + y²) = d/dx(25)

For x²: 2x

For y², we must remember that y depends on x.

Therefore: d/dx(y²) = 2y·dy/dx

So: 2x + 2y·dy/dx = 0

Now solve for dy/dx:

  2y·dy/dx = -2x
  dy/dx = -x/y

This is the derivative of the circle without explicitly solving for y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY DOES y PRODUCE dy/dx?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the most important idea in implicit differentiation.

When we differentiate x², we get 2x because x is the independent variable.

But when we differentiate y², we need to remember that: y = y(x)

So we use the Chain Rule: d/dx(y²) = 2y·dy/dx

Therefore: d/dx(yⁿ) = n·yⁿ⁻¹·dy/dx

This is the foundation of implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x³ + y³ = 16

Differentiate both sides: 3x² + 3y²·dy/dx = 0

Move 3x²: 3y²·dy/dx = -3x²

Divide: dy/dx = -x²/y²

Notice how the derivative of y³ includes dy/dx because y depends on x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXPLICIT AND IMPLICIT EQUATIONS CAN DESCRIBE THE SAME CURVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an important concept.

Consider: x² + y² = 25

This is the implicit form.

We can rewrite it as: y = ±√(25 - x²)

This is an explicit representation.

So: One curve can have both an implicit and explicit representation.

However, the explicit form may require multiple functions to represent the entire curve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. EXAMPLE: CIRCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit: x² + y² = 25

Explicit: y = √(25 - x²) and y = -√(25 - x²)

The implicit equation represents the whole circle.

The explicit equations represent the upper and lower portions separately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXPLICIT FUNCTIONS ARE NOT ALWAYS BETTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You might think: "Why not always solve for y?"

Sometimes doing so makes the equation much harder to work with.

Example: x² + y² = 25 is simple.

But: y = ±√(25 - x²) is already more complicated.

And for some equations, solving for y can be extremely difficult.

Example: x = eʸ + y

There may not be a simple elementary expression for y in terms of x.

Yet we can still study the relationship using implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. IMPLICIT FUNCTIONS DON'T ALWAYS PASS THE VERTICAL LINE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An explicit function y = f(x) must assign one y-value to each allowed x.

This is related to the Vertical Line Test.

For the circle x² + y² = 25, take x = 0.

Then: y² = 25, so y = ±5.

There are two y-values: 5 and -5.

Therefore the entire circle is not a function of x.

However, it is an implicit relation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. UPPER AND LOWER CIRCLE AS FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The upper half: y = √(25 - x²) passes the vertical line test.

The lower half: y = -√(25 - x²) also passes the vertical line test.

So each half can be treated as an explicit function.

But the entire circle cannot be represented by a single-valued function y = f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXPLICIT FUNCTION EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: y = 2x³ - 5x + 1

We can directly calculate y.

If x = 2, then:
  y = 2(2)³ - 5(2) + 1
  y = 16 - 10 + 1
  y = 7

Everything is directly defined.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. IMPLICIT FUNCTION EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x² + xy + y² = 7

Here, x and y appear together. There is no immediate y = f(x) form.

We can still differentiate.

Differentiate:
  d/dx(x²) + d/dx(xy) + d/dx(y²) = d/dx(7)

We get: 2x + (x·dy/dx + y) + 2y·dy/dx = 0

Group the derivative terms: x·dy/dx + 2y·dy/dx = -2x - y

Factor: (x + 2y)·dy/dx = -2x - y

Therefore: dy/dx = -(2x + y)/(x + 2y)

This is a good example of why implicit differentiation is useful.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXPLICIT VS. IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explicit:
  If y = x³ + 4x, differentiate directly: dy/dx = 3x² + 4

Implicit:
  If x³ + y³ = 8, differentiate both sides: 3x² + 3y²·dy/dx = 0
  Then solve: dy/dx = -x²/y²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feature: General form
Explicit vs. Implicit: y = f(x) vs. F(x, y) = 0

Feature: Is y isolated?
Explicit vs. Implicit: Usually yes vs. Usually no

Feature: x and y mixed?
Explicit vs. Implicit: Usually no vs. Often yes

Feature: Direct evaluation
Explicit vs. Implicit: Easy vs. May require solving

Feature: Differentiation
Explicit vs. Implicit: Usually direct vs. Often requires implicit differentiation

Feature: Example
Explicit vs. Implicit: y = x² + 3 vs. x² + y² = 25

Feature: Can represent multiple branches?
Explicit vs. Implicit: Usually one branch vs. Yes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting the Chain Rule
  Wrong: d/dx(y²) = 2y
  Correct: d/dx(y²) = 2y·dy/dx
  because y depends on x.

❌ Mistake 2: Treating y as a constant
  When differentiating with respect to x, y is not necessarily constant in an implicit equation.
  Example: d/dx(y³) = 3y²·dy/dx

❌ Mistake 3: Assuming Every Equation Is an Explicit Function
  An equation like x² + y² = 25 is not initially in the form y = f(x).
  It is an implicit relation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. A USEFUL WAY TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think:

Explicit: "Tell me y." y = 3x² + 1
  The equation directly tells you what y is.

Implicit: "I know how x and y are related." x² + y² = 25
  The equation doesn't directly isolate y, but it tells us how x and y must relate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. CONNECTION TO IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This topic naturally leads to: Implicit Differentiation

The general process is:

Step 1: Start with an equation involving x and y. F(x, y) = 0

Step 2: Differentiate both sides with respect to x.

Step 3: Whenever you differentiate a term containing y, remember: d/dx(y) = dy/dx

Step 4: Use the Chain Rule and Product Rule when necessary.

Step 5: Collect all terms containing dy/dx.

Step 6: Solve for dy/dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Explicit vs. Implicit Functions, remember:

  • Explicit: y = f(x) — y is directly expressed in terms of x.
  • Implicit: F(x, y) = 0 — x and y are related by an equation.

The key differentiation rule for implicit functions is:

  d/dx[g(y)] = g'(y)·dy/dx

Examples:
  • d/dx(y²) = 2y·dy/dx
  • d/dx(y³) = 3y²·dy/dx
  • d/dx(sin(y)) = cos(y)·dy/dx

Once you understand why dy/dx appears whenever you differentiate y, implicit differentiation becomes much easier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explicit vs. Implicit Functions is a fundamental distinction that prepares students for implicit differentiation.

Key concepts covered:

  ✓ What Is an Explicit Function?
  ✓ Why Is It Called "Explicit"?
  ✓ Examples of Explicit Functions
  ✓ What Is an Implicit Function?
  ✓ Example of an Implicit Equation
  ✓ Explicit vs. Implicit Comparison
  ✓ Converting Implicit to Explicit
  ✓ Why Implicit Equations Are Useful
  ✓ Explicit Differentiation
  ✓ Implicit Differentiation
  ✓ Why y Produces dy/dx
  ✓ Explicit and Implicit Equations Describe the Same Curve
  ✓ Vertical Line Test
  ✓ Key Differences
  ✓ Common Mistakes
  ✓ Connection to Implicit Differentiation
  `,
  examples: [
    "Explicit: y = 2x + 5",
    "Explicit: y = x² + 3x - 4",
    "Explicit: y = sin(x)",
    "Implicit: x² + y² = 25",
    "Implicit: x³ + y³ = 16",
    "Implicit: x² + xy + y² = 7",
    "Convert: x² + y² = 25 → y = ±√(25 - x²)",
    "Explicit differentiation: y = x³ + 2x → dy/dx = 3x² + 2",
    "Implicit differentiation: x² + y² = 25 → dy/dx = -x/y",
    "Implicit differentiation: x³ + y³ = 16 → dy/dx = -x²/y²",
    "Implicit differentiation: x² + xy + y² = 7 → dy/dx = -(2x+y)/(x+2y)",
    "Circle: implicit represents whole, explicit represents halves",
    "d/dx(y²) = 2y·dy/dx (Chain Rule)",
    "d/dx(y³) = 3y²·dy/dx",
    "d/dx(sin(y)) = cos(y)·dy/dx",
    "Explicit: y is isolated; Implicit: x and y are mixed",
  ],
};

export default topic;