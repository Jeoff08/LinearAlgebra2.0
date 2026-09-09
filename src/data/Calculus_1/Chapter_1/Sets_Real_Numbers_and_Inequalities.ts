// filename: sets-real-numbers-and-inequalities.ts

const topic = {
  id: "sets-real-numbers-and-inequalities",
  title: "Sets, Real Numbers, and Inequalities",
  summary:
    "Fundamental concepts in mathematics including sets, the real number system (natural numbers, whole numbers, integers, rational numbers, irrational numbers), and inequalities with their notation and applications.",
  details: `
Sets, real numbers, and inequalities are fundamental topics in mathematics. They provide the basic language used to describe numbers, mathematical objects, and relationships between quantities. Before studying more advanced topics such as functions, limits, derivatives, and integrals in Calculus, it is important to understand these concepts because they appear throughout mathematics. A set helps us organise objects or numbers into groups. The real number system classifies the different types of numbers that we use in mathematics. Inequalities allow us to compare quantities and describe ranges of possible values instead of only exact values. These three concepts are closely connected. For example, an inequality such as x > 3 describes a set of real numbers that are greater than 3.

For example, an inequality such as:
  x > 3

describes a set of real numbers that are greater than 3.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A set is a well‑defined collection of distinct objects. These objects are called the elements or members of the set. Sets are the building blocks of modern mathematics because they allow us to group objects together and study their properties as a whole. For example, A = {1, 2, 3, 4, 5} is a set containing the numbers 1 through 5. Sets are usually written using curly braces {}, and the order in which elements are listed does not matter {1, 2, 3} is the same as {3, 2, 1}. Also, repeated elements are only counted once, so {1, 1, 2, 2, 3} = {1, 2, 3}. This is because a set focuses only on membership, not on multiplicity. Understanding sets is essential because they provide the language for describing domains, ranges, solutions to equations, and many other mathematical concepts. We will use sets throughout algebra and calculus.

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

Real numbers are all the numbers that can be represented on a number line. They include every number we commonly use in arithmetic, from negative numbers to fractions to irrational numbers like π. The set of real numbers is denoted by ℝ. It is the union of rational numbers (those that can be expressed as a fraction a/b, with b ≠ 0) and irrational numbers (those that cannot be written as a simple fraction). The real number system is hierarchical: natural numbers (1, 2, 3, ...) are a subset of whole numbers (which add 0), which are a subset of integers (which include negatives), which are a subset of rational numbers, and finally all of these are contained in the real numbers. This classification is important because it tells us what kinds of numbers we are working with and what operations are allowed. For example, we can take square roots of non‑negative real numbers, but we cannot take the square root of a negative number within the real number system (that would lead to complex numbers). Understanding this hierarchy helps us identify the domain of functions and the types of solutions we can expect.

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

An inequality compares two quantities and shows whether one is greater than, less than, greater than or equal to, or less than or equal to another. Unlike an equation, which states exact equality, an inequality describes a range of possible values. For example, x > 5 means that x can be any number greater than 5 such as 6, 10, or 5.1 but not 5 itself. Inequalities are used to model real‑world constraints, such as budgets (cost ≤ budget), temperature ranges, or speed limits (speed ≤ limit). They also appear frequently in calculus when describing intervals of increase or decrease, domains, and convergence. The symbols >, <, ≥, and ≤ are essential, and we must be careful when solving inequalities: if we multiply or divide both sides by a negative number, we must reverse the inequality sign. This rule is a common source of errors, so it is crucial to remember it.

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

A compound inequality combines two separate inequalities into one statement, often representing a bounded interval of values. For example, 2 < x < 7 means that x must be greater than 2 and simultaneously less than 7. This type of inequality is common when describing domains that are restricted to a certain range, such as "the temperature must be between 0°C and 30°C." Compound inequalities can also be written as two separate inequalities joined by "and" or "or." The "and" case corresponds to an intersection of sets, while the "or" case corresponds to a union. In interval notation, 2 < x < 7 is written as (2, 7) when the endpoints are not included, or [2, 7] if they are. Understanding compound inequalities is essential for working with piecewise functions, absolute value inequalities, and many applied problems.

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

Interval notation is a concise way to describe sets of real numbers that form intervals on the number line. It uses parentheses and brackets to indicate whether endpoints are included. An open interval (a, b) means all numbers between a and b, but not including a and b themselves. A closed interval [a, b] includes both endpoints. Half‑open intervals [a, b) and (a, b] include one endpoint but not the other. For infinite intervals, we use ∞ and -∞ with parentheses, because infinity is not a number that can be included. For example, (3, ∞) represents all numbers greater than 3, and (-∞, 5] represents all numbers less than or equal to 5. Interval notation is widely used in calculus when stating domains, ranges, and solution sets of inequalities because it is compact and unambiguous. It also helps visualise intervals on the number line, making it easier to understand the behaviour of functions over specific ranges.

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

These three concepts are strongly interconnected. A set is a collection of objects or numbers, and we often describe sets using set‑builder notation, which employs inequalities to specify membership. The real numbers form the universal set for most of our work in algebra and calculus, and inequalities help us define subsets of the real numbers. For example, the inequality x ≥ 2 describes the set of all real numbers that are greater than or equal to 2. This can be written in set notation as {x ∈ ℝ | x ≥ 2}, which is read as "the set of all real numbers x such that x is greater than or equal to 2." In interval notation, this same set is written as [2, ∞). Thus, the three perspectives set notation, inequalities, and interval notation are simply different languages for describing the same mathematical objects. Being fluent in all three is essential for clear communication and problem‑solving in mathematics.

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

Sets, real numbers, and inequalities are essential in Calculus because Calculus studies functions and how they behave over particular domains. A function's domain is the set of real numbers for which the function is defined, and it is often expressed using inequalities and interval notation. For instance, the function f(x) = √(x - 2) is defined only when the radicand is non‑negative, so we require x - 2 ≥ 0, which gives x ≥ 2. The domain is then the interval [2, ∞). Similarly, limits and continuity involve inequalities (e.g., epsilon‑delta definitions), and derivatives and integrals often require us to consider intervals of increase, decrease, or concavity, which are described using inequalities. Without a solid grasp of these foundational concepts, understanding calculus would be much more difficult. They provide the language and tools needed to precisely describe the behaviour of functions and the relationships between quantities.

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

"image": "src/assets/47.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sets, real numbers, and inequalities form an important foundation for studying mathematics and Calculus. Sets organise objects or numbers into groups, providing a way to talk about collections. The real number system classifies all numbers we typically use, from counting numbers to irrationals, and is the universe in which most of our work takes place. Inequalities compare quantities and describe ranges of possible values, and they are expressed in various forms: symbolic (>, <, ≥, ≤), set‑builder notation, and interval notation. These three concepts are deeply connected: an inequality defines a set of real numbers, and interval notation gives a compact way to write that set. Together, they provide the language for describing domains, ranges, and many other properties of functions. Mastering them is a prerequisite for success in calculus and beyond.

The key idea to remember is:
  Sets organise numbers, Real Numbers describe the number system, 
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