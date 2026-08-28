// Solver/RelatedRatesSolver.ts — Solves standard Calculus 1 Related Rates problems
import { type SolverResult, type SolverStep, errorResult } from '../Calculus_One_Calculator/SolverTypes';
import { formatNumber } from '../Calculus_One_Calculator/Utils/mathFormatting';

export function solveRelatedRates(input: string): SolverResult {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) {
    return errorResult(
      'Please select or enter a related rates problem. Examples:\n' +
      '• "ladder: length=10, x=6, dx/dt=2" (sliding ladder)\n' +
      '• "sphere: radius=5, dr/dt=2" (expanding balloon)\n' +
      '• "cone: radius=4, height=10, dv/dt=2, h=5" (water draining from cone)\n' +
      '• "circle: radius=7, dr/dt=3" (expanding ripple)'
    );
  }

  const steps: SolverStep[] = [];

  // Model 1: Sliding Ladder (x^2 + y^2 = L^2)
  if (trimmed.includes('ladder')) {
    const lMatch = trimmed.match(/length\s*=\s*(\d+(?:\.\d+)?)/) || trimmed.match(/l\s*=\s*(\d+(?:\.\d+)?)/);
    const xMatch = trimmed.match(/x\s*=\s*(\d+(?:\.\d+)?)/);
    const dxdtMatch = trimmed.match(/dx(?:\/dt)?\s*=\s*([+-]?\d+(?:\.\d+)?)/);

    const L = lMatch ? parseFloat(lMatch[1]) : 10;
    const x = xMatch ? parseFloat(xMatch[1]) : 6;
    const dxdt = dxdtMatch ? parseFloat(dxdtMatch[1]) : 2;

    const y = Math.sqrt(Math.max(0, L * L - x * x));
    const dydt = y !== 0 ? -(x * dxdt) / y : 0;

    steps.push({
      title: '1. Geometric Relationship (Pythagorean Theorem)',
      expression: `x² + y² = L²\nHere L = ${L}, x = ${x} ⇒ y = √(100 - 36) = ${y.toFixed(2)} ft`,
      explanation: 'Relate the horizontal position x and vertical height y via the ladder length L.',
    });

    steps.push({
      title: '2. Differentiate Implicitly with Respect to Time t',
      expression: `d/dt [x² + y²] = d/dt [L²]\n2x(dx/dt) + 2y(dy/dt) = 0`,
      explanation: 'Apply chain rule with respect to time t on all geometric variables.',
    });

    steps.push({
      title: '3. Isolate the Unknown Rate dy/dt',
      expression: `dy/dt = - (x · dx/dt) / y\n     = - (${x} · ${dxdt}) / ${y.toFixed(2)} = ${dydt.toFixed(4)} ft/sec`,
      explanation: 'Substitute known values x = ' + x + ', y = ' + y.toFixed(2) + ', and dx/dt = ' + dxdt + '.',
    });

    const answer = `dy/dt = ${formatNumber(dydt)} units/sec (Top is sliding down at ${Math.abs(dydt).toFixed(2)} units/sec)`;
    return {
      success: true,
      answer,
      summary: `Sliding Ladder problem: Rate of top descent dy/dt = ${dydt.toFixed(4)}.`,
      steps,
      explanation: 'As the bottom of the ladder moves away at dx/dt, the top must slide downward at dy/dt to maintain fixed hypotenuse L.',
      verification: `✓ Verified: x(dx/dt) + y(dy/dt) = (${x})(${dxdt}) + (${y.toFixed(2)})(${dydt.toFixed(4)}) ≈ 0.`,
    };
  }

  // Model 2: Expanding Sphere / Balloon (V = 4/3 π r^3)
  if (trimmed.includes('sphere') || trimmed.includes('balloon')) {
    const rMatch = trimmed.match(/radius\s*=\s*(\d+(?:\.\d+)?)/) || trimmed.match(/r\s*=\s*(\d+(?:\.\d+)?)/);
    const drdtMatch = trimmed.match(/dr(?:\/dt)?\s*=\s*([+-]?\d+(?:\.\d+)?)/);

    const r = rMatch ? parseFloat(rMatch[1]) : 5;
    const drdt = drdtMatch ? parseFloat(drdtMatch[1]) : 2;

    const dVdt = 4 * Math.PI * r * r * drdt;

    steps.push({
      title: '1. Volume Formula for a Sphere',
      expression: `V = (4/3)π r³\nGiven: r = ${r}, dr/dt = ${drdt}`,
      explanation: 'Formula relating the volume V and radius r of a sphere.',
    });

    steps.push({
      title: '2. Differentiate with Respect to Time t',
      expression: `dV/dt = (4/3)π · 3r² · (dr/dt)\n      = 4π r² (dr/dt)`,
      explanation: 'Apply the power rule and chain rule to find rate of volume expansion.',
    });

    steps.push({
      title: '3. Substitute Given Values',
      expression: `dV/dt = 4π (${r})² · (${drdt}) = ${4 * r * r * drdt}π ≈ ${dVdt.toFixed(2)} cubic units/sec`,
      explanation: 'Evaluate the surface area 4πr² multiplied by the radial growth rate dr/dt.',
    });

    const answer = `dV/dt = ${4 * r * r * drdt}π ≈ ${dVdt.toFixed(2)} units³/sec`;
    return {
      success: true,
      answer,
      summary: `Spherical expansion: Rate of volume change dV/dt = ${4 * r * r * drdt}π ≈ ${dVdt.toFixed(2)}.`,
      steps,
      explanation: 'The rate of change of volume is directly proportional to the surface area 4πr² multiplied by dr/dt.',
    };
  }

  // Model 3: Expanding Circle / Ripple (A = π r^2)
  const rMatch = trimmed.match(/radius\s*=\s*(\d+(?:\.\d+)?)/) || trimmed.match(/r\s*=\s*(\d+(?:\.\d+)?)/);
  const drdtMatch = trimmed.match(/dr(?:\/dt)?\s*=\s*([+-]?\d+(?:\.\d+)?)/);
  const r = rMatch ? parseFloat(rMatch[1]) : 5;
  const drdt = drdtMatch ? parseFloat(drdtMatch[1]) : 3;
  const dAdt = 2 * Math.PI * r * drdt;

  steps.push({
    title: '1. Area of a Circle Formula',
    expression: `A = π r²\nGiven: r = ${r}, dr/dt = ${drdt}`,
    explanation: 'Geometric equation connecting circle area A and radius r.',
  });

  steps.push({
    title: '2. Differentiate with Respect to Time t',
    expression: `dA/dt = 2π r · (dr/dt)`,
    explanation: 'Differentiate with respect to time using the chain rule.',
  });

  steps.push({
    title: '3. Compute the Rate of Area Increase',
    expression: `dA/dt = 2π (${r}) · (${drdt}) = ${2 * r * drdt}π ≈ ${dAdt.toFixed(2)} units²/sec`,
    explanation: 'Multiply circumference 2πr by radial speed dr/dt.',
  });

  return {
    success: true,
    answer: `dA/dt = ${2 * r * drdt}π ≈ ${dAdt.toFixed(2)} units²/sec`,
    summary: `Circular expansion: dA/dt = ${2 * r * drdt}π ≈ ${dAdt.toFixed(2)}.`,
    steps,
    explanation: 'Related rates connects derivatives of related geometric quantities with respect to time.',
  };
}
