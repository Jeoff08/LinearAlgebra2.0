// filename: applications-of-antidifferentiation-in-economics.ts

const topic = {
  id: "applications-of-antidifferentiation-in-economics",
  title: "Applications of Antidifferentiation in Economics",
  summary:
    "Using antidifferentiation to recover total economic functions from marginal information, including cost, revenue, profit, production, utility, and growth models.",
  details: `
Antidifferentiation has many important applications in economics because economic quantities often describe rates of change. If we know how quickly something is changing, antidifferentiation allows us to recover the total quantity or original function.

For example, economists may know:
  • Marginal cost → find total cost
  • Marginal revenue → find total revenue
  • Marginal profit → find total profit
  • Marginal product → find total production
  • Growth rate → find the total quantity over time

The main idea is:
  Marginal Function → Total Function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT DOES "MARGINAL" MEAN IN ECONOMICS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In economics, the word marginal usually means:
  The rate of change of one economic quantity with respect to another quantity.

For example:

Marginal Cost:
  MC = dC/dx
  where:
    C(x) = total cost
    x = number of units produced
    MC = marginal cost

Marginal Revenue:
  MR = dR/dx
  where:
    R(x) = total revenue

Marginal Profit:
  MP = dP/dx
  where:
    P(x) = total profit

Therefore, antidifferentiation allows us to reverse the process:
  C(x) = ∫ MC dx
  R(x) = ∫ MR dx
  P(x) = ∫ MP dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. MARGINAL COST AND TOTAL COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The marginal cost function tells us how the total cost changes when one more unit is produced.

Mathematically:
  MC = C'(x)

If we know marginal cost, we can find total cost by antidifferentiation:
  C(x) = ∫ MC(x) dx + C

The constant C is important because it often represents the fixed cost.

Example 1:
  Suppose MC = 6x + 20.

  Find the total cost function.

  Since C'(x) = 6x + 20, integrate:
    C(x) = ∫ (6x + 20) dx

  Therefore:
    C(x) = 3x² + 20x + C

  Suppose the fixed cost is C(0) = 500.

  Substitute x = 0:
    500 = 3(0)² + 20(0) + C

  Therefore:
    C = 500

  Thus:
    C(x) = 3x² + 20x + 500

Interpretation:
  3x² + 20x represents costs that change with production.
  500 represents the fixed cost.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY IS THE CONSTANT IMPORTANT IN ECONOMICS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In calculus, the constant is written as +C.

In economics, this constant often has a meaningful interpretation.

For total cost:
  C(0) = Fixed Cost

This is because when no units are produced (x = 0), the company may still have expenses such as:
  • Rent
  • Equipment
  • Salaries
  • Insurance
  • Utilities
  • Building maintenance

Therefore, when integrating marginal cost, the constant is usually determined using the fixed cost.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. MARGINAL REVENUE AND TOTAL REVENUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Revenue is the money earned from selling products.

Let R(x) represent total revenue.

The marginal revenue is:
  MR = R'(x)

Therefore:
  R(x) = ∫ MR dx + C

Example 2:
  Suppose MR = 100 - 4x.

  Find the total revenue function if R(0) = 0.

  Integrate:
    R(x) = ∫ (100 - 4x) dx

  Therefore:
    R(x) = 100x - 2x² + C

  Since R(0) = 0, we have:
    0 = C

  Therefore:
    R(x) = 100x - 2x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. WHY IS R(0) = 0?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a company sells zero products, it usually earns zero revenue.

Therefore:
  R(0) = 0

This helps determine the constant of integration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. MARGINAL PROFIT AND TOTAL PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Profit is generally:
  P(x) = R(x) - C(x)

Marginal profit is the derivative:
  MP = P'(x)

If we know marginal profit, we can find total profit through antidifferentiation:
  P(x) = ∫ MP(x) dx + C

Example 3:
  Suppose MP = 50 - 2x.

  Find the profit function if P(0) = -200.

  Integrate:
    P(x) = ∫ (50 - 2x) dx

  Therefore:
    P(x) = 50x - x² + C

  Use P(0) = -200:
    -200 = C

  Therefore:
    P(x) = 50x - x² - 200

Interpretation:
  At x = 0, P(0) = -200.
  This means the company has a loss of 200 monetary units before selling anything, possibly because of fixed costs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. THE RELATIONSHIP BETWEEN COST, REVENUE, AND PROFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental relationship is:
  P(x) = R(x) - C(x)

Differentiating:
  P'(x) = R'(x) - C'(x)

Therefore:
  MP = MR - MC

This equation tells us:
  Marginal profit equals marginal revenue minus marginal cost.

Using antidifferentiation, we can reverse this relationship.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: FINDING PROFIT FROM MARGINAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  MR = 80 - 2x
and:
  MC = 20 + x

Find the marginal profit.

Since:
  MP = MR - MC

we get:
  MP = (80 - 2x) - (20 + x)

Simplify:
  MP = 60 - 3x

Now antidifferentiate:
  P(x) = ∫ (60 - 3x) dx

Therefore:
  P(x) = 60x - (3/2)x² + C

If:
  P(0) = -100

then:
  C = -100

Thus:
  P(x) = 60x - (3/2)x² - 100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. MARGINAL PRODUCT AND TOTAL PRODUCT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In production economics, a company may study how output changes as more resources are used.

Suppose Q(L) represents total production, where L represents labor.

The marginal product of labor is:
  MP_L = dQ/dL

If we know the marginal product, we can recover the total production:
  Q(L) = ∫ MP_L dL + C

Example:
  Suppose MP_L = 40 - 2L.

  Then:
    Q(L) = ∫ (40 - 2L) dL

  Therefore:
    Q(L) = 40L - L² + C

  If Q(0) = 0, then:
    C = 0

  Thus:
    Q(L) = 40L - L²

This tells us how total production changes as labor increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. TOTAL CHANGE FROM A MARGINAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation can also calculate the total change in an economic quantity.

Suppose the marginal cost is MC(x).

The change in total cost from producing a units to b units is:
  C(b) - C(a) = ∫ₐᵇ MC(x) dx

This is an important application of definite integrals.

Example:
  Suppose MC(x) = 2x + 10.

  Find the change in total cost when production increases from 5 units to 10 units.

  ΔC = ∫₅¹⁰ (2x + 10) dx

  Antidifferentiate:
    x² + 10x

  Evaluate:
    [x² + 10x]₅¹⁰

  At x = 10:
    100 + 100 = 200

  At x = 5:
    25 + 50 = 75

  Therefore:
    ΔC = 200 - 75 = 125

  So the total cost increases by 125 monetary units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. AVERAGE COST AND TOTAL COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average cost is:
  AC(x) = C(x)/x

Therefore:
  C(x) = x · AC(x)

Sometimes, after finding a total cost function using antidifferentiation, economists calculate average cost to determine the average expense per unit.

For example, if:
  C(x) = 3x² + 20x + 500

then:
  AC(x) = (3x² + 20x + 500)/x

Simplify:
  AC(x) = 3x + 20 + 500/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. MARGINAL COST AND AVERAGE COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These two concepts are related but different.

Marginal Cost:
  MC = C'(x)
  It measures the approximate cost of producing one additional unit.

Average Cost:
  AC = C(x)/x
  It measures the average cost per unit.

Antidifferentiation helps us move from:
  MC → C

while algebra allows us to find:
  C → AC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. CONSUMER AND PRODUCER ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation is also useful for reconstructing economic functions from marginal information.

For example, if:
  dU/dx = MU(x)

where:
  U(x) = utility
  MU(x) = marginal utility

then:
  U(x) = ∫ MU(x) dx + C

Similarly, marginal benefit can be integrated to find total benefit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. MARGINAL UTILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Utility represents the satisfaction a consumer receives from consuming goods or services.

Let U(x) represent total utility.

Then marginal utility is:
  MU = dU/dx

Therefore:
  U(x) = ∫ MU(x) dx + C

Example:
  Suppose MU = 100 - 5x.

  Find the total utility.

  U(x) = ∫ (100 - 5x) dx

  Therefore:
    U(x) = 100x - (5/2)x² + C

  If U(0) = 0, then:
    C = 0

  Thus:
    U(x) = 100x - (5/2)x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. MARGINAL BENEFIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose MB(x) represents marginal benefit.

Then total benefit can be found using:
  B(x) = ∫ MB(x) dx + C

For example:
  MB = 200 - 10x

Then:
  B(x) = 200x - 5x² + C

If B(0) = 0, then:
  B(x) = 200x - 5x²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GROWTH MODELS IN ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antidifferentiation is also used in economic growth models.

Suppose a quantity Q(t) changes at the rate:
  dQ/dt = r(t)

Then the total quantity can be found by integrating:
  Q(t) = ∫ r(t) dt + C

For example, suppose national income grows according to:
  dI/dt = 1000 + 50t

Then:
  I(t) = ∫ (1000 + 50t) dt

Therefore:
  I(t) = 1000t + 25t² + C

If the initial income is known, we can determine C.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. EXPONENTIAL ECONOMIC GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many economic quantities grow proportionally to their current size.

For example:
  dP/dt = kP

This means the rate of growth is proportional to the current amount.

Separate variables:
  dP/P = k dt

Integrate:
  lnP = kt + C

Therefore:
  P = Ce^(kt)

This type of model can be applied to:
  • Investments
  • Population
  • Economic growth
  • Inflation models
  • Compound interest

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. CONTINUOUS COMPOUND INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A classic application is continuous compounding.

Suppose:
  dA/dt = rA

Separate:
  dA/A = r dt

Integrate:
  lnA = rt + C

Therefore:
  A = Ce^(rt)

If A(0) = P, then:
  C = P

Thus:
  A(t) = Pe^(rt)

Where:
  P = initial investment
  r = interest rate
  t = time
  A(t) = amount after time t

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. SUMMARY OF IMPORTANT ECONOMIC APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Given                        Antidifferentiate to Find
  ─────────────────────────────────────────────────────────────
  Marginal Cost MC             Total Cost C
  Marginal Revenue MR          Total Revenue R
  Marginal Profit MP           Total Profit P
  Marginal Product             Total Production
  Marginal Utility MU          Total Utility
  Marginal Benefit MB          Total Benefit
  Growth Rate                  Total Quantity

The general pattern is:
  Rate of Change → Total Quantity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. COMPLETE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a company has:
  MC = 4x + 30

and the fixed cost is:
  C(0) = 1000

Find the total cost.

Since C'(x) = 4x + 30, antidifferentiate:
  C(x) = ∫ (4x + 30) dx

Therefore:
  C(x) = 2x² + 30x + C

Use C(0) = 1000:
  1000 = C

Therefore:
  C(x) = 2x² + 30x + 1000

Now suppose:
  MR = 100 - 2x

Find total revenue.

R(x) = ∫ (100 - 2x) dx

Thus:
  R(x) = 100x - x² + C

Since R(0) = 0, we have:
  C = 0

Therefore:
  R(x) = 100x - x²

Now find profit:
  P(x) = R(x) - C(x)

Substitute:
  P(x) = (100x - x²) - (2x² + 30x + 1000)

Simplify:
  P(x) = -3x² + 70x - 1000

This example shows how antidifferentiation can reconstruct important economic functions from marginal information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Marginal Cost:
    MC = C'(x)
    C(x) = ∫ MC(x) dx + C

  Marginal Revenue:
    MR = R'(x)
    R(x) = ∫ MR(x) dx + C

  Marginal Profit:
    MP = P'(x)
    P(x) = ∫ MP(x) dx + C

  Profit Relationship:
    P(x) = R(x) - C(x)
  and:
    MP = MR - MC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important principle behind applications of antidifferentiation in economics is:

  Marginal Function → Total Function

through integration.

If differentiation answers:
  "How fast is an economic quantity changing?"

then antidifferentiation answers:
  "What is the total economic quantity that produces this rate of change?"

For example:
  MC = C'(x)

means marginal cost is the rate at which total cost changes.

By antidifferentiating:
  C(x) = ∫ MC(x) dx + C

we recover the total cost function.

The same principle applies to revenue, profit, production, utility, benefit, investment, and economic growth.

In short:
  Economics often gives us marginal information (rates of change), and 
  antidifferentiation allows us to reconstruct the total quantity.
  `,
  examples: [
    "MC = 6x + 20, C(0) = 500 → C(x) = 3x² + 20x + 500",
    "MR = 100 - 4x, R(0) = 0 → R(x) = 100x - 2x²",
    "MP = 50 - 2x, P(0) = -200 → P(x) = 50x - x² - 200",
    "MR = 80 - 2x, MC = 20 + x, P(0) = -100 → P(x) = 60x - (3/2)x² - 100",
    "MP_L = 40 - 2L, Q(0) = 0 → Q(L) = 40L - L²",
    "dP/dt = kP → P = Ce^(kt) (exponential growth)",
    "dA/dt = rA, A(0) = P → A(t) = Pe^(rt) (continuous compound interest)",
  ],
};

export default topic;