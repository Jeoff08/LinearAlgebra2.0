import { AlgebraSolver } from '../src/Solver/AlgebraSolver.ts';

const solver = new AlgebraSolver();

interface TestCase {
  input: string;
  expected?: string;
  check?: (res: string, verified?: string) => boolean;
}

const testCategories: { name: string; cases: TestCase[] }[] = [
  {
    name: "1. Simplify Expressions",
    cases: [
      { input: "2x + 3x", expected: "5x" },
      { input: "5x - 2x + 7", expected: "3x + 7" },
      { input: "4a + 6a - 3", expected: "10a - 3" },
      { input: "3(x + 2) + 2x", expected: "5x + 6" },
      { input: "2(x - 4) + 5(x + 1)", expected: "7x - 3" },
      { input: "(x + 2)(x - 3)", expected: "x² - x - 6" },
      { input: "(2x + 3)(x - 4)", expected: "2x² - 5x - 12" },
      { input: "(x + 5)² - (x - 2)(x + 2)", expected: "10x + 29" },
      { input: "3x² + 4x - 2x² + 7x - 5", expected: "x² + 11x - 5" },
      { input: "-(x - 3) + 2(x + 4)", expected: "x + 11" },
      { input: "2(3x - 1) - 4(x + 2)", expected: "2x - 10" }
    ]
  },
  {
    name: "2. Linear Equations",
    cases: [
      { input: "2x + 5 = 13", expected: "x = 4" },
      { input: "3x = 21", expected: "x = 7" },
      { input: "x - 7 = 10", expected: "x = 17" },
      { input: "3(x - 2) = 12", expected: "x = 6" },
      { input: "5x - 7 = 18", expected: "x = 5" },
      { input: "2(x + 3) + 4 = 18", expected: "x = 4" },
      { input: "3x + 5 = 2x + 12", expected: "x = 7" },
      { input: "4(x - 2) + 3 = 2(x + 5)", expected: "x = 15/2" },
      { input: "5(x + 2) - 3x = 4(x - 1) + 10", expected: "x = 2" },
      { input: "2x + 5 = 2x + 5", expected: "All real numbers" },
      { input: "3x + 2 = 3x + 7", expected: "No solution" }
    ]
  },
  {
    name: "3. Quadratic Equations",
    cases: [
      { input: "x² - 5x + 6 = 0", expected: "x = 2 or x = 3" },
      { input: "x² + 7x + 12 = 0", expected: "x = -4 or x = -3" },
      { input: "x² - 9 = 0", expected: "x = -3 or x = 3" },
      { input: "2x² - 8x = 0", expected: "x = 0 or x = 4" },
      { input: "x² + 4x + 4 = 0", expected: "x = -2" },
      { input: "2x² + 5x - 3 = 0", expected: "x = -3 or x = 1/2" },
      { input: "x² + x - 1 = 0", check: (res, v) => res.includes("√5") || res.includes("0.618") },
      { input: "3x² - 2x - 1 = 0", expected: "x = -1/3 or x = 1" },
      { input: "2x² + 3x + 7 = 0", check: (res, v) => res.includes("-3/4") || res.includes("-0.75") }
    ]
  },
  {
    name: "4. Linear Inequalities",
    cases: [
      { input: "2x + 3 > 7", expected: "x > 2" },
      { input: "x - 5 ≤ 10", expected: "x <= 15" },
      { input: "4x ≥ 20", expected: "x >= 5" },
      { input: "3(x - 2) > 9", expected: "x > 5" },
      { input: "5x - 7 ≤ 18", expected: "x <= 5" },
      { input: "2(x + 4) - 3 > 7", expected: "x > 1" },
      { input: "-2x + 3 > 7", expected: "x < -2" },
      { input: "-5x ≤ 20", expected: "x >= -4" },
      { input: "4 - 3x ≥ 10", expected: "x <= -2" }
    ]
  },
  {
    name: "5. Quadratic Inequalities",
    cases: [
      { input: "x² - 4 ≤ 0", expected: "-2 ≤ x ≤ 2" },
      { input: "x² - 9 > 0", expected: "x < -3 or x > 3" },
      { input: "x² - 5x + 6 ≥ 0", expected: "x ≤ 2 or x ≥ 3" },
      { input: "x² + x - 6 < 0", expected: "-3 < x < 2" },
      { input: "x² - 4x + 3 ≥ 0", expected: "x ≤ 1 or x ≥ 3" },
      { input: "2x² - 8x ≤ 0", expected: "0 ≤ x ≤ 4" },
      { input: "x² - 6x + 8 > 0", expected: "x < 2 or x > 4" },
      { input: "2x² + x - 3 ≤ 0", expected: "-3/2 ≤ x ≤ 1" },
      { input: "x² + 4x + 3 < 0", expected: "-3 < x < -1" }
    ]
  },
  {
    name: "6. Absolute Value Expressions",
    cases: [
      { input: "|-7|", expected: "7" },
      { input: "|5|", expected: "5" },
      { input: "|0|", expected: "0" },
      { input: "|3 - 8|", expected: "5" },
      { input: "|10 - 4|", expected: "6" },
      { input: "|-5 + 2|", expected: "3" },
      { input: "|2(3 - 5)|", expected: "4" },
      { input: "|4 - 10 + 3|", expected: "3" },
      { input: "|-3² + 5|", expected: "4" }
    ]
  },
  {
    name: "7. Absolute Value Equations",
    cases: [
      { input: "|x - 3| = 5", expected: "x = 8 or x = -2" },
      { input: "|x + 2| = 7", expected: "x = 5 or x = -9" },
      { input: "|2x| = 10", expected: "x = 5 or x = -5" },
      { input: "|2x + 1| = 7", expected: "x = 3 or x = -4" },
      { input: "|3x - 4| = 8", expected: "x = 4 or x = -4/3" },
      { input: "|5 - x| = 9", expected: "x = -4 or x = 14" },
      { input: "|x - 3| = 0", expected: "x = 3" },
      { input: "|x + 2| = -5", expected: "No solution" },
      { input: "|2x - 4| = 0", expected: "x = 2" }
    ]
  },
  {
    name: "8. Absolute Value Inequalities",
    cases: [
      { input: "|x - 3| < 5", check: (res, v) => res.includes("-2 < x < 8") && (v?.includes("(-2, 8)") ?? false) },
      { input: "|x + 2| < 6", check: (res, v) => res.includes("-8 < x < 4") && (v?.includes("(-8, 4)") ?? false) },
      { input: "|2x + 1| < 7", check: (res, v) => res.includes("-4 < x < 3") && (v?.includes("(-4, 3)") ?? false) },
      { input: "|x - 4| ≤ 3", check: (res, v) => res.includes("1 ≤ x ≤ 7") && (v?.includes("[1, 7]") ?? false) },
      { input: "|2x - 5| ≤ 9", check: (res, v) => res.includes("-2 ≤ x ≤ 7") && (v?.includes("[-2, 7]") ?? false) },
      { input: "|x - 3| > 5", check: (res, v) => res.includes("x < -2 or x > 8") && (v?.includes("(-∞, -2)") ?? false) },
      { input: "|x + 1| > 4", check: (res, v) => res.includes("x < -5 or x > 3") && (v?.includes("(-∞, -5)") ?? false) },
      { input: "|2x + 3| > 7", check: (res, v) => res.includes("x < -5 or x > 2") && (v?.includes("(-∞, -5)") ?? false) },
      { input: "|x - 2| ≥ 6", check: (res, v) => res.includes("x ≤ -4 or x ≥ 8") && (v?.includes("(-∞, -4]") ?? false) },
      { input: "|2x + 1| ≥ 7", check: (res, v) => res.includes("x ≤ -4 or x ≥ 3") && (v?.includes("(-∞, -4]") ?? false) },
      { input: "|x - 3| < -2", expected: "No solution" },
      { input: "|x - 3| > -2", expected: "All real numbers" },
      { input: "|x - 3| ≤ 0", expected: "x = 3" },
      { input: "|x - 3| ≥ 0", expected: "All real numbers" }
    ]
  }
];

console.log("====================================================");
console.log("           ALGEBRA SOLVER VALIDATION                ");
console.log("====================================================\n");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

for (const cat of testCategories) {
  console.log(`\n### ${cat.name}`);
  for (const tc of cat.cases) {
    totalTests++;
    try {
      const res = solver.solve(tc.input);
      let passed = true;
      
      if (res.result.startsWith('Error:') || res.result.includes('NaN') || res.result.includes('undefined')) {
        passed = false;
      } else if (tc.expected && res.result !== tc.expected && !res.result.includes(tc.expected)) {
        passed = false;
      } else if (tc.check && !tc.check(res.result, res.verified)) {
        passed = false;
      }
      
      if (passed) {
        passedTests++;
        console.log(`  ✓ [PASS] "${tc.input}" => "${res.result}" (Verified: ${res.verified})`);
      } else {
        failedTests++;
        console.log(`  ✗ [FAIL] "${tc.input}" => Got "${res.result}", Verified: "${res.verified}", Expected: "${tc.expected || 'custom check'}"`);
      }
    } catch (e: any) {
      failedTests++;
      console.log(`  ✗ [EXCP] "${tc.input}" => ${e.message}`);
    }
  }
}

console.log(`\n====================================================`);
console.log(`RESULTS: Total: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log(`====================================================`);
