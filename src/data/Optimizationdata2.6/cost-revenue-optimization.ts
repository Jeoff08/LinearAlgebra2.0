// filename: cost-revenue-optimization.ts

const topic = {
  id: "cost-revenue-optimization",
  title: "Cost and Revenue Optimization",
  summary:
    "Using calculus to determine the production or sales level that gives the best financial result, including maximizing profit, maximizing revenue, and minimizing cost.",
  details: `
Cost and Revenue Optimization is an application of calculus used in business and economics to determine the production or sales level that gives the best financial result.

Depending on the problem, we may want to:

  • maximize profit
  • maximize revenue
  • minimize cost
  • minimize average cost
  • determine the optimal production level
  • determine the optimal selling price

The central idea is:

Use derivatives to find the production level that gives the best financial outcome.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COST, REVENUE, AND PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three functions are especially important.

Cost Function:
  The cost function describes how much it costs to produce x units.
    C(x)
  For example:
    C(x) = 500 + 20x + 0.1x²

Revenue Function:
  The revenue function describes how much money is earned from selling x units.
    R(x)
  If each unit sells for p dollars:
    R(x) = px
  If the price depends on the number of units sold:
    p = p(x)
  then:
    R(x) = xp(x)

Profit Function:
  Profit is revenue minus cost:
    P(x) = R(x) - C(x)
  This is one of the most important equations in business optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE THREE MAIN OPTIMIZATION GOALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Maximize Revenue: Maximize R(x)
  Minimize Cost: Minimize C(x)
  Maximize Profit: Maximize P(x)

Usually, when a business asks:

  "How many units should we produce to make the most money?"

we are dealing with profit optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MARGINAL COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of the cost function is called marginal cost.

If:
  C = C(x)
then:
  C'(x) = Marginal Cost

It represents approximately how much the cost changes when producing one additional unit.

For example:
  C(x) = 1000 + 20x + 0.05x²
Then:
  C'(x) = 20 + 0.1x
This tells us the approximate additional cost of producing another unit at production level x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MARGINAL REVENUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative of the revenue function is called marginal revenue.

  R'(x) = Marginal Revenue

It represents approximately how much additional revenue is generated from selling one more unit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. MARGINAL PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Since:
  P(x) = R(x) - C(x)

differentiate:
  P'(x) = R'(x) - C'(x)

Therefore:
  P'(x) = Marginal Revenue - Marginal Cost

This gives us one of the most important principles in business calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE PROFIT-MAXIMIZATION RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

At the production level where profit is maximized:
  P'(x) = 0

Since:
  P'(x) = R'(x) - C'(x)

we get:
  R'(x) - C'(x) = 0

Therefore:
  R'(x) = C'(x)

In words:

  Profit is maximized when marginal revenue equals marginal cost.

This is one of the most important results in Cost and Revenue Optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY DOES MR=MC MAXIMIZE PROFIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  P'(x) = MR - MC

If MR > MC, then:
  P'(x) > 0
  Profit is increasing.
  The company should generally consider producing more.

If MR < MC, then:
  P'(x) < 0
  Profit is decreasing.
  Producing additional units is hurting profit.

If MR = MC, then:
  P'(x) = 0
  This is the point where profit can reach its maximum.

Thus:
  MR = MC
is the key optimization condition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: MAXIMUM PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company's cost is:
  C(x) = 500 + 20x + 0.1x²

and its revenue is:
  R(x) = 100x - 0.2x²

Find the production level that maximizes profit.

Step 1: Write the profit function
  P(x) = R(x) - C(x)
  P(x) = 100x - 0.2x² - (500 + 20x + 0.1x²)
  P(x) = 80x - 0.3x² - 500

Step 2: Differentiate
  P'(x) = 80 - 0.6x

Set:
  P'(x) = 0

Therefore:
  80 - 0.6x = 0
  0.6x = 80
  x = 80/0.6
  x ≈ 133.33

So the mathematical model says the maximum occurs at approximately:
  133.33 units

If only whole units can be produced, we would compare nearby integer values such as 133 and 134.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. VERIFY THE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Take the second derivative:
  P''(x) = -0.6

Since:
  P''(x) < 0

the profit function is concave downward.

Therefore:
  x ≈ 133.33
produces a maximum profit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. USING MARGINAL REVENUE AND MARGINAL COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We can solve the same problem using the marginal quantities.

Revenue:
  R(x) = 100x - 0.2x²
Therefore:
  R'(x) = 100 - 0.4x
So:
  MR = 100 - 0.4x

Cost:
  C(x) = 500 + 20x + 0.1x²
Therefore:
  C'(x) = 20 + 0.2x
So:
  MC = 20 + 0.2x

Set:
  MR = MC

Therefore:
  100 - 0.4x = 20 + 0.2x
  80 = 0.6x
  x ≈ 133.33

Same answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. REVENUE OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the problem doesn't ask about profit.

It might ask:

  How many units should be sold to maximize revenue?

In that case, we optimize:
  R(x)

Suppose:
  R(x) = 100x - 0.5x²

Differentiate:
  R'(x) = 100 - x

Set:
  100 - x = 0

Therefore:
  x = 100

The maximum revenue occurs at 100 units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COST MINIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Businesses can also use calculus to find the minimum cost.

Suppose:
  C(x) = x² - 20x + 300

Differentiate:
  C'(x) = 2x - 20

Set:
  2x - 20 = 0
  x = 10

Second derivative:
  C''(x) = 2

Since:
  C''(x) > 0

the function has a minimum.

Therefore:
  x = 10
is the production level associated with the minimum of this mathematical cost model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. FIXED COST AND VARIABLE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cost functions often contain two major components.

Fixed Cost:
  Costs that don't depend directly on the number of units produced.
  Examples:
    • Rent
    • Insurance
    • Equipment leases
    • Salaries
  Represented by: Fixed Cost

Variable Cost:
  Costs that change as production changes.
  Examples:
    • Raw materials
    • Packaging
    • Shipping
    • Production supplies

The total cost is:
  C(x) = Fixed Cost + Variable Cost

For example:
  C(x) = 1000 + 15x
Here:
  1000 is the fixed cost, while:
  15x is the variable cost.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. BREAK-EVEN POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A break-even point occurs when:
  R(x) = C(x)

because:
  P(x) = R(x) - C(x)

At break-even:
  P(x) = 0

Therefore:
  R(x) - C(x) = 0
so:
  R(x) = C(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. EXAMPLE OF BREAK-EVEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  C(x) = 1000 + 20x
and:
  R(x) = 50x

At break-even:
  50x = 1000 + 20x
  30x = 1000
  x = 1000/30
  x ≈ 33.33

So the company needs to sell roughly 34 units to move beyond the break-even point, assuming whole units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. PROFIT REGIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If R(x) > C(x), then:
  P(x) > 0
  The company makes a profit.

If R(x) < C(x), then:
  P(x) < 0
  The company experiences a loss.

At R(x) = C(x):
  the company is at Break-even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important business quantity is average cost.

Average cost is:
  AC(x) = C(x)/x

It represents the average cost per unit.

For example, if:
  C(x) = 1000 + 20x
then:
  AC(x) = (1000 + 20x)/x
Simplify:
  AC(x) = 1000/x + 20

We can differentiate this to find the production level that minimizes average cost.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. MARGINAL COST VS. AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful relationship is:

  Average cost is minimized when marginal cost equals average cost.

That is:
  MC = AC

This is analogous to the profit-maximization condition:
  MR = MC

So remember:
  MR = MC for maximum profit
and:
  MC = AC for minimum average cost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. REVENUE WHEN PRICE DEPENDS ON QUANTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes the selling price decreases as more products are sold.

Suppose:
  p(x) = 100 - 2x
where p(x) is the price per unit.

Revenue is:
  R(x) = xp(x)
Therefore:
  R(x) = x(100 - 2x)
  R(x) = 100x - 2x²

Differentiate:
  R'(x) = 100 - 4x

Set:
  100 - 4x = 0
  x = 25

Therefore:
  x = 25
maximizes revenue under this model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. PRICE-DEMAND RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common economics model is:
  p(x) = a - bx

where:
  p = price
  x = quantity demanded
  a = initial price/intercept
  b = rate at which price decreases

Revenue is:
  R(x) = xp(x)
Therefore:
  R(x) = x(a - bx)
  R(x) = ax - bx²

Differentiate:
  R'(x) = a - 2bx

Set equal to zero:
  a - 2bx = 0

Thus:
  x = a/(2b)

This gives the quantity that maximizes revenue for this linear demand model, provided it lies in the valid domain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. IMPORTANT BUSINESS RELATIONSHIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These formulas are extremely useful:

  Profit: P = R - C
  Revenue: R = px (when price is constant)
  Average Cost: AC = C/x
  Marginal Cost: MC = C'(x)
  Marginal Revenue: MR = R'(x)
  Marginal Profit: MP = P'(x) = MR - MC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. OPTIMIZATION CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Maximum Profit:
    P'(x) = 0
    or equivalently:
    MR = MC
    with appropriate verification.

  Maximum Revenue:
    R'(x) = 0

  Minimum Cost:
    C'(x) = 0
    with appropriate verification.

  Minimum Average Cost:
    AC'(x) = 0
    or, under the usual differentiability conditions:
    MC = AC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. INTERPRETING THE DERIVATIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative gives an economic interpretation.

  C'(x): Approximately the cost of producing one additional unit.
  R'(x): Approximately the revenue from selling one additional unit.
  P'(x): Approximately the change in profit from producing/selling one additional unit.

This is why derivatives are so useful in economics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing Revenue and Profit
  Remember:
    P = R - C
  Revenue is not profit.

Mistake 2: Using R = C for maximum profit
  R = C finds break-even, not maximum profit.
  For maximum profit:
    R' = C'

Mistake 3: Confusing C and C'
  C(x) is total cost.
  C'(x) is marginal cost.

Mistake 4: Forgetting the domain
  You cannot normally produce:
    x < 0 units.
  Also, demand and pricing models usually have restrictions.

Mistake 5: Not checking whether the critical point is a maximum
  Finding:
    P'(x) = 0
  only gives a candidate.
  Check with:
    • First Derivative Test
    • Second Derivative Test
    • Endpoint comparison

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Quantity                Formula                Meaning
  ────────────────────────────────────────────────────────────────────────────
  Cost                    C(x)                   Total production cost
  Revenue                 R(x)                   Total money earned
  Profit                  P(x) = R(x) - C(x)     Money left after costs
  Average Cost            AC = C/x               Cost per unit
  Marginal Cost           MC = C'(x)             Additional cost
  Marginal Revenue        MR = R'(x)             Additional revenue
  Marginal Profit         P' = R' - C'           Change in profit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. PROBLEM-SOLVING TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For Cost and Revenue Optimization:

  1. Identify the quantity x
  2. Write the cost function C(x)
  3. Write the revenue function R(x)
  4. Determine the objective
  5. Create P(x) = R(x) - C(x) if needed
  6. Differentiate
  7. Set the derivative equal to zero
  8. Find critical numbers
  9. Check the domain
  10. Verify maximum/minimum
  11. Interpret the result

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cost and Revenue Optimization uses calculus to answer questions such as:

  "How many products should a company produce to make the greatest profit?"

The key relationships are:
  P = R - C
and:
  P' = R' - C'

For maximum profit:
  P' = 0
which gives:
  MR = MC

So the central pattern is:

  Cost → Revenue → Profit → Derivative → MR = MC → Optimal Production

Easy way to remember:

  Revenue is what you earn. Cost is what you spend. Profit is what remains. 
  The derivative tells you how these quantities change, and the optimal production 
  level occurs where the financial model stops improving.
  `,
  examples: [
    "Maximize profit: C(x) = 500 + 20x + 0.1x², R(x) = 100x - 0.2x² → x ≈ 133.33 units",
    "Maximize revenue: R(x) = 100x - 0.5x² → x = 100 units",
    "Minimize cost: C(x) = x² - 20x + 300 → x = 10 units",
    "Break-even analysis: C(x) = 1000 + 20x, R(x) = 50x → x ≈ 33.33 units",
    "Price-demand model: p(x) = 100 - 2x → maximize revenue at x = 25",
    "Minimum average cost: Find where MC = AC",
  ],
};

export default topic;