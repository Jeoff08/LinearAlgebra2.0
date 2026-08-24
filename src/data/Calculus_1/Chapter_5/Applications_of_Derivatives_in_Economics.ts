// filename: applications-of-derivatives-in-economics.ts

const topic = {
  id: "applications-of-derivatives-in-economics",
  title: "Applications of Derivatives in Economics",
  summary:
    "Using derivatives to measure how economic quantities change, including marginal cost, marginal revenue, marginal profit, profit maximization, cost minimization, and elasticity.",
  details: `
Derivatives have many important applications in economics. They allow us to measure how one economic quantity changes when another quantity changes.

In economics, derivatives are especially useful for studying:
  • Marginal cost
  • Marginal revenue
  • Marginal profit
  • Average cost
  • Revenue and profit maximization
  • Cost minimization
  • Production
  • Demand and supply
  • Elasticity
  • Break-even points
  • Economic optimization

The central idea is:
  Derivative = instantaneous rate of change

In economics, this often becomes:
  Marginal quantity = rate of change of a quantity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHY DERIVATIVES ARE IMPORTANT IN ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company produces x units of a product.

Its total cost might be C(x).

The company may want to know:
  How much does the cost increase if we produce one additional unit?

This is where the derivative becomes useful.

The derivative C'(x) tells us the approximate change in total cost when production changes.

This is called:
  Marginal Cost

Similarly:
  R'(x) = Marginal Revenue
and:
  P'(x) = Marginal Profit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BASIC ECONOMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let x = quantity of goods produced or sold.

Several important functions are used.

Cost Function:
  C(x) represents the total cost of producing x units.

Revenue Function:
  R(x) represents the total revenue generated from selling x units.

Profit Function:
  P(x) represents the company's profit.

The fundamental relationship is:
  P(x) = R(x) - C(x)

This equation is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. MARGINAL COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The marginal cost is the rate at which total cost changes with respect to the quantity produced.

If C = C(x), then:
  MC = C'(x)

In other words:
  Marginal cost tells us approximately how much additional cost is associated 
  with producing one more unit.

Example:
  Suppose C(x) = 500 + 20x + 0.05x².

  Differentiate:
    C'(x) = 20 + 0.1x

  Therefore:
    MC = 20 + 0.1x

  At x = 100:
    MC = 20 + 0.1(100) = 30

  Therefore:
    MC(100) = 30

  This means that when production is around 100 units, the cost of producing 
  one additional unit is approximately 30 monetary units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. FIXED COST AND VARIABLE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The cost function often contains two major components.

Fixed Cost:
  A cost that does not depend on production.
  For example: Rent, Insurance, Equipment, Administrative expenses

  If C(x) = 500 + 20x + 0.05x², then 500 can represent the fixed cost.

Variable Cost:
  A cost that changes with production.
  In the example, 20x + 0.05x² represents variable costs.

Therefore:
  Total Cost = Fixed Cost + Variable Cost

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. REVENUE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Revenue is the amount of money generated from selling products.

The basic formula is:
  R = Price × Quantity

If p(x) represents the price per unit when x units are sold, then:
  R(x) = x p(x)

This becomes particularly important when price depends on demand.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE: REVENUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the price of a product is:
  p(x) = 100 - 2x

The company sells x units.

Revenue is:
  R(x) = x p(x)

Therefore:
  R(x) = x(100 - 2x)

Expand:
  R(x) = 100x - 2x²

This is the revenue function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. MARGINAL REVENUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marginal revenue is the derivative of total revenue.
  MR = R'(x)

For R(x) = 100x - 2x²:
  R'(x) = 100 - 4x

Therefore:
  MR = 100 - 4x

At x = 10:
  MR = 100 - 40 = 60

This means that near 10 units, selling one additional unit increases revenue by approximately 60 monetary units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. PROFIT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Profit is:
  P(x) = R(x) - C(x)

This is one of the most important economic formulas involving derivatives.

Suppose:
  R(x) = 100x - 2x²
and:
  C(x) = 500 + 20x + 0.05x²

Then:
  P(x) = R(x) - C(x)

Therefore:
  P(x) = 100x - 2x² - (500 + 20x + 0.05x²)

Simplify:
  P(x) = 80x - 2.05x² - 500

So:
  P(x) = 80x - 2.05x² - 500

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MARGINAL PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The marginal profit is:
  MP = P'(x)

Differentiate:
  P'(x) = 80 - 4.1x

Therefore:
  MP = 80 - 4.1x

There is also an important relationship:
  P(x) = R(x) - C(x)

Differentiate both sides:
  P'(x) = R'(x) - C'(x)

Therefore:
  MP = MR - MC

This relationship is extremely important in economics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. PROFIT MAXIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most common applications of derivatives in economics is:
  Determine the production level that maximizes profit.

We want: Maximum Profit

Since P(x) = R(x) - C(x), we differentiate P'(x).

At an interior maximum:
  P'(x) = 0

Since P'(x) = R'(x) - C'(x), we get:
  R'(x) - C'(x) = 0

Therefore:
  MR = MC

This is one of the most important rules in introductory economics:

  Profit is maximized when marginal revenue equals marginal cost, under the 
  usual differentiable interior-solution assumptions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHY MR = MC MAXIMIZES PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think about profit as production increases.

If MR > MC, then an additional unit generates more revenue than it costs to produce.
  Therefore, increasing production tends to increase profit.

So:
  MR > MC ⇒ Profit tends to increase

If MR < MC, the additional unit costs more than the revenue it generates.
  Therefore:
    MR < MC ⇒ Profit tends to decrease

The ideal interior point occurs when:
  MR = MC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMPLETE PROFIT-MAXIMIZATION EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  R(x) = 100x - 2x²
and:
  C(x) = 500 + 20x + 0.05x²

We already found:
  P(x) = 80x - 2.05x² - 500

Differentiate:
  P'(x) = 80 - 4.1x

Set:
  P'(x) = 0
  80 - 4.1x = 0

Therefore:
  4.1x = 80
  x ≈ 19.512

So the continuous mathematical optimum is approximately:
  x = 19.512

If the company can produce only whole units, we would compare nearby feasible quantities such as 19 and 20 to determine which gives the larger actual profit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. VERIFY THE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the second derivative:
  P''(x) = -4.1

Since P''(x) < 0, the profit function is concave down.

Therefore:
  x ≈ 19.512 gives a maximum profit in the continuous model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important economic application is average cost.

Average cost is:
  AC(x) = C(x)/x

for x > 0.

It tells us the average cost per unit.

For example, if C(x) = 1000 + 10x, then:
  AC(x) = (1000 + 10x)/x

Separate the terms:
  AC(x) = 1000/x + 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MINIMIZING AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  C(x) = 1000 + 10x + 0.1x²

Then:
  AC(x) = (1000 + 10x + 0.1x²)/x

Simplify:
  AC(x) = 1000/x + 10 + 0.1x

Differentiate:
  AC'(x) = -1000/x² + 0.1

Set equal to zero:
  -1000/x² + 0.1 = 0

Therefore:
  0.1 = 1000/x²
  x² = 10000

Thus:
  x = 100

because production quantity must be positive.

Therefore:
  x = 100 is the production level that minimizes average cost in this model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. MARGINAL COST AND AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is an important relationship:

  At the quantity where average cost is minimized, MC = AC

under the usual differentiability conditions.

This is similar to the profit-maximization condition:
  MR = MC

So remember:
  Profit Maximum: MR = MC
  Average Cost Minimum: MC = AC

These are important economic relationships derived using calculus.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DEMAND FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A demand function describes the relationship between:
  • price, and
  • quantity demanded.

For example:
  p(x) = 100 - 2x

As x increases, the price decreases.

This represents a simple downward-sloping demand relationship.

The derivative is:
  p'(x) = -2

Therefore, price decreases at a constant rate as quantity increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. REVENUE AND DEMAND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given a demand function p = p(x), total revenue is:
  R(x) = x p(x)

For p(x) = 100 - 2x, we have:
  R(x) = x(100 - 2x)

so:
  R(x) = 100x - 2x²

This demonstrates how derivatives connect demand to revenue.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. REVENUE MAXIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To maximize revenue:
  R'(x) = 0

For R(x) = 100x - 2x², we have:
  R'(x) = 100 - 4x

Set:
  100 - 4x = 0

Therefore:
  x = 25

So revenue is maximized at:
  x = 25

The corresponding price is:
  p(25) = 100 - 2(25) = 50

Thus:
  p = 50

Maximum revenue:
  R(25) = 100(25) - 2(25)²
  = 2500 - 1250
  = 1250

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. BREAK-EVEN POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A business breaks even when:
  Revenue = Cost

Since P(x) = R(x) - C(x), break-even occurs when:
  P(x) = 0

Therefore:
  R(x) = C(x)

There may be:
  • no break-even point,
  • one break-even point,
  • or multiple break-even points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE OF BREAK-EVEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  R(x) = 100x
and:
  C(x) = 500 + 50x

Break-even occurs when:
  R(x) = C(x)

Therefore:
  100x = 500 + 50x
  50x = 500
  x = 10

Therefore:
  x = 10 is the break-even production level.

At this quantity:
  R(10) = 1000
and:
  C(10) = 1000

Thus:
  Break-even revenue/cost = 1000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. ELASTICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Another important application of derivatives in economics is elasticity.

Elasticity measures how responsive one quantity is to a change in another quantity.

For a demand function x = x(p), price elasticity of demand can be expressed as:
  E(p) = (p/x) · (dx/dp)

where x is quantity demanded and p is price.

It measures the percentage change in quantity relative to the percentage change in price.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. INTERPRETATION OF ELASTICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generally:
  Elastic Demand: E > 1
    Quantity is relatively responsive to price changes.

  Inelastic Demand: E < 1
    Quantity is relatively less responsive to price changes.

  Unit Elastic: E = 1
    The percentage changes have equal magnitude.

The exact sign convention can vary depending on how elasticity is defined, but demand elasticity is often negative because price and quantity demanded typically move in opposite directions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. MARGINAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful way to remember economic derivatives is:

  Original Function   Derivative         Economic Meaning
  ───────────────────────────────────────────────────────────
  C(x)                C'(x)              Marginal Cost
  R(x)                R'(x)              Marginal Revenue
  P(x)                P'(x)              Marginal Profit
  AC(x)               AC'(x)             Change in Average Cost

The word marginal usually means:
  the additional amount associated with a small increase in quantity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. DERIVATIVES AND ECONOMIC DECISION-MAKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  P'(x) > 0

This means profit is increasing with respect to production.

So increasing production slightly will increase profit.

If:
  P'(x) < 0

profit is decreasing.

Therefore:
  P'(x) > 0 ⇒ Profit increasing
  P'(x) < 0 ⇒ Profit decreasing
  P'(x) = 0 ⇒ Possible profit extremum

This gives businesses a mathematical way to determine how production should change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. SECOND DERIVATIVES IN ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The second derivative tells us how a marginal quantity changes.

For example:
  C'(x) = MC

Then:
  C''(x)

tells us how marginal cost changes as production increases.

If:
  C''(x) > 0

then marginal cost is increasing.

If:
  C''(x) < 0

then marginal cost is decreasing.

Similarly:
  R''(x)

tells us how marginal revenue changes.

And:
  P''(x)

helps us determine the curvature of profit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. ECONOMIC OPTIMIZATION AND CONCAVITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  P''(x) < 0

Then the profit function is concave down.

If:
  P'(x) = 0

the critical point is a maximum.

Therefore:
  P''(x) < 0 ⇒ profit maximum at the critical point

under the appropriate domain/interior conditions.

Similarly:
  P''(x) > 0

suggests a local minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. A COMPLETE ECONOMIC OPTIMIZATION PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company has demand:
  p(x) = 120 - 3x

and cost:
  C(x) = 200 + 20x

Find the quantity that maximizes profit.

Step 1: Revenue
  Revenue is: R(x) = x p(x)

  Therefore:
    R(x) = x(120 - 3x)
    R(x) = 120x - 3x²

Step 2: Profit
  P(x) = R(x) - C(x)

  Therefore:
    P(x) = 120x - 3x² - (200 + 20x)

  Simplify:
    P(x) = 100x - 3x² - 200

Step 3: Differentiate
  P'(x) = 100 - 6x

  Set:
    P'(x) = 0
    100 - 6x = 0

  Therefore:
    x = 100/6 ≈ 16.667

  So the continuous model gives:
    x ≈ 16.667

  If only whole units can be produced, compare nearby feasible quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. VERIFY THE MAXIMUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find:
  P''(x) = -6

Since -6 < 0, profit is concave down.

Therefore:
  x ≈ 16.667 is the profit-maximizing quantity in the continuous model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30. ECONOMIC MEANING OF MR = MC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's understand this concept rather than simply memorizing it.

Suppose the company is producing 10 units.

If:
  MR = 50
and:
  MC = 30

then producing another unit generates approximately:
  50 - 30 = 20

more profit.

So the company should increase production.

But suppose:
  MR = 30
and:
  MC = 50

Then the additional unit loses approximately:
  50 - 30 = 20

So production should decrease.

The balance occurs when:
  MR = MC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

31. IMPORTANT ECONOMIC FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Total Profit:
    P(x) = R(x) - C(x)

  Marginal Cost:
    MC = C'(x)

  Marginal Revenue:
    MR = R'(x)

  Marginal Profit:
    MP = P'(x)

  Relationship:
    MP = MR - MC

  Average Cost:
    AC = C(x)/x

  Profit Maximization:
    MR = MC

  Break-Even:
    R(x) = C(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

32. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing revenue and profit
  Revenue is R(x). Profit is P(x) = R(x) - C(x).
  A company can have high revenue but still have low or negative profit if costs are high.

Mistake 2: Thinking MR = MC means maximum revenue
  No. MR = MC is associated with profit maximization for an interior solution.
  Revenue maximization instead requires MR = 0 under the usual differentiable interior conditions.

Mistake 3: Forgetting the cost function
  Profit is not revenue.
  Always use: P = R - C

Mistake 4: Ignoring the feasible domain
  A company cannot normally produce x < 0.
  And demand constraints may impose an upper limit on feasible quantity.

Mistake 5: Ignoring discrete quantities
  Calculus treats x as continuous. If a business can only produce whole units, a non-integer critical point may require comparing nearby integer quantities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

33. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The applications of derivatives in economics can be summarized as:

  Economic Function → Derivative → Marginal Quantity → Decision

For example:
  C(x) → C'(x) → MC
  R(x) → R'(x) → MR
  P(x) → P'(x) → MP

Then derivatives allow us to find:
  • Maximum Profit
  • Maximum Revenue
  • Minimum Cost
  • Minimum Average Cost

and other optimal economic decisions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

34. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important concepts to remember are:

  P(x) = R(x) - C(x)
  MC = C'(x)
  MR = R'(x)
  MP = P'(x)

and:
  MP = MR - MC

For profit maximization:
  P'(x) = 0
which gives:
  MR = MC

For revenue maximization:
  R'(x) = 0

For average cost:
  AC(x) = C(x)/x

And at an interior minimum of average cost:
  MC = AC

The overall idea is:

  Derivatives → Marginal Changes → Optimization → Better Economic Decisions

So, applications of derivatives in economics connect calculus directly to real-world decisions about production, pricing, costs, revenue, and profit.
  `,
  examples: [
    "Marginal cost: C(x) = 500 + 20x + 0.05x² → MC = 20 + 0.1x",
    "Marginal revenue: R(x) = 100x - 2x² → MR = 100 - 4x",
    "Profit maximization: MR = MC",
    "Break-even: R(x) = C(x) → x = 10 for R=100x, C=500+50x",
    "Average cost: AC(x) = C(x)/x",
    "Minimize average cost: MC = AC",
    "Revenue maximization: R'(x) = 0 → x = 25 for R=100x-2x²",
  ],
};

export default topic;