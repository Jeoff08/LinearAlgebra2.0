// filename: volume-using-known-cross-sections.ts

const topic = {
  id: "volume-using-known-cross-sections",
  title: "Volume Using Known Cross Sections",
  summary:
    "A method in integral calculus used to find the volume of a three-dimensional solid when the shape of its cross sections is known, using the formula V = ∫ A(x) dx.",
  details: `
Volume Using Known Cross Sections is a method in integral calculus used to find the volume of a three-dimensional solid when its cross-sectional shape is known.

Unlike the Disk, Washer, and Shell Methods, this method does not necessarily involve rotating a region. Instead, we are given a solid and information about the shape of its cross sections.

The main idea is:

  Divide the solid into many very thin slices, determine the area of each 
  cross section, and add all the tiny volumes together using integration.

The fundamental formula is:
  V = ∫ₐᵇ A(x) dx

where:
  V = Volume of the solid
  A(x) = Area of the cross section at position x
  a and b = Limits of the solid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. WHAT IS A CROSS SECTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A cross section is the two-dimensional shape produced when a three-dimensional object is cut by a plane.

For example, imagine cutting a solid object into thin slices.

        Solid Object
    __________________
   /                  \\
  |       │            |
  |       │ Slice      |
  |       │            |
   \\______│___________/

The shape exposed by the cut is called a cross section.

Examples of possible cross-sectional shapes include:
  • Squares
  • Rectangles
  • Triangles
  • Semicircles
  • Circles
  • Equilateral triangles

Each cross section has an area.

If we know the area of every cross section, we can find the volume of the entire solid.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. THE MAIN IDEA BEHIND THE METHOD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine slicing a solid into many very thin pieces.

Each small piece has:
  • Cross-sectional area: A(x)
  • Very small thickness: dx

The approximate volume of one slice is:
  dV = A(x) dx

Adding all the tiny volumes gives:
  V = ∫ₐᵇ A(x) dx

This is the main formula for finding volume using known cross sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. WHY DOES THE FORMULA WORK?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a simple rectangular box:
  V = (Base Area)(Height)

Suppose the cross-sectional area is constant A and the length is L.
Then:
  V = AL

Integration generalizes this idea.

If the cross-sectional area changes as we move along the solid, we cannot simply multiply one area by the total length.

Instead, we divide the solid into tiny pieces:
  ΔV ≈ A(x) Δx

Then:
  V ≈ Σ A(xᵢ) Δx

As the slices become infinitely thin:
  V = lim(n→∞) Σᵢ₌₁ⁿ A(xᵢ) Δx

This becomes:
  V = ∫ₐᵇ A(x) dx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. THE MOST IMPORTANT QUESTION: WHAT IS THE CROSS-SECTIONAL AREA?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The hardest part of these problems is usually finding:
  A(x)

You must identify:
  • The shape of the cross section.
  • The dimensions of that shape.
  • How those dimensions depend on x or y.

Once you find the area formula, the integration is usually straightforward.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. GENERAL FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If cross sections perpendicular to the x-axis have area A(x), then:
  V = ∫ₐᵇ A(x) dx

If cross sections perpendicular to the y-axis have area A(y), then:
  V = ∫꜀ᵈ A(y) dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. COMMON CROSS-SECTIONAL SHAPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A. Square:
  If each cross section is a square with side length s, then:
    A = s²

  If the side length depends on x:
    s = f(x)
  then:
    A(x) = [f(x)]²

B. Rectangle:
  If each cross section is a rectangle:
    A = (length)(width)

  If the dimensions depend on x:
    A(x) = L(x)W(x)

C. Circle:
  If the cross section is a circle with radius r:
    A = πr²

  If the diameter is given instead:
    r = d/2

  Therefore:
    A = π(d/2)²

D. Semicircle:
  The area of a full circle is:
    πr²

  Therefore, the area of a semicircle is:
    A = (1/2)πr²

  If the diameter is d:
    r = d/2

  So:
    A = πd²/8

  This formula is very useful in cross-section problems.

E. Triangle:
  The area of a triangle is:
    A = (1/2)bh

  You must determine how the base and height relate to the given region.

F. Equilateral Triangle:
  If the side length is s, then the area is:
    A = (√3/4)s²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. EXAMPLE: SQUARE CROSS SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the base of a solid is the region under y = x from x = 0 to x = 2.

Suppose cross sections perpendicular to the x-axis are squares.

Find the volume.

Step 1: Find the Side Length
  The vertical distance from y = 0 to y = x is:
    s = x

  Therefore:
    s = x

Step 2: Find the Area of the Square
  The area of a square is:
    A = s²

  Therefore:
    A(x) = x²

Step 3: Set Up the Integral
  V = ∫₀² x² dx

Step 4: Integrate
  V = [x³/3]₀²
  V = 8/3

Therefore:
  V = 8/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. EXAMPLE: EQUILATERAL TRIANGLE CROSS SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the base of a solid is bounded by y = 4 and y = x².

Cross sections perpendicular to the x-axis are equilateral triangles.

Step 1: Find the Interval
  Set x² = 4.
  Therefore: x = ±2

  The limits are: -2 ≤ x ≤ 2

Step 2: Find the Side Length
  The vertical distance between the curves is:
    s = 4 - x²

Step 3: Find the Area of an Equilateral Triangle
  A = (√3/4)s²

  Substitute:
    A(x) = (√3/4)(4 - x²)²

Step 4: Set Up the Integral
  V = ∫₋₂² (√3/4)(4 - x²)² dx

Step 5: Expand
  (4 - x²)² = 16 - 8x² + x⁴

  Therefore:
    V = (√3/4) ∫₋₂² (16 - 8x² + x⁴) dx

Step 6: Integrate
  V = (√3/4)[16x - 8x³/3 + x⁵/5]₋₂²

  Evaluating gives:
    V = 128√3/15

Therefore:
  V = 128√3/15 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXAMPLE: SEMICIRCULAR CROSS SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the base of a solid extends from x = 0 to x = 4, and the diameter of each semicircular cross section is d = x.

Find the volume.

Step 1: Identify the Radius
  Since r = d/2, we have:
    r = x/2

Step 2: Find the Area of the Semicircle
  The area of a semicircle is:
    A = (1/2)πr²

  Substitute:
    A(x) = (1/2)π(x/2)²
    A(x) = πx²/8

Step 3: Set Up the Integral
  V = ∫₀⁴ πx²/8 dx

Step 4: Integrate
  V = (π/8)[x³/3]₀⁴
  V = (π/8)(64/3)

Therefore:
  V = 8π/3 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. EXAMPLE: RECTANGULAR CROSS SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose the base of a solid is under y = x from x = 0 to x = 3.

Cross sections perpendicular to the x-axis are rectangles.

Suppose:
  Width = x
  Height = 2x

Find the volume.

Step 1: Find the Cross-Sectional Area
  The area of a rectangle is:
    A = (width)(height)

  Therefore:
    A(x) = x(2x)
    A(x) = 2x²

Step 2: Set Up the Integral
  V = ∫₀³ 2x² dx

Step 3: Integrate
  V = 2[x³/3]₀³
  V = 2(9)
  V = 18 cubic units

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. PERPENDICULAR VS. PARALLEL CROSS SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problems usually say something like:
  "Cross sections perpendicular to the x-axis are squares."

This means the slices move along the x-axis.

The thickness is dx.

If the problem says:
  "Cross sections perpendicular to the y-axis are squares."

Then dy is usually used.

Important Rule:
  Cross sections perpendicular to the x-axis → dx
  Cross sections perpendicular to the y-axis → dy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. GENERAL PROBLEM-SOLVING STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Understand the Base Region
  Identify the boundaries of the two-dimensional base.
  Ask:
    • What curves form the base?
    • Where do they intersect?
    • What is the interval?

Step 2: Determine the Direction of the Cross Sections
  Does the problem say:
    • Perpendicular to the x-axis?
    • Perpendicular to the y-axis?
  This determines whether to use dx or dy.

Step 3: Find the Important Dimension
  Find the length that defines the cross section.
  For example:
    • Square → side length
    • Circle → radius or diameter
    • Triangle → base and height
  This dimension is often the distance between curves.

Step 4: Write the Area Formula
  Examples:
    • Square: A = s²
    • Rectangle: A = lw
    • Circle: A = πr²
    • Semicircle: A = (1/2)πr²
    • Triangle: A = (1/2)bh
    • Equilateral Triangle: A = (√3/4)s²

Step 5: Express the Area in Terms of One Variable
  You need A(x) or A(y).
  For example: A(x) = (4 - x²)²

Step 6: Set Up the Integral
  V = ∫ₐᵇ A(x) dx
  or:
  V = ∫꜀ᵈ A(y) dy

Step 7: Integrate
  Find the antiderivative and evaluate the limits.

Step 8: Write the Final Answer
  Volume must be expressed in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMMON MISTAKES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Using the Wrong Dimension
  Always identify what the given distance represents.
  For example, if a problem gives the diameter of a semicircle, do not use it directly as the radius.
  Remember: r = d/2

2. Forgetting to Square a Dimension
  Many area formulas involve squares.
  For example: A = s² for a square.

3. Using the Wrong Area Formula
  Make sure the formula matches the cross-sectional shape.
  For example:
    • Square → s²
    • Circle → πr²
    • Triangle → (1/2)bh

4. Forgetting to Express Everything in Terms of One Variable
  Before integrating, the area must depend on only one variable: A(x) or A(y).

5. Confusing Area Units and Volume Units
  Cross-sectional area: units²
  Final volume: units³

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. IMPORTANT FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  General Volume Formula:
    V = ∫ₐᵇ A(x) dx

  Square Cross Section:
    A = s²

  Rectangle Cross Section:
    A = lw

  Circle Cross Section:
    A = πr²

  Semicircle Cross Section:
    A = (1/2)πr²
    If diameter is given: A = πd²/8

  Triangle Cross Section:
    A = (1/2)bh

  Equilateral Triangle:
    A = (√3/4)s²

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. KEY CONCEPTS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • This method finds volume using the known shapes of cross sections.
  • The solid does not need to be formed by rotation.
  • The fundamental formula is: V = ∫ A(x) dx
  • The most important step is finding the correct cross-sectional area.
  • The cross section determines which geometry formula to use.
  • Express the area using one variable before integrating.
  • Cross sections perpendicular to the x-axis usually use dx.
  • Cross sections perpendicular to the y-axis usually use dy.
  • Final answers are always in cubic units.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. SIMPLE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Volume Using Known Cross Sections finds the volume of a solid by slicing it into infinitely many thin pieces with known shapes.

The process is:
  Identify Base Region → Find Cross-Section Shape → Determine Dimensions → Find A(x) → Integrate

The main formula is:
  V = ∫ₐᵇ A(x) dx

The most important idea is:

  Find the area of one cross section first. Once you know A(x), integration 
  adds all the infinitely thin cross sections together to produce the total 
  volume.
  `,
  examples: [
    "Square cross sections under y = x from 0 to 2 → V = ∫₀² x² dx = 8/3",
    "Equilateral triangle cross sections between y=4 and y=x² → V = 128√3/15",
    "Semicircular cross sections with diameter d = x from 0 to 4 → V = 8π/3",
    "Rectangular cross sections: width = x, height = 2x under y=x from 0 to 3 → V = 18",
    "General formula: V = ∫ A(x) dx",
    "Square: A = s², Circle: A = πr², Semicircle: A = (1/2)πr²",
    "Cross sections perpendicular to x-axis → dx, perpendicular to y-axis → dy",
  ],
};

export default topic;