import React, { useMemo, useState } from "react";
import {
  Calculator,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Info,
} from "lucide-react";

/* =========================================================
   EXACT FRACTION
========================================================= */

interface Fraction {
  n: number;
  d: number;
}

interface Term {
  coefficient: Fraction;
  exponent: number;
  original: string;
}

interface ResultTerm {
  coefficient: Fraction;
  exponent: number;
}

interface SolutionStep {
  original: string;
  coefficient: Fraction;
  exponent: number;
  resultCoefficient: Fraction;
  resultExponent: number;
  explanation: string;
}

/* =========================================================
   FRACTION UTILITIES
========================================================= */

const gcd = (a: number, b: number): number => {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));

  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return a || 1;
};

const makeFraction = (
  n: number,
  d: number = 1
): Fraction => {
  if (d === 0) {
    throw new Error("Division by zero.");
  }

  if (n === 0) {
    return { n: 0, d: 1 };
  }

  if (d < 0) {
    n = -n;
    d = -d;
  }

  const g = gcd(n, d);

  return {
    n: n / g,
    d: d / g,
  };
};

const addFraction = (
  a: Fraction,
  b: Fraction
): Fraction => {
  return makeFraction(
    a.n * b.d + b.n * a.d,
    a.d * b.d
  );
};

const subtractFraction = (
  a: Fraction,
  b: Fraction
): Fraction => {
  return makeFraction(
    a.n * b.d - b.n * a.d,
    a.d * b.d
  );
};

const multiplyFraction = (
  a: Fraction,
  b: Fraction
): Fraction => {
  return makeFraction(
    a.n * b.n,
    a.d * b.d
  );
};

const divideFraction = (
  a: Fraction,
  b: Fraction
): Fraction => {
  if (b.n === 0) {
    throw new Error("Division by zero.");
  }

  return makeFraction(
    a.n * b.d,
    a.d * b.n
  );
};

const divideByInteger = (
  a: Fraction,
  value: number
): Fraction => {
  return makeFraction(
    a.n,
    a.d * value
  );
};

const negateFraction = (
  a: Fraction
): Fraction => {
  return makeFraction(-a.n, a.d);
};

const fractionEquals = (
  a: Fraction,
  b: Fraction
): boolean => {
  const x = makeFraction(a.n, a.d);
  const y = makeFraction(b.n, b.d);

  return x.n === y.n && x.d === y.d;
};

/* =========================================================
   DECIMAL STRING → EXACT FRACTION
========================================================= */

const decimalToFraction = (
  value: string
): Fraction => {
  const text = value.trim();

  if (!text) {
    return makeFraction(1);
  }

  if (text.includes("/")) {
    const [numerator, denominator] =
      text.split("/");

    const n = parseInt(numerator, 10);
    const d = parseInt(denominator, 10);

    if (
      Number.isNaN(n) ||
      Number.isNaN(d) ||
      d === 0
    ) {
      throw new Error(
        `Invalid fraction: ${text}`
      );
    }

    return makeFraction(n, d);
  }

  if (!text.includes(".")) {
    const n = parseInt(text, 10);

    if (Number.isNaN(n)) {
      throw new Error(
        `Invalid number: ${text}`
      );
    }

    return makeFraction(n);
  }

  const negative = text.startsWith("-");
  const unsigned = negative
    ? text.substring(1)
    : text;

  const parts = unsigned.split(".");
  const whole = parts[0] || "0";
  const decimals = parts[1] || "";

  const denominator =
    Math.pow(10, decimals.length);

  const numerator =
    parseInt(whole, 10) * denominator +
    parseInt(decimals || "0", 10);

  return makeFraction(
    negative ? -numerator : numerator,
    denominator
  );
};

/* =========================================================
   FRACTION TEXT
========================================================= */

const fractionText = (
  value: Fraction
): string => {
  const f = makeFraction(value.n, value.d);

  if (f.d === 1) {
    return String(f.n);
  }

  return `${f.n}/${f.d}`;
};

/* =========================================================
   SUPERSCRIPTS
========================================================= */

const superscriptMap: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
};

const convertSuperscripts = (
  text: string
): string => {
  return text.replace(
    /[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g,
    (match) =>
      match
        .split("")
        .map(
          (char) =>
            superscriptMap[char]
        )
        .join("")
  );
};

/* =========================================================
   NORMALIZE INPUT
========================================================= */

const normalizeInput = (
  input: string
): string => {
  let value = convertSuperscripts(input);

  value = value
    .replace(/\s+/g, "")
    .replace(/∫/g, "")
    .replace(/dx/gi, "")
    .replace(/[−–—]/g, "-")
    .replace(/[×·]/g, "*")
    .replace(/[()]/g, "");

  /* x^5 → x5 */
  value = value.replace(
    /x\^(\d+)/gi,
    "x$1"
  );

  /* Remove multiplication signs before x */
  value = value.replace(
    /(\d)\*x/gi,
    "$1x"
  );

  if (!value) {
    throw new Error(
      "Please enter an expression."
    );
  }

  /*
    For this calculator we intentionally
    support polynomial expressions only.

    Valid:
      4x5+3x2-7x+6
      3x^4-2x+8
      7x-5
      10
      2.5x3
      3/2x2

    Invalid:
      sin(x)
      e^x
      ln(x)

    Those require additional symbolic
    integration rules.
  */

  if (
    !/^[+\-0-9./x]+$/i.test(value)
  ) {
    throw new Error(
      "This calculator currently supports polynomial antiderivatives only. Example: 4x5 + 3x2 - 7x + 6."
    );
  }

  return value;
};

/* =========================================================
   PARSE TERM
========================================================= */

const parseTerm = (
  token: string
): Term => {
  const match = token.match(
    /^([+-]?)(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)?(x(\d+)?)?$/i
  );

  if (!match) {
    throw new Error(
      `Invalid term: ${token}`
    );
  }

  const sign =
    match[1] === "-" ? -1 : 1;

  const coefficientText =
    match[2] || "";

  const hasX = Boolean(match[3]);

  const exponentText = match[4];

  if (
    !coefficientText &&
    !hasX
  ) {
    throw new Error(
      `Invalid term: ${token}`
    );
  }

  let coefficient: Fraction;
  let exponent: number;

  if (hasX) {
    if (!coefficientText) {
      coefficient =
        makeFraction(sign, 1);
    } else {
      const parsed =
        decimalToFraction(
          coefficientText
        );

      coefficient =
        sign === -1
          ? negateFraction(parsed)
          : parsed;
    }

    exponent =
      exponentText === undefined
        ? 1
        : parseInt(
            exponentText,
            10
          );
  } else {
    const parsed =
      decimalToFraction(
        coefficientText
      );

    coefficient =
      sign === -1
        ? negateFraction(parsed)
        : parsed;

    exponent = 0;
  }

  if (exponent < 0) {
    throw new Error(
      "Negative exponents are not supported by this polynomial calculator."
    );
  }

  return {
    coefficient,
    exponent,
    original: token,
  };
};

/* =========================================================
   PARSE COMPLETE EXPRESSION
========================================================= */

const parseExpression = (
  input: string
): Term[] => {
  const normalized =
    normalizeInput(input);

  /*
    Split:

    6x5-4x3+9x2-7x+2

    into:

    6x5
    -4x3
    +9x2
    -7x
    +2
  */

  const tokens =
    normalized.match(
      /[+-]?[^+-]+/g
    );

  if (!tokens) {
    throw new Error(
      "Unable to parse the expression."
    );
  }

  const terms = tokens.map(
    parseTerm
  );

  if (terms.length === 0) {
    throw new Error(
      "No valid terms found."
    );
  }

  return terms;
};

/* =========================================================
   TERM TEXT
========================================================= */

const termText = (
  coefficient: Fraction,
  exponent: number,
  first: boolean
): string => {
  const f = makeFraction(
    coefficient.n,
    coefficient.d
  );

  const negative = f.n < 0;

  const absolute = makeFraction(
    Math.abs(f.n),
    f.d
  );

  let sign = "";

  if (negative) {
    sign = first ? "-" : " - ";
  } else {
    sign = first ? "" : " + ";
  }

  if (exponent === 0) {
    return (
      sign +
      fractionText(absolute)
    );
  }

  const coefficientIsOne =
    absolute.n === absolute.d;

  const coefficientPart =
    coefficientIsOne
      ? ""
      : fractionText(absolute);

  if (exponent === 1) {
    return (
      sign +
      coefficientPart +
      "x"
    );
  }

  return (
    sign +
    coefficientPart +
    `x^${exponent}`
  );
};

/* =========================================================
   BEAUTIFUL FRACTION
========================================================= */

const FractionView: React.FC<{
  value: Fraction;
}> = ({ value }) => {
  const f = makeFraction(
    value.n,
    value.d
  );

  if (f.d === 1) {
    return (
      <span>{f.n}</span>
    );
  }

  const negative = f.n < 0;

  return (
    <span className="inline-flex items-center">
      {negative && (
        <span className="mr-1">
          −
        </span>
      )}

      <span className="inline-flex flex-col items-center leading-none">
        <span className="border-b border-current px-1 pb-1">
          {Math.abs(f.n)}
        </span>

        <span className="px-1 pt-1">
          {f.d}
        </span>
      </span>
    </span>
  );
};

/* =========================================================
   MATH TERM VIEW
========================================================= */

const MathTerm: React.FC<{
  coefficient: Fraction;
  exponent: number;
  first?: boolean;
}> = ({
  coefficient,
  exponent,
  first = false,
}) => {
  const f = makeFraction(
    coefficient.n,
    coefficient.d
  );

  const negative = f.n < 0;

  const absolute = makeFraction(
    Math.abs(f.n),
    f.d
  );

  const coefficientIsOne =
    absolute.n === absolute.d;

  return (
    <span className="inline-flex items-center whitespace-nowrap">

      {!first && (
        <span className="mx-2">
          {negative ? "−" : "+"}
        </span>
      )}

      {first && negative && (
        <span className="mr-1">
          −
        </span>
      )}

      {!coefficientIsOne && (
        <FractionView
          value={absolute}
        />
      )}

      {exponent !== 0 && (
        <span>
          x

          {exponent !== 1 && (
            <sup className="ml-0.5 text-[0.65em]">
              {exponent}
            </sup>
          )}
        </span>
      )}
    </span>
  );
};

/* =========================================================
   RESULT DISPLAY
========================================================= */

const ResultDisplay: React.FC<{
  terms: ResultTerm[];
}> = ({ terms }) => {
  return (
    <div className="overflow-x-auto py-2">
      <div className="flex justify-center items-center min-w-max">

        {terms.map(
          (term, index) => (
            <MathTerm
              key={index}
              coefficient={
                term.coefficient
              }
              exponent={
                term.exponent
              }
              first={index === 0}
            />
          )
        )}

        <span className="ml-3">
          + C
        </span>

      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT – Layout exactly like ContinuityCalculator
========================================================= */

const AntiderivativeCalculator: React.FC =
  () => {
    const [
      expression,
      setExpression,
    ] = useState("");

    const [
      resultTerms,
      setResultTerms,
    ] = useState<ResultTerm[]>(
      []
    );

    const [
      steps,
      setSteps,
    ] = useState<
      SolutionStep[]
    >([]);

    const [
      error,
      setError,
    ] = useState("");

    const [
      calculated,
      setCalculated,
    ] = useState(false);

    /* =====================================================
       COMPUTED FINAL TEXT
    ===================================================== */

    const finalText = useMemo(() => {
      if (
        resultTerms.length === 0
      ) {
        return "";
      }

      return (
        resultTerms
          .map((term, index) =>
            termText(
              term.coefficient,
              term.exponent,
              index === 0
            )
          )
          .join("") +
        " + C"
      );
    }, [resultTerms]);

    /* =====================================================
       VERIFY RESULT
    ===================================================== */

    const verifyResult = (
      originalTerms: Term[],
      integratedTerms: ResultTerm[]
    ): boolean => {
      if (
        originalTerms.length !==
        integratedTerms.length
      ) {
        return false;
      }

      return originalTerms.every(
        (original, index) => {
          const integrated =
            integratedTerms[index];

          /*
            d/dx [Ax^m]
            =
            (A*m)x^(m-1)

            The integrated exponent
            must therefore be original
            exponent + 1.
          */

          if (
            integrated.exponent !==
            original.exponent + 1
          ) {
            return false;
          }

          const differentiated =
            multiplyFraction(
              integrated.coefficient,
              makeFraction(
                integrated.exponent
              )
            );

          return fractionEquals(
            differentiated,
            original.coefficient
          );
        }
      );
    };

    /* =====================================================
       CALCULATE
    ===================================================== */

    const calculate = () => {
      try {
        setError("");
        setCalculated(false);
        setResultTerms([]);
        setSteps([]);

        const originalTerms =
          parseExpression(
            expression
          );

        const integratedTerms: ResultTerm[] =
          [];

        const generatedSteps: SolutionStep[] =
          [];

        /*
          ∫ ax^n dx
          =
          a/(n+1)x^(n+1)
        */

        originalTerms.forEach(
          (term) => {
            const newExponent =
              term.exponent + 1;

            const newCoefficient =
              divideByInteger(
                term.coefficient,
                newExponent
              );

            integratedTerms.push({
              coefficient:
                newCoefficient,
              exponent:
                newExponent,
            });

            let explanation = "";

            if (
              term.exponent === 0
            ) {
              explanation =
                `Since ${termText(
                  term.coefficient,
                  0,
                  true
                )} is a constant, use ∫c dx = cx.`;
            } else {
              explanation =
                `Using the Power Rule, increase the exponent by 1: ${term.exponent} + 1 = ${newExponent}. Then divide the coefficient ${fractionText(
                  term.coefficient
                )} by ${newExponent}.`;
            }

            generatedSteps.push({
              original:
                termText(
                  term.coefficient,
                  term.exponent,
                  true
                ),
              coefficient:
                term.coefficient,
              exponent:
                term.exponent,
              resultCoefficient:
                newCoefficient,
              resultExponent:
                newExponent,
              explanation,
            });
          }
        );

        /*
          IMPORTANT:
          Verify by differentiating
          the generated answer.
        */

        const valid =
          verifyResult(
            originalTerms,
            integratedTerms
          );

        if (!valid) {
          throw new Error(
            "The generated result failed mathematical verification. The answer was not displayed."
          );
        }

        setResultTerms(
          integratedTerms
        );

        setSteps(
          generatedSteps
        );

        setCalculated(true);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to calculate the antiderivative."
        );
      }
    };

    /* =====================================================
       CLEAR
    ===================================================== */

    const clear = () => {
      setExpression("");
      setResultTerms([]);
      setSteps([]);
      setError("");
      setCalculated(false);
    };

    /* =====================================================
       EXAMPLE
    ===================================================== */

    const example = () => {
      setExpression(
        "6x5−4x3+9x2−7x+2"
      );

      setResultTerms([]);
      setSteps([]);
      setError("");
      setCalculated(false);
    };

    /* =====================================================
       UI – Layout exactly like ContinuityCalculator
    ===================================================== */

    return (
      <div className="space-y-4">
        {/* Info box - like ContinuityCalculator */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            <p className="font-medium">Power Rule for Integration:</p>
            <p className="font-serif text-base text-blue-700 mt-1">
              ∫ axⁿ dx = (a/(n+1))xⁿ⁺¹ + C
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Each polynomial term is integrated independently using the power rule.
            </p>
          </div>
        </div>

        {/* Input grid - like ContinuityCalculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              f(x)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xl font-mono text-blue-600">∫</span>
              <input
                type="text"
                value={expression}
                onChange={(e) =>
                  setExpression(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    calculate();
                  }
                }}
                placeholder="4x5 + 3x2 - 7x + 6"
                className="flex-1 px-4 py-2 border border-[#E5E7EB] bg-white text-[#111827] rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563EB] transition font-mono"
              />
              <span className="text-lg text-gray-400 font-mono">dx</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-1">
              Operation
            </label>
            <div className="px-4 py-2 border border-[#E5E7EB] bg-gray-50 text-[#111827] rounded-xl font-mono text-sm">
              ∫ f(x) dx
            </div>
          </div>
        </div>

        {/* Action buttons - like ContinuityCalculator */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={calculate}
            className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-bold transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Calculate Antiderivative
          </button>
          <button
            onClick={clear}
            className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition font-medium text-black border border-gray-200 flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* RESULT */}
        {calculated && (
          <>
            {/* Result card - like ContinuityCalculator */}
            <div className="p-4 border rounded-lg bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-lg font-semibold mb-2">
                    <span className="text-green-700">✅ Antiderivative Found</span>
                  </div>

                  <div className="bg-white rounded-xl p-4 overflow-x-auto border border-gray-200">
                    <p className="text-sm text-gray-400 mb-2">Indefinite Integral</p>
                    <div className="text-xl md:text-2xl font-serif text-blue-700 flex items-center min-w-max flex-wrap">
                      <span className="mr-3">∫({expression}) dx =</span>
                      <ResultDisplay terms={resultTerms} />
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="mt-3 flex items-start gap-2 p-3 bg-green-100 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">Result Verified</p>
                      <p className="text-xs text-green-700">
                        The calculator differentiates the generated antiderivative
                        and checks that it reproduces the original expression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Method card */}
            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Method Used</h3>
              <p className="text-sm text-gray-600">Power Rule for Integration</p>
              <div className="mt-2 bg-white rounded-xl p-4 text-blue-700 font-serif text-xl border border-gray-200">
                ∫ axⁿ dx = 
                <span className="inline-flex flex-col items-center align-middle leading-none mx-2">
                  <span className="border-b border-current px-2 pb-1">a</span>
                  <span className="pt-1">n + 1</span>
                </span>
                xⁿ⁺¹ + C
              </div>
            </div>

            {/* Steps */}
            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Step-by-Step Explanation</h3>
              <p className="text-sm text-gray-500 mb-4">Each term is integrated independently.</p>

              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        Integrate: <span className="text-blue-700 font-mono">{step.original}</span>
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{step.explanation}</p>

                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3">
                      <p className="text-xs text-gray-500 mb-1">Result</p>
                      <div className="text-blue-700 font-serif text-lg">
                        ∫{step.original} dx =
                        <span className="ml-2">
                          <MathTerm
                            coefficient={step.resultCoefficient}
                            exponent={step.resultExponent}
                            first
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Answer */}
              <div className="mt-4 rounded-xl border border-blue-300 bg-blue-50 p-4">
                <p className="text-sm text-gray-500 mb-2">Final Answer</p>
                <div className="text-2xl md:text-3xl font-serif text-blue-700 overflow-x-auto">
                  <ResultDisplay terms={resultTerms} />
                </div>
                <p className="text-xs text-gray-500 mt-3">C is the constant of integration.</p>
              </div>
            </div>
          </>
        )}

        {/* Supported Input - like ContinuityCalculator's info box style */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <h4 className="font-bold text-sm text-gray-700 mb-2">Supported Input</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-xs text-gray-600">
            <div>✓ Polynomial expressions</div>
            <div>✓ Positive exponents</div>
            <div>✓ Negative coefficients</div>
            <div>✓ Constants</div>
            <div>✓ Decimal coefficients</div>
            <div>✓ Fraction coefficients</div>
            <div>✓ x² / x^2 / x2</div>
            <div>✓ Superscript notation</div>
          </div>
        </div>
      </div>
    );
  };

export default AntiderivativeCalculator;