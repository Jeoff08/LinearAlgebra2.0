// filename: sets-real-numbers-and-inequalities.ts

const topic = {
  id: "sets-real-numbers-and-inequalities",
  title: "Sets, Real Numbers, and Inequalities",
  summary:
    "Fundamental concepts in mathematics including sets, the real number system (natural numbers, whole numbers, integers, rational numbers, irrational numbers), and inequalities with their notation and applications.",
  details: `
Sets, real numbers, and inequalities are fundamental topics in mathematics. They provide the basic language used to describe numbers, mathematical objects, and relationships between quantities. Before studying more advanced topics such as functions, limits, derivatives, and integrals in Calculus, it is important to understand these concepts because they appear throughout mathematics.

A set helps us organize objects or numbers into groups. The real number system classifies the different types of numbers that we use in mathematics. Inequalities allow us to compare quantities and describe ranges of possible values instead of only exact values.

These three concepts are closely connected. For example, an inequality such as:
  x > 3

describes a set of real numbers that are greater than 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What is a Set?

A set is a well-defined collection of distinct objects. These objects are called the elements or members of the set.

For example:
  A = {1, 2, 3, 4, 5}

This means that Set A contains the elements 1, 2, 3, 4, and 5.

Sets are usually written using curly braces:
  {}

The order of elements in a set usually does not matter.

For example:
  {1, 2, 3} = {3, 2, 1}

Also, repeated elements are only counted once:
  {1, 1, 2, 2, 3} = {1, 2, 3}

This is because a set only focuses on whether an element belongs to the group, not how many times it appears.

Set Notation

We use special symbols when working with sets.

Belongs To:
  The symbol ∈ means "is an element of" or "belongs to."
  For example:
    3 ∈ {1, 2, 3, 4, 5}
  This means that 3 belongs to the set.

Does Not Belong To:
  The symbol ∉ means "does not belong to."
  For example:
    7 ∉ {1, 2, 3, 4, 5}
  This means that 7 is not an element of the set.

Types of Sets

Empty Set:
  An empty set is a set that contains no elements.
  It can be written as:
    {}
  or:
    ∅
  For example, the set of real numbers that are both greater than 5 and less than 2 is an empty set because no number can satisfy both conditions.

Finite Set:
  A finite set contains a specific and limited number of elements.
  Example:
    A = {2, 4, 6, 8, 10}
  This set has five elements.

Infinite Set:
  An infinite set contains an unlimited number of elements.
  Example:
    {1, 2, 3, 4, 5, ...}
  This set continues forever.
  The set of real numbers is also an infinite set.

Universal Set:
  The universal set contains all elements being considered in a particular situation.
  For example, suppose we are studying numbers from 1 to 10:
    U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
  The letter U represents the universal set.

Subsets:
  A set A is called a subset of another set B if every element of A also belongs to B.
  The symbol is:
    A ⊆ B
  For example:
    A = {1, 2, 3}
    B = {1, 2, 3, 4, 5}
  Since every element of A is also found in B:
    A ⊆ B
  Understanding subsets is important because different number systems are subsets of the real numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. REAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What Are Real Numbers?

The real numbers are all the numbers that can be represented on a number line.

The set of real numbers is represented by:
  ℝ

Real numbers include:
  • Natural Numbers
  • Whole Numbers
  • Integers
  • Rational Numbers
  • Irrational Numbers

All of these together form the real number system.

Natural Numbers:
  Natural numbers are the counting numbers.
    ℕ = {1, 2, 3, 4, 5, ...}
  We use natural numbers when counting objects.
  For example:
    1 book, 2 students, 10 computers
  Some mathematical conventions include 0 in the natural numbers, while others begin with 1.

Whole Numbers:
  Whole numbers include zero and the natural numbers.
    {0, 1, 2, 3, 4, 5, ...}
  Unlike natural numbers, whole numbers always include zero.

Integers:
  Integers include negative numbers, positive numbers, and zero.
    ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}
  Examples of integers include:
    -10, -2, 0, 5, 100
  Integers do not include fractions or decimals.

Rational Numbers:
  A rational number is any number that can be written as a fraction:
    a/b
  where b ≠ 0.
  Examples include:
    1/2, 3/4, -5/2
  Integers are also rational numbers because they can be written as fractions.
  For example:
    5 = 5/1
  Decimals that terminate or repeat are also rational numbers.
  Examples:
    0.5 = 1/2
    0.333... = 1/3

Irrational Numbers:
  An irrational number cannot be written as a simple fraction.
  Its decimal representation continues forever without repeating in a pattern.
  Examples include:
    √2, π, e
  For example:
    √2 = 1.41421356...
  The decimal continues indefinitely and does not repeat regularly.

The Real Number System:
  The real number system can be understood as follows:
    Natural Numbers ⊂ Whole Numbers ⊂ Integers ⊂ Rational Numbers ⊂ Real Numbers
  Irrational numbers are also part of the real numbers.
  Therefore:
    ℝ = Rational Numbers ∪ Irrational Numbers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INEQUALITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What is an Inequality?

An inequality compares two quantities and shows whether one quantity is greater than, less than, greater than or equal to, or less than or equal to another quantity.

Unlike an equation, which usually shows that two quantities are equal, an inequality describes a relationship or range of possible values.

For example:
  x > 5

means that x can be any number greater than 5.

Possible values include:
  6, 7, 10, 100, 5.5

However, x = 5 is not included because the inequality says strictly greater than.

Inequality Symbols:

  Symbol        Meaning                    Example
  ─────────────────────────────────────────────────
  >             Greater than               x > 3
  <             Less than                  x < 3
  ≥             Greater than or equal to   x ≥ 3
  ≤             Less than or equal to      x ≤ 3

Understanding these symbols is important because they tell us which values are included in the solution.

Solving Simple Inequalities:

Consider:
  x + 3 > 7

To solve for x, subtract 3 from both sides:
  x > 4

This means that any number greater than 4 is a solution.

Another example:
  2x ≤ 10

Divide both sides by 2:
  x ≤ 5

Therefore, x can be 5 or any number less than 5.

Important Rule: Multiplying or Dividing by a Negative Number

When solving inequalities, there is one very important rule:

  If you multiply or divide both sides of an inequality by a negative number, 
  you must reverse the inequality symbol.

For example:
  -2x > 6

Divide both sides by -2.

Because we divided by a negative number, we reverse the symbol:
  x < -3

This rule is extremely important because failing to reverse the symbol will produce the wrong answer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. COMPOUND INEQUALITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A compound inequality contains two inequalities.

For example:
  2 < x < 7

This means that x is greater than 2 and less than 7.

Possible values include:
  3, 4, 5, 6, 2.5

The values 2 and 7 are not included because the symbols are strict inequalities.

Another example:
  -3 ≤ x ≤ 5

This means:
  x ≥ -3
and:
  x ≤ 5

Therefore, x can be any value between -3 and 5, including both endpoints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. INTERVAL NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Interval notation is another way to represent sets of real numbers.

Open Interval:
  (a, b)
  This means a < x < b.
  The endpoints are not included.
  Example:
    (2, 7) means 2 < x < 7

Closed Interval:
  [a, b]
  This means a ≤ x ≤ b.
  The endpoints are included.
  Example:
    [2, 7] means 2 ≤ x ≤ 7

Half-Open Intervals:
  [a, b) means a ≤ x < b
  (a, b] means a < x ≤ b

Infinite Intervals:
  Infinity is represented by ∞.
  For example:
    (3, ∞) means x > 3
  We always use parentheses with infinity because infinity is not an actual number that can be included.
  Another example:
    (-∞, 5] means x ≤ 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. CONNECTION BETWEEN SETS, REAL NUMBERS, AND INEQUALITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These three concepts are strongly connected.

A set is a collection of objects or numbers.

The real numbers represent the complete collection of numbers that can be placed on the number line.

An inequality describes a specific set of real numbers that satisfies a condition.

For example:
  x ≥ 2

This represents the set:
  {x ∈ ℝ | x ≥ 2}

This is read as:
  "The set of all real numbers x such that x is greater than or equal to 2."

It can also be written using interval notation:
  [2, ∞)

All three expressions describe the same group of numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. IMPORTANCE IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sets, real numbers, and inequalities are essential in Calculus because Calculus studies functions and how they behave over particular domains.

For example, a function may only be defined for certain real numbers:
  f(x) = √(x - 2)

Since the value inside a square root cannot be negative when working with real numbers:
  x - 2 ≥ 0

Therefore:
  x ≥ 2

The domain of the function is:
  [2, ∞)

This example shows how real numbers, inequalities, sets, and interval notation work together.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Number System        Set Notation                Examples
  ─────────────────────────────────────────────────────────────────────────
  Natural Numbers      ℕ = {1, 2, 3, ...}          1, 2, 3, 4, 5
  Whole Numbers        {0, 1, 2, 3, ...}           0, 1, 2, 3, 4
  Integers             ℤ = {..., -1, 0, 1, ...}    -2, -1, 0, 1, 2
  Rational Numbers     ℚ = {a/b | b ≠ 0}           1/2, 3/4, -2/3
  Irrational Numbers   Not expressible as a/b      √2, π, e
  Real Numbers         ℝ                           All of the above

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sets, real numbers, and inequalities form an important foundation for studying mathematics and Calculus.

• Sets are collections of distinct objects or numbers.
• Real numbers include rational and irrational numbers that can be represented on a number line.
• Inequalities compare quantities and describe ranges of possible values.
• Interval notation provides a compact way to represent sets of real numbers.

These concepts are important for understanding domains, functions, limits, derivatives, and many other Calculus topics.

The key idea to remember is:
  Sets organize numbers, Real Numbers describe the number system, 
  and Inequalities describe relationships and ranges.
  `,
  examples: [
    "A = {1, 2, 3, 4, 5} → set with elements 1 through 5",
    "3 ∈ {1, 2, 3, 4, 5} → 3 belongs to the set",
    "7 ∉ {1, 2, 3, 4, 5} → 7 does not belong to the set",
    "x + 3 > 7 → x > 4",
    "2x ≤ 10 → x ≤ 5",
    "-2x > 6 → x < -3 (reverse the inequality)",
    "Domain of f(x) = √(x - 2) → [2, ∞)",
  ],
};

export default topic;