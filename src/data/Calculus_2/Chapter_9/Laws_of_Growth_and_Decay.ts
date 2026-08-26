// filename: LawsOfGrowthAndDecay.ts

const topic = {
  id: "laws-of-growth-and-decay",
  title: "Laws of Growth and Decay",
  summary:
    "Exponential models describing how quantities change over time when their rate of change is proportional to the amount present, with applications in population growth, radioactive decay, compound interest, and more.",
  details: `
The Laws of Growth and Decay describe how a quantity changes over time when its rate of change is proportional to the amount currently present.

This is one of the most important applications of exponential functions and differential equations in Calculus.

The basic idea is:

  The more of something you have, the faster it can grow or decay.

For example:

  • A large population can produce more new individuals.
  • A large amount of radioactive material has more atoms available to decay.
  • A larger investment can earn more interest.
  • A larger bacterial population can reproduce more quickly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE BASIC LAW OF GROWTH AND DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The fundamental equation is:

  dP/dt = kP

where:

  P = quantity at time t
  dP/dt = rate of change of the quantity
  k = constant of proportionality
  t = time

The sign of k determines whether the quantity grows or decays.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  k > 0

then the quantity increases over time.

The differential equation is:

  dP/dt = kP

Its solution is:

  P(t) = P₀ e^(kt)

where:

  P₀ = initial amount
  P(t) = amount at time t
  k = growth constant
  t = time
  e ≈ 2.71828

Why Is It Called Exponential Growth?

Because the variable t appears in the exponent:

  P(t) = P₀ e^(kt)

As time increases, the exponential expression can grow increasingly quickly.

Unlike linear growth, exponential growth does not add the same amount every time.

Instead, its rate of growth depends on the current amount.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLE OF EXPONENTIAL GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a population starts with:

  P₀ = 100

and grows according to:

  P(t) = 100 e^(0.2t)

The positive value:

  k = 0.2

means the population is growing.

At:

  t = 0

we get:

  P(0) = 100 e⁰

Since:

  e⁰ = 1

then:

  P(0) = 100

This confirms that 100 is the initial population.

As t increases, the value of:

  P(t)

also increases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If:

  k < 0

then the quantity decreases over time.

The model can be written as:

  P(t) = P₀ e^(kt)

where k is negative.

For example:

  P(t) = 100 e^(-0.2t)

The negative exponent causes the quantity to decrease.

Another common form is:

  P(t) = P₀ e^(-kt)

where:

  k > 0

In this form, the negative sign explicitly represents decay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. EXAMPLE OF EXPONENTIAL DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a substance initially has:

  P₀ = 500

and decays according to:

  P(t) = 500 e^(-0.1t)

At:

  t = 0

we get:

  P(0) = 500 e⁰

Therefore:

  P(0) = 500

As time increases:

  e^(-0.1t)

becomes smaller.

Therefore:

  P(t)

decreases.

The quantity approaches zero but, in the ideal mathematical model, does not become negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE MEANING OF "RATE IS PROPORTIONAL TO THE AMOUNT"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The statement:

  The rate of change is proportional to the amount present.

means:

  dP/dt ∝ P

The proportionality symbol:

  ∝

means "is proportional to."

Therefore:

  dP/dt = kP

The constant k tells us how strongly the quantity grows or decays.

Example

Suppose there are only:

  10 bacteria.

There are fewer bacteria available to reproduce.

But if there are:

  10,000 bacteria, there are many more organisms reproducing.

Therefore, the rate of growth can be much greater when the population is larger.

That is the main principle behind:

  dP/dt = kP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DERIVING THE GROWTH AND DECAY FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:

  dP/dt = kP

Separate the variables:

  (1/P) dP = k dt

Integrate both sides:

  ∫ (1/P) dP = ∫ k dt

This gives:

  ln|P| = kt + C

Rewrite the constant:

  ln|P| = ln A + kt

Using logarithmic properties:

  ln|P| = ln(A e^(kt))

Therefore:

  P = A e^(kt)

At time:

  t = 0

we have:

  P(0) = A

So:

  A = P₀

Therefore:

  P(t) = P₀ e^(kt)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GROWTH RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For exponential growth:

  P(t) = P₀ e^(kt)

the constant:

  k > 0

is called the continuous growth constant.

A larger value of k means faster growth.

Example

Compare:

  P₁(t) = 100 e^(0.1t)

and:

  P₂(t) = 100 e^(0.5t)

Both start at:

  100

but:

  P₂(t)

grows faster because:

  0.5 > 0.1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. DECAY RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For exponential decay:

  P(t) = P₀ e^(-kt)

where:

  k > 0

a larger value of k means faster decay.

Example

Compare:

  P₁(t) = 100 e^(-0.1t)

and:

  P₂(t) = 100 e^(-0.5t)

Both start at:

  100

but:

  P₂(t)

decreases faster.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. HALF-LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The half-life of a substance is the amount of time required for the quantity to decrease to half of its original amount.

Suppose:

  P(t) = P₀ e^(-kt)

At the half-life:

  P(t) = P₀/2

Substitute:

  P₀/2 = P₀ e^(-kt)

Divide by P₀:

  1/2 = e^(-kt)

Take the natural logarithm:

  ln(1/2) = -kt

Therefore:

  t = (ln 2)/k

Thus, the half-life formula is:

  t₁/₂ = (ln 2)/k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. EXAMPLE OF HALF-LIFE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a radioactive substance has:

  k = 0.05

The half-life is:

  t₁/₂ = (ln 2)/0.05

Since:

  ln 2 ≈ 0.693

then:

  t₁/₂ ≈ 13.86

Therefore:

  t₁/₂ ≈ 13.86 time units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DOUBLING TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For exponential growth, we often want to know how long it takes for a quantity to double.

Suppose:

  P(t) = P₀ e^(kt)

For doubling:

  P(t) = 2P₀

Substitute:

  2P₀ = P₀ e^(kt)

Divide by P₀:

  2 = e^(kt)

Take the natural logarithm:

  ln 2 = kt

Therefore:

  t = (ln 2)/k

This is called the doubling time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EXAMPLE OF DOUBLING TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  k = 0.2

Then:

  t = (ln 2)/0.2

Using:

  ln 2 ≈ 0.693

we get:

  t ≈ 3.47

Therefore:

  Doubling time ≈ 3.47 time units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. GROWTH AND DECAY GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general growth model is:

  P(t) = P₀ e^(kt)

When k > 0

The graph represents growth:

  P(t) → ∞

as:

  t → ∞

When k < 0

The graph represents decay:

  P(t) → 0

as:

  t → ∞

For decay, the graph approaches:

  y = 0

which acts as a horizontal asymptote.

The quantity becomes smaller and smaller but does not become negative in the ideal exponential model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. COMMON APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Laws of Growth and Decay are used in many real-world situations.

Population Growth
  P(t) = P₀ e^(kt)

Used to model populations under ideal conditions.

Bacterial Growth

Bacteria can reproduce rapidly, causing the population to increase exponentially.

Radioactive Decay

Radioactive substances decrease over time:

  A(t) = A₀ e^(-kt)

Continuous Compound Interest

The formula is:

  A = P e^(rt)

where:

  P = principal
  A = final amount
  r = interest rate
  t = time

Cooling and Other Processes

Some physical processes can be modeled using exponential decay or related differential equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. GROWTH VS. DECAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Property                Exponential Growth          Exponential Decay
  ──────────────────────────────────────────────────────────────────────────
  General Form            P = P₀ e^(kt)              P = P₀ e^(-kt)
  Value of k              k > 0                      k > 0 (in the -kt form)
  Behavior                Increases                  Decreases
  Long-term behavior      Approaches infinity        Approaches zero
  Example                 Population growth          Radioactive decay
  Time concept            Doubling time              Half-life

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Fundamental Law:
    dP/dt = kP

  General Solution:
    P(t) = P₀ e^(kt)

  Exponential Growth:
    P(t) = P₀ e^(kt)

  Exponential Decay:
    P(t) = P₀ e^(-kt)

  Doubling Time:
    t = (ln 2)/k

  Half-Life:
    t₁/₂ = (ln 2)/k

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Laws of Growth and Decay describe situations where the rate at which something changes depends on how much of it already exists.

The fundamental relationship is:

  dP/dt = kP

If:

  k > 0

the quantity experiences exponential growth.

If:

  k < 0

the quantity experiences exponential decay.

The solution is:

  P(t) = P₀ e^(kt)

The most important idea to remember is:

  In exponential growth and decay, the rate of change is proportional to the current amount. The quantity changes by continuous multiplication rather than by adding or subtracting a fixed amount.
  `,
  examples: [
    "P(t) = 100 e^(0.2t) → population growth with k = 0.2",
    "P(t) = 500 e^(-0.1t) → radioactive decay with k = 0.1",
    "t₁/₂ = (ln 2)/k → half-life formula",
    "t_doubling = (ln 2)/k → doubling time formula",
    "If k = 0.05, half-life = 0.693/0.05 ≈ 13.86 time units",
    "If k = 0.2, doubling time = 0.693/0.2 ≈ 3.47 time units",
    "dP/dt = kP → rate is proportional to the amount present",
  ],
};

export default topic;