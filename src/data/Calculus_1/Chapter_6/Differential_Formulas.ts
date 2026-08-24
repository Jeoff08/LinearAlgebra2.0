// filename: differential-formulas.ts

const topic = {
  id: "differential-formulas",
  title: "Differential Formulas",
  summary:
    "Rules used to find the differential dy of a function, derived from derivative rules with the relationship dy = f'(x) dx, including power, product, quotient, and chain rules.",
  details: `
Differential formulas are rules used to find the differential dy of a function. They are closely connected to the derivative because the basic relationship is:
  dy = f'(x) dx

If y = f(x), then:
  dy = f'(x) dx

In other words, once you know the derivative of a function, you can obtain its differential simply by multiplying the derivative by dx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DIFFERENTIAL OF A CONSTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = C where C is a constant, then:
  dy/dx = 0

Therefore:
  dy = 0

Example:
  y = 15

Then:
  dy = 0

A constant does not change when x changes, so its differential is zero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. DIFFERENTIAL OF x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = x, then:
  dy/dx = 1

Therefore:
  dy = dx

This is one of the most fundamental differential formulas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. DIFFERENTIAL OF A POWER FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = xⁿ, the Power Rule gives:
  dy/dx = nxⁿ⁻¹

Therefore:
  dy = nxⁿ⁻¹ dx

Example:
  Find the differential of y = x⁵.

  Differentiate:
    dy/dx = 5x⁴

  Thus:
    dy = 5x⁴ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DIFFERENTIAL OF A CONSTANT MULTIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = c f(x), where c is a constant, then:
  dy/dx = c f'(x)

Therefore:
  dy = c f'(x) dx

Example:
  y = 7x³

  Differentiate:
    dy/dx = 21x²

  Thus:
    dy = 21x² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. SUM RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = f(x) + g(x), then:
  dy = df(x) + dg(x)

More simply:
  d(u + v) = du + dv

This means that the differential of a sum is the sum of the differentials.

Example:
  Suppose y = x³ + x².

  Then:
    dy = d(x³) + d(x²)

  Using the Power Rule:
    dy = 3x² dx + 2x dx

  Therefore:
    dy = (3x² + 2x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. DIFFERENCE RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = u - v, the differential is:
  d(u - v) = du - dv

Example:
  y = x⁴ - x²

  Therefore:
    dy = 4x³ dx - 2x dx

  So:
    dy = (4x³ - 2x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. PRODUCT RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose y = uv.

The differential of a product is:
  d(uv) = u dv + v du

This comes from the Product Rule for derivatives.

Example:
  Let y = x² sin x.

  Set u = x² and v = sin x.

  Then:
    du = 2x dx
  and:
    dv = cos x dx

  Using the product differential formula:
    dy = u dv + v du

  Therefore:
    dy = x²(cos x dx) + sin x(2x dx)

  Thus:
    dy = (x² cos x + 2x sin x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. QUOTIENT RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = u/v, the differential formula is:
  d(u/v) = (v du - u dv)/v²

provided v ≠ 0.

Example:
  Let y = x²/(x + 1).

  Set u = x², v = x + 1.

  Then:
    du = 2x dx
  and:
    dv = dx

  Therefore:
    dy = ((x + 1)(2x dx) - x²(dx))/(x + 1)²

  Simplifying:
    dy = (2x(x + 1) - x²)/(x + 1)² dx
    dy = (x² + 2x)/(x + 1)² dx

  Thus:
    dy = (x² + 2x)/(x + 1)² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. CHAIN RULE FOR DIFFERENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most useful properties of differential notation is its relationship with the Chain Rule.

Suppose y = f(u) and u = g(x).

Then:
  dy = (dy/du) du

Since:
  du = (du/dx) dx

we get:
  dy = (dy/du)(du/dx) dx

This is essentially the Chain Rule written using differentials.

Example:
  Let y = (x² + 3)⁴.

  Let u = x² + 3.

  Then y = u⁴.

  Therefore:
    dy = 4u³ du

  Now:
    du = 2x dx

  Substitute:
    dy = 4u³(2x dx)

  Since u = x² + 3, we obtain:
    dy = 8x(x² + 3)³ dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DIFFERENTIAL OF A ROOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Roots can be converted into fractional exponents.

For example:
  y = √x

can be written as:
  y = x^(1/2)

Using the Power Rule:
  dy = (1/2)x^(-1/2) dx

Therefore:
  dy = 1/(2√x) dx

Example:
  Find the differential of y = √(x³).

  Rewrite:
    y = x^(3/2)

  Then:
    dy = (3/2)x^(1/2) dx

  Therefore:
    dy = (3/2)√x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. DIFFERENTIAL OF A RECIPROCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If y = 1/x, rewrite it as y = x⁻¹.

Then:
  dy = -x⁻² dx

Therefore:
  dy = -1/x² dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. DIFFERENTIAL OF EXPONENTIAL FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = eˣ, the derivative is:
  dy/dx = eˣ

Therefore:
  dy = eˣ dx

Example:
  y = 3eˣ

  Then:
    dy = 3eˣ dx

Exponential with a Function:
  If y = eᵘ, then:
    dy = eᵘ du

Example:
  y = e^(x²)

  Then:
    dy = e^(x²) d(x²)

  Since:
    d(x²) = 2x dx

  we get:
    dy = 2x e^(x²) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. DIFFERENTIAL OF THE NATURAL LOGARITHM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = ln x, we know:
  dy/dx = 1/x

Therefore:
  dy = dx/x

Natural Logarithm of a Function:
  For y = ln u, we have:
    dy = du/u

Example:
  y = ln(x² + 1)

  Let u = x² + 1.

  Then:
    du = 2x dx

  Therefore:
    dy = du/u

  Thus:
    dy = 2x/(x² + 1) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. DIFFERENTIAL OF SINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = sin x, the derivative is:
  dy/dx = cos x

Therefore:
  dy = cos x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. DIFFERENTIAL OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = cos x, the derivative is:
  dy/dx = -sin x

Therefore:
  dy = -sin x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. DIFFERENTIAL OF TANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = tan x, the derivative is:
  dy/dx = sec² x

Therefore:
  dy = sec² x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. DIFFERENTIAL OF COTANGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = cot x, the derivative is:
  dy/dx = -csc² x

Therefore:
  dy = -csc² x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. DIFFERENTIAL OF SECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = sec x, the derivative is:
  dy/dx = sec x tan x

Therefore:
  dy = sec x tan x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

19. DIFFERENTIAL OF COSECANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For y = csc x, the derivative is:
  dy/dx = -csc x cot x

Therefore:
  dy = -csc x cot x dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20. DIFFERENTIAL OF INVERSE TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several important inverse trigonometric differential formulas are:

Arcsine:
  y = sin⁻¹ x
  gives:
    dy = dx/√(1 - x²)

Arccosine:
  y = cos⁻¹ x
  gives:
    dy = -dx/√(1 - x²)

Arctangent:
  y = tan⁻¹ x
  gives:
    dy = dx/(1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21. A GENERAL DIFFERENTIAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A very useful way to remember differential formulas is:
  d[f(x)] = f'(x) dx

This means that the differential operator d acts on a function in the same way that differentiation does, except that the result is multiplied by dx.

For example:
  d(x³) = 3x² dx
  d(sin x) = cos x dx
  d(eˣ) = eˣ dx
  d(ln x) = dx/x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22. IMPORTANT DIFFERENTIAL FORMULAS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Function          Differential
  ──────────────────────────────────────────────────────
  y = C             dy = 0
  y = x             dy = dx
  y = xⁿ            dy = nxⁿ⁻¹ dx
  y = c u           dy = c du
  y = u + v         dy = du + dv
  y = u - v         dy = du - dv
  y = u v           dy = u dv + v du
  y = u/v           dy = (v du - u dv)/v²
  y = eˣ            dy = eˣ dx
  y = ln x          dy = dx/x
  y = sin x         dy = cos x dx
  y = cos x         dy = -sin x dx
  y = tan x         dy = sec² x dx
  y = cot x         dy = -csc² x dx
  y = sec x         dy = sec x tan x dx
  y = csc x         dy = -csc x cot x dx
  y = sin⁻¹ x       dy = dx/√(1 - x²)
  y = cos⁻¹ x       dy = -dx/√(1 - x²)
  y = tan⁻¹ x       dy = dx/(1 + x²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23. THE MOST IMPORTANT RULES TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For most Calculus 1 problems, these are the formulas you should know first:

  Basic rule:
    dy = f'(x) dx

  Power rule:
    d(xⁿ) = nxⁿ⁻¹ dx

  Sum rule:
    d(u + v) = du + dv

  Difference rule:
    d(u - v) = du - dv

  Product rule:
    d(uv) = u dv + v du

  Quotient rule:
    d(u/v) = (v du - u dv)/v²

  Chain rule:
    dy = (dy/du) du

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24. DIFFERENTIAL VS. DERIVATIVE — THE BIG PICTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It is useful to organize the ideas this way:

  dy/dx = f'(x)

tells you the instantaneous rate of change.

Then multiply by a small change dx:

  dy = (dy/dx) dx

to obtain the corresponding differential change.

And for a sufficiently small change:
  dy ≈ Δy

which allows us to use differentials for approximations and error estimation.

In simple terms:

  A derivative tells you how fast something is changing, while a differential 
  uses that rate of change to estimate how much the quantity changes.

That distinction is the key idea behind the entire topic of Differential Formulas.
  `,
  examples: [
    "d(x⁵) = 5x⁴ dx",
    "d(7x³) = 21x² dx",
    "d(x³ + x²) = (3x² + 2x) dx",
    "d(x⁴ - x²) = (4x³ - 2x) dx",
    "d(x² sin x) = (x² cos x + 2x sin x) dx",
    "d(x²/(x+1)) = (x²+2x)/(x+1)² dx",
    "d((x²+3)⁴) = 8x(x²+3)³ dx",
  ],
};

export default topic;