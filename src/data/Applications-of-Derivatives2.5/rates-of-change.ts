const topic = {
  id: "rates-of-change",
  title: "Rates of Change",
  summary:
    "Average rate of change, instantaneous rate of change, velocity, acceleration, and real-world applications.",
  details: `
Rates of Change describe how quickly one quantity changes compared with another quantity.

In calculus, rates of change are one of the main ideas behind the derivative. The derivative tells us the instantaneous rate of change of a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A RATE OF CHANGE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose a quantity y changes as x changes.

The average rate of change is: Δy/Δx

where:
  • Δy = change in y
  • Δx = change in x

In terms of two points, (x₁, y₁) and (x₂, y₂), the average rate of change is: [y₂ - y₁]/[x₂ - x₁]

This is exactly the slope of the secant line connecting the two points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. SIMPLE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the temperature increases from 20°C to 30°C in 5 hours.

The change in temperature is: ΔT = 30 - 20 = 10°C

The change in time is: Δt = 5 hours

Therefore: Rate of Change = 10/5 = 2°C/hour

The temperature is increasing at an average rate of 2°C per hour.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. AVERAGE RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a function y = f(x), the average rate of change from x = a to x = b is: [f(b) - f(a)]/(b - a)

This formula is extremely important.

Example: Let f(x) = x²

Find the average rate of change from x = 2 to x = 5.

First calculate: f(2) = 2² = 4 and f(5) = 5² = 25

Then: [f(5) - f(2)]/(5 - 2) = (25 - 4)/3 = 21/3 = 7

So the average rate of change is 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. RATE OF CHANGE AS SLOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average rate of change is the slope of a secant line.

For two points, (x₁, y₁) and (x₂, y₂), the slope is: m = (y₂ - y₁)/(x₂ - x₁)

Therefore: Average Rate of Change = Secant Line Slope

The idea is that the secant line measures the overall change between two points.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The average rate of change considers an interval.

But sometimes we want to know: How quickly is the quantity changing at one exact point?

This is called the instantaneous rate of change.

It is found using the derivative: f'(x) = Instantaneous Rate of Change

So calculus allows us to move from Average Rate of Change to Instantaneous Rate of Change by taking a limit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE AS A RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The derivative is defined as: f'(x) = lim(h→0) [f(x+h) - f(x)]/h

This represents the instantaneous rate of change.

The expression [f(x+h) - f(x)]/h is an average rate of change over a very small interval.

As h → 0, the interval becomes extremely small, giving us the instantaneous rate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: FINDING AN INSTANTANEOUS RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose f(x) = x²

We want to find the instantaneous rate of change at x = 3.

First find the derivative: f'(x) = 2x

Then evaluate at x = 3: f'(3) = 2(3) = 6

Therefore, the instantaneous rate of change at x = 3 is 6.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. POSITIVE AND NEGATIVE RATES OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The sign of a rate of change tells us whether a quantity is increasing or decreasing.

Positive rate:
  If f'(x) > 0, the function is generally increasing.

Negative rate:
  If f'(x) < 0, the function is generally decreasing.

Zero rate:
  If f'(x) = 0, the function has no instantaneous change at that point.

Example: f'(x) = 5 means the quantity is increasing at a rate of 5 units per unit of x.

Meanwhile, f'(x) = -3 means it is decreasing at a rate of 3 units per unit of x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. UNITS OF RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rates of change always have units.

Examples:
  • Distance and time: meters/second (m/s)
  • Temperature and time: °C/hour
  • Population and time: people/year
  • Revenue and number of products: dollars/product

The units help explain what the derivative means in a real-world situation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. RATES OF CHANGE IN MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rates of change are especially important in motion along a line.

Suppose s(t) represents the position of an object.

The rate of change of position with respect to time is: ds/dt

This is the velocity.

Therefore: v(t) = s'(t)

If position changes rapidly, velocity is large.
If position changes slowly, velocity is small.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. VELOCITY IS A RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose: s(t) = t² + 2t

Differentiate: s'(t) = 2t + 2

Therefore: v(t) = 2t + 2

At t = 3: v(3) = 2(3) + 2 = 8

So the position is changing at 8 units/second at t = 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. ACCELERATION IS ALSO A RATE OF CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Velocity itself can change.

The rate of change of velocity is called acceleration.

a(t) = v'(t)

Since v(t) = s'(t), we have: a(t) = s''(t)

So we have a chain of rates:
  Position → rate of change → Velocity → rate of change → Acceleration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. RELATED RATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rates of change also appear in related rates problems.

In these problems, two or more quantities change with respect to time and are connected by an equation.

Example: Suppose the radius of a circle is changing.

The area is: A = πr²

Differentiate both sides with respect to time: dA/dt = 2πr·dr/dt

Here:
  • dA/dt = rate at which area changes
  • dr/dt = rate at which radius changes

This allows us to determine one rate when another is known.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. AVERAGE VS. INSTANTANEOUS RATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Average rate of change
Formula: [f(b)-f(a)]/(b-a)

Concept: Instantaneous rate of change
Formula: f'(x)

Concept: Velocity
Formula: s'(t)

Concept: Acceleration
Formula: s''(t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT CONNECTION TO DERIVATIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The central idea is: Derivative = Instantaneous Rate of Change

For a function y = f(x), we can write: dy/dx = f'(x)

This means: How much does y change when x changes by a very small amount?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. REAL-WORLD APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rates of change are used in many areas.

Motion: ds/dt = velocity
Acceleration: dv/dt = acceleration
Economics: dR/dx can represent the change in revenue as the number of products changes.
Temperature: dT/dt represents how quickly temperature changes with time.
Population: dP/dt represents how quickly a population is growing or shrinking.
Volume: dV/dt represents how quickly the volume of a container or tank changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Concept: Average Rate of Change
Formula: [f(b)-f(a)]/(b-a)

Concept: Instantaneous Rate of Change
Formula: f'(x)

Concept: Derivative Definition
Formula: lim(h→0) [f(x+h)-f(x)]/h

Concept: Velocity
Formula: v(t) = s'(t)

Concept: Acceleration
Formula: a(t) = v'(t) = s''(t)

Concept: Speed
Formula: Speed = |v(t)|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Rates of Change, remember:

  • Think of rate of change as answering: "How quickly is one quantity changing compared with another?"
  • For an interval, use: Average Rate of Change.
  • For an exact point, use: Derivative.
  • In motion: Position → Velocity → Acceleration.

Each derivative represents the rate of change of the quantity before it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rates of Change are the foundation of differential calculus and connect derivatives to real-world applications.

Key concepts covered:

  ✓ What Is a Rate of Change?
  ✓ Simple Example
  ✓ Average Rate of Change
  ✓ Rate of Change as Slope
  ✓ Instantaneous Rate of Change
  ✓ Derivative as a Rate of Change
  ✓ Positive and Negative Rates
  ✓ Units of Rate of Change
  ✓ Rates of Change in Motion
  ✓ Velocity
  ✓ Acceleration
  ✓ Related Rates
  ✓ Average vs. Instantaneous Rate
  ✓ Real-World Applications
  `,
  examples: [
    "Temperature: 20°C to 30°C in 5 hours → 2°C/hour",
    "f(x) = x² from x=2 to x=5 → average rate = 7",
    "f(x) = x² at x=3 → instantaneous rate = 6",
    "s(t) = t² + 2t → v(t) = 2t + 2, v(3) = 8 m/s",
    "A = πr² → dA/dt = 2πr·dr/dt (related rates)",
    "f'(x) > 0 → increasing",
    "f'(x) < 0 → decreasing",
    "f'(x) = 0 → no instantaneous change",
    "Velocity = ds/dt",
    "Acceleration = dv/dt = s''(t)",
    "Derivative = Instantaneous Rate of Change",
    "Average rate: [f(b)-f(a)]/(b-a)",
    "Instantaneous rate: f'(x)",
    "Position → Velocity → Acceleration",
  ],
};

export default topic;