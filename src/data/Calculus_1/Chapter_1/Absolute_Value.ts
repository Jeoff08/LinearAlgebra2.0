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

The easiest way to understand absolute value is to think about a number line. Zero is located in the middle of the number line. Positive numbers are located to the right, while negative numbers are located to the left. Absolute value ignores the direction and only considers how far the number is from zero. This distance is always measured in positive units, regardless of whether the number is positive or negative. For example, both 3 and -3 are exactly 3 units away from zero, so they have the same absolute value of 3. This concept is fundamental because it allows us to talk about the "size" or "magnitude" of a number without worrying about its sign. In real‑world contexts, absolute value is used to describe distances, deviations, and errors all quantities that are naturally non‑negative. By focusing on distance rather than direction, we strip away the sign and reveal the underlying magnitude, which is often the most important piece of information.

For example:
  • 3 is 3 units away from zero, so |3| = 3.
  • -3 is also 3 units away from zero, so |-3| = 3.
  • 10 is 10 units away from zero, so |10| = 10.

This means that absolute value tells us the magnitude or size of a number without considering whether it is positive or negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. RULES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The basic rule for absolute value can be written as a piecewise function:
  |x| = { x, if x ≥ 0; -x, if x < 0 }

This rule means that if the number inside the absolute value symbol is already positive or zero, we simply keep the number as it is because it is already equal to its distance from zero. For example, |7| = 7. However, if the number inside is negative, we change it into its positive counterpart (its opposite) to represent the distance from zero. For instance, |-7| = 7 because -7 is 7 units away from zero, even though the number itself is negative. The reason for this piecewise definition is that absolute value is defined as distance, and distance cannot be negative. By applying this rule, we ensure that the output of the absolute value function is always non‑negative. This rule also clarifies why |x| = x when x is non‑negative and |x| = -x when x is negative it is the algebraic way to express the geometric idea of distance.

For example:
  |7| = 7
  |-7| = 7

The reason is that the absolute value represents distance, and distance cannot be negative.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EXAMPLES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To solidify your understanding, it helps to work through several concrete examples. Absolute value is straightforward when applied to numbers: you simply remove the negative sign if there is one, and leave positive numbers and zero unchanged. The process is essentially the same for any real number, whether it is an integer, a decimal, or a fraction. For instance, the absolute value of 8 is 8 because it is already positive. The absolute value of -8 is also 8 because we take the positive version of that negative number. Zero is a special case because it is exactly zero units away from itself, so its absolute value is 0. By practicing with a variety of numbers, you will quickly internalise the rule that absolute value always yields a non‑negative result. This simplicity is what makes absolute value such a powerful tool in mathematics it gives us a way to measure magnitude without being distracted by sign.

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

Absolute value can also be applied to algebraic expressions, not just single numbers. When we enclose an entire expression inside absolute value bars, we are asking for the distance between the value of that expression and zero. For example, |x - 4| represents the distance between x and 4 on the number line. This distance is always non‑negative, regardless of the value of x. If x is greater than 4, the expression inside is positive, and we simply drop the bars. If x is less than 4, the expression inside is negative, and we take its opposite to get a positive distance. This interpretation is extremely useful in solving equations and inequalities because it allows us to think in terms of distances rather than abstract algebra. For instance, when x = 10, the distance between 10 and 4 is 6; when x = 1, the distance is 3. Thus, |x - 4| always gives a non‑negative distance between x and 4, which can be visualised as the length of the segment joining those two points on the number line.

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

An absolute value equation is an equation that contains an absolute value expression. Solving such equations requires recognising that the expression inside the bars can be either positive or negative, because the absolute value of both a number and its opposite is the same. For example, the equation |x - 3| = 5 asks: "What numbers are exactly 5 units away from 3?" There are two possible answers because a number can lie to the right of 3 (which gives x - 3 = 5, so x = 8) or to the left of 3 (which gives x - 3 = -5, so x = -2). This is a key characteristic of absolute value equations: they often yield two distinct solutions, one from the positive case and one from the negative case. This duality arises because distance is symmetric both directions produce the same absolute value. By setting the expression inside the bars equal to both the positive and negative of the given number, we capture all possible solutions.

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

Absolute value can also be used in inequalities, which express a range of possible values rather than a single solution. The inequality |x| < 4 means that the distance between x and zero is less than 4. Since distance is absolute, x must be between -4 and 4 (not including the endpoints). This is because any number between -4 and 4 has a distance from zero that is less than 4. Conversely, the inequality |x| > 4 means the distance is greater than 4, so x must lie outside the interval [-4, 4] either less than -4 or greater than 4. The general rule is that "less than" inequalities correspond to a bounded interval (between two numbers), while "greater than" inequalities correspond to two disjoint unbounded intervals (outside two numbers). This pattern holds for any absolute value inequality of the form |x - a| < b or |x - a| > b, where a is the center and b is the distance threshold. Understanding this geometric interpretation makes solving such inequalities intuitive and avoids algebraic mistakes.

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

The basic absolute value function is f(x) = |x|. Its graph forms a distinctive V‑shape, with the vertex (the lowest point) at the origin (0, 0). The V‑shape arises because the function decreases linearly with slope -1 for x < 0 and increases linearly with slope 1 for x > 0. This creates a sharp corner at the origin, where the two linear pieces meet. The graph is symmetric about the y‑axis because absolute value is an even function: | -x | = |x|. As x moves away from zero in either direction, the value of f(x) increases at a constant rate. This symmetry and the V‑shape are characteristic of all absolute value functions of the form f(x) = a|x - h| + k, where (h, k) is the vertex. Such graphs are useful in modelling situations where a quantity depends on distance from a central point, such as error margins or deviations from a target value. The table of values for f(x) = |x| clearly shows the linear increase on both sides of zero.

Table of values:

"image": "src/assets/19.png",

This table shows that the graph is symmetrical about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. ABSOLUTE VALUE IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value is important in Calculus because it can affect the behavior of a function, especially when studying continuity and differentiability. Consider f(x) = |x|. This function is continuous everywhere, meaning that its graph has no breaks, holes, or jumps you can draw it without lifting your pencil. However, the function is not differentiable at x = 0. The reason is that the graph has a sharp corner at the origin. In Calculus, a derivative represents the slope of the function at a point. At a sharp corner, the slope coming from the left side is different from the slope coming from the right side. For f(x) = |x|, the slope on the left side is -1 (since for x < 0, f(x) = -x, whose derivative is -1), while the slope on the right side is 1 (since for x > 0, f(x) = x, whose derivative is 1). Because the left‑hand and right‑hand derivatives are not equal, the derivative does not exist at x = 0. This is a classic example of a function that is continuous everywhere but fails to be differentiable at a single point due to a corner. Such behavior is crucial in optimization and analysis, where absolute value functions often appear in penalty or distance terms.

Therefore:
  The absolute value function is continuous at x = 0, but it is not differentiable at x = 0.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. KEY PROPERTIES OF ABSOLUTE VALUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Here are some important properties to remember when working with absolute values. They are algebraic rules that follow directly from the definition of absolute value as distance, and they are extremely useful in simplifying expressions and proving inequalities.

"image": "src/assets/20.png",

These properties are not just formulas; they encapsulate the geometric idea that absolute value behaves nicely with multiplication and division, but with addition and subtraction it has a "less than or equal" relationship due to the possible cancellation of signs. The triangle inequality, in particular, is a cornerstone in many branches of mathematics, from real analysis to vector spaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This quick reference table summarises the most common situations involving absolute value, providing the results at a glance. It is useful for revision and for checking your work when solving problems.

"image": "src/assets/21.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Absolute value represents the distance of a number from zero, which means its result is always positive or zero. It is used to solve equations, inequalities, and to analyse functions and graphs. In Calculus, absolute value functions are especially important because they may contain sharp corners where a function remains continuous but is not differentiable. The concept of absolute value extends beyond numbers it is the foundation for defining distance in more advanced contexts, such as the absolute value of complex numbers or the norm of vectors. At its heart, absolute value is about measuring magnitude without regard to direction. This simple yet profound idea allows us to compare sizes, calculate errors, and model real‑world phenomena where only the magnitude matters, such as speed, temperature differences, or deviations from a target.

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