// filename: basic-trigonometric-integrals.ts

const topic = {
  id: "basic-trigonometric-integrals",
  title: "Basic Trigonometric Integrals",
  summary:
    "Antiderivatives involving the six fundamental trigonometric functions (sin x, cos x, tan x, cot x, sec x, csc x), derived by reversing differentiation rules.",
  details: `
Basic Trigonometric Integrals are antiderivatives involving the six fundamental trigonometric functions:
  sin x, cos x, tan x, cot x, sec x, csc x

The easiest way to learn them is to connect integration with differentiation.

Integration reverses differentiation.

For example:
  d/dx (sin x) = cos x

Therefore:
  ∫ cos x dx = sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE TWO MOST IMPORTANT TRIGONOMETRIC INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with the derivatives you already know.

Derivative of sine:
  d/dx (sin x) = cos x

Therefore:
  ∫ cos x dx = sin x + C

Derivative of cosine:
  d/dx (cos x) = -sin x

Therefore, to integrate sin x, we need a negative sign:
  ∫ sin x dx = -cos x + C

These two are the most fundamental.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. INTEGRAL OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ sin x dx = -cos x + C

Example:
  Evaluate: ∫ sin x dx

Since:
  d/dx (-cos x) = sin x

the answer is:
  -cos x + C

Important:
  Don't forget the negative sign.
  Incorrect: ∫ sin x dx = cos x + C
  because:
    d/dx (cos x) = -sin x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. INTEGRAL OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ∫ cos x dx = sin x + C

Example:
  ∫ cos x dx

Therefore:
  sin x + C

Check:
  d/dx (sin x) = cos x

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. INTEGRAL OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:
  tan x = sin x / cos x

The basic integral is:
  ∫ tan x dx = -ln|cos x| + C

An equivalent form is:
  ∫ tan x dx = ln|sec x| + C

because:
  sec x = 1/cos x

and therefore:
  ln|sec x| = -ln|cos x|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DERIVING THE INTEGRAL OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Start with:
  ∫ tan x dx

Rewrite tangent:
  ∫ sin x / cos x dx

Let:
  u = cos x

Then:
  du = -sin x dx

Therefore:
  -∫ 1/u du

Using:
  ∫ 1/u du = ln|u|

we get:
  -ln|u| + C

Substitute back:
  -ln|cos x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. INTEGRAL OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recall:
  cot x = cos x / sin x

Therefore:
  ∫ cot x dx = ln|sin x| + C

Derivation:
  Start with:
    ∫ cot x dx = ∫ cos x / sin x dx

  Let:
    u = sin x

  Then:
    du = cos x dx

  So:
    ∫ 1/u du

  Therefore:
    ln|u| + C

  Substitute back:
    ∫ cot x dx = ln|sin x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. INTEGRAL OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The integral of secant is one of the more unusual basic formulas:
  ∫ sec x dx = ln|sec x + tan x| + C

This formula is important enough to memorize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. WHY IS ∫ sec x dx MORE COMPLICATED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We know:
  sec x = 1/cos x

A direct substitution isn't immediately obvious.

A clever technique is to multiply by:
  (sec x + tan x) / (sec x + tan x)

Then:
  ∫ sec x dx = ∫ sec x (sec x + tan x) / (sec x + tan x) dx

The numerator becomes:
  sec² x + sec x tan x

Notice:
  d/dx (sec x + tan x) = sec x tan x + sec² x

Therefore:
  ∫ sec x dx = ln|sec x + tan x| + C

You don't normally need to derive this every time—memorizing the formula is much more practical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. INTEGRAL OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Similarly:
  ∫ csc x dx = -ln|csc x + cot x| + C

An equivalent form is:
  ∫ csc x dx = ln|csc x - cot x| + C

Both forms are correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. THE SIX BASIC TRIGONOMETRIC INTEGRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are the formulas you should memorize:

  Function   |  Integral
  ───────────┼────────────────────────────────
  sin x      |  -cos x + C
  cos x      |  sin x + C
  tan x      |  -ln|cos x| + C (or ln|sec x| + C)
  cot x      |  ln|sin x| + C
  sec x      |  ln|sec x + tan x| + C
  csc x      |  -ln|csc x + cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. INTEGRAL OF A CONSTANT MULTIPLE OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the Constant Multiple Rule.

Evaluate:
  ∫ 5 sin x dx

Move 5 outside:
  5∫ sin x dx

Therefore:
  5(-cos x) + C
  -5 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. INTEGRAL OF A CONSTANT MULTIPLE OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 7 cos x dx
  7∫ cos x dx
  = 7 sin x + C

Therefore:
  7 sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. INTEGRAL OF TANGENT WITH A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 4 tan x dx

Use:
  ∫ tan x dx = -ln|cos x|

Therefore:
  -4 ln|cos x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. INTEGRAL OF COTANGENT WITH A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ 3 cot x dx
  3∫ cot x dx
  = 3 ln|sin x| + C

Therefore:
  3 ln|sin x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. INTEGRALS INVOLVING kx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Just like exponential functions, trigonometric functions may contain a constant multiplier inside the argument.

For example:
  ∫ cos(3x) dx

The derivative of 3x is 3, so divide by 3:
  (1/3) sin(3x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY DO WE DIVIDE BY THE INSIDE DERIVATIVE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:
  ∫ sin(5x) dx

We know:
  d/dx (cos(5x)) = -5 sin(5x)

Therefore:
  ∫ sin(5x) dx = -(1/5) cos(5x) + C

Check:
  d/dx (-(1/5) cos(5x))
  = -(1/5)(-5 sin(5x))
  = sin(5x)

Correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. GENERAL FORMULAS WITH kx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For k ≠ 0:

  Sine:
    ∫ sin(kx) dx = -(1/k) cos(kx) + C

  Cosine:
    ∫ cos(kx) dx = (1/k) sin(kx) + C

  Tangent:
    ∫ tan(kx) dx = -(1/k) ln|cos(kx)| + C

  Cotangent:
    ∫ cot(kx) dx = (1/k) ln|sin(kx)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. EXAMPLE WITH cos(4x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ cos(4x) dx

Since:
  k = 4

we use:
  (1/k) sin(kx)

Therefore:
  (1/4) sin(4x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. EXAMPLE WITH sin(2x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ sin(2x) dx

Using:
  -(1/k) cos(kx)

we get:
  -(1/2) cos(2x) + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. EXAMPLE WITH tan(3x)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ tan(3x) dx

Using:
  -(1/3) ln|cos(3x)| + C

Therefore:
  -(1/3) ln|cos(3x)| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. EXAMPLE WITH A SUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (sin x + cos x) dx

Separate:
  ∫ sin x dx + ∫ cos x dx

Integrate:
  -cos x + sin x + C

Therefore:
  -cos x + sin x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. EXAMPLE WITH A DIFFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (3 cos x - 2 sin x) dx

Separate:
  3∫ cos x dx - 2∫ sin x dx

Integrate:
  3 sin x - 2(-cos x) + C

Therefore:
  3 sin x + 2 cos x + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. EXAMPLE WITH MULTIPLE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:
  ∫ (2 sin x + 5 cos x + 3 tan x) dx

Separate:
  2∫ sin x dx + 5∫ cos x dx + 3∫ tan x dx

Integrate:
  -2 cos x + 5 sin x - 3 ln|cos x| + C

Therefore:
  -2 cos x + 5 sin x - 3 ln|cos x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. IMPORTANT TRIGONOMETRIC IDENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Some integrals become easier after rewriting trigonometric functions.

Remember:
  tan x = sin x / cos x
  cot x = cos x / sin x
  sec x = 1 / cos x
  csc x = 1 / sin x

These identities help us recognize logarithmic patterns.

For example:
  ∫ tan x dx

becomes:
  ∫ sin x / cos x dx

which leads to:
  -ln|cos x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25. RECOGNIZING DERIVATIVE PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful strategy is to look for a function and its derivative.

Pattern:
  sin x / cos x

Since:
  d/dx (cos x) = -sin x

we get:
  -ln|cos x|

Pattern:
  cos x / sin x

Since:
  d/dx (sin x) = cos x

we get:
  ln|sin x|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Mistake 1: Wrong sign for sine
  Incorrect:
    ∫ sin x dx = cos x + C
  Correct:
    ∫ sin x dx = -cos x + C

❌ Mistake 2: Forgetting the coefficient inside
  Incorrect:
    ∫ cos(5x) dx = sin(5x) + C
  Differentiate:
    5 cos(5x)
  There's an extra 5.
  Correct:
    (1/5) sin(5x) + C

❌ Mistake 3: Forgetting absolute values
  For:
    ∫ tan x dx
  the safe form is:
    -ln|cos x| + C
  not simply:
    -ln(cos x) + C

❌ Mistake 4: Confusing derivatives and integrals
  Remember:
    d/dx (sin x) = cos x
  but:
    ∫ sin x dx = -cos x + C
  The negative sign is important.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27. CHECKING YOUR ANSWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Differentiation is the easiest way to check an indefinite integral.

Suppose:
  ∫ cos(4x) dx = (1/4) sin(4x) + C

Differentiate:
  d/dx ((1/4) sin(4x))

Using the Chain Rule:
  = (1/4)(4 cos(4x))
  = cos(4x)

Therefore, the answer is correct.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28. BASIC TRIGONOMETRIC INTEGRAL CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Memorize these six:

  ∫ sin x dx = -cos x + C
  ∫ cos x dx = sin x + C
  ∫ tan x dx = ln|sec x| + C  (or -ln|cos x| + C)
  ∫ cot x dx = ln|sin x| + C
  ∫ sec x dx = ln|sec x + tan x| + C
  ∫ csc x dx = -ln|csc x + cot x| + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29. EASY MEMORY PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The first two are easiest:
  sin → -cos
  cos → sin

For tangent and cotangent:
  tan → ln|sec|
  cot → ln|sin|

For secant and cosecant:
  sec → ln|sec + tan|
  csc → -ln|csc + cot|

And whenever you see something like:
  sin(kx), cos(kx), tan(kx)

remember:
  Differentiate the inside. If it gives k, divide by k.

For example:
  ∫ cos(7x) dx = (1/7) sin(7x) + C

These formulas form the foundation for more advanced topics such as trigonometric substitution, trigonometric integrals, integration by parts, and improper integrals.
  `,
  examples: [
    "∫ sin x dx = -cos x + C",
    "∫ cos x dx = sin x + C",
    "∫ tan x dx = -ln|cos x| + C (or ln|sec x| + C)",
    "∫ cot x dx = ln|sin x| + C",
    "∫ sec x dx = ln|sec x + tan x| + C",
    "∫ csc x dx = -ln|csc x + cot x| + C",
    "∫ (2 sin x + 5 cos x + 3 tan x) dx = -2 cos x + 5 sin x - 3 ln|cos x| + C",
  ],
};

export default topic;