// filename: inverse-of-a-function.ts

const topic = {
  id: "inverse-of-a-function",
  title: "Inverse of a Function",
  summary:
    "A function that reverses or undoes the action of another function, written as f⁻¹(x), with the property that f⁻¹(f(x)) = x and f(f⁻¹(x)) = x.",
  details: `
An inverse function is a function that reverses or undoes the action of another function.

Think of a function as a machine:
  Input → Function → Output

The inverse function takes that output and returns it to the original input:
  Output → Inverse Function → Original Input

If a function is written as f(x), its inverse is written as:
  f⁻¹(x)

Important: f⁻¹(x) does not mean 1/f(x). It means the inverse function of f(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASIC IDEA OF AN INVERSE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have the function:
  f(x) = x + 3

If we put 2 into the function:
  f(2) = 2 + 3 = 5

The function changed:
  2 → 5

The inverse function must undo that operation:
  5 → 2

Since the original function adds 3, the inverse must subtract 3.

Therefore:
  f⁻¹(x) = x - 3

Let's verify:
  f⁻¹(f(2))

First:
  f(2) = 5

Then:
  f⁻¹(5) = 5 - 3 = 2

We returned to the original number.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DEFINITION OF AN INVERSE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two functions f and f⁻¹ are inverses if they undo each other.

Mathematically:
  f⁻¹(f(x)) = x
and:
  f(f⁻¹(x)) = x

These are called the composition properties of inverse functions.

Simple meaning:
  Start with x:
    x

  Apply the function:
    f(x)

  Then apply the inverse:
    f⁻¹(f(x))

  You should return to:
    x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. HOW TO FIND THE INVERSE OF A FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There is a standard procedure for finding an inverse.

Step 1: Write the function as y
  Suppose: f(x) = 2x + 5

  Write:
    y = 2x + 5

Step 2: Switch x and y
  Exchange the positions of x and y:
    x = 2y + 5

Step 3: Solve for y
  Subtract 5:
    x - 5 = 2y

  Divide by 2:
    y = (x - 5)/2

Step 4: Write the inverse
  Replace y with f⁻¹(x)

  Therefore:
    f⁻¹(x) = (x - 5)/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. WHY DO WE SWITCH x AND y?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The reason is that an inverse function switches inputs and outputs.

Suppose:
  f(2) = 9

This can be represented as the point:
  (2, 9)

For the inverse function, the input and output switch:
  f⁻¹(9) = 2

This becomes:
  (9, 2)

Therefore, every point (a, b) on the original function becomes (b, a) on the inverse function.

This is why inverse functions are reflections across the line:
  y = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GRAPH OF AN INVERSE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graphically, an inverse function is the reflection of the original function across the line:
  y = x

For example, if:
  f(x) = 2x + 5

then:
  f⁻¹(x) = (x - 5)/2

Their graphs are reflections across:
  y = x

This happens because every point changes:
  (a, b) → (b, a)

For example:
  (1, 7) becomes (7, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. THE HORIZONTAL LINE TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not every function has an inverse that is also a function.

For a function to have an inverse function, it must be one-to-one.

A function is one-to-one if every output comes from only one input.

The easiest graphical test is called the:
  Horizontal Line Test

Rule:
  If every horizontal line intersects the graph at most once, the function 
  has an inverse function.

Example: A Function That Has an Inverse
  Consider f(x) = 2x + 1.

  This is a straight line that increases continuously.

  Any horizontal line crosses it only once.

  Therefore: It has an inverse function.

Example: A Function Without an Inverse Function
  Consider f(x) = x².

  The points (2, 4) and (-2, 4) both produce the same output: 4.

  Therefore:
    f(2) = f(-2)

  This means the function is not one-to-one over all real numbers.

  Its inverse relation would contain:
    y = ±√x

  which is not a function because one input can produce two outputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. RESTRICTING THE DOMAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sometimes we can restrict the domain to make a function one-to-one.

For f(x) = x², restrict the domain to:
  x ≥ 0

Now the function only uses the right side of the parabola.

The inverse becomes:
  f⁻¹(x) = √x

Now the inverse is a valid function.

Why?
  Because every output corresponds to only one input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. DOMAIN AND RANGE SWITCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One important property of inverse functions is that the domain and range switch.

If the original function has:
  Domain = A
and:
  Range = B

then the inverse function has:
  Domain = B
and:
  Range = A

Example:
  Suppose f(x) = eˣ.

  The exponential function has:
    Domain = (-∞, ∞)
  and:
    Range = (0, ∞)

  Its inverse is:
    f⁻¹(x) = ln x

  Therefore, the natural logarithmic function has:
    Domain = (0, ∞)
  and:
    Range = (-∞, ∞)

  The domain and range have switched.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. IMPORTANT EXAMPLE: EXPONENTIAL AND NATURAL LOGARITHMIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most important examples of inverse functions in Calculus is:
  f(x) = eˣ
and:
  f⁻¹(x) = ln x

These functions undo each other.

Example:
  ln(e⁵)

The functions cancel:
  5

Similarly:
  e^(ln 5)

also gives:
  5

Therefore:
  ln(eˣ) = x
and:
  e^(ln x) = x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. VERIFYING AN INVERSE USING COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:
  f(x) = 3x + 4

We find the inverse.

Start with:
  y = 3x + 4

Switch:
  x = 3y + 4

Solve:
  x - 4 = 3y
  y = (x - 4)/3

Therefore:
  f⁻¹(x) = (x - 4)/3

Now verify.

First Composition:
  f(f⁻¹(x))

  Substitute:
    f((x - 4)/3)
    = 3((x - 4)/3) + 4
    = x - 4 + 4
    = x

Second Composition:
  f⁻¹(f(x))

  Substitute:
    f⁻¹(3x + 4)
    = ((3x + 4) - 4)/3
    = 3x/3
    = x

Both compositions equal x, so the inverse is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INVERSE FUNCTIONS IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse functions are important in Calculus because many functions are defined as inverses of other functions.

Examples include:

  Function              Inverse
  ──────────────────────────────────
  eˣ                    ln x
  aˣ                    logₐ x
  x² (restricted)       √x
  sin x (restricted)    sin⁻¹ x
  cos x (restricted)    cos⁻¹ x
  tan x (restricted)    tan⁻¹ x

Important Note:
  For trigonometric functions:
    sin⁻¹ x
  does not mean:
    1/sin x

  Instead:
    sin⁻¹ x
  means the inverse sine function, also called:
    arcsin x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. REAL-LIFE ANALOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine putting on a jacket.

The action:
  Put on jacket

has an opposite action:
  Remove jacket

If you put on a jacket and then remove it, you return to the original state.

Similarly:
  f⁻¹(f(x)) = x

The inverse function reverses what the original function does.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Inverse notation:
    f⁻¹(x)

  Composition property:
    f⁻¹(f(x)) = x
    f(f⁻¹(x)) = x

  Graphical relationship:
    Inverse functions are reflections across y = x

  Requirement:
    A function must be One-to-One to have an inverse that is also a function.

  Domain and range:
    Domain and range switch places

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An inverse function is a function that undoes another function.

If the original function changes:
  a → b

then the inverse changes:
  b → a

To find an inverse:
  1. Replace f(x) with y.
  2. Switch x and y.
  3. Solve for y.
  4. Replace y with f⁻¹(x).
  5. Verify using composition.

The most important idea to remember is:

  A function and its inverse undo each other.

For example:
  eˣ ↔ ln x

They are inverse functions because applying one after the other returns you to the original value.
  `,
  examples: [
    "f(x) = x + 3 → f⁻¹(x) = x - 3",
    "f(x) = 2x + 5 → f⁻¹(x) = (x - 5)/2",
    "f(x) = eˣ → f⁻¹(x) = ln x",
    "f(x) = x² (restricted to x≥0) → f⁻¹(x) = √x",
    "ln(e⁵) = 5, e^(ln 5) = 5",
    "f⁻¹(f(x)) = x and f(f⁻¹(x)) = x",
    "Horizontal Line Test: one-to-one functions have inverses",
  ],
};

export default topic;