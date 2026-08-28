// import { AlgebraSolver } from '../src/Solver/AlgebraSolver.ts';

// const solver = new AlgebraSolver();

// const equations = [
//   "2x + 5 = 13",
//   "3x = 21",
//   "x - 7 = 10",
//   "3(x - 2) = 12",
//   "5x - 7 = 18",
//   "2(x + 3) + 4 = 18",
//   "3x + 5 = 2x + 12",
//   "4(x - 2) + 3 = 2(x + 5)",
//   "5(x + 2) - 3x = 4(x - 1) + 10",
//   "2x + 5 = 2x + 5",
//   "3x + 2 = 3x + 7"
// ];

// for (const eq of equations) {
//   console.log(`\n======================================================`);
//   console.log(`Equation: ${eq}`);
//   console.log(`======================================================`);
//   const res = solver.solve(eq);
//   console.log(`Result: ${res.result}`);
//   console.log(`Verified: ${res.verified}`);
//   console.log(`Steps:`);
//   for (const s of res.steps) {
//     console.log(`  [${s.step}]: ${s.explanation}`);
//   }
// }
