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

"image": "src/assets_2.3/175.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT ARE ABSOLUTE EXTREMA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The term "extrema" is the plural of extremum, and it refers to the largest or smallest values that a function attains on a given set. In calculus, we distinguish between absolute (or global) extrema, which are the overall highest and lowest points over the entire domain of interest, and local extrema, which are only the highest or lowest relative to nearby points. When we restrict our attention to a closed interval, the absolute maximum is the greatest output value the function produces anywhere within that interval, and the absolute minimum is the smallest. These extrema are not just theoretical; they are central to optimization problems where we want to maximize profit, minimize cost, or find the best possible outcome. Understanding the difference between absolute and local extrema is crucial because the methods for finding them differ, and a local extremum may not be global.

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

A closed interval is a set of real numbers that includes all values between two endpoints and the endpoints themselves. In notation, it is written as [a, b], where the square brackets indicate inclusion. This means every number x satisfying a ≤ x ≤ b belongs to the interval. The closedness is a crucial property because it guarantees that the function attains its extreme values if it is continuous, thanks to the Extreme Value Theorem. Unlike open intervals, where the function might approach a value at the endpoint but never reach it, a closed interval forces the endpoints to be considered as candidates for extrema. For example, on [-2, 4], both -2 and 4 must be examined. This inclusion is what makes the closed-interval method work; without it, we could not guarantee the existence of absolute extrema.

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

The importance of closed intervals in calculus is underscored by the Extreme Value Theorem (EVT). This theorem states that if a function is continuous on a closed interval [a, b], then it must attain both an absolute maximum and an absolute minimum somewhere on that interval. The theorem relies on two conditions: continuity and closedness. If either condition fails, the function may not have extrema. For instance, a continuous function on an open interval (a, b) might not achieve its least upper bound or greatest lower bound because the endpoints are excluded. Similarly, a discontinuous function on a closed interval may have gaps that prevent extrema. Thus, closed intervals provide the ideal setting for guaranteed optimization. This is why, in many real-world problems, we restrict our domain to a closed interval to ensure a solution exists. The EVT is the theoretical foundation for the closed-interval method we use to find absolute extrema.

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

The closed-interval method is the standard procedure for finding absolute extrema of a continuous function on a closed interval. It is systematic, reliable, and relatively simple to execute. The method rests on the observation that absolute extrema can only occur at critical points (where the derivative is zero or does not exist) or at the endpoints of the interval. Therefore, we do not need to examine every point; we only need to check these finite candidates. The steps are: first, compute the derivative of the function. Second, find all critical numbers that lie within the interval. Third, evaluate the original function at each critical number and at both endpoints. Fourth, compare all these values: the largest is the absolute maximum, and the smallest is the absolute minimum. This method is widely applicable to polynomial, rational, root, and many other types of functions, provided they are continuous on the given interval.

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

At the heart of the closed-interval method lies a simple but powerful idea: the set of candidates for absolute extrema is the union of all critical numbers in the interval and the two endpoints. This can be expressed as a concise formula: if f is continuous on [a, b], then the absolute maximum and minimum are found by evaluating f at all points in the set {a, b} ∪ {c ∈ (a, b) : f'(c) = 0 or f'(c) does not exist}. This is not just a rule of thumb; it is a mathematical guarantee. It eliminates the need to search the entire interval. The formula also highlights that endpoints are just as important as interior points. Many students mistakenly focus only on f'(x) = 0 and forget the endpoints, leading to incorrect answers. Memorizing this formula candidates = critical numbers + endpoints is the single most important step in mastering this topic.

For a continuous function on [a, b]:

  Absolute extrema candidates = Critical numbers + Endpoints

This is the heart of the closed-interval method.

You do not simply find f'(x) = 0 and stop.

You must also check:
  x = a and x = b.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. EXAMPLE 1: FINDING ABSOLUTE EXTREMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's apply the closed-interval method to a concrete example. We'll find the absolute extrema of f(x) = x³ - 3x² + 2 on the interval [-1, 3]. First, we compute the derivative, f'(x) = 3x² - 6x, and set it to zero to find critical numbers: x = 0 and x = 2. Both lie within the interval. The endpoints are x = -1 and x = 3. Next, we evaluate the function at these four points: f(-1) = -2, f(0) = 2, f(2) = -2, and f(3) = 2. Comparing these values, the largest is 2 and the smallest is -2. Therefore, the absolute maximum is 2 (occurring at x=0 and x=3) and the absolute minimum is -2 (occurring at x=-1 and x=2). Notice that the maximum occurs at both an interior critical point and an endpoint, reinforcing the need to check both categories.

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

"image": "src/assets_2.3/176.png"

The largest value is 2.

The smallest value is -2.

Therefore:
  Absolute maximum = 2 occurring at x = 0 and x = 3
and:
  Absolute minimum = -2 occurring at x = -1 and x = 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. WHY WE MUST CHECK THE ENDPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The importance of checking endpoints cannot be overstated. Consider the simple function f(x) = x² on the interval [-3, 1]. The derivative is f'(x) = 2x, so the only critical number is x = 0. If we ignored the endpoints, we would think the extrema are at x = 0, giving f(0) = 0. But checking the left endpoint gives f(-3) = 9, which is larger than 0. In fact, the absolute maximum is 9 at x = -3, which occurs at an endpoint. This example illustrates that endpoints often overshadow interior critical points. In many optimization problems, the optimal solution lies at a boundary of the feasible region. Therefore, the closed-interval method explicitly requires evaluating the function at both endpoints. Failing to do so can lead to incorrect conclusions, especially when the function is monotonic or when the interior critical point is not the global extremum. Always include the endpoints in your candidate list.

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

Geometrically, finding absolute extrema on a closed interval means examining the graph of the function only on that segment of the x-axis. The absolute maximum is the highest point on the graph within that segment, and the absolute minimum is the lowest point. Visually, these points can occur at peaks (where the derivative is zero), valleys (where the derivative is zero), at sharp corners (where the derivative does not exist), or at the endpoints where the graph ends. A common mistake is to assume the extrema must be at a point where the tangent is horizontal. However, if the graph is steadily increasing, the maximum will be at the right endpoint, and the minimum at the left endpoint. If the graph is steadily decreasing, the opposite is true. Thus, the closed-interval method aligns perfectly with the visual intuition of inspecting a graph's highs and lows within a bounded window. This geometric understanding reinforces the algebraic steps.

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

In the closed-interval method, there are only two types of candidates: critical numbers and endpoints. Critical numbers are points in the interior of the interval where the derivative is zero or does not exist. They are where the function could have a local extremum. Endpoints are the boundaries of the interval and are always candidates, even if the derivative is nonzero there. It is crucial to understand that these two sets are distinct and equally important. A common error is to confuse critical numbers with endpoints or to think that endpoints are somehow "special" critical numbers they are not. Endpoints may have derivatives that are defined, but they are not considered critical because the derivative at an endpoint does not provide information about local behavior (the function is not defined on both sides). Therefore, when you list your candidates, you must explicitly include both the endpoints and all critical numbers in the interval, and evaluate the function at each.

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

Not all critical numbers arise from solving f'(x) = 0. A critical number is any point in the domain where the derivative either is zero or does not exist. Functions that are continuous but not differentiable at certain points such as corners, cusps, or vertical tangents can have absolute extrema at those points. For example, f(x) = |x| has a sharp corner at x = 0 where the derivative does not exist. On the interval [-2, 2], the absolute minimum occurs at x = 0 with value 0, while the maxima occur at the endpoints with value 2. If we only solved f'(x) = 0, we would get no solutions (since f'(x) = 1 for x>0 and -1 for x<0), and we would miss the minimum entirely. Therefore, it is essential to also check points where the derivative is undefined. This is often overlooked by students, but it is a critical part of the method.

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

It is important to distinguish between absolute extrema (global) and local extrema (relative). An absolute maximum is the largest value of the function over the entire interval, whereas a local maximum is only the largest value in a small neighborhood around the point. Similarly, an absolute minimum is the smallest over the whole interval, while a local minimum is the smallest in a local region. A function can have multiple local maxima and minima, but only one absolute maximum and one absolute minimum (though they can occur at multiple points). The closed-interval method specifically finds the absolute extrema, not all local extrema. However, we often find local extrema as part of the process because they are candidates for absolute extrema. For example, a function with two local maxima might have one that is also the absolute maximum. Understanding this distinction helps in interpreting results correctly and in solving optimization problems where we need the global best.

These concepts are related but different.

"image": "src/assets_2.3/177.png"

For example, a function could have two local maximums: 10 and 15.

Both may be local maximum values.

But if 15 is the largest value on the entire interval, then:
  15 = absolute maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. A VERY IMPORTANT DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One subtle but critical point is that an absolute maximum does not necessarily have to occur at a critical number; it can occur at an endpoint. Conversely, a local maximum must occur at a critical number (if the function is differentiable). This asymmetry is important. For example, in the earlier problem with f(x) = x³ - 3x² + 2 on [-1, 3], the absolute maximum value of 2 occurs both at the interior critical point x = 0 and at the endpoint x = 3. The point x = 3 is not a critical number, yet it yields the absolute maximum. This shows that endpoints can "share" the absolute extremum with an interior point, or they can be the sole location. Therefore, when solving for absolute extrema, we must always give credit to endpoints. The closed-interval method ensures we catch all possibilities, whether they are interior critical points or boundary points.

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

The Extreme Value Theorem requires continuity. If a function has a discontinuity within the closed interval such as a jump, a hole, or a vertical asymptote it may fail to have an absolute maximum or minimum. For instance, consider f(x) = 1/x on [-1, 1]. The function is not continuous at x = 0 (in fact, it has an infinite discontinuity). On the closed interval [-1, 1], there is no absolute maximum or minimum because the function blows up to infinity and negative infinity as it approaches 0. Similarly, a function with a removable hole might approach a value but not attain it. Therefore, before applying the closed-interval method, you must verify that the function is continuous on the entire interval. If it is not, you may need to split the interval at the discontinuity and analyze each piece separately, or use other techniques. In practice, most problems provide continuous functions, but it's always wise to check.

The Extreme Value Theorem does not guarantee extrema if the function is not continuous.

For example, consider a function with a hole or jump inside an interval.

Even if the interval is closed, discontinuity can prevent the function from achieving a highest or lowest value.

Therefore, before applying the theorem, always ask:
  Is the function continuous on [a, b]?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. WHAT HAPPENS ON AN OPEN INTERVAL?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

On an open interval (a, b), the endpoints are excluded, so the closed-interval method cannot be directly applied. A continuous function on an open interval may not attain absolute extrema because the extreme values could be approached at the endpoints but never reached. For example, f(x) = x on (0, 1) is continuous and strictly increasing, but it has no absolute maximum or minimum because the supremum (1) and infimum (0) are not included in the interval. Even if the function has a critical point inside, it might not be the absolute extremum if the function continues to increase or decrease. To find extrema on open intervals, we often consider limits at the endpoints and compare them with values at critical points. However, there is no guarantee of existence. This is why many optimization problems specify closed intervals to ensure a solution exists, or they use other criteria (like unbounded intervals) to determine if extrema exist.

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

To solve absolute-extrema problems quickly and accurately, adopt a structured checklist. Given f and [a, b], first compute f'(x). Then solve f'(x) = 0 and identify any points where f'(x) does not exist, keeping only those that lie in (a, b). Next, evaluate f at those critical numbers and at both endpoints. Finally, compare all these values. This sequence ensures you never miss a candidate. It is also helpful to organize your work in a table to avoid arithmetic errors. Remember that the derivative may be messy, but careful algebra pays off. If the function is a rational expression, be mindful of domains; critical numbers where the derivative is undefined but the function is defined are still valid. By practicing this strategy on various functions polynomials, rationals, roots, and piecewise you will internalize the method and be prepared for more complex optimization problems later.

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

Let's work through a rational function example to see how the method handles more complex derivatives. Consider f(x) = x + 4/x on the interval [1, 5]. The derivative is f'(x) = 1 - 4/x². Setting this equal to zero gives x = ±2, but only x = 2 lies in [1, 5]. We also note that the derivative is undefined at x = 0, but that is outside the interval. The endpoints are 1 and 5. Evaluating: f(1) = 5, f(2) = 4, f(5) = 29/5 = 5.8. The largest value is 5.8 at x = 5, and the smallest is 4 at x = 2. Thus, the absolute maximum is 29/5 and the absolute minimum is 4. Notice again that the maximum occurs at the right endpoint. This example reinforces that endpoints can be decisive, especially in rational functions where the derivative may have limited zeros.

Find the absolute maximum and minimum of:
  f(x) = x + 4/x on [1, 5]

Step 1: Differentiate
  f'(x) = 1 - 4/x²

"image": "src/assets_2.3/178.png"

Step 2: Evaluate candidates

"image": "src/assets_2.3/179.png"

Therefore:
  Absolute minimum = 4 at x = 2
and:
  Absolute maximum = 29/5 at x = 5

Again, notice that the maximum occurred at an endpoint.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. WHY THIS TOPIC IS IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute extrema are not just an academic exercise; they are the core of optimization in calculus. Understanding how to find them on a closed interval equips you to solve a wide variety of real-world problems where you need to maximize or minimize a quantity. For example, you might need to find the dimensions of a rectangle that maximize its area given a fixed perimeter, or determine the production level that minimizes cost. In all these cases, you first set up a function representing the quantity to be optimized, then find its domain (often a closed interval), and then use the closed-interval method to find the optimal value. The same process underlies many applications in physics (e.g., maximizing range), economics (maximizing profit), and engineering (minimizing material usage). By mastering this topic, you build a solid foundation for applying calculus to decision-making and design.

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

To clarify terminology, here is a side-by-side comparison of key concepts. An absolute maximum is the greatest value of the function on the entire interval, while a local maximum is the greatest value relative to its immediate neighbors. Similarly for minima. A critical number is an interior point where the derivative is zero or does not exist; these are the only places where local extrema can occur (if the function is differentiable). The endpoints are not critical numbers but are still candidates for absolute extrema. The Extreme Value Theorem guarantees that a continuous function on a closed interval will have both absolute extrema. This table consolidates these definitions and relationships, helping you avoid confusion when solving problems.

"image": "src/assets_2.3/180.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. THE MAIN FORMULA TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you take away only one thing from this topic, it should be this formula: for a continuous function f on a closed interval [a, b], the absolute maximum and minimum are obtained by evaluating f at the endpoints and at all critical numbers inside the interval. Mathematically, if C is the set of critical numbers in (a, b), then the absolute maximum is max{f(a), f(b)} ∪ {f(c) : c ∈ C}, and the absolute minimum is the min of the same set. This compact formula captures the entire method. It is concise enough to remember and apply to any problem. When you encounter a new function and interval, simply list your candidates and evaluate. This formula is the key to solving optimization problems efficiently and correctly.

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

To summarize, finding absolute extrema on a closed interval is a systematic process that requires evaluating the function at all critical numbers inside the interval and at the endpoints. The steps are: differentiate, find critical numbers (including where the derivative does not exist), evaluate the function at those points and at the endpoints, then compare. The largest value is the absolute maximum, the smallest is the absolute minimum. Remember that endpoints are just as important as interior points, and that continuity is necessary for the Extreme Value Theorem to guarantee the existence of extrema. This method is the foundation of optimization and is widely applicable. With practice, the process becomes second nature. Always start by confirming the function is continuous on the given closed interval, then proceed with the candidates and comparison.

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