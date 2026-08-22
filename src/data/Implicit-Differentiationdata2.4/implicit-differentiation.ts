const topic = {
  id: "implicit-differentiation",
  title: "Implicit Differentiation",
  summary:
    "Definition of implicit differentiation, chain rule applications, product and quotient rules, and finding tangent lines.",
  details: `
Implicit differentiation is a technique used to find the derivative dy/dx when x and y are related by an equation and y is not isolated.

In a normal explicit function, we might have: y = x² + 3x, and differentiation is straightforward.

But sometimes we have an equation like: x² + y² = 25

Here, y is not isolated. Instead of solving for y first, we can differentiate the entire equation with respect to x.

That process is called: Implicit Differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have: F(x, y) = 0

Both x and y appear in the equation.

When differentiating with respect to x:
  • x is the independent variable.
  • y is treated as a function of x.

That means: y = y(x)

Therefore: dy/dx appears whenever we differentiate something involving y.

The basic process is: Differentiate both sides → collect dy/dx → solve for dy/dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DO WE NEED IMPLICIT DIFFERENTIATION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x² + y² = 25

You could solve for y: y = ±√(25 - x²)

But this gives two separate functions: y = √(25 - x²) and y = -√(25 - x²)

Instead, implicit differentiation lets us work directly with: x² + y² = 25

without solving for y.

This is especially useful for complicated equations where isolating y would be difficult or impossible using elementary algebra.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. THE MOST IMPORTANT RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important thing to remember is: d/dx(y) = dy/dx

Why? Because y is actually a function of x: y = y(x)

So when we differentiate y², we use the Chain Rule: d/dx(y²) = 2y·dy/dx

This is the key to implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BASIC RULES FOR IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are some important rules.

  • d/dx(y) = dy/dx
  • d/dx(y²) = 2y·dy/dx
  • d/dx(y³) = 3y²·dy/dx
  • d/dx(yⁿ) = n·yⁿ⁻¹·dy/dx
  • d/dx(sin(y)) = cos(y)·dy/dx
  • d/dx(cos(y)) = -sin(y)·dy/dx
  • d/dx(eʸ) = eʸ·dy/dx
  • d/dx(ln(y)) = (1/y)·dy/dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. BASIC EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's find: dy/dx for: x² + y² = 25

Step 1: Differentiate both sides
  d/dx(x² + y²) = d/dx(25)

Differentiate each term: 2x + 2y·dy/dx = 0

Notice that the y² term produced: 2y·dy/dx because of the Chain Rule.

Step 2: Move the 2x
  2y·dy/dx = -2x

Step 3: Divide by 2y
  dy/dx = -2x/(2y)

Therefore: dy/dx = -x/y

That's the derivative of the circle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHY DOES THE CHAIN RULE APPEAR?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is worth understanding deeply.

Suppose: y = x²

Then y depends on x.

Now consider: y²

Since y = y(x), we actually have: [y(x)]²

Using the Chain Rule: d/dx[y(x)]² = 2y(x)·y'(x)

Therefore: d/dx(y²) = 2y·dy/dx

So dy/dx doesn't just magically appear. It appears because y itself changes when x changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE WITH y³
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x³ + y³ = 16

Differentiate: 3x² + 3y²·dy/dx = 0

Move 3x²: 3y²·dy/dx = -3x²

Divide: dy/dx = -x²/y²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH xy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now let's make it slightly harder: x² + xy + y² = 10

We need to differentiate every term.

First term: d/dx(x²) = 2x

Second term: For xy, we need the Product Rule: d/dx(xy) = x·dy/dx + y

Third term: d/dx(y²) = 2y·dy/dx

Therefore: 2x + x·dy/dx + y + 2y·dy/dx = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. COLLECT THE dy/dx TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Group them: x·dy/dx + 2y·dy/dx = -2x - y

Factor: (x + 2y)·dy/dx = -2x - y

Divide: dy/dx = -(2x + y)/(x + 2y)

This is a very typical implicit differentiation problem because it requires both: Chain Rule and Product Rule.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE WITH TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: sin(y) + x² = 4

Differentiate: d/dx(sin(y)) + d/dx(x²) = 0

Using the Chain Rule: cos(y)·dy/dx + 2x = 0

Move 2x: cos(y)·dy/dx = -2x

Divide: dy/dx = -2x/cos(y)

or: dy/dx = -2x·sec(y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE WITH COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: x + cos(y) = 5

Differentiate: 1 - sin(y)·dy/dx = 0

Move: -sin(y)·dy/dx = -1

Therefore: dy/dx = 1/sin(y)

or: dy/dx = csc(y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. EXAMPLE WITH EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: x + eʸ = 10

Differentiate: 1 + eʸ·dy/dx = 0

Therefore: eʸ·dy/dx = -1

So: dy/dx = -e⁻ʸ

or: dy/dx = -1/eʸ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE WITH LOGARITHMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x + ln(y) = 5

Differentiate: 1 + (1/y)·dy/dx = 0

Therefore: (1/y)·dy/dx = -1

Multiply by y: dy/dx = -y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. PRODUCT RULE IN IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common difficult parts is differentiating a product involving x and y.

Suppose: xy

The Product Rule says: d/dx(u·v) = u'·v + u·v'

Let: u = x and v = y

Then: u' = 1 and v' = dy/dx

Therefore: d/dx(xy) = y + x·dy/dx

The order doesn't matter: y + x·dy/dx is the same as x·dy/dx + y.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUOTIENT RULE IN IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x/y

We could use the Quotient Rule: d/dx(x/y) = (y - x·dy/dx)/y²

Therefore: d/dx(x/y) = (y - x·y')/y² where y' = dy/dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. A MORE COMPLEX EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider: x²y + y³ = 7

We need to differentiate both terms.

For x²y, use the Product Rule: d/dx(x²y) = 2xy + x²·dy/dx

For y³, use the Chain Rule: d/dx(y³) = 3y²·dy/dx

Therefore: 2xy + x²·dy/dx + 3y²·dy/dx = 0

Collect the dy/dx terms: x²·dy/dx + 3y²·dy/dx = -2xy

Factor: (x² + 3y²)·dy/dx = -2xy

Divide: dy/dx = -2xy/(x² + 3y²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. FINDING THE SLOPE AT A SPECIFIC POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation becomes especially useful when a problem asks: "Find the slope of the curve at a particular point."

Consider: x² + y² = 25

We already found: dy/dx = -x/y

Suppose the point is: (3, 4)

Substitute: dy/dx = -3/4

Therefore: m = -3/4

The slope of the circle at (3, 4) is: -3/4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. FINDING THE TANGENT LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once we know the derivative, we can find the tangent line.

Using: m = -3/4 and point: (3, 4)

Use point-slope form: y - y₁ = m(x - x₁)

Therefore: y - 4 = -3/4(x - 3)

So the tangent line is: y - 4 = -3/4(x - 3).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SECOND DERIVATIVE OF AN IMPLICIT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation can also be used to find: d²y/dx²

For example: x² + y² = 25

We already know: y' = -x/y

Differentiate again: y'' = d/dx(-x/y)

Using the Quotient Rule: y'' = -(y - x·y')/y²

Therefore: d²y/dx² = -(y - x·dy/dx)/y²

We can then substitute: y' = -x/y to simplify further.

This is useful for determining the concavity of implicitly defined curves.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. IMPLICIT DIFFERENTIATION WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an implicit differentiation problem, follow this exact process.

Step 1 — Write the equation
  Example: x² + y² = 25

Step 2 — Differentiate both sides
  2x + 2y·y' = 0

Step 3 — Remember the Chain Rule
  Whenever you differentiate a y-term:
    • y → y'
    • y² → 2y·y'
    • y³ → 3y²·y'

Step 4 — Collect all y' terms
  2y·y' = -2x

Step 5 — Solve for y'
  y' = -x/y

Step 6 — If a point is given, substitute it
  For (3, 4): y' = -3/4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Forgetting dy/dx
  Incorrect: d/dx(y²) = 2y
  Correct: d/dx(y²) = 2y·dy/dx

❌ Mistake 2: Forgetting the Product Rule
  For xy, incorrect: d/dx(xy) = y
  Correct: d/dx(xy) = y + x·dy/dx

❌ Mistake 3: Differentiating only one side
  If x² + y² = 25, you must differentiate both sides: 2x + 2y·y' = 0

❌ Mistake 4: Not solving completely for dy/dx
  Stopping at: 2y·y' = -2x is not usually the final answer.
  Continue: y' = -x/y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXPLICIT VS. IMPLICIT DIFFERENTIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explicit: y = f(x)
Implicit: F(x, y) = 0

Explicit: y is isolated
Implicit: x and y are mixed

Explicit: Differentiate directly
Implicit: Differentiate both sides

Explicit: Usually simpler
Implicit: Often requires Chain/Product Rules

Explicit: Example: y = x²
Implicit: Example: x² + y² = 25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. KEY DERIVATIVE RULES TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are especially useful for implicit differentiation:

  • d/dx(y) = y'
  • d/dx(yⁿ) = n·yⁿ⁻¹·y'
  • d/dx(sin(y)) = cos(y)·y'
  • d/dx(cos(y)) = -sin(y)·y'
  • d/dx(tan(y)) = sec²(y)·y'
  • d/dx(eʸ) = eʸ·y'
  • d/dx(ln(y)) = y'/y

And for products: d/dx(x·y) = x·y' + y

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit differentiation is really an application of the Chain Rule.

The fundamental idea is: y depends on x.

Therefore, whenever we differentiate a y-expression, we must account for how y changes with x.

For example:
  • y² → 2y·y'
  • sin(y) → cos(y)·y'
  • eʸ → eʸ·y'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Implicit Differentiation, remember:

  • Explicit function: y = f(x) — y is directly expressed in terms of x.
  • Implicit function: F(x, y) = 0 — x and y are related by an equation.
  • Implicit differentiation: Differentiate both sides → collect y' → solve for y'.
  • The most important rule: d/dx(yⁿ) = n·yⁿ⁻¹·dy/dx because y is itself a function of x.

Example to remember: x² + y² = 25

Differentiate: 2x + 2y·dy/dx = 0

Solve: 2y·dy/dx = -2x

Therefore: dy/dx = -x/y

The key idea: whenever you see an equation where x and y are mixed together, don't panic or immediately try to solve for y. Differentiate both sides, remember that y depends on x, apply the Chain Rule, collect dy/dx, and solve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implicit Differentiation is a powerful technique for finding derivatives when y is not isolated.

Key concepts covered:

  ✓ The Main Idea
  ✓ Why We Need Implicit Differentiation
  ✓ The Most Important Rule
  ✓ Basic Rules
  ✓ Basic Example (Circle)
  ✓ Why the Chain Rule Appears
  ✓ Example with y³
  ✓ Example with xy
  ✓ Product Rule
  ✓ Trigonometric Functions
  ✓ Exponential Functions
  ✓ Logarithmic Functions
  ✓ Quotient Rule
  ✓ More Complex Example
  ✓ Finding Slope at a Point
  ✓ Tangent Line
  ✓ Second Derivative
  ✓ Workflow
  ✓ Common Mistakes
  `,
  examples: [
    "x² + y² = 25 → dy/dx = -x/y",
    "x³ + y³ = 16 → dy/dx = -x²/y²",
    "x² + xy + y² = 10 → dy/dx = -(2x+y)/(x+2y)",
    "sin(y) + x² = 4 → dy/dx = -2x·sec(y)",
    "x + cos(y) = 5 → dy/dx = csc(y)",
    "x + eʸ = 10 → dy/dx = -e⁻ʸ",
    "x + ln(y) = 5 → dy/dx = -y",
    "x²y + y³ = 7 → dy/dx = -2xy/(x²+3y²)",
    "Slope at (3,4) for x²+y²=25 → m = -3/4",
    "Tangent line at (3,4) → y - 4 = -3/4(x - 3)",
    "d/dx(y) = dy/dx",
    "d/dx(y²) = 2y·dy/dx",
    "d/dx(xy) = y + x·dy/dx",
    "d/dx(sin(y)) = cos(y)·dy/dx",
    "d/dx(eʸ) = eʸ·dy/dx",
    "d/dx(ln(y)) = (1/y)·dy/dx",
  ],
};

export default topic;