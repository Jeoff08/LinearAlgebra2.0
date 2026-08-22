// filename: net-change-theorem.ts

const topic = {
  id: "net-change-theorem",
  title: "Net Change Theorem",
  summary:
    "A theorem connecting derivatives and definite integrals, stating that the integral of a rate of change over an interval gives the total net change in the original quantity: F(b) - F(a) = ∫ₐᵇ F'(x) dx.",
  details: `
The Net Change Theorem connects derivatives and definite integrals. It tells us that if we know the rate at which something changes, we can find its total change over an interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. MAIN IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a quantity is represented by F(t), and its rate of change is:
  F'(t)

Then the total change in F from t = a to t = b is:
  F(b) - F(a) = ∫ₐᵇ F'(t) dt

In simple terms:
  Total change = integral of the rate of change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHY DOES IT WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If F'(t) represents how quickly F is changing, then adding up all those tiny changes from a to b gives the overall change.

The definite integral performs this accumulation:
  ∫ₐᵇ F'(t) dt

The result is:
  F(b) - F(a)

So:
  Final Value - Initial Value = Accumulated Change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important formula is:
  ΔF = F(b) - F(a) = ∫ₐᵇ F'(x) dx

Where:
  F(a) = initial value
  F(b) = final value
  F'(x) = rate of change
  ∫ₐᵇ F'(x) dx = total accumulated change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXAMPLE: FINDING TOTAL CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a particle's velocity is:
  v(t) = 3t² + 2

Find the particle's change in position from t = 1 to t = 4.

Since velocity is the rate of change of position:
  s'(t) = v(t)

Therefore:
  Δs = ∫₁⁴ v(t) dt

Substitute:
  Δs = ∫₁⁴ (3t² + 2) dt

Integrate:
  ∫ (3t² + 2) dt = t³ + 2t

Evaluate:
  [t³ + 2t]₁⁴

At t = 4:
  4³ + 2(4) = 64 + 8 = 72

At t = 1:
  1³ + 2(1) = 3

Therefore:
  72 - 3 = 69

So the particle's position changes by:
  69 units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE: RATE OF WATER FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose water enters a tank at a rate of:
  R(t) = 5t + 2

liters per minute.

How much water enters the tank between t = 0 and t = 3?

The rate is:
  R(t) = 5t + 2

Therefore, the total amount of water added is:
  ∫₀³ (5t + 2) dt

Integrate:
  (5/2)t² + 2t

Evaluate:
  [(5/2)t² + 2t]₀³
  = (5/2)(9) + 6
  = 45/2 + 6
  = 57/2
  = 28.5 liters

So 28.5 liters of water entered the tank.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONNECTION TO MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Net Change Theorem is especially important in motion problems.

Velocity → Change in Position:
  Δs = ∫ₐᵇ v(t) dt

Acceleration → Change in Velocity:
  Δv = ∫ₐᵇ a(t) dt

For example:
  v(b) - v(a) = ∫ₐᵇ a(t) dt

So if you know acceleration, you can calculate how much velocity changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. NET CHANGE VS. TOTAL CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This distinction is very important.

Suppose velocity is sometimes positive and sometimes negative.

Net change in position:
  ∫ₐᵇ v(t) dt
  This allows positive and negative areas to cancel.

Total distance traveled:
  ∫ₐᵇ |v(t)| dt
  This makes every part positive.

Example:
  Suppose:
    v(t) = { 3, 0 ≤ t ≤ 2; -3, 2 < t ≤ 4 }

  The first interval contributes:
    3(2) = 6

  The second contributes:
    -3(2) = -6

  Therefore:
    Net Change = 6 - 6 = 0

  But the total distance is:
    6 + 6 = 12

  Thus:
    Net Change = 0
  while:
    Total Distance = 12

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ANOTHER WAY TO REMEMBER IT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Think of a rate as telling you how quickly something changes.

For example:

  Rate                        Accumulated Quantity
  ───────────────────────────────────────────────────────────
  Velocity                    Change in position
  Acceleration                Change in velocity
  Water flow rate             Change in water volume
  Revenue rate                Change in revenue
  Population growth rate      Change in population

The general pattern is:
  Rate of Change → Net Change

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. NET CHANGE THEOREM VS. FUNDAMENTAL THEOREM OF CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

They are closely related.

The Net Change Theorem says:
  F(b) - F(a) = ∫ₐᵇ F'(x) dx

The Fundamental Theorem of Calculus Part 2 gives us a practical way to evaluate the integral:
  ∫ₐᵇ f(x) dx = F(b) - F(a)

where:
  F'(x) = f(x)

So essentially, the Net Change Theorem explains what the integral represents, while the Fundamental Theorem gives us a method for calculating it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. QUICK EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:
  f'(x) = 4x + 3

find the net change in f from x = 2 to x = 5.

Use:
  Δf = ∫₂⁵ (4x + 3) dx

Integrate:
  2x² + 3x

Evaluate:
  [2x² + 3x]₂⁵
  = (2(25) + 15) - (2(4) + 6)
  = 65 - 14
  = 51

Therefore, the net change is 51 units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. KEY THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⭐ Main formula:
  Net Change = ∫ₐᵇ Rate of Change dx

⭐ Equivalent form:
  F(b) - F(a) = ∫ₐᵇ F'(x) dx

⭐ In motion:
  Δs = ∫ₐᵇ v(t) dt
  Δv = ∫ₐᵇ a(t) dt

⭐ Net change can be negative, zero, or positive.

⭐ Net change is NOT necessarily total distance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Confusing net change with total amount
  Net change allows positive and negative to cancel.
  Total amount requires absolute values.

Mistake 2: Forgetting the initial value
  The formula gives change, not the final value.
  To find final value:
    F(b) = F(a) + ∫ₐᵇ F'(x) dx

Mistake 3: Confusing position and displacement
  Displacement is net change in position.
  Total distance is the integral of speed |v(t)|.

Mistake 4: Misidentifying the rate
  Make sure you know what quantity the rate corresponds to.
  Velocity → change in position
  Acceleration → change in velocity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Net Change Theorem:
    F(b) - F(a) = ∫ₐᵇ F'(x) dx

  Displacement:
    Δs = ∫ₐᵇ v(t) dt

  Change in Velocity:
    Δv = ∫ₐᵇ a(t) dt

  Total Distance:
    D = ∫ₐᵇ |v(t)| dt

  Final Value from Initial:
    F(b) = F(a) + ∫ₐᵇ F'(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Net Change Theorem connects rates and totals:

  Rate of Change
    ↓ ∫
  Net Change

More formally:
  F'(x) (rate) → ∫ → F(b) - F(a) (net change)

In one sentence:

  The Net Change Theorem says that integrating a rate of change over an 
  interval gives the total accumulated change in the original quantity.
  `,
  examples: [
    "Δs = ∫₁⁴ (3t² + 2) dt = 69 (change in position)",
    "Water added: ∫₀³ (5t + 2) dt = 28.5 liters",
    "Velocity → displacement: Δs = ∫ₐᵇ v(t) dt",
    "Acceleration → change in velocity: Δv = ∫ₐᵇ a(t) dt",
    "Net change from f'(x) = 4x + 3 from 2 to 5: Δf = 51",
    "Net change vs total distance with v(t) = {3, -3}: net = 0, total = 12",
    "Final value: F(b) = F(a) + ∫ₐᵇ F'(x) dx",
  ],
};

export default topic;