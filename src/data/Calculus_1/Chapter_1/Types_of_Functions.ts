// filename: types-of-functions.ts

const topic = {
  id: "types-of-functions",
  title: "Types of Functions",
  summary:
    "Different classifications of functions based on their equations, behavior, graphs, and relationships, including linear, quadratic, polynomial, rational, exponential, logarithmic, trigonometric, and piecewise functions.",
  details: `
Functions can be classified into different types based on their equations, behavior, graphs, and relationships between inputs and outputs. Understanding the different types of functions is important because functions are used throughout Algebra, Pre-Calculus, and Calculus. A function describes a relationship in which every input has exactly one output. However, different functions behave differently. Some produce straight lines, some produce curves, some grow rapidly, and others may have restrictions or special behaviors. For example, f(x) = 2x + 1 is a linear function, while f(x) = x² is a quadratic function. Their equations look different, and their graphs also have different shapes. Learning the different types of functions helps us recognize how a function behaves even before graphing it. This knowledge is essential for selecting appropriate mathematical tools and for understanding the underlying patterns in data, physics, economics, and many other fields.

"image": "src/assets/110.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CONSTANT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A constant function always produces the same output regardless of the input. Its general form is f(x) = c, where c is a fixed real number. This means that no matter what value we substitute for x, the function returns the same constant value. For example, f(x) = 5 gives f(1) = 5, f(10) = 5, and f(-3) = 5. The graph of a constant function is a horizontal line at height c, indicating that there is no change in the output as the input varies. Constant functions are the simplest type of function, and they are useful for modelling situations where a quantity remains fixed, such as a constant speed, a fixed tax rate, or a steady temperature. In calculus, the derivative of a constant function is zero, reflecting the fact that there is no rate of change.

A constant function always produces the same output regardless of the input.

The general form is:
  f(x) = c

where c is a constant.

Example:
  f(x) = 5

No matter what value we substitute for x:
  f(1) = 5
  f(10) = 5
  f(-3) = 5

The output never changes.

The graph of a constant function is a horizontal line.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. LINEAR FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A linear function is one of the most common and important types of functions. It has the general form f(x) = mx + b, where m is the slope and b is the y-intercept. The slope m measures the rate of change of the function: for every unit increase in x, the output changes by m. If m is positive, the line rises from left to right; if negative, it falls; if m = 0, the line is horizontal. The y-intercept b gives the point where the line crosses the y‑axis, i.e., (0, b). Linear functions are used to model relationships with a constant rate of change, such as distance as a function of time at constant speed, or cost as a function of quantity at a fixed price per unit. Their graphs are straight lines, and they are the simplest type of function to analyse. In calculus, linear functions are the foundation for understanding derivatives, as the derivative of a linear function is the constant slope m.

A linear function has the general form:
  f(x) = mx + b

where:
  m is the slope.
  b is the y-intercept.

Example:
  f(x) = 2x + 3

The graph is a straight line.

The slope is:
  m = 2

The y-intercept is:
  b = 3

Linear functions have a constant rate of change.

"image": "src/assets/66.png",

For every increase of 1 in x, the output changes by the same amount.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. QUADRATIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A quadratic function contains an x² term and has the general form f(x) = ax² + bx + c, with a ≠ 0. Its graph is a U‑shaped curve called a parabola. The sign of a determines the direction of the opening: if a > 0, the parabola opens upward and has a minimum point; if a < 0, it opens downward and has a maximum point. The vertex of the parabola represents the turning point, and the axis of symmetry is a vertical line through the vertex. Quadratic functions are used to model a variety of phenomena, including projectile motion, areas of rectangles, and profit maximization. In calculus, their derivatives are linear functions, and they are often studied for their vertex, intercepts, and concavity. Understanding the properties of quadratics is essential for optimisation problems.

A quadratic function contains an x² term.

The general form is:
  f(x) = ax² + bx + c

where:
  a ≠ 0

Example:
  f(x) = x² - 4x + 3

The graph of a quadratic function is called a parabola.

If a > 0, the parabola opens upward.
If a < 0, the parabola opens downward.

Quadratic functions are important because they can have:
  • Maximum or minimum points
  • x-intercepts
  • A vertex
  • An axis of symmetry

"image": "src/assets/67.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. CUBIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A cubic function contains an x³ term and has the general form f(x) = ax³ + bx² + cx + d, with a ≠ 0. Its graph typically has an S‑shape, with one or two turning points, and it extends infinitely upward in one direction and downward in the other. Unlike quadratics, cubics can cross the x‑axis up to three times. They are useful for modelling certain types of growth, such as population growth with carrying capacity, and for representing more complex relationships that are not symmetric. In calculus, cubic functions are used to illustrate concepts like inflection points and changes in concavity. The derivative of a cubic is a quadratic, which can help locate local extrema. Recognising a cubic function helps predict its behaviour and apply appropriate calculus techniques, such as finding roots or analysing curvature.

A cubic function contains an x³ term.

The general form is:
  f(x) = ax³ + bx² + cx + d

where:
  a ≠ 0

Example:
  f(x) = x³

The graph usually has a curved shape that can move from negative values to positive values.

Cubic functions can have turning points and changing slopes.

Unlike quadratic functions, cubic functions usually extend infinitely upward in one direction and downward in the other direction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. POLYNOMIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A polynomial function is made up of terms involving powers of x with nonnegative integer exponents. Its general form is f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where the coefficients are real numbers and n is a nonnegative integer. Polynomials include linear, quadratic, cubic, and higher‑degree functions. They are continuous and smooth, meaning they have no breaks or sharp corners. Polynomial functions are extremely versatile and are used to approximate many real‑world phenomena through curve fitting. In calculus, polynomials are easy to differentiate and integrate using the power rule. They also play a central role in Taylor series, which represent more complex functions as infinite polynomials. Understanding the degree and leading coefficient of a polynomial gives insight into its end behaviour and the number of possible roots.

A polynomial function is a function made up of terms involving powers of x with nonnegative integer exponents.

The general form is:
  f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

Examples include:
  Linear Polynomial: f(x) = 2x + 1
  Quadratic Polynomial: f(x) = x² + 3x + 2
  Cubic Polynomial: f(x) = x³ - 2x

"image": "src/assets/68.png",

Polynomial functions are very important because many mathematical models can be represented or approximated using polynomials.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ABSOLUTE VALUE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An absolute value function contains an absolute value expression. The basic form is f(x) = |x|, which represents the distance of x from zero on the number line. Its graph is a V‑shape with the vertex at the origin. The function is piecewise: for x ≥ 0, f(x) = x; for x < 0, f(x) = -x. This gives it a sharp corner at x = 0, where the function is continuous but not differentiable. Absolute value functions are used in real‑world contexts where only the magnitude matters, such as error tolerance, distance, and deviation. In calculus, they are interesting because they highlight the distinction between continuity and differentiability. They also appear in optimisation problems where absolute differences must be minimised. Recognising the V‑shape helps in graphing and in solving equations involving absolute values.

An absolute value function contains an absolute value expression.

The basic form is:
  f(x) = |x|

The graph forms a V-shape.

The absolute value represents the distance of a number from zero.

For example:
  |3| = 3
and:
  |-3| = 3

Therefore:
  f(-3) = |-3| = 3

The graph is symmetrical about the y-axis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. SQUARE ROOT FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A square root function contains a square root of the input variable. The basic form is f(x) = √x, defined only for x ≥ 0 in the real number system because the square root of a negative number is not real. Its graph starts at the origin (0, 0) and gradually increases, but at a decreasing rate, forming a curve that gets flatter as x grows. The range is also y ≥ 0. Square root functions are used to model relationships where a quantity is proportional to the square root of another, such as the period of a pendulum, the speed of a wave, or the area of a circle as a function of its radius. In calculus, the derivative of √x is 1/(2√x), which is useful for finding slopes and rates of change. Understanding the domain and the shape of the graph is crucial for solving equations and inequalities involving square roots.

A square root function contains a square root.

The basic form is:
  f(x) = √x

For real numbers:
  x ≥ 0

because the square root of a negative number is not a real number.

The graph begins at:
  (0, 0)

and moves toward the right.

The range is:
  y ≥ 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. RATIONAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A rational function is a function written as the ratio of two polynomials, f(x) = P(x)/Q(x), where Q(x) ≠ 0. Since division by zero is undefined, the domain excludes values that make the denominator zero. These excluded values often correspond to vertical asymptotes, where the graph approaches infinity. Rational functions may also have horizontal or oblique asymptotes, depending on the degrees of the numerator and denominator. They can model a wide range of real‑world situations, such as average cost, speed as a function of time, or the concentration of a substance in a mixture. In calculus, rational functions are studied for their limits, asymptotes, and integration techniques like partial fractions. Their graphs often consist of separate branches, and they exhibit interesting behaviour near asymptotes. Recognising a rational function helps in identifying restrictions and predicting its overall shape.

A rational function is a function written as a ratio of two polynomials.

The general form is:
  f(x) = P(x)/Q(x)

where:
  Q(x) ≠ 0

Example:
  f(x) = 1/x

The function is undefined when:
  x = 0

The graph has two separate branches.

Rational functions may have:
  • Vertical asymptotes
  • Horizontal asymptotes
  • Holes
  • Domain restrictions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. EXPONENTIAL FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An exponential function has the variable in the exponent, with the general form f(x) = aˣ, where a > 0 and a ≠ 1. These functions grow or decay at a constant percentage rate. When a > 1, the function increases rapidly; when 0 < a < 1, it decreases (exponential decay). The graph passes through (0, 1) because a⁰ = 1, and it never touches the x‑axis (it has a horizontal asymptote at y = 0). Exponential functions are ubiquitous in modelling growth (populations, investments, viral spread) and decay (radioactive decay, cooling, depreciation). In calculus, the exponential function eˣ (where e is Euler's number) is special because its derivative is itself, making it fundamental in differential equations. Understanding exponential functions is essential for interpreting natural phenomena and for mastering logarithmic functions, which are their inverses.

An exponential function has the variable in the exponent.

The general form is:
  f(x) = aˣ

where:
  a > 0
and:
  a ≠ 1

Example:
  f(x) = 2ˣ

The graph increases rapidly as x increases.

Another example is:
  f(x) = (1/2)ˣ

This represents exponential decay because the output decreases as x increases.

Exponential functions are commonly used to model:
  • Population growth
  • Compound interest
  • Radioactive decay
  • Bacterial growth

"image": "src/assets/69.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. LOGARITHMIC FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A logarithmic function is the inverse of an exponential function. Its general form is f(x) = logₐ(x), where a > 0 and a ≠ 1. The domain is x > 0, because logarithms of zero or negative numbers are undefined. The graph passes through (1, 0) since logₐ(1) = 0, and it has a vertical asymptote at x = 0. Logarithmic functions grow very slowly compared to polynomials or exponentials, making them useful for compressing wide‑ranging scales, such as in the Richter scale for earthquakes, decibels for sound, or pH for acidity. In calculus, the natural logarithm ln(x) (base e) is particularly important because its derivative is 1/x, and it appears in integration and differential equations. Recognising logarithmic functions helps in solving equations involving exponentials and in understanding the behaviour of inverse relationships.

A logarithmic function is the inverse of an exponential function.

The general form is:
  f(x) = logₐ(x)

where:
  a > 0
and:
  a ≠ 1

Example:
  f(x) = log₂(x)

The domain is:
  x > 0

because logarithms of zero or negative real numbers are undefined.

Logarithmic functions are important when dealing with:
  • Large numbers
  • Exponential growth
  • Sound intensity
  • Earthquake magnitude
  • Scientific measurements

"image": "src/assets/70.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. TRIGONOMETRIC FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigonometric functions describe relationships involving angles and are periodic, meaning they repeat their values at regular intervals. The most common are sine, cosine, and tangent, written as sin(x), cos(x), and tan(x). Their graphs exhibit wave‑like patterns: sine and cosine oscillate between -1 and 1, while tangent has vertical asymptotes and repeats every π radians. These functions are fundamental in describing periodic phenomena such as sound waves, light waves, tides, and alternating current. In calculus, the derivatives of sine and cosine are cosine and negative sine, respectively, making them essential in differential equations that model harmonic motion. Understanding trigonometric functions is crucial for physics, engineering, and signal processing. Their periodic nature and symmetries (even/odd) also provide a rich area for exploring function properties.

Trigonometric functions describe relationships involving angles.

The most common trigonometric functions are:
  sin(x), cos(x), tan(x)

These functions have repeating or periodic graphs.

Example:
  f(x) = sin(x)

The graph repeatedly moves up and down in a wave-like pattern.

Trigonometric functions are important in:
  • Physics
  • Engineering
  • Waves
  • Sound
  • Circular motion

"image": "src/assets/71.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. PIECEWISE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A piecewise function is defined by different rules for different intervals of the input variable. It is written with a brace that lists each rule and the corresponding condition on x. For example, f(x) = { x + 1, if x < 0; x², if x ≥ 0 } means that for negative x we use x + 1, and for non‑negative x we use x². Piecewise functions are used to model situations where the behaviour changes based on the input, such as tax brackets, shipping costs, electricity pricing, or discounts based on quantity. They can combine any of the other function types, and their graphs may have jumps, breaks, or different shapes in different regions. In calculus, piecewise functions are important for studying limits, continuity, and differentiability at the boundary points. Recognising a piecewise function helps in correctly evaluating it and in applying the appropriate rules for each interval.

A piecewise function uses different rules for different values of x.

For example:
  f(x) = { x + 1, x < 0; x², x ≥ 0 }

This means:
  • Use x + 1 when x < 0.
  • Use x² when x ≥ 0.

Piecewise functions are useful for representing situations where the rule changes depending on the input.

For example:
  • Tax rates
  • Shipping costs
  • Electricity bills
  • Pricing systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. EVEN AND ODD FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Functions can also be classified based on their symmetry. An even function satisfies f(-x) = f(x) for all x in its domain, meaning its graph is symmetric about the y‑axis. The classic example is f(x) = x², since (-x)² = x². Even functions often have only even powers of x. An odd function satisfies f(-x) = -f(x), meaning its graph is symmetric about the origin—rotating the graph 180° about the origin maps it onto itself. An example is f(x) = x³, since (-x)³ = -x³. Many functions are neither even nor odd. Symmetry is useful for simplifying integrals and for understanding the behaviour of functions. In calculus, the integrals of odd functions over symmetric intervals are zero, which is a valuable property. Recognising even and odd functions can also help in graphing and in solving equations.

Functions can also be classified based on symmetry.

Even Function:
  A function is even if:
    f(-x) = f(x)
  Its graph is symmetrical about the y-axis.

Example:
  f(x) = x²
  because:
    f(-x) = (-x)² = x²

Odd Function:
  A function is odd if:
    f(-x) = -f(x)
  Its graph is symmetrical about the origin.

Example:
  f(x) = x³
  because:
    f(-x) = (-x)³ = -x³
  Therefore:
    f(-x) = -f(x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

14. ONE-TO-ONE FUNCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A one-to-one function is a function where different inputs always produce different outputs; that is, if f(a) = f(b), then a = b. Graphically, this means that every horizontal line intersects the graph at most once (the Horizontal Line Test). One-to-one functions are important because they have inverse functions, which reverse the mapping. For example, f(x) = 2x + 1 is one-to-one, and its inverse is f⁻¹(x) = (x - 1)/2. Not all functions are one-to-one; for instance, f(x) = x² is not one-to-one because f(2) = f(-2) = 4. In calculus, one-to-one functions are essential when solving equations and when studying inverse functions, derivatives of inverse functions, and integration by substitution. Recognising one-to-one behaviour helps in determining whether an inverse exists and in solving problems involving reversibility.

A one-to-one function is a function where different inputs produce different outputs.

For example:
  f(x) = 2x + 1

If two outputs are equal:
  f(a) = f(b)

then:
  a = b

The graph of a one-to-one function passes the Horizontal Line Test.

This means that every horizontal line intersects the graph at most once.

One-to-one functions are important because they can have inverse functions.

"image": "src/assets/72.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

15. IMPORTANT GRAPH CHARACTERISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different types of functions have different graph shapes, which provide visual cues to their behaviour. For instance, constant functions are horizontal lines; linear functions are straight lines with a constant slope; quadratics produce parabolas that open up or down; cubics show an S‑shape; absolute value functions create V‑shapes; square root functions start at the origin and gradually rise; rational functions have separate branches with asymptotes; exponentials grow or decay rapidly; logarithms increase slowly; and trigonometric functions oscillate in waves. These characteristic shapes help us quickly identify the type of function from its graph and vice versa. In calculus, the shape of a graph reveals information about its derivative (slope) and integral (area), making it easier to analyse. Memorising these typical graphs is a valuable skill for problem solving and for understanding function properties.

"image": "src/assets/74.png",

Each type of function has its own characteristics, domain, range, and behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

16. WHY TYPES OF FUNCTIONS ARE IMPORTANT IN CALCULUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different functions behave differently, which means they require different methods when studying Calculus. For polynomial functions, we often use the Power Rule for differentiation. Exponential functions like eˣ have the remarkable property that they are their own derivative. Logarithmic functions have derivatives of the form 1/x, which connects to integration. Trigonometric functions have cyclic derivatives (sine ↔ cosine). Rational functions may require the quotient rule or partial fractions. Piecewise functions require careful handling at boundaries. Recognising the type of function allows us to choose the appropriate differentiation or integration technique quickly and correctly. Moreover, understanding the behaviour of functions—growth rates, asymptotes, periodicities, and symmetries—helps in interpreting mathematical models. Thus, mastering the various types of functions is not just a classification exercise; it is a practical necessity for success in calculus and its applications.

Polynomial Functions:
  Often use the Power Rule:
    d/dx (xⁿ) = nxⁿ⁻¹

"image": "src/assets/75.png",

Exponential Functions:
  For f(x) = eˣ, the derivative is:
    f'(x) = eˣ

"image": "src/assets/76.png",

Logarithmic Functions:
  For f(x) = ln(x), the derivative is:
    f'(x) = 1/x

"image": "src/assets/77.png",

Trigonometric Functions:
  For f(x) = sin(x), the derivative is:
    f'(x) = cos(x)

"image": "src/assets/78.png",

Understanding the type of function helps us determine its behavior and which mathematical rules can be used to analyze it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

17. QUICK REFERENCE TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"image": "src/assets/79.png",

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

18. THE BIG IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

There are many different types of functions, and each has its own equation, graph, and behavior. Some of the most important types include constant, linear, quadratic, cubic, polynomial, absolute value, square root, rational, exponential, logarithmic, trigonometric, piecewise, even, odd, and one‑to‑one functions. Recognising these types is essential because they determine the function's domain, range, symmetry, rate of change, and overall shape. In calculus, different function types require different differentiation and integration rules, and understanding their properties allows us to model real‑world phenomena accurately. The most important idea to remember is that different types of functions have different rules, behaviours, and graph shapes. Learning how to recognise them is an important foundation for Algebra and Calculus because it helps us predict how a function behaves, understand its graph, and apply the correct mathematical methods when solving problems.

The most important idea to remember is:

  Different types of functions have different rules, behaviors, and graph shapes.

Learning how to recognize different types of functions is an important foundation for Algebra and Calculus because it helps us predict how a function behaves, understand its graph, and apply the correct mathematical methods when solving problems.
  `,
  examples: [
    "Constant: f(x) = 5 → horizontal line",
    "Linear: f(x) = 2x + 3 → straight line, slope 2, y-intercept 3",
    "Quadratic: f(x) = x² → parabola, vertex at (0,0)",
    "Cubic: f(x) = x³ → S-shaped curve",
    "Absolute Value: f(x) = |x| → V-shape",
    "Square Root: f(x) = √x → starts at (0,0)",
    "Exponential: f(x) = 2ˣ → rapid growth",
  ],
};

export default topic;