// filename: absolute-value.ts

const topic = {
  id: "absolute-value",
  title: "Absolute Value",
  summary:
    "The distance of a number from zero on the number line, always positive or zero, represented by |x|, with applications in equations, inequalities, and calculus.",
  details: `
Absolute value is an important concept in mathematics that represents the distance of a number from zero on the number line. Since distance can never be negative, the absolute value of any number is always positive or zero. The symbol used for absolute value is two vertical bars surrounding a number or expression.

For example:
  |5| = 5
and:
  |-5| = 5

Although 5 and -5 are different numbers, they are both exactly 5 units away from zero. Therefore, they have the same absolute value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The easiest way to understand absolute value is to think about a number line.

Zero is located in the middle of the number line. Positive numbers are located to the right, while negative numbers are located to the left. Absolute value ignores the direction and only considers how far the number is from zero.

For example:
  • 3 is 3 units away from zero, so |3| = 3.
  • -3 is also 3 units away from zero, so |-3| = 3.
  • 10 is 10 units away from zero, so |10| = 10.

This means that absolute value tells us the magnitude or size of a number without considering whether it is positive or negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. RULES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic rule for absolute value can be written as:
  |x| = { x, if x ≥ 0; -x, if x < 0 }

This rule means that if the number inside the absolute value symbol is already positive or zero, we simply keep the number as it is.

For example:
  |7| = 7

However, if the number inside is negative, we change it into its positive value.

For example:
  |-7| = 7

The reason is that the absolute value represents distance, and distance cannot be negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider the following examples:
  |8| = 8
  Since 8 is already positive, its absolute value remains 8.

  |-8| = 8
  Even though -8 is negative, it is still 8 units away from zero. Therefore, its absolute value is 8.

Another example is:
  |0| = 0
  Zero is zero units away from itself, so its absolute value is also zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ABSOLUTE VALUE OF EXPRESSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value can also be applied to algebraic expressions.

For example:
  |x - 4|

This expression represents the distance between x and 4.

Suppose x = 10:
  |10 - 4| = |6| = 6

Now suppose x = 1:
  |1 - 4| = |-3| = 3

Therefore, the expression |x - 4| always gives a non-negative distance between x and 4.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ABSOLUTE VALUE EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An absolute value equation is an equation that contains an absolute value expression.

For example:
  |x - 3| = 5

This equation asks: What numbers are exactly 5 units away from 3?

There are two possible answers because a number can be located either to the right or left of 3.

First Case:
  x - 3 = 5
  Add 3 to both sides:
    x = 8

Second Case:
  x - 3 = -5
  Add 3 to both sides:
    x = -2

Therefore:
  x = 8 or x = -2

Both answers work because:
  |8 - 3| = |5| = 5
and:
  |-2 - 3| = |-5| = 5

This shows why absolute value equations often have two possible solutions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ABSOLUTE VALUE INEQUALITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value can also be used in inequalities.

For example:
  |x| < 4

This means that the distance between x and zero is less than 4. Therefore, x must be between -4 and 4.
  -4 < x < 4

Another example is:
  |x| > 4

This means that the distance between x and zero is greater than 4. Therefore, x can be less than -4 or greater than 4.
  x < -4 or x > 4

The important idea is:
  • Less than (<) means the values are usually between two numbers.
  • Greater than (>) means the values are usually outside two numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. GRAPH OF AN ABSOLUTE VALUE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic absolute value function is:
  f(x) = |x|

Its graph forms a V-shape.

The lowest point of the graph is called the vertex, which is located at:
  (0, 0)

As x moves away from zero in either direction, the value of f(x) increases.

Table of values:
  x       f(x) = |x|
  ──────────────────
  -3        3
  -2        2
  -1        1
   0        0
   1        1
   2        2
   3        3

This table shows that the graph is symmetrical about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ABSOLUTE VALUE IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value is important in Calculus because it can affect the behavior of a function, especially when studying continuity and differentiability.

Consider:
  f(x) = |x|

This function is continuous everywhere, meaning that its graph has no breaks, holes, or jumps.

However, the function is not differentiable at x = 0.

The reason is that the graph has a sharp corner at the origin. In Calculus, a derivative represents the slope of a function. At a sharp corner, the slope coming from the left side is different from the slope coming from the right side.

For the function f(x) = |x|:
  The slope on the left side is: -1
  while the slope on the right side is: 1

Since the left-hand derivative and right-hand derivative are not equal, the derivative does not exist at x = 0.

Therefore:
  The absolute value function is continuous at x = 0, but it is not differentiable at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. KEY PROPERTIES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are some important properties to remember:

  • |a| ≥ 0 for all real numbers a
  • |a| = 0 if and only if a = 0
  • |a| = |-a|
  • |ab| = |a|·|b|
  • |a/b| = |a|/|b|, where b ≠ 0
  • |a + b| ≤ |a| + |b| (Triangle Inequality)
  • |a| - |b| ≤ |a - b|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                Result
  ─────────────────────────────────────────────────────────────────
  |5|                      5
  |-5|                     5
  |0|                      0
  |x - 3| = 5              x = 8 or x = -2
  |x| < 4                  -4 < x < 4
  |x| > 4                  x < -4 or x > 4
  |x| ≥ 0                  Always true
  f(x) = |x|               V-shaped graph, continuous everywhere
  f(x) = |x| derivative    Not differentiable at x = 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value represents the distance of a number from zero, which means its result is always positive or zero. It is used to solve equations, inequalities, and to analyze functions and graphs. In Calculus, absolute value functions are especially important because they may contain sharp corners where a function remains continuous but is not differentiable.

The most important idea to remember is:
  Absolute Value = Distance

This simple concept helps us understand why both positive and negative numbers can have the same absolute value.
  `,
  examples: [
    "|5| = 5",
    "|-5| = 5",
    "|0| = 0",
    "|x - 3| = 5 → x = 8 or x = -2",
    "|x| < 4 → -4 < x < 4",
    "|x| > 4 → x < -4 or x > 4",
    "f(x) = |x| is continuous everywhere but not differentiable at x = 0",
  ],
};

export default topic;