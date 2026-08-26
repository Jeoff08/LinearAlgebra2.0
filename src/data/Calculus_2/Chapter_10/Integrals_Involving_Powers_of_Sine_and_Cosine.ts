// filename: IntegralsInvolvingPowersOfSineAndCosine.ts

const topic = {
  id: "integrals-involving-powers-of-sine-and-cosine",
  title: "Integrals Involving Powers of Sine and Cosine",
  summary:
    "A comprehensive guide to evaluating integrals of the form ∫ sinᵐ(x) cosⁿ(x) dx, with strategies for odd and even powers, power-reduction identities, and substitution methods.",
  details: `
This topic deals with integrals containing powers of sin x and cos x, such as:

  ∫ sinᵐ x cosⁿ x dx

where m and n are positive integers.

Examples include:

  ∫ sin³ x cos² x dx
  ∫ sin⁴ x cos³ x dx
  ∫ sin² x cos² x dx

The main idea is that the method depends on whether the powers of sine and cosine are odd or even.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. IMPORTANT TRIGONOMETRIC IDENTITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before solving these integrals, remember the following identities:

Pythagorean Identity

  sin² x + cos² x = 1

From this identity:

  sin² x = 1 - cos² x

and:

  cos² x = 1 - sin² x

These are useful when one function has an even power and we want to rewrite it using the other trigonometric function.

Power-Reduction Identities

When both powers are even, these identities are especially useful:

  sin² x = (1 - cos(2x))/2
  cos² x = (1 + cos(2x))/2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For integrals of the form:

  ∫ sinᵐ x cosⁿ x dx

look at the powers m and n.

There are three main cases:

  Powers                    Strategy
  ──────────────────────────────────────────────────
  Sine power is odd         Save one sin x, convert remaining sin² x
  Cosine power is odd       Save one cos x, convert remaining cos² x
  Both powers are even      Use power-reduction identities

Let's study each case carefully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. CASE 1: THE POWER OF SINE IS ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

  ∫ sin³ x cos² x dx

The power of sine is 3, which is odd.

Step 1: Save One Sine

Rewrite:

  sin³ x = sin² x · sin x

So:

  ∫ sin³ x cos² x dx = ∫ sin² x cos² x · sin x dx

Step 2: Convert sin² x

Using:

  sin² x = 1 - cos² x

we get:

  ∫ (1 - cos² x) cos² x · sin x dx

Step 3: Substitute

Let:

  u = cos x

Then:

  du = -sin x dx

So:

  -∫ (1 - u²) u² du

Expand:

  -∫ (u² - u⁴) du

Integrate:

  -(u³/3 - u⁵/5) + C

Substitute back:

  -cos³ x/3 + cos⁵ x/5 + C

Important Rule

When the power of sine is odd:

  Save one sin x.
  Convert the remaining sin² x into 1 - cos² x.
  Use u = cos x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CASE 2: THE POWER OF COSINE IS ODD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ sin² x cos³ x dx

The power of cosine is 3, which is odd.

Step 1: Save One Cosine

Rewrite:

  cos³ x = cos² x · cos x

Therefore:

  ∫ sin² x cos² x · cos x dx

Step 2: Convert cos² x

Using:

  cos² x = 1 - sin² x

we get:

  ∫ sin² x (1 - sin² x) cos x dx

Step 3: Substitute

Let:

  u = sin x

Then:

  du = cos x dx

The integral becomes:

  ∫ u² (1 - u²) du

Expand:

  ∫ (u² - u⁴) du

Integrate:

  u³/3 - u⁵/5 + C

Substitute back:

  sin³ x/3 - sin⁵ x/5 + C

Important Rule

When the power of cosine is odd:

  Save one cos x.
  Convert the remaining cos² x into 1 - sin² x.
  Use u = sin x.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. CASE 3: BOTH POWERS ARE EVEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

  ∫ sin² x cos² x dx

Both powers are even, so we cannot simply save one sine or cosine and perform an easy substitution.

Instead, we use the power-reduction identities.

  sin² x = (1 - cos 2x)/2
  cos² x = (1 + cos 2x)/2

Substitute:

  sin² x cos² x = ((1 - cos 2x)/2)((1 + cos 2x)/2)

Using:

  (a - b)(a + b) = a² - b²

we get:

  (1 - cos² 2x)/4

Using:

  1 - cos²(2x) = sin²(2x)

we obtain:

  sin²(2x)/4

Now use the power-reduction identity again:

  sin²(2x) = (1 - cos 4x)/2

Therefore:

  sin² x cos² x = (1 - cos 4x)/8

Now integrate:

  ∫ sin² x cos² x dx = ∫ (1 - cos 4x)/8 dx

Separate:

  (1/8)∫ dx - (1/8)∫ cos 4x dx

Therefore:

  x/8 - sin 4x/32 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. A FASTER IDENTITY FOR sin² x cos² x
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A useful shortcut is:

  sin x cos x = (1/2) sin 2x

Therefore:

  sin² x cos² x = (1/4) sin² 2x

Then use:

  sin² 2x = (1 - cos 4x)/2

So:

  sin² x cos² x = (1/8)(1 - cos 4x)

Thus:

  ∫ sin² x cos² x dx = x/8 - sin 4x/32 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: HIGHER ODD POWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ sin⁵ x cos² x dx

Since the sine power 5 is odd, save one sine:

  sin⁵ x = sin⁴ x · sin x

Rewrite:

  ∫ sin⁴ x cos² x · sin x dx

Now:

  sin⁴ x = (sin² x)²

Using:

  sin² x = 1 - cos² x

we get:

  ∫ (1 - cos² x)² cos² x · sin x dx

Let:

  u = cos x

Then:

  du = -sin x dx

The integral becomes:

  -∫ (1 - u²)² u² du

Expand:

  (1 - u²)² = 1 - 2u² + u⁴

Multiply by u²:

  u² - 2u⁴ + u⁶

Therefore:

  -∫ (u² - 2u⁴ + u⁶) du

Integrate:

  -(u³/3 - 2u⁵/5 + u⁷/7) + C

Substitute back:

  -cos³ x/3 + 2cos⁵ x/5 - cos⁷ x/7 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: HIGHER ODD POWER OF COSINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluate:

  ∫ sin⁴ x cos³ x dx

The cosine power 3 is odd.

Save one cosine:

  cos³ x = cos² x · cos x

Rewrite:

  ∫ sin⁴ x cos² x · cos x dx

Use:

  cos² x = 1 - sin² x

Then:

  ∫ sin⁴ x (1 - sin² x) cos x dx

Let:

  u = sin x

Then:

  du = cos x dx

The integral becomes:

  ∫ u⁴ (1 - u²) du

Expand:

  ∫ (u⁴ - u⁶) du

Integrate:

  u⁵/5 - u⁷/7 + C

Substitute back:

  sin⁵ x/5 - sin⁷ x/7 + C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. WHAT IF BOTH POWERS ARE ODD?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

  ∫ sin³ x cos⁵ x dx

Both powers are odd.

You can choose either:

  Save one sin x, or
  Save one cos x

Usually, choose the method that makes the algebra easier.

For example, save one sine:

  sin³ x = sin² x · sin x

Then convert:

  sin² x = 1 - cos² x

This leaves:

  u = cos x

and the remaining expression becomes a polynomial in u.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see:

  ∫ sinᵐ x cosⁿ x dx

use this guide:

Is the sine power odd?

  Yes:
    Save one sin x
    Convert the rest using: sin² x = 1 - cos² x
    Then: u = cos x

Is the cosine power odd?

  Yes:
    Save one cos x
    Convert the rest using: cos² x = 1 - sin² x
    Then: u = sin x

Are both powers even?

  Use:
    sin² x = (1 - cos 2x)/2
  and:
    cos² x = (1 + cos 2x)/2
  Then simplify and integrate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. SUMMARY TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Situation                    What to Do
  ──────────────────────────────────────────────────────────────
  sinᵐ x, m is odd             Save one sin x, convert the rest
  cosⁿ x, n is odd             Save one cos x, convert the rest
  Both powers are even         Use power-reduction identities
  Both powers are odd          Usually save one factor from either function
  After substitution           Integrate as a polynomial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. KEY CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most important skill in these problems is recognizing the powers.

Before doing anything, look at the exponents of sine and cosine:

  Odd power → save one factor and substitute
  Both even → use power-reduction identities

Once the trigonometric expression is rewritten correctly, the difficult-looking integral usually becomes an ordinary polynomial integral that you already know how to solve.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. KEY FORMULAS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Pythagorean Identity:
    sin² x + cos² x = 1

  Power-Reduction Identities:
    sin² x = (1 - cos 2x)/2
    cos² x = (1 + cos 2x)/2

  Double-Angle Identity:
    sin x cos x = (1/2) sin 2x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For integrals of the form ∫ sinᵐ x cosⁿ x dx:

  • If sine power is odd: save one sin x, convert sin² x to 1 - cos² x, use u = cos x
  • If cosine power is odd: save one cos x, convert cos² x to 1 - sin² x, use u = sin x
  • If both powers are even: use power-reduction identities to simplify

After the appropriate substitution, the integral becomes a simple polynomial that can be integrated term by term.

The key is recognizing which case you have and applying the correct strategy.
  `,
  examples: [
    "∫ sin³ x cos² x dx = -cos³ x/3 + cos⁵ x/5 + C",
    "∫ sin² x cos³ x dx = sin³ x/3 - sin⁵ x/5 + C",
    "∫ sin² x cos² x dx = x/8 - sin 4x/32 + C",
    "∫ sin⁵ x cos² x dx = -cos³ x/3 + 2cos⁵ x/5 - cos⁷ x/7 + C",
    "∫ sin⁴ x cos³ x dx = sin⁵ x/5 - sin⁷ x/7 + C",
    "∫ sin³ x cos⁵ x dx (both odd) → save one sine, let u = cos x",
  ],
};

export default topic;