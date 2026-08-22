const topic = {
  id: "piecewise-functions",
  title: "Piecewise Functions",
  summary:
    "Definition of piecewise functions, evaluation, graphing, open and closed circles, continuity, discontinuity, and real-world applications.",
  details: `
A piecewise function is a function that uses different rules or formulas for different parts of its domain. Instead of having one formula that applies to every possible input, a piecewise function assigns a specific formula depending on the value of x.

In simple terms: A piecewise function is a function that changes its rule depending on the input value.

Piecewise functions are useful for describing situations where a quantity behaves differently under different conditions. They are commonly used in Mathematics, Calculus, business, economics, physics, and real-world modeling.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A PIECEWISE FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A piecewise function is usually written using a large curly bracket:

  f(x) = {
    first rule,   if condition 1
    second rule,  if condition 2
    third rule,   if condition 3
  }

Each formula is paired with a condition that tells us when that formula should be used.

Example:

  f(x) = {
    x + 2,   if x < 0
    x²,      if x ≥ 0
  }

This means there are two different rules.

If x < 0, we use: f(x) = x + 2

If x ≥ 0, we use: f(x) = x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EVALUATING A PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To evaluate a piecewise function, the most important step is to identify which condition the input satisfies.

Consider:

  f(x) = {
    2x + 1,   if x < 3
    x²,       if x ≥ 3
  }

Find f(2):

Since 2 < 3, we use the first rule:

  f(2) = 2(2) + 1 = 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using the same function:

  f(x) = {
    2x + 1,   if x < 3
    x²,       if x ≥ 3
  }

Find f(4):

Since 4 ≥ 3, we use the second rule:

  f(4) = 4² = 16

Notice that we did not use the first formula because 4 does not satisfy the condition x < 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EVALUATING THE BOUNDARY POINT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  f(x) = {
    x + 5,    if x < 2
    3x - 1,   if x ≥ 2
  }

Find f(2):

Since the second condition is x ≥ 2, the value x = 2 belongs to the second piece.

Therefore:

  f(2) = 3(2) - 1 = 6 - 1 = 5

The condition tells us exactly which formula to use at the boundary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPHING PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A piecewise function can have different shapes on different intervals.

Consider:

  f(x) = {
    x + 1,   if x < 2
    x²,      if x ≥ 2
  }

For x < 2, we graph: y = x + 1

For x ≥ 2, we graph: y = x²

The graph therefore consists of two different portions.

When graphing piecewise functions, it is important to pay attention to whether an endpoint is included or excluded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. OPEN AND CLOSED CIRCLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When graphing a piecewise function, we use different types of circles to show whether an endpoint is included.

An open circle (○) means the endpoint is not included.

A closed circle (●) means the endpoint is included.

Example:

  f(x) = {
    x + 1,   if x < 2
    x²,      if x ≥ 2
  }

At x = 2:
  • The first piece uses x < 2, so x = 2 is excluded.
  • The second piece uses x ≥ 2, so x = 2 is included.

Therefore, the first piece has an open endpoint, while the second piece has a closed endpoint at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. CONTINUITY OF PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Piecewise functions are especially important in Calculus because they can be used to study continuity.

A function is continuous at a point if there is no break, jump, or hole in its graph at that point.

Consider:

  f(x) = {
    x + 2,   if x < 1
    3x,      if x ≥ 1
  }

At x = 1, we can examine the values approaching from both sides.

From the left: lim(x→1⁻) (x + 2) = 3

From the right: lim(x→1⁺) 3x = 3

The function value is: f(1) = 3(1) = 3

Since lim(x→1⁻) f(x) = lim(x→1⁺) f(x) = f(1), the function is continuous at x = 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DISCONTINUOUS PIECEWISE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every piecewise function is continuous.

Consider:

  f(x) = {
    x + 1,   if x < 2
    x + 5,   if x ≥ 2
  }

Approaching x = 2 from the left:

  lim(x→2⁻) f(x) = 2 + 1 = 3

Approaching from the right:

  lim(x→2⁺) f(x) = 2 + 5 = 7

Since 3 ≠ 7, the function has a jump discontinuity at x = 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. PIECEWISE FUNCTIONS AND ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value functions can also be written as piecewise functions.

Consider: f(x) = |x|

The absolute value behaves differently depending on whether x is positive or negative.

It can be written as:

  |x| = {
    -x,   if x < 0
    x,    if x ≥ 0
  }

Example: If x = -4, then f(-4) = -(-4) = 4

If x = 4, then f(4) = 4

Therefore: |x| = 4 for both x = -4 and x = 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. REAL-WORLD EXAMPLE: PARKING FEES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Piecewise functions can be used to represent different pricing rules.

Suppose a parking lot charges:
  • ₱50 for the first 2 hours
  • ₱30 per additional hour after 2 hours

A simplified piecewise function could be represented as:

  C(t) = {
    50,                    if 0 ≤ t ≤ 2
    50 + 30(t - 2),        if t > 2
  }

where:
  t = number of hours parked
  C(t) = total parking cost

If a person parks for 2 hours: C(2) = 50

If they park for 4 hours:

  C(4) = 50 + 30(4 - 2) = 50 + 60 = 110

This demonstrates how piecewise functions can model situations where the rule changes depending on the input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PIECEWISE FUNCTIONS AND DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The conditions of a piecewise function determine which parts of the domain use each formula.

Example:

  f(x) = {
    x²,       if -2 ≤ x < 0
    x + 1,    if 0 ≤ x ≤ 3
  }

The first formula applies to: [-2, 0)

The second formula applies to: [0, 3]

Together, the complete domain is: [-2, 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. PIECEWISE FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Piecewise functions are important in Calculus because they provide examples where we need to carefully analyze limits, continuity, derivatives, and integrals.

When working with a piecewise function, we may need to determine:
  • The value of the function at a specific point
  • The left-hand limit
  • The right-hand limit
  • Whether the function is continuous
  • Whether the function is differentiable
  • The derivative of each piece
  • The integral over different intervals

Example:

  f(x) = {
    x²,       if x < 1
    2x + 1,   if x ≥ 1
  }

requires us to examine what happens around x = 1.

This makes piecewise functions particularly useful for understanding how Calculus analyzes changes at specific points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Piecewise Functions, make sure you understand:

  • Different Rules
  • Conditions
  • Domain
  • Range
  • Open and Closed Endpoints
  • Graphing Piecewise Functions
  • Continuity
  • Discontinuity
  • Left-Hand and Right-Hand Limits

The key idea to remember is:

  A piecewise function uses different formulas for different parts of its domain. To evaluate or graph a piecewise function, you must first identify which condition the input satisfies and then apply the corresponding formula. In Calculus, piecewise functions are especially important for understanding limits, continuity, derivatives, and real-world situations where a rule changes under different conditions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Piecewise Functions are versatile mathematical tools that serve as essential building blocks for Calculus.

Key concepts covered:

  ✓ What Is a Piecewise Function?
  ✓ Evaluating Piecewise Functions
  ✓ Boundary Points
  ✓ Graphing Piecewise Functions
  ✓ Open and Closed Circles
  ✓ Continuity of Piecewise Functions
  ✓ Discontinuous Piecewise Functions
  ✓ Absolute Value as a Piecewise Function
  ✓ Real-World Applications
  ✓ Domain of Piecewise Functions
  ✓ Piecewise Functions in Calculus
  `,
  examples: [
    "Evaluate f(2) for f(x) = {2x+1 if x<3, x² if x≥3} → f(2) = 5",
    "Evaluate f(4) for f(x) = {2x+1 if x<3, x² if x≥3} → f(4) = 16",
    "Evaluate f(2) for f(x) = {x+5 if x<2, 3x-1 if x≥2} → f(2) = 5",
    "Graph f(x) = {x+1 if x<2, x² if x≥2} with open/closed circles at x=2",
    "Determine continuity at x=1: f(x) = {x+2 if x<1, 3x if x≥1} → continuous",
    "Determine discontinuity at x=2: f(x) = {x+1 if x<2, x+5 if x≥2} → jump discontinuity",
    "Write |x| as a piecewise function: {-x if x<0, x if x≥0}",
    "Evaluate | -4 | and | 4 | using piecewise definition → both equal 4",
    "Find domain of f(x) = {x² if -2≤x<0, x+1 if 0≤x≤3} → [-2,3]",
    "Real-world: Parking fee function C(t) = {50 if 0≤t≤2, 50+30(t-2) if t>2}",
    "Calculate C(4) for parking fee function → C(4) = 110",
  ],
};

export default topic;