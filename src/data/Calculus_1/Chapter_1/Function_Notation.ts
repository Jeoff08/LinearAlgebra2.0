// filename: function-notation.ts

const topic = {
  id: "function-notation",
  title: "Function Notation",
  summary:
    "A way of writing and representing functions using symbols, typically f(x), read as 'f of x', representing the output of the function f when the input is x.",
  details: `
Function notation is a way of writing and representing functions using symbols. It is one of the most important concepts in Algebra and Calculus because it provides a clear way to show the relationship between an input and an output. A function is commonly written as f(x), read as "f of x". The notation f(x) represents the output of the function f when the input is x. For example, f(x) = 2x + 3 means that the function named f takes an input x, multiplies it by 2, and then adds 3. Function notation is useful because it clearly identifies the name of the function, the input, the rule being applied, and the resulting output. This systematic notation helps us communicate mathematical ideas precisely and is essential for working with multiple functions, compositions, and inverses.

For example:
  f(x) = 2x + 3

This means that the function named f takes an input x, multiplies it by 2, and then adds 3.

Function notation is useful because it clearly identifies:
  • The name of the function
  • The input
  • The rule being applied
  • The resulting output

"image": "src/assets/104.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTANDING f(x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider f(x) = x + 5. The letter f is the name of the function, and the letter x represents the input. The expression x + 5 is the rule that transforms the input into an output. Think of a function as a machine: you feed in an input, the machine applies the rule, and out comes the output. For a given input, there is exactly one output, which is the defining property of a function. The notation f(x) not only tells us the output value but also reminds us that the output depends on the input. By replacing x with any number or expression, we can compute the corresponding output. For instance, if x = 2, then f(2) = 2 + 5 = 7, so when the input is 2, the output is 7. This simple yet powerful notation allows us to study relationships and patterns systematically.

Consider:
  f(x) = x + 5

The letter f is the name of the function.

The letter x represents the input.

The expression x + 5 is the rule used to transform the input.

We can think about it like a machine:
  x → f(x)

The input goes into the function, the function follows a rule, and then it produces an output.

For example:
  f(x) = x + 5

If x = 2, then:
  f(2) = 2 + 5
  f(2) = 7

Therefore, when the input is 2, the output is 7.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. FUNCTION NOTATION IS NOT MULTIPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A common mistake among beginners is to interpret f(x) as f multiplied by x. This is incorrect. The notation f(x) is a single entity that represents the value of the function f at the input x. It is not a product; rather, it is the output produced by applying the function's rule to the input. For example, if f(x) = x² + 1, then f(3) means we substitute 3 into the function: f(3) = 3² + 1 = 10. We do not multiply f by 3; we evaluate the function at 3. Understanding this distinction is crucial because it prevents confusion when manipulating expressions involving functions. Treating f(x) as a unit the result of a mapping is fundamental to all subsequent work with functions, including composition, transformation, and calculus operations.

For example:
  f(x) = x² + 1

If we write f(3), we are asking:
  What is the output of the function when x = 3?

We substitute 3 into the function:
  f(3) = 3² + 1
  f(3) = 9 + 1
  f(3) = 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. EVALUATING A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluating a function means finding the output for a specific input. This is one of the most basic and frequent operations in algebra. To evaluate, we simply replace every occurrence of the input variable (usually x) with the given value or expression, then simplify according to the order of operations. Evaluation is essential because it allows us to compute specific values that can be plotted as points on a graph or used in real‑world applications. It also forms the basis for understanding how functions behave for different inputs. Let's work through an example: suppose f(x) = 3x - 4. To find f(5), we substitute 5 for x: f(5) = 3(5) - 4 = 15 - 4 = 11. So the output is 11 when the input is 5. Practice with various inputs builds confidence and fluency in handling functions.

Suppose:
  f(x) = 3x - 4

Find f(5).

Step 1: Replace x with 5
  f(5) = 3(5) - 4

Step 2: Simplify
  f(5) = 15 - 4

Step 3: Find the Answer
  f(5) = 11

Therefore, the output of the function when the input is 5 is 11.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. ANOTHER EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To reinforce the process of evaluation, let us consider a quadratic function. Quadratic functions are common and involve powers of the input. Suppose we have g(x) = x² - 2x + 1. This function takes an input, squares it, subtracts twice the input, and adds 1. To evaluate at x = 3, we substitute 3 into the expression: g(3) = 3² - 2(3) + 1 = 9 - 6 + 1 = 4. The output is 4. Notice that this function can also be factored as (x - 1)², which gives the same result: (3 - 1)² = 4. This example illustrates that different algebraic forms of the same function yield the same output when evaluated correctly. Practicing with different types of functions linear, quadratic, polynomial builds a strong foundation for more advanced topics.

Suppose:
  g(x) = x² - 2x + 1

Find g(3).

Substitute x = 3:
  g(3) = 3² - 2(3) + 1

Simplify:
  g(3) = 9 - 6 + 1
  g(3) = 4

Therefore:
  g(3) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DIFFERENT NAMES FOR FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function does not have to be named f; we can use any letter to denote a function. Common choices include g, h, F, P, or even more descriptive names like distance or cost. Using different letters helps distinguish between multiple functions in the same problem. For instance, we might have f(x) = x + 1, g(x) = x², and h(x) = √x. These are three different functions, each with its own rule. If we evaluate f(2), we get 3; g(2) gives 4; and h(4) gives 2. The name of the function tells us which rule to apply. This flexibility is essential in mathematics, where we often work with several functions simultaneously, such as in compositions or when comparing models. Choosing meaningful function names can also aid in understanding real‑world applications.

For example:
  f(x) = x + 1
  g(x) = x²
  h(x) = √x

The letters f, g, and h simply represent different functions.

For example:
  f(2) = 2 + 1 = 3
while:
  g(2) = 2² = 4
and:
  h(4) = √4 = 2

Even though the inputs may be different, the functions follow different rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. FUNCTION NOTATION WITH DIFFERENT VARIABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The input variable in a function does not have to be x; it can be any letter that makes sense for the context. For example, in physics, distance is often a function of time, so we might write d(t) = 5t + 10, where t is time. The variable inside the parentheses is the independent variable, and the function rule is expressed in terms of that variable. This is particularly useful in applied mathematics, where variables have specific meanings. For instance, P(n) = n² + 10 uses n as the input, perhaps representing the number of items. When we evaluate P(4), we get 16 + 10 = 26. The notation adapts to the problem, making it clear which quantity is the input. Being comfortable with different variable names is important because you will encounter them in various contexts throughout your studies.

For example:
  f(t) = 2t + 5

Here, the input variable is t.

If t = 3, then:
  f(3) = 2(3) + 5
  f(3) = 11

We can also write:
  P(n) = n² + 10

where n is the input.

For example:
  P(4) = 4² + 10
  P(4) = 16 + 10
  P(4) = 26

The variable inside the parentheses represents the input variable used by the function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SUBSTITUTION IN FUNCTION NOTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation becomes especially powerful when we substitute entire expressions, not just numbers. For instance, if we have f(x) = 2x + 3, then f(a) = 2a + 3, meaning we replace every x with a. More importantly, we can substitute expressions like x + 1. When we write f(x + 1), we replace every occurrence of x with (x + 1). This is a common operation in calculus when studying difference quotients or shifting graphs. For example, f(x + 1) = 2(x + 1) + 3 = 2x + 5. Notice how parentheses are essential to ensure the substitution is applied correctly to the entire expression. Omitting parentheses can lead to errors. This technique is also used in function composition and transformations, making it a fundamental skill for advanced algebra and calculus.

Suppose:
  f(x) = 2x + 3

Find f(a).

Replace every x with a:
  f(a) = 2a + 3

Now suppose we want f(x + 1).

We replace every x with (x + 1).

Therefore:
  f(x + 1) = 2(x + 1) + 3

Simplify:
  f(x + 1) = 2x + 2 + 3
  f(x + 1) = 2x + 5

This is important because the expression inside the parentheses replaces the entire input variable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE WITH A MORE COMPLEX INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Substitution becomes more involved when the input expression is algebraic and the function rule is quadratic or higher‑degree. Let us take g(x) = x² + 4x - 1 and compute g(a + 2). We replace every x with (a + 2). Then we expand and simplify: (a + 2)² + 4(a + 2) - 1 = a² + 4a + 4 + 4a + 8 - 1 = a² + 8a + 11. This example demonstrates the need for careful expansion and combining like terms. Such computations are common in calculus when working with difference quotients or when evaluating functions at shifted arguments. Mastering this skill ensures that you can handle transformations and compositions accurately. It also reinforces the importance of parentheses: without them, we might mistakenly distribute incorrectly. Always treat the substituted expression as a single unit.

Suppose:
  g(x) = x² + 4x - 1

Find g(a + 2).

Replace every x with (a + 2).

Therefore:
  g(a + 2) = (a + 2)² + 4(a + 2) - 1

Expand:
  (a + 2)² = a² + 4a + 4

So:
  g(a + 2) = a² + 4a + 4 + 4a + 8 - 1

Combine like terms:
  g(a + 2) = a² + 8a + 11

This example shows why parentheses are important when evaluating functions with expressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. FUNCTIONS AS INPUT-OUTPUT MACHINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A helpful way to visualise function notation is to imagine a machine that takes an input, processes it according to a rule, and produces an output. For example, f(x) = 2x + 1 can be seen as a machine that first multiplies the input by 2 and then adds 1. If you feed in 3, the machine does 2(3) + 1 = 7, so f(3) = 7. If you feed in 10, you get 21. The machine always follows the same rule, but the output depends on what you put in. This analogy is useful for understanding composition (chaining machines), inverses (reversing the machine), and the overall concept of a function as a mapping from a set of inputs to a set of outputs. It demystifies the abstraction and makes it tangible, especially for beginners.

Suppose:
  f(x) = 2x + 1

The machine follows two steps:
  1. Multiply the input by 2.
  2. Add 1.

If the input is 3:
  3 → 2(3) + 1 → 7

Therefore:
  f(3) = 7

If the input is 10:
  10 → 2(10) + 1 → 21

Therefore:
  f(10) = 21

The rule remains the same, but the output changes depending on the input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. FINDING THE INPUT FROM THE OUTPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we know the output of a function and need to determine the input that produced it. This is essentially solving an equation. For example, if f(x) = 2x + 3 and f(x) = 11, we set 2x + 3 = 11 and solve for x. Subtracting 3 gives 2x = 8, then dividing by 2 yields x = 4. Thus, f(4) = 11. This reverse process is important for finding domain values that yield a specific result, which arises in many applications, such as when we need to know what initial quantity leads to a desired final quantity. Function notation neatly encapsulates the equation: f(x) = value. This is also the basis for finding inverse functions, where we swap the roles of input and output. Practicing this builds problem‑solving skills and deepens understanding of the function as a relation.

Suppose:
  f(x) = 2x + 3

and:
  f(x) = 11

This means:
  2x + 3 = 11

Subtract 3:
  2x = 8

Divide by 2:
  x = 4

Therefore:
  f(4) = 11

This shows that function notation can also be used to solve equations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. FUNCTION NOTATION AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation is intimately tied to graphing. For a function f, the graph consists of all points (x, f(x)), where x is in the domain. That is, we plot the input on the horizontal axis and the corresponding output on the vertical axis, so y = f(x). For example, if f(x) = x², then the graph is a parabola. The notation tells us that for every x‑value, there is exactly one y‑value, which is the hallmark of a function. Using f(x) instead of just y makes it clear which function we are referring to, especially when multiple functions are involved. It also helps in understanding transformations: shifting the graph up or down corresponds to adding a constant to f(x), while shifting left or right involves substituting x with x - h. This graphical interpretation is fundamental in calculus, where we study slopes, areas, and behaviour of functions.

Suppose:
  f(x) = x²

This means that the y-value of the graph is determined by:
  y = f(x)

Therefore:
  y = x²

The graph represents all points:
  (x, f(x))

For example:
  (0, f(0)), (1, f(1)), (2, f(2))

The graph shows how the output changes as the input changes.

The graph of f(x) = x² is a parabola. Each x-value produces exactly one corresponding output, which is why the graph represents a function.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. FUNCTION NOTATION AND CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation is indispensable in calculus because it allows us to denote derivatives and other operations succinctly. Instead of writing y = x² and then "the derivative of y with respect to x", we can write f(x) = x² and denote its derivative as f'(x) = 2x. The prime symbol (') indicates differentiation. This notation extends naturally to higher derivatives: f''(x) for the second derivative, and so on. It also facilitates the notation for limits, integrals, and compositions. For instance, the chain rule is expressed as (f ∘ g)'(x) = f'(g(x))·g'(x). Without function notation, these concepts would be cumbersome to express. Therefore, mastering f(x) notation is a prerequisite for calculus. It provides a clear, concise language for discussing rates of change, slopes of tangent lines, and accumulated quantities.

Derivative:
  The derivative of f(x) = x² can be written as:
    f'(x) = 2x

  The symbol f'(x) is read as "f prime of x."

  It represents the derivative or instantaneous rate of change of the function.

Second Derivative:
  The derivative of the derivative is called the second derivative:
    f''(x)

  For f(x) = x², we have:
    f'(x) = 2x
  and:
    f''(x) = 2

Function notation makes it easier to represent these relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. REAL-LIFE APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation is extensively used to model real‑world situations. For example, distance as a function of time is written as d(t), population as P(t), cost as C(x), and temperature as T(t). Using this notation, we can express relationships such as d(t) = 5t (distance = speed × time) or C(x) = 50x (cost = unit price × number of items). The notation makes it clear which variable is independent and which is dependent. It also enables us to evaluate the function at specific values to make predictions or decisions. For instance, if a taxi charges a fixed fee plus a per‑kilometer rate, we can write fare(x) = 40 + 10x, where x is kilometers. Then fare(5) = 90 pesos. This clarity is invaluable in fields like economics, biology, engineering, and statistics, where functions describe relationships between measurable quantities.

Distance:
  Distance may depend on time:
    d(t)
  This means the distance is a function of time.

Population:
  Population may depend on time:
    P(t)
  This represents population as a function of time.

Cost:
  The cost may depend on the number of items:
    C(x)

  For example:
    C(x) = 50x

  If one item costs 50 pesos, then:
    C(3) = 50(3) = 150

Temperature:
  Temperature may depend on time:
    T(t)
  This notation tells us that the temperature changes depending on the value of t.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"image": "src/assets/37.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function notation is a way of representing functions and showing the relationship between an input and an output. The general form is f(x), which means the output of function f when the input is x. For example, f(x) = 2x + 3 is a function rule; if x = 4, then f(4) = 2(4) + 3 = 11. The most important rule to remember is that the expression inside the parentheses is the input that replaces the function's variable. This notation is not multiplication; it is a value. Function notation is essential in Algebra and Calculus because it allows us to clearly describe functions, evaluate inputs, analyze graphs, and study important concepts such as limits, derivatives, and integrals. It also enables us to work with multiple functions simultaneously, compose them, and find inverses. Mastering function notation is a key step toward higher mathematics.

The general form is:
  f(x)

which means:
  The output of function f when the input is x.

For example:
  f(x) = 2x + 3

If x = 4, then:
  f(4) = 2(4) + 3
  f(4) = 11

The most important rule to remember is:

  The expression inside the parentheses is the input that replaces 
  the function's variable.

Function notation is essential in Algebra and Calculus because it allows us to clearly describe functions, evaluate inputs, analyze graphs, and study important concepts such as limits, derivatives, and integrals.
  `,
  examples: [
    "f(x) = x + 5 → f(2) = 7",
    "f(x) = 3x - 4 → f(5) = 11",
    "g(x) = x² - 2x + 1 → g(3) = 4",
    "f(t) = 2t + 5 → f(3) = 11",
    "f(a) = 2a + 3 when f(x) = 2x + 3",
    "f(x + 1) = 2x + 5 when f(x) = 2x + 3",
    "g(a + 2) = a² + 8a + 11 when g(x) = x² + 4x - 1",
  ],
};

export default topic;