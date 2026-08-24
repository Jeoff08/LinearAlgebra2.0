// filename: absolute-extrema-on-a-closed-interval.ts

const topic = {
  id: "absolute-extrema-on-a-closed-interval",
  title: "Absolute Extrema on a Closed Interval",
  summary:
    "A systematic method for finding the absolute maximum and minimum of a continuous function on a closed interval [a,b] by checking critical numbers and endpoints.",
  details: `
Absolute extrema on a closed interval is one of the most important applications of derivatives in Calculus 1. It gives us a systematic way to find the absolute maximum and absolute minimum of a function over a specific interval.

The key idea is:

  When a function is continuous on a closed interval [a, b], its absolute 
  maximum and absolute minimum can be found by checking its critical numbers 
  and endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE ABSOLUTE EXTREMA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The word extrema is the plural of extremum.

There are two types:
  • Absolute maximum
  • Absolute minimum

Suppose f is defined on an interval D.

Absolute Maximum:
  The function f has an absolute maximum at x = c if:
    f(c) ≥ f(x)
  for every x ∈ D.

  In simple terms:
    The absolute maximum is the highest function value anywhere in the interval.

Absolute Minimum:
  The function f has an absolute minimum at x = c if:
    f(c) ≤ f(x)
  for every x ∈ D.

  In simple terms:
    The absolute minimum is the lowest function value anywhere in the interval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. WHAT IS A CLOSED INTERVAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A closed interval has the form [a, b].

The square brackets mean that the endpoints are included.

For example:
  [-2, 4] means -2 ≤ x ≤ 4.

Therefore, when searching for absolute extrema on [-2, 4], we must check:
  x = -2 and x = 4.

This is extremely important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY ARE CLOSED INTERVALS IMPORTANT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem tells us:

  If f is continuous on a closed interval [a, b], then f has both an 
  absolute maximum and an absolute minimum on that interval.

Symbolically:
  f continuous on [a, b] ⇒ f has an absolute max and min

There are three important conditions:
  1. The function must be continuous
     There cannot be a break, hole, or vertical asymptote inside the interval.

  2. The interval must be closed
     The endpoints must be included: [a, b].

  3. The interval must be bounded
     The endpoints must be finite numbers.

For example:
  [1, 5] is closed and bounded.

But:
  [1, ∞) is not bounded.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE CLOSED-INTERVAL METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the main procedure you should remember.

Suppose you need to find the absolute maximum and minimum of f(x) on [a, b].

Follow these steps:

Step 1: Find f'(x)
  Differentiate the function:
    f(x) → f'(x)

Step 2: Find the critical numbers
  Solve f'(x) = 0 and identify points where f'(x) does not exist.
  Only critical numbers that are in the interval are considered.

Step 3: Evaluate the function at the critical numbers
  If the critical numbers are c₁, c₂, ..., cₙ, calculate:
    f(c₁), f(c₂), ..., f(cₙ)

Step 4: Evaluate the endpoints
  Calculate:
    f(a) and f(b)

Step 5: Compare all the values
  The largest value is the Absolute Maximum.
  The smallest value is the Absolute Minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. THE MOST IMPORTANT FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a continuous function on [a, b]:

  Absolute extrema candidates = Critical numbers + Endpoints

This is the heart of the closed-interval method.

You do not simply find f'(x) = 0 and stop.

You must also check:
  x = a and x = b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: FINDING ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum and minimum of:
  f(x) = x³ - 3x² + 2

on:
  [-1, 3]

Step 1: Find the derivative
  f'(x) = 3x² - 6x

Factor:
  f'(x) = 3x(x - 2)

Step 2: Find critical numbers
  Set the derivative equal to zero:
    3x(x - 2) = 0

  Therefore:
    x = 0 or x = 2

  Both are inside [-1, 3].

So our candidates are:
  x = -1, 0, 2, 3

Notice that -1 and 3 are the endpoints.

Step 3: Evaluate all candidates

At x = -1:
  f(-1) = (-1)³ - 3(-1)² + 2
  = -1 - 3 + 2
  = -2

At x = 0:
  f(0) = 2

At x = 2:
  f(2) = 2³ - 3(2)² + 2
  = 8 - 12 + 2
  = -2

At x = 3:
  f(3) = 3³ - 3(3)² + 2
  = 27 - 27 + 2
  = 2

Now compare:

  x     |  f(x)
  ───────┼────────
  -1    |  -2
   0    |   2
   2    |  -2
   3    |   2

The largest value is 2.

The smallest value is -2.

Therefore:
  Absolute maximum = 2 occurring at x = 0 and x = 3
and:
  Absolute minimum = -2 occurring at x = -1 and x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY WE MUST CHECK THE ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is probably the most important lesson of the topic.

Consider:
  f(x) = x² on [-3, 1]

First derivative:
  f'(x) = 2x

Set:
  2x = 0

Therefore:
  x = 0

If we only checked the critical number, we would find:
  f(0) = 0

We might incorrectly think that 0 is the only important value.

But now check the endpoints.

Left endpoint:
  f(-3) = (-3)² = 9

Right endpoint:
  f(1) = 1² = 1

Compare:
  f(-3) = 9
  f(0) = 0
  f(1) = 1

Therefore:
  Absolute maximum = 9 at x = -3
and:
  Absolute minimum = 0 at x = 0

The absolute maximum occurs at an endpoint.

That is why the endpoints can never be ignored.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. GEOMETRIC INTERPRETATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine looking at the graph only between x = a and x = b.

The absolute maximum is the highest point of the graph within that region.

The absolute minimum is the lowest point.

For example, if the graph has:
  • a peak in the middle,
  • a valley in the middle,
  • and a very high endpoint,

the endpoint might actually be the absolute maximum.

So you cannot determine absolute extrema merely by looking for horizontal tangents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CRITICAL POINTS VS. ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are two major sources of candidates.

Critical numbers:
  These occur when f'(x) = 0 or when f'(x) does not exist.

Endpoints:
  For [a, b], the endpoints are x = a and x = b.

Therefore:
  Candidates = {a, b, critical numbers}

Then evaluate f(x) at every candidate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. WHAT IF THE DERIVATIVE DOES NOT EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A critical number can also occur when the derivative does not exist.

For example:
  f(x) = |x| on [-2, 2]

The function is continuous, but at x = 0 there is a sharp corner.

The derivative does not exist at 0.

Therefore, x = 0 is a critical number.

Evaluate:
  f(-2) = 2
  f(0) = 0
  f(2) = 2

Therefore:
  Absolute maximum = 2 at x = -2, 2
and:
  Absolute minimum = 0 at x = 0

This shows why you should check both:
  f'(x) = 0 and f'(x) does not exist.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. ABSOLUTE EXTREMA VS. LOCAL EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These concepts are related but different.

Absolute maximum:
  The highest value over the entire interval.

Local maximum:
  A value that is higher than nearby values.

Absolute minimum:
  The lowest value over the entire interval.

Local minimum:
  A value that is lower than nearby values.

For example, a function could have two local maximums: 10 and 15.

Both may be local maximum values.

But if 15 is the largest value on the entire interval, then:
  15 = absolute maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A VERY IMPORTANT DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = x³ - 3x² + 2 on [-1, 3]

We found:
  f(0) = 2 and f(3) = 2

The point at x = 0 is an interior local maximum.

The endpoint x = 3 also gives the absolute maximum value.

Therefore, an absolute maximum does not necessarily have to occur at a critical number.

It can occur at:
  • an endpoint
  • or an interior critical number

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHAT HAPPENS IF THE FUNCTION IS NOT CONTINUOUS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Extreme Value Theorem does not guarantee extrema if the function is not continuous.

For example, consider a function with a hole or jump inside an interval.

Even if the interval is closed, discontinuity can prevent the function from achieving a highest or lowest value.

Therefore, before applying the theorem, always ask:
  Is the function continuous on [a, b]?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHAT HAPPENS ON AN OPEN INTERVAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = x on (0, 1)

The function is continuous.

However, there is no absolute minimum because 0 is not included.

There is also no absolute maximum because 1 is not included.

The function approaches both values but never reaches them.

So:
  No absolute maximum
and:
  No absolute minimum

This is another reason the closed interval condition is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. A MORE EFFICIENT PROBLEM-SOLVING STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When solving an absolute-extrema problem, you can use this checklist:

Given: f(x) on [a, b]

Do this:
  1. Differentiate: f'(x)
  2. Solve: f'(x) = 0
  3. Find where f'(x) does not exist
  4. Keep critical numbers inside [a, b]
  5. Evaluate f(a), f(b), and all critical values
  6. Compare:
     Largest = Absolute maximum
     Smallest = Absolute minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. FULL EXAMPLE WITH A RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find the absolute maximum and minimum of:
  f(x) = x + 4/x on [1, 5]

Step 1: Differentiate
  f'(x) = 1 - 4/x²

Write it as:
  f'(x) = (x² - 4)/x²

Set:
  (x² - 4)/x² = 0

The numerator must equal zero:
  x² - 4 = 0

Therefore:
  x = ±2

Only x = 2 is inside [1, 5].

Step 2: Evaluate candidates

Left endpoint:
  f(1) = 1 + 4/1 = 5

Critical number:
  f(2) = 2 + 4/2 = 4

Right endpoint:
  f(5) = 5 + 4/5 = 29/5 = 5.8

Compare:
  5, 4, 5.8

Therefore:
  Absolute minimum = 4 at x = 2
and:
  Absolute maximum = 29/5 at x = 5

Again, notice that the maximum occurred at an endpoint.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY THIS TOPIC IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute extrema are the foundation of optimization.

Once you understand this process, you can solve problems such as:

  • Maximum area: Find the largest possible area
  • Minimum cost: Find the smallest possible cost
  • Maximum profit: Find the greatest profit
  • Minimum distance: Find the shortest distance
  • Maximum volume: Find the greatest volume

The same mathematical idea is being used:
  Find candidates → Evaluate → Compare

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. QUICK COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                Meaning
  ───────────────────────────────────────────────────────────────────────────
  Absolute maximum       Greatest value on the entire interval
  Absolute minimum       Smallest value on the entire interval
  Local maximum          Greatest compared with nearby values
  Local minimum          Smallest compared with nearby values
  Critical number        f'(x) = 0 or f'(x) DNE
  Closed interval        [a, b]
  Endpoint               x = a or x = b
  EVT                    Continuous function on [a, b] has absolute max and min

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE MAIN FORMULA TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a continuous function f on a closed interval [a, b],

the absolute extrema can be found by evaluating:
  f(a), f(b), f(c₁), f(c₂), ...

where c₁, c₂, ... are the critical numbers inside [a, b].

Then:
  max{f(a), f(b), f(c₁), ...}

is the absolute maximum, while:
  min{f(a), f(b), f(c₁), ...}

is the absolute minimum.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Absolute Extrema on a Closed Interval method can be remembered as:

  Differentiate → Find Critical Numbers → Check Endpoints → Evaluate → Compare

The most important things to remember are:

  • Absolute maximum = highest function value on the entire interval.
  • Absolute minimum = lowest function value on the entire interval.
  • Critical numbers come from f'(x) = 0 or where f'(x) does not exist.
  • Always check both endpoints of a closed interval.
  • A maximum or minimum can occur at an interior critical point or an endpoint.
  • If f is continuous on [a, b], the Extreme Value Theorem guarantees that 
    an absolute maximum and minimum exist.
  • The final answer comes from comparing the function values, not simply from 
    finding where f'(x) = 0.
  `,
  examples: [
    "f(x) = x³ - 3x² + 2 on [-1,3] → max 2 at x=0,3; min -2 at x=-1,2",
    "f(x) = x² on [-3,1] → max 9 at x=-3; min 0 at x=0",
    "f(x) = |x| on [-2,2] → max 2 at x=-2,2; min 0 at x=0",
    "f(x) = x + 4/x on [1,5] → max 29/5 at x=5; min 4 at x=2",
    "Critical numbers: f'(x) = 0 or DNE",
    "Always check endpoints: f(a) and f(b)",
    "EVT: continuous on [a,b] → absolute max and min exist",
  ],
};

export default topic;