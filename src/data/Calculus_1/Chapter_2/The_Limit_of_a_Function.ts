// filename: the-limit-of-a-function.ts

const topic = {
  id: "the-limit-of-a-function",
  title: "The Limit of a Function",
  summary:
    "A fundamental concept in calculus describing what value a function approaches as the input approaches a certain number, with notation lim(x→a) f(x) = L.",
  details: `
The limit of a function is one of the most important ideas in Calculus. Before studying derivatives, continuity, and integrals, we first need to understand what a limit means.

A limit describes what value a function is approaching as the input approaches a certain number.

The important word is approaching. A limit does not always depend on the exact value of the function at a particular point. Instead, it focuses on what happens to the function as we get closer and closer to that point.

The notation for a limit is:
  lim(x→a) f(x) = L

This is read as:
  "The limit of f(x), as x approaches a, is L."

This means that as x gets closer and closer to a, the value of f(x) gets closer and closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE IDEA OF A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:
  f(x) = 2x + 1

We want to find:
  lim(x→3) (2x + 1)

As x gets closer to 3, we calculate values of the function.

  x     |  f(x) = 2x + 1
  ───────┼─────────────────
  2.9   |  6.8
  2.99  |  6.98
  2.999 |  6.998
  3.001 |  7.002
  3.01  |  7.02
  3.1   |  7.2

As x approaches 3, the function approaches 7.

Therefore:
  lim(x→3) (2x + 1) = 7

We can see that the closer x gets to 3, the closer the output gets to 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LIMIT NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The general notation is:
  lim(x→a) f(x) = L

Let's understand each part.

lim:
  This means we are finding the limit.

x→a:
  This means that x is approaching the number a.

f(x):
  This represents the function we are studying.

L:
  This is the value that the function is approaching.

Therefore:
  lim(x→a) f(x) = L

means:
  As x gets closer and closer to a, f(x) gets closer and closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. APPROACHING FROM BOTH SIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When finding a limit, we usually examine what happens as x approaches a number from both directions.

These are called:
  • Left-hand limit
  • Right-hand limit

For a limit to exist:
  Left-hand limit = Right-hand limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A left-hand limit means that x approaches a number from values smaller than that number.

The notation is:
  lim(x→a⁻) f(x)

The minus sign does not mean subtraction. It means that x approaches a from the left side.

For example:
  x = 2.9, 2.99, 2.999

These values are getting closer to 3 from the left.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. RIGHT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A right-hand limit means that x approaches a number from values greater than that number.

The notation is:
  lim(x→a⁺) f(x)

The plus sign does not mean addition. It means that x approaches a from the right side.

For example:
  x = 3.1, 3.01, 3.001

These values are getting closer to 3 from the right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHEN DOES A LIMIT EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A limit exists if the function approaches the same value from both the left and the right.

Mathematically:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

If both sides approach the same number, then:
  lim(x→a) f(x) exists.

Example:
  Suppose f(x) = x².

  Find lim(x→2) x².

  Approaching from the left:
    x = 1.9, f(1.9) = 3.61

  Approaching from the right:
    x = 2.1, f(2.1) = 4.41

  As we get closer and closer to 2 from both sides, the values approach 4.

  Therefore:
    lim(x→2) x² = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For many functions, we can find a limit simply by substituting the value directly.

For example:
  lim(x→4) (x² + 3x)

Substitute x = 4:
  = 4² + 3(4)
  = 16 + 12
  = 28

Therefore:
  lim(x→4) (x² + 3x) = 28

Direct substitution works for functions that are continuous at the point being evaluated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. LIMITS THAT CANNOT BE FOUND BY DIRECT SUBSTITUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes direct substitution gives an undefined expression.

Consider:
  lim(x→2) (x² - 4)/(x - 2)

Substitute x = 2:
  (2² - 4)/(2 - 2) = 0/0

The expression 0/0 is called an indeterminate form.

This does not mean the limit does not exist. It simply means we need to simplify the expression first.

Factor the numerator:
  x² - 4 = (x - 2)(x + 2)

Therefore:
  (x² - 4)/(x - 2) = ((x - 2)(x + 2))/(x - 2)

Cancel (x - 2), giving:
  x + 2

Now find the limit:
  lim(x→2) (x + 2)

Substitute:
  2 + 2 = 4

Therefore:
  lim(x→2) (x² - 4)/(x - 2) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. LIMITS FROM A GRAPH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits can also be understood visually using a graph.

Suppose a graph approaches the point (2, 5).

As x approaches 2 from the left, the graph approaches y = 5.
As x approaches 2 from the right, the graph also approaches y = 5.

Therefore:
  lim(x→2) f(x) = 5

The actual point at x = 2 may be missing or may have a different value. The limit can still exist.

This is an important idea:
  A limit depends on what the function approaches, not necessarily on the 
  actual value of the function at that point.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. A LIMIT CAN EXIST EVEN IF THE FUNCTION IS UNDEFINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  f(x) = (x² - 4)/(x - 2)

At x = 2, the function is undefined because:
  0/0

However, after simplifying:
  f(x) = x + 2

for all values except x = 2.

As x approaches 2:
  x + 2 → 4

Therefore:
  lim(x→2) f(x) = 4

Even though f(2) is undefined, the limit still exists.

This represents a hole in the graph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. WHEN A LIMIT DOES NOT EXIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A limit does not exist when the function does not approach a single value.

There are several common situations.

Different Left and Right Limits:
  Consider f(x) = {1, x < 0; 3, x > 0}

  As x approaches 0 from the left:
    lim(x→0⁻) f(x) = 1

  As x approaches 0 from the right:
    lim(x→0⁺) f(x) = 3

  Since 1 ≠ 3, the limit does not exist.
  Therefore:
    lim(x→0) f(x) does not exist

Infinite Limits:
  Consider f(x) = 1/x²

  As x approaches 0, 1/x² becomes extremely large.

  For example:
    x = 0.1 → f(x) = 100
    x = 0.01 → f(x) = 10000

  The function increases without bound.

  We write:
    lim(x→0) 1/x² = ∞

  This indicates that the function grows without bound near x = 0.

Oscillating Functions:
  Some functions continuously move back and forth without approaching one value.

  For example:
    f(x) = sin(1/x)

  As x approaches 0, the function oscillates between -1 and 1 without approaching a single value.

  Therefore:
    lim(x→0) sin(1/x) does not exist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. LIMIT LAWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limit laws allow us to simplify limits.

Suppose:
  lim(x→a) f(x) = L
and:
  lim(x→a) g(x) = M

Then:

Sum Law:
  lim(x→a) [f(x) + g(x)] = L + M

Difference Law:
  lim(x→a) [f(x) - g(x)] = L - M

Product Law:
  lim(x→a) [f(x)g(x)] = LM

Quotient Law:
  lim(x→a) f(x)/g(x) = L/M

provided M ≠ 0.

These laws make it easier to solve more complicated limits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. WHY LIMITS ARE IMPORTANT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits are the foundation of Calculus.

They help us understand what happens when a quantity gets extremely close to a particular value.

Limits are used to define:

Derivatives:
  The derivative is based on the idea of a limit.
  It measures the instantaneous rate of change of a function.

Continuity:
  A function is continuous at a point when its limit and actual function value behave properly.

Integrals:
  The definite integral uses limits to calculate exact accumulated quantities and areas.

Infinite Processes:
  Limits help us analyze situations involving values that approach infinity or become infinitely small.

Without limits, the major concepts of Calculus would not be possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. REAL-LIFE MEANING OF LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Limits can be understood using real-life situations.

Imagine you are walking toward a wall.

You move:
  • Half the remaining distance
  • Then half of the remaining distance again
  • Then half again

You keep getting closer and closer to the wall.

The wall represents the value you are approaching.

This is similar to a mathematical limit.

Another example is speed. When calculating the instantaneous speed of a car at one exact moment, Calculus uses the idea of a limit to examine the change in position over smaller and smaller intervals of time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Concept                Notation
  ───────────────────────────────────────────────────────────────────────
  General Limit          lim(x→a) f(x) = L
  Left-Hand Limit        lim(x→a⁻) f(x)
  Right-Hand Limit       lim(x→a⁺) f(x)
  Limit Exists           lim(x→a⁻) f(x) = lim(x→a⁺) f(x)
  Infinite Limit         lim(x→a) f(x) = ∞
  Does Not Exist         DNE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A limit describes the value that a function approaches as the input approaches a particular number.

The notation is:
  lim(x→a) f(x) = L

This means:
  As x approaches a, f(x) approaches L.

For a two-sided limit to exist:
  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)

The most important idea to remember is:

  A limit focuses on what happens near a point, not necessarily at the point itself.

Limits are the foundation of Calculus because they lead to important concepts such as continuity, derivatives, and integrals.
  `,
  examples: [
    "lim(x→3) (2x + 1) = 7",
    "lim(x→4) (x² + 3x) = 28",
    "lim(x→2) (x² - 4)/(x - 2) = 4",
    "lim(x→0) 1/x² = ∞",
    "lim(x→0) sin(1/x) does not exist",
    "Left-hand limit: lim(x→a⁻) f(x)",
    "Right-hand limit: lim(x→a⁺) f(x)",
  ],
};

export default topic;