const topic = {
  id: "derivatives-of-inverse-trigonometric-functions",
  title: "Derivatives of Inverse Trigonometric Functions",
  summary:
    "Derivatives of arcsin, arccos, arctan, arccot, arcsec, and arccsc with chain rule applications.",
  details: `
Inverse trigonometric functions are functions that "undo" the basic trigonometric functions.

The six main inverse trigonometric functions are:

  sin⁻¹(x), cos⁻¹(x), tan⁻¹(x), csc⁻¹(x), sec⁻¹(x), cot⁻¹(x)

Important: sin⁻¹(x) means inverse sine (arcsin), not 1/sin(x).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DERIVATIVE OF INVERSE SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse sine function is: y = sin⁻¹(x)

Its derivative is: d/dx[sin⁻¹(x)] = 1/√(1 - x²)

Example: f(x) = sin⁻¹(x) → f'(x) = 1/√(1 - x²)

With a function inside: If f(x) = sin⁻¹(g(x)), then use the Chain Rule:

  f'(x) = g'(x)/√(1 - [g(x)]²)

Example: f(x) = sin⁻¹(3x)
  g(x) = 3x, g'(x) = 3
  f'(x) = 3/√(1 - 9x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DERIVATIVE OF INVERSE COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cosine function is: y = cos⁻¹(x)

Its derivative is: d/dx[cos⁻¹(x)] = -1/√(1 - x²)

Notice the negative sign.

Example: f(x) = cos⁻¹(x) → f'(x) = -1/√(1 - x²)

With a function inside: f(x) = cos⁻¹(4x)

  f'(x) = -4/√(1 - 16x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DERIVATIVE OF INVERSE TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse tangent function is: y = tan⁻¹(x)

Its derivative is: d/dx[tan⁻¹(x)] = 1/(1 + x²)

Example: f(x) = tan⁻¹(x) → f'(x) = 1/(1 + x²)

With a function inside: f(x) = tan⁻¹(g(x))

  f'(x) = g'(x)/(1 + [g(x)]²)

Example: f(x) = tan⁻¹(x²)
  g'(x) = 2x
  f'(x) = 2x/(1 + x⁴)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DERIVATIVE OF INVERSE COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cosecant function is: y = csc⁻¹(x)

Its derivative is: d/dx[csc⁻¹(x)] = -1/(|x|·√(x² - 1))

The absolute value |x| is important.

Example: f(x) = csc⁻¹(x) → f'(x) = -1/(|x|·√(x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. DERIVATIVE OF INVERSE SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse secant function is: y = sec⁻¹(x)

Its derivative is: d/dx[sec⁻¹(x)] = 1/(|x|·√(x² - 1))

Example: f(x) = sec⁻¹(x) → f'(x) = 1/(|x|·√(x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DERIVATIVE OF INVERSE COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The inverse cotangent function is: y = cot⁻¹(x)

Under the common convention for the principal branch:

  d/dx[cot⁻¹(x)] = -1/(1 + x²)

Example: f(x) = cot⁻¹(x) → f'(x) = -1/(1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. COMPLETE INVERSE TRIGONOMETRIC DERIVATIVE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inverse Function: sin⁻¹(x)
Derivative: 1/√(1 - x²)

Inverse Function: cos⁻¹(x)
Derivative: -1/√(1 - x²)

Inverse Function: tan⁻¹(x)
Derivative: 1/(1 + x²)

Inverse Function: cot⁻¹(x)
Derivative: -1/(1 + x²)

Inverse Function: sec⁻¹(x)
Derivative: 1/(|x|·√(x² - 1))

Inverse Function: csc⁻¹(x)
Derivative: -1/(|x|·√(x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EASY PATTERN TO MEMORIZE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can group them into pairs:

Sine and Cosine:
  (sin⁻¹(x))' = 1/√(1 - x²)
  (cos⁻¹(x))' = -1/√(1 - x²)
  Same denominator, opposite signs.

Tangent and Cotangent:
  (tan⁻¹(x))' = 1/(1 + x²)
  (cot⁻¹(x))' = -1/(1 + x²)
  Same denominator, opposite signs.

Secant and Cosecant:
  (sec⁻¹(x))' = 1/(|x|·√(x² - 1))
  (csc⁻¹(x))' = -1/(|x|·√(x² - 1))
  Same denominator, opposite signs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHAIN RULE FOR INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the function contains something other than simply x, multiply by the derivative of the inside function.

General formulas:
  d/dx[sin⁻¹(u)] = u'/√(1 - u²)
  d/dx[cos⁻¹(u)] = -u'/√(1 - u²)
  d/dx[tan⁻¹(u)] = u'/(1 + u²)
  d/dx[cot⁻¹(u)] = -u'/(1 + u²)
  d/dx[sec⁻¹(u)] = u'/(|u|·√(u² - 1))
  d/dx[csc⁻¹(u)] = -u'/(|u|·√(u² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE USING THE CHAIN RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find: f(x) = sin⁻¹(x³)

Let: u = x³, u' = 3x²

Apply the formula: f'(x) = u'/√(1 - u²)

Substitute: f'(x) = 3x²/√(1 - (x³)²)

Therefore: f'(x) = 3x²/√(1 - x⁶)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. QUICK MEMORY GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function: sin⁻¹(x)
Think: +1/√(1 - x²)

Function: cos⁻¹(x)
Think: -1/√(1 - x²)

Function: tan⁻¹(x)
Think: +1/(1 + x²)

Function: cot⁻¹(x)
Think: -1/(1 + x²)

Function: sec⁻¹(x)
Think: +1/(|x|·√(x² - 1))

Function: csc⁻¹(x)
Think: -1/(|x|·√(x² - 1))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mistake 1: Forgetting the negative sign for cos⁻¹(x) and cot⁻¹(x)
  Incorrect: d/dx[cos⁻¹(x)] = 1/√(1 - x²)
  Correct: d/dx[cos⁻¹(x)] = -1/√(1 - x²)

Mistake 2: Forgetting the Chain Rule
  For sin⁻¹(g(x)), don't forget to multiply by g'(x).

Mistake 3: Confusing sin⁻¹(x) with 1/sin(x)
  sin⁻¹(x) is the inverse sine function (arcsin).
  1/sin(x) = csc(x).
  They are completely different.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. IMPORTANT CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When studying Derivatives of Inverse Trigonometric Functions, remember:

  • sin⁻¹(x) and cos⁻¹(x) have denominator √(1 - x²).
  • tan⁻¹(x) and cot⁻¹(x) have denominator (1 + x²).
  • sec⁻¹(x) and csc⁻¹(x) have denominator |x|·√(x² - 1).
  • The pairs have opposite signs.
  • Always use the Chain Rule when there's a function inside.

The main pattern:
  sin⁻¹ → +
  cos⁻¹ → -
  tan⁻¹ → +
  cot⁻¹ → -
  sec⁻¹ → +
  csc⁻¹ → -

These six formulas are essential for Calculus differentiation, especially when combined with the Chain Rule, Product Rule, Quotient Rule, and implicit differentiation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Derivatives of Inverse Trigonometric Functions are essential for advanced differentiation in Calculus.

Key concepts covered:

  ✓ Derivative of Inverse Sine
  ✓ Derivative of Inverse Cosine
  ✓ Derivative of Inverse Tangent
  ✓ Derivative of Inverse Cosecant
  ✓ Derivative of Inverse Secant
  ✓ Derivative of Inverse Cotangent
  ✓ Complete Table
  ✓ Easy Pattern to Memorize
  ✓ Chain Rule Applications
  ✓ Examples
  ✓ Common Mistakes
  `,
  examples: [
    "d/dx[sin⁻¹(x)] = 1/√(1 - x²)",
    "d/dx[cos⁻¹(x)] = -1/√(1 - x²)",
    "d/dx[tan⁻¹(x)] = 1/(1 + x²)",
    "d/dx[cot⁻¹(x)] = -1/(1 + x²)",
    "d/dx[sec⁻¹(x)] = 1/(|x|·√(x² - 1))",
    "d/dx[csc⁻¹(x)] = -1/(|x|·√(x² - 1))",
    "d/dx[sin⁻¹(3x)] = 3/√(1 - 9x²)",
    "d/dx[cos⁻¹(4x)] = -4/√(1 - 16x²)",
    "d/dx[tan⁻¹(x²)] = 2x/(1 + x⁴)",
    "d/dx[sin⁻¹(x³)] = 3x²/√(1 - x⁶)",
    "sin⁻¹(x) is arcsin, not 1/sin(x)",
    "Don't forget the negative sign for cos⁻¹ and cot⁻¹",
    "Don't forget the Chain Rule",
    "sin⁻¹ → +, cos⁻¹ → -",
    "tan⁻¹ → +, cot⁻¹ → -",
    "sec⁻¹ → +, csc⁻¹ → -",
  ],
};

export default topic;