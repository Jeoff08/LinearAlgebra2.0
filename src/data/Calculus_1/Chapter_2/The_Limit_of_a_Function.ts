// filename: the-limit-of-a-function.ts

const topic = {
  id: "the-limit-of-a-function",
  title: "The Limit of a Function",
  summary:
    "A fundamental concept in calculus describing what value a function approaches as the input approaches a certain number, with notation lim(x→a) f(x) = L.",
  details: `
The limit of a function is one of the most important ideas in Calculus. Before studying derivatives, continuity, and integrals, we first need to understand what a limit means. A limit describes what value a function is approaching as the input approaches a certain number. The important word is approaching. A limit does not always depend on the exact value of the function at a particular point. Instead, it focuses on what happens to the function as we get closer and closer to that point. The notation for a limit is lim(x→a) f(x) = L, which is read as "the limit of f(x), as x approaches a, is L." This means that as x gets closer and closer to a, the value of f(x) gets closer and closer to L. Limits allow us to analyse behaviour near points of interest, even when the function is not defined at those points.

"image": "src/assets/82.png",

The notation for a limit is:
  lim(x→a) f(x) = L

This is read as:
  "The limit of f(x), as x approaches a, is L."

This means that as x gets closer and closer to a, the value of f(x) gets closer and closer to L.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING THE IDEA OF A LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To understand the limit concept, consider a simple linear function. Suppose we have f(x) = 2x + 1 and we want to find what happens as x approaches 3. We can choose values of x that are very close to 3, both slightly less and slightly greater. As we evaluate the function at these nearby points, we observe that the outputs get closer and closer to 7. This is the essence of a limit: we are not asking what the function equals exactly at x = 3 (which would be 7 anyway), but rather what value the function is heading toward as x gets arbitrarily close to 3. This idea of "approaching" is fundamental because it allows us to study behaviour at points where a function might not be defined or where we are interested in trends. Limits are the first step toward understanding more advanced calculus concepts like derivatives and integrals.

Suppose we have:
  f(x) = 2x + 1

We want to find:
  lim(x→3) (2x + 1)

As x gets closer to 3, we calculate values of the function.

"image": "src/assets/83.png",

As x approaches 3, the function approaches 7.

Therefore:
  lim(x→3) (2x + 1) = 7

We can see that the closer x gets to 3, the closer the output gets to 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LIMIT NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The notation for a limit is precise and communicates exactly what is being studied. The symbol lim stands for "limit" and is followed by x→a, which indicates that the input x is approaching the value a. The function f(x) follows, and the result L is the value that the function approaches. This notation is a shorthand for a more elaborate description: for values of x sufficiently close to a (but not necessarily equal to a), the values of f(x) become arbitrarily close to L. Understanding this notation is essential because it is used throughout calculus to express limits of all kinds, from simple polynomials to complex transcendental functions. The notation also helps us distinguish between left‑hand limits, right‑hand limits, and two‑sided limits, which are crucial for determining whether a limit exists at all. Mastering this notation is the first step toward fluency in calculus.

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

When finding a limit, we usually examine what happens as x approaches a number from both directions: from the left (values less than a) and from the right (values greater than a). These are called the left‑hand limit and the right‑hand limit. For a two‑sided limit to exist, the function must approach the same value from both sides. If the left‑hand and right‑hand limits differ, then the two‑sided limit does not exist. This is a crucial check for many functions, especially piecewise functions, which may have different rules on different intervals. By examining both sides, we can determine whether the function has a well‑defined limiting behaviour at that point. This concept is foundational for continuity, differentiability, and many other calculus topics.

These are called:
  • Left-hand limit
  • Right-hand limit

For a limit to exist:
  Left-hand limit = Right-hand limit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. LEFT-HAND LIMIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A left-hand limit means that x approaches a number from values smaller than that number. The notation is lim(x→a⁻) f(x), where the superscript minus sign indicates that we consider only x < a. This is not subtraction; it is a directional indicator. For example, to find the left‑hand limit at x = 3, we would use values like 2.9, 2.99, 2.999, which get closer to 3 from the left. The left‑hand limit is important when the function's rule changes at a (as in piecewise functions) or when the function is only defined on one side. It tells us what value the function is approaching as we come from smaller numbers. If the left‑hand limit equals the right‑hand limit, the two‑sided limit exists; if not, the limit does not exist.

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

A right-hand limit means that x approaches a number from values greater than that number. The notation is lim(x→a⁺) f(x), where the superscript plus sign indicates that we consider only x > a. Similar to the left‑hand limit, the plus sign is a directional marker, not an arithmetic operator. To find the right‑hand limit at x = 3, we would use values like 3.1, 3.01, 3.001, which approach 3 from the right. The right‑hand limit is essential when the function is defined differently for x > a or when there is a domain restriction that prevents approaching from the left (e.g., the function is only defined for x ≥ a). Together, the left‑hand and right‑hand limits give a complete picture of the function's behaviour near a point.

The notation is:
  lim(x→a⁺) f(x)

The plus sign does not mean addition. It means that x approaches a from the right side.

For example:
  x = 3.1, 3.01, 3.001

These values are getting closer to 3 from the right.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. WHEN DOES A LIMIT EXIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A limit exists if the function approaches the same value from both the left and the right. Mathematically, this means lim(x→a⁻) f(x) = lim(x→a⁺) f(x). If both one‑sided limits are equal to the same number L, then the two‑sided limit exists and equals L. If they are different, or if either does not exist, then the two‑sided limit does not exist. For example, for f(x) = x² at x = 2, both one‑sided limits are 4, so the limit exists and equals 4. This condition is the basis for determining whether a function has a well‑defined limiting behaviour at a point. It is also a key part of the definition of continuity, which requires the limit to equal the function value.

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

For many functions, we can find a limit simply by substituting the value directly into the function. This method works for functions that are continuous at the point being evaluated that is, functions whose graphs have no breaks, holes, or jumps at that point. Polynomials, exponential functions, and trigonometric functions (except where undefined) are typical examples. For instance, lim(x→4) (x² + 3x) can be found by plugging in x = 4: 4² + 3(4) = 16 + 12 = 28. Direct substitution is often the quickest way to evaluate a limit, but it is not always applicable. When substitution leads to an indeterminate form like 0/0, ∞/∞, or similar, we must use other techniques such as factoring, rationalising, or applying limit laws. Knowing when direct substitution works and when it fails is a valuable skill in calculus.

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

Sometimes direct substitution gives an undefined expression, such as 0/0, which is called an indeterminate form. An indeterminate form does not mean the limit does not exist; it simply means we need to simplify the expression before evaluating the limit. For example, consider lim(x→2) (x² - 4)/(x - 2). Substituting x = 2 gives 0/0, which is undefined. However, by factoring the numerator as (x - 2)(x + 2) and cancelling the common factor (x - 2), we get x + 2, whose limit as x approaches 2 is 4. This technique factoring and cancelling is common for rational functions. Other techniques include rationalising the numerator or denominator, using trigonometric identities, or applying L'Hôpital's Rule (which is introduced later). Recognising an indeterminate form and knowing how to handle it is essential for evaluating many limits.

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

Limits can also be understood visually using a graph. By looking at the graph of a function, we can see what y‑value the curve approaches as x gets close to a particular value. For example, if a graph approaches the point (2, 5) from both sides, then lim(x→2) f(x) = 5. The actual point at x = 2 may be missing (a hole) or may have a different value (a jump), but the limit can still exist. This graphical interpretation reinforces the idea that limits are about behaviour near a point, not at the point itself. It also helps us identify discontinuities: if the graph approaches different values from the left and right, there is a jump discontinuity; if the graph approaches infinity, there is a vertical asymptote; if the graph has a hole, the limit exists but the function is undefined. Visualising limits graphically is a powerful way to build intuition.

Suppose a graph approaches the point (2, 5).

As x approaches 2 from the left, the graph approaches y = 5.
As x approaches 2 from the right, the graph also approaches y = 5.

Therefore:
  lim(x→2) f(x) = 5

The actual point at x = 2 may be missing or may have a different value. The limit can still exist.

This is an important idea:
  A limit depends on what the function approaches, not necessarily on the 
  actual value of the function at that point.

"image": "src/assets/84.png"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. A LIMIT CAN EXIST EVEN IF THE FUNCTION IS UNDEFINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = (x² - 4)/(x - 2). At x = 2, the function is undefined because it gives 0/0. However, after simplifying the expression to x + 2 (for all x ≠ 2), we see that as x approaches 2, the simplified expression approaches 4. Thus, the limit exists even though the function is not defined at x = 2. This situation represents a hole in the graph: there is a missing point at (2, 4), but the function approaches that point from both sides. This example illustrates a key fact: the existence of a limit does not require the function to be defined at the point. Limits are about the journey, not the destination. This concept is essential for understanding removable discontinuities and for defining derivatives, which also use limits to analyse behaviour near a point.

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

A limit does not exist when the function does not approach a single value. There are several common situations where this occurs. First, if the left‑hand and right‑hand limits are different, as with a piecewise function that jumps at a point, the two‑sided limit does not exist. Second, if the function increases or decreases without bound (tends to ±∞), we often say the limit is infinite, but this also means the limit does not exist as a finite number. For example, lim(x→0) 1/x² = ∞ indicates unbounded growth, but the limit does not exist in the usual sense of approaching a finite L. Third, if the function oscillates rapidly without settling on a value, such as sin(1/x) as x approaches 0, the limit does not exist. Recognising these cases is important because they indicate different types of discontinuities or behaviours that require special handling in calculus.

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

Limit laws allow us to simplify limits by breaking them down into smaller parts. If we know the limits of two functions f(x) and g(x) as x approaches a, we can combine them using arithmetic operations. The sum law states that the limit of a sum is the sum of the limits; the difference law is analogous. The product law says the limit of a product is the product of the limits, and the quotient law says the limit of a quotient is the quotient of the limits, provided the denominator limit is not zero. These laws are powerful because they reduce complicated limits to combinations of simpler known limits. They also justify many algebraic manipulations in calculus, such as distributing limits over addition and multiplication. Understanding and applying these laws is essential for efficiently evaluating limits in a wide range of problems.

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

Limits are the foundation of Calculus. They help us understand what happens when a quantity gets extremely close to a particular value, and they allow us to define the core concepts of calculus with precision. Derivatives, which measure instantaneous rates of change, are defined as limits of difference quotients. Continuity, which ensures that small changes in input produce small changes in output, is defined using limits. Integrals, which compute accumulated quantities and areas, are defined as limits of sums. Without limits, we could not rigorously define these concepts, and calculus would lack its mathematical foundation. Moreover, limits enable us to analyse infinite processes, such as the behaviour of functions as they grow without bound or approach asymptotic values. Thus, mastering limits is not just a prerequisite for calculus; it is the gateway to understanding the entire subject.

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

Limits can be understood using real-life situations that involve approaching a target. Imagine you are walking toward a wall. You move half the remaining distance, then half of the new remaining distance, then half again, and so on. You keep getting closer and closer to the wall but never quite reach it (in an idealized mathematical sense). The wall represents the value you are approaching. This is similar to a mathematical limit: you approach a value without necessarily reaching it. Another example is calculating the instantaneous speed of a car at one exact moment. To find this, you consider the average speed over smaller and smaller time intervals approaching zero duration and the limit of these average speeds gives the instantaneous speed. These examples show that limits are not just abstract; they model real‑world processes of approximation, measurement, and prediction.

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

"image": "src/assets/85.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A limit describes the value that a function approaches as the input approaches a particular number. The notation is lim(x→a) f(x) = L, which means that as x approaches a, f(x) approaches L. For a two‑sided limit to exist, the left‑hand and right‑hand limits must be equal. Limits can exist even when the function is undefined at the point, as long as the function approaches a single value from both sides. When a limit does not exist, it may be due to different one‑sided limits, unbounded behaviour, or oscillation. The most important idea to remember is that a limit focuses on what happens near a point, not necessarily at the point itself. Limits are the foundation of Calculus because they lead to important concepts such as continuity, derivatives, and integrals.

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