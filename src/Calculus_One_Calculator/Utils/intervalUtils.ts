// Utils/intervalUtils.ts — Interval notation, unions, and sign testing utilities

export interface Interval {
  start: number;
  end: number;
  includeStart: boolean;
  includeEnd: boolean;
}

export function formatInterval(iv: Interval): string {
  const leftBracket = iv.includeStart ? '[' : '(';
  const rightBracket = iv.includeEnd ? ']' : ')';
  const startStr = iv.start === -Infinity ? '-∞' : String(iv.start);
  const endStr = iv.end === Infinity ? '∞' : String(iv.end);
  return `${leftBracket}${startStr}, ${endStr}${rightBracket}`;
}

export function formatIntervalList(list: Interval[]): string {
  if (list.length === 0) return '∅ (None)';
  return list.map(formatInterval).join(' ∪ ');
}

export interface SignTestResult {
  interval: Interval;
  testPoint: number;
  testValue: number;
  sign: '+' | '-' | '0';
  behavior: string;
}

/** Divide real line by critical points and evaluate test points to determine signs */
export function performSignChart(
  evalFn: (x: number) => number,
  criticalPoints: number[],
  behaviorPositive: string = 'Increasing',
  behaviorNegative: string = 'Decreasing'
): SignTestResult[] {
  const sorted = [...criticalPoints].filter(Number.isFinite).sort((a, b) => a - b);
  // Remove duplicates
  const uniquePoints: number[] = [];
  for (const p of sorted) {
    if (!uniquePoints.some(u => Math.abs(u - p) < 1e-4)) {
      uniquePoints.push(p);
    }
  }

  const boundaries = [-Infinity, ...uniquePoints, Infinity];
  const results: SignTestResult[] = [];

  for (let i = 0; i < boundaries.length - 1; i++) {
    const start = boundaries[i];
    const end = boundaries[i + 1];

    let testPoint: number;
    if (start === -Infinity && end === Infinity) {
      testPoint = 0;
    } else if (start === -Infinity) {
      testPoint = end - 1;
    } else if (end === Infinity) {
      testPoint = start + 1;
    } else {
      testPoint = (start + end) / 2;
    }

    const testValue = evalFn(testPoint);
    const sign: '+' | '-' | '0' = testValue > 1e-7 ? '+' : (testValue < -1e-7 ? '-' : '0');
    const behavior = sign === '+' ? behaviorPositive : (sign === '-' ? behaviorNegative : 'Constant / Neutral');

    results.push({
      interval: {
        start,
        end,
        includeStart: false,
        includeEnd: false,
      },
      testPoint: Number(testPoint.toFixed(3)),
      testValue: Number(testValue.toFixed(4)),
      sign,
      behavior,
    });
  }

  return results;
}
